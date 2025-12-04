

// document.addEventListener("DOMContentLoaded", function () {
//   const menuButton = document.querySelector(".header__btn-menu");
//   const headerMenu = document.querySelector(".header__menu");

  
//   function toggleMenu() {
//     menuButton.classList.toggle("active");
//     if (headerMenu.classList.contains("active")) {
//       headerMenu.classList.remove("active");
//     } else {
//       headerMenu.classList.add("active");
//     }
//   }

//     menuButton.addEventListener("click", toggleMenu);

  
//   window.addEventListener("load", function () {
//     if (window.innerWidth < 1108) {
//       document.addEventListener("mouseup", function (event) {
//         if (
//           !headerMenu.contains(event.target) && 
//           !menuButton.contains(event.target) 
//         ) {
//           menuButton.classList.remove("active");
//           headerMenu.classList.remove("active"); 
//         }
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header__btn-menu");
  const headerMenu = document.querySelector(".header__menu");

  function toggleMenu() {
    const isActive = headerMenu.classList.toggle("active");
    menuButton.classList.toggle("active");

    // Блокировка/разблокировка прокрутки
    document.body.classList.toggle("no-scroll", isActive);
    document.documentElement.classList.toggle("no-scroll", isActive);
  }

  menuButton.addEventListener("click", toggleMenu);

  window.addEventListener("load", function () {
    if (window.innerWidth < 1108) {
      document.addEventListener("mouseup", function (event) {
        if (
          !headerMenu.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          menuButton.classList.remove("active");
          headerMenu.classList.remove("active");
          document.body.classList.remove("no-scroll");
          document.documentElement.classList.remove("no-scroll");
        }
      });
    }
  });
});
