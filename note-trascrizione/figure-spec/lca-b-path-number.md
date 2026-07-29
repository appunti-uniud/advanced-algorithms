# Figura `lca-b-path-number`

- **Pagina della scansione:** 34
- **Tipo:** albero
- **Didascalia prevista:** Albero binario completo con $p=4$ foglie, $d=2$: ogni nodo è etichettato con il proprio path number (in binario e, sotto, in base dieci).
- **Ritenuta fattibile in TikZ:** True

## Specifica

Albero binario completo, radicato, disegnato REGOLARE e SIMMETRICO (nel quaderno è sbilenco: radice spostata a sinistra e sottoalbero destro più basso — va normalizzato). Profondità d=2, p=4 foglie, 7 nodi. Nodi resi come piccoli pallini pieni; archi come segmenti dritti.

Struttura ed etichette (etichetta binaria accanto al nodo, valore decimale in piccolo appena SOTTO il binario, come nel quaderno):
- radice: 100, sotto 4;
- figlio sinistro della radice: 010, sotto 2 (etichetta a sinistra del nodo);
- figlio destro della radice: 110, sotto 6 (etichetta a destra del nodo);
- foglie da sinistra a destra: 001 / 1 ; 011 / 3 ; 101 / 5 ; 111 / 7. Le etichette delle foglie stanno sopra-a-lato del nodo, il decimale sotto.

Annotazioni:
- in alto a destra della radice, il testo «$d+1$ bit» con una freccetta corta che punta all'etichetta «100» della radice;
- a destra dell'albero, una graffa verticale che abbraccia l'intera altezza dei tre livelli, con l'etichetta «$d=2$».

Significato algoritmico: il path number codifica il cammino radice->nodo (0 = sinistra, 1 = destra) seguito da un 1 terminatore e da zeri di riempimento fino a $d+1$ bit; i valori decimali coincidono con la numerazione in-order dell'albero.
