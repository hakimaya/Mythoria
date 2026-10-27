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