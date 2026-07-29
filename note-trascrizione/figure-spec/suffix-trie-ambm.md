# Figura `suffix-trie-ambm`

- **Pagina della scansione:** 17
- **Tipo:** albero (trie dei suffissi, con catene ellittiche e graffe di misura)
- **Didascalia prevista:** Il suffix trie di $T = a^m b^m$. La «spina dorsale» degli $a$ è lunga $m$ e da ciascuno dei suoi nodi pende una catena di $m$ archi etichettati $b$: in tutto $\Theta(m^2) = \Theta(|T|^2)$ nodi.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SOGGETTO: suffix trie (keyword tree non compattato) della stringa T = a^m b^m; serve a mostrare che il numero di nodi è Theta(m^2) = Theta(|T|^2). Nessun indice di foglia, nessuna sentinella nel disegno originale.

STILE: nodi = piccoli cerchi PIENI (bullet, ~1.6pt), la radice leggermente più grande; archi = segmenti dritti sottili; etichette degli archi = singoli caratteri corsivi matematici 'a' e 'b' posti accanto all'arco (mai sopra il nodo); le parti omesse sono rese con TRE puntini allineati lungo la direzione della catena (ellissi), senza nodo terminale.

TOPOLOGIA (usare i path-label come nomi interni):
- Radice r (path-label = stringa vuota), in alto, spostata verso il centro-destra della figura.
- RAMO DESTRO, catena dei suffissi b^q: da r un arco etichettato 'b' scende verso DESTRA-BASSO fino a u1; da u1 un arco 'b' verso destra-basso fino a u2; da u2 un arco 'b' verso destra-basso fino a u3; dopo u3 tre puntini in prosecuzione (destra-basso). Nell'originale sono disegnati 3 archi 'b' espliciti. Questa catena ha in totale m archi.
- SPINA DORSALE DEGLI a: da r un arco etichettato 'a' scende verso SINISTRA-BASSO fino a v1 (path-label a); da v1 un arco 'a' verso sinistra-basso fino a v2 (a^2); da v2 un arco 'a' fino a v3 (a^3); da v3 un arco 'a' fino a v4 (a^4). Poi UN'ELLISSI VERTICALE (tre puntini) e infine l'ultimo nodo v_m (path-label a^m). La spina è quasi verticale, leggermente inclinata verso sinistra scendendo (circa 75-80 gradi rispetto all'orizzontale), così che i nodi v_p siano progressivamente un po' più a sinistra e nettamente più in basso.
- CATENE b PENDENTI: da ciascuno dei nodi v1, v2, v3, v4 parte verso DESTRA-BASSO (circa 45 gradi) un arco etichettato 'b', poi un secondo arco 'b', poi tre puntini in prosecuzione. Semanticamente ognuna di queste catene ha m archi 'b' e termina in una foglia con path-label a^p b^m; nel disegno se ne mostrano solo i primi 2 archi. Le catene devono restare parallele fra loro e non intersecare né la spina né le catene vicine (la spina scende quasi verticale, le catene a 45 gradi verso destra: la spaziatura verticale fra i v_p deve essere sufficiente).
- ULTIMA CATENA (quella completa): da v_m parte verso il basso (leggermente a destra, ~70 gradi) la catena dei b: 3 archi etichettati 'b' espliciti con i rispettivi nodi, poi un ultimo nodo pieno e infine tre puntini verticali. È il cammino radice-foglia che compita l'intera stringa a^m b^m.

GRAFFE DI MISURA (decorations.pathreplacing, brace):
- Graffa 1: grande graffa sinistra (apertura rivolta a destra) che abbraccia VERTICALMENTE tutta la spina degli a, dall'altezza della radice r fino all'altezza di v_m; disegnata a sinistra della spina, con etichetta 'm' in corsivo matematico posta a SINISTRA del vertice della graffa. Significa: la spina è fatta di m archi 'a'.
- Graffa 2: seconda graffa sinistra, più in basso, che abbraccia VERTICALMENTE l'ultima catena di b (da v_m fino all'ultimo nodo disegnato di quella catena); anch'essa a sinistra, con etichetta 'm' a sinistra del vertice. Significa: quella catena è fatta di m archi 'b'.
Le due graffe sono allineate verticalmente sullo stesso lato sinistro e non devono toccare gli archi.

SIGNIFICATO ALGORITMICO da rendere leggibile a colpo d'occhio: ci sono Theta(m) nodi sulla spina e da ciascuno pende una catena con Theta(m) nodi, quindi il trie ha Theta(m^2) = Theta(|T|^2) nodi; il suffix trie è perciò inutilizzabile come indice (spazio quadratico), ed è questa la motivazione della compattazione in suffix tree.

NOTE SULL'ORIGINALE: tutto è disegnato a mano libera con archi leggermente curvi; nel manoscritto compaiono 5 nodi espliciti sulla spina (radice + 4-5 a-nodi) e le ellissi sono rese con 2-3 trattini/puntini. Non ci sono etichette diverse da 'a', 'b' e dalle due 'm' delle graffe.
