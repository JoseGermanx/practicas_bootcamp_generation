window.addEventListener("DOMContentLoaded", function() {
    var slides = [
        "/01_HTML/assets/01.png",
        "/01_HTML/assets/02.jpg",
        "/01_HTML/assets/03.jpg"
    ];

    var slideIndex = 0;
    var interval = 1000; // Intervalo de tiempo en milisegundos (5 segundos)

    var slideContainer = document.getElementById("slide-container");
    var slideImage = document.getElementById("slide");

    function showSlide() {
        slideImage.src = slides[slideIndex];

        // Avanzar a la siguiente diapositiva
        slideIndex = (slideIndex + 1) % slides.length;

        // Llamar a la función showSlide después del intervalo de tiempo especificado
        setTimeout(showSlide, interval);
    }

    // Mostrar la primera diapositiva
    showSlide();
});
