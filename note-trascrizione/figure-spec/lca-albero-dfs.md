# Figura `lca-albero-dfs`

- **Pagina della scansione:** 32
- **Tipo:** albero
- **Didascalia prevista:** Un albero generico $\T$ con i nodi numerati secondo la visita in profondità (preordine). Accanto ai nodi $1$, $2$ e $5$ è riportato l'intervallo dei numeri DFS del rispettivo sottoalbero.
- **Ritenuta fattibile in TikZ:** True

## Specifica

Albero radicato generico con 10 nodi, numerati con dfs-numbering (preordine). È l'albero della Fig. 8.1 di Gusfield ed è lo STESSO albero delle figure lca-albero-I e lca-run-map: mantenere coerente il layout fra le tre.

NODI (pallini pieni, colore accento/blu, diametro ~2.5pt). Coordinate suggerite (x a destra, y verso l'alto), con proporzioni prese dal disegno originale, che NON è a livelli perfettamente allineati:
  n1 = (3.0, 0.0)
  n2 = (1.3, -1.05)   n5 = (4.4, -0.95)
  n3 = (0.1, -2.05)   n4 = (1.4, -2.10)
  n6 = (3.35, -2.10)  n7 = (4.15, -2.00)  n8 = (5.65, -1.90)
  n9 = (5.15, -2.90)  n10 = (5.95, -2.90)

ARCHI (segmenti dritti, stesso colore dei nodi, tratto medio): 1-2, 1-5, 2-3, 2-4, 5-6, 5-7, 5-8, 8-9, 8-10. Nessuna etichetta sugli archi.

ETICHETTE NUMERICHE (numero DFS accanto al pallino): «1» sopra a sinistra di n1; «2» sopra a sinistra di n2; «5» sopra a destra di n5; «3» sotto a sinistra di n3; «4» sotto a destra di n4; «6» sotto a sinistra di n6; «7» sotto a n7; «8» a destra di n8; «9» sotto a n9; «10» sotto a destra di n10.

ETICHETTE SECONDARIE (nel quaderno a matita, molto sbiadite, accanto ai soli nodi 1, 2, 5): renderle come intervalli in grigio, corpo più piccolo, leggermente staccate a destra della rispettiva etichetta numerica:
  accanto a n1: $[1,10]$ ; accanto a n2: $[2,4]$ ; accanto a n5: $[5,10]$.
Rappresentano l'intervallo contiguo dei numeri DFS del sottoalbero radicato in quel nodo.

SIGNIFICATO ALGORITMICO: (i) mostrare che si lavora con alberi qualsiasi (arità variabile, profondità non uniforme); (ii) illustrare la proprietà DFS enunciata subito sotto nel testo: i numeri dei nodi di ogni sottoalbero formano un intervallo contiguo, senza buchi — verificabile sulle tre etichette [1,10], [2,4], [5,10].

DA NON RIPRODURRE: nella scansione si intravedono ellissi sbiadite attorno ai nodi 4, 7, 9, 10 e una sagoma attorno alla zona 6-7-8-9; sono tracce di disegno preparatorio (i run, che compaiono solo nella figura lca-run-map).
