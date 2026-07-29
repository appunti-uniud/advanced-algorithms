# Note per la trascrizione

Tutto quello che è uscito dalla trascrizione di `appunti.pdf` in LaTeX.

Più che altro per controllare cosa ha fatto l'LLM e perché xP
Warning: output/trascrizioni/note iniziali generate automaticamente.

## Da dove partire

[`NOTE-EDITORIALI.md`](NOTE-EDITORIALI.md): ogni singola scelta dell'LLM durante la trascrizione, con il numero di pagina. Si apre con i punti rimasti irrisolti (~40), che nel PDF sono già marcati con i riquadri Dubbio e Lacuna: è da lì che conviene cominciare.

Poi, diviso per tipo (tabella dall'LLM):

| | | |
|---|---|---:|
| Correzioni | errori corretti perché ritenuti certi | 174 |
| Errori nella fonte di supporto | dove sbagliava anche quella | 18 |
| Divergenze | le due fonti discordano, quale ha vinto | 62 |
| Lacune colmate | buchi riempiti da teoria o fonte di supporto | 77 |
| Ricostruzioni | dedotto dal contesto | 230 |
| Letture incerte | grafemi ambigui e come sono stati sciolti | 183 |
| Figure | come sono stati interpretati i disegni | 148 |
| Altre scelte | resa, struttura, stile | 264 |
| Verifica | rilievi applicati / respinti | 144 / 24 |

## Cartelle

- `trascrizioni/`: una per pagina, con LaTeX prodotto, note e specifiche delle figure
- `verifiche/`: una per pagina, cosa ha trovato la rilettura con gravità e correzione proposta
- `correzioni/`: una per capitolo, cosa è stato applicato e cosa respinto col perché
- `figure-spec/`: la descrizione testuale delle 117 figure, da cui è nato il TikZ
- `pipeline/`: gli script che hanno prodotto tutto

## Step

1. `pipeline/render.sh` taglia ogni pagina in bande ad alta risoluzione (a pagina intera l'LLM non riesce a decodificare il testo)
2. una passata cataloga argomenti e figure, e ne esce la divisione in capitoli
3. un agente per pagina la trascrive, con davanti le immagini, le pagine vicine per il contesto e (dove c'è) la fonte di supporto. Regole in `pipeline/CONVENZIONI.md`
4. un agente per capitolo cuce le pagine, toglie le ripetizioni e uniforma la notazione
5. le figure vengono ridisegnate in TikZ interpretandole, non ricalcandole, e validate compilandole (`pipeline/prova-tikz.sh`)
6. ogni pagina viene riletta da un agente diverso, con il compito di trovarci i difetti
7. un agente per capitolo applica le correzioni (o le respinge) e ricompila (`pipeline/prova-capitolo.sh`)

`pipeline/genera-note.py` rigenera `NOTE-EDITORIALI.md` dai JSON qui dentro.

Immagini renderizzate e fonte di supporto non sono nel repo: `render.sh` le rigenera se necessario.

## Limiti

- trascritto una pagina alla volta: la coerenza è stata ricucita per capitolo, fra capitoli diversi può restare qualche disallineamento di notazione
- revisione iniziale della trascrizione fatta dallo stesso tipo di modello che ha scritto il testo, plausibilmente con gli stessi punti ciechi (poi rimane un LLM)
- le figure sono ricostruzioni: dove il disegno era ambiguo o sbagliato è stata disegnata la versione ritenuta corretta (annotata)
