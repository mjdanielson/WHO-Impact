mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vsc2V5LXRheWxvciIsImEiOiJjazJ3ZWl2a2YwZHU2M21xbDJnYXA2Z29tIn0.pnZVgZveufjFh20yW0ZI7g';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: "mapbox://styles/kelsey-taylor/ck8rtidlk0e4l1insom55xyku", //YOUR TURN: choose a style: https://docs.mapbox.com/api/maps/#styles
        center: [3.867, 33.724], // starting position [lng, lat]
        zoom: 1, // starting zoom
    });

const menuControl =  document.getElementById('menu-hamburger');
// console.log(menuControl)
const menu = document.querySelector('.menu');
// console.log(menu)
const menuClose = document.getElementById('menu-close');

menuControl.addEventListener('click', () => {
    menu.classList.add('menu-open')

})

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu-open')
})



   







