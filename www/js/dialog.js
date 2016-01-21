document.addEventListener("deviceready", function () {

    function callbackFunction() {
        alert("Callback function executed.");
    }

    $(document).on("click", "#showDialog", function() {
        navigator.notification.alert("Message body.", callbackFunction, "Dialog Title", "Button Name");
    });

}, false);
