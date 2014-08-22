// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {

	// Current Slide, 1, 2, 3 or 4
	// var step = checkPageHashStep();
	var step = 1;

	// console.log(checkPageHashStep());
	checkState(step);

	// Selectors
	var $prev = $('.c--prev');
	var $next = $('.c--next');

	// setPageHash(checkPageHashStep());

	$next.on('click', function(event){
		event.preventDefault();

		if (step < 4) {
			++step; // step = step + 1;
			console.log(step)
			checkState(step);
		}
	});

	$prev.on('click', function(event){
		event.preventDefault();

		if (step > 1) {
			--step; // step = step + 1;
			console.log(step)
			checkState(step);
		}
	});

	completeLiveEvent();
	selectObject()
	getPeople()
	getTimeDate()
	changeUstream()
});

// Sets the overall state to show the current Slide
function checkState(step){
	if (!step) {
		console.log('This requires a step')
	}
	checkNav(step);
	checkProgress(step);
	checkSlide(step);
	// setPageHash(step);
};

// Reads the Page Hash to find the current Slide
function checkPageHashStep(){
	return location.hash.replace('#/slide/', '') || 1;
};

// Changes the Page Hash to reflect the current slide
function setPageHash(step){
	location.hash = '/slide/' + step;
};

function checkSlide(step) {
	var $slide = $('.create-slide');

	$slide.each(function(index, element){
		if (index === step - 1 ) {
			$(element)
				.addClass('-show')
				.removeClass('-hide')
		} else {
			$(element)
				.addClass('-hide')
				.removeClass('-show');
		}
	});
};

function checkProgress(step) {
	var $indicator = $('.c--indicator .c--progress-item');

	$indicator.each(function(index, element){
	    if (index <= step - 1 ) {
			$(element)
				.addClass('c--done')
				.removeClass('c--todo')
		} else {
			$(element)
				.addClass('c--todo')
				.removeClass('c--done');
		}
    });
};

function checkNav(step){
	var $prev = $('.c--prev');
	var $next = $('.c--next');

	if (step === 1){
		$prev.css({ opacity: '0.2' });
	} else {
		$prev.css({ opacity: '1' });
	}
	if (step === 4){
		$next.text('Finish');
	}
};


// ==========================================================================
// Live Event
// ==========================================================================

function postComment(){
	$('.f-post-live-comment').on( 'submit', function( event ){
		console.log( 'this is lame' );
	});
};

postComment()


// kill the message box with one swift click. 
// this needs a check before it just delets the comment

function closeMessage(){
	 var $close = $('.live-post-comment .c--close');

	 $close.click(function(){
	 	$(this).closest('.live-post-comment').fadeOut( "700", function(){

	 	});
	 });
};

closeMessage();


// Close the live show
function completeLiveEvent() {

	var $completeLink = $('.live-event-end');

	$('.live-event-completed').hide();

	$('.live-complete-true').click(function(){
		$('#event-complete-modal').foundation('reveal', 'close');
		$('.live-event-completed').fadeIn( "700", function(){});
		$completeLink.css({opacity: '0.5', cursor: 'default'})
		$completeLink.text('Live Event Over');
		$completeLink.click(function(){
			return false;
		});
	});
};


// ==========================================================================
// Create Event
// ==========================================================================

function encodeFormString(str) {
	var nameIndex = str.indexOf("=");
	str = decodeURIComponent(str);
	str = str.substr(nameIndex+1);
	return str.split("+").join(" ");
};

function selectObject() {
	
	$('.event-choose-link').click(function() {
	  event.preventDefault();
	  $(this.parentNode).toggleClass('selected ');

	  if ($(this.parentNode).hasClass('selected')) {
            $(this).text('Remove');                
        } else {
        	$(this).text('Choose');                
        }
	}); 
};

function getPeople() {
 	
 	$('.people-added').hide();

	$('.f-get-individuals').on( 'submit', function( event ) {
		event.preventDefault();
	 	$('.people-added').fadeIn( "200", function(){});
		$('.people-added ul.inline-list').append('<li class="panel">' + encodeFormString($(this).serialize()) + '</li>');
		$(this).find("input[type=email], select").val("");
		$(this).validate();
	});
};

function getTimeDate() {

	$('.c-event-show-date-time').hide();

	$('.f-set-time-date').on( 'submit', function( event ){
		event.preventDefault();
		$('.c-event-show-date-time').fadeIn( "200", function(){});
		var field1 = $("[name='eventTitle']").serialize();
		var field2 = $("[name='eventTime']").serialize();
		var field3 = $("[name='eventDate']").serialize();
		$('h5.c-event-title strong').text( encodeFormString( field1 ) );
		$('h5.c-event-time strong').text( encodeFormString( field2 ) );
		$('h5.c-event-date strong').text( encodeFormString( field3 ) );
		$('.f-set-time-date button').prop('disabled',true);
		$(this).find("input[type=text], select").val("");
		$(this).validate();
	});
};

function changeUstream() {

	$('.f-change-ustream-embed').on( 'submit', function( event ){
		var ustreamEmbed = $(this).serialize();
		event.preventDefault();
		ustreamEmbed = decodeURIComponent(ustreamEmbed).split('</iframe>')[0];
		console.log(encodeFormString(ustreamEmbed) );
		$('.create-update-ustream iframe').replaceWith( encodeFormString(ustreamEmbed) );
		$(this).validate();	
	});
};

// ==========================================================================
// Date Picker
// ==========================================================================

$(function() {
    $( "#datepicker" ).datepicker();
 });






