
jQuery(function($) {

    var doAnimations = function() {

        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        if ($animatables.size() == 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 50) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});