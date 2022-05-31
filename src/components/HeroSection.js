import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/WALL-E Ending.mp4' autoPlay loop />
        <h1>MATTHEW TAN</h1>
        <p>WALL·E really is the GOAT.</p>
        {/* <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div> */}
    </div>
  );
}

export default HeroSection;