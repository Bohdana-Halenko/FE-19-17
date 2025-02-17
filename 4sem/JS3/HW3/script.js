// document.getElementById("loadImages").addEventListener("click", () => {
//   const images = document.querySelectorAll("img[data-src]");
//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const img = entry.target;
//           img.src = img.dataset.src;
//           img.onload = () => img.classList.add("loaded");
//           observer.unobserve(img);
//         }
//       });
//     },
//     { rootMargin: "50px" }
//   );

//   images.forEach((img) => observer.observe(img));
// });




// 2
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".lazy-img");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.5 }
  );

  images.forEach((img) => observer.observe(img));
});
