let myHeaders2 = new Headers();
myHeaders2.append("Origin", "https://localhost.com");

let requestOptions2 = {
  method: 'GET',
  headers: myHeaders2,
  redirect: 'follow'
};
let arrayPromise2 = fetch("https://image-gallery-pjks.s3.ca-central-1.amazonaws.com/data.json", requestOptions2)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    return res;
  });

  let pictureId = sessionStorage.getItem('id');
let gallery2 = document.querySelector(".plap");
let figure = document.querySelector('figure');
let description = document.querySelector('.description');
let locationOfPicture = document.querySelector('.location');

arrayPromise2.then(responseArray => {
  responseArray.forEach((items) => {
    if (items.id == pictureId) {
      let image = document.createElement('img');
      image.src = items.url;
      image.alt = items.id;
      image.title = items.location;
      image.classList.add('img.fluid');
      image.classList.add('figure-img');
      figure.appendChild(image);

      description.innerHTML = `${items.descreption}`;
      locationOfPicture.innerHTML = `${items.location}`;
    }
  })
})