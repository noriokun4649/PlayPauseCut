chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.mode === "niconico") {
        var playButton = document.getElementsByClassName("ActionButton ControllerButton PlayerPlayButton")[0];
        var pauseButton = document.getElementsByClassName("ActionButton ControllerButton PlayerPauseButton")[0];
        if (playButton != undefined) {
            playButton.click();
        } else {
            pauseButton.click();
        }
        sendResponse("ok");
    } else {
        var player_dani = document.getElementsByTagName("video")[0];
        videoPlayPause(player_dani);
        sendResponse("ok");
    }
});
function videoPlayPause(element) {
    if (element.paused) {
        element.play();
    } else {
        element.pause();
    }
}