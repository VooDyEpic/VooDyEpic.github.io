document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const answers = {
    warrior: 0,
    mage: 0,
    archer: 0
  };

  const form = new FormData(e.target);
  for (const [_, value] of form.entries()) {
    if (answers.hasOwnProperty(value)) {
      answers[value]++;
    }
  }

  const resultEntry = Object.entries(answers).sort((a, b) => b[1] - a[1])[0];

  if (!resultEntry || resultEntry[1] === 0) {
    document.getElementById('result').textContent = "Пожалуйста, ответь на все вопросы.";
    return;
  }

  const resultText = {
    warrior: "Ты — Воин! 💪 Тебе ближе бой в ближнем радиусе, ты защитник и настоящий танк!",
    mage: "Ты — Маг! 🔮 Тебя привлекает магия, интеллект и контроль. Мудрость — твоя сила!",
    archer: "Ты — Лучник! 🏹 Твоя сила — скорость, меткость и мобильность!"
  };

  const resultKey = resultEntry[0];
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = resultText[resultKey];
  resultDiv.classList.add('visible');
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
