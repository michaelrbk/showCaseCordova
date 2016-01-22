document.addEventListener("deviceready", function () {

    $(document).on("pageshow", "#accelerometerPage", function () {
        var watchID = null;

        var options = {frequency: 500};  // Update every 0,5 seconds
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);


        function onSuccess(acceleration) {

            $("#x").val(acceleration.x);
            $("#y").val(acceleration.y);
            $("#z").val(acceleration.z);
        }

        function onError() {
            alert("onError!");
        }
    });

}, false);
