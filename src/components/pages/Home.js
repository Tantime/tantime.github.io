import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

export default function Home() {
  return (
    <>
      <div id='scroll-container'>
        <HeroSection src='/videos/video-1.mp4' />
      </div>
    </>
  );
}