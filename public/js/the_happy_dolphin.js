$(document).ready(function() {
    $("#dolphinAura").on('click', function() {
        clickDolphin();
    });
});

//Margins from all sides
var swimmingMarginHeight = 30;
var swimmingMarginWidth = 80;

// defines the first direction of the dolphin arbitrarily
var dolphinDirection = 1;

// the baloon has a diference in the point of start compared to the dolphin
var baloonGap = 130;

//Which was the last sentence used? I don't want it to repeat.
var lastSentence = 0;
var sentences = [
    "TUM DUM TUM DUM... just kidding, I am a dolphin *.*",
    "Ouch! Stop it!",
    "What? Do you think i don't know where I am going? Actually I dont :T",
    "OPA Gangnman Style!",
    "What if i was a shark? Would you touch it too? u.u"
];

//Flag variable which means that the infinite swimming function should stop
var stopSwimming = false;
/* 
 * Function that is called at first. Responsible to start the animation
 */
function startSwimming(first) {
    
    //in case of return to the main screen, we have to handle the fragments from the last running
    if ($("#TSD").attr("class") === "TSDdirection1"){
        dolphinDirection = 1;
    } else if ($("#TSD").attr("class") === "TSDdirection-1"){
        dolphinDirection = -1;
    }

    //Please, don't stop swimming
    stopSwimming = false;
    
    // the right/down starting point of the "swimming screen"
    // the left/up starting point of the "swimming screen"
    
    marginHeight = $("#marginTop").height();

    swimmingMinWidth = 0 + swimmingMarginWidth;
    swimmingMinHeight = marginHeight + swimmingMarginHeight;
    swimmingMaxWidth = parseInt($(".animatedBackground").width()) - swimmingMarginWidth;
    swimmingMaxHeight = marginHeight + 300 - swimmingMarginHeight;

    // get two random points in the swimming screen area
    widthRandom = getRandomInt(swimmingMinWidth, swimmingMaxWidth);
    heightRandom = getRandomInt(swimmingMinHeight, swimmingMaxHeight);
    
    //position the pseudo-shark
    $("#TSD").css({left: widthRandom + "px"});
    $("#TSD").css({top: heightRandom + "px"});
    $("#speechBaloon").css({left: widthRandom - baloonGap + "px"});
    $("#speechBaloon").css({top: heightRandom - baloonGap + "px"});
    $("#dolphinAura").css({left: widthRandom + "px"});
    $("#dolphinAura").css({top: heightRandom + "px"});
    //wait for a bit and show the fin
    $("#TSD").delay(1000).fadeIn(1000);
    //there is a need for wainting things to get it all synchronized
    $("#speechBaloon").delay(2000);
    $("#dolphinAura").delay(2000);
    $("#dolphinAura").css({
        display: "inline"
    });

    //start the animation
    nextMove(widthRandom, heightRandom);
}

/* 
 * Kind of a recursive function to make the pseudo-shark move randomly
 */
function nextMove(currentWidth, currentHeight) {
    //alert(currentWidth + " " + currentHeight);
    // the right/down starting point of the "swimming screen"
    // has to be refreshed ever command, to prevent resizing bugs
    swimmingMaxWidth = parseInt($(".animatedBackground").width()) - swimmingMarginWidth;
    marginHeight = $("#marginTop").height();
    //alert(marginHeight);
    swimmingMaxHeight = marginHeight + 300 - swimmingMarginHeight;

    // get two random points in the swimming screen area
    widthRandom = getRandomInt(swimmingMinWidth, swimmingMaxWidth);
    heightRandom = getRandomInt(swimmingMinHeight, swimmingMaxHeight);

    //We dont want the dolphin swimming vertically, so we put a minimum quantity of movement in x axis
    while (Math.abs(widthRandom - currentWidth) < 80)
        widthRandom = getRandomInt(swimmingMinWidth, swimmingMaxWidth);

    // just check if the dolphin need to be rotated
    rotateDolphin(currentWidth, widthRandom);

    animationSpeed = calculateSpeed(distanceBetweenTwoPoints(currentWidth, currentHeight, widthRandom, heightRandom));

    //lets move it!
    //everything gonna move together, but only the "Dolphin aura" ia shown by default. The dolphin aura is a invisible DIV that has the same size of the image that makes the mage clickable even in the case it is under some element
    if (stopSwimming === false) {
        $("#speechBaloon").animate({top: heightRandom - baloonGap, left: widthRandom - baloonGap}, {duration: animationSpeed, easing: 'linear'});
        $("#dolphinAura").animate({top: heightRandom, left: widthRandom}, {duration: animationSpeed, easing: 'linear'});
        $("#TSD").animate({top: heightRandom, left: widthRandom}, {duration: animationSpeed, easing: 'linear', complete:
                    function() {
                        //JavaScript is single threaded. You need to make it breath.
                        setTimeout(
                                function() {
                                    nextMove(widthRandom, heightRandom);
                                }, 200);
                    }
        });
    }
}

/* 
 * Return a random number between min and max
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * The distance formula: ./(x2-x1)² + (y2-y1)²
 */
function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.floor(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
}

/*
 * Calculate the animation duration, given the distance, to make the pseudo-shark move always at the same speed
 */
function calculateSpeed(distance) {

    //If the shark takes 2 seconds to move 100 pixels, how much seconds it will be necessary to move DISTANCE?
    return 3000 * distance / 100;
}

/*
 * The dolphin can swims backwards, but he dont want to. So, we need to rotate him when necessary.
 */
function rotateDolphin(xCurrent, xNext) {
    if ((xNext < xCurrent) && dolphinDirection === 1) {
        $("#TSD").removeClass("TSDdirection1").addClass("TSDdirection-1");
        dolphinDirection = -1;
    } else if ((xNext > xCurrent) && dolphinDirection === -1) {
        $("#TSD").removeClass("TSDdirection-1").addClass("TSDdirection1");
        dolphinDirection = 1;
    }
}

/*
 * Responds when the dolphin is clicked
 */
function clickDolphin() {

    //Dont let them click while those operations are running
    $("#dolphinAura").unbind('click');

    //get a random sentence to the dolphin
    sentence = getSentence();

    //bind the sentence in the specified area
    $("#speechBaloon p").text(sentence);

    //display the baloon
    $("#speechBaloon").css({display: "inline"});

    //lots of animations running. no other simultaneous animations allowed. let the javascript breath
    setTimeout(
            function() {
                //hide the baloon
                $("#speechBaloon").css({display: "none"});
                //make the dolphin clickable again
                $("#dolphinAura").on('click', function() {
                    clickDolphin();
                });
            }, 4000);
}

function getSentence() {
    max = sentences.length;
    sentence = getRandomInt(0, max - 1);
    while (sentence === lastSentence)
        sentence = getRandomInt(0, max - 1);

    lastSentence = sentence;

    return sentences[sentence];
}

function stopDolphin() {
    $("#speechBaloon").stop().hide();
    $("#dolphinAura").stop().hide();
    $("#TSD").stop().hide();

    stopSwimming = true;

}