# Convenzioni per la trascrizione in LaTeX

## Contesto

Corso di **Algoritmi Avanzati** (laurea magistrale in Informatica, Università di Udine,
docente del corso). Appunti manoscritti in italiano, penna blu, quaderno a quadretti.
Fonte primaria: gli appunti dello studente (`appunti.pdf`, 88 pagine).
Fonte di supporto: Gli appunti del corso dell'anno precedente dell'anno precedente (2024), sintetizzati in
`.build/supporto/L??_sintesi.md` — **non coincidono** con l'anno del corso seguito e possono
a loro volta contenere errori.

Libri: Gusfield *Algorithms on Strings, Trees and Sequences*; Motwani–Raghavan *Randomized
Algorithms*; Navarro *Compact Data Structures*.

## Policy editoriale (decisa dall'utente — rispettarla alla lettera)

1. **Correggi quando sei sicuro.** Se un errore, una lacuna o una lettura dubbia si risolvono
   con certezza usando la conoscenza della materia, scrivi direttamente la versione **corretta
   e pulita**, senza marcatori nel testo. Il documento finale deve leggersi come appunti buoni,
   non come una trascrizione piena di note.
2. **Marca solo quando resti genuinamente incerto**, con gli ambienti `dubbio` / `lacuna`
   (o `\dubbioinl{}` / `\lacunainl{}` inline).
3. **Logga sempre tutto.** Ogni correzione, ricostruzione, lettura incerta risolta, divergenza
   dagli appunti dell'anno precedente e interpretazione di figura va riportata nel campo `note` del risultato, anche
   quando non lascia traccia nel LaTeX. Questo alimenta `NOTE-EDITORIALI.md`.
4. **Ragiona a fondo su semantica e logica.** Verifica la correttezza di definizioni,
   dimostrazioni, esempi, invarianti, indici e complessità. Ricostruisci ciò che gli appunti dell'anno precedente
   *intendeva* dire. **anche gli appunti del corso dell'anno precedente possono contenere errori**: se lo rilevi, correggi e annota.
5. Gli appunti dello studente sono la **fonte primaria**; quelli dell'anno precedente servono a colmare
   lacune e a disambiguare, non a sostituire.

## Come leggere le immagini

Per ogni pagina `NN` (zero-padded a 2 cifre) in `.build/pages/`:

- `pNN_full.png` — pagina intera a 170 DPI: serve per **layout, struttura, disegni**.
- `pNN_b1.png`, `pNN_b2.png`, `pNN_b3.png` — tre bande orizzontali sovrapposte a 300 DPI
  (alto / centro / basso): sono quelle che rendono **decifrabile il corsivo**. Leggile sempre.

Tecnica: la calligrafia è difficile, ma la **matematica fa da correttore d'errore**. Identifica
prima *quale* teorema/algoritmo è, poi usa la struttura formale attesa per disambiguare i
grafemi. Un simbolo illeggibile in `\sum_{i=0}^{n-1} 1/p_i` si deduce dal contesto.

## Convenzioni LaTeX

Classe `academica` (Airy), compilazione **lualatex**. Il preambolo è `preamble.tex`.

### Ambienti (in italiano, numerati; aggiungere `*` per la versione non numerata)

`definizione`, `teorema`, `proposizione`, `corollario`, `dimostrazione`, `esempio`,
`esercizio`, `domanda`, più `osservazione` (non numerato) e `note`.
Argomento opzionale = titolo: `\begin{teorema}[Markov]\label{thm:markov}`.

Marcatori editoriali: ambienti `dubbio` e `lacuna`; inline `\dubbioinl{...}`, `\lacunainl{...}`.
Rimando alla scansione: `\scan{42}` (nota a margine, usabile anche dentro i box).

### Macro disponibili (da `preamble.tex` e dalla classe)

- Classe: `\S`=Σ, `\e`=ε, `\a\b\d\s\p\t\u\w\y`, `\D`=Δ, `\O`=Ω, `\A\B\C\F\G\L\P\T\V` calligrafici,
  `\NN\RR\QQ\CC`, `\abs{}`, `\norm{}`, `\set{}`, `\tuple{}`, `\ie`, `\eg`, `\st`, `\mod`.
- Stringhe: `\alfa`, `\sub{S}{i}{j}` = S[i..j], `\suf{S}{i}`, `\pre{S}{i}`, `\vuota`,
  `\lcp`, `\lcs`, `\lca`, `\lcey`.
- KMP/Z: `\spv{i}`, `\spp{i}`, `\Zv{i}`, `\Zbox`, `\fail`.
- Boyer–Moore: `\bc{x}`, `\Lp{i}`, `\lp{i}`. Aho–Corasick: `\goto`, `\out`, `\nv{v}`.
- Suffix tree: `\STrie`, `\STree`, `\albero{T}`, `\slink`, `\etich{}`, `\cammino{}`.
- Allineamento: `\dedit`, `\dham`, `\Dm{i}{j}`, `\Vm{i}{j}`, `\gap`, `\indel`.
- Randomizzati: `\Pr`, `\E`, `\Var`, `\indic{...}`, `\RandQS`, `\mincut`, `\contract`,
  `\LasVegas`, `\MonteCarlo`, `\RP\coRP\ZPP\BPP\P\NP\PSPACE`.
- Compresse: `\rank`, `\select`, `\access`, `\BWT`, `\FMindex`, `\SA`, `\LF`, `\entropia{k}`.
- Varie: `\Oh` (O grande), `\Th`, `\Om`, `\defeq`, `\argmin`, `\argmax`.

Se serve una macro che non esiste, **non inventarla**: scrivi il LaTeX per esteso e segnalalo
nelle note.

Nota sulle modalità: i nomi testuali (`\RandQS`, `\LasVegas`, `\MonteCarlo`, `\mincut`,
`\contract`, `\STrie`, `\STree`, `\BWT`, `\FMindex`, `\Zbox`) sono definiti con `\xspace` e
si usano **in corpo di testo**. I simboli matematici (`\S`, `\e`, `\Oh`, `\spv{}`, `\Zv{}`,
`\sub{}{}{}`, …) vanno in modalità matematica. Le classi di complessità (`\RP`, `\BPP`, `\P`,
`\NP`, …) sono `\mathsf` e vanno quindi tra `$…$`.

### Regole di stile

- Tutto in **italiano**, incluso il testo dentro le figure.
- Testo discorsivo in prosa scorrevole: gli appunti sono telegrafici, il risultato no.
  Espandi le abbreviazioni («p.to debole» → «punto debole»), ma non aggiungere contenuto
  che non c'è (salvo colmare lacune, e in tal caso **annotalo**).
- Formule fuori testo con `\[ ... \]` o `equation*`/`align*`. Niente `$$`.
- Pseudocodice con `algorithm`+`algorithmic` (usare **sempre** `\begin{algorithm}[H]`,
  altrimenti il float va perso).
- Figure: `\begin{figure}[H] \centering \input{tikz/nome.tikz} \caption{...} \end{figure}`.
- Non scrivere `\chapter`/`\section` nella trascrizione di pagina: la struttura viene decisa
  in fase di assemblaggio. Usa `\subsection`/`\paragraph` solo se il quaderno ha titoli espliciti.
- Metti `\scan{NN}` all'inizio del contenuto di ogni pagina, così il rimando alla scansione
  resta tracciabile.

### Figure

**Ricostruire in TikZ** interpretando il disegno con la semantica e le conoscenze di
algoritmica (un suffix tree, un automa Aho–Corasick, una matrice DP, un grafo per il min-cut
hanno una forma attesa: usala per ricostruire ciò che il disegno vuole dire).
Inserire un ritaglio della scansione **solo** quando non c'è davvero alternativa.

Il trascrittore non disegna: produce una **specifica** dettagliata della figura (nodi, archi,
etichette, layout, significato) che verrà passata a un agente dedicato al TikZ insieme
all'immagine della pagina.
