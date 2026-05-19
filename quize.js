// Select elements
const questionText = document.querySelector(".question");
const optionButtons = document.querySelectorAll(".option-btn");
const questionCount = document.querySelector(".question-count");
const timerBox = document.querySelector(".timer-box");
const nextBtn = document.querySelector(".next-btn");

// Questions Array
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in browser?",
    options: ["Java", "C++", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let timeLeft = 10;
let timer;

// Load Question
function loadQuestion() {
  resetTimer();

  const q = questions[currentQuestion];

  questionText.innerText = q.question;
  questionCount.innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  optionButtons.forEach((btn, index) => {
    btn.innerText = q.options[index];

    btn.onclick = () => {
      checkAnswer(btn.innerText);
    };
  });

  startTimer();
}

// Check Answer
function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;

  if (selected === correct) {
    alert("Correct Answer!");
  } else {
    alert("Wrong Answer!");
  }
}

// Next Button
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionText.innerText = "Quiz Finished!";
    questionCount.innerText = "";
    timerBox.innerText = "";
    
    optionButtons.forEach(btn => {
      btn.style.display = "none";
    });

    nextBtn.style.display = "none";
  }
});

// Timer Function
function startTimer() {
  timeLeft = 10;

  timer = setInterval(() => {
    timerBox.innerText = `Time Left: ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Time Up!");
    }
  }, 1000);
}

// Reset Timer
function resetTimer() {
  clearInterval(timer);
}

// Start Quiz
loadQuestion();