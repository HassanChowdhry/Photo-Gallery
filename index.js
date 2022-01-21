let image = document.querySelector(".profile-pic");
image.onclick = function () {
  alert("Not available!");
}

let myHeaders = new Headers();
myHeaders.append("Origin", "https://localhost.com");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
let arrayPromise = fetch("https://image-gallery-pjks.s3.ca-central-1.amazonaws.com/data.json", requestOptions)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    return res;
  });

let gallery = document.querySelector(".picture-grid");
arrayPromise.then(responseArray => {
  responseArray.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('grid-box');
    gallery.appendChild(container);


    let link = document.createElement('a');
    link.href = `template.html`;
    container.appendChild(link);


    let frame = document.createElement('figure');
    link.appendChild(frame);

    let image = document.createElement('img');
    image.src = item.url;
    image.alt = `${item.id}-photo`;
    image.title = item.location;
    image.setAttribute(`id`, `${item.id}`);
    frame.appendChild(image);
  })
});

document.addEventListener('click', function (e) {
  sessionStorage.setItem(`id`, `${e.target.id}`);
  sessionStorage.setItem(`location`, `${e.target.title}`);
  sessionStorage.setItem(`url`, `${e.target.src}`);
  arrayPromise.then(responseArray =>  {
    responseArray.forEach(items => {
      if (items.id == e.target.id) {
        sessionStorage.setItem(`description`, `${items.descreption}`);
      }
    }
  )})
});
