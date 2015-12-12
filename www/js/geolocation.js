var geolocation = {
    exec: function() {
        var onSuccess = function(position) {
            /*alert('Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' +
                'Altitude: '          + position.coords.altitude          + '\n' +
                'Accuracy: '          + position.coords.accuracy          + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'Heading: '           + position.coords.heading           + '\n' +
                'Speed: '             + position.coords.speed             + '\n' +
                'Timestamp: '         + position.timestamp                + '\n');*/

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
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
};

