let aventuriersLocal = [
    {
        "id": "1",
        "nom": "Oral Schmeler IV",
        "couleur": "#6c6b67",
        "avatar" : "http://placeimg.com/640/480/fashion"
    },
    {
        "id": "2",
        "nom": "Tad McLaughlin",
        "couleur": "#5d5c62",
        "avatar" : "http://placeimg.com/640/480/animals"
    },
    {
        "id": "3",
        "nom": "Matteo Wunsch",
        "couleur": "#454f41",
        "avatar" : "http://placeimg.com/640/480/technics"
    },
    {
        "id": "4",
        "nom": "Jack Beahan MD",
        "couleur": "#386b1f",
        "avatar" : "http://placeimg.com/640/480/abstract"
    }
];

/**
 * Afficher les aventuriers avec Bootstrap
 * @param aventurier : l'objet aventurier à afficher
 * Référence : https://getbootstrap.com/docs/4.0/components/card/
 */
function afficherAventurier(aventurier){
    $("body").append(`
        <div class="card col-3 m-2" style="width: 18rem;">
          <img class="card-img-top" src="${aventurier.avatar}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${aventurier.nom}</h5>
            <p class="card-text">Ma couleur préféré : 
                <input type="color" value="${aventurier.couleur}">
            </p>
            <a href="#" class="btn btn-primary">Voir détails</a>
          </div>
        </div>
    `);
}

// Récupérer la liste sauvegardée
let liste = JSON.parse(localStorage.getItem('listAventuriers'));
if(liste != null){
    aventuriersLocal = liste; //Si la liste existe on la remplace
}

for (aventurier of aventuriersLocal){
    afficherAventurier(aventurier);
}

function Aventurier(nom, couleur, url){
    this.id = aventuriersLocal.length + 1; // Générer le prochain id
    this.nom = nom;
    this.couleur = couleur;
    this.avatar = url;
}

function ajouter(){
    let aventurier = new Aventurier($("#nom").val(), $("#couleur").val(), $("#url").val())
    afficherAventurier(aventurier);
    aventuriersLocal.push(aventurier);
    localStorage.setItem('listAventuriers', JSON.stringify(aventuriersLocal)); // Sauvegarder la liste
    return false; //Pas besoin de soumettre le formulaire, on reste sur la même page.
}