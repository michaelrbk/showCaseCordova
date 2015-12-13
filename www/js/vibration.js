document.addEventListener("deviceready", function() {

    $(document).on("click", "#vibrate", function() {
        var time = parseInt($("#time").val());
        navigator.vibrate(time);
        //Max time for Windows and Blackberry: 5000ms, exceeding value will be truncated.

        $("#cancelVibration").button("enable");
        setTimeout(function(){
            $("#cancelVibration").button("disable");
        }, time);
    });

    $(document).on("click", "#cancelVibration", function() {
        navigator.vibrate(0);
        //Or navigator.vibrate([])
        //Or navigator.vibrate([0])

        $("#cancelVibration").button("disable");
    });

}, false);
