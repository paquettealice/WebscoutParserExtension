/**
 * Created by paquettepy on 2016-12-09.
 */

console.log("thinkgeek_web_parser loaded");


function ThinkgeekWebParser() {
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
ThinkgeekWebParser.prototype = new BaseWebParser("thinkgeek", "^(http[s]?://www.thinkgeek.com)?/product/");
