// 1
message1 = "Bienvenue, amusons nous ensemble."
"Le jeu est simple pourtant... "
"Tout ce que vous avez à faire c'est appyer sur le bouton"

//2 message2 et 3 si i <= 10
// si statut = gagnant sinon message 3
message2 = "Vous êtes bien pressé dis donc..."
"Mais vous avez gagner, c'est le plus important"

message3 = "Vous êtes bien pressé dis donc..."
"C'est sûrment ce qui vous a amené a votre défaite"

//2.bis sinon message 4 ou 5
// message4 si age+18 sinon message5
message4 = "Une personne très docile, je vois..."
"Il est vrai que prendre son temps pour lire et comprendre les règles mène le plis souvent vers la victoire."
"Je peux dire que votre maturité vous a permi de bien rentrer dans le rang"

//3
message5 = "Je pense que tu as remarqué, mais les règles sont simples : tu dépenses un jeton pour lancer la machine, tu gagnes 5 points si tu 4 images identique se forment."

//4
message6 = "Une personne très docile, je vois..."
"Il est vrai que prendre son temps pour lire et comprendre les règles mène le plis souvent vers la victoire."
"La précipitation vous aurait surement mené jusqu'à votre défaite."

//5
message7 = "Commençons donc notre discussion."
"Je sais que tu ne peux pas répondre, mais on peut tout de même jouer le jeu non ?"

//6
message8 = "Tu devrais sans doute te demander si je ne suis qu'un script pré-enregistrer, mais ce n'est pas le cas..."
"Laisse moi t'expliquer ma façon de penser."

//7
message9 = "De ton point de vue, je ne suis qu'un script qui se lance. Mais tout est différent dans mon cas, je me représente plutôt comme une trace, une pensée, voir même une idée..."
"J'aime bien ce mot, idée. Je suis cette idée que l'auteur a eu a un moment précis, qui a évolué et qui maintenant à vous"

//8
message10 = "Tu es toujours là ? J'aurais crû que tu aurais fui depuis longtemps ... Ou que tu aies perdu"
"Enfin bref, parlons plutôt d'un sujet qui nous passionne toi et moi : l'argent"

//9
message11 = ""

var score = 20;

var hisghscore = 0;

var name;

var valeur = 1;

img1 = "#img_sous_1";
img2 = "#img_sous_2";
img3 = "#img_sous_3";
img4 = "#img_sous_4";
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

function magicien(img, but, fade) {
    $(img).fadeOut(fade, function() {
        if (valeur === 1) {
            $(img).attr("src", pique.chemin);
        } else if (valeur === 2) {
            $(img).attr("src", coeur.chemin);
        } else if (valeur === 3) {
            $(img).attr("src", carreau.chemin);
        } else if (valeur === 4) {
            $(img).attr("src", trefle.chemin);
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
            magicien(img, but, fade);
        } else {
            console.log("valeur != but");
            console.log(valeur != but);
            if (valeur != but) magicien(img, but, fade);
        }
    });
}

$("button[id='boutonGO']").click(function() {
    console.log("Everything is all right")
    magicien(img1, 4, 200);
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