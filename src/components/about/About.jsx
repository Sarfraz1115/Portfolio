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
              <p>Hello! I’m Syed Sarfraz, a passionate and dedicated developer with a strong foundation in creating elegant, efficient, and user-friendly solutions. My academic journey began at Little Flower Junior College in Parli Vaijnath, where I completed my 12th grade, and I later earned a <span> B.Tech degree from MBES College of Engineering, Ambajogai.</span> 
                <br/> Over the time, I have honed my skills in front-end and back-end development, specializing in technologies like <span>HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, and Java. </span> I am also proficient in version control systems like Git and GitHub and have a solid grasp of <span> problem-solving techniques and Data Structures & Algorithms (DSA).</span> With a strong commitment to continuous learning, 
                <br/> I stay updated with the latest technologies and trends, ensuring that my solutions are innovative and impactful. In addition to my technical expertise, I pride myself on my adaptability, creativity, and collaborative spirit, making me an effective team player in any project. 
                <br/> When I’m not coding, I enjoy exploring new tech ideas, contributing to open-source projects, and engaging with the developer community. My goal is to combine my skills and enthusiasm to bring value to exciting projects and collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About