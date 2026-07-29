export const meta = {
  name: 'appunti-cucitura',
  description: 'Trascrive le pagine mancanti e cuce tutti i capitoli in lezioni/*.tex',
  phases: [
    { title: 'Pagine mancanti', detail: 'trascrizione delle 20 pagine perse per limite di sessione' },
    { title: 'Cucitura', detail: 'un agente per capitolo, scrive lezioni/*.tex' },
  ],
}

const ROOT = '/home/rob/UNI/algoritmi_avanzati'
const B = `${ROOT}/.build`
const T = `${B}/trascrizioni`

const MANCANTI = [28, 56, 60, 68, 69, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88]

// taglio: per le pagine a cavallo di due capitoli, quale meta spetta a questo capitolo
const CAPITOLI = [
  { id: '01', slug: 'introduzione', titolo: 'Introduzione e pattern matching esatto', pagine: [1, 2], supporto: ['L01'], taglio: '' },
  { id: '02', slug: 'kmp-z', titolo: 'Knuth--Morris--Pratt e la funzione $Z$', pagine: [3, 4, 5, 6, 7, 8, 9], supporto: ['L01', 'L02'],
    taglio: 'La pagina 9 e condivisa con il capitolo su Boyer--Moore: prendi SOLO la prima parte (fine di KMP, versione real-time con sp_{i,c}). Fermati dove inizia il titolo "Boyer-Moore" e NON trascrivere nulla di Boyer--Moore.' },
  { id: '03', slug: 'boyer-moore', titolo: 'Boyer--Moore', pagine: [9, 10, 11], supporto: ['L03'],
    taglio: 'La pagina 9 e condivisa con il capitolo su KMP: prendi SOLO la seconda parte, da dove inizia il titolo "Boyer-Moore" in poi. NON ripetere la chiusura di KMP real-time.' },
  { id: '04', slug: 'aho-corasick', titolo: 'Matching multi-pattern: keyword tree e Aho--Corasick', pagine: [12, 13, 14, 15], supporto: ['L04'], taglio: '' },
  { id: '05', slug: 'suffix-tree', titolo: 'Suffix trie, suffix tree e algoritmo di Ukkonen', pagine: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], supporto: ['L05'], taglio: '' },
  { id: '06', slug: 'karp-rabin', titolo: 'Karp--Rabin', pagine: [26, 27, 28], supporto: ['L06'], taglio: '' },
  { id: '07', slug: 'shift-and', titolo: 'Shift--And', pagine: [29, 30], supporto: ['L07'], taglio: '' },
  { id: '08', slug: 'lca', titolo: 'Lowest Common Ancestor in tempo costante', pagine: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], supporto: ['L07', 'L08', 'L09'], taglio: '' },
  { id: '09', slug: 'distanze-allineamento', titolo: 'Pattern matching inesatto: distanze e allineamento', pagine: [41, 42, 43, 44, 45, 46, 47], supporto: ['L09', 'L10', 'L11'], taglio: '' },
  { id: '10', slug: 'landau-vishkin', titolo: 'Landau--Vishkin', pagine: [48, 49, 50, 51], supporto: ['L12'],
    taglio: 'La pagina 51 e condivisa con il capitolo sugli algoritmi randomizzati: prendi SOLO la prima parte (chiusura di Landau--Vishkin, farthest-reaching d-path). Fermati dove inizia il titolo "Algoritmi Randomizzati".' },
  { id: '11', slug: 'randqs', titolo: 'Algoritmi randomizzati e RandQS', pagine: [51, 52, 53, 54], supporto: ['L13'],
    taglio: 'La pagina 51 e condivisa con Landau--Vishkin: prendi SOLO la seconda parte, dal titolo "Algoritmi Randomizzati" in poi. La pagina 54 e condivisa con Min-Cut: prendi SOLO la prima parte (osservazione arretrata su RandQS, elementi distinti), fermandoti dove inizia il titolo "Min Cut".' },
  { id: '12', slug: 'min-cut', titolo: 'Min-Cut di Karger', pagine: [54, 55, 56, 57, 58, 59], supporto: ['L14'],
    taglio: 'La pagina 54 e condivisa con RandQS: prendi SOLO la seconda parte, dal titolo "Min Cut" in poi.' },
  { id: '13', slug: 'randauto', titolo: 'Partizioni binarie del piano e RandAuto', pagine: [60, 61, 62, 63, 64], supporto: ['L15'], taglio: '' },
  { id: '14', slug: 'random-walk-2sat', titolo: 'Random walk e algoritmo randomizzato per 2-SAT', pagine: [65, 66, 67, 68, 69, 70, 71, 72], supporto: ['L17', 'L16'],
    taglio: 'La pagina 72 e condivisa con il capitolo sulle catene di Markov: prendi SOLO la prima parte (esempio numerico di amplificazione con Markov, bound sul cover time). Fermati dove inizia il titolo "Catene di Markov".' },
  { id: '15', slug: 'catene-markov', titolo: 'Catene di Markov', pagine: [72, 73, 74, 75, 76, 77, 78, 79], supporto: ['L16'],
    taglio: 'La pagina 72 e condivisa: prendi SOLO la seconda parte, dal titolo "Catene di Markov" in poi. La pagina 79 e condivisa con l\'appendice su Weisfeiler--Leman: prendi SOLO la prima parte (chiusura del Teorema fondamentale delle catene di Markov), fermandoti dove inizia il titolo "Graph Isomorphism".' },
  { id: '16', slug: 'random-walk-grafi', titolo: 'Random walk su grafi: hitting, commute e cover time', pagine: [83, 84, 85, 86, 87, 88], supporto: ['L16'],
    taglio: 'A fine pagina 88 il quaderno riporta un promemoria personale ("GIOVEDI 14:30") che NON va trascritto.' },
  { id: 'A', slug: 'weisfeiler-leman', titolo: 'Graph Isomorphism e la gerarchia di Weisfeiler--Leman', pagine: [79, 80, 81], supporto: [],
    taglio: 'La pagina 79 e condivisa con il capitolo sulle catene di Markov: prendi SOLO la seconda parte, dal titolo "Graph Isomorphism" in poi. Questo blocco (p.79-81) e fuori dal programma standard del corso, verosimilmente un seminario di un ospite, ed e volutamente frammentario: la pagina 81 e in gran parte vuota e telegrafica. Non gonfiarlo, ma rendilo comprensibile.' },
]

