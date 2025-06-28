import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {

  return (
    <div className='bg-[#050414]'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='relative pt-20'>
        <Navbar/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
