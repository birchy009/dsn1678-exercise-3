var sales1 = $('.sales1');
var sales2 = $('.sales2');
var salesDetails1 = $('.sales__details1');
var salesDetails2 = $('.sales__details2');

var buttonClickHandler1 = function () {
	var currentState = salesDetails1.attr('data-state');
	if (currentState == 'active') {
		salesDetails1.attr('data-state', 'inactive');
	} else {
		salesDetails1.attr('data-state', 'active');
	}
};

var buttonClickHandler2 = function () {
	var currentState = salesDetails2.attr('data-state');
	if (currentState == 'active') {
		salesDetails2.attr('data-state', 'inactive');
	} else {
		salesDetails2.attr('data-state', 'active');
	}
};

sales1.on('click', buttonClickHandler1);
sales2.on('click', buttonClickHandler2);