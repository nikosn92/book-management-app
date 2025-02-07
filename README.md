# 📚 Book Management App

![GitHub repo size](https://img.shields.io/github/repo-size/nikosn92/book-management-app)
![GitHub contributors](https://img.shields.io/github/contributors/nikosn92/book-management-app)
![GitHub stars](https://img.shields.io/github/stars/nikosn92/book-management-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/nikosn92/book-management-app?style=social)

## 📌 Table of Contents

- [📌 Introduction](#introduction)
- [🚀 Features](#features)
- [🛠️ Technologies Used](#technologies-used)
- [📂 Project Structure](#project-structure)
- [📦 Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [🔧 Usage](#usage)
- [📜 API Documentation](#api-documentation)
- [📜 License](#license)


## 📌 Introduction

The **Book Management App** is a web application designed for managing a book collection. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book records and includes an admin dashboard for viewing the database.

---

## 🚀 Features

- 🔑 **User Authentication**:
  - Secure login and registration system.
  - JWT-based authentication.

- 📖 **Book Management**:
  - Add, view, update, and delete books.
  - Responsive design for seamless user experience.

- 🛠 **Admin Dashboard**:
  - View all users.
  - View all books.

- 📜 **API Documentation**:
  - Accessible through Swagger for easy reference.

---

## 🛠️ Technologies Used

### Frontend:
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

## 📂 Project Structure

### Backend (`book-management-app-backend`):
- **controllers/**: Contains logic for API endpoints.
- **models/**: Mongoose schemas for MongoDB.
- **routes/**: API route definitions.
- **middleware/**: Authentication and validation middleware.
- **config/**: Database configuration files.
- **utils/**: Utility functions (e.g., logging).
- **tests/**: Test files for backend logic.
- **server.js**: Main entry point for the backend server.

### Frontend (`book-management-app-frontend`):
- **src/app/**: Angular components, services, and modules.
- **src/assets/**: Static assets like images.
- **src/environments/**: Environment configurations.
- **src/styles.css**: Global styles for the frontend.
- **src/index.html**: Main HTML file for the Angular app.
- **angular.json**: Angular CLI configuration.
- **package.json**: Node dependencies for the frontend.
- **tsconfig.json**: TypeScript configuration.

---

## 📦 Installation

To set up the project locally, follow these steps:

### Backend Setup
```bash
# Navigate to the backend directory
cd book-management-app-backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Edit the .env file and add:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret

# Start the backend server
npm start
```

### Frontend Setup
```bash
# Navigate to the frontend directory
cd book-management-app-frontend

# Install dependencies
npm install

# Configure environment variables
# Edit the src/environments/environment.ts file:
# export const environment = { production: false, apiUrl: 'http://localhost:5000/api' };

# Start the frontend application
ng serve

# Open the application in your browser
http://localhost:4200
```

---

## 🔧 Usage

- **Register**: Create a new account.
- **Login**: Authenticate with your credentials.
- **Add Books**: Enter book details like title, author, and genre.
- **View Books**: Browse the list of all books.
- **Edit/Delete Books**: Modify or remove existing books.
- **Admin Dashboard**: View all users and books.

---

## 📜 API Documentation

The backend API is documented using Swagger.

```bash
# Ensure the backend server is running

# Open Swagger documentation in your browser:
http://localhost:5000/api-docs
```

---

 

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/license/mit)

---
 

