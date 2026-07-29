# Figura `ac-failure-link-passo`

- **Pagina della scansione:** 14
- **Tipo:** albero (keyword tree schematico con failure link, passo ricorsivo)
- **Didascalia prevista:** Passo ricorsivo del calcolo dei failure link. Il tratto marcato sul cammino di sinistra (da $u$ a $v'$) e il cammino marcato di destra (da root a $\nv{v'}$) portano la stessa stringa $\alpha$: e la relazione $\L(\nv{v'}) = \alpha$, il piu lungo suffisso proprio di $\L(v')$ che sia anche prefisso di un pattern. Se $\nv{v'}$ possiede un arco uscente etichettato $x$, il nodo cosi raggiunto e $\nv{v}$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCOPO. Illustrare la regola ricorsiva del calcolo dei failure link in Aho--Corasick. Nell'originale e uno schizzo a mano libera: va RIDISEGNATA in versione pulita conservando la semantica, non i tremolii.

NOTAZIONE (uniformata in fase di cucitura, coincide con quella del testo del capitolo): $v'$ = PADRE, $v$ = FIGLIO, $x$ = etichetta dell'arco $v' \to v$. NON usare $w$ (nome che il quaderno usava a p.15 per lo stesso nodo) ne $\ell$ per l'etichetta.

SFONDO. Un grande triangolo (o blob a lati leggermente ondulati) che rappresenta il keyword tree $K(\mathcal{P})$: apice in alto al centro, base in basso, riempimento grigio molto chiaro / grigio-verde tenue, bordo sottile. Etichetta $K(\mathcal{P})$ appoggiata all'esterno del lato destro, in basso. All'apice un pallino pieno con etichetta root sopra di esso.

CAMMINO DI SINISTRA (radice -> $v$). Dalla radice scende verso il basso-sinistra una linea leggermente sinuosa (una spline con 3-4 punti di controllo, NON una retta), che raggiunge circa il 75% dell'altezza del triangolo sul lato sinistro. Su di essa, dall'alto verso il basso:
  - a circa 1/3 della sua lunghezza, un nodo intermedio $u$ segnato con un piccolo trattino trasversale (perpendicolare alla linea) ed etichettato $u$ a sinistra;
  - il tratto da $u$ fino al nodo successivo e EVIDENZIATO: linea molto piu spessa, colore d'accento (arancio o giallo carico), disegnata sotto la linea nera. Accanto a questo tratto, sul lato esterno (sinistra), una graffa (decoration brace) o semplicemente l'etichetta $\alpha$ in corsivo matematico;
  - alla fine del tratto evidenziato, il nodo $v'$: trattino trasversale spesso, etichetta $v'$ a sinistra;
  - da $v'$ la linea prosegue verso il basso con un arco etichettato $x$ (etichetta $x$ scritta a sinistra dell'arco, a meta) fino al nodo $v$: altro trattino trasversale spesso, etichetta $v$ a sinistra;
  - sotto $v$ la linea continua per un breve tratto e si interrompe (l'albero prosegue): eventualmente sfumata o con puntini.

CAMMINO DI DESTRA (radice -> $n_{v'}$ -> $n_v$). Dalla radice scende verso il basso-destra una seconda linea sinuosa, molto piu corta della prima (deve risultare visibilmente meno profonda: e un suffisso proprio!). Il cammino dalla radice fino a $n_{v'}$ e EVIDENZIATO PER INTERO con lo STESSO stile/colore usato per il tratto $u \to v'$ di sinistra, ed e etichettato anch'esso $\alpha$ (sul lato esterno destro). Poi:
  - alla fine dell'evidenziazione, il nodo $n_{v'}$: trattino trasversale spesso, etichetta $n_{v'}$ posta in alto a destra del nodo;
  - da $n_{v'}$ scende verso il basso-destra un arco etichettato $x$ (etichetta $x$ a destra dell'arco) fino al nodo $n_v$: trattino trasversale, etichetta $n_v$ a destra;
  - sotto $n_v$ la linea continua per un breve tratto e si interrompe;
  - da $n_{v'}$ esce anche un secondo moncone d'arco, corto, verso destra/alto-destra, etichettato $y$, con accanto in piccolo «$y \neq x$»: serve a ricordare che fra i figli di $n_{v'}$ va CERCATO quello etichettato $x$. (Nell'originale sono due tratti staccati di lettura incerta: renderli come UN solo moncone e sufficiente.)

FAILURE LINK. Una freccia TRATTEGGIATA con punta triangolare piena (-{Triangle[fill]}) va da $v'$ a $n_{v'}$, attraversando l'interno del triangolo in diagonale dal basso-sinistra verso l'alto-destra. Etichetta lungo la freccia, ruotata o appoggiata sopra: «failure link (noto)». Colore: rosso o blu scuro, comunque diverso dal colore di evidenziazione.

FAILURE LINK DA CALCOLARE (aggiunta esplicativa, non presente nell'originale). Una seconda freccia tratteggiata, piu tenue / di colore piu chiaro, da $v$ a $n_v$, parallela alla prima e leggermente piu in basso, con etichetta «failure link cercato».

ATTENZIONE AL LAYOUT. (i) $v$ deve stare piu in basso di $v'$, e $n_v$ piu in basso di $n_{v'}$: la profondita cresce verso il basso. (ii) depth($n_{v'}$) < depth($v'$) e depth($n_v$) < depth($v$): i nodi di destra vanno sensibilmente piu in alto dei corrispondenti di sinistra. (iii) I due tratti etichettati $\alpha$ devono avere lunghezza visivamente uguale. (iv) I due archi etichettati $x$ devono avere la stessa lunghezza e la stessa inclinazione relativa, cosi che il parallelismo fra i due lati della regola sia evidente a colpo d'occhio. (v) Tutto il testo in italiano; le etichette matematiche in math mode ($v'$, $v$, $x$, $y$, $n_{v'}$, $n_v$, $u$, $\alpha$, $K(\mathcal{P})$, root).

Riferimento nel capitolo: fig:ac-failure-link-passo, sottosezione «Calcolo dei failure link».
