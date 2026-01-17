# Lexical Environment & Scope Chain

## Overview
In JavaScript, whenever an **execution context** is created, a corresponding **lexical environment** is also created. This lexical environment plays a key role in how variables and functions are stored, accessed, and resolved during code execution.

---

## Core Concept: Lexical Environment
A **lexical environment** consists of:
- The **local memory** (variables, function declarations, parameters)
- A reference to the **lexical environment of its parent**

This structure allows inner scopes to access variables from outer scopes.

---

## What Does “Lexical” Mean?
The term **lexical** refers to **hierarchy** or **order** — how code is written and nested in sequence within the source code.

Because of this hierarchy:
- Inner blocks/functions are lexically inside outer ones
- Scope resolution follows this written structure, not runtime order

---

## Scope Chain
The **scope chain** is the chain of all lexical environments linked together.

When a variable is accessed:
1. JavaScript first looks in the current lexical environment
2. If not found, it moves to the parent lexical environment
3. This continues until the global lexical environment is reached

If the variable is not found anywhere in the chain, a reference error occurs.

---

## Summary
- Every execution context has a lexical environment
- A lexical environment contains local memory and a reference to its parent
- Lexical means hierarchical, based on code structure
- The chain of lexical environments is called the **scope chain**

---

## Key Takeaway
The scope chain is what enables JavaScript to support closures and predictable variable access based on where code is written.

---