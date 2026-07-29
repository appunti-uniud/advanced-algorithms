# Figura `karger-contrazione`

- **Pagina della scansione:** 55
- **Tipo:** grafo (due multigrafi affiancati, prima/dopo la contrazione)
- **Didascalia prevista:** Un passo dell'algoritmo: si sceglie a caso l'arco $(u,v)$ e lo si contrae. Gli archi $u$--$z$ e $v$--$z$ diventano due archi paralleli fra $uv$ e $z$; l'arco contratto diventa un self-loop e viene eliminato.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Due multigrafi affiancati, uniti da una freccia ondulata orizzontale che punta a destra, collocata in basso fra i due grafi. Nodi: cerchietti vuoti (diametro ~2 mm); archi a tratto pieno, spessore medio, leggermente curvi (aspetto a mano libera).

--- GRAFO DI SINISTRA (multigrafo di partenza $G$), 5 nodi, 7 archi ---
Posizioni (cm, origine in basso a sinistra del pannello):
  a  = (0.0, 2.6)   [negli appunti e un puntino pieno piu piccolo degli altri]
  b  = (1.5, 3.4)   [in alto]
  v  = (3.4, 2.2)   [a destra, in alto]
  u  = (0.1, 0.6)   [in basso a sinistra]
  z  = (3.2, -0.5)  [in basso a destra]
Archi:
  1) a--b DOPPIO (due archi paralleli): due archi incurvati in senso opposto che formano una «lente» ben visibile, asse maggiore inclinato di ~25 gradi verso l'alto a destra, apertura ~0.5 cm.
  2) b--v singolo, quasi rettilineo, in discesa verso destra.
  3) a--u singolo, quasi verticale, sul lato sinistro.
  4) u--v singolo, DIAGONALE lunga dal basso a sinistra verso l'alto a destra: e l'ARCO SCELTO. Evidenziarlo (tratto piu spesso o colore d'accento) ed etichettarlo con la scritta su due righe «arco scelto», posta appena sopra/a sinistra dell'arco e allineata alla sua inclinazione. Etichettare gli estremi $u$ (in basso) e $v$ (in alto a destra).
  5) v--z singolo, quasi verticale, sul lato destro.
  6) u--z singolo, quasi orizzontale, lungo il bordo inferiore.

--- FRECCIA CENTRALE ---
Freccia ONDULATA (sinusoide con 4-5 oscillazioni) orizzontale, testa piena triangolare rivolta a destra, all'altezza y ~ -0.6 cm, fra i due pannelli. Sotto la freccia, su due righe, la didascalia «scelgo un arco e lo contraggo».

--- GRAFO DI DESTRA (multigrafo contratto $G/(u,v)$), 4 nodi, 5 archi + 1 self-loop eliminato ---
Posizioni (stesso sistema, traslato a destra di ~6.5 cm):
  a' = (0.0, 2.6)
  b' = (1.2, 3.6)
  uv = (1.6, 1.3)   [SUPER-NODO, etichettato $uv$, in posizione centrale]
  z' = (2.9, -0.4)  [etichettato $z$]
Archi:
  1) a'--b' DOPPIO: la stessa «lente» del grafo di sinistra, invariata.
  2) b'--uv singolo, rettilineo, quasi verticale (erede di b--v).
  3) a'--uv singolo, rettilineo in discesa verso destra (erede di a--u).
  4) uv--z' DOPPIO: due archi paralleli incurvati in senso opposto, che formano una lente verticale allungata (uno bomba verso sinistra, l'altro verso destra). Sono gli eredi di v--z e u--z.
  5) SELF-LOOP ELIMINATO: piccolo cappio TRATTEGGIATO (trattini corti) attaccato al super-nodo $uv$ sul lato destro, diametro ~0.6 cm. Da esso parte una linea di richiamo obliqua verso l'alto a destra che termina nell'annotazione su tre righe «se formo un self-loop, lo ignoro».

Significato algoritmico: la contrazione riduce di 1 il numero di nodi, fonde $u$ e $v$ nel super-nodo $uv$, conserva TUTTI gli archi paralleli (creando molteplicita) e cancella i self-loop generati. E il passo elementare dell'algoritmo randomizzato di Karger per il min-cut. NOTA: le etichette $u$, $v$, $uv$, $z$ sono aggiunte in trascrizione (nel quaderno i nodi sono anonimi) e sono richiamate dalla didascalia: vanno mantenute.
