(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[block-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("area-expanded") === "two" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("area-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();