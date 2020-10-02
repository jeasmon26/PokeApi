//URL API
const API = "https://pokeapi.co/api/v2/pokemon/1";

//obtener el retorno de la API
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
};


const llenarDatos = (data) => {
    let html = document.getElementById("pokemon").innerHTML;

    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 10rem;">';
    html += `<img src="${data.sprites.other['official-artwork']['front_default']}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${data.name}</h5>`;
    html += `<p class="card-text">Altura: ${data.height}</p>`;
    html += `<p class="card-text">Peso: ${data.weight}</p>`;
    data.abilities.forEach((item) => {
        html += `<p class="card-text">Habilidad: ${item.ability.name}</p>`;
    })
    html += '</div>';
    html += '</div>';
    html += '</div>';

    //Imprimir o invocar en HTML
    document.getElementById("pokemon").innerHTML = html;
}


//Ejecutar el GetData
getData(API);