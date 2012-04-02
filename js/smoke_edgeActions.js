/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {





})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'smoke-1'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28500, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play("start1");
// insert code here
});
//Edge binding end





})("smoke-1");
//Edge symbol end:'smoke-1'

//=========================================================

//Edge symbol: 'viral'
(function(symbolName) {

})("viral");
//Edge symbol end:'viral'

//=========================================================

//Edge symbol: 'ambient'
(function(symbolName) {
Symbol.bindElementAction(compId, symbolName, "${_smoke-13}", "mouseover", function(sym, e) {

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_ambient}", "click", function(sym, e) {

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_smoke-13}", "click", function(sym, e) {
// insert code for mouse clicks here
alert("ambient popup");
});
//Edge binding end


})("ambient");
//Edge symbol end:'ambient'

//=========================================================

//Edge symbol: 'guerilla'
(function(symbolName) {

})("guerilla");
//Edge symbol end:'guerilla'

//=========================================================

//Edge symbol: 'ambientmove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21977, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play("start");
// insert code here
});
//Edge binding end


})("ambientmove");
//Edge symbol end:'ambientmove'

//=========================================================

//Edge symbol: 'ambientmove Copy 1'
(function(symbolName) {

})("ambientmove Copy 1");
//Edge symbol end:'ambientmove Copy 1'

//=========================================================

//Edge symbol: 'guerillamove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22092, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play("start");
// insert code here
});
//Edge binding end


})("guerillamove");
//Edge symbol end:'guerillamove'

//=========================================================

//Edge symbol: 'viralmove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21968, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play("start");
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37492, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play("start");
// insert code here
});
//Edge binding end


})("viralmove");
//Edge symbol end:'viralmove'

})(jQuery, AdobeEdge, "smokelinks");