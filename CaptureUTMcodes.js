function getReferrer() {
setTimeout(function() {
var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);
var utmSource = urlParams.get('utm_campaign');
var utmMedium = urlParams.get('utm_source');
var utmCampaign = urlParams.get('utm_medium');

loader.engine.document.getElementById(2925815).setValue({ value: utmSource });
loader.engine.document.getElementById(2925816).setValue({ value: utmMedium });
loader.engine.document.getElementById(2925814).setValue({ value: utmCampaign });

}, 1000);}
window.onclick = getReferrer;
