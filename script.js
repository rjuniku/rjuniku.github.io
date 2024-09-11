// Arrays of compounds
// Array of ionic compounds with formulas and names
const ionicCompounds = [
    { formula: "NaCl", name: "Sodium chloride" },
    { formula: "KBr", name: "Potassium bromide" },
    { formula: "MgO", name: "Magnesium oxide" },
    { formula: "CaCl₂", name: "Calcium chloride" },
    { formula: "Na₂O", name: "Sodium oxide" },
    { formula: "Fe₂O₃", name: "Iron(III) oxide" },
    { formula: "Al₂O₃", name: "Aluminum oxide" },
    { formula: "Na₂SO₄", name: "Sodium sulfate" },
    { formula: "BaSO₄", name: "Barium sulfate" },
    { formula: "MgSO₄", name: "Magnesium sulfate" },
    { formula: "NaNO₃", name: "Sodium nitrate" },
    { formula: "KNO₃", name: "Potassium nitrate" },
    { formula: "CaCO₃", name: "Calcium carbonate" },
    { formula: "Na₂CO₃", name: "Sodium carbonate" },
    { formula: "NH₄Cl", name: "Ammonium chloride" },
    { formula: "Li₂CO₃", name: "Lithium carbonate" },
    { formula: "AgCl", name: "Silver chloride" },
    { formula: "CuSO₄", name: "Copper(II) sulfate" },
    { formula: "ZnCl₂", name: "Zinc chloride" },
    { formula: "AlCl₃", name: "Aluminum chloride" },
    { formula: "NaOH", name: "Sodium hydroxide" },
    { formula: "KOH", name: "Potassium hydroxide" },
    { formula: "Mg(OH)₂", name: "Magnesium hydroxide" },
    { formula: "FeSO₄", name: "Iron(II) sulfate" },
    { formula: "Pb(NO₃)₂", name: "Lead(II) nitrate" },
    { formula: "NaHCO₃", name: "Sodium bicarbonate" },
    { formula: "Ca(OH)₂", name: "Calcium hydroxide" },
    { formula: "NH₄NO₃", name: "Ammonium nitrate" },
    { formula: "CuCl₂", name: "Copper(II) chloride" },
    { formula: "NaF", name: "Sodium fluoride" },
    { formula: "MgCl₂", name: "Magnesium chloride" },
    { formula: "CaSO₄", name: "Calcium sulfate" },
    { formula: "K₂SO₄", name: "Potassium sulfate" },
    { formula: "LiOH", name: "Lithium hydroxide" },
    { formula: "FeCl₃", name: "Iron(III) chloride" },
    { formula: "ZnSO₄", name: "Zinc sulfate" },
    { formula: "Na₃PO₄", name: "Sodium phosphate" },
    { formula: "K₃PO₄", name: "Potassium phosphate" },
    { formula: "Ca₃(PO₄)₂", name: "Calcium phosphate" },
    { formula: "NaC₂H₃O₂", name: "Sodium acetate" },
    { formula: "K₂CO₃", name: "Potassium carbonate" },
    { formula: "SrCl₂", name: "Strontium chloride" },
    { formula: "(NH₄)₂SO₄", name: "Ammonium sulfate" },
    { formula: "NiCl₂", name: "Nickel(II) chloride" },
    { formula: "MnO₂", name: "Manganese(IV) oxide" },
    { formula: "Cu(NO₃)₂", name: "Copper(II) nitrate" },
    { formula: "Ag₂O", name: "Silver oxide" },
    { formula: "CoCl₂", name: "Cobalt(II) chloride" },
    { formula: "CdSO₄", name: "Cadmium sulfate" },
    { formula: "NaBr", name: "Sodium bromide" }
];

// Example: Function to randomly select a compound
function getRandomCompound() {
    const randomIndex = Math.floor(Math.random() * ionicCompounds.length);
    return ionicCompounds[randomIndex];
}

// Example usage in your game:
const randomCompound = getRandomCompound();
console.log(`Formula: ${randomCompound.formula}, Name: ${randomCompound.name}`);

];

// Array of covalent compounds with formulas and names
const covalentCompounds = [
    { formula: "H₂O", name: "Water" },
    { formula: "CO₂", name: "Carbon dioxide" },
    { formula: "NH₃", name: "Ammonia" },
    { formula: "N₂O", name: "Nitrous oxide" },
    { formula: "NO₂", name: "Nitrogen dioxide" },
    { formula: "SO₂", name: "Sulfur dioxide" },
    { formula: "SO₃", name: "Sulfur trioxide" },
    { formula: "PCl₃", name: "Phosphorus trichloride" },
    { formula: "PCl₅", name: "Phosphorus pentachloride" },
    { formula: "SF₆", name: "Sulfur hexafluoride" },
    { formula: "SiO₂", name: "Silicon dioxide" },
    { formula: "BF₃", name: "Boron trifluoride" },
    { formula: "BCl₃", name: "Boron trichloride" },
    { formula: "N₂H₄", name: "Hydrazine" },
    { formula: "H₂S", name: "Hydrogen sulfide" },
    { formula: "SF₄", name: "Sulfur tetrafluoride" },
    { formula: "NF₃", name: "Nitrogen trifluoride" },
    { formula: "ClO₂", name: "Chlorine dioxide" },
    { formula: "BrF₃", name: "Bromine trifluoride" },
    { formula: "IF₅", name: "Iodine pentafluoride" },
    { formula: "ClF₃", name: "Chlorine trifluoride" },
    { formula: "HCl", name: "Hydrogen chloride" },
    { formula: "HBr", name: "Hydrogen bromide" },
    { formula: "HI", name: "Hydrogen iodide" },
    { formula: "ICl", name: "Iodine monochloride" },
    { formula: "CO", name: "Carbon monoxide" },
    { formula: "XeF₂", name: "Xenon difluoride" },
    { formula: "XeF₄", name: "Xenon tetrafluoride" },
    { formula: "NO", name: "Nitric oxide" },
    { formula: "N₂F₄", name: "Tetrafluorohydrazine" },
    { formula: "O₃", name: "Ozone" },
    { formula: "SiCl₄", name: "Silicon tetrachloride" },
    { formula: "CCl₄", name: "Carbon tetrachloride" },
    { formula: "Br₂", name: "Bromine" },
    { formula: "Cl₂", name: "Chlorine" },
    { formula: "F₂", name: "Fluorine" },
    { formula: "I₂", name: "Iodine" },
    { formula: "N₂", name: "Nitrogen" },
    { formula: "O₂", name: "Oxygen" },
    { formula: "P₄", name: "Phosphorus (white)" },
    { formula: "S₈", name: "Sulfur (octasulfur)" },
    { formula: "AsF₅", name: "Arsenic pentafluoride" },
    { formula: "PF₃", name: "Phosphorus trifluoride" },
    { formula: "SeCl₄", name: "Selenium tetrachloride" },
    { formula: "H₂Se", name: "Hydrogen selenide" },
    { formula: "SiH₄", name: "Silane" },
    { formula: "ClF", name: "Chlorine monofluoride" },
    { formula: "OCl₂", name: "Dichlorine monoxide" },
    { formula: "P₄O₁₀", name: "Phosphorus pentoxide" },
    { formula: "HNO₃", name: "Nitric acid" }
];

// Example: Function to randomly select a covalent compound
function getRandomCovalentCompound() {
    const randomIndex = Math.floor(Math.random() * covalentCompounds.length);
    return covalentCompounds[randomIndex];
}

// Example usage in your game:
const randomCovalentCompound = getRandomCovalentCompound();
console.log(`Formula: ${randomCovalentCompound.formula}, Name: ${randomCovalentCompound.name}`);

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

