# Figura `lca-b-array-bit`

- **Pagina della scansione:** 34
- **Tipo:** schema di stringhe
- **Didascalia prevista:** I path number di $x$, $y$ e $z=\lca_{\B}(x,y)$ visti come array di bit. La colonna evidenziata è la prima in cui $x$ e $y$ differiscono: lì cade esattamente il terminatore di $z$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ATTENZIONE — NOTAZIONE AGGIORNATA IN CUCITURA: le tre righe, nel manoscritto etichettate «p.n. di i», «p.n. di j», «p.n. di k», vanno etichettate «p.n. di $x$», «p.n. di $y$», «p.n. di $z$».

Tre array di bit orizzontali, allineati, uno sotto l'altro, con spaziatura verticale ampia. Ciascun array è un segmento orizzontale spesso con due barrette verticali agli estremi (delimitatori), suddiviso internamente da brevi tacche verticali che separano le celle. Il contenuto di ogni cella è scritto SOPRA il segmento.

Tutti e tre gli array hanno la stessa lunghezza (= $d+1$ bit) e sono allineati a sinistra e a destra.

Etichette di riga, sopra e a sinistra di ciascun array: riga 1 «p.n. di $x$», riga 2 «p.n. di $y$», riga 3 «p.n. di $z$».

Contenuto delle celle (da sinistra a destra):
- riga 1 ($x$): cella LUNGA etichettata $\alpha$ | cella STRETTA con «0» | cella LUNGA vuota (bit arbitrari) | cella STRETTA con «1» | cella LUNGA con «0» (sta per 0…0).
- riga 2 ($y$): cella LUNGA etichettata $\beta$ | cella STRETTA con «1» | cella LUNGA vuota | cella STRETTA con «1» | cella LUNGA con «0».
- riga 3 ($z$): cella LUNGA etichettata $\gamma$ | cella STRETTA con «1» | cella LUNGA con «0» (fino alla fine dell'array).

CORREZIONE RISPETTO AL MANOSCRITTO: nel quaderno la cella stretta di divergenza contiene «1» in ENTRAMBE le righe 1 e 2; è un errore, i due bit devono differire. Qui: 0 per $x$, 1 per $y$ (convenzione $x<y$).

Allineamento verticale: due linee verticali sottili TRATTEGGIATE che scendono attraverso le tre righe delimitando a sinistra e a destra la cella stretta di divergenza delle righe 1 e 2 e, sulla riga 3, la cella stretta che contiene il terminatore «1» di $z$. Sono queste linee a dire il punto chiave: la colonna di divergenza di $x$ e $y$ è esattamente la colonna del terminatore di $z$.

Sotto l'array della riga 2, una graffa orizzontale che abbraccia la sola prima cella lunga, con etichetta $\gamma$ e una freccetta verso la colonna di divergenza: indica che $\alpha$ e $\beta$ coincidono fin lì e che quella parte comune è $\gamma$ (il cammino radice$\to z$).

Opzionale, coerente con il testo: annotare a destra della colonna evidenziata la posizione $\ell$ (contata da destra).
