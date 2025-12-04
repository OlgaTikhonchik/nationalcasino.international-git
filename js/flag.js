

// document.addEventListener("DOMContentLoaded", function () {
//   const flagButton = document.querySelector(".header__country");
//   const flagMenu = document.querySelector(".header__flag-menu");
//   const closeButton = document.querySelector(".button__close");
//   const backdrop = document.querySelector('.header__flag-backdrop');

//   let scrollY = 0;
//   let skipRestore = false;

//   function lockBodyScroll() {
//     scrollY = window.scrollY;
//     document.documentElement.classList.add("scroll-locked");
//     document.body.style.top = `-${scrollY}px`;
//   }

//   function unlockBodyScroll() {
//     document.documentElement.classList.remove("scroll-locked");
//     document.body.style.top = "";

//     // ✔ ВОССТАНАВЛИВАЕМ scrollY ТОЛЬКО если меню было открыто и закрывается
//     // if (!skipRestore) {
//     //   window.scrollTo({ top: scrollY, behavior: "instant" });
//     // }
//     if (!skipRestore && document.documentElement.classList.contains("scroll-locked")) {
//     window.scrollTo({ top: scrollY, behavior: "instant" });
//   }

//     skipRestore = false;
//   }

//   // --- КНОПКА ВВЕРХ ---
//   function scrollToTop() {
//     // запретить восстановление scrollY после закрытия меню
//     skipRestore = true;

//     // если меню было открыто — закрываем правильно
//     if (document.documentElement.classList.contains("scroll-locked")) {
//       unlockBodyScroll();
//     }

//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   // --- ПРИВЯЗКА КНОПКИ ВВЕРХ ---
//   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

//   window.addEventListener("scroll", () => {
//     scrollToTopBtn.style.display = window.scrollY > 250 ? "block" : "none";
//   });

//   scrollToTopBtn.parentElement.onclick = scrollToTop;
//   // --------------------------

//   if (!flagButton || !flagMenu || !closeButton || !backdrop) return;

//   // Открытие меню
//   flagButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     const isActive = flagMenu.classList.toggle("active");
//     flagButton.classList.toggle("active");
//     backdrop.classList.toggle("active", isActive);

//     if (isActive) lockBodyScroll();
//     else unlockBodyScroll();
//   });

//   // Закрытие крестиком
//   closeButton.addEventListener("click", function (event) {
//     event.stopPropagation();
//     flagMenu.classList.remove("active");
//     flagButton.classList.remove("active");
//     backdrop.classList.remove("active");
//     unlockBodyScroll();
//   });

//   // Закрытие по клику вне меню
//   document.addEventListener("click", function (event) {
//     if (!flagButton.contains(event.target) && !flagMenu.contains(event.target)) {
//       flagMenu.classList.remove("active");
//       flagButton.classList.remove("active");
//       backdrop.classList.remove("active");
//       unlockBodyScroll();
//     }
//   });

//   // Закрытие по клику на backdrop
//   backdrop.addEventListener("click", () => {
//     flagMenu.classList.remove("active");
//     flagButton.classList.remove("active");
//     backdrop.classList.remove("active");
//     unlockBodyScroll();
//   });

//   // Навигация сайдбара
//   document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
//     link.addEventListener("click", () => {
//       skipRestore = true;
//     });
//   });

// });





document.addEventListener("DOMContentLoaded", function () {
    // отключаем восстановление позиции браузером
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  document.documentElement.classList.remove("scroll-locked");
  document.body.style.top = "";
  
 

  const flagButton = document.querySelector(".header__country");
  const flagMenu = document.querySelector(".header__flag-menu");
  const closeButton = document.querySelector(".button__close");
  const backdrop = document.querySelector('.header__flag-backdrop');

  let scrollY = 0;
  let skipRestore = false;

  function lockBodyScroll() {
    scrollY = window.scrollY;
    document.documentElement.classList.add("scroll-locked");
    document.body.style.top = `-${scrollY}px`;
  }

function unlockBodyScroll() {
  const wasLocked = document.documentElement.classList.contains("scroll-locked");

  document.documentElement.classList.remove("scroll-locked");
  document.body.style.top = "";

  // восстановить скролл только если меню закрывалось
  if (!skipRestore && wasLocked) {
    window.scrollTo({ top: scrollY, behavior: "instant" });
  }

  skipRestore = false;
}

  // --- КНОПКА ВВЕРХ ---
  function scrollToTop() {
    // запретить восстановление scrollY после закрытия меню
    skipRestore = true;

    // если меню было открыто — закрываем правильно
    if (document.documentElement.classList.contains("scroll-locked")) {
      unlockBodyScroll();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- ПРИВЯЗКА КНОПКИ ВВЕРХ ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 250 ? "block" : "none";
  });

  scrollToTopBtn.parentElement.onclick = scrollToTop;
  // --------------------------

  if (!flagButton || !flagMenu || !closeButton || !backdrop) return;

  // Открытие меню
  flagButton.addEventListener("click", function (event) {
    event.preventDefault();

    const isActive = flagMenu.classList.toggle("active");
    flagButton.classList.toggle("active");
    backdrop.classList.toggle("active", isActive);

    if (isActive) lockBodyScroll();
    else unlockBodyScroll();
  });

  // Закрытие крестиком
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    flagMenu.classList.remove("active");
    flagButton.classList.remove("active");
    backdrop.classList.remove("active");
    unlockBodyScroll();
  });

  // Закрытие по клику вне меню
  document.addEventListener("click", function (event) {
    if (!flagButton.contains(event.target) && !flagMenu.contains(event.target)) {
      flagMenu.classList.remove("active");
      flagButton.classList.remove("active");
      backdrop.classList.remove("active");
      unlockBodyScroll();
    }
  });

  // Закрытие по клику на backdrop
  backdrop.addEventListener("click", () => {
    flagMenu.classList.remove("active");
    flagButton.classList.remove("active");
    backdrop.classList.remove("active");
    unlockBodyScroll();
  });

  // Навигация сайдбара
  document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      skipRestore = true;
    });
  });

});





