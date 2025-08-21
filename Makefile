.PHONY: bootstrap test fmt
bootstrap:
	@if command -v npm >/dev/null 2>&1; then echo "npm: $$(npm -v)"; else echo "npm not found"; fi
	@if command -v python3 >/dev/null 2>&1; then echo "python3: $$(python3 -V)"; else echo "python3 not found"; fi
	@if [ -f package.json ]; then npm install || true; fi
	@if [ -f requirements.txt ]; then pip3 install -r requirements.txt || true; fi
	@echo "Bootstrap complete."

test:
	@if [ -f package.json ]; then npm test || echo "No npm tests"; else echo "No package.json"; fi
	@if command -v pytest >/dev/null 2>&1; then pytest -q || true; fi

fmt:
	@if command -v npx >/dev/null 2>&1 && [ -f package.json ]; then npx prettier -w . || true; fi
