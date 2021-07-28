"use strict";
function CreationPhone(model, manufacturer, prise, color, comments, isStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.prise = prise;
  this.color = color;
  this.comments = [];
  this.isStock = isStock;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPhone(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new CreationPhone(
        `Model ${i}`,
        `panasonic`,
        getRandomInt(5000, 50000),
        `black`,
        [],
        Math.random() >= 0.5
      )
    );
  }

  return newPhones;
}
const phones = getPhone(50);
console.table(phones);

let counter = 0;
function count(phone) {
  if (phone.isStock === true) {
    counter++;
  }
}
phones.forEach(count);

console.log(counter);
const test = function () {
  return this;
};

const inStock = phones.filter(function (phone) {
  return phone.isStock === true;
});
console.table(inStock);

const prisePhone = inStock.filter(function (phone) {
  return phone.prise > 30000;
});
console.table(prisePhone);

const discountsPhone = prisePhone.map(function (elem) {
  elem.prise = elem.prise * 0.7;
  return elem;
});

console.table(discountsPhone);

const newspaper = {
  title: "Ny Post - Murzilka",
  articles: ["Main news", "Article not main", "test", "give more money"],
  showArticles() {
    this.articles.forEach((article, index) => {
      console.log(`Newspaper ${this.title} Article №${index + 1} : ${article}`);
    });
  },
};
console.log(newspaper.showArticles());
