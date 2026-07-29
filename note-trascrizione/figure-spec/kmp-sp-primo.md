# Figura `kmp-sp-primo`

- **Pagina della scansione:** 8
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Mismatch fra $y$ (in $T$) e $x=P[i+1]$: dopo lo shift il carattere di $P$ allineato a $y$ è $z=P[sp_i(P)+1]$. Se $z=x$ il mismatch si ripresenta con certezza.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema a due barre orizzontali allineate verticalmente: testo $T$ sopra, pattern $P$ sotto (allineamento corrente di KMP).

RIGA SUPERIORE (y=2), il TESTO $T$:
- linea orizzontale spessa da x=-0.6 a x=11, punta di freccia a destra, etichetta '$T$' subito a destra della freccia;
- una tacca verticale a x=5.0 (senza etichetta; segna in $T$ il punto in cui comincia la copia di alpha);
- una CELLA fra x=7.2 e x=8.0, delimitata da due tacche verticali, contenente il carattere '$y$' scritto dentro la cella, sulla linea;
- sopra la cella, una freccia verticale che punta verso il basso (da y=2.9 a y=2.15) centrata su x=7.6: e' la posizione corrente di confronto in $T$.

RIGA INFERIORE (y=0), il PATTERN $P$, allineato sotto $T$:
- linea orizzontale spessa da x=0 a x=9.5, con tacche verticali agli estremi (x=0 inizio di $P$, x=9.5 fine di $P$); nessuna freccia (il pattern e' finito);
- tacche verticali ai confini: x=0, x=2.2, x=3.0, x=5.0, x=7.2, x=8.0, x=9.5;
- graffa ondulata SOPRA il segmento [0, 2.2] etichettata '$\alpha$': prefisso $\alpha=P[1..sp_i(P)]$;
- CELLA fra x=2.2 e x=3.0 contenente il carattere '$z$': $z=P[sp_i(P)+1]$, il carattere che segue il prefisso $\alpha$;
- graffa ondulata SOPRA il segmento [5.0, 7.2] etichettata '$\alpha$', della STESSA larghezza (2.2) della prima: suffisso $\alpha=P[i-sp_i(P)+1..i]$;
- CELLA fra x=7.2 e x=8.0 contenente il carattere '$x$': $x=P[i+1]$, carattere su cui avviene il mismatch;
- il tratto da x=8.0 a x=9.5 e' il resto di $P$ (nessuna etichetta; verificato che dopo la cella di $x$ la linea prosegue, quindi $x$ NON e' l'ultimo carattere).
Le celle di '$y$' (riga $T$) e di '$x$' (riga $P$) devono essere ESATTAMENTE incolonnate: entrambe in [7.2, 8.0].

COLLEGAMENTO FRA LE DUE RIGHE: una seconda freccia verticale verso il basso, fra le due righe, centrata su x=7.6 (da y=1.3 a y=0.35): collega $y$ a $x$, cioe' il confronto in corso.

ANNOTAZIONE: una freccia curva (spezzata/ondulata come nel manoscritto) che parte da circa (4.0, -1.6) e risale verso sinistra fino a puntare alla cella di '$z$' (punta a circa (2.6, -0.35)), etichettata «shift». Le due frasi manoscritte che nel quaderno accompagnano il disegno («se $x\neq y$» e «se $z$ non e' $y$, dopo lo shift di $P$ avro' un mismatch») sono state spostate nel corpo del testo: NON vanno riprodotte nella figura, cosi' il disegno resta leggibile.

ETICHETTE DI POSIZIONE (non presenti nel manoscritto, AGGIUNTE per rendere la figura autonoma): sotto la riga di $P$, in piccolo, '$1$' a x=0, '$sp_i(P)$' a x=2.2, '$i-sp_i(P)$' a x=5.0, '$i$' a x=7.2, '$i+1$' centrato sulla cella di $x$, '$|P|$' a x=9.5.

SIGNIFICATO ALGORITMICO: e' stato riconosciuto $P[1..i]$ contro $T$; il confronto successivo fallisce ($x=P[i+1]\neq y$). KMP fa scorrere $P$ di $i-sp_i(P)$ posizioni, portando il prefisso $\alpha$ sotto la copia destra di $\alpha$; il carattere di $P$ che finisce sotto $y$ e' allora $z=P[sp_i(P)+1]$. Se $z=x$ il nuovo confronto e' certamente perdente: da qui la richiesta $z\neq x$ che definisce $sp'_i(P)$.

STILE: due righe, distanza verticale ~2 unita', monocromatico, larghezza ~0.85\\textwidth.
