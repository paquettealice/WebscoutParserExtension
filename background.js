/**
 * Created by Pierre-Yves on 8/29/2016.
 */




/** Utility **/

/* Need to make this work with promises */
function execute_scripts(tabId, scripts, callback) {
    _.forEach(scripts, function (script_path) {
        console.log("---execute script: " + script_path);
        chrome.tabs.executeScript(tabId, {file: script_path}, callback(script_path));
    });
}

/** Supported domains functionality **/
var supported_domains = {
    "walmart": {},
    "homedepot": {}
}

/* ---is_supported_domain(url, callback)
 * This function checks if the domain of a url is currently supported.
 * If so, it invokes the callback (if provided) with the domain as argument
 * then returns true. If the domain is not supported, it returns false.
 */
function is_supported_domain(url, callback) {
    var is_supported = false;
    console.log("---is_supported_domain: " + url);
    _.forEach(supported_domains, function(value, domain) {
        if (url.indexOf(domain) > -1) {
            console.log("is_supported_domain invoking callback with domain: " + domain);
            callback(domain);
            is_supported = true;
            return false;
        }
    });
    console.log(is_supported);
    return is_supported;
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.status == "complete") {
        is_supported_domain(tab.url, function(domain) {
            // Inject scripts
            console.log("---injecting scripts");
            var scripts = [
                "bower_components/lodash/dist/lodash.js",
                "controllers/supported_domains_controller.js",
                "web_drivers/base_web_driver.js",
                "web_drivers/" + domain + "_web_driver.js"
            ]
            // Need to make this work with promises
            console.log("---executing scripts");
            chrome.tabs.executeScript(tabId, {file: scripts[0]}, function() {
                console.log("1 - " + scripts[0]);
                chrome.tabs.executeScript(tabId, {file: scripts[2]}, function() {
                    console.log("2 - " + scripts[2]); 
                    chrome.tabs.executeScript(tabId, {file: scripts[3]}, function() {
                        console.log("3 - " + scripts[3]);
                        chrome.tabs.executeScript(tabId, {file: scripts[1]}, function() {
                            console.log("4 - " + scripts[1]);
                            console.log("sending message to controller: supported_domain_found");
                            chrome.tabs.sendMessage(tabId, {supported_domain_found: true, domain: domain});
                        });
                    });
                });
            });
            
            //// callback (message) is invoked before script is executed for some reason...
            //execute_scripts(tabId, scripts, function(script_path) {
                //console.log("script executed: " + script_path);
                //console.log("sending message to controller: supported_domain_found");
                //chrome.tabs.sendMessage(tabId, {supported_domain_found: true});
            //});        
        });
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    // Make sure we're still on a supported domain
    is_supported_domain(tab.url, function(domain) {
        // Initialize web_driver etc.
        payload = {
            initialize_web_driver: true,
            scout_for_items: true,
            start_parsing: true,
            domain: domain
            
            // more stuff
        }
        chrome.tabs.sendMessage(tab.id, payload);
    });
});
