/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("walmart_web_parser loaded");

function WalmartWebParser() {
    this._page_types = {
        "default": {
            "selectors": [
                ""
            ]
        },
        "product": {
            "regex": "\/ip\/",
            "selectors": {}
        },
        "search": {
            "regex": "\/browse\/",
            "selectors": [
                "div#tile-container a.js-product-title" // get href attribute
            ]
        },
        "main": {
            "regex": "^https:\/\/www\.walmart\.com$",
            "selectors": {
                "jquery": [
                    "selector A"
                ]
            } 
        }
    }
}
WalmartWebParser.prototype = new BaseWebParser("walmart");

/** Parser functionality
 * The parser's job is to scrape items off a page and organize it into
 * an object (ideally similar to the model used by the database).
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
WalmartWebParser.prototype.parse_element = function(page, page_type) {
    console.log("---walmart parse_page");
};