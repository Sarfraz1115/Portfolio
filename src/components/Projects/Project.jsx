import React from 'react'
import "./project.css";
const Project = () => {
    return (
        <>

            <div className="projects" id='project'>
                <div className="top-bar">
                    <p>Explore My projects</p>
                    <h1>Projects</h1>
                </div>


                <div className="project-container">
                    <div className="about">
                        <div className="first-about">
                            <div className="photo"><img src="./project-1.png" alt="" /></div>
                            <h2>Project 1</h2>
                            <div className="btns">
                                <button className='git'>Github</button>
                                <button className='live'>Live Demo</button>
                            </div>
                        </div>
                        <div className="first-about">
                            <div className="photo"><img src="./project-2.png" alt="" /></div>
                            <h2>Project 2</h2>
                            <div className="btns">
                                <button className='git'>Github</button>
                                <button className='live'>Live Demo</button>
                            </div>
                        </div>
                        <div className="first-about">
                            <div className="photo"><img src="./project-3.png" alt="" /></div>
                            <h2>Project 3</h2>
                            <div className="btns">
                                <button className='git'>Github</button>
                                <button className='live'>Live Demo</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>




        </>
    )
}

export default Project