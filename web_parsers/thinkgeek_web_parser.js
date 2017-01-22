/**
 * Created by paquettepy on 2016-12-09.
 */

console.log("thinkgeek_web_parser loaded");


function ThinkgeekWebParser() {
    this.add_page_type("homepage", "www.thinkgeek\.com/$", function(element) {
        var results = [];
        $(element).find("div[data-category-title][aria-hidden=false] > div > a[href]").each(function() {
            results.push({
                "name": $(this).find("h4.product-name").text(),
                "link": $(this).attr("href")
            });
        });
        $(element).find("div[id=homepage-featured-products] > div > a.product-link[href]").each(function() {
            results.push({
                "name": $(this).find("h4.product-name").text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    
    this.add_page_type("all", "thinkgeek\.com", function(element) {
        var results = [];
        $(element).find("a.product-link [href]").each(function() {
            results.push({
                "name": $(this).find("h4.product-name").text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
ThinkgeekWebParser.prototype = new BaseWebParser("thinkgeek", "^(http[s]?://www.thinkgeek.com)?/product/");
