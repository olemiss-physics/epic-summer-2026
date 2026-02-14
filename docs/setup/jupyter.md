# Running Notebooks

The notebooks for EPIC live in the [MESH GitHub repository](https://github.com/YOUR-GITHUB-ORG/MESH). You can open them in several ways — we recommend **Google Colab** for this program because it works on any device with a browser, including Chromebooks.

---

## Option 1: Google Colab (recommended)

Google Colab runs notebooks entirely in your browser, backed by Google's servers. Nothing to install.

**Step 1 — Open Colab**

Go to [colab.research.google.com](https://colab.research.google.com). Sign in with a Google account.

**Step 2 — Open from GitHub**

Click **File → Open notebook**, then choose the **GitHub** tab.

Enter the repository address:
```
https://github.com/YOUR-GITHUB-ORG/MESH
```

You'll see a list of notebooks. Click the one for today's session.

**Step 3 — Save a copy to your Google Drive**

Before you start working, click **File → Save a copy in Drive**. This creates your own copy so your changes are saved automatically.

**Step 4 — Run a cell**

Click on a code cell and press **Shift + Enter** (or click the play button ▶ on the left). The first run might take 10–20 seconds to start up — that's normal.

!!! warning "Don't skip saving a copy"
    If you don't save a copy to your Drive, your changes will be lost when you close the tab. Do this before you run your first cell!

---

## Option 2: Binder

Binder launches a notebook directly from GitHub without needing any account. The trade-off is that it can take a minute or two to start, and your work is not saved automatically.

Click a Binder badge on any [Notebook page](../notebooks/index.md) to launch that notebook in Binder.

!!! tip "Download your work from Binder"
    If you use Binder, download your notebook before closing the tab (**File → Download**) so you don't lose your changes.

---

## Option 3: Run locally on your own laptop

If you have a laptop with Python installed, you can run notebooks locally. First, open a **terminal** (on macOS: *Terminal* in Applications → Utilities; on Windows: *PowerShell* or *Git Bash*).

**First time setup**

```bash
# Clone the MESH repository
git clone https://github.com/YOUR-GITHUB-ORG/MESH
cd MESH

# Create a virtual environment
python3 -m venv .venv

# Activate it
source .venv/bin/activate          # macOS / Linux
# .venv\Scripts\activate           # Windows (use this line instead)

# Install dependencies
pip install notebook

# Start Jupyter
jupyter notebook
```

Then open `localhost:8888` in your browser.

**Returning later**

You don't need to reinstall anything. Just open a terminal, navigate back to the folder, activate the environment, and launch:

```bash
cd MESH
source .venv/bin/activate          # macOS / Linux
# .venv\Scripts\activate           # Windows
jupyter notebook
```

!!! note
    We won't use this option during the program — the Chromebooks don't support local installs. But if you want to continue working at home after the program, this is the way to go.

---

## Notebook basics

Once a notebook is open, here's what you need to know:

| Action | How |
|--------|-----|
| Run a cell | Click it, then press **Shift + Enter** |
| Run all cells from the top | **Runtime → Run all** |
| Add a new cell | Click **+ Code** or **+ Text** at the top |
| Undo | **Ctrl + Z** (inside a cell) |
| Stop a running cell | Click the ■ stop button, or **Runtime → Interrupt** |

!!! tip "Read before you run"
    Each cell has a description above it explaining what it does. Read it before pressing Shift + Enter — it'll help you understand what's happening!
