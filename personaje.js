import { card, card2 } from './card.js';
const imagenes = document.getElementById('imagenes');

const url = new URLSearchParams(window.location.search);
const id = url.get('alumno')

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then( resp => resp.json())
    .then( personaje => {
        let body = document.querySelector('body');
        imagenes.appendChild(card2(personaje));
    })
    .catch( error => {
    console.log(error);
    })


imagenes.addEventListener('click', (event) => {
    console.log(event.target.id)
if(event.target.id !== 'imagenes' && event.target.id){
    console.log(event.target.id)
       window.location.href = `http://127.0.0.1:5500/index.html`
    }        
})