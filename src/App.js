import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
      <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact component={Home} />
                {/* <Route path='/code' exact component={Code} />
                <Route path='/art' exact component={Art} />
                <Route path='/about' exact component={About} /> */}
            </Routes>
        </Router>
      </>
  );
}

export default App;
