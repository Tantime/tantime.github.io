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
import Cse15Labs from './components/pages/Cse15Labs';
import Cse15Lab1 from './components/pages/Cse15Lab1';
import Cse15Lab2 from './components/pages/Cse15Lab2';
import Cse15Lab3 from './components/pages/Cse15Lab3';
import Cse15Lab4 from './components/pages/Cse15Lab4';
import Cse15Lab5 from './components/pages/Cse15Lab5';

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
                    <Route exact path='/code/cse15labs/*' element={<Cse15Labs />} />
                    <Route exact path='/code/cse15labs/lab1' element={<Cse15Lab1 />} />
                    <Route exact path='/code/cse15labs/lab2' element={<Cse15Lab2 />} />
                    <Route exact path='/code/cse15labs/lab3' element={<Cse15Lab3 />} />
                    <Route exact path='/code/cse15labs/lab4' element={<Cse15Lab4 />} />
                    <Route exact path='/code/cse15labs/lab5' element={<Cse15Lab5 />} />
                    {/* <Redirect to='/' /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;