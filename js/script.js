// Top nav bar menu
var menuLinks = [
  { text: "home", href: "#top-menu" },
  { text: "search", href: "#search" },
  { text: "suprise me", href: "#random" },
];

let topMenuEl = document.querySelector("#top-menu");

for (let links of menuLinks) {
  let link = document.createElement("a");
  link.textContent = links.text;
  link.setAttribute("href", links.href);
  console.log(link);

  topMenuEl.appendChild(link);

  console.log(topMenuEl);
}

console.log(topMenuEl);

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-right");


// LIST OF ALL INGREDIENTS
/*
const settings = {
  async: true,
  crossDomain: true,
  url: "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
  method: "GET",
  headers: {
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": "bcea58ebc5mshb2a5ad3f780d9dep1a9ff0jsn6456bc6fdba7",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/

// FILTER BY MULTI-INGREDIENT

const $input = $("input");
const $button = $("button");
const $aside = $("aside");
const APIKEY = "9973533";
// put click event on the button

$button.on("click", () => {
  // get the text the user types
  const searchTerm = $input.val();

  $.ajax(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${searchTerm}&appid=${APIKEY}`
      ).then((data) => {
      console.log(data);  
  })
});

  // const settings = {
  //   async: true,
  //   crossDomain: true,
  //   url: `www.thecocktaildb.com/api/json/v2/1/filter.php?i=${searchTerm}`,
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  //     "x-rapidapi-key": "9973533",
  //   },
  // };

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });

// SEARCH BY INGREDIENT
// const settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin",
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
//     "x-rapidapi-key": "bcea58ebc5mshb2a5ad3f780d9dep1a9ff0jsn6456bc6fdba7",
//   },
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });


// www.thecocktaildb.com/api/json/v2/1/filter.php?i=Dry_Vermouth,Gin,Anis
