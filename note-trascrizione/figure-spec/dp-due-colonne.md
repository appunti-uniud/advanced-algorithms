# Figura `dp-due-colonne`

- **Pagina della scansione:** 45
- **Tipo:** matrice DP (schema delle due colonne in memoria)
- **Didascalia prevista:** La stessa osservazione letta sulla matrice: si conservano la colonna $j-1$ (già completata) e la colonna $j$ riempita fino alla riga $i-1$; le tre celle marcate sono esattamente quelle da cui dipende $(i,j)$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Rettangolo (nell'originale a mano libera, ~2,5 x 3 cm, un po' piu alto che largo, angoli non chiusi) che rappresenta l'intera matrice DP: righe = prefissi di $\sigma_1$ (indice $i$, crescente verso il basso), colonne = prefissi di $\sigma_2$ (indice $j$, crescente verso destra).

ORIGINALE: due segmenti verticali interni molto vicini (~2 mm), poco a destra del centro e SFALSATI in altezza (quello di destra dal bordo superiore a meta altezza, quello di sinistra da meta altezza al bordo inferiore); tre celle marcate con pallini, due sul segmento di sinistra e uno su quello di destra.

RIDISEGNO CONSIGLIATO (interpretazione, piu leggibile): due colonne verticali adiacenti che attraversano tutto il rettangolo, etichettate $j-1$ (sinistra) e $j$ (destra); ombreggiare per intero la colonna $j-1$ (gia calcolata) e la colonna $j$ solo dalla riga 0 fino alla riga $i-1$; marcare con pallini pieni le tre celle $(i-1,j-1)$ e $(i,j-1)$ sulla colonna $j-1$ e $(i-1,j)$ sulla colonna $j$; marcare con cerchietto vuoto (o quadratino tratteggiato) la cella $(i,j)$ da calcolare. Etichette $j-1$, $j$ sotto le colonne; $i-1$, $i$ a sinistra delle righe.

DA NON RIPRODURRE: le tracce a matita di uno schizzo cancellato sotto e a destra del rettangolo («abcdef», «abcd», «abc») e i due trattini orizzontali fra i segmenti (sbavature di penna).

SIGNIFICATO: bastano due colonne per calcolare la distanza (spazio $\Oh(\min(n_1,n_2))$, avendo cura di far scorrere la matrice lungo il lato piu lungo), ma cosi si perde il backtracking e quindi $\eta$.
