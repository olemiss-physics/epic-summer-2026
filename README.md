# EPIC Summer 2026 — Website

Source for the EPIC Summer 2026 program website, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

**EPIC: Exploring Particle Physics Integrated with Computing**
University of Mississippi — July 13–17, 2026

## Local preview

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open `http://localhost:8000/epic-summer-2026/` in your browser. The page live-reloads as you edit files — no need to restart.

On subsequent sessions, just activate the venv and serve:
```bash
source .venv/bin/activate
mkdocs serve
```

```bash
mkdocs build        # build static site into site/ (optional, for inspection)
```

## Deploying to GitHub Pages

The site deploys to GitHub Pages on pushes to `main`, and can also be deployed manually from the Actions tab.

Either way, you'll also need to:
1. Make sure the repository lives at `olemiss-physics/epic-summer-2026`
2. In the repo Settings → Pages, set source to **Deploy from a branch → `gh-pages`**
3. Push to `main` or run the "Deploy site to GitHub Pages" workflow manually

## Repository layout

```
docs/               # all site content (Markdown)
  index.md          # home page
  schedule.md       # day-by-day schedule
  before-you-arrive.md
  setup/            # environment setup guides
  notebooks/        # per-day notebook pages
  physics/          # background reading
  faq.md
mkdocs.yml          # site configuration
requirements.txt    # Python dependencies
.github/workflows/  # GitHub Actions deploy
```

## Notebooks

The Jupyter notebooks students use will live in a separate repository once the materials are finalized.
