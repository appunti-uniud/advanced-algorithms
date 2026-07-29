# Algoritmi Avanzati

Appunti del corso di Algoritmi Avanzati (magistrale in Informatica, Uniud, prof. Policriti).

> [!WARNING]
> Trascrizione automatica, non ancora adeguatamente rivista. Questi appunti sono stati trascritti da un LLM (yep lol oof :wilted_flower:) a partire da un quaderno scritto a mano. Non sono materiale ufficiale del corso.
>
> Dove ragionevolmente sicuro, il modello ha corretto errori e ricostruito pezzi mancanti senza segnalarlo. Ci sono quindi passaggi che non erano negli appunti originali e che possono divergere da quello che è stato detto a lezione. In più la calligrafia era difficile, quindi qualche simbolo può essere stato letto male.
>
> Quindi questi appunti non sono affatto affidabili, è bene verificare dai libri o dal materiale del corso qualsiasi cosa anche lontanamente sospetta.
> Correzioni e PR sono benvenute.

## Build

```sh
make        # -> algoritmi.pdf
```

## Cosa c'è

- `lezioni/`: string matching esatto (KMP e $Z$, Boyer-Moore, Aho-Corasick, suffix tree e Ukkonen, Karp-Rabin, Shift-And, LCA), matching inesatto (allineamento, Landau-Vishkin), algoritmi randomizzati (RandQS, Min-Cut, RandAuto, 2-SAT, catene di Markov, random walk su grafi). In appendice Weisfeiler-Leman, che è negli appunti ma è fuori programma (ma interessante)
- `tikz/`: figure ridisegnate
- `appunti.pdf`: scansione appunti cartacei, a 150 DPI
- `note-trascrizione/`: tutto quello che è stato prodotto dall'LLM durante la trascrizione. vedi il [README lì dentro](note-trascrizione/README.md)

(manca la parte sulle strutture dati compresse)

## Verificare

Ogni blocco di testo ha a margine un `scan p. N` che punta alla pagina di `appunti.pdf` da cui viene, così da poterli confrontare.

[`note-trascrizione/NOTE-EDITORIALI.md`](note-trascrizione/NOTE-EDITORIALI.md) elenca tutte le scelte fatte (correzioni, ricostruzioni, letture incerte, interpretazioni dei disegni) con il numero di pagina. Comincia dai punti rimasti irrisolti: sono ~40 e nel PDF sono già marcati con i riquadri Dubbio e Lacuna.

Attenzione: un passaggio non marcato è non marcato, non verificato.

## Scrivere

Ambienti in italiano, numerati (`*` per la versione senza numero): `definizione`, `teorema`, `proposizione`, `corollario`, `dimostrazione`, `esempio`, `esercizio`, `domanda`, `osservazione`. Più i marcatori:

```latex
\scan{42}                                  % rimando alla pagina della scansione
\begin{dubbio}[...] ... \end{dubbio}       % lettura incerta
\begin{lacuna}[...] ... \end{lacuna}       % buco negli appunti
```

Le macro di dominio (`\spv{i}`, `\Zv{i}`, `\lca`, `\Oh`, …) sono in `preamble.tex`.

Il documento si chiama `algoritmi.tex` e non `main.tex` apposta: `Airy/academica/` contiene un suo `main.tex` che verrebbe compilato al posto nostro, senza dare errore.

## Fonti

Il quaderno è la fonte primaria. Per colmare qualche lacuna è stato usato anche materiale del corso di un anno precedente, che non è ridistribuito qui. Libri: Gusfield "Algorithms on Strings, Trees and Sequences", Motwani-Raghavan "Randomized Algorithms", Navarro "Compact Data Structures".
