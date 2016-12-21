/**
 * Created by paquettepy on 2016-12-05.
 */

console.log("disneystore_web_parser loaded");


function DisneystoreWebParser() {
    this.add_page_type("front_page", "disneystore\.com[/]?$", function(element) {
        var results = [];
        $(element).find("li.rfk_product a[name*='homeLandingPage']").each(function() {
            results.push({
                "name": $(this).find("div.rfk_name").text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    this.add_page_type("all", "disneystore\.com", function(element) {
        var results = [];
        $(element).find("div.productTile").has("p.price").find("a").each(function() {
            results.push({
                "name": $(this).attr("data-tealium-name"),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
DisneystoreWebParser.prototype = new BaseWebParser("disneystore", "/mp/");
