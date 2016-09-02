/**
 * Created by Pierre-Yves on 8/29/2016.
 */

function WalmartParser() {

}
WalmartParser.prototype = new BaseParser("walmart");

WalmartParser.prototype.parse_page = function(result_page) {
    var results = result_page.find("a.js-product-title");
    console.log(results);
};