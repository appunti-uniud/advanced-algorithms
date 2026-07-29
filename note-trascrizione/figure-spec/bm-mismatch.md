# Figura `bm-mismatch`

- **Pagina della scansione:** 9
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Un passo di Boyer--Moore: i confronti procedono da destra a sinistra, $\alpha$ è il suffisso di $P$ già riconosciuto e il mismatch è fra il carattere $y$ del pattern e il corrispondente carattere $x$ del testo; il pattern viene poi fatto scorrere verso destra, nel disegno addirittura di tutta la propria lunghezza.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE: rispetto alla specifica prodotta sulla singola pagina le etichette dei due caratteri del mismatch sono state SCAMBIATE per uniformare la notazione al resto del capitolo: nel capitolo $x$ è sempre il carattere di $T$ che provoca il mismatch (è quello cercato dalla bad character rule) e $y$ è sempre $P[i-1]$, il carattere del pattern. Nel manoscritto erano invertiti.

Schema a due righe di segmenti orizzontali con tacche verticali (stile "barre di stringa" a mano libera, come nelle altre figure del quaderno). Tutte le misure sono in "unità" = un quadretto della scansione; le proporzioni riportate sono quelle misurate sull'originale e vanno rispettate almeno qualitativamente.

RIGA 1 — il testo T (in alto).
- Un unico segmento orizzontale lungo (circa 24 unità), che parte a sinistra senza tacca terminale e prosegue fino a destra; alla sua destra, staccata, la lettera maiuscola $T$ come etichetta della riga.
- A circa 11 unità dall'inizio, due tacche verticali corte e ravvicinate (distanza ~1 unità) delimitano una singola cella; SOPRA la cella, la lettera $x$ (nel manoscritto è scritta proprio come «|·|», cioè fra le due tacche).
- Subito a destra della seconda tacca, un tratto di ~3 unità sopra il quale è scritta la lettera greca $\alpha$; il tratto termina con una tacca verticale corta.
- Dopo tale tacca il segmento prosegue ancora ~8 unità fino alla fine (dove sta l'etichetta $T$). Non ci sono altre tacche.

RIGA 2 — il pattern P (circa 2 unità più in basso), disegnato in DUE copie sulla stessa retta orizzontale.
- Copia 1 (allineamento corrente), lunga ~9,5 unità: comincia con una tacca verticale e finisce con una tacca verticale PIÙ MARCATA (tratto più spesso/più alto) allineata verticalmente con la tacca che chiude $\alpha$ nella riga 1. Suddivisione interna, da sinistra: ~5 unità senza etichette (parte di $P$ non ancora esaminata); poi due tacche corte che delimitano una cella di ~1 unità, allineata verticalmente con la cella di $x$ della riga 1, con SOPRA la lettera $y$; poi ~3 unità con SOPRA la lettera $\alpha$, di estensione identica e verticalmente allineata all'$\alpha$ della riga 1, fino alla tacca marcata finale.
- SOTTO la tacca marcata finale della copia 1, l'etichetta $P$.
- SOTTO la copia 1, una linea ondulata tracciata a mano libera (una sola ondulazione morbida, non una graffa) che va da poco dopo l'estremo sinistro del pattern fino alla tacca sinistra della cella $y$: marca la porzione di $P$ non ancora confrontata.
- Copia 2 (pattern dopo lo shift), sulla STESSA retta orizzontale: comincia con un piccolo stacco immediatamente a destra della tacca finale della copia 1 e ha la stessa lunghezza della copia 1; termina con una tacca verticale marcata, sotto la quale c'è di nuovo l'etichetta $P$. La copia 2 non porta né tacche interne né etichette. Il suo estremo destro cade all'incirca dove finisce il segmento di $T$.

ANNOTAZIONE A DESTRA (fuori dai due segmenti, all'altezza fra riga 1 e riga 2, in colonna a destra): due righe di testo,
  «ci sono casi»
  «$\Oh(m/n)$»
(nel manoscritto $m/n$ è scritto come frazione in linea, con $m$ sopra e $n$ sotto).

SIGNIFICATO ALGORITMICO (da rendere leggibile dal disegno, non da scrivere nella figura): il pattern è allineato sotto il testo; i confronti partono dall'estremo DESTRO e procedono verso sinistra; $\alpha$ è il suffisso di $P$ già riconosciuto (uguale al corrispondente fattore di $T$); il primo confronto che fallisce è quello fra il carattere $y$ di $P$ e il carattere $x$ di $T$ immediatamente a sinistra di $\alpha$, con $x\neq y$; la parte di $P$ a sinistra di $y$ (sottolineata dall'ondulazione) non è mai stata guardata; dopo il mismatch il pattern viene fatto scorrere verso destra, e lo shift può arrivare fino a tutta la lunghezza di $P$ — da cui l'annotazione sui casi con costo $\Oh(m/n)$ (comportamento sublineare).

Tutte le etichette testuali sono in italiano; le uniche etichette simboliche sono $T$, $P$, $\alpha$, $x$, $y$.
