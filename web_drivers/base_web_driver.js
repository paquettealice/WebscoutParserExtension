/**
 * Created by paquettepy on 2016-09-08.
 */

function BaseWebDriver(domain) {
    this._page_types = {
        // "type": {regex: "pattern"}
    }
}


/** ---Parser
 * The parser's job is to scrape items off a page and organize it into
 * an object (ideally similar to the model used by the database).
 */

/* ---parse_page
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
BaseWebDriver.prototype.parse_page = function(page, page_type) {
    throw new Error('Not implemented');
};



/** ---Scout
 * The scout's job is to find out the type of the current page and determine
 * if there are items available for parsing.
 */
 
 
/* ---get_page_type
 * This function takes a url (if none provided, use the current url)
 * and finds the page_type with associated regex patterns.
 * 
 * Arguments:
 *  url - the url used in the matching
 * 
 * Returns:
 *  The page_type or undefined if none found
 */
BaseWebDriver.prototype.get_page_type = function(url) {
    if (!url) {
        url = window.location.href;
    }
    
    page_type = _.find(this.page_types, function(regex, page_type) {
        return url.match(new RegEx(regex)) != null;
    });
    console.log("BaseWebDriver get_page_type");
    console.log(page_type);
    return page_type;
};
