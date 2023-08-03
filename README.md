# lazy-loading

lazy-loading images
=> https://hit77ro.github.io/lazy-loading/

```javascript
class LazyLoader {
  constructor(options) {
    this.options = options || {
      threshold: 0,
      rootMargin: "0px",
      root: null,
    };
    this._imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image is intersecting (visible in the viewport), load it
          this._lazyLoadImage(entry.target);
          // Unobserve the image after loading to avoid redundant operations
          this._imageObserver.unobserve(entry.target);
        }
      });
    }, this.options);
  }

  _lazyLoadImage(image) {
    image.src = image.dataset.src;
    // Show the original image after it loads
    image.addEventListener("load", () => image.classList.add("loaded"));
  }
  observe(element) {
    this._imageObserver.observe(element);
  }
}
const lazyLoader = new LazyLoader();
let images = document.querySelectorAll("img[data-src]");
images.forEach((el) => lazyLoader.observe(el));
```
