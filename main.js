document.addEventListener("DOMContentLoaded", () => {
  // Toggle Mobile Navigation
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Scroll to Top Button (Optional)
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "⬆";
  scrollToTopButton.classList.add("scroll-to-top");
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Lazy Loading for Map and Images (Optional)
  const lazyImages = document.querySelectorAll("img, iframe");

  const lazyLoad = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyElement = entry.target;
        const src = lazyElement.getAttribute("data-src");

        if (src) {
          lazyElement.src = src;
          lazyElement.removeAttribute("data-src");
        }

        observer.unobserve(lazyElement);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  lazyImages.forEach((image) => observer.observe(image));
});
