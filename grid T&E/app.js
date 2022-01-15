let gallery2 = document.querySelector(".picture-grid");
let imageIndexes2 = [1,2,3,4,5]
let selectedIndex2 = null;


imageIndexes.forEach(i => {
  let container = document.createElement('div');
  container.classList.add('grid-box');
  gallery.appendChild(container);


  let link = document.createElement('a');
  link.href = `../template.html`;
  container.appendChild(link);
  
  
  let frame = document.createElement('figure');
  link.appendChild(frame);
 
  let image = document.createElement('img');
  image.src = `images/${i}.jpg`;
  image.alt = `${i}-photo`; 
  frame.appendChild(image);
});
