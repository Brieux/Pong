//creation des objets
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteDroite = new Raquette($("#droite"));
let raquetteGauche = new Raquette($("#gauche"));
//attribution du boolean de positionnement du joueur
raquetteGauche.checkJoueur(terrain);
raquetteDroite.checkJoueur(terrain);

//lancement boucle de jeu
setInterval(function(){
    balle.bouger();
    balle.rebond(terrain);
    balle.rebondSurRaquette(raquetteDroite);
    balle.rebondSurRaquette(raquetteGauche);
    balle.majHTML();

    raquetteDroite.bouger(terrain);
    raquetteGauche.bouger(terrain);
    
    raquetteDroite.mouvementJoueur(terrain);
    raquetteGauche.mouvementJoueur(terrain);
    
    raquetteGauche.majHTML();
    raquetteDroite.majHTML();
}, 10);