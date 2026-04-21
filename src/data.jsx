import nextjs from './assets/nextjs.svg'
import react from './assets/react.svg'
import typescript from './assets/typescript.svg'
import javascript from './assets/javascript.svg'
import tailwind from './assets/tailwind.svg'
import bootstrap from './assets/bootstrap.svg'
import css from './assets/css.svg'
import html from './assets/html.svg'
import node from './assets/node.svg'
import mongo from './assets/mongo.svg'
import git from './assets/git.svg'
import gitHub from './assets/gitHub.svg'
import python from './assets/python.svg'
import jwt from './assets/jwt.svg'
import firebase from './assets/firebase.svg'
import googleCloud from './assets/googleCloud.svg'
import postgresql from './assets/postgresql.svg'
import prisma from './assets/prisma.svg'
import express from './assets/express.png'
import socketio from "./assets/socketio.svg"
import hotelBooking from './assets/hotelBooking.webp'
import foodOrdering from './assets/foodOrdering.webp'
import authentication from './assets/authentication.webp'
import eCommerce from './assets/eCommerce.webp' 
import crudSystem from './assets/crudSystem.webp'
import dashboard from './assets/dashboard.webp'
import landingPage from './assets/landingPage.webp'
import weatherApp from './assets/weatherApp.webp'
import techZone from './assets/techZone.webp'
import oneFurever from './assets/oneFurever.webp'
import greenZone from './assets/greenZone.webp'
import stadiumEye from './assets/stadiumEye.webp'
import neuronWave from './assets/NeuronWave.webp'
import chatApp from './assets/chatApp.webp'

export const assets = {
    nextjs,
    react,
    typescript,
    javascript,
    tailwind,
    bootstrap,
    css,
    html,
    node,
    express,
    mongo,
    git,
    gitHub,
    python,
    jwt,
    firebase,
    postgresql,
    prisma,
    socketio,
    googleCloud,
    hotelBooking,
    foodOrdering,    
    authentication,
    eCommerce,
    crudSystem,
    dashboard,
    landingPage,
    weatherApp,
    techZone,
    oneFurever,
    greenZone,
    stadiumEye,
    neuronWave,
    chatApp
}

export const projects = [
    {
        id: 1,
        title: "Landing Page",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "A clean and fully responsive landing page built with HTML and CSS, optimized for all screen sizes and devices.",
        image: assets.landingPage,
        skills: [assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/project_2_HTML-CSS",
        link: "https://seif1.netlify.app/",
        demo: ""
    },
    {
        id: 2,
        title: "Dashboard",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Responsive dashboard website featuring project, profile, and settings sections. Designed for easy navigation and user interaction.",
        image: assets.dashboard,
        skills: [assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/project_3_HTML-CSS",
        link: "https://wheatherseif.netlify.app/",
        demo: ""
    },
    {
        id: 3,
        title: "Weather App",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Fetches real-time weather data from an API and displays it in a clean, user-friendly interface. Users can search by city and view detailed forecasts.",
        image: assets.weatherApp,
        skills: [assets.javascript, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/Weather-app",
        link: "https://wheatherseif.netlify.app/",
        demo: ""
    },
    {
        id: 4,
        title: "CRUD System",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "A simple CRUD system for managing user data. Includes create, read, update, and delete operations with an intuitive interface.",
        image: assets.crudSystem,
        skills: [assets.javascript, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/CRUD-system",
        link: "https://crud-seif.netlify.app/",
        demo: ""
    },
    {
        id: 5,
        title: "E-commerce Website",
        type: "Frontend",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "A complete e-commerce solution built with React, featuring user authentication, product browsing, and a dynamic shopping cart. Fully responsive and user-friendly.",
        image: assets.eCommerce,
        skills: [assets.react, assets.javascript, assets.bootstrap, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/E-Commerce-Project",
        link: "https://seifstore.netlify.app/",
        demo: "https://drive.google.com/file/d/1iOfnRHO2fDgg6p4PkND5hmv3frvptE6G/view"
    },
    {
        id: 6,
        title: "Authentication System",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "A secure authentication system using JWT and password hashing. Includes email verification, password reset, user registration, login, and profile management.",
        image: assets.authentication,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.bootstrap, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/Authentication-System",
        link: "",
        demo: "https://drive.google.com/file/d/1p-lKUyuLDfGe_eg07P4Dg4iMIB-rqJFr/view"
    },
    {
        id: 7,
        title: "Food Ordering App",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Full-featured food ordering platform to browse the menu, place and track orders. Includes admin panel for managing menu and orders, JWT-based authentication, role-based authorization, email notifications, secure Stripe payment integration, and REST APIs with search, filtering, and pagination features.",
        image: assets.foodOrdering,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.tailwind, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/food-ordering",
        link: "",
        demo: "https://drive.google.com/file/d/1eQKkVL4a3iiROa3WdLa8HOySwRmjPHUn/view"
    },
    {
        id: 8,
        title: "Hotel Booking App",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Full-stack hotel booking platform to browse rooms, make reservations, and pay securely with Stripe. Includes an admin dashboard for hotel owners to manage rooms, and bookings, with JWT-based authentication, role-based authorization, email notifications, and REST APIs with search, filtering, and pagination features.",
        image: assets.hotelBooking,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.tailwind, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/hotel-booking",
        link: "https://hotel-booking-frontend-sage.vercel.app/",
        demo: ""
    },
    {
        id: 9,
        title: "Tech Zone Project",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Full-stack e-commerce platform for buying and selling products online with admin management features. JWT-based authentication, role-based authorization, email notifications to users, secure Stripe payment integration, and REST APIs with search, filtering, and pagination features.",
        image: assets.techZone,
        skills: [assets.node, assets.react, assets.javascript, assets.express, assets.mongo, assets.jwt, assets.tailwind, assets.css, assets.html],
        github: "https://github.com/seif-el-sayed1/Tech-Zone-E-Commerce-Project",
        link: "https://tech-zone-iota.vercel.app/",
        demo: "https://drive.google.com/file/d/1jPjVoeoPJV59Dvz1lREiKkXNyDNEe1-F/view?usp=drive_link"
    },
    {
        id: 10,
        title: "OneFurever Application",
        type: "Backend",
        contribution: true,
        repoPrivate: true,
        projectPrivate: false,
        inProgress: false,
        description: "Real-world backend for managing pet adoptions, connecting users with adoptable pets efficiently. Includes JWT-based authentication, role-based authorization, email notifications, Firebase Cloud Messaging (FCM) notification system, Firebase storage for media, and REST APIs with search, filtering, and pagination features.",
        image: assets.oneFurever,
        skills: [assets.node, assets.express, assets.mongo, assets.javascript, assets.jwt, assets.firebase],
        github: "https://github.com/onefurever/oneFurever-BackEnd.git",
        link: "https://play.google.com/store/apps/details?id=com.neon.furreverapp",
        demo: ""
    },
    {
        id: 11,
        title: "Green Zone",
        type: "Backend",
        contribution: true,
        repoPrivate: true,
        projectPrivate: true,
        inProgress: true,
        description: "Private Farm Management System backend to manage farms, workers, salaries, and invoices efficiently. Includes JWT-based authentication, role-based authorization, email notifications, Firebase Cloud Messaging (FCM) notification system, PDF/Excel report generation, Firebase storage, and REST APIs with search, filtering, and pagination features.",
        image: assets.greenZone,
        skills: [assets.node, assets.express, assets.mongo, assets.javascript, assets.jwt, assets.firebase],
        github: "https://github.com/kirollosrafik98/GreenZone-BackEnd.git",
        link: "PRIVATE",
        demo: ""
    },
    {
        id: 12,
        title: "Stadium Eye",
        type: "Backend",
        contribution: false,
        repoPrivate: true,
        projectPrivate: false,
        inProgress: true,
        description: "Backend for stadium management with ticketing system and AI image analysis for safety/visual issues. Includes JWT-based authentication, role-based authorization, email notifications, PDF/Excel report generation, and REST APIs with search, filtering, and pagination features.",
        image: assets.stadiumEye,
        skills: [assets.node, assets.express, assets.mongo, assets.javascript, assets.googleCloud, assets.jwt],
        github: "https://github.com/seif-el-sayed1/StadiumEye_Backend.git",
        link: "SOON",   
        demo: ""
    },
    {
        id: 13,
        title: "Neuron Wave",
        type: "Backend",
        contribution: false,
        repoPrivate: true,
        projectPrivate: false,
        inProgress: true,
        description: "Backend for a doctor appointment booking system with AI-assisted medical image analysis, real-time chat, and secure video call functionality for patients and doctors. Includes JWT-based authentication, role-based authorization, email notifications, Firebase real-time notification system, PDF/Excel report generation, and RESTful APIs with search, filtering, and pagination features.",
        image: assets.neuronWave,
        skills: [assets.node, assets.express, assets.mongo, assets.socketio, assets.javascript, assets.firebase, assets.jwt],
        github: "https://github.com/seif-el-sayed1/NeuronWave_Backend.git",
        link: "SOON",   
        demo: ""
    },
    {
        id: 14,
        title: "Chat App",
        type: "Full Stack",
        contribution: false,
        repoPrivate: false,
        projectPrivate: false,
        inProgress: false,
        description: "Full-stack real-time chat application featuring optimistic UI for instant messaging, a complete message status system (sent, delivered, read), real-time typing indicators, and live user blocking. Supports media uploads with optimistic previews and secure OTP email verification. Built with a scalable architecture and a responsive modern UI.",
        image: assets.chatApp,
        skills: [assets.node, assets.express, assets.mongo, assets.socketio, assets.react, assets.tailwind, assets.javascript, assets.firebase, assets.jwt],
        github: "https://github.com/seif-el-sayed1/SocketIO-ChatApp-Backend",
        link: "https://chat-me-amber.vercel.app/",   
        demo: "https://drive.google.com/file/d/1VgwyLVsXeckYUY-6dWpfz4xcr9f1OYys/view?usp=sharing"
    }

];

export const aboutMe = [
  {
    icon: "⚡",
    text: "Backend Developer with strong real-world experience and solid Full Stack expertise."
  },
  {
    icon: "🛠️",
    text: "Specialized in creating efficient, scalable backend systems using Node.js, Express.js, and MongoDB."
  },
  {
    icon: "🌐",
    text: "Proficient in frontend development with React, enabling full-stack solutions and seamless integration."
  },
  {
    icon: "📈",
    text: "Continuously learning and exploring new technologies to deliver high-quality solutions."
  },
];

export const info = [
  "Professional backend developer with real-world experience in freelance and company projects.",
  "Expert in building robust and scalable backend systems using Node.js, Express.js, and MongoDB.",
  "Proficient in frontend development with React to deliver full-stack solutions when needed.",
  "Skilled in designing secure authentication, APIs, and database management."
];

export const frontendSkills = [
    {
        label: "React",
        icon: assets.react,
        bgColor: "rgba(97, 218, 251, 0.15)",       
        shadow: "0 0 20px rgba(97, 218, 251, 0.8)", 
        textColor: "#61DAFB"                       
    },
    {
        label: "JavaScript",
        icon: assets.javascript,
        bgColor: "rgba(247, 223, 30, 0.15)",
        shadow: "0 0 20px rgba(247, 223, 30, 0.8)",
        textColor: "#F7DF1E"
    },
    {
        label: "Tailwind",
        icon: assets.tailwind,
        bgColor: "rgba(56, 189, 248, 0.15)",
        shadow: "0 0 20px rgba(56, 189, 248, 0.8)",
        textColor: "#38BDF8"
    },
    {
        label: "Bootstrap",
        icon: assets.bootstrap,
        bgColor: "rgba(121, 82, 179, 0.15)",
        shadow: "0 0 20px rgba(121, 82, 179, 0.8)",
        textColor: "#CBA5FF" 
    },
    {
        label: "CSS",
        icon: assets.css,
        bgColor: "rgba(38, 77, 228, 0.15)",
        shadow: "0 0 20px rgba(38, 77, 228, 0.8)",
        textColor: "#80B3FF"
    },
    {
        label: "HTML",
        icon: assets.html,
        bgColor: "rgba(227, 79, 38, 0.15)",
        shadow: "0 0 20px rgba(227, 79, 38, 0.8)",
        textColor: "#FF8A65"
    }
]
export const backendSkills = [
    {
        label: "Node Js",
        icon: assets.node,
        bgColor: "rgba(83, 142, 64, 0.15)",
        shadow: "0 0 20px rgba(83, 142, 64, 0.8)",
        textColor: "#539E43"
    },
    {
        label: "Express Js",
        icon: assets.express,   
        bgColor: "#000000", 
        shadow: "0 0 20px rgba(0, 0, 0, 0.8)", 
        textColor: "#FFFFFF" 
    },
    {
        label: "MongoDB",
        icon: assets.mongo,
        bgColor: "rgba(69, 161, 73, 0.15)",
        shadow: "0 0 20px rgba(69, 161, 73, 0.8)",
        textColor: "#47A248"    
    },
    {
        label: "PostgreSQL",
        icon: assets.postgresql,
        bgColor: "rgba(51, 103, 145, 0.15)",
        shadow: "0 0 20px rgba(51, 103, 145, 0.8)",
        textColor: "#336791"
    },
    {
        label: "Prisma",
        icon: assets.prisma,
        bgColor: "rgba(45, 55, 72, 0.15)",
        shadow: "0 0 20px rgba(45, 55, 72, 0.8)",
        textColor: "#2D3748"
    },
    {
        label: "Socket.IO",
        icon: assets.socketio,
        bgColor: "rgba(255, 255, 255, 0.9)",
        shadow: "0 0 20px rgba(0, 0, 0, 0.15)",
        textColor: "#010101"
    },
    {
        label: "JWT",
        icon: assets.jwt,
        bgColor: "rgba(255, 206, 84, 0.15)",
        shadow: "0 0 20px rgba(255, 206, 84, 0.8)",
        textColor: "#FFCE54"
    },
    {
        label: "Firebase",
        icon: assets.firebase,
        bgColor: "rgba(255, 152, 0, 0.15)",
        shadow: "0 0 20px rgba(255, 152, 0, 0.8)",
        textColor: "#FF9800"
    }
]

export const additionalSkills = [
    {
        label: "Git",
        icon: assets.git,
        bgColor: "rgba(240, 80, 51, 0.15)",
        shadow: "0 0 20px rgba(240, 80, 51, 0.8)",
        textColor: "#F05033"
    },
    {
        label: "GitHub",
        icon: assets.gitHub,
        bgColor: "#F2F2F2",
        shadow: "0 0 20px rgba(255, 255, 255, 0.9)",
        textColor: "#000"
    },
    {
        label: "Python",
        icon: assets.python,
        bgColor: "rgba(49, 120, 198, 0.15)",
        shadow: "0 0 20px rgba(49, 120, 198, 0.8)",
        textColor: "#3178C6"
    }

]
export const navLinks = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Skills",
            path: "/skills",
        },
        {
            label: "Projects",
            path: "/projects",
        },
        {
            label: "About Me",
            path: "/aboutMe"
        },
        {
            label: "Contact Me",
            path: "/contact"
        },
    ]

export const sideLinks = [
    {
        label: "Home",
        path: "/",
        icon:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>

    },
    {
        label: "Skills",
        path: "/skills", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
    },
    {
        label: "Projects",
        path: "/projects",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><path d="M18 19c-2.8 0-5-2.2-5-5v8"></path><circle cx="20" cy="19" r="2"></circle></svg>    
    },
    {
        label: "About Me",
        path: "/aboutMe",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
    },
    {
        label: "Contact Me",
        path: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
    },
]
