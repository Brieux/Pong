//implementation de la classe joueur
class Joueur{
    constructor(){
        this.cote = 0; //0 si c'est le coté gauche et 1 si c'est le coté droit
        this.score = 0;
    }

    //fonction reliant le coté de la raquette au bon coté du joueur.
    checkCote(raquette){
        if (raquette.gauche){
            this.cote = 0;
        }
        else{
            this.cote = 1;
        }
    }

    ajoutScore(){
        this.score += 1;
    }
}