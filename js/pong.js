

//implementation classe  balle
class Balle{
    //constructeur de la classe Balle
    constructor($element){ 
        this.$element = $element;
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.rayon = parseInt(this.$element.css("width"));
        this.vitesseX = (Math.random()* 8) -4;
        this.vitesseY = (Math.random()* 8) -4;
        
    }

    //fonction de calcul de deplacement
    bouger(){
        this.positionX = this.positionX + this.vitesseX;
        this.positionY = this.positionY + this.vitesseY;
    }

    //fonction de mise a jour graphique
    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

    //fonction permettant de faire rebondir la balle sur les mur et de changer la couleur du terrain lors du contact
    rebond(terrain){
        if(this.positionX <= 0 || this.positionX >= terrain.largeur-this.rayon){
            this.vitesseX = this.vitesseX * (-1);
            terrain.$element.addClass("fluo");
            setTimeout(
                function(){
                    terrain.$element.removeClass("fluo");
                },250
            );
        }
        if(this.positionY <= 0 || this.positionY >= terrain.hauteur-this.rayon){
            this.vitesseY = this.vitesseY * (-1);
            terrain.$element.addClass("fluo");
            setTimeout(
                function(){
                    terrain.$element.removeClass("fluo");
                },250
            );

        }
    
    }
}

//implementation classe terrain
class Terrain{
    //constructeur de la classe Terrain
    constructor($element){
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
  }

//implementation classe raquette
class Raquette{
    //constructeur de la classe Raquette
    constructor($element){
        this.$element = $element
        this.hauteur = $element.height();
        this.largeur =$element.width();
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.vitesseY = 1;
    }
    //fonction permettant de faire bouger les deux raquette de haut en bas
    bouger(terrain){
        this.positionY = this.positionY + this.vitesseY;
        if (this.positionY <= 0 || this.positionY + this.hauteur >= terrain.hauteur){
            this.vitesseY = this.vitesseY * -1
        }
    }

    //fonction de mise a jour graphique de l'objet raquette
    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

}
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


