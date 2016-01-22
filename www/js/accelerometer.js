document.addEventListener("deviceready", function () {

    function updateAcceleration(acceleration) {
        $("#x").val(acceleration.x);
        $("#y").val(acceleration.y);
        $("#z").val(acceleration.z);
        $("#accelerometerTimestamp").val(acceleration.timestamp);
    }

    function onError() {
        alert("onError!");
    }

    $(document).on("click", "#getCurrentAcceleration", function() {
        navigator.accelerometer.getCurrentAcceleration(updateAcceleration, onError);
    });

    var watchID;

    $(document).on("click", "#watchAcceleration", function() {
        $("#getCurrentAcceleration").button("disable");
        $("#accelerometerUpdateFrequency").slider("disable");
        $("#watchAcceleration").button("disable");
        $("#stopWatchingAcceleration").button("enable");

        var updateFrequency = parseInt($("#accelerometerUpdateFrequency").val());
        var options = {frequency: updateFrequency};
        watchID = navigator.accelerometer.watchAcceleration(updateAcceleration, onError, options);
    });

    $(document).on("click", "#stopWatchingAcceleration", function() {
        $("#getCurrentAcceleration").button("enable");
        $("#accelerometerUpdateFrequency").slider("enable");
        $("#watchAcceleration").button("enable");
        $("#stopWatchingAcceleration").button("disable");

        navigator.accelerometer.clearWatch(watchID);
    });

}, false);
