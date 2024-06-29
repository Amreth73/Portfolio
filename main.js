window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    // console.log(header.classList);
});

const serviceModals=document.querySelectorAll(".service-modal");
const learnmoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");

var modal=function(modalClick)
{
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtns,i) => {
    learnmoreBtns.addEventListener("click",()=>{
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click",()=>{
       serviceModals.forEach((modalview)=>{
        modalview.classList.remove("active");
       })
    });
});



const portfolioModals=document.querySelectorAll(".portfolio-model");
const imgCards=document.querySelectorAll(".img-card");
const portfolioCloseBtns=document.querySelectorAll(".portfolio-close-btn");

var portfolioModal=function(modalClick)
{
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard,i) => {
    imgCard.addEventListener("click",()=>{
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click",()=>{
        portfolioModals.forEach((portfolioModalview)=>{
            portfolioModalview.classList.remove("active");
       })
    });
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


window.addEventListener("scroll",()=>
{
    const sections = document.querySelectorAll("section");
    const scrollY=window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight=current.offsetHeight;
        let sectionTop=current.offsetTop-50;
        let id=current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
                document.querySelector(".nav-items a[href*="+id +"]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*="+id +"]").classList.remove("active");

        }
        
    });
});
const themeBtn = document.querySelector(".theme-btn");

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem =document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


navItem.forEach((navItem)=>
{
    navItem.addEventListener("click",() => 
    {
        navigation.classList.remove("active");
    })
})

ScrollReveal({
    reset: true,
    distance: '60px',
    duration:2500,
    delay:100

});

ScrollReveal().reveal('.home .info h2, .section-title-01,.section-title-02, .animated-text', {delay: 500,origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p,.about-info .btn', {delay: 600,origin:'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700,origin:'bottom'});
ScrollReveal().reveal('.media-icons i,.contact-left li', {delay: 500,origin:'left',interval:100});
ScrollReveal().reveal('.home-img, .about-img', {delay: 500,origin:'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600,origin:'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500,origin:'right',interval:100});
ScrollReveal().reveal('.skills-description,.service-description,.contact-card,.client-card,.client-swiper,.contact-left h2', {delay: 700,origin:'left'});
ScrollReveal().reveal('.experience-card, .service-card,.education,.portfolio .img-card', {delay: 800,origin:'bottom',interval:200});
ScrollReveal().reveal('footer .group', {delay: 800,origin:'top',interval:100});




document.getElementById('download-btn').addEventListener('click', function() {
    
    const resumeUrl="C:\Users\HP\Downloads\myresume.pdf"

    const a=document.createElement('a');
    a.href=resumeUrl;
    a.download="Resume.pdf"

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
});



