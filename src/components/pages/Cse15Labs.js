import React, { useEffect } from 'react';
import '../../App.css'
import './Cse15Labs.css'
import { Link } from 'react-router-dom';

export default function Cse15Labs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <>
      <div className='body-main'>
        <h1>CSE15L Lab Reports</h1>
        <p className='p-cse'><em>Author: Matthew Tan</em></p>
        <div className='lab-links'>
          <Link to='/code/cse15labs/lab1'>Lab Report 1 - Week 2</Link><br/>
          <Link to='/code/cse15labs/lab2'>Lab Report 2 - Week 4</Link><br/>
          <Link to='/code/cse15labs/lab3'>Lab Report 3 - Week 6</Link><br/>
          <Link to='/code/cse15labs/lab4'>Lab Report 4 - Week 8</Link><br/>
          <Link to='/code/cse15labs/lab5'>Lab Report 5 - Week 10</Link><br/>
        </div>
      </div>
    </>
  )
}