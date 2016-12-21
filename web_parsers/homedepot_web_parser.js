/**
 * Created by paquettepy on 2016-09-08.
 */

console.log("homedepot_web_parser loaded");


function HomedepotWebParser() {
    var that = this;
    
    this.add_page_type("front_page", "homedepot\.com[/]?$", function(element) {
        var results = [];
        console.log(element);
        console.log($(element).find("div[class*='certona']"));
        results = that.get_products($(element).find("div.certona__productpod"), "default");
        //$(element).find("div.certona__productpod").each(function() {
            //results.push({
                //"name": $(this).text(),
                //"link": $(this).attr("href")
            //});
        //});
        console.log(results);
        return results;
    });
    this.add_page_type("search", "homedepot\.com", function(element) {
        var results = [];
        $(element).find("div.pod-inner a[data-pod-type='pr']").each(function() {
            results.push({
                "name": $(this).text(),
                "link": $(this).attr("href")
            });
        });
        return results;
    });
    //console.log(this);
    //console.log(this.get_page_type("default"));
    
}
HomedepotWebParser.prototype = new BaseWebParser("homedepot", "/p/");
