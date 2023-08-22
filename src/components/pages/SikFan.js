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
        <h1 className="title">SikFan - Recipe App</h1>
        <p className="description-main">
          Here is a recipe app I made in Android Studio in high school!
          It uses the Spoonacular API to enable the user to search for
          and view recipes.
          <br/>
          <div id='description-main-technologies'>
            Technologies & Languages: Java, Android Studio, Spoonacular API
          </div>
        </p>
        <div className='container-project'>
          <img className='img-sikfan' src='/images/sikfan1.jpg' alt='sikfan1'/>
          <img className='img-sikfan' src='/images/sikfan2.jpg' alt='sikfan2'/>
          <img className='img-sikfan' src='/images/sikfan3.jpg' alt='sikfan3'/>
        </div>
      </div>
    </>
  )
}