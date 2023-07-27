import React, {useEffect} from 'react';
import '../../App.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <>
          <h1 className='about'>Hi, I'm Matthew!</h1>
          <div className='image-cropper'>
              <img src='/images/pfp3.jpg' alt='matthew pfp'/>
          </div>
      </>
  );
}