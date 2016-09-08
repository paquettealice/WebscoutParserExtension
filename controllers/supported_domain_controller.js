/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("controller successfully injected");
(function() {
    chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
        console.log("message received!");
        if (message.supported_domain_found) {
            console.log(message);
        }
    });
})
