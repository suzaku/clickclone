chrome.extension.onRequest.addListener(function(data, sender) {
    chrome.runtime.sendNativeMessage(
        "com.github.suzaku.clickclone",
        data,
        function(response) {
            if (!response || !response.ok) {
                console.log("ClickClone: failed to clone " + data.url)
            } else {
                console.log("ClickClone: cloned " + data.url);
            }
        }
    );
});
