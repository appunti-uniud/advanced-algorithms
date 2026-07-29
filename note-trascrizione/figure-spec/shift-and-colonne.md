# Figura `shift-and-colonne`

- **Pagina della scansione:** 29
- **Tipo:** matrice / schema di colonne di bit
- **Didascalia prevista:** Dall'array al tempo $j$ all'array al tempo $j+1$: uno SHIFT verso il basso, che fa scendere di una posizione gli $1$ gia' accesi, seguito da un AND. L'$1$ disegnato sull'ultima riga corrisponde a un'occorrenza del pattern.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCHEMA GENERALE. Un rettangolo pieno di bordo (linee continue, leggermente irregolari nel manoscritto: va benissimo tracciarle diritte), largo circa 9 cm e alto circa 6 cm; rappresenta l'intera matrice, righe = posizioni del pattern, colonne = posizioni del testo. Nessuna griglia interna.

ETICHETTE DI ORIENTAMENTO (NON presenti nel manoscritto, aggiunte per leggibilita': renderle piccole e grigie). Sopra il bordo superiore, all'estrema sinistra $T[1]$ e all'estrema destra $T[m]$. A sinistra del bordo sinistro, in alto $P[1]$ e in basso $P[n]$.

LE DUE STRISCE. Tre linee verticali sottili, ravvicinate, poste appena a sinistra del centro del rettangolo, che vanno dal bordo superiore al bordo inferiore e delimitano DUE strisce strette e adiacenti (larghe ciascuna circa 1/12 della larghezza totale): la striscia sinistra e' la colonna $j$, la striscia destra e' la colonna $j+1$.

FRECCE DALL'ALTO. Sopra il rettangolo, due frecce curve che scendono a puntare sul bordo superiore delle strisce. La freccia sinistra parte da sinistra, curva verso destra e poi in basso, atterrando sul bordo superiore della striscia sinistra; sopra e a sinistra di essa l'etichetta su due righe "array al tempo $j$". La freccia destra parte da destra, curva verso sinistra e poi in basso, atterrando sul bordo superiore della striscia destra; sopra e a destra di essa l'etichetta su due righe "array al tempo $j+1$".

GLI 1 E LO SPOSTAMENTO. Dentro la striscia SINISTRA, a circa il 45% dell'altezza, la cifra $1$. Immediatamente sotto di essa, una freccia cortissima TRATTEGGIATA/punteggiata che punta verso il basso (spostamento di una posizione). Dentro la striscia DESTRA, a circa il 52% dell'altezza (cioe' una "riga" piu' in basso della precedente), un'altra cifra $1$: l'occhio deve leggere che l'1 e' sceso di una posizione passando da $j$ a $j+1$.

L'OCCORRENZA. A circa il 70% della larghezza (quindi ben a destra delle due strisce), appena SOPRA il bordo inferiore, un'altra cifra $1$ isolata: rappresenta un 1 sull'ultima riga, cioe' un'occorrenza del pattern.

FRECCE DAL BASSO. Sotto il bordo inferiore, due frecce curve che puntano verso l'ALTO. Quella di sinistra parte dalla parola \textsc{shift} (scritta in maiuscoletto sotto il rettangolo, a sinistra) e punta al bordo inferiore della striscia sinistra. Quella di destra punta al bordo inferiore della striscia destra e porta a destra la parola \textsc{and} (maiuscoletto).

STILE. Testo in italiano; SHIFT e AND in maiuscoletto come nel manoscritto. Nessun colore necessario.
