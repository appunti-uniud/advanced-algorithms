# Figura `compattazione-abb`

- **Pagina della scansione:** 18
- **Tipo:** albero (frammento di suffix trie) con annotazione di compattazione
- **Didascalia prevista:** Contrazione di una catena unaria in un ramo del suffix trie di $a^m b^m$: i due nodi con un solo figlio vengono cancellati e il cammino \str{abb} diventa un unico arco, che verrà etichettato con la coppia di indici $[k,p]$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE (modifica in cucitura): nel manoscritto l'etichetta della coppia di indici è $[i,j]$; nel capitolo cucito le coppie di indici sono uniformate a $[k,p]$ (i e j sono impegnati come indice del passo e indice del suffisso). Usare quindi $[k,p]$.

Frammento di suffix trie che scende in diagonale verso destra-basso, con sovrapposta l'annotazione della compattazione. DUE LIVELLI GRAFICI: (A) l'albero, in colore scuro/nero, tratto sottile; (B) l'annotazione, in colore accento (azzurro), tratto più spesso.

LIVELLO A — l'albero:
- In alto una LINEA ONDULATA verticale (decorate/snake, ampiezza piccola, ~4 oscillazioni, lunga ~2 unità) che entra dall'alto e termina sul nodo u: significa «l'albero prosegue verso la radice», è la continuazione del disegno del trie di a^m b^m. Nessuna etichetta.
- Nodo u: pallino PIENO, in cima al frammento; è branching, ha due archi uscenti.
  * arco 1: verso il BASSO-SINISTRA, rettilineo, lungo ~1.5 unità, che termina in un CERCHIETTO VUOTO (figlio/foglia). Arco e nodo senza etichetta.
  * arco 2: verso il BASSO-DESTRA, rettilineo, etichettato «$a$» (etichetta sopra/a sinistra dell'arco), fino al nodo $v_1$.
- Nodo $v_1$: pallino PIENO piccolo, un solo figlio; arco verso basso-destra etichettato «$b$» fino a $v_2$.
- Nodo $v_2$: pallino PIENO piccolo, un solo figlio; arco verso basso-destra etichettato «$b$» fino a $w$.
- Nodo $w$: pallino PIENO leggermente più grande, branching: due archi uscenti verso il basso (uno a sinistra-basso, uno a destra-basso, lunghi ~1 unità) che terminano in due FOGLIE disegnate come pallini pieni; archi senza etichetta.
- u, v1, v2, w sono allineati lungo una diagonale a ~45 gradi verso destra-basso, con passi uguali.

LIVELLO B — l'annotazione (colore accento):
- CANCELLATURA dei due nodi unari: su $v_1$ e su $v_2$ tratti pesanti incrociati (2–3 segmenti per nodo, tipo X allungata / sbarratura obliqua più orizzontale) che li barrano. Nel manoscritto sono scarabocchi vistosi; in TikZ bastano due segmenti incrociati spessi per nodo.
- NUOVO ARCO COMPATTATO: una curva spessa (bezier) che parte dal nodo u, si incurva vistosamente verso SINISTRA-BASSO (bombatura a sinistra, per scavalcare la catena senza toccarla) e rientra a destra terminando sul nodo $w$. Non deve sovrapporsi agli archi $a$, $b$, $b$: passa alla loro sinistra.
- ETICHETTA dell'arco compattato, su due righe, a sinistra della curva, a metà altezza fra u e w:
    riga 1: \str{abb}
    riga 2: $[k,p]$

SIGNIFICATO ALGORITMICO: il cammino massimale di nodi con un solo figlio (u -> v1 -> v2 -> w, che compita la stringa abb) viene sostituito da un unico arco u -> w; i nodi intermedi spariscono e l'etichetta, non potendo essere memorizzata come stringa, diventa la coppia di indici $[k,p]$ con $T[k..p] = \mathtt{abb}$.
