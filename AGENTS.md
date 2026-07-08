# AGENTS.md

Instructions for AI agents working on the EPIC Summer 2026 website.

## Repository Purpose

This repository is a participant-facing MkDocs Material website for **EPIC Summer 2026: Exploring Particle Physics Integrated with Computing** at the University of Mississippi.

The site is content-heavy, not an application. Treat changes as public program communication: schedules, logistics, setup instructions, physics background, notebooks, and team information need to stay consistent across pages.

## Hard Rules

- **Do not commit changes unless the user explicitly asks for a commit.**
- Do not deploy the site or enable automatic deployment unless explicitly asked.
- Do not add generated caches, virtual environments, or build outputs to git.
- Preserve the existing MkDocs Material structure and Markdown style.
- Keep participant-facing details consistent across duplicated pages.
- Prefer small, focused content edits over broad rewrites.

## Useful Skills And When To Use Them

Agents with skill systems should use relevant skills before editing:

- **Web/frontend or design skill**: use for layout, CSS, navigation, visual polish, responsive checks, or MkDocs theme changes.
- **Markdown skill**: use for Markdown structure, tables, admonitions, links, and content cleanup.
- **Accessibility skill**: use when adding slides, plots, color choices, visual assets, poster guidance, or anything that must be readable by students with low vision, dyslexia, or color-vision differences.
- **Spreadsheet/data skill**: use if schedules, participants, teams, or project assignments are provided as CSV/XLSX and need to be transformed into site content.
- **PDF skill**: use if posters, handouts, schedules, or printable logistics sheets need to be reviewed or generated as PDFs.

If no skill system is available, still follow the conventions in this file.

## Project Structure

```text
docs/
  index.md              # landing page
  schedule.md           # day-by-day public schedule
  before-you-arrive.md  # logistics and what to bring
  faq.md                # participant questions
  team.md               # instructors / staff
  setup/                # GitHub, Jupyter, computing setup
  notebooks/            # per-day notebook descriptions
  physics/              # science background pages
  assets/               # images, logos, JavaScript, CSS
mkdocs.yml              # site config and navigation
pyproject.toml          # Python dependencies
uv.lock                 # locked dependency versions
TODO.md                 # launch/content checklist
```

## Current Program Facts To Preserve

Unless the user provides newer details, keep these facts consistent:

- Dates: **July 13-17, 2026**
- Location: **University of Mississippi, Oxford**
- Daily hours: **9:00 AM-4:00 PM**
- Morning block: **9:00-11:30**
- Lunch: **11:30-1:30**
- Afternoon block: **1:30-4:00**
- Participants: **13**
- Teams: **5**
- Projects: **5 Belle II projects**
- Afternoons emphasize project work.
- Thursday afternoon is poster preparation for projects.
- Friday includes QuarkNet and poster presentations.
- Monday includes intro particle physics plus NOvA/DUNE/Belle II context and computing tutorials such as Git Bash, GitHub, Python, and Jupyter.
- The week should include neutrino oscillation tutorials and science communication.

## Content Consistency Checklist

When changing logistics, schedule, participants, teams, dates, or project details, check and update all relevant copies:

- `docs/index.md`
- `docs/schedule.md`
- `docs/before-you-arrive.md`
- `docs/faq.md`
- `docs/notebooks/index.md`
- `docs/notebooks/day*.md`
- `TODO.md`
- `README.md` if developer-facing instructions changed
- `mkdocs.yml` if navigation labels or pages changed

Use `rg` to find stale text before finishing. Examples:

```bash
rg "8:30|4:30|12:00|1:00|Exact capacity|TBD|grad student|Quarkent|QuarkNet"
rg "contact email|notebook repository|MESH"
```

## Writing Style

- Write for high-school participants and their families.
- Keep the tone warm, direct, and concrete.
- Avoid overpromising real-data access if the datasets are toy/simulated.
- Explain physics accurately without jargon-heavy paragraphs.
- Prefer clear page copy over marketing language.
- Keep schedules scannable with Markdown tables.
- Use "Belle II", "NOvA", "DUNE", "QuarkNet", "Git Bash", "GitHub", "Python", and "Jupyter" consistently.
- Use ASCII punctuation unless an existing scientific name or symbol requires otherwise.

## Markdown And MkDocs Conventions

- Use standard Markdown headings and tables.
- Use MkDocs Material admonitions for notes and warnings:

```markdown
!!! note "Schedule may shift"
    We'll adjust timing as the week unfolds.
```

- Preserve relative links such as `notebooks/day1.md` and `../setup/github.md`.
- Keep navigation synchronized with `mkdocs.yml` when adding, removing, or renaming pages.
- Do not put large raw HTML blocks into Markdown unless the surrounding page already uses that pattern.

## Local Development

Preferred commands (uses [`uv`](https://docs.astral.sh/uv/)):

```bash
uv run mkdocs serve
uv run mkdocs build --strict
```

If dependencies aren't installed yet, set up the environment:

```bash
uv sync
```

Do not commit `.venv/`, `site/`, or cache directories.

## Verification

Before reporting completion:

1. Run `git status --short` and make sure only intended files changed.
2. Run targeted `rg` checks for stale details.
3. Run `uv run mkdocs build --strict` when possible.
4. If the build fails because of sandbox restrictions writing `site/`, request permission to rerun the same command with the required filesystem access.
5. Mention clearly if verification could not be run.

## Deployment Notes

Automatic GitHub Pages deployment is **live**: `.github/workflows/deploy.yml` runs `mkdocs build --strict` and deploys to GitHub Pages on every push to `main`. Do not change deployment workflow behavior unless the user explicitly asks, and treat any push to `main` as a real, public deploy.

Before any deployment-related work, confirm:

- GitHub organization / repository name
- `site_url`
- `repo_url`
- remaining notebook repository placeholders
- whether manual or automatic deployment is desired

## Future: Zensical

[Zensical](https://zensical.org) is a Rust-core static site generator from the Material for MkDocs team, announced Nov 2025 as MkDocs's eventual successor. It reads `mkdocs.yml` natively and preserves generated HTML structure, so this site — which has no `plugins:` entries in `mkdocs.yml`, only `theme`/`markdown_extensions`/`extra_css`/`extra_javascript`/a `docs/overrides` dir — is a low-risk future candidate. Its module system (needed for third-party plugin support) and full pymdownx/CommonMark coverage were still landing as of "early 2026" per Zensical's own blog, and it doesn't yet support `uv`'s symlink install mode. Do not migrate to Zensical without explicit user request; if asked, smoke-test `zensical build` against this exact `mkdocs.yml` before switching CI/docs over.

Context on urgency: `mkdocs build` now prints a warning (see squidfunk's [Feb 2026 post](https://squidfunk.github.io/mkdocs-material/blog/2026/02/18/mkdocs-2.0/)) that upstream **MkDocs 2.0** — a separate, unrelated rewrite, not made by the Material team — removes the plugin system entirely, rewrites theming in an incompatible way, has no migration path, and is currently unlicensed. Material for MkDocs is staying on MkDocs 1.x and is *not* moving to MkDocs 2.0; Zensical, not MkDocs 2.0, is the team's actual forward path. The build warning can be silenced with `NO_MKDOCS_2_WARNING=1` if it gets noisy, but don't silence it without noting why — it's a real signal about long-term stack health, not just log noise.

## Open Content Items

Known details likely still need confirmation:

- Five Belle II project titles
- Exact Friday QuarkNet format
- Room/building locations
- Contact email
- Housing check-in details
- Final notebook repository name and organization
