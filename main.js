var img = document.querySelector("#image");
var close = document.querySelector("#close-button");
var button360 = document.querySelector("#button");

console.log(img);

function active3DModel() {
  img.setAttribute("src", "./assets/3dmodel.gif");
  close.classList.add("active");
  button360.classList.remove("active");
}

function close3DModel() {
  img.setAttribute("src", "./assets/product.png");
  close.classList.remove("active");
  button360.classList.add("active");
  }

