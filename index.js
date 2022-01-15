
let image = document.querySelector(".profile-pic");
   
      image.onclick = function () {
        
          alert("Not available!");
         }
      

         let gallery = document.querySelector(".picture-grid");
         let imageIndexes = [1,2,3,4,5]
         let selectedIndex = null;
         
         
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