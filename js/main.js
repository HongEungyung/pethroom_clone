window.onload = function () {
  // 상단 노란색 바 상하 슬라이드
  var swiper = new Swiper(".yellow-bar", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    direction: "vertical",
  });

  // 상품 아이템 좌우 슬라이드
  const itemSwiper = new Swiper(".itemSwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1.5,
    // 첫 화면에 이미지 몇 개 보여줄래
    spaceBetween:10,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
};
