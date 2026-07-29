# Figura `shift-and-esempio`

- **Pagina della scansione:** 30
- **Tipo:** matrice DP
- **Didascalia prevista:** La matrice $M$ dello Shift--And per $P=\str{aab}$ e $T=\str{baab}$. Ogni colonna si ottiene dalla precedente con uno \emph{shift} (che immette un $1$ in testa) seguito da un \textsc{and} con la maschera del carattere letto; l'unico $1$ dell'ultima riga segnala l'occorrenza $\sub{T}{2}{4}=P$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

NB: l'identificatore e' stato rinominato in fase di cucitura da `shiftand-esempio` a `shift-and-esempio` per uniformita' con le altre due figure del capitolo. Il file atteso e' tikz/shift-and-esempio.tikz.

Griglia rettangolare di celle quadrate (~0.75 cm di lato), linee sottili grigio chiaro, cifre centrate in corpo normale.

DIMENSIONI: 3 righe (i = 1,2,3, le posizioni del pattern) e 5 colonne (j = 0,1,2,3,4).

ETICHETTE A SINISTRA (due colonnine esterne alla griglia, senza bordi):
- colonna piu' esterna: indice di riga $i$ = 1, 2, 3 (grigio, corpo minore);
- colonna adiacente alla griglia: il carattere del pattern $P[i]$ in \texttt{}: riga 1 -> \texttt{a}, riga 2 -> \texttt{a}, riga 3 -> \texttt{b};
- sopra queste due colonnine, allineate all'intestazione, le diciture $i$ e $P[i]$ (grigio, corpo minore).

ETICHETTE IN ALTO (due righe esterne alla griglia, sopra le colonne):
- riga superiore: gli indici di colonna $j$ = 0, 1, 2, 3, 4 (grigio, corpo minore);
- riga inferiore: il carattere del testo $T[j]$ in \texttt{} sopra le colonne j=1..4, nell'ordine \texttt{b}, \texttt{a}, \texttt{a}, \texttt{b}; sopra la colonna j=0 nessun carattere, ma la dicitura in corsivo grigio "$M_0$" (oppure "iniz."). NB: nel testo del capitolo la j-esima colonna si denota $M_j$ (non $M[j]$), quindi usare $M_0$.

CONTENUTO DELLE CELLE (righe dall'alto in basso, colonne da j=0 a j=4):
- riga i=1 (P[1]=a):  0 | 0  1  1  0
- riga i=2 (P[2]=a):  0 | 0  0  1  0
- riga i=3 (P[3]=b):  0 | 0  0  0  1
La barra indica una linea verticale piu' spessa (o doppia) che separa la colonna j=0, di inizializzazione, dalle colonne j>=1. NB: la colonna j=0 e' tutta a ZERO (nel quaderno era erroneamente 1,0,0: correzione voluta, non ripristinarla).

EVIDENZIAZIONI:
1) L'ultima riga (i=3=n) ha un fondo tenue (grigio molto chiaro oppure il colore d'accento al 10%) esteso a tutte e cinque le colonne. A destra della griglia, una graffa verticale che abbraccia solo questa riga, con etichetta su due righe: "riga $n$: gli $1$ qui / sono occorrenze di $P$".
2) La cella (i=3, j=4), che contiene l'unico 1 dell'ultima riga, e' cerchiata (o riquadrata con bordo spesso) nel colore d'accento; da essa parte una freccia curva verso il basso a destra con etichetta: "occorrenza: $\sub{T}{2}{4}=\str{aab}=P$, inizio in $j-n+1=2$".
3) Le tre celle a 1 in diagonale --- (i=1,j=2), (i=2,j=3), (i=3,j=4) --- sono collegate da due frecce diagonali tratteggiate, da (1,2) a (2,3) e da (2,3) a (3,4), con una sola etichetta accanto alla prima: "shift". Mostrano la propagazione in diagonale del prefisso che cresce (condizione a) del capitolo).
4) Sotto la griglia, allineate alle colonne j=1..4, in corpo minore e grigio, le maschere applicate: $U_{\str{b}}$, $U_{\str{a}}$, $U_{\str{a}}$, $U_{\str{b}}$; sotto la colonna j=0, nulla. Facoltativo, solo se non affolla: il promemoria $U_{\str{a}}=110$, $U_{\str{b}}=001$ in un angolo.

STILE: tutto il testo in italiano; un solo colore d'accento (quello degli esempi nel documento) per il cerchio dell'occorrenza, la freccia relativa e l'eventuale fondo dell'ultima riga; grigio per etichette e frecce tratteggiate; nessun titolo interno alla figura (basta la didascalia).

SEMANTICA (per chi ridisegna): $M[i,j]=1$ sse $\pre{P}{i}$ e' suffisso di $\pre{T}{j}$; la colonna $j$ dipende solo dalla colonna $j-1$ (shift verso il basso con 1 immesso in testa) e dal carattere $T[j]$ (and con $U_{T[j]}$); l'ultima riga contiene tutte e sole le occorrenze complete del pattern.
