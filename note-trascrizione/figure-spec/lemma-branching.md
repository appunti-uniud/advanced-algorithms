# Figura `lemma-branching`

- **Pagina della scansione:** 18
- **Tipo:** albero — due pannelli affiancati
- **Didascalia prevista:** Il Lemma a colpo d'occhio, su un albero con $4$ foglie e $3$ nodi interni ($7 = 2\cdot 4 - 1$ nodi). A sinistra: ogni nodo interno viene addebitato a una foglia distinta del proprio sottoalbero, da cui $I \le \ell$. A destra: la contrazione di una \emph{ciliegia} (nodo branching i cui figli sono tutti foglie, cerchiata) toglie un nodo interno e una foglia, e permette di concludere per induzione.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Due disegni dello STESSO albero, affiancati, senza freccia fra loro. L'albero è binario completo di profondità 2: radice $r$ in alto al centro; due figli interni $u$ (sinistra) e $w$ (destra); ciascuno con due figli foglia. Totale: 3 nodi interni, 4 foglie, 7 nodi. Tutti i nodi sono CERCHIETTI VUOTI (nel manoscritto sono cerchi aperti tracciati a mano). Archi rettilinei, disposizione simmetrica «a montagna»: $r$ in alto, $u$ e $w$ un livello sotto, le 4 foglie tutte sul livello più basso ed equispaziate. Nessuna etichetta sui nodi nel manoscritto (si possono aggiungere $r$, $u$, $w$ in piccolo se aiuta la leggibilità, ma non è necessario).

PANNELLO SINISTRO — l'addebito nodo interno -> foglia:
- l'albero come sopra;
- TRE frecce TRATTEGGIATE verticali con punta di freccia, che partono appena sotto ciascun nodo interno ($r$, $u$, $w$) e scendono fino al livello delle foglie (terminando poco sotto di esse). Nel manoscritto sono perfettamente verticali e non toccano una foglia specifica: disegnarle verticali, tratteggiate, sottili, in tono più scuro/neutro rispetto agli archi.
- Significato: a ogni nodo interno si associa una foglia distinta del suo sottoalbero; l'iniettività dà $I \le \ell$ (in realtà $I \le \ell-1$).

PANNELLO DESTRO — la contrazione della ciliegia:
- lo stesso albero, senza le frecce tratteggiate;
- il sottoalbero radicato nel figlio SINISTRO $u$ (cioè $u$ con le sue due foglie) è racchiuso da una CURVA CHIUSA a mano libera, spessa, di forma tondeggiante/triangolare arrotondata, in colore accento: evidenzia la «ciliegia», cioè un nodo branching i cui figli sono tutti foglie;
- il nodo interno destro $w$ nel manoscritto è tracciato con un ghirigoro a spirale: disegnarlo semplicemente come un normale cerchietto vuoto (la spirale è solo un tratto di penna);
- Significato: contraendo la ciliegia in una sola foglia si perdono un nodo interno e una foglia, cioè si passa da $(I,\ell)$ a $(I-1,\ell-1)$; iterando si arriva all'albero con una sola foglia e si conclude per induzione che il numero di nodi è al più $2\ell - 1$.
