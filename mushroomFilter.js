const cards = document.querySelectorAll(".mushroom-guide .card");
// console.log(cards)

const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultsMessaage = document.querySelector(".no-matches")

// console.log(seasonalFilter, edibleFilter)

const currentFilters = {
  season: "all",
  edible: "all",
};

// seasonalFilter.addEventListener("change", (event) => {
//     //console.log(event.target.value)
//     currentFilters.season =  event.target.value;
//     //console.log(currentFilters)
// })

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  //console.log(e.target.name)
  currentFilters[filterType] = e.target.value;

  //console.log(currentFilters)
  filterCards();
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach(card => {
    //console.log(card)
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    //console.log(season, edible)
    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    if ((matchesEdible || currentFilters.edible === "all") && (matchesSeason || currentFilters.season === "all")) {
      card.hidden = false;
      hasVisibleCards = true
    } else {
      card.hidden = true;
    }
    if (hasVisibleCards) {
      noResultsMessaage.hidden = true;
    } else {
      noResultsMessaage.hidden = false
    }
    
  });
}
