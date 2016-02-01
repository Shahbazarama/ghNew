var easingsList = [
"swing",
"easeInQuad",
"easeOutQuad",
"easeInOutQuad",
"easeInCubic",
"easeOutCubic",
"easeInOutCubic",
"easeInQuart",
"easeOutQuart",
"easeInOutQuart",
"easeInQuint",
"easeOutQuint",
"easeInOutQuint",
"easeInSine",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElastic",
"easeOutElastic",
"easeInOutElastic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];

var moveRight = function(){
  var d = parseInt($("#delay").val());

  var n = 0;
  var e = easingsList[n];
  moveBoxRight(n, e, d);

  var n = 1;
  var e = easingsList[n];
  moveBoxRight(n, e, d);



}

var moveLeft = function(){
}

var hideBoxes = function(){
  var selection = parseInt($("#jqoption").val())
  if(selection == 0){
    $(".button").fadeOut();
  }
  else if(selection == 1){
    $(".button").fadeToggle();
  }
  else if(selection == 2){
    $(".button").slideToggle();
  }
  else if(selection == 3){
    $(".button").toggle();
  }
  else if(selection == 4){
    $(".button").slideUp();
  }
  else if(selection == 5){
    $(".button").hide();
  }
  else{
    $(".button").animate({opacity:0});
  }

}

var showBoxes = function(){
  //$(".button").fadeIn();
  //$(".button").fadeToggle();
  //$(".button").slideToggle();
  //$(".button").toggle();
  //$(".button").slideDown();
  //$(".button").show();
  $(".button").animate({opacity:1});
}

var moveBoxRight= function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left":pageWidth-boxWidth + "px"}, duration, easing); 
}

var moveBoxLeft= function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left" : "0px"}, duration, easing); 
}