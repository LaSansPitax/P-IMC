const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

let taille = document.getElementById('size');
let poids = document.getElementById('weight');
let result = document.querySelector('result');
let button = document.querySelector('button');

function calculeIMC(poids, taille){
  taille = taille/100;
  return (poids / (taille*taille)).tofixed(2);
}

button.addEventListener('click', function() {
  const taille = parseFloat(tailleinput.value);
  const poids = parseFloat(poidsinput.value);

  if (isNaN(poids) || isNaN(taille)) {
        resultDiv.textContent = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
        return;
});



