const listboosters = document.querySelector("#listboosters");
let boosterachetes = JSON.parse(localStorage.getItem("boostersMythoria")) || {};

let nombrebooster = 0;

for(let id in boosterachetes)
{
    nombrebooster = nombrebooster + boosterachetes[id];
}

console.log("nombre de booster :", nombrebooster);

const messagevide = document.querySelector("#messagevide");

if(nombrebooster > 0)
{
    messagevide.classList.add("hidden");
}

const boosters = {
    1: {
        nom: "Beginner Pack",
        image: "beginner-pack.png"
    },

    2: {
        nom: "Summoning of the Legends",
        image: "legends-pack.png"
    },

    3: {
        nom: "Dark Summoning",
        image: "dark-pack.png"
    },

    4: {
        nom: "Lucky Pack",
        image: "lucky-pack.png"
    }
};

