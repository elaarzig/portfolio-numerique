
const questions = [

    {
        question: "1. Quel est le rôle principal du système Windows ?",
        reponses: [
            "Gérer les ressources de l'ordinateur",
            "Créer des images uniquement",
            "Remplacer le processeur",
            "Augmenter la mémoire RAM"
        ],
        correcte: 0
    },

    {
        question: "2. Quel raccourci permet de copier un fichier ?",
        reponses: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
        correcte: 1
    },

    {
        question: "3. Quel raccourci permet de coller un élément ?",
        reponses: ["Ctrl + A", "Ctrl + X", "Ctrl + V", "Ctrl + S"],
        correcte: 2
    },

    {
        question: "4. Quel raccourci permet de sélectionner tous les éléments ?",
        reponses: ["Ctrl + A", "Ctrl + C", "Ctrl + P", "Ctrl + Z"],
        correcte: 0
    },

    {
        question: "5. Quel outil permet de gérer les fichiers et les dossiers ?",
        reponses: [
            "Gestionnaire des tâches",
            "Explorateur de fichiers",
            "Calculatrice",
            "Bloc-notes"
        ],
        correcte: 1
    },

    {
        question: "6. Quelle combinaison ouvre le Gestionnaire des tâches directement ?",
        reponses: [
            "Ctrl + C",
            "Alt + F4",
            "Ctrl + Shift + Échap",
            "Ctrl + V"
        ],
        correcte: 2
    },

    {
        question: "7. Quelle extension correspond généralement à un fichier exécutable Windows ?",
        reponses: [".txt", ".jpg", ".pdf", ".exe"],
        correcte: 3
    },

    {
        question: "8. Quel raccourci permet de renommer un fichier sélectionné dans l'Explorateur ?",
        reponses: ["F2", "F5", "F1", "F12"],
        correcte: 0
    },

    {
        question: "9. Quel outil permet de désinstaller un programme ?",
        reponses: [
            "La Corbeille",
            "Paramètres > Applications",
            "Bloc-notes",
            "Explorateur de fichiers"
        ],
        correcte: 1
    },

    {
        question: "10. Quel raccourci permet de verrouiller Windows ?",
        reponses: [
            "Ctrl + C",
            "Alt + Tab",
            "Windows + L",
            "Ctrl + S"
        ],
        correcte: 2
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

    const boutons = document.querySelectorAll(
        "#quiz-windows #reponses button"
    );

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
