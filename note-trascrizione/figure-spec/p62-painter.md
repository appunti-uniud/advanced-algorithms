# Figura `p62-painter`

- **Pagina della scansione:** 62
- **Tipo:** schema geometrico (scena 2D + osservatore)
- **Didascalia prevista:** La scena, con i suoi segmenti, e l'osservatore. I tagli della BPP suddividono la scena in regioni; l'albero della partizione fornisce, per ogni posizione dell'osservatore, un ordine di disegno dal piu' lontano al piu' vicino.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno a mano libera, tratto blu, senza assi. Riferimento: coordinate normalizzate (u,v) in [0,1]x[0,1] sul bounding box della macchia, origine in basso a sinistra; larghezza consigliata ~7 cm, altezza ~6.5 cm.

1) LA SCENA. Una curva CHIUSA irregolare, tipo macchia/blob, tratto medio (line width ~1pt), con contorno mosso: bordo superiore che sale da (0.05,0.72) a un picco in (0.40,0.98), poi scende leggermente e risale a un secondo lobo in (0.72,1.00)-(0.90,0.95), rientranza a (0.93,0.80), sporgenza destra a (1.00,0.62), rientro a (0.95,0.45), discesa a (0.85,0.20) e (0.62,0.08); bordo inferiore con una piccola dentellatura fra (0.42,0.05) e (0.30,0.12) (due-tre gradini a zig-zag, tipici del disegno a mano), poi risalita sul lato sinistro passando per (0.12,0.30), (0.02,0.50), (0.10,0.62), (0.05,0.72). L'aspetto deve restare quello di uno schizzo, non di un poligono regolare.

2) I DUE TAGLI (rette/corde della BPP), stesso tratto della macchia o leggermente piu' sottile, tratto CONTINUO (nell'originale non sono tratteggiati):
   - taglio A: dal punto del bordo superiore (0.40,0.94) scende con leggera curvatura a S fino al bordo inferiore in (0.57,0.08); divide la macchia in una parte sinistra e una destra;
   - taglio B: parte praticamente dallo stesso punto (0.41,0.93) e scende obliquo verso destra fino al bordo destro in (0.99,0.65); divide la parte destra in una porzione superiore e una inferiore.
   Risultano tre regioni: sinistra, destra-alta, destra-bassa.

3) I SEGMENTI DELLA SCENA: 7 segmenti brevi, tratto SPESSO (line width ~1.6pt), rettilinei, orientamenti diversi, senza etichette. Coordinate (estremi):
   s(a) (0.23,0.58)-(0.35,0.67)   [regione sinistra]
   s(b) (0.13,0.47)-(0.21,0.40)   [regione sinistra]
   s(c) (0.35,0.43)-(0.41,0.55)   [regione sinistra]
   s(d) (0.43,0.31)-(0.50,0.22)   [regione sinistra, in basso]
   s(e) (0.64,0.86)-(0.83,0.77)   [regione destra-alta]
   s(f) (0.55,0.39)-(0.73,0.59)   [regione destra-bassa]
   s(g) (0.79,0.45)-(0.91,0.44)   [regione destra-bassa]
   (Nell'originale c'e' anche un tratto scuro a ~(0.92,0.66)-(0.99,0.63) sovrapposto all'estremo del taglio B; e' ambiguo e puo' essere omesso.)

4) L'OSSERVATORE: fuori dalla macchia, in basso a sinistra, centrato attorno a (-0.28,0.05) rispetto allo stesso sistema di coordinate. E' un occhio stilizzato visto di lato: due archi che si incontrano in un vertice in alto, formando una specie di triangolo curvo di ~0.5 cm di lato con l'apice in alto e la base concava aperta verso destra-basso.
   Dall'occhio partono TRE frecce corte (lunghezza ~1 cm) con punta piena, che si aprono a ventaglio verso la macchia:
   - freccia 1: direzione ~55 gradi (verso l'alto a destra);
   - freccia 2: direzione ~30 gradi;
   - freccia 3: direzione ~15 gradi (quasi orizzontale, verso destra).

5) ETICHETTE (in italiano, NON presenti nell'originale, da aggiungere in tondo piccolo): «osservatore» sotto l'occhio; «scena» appena fuori dal bordo sinistro della macchia in alto, oppure omesse se il disegno resta leggibile.
