# Figura `p78-periodicita`

- **Pagina della scansione:** 78
- **Tipo:** schema su asse dei tempi (linea tratteggiata con istanti marcati e graffa)
- **Didascalia prevista:** La periodicità letta sull'asse dei tempi: lo stato i può essere occupato (q_i^{(t)}>0) soltanto negli istanti a, a+T, a+2T, …, mentre in tutti gli altri istanti si ha q_i^{(t)}=0.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema orizzontale largo circa 0,9 della colonna di testo, alto poco (2-3 righe): illustra la definizione di periodicità appena data.

ELEMENTI (da sinistra a destra):
1. ASSE DEI TEMPI: una linea orizzontale TRATTEGGIATA (trattini brevi, spaziati, disegnati a mano nella scansione), che rappresenta gli istanti discreti t = 0, 1, 2, …. Comincia al bordo sinistro della figura e prosegue oltre l'ultimo punto marcato; nella scansione l'estremità destra si incurva leggermente verso l'alto — in TikZ basta terminarla con un tratto dritto seguito da «$\cdots$».
2. TRE PALLINI PIENI sulla linea, equispaziati, che marcano gli istanti t = a, t = a+T, t = a+2T. Sono gli unici punti disegnati in pieno (nella scansione sono macchie di inchiostro nettamente più marcate dei trattini).
3. GRAFFA sotto il tratto iniziale: dall'estremo sinistro della linea (istante 0) fino al PRIMO pallino, una graffa rivolta verso il basso (decorate/brace,mirror), con l'etichetta «$a$» sotto il suo vertice. È lo sfasamento iniziale della progressione aritmetica.
4. ETICHETTE SOTTO I PALLINI: sotto ciascuno dei tre pallini, in matematica, «$q_i^{(t)}>0$». Nella scansione la terza di queste etichette non stava sotto il pallino e l'autore l'ha collegata con una freccetta obliqua breve che parte dal pallino e scende a destra; in TikZ conviene metterle tutte e tre allineate sotto i rispettivi pallini e omettere la freccia.
5. ETICHETTE FRA UN PALLINO E IL SUCCESSIVO (due volte, fra 1° e 2° e fra 2° e 3° pallino):
   - SOPRA la linea, centrata nell'intervallo: «$T$ passi»;
   - SOTTO la linea, nello stesso intervallo ma leggermente sfalsata rispetto a «$T$ passi»: «$q_i^{(t)}=0$».
6. CONTINUAZIONE: dopo il terzo pallino la linea prosegue tratteggiata e si chiude con «$\cdots$». (Nella scansione compare, dopo il terzo pallino, ancora un'etichetta «$q_i>0$» priva di pallino sopra: va letta come l'istante successivo a+3T della progressione, cioè come indicazione che lo schema si ripete; è preferibile renderla con i puntini di sospensione piuttosto che con un'etichetta orfana.)

LAYOUT/STILE: tutto su un'unica riga di base; linea tratteggiata sottile in nero/blu tenue, pallini pieni; graffa ed etichetta «$a$» sotto a sinistra; «$T$ passi» in tondo con la T in matematica; le condizioni su $q_i^{(t)}$ in matematica. Nessun asse verticale, nessuna scala numerica: la figura è puramente qualitativa. Testo delle etichette in italiano («passi»).
