# Figura `z-alfa-beta`

- **Pagina della scansione:** 7
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Il prefisso $\alpha=S[1..r-\ell+1]$ e la sua copia $S[\ell..r]$. La posizione $i'=i-\ell+1$ della copia di sinistra corrisponde alla posizione $i$ della copia di destra: il valore già noto $Z_{i'}$ suggerisce $Z_i$. I caratteri $x$ e $y$ che seguono le due copie sono diversi, per la massimalità di $Z_\ell$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

FIGURA CONSOLIDATA: assorbe anche il disegno gemello di p.6 (stesso oggetto, li' etichettato con una lettera diversa). Usare ovunque $\alpha$, $\beta$, $x$, $y$, $i'$.

Una sola retta orizzontale (stringa $S$) da x=0 a x=14, etichetta '$S$' a destra. Sulla retta due GRUPPI di tacche.

GRUPPO SINISTRO (copia-prefisso di $\alpha$): tacche a x=0 (posizione 1), x=1.2 etichettata SOTTO '$i\'=i-\ell+1$' (se lo spazio e' poco basta '$i\'$'), x=3.2 (fine di $\alpha$), x=3.8. Fra x=3.2 e x=3.8 il carattere '$x$' scritto SOPRA la retta (e' $S[|\alpha|+1]$). SOPRA la retta una graffa (aperta verso il basso) da x=0 a x=3.2, etichettata '$\alpha$' sopra il centro. Sotto la graffa $\alpha$, piu' vicina alla retta, una seconda graffa piu' corta da x=1.2 a x=2.6 etichettata '$\beta$': e' la Z-box che comincia in $i'$.

GRUPPO DESTRO (copia nel blocco): tacche a x=7.0 etichettata SOPRA '$\ell$', x=8.2 etichettata SOTTO '$i$', x=10.2 etichettata SOPRA '$r$', x=10.8. Fra x=10.2 e x=10.8 il carattere '$y$' SOPRA la retta (e' $S[r+1]$). Graffa sopra da x=7.0 a x=10.2 etichettata '$\alpha$'; graffa piu' corta e piu' bassa da x=8.2 a x=9.6 etichettata '$\beta$'.

VINCOLI GEOMETRICI (verificati sulla scansione): le due graffe $\alpha$ hanno la stessa lunghezza (3.2); le due graffe $\beta$ hanno la stessa lunghezza (1.4); la distanza inizio-gruppo -> inizio-$\beta$ e' la stessa nei due gruppi (1.2, cioe' $i-\ell$).

CONNETTORE: in alto, sopra tutto, due archi curvi uniti al centro dal segno '$=$'; il primo sale dal gruppo sinistro partendo sopra x~1.2 (inizio di $\beta$, cioe' $i'$) verso il centro, il secondo scende dal centro verso il gruppo destro arrivando sopra x~8.2 (la posizione $i$). Il segno '$=$' sta esattamente fra i due archi. Significato: le due copie coincidono, quindi cio' che accade in $i'$ si ripete in $i$ finche' si resta dentro $\alpha$.

MASSIMALITA': fra le due celle di $x$ e di $y$, oppure sotto di esse, si puo' aggiungere un piccolo '$\neq$' o lasciare che sia la didascalia a dirlo; il punto e' che i due caratteri che seguono le due copie di $\alpha$ sono DIVERSI, ed e' questo che rende $[\ell,r]$ una copia massimale.

SIGNIFICATO ALGORITMICO: $\alpha=S[1..r-\ell+1]=S[\ell..r]$ e' la Z-box corrente; $i'=i-\ell+1$ e' la posizione del prefisso che corrisponde a $i$; $Z_{i'}$ e' gia' noto e, trasportato sulla copia, dice se la Z-box che comincia in $i$ resta dentro il blocco (caso 1) o arriva fino a $r$ (caso 2).
