---
title: Doc Visual Intelligence
description: An intelligent visual recommendation engine for technical documentation.
---

An AI-driven documentation assistant that analyzes technical content to dynamically generate and recommend visual assets like flowcharts, sequence diagrams, and architecture blueprints.

!!! tip "Live Demo"
    You can try the live visual advisor here: [https://visual-advisor.onrender.com/](https://visual-advisor.onrender.com/)

---

## 🧠 The "Brain" (Visual Detection Engine)

Doc Visual Intelligence moves beyond keyword matching to a structural and signal-based visual recommendation engine. It parses technical steps, conditional logic, and system relationships to accurately deduce where a visual aid is necessary.

*   **Rule-Based Classification**: Determines the type of visual asset (e.g., Workflow, Sequence Diagram) based on defined semantic structures.
*   **Mermaid Auto-Generation**: Seamlessly generates ready-to-use Mermaid.js diagrams directly from text workflows, formatted with compliant brand styling.
*   **Accessibility First**: Audits visual assets for proper metadata and warns technical writers if accessibility standards aren't met.

---

## 🚀 Key Decisions

- **Signal-Based Over Keywords**: Minimized false positives by validating logic structures (steps, conditions, branches) before triggering visual recommendations.
- **Dynamic Mermaid Support**: Directly integrated Mermaid generation to keep diagrams text-based, maintainable, and version-controlled.
- **Zero-Memory Profile**: Optimized the backend rule-lookup system for stable cloud deployment without relying on heavy in-memory stores.
