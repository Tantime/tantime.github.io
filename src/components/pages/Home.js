import React, {useEffect} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div id='scroll-container'>
        <HeroSection src='/videos/video-1.mp4' />
      </div>
    </>
  );
}