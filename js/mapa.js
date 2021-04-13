$(document).ready(function() {
		$('select').niceSelect();
	});

	function abrirModal(){
		$("body").addClass("modal-open");
	}
	
	function cerrarModal(){
		$("body").removeClass("modal-open");
	}
	
    $(function(){
	var curDown = false,
	  curYPos = 0,
	  curXPos = 0;
	$(window).mousemove(function(m){
	if(curDown === true){
	 $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY)); 
	 $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
	 $(".cta").fadeOut("slow");
	}
	});

	$(document).on("touchmove", function(e) {
		$(".cta").fadeOut("slow");
	});
	
	$(window).mousedown(function(m){
		if(!$("body").hasClass("modal-open")) {
			curDown = true;
			curYPos = m.pageY;
			curXPos = m.pageX;
		}
	});

	$(window).mouseup(function(){
	curDown = false;
	// $(".footer_plantilla").show();
	});
	  
	$(".unselectable").on("mousedown", function (e) {
		e.preventDefault();
		$(this).addClass("mouseDown");
	}).on("mouseup", function () {
		$(this).removeClass("mouseDown");
	});
	
	
	$(window).scroll(function() {
		var endOfPage = $(document).height() - $(window).height() - 60;
		if ($(this).scrollTop() < 30) {
			$('#unalTop').show();
			$('.login_sup').addClass('login_sup_cp');
		}
		else{
			$('#unalTop').hide();
			$('.login_sup').removeClass('login_sup_cp');
		}
		
		if($(this).scrollTop() > endOfPage) {
			$('.footer_plantilla').show();
		}
		else{
			$('.footer_plantilla').hide();
		}
	
	});
});
