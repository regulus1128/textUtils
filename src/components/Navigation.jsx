import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import About from './About'; // Import the About component
// import Contact from './Contact'; // Import the Contact component
import Form from './Form'
// import App from './src/App.jsx'
import './Navigation.css'

function Navigation() {
    const navigate = useNavigate();
    

    function goToForm() {
        navigate("/form");
    }

    function goToAbout() {
        navigate("/about");
    }

    function goToContact() {
        navigate("/contact");
    }

    function goToHome(){
        navigate("/app");
    }

    return (
        <>
            <div class="navbar" className='px-4 flex justify-center '>
                
                <button id='btn' className='p-6 uppercase' onClick={goToHome}>Home</button>
                <button id='btn' className='p-6' onClick={goToForm}>CLICK HERE TO TRY textUtils!</button>
                <button id='btn' className='p-6 uppercase' onClick={goToAbout}>About</button>
                <button id='btn' className='p-6 uppercase' onClick={goToContact}>Contact</button>
            </div>
            {/* Define routes for About and Contact pages */}
            <Routes>
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            
        </>
    );
}

export default Navigation;
