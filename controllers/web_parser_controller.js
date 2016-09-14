/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("web_parser_controller loaded");

var curr_domain;
var curr_web_parser;
var curr_page_type;
var curr_links;

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
        if (message.initialize_web_parser) {
            console.log("initialize_web_parser message received by controller");
            sync_domain(message.domain);
            initialize_web_parser(curr_domain);
        }
        if (message.get_page_type) {
            curr_page_type = web_parser.get_page_type();
            console.log("controller current page_type: " + curr_page_type);            
        }
        if (message.get_links) {
            console.log("get_links message received by controller");
            if (web_parser !== null) {
                var element;
                if (message.element) { element = message.element; }
                else { element = $("*"); }
                curr_links = curr_web_parser.get_links(element, curr_page_type);
            }
            else {
                throw new Error("web_parser not initialized");
            }
            
        }
        if (message.start_parsing) {
            console.log("--start_parsing message received by controller");
            
        }
        sendResponse({hello: "goodbye"});
    });
    console.log("controller listener added");    
})();





/** Web parser functionality **/
function initialize_web_parser(domain) {
    console.log("initialize_web_parser for domain: " + domain);
    if (!domain) {
        //throw new Error("Initializing the web parser requires a domain!");
    }
    web_parser = eval("new " + _.capitalize(domain) + "WebParser()");
}

