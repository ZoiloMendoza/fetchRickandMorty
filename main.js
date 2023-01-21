const imagenes = document.getElementById('imagenes');

/*mainOption1
const url = 'https://rickandmortyapi.com/api/character';
fetch(url)
    .then((response) =>response.json())
    .then((body) =>{
        body.results.forEach((personaje) => {
            const contenedorImagen = `
            <div class="col p-1">
                <img src="${personaje.image}">
                <p>${personaje.name}</p>
            </div>`;
            imagenes.insertAdjacentHTML('beforeend',contenedorImagen);
        });
    })
    .catch((error) =>{
        console.log(error);
    });
*/
const mainOption2 = async() => {
    try {
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url);
        const body = await response.json();
        body.results.forEach((personaje) => {
            const contenedorImagen = `
            <div class="col p-1">
              <img src="${personaje.image}" id="${personaje.id}">
              <p>${personaje.name}</p>
            </div>`;
            imagenes.insertAdjacentHTML('beforeend',contenedorImagen);
        });
    } catch (error) {
        console.log(error);
    }
}


imagenes.addEventListener('click', (event) => {
   
    let url = `https://rickandmortyapi.com/api/character/${event.target.id}`
    fetch(url)
    .then( resp => resp.json())
    .then( personaje => {
        let body = document.querySelector('body');
        const contenedorImagen = `
            <div class="col p-1">
              <img src="${personaje.image}">
              <p>${personaje.name}</p>
            </div>`;
            body.innerHTML = contenedorImagen;
    })
    .catch( error => {
        console.log(error);
    })
})

mainOption2();


