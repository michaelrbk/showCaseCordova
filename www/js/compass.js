document.addEventListener("deviceready", function () {

    var watchId;

    function compassSuccess(heading) {
        $.mobile.loading("hide");
        $("#heading").val(heading.magneticHeading);
    }

    function compassError(error) {
        $.mobile.loading("hide");
        alert("CompassError: " + error.code);
    }

    $(document).on("click", "#getCurrentHeading", function() {
        $.mobile.loading("show");
        navigator.compass.getCurrentHeading(compassSuccess, compassError);
    });

    $(document).on("click", "#watchHeading", function() {
        $.mobile.loading("show");
        $("#getCurrentHeading").button("disable");
        $("#watchHeading").button("disable");
        $("#stopWatchingHeading").button("enable");
        watchId = navigator.compass.watchHeading(compassSuccess, compassError);
    });

    $(document).on("click", "#stopWatchingHeading", function() {
        $("#getCurrentHeading").button("enable");
        $("#watchHeading").button("enable");
        $("#stopWatchingHeading").button("disable");
        navigator.compass.clearWatch(watchId);
    });

}, false);
