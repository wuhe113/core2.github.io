const dataUrl = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'

fetch(dataUrl + '?$limit=5000')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })