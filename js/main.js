// HEADER
// SEARCH
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const searchSpanEl = searchEl.querySelector('span');
let isSearchInputFocused = false;

searchSpanEl.addEventListener('click', function () {
  if (!isSearchInputFocused) {
    searchInputEl.focus();
    isSearchInputFocused = true;
  } else {
    searchInputEl.blur();
    isSearchInputFocused = false;
  }
});
searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '통합 검색');
});
searchInputEl.addEventListener('blur', function () {
  searchInputEl.setAttribute('placeholder', '');
});

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper('.notice .notice-line .inner .inner-left .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true
});

//SWIPER PROMOTION
const swiperPromotion = new Swiper('.notice .promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  touchRatio: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});

const playBtn = document.querySelector('#playBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const playPauseDiv = document.querySelector('.start-stop');

function playPagination() {
  if (playBtn.classList.contains('hidden')) {
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    swiperPromotion.autoplay.stop();
  } else {
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    swiperPromotion.autoplay.start();
  }
}

playPauseDiv.addEventListener('click', playPagination);

// Toggle Promotion
const promotionSection = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

function changeToggleBtn() {
  if (promotionSection.classList.contains('hide')) {
    promotionSection.classList.remove('hide');
    promotionToggleBtn.classList.add('rotated');
  } else {
    promotionSection.classList.add('hide');
    promotionToggleBtn.classList.remove('rotated');
  }
}

promotionToggleBtn.addEventListener('click', changeToggleBtn);

// Animation
window.onload = function () {
  const visualSection = document.querySelector('.visual');
  visualSection.classList.add('animate');
};

// Scroll Animation
const sections = [
  { selector: '.elsalvador', offset: 0.1 },
  { selector: '.ethiopia', offset: 0.3 },
  { selector: '.favorite', offset: 0.5 },
  { selector: '.magazine', offset: 0.7 },
  { selector: '.find-store', offset: 0.9 }
];

// DOM 요소를 미리 조회하여 저장
const sectionElements = sections.map(({ selector, offset }) => ({
  element: document.querySelector(selector),
  offset
}));

// 윈도우 크기 관련 값을 전역으로 관리
let windowHeight = window.innerHeight;
let documentHeight = document.documentElement.scrollHeight - windowHeight;

// 스로틀링 함수
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 윈도우 크기 업데이트 함수
function updateHeights() {
  windowHeight = window.innerHeight;
  documentHeight = document.documentElement.scrollHeight - windowHeight;
}

// 스크롤 애니메이션 함수
function showItemIfScroll() {
  sectionElements.forEach(({ element, offset }) => {
    if (element) {
      if (window.scrollY > documentHeight * offset) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    }
  });
}

// 이벤트 리스너 등록
window.addEventListener('resize', throttle(updateHeights, 100));
window.addEventListener('scroll', throttle(showItemIfScroll, 100));

// 초기 높이 설정
updateHeights();
