# Figura `lv-dpath-riga-n`

- **Pagina della scansione:** 50
- **Tipo:** matrice DP con cammino (schema di allineamento)
- **Didascalia prevista:** Un $d$-path che parte dalla riga $0$ nella colonna $i$ e raggiunge l'ultima riga nella colonna $j$. I tratti diagonali sono match gratuiti; le mosse orizzontali e verticali (evidenziate dai pallini) sono gli errori.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCHEMA DELLA TABELLA DI PROGRAMMAZIONE DINAMICA CON UN d-PATH CHE RAGGIUNGE L'ULTIMA RIGA.

Proporzioni: riquadro largo circa il doppio dell'altezza (indicativamente 10 cm x 5 cm). Un solo colore (blu del quaderno oppure nero), tratto pieno, spessore medio.

CORNICE (solo tre lati; il bordo destro NON va disegnato):
- Bordo sinistro: segmento verticale dall'angolo in alto a sinistra fino al bordo inferiore; rappresenta la colonna 0. A sinistra di esso, circa a meta' altezza, l'etichetta 'P' (le righe sono indicizzate dai caratteri di P: riga 0 in alto, riga n in basso).
- Bordo superiore: segmento orizzontale che parte dall'angolo in alto a sinistra e PROSEGUE verso destra oltre il corpo della figura, per circa il 20% in piu' della larghezza; rappresenta la riga 0. All'estremita' destra di questo prolungamento, subito sopra la linea, l'etichetta 'T' (le colonne sono indicizzate dai caratteri di T).
- Bordo inferiore: linea orizzontale disegnata leggermente ONDULATA / a mano libera (decorazione tipo 'snake' con ampiezza piccola), che sporge un poco sia a sinistra sia a destra rispetto al riquadro; rappresenta l'ultima riga, la riga n.

TICK SUL BORDO SUPERIORE (due pallini pieni sulla riga 0):
- punto A a circa il 25% della larghezza del riquadro: sopra la linea, l'etichetta 'i';
- punto B a circa il 72% della larghezza: sopra la linea, l'etichetta 'j';
- dal punto B scende una LINEA VERTICALE SOTTILE fino al bordo inferiore: serve a leggere la colonna in cui il cammino termina.

IL CAMMINO (d-path), monotono verso il basso e verso destra, da A fino al bordo inferiore; in ordine, cinque tratti:
 1. tratto DIAGONALE lungo (a 45 gradi), che scende da A fino a circa 1/4 dell'altezza;
 2. MOSSA ORIZZONTALE corta verso destra (lunga circa mezzo tratto diagonale): i due estremi sono marcati con pallini pieni ben visibili;
 3. secondo tratto DIAGONALE, piu' lungo del primo, fino a circa 3/5 dell'altezza;
 4. MOSSA VERTICALE corta verso il basso, anch'essa con i due estremi marcati da pallini;
 5. ultimo tratto DIAGONALE che arriva esattamente sul bordo inferiore, nel punto in cui questo incontra la verticale calata da j; il punto finale e' marcato con un pallino.
Il tratto del cammino e' un po' piu' spesso della cornice.

SIGNIFICATO (da NON scrivere nella figura, serve solo a disegnarla correttamente): i tratti diagonali sono corse di match, gratuite, che si attraversano in O(1) con una query LCE; la mossa orizzontale (spazio in P) e quella verticale (spazio in T) sono le mosse d'errore e spostano il cammino di esattamente una diagonale ciascuna. Il cammino parte in (riga 0, colonna i) e termina in (riga n, colonna j): individua un'occorrenza di P in T[i+1..j] con al piu' d differenze.

ETICHETTE: soltanto P, T, i, j (esattamente quelle dell'originale). Nessun'altra scritta, nessuna griglia di celle disegnata.
