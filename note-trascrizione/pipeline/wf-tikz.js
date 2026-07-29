export const meta = {
  name: 'appunti-tikz',
  description: 'Ricostruisce in TikZ le 117 figure degli appunti, verificandole per compilazione',
  phases: [{ title: 'TikZ', detail: '35 lotti, ~4 figure ciascuno, con test di compilazione' }],
}

const ROOT = '/home/rob/UNI/algoritmi_avanzati'
const B = `${ROOT}/.build`
const LOTTI = [{"cap": "01-introduzione", "ids": ["corso-tre-parti", "pm-allineamento"]}, {"cap": "02-kmp-z", "ids": ["kmp-shift", "kmp-alfa-S", "kmp-bordo-del-bordo", "stack-push-multipop"]}, {"cap": "02-kmp-z", "ids": ["z-definizione", "z-blocco-lr", "z-alfa-beta", "z-caso1"]}, {"cap": "02-kmp-z", "ids": ["z-caso2", "kmp-sp-primo"]}, {"cap": "03-boyer-moore", "ids": ["bm-mismatch", "bm-bcr-preproc", "bm-lprimo", "bm-nj"]}, {"cap": "04-aho-corasick", "ids": ["keyword-tree-panoramica", "failure-link-idea", "ac-failure-link-passo", "ac-output-link"]}, {"cap": "05-suffix-tree", "ids": ["sottostringa-ripetuta", "kwtree-suffissi", "suffix-trie-ambm", "compattazione-abb"]}, {"cap": "05-suffix-tree", "ids": ["compattazione-catena", "lemma-branching", "suffix-tree-ricerca-montagna", "ukkonen-passo-prefissi"]}, {"cap": "05-suffix-tree", "ids": ["boundary-path", "reference-pair", "coppia-canonica", "boundary-path-tripartizione"]}, {"cap": "05-suffix-tree", "ids": ["active-end-point", "propagazione-ti", "ukkonen-boundary-step", "ukkonen-refpair-f"]}, {"cap": "06-karp-rabin", "ids": ["stree-lca-montagna", "kr-finestra-testo", "kr-schema-loop"]}, {"cap": "07-shift-and", "ids": ["shift-and-dotplot", "shift-and-colonne", "shift-and-esempio"]}, {"cap": "08-lca", "ids": ["stree-occorrenze", "stree-generalizzato", "lca-albero-dfs", "b-albero-completo"]}, {"cap": "08-lca", "ids": ["path-number-alpha", "lca-b-path-number", "lca-b-triangolo", "lca-b-array-bit"]}, {"cap": "08-lca", "ids": ["lca-albero-I", "lca-run-map", "av-bitvector", "lca-run-xbar-ybar"]}, {"cap": "08-lca", "ids": ["lca-xbar-w", "tabella-op-binarie"]}, {"cap": "09-distanze-allineamento", "ids": ["hamming-posizioni", "allineamento-esempio", "dp-stencil", "dp-stencil-lineare"]}, {"cap": "09-distanze-allineamento", "ids": ["dp-due-colonne", "hirschberg-divide", "allineamento-locale-prima-riga", "allineamento-locale-ultima-riga"]}, {"cap": "09-distanze-allineamento", "ids": ["landau-vishkin-banda"]}, {"cap": "10-landau-vishkin", "ids": ["lv-testo-pattern", "lv-banda-diagonali", "lv-stree-lce", "lce-lca"]}, {"cap": "10-landau-vishkin", "ids": ["diagonali-numerate", "lv-dpath-riga-n", "lv-fr-tre-path"]}, {"cap": "11-randqs", "ids": ["rand-schema-bit", "randqs-partizione", "randqs-albero-chiamate", "randqs-separazione"]}, {"cap": "11-randqs", "ids": ["randqs-pivot-array", "mincut-anticipazione"]}, {"cap": "12-min-cut", "ids": ["prob-condizionata-venn", "multigrafo-archi-paralleli", "karger-contrazione", "karger-due-nodi-taglio"]}, {"cap": "12-min-cut", "ids": ["karger-bipartizione-taglio", "mincut-schema-taglio", "mincut-c-in-e", "karger-tradeoff"]}, {"cap": "13-randauto", "ids": ["p60-bpp-esempio", "p60-tre-segmenti-quattro-regioni", "bpp-albero", "p62-painter"]}, {"cap": "13-randauto", "ids": ["p62-autopartizione", "randauto-index"]}, {"cap": "14-random-walk-2sat", "ids": ["ubriaco-griglia", "passo-griglia-2d", "grafo-implicazioni-2sat", "random-walk-linea-2sat"]}, {"cap": "14-random-walk-2sat", "ids": ["grafo-lineare-L4"]}, {"cap": "15-catene-markov", "ids": ["p73-spazio-stati", "p75-mc-due-stati", "p74-ciclo6", "p74-convoluzione"]}, {"cap": "15-catene-markov", "ids": ["p76-scc", "p78-periodicita"]}, {"cap": "16-random-walk-grafi", "ids": ["p83-transizioni-mg", "p83-arco-ciclo2", "top-in-at-random", "p85-lollipop"]}, {"cap": "16-random-walk-grafi", "ids": ["p87-ritorno-arco", "p88-cammino"]}, {"cap": "A-weisfeiler-leman", "ids": ["wl1-partizione-colori", "wl1-grafo-e-unrolling", "wlk-tupla", "wlk-tipo-atomico"]}, {"cap": "A-weisfeiler-leman", "ids": ["wl2-esempio", "fwl-vs-owl", "minori-esclusi-wagner", "wl-kernel-diamante"]}]
const PAGINA = {"p76-scc": 76, "mc-due-stati": 75, "wl1-partizione-colori": 79, "wl1-grafo-e-unrolling": 79, "wlk-tipo-atomico": 79, "rw-linea-2sat": 69, "grafo-lineare-L4": 69, "p80-tupla": 80, "p80-wl2-esempio": 80, "p80-fwl-owl": 80, "p80-minori-esclusi": 80, "p83-transizioni-mg": 83, "p83-arco-ciclo2": 83, "p81-grafo-wl-kernel": 81, "top-in-at-random": 84, "p85-lollipop": 85, "p60-bpp-esempio": 60, "p60-tre-segmenti-quattro-regioni": 60, "p88-cammino": 88, "p88-lollipop": 88, "p78-periodicita": 78, "p74-ciclo6": 74, "p74-convoluzione": 74, "p87-ritorno-arco": 87, "random-walk-linea-2sat": 68, "p73-spazio-stati": 73, "p56-due-nodi-taglio": 56, "p56-bipartizione-taglio": 56, "shift-and-dotplot": 29, "shift-and-colonne": 29, "shift-and-esempio": 30, "corso-tre-parti": 1, "pm-allineamento": 2, "stree-lca-montagna": 26, "kr-finestra-testo": 26, "kr-schema-loop": 26, "rand-schema-bit": 51, "randqs-partizione": 52, "randqs-albero-chiamate": 52, "randqs-separazione": 53, "randqs-pivot-array": 54, "mincut-anticipazione": 54, "bpp-albero": 61, "p62-painter": 62, "p62-autopartizione": 62, "randauto-index": 63, "prob-condizionata-venn": 55, "multigrafo-archi-paralleli": 55, "karger-contrazione": 55, "karger-due-nodi-taglio": 56, "karger-bipartizione-taglio": 56, "mincut-schema-taglio": 57, "mincut-c-in-e": 57, "karger-tradeoff": 58, "lv-testo-pattern": 48, "lv-banda-diagonali": 48, "lv-stree-lce": 48, "lce-lca": 49, "diagonali-numerate": 49, "lv-dpath-riga-n": 50, "lv-fr-tre-path": 51, "hamming-posizioni": 41, "allineamento-esempio": 42, "dp-stencil": 43, "dp-stencil-lineare": 45, "dp-due-colonne": 45, "hirschberg-divide": 45, "allineamento-locale-prima-riga": 46, "allineamento-locale-ultima-riga": 46, "landau-vishkin-banda": 47, "p75-mc-due-stati": 75, "keyword-tree-panoramica": 12, "failure-link-idea": 13, "ac-failure-link-passo": 14, "ac-output-link": 15, "ubriaco-griglia": 65, "passo-griglia-2d": 65, "grafo-implicazioni-2sat": 67, "bm-mismatch": 9, "bm-bcr-preproc": 10, "bm-lprimo": 11, "bm-nj": 11, "sottostringa-ripetuta": 16, "kwtree-suffissi": 16, "suffix-trie-ambm": 17, "compattazione-abb": 18, "compattazione-catena": 18, "lemma-branching": 18, "suffix-tree-ricerca-montagna": 19, "ukkonen-passo-prefissi": 19, "boundary-path": 21, "reference-pair": 23, "coppia-canonica": 24, "boundary-path-tripartizione": 23, "active-end-point": 24, "propagazione-ti": 24, "ukkonen-boundary-step": 25, "ukkonen-refpair-f": 25, "wlk-tupla": 80, "wl2-esempio": 80, "fwl-vs-owl": 80, "minori-esclusi-wagner": 80, "wl-kernel-diamante": 81, "stree-occorrenze": 31, "stree-generalizzato": 31, "lca-albero-dfs": 32, "b-albero-completo": 33, "path-number-alpha": 33, "lca-b-path-number": 34, "lca-b-triangolo": 34, "lca-b-array-bit": 34, "lca-albero-I": 35, "lca-run-map": 36, "av-bitvector": 37, "lca-run-xbar-ybar": 38, "lca-xbar-w": 39, "tabella-op-binarie": 40, "kmp-shift": 3, "kmp-alfa-S": 4, "kmp-bordo-del-bordo": 4, "stack-push-multipop": 5, "z-definizione": 5, "z-blocco-lr": 7, "z-alfa-beta": 7, "z-caso1": 7, "z-caso2": 7, "kmp-sp-primo": 8, "kmp-sp-def": 8, "kmp-alfa-P": 4, "shiftand-esempio": 30, "p24-coppia-canonica": 24, "p24-active-end-point": 24, "p24-propagazione-ti": 24, "ukkonen-prefisso-online": 20, "p54-taglio": 54, "p54-randqs-pivot": 54, "p54-grafo-blob": 54, "z-def-Zi": 7, "p23-boundary-path": 23, "p23-reference-pair": 23, "z-blocco-massimalita": 6, "z-blocco-corrispondenza": 6}

