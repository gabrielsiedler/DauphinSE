// var ajaxPath = "http://dse.dauphin.cc/searchengine/ajax";
var ajaxPath = "http://localhost:8090/searchengine/ajax";

var counter = 0;
$(document).ready(function() {

    $.ajaxSetup({
        error: AjaxError
    });

    function AjaxError(x, e) {
        if (x.status === 0) {
            alert('There was a problem retrieving the URL.');
        } else if (x.status === 404) {
            alert('Requested URL not found.');
        } else if (x.status === 500) {
            alert('Internel Server Error.');
        } else {
            alert('Unknow Error.\n' + x.responseText);
        }
    }

    $(".buttonFooter").on('click', function() {
        target = $(this).attr("id");
        navigateButton(target, null);
    });

    $(".goButton").on("click", function() {
        if ($(this).parent().attr('class') === "searchBox") {
            runGoButton(1);
        } else {
            runGoButton(2);
        }

    });

    $(".bigForm").keyup(function(e) {
        if (e.keyCode === 13) {
            runGoButton(1);
        }
    });

    $(".miniForm").keyup(function(e) {
        if (e.keyCode === 13) {
            runGoButton(2);
        }
    });

    $(".specialLink").on('click', function() {
        navigateButton("features", null);
    });

    function runGoButton(reference) {
        if (reference !== null) {
            if (reference === 1) {
                keyword = $(".bigForm").val();
                $(".bigForm").val("");
            } else {
                keyword = $(".miniForm").val();
                $(".miniForm").val("");
            }
        }

        navigateButton("go", keyword);
    }

    function navigateButton(target, keyword) {
        if ($(".animatedBackground").css("display") !== "none") {
            transition_hideStart();
        }

        $(".navigation .outline").fadeOut(500);
        $(".ajaxLoading").fadeIn(500);

        setTimeout(
                function() {
                    $.get(ajaxPath, {target: target, keyword: keyword},
                    function(data) {
                        $(".navigation .outline").html(data);
                        $(".navigation .outline").fadeIn("1000");
                        $(".ajaxLoading").fadeOut("1000");
                    });
                }
        , 500);
    }

});
