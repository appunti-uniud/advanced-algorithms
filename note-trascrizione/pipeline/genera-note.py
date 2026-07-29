#!/usr/bin/env python3
"""Genera NOTE-EDITORIALI.md a partire dalle trascrizioni strutturate in note-trascrizione/trascrizioni/."""
import json, glob, os, collections, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
T = f'{ROOT}/note-trascrizione/trascrizioni'
OUT = f'{ROOT}/note-trascrizione/NOTE-EDITORIALI.md'

CAP = json.load(open(f'{ROOT}/note-trascrizione/pipeline/capitoli.json'))
pag2cap = {}
for c in CAP:
    for p in c['pagine']:
        pag2cap.setdefault(p, []).append(f"{c['id']} {c['titolo']}")

ETICHETTE = {
    'correzione':      ('Correzioni',      'Errori negli appunti corretti con certezza.'),
    'ricostruzione':   ('Ricostruzioni',   'Parti dedotte o ricomposte dal contesto e dalla teoria.'),
    'lacuna':          ('Lacune colmate',  "Buchi negli appunti riempiti usando la teoria standard o gli appunti del corso dell'anno precedente."),
    'lettura-incerta': ('Letture incerte', 'Grafemi ambigui: come sono stati sciolti e con quale ragionamento.'),
    'errore-anno-prec':     ("Errori negli appunti dell'anno precedente",
                             "Punti in cui gli appunti del corso dell'anno precedente risultano sbagliati o mal posti."),
    'divergenza-anno-prec': ("Divergenze dagli appunti dell'anno precedente",
                             "Dove gli appunti manoscritti e quelli dell'anno precedente discordano, e quale versione e stata tenuta."),
    'figura':          ('Figure',          'Come sono stati interpretati e resi i disegni.'),
    'altro':           ('Altre scelte',    'Scelte di resa, struttura e stile.'),
}
ORDINE = ['correzione', 'errore-anno-prec', 'divergenza-anno-prec', 'lacuna', 'ricostruzione',
          'lettura-incerta', 'figura', 'altro']


def main():
    note = []
    pagine = 0
    for f in sorted(glob.glob(f'{T}/p*.json')):
        try:
            d = json.load(open(f))
        except Exception as e:
            print(f'  ! illeggibile {os.path.basename(f)}: {e}', file=sys.stderr)
            continue
        pagine += 1
        for n in d.get('note', []):
            n.setdefault('pagina', d.get('pagina'))
            note.append(n)

    per_tipo = collections.defaultdict(list)
    for n in note:
        per_tipo[n.get('tipo', 'altro')].append(n)

    aperti = [n for n in note if not n.get('risolto', True)]

    L = []
    A = L.append
    A('# Note editoriali\n')
    A('Registro di **tutte** le scelte fatte trascrivendo `appunti.pdf` in LaTeX: correzioni, ')
    A('ricostruzioni, letture incerte, divergenze dalle altre fonti e interpretazioni delle figure.\n')
    A('Serve a poter ricontrollare ogni singola decisione contro la scansione originale.\n')
    A(f'\n**{len(note)} note** su **{pagine} pagine** trascritte.\n')
    A('\nOgni voce indica la pagina della scansione: nel PDF compilato la stessa pagina e richiamata ')
    A('a margine da `\\scan{n}`, cosi da poter confrontare i due documenti riga per riga.\n')

    A('\n## Riepilogo\n')
    A('| Tipo | Voci |')
    A('|---|---:|')
    for t in ORDINE:
        if per_tipo.get(t):
            A(f'| {ETICHETTE[t][0]} | {len(per_tipo[t])} |')
    A(f'| **Totale** | **{len(note)}** |')

    if aperti:
        A('\n## ⚠️ Punti rimasti irrisolti\n')
        A('Questi sono gli unici punti in cui il dubbio **non** e stato sciolto: nel PDF compaiono ')
        A('marcati con gli ambienti `dubbio` / `lacuna`. Sono quelli da guardare per primi.\n')
        for n in sorted(aperti, key=lambda x: (x.get('pagina') or 0)):
            p = n.get('pagina')
            A(f"\n- **p.{p}** *({n.get('tipo')})* — {n.get('testo','').strip()}")
        A('')

    for t in ORDINE:
        voci = per_tipo.get(t)
        if not voci:
            continue
        titolo, desc = ETICHETTE[t]
        A(f'\n## {titolo}\n')
        A(f'{desc}\n')
        for n in sorted(voci, key=lambda x: (x.get('pagina') or 0)):
            p = n.get('pagina')
            cap = pag2cap.get(p, [])
            capstr = f" · cap. {cap[0].split()[0]}" if cap else ''
            flag = '' if n.get('risolto', True) else ' **[IRRISOLTO]**'
            A(f"\n- **p.{p}**{capstr}{flag} — {n.get('testo','').strip()}")
        A('')

    # ---- esito della verifica avversariale ----
    ver = []
    for f in sorted(glob.glob(f'{ROOT}/note-trascrizione/verifiche/p*.json')):
        try:
            ver.append(json.load(open(f)))
        except Exception:
            pass
    corr = []
    for f in sorted(glob.glob(f'{ROOT}/note-trascrizione/correzioni/*.json')):
        try:
            corr.append(json.load(open(f)))
        except Exception:
            pass

    if ver:
        tot = sum(len(v.get('problemi', [])) for v in ver)
        gravi = sum(1 for v in ver for p in v.get('problemi', []) if p.get('gravita') == 'alta')
        A('\n## Verifica avversariale\n')
        A('Ogni pagina e stata riletta da un agente diverso da quello che l\'aveva trascritta, con il ')
        A('compito esplicito di **trovarne i difetti**: fedelta alla scansione e correttezza ')
        A('matematica e logica di definizioni, dimostrazioni ed esempi.\n')
        A(f'\n**{len(ver)} pagine verificate**, {tot} rilievi, di cui {gravi} di gravita alta.\n')

    if corr:
        applicate = [(c.get('capitolo'), a) for c in corr for a in c.get('applicate', [])]
        respinte = [(c.get('capitolo'), r) for c in corr for r in c.get('respinte', [])]
        A(f'\nDi questi, **{len(applicate)} sono stati applicati** e **{len(respinte)} respinti** ')
        A('perche giudicati infondati in seconda lettura.\n')

        if applicate:
            A('\n### Correzioni applicate dopo la verifica\n')
            for cap, a in sorted(applicate, key=lambda x: (x[1].get('pagina') or 0)):
                A(f"\n- **p.{a.get('pagina')}** · cap. {cap} *({a.get('categoria')})* — {a.get('cosa','').strip()}")
            A('')

        if respinte:
            A('\n### Segnalazioni respinte\n')
            A('Rilievi della verifica che, riesaminati, sono risultati infondati: il testo e stato ')
            A('lasciato com\'era. Sono elencati perche il ragionamento che li scarta e a sua volta ')
            A('una scelta editoriale da poter ricontrollare.\n')
            for cap, r in sorted(respinte, key=lambda x: (x[1].get('pagina') or 0)):
                A(f"\n- **p.{r.get('pagina')}** · cap. {cap} — ~~{r.get('cosa','').strip()}~~")
                A(f"  \n  **Perche no:** {r.get('perche','').strip()}")
            A('')

    open(OUT, 'w').write('\n'.join(L) + '\n')
    print(f'scritto {OUT}: {len(note)} note da {pagine} pagine, {len(aperti)} irrisolte, '
          f'{len(ver)} verifiche, {sum(len(c.get("applicate", [])) for c in corr)} correzioni applicate')


if __name__ == '__main__':
    main()
