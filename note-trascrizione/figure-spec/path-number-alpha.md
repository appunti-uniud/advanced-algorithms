# Figura `path-number-alpha`

- **Pagina della scansione:** 33
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Codifica di un nodo $v$ di $\B$: gli $\a$ bit del cammino radice--$v$, poi un $1$, poi tutti $0$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura a DUE PANNELLI affiancati (nel quaderno stanno sulla stessa fascia orizzontale: sagoma a sinistra, array di bit a destra, leggermente più in basso).

PANNELLO SINISTRO — sagoma dell'albero.
Una SAGOMA IRREGOLARE a mano libera che rappresenta l'albero binario completo B (profilo tipo «montagna», non un triangolo regolare): partendo dal basso a sinistra il contorno sale con pendenza irregolare fino a un APICE appuntito posto a circa un terzo della larghezza, poi scende con un gradino/spalla verso destra e prosegue in discesa fino all'estremo destro, molto più in basso; la BASE è una linea ondulata orizzontale che chiude la sagoma. L'apice è la radice.
Dall'APICE scende una linea VERTICALE leggermente ondulata (a zigzag morbido) che termina con una piccola punta di freccia su un NODO PIENO (pallino) etichettato «$v$» (etichetta a destra del pallino). La linea rappresenta il cammino radice->v.
A destra, a metà di questa linea verticale, l'etichetta greca «$\alpha$»: è la stringa di bit che descrive il cammino radice->v.

PANNELLO DESTRO — array di bit (path number di v).
Un segmento orizzontale spesso, con due piccoli tratti verticali alle estremità (delimitatori), che rappresenta una parola di bit. Il segmento è diviso da tratti verticali in tre zone, da sinistra a destra:
1) zona lunga (circa metà della larghezza totale) senza cifre, con l'etichetta «$\alpha$» scritta sopra al centro: sono i bit del cammino;
2) una cella stretta contenente la cifra «1» (il terminatore);
3) la zona rimanente contenente una fila di cifre «0» equispaziate (nel quaderno sono sette zeri) fino al delimitatore destro.
Quindi la parola letta è: alpha | 1 | 0 0 0 0 0 0 0.

Collegare idealmente i due pannelli (facoltativo: una freccia tratteggiata dal nodo v all'array).

SEMANTICA: introduzione grafica del path number (Gusfield §8.4): un nodo a profondità $|\alpha|$ è codificato dai bit del suo cammino, seguiti da un 1 e da zeri di riempimento, così che tutti i nodi abbiano codifiche della stessa lunghezza ($d+1$ bit). Testo in italiano; qui compaiono solo i simboli alpha, v, 1, 0.
