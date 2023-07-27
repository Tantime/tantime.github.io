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
      <h1 className='code'>CODE</h1>
      <section></section>
      <Cards />
    </>
  );
}