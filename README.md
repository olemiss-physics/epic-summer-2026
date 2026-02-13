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

Open `http://localhost:8000` in your browser. The page live-reloads as you edit files — no need to restart.

On subsequent sessions, just activate the venv and serve:
```bash
source .venv/bin/activate
mkdocs serve
```

```bash
mkdocs build        # build static site into site/ (optional, for inspection)
```

## Deploying to GitHub Pages

Auto-deploy on push is currently **disabled** while the site is being drafted.
When ready to go live, choose one of:

**Option A — trigger manually** (no code change needed):
Go to the repo on GitHub → Actions → "Deploy site to GitHub Pages" → Run workflow.

**Option B — enable auto-deploy on every push to `main`**:
In `.github/workflows/deploy.yml`, change the `on:` block to:
```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

Either way, you'll also need to:
1. Create the repo on GitHub if you haven't already and push this branch
2. In the repo Settings → Pages, set source to **Deploy from a branch → `gh-pages`**
3. Update all `YOUR-GITHUB-ORG` placeholders in `mkdocs.yml`, `README.md`, and the `docs/` pages

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

The Jupyter notebooks students use live in the separate [MESH repository](https://github.com/YOUR-GITHUB-ORG/MESH).
