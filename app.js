let title2 = document.querySelector("title");
let header2 = document.querySelector("header");
let paragraph = document.querySelector("p");
let paragraph2 = document.querySelectorAll("p")[0];
let estructura = document.getElementsByClassName("estructura");
let lista = document.getElementsByClassName("list");
// let items = document.getElementsByClassName("item");

const items = document.querySelectorAll("ul.list > li.item");
const padre = document.querySelector("ul");
const palabra = document.getElementById("documento");
const palabra2 = document.getElementById("documento");
const btn = document.getElementById("btn");

console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.header);
console.log(title2);
console.log(header2);
console.log(paragraph);
console.log(paragraph2);
console.log(estructura);
console.log(lista);
console.log(items);
console.log(padre.children[0]); //firstElementChild
console.log(padre.children[1]);
console.log(padre.children[2]); //lastElementChild
console.log(padre.parentElement);
console.log(palabra);
console.clear();
palabra.innerHTML = "¿Qué es el DOM?";
// console.log(palabra);
palabra2.innerHTML = "Qué es una API?";
// console.log(palabra2);
// document.body.style.background = "#000";
// console.log(items[1].childNodes);

// document.body.className = "bg";

btn.onclick = function () {
  // console.log(document.body);

  // console.log(document.body.className === "bg");

  // if (document.body.className === "bg") {
  //   document.body.className = "";
  // } else {
  //   document.body.className = "bg";
  // }

  document.body.classList.toggle("bg");

  // body.className = "bg";
};

// btn.onclick(btnColor);

// const form = document.getElementById("card");

// console.log(form);
