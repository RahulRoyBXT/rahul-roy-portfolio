import { Project } from "../types/project";

// Project Data
export const projectsData: Project[] = [
    {
    id: "social-md",
    title: "Social Backend API",
    description:
      "A production-ready backend for modern social media platforms with robust authentication, content management, and social interaction features.",
    image: "https://fakeimg.pl/600x400/0e2852/919191?text=No+Preview",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "RESTful API"],
    demoUrl: "",
    githubUrl: "https://github.com/RahulRoyBXT/social-md",
    fullDescription:
      "A high-performance backend solution designed for social media applications, built with Node.js, Express, and MongoDB. This API provides comprehensive features including secure authentication, media management, and social interactions, all optimized for production environments with enterprise-grade security and performance considerations.",
    features: [
      "Secure Authentication with JWT tokens and refresh token mechanism",
      "Media Platform with video uploads, streaming & thumbnail generation",
      "Social Interactions including comments, likes, tweets & subscription systems",
      "Content Management with playlist creation and organization",
      "Enterprise Security with request validation, sanitization & error handling",
      "Performance Optimized with database indexing & efficient query processing",
      "Well-structured architecture following best practices",
      "Comprehensive API documentation",
    ],
    techStack: [
      "Node.js - Server-side JavaScript runtime",
      "Express - Fast, unopinionated web framework",
      "MongoDB - Flexible NoSQL database",
      "Mongoose v8.13 - Schema-based MongoDB interactions",
      "Zod v3.24 - Runtime schema validation",
      "Cloudinary v2.6 - Media transformations and CDN delivery",
      "JWT v9.0 - Stateless authentication",
      "Bcrypt v5.1 - Secure password hashing",
      "Multer v1.4 - File upload management",
    ],
    challenges:
      "Building a scalable architecture that handles complex social interactions while maintaining performance under heavy load. Implementing secure authentication and authorization with proper error handling and validation throughout the application.",
    solutions:
      "Designed a modular architecture with separate controllers, models, routes, middlewares, and validation layers. Implemented custom error handling with the ApiError class and asynchronous request processing with an asyncHandler utility. Optimized database performance through strategic indexing for frequent query patterns.",
    learnings:
      "This project deepened my understanding of building production-grade APIs with Node.js and Express. I gained expertise in implementing secure authentication flows, handling file uploads and media processing, and designing efficient database schemas for social interactions. The implementation of comprehensive error handling and validation improved the overall reliability and security of the application.",
  },
    {
    id: "movies-app",
    title: "Movies Information App",
    description:
      "A comprehensive movie browsing application with detailed information, ratings, reviews, and personalized recommendations.",
    image: "/movies.png",
    tags: ["React", "TMDb API", "CSS3", "JavaScript"],
    demoUrl: "https://cornmovies.netlify.app/",
    githubUrl: "https://github.com/RahulRoyBXT/movies",
    fullDescription:
      "A feature-rich movie information application that allows users to browse, search, and discover films. Provides detailed information about movies including cast, crew, ratings, and reviews.",
    features: [
      "Extensive movie database with search functionality",
      "Detailed movie information including cast, crew, and trailers",
      "User ratings and reviews",
      "Personalized movie recommendations",
      "Watchlist and favorites management",
      "New releases and upcoming movies section",
    ],
    techStack: [
      "React",
      "TMDb API",
      "CSS3",
      "JavaScript",
      "Local Storage",
      "Responsive Design",
    ],
    challenges:
      "Handling large datasets and creating an intuitive navigation system for browsing thousands of movies.",
    solutions:
      "Implemented efficient data fetching with pagination and caching, along with advanced filtering options to help users find relevant content.",
    learnings:
      "Improved skills in working with third-party APIs, implementing infinite scrolling, and creating responsive grid layouts.",
  },
    {
    id: "llama-chat-backend",
    title: "Llama Chat - Backend Messaging API",
    description:
      "A robust Node.js backend for real-time messaging with Socket.IO, Redis, and MongoDB infrastructure.",
    image: "https://fakeimg.pl/600x400/0e2852/919191?text=No+Preview",
    tags: ["Node.js", "Express", "Socket.IO", "Redis", "MongoDB", "JWT"],
    demoUrl: "",
    githubUrl: "https://github.com/RahulRoyBXT/llm-chat-backend",
    fullDescription:
      "A production-ready backend API powering a real-time messaging platform. Built with Node.js, Express, Socket.IO, and MongoDB, this project demonstrates my ability to create scalable server architectures and implement complex backend systems with proper authentication, data modeling, and WebSocket integration.",
    features: [
      "WebSocket server with Socket.IO and Redis adapter",
      "JWT authentication with refresh token rotation",
      "MongoDB data persistence with optimized schemas",
      "Real-time message delivery with receipt tracking",
      "Redis caching for performance optimization",
      "API rate limiting and security protections",
      "User authentication and friend management APIs",
      "Document processing with PDF extraction",
    ],
    techStack: [
      "Node.js",
      "Express",
      "Socket.IO",
      "Redis",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Bcrypt",
      "Multer",
      "Docker",
    ],
    challenges:
      "Designing a scalable real-time messaging architecture that could handle multiple concurrent connections while ensuring message delivery guarantees across distributed server instances.",
    solutions:
      "Implemented Socket.IO with Redis adapter to enable horizontal scaling across multiple Node.js instances. Created a multi-layered caching strategy where recent messages are stored in Redis for quick access while maintaining MongoDB as the system of record.",
    learnings:
      "Gained practical experience with WebSocket servers, database optimization techniques, and distributed systems concepts. Developed a deeper understanding of authentication flows, real-time data synchronization, and API security best practices.",
  },
  {
    id: "rtc-real-time-chat",
    title: "Real-Time Chat Application",
    description:
      "A feature-rich chat application with real-time messaging, user presence, and multimedia sharing capabilities.",
    image: "/rtc.png",
    tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://rtc-realtimechat.netlify.app/",
    githubUrl: "https://github.com/RahulRoyBXT/RTC---Real-Time-Chat",
    fullDescription:
      "A comprehensive real-time chat application that allows users to communicate instantly. Features include private and group messaging, multimedia sharing, read receipts, and user presence indicators.",
    features: [
      "Real-time messaging with Socket.io",
      "Private and group conversations",
      "Media and file sharing",
      "Read receipts and typing indicators",
      "User presence (online/offline) status",
      "Message history and search",
      "Emoji and GIF support",
    ],
    techStack: [
      "React",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "AWS S3 for file storage",
    ],
    challenges:
      "Ensuring message delivery reliability and maintaining connection state across different network conditions.",
    solutions:
      "Implemented message queuing and offline message storage to handle connection interruptions, along with reconnection logic to provide a seamless experience.",
    learnings:
      "Gained deeper understanding of real-time communication protocols, WebSockets, and handling concurrent user connections.",
  },
  {
    id: "llama-chat-frontend",
    title: "Llama Chat - Mobile-Optimized React Chat App",
    description:
      "A modern, responsive chat application built with React, Redux, and Socket.IO offering real-time messaging capabilities.",
    image: "https://fakeimg.pl/600x400/0e2852/919191?text=No+Preview",
    tags: [
      "React",
      "Redux Toolkit",
      "Socket.IO",
      "Tailwind CSS",
      "DaisyUI",
      "Vite",
      "PWA",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/RahulRoyBXT/llm-chat-Client",
    fullDescription:
      'Llama Chat is a feature-rich, mobile-optimized real-time messaging application built with React and Redux. The app features a clean, intuitive UI designed with Tailwind CSS and DaisyUI, focusing on mobile responsiveness while showing a "coming soon" indicator for desktop users. It offers seamless real-time communication through Socket.IO integration, comprehensive user authentication, and a smooth, animated user experience.',
    features: [
      "Real-time messaging with Socket.IO",
      "Mobile-first responsive design",
      "Comprehensive Redux state management",
      "User authentication with JWT",
      "Friend request system with status tracking",
      "Dark/light theme switching",
      "Persistent storage with redux-persist",
      "Animated UI transitions with Framer Motion",
      "Progressive Web App capabilities",
      "Protected routes for authenticated users",
    ],
    techStack: [
      "React 18",
      "Redux Toolkit",
      "React Router v7",
      "Socket.IO Client",
      "Tailwind CSS v4",
      "DaisyUI",
      "Vite",
      "Axios",
      "React Icons",
      "Redux Persist",
      "Framer Motion",
      "PWA with Vite Plugin",
    ],
    challenges:
      "Building a responsive real-time chat application that handles complex state management across multiple components, including online status indicators, message delivery confirmation, and friend request management, while maintaining a smooth user experience on mobile devices.",
    solutions:
      "Implemented a robust Redux architecture with specialized slices for authentication, messages, friends, and themes. Created a custom socket context to handle real-time communication efficiently. Utilized Tailwind CSS and DaisyUI for consistent, responsive styling with theme support. Employed React Router for smooth navigation with protected routes for authenticated users.",
    learnings:
      "Gained deep experience with real-time application development using WebSockets, refined skills in Redux state management for complex applications, and developed expertise in creating mobile-optimized interfaces. Enhanced understanding of authentication flows, state persistence, and responsive design patterns for modern web applications.",
  },
  {
    id: "countries-info",
    title: "Countries Information Portal",
    description:
      "An interactive application providing comprehensive information about countries around the world.",
    image: "/countries.png",
    tags: ["React", "REST Countries API", "CSS3", "JavaScript"],
    demoUrl: "https://urcountry.netlify.app/",
    githubUrl: "https://github.com/RahulRoyBXT/CountriesInfo",
    fullDescription:
      "An educational web application that provides detailed information about countries worldwide. Users can explore countries by region, search for specific countries, and view detailed information including geography, demographics, and flags.",
    features: [
      "Country search and filtering by region",
      "Detailed country profiles with flags, population, and geography",
      "Interactive map integration",
      "Currency and language information",
      "Border countries and regional groupings",
      "Light and dark theme options",
    ],
    techStack: [
      "React",
      "REST Countries API",
      "CSS3",
      "JavaScript",
      "Leaflet Maps",
      "Responsive Design",
    ],
    challenges:
      "Presenting complex geographical and demographic data in an accessible and user-friendly format.",
    solutions:
      "Created an intuitive UI with interactive visualizations and implemented a sophisticated filtering system to help users navigate the information effectively.",
    learnings:
      "Enhanced skills in data visualization, frontend filtering, and creating engaging user interfaces for educational content.",
  },
  {
    id: "free-to-play",
    title: "Free-To-Play Games Hub",
    description:
      "A gaming platform that showcases free-to-play games across multiple platforms with detailed information and download links.",
    image: "/games.png",
    tags: ["React", "FreeToGame API", "CSS3", "JavaScript"],
    demoUrl: "https://free-to-play-oont.vercel.app/",
    githubUrl: "https://github.com/RahulRoyBXT/FreeToPlay",
    fullDescription:
      "A comprehensive platform for discovering free-to-play games across PC, browser, and mobile platforms. Features include game filtering by genre and platform, detailed game information, and direct links to play or download games.",
    features: [
      "Extensive catalog of free-to-play games",
      "Filtering by genre, platform, and popularity",
      "Detailed game profiles with screenshots and system requirements",
      "User ratings and reviews",
      "Direct download and play links",
      "New releases and trending games sections",
    ],
    techStack: [
      "React",
      "FreeToGame API",
      "CSS3",
      "JavaScript",
      "Local Storage",
      "Responsive Design",
    ],
    challenges:
      "Creating a fast, responsive interface for browsing a large catalog of games with rich media content.",
    solutions:
      "Implemented lazy loading for images, efficient component architecture, and client-side caching to improve performance and user experience.",
    learnings:
      "Developed skills in creating category-based filtering systems and optimizing media-heavy web applications.",
  },
    {
    id: "book-shop-ecommerce",
    title: "Book Shop E-Commerce",
    description:
      "A full-featured online bookstore with shopping cart, user authentication, and payment processing.",
    image: "/booknest.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    demoUrl: "",
    githubUrl: "https://github.com/RahulRoyBXT/book-shop-ecommerce",
    fullDescription:
      "A modern e-commerce platform specialized for selling books online. Features include product browsing, searching, filtering, user authentication, shopping cart functionality, and secure payment processing.",
    features: [
      "User authentication and profile management",
      "Book catalog with search and filter capabilities",
      "Shopping cart with persistent storage",
      "Checkout process with payment integration",
      "Order history and tracking",
      "Admin panel for inventory management",
    ],
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Stripe API",
      "Bootstrap",
    ],
    challenges:
      "Implementing a secure and intuitive checkout process while managing inventory in real-time.",
    solutions:
      "Created a robust state management system using Redux and implemented inventory checks during the checkout process to prevent overselling.",
    learnings:
      "Enhanced my understanding of e-commerce workflows, payment gateway integration, and handling sensitive user data.",
  },
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
