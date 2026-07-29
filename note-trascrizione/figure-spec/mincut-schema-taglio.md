# Figura `mincut-schema-taglio`

- **Pagina della scansione:** 57
- **Tipo:** grafo
- **Didascalia prevista:** Il grafo $G$ e un suo taglio (la linea ondulata): la grande maggioranza degli archi è interna alle due parti, pochissimi attraversano il taglio. È questo squilibrio a rendere probabile che una contrazione scelta a caso non distrugga il taglio.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema di un grafo non orientato con un taglio evidenziato, disegnato nel quaderno a matita con tratto sbiadito e irregolare; va ricostruito PULITO in TikZ.

CONTORNO ESTERNO: una grande macchia chiusa (ellisse deformata a mano libera, larga circa il doppio dell'altezza, stile `decorate/random steps` oppure curva di Bezier chiusa irregolare) che rappresenta il grafo G. Etichetta $G$ da aggiungere all'esterno, in alto a sinistra, vicino al bordo (nell'originale NON c'e ma serve alla leggibilita).

LINEA DI TAGLIO: una linea ondulata/a zig-zag stretto (stile `decorate,decoration={snake}` o `zigzag`), verticale, che attraversa tutta la macchia dall'alto in basso, posizionata circa al 45% della larghezza (quindi leggermente a sinistra del centro). E il taglio C. Etichetta $C$ da aggiungere in alto, all'estremita superiore dell'ondulata, appena fuori dalla macchia (nell'originale NON c'e).

PARTE SINISTRA (rada), 4 nodi = cerchietti piccoli vuoti:
  A in alto a sinistra (circa x=0.15, y=0.55 della bounding box della macchia)
  B in alto a destra della zona sinistra (x=0.32, y=0.62)
  D in basso a sinistra (x=0.17, y=0.20)
  F in basso al centro-sinistra (x=0.34, y=0.22)
Archi della parte sinistra: A-B, A-F, B-D, D-F. Gli archi A-F e B-D si INCROCIANO al centro del quadrilatero (e la caratteristica visiva del disegno originale: due diagonali che si tagliano). Nessun arco A-D e nessun arco B-F.

PARTE DESTRA (densa): un secondo contorno chiuso piu piccolo, un cerchio/ovale a tratto sottile, tutto contenuto nella meta destra della macchia grande (centro circa x=0.68, y=0.45; raggio circa 0.2 della larghezza totale). Dentro, 4 nodi disposti ai vertici di un quadrilatero quasi quadrato:
  P in alto a sinistra (x=0.56, y=0.62)
  Q in alto a destra (x=0.78, y=0.62)
  R in basso a destra (x=0.79, y=0.32)
  S in basso a sinistra (x=0.56, y=0.28)
Archi: TUTTI e sei, cioe il quadrilatero P-Q, Q-R, R-S, S-P piu le due diagonali P-R e Q-S che si incrociano al centro (un K4 disegnato in modo classico). E il "cluster denso".

ARCHI DEL TAGLIO: esattamente DUE archi attraversano la linea ondulata, e sono gli unici a farlo:
  B-P (in alto, quasi orizzontale, leggermente in salita da sinistra a destra)
  F-S (in basso, quasi orizzontale)
Vanno disegnati passando visibilmente sopra/attraverso l'ondulata, in modo che si conti "|C| = 2".

LINEA DI RICHIAMO: nell'originale dal bordo superiore-destro del cerchietto denso parte un segmento obliquo verso un'annotazione a matita illeggibile: OMETTERLA (l'annotazione non e trascrivibile ed e resa nel testo dall'ambiente `dubbio`); e la didascalia a dire la stessa cosa.

STILE: nodi come piccoli cerchi pieni o vuoti di raggio uniforme; archi a tratto sottile continuo; contorni delle macchie a tratto piu spesso e grigio; linea del taglio in tratto marcato (eventualmente colorato o comunque distinto). Nessun'altra etichetta.
