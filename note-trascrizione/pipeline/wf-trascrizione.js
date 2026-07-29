export const meta = {
  name: 'appunti-trascrizione',
  description: 'Trascrive in LaTeX i capitoli indicati: pagina per pagina, poi cucitura, poi verifica avversariale',
  phases: [
    { title: 'Trascrizione', detail: 'un agente per pagina, 4 immagini + contesto' },
    { title: 'Cucitura', detail: 'un agente per capitolo, scrive lezioni/*.tex' },
    { title: 'Verifica', detail: 'un agente diverso rilegge scan vs LaTeX' },
  ],
}

const ROOT = '/home/rob/UNI/algoritmi_avanzati'
const B = `${ROOT}/.build`

const CAPITOLI = [
  { id: '01', slug: 'introduzione', titolo: 'Introduzione e pattern matching esatto', pagine: [1, 2], supporto: ['L01'] },
  { id: '02', slug: 'kmp-z', titolo: 'Knuth--Morris--Pratt e la funzione $Z$', pagine: [3, 4, 5, 6, 7, 8, 9], supporto: ['L01', 'L02'] },
  { id: '03', slug: 'boyer-moore', titolo: 'Boyer--Moore', pagine: [9, 10, 11], supporto: ['L03'] },
  { id: '04', slug: 'aho-corasick', titolo: 'Matching multi-pattern: keyword tree e Aho--Corasick', pagine: [12, 13, 14, 15], supporto: ['L04'] },
  { id: '05', slug: 'suffix-tree', titolo: 'Suffix trie, suffix tree e algoritmo di Ukkonen', pagine: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], supporto: ['L05'] },
  { id: '06', slug: 'karp-rabin', titolo: 'Karp--Rabin', pagine: [26, 27, 28], supporto: ['L06'] },
  { id: '07', slug: 'shift-and', titolo: 'Shift--And', pagine: [29, 30], supporto: ['L07'] },
  { id: '08', slug: 'lca', titolo: 'Lowest Common Ancestor in tempo costante', pagine: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], supporto: ['L07', 'L08', 'L09'] },
  { id: '09', slug: 'distanze-allineamento', titolo: 'Pattern matching inesatto: distanze e allineamento', pagine: [41, 42, 43, 44, 45, 46, 47], supporto: ['L09', 'L10', 'L11'] },
  { id: '10', slug: 'landau-vishkin', titolo: 'Landau--Vishkin', pagine: [48, 49, 50, 51], supporto: ['L12'] },
  { id: '11', slug: 'randqs', titolo: 'Algoritmi randomizzati e RandQS', pagine: [51, 52, 53, 54], supporto: ['L13'] },
  { id: '12', slug: 'min-cut', titolo: 'Min-Cut di Karger', pagine: [54, 55, 56, 57, 58, 59], supporto: ['L14'] },
  { id: '13', slug: 'randauto', titolo: 'Partizioni binarie del piano e RandAuto', pagine: [60, 61, 62, 63, 64], supporto: ['L15'] },
  { id: '14', slug: 'random-walk-2sat', titolo: 'Random walk e algoritmo randomizzato per 2-SAT', pagine: [65, 66, 67, 68, 69, 70, 71, 72], supporto: ['L17', 'L16'] },
  { id: '15', slug: 'catene-markov', titolo: 'Catene di Markov', pagine: [72, 73, 74, 75, 76, 77, 78, 79], supporto: ['L16'] },
  { id: '16', slug: 'random-walk-grafi', titolo: 'Random walk su grafi: hitting, commute e cover time', pagine: [83, 84, 85, 86, 87, 88], supporto: ['L16'] },
  { id: 'A', slug: 'weisfeiler-leman', titolo: 'Graph Isomorphism e la gerarchia di Weisfeiler--Leman', pagine: [79, 80, 81], supporto: [] },
]

const scelti = (args && args.capitoli && args.capitoli.length)
  ? CAPITOLI.filter(c => args.capitoli.includes(c.id))
  : CAPITOLI

