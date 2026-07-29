# Figura `p83-transizioni-mg`

- **Pagina della scansione:** 83
- **Tipo:** grafo (ventaglio di archi incidenti a un vertice, con graffa che ne conta il grado)
- **Didascalia prevista:** Un passo di $M_G$ a partire da $u$: dei $d(u)$ archi incidenti se ne sceglie uno uniformemente a caso, dunque $P_{u,v} = 1/d(u)$ per ogni vicino $v$ di $u$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Frammento di grafo non orientato, disegnato a mano libera. Al centro-sinistra un vertice u, rappresentato da un cerchietto vuoto di raggio medio, con l'etichetta 'u' subito sotto-sinistra. Da u escono tre archi (curve leggere) disposti a ventaglio verso destra: (a) uno sale verso destra e termina in un cerchietto piccolo vuoto in alto a destra, non etichettato; (b) uno va orizzontalmente verso destra e termina in un cerchietto vuoto, un po' piu' grande degli altri, etichettato 'v' alla sua destra; (c) uno scende verso destra e termina in un cerchietto piccolo vuoto in basso a destra, non etichettato. L'arco centrale u-v porta sopra di se', a meta' circa, l'etichetta $\frac{1}{d(u)}$ (nel quaderno scritta come 1/d(u) con barra obliqua). Un arco di cerchio centrato in u attraversa tutti e tre gli archi del ventaglio, dall'arco (a) all'arco (c), come una graffa angolare; e' etichettato $d(u)$, etichetta posta in basso a sinistra, all'estremita' inferiore dell'arco di cerchio. Significato: il vertice u ha grado d(u) (l'arco di cerchio conta gli archi incidenti) e ciascuno dei suoi vicini viene scelto con probabilita' 1/d(u). Nel ridisegno mantenere il ventaglio di tre archi (il quaderno ne disegna tre, come campione dei d(u)) e la distinzione di ruolo fra v (etichettato) e i due vicini generici; niente frecce, il grafo e' non orientato. Etichetta LaTeX nel capitolo: fig:transizioni-mg.
