import React, {useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

export default function Art() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <>
      <h1 className='art'>ART</h1>
    </>
  );
}