const project01 = "./assets/img/project01.png";
const project02 = "./assets/img/project02.png";
const project03 = "./assets/img/project03.png";
const project04 = "./assets/img/project04.png";
const project05 = "./assets/img/project05.png";
const project06 = "./assets/img/project06.png";
const project07 = "./assets/img/project07.png";

let homeImage = 0;

let originalProjects = [
    { "href": "./coverme.html", "src": project01, "title": "COVER ME", "description": "painted face" },
    { "href": "./ufresh.html", "src": project02, "title": "U.PACK", "description": "packaging sustentável" },
    { "href": "./upack.html", "src": project03, "title": "U.PACK", "description": "estacionário" },
    { "href": "./cdbox.html", "src": project04, "title": "CD BOX", "description": "armazenamento" },
    { "href": "./bowling.html", "src": project05, "title": "BOWLING", "description": "font tipográfica" },
    { "href": "./upack.html", "src": project06, "title": "U.PACK", "description": "logótipo e imagem" },
    { "href": "./astrid.html", "src": project07, "title": "ASTRID", "description": "mobiliário" }
];

let projects = originalProjects;

let originalGraphicProjects = [
    { "href": "./upack.html", "src": project03, "title": "U.PACK", "description": "estacionário" },
    { "href": "./bowling.html", "src": project05, "title": "BOWLING", "description": "font tipográfica" },
    { "href": "./upack.html", "src": project06, "title": "U.PACK", "description": "logótipo e imagem" }
]

let graphicProjects = originalGraphicProjects;

let originalProductProjects = [
    { "href": "./ufresh.html", "src": project02, "title": "U.PACK", "description": "packaging sustentável" },
    { "href": "./cdbox.html", "src": project04, "title": "CD BOX", "description": "armazenamento" },
    { "href": "./astrid.html", "src": project07, "title": "ASTRID", "description": "mobiliário" }
]

let productProjects = originalProductProjects

let currentView = projects;

function openMenu() {
    document.getElementById("menu-container").style.width = "50%";
    document.getElementById("opacity-container").style.width = "50%";
}

function closeMenu() {
    document.getElementById("menu-container").style.width = "0";
    document.getElementById("opacity-container").style.width = "0";
}

function changeView(view) {
    switch (view) {
        case "GRAPHIC":
            currentView = originalGraphicProjects;
            document.getElementById('all-work').classList.remove("active");
            document.getElementById('product').classList.remove("active");
            document.getElementById('graphic').classList.add("active");
            break;
        case "PRODUCT":
            currentView = originalProductProjects;
            document.getElementById('all-work').classList.remove("active");
            document.getElementById('product').classList.add("active");
            document.getElementById('graphic').classList.remove("active");
            break;

        case "ALL_WORK":
            currentView = originalProjects;
            document.getElementById('all-work').classList.add("active");
            document.getElementById('product').classList.remove("active");
            document.getElementById('graphic').classList.add("active");
            break;

        default:
            currentView = originalProjects;
            document.getElementById('all-work').classList.add("active");
            document.getElementById('product').classList.remove("active");
            document.getElementById('graphic').classList.add("active");
            break;
    }
    document.getElementById("left-project").src = currentView[0].src;
    document.getElementById("center-project").src = currentView[1].src;
    document.getElementById("right-project").src = currentView[2].src;

    document.getElementById("left-link").href = currentView[0].href;
    document.getElementById("center-link").href = currentView[1].href;
    document.getElementById("right-link").href = currentView[2].href;

    document.getElementById("project-title").innerText = currentView[1].title;
    document.getElementById("project-description").innerText = currentView[1].description;
}

function changeRight() {

    let lastProject = currentView[currentView.length - 1];
    let updatedProjects = [currentView[currentView.length - 1]];
    for (var i = 0; i < currentView.length - 1; i++) {
        updatedProjects.push(currentView[i]);
    }
    currentView = updatedProjects;
    document.getElementById("left-project").src = currentView[0].src;
    document.getElementById("center-project").src = currentView[1].src;
    document.getElementById("right-project").src = currentView[2].src;

    document.getElementById("left-link").href = currentView[0].href;
    document.getElementById("center-link").href = currentView[1].href;
    document.getElementById("right-link").href = currentView[2].href;

    document.getElementById("project-title").innerText = currentView[1].title;
    document.getElementById("project-description").innerText = currentView[1].description;
}

function changeLeft() {

    let firstProject = currentView[0];
    let updatedProjects = [];
    for (var i = 1; i < currentView.length; i++) {
        updatedProjects.push(currentView[i]);
    }

    updatedProjects.push(firstProject);
    currentView = updatedProjects;

    document.getElementById("left-project").src = currentView[0].src;
    document.getElementById("center-project").src = currentView[1].src;
    document.getElementById("right-project").src = currentView[2].src;

    document.getElementById("left-link").href = currentView[0].href;
    document.getElementById("center-link").href = currentView[1].href;
    document.getElementById("right-link").href = currentView[2].href;

    document.getElementById("project-title").innerText = currentView[1].title;
    document.getElementById("project-description").innerText = currentView[1].description;
}

function openProject(url) {
    window.location.href = url;
}


const astrid1 = "./assets/img/astrid01.png";
const astrid2 = "./assets/img/astrid02.png";
const astrid3 = "./assets/img/astrid03.png";

astridImages = [astrid1, astrid2, astrid3];

function changeAstrid(img) {
    document.getElementById("astric-picture").src = astridImages[img];
}