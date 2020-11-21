//creation des objets
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let joueur0 = new Joueur(0);
let joueur1 = new Joueur(1);
let raquetteDroite = new Raquette($("#droite"));
let raquetteGauche = new Raquette($("#gauche"));

raquetteGauche.checkJoueur(joueur0);
raquetteDroite.checkJoueur(joueur1);

raquetteGauche.positionY = terrain.hauteur/2-(raquetteGauche.hauteur/2);
raquetteDroite.positionY = terrain.hauteur/2-(raquetteDroite.hauteur/2);

//ecoute des touches pour le controles des raquettes
terrain.jouer();

//lancement boucle de jeu
setInterval(function(){
    balle.bouger();
    raquetteGauche.bouger();
    raquetteDroite.bouger();
}, 10);
