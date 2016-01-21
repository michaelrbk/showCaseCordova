$(document).ready(function() {

    $(document).on("click", ".showHTMLButton, .showJSButton", function(event) {
        event.preventDefault();
        var url = $(this).prop("href");
        window.open(url, "_blank", "location=yes");
    })

});
