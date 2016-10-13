/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("toysrus_web_parser loaded");


function ToysrusWebParser() {
    // Not very elegant, but not sure how else to do it right now...
    var url = Object.getPrototypeOf(this).product_url;
    
    this.add_page_type("search", "\/search\/", function(element) {
        var results = [];
        var that = this;
        console.log(that.product_url);
        $(element).find("#familyProducts div.varHeightTop").children("a[href*='" + url + "']").each(function() {
            results.push({
                "name": $(this).text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
}
ToysrusWebParser.prototype = new BaseWebParser("toysrus", "productId=");
