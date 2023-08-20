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
          coming soon!
          <br/>
          <div id='description-main-technologies'>
            
          </div>
        </p>
      </div>
    </>
  )
}