/**
 * Created by paquettepy on 2016-12-09.
 */

console.log("bestbuy_web_parser loaded");


function BestbuyWebParser() {
    this.add_page_type("search", "/site/searchpage[.]jsp", function(element) {
        var results = [];
        $(element).find("main.page-results div.list-item div.sku-title a").each(function() {
            results.push({
                "name": $(this).text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    this.add_page_type("misc", "/site/misc/", function(element) {
        var results = [];
        $(element).find("div.info-block").has("div.pucks-and-price").find("h3.feature-ellipsis a").each(function() {
            results.push({
                "name": $(this).text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    this.add_page_type("category", "pcmcat\\d+", function(element) {
        var results = [];
        $(element).find("main.page-results div.list-item div.sku-title a").each(function() {
            results.push({
                "name": $(this).text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
BestbuyWebParser.prototype = new BaseWebParser("bestbuy", "[.]p[?]skuId=");
