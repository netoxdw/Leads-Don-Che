document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing-text');
  const texts = ['Pagina web', 'Google Ads', 'Facebook Ads', 'SEO'];
  let textIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
      if (typing) {
          if (charIndex < texts[textIndex].length) {
              textElement.innerHTML += texts[textIndex].charAt(charIndex);
              charIndex++;
              setTimeout(type, 150);
          } else {
              typing = false;
              setTimeout(type, 2000);
          }
      } else {
          if (charIndex > 0) {
              textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
              charIndex--;
              setTimeout(type, 100);
          } else {
              typing = true;
              textIndex = (textIndex + 1) % texts.length;
              setTimeout(type, 500);
          }
      }
  }

  type();
});