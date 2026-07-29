# Figura `karger-bipartizione-taglio`

- **Pagina della scansione:** 56
- **Tipo:** schema insiemistico (sagoma amorfa bipartita)
- **Didascalia prevista:** La bipartizione di $V$ indotta dalle contrazioni: a sinistra i nodi contratti su $a$, a destra quelli contratti su $b$. La linea ondulata è il taglio $C$, e ogni cammino da un $a_i$ a un $b_j$ è costretto ad attraversarla.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema a mano libera, tratto spesso; NON e un grafo: dentro la sagoma non ci sono ne pallini ne archi, solo etichette. (ID rinominato in cucitura: era p56-bipartizione-taglio. ATTENZIONE: i pedici delle due liste sono stati rinominati in cucitura da k,h a p,q per evitare la collisione con $k=|C|$ e con l'$h$ delle ripetizioni.)

SAGOMA. Una grande curva chiusa amorfa, tipo 'patata'/ellisse deformata, larga ~5 cm e alta ~2,8 cm, con contorno leggermente irregolare (bordo destro piu arrotondato, bordo sinistro con una lieve rientranza a meta altezza). Rappresenta l'insieme $V$ dei vertici di $G$.

LINEA DI TAGLIO. Una linea VERTICALE ondulata/serpeggiante (piccole oscillazioni di ampiezza ~2 mm, stile decorate/snake) che va dal bordo SUPERIORE al bordo INFERIORE della sagoma, posizionata a circa il 45% della larghezza (leggermente a sinistra del centro), dividendola in una parte sinistra e una parte destra di area confrontabile. Etichetta $C$ in corsivo matematico appena SOPRA la sagoma, all'estremita superiore dell'ondulata, leggermente a sinistra di essa.

PARTE SINISTRA (nodi contratti su $a$). Tre elementi disposti lungo una diagonale che sale da sinistra-basso verso destra-alto:
  - $a_1$ in basso a sinistra (a ~20% della larghezza della sagoma, ~25% dell'altezza dal basso);
  - tre puntini di sospensione allineati sulla stessa diagonale (puntini che salgono da sinistra a destra), fra i due;
  - $a_p$ in alto (a ~35% della larghezza, ~65% dell'altezza).

PARTE DESTRA (nodi contratti su $b$). Stessa disposizione, specularmente collocata subito a destra dell'ondulata:
  - $b_1$ in basso (a ~58% della larghezza, ~25% dell'altezza);
  - tre puntini di sospensione sulla diagonale ascendente;
  - $b_q$ in alto (a ~68% della larghezza, ~72% dell'altezza), quasi a ridosso del bordo superiore.
Tutte le etichette in corsivo matematico con pedice.

SIGNIFICATO. Le $n-2$ contrazioni partizionano $V$ in due classi: quella fusa nel super-nodo $a$ ($\{a_1,\dots,a_p\}$) e quella fusa in $b$ ($\{b_1,\dots,b_q\}$). La linea ondulata e la frontiera fra le due classi, cioe il taglio $C$: ogni cammino di $G$ che parte da un $a_i$ e arriva a un $b_j$ e costretto ad attraversarla, quindi a usare un arco di $C$.
