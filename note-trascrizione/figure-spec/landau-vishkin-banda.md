# Figura `landau-vishkin-banda`

- **Pagina della scansione:** 47
- **Tipo:** matrice DP (rettangolo con banda di diagonali e cammino di allineamento)
- **Didascalia prevista:** Landau--Vishkin: da una cella generica il cammino può spostarsi al più di $d$ a sinistra, di $d$ a destra e di $d$ verso il basso, e resta quindi confinato nella banda di $\Oh(d)$ diagonali delimitata dalle due rette grigie.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Matrice DP di Landau--Vishkin. Nell'originale e a mano libera con bordi ondulati: va ridisegnata PULITA.

GEOMETRIA. Rettangolo vuoto (nessuna griglia interna), largo ~2,7 volte l'altezza; dimensioni suggerite 12 x 4,4 cm. Sia W la larghezza e H l'altezza, origine $(0,0)$ nell'angolo in alto a sinistra, $y$ crescente verso il basso.

ETICHETTE DEGLI ASSI:
- $\sigma$ (pattern) FUORI dal rettangolo, a sinistra del bordo sinistro, a $y \approx 0,45H$ (le righe sono indicizzate da $\sigma$);
- $T$ (testo) FUORI dal rettangolo, SOPRA il bordo superiore, vicino all'angolo in alto a destra ($x \approx 0,93W$; le colonne sono indicizzate da $T$).

BANDA DI DIAGONALI: due rette sottili grigio chiaro (a matita nell'originale), parallele, che attraversano tutto il rettangolo dal bordo superiore a quello inferiore con pendenza verso il basso a destra:
- retta 1 da $(0,22W,\,0)$ a $(0,44W,\,H)$;
- retta 2 da $(0,50W,\,0)$ a $(0,75W,\,H)$.

CAMMINO DI ALLINEAMENTO: polilinea blu di spessore medio, a scaletta (8-10 piccoli scalini alternati orizzontali/verticali con andamento diagonale complessivo), tutta DENTRO la banda e all'incirca parallela alle due rette grigie:
- parte sul bordo superiore in $(0,32W,\,0)$;
- scende fino al punto marcato $P=(0,42W,\,0,42H)$;
- riparte da $P$ e scende fino al bordo inferiore in $(0,58W,\,H)$.
$P$ e un nodo pieno (pallino blu scuro, piccolo).

TRE FRECCE USCENTI DA $P$ (stesso spessore del cammino, punta a freccia), che quantificano lo scostamento consentito:
- verso SINISTRA, orizzontale, da $P$ a $(0,33W,\,0,42H)$; etichetta $d$ sopra il tratto;
- verso DESTRA, orizzontale, da $P$ a $(0,51W,\,0,42H)$; etichetta $d$ sopra il tratto;
- verso il BASSO, verticale, da $P$ a $(0,42W,\,0,70H)$; etichetta $d$ a sinistra del tratto.
Nell'originale NON c'e freccia verso l'alto.

SIGNIFICATO: un allineamento con al piu $d$ differenze non puo allontanarsi di piu di $d$ diagonali dalla diagonale di partenza, percio basta calcolare la banda di $\Oh(d)$ diagonali compresa fra le due rette grigie invece di tutta la matrice. Tutto il testo e simbolico ($\sigma$, $T$, $d$).
