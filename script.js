// Questions for classification game
const classificationQuestions = [
    { element: "Na", correctAnswer: "Metal" },
    { element: "C", correctAnswer: "Nonmetal" },
    { element: "Si", correctAnswer: "Metalloid" },
    { element: "Al", correctAnswer: "Metal" },
    { element: "O", correctAnswer: "Nonmetal" }
];

// Questions for group matching game
const groupQuestions = [
    { element: "Na", correctAnswer: "Alkali Metals" },
    { element: "Mg", correctAnswer: "Alkaline Earth Metals" },
    { element: "Ne", correctAnswer: "Noble Gases" },
    { element: "Fe", correctAnswer: "Transition Metals" },
    { element: "F", correctAnswer: "Halogens" }
];

let currentQuestionIndex = 0;
let score = 0;
let currentGame = "";

function startClassificationGame() {
    currentGame = "classification";
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('game').style.display = 'block';
    loadQuestion();
}

function startGroupMatchingGame() {
    currentGame = "group";
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('game').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = currentGame === "classification" 
        ? classificationQuestions[currentQuestionIndex] 
        : groupQuestions[currentQuestionIndex];
        
    document.getElementById('question').textContent = `Classify the element: ${question.element}`;
    
    if (currentGame === "classification") {
        document.getElementById('options').innerHTML = `
            <button onclick="checkAnswer('Metal')">Metal</button>
            <button onclick="checkAnswer('Nonmetal')">Nonmetal</button>
            <button onclick="checkAnswer('Metalloid')">Metalloid</button>`;
    } else {
        document.getElementById('options').innerHTML = `
            <button onclick="checkAnswer('Alkali Metals')">Alkali Metals</button>
            <button onclick="checkAnswer('Alkaline Earth Metals')">Alkaline Earth Metals</button>
            <button onclick="checkAnswer('Noble Gases')">Noble Gases</button>
            <button onclick="checkAnswer('Transition Metals')">Transition Metals</button>
            <button onclick="checkAnswer('Halogens')">Halogens</button>`;
    }
}

function checkAnswer(answer) {
    const question = currentGame === "classification" 
        ? classificationQuestions[currentQuestionIndex] 
        : groupQuestions[currentQuestionIndex];

    if (answer === question.correctAnswer) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "green";
        score++;
    } else {
        document.getElementById('feedback').textContent = "Incorrect!";
        document.getElementById('feedback').style.color = "red";
    }

    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentGame === "classification" && currentQuestionIndex < classificationQuestions.length) {
        loadQuestion();
    } else if (currentGame === "group" && currentQuestionIndex < groupQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById('game').style.display = 'none';
        document.getElementById('score').style.display = 'block';
        document.getElementById('score').textContent = `Your final score is: ${score}`;
    }
    
    document.getElementById('feedback').textContent = "";
    document.getElementById('next').style.display = 'none';
}

