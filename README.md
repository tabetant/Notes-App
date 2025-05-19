📌 Notes
---

## 📁 2. **Notes App**

### `README.md`

```markdown
# 🗒️ Notes App

A vanilla full-stack notes app that lets you create, view, and delete notes in real-time.

## 🔧 Features
- Add a note via a simple input form
- View a list of all submitted notes
- Delete any note
- Stores data in a local file (`notes.json`)

## 💻 Technologies Used
- HTML, CSS, JavaScript
- Node.js with Express.js
- `fs` module for persistent storage

## 📂 Project Structure
notes-app/
├── public/
│ ├── index.html
│ ├── script.js
│ └── style.css
├── notes.json
└── server.js


## 🚀 Getting Started

1. Clone the repository
2. Run `npm install express`
3. Start the server:
   ```bash
   node server.js
4. Open index.html in Live Server or browser (CORS enabled)

🔐 CORS Note

If accessing from http://127.0.0.1:5500, CORS is enabled for that origin in server.js.

Make sure feedbacks.json contains at least an empty array [] when starting
This is a beginner-friendly full-stack project
