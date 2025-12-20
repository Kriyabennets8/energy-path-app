// ---------- Quiz Questions ----------
const quizQuestions = [
  {
    question: "Do you often feel energetic or restless?",
    options: ["Yes", "Sometimes", "Rarely"],
    dosha: ["vata", "pitta", "kapha"]
  },
  {
    question: "Do you prefer warm or cool environments?",
    options: ["Warm", "Cool", "Neutral"],
    dosha: ["pitta", "vata", "kapha"]
  }
  // Add more questions as needed
];

// ---------- Function to Show Dosha Plan ----------
function showDoshaPlan(dosha) {
  const content = {
    vata: "Vata Plan: Rise early, do morning breathwork, eat warm grounding foods.",
    pitta: "Pitta Plan: Stay cool, meditate, enjoy light and fresh foods.",
    kapha: "Kapha Plan: Get moving, energizing exercises, light meals."
  };

  const container = document.getElementById("plan-container");
  container.innerHTML = `<h2>${dosha.toUpperCase()} PLAN</h2><p>${content[dosha]}</p>`;
}

// ---------- Example Button Listeners ----------
document.getElementById("vata-btn").addEventListener("click", () => showDoshaPlan("vata"));
document.getElementById("pitta-btn").addEventListener("click", () => showDoshaPlan("pitta"));
document.getElementById("kapha-btn").addEventListener("click", () => showDoshaPlan("kapha"));
