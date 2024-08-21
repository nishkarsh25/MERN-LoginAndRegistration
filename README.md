# MERN Stack Authentication Project

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project serves as a robust template for building full-stack web applications using the MERN stack. It encompasses essential features for user authentication, such as user registration and login. Whether you're new to web development or looking to expand your skills, this project provides a solid foundation to explore MERN stack development.


**Features:**

- **User Registration:** Users can create a new account by providing a username and password.
- **User Login:** Registered users can log in to their accounts using their credentials.

## Live Demo

You can try out the live demo of the app [here](https://mern-loginandregistration-1.onrender.com).

## Folder Structure

```
/
|-- client
|   |-- public
|   |-- src
|   |   |-- components
|   |   |-- pages
|   |   |-- App.jsx
|   |   |-- index.jsx
|   |-- package.json
|-- server
|   |-- db
|   |   |-- dbConnection.js
|   |   |-- user.js
|   |-- server.js
|   |-- package.json
|-- README.md
|-- .gitignore



```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/MERN-LoginAndRegistration/blob/main/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-LoginAndRegistration/blob/main/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-LoginAndRegistration/blob/main/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-LoginAndRegistration/blob/main/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 

## Technologies Used

The project leverages the power of modern web technologies to create a seamless user experience:

- **Frontend:**
  - React.js: A popular JavaScript library for building user interfaces.
  - React Router: Used for routing within the React application.
  - Axios: A promise-based HTTP client for making requests to the backend.
  - Tailwind CSS: A utility-first CSS framework for quickly building custom designs.

- **Backend:**
  - Node.js: A JavaScript runtime environment for building server-side applications.
  - Express.js: A minimalist web application framework for Node.js.
  - MongoDB: A NoSQL database for storing application data.
  - Mongoose: An elegant MongoDB object modeling tool for Node.js.
  - Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express application.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-LoginAndRegistration.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node server.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## How to Use:

To use the application, follow these steps:

1. **User Registration:**
- Navigate to the registration page by clicking on the "Sign Up" link.
- Enter your desired username and password in the respective input fields.
- Click on the "Register" button to create your account.

2. **User Login:**
- After registering, you can log in to your account by navigating to the login page.
- Enter your username and password in the login form.
- Click on the "Login" button to access your account.

## API Endpoints

The backend server exposes the following API endpoints:

- `POST /register`: Register a new user.
- `POST /login`: Log in an existing user.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

