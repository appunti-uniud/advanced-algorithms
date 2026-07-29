# Figura `ac-output-link`

- **Pagina della scansione:** 15
- **Tipo:** albero (keyword tree / trie) con cammino di scansione evidenziato
- **Didascalia prevista:** Keyword tree di $\mathcal{P} = \{\texttt{acatt}, \texttt{ca}\}$. Scandendo $T = \texttt{acatg}$ la discesa segue gli archi a, c, a, t e si arresta sul carattere g ($\times$): la foglia di ca non viene mai visitata e l'occorrenza di ca in $T[2..3]$ va perduta.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ALBERO. Radice $r$, disegnata come piccolo disco pieno blu scuro, in alto al centro, in (0,0).

RAMO DESTRO (pattern 'ca'), due archi che scendono verso destra:
  r --c--> u1 in (1.2,-1.1);  u1 --a--> u2 in (2.2,-2.2).
  u2 e foglia. Etichette poste a destra dei rispettivi archi: 'c' vicino a (1.15,-0.45), 'a' vicino a (2.15,-1.55).

RAMO SINISTRO (pattern 'acatt'), cinque archi che scendono verso sinistra con pendenza costante:
  r --a--> v1 in (-1.0,-1.1);  v1 --c--> v2 in (-1.9,-2.2);  v2 --a--> v3 in (-2.8,-3.3);  v3 --t--> v4 in (-3.7,-4.4);  v4 --t--> v5 in (-4.6,-5.5).
  v5 e foglia. Etichette poste a SINISTRA dei rispettivi archi, subito sopra il punto medio: 'a' a (-1.05,-0.45), 'c' a (-1.95,-1.55), 'a' a (-2.85,-2.65), 't' a (-3.75,-3.75), 't' a (-4.65,-4.85). ATTENZIONE: il secondo arco del ramo sinistro e 'c' (non 'a'): il cammino deve leggere a-c-a-t-t.

Stile: nodi = piccoli dischi pieni blu scuro (raggio ~1.6pt); archi = segmenti dritti in blu medio, tratto sottile; etichette in blu medio, in \texttt (a, c, g, t sono caratteri dell'alfabeto).
Opzionale (non presente nell'originale, aggiungere solo se migliora la leggibilita): accanto a v5 la scritta grigia piccola 'acatt', accanto a u2 la scritta grigia piccola 'ca'.

EVIDENZIAZIONE DEL CAMMINO DI SCANSIONE (elemento centrale della figura).
Una curva spessa (spessore ~3x quello degli archi), azzurro chiaro semitrasparente, leggermente ondulata, che corre PARALLELA e appena a DESTRA del ramo sinistro: parte poco sotto la radice (circa (0.15,-0.35)) e scende passando accanto a v1, v2, v3 fino a poco sotto v4 (circa (-3.5,-4.6)).
Lungo questa curva, tre piccole punte di freccia a chevron ('<') rivolte verso SINISTRA, collocate immediatamente a destra di v1, v2 e v3 (circa (-0.55,-1.05), (-1.45,-2.15), (-2.35,-3.25)): indicano il verso della discesa, cioe la scansione che entra via via in v1, v2, v3.

PUNTO DI FALLIMENTO.
Sotto v4 la curva evidenziata prosegue in un breve segmento VERTICALE verso il basso, da circa (-3.4,-4.6) a (-3.4,-5.4), terminato da una punta di freccia piena rivolta in basso.
Su questo segmento, all'altezza di circa (-3.4,-5.0), una '×' marcata in blu scuro, tratto spesso, che lo sbarra.
Significato: dopo aver letto 'acat' ci si trova in v4, il carattere corrente di T e 'g' e l'unico arco uscente da v4 e etichettato 't' — mismatch, la discesa si ferma.

ANNOTAZIONE.
A destra della × e alla sua stessa altezza, un piccolo trattino ondulato '~' seguito dal testo su due righe (in italiano, come nell'originale):
  riga 1, a circa (-2.4,-5.0): «ho perso l'occorrenza di»
  riga 2, leggermente rientrata a destra, a circa (-1.5,-5.7): «ca!»

NOTA PER CHI DISEGNA: l'originale e tutto a penna blu; nodi in blu scuro, archi/etichette in blu piu chiaro, evidenziazione del cammino in azzurro chiaro spesso, × in blu scuro. Non c'e nel disegno alcuna etichetta 'T = acatg' (la stringa e scritta sopra la figura, nel testo). Non vanno disegnati failure link: nell'originale non ce ne sono.

Riferimento nel capitolo: fig:ac-output-link, sezione «Scarico dell'ipotesi: gli output link».
