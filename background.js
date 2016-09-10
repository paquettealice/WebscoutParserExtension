/**
 * Created by Pierre-Yves on 8/29/2016.
 */




/** Utility **/
function executeScripts(js_includes, tabId, callback) {
    js_includes.forEach(function (url) {
        chrome.tabs.executeScript(tabId, {file: url}, callback);
    });
}

/** Supported domains functionality **/
var supported_domains = {
    "walmart": {},
    "homedepot": {}
}
var current_domain = null;


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.status == "complete") {
        _.forEach(supported_domains, function(value, domain) {
            console.log("domain: " + domain);
            
            // Search for supported domain when tab updates
            if (tab.url.indexOf(domain) > -1) {
                console.log("found: " + domain);
                
                // Inject scripts
                var scripts = [
                    "bower_components/lodash/dist/lodash.js",
                    "controllers/supported_domains_controller.js",
                    "web_drivers/base_web_driver.js",
                    "web_drivers/" + domain + "_web_driver.js"
                ]
                executeScripts(scripts, tabId, function() {
                    console.log("Scripts should have injected");
                    // Send message to controller
                    payload = {
                        supported_domain_found: true,
                        initialize_web_driver: true,
                        domain: domain
                    }
                    /** sends message 3 times for some reason **/
                    chrome.tabs.sendMessage(tabId, payload, function(response) {
                        console.log("injectController received response: ");
                        console.log(response);
                    });    
                });
            }
        })       
    }
});
