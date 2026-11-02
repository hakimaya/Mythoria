
function afficherdeck() {
    let selection = "";
    let disponibles = "";
    let attaque = 0;
    let vie = 0;
    let sorts = 0;
    let legendaires = 0;
    for (let carte of cartes) {
        if (!collection[carte.id]) {
            continue;
        }

        if (deck.includes(carte.id)) {
            let boutonRetirer = `
                <button class="bouton m-3" onclick="retirerduDeck(${carte.id})">
                    Retirer du deck
                </button>
            `;
            selection = selection + cartehtml(carte, boutonRetirer);
            if (carte.type === "sort") {
                sorts = sorts + 1;
            } else {
                attaque = attaque + carte.attaque;
                vie = vie + carte.vie;
            }
            if (carte.rarete === "legendaire") {
                legendaires = legendaires + 1;
            }
        } else {
            let desactive = "";
            if (deck.length >= 20) {
                desactive = "disabled";
            }
            let boutonAjouter = `
                <button class="bouton m-3" onclick="ajouterdeck(${carte.id})" ${desactive}>
                    Ajouter au deck
                </button>
            `;
            disponibles = disponibles + cartehtml(carte, boutonAjouter);
        }
    }

    if (selection === "") {
        selection = '<p class="col-span-full">Votre deck est vide.</p>';
    }
    if (disponibles === "") {
        disponibles = `
            <p class="col-span-full">
                Aucune autre carte disponible.
                <a href="open.html" class="text-[#e9c16d]">Ouvrir des boosters →</a>
            </p>
        `;
    }
    document.getElementById("listedeck").innerHTML = selection;
    document.getElementById("disponibles").innerHTML = disponibles;
    document.getElementById("compteurdeck").textContent = "Mon deck : " + deck.length + " / 20";
    document.getElementById("statsdeck").textContent = "Attaque totale : " + attaque
        + " · Vie totale : " + vie
        + " · Sorts : " + sorts
        + " · Légendaires : " + legendaires;
}

afficherdeck();
