# Figura `b-albero-completo`

- **Pagina della scansione:** 33
- **Tipo:** albero
- **Didascalia prevista:** L'albero binario completo $\B$: $p$ foglie, livelli di $1,2,4,8,\dots$ nodi, profondità $d=\log_2 p$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE — NOTAZIONE AGGIORNATA IN CUCITURA: nel manoscritto il numero di foglie di B era indicato con «n» e l'altezza con «log n»; nel capitolo cucito il numero di foglie è $p$ e la profondità è $d=\log_2 p$ (la lettera $n$ resta riservata alla dimensione dell'input). Usare $p$ e $\log_2 p$ nella figura.

Schema a mano libera di un albero binario completo B, disegnato come un TRIANGOLO con base ondulata di cui sono esplicitati solo i primi tre livelli.

GEOMETRIA. Triangolo isoscele, apice in alto al centro, base orizzontale in basso. Larghezza della base circa 2,5 volte l'altezza. I due lati obliqui e la base sono tracciati a mano libera con leggere irregolarità (la base è una linea chiaramente ondulata); si può rendere con decorate/random steps oppure con una linea leggermente ondulata (snake).

NODI ESPLICITI (piccoli cerchietti vuoti, non pieni):
- livello 0: radice, sull'apice del triangolo;
- livello 1: due figli, posti sui due lati obliqui del triangolo (l'arco radice->figlio sinistro giace sul lato sinistro, quello radice->figlio destro sul lato destro);
- livello 2: quattro nipoti. Il figlio sinistro ha un figlio esterno sul lato sinistro e uno interno spostato verso il centro; il figlio destro simmetricamente. I due nodi interni possono stare leggermente più in alto dei due esterni (disegno irregolare) oppure essere allineati.
- Gli archi sono segmenti dritti; quelli esterni coincidono con i lati del triangolo, che poi PROSEGUONO verso il basso fino alla base (a indicare che l'albero continua), senza altri nodi disegnati.

ANNOTAZIONE SOTTO LA BASE: la lettera «$p$» centrata sotto la linea ondulata (= numero di foglie / larghezza dell'ultimo livello).

COLONNA A DESTRA DEL TRIANGOLO: una colonna verticale di etichette allineate ai livelli, dall'alto in basso: 1, 2, 4, 8, poi tre puntini verticali. Alla destra della colonna una GRANDE GRAFFA (parentesi graffa destra) che abbraccia tutta la colonna, con etichetta «$d=\log_2 p$» posta al centro, alla destra della graffa. Significato: i livelli sono $d+1$, cioè la profondità di B è $\log_2 p$.

SEMANTICA: primo passo del piano (risolvere lca su un albero binario completo); il disegno fissa che B ha p foglie, livelli di taglia 1,2,4,8,… e profondità logaritmica. Testo in italiano (qui compaiono solo simboli: p, 1, 2, 4, 8, $d=\log_2 p$).
