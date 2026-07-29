# Figura `random-walk-linea-2sat`

- **Pagina della scansione:** 68
- **Tipo:** schema / linea degli stati di un random walk 1-D
- **Didascalia prevista:** Il passo dell'algoritmo visto come passeggiata aleatoria sulla linea degli stati $0,1,\dots,n$: dallo stato $k$ si passa a $k-1$ oppure a $k+1$, e a $k+1$ con probabilità almeno $1/2$. Qui $n$ è il numero delle variabili proposizionali e lo stato $k$ conta le variabili su cui l'assegnamento corrente $f$ coincide con l'assegnamento soddisfacente fissato $f^{*}$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

FIGURA UNICA CHE FONDE I DUE DISEGNI DEL QUADERNO (p.68 e p.69, che rappresentano la stessa cosa): dal disegno di p.68 si prendono lo stato corrente $k$ e le due frecce $k\to k\pm1$; dal disegno di p.69 si prendono gli stati numerati e la freccia terminale.

Disegno a mano libera, penna blu, su una sola riga orizzontale.

LINEA: un segmento orizzontale lungo (circa 60% della larghezza del testo), tracciato a mano libera con una leggerissima ondulazione, che termina a destra con una punta di freccia.

ESTREMO SINISTRO: una sbarra verticale piu' lunga delle altre tacche, che attraversa la linea sporgendo sia sopra sia sotto (marcatore di origine); sotto di essa l'etichetta $0$.

STATI: pallini pieni sull'asse, equispaziati (passo ~1,5 quadretti). Subito dopo l'origine i primi stati $1$, $2$; poi il GRUPPO CENTRALE di tre tacche/pallini ravvicinati che rappresentano $k-1$, $k$, $k+1$; poi un tratto vuoto con puntini di sospensione «......» posti SOTTO l'asse; infine un ultimo pallino pieno etichettato $n$, con una tacca verticale che attraversa la linea (sporge sopra e sotto). Dopo $n$ l'asse prosegue ancora un po' fino alla punta di freccia.

ETICHETTE sotto i pallini, allineate: $0$, $1$, $2$, $k-1$, $k$, $k+1$, ......, $n$. La tacca centrale del gruppo (quella di $k$) e' la piu' lunga e sporge sia sopra sia sotto.

FRECCE DEL PASSO: sopra il gruppo centrale, due archi di freccia che partono entrambi dalla sommita' della tacca di $k$ (le code quasi si toccano sopra $k$): (a) il primo arcua verso SINISTRA, concavita' verso il basso, e termina con la punta rivolta a sinistra/in basso appena sopra $k-1$; (b) il secondo arcua verso DESTRA e termina con la punta rivolta a destra/in basso appena sopra $k+1$. I due archi sono piccoli semicerchi appiattiti, alti circa mezzo quadretto. Accanto alla freccia destra, in piccolo, l'etichetta $\ge \tfrac12$ (nel manoscritto non c'e': si veda la nota editoriale).

ANNOTAZIONE: a destra dell'etichetta $n$, spostata verso il basso, la scritta su due righe «$n$ variabili» / «proposizionali», in corpo piccolo, in italiano.

SEMANTICA: la posizione sulla retta e' il numero di variabili sulle quali l'assegnamento corrente $f$ coincide con un assegnamento soddisfacente fissato $f^{*}$; ogni FLIP sposta di $\pm1$; verso destra con probabilita' almeno $1/2$; lo stato $n$ e' quello di arresto (assorbente).

RESA SUGGERITA IN TIKZ: linea con \draw plot[smooth] su 5-6 punti quasi allineati per l'effetto a mano libera; tacche come segmenti verticali; frecce con [->,bend left]/[->,bend right] fra punti sopra la linea; etichette come nodi matematici senza riquadro. Nessun testo dentro la figura oltre alle etichette indicate.
