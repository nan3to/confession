const button = document.getElementById('random-button');

button.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  button.style.position = 'absolute';
  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});