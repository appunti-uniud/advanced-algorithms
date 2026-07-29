# Figura `pm-allineamento`

- **Pagina della scansione:** 2
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Il pattern $P$ allineato sul testo $T$: le due stringhe vengono confrontate carattere per carattere a partire dalla posizione corrente (le frecce), e poi $P$ scorre verso destra di una posizione alla volta.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema a due righe che illustra l'allineamento del pattern sul testo nell'algoritmo naive.

GEOMETRIA (coordinate suggerite, unità = cm).
- Riga superiore (TESTO): segmento orizzontale spesso (line width ~1pt) da (0,0) a (9,0). Subito a destra dell'estremo destro, alla stessa quota, l'etichetta in matematica $T$ a (9.6,0).
- Riga inferiore (PATTERN): segmento orizzontale spesso da (0,-1.5) a (3.6,-1.5). Subito a destra, l'etichetta $P$ a (4.2,-1.5).
- I due segmenti sono allineati a sinistra: entrambi partono da x=0 (nel manoscritto il testo comincia leggermente più a sinistra, ma i primi caratteri e le frecce sono incolonnati; incolonnare a x=0 è la lettura corretta).

CARATTERI.
- Sopra il segmento superiore, appoggiati alla linea, i primi caratteri della stringa scritti in sequenza a passo costante: $a$ a (0.3,0.28), $b$ a (0.9,0.28), $c$ a (1.5,0.28), poi i puntini $\cdots$ a (2.15,0.24). Il resto del segmento resta vuoto: la stringa continua.
- Sopra il segmento inferiore, identicamente: $a$ a (0.3,-1.22), $b$ a (0.9,-1.22), $c$ a (1.5,-1.22), $\cdots$ a (2.15,-1.26).
- Le lettere sono le stesse nelle due righe perché il disegno è generico (illustra che entrambe le stringhe sono sequenze di caratteri indicizzate da 1), non una particolare istanza.

FRECCE.
- Sotto il segmento superiore, in corrispondenza del primo carattere: freccetta verticale corta che punta VERSO L'ALTO alla linea, da (0.3,-0.55) a (0.3,-0.12).
- Sotto il segmento inferiore, stessa cosa: da (0.3,-2.05) a (0.3,-1.62).
- Le due frecce sono perfettamente incolonnate sulla stessa ascissa x=0.3: è il punto chiave del disegno, marcano la posizione corrente di confronto, che è la stessa in T e in P.

ELEMENTO OPZIONALE (presente neGli appunti del corso dell'anno precedente, figura F2, ma NON nel quaderno dello studente): a destra dell'etichetta $P$ una freccia ondulata «$\rightsquigarrow$» che denota lo shift di una posizione del pattern. Aggiungerla solo se non appesantisce il disegno: il concetto è già veicolato dalla didascalia.

STILE. Tutto in nero (o nel colore di default del documento); nessun colore aggiuntivo; niente riquadri. Testo interno in italiano (qui compaiono solo simboli matematici e lettere dell'alfabeto).

SIGNIFICATO ALGORITMICO. Il pattern P è una finestra sovrapposta al testo T; per ogni posizione di allineamento i si confrontano P[1..n] e T[i..i+n-1] carattere per carattere da sinistra a destra; al termine (match completo o primo mismatch) la finestra scorre di una posizione a destra. È il disegno che precede immediatamente lo pseudocodice del naive (Algoritmo 1 del capitolo).
