MYTHORIA — MODE D’EMPLOI
https://hakimaya630.atlassian.net/jira/software/projects/KAN/boards/1?filter=&groupBy=none
Copier tous les fichiers de ce dossier dans le dossier du projet.
Ouvrir index.html avec Live Server dans VS Code.
Utiliser la même adresse Live Server pour toutes les pages.
Internet est nécessaire pour Tailwind, les polices et Lucide.

PARCOURS
Boutique > ajouter au panier > valider > ouvrir le booster > grimoire > deck.
Aucun paiement réel. Le joueur commence sans booster ni carte.
Les données restent dans le même navigateur après actualisation.

FICHIERS
index.html : votre accueil, navigation et catégories corrigées.
shop.html / shop.js : votre boutique, panier et validation simulée.
open.html / open.js : affichage des achats, tirage et animation.
grimoire.html / grimoire.js : livre avec quatre cartes par double page et filtres.
deck.html / deck.js : sélection des cartes et statistiques.
script.js : menu et icônes communs aux pages.
cartes.js : catalogue de 24 cartes, descriptions, raretés et statistiques.
jeu.js : fonctions communes, stockage, détails des cartes et règles du deck.
style.css : livre, cartes, animation ; le reste utilise Tailwind.

RÈGLES
Chaque pack contient cinq cartes. Les tirages sont indépendants : doublons possibles.
Les probabilités sont dans open.js. Leur somme doit être 100 pour chaque booster.
Dark Summoning exclut les héros.
La collection conserve plusieurs exemplaires. Le deck accepte une seule copie par carte et au maximum 20 cartes.
Les sorts ont un effet plutôt que des points d’attaque et de vie.

IMAGES
Les images disponibles du projet sont incluses. Certaines illustrations sont réutilisées entre les cartes du catalogue de démonstration : modifier le champ image dans cartes.js pour les remplacer.
Les packs de la boutique reprennent les illustrations existantes sous les noms attendus par vos pages.

SAUVEGARDES
panierMythoria : panier non validé.
boostersMythoria : packs achetés et non ouverts.
collectionMythoria : identifiants des cartes et nombre d’exemplaires.
deckMythoria : identifiants des cartes choisies.
Les identifiants de cartes.js doivent rester stables pour conserver les anciennes sauvegardes.
Éviter d’ouvrir plusieurs onglets de jeu simultanément : chaque page charge sa sauvegarde au démarrage.

LECTURE DU JAVASCRIPT
1. script.js : commencer par le bouton du menu et son événement click.
2. cartes.js : regarder comment une carte est décrite dans un objet.
3. jeu.js : les fonctions partagées pour lire, sauvegarder et afficher les cartes.
4. shop.js : choisir une quantité, modifier le panier et confirmer une commande.
5. open.js : choisir une rareté, tirer une carte et consommer un booster.
6. grimoire.js : sélectionner les cartes qui correspondent aux filtres et à la page.
7. deck.js : afficher les cartes choisies et additionner leurs statistiques.

Cette copie conserve les identifiants et les clés de sauvegarde de la version précédente.
Les conditions courtes ont été développées en blocs if/else. Cette copie ne contient pas de commentaires dans le code.
Le code est volontairement plus long pour rendre les opérations visibles.

VÉRIFICATIONS DE CETTE VERSION
Syntaxe JavaScript et liens locaux vérifiés.
Logique testée : panier, quantités invalides, commande, sauvegarde et rechargement,
tirage aléatoire, raretés, thème Dark, stock consommé, collection, filtres,
pagination, retrait et limite de 20 cartes uniques du deck.

IMAGES CORRIGÉES
Le logo complet a été récupéré. Le fichier bluelegend.png incomplet a été remplacé par l’illustration complète Zalthar disponible dans les ressources du projet. Les illustrations des cartes sont affichées en entier avec object-fit: contain.
