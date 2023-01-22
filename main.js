import { card, card2 } from './card.js';
const imagenes = document.getElementById('imagenes');

const mainOption2 = async() => {
    try {
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url);
        const body = await response.json();
        body.results.forEach((personaje) => {
           imagenes.appendChild(card(personaje))
        });
    } catch (error) {
        console.log(error);
    }
}

imagenes.addEventListener('click', (event) => {

    if(event.target.id !== 'imagenes' && event.target.id){
       console.log(event.target.id)
       window.location.href = `http://127.0.0.1:5500/personaje.html?alumno=${event.target.id}`
    }
    
    
})

mainOption2();


