function machineASous(){
	/* Récupération du crédit et du score. Il est fait à chaque fois
	car cela change en fonction des images qui ont été affichées au
	tirage précédent */
	var creditJoueur = document.getElementById("credit").value;
	var highscore = document.getElementById("highscore").value;
	
	// Génération de 3 nombres aléatoires entre 0 et 3 pour afficher les images
	var w = Math.floor(Math.random()*4);
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
	
	// Modification de la source des images à l'aide des 3 nombres aléatoires
	document.getElementById("img_sous_1").src = 'img_' + w + '.png';
	document.getElementById("img_sous_2").src = 'img_' + x + '.png';
	document.getElementById("img_sous_3").src = 'img_' + y + '.png';
	
	// Le joueur perd 10 crédits à chaque tirage
	creditJoueur -= 10;
	
	/* Si les 3 nombres aléatoires sont 0, cela correspond aux têtes de mort,
	cela veut dire que l'utilisateur perd tous ses crédits, le bouton "GO !"
	est donc désactivé car il n'a plus de crédit pour jouer */
	if(w == 0 && x == 0 && y == 0){
		creditJoueur = 0;
		document.getElementById("boutonGO").disabled = "disabled";
	}else 
	// Si les 3 nombres sont égaux, alors on a 3 mêmes images et l'utilisateur gagne 80
	if(w == x && x == y){
		creditJoueur += 80;
	}else 
	/* S'il y a 2 nombres égaux, alors l'utilisateur gagne 40. Les caractères "^" permettent
	un ou exclusif (XOR), cela veut dire soit, la première condition, soit la deuxième, soit
	la troisième mais pas deux ou les trois en même temps */
	if(w == x ^ w == y ^ x == y){
		creditJoueur += 40;
	}
	/* Si l'utilisateur a un crédit plus élevé que son highscore, alors le highscore
	prend la valeur du crédit */
	if(creditJoueur > highscore){
		highscore = creditJoueur;
	}
	/* On met à jour le crédit et le highscore du joueur */
	document.getElementById("credit").value = creditJoueur;
	document.getElementById("highscore").value = highscore;
}