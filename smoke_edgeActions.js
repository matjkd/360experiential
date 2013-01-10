
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'smoke-1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",28500,function(sym,e){sym.play("start1");});
//Edge binding end
})("smoke-1");
//Edge symbol end:'smoke-1'

//=========================================================

//Edge symbol: 'viral'
(function(symbolName){})("ambientmedia");
//Edge symbol end:'ambientmedia'

//=========================================================

//Edge symbol: 'ambient'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cloudhover}","mouseover",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cloudhover}","mouseout",function(sym,e){});
//Edge binding end
})("guerillamarketing");
//Edge symbol end:'guerillamarketing'

//=========================================================

//Edge symbol: 'guerilla'
(function(symbolName){})("viralmarketing");
//Edge symbol end:'viralmarketing'

//=========================================================

//Edge symbol: 'ambientmove'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ambient3}","mouseover",function(sym,e){hoverAmbient();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ambient3}","mouseout",function(sym,e){unhoverAmbient();});
//Edge binding end
})("guerrillaMove");
//Edge symbol end:'guerrillaMove'

//=========================================================

//Edge symbol: 'ambientmove Copy 1'
(function(symbolName){})("ambientmove Copy 1");
//Edge symbol end:'ambientmove Copy 1'

//=========================================================

//Edge symbol: 'guerillamove'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play("start");});
//Edge binding end
})("viralMove");
//Edge symbol end:'viralMove'

//=========================================================

//Edge symbol: 'viralmove'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",37492,function(sym,e){sym.play("start");});
//Edge binding end
})("ambientMove");
//Edge symbol end:'ambientMove'

//=========================================================

//Edge symbol: 'ambient2'
(function(symbolName){})("ambient2");
//Edge symbol end:'ambient2'

//=========================================================

//Edge symbol: 'cloudhover'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_smoke-13}","mouseover",function(sym,e){hoverAmbient();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_smoke-13}","click",function(sym,e){CloudpopUp();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_smoke-13}","mouseout",function(sym,e){mouseoutAmbient();});
//Edge binding end
})("cloudhover");
//Edge symbol end:'cloudhover'

//=========================================================

//Edge symbol: 'smoke'
(function(symbolName){})("smoke");
//Edge symbol end:'smoke'

//=========================================================

//Edge symbol: 'ambientmedia_1'
(function(symbolName){})("experientialMarketingMove");
//Edge symbol end:'experientialMarketingMove'

//=========================================================

//Edge symbol: 'experirntialMove'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",37500,function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play("start");});
//Edge binding end
})("experirntial");
//Edge symbol end:'experirntial'

//=========================================================

//Edge symbol: 'experientialmove'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play("start");});
//Edge binding end
})("experientialmove");
//Edge symbol end:'experientialmove'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"smokelinks");