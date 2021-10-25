import pageSwitch from './index';
import Location from './location.png'

function contact(){
  const content = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.className+="contact";
  content.appendChild(contactDiv);

  const mobileNumber = document.createElement("article");
  mobileNumber.innerText = "+3682837261111222";
  contactDiv.appendChild(mobileNumber);

  const mail = document.createElement("article");
  mail.innerText = "pizzamissima@pizzamissima.net";
  contactDiv.appendChild(mail);

  const description = document.createElement("article");
  description.innerText="Túrkeve Napoleon Boulevard 69. (Hungary)";
  contactDiv.appendChild(description)

  const locationImage = new Image();
  locationImage.className+="locationImage";
  locationImage.src = Location;
  content.appendChild(locationImage);

  pageSwitch();
}

export default contact;
