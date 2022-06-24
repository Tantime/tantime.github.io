import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import widget from '../widget';

export default function IosClones() {
    return(
        <>
            <div class="github-card" data-github="Tantime" data-width="400" data-height="" data-theme="default"></div>
            <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
            <h1 className='code'>CODE</h1>
            <Cards />
        </>
    );
}