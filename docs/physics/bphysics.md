# B Mesons & CP Violation

*Background reading for Day 3 — no prior physics knowledge assumed.*

---

## Why is there anything?

The Big Bang produced energy, which converted into matter and antimatter in equal amounts. Matter and antimatter are exact mirror images of each other — when they meet, they annihilate into pure energy.

If the universe started with exactly equal amounts of both, they should have completely annihilated each other, leaving nothing but a sea of photons. No atoms. No stars. No planets. No us.

But here we are. So something must have broken the symmetry between matter and antimatter in the first moments of the universe. Physicists call this **CP violation**, and finding where it comes from is one of the biggest open problems in physics.

---

## Quarks and mesons

To understand B mesons, you need to know about quarks. Quarks are the fundamental building blocks of protons, neutrons, and many other particles. There are six types (or "flavors"): up, down, charm, strange, top, and **bottom** (also called *beauty*).

A **meson** is a short-lived particle made of one quark and one antiquark. A **B meson** contains a bottom quark (or anti-bottom quark) paired with an up or down quark.

| Particle | Content | Charge |
|----------|---------|--------|
| B⁺ | ū b̄ ... (anti-bottom + up) | +1 |
| B⁻ | ub ... (bottom + anti-up) | −1 |
| B⁰ | d̄b ... (bottom + anti-down) | 0 |
| B̄⁰ | db̄ ... (anti-bottom + down) | 0 |

B mesons are heavier than most other mesons, which means they can decay in many different ways — making them a rich laboratory for studying matter-antimatter differences.

---

## CP symmetry and its violation

**CP symmetry** means: if you replace every particle with its antiparticle (C, for "charge conjugation") *and* mirror the spatial directions (P, for "parity"), the physics should look the same.

If CP symmetry were perfect, B mesons and B̄ mesons would decay at exactly the same rates into the same final states. **CP violation** means they don't — B and B̄ mesons can have slightly different decay probabilities.

This small asymmetry is real, has been measured, and is incorporated into the Standard Model. But the amount of CP violation in the Standard Model is *far too small* to explain why the universe contains so much more matter than antimatter. There must be additional, undiscovered sources of CP violation somewhere.

---

## The Belle II experiment

Belle II is an experiment at the SuperKEKB accelerator in Tsukuba, Japan. It collides electrons and positrons at precisely the right energy to produce pairs of B mesons. By producing billions of these pairs, physicists can measure tiny decay rate differences with high precision.

The detector itself is a marvel of engineering — a roughly spherical array of sensors surrounding the collision point, designed to track and identify every particle produced in the decay chain.

---

## Invariant mass: identifying particles from debris

When a B meson decays, it vanishes and leaves behind a spray of lighter particles — pions, kaons, photons. To identify that a B meson was there, physicists work *backwards*: they collect the decay products, add up their energies and momenta, and compute the **invariant mass**.

For a set of decay products, the invariant mass M is:

$$M^2 c^4 = \left(\sum_i E_i\right)^2 - \left|\sum_i \vec{p}_i\right|^2 c^2$$

If those particles really came from a B meson decay, this quantity will cluster around the B meson mass (~5.28 GeV/c²). That's the **signal peak** you'll see in Day 3's notebook — a bump sitting above a smooth background of random combinations.

---

*Ready to look for that peak? We'll work through the Belle II tutorial together during the program.*
