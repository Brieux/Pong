//creation des objets
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let joueur0 = new Joueur();
let joueur1 = new Joueur();
let raquetteDroite = new Raquette($("#droite"));
let raquetteGauche = new Raquette($("#gauche"));

//attribution du boolean de positionnement du joueur
joueur0.cote = 0;
joueur1.cote = 1;

raquetteGauche.checkJoueur(terrain);
raquetteDroite.checkJoueur(terrain);

raquetteGauche.positionY = terrain.hauteur/2-(raquetteGauche.hauteur/2);
raquetteDroite.positionY = terrain.hauteur/2-(raquetteDroite.hauteur/2);

//lancement boucle de jeu
setInterval(function(){
    balle.bouger();
    balle.rebond(terrain, joueur0, joueur1);
    balle.rebondSurRaquette(raquetteDroite);
    balle.rebondSurRaquette(raquetteGauche);
    balle.majHTML();

    raquetteGauche.bouger(terrain);
    raquetteDroite.bouger(terrain);

    terrain.jouer(joueur0, joueur1, raquetteGauche,raquetteDroite);
    
    
    raquetteGauche.majHTML();
    raquetteDroite.majHTML();
}, 10);
