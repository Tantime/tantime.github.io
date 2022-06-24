import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

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
        <div className='hero-container'>
            <video id='bgvid' alt='bgvid' src={props.src} autoPlay loop muted />
            <script>
                var vid = document.getElementById('bgvid');
                vid.playbackRate = 0.5;
            </script>
            <h1>MATTHEW TAN</h1>
            {/* <p>WALL·E really is the GOAT.</p> */}
            <p>food-driven · sports addict · wall-e lover</p>
            {/* <section id="cover-section" class="d-flex flex-column justify-content-center align-items-center cover-section">
                <div id="cover-section-container">
                    <h1>Matthew Tan</h1>
                    <h2> I'm 
                        <span 
                        class="txt-rotate" 
                        data-period="2000" 
                        data-rotate="[&quot;a Software Engineer.&quot;, &quot;an Innovator.&quot;, &quot;a Problem Solver.&quot;, 
                            &quot;a Badminton Athlete.&quot;, &quot;an Avid Reader.&quot;]">
                            <span class="wrap">a Badminton Athlete.</span>
                        </span>
                      </h2>
                </div>
            </section> */}
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