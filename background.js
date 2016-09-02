/**
 * Created by Pierre-Yves on 8/29/2016.
 */




/** Utility **/
function executeScripts(js_includes, tabId, callback) {
    js_includes.forEach(function (url) {
        chrome.tabs.executeScript(tabId, {file: url}, callback);
    });
}