const imageList = document.querySelector('.image-list');
const scrollArrows = document.querySelector('.scroll-arrows');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  moveImageList(-1110); // mueve la lista 10px hacia la izquierda
});

arrowRight.addEventListener('click', () => {
  moveImageList(1110); // mueve la lista 10px hacia la derecha
});

imageList.addEventListener('scroll', () => {
  if (imageList.scrollLeft === 0) {
    arrowLeft.style.visibility = 'hidden'; // oculta la flecha izquierda si se alcanza el principio de la lista
  } else {
    arrowLeft.style.visibility = 'visible';
  }

  if (imageList.scrollLeft + imageList.clientWidth === imageList.scrollWidth) {
    arrowRight.style.visibility = 'hidden'; // oculta la flecha derecha si se alcanza el final de la lista
  } else {
    arrowRight.style.visibility = 'visible';
  }
});
function moveImageList(deltaX) {
  const startTime = performance.now();
  const startPos = imageList.scrollLeft;
  const endPos = startPos + deltaX;
  
  function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const nextPos = easeInOutQuad(timeElapsed, startPos, deltaX, 500);
    imageList.scrollLeft = nextPos;
    if (timeElapsed < 500) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}