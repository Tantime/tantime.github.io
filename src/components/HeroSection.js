import React from 'react';
import '../App.css';
import './HeroSection.css';
import { AnimatedText } from './functionality/AnimatedText.tsx';

function HeroSection(props) {
  const renderVid = () => {
    if(props.src != null) {
      var vid = props.src;
      document.write("<video id='bgvid' alt='bgvid' src='" + vid + "' autoPlay loop muted />");
    } else {
      document.write("<video id='bgvid' alt='bgvid' src='/videos/video-1.mp4' autoPlay loop muted />");
    }
  };
  
  return (
    <>
      <div className='hero-container'>
        <video id='bgvid' alt='bgvid' src={props.src} autoPlay playsInline loop muted />
          <script>
              var vid = document.getElementById('bgvid');
              vid.playbackRate = 0.5;
          </script>
          <h1>MATTHEW TAN</h1>
          <AnimatedText />
          {/* <div className='hero-btns'>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                  GET STARTED
              </Button>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                  WATCH TRAILER <i className='far fa-play-circle' />
              </Button>
          </div> */}
      </div>
    </>
  );
}

export default HeroSection;