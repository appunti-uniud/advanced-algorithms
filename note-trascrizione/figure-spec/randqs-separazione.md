# Figura `randqs-separazione`

- **Pagina della scansione:** 53
- **Tipo:** schema lineare (retta dei ranghi)
- **Didascalia prevista:** Se il pivot estratto cade strettamente fra $x_i$ e $x_j$, i due elementi finiscono in sottoinsiemi diversi e non verranno mai confrontati.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema lineare su una sola riga, molto semplice, senza riquadri ne' assi.

GEOMETRIA. Una unica retta ORIZZONTALE TRATTEGGIATA (tratti brevi e regolari, tipo `dashed` con dash pattern ~4pt on / 4pt off, spessore normale), larga circa 10-11 cm, centrata. La retta rappresenta la sequenza ORDINATA degli elementi dell'input, $x_1<x_2<\dots<x_n$; il tratteggio prosegue fino a entrambi i bordi del disegno, cioe' non ha estremi marcati (il tratteggio stesso fa da "...").

TRE PUNTI NOTEVOLI, tutti alla quota della retta:
1. a circa il 28-30% della larghezza: l'etichetta matematica $x_i$ posta A CAVALLO della retta, cioe' il simbolo interrompe localmente il tratteggio (nel manoscritto la lettera e' scritta sopra la linea, che le passa attraverso). Rendere con un nodo `fill=white` (o `inner sep` sufficiente) contenente $x_i$.
2. al CENTRO esatto (50%): un PICCOLO CERCHIO VUOTO (circonferenza, diametro ~3.5-4 pt, non riempito) disegnato sulla retta; anche qui il tratteggio si interrompe attorno al cerchio. E' la posizione dell'elemento estratto come pivot.
3. a circa il 70-72% della larghezza: l'etichetta $x_j$, resa esattamente come $x_i$ al punto 1.

FRECCIA. Dal basso sale verso il cerchio centrale una FRECCIA A ZIGZAG: una spezzata a denti di sega (4-5 oscillazioni di piccola ampiezza, ~2 mm di semiampiezza orizzontale), alta circa 1,5-2 cm, perfettamente verticale nel suo andamento medio, che parte sotto la retta e termina con una PUNTA DI FRECCIA che tocca il cerchio dal basso. In TikZ si puo' ottenere con `decorate,decoration={snake,amplitude=.6mm,segment length=3mm,post length=2mm},->`.

ETICHETTA AGGIUNTA (non presente nell'originale, da inserire per leggibilita'): sotto l'estremo inferiore della freccia, in corpo minore e in italiano, la dicitura «pivot scelto».

SIGNIFICATO ALGORITMICO da preservare: la retta e' la sequenza ordinata; $x_i$ e $x_j$ sono i due elementi di cui si vuole la probabilita' di confronto $p_{ij}$; il cerchio marca un pivot che cade STRETTAMENTE FRA i due. In quel caso $x_i$ finisce in $S_1$, $x_j$ in $S_2$, e i due non verranno mai piu' confrontati: e' l'evento complementare a quello che definisce $X_{ij}=1$. Le proporzioni contano: il pivot deve trovarsi visibilmente in mezzo ai due, e i due elementi devono essere ben distanti fra loro (parecchi tratti di tratteggio in mezzo), per suggerire che l'intervallo $\{x_i,\dots,x_j\}$ contiene molti elementi.
