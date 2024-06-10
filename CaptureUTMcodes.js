function getReferrer() {
setTimeout(function() {
var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);
var utmSource = urlParams.get('utm_campaign');
var utmMedium = urlParams.get('utm_source');
var utmCampaign = urlParams.get('utm_medium');

loader.engine.document.getElementById(111111111).setValue({ value: utmSource });
loader.engine.document.getElementById(222222222).setValue({ value: utmMedium });
loader.engine.document.getElementById(333333333).setValue({ value: utmCampaign });
loader.engine.document.getElementById(444444444).setValue({ value: urlParams });

}, 1000);}
window.onclick = getReferrer;
