// Kochana mamo, czy wzięłaś może raz pod uwagę że ja mam poprostu problemy z moim stanem psychicznym? spóźniam się na lekcje bo płaczę po kiblach i mam ataki paniki oraz codziennie zastanawiam się nad samobójstwem. wzięłaś pod uwagę że może depresja wróciła? bo chyba dla ciebie liczą się tylko oceny a nie mój pierdolony stan psychiczny. mam w to wyjebane czy jest coś po śmierci, ja już poprostu nie chce żyć bo z dnia na dzień wszystko staje się coraz trudniejsze. 

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

});