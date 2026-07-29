# Figura `ukkonen-passo-prefissi`

- **Pagina della scansione:** 19
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Un passo dell'algoritmo di Ukkonen: dal suffix trie del prefisso $T^{i-1}$ a quello di $T^i$, leggendo il carattere $t_i$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE (modifica in cucitura): nel manoscritto il passo è indicizzato con j e il suffisso generico con i; nel capitolo cucito gli indici sono scambiati per uniformità con le pagine 20-25 — il passo corrente legge $t_i$, il suffisso generico è $T_j$. Usare quindi $t_i$, $T^{i-1}$, $T^i$ e $T_j$ come indicato sotto.

Schema a barre orizzontali che rappresenta il testo T e il modo in cui l'algoritmo lo consuma.

GEOMETRIA (unità arbitrarie, larghezza totale ~12).
- LINEA INFERIORE (spessa, tratto continuo): segmento orizzontale da x=0 a x=12, posto a y=0. È l'intero testo T. All'estremità destra, appena oltre x=12, l'etichetta 'T' in corsivo matematico (dimensione normale, non piccola).
- LINEA SUPERIORE (spessa, tratto continuo, stesso spessore della precedente): segmento orizzontale da x=3 a x=12, posto a y=0.45. Rappresenta il suffisso $T_j$. Nell'originale è disegnata leggermente ondulata, a mano libera: va bene renderla dritta.
- TACCA INIZIALE: piccolo segmento verticale a x=0, da y=-0.2 a y=+0.25, che taglia la linea inferiore (inizio del testo, posizione 1).
- TACCA IN j: segmento verticale a x=3, da y=-0.35 a y=+0.65, che taglia entrambe le linee (è l'estremo sinistro della linea superiore). Sopra la sua estremità superiore, a y~0.9, l'etichetta $T_j$. Sotto la linea inferiore, a y~-0.55, l'etichetta $j$.
- COPPIA DI TACCHE CHE ISOLA $t_i$: due segmenti verticali paralleli e ravvicinati a x=5.4 e x=5.9, entrambi da y=-0.35 a y=+1.15 (salgono chiaramente sopra la linea superiore). Fra loro c'è la cella del carattere $t_i$. Poco sopra e a destra della coppia, a circa (5.9, 0.95), l'etichetta $t_i$ con una piccola freccia o trattino che punta verso lo spazio fra le due tacche.
- GRAFFA ORIZZONTALE: graffa (decorate/brace) sotto la linea inferiore, aperta verso l'alto, che va da x=0 a x=5.4, posta a y~-0.55, cioè copre esattamente il prefisso $T^{i-1}$ (dalla posizione 1 alla posizione i-1). Nell'originale è tracciata a mano come una linea curva ampia; una brace TikZ standard è più leggibile.

RIGA DI TESTO SOTTO IL DISEGNO (a y~-1.4, allineata orizzontalmente al disegno):
  $\mathsf{STrie}(T^{i-1})$ posizionato sotto la graffa, con il suo centro circa a x=2.7 (la punta della graffa scende verso questa etichetta);
  poi una FRECCIA orizzontale (->) da circa x=5.2 a x=6.4 alla stessa altezza, con sopra l'etichetta $t_i$;
  poi $\mathsf{STrie}(T^{i})$ a partire da circa x=6.6.
Nell'originale la freccia è ondulata e parte da un piccolo gancio verticale che scende dalla tacca di sinistra della coppia: opzionalmente si può tracciare un sottile segmento verticale tratteggiato da (5.4,-0.35) a (5.4,-1.25) per collegare visivamente la tacca alla freccia.

SIGNIFICATO: la parte di testo già letta è il prefisso $T^{i-1}$, di cui si possiede il suffix trie; leggendo il carattere successivo $t_i$ si ottiene il suffix trie di $T^i$. La linea superiore ricorda che ogni suffisso $T_j$ del testo attraversa questo passo: la sua porzione $t_j \cdots t_{i-1}$ è già nel trie corrente e viene estesa con $t_i$.

STILE: tratto blu scuro o nero, linee spesse per le due barre del testo, sottili per tacche e graffa; testo in italiano/matematica come indicato.
