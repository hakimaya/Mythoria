const listboosters = document.querySelector("#listboosters");
const messagevide = document.querySelector("#messagevide");
let boosterachetes = lireStockage("boostersMythoria", {});
let ouvertureencours = false;

// Les pourcentages de chaque pack font 100 au total.
const boosters = {
    1: {nom:"Beginner Pack", image:"beginner-pack.png", nombre:5, types:["hero","monstre","minion","sort"], probabilites:{commune:70, rare:22, epique:7, legendaire:1}},
    2: {nom:"Summoning of the Legends", image:"legends-pack.png", nombre:5, types:["hero","monstre","minion","sort"], probabilites:{commune:30, rare:35, epique:25, legendaire:10}},
    3: {nom:"Dark Summoning", image:"dark-pack.png", nombre:5, types:["monstre","minion","sort"], probabilites:{commune:50, rare:30, epique:16, legendaire:4}},
    4: {nom:"Lucky Pack", image:"lucky-pack.png", nombre:5, types:["hero","monstre","minion","sort"], probabilites:{commune:55, rare:25, epique:13, legendaire:7}}
};

function afficherboosters() {
    let contenu = "";
    for (let id in boosterachetes) {
        if (!boosters[id] || boosterachetes[id] <= 0) continue;
        let booster = boosters[id];
        contenu += `<article class="bg-[#191321] text-center p-5 rounded"><img src="${booster.image}" alt="${booster.nom}" class="h-64 mx-auto object-contain mb-4"><h3 class="font-title text-xl text-[#e9c16d] mb-3">${booster.nom}</h3><p class="text-gray-300 mb-4">Quantité disponible : ${boosterachetes[id]}</p><button class="bouton" onclick="ouvrirbooster(${id})" ${ouvertureencours ? "disabled" : ""}>Ouvrir le booster</button></article>`;
    }
    listboosters.innerHTML = contenu;
    messagevide.classList.toggle("hidden", contenu !== "");
}

function tirerrarete(booster, hasard) {
    let limite = 0;
    for (let rarete in booster.probabilites) {
        limite += booster.probabilites[rarete];
        if (hasard < limite) return rarete;
    }
}

function tirercarte(booster) {
    let rarete = tirerrarete(booster, Math.random() * 100);
    let possibles = [];
    for (let carte of cartes) {
        if (carte.rarete === rarete && booster.types.includes(carte.type)) possibles.push(carte);
    }
    let position = Math.floor(Math.random() * possibles.length);
    return possibles[position];
}

function ouvrirbooster(id) {
    if (ouvertureencours || !boosters[id] || !(boosterachetes[id] > 0)) return;
    let nouvelles = [];
    let copieCollection = JSON.parse(JSON.stringify(collection));
    let copieStock = JSON.parse(JSON.stringify(boosterachetes));
    let meilleure = 0;
    const ordre = {commune:0, rare:1, epique:2, legendaire:3};

    for (let i = 0; i < boosters[id].nombre; i++) {
        let carte = tirercarte(boosters[id]);
        nouvelles.push(carte);
        if (!copieCollection[carte.id]) copieCollection[carte.id] = 0;
        copieCollection[carte.id]++;
        if (ordre[carte.rarete] > meilleure) meilleure = ordre[carte.rarete];
    }
    copieStock[id]--;
    // Revenir à l'ancienne collection si l'enregistrement du stock échoue.
    if (!enregistrer("collectionMythoria", copieCollection)) return;
    if (!enregistrer("boostersMythoria", copieStock)) {
        enregistrer("collectionMythoria", collection);
        return;
    }
    collection = copieCollection;
    boosterachetes = copieStock;
    ouvertureencours = true;
    afficherboosters();

    let contenu = "";
    for (let i = 0; i < nouvelles.length; i++) {
        contenu += `<div class="carte-revelee" style="animation-delay:${i * 200}ms">${cartehtml(nouvelles[i])}</div>`;
    }
    document.querySelector("#cartesobtenues").innerHTML = contenu;
    const messages = ["5 cartes ont rejoint votre collection !", "Une carte rare a été découverte !", "Une carte épique a été découverte !", "Incroyable ! Une carte légendaire a été découverte !"];
    document.querySelector("#messageouverture").textContent = messages[meilleure];
    document.querySelector("#resultat").classList.remove("hidden");
    document.querySelector("#resultat").scrollIntoView({behavior:"smooth"});
    setTimeout(function () {
        ouvertureencours = false;
        afficherboosters();
    }, 1600);
}

afficherboosters();
