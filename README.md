# Nexus AI

An AI Workspace for Knowledge, Memory, Agents and Workflows.

---

## Vision

Create a modern AI Workspace where users can:

- Chat with AI
- Chat with their documents
- Build personal knowledge bases
- Use intelligent agents
- Create AI workflows
- Visualize AI systems

---

## Mission

The goal is not to create another ChatGPT clone.

The goal is to build a production-ready AI platform while learning:

- AI Engineering
- RAG
- Agents
- Memory Systems
- Workflows
- Full Stack Architecture

---

## Learning Goals

- Learn AI Engineering from fundamentals
- Understand LLMs deeply
- Build real-world AI systems
- Learn System Design
- Write maintainable code
- Follow industry best practices

---

## Project Rules

- No Vibe Coding
- Understand before implementing
- Document everything
- Architecture before coding
- Clean Code over Fast Code

---

## Engineering Principles

- YAGNI (You Aren't Gonna Need It)
- Keep It Simple
- Feature Driven Design
- Clean Code
- Documentation First
- Separation of Concerns
- Early Return Pattern
- Reusable Components First

---

## Development Phases

### Phase 1
AI Chat Foundation

### Phase 2
Knowledge Base

### Phase 3
RAG System

### Phase 4
Memory System

### Phase 5
Agent System

### Phase 6
Multi-Agent Workflows

### Phase 7
3D AI Workspace

---

## AI Concepts Learned

### LLM

Large Language Models such as:

- GPT
- Claude
- Gemini
- Qwen
- DeepSeek

Key Idea:

- Predict Next Token

---

### Token

Text is converted into tokens before being processed by the model.

```text
Text
↓
Tokenizer
↓
Tokens
↓
LLM
```

---

### Context Window

Temporary workspace available to the model.

Important:

```text
Context ≠ Memory
```

---

### Memory

Persistent user knowledge.

Examples:

- User name
- User profession
- User preferences

---

### Embedding

Converts semantic meaning into vectors.

```text
Meaning
↓
Numbers
↓
Embedding Vector
```

---

### Vector Database

Stores embeddings for semantic search.

Planned:

- Qdrant

---

### Chunking

Documents are divided into smaller pieces before embeddings are generated.

```text
PDF
↓
Chunks
↓
Embeddings
```

---

### RAG

Retrieval Augmented Generation

```text
Question
↓
Embedding
↓
Vector Search
↓
Relevant Chunks
↓
LLM
↓
Answer
```

Benefits:

- Better accuracy
- Lower cost
- Faster responses
- Scalable document search

---

### Prompt Engineering

Prompt is not only the user's question.

```text
System Prompt
+
History
+
Memory
+
RAG Results
+
User Question
```

---

## Architecture Knowledge Gained

### History vs Memory

History:

```text
Conversation Messages
```

Memory:

```text
Persistent User Facts
```

---

### API Key Security

✅ Backend Only

❌ Frontend

---

### Why Messages Array?

We use:

```ts
messages:[]
```

instead of:

```ts
message: string
```

because:

- Supports conversation history
- Supports memory injection
- Supports RAG
- Supports agents
- Scales better

---

## Current Features

### AI Chat

- [x] OpenRouter Integration
- [x] Backend API Route
- [x] Dynamic User Message
- [x] Message History
- [x] Prompt Construction
- [x] Loading State
- [x] Enter To Send
- [x] Auto Scroll
- [x] Disable While Loading
- [x] Chat UI
- [x] ChatInput Component Extraction

---

## Refactoring Progress

Completed:

- [x] ChatInput Component Extraction
- [x] Type Safety Improvements
- [x] Auto Scroll Logic
- [x] Loading State Management
- [x] Guard Clauses (Early Return)

Planned:

- [ ] MessageList Extraction
- [ ] Sidebar Extraction
- [ ] Custom Hooks
- [ ] Chat Service Layer

---

## Current Status

Current Phase:

```text
Phase 1 - AI Chat Foundation
```

Current Goal:

```text
Chat Architecture Cleanup
```

Current Task:

```text
MessageList Component Extraction
```

Next Task:

```text
Conversation Persistence
```

---

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Route Handlers

### AI

- OpenRouter
- OpenAI SDK

### Database (Planned)

- PostgreSQL

### Vector Database (Planned)

- Qdrant

### Local Models (Future)

- Ollama

### Agent Framework (Future)

- LangGraph

---

## Project Architecture

Current Flow:

```text
User
↓
React State
↓
messages[]
↓
fetch()
↓
/api/chat
↓
OpenRouter
↓
LLM
↓
Response
↓
UI
```

Future Flow:

```text
User
↓
Memory
↓
RAG
↓
Prompt Builder
↓
Agent Layer
↓
LLM
↓
Response
```

---

## Lessons Learned

- LLMs do not have memory.
- Systems create the illusion of memory.
- Understanding is more important than copying.
- Architecture matters from day one.
- Small iterative improvements beat large rewrites.
- AI Engineering is much more than prompting.

---

## Long-Term Goal

Become a:

```text
Full Stack AI Engineer
```

with strong skills in:

- AI Applications
- RAG Systems
- Memory Systems
- Agents
- Workflows
- Software Architecture

and build a production-ready AI Workspace called:

```text
Nexus AI
```