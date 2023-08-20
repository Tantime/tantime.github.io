import React, {useEffect} from 'react'
import '../../App.css'
import './IosDev.css'

export default function IosDev() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <>
      <div className="container-main">
        <h1 className="title">iOS Development Projects</h1>
        <p className="description-main">
          Here are a few examples of iOS apps I've made!
          <br/>
          <div id='description-main-technologies'>
            Technologies & Languages: Xcode Storyboards, Swift, CocoaPods, Alamofire
          </div>
        </p>
        <div className='container-project'>
          <div className="container-ios">
            <h3 className="header">Twitter Clone</h3>
            <img className='gif' src='/videos/twitter.gif' alt=''/>
            <p className="description">
              Features: scroll feed, logging in/out, tweeting, retweeting, replying, and liking posts from user's official Twitter account.
              <br/><br/>
              Replicated Twitter using <a target='_blank' rel='noreferrer' href='https://developer.twitter.com/en/docs/twitter-api/v1'>Twitter's API (Standard v1.1)</a>.
              <br/><br/>
              View project GitHub repository <a target='_blank' rel='noreferrer' href='https://github.com/Tantime/Twitter'>here</a>.
            </p>
          </div>
          <div className='container-ios'>
            <h3 className="header">Netflix Clone</h3>
            <img className='gif' src='/videos/netflix.gif' alt=''/>
            <p className="description">
            Features: "now playing" scroll feed, "superhero movies" scroll feed, viewing movie description.
              <br/><br/>
              Replicated Netflix using <a target='_blank' rel='noreferrer' href='http://docs.themoviedb.apiary.io'>The Movie Database API</a>.
              <br/><br/>
              View project GitHub repository <a target='_blank' rel='noreferrer' href='https://github.com/Tantime/Flix'>here</a>.
            </p>
          </div>
          <div className='container-ios'>
            <h3 className="header">Instagram Clone</h3>
            <img className='gif' src='/videos/instagram.gif' alt=''/>
            <p className="description">
              Features: logging in/out, posting picture from camera roll and description,
              commenting on posts, and liking posts.
              <br/><br/>
              View project GitHub repository <a target='_blank' rel='noreferrer' href='https://github.com/Tantime/Parstagram'>here</a>.
            </p>
          </div>
          <div className='container-ios'>
            <h3 className="header">Triton CAPE</h3>
            <img className='gif' src='/videos/triton-cape.gif' alt=''/>
            <p className="description">
              I worked with two other students in my CodePath iOS University - Fall 2021 cohort to build a mobile version of UCSD's CAPE
              (Course and Professor Evaluations) web app.
              <br/><br/>
              View project GitHub repository <a target='_blank' rel='noreferrer' href='https://github.com/Project-CAPE/Triton-Cape'>here</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}