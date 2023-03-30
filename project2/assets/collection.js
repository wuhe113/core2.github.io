const renderItems = (collection) => {
    const collectionList = document.querySelector('#collection')

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
  document.body.style.color = 'white';
  document.body.style.background = 'blue';
});


    collection.forEach(item => {
        const listItem = document.createElement('li')
        

		const itemDetails =
        `
            <img src="${item.img}">
            <img src="${item.img2}">
            <h1 class="title">${item.title}</h1>
            <p class="location">${item.location}</p>
            <p class="cleaness">${item.cleaness}</p>
            <p class="description">${item.description}</p>

        `
        
        listItem.insertAdjacentHTML('beforeend', itemDetails)
        
        collectionList.appendChild(listItem)
    })
}

fetch('assets/collection.json')
    .then(response => response.json())
    .then(collection => {
        renderItems(collection)
    })