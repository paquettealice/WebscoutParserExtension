/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("target_web_parser loaded");


function TargetWebParser() {
    this.add_page_type("category", "\/c\/", function(element) {
        var results = [];
        $(element).find("div[class*='products-tile'] p.details--title a").each(function() {
            results.push({
                "name": $(this).text().replace("already viewed", ""),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    this.add_page_type("search", "\/s\\?", function(element) {
        var results = [];
        $(element).find("div[class*='products-tile'] p.details--title a").each(function() {
            results.push({
                "name": $(this).text().replace("already viewed", ""),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
TargetWebParser.prototype = new BaseWebParser("target", "/p/");
