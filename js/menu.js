(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBodyRef = document.querySelector('[body]');

  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    console.log(expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileBodyRef.classList.toggle('body-fixed');
  });

  // addEventListener('click', () => {
  //   if (!expanded) {
  //     menuBtnRef.classList.toggle('is-open');
  //     menuBtnRef.setAttribute('aria-expanded', !expanded);

  //     mobileMenuRef.classList.toggle('is-open');
  //     mobileBodyRef.classList.toggle('body-fixed');
  //   }
  // });
})();
