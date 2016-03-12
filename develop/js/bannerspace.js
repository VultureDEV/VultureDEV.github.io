window.onload = setTimeout(bannerAutoDisplay);

var expandBannerTimer;
var shrinkBannerTimer;

function bannerAutoDisplay() {
	expandBannerTimer = setTimeout(expandBannerAuto,10000);
	shrinkBannerTimer = setTimeout(shrinkBanner,15000);
}

function expandBannerAuto() {
	document.getElementById("bannerSpace").style.right = "-1px";
	document.getElementById("arrowTop").style.transform = "rotate(45deg)";
	document.getElementById("arrowBottom").style.transform = "rotate(135deg)";
	document.getElementById("bannerSpaceDisplay").onclick = shrinkBanner;
	document.getElementById("arrowTop").onclick = shrinkBanner;
	document.getElementById("arrowBottom").onclick = shrinkBanner;
}

function expandBanner() {
	document.getElementById("bannerSpace").style.right = "-1px";
	document.getElementById("arrowTop").style.transform = "rotate(45deg)";
	document.getElementById("arrowBottom").style.transform = "rotate(135deg)";
	document.getElementById("bannerSpaceDisplay").onclick = shrinkBanner;
	document.getElementById("arrowTop").onclick = shrinkBanner;
	document.getElementById("arrowBottom").onclick = shrinkBanner;
	clearTimeout(expandBannerTimer);
	clearTimeout(shrinkBannerTimer);
}

function shrinkBanner() {
	document.getElementById("bannerSpace").style.right = "-201px";
	document.getElementById("arrowTop").style.transform = "rotate(135deg)";
	document.getElementById("arrowBottom").style.transform = "rotate(45deg)";
	document.getElementById("bannerSpaceDisplay").onclick = expandBanner;
	document.getElementById("arrowTop").onclick = expandBanner;
	document.getElementById("arrowBottom").onclick = expandBanner;
}

function arrowHover() {
	document.getElementById("bannerSpaceDisplay").style.background = "rgba(130,157,138,1)";
	document.getElementById("arrowTop").style.background = "#ccd7d9";
	document.getElementById("arrowBottom").style.background = "#ccd7d9";
}

function arrowHoverOut() {
	document.getElementById("bannerSpaceDisplay").style.background = "rgba(130,157,138,0.5)";
	document.getElementById("arrowTop").style.background = "rgba(130,157,138,1)";
	document.getElementById("arrowBottom").style.background = "rgba(130,157,138,1)";
}
