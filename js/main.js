;(function () {
	
	'use strict';

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	// Video BG
	var videoBG = function() {
		if (navigator.userAgent.match(/Android/i)
	    	|| navigator.userAgent.match(/webOS/i)
	    	|| navigator.userAgent.match(/iPhone/i) 
	    	|| navigator.userAgent.match(/iPad/i) 
	    	|| navigator.userAgent.match(/iPod/i)
	    	|| navigator.userAgent.match(/BlackBerry/i)
	    	|| navigator.userAgent.match(/Windows Phone/i)) {
			$('#seccion-portada').removeProp('background-image');
			$('#myVideo').remove();
		} else {
			$('#seccion-invitación').removeProp('background-image');
			$('#escuela').css('margin-top','180px');
			}
	};

	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
			
				$(this.element).addClass('fadeInUp animated');
			
			}

		} , { offset: '75%' } );

	};

	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};


	// Set the date we're counting down to
		var countDownDate = new Date("Sep 29, 2022 10:30:00").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in an element with id="demo"
		document.getElementById("days").innerHTML = days +" <small>DÍAS</small>";
		document.getElementById("hours").innerHTML = hours + " <small>HORAS</small> ";
		document.getElementById("minutes").innerHTML = minutes + " <small>MINUTOS</small> ";
		document.getElementById("seconds").innerHTML = seconds + " <small>SEGUNDOS</small> ";

		// If the count down is finished, write some text 
		if (distance < 0) {
		 clearInterval(x);
		 document.getElementById("demo").innerHTML = "La Ceremonia de Graduación finalizó";
		}
		}, 1000);




	// magnific popup
	  $('.popup-youtube, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
  	});




	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
	

	// Document on load.
	$(function(){
		fullHeight();
		videoBG();
		contentWayPoint();
	});


}());