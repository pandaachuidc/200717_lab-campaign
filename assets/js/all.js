"use strict";

var zoomInLightBtn = document.querySelector(".zoomInLightBtn");
var zoomInLight = document.querySelector(".zoomInLight");
zoomInLightBtn.addEventListener("click", function () {
  zoomInLight.style.display = "block";
  zoomInLight.classList.add("active");
  setTimeout(function () {
    gotoStep1Page();
  }, 1000);
});

var gotoStep1Page = function gotoStep1Page() {
  window.location.href = "step1.html";
};
//# sourceMappingURL=all.js.map
