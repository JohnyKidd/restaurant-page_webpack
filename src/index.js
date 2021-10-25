import './style.css';
import landing from './landing';
import contact from './contact';
import LandingImage from './background.jpg';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function init(){
  const content = document.querySelector("#content");

  const landingDiv = document.createElement("div");
  landingDiv.className="landing";
  content.appendChild(landingDiv);

  const landingImage = new Image();
  landingImage.className+="landingImage";
  landingImage.src = LandingImage;
  content.appendChild(landingImage);

  const description = document.createElement("article");
  description.innerText = "Eat, sleep, repeat! This is our philosophy. Please select from the menu tab or contact us!";
  landingDiv.appendChild(description);
}

function createHeader(){
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.className = "header";
  content.appendChild(header);

  const homeMenu = document.createElement("p");
  homeMenu.innerText = "Home";
  homeMenu.id = "homeMenu";
  header.appendChild(homeMenu);

  const menuMenu = document.createElement("p");
  menuMenu.innerText = "Menu";
  menuMenu.id = "menuMenu";
  header.appendChild(menuMenu);

  const aboutMenu = document.createElement("p");
  aboutMenu.innerText = "Contact";
  aboutMenu.id = "aboutMenu";
  header.appendChild(aboutMenu);
}

function createFooter(){

  const content = document.querySelector("#content");

  const footer = document.createElement("div");
  footer.className+="footer";

  const creator = document.createElement("p");
  creator.innerText = "Created by Tibor Enyedi";
  footer.appendChild(creator);

  const copyright = document.createElement("p");
  copyright.innerText="As part of the Odin Project ©";
  footer.appendChild(copyright);

  content.appendChild(footer);
}

function pageSwitch(){

  homeMenu.addEventListener("click", function(e){
  content = document.querySelector("#content");
  removeAllChildNodes(content);

  createHeader();
  landing();
  createFooter();
 });

  aboutMenu.addEventListener("click", function(e){
  content = document.querySelector("#content");
  removeAllChildNodes(content);

  createHeader();
  contact();
  createFooter();
  });

}


createHeader();
init();
createFooter();
pageSwitch();

export default pageSwitch
