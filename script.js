document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").slice(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
