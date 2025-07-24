# 💬 MERN Realtime Chat Application

![Status](https://img.shields.io/badge/status-in--progress-yellow)
![GitHub last commit](https://img.shields.io/github/last-commit/iankitraj/ChatApp)
![GitHub stars](https://img.shields.io/github/stars/iankitraj/ChatApp?style=social)

A full-stack real-time chat app built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** and **Socket.IO**. It features user authentication, real-time messaging, and MongoDB data persistence.

---

## 🚀 Features

- 🔐 User Signup/Login with JWT authentication  
- 💬 Real-time messaging with Socket.IO  
- 🗂 MongoDB for storing users & messages  
- ☁️ Cloudinary integration for file uploads (optional)  
- 🍪 Secure cookies with cookie-parser  
- 🔄 Scalable architecture with modular folders  

---

## 🧱 Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | React.js (Vite)          |
| Backend    | Node.js + Express.js     |
| Database   | MongoDB + Mongoose       |
| Realtime   | Socket.IO                |
| Auth       | JWT + Bcrypt.js          |
| Config     | dotenv, cookie-parser    |

---

## 📁 Project Structure

**root/**

    ├── backend/
    │ ├── controllers/
    │ ├── models/
    │ ├── routes/
    │ ├── lib/
    │ ├── .env
    │ └── server.js
    ├── frontend/
    │ ├── src/
    │ │ ├── components/
    │ │ ├── pages/
    │ │ ├── App.jsx
    │ │ └── main.jsx
    │ └── vite.config.js**

---

**⚙️ Backend Setup Instructions**

**1. Clone the repository**
```bash
git clone https://github.com/your-username/ChatApp.git
cd ChatApp
```
**2. Install backend dependencies**
        
        cd backend
        npm install

**3. Configure .env**

**Create a .env file inside backend/:**

    MONGODB_URI=mongodb+srv://your_user:your_pass@cluster.mongodb.net/chat_db
    PORT=5002
    JWT_SECRET=your_secret_key

**4. Start the backend server**
     
     npm run dev


**🌐 Frontend Setup Instructions**

**1. Navigate to frontend directory**
     
      cd ../frontend

**2. Install frontend dependencies**
     
     npm install

**3. Start the frontend app (Vite)**
     
     npm run dev

**📡 Socket.IO Flow (Realtime Messaging)**
1. User connects → Socket initializes
2. Client emits new-user → server stores the user
3. On message send → emits send-message
4. Server receives → broadcasts receive-message
5. Client updates the chat in real time
  
**🔐 API Routes Overview**

**Auth Routes (/api/auth)**

**● POST /signup –** Register a new user

**● POST /login –** Authenticate a user

**● POST /logout –** Logout and clear cookies



## 🙋‍♂️ Authors

**Ankit Raj**    
💻 GitHub: [@iankitraj](https://github.com/iankitraj/)

**Divyanshu Verma**    
💻 GitHub: [@Divyanshuverma235](https://github.com/Divyanshuverma235/)



💡 Contributing
Contributions are welcome!
To contribute:

Fork this repository

Create a new branch (git checkout -b feature-name)

Commit your changes

Push to your branch and open a Pull Request

## 🚧 Development Status

This is an ongoing project built as a realtime chat application using the MERN stack and Socket.IO.  
While the core functionality is working, several features such as UI polish, message persistence, and private chats are still being developed.

Stay tuned for updates! Contributions and suggestions are welcome.

📩 **Got suggestions or feedback?**  
Feel free to message me via:

- 📧 **Email:** [iankitraj18@gmail.com](mailto:iankitraj18@gmail.com)  
- 💬 **WhatsApp:** [Message me on WhatsApp](https://wa.me/919608527940?text=Hi%20Ankit%2C%20I%20saw%20your%20MERN%20Chat%20App%20project%20and%20had%20some%20suggestions...)




