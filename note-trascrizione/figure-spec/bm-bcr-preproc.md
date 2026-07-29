# Figura `bm-bcr-preproc`

- **Pagina della scansione:** 10
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Preprocessing della BCR: dalla posizione $j$ si guarda all'indietro dentro $P$ per individuare la posizione $p<j$ più a destra con $P[p]=x$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE: rispetto alla specifica prodotta sulla singola pagina le due tacche sono state RIETICHETTATE, per uniformarsi alla definizione usata nel capitolo, $R_j(x)=\max\{p : 1\le p<j,\ P[p]=x\}$: la tacca di destra (posizione corrente, dove cade il mismatch) è ora $j$ e non $i$; la tacca di sinistra (occorrenza trovata) è ora $p$ e non $j$. Nel capitolo la lettera $i$ è riservata all'inizio del suffisso già riconosciuto.

DISEGNO ORIGINALE (fedele). Un unico segmento orizzontale spesso, tratto azzurro pieno, lungo circa 9 quadretti, che rappresenta l'INTERO pattern P; nessun rettangolo, nessuna suddivisione in celle. Il segmento termina a destra con una piccola punta di freccia, seguita a circa mezzo quadretto di distanza dall'etichetta $P$. A circa tre quarti della lunghezza (contando da sinistra) ci sono DUE tacche verticali ravvicinate che attraversano il segmento, distanti fra loro circa mezzo quadretto: quella di sinistra ha l'etichetta scritta SOTTO il segmento, quella di destra ha l'etichetta scritta SOPRA il segmento. Nel manoscritto non c'è altro.

RICOSTRUZIONE DA DISEGNARE (fedele nella sostanza, arricchita per leggibilità; l'arricchimento riprende la figura corrispondente degli appunti del docente per la BCR). Barra orizzontale spessa da (0,0) a (10,0), colore di accento tenue, con punta di freccia all'estremo destro; etichetta $P$ subito a destra della punta, allineata verticalmente al centro della barra. Tacca verticale (segmento corto che attraversa la barra, circa 0.25 sopra e 0.25 sotto) in $x=6.4$, etichettata $p$ SOTTO la barra; seconda tacca identica in $x=7.6$, etichettata $j$ SOPRA la barra. Nella cella compresa fra le due tacche, appena a destra della tacca $p$ e SOPRA la barra, il carattere $x$ (in corsivo matematico, più piccolo): è l'occorrenza cercata. Freccia curva TRATTEGGIATA che parte da sotto la barra all'ascissa della tacca $j$, scende di circa 0.8, e punta verso SINISTRA fino a sotto la tacca $p$ (verso di percorrenza: da $j$ verso $p$), a indicare che dalla posizione $j$ si guarda all'indietro dentro $P$ per trovare l'occorrenza di $x$ più vicina; etichetta opzionale sulla freccia, in grigio piccolo: $j-R_j(x)$ (la misura dello spostamento). Etichette facoltative agli estremi della barra, in grigio: $1$ a sinistra e $n$ a destra. Nessun altro elemento, nessun testo in inglese; tutte le etichette sono simboli matematici.
