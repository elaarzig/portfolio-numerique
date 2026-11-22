
const questions = [
    {
        question: "1. Quelle commande affiche le contenu d'un dossier ?",
        reponses: ["mkdir", "ls", "pwd", "cd"],
        correcte: 1
    },
    {
        question: "2. Quelle commande permet de créer un dossier ?",
        reponses: ["rm", "cd", "mkdir", "ls"],
        correcte: 2
    },
    {
        question: "3. Quelle commande affiche le chemin actuel ?",
        reponses: ["pwd", "cp", "mv", "rm"],
        correcte: 0
    },
    {
        question: "4. Quelle commande permet de supprimer un fichier ?",
        reponses: ["touch", "cat", "pwd", "rm"],
        correcte: 3
    },
    {
        question: "5. Quelle commande permet de changer de dossier ?",
        reponses: ["ls", "cd", "mkdir", "pwd"],
        correcte: 1
    },
    {
        question: "6. Quelle commande permet de copier un fichier ?",
        reponses: ["mv", "rm", "cp", "ls"],
        correcte: 2
    },
    {
        question: "7. Quelle commande affiche le nom de l'utilisateur connecté ?",
        reponses: ["whoami", "date", "pwd", "mkdir"],
        correcte: 0
    },
    {
        question: "8. Quelle commande permet de modifier les permissions ?",
        reponses: ["ls", "chmod", "cat", "cd"],
        correcte: 1
    },
    {
        question: "9. Quelle commande permet de déplacer un fichier ?",
        reponses: ["pwd", "touch", "mv", "whoami"],
        correcte: 2
    },
    {
        question: "10. Quelle commande permet d'afficher le contenu d'un fichier texte ?",
        reponses: ["cat", "mkdir", "rmdir", "cd"],
        correcte: 0
    }
];

let indice = 0;
let score = 0;

function commencerQuiz() {

    indice = 0;
    score = 0;

    document.getElementById("commencer").hidden = true;

    afficherQuestion();
}

function afficherQuestion() {

    document.getElementById("resultat").textContent = "";

    document.getElementById("question").textContent =
        questions[indice].question;

    const zone = document.getElementById("reponses");

    zone.innerHTML = "";

    questions[indice].reponses.forEach((reponse, i) => {

        const bouton = document.createElement("button");

        bouton.textContent = reponse;

        bouton.onclick = function() {
            verifierReponse(i);
        };

        zone.appendChild(bouton);
    });

    document.getElementById("suivant").hidden = true;
}

function verifierReponse(choix) {

    const boutons = document.querySelectorAll("#reponses button");

    boutons.forEach((bouton, i) => {

        bouton.disabled = true;

        if (i === questions[indice].correcte) {
            bouton.style.backgroundColor = "#a8e6a3";
        }

        if (i === choix && choix !== questions[indice].correcte) {
            bouton.style.backgroundColor = "#f5aaaa";
        }
    });

    if (choix === questions[indice].correcte) {

        score++;

        document.getElementById("resultat").textContent =
            "Bonne réponse ! Bravo 🎉";

    } else {

        document.getElementById("resultat").textContent =
            "Mauvaise réponse ! La bonne réponse est : " +
            questions[indice].reponses[questions[indice].correcte];
    }

    document.getElementById("suivant").hidden = false;
}

function questionSuivante() {

    indice++;

    if (indice < questions.length) {

        afficherQuestion();

    } else {

        terminerQuiz();
    }
}

function terminerQuiz() {

    document.getElementById("question").textContent =
        "🎉 Quiz terminé !";

    document.getElementById("reponses").innerHTML = "";

    let note = (score / questions.length) * 20;

    document.getElementById("resultat").textContent =
        "Votre score : " + score + " / 10 | Note : " +
        note.toFixed(2) + " / 20";

    document.getElementById("suivant").hidden = true;

    document.getElementById("commencer").hidden = false;

    document.getElementById("commencer").textContent =
        "Recommencer le quiz";
}
