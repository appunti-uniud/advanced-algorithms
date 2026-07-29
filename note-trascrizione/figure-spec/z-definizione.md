# Figura `z-definizione`

- **Pagina della scansione:** 5
- **Tipo:** schema di stringhe (segmento con tacche e graffe)
- **Didascalia prevista:** $Z_i(S)=j$: il prefisso $\alpha=S[1..j]$ di $S$ ricompare identico a partire dalla posizione $i$, e $j$ è la lunghezza massima per cui ciò accade.
- **Ritenuta fattibile in TikZ:** True

## Specifica

FIGURA CONSOLIDATA: fonde i due disegni della definizione di $Z$ presenti nel quaderno (p.5, con le etichette di posizione; p.7, con la freccia che misura $Z_i$). Va disegnata UNA VOLTA SOLA. ATTENZIONE: la stringa si chiama $S$ (nel manoscritto di p.5 era $A$; il capitolo usa $S$ per la stringa generica e riserva $A$ alla sola concatenazione $P\$T$).

LINEA E TACCHE.
- Un unico segmento orizzontale che rappresenta $S$, lungo circa 11 cm; parte dall'estremo sinistro (posizione 1) e prosegue verso destra oltrepassando l'ultima tacca marcata, terminando circa 1,5 cm dopo.
- Alla destra dell'estremo finale, staccata, la lettera maiuscola "$S$" come nome della stringa (nessuna freccia).
- Quattro tacche verticali che attraversano la linea (tratti corti, ~0,25 cm sopra e sotto), da sinistra a destra:
  T1 all'estremo sinistro = posizione 1 (senza etichetta: e' l'inizio della stringa);
  T2 a circa il 30% = posizione $j$;
  T3 a circa il 55% = posizione $i$;
  T4 a circa l'82% = posizione $i+j-1$.
- VINCOLO GEOMETRICO IMPORTANTE: la distanza T3--T4 deve essere visibilmente uguale alla distanza T1--T2 (i due tratti hanno entrambi lunghezza $j$). Aggiustare le percentuali per far coincidere esattamente le due larghezze.

ETICHETTE SOTTO LE TACCHE (in matematica, subito sotto la linea): sotto T2 '$j$'; sotto T3 '$i$'; sotto T4 '$i+j-1$'.

GRAFFE (underbrace, entrambe SOTTO la linea, a un livello piu' basso delle etichette di posizione):
- Graffa 1: da posizione 1 (T1) a posizione $j$ (T2), etichetta '$\alpha$' centrata sotto la graffa.
- Graffa 2: da posizione $i$ (T3) a posizione $i+j-1$ (T4), etichetta '$\alpha$' centrata sotto la graffa.
Le due graffe devono avere la stessa ampiezza, a rendere evidente l'uguaglianza dei due fattori. Evitare sovrapposizioni con le etichette di posizione.

MISURA DI $Z$ (ripresa dal disegno di p.7): piu' in basso, sotto la graffa 2 e leggermente a destra, l'etichetta '$Z_i(S)$'; da essa parte una freccia lunga, quasi orizzontale, che va verso SINISTRA e punta all'estremita' destra della PRIMA graffa (la tacca $j$), a dire che $Z_i(S)$ misura la lunghezza del prefisso $\alpha$.

SIGNIFICATO: $S[1..j]$ (prefisso di $S$) e $S[i..i+j-1]$ (fattore che comincia in $i$) sono la stessa stringa $\alpha$; $Z_i(S)$ e' il piu' grande $j$ per cui questo accade.

NOTA PER IL DISEGNATORE: nel manoscritto, sopra la tacca in posizione $i$, compare un glifo isolato letto come una "a" (probabile etichetta $\alpha$ scritta di fretta e poi ripetuta sotto la graffa): NON va riprodotto. Le doppie tacche ravvicinate visibili in $i$ e in $j$ sono ricalchi a penna della stessa tacca, non posizioni distinte.
