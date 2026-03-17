# Agent Layer

Exploring how to build an AI agent on top of Doc-Scanner using raw 
LLM function-calling APIs — without frameworks like LangChain or LlamaIndex.

## The idea

Instead of a single LLM call per document, an agent could:

1. Decide which analysis to run based on the document type
2. Call the right tools — readability check, style rule retrieval, rewrite
3. Synthesize results into a single structured report

## Why raw APIs

Frameworks abstract away the function-calling loop, which makes debugging 
harder and customization limited. Building from raw APIs means I understand 
exactly what's happening at each step.

## Current status

Early exploration. The function definitions are drafted. 
The orchestration loop is next.

## Open question

How many tool calls is too many before latency becomes a problem 
for a documentation review workflow?