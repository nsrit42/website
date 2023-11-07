// Array of image URLs
const images = [
    'assets/one.png',
    'assets/two.png',
    'assets/three.png',
    'assets/four.png',
    // Add as many images as you like
  ];
  
  let currentIndex = 0;
  
  function displayFullScreenImage(index) {
    const fullScreenDiv = document.getElementById('full-screen-image');
    fullScreenDiv.style.backgroundImage = `url(${images[index]})`;
  
    // Update thumbnails
    document.querySelectorAll('.thumbnail-img').forEach((thumb, idx) => {
      thumb.classList.toggle('active', idx === index);
    });
  }
  
  function createThumbnails() {
    const thumbnailsDiv = document.querySelector('.thumbnails');
    images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.className = 'thumbnail-img';
      imgElement.onclick = function() {
        currentIndex = index;
        displayFullScreenImage(index);
      };
      thumbnailsDiv.appendChild(imgElement);
    });
  }
  
  function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    displayFullScreenImage(currentIndex);
  }
  
  // Initial setup
  createThumbnails();
  displayFullScreenImage(0);
  
  // Keyboard navigation
  document.onkeydown = function(event) {
    switch (event.key) {
      case 'ArrowLeft': // left arrow
        navigate(-1);
        break;
      case 'ArrowRight': // right arrow
        navigate(1);
        break;
    }
  };
  
  // Click on full-screen image to go to next
  document.getElementById('full-screen-image').onclick = function() {
    navigate(1);
  };
  