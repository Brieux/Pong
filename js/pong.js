//creation des objets
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let joueur0 = new Joueur();
let joueur1 = new Joueur();
let raquetteDroite = new Raquette($("#droite"));
let raquetteGauche = new Raquette($("#gauche"));

//attribution du boolean de positionnement du joueur
joueur0.checkCote(raquetteGauche);
joueur1.checkCote(raquetteDroite);

raquetteGauche.checkJoueur(terrain);
raquetteDroite.checkJoueur(terrain);


//lancement boucle de jeu
setInterval(function(){
    balle.bouger();
    balle.rebond(terrain, joueur0, joueur1);
    balle.rebondSurRaquette(raquetteDroite);
    balle.rebondSurRaquette(raquetteGauche);
    balle.majHTML();

    raquetteDroite.bouger(terrain);
    raquetteGauche.bouger(terrain);


    joueur0.joue(raquetteGauche);
    joueur1.joue(raquetteDroite);
    
    raquetteGauche.majHTML();
    raquetteDroite.majHTML();
}, 10);