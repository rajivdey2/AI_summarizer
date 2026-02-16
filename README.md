# Local LLM-powered Topic Summarizer GUI App

A simple, modern desktop-like web GUI application that lets you:

- Chat with Llama 3 (via Ollama)
- Paste long articles/text
- Get clean topic-wise **summaries in seconds**

All processing happens **locally** — no API keys, no cloud dependency.

https://github.com/yourusername/your-repo-name/assets/12345678/abcdef12-3456-7890-abcd-ef1234567890  
*(replace with your own demo GIF/video later)*

## ✨ Features

- Clean, responsive chat-style interface
- One-click topic detection + summarization
- Fast local inference using Ollama + Llama 3
- Adjustable summary length / detail level (coming soon)
- Fully offline after initial model download
- Easy to extend (add RAG, change models, etc.)

## 🛠 Tech Stack

| Layer       | Technology                 |
|-------------|----------------------------|
| Backend     | Node.js + Express          |
| LLM         | Ollama + llama3 (8B/70B)   |
| Frontend    | React + Vite + Tailwind    |
| Styling     | Tailwind CSS + shadcn/ui   |
| State       | Zustand / React Context    |

## 🚀 Quick Start (Recommended)

### Prerequisites

- Windows / macOS / Linux
- At least **8 GB RAM** (16 GB+ strongly recommended)
- Node.js 18+ and npm
- ≈5–15 GB free disk space (for model)

### Step-by-step Setup

1. **Install Ollama**

   https://ollama.com/download

   ```bash
   # After installation, verify it works
   ollama --version
## Download and run ollama
# Recommended: 8B model (good balance of speed & quality)
ollama pull llama3:8b

# OR — better quality but slower / needs more RAM
# ollama pull llama3:70b

# Start the model (can keep this terminal open)
ollama run llama3

llm-summarizer-gui/
├── client/               # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── server/               # Node.js / Express backend
│   ├── index.js
│   ├── routes/
│   └── package.json
│
├── README.md
└── .gitignore
   
   
