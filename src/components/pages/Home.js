import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

export default function Home() {
    return (
        <>
            <HeroSection src='/videos/video-1.mp4' />
            <Cards />
        </>
    );
}