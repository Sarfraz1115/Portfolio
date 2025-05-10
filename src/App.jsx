
import './App.css'
import "./index.css"
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Skill from './components/skills/Skill'
import About from './components/about/About'
import Project from './components/Projects/Project'

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import Allprojects from './components/Projects/Allprojects'



function App() {


  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <About />
              <Skill />
              <Project />
              <Contact />
              <Footer />
            </>

          } />
          <Route path='/projects' element={<Allprojects/>}/>
        </Routes>
      </>
    </BrowserRouter>





  )
}

export default App
