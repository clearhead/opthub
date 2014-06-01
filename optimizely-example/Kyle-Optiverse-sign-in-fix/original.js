var optiverseRegex = /version\=optiverse/;
var url = decodeURIComponent(document.URL);
if(optiverseRegex.test(url)){$('body').addClass('optiverse');}