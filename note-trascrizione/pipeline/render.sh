#!/bin/bash
set -e
SRC=/home/rob/UNI/algoritmi_avanzati/appunti.pdf
OUT=/home/rob/UNI/algoritmi_avanzati/.build/pages
for p in $(seq 1 88); do
  n=$(printf "%02d" $p)
  pdftoppm -png -r 170 -f $p -l $p                              "$SRC" "$OUT/p${n}_full"
  pdftoppm -png -r 300 -f $p -l $p -x 60 -y 0    -W 2360 -H 1350 "$SRC" "$OUT/p${n}_b1"
  pdftoppm -png -r 300 -f $p -l $p -x 60 -y 1080 -W 2360 -H 1350 "$SRC" "$OUT/p${n}_b2"
  pdftoppm -png -r 300 -f $p -l $p -x 60 -y 2160 -W 2360 -H 1350 "$SRC" "$OUT/p${n}_b3"
done
# strip the -NN suffix pdftoppm appends
cd "$OUT"
for f in *-*.png; do mv "$f" "$(echo "$f" | sed -E 's/-[0-9]+\.png$/.png/')"; done
echo "PAGES DONE: $(ls "$OUT" | wc -l) files"

# professor notes: full page @200dpi + text layer
SUPP=/home/rob/UNI/algoritmi_avanzati/.build/supporto
cd /home/rob/UNI/algoritmi_avanzati/old_2024
i=0
for f in *.pdf; do
  i=$((i+1)); k=$(printf "L%02d" $i)
  echo "$f" > "${SUPP}/${k}_title.txt"
  pdftotext "$f" "${SUPP}/${k}_ocr.txt" 2>/dev/null || true
  pdftoppm -png -r 200 "$f" "${SUPP}/${k}_p"
done
echo "SUPPORTO DONE: $(ls "${SUPP}" | wc -l) files"
