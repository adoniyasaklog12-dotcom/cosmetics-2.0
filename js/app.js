/* ===== Cards fade in while scrolling ===== */
const items = document.querySelectorAll(".item, .highlight, .contact-box");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (item) {
    item.classList.add("reveal");
    observer.observe(item);
  });
}
