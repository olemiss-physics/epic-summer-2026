# EPIC Summer 2026 — Website

Source for the EPIC Summer 2026 program website, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

**EPIC: Exploring Particle Physics Integrated with Computing**
University of Mississippi — July 13–17, 2026

## Development

```bash
pip install -r requirements.txt
mkdocs serve        # live preview at http://localhost:8000
mkdocs build        # build static site into site/
```

The site deploys automatically to GitHub Pages on every push to `main`.

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
