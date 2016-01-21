document.addEventListener("deviceready", function () {

    var ID_NOTIFICATION_1 = 1;
    var ID_NOTIFICATION_2 = 2;

    $(document).on("click", "#showNotification1", function() {
        cordova.plugins.notification.local.schedule({
            id: ID_NOTIFICATION_1,
            title: "Notification 1 Title",
            text: "Notification Text",
            led: "FF0000",
            badge: 1
        });
    });

    $(document).on("click", "#updateNotification1", function() {
        cordova.plugins.notification.local.update({
            id: ID_NOTIFICATION_1,
            title: "Notification 1 Updated"
        });
    });

    $(document).on("click", "#showNotification2", function() {
        cordova.plugins.notification.local.schedule({
            id: ID_NOTIFICATION_2,
            title: "Notification 2 Title",
            text: "Notification Text",
            led: "FF0000",
            badge: 2
        });
    });

    $(document).on("click", "#updateNotification2", function() {
        cordova.plugins.notification.local.update({
            id: ID_NOTIFICATION_2,
            title: "Notification 2 Updated"
        });
    });

    cordova.plugins.notification.local.on("click", function(notification) {
        alert("Notification clicked! (Id: " + notification.id + ")");
    });

}, false);
