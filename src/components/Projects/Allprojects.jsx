import React from 'react';
import './allproject.css';

const projects = [
    {
        title: "Fitness Tracker App",
        description: "Track your workouts, diet and progress visually.",
        live: "#",
        github: "#",
    },
    {
        title: "Internship Auto-Applier",
        description: "Automates applying to internships on Internshala.",
        live: "#",
        github: "#"
    },
    {
        title: "Weather App",
        description: "Simple weather checker using OpenWeather API.",
        live: "#",
        github: "#"
    },
    {
        title: "Weather App",
        description: "Simple weather checker using OpenWeather API.",
        live: "#",
        github: "#"
    },
    {
        title: "Weather App",
        description: "Simple weather checker using OpenWeather API.",
        live: "#",
        github: "#"
    },
];

const Allprojects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="photo"><img src="./tic.jpg" alt="" /></div>
                        <h2 className="project-name">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className='project-btns'>
                            <a href={project.live} className="project-live">
                                Live Demo
                            </a>
                            <a href={project.github} className="project-live">
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