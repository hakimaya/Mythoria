function afficherdeck() {
    let selection = "";
    let disponibles = "";
    let attaque = 0;
    let vie = 0;
    let sorts = 0;
    let legendaires = 0;
    for (let carte of cartes) {
        if (!collection[carte.id]) continue;
        if (deck.includes(carte.id)) {
            selection += cartehtml(carte, `<button class="bouton m-3" onclick="retirerduDeck(${carte.id})">Retirer du deck</button>`);
            attaque += carte.attaque || 0;
            vie += carte.vie || 0;
            if (carte.type === "sort") sorts++;
            if (carte.rarete === "legendaire") legendaires++;
        } else {
            disponibles += cartehtml(carte, `<button class="bouton m-3" onclick="ajouterdeck(${carte.id})" ${deck.length >= 20 ? "disabled" : ""}>Ajouter au deck</button>`);
        }
    }
    document.querySelector("#listedeck").innerHTML = selection || '<p class="col-span-full">Votre deck est vide.</p>';
    document.querySelector("#disponibles").innerHTML = disponibles || '<p class="col-span-full">Aucune autre carte disponible. <a href="open.html" class="text-[#e9c16d]">Ouvrir des boosters →</a></p>';
    document.querySelector("#compteurdeck").textContent = "Mon deck : " + deck.length + " / 20";
    document.querySelector("#statsdeck").textContent = "Attaque totale : " + attaque + " · Vie totale : " + vie + " · Sorts : " + sorts + " · Légendaires : " + legendaires;
}
afficherdeck();
