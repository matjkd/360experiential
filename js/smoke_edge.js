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
            id:'ambientmove2',
            type:'rect',
            rect:[819,347,0,0]
         },
         {
            id:'guerillamove',
            type:'rect',
            rect:[402,192,0,0]
         },
         {
            id:'viralmove',
            type:'rect',
            rect:[716,221,0,0]
         }],
         symbolInstances: [
         {
            id:'viralmove',
            symbolName:'viralmove'
         },
         {
            id:'ambientmove2',
            symbolName:'ambientmove'
         },
         {
            id:'guerillamove',
            symbolName:'guerillamove'
         }
         ]
      },
   states: {
      "Base State": {
         "${_ambientmove2}": [
            ["transform", "translateX", '-181px'],
            ["transform", "translateY", '-98px']
         ],
         "${_guerillamove}": [
            ["transform", "translateX", '20px'],
            ["transform", "translateY", '-10px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0)'],
            ["style", "height", '400px'],
            ["style", "width", '960px']
         ],
         "${_viralmove}": [
            ["transform", "translateX", '-0.5px'],
            ["transform", "scaleX", '0.994']
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
            { id: "eid147", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_guerillamove}', ['middle'] ], ""], position: 0 },
            { id: "eid191", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_viralmove}', ['end'] ], ""], position: 0 }         ]
      }
   }
},
"viral": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'smoke-12',
      type: 'image',
      rect: [143,107,173,162],
      fill: ['rgba(0,0,0,0)','images/smoke-1.png']
   },
   {
      transform: [[-268,-15],{},{},[0.695,0.695]],
      id: 'viral2',
      type: 'image',
      rect: [253,61,205,60],
      fill: ['rgba(0,0,0,0)','images/viral.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_smoke-12}": [
            ["transform", "translateX", '-143px'],
            ["transform", "translateY", '-107px']
         ],
         "${_viral2}": [
            ["transform", "scaleX", '0.695'],
            ["transform", "translateY", '-15.15px'],
            ["transform", "translateX", '-268.262px'],
            ["transform", "scaleY", '0.695']
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
            { id: "eid49", tween: [ "transform", "${_smoke-12}", "translateX", '-143px', { fromValue: '-143px'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "transform", "${_smoke-12}", "translateY", '-107px', { fromValue: '-107px'}], position: 0, duration: 0 }         ]
      }
   }
},
"ambient": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'smoke-13',
      type: 'image',
      rect: [2,0,173,162],
      fill: ['rgba(0,0,0,0)','images/smoke-1.png']
   },
   {
      transform: [[-133,-27],{},{},[0.6986,0.6986]],
      id: 'ambient',
      type: 'image',
      rect: [55,73,340,60],
      fill: ['rgba(0,0,0,0)','images/ambient.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ambient}": [
            ["transform", "scaleX", '0.698'],
            ["transform", "translateY", '-27.04px'],
            ["transform", "translateX", '-133.892px'],
            ["transform", "scaleY", '0.698']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '180.88px']
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
"guerilla": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-306,-80],[0,0],[0],[1,1]],
      id: 'smoke-14',
      type: 'image',
      rect: [368,80,173,162],
      fill: ['rgba(0,0,0,0)','images/smoke-1.png']
   },
   {
      transform: [[-159,-24],[0,0],[0],[0.9189,0.919]],
      id: 'guerilla',
      type: 'image',
      rect: [149,81,243,60],
      fill: ['rgba(0,0,0,0)','images/guerilla.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_guerilla}": [
            ["transform", "scaleX", '0.918'],
            ["transform", "translateY", '-24.41px'],
            ["transform", "translateX", '-159.247px'],
            ["transform", "scaleY", '0.919']
         ],
         "${_smoke-14}": [
            ["transform", "translateX", '-306px'],
            ["transform", "translateY", '-80px']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '235.324994px']
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
"ambientmove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'ambient3',
      type: 'rect',
      rect: [57,-2,0,0]
   }],
   symbolInstances: [
   {
      id: 'ambient3',
      symbolName: 'ambient'
   }   ]
   },
   states: {
      "Base State": {
         "${_ambient3}": [
            ["transform", "translateX", '-11.5px'],
            ["transform", "scaleY", '0.286'],
            ["style", "height", '162px'],
            ["transform", "scaleX", '0.293'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '48.025px'],
            ["style", "width", '180px']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '237.32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 37483,
         autoPlay: true,
         labels: {
            "start": 0,
            "middle": 9711
         },
         timeline: [
            { id: "eid86", tween: [ "style", "${_ambient3}", "height", '162px', { fromValue: '162px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_ambient3}", "width", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "transform", "${_ambient3}", "translateY", '-224.999px', { fromValue: '48.025px'}], position: 0, duration: 37483 },
            { id: "eid89", tween: [ "transform", "${_ambient3}", "translateX", '-806px', { fromValue: '-11.5px'}], position: 0, duration: 37483 },
            { id: "eid110", tween: [ "style", "${_ambient3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2989 },
            { id: "eid108", tween: [ "style", "${_ambient3}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 3121 },
            { id: "eid116", tween: [ "transform", "${_ambient3}", "scaleX", '1.139', { fromValue: '0.293'}], position: 0, duration: 22116 },
            { id: "eid327", tween: [ "transform", "${_ambient3}", "scaleX", '0.599', { fromValue: '1.139'}], position: 22116, duration: 3075 },
            { id: "eid117", tween: [ "transform", "${_ambient3}", "scaleY", '1.262', { fromValue: '0.286'}], position: 0, duration: 22116 },
            { id: "eid328", tween: [ "transform", "${_ambient3}", "scaleY", '0.597', { fromValue: '1.262'}], position: 22116, duration: 3128 }         ]
      }
   }
},
"guerillamove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'guerilla3',
      type: 'rect',
      rect: [63,108,0,0]
   }],
   symbolInstances: [
   {
      id: 'guerilla3',
      symbolName: 'guerilla'
   }   ]
   },
   states: {
      "Base State": {
         "${_guerilla3}": [
            ["transform", "translateX", '167.999px'],
            ["transform", "scaleX", '0.355'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-3.499px'],
            ["transform", "scaleY", '0.406']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '235.324994px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 37575,
         autoPlay: true,
         labels: {
            "start": 0,
            "middle": 7884
         },
         timeline: [
            { id: "eid137", tween: [ "style", "${_guerilla3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2700 },
            { id: "eid142", tween: [ "style", "${_guerilla3}", "opacity", '0', { fromValue: '1'}], position: 19500, duration: 2505 },
            { id: "eid151", tween: [ "transform", "${_guerilla3}", "scaleX", '1.153', { fromValue: '0.355'}], position: 0, duration: 37490 },
            { id: "eid153", tween: [ "transform", "${_guerilla3}", "scaleY", '1.098', { fromValue: '0.406'}], position: 0, duration: 37575 },
            { id: "eid131", tween: [ "transform", "${_guerilla3}", "translateX", '-651px', { fromValue: '167.999px'}], position: 0, duration: 37464 },
            { id: "eid132", tween: [ "transform", "${_guerilla3}", "translateY", '-223px', { fromValue: '-3.499px'}], position: 0, duration: 37464 }         ]
      }
   }
},
"viralmove": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'viral5',
      type: 'rect',
      rect: [130,-6,0,0]
   }],
   symbolInstances: [
   {
      id: 'viral5',
      symbolName: 'viral'
   }   ]
   },
   states: {
      "Base State": {
         "${_viral5}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.158'],
            ["transform", "translateX", '-107.782px'],
            ["transform", "scaleX", '0.14'],
            ["style", "height", '162px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '86.985px'],
            ["style", "width", '173px']
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
         duration: 37670,
         autoPlay: true,
         labels: {
            "start": 0,
            "middle": 9993,
            "end": 16750,
            "afterend": 26503
         },
         timeline: [
            { id: "eid170", tween: [ "style", "${_viral5}", "height", '162px', { fromValue: '162px'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "style", "${_viral5}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
            { id: "eid361", tween: [ "style", "${_viral5}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
            { id: "eid362", tween: [ "style", "${_viral5}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
            { id: "eid363", tween: [ "style", "${_viral5}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
            { id: "eid364", tween: [ "style", "${_viral5}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "transform", "${_viral5}", "scaleY", '0.724', { fromValue: '0.158'}], position: 0, duration: 7906 },
            { id: "eid186", tween: [ "transform", "${_viral5}", "scaleY", '1.27', { fromValue: '0.724'}], position: 7906, duration: 25697 },
            { id: "eid182", tween: [ "style", "${_viral5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1537 },
            { id: "eid190", tween: [ "style", "${_viral5}", "opacity", '0', { fromValue: '1'}], position: 18821, duration: 3043 },
            { id: "eid178", tween: [ "transform", "${_viral5}", "scaleX", '0.772', { fromValue: '0.14'}], position: 0, duration: 7875 },
            { id: "eid185", tween: [ "transform", "${_viral5}", "scaleX", '1.264', { fromValue: '0.772'}], position: 7875, duration: 25729 },
            { id: "eid172", tween: [ "transform", "${_viral5}", "translateX", '-1000px', { fromValue: '-107.782px'}], position: 0, duration: 37659 },
            { id: "eid169", tween: [ "style", "${_viral5}", "width", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
            { id: "eid173", tween: [ "transform", "${_viral5}", "translateY", '-161px', { fromValue: '86.985px'}], position: 0, duration: 37670 }         ]
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
})(jQuery, AdobeEdge, "smokelinks");
