# Figura `boundary-path-tripartizione`

- **Pagina della scansione:** 23
- **Tipo:** schema di cammino su suffix trie (catena di stati + suffix link) con graffe e annotazioni
- **Didascalia prevista:** Il boundary path percorso nell'estensione con $t_i$: dallo stato top fino a $\bot$, con le tre zone «appendiamo a foglia», «appendiamo nuove foglie», «non serve appendere nulla», separate da active point ed end point.
- **Ritenuta fattibile in TikZ:** True

## Specifica

ID RINOMINATO in cucitura: era p23-boundary-path (rinominato per distinguerlo dalla figura boundary-path di p.21).

SCOPO: schematizzare il boundary path di STrie(T^{i-1}) percorso quando si estende il prefisso con il carattere t_i, e la sua tripartizione (Ukkonen).

NEL MANOSCRITTO il cammino è una lunga linea a zig-zag («dente di sega») che sale in diagonale da sinistra-basso a destra-alto, affiancata da curve lisce che fanno da graffe. IN TIKZ conviene raddrizzarlo: disegnare una CATENA VERTICALE di nodi, dal basso verso l'alto, e mettere le annotazioni ai lati. Mantenere però l'idea di «cammino lungo con stati omessi».

ELEMENTI:
1) CATENA PRINCIPALE: circa 9 nodi (cerchietti piccoli, vuoti) allineati in verticale, collegati da frecce che vanno dal nodo più basso verso quello più alto (sono i suffix link f, cioè la relazione «togli il primo carattere»). Due tratti della catena (uno nella zona bassa, uno nella zona alta) vanno resi con linea puntinata o con tre puntini fra due nodi, per dire «molti stati omessi».
2) ESTREMO INFERIORE: nodo PIENO; a sinistra, alla sua altezza, l'etichetta «top» (in tondo, minuscolo, non corsivo matematico). È lo stato più profondo del boundary path, quello che rappresenta l'intero prefisso T^{i-1}. Volendo aggiungere fra parentesi, in piccolo e più a sinistra, «$= T^{i-1}$».
3) ESTREMO SUPERIORE: ultimo nodo della catena, PIENO; immediatamente sopra/a destra il simbolo matematico $\bot$, grande, senza cerchietto attorno. La freccia finale della catena entra in questo nodo: il boundary path termina in perp.
4) ETICHETTA «boundary path (bp)» su due righe, in alto a destra, staccata; da essa scende una linea curva SENZA punta che va a toccare la catena poco sotto perp.
5) DUE TACCHE sulla catena, rese come un trattino scuro che attraversa obliquamente la linea (nel manoscritto una piccola «X»):
   - tacca BASSA = active point, posta circa a 1/3 dell'altezza;
   - tacca ALTA = end point, posta circa a 2/3 dell'altezza.
   Da un'ellisse a destra della catena, all'altezza della tacca bassa, contenente su due righe «active point», parte una freccia curva che punta alla tacca bassa; subito a destra dell'ellisse, sulla stessa riga, la scritta «primo stato non foglia».
   Da una seconda ellisse a destra della catena, all'altezza della tacca alta, contenente su due righe «end point», parte una freccia curva che punta alla tacca alta.
6) TRE ZONE, ciascuna con una graffa (decorations.pathreplacing, brace) e la sua etichetta:
   - ZONA A, dal nodo «top» fino alla tacca dell'active point (esclusa): graffa sul lato destro/basso, etichetta «appendiamo a foglia» posta in basso a destra della graffa;
   - ZONA B, dalla tacca dell'active point fino alla tacca dell'end point (esclusa): graffa sul lato SINISTRO, etichetta su due righe «appendiamo / nuove foglie» a sinistra;
   - ZONA C, dalla tacca dell'end point fino a perp: graffa sul lato DESTRO, etichetta su due righe «non serve appendere / nulla» a destra.
7) DETTAGLIO STACCATO, in basso a sinistra, fuori dalla catena e senza collegamenti con essa: tre nodi allineati lungo una spezzata che scende verso sinistra-basso. Dal nodo più in alto (pallino piccolo) parte un segmento LUNGO, tratto sottile, fino a un nodo intermedio (pallino pieno); dal nodo intermedio parte un segmento CORTO, tratto più marcato, fino a un terzo nodo (pallino pieno) in basso a sinistra. Etichetta a sinistra del segmento lungo: $[k,\infty]$ (nel manoscritto $T[j,\infty]$; uniformato alla notazione $[k,p]$ del capitolo). Etichetta a sinistra del segmento corto: «bp». Significato: l'arco che porta alla foglia ha etichetta APERTA, perciò appendere t_i a una foglia non richiede alcuna modifica dell'etichetta.

SIGNIFICATO ALGORITMICO da rendere leggibile: risalendo il boundary path da top verso perp, (a) finché lo stato è una foglia l'estensione con t_i è gratuita (etichette aperte); (b) dal primo stato non foglia — l'active point — fino al primo stato che possiede già una t_i-transizione — l'end point — bisogna creare una nuova foglia per ciascuno stato; (c) dall'end point in poi non c'è nulla da fare, perché la t_i-transizione esiste già (e quindi esisterà anche per tutti i suffissi più corti).

TUTTO IL TESTO IN FIGURA IN ITALIANO, esattamente: «top», «boundary path (bp)», «active point», «primo stato non foglia», «end point», «appendiamo a foglia», «appendiamo nuove foglie», «non serve appendere nulla»; simboli matematici: $\bot$ e $[k,\infty]$.
