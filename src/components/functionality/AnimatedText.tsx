import React, {useEffect, useState} from 'react'
import './AnimatedText.css'

const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2.00
const WORDS_TO_ANIMATE = ['volleyball', 'culinary adventures', 'summit hikes', 'dumb jokes', 'bubble waffles', 'what-ifs']

type FadeProp = { fade: 'fade-in' | 'fade-out' }

export const AnimatedText = (props) => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return (
    <div className='text-animation-container'>
      <h2 className='text'>
      lover of... <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>
      </h2>
    </div>
  )
}