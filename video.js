var videoacross = document.getElementById("butterfly");
var videolanding = document.getElementById("butterfly-landing");

videoacross.addEventListener("ended", function () {
    setTimeout(function () {
        videolanding.play();
    }, 500);
    videolanding.classList.add("butterfly-landing-animation");
});

videolanding.addEventListener("ended", function () {
    videolanding.setAttribute('src', "images/butterfly-loop.mp4");
    videolanding.play();
});

videoacross.addEventListener("canplay", function () {
    videoacross.play();
    videoacross.classList.add("butterfly-animation");
});