const pad = n => String(n).padStart(2, '0')
const imgs = n => [`${B}/pages/p${pad(n)}_full.png`, `${B}/pages/p${pad(n)}_b1.png`, `${B}/pages/p${pad(n)}_b2.png`, `${B}/pages/p${pad(n)}_b3.png`]

const NOTA_SCHEMA = {
  type: 'object',
  properties: {
    tipo: { type: 'string', enum: ['correzione', 'ricostruzione', 'lettura-incerta', 'divergenza-anno-prec', 'errore-anno-prec', 'figura', 'lacuna', 'altro'] },
    pagina: { type: 'integer' },
    testo: { type: 'string', description: 'cosa dicevano gli appunti, cosa e stato scritto e perche' },
    risolto: { type: 'boolean', description: 'true se risolto con certezza (nessun marcatore nel LaTeX), false se resta un dubbio marcato' },
  },
  required: ['tipo', 'pagina', 'testo', 'risolto'],
}

const FIGURA_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string', description: 'nome file senza estensione, es. "kmp-shift"' },
    pagina: { type: 'integer' },
    didascalia: { type: 'string' },
    tipo: { type: 'string', description: 'albero / automa / grafo / matrice DP / schema di stringhe / tabella / altro' },
    specifica: { type: 'string', description: 'descrizione COMPLETA per ridisegnare in TikZ: nodi, archi, etichette, posizioni relative, annotazioni, significato algoritmico' },
    fattibile_tikz: { type: 'boolean' },
  },
  required: ['id', 'pagina', 'didascalia', 'tipo', 'specifica', 'fattibile_tikz'],
}

const TRASCRIZIONE_SCHEMA = {
  type: 'object',
  properties: {
    pagina: { type: 'integer' },
    latex: { type: 'string', description: 'corpo LaTeX della pagina, senza \\chapter/\\section' },
    note: { type: 'array', items: NOTA_SCHEMA },
    figure: { type: 'array', items: FIGURA_SCHEMA },
    continuita: { type: 'string', description: 'cosa resta in sospeso a fine pagina e cosa ci si aspetta nella successiva' },
    confidenza: { type: 'string', enum: ['alta', 'media', 'bassa'] },
  },
  required: ['pagina', 'latex', 'note', 'figure', 'continuita', 'confidenza'],
}

const CUCITURA_SCHEMA = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    sintesi: { type: 'string', description: 'struttura finale del capitolo in 5-10 righe' },
    figure: { type: 'array', items: FIGURA_SCHEMA },
    note: { type: 'array', items: NOTA_SCHEMA },
  },
  required: ['file', 'sintesi', 'figure', 'note'],
}

const VERIFICA_SCHEMA = {
  type: 'object',
  properties: {
    pagina: { type: 'integer' },
    esito: { type: 'string', enum: ['ok', 'problemi-minori', 'problemi-gravi'] },
    problemi: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          gravita: { type: 'string', enum: ['alta', 'media', 'bassa'] },
          categoria: { type: 'string', enum: ['omissione', 'trascrizione-errata', 'errore-matematico', 'errore-logico', 'notazione', 'figura', 'latex'] },
          descrizione: { type: 'string' },
          correzione: { type: 'string', description: 'come va corretto, concretamente' },
        },
        required: ['gravita', 'categoria', 'descrizione', 'correzione'],
      },
    },
  },
  required: ['pagina', 'esito', 'problemi'],
}

const PRELUDIO = `Leggi PRIMA di tutto il file ${B}/CONVENZIONI.md: contiene il contesto del corso, la policy editoriale da rispettare alla lettera, l'elenco delle macro e degli ambienti LaTeX disponibili e le regole di stile.`

// ------------------------------------------------------------------
phase('Trascrizione')

