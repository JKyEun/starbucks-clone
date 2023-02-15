// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchSpanEl = searchEl.querySelector("span");
let isSearchInputFocused = false;

searchSpanEl.addEventListener("click", function () {
  if (isSearchInputFocused) {
    searchInputEl.blur();
    isSearchInputFocused = false;
  } else {
    searchInputEl.focus();
    isSearchInputFocused = true;
  }
});
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});
