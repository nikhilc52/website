var videolanding = document.getElementById("butterfly-landing");

videolanding.addEventListener("canplay", function () {
    setTimeout(function () {
        videolanding.play();
    }, 7000);
});

videolanding.addEventListener("ended", function () {
    videolanding.setAttribute('src', "images/butterfly-loop.mp4");
    videolanding.load();
    videolanding.play();
});

var videoacross = document.getElementById("butterfly");
videoacross.addEventListener("canplay", function () {
    videoacross.play();
    videoacross.classList.add("butterfly-animation");
});