window.onload = setTimeout(adAutoDisplay);
window.onload = setTimeout(adAutoHide);

var expandAdTimer;
var shrinkAdTimer;

function adAutoDisplay() {
	expandAdTimer = setTimeout(expandAdAuto,10000);
	shrinkAdTimer = setTimeout(shrinkAd,15000);
}

function expandAdAuto() {
	document.getElementById("adSpace").style.right = "-1px";
	document.getElementById("arrowTop").style.transform = "rotate(45deg)";
	document.getElementById("arrowBottom").style.transform = "rotate(135deg)";
	document.getElementById("adSpaceDisplay").onclick = shrinkAd;
	document.getElementById("arrowTop").onclick = shrinkAd;
	document.getElementById("arrowBottom").onclick = shrinkAd;
}

function expandAd() {
	document.getElementById("adSpace").style.right = "-1px";
	document.getElementById("arrowTop").style.transform = "rotate(45deg)";
	document.getElementById("arrowBottom").style.transform = "rotate(135deg)";
	document.getElementById("adSpaceDisplay").onclick = shrinkAd;
	document.getElementById("arrowTop").onclick = shrinkAd;
	document.getElementById("arrowBottom").onclick = shrinkAd;
	clearTimeout(expandAdTimer);
	clearTimeout(shrinkAdTimer);
}

function shrinkAd() {
	document.getElementById("adSpace").style.right = "-201px";
	document.getElementById("arrowTop").style.transform = "rotate(135deg)";
	document.getElementById("arrowBottom").style.transform = "rotate(45deg)";
	document.getElementById("adSpaceDisplay").onclick = expandAd;
	document.getElementById("arrowTop").onclick = expandAd;
	document.getElementById("arrowBottom").onclick = expandAd;
}

function arrowHover() {
	document.getElementById("adSpaceDisplay").style.background = "rgba(130,157,138,1)";
	document.getElementById("arrowTop").style.background = "#ccd7d9";
	document.getElementById("arrowBottom").style.background = "#ccd7d9";
}

function arrowHoverOut() {
	document.getElementById("adSpaceDisplay").style.background = "rgba(130,157,138,0.5)";
	document.getElementById("arrowTop").style.background = "rgba(130,157,138,1)";
	document.getElementById("arrowBottom").style.background = "rgba(130,157,138,1)";
}
