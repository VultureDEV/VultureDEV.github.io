var adsOff = "false";

if (adsOff == "true") {
	document.getElementById("adSpace").style.display = "none";
}

var adID = Math.floor((Math.random() * 2) + 1);

//TeamSpeak
if (adID == 1) {
	document.getElementById("adLink").href = level + "connect.html";
	document.getElementById("adContent").innerHTML = "<img src='" + level + "files/connect/ts.png' alt='TeamSpeak Logo' class='teamspeakAd'><p class='teamspeakAd'>Join our TeamSpeak!</p>";
}

//Hosting
if (adID == 2) {
	document.getElementById("adLink").href = level + "hosting.html";
	document.getElementById("adContent").innerHTML = "<img src='" + level + "files/hosting/ph.png' alt='ProvisionHost Logo' class='hostingAd'><p class='hostingAd'>Server Discounts!</p>";
}