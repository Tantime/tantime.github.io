import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import '../../App.css';
import Cards from '../Cards';

export default function Code() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <>
      <div className='code'>
        <h1>CODE</h1>
      </div>
      <Cards />
    </>
  );
}