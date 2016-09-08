/**
 * Created by Pierre-Yves on 8/29/2016.
 */




/** Utility **/
function executeScripts(js_includes, tabId, callback) {
    js_includes.forEach(function (url) {
        chrome.tabs.executeScript(tabId, {file: url}, callback);
    });
}

/** Controller (might move to its own file) **/
var supported_domains = {
    "walmart": {},
    "homedepot": {}
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab);
    console.log(tabId);
    if (tab.status == "complete") {
        
        // If a supported domain is found, inject controller and send message
        _.forEach(supported_domains, function(value, domain) {
            console.log("domain: " + domain);
            if (tab.url.indexOf(domain) > -1) {
                console.log("found: " + domain);
                
                // inject controller
                executeScripts(["controllers/supported_domain_controller.js"], tabId, function() {
                    // send message to controller
                    console.log("sending message");
                    chrome.runtime.sendMessage({supported_domain_found: true, domain: domain});
                    return false;
                });
            }
        })       
    }
});
