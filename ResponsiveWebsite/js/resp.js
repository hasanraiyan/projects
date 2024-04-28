burger= document.getElementsByClassName("burger");
navbar=document.querySelector(".navbar");
navList =document.querySelector(".nav-list");
rightNav=document.querySelector(".rightNav");
burger.addEventListener('click',()=>{
    rightNav.classList.toogle('v-class');
    navList.classList.toogle('v-class');
    navbar.classList.toogle('h-nav')
}); 