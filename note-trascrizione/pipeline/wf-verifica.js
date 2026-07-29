export const meta = {
  name: 'appunti-verifica',
  description: 'Verifica avversariale: rilegge la scansione contro il LaTeX e ne controlla la correttezza logica',
  phases: [
    { title: 'Figura mancante', detail: 'ricostruisce p62-painter' },
    { title: 'Verifica', detail: '87 agenti, uno per pagina, ognuno scrive su disco' },
  ],
}

const ROOT = '/home/rob/UNI/algoritmi_avanzati'
const B = `${ROOT}/.build`
const P2F = {"1": [{"id": "01", "file": "lezioni/01-introduzione.tex", "titolo": "Introduzione e pattern matching esatto", "supporto": ["L01"]}], "2": [{"id": "01", "file": "lezioni/01-introduzione.tex", "titolo": "Introduzione e pattern matching esatto", "supporto": ["L01"]}], "3": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "4": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "5": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "6": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "7": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "8": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "9": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}, {"id": "03", "file": "lezioni/03-boyer-moore.tex", "titolo": "Boyer--Moore", "supporto": ["L03"]}], "10": [{"id": "03", "file": "lezioni/03-boyer-moore.tex", "titolo": "Boyer--Moore", "supporto": ["L03"]}], "11": [{"id": "03", "file": "lezioni/03-boyer-moore.tex", "titolo": "Boyer--Moore", "supporto": ["L03"]}], "12": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "13": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "14": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "15": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "16": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "17": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "18": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "19": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "20": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "21": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "22": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "23": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "24": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "25": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "26": [{"id": "06", "file": "lezioni/06-karp-rabin.tex", "titolo": "Karp--Rabin", "supporto": ["L06"]}], "27": [{"id": "06", "file": "lezioni/06-karp-rabin.tex", "titolo": "Karp--Rabin", "supporto": ["L06"]}], "28": [{"id": "06", "file": "lezioni/06-karp-rabin.tex", "titolo": "Karp--Rabin", "supporto": ["L06"]}], "29": [{"id": "07", "file": "lezioni/07-shift-and.tex", "titolo": "Shift--And", "supporto": ["L07"]}], "30": [{"id": "07", "file": "lezioni/07-shift-and.tex", "titolo": "Shift--And", "supporto": ["L07"]}], "31": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "32": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "33": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "34": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "35": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "36": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "37": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "38": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "39": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "40": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "41": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "42": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "43": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "44": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "45": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "46": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "47": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "48": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}], "49": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}], "50": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}], "51": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}, {"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}], "52": [{"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}], "53": [{"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}], "54": [{"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}, {"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "55": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "56": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "57": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "58": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "59": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "60": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "61": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "62": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "63": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "64": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "65": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "66": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "67": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "68": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "69": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "70": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "71": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "72": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}, {"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "73": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "74": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "75": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "76": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "77": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "78": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "79": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}, {"id": "A", "file": "lezioni/A-weisfeiler-leman.tex", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "supporto": []}], "83": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "84": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "85": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "86": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "87": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "88": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "80": [{"id": "A", "file": "lezioni/A-weisfeiler-leman.tex", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "supporto": []}], "81": [{"id": "A", "file": "lezioni/A-weisfeiler-leman.tex", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "supporto": []}]}
const PAGINE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88]

const pad = n => String(n).padStart(2, '0')
const imgs = n => [`${B}/pages/p${pad(n)}_full.png`, `${B}/pages/p${pad(n)}_b1.png`, `${B}/pages/p${pad(n)}_b2.png`, `${B}/pages/p${pad(n)}_b3.png`]

const SCHEMA = {
  type: 'object',
  properties: {
    pagina: { type: 'integer' },
    esito: { type: 'string', enum: ['ok', 'problemi-minori', 'problemi-gravi'] },
    file_scritto: { type: 'string' },
    problemi: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          gravita: { type: 'string', enum: ['alta', 'media', 'bassa'] },
          categoria: { type: 'string', enum: ['omissione', 'trascrizione-errata', 'errore-matematico', 'errore-logico', 'notazione', 'figura', 'latex'] },
          dove: { type: 'string', description: 'punto preciso nel file: sezione, ambiente o formula' },
          descrizione: { type: 'string' },
          correzione: { type: 'string', description: 'la correzione concreta da applicare' },
        },
        required: ['gravita', 'categoria', 'dove', 'descrizione', 'correzione'],
      },
    },
  },
  required: ['pagina', 'esito', 'file_scritto', 'problemi'],
}

