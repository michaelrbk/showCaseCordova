document.addEventListener("deviceready", function() {

    $(document).on("click", "#vibrate", function() {
        var time = $("#time").val() * 1000;
        navigator.vibrate(time);
    });

}, false);
