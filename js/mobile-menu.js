(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const headerRef = document.querySelector("[data-header]");
  const bodyEl = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    

    mobileMenuRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    bodyEl.classList.toggle("is-open");
  });
})();