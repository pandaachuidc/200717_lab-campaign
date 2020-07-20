let zoomInLightBtn = document.querySelector(".zoomInLightBtn");
let zoomInLight = document.querySelector(".zoomInLight");

zoomInLightBtn.addEventListener("click", function () {
  zoomInLight.style.display = "block";
  zoomInLight.classList.add("active");
  setTimeout(function () {
    gotoStep1Page();
  }, 1000);
});


var gotoStep1Page = function () {
  window.location.href="step1.html";
};
