document.addEventListener("deviceready", function() {

    $(document).on("pageshow", "#networkInformation" ,function(){
        var networkState = navigator.connection.type;

        //TODO: Ver como usar as constantes da variável Connection.NONE. Variável está undefined neste escopo.
        //TODO: Ver se precisa contornar: No Android dá unknown.
        var states = {};

        states["unknown"] = "Unknown connection";
        states["ethernet"] = "Ethernet connection";
        states["wifi"] = "WiFi connection";
        states["2g"] = "Cell 2G connection";
        states["3g"] = "Cell 3G connection";
        states["4g"] = "Cell 4G connection";
        states["cellular"] = "Cell generic connection";
        states["none"] = "No network connection";

        $("#type").val(states[networkState]);
    });
});