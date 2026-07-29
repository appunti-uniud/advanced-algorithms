# Figura `mincut-c-in-e`

- **Pagina della scansione:** 57
- **Tipo:** schema insiemistico (diagramma di Venn a due insiemi annidati)
- **Didascalia prevista:** Il taglio minimo $C$ come sottoinsieme di $E$: l'arco da contrarre viene estratto uniformemente a caso da $E$, quindi la probabilità di colpire proprio un arco di $C$ è $\abs{C}/\abs{E}$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Diagramma insiemistico semplicissimo, a penna nell'originale, tratto a mano libera.

MACCHIA ESTERNA: una curva chiusa grande, irregolare, tipo "patata"/ameba, larga circa 1.6 volte l'altezza, con qualche rientranza sul bordo superiore e su quello inferiore-destro (nell'originale il contorno e chiaramente disegnato a mano libera: usare `decorate,decoration={random steps}` oppure una curva chiusa con controlli irregolari). Rappresenta l'insieme $E$ degli archi del grafo corrente. ETICHETTA: la lettera $E$ scritta DENTRO la macchia, in basso al centro, non sul bordo.

MACCHIA INTERNA: una seconda curva chiusa molto piu piccola (circa 1/5 dell'area), anch'essa irregolare, collocata NON al centro ma spostata verso sinistra e verso l'alto rispetto al centro della macchia esterna (circa al 30% della larghezza e al 60% dell'altezza). Deve stare interamente dentro quella esterna, senza toccarne il bordo. Rappresenta il taglio minimo $C$. ETICHETTA: la lettera $C$ scritta al centro della macchia piccola.

Nessun altro elemento: niente punti, niente frecce, niente ombreggiature nell'originale. Opzionalmente, per la versione pulita, si puo riempire la macchia interna con un grigio molto tenue per rendere visivo il rapporto di aree $|C|/|E|$ (piccolo), ma non e nell'originale.

STILE: due soli tratti chiusi, spessore uniforme, aspetto volutamente "a mano libera"; etichette in matematica corsiva.
