import React, { useEffect } from 'react';
import '../../App.css'
import './IosDev.css'

export default function Hydrate() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <>
      <div className="container-main">
        <h1 className="title">HYDRATE - Hydration Reminder Device</h1>
        <p className="description-main">
          Here is a hydration reminder device I made! The LEDs tell you how many sips of
          water you have taken. If you have not taken 4 sips by the end of a set time interval,
          the device will whack you.
          <br/>
          <div id='description-main-technologies'>
            Technologies & Languages: CircuitPython, Python, Adafruit METRO M0 Express
          </div>
        </p>
      </div>
      <div className='container-project'>
        <div className='container-hydrate'>
          <h3 className='header'>Hydrated</h3>
          <video className='video-hydrate' src='/videos/whack not activated.mp4' playsInline controls></video>
          <p className='description'>
            The device counts the number of sips the user has taken using LEDs.
          </p>
        </div>
        <div className='container-hydrate'>
          <h3 className='header'>NOT Hydrated</h3>
          <video className='video-hydrate' src='/videos/whack activated.mp4' playsInline controls></video>
          <p className='description'>
            If the user does not take at least 4 sips in the set time interval, it whacks 
            the user to remind them to stay hydrated.
          </p>
        </div>
      </div>
    </>
  )
}