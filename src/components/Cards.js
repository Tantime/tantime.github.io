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
                    src='images/iOS phone screen.png' 
                    text='iOS Development Projects | Twitter, Instagram, and Netflix'
                    label='iOS Dev'
                    path='/code/ios-clones' />
                    <CardItem 
                    src='images/marathon1.jpg' 
                    text='Marathon | SD Hacks 2022 Community Winner'
                    label='UI/UX Design'
                    path='/code/marathon' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/sikfan3.jpg'
                    text='SikFan | Recipe Android App'
                    label='Android Dev'
                    path='/code/sikfan' />
                    <CardItem 
                    src='images/hydrate1.png'
                    text='HYDRATE | Hydration Reminder Device'
                    label='Electrical'
                    path='/code/hydrate' />
                    <CardItem 
                    src='images/cse15lab2.jpg'
                    text='CSE 15L Lab Reports | Software Tools and Techniques'
                    label='Documentation'
                    path='/code/cse15labs' />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;