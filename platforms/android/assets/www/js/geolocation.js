document.addEventListener("deviceready", function() {

    var onSuccess = function(position) {
        $("#latitude").val(position.coords.latitude);
        $("#longitude").val(position.coords.longitude);
        $("#altitude").val(position.coords.altitude);
        $("#accuracy").val(position.coords.accuracy);
        $("#altitudeAccuracy").val(position.coords.altitudeAccuracy);
        $("#heading").val(position.coords.heading);
        $("#speed").val(position.coords.speed);
        $("#timestamp").val(position.timestamp);

        $.mobile.loading("hide");
    };

    function onError(error) {
        alert("Code: "    + error.code    + "\n" +
            "Message: " + error.message + "\n");

        $("#getCurrentLocation").button("enable");
        $("#watchGeolocation").button("enable");
        $("#stopWatchingGeolocation").button("disable");

        $.mobile.loading("hide");
    }

    function getOptions() {
        var enableHighAccuracy = ($("#highAccuracy").val() === "true");
        var maximumAge = parseInt($("#maximumAge").val());
        var timeout = parseInt($("#geolocationTimeout").val());

        return {
            maximumAge: maximumAge,
            timeout: timeout,
            enableHighAccuracy: enableHighAccuracy
        }
    }

    $(document).on("click", "#getCurrentLocation", function() {
        $.mobile.loading("show");
        navigator.geolocation.getCurrentPosition(onSuccess, onError, getOptions());
    });

    var watchId;

    $(document).on("click", "#watchGeolocation", function() {
        $("#getCurrentLocation").button("disable");
        $("#watchGeolocation").button("disable");
        $("#stopWatchingGeolocation").button("enable");

        watchId = navigator.geolocation.watchPosition(onSuccess, onError, getOptions());
    });

    $(document).on("click", "#stopWatchingGeolocation", function() {
        $("#getCurrentLocation").button("enable");
        $("#watchGeolocation").button("enable");
        $("#stopWatchingGeolocation").button("disable");

        navigator.geolocation.clearWatch(watchId);
    });

}, false);
