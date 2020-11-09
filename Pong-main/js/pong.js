
let largeur=$("#balle").width();
let gauche=parseInt(($("#balle").css("left")));
let haut=parseInt(($("#balle").css("top")));

/*setInterval(function(){
    gauche = gauche + 1;
    haut = haut + 0.5;
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut)
}, 10);*/

class Balle{
    constructor($element){
        this.$element = $element;
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.rayon = parseInt(this.$element.css("width"));
        this.vitesseX = (Math.random()* 8) -4;
        this.vitesseY = (Math.random()* 8) -4;
        
    }

    bouger(){
        this.positionX = this.positionX + this.vitesseX;
        this.positionY = this.positionY + this.vitesseY;
    }

    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

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

class Terrain{
    constructor($element){
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
    reset(){
        //this.$element.css("border","1px solid #FFFFFF");
    }
  }

class Raquette{
    constructor(){
        this.hauteur = 0;
        this.largeur = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.vitesseY = 1;
    }
    
    bouger(terrain){
        this.positionY = this.positionY + this.vitesseY;
        if (this.positionY <= 0 || this.positionY >= terrain.hauteur){
            this.vitesseY = this.vitesseY * -1
        }
    }

}
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
setInterval(function(){
    balle.bouger();
    balle.rebond(terrain)
    balle.majHTML();
    terrain.reset();
}, 10);
console.log(terrain);
console.log(balle);