document.addEventListener("deviceready", function() {

    $(document).on("pageshow", "#devicePage" ,function(){

        $("#cordova").val(device.cordova);
        $("#model").val(device.model);
        $("#platform").val(device.platform);
        $("#uuid").val(device.uuid);
        $("#version").val(device.version);
        $("#isVirtual").val(device.isVirtual);
        $("#serial").val(device.serial);
    });

}, false);
