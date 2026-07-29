# Figura `kmp-alfa-S`

- **Pagina della scansione:** 4
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Per ogni prefisso $S_i=S[1..i]$ si cerca il massimo $\alpha$ che ne sia al tempo stesso prefisso e suffisso: $\alpha$ compare una volta in testa a $S$ e una volta in coda a $S_i$, terminando in posizione $i$, e $|\alpha|=sp_i(S)$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

FIGURA CONSOLIDATA: fonde i due disegni gemelli del manoscritto (lo stesso schema tracciato una volta su $P$ e una volta su $S$) e recupera da un terzo disegno (p.8) le etichette numeriche di posizione. Va disegnata UNA VOLTA SOLA, sulla stringa generica $S$.

(1) Una lunga linea orizzontale spessa che rappresenta $S$, da x=0 a x=10, con tacca verticale corta all'estremo sinistro (posizione 1) e etichetta '$S$' in tondo subito a destra dell'estremo destro.
(2) Tacche verticali che attraversano la linea (sono CONFINI fra caratteri, non posizioni) a: x=0, x=1.6, x=2.0, x=3.6.
(3) Sopra la linea, due graffe orizzontali rivolte verso il basso, della STESSA larghezza (1.6 unita'), entrambe etichettate '$\alpha$' al centro sopra la graffa: la prima da x=0 a x=1.6 (occorrenza come PREFISSO di $S$), la seconda da x=2.0 a x=3.6 (occorrenza come SUFFISSO di $S_i$, che termina esattamente in $i$). Le due graffe devono risultare visibilmente identiche in larghezza: e' il punto della figura.
(4) Etichette sotto la linea, in matematica, sotto le tacche corrispondenti: '$1$' sotto x=0, '$sp_i(S)$' sotto x=1.6, '$i-sp_i(S)$' sotto x=2.0, '$i$' sotto x=3.6. Se lo spazio e' poco si possono omettere le due centrali, ma $1$ e $i$ vanno tenute.
(5) Sotto la linea e sotto le etichette, una terza graffa rivolta verso l'alto che va da x=0 a x=3.6, etichettata sotto con la formula '$S_i = S[1..i]$'.

SIGNIFICATO: $\alpha$ e' il massimo prefisso-suffisso proprio (bordo) del prefisso $S_i$; compare una volta all'inizio e una volta in coda, terminando in $i$, e la sua lunghezza e' $sp_i(S)$. Lo shift di KMP dopo un mismatch in $i+1$ vale $i-sp_i(S)$, cioe' la distanza fra l'inizio di $S$ e l'inizio della copia destra di $\alpha$.

STILE: tutto in italiano/matematico, monocromatico coerente con il resto del documento, larghezza ~0.75\\textwidth, altezza contenuta. NON riprodurre l'abbozzo a matita che nel manoscritto sta a destra di questo disegno ('sol(i)=s', 'sol(i)=1+sol(i-1) if S[').
