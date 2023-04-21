const dataUrl = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'
const graphBar = document.querySelector('#graph')

const parseData = (squirrels) => {
    let colorGray = 0
    let colorCinnamon = 0
    let colorBlack = 0
    let colorUnknown = 0

    squirrels.forEach(squirrel => {
        // console.log(squirrel.primary_fur_color)
        // if (squirrel.primary_fur_color == 'Gray') console.log("This is a gray squirrel")
        // else if (squirrel.primary_fur_color == 'Cinnamon') console.log("This is a red")
        // else console.log("This is an unknown squirrel color")

        if (squirrel.primary_fur_color == 'Gray') colorGray++
        else if (squirrel.primary_fur_color == 'Cinnamon') colorCinnamon++
        else colorUnknown++

    })
 
    console.log('Gray:' + colorGray)
    console.log('Cinnamon:' + colorCinnamon)

    // console.log(data)

    graph.style.setProperty('--color--gray', colorGray)
}

fetch(dataUrl + '?$limit=15')
    .then(response => response.json())
    .then(data => {
        parseData(data)
    })