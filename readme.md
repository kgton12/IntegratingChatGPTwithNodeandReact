# 🤖 Full-Stack GPT Application

Welcome to your full-stack application that integrates OpenAI's GPT model with a **Node.js backend** and a **React frontend**. 🚀 This project is designed to showcase a seamless user experience for generating text completions using modern web technologies. 

---

## 📂 Project Structure

The project is organized into two main directories: 

1. **`server/`** - Backend code.
2. **`web/`** - Frontend code.

---

### 🛠️ Server (`server/`)

The backend is built with **Node.js** and **Express**. Key features include:

- **Configuration**:  
  - OpenAI API configuration is handled in `openAi.ts`, loading the API key from environment variables.

- **Controllers**:  
  - Main logic for handling requests and interacting with the OpenAI API is in `promptController.ts`.

- **Routes**:  
  - Defined in `routes.ts` with a `POST` endpoint for prompt submissions.

- **Models**:  
  - The input prompt model is defined in `inputPrompt.ts`.

- **Server Initialization**:  
  - The server is started in `server.ts` with core setup in `app.ts`.

---

### 🌐 Web (`web/`)

The frontend is built with **React** and **Vite**. Highlights include:

- **Main Application**:  
  - The primary interface is implemented in `App.tsx`, handling user input and chat message display.

- **API Integration**:  
  - Backend communication is managed in `api.ts`.

- **Components**:  
  - Reusable UI components like `ChatMessage.tsx` and `SideMenu.tsx` enhance modularity.

- **Styling**:  
  - The app uses CSS for styling, with files like `App.css` and `reset.css`.

---

## ⚙️ Configuration

### 📝 TypeScript  
Both `server/` and `web/` are written in **TypeScript** with dedicated configurations:  
- `tsconfig.json`  
- `tsconfig.app.json`

### 🔑 Environment Variables  
Environment variables are managed via `.env` files.  
- Examples provided in `.env.example`.

### 🏗️ Build and Development  
Development and build scripts are defined in `package.json` for both directories.  

---

## 🌟 Features

- **Seamless API Integration**: Interacts with OpenAI's GPT for real-time text completion.  
- **Modern Stack**: Combines the power of Node.js, Express, React, and Vite.  
- **Clean Codebase**: Organized with TypeScript, reusable components, and modular structure.  

---

Enjoy building and exploring this full-stack project! 🚀