console.log('hola');


let cardContent =  document.getElementById('cardOfertas');

const contenidoCardArray = [
    {
        img: 'imagenes/oferta1.jpeg',
        titulo:'PROMOCION 1',
        texto: 'Oferta limitada',
        boton:'¡Lo quiero!' 
    },
       {
        img: 'imagenes/oferta2.jpeg',
        titulo:'PROMOCION 2',
        texto: 'Oferta limitada',
        boton:'¡Lo quiero!'
    },
       {
        img: 'imagenes/oferta3.jpeg',
        titulo:'PROMOCION 3',
        texto: 'Oferta limitada',
        boton:'¡Lo quiero!'
    },
       {
        img: 'imagenes/oferta4.jpeg',
        titulo:'PROMOCION 4',
        texto: 'Oferta limitada',
        boton:'¡Lo quiero!'
    },
    {
        img: 'imagenes/oferta5.jpeg',
        titulo:'PROMOCION 5',
        texto: 'Oferta limitada',
        boton:'¡Lo quiero!',
        url:'httpsdskfkhsdkf'
    },
    {
        img: 'imagenes/oferta6.jpeg',
        titulo:'PROMOCION 6',
        texto: 'Oferta limitada',
        boton:'¡Lo quiero!'
    }

];

console.log(contenidoCardArray.length)

for(let i=0; i<contenidoCardArray.length; i++ ){


const divContent = document.createElement('div');

const elemetCard = `
        <div class="d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${contenidoCardArray[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contenidoCardArray[i].titulo}</h5>
                    <p class="card-text">${contenidoCardArray[i].texto}</p>
                    <a href="contacto.html" class="btn btn-primary">${contenidoCardArray[i].boton}</a>
                </div>
            </div>
        </div>
        `
divContent.innerHTML = elemetCard
cardContent.appendChild(divContent);
}