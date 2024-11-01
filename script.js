const checkbox = document.querySelector(".hero .something");
const about = document.getElementById("about");
const home = document.getElementById("home");
const homebtn = document.getElementById("home-btn");
const aboutbtn = document.getElementById("about-btn");


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

checkbox.addEventListener("click", ()=>{
    about.style.display = about.style.display == "block" ? "none" : "block";
    home.style.display = about.style.display == "block" ? "none" : "block";
})
homebtn.addEventListener("click", ()=>{
    about.style.display = "none";
    home.style.display = "block";
    checkbox.checked = false;
})
aboutbtn.addEventListener("click", ()=>{
    about.style.display = "block";
    home.style.display = "none";
    checkbox.checked = true;
})

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
