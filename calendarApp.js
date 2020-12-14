// Global vars
const seasons = document.querySelectorAll(".season");
// console.log(seasons);
const bgs = document.querySelectorAll(".bg");
// console.log(bgs);

seasons.forEach((season) => {
  if (season.id === "Winter") {
    season.style.backgroundColor = "rgba(0,0,255,0.3)";
    season.innerHTML = "Winter";
  } else if (season.id === "Spring") {
    season.style.backgroundColor = "rgba(0,255,255,0.3)";
    season.innerHTML = "Spring";
  } else if (season.id === "Summer") {
    season.style.backgroundColor = "rgba(255,150,155,0.3)";
    season.innerHTML = "Summer";
  } else if (season.id == "Fall") {
    season.style.backgroundColor = "rgba(55,150,155,0.3)";
    season.innerHTML = "Fall";
  }

  const textAnime = document.querySelectorAll(".text-anime");

  // updateable var set on mouse over = season
  let currSeason = "";

  // --------------------------------------------------------Mouse Enter
  season.addEventListener("mouseenter", () => {
    currSeason = season.id;
    season.style.opacity = "0";
    if (season.id === `${currSeason}`) {
      bgs.forEach((bg) => {
        if (bg.classList.contains(`${currSeason}`)) {
          bg.style.filter = "none";
        }
      });
    }
    textAnime.forEach((text) => {
      text.style.display = "block";
    });
  });

  // ----------------------------------------------------------Mouse leave
  season.addEventListener("mouseleave", () => {
    currSeason = season.id;
    season.style.opacity = "0.5";
    if (season.id === `${currSeason}`) {
      bgs.forEach((bg) => {
        if (bg.classList.contains(`${currSeason}`)) {
          bg.style.filter = "blur(8px)";
        }
      });
    }
    textAnime.forEach((text) => {
      text.style.display = "none";
    });
  });
});
