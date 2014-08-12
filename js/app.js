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
}

// Changes the Page Hash to reflect the current slide
function setPageHash(step){
	location.hash = '/slide/' + step;
}

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
}

function checkProgress(step) {
	var $indicator = $('.c--indicator li');

	$indicator.each(function(index, element){
	    if (index <= step - 1 ) {
			$(element)
				.addClass('indicator-done')
				.removeClass('indicator-todo')
		} else {
			$(element)
				.addClass('indicator-todo')
				.removeClass('indicator-done');
		}
    });
}

function checkNav(step){
	var $prev = $('.c--prev');
	var $next = $('.c--next');

	if (step === 1){
		$prev.css({ visibility: 'hidden' });
	} else {
		$prev.css({ visibility: 'visible' });
	}
	if (step === 4){
		$next.text('Finish');
	}
}
