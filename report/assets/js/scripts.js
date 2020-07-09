/*!
 * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // request api
    $.ajax({
        type: "get",
        url: 'rest.php',
        dataType: "json",
        success: function(response) {
            if (!response.error) {
                let data = response.data,
                    element = ''
                data.forEach(print => {
                    element += `<a href="./${print.link}" class="text-decoration-none"><div class="d-flex flex-column flex-md-row justify-content-between mb-5">
<div class="flex-grow-1">
    <h3 class="mb-3">${print.name}</h3>
    <p class="mb-1">${print.detail}</p>
    <span href="#" class="mt-n5">silahkan klik disini !</span>
</div>
</div></a>`
                });
                $('#list-report').html(element)
            } else
                $('#list-report').html(`<p class="text-secondary">${response.message}</p>`)
        }
    });
})(jQuery); // End of use strict