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

//Edge symbol: 'pipe-1'
(function(symbolName) {




})("pipe-1");
//Edge symbol end:'pipe-1'

//=========================================================

//Edge symbol: 'smoking-pipe'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 735, function(sym, e) {
sym.playReverse();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.play();

// insert code here
});
//Edge binding end





})("smoking-pipe");
//Edge symbol end:'smoking-pipe'

//=========================================================

//Edge symbol: 'smoke'
(function(symbolName) {




})("smoke");
//Edge symbol end:'smoke'

//=========================================================

//Edge symbol: 'smoke puff'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1990, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end





})("smoke puff");
//Edge symbol end:'smoke puff'

//=========================================================

//Edge symbol: 'exit-Pipe'
(function(symbolName) {




})("exit-Pipe");
//Edge symbol end:'exit-Pipe'

//=========================================================

//Edge symbol: 'exit-Pipemove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4875, function(sym, e) {
sym.playReverse();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.play();
// insert code here
});
//Edge binding end



Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5620, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5270, function(sym, e) {
// insert code here
sym.getSymbol("smokespurt").play('spurt')
});
//Edge binding end



})("exit-Pipemove");
//Edge symbol end:'exit-Pipemove'

//=========================================================

//Edge symbol: 'machineBody'
(function(symbolName) {



})("machineBody");
//Edge symbol end:'machineBody'

//=========================================================

//Edge symbol: 'cog1'
(function(symbolName) {



})("cog1");
//Edge symbol end:'cog1'

//=========================================================

//Edge symbol: 'cog2'
(function(symbolName) {



})("cog2");
//Edge symbol end:'cog2'

//=========================================================

//Edge symbol: 'cog3'
(function(symbolName) {



})("cog3");
//Edge symbol end:'cog3'

//=========================================================

//Edge symbol: 'cogs'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end




})("cogs");
//Edge symbol end:'cogs'

//=========================================================

//Edge symbol: 'machinebodymove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2428, function(sym, e) {

// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end




})("machinebodymove");
//Edge symbol end:'machinebodymove'

//=========================================================

//Edge symbol: 'sidepipe'
(function(symbolName) {



})("sidepipe");
//Edge symbol end:'sidepipe'

//=========================================================

//Edge symbol: 'entrypipe'
(function(symbolName) {



})("entrypipe");
//Edge symbol end:'entrypipe'

//=========================================================

//Edge symbol: 'sidedials'
(function(symbolName) {



})("sidedials");
//Edge symbol end:'sidedials'

//=========================================================

//Edge symbol: 'sidepipemove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 983, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end




})("sidepipemove");
//Edge symbol end:'sidepipemove'

//=========================================================

//Edge symbol: 'sidemachine'
(function(symbolName) {



})("sidemachine");
//Edge symbol end:'sidemachine'

//=========================================================

//Edge symbol: 'whistle'
(function(symbolName) {



})("whistle");
//Edge symbol end:'whistle'

//=========================================================

//Edge symbol: 'dial1'
(function(symbolName) {



})("dial1");
//Edge symbol end:'dial1'

//=========================================================

//Edge symbol: 'machinebits'
(function(symbolName) {



})("machinebits");
//Edge symbol end:'machinebits'

//=========================================================

//Edge symbol: 'makingideaswork'
(function(symbolName) {



})("makingideaswork");
//Edge symbol end:'makingideaswork'

//=========================================================

//Edge symbol: 'makingideasworkIntoMachine'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
// insert code here
sym.getComposition().getStage().getSymbol("needlerotate").play('rise')
sym.stop();



setTimeout(
function()
{
sym.play();
},600);




});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8748, function(sym, e) {
// insert code here
sym.getComposition().getStage().getSymbol("entrypipemove").play('intake')
});
//Edge binding end




})("makingideasworkIntoMachine");
//Edge symbol end:'makingideasworkIntoMachine'

//=========================================================

//Edge symbol: 'entrypipemove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 406, function(sym, e) {
// stop the timeline at the given position (ms or label)
sym.stop('start');
// insert code here
});
//Edge binding end




})("entrypipemove");
//Edge symbol end:'entrypipemove'

//=========================================================

//Edge symbol: 'needle-1'
(function(symbolName) {


})("needle-1");
//Edge symbol end:'needle-1'

//=========================================================

//Edge symbol: 'needlerotate'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2008, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
// insert code here
sym.getComposition().getStage().getSymbol("sideneedlemove").play('rise')
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5836, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2414, function(sym, e) {
// insert code here
sym.getComposition().getStage().getSymbol("whistlemove").play('toot')
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2769, function(sym, e) {
// insert code here
sym.getComposition().getStage().getSymbol("exit-Pipemove").play('spurt')
});
//Edge binding end



})("needlerotate");
//Edge symbol end:'needlerotate'

//=========================================================

//Edge symbol: 'sideneedle'
(function(symbolName) {


})("sideneedle");
//Edge symbol end:'sideneedle'

//=========================================================

//Edge symbol: 'sideneedlemove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 987, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end



})("sideneedlemove");
//Edge symbol end:'sideneedlemove'

//=========================================================

//Edge symbol: 'whistlemove'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 762, function(sym, e) {
sym.playReverse();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.play();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1641, function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play('start');
// insert code here
});
//Edge binding end



})("whistlemove");
//Edge symbol end:'whistlemove'

//=========================================================

//Edge symbol: 'smokespurt'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8, function(sym, e) {
sym.stop();
// insert code here
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 708, function(sym, e) {
// stop the timeline at the given position (ms or label)
sym.stop('start');
// insert code here
});
//Edge binding end



})("smokespurt");
//Edge symbol end:'smokespurt'

//=========================================================

//Edge symbol: 'logo'
(function(symbolName) {

})("logo");
//Edge symbol end:'logo'

})(jQuery, AdobeEdge, "machine");