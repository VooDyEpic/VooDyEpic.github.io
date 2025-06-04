document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const answers = {
    warrior: 0,
    mage: 0,
    archer: 0
  };

  const form = new FormData(e.target);
  for (const [name, value] of form.entries()) {
    answers[value]++;
  }

  const result = Object.entries(answers).sort((a, b) => b[1] - a[1])[0][0];

  const resultText = {
    warrior: "Ты — Воин! 💪 Тебе ближе бой в ближнем радиусе, ты защитник и настоящий танк!",
    mage: "Ты — Маг! 🔮 Тебя привлекает магия, интеллект и контроль. Мудрость — твоя сила!",
    archer: "Ты — Лучник! 🏹 Твоя сила — скорость, меткость и мобильность!"
  };

  document.getElementById('result').textContent = resultText[result];
  document.getElementById('result').classList.add('visible');
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
