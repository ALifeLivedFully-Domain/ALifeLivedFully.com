(() => {
  // <stdin>
  console.log("Hello world! This site was generated using Hugo by alifelivedfully.com");
  var primaryNav = document.querySelector(".primary-navigation");
  var navToggle = document.querySelector(".mobile-nav-toggle");
  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    console.log(visibility);
  });
})();
