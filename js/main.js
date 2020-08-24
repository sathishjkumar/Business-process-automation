$(document).ready(function() {
    $('.testimonials__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false,
        arrows: true,
    });

    $(document).on('click', '.browserbtn', function(e) {
        e.preventDefault();
        $('.filetype').trigger('click');
    });

    $('input[type=file]').change(function(e) {
        console.log("change");
        $('#budget').val($(this).val());
    });
});