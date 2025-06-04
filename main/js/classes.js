document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".class-image-toggle");

    images.forEach(img => {
        img.addEventListener("click", () => {
            const details = img.closest(".class-card").querySelector(".class-details");
            if (details) {
                details.classList.toggle("hidden");
                details.classList.toggle("visible");
            }
        });
    });
});
