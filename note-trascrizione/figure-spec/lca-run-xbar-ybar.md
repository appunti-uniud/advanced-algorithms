# Figura `lca-run-xbar-ybar`

- **Pagina della scansione:** 38
- **Tipo:** schema di albero (frammento di albero T con un run evidenziato)
- **Didascalia prevista:** Il run di $z$ (linea a zig-zag che scende in diagonale): $\bar x$ e $\bar y$ sono i primi nodi del run incontrati risalendo da $x$ e da $y$. Poiché $\bar x$ è il più alto dei due, $z=\bar x$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Frammento di albero T disegnato a mano libera.

CONVENZIONE GRAFICA DEL MANOSCRITTO: i cammini di lunghezza arbitraria sono resi con linee A ZIG-ZAG (in TikZ: decorate, decoration={zigzag, segment length=6pt, amplitude=2.5pt}); un solo cammino, quello che porta a x, è tracciato con una linea liscia leggermente arcuata. I nodi sono piccoli dischi pieni (circle, fill, inner sep=1.6pt).

COORDINATE (unità arbitrarie, ricavate dalle proporzioni della scansione; y verso l'alto):
  TOP  = (0.00, 4.40)  estremo superiore libero del run: nessun nodo, nessuna etichetta (il run prosegue verso l'alto fino al proprio leader)
  XB   = (0.70, 3.50)  nodo pieno, etichetta $\bar x$
  YB   = (2.05, 2.00)  nodo pieno, etichetta $\bar y$
  BOT  = (3.22, 0.60)  nodo pieno terminale, senza etichetta (= fondo del run, cioè I(z))
  X    = (-0.90, 1.75) nodo pieno, etichetta $x$
  Y    = (0.75, 0.00)  nodo pieno, etichetta $y$

TRATTI DA DISEGNARE:
1. Zig-zag TOP -> XB (il run che continua verso l'alto). L'estremo TOP è libero, punta arrotondata; NIENTE freccia e NIENTE nodo.
2. Zig-zag XB -> YB.
3. Zig-zag YB -> BOT.
   I tratti 1+2+3 formano un'unica catena diagonale continua da in alto a sinistra a in basso a destra: è IL RUN DI z. Si può usare un tratto leggermente più spesso per enfatizzarlo; nel manoscritto NON c'è alcun riquadro tratteggiato.
4. Linea LISCIA (leggermente arcuata, concavità verso il basso) da XB verso il basso a sinistra fino a X: è il cammino che da x risale fino a x̄.
5. Zig-zag da YB verso il basso a sinistra fino a Y: è il cammino che da y risale fino a ȳ.

ETICHETTE (font matematico):
  - $\bar x$ sopra a destra di XB, offset circa (+0.45,+0.35), con sopralineatura ben visibile.
  - $\bar y$ sopra a destra di YB, offset circa (+0.55,+0.45), con sopralineatura.
  - $x$ sotto a sinistra di X; $y$ sotto a sinistra di Y.
  - AGGIUNTA EDITORIALE (non presente nel manoscritto, da rendere in grigio o fra parentesi): accanto a $\bar x$ scrivere «$=z$», così l'etichetta diventa «$\bar x = z$». Serve a rendere leggibile l'ultimo punto della dimostrazione.

SIGNIFICATO ALGORITMICO da preservare: x̄ e ȳ giacciono entrambi sul run di z, che è un cammino verticale in T; il ramo che porta a x si stacca dal run in x̄, quello che porta a y si stacca in ȳ; poiché x̄ è antenato di ȳ, si ha lca(x,y) = x̄ = z. Il run continua sia sopra x̄ (verso il leader) sia sotto ȳ (verso I(z)): è importante che entrambe le prosecuzioni restino visibili.

Dimensione consigliata: circa 6 cm di larghezza; nessun asse, nessuna griglia, nessun titolo interno.
