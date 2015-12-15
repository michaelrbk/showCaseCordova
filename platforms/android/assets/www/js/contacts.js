document.addEventListener("deviceready", function () {
    $(document).on("pageshow", "#contacts", function () {

        function onSuccess(contacts) {
            alert('Founds ' + contacts.length + ' contacts.');
            for (var i = 0; i < contacts.length; i++) {
                $('#contacts-list').append('<li>' + contacts[i].displayName + '</li>').listview('refresh');
            }

        };

        function onError(contactError) {
            alert('onError!');
        };


        var options = new ContactFindOptions();
        options.filter = "Michael";
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);

    });
}, false);
