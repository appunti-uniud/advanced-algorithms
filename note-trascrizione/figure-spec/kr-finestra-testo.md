# Figura `kr-finestra-testo`

- **Pagina della scansione:** 26
- **Tipo:** schema di stringhe
- **Didascalia prevista:** Il testo T, la finestra corrente T[s+1..s+m] e la finestra successiva (traslata di una posizione); il pattern P ha la stessa lunghezza m della finestra.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Due segmenti orizzontali paralleli, tratto spesso azzurro, disegnati a mano libera (nel quaderno sono leggermente ondulati).

SEGMENTO SUPERIORE: lunghezza piena (diciamo 9 cm), rappresenta il TESTO. Etichetta «$T$» subito a destra dell'estremo destro, con l'ultimo tratto del segmento ispessito/blu scuro (nel quaderno l'estremo è ricalcato).

SEGMENTO INFERIORE: parte dalla stessa ascissa di inizio del primo (allineato a sinistra), lungo circa 1/4 del primo (diciamo 2,2 cm), posto circa 1,2 cm più in basso. Rappresenta il PATTERN. Etichetta «$P$» subito a destra del suo estremo destro, anch'esso ispessito. La lunghezza di questo segmento è visivamente uguale all'ampiezza delle graffe descritte sotto: è m.

DUE GRAFFE/ARCHI SOPRA IL SEGMENTO SUPERIORE, nel suo quarto sinistro, disegnate come archi ondulati piatti (nel quaderno sono due tratti orizzontali con una gobbetta centrale, tipo overbrace stilizzato):
  - graffa 1 (la più alta, circa 0,7 cm sopra la linea di T): copre l'intervallo che va dall'estremo sinistro di T fino a un'ascissa x1; ampiezza = m.
  - graffa 2 (più bassa, circa 0,3 cm sopra la linea di T): stessa ampiezza m, ma TRASLATA A DESTRA di una piccola quantità (nel quaderno circa un quadretto, cioè ~1/5 della propria ampiezza). Parte quindi poco dopo l'estremo sinistro di T e finisce poco dopo x1.
Le due graffe si sovrappongono quasi completamente: è proprio questo lo scopo del disegno, mostrare che la finestra si sposta di UNA posizione.

ETICHETTE DA AGGIUNGERE (assenti nell'originale, ricostruite): sopra la graffa 1 «$t_s$» oppure «$T[s+1..s+m]$»; sotto/accanto alla graffa 2 «$t_{s+1}$»; una piccola freccia orizzontale corta fra le due, con etichetta «shift», per rendere esplicito lo scorrimento. Testo in italiano.

NOTA: nell'originale, a destra del disegno, ci sono le formule «$T,P\in\Sigma^*$» e «$\Sigma=\{0,1,\dots,9\}$»; NON vanno messe nella figura, sono già nel testo corrente.

SIGNIFICATO: fissa la geometria del problema (finestra di lunghezza m che scorre sul testo) e prepara l'idea dell'aggiornamento incrementale t_s -> t_{s+1}.
