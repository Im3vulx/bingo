const usedNumbers = new Set();
const generatedNumbers = [];

function generateUniqueNumber() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 80) + 1;
  } while (usedNumbers.has(randomNumber));

  usedNumbers.add(randomNumber);
  generatedNumbers.push(randomNumber);

  if (usedNumbers.size === 80) {
    alert("Tous les nombres ont été générés !");
    usedNumbers.clear(); // Réinitialise la liste des nombres utilisés une fois tous les nombres générés
    generatedNumbers.length = 0; // Réinitialise le tableau des nombres générés
  }

  return randomNumber;
}

const generateBtn = document.getElementById('generateBtn');
const resultParagraph = document.getElementById('result');

generateBtn.addEventListener('click', () => {
  const uniqueNumber = generateUniqueNumber();
  resultParagraph.textContent = `${uniqueNumber}`;
  displayGeneratedNumbers();
});

function displayGeneratedNumbers() {
  const generatedNumbersContainer = document.getElementById('generatedNumbers');
  generatedNumbersContainer.innerHTML = "<h2></h2><strong>Nombres générés :</strong></h2><br>";

  generatedNumbers.forEach((number, index) => {
    const numberElement = document.createElement('span');
    numberElement.textContent = `${number}`;
    if (index !== generatedNumbers.length - 1) {
      numberElement.textContent += ', ';
    }
    generatedNumbersContainer.appendChild(numberElement);
  });
}