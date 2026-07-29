# Figura `dp-stencil`

- **Pagina della scansione:** 43
- **Tipo:** matrice DP / schema di transizioni (stencil in avanti)
- **Didascalia prevista:** Le tre transizioni elementari della ricorsione: dalla coppia di indici $(i,j)$ si passa a $(i+1,j)$ (avanza solo $\sigma_1$: cancellazione), a $(i,j+1)$ (avanza solo $\sigma_2$: inserzione) oppure a $(i+1,j+1)$ (avanzano entrambe: match o sostituzione).
- **Ritenuta fattibile in TikZ:** True

## Specifica

Stencil «in avanti» della programmazione dinamica per l'allineamento. Nell'originale e tracciato a matita, molto schematico e senza cornice.

ATTENZIONE - CORREZIONE EDITORIALE OBBLIGATORIA: nel manoscritto gli assi sono SCAMBIATI rispetto a tutte le altre figure del capitolo (li l'etichetta i+1 sta sulla freccia orizzontale e j+1 su quella verticale). Nella ricostruzione va usata la convenzione standard, adottata in tutto il capitolo: l'indice $i$ (righe, su $\sigma_1$) cresce verso il BASSO, l'indice $j$ (colonne, su $\sigma_2$) cresce verso DESTRA. Quindi l'etichetta $i+1$ va sulla freccia VERTICALE e $j+1$ su quella ORIZZONTALE.

ELEMENTI:
1. Una CELLA quadrata (lato ~1,1 cm, tratto sottile nero) in alto a sinistra dello schema: e la cella $(i,j)$. Nell'originale il quadrato e appena abbozzato; qui va regolare.
2. Etichetta "$(i,j)$" SOPRA e leggermente a sinistra del quadrato, all'esterno.
3. FRECCIA ORIZZONTALE dal lato destro della cella verso destra, lunga ~2,5 lati; etichetta "$j+1$" sopra la punta (avanza solo $\sigma_2$: inserzione).
4. FRECCIA VERTICALE dal lato inferiore verso il basso, lunga ~2,5 lati; etichetta "$i+1$" sotto la punta (avanza solo $\sigma_1$: cancellazione).
5. FRECCIA DIAGONALE dallo spigolo in basso a destra, inclinazione ~-45 gradi, che termina all'incirca all'altezza della punta della verticale e poco prima dell'ascissa della punta dell'orizzontale; etichetta a destra della punta, su due righe impilate (\substack): "$i+1$" sopra, "$j+1$" sotto (match o sostituzione).

ANNOTAZIONI OPZIONALI (assenti nell'originale, utili a rendere lo schema autoesplicativo; in grigio o corpo minore): "d" sulla freccia verticale, "i" sulla freccia orizzontale, "m/s" sulla diagonale.

DA NON RIPRODURRE: la scritta "N.B." dell'originale sopra la freccia orizzontale (marcatore dello studente, senza contenuto).

STILE: tratto sottile, punte stealth, tutto in nero, nessun riempimento.
