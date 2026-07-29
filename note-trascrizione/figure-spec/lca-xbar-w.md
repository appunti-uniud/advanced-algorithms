# Figura `lca-xbar-w`

- **Pagina della scansione:** 39
- **Tipo:** albero (porzione di T con due run)
- **Didascalia prevista:** Il caso $h(I(x))\neq j$: $\bar x$ appartiene al run di $z$, mentre $w$ è il figlio di $\bar x$ sul cammino che scende verso $x$ ed è il leader del proprio run.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schizzo di una porzione dell'albero $\T$ disegnato IN DIAGONALE, dall'alto a sinistra verso il basso a destra (come nell'originale). Convenzione grafica da rispettare (la stessa di lca-run-xbar-ybar): un RUN si disegna come spezzata A ZIG-ZAG / a scalini, un cammino generico si disegna come linea LISCIA.

Elementi, dall'alto in basso:

(1) RUN DI z (run superiore). Spezzata a zig-zag di 5–6 gradini che entra dal bordo in alto a sinistra e scende verso destra, terminando sul nodo x̄. Disegnarla spessa, oppure — meglio — come un lungo parallelogramma stretto e tratteggiato orientato in diagonale, con il contorno a scalini. Il run prosegue oltre il bordo verso l'alto (lì stanno z e il leader del run): lasciarlo aperto/sfumato in alto a sinistra. Annotazione facoltativa: «run di $z$».

(2) NODO x̄. Pallino pieno all'estremità inferiore-destra del run superiore. Etichetta $\bar x$ IN ALTO A DESTRA del pallino.

(3) NODO w. Pallino pieno poco SOTTO e leggermente A SINISTRA di x̄ (circa mezzo quadretto sotto e un quadretto a sinistra). Etichetta $w$ IN ALTO A SINISTRA del pallino. Un SEGMENTO RETTILINEO breve unisce x̄ a w: è l'arco di $\T$ che realizza $\bar x = \mathrm{padre}(w)$; va disegnato pieno e ben visibile perché è il punto della figura. Annotazione facoltativa accanto a w: «leader del run».

(4) RUN DI w (run inferiore). Seconda spezzata a zig-zag (stessa resa grafica del run superiore) che PARTE ESATTAMENTE DA w e scende verso il basso a destra, più lunga della prima (6–8 gradini), terminando su un nodo marcato all'estremità in basso a destra: quel nodo è $I(w)$, il bottom del run. w è il top del run, cioè il suo leader — questa è la lettura semantica dell'intera figura. Etichetta $I(w)$ accanto al nodo terminale, e annotazione facoltativa «run di $w$».

(5) CAMMINO DA w A x. Linea LISCIA (rettilinea o appena curva, NON a zig-zag) che scende da w verso il basso a sinistra fino a un pallino pieno etichettato $x$ (etichetta a SINISTRA del pallino). Nell'originale i tratti sono 2–3 quasi paralleli (ripassature dello stesso cammino): in TikZ ne basta uno.

Disposizione consigliata (coordinate indicative): $x$ in basso a sinistra (0,0); $w$ al centro (3.2,2.6); $\bar x$ appena sopra e a destra di w (3.9,3.2); il run di z che risale da x̄ verso l'alto a sinistra fino a circa (2.4,5.0); il run di w che scende da w verso il basso a destra fino a $I(w)$ in (6.6,0.4).

Tutte le etichette sono simboli matematici ($x$, $w$, $\bar x$, $I(w)$); le eventuali annotazioni testuali («run di $z$», «run di $w$», «leader del run») vanno in italiano, in corpo piccolo e grigio.

Nota: nell'originale, accanto a w, compare un piccolo segno angolare non decifrato (forse una «L» di Leader o una punta di freccia): OMETTERLO.
