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
                            <div className="photo"><img className='news' src="./news-portal.png" alt="" /></div>
                            <h2>MyNews</h2>
                            <div className="btns">
                            <a href="https://github.com/Sarfraz1115/Tic-Tac-Toe-game" target='_blank' className='git'>Github</a>
                            <a href="https://tic-tac-toe-game-kappa-wine.vercel.app/" className='live'>Live demo</a>
                            </div>
                        </div>
                        <div className="first-about">
                            <div className="photo"><img src="./real.webp" alt="" /></div>
                            <h2>MyChat</h2>
                            <div className="btns">
                            <a href="https://google.com" target='_blank' className='git'>Github</a>
                            <a href="" className='live'>Live demo</a>
                            </div>
                        </div>
                        <div className="first-about">
                            <div className="photo"><img src="./tic.jpg" alt="" /></div>
                            <h2>TicTacToe</h2>
                            <div className="btns">
                                <a href="https://github.com/Sarfraz1115/Tic-Tac-Toe-game" target='_blank' className='git'>Github</a>
                                <a href="https://tic-tac-toe-game-kappa-wine.vercel.app/" className='live'>Live demo</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>




        </>
    )
}

export default Project