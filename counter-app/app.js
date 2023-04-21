let count = 0;
const counter = document.querySelector("#value");

const btn = document.querySelectorAll(".btn");

btn.forEach(function (singleButtonItem) {
  //console.log(singleButtonItem);
  singleButtonItem.addEventListener("click", function (e) {
    //console.log(e.currentTarget.classList);

    if (e.currentTarget.classList.contains("increase")) {
      count++;
    } else if (e.currentTarget.classList.contains("decrease")) {
      count--;
    } else count = 0;

    counter.textContent = count;
    //console.log(count);
    if (count > 0) counter.style.color = "green";
    if (count < 0) counter.style.color = "red";
    if (count === 0) counter.style.color = "#222";
  });
});
