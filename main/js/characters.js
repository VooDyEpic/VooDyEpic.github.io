document.addEventListener("DOMContentLoaded", () => {
  // Обработка кнопок "Показать описание"
  document.querySelectorAll(".toggle-info").forEach((btn) => {
    btn.addEventListener("click", () => {
      const info = btn.nextElementSibling;
      info.classList.toggle("active");
      btn.textContent = info.classList.contains("active") ? "Скрыть описание" : "Показать описание";
    });
  });

  // Прокрутка к якорям при клике на карусель
  document.querySelectorAll(".carousel-nav").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Автоматическая прокрутка карусели
  const track = document.querySelector(".carousel-track");
  const items = track.querySelectorAll("a");
  const itemWidth = items[0].offsetWidth + 16; // ширина + gap

  let currentIndex = 0;
  setInterval(() => {
    currentIndex++;
    if (currentIndex > items.length - 1) {
      currentIndex = 0;
    }
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }, 3000); // каждые 3 секунды
});
