// test api: https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=Dry_Vermouth,Gin,Anis


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
          // cell.innerHTML = `<a class="btn" class="box" onclick="pop()"></a>`
          cell.append(img, title);

          const $drink = $(cell);

          $drink.on("click", () => {
            $.ajax(
              `https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${cell.id}&appid=${APIKEY}`
            ).then((recipe) => {

              console.log(recipe)
              // make grid for the results to populate in
              // for (let i = 0; i < recipe.drinks.length; i++) {
              const recipeContainer = document.getElementById("recipe");
              let bigImg = document.createElement("img");
              let recipeTitle = document.createElement("h3");
              let recipeCell = document.createElement("div");
              let recipeCell2 = document.createElement("div");
              recipeContainer.append(recipeCell, recipeCell2);
              bigImg.src = `${recipe.drinks[0].strDrinkThumb}`;
              recipeTitle.textContent = `${recipe.drinks[0].strDrink}`;
              recipeCell.append(bigImg, recipeTitle);
              let ingredients = document.createElement("ul");
              let instructions = document.createElement("p");
              ingredients.li = `${recipe.drinks[0].strIngredient1} + ${recipe.drinks[0].strMeasure1}`;
              instructions.textContent = `${recipe.drinks[0].strInstructions}`;
              recipeCell2.append(ingredients, p);
            });
          });
        }
})

})


 // www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${cell.id}&appid=${APIKEY}




// !!NEED TO: clear search box after button is pushed & clear results from last search when new search is initiated

        // testing out floating window

          // cell.innerHTML = `<a class="btn" class="box" onclick="pop()"></a>`


        // var modal = null;
        // function pop() {
        //   if (modal === null) {
        //     document.container.cell.style.display = "block";
        //     modal = true;
        //   } else {
        //     document.container.cell.style.display = "none";
        //     modal = null;
        //   }
        // }

        // another method to test:

        // $(function () {
        //   $(document.container.img).on("click", function () {
        //     $("#recipe-panel").addClass("PanelFloat");
        //   });
        //   $(document.container.cell).on("click", function () {
        //     $("#recipe-panel").removeClass("PanelFloat");
        //   });

        // console.log(data);
        // console.log(data.drinks);
        // });
