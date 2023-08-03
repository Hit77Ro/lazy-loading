//============================================================
class LazyLoader {
  constructor(options) {
    this.options = options || {
      threshold: 0,
      rootMargin: "0px",
      root: null,
    };
    this._imageObserver = new IntersectionObserver((entries) => {
      // enteries => array of element that are in viewport
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
images.forEach((image) => lazyLoader.observe(image));

//============================================================================================================
//============================================================================================================

// class LazyLoader {
//   constructor(elements, options) {
//     this.elements = elements;
//     this.options = options || {
//       threshold: 0,
//       rootMargin: "0px",
//       root: null,
//     };
//     this.imageObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // If the image is intersecting (visible in the viewport), load it
//           this._lazyLoadImage(entry.target);
//           observer.unobserve(entry.target); // Unobserve the image after loading to avoid redundant operations
//         }
//       });
//     }, this.options);

//     this._StartObserving();
//   }

//   _lazyLoadImage(image) {
//     image.src = image.dataset.src;
//     // Show the original image after it loads
//     image.addEventListener("load", () => image.classList.add("loaded"));
//   }

//   _StartObserving() {
//     const lazyImages = this.elements;
//     lazyImages.forEach((image) => this.imageObserver.observe(image));
//   }
// }

// const lazy = new LazyLoader(document.querySelectorAll("[data-src"));

//============================================================

// let lazyImages = document.querySelectorAll("img[data-src]");
//
// let observer = new IntersectionObserver(
//   (enteries) => {
//     enteries.forEach((entery) => {
//       if (!entery.isIntersecting) return;
//       const image = entery.target;
//
//       image.src = image.dataset.src;
//       //  showing the original images after it loads
//       image.addEventListener("load", () => image.classList.add("loaded"));
//       observer.unobserve(image);
//     });
//   },
//   { threshold: 0, rootMargin: "200px", root: null }
// );
//
// lazyImages.forEach((image) => observer.observe(image));

// images are loaded only when the src attribute is set to path to this image

//============================================================

// =>

// // Function to handle lazy loading of images
// const lazyLoadImage = (image) => {
//   image.src = image.dataset.src;
//   // Show the original image after it loads
//   image.addEventListener("load", () => image.classList.add("loaded"));
// };

// // Intersection Observer options
// const observerOptions = {
//   threshold: 0.1, // Percentage of the image that needs to be visible to trigger the callback
//   rootMargin: "200px", // Additional margin around the viewport to trigger the callback
//   root: null, // Use the viewport as the root
// };

// // Intersection Observer callback
// const imageObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // If the image is intersecting (visible in the viewport), load it
//       lazyLoadImage(entry.target);
//       observer.unobserve(entry.target); // Unobserve the image after loading to avoid redundant operations
//     }
//   });
// }, observerOptions);

// // Function to observe added images
// const observeAddedImages = () => {
//   const lazyImages = document.querySelectorAll("img[data-src]");
//   lazyImages.forEach((image) => imageObserver.observe(image));
// };

// observeAddedImages();
