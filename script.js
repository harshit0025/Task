var email1 = document.querySelector("#email-1").value;
var camera = document.querySelector("#camera")

function emailCheck() {

    var format = /^([a-zA-Z0-9\._]+)@vitstudent([\.])ac([\.])in$/;

    if (email1.match(format)) {
        alert("Valid email adress");
        return true;
    }
    else {
        alert("Invalid email address");
        return false;
    }
}

function set_camera() {Webcam.set({
    width: 400,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
})
Webcam.attach('#camera')
}


set_camera();

Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap(function (url) {
        camera.innerHTML = '<img class="after_capture_frame" src="' + url + '"/>';
    });
}