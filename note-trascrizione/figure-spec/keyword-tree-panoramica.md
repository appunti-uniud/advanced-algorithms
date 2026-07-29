# Figura `keyword-tree-panoramica`

- **Pagina della scansione:** 12
- **Tipo:** albero (keyword tree / trie schematico con failure link)
- **Didascalia prevista:** Il keyword tree $K(\mathcal{P})$ a colpo d'occhio: i cammini dalla radice alle $z$ foglie sono i pattern $P_1,\dots,P_z$. Tratteggiati, due failure link: puntano sempre da un nodo a un nodo di profondità minore.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCHEMA GENERALE. Albero schematico a forma di triangolo isoscele largo (base circa 2 volte l'altezza), radice in cima al centro-sinistra, otto foglie allineate lungo il bordo inferiore ed etichettate, da sinistra a destra, $P_1, P_2, P_3, P_4, P_5, P_6, P_7, P_8$ (etichette sotto la foglia, leggermente ruotate/sfalsate nell'originale: nel ridisegno metterle diritte sotto ciascuna foglia). Gli archi NON portano etichette di carattere e i nodi interni NON portano nomi: e un disegno panoramico, la struttura fine non conta. Tracciare i rami come segmenti spezzati leggermente irregolari (disegno a mano libera) oppure, se si preferisce, come linee dritte pulite: l'informazione e topologica.

TOPOLOGIA (coordinate indicative in una griglia con radice in (0,10), base a y=0, x da -5 a +5).
- Radice $r$ in alto, in (0,10).
- LATO SINISTRO: da $r$ un lungo cammino discende verso sinistra fino al nodo $A$ in circa (-3.6,5.2). Da $A$ scendono due rami: uno verso sinistra-basso fino alla foglia $P_1$ in (-4.6,0.5), uno verso destra-basso fino alla foglia $P_2$ in (-2.5,0.5).
- SOTTOALBERO CENTRALE: dal cammino radice-$A$, in un punto intermedio a circa (-1.9,7.4), si stacca un ramo che scende verso destra fino al nodo $B$ in circa (-0.6,4.6). Da $B$ scendono: a sinistra un nodo intermedio in (-1.2,3.0) da cui pendono le foglie $P_3$ in (-1.7,0.8) e $P_4$ in (-0.7,0.4); a destra un ramo che scende fino alla foglia $P_5$ in (0.9,1.0).
- LATO DESTRO: da $r$ un arco scende verso destra fino al nodo $D$ in circa (1.1,8.6) (nodo POCO profondo, appena sotto la radice); da $D$ il bordo destro prosegue in basso a destra fino al nodo $C$ in circa (3.9,3.4) (nodo PROFONDO); da $C$ un ultimo tratto scende fino alla foglia $P_8$ in (4.6,0.8).
- Dal bordo destro, in un punto intermedio fra $D$ e $C$ (circa (2.6,5.4)), si stacca un ramo che scende verso sinistra-basso fino a un nodo in (2.0,3.2), dal quale pendono le foglie $P_6$ in (1.8,0.6) e $P_7$ in (3.0,0.6).

EVIDENZIAZIONI (nell'originale sono tratti dell'albero ripassati piu volte a zig-zag con la penna; nel ridisegno usare tratto piu spesso, eventualmente di colore d'accento):
- tutto il cammino radice $\to A$ (lato sinistro);
- il tratto finale del cammino che arriva in $B$ (dal punto (-1.35,6.1) circa fino a $B$);
- tutto il tratto $D \to C$ (lato destro).
Significato: sono i cammini coinvolti nei due failure link (segmenti che si corrispondono come suffisso/prefisso).

FAILURE LINK (archi tratteggiati con punta di freccia piena, disegnati DENTRO il triangolo, non lungo i rami):
1. Freccia lunga da $C$ (3.9,3.4) verso sinistra, con andamento quasi orizzontale e leggermente crescente, che passa sotto il sottoalbero centrale (punti di passaggio indicativi: (2.0,3.6), (0.0,4.0), (-1.8,4.6)) e termina con la punta su $A$ (-3.6,5.2). Verso: da $C$ ad $A$, cioe dal nodo piu profondo a quello meno profondo.
2. Freccia corta e curva da $B$ (-0.6,4.6) che sale verso destra-alto e termina con la punta su $D$ (1.1,8.6); la curva e convessa verso destra (passa per circa (0.4,6.0) e (0.9,7.4)). Verso: da $B$ a $D$.
Etichetta «failure link» su due righe, in corsivo/testo normale, collocata al centro-destra della figura fra le due frecce, a destra della freccia 2, circa in (1.6,6.3).

MARCATURA DEI NODI: nell'originale $A$, $B$, $C$, $D$ non sono cerchiati (sono solo i punti dove arrivano/partono i tratteggi, evidenziati dalle grosse punte di freccia inchiostrate). Nel ridisegno conviene un piccolo pallino pieno su $A$, $B$, $C$, $D$ e nessuna etichetta di nodo (i simboli $A,B,C,D$ qui sopra servono solo alla descrizione: NON vanno stampati, perche la notazione $v$/$n_v$ arriva solo nella sezione sui failure link).

ANNOTAZIONE A LATO: nel quaderno, a destra del disegno, c'e «N.B.: z foglie — dimensione del K.T. <= Sigma n_i = n». Questa nota e gia riportata nel testo del capitolo (osservazione sulle misure di K(P)) e NON va ripetuta nella figura.

TESTO: tutto in italiano. Riferimento nel capitolo: fig:keyword-tree-panoramica, sezione «Il keyword tree».
