# Figura `ukkonen-refpair-f`

- **Pagina della scansione:** 25
- **Tipo:** albero (frammento di suffix tree con coppia di riferimento)
- **Didascalia prevista:** Il suffix link letto sulle coppie di riferimento: lo stato $s'$ è rappresentato da $(s,[k,p])$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Figura in due parti: a sinistra una scritta simbolica, a destra un frammento di albero. Stesse convenzioni grafiche della figura precedente (tratto ondulato = cammino eliso; pallino pieno = stato/foglia).

PARTE SIMBOLICA (in alto a sinistra):
- La lettera $f$ in corsivo matematico.
- Subito sotto/a destra, una freccia curva ampia che sale da sinistra verso destra (concavità verso l'alto) e termina, con punta a V aperta, immediatamente prima della scritta $(s,[k,p])$, posta in alto a destra della freccia. Nel manoscritto la coppia è scritta con parentesi tonde, $(s,(k,p))$: uniformare a $(s,[k,p])$.

FRAMMENTO DI ALBERO (a destra, sotto e a destra della scritta):
- In alto un PALLINO PIENO piccolo con l'etichetta $s$ scritta sopra a destra: il nodo esplicito.
- Da $s$ parte verso DESTRA un tratto ONDULATO quasi orizzontale, lungo ~3 cm, che si interrompe nel vuoto: sottoalbero eliso.
- Da $s$ scende verso il basso un tratto ONDULATO lungo ~2,5 cm. Subito sotto $s$, sul tratto, un TRATTINO SPESSO TRASVERSALE (marca il primo carattere dell'etichetta dell'arco); a sinistra del trattino l'etichetta $t_k$.
- Il tratto ondulato termina in un PALLINO PIENO: lo stato $s'$. L'etichetta $s'$ è scritta a sinistra del pallino; a destra del pallino la scritta $[k,p]$ (nel manoscritto $(k,p)$).
- Una freccia con lunga CODA ONDULATA orizzontale arriva da SINISTRA (entra da fuori figura, lunga ~5 cm) e termina con una vistosa PUNTA PIENA TRIANGOLARE puntata esattamente su $s'$: è il puntatore che collega la scritta simbolica al disegno.
- Da $s'$ scende verso il basso-SINISTRA un tratto ONDULATO lungo ~2,5 cm che si interrompe nel vuoto: sottoalbero già esistente, eliso.
- Da $s'$ parte verso il basso-DESTRA un SEGMENTO RETTILINEO lungo ~2,5 cm, etichettato $t_i$ (etichetta a destra, a metà del segmento), che termina in un PALLINO PIENO: la nuova foglia creata.

SIGNIFICATO ALGORITMICO da preservare: dopo aver seguito il suffix link si atterra nello stato $s'$, che la coppia di riferimento descrive come $(s,[k,p])$: $s$ è il nodo esplicito da cui si riparte, $t_k$ il primo carattere dell'arco uscente (unico carattere necessario per scegliere la transizione), $[k,p]$ la porzione di testo ancora da percorrere. Anche in $s'$ si innesta il nuovo arco etichettato $t_i$.
