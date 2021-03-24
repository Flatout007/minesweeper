import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Tile from "./components/tile";

document.addEventListener("DOMContentLoaded", (e) => {
     
     //console.log('its Working');
    const main = document.getElementById("main"); 

    ReactDOM.render(<Root />, main);

})