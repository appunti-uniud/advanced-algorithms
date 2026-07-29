# Figura `lv-banda-diagonali`

- **Pagina della scansione:** 48
- **Tipo:** matrice DP (schema, senza griglia)
- **Didascalia prevista:** La banda di diagonali. Il cammino di allineamento parte lungo una diagonale e, avendo a disposizione $k$ errori, può scostarsene di al più $k$ posizioni in ciascuna direzione: resta perciò confinato fra le due curve che delimitano la banda.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Rappresenta la tabella di programmazione dinamica dell'allineamento semi-globale, disegnata come un rettangolo VUOTO (nessuna griglia di celle: nel quaderno la matrice è solo un rettangolo largo e basso).

GEOMETRIA DEL RETTANGOLO
- Rettangolo di larghezza 12 e altezza 3 (rapporto circa 4:1, molto largo e basso: le colonne sono $m+1$, le righe $n+1$, con $m\gg n$). Angoli in $(0,0)$ e $(12,3)$. Bordi disegnati a tratto spesso; nel quaderno i bordi superiore e inferiore sono leggermente ondulati (opzionale: `decorate, decoration={random steps, segment length=25pt, amplitude=0.6pt}`).

ETICHETTE DEI BORDI
- $P$ subito a SINISTRA del bordo sinistro, a metà altezza (circa $(-0.45,1.5)$): le RIGHE sono indicizzate dai caratteri di $P$.
- $T$ subito SOPRA l'angolo in alto a destra (circa $(12.2,3.3)$): le COLONNE sono indicizzate dai caratteri di $T$.

CONTENUTO INTERNO — tre linee quasi parallele che scendono da sinistra-alto verso destra-basso (sono ripide, perché il rettangolo è largo e basso: una diagonale «a 45 gradi nella tabella» appare quasi verticale se il rettangolo viene disegnato con questo rapporto d'aspetto; nel quaderno la pendenza apparente è di circa 2.5 unità verticali ogni 2.5 orizzontali, cioè le linee attraversano tutta l'altezza spostandosi di circa 2.5 in orizzontale).
1. Curva ONDULATA sinistra: dal bordo superiore in $(3.2,3)$ al bordo inferiore in $(5.5,0)$, tratto sottile, andamento a serpentina (`decorate, decoration={snake, amplitude=2pt, segment length=12pt}` oppure `random steps`).
2. Segmento RETTILINEO centrale, tratto SPESSO e più scuro: dal bordo superiore in $(4.6,3)$ al bordo inferiore in $(6.9,0)$. È la diagonale di riferimento (il tratto «gratis» di match) lungo cui viaggia il cammino di allineamento.
3. Curva ONDULATA destra: dal bordo superiore in $(6.0,3)$ al bordo inferiore in $(8.3,0)$, stessi parametri della 1.
Le due curve ondulate delimitano la BANDA attorno alla diagonale rettilinea.

CROCE DI FRECCE (annotazione centrale)
Centrata sul punto medio del segmento rettilineo, cioè circa in $C=(5.75,1.5)$, quattro frecce che partono da $C$ (o da un intorno di $C$) e puntano verso l'esterno:
- freccia VERSO L'ALTO, da $C$ a circa $(5.75,2.6)$;
- freccia VERSO IL BASSO, da $C$ a circa $(5.75,0.5)$, con l'etichetta $k$ scritta subito a destra della punta (nel quaderno il «k» è scritto accanto a questa freccia, appena a destra, leggermente inclinato);
- freccia VERSO SINISTRA, da $C$ a circa $(4.6,1.5)$ (arriva sulla curva ondulata sinistra);
- freccia VERSO DESTRA, da $C$ a circa $(6.9,1.5)$ (arriva sulla curva ondulata destra).
Tutte con punta `-{Stealth}`, tratto medio. La croce dice: dalla diagonale posso scostarmi di al più $k$ in ciascuna direzione.

SIGNIFICATO ALGORITMICO (da non scrivere nel disegno, serve solo a orientare il tracciato): ogni mossa orizzontale o verticale sposta il cammino di esattamente una diagonale; con al più $k$ errori il cammino resta in una banda di $2k+1$ diagonali, quindi non serve riempire tutte le $\Theta(m\cdot n)$ celle.

Nel quaderno, a destra del rettangolo, c'è l'annotazione «Se guardassi tutta la matrice, $O(m\times n)$»: NON va inserita nella figura, perché è già riportata nel testo.

ATTENZIONE (cucitura): il capitolo 09 contiene già, a p.47, una figura di banda molto simile (`landau-vishkin-banda`, con $d$ al posto di $k$ e $\sigma$ al posto di $P$). Disegnare questa in modo visibilmente diverso (rettangolo largo e basso con le due curve ondulate e la croce di frecce) per evitare che le due figure sembrino un duplicato.

Dimensione finale suggerita: larghezza circa 0.9\textwidth.
