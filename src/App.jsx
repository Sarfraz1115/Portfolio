
import './App.css'
import "./index.css"
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Skill from './components/skills/Skill'
import About from './components/about/About'
import Project from './components/Projects/Project'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'



function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <div>
  //       <Navbar/>
  //       <Hero/>
  //     </div>
  //   },
  //   {
  //     path: '/About',
  //     element: <div>
  //       <Navbar/>
  //       <About/>
  //     </div>
  //   },
  //   {
  //     path: '/skill',
  //     element: <div>
  //       <Navbar/>
  //       <Skill/>
  //     </div>
  //   },
  //   {
  //     path: '/project',
  //     element: <div>
  //       <Navbar/>
  //       <Project/>
  //     </div>
  //   },
  //   {
  //     path: '/contact',
  //     element: <div>
  //       <Navbar/>
  //       <Project/>
  //     </div>
  //   },
  // ])


  return (
      <>
        <Navbar/>
        <Hero/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
        {/* <RouterProvider router={router}/> */}


      </>
  )
}

export default App
