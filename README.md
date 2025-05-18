# Rahul Roy - Personal Portfolio

![Portfolio Preview](https://res.cloudinary.com/dknswyxmh/image/upload/v1747594099/Screenshot_2025-05-19_at_00-16-55_Rahul_Roy_Personal_Portfolio_j8c9iq.png)

## Overview

A modern, responsive portfolio website showcasing my projects, skills, and professional experience in software development and design. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with a smooth transition
- **Multilingual Support**: Available in multiple languages
- **Project Showcase**: Detailed project cards with descriptions and links
- **Skills Section**: Visual representation of technical skills
- **Contact Form**: Integrated with EmailJS for direct communication
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Smooth Animations**: Using Framer Motion for enhanced user experience

## Technologies Used

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Internationalization**: i18next
- **Build Tool**: Vite 6
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, illustrations, and styles
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Common components used across pages
│   │   ├── layout/      # Page layout components
│   │   ├── sections/    # Main page sections
│   │   └── ui/          # UI elements
│   ├── constants/       # Constants and configuration
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
```

## Building for Production

```bash
npm run build
# or
yarn build
```

This will generate a `dist` folder with all the optimized production files.

## Deployment

The site can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect with GitHub
- **GitHub Pages**: Deploy the `dist` folder

## Features in Detail

### Multilingual Support
The portfolio supports multiple languages through i18next integration. Language can be switched via the language switcher component.

### Theme Toggle
Users can switch between light and dark themes. The theme preference is saved to local storage.

### Project Showcase
Projects are displayed in a responsive grid with detailed information. Each project card links to both the live site and source code.

### Contact Form
The contact form is connected to EmailJS for sending messages directly from the browser without a backend.

## License

[MIT License](LICENSE)

## Contact

Rahul Roy - rahul.roybak@gmail.com
