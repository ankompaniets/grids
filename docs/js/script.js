$(document).ready(function() {

	//плавный переход по ссылке

	$('a[href^="#"]').click(function () {

		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		
		$('html').animate( { scrollTop: destination }, 1100 );
		
		return false;
	});

	//динамика меню на мобильном

	$('.js-header__nav-toggle').click(function () {

		$(this).toggleClass('header__nav-toggle--active');

		$('.header__nav').toggle('fast');
	});

	$(document).mouseup(function (e){

		var menu = $('.header__nav'),
			menuBtn = $('.header__nav-toggle');

		if (!menuBtn.is(e.target) &&
			menuBtn.has(e.target).length === 0 && 
			!menu.is(e.target) && 
			menu.has(e.target).length === 0) {

			menu.hide('fast');
			menuBtn.removeClass('header__nav-toggle--active');
		}
	});

	//появление блока header__nav при ресайзе и возвращение header__nav-toggle в неактивное состояние

	$( window ).resize(function() {
	  if (window.matchMedia('(min-width: 769px)').matches) {
	  	$('.header__nav').css('display', 'grid');
	  	$('.js-header__nav-toggle').removeClass('header__nav-toggle--active');
	  } 
	  else {
	  	$('.header__nav').removeAttr('style');
	  }
	});
});
