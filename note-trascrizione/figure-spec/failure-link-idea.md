# Figura `failure-link-idea`

- **Pagina della scansione:** 13
- **Tipo:** albero (schema del keyword tree con un failure link)
- **Didascalia prevista:** Idea del failure link. Se la discesa si blocca nel nodo $v$, si salta al nodo $\nv{v}$, la cui etichetta di cammino $\alpha$ e il piu lungo suffisso proprio dell'etichetta di cammino di $v$ che sia ancora un cammino dalla radice in $K(\mathcal{P})$: la porzione di testo gia riconosciuta resta allineata e il puntatore su $T$ non arretra.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema del keyword tree con il failure link (schizzo a mano libera nel quaderno, da rendere pulito).

GEOMETRIA GENERALE. Un grande triangolo isoscele con l'apice IN ALTO al centro (l'apice e la radice di K(P)); i due lati scendono verso il basso-sinistra e il basso-destra; la base e aperta oppure tracciata leggera. Il triangolo rappresenta il keyword tree $K(\mathcal{P})$: etichettarlo con «$K(\mathcal{P})$» in alto a sinistra fuori dal triangolo, oppure appena sotto l'apice. Nel manoscritto i lati sono tracciati con linea ondulata/a mano libera; una resa con decorate[decoration=snake] o semplicemente con linee dritte va bene, purche il triangolo sia riconoscibile.

CONTENUTO INTERNO (due cammini + un link).

1) CAMMINO SINISTRO (radice -> v). Dalla radice (apice) parte una spezzata leggermente ondulata che scende verso il basso-sinistra e termina nel nodo $v$, posto in basso a sinistra all'interno del triangolo, vicino al vertice inferiore sinistro (nel manoscritto e a circa il 25% della larghezza e all'85% dell'altezza del triangolo). Il nodo $v$ e un PALLINO PIENO. A circa meta di questo cammino c'e un secondo PALLINO PIENO, il nodo intermedio $u$ (nel manoscritto e il puntino scuro al centro del disegno, sul tratto diagonale che scende dall'apice). Il tratto $u \to v$, cioe la PARTE FINALE del cammino radice->$v$, e quello etichettato con «$\alpha$»: mettere la $\alpha$ accanto/sopra questo tratto (nel manoscritto la $\alpha$ e scritta in alto a sinistra, sopra la parte bassa del cammino). Facoltativo ma utile: rendere il tratto $u \to v$ piu spesso o evidenziato (nel manoscritto quella zona e ripassata) e/o affiancarlo con una graffa decorate[decoration=brace] che porti l'etichetta $\alpha$.

2) CAMMINO DESTRO (radice -> n_v). Dalla radice parte una seconda spezzata ondulata che scende verso il basso-destra e termina nel nodo $n_v$, posto nella meta destra del triangolo a una profondita MINORE di quella di $v$ (nel manoscritto: circa il 75% della larghezza e il 60% dell'altezza; e essenziale che $n_v$ stia PIU IN ALTO di $v$, perche depth(n_v) < depth(v)). Il nodo $n_v$ e un PALLINO PIENO; nel manoscritto e marcato da una crocetta «×» sovrapposta — si puo rendere come pallino pieno, oppure come pallino con una × accanto. L'INTERO cammino radice -> $n_v$ e etichettato «$\alpha$»: mettere la $\alpha$ accanto alla parte alta di questo cammino (nel manoscritto e scritta in alto a destra, appena fuori dal cammino). Anche qui e utile una graffa lungo tutto il cammino radice->$n_v$ con etichetta $\alpha$, per far vedere che le due $\alpha$ sono la stessa stringa.

3) FAILURE LINK. Una FRECCIA TRATTEGGIATA che parte da $v$ (in basso a sinistra) e arriva a $n_v$ (a destra, piu in alto), con punta piena su $n_v$. Nel manoscritto e una linea a trattini lunghi con una grossa punta triangolare piena in prossimita di $n_v$. Etichettarla «failure link» (testo in corsivo, posto sopra o sotto la parte centrale della freccia). La freccia attraversa l'interno del triangolo.

ETICHETTE DEI NODI (assenti nel manoscritto, da aggiungere): «$v$» sotto/a sinistra del pallino in basso a sinistra; «$n_v$» sotto/a destra del pallino di destra; «$u$» opzionale sul nodo intermedio del cammino sinistro (si puo anche omettere e lasciare solo il pallino). «root» accanto all'apice.

SEMANTICA DA COMUNICARE. Le due $\alpha$ sono la stessa stringa: $\alpha = \mathcal{L}(n_v)$ e il piu lungo suffisso proprio di $\mathcal{L}(v)$ che sia ancora l'etichetta di un cammino dalla radice in $K(\mathcal{P})$ (equivalentemente: il piu lungo suffisso di quanto gia letto che sia anche prefisso di almeno un pattern). Quando la discesa si blocca in $v$, il failure link porta in $n_v$ senza far arretrare il puntatore sul testo, perche la coda del testo gia riconosciuto coincide gia con $\alpha$.

DIMENSIONI SUGGERITE: larghezza circa 8 cm, altezza circa 5 cm. Colori: tutto in nero/grigio scuro, con eventuale accento (colore della classe) sui due tratti etichettati $\alpha$ e sulla freccia tratteggiata. Testo in italiano. Riferimento nel capitolo: fig:failure-link-idea, sezione «I failure link».
