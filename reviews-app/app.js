// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentPerson = 0;
window.addEventListener("DOMContentLoaded", function () {
  //console.log("Content Loaded!");
  getPerson(currentPerson);
});

function getPerson(person) {
  const personItem = reviews[person];
  img.src = personItem.img;
  author.textContent = personItem.name;
  job.textContent = personItem.job;
  info.textContent = personItem.text;
}

// next button activity
nextBtn.addEventListener("click", function () {
  currentPerson++;
  if (currentPerson > reviews.length - 1) currentPerson = 0;
  getPerson(currentPerson);
});

// prev button activity
prevBtn.addEventListener("click", function () {
  currentPerson--;
  if (currentPerson < 0) currentPerson = reviews.length - 1;
  getPerson(currentPerson);
});

// random button activity
randomBtn.addEventListener("click", function () {
  currentPerson = Math.floor(Math.random() * reviews.length);
  //console.log(currentPerson);
  getPerson(currentPerson);
});
