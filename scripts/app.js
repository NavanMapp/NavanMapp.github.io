// declaring variables
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// toggle activity
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//shopw active  menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const servicesMenu = document.querySelector('#services-page');
    const aboutMenu = document.querySelector('#about-page');
    let scrollPos = window.scrollY; 
    console.log(scrollPos);

        //add 'highlight' classs to my menu items
    if (window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 1400) {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

};

// auto scroll ability when clicking buttons
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on a new item
const hideMobile = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

// activity when the repair buttons are clicked
const repairBtn = document.getElementById('repairBtn').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Please sign in to log a query with support, Thank you!");
});

const repairBtn2 = document.getElementById('repairBtn2').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Please sign in to log a query with support, Thank you!");
});

const repairBtn3 = document.getElementById('repairBtn3').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Please sign in to log a query with support, Thank you!");
});

const repairBtn4 = document.getElementById('repairBtn4').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Please sign in to log a query with support, Thank you!");
});

const scheduleBtn = document.getElementById("scheduleBtn").addEventListener('click', (e) => {
    e.preventDefault();
    alert("Please sign in to log a query with support, Thank you!");
});

// Navigation menu activity on a mobile device
menuLinks.addEventListener('click', hideMobile);
navLogo.addEventListener('click', hideMobile);