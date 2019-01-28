$(document).ready(function() {

	//плавный переход по ссылке

	$('a[href^="#"]').click(function () {

		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		
		$('html').animate( { scrollTop: destination }, 1100 );
		
		return false;
	});
});
