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
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // 헤더 스크롤
  const navScroll = document.querySelector(".nav-bar");
  const nav_img_box_margin = document.querySelector(".image-box");
  window.addEventListener("scroll", function () {
    navScroll.classList.add("scrolled");
    nav_img_box_margin.classList.add("nav_img_box_margin-box");
    // console.log("스크롤 y 값 :" , window.scrollY)
    // window.scrollY 는 f12 console 에서 스크롤하면 알아서 스크롤 Y값 알려줌
    if (window.scrollY > 30) {
      navScroll.classList.add("scrolled");
      nav_img_box_margin.classList.add("nav_img_box_margin");
    } else {
      navScroll.classList.remove("scrolled");
      nav_img_box_margin.classList.remove("nav_img_box_margin");
    }
  });
};
