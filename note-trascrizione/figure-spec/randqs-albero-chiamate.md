# Figura `randqs-albero-chiamate`

- **Pagina della scansione:** 52
- **Tipo:** albero
- **Didascalia prevista:** Albero delle chiamate ricorsive nel caso bilanciato: $h=\log_2 n$ livelli, ciascuno di costo complessivo $\Oh(n)$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Albero delle chiamate ricorsive di QuickSort/RandQS nel caso bilanciato, con annotazione dell'altezza e del costo per livello.

NODI (albero binario completo di 3 livelli, coordinate suggerite in cm):
- Radice in (0, 2.4): cerchio PIENO (disco), diametro ~0.20, blu scuro.
- Livello 2: due nodi in (-1.15, 1.2) e (1.15, 1.2): cerchietti VUOTI (contorno blu, riempimento bianco), diametro ~0.20.
- Livello 3 (foglie): quattro nodi in (-1.75, 0.0), (-0.55, 0.0), (0.55, 0.0), (1.75, 0.0): cerchietti, diametro ~0.16. Nel manoscritto alcuni sono pieni e altri vuoti in modo casuale: renderli tutti VUOTI, uniformi.

ARCHI: segmenti rettilinei radice→figli e figlio→foglie, tratto blu, spessore ~1pt, SENZA punte di freccia. (Nel manoscritto alcuni tratti verso le foglie sembrano avere una punta rivolta verso il padre: è un artefatto della scrittura, va ignorato.)

GRAFFA DELL'ALTEZZA:
- A sinistra dell'albero, a x ≈ -2.7, una grande GRAFFA verticale (decorations.pathreplacing, brace, aperta verso destra, amplitude ~6pt) che abbraccia tutta l'altezza dell'albero, da y = 2.55 a y = -0.15.
- A sinistra della graffa, l'etichetta $h$ (font matematico, dimensione normale), centrata verticalmente rispetto alla graffa, a x ≈ -3.1.

ANNOTAZIONI DI COSTO (tre, una per livello):
- Tre FRECCE ONDULATE corte, orizzontali, che partono dal nodo più a destra del livello e puntano verso destra; nel manoscritto sono tratti "a serpentina" (decorate, snake / coil) con una piccola punta finale. Ciascuna è seguita dall'etichetta $\Oh(n)$:
  * livello 0: dalla radice, freccia da circa (0.35, 2.6) a (2.3, 2.75), etichetta $\Oh(n)$ a x ≈ 2.9, y ≈ 2.75;
  * livello 1: dal nodo interno destro, freccia da (1.45, 1.25) a (2.3, 1.25), etichetta $\Oh(n)$ a x ≈ 2.9, y ≈ 1.25;
  * livello 2: dalla foglia più a destra, freccia da (1.95, 0.0) a (2.3, 0.0), etichetta $\Oh(n)$ a x ≈ 2.9, y ≈ 0.0.
  Le tre etichette $\Oh(n)$ vanno allineate verticalmente (stessa x).

Nessun altro testo. Tutte le etichette sono simboli matematici ($h$, $\Oh(n)$), quindi nessuna traduzione necessaria.

SIGNIFICATO ALGORITMICO: se ogni pivot bilancia la partizione, l'albero delle chiamate ricorsive è completo, la sua altezza è $h=\log_2 n$ e su ciascun livello i sottoproblemi si ripartiscono gli $n$ elementi, quindi il costo totale delle partizioni per livello è $\Th(n)$: complessivamente $\Oh(n\log n)$. Da confrontare, per contrasto, con il caso pessimo (albero degenere a catena, $\Th(n^2)$), citato nel testo subito dopo.
