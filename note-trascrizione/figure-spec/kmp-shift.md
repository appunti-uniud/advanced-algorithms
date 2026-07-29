# Figura `kmp-shift`

- **Pagina della scansione:** 3
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Regola di spostamento di KMP. Dopo aver riconosciuto $P[1..i]$ il confronto fallisce fra il carattere $y$ del testo e $x=P[i+1]$: il pattern scivola di $i-|\alpha|$ posizioni, fino a sovrapporre il proprio prefisso $\alpha$ all'occorrenza di $\alpha$ che in $T$ termina appena prima del mismatch. Mi sposto cioè in base al più lungo prefisso-suffisso.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema a tre barre orizzontali sovrapposte (stringhe disegnate come rettangoli lunghi e bassi), tutte attraversate da una stessa COLONNA DEL MISMATCH: un rettangolo alto e stretto, largo una cella, che parte sopra la prima barra e scende fino sotto la terza, marcando la stessa posizione di testo in tutte e tre le righe.

Sistema di coordinate consigliato (unita' = una cella di carattere; x cresce verso destra; le tre barre hanno la stessa altezza e sono equispaziate verticalmente, con circa un'altezza di barra di spazio fra l'una e l'altra):
- colonna del mismatch: x da 6 a 7 (una cella).

RIGA 1 (in alto) = il TESTO $T$.
  Rettangolo da x=0 a x=20, chiuso a sinistra e a destra; subito a destra dell'estremo destro l'etichetta $T$.
  Contenuto, da sinistra a destra:
   * x in [0, 3.5]: sotto-riquadro vuoto contenente una LINEA ONDULATA orizzontale (denota la porzione di testo gia' scandita / non specificata); a x=3.5 un trattino verticale di separazione;
   * x in [3.5, 6]: cella etichettata $\alpha$ (lettera centrata a x=4.75, dentro la barra) -- e' l'occorrenza di $\alpha$ in $T$ che termina appena prima del mismatch;
   * x in [6, 7]: cella contenente il carattere $y$ (il carattere del testo su cui avviene il mismatch);
   * x in [7, 20]: resto di $T$, vuoto.
  Sopra la cella $y$, staccata dalla barra, una FRECCIA VERTICALE che punta verso il basso, centrata a x=6.5: indica il punto di confronto corrente sul testo.

FRA RIGA 1 E RIGA 2, dentro la colonna del mismatch (x centrato a 6.5), il simbolo $\neq$: i due caratteri allineati, $y$ (in $T$) e $x=P[i+1]$ (in $P$), sono diversi.

RIGA 2 (centrale) = il PATTERN $P$ nell'allineamento corrente.
  Rettangolo da x=1 a x=12; a destra dell'estremo destro l'etichetta $P$.
  Contenuto:
   * x in [1, 3.5]: BLOCCO TRATTEGGIATO (hatching a linee oblique fitte) -- e' l'occorrenza di $\alpha$ come PREFISSO di $P$. Deve avere ESATTAMENTE la stessa larghezza della cella $\alpha$ successiva (nel manoscritto e' disegnato piu' corto: imprecisione da correggere);
   * x in [3.5, 6]: cella etichettata $\alpha$ -- occorrenza di $\alpha$ come SUFFISSO del tratto gia' riconosciuto $P[1..i]$, immediatamente prima del mismatch;
   * x in [6, 7]: cella contenente il carattere $x$ (cioe' $P[i+1]$);
   * x in [7, 12]: resto di $P$, vuoto.
  ATTENZIONE alla larghezza: perche' le due occorrenze di $\alpha$ abbiano la stessa lunghezza, il blocco tratteggiato deve andare da x=1 a x=3.5 e la cella $\alpha$ da x=3.5 a x=6 (entrambe larghe 2.5).

RIGA 3 (in basso) = il PATTERN $P$ dopo lo spostamento.
  Rettangolo da x=3.5 a x=15.5 (inizia esattamente dove inizia l'$\alpha$ della riga 1: e' il punto chiave del disegno); a destra l'etichetta $P$.
  Contenuto:
   * x in [3.5, 6]: cella etichettata $\alpha$ -- il prefisso $\alpha$ del pattern e' ora sovrapposto all'occorrenza di $\alpha$ in $T$;
   * x in [6, 7]: cella contenente il carattere $y$ (indica la POSIZIONE DEL TESTO da cui riprende il confronto -- il puntatore su $T$ non arretra -- non un carattere del pattern);
   * x in [7, 15.5]: resto di $P$, vuoto.
  Sotto la cella in x in [6,7], una FRECCIA VERTICALE che punta verso l'alto, centrata a x=6.5: il confronto riprende da qui, contro $P[|\alpha|+1]$.

ANNOTAZIONI DELLO SPOSTAMENTO (a sinistra e sotto le barre):
  * un ARCO (curva a mo' di sottolineatura) sotto la riga 2, da x=1 a x=3.5 circa, che sottolinea il blocco tratteggiato e termina con una punta di freccia rivolta verso destra;
  * da li' un ARCO TRATTEGGIATO che sale verso destra e termina con una punta di freccia sull'estremo sinistro della riga 3 (x=3.5): rappresenta lo scorrimento del pattern di $i-|\alpha|$ posizioni;
  * a sinistra, all'altezza della riga 3, l'annotazione "$\uparrow\ \alpha$" posta sotto il blocco tratteggiato, che lo etichetta come $\alpha$;
  * un ARCO analogo sotto la riga 3, da x=3.5 a x=6.5, che sottolinea la cella $\alpha$ della riga 3 e termina con una punta di freccia rivolta verso la colonna del mismatch.

Tutte le etichette sono simboliche: $T$, $P$, $\alpha$, $x$, $y$, $\neq$. Nessun'altra scritta dentro la figura (la frase manoscritta "mi sposto del piu' lungo prefisso-suffisso" e' passata in didascalia).
