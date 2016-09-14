/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("base_web_parser loaded");

function BaseWebParser(domain) {

    // Example
    this._page_types = {
        //"default" {
            //"selectors": [
                //""
            //]
        //},
        //"product" {
            //"regex": "\/ip\/",
            //"selectors": {}
        //}
        //"search": {
            //"regex": "\/browse\/",
            //"selectors": [
                //"div#tile-container a.js-product-title" // get href attribute
            //]
        //},
        //"main": {
            //"regex": "^https:\/\/www\.walmart\.com$",
            //"selectors": {
                //"jquery": [
                    //"selector A"
                //]
            //} 
        //}
    }
}


/** ---Parser functionality
 * The parser's job is to scrape items off a page and organize it into
 * item objects (ideally similar to the model used by the database).
 */

/* ---get_links
 * This function takes an element, and, optionally, a page_type, and parses
 * it for product links. If a page_type is provided, the parser will abide
 * by the selectors specific to the page_type, otherwise, it will use the
 * default page_type. An array of names and links (empty if none are found)
 * is returned. On the other hand, if there is no valid or default page_type,
 * undefined is returned.
 * 
 * Arguments:
 *  element - the element to parse
 *  type - the type of the page to parse (search, browse, single, etc.)
 * 
 * Returns:
 *  An array of product names and links or undefined
 */
BaseWebParser.prototype.get_links = function(element, type) {
    var products = [];

    console.log("parse_page with type: " + type + " and page: ");
    console.log(page);
    // Get all the links from the page based on page_type
    if (this._page_types[type]) {
        _.forEach(this._page_types[type]["selectors"], function(selector) {
            products.concat($(page).find(selector));            
        });
    }
    // Use default page_type if no valid page_type is provided
    else if (this._page_types["default"]) {
        _.forEach(this._page_types["default"]["selectors"], function(selector) {
            products.concat($(page).find(selector));
        });
    }
    else {
        return;
    }
    console.log(products);
    return products
};

/* ---get_page_type
 * This function takes a URL and determines whether or not it corresponds
 * to one of the known page types by using regex patterns. If a page type
 * is found, it is returned; if not, undefined is returned. If no argument
 * is provided, the URL of the page in which the web parser is injected
 * will be used.
 * 
 * Arguments:
 *  url - the url used in the matching
 * 
 * Returns:
 *  The page_type or undefined if none found
 */
BaseWebParser.prototype.get_page_type = function(url) {
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

