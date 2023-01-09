function run(size=16){
   
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
 
    for (let i = 0; i < size*size; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 25px)`;
    container.style.gridTemplateRows = `repeat(${size}, 25px)`;
   
        const gridItems = document.querySelectorAll('.grid-item');
   
        gridItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
          });
       
        });
   
}
 
 
 
const newGridButton = document.querySelector('#new-grid-button');
 
newGridButton.addEventListener('click', () => {
  const size = prompt('Enter the number of squares per side for the new grid (up to 100):');
  if (size > 100) {
    alert('The maximum number of squares per side is 100.');
    return;
  }
  run(size)
 
 
  });
 
  run()
 
