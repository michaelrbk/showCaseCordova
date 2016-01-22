document.addEventListener("deviceready", function () {

    $(document).on("click", "#openBrowser", function() {
        var url = $("#url").val();
        window.open(url, "_blank", "location=yes");
    })

}, false);
