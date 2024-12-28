import React from 'react'
import "./about.css";
const About = () => {
  return (
    <>
      <div className="full-about" id='aboutme'>
        <div className='top-about-container'>
          <p>Get to know more</p>
          <h1>About me</h1>
        </div>


        <div className='about-container'>
          <div className="about-pic-container">
            <img src="./profile-pic.png" alt="" />
          </div>

          <div className="about-detail-container">
            <div className="about-container">
              <div className="detail-container">
                <img src="./experience.png" alt="" />
                <h3>Experience</h3>
                <p>1.5 years <br /> FrontEnd Development</p>
              </div>

              <div className="detail-container">
                <img src="./education.png" alt="" />
                <h3>Education</h3>
                <p>B-Tech Bachelor Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dicta, recusandae?
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, assumenda.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, excepturi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, recusandae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nulla!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About