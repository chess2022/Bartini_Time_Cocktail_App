// Top nav bar menu
// var menuLinks = [
//   { text: "home", href: "#top-menu" },
//   { text: "search", href: "#search" },
//   { text: "suprise me", href: "#random"},
// ];

// let topMenuEl = document.querySelector("#top-menu");

// for (let links of menuLinks) {
//   let link = document.createElement("a");
//   link.textContent = links.text;
//   link.setAttribute("href", links.href);
//   topMenuEl.appendChild(link);
// }

// topMenuEl.style.height = "100%";
// topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// topMenuEl.classList.add("flex-right");


// variables needed for rest of code

const $input = $("input");
const $button = $("button");
const $aside = $("aside");
const APIKEY = "9973533";

// FILTER BY MULTI-INGREDIENT

$button.on("click", () => {
  // clear the input box
  // $input.val("");

  // get the text the user types
  let searchTerm = $input.val();

  $.ajax(
    `https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${searchTerm}&appid=${APIKEY}`
  ).then((data) => {
    // make grid for the results to populate in
    for (let i = 0; i < data.drinks.length; i++) {
      const container = document.getElementById("results");
      let img = document.createElement("img");
      let title = document.createElement("h3");
      let cell = document.createElement("div");
      container.append(cell);
      img.src = `${data.drinks[i].strDrinkThumb}`;
      title.textContent = `${data.drinks[i].strDrink}`;
      cell.id = `${data.drinks[i].idDrink}`;
      cell.append(img, title);
      // make sure searchResults come into view
      const searchResults = document.getElementById("results");
      searchResults.scrollIntoView();

      // Make recipe in new div when a drink selection is made

      const $drink = $(cell);

      $drink.on("click", () => {
        $.ajax(
          `https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${cell.id}&appid=${APIKEY}`
        ).then((recipe) => {
          console.log(recipe);
          // make sure the recipe is in view when a drink is selected
          const recipeResults = document.getElementById("search");
          recipeResults.scrollIntoView();

          const recipeContainer = document.getElementById("recipe");
          let bigImg = document.createElement("img");
          let recipeTitle = document.createElement("h3");
          // add 2 divs (sections) to the recipe container
          let recipeCell = document.createElement("div");
          let recipeCell2 = document.createElement("div");
          let recipeCell3 = document.createElement("div");
          recipeContainer.append(recipeCell, recipeCell2, recipeCell3);
          bigImg.src = `${recipe.drinks[0].strDrinkThumb}`;
          recipeTitle.textContent = `${recipe.drinks[0].strDrink}`;
          //places the image and title in first div:
          recipeCell.append(bigImg, recipeTitle);

          let instructions = document.createElement("p");
          let ingredientItems = [
            `${recipe.drinks[0].strIngredient1}`,
            `${recipe.drinks[0].strIngredient2}`,
            `${recipe.drinks[0].strIngredient3}`,
            `${recipe.drinks[0].strIngredient4}`,
            `${recipe.drinks[0].strIngredient5}`,
            `${recipe.drinks[0].strIngredient6}`,
            `${recipe.drinks[0].strIngredient7}`,
            `${recipe.drinks[0].strIngredient8}`,
            `${recipe.drinks[0].strIngredient9}`,
            `${recipe.drinks[0].strIngredient10}`,
            `${recipe.drinks[0].strIngredient11}`,
            `${recipe.drinks[0].strIngredient12}`,
            `${recipe.drinks[0].strIngredient13}`,
            `${recipe.drinks[0].strIngredient14}`,
            `${recipe.drinks[0].strIngredient15}`,
          ];

          let ingredientMeasurements = [
            `${recipe.drinks[0].strMeasure1}`,
            `${recipe.drinks[0].strMeasure2}`,
            `${recipe.drinks[0].strMeasure3}`,
            `${recipe.drinks[0].strMeasure4}`,
            `${recipe.drinks[0].strMeasure5}`,
            `${recipe.drinks[0].strMeasure6}`,
            `${recipe.drinks[0].strMeasure7}`,
            `${recipe.drinks[0].strMeasure8}`,
            `${recipe.drinks[0].strMeasure9}`,
            `${recipe.drinks[0].strMeasure10}`,
            `${recipe.drinks[0].strMeasure11}`,
            `${recipe.drinks[0].strMeasure12}`,
            `${recipe.drinks[0].strMeasure13}`,
            `${recipe.drinks[0].strMeasure14}`,
            `${recipe.drinks[0].strMeasure15}`,
          ];
          
          let ingredients = document.createElement("ul");
          for (let x = 0; x < ingredientItems.length; x++) {
            if (!ingredientItems[x].includes("null")) {
              let item = document.createElement("li");
              item.textContent = ingredientItems[x];
              ingredients.appendChild(item);
            }
          }

          let measurements = document.createElement("ul");
          measurements.setAttribute("style", "list-style-type:none")
          // measurements.setAttribute("style", "padding: 0");
          // measurements.setAttribute("style", "margin: 0");

          for (let y = 0; y < ingredientMeasurements.length; y++) {
            if (!ingredientMeasurements[y].includes("null")) {
              let measure = document.createElement("li");
              measure.textContent = ingredientMeasurements[y];
              measurements.appendChild(measure);
            }
          }

          instructions.innerText = `${recipe.drinks[0].strInstructions}`;
          //places ingredients and instructions in second and third divs:
          recipeCell2.append(ingredients, instructions);
          recipeCell3.append(measurements);
        });
      });
    }
  });
});

// clear results from last search when button is clicked
const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
  // $("#data").remove();
  // let data = document.createElement("div");
  // document.append(data)
  // let recipe = document.createElement("div")
  // data.append(recipe)
  // let results = document.createElement("div");
  // data.append(results);
};

refreshButton.addEventListener("click", refreshPage);



// $(document).ready(function(){

//     // Set cache = false for all jquery ajax requests.
//     $.ajaxSetup({
//         cache: false,
//     });

// })



// $button.on("click", () => {
//   // clear the input
//   searchResults.jqGrid("GridUnload")
// })

      // container.refresh();


// function reload() {
//   reload = location.reload();
// }
// reload(), 


// !! this api call for random list works! Add feature to later iterations
// $button.on("click", () => {
//   $.ajax(
//     `https://www.thecocktaildb.com/api/json/v2/${APIKEY}/randomselection.php`
//   ).then((data) => {
//     console.log(data);
//   });
// });

