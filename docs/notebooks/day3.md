# Day 3: Neutrino Physics

**Wednesday, July 15**

Neutrinos are among the most abundant particles in the universe — and among the strangest. They barely interact with anything, yet they manage to spontaneously *change identity* as they travel. Today you'll see that effect in real data.

---

## What you'll do

- Load a real (toy) neutrino energy spectrum from the NOvA experiment
- Make histograms of energy deposits in the near and far detectors
- Compare the two spectra and see the oscillation "dip" appear
- Start to quantify the difference between the two distributions

## What you'll learn

- What a neutrino is and why it's so hard to detect
- How neutrino "flavors" work and what oscillation means
- How to compare two distributions on the same histogram
- What a ratio plot is and why physicists use them

---

## Open the notebook

**[`neutrino_part1_oscillation_spectra.ipynb`](https://github.com/mesh-collab/epic-curriculum/blob/main/notebooks/neutrino_part1_oscillation_spectra.ipynb)** in the [`mesh-collab/epic-curriculum`](https://github.com/mesh-collab/epic-curriculum) repository. See the repo's `README.md` for setup instructions (`uv sync` + the `EPIC Curriculum` Jupyter kernel).

---

## Notebook outline

1. **What is a neutrino?** — a short reading with key concepts
2. **Building the near/far spectra** — `nuosclab` presets for NOvA (and DUNE) generate the toy near and far detector energy spectra
3. **Near detector spectrum** — histogram of neutrino energies before oscillation
4. **Far detector spectrum** — the same, after oscillation, with Poisson toy-statistics fluctuations
5. **Comparing the two** — overlay plots and ratio plots
6. **The oscillation dip** — finding and measuring the drop in event rate
7. **Extension exercises** — go further if you finish early

---

!!! info "Background reading"
    For more context on the physics before or after the notebook, see [Neutrinos](../physics/neutrinos.md) in the Physics Background section.

!!! tip "Your deliverable for Friday"
    Your final plot for this analysis is a histogram with both the near and far detector spectra overlaid, clearly labelled, with the oscillation dip visible. Keep this in mind as you work through the notebook — the exercises build toward it.

!!! tip "Finished early? Go further"
    Two extension notebooks in the same repository build on today's tutorial:

    - **[`neutrino_part2_parameter_explorer.ipynb`](https://github.com/mesh-collab/epic-curriculum/blob/main/notebooks/neutrino_part2_parameter_explorer.ipynb)** — turns today's spectrum into a parameter study: vary θ₂₃, Δm²₃₂, and δCP and see how the oscillation pattern responds.
    - **[`neutrino_bonus_nsi_explorer.ipynb`](https://github.com/mesh-collab/epic-curriculum/blob/main/notebooks/neutrino_bonus_nsi_explorer.ipynb)** — is there a small new-physics effect (a Non-Standard Interaction) hiding under the standard three-flavor picture?
