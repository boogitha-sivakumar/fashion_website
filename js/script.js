const radios = document.querySelectorAll('.c input[type="radio"]');
let currentIndex = 0;

function moveSlides() {
  // Uncheck the current radio button
  radios[currentIndex].checked = false;

  // Move to the next index
  currentIndex = (currentIndex + 1) % radios.length;

  // Check the next radio button
  radios[currentIndex].checked = true;
}

// Automatically move slides every 3 seconds
setInterval(moveSlides, 3000);
