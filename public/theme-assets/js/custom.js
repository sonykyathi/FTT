
// WoW Animation Script

    new WOW().init();

// Header Fix Script
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("fttHead");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


// Roadmap Arrows Script
    $(document).ready(function(){
        $(".arrow__prev").click(function(){
            $("#fttTimeline").animate({scrollLeft: "-="+245});
        });
        $(".arrow__next").click(function(){
            $("#fttTimeline").animate({scrollLeft: "+="+245});
        });        
    });


// Click To Scroll Section Smooth Script
    $("#navbarSupportedContent").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });

     