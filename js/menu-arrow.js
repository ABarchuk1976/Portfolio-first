const trueCallback = function (entries, observer) {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-visible');
  });
};

const options = {
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(trueCallback, options);

const target = document.querySelector('.header');
observer.observe(target);
