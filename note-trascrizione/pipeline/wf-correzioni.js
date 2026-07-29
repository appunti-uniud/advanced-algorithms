export const meta = {
  name: 'appunti-correzioni',
  description: 'Completa le verifiche mancanti e applica le correzioni confermate, capitolo per capitolo',
  phases: [
    { title: 'Verifiche mancanti', detail: '10 pagine mai verificate' },
    { title: 'Correzioni', detail: 'un agente per capitolo, applica e ricompila' },
  ],
}

const ROOT = '/home/rob/UNI/algoritmi_avanzati'
const B = `${ROOT}/.build`
const MANCANTI = [74, 78, 79, 80, 83, 84, 85, 86, 87, 88]
const P2F = {"1": [{"id": "01", "file": "lezioni/01-introduzione.tex", "titolo": "Introduzione e pattern matching esatto", "supporto": ["L01"]}], "2": [{"id": "01", "file": "lezioni/01-introduzione.tex", "titolo": "Introduzione e pattern matching esatto", "supporto": ["L01"]}], "3": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "4": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "5": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "6": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "7": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "8": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}], "9": [{"id": "02", "file": "lezioni/02-kmp-z.tex", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "supporto": ["L01", "L02"]}, {"id": "03", "file": "lezioni/03-boyer-moore.tex", "titolo": "Boyer--Moore", "supporto": ["L03"]}], "10": [{"id": "03", "file": "lezioni/03-boyer-moore.tex", "titolo": "Boyer--Moore", "supporto": ["L03"]}], "11": [{"id": "03", "file": "lezioni/03-boyer-moore.tex", "titolo": "Boyer--Moore", "supporto": ["L03"]}], "12": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "13": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "14": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "15": [{"id": "04", "file": "lezioni/04-aho-corasick.tex", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "supporto": ["L04"]}], "16": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "17": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "18": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "19": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "20": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "21": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "22": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "23": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "24": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "25": [{"id": "05", "file": "lezioni/05-suffix-tree.tex", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "supporto": ["L05"]}], "26": [{"id": "06", "file": "lezioni/06-karp-rabin.tex", "titolo": "Karp--Rabin", "supporto": ["L06"]}], "27": [{"id": "06", "file": "lezioni/06-karp-rabin.tex", "titolo": "Karp--Rabin", "supporto": ["L06"]}], "28": [{"id": "06", "file": "lezioni/06-karp-rabin.tex", "titolo": "Karp--Rabin", "supporto": ["L06"]}], "29": [{"id": "07", "file": "lezioni/07-shift-and.tex", "titolo": "Shift--And", "supporto": ["L07"]}], "30": [{"id": "07", "file": "lezioni/07-shift-and.tex", "titolo": "Shift--And", "supporto": ["L07"]}], "31": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "32": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "33": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "34": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "35": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "36": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "37": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "38": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "39": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "40": [{"id": "08", "file": "lezioni/08-lca.tex", "titolo": "Lowest Common Ancestor in tempo costante", "supporto": ["L07", "L08", "L09"]}], "41": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "42": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "43": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "44": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "45": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "46": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "47": [{"id": "09", "file": "lezioni/09-distanze-allineamento.tex", "titolo": "Pattern matching inesatto: distanze e allineamento", "supporto": ["L09", "L10", "L11"]}], "48": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}], "49": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}], "50": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}], "51": [{"id": "10", "file": "lezioni/10-landau-vishkin.tex", "titolo": "Landau--Vishkin", "supporto": ["L12"]}, {"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}], "52": [{"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}], "53": [{"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}], "54": [{"id": "11", "file": "lezioni/11-randqs.tex", "titolo": "Algoritmi randomizzati e RandQS", "supporto": ["L13"]}, {"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "55": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "56": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "57": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "58": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "59": [{"id": "12", "file": "lezioni/12-min-cut.tex", "titolo": "Min-Cut di Karger", "supporto": ["L14"]}], "60": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "61": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "62": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "63": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "64": [{"id": "13", "file": "lezioni/13-randauto.tex", "titolo": "Partizioni binarie del piano e RandAuto", "supporto": ["L15"]}], "65": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "66": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "67": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "68": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "69": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "70": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "71": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}], "72": [{"id": "14", "file": "lezioni/14-random-walk-2sat.tex", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "supporto": ["L17", "L16"]}, {"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "73": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "74": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "75": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "76": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "77": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "78": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}], "79": [{"id": "15", "file": "lezioni/15-catene-markov.tex", "titolo": "Catene di Markov", "supporto": ["L16"]}, {"id": "A", "file": "lezioni/A-weisfeiler-leman.tex", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "supporto": []}], "83": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "84": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "85": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "86": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "87": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "88": [{"id": "16", "file": "lezioni/16-random-walk-grafi.tex", "titolo": "Random walk su grafi: hitting, commute e cover time", "supporto": ["L16"]}], "80": [{"id": "A", "file": "lezioni/A-weisfeiler-leman.tex", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "supporto": []}], "81": [{"id": "A", "file": "lezioni/A-weisfeiler-leman.tex", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "supporto": []}]}
const CAPITOLI = [{"id": "01", "slug": "introduzione", "titolo": "Introduzione e pattern matching esatto", "pagine": [1, 2], "supporto": ["L01"]}, {"id": "02", "slug": "kmp-z", "titolo": "Knuth--Morris--Pratt e la funzione $Z$", "pagine": [3, 4, 5, 6, 7, 8, 9], "supporto": ["L01", "L02"]}, {"id": "03", "slug": "boyer-moore", "titolo": "Boyer--Moore", "pagine": [9, 10, 11], "supporto": ["L03"]}, {"id": "04", "slug": "aho-corasick", "titolo": "Matching multi-pattern: keyword tree e Aho--Corasick", "pagine": [12, 13, 14, 15], "supporto": ["L04"]}, {"id": "05", "slug": "suffix-tree", "titolo": "Suffix trie, suffix tree e algoritmo di Ukkonen", "pagine": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "supporto": ["L05"]}, {"id": "06", "slug": "karp-rabin", "titolo": "Karp--Rabin", "pagine": [26, 27, 28], "supporto": ["L06"]}, {"id": "07", "slug": "shift-and", "titolo": "Shift--And", "pagine": [29, 30], "supporto": ["L07"]}, {"id": "08", "slug": "lca", "titolo": "Lowest Common Ancestor in tempo costante", "pagine": [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "supporto": ["L07", "L08", "L09"]}, {"id": "09", "slug": "distanze-allineamento", "titolo": "Pattern matching inesatto: distanze e allineamento", "pagine": [41, 42, 43, 44, 45, 46, 47], "supporto": ["L09", "L10", "L11"]}, {"id": "10", "slug": "landau-vishkin", "titolo": "Landau--Vishkin", "pagine": [48, 49, 50, 51], "supporto": ["L12"]}, {"id": "11", "slug": "randqs", "titolo": "Algoritmi randomizzati e RandQS", "pagine": [51, 52, 53, 54], "supporto": ["L13"]}, {"id": "12", "slug": "min-cut", "titolo": "Min-Cut di Karger", "pagine": [54, 55, 56, 57, 58, 59], "supporto": ["L14"]}, {"id": "13", "slug": "randauto", "titolo": "Partizioni binarie del piano e RandAuto", "pagine": [60, 61, 62, 63, 64], "supporto": ["L15"]}, {"id": "14", "slug": "random-walk-2sat", "titolo": "Random walk e algoritmo randomizzato per 2-SAT", "pagine": [65, 66, 67, 68, 69, 70, 71, 72], "supporto": ["L17", "L16"]}, {"id": "15", "slug": "catene-markov", "titolo": "Catene di Markov", "pagine": [72, 73, 74, 75, 76, 77, 78, 79], "supporto": ["L16"]}, {"id": "16", "slug": "random-walk-grafi", "titolo": "Random walk su grafi: hitting, commute e cover time", "pagine": [83, 84, 85, 86, 87, 88], "supporto": ["L16"]}, {"id": "A", "slug": "weisfeiler-leman", "titolo": "Graph Isomorphism e la gerarchia di Weisfeiler--Leman", "pagine": [79, 80, 81], "supporto": []}]

// correzioni gia applicate a mano: gli agenti non devono riapplicarle
const GIA_FATTE = `Sono GIA STATE APPLICATE a mano le seguenti correzioni (verifica che ci siano, ma NON rifarle):
- p.4  tikz/kmp-alfa-S.tikz: etichetta della tacca portata a $i-\\spv{i}(S)+1$
- p.7  cap.02: condizionata la frase sulla copia di beta al caso $\\Zv{i'}\\le r-i+1$
- p.8  cap.02: aggiunta la convenzione $\\spp{i}(P)=0$ su insieme vuoto
- p.10 cap.03: segnalato che lo shift della GSR non e safe quando $L'(i)=0$, con controesempio P=aca / T=bcaca
- p.18 cap.05: tolto il riferimento ad $a^m b^m$ e l'avverbio «sempre»
- p.20 cap.05: resa parziale la funzione di transizione $g$ e attenuato il capoverso sul DFA`

const pad = n => String(n).padStart(2, '0')
const imgs = n => [`${B}/pages/p${pad(n)}_full.png`, `${B}/pages/p${pad(n)}_b1.png`, `${B}/pages/p${pad(n)}_b2.png`, `${B}/pages/p${pad(n)}_b3.png`]

const VER_SCHEMA = {
  type: 'object',
  properties: {
    pagina: { type: 'integer' },
    esito: { type: 'string', enum: ['ok', 'problemi-minori', 'problemi-gravi'] },
    file_scritto: { type: 'string' },
    problemi: { type: 'array', items: { type: 'object', properties: {
      gravita: { type: 'string', enum: ['alta', 'media', 'bassa'] },
      categoria: { type: 'string', enum: ['omissione', 'trascrizione-errata', 'errore-matematico', 'errore-logico', 'notazione', 'figura', 'latex'] },
      dove: { type: 'string' }, descrizione: { type: 'string' }, correzione: { type: 'string' },
    }, required: ['gravita', 'categoria', 'dove', 'descrizione', 'correzione'] } },
  },
  required: ['pagina', 'esito', 'file_scritto', 'problemi'],
}

const CORR_SCHEMA = {
  type: 'object',
  properties: {
    capitolo: { type: 'string' },
    compila: { type: 'boolean' },
    applicate: { type: 'array', items: { type: 'object', properties: {
      pagina: { type: 'integer' }, categoria: { type: 'string' },
      cosa: { type: 'string', description: 'cosa e stato cambiato, concretamente' },
    }, required: ['pagina', 'categoria', 'cosa'] } },
    respinte: { type: 'array', items: { type: 'object', properties: {
      pagina: { type: 'integer' },
      cosa: { type: 'string' },
      perche: { type: 'string', description: 'perche la segnalazione e stata giudicata infondata' },
    }, required: ['pagina', 'cosa', 'perche'] } },
  },
  required: ['capitolo', 'compila', 'applicate', 'respinte'],
}

// ---------------- Fase 1: le 10 verifiche mancanti ----------------
phase('Verifiche mancanti')

await parallel(MANCANTI.map(p => () => {
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
- Se la trascrizione e corretta, dillo (esito "ok", lista vuota). NON inventare problemi: un falso allarme costa piu di un silenzio.
- Correggere in silenzio cio di cui si e certi e voluto dalla policy, non e un difetto. Non segnalare come "omissione" una semplificazione stilistica o l'espansione di un'abbreviazione.
- Gravita "alta" solo per errori che rendono falso o incomprensibile un enunciato.

INFINE, prima di restituire, scrivi con Write il risultato in ${B}/verifica/p${pad(p)}.json
come oggetto JSON con i campi: pagina, esito, problemi. Fallo SEMPRE, anche se non hai trovato nulla.`,
    { label: `verifica p.${p}`, phase: 'Verifiche mancanti', schema: VER_SCHEMA }
  )
}))

log('Verifiche mancanti completate, passo ad applicare le correzioni')

// ---------------- Fase 2: applicazione per capitolo ----------------
phase('Correzioni')

const res = await parallel(CAPITOLI.map(cap => () => {
  const file = `${ROOT}/lezioni/${cap.id}-${cap.slug}.tex`
  const ver = cap.pagine.map(p => `${B}/verifica/p${pad(p)}.json`)
  return agent(
    `Leggi PRIMA ${B}/CONVENZIONI.md (contesto, policy editoriale, macro e ambienti disponibili).

COMPITO: applicare al capitolo "${cap.titolo}" le correzioni emerse dalla verifica avversariale.

File del capitolo: ${file}
Referti della verifica (uno per pagina, campo "problemi"):
${ver.join('\n')}

${GIA_FATTE}

PROCEDIMENTO:
1. Leggi tutti i referti e il file del capitolo.
2. Per OGNI problema segnalato, **giudica prima se e fondato**. Hai piena autorita di respingerlo:
   i verificatori possono sbagliarsi, fraintendere la policy (le semplificazioni stilistiche e le
   correzioni silenziose sono VOLUTE, non difetti) o proporre correzioni peggiori dell'originale.
   Rifai tu il ragionamento matematico prima di toccare qualcosa.
3. Applica con Edit le correzioni che ritieni fondate. Se la correzione riguarda una figura,
   modifica il file in ${ROOT}/tikz/ e verificalo con Bash:  ${B}/prova-tikz.sh NOME-FIGURA
4. Mantieni la coerenza: notazione uniforme nel capitolo, macro del preambolo, stile della prosa.
   Non introdurre macro inesistenti. Conserva i marcatori \\scan{NN}.
5. Verifica che il capitolo compili ancora, con Bash:
       ${B}/prova-capitolo.sh ${cap.id}-${cap.slug}
   Ripeti finche non stampa OK. (I "riferimenti indefiniti" sono normali: sono rimandi ad altri
   capitoli, che compilando il capitolo da solo non esistono.)
6. Scrivi con Write il resoconto in ${B}/correzioni/${cap.id}.json, oggetto JSON con i campi
   capitolo, compila, applicate, respinte. Fallo SEMPRE, anche se non hai applicato nulla:
   serve a non perdere il lavoro se la sessione viene interrotta.

Restituisci lo stesso resoconto. Nel campo "respinte" spiega bene il perche: finira nelle note
editoriali e serve all'utente per capire cosa e stato deliberatamente lasciato com'era.`,
    { label: `corr ${cap.id} ${cap.slug}`, phase: 'Correzioni', schema: CORR_SCHEMA }
  )
}))

const ok = res.filter(Boolean)
const app = ok.flatMap(r => r.applicate || [])
const rej = ok.flatMap(r => r.respinte || [])
log(`Capitoli trattati: ${ok.length}/${CAPITOLI.length} | correzioni applicate: ${app.length} | segnalazioni respinte: ${rej.length}`)
return {
  capitoli: ok.map(r => ({ id: r.capitolo, compila: r.compila, applicate: (r.applicate || []).length, respinte: (r.respinte || []).length })),
  falliti: CAPITOLI.filter(c => !ok.some(r => String(r.capitolo).includes(c.id))).map(c => c.id),
  totale_applicate: app.length,
  totale_respinte: rej.length,
}
