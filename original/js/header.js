console.log("header.js file loaded");
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('div#header').addClass("isScrolled");
  }
  else{
    $('div#header').removeClass("isScrolled");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('p#pageHeading').addClass("isScrolled");
  }
  else{
    $('p#pageHeading').removeClass("isScrolled");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('div#navButtons').addClass("isScrolled");
  }
  else{
    $('div#navButtons').removeClass("isScrolled");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('img#twitterSocial').addClass("isScrolled");
  }
  else{
    $('img#twitterSocial').removeClass("isScrolled");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('img#twitterBotSocial').addClass("isScrolled");
  }
  else{
    $('img#twitterBotSocial').removeClass("isScrolled");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('img#headerLogo').addClass("isScrolled");
  }
  else{
    $('img#headerLogo').removeClass("isScrolled");
  }
});
