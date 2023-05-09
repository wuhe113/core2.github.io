const dataUrl = 'https://data.cityofnewyork.us/resource/npnk-wrj8.json'
const graphBar = document.querySelector('#ssidGraph')


const parseData = (wifiz) => {
    let wifiGuest= 0
    let wifiAtt = 0
    let wifiOthers = 0
    let wifiGorver = 0


    wifiz.forEach(wifi => {

        if(wifi.ssid =='GuestWiFi') wifiGuest++
        else if (wifi.ssid == 'attwifi') wifiAtt++
        else if (wifi.ssid == 'BryantPark.org','unionsquarewifi') wifiOthers++
        else if (wifi.ssid == 'Governors Island') wifiGorver++

    })
 
    console.log('GuestWifi:' + wifiGuest)
    console.log('attwifi:' + wifiAtt)
    console.log('BryantPark.org:' + wifiOthers)
    console.log('Governors Island:' + wifiGorver)


    ssidGraph.style.setProperty('--guest', wifiGuest)
    ssideGraph.style.setProperty('--attwifi', wifiAtt)
    ssidGraph.style.setProperty('--others', wifiOthers)
    ssidGraph.style.setProperty('--gor', wifiGorver)
}



fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        parseData(data)
    })