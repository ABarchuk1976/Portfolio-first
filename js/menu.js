(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBodyRef = document.querySelector('[body]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
    // mobileBodyRef.classList.toggle('body-fixed');
  });
})();
