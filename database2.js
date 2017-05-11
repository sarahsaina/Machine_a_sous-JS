var note = $(".addnewItems");

// Dans la ligne suivante, vous devez inclure les préfixes des implémentations que vous souhaitez tester.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// N'utiliser pas "var indexedDB = ..." si vous n'êtes pas dans une fonction.
//En outre, vous aurez peut-être besoin d'autres objets window.IDB*:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla n'a jamais préfixé ces objets, donc pas besoin window.mozIDB*)

// Ouvrons la version 4 de notre base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// ces deux gestionnaires d'événements informe sur l'ouverture avec succès, ou non de la base de données.
DBOpenRequest.onerror = function(event) {

};

DBOpenRequest.onsuccess = function(event) {
    //Affecte à la variable db le résultat de l'ouverture. C'est utile plus tard pour l'ouverture des transactions et autres. 
    db = DBOpenRequest.result;
};

DBOpenRequest.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
        note.innerHTML += "Error loading database"
    };

    // Create an objectStore for this database using
    // IDBDatabase.createObjectStore

    var objectStore = db.createObjectStore("app_machineasous", { keyPath: "taskTitle" })

    // define what data items the objectStore will contain

    objectStore.createIndex("nom", "name", { unique: false });
    objectStore.createIndex("score", "highscore", { unique: false });
};

function displaydata() {
    // 1 - Supprimer la tasklist pour eviter les doublons.
    task.innerHTML = "";

    // 2 -
    var objectStore = db.transaction('').objectStore('');
    objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.opkioresult;
        if (cursor) {
            var listItem = document.createElement("tr");

            if (cursor.value.position === 1) {
                positionSuffix = "st";
            }
            if (cursor.value.position === 2) {
                positionSuffix = "nd";
            }
            if (cursor.value.position === 3) {
                positionSuffix = "rd";
            }
            console.log(cursor.value);
            listItem.innerHTML = "<td>" + cursor.value.position + "</td> <td>" + cursor.value.name + "</td> <td>" + cursor.value.score + "</td>";

            cursor.continue();

        } else {
            console.log("Entries all displayed")
        }
    }
}

$("button[name='send']").addEventListener('submit', function(e) {
    e.preventDefault();
    var newItem = [
        { position: position.value, nom: name.value, score: hisghscore.value }
    ]
    var transaction = db.transaction(["toDoList"], "readwrite");
    transaction.oncomplete = function() {
        console.log("Transaction completed: database modification finished.");
        displaydata();
    }
    transaction.onerror = function() {
        console.log("Transaction not opened due to error: " + transaction.error);
    }
}, false);
var objectStore = transaction.objectStore("toDoList");