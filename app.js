var score = 20;
var hisghscore = 0;
var name;
//
var img1 = {
    cible: "#img_sous_1",
    valeur: "1"
};
var img2 = {
    cible: "#img_sous_2",
    valeur: "2"
};
var img3 = {
    cible: "#img_sous_3",
    valeur: "3"
};
var img4 = {
    cible: "#img_sous_4",
    valeur: "4"
};
//
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
    $(img.cible).fadeOut(fade, function() {
        if (img.valeur === 1) {
            $(img.cible).attr("src", pique.chemin);
        } else if (img.valeur === 2) {
            $(img.cible).attr("src", coeur.chemin);
        } else if (img.valeur === 3) {
            $(img.cible).attr("src", carreau.chemin);
        } else if (img.valeur === 4) {
            $(img.cible).attr("src", trefle.chemin);
        }
    })
    $(img.cible).fadeIn(fade, function() {
        img.valeur++;
        if (img.valeur === 5) {
            img.valeur = 1;
        }
        if (fade < 500) {
            fade = fade * 2;
            magicien(img, but, fade);
        } else {
            if (img.valeur != but) {
                magicien(img, but, fade);
            }
        }
    });
}

$("button[id='boutonGO']").click(function() {
    hasard();
    //Lancer la fonction 1
});

/*
Fonction 1
Choisir des nombres au hasards
Selon les nombres, changer l'image grâce au JSON
*/
function hasard() {
    score--;
    do {
        var w = Math.floor(Math.random() * 4);
        var x = Math.floor(Math.random() * 4);
        var y = Math.floor(Math.random() * 4);
        var z = Math.floor(Math.random() * 4);
    } while (w == 0 || x == 0 || y == 0 || z == 0);

    magicien(img1, w, 25);
    magicien(img2, x, 25);
    magicien(img3, y, 25);
    magicien(img4, z, 25);

    concorde(w, x, y, z);
    if (score === 0) {
        //Game over
        $()
    }
}

/* 
Fonction 2 : ressemblance();
La fonction verifie que chaque variable 
*/
function concorde(a, b, c, d) {
    if (a === b && b === c && c === d) {
        score += 5;
    }
    console.log("Everything is all right!")
    $("#credit").val(score);
    console.log(score)
    if (score > hisghscore) {
        hisghscore = score
        $("#score").val(hisghscore);
    }
}


//Petit codage surprise.
function tchat() {

}