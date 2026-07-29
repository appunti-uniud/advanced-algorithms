# Figura `p85-lollipop`

- **Pagina della scansione:** 85
- **Tipo:** grafo
- **Didascalia prevista:** Il \emph{lollipop graph} $L_n$: una clique $K_{n/2}$ alla quale è incollato, nel vertice $u$, un cammino di $n/2$ vertici che termina in $v$; in tutto $n$ vertici.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno schematico in orizzontale, sviluppo circa 10 cm di larghezza e 3 cm di altezza.
(1) A SINISTRA: un cerchio (solo la circonferenza, tratto blu spesso, raggio ~1,3 cm), che rappresenta in modo astratto la clique; NON vanno disegnati i vertici interni né gli archi della clique. Al centro del cerchio l'etichetta matematica $K_{n/2}$ (nel manoscritto è scritta grande, con il pedice n/2 in frazione obliqua; in TikZ basta $K_{n/2}$).
(2) SUL BORDO DESTRO del cerchio, esattamente all'estremità destra della circonferenza, un nodo PIENO (disco riempito, l'unico pieno del disegno) etichettato $u$; l'etichetta sta sotto/sotto-destra del nodo.
(3) A DESTRA: un cammino orizzontale che parte da $u$ e procede verso destra sulla stessa quota. Nodi: $u$ (pieno), poi tre nodi VUOTI (cerchietti non riempiti) equispaziati, poi un tratto punteggiato (nel manoscritto quattro trattini corti che continuano la linea, a indicare i vertici omessi), infine un ultimo nodo VUOTO etichettato $v$, con l'etichetta sotto/sotto-destra. Gli archi sono segmenti orizzontali sottili fra nodi consecutivi.
(4) SOPRA IL CAMMINO: una graffa orizzontale (decorations.pathreplacing, brace) che parte subito a destra di $u$ e arriva sopra $v$, con la punta al centro; sopra la punta l'etichetta $n/2$. La graffa misura la parte a bastoncino, cioè gli n/2 vertici del cammino esclusa la clique.
(5) Nessun'altra etichetta. Tutto in blu (o nel colore accent del documento).
Semantica da preservare: u è il punto di attacco (appartiene alla clique ed è l'estremo del cammino), v è l'estremo libero del bastoncino; la clique ha n/2 vertici, il bastoncino altri n/2, per un totale di n.
QUESTA FIGURA E' RIUSATA DUE VOLTE nel capitolo: alla Domanda sulla simmetria dell'hitting time e nell'esempio finale sui due casi estremi del cover time (il secondo disegno del quaderno, a p.88, e' stato deduplicato e sostituito da un rinvio). Etichetta LaTeX nel capitolo: fig:lollipop.
