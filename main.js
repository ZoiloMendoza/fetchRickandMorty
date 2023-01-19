const imagenes = document.getElementById('imagenes');

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