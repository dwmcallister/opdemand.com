$(function(){
	var n1 = "";
	var count = 0;
	var temp;

	$('.hover-trigger, .menu-hover').hover(menu_open, menu_close);

	function menu_open() {
		$('.menu-hover').css('visibility', 'visible');
		console.log("In");
	}
	
	function menu_close() {
		$('.menu-hover').css('visibility', 'hidden');
		console.log("Out");
	}

	$('.wpcf7-form-control').focus(function(){
		if($(this).attr('placeholder') != ""){
			temp = $(this).attr('placeholder');
			$(this).attr('tempTest', temp);
		}
		$(this).attr('placeholder', '');
	});

	$('.wpcf7-form-control').keypress(function(event){
		n1 += String.fromCharCode(event.which);
	});

	$('.wpcf7-form-control').blur(function(){
		$(this).attr('inputTest', n1);
		if($(this).attr('inputTest') == "") {$(this).attr('placeholder', $(this).attr('tempTest')  );}
		n1 = ""
		$(this).attr('inputTest', '');
	});

	$('.menu-hover > a').on('touchend', function(e) {
	    var el = $(this);
	    var link = el.attr('href');
	    window.location = link;
	});
});
