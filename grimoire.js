let page = 0;
let cartesFiltrees = [];

function changerfiltre() {
    page = 0;
    affichercollection();
}

function tournerpage(direction) {
    page += direction;
    affichercollection();
}

function affichercollection() {
    let type = document.querySelector("#filtretype").value;
    let rarete = document.querySelector("#filtrerarete").value;
    cartesFiltrees = [];
    let nombre = 0;
    for (let carte of cartes) {
        let quantite = collection[carte.id] || 0;
        nombre += quantite;
        if (quantite > 0 && (type === "tous" || carte.type === type) && (rarete === "tous" || carte.rarete === rarete)) cartesFiltrees.push(carte);
    }
    let pages = Math.max(1, Math.ceil(cartesFiltrees.length / 4));
    page = Math.max(0, Math.min(page, pages - 1));
    let contenu = "";
    for (let i = page * 4; i < page * 4 + 4 && i < cartesFiltrees.length; i++) {
        let carte = cartesFiltrees[i];
        let deja = deck.includes(carte.id);
        let action = `<button class="bouton m-3" onclick="ajouterdeck(${carte.id})" ${deja || deck.length >= 20 ? "disabled" : ""}>${deja ? "Déjà dans le deck" : "Ajouter au deck"}</button>`;
        contenu += cartehtml(carte, action);
    }
    if (!contenu) contenu = `<div class="col-span-full text-center py-10"><p>${nombre ? "Aucune carte ne correspond aux filtres." : "Votre grimoire est encore vide."}</p><a class="bouton mt-5" href="open.html">Ouvrir mes boosters</a></div>`;
    document.querySelector("#collection").innerHTML = contenu;
    document.querySelector("#compteurcollection").textContent = nombre + " exemplaire(s) collectionné(s)";
    document.querySelector("#numeropage").textContent = "Double page " + (page + 1) + " / " + pages;
    document.querySelector("#precedent").disabled = page === 0;
    document.querySelector("#suivant").disabled = page === pages - 1;
}
affichercollection();
