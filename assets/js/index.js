let boxes = document.querySelectorAll(".box");

let observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      const box = entery.target;

      if (!entery.isIntersecting) return;

      box.firstElementChild.src = box.firstElementChild.dataset.src;
      observer.unobserve(box);
    });
  },
  {
    threshold: 1,
    root: null,
  }
);

boxes.forEach((box) => observer.observe(box));

// images are loaded only when the src attribute is set to path to this image
