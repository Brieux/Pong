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