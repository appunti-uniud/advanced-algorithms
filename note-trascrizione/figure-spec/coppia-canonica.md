# Figura `coppia-canonica`

- **Pagina della scansione:** 24
- **Tipo:** albero
- **Didascalia prevista:** Coppie di riferimento canoniche e non canoniche: $(s,abcd)$ è canonica, $(s,abcdeabc)$ no (la sua forma canonica è $(s',abc)$).
- **Ritenuta fattibile in TikZ:** True

## Specifica

ID RINOMINATO in cucitura: era p24-coppia-canonica.

Frammento di suffix trie/tree disegnato in diagonale, dall'alto a sinistra verso il basso a destra (come nella scansione).

NODI E ARCHI:
1. In alto a sinistra: nodo esplicito s, disegnato come CERCHIO A DOPPIO BORDO (o cerchio con bordo spesso) di raggio medio, etichettato «s» in alto a destra del cerchio. Da esso esce verso l'alto-sinistra un breve segmento non etichettato (l'arco entrante che viene dal padre).
2. Da s scende verso il basso-destra una CATENA DI STATI IMPLICITI: piccoli cerchietti VUOTI di raggio piccolo, collegati da segmenti; la catena è disegnata tratteggiata/punteggiata per suggerire che si tratta di stati impliciti (nella scansione i cerchietti sono minuscoli e i segmenti sottili). Le etichette dei cinque archi, in ordine dall'alto, sono: a, b, c, d, e (una lettera per arco, posta a lato dell'arco).
3. Dopo l'arco etichettato e si trova un secondo nodo ESPLICITO s': CERCHIO SEMPLICE di raggio medio, etichettato «s'» (etichetta assente nella scansione, va aggiunta). Da s' esce anche un SECONDO arco, un breve segmento verso il basso-sinistra senza etichetta: serve solo a mostrare che s' è un branching point (grado uscente >= 2).
4. Da s' prosegue verso il basso-destra una seconda catena di stati impliciti (stessi cerchietti piccoli vuoti, stesso tratteggio) con tre archi etichettati a, b, c.
5. La seconda catena termina in un CERCHIO SEMPLICE di raggio medio, non etichettato: è il punto individuato dalla coppia (s,abcdeabc).

ANNOTAZIONI (in colore chiaro/secondario, come nella scansione):
A. Etichetta «$(s,abcd)$» posta a SINISTRA della figura, all'incirca all'altezza dell'arco d. Da essa parte una curva sottile che sale, gira attorno alla catena e termina con una PICCOLA FRECCIA che punta al cerchietto implicito situato SUBITO DOPO l'arco d (cioè fra d ed e). Questa è la coppia canonica.
B. Etichetta «$(s,abcdeabc)$» posta in ALTO A DESTRA, ben staccata dall'albero. Da essa parte una LUNGA curva che scende scavalcando a destra tutta la figura (passa a destra di s') e termina con una FRECCIA che punta al cerchio terminale in basso. Questa è la coppia NON canonica: il cammino attraversa il branching point s'.

STILE: tutto in un unico colore d'accento tenue per le annotazioni e nero/blu per l'albero; le etichette degli archi sono lettere minuscole in corsivo matematico. Facoltativo ma utile: un piccolo segno grafico (es. un pallino pieno) sul punto puntato dall'annotazione A, per rendere evidente che si tratta di uno stato implicito interno alla catena.
