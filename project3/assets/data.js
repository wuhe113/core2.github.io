const dataUrl = 'https://data.cityofnewyork.us/resource/npnk-wrj8.json'
const graphBar = document.querySelector('#providerGraph')
const ssidBar = document.querySelector('#ssidGraph')

const liElement = document.querySelector('li');
const textboxElement = liElement.querySelector('.providerName');

liElement.addEventListener('mouseenter', () => {
   textboxElement.style.display = 'block';
});

liElement.addEventListener('mouseleave', () => {
   textboxElement.style.display = 'none';
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "grid";
    } else {
      content.style.display = "none";
    }
  });
}




var data = [90.8, 4.2, 5, 0];

function updateProgress(index) {
  var percent = data[index];
  
  var label = document.getElementById("progress-label");
  label.innerHTML = percent + "%";

  // Calculate the colored length of the progress bar
  var radius = 40;
  var circumference = 2 * Math.PI * radius;
  var coloredLength = percent / 100 * circumference;

  // Update the stroke-dasharray property of the circle element
  var circle = document.getElementById("progress-bar");
  circle.setAttribute("stroke-dasharray", coloredLength + " " + (circumference - coloredLength));
}




document.addEventListener("DOMContentLoaded", function(event) {
  var beforeElement = document.querySelector('#btn1:before');

  beforeElement.addEventListener('click', function() {
    beforeElement.classList.toggle('clicked');
  });
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

const ssidData = (wifiz) => {
    let wifiGuest= 0
    let wifiAtt = 0
    let wifiOthers = 0
    let wifiGover = 0


    wifiz.forEach(wifi => {

        if(wifi.ssid =='GuestWiFi') wifiGuest++
        else if (wifi.ssid == 'attwifi') wifiAtt++
        else if (wifi.ssid == 'BryantPark.org','unionsquarewifi') wifiOthers++
        else if (wifi.ssid == 'Governors Island') wifiGover++

    })
 
    console.log('GuestWifi:' + wifiGuest)
    console.log('attwifi:' + wifiAtt)
    console.log('BryantPark.org:' + wifiOthers)
    console.log('Governors Island:' + wifiGover)

    ssidGraph.style.setProperty('--guest', wifiGuest)
    ssidGraph.style.setProperty('--attwifi', wifiAtt)
    ssidGraph.style.setProperty('--others', wifiOthers)
    ssidGraph.style.setProperty('--gov', wifiGover)
    

}




fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        parseData(data)
        ssidData(data)
    })