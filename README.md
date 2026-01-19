# 📱 ChatterBox - Modern WhatsApp Clone

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

> **Status:** 🚀 **Modern UI Update Merged!** The application now features a polished, responsive chat interface inspired by WhatsApp Web.



---

## 🎨 What's New in v2.0 (Modern UI)
* **WhatsApp Aesthetic:** Implemented a signature green-gradient background and message bubbles.
* **Refined UX:** Added box-shadows, hover effects, and Inter typography for a professional feel.
* **Unified Layout:** Consistent styling across Index, Edit, and New Message views.
* **Responsive Design:** Optimized for both desktop and mobile viewing.

---

## 🛠️ Internal Logic & Flow
The app follows a strict **MVC (Model-View-Controller)** pattern to ensure the code remains scalable:



1. **Client Request:** User visits a route (e.g., `/chats`).
2. **Express Route:** `index.js` receives the request and queries the MongoDB database.
3. **Mongoose Model:** The `Chat` model ensures data matches our schema (from, to, msg, date).
4. **EJS Render:** The server injects the data into the `.ejs` template and sends the styled HTML back to the user.

---

## 🚦 REST API Endpoints

| Method | Route | Description |
| :--- | :--- | :--- |
| **GET** | `/chats` | **Index:** View the vibrant new chat dashboard |
| **GET** | `/chats/new` | **New:** Form to compose a message |
| **POST** | `/chats` | **Create:** Push a new message to MongoDB |
| **GET** | `/chats/:id/edit` | **Edit:** Refined form to modify a messages |
| **PATCH** | `/chats/:id` | **Update:** Apply changes to a specific chat |
| **DELETE** | `/chats/:id** | **Destroy:** Permanently remove a chat |

---

## ⚙️ Setup & Contribution

```bash
# 1. Clone & Install
git clone [https://github.com/Sujalredekaer27/ChatterBox.git](https://github.com/Sujalredekaer27/ChatterBox.git)
npm install

# 2. Database
# Ensure MongoDB is running locally on port 27017

# 3. Seed & Start
node init.js
node index.js
