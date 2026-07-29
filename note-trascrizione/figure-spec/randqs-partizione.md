# Figura `randqs-partizione`

- **Pagina della scansione:** 52
- **Tipo:** schema di array / diagramma
- **Didascalia prevista:** Partizione ideale: il pivot spezza l'insieme in due metà di $n/2$ elementi.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema della partizione ideale di QuickSort, disegnato a penna blu.

LAYOUT (coordinate suggerite, unità cm):
- In alto al centro, in (0, 2.2): un piccolo QUADRATO VUOTO, lato circa 0.55, contorno spesso (line width ~1pt), colore blu scuro. Rappresenta la cella del pivot scelto a caso. Nel manoscritto NON è etichettato; si consiglia di aggiungere l'etichetta "pivot" in piccolo (\footnotesize) appena sopra o a destra del quadrato — è un'aggiunta editoriale per leggibilità, indicata nelle note.
- Due FRECCE CURVE (arrows.meta, punta -{Stealth}, tratto blu medio, spessore ~1pt) che partono dai due angoli inferiori del quadrato e scendono divaricandosi:
  * sinistra: da circa (-0.3, 1.95) con bend right (curvatura ~25°) fino a (-2.1, 0.75), punta rivolta in basso a sinistra;
  * destra: da circa (0.3, 1.95) con bend left (curvatura ~25°) fino a (1.9, 0.75), punta rivolta in basso a destra.
  Le due frecce formano un arco a ventaglio simmetrico (nell'originale la sinistra è leggermente più lunga e più curva; la simmetria è preferibile).
- In basso, all'altezza y = 0, due BARRE DI MISURA affiancate, ciascuna disegnata come un segmento orizzontale con due trattini verticali agli estremi (forma |———|), altezza dei tick ~0.35, tratto blu:
  * barra sinistra: da x = -4.0 a x = -1.0;
  * barra destra:  da x =  0.5 a x =  3.7.
  Nell'originale ciascuna barra è tracciata come un rettangolo molto schiacciato (linea superiore e linea inferiore ravvicinate, ~0.35 di altezza) con i tick agli estremi: va bene renderle come rettangoli bassi oppure come semplici segmenti con tick.
- Etichetta $n/2$ centrata (o leggermente a sinistra del centro, come nell'originale) DENTRO la barra sinistra; etichetta $n/2$ centrata dentro la barra destra. Font matematico normale.
- La freccia sinistra punta sopra la barra sinistra; la freccia destra punta sopra la barra destra.

Nessun altro testo. Tutto il testo (eventuale "pivot") in italiano.

SIGNIFICATO ALGORITMICO: il pivot estratto uniformemente a caso, nel caso ideale/bilanciato, separa l'insieme in due sottoinsiemi di $n/2$ elementi ciascuno; le due frecce sono le due chiamate ricorsive RandQS(S_1) e RandQS(S_2). È la figura che giustifica la ricorrenza $T(n)=\Oh(n)+2T(n/2)$ riportata subito sotto nel testo.
