/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("walmart_web_parser loaded");

function WalmartWebParser() {
    this.add_page_type("browse", "\/browse\/", function(element) {
        var results = [];
        $(element).find("div#tile-container a.js-product-title").each(function() {
            results.push({
                "name": $(this).find("div").text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    this.add_page_type("search", "\/search\/", function(element) {
        var results = [];
        $(element).find("div[class*='js-tile-landscape'] a.js-product-title").each(function() {
            results.push({
                "name": $(this).find("div").text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
WalmartWebParser.prototype = new BaseWebParser("walmart", "/ip/");
