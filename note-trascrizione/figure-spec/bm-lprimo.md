# Figura `bm-lprimo`

- **Pagina della scansione:** 11
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Lettura grafica della definizione di $L'(i)$: la stessa stringa $\sub{P}{i}{n}$ compare due volte in $P$ --- come suffisso e come occorrenza interna che termina in $L'(i)$ --- e i due caratteri che la precedono sono diversi.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE: rispetto alla specifica prodotta sulla singola pagina il carattere che precede l'OCCORRENZA INTERNA è etichettato $z$ e non $x$, perché nel capitolo la lettera $x$ è riservata al carattere di $T$ che provoca il mismatch. Il carattere in posizione $i-1$ resta $y$ (coerente con la figura bm-mismatch, dove $y=P[i-1]$). La condizione da rendere evidente è $z\neq y$.

Schema lineare su una sola riga. Elemento base: una RETTA ORIZZONTALE spessa (colore accento del tema) che rappresenta l'intero pattern P, lunga circa 12 cm, con una piccola punta di freccia all'estremità destra e l'etichetta $P$ subito a destra della punta. Coordinate relative lungo la retta: 0 = posizione 1 (estremo sinistro), 1 = posizione n (estremo destro).

TACCHE (segmentini verticali che attraversano la retta, alti ~3 mm) alle ascisse relative: t1 = 0.16, t2 = 0.22, t3 = 0.56, t4 = 0.68, t5 = 0.74.

CONTENUTO, da sinistra a destra:
1) Nella cella fra t1 e t2 è scritto il carattere $z$ (leggermente SOPRA la retta, centrato nella cella). Sotto la retta, in corrispondenza di quella cella, l'etichetta $L'(i)-(n-i)-1$ (testo piccolo, centrato sotto la cella).
2) Da t2 a t3 un SEGMENTO parallelo alla retta, disegnato SOPRA di essa (a ~4 mm di altezza), con due trattini verticali alle estremità: è l'occorrenza interna di $\sub{P}{i}{n}$ dentro $\sub{P}{1}{L'(i)}$. Si può renderla come barretta piena/grigia.
3) Sotto la retta, in corrispondenza di t3, l'etichetta $L'(i)$.
4) Nella cella fra t4 e t5 è scritto il carattere $y$ (sopra la retta, centrato nella cella). Sotto la retta, sotto quella cella, l'etichetta $i-1$; sotto t5 l'etichetta $i$. (Nel manoscritto compare solo l'etichetta $i$ e la cella di $y$ è attaccata alla tacca $L'(i)$: le due zone vanno separate e va aggiunta $i-1$ per chiarezza, così che il disegno risulti generico e non suggerisca $L'(i)=i-2$.)
5) Da t5 fino all'estremo destro della retta (ascissa 1) un SECONDO SEGMENTO sopra la retta, alla stessa altezza del primo e della STESSA LUNGHEZZA (le due barre devono risultare visibilmente uguali: rappresentano la stessa stringa), con trattini verticali alle estremità; sopra di esso, centrata, l'etichetta $\sub{P}{i}{n}$.
6) Un ARCO (curva piatta o graffa rovesciata, tratteggiata) che parte da sopra il carattere $z$ e arriva sopra il carattere $y$, passando ben al di sopra dei due segmenti; al centro dell'arco, sopra, il simbolo $\neq$.
7) Opzionali (presenti negli appunti del docente e utili alla leggibilità): due graffe SOTTO la retta, quella di sinistra da 0 a t3 etichettata $\sub{P}{1}{L'(i)}$, quella di destra da t5 alla fine etichettata $\sub{P}{i}{n}$.

Significato da rendere evidente: le due barre sono la stessa stringa (il suffisso già riconosciuto e la sua ulteriore occorrenza interna), mentre i due caratteri che le precedono sono diversi — cioè esattamente le condizioni 1) e 2) della definizione di $L'(i)$. Nota di lettura del manoscritto: l'etichetta all'estremità destra della retta è vergata come una «D» ma è una $P$ (nella figura bm-nj la stessa etichetta è una P inequivocabile); il carattere nella cella $i-1$ è una macchia d'inchiostro illeggibile.
