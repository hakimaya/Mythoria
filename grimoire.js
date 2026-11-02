let page = 0;
let cartesFiltrees = [];

function changerfiltre() {
    page = 0;
    affichercollection();
}

function tournerpage(direction) {
    page = page + direction;
    affichercollection();
}

function affichercollection() {
    let type = document.getElementById("filtretype").value;
    let rarete = document.getElementById("filtrerarete").value;
    cartesFiltrees = [];
    let nombre = 0;
    for (let carte of cartes) {
        let quantite = collection[carte.id];
        if (!quantite) {
            quantite = 0;
        }
        nombre = nombre + quantite;

        let bonType = false;
        if (type === "tous" || carte.type === type) {
            bonType = true;
        }
        let bonneRarete = false;
        if (rarete === "tous" || carte.rarete === rarete) {
            bonneRarete = true;
        }
        if (quantite > 0 && bonType && bonneRarete) {
            cartesFiltrees.push(carte);
        }
    }
    let pages = Math.ceil(cartesFiltrees.length / 4);
    if (pages === 0) {
        pages = 1;
    }
    if (page < 0) {
        page = 0;
    }
    if (page >= pages) {
        page = pages - 1;
    }

    let contenu = "";
    let debut = page * 4;
    let fin = debut + 4;
    if (fin > cartesFiltrees.length) {
        fin = cartesFiltrees.length;
    }

    for (let i = debut; i < fin; i++) {
        let carte = cartesFiltrees[i];
        let texteBouton = "Ajouter au deck";
        let desactive = "";

        if (deck.includes(carte.id)) {
            texteBouton = "Déjà dans le deck";
            desactive = "disabled";
        }
        if (deck.length >= 20) {
            desactive = "disabled";
        }

        let action = `
            <button class="bouton m-3" onclick="ajouterdeck(${carte.id})" ${desactive}>
                ${texteBouton}
            </button>
        `;
        contenu = contenu + cartehtml(carte, action);
    }

    if (contenu === "") {
        let message = "Votre grimoire est encore vide.";
        if (nombre > 0) {
            message = "Aucune carte ne correspond aux filtres.";
        }
        contenu = `
            <div class="col-span-full text-center py-10">
                <p>${message}</p>
                <a class="bouton mt-5" href="open.html">Ouvrir mes boosters</a>
            </div>
        `;
    }

    document.getElementById("collection").innerHTML = contenu;
    document.getElementById("compteurcollection").textContent = nombre + " exemplaire(s) collectionné(s)";
    document.getElementById("numeropage").textContent = "Double page " + (page + 1) + " / " + pages;
    document.getElementById("precedent").disabled = page === 0;
    document.getElementById("suivant").disabled = page === pages - 1;
}
affichercollection();
