document.addEventListener("deviceready", function () {

    $(document).on("click", "#showKeyboard", function() {
        cordova.plugins.Keyboard.show();
    });

    $(document).on("click", "#hideKeyboard", function() {
        cordova.plugins.Keyboard.close();
    });

    function showKeyboardShownMessage() {
        alert("Keyboard shown listener.");
    }

    function showKeyboardHiddenMessage() {
        alert("Keyboard hidden listener.");
    }

    $(document).on("click", "#keyboardPage #addEventListener", function() {
        window.addEventListener("native.keyboardshow", showKeyboardShownMessage);
        window.addEventListener("native.keyboardhide", showKeyboardHiddenMessage);
    });

    $(document).on("click", "#keyboardPage #removeEventListener", function() {
        window.removeEventListener("native.keyboardshow", showKeyboardShownMessage);
        window.removeEventListener("native.keyboardhide", showKeyboardHiddenMessage);
    });

}, false);
