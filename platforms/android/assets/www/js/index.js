var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        alert("onDeviceReady");
        /*        $("#geolocation-page").on("pagecontainerload", function( event, ui ) {
         alert("load geolocation");
         } );*/
        $(document).on("pagebeforeshow", function() {
            alert($.mobile.activePage.attr('id')); //this will get the active page id (like #page1)
        });​
    }
};

app.initialize();