//grab access to body element
const body = document.querySelector("body");

//destructure object

// function logInfo({ abilities }) {
//     console.log(abilities);
// }

async function fetchPokemon() {
    //handle responce from fetch // this is bi=uilt into the WEB API
    // it take only 2 arguuments and replys a promise
    // saving api response in a constant
    //anything that returns a promise, we need to awaite it
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    //need to PARSE IT TO JSON
    //.JSON returns a promise! need to await it!!!
    // DO NOT USE ASYNc AWAIT WITHOUT A PROMISE!!!!!
    const data = await response.json();
    // pokemon api is super nested, it is great to test with console logging
    // console.log(data.name);
    //access name of the ability
    // console.log(data.abilities[1].name);
    //destructure object
    // logInfo(data);
    const p = document.createElement("p")
    p.innerHTML = data.name;
    body.appendChild(p);
}

// push content onto screen into the DOM TREE
fetchPokemon();


//need to await the resolve, can make a async function to create a sync function...
//move into async function
