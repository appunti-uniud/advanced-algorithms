# Figura `lv-testo-pattern`

- **Pagina della scansione:** 48
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Il testo $T$ e il pattern $P$: si cercano le occorrenze di $P$ in $T$ a distanza di edit $\le k$.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema elementare a due segmenti orizzontali, disegnati a mano libera (nel quaderno sono leggermente ondulati; in TikZ va bene un tratto retto, eventualmente con decorazione `random steps` molto tenue).

- Segmento LUNGO: parte da x=0 e arriva a x=10 (unità arbitrarie), alla quota y=0.8; spessore medio (`thick`). Subito a destra della sua estremità destra, l'etichetta $T$ in math mode.
- Segmento CORTO: parte da x=3.1 e arriva a x=5.3 (quindi lungo circa 1/5 del primo, e collocato all'incirca sotto il terzo centrale del segmento lungo), alla quota y=0. Subito a destra della sua estremità destra, l'etichetta $P$.

Nessun'altra annotazione, nessuna freccia, nessun riquadro. Il senso è puramente illustrativo: $T$ è il testo (lungo, $m=|T|$ caratteri), $P$ è il pattern (corto, $n=|P|$ caratteri), con $|P|\ll|T|$. Nel quaderno il disegno sta subito sotto la riga «$O(m+n)$ per risolvere l'allineamento a distanza $\le k$ (costante)».

Dimensione finale suggerita: larghezza circa 0.55\textwidth, altezza minima (2 righe).
