# Figura `z-blocco-lr`

- **Pagina della scansione:** 7
- **Tipo:** schema di stringhe
- **Didascalia prevista:** L'invariante dell'algoritmo: il blocco $[\ell,r]$, con $S[\ell..r]$ prefisso di $S$ e $r$ massimo fra quelli già calcolati; l'indice corrente $i$ cade dentro il blocco.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura volutamente MINIMALE: introduce solo l'invariante, i dettagli sono nelle figure successive.

Una retta orizzontale (stringa $S$) da x=0 a x=10, etichetta '$S$' a destra dell'estremita'. Tacca verticale all'estremo sinistro (posizione 1, x=0). Tre tacche verticali dentro la retta: a x=5.0 etichettata '$\ell$' SOPRA; a x=5.6 etichettata '$i$' SOTTO; a x=6.9 etichettata '$r$' SOPRA. Sopra la retta, fra x=5.0 e x=6.9 e all'altezza delle etichette $\ell$ e $r$, un segmento orizzontale sottile che collega $\ell$ a $r$ ed evidenzia il blocco (nel manoscritto e' un tratto, non una graffa).

VINCOLO: $\ell<i<r$, e il blocco deve risultare nettamente staccato dall'inizio della stringa.

NOTA PER IL DISEGNATORE: nel manoscritto la figura porta due callout a destra collegati da frecce alla tacca $r$ («mantengo (inizializzo e aggiorno) l'intervallo $[\ell,r]$» e «$\sim$ prefisso di $S$ con $r$ max (tra quelli che ho calcolato)»). NON vanno riprodotti: il loro contenuto e' gia' in prosa nel corpo del testo, subito prima della figura, e in didascalia.

SIGNIFICATO: $[\ell,r]$ e' il blocco con estremo destro $r$ massimo fra quelli gia' trovati tali che $S[\ell..r]$ e' un prefisso di $S$; l'indice corrente $i$ della scansione cade al suo interno.
