# Figura `kr-schema-loop`

- **Pagina della scansione:** 26
- **Tipo:** schema a blocchi (diagramma di flusso)
- **Didascalia prevista:** Lo schema di Karp--Rabin: un unico test p = t_s ripetuto per tutti gli shift, con aggiornamento incrementale della finestra.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Diagramma di flusso a mano libera, tratto azzurro.

BLOCCO CENTRALE: un rettangolo (nel quaderno i lati sono tracciati a mano e non si chiudono perfettamente agli angoli), largo circa 4 cm e alto circa 1,2 cm, contenente il testo «check $\;p = t_s$» (la parola «check» a sinistra, la formula a destra, ben distanziate).

INGRESSO: una freccia entra nel lato SINISTRO del rettangolo, orizzontale, con la punta sul bordo.

USCITE: dal lato DESTRO del rettangolo partono DUE frecce a ventaglio (formano una «<» rovesciata, cioè divergono da uno stesso punto sul bordo destro, a metà altezza):
  - freccia SUPERIORE, diretta in alto a destra, etichettata «sì» sopra la punta, che punta alla scritta «occorrenza»;
  - freccia INFERIORE, diretta in basso a destra, etichettata «no» prima della scritta, che punta alla scritta «shift e somma».

RETROAZIONE: dalla zona di «shift e somma» (estremo destro, sotto il rettangolo) parte una lunga curva che scende, attraversa tutta la larghezza del disegno passando ben sotto il rettangolo con una concavità verso l'alto (una grande ellisse schiacciata, aperta), risale a sinistra e si raccorda con la freccia di ingresso al lato sinistro del rettangolo. Etichettarla «ciclo su $s = 0,\dots,n-m$» (etichetta ricostruita, nell'originale la curva è muta).

ANNOTAZIONE: dal bordo INFERIORE del rettangolo, circa a metà, parte un breve segmento obliquo verso il basso a sinistra (nel quaderno è un tratto spesso, quasi un puntatore) che collega il blocco alla scritta sottostante, in caratteri molto grandi:
  «\textbf{NON} prende tempo $O(1)$!»
e, su una seconda riga più piccola immediatamente sotto:
  «Non si può usare il criterio di costo unitario».
Nel quaderno la parola NON è scritta in stampatello gigante, alta il doppio del resto: renderla in grassetto e a corpo maggiore.

SIGNIFICATO: è lo schema «ingenuo» con i valori numerici: un unico confronto ripetuto su tutti gli shift, con aggiornamento O(1) della finestra; l'annotazione in basso segnala che il confronto NON è a costo costante perché p e t_s occupano Theta(m) bit, ed è ciò che motiva il passaggio all'aritmetica modulo q nella pagina successiva.
