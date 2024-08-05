document.addEventListener('DOMContentLoaded', function() {
    var words = ["Dentista", "Abogado", "Plomero", "Ferretería", "Inmobiliaría"];
    var i = 0;
    var textElement = document.querySelector('.typing-effect');
    var currentWord = '';
    var isDeleting = false;
    var typingSpeed = 150;
    var deletingSpeed = 100;
    var pause = 2000;
  
    function type() {
      var fullText = words[i];
      if (isDeleting) {
        currentWord = fullText.substring(0, currentWord.length - 1);
      } else {
        currentWord = fullText.substring(0, currentWord.length + 1);
      }
  
      textElement.textContent = currentWord;
  
      if (!isDeleting && currentWord === fullText) {
        setTimeout(function() {
          isDeleting = true;
          setTimeout(type, deletingSpeed);
        }, pause);
      } else if (isDeleting && currentWord === '') {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    }
  
    type();
  });
  