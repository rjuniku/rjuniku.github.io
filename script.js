// Arrays of compounds
const ionicCompounds = [
    { formula: "NaCl", name: "Sodium chloride" },
    { formula: "KBr", name: "Potassium bromide" },
    { formula: "MgO", name: "Magnesium oxide" },
    // ... (add more as needed)
];

const covalentCompounds = [
    { formula: "CO2", name: "Carbon dioxide" },
    { formula: "H2O", name: "Water" },
    { formula: "CH4", name: "Methane" },
    // ... (add more as needed)
];

let currentQuestionIndex = 0;
let score = 0;
let currentGame = "";
let currentQuestion = null;

function startNamingGame() {
    currentGame = "naming";
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('game').style.display = 'block';
    loadNamingQuestion();
}

function startFormulaGame() {
    currentGame = "formula";
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('game').style.display = 'block';
    loadFormulaQuestion();
}

function loadNamingQuestion() {
    const questionSet = Math.random() < 0.5 ? ionicCompounds : covalentCompounds;
    currentQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
    document.getElementById('question').textContent = `What is the name of this compound: ${formatFormula(currentQuestion.formula)}?`;
}

function loadFormulaQuestion() {
    const questionSet = Math.random() < 0.5 ? ionicCompounds : covalentCompounds;
    currentQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
    document.getElementById('question').textContent = `What is the formula of this compound: ${currentQuestion.name}?`;
}

function formatFormula(formula) {
    // Replace numbers with subscript formatting
    return formula.replace(/\d+/g, function(match) {
        return `<sub>${match}</sub>`;
    });
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    let correctAnswer = "";
    
    if (currentGame === "naming") {
        correctAnswer = currentQuestion.name.toLowerCase();
    } else {
        correctAnswer = currentQuestion.formula.toUpperCase();
    }

    if (currentGame === "naming" && userAnswer.toLowerCase() === correctAnswer) {
        document.getElementById('feedback').innerHTML = "Correct!";
        document.getElementById('feedback').style.color = "green";
        score++;
    } else if (currentGame === "formula" && userAnswer.toUpperCase() === correctAnswer.replace(/<sub>(\d+)<\/sub>/g, '$1')) {
        document.getElementById('feedback').innerHTML = "Correct!";
        document.getElementById('feedback').style.color = "green";
        score++;
    } else {
        document.getElementById('feedback').innerHTML = `Incorrect! The correct answer is ${currentGame === "naming" ? correctAnswer : formatFormula(correctAnswer)}`;
        document.getElementById('feedback').style.color = "red";
    }
    
    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    document.getElementById('feedback').textContent = "";
    document.getElementById('answer').value = "";
    document.getElementById('next').style.display = 'none';
    
    if (currentGame === "naming") {
        loadNamingQuestion();
    } else {
        loadFormulaQuestion();
    }
}

