DOCS  := algoritmi
PDFS  := $(addsuffix .pdf,$(DOCS))

export TEXINPUTS := .:$(CURDIR)/Airy/academica:$(TEXINPUTS)
export OSFONTDIR := $(CURDIR)/Airy/fonts//
LUALATEX := lualatex -interaction=nonstopmode -halt-on-error

LEZIONI := $(wildcard lezioni/*.tex)
TIKZ    := $(wildcard tikz/*.tikz)

.PHONY: all clean distclean once
all: $(PDFS)

# inizializza il submodule Airy se manca
Airy/academica/academica.cls:
	git submodule update --init --recursive

# Tre passate, non due: l'indice e l'elenco delle figure spostano
# l'impaginazione, e la numerazione si stabilizza solo alla terza.
$(PDFS): %.pdf: %.tex preamble.tex $(LEZIONI) $(TIKZ) Airy/academica/academica.cls
	$(LUALATEX) $*
	$(LUALATEX) $*
	$(LUALATEX) $*

# passata singola, per iterare in fretta
once:
	$(LUALATEX) algoritmi

clean:
	rm -f $(foreach e,aux log toc out lof lot synctex.gz,$(addsuffix .$(e),$(DOCS)))

distclean: clean
	rm -f $(PDFS)
