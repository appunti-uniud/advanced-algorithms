# Figura `lca-b-triangolo`

- **Pagina della scansione:** 34
- **Tipo:** schema
- **Didascalia prevista:** $z=\lca_{\B}(x,y)$ in $\B$: il cammino dalla radice a $z$ è $\y$, e da $z$ i due cammini verso $x$ e verso $y$ si separano subito.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE — NOTAZIONE AGGIORNATA IN CUCITURA: nel manoscritto i due nodi erano $i$ e $j$ e il loro lca era $k$; nel capitolo cucito sono $x$, $y$ e $z$ (uniformati al resto del capitolo). Il prefisso comune resta $\gamma$.

Grande triangolo isoscele con apice in alto e base orizzontale in basso: rappresenta schematicamente l'albero binario completo $\B$ (apice = radice, base = livello delle foglie).

Elementi interni:
- una linea orizzontale sottile che attraversa il triangolo passando per l'apice (livello 0, quello della radice), estesa un po' oltre i lati del triangolo verso destra;
- un nodo marcato (pallino pieno) sull'asse verticale del triangolo, a circa un quarto dell'altezza sotto l'apice, etichettato $z$ (etichetta subito a destra del pallino);
- una seconda linea orizzontale sottile al livello di $z$, anch'essa estesa oltre i lati verso destra;
- a destra, fuori dal triangolo, una freccia verticale a doppia punta fra le due linee orizzontali, con due trattini di battuta: misura la profondità di $z$, cioè la lunghezza di $\gamma$ (si può lasciare senza etichetta oppure annotare $|\gamma|$);
- una freccia SPESSA che risale dal nodo $z$ fino all'apice, con la punta sull'apice; a sinistra di questa freccia, l'etichetta $\gamma$ (indica il cammino radice$\to z$).

Da $z$ scendono due cammini disegnati come spezzate ondulate/a zig-zag (non segmenti dritti: indicano cammini di lunghezza arbitraria):
- uno verso il basso a sinistra fino a un pallino etichettato $x$ (etichetta sotto/a sinistra del pallino);
- uno verso il basso a destra fino a un pallino etichettato $y$ (etichetta sotto/a destra).
I due nodi $x$ e $y$ stanno all'incirca alla stessa altezza, a metà del triangolo, ben sopra la base.

Significato: $z$ è il più basso antenato comune; sopra $z$ i due cammini coincidono (parte $\gamma$), sotto $z$ divergono immediatamente (uno a sinistra, bit 0; l'altro a destra, bit 1).
