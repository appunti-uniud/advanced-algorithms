# Figura `ukkonen-boundary-step`

- **Pagina della scansione:** 25
- **Tipo:** albero (due frammenti di suffix tree collegati da un suffix link)
- **Didascalia prevista:** Due passi consecutivi lungo il boundary path: in ciascuno stato si innesta il nuovo arco etichettato $t_i$, poi il suffix link $f$ porta allo stato successivo.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura composta da DUE frammenti di suffix tree affiancati, il frammento destro più in alto e a destra del sinistro (nel manoscritto il sinistro occupa la fascia bassa, il destro quella alta). Convenzioni grafiche da rispettare: tratto ONDULATO (snake/decorate) = cammino di lunghezza arbitraria, con estremo libero quando il sottoalbero è eliso; cerchio VUOTO = foglia o nodo esplicito; pallino PIENO = stato corrente marcato.

FRAMMENTO SINISTRO (in basso a sinistra):
- In alto un cerchio vuoto, diametro ~4 mm: nodo esplicito (branching).
- Una freccia curva entra da sinistra (concavità verso l'alto, ampia) e punta con punta piena al cerchio; sopra il suo tratto iniziale, in alto a sinistra, l'etichetta $f$ in corsivo matematico. Rappresenta il suffix link che ci ha portato in questo frammento dallo stato precedente.
- Dal fondo del cerchio scende, leggermente inclinato a destra, un tratto ONDULATO lungo ~2,5 cm che termina in un PALLINO PIENO (diametro ~2,5 mm): è lo stato corrente sul boundary path.
- Immediatamente a destra del pallino, un piccolo TRIANGOLO PIENO che punta verso il pallino (verso alto-sinistra), con una breve coda ondulata che scende verso il basso-destra per ~1,5 cm e si interrompe nel vuoto: è un puntatore non etichettato che marca lo stato.
- Dal pallino scende un SEGMENTO RETTILINEO quasi verticale (lieve inclinazione a destra), lungo ~3 cm, che termina in un cerchio vuoto (foglia già esistente).
- A circa metà di questo segmento è disegnato un piccolo QUADRATO (in realtà un parallelogramma leggermente inclinato, lato ~7 mm) a cavallo del segmento, che lo attraversa da parte a parte; il lato destro del quadrato ha un tratto verticale che sporge un po' sopra il lato superiore. Il quadrato marca il punto in cui l'arco viene spezzato (split) per rendere esplicito lo stato.
- Dal lato destro/inferiore del quadrato parte un arco RETTILINEO obliquo verso il basso-destra, lungo ~3 cm, etichettato $t_i$ (etichetta a metà arco, sopra di esso), che termina in un cerchio vuoto: la NUOVA foglia appena creata.

FRAMMENTO DESTRO (in alto a destra, stessa struttura ma senza il ramo ondulato laterale):
- In alto un cerchio vuoto: nodo esplicito. È il bersaglio della lunga freccia $f$ descritta sotto.
- Dal cerchio scende un tratto ONDULATO lungo ~2,5 cm, etichettato $w$ (etichetta in corsivo matematico posta a destra del tratto, all'altezza del suo primo terzo), che termina in un PALLINO PIENO: lo stato corrente.
- Dal pallino scende un segmento rettilineo verticale con lo stesso piccolo QUADRATO a cavallo, disegnato come sopra.
- Il segmento prosegue oltre il quadrato e termina in un cerchio vuoto (foglia esistente).
- Dal lato destro/inferiore del quadrato parte un arco rettilineo obliquo verso il basso-destra etichettato $t_i$, che termina in un cerchio vuoto (nuova foglia).

COLLEGAMENTO FRA I DUE FRAMMENTI:
- Una lunga freccia curva (arco molto ampio, concavità verso il basso-destra) parte dal pallino pieno del frammento SINISTRO, sale verso destra attraversando tutta la larghezza della figura e termina con punta piena sul cerchio in alto del frammento DESTRO. Nel manoscritto non è etichettata: nella versione TikZ conviene etichettarla $f$ a metà arco, sopra di essa, per rendere leggibile la figura.

SIGNIFICATO ALGORITMICO da preservare: si sta aggiornando STree(T^{i-1}) in STree(T^i); in ogni stato del boundary path privo di t_i-transizione si spezza l'arco (quadrato) e si appende una nuova foglia con l'arco etichettato t_i; poi si segue il suffix link f verso lo stato successivo, dove si rilegge la stessa stringa w e si ripete.
