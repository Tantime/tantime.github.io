import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out my projects!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-9.jpg' 
                    text='Twitter, Instagram, and Netflix iOS Clones'
                    label='iOS Dev'
                    path='/ios-clones' />
                    <CardItem 
                    src='images/img-2.jpg' 
                    text='Marathon. (SD Hacks 2022 Community Winner)'
                    label='UI/UX Design'
                    path='/marathon' />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='SikFan, a recipe app'
                    label='Android Dev'
                    path='/recipes-app' />
                    <CardItem
                    src='images/img-4.jpg'
                    text='HYDRATE, a hydration reminder device'
                    label='Electrical Solution'
                    path='/hydrate' />
                    <CardItem
                    src='images/img-8.jpg'
                    text='CSE 15 Lab Reports - Software Tools and Techinques'
                    label='Documentation'
                    path='/cse15-lab-reports' />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;