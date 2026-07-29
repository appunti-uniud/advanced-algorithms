# Figura `karger-tradeoff`

- **Pagina della scansione:** 58
- **Tipo:** schema a frecce / annotazione
- **Didascalia prevista:** Il compromesso fra costo e affidabilità: al crescere del numero $h$ di ripetizioni aumenta la complessità computazionale e diminuisce la probabilità di errore.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Schema minimale composto da due frecce verticali affiancate in colonna, con etichetta testuale a destra di ciascuna.

GEOMETRIA. Si lavori in una colonna verticale unica: tutte le frecce hanno la stessa ascissa x=0.
- Freccia A (in alto): segmento verticale da (0,0) a (0,2), con punta di freccia (->) all'estremo SUPERIORE (0,2). Lunghezza circa 2 unita (nel quaderno occupa circa 3 quadretti).
- Freccia B (in basso): segmento verticale da (0,-1) a (0,-3), con punta di freccia (->) all'estremo INFERIORE (0,-3). Stessa lunghezza della freccia A. Lo spazio vuoto fra la coda di A (y=0) e la testa di B (y=-1) e di circa mezza lunghezza di freccia.

ETICHETTE (in italiano, allineate a sinistra, poste a destra della colonna, a circa 0.6 unita dall'asse x=0):
- accanto alla PUNTA della freccia A, all'altezza y=2 circa: «maggiore complessita computazionale»;
- accanto alla PUNTA della freccia B, all'altezza y=-3 circa: «minore probabilita di errore».
Nel quaderno le etichette sono scritte in corsivo come «maggior complessita» e «minore prob. di errore»; in trascrizione vanno espanse come sopra.

STILE. Tratto sottile/medio, frecce con punta standard (stealth o latex), nessun riquadro, nessun colore particolare. Nessun nodo, nessun arco fra le due frecce, nessuna etichetta ulteriore.

SIGNIFICATO ALGORITMICO. E il trade-off tipico degli algoritmi Monte Carlo applicato all'amplificazione per ripetizione dell'algoritmo di Karger: ripetendo h volte la procedura CONTRACT e restituendo il migliore fra gli h tagli trovati, la probabilita di errore scende come (1 - 2/n^2)^h (freccia verso il basso) mentre il tempo di calcolo cresce linearmente in h (freccia verso l'alto). Nel quaderno lo schema e disegnato immediatamente a destra dell'elenco «dopo un'esecuzione / dopo due esecuzioni / dopo h esecuzioni», e va letto come commento a quell'elenco.
