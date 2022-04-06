import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Code from './components/pages/Code';
import Art from './components/pages/Art';

function App() {
    // const [showHome, setShowHome] = useState(false);
    
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if(window.scrollY > 400) {
    //             setShowHome(true);
    //         } else {
    //             setShowHome(false);
    //         }
    //     });
    // }, []);

    // const goHome = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='about/*' element={<About />} />
                    <Route exact path='code/*' element={<Code />} />
                    <Route exact path='art/*' element={<Art />} />
                    {/* <Redirect to='/' /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;