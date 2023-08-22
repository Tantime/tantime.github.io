import React, {useEffect} from 'react'
import '../../App.css'
import './About.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <div className='container-about'>
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
            I'm always eager to learn and open to connecting!
            <br/><br/>
            Contact: matthew.z.tan@gmail.com
          </p>
        </div>
        <div className='about-extra'>
          <img className='gif-about' src='videos/ghibli4.gif' alt=''/>
          <p id='about-gif-description'><small style={{ fontStyle:'italic' }}>The Secret World of Arriety by Hayao Miyazaki</small></p>
        </div>
        <br/><br/>
        <div className='link-about'>
          <div className='lab-links-newtab'>
            <a className='link-about' rel='noreferrer' target='_blank' href='https://github.com/tantime'>GitHub</a>
            <a className='link-about' rel='noreferrer' target='_blank' href='https://www.instagram.com/tantime.jpg/'>Instagram</a>
          </div>
        </div>
      </div>
    </>
  )
}