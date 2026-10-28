// Fonctions utilisées par la boutique, l'ouverture, le grimoire et le deck.
function lireStockage(cle, valeurVide) {
    try {
        let valeur = JSON.parse(localStorage.getItem(cle));
        if (valeur === null || typeof valeur !== "object") return valeurVide;
        if (Array.isArray(valeur) !== Array.isArray(valeurVide)) return valeurVide;
        return valeur;
    } catch (erreur) {
        return valeurVide;
    }
}

function enregistrer(cle, valeur) {
    try {
        localStorage.setItem(cle, JSON.stringify(valeur));
        return true;
    } catch (erreur) {
        alert("Impossible d'enregistrer. Vérifiez le stockage du navigateur.");
        return false;
    }
}

let collection = lireStockage("collectionMythoria", {});
let deck = lireStockage("deckMythoria", []);
const types = {hero:"Serviteurs de la Lumière", monstre:"Serviteurs des Ténèbres", minion:"Minions", sort:"Spells"};
const raretes = {commune:"Commune", rare:"Rare", epique:"Épique", legendaire:"Légendaire"};

function trouvercarte(id) {
    for (let carte of cartes) {
        if (carte.id === Number(id)) return carte;
    }
    return null;
}

// Nettoyer les références à des cartes inconnues ou non possédées.
let deckValide = [];
for (let id of deck) {
    let carte = trouvercarte(id);
    if (carte && collection[carte.id] > 0 && !deckValide.includes(carte.id) && deckValide.length < 20) {
        deckValide.push(carte.id);
    }
}
deck = deckValide;

function cartehtml(carte, action) {
    let stats = carte.effet || "ATQ : " + carte.attaque + " · VIE : " + carte.vie;
    return `<article class="carte ${carte.rarete}">
        <button class="inspecter" onclick="detailscarte(${carte.id})" aria-label="Voir ${carte.nom}">
            <span class="illustration"><img src="${carte.image}" alt="${carte.nom}" loading="lazy"></span>
            <span class="p-4 block"><strong class="font-title block mb-2">${carte.nom}</strong><span class="block text-sm text-gray-300">${types[carte.type]}</span><span class="rarete block mt-2">${raretes[carte.rarete]}</span></span>
        </button><p class="px-4 pb-3 text-sm">${stats}</p><p class="px-4 pb-3 text-sm text-gray-300">Exemplaires : ${collection[carte.id] || 0}</p>${action || ""}</article>`;
}

function detailscarte(id) {
    let carte = trouvercarte(id);
    if (!carte) return;
    document.querySelector("#detailscontenu").innerHTML = `<h2 class="font-title text-xl text-[#e9c16d] mb-4">${carte.nom}</h2><img src="${carte.image}" alt="${carte.nom}" class="h-64 mx-auto object-contain"><p class="mt-4">${carte.description}</p><p class="mt-3">${types[carte.type]} · ${raretes[carte.rarete]}</p><p class="mt-3">${carte.effet || "ATQ : " + carte.attaque + " · VIE : " + carte.vie}</p>`;
    document.querySelector("#details").showModal();
}

function ajouterdeck(id) {
    id = Number(id);
    if (!trouvercarte(id) || !collection[id]) return;
    if (deck.includes(id)) { alert("Cette carte est déjà dans le deck."); return; }
    if (deck.length >= 20) { alert("Le deck est complet : 20 cartes maximum."); return; }
    let nouveau = deck.slice();
    nouveau.push(id);
    if (!enregistrer("deckMythoria", nouveau)) return;
    deck = nouveau;
    if (typeof afficherdeck === "function") afficherdeck();
    if (typeof affichercollection === "function") affichercollection();
}

function retirerduDeck(id) {
    let nouveau = [];
    for (let carteId of deck) if (carteId !== Number(id)) nouveau.push(carteId);
    if (!enregistrer("deckMythoria", nouveau)) return;
    deck = nouveau;
    afficherdeck();
}

document.body.insertAdjacentHTML("beforeend", `<dialog id="details"><button class="bouton mb-5" onclick="document.querySelector('#details').close()">Fermer ✕</button><div id="detailscontenu"></div></dialog>`);
