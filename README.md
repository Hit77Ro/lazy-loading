# lazy-loading
lazy-loading images
=> https://hit77ro.github.io/lazy-loading/
~~~
let boxes = document.querySelectorAll(".box");

let observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      const box = entery.target;

      if (!entery.isIntersecting) return;

      box.firstElementChild.src = box.firstElementChild.dataset.src;
// stop observing this element , since it's already loaded to avoid performance decreasing
      observer.unobserve(box);
    });
  },
  {
    threshold: 1,
    rootMargin: "100px",
  }
);

boxes.forEach((box) => observer.observe(box));

// images are loaded only when the src attribute is set to path to this image


~~~
