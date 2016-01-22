document.addEventListener("deviceready", function() {

    $(document).on("click", "#lockOrientationButton", function() {
        var orientation = $("#lockOrientationSelect").val();
        screen.lockOrientation(orientation);
    });

    $(document).on("click", "#unlockOrientationButton", function() {
        screen.unlockOrientation();
    });

    $(document).on("click", "#updateCurrentOrientation", function() {
        $("#currentOrientationLabel").val(screen.orientation.type);
    });

    function alertScreenOrientation() {
        alert("Orientation changed to " + screen.orientation.type);
    }

    $(document).on("click", "#screenOrientationPage #addEventListener", function() {
        window.addEventListener("orientationchange", alertScreenOrientation);
    });

    $(document).on("click", "#screenOrientationPage  #removeEventListener", function() {
        window.removeEventListener("orientationchange", alertScreenOrientation);
    });

});