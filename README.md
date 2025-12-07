# Agadir Task Manager (ATM)

A simple full-stack task manager application built with **Node.js**, **Express.js**, **PostgreSQL (Sequelize ORM)** and **React Native (Expo Router)**.

The project includes:
- User authentication (Register + Login)
- JWT token protection
- CRUD operations for tasks
- Mobile app built with Expo
- Axios instance with token interceptor
- Clean MVC backend architecture

---

##  Tech Stack

### Backend
- Node.js / Express.js
- PostgreSQL + Sequelize ORM
- JWT Authentication
- Bcrypt password hashing
- MVC Architecture (Models / Controllers / Routes)

### Frontend (Mobile)
- React Native (Expo)
- Expo Router
- AsyncStorage (JWT storage)
- Axios (API communication)

### Tools
- DBeaver (Database GUI)
- Postman (API testing)

---

##  Project Structure

### Backend
backend/
│── controllers/
│── models/
│── routes/
│── config/
│ └── database.js
│── app.js
│── .env

### Frontend
app/
│── login.jsx
│── register.jsx
│── dashboard.jsx
│── add-task.jsx
api/
│── axios.js

## 🛢 Database Schema (UML)
<img width="1838" height="910" alt="mermaid-diagram-2025-12-05-095437" src="https://github.com/user-attachments/assets/c4c9ac3a-c35f-4a7c-9994-356d020009e3" />



