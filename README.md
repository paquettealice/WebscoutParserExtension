# WebscoutParserExtension
Chrome extension that parses source search results and throws data back to webscout

Flow:

> background looks for supported domains by using the URL when tab updates
> supported domain is found
> background injects controller, web_parser, and other necessary scripts
> background sends message to controller to initialize web_parser with domain X
> controller initializes web_parser and determines page type, if any
> background listens for user clicks on extension icon
> user clicks on extension icon
> background sends message to controller to start parsing
> controller tells web_parser to 'parse', i.e. extract products from the page
> web_parser returns products in an array of result objects e.g. { name: "product_name", "link": "product_link"}
> array of result objects is used by webscout or whatever else
