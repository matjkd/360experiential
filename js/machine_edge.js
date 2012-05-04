/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'shadow',
            type:'image',
            rect:[0,0,279,19],
            fill:["rgba(0,0,0,0)",im+"shadow.png"],
            transform:[[502,481],[0,0],[0],[1,1]]
         },
         {
            id:'shadow2',
            type:'image',
            rect:[261,316,279,19],
            fill:["rgba(0,0,0,0)",im+"shadow.png"],
            transform:[[483,169],[0,0],[0],[0.4402,0.4729]]
         },
         {
            id:'smoke_puffCopy3',
            type:'rect',
            rect:[431,207,0,0]
         },
         {
            id:'makingideasworkIntoMachine',
            type:'rect',
            rect:[41,232,0,0]
         },
         {
            id:'machinebits2',
            type:'rect',
            rect:[0,0,0,0]
         },
         {
            id:'machine',
            type:'image',
            rect:[0,0,568,388],
            fill:["rgba(0,0,0,0)",im+"machine.png"],
            transform:[[385,112]]
         },
         {
            id:'dial12',
            type:'rect',
            rect:[0,0,0,0]
         },
         {
            id:'whistlemove',
            type:'rect',
            rect:[902,281,0,0]
         },
         {
            id:'sidedials2',
            type:'rect',
            rect:[0,0,0,0]
         },
         {
            id:'entrypipemove',
            type:'rect',
            rect:[392,269,0,0]
         },
         {
            id:'sidepipemove',
            type:'rect',
            rect:[733,335,0,0]
         },
         {
            id:'smoking-pipe',
            type:'rect',
            rect:[413,135,0,0]
         },
         {
            id:'smoking-pipe2',
            type:'rect',
            rect:[480,230,0,0]
         },
         {
            id:'smoking-pipe3',
            type:'rect',
            rect:[524,255,0,0]
         },
         {
            id:'smoking-pipe3Copy',
            type:'rect',
            rect:[524,255,0,0]
         },
         {
            id:'smoke_puff',
            type:'rect',
            rect:[431,207,0,0]
         },
         {
            id:'smoke_puff2',
            type:'rect',
            rect:[573,127,0,0]
         },
         {
            id:'smoke_puff3',
            type:'rect',
            rect:[606,91,0,0]
         },
         {
            id:'exit-Pipemove',
            type:'rect',
            rect:[798,252,0,0]
         },
         {
            id:'machinebodymove',
            type:'rect',
            rect:[504,265,0,0]
         },
         {
            id:'cogs',
            type:'rect',
            rect:[554,268,0,0]
         },
         {
            id:'sidemachine',
            type:'rect',
            rect:[823,357,0,0]
         },
         {
            id:'smoke_puffCopy',
            type:'rect',
            rect:[431,207,0,0]
         },
         {
            id:'smoke_puffCopy2',
            type:'rect',
            rect:[431,207,0,0]
         },
         {
            id:'needlerotate',
            type:'rect',
            rect:[719,203,0,0]
         },
         {
            id:'sideneedlemove',
            type:'rect',
            rect:[433,373,0,0]
         },
         {
            id:'logo',
            type:'rect',
            rect:[0,0,0,0]
         }],
         symbolInstances: [
         {
            id:'smoking-pipe3',
            symbolName:'smoking-pipe'
         },
         {
            id:'sidemachine',
            symbolName:'sidemachine'
         },
         {
            id:'sidepipemove',
            symbolName:'sidepipemove'
         },
         {
            id:'whistlemove',
            symbolName:'whistlemove'
         },
         {
            id:'smoke_puff2',
            symbolName:'smoke puff'
         },
         {
            id:'entrypipemove',
            symbolName:'entrypipemove'
         },
         {
            id:'smoke_puff',
            symbolName:'smoke puff'
         },
         {
            id:'logo',
            symbolName:'logo'
         },
         {
            id:'smoke_puff3',
            symbolName:'smoke puff'
         },
         {
            id:'sidedials2',
            symbolName:'sidedials'
         },
         {
            id:'sideneedlemove',
            symbolName:'sideneedlemove'
         },
         {
            id:'needlerotate',
            symbolName:'needlerotate'
         },
         {
            id:'smoke_puffCopy2',
            symbolName:'smoke puff'
         },
         {
            id:'smoking-pipe3Copy',
            symbolName:'smoking-pipe'
         },
         {
            id:'smoking-pipe',
            symbolName:'smoking-pipe'
         },
         {
            id:'machinebits2',
            symbolName:'machinebits'
         },
         {
            id:'smoke_puffCopy',
            symbolName:'smoke puff'
         },
         {
            id:'makingideasworkIntoMachine',
            symbolName:'makingideasworkIntoMachine'
         },
         {
            id:'machinebodymove',
            symbolName:'machinebodymove'
         },
         {
            id:'smoke_puffCopy3',
            symbolName:'smoke puff'
         },
         {
            id:'exit-Pipemove',
            symbolName:'exit-Pipemove'
         },
         {
            id:'smoking-pipe2',
            symbolName:'smoking-pipe'
         },
         {
            id:'dial12',
            symbolName:'dial1'
         },
         {
            id:'cogs',
            symbolName:'cogs'
         }
         ]
      },
   states: {
      "Base State": {
         "${_dial12}": [
            ["transform", "translateX", '669px'],
            ["transform", "translateY", '231px']
         ],
         "${_exit-Pipemove}": [
            ["transform", "scaleX", '0.93'],
            ["transform", "scaleY", '0.93'],
            ["transform", "translateY", '-141.45px'],
            ["transform", "translateX", '-105.51px']
         ],
         "${_machinebodymove}": [
            ["transform", "translateY", '39px']
         ],
         "${_smoke_puffCopy2}": [
            ["transform", "translateX", '316.098px'],
            ["transform", "rotateZ", '11deg'],
            ["transform", "scaleX", '0.524'],
            ["transform", "translateY", '79.231px'],
            ["transform", "scaleY", '0.538']
         ],
         "${_smoke_puffCopy}": [
            ["transform", "scaleX", '0.438'],
            ["transform", "translateX", '316.599px'],
            ["transform", "scaleY", '0.446'],
            ["transform", "translateY", '80.731px']
         ],
         "${_smoke_puff2}": [
            ["transform", "scaleX", '0.71'],
            ["transform", "scaleY", '0.679'],
            ["transform", "translateY", '-33px'],
            ["transform", "translateX", '-87px']
         ],
         "${_smoke_puff}": [
            ["transform", "scaleX", '0.849'],
            ["transform", "scaleY", '0.864'],
            ["transform", "translateY", '-98px'],
            ["transform", "translateX", '28px']
         ],
         "${_makingideasworkIntoMachine}": [
            ["transform", "translateY", '41px']
         ],
         "${_needlerotate}": [
            ["transform", "translateX", '1px'],
            ["transform", "translateY", '43px']
         ],
         "${_sideneedlemove}": [
            ["transform", "scaleX", '0.817'],
            ["transform", "translateY", '41px'],
            ["transform", "translateX", '-0.674px'],
            ["transform", "scaleY", '0.933']
         ],
         "${_machine}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '112px'],
            ["transform", "translateX", '385px']
         ],
         "${_logo}": [
            ["transform", "translateY", '41px']
         ],
         "${_sidemachine}": [
            ["transform", "translateY", '41px']
         ],
         "${_whistlemove}": [
            ["transform", "translateY", '41px']
         ],
         "${_smoking-pipe2}": [
            ["transform", "scaleX", '0.709'],
            ["transform", "translateY", '-104.95px'],
            ["transform", "scaleY", '0.789'],
            ["transform", "translateX", '78.998px']
         ],
         "${_entrypipemove}": [
            ["transform", "translateY", '41px']
         ],
         "${_smoking-pipe3Copy}": [
            ["transform", "scaleX", '0.348'],
            ["transform", "translateX", '289.367px'],
            ["transform", "translateY", '36.085px'],
            ["transform", "scaleY", '0.348']
         ],
         "${_cogs}": [
            ["transform", "translateY", '41px']
         ],
         "${_smoke_puffCopy3}": [
            ["transform", "translateX", '407.615px'],
            ["transform", "rotateZ", '76deg'],
            ["transform", "scaleX", '0.518'],
            ["transform", "translateY", '79.438px'],
            ["transform", "scaleY", '0.538']
         ],
         "${_sidedials2}": [
            ["transform", "translateX", '427px'],
            ["transform", "translateY", '382px']
         ],
         "${_smoking-pipe3}": [
            ["transform", "scaleX", '0.626'],
            ["transform", "translateY", '-118.917px'],
            ["transform", "scaleY", '0.626'],
            ["transform", "translateX", '3.999px']
         ],
         "${_sidepipemove}": [
            ["transform", "translateY", '41px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(178,200,187,0)'],
            ["style", "height", '500px'],
            ["style", "width", '960px']
         ],
         "${_smoke_puff3}": [
            ["transform", "translateX", '-87px'],
            ["transform", "translateY", '-33px']
         ],
         "${_smoking-pipe}": [
            ["transform", "translateX", '180px'],
            ["transform", "translateY", '-26px']
         ],
         "${_machinebits2}": [
            ["transform", "translateX", '862px'],
            ["transform", "translateY", '340px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid65", tween: [ "transform", "${_smoke_puff}", "scaleY", '0.864', { fromValue: '0.864'}], position: 0, duration: 0 },
            { id: "eid598", tween: [ "transform", "${_entrypipemove}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid592", tween: [ "transform", "${_logo}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "transform", "${_smoke_puff}", "scaleX", '0.849', { fromValue: '0.849'}], position: 0, duration: 0 },
            { id: "eid401", tween: [ "transform", "${_needlerotate}", "translateX", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid282", tween: [ "transform", "${_smoke_puffCopy}", "translateX", '316.599px', { fromValue: '316.599px'}], position: 0, duration: 0 },
            { id: "eid585", tween: [ "transform", "${_sideneedlemove}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "transform", "${_smoke_puffCopy3}", "translateX", '407.615px', { fromValue: '407.615px'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "transform", "${_smoking-pipe3}", "scaleX", '0.626', { fromValue: '0.626'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "transform", "${_whistlemove}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid594", tween: [ "transform", "${_sidepipemove}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid593", tween: [ "transform", "${_makingideasworkIntoMachine}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid443", tween: [ "transform", "${_sideneedlemove}", "scaleY", '0.933', { fromValue: '0.933'}], position: 0, duration: 0 },
            { id: "eid600", tween: [ "transform", "${_dial12}", "translateY", '231px', { fromValue: '231px'}], position: 0, duration: 0 },
            { id: "eid599", tween: [ "transform", "${_machinebodymove}", "translateY", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid596", tween: [ "transform", "${_sidedials2}", "translateY", '382px', { fromValue: '382px'}], position: 0, duration: 0 },
            { id: "eid591", tween: [ "transform", "${_sidemachine}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid582", tween: [ "transform", "${_needlerotate}", "translateY", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid292", tween: [ "transform", "${_smoke_puffCopy2}", "scaleY", '0.538', { fromValue: '0.538'}], position: 0, duration: 0 },
            { id: "eid589", tween: [ "transform", "${_cogs}", "translateY", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid581", tween: [ "transform", "${_machinebits2}", "translateY", '340px', { fromValue: '340px'}], position: 0, duration: 0 },
            { id: "eid278", tween: [ "transform", "${_smoke_puffCopy}", "scaleX", '0.438', { fromValue: '0.438'}], position: 0, duration: 0 },
            { id: "eid447", tween: [ "transform", "${_sideneedlemove}", "translateX", '-0.674px', { fromValue: '-0.674px'}], position: 0, duration: 0 },
            { id: "eid298", tween: [ "transform", "${_dial12}", "translateX", '669px', { fromValue: '669px'}], position: 0, duration: 0 },
            { id: "eid590", tween: [ "transform", "${_smoke_puffCopy}", "translateY", '80.731px', { fromValue: '80.731px'}], position: 0, duration: 0 },
            { id: "eid587", tween: [ "transform", "${_smoking-pipe3Copy}", "translateY", '36.085px', { fromValue: '36.085px'}], position: 0, duration: 0 },
            { id: "eid291", tween: [ "transform", "${_smoke_puffCopy2}", "scaleX", '0.524', { fromValue: '0.524'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_smoke_puff3}", "translateX", '-87px', { fromValue: '-87px'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_smoke_puff}", "translateX", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid601", tween: [ "transform", "${_smoking-pipe}", "translateY", '-26px', { fromValue: '-26px'}], position: 0, duration: 0 },
            { id: "eid597", tween: [ "transform", "${_smoking-pipe2}", "translateY", '-104.95px', { fromValue: '-104.95px'}], position: 0, duration: 0 },
            { id: "eid267", tween: [ "transform", "${_smoking-pipe3Copy}", "scaleY", '0.348', { fromValue: '0.348'}], position: 0, duration: 0 },
            { id: "eid293", tween: [ "transform", "${_smoke_puffCopy2}", "translateX", '316.098px', { fromValue: '316.098px'}], position: 0, duration: 0 },
            { id: "eid583", tween: [ "transform", "${_smoke_puff2}", "translateY", '-33px', { fromValue: '-33px'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "transform", "${_smoking-pipe3Copy}", "scaleX", '0.348', { fromValue: '0.348'}], position: 0, duration: 0 },
            { id: "eid119", tween: [ "transform", "${_exit-Pipemove}", "translateX", '-105.51px', { fromValue: '-105.51px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_smoking-pipe}", "translateX", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid312", tween: [ "transform", "${_smoke_puffCopy3}", "scaleX", '0.518', { fromValue: '0.518'}], position: 0, duration: 0 },
            { id: "eid602", tween: [ "transform", "${_smoking-pipe3}", "translateY", '-118.917px', { fromValue: '-118.917px'}], position: 0, duration: 0 },
            { id: "eid588", tween: [ "transform", "${_smoke_puffCopy2}", "translateY", '79.231px', { fromValue: '79.231px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "transform", "${_smoking-pipe2}", "translateX", '78.998px', { fromValue: '78.998px'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "transform", "${_smoking-pipe2}", "scaleY", '0.789', { fromValue: '0.789'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "transform", "${_exit-Pipemove}", "scaleY", '0.93', { fromValue: '0.93'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_smoking-pipe3}", "scaleY", '0.626', { fromValue: '0.626'}], position: 0, duration: 0 },
            { id: "eid584", tween: [ "transform", "${_exit-Pipemove}", "translateY", '-141.45px', { fromValue: '-141.45px'}], position: 0, duration: 0 },
            { id: "eid239", tween: [ "transform", "${_sidedials2}", "translateX", '427px', { fromValue: '427px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "transform", "${_smoke_puff2}", "scaleX", '0.71', { fromValue: '0.71'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "transform", "${_exit-Pipemove}", "scaleX", '0.93', { fromValue: '0.93'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "transform", "${_smoke_puffCopy3}", "rotateZ", '76deg', { fromValue: '76deg'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "transform", "${_smoking-pipe2}", "scaleX", '0.709', { fromValue: '0.709'}], position: 0, duration: 0 },
            { id: "eid580", tween: [ "transform", "${_smoke_puffCopy3}", "translateY", '79.438px', { fromValue: '79.438px'}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "transform", "${_machinebits2}", "translateX", '862px', { fromValue: '862px'}], position: 0, duration: 0 },
            { id: "eid586", tween: [ "transform", "${_smoke_puff3}", "translateY", '-33px', { fromValue: '-33px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "transform", "${_smoke_puffCopy2}", "rotateZ", '11deg', { fromValue: '11deg'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "transform", "${_smoking-pipe3}", "translateX", '3.999px', { fromValue: '3.999px'}], position: 0, duration: 0 },
            { id: "eid264", tween: [ "transform", "${_smoking-pipe3Copy}", "translateX", '289.367px', { fromValue: '289.367px'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "transform", "${_smoke_puff2}", "translateX", '-87px', { fromValue: '-87px'}], position: 0, duration: 0 },
            { id: "eid279", tween: [ "transform", "${_smoke_puffCopy}", "scaleY", '0.446', { fromValue: '0.446'}], position: 0, duration: 0 },
            { id: "eid442", tween: [ "transform", "${_sideneedlemove}", "scaleX", '0.817', { fromValue: '0.817'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "transform", "${_smoke_puff2}", "scaleY", '0.679', { fromValue: '0.679'}], position: 0, duration: 0 },
            { id: "eid603", tween: [ "transform", "${_smoke_puff}", "translateY", '-98px', { fromValue: '-98px'}], position: 0, duration: 0 },
            { id: "eid37", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_smoking-pipe}', [42] ], ""], position: 0 },
            { id: "eid68", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_smoke_puff3}', [618] ], ""], position: 0 },
            { id: "eid38", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_smoking-pipe2}', [265] ], ""], position: 0 },
            { id: "eid67", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_smoke_puff}', [1482] ], ""], position: 0 },
            { id: "eid288", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_smoke_puffCopy2}', [773] ], ""], position: 0 }         ]
      }
   }
},
"pipe-1": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'pipe-1',
      rect: [-617,-75,100,378],
      transform: [[593,-15],{},{},[0.52,0.52]],
      fill: ['rgba(0,0,0,0)','images/pipe-1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '196.56px'],
            ["style", "width", '52px']
         ],
         "${_pipe-1}": [
            ["transform", "scaleX", '0.52'],
            ["transform", "translateX", '593px'],
            ["transform", "translateY", '-15px'],
            ["transform", "scaleY", '0.52']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"smoking-pipe": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'pipe-14',
      type: 'rect',
      rect: [40,128,0,0]
   }],
   symbolInstances: [
   {
      id: 'pipe-14',
      symbolName: 'pipe-1'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '209.79px'],
            ["style", "width", '55.5px']
         ],
         "${_pipe-14}": [
            ["transform", "scaleX", '1.115'],
            ["transform", "scaleY", '1.066'],
            ["transform", "translateY", '-115px'],
            ["transform", "translateX", '-40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 735,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid11", tween: [ "transform", "${_pipe-14}", "translateY", '-115px', { fromValue: '-115px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "transform", "${_pipe-14}", "translateX", '-40px', { fromValue: '-40px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "transform", "${_pipe-14}", "scaleY", '1.025', { fromValue: '1.066'}], position: 0, duration: 235 },
            { id: "eid14", tween: [ "transform", "${_pipe-14}", "scaleY", '1.027', { fromValue: '1.025'}], position: 235, duration: 115 },
            { id: "eid17", tween: [ "transform", "${_pipe-14}", "scaleY", '1.066', { fromValue: '1.027'}], position: 350, duration: 105 },
            { id: "eid15", tween: [ "transform", "${_pipe-14}", "scaleY", '1.014', { fromValue: '1.066'}], position: 455, duration: 280 },
            { id: "eid18", tween: [ "transform", "${_pipe-14}", "scaleX", '1.096', { fromValue: '1.115'}], position: 0, duration: 345 },
            { id: "eid21", tween: [ "transform", "${_pipe-14}", "scaleX", '1.115', { fromValue: '1.096'}], position: 345, duration: 390 }         ]
      }
   }
},
"smoke": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [120,123,173,162],
      id: 'smoke-1',
      transform: [[-120,-123],[0,0],[0],[1,1]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/smoke-1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_smoke-1}": [
            ["transform", "translateX", '-120px'],
            ["transform", "translateY", '-123px']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '173px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"smoke puff": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'smoke3',
      type: 'rect',
      rect: [31,51,0,0]
   }],
   symbolInstances: [
   {
      id: 'smoke3',
      symbolName: 'smoke'
   }   ]
   },
   states: {
      "Base State": {
         "${_smoke3}": [
            ["transform", "translateX", '-31px'],
            ["transform", "scaleX", '0.132'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-51px'],
            ["transform", "scaleY", '0.134']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '173px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1990,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid47", tween: [ "transform", "${_smoke3}", "translateX", '-86.999px', { fromValue: '-31px'}], position: 0, duration: 1990 },
            { id: "eid49", tween: [ "transform", "${_smoke3}", "scaleX", '0.305', { fromValue: '0.132'}], position: 0, duration: 1990 },
            { id: "eid50", tween: [ "transform", "${_smoke3}", "scaleY", '0.306', { fromValue: '0.134'}], position: 0, duration: 1990 },
            { id: "eid53", tween: [ "style", "${_smoke3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 495 },
            { id: "eid55", tween: [ "style", "${_smoke3}", "opacity", '0', { fromValue: '1'}], position: 1495, duration: 495 },
            { id: "eid48", tween: [ "transform", "${_smoke3}", "translateY", '-93px', { fromValue: '-51px'}], position: 0, duration: 1990 }         ]
      }
   }
},
"exit-Pipe": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-206,-35,186,270],
      id: 'exitpipe',
      transform: [[206,35]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/exitpipe.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_exitpipe}": [
            ["transform", "translateX", '206px'],
            ["transform", "translateY", '35px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "width", '186px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"exit-Pipemove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'exit-Pipe3',
      type: 'rect',
      rect: [122,188,0,0]
   },
   {
      id: 'smokespurt',
      type: 'rect',
      rect: [110,1,0,0]
   }],
   symbolInstances: [
   {
      id: 'smokespurt',
      symbolName: 'smokespurt'
   },
   {
      id: 'exit-Pipe3',
      symbolName: 'exit-Pipe'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "width", '186px']
         ],
         "${_exit-Pipe3}": [
            ["transform", "scaleY", '0.948'],
            ["transform", "translateX", '-129.508px'],
            ["transform", "scaleX", '0.887'],
            ["style", "height", '270px'],
            ["transform", "translateY", '-197.02px'],
            ["style", "width", '186px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5620.3665060523,
         autoPlay: true,
         labels: {
            "start": 0,
            "spurt": 5082
         },
         timeline: [
            { id: "eid87", tween: [ "transform", "${_exit-Pipe3}", "translateX", '-129.508px', { fromValue: '-129.508px'}], position: 0, duration: 0 },
            { id: "eid533", tween: [ "transform", "${_exit-Pipe3}", "translateX", '-129.508px', { fromValue: '-129.508px'}], position: 5091, duration: 0 },
            { id: "eid90", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.94', { fromValue: '0.948'}], position: 0, duration: 554 },
            { id: "eid91", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.962', { fromValue: '0.94'}], position: 554, duration: 546 },
            { id: "eid94", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.94', { fromValue: '0.962'}], position: 1100, duration: 546 },
            { id: "eid95", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.962', { fromValue: '0.94'}], position: 1646, duration: 548 },
            { id: "eid98", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.939', { fromValue: '0.962'}], position: 2195, duration: 548 },
            { id: "eid131", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.961', { fromValue: '0.939'}], position: 3298, duration: 565 },
            { id: "eid133", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.939', { fromValue: '0.961'}], position: 3863, duration: 527 },
            { id: "eid135", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.961', { fromValue: '0.939'}], position: 4391, duration: 526 },
            { id: "eid539", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.879', { fromValue: '0.961'}], position: 5091, duration: 140 },
            { id: "eid541", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '1.018', { fromValue: '0.879'}], position: 5231, duration: 147 },
            { id: "eid543", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.921', { fromValue: '1.018'}], position: 5378, duration: 98 },
            { id: "eid556", tween: [ "transform", "${_exit-Pipe3}", "scaleY", '0.906', { fromValue: '0.921'}], position: 5476, duration: 143 },
            { id: "eid536", tween: [ "style", "${_exit-Pipe3}", "height", '270px', { fromValue: '270px'}], position: 5091, duration: 0 },
            { id: "eid89", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-196.019px', { fromValue: '-197.02px'}], position: 0, duration: 554 },
            { id: "eid92", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-199.018px', { fromValue: '-196.019px'}], position: 554, duration: 546 },
            { id: "eid93", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-196.073px', { fromValue: '-199.018px'}], position: 1100, duration: 546 },
            { id: "eid96", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-199.072px', { fromValue: '-196.073px'}], position: 1646, duration: 548 },
            { id: "eid97", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-196.1px', { fromValue: '-199.072px'}], position: 2195, duration: 548 },
            { id: "eid99", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-196.199px', { fromValue: '-196.1px'}], position: 2743, duration: 554 },
            { id: "eid130", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-199.198px', { fromValue: '-196.199px'}], position: 3298, duration: 565 },
            { id: "eid132", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-196.23px', { fromValue: '-199.198px'}], position: 3863, duration: 527 },
            { id: "eid134", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-199.229px', { fromValue: '-196.23px'}], position: 4391, duration: 526 },
            { id: "eid540", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-191.229px', { fromValue: '-199.229px'}], position: 5091, duration: 140 },
            { id: "eid542", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-209.23px', { fromValue: '-191.229px'}], position: 5231, duration: 147 },
            { id: "eid544", tween: [ "transform", "${_exit-Pipe3}", "translateY", '-196.23px', { fromValue: '-209.23px'}], position: 5378, duration: 98 },
            { id: "eid535", tween: [ "style", "${_exit-Pipe3}", "width", '186px', { fromValue: '186px'}], position: 5091, duration: 0 },
            { id: "eid81", tween: [ "transform", "${_exit-Pipe3}", "scaleX", '0.887', { fromValue: '0.887'}], position: 0, duration: 0 },
            { id: "eid537", tween: [ "transform", "${_exit-Pipe3}", "scaleX", '0.887', { fromValue: '0.887'}], position: 5091, duration: 0 }         ]
      }
   }
},
"machineBody": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'machine-body',
      rect: [-84,-253,267,189],
      transform: [[84,253]],
      fill: ['rgba(0,0,0,0)','images/machine-body.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '189px'],
            ["style", "width", '267px']
         ],
         "${_machine-body}": [
            ["transform", "translateX", '84px'],
            ["transform", "translateY", '253px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"cog1": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'cog1',
      rect: [-40,-62,71,71],
      transform: [[40,62],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','images/cog1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '71px']
         ],
         "${_cog1}": [
            ["transform", "translateX", '40px'],
            ["transform", "translateY", '62px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"cog2": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'cog2',
      rect: [-275,-120,76,76],
      transform: [[275,120],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','images/cog2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cog2}": [
            ["transform", "translateX", '275px'],
            ["transform", "translateY", '120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"cog3": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'cog3',
      rect: [-168,-61,60,60],
      transform: [[168,61],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','images/cog3.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '60px']
         ],
         "${_cog3}": [
            ["transform", "translateX", '168px'],
            ["transform", "translateY", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"cogs": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'cog12',
      type: 'rect',
      rect: [-514,-206,0,0]
   },
   {
      id: 'cog22',
      type: 'rect',
      rect: [-279,-148,0,0]
   },
   {
      id: 'cog32',
      type: 'rect',
      rect: [-386,-207,0,0]
   }],
   symbolInstances: [
   {
      id: 'cog22',
      symbolName: 'cog2'
   },
   {
      id: 'cog32',
      symbolName: 'cog3'
   },
   {
      id: 'cog12',
      symbolName: 'cog1'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '131px'],
            ["style", "width", '166px']
         ],
         "${_cog12}": [
            ["transform", "translateX", '609px'],
            ["transform", "translateY", '206px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_cog32}": [
            ["transform", "translateX", '386px'],
            ["transform", "translateY", '268px'],
            ["transform", "rotateZ", '0']
         ],
         "${_cog22}": [
            ["transform", "translateX", '334px'],
            ["transform", "translateY", '203px'],
            ["transform", "rotateZ", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid150", tween: [ "transform", "${_cog12}", "translateY", '206px', { fromValue: '206px'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "transform", "${_cog12}", "rotateZ", '-361deg', { fromValue: '0deg'}], position: 0, duration: 15000 },
            { id: "eid148", tween: [ "transform", "${_cog12}", "translateX", '609px', { fromValue: '609px'}], position: 0, duration: 0 },
            { id: "eid168", tween: [ "transform", "${_cog32}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 15000 },
            { id: "eid158", tween: [ "transform", "${_cog22}", "rotateZ", '361deg', { fromValue: '0deg'}], position: 0, duration: 15000 },
            { id: "eid146", tween: [ "transform", "${_cog32}", "translateX", '386px', { fromValue: '386px'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "transform", "${_cog22}", "translateX", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "transform", "${_cog32}", "translateY", '268px', { fromValue: '268px'}], position: 0, duration: 0 },
            { id: "eid143", tween: [ "transform", "${_cog22}", "translateY", '203px', { fromValue: '203px'}], position: 0, duration: 0 }         ]
      }
   }
},
"machinebodymove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'machineBody',
      type: 'rect',
      rect: [-420,-12,0,0]
   }],
   symbolInstances: [
   {
      id: 'machineBody',
      symbolName: 'machineBody'
   }   ]
   },
   states: {
      "Base State": {
         "${_machineBody}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '189px'],
            ["transform", "translateX", '421.066px'],
            ["transform", "translateY", '12.23px'],
            ["style", "width", '267px']
         ],
         "${symbolSelector}": [
            ["style", "height", '185.787px'],
            ["style", "width", '267px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2428.3345269584,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid216", tween: [ "style", "${_machineBody}", "width", '267px', { fromValue: '267px'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_machineBody}", "height", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "eid320", tween: [ "transform", "${_machineBody}", "translateX", '421.066px', { fromValue: '421.066px'}], position: 0, duration: 2428 }         ]
      }
   }
},
"sidepipe": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'sidepipe',
      type: 'image',
      rect: [0,0,120,88],
      fill: ['rgba(0,0,0,0)','images/sidepipe.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"entrypipe": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'entrypipe',
      type: 'image',
      rect: [0,0,129,81],
      fill: ['rgba(0,0,0,0)','images/entrypipe.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '81px'],
            ["style", "width", '129px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"sidedials": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'sidedials',
      type: 'image',
      rect: [0,0,98,118],
      fill: ['rgba(0,0,0,0)','images/sidedials.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '118px'],
            ["style", "width", '98px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"sidepipemove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'sidepipe2',
      type: 'rect',
      rect: [-733,-335,0,0]
   }],
   symbolInstances: [
   {
      id: 'sidepipe2',
      symbolName: 'sidepipe'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '120px']
         ],
         "${_sidepipe2}": [
            ["transform", "translateX", '733px'],
            ["transform", "scaleY", '1.044'],
            ["style", "height", '88px'],
            ["transform", "scaleX", '1.04'],
            ["transform", "translateY", '335px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid242", tween: [ "style", "${_sidepipe2}", "height", '88px', { fromValue: '88px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "transform", "${_sidepipe2}", "translateY", '335px', { fromValue: '335px'}], position: 0, duration: 0 },
            { id: "eid251", tween: [ "transform", "${_sidepipe2}", "scaleY", '1.04', { fromValue: '1.044'}], position: 737, duration: 512 },
            { id: "eid246", tween: [ "transform", "${_sidepipe2}", "scaleX", '0.991', { fromValue: '1.04'}], position: 246, duration: 360 },
            { id: "eid254", tween: [ "transform", "${_sidepipe2}", "scaleX", '1.04', { fromValue: '0.991'}], position: 737, duration: 512 },
            { id: "eid243", tween: [ "transform", "${_sidepipe2}", "translateX", '732.495px', { fromValue: '733px'}], position: 0, duration: 246 },
            { id: "eid245", tween: [ "transform", "${_sidepipe2}", "translateX", '732.499px', { fromValue: '732.495px'}], position: 246, duration: 360 },
            { id: "eid255", tween: [ "transform", "${_sidepipe2}", "translateX", '733px', { fromValue: '732.499px'}], position: 737, duration: 512 },
            { id: "eid241", tween: [ "style", "${_sidepipe2}", "width", '120px', { fromValue: '120px'}], position: 0, duration: 0 }         ]
      }
   }
},
"sidemachine": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'side-machine',
      rect: [-823,-357,123,97],
      transform: [[823,357],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','images/side-machine.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_side-machine}": [
            ["transform", "translateX", '823px'],
            ["transform", "translateY", '357px']
         ],
         "${symbolSelector}": [
            ["style", "height", '97px'],
            ["style", "width", '123px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"whistle": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'whistle',
      type: 'image',
      rect: [0,0,23,80],
      fill: ['rgba(0,0,0,0)','images/whistle.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"dial1": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'dial1',
      type: 'image',
      rect: [0,0,91,76],
      fill: ['rgba(0,0,0,0)','images/dial1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '91px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"machinebits": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'machinebits',
      type: 'image',
      rect: [0,0,41,65],
      fill: ['rgba(0,0,0,0)','images/machinebits.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '41px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"makingideaswork": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'makingIdeasWork',
      rect: [-41,-234,324,193],
      transform: [[41,234],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','images/makingIdeasWork.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '193px'],
            ["style", "width", '324px']
         ],
         "${_makingIdeasWork}": [
            ["transform", "translateX", '41px'],
            ["transform", "translateY", '234px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"makingideasworkIntoMachine": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'makingideaswork',
      type: 'rect',
      rect: [0,2,0,0]
   }],
   symbolInstances: [
   {
      id: 'makingideaswork',
      symbolName: 'makingideaswork'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '193px'],
            ["style", "width", '324px']
         ],
         "${_makingideaswork}": [
            ["transform", "translateX", '-40px'],
            ["transform", "rotateZ", '0'],
            ["style", "opacity", '0'],
            ["style", "width", '324px'],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '0'],
            ["style", "height", '193px'],
            ["transform", "translateY", '-34px'],
            ["transform", "skewY", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid338", tween: [ "style", "${_makingideaswork}", "height", '193px', { fromValue: '193px'}], position: 8373, duration: 0 },
            { id: "eid353", tween: [ "style", "${_makingideaswork}", "height", '193px', { fromValue: '193px'}], position: 8664, duration: 0 },
            { id: "eid347", tween: [ "transform", "${_makingideaswork}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 8574, duration: 26 },
            { id: "eid348", tween: [ "transform", "${_makingideaswork}", "rotateZ", '2deg', { fromValue: '-2deg'}], position: 8600, duration: 26 },
            { id: "eid349", tween: [ "transform", "${_makingideaswork}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 8627, duration: 36 },
            { id: "eid379", tween: [ "transform", "${_makingideaswork}", "scaleY", '1', { fromValue: '1'}], position: 8373, duration: 0 },
            { id: "eid344", tween: [ "transform", "${_makingideaswork}", "scaleY", '1.056', { fromValue: '1'}], position: 8373, duration: 126 },
            { id: "eid359", tween: [ "transform", "${_makingideaswork}", "scaleY", '0.1', { fromValue: '1.056'}], position: 8675, duration: 72 },
            { id: "eid362", tween: [ "transform", "${_makingideaswork}", "scaleY", '0.106', { fromValue: '0.1'}], position: 8748, duration: 114 },
            { id: "eid376", tween: [ "transform", "${_makingideaswork}", "translateX", '-0.821px', { fromValue: '-40px'}], position: 0, duration: 8373 },
            { id: "eid378", tween: [ "transform", "${_makingideaswork}", "translateX", '0px', { fromValue: '-0.821px'}], position: 8373, duration: 302 },
            { id: "eid357", tween: [ "transform", "${_makingideaswork}", "translateX", '57.382px', { fromValue: '0px'}], position: 8675, duration: 72 },
            { id: "eid360", tween: [ "transform", "${_makingideaswork}", "translateX", '388.351px', { fromValue: '57.382px'}], position: 8748, duration: 114 },
            { id: "eid354", tween: [ "transform", "${_makingideaswork}", "skewX", '0', { fromValue: '0deg'}], position: 8664, duration: 0 },
            { id: "eid356", tween: [ "transform", "${_makingideaswork}", "skewX", '15deg', { fromValue: '0deg'}], position: 8675, duration: 72 },
            { id: "eid330", tween: [ "style", "${_makingideaswork}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
            { id: "eid339", tween: [ "style", "${_makingideaswork}", "opacity", '1', { fromValue: '1'}], position: 8373, duration: 0 },
            { id: "eid337", tween: [ "style", "${_makingideaswork}", "width", '324px', { fromValue: '324px'}], position: 8373, duration: 0 },
            { id: "eid352", tween: [ "style", "${_makingideaswork}", "width", '324px', { fromValue: '324px'}], position: 8664, duration: 0 },
            { id: "eid355", tween: [ "transform", "${_makingideaswork}", "skewY", '0', { fromValue: '0deg'}], position: 8664, duration: 0 },
            { id: "eid375", tween: [ "transform", "${_makingideaswork}", "translateY", '-5.004px', { fromValue: '-34px'}], position: 0, duration: 8373 },
            { id: "eid340", tween: [ "transform", "${_makingideaswork}", "translateY", '-2.499px', { fromValue: '-5.004px'}], position: 8373, duration: 126 },
            { id: "eid358", tween: [ "transform", "${_makingideaswork}", "translateY", '-22.56px', { fromValue: '-2.499px'}], position: 8675, duration: 72 },
            { id: "eid361", tween: [ "transform", "${_makingideaswork}", "translateY", '-19.998px', { fromValue: '-22.56px'}], position: 8748, duration: 114 }         ]
      }
   }
},
"entrypipemove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'entrypipe2',
      type: 'rect',
      rect: [-392,-269,0,0]
   }],
   symbolInstances: [
   {
      id: 'entrypipe2',
      symbolName: 'entrypipe'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '81px'],
            ["style", "width", '129px']
         ],
         "${_entrypipe2}": [
            ["transform", "translateX", '392px'],
            ["style", "height", '81px'],
            ["transform", "scaleY", '0.998'],
            ["transform", "translateY", '269px'],
            ["style", "width", '129px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 406.2625521143,
         autoPlay: true,
         labels: {
            "start": 0,
            "intake": 249
         },
         timeline: [
            { id: "eid389", tween: [ "transform", "${_entrypipe2}", "translateY", '268.999px', { fromValue: '269px'}], position: 0, duration: 249 },
            { id: "eid386", tween: [ "transform", "${_entrypipe2}", "translateY", '268.999px', { fromValue: '268.999px'}], position: 249, duration: 74 },
            { id: "eid391", tween: [ "transform", "${_entrypipe2}", "translateY", '268.998px', { fromValue: '268.999px'}], position: 323, duration: 83 },
            { id: "eid316", tween: [ "transform", "${_entrypipe2}", "translateX", '392px', { fromValue: '392px'}], position: 0, duration: 0 },
            { id: "eid380", tween: [ "transform", "${_entrypipe2}", "translateX", '392px', { fromValue: '392px'}], position: 249, duration: 0 },
            { id: "eid384", tween: [ "style", "${_entrypipe2}", "width", '129px', { fromValue: '129px'}], position: 0, duration: 0 },
            { id: "eid382", tween: [ "style", "${_entrypipe2}", "width", '129px', { fromValue: '129px'}], position: 249, duration: 0 },
            { id: "eid385", tween: [ "style", "${_entrypipe2}", "height", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
            { id: "eid383", tween: [ "style", "${_entrypipe2}", "height", '81px', { fromValue: '81px'}], position: 249, duration: 0 },
            { id: "eid390", tween: [ "transform", "${_entrypipe2}", "scaleY", '1.122', { fromValue: '0.998'}], position: 249, duration: 74 },
            { id: "eid392", tween: [ "transform", "${_entrypipe2}", "scaleY", '0.972', { fromValue: '1.122'}], position: 323, duration: 83 }         ]
      }
   }
},
"needle-1": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[254,172],{},{},[0.9999,0.9999]],
      id: 'dial-needle',
      type: 'image',
      rect: [-249,-178,22,22],
      fill: ['rgba(0,0,0,0)','images/dial-needle.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dial-needle}": [
            ["transform", "scaleX", '0.999'],
            ["transform", "translateX", '254.629px'],
            ["transform", "scaleY", '0.999'],
            ["transform", "translateY", '172.358px']
         ],
         "${symbolSelector}": [
            ["style", "height", '22px'],
            ["style", "width", '22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"needlerotate": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'needle-12',
      type: 'rect',
      rect: [13,15,0,0]
   }],
   symbolInstances: [
   {
      id: 'needle-12',
      symbolName: 'needle-1'
   }   ]
   },
   states: {
      "Base State": {
         "${_needle-12}": [
            ["transform", "translateX", '-13.542px'],
            ["transform", "translateY", '-10.942px'],
            ["transform", "rotateZ", '201deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '26.631004px'],
            ["style", "width", '28.618005px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5861.7882519349,
         autoPlay: true,
         labels: {
            "start": 0,
            "rise": 2139
         },
         timeline: [
            { id: "eid400", tween: [ "transform", "${_needle-12}", "translateX", '-13.542px', { fromValue: '-13.542px'}], position: 0, duration: 0 },
            { id: "eid399", tween: [ "transform", "${_needle-12}", "translateY", '-10.942px', { fromValue: '-10.942px'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "transform", "${_needle-12}", "rotateZ", '166deg', { fromValue: '201deg'}], position: 0, duration: 507 },
            { id: "eid406", tween: [ "transform", "${_needle-12}", "rotateZ", '190deg', { fromValue: '166deg'}], position: 507, duration: 169 },
            { id: "eid407", tween: [ "transform", "${_needle-12}", "rotateZ", '171deg', { fromValue: '190deg'}], position: 677, duration: 316 },
            { id: "eid405", tween: [ "transform", "${_needle-12}", "rotateZ", '161deg', { fromValue: '171deg'}], position: 994, duration: 286 },
            { id: "eid408", tween: [ "transform", "${_needle-12}", "rotateZ", '173deg', { fromValue: '161deg'}], position: 1280, duration: 331 },
            { id: "eid409", tween: [ "transform", "${_needle-12}", "rotateZ", '191deg', { fromValue: '173deg'}], position: 1611, duration: 151 },
            { id: "eid410", tween: [ "transform", "${_needle-12}", "rotateZ", '177deg', { fromValue: '191deg'}], position: 1762, duration: 99 },
            { id: "eid411", tween: [ "transform", "${_needle-12}", "rotateZ", '202deg', { fromValue: '177deg'}], position: 1862, duration: 142 },
            { id: "eid412", tween: [ "transform", "${_needle-12}", "rotateZ", '175deg', { fromValue: '202deg'}], position: 2004, duration: 134 },
            { id: "eid413", tween: [ "transform", "${_needle-12}", "rotateZ", '445deg', { fromValue: '175deg'}], position: 2139, duration: 672 },
            { id: "eid414", tween: [ "transform", "${_needle-12}", "rotateZ", '459deg', { fromValue: '445deg'}], position: 2811, duration: 89 },
            { id: "eid415", tween: [ "transform", "${_needle-12}", "rotateZ", '451deg', { fromValue: '459deg'}], position: 2901, duration: 109 },
            { id: "eid450", tween: [ "transform", "${_needle-12}", "rotateZ", '380deg', { fromValue: '451deg'}], position: 3010, duration: 1046 },
            { id: "eid451", tween: [ "transform", "${_needle-12}", "rotateZ", '378deg', { fromValue: '380deg'}], position: 4056, duration: 63 },
            { id: "eid455", tween: [ "transform", "${_needle-12}", "rotateZ", '278deg', { fromValue: '378deg'}], position: 4120, duration: 780 },
            { id: "eid453", tween: [ "transform", "${_needle-12}", "rotateZ", '277deg', { fromValue: '278deg'}], position: 4901, duration: 73 },
            { id: "eid456", tween: [ "transform", "${_needle-12}", "rotateZ", '172deg', { fromValue: '277deg'}], position: 4974, duration: 887 }         ]
      }
   }
},
"sideneedle": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-3,2],[0,0],[0],[1,1]],
      id: 'sidedialneedle',
      type: 'image',
      rect: [0,0,8,8],
      fill: ['rgba(0,0,0,0)','images/sidedialneedle.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '8px'],
            ["style", "width", '8px']
         ],
         "${_sidedialneedle}": [
            ["transform", "translateX", '-3.683px'],
            ["transform", "translateY", '2.679px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"sideneedlemove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'sideneedle',
      type: 'rect',
      rect: [-433,-373,0,0]
   },
   {
      id: 'sideneedle2',
      type: 'rect',
      rect: [33,5,0,0]
   }],
   symbolInstances: [
   {
      id: 'sideneedle',
      symbolName: 'sideneedle'
   },
   {
      id: 'sideneedle2',
      symbolName: 'sideneedle'
   }   ]
   },
   states: {
      "Base State": {
         "${_sideneedle}": [
            ["transform", "translateX", '438.683px'],
            ["transform", "translateY", '374.985px'],
            ["transform", "rotateZ", '5deg']
         ],
         "${_sideneedle2}": [
            ["transform", "translateX", '1px'],
            ["transform", "translateY", '-3px'],
            ["transform", "rotateZ", '-2deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '10.679px'],
            ["style", "width", '11.683px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         labels: {
            "start": 0,
            "rise": 1227
         },
         timeline: [
            { id: "eid429", tween: [ "transform", "${_sideneedle}", "translateX", '438.683px', { fromValue: '438.683px'}], position: 0, duration: 0 },
            { id: "eid444", tween: [ "transform", "${_sideneedle2}", "translateX", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid424", tween: [ "transform", "${_sideneedle2}", "translateY", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid427", tween: [ "transform", "${_sideneedle2}", "rotateZ", '6deg', { fromValue: '-2deg'}], position: 0, duration: 506 },
            { id: "eid433", tween: [ "transform", "${_sideneedle2}", "rotateZ", '-1deg', { fromValue: '6deg'}], position: 506, duration: 481 },
            { id: "eid434", tween: [ "transform", "${_sideneedle2}", "rotateZ", '-10deg', { fromValue: '-1deg'}], position: 987, duration: 240 },
            { id: "eid435", tween: [ "transform", "${_sideneedle2}", "rotateZ", '267deg', { fromValue: '-10deg'}], position: 1227, duration: 1359 },
            { id: "eid449", tween: [ "transform", "${_sideneedle2}", "rotateZ", '26deg', { fromValue: '267deg'}], position: 2586, duration: 663 },
            { id: "eid428", tween: [ "transform", "${_sideneedle}", "translateY", '374.985px', { fromValue: '374.985px'}], position: 0, duration: 0 },
            { id: "eid431", tween: [ "transform", "${_sideneedle}", "rotateZ", '-4deg', { fromValue: '5deg'}], position: 0, duration: 514 },
            { id: "eid432", tween: [ "transform", "${_sideneedle}", "rotateZ", '7deg', { fromValue: '-4deg'}], position: 514, duration: 473 },
            { id: "eid436", tween: [ "transform", "${_sideneedle}", "rotateZ", '-1deg', { fromValue: '7deg'}], position: 987, duration: 605 },
            { id: "eid437", tween: [ "transform", "${_sideneedle}", "rotateZ", '272deg', { fromValue: '-1deg'}], position: 1592, duration: 994 },
            { id: "eid448", tween: [ "transform", "${_sideneedle}", "rotateZ", '35deg', { fromValue: '272deg'}], position: 2586, duration: 663 }         ]
      }
   }
},
"whistlemove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'smoke2',
      type: 'rect',
      rect: [36,55,0,0]
   },
   {
      id: 'smoke',
      type: 'rect',
      rect: [16,-44,0,0]
   },
   {
      id: 'whistle2',
      type: 'rect',
      rect: [-902,-281,0,0]
   }],
   symbolInstances: [
   {
      id: 'smoke',
      symbolName: 'smoke'
   },
   {
      id: 'smoke2',
      symbolName: 'smoke'
   },
   {
      id: 'whistle2',
      symbolName: 'whistle'
   }   ]
   },
   states: {
      "Base State": {
         "${_smoke2}": [
            ["transform", "translateX", '-103px'],
            ["transform", "scaleY", '0.122'],
            ["style", "height", '162px'],
            ["transform", "scaleX", '0.109'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-92px'],
            ["style", "width", '173px']
         ],
         "${_smoke}": [
            ["transform", "translateX", '-88px'],
            ["transform", "scaleX", '0.12'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '5px'],
            ["transform", "scaleY", '0.11']
         ],
         "${_whistle2}": [
            ["transform", "translateX", '902px'],
            ["style", "height", '80px'],
            ["transform", "skewY", '0'],
            ["transform", "skewX", '0'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '282px'],
            ["style", "width", '23px']
         ],
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1641.6323534415,
         autoPlay: true,
         labels: {
            "start": 0,
            "toot": 936
         },
         timeline: [
            { id: "eid460", tween: [ "style", "${_whistle2}", "height", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid507", tween: [ "style", "${_smoke2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid525", tween: [ "style", "${_smoke2}", "opacity", '1', { fromValue: '0'}], position: 1192, duration: 28 },
            { id: "eid532", tween: [ "style", "${_smoke2}", "opacity", '0', { fromValue: '1'}], position: 1329, duration: 67 },
            { id: "eid491", tween: [ "transform", "${_smoke}", "scaleX", '0.12', { fromValue: '0.12'}], position: 1133, duration: 0 },
            { id: "eid499", tween: [ "transform", "${_smoke}", "scaleX", '0.189', { fromValue: '0.12'}], position: 1155, duration: 165 },
            { id: "eid519", tween: [ "style", "${_smoke2}", "height", '162px', { fromValue: '162px'}], position: 1194, duration: 0 },
            { id: "eid492", tween: [ "transform", "${_smoke}", "scaleY", '0.11', { fromValue: '0.11'}], position: 1133, duration: 0 },
            { id: "eid498", tween: [ "transform", "${_smoke}", "scaleY", '0.146', { fromValue: '0.11'}], position: 1155, duration: 165 },
            { id: "eid495", tween: [ "style", "${_smoke}", "opacity", '1', { fromValue: '0'}], position: 1133, duration: 21 },
            { id: "eid503", tween: [ "style", "${_smoke}", "opacity", '0', { fromValue: '1'}], position: 1274, duration: 42 },
            { id: "eid489", tween: [ "transform", "${_smoke}", "translateX", '-88px', { fromValue: '-88px'}], position: 1133, duration: 0 },
            { id: "eid496", tween: [ "transform", "${_smoke}", "translateX", '-64px', { fromValue: '-88px'}], position: 1155, duration: 165 },
            { id: "eid465", tween: [ "transform", "${_whistle2}", "scaleY", '0.899', { fromValue: '1'}], position: 0, duration: 762 },
            { id: "eid467", tween: [ "transform", "${_whistle2}", "scaleY", '0.623', { fromValue: '0.899'}], position: 762, duration: 232 },
            { id: "eid470", tween: [ "transform", "${_whistle2}", "scaleY", '1.248', { fromValue: '0.623'}], position: 994, duration: 149 },
            { id: "eid477", tween: [ "transform", "${_whistle2}", "scaleY", '1.226', { fromValue: '1.248'}], position: 1260, duration: 49 },
            { id: "eid482", tween: [ "transform", "${_whistle2}", "scaleY", '1.206', { fromValue: '1.226'}], position: 1309, duration: 44 },
            { id: "eid484", tween: [ "transform", "${_whistle2}", "scaleY", '1.198', { fromValue: '1.206'}], position: 1354, duration: 21 },
            { id: "eid478", tween: [ "transform", "${_whistle2}", "scaleY", '0.923', { fromValue: '1.198'}], position: 1582, duration: 46 },
            { id: "eid474", tween: [ "transform", "${_whistle2}", "skewY", '0', { fromValue: '0deg'}], position: 1119, duration: 0 },
            { id: "eid513", tween: [ "transform", "${_smoke2}", "scaleY", '0.122', { fromValue: '0.122'}], position: 0, duration: 0 },
            { id: "eid521", tween: [ "transform", "${_smoke2}", "scaleY", '0.245', { fromValue: '0.122'}], position: 1244, duration: 94 },
            { id: "eid529", tween: [ "transform", "${_smoke2}", "scaleY", '0.269', { fromValue: '0.245'}], position: 1338, duration: 58 },
            { id: "eid459", tween: [ "style", "${_whistle2}", "width", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid463", tween: [ "transform", "${_whistle2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid518", tween: [ "style", "${_smoke2}", "width", '173px', { fromValue: '173px'}], position: 1194, duration: 0 },
            { id: "eid490", tween: [ "transform", "${_smoke}", "translateY", '5px', { fromValue: '5px'}], position: 1133, duration: 0 },
            { id: "eid497", tween: [ "transform", "${_smoke}", "translateY", '-13px', { fromValue: '5px'}], position: 1155, duration: 165 },
            { id: "eid466", tween: [ "transform", "${_whistle2}", "translateY", '285px', { fromValue: '282px'}], position: 0, duration: 762 },
            { id: "eid469", tween: [ "transform", "${_whistle2}", "translateY", '296px', { fromValue: '285px'}], position: 762, duration: 232 },
            { id: "eid471", tween: [ "transform", "${_whistle2}", "translateY", '279px', { fromValue: '296px'}], position: 994, duration: 149 },
            { id: "eid480", tween: [ "transform", "${_whistle2}", "translateY", '285px', { fromValue: '279px'}], position: 1326, duration: 66 },
            { id: "eid296", tween: [ "transform", "${_whistle2}", "translateX", '902px', { fromValue: '902px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "transform", "${_whistle2}", "translateX", '903px', { fromValue: '902px'}], position: 762, duration: 232 },
            { id: "eid479", tween: [ "transform", "${_whistle2}", "translateX", '902px', { fromValue: '903px'}], position: 1326, duration: 66 },
            { id: "eid512", tween: [ "transform", "${_smoke2}", "scaleX", '0.109', { fromValue: '0.109'}], position: 0, duration: 0 },
            { id: "eid520", tween: [ "transform", "${_smoke2}", "scaleX", '0.201', { fromValue: '0.109'}], position: 1244, duration: 94 },
            { id: "eid528", tween: [ "transform", "${_smoke2}", "scaleX", '0.281', { fromValue: '0.201'}], position: 1338, duration: 58 },
            { id: "eid475", tween: [ "transform", "${_whistle2}", "skewX", '-2.861deg', { fromValue: '0deg'}], position: 1119, duration: 49 },
            { id: "eid476", tween: [ "transform", "${_whistle2}", "skewX", '1.228deg', { fromValue: '-2.861deg'}], position: 1169, duration: 91 },
            { id: "eid481", tween: [ "transform", "${_whistle2}", "skewX", '-2deg', { fromValue: '1.228deg'}], position: 1260, duration: 49 },
            { id: "eid483", tween: [ "transform", "${_whistle2}", "skewX", '4deg', { fromValue: '-2deg'}], position: 1309, duration: 44 },
            { id: "eid485", tween: [ "transform", "${_whistle2}", "skewX", '0deg', { fromValue: '4deg'}], position: 1392, duration: 4 },
            { id: "eid486", tween: [ "transform", "${_whistle2}", "skewX", '1deg', { fromValue: '0deg'}], position: 1397, duration: 27 },
            { id: "eid510", tween: [ "transform", "${_smoke2}", "translateX", '-103px', { fromValue: '-103px'}], position: 0, duration: 0 },
            { id: "eid522", tween: [ "transform", "${_smoke2}", "translateX", '-90px', { fromValue: '-103px'}], position: 1186, duration: 152 },
            { id: "eid526", tween: [ "transform", "${_smoke2}", "translateX", '-80px', { fromValue: '-90px'}], position: 1338, duration: 58 },
            { id: "eid511", tween: [ "transform", "${_smoke2}", "translateY", '-92px', { fromValue: '-92px'}], position: 0, duration: 0 },
            { id: "eid523", tween: [ "transform", "${_smoke2}", "translateY", '-104px', { fromValue: '-92px'}], position: 1194, duration: 143 },
            { id: "eid527", tween: [ "transform", "${_smoke2}", "translateY", '-112px', { fromValue: '-104px'}], position: 1338, duration: 58 }         ]
      }
   }
},
"smokespurt": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'smoke3',
      type: 'rect',
      rect: [29,7,0,0]
   },
   {
      id: 'smoke3Copy',
      type: 'rect',
      rect: [29,7,0,0]
   }],
   symbolInstances: [
   {
      id: 'smoke3',
      symbolName: 'smoke'
   },
   {
      id: 'smoke3Copy',
      symbolName: 'smoke'
   }   ]
   },
   states: {
      "Base State": {
         "${_smoke3Copy}": [
            ["transform", "translateX", '-127.08px'],
            ["transform", "scaleX", '0.236'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-69.145px'],
            ["transform", "scaleY", '0.246']
         ],
         "${_smoke3}": [
            ["transform", "translateX", '-95px'],
            ["transform", "scaleX", '0.236'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-69px'],
            ["transform", "scaleY", '0.246']
         ],
         "${symbolSelector}": [
            ["style", "height", '39.852px'],
            ["style", "width", '40.828px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 708,
         autoPlay: true,
         labels: {
            "start": 0,
            "spurt": 98
         },
         timeline: [
            { id: "eid574", tween: [ "transform", "${_smoke3Copy}", "translateX", '-145.08px', { fromValue: '-127.08px'}], position: 0, duration: 689 },
            { id: "eid568", tween: [ "transform", "${_smoke3Copy}", "translateX", '-124.08px', { fromValue: '-145.08px'}], position: 689, duration: -510 },
            { id: "eid561", tween: [ "style", "${_smoke3Copy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid562", tween: [ "style", "${_smoke3Copy}", "opacity", '0.65812564181955', { fromValue: '0'}], position: 178, duration: 268 },
            { id: "eid563", tween: [ "style", "${_smoke3Copy}", "opacity", '0', { fromValue: '0.65812564181955'}], position: 447, duration: 242 },
            { id: "eid545", tween: [ "transform", "${_smoke3}", "scaleX", '0.236', { fromValue: '0.236'}], position: 0, duration: 0 },
            { id: "eid578", tween: [ "transform", "${_smoke3}", "scaleX", '0.397', { fromValue: '0.236'}], position: 376, duration: 242 },
            { id: "eid546", tween: [ "transform", "${_smoke3}", "scaleY", '0.246', { fromValue: '0.246'}], position: 0, duration: 0 },
            { id: "eid579", tween: [ "transform", "${_smoke3}", "scaleY", '0.418', { fromValue: '0.246'}], position: 376, duration: 242 },
            { id: "eid550", tween: [ "style", "${_smoke3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid554", tween: [ "style", "${_smoke3}", "opacity", '0.65812564181955', { fromValue: '0'}], position: 107, duration: 268 },
            { id: "eid555", tween: [ "style", "${_smoke3}", "opacity", '0', { fromValue: '0.65812564181955'}], position: 376, duration: 242 },
            { id: "eid548", tween: [ "transform", "${_smoke3}", "translateY", '-69px', { fromValue: '-69px'}], position: 0, duration: 0 },
            { id: "eid553", tween: [ "transform", "${_smoke3}", "translateY", '-130px', { fromValue: '-69px'}], position: 107, duration: 510 },
            { id: "eid577", tween: [ "transform", "${_smoke3Copy}", "scaleY", '0.381', { fromValue: '0.246'}], position: 71, duration: 618 },
            { id: "eid576", tween: [ "transform", "${_smoke3Copy}", "scaleX", '0.374', { fromValue: '0.236'}], position: 71, duration: 618 },
            { id: "eid547", tween: [ "transform", "${_smoke3}", "translateX", '-95px', { fromValue: '-95px'}], position: 0, duration: 0 },
            { id: "eid552", tween: [ "transform", "${_smoke3}", "translateX", '-77px', { fromValue: '-95px'}], position: 107, duration: 510 },
            { id: "eid575", tween: [ "transform", "${_smoke3Copy}", "translateY", '-126.145px', { fromValue: '-69.145px'}], position: 0, duration: 689 },
            { id: "eid571", tween: [ "transform", "${_smoke3Copy}", "translateY", '-70.145px', { fromValue: '-69.145px'}], position: 689, duration: -510 },
            { id: "eid573", tween: [ "transform", "${_smoke3Copy}", "translateY", '-69.145px', { fromValue: '-126.145px'}], position: 689, duration: 3 }         ]
      }
   }
},
"logo": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'experientialLogo',
      type: 'image',
      rect: [0,0,248,159],
      fill: ['rgba(0,0,0,0)','images/experientialLogo.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '159px'],
            ["style", "width", '248px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "machine");
