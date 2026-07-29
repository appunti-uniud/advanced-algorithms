# Figura `p87-ritorno-arco`

- **Pagina della scansione:** 87
- **Tipo:** schizzo concettuale (cammino di una passeggiata aleatoria su un grafo)
- **Didascalia prevista:** Il ritorno nello stato $(u,v)$ della catena sugli archi orientati: dopo la prima traversata di $u \to v$ la passeggiata vaga per il grafo, rientra in $u$ e attraversa una seconda volta $u \to v$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schizzo a mano libera, molto informale, che illustra il primo ritorno nello stato $(u,v)$ della catena di Markov sugli archi orientati.

ELEMENTI (posizioni relative come nel quaderno):
1. Due vertici disegnati come pallini pieni: $u$ in basso a sinistra, $v$ in alto a destra di $u$, a distanza breve (circa 1,2 cm nel quaderno) e leggermente più in alto. Etichette in corsivo matematico: $u$ scritta appena sopra/a sinistra del suo pallino, $v$ scritta appena sopra il suo pallino.
2. Un arco orientato rettilineo da $u$ a $v$, con punta di freccia su $v$. Nel quaderno il tratto è ripassato/sdoppiato e si intravedono DUE punte di freccia verso $v$: va reso come due archi paralleli molto ravvicinati che vanno entrambi da $u$ a $v$ (la prima e la seconda traversata dell'arco). Suggerimento: due archi leggermente curvi, uno sopra e uno sotto la congiungente, etichettati (in italiano, carattere piccolo) «1a traversata» e «2a traversata».
3. Una grande curva chiusa irregolare, tracciata a mano libera con andamento ondulato e nessuna simmetria (una «patata» alta circa 2,5 cm e larga 2,5 cm), che parte da $v$, si sviluppa verso destra e verso il basso occupando lo spazio a destra e sotto i due vertici, e rientra in $u$. Nel quaderno le curve sono DUE, annidate/intrecciate (una esterna e una interna che ricalca approssimativamente la stessa forma), a suggerire il vagabondaggio prolungato della passeggiata prima del rientro. Renderne almeno due, con partenza da $v$ e arrivo su $u$, e una punta di freccia sull'estremo che entra in $u$.
4. Nessun altro vertice o arco è disegnato: il grafo resta implicito, le curve rappresentano il cammino della passeggiata, non archi del grafo.

STILE: tratto continuo, morbido, deliberatamente irregolare (decorate/random steps o curve di Bézier con punti di controllo sparsi); niente griglia, niente assi. Colore unico (nero o il colore d'accento del documento). Le curve del vagabondaggio possono essere leggermente più chiare/sottili dell'arco $u \to v$, che è invece il tratto marcato.

ETICHETTA A MARGINE (facoltativa, a destra del disegno): «$h_{(u,v),(u,v)}$» seguita da un segno di uguale verticale (‖) e dal testo «prima visita di $(u,v)$ seguita da una seconda visita di $(u,v)$». Può essere omessa, dato che il testo del capoverso e la didascalia la ripetono. Se resa, va scritta in italiano e con la notazione corretta $h_{(u,v),(u,v)}$ (il quaderno scrive per svista $h_{u,v}$).

SIGNIFICATO: la figura visualizza la decomposizione $h_{(u,v),(u,v)} \ge h_{v,u} + h_{u,v}$: il tratto ondulato da $v$ a $u$ è il primo ritorno in $u$ (costo medio $h_{v,u}$), l'arco $u \to v$ è ciò che serve per rivedere lo stato $(u,v)$ (costo medio almeno $h_{u,v}$).

Etichetta LaTeX nel capitolo: fig:ritorno-arco. La figura è collocata SUBITO DOPO il box della dimostrazione e richiamata dal testo con «Figura~\ref{fig:ritorno-arco}».
