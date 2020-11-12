//implementation de la classe joueur
class Joueur{
    constructor(){
        this.cote = 0; //0 si c'est le coté gauche et 1 si c'est le coté droit
        this.score = 0;
    }


    ajoutScore(){
        this.score += 1;
    }

    //fonction ecoutant les touches des joueurs
    joue(raquette){
        //coté gauche
        if (this.cote == 0){
            window.addEventListener("keydown", function (event) {
                if (event.defaultPrevented) { return}
                if(event.key == "a"){
                    raquette.monter();
                }
                else if (event.key == "q"){
                    raquette.descendre();
                }
                event.preventDefault();
              }, true);

              window.addEventListener("keyup", function (event) {
                if (event.defaultPrevented) { return}
                if(event.key == "a" || event.key == "q"){
                    raquette.arreterDeBouger();
                }
                event.preventDefault();
              }, true);
        }
        //coté droit
        else{
            window.addEventListener("keydown", function (event) {
                if (event.defaultPrevented) { return}
                if(event.key == "p"){
                    raquette.monter();
                }
                else if (event.key =="m"){
                    raquette.descendre();
                }
                event.preventDefault();
              }, true);

              window.addEventListener("keyup", function (event) {
                if (event.defaultPrevented) { return}
                if(event.key == "p" || event.key == "m"){
                    raquette.arreterDeBouger();
                }
                event.preventDefault();
              }, true);
        }
    }
}