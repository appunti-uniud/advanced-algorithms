# Figura `allineamento-esempio`

- **Pagina della scansione:** 42
- **Tipo:** schema di stringhe (allineamento a tre righe con edit string riquadrata)
- **Didascalia prevista:** Un allineamento di $\sigma_1=\str{acgtcatca}$ e $\sigma_2=\str{taagtgtca}$: la riga centrale, riquadrata, è l'allineamento $\eta=\mathbf{i}\,\mathbf{m}\,\mathbf{s}\,\mathbf{m}\,\mathbf{m}\,\mathbf{s}\,\mathbf{d}\,\mathbf{m}\,\mathbf{m}\,\mathbf{m}$; sopra e sotto stanno i caratteri di $\sigma_1$ e di $\sigma_2$ che ciascuna operazione mette in corrispondenza. È il migliore possibile?
- **Ritenuta fattibile in TikZ:** True

## Specifica

SCHEMA A TRE RIGHE E DIECI COLONNE, incolonnamento rigido (passo ~0,75 cm per colonna; righe distanti ~0,7 cm). Colonne numerate 1..10 da sinistra; ogni cella centrata sulla colonna.

RIGA 1 (sigma_1), monospaziata (\texttt): col.1 VUOTA; poi a, c, g, t, c, a, t, c, a (colonne 2..10). Etichetta a sinistra, staccata ~0,8 cm: $\sigma_1 =$

RIGA 2 (l'allineamento eta), simboli in \mathbf, tutte e dieci le celle piene: i, m, s, m, m, s, d, m, m, m. Questa riga E SOLO QUESTA e racchiusa in un RETTANGOLO che parte appena a sinistra della col.1 e finisce appena a destra della col.10 (margine ~0,15 cm sopra e sotto). Nell'originale il rettangolo e a mano libera con lati ondulati: in TikZ va bene un rettangolo netto. Etichetta a sinistra: $\eta$ seguito da una freccia $\Rightarrow$ che punta al bordo sinistro del rettangolo.

RIGA 3 (sigma_2), stessa monospaziata: t, a, a, g, t, g, VUOTA (col.7, gap dell'operazione d), t, c, a. Etichetta a sinistra $\sigma_2 =$, allineata con quella della riga 1 (nel manoscritto questa etichetta NON c'e: e un'aggiunta editoriale per leggibilita).

CONTROLLI SEMANTICI (non da disegnare): col.1 ha solo sigma_2 => inserzione i; col.7 ha solo sigma_1 => cancellazione d; colonne 2,4,5,8,9,10 accoppiano caratteri uguali => m; colonne 3 (c/a) e 6 (c/g) caratteri diversi => s. Lo sfasamento di una posizione fra riga 1 e riga 3 nella parte iniziale e CORRETTO e va rispettato. Costo totale 1+1+1+1 = 4 = d_edit(sigma_1,sigma_2): l'allineamento mostrato e effettivamente ottimo.

DA NON RIPRODURRE: i due punti interrogativi «??» che nell'originale stanno a destra del rettangolo (trasferiti nella didascalia). Nessun colore, nessuna freccia fra le righe, nessuna graffa.
