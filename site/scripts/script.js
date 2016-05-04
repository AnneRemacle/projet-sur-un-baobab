( function($) {

    "use strict";

    /*
    1) tu cliques sur la fleche, la photo suivante s'affiche
    */

    $('.pictures__previous').first().on('click', function(e){
        $('.pictures__cadre').css('left', '-35%');
    })
} )(jQuery);
