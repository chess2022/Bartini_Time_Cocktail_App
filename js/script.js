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
  //console.log(link);

  topMenuEl.appendChild(link);

  //console.log(topMenuEl);
}

// console.log(topMenuEl);

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
  
  // get the text the user types
  let searchTerm = $input.val();


  $.ajax(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${searchTerm}&appid=${APIKEY}`
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
          // clear input box

          // Make recipe in new div when a drink selection is made

          const $drink = $(cell);

          $drink.on("click", () => {
            $.ajax(
              `https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${cell.id}&appid=${APIKEY}`
            ).then((recipe) => {
              // console.log(recipe);
              // make sure the recipe is in view when a drink is selected
              const recipeResults = document.getElementById("search");
              recipeResults.scrollIntoView();

              const recipeContainer = document.getElementById("recipe");
              let bigImg = document.createElement("img");
              let recipeTitle = document.createElement("h3");
              // add 2 divs (sections) to the recipe container
              let recipeCell = document.createElement("div");
              let recipeCell2 = document.createElement("div");
              recipeContainer.append(recipeCell, recipeCell2);
              bigImg.src = `${recipe.drinks[0].strDrinkThumb}`;
              recipeTitle.textContent = `${recipe.drinks[0].strDrink}`;
              //places the image and title in first div:
              recipeCell.append(bigImg, recipeTitle);

              let instructions = document.createElement("p");
              let ingredientItems = [
                `${recipe.drinks[0].strIngredient1}: ${recipe.drinks[0].strMeasure1}`,
                `${recipe.drinks[0].strIngredient2}: ${recipe.drinks[0].strMeasure2}`,
                `${recipe.drinks[0].strIngredient3}: ${recipe.drinks[0].strMeasure3}`,
                `${recipe.drinks[0].strIngredient4}: ${recipe.drinks[0].strMeasure4}`,
                `${recipe.drinks[0].strIngredient5}: ${recipe.drinks[0].strMeasure5}`,
                `${recipe.drinks[0].strIngredient6}: ${recipe.drinks[0].strMeasure6}`,
                `${recipe.drinks[0].strIngredient7}: ${recipe.drinks[0].strMeasure7}`,
                `${recipe.drinks[0].strIngredient8}: ${recipe.drinks[0].strMeasure8}`,
                `${recipe.drinks[0].strIngredient9}: ${recipe.drinks[0].strMeasure9}`,
                `${recipe.drinks[0].strIngredient10}: ${recipe.drinks[0].strMeasure10}`,
                `${recipe.drinks[0].strIngredient11}: ${recipe.drinks[0].strMeasure11}`,
                `${recipe.drinks[0].strIngredient12}: ${recipe.drinks[0].strMeasure12}`,
                `${recipe.drinks[0].strIngredient13}: ${recipe.drinks[0].strMeasure13}`,
                `${recipe.drinks[0].strIngredient14}: ${recipe.drinks[0].strMeasure14}`,
                `${recipe.drinks[0].strIngredient15}: ${recipe.drinks[0].strMeasure15}`,
              ];
              let ingredientList = document.createElement("ul");
              for (let x = 0; x < ingredientItems.length; x++) {
                if (!ingredientItems[x].includes("null")) {
                  let item = document.createElement("li");
                  item.textContent = ingredientItems[x];
                  ingredientList.appendChild(item);
                }
              }

              instructions.innerText = `${recipe.drinks[0].strInstructions}`;
              //places ingredients and instructions in second div:
              recipeCell2.append(`Ingredients:`, ingredientList, instructions);
            });
          });
        }
  })

})



// !!NEED TO: clear search box after button is pushed & clear results from last search when new search is initiated

