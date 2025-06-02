import React from 'react'
import "./project.css";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Project = () => {
    const navigate = useNavigate();

    const allmyprojects = () => {
        navigate('/projects')
    }
    
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
                            <div className="photo"><img className='news' src="./p.png" alt="" /></div>
                            <h2>TaskMaster</h2>
                            <div className="btns">
                                <a href="https://github.com/Sarfraz1115/TodoWithSupabase" target='_blank' className='git'>Github</a>
                                <a href="https://todo-with-supabase-alpha.vercel.app/" target='_blank' className='live'>Live demo</a>
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
                                <a href="https://github.com/Sarfraz1115/React-Projects/tree/main/3-TicTacToe-Game" target='_blank' className='git'>Github</a>
                                <a href="https://tictactoe-eight-delta.vercel.app/" className='live'>Live demo</a>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='allprojects'>
                    <button className='projectbtn' onClick={allmyprojects}>
                        All Projects
                        <ArrowRight className='arrow' />
                    </button>
                </div>
            </div>




        </>
    )
}

export default Project