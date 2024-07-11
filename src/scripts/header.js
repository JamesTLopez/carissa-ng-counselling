document.addEventListener("scroll", () => {
  let headerDom = document.querySelector("header");

  if (window.scrollY > 50) {
    headerDom.classList.remove("bg-opacity-0");
    headerDom.classList.add("shadow-md");
  } else {
    headerDom.classList.add("bg-opacity-0");
    headerDom.classList.remove("shadow-md");
  }
});

let open = document.querySelector("#ham");

open.addEventListener("click", (e) => {
  let menu = document.querySelector("#mobile-menu");
  if (menu.classList.contains("-ml-[100vw]")) {
    document.querySelector("#mobile-menu").classList.remove("-ml-[100vw]");
    document.querySelector("#mobile-menu").classList.add("-ml-0");
  } else {
    document.querySelector("#mobile-menu").classList.add("-ml-[100vw]");
    document.querySelector("#mobile-menu").classList.remove("-ml-0");
  }
});

let close = document.querySelector("#close");

close.addEventListener("click", (e) => {
  let menu = document.querySelector("#mobile-menu");
  if (menu.classList.contains("-ml-0")) {
    document.querySelector("#mobile-menu").classList.add("-ml-[100vw]");
    document.querySelector("#mobile-menu").classList.remove("-ml-0");
  } else {
    document.querySelector("#mobile-menu").classList.remove("-ml-[100vw]");
    document.querySelector("#mobile-menu").classList.add("-ml-0");
  }
});

let navLinks = document.querySelectorAll("#nav-link");

// Iterate over each link and attach the click event listener
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Perform custom logic here
    console.log("Custom logic before navigation...", event.target);
    document.querySelector("#mobile-menu").classList.add("-ml-[100vw]");
    document.querySelector("#mobile-menu").classList.remove("-ml-0");

    // Show a confirmation dialog

    // If the user confirms, allow the default action to continue
    // if (shouldNavigate) {
    //   // Optionally, you can remove the event listener to prevent future invocations
    //   link.removeEventListener("click", handleClick);
    // } else {
    //   // Stop the default action permanently
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
  });
});
