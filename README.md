# 🛡️ Blog Platform with Role-Based Access Control (RBAC)

This is a full-stack blog application implementing Role-Based Access Control (RBAC) using **Node.js**, **Express**, **MongoDB**, and **React.js**. It supports secure authentication with JWT and different permissions for users and admins.

---

## ✅ Features

- JWT-based authentication (Login & Signup)
- Role-based permissions:
  - **Users** can view blog posts
  - **Admins** can create, update, delete posts
- Protected routes using middleware
- Responsive UI built with React

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Frontend**: React.js, Axios, React Router
- **Other**: bcryptjs, dotenv, cors

---

## 📂 Project Structure

LIA-PLUS-AI/
├── backend/ # Node.js backend
├── frontend/ # React frontend
└── README.md

---

## 🚀 How to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yesiamkriti/LIA-PLUS-AI.git
cd LIA-PLUS-AI
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

## Create a .env file:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogRBAC
JWT_SECRET=your_jwt_secret
```

## Start Backend

```bash
npm run dev
```

## 3️⃣ Setup Frontend

```bash

cd ../frontend
npm install
npm start
```

## 🔐 Default Roles

User: Can view blog posts
Admin: Can create, update, delete posts

## 📦 API Endpoints Summary

Method Endpoint Access Description
POST /api/auth/signup Public Signup new user
POST /api/auth/login Public Login and get token
GET /api/posts Auth View all posts
POST /api/posts Admin Create post
PUT /api/posts/:id Admin Update post
DELETE /api/posts/:id Admin Delete post

### Admin user management panel

## 🧑‍💻 Author

---

# ✅ Step 9: Brief Architecture Document

### 📄 File: `Architecture.md` or add a section in README

```markdown
## ⚙️ Architecture Overview

### 1. User Flow

1. User signs up and is assigned a role (`user` or `admin`)
2. On login, JWT token is issued and stored in localStorage
3. Requests to backend routes include `Authorization` header
4. Middleware:
   - `authMiddleware`: verifies token
   - `roleMiddleware`: verifies user role
5. Data fetched and displayed in React frontend

### 2. Tech Separation

- Frontend (React)
  - Login/Signup
  - Admin dashboard
  - User post viewing
- Backend (Express)
  - Handles API endpoints
  - Connects to MongoDB
  - Auth and role control
- MongoDB
  - Stores user and blog data
```
