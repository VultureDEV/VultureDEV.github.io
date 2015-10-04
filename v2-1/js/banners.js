var bannersOff = "false";

if (bannersOff == "true") {
	document.getElementById("bannerSpace").style.display = "none";
}

var bannerID = Math.floor((Math.random() * 2) + 1);

//TeamSpeak
if (bannerID == 1) {
	document.getElementById("bannerLink").href = level + "connect.html";
	document.getElementById("bannerContent").innerHTML = "<img src='" + level + "files/connect/ts.png' alt='TeamSpeak Logo' class='teamspeakBanner'><p class='teamspeakBanner'>Join our TeamSpeak!</p>";
}

//Hosting
if (bannerID == 2) {
	document.getElementById("bannerLink").href = level + "hosting.html";
	document.getElementById("bannerContent").innerHTML = "<img src='" + level + "files/hosting/ph.png' alt='ProvisionHost Logo' class='hostingBanner'><p class='hostingBanner'>Server Discounts!</p>";
}