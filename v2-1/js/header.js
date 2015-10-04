document.getElementById("pageHeader").innerHTML = '<img src="head/logo.png" alt="VultureSMP Logo" draggable="false" id="logo"><h1>VultureSMP</h1><div id="navButtons"><a href="index.html" id="buttonHome">Home</a><a href="about.html" id="buttonAbout">About</a><a href="members.html" id="buttonMembers">Members</a><a href="connect.html" id="buttonConnect">Connect</a><a href="download.html" id="buttonDownloads">Downloads</a><a href="hosting.html" id="buttonHosting">Hosting</a></div><a href="http://twitter.com/VultureSMP" title="@VultureSMP"><img src="head/twitter.png" alt="Twitter" draggable="false" id="headSocial1"></a><a href="http://youtube.com/VultureSMP" title="VultureSMP"><img src="head/youtube.png" alt="Twitter" draggable="false" id="headSocial2"></a>';

if (level == "../") {
	document.getElementById("pageHeader").innerHTML = '<img src="../head/logo.png" alt="VultureSMP Logo" draggable="false" id="logo"><h1>VultureSMP</h1><div id="navButtons"><a href="../index.html" id="buttonHome">Home</a><a href="../about.html" id="buttonAbout">About</a><a href="../members.html" id="buttonMembers">Members</a><a href="../connect.html" id="buttonConnect">Connect</a><a href="../download.html" id="buttonDownloads">Downloads</a><a href="../hosting.html" id="buttonHosting">Hosting</a></div><a href="http://twitter.com/VultureSMP" title="@VultureSMP"><img src="../head/twitter.png" alt="Twitter" draggable="false" id="headSocial1"></a><a href="http://youtube.com/VultureSMP" title="VultureSMP"><img src="../head/youtube.png" alt="Twitter" draggable="false" id="headSocial2"></a>';
}
	
if (pageID == "home") {
	document.getElementById("buttonHome").className = "selectedPage";
}

if (pageID == "about") {
	document.getElementById("buttonAbout").className = "selectedPage";
}

if (pageID == "members") {
	document.getElementById("buttonMembers").className = "selectedPage";
}

if (pageID == "connect") {
	document.getElementById("buttonConnect").className = "selectedPage";
}

if (pageID == "downloads") {
	document.getElementById("buttonDownloads").className = "selectedPage";
}

if (pageID == "hosting") {
	document.getElementById("buttonHosting").className = "selectedPage";
}

window.onload = setTimeout(loadFooter);

function loadFooter() {
	document.getElementById("pageFooter").innerHTML = "<p>&copy VultureSMP, 2015 | Website design, code and media property of <a href='mailto:contact@vulturesmp.com?subject=Enquiry%20from%20website' title='Mail VultureSMP'>VultureSMP</a> | Designed and written by <a href='mailto:calebs2500@gmail.com?subject=Enquiry%20from%20vulturesmp.com' title='Mail Caleb Stewart'>Caleb Stewart</a></p>";
}

window.onload = setTimeout(calcFooter);
var footerRecalc;

function calcFooter() {
	var footerHeight = document.getElementById("pageFooter").clientHeight;
	document.getElementById("content").style.marginBottom = 20 + footerHeight + "px";
	footerRecalc = setTimeout(calcFooter,100);
}