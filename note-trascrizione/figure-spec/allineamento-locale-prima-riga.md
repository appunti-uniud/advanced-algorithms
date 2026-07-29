# Figura `allineamento-locale-prima-riga`

- **Pagina della scansione:** 46
- **Tipo:** matrice DP (schema, non tabellare)
- **Didascalia prevista:** Matrice dell'allineamento locale: la prima riga vale $0$ in \emph{ogni} colonna. Un allineamento locale è un cammino di backtracking che risale fino a una cella qualsiasi della riga $0$; le due verticali delimitano la porzione di $T$ effettivamente allineata contro tutto $\sigma$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema molto largo e basso (rapporto ~5:1), nell'originale a mano libera con tratto ondulato.

ATTENZIONE - RINOMINA EDITORIALE: nel manoscritto le due etichette sono $\sigma_1$ (verticale, il pattern) e $\sigma_2$ (orizzontale, il testo). Nel capitolo assemblato la sezione sull'allineamento locale usa $\sigma$ per il pattern e $T$ per il testo (come fa il manoscritto stesso da meta p.46 in poi e per tutta p.47). Nella figura vanno quindi scritte le etichette $\sigma$ (verticale) e $T$ (orizzontale).

GRIGLIA IMPLICITA: una matrice con la riga 0 di intestazione + 3 righe e ~16 colonne. NON disegnare la griglia: solo gli elementi elencati.

ELEMENTI:
1. Bordo superiore: una lunga linea orizzontale su TUTTA la larghezza; subito a destra della sua estremita, fuori dal disegno, l'etichetta $T$.
2. Bordo sinistro: segmento verticale corto all'estremita sinistra, dal bordo superiore per l'altezza di ~4 righe; a sinistra, all'altezza della prima/seconda riga, l'etichetta $\sigma$.
3. Riga 0 (subito sotto il bordo superiore): una sequenza di 12 zeri, uno per colonna, allineati orizzontalmente (colonne 1..8, poi 10..13, cioe interrotta dalla verticale del punto 6).
4. Etichette di riga: i numeri 1, 2, 3 incolonnati appena a destra del bordo sinistro, alle altezze delle righe 1, 2, 3 (la riga 0 non e etichettata).
5. Graffa orizzontale sotto la riga 0, dalla colonna 1 alla ~8, rivolta verso il basso, con una punta a V al centro da cui scende una lunga linea che esce dalla figura: e il richiamo all'annotazione «Assegno costo 0 al gap iniziale e uso lo stesso algoritmo!», che NON va disegnata dentro la figura (e testo di pagina, subito sotto).
6. Banda di colonne a destra: due segmenti verticali paralleli, dal bordo superiore (poco sopra la riga 0) fino all'altezza della riga 3/4, alle colonne ~9 e ~14; il primo con una piccola punta di freccia verso l'alto.
7. Bordo inferiore della banda: segmento orizzontale che unisce i piedi dei due verticali e prosegue un poco oltre il secondo, terminando con una punta di freccia rivolta a destra.
8. Cammino di backtracking: dentro la banda, un cammino monotono a scalini che parte sulla riga 0 appena a destra del primo verticale (colonna ~10) e scende alternando tratti verticali e orizzontali fino al vertice in basso a destra della banda, attraversando tutte le righe (0 -> 3).

SIGNIFICATO: la riga 0 e tutta a 0 perche il gap iniziale sul testo e gratuito; un allineamento locale ottimo e un cammino che dall'ultima riga risale fino a una cella qualunque della riga 0; le colonne comprese fra i due verticali sono la sottostringa di $T$ allineata contro tutto $\sigma$.

TESTO: solo $\sigma$, $T$, gli zeri e i numeri 1, 2, 3.
