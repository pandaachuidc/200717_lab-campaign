"use strict";

// Animation
gsap.to("#square", {
  attr: {
    x: 0
  },
  duration: 2,
  repeat: 0
});
var zoomInLightBtn = document.querySelector(".zoomInLightBtn");
var zoomInLight = document.querySelector(".zoomInLight");
zoomInLightBtn.addEventListener("click", function () {
  zoomInLight.style.display = "block";
  zoomInLight.classList.add("a-zoomInLightShow");
  setTimeout(function () {
    gotoStep1Page();
  }, 1000);
});

var gotoStep1Page = function gotoStep1Page() {
  window.location.href = "step1.html";
}; // slick


$(document).ready(function () {
  $(".sliderMain").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    onAfterChange: function onAfterChange() {
      player.stopVideo();
    }
  });
  var video = $(".sliderMain .slick-active").find("video").get(0).play();
  $(".sliderMain").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".sliderMain .slick-slide").find("video").get(0).pause();
    var video = $(".sliderMain .slick-active").find("video").get(0).play();
  });
});
//# sourceMappingURL=all.js.map
