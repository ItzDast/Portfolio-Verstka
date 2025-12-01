// const style = document.createElement('style');
// style.textContent = `
//   @media (min-width: 900px) {
//     .content__inner {
//       margin: auto 0px ${(document.querySelector('.content').offsetHeight - document.querySelector('.content__inner').offsetHeight + document.querySelector('.header__inner').offsetHeight) / 2}px;
//     }
//   }
// `;
// document.head.appendChild(style);

// сверху выравнивает по центру content__inner

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});