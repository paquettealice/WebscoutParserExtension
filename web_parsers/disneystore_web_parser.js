/**
 * Created by paquettepy on 2016-12-05.
 */

console.log("disneystore_web_parser loaded");


function DisneystoreWebParser() {
    //this.add_page_type("search", "\/b\/", function(element) {
        //var results = [];
        //$(element).find("li.products_grid a").each(function() {
            //results.push({
                //"name": $(this).text(),
                //"link": $(this).attr("href")
            //});
        //});
        //return results;
    //});
}
DisneystoreWebParser.prototype = new BaseWebParser("disneystore", "/mp/");
