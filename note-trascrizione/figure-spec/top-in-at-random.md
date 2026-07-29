# Figura `top-in-at-random`

- **Pagina della scansione:** 84
- **Tipo:** schema a due pannelli: mazzo di carte visto di taglio (segmenti orizzontali impilati), prima e dopo alcuni passi di mescolamento
- **Didascalia prevista:** Il mescolamento \emph{top-in-at-random}: la carta in cima al mazzo viene reinserita in una posizione scelta uniformemente a caso. In alto la situazione iniziale, con la carta $B$ in fondo al mazzo; in basso, dopo un certo numero di passi, $B$ è risalita e le carte che le sono passate sotto si trovano in ordine uniformemente casuale.
- **Ritenuta fattibile in TikZ:** True

## Specifica

UNA sola figura composta da DUE PANNELLI IMPILATI VERTICALMENTE (nel manoscritto stanno uno sopra l'altro, sul margine destro della pagina), separati da una grande freccia verso il basso. Stile a mano libera, tratto nero spesso, nessun riempimento e nessun colore. Il mazzo di carte è visto DI TAGLIO: ogni carta è un semplice segmento orizzontale.

=== INTESTAZIONE (sopra il pannello superiore, centrata) ===
La dicitura \textsc{top-in-at-random} (nel manoscritto è scritta a mano in stampatello, con i trattini: «Top-in-at-Random»).

=== PANNELLO SUPERIORE: il mazzo iniziale e un passo del mescolamento ===
Coordinate suggerite (cm), origine in alto a sinistra del mazzo:
  6 segmenti orizzontali paralleli, tutti da (0, y) a (1.8, y), con
  y = 0, -0.34, -0.68, -1.02, -1.36, -1.70 (dall'alto verso il basso).
  I segmenti sono leggermente ondulati/irregolari (tratto a mano libera).
- Il segmento più in basso (y = -1.70) è la carta $B$: va disegnato PIÙ SPESSO degli altri (nel manoscritto è ripassato due volte). Etichetta $B$ in corsivo matematico a SINISTRA del segmento, circa in (-0.5, -1.70).
- FRECCIA DI REINSERIMENTO: parte dall'estremo DESTRO del segmento in cima, cioè da (1.8, 0); sale di poco, curva a destra descrivendo un arco ampio in senso orario (vertice dell'arco attorno a (2.6, -0.5)) e ridiscende rientrando verso sinistra, terminando con una punta di freccia diretta verso il BASSO-SINISTRA nello spazio fra il 4° e il 5° segmento, circa in (1.75, -1.15). Rappresenta la carta in cima che viene reinserita in una posizione scelta a caso.
- Etichetta accanto all'arco, alla sua destra, circa in (3.0, -0.45): «a caso» (nel manoscritto è scritto «random»).

=== FRECCIA DI SEPARAZIONE (fra i due pannelli) ===
Sull'asse verticale del mazzo (x ≈ 0.9), fra y = -2.2 e y = -3.1: una grande freccia spessa rivolta VERSO IL BASSO, con accanto (a sinistra della freccia, x ≈ 0.55) un piccolo zigzag/segno ondulato — nel manoscritto è un ghirigoro che sta per «dopo un certo numero di passi». Aggiungere a destra della freccia, in corpo piccolo, l'etichetta «dopo un certo numero di passi».

=== PANNELLO INFERIORE: la situazione dopo alcuni passi ===
Stessa geometria del pannello superiore, mazzo di 7 segmenti:
  y = -3.6, -3.94, -4.28, -4.62 (questo è $B$), -4.96, -5.30, -5.64.
- I 3 segmenti sopra $B$ e i 3 sotto $B$ vanno da (0, y) a (1.8, y), come prima.
- Il segmento di $B$ (y = -4.62) è PIÙ LUNGO e PIÙ SPESSO degli altri: va da (0, -4.62) a (2.6, -4.62) e sporge quindi a destra; alla sua estremità SINISTRA ha una piccola punta di freccia rivolta a sinistra. Etichetta $B$ in corsivo matematico a sinistra, circa in (-0.5, -4.62).
- GRAFFA: una graffa destra `}` verticale posta a x ≈ 2.9, che abbraccia i TRE SEGMENTI SOTTO $B$ (cioè da y = -4.90 a y = -5.75), con l'apertura rivolta a sinistra. Etichetta alla sua destra, circa in (3.3, -5.3): «a caso» (nel manoscritto «random»).
  Significato: le carte che sono finite sotto $B$ si trovano in ordine uniformemente casuale — è l'invariante su cui si regge tutta l'analisi.

=== NON riprodurre ===
Le frazioni a matita ($1/n$, $2/n$, $(n-2)/n$) che nel manoscritto stanno sparse fra il testo e il disegno: sono state incorporate nel testo come $p_i = i/K$.
Il testo grigio speculare sul lato destro della pagina: è trasparenza dal retro del foglio, non fa parte del disegno.

Etichetta LaTeX nel capitolo: fig:top-in-at-random.
