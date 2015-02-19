$(document).ready(function() {

    animateCenter();

    $("#backToStart").on("click", function() {
        transition_showStart();
    });
});

function animateCenter() {
    $(".animatedBackground").animate({
        marginTop: "0px"
    }, {
        duration: 2000,
        easing: 'easeOutBounce',
        complete: function() {
            startSwimming();
            animateFooter();
        }
    });
}

function animateFooter() {
    $("footer").fadeIn(1500);
}

function transition_hideStart() {
    
    //stop and hide the dolphin
    stopDolphin();
    
    //fadeout to all centered items
    $(".animatedBackground").fadeOut(1000);
    
    //show the header
    $("header").delay(1000).fadeIn(1000);
    //hide the padding div called marginTop
    $("#marginTop").delay(1000).fadeOut(1); // Needed to change hide() for fadeOut(1). Don't ask me why =)
    
    //show the background and the centered area
    $(".navigation").delay(1000).fadeIn(1000);
}

function transition_showStart() {
    
    //creates a margin top for the relative content
    $("#marginTop").show();
    
    //shows the background only with fadeIn
    $(".animatedBackground").delay(1000).fadeIn(1000);
    
    //hides the header
    $("header").fadeOut(1000);
    
    //hides the navigation content
    $(".navigation").fadeOut(1000);
    
    //drop the dolphin there again
    startSwimming();
}