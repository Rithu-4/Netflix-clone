# 🎬 Netflix Clone – Full Stack Project

## 📌 Overview

This project is a **Netflix-inspired login and dashboard application** built using a full-stack approach. It demonstrates how a frontend and backend communicate to handle user authentication and display content.

The application includes a responsive login page, basic authentication using a Node.js backend, and a dynamic dashboard UI that mimics a streaming platform.

---

## 🚀 Features

### 🔐 Authentication

* User login with email and password
* Frontend validation for empty fields
* Backend validation using mock user data
* Error handling for invalid credentials

### 🎨 Frontend (React)

* Built using **React (Vite)**
* Styled with **Tailwind CSS**
* Netflix-style UI design
* Responsive layout
* Dashboard with movie posters and banner
* Navigation between Login and Dashboard

### ⚙️ Backend (Node.js + Express)

* REST API for login authentication
* Handles POST requests from frontend
* Uses mock/static user data (no database)
* CORS enabled for frontend communication

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* CORS
* Body Parser (built-in JSON handling)

---

## 📂 Project Structure

```
netflix-clone/
├── client/   # React frontend
└── server/   # Node.js backend
```

---

## 🔗 API Endpoint

### Login

```
POST /login
```

### Request Body

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Response

```json
{
  "success": true
}
```

---

## ▶️ How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

---

### 2. Run Backend

```
cd server
npm install
node index.js
```

Server runs on: **http://localhost:5000**

---

### 3. Run Frontend

```
cd client
npm install
npm run dev
```

Frontend runs on: **http://localhost:5173**

---

## ⚠️ Notes

* This project uses **mock authentication** (no database)
* Movie data is currently static/dummy data
* Designed for learning full-stack development concepts

---

## 🌟 Future Improvements

* Add JWT authentication
* Connect to a real database (MongoDB)
* Fetch real movie data from API
* Add protected routes
* Deploy frontend & backend

