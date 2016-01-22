document.addEventListener("deviceready", function() {

    $(document).on("pageshow", "#cameraPage", function () {

        $(document).on("click", "#getPhoto", function () {

            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            });

        });

        function onSuccess(imageURI) {
            var image = document.getElementById('image');
            image.style.display = 'block';
            image.src = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

    });
}, false);
