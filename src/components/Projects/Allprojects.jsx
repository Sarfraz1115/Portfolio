import React from 'react';
import './allproject.css';

const projects = [
    {
        title: "URL Shortner",
        description: " web app that shortens long URLs and stores them in MongoDB.",
        live: "https://url-shortner-backend-1h1z.onrender.com/",
        github: "https://github.com/Sarfraz1115/URL-Shortner-Backend",
        image: "./tic.jpg",
    },
    {
        title: "Authentication System",
        description: "A simple authentication system using Node.js, Express, and MongoDB.",
        live: "https://auth-login-frontend.vercel.app/signup",
        github: "https://github.com/Sarfraz1115/AuthLogin_Frontend",
        image: "./auth.png",
    },
    {
        title: "Authentication System",
        description: "A simple authentication system using Node.js, Express, and MongoDB.",
        live: "https://auth-login-frontend.vercel.app/signup",
        github: "https://github.com/Sarfraz1115/AuthLogin_Frontend",
        image: "./auth.png",
    },
    {
        title: "Authentication System",
        description: "A simple authentication system using Node.js, Express, and MongoDB.",
        live: "https://auth-login-frontend.vercel.app/signup",
        github: "https://github.com/Sarfraz1115/AuthLogin_Frontend",
        image: "./auth.png",
    },
    
   
];

const Allprojects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="photo"><img src={project.image}alt="" /></div>
                        <h2 className="project-name">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className='project-btns'>
                            <a href={project.live} target='_blank' className="project-live">
                                Live Demo
                            </a>
                            <a href={project.github} target='_blank' className="project-live">
                                Github 
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allprojects;