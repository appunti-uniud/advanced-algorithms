# Figura `tabella-op-binarie`

- **Pagina della scansione:** 40
- **Tipo:** schema (matrice/tabella + parole di bit)
- **Didascalia prevista:** Tabella di un'operazione binaria indicizzata da una coppia di \emph{mezze} parole: $2^{(\log n)/2}\times 2^{(\log n)/2}=\sqrt n\times\sqrt n=n$ entrate, cioè spazio $\Oh(n)$. In basso, i due operandi di $\log n$ bit, ciascuno spezzato nelle due metà che indicizzano la tabella.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura unica, due blocchi impilati verticalmente e centrati, più un'annotazione a destra.

BLOCCO A (in alto) — la tabella:
- Un QUADRATO a tratto pieno, lato circa 4,5 cm, linea di spessore medio. Il quadrato è VUOTO all'interno (non è una griglia: nessuna linea interna).
- Sopra il lato superiore, una GRAFFA orizzontale (decorate/brace) rivolta verso il basso, che copre l'intera larghezza del quadrato, con un piccolo distacco verticale (~4 mm). Etichetta centrata sopra la graffa: $2^{\frac{\log n}{2}}$.
- A sinistra del lato sinistro, una GRAFFA verticale rivolta verso destra, che copre l'intera altezza del quadrato, con distacco orizzontale (~4 mm). Etichetta a sinistra della graffa, centrata verticalmente: $2^{\frac{\log n}{2}}$.
- Le due graffe indicano che righe e colonne sono indicizzate dalle mezze parole di $(\log n)/2$ bit; il numero di righe e di colonne è $2^{(\log n)/2} = \sqrt n$.

ANNOTAZIONE a destra:
- Testo su una riga, in alto a destra rispetto al quadrato, all'incirca all'altezza del bordo superiore: «spazio $\sqrt{n}\times\sqrt{n}=n$».
- Da subito sotto tale testo parte una FRECCIA obliqua che punta in basso a sinistra, verso il bordo destro del quadrato (poco sotto lo spigolo superiore destro), con punta triangolare piena.

BLOCCO B (sotto il quadrato, leggermente spostato a destra rispetto al suo centro) — i due operandi:
- DUE rettangoli orizzontali molto schiacciati (larghezza ~4 cm, altezza ~0,5 cm), uno sopra l'altro, separati da uno spazio verticale pari a circa un'altezza di rettangolo.
- Ciascun rettangolo è diviso da UN segmento verticale a metà della sua larghezza (nel quaderno il taglio è a circa il 60%, ma semanticamente deve essere a metà): le due metà della parola.
- I due rettangoli rappresentano i due OPERANDI dell'operazione binaria, ciascuno di $\log n$ bit.
- Etichetta (graffa sottile o semplice testo) sopra il primo rettangolo o a destra dei due: «$\log n$ bit». Etichette opzionali sotto le metà del primo rettangolo: $\frac{\log n}{2}$ e $\frac{\log n}{2}$.
- Opzionale: due sottili frecce tratteggiate che dalla metà sinistra del primo operando e dalla metà sinistra del secondo operando salgono rispettivamente verso il lato sinistro e verso il lato superiore del quadrato («le metà indicizzano righe e colonne»). Usarle solo se non appesantiscono.

Tutto il testo in italiano. NON riportare in figura le formule a matita $2^{\log n}\times 2^{\log n}$ e $n\times n=n^2$ (stima ingenua, già discussa nel testo).
