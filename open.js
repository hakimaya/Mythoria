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

for(let id in boosterachetes)
{
    if(boosterachetes[id] > 0 && boosters[id])
        {
            let booster = boosters[id];
            let quantite = boosterachetes[id];

            listboosters.innerHTML += `
            <div class="bg-[#191321] text-center p-5 rounded">

                <img src="${booster.image}"
                    alt="${booster.nom}"
                    class="h-64 max-auto object-contain mb-4">
                    
                <h3 class="font-title title-xl text-[#e9c16d] mb-3">
                    ${booster.nom}
                </h3>

                <p class="text-gray-300 mb-4">Quantite disponible : ${quantite}</p>
                <button type="button"
                class="bg-[#e9c16d] text-[#0b0712] px-6 py-3 rounded hover:bg-[#f5d995]">Ouvrir le booster</button>
            </div>
            `;
        } 
}