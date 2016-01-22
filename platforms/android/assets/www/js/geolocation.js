document.addEventListener("deviceready", function() {

    var updateGeolocation = function () {

        $.mobile.loading("show");

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

            $.mobile.loading("hide");
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    $(document).on("pageshow", "#geolocationPage" ,function(){

        updateGeolocation();
    });

    $(document).on("click", "#updateGeolocation", function() {

        updateGeolocation();
    });

}, false);
