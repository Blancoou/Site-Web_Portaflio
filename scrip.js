const skillCircles = document.querySelectorAll('.skill-circle'); // para seleccionar todos los elementos con la clase  SkillCircles
skillCircles.forEach((circle) => {
  const percentage = circle.dataset.percentage; //extrae el valor del atributo dato del porcentaje del elemento circulo actual
  circle.style.transform = `rotate(${percentage}deg)`; //El valor de la rotación se define usando el valor del porcentaje obtenido anteriormente y añadiendo la unidad "deg"
});

        const audioElement = document.getElementById('soundeffect');
        const button = document.querySelector('.button');
    
        button.addEventListener('click', () => {
          audioElement.play(); // Reproducir el audio al hacer clic
        });
      
const spanishContent = {
    idioma: "Español",
    button: "Botón en español"
  };
  const englishContent = {
    idioma: "English",
    button: "Button in English"
  };
  
  idiomaDropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedLanguage = event.target.getAttribute('data-language');
      const currentContent = selectedLanguage === 'spanish' ? spanishContent : englishContent;
  
      document.getElementById('idioma').textContent = currentContent.idioma;
      document.getElementById('idioma-button').textContent = currentContent.button;
    });
  });