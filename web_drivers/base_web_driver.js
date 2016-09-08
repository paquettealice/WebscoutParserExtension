/**
 * Created by paquettepy on 2016-09-08.
 */

function BaseWebDriver(domain_host) {
    
}

/** Parser
 * The parser's job is to scrape items off a page and organize it into
 * an object (ideally similar to the model used by the database).
 */

/*
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
BaseParser.prototype.parse_page = function(page, page_type) {
    throw new Error('Not implemented');
};
