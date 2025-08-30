document.addEventListener("astro:page-load", () => {
  document.querySelector(".menu")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });
});
