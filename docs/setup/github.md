# Using GitHub

GitHub is where the notebooks live, and where you'll save your own work. Think of it like Google Drive, but designed for code.

You only need four git commands all week. Here they are.

---

## Step 1 — Create a GitHub account

Go to [github.com/signup](https://github.com/signup) and create a free account if you don't have one. Use any email you have access to.

---

## Step 2 — Fork the MESH repository

"Forking" creates your own personal copy of the MESH repository on GitHub.

1. Go to [github.com/YOUR-GITHUB-ORG/MESH](https://github.com/YOUR-GITHUB-ORG/MESH)
2. Click the **Fork** button in the top-right corner
3. Leave all the settings as they are and click **Create fork**

You now have your own copy at `github.com/YOUR-USERNAME/MESH`.

---

## Step 3 — The four commands you'll use

Open a terminal (in Colab: **Tools → Terminal**, or in JupyterHub: **File → New → Terminal**).

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