phase('Figura mancante')
await agent(
  `Leggi ${B}/CONVENZIONI.md.

COMPITO: ricostruire in TikZ l'unica figura rimasta allo stato di stub: **p62-painter**.

Specifica: ${B}/figure/spec/p62-painter.md
Immagini della pagina 62: ${imgs(62).join('\n')}
Capitolo in cui compare: ${ROOT}/lezioni/13-randauto.tex

Riguarda il painter's algorithm applicato alle partizioni binarie del piano. Interpreta il
disegno con le tue conoscenze di geometria computazionale e ridisegnalo corretto.

Scrivi ${ROOT}/tikz/p62-painter.tikz (solo l'ambiente tikzpicture, niente figure/caption) e
verificalo con Bash:  ${B}/prova-tikz.sh p62-painter
Correggi e ripeti finche non stampa OK senza segnalare che e troppo larga.`,
  { label: 'p62-painter', phase: 'Figura mancante' }
)

phase('Verifica')

const res = await parallel(PAGINE.map(p => () => {
  const caps = P2F[String(p)] || []
  const supporto = [...new Set(caps.flatMap(c => c.supporto))]
  return agent(
    `Leggi PRIMA ${B}/CONVENZIONI.md (contesto del corso, policy editoriale, macro disponibili).

COMPITO: **verifica avversariale** della pagina ${p} degli appunti.

Un altro agente ha trascritto questa pagina e il risultato e confluito in:
${caps.map(c => `  ${ROOT}/${c.file}   (capitolo ${c.id}: ${c.titolo})`).join('\n')}

Il tuo compito e TROVARNE I DIFETTI, non confermarlo.

PROCEDIMENTO:
1. Leggi le immagini originali della pagina ${p} (tutte e quattro):
${imgs(p).join('\n')}
2. Leggi il file del capitolo e individua la parte corrispondente alla pagina ${p}: cerca \\scan{${p}}.
   Il contenuto di quella pagina va da li fino al successivo \\scan{...}.
3. Confronta rigorosamente:
   a. **Fedelta** — manca qualcosa che c'e sul foglio? un simbolo, un indice, un pedice, un nome sono stati letti male? un passaggio e stato saltato?
   b. **Correttezza matematica e logica** — rifai i conti. Definizioni ben poste? Dimostrazioni valide in ogni passo? Casi base e induttivi giusti? Indici e off-by-one? Disuguaglianze nel verso giusto? Quantificatori al posto giusto? Complessita corrette? Non fidarti: ricontrolla.
   c. **Coerenza** — la notazione e la stessa del resto del capitolo?
   d. **Figure** — la figura TikZ (in ${ROOT}/tikz/) rappresenta davvero cio che il disegno originale voleva dire?
4. Incrocia con Gli appunti del corso dell'anno precedente e con la teoria standard del corso.${supporto.length ? `\n   Sintesi dell'anno precedente: ${supporto.map(L => `${B}/supporto/${L}_sintesi.md`).join(', ')}` : ''}

REGOLE:
- Segnala SOLO problemi reali e concreti, con la correzione da applicare.
- Se la trascrizione e corretta, dillo (esito "ok", lista vuota). NON inventare problemi per avere qualcosa da dire: un falso allarme costa piu di un silenzio.
- Ricorda la policy: correggere in silenzio cio di cui si e certi e voluto, non e un difetto. Non segnalare come "omissione" una semplificazione stilistica o l'espansione di un'abbreviazione.
- Gravita "alta" solo per errori che rendono falso o incomprensibile un enunciato.

INFINE, prima di restituire, scrivi con il tool Write il tuo risultato in
${B}/verifica/p${'${pad(p)}'}.json
come oggetto JSON con i campi: pagina, esito, problemi (array). Fallo SEMPRE, anche se non
hai trovato nulla: serve a non perdere il lavoro se la sessione viene interrotta.`,
    { label: `verifica p.${p}`, phase: 'Verifica', schema: SCHEMA }
  )
}))

const ok = res.filter(Boolean)
const probs = ok.flatMap(r => (r.problemi || []).map(x => ({ ...x, pagina: r.pagina })))
log(`Verificate ${ok.length}/${PAGINE.length} pagine | problemi: ${probs.length} (alti: ${probs.filter(p => p.gravita === 'alta').length}, medi: ${probs.filter(p => p.gravita === 'media').length})`)
return {
  verificate: ok.length,
  fallite: PAGINE.filter(p => !ok.some(r => r.pagina === p)),
  esiti: { ok: ok.filter(r => r.esito === 'ok').length, minori: ok.filter(r => r.esito === 'problemi-minori').length, gravi: ok.filter(r => r.esito === 'problemi-gravi').length },
  problemi: probs,
}
