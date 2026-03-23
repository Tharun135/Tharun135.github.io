<div class="hero animate-fade-in" style="opacity:1;">
  <span class="floating-icon" style="font-size: 3rem;">⚡</span>
  <h1>TIL / Notes</h1>
  <p>Short capsules of knowledge and small wins from daily builds.</p>
</div>

Short notes on things I picked up recently. No polish, just signal.

---

## March 2026

**MkDocs `gh-deploy` handles everything**
You don't need to manually manage the `gh-pages` branch. 
`mkdocs gh-deploy` builds, branches, and pushes in one command. 
Wish I'd known this earlier.

**ChromaDB retrieval quality depends on input quality**
Spent an hour debugging poor RAG results. The embeddings were fine. 
The style rules I'd written were just too vague to retrieve meaningfully. 
Rewrote them to be specific and example-driven — retrieval improved immediately.

**PowerShell doesn't use backticks as code fences**
Triple backticks are a Markdown convention, not a shell command. 
Learned this the hard way.

---

*Add a new entry whenever you learn something worth remembering.*