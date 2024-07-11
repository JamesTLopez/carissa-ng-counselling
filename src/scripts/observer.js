const initObserver = () => {
  const setCurrent = (section) => {
    // remove all current tag's navitems
    document.querySelectorAll(".current").forEach((el) => {
      el.classList.remove("current");
    });
    // Add class to navitem in viewport
    document
      .querySelector(`.link[href="#${section.id}"]`)
      .classList.add("current");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // setCurrent(entry.target);
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  const elements = document.querySelectorAll("section");

  elements.forEach((el) => observer.observe(el));
};

export default initObserver;
