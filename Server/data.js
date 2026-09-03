import { MongoDB } from "./utils/db.js"
import { Product } from "./model/dataSchema.js";
const data = async () => {

  try {
    await MongoDB()
    const data = [
      {
        title: "Learn React",
        description: "A beginner-friendly guide to building modern user interfaces with React."
      },
      {
        title: "Node.js Basics",
        description: "Understand the fundamentals of server-side development using Node.js."
      },
      {
        title: "JavaScript Tips",
        description: "Useful JavaScript tips and tricks for writing cleaner and better code."
      },
      {
        title: "MongoDB Guide",
        description: "Learn how to store, retrieve, update, and delete data using MongoDB."
      },
      {
        title: "Express API",
        description: "Build a simple and powerful REST API using Express.js."
      },
      {
        title: "Frontend Design",
        description: "Explore important principles for creating clean and responsive websites."
      },
      {
        title: "Backend Development",
        description: "Learn the core concepts required to develop reliable backend applications."
      },
      {
        title: "CSS Mastery",
        description: "Improve your website layouts with modern CSS techniques."
      },
      {
        title: "Git Basics",
        description: "Learn how Git helps developers manage and track changes in projects."
      },
      {
        title: "API Authentication",
        description: "Understand how authentication works in modern web applications."
      },
      {
        title: "JWT Authentication",
        description: "Learn how JSON Web Tokens can be used to secure REST APIs."
      },
      {
        title: "React Hooks",
        description: "Explore useful React hooks for managing state and application behavior."
      },
      {
        title: "Database Design",
        description: "Understand how to design efficient and scalable database structures."
      },
      {
        title: "Web Security",
        description: "Learn common security practices for protecting web applications."
      },
      {
        title: "Responsive Website",
        description: "Create websites that work smoothly across mobile, tablet, and desktop devices."
      },
      {
        title: "REST API Basics",
        description: "Learn the basic principles of creating and consuming REST APIs."
      },
      {
        title: "Async JavaScript",
        description: "Understand promises, async functions, and asynchronous JavaScript."
      },
      {
        title: "MERN Stack",
        description: "Build full-stack applications using MongoDB, Express, React, and Node.js."
      },
      {
        title: "Form Validation",
        description: "Learn how to validate user input before sending data to the server."
      },
      {
        title: "Cloud Storage",
        description: "Understand how images and files can be stored using cloud services."
      },
      {
        title: "React Router",
        description: "Learn how to create multiple pages and navigation in React applications."
      },
      {
        title: "Error Handling",
        description: "Implement proper error handling for reliable frontend and backend applications."
      },
      {
        title: "Pagination System",
        description: "Create efficient pagination for displaying large amounts of data."
      },
      {
        title: "Search Feature",
        description: "Build a search system that allows users to quickly find relevant records."
      },
      {
        title: "Filtering Data",
        description: "Learn how to filter database records based on different conditions."
      },
      {
        title: "Sorting Records",
        description: "Implement ascending and descending sorting for application data."
      },
      {
        title: "Admin Dashboard",
        description: "Create an administration panel for managing users and application data."
      },
      {
        title: "User Management",
        description: "Build features for creating, viewing, updating, and deleting users."
      },
      {
        title: "Product Management",
        description: "Manage product information with complete CRUD functionality."
      },
      {
        title: "Online Store",
        description: "Explore the basic features required to build an online shopping application."
      },
      {
        title: "Clean Code",
        description: "Learn practical techniques for writing readable and maintainable code."
      },
      {
        title: "Code Optimization",
        description: "Improve application performance by optimizing unnecessary operations."
      },
      {
        title: "React Performance",
        description: "Discover techniques for improving the performance of React applications."
      },
      {
        title: "State Management",
        description: "Understand different approaches to managing state in React applications."
      },
      {
        title: "Custom Hooks",
        description: "Learn how to create reusable logic using custom React hooks."
      },
      {
        title: "Axios Requests",
        description: "Make GET, POST, PUT, PATCH, and DELETE requests using Axios."
      },
      {
        title: "CRUD Operations",
        description: "Practice creating, reading, updating, and deleting application data."
      },
      {
        title: "Middleware Concepts",
        description: "Understand how middleware works in an Express.js application."
      },
      {
        title: "MongoDB Queries",
        description: "Practice different MongoDB queries for working with application data."
      },
      {
        title: "Mongoose Models",
        description: "Learn how Mongoose schemas and models interact with MongoDB."
      },
      {
        title: "File Upload",
        description: "Learn how users can upload images and files to a web application."
      },
      {
        title: "Password Security",
        description: "Understand how passwords should be securely hashed and stored."
      },
      {
        title: "Login System",
        description: "Build a secure login system with authentication and authorization."
      },
      {
        title: "Role Based Access",
        description: "Control access to application features based on user roles."
      },
      {
        title: "Environment Variables",
        description: "Learn how to safely manage configuration values using environment variables."
      },
      {
        title: "API Testing",
        description: "Test REST API endpoints and verify that they return the expected responses."
      },
      {
        title: "Deployment Basics",
        description: "Learn the basic steps required to deploy a full-stack web application."
      },
      {
        title: "Web Development",
        description: "Explore the fundamental technologies used to build modern websites."
      },
      {
        title: "Developer Portfolio",
        description: "Create a professional portfolio to showcase your development projects."
      },
      {
        title: "Full Stack Project",
        description: "Build a complete application by connecting a React frontend with a backend API."
      }
    ];




    await Product.create(data)
    console.log("Data Store Successfully")
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)

  }
}

data()