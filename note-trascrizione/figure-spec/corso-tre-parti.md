# Figura `corso-tre-parti`

- **Pagina della scansione:** 1
- **Tipo:** schema a graffa (albero di suddivisione con annotazioni a margine)
- **Didascalia prevista:** Le tre parti in cui è suddiviso il corso, con le annotazioni a margine sulla dicotomia Monte Carlo / Las Vegas e sull'obiettivo delle strutture dati compresse.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema orizzontale a tre livelli, tutto testo in italiano (tranne il termine inglese «string matching»). Nessun colore: il manoscritto è interamente in penna blu, va reso in nero.

LIVELLO 0 (a sinistra, centrato verticalmente rispetto ai tre rami): il nodo-testo «3 parti».

DIVERGENZA: dal punto immediatamente a destra di «3 parti» partono TRE frecce con punta piena che divergono da un unico punto di origine — una che sale verso destra (verso la riga 1), una orizzontale (verso la riga 2), una che scende verso destra (verso la riga 3). Nel manoscritto NON c'è una graffa tipografica ma esattamente queste tre frecce; in alternativa è accettabile una decoration brace, ma la resa fedele è a frecce.

LIVELLO 1 — tre voci impilate verticalmente, allineate a sinistra fra loro, ciascuna raggiunta da una delle tre frecce:
  R1 (in alto): «string matching», sottolineata;
  R2 (al centro): «algoritmi randomizzati», sottolineata;
  R3 (in basso): «strutture dati compresse», sottolineata.
Spaziatura verticale fra le righe: circa una riga e mezza di testo.

DIRAMAZIONE DA R2: a destra di «algoritmi randomizzati» un secondo connettore a forma di parentesi angolare «<» (due segmenti che partono da un vertice a sinistra, uno verso l'alto-destra e uno verso il basso-destra) che si apre su due sotto-voci allineate a sinistra fra loro:
  S1 (alla stessa altezza di R1, cioè leggermente più in alto di R2): «Monte Carlo — non sempre corretti»;
  S2 (alla stessa altezza di R2): «Las Vegas — sempre corretti».
In entrambe le sotto-voci un trattino lungo separa il nome della classe dal commento. Nel manoscritto il commento va a capo («non sempre / corretti», «sempre / corretti») solo per mancanza di spazio: in TikZ va tenuto su una riga sola.

ANNOTAZIONE SU R3: a destra di «strutture dati compresse» un connettore a tilde (nel manoscritto un breve tratto ondulato orizzontale, reso con \sim o con una decoration snake) seguito dalla glossa: «comprimere dati anche molto complessi».

STILE: nessun riquadro. Le etichette di livello 1 in corpo testo; le glosse a destra (S1, S2 e la glossa di R3) in corpo minore (\small o \footnotesize), perché nel quaderno sono annotazioni marginali scritte più piccole.

INGOMBRO: la figura è larga (livello 0 + livello 1 + colonna delle glosse); va tenuta entro \textwidth, eventualmente riducendo il corpo delle glosse o accorciando i connettori.

SIGNIFICATO ALGORITMICO: la figura è la mappa del corso. Le tre voci corrispondono uno-a-uno ai tre libri di testo elencati subito sotto (Gusfield -> string matching; Motwani–Raghavan -> algoritmi randomizzati; Navarro -> strutture dati compresse). La diramazione «<» anticipa la classificazione degli algoritmi randomizzati della parte 2; la tilde su R3 enuncia l'obiettivo della parte 3.
