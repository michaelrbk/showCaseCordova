document.addEventListener("deviceready", function () {

    $(document).on("click", "#keepScreenAwake", function() {
        window.plugins.insomnia.keepAwake();
    });

    $(document).on("click", "#allowSleepAgain", function() {
        window.plugins.insomnia.allowSleepAgain();
    });

}, false);
