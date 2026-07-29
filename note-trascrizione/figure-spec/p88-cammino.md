# Figura `p88-cammino`

- **Pagina della scansione:** 88
- **Tipo:** grafo
- **Didascalia prevista:** Il cammino su $n$ vertici: $m = n-1$ archi.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Grafo cammino (path graph) disegnato in orizzontale, larghezza circa 9 cm, altezza circa 1,5 cm, tratto blu (o colore accent del documento), stile identico a quello usato per il bastoncino del lollipop di p. 85.
(1) Sei nodi tutti sulla STESSA quota orizzontale, tutti PIENI (dischetti riempiti, raggio ~1,5 pt), collegati a due a due da segmenti orizzontali sottili.
(2) Sequenza da sinistra a destra: nodo 1, arco, nodo 2, arco, nodo 3, arco, nodo 4; poi uno STACCO orizzontale occupato da tre puntini allineati alla quota dei nodi (ellissi: nel manoscritto sono tre-quattro punti che proseguono la linea, con la linea interrotta); poi nodo 5, arco, nodo 6. Fra il nodo 4 e i puntini, e fra i puntini e il nodo 5, NON va disegnato alcun segmento continuo.
(3) Etichette sotto i nodi (assenti nel manoscritto, aggiunte per leggibilità): $v_1$, $v_2$, $v_3$, $v_4$ sotto i primi quattro; $v_{n-1}$, $v_n$ sotto gli ultimi due. Nessuna etichetta sotto i puntini.
(4) Nessuna altra decorazione, nessuna graffa, nessun testo aggiuntivo dentro la figura.
Semantica da preservare: è il cammino su n vertici, cioè l'albero con il minimo numero di archi, m = n−1; è il caso in cui la stima C(G) ≤ 2m(n−1) vale Θ(n²).
Etichetta LaTeX nel capitolo: fig:cammino. La figura è collocata SUBITO DOPO il box dell'esempio e richiamata dal testo con «Figura~\ref{fig:cammino}».
