function menuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
}

function mouse() {
  var elem = document.querySelectorAll(".elem");
  var dynamic = document.querySelector(".dynamic-image");
  elem.forEach((e) => {
    e.addEventListener("mouseover", function () {
      dynamic.style.display = "block";
      
      var image = e.getAttribute("data-image")

      dynamic.style.backgroundImage = `url(${image})`;
    });
    e.addEventListener("mouseout", function () {
      dynamic.style.display = "none";
    });
  });
}

mouse();
menuToggle();
