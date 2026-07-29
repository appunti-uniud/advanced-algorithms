# Figura `p62-autopartizione`

- **Pagina della scansione:** 62
- **Tipo:** schema di segmenti e rette
- **Didascalia prevista:** Il segmento s giace sulla retta l = l(s): tagliando con l, s finisce sulla frontiera comune alle due regioni r_l e r'_l e va assegnato all'una oppure all'altra.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno lineare, tratto blu, senza assi. Larghezza consigliata ~7 cm, altezza ~4 cm.

1) LA RETTA l: una retta TRATTEGGIATA (dash pattern a trattini corti e ben staccati) che sale da sinistra verso destra con pendenza ~30 gradi, dagli estremi (0.00,0.05) a (1.00,0.95) in coordinate normalizzate. Etichetta $\ell$ in corsivo matematico appena sopra l'estremo destro, a (1.03,0.98).

2) IL SEGMENTO s: sulla stessa retta, tratto CONTINUO e piu' spesso (line width ~1.4pt), fra i punti A=(0.33,0.35) e B=(0.66,0.65). Su A e su B una crocetta "x" (due trattini incrociati, ~2mm) a marcare gli estremi del segmento. Etichetta $s$ in corsivo matematico sopra-a-sinistra del punto medio del segmento, a circa (0.40,0.47).

3) LE DUE FRECCE (la scelta del lato): entrambe partono dall'estremo superiore B=(0.66,0.65) e sono perpendicolari a l:
   - freccia verso l'ALTO: da (0.65,0.70) a (0.65,0.86), punta piena in alto (indica il semipiano/regione al di sopra di l);
   - freccia verso il BASSO-DESTRA: da (0.70,0.62) a (0.78,0.52), punta piena in basso a destra (indica il semipiano/regione al di sotto di l).

4) ETICHETTE DELLE REGIONI (matematica):
   - $r_\ell$ sopra la retta, a sinistra della freccia verso l'alto, in posizione ~(0.44,0.80);
   - $r'_\ell$ sotto la retta, sotto la freccia verso il basso, in posizione ~(0.70,0.38).
   Nell'originale entrambe sembrano scritte "r_l": l'apice sulla seconda e' un'aggiunta editoriale per distinguerle. ATTENZIONE: usare la forma $r'_\ell$ (apice PRIMA del pedice), che e' quella adottata nel testo e nella didascalia del capitolo.

5) Nessun altro elemento: niente riquadri, niente ombreggiature delle regioni.
