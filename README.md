# 📱 ChatterBox - Mini WhatsApp Clone

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A lightweight, backend-focused messaging application designed to demonstrate the power of **CRUD** (Create, Read, Update, Delete) operations. This project mimics a chat interface with persistent data storage using MongoDB.



---

## ✨ Key Features
- **Real-time Data Fetching:** Displays all chats stored in the MongoDB database.
- **Message Management:** Full ability to Send (Create), Edit (Update), and Remove (Delete) messages.
- **RESTful Architecture:** Follows standard REST API patterns for clean and predictable routing.
- **Dynamic UI:** Uses EJS templates to render different views based on the database state.
- **Method Overriding:** Uses `method-override` to handle PATCH and DELETE requests from standard HTML forms.

## 🛠️ Tech Stack
- **Backend:** Node.js & Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Frontend:** EJS (Embedded JavaScript) & Custom CSS
- **Middleware:** Method-Override, Body-Parser (URL encoded)

---

## 📂 Project Architecture

```text
mongo4/
├── models/
│   └── chat.js          # Mongoose Schema (from, to, msg, created_at)
├── public/
│   └── style.css        # Custom CSS for the chat UI
├── views/               # EJS Templates
│   ├── index.ejs        # Homepage (List all chats)
│   ├── new.ejs          # Create message page
│   └── edit.ejs         # Edit message page
├── index.js             # Server initialization & Routes
├── init.js              # Database seeding script
└── package.json         # Dependencies & scripts
