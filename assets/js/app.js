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
        }
      }
    });
  }, observerOptions);

  // Seleccionar las imágenes y observarlas
  const desktopImage = document.querySelector('.img-desktop');
  const mobileImage = document.querySelector('.img-mobile');
  observer.observe(desktopImage);
  observer.observe(mobileImage);