const checkAnswersBtn = document.getElementById("checkAnswersBtn");
const quizResult = document.getElementById("quizResult");

checkAnswersBtn.addEventListener("click", function () {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if (!q1 || !q2 || !q3) {
    quizResult.textContent = "Please answer all questions before checking your score.";
    quizResult.style.color = "#c0392b";
    return;
  }

  if (q1.value === "c") score++;
  if (q2.value === "b") score++;
  if (q3.value === "b") score++;

  quizResult.textContent = `You got ${score} out of 3 correct!`;
  quizResult.style.color = "#1e3a8a";
});

function runCode() {
  const code = document.getElementById("codeInput").value;
  const outputBox = document.getElementById("outputBox");

  try {
    let result = eval(code);
    outputBox.textContent = result !== undefined ? result : "Code executed.";
  } catch (error) {
    outputBox.textContent = "Error: " + error.message;
  }
}

// CONNECT BUTTON
const runBtn = document.getElementById("runCodeBtn");
runBtn.addEventListener("click", runCode);
