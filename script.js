// for effect on hero section
const checkbox = document.querySelector(".hero .something");
const about = document.getElementById("about");
const home = document.getElementById("home");
const homebtn = document.getElementById("home-btn");
const aboutbtn = document.getElementById("about-btn");
const menuhomebtn = document.getElementById("menu-home-btn");
const menuaboutbtn = document.getElementById("menu-about-btn");
const darktoggle = document.querySelector(".menu-list .something")


let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        about.style.display = "block";
        home.style.display = "none";
        checkbox.checked = true;
    } else {
        // Scrolling up
        about.style.display = "none";
        home.style.display = "block";
        checkbox.checked = false;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

const showHome = ()=>{
    about.style.display = "none";
    home.style.display = "block";
    checkbox.checked = false;
}
const showAbout = ()=>{
    about.style.display = "block";
    home.style.display = "none";
    checkbox.checked = true;
}
checkbox.addEventListener("click", ()=>{
    about.style.display = about.style.display == "block" ? "none" : "block";
    home.style.display = about.style.display == "block" ? "none" : "block";
})
homebtn.addEventListener("click", showHome);
aboutbtn.addEventListener("click", showAbout);
menuhomebtn.addEventListener("click", showHome);
menuaboutbtn.addEventListener("click", showAbout);

// projects
const button = document.querySelector(".title");
const projectContent = document.querySelector(".project-content");

button.addEventListener("click", ()=>{
    
    projectContent.classList.toggle("show");
})
const button1 = document.querySelector(".left .title");
const projectContent1 = document.querySelector(".left .project-content");

button1.addEventListener("click", ()=>{
    
    projectContent1.classList.toggle("show");
})
const button2 = document.querySelector(".right .title");
const projectContent2 = document.querySelector(".right .project-content");

button2.addEventListener("click", ()=>{
    
    projectContent2.classList.toggle("show");
})
// slide in menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('slide-menu');

menuToggle.addEventListener('click', (event) => {
    menu.classList.toggle('active');
    event.stopPropagation(); // Prevent the click from bubbling up to the window
});

window.addEventListener('click', (event) => {
    // Check if the menu is active and the click was not on the menu or the toggle button
    if (menu.classList.contains('active') && event.target !== darktoggle) {
        menu.classList.remove('active');
    }
});


