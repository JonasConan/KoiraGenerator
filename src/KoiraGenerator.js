// Koiralle nimi, TUL17

const {Button, Button2, TextView, ImageView, ui} = require('tabris');

// mahdolliset nimet taulukossa
var nimet = ["HauHau", "Musti", "Nakki", "T‰pl‰", "Nero", "WindowsXP", "Aarre", "Aatu", "Benjamin", "Capo", "Navi", "Joona", "David", "Emil", "Pepe"];

var nimet2 = ["Labradorinnoutaja", "J‰mtlanninpystykorva", "Saksanpaimenkoira", "Suomenajokoira", "Kultainennoutaja", "Suomenlapinkoira", "Shetlanninlammaskoira", "Mopsi", "Chihuahua", "Jackrussellinterrieri", "Tiibetinspanieli", "Cockerspanieli", "Kiinanharjakoira"];

// painike
let button = new Button({
  centerX: 0, centerY: -100,
  text: 'Mik‰ koiralle nimeksi?'
}).appendTo(ui.contentView);

let button2 = new Button({
  centerX: 10, centerY: 10,
  text: 'Mik‰ rotu koiralle?'
}).appendTo(ui.contentView);

new ImageView({
  layoutData: {width: 150, top: 320},
  image: {src: "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/25/4/enhanced/buzzfeed-prod-fastlane-01/enhanced-23831-1493109569-1.jpg"},
  highlightOnTouch: true
}).appendTo(ui.contentView);

// textview nimen n‰ytt‰miseksi
let naytanimi = new TextView({
  centerX: 0, top: [button, 20],
  font: '24px'
}).appendTo(ui.contentView);

// kun painiketta painetaan kutsutaan funktio arvoNimi
button.on('select', arvoNimi).appendTo(ui.contentView);

button2.on('select', arvoNimi2).appendTo(ui.contentView);

function arvoNimi() {
  // arvotaan numero nollan ja taulukossa olevien nimien m‰‰r‰n v‰lilt‰
  var arvottunumero = Math.floor((Math.random() * nimet.length));
  // n‰yt‰ nimi siin‰ kohtaa nimitaulukkoa kun arvottu numero oli
  naytanimi.text = 'Miten olisi ' + nimet[arvottunumero] + '?';}
  
  function arvoNimi2() {
  // arvotaan numero nollan ja taulukossa olevien nimien m‰‰r‰n v‰lilt‰
  var arvottunumero2 = Math.floor((Math.random() * nimet2.length));
  // n‰yt‰ nimi siin‰ kohtaa nimitaulukkoa kun arvottu numero oli
  naytanimi.text = 'Miten olisi ' + nimet2[arvottunumero2] + '?'; 
}



      
      
      
      