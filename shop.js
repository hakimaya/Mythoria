const produits = {
    1: { nom: "Beginner Pack", prix: 29 },
    2: { nom: "Summoning of the Legends", prix: 69 },
    3: { nom: "Dark Summoning", prix: 49 },
    4: { nom: "Lucky Pack", prix: 39 }
};


let panier = lireStockage("panierMythoria", {});


function ajouterAuPanier(id) {
    let quantite = Number(document.getElementById("quantite" + id).value);

    if (!Number.isInteger(quantite) || quantite < 1 || quantite > 99) {
        alert("Choisissez une quantité valide.");
        return;
    }

    if (!panier[id]) {
        panier[id] = 0;
    }

    panier[id] = Math.min(99, panier[id] + quantite);
    afficherPanier();
}


function changerQuantite(id, changement) {
    panier[id] = Math.min(99, panier[id] + changement);

    if (panier[id] <= 0) {
        delete panier[id];
    }

    afficherPanier();
}


function retirerBooster(id) {
    delete panier[id];
    afficherPanier();
}



function viderPanier() {
    panier = {};
    afficherPanier();
}


function afficherPanier() {
    let contenu = "";
    let total = 0;
    let nombreArticles = 0;

    for (let id in panier) {
        let quantite = panier[id];
        let produit = produits[id];

        if (!produit || quantite <= 0) {
            continue;
        }

        let sousTotal = quantite * produit.prix;
        total = total + sousTotal;
        nombreArticles = nombreArticles + quantite;

        contenu = contenu + `
            <div class="border-b border-[#4c3b2c] pb-4 mb-4">
                <p class="font-bold text-[#f1d18d]">${produit.nom}</p>
                <p class="text-sm text-gray-300 mt-1">${produit.prix} MAD × ${quantite} = ${sousTotal} MAD</p>
                <div class="flex items-center gap-3 mt-3">
                    <button onclick="changerQuantite(${id}, -1)" class="bg-[#322739] px-3 py-1 rounded">−</button>
                    <span>${quantite}</span>
                    <button onclick="changerQuantite(${id}, 1)" class="bg-[#322739] px-3 py-1 rounded">+</button>
                    <button onclick="retirerBooster(${id})" class="ml-auto text-red-300 text-sm hover:text-red-200">Retirer</button>
                </div>
            </div>
        `;
    }

    if (contenu === "") {
        contenu = '<p class="text-gray-400">Votre panier est vide.</p>';
    }

    document.getElementById("listePanier").innerHTML = contenu;
    document.getElementById("totalPanier").textContent = total + " MAD";
    let compteur = document.getElementById("nombreArticles");

    if (compteur) {
        compteur.textContent = nombreArticles;
    }
    document.getElementById("boutonCommander").disabled = nombreArticles === 0;
    document.getElementById("boutonCommander").classList.toggle("opacity-50", nombreArticles === 0);

    
    enregistrer("panierMythoria", panier);
}


function validerCommande() {
    let total = 0;
    for (let id in panier) {
        if (produits[id]) total += panier[id] * produits[id].prix;
    }
    if (total === 0) return;
    if (!confirm("Confirmer votre commande de " + total + " MAD ?")) return;

    let achats = lireStockage("boostersMythoria", {});
    for (let id in panier) {
        if (!produits[id]) continue;
        if (!achats[id]) achats[id] = 0;
        achats[id] += panier[id];
    }
    if (!enregistrer("boostersMythoria", achats)) return;
    viderPanier();
    window.location.href = "open.html";
}

afficherPanier();
