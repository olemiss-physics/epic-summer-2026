# Using GitHub

GitHub is where the notebooks live, and where you'll save your own work. Think of it like Google Drive, but designed for code.

You only need four git commands all week. Here they are.

---

## Step 1 — Create a GitHub account

Go to [github.com/signup](https://github.com/signup) and create a free account if you don't have one. Use any email you have access to.

---

## Step 2 — Fork the MESH repository

"Forking" creates your own personal copy of the MESH repository on GitHub.

1. Go to the notebook repository URL provided by the instructors
2. Click the **Fork** button in the top-right corner
3. Leave all the settings as they are and click **Create fork**

You now have your own copy under your GitHub account.

---

## Step 3 — The four commands you'll use

Open a terminal in Jupyter: **File → New → Terminal**.

```bash
# See what files you've changed
git status

# Stage your changes (tell git what to include)
git add notebooks/01_welcome_and_setup.ipynb

# Save a snapshot with a message
git commit -m "Completed Day 1 exercises"

# Push your changes to GitHub
git push
```

That's it. You'll do this at the end of each session.

---

## A typical save workflow

At the end of a session, save your work in three steps:

```bash
git add .
git commit -m "Day 2: neutrino histograms complete"
git push
```

!!! tip "Write useful commit messages"
    Your commit message is a note to your future self. "Updated notebook" tells you nothing. "Added near/far comparison plot" tells you exactly what you did.

---

## Checking your work on GitHub

After pushing, open `github.com/YOUR-USERNAME/MESH` in your browser. You should see your most recent commit message at the top of the file list. Click on any notebook file to preview it.

!!! question "Something went wrong?"
    Git can be confusing at first. Ask a TA or instructor — we've all been there. The most common issues have easy fixes.

---

## Taking notes in Markdown

One of the best habits you can build this week is keeping a running notes file alongside your code. We recommend writing notes in **Markdown** — the same format this site is written in — and saving them to your repository so they're always backed up and readable on GitHub.

**Create your notes file**

In the terminal, inside your MESH folder:

```bash
touch notes.md
```

Then open it in Jupyter with **File → Open** and select `notes.md`.

**What to write**

You don't need to write essays — short bullets are fine:

```markdown
## Day 2 — Neutrinos

- neutrinos have mass but the Standard Model said they shouldn't
- oscillation probability dips at certain energies — that's the signal!
- our far detector histogram showed the dip around 1.5 GeV
- Q: why does the near detector not show the dip?
```

**Why Markdown?**

Markdown files render automatically on GitHub — headings, bold text, bullet points and all. After you push, open `github.com/YOUR-USERNAME/MESH/notes.md` and you'll see a nicely formatted page, not raw text.

**Include your notes in every commit**

```bash
git add notes.md
git commit -m "Day 2 notes: neutrino oscillation observations"
git push
```

By the end of the week you'll have a personal record of everything you learned — in your own words, saved permanently to your GitHub profile.
