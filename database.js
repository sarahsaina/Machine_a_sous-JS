var i = 0;
if (localStorage.getItem('nombre') == 0) {
    localStorage.setItem('nombre', i);
} else {
    i = localStorage.getItem('nombre');
    afficher(i);
}
$("button[name='send']").click(function() {
    var scoreObject = {
        'name': $(".name").val(),
        'score': $("#score").val()
    }
    localStorage.setItem(i, JSON.stringify(scoreObject));
    i++;
    afficher(i)
})
$("button[name='send']").click(function() {
    //recommencer la partie
    $('#ModalHighscore').modal('toggle');
    $("button[id='boutonGO']").removeAttr("disabled");
    score = 20;
    hisghscore = 20;
    $("#score").val(hisghscore);
    $("#credit").val(score);
});

function afficher(z) {
    $('span.addnewItems').html(null);
    for (var j = 0; j < z; j++) {
        var retrievedObject = localStorage.getItem(j);
        var objetJSON = JSON.parse(retrievedObject);
        console.log(objetJSON)
        var ligne = "<tr> <td>" + objetJSON.name + "</td> <td>" + objetJSON.score + "</td></tr>"
        if (!(objetJSON == null)) {
            $('span.addnewItems').append(ligne);
        }
    }
}