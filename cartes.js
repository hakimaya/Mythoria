// Catalogue de démonstration : remplacer les images ici pour personnaliser les cartes.
const cartes = [
    {
        "id": 1,
        "nom": "Gardienne de l’Aube",
        "image": "whitelegend.png",
        "description": "Un héros qui protège les royaumes de la Lumière.",
        "type": "hero",
        "rarete": "commune",
        "attaque": 2,
        "vie": 4
    },
    {
        "id": 2,
        "nom": "Écuyer solaire",
        "image": "whitelegend.png",
        "description": "Un héros qui protège les royaumes de la Lumière.",
        "type": "hero",
        "rarete": "commune",
        "attaque": 3,
        "vie": 5
    },
    {
        "id": 3,
        "nom": "Chevalier de Lumière",
        "image": "whitelegend.png",
        "description": "Un héros qui protège les royaumes de la Lumière.",
        "type": "hero",
        "rarete": "rare",
        "attaque": 4,
        "vie": 6
    },
    {
        "id": 4,
        "nom": "Prêtresse céleste",
        "image": "whitelegend.png",
        "description": "Un héros qui protège les royaumes de la Lumière.",
        "type": "hero",
        "rarete": "rare",
        "attaque": 5,
        "vie": 7
    },
    {
        "id": 5,
        "nom": "Ange des cimes",
        "image": "whitelegend.png",
        "description": "Un héros qui protège les royaumes de la Lumière.",
        "type": "hero",
        "rarete": "epique",
        "attaque": 6,
        "vie": 8
    },
    {
        "id": 6,
        "nom": "Seraphina",
        "image": "whitelegend.png",
        "description": "Un héros qui protège les royaumes de la Lumière.",
        "type": "hero",
        "rarete": "legendaire",
        "attaque": 7,
        "vie": 9
    },
    {
        "id": 7,
        "nom": "Ombre affamée",
        "image": "mauvelegend.png",
        "description": "Une créature des royaumes obscurs.",
        "type": "monstre",
        "rarete": "commune",
        "attaque": 2,
        "vie": 4
    },
    {
        "id": 8,
        "nom": "Loup des abysses",
        "image": "mauvelegend.png",
        "description": "Une créature des royaumes obscurs.",
        "type": "monstre",
        "rarete": "commune",
        "attaque": 3,
        "vie": 5
    },
    {
        "id": 9,
        "nom": "Chasseur nocturne",
        "image": "mauvelegend.png",
        "description": "Une créature des royaumes obscurs.",
        "type": "monstre",
        "rarete": "rare",
        "attaque": 4,
        "vie": 6
    },
    {
        "id": 10,
        "nom": "Goule des ruines",
        "image": "mauvelegend.png",
        "description": "Une créature des royaumes obscurs.",
        "type": "monstre",
        "rarete": "rare",
        "attaque": 5,
        "vie": 7
    },
    {
        "id": 11,
        "nom": "Dragon du crépuscule",
        "image": "mauvelegend.png",
        "description": "Une créature des royaumes obscurs.",
        "type": "monstre",
        "rarete": "epique",
        "attaque": 6,
        "vie": 8
    },
    {
        "id": 12,
        "nom": "Aegnor",
        "image": "mauvelegend.png",
        "description": "Une créature des royaumes obscurs.",
        "type": "monstre",
        "rarete": "legendaire",
        "attaque": 7,
        "vie": 9
    },
    {
        "id": 13,
        "nom": "Disciple oublié",
        "image": "violet.png",
        "description": "Un serviteur fidèle aux forces anciennes.",
        "type": "minion",
        "rarete": "commune",
        "attaque": 2,
        "vie": 4
    },
    {
        "id": 14,
        "nom": "Guetteur des tombes",
        "image": "violet.png",
        "description": "Un serviteur fidèle aux forces anciennes.",
        "type": "minion",
        "rarete": "commune",
        "attaque": 3,
        "vie": 5
    },
    {
        "id": 15,
        "nom": "Veilleur des ruines",
        "image": "violet.png",
        "description": "Un serviteur fidèle aux forces anciennes.",
        "type": "minion",
        "rarete": "rare",
        "attaque": 4,
        "vie": 6
    },
    {
        "id": 16,
        "nom": "Gardien spectral",
        "image": "violet.png",
        "description": "Un serviteur fidèle aux forces anciennes.",
        "type": "minion",
        "rarete": "rare",
        "attaque": 5,
        "vie": 7
    },
    {
        "id": 17,
        "nom": "Sentinelle du Néant",
        "image": "violet.png",
        "description": "Un serviteur fidèle aux forces anciennes.",
        "type": "minion",
        "rarete": "epique",
        "attaque": 6,
        "vie": 8
    },
    {
        "id": 18,
        "nom": "Zalthar",
        "image": "violet.png",
        "description": "Un serviteur fidèle aux forces anciennes.",
        "type": "minion",
        "rarete": "legendaire",
        "attaque": 7,
        "vie": 9
    },
    {
        "id": 19,
        "nom": "Étincelle interdite",
        "image": "bluelegend.png",
        "description": "Une magie issue des arcanes oubliées.",
        "type": "sort",
        "rarete": "commune",
        "effet": "Inflige 3 dégâts à une cible."
    },
    {
        "id": 20,
        "nom": "Sceau ancien",
        "image": "bluelegend.png",
        "description": "Une magie issue des arcanes oubliées.",
        "type": "sort",
        "rarete": "commune",
        "effet": "Inflige 4 dégâts à une cible."
    },
    {
        "id": 21,
        "nom": "Éclair obscur",
        "image": "bluelegend.png",
        "description": "Une magie issue des arcanes oubliées.",
        "type": "sort",
        "rarete": "rare",
        "effet": "Inflige 5 dégâts à une cible."
    },
    {
        "id": 22,
        "nom": "Flamme maudite",
        "image": "bluelegend.png",
        "description": "Une magie issue des arcanes oubliées.",
        "type": "sort",
        "rarete": "rare",
        "effet": "Inflige 6 dégâts à une cible."
    },
    {
        "id": 23,
        "nom": "Tempête astrale",
        "image": "bluelegend.png",
        "description": "Une magie issue des arcanes oubliées.",
        "type": "sort",
        "rarete": "epique",
        "effet": "Inflige 7 dégâts à une cible."
    },
    {
        "id": 24,
        "nom": "Invocation suprême",
        "image": "bluelegend.png",
        "description": "Une magie issue des arcanes oubliées.",
        "type": "sort",
        "rarete": "legendaire",
        "effet": "Inflige 8 dégâts à une cible."
    }
];
