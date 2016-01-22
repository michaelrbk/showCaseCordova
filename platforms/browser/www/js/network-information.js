document.addEventListener("deviceready", function() {

    var states = {};
    states["unknown"] = "Unknown connection";
    states["ethernet"] = "Ethernet connection";
    states["wifi"] = "WiFi connection";
    states["2g"] = "Cell 2G connection";
    states["3g"] = "Cell 3G connection";
    states["4g"] = "Cell 4G connection";
    states["cellular"] = "Cell generic connection";
    states["none"] = "No network connection";

    function updateNetworkInformation() {
        var networkState = navigator.connection.type;
        $("#networkType").val(states[networkState]);
    }

    $(document).on("pageshow", "#networkInformationPage" ,function(){
        updateNetworkInformation();
    });

    $(document).on("click", "#updateNetworkInformation", function() {
        updateNetworkInformation();
    });

});