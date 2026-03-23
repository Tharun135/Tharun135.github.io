---
title: Lab Journal
description: A living log of current focuses (Now) and daily discoveries (TIL).
---

<div class="grid cards" markdown>

## 🎯 What's Happening Now
*Last updated: March 23, 2026*

### Building
- **Portfolio Samples** — Recently updated the Modbus TCP Connector User Manual with new architecture diagrams and technical flows.
- **DocScanner Enhancements** — Refining the sentence highlighting and style guide violation logic for clearer visual feedback.
- **This site** — Transitioning all portfolio links to GitHub Pages for a centralized documentation experience.

### Learning
- **Docs-as-Code Patterns** — Optimizing MkDocs workflows and CI/CD for documentation deployment.
- **AI-Assisted Writing** — Exploring advanced prompt engineering patterns for automated style guide checking and technical writing assistance.

### At work
- **Industrial Connectivity Docs** — Focusing on Modbus TCP and S7+ connector documentation for enterprise industrial IoT integration.
- **Modular Documentation** — Maintaining high-velocity delivery for 20+ applications using Fluid Topics and agile sprint cycles.

---

## ⚡ Recent Discoveries (TIL)
*Short capsules of knowledge and small wins.*

!!! abstract "March 2026"

    **MkDocs `gh-deploy` handles everything**
    You don't need to manually manage the `gh-pages` branch. 
    `mkdocs gh-deploy` builds, branches, and pushes in one command. 

    **ChromaDB retrieval quality depends on input quality**
    Spent an hour debugging poor RAG results. The embeddings were fine. 
    The style rules I'd written were just too vague to retrieve meaningfully. 
    Rewrote them to be specific and example-driven.

    **PowerShell conventions**
    Triple backticks are a Markdown convention, not a shell command. 
    Learned this the hard way while automating doc builds.

</div>

<style>
.md-typeset .grid.cards > h2 {
  grid-column: span 1;
  margin-top: 0;
}
</style>
