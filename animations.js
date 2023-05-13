const imageList = document.querySelector('.image-list');
const scrollArrows = document.querySelector('.scroll-arrows');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');


// Cuando se hace clic en la flecha izquierda, mueve la lista de imágenes a la izquierda por 1125 píxeles
arrowLeft.addEventListener('click', () => {
  moveImageList(-1125); // mueve la lista 1125px hacia la izquierda
});

// Cuando se hace clic en la flecha derecha, mueve la lista de imágenes a la derecha por 1125 píxeles
arrowRight.addEventListener('click', () => {
  moveImageList(1125); // mueve la lista 1125px hacia la derecha
});

//funcion para cuando llegue al final de cuaquiera de los dos lados la flecha respectiva desaparezca
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

// Una función que mueve la lista de imágenes por el valor de deltaX proporcionado
function moveImageList(deltaX) {
  const startTime = performance.now();// Obtiene el tiempo de inicio de la animación
  const startPos = imageList.scrollLeft;// Obtiene la posición actual de desplazamiento de la lista de imágenes
  const endPos = startPos + deltaX;// Calcula la posición final

  // Define la función de paso de la animación  
  function step(currentTime) {
    const timeElapsed = currentTime - startTime; // Calcula el tiempo transcurrido desde que comenzó la animación
    const nextPos = easeInOutQuad(timeElapsed, startPos, deltaX, 500); // Calcula la siguiente posición de acuerdo con una función de aceleración
    imageList.scrollLeft = nextPos;// Actualiza la posición de desplazamiento
    if (timeElapsed < 500) {// Si el tiempo transcurrido es menor que 500 ms, continúa con la animación
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
