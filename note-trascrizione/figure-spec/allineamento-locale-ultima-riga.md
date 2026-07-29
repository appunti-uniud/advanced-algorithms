# Figura `allineamento-locale-ultima-riga`

- **Pagina della scansione:** 46
- **Tipo:** matrice DP (schema, non tabellare)
- **Didascalia prevista:** La matrice $\sigma\times T$ dell'allineamento locale. I minimi dell'ultima riga (le tacche in basso) individuano le posizioni finali delle occorrenze approssimate di $\sigma$ in $T$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Rettangolo largo e basso (bordi leggermente ondulati nell'originale), rapporto larghezza:altezza ~4:1.

ELEMENTI:
1. Rettangolo principale (bordo superiore, sinistro, destro).
2. Etichetta $T$ (testo) sopra il bordo superiore, a ~25-30% della larghezza, con un piccolo gancio che scende a toccare il bordo.
3. Etichetta $\sigma$ (pattern) a sinistra del bordo sinistro, a meta altezza.
4. Ultima riga: una seconda orizzontale parallela al bordo inferiore e poco sopra di esso, che forma una STRISCIA stretta (alta ~1/5 dell'altezza del rettangolo) = l'ultima riga della matrice, indicizzata da $\abs{\sigma}$. Entrambe le linee della striscia sporgono leggermente a destra oltre il bordo destro.
5. Tacche dei minimi: dentro la striscia, tre gruppi di trattini verticali corti a ~25%, ~55% e ~85% della larghezza: due tacche ravvicinate (||), una tacca sola (|), di nuovo due tacche (||).

SIGNIFICATO: i valori dell'ultima riga sono i costi del miglior allineamento di TUTTO $\sigma$ con una sottostringa di $T$ che termina nella colonna corrispondente; le tacche marcano le colonne in cui questi valori sono minimi, cioe le posizioni finali delle occorrenze approssimate.

TESTO: solo le etichette $T$ e $\sigma$.
