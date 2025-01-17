window.onload = function () {
  var swiper = new Swiper(".yellow-bar", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    direction: "vertical",
  });
};
