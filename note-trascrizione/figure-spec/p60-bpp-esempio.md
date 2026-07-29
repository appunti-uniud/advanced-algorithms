# Figura `p60-bpp-esempio`

- **Pagina della scansione:** 60
- **Tipo:** schema geometrico: scena di segmenti nel piano con le rette di taglio di una BPP e le regioni etichettate
- **Didascalia prevista:** Una partizione binaria del piano per cinque segmenti non intersecanti: in tratto continuo i segmenti s_1,...,s_5, tratteggiate le rette di taglio. Ognuna delle sei regioni r_1,...,r_6 contiene esattamente un segmento o una porzione di segmento; s_3 e' l'unico segmento spezzato.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Riquadro senza bordo e senza assi, larghezza circa 10 cm, altezza circa 6,5 cm. Sistema di coordinate x in [0,9], y in [0,6] (unita' = cm, x verso destra, y verso l'alto). Nessuna quadrettatura. Due stili di tratto: SEGMENTI = linea continua spessa (thick/very thick), colore blu; TAGLI = linea tratteggiata piu' sottile, colore blu scuro o nero. Tutte le etichette in matematica, corpo piccolo.

SEGMENTI (cinque, a due a due non intersecanti):
  s5: da (2.00,5.30) a (2.70,4.35), ripido, dall'alto a sinistra verso il basso a destra; l'estremo inferiore resta appena sopra il taglio c1. Etichetta $s_5$ a destra del tratto, in (3.05,5.00).
  s3: da (1.00,1.60) a (2.15,2.95), obliquo, dal basso a sinistra verso l'alto a destra. Etichetta $s_3$ a sinistra, in (0.70,2.55).
  s4: da (3.10,2.40) a (5.00,3.75), obliquo, dal basso a sinistra verso l'alto a destra; l'estremo superiore destro tocca quasi il taglio c1. Etichetta $s_4$ sotto il tratto, in (3.85,2.70).
  s2: da (4.60,1.55) a (4.85,0.85), corto e quasi verticale (leggermente inclinato a destra scendendo). Etichetta $s_2$ a destra, in (5.20,1.15).
  s1: da (6.50,2.60) a (8.20,2.45), quasi orizzontale, appena discendente verso destra. Etichetta $s_1$ sopra, in (7.55,2.95).

TAGLI (cinque rette tratteggiate; se serve, disegnarli nell'ordine indicato, che e' l'ordine in cui la BPP li esegue):
  c1 (primo taglio, taglia tutto il piano): segmento orizzontale da (0.00,4.10) a (9.00,4.10). Puo' avere una pendenza appena percettibile verso l'alto a destra, come nella scansione.
  c2 (taglio della meta' inferiore): da (2.75,4.10) su c1 fino a (2.20,0.00) sul bordo inferiore: quasi verticale, leggermente inclinato verso sinistra scendendo.
  c3 (taglio della regione a sinistra di c2): da (1.45,4.10) su c1 fino a (2.45,2.00) su c2, dove SI FERMA (giunzione a T). Questo taglio ATTRAVERSA il segmento s3 nel punto (2.05,2.84), vicino al suo estremo superiore: e' il taglio che spezza s3 in due parti.
  c4 (taglio della regione a destra di c2): da (5.15,4.10) su c1 fino a (7.60,0.00) sul bordo inferiore, obliquo verso il basso a destra.
  c5 (taglio della regione fra c2 e c4): da (2.36,1.20) su c2 fino a (5.73,3.13) su c4, obliquo verso l'alto a destra, con pendenza dolce. Passa sotto s4 e sopra s2.

REGIONI (sei) ed etichette, in matematica, poste nell'interno:
  r1 = tutto cio' che sta sopra c1; contiene s5. Etichetta $r_1$ in (7.50,5.20).
  r6 = il triangolo delimitato in alto da c1, a sinistra da c3, a destra da c2, con vertici circa (1.45,4.10), (2.75,4.10), (2.45,2.00); contiene la porzione ALTA di s3, cioe' il tratto da (2.05,2.84) a (2.15,2.95). Etichetta $r_6$ in (1.85,3.45).
  r4 = la regione a sinistra di c3 e di c2; contiene la porzione BASSA di s3, cioe' il tratto da (1.00,1.60) a (2.05,2.84). Etichetta $r_4$ in (1.30,1.35).
  r5 = la regione delimitata da c1 (sopra), c2 (sinistra), c4 (destra), c5 (sotto); contiene s4. Etichetta $r_5$ in (2.85,2.30).
  r3 = la regione sotto c5, a destra di c2 e a sinistra di c4; contiene s2. Etichetta $r_3$ in (3.30,0.60).
  r2 = la regione a destra di c4 (sotto c1); contiene s1. Etichetta $r_2$ in (8.30,0.90).

NOTE PER IL DISEGNO: (a) l'unica intersezione fra un taglio e un segmento e' quella di c3 con s3 - tutti gli altri segmenti restano interi; conviene marcare visivamente il punto (2.05,2.84) (nessun pallino nel quaderno, ma il tratteggio vi passa sopra in modo netto). (b) Nel quaderno le rette di taglio sono a mano libera e leggermente curve, e la giunzione a T di c3 su c2 sembra un incrocio: nel disegno pulito vanno rese come rette, con c3 che termina esattamente su c2. (c) Non riprodurre la quadrettatura del quaderno. (d) Tutto il testo eventualmente presente va in italiano.