const risultati = await pipeline(
  scelti,

  // --- stage 1: trascrizione pagina per pagina, in parallelo ---
  cap => parallel(cap.pagine.map(p => () => {
    const prev = p > 1 ? `${B}/pages/p${pad(p - 1)}_full.png` : null
    const next = p < 88 ? `${B}/pages/p${pad(p + 1)}_full.png` : null
    const sintesi = cap.supporto.map(L => `${B}/supporto/${L}_sintesi.md`)
    return agent(
      `${PRELUDIO}

COMPITO: trascrivere in LaTeX la **pagina ${p}** degli appunti manoscritti.

Fa parte del capitolo "${cap.titolo}" (pagine ${cap.pagine.join(', ')}).

Immagini della pagina ${p} (leggile TUTTE con Read):
${imgs(p).join('\n')}

Pagine adiacenti, SOLO come contesto di continuita (non trascriverle):
${[prev, next].filter(Boolean).join('\n')}

${sintesi.length ? `Appunti dell'anno precedente sullo stesso argomento (fonte di supporto, leggili):\n${sintesi.join('\n')}` : 'Per questo argomento non esistono appunti del corso dell'anno precedente: affidati alla tua conoscenza della materia.'}

METODO:
1. Leggi la pagina intera per capire struttura e disegni, poi le tre bande ad alta risoluzione per decifrare il testo.
2. Identifica di quale risultato/algoritmo si tratta, poi usa la struttura matematica attesa per disambiguare i grafemi incerti.
3. Confronta con Gli appunti del corso dell'anno precedente e con la teoria standard. Verifica indici, invarianti, quantificatori, direzioni delle disuguaglianze, casi base, complessita.
4. Scrivi LaTeX **pulito e corretto** in italiano. Correggi silenziosamente cio di cui sei certo, marca con \`dubbio\`/\`lacuna\` solo cio che resta davvero irrisolto.
5. Registra in \`note\` OGNI scelta: correzioni, ricostruzioni, letture incerte risolte, punti in cui gli appunti dell'anno precedente sbaglia, interpretazioni di figura. Sii specifico ("il quaderno scrive X, ho scritto Y perche Z").
6. Per ogni disegno produci una voce in \`figure\` con una specifica sufficiente a ridisegnarlo in TikZ senza rivedere l'originale. Non scrivere il TikZ.
   Nel LaTeX metti al suo posto: \\begin{figure}[H]\\centering\\input{tikz/ID.tikz}\\caption{...}\\end{figure}
7. Inizia il LaTeX con \\scan{${p}}.

Non usare \\chapter o \\section: la struttura si decide in fase di cucitura.`,
      { label: `p.${p}`, phase: 'Trascrizione', schema: TRASCRIZIONE_SCHEMA }
    )
  })),

  // --- stage 2: cucitura del capitolo ---
  async (pagineRes, cap) => {
    const ok = (pagineRes || []).filter(Boolean)
    if (!ok.length) return null
    const file = `${ROOT}/lezioni/${cap.id}-${cap.slug}.tex`
    const blocchi = ok.map(r => `%%%%% pagina ${r.pagina} (confidenza: ${r.confidenza}) %%%%%\n% continuita: ${(r.continuita || '').replace(/\n/g, ' ')}\n${r.latex}`).join('\n\n')
    const cuc = await agent(
      `${PRELUDIO}

COMPITO: cucire le trascrizioni delle singole pagine nel capitolo "${cap.titolo}" e scriverlo su file.

Ti passo qui sotto le trascrizioni pagina per pagina (pagine ${cap.pagine.join(', ')}), gia prodotte da altri agenti, con le loro note di continuita.

<<<TRASCRIZIONI
${blocchi}
TRASCRIZIONI>>>

Specifiche delle figure raccolte:
${JSON.stringify(ok.flatMap(r => r.figure || []), null, 1)}

COSA DEVI FARE:
1. Fondere i blocchi in un capitolo **coerente e scorrevole**. Le pagine si sovrappongono e si ripetono (il quaderno riprende spesso lo stesso titolo il giorno dopo): elimina le ripetizioni, ricongiungi le frasi spezzate a cavallo di pagina, riordina se il quaderno torna indietro su un argomento.
2. Dare la struttura: \\chapter{${cap.titolo}} in cima, poi \\section/\\subsection sensate basate sui titoli scritti a mano.
3. Uniformare la notazione lungo tutto il capitolo (un solo simbolo per ogni concetto) e usare le macro del preambolo.
4. Colmare le discontinuita evidenti fra una pagina e l'altra, annotandolo.
5. Conservare i \\scan{NN} in modo che ogni parte resti rintracciabile alla pagina di origine.
6. Verificare che il LaTeX sia sintatticamente valido: ambienti bilanciati, \\begin{algorithm}[H], niente macro inesistenti, niente $$.
7. Se leggendo l'insieme noti errori matematici o logici sfuggiti alle singole pagine, correggili e annotali.

Scrivi il file con il tool Write in:
${file}

Restituisci il path, una sintesi della struttura, l'elenco consolidato delle figure (con le specifiche, deduplicate) e l'elenco consolidato delle note editoriali (comprese quelle nuove introdotte in cucitura).`,
      { label: `cucitura ${cap.id} ${cap.slug}`, phase: 'Cucitura', schema: CUCITURA_SCHEMA }
    )
    return { cap, pagine: ok, cucitura: cuc, file }
  },

  // --- stage 3: verifica avversariale, una pagina per agente ---
  async (res, cap) => {
    if (!res) return null
    const ver = await parallel(cap.pagine.map(p => () => agent(
      `${PRELUDIO}

COMPITO: **verifica avversariale** della pagina ${p} del capitolo "${cap.titolo}".

Un altro agente ha trascritto questa pagina e il risultato e confluito nel file:
${res.file}

Il tuo compito e trovarne i difetti, non confermarlo. Procedi cosi:
1. Leggi le immagini originali della pagina ${p}:
${imgs(p).join('\n')}
2. Leggi il file ${res.file} e individua la parte che corrisponde alla pagina ${p} (cerca \\scan{${p}}).
3. Confronta rigorosamente:
   a. **Fedelta**: manca qualcosa che c'e sul foglio? E stato letto male un simbolo, un indice, un pedice, un nome?
   b. **Correttezza matematica e logica**: definizioni ben poste, dimostrazioni valide, indici e casi base giusti, disuguaglianze nel verso corretto, complessita corrette, quantificatori al posto giusto. Ricontrolla i passaggi, non fidarti.
   c. **Notazione** coerente con il resto del capitolo.
   d. **LaTeX**: ambienti bilanciati, macro esistenti, figure referenziate.
4. Incrocia con Gli appunti del corso dell'anno precedente${cap.supporto.length ? ` (${cap.supporto.map(L => `${B}/supporto/${L}_sintesi.md`).join(', ')})` : ''} e con la teoria standard del corso.

Segnala SOLO problemi reali e concreti, con la correzione da applicare. Se la trascrizione e corretta, dillo (esito "ok", lista vuota): non inventare problemi per avere qualcosa da dire.`,
      { label: `verifica p.${p}`, phase: 'Verifica', schema: VERIFICA_SCHEMA }
    )))
    return { ...res, verifiche: ver.filter(Boolean) }
  }
)

const buoni = risultati.filter(Boolean)
const problemi = buoni.flatMap(r => (r.verifiche || []).flatMap(v => (v.problemi || []).map(p => ({ ...p, pagina: v.pagina, capitolo: r.cap.id }))))
log(`Capitoli completati: ${buoni.length}/${scelti.length}. Problemi rilevati in verifica: ${problemi.length} (gravi: ${problemi.filter(p => p.gravita === 'alta').length})`)

return {
  capitoli: buoni.map(r => ({
    id: r.cap.id,
    titolo: r.cap.titolo,
    file: r.file,
    sintesi: r.cucitura && r.cucitura.sintesi,
    n_figure: (r.cucitura && r.cucitura.figure || []).length,
    confidenze: r.pagine.map(p => `p.${p.pagina}:${p.confidenza}`).join(' '),
  })),
  figure: buoni.flatMap(r => (r.cucitura && r.cucitura.figure) || []),
  note: buoni.flatMap(r => (r.cucitura && r.cucitura.note) || []),
  problemi,
}
