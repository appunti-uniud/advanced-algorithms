# Figura `stree-lca-montagna`

- **Pagina della scansione:** 26
- **Tipo:** albero
- **Didascalia prevista:** Applicazioni «non semplici»: dentro il suffix tree di T si individua il lowest common ancestor di due foglie, che con il pre-processing di Harel--Tarjan costa O(1).
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno «a montagna» (il modo in cui gli appunti dell'anno precedente abbozza un albero grande di cui non interessa la struttura interna).

SOPRA LA FIGURA: la scritta «STree + Harel--Tarjan», centrata, con «Harel--Tarjan» sottolineato (nel quaderno la sottolineatura è una riga ondulata azzurra che parte sotto il «+»).

SAGOMA: un contorno chiuso, tracciato a mano libera con tratto spesso azzurro, largo circa 5 cm e alto circa 3,5 cm. Apice appuntito in alto, leggermente a destra del centro (è la RADICE). Dall'apice il profilo scende a sinistra con un paio di gradini/spallette irregolari fino all'angolo in basso a sinistra; a destra scende con due o tre gradini più marcati fino all'angolo in basso a destra. La base non è una retta ma una linea ondulata che sporge un po' a sinistra e a destra oltre gli spigoli (fa da «terreno»): è il livello delle foglie.

NODI INTERNI (pallini pieni, blu scuro, più marcati del contorno):
  - A = pallino GRANDE circa a metà altezza, sull'asse verticale che scende dall'apice, poco più a sinistra dell'apice. È lca(l1,l2).
  - B = pallino più piccolo, in basso a sinistra rispetto ad A (circa 1/4 di larghezza a sinistra e 1/6 di altezza sotto): nodo interno intermedio sul ramo sinistro.

FOGLIE (pallini pieni sulla linea di base):
  - l1 sulla base, a circa 1/3 della larghezza da sinistra;
  - l2 sulla base, a circa metà larghezza (leggermente a destra di l1, sotto ad A).

ARCHI (tratti azzurri sottili, dritti o appena curvi):
  - dall'APICE scende verso A un tratto verticale disegnato con doppio segno / colore più chiaro e sbiadito (nel quaderno è ripassato due volte): è il cammino radice -> lca; conviene renderlo come una linea più chiara o tratteggiata.
  - A -> B (obliquo verso il basso a sinistra), poi B -> l1 (obliquo verso il basso a sinistra fino alla base);
  - A -> l2 (obliquo verso il basso a destra, poi quasi verticale fino alla base).

ETICHETTA INTERNA: la parola «STree» scritta in corsivo dentro la sagoma, a metà altezza, appena a sinistra del centro, sopra la base e sotto A (nel quaderno si sovrappone leggermente agli archi; in TikZ conviene metterla appena spostata a sinistra per non collidere).

ETICHETTE DA AGGIUNGERE (assenti nell'originale, ricostruite): «radice» accanto all'apice; «$\lca(\ell_1,\ell_2)$» a destra del pallino A; «$\ell_1$» sotto la foglia sinistra; «$\ell_2$» sotto la foglia destra. Tutto il testo in italiano.

SIGNIFICATO: l'albero è il suffix tree del testo; il risultato di Harel--Tarjan dice che, dopo un pre-processing lineare, il nodo A si ottiene in tempo costante a partire da l1 e l2, ed è questo che abilita le applicazioni «non semplici» dei suffix tree.
