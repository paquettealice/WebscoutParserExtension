/**
 * Created by paquettepy on 2016-10-08.
 */

console.log("kohls_web_parser loaded");


function KohlsWebParser() {
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
KohlsWebParser.prototype = new BaseWebParser("kohls", "/product/");
