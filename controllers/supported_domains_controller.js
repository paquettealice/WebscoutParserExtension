/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("supported_domains_controller loaded");

var curr_domain = null;
var curr_web_driver = null;
var curr_page_type = null;

function sync_domain(domain) {
    console.log("new current domain set: " + domain + " (was " + curr_domain + ")");
    curr_domain = domain;
}

/** Listeners **/
(function() {
    chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
        console.log("---message received!");
        console.log(message);
        
        if (message.supported_domain_found) {
            console.log("supported_domain_found message received by controller");
            sync_domain(message.domain);
        }
        if (message.initialize_web_driver) {
            console.log("initialize_web_driver message received by controller");
            sync_domain(message.domain);
            initialize_web_driver(curr_domain);
        }
        if (message.scout_for_items) {
            console.log("scout_for_items message received by controller");
            if (message.element !== null && web_driver !== null) {
                // insert scouting code here
                console.log("controller received page_type: " + web_driver.get_page_type());
            }
            else {
                console.log("scouting for items requires a page");
            }
            
        }
        if (message.start_parsing) {
            console.log("--start_parsing message received by controller");
        }
        sendResponse({hello: "goodbye"});
    });
    console.log("controller listener added");    
})();





/** Web driver functionality **/
function initialize_web_driver(domain) {
    console.log("initialize_web_driver for domain: " + domain);
    if (!domain) {
        //throw new Error("Initializing the web driver requires a domain!");
    }
    web_driver = eval("new " + _.capitalize(domain) + "WebDriver()");
}

