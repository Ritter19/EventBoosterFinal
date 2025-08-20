// const preloader = document.querySelector('.preloader');
// const body = document.querySelector('body');

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     preloader.remove();
//     body.style.overflowY = 'scroll';
//   }, 1500);
// });

// //Done

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    // Keep loader for 1 second after page load
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500); // fade-out duration
    }, 1000); // delay before hiding (1000ms = 1s)
  }
});
