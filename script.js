let currentQuestion = 0;
let userAnswers = {};
let quizSubmitted = false;

const TIME_LIMIT_MINUTES = 180;
let timeRemaining = TIME_LIMIT_MINUTES * 60;
let timerInterval = null;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const resultBox = document.getElementById("result-box");
const resultSummary = document.getElementById("result-summary");
const reviewBtn = document.getElementById("review-btn");
const reviewBox = document.getElementById("review-box");

const timerDisplay = document.getElementById("timer");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const questionNav = document.getElementById("question-nav");
const totalQuestionsLabel = document.getElementById("total-questions-label");

function initializeQuiz() {
  if (typeof questions === "undefined" || !Array.isArray(questions) || questions.length === 0) {
    startScreen.innerHTML = `
      <h2>Questions could not be loaded</h2>
      <p>Please check your questions.js file.</p>
    `;
    return;
  }

  totalQuestionsLabel.textContent = `Questions: ${questions.length}`;
  progressText.textContent = `Question 1 of ${questions.length}`;
  updateTimerDisplay();
  createQuestionNavigation();
}

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
  startTimer();
}

function startTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  updateTimerDisplay();

  timerInterval = setInterval(function () {
    if (quizSubmitted) {
      clearInterval(timerInterval);
      return;
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Your quiz will be submitted automatically.");
      submitQuiz(true);
      return;
    }

    timeRemaining--;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function loadQuestion() {
  const q = questions[currentQuestion];

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
  questionText.textContent = q.question;

  optionsBox.innerHTML = "";

  for (let key in q.options) {
    const option = document.createElement("label");
    option.className = "option";

    option.innerHTML = `
      <input type="radio" name="answer" value="${key}" 
      ${userAnswers[currentQuestion] === key ? "checked" : ""}>
      ${key}. ${q.options[key]}
    `;

    optionsBox.appendChild(option);
  }

  document.querySelectorAll("input[name='answer']").forEach(function (input) {
    input.addEventListener("change", function () {
      userAnswers[currentQuestion] = this.value;
      updateQuestionNavigation();
      updateProgress();
    });
  });

  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = "inline-block";

  updateProgress();
  updateQuestionNavigation();
}

function updateProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = questions.length;
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  progressText.textContent = `Question ${currentQuestion + 1} of ${totalQuestions} | Answered: ${answeredCount}`;
  progressBar.style.width = `${progressPercent}%`;
}

function createQuestionNavigation() {
  questionNav.innerHTML = "";

  questions.forEach(function (_, index) {
    const btn = document.createElement("button");
    btn.textContent = index + 1;
    btn.className = "nav-btn";
    btn.type = "button";

    btn.addEventListener("click", function () {
      currentQuestion = index;
      loadQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    questionNav.appendChild(btn);
  });
}

function updateQuestionNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");

  navButtons.forEach(function (btn, index) {
    btn.classList.remove("current", "answered");

    if (userAnswers[index]) {
      btn.classList.add("answered");
    }

    if (index === currentQuestion) {
      btn.classList.add("current");
    }
  });
}

function goToNextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goToPreviousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function confirmSubmit() {
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;

  const confirmMessage =
    `Are you sure you want to submit?\n\n` +
    `Answered: ${answeredCount} out of ${questions.length}\n` +
    `Unanswered: ${unansweredCount}`;

  if (confirm(confirmMessage)) {
    submitQuiz(false);
  }
}

function submitQuiz(autoSubmitted) {
  if (quizSubmitted) return;

  quizSubmitted = true;
  clearInterval(timerInterval);

  let score = 0;

  questions.forEach(function (q, index) {
    if (userAnswers[index] === q.correctAnswer) {
      score++;
    }
  });

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const unanswered = totalQuestions - answeredCount;
  const wrongAnswers = answeredCount - score;
  const percentage = ((score / totalQuestions) * 100).toFixed(1);
  const timeUsedSeconds = TIME_LIMIT_MINUTES * 60 - timeRemaining;
  const timeUsed = formatTime(timeUsedSeconds);
  const grade = getGrade(percentage);

  quizScreen.classList.add("hidden");
  resultBox.classList.remove("hidden");

  resultSummary.innerHTML = `
    <div class="result-card">
      <p><strong>Score:</strong> ${score} / ${totalQuestions}</p>
      <p><strong>Percentage:</strong> ${percentage}%</p>
      <p><strong>Grade:</strong> ${grade}</p>
      <p><strong>Correct Answers:</strong> ${score}</p>
      <p><strong>Wrong Answers:</strong> ${wrongAnswers}</p>
      <p><strong>Unanswered:</strong> ${unanswered}</p>
      <p><strong>Time Used:</strong> ${timeUsed}</p>
      <p><strong>Submission:</strong> ${autoSubmitted ? "Automatically submitted when time ended" : "Submitted by student"}</p>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes} minutes ${remainingSeconds} seconds`;
}

function getGrade(percentage) {
  percentage = Number(percentage);

  if (percentage >= 80) return "Excellent";
  if (percentage >= 70) return "Very Good";
  if (percentage >= 60) return "Good";
  if (percentage >= 50) return "Fair";
  return "Needs More Revision";
}

function reviewAnswers() {
  resultBox.classList.add("hidden");
  reviewBox.classList.remove("hidden");

  reviewBox.innerHTML = "<h2>Answer Review</h2>";

  questions.forEach(function (q, index) {
    const userAnswer = userAnswers[index] || "Not answered";
    const correctAnswer = q.correctAnswer;

    const item = document.createElement("div");
    item.className = "review-item";

    const userAnswerText =
      userAnswer === "Not answered"
        ? "Not answered"
        : `${userAnswer}. ${q.options[userAnswer]}`;

    item.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p>${q.question}</p>

      <p><strong>Your Answer:</strong> 
      <span class="${userAnswer === correctAnswer ? "correct" : "wrong"}">${userAnswerText}</span></p>

      <p><strong>Correct Answer:</strong> 
      <span class="correct">${correctAnswer}. ${q.options[correctAnswer]}</span></p>

      <p><strong>Rationale for Correct Answer:</strong> ${q.rationaleCorrect}</p>

      <p><strong>Why Other Options Are Incorrect:</strong></p>
      <ul>
        ${Object.keys(q.options).map(function (key) {
          if (key !== correctAnswer) {
            return `<li><strong>${key}. ${q.options[key]}:</strong> ${q.rationalesIncorrect[key] || "No rationale provided."}</li>`;
          }
          return "";
        }).join("")}
      </ul>
    `;

    reviewBox.appendChild(item);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);
prevBtn.addEventListener("click", goToPreviousQuestion);
submitBtn.addEventListener("click", confirmSubmit);
reviewBtn.addEventListener("click", reviewAnswers);

initializeQuiz();