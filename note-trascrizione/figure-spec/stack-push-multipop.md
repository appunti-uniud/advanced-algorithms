# Figura `stack-push-multipop`

- **Pagina della scansione:** 5
- **Tipo:** schema (due diagrammi di stack affiancati)
- **Didascalia prevista:** Le due operazioni sullo stack. PUSH deposita un solo elemento in cima al contenuto già presente (costo costante); MULTI-POP rimuove in un colpo solo tutto il blocco degli elementi sovrastanti (costo proporzionale alla sua altezza).
- **Ritenuta fattibile in TikZ:** True

## Specifica

Due disegni di stack affiancati orizzontalmente, separati da uno spazio di circa 1,5 volte la larghezza di uno stack.

STACK SINISTRO (operazione PUSH).
- Contenitore: rettangolo aperto in alto, disegnato come due pareti verticali parallele piu' un segmento orizzontale di fondo (larghezza circa 1,6 cm, altezza circa 3,2 cm). Preferibile lasciarlo aperto in alto, cosi' si capisce che si puo' ancora inserire.
- Contenuto: il contenitore e' pieno solo nella meta' inferiore. Tracciare 4 segmenti orizzontali interni, equispaziati, da parete a parete, che con il fondo delimitano 4 celle piene; la meta' superiore resta vuota.
- Elemento appena inserito: la cella immediatamente sopra il contenuto (la quinta dal fondo) e' riempita con un pattern di riempimento leggero (per esempio north east lines, o un grigio chiaro).
- Freccia: freccia orizzontale che entra da sinistra e punta alla parete sinistra all'altezza esatta della cella tratteggiata. Etichetta "PUSH" a sinistra della freccia, in maiuscoletto/maiuscolo.

STACK DESTRO (operazione MULTI-POP).
- Stesso contenitore, stesse dimensioni, contenuto che occupa circa 5 celle.
- Blocco da rimuovere: le 3 celle piu' alte del contenuto sono riempite con tratteggio diagonale (linee a circa 45 gradi), a indicare che vengono eliminate tutte insieme; le 2 celle inferiori restano bianche.
- Freccia: freccia CURVA che parte in basso a sinistra del contenitore, sale con una curvatura ampia verso destra e termina con la punta appoggiata al bordo inferiore del blocco tratteggiato (la linea che separa la parte tratteggiata da quella bianca).
- Etichetta "MULTI-POP" scritta sotto la freccia curva, all'esterno e a sinistra del contenitore, in maiuscoletto/maiuscolo, orizzontale.

SIGNIFICATO ALGORITMICO: PUSH tocca una sola cella (costo $O(1)$); MULTI-POP tocca un intero blocco di altezza variabile. Il confronto visivo fra "una cella" e "un blocco" e' il punto della figura: e' cio' che nell'analisi ammortizzata viene pagato in anticipo, cella per cella, al momento del PUSH.
Testo in italiano, nomi delle operazioni in maiuscolo come nel manoscritto.
