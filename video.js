var video = document.getElementById("butterfly-landing");
video.addEventListener("canplay", function () {
    setTimeout(function () {
        video.play();
    }, 7000);
});


video.addEventListener("ended", function () {
    video.setAttribute('src', "images/butterfly-loop.mp4");
    video.load();
    video.play();
});