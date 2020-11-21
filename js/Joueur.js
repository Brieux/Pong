//implementation de la classe joueur
class Joueur{
    constructor(){
        this.cote = 0; //0 si c'est le coté gauche et 1 si c'est le coté droit
        this.score = 0;
    }


    ajoutScore(){
        this.score += 1;
    }
}