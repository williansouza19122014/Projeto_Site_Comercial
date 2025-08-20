import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


// Importing pages
import Home from './pages/Home'
import About from './pages/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


//UTILS
import ScrollToTop from './components/utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading){
    return 
    <LoadingSpinner/>
  }
  
  
  
  
  
  
  
  return (
    <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/projects" element={<Projects/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
      </Router>
  )
}

export default App
