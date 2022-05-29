$(document).ready(function () {
    //Modal
    $('[data-modal=form]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation').fadeOut('slow');
    });

});
 