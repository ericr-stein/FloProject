SHELL := /bin/bash
.DEFAULT_GOAL := help

# Directories
TEMPLATE_DIR := templates
OUTPUT_DIR   := output
DELIV_DIR    := deliverables

# Pandoc command
PANDOC := pandoc --defaults=$(TEMPLATE_DIR)/defaults.yaml

# ─── PDF targets ──────────────────────────────────────────────
.PHONY: pdf-a pdf-b pdf-c pdf-d pdfs

pdf-a: $(OUTPUT_DIR)/deliverable-a.pdf
pdf-b: $(OUTPUT_DIR)/deliverable-b.pdf
pdf-c: $(OUTPUT_DIR)/deliverable-c.pdf
pdf-d: $(OUTPUT_DIR)/deliverable-d.pdf

pdfs: pdf-a pdf-b pdf-c pdf-d

$(OUTPUT_DIR)/deliverable-a.pdf: $(DELIV_DIR)/A-thema/content.md $(TEMPLATE_DIR)/metadata-a.yaml | $(OUTPUT_DIR)
	$(PANDOC) --metadata-file=$(TEMPLATE_DIR)/metadata-a.yaml -o $@ $<

$(OUTPUT_DIR)/deliverable-b.pdf: $(DELIV_DIR)/B-spezifikation/content.md $(TEMPLATE_DIR)/metadata-b.yaml | $(OUTPUT_DIR)
	$(PANDOC) --metadata-file=$(TEMPLATE_DIR)/metadata-b.yaml -o $@ $<

$(OUTPUT_DIR)/deliverable-c.pdf: $(DELIV_DIR)/C-wireframes/content.md $(TEMPLATE_DIR)/metadata-c.yaml | $(OUTPUT_DIR)
	$(PANDOC) --metadata-file=$(TEMPLATE_DIR)/metadata-c.yaml -o $@ $<

$(OUTPUT_DIR)/deliverable-d.pdf: $(DELIV_DIR)/D-website-docs/content.md $(TEMPLATE_DIR)/metadata-d.yaml | $(OUTPUT_DIR)
	$(PANDOC) --metadata-file=$(TEMPLATE_DIR)/metadata-d.yaml -o $@ $<

$(OUTPUT_DIR):
	mkdir -p $(OUTPUT_DIR)

# ─── Website ──────────────────────────────────────────────────
.PHONY: website
website:
	docker compose up -d website

# ─── Tests ────────────────────────────────────────────────────
.PHONY: test
test:
	@echo "Tests: noch nicht implementiert. Playwright-Tests folgen in Phase 3."

# ─── Docker ───────────────────────────────────────────────────
.PHONY: docker-up docker-down
docker-up:
	docker compose up -d

docker-down:
	docker compose down

# ─── Clean ────────────────────────────────────────────────────
.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR)

# ─── Help ─────────────────────────────────────────────────────
.PHONY: help
help:
	@echo ""
	@echo "  GreenSport Graubünden — Makefile"
	@echo "  ================================="
	@echo ""
	@echo "  make pdf-a      Deliverable A bauen"
	@echo "  make pdf-b      Deliverable B bauen"
	@echo "  make pdf-c      Deliverable C bauen"
	@echo "  make pdf-d      Deliverable D bauen"
	@echo "  make pdfs       Alle Deliverables bauen"
	@echo "  make website    Website starten"
	@echo "  make test       Tests ausführen"
	@echo "  make docker-up  Docker starten"
	@echo "  make docker-down Docker stoppen"
	@echo "  make clean      Output-Ordner löschen"
	@echo ""
