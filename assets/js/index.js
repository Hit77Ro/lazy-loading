let lazyImages = document.querySelectorAll("img[data-src]");

let observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (!entery.isIntersecting) return;
      const image = entery.target;

      image.src = image.dataset.src;
      //  showing the original images after it loads
      image.addEventListener("load", () => image.classList.add("loaded"));
      observer.unobserve(image);
    });
  },
  { threshold: 0, rootMargin: "200px", root: null }
);

lazyImages.forEach((image) => observer.observe(image));

// images are loaded only when the src attribute is set to path to this image
