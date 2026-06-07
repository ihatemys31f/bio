document.addEventListener("DOMContentLoaded", () => {

  const texts = [
    "cute silly femboy looner :3",
    "femboy developer",
    "vibe coded website btw."

  ];

  const el = document.getElementById("typing");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const current = texts[textIndex];

    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex++);
    } else {
      el.textContent = current.substring(0, charIndex--);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length + 1) {
      isDeleting = true;
      speed = 1200;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 300;
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();

  const aboutBtn = document.getElementById("aboutBtn");
  const popup = document.getElementById("aboutPopup");
  const closePopup = document.getElementById("closePopup");

  aboutBtn.onclick = () => {
    popup.style.display = "flex";
  };

  closePopup.onclick = () => {
    popup.style.display = "none";
  };

});