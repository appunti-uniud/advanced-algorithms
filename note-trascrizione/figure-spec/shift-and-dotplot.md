# Figura `shift-and-dotplot`

- **Pagina della scansione:** 29
- **Tipo:** matrice / schema di stringhe (dot-plot)
- **Didascalia prevista:** La matrice di bit (dot-plot) di $P$ contro $T$: righe indicizzate dal pattern, colonne dal testo. La cella $(i,j)$ vale $1$ se e solo se $P[i]=T[j]$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCHEMA GENERALE. Un rettangolo largo circa 9 cm e alto circa 6 cm che rappresenta la matrice D (righe = pattern, colonne = testo). NON disegnare la griglia completa: nel manoscritto la matrice e' solo accennata: bordo tratteggiato sottile oppure nessun bordo, con poche linee-guida orizzontali sottili che partono dalle etichette di riga e corrono verso destra. Preferire un frame leggerissimo (grigio 40%) senza celle.

ETICHETTE DI COLONNA (sopra il bordo superiore, allineate al bordo, da sinistra a destra): $T[1]$, $T[2]$, poi puntini orizzontali $\dots$, poi a circa il 60% della larghezza $T[j]$, poi $\dots$, e all'estremo destro $T[m]$.

ETICHETTE DI RIGA (a sinistra del bordo sinistro, dall'alto in basso): $P[1]$, $P[2]$, puntini verticali $\vdots$, $P[i]$, puntini verticali $\vdots$, $P[n]$. La riga $P[i]$ sta a circa il 55% dell'altezza; $P[n]$ e' l'ultima, in basso. ATTENZIONE: le etichette sono state armonizzate rispetto al manoscritto, che qui usa n e m scambiati (T[n], P[m]); nel capitolo vale |P|=n, |T|=m.

LINEE DI RIFERIMENTO. Una linea verticale PUNTEGGIATA scende dall'etichetta $T[j]$ attraversando tutta l'altezza del rettangolo. Una linea orizzontale TRATTEGGIATA parte dall'etichetta $P[i]$ e corre verso destra, oltrepassa la verticale punteggiata e prosegue fuori dal rettangolo fino a raggiungere, alla stessa altezza, l'etichetta della cella. Le due linee individuano la cella $(i,j)$. Nel manoscritto l'etichetta della cella e' il solo simbolo "0/1": si puo' scriverla come $D[i,j]$ seguito da "$=0/1$", oppure come "0/1" con $D[i,j]$ in corsivo grigio accanto (nel testo la matrice si chiama D).

BIFORCAZIONE. Dall'etichetta della cella partono due segmenti rettilinei che formano una "<" aperta verso destra: il segmento SUPERIORE sale verso destra e termina nella cifra $0$; alla sua destra la glossa $P[i]\neq T[j]$ (eventualmente con "(mismatch)" in tondo piccolo). Il segmento INFERIORE scende verso destra e termina nella cifra $1$; alla sua destra la glossa $P[i]=T[j]$ (eventualmente con "(match)").

TRATTI INTERNI (il contenuto semantico del disegno).
(a) Nella zona in alto a sinistra della matrice, un tratto a scaletta/ondulato inclinato a circa 45 gradi che DISCENDE da sinistra verso destra, all'incirca dal punto (colonna 1, riga 1) al punto (colonna 3, riga 4) in coordinate relative; disegnarlo come polilinea a gradini leggermente irregolare, tratto pieno. Sopra di esso, in corsivo piccolo, l'etichetta "match".
(b) Poco piu' a destra, un secondo tratto a scaletta/ondulato inclinato a circa 45 gradi che SALE da sinistra verso destra, all'incirca dal punto (colonna 4, riga 6) al punto (colonna 6, riga 4). Sopra di esso, su due righe, l'etichetta "match inverso".
I due tratti servono a mostrare che in un dot-plot un allineamento diretto compare come diagonale discendente e un allineamento invertito come antidiagonale ascendente. Nel manoscritto ci sono anche due o tre segmenti verticali accessori attorno al secondo tratto (delimitazioni tracciate a mano): sono inessenziali e possono essere omessi.

STILE. Tutto il testo in italiano; gli indici in math mode. Nessun colore necessario (il manoscritto e' monocromo blu).
