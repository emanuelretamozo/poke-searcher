function buscar_pokemon() {
    let pokemon_name = document.getElementById("pokemon_search").value;
    let config = {
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/?limit=1126",
        headers: {}
    }


   
axios(config)
    .then(response => {
        let pokemon = response.data.results;
        let pokemon_encontrado = buscar(pokemon_name, pokemon)
        let container = document.getElementById("container")
        console.log(pokemon_encontrado);
        container.innerHTML = pokemon_encontrado.name;
        console.log(container.innerHTML)
        return pokemon_encontrado;
    })

    .then(pokemon_encontrado => {
        config = {
            method: "get",
            url: pokemon_encontrado.url,
            headers: {}
        }
        return axios(config)
    })

    .then(response => {
        let pokemon = response.data;
        let container = document.getElementById("container")
        let html = 
            `<div class="pokemon">
                <img src="${pokemon.sprites.other.home.front_default}"></img>  
            </div>`
            container.innerHTML = html;
    })
}



function buscar(pokemon_name, pokemon) {
for(let i = 0; i < pokemon.length; i++) {
    if(pokemon[i].name === pokemon_name) {
        return pokemon[i];      
        }
    }
};


