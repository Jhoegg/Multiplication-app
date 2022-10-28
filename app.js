const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAnswer = num1 * num2;

const scoreEl = document.getElementById("score_displayed");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitEl = document.getElementById("submit");
const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

formEl.addEventListener("submit", () => {
  const userAnswer = +answerEl.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

scoreEl.innerText = `score: ${score}`;
