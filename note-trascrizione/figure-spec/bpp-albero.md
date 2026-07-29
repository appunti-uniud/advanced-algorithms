# Figura `bpp-albero`

- **Pagina della scansione:** 61
- **Tipo:** schema geometrico + albero binario (due pannelli affiancati)
- **Didascalia prevista:** Una BPP di S={s_1,s_2,s_3} (a sinistra la scena, a destra l'albero che la rappresenta). La retta l_1 spezza s_3 in s_{3,1} e s_{3,2}: le foglie sono quattro, una piu' dei segmenti.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura a DUE PANNELLI affiancati (scena a sinistra, albero a destra), separati da uno spazio orizzontale; opzionalmente sottodidascalie (a) e (b), ma non necessarie.

PANNELLO (a) - LA SCENA. Sistema di riferimento consigliato: box di circa 7x7.5 unita', x verso destra, y verso l'alto. Nessun asse, nessuna cornice.
Segmenti (tratto SPESSO, continuo, colore scuro/nero, line width ~1.4pt):
  - s1: da (2.3, 6.0) a (4.3, 6.8) - quasi orizzontale, leggermente in salita verso destra, in alto a sinistra. Etichetta '$s_1$' appena SOPRA il segmento, vicino al suo estremo sinistro/centro, in (3.0, 7.1).
  - s2: da (1.3, 5.85) a (2.4, 3.8) - ripido, scende verso destra, a sinistra. Etichetta '$s_2$' a SINISTRA del segmento, in (1.0, 4.9).
  - s3: da (4.4, 3.2) a (5.8, 5.05) - obliquo, sale verso destra, a destra della scena. Etichetta '$s_3$' a DESTRA del segmento, in (6.1, 4.3).
Rette di taglio (tratteggiate, tratto medio, dash pattern ben visibile ~ 'dashed' o 'densely dashed'):
  - l1 (la prima, radice dell'albero): retta lunga che va da (0.8, 7.05) in alto a sinistra fino a (6.5, 2.1) in basso a destra (pendenza circa -0.87). ATTRAVERSA s3 nel punto (4.73, 3.68), che deve cadere VISIBILMENTE all'interno di s3 (s3 va da (4.4,3.2) a (5.8,5.05)), dividendolo in una porzione corta in basso a sinistra e una lunga in alto a destra. Etichetta '$\ell_1$' alla fine della retta, in basso a destra, in (6.75, 1.8).
  - l2: SEMIRETTA che parte da un punto di l1, circa (4.0, 4.3), e sale verso destra fino a (6.1, 6.85) (pendenza circa +1.24). Deve lasciare s1 da un lato (a sinistra/sopra) e la porzione superiore di s3 dall'altro (a destra/sotto). Etichetta '$\ell_2$' all'estremo superiore, in (6.4, 7.1).
  - l3: SEMIRETTA che parte da un punto di l1, circa (3.5, 4.75), e scende quasi verticalmente (leggerissima inclinazione verso destra) fino a (3.85, 1.15). Deve lasciare s2 a sinistra e la porzione inferiore di s3 (s_{3,2}) a destra. Etichetta '$\ell_3$' all'estremo inferiore, in (3.9, 0.75).
Opzionale (NON presente nel manoscritto, aggiungere solo se non appesantisce): etichettine '$s_{3,1}$' accanto alla porzione alta di s3 e '$s_{3,2}$' accanto alla porzione bassa, in grigio, per collegare la scena alle foglie dell'albero.
Nota importante per il disegno: l2 e l3 vanno disegnate SOLO nel semipiano di rispettiva competenza (cioe' partono da l1 e non la oltrepassano), perche' sono i tagli delle due regioni figlie; nel manoscritto sono infatti tratteggi che si fermano su l1.

PANNELLO (b) - L'ALBERO BINARIO. Tre livelli, disegno con nodi ellittici per i nodi interni e nodi circolari (piu' piccoli) per le foglie, archi rettilinei semplici (nessuna freccia).
  - Radice: ellisse contenente '$r_1\ \ \ell_1$' (nel manoscritto i due simboli sono scritti dentro la stessa ellisse, affiancati e separati da uno spazio, senza virgola ne' parentesi).
  - Figlio sinistro: ellisse '$r_2\ \ \ell_2$'.
  - Figlio destro: ellisse '$r_3\ \ \ell_3$'.
  - Foglie del figlio sinistro (da sinistra a destra): cerchio '$s_1$', cerchio '$s_{3,1}$'.
  - Foglie del figlio destro (da sinistra a destra): cerchio '$s_2$', cerchio '$s_{3,2}$'.
Layout: albero bilanciato, radice in alto al centro; nel manoscritto il sottoalbero sinistro e' disegnato leggermente piu' in basso del destro, ma conviene disegnarlo simmetrico e regolare. Distanza fra i livelli sufficiente a non far toccare le ellissi.
Significato algoritmico da rendere evidente: 3 nodi interni (= 3 rette di taglio) e 4 foglie = 3 segmenti + 1 spezzamento; le due foglie $s_{3,1}$ e $s_{3,2}$ sono le due porzioni dello stesso segmento $s_3$, finite in regioni diverse perche' $\ell_1$ lo attraversa. Se possibile, evidenziare le due foglie $s_{3,1}$ e $s_{3,2}$ con lo stesso colore/riempimento leggero per far vedere che vengono dallo stesso segmento.
