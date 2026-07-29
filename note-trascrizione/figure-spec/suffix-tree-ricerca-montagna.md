# Figura `suffix-tree-ricerca-montagna`

- **Pagina della scansione:** 19
- **Tipo:** albero
- **Didascalia prevista:** Uso del suffix tree per la ricerca esatta: il cammino che compita $P$ dalla radice termina nel nodo $v$; le foglie del sottoalbero $\albero{v}$ appeso a $v$ sono le occorrenze di $P$ in $T$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno schematico 'a montagna' del suffix tree di T, con il cammino del pattern P e il sottoalbero delle occorrenze. Nel manoscritto è tutto a mano libera, con profili frastagliati; in TikZ conviene una resa pulita ma che conservi l'idea di 'sagoma' (triangolo con lati leggermente irregolari o decorati).

ELEMENTI, da sinistra a destra.

1) SCHEMA PATTERN/TESTO (in alto a sinistra, staccato dalla montagna):
   - un segmento orizzontale corto (lunghezza ~1.2) a y=2.6, con l'etichetta $P$ scritta appena sopra la sua estremità sinistra;
   - sotto, a y=1.9, un segmento orizzontale lungo (lunghezza ~3.2), con l'etichetta $T$ appena sopra la sua estremità sinistra.
   Serve solo a ricordare che P è corto e T è lungo. Tratto spesso.

2) LA MONTAGNA (a destra, occupa il resto della figura): un grande triangolo con vertice in alto, apice circa a (7.5, 3.2), base da (4.5, -1.6) a (10.5, -1.6). I due lati vanno disegnati come spezzate/onde irregolari (profilo di montagna), non come rette perfette; la base può essere lasciata aperta oppure tracciata leggera. Rappresenta l'INTERO suffix tree di T. Etichettare l'apice con 'radice' oppure con un piccolo pallino: nel manoscritto c'è solo un piccolo segno all'apice.

3) CAMMINO DI P: dall'apice (7.5, 3.2) scende una linea ondulata (quasi verticale, con qualche piccola oscillazione) fino al punto v = (7.4, 0.9). Va disegnata più marcata degli altri tratti (nell'originale è ripassata). Accanto al cammino, a destra, a circa (8.1, 2.1), l'etichetta $P$ in carattere grande.

4) NODO v: pallino pieno di raggio evidente in (7.4, 0.9). Etichetta $v$ posta appena a sinistra/sotto, a circa (7.0, 0.75). ATTENZIONE: nel manoscritto il nodo è disegnato ma NON etichettato; l'etichetta v va aggiunta per leggibilità.

5) SOTTOALBERO T(v): appeso al nodo v, un secondo triangolo più piccolo, con tratto più sottile, vertice in v=(7.4,0.9) e base da (6.0,-1.4) a (8.9,-1.4); anche qui i lati leggermente irregolari. La base è una linea ONDULATA (nel manoscritto è una linea a onde). Sulla base, due pallini pieni, uno a circa (6.4,-1.45) e uno a circa (8.4,-1.45): sono le FOGLIE, cioè le occorrenze di P in T. Etichetta $\mathcal{T}(v)$ posta a destra del triangolino, a circa (9.4, -0.3), con una freccetta che punta al triangolino. ATTENZIONE: anche questa etichetta non c'è nel manoscritto, va aggiunta.

SIGNIFICATO: compitando P dalla radice si arriva al nodo v; il sottoalbero appeso a v contiene tutte e sole le foglie che corrispondono ai suffissi di T che hanno P come prefisso, cioè alle occorrenze di P in T.

NOTA: l'annotazione manoscritta «e anche Boyer-Moore», che nell'originale sta a destra della montagna alla stessa altezza dell'apice, NON va inserita nella figura: è resa nel testo come osservazione.
