
var h =  document.getElementById("header");
var n = document.getElementById("myTopNav");
var ha = document.getElementsByClassName("navLinks");
var blogo = document.getElementById('biglogo');
var mlogo = document.getElementById('smallogo');
var logoPos = 0;
var menu = document.getElementById('menu');
var maintext = document.getElementById('introText');

var pagename = document.getElementsByTagName('title')[0].innerHTML;


window.onload = function () {



if(window.pageYOffset > 300 && screen.width > 970) {
		h.classList.add("headerFixed");
		n.classList.add("topnavFix");
		blogo.style.display = 'none';
		mlogo.style.display = 'block';

		for(var i = 0; i < ha.length; i++) {
			ha[i].classList.add("nlADD");
			ha[i].style.paddingBottom = "25px";
		}
	}
else if (window.pageYOffset < 300 && screen.width > 970){
		h.classList.remove("headerFixed");
		n.classList.remove("topnavFix");
		blogo.style.display = 'block';
		mlogo.style.display = 'none';

		for(var i = 0; i < ha.length; i++) {
			ha[i].classList.remove("nlADD");
			ha[i].style.paddingBottom = "45px";
		}
	}

	if(pagename != 'Память Победы' && screen.width > 970) {

	 	for(var i = 0; i < ha.length; i++) {
 			ha[i].classList.add("nlADD");			
	 }

	}

 }

window.onscroll = function showHeader () {

	if(window.pageYOffset > 300 && screen.width > 970) {
		h.classList.add("headerFixed");
		n.classList.add("topnavFix");
		blogo.style.display = 'none';
		mlogo.style.display = 'block';

		for(var i = 0; i < ha.length; i++) {
			ha[i].classList.add("nlADD");
			ha[i].style.paddingBottom = "25px";
		}
	}
	else if (window.pageYOffset < 300 && screen.width > 970){
		h.classList.remove("headerFixed");
		n.classList.remove("topnavFix");
		blogo.style.display = 'block';
		mlogo.style.display = 'none';

		for(var i = 0; i < ha.length; i++) {
			ha[i].classList.remove("nlADD");
			ha[i].style.paddingBottom = "45px";
		}
	}
	if(pagename != 'Память Победы' && screen.width > 970) {
		h.style.background = 'white';

		for(var i = 0; i < ha.length; i++) {
			ha[i].classList.add("nlADD");
		}
	}	
	
}

var menu = document.getElementById('menu');

menu.onclick = function myFunction () {
 	var x = document.getElementById('myTopNav');
 	if (x.className === "topnav") {

 		x.classList.remove("topnav");
 		x.classList.add("responsive");
 	}
 	else {
 		x.className = "topnav";
 	} 
}




$(document).ready(function() {

  var sync1 = $("#sync1");

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
  });

});

function scrollThumb(direction) {
        if (direction=='Go_L') {
            $('.second_slider').animate({
                scrollLeft: "-=" + 315 + "px"
            }, function(){
               ('scrollPos', $('.second_slider').scrollLeft());
            });
        }else
        if (direction=='Go_R') {
            $('.second_slider').animate({
                scrollLeft: "+=" + 315 + "px"
            }, function(){
                ('scrollPos', $('.second_slider').scrollLeft());
            });
        }
       }

var photo = document.getElementById('photo-kuib');


function photoShow (act) {
	photo.style.display = act;
}

