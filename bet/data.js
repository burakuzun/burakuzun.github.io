var system = require('system');
var adres = system.args[1];
var file = adres + '.htm';

var macLink = [
'http://www.canliskor2.com/mac/' + adres + '/#mac-ozeti',
'http://www.canliskor2.com/mac/' + adres + '/#mac-istatistikleri;0',
'http://www.canliskor2.com/mac/' + adres + '/#mac-istatistikleri;1',
'http://www.canliskor2.com/mac/' + adres + '/#mac-istatistikleri;2'
];

var page = require('webpage').create();

page.open(macLink[0], function(status) {
  console.log("Sonuc: " + status);
  if(status === "success") {
	page.render(adres + '.png');
  }
  phantom.exit();
});