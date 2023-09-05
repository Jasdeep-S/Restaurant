/* Button Redirects */
function menuRedirect(){
    window.location.href = "menu.html";
}

function aboutRedirect(){
    window.location.href = "about.html";
}
/* Button Redirects Close */

/* Fade Animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.randQuote, .person, .popItems, .card, .aboutImg, .text-box, .container, .imgContainer, .valueBox');
hiddenElements.forEach((el) => observer.observe(el));
/* Fade Animation Close */

/* Navbar */
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");

}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");

}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* Navbar Close */
