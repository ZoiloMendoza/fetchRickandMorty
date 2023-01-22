
const card = (personaje) => {

    const divCard = document.createElement('div');
          divCard.classList.add('card', 'col', 'p-3', 'mx-1');
    const img = document.createElement('img');
          img.className = 'card-img-top';
          img.src = personaje.image;
    const divCardBody = document.createElement('div');
          divCardBody.className = 'card-body';
    const h5 = document.createElement('h5');
          h5.className = 'card-title';
          h5.textContent = personaje.name;
    const a = document.createElement('a');
          a.id = personaje.id
          a.classList.add('btn', 'btn-primary');
          a.textContent = 'Ver más...'

    divCard.appendChild(img);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(a);
    
    return divCard;
}

const card2 = (personaje) => {

    const divCard = document.createElement('div');
          divCard.classList.add('card','col-sm-8','p-3', 'mx-1');
    const img = document.createElement('img');
          img.className = 'card-img-top';
          img.src = personaje.image;
    const divCardBody = document.createElement('div');
          divCardBody.className = 'card-body';
    const h5 = document.createElement('h5');
          h5.className = 'card-title';
          h5.textContent = personaje.name;
    const a = document.createElement('a');
          a.id = personaje.id
          a.classList.add('btn', 'btn-primary');
          a.textContent = 'Regresar...'

    divCard.appendChild(img);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(a);
    
    return divCard;
}
export { card, card2 }