import React, {useEffect} from 'react'
import '../../App.css'
import './About.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <>
        <div className='about'>
          <h1>ABOUT</h1>
        </div>
        <div className='container-intro'>
          <div className='image-cropper'>
              <img src='/images/pfp3.jpg' alt='matthew pfp'/>
          </div>
          <p className='intro-text'>
            Hi, I'm Matthew! I'm currently a junior studying Computer Engineering at 
            UC San Diego who loves cooking and playing volleyball. I'm particularly
            interested in working in software engineering or embedded systems.
            I'm always eager to learn and am always open to connecting!
            <br/><br/>
            Contact: matthew.z.tan@gmail.com
          </p>
        </div>
        <img className='gif-about' src='videos/ghibli4.gif' alt=''/>
      </>
  )
}