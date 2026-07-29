# Figura `kmp-bordo-del-bordo`

- **Pagina della scansione:** 4
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Il passo ricorsivo: $\alpha$ è il massimo prefisso-suffisso di $S_{i-1}$ e $\beta$ è il massimo prefisso-suffisso di $\alpha$. Nel disegno $S[i]=a \ne b=S[k+1]$, quindi $\alpha$ non si estende e si ricade su $\beta$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema a tre livelli sopra un'unica linea di base.

LINEA DI BASE: linea orizzontale spessa che rappresenta $S$, da x=0 a x=13, con l'estremo destro aperto (la stringa prosegue); tacca corta a x=0 (posizione 1).

LIVELLO 1 (subito sopra la linea, ~0.35 di altezza): due segmenti orizzontali con tacca verticale a entrambi gli estremi, della STESSA lunghezza (4 unita'), entrambi etichettati '$\alpha$' sopra il segmento, verso la sua meta'/destra:
 - alpha sinistro da x=0 a x=4 (occorrenza come PREFISSO di $S$);
 - alpha destro da x=6 a x=10 (occorrenza come SUFFISSO di $S_{i-1}$: termina in posizione $i-1$).

CELLE DI UN CARATTERE: subito a destra di ciascun alpha, una piccola cella quadrata (larghezza 0.8, altezza ~0.5) appoggiata sulla linea di base, delimitata da due tratti verticali e contenente una lettera in tondo:
 - cella [4.1, 4.9] contenente 'b' = il carattere $S[k+1]$ che segue la copia-prefisso di alpha (dove $k=|\alpha|=sp_{i-1}(S)$);
 - cella [10.1, 10.9] contenente 'a' = il carattere $S[i]$.
ATTENZIONE: a bassa risoluzione questi due glifi sembrano etichette 'b1'/'a1'; sono in realta' due celle quadrate di un carattere ciascuna, delimitate da tratti verticali.

ETICHETTE SOTTO LA LINEA: '$i-1$' centrata sotto l'ultima cella dell'alpha destro (circa x=9.6, con una tacchetta verticale corta che attraversa la linea); '$i$' centrata sotto la cella che contiene 'a' (circa x=10.5). Le tacche stanno sotto le CELLE, non sotto i trattini di separazione.

LIVELLO 2 (sopra il livello 1, ~0.75 di altezza): due segmenti piu' corti (lunghezza 2 unita') con tacche agli estremi, entrambi etichettati '$\beta$' sopra:
 - beta sinistro allineato all'INIZIO dell'alpha sinistro, da x=0 a x=2 (beta e' prefisso di alpha);
 - beta destro allineato alla FINE dell'alpha destro, da x=8 a x=10 (beta e' suffisso di alpha).
Sopra l'estremo destro del beta destro, una piccola freccia verso il basso che marca il punto da cui riprende il confronto nel passo ricorsivo.

SIGNIFICATO: alpha e' il massimo prefisso-suffisso di $S_{i-1}=S[1..i-1]$ (quindi $k=|\alpha|=sp_{i-1}(S)$) e beta e' il massimo prefisso-suffisso (bordo) di alpha. Se $S[i]$ coincide con il carattere che segue la copia-prefisso di alpha (cioe' $a=b$) si estende, caso 1; qui $a\neq b$, quindi si ricade su beta e si confronta $S[i]$ con $S[|\beta|+1]$, caso 2.

NOTA PER IL DISEGNATORE: nel manoscritto il beta della copia destra e' disegnato piu' vicino all'inizio che alla fine di alpha; e' stato NORMALIZZATO a suffisso perche' e' l'unica collocazione coerente con la matematica (beta e' bordo di alpha, quindi suffisso di $S_{i-1}$). Tutte le etichette testuali in italiano.
