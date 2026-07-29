# Figura `lv-fr-tre-path`

- **Pagina della scansione:** 51
- **Tipo:** schema della tabella DP con diagonali e cammini (matrice DP + cammini di allineamento)
- **Didascalia prevista:** Costruzione del $d$-path farthest reaching sulla diagonale $i$ a partire dai tre $(d-1)$-path farthest reaching sulle diagonali $i-1$, $i$, $i+1$: una sola mossa d'errore porta sulla diagonale $i$, poi si scorre gratis lungo la diagonale con una query di longest common extension.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCENA: la tabella di programmazione dinamica di Landau-Vishkin, larga e bassa (rapporto larghezza:altezza circa 3:1, per esempio 12 cm x 4 cm). Nel manoscritto NON e' disegnata la griglia delle celle: ci sono solo due bordi.

CORNICE
- Bordo superiore: retta orizzontale che parte dall'angolo in alto a sinistra e prosegue verso destra sporgendo un poco oltre la larghezza utile della figura. Rappresenta la riga 0.
- Bordo sinistro: retta verticale dall'angolo in alto a sinistra fino al fondo. Rappresenta la colonna 0.
- Nessun bordo destro ne' inferiore: la tabella e' 'aperta' a destra e in basso.

DIAGONALI
- Tre rette parallele discendenti verso destra (pendenza 45 gradi). Partono da tre punti del bordo superiore distanziati fra loro di circa 1/8 della larghezza, collocati fra il 20% e il 45% della larghezza, ed escono dal bordo inferiore della figura.
- Etichette poste SOPRA il bordo superiore, in corrispondenza del punto di partenza di ciascuna diagonale, da sinistra a destra: $i-1$, $i$, $i+1$.
- Disegnarle sottili/chiare (nel manoscritto sono in azzurro): sono linee di riferimento, non cammini.

RIGA v E COLONNA u
- Retta verticale sottile dal bordo superiore a circa il 68% della larghezza, che scende fino a poco sotto la meta'-bassa della figura; etichetta $u$ SOPRA il bordo superiore, a destra di $i+1$.
- Retta orizzontale sottile dal bordo sinistro a circa il 72% dell'altezza, che attraversa la figura verso destra oltrepassando la verticale $u$; etichetta $v$ a SINISTRA del bordo sinistro.
- Le due rette si incontrano in un punto che deve cadere ESATTAMENTE sulla diagonale $i$ (vincolo geometrico: $u-v=i$). Ricavare quindi le coordinate scegliendo prima l'intersezione fra la diagonale $i$ e l'altezza voluta, e facendo poi passare di li' la verticale e l'orizzontale.

I TRE f.r. (d-1)-PATH
- Tre curve ondulate a serpentina (tratto medio, colore principale) che partono da tre punti vicini del bordo superiore, collocati fra il 5% e il 25% della larghezza, e scendono verso destra procedendo a gradini, alternando tratti quasi orizzontali ondulati e brevi discese. Nel manoscritto sono deliberatamente scarabocchiate, per dire 'un cammino qualunque'.
- Ciascuna curva TERMINA con un pallino pieno appoggiato esattamente su una delle tre diagonali: la curva piu' in alto sulla diagonale $i-1$, quella intermedia sulla diagonale $i$, quella piu' in basso sulla diagonale $i+1$. I tre pallini stanno intorno alla meta' dell'altezza, in ordine di ascissa crescente da sinistra a destra.
- Sotto la figura, in basso a sinistra (all'incirca sotto il 15-40% della larghezza), l'etichetta 'f.r.\ $(d-1)$-path' collegata al fascio delle tre curve da una piccola graffa verticale rivolta verso l'alto.

LE TRE MOSSE D'ERRORE (i cammini R1, R2, R3)
- Dal pallino sulla diagonale $i-1$: freccia ORIZZONTALE verso destra lunga una cella, che approda sulla diagonale $i$; etichetta $R_1$.
- Dal pallino sulla diagonale $i$: freccia DIAGONALE verso il basso-destra lunga una cella (mossa di mismatch), che resta sulla diagonale $i$; etichetta $R_2$.
- Dal pallino sulla diagonale $i+1$: freccia VERTICALE verso il basso lunga una cella, che approda sulla diagonale $i$; etichetta $R_3$.
- Le etichette $R_1,R_2,R_3$ non sono nel manoscritto di questa pagina ma compaiono nello pseudocodice di p.50 e nel testo del capitolo: metterle in piccolo accanto alla rispettiva freccia.

IL PUNTO (v,u) E L'ESTENSIONE LCE
- Il piu' lontano dei tre arrivi coincide con l'incrocio riga $v$ / colonna $u$: marcarlo con un pallino pieno piu' GROSSO degli altri.
- Da quel pallino parte un tratto rettilineo SPESSO lungo la diagonale $i$, verso destra-basso, lungo circa due celle, che termina con un altro pallino pieno: e' l'estensione di soli match trovata dalla query di longest common extension.
- Dall'estremo di quel tratto parte una linea di richiamo sottile che sale verso destra e raggiunge, FUORI dalla figura sulla destra e all'incirca a un terzo dell'altezza, l'etichetta $\lcey(P,T,v+1,u+1)$. ATTENZIONE: nel manoscritto l'etichetta e' 'LCE(P[v,n], T[u,m])'; in fase di cucitura e' stata corretta di uno (dalla cella $(v,u)$ i primi caratteri ancora da confrontare sono $P[v+1]$ e $T[u+1]$) e portata alla forma a quattro argomenti usata in tutto il capitolo. Usare la forma corretta $\lcey(P,T,v+1,u+1)$.

STILE
- Testo tutto in italiano; le uniche scritte sono $i-1$, $i$, $i+1$, $u$, $v$, 'f.r.\ $(d-1)$-path', $R_1$, $R_2$, $R_3$ e la formula lce.
- Tre livelli grafici: linee di riferimento sottili e chiare (bordi, diagonali, riga $v$, colonna $u$); cammini ondulati a tratto medio; mosse d'errore ed estensione LCE a tratto spesso e scuro con pallini pieni.
- Facoltativo ma utile: colorare diversamente $R_1$, $R_2$, $R_3$ (rosso / verde / blu) mantenendo pero' l'estensione finale in un unico colore scuro.

SIGNIFICATO: e' la traduzione grafica del lemma di Landau-Vishkin: il f.r. $d$-path sulla diagonale $i$ si ottiene prendendo il massimo fra i tre prolungamenti dei f.r. $(d-1)$-path sulle diagonali $i-1$, $i$, $i+1$ e applicando poi una sola query LCE, il tutto in tempo costante.
