const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h4",{
 ...ScrollRevealOption,
});
ScrollReveal().reveal(".header_content h1",{
 ...ScrollRevealOption,
 delay:500,
});
ScrollReveal().reveal(".header_content h2",{
 ...ScrollRevealOption,
 delay: 1000,
});
ScrollReveal().reveal(".header_content p",{
 ...ScrollRevealOption,
 delay:1500,
});
ScrollReveal().reveal(".header_btn ", {
 ...ScrollRevealOption,
 delay: 2000,
});

ScrollReveal().reveal(".intro_card", {
 ...ScrollRevealOption,
 interval: 500,
});


ScrollReveal().reveal(".about_row:nth-child(3) .about_image img ,.about_row:nth-child(5) .about_image img",{
 ...ScrollRevealOption,
 origin:"left"
});

ScrollReveal().reveal(".about_row:nth-child(4) .about_image img",{
 ...ScrollRevealOption,
 origin:"right"
});

ScrollReveal().reveal(".about_content span",{
 ...ScrollRevealOption,
 delay:500,
});
ScrollReveal().reveal(".about_content h4",{
 ...ScrollRevealOption,
 delay:1000,
});
ScrollReveal().reveal(".about_content p",{
 ...ScrollRevealOption,
 delay:1500,
});
ScrollReveal().reveal(".product_card",{
 ...ScrollRevealOption,
 interval:500,
});
ScrollReveal().reveal(".service_card",{
  duration:1000,
 interval:500,
});

 const Swiper = new Swiper (".Swiper", {
     
    duration:1000,
 interval:500,
    
    
 });

 ScrollReveal().reveal(".insta_grid img",{
  duration:1000,
 interval:500,
});
