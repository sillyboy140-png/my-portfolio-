const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// BACK TO TOP
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});