const style = document.createElement('style');
style.textContent = `
  @media (min-width: 1200px) {
    .content__inner {
      margin: auto 0px ${(document.querySelector('.content').offsetHeight - document.querySelector('.content__inner').offsetHeight + document.querySelector('.header__inner').offsetHeight) / 2}px;
    }
  }
`;
document.head.appendChild(style);