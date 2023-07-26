import React from 'react'
import '../../App.css'
import './Marathon.css'

export default function Marathon() {
    return(
        <>
          <div id='marathon-container'>
            <h1>MARATHON - Life Goal App</h1>
            <h3>
              Marathon was my group's project at SD Hacks 2022. The purpose of our web app was
              to help our users set goals and keep them on track to complete them. We won the 
              Community Award, given to the project most beneficial to the community. Below 
              is the prototype user flow that I designed for our web app using Figma. <br/> <br/>
              Click around or use arrow keys to navigate the user flow!
            </h3>
            <iframe 
              title='marathon-user-flow'
              id='figma-embed'
              src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqQnfQJbF7wA45J47RFxxTw%2FSD-Hacks-2022---User-Flow%3Fnode-id%3D12-584%26starting-point-node-id%3D12%253A584%26mode%3Ddesign%26t%3DNVhFMWplCzJzn0hL-1"'
              allowfullscreen>
            </iframe>
            <h3>
              I also designed a slide deck for our elevator pitch given to the judges!
            </h3>

            <div className='img-container'>
              <img className='slide-img' src={'/images/marathon1.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon2.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon3.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon4.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon5.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon6.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon7.png'} alt=''/>
              <img className='slide-img' src={'/images/marathon8.png'} alt=''/>
            </div>

            <h3>
              Here's a link to our SD Hacks 2022 project posted on Devpost: <br/>
              <a rel='noreferrer' target='_blank' href='https://devpost.com/software/marathon-gsz8to'>https://devpost.com/software/marathon-gsz8to</a>
            </h3>
          </div>
        </>
    )
}