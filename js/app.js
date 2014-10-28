/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavlinks = $('nav a');

//select all imgs
var allImgs = $('img');

//select all sections
var allSections = $('section');


function onReady() {
	$('nav').slideUp();
	$('nav').slideDown();
	allSections.hide();
	
	$('#exit-button').dblclick(function() {
		//show the modal to the world!
		$('#confirm-exit-modal').modal();		
	});
	
	$('#confirm-exit-button').click(function() {
		window.location.href="http://courses.washington.edu/info343/morris/";
	});
}

allImgs.hover(function() {
	console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavlinks.click(function() {
	//the cooler jQuery this - it's totally money
	console.log($(this).attr('href'));
	
	//the plain version of this...it's ok.
	console.log(this);
	
	//acts on the jQuery object containing this element
	//$(this).addClass('awesomesauce');
	
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
});

$(onReady);