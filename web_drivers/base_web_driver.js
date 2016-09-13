/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("base_web_driver loaded");

function BaseWebDriver(domain) {

    // Example
    this._page_types = {
        //"<page type A, e.g. search>": {
            //"regex": "<regexp pattern>",
            //"selectors": {
                //"<selector type, e.g. jquery>": [
                    //"<item selector X, e.g. 'a.item'>",
                //]
            //}
            
        //}
    }
}


/** ---Parser functionality
 * The parser's job is to scrape items off a page and organize it into
 * item objects (ideally similar to the model used by the database).
 */

/* ---parse_element
 * This function takes a page, parses it based on the page_type, then 
 * organizes it into an array of result objects, which is returned. 
 * If no page_type is provided (or is unsupported), then a default parsing
 * method will be used.
 * 
 * Arguments:
 *  page - the page to parse
 *  page_type - the type of the page to parse (search, browse, single, etc.)
 * 
 * Returns:
 *  An array of result objects
 */
BaseWebDriver.prototype.parse_page = function(page_type, page) {
    throw new Error("Not implemented");
};
 
BaseWebDriver.prototype.parse_element = function(element) {
    throw new Error("Not implemented");
};

/* ---get_page_type
 * This function takes a URL and determines whether or not it corresponds
 * to one of the known page types by using regex patterns. If a page type
 * is found, it is returned; if not, undefined is returned. If no argument
 * is provided, the URL of the page in which the web driver is injected
 * will be used.
 * 
 * Arguments:
 *  url - the url used in the matching
 * 
 * Returns:
 *  The page_type or undefined if none found
 */
BaseWebDriver.prototype.get_page_type = function(url) {
    console.log("---get_page_type, url: " + url);
    if (!url) {
        url = window.location.href;
        console.log("no url provided, url is now: " + url);
    }
    var regex;
    var page_type;
    _.forEach(this._page_types, function(info, type) {
        console.log("searching for page_type: " + type + " '" + info.regex + "'");
        regex = new RegExp(info.regex);
        console.log(regex);
        if (regex.test(url)) {
            console.log("page type found: " + type);
            page_type = type;
            return false;
        }
    });
    return page_type;
};

