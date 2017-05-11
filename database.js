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
        console.log("Error loading database");
    };

    // Create an objectStore for this database using
    // IDBDatabase.createObjectStore

    var objectStore = db.createObjectStore("app_machineasous", { keyPath: "taskTitle" })

    // define what data items the objectStore will contain

    objectStore.createIndex("nom", "name", { unique: false });
    objectStore.createIndex("score", "highscore", { unique: false });
};