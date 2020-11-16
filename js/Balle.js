//implementation classe  balle
class Balle{
    //constructeur de la classe Balle
    constructor($element){ 
        this.$element = $element;
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.rayon = parseInt(this.$element.css("width"));
        this.vitesseXFacteur = 1;
        this.limiteFacteur = 8 //faire en fonction de la largeur du terrain 
        this.vitesseXSens = this.calculAleatoire();
        this.vitesseYSens = (Math.random()*6) - 3; //entre -3 et 3 : 0 fais du tout droit
        //this.vitesseYSens = 0;
        this.vitesseYFacteur = 1;
        this.centreX = this.positionX;
        this.centreY = this.positionY

    }

    //fonction permettant de reset la balle au centre après un point marqué
    retourCentre(){
        this.positionX =  this.centreX;
        this.positionY =  this.centreY;
        this.vitesseXSens = this.calculAleatoire();
        this.vitesseXFacteur = 1;
        this.vitesseYSens = (Math.random()*6) - 3;
        this.vitesseYFacteur =1;
    }

    //fonction permettant de definir le sens de depart de la balle aléatoirement
    calculAleatoire(){
        return Math.random() < 0.5 ? 1 : -1; //c'est un genre de if : else
    }

    //fonction permettant de calculer la vitesse de X notamment l'acceleration
    calculVitesseX(){
        //rajout de 1 facteur
        if (this.vitesseXFacteur < this.limiteFacteur){
            this.vitesseXFacteur +=1; // faire en fonction de la largeur du terrain
        }
        else {/*rien car la vitesse ne peux pas depasser la limite*/}
    }

    //fonction de calcul de deplacement
    bouger(terrain, joueur0, joueur1){
        this.positionX = this.positionX + (this.vitesseXFacteur * this.vitesseXSens);
        this.positionY += (this.vitesseYFacteur * this.vitesseYSens);
        this.rebond(terrain, joueur0, joueur1);
        this.rebondSurRaquette(raquetteDroite);
        this.rebondSurRaquette(raquetteGauche);
        this.majHTML();
    }

    //fonction de mise a jour graphique
    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

    //fonction permettant de faire rebondir la balle sur les mur et de changer la couleur du terrain lors du contact
    rebond(terrain, joueur0, joueur1){
        //impact avec un bords de terrain coté joueur
        if(this.positionX <= 0 ||this.positionX >= terrain.largeur-this.rayon){
            if(this.positionX <= 0){
                joueur1.ajoutScore();
                console.log("Le joueur de droite marque 1 point");
            }
            if(this.positionX >= terrain.largeur-this.rayon){
                joueur0.ajoutScore();
                console.log("Le joueur de gauche marque 1 point");
            }
            //retour de la balle au centre et affichage des bords rouges;
            terrain.$element.addClass("point");
            setTimeout(
                function(){
                    terrain.$element.removeClass("point");
                },350
            );
            this.retourCentre();
        }
        //rebond sur les plafond et sol
        if(this.positionY <= 0 || this.positionY >= terrain.hauteur-this.rayon){
            this.vitesseYSens = this.vitesseYSens * (-1);
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
                    this.vitesseXSens = this.vitesseXSens * (-1);
                    /*console.log("rebond sur raquette de gauche");
                    changement de couleur lié a l'impact*/
                    raquette.$element.addClass("raquetteFluo");
                    setTimeout(
                    function(){
                        raquette.$element.removeClass("raquetteFluo");
                    },200
                    );
                    this.calculVitesseX();
                }
            }
        }
        //zone pour la raquette de droite
        else{
            if ((this.positionY >= raquette.positionY)&&(this.positionY <= raquette.positionY + raquette.hauteur)){
                //console.log("passage dans la raquette de droite");
                if (this.positionX+this.rayon > raquette.positionX){
                    this.positionX = raquette.positionX -this.rayon- 1
                    this.vitesseXSens = this.vitesseXSens * (-1);
                    /*console.log("rebond sur raquette de droite");
                    changement de couleur lié a l'impact*/
                    raquette.$element.addClass("raquetteFluo");
                    setTimeout(
                    function(){
                        raquette.$element.removeClass("raquetteFluo");
                    },200
                    );
                    this.calculVitesseX();
                }
            }
        }
    }
}