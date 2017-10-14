// JavaScript Document




$(document).ready(function() {
	$("#right_arrow").click(function(){
    	var nextSlide = $('.slidep.opaque, .slidei.opaque').next();
    	var nextControl = $('.slidec.hvr-glow-selected').next();
        if($(".slidei.opaque").is($(".slidei:last"))) {
        	$('.slidep.opaque, .slidei.opaque').removeClass("opaque");
        	$('.slidec.hvr-glow-selected').removeClass("hvr-glow-selected");
        	$('.slidep:first, .slidei:first').addClass("opaque");
        	$('.slidec:first').addClass("hvr-glow-selected");
        }
        else {
        	$('.slidep.opaque, .slidei.opaque').removeClass("opaque");
        	$('.slidec.hvr-glow-selected').removeClass("hvr-glow-selected");
        	$(nextSlide).addClass("opaque");
        	$(nextControl).addClass("hvr-glow-selected");
        }
    });
});

$(document).ready(function() {
	$("#left_arrow").click(function(){
    	var prevSlide = $('.slidep.opaque, .slidei.opaque').prev();
    	var prevControl = $('.slidec.hvr-glow-selected').prev();
        if($(".slidei.opaque").is($(".slidei:first"))) {
        	$('.slidep.opaque, .slidei.opaque').removeClass("opaque");
        	$('.slidec.hvr-glow-selected').removeClass("hvr-glow-selected");
        	$('.slidep:last, .slidei:last').addClass("opaque");
        	$('.slidec:last').addClass("hvr-glow-selected");
        }
        else {
        	$('.slidep.opaque, .slidei.opaque').removeClass("opaque");
        	$('.slidec.hvr-glow-selected').removeClass("hvr-glow-selected");
        	$(prevSlide).addClass("opaque");
        	$(prevControl).addClass("hvr-glow-selected");
        }
    });
});