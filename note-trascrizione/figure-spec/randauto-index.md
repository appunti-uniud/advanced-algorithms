# Figura `randauto-index`

- **Pagina della scansione:** 63
- **Tipo:** schema geometrico: una retta e i segmenti che la attraversano
- **Didascalia prevista:** index(u,v)=i: percorrendo l(u) a partire da u si incontrano i segmenti u_1, u_2, ..., u_{i-1} (i-1 in tutto) prima di incontrare v.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema lineare, tutto in un'unica riga orizzontale, larghezza complessiva ~12 cm, altezza ~2.5 cm. Sistema di coordinate suggerito: asse x da 0 a 12, asse y da -1.8 a +1.2, con la retta principale a y=0.

(1) RETTA l(u). Una linea orizzontale a y=0 che va da x=0 a x=12.
   - Il tratto da x=0 a x=2.2 e' disegnato SPESSO e CONTINUO: e' il segmento u vero e proprio. Alle sue due estremita' (x=0 e x=2.2) va messo un piccolo trattino verticale di ~0.15 di altezza, centrato sulla retta (serif che marca gli estremi del segmento), esattamente come nel manoscritto.
   - Il tratto da x=2.4 a x=12 e' disegnato SOTTILE e TRATTEGGIATO (dash pattern medio, es. `dashed`): e' il prolungamento, cioe' la retta l(u). Il tratteggio prosegue oltre v fino al bordo destro (x=12), a indicare che l(u) continua.
   - Etichetta "$u$" in corsivo matematico appena SOPRA il tratto spesso, circa a x=0.9, y=0.35.
   - Etichetta "$\ell(u)$" appena SOTTO la parte tratteggiata all'estrema destra, circa a x=11.2, y=-0.4 (aggiunta editoriale: nel manoscritto la retta non e' etichettata, ma e' l(u) per definizione).

(2) SEGMENTI CHE ATTRAVERSANO l(u). Quattro trattini obliqui sottili e continui, ciascuno lungo ~1.1, che tagliano la retta y=0 restando per meta' sopra e per meta' sotto. Da sinistra a destra:
   - u_1: attraversa in x=3.6, inclinato con la sommita' a SINISTRA (dall'alto-sinistra al basso-destra), es. dal punto (3.35,0.55) al punto (3.8,-0.55). Etichetta "$u_1$" sopra la sua estremita' superiore, a ~(3.25,0.85).
   - u_2: attraversa in x=5.2, inclinato nel verso OPPOSTO (dal basso-sinistra all'alto-destra), es. da (4.9,-0.55) a (5.5,0.6). Etichetta "$u_2$" sopra la sua estremita' superiore, a ~(5.6,0.9).
   - Puntini di sospensione: tre pallini pieni allineati ORIZZONTALMENTE, appoggiati sulla retta (leggermente sotto, y~-0.08), fra x=6.4 e x=7.0. Indicano i segmenti omessi.
   - u_{i-1}: attraversa in x=8.4, quasi VERTICALE con una leggerissima inclinazione, es. da (8.3,-0.55) a (8.5,0.6). Etichetta "$u_{i-1}$" sopra, a ~(8.5,0.9).
   - v: attraversa in x=9.9, verticale/leggermente inclinato, disegnato un filo piu' lungo degli altri, es. da (9.85,-0.55) a (10.0,0.75). Etichetta "$v$" sopra la sua estremita' superiore, a ~(10.15,1.0).
   Nota: fra u_{i-1} (x=8.4) e v (x=9.9) la retta resta tratteggiata, e resta tratteggiata anche dopo v.

(3) GRAFFA DI CONTEGGIO. Una graffa orizzontale rivolta verso l'alto (stile \underbrace, `decorate, decoration={brace, amplitude=6pt, mirror}`) disegnata SOTTO la retta a y~-0.75, che va da x=3.35 (subito a sinistra di u_1) a x=8.55 (subito a destra di u_{i-1}). NON deve includere v. Sotto il vertice della graffa, centrata a ~(5.95,-1.35), l'etichetta "$i-1$".

(4) STILE. Monocromatico (nel manoscritto e' tutto in penna blu): usare il nero o il colore d'accento del documento. Nessun riempimento, nessuna freccia. Le etichette sono in matematica corsiva, dimensione \small.

(5) SIGNIFICATO ALGORITMICO. Lo schema visualizza la definizione di index: partendo dal segmento u e percorrendo la retta l(u) che lo prolunga (verso destra), si incontrano esattamente i-1 segmenti (u_1, u_2, ..., u_{i-1}) prima di incontrare v; dunque index(u,v)=i. La graffa etichettata "i-1" conta proprio quei segmenti intermedi, v escluso. Questo e' l'insieme che, insieme a u e v, da' gli i+1 elementi fra cui u deve risultare primo nella permutazione pi perche' possa verificarsi u ⊣ v.
