function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) =>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 150;

        if(elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function revelar() {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        } 
    });
}

window.addEventListener("scroll", revelar);
revelar(); // Ativa efeitos mesmo sem rolar

