# Figura `lca-run-map`

- **Pagina della scansione:** 36
- **Tipo:** albero (due alberi affiancati con mappa fra di essi)
- **Didascalia prevista:** A sinistra l'albero generico $\T$ con la numerazione DFS (in binario su $4$ bit) e i sette \emph{run} evidenziati; a destra l'albero binario completo $\B$, in cui sono marcati i nodi che sono immagine di qualche nodo di $\T$. La mappa $I$ collassa ogni run in un unico nodo di $\B$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura composta da DUE PANNELLI affiancati (sinistra: albero generico T; destra: albero binario completo B) più sette frecce/curve che collegano il primo al secondo. Nel quaderno i due alberi sono disegnati sovrapposti e le curve si incrociano molto: nel ridisegno TikZ vanno separati nettamente e le curve vanno rese come archi tratteggiati puliti, leggermente incurvati (bend) per evitare sovrapposizioni.

=== PANNELLO SINISTRO: albero T ===
Etichetta «$\T$» in alto a sinistra del pannello.
Albero radicato con 10 nodi (pallini pieni piccoli), numerazione DFS in preordine, stesso layout di lca-albero-dfs e lca-albero-I:
- livello 0: nodo 1 (radice); livello 1: nodo 2 (sx) e nodo 5 (dx); livello 2: figli di 2 = 3 (sx) e 4 (dx), figli di 5 = 6, 7, 8 (da sinistra a destra); livello 3: figli di 8 = 9 (sx) e 10 (dx).
Archi: 1-2, 1-5, 2-3, 2-4, 5-6, 5-7, 5-8, 8-9, 8-10.
Etichette: accanto a ogni pallino il numero DFS decimale e, appena più esterna, la scrittura binaria a 4 bit: 1 = 0001, 2 = 0010, 3 = 0011, 4 = 0100, 5 = 0101, 6 = 0110, 7 = 0111, 8 = 1000, 9 = 1001, 10 = 1010.
Annotazione manoscritta da riportare: accanto al nodo 8, la scritta «$8 = 1000$», che sottolinea che il nodo 8 è quello di $h$ massimo e corrisponde alla radice di $\B$.

RUN (sovrapposti all'albero): sette contorni chiusi TRATTEGGIATI (come i box tratteggiati della Fig. 8.6 di Gusfield) che racchiudono:
  R1 = {1, 5, 8} -> ovale/box allungato in diagonale (1, 5, 8 formano un cammino discendente verso destra);
  R2 = {2, 4} -> ovale/box allungato verticalmente (2 sopra, 4 sotto);
  R3 = {3}, R4 = {6}, R5 = {7}, R6 = {9}, R7 = {10} -> piccoli cerchi attorno al singolo nodo.
In totale 7 run.

=== PANNELLO DESTRO: albero binario completo B ===
Etichetta «$\B$» in alto.
Albero binario COMPLETO di profondità $d = 3$: 15 nodi, path number su 4 bit, forma triangolare regolare:
- radice: 1000; livello 1: 0100 (sx), 1100 (dx); livello 2: 0010, 0110 (sotto 0100), 1010, 1110 (sotto 1100); livello 3 (foglie, da sinistra a destra): 0001, 0011, 0101, 0111, 1001, 1011, 1101, 1111.
Etichettare almeno 1000, 0100, 1100 e i quattro nodi marcati rimanenti (0110, 0011, 0111, 1010, 1001), lasciando senza etichetta (o in grigio chiaro) i nodi non marcati.
NODI MARCATI (cerchiati): esattamente i 7 nodi immagine di un run, cioè 1000 (radice), 0100, 0110, 0011, 0111, 1010, 1001. Gli altri 8 restano pallini semplici.

=== MAPPA (frecce fra i due pannelli) ===
Sette curve/frecce tratteggiate, una per run, dal contorno del run in $\T$ al corrispondente nodo marcato di $\B$:
  {1,5,8} -> 1000 (radice di B); {2,4} -> 0100; {3} -> 0011; {6} -> 0110; {7} -> 0111; {9} -> 1001; {10} -> 1010.

=== SIGNIFICATO ALGORITMICO ===
La figura illustra che $I$ non è iniettiva: collassa ogni run (che è un cammino verticale di $\T$) in un unico nodo di $\B$, e che c'è una biiezione fra i run di $\T$ e i nodi marcati di $\B$. È l'unione delle Figg. 8.6 e 8.7 di Gusfield.
