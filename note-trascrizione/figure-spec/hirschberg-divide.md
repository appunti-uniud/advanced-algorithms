# Figura `hirschberg-divide`

- **Pagina della scansione:** 45
- **Tipo:** matrice DP con cammino di backtracking (schema divide et impera)
- **Didascalia prevista:** Schema divide et impera di Hirschberg. La riga mediana $i^{*}$ taglia la matrice in due metà; il cammino ottimo la attraversa in una colonna $j^{*}$. Una volta individuato $j^{*}$, il problema si spezza nei due sottorettangoli $[0,i^{*}]\times[0,j^{*}]$ e $[i^{*},n_1]\times[j^{*},n_2]$, sui quali si ricorre: le altre due regioni non vengono mai calcolate.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Grande rettangolo orizzontale (originale ~10 x 6 cm, rapporto ~5:3, tratto spesso a mano libera): l'intera matrice DP, angolo in alto a sinistra $(0,0)$, angolo in basso a destra $(n_1,n_2)$; righe = $\sigma_1$ (indice $i$, verso il basso), colonne = $\sigma_2$ (indice $j$, verso destra).

LINEE INTERNE:
1. Una linea ORIZZONTALE mediana da bordo a bordo, a meta altezza: la riga mediana $i^{*}=n_1/2$ (nell'originale e spezzata in due tratti sfalsati: nel ridisegno una sola linea).
2. La colonna di attraversamento $j^{*}$: nell'originale sono disegnate DUE verticali distinte (a ~1/4 e a ~1/2 della larghezza) solo per rendere visivamente disgiunti i due sottorettangoli. Nel ridisegno e preferibile UNA sola verticale $j^{*}$, con i due sottorettangoli evidenziati.

CAMMINI (tratto piu sottile, a scalinata irregolare, come un backtracking che alterna passi diagonali, verticali e orizzontali):
- Cammino A: da $(0,0)$ fino al punto $(i^{*},j^{*})$ sulla riga mediana.
- Cammino B: da $(i^{*},j^{*})$ fino a $(n_1,n_2)$, con piu gradini e discesa piu ripida.
I due cammini restano confinati nel sottorettangolo in ALTO A SINISTRA e in quello in BASSO A DESTRA.

EVIDENZIAZIONE CONSIGLIATA (non nell'originale): riempire con grigio tenue i due sottorettangoli $[0,i^{*}]\times[0,j^{*}]$ e $[i^{*},n_1]\times[j^{*},n_2]$, lasciando bianche le due regioni in alto a destra e in basso a sinistra, che non vengono mai calcolate.

ETICHETTE (da aggiungere, assenti nell'originale): $(0,0)$ in alto a sinistra, $(n_1,n_2)$ in basso a destra, $i^{*}$ a sinistra sulla riga mediana, $j^{*}$ sotto la verticale.

SIGNIFICATO: calcolando in avanti la riga mediana per $\sigma_1[1..i^{*}]$ contro $\sigma_2$ e all'indietro la stessa riga per $\sigma_1[i^{*}+1..n_1]$ contro $\sigma_2$ (entrambe in spazio lineare) si individua la colonna $j^{*}$ che minimizza la somma; poi si ricorre sui due sottorettangoli. L'area totale si dimezza a ogni livello: tempo $\Theta(n_1 n_2)$, spazio $\Theta(\min(n_1,n_2))$, con $\eta$ ricostruito.
