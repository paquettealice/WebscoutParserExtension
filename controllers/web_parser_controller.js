/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("web_parser_controller loaded");

var curr_domain;
var curr_web_parser;
var curr_page_type;
var curr_products;
var listener_added = false;

function sync_domain(domain) {
    console.log("new current domain set: " + domain + " (was " + curr_domain + ")");
    curr_domain = domain;
}

/** Listeners **/
function controllerListener(message, sender, sendResponse) {
    console.log("---message received!");
    console.log(message);
    
    if (message.supported_domain_found) {
        console.log("supported_domain_found message received by controller");
        sync_domain(message.domain);
    }
    if (message.initialize_web_parser) {
        console.log("initialize_web_parser message received by controller");
        sync_domain(message.domain);
        initialize_web_parser(curr_domain);
    }
    if (message.get_page_type) {
        curr_page_type = curr_web_parser.get_page_type();
        console.log("controller current page_type: " + curr_page_type);            
    }
    if (message.get_products) {
        console.log("get_products message received by controller");
        if (curr_web_parser != null) {
            var element;
            if (message.element) { element = message.element; console.log("took element from message"); }
            else { element = $("body"); console.log("created element"); }
            console.log($(element).find("div[class*='certona']"));
            curr_products = curr_web_parser.get_products(element, curr_page_type);
        }
        else {
            throw new Error("web_parser not initialized");
        }
        
    }
    // sendResponse(controllerListener);
}

(function() {
    //// Make sure not to duplicate listeners
    //chrome.extension.onMessage.removeListener(controllerListener);
    if(!listener_added) {
        console.log("adding listener to web parser controller");
        chrome.extension.onMessage.addListener(controllerListener);
        listener_added = true;         
    }
})();



/** Web parser functionality **/
function initialize_web_parser(domain, product_url) {
    console.log("initialize_web_parser for domain: " + domain);
    if (!domain) {
        //throw new Error("Initializing the web parser requires a domain!");
    }
    curr_web_parser = eval("new " + _.capitalize(domain) + "WebParser()");
}

