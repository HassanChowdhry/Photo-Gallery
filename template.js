let pictureDescription = sessionStorage.getItem('description');
let pictureLocation = sessionStorage.getItem('location');
let pictureId = sessionStorage.getItem('id');
let pictureURL = sessionStorage.getItem('url');

let figure = document.querySelector('figure');
let description = document.querySelector('.description');
let locationOfPicture = document.querySelector('.location');

window.onload = () => {
  let image = document.createElement('img');
  image.src = pictureURL;
  image.alt = pictureId;
  image.title = pictureLocation;
  image.classList.add('img.fluid');
  image.classList.add('figure-img');
  figure.appendChild(image);

  description.innerHTML = `${pictureDescription}`;
  locationOfPicture.innerHTML = `${pictureLocation}`;
};