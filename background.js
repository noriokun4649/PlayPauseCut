chrome.commands.onCommand.addListener(function (command) {
    if (command === "toggle-play-pause-all") {
        getQuery({});
    } else if (command === "toggle-pause-all") {
        getQuery({ audible: true });
    } else if (command === "toggle-play-all") {
        getQuery({ audible: false });
    } else if (command === "toggle-play-pause-active") {
        getQuery({ lastFocusedWindow: true });
    } else if (command === "toggle-play-pause-pin") {
        getQuery({ pinned: true });
    }
});
function getQuery(urls) {
    urls.url = ["https://www.youtube.com/*",
        "https://www.nicovideo.jp/*",
        "https://www.amazon.co.jp/*",
        "https://anime.dmkt-sp.jp/animestore/sc_d_pc*",
        "https://www.bilibili.com/video/*",
        "https://gyao.yahoo.co.jp/title/*",
        "https://fod.fujitv.co.jp/*",
        "https://www.happyon.jp/*",
        "https://www.paravi.jp/watch/*",
        "https://www.netflix.com/*",
        "https://video.unext.jp/*"];
    chrome.tabs.query(urls, function (tabs) {
        getTab(tabs);
    });
}
function getTab(tabs) {
    tabs.forEach(function (tab) {
        if (~tab.url.indexOf("https://www.nicovideo.jp/")) {
            chrome.tabs.sendMessage(tab.id, {
                mode: "niconico"
            }, function (msg) { });
        } else {
            chrome.tabs.sendMessage(tab.id, {
                mode: "other"
            }, function (msg) { });
        }
    });

}