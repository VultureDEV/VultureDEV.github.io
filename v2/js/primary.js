$(window).scroll(function() {
			if ($(this).scrollTop() > 1){  
				$('header, img#logo, h1, #headSocial1, #headSocial2, #navButtons').addClass("isScrolled");
			}
			else{
				$('header, img#logo, h1, #headSocial1, #headSocial2, #navButtons').removeClass("isScrolled");
			}
		});
	
window.onload = setTimeout(expandDivider,1000);

function expandDivider() {
	document.getElementById("h2Divider").style.width = "100%";
	document.getElementById("h2").style.opacity = "1";
	document.getElementById("h2").style.top = "0";
}