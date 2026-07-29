# Figura `dp-stencil-lineare`

- **Pagina della scansione:** 45
- **Tipo:** matrice DP (stencil della ricorrenza, all'indietro)
- **Didascalia prevista:** Le tre celle da cui dipende $(i,j)$ cadono tutte fra la colonna $j-1$ e la colonna $j$: per calcolare la sola distanza basta tenere in memoria due colonne.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schizzo piccolo, larghezza ~3 cm. Blocco 2x2 di celle della matrice DP, righe crescenti verso il BASSO (indice $i$, su $\sigma_1$), colonne crescenti verso DESTRA (indice $j$, su $\sigma_2$).

NODI (quattro pallini ai vertici di un quadrato di lato ~1,2 cm):
- alto-sinistra $(i-1,j-1)$; alto-destra $(i-1,j)$; basso-sinistra $(i,j-1)$; basso-destra $(i,j)$ = cella da calcolare.
Nell'originale sono blob di inchiostro (quello in alto a destra e un cerchietto aperto); nel ridisegno tutti pallini pieni, con la cella $(i,j)$ evidenziata (cerchio piu grande, o riempimento chiaro con bordo spesso).

LINEE DI GRIGLIA (tratto sottile, residuo della matrice): un segmento orizzontale fra i due nodi in alto, un segmento verticale fra i due nodi a sinistra.

FRECCE (tre, tutte CONVERGENTI su $(i,j)$, tratto piu marcato, punta piena): diagonale da $(i-1,j-1)$; verticale verso il basso da $(i-1,j)$; orizzontale verso destra da $(i,j-1)$.

CORNICE: tutto il blocco e racchiuso in un ovale allungato (asse maggiore quasi verticale, ruotato di ~15 gradi), che nell'originale significa «tutto cio che serve sta qui dentro». Tratto sottile, continuo o tratteggiato.

ETICHETTE: $(i-1,j-1)$, $(i-1,j)$, $(i,j-1)$, $(i,j)$ accanto ai nodi, corpo piccolo; facoltative le etichette di colonna $j-1$, $j$ sotto e di riga $i-1$, $i$ a sinistra.

NON inserire nella figura il testo manoscritto «Mi basta spazio lineare!» / «... per la distanza (senza stringa)»: e gia nel corpo del capitolo.

SIGNIFICATO: la ricorrenza $D(i,j)=\min\{D(i-1,j-1)+\mathrm{cost},\,D(i-1,j)+1,\,D(i,j-1)+1\}$ usa solo celle delle colonne $j-1$ e $j$, quindi due colonne bastano.
