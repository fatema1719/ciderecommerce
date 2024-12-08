
let mainPage = document.querySelector(".mainPage");
let shopSection = document.querySelector(".Cider");
let blogsSection = document.querySelector(".blogContent");
let aboutSection = document.querySelector(".about");
let contactSection = document.querySelector(".contact");

console.log(mainPage, shopSection, blogsSection, aboutSection, contactSection);

// Navigation functions
function homes() {
    // Display only the home page
    mainPage.style.display = "flex";
    shopSection.style.display = "none";
    blogsSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";

    updateNavColors("home");
}

function shops() {
    
    mainPage.style.display = "none";
    shopSection.style.display = "block";
    blogsSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";

    updateNavColors("shop");
}

function blogs() {
    mainPage.style.display = "none";
    shopSection.style.display = "none";
    blogsSection.style.display = "block"; // Show only the blog section
    aboutSection.style.display = "none";
    contactSection.style.display = "none";

    updateNavColors("blog");
}

function abouts() {
    // Display only the about section
    mainPage.style.display = "none";
    shopSection.style.display = "none";
    blogsSection.style.display = "none";
    aboutSection.style.display = "block";
    contactSection.style.display = "none";

    updateNavColors("about");
}

function contacts() {
   
    mainPage.style.display = "none";
    shopSection.style.display = "none";
    blogsSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "block";

    updateNavColors("contact");
}

function updateNavColors(active) {
    
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";

    document.getElementById(active).style.color = "rgb(2, 173, 173)";
}


homes();