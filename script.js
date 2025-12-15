// Scroll Reveal Effect
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});

// Small Neon Pulse Effect
setInterval(()=>{
    document.querySelector(".neon-title")
        .classList.toggle("pulse");
},1500);
