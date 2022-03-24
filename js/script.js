// Top nav bar menu
var menuLinks = [
  { text: "home", href: "#top-menu" },
  { text: "search", href: "#search" },
  { text: "suprise me", href: "#random"},
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

// variables needed for rest of code

const $input = $("input");
const $button = $("button");
const $aside = $("aside");
const APIKEY = "9973533";

// Get random list of 10 cocktails
// const $suprise = $("menuLinks[2].text") doesn't work - need to think of solution

// !! this api call for random list works!
// $button.on("click", () => {
//   $.ajax(
//     `https://www.thecocktaildb.com/api/json/v2/${APIKEY}/randomselection.php`
//   ).then((data) => {
//     console.log(data);
//   });
// });


// FILTER BY MULTI-INGREDIENT

// put click event on the button

$button.on("click", () => {
  get the text the user types
  const searchTerm = $input.val();

  $.ajax(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${searchTerm}&appid=${APIKEY}`
      ).then((data) => {
      console.log(data);  
  })
});



// www.thecocktaildb.com/api/json/v2/1/filter.php?i=Dry_Vermouth,Gin,Anis
