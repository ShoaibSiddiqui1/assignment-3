# Bank of React – Assignment 3

**Student:** Shoaib Siddiqui  
**Course:** CSCI 39548 – Practical Web Development (Fall 2025)  
**Instructor:** Johnny Lai  
**Project:** Assignment 3 – Bank of React  

---

### 📘 Overview
This project is a small React web app that simulates an online banking dashboard.  
It lets users view their **account balance**, check **credits** and **debits**, and add new transactions.  
The app uses **React Router** for client-side routing and displays different views for Home, User Profile, Login, Credits, and Debits.

---

### ⚙️ Features
- View account balance updated in real-time  
- View all credits and debits from public API endpoints  
- Add new credits and debits with a description, amount, and current date  
- Navigate easily between pages using React Router  
- Fully deployed to GitHub Pages  

---

### 🧠 Technical Details
- **Framework:** React (Create React App)
- **Routing:** React Router v5  
- **APIs:**  
  - Credits → https://johnnylaicode.github.io/api/credits.json  
  - Debits → https://johnnylaicode.github.io/api/debits.json  
- **Deployment:** GitHub Pages  
- **Languages:** JavaScript, HTML, CSS  

---

### 💻 App Structure
- `App.js` – main component, manages state (credits, debits, balance, user info)  
- `Home.js` – displays app title and account balance  
- `Credits.js` – lists and adds credits  
- `Debits.js` – lists and adds debits  
- `UserProfile.js` – shows username and member date  
- `Login.js` – mock login with redirect feature  
- `AccountBalance.js` – reusable component for displaying balance  

---

### 🔗 Links
- **Live Site:** [https://shoaibsiddiqui1.github.io/assignment-3/](https://shoaibsiddiqui1.github.io/assignment-3/)  
- **Repository:** [https://github.com/ShoaibSiddiqui1/assignment-3](https://github.com/ShoaibSiddiqui1/assignment-3)

---

### 👤 Group Members
Working alone – **Shoaib Siddiqui**

---

### 📅 Notes
This project helped me practice working with React components, props, state management, and client-side routing.  
I also learned how to deploy a React app to GitHub Pages and connect data from external APIs.
