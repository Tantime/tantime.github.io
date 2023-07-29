import React, {useEffect} from 'react';
import '../../App.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <>
        <div className='about'>
          <h1>ABOUT</h1>
        </div>
          <div className='image-cropper'>
              <img src='/images/pfp3.jpg' alt='matthew pfp'/>
          </div>
      </>
  );
}