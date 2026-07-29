# Figura `av-bitvector`

- **Pagina della scansione:** 37
- **Tipo:** schema di stringhe (vettore di bit / parola di macchina)
- **Didascalia prevista:** Il vettore di bit $A_v$: un $1$ in posizione $i$ significa che esiste un antenato $w$ di $v$ che viene mappato ad altezza $i$ in $\B$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

NOTA DI CUCITURA: nel capitolo l'array è indicizzato con le parentesi quadre, $A_v[i]$ (nel manoscritto di p.37 erano tonde). Se in figura compare l'indice, usare la forma con le quadre.

DISEGNO ORIGINALE: una sola parola di macchina disegnata come rettangolo orizzontale, con etichetta a sinistra e una freccia verso il basso con glossa.

LAYOUT.
1) A sinistra, fuori dal rettangolo e allineata verticalmente al suo centro, l'etichetta matematica $A_v$.
2) A destra dell'etichetta, distanziata di circa 1 cm, un rettangolo orizzontale lungo e basso (rapporto circa 7:1, es. 7,5 cm x 1,1 cm), a linea singola marcata; disegnarlo chiuso e regolare.
3) Il rettangolo è diviso da segmenti verticali interni a tutta altezza in celle. Da SINISTRA (bit più significativi) a DESTRA (bit meno significativi):
   - CELLA 1, larga circa metà del rettangolo: NON contiene cifre ma una LINEA ONDULATA orizzontale (3-4 ondulazioni) che significa «bit qualsiasi»;
   - separatore verticale;
   - CELLA 2, stretta: contiene la cifra 1 (evidenziata: è il bit su cui punta la freccia);
   - separatore verticale;
   - CELLA 3, stretta: contiene una PICCOLA ONDULAZIONE (una tilde), di nuovo «bit qualsiasi»;
   - separatore verticale;
   - CELLA 4, stretta: cifra 1; CELLA 5, stretta: cifra 0; CELLA 6, stretta (ultima, addossata al bordo destro): cifra 0.
   Il gruppo finale «1 0 0» rappresenta l'1 più a destra di $A_v$ seguito da zeri (posizione $h(I(v))$).
4) SOTTO la CELLA 2 (quella con l'1 evidenziato), una FRECCIA VERTICALE che parte dal bordo inferiore del rettangolo e punta verso il basso, lunga circa 1 cm, con punta piena.
5) SOTTO la freccia, allineato con essa, il testo in due righe (font testo, italiano):
      «significa che esiste $w$ antenato di $v$ che mappa»
      «ad altezza $i$».

SEMANTICA: il rettangolo è UNA PAROLA di $\lceil\log n\rceil$ bit; i bit sono numerati DA DESTRA a partire da 1. La cella indicata dalla freccia è la posizione $i$; $A_v[i]=1$ codifica l'esistenza di un antenato $w$ di $v$ in $\T$ con $h(I(w))=i$, cioè un antenato che la mappa $I$ manda su un nodo di $\B$ di altezza $i$. Si può aggiungere sotto la cella puntata dalla freccia la piccola etichetta «$i$».

DA NON RIPRODURRE: sopra l'estremità destra del rettangolo, nell'originale, c'è una scritta a matita quasi cancellata leggibile come «h(v)»; e più in basso nella pagina uno scarabocchio a matita (grafo con nodi cerchiati e la sequenza 5 4 3 2 1 0). Sono residui cancellati.
