import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <nav className='foonav'>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#hero">Hero</a></li>
            <li><a href="#aboutme">about me</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2024 Syed Sarfraz. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer