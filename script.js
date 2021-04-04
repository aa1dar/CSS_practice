$(document).ready(function() {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });

	// Switching product photos on product list preview page
	$('.colblocks .block1').hover(function() {
        $(this).find('img').toggleClass('none');
    });




});