//implementation classe raquette
class Raquette{
    //constructeur de la classe Raquette
    constructor($element){
        this.$element = $element;
        this.hauteur = $element.height();
        this.largeur =$element.width();
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.vitesseY = 1;
        this.gauche = true; //boolean pour savoir si c'est le joueur de droite ou de gauche(true = joueur de gauche/ false = joueur de droite)

    }
    //fonction permettant de definir le joueur (cf constructor)
    checkJoueur(terrain){
        if ((this.positionX < terrain.largeur/2) == true){
            this.gauche = true;
        }
        else{
            this.gauche = false;
        }
    }
    //fonction permettant de faire bouger les deux raquette de haut en bas automatiquement
    bouger(terrain){
        this.positionY = this.positionY + this.vitesseY;
        if (this.positionY <= 0 || this.positionY + this.hauteur >= terrain.hauteur){
            this.vitesseY = this.vitesseY * -1
        }
    }

    //fonction permettant aux joueur de faire bouger leur propre raquettes
    mouvementJoueur(terrain){
        //zone de controle du joueur de gauche avec A et Q
        if (this.gauche){
        
        }

        //zone de control du joueur de droite avec P et M
        else{

        }
    }

    //fonction de mise a jour graphique de l'objet raquette
    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

}