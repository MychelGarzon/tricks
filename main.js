const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile');
const navUl = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');
const modalButton = document.querySelector('#modalButton');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backButton.style.display = 'block';
  } else {
    backButton.style.display = 'none';
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('bg');
  } else {
    header.classList.remove('bg');
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobileMenu = () => {
  for (const item of menuItems) {
    item.addEventListener('click', mobileMenu);
  }
  if (navUl.classList.contains('responsive')) {
    navUl.classList.remove('responsive');
  } else {
    navUl.classList.add('responsive');
  }
};
const modalShow = () => {
  overlay.classList.toggle('visible');
};

backButton.addEventListener('click', getToTop);
mobButton.addEventListener('click', mobileMenu);
modalButton.addEventListener('click', modalShow);
closeButton.addEventListener('click', modalShow);
