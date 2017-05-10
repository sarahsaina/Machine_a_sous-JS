function jeu(){
	/* Récupération du crédit et du score. Il est fait à chaque fois
	car cela change en fonction des images qui ont été affichées au
	tirage précédent */
	var credit = document.getElementById("credit").value;
	var score = document.getElementById("score").value;
	
	var w = Math.floor(Math.random()*5);
	var x = Math.floor(Math.random()*5);
	var y = Math.floor(Math.random()*5);
    var z = Math.floorx(Math.random()*5);
	
	// Modification de la source des images à l'aide des 3 nombres aléatoires
	document.getElementById("images/carreau.png").src = 'img_' + w + '.png';
	document.getElementById("images/coeur.png").src = 'img_' + x + '.png';
	document.getElementById("images/pique.png").src = 'img_' + y + '.png';
	document.getElementById("images/trefle.png").src = 'img_' + z + '.png';
	
	// Le joueur perd 1 crédit à chaque tirage
	credit -= 1;
<<<<<<< Updated upstream
	
=======
>>>>>>> Stashed changes
	
	// Si les 3 nombres sont égaux, alors on a 3 mêmes images et l'utilisateur gagne 80
	if(w == x && x == y && y==z){
		credit += 5;
	}
	/* Si l'utilisateur a un crédit plus élevé que son highscore, alors le highscore
	prend la valeur du crédit */
	if(credit > score){
		score = credit;
	}
	/* On met à jour le crédit et le highscore du joueur */
	document.getElementById("credit").value = credit;
	document.getElementById("score").value = score;
}