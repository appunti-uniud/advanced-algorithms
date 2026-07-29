# Figura `diagonali-numerate`

- **Pagina della scansione:** 49
- **Tipo:** matrice DP / schema delle diagonali
- **Didascalia prevista:** Convenzione per la numerazione delle diagonali della tabella di programmazione dinamica: la cella $(l,c)$ sta sulla diagonale $c-l$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema dell'angolo in alto a sinistra della tabella di programmazione dinamica, con le diagonali numerate.

STRUTTURA.
- Nell'originale sono tracciati solo due bordi: una lunga linea orizzontale (bordo superiore della tabella) che prosegue molto a destra, ben oltre la zona occupata dalle diagonali (circa il doppio), e una linea verticale (bordo sinistro) che scende per circa 7–8 quadretti. La tabella non è chiusa né a destra né in basso.
- Nel ridisegno si può mantenere questa resa «ad angolo» (consigliata: è quella del quaderno) oppure disegnare un rettangolo largo e basso con griglia molto leggera. In entrambi i casi la griglia NON va marcata: le diagonali devono restare l'elemento dominante.

ETICHETTE.
- Sopra il bordo superiore, allineate alle colonne $0,1,2,3,\dots$: la sequenza «$0\ \ 1\ \ 2\ \ 3\ \ \cdots$». Sono i numeri delle diagonali non negative, scritti nella cella iniziale di ciascuna diagonale.
- A sinistra del bordo sinistro, allineate alle righe $0,1,2,3,\dots$, dall'alto in basso: $0$, $-1$, $-2$, $-3$, poi $\vdots$ e infine $-n$. Sono i numeri delle diagonali negative. (Nell'originale l'ultima etichetta è un tratto verticale poco leggibile, interpretato come $-n$ con $n=|P|$ = numero di righe.)

DIAGONALI.
- Sei o sette segmenti paralleli con pendenza a 45 gradi verso il basso a destra, che partono dalle celle iniziali etichettate: quattro dal bordo superiore (colonne $0,1,2,3$) e tre dal bordo sinistro (righe $1,2,3$, cioè le diagonali $-1,-2,-3$).
- Nell'originale sono tracciati a mano libera, leggermente ondulati, e terminano a lunghezze diverse e sfalsate, senza raggiungere alcun bordo. Nel ridisegno: rette pulite e parallele, tutte della stessa lunghezza (o troncate al bordo della zona disegnata), tratto medio.
- Facoltativo: evidenziare leggermente (tratto più spesso, o etichetta «diagonale principale») la diagonale che parte da $(0,0)$, cioè la diagonale $0$.

DA NON INSERIRE: l'annotazione manoscritta a destra («← convenzione per identificare le diagonali (che non posso costruire, impiegherebbe troppo tempo)») con la relativa freccia — è già resa in prosa nel corpo del testo.

SEMANTICA: la cella $(l,c)$ appartiene alla diagonale $c-l$; le diagonali non negative iniziano nella prima riga, quelle negative nella prima colonna; i numeri vanno da $-n$ a $m$.

Tutto il testo in italiano.
