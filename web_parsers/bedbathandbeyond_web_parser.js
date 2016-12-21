/**
 * Created by paquettepy on 2016-12-05.
 */

console.log("bedbathandbeyond_web_parser loaded");


function BedbathandbeyondWebParser() {
    this.add_page_type("search", "/store/s/", function(element) {
        var results = [];
        $(element).find("div#prodGridContainer div.prodInfo div.prodName a[href]").each(function() {
            results.push({
                "name": $(this).attr("title"),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    this.add_page_type("category", "/store/category/", function(element) {
        var results = [];
        $(element).find("div#prodGridContainer div.prodInfo div.prodName a[href]").each(function() {
            results.push({
                "name": $(this).attr("title"),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
BedbathandbeyondWebParser.prototype = new BaseWebParser("bedbathandbeyond", "/store/product/");
