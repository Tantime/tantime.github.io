import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Code from './components/pages/Code';
import Art from './components/pages/Art';
import IosDev from './components/pages/IosDev';
import Marathon from './components/pages/Marathon';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='about/*' element={<About />} />
                    <Route exact path='code/*' element={<Code />} />
                    {/* <Route exact path='art/*' element={<Art />} /> */}
                    <Route exact path='/code/ios-clones' element={<IosDev />} />
                    <Route exact path='/code/marathon' element={<Marathon />} />
                    {/* <Redirect to='/' /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;