// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	// $( "#datepicker" ).datepicker();

	// Current Slide, 1, 2, 3 or 4
	// var step = checkPageHashStep();
	var step = 1;

	console.log(checkPageHashStep());
	// checkState(step);

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

// // kill the message box with one swift click. 
// // this needs a check before it just delets the comment
// function closeMessage(){
// 	 var $close = $('.live-post-comment .c--close');

// 	 $close.click(function(){
// 	 	$('.live-post-comment').hide();
// 	 });
// };

// closeMessage();


// close the live show down

function completeLiveEvent() {

	var $completeLink = $('.live-event-end');

	$('.live-event-completed').hide();

	$('.live-complete-true').click(function(){
		$('#event-complete-modal').foundation('reveal', 'close');
		$('.live-event-completed').show();
		$completeLink.css({opacity: '0.5', cursor: 'default'})
		$completeLink.text('Live Event Over');
		$completeLink.click(function(){
			return false;
		});
	});
};

completeLiveEvent();