const pad = n => String(n).padStart(2, '0')

const SCHEMA = {
  type: 'object',
  properties: {
    figure: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          scritta: { type: 'boolean' },
          compila: { type: 'boolean' },
          scansione: { type: 'boolean', description: 'true se si e dovuto ripiegare sul ritaglio della scansione' },
          note: { type: 'string', description: 'scelte di interpretazione fatte per ricostruire il disegno' },
        },
        required: ['id', 'scritta', 'compila', 'scansione', 'note'],
      },
    },
  },
  required: ['figure'],
}

phase('TikZ')

const res = await parallel(LOTTI.map((lot, k) => () => {
  const righe = lot.ids.map(id => {
    const p = PAGINA[id]
    const im = p ? [`${B}/pages/p${pad(p)}_full.png`, `${B}/pages/p${pad(p)}_b1.png`, `${B}/pages/p${pad(p)}_b2.png`, `${B}/pages/p${pad(p)}_b3.png`].join('\n     ') : '(pagina ignota)'
    return `  - **${id}** (pagina ${p})\n     specifica: ${B}/figure/spec/${id}.md\n     immagini: ${im}`
  }).join('\n')
  return agent(
    `Leggi PRIMA il file ${B}/CONVENZIONI.md (contesto del corso, policy editoriale, macro e ambienti disponibili).

COMPITO: ricostruire in **TikZ** queste ${lot.ids.length} figure del capitolo \`${lot.cap}\`:

${righe}

Il capitolo in cui compaiono e ${ROOT}/lezioni/${lot.cap}.tex: leggilo per capire il contesto in cui la figura viene richiamata (cerca \\input{tikz/ID.tikz}) e con quale notazione.

METODO, per ogni figura:
1. Leggi il file di specifica: e gia molto dettagliato, spesso con coordinate suggerite.
2. Guarda le immagini della pagina originale per confrontare la specifica con il disegno vero.
3. **Interpreta con la semantica.** Un suffix tree, un automa di Aho--Corasick, una matrice di programmazione dinamica, un grafo per il min-cut hanno una forma attesa: usa le tue conoscenze di algoritmica per capire cosa il disegno vuole dire e ridisegnalo **corretto**, non per imitazione cieca del tratto. Se lo schizzo e sbagliato o incompleto ma l'intenzione e chiara, disegna la versione giusta e annotalo.
4. Scrivi il file ${ROOT}/tikz/ID.tikz con il tool Write. Deve contenere **solo** l'ambiente tikzpicture (niente figure, niente caption, niente documentclass): viene incluso con \\input dentro un \\begin{figure}.
5. **Verifica compilando**: esegui con Bash
       ${B}/prova-tikz.sh ID
   Se fallisce, leggi gli errori, correggi il file e riprova finche non stampa "OK". Non consegnare una figura che non compila.

VINCOLI:
- Testo delle figure in **italiano**, notazione coerente con il capitolo.
- Sono disponibili le librerie tikz: automata, positioning, trees, arrows.meta, calc, fit, shapes.geometric, decorations.pathreplacing, decorations.markings, matrix, backgrounds, chains.
- Usa \\footnotesize o \\small per le etichette se la figura e densa; larghezza massima utile ~12cm.
- Non usare colori vistosi: il documento e sobrio. Vanno bene gray, black e al piu un accento.
- Ripiega sul ritaglio della scansione **solo** se il disegno e davvero irrecuperabile. In quel caso il .tikz deve contenere
      \\node{\\includegraphics[width=0.8\\linewidth]{...}};
  e devi segnalarlo con scansione=true, spiegando perche nelle note.

Restituisci per ogni figura: id, se l'hai scritta, se compila, se hai dovuto usare la scansione, e le scelte di interpretazione fatte.`,
    { label: `${lot.cap.split('-')[0]} ${lot.ids[0]}`, phase: 'TikZ', schema: SCHEMA }
  )
}))

const tutte = res.filter(Boolean).flatMap(r => r.figure || [])
log(`Figure prodotte: ${tutte.length}/117 | compilano: ${tutte.filter(f => f.compila).length} | da scansione: ${tutte.filter(f => f.scansione).length}`)
return { figure: tutte, lotti_falliti: res.filter(r => !r).length }
