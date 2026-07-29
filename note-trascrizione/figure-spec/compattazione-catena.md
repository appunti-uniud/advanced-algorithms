# Figura `compattazione-catena`

- **Pagina della scansione:** 18
- **Tipo:** schema a due pannelli (prima / dopo)
- **Didascalia prevista:** Operazione 1: la catena massimale di nodi con un solo figlio $x_1,\dots,x_h$ viene sostituita dall'unico arco $(x_1,x_h)$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE (modifica in cucitura): nel manoscritto l'ultimo nodo della catena è $x_n$; nel capitolo cucito $n$ denota $|T|$, quindi la catena è rinominata $x_1,\dots,x_h$ con etichette $a_1,\dots,a_{h-1}$. Usare $x_h$ e $a_{h-1}$.

Due pannelli affiancati separati da una freccia orizzontale. Tutto in un unico colore (accento/blu), archi con punta di freccia piena.

PANNELLO SINISTRO (il «prima») — catena unaria che scende in diagonale verso destra-basso, passi uguali, pendenza ~45 gradi:
- $x_1$: CERCHIETTO VUOTO in alto a sinistra; etichetta «$x_1$» in alto a DESTRA del nodo.
- freccia $x_1 \to x_2$: segmento diagonale verso basso-destra con punta di freccia; etichetta «$a_1$» a SINISTRA/SOTTO del segmento. (Convenzione del manoscritto: le etichette dei nodi stanno a destra del pallino, quelle degli archi a sinistra della freccia.)
- $x_2$: pallino PIENO, etichetta «$x_2$» a destra.
- freccia $x_2 \to x_3$ etichettata «$a_2$»; $x_3$: pallino PIENO, etichetta «$x_3$» a destra.
- ELLISSI: tre puntini allineati lungo la stessa diagonale, fra $x_3$ e il nodo successivo, a indicare i nodi omessi.
- un pallino PIENO senza etichetta (nel manoscritto è disegnato ma non etichettato): è $x_{h-1}$; lasciarlo senza etichetta come nell'originale.
- ultima freccia, etichettata «$a_{h-1}$». ATTENZIONE: il manoscritto scrive $a_n$; è un off-by-one (con h nodi gli archi sono h-1).
- $x_h$: pallino PIENO, ultimo nodo in basso a destra; etichetta «$x_h$» a destra del pallino.

SEPARATORE: una lunga freccia orizzontale che punta a destra, con punta TRIANGOLARE APERTA (nel manoscritto è tracciata a doppio tratto, tipo «=>»), a metà altezza fra i due pannelli.

PANNELLO DESTRO (il «dopo»):
- $x_1$: pallino PIENO in alto, etichetta «$x_1$» in alto a destra.
- UNA sola freccia diagonale verso basso-destra (stessa pendenza, lunghezza ~2 unità) con punta di freccia, SENZA etichetta: l'etichettatura è l'operazione 2, non ancora introdotta a questo punto.
- $x_h$: pallino PIENO, etichetta «$x_h$» a destra del pallino.

SIGNIFICATO ALGORITMICO: eliminazione dei cammini massimali di nodi con un solo figlio; l'albero risultante ha soltanto nodi branching e foglie, ed è questo a renderne lineare la dimensione.
