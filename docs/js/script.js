// Loader for website
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  // document.body.style.overflow = "hidden";
  // Add a delay before hiding the loader
  setTimeout(() => {
    loader.classList.add("loader-hide");
  }, 9700); // Adjust the delay (in milliseconds) as needed

  loader.addEventListener("transitionend", () => {
    document.removeChild(loader);
    // document.body.style.overflow = "";
  });
});

// Animation script for when th viewport of the user come across an existing content then it will appear
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".onScroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Adjust the threshold as needed
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".onLoad");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Adjust the threshold as needed
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
