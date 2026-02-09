/* ===============================
   LISTA DE MARCAS (ELEMENTOS)
   =============================== */

const brands = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Porsche",
  "Lexus",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
  "Lamborghini",
  "Ferrari"
];

/* ===============================
   SCORES (RANKING ACUMULADO)
   =============================== */

let scores = {};

brands.forEach(brand => {
  scores[brand] = 0;
});

/* ===============================
   VARIABLES DE COMPARACIÓN
   =============================== */

let currentA = "";
let currentB = "";

/* ===============================
   FUNCIÓN PRINCIPAL A/B
   =============================== */

function pickTwoBrands() {
  let first = brands[Math.floor(Math.random() * brands.length)];
  let second = first;

  while (second === first) {
    second = brands[Math.floor(Math.random() * brands.length)];
  }

  currentA = first;
  currentB = second;

  document.getElementById("brandA").textContent = currentA;
  document.getElementById("brandB").textContent = currentB;
}

/* ===============================
   REGISTRAR ELECCIÓN HUMANA
   =============================== */

function chooseBrand(brand) {
  scores[brand]++;
  pickTwoBrands();
}

document.getElementById("brandA").onclick = () => chooseBrand(currentA);
document.getElementById("brandB").onclick = () => chooseBrand(currentB);

/* ===============================
   MOSTRAR RANKING
   =============================== */

function showRanking() {
  const rankingDiv = document.getElementById("ranking");
  const list = document.getElementById("rankingList");

  list.innerHTML = "";

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  sorted.forEach(([brand, score]) => {
    const li = document.createElement("li");
    li.textContent = `${brand} (${score})`;
    list.appendChild(li);
  });

  rankingDiv.style.display = "block";
}

/* ===============================
   INICIO
   =============================== */

pickTwoBrands();
