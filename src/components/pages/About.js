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
              <img id='portrait' src='/images/pfp resized.jpg' alt='matthew pfp'/>
          </div>
          <p className='intro-text'>
            Hi, I'm Matthew! I'm currently a junior studying Computer Engineering at 
            UC San Diego who loves cooking and playing volleyball. I have past 
            technical internship experience in both frontend web development and 
            QA automation software testing. I'm particularly interested in working 
            in software engineering and embedded systems. I'm always eager to learn 
            and open to connecting, so don't hesitate to reach out!
            <br/><br/>
            Contact: matthew.z.tan@gmail.com
          </p>
        </div>
        
        <div className='link-about'>
          <div className='lab-links-newtab'>
            <a className='link-about' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/matthewztan'>
              <i class="fa-brands fa-linkedin-in fa-flip about-link-animation"></i> LinkedIn
            </a>
            <a className='link-about' rel='noreferrer' target='_blank' href='https://github.com/tantime'>
              <i class="fa-brands fa-github fa-flip about-link-animation"></i> GitHub
            </a>
            <a className='link-about' rel='noreferrer' target='_blank' href='https://www.instagram.com/tantime.jpg/'>
              <i class="fa-brands fa-instagram fa-flip about-link-animation"></i> Instagram
            </a>
          </div>
        </div>
        {/* <div className='about-extra'>
          <img className='gif-about' src='videos/ghibli4.gif' alt=''/>
          <p id='about-gif-description'><small style={{ fontStyle:'italic' }}>The Secret World of Arriety by Hayao Miyazaki</small></p>
        </div> */}
        <br/><br/>
      </div>
    </>
  )
}