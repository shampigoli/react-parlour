
import './App.css'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Milestone from './components/Milestone'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ScrollToTop from './components/ScrollToTop'
import Services from '../Services'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Video from './components/Video'
import {motion} from 'framer-motion'
function App() {

  return (
<>
<motion.div initial='hidden' animate='show'>
  <ScrollToTop/>
  <Home/>
  <Services/>
  <Portfolio/>
  <Milestone/>
  <Blog/>
  <Video/>
  <Pricing/>
  <Testimonials/>
  <Skills/>
  <Contact/>
  <Footer/>
  </motion.div>
</>
  )
}

export default App
