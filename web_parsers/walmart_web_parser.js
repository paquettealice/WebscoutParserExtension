/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("walmart_web_parser loaded");

//function map_text(selector) {
    //return $(selector).map(function() {
        //return $(this).text();
    //});
//}

function WalmartWebParser() {
    this.add_page_type("search", "\/browse\/", function(element) {
        var results = [];
        $(element).find("div#tile-container a.js-product-title").each(function() {
            results.push({
                "name": $(this).find("div").text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
WalmartWebParser.prototype = new BaseWebParser("walmart", "/ip/");
