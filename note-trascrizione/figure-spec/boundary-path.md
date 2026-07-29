# Figura `boundary-path`

- **Pagina della scansione:** 21
- **Tipo:** schema di albero (suffix trie disegnato come "montagna") con suffix link
- **Didascalia prevista:** Il boundary path di STrie(T): applicando ripetutamente il suffix link f a partire dallo stato x-sopralineato del suffisso più lungo x = t_1...t_n si incontrano, nell'ordine, gli stati di tutti i suffissi di T.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno schematico a mano libera del suffix trie STrie(T) reso come una "montagna".

CONTORNO. Un triangolo dai lati irregolari/spezzati (tratto a mano libera, spezzata con 3-4 piccoli angoli per lato): vertice in alto al centro-sinistra dell'area (= la radice, NON etichettata nel quaderno), lato sinistro che scende in diagonale verso il basso a sinistra, lato destro che scende in diagonale verso il basso a destra ed è più lungo/più basso del sinistro. La BASE del triangolo non è un segmento retto ma una linea ondulata (2-3 onde ampie e basse), che rappresenta la frontiera degli stati più profondi; parte dall'estremo inferiore del lato sinistro e sale leggermente andando verso destra fino a raccordarsi con l'estremo inferiore del lato destro. Il tratto della montagna è più chiaro/sottile di quello dei nodi.

NODI. Sulla linea ondulata di base ci sono tre nodi disegnati come pallini pieni ben marcati, allineati da sinistra a destra e a quota crescente:
  - N1, all'estremo sinistro della base (il più in basso), etichettato \bar{x} scritto SOTTO il pallino;
  - N2, circa a metà base, un po' più in alto di N1, etichettato \bar{y} scritto SOTTO il pallino;
  - N3, a circa due terzi della base, ancora più in alto, senza etichetta di nome.
Distanza N1-N2 ~ distanza N2-N3.

SUFFIX LINK. Due archi curvi con punta di freccia, che rappresentano f:
  - da N1 a N2: arco che scende sotto la linea di base e risale, con la freccia che arriva su N2 da sinistra; l'etichetta f è scritta SOTTO l'arco, circa a un terzo della sua lunghezza (più vicina a N1);
  - da N2 a N3: arco che sale sopra la linea di base e ridiscende, con la freccia che arriva su N3 da sinistra-basso. Non ha etichetta (è sempre f).

ETICHETTE ESTERNE (tutte in italiano):
  - a SINISTRA, fuori dalla montagna, su due righe: prima riga «suffisso», seconda riga «$t_1\cdots t_n = x$». Dalla parola «suffisso» parte verso destra una freccia ondulata orizzontale (tratto sinuoso, 2 onde) che entra nell'area del disegno e punta alla parte bassa del lato sinistro della montagna, appena sopra il nodo N1.
  - in BASSO al centro, sotto la base: «suffisso $t_2\cdots t_n$», con un piccolo segmento/freccia che sale verso destra e punta al nodo N2 (arriva su N2 dal basso a destra).
  - a DESTRA, all'altezza della base: «suffisso $t_3\cdots t_n$», con un piccolo segmento/freccia che va verso sinistra e punta al nodo N3.

SEMANTICA (per chi ridisegna): N1 = stato del suffisso più lungo (tutta la stringa T = t_1...t_n), N2 = f(N1) = stato di t_2...t_n, N3 = f(N2) = stato di t_3...t_n. Gli archi sono i suffix link; la catena continua idealmente verso destra/alto fino a root e poi a perp. La quota crescente da sinistra a destra esprime il fatto che i suffissi si accorciano e quindi gli stati si avvicinano alla radice.

NOTA: nel quaderno, in alto a destra, c'è anche un riquadro con il testo «la funzione f mi consente di costruire un cammino che visita tutti i suffissi di T» e, sotto, «boundary path» con una grossa freccia verso l'alto. Questo riquadro NON va incluso nella figura TikZ: è già reso come ambiente osservazione nel testo.
