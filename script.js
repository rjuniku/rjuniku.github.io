// Arrays of compounds
const ionicCompounds = [
    { formula: "NaCl", name: "Sodium chloride" },
    { formula: "KBr", name: "Potassium bromide" },
    { formula: "MgO", name: "Magnesium oxide" },
    // ... (add 50 total)
];

const covalentCompounds = [
    { formula: "CO₂", name: "Carbon dioxide" },
    { formula: "H₂O", name: "Water" },
    { formula: "CH₄", name: "Methane" },
    // ... (add 50 total)
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
    document.getElementById('question').textContent = `What is the name of this compound: ${currentQuestion.formula}?`;
}

function loadFormulaQuestion() {
    const questionSet = Math.random() < 0.5 ? ionicCompounds : covalentCompounds;
    currentQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
    document.getElementById('question').textContent = `What is the formula of this compound: ${currentQuestion.name}?`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    let correctAnswer = "";
    
    if (currentGame === "naming") {
        correctAnswer = currentQuestion.name.toLowerCase();
    } else {
        correctAnswer = currentQuestion.formula.toUpperCase();
    }

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "green";
        score++;
    } else {
        document.getElementById('feedback').textContent = `Incorrect! The correct answer is ${correctAnswer}`;
        document.getElementById('feedback').style.color = "red";
    }
    
    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    if (currentGame === "naming") {
        loadNamingQuestion();
    } else {
        loadFormulaQuestion();
    }
    
    document.getElementById('feedback').textContent = "";
    document.getElementById('next').style.display = 'none';
    document.getElementById('answer').value = "";
}
