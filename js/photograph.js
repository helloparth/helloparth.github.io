

$(document).ready(function() {

// set photo banner hieght to container
// jQuery(function($) {

//             //$('body').panelSnap();
//             //$('.album_covers').panelSnap();
//             // $('.album_covers').panelSnap();      
//             $('.embed-container').panelSnap();

//         });

//$('body').panelSnap();

var banner_height = $('.embed-container').css("height");
console.log("banner height is " + banner_height);

var screen_width = ($(window).width()*0.95).toString();
console.log(screen_width);

$('.album_covers').click(function() {
var flickr_album = $(this).next();

	// Slide photo banners
	if($(this).hasClass('slid')){
	$(this).animate({"left": '-='.concat(screen_width)}, 1000, "easeOutCirc");
	$(this).removeClass('slid');
	$(this).addClass('hvr-bubble-float-left');
	$(this).removeClass('hvr-bubble-float-right');


	console.log('lefted');
	} else{

	$(this).animate({"left":'+='.concat(screen_width)}, 1000, "easeOutBounce");
	$(this).addClass('slid');
	$(this).removeClass('hvr-bubble-float-left');
	$(this).addClass('hvr-bubble-float-right');


	console.log('righted' + screen_width);
	}

});




 console.log("toggled");




});

//  function openSidepage() {
//  $('#mainpage').animate({
//   left: '350px'
//  }, 400, 'easeOutBack'); 
// };


// function closeSidepage(){
//  $("#navigation li a").removeClass("open");
//  $('#mainpage').animate({
//   left: '0px'
//  }, 400, 'easeOutQuint'); 
// };
// $('#Parth').click(function(){
// 	$(this).toggle("clip", {direction: "right"});
//  //    $(this).toggle("slide", { direction: "right" }, 50);
//  //    $(this).toggle("slide", { direction: "left" }, 50);
//     console.log("toggled");
// });

