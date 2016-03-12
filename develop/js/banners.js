var bannersOff = "false";

if (bannersOff == "true") {
	document.getElementById("bannerSpace").style.display = "none";
}

var bannerID = Math.floor((Math.random() * 4) + 1);
//var bannerID = 3; //Debug Only
	
//TeamSpeak
if (bannerID == 1) {
	document.getElementById("bannerLink").href = level + "connect.html";
	document.getElementById("bannerContent").innerHTML = "<img src='" + level + "files/connect/ts.png' alt='TeamSpeak Logo' class='teamspeakBanner'><p class='teamspeakBanner'>Join our TeamSpeak!</p>";
}

//Hosting
/*if (bannerID == 2 || bannerID == 3) {
	document.getElementById("bannerLink").href = level + "hosting.html";
	document.getElementById("bannerContent").innerHTML = "<img src='" + level + "files/hosting/ph.png' alt='ProvisionHost Logo' class='hostingBanner'><p class='hostingBanner'>Server Discounts!</p>";
}*/

//Twitter
if (bannerID == 2) {
	document.getElementById("bannerLink").href = "https://twitter.com/VultureSMP";
	document.getElementById("bannerContent").innerHTML = "<img src='" + level + "files/connect/twitter.png' alt='Twitter Logo' class='twitterBanner'><p class='twitterBanner'>Follow us on Twitter for updates!</p>";
}

if(bannerID == 3 || bannerID == 4) {
	document.getElementById("bannerLink").href = "https://www.youtube.com/playlist?list=PLW7QbvSueDNJWvFxmUV0GrTnodAWtWB5M";
	document.getElementById("bannerLink").target = "_blank";
	document.getElementById("bannerContent").innerHTML = "<img src='" + level + "files/connect/youtube.png' alt='YouTube Logo' class='playlistBanner'><p class='playlistBanner'>Season 2 has begun!</p>";
}
	