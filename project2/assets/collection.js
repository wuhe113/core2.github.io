const renderItems = (collection) => {
    const collectionList = document.querySelector('#collection')

    collection.forEach(item => {
        const listItem = document.createElement('li')
        
		const itemDetails =
        `
            <h1 class="title">${item.title}</h1>
            <img src="${item.img}">
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