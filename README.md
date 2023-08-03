# lazy-loading

lazy-loading images
=> https://hit77ro.github.io/lazy-loading/

```javascript

class LazyLoader {
  constructor(elements, options) {
    this.elements = elements;
    this.options = options || {
      threshold: 0,
      rootMargin: "0px",
      root: null,
    };
    this.imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image is intersecting (visible in the viewport), load it
          this._lazyLoadImage(entry.target);
          observer.unobserve(entry.target); // Unobserve the image after loading to avoid redundant operations
        }
      });
    }, this.options);

    this._StartObserving();
  }

  _lazyLoadImage(image) {
    image.src = image.dataset.src;
    // Show the original image after it loads
    image.addEventListener("load", () => image.classList.add("loaded"));
  }

  _StartObserving() {
    const lazyImages = this.elements;
    lazyImages.forEach((image) => this.imageObserver.observe(image));
  }
}

const lazy = new LazyLoader(document.querySelectorAll("[data-src"));

```
