/* Very straightforward and stupid removal of tags from korrespondent.net */

var videoad = document.getElementById("videoad");
var videoadpos = document.getElementById("videoadpos");

if (videoad) {
    videoad.parentNode.removeChild(videoad);
}

if (videoadpos) {
    videoadpos.parentNode.removeChild(videoadpos);
}


