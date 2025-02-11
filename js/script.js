"use strict";
let swiper;
function initSwiper() {
  if (window.innerWidth < 540) {
    swiper = new Swiper(".mySwiper", {
      cssMode: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });
  }
}
function destroySwiper() {
  if (swiper && window.innerWidth >= 540) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();
window.addEventListener("resize", () => {
  initSwiper();
  destroySwiper();
});

const moreImg = document.querySelector('.more-img');
document.getElementById('toggleButton').addEventListener('click', function(event) {
  event.preventDefault();  
  
const hiddenItems = document.querySelectorAll('#hidden');
if (hiddenItems[0].style.display === 'none' || hiddenItems[0].style.display === '') {
  hiddenItems.forEach(item => {
    item.style.display = 'flex';
  });
  document.getElementById('toggleButton').textContent = 'Скрыть';
  moreImg.style.transform = "rotate(180deg)"; 
} else {
  hiddenItems.forEach(item => {
    item.style.display = 'none';
  });
  document.getElementById('toggleButton').textContent = 'Показать все';
  moreImg.style.transform = "rotate(0deg)";  
}
});
const moreImg2 = document.querySelector('.more-img__2');
document.getElementById('toggleButton_2').addEventListener('click', function(event) {
  event.preventDefault();  
  
const hiddenElement = document.querySelectorAll('#hiddenElement');
if (hiddenElement[0].style.display === 'none' || hiddenElement[0].style.display === '') {
  hiddenElement.forEach(item => {
    item.style.display = 'flex';
  });
  document.getElementById('toggleButton_2').textContent = 'Скрыть';
  moreImg2.style.transform = "rotate(180deg)"; 
} else {
  hiddenElement.forEach(item => {
    item.style.display = 'none';
  });
  document.getElementById('toggleButton_2').textContent = 'Показать все';
  moreImg2.style.transform = "rotate(0deg)";  
}
});
 
