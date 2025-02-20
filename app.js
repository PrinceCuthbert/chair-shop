const scrollTosellings = document.querySelector(".sellings_button");
const sectionSellings = document.querySelector("#sellings");

scrollTosellings.addEventListener("click", function (e) {
  sectionSellings.scrollIntoView({ behavior: "smooth" });
});

const linkHover = document.querySelectorAll(".link");

linkHover.forEach(function (link) {
  // Handle hover effect
  link.addEventListener("mouseover", function () {
    link.style.backgroundColor = "#1b5b06";
  });

  // Handle mouse leave effect

  link.addEventListener("mouseleave", function () {
    link.style.backgroundColor = "";
  });

  // Handle click effect

  link.addEventListener("click", function (e) {
    e.preventDefault();
    link.style.backgroundColor = "#0b2402";
    link.style.shadow = "0 0 10px #0b2402";
  });
});
