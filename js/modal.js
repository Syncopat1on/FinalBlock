"use strict";
let modalCall = document.getElementById('modalCall');
let call = document.getElementById('call');
let call2 = document.getElementById('call2');
let call3 = document.getElementById('call3');
let closeCall = document.getElementById('modalClose');
let backgruound = document.querySelector('.backgruoundAll')

let closeMenu = function() {
  menu.style.display = 'none';
}

let openCallModal = call.onclick = call2.onclick = call3.onclick = function() {
  if (modalCall.style.display === 'none'|| modalCall.style.display === '') {
    modalCall.style.display = 'block';
    backgruound.classList.add('modal-active');
    closeMenu()
  }
  else {
    modalCall.style.display = 'none';
    backgruound.classList.remove('modal-active');
}}
let closeCallModal = closeCall.onclick = function() {
  modalCall.style.display = 'none';
  backgruound.classList.remove('modal-active');
}
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      closeCallModal();
  }
});
let modalFeedback = document.getElementById('modalFeedback');
let feedback = document.getElementById('feedbackOpen');
let feedback2 = document.getElementById('feedbackOpen2');
let feedback3 = document.getElementById('feedbackOpen3');
let closeFeedback = document.getElementById('modalCloseFeedback');

let openFeedbackModal = feedback.onclick = feedback2.onclick = feedback3.onclick = function() {
  if (modalFeedback.style.display === 'none'|| modalFeedback.style.display === '') {
    modalFeedback.style.display = 'block';
    backgruound.classList.add('modal-active');
    closeMenu()
  }
  else {
    modalFeedback.style.display = 'none';
    backgruound.classList.remove('modal-active');
}}
let closeFeedbackModal = closeFeedback.onclick = function() {
  modalFeedback.style.display = 'none';
  backgruound.classList.remove('modal-active');
}
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      closeFeedbackModal();
  }
});

let menu = document.querySelector('.menu-container__modal');
let burger = document.querySelector('.burger');
let menuClose = document.getElementById('menuClose')

let openLeftMenu = burger.onclick = function() {
  if(menu.style.display === 'none'|| menu.style.display === '') {
    menu.style.display = 'block';
    backgruound.classList.add('modal-active');
  }
}
let menuCloseModal = menuClose.onclick = function() {
  menu.style.display = 'none';
  backgruound.classList.remove('modal-active');
}
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    menuCloseModal();
  }
});