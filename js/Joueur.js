//implementation de la classe joueur
class Joueur{
    /**
     * constructeur de la classe Joueur
     */
    constructor(){
        this.cote = 0; //0 si c'est le coté gauche et 1 si c'est le coté droit
        this.score = 0;
    }

    /**
     * Ajout du score pour chaque joueurs
     */
    ajoutScore(){
        this.score += 1;
    }
}