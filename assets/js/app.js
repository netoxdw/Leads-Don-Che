// Configurar el Intersection Observer
const observerOptions = {
    root: null, // Viewport actual
    threshold: 0.1 // El 10% del elemento debe estar visible para activar la animación
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento es visible, añadir las clases de animación
        if (entry.target.classList.contains('img-desktop')) {
          entry.target.classList.add('animate-desktop');
        } else if (entry.target.classList.contains('img-mobile')) {
          entry.target.classList.add('animate-mobile');
        } else if (entry.target.classList.contains('img-main')) {
          entry.target.classList.add('animate-main');
        }  else if (entry.target.classList.contains('button-service')) {
          entry.target.classList.add('animate-button');
        } 
      }
    });
  }, observerOptions);

  // Seleccionar las imágenes y observarlas
  const desktopImage = document.querySelector('.img-desktop');
  const mobileImage = document.querySelector('.img-mobile');
  const mainImage = document.querySelector('.img-main');
  const sericeButton = document.querySelector('.button-service');
  observer.observe(desktopImage);
  observer.observe(mobileImage);
  observer.observe(mainImage);
  observer.observe(sericeButton);