/**
 * Created by Pierre-Yves on 9/1/2016.
 */

/**
 * The parser takes a search result page and returns an array of result objects
 * **/

function BaseParser(domain_host) {
    this.domain_host = domain_host;
}

/*
 * It takes a result_page, parses it, and organizes it into an array of result objects, which is returned.
 * Arguments:
 *  result_page - the search results page to parse
 * Returns:
 *  An array of result objects
 */
BaseParser.prototype.parse_page = function(result_page) {
    throw new Error('Not implemented');
};

