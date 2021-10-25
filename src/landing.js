import pageSwitch from './index';
import LandingImage from './background.jpg';

function landing(){
  const content = document.querySelector("#content");

  const landingDiv = document.createElement("div");
  landingDiv.className="landing";
  content.appendChild(landingDiv);

  const landingImage = new Image();
  landingImage.className+="landingImage";
  landingImage.src = LandingImage;
  content.appendChild(landingImage);

  const description = document.createElement("article");
  description.innerText = "Eat, sleep, repeat! This is our philosophy. Please select from the menu or contact us!";
  landingDiv.appendChild(description);

  pageSwitch();
}

export default landing;
