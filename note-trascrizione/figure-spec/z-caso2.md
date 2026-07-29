# Figura `z-caso2`

- **Pagina della scansione:** 7
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Caso 2: $|\beta|=Z_{i'}\ge r-i+1$. Nella copia di sinistra $\beta$ compare sia come prefisso di $S$ sia a partire da $i'$, dove raggiunge la fine di $\alpha$; nella copia di destra $\beta$ arriva fino a $r$, ma se prosegua oltre è incognito ($a\overset{?}{=}y$).
- **Ritenuta fattibile in TikZ:** True

## Specifica

Titolo «Caso 2» in alto a sinistra. Una sola retta orizzontale (stringa $S$) da x=0 a x=14, etichetta '$S$' a destra.

GRUPPO SINISTRO: tacche a x=0 (posizione 1), x=2.0 (fine della prima occorrenza di $\beta$), x=2.6, x=3.3 (fine di $\alpha$), x=3.9. Fra x=2.0 e x=2.6 il carattere '$a$' scritto SOPRA la retta (e' $S[|\beta|+1]$). Fra x=3.3 e x=3.9 il carattere '$x$' SOPRA la retta (e' $S[|\alpha|+1]$).
SOPRA la retta, in alto, una graffa da x=0 a x=3.3 etichettata '$\alpha$'.
Fra la graffa $\alpha$ e la retta, DUE segmenti orizzontali a due livelli diversi, entrambi etichettati '$\beta$' (nel manoscritto sono segmenti con una tacca a sinistra e un trattino a destra, non graffe):
  - livello alto: da x=0 a x=2.0, etichetta '$\beta$' sopra la sua parte sinistra -> e' l'occorrenza di $\beta$ come PREFISSO di $S$ (una Z-box e' una copia del prefisso, quindi $\beta$ occorre anche in 1);
  - livello basso: da x=1.3 (posizione $i'$) a x=3.3, etichetta '$\beta$' sopra la sua parte destra -> e' la Z-box che comincia in $i'$ e che qui ARRIVA ESATTAMENTE ALLA FINE DI $\alpha$.

GRUPPO DESTRO: tacche a x=8.0 ($=\ell$), x=9.3 ($=i$), x=11.3 ($=r$), x=11.9. Fra x=11.3 e x=11.9 il carattere '$y$' SOPRA la retta. Graffa SOPRA da x=8.0 a x=11.3 etichettata '$\alpha$'. Fra la graffa e la retta un segmento orizzontale etichettato '$\beta$' da x=9.3 a x=11.3, con una PICCOLA FRECCIA verso destra all'estremita' destra (indica che potrebbe proseguire oltre $r$).

ARCO DEL CONFRONTO: un grande arco sottile SOTTO la retta che parte dalla cella del carattere '$a$' (x~2.3) e arriva alla cella del carattere '$y$' (x~11.6), con un '?' scritto sotto l'arco circa a meta'. Significato: il confronto da eseguire e' $S[|\beta|+1]\overset{?}{=}S[r+1]$, cioe' $a\overset{?}{=}y$.

SOTTO tutta la figura, allineata a sinistra, la formula '$|\beta| = Z_{i\'}$' (il manoscritto scrive $Z_{i-\ell}$: off-by-one da correggere, $i'=i-\ell+1$).

ETICHETTE DI POSIZIONE da AGGIUNGERE per leggibilita': '$1$', '$i\'$' nel gruppo sinistro; '$\ell$', '$i$', '$r$' nel gruppo destro.

VINCOLI: le due $\alpha$ hanno uguale lunghezza (3.3); i tre segmenti $\beta$ hanno tutti la stessa lunghezza (2.0); la distanza inizio-gruppo -> inizio della seconda $\beta$ e' la stessa nei due gruppi (1.3, cioe' $i-\ell$).
