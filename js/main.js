// HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchSpanEl = searchEl.querySelector("span");
let isSearchInputFocused = false;

searchSpanEl.addEventListener("click", function () {
  if (!isSearchInputFocused) {
    searchInputEl.focus();
    isSearchInputFocused = true;
  } else {
    searchInputEl.blur();
    isSearchInputFocused = false;
  }
});
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner-left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  touchRatio: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const playPauseDiv = document.querySelector(".start-stop");

function playPagination() {
  if (playBtn.classList.contains("hidden")) {
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
    swiperPromotion.autoplay.stop();
  } else {
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    swiperPromotion.autoplay.start();
  }
}

playPauseDiv.addEventListener("click", playPagination);

// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

function changeToggleBtn() {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("rotated");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("rotated");
  }
}

promotionToggleBtn.addEventListener("click", changeToggleBtn);

// Animation
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// Scroll
// Elsalvador
// 현재 스크롤 위치에 따라 animate 클래스를 넣어 animation 효과를 주는 함수
function showItemIfScroll() {
  if (window.scrollY > 60) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }

  if (window.scrollY > 600) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 1000) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 2000) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if (window.scrollY > 2300) {
    const findStoreSection = document.querySelector(".find-store");
    findStoreSection.classList.add("animate");
  }
}

window.addEventListener("scroll", showItemIfScroll)