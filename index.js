const progress = document.querySelector(".scroll-line");
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll =  document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollTop / maxScroll) * 92;
    progress.style.height = percentage + "%";
});



const buton = document.getElementById("theme-toggle");
buton.addEventListener("click", () => {
    const temaCurenta =document.documentElement.getAttribute("data-theme");
    if (temaCurenta === "light") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "light");
});