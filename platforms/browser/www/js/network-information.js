document.addEventListener("deviceready", function() {

    $(document).on("pageshow", "#networkInformation" ,function(){
        alert("1")
        var networkState = navigator.connection.type;
        alert(networkState);
        alert(Connection.UNKNOWN);
        var states = {};
        states[Connection.UNKNOWN]  = "Unknown connection";
  /*      states[Connection.ETHERNET] = "Ethernet connection";
        states[Connection.WIFI]     = "WiFi connection";
        states[Connection.CELL_2G]  = "Cell 2G connection";
        states[Connection.CELL_3G]  = "Cell 3G connection";
        states[Connection.CELL_4G]  = "Cell 4G connection";
        states[Connection.CELL]     = "Cell generic connection";
        states[Connection.NONE]     = "No network connection";*/

        alert(states);
        alert(states[networkState]);
        $("#type").val(states[networkState]);
    });
});