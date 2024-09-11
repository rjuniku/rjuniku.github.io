// Arrays of compounds
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
    { formula: "AsF₅", name: "Arsenic pentafluoride" },
    { formula: "PF₃", name: "Phosphorus trifluoride" },
    { formula: "SeCl₄", name: "Selenium tetrachloride" },
    { formula: "H₂Se", name: "Hydrogen selenide" },
    { formula: "SiH₄", name: "Silane" },
    { formula: "ClF", name: "Chlorine monofluoride" },
    { formula: "OCl₂", name: "Dichlorine monoxide" },
    { formula: "P₄O₁₀", name: "Phosphorus pentoxide" },
   
];

// Example: Function to randomly select an ionic compound
function getRandomCompound() {
    const randomIndex = Math.floor(Math.random() * ionicCompounds.length);
    return ionicCompounds[randomIndex];
}

// Example: Function to randomly select a covalent compound
function getRandomCovalentCompound() {
    const randomIndex = Math.floor(Math.random() * covalentCompounds.length);
    return covalentCompounds[randomIndex];
}

// Example usage in your game:
const randomCompound = getRandomCompound();
console.log(`Formula: ${randomCompound.formula}, Name: ${randomCompound.name}`);

const randomCovalentCompound = getRandomCovalentCompound();
console.log(`Formula: ${randomCovalentCompound.formula}, Name: ${randomCovalentCompound.name}`);

// The game logic (unchanged)
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
    currentQuestionIndex = 

