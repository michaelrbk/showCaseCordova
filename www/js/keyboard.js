document.addEventListener("deviceready", function () {

    function showKeyboardShownMessage() {
        alert("Keyboard shown listener.");
    }

    function showKeyboardHiddenMessage() {
        alert("Keyboard hidden listener.");
    }

    $(document).on("click", "#keyboardIndexButton", function() {
        window.addEventListener("native.keyboardshow", showKeyboardShownMessage);
        window.addEventListener("native.keyboardhide", showKeyboardHiddenMessage);
    });

    $(document).on("click", "#backButtonKeyboard", function() {
        window.removeEventListener("native.keyboardshow", showKeyboardShownMessage);
        window.removeEventListener("native.keyboardhide", showKeyboardHiddenMessage);
    });

    $(document).on("click", "#showKeyboard", function() {
        cordova.plugins.Keyboard.show();
    });

    $(document).on("click", "#hideKeyboard", function() {
        cordova.plugins.Keyboard.close();
    });

}, false);
