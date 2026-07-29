# Figura `lca-albero-I`

- **Pagina della scansione:** 35
- **Tipo:** albero
- **Didascalia prevista:** L'albero generico $\T$ con i dfs-numeri e la loro codifica binaria su $\lceil \log_2 n\rceil = 4$ bit ($n=10$ nodi).
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE — MODIFICA IN CUCITURA: nel manoscritto questo disegno porta già sovrapposte le curve chiuse dei run, che però a questo punto del capitolo non sono ancora definiti. Le curve dei run sono state spostate nella figura lca-run-map (p.36): QUI NON VANNO DISEGNATE. Questa figura mostra soltanto l'albero con dfs-numeri e codifiche binarie.

Albero radicato generico $\T$ con 10 nodi (è l'albero delle Figure 8.1/8.4 di Gusfield, lo stesso di lca-albero-dfs e lca-run-map), nodi come piccoli dischi pieni blu e archi come segmenti dritti sottili, radice in alto. Il disegno originale è volutamente sbilanciato: il ramo destro scende in diagonale verso il basso a destra.

STRUTTURA (padre -> figli): 1 -> {2, 5}; 2 -> {3, 4}; 5 -> {6, 7, 8}; 8 -> {9, 10}. Nove archi: 1-2, 1-5, 2-3, 2-4, 5-6, 5-7, 5-8, 8-9, 8-10.

POSIZIONI (coordinate relative, x verso destra, y verso l'alto; ricalcate dallo scan):
  1 = (0.0, 0.0) radice; 2 = (-1.5, -1.2); 5 = (2.4, -1.0); 3 = (-2.5, -2.4); 4 = (-1.1, -2.4); 6 = (1.4, -2.3); 7 = (2.4, -2.3); 8 = (3.9, -2.2); 9 = (3.8, -3.4); 10 = (5.0, -3.1).
Si noti che 1, 5, 8 e 10 stanno quasi sulla stessa diagonale discendente, e che 9 sta quasi verticalmente sotto 8.

ETICHETTE. Ogni nodo porta DUE etichette, entrambe in blu:
 (a) il dfs-numero, in cifre, vicinissimo al nodo: «1» sopra la radice; «2» appena sopra-a-sinistra del nodo 2; «5» a destra del nodo 5; «3», «4», «6», «7», «8» sotto i rispettivi nodi; «9» e «10» sotto i rispettivi nodi.
 (b) la codifica binaria a 4 bit, più esterna e un po' più distante: 0001 sopra il «1» della radice; 0010 a sinistra del nodo 2; 0101 sopra-a-sinistra del nodo 5; 0011 sotto il «3»; 0100 sotto il «4»; 0110 sotto il «6»; 0111 sotto il «7»; 1000 a destra del nodo 8, leggermente in alto; 1001 sotto il «9»; 1010 sotto-a-destra del «10».

SIGNIFICATO: le codifiche a 4 bit servono a leggere subito $h(v)$ (posizione dell'1 meno significativo) e quindi a calcolare $I(v)$; in particolare si vede che $h(1000)=4$ è il massimo su tutto l'albero, da cui $I(1)=I(5)=I(8)=8$.
