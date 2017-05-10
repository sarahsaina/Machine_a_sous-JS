var score = 20;

var hisghscore = 0;

var name;

var valeur = 1;

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

function magicien(but, fade) {
    $('#img_sous_1').fadeOut(fade, function() {
        if (valeur === 1) {
            $('#img_sous_1').attr("src", pique.chemin);
        } else if (valeur === 2) {
            $('#img_sous_1').attr("src", coeur.chemin);
        } else if (valeur === 3) {
            $('#img_sous_1').attr("src", carreau.chemin);
        } else if (valeur === 4) {
            $('#img_sous_1').attr("src", trefle.chemin);
        }
    })
    $('#img_sous_1').fadeIn(fade, function() {
        valeur++;
        if (valeur === 5) valeur = 1;
        console.log(valeur);
        if (fade < 1000) {
            console.log("fade<1000")
            console.log(valeur === but)
            fade = fade * 2;
            magicien(but, fade);
        } else {
            console.log("valeur != but");
            console.log(valeur != but);
            if (valeur != but) magicien(but, fade);
        }
    });
}
$("button[id='boutonGO']").click(function() {
    console.log("Everything is all right")
    magicien(4, 200);
    //Lancer la fonction 1
});

/*
Fonction 1
Choisir des nombres au hasards
Selon les nombres, changer l'image grâce au JSON
*/
function hasard(){
    do{
    var w = Math.floor(Math.random()*4);
    var x= Math.floor(Math.random()*4);
    var y= Math.floor(Math.random()*4);
    var z= Math.floor(Math.random()*4);
    }while(w==0 || x==0 || y==0 || z==0);
}

/* 
Fonction 2 : ressemblance();
La fonction verifie que chaque variable 
*/
function concorde(a,b,c,d){
	if(a===b && b===c && c===d)
		{score+=5}
}

//Petit codage surprise.
function tchat() {

}