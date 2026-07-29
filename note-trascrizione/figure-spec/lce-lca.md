# Figura `lce-lca`

- **Pagina della scansione:** 49
- **Tipo:** schema di stringhe + albero (suffix tree generalizzato)
- **Didascalia prevista:** La query $\lcey(S_1,S_2,i,j)$ si riduce a una query di $\lca$ sul suffix tree generalizzato di $S_1\,\text{\$}\,S_2\,\text{\texteuro}$: la profondità in caratteri del più profondo antenato comune delle foglie di $i$ e di $j$ vale esattamente $k$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura composta da due blocchi affiancati, collegati da due curve.

BLOCCO SINISTRO (in alto a sinistra) — la stringa concatenata.
- Un rettangolo orizzontale molto largo e basso (rapporto circa 12:1, per esempio 7 cm x 0,55 cm), tratto semplice, senza riempimento: rappresenta la stringa concatenata $S = S_1\,\$\,S_2\,\texteuro$. Etichettarlo «$S_1\,\$\,S_2\,\texteuro$» sopra il bordo superiore oppure a sinistra. (Nell'originale ci sono solo due segni minuscoli e illeggibili agli estremi interni, verosimilmente «1» e «n»: non riprodurli.)
- Sotto il rettangolo, due tacche/frecce verticali corte che puntano verso l'alto al bordo inferiore della barra, in corrispondenza di due posizioni interne: la prima a circa il 30% della lunghezza, etichettata $i$; la seconda a circa il 55%, etichettata $j$. Le etichette stanno appena sotto la barra.

BLOCCO DESTRO — il suffix tree generalizzato.
- Sagoma triangolare disegnata come contorno chiuso (apice in alto, base in basso; larghezza alla base circa 4 cm, altezza circa 3,5 cm). Nell'originale il contorno è tracciato a mano libera e irregolare: in TikZ va bene un triangolo con lati leggermente ondulati oppure un triangolo pulito.
- Apice = radice dell'albero, segnata con un pallino pieno.
- Dalla radice scende un breve segmento (circa 1/4 dell'altezza del triangolo) fino a un nodo interno disegnato con un pallino pieno più marcato: è il nodo $v = \lca$ delle due foglie. Etichettarlo «$v=\lca$» a sinistra.
- A destra del segmento radice–$v$, una graffa verticale (decorations.pathreplacing) che ne misura la lunghezza, con etichetta $k$ a destra della graffa; nell'originale una freccetta punta dalla lettera $k$ verso la graffa. Significato: $k$ è la string-depth di $v$, cioè la lunghezza del prefisso comune ai due suffissi.
- Da $v$ scendono due cammini interni al triangolo:
  * ramo sinistro: scende obliquamente verso sinistra e termina in una foglia sulla base del triangolo, nella metà sinistra, segnata con un pallino pieno; etichetta della foglia: $i$;
  * ramo destro: scende obliquamente verso destra, attraversa un ulteriore nodo interno (pallino pieno, circa a metà strada) e termina in una foglia sulla base, all'estremità destra, segnata con un pallino pieno; etichetta della foglia: $j$ (in alternativa, più preciso: $|S_1|+1+j$, cioè l'indice del suffisso $S_2[j..]$ dentro la stringa concatenata).

COLLEGAMENTI FRA I DUE BLOCCHI.
- Dalla tacca $i$ parte una lunga curva morbida (arco di Bézier con concavità verso l'alto) che scende, si allarga verso destra passando sotto tutto il disegno e termina con una punta di freccia sulla foglia sinistra dell'albero.
- Dalla tacca $j$ parte una seconda curva analoga, più ampia, che termina con una punta di freccia sulla foglia destra dell'albero. Le due curve corrono quasi parallele e si sfiorano/incrociano leggermente in basso.

SEMANTICA da rendere evidente: la posizione $i$ di $S_1$ e la posizione $j$ di $S_2$ individuano due foglie del suffix tree generalizzato; il loro antenato comune più profondo ha string-depth $k$, che è esattamente la lunghezza del più lungo prefisso comune dei due suffissi, cioè $\lcey(S_1,S_2,i,j)$.

Tutto il testo in italiano. Nessuna annotazione discorsiva dentro la figura.
