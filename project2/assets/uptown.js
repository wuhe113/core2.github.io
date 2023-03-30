const renderItems = (collection) => {
    const uptownList = document.querySelector('#uptown')

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.fontSize = "10vw";
  } else {
    document.getElementById("header").style.fontSize = "18vw";
  }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  document.body.style.color = 'black';
  document.body.style.background = 'white';
});


    collection.forEach(item => {
        const listItem = document.createElement('li')
        

		const itemDetails =
        `
        <div><img class="img1" src="${item.img}">
        <img class="img2" src="${item.img2}"></div>
            <h1 class="title">${item.title}</h1>
            <p class="location">${item.location}</p>
            <p class="cleaness">${item.cleaness}</p>
            <p class="description">${item.description}</p>

        `
        
        listItem.insertAdjacentHTML('beforeend', itemDetails)
        
        if (item.neighborhood == "uptown") {
          uptownList.appendChild(listItem)
      }
    })
}

fetch('assets/collection.json')
    .then(response => response.json())
    .then(collection => {
        renderItems(collection)
    })