# Figura `active-end-point`

- **Pagina della scansione:** 24
- **Tipo:** schema
- **Didascalia prevista:** Boundary path di $\STree{}(T^{i-1})$ con active point $s_{j'}$ ed end point $s_{j''}$; fra i due sta la regione in cui si deve lavorare.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ID RINOMINATO in cucitura: era p24-active-end-point.

Schema del boundary path percorso da SINISTRA a DESTRA (la profondità degli stati diminuisce spostandosi a destra, perché si seguono i suffix link). NON riprodurre la legenda «x-sopralineato / stato, x / stringa» che nella scansione sta in alto a sinistra: è resa nel testo come osservazione di notazione.

ELEMENTI, da sinistra a destra:
1. NODO A (active point): pallino PIENO, posto in basso a sinistra. Vi arriva da sinistra una FRECCIA CURVA etichettata «$f$» (il suffix link che proviene dallo stato precedente del boundary path).
2. Da NODO A escono verso il basso tre brevi segmenti non etichettati, che terminano in pallini pieni più piccoli (uno in basso-sinistra, uno verticale, uno in basso-destra): servono solo a mostrare che A è branching, cioè NON è una foglia.
3. Da NODO A sale, verso l'alto-destra, una LINEA DI RICHIAMO tratteggiata (nella scansione è disegnata a zig-zag, come un lampo) che raggiunge un OVALE contenente «$s_{j'}$».
4. A SINISTRA dell'ovale, su due righe, la scritta «active point».
5. A DESTRA dell'ovale, la nota su due-tre righe «primo nodo nel boundary path che non è una foglia», con una piccola freccia che punta all'ovale.
6. Da NODO A parte verso l'alto-destra una FRECCIA DRITTA che termina appena prima di una fila di puntini disposti in diagonale ascendente: sono gli stati intermedi del boundary path, non disegnati.
7. NODO B (end point): pallino PIENO, posto in alto a destra rispetto ad A. Vi arriva una LUNGA CURVA MORBIDA che parte da NODO A, scende leggermente, poi risale verso destra e termina con una freccia su B.
8. Da NODO B sale una LINEA DI RICHIAMO tratteggiata (zig-zag nella scansione) fino a un OVALE contenente «$s_{j''}$», posto in alto a destra.
9. Sopra/a destra dell'ovale la scritta «end point».
10. Sotto/a destra, la nota su più righe «primo nodo nel boundary path che ha un arco uscente etichettato con $t_i$», con una freccia che punta all'ovale.
11. Sotto la lunga curva che va da A a B, una GRAFFA orizzontale (o una parentesi graffa rivolta verso il basso) che abbraccia il tratto fra A e B, con sotto la scritta «regione in cui devo "lavorare"» (virgolette incluse, come nella scansione).

STILE: nodi come pallini pieni; ovali disegnati a mano libera nella scansione, in TikZ vanno bene ellissi con bordo sottile; le note esplicative in corpo piccolo. Usare un colore d'accento tenue per la lunga curva A->B e per la graffa, in modo che si distinguano dagli archi dell'albero.
