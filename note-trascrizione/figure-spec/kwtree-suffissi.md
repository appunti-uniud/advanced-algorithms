# Figura `kwtree-suffissi`

- **Pagina della scansione:** 16
- **Tipo:** albero
- **Didascalia prevista:** Il keyword tree dei suffissi di $T\$$ (suffix trie): ogni foglia corrisponde a un suffisso e porta la sentinella $\$$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Albero radicato disegnato nel manoscritto come uno schizzo a mano libera dalla silhouette di «montagna»: radice in cima al centro, archi lunghi e curvi che si aprono a ventaglio verso il basso, foglie a profondità molto diverse, TUTTE marcate con il simbolo «$». Non è il trie di una stringa specifica: è un disegno generico. La ricostruzione deve quindi essere una forma pulita e plausibile di suffix trie, non una copia letterale dello scarabocchio.

TOPOLOGIA PROPOSTA (8 foglie, tutte etichettate «$», nessuna etichetta di carattere sugli archi — nel manoscritto gli archi NON portano etichette):
- radice r in alto al centro, disegnata come piccolo nodo pieno (o semplicemente come punto di incontro degli archi);
- r ha 4 figli, con archi di lunghezza e pendenza molto diverse:
  (a) arco CORTISSIMO che va da r leggermente in basso a destra e termina subito in una foglia «$» (poco sotto e a destra della radice): è la foglia del suffisso costituito dalla sola sentinella, ed è l'elemento più caratteristico del disegno originale — va conservato;
  (b) arco LUNGHISSIMO che da r scende ampiamente verso destra, con una curvatura, fino a una foglia «$» all'estrema destra e in basso: è il suffisso più lungo (l'intera stringa);
  (c) arco medio che scende a sinistra fino a un nodo interno v1; v1 è branching con 2 figli: una foglia «$» in basso a sinistra (poco profonda) e un secondo nodo interno v1' che porta a un'altra foglia «$» più in basso;
  (d) arco medio che scende quasi verticale fino a un nodo interno v2; v2 è branching con 2 figli: una foglia «$» e un nodo interno v2' con 2 foglie «$» affiancate (le tre foglie centrali del disegno).
  Totale foglie: 1 (a) + 1 (b) + 2 (c) + 3 (d) = 7; aggiungere una foglia «$» in più appesa a v2' o a v1' per arrivare alle 8 del manoscritto.
- Le foglie stanno a profondità diverse (dal livello 1 al livello 4): la silhouette complessiva deve risultare triangolare/a montagna, con i rami esterni molto più lunghi di quelli interni.
- Il simbolo «$» va disegnato SUL punto terminale di ogni arco (è il carattere dell'ultimo arco), non come nodo separato; nel manoscritto è marcato con tratto più spesso e scuro rispetto agli archi, quindi conviene renderlo in nero/blu scuro mentre gli archi restano in blu più chiaro.

NIENTE etichette di carattere sugli archi, NIENTE numerazione delle foglie, NIENTE evidenziazione di nodi nel manoscritto. Opzionale (non presente nell'originale, da usare solo se migliora la leggibilità della didascalia): cerchiare il nodo branching più profondo — sarebbe v2' o v1' — con un'annotazione «nodo branching di profondità massima».

L'annotazione manoscritta che nel quaderno sta a destra del disegno («se ho il KW-tree a disposizione mi basta visitarlo e cercare il nodo branching di profondità max»), collegata da un trattino obliquo, NON va inclusa nella figura: è già resa come testo corrente subito dopo.

SIGNIFICATO ALGORITMICO: è il keyword tree di tutti i suffissi di T$, cioè il suffix trie. Ogni foglia corrisponde a un suffisso; ogni nodo branching a una sottostringa che è prefisso comune di almeno due suffissi distinti, cioè a una sottostringa ripetuta. Il nodo branching di profondità massima dà quindi la più lunga sottostringa ripetuta.
