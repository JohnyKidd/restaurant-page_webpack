import pageSwitch from './index';
import Pizza from './pizza.png';
import CaliforniaPizza from './california.png';
import AllinPizza from './allin.png';
import HungarianPizza from './hugarianpizza.png'

function menu(){
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className="container";
  content.appendChild(container);

  const classicoDiv = document.createElement("div");
  classicoDiv.className+="pizza";
  container.appendChild(classicoDiv);

  const classicoImage = new Image();
  classicoImage.src=Pizza;
  classicoImage.className="pizzaImages";
  classicoDiv.appendChild(classicoImage);

  const classicoName = document.createElement("article");
  classicoName.innerText="Pizza con olive";
  classicoDiv.appendChild(classicoName);

  const classicoCart = document.createElement("button");
  classicoCart.className="cartButtons";
  classicoCart.innerText="Add to cart";
  classicoDiv.appendChild(classicoCart);

  const hunDiv = document.createElement("div");
  hunDiv.className+="pizza";
  container.appendChild(hunDiv);

  const hunImage = new Image();
  hunImage.src=HungarianPizza;
  hunImage.className="pizzaImages";
  hunDiv.appendChild(hunImage);

  const hunName = document.createElement("article");
  hunName.innerText="Pizza ungherese";
  hunDiv.appendChild(hunName);

  const hunCart = document.createElement("button");
  hunCart.className="cartButtons";
  hunCart.innerText="Add to cart";
  hunDiv.appendChild(hunCart);

  const californiaDiv = document.createElement("div");
  californiaDiv.className+="pizza";
  container.appendChild(californiaDiv);

  const californiaImage = new Image();
  californiaImage.src=CaliforniaPizza;
  californiaImage.className="pizzaImages";
  californiaDiv.appendChild(californiaImage);

  const californiaName = document.createElement("article");
  californiaName.innerText="Pizza californiana";
  californiaDiv.appendChild(californiaName);

  const californiaCart = document.createElement("button");
  californiaCart.className="cartButtons";
  californiaCart.innerText="Add to cart";
  californiaDiv.appendChild(californiaCart);

  const allinDiv = document.createElement("div");
  allinDiv.className+="pizza";
  container.appendChild(allinDiv);

  const allinImage = new Image();
  allinImage.src=AllinPizza;
  allinImage.className="pizzaImages";
  allinDiv.appendChild(allinImage);

  const allinName = document.createElement("article");
  allinName.innerText="Tutto sulla pizza";
  allinDiv.appendChild(allinName);

  const allinCart = document.createElement("button");
  allinCart.className="cartButtons";
  allinCart.innerText="Add to cart";
  allinDiv.appendChild(allinCart);

  pageSwitch();
}

export default menu;
