document.addEventListener("deviceready", function () {

    function onSuccess(contacts) {
        $("#contacts-list").empty();

        if (contacts.length == 0) {
            $("#contacts-list").append("<li>No results</li>").listview("refresh");
        } else {
            for (var i = 0; i < contacts.length; i++) {
                $("#contacts-list").append("<li>" + contacts[i].displayName + "</li>").listview("refresh");
            }
        }

        $.mobile.loading("hide");
    };

    function onError(contactError) {
        $.mobile.loading("hide");
        alert("onError!");
    };

    function searchForContact() {
        $.mobile.loading("show");

        var options = new ContactFindOptions();
        options.filter = $("#searchTerm").val();
        options.multiple = true;
        //options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;
        var fields = ["displayName", "name",];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

    $(document).on("change", "#searchTerm", searchForContact);

    $(document).on("click", "#searchButton", searchForContact);

}, false);
