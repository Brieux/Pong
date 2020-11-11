//creation des objets
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteDroite = new Raquette($("#droite"));
let raquetteGauche = new Raquette($("#gauche"));

//lancement boucle de jeu
setInterval(function(){
    balle.bouger();
    balle.rebond(terrain)
    balle.majHTML();

    raquetteDroite.bouger(terrain);
    raquetteGauche.bouger(terrain);
    raquetteDroite.majHTML();
    raquetteGauche.majHTML();
}, 10);