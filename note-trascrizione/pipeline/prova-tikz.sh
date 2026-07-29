#!/bin/bash
# Compila una singola figura TikZ dentro il preambolo reale del documento.
# Uso:  .build/prova-tikz.sh nome-figura   (senza estensione .tikz)
# Esce con 0 se compila, 1 altrimenti, stampando gli errori di LaTeX.
set -u
ROOT=/home/rob/UNI/algoritmi_avanzati
ID="${1:?serve il nome della figura, senza .tikz}"
ID="${ID%.tikz}"
SRC="$ROOT/tikz/$ID.tikz"

[ -f "$SRC" ] || { echo "NON TROVATO: $SRC"; exit 1; }

WORK="$ROOT/.build/figure/prova/$ID"
mkdir -p "$WORK"
cat > "$WORK/t.tex" <<EOF
%!TeX program = lualatex
\\documentclass[oneside]{academica}
\\input{preamble}
\\newsavebox{\\provabox}
\\begin{document}
\\thispagestyle{empty}
\\sbox{\\provabox}{\\input{tikz/$ID.tikz}}
\\typeout{LARGHEZZA=\\the\\wd\\provabox / TESTO=\\the\\textwidth}
\\begin{figure}[H]
  \\centering
  \\input{tikz/$ID.tikz}
  \\caption{prova}
\\end{figure}
\\end{document}
EOF

cd "$ROOT" || exit 1
export TEXINPUTS=".:$ROOT:$ROOT/Airy/academica:${TEXINPUTS:-}"
export OSFONTDIR="$ROOT/Airy/fonts//"

out=$(lualatex -interaction=nonstopmode -output-directory="$WORK" "$WORK/t.tex" 2>&1)
if printf '%s' "$out" | grep -q '^!'; then
  echo "=== ERRORI in $ID.tikz ==="
  printf '%s\n' "$out" | grep -A4 '^!' | head -40
  exit 1
fi
if [ ! -f "$WORK/t.pdf" ]; then
  echo "=== nessun PDF prodotto per $ID.tikz ==="
  printf '%s\n' "$out" | tail -20
  exit 1
fi
dim=$(printf '%s\n' "$out" | grep -o 'LARGHEZZA=[0-9.]*pt/ TESTO=[0-9.]*pt' | head -1)
larg=$(printf '%s' "$dim" | sed -E 's/LARGHEZZA=([0-9.]*)pt.*/\1/')
testo=$(printf '%s' "$dim" | sed -E 's/.*TESTO=([0-9.]*)pt/\1/')
if [ -n "$larg" ] && [ -n "$testo" ]; then
  troppo=$(awk -v a="$larg" -v b="$testo" 'BEGIN{printf "%.1f", a-b}')
  if awk -v a="$larg" -v b="$testo" 'BEGIN{exit !(a>b)}'; then
    echo "OK: $ID.tikz compila, MA E TROPPO LARGA: ${larg}pt contro ${testo}pt di testo (sfora di ${troppo}pt)"
    exit 2
  fi
  echo "OK: $ID.tikz compila (larghezza ${larg}pt su ${testo}pt disponibili)"
  exit 0
fi
echo "OK: $ID.tikz compila"
exit 0
