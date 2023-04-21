const dataUrl = 'https://data.cityofnewyork.us/resource/npnk-wrj8.json'
const graphBar = document.querySelector('#graph')

const parseData = (wifix) => {
    let pvdAlticeusa = 0
    let pvdSpectrum = 0
    let pvdAtt = 0
    let pvdPartner = 0
    let pvdFiberless = 0

    wifix.forEach(wifi => {

        // if (squirrel.primary_fur_color == 'Gray') colorGray++
        // else if (squirrel.primary_fur_color == 'Cinnamon') colorCinnamon++
        // else colorUnknown++
        if(wifi.provider =='ALTICEUSA') pvdAlticeusa++
        else if (wifi.provider == 'SPECTRUM') pvdSpectrum++
        else if (wifi.provider == 'AT&T') pvdAtt++
        else if (wifi.provider == 'Partner') pvdPartner++
        else if (wifi.provider == 'Fiberless') pvdFiberless++

    })
 
    console.log('ALTICEUSA:' + pvdAlticeusa)
    console.log('SPECTRUM:' + pvdSpectrum)
    console.log('AT&T:' + pvdAtt)
    console.log('Partner:' + pvdPartner)
    console.log('Fiberless:' + pvdFiberless)


    graph.style.setProperty('--color--alt', pvdAlticeusa)
    graph.style.setProperty('--color--spec', pvdSpectrum)
    graph.style.setProperty('--color--att', pvdAtt)
    graph.style.setProperty('--color--partner', pvdPartner)
    graph.style.setProperty('--color--fiber', pvdFiberless)
}

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        parseData(data)
    })