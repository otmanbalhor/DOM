let tab = [];// Initialisation du tableau vide

// Sélection du premier champ de saisie
let firstNameInput = document.getElementById('firstname');

// Sélection du span où afficher le prénom
let displayFN = document.getElementById('display-firstname');

// Ajout d'un écouteur d'événement "keydown" sur le champ de saisie
firstNameInput.addEventListener('keyup', function (event) {

    // Vérifie si la touche pressée est la touche "Enter" (code clavier 13)
    if (event.keyCode === 13) {
        // Récupére le contenu actuel du champ de saisie
        let inputValue = firstNameInput.value.trim();// Trim pour enlever les espaces avant et après


        if (inputValue !== "") {
            // Ajoute la valeur actuelle dans le tableau
            tab.push(inputValue);

            // Met à jour le contenu du span avec le dernier mot saisi
            displayFN.textContent = tab;

            console.log(tab);// Afficher le tableau dans la console

        }

        // Efface le contenu du champ de saisie
        firstNameInput.value = "";

        // Empêche le comportement par défaut de la touche "Enter" (évite le rechargement de la page)
        event.preventDefault();
    }
});

let ageInput = document.getElementById('age');
let hardTruthSection = document.getElementById('a-hard-truth');


ageInput.addEventListener('keyup', function (event) {


    let age = parseInt(event.target.value);

    if (event.keyCode === 13) {
        age = ageInput.value.trim();
        ageInput.value = "";
        event.preventDefault();
    }

    else if (age >= 18) {

        hardTruthSection.style.visibility = 'visible';

    } else {

        hardTruthSection.style.visiblity = 'hidden';

    }

});

let passwordInput = document.getElementById('pwd');
let confPasswordInput = document.getElementById('pwd-confirm');

passwordInput.addEventListener('keyup', validatePassword);
confPasswordInput.addEventListener('keyup', validatePassword);

function validatePassword() {
    var password = passwordInput.value;
    var confPassword = confPasswordInput.value;

    if (password.length < 6 || password === confPassword) {
        passwordInput.style.border="3px solid green";
        confPasswordInput.style.border="3px solid green";
    } else {
        passwordInput.style.border="3px solid red";
        confPasswordInput.style.border="3px solid red";
    }
}

let darkmode = document.getElementById('toggle-darkmode');

darkmode.addEventListener('change',function(){
    let alternMode = darkmode.value;

    if(alternMode=== 'dark'){
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = 'white';
    }
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#000000';
    }
  
});