const pad = n => String(n).padStart(2, '0')
const imgs = n => [`${B}/pages/p${pad(n)}_full.png`, `${B}/pages/p${pad(n)}_b1.png`, `${B}/pages/p${pad(n)}_b2.png`, `${B}/pages/p${pad(n)}_b3.png`]

const capDiPagina = p => CAPITOLI.filter(c => c.pagine.includes(p))

const NOTA_SCHEMA = {
  type: 'object',
  properties: {
    tipo: { type: 'string', enum: ['correzione', 'ricostruzione', 'lettura-incerta', 'divergenza-anno-prec', 'errore-anno-prec', 'figura', 'lacuna', 'altro'] },
    pagina: { type: 'integer' },
    testo: { type: 'string' },
    risolto: { type: 'boolean' },
  },
  required: ['tipo', 'pagina', 'testo', 'risolto'],
}
const FIGURA_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' }, pagina: { type: 'integer' }, didascalia: { type: 'string' },
    tipo: { type: 'string' }, specifica: { type: 'string' }, fattibile_tikz: { type: 'boolean' },
  },
  required: ['id', 'pagina', 'didascalia', 'tipo', 'specifica', 'fattibile_tikz'],
}
const TRASCRIZIONE_SCHEMA = {
  type: 'object',
  properties: {
    pagina: { type: 'integer' }, latex: { type: 'string' },
    note: { type: 'array', items: NOTA_SCHEMA }, figure: { type: 'array', items: FIGURA_SCHEMA },
    continuita: { type: 'string' }, confidenza: { type: 'string', enum: ['alta', 'media', 'bassa'] },
    file: { type: 'string' },
  },
  required: ['pagina', 'latex', 'note', 'figure', 'continuita', 'confidenza', 'file'],
}
const CUCITURA_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' }, file: { type: 'string' }, sintesi: { type: 'string' },
    figure: { type: 'array', items: FIGURA_SCHEMA }, note: { type: 'array', items: NOTA_SCHEMA },
  },
  required: ['id', 'file', 'sintesi', 'figure', 'note'],
}

const PRELUDIO = `Leggi PRIMA di tutto il file ${B}/CONVENZIONI.md: contiene il contesto del corso, la policy editoriale da rispettare alla lettera, l'elenco delle macro e degli ambienti LaTeX disponibili e le regole di stile.`

// ---------------- Fase 1: le 20 pagine mancanti ----------------
phase('Pagine mancanti')

const nuove = await parallel(MANCANTI.map(p => () => {
  const caps = capDiPagina(p)
  const cap = caps[0] || { titolo: '?', supporto: [] }
  const supporto = [...new Set(caps.flatMap(c => c.supporto))]
  const prev = p > 1 ? `${B}/pages/p${pad(p - 1)}_full.png` : null
  const next = p < 88 ? `${B}/pages/p${pad(p + 1)}_full.png` : null
  return agent(
    `${PRELUDIO}

COMPITO: trascrivere in LaTeX la **pagina ${p}** degli appunti manoscritti.

Fa parte del capitolo "${cap.titolo}"${caps.length > 1 ? ` (ed e condivisa con "${caps[1].titolo}")` : ''}.

Immagini della pagina ${p} (leggile TUTTE con Read):
${imgs(p).join('\n')}

Pagine adiacenti, SOLO come contesto di continuita (non trascriverle):
${[prev, next].filter(Boolean).join('\n')}

${supporto.length ? `Appunti dell'anno precedente sullo stesso argomento (fonte di supporto, leggili):\n${supporto.map(L => `${B}/supporto/${L}_sintesi.md`).join('\n')}` : 'Per questo argomento non esistono appunti del corso dell'anno precedente: affidati alla tua conoscenza della materia.'}

Sono gia state trascritte le pagine vicine; se ti serve sapere come sono state rese, puoi leggere i file ${T}/pNN.json (campo "latex"). Utile soprattutto per la coerenza di notazione.

METODO:
1. Leggi la pagina intera per struttura e disegni, poi le tre bande ad alta risoluzione per decifrare il testo.
2. Identifica di quale risultato/algoritmo si tratta, poi usa la struttura matematica attesa per disambiguare i grafemi incerti.
3. Confronta con Gli appunti del corso dell'anno precedente e con la teoria standard. Verifica indici, invarianti, quantificatori, versi delle disuguaglianze, casi base, complessita.
4. Scrivi LaTeX **pulito e corretto** in italiano. Correggi silenziosamente cio di cui sei certo, marca con \`dubbio\`/\`lacuna\` solo cio che resta davvero irrisolto.
5. Registra in \`note\` OGNI scelta, in modo specifico ("il quaderno scrive X, ho scritto Y perche Z").
6. Per ogni disegno una voce in \`figure\` con specifica sufficiente a ridisegnarlo in TikZ. Non scrivere il TikZ.
   Nel LaTeX metti: \\begin{figure}[H]\\centering\\input{tikz/ID.tikz}\\caption{...}\\end{figure}
7. Inizia il LaTeX con \\scan{${p}}. Non usare \\chapter o \\section.

INFINE, salva il risultato con il tool Write in ${T}/p${pad(p)}.json come oggetto JSON con esattamente i campi: pagina, latex, note, figure, continuita, confidenza. Restituisci lo stesso oggetto piu il campo "file" col path scritto.`,
    { label: `p.${p}`, phase: 'Pagine mancanti', schema: TRASCRIZIONE_SCHEMA }
  )
}))

log(`Pagine mancanti trascritte: ${nuove.filter(Boolean).length}/${MANCANTI.length}`)

// ---------------- Fase 2: cucitura dei capitoli ----------------
phase('Cucitura')

const cuciti = await parallel(CAPITOLI.map(cap => () => {
  const file = `${ROOT}/lezioni/${cap.id}-${cap.slug}.tex`
  return agent(
    `${PRELUDIO}

COMPITO: cucire le trascrizioni delle singole pagine nel capitolo "${cap.titolo}" e scriverlo su file.

Le trascrizioni pagina per pagina sono gia state prodotte da altri agenti e salvate su disco.
Leggi con Read questi file JSON (campo "latex" = corpo LaTeX della pagina, "continuita" = cosa resta in sospeso, "note" = decisioni editoriali, "figure" = specifiche dei disegni):
${cap.pagine.map(p => `${T}/p${pad(p)}.json`).join('\n')}

${cap.taglio ? `ATTENZIONE, PAGINE DI CONFINE:\n${cap.taglio}\n` : ''}
COSA DEVI FARE:
1. Fondere i blocchi in un capitolo **coerente e scorrevole**. Le pagine si sovrappongono e si ripetono (il quaderno riprende spesso lo stesso titolo alla lezione dopo): elimina le ripetizioni, ricongiungi le frasi spezzate a cavallo di pagina, riordina se il quaderno torna indietro su un argomento.
2. Dare la struttura: \\chapter{${cap.titolo}} in cima, poi \\section/\\subsection sensate.
3. Uniformare la notazione lungo tutto il capitolo (un solo simbolo per concetto) e usare le macro del preambolo.
4. Colmare le discontinuita evidenti fra una pagina e l'altra, annotandolo nelle note.
5. Conservare i \\scan{NN} cosi che ogni parte resti rintracciabile alla pagina di origine.
6. Verificare che il LaTeX sia sintatticamente valido: ambienti bilanciati, \\begin{algorithm}[H], solo macro esistenti (vedi CONVENZIONI.md), niente $$, niente \\section dentro ambienti.
7. Se leggendo l'insieme noti errori matematici o logici sfuggiti alle singole pagine, correggili e annotali.

I riferimenti alle figure devono restare \\input{tikz/ID.tikz}: i file TikZ verranno generati in una fase successiva. Assicurati che ogni ID citato nel testo compaia anche nell'elenco "figure" che restituisci.

Scrivi il file con il tool Write in:
${file}

Restituisci: id "${cap.id}", il path, una sintesi della struttura del capitolo, l'elenco consolidato e deduplicato delle figure con le loro specifiche, e l'elenco consolidato delle note editoriali (incluse quelle nuove nate in cucitura).`,
    { label: `cucitura ${cap.id} ${cap.slug}`, phase: 'Cucitura', schema: CUCITURA_SCHEMA }
  )
}))

const ok = cuciti.filter(Boolean)
log(`Capitoli cuciti: ${ok.length}/${CAPITOLI.length}`)

return {
  nuove_pagine: nuove.filter(Boolean).map(n => n.pagina).sort((a, b) => a - b),
  nuove_fallite: MANCANTI.filter(p => !nuove.filter(Boolean).some(n => n.pagina === p)),
  capitoli: ok.map(c => ({ id: c.id, file: c.file, sintesi: c.sintesi, n_figure: (c.figure || []).length, n_note: (c.note || []).length })),
  capitoli_falliti: CAPITOLI.filter(c => !ok.some(o => o.id === c.id)).map(c => c.id),
  figure: ok.flatMap(c => c.figure || []),
  note: ok.flatMap(c => c.note || []),
}
