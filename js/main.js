var salesLeft = $('.sales-left');
var salesRight = $('.sales-right');
var salesDetailsLeft = $('.sales__details-left');
var salesDetailsRight = $('.sales__details-right');

var buttonClickHandlerLeft = function () {
	var currentState = salesDetailsLeft.attr('data-state');
	if (currentState == 'active') {
		salesDetailsLeft.attr('data-state', 'inactive');
	} else {
		salesDetailsLeft.attr('data-state', 'active');
	}
};

var buttonClickHandlerRight = function () {
	var currentState = salesDetailsRight.attr('data-state');
	if (currentState == 'active') {
		salesDetailsRight.attr('data-state', 'inactive');
	} else {
		salesDetailsRight.attr('data-state', 'active');
	}
};

salesLeft.on('click', buttonClickHandlerLeft);
salesRight.on('click', buttonClickHandlerRight);