// //this function reloads the page - brute force workaround for dealing with asynchronous animaitions/videos
(function () {
    window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload(true);
        }
    };
})();

var videoacross = document.getElementById("butterfly");
var videolanding = document.getElementById("butterfly-landing");

//once the across video has ended, wait .5s then play the landing video and add the video animation
videoacross.addEventListener("ended", function () {
    setTimeout(function () {
        videolanding.play();
    }, 500);
    videolanding.classList.add("butterfly-landing-animation");
});

//once the landing video has ended, switch to the looping video
// videolanding.addEventListener("ended", function () {
//     videolanding.setAttribute('src', "images/butterfly-loop.mp4");
// });

//once you can play the across video, play it with the animation 
//(needed so that slow loading sites don't have the animation start before the video)
videoacross.addEventListener("canplay", function () {
    videoacross.play();
    videoacross.classList.add("butterfly-animation");
});