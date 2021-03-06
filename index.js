const image = document.querySelector(".profile-pic");

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

const gallery = document.querySelector(".picture-grid");

fetch("https://image-gallery-pjks.s3.ca-central-1.amazonaws.com/data.json", requestOptions)
  .then(res => res.json())
  .catch(() => {
    console.log(backupData)
    return backupData;
  })
  .then(res => {
    console.log(res)
    dataParsor(res);
  });

function dataParsor(responseArray) {
  responseArray.forEach(item => {
    const container = document.createElement('div');
    container.classList.add('grid-box');
    gallery.appendChild(container);


    const link = document.createElement('a');
    link.href = `template.html`;
    container.appendChild(link);


    const frame = document.createElement('figure');
    link.appendChild(frame);

    const image = document.createElement('img');
    image.src = item.url;
    image.alt = `${item.id}-photo`;
    image.title = item.location;
    image.setAttribute(`id`, `${item.id}`);
    frame.appendChild(image);

    image.addEventListener('click', () => {
      sessionStorage.setItem(`id`, `${item.id}`);
      sessionStorage.setItem(`location`, `${item.location}`);
      sessionStorage.setItem(`url`, `${item.url}`);
      sessionStorage.setItem(`description`, `${item.descreption}`);
    })

  })
}