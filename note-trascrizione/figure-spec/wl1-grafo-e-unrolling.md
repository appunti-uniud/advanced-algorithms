# Figura `wl1-grafo-e-unrolling`

- **Pagina della scansione:** 79
- **Tipo:** due pannelli affiancati: grafo non orientato con vertici etichettati + albero radicato
- **Didascalia prevista:** A sinistra un grafo i cui vertici portano quattro colori distinti R, B, G, N; a destra l'albero di srotolamento di profondità 2 radicato nel vertice N.
- **Ritenuta fattibile in TikZ:** True

## Specifica

UNA SOLA figura con DUE PANNELLI affiancati orizzontalmente (nel manoscritto sono due disegni distinti, il 2° e il 3° della pagina, ma rappresentano lo stesso oggetto: un grafo e il suo srotolamento). Stile a mano libera, tratto spesso; vertici = pallini pieni di ~2.5 mm; etichette in corsivo matematico maiuscolo ($R$, $B$, $G$, $N$) accostate al pallino, MAI dentro. Archi non orientati (nessuna punta di freccia) in entrambi i pannelli.

=== PANNELLO SINISTRO: il grafo G (6 vertici, 5 archi, è un albero a due centri) ===
Coordinate suggerite (cm):
  c1 = (0, 0)      centro superiore, etichetta $N$ posta appena SOPRA-A-DESTRA del pallino
  r1 = (-1.3, 1.1) foglia, etichetta $R$ SOPRA-A-SINISTRA
  b1 = (1.2, 1.2)  foglia, etichetta $B$ SOPRA-A-DESTRA
  c2 = (0.1, -1.8) centro inferiore, etichetta $B$ a DESTRA del pallino, staccata
  g  = (-0.8, -2.8) foglia, etichetta $G$ SOTTO-A-SINISTRA
  r2 = (1.1, -2.7) foglia, etichetta $R$ a DESTRA
Archi: c1-r1, c1-b1, c1-c2, c2-g, c2-r2. L'arco c1-c2 è un segmento lungo, quasi verticale, leggermente ondulato. Il disegno complessivo ha la forma di due 'Y' opposte (una a V aperta verso l'alto in c1, una a V aperta verso il basso in c2), unite dall'arco centrale.

=== PANNELLO DESTRO: l'albero di srotolamento di profondità 2, radicato in c1 ===
Albero radicato disegnato dall'alto verso il basso, chioma larga e schiacciata (nel manoscritto ha la sagoma di un triangolo molto largo). 9 nodi su 3 livelli.
  radice  = (0, 0),  etichetta $N$ SOPRA il pallino
  livello 1 (tre figli della radice, in ordine da sinistra a destra):
     n_R = (-1.5, -1.1)  etichetta $R$ a SINISTRA
     n_B1 = (0.1, -1.3)  etichetta $B$ a SINISTRA (fra n_R e n_B1)
     n_B2 = (2.0, -1.0)  etichetta $B$ a SINISTRA
  livello 2 (cinque foglie, in ordine da sinistra a destra):
     f1 = (-2.4, -2.4)   figlio di n_R,   etichetta $N$ SOTTO-A-SINISTRA
     f2 = (-0.9, -2.5)   figlio di n_B1,  etichetta $G$ a SINISTRA
     f3 = (-0.1, -2.5)   figlio di n_B1,  etichetta $R$ SOPRA (fra f2 e f3, un po' alzata)
     f4 = (0.6, -2.5)    figlio di n_B1,  etichetta $N$ a DESTRA
     f5 = (2.9, -2.5)    figlio di n_B2,  etichetta $N$ a DESTRA
Archi: radice-n_R, radice-n_B1, radice-n_B2; n_R-f1; n_B1-f2, n_B1-f3, n_B1-f4; n_B2-f5.
Il nodo n_B1 è quindi l'unico interno con tre figli; n_R e n_B2 ne hanno uno solo. I segmenti radice-n_R e n_R-f1 sono quasi allineati (formano una lunga diagonale che scende a sinistra), così come radice-n_B2 e n_B2-f5 (lunga diagonale che scende a destra): è questa la sagoma a 'tenda' del manoscritto.

SIGNIFICATO (da rispettare, serve a controllare la correttezza del disegno): il pannello destro è lo srotolamento del pannello sinistro a partire da c1. I figli della radice sono i vicini di c1, cioè R, B (le due foglie) e il centro B; sotto ciascuno compaiono i suoi vicini, compreso il ritorno al padre: sotto n_R e sotto n_B2 c'è solo N (unico vicino delle due foglie), sotto n_B1 ci sono G, R e N (i vicini del secondo centro).

OPZIONALE: si possono colorare i pallini con i colori corrispondenti alle iniziali (R rosso, B blu, G verde, N nero) mantenendo comunque le lettere come etichette; se si sceglie questa via, usare tinte sature e leggibili anche in stampa in scala di grigi.
