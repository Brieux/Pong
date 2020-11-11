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
    //fonction permettant le rebond sur les raquettes
    rebondSurRaquette(raquette){
        //zone pour la raquette de gauche
        if(raquette.gauche){
            if ((this.positionY >= raquette.positionY)&&(this.positionY <= raquette.positionY + raquette.hauteur)){
                //console.log("passage dans la raquette de gauche");
                if (this.positionX<= raquette.positionX + raquette.largeur){
                   this.positionX = raquette.positionX + raquette.largeur + 1
                    this.vitesseX = this.vitesseX * (-1);
                    /*console.log("rebond sur raquette de gauche");
                    changement de couleur lié a l'impact*/
                    raquette.$element.addClass("raquetteFluo");
                    setTimeout(
                    function(){
                        raquette.$element.removeClass("raquetteFluo");
                    },200
                    );
                }
            }
        }
        //zone pour la raquette de droite
        else{
            if ((this.positionY >= raquette.positionY)&&(this.positionY <= raquette.positionY + raquette.hauteur)){
                //console.log("passage dans la raquette de droite");
                if (this.positionX+this.rayon > raquette.positionX){
                    this.positionX = raquette.positionX -this.rayon- 1
                    this.vitesseX = this.vitesseX * (-1);
                    /*console.log("rebond sur raquette de droite");
                    changement de couleur lié a l'impact*/
                    raquette.$element.addClass("raquetteFluo");
                    setTimeout(
                    function(){
                        raquette.$element.removeClass("raquetteFluo");
                    },200
                    );
                }
            }
        }
    }
}