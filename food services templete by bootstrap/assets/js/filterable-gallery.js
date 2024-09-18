$(document).ready(function(){
    // Filter functionality
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        $(".filter-button").removeClass("active");
        $(this).addClass("active");
        
        if(value == "all") {
            $(".gallery-item").show('1000');
        } else {
            $(".gallery-item").not('.'+value).hide('3000');
            $('.gallery-item').filter('.'+value).show('3000');
        }
    });

    // Scroll effect
    function showItems() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        $('.gallery-item').each(function() {
            var elementTop = $(this).offset().top;
            if (elementTop < (windowHeight + scrollTop - 100)) {
                $(this).addClass('show');
            }
        });
    }

    $(window).on('scroll', showItems);
    showItems(); // Initial check on page load
});