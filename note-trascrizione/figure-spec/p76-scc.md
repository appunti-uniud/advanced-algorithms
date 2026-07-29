# Figura `p76-scc`

- **Pagina della scansione:** 76
- **Tipo:** grafo orientato con decomposizione in componenti fortemente connesse (bolle)
- **Didascalia prevista:** Le componenti fortemente connesse di un grafo orientato: ogni bolla è una classe di equivalenza della relazione di mutua raggiungibilità. All'interno di una bolla ogni nodo raggiunge ogni altro (e infatti un ciclo orientato li attraversa tutti); fra bolle distinte gli archi vanno tutti in un solo verso, altrimenti le due bolle sarebbero un'unica SCC.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Disegno a mano libera (nell'originale è a matita, tratto sottile e in parte cancellato). Rappresenta un grafo orientato decomposto nelle sue SCC. Riquadro di riferimento: larghezza 1, altezza 0,85; le coordinate qui sotto sono relative, (0,0) in basso a sinistra.

BOLLE (curve chiuse a mano libera, tratto sottile, forma di ameba/ovale irregolare, NON ellissi perfette; possono sfiorarsi ma non sovrapporsi):

• C1 — piccola, in alto a sinistra, centro ≈ (0,25 ; 0,86), semiassi ≈ 0,10 × 0,11. Contiene 2 nodi (dischetti pieni, senza etichetta): n1 ≈ (0,27 ; 0,93) in alto, n2 ≈ (0,21 ; 0,80) in basso a sinistra. Archi interni: freccia curva n2 → n1 che sale piegando a sinistra, e freccia curva n1 → n2 che scende piegando a destra (2-ciclo).

• C2 — la più grande, occupa il centro-destra, centro ≈ (0,62 ; 0,55), larghezza ≈ 0,62, altezza ≈ 0,72. Contiene 4 nodi disposti lungo un ciclo orientato: m1 ≈ (0,46 ; 0,86) in alto a sinistra, m2 ≈ (0,78 ; 0,76) in alto a destra, m3 ≈ (0,88 ; 0,35) in basso a destra, m4 ≈ (0,45 ; 0,50) al centro-basso. Archi interni (frecce curve, tutte concordi nel verso del ciclo): m1 → m2 (arco che scende dolcemente verso destra), m2 → m3 (arco lungo che segue il bordo destro della bolla scendendo), m3 → m4 (arco che risale verso sinistra, punta rivolta a sinistra), m4 → m1 (arco quasi verticale che risale, punta rivolta in alto). Il ciclo m1→m2→m3→m4→m1 è ciò che rende la bolla fortemente connessa.

• C3 — piccola, in basso a sinistra, centro ≈ (0,13 ; 0,40), semiassi ≈ 0,07 × 0,13. Contiene 2 nodi: p1 ≈ (0,12 ; 0,34), p2 ≈ (0,15 ; 0,48), con una coppia di frecce curve p1 → p2 e p2 → p1 (2-ciclo). Nel manoscritto questa bolla è quasi del tutto cancellata: si distinguono un nodo e archi curvi; ricostruirla come 2-ciclo per coerenza semantica.

• C4 — media, in basso al centro, centro ≈ (0,42 ; 0,14), larghezza ≈ 0,32, altezza ≈ 0,28. Contiene 3 nodi: q1 ≈ (0,33 ; 0,20), q2 ≈ (0,52 ; 0,17), q3 ≈ (0,41 ; 0,05), con frecce q1 → q2, q2 → q3, q3 → q1 (ciclo orientato di lunghezza 3).

ARCHI FRA LE BOLLE (frecce più lunghe e più marcate; tutti in un solo verso, così che la condensazione sia un DAG):
• una freccia lunga entra da fuori, dal margine sinistro all'altezza ≈ 0,80, curva verso l'alto a destra e punta su n2 di C1 (nell'originale parte dal bordo sinistro del foglio, accanto alla scritta «strongly connected components»);
• C1 → C2: freccia da n2 (bordo destro di C1) verso m1;
• C1 → C3: freccia che scende verso sinistra dal bordo inferiore di C1 fino al bordo superiore di C3;
• C2 → C4: freccia che scende dal bordo inferiore-sinistro di C2 verso il bordo superiore di C4.

ETICHETTE: nel manoscritto non ce ne sono (né sui nodi né sugli archi né sulle bolle). Per la versione pulita: nessuna etichetta sui nodi e sugli archi; etichettare invece le quattro bolle, in piccolo e appena fuori dal contorno, con $C_1$ (in alto a sinistra), $C_2$ (in alto a destra), $C_3$ (a sinistra), $C_4$ (in basso), così che la didascalia possa citarle. Nessuna probabilità sugli archi: qui il grafo serve solo come supporto combinatorio, non come catena di Markov con pesi.

STILE: nodi = dischetti pieni piccoli; archi = frecce curve sottili con punta piccola; bolle = curve chiuse a tratto sottile (eventualmente tratteggiato o grigio chiaro) per distinguerle dagli archi. Nessun riempimento colorato, oppure un grigio molto tenue dentro le bolle.

SEMANTICA DA PRESERVARE (vincoli che la ricostruzione non deve violare): (i) ogni bolla è fortemente connessa, quindi deve contenere un ciclo orientato che tocca tutti i suoi nodi; (ii) fra due bolle distinte gli archi devono andare tutti nella stessa direzione, altrimenti le due bolle collasserebbero in un'unica SCC; (iii) il grafo delle bolle (condensazione) dev'essere aciclico: con gli archi indicati risulta C1 → C2 → C4 e C1 → C3, che è un DAG.
