# Figura `sottostringa-ripetuta`

- **Pagina della scansione:** 16
- **Tipo:** schema di stringhe
- **Didascalia prevista:** La più lunga sottostringa ripetuta: $\b$ occorre a partire da due posizioni distinte di $T$. La stringa è terminata dalla sentinella $\$$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema minimale, monocromatico (blu scuro o nero), larghezza circa 11 cm.

ELEMENTI:
1. Un segmento orizzontale spesso (line width ~1.2pt) da (0,0) a (10,0): rappresenta l'intera stringa T. Nel manoscritto è tracciato a mano libera con una leggerissima ondulazione; una linea dritta va benissimo.
2. Etichetta «$T$» in stile matematico, posizionata SOPRA il segmento, allineata all'estremo destro, circa a (9.7,0.35). (Nel manoscritto la stringa è chiamata S; nel capitolo cucito la notazione è uniformata a T.)
3. Immediatamente a destra dell'estremo destro del segmento, il simbolo di sentinella «$\$$» disegnato più grande del testo normale (tipo \Large), centrato circa a (10.35,0). Nel manoscritto è vistosamente più grande della lettera del testo, a sottolineare che è un carattere aggiunto in coda.
4. Sotto il segmento, DUE graffe orizzontali rivolte verso il basso (decoration={brace, mirror, amplitude=5pt}, yshift=-4pt):
   - la prima copre l'intervallo da x=1.4 a x=3.6;
   - la seconda copre l'intervallo da x=5.0 a x=7.2.
   Le due graffe sono disgiunte e hanno la STESSA lunghezza (sono due occorrenze della stessa stringa).
5. Sotto il vertice di ciascuna graffa, l'etichetta «$\beta$» (a circa y=-0.75).

NIENTE ALTRO: niente assi, niente tacche di posizione, niente indici.

SIGNIFICATO ALGORITMICO: beta è una sottostringa che occorre in due posizioni distinte di T, cioè una sottostringa ripetuta; il problema chiede di massimizzare |beta|. Le due occorrenze sono disegnate disgiunte solo per chiarezza grafica: in generale possono sovrapporsi. La sentinella $ in coda serve a garantire che nessun suffisso di T$ sia prefisso di un altro.
