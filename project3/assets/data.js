const dataUrl = 'https://data.cityofnewyork.us/resource/npnk-wrj8.json'
const graphBar = document.querySelector('#providerGraph')

const liElement = document.querySelector('li');
const textboxElement = liElement.querySelector('.providerName');

liElement.addEventListener('mouseenter', () => {
   textboxElement.style.display = 'block';
});

liElement.addEventListener('mouseleave', () => {
   textboxElement.style.display = 'none';
});


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


    providerGraph.style.setProperty('--alt', pvdAlticeusa)
    providerGraph.style.setProperty('--spec', pvdSpectrum)
    providerGraph.style.setProperty('--att', pvdAtt)
    providerGraph.style.setProperty('--partner', pvdPartner)
    providerGraph.style.setProperty('--fiber', pvdFiberless)
}

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        parseData(data)
    })