document.addEventListener("deviceready", function() {

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    $(document).on("pageshow", "#device" ,function() {
        alert("1");
        var options = new ContactFindOptions();
        options.filter = "Michael";
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onSuccess, onError, options);
    });
}, false);
