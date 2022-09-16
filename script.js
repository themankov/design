const HAMBURGER = document.querySelector('.button');
const LIST = document.querySelector('.navigation-list');
HAMBURGER.addEventListener('click', () => {
  const data = LIST.getAttribute('data-visible');
  if (data === 'false') {
    LIST.setAttribute('data-visible', true);
  } else if (data === 'true') {
    LIST.setAttribute('data-visible', false);
  }
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
