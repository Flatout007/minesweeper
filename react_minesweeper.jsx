import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", (e) => {
     
     //console.log('its Working');
    const main = document.getElementById("main"); 

    ReactDOM.render(<Root />, main);

})