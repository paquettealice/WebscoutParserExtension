/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("homedepot_web_parser loaded");


function HomedepotWebParser() {
    this.add_page_type("search", "\/b\/", function(element) {
        var results = [];
        $(element).find("div.pod-inner a[data-pod-type='pr']").each(function() {
            results.push({
                "name": $(this).text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
HomedepotWebParser.prototype = new BaseWebParser("homedepot", "/p/");
