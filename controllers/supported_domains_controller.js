/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("controller injected");

var current_domain = null;
var web_driver = null;


/** Listeners **/
(function() {
    chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
        console.log("message received!");
        
        if (message.supported_domain_found) {
            console.log("supported_domain_found message received by controller");
            current_domain = message.domain;
        }
        if (message.initialize_web_driver) {
            console.log("initialize_web_driver message received by controller");
            if (current_domain != message.domain) {
                console.log("new current domain set: " + message.domain + " (was " + current_domain + ")");
                current_domain = message.domain;
            }
            web_driver = get_web_driver(current_domain);
        }
        if (message.scout_for_items) {
            console.log("scout_for_items message received by controller");
            if (message.page != null && web_driver != null) {
                // insert scouting code here
                web_driver.scout_page();
            }
            else {
                console.log("scouting for items requires a page");
            }
            
        }
        sendResponse({hello: "goodbye"});
        return true;
    });
    
})();
console.log("listener added");



/** Web driver functionality **/
function get_web_driver(domain) {
    console.log("get web driver for domain: " + domain);
    return eval("new " + _.capitalize(domain) + "WebDriver()");
}
