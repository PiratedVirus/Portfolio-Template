$(function(){
	smoothscroll(1000);
	workbelt();
	workload();
	clientstuff();

	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	// $(".biglink").fitText(1.5);

	$('textarea').autosize();
});

function smoothscroll (duration){
	$('a[href^="#"]').on("click", function(event){

		var target = $( $(this).attr('href') );
		console.log(target.length);
		if( target.length ){
			event.preventDefault();
			$('html,body').animate({
				scrollTop:target.offset().top
			},duration);
		}
	});
}

function workbelt() {

	$('.thumb-unit').click(function(){

		$('.work-belt').css('left','-100%')
		$('.work-container').show();
	});

	$('.work-return').click(function(){

		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});

}

function workload(){
	$.ajaxSetup ({ cache: true });

	$('.thumb-unit').click( function(){
		var $this = $(this);
		var spinner ='<div class="loader">Loading...</div>';
		var newFolder = $this.data('folder');
		console.log(newFolder);
        var newHTML = 'work/'+ newFolder+'.html';
		var title   = $this.find('strong').text();

	    $('.project-load').html(spinner).load(newHTML);
	    $('.project-title').html(title);
	});
}

function clientstuff(){
	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-client');
	// $('.client-button').first().addClass('active-client');


	 $('.client-logo, .client-button').click( function(){
		var $this = $(this);
		var $siblings = $this.parent().children();
		var position = $siblings.index($this);
		console.log("jay ho");
	 	$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
	 	$('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
		$('.clients-mobile-nav span').removeClass('active-client').eq(position).addClass('active-client')

	 });
	 
	$('.client-control-next').click( function(){

		var $this = $(this),
			curActiveClient = $('.clients-belt').find('.active-client'),
			pos = $('.clients-belt').children().index(curActiveClient),
			clientNum = $('.client-unit').length;

		if(pos < clientNum -1 ){
			$('.active-client').removeClass('active-client').next().addClass('active-client');				
		}else{
			$('.client-unit').removeClass('active-client').first().addClass('active-client');
			$('.client-logo').removeClass('active-client').first().addClass('active-client')
		}


		
	});
	$('.client-control-prev').click( function(){
		
		var $this = $(this),
			curActiveClient = $('.clients-belt').find('.active-client'),
			pos = $('.clients-belt').children().index(curActiveClient),
			clientNum = $('.client-unit').length;
		if(pos===0){
			$('.client-unit').removeClass('active-client').last().addClass('active-client');
			$('.client-logo').removeClass('active-client').last().addClass('active-client')						
		}else{
			$('.active-client').removeClass('active-client').prev().addClass('active-client');
		}
		
	});
}
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );





























