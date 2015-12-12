var geolocation = {
    exec: function() {
        var onSuccess = function(position) {

            $("#latitude").val(position.coords.latitude);
            $("#longitude").val(position.coords.longitude);
            $("#altitude").val(position.coords.altitude);
            $("#accuracy").val(position.coords.accuracy);
            $("#altitudeAccuracy").val(position.coords.altitudeAccuracy);
            $("#heading").val(position.coords.heading);
            $("#speed").val(position.coords.speed);
            $("#timestamp").val(position.timestamp);
        };

        function onError(error) {
            alert("code: "    + error.code    + '\n' +
                "message: " + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
};

