var score = 20;

var hisghscore = 0;

var name;

var pique = {
    chemin: "images/pique.png",
    valeur: "1"
};
var coeur = {
    chemin: "images/coeur.png",
    valeur: "2"
};
var carreau = {
    chemin: "images/carreau.png",
    valeur: "3"
};
var trefle = {
    chemin: "images/trefle.png",
    valeur: "4"
};

function magicien(fade, valeur, but){
        
    $('#img_sous_1').hover(function() {
        // increase the 500 to larger values to lengthen the duration of the fadeout 
        // and/or fadein
        $('#img_sous_1').fadeOut(fade, function() {
            $('#img_sous_1').attr("src", coeur.chemin);
            $('#img_sous_1').fadeIn(fade);
        });
    });
    
}

$("button[id='boutonGO']").click(function() {
    magicien()
    //Lancer la fonction 1
});

/*
Fonction 1
Choisir des nombres au hasards
Selon les nombres, changer l'image grâce au JSON
*/

/* 
Fonction 2 : ressemblance();
La fonction verifie que chaque variable 
*/

//Petit codage surprise.
function tchat() {

}