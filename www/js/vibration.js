document.addEventListener("deviceready", function() {

    $(document).on("click", "#vibrate", function() {
        var time = parseInt($("#time").val());
        navigator.vibrate(time);

        $("#cancelVibration").button("enable");
        setTimeout(function(){
            $("#cancelVibration").button("disable");
        }, time);
    });

    $(document).on("click", "#cancelVibration", function() {
        navigator.vibrate(0);
        //or navigator.vibrate([])
        //or navigator.vibrate([0])

        $("#cancelVibration").button("disable");
    });

}, false);
