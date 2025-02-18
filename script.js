let navbar = document.getElementById("navbar");
let linksbar = document.getElementById("conteinernav");
let logoContainer = document.getElementById("conteinerlogo_fixed");
let nomeSiteContainer = document.getElementById("conteinernomeSite");
let links = Array.from(document.getElementsByClassName("linksa"));
let navbarOffset = navbar.offsetTop;

let fixedContainer = null;
let fixedContainer_ = null;
let logoAdded = false;
let nomeSiteAdded = false;

window.addEventListener("scroll", function () {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add("fixed");
        linksbar.classList.add("linksbarheight");

        if (!fixedContainer) {
            fixedContainer = document.createElement("div");
            fixedContainer_ = document.createElement("div");
        
            fixedContainer.id = "conteinerlinksa";
            fixedContainer.appendChild(fixedContainer_);
        
            links.forEach(link => fixedContainer_.appendChild(link));
            linksbar.appendChild(fixedContainer);
        
            linksbar.style.position = "relative";
            fixedContainer.style.position = "absolute";
            fixedContainer.style.top = "60px";
            fixedContainer.style.left = "0";
            fixedContainer.style.width = "100%";
            fixedContainer.style.height = "auto";
        
            fixedContainer_.style.display = "flex";
            fixedContainer_.style.flexGrow = "1";
            fixedContainer_.style.alignItems = "center";
            fixedContainer_.style.justifyContent = "space-evenly";
            fixedContainer_.style.height = "100%";
        }

        if (!logoAdded) {
            let logoNomeContainer = document.createElement("div");
            logoNomeContainer.id = "logoNomeContainer";
        
            let logo = document.createElement("img");
            logo.src = "IMAGENS/Logo_Oficial.png";
            logo.id = "logoFixed"; 
            logo.style.height = "50px";
        
            let nomeSite = document.createElement("h1");
            nomeSite.innerText = "Byte News";
            nomeSite.id = "nomeSiteFixed";
        
            logoNomeContainer.appendChild(logo);
            logoNomeContainer.appendChild(nomeSite);
            linksbar.prepend(logoNomeContainer);
        
            logoNomeContainer.style.display = "flex";
            logoNomeContainer.style.alignItems = "center";
            logoNomeContainer.style.gap = "8px";
            logoNomeContainer.style.position = "absolute";
            logoNomeContainer.style.left = "15px";
            logoNomeContainer.style.top = "5px";
            logoNomeContainer.style.height = "50px";
        
            nomeSite.style.fontSize = "30px";
            nomeSite.style.fontFamily = "jersey";
            nomeSite.style.color = "white";
            
            logoAdded = true;
        }
    } else {
        navbar.classList.remove("fixed");
        linksbar.classList.remove("linksbarheight");

        let logoNomeContainer = document.getElementById("logoNomeContainer");
        if (fixedContainer){
            links.forEach(link => linksbar.appendChild(link));
            fixedContainer.remove();
            fixedContainer = null;
        }
        if (logoNomeContainer) {
            logoNomeContainer.remove();
            logoAdded = false; 
        }
    }
});