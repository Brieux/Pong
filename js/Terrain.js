//implementation classe terrain
class Terrain{
    //constructeur de la classe Terrain
    constructor($element){
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    jouer(joueur0, joueur1, raquetteGauche, raquetteDroite){
        joueur1.joue(raquetteDroite);
        joueur0.joue(raquetteGauche);
    }
  }