const entities = [
  {
    city: "Rostov-on-Don",
    locationName: "LCD admiral",
    area: "81 m2",
    repairTime: "3.5 months",
    img: "./img/comleted-projects__admiral.jpeg",
  },

  {
    city: "Sochi",
    locationName: "Thieves",
    area: "105 m2",
    repairTime: "4 months",
    img: "./img/comleted-projects__thieves.jpeg",
  },

  {
    city: "Rostov-on-Don",
    locationName: "Patriotic",
    area: "93 m2",
    repairTime: "3 months",
    img: "./img/comleted-projects__patriotic.jpeg",
  },
];

const city = document.querySelector(".completed-projects__description_city");
const locationName = document.querySelector(".completed-projects__description_name");
const area = document.querySelector(".completed-projects__description_area");
const repairTime = document.querySelector(".completed-projects__description_repair-time");
const img = document.querySelector(".completed-projects__photo");
const sliderDoted = Array.from(document.getElementsByClassName("completed-projects__slider_item"));
const sliderNamed = Array.from(document.getElementsByClassName("completed-projects__locations_item"));

const setEntity = (index) => {
  city.innerText = entities[index].city;
  locationName.innerText = entities[index].locationName;
  area.innerText = entities[index].area;
  repairTime.innerText = entities[index].repairTime;
  img.style.backgroundImage = `url(${entities[index].img})`;

  sliderDoted.forEach((element) => {
    element.setAttribute("class", "completed-projects__slider_item");
  });
  sliderDoted[index].setAttribute("class", "completed-projects__slider_item active");

  sliderNamed.forEach((element) => {
    element.setAttribute("class", "completed-projects__locations_item");
  });
  sliderNamed[index].setAttribute("class", "completed-projects__locations_item active");
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicatorDoted = Array.from(document.getElementsByClassName("completed-projects__slider_item"));
const indicatorNamed = Array.from(document.getElementsByClassName("completed-projects__locations_item"));
let currentIndex = 0;

// Обработчики нажатия кнопок управления слайдером
prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = entities.length - 1;
  }
  setEntity(currentIndex);
  console.log("currentIndex: " + currentIndex);
});

next.addEventListener("click", () => {
  if (currentIndex < entities.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  setEntity(currentIndex);
  console.log("currentIndex: " + currentIndex);
});

for (let i = 0; i < indicatorDoted.length; i++) {
  indicatorDoted[i].addEventListener("click", blindClick(i));
}

for (let i = 0; i < indicatorNamed.length; i++) {
  indicatorNamed[i].addEventListener("click", blindClick(i));
}

function blindClick(i) {
  return function () {
    console.log(i);
    currentIndex = i;
  };
}
