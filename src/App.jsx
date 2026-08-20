import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>
  )
}

export default App
