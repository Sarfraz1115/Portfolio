import React from 'react'
import "./hero.css";
const Hero = () => {
  return (
    <section className='hero-section' id='hero'>
      <div className="container">

        <div className="written-section">
          <h3>Hello, I am</h3>
          <h1 className='hero-title'>Syed Sarfraz</h1>
          <p className='hero-desc'>
            FrontEnd Developer and Software Engineer
           </p>

          <a href="./Myresume.pdf" target='_blank' className='resume'>Check Resume </a>
          <a href="https://github.com/Sarfraz1115" target='_blank' className='resume'>Github </a>
          <a href="https://www.linkedin.com/in/syedsarfraz11/" target='_blank' className='resume'> LinkedIn </a>

        </div>
        <div className="images">
          <div className="myimg">
            <img className='myimg1' src="./profile-pic.png" alt="" />
          </div>
          <div className="logos">
            <img className='reactlogo' src="./react.png" alt="" />
            <img src="./html.png" alt="" />
            <img src="./css.png" alt="" />
            <img className='jslogo' src="./js.png" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero