let tab = [];// Initialisation du tableau vide

// Sélection du premier champ de saisie
let firstNameInput = document.getElementById('firstname');

// Sélection du span où afficher le prénom
let displayFN = document.getElementById('display-firstname');

// Ajout d'un écouteur d'événement "keydown" sur le champ de saisie
firstNameInput.addEventListener('keyup', function (event) {

    // Vérifier si la touche pressée est la touche "Enter" (code clavier 13)
    if (event.keyCode === 13) {
        // Récupérer le contenu actuel du champ de saisie
        let inputValue = firstNameInput.value.trim();// Trim pour enlever les espaces avant et après


        if (inputValue !== "") {
            // Ajouter la valeur actuelle dans le tableau
            tab.push(inputValue);

            // Mettre à jour le contenu du span avec le dernier mot saisi
            displayFN.textContent = tab;

            console.log(tab);// Afficher le tableau dans la console

        }

        // Effacer le contenu du champ de saisie
        firstNameInput.value = "";

        // Empêcher le comportement par défaut de la touche "Enter" (éviter le rechargement de la page)
        event.preventDefault();
    }
});


