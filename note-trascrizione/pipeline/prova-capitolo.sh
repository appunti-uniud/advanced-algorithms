#!/bin/bash
# Compila un singolo capitolo in isolamento, con il preambolo reale.
# Uso:  .build/prova-capitolo.sh 05-suffix-tree
# Esce 0 se compila pulito, 1 se ci sono errori LaTeX (che stampa).
set -u
ROOT=/home/rob/UNI/algoritmi_avanzati
CAP="${1:?serve il nome del capitolo, es. 05-suffix-tree}"
CAP="${CAP%.tex}"
CAP="$(basename "$CAP")"
SRC="$ROOT/lezioni/$CAP.tex"

[ -f "$SRC" ] || { echo "NON TROVATO: $SRC"; exit 1; }

WORK="$ROOT/.build/capitoli-prova/$CAP"
mkdir -p "$WORK"
cat > "$WORK/c.tex" <<EOF
%!TeX program = lualatex
\\documentclass[oneside]{academica}
\\input{preamble}
\\begin{document}
\\mainmatter
\\input{lezioni/$CAP}
\\end{document}
EOF

cd "$ROOT" || exit 1
export TEXINPUTS=".:$ROOT:$ROOT/Airy/academica:${TEXINPUTS:-}"
export OSFONTDIR="$ROOT/Airy/fonts//"

out=$(lualatex -interaction=nonstopmode -output-directory="$WORK" "$WORK/c.tex" 2>&1)
if printf '%s' "$out" | grep -q '^!'; then
  echo "=== ERRORI LaTeX in $CAP.tex ==="
  printf '%s\n' "$out" | grep -A5 '^!' | head -60
  exit 1
fi
if [ ! -f "$WORK/c.pdf" ]; then
  echo "=== nessun PDF prodotto per $CAP.tex ==="
  printf '%s\n' "$out" | tail -25
  exit 1
fi
pag=$(pdfinfo "$WORK/c.pdf" 2>/dev/null | awk '/^Pages/{print $2}')
und=$(printf '%s' "$out" | grep -c 'undefined' || true)
echo "OK: $CAP.tex compila ($pag pagine, $und riferimenti indefiniti)"
exit 0
