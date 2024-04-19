import { useState } from 'react'
import { Router, useLocation } from 'react-router-dom'

import './App.css'
import Navigation from './components/Navigation'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  const showFooter = location.pathname !== '/form' && location.pathname !== '/about' && location.pathname !== '/contact';
  const showHeader = location.pathname !== '/contact' && location.pathname !== '/about';


  return (
    <>
      <Router basename='/textUtils'>

      {<Navigation/>} 
      <div className="heading">

      {showHeader && (
        <h1>WELCOME TO textUtils!</h1>
        )}
      </div>
      
      <Routes>
        {/* <Route path='/navigation' element ={<Navigation/>} /> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      {showFooter && (
        <footer>
      <p>textUtils is your go-to online tool for all things text manipulation. Whether you need to convert text to uppercase or lowercase, reverse a string, copy text, or perform various other text-related tasks, textUtils has got you covered.

      With its user-friendly interface, textUtils makes it easy for users to perform a wide range of text operations quickly and efficiently. Simply input your text into the designated area, select the desired function from the menu, and let textUtils do the rest.</p>
      </footer>
      )}
      </Router>


      
    </>
  )
}

export default App
