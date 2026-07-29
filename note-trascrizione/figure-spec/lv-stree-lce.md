# Figura `lv-stree-lce`

- **Pagina della scansione:** 48
- **Tipo:** albero (suffix tree schematizzato a triangolo)
- **Didascalia prevista:** Nello \STree di $S_1\,\text{\$}\,S_2\,\text{\texteuro}$, la stringa $\beta$ letta dalla radice fino a un nodo interno è l'estensione comune ai due suffissi che scendono dai due rami sottostanti.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Suffix tree generalizzato di $S_1\,\$\,S_2\,\texteuro$, disegnato — come sempre nel corso — come un TRIANGOLO con l'apice in alto (la radice) e la base in basso (il livello delle foglie).

SAGOMA
- Triangolo di vertici: apice $R=(0,4)$ (radice), base da $(-3.4,0)$ a $(3.4,0)$. Il lato sinistro e il lato destro sono tracciati a mano libera (leggermente convessi/ondulati), la base è una linea orizzontale ondulata. Tratto medio, nessun riempimento.

CAMMINO $\beta$ (radice → nodo interno)
- Dalla radice $R$ scende, quasi verticalmente e con andamento leggermente ondulato, un arco fino al NODO INTERNO $v$ posto circa in $(0.05,1.9)$ (cioè poco sotto la metà dell'altezza, sull'asse del triangolo). Il nodo $v$ va marcato con un pallino pieno ben visibile (`circle, fill, inner sep=1.6pt`).
- L'etichetta $\beta$ va scritta a DESTRA di questo arco, all'incirca a metà strada fra $R$ e $v$, cioè attorno a $(0.55,3.0)$. È la stringa che si legge lungo il cammino radice→$v$.

DUE RAMI SOTTO $v$
- Da $v$ scendono due archi (anch'essi con andamento a mano libera, leggermente ondulato) fino alla base del triangolo:
  * ramo SINISTRO: da $v$ a circa $(-0.9,0)$, dove termina in una foglia marcata (pallino pieno o piccolo trattino sulla base);
  * ramo DESTRO: da $v$ a circa $(0.9,0)$, dove termina in una foglia marcata.
- Etichette suggerite sotto le due foglie (NON presenti nel quaderno, ma coerenti con il disegno di p.49 e utili alla lettura): $\suf{S_1}{i}$ sotto la foglia sinistra e $\suf{S_2}{j}$ sotto la foglia destra, in corpo piccolo. Se si preferisce restare aderenti al manoscritto, si possono omettere.

SIGNIFICATO ALGORITMICO: $v$ è l'antenato comune più profondo (lca) delle due foglie corrispondenti ai suffissi $S_1[i..]$ e $S_2[j..]$; la stringa $\beta$ letta dalla radice a $v$ è la loro estensione comune massima, e la sua lunghezza (string-depth di $v$) è il $k$ cercato dalla LCE. Questo è detto esplicitamente nel testo che segue: nella figura non va scritto.

DIFFERENZIARE DA `lce-lca`: questa figura serve solo a dire «ogni nodo è un prefisso di un suffisso, e $\beta$ è l'estensione comune»; la riduzione alla query di lca è invece il contenuto di `lce-lca`. Tenere questa più schematica e spoglia (nessuna barra della stringa concatenata, nessuna graffa $k$).

ANNOTAZIONI A DESTRA (nel quaderno stanno fuori dal triangolo; sono già riportate nel testo, quindi NON vanno duplicate nella figura). Per riferimento: «$\beta$ prefisso di un suffisso» all'altezza dell'apice, e «posso etichettare l'albero indicando i prefissi di suffissi che occorrono sia in $S_1$ che $S_2$» in basso.

Dimensione finale suggerita: larghezza circa 0.55\textwidth.
