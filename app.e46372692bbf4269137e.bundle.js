webpackJsonp([1],{124:function(n,t,e){"use strict";var i=e(7),l=e(215);e.d(t,"a",function(){return o});var r=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},o=function(){function n(){this.flipped=new i.EventEmitter,this.backCard=l.a.find(function(n){return"back"===n.name})}return n.prototype.flip=function(n){n.flipped||this.flipped.emit(n)},n}();r([e.i(i.Input)(),a("design:type",Object)],o.prototype,"info",void 0),r([e.i(i.Output)(),a("design:type",Object)],o.prototype,"flipped",void 0),o=r([e.i(i.Component)({selector:"card",template:'\n    <div class="card" [class.flipped]="info.flipped" (click)="flip(info)">\n        <img class="front" src="{{ info.url }}"/>\n        <img class="back" src="{{ backCard.url }}"/>\n    </div>\n    ',styles:["\n    :host {\n        width: 100px;\n        height: 121px;\n        margin-right: 3px;\n        cursor: pointer;\n        position: relative;\n        perspective: 800px;\n    }\n    .card {\n        width: 100%;\n        height: 100%;\n        transition: transform 1s;\n        transform-style: preserve-3d;\n    }\n    .card.flipped {\n        transform: rotateY( 180deg );\n    }\n    .card img {\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        backface-visibility: hidden;\n        -webkit-backface-visibility: hidden;\n    }\n    .card .back {\n        background: blue;\n        transform: rotateY( 0deg );\n    }\n    .card .front {\n        background: blue;\n        transform: rotateY( 180deg );\n    }\n    @media screen and (max-width: 450px) {\n        :host {\n            width: 92px;\n            height: 111px;\n            margin-right: 1px;\n        }\n    }\n    @media screen and (max-width: 380px) {\n        :host {\n            width: 85px;\n            height: 102px;\n            margin-right: 1px;\n        }\n    }\n    @media screen and (max-width: 360px) {\n        :host {\n            width: 70px;\n            height: 84px;\n            margin-right: 1px;\n        }\n    }\n    "]}),a("design:paramtypes",[])],o)},125:function(n,t,e){"use strict";var i=e(7),l=e(52),r=(e.n(l),e(0)),a=(e.n(r),e(40));e.d(t,"a",function(){return s});var o=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},u=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},s=function(){function n(n){this.actions=n}return n.prototype.trackByCards=function(n,t){return t._id},n}();o([e.i(l.select)(),u("design:type",r.Observable)],s.prototype,"cards$",void 0),s=o([e.i(i.Component)({selector:"chessboard",template:'\n    <card *ngFor="let card of cards$ | async; trackBy:trackByCards" [info]="card" (flipped)="actions.flipCard($event)"></card>\n    ',styles:["\n    :host {\n        margin-top: 20px;\n        width: 100%;\n        background-color: #fff;\n        height: 530px;\n        border-radius: 4px;\n        padding: 10px 5px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        align-content: space-around;\n    }\n    card:nth-child(4n) {\n        margin-right: 0px;\n    }\n    @media screen and (max-width: 450px) {\n        :host {\n            height: 480px;\n            padding: 10px 0px;\n        }\n    }\n    @media screen and (max-width: 370px) {\n        :host {\n            height: 450px;\n        }\n    }\n    "]}),u("design:paramtypes",[a.a])],s)},126:function(n,t,e){"use strict";var i=e(7),l=e(52),r=(e.n(l),e(0));e.n(r);e.d(t,"a",function(){return u});var a=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},o=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},u=function(){function n(){}return n}();a([e.i(l.select)(),o("design:type",r.Observable)],u.prototype,"remains$",void 0),a([e.i(l.select)(),o("design:type",r.Observable)],u.prototype,"highestSpeed$",void 0),u=a([e.i(i.Component)({selector:"dashboard",template:'\n    <logo></logo>\n    <info-board title="Remains" [text]="remains$ | async"></info-board>\n    <info-board title="Top" [text]="highestSpeed$ | async"></info-board>\n    ',styles:["\n    :host{\n        width: 100%;\n        height: 100px;\n        display: flex;\n        justify-content: space-between;\n        align-items: stretch;\n        flex-shrink: 0;\n    }\n    "]})],u)},127:function(n,t,e){"use strict";var i=e(7);e.d(t,"a",function(){return a});var l=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},r=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},a=function(){function n(){}return n}();l([e.i(i.Input)(),r("design:type",String)],a.prototype,"title",void 0),l([e.i(i.Input)(),r("design:type",String)],a.prototype,"text",void 0),a=l([e.i(i.Component)({selector:"info-board",template:'\n    <h2>{{ title }}</h2>\n    <h3 class="text">{{ text }}</h3>\n    ',styles:["\n    :host {\n        width: 120px;\n        padding: 10px;\n        background-color: #bbada0;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        color: #eae0d1;\n    }\n    .text {\n        color: #fff;\n    }\n\n    @media screen and (max-width: 450px) {\n        :host {\n            width: 105px;\n        }\n    }\n    @media screen and (max-width: 380px) {\n        :host {\n            width: 95px;\n        }\n        h2 {\n            font-size: 20px;\n        }\n    }\n    @media screen and (max-width: 360px) {\n        :host {\n            width: 90px;\n        }\n    }\n    "]})],a)},128:function(n,t,e){"use strict";var i=e(7);e.d(t,"a",function(){return r});var l=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},r=function(){function n(){}return n}();r=l([e.i(i.Component)({selector:"logo",template:'\n    <h1 class="logo">\n        <a href="https://github.com/leftstick/angular2-memory-game" target="_blank">Memory</a>\n    </h1>\n    ',styles:["\n    :host {\n        width: 160px;\n        padding: 5px;\n        border-radius: 5px;\n        background-color: #5979ac;\n        color: #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    @media screen and (max-width: 450px) {\n        :host {\n            width: 150px;\n        }\n    }\n    @media screen and (max-width: 380px) {\n        :host {\n            width: 140px;\n        }\n    }\n    @media screen and (max-width: 360px) {\n        :host {\n            width: 110px;\n        }\n        a {\n            font-size: 18px;\n        }\n    }\n    "]})],r)},129:function(n,t,e){"use strict";var i=e(7),l=e(52),r=(e.n(l),e(0)),a=(e.n(r),e(40)),o=e(669),u=e(93);e.d(t,"a",function(){return d});var s=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},c=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},d=function(){function n(n){this.actions=n,this.status=u.a}return n.prototype.reset=function(n){e.i(o.a)(n),this.actions.reset()},n}();s([e.i(l.select)(),c("design:type",r.Observable)],d.prototype,"status$",void 0),s([e.i(l.select)(),c("design:type",r.Observable)],d.prototype,"elapsedMs$",void 0),d=s([e.i(i.Component)({selector:"status",template:'\n    <span *ngIf="(status$ | async) === status.READY">Ready</span>\n    <span *ngIf="(status$ | async) === status.PLAYING">Playing</span>\n    <span class="hand" *ngIf="(status$ | async) === status.PASS" (click)="reset($event)">Play again</span>\n    <span class="elapsed">{{ elapsedMs$ | async }} s</span>\n    ',styles:["\n    :host {\n        position: relative;\n        margin-top: 10px;\n        width: 100%;\n        height: 20px;\n        text-align: center;\n        font-size: 18px;\n        font-weight: bold;\n    }\n    .hand {\n        cursor: pointer;\n    }\n    .elapsed {\n        position: absolute;\n        right: 10px;\n        font-size: 15px;\n        font-weight: normal;\n    }\n    "]}),c("design:paramtypes",[a.a])],d)},212:function(n,t,e){"use strict";function i(n){return null===n||void 0===n}function l(n){return void 0===n}t.a=i,t.b=l},213:function(n,t,e){"use strict";var i=e(7),l=e(40),r=e(93);e.d(t,"a",function(){return u});var a=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},o=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},u=function(){function n(n){this.actions=n}return n.prototype.ngOnInit=function(){this.actions.updateStatus(r.a.READY),this.actions.reset()},n}();u=a([e.i(i.Component)({selector:"memory-game",template:"\n    <dashboard></dashboard>\n    <chessboard></chessboard>\n    <status></status>\n    ",styles:["\n    :host {\n        width: 450px;\n        height: 670px;\n        border: 4px solid #BDBDBD;\n        border-radius: 2px;\n        background-color: #faf8ef;\n        padding: 10px;\n        display: flex;\n        flex-direction: column;\n    }\n    @media screen and (max-width: 450px) {\n        :host{\n            width: 100%;\n            height: 100%;\n            justify-content: space-around;\n        }\n    }\n    >>> a {\n        text-decoration: none;\n        color: #fff;\n    }\n    "]}),o("design:paramtypes",[l.a])],u)},214:function(n,t,e){"use strict";var i=e(7),l=e(52),r=(e.n(l),e(672));e.d(t,"a",function(){return u});var a=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},o=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},u=function(){function n(n){this.ngRedux=n,this.ngRedux.configureStore(r.a,{},[],[])}return n}();u=a([e.i(i.NgModule)({imports:[l.NgReduxModule],exports:[l.NgReduxModule]}),o("design:paramtypes",[l.NgRedux])],u)},215:function(n,t,e){"use strict";function i(){return _.concat(_).map(function(n,t){return{_id:t,name:n.name,flipped:n.flipped,url:n.url}})}var l=e(377),r=(e.n(l),e(379)),a=(e.n(r),e(380)),o=(e.n(a),e(381)),u=(e.n(o),e(382)),s=(e.n(u),e(383)),c=(e.n(s),e(384)),d=(e.n(c),e(385)),p=(e.n(d),e(378));e.n(p);e.d(t,"a",function(){return f}),t.b=i;var f=[{name:"8-ball",flipped:!1,url:l},{name:"baked-potato",flipped:!1,url:r},{name:"dinosaur",flipped:!1,url:a},{name:"kronos",flipped:!1,url:o},{name:"rocket",flipped:!1,url:u},{name:"skinny-unicorn",flipped:!1,url:s},{name:"that-guy",flipped:!1,url:c},{name:"zeppelin",flipped:!1,url:d},{name:"back",flipped:!1,url:p}],_=f.filter(function(n){return"back"!==n.name})},220:function(n,t,e){"use strict";var i=e(7),l=e(670),r=e(47),a=e(53),o=e(130),u=(e.n(o),e(214)),s=e(94),c=(e.n(s),e(40)),d=e(665),p=e(62);e.n(p);e.d(t,"a",function(){return h});var f=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),_=function(n){function t(t){return n.call(this,t,[d.a],[d.a])||this}return f(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=i["ɵn"](this.parent.get(i.LOCALE_ID,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new r.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new i.Compiler),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=i["ɵg"]()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=i["ɵl"]()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=i["ɵm"]()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new a["ɵe"](this.parent.get(a.DOCUMENT))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new a.HammerGestureConfig),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new a["ɵDomEventsPlugin"](this.parent.get(a.DOCUMENT)),new a["ɵKeyEventsPlugin"](this.parent.get(a.DOCUMENT)),new a["ɵHammerGesturesPlugin"](this.parent.get(a.DOCUMENT),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new a.EventManager(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(i.NgZone))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new a["ɵDomSharedStylesHost"](this.parent.get(a.DOCUMENT))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new a["ɵDomRendererFactory2"](this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new i.Testability(this.parent.get(i.NgZone))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new a.Meta(this.parent.get(a.DOCUMENT))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new a.Title(this.parent.get(a.DOCUMENT))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DevToolsExtension_30",{get:function(){return null==this.__DevToolsExtension_30&&(this.__DevToolsExtension_30=new s.DevToolsExtension(this._ApplicationRef_5,this._NgRedux_9)),this.__DevToolsExtension_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_GameActions_31",{get:function(){return null==this.__GameActions_31&&(this.__GameActions_31=new c.a(this._NgRedux_9)),this.__GameActions_31},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=a["ɵa"](),this._APP_INITIALIZER_2=[i["ɵo"],a["ɵc"](this.parent.get(a.NgProbeToken,null),this.parent.get(i.NgProbeToken,null))],this._ApplicationInitStatus_3=new i.ApplicationInitStatus(this._APP_INITIALIZER_2),this._ɵf_4=new i["ɵf"](this.parent.get(i.NgZone),this.parent.get(i["ɵConsole"]),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new i.ApplicationModule(this._ApplicationRef_5),this._BrowserModule_7=new a.BrowserModule(this.parent.get(a.BrowserModule,null)),this._NgReduxModule_8=new o.NgReduxModule,this._NgRedux_9=o._ngReduxFactory(this.parent.get(i.NgZone)),this._ReduxConfigModule_10=new u.a(this._NgRedux_9),this._GameModule_11=new l.a,this._GameModule_11},t.prototype.getInternal=function(n,t){return n===r.b?this._CommonModule_0:n===i.ErrorHandler?this._ErrorHandler_1:n===i.APP_INITIALIZER?this._APP_INITIALIZER_2:n===i.ApplicationInitStatus?this._ApplicationInitStatus_3:n===i["ɵf"]?this._ɵf_4:n===i.ApplicationRef?this._ApplicationRef_5:n===i.ApplicationModule?this._ApplicationModule_6:n===a.BrowserModule?this._BrowserModule_7:n===o.NgReduxModule?this._NgReduxModule_8:n===p.NgRedux?this._NgRedux_9:n===u.a?this._ReduxConfigModule_10:n===l.a?this._GameModule_11:n===i.LOCALE_ID?this._LOCALE_ID_12:n===r.c?this._NgLocalization_13:n===i.Compiler?this._Compiler_14:n===i.APP_ID?this._APP_ID_15:n===i.IterableDiffers?this._IterableDiffers_16:n===i.KeyValueDiffers?this._KeyValueDiffers_17:n===a.DomSanitizer?this._DomSanitizer_18:n===i.Sanitizer?this._Sanitizer_19:n===a.HAMMER_GESTURE_CONFIG?this._HAMMER_GESTURE_CONFIG_20:n===a.EVENT_MANAGER_PLUGINS?this._EVENT_MANAGER_PLUGINS_21:n===a.EventManager?this._EventManager_22:n===a["ɵDomSharedStylesHost"]?this._ɵDomSharedStylesHost_23:n===a["ɵDomRendererFactory2"]?this._ɵDomRendererFactory2_24:n===i.RendererFactory2?this._RendererFactory2_25:n===a["ɵSharedStylesHost"]?this._ɵSharedStylesHost_26:n===i.Testability?this._Testability_27:n===a.Meta?this._Meta_28:n===a.Title?this._Title_29:n===s.DevToolsExtension?this._DevToolsExtension_30:n===c.a?this._GameActions_31:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},t}(i["ɵNgModuleInjector"]),h=new i.NgModuleFactory(_,l.a)},377:function(n,t,e){n.exports=e.p+"8-ball.fef0ce08923e6a3abd942125fd954069.png"},378:function(n,t,e){n.exports=e.p+"back.6dba3655e10a58f2e52f702871c41250.png"},379:function(n,t,e){n.exports=e.p+"baked-potato.77c1c93cf9edd4d87fc0978cdbec2cae.png"},380:function(n,t,e){n.exports=e.p+"dinosaur.b27bcc48c8318e00dc6e0a7c44c07223.png"},381:function(n,t,e){n.exports=e.p+"kronos.f3aea3740c7db4b3f308e2df842ec934.png"},382:function(n,t,e){n.exports=e.p+"rocket.aad6324871f94894d63e73b3cc376730.png"},383:function(n,t,e){n.exports=e.p+"skinny-unicorn.4a164a6ff3c659a8999eaa036e4f52d5.png"},384:function(n,t,e){n.exports=e.p+"that-guy.c59e1bcb7ac7cf5fb2221392749df061.png"},385:function(n,t,e){n.exports=e.p+"zeppelin.cff45bfffdf53253d01b337b5def33c5.png"},40:function(n,t,e){"use strict";var i=e(7),l=e(52),r=(e.n(l),e(212)),a=e(93);e.d(t,"a",function(){return s});var o=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},u=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},s=c=function(){function n(n){this.ngRedux=n}return n.prototype.reset=function(){this.ngRedux.dispatch({type:c.RESET})},n.prototype.updateStatus=function(n){var t=this;this.ngRedux.dispatch({type:c.UPDATE_STATUS,payload:n}),n===a.a.PLAYING?this.timerId=setInterval(function(){t.ngRedux.dispatch({type:c.UPDATE_ELAPSED,payload:+t.ngRedux.getState().elapsedMs+1})},1e3):n===a.a.PASS&&(clearInterval(this.timerId),this.ngRedux.dispatch({type:c.UPDATE_HIGHESTSPEED,payload:this.ngRedux.getState().elapsedMs}))},n.prototype.updateLastSelectedCard=function(n){this.ngRedux.dispatch({type:c.UPDATE_LAST_SELECTED_CARD,payload:n})},n.prototype.updateCardFlipped=function(n){this.ngRedux.dispatch({type:c.UPDATE_CARD_FLIPPED,payload:n})},n.prototype.match=function(){this.ngRedux.dispatch({type:c.UPDATE_REMAINS,payload:+this.ngRedux.getState().remains-1})},n.prototype.flipCard=function(n){var t=this,i=this.ngRedux.getState();if(this.updateCardFlipped(n),i.status===a.a.READY&&this.updateStatus(a.a.PLAYING),e.i(r.a)(i.lastSelectedCard))return this.updateLastSelectedCard(n);if(i.lastSelectedCard.name===n.name){this.updateLastSelectedCard(null),this.match();return+i.remains-1||this.updateStatus(a.a.PASS)}var l=i.lastSelectedCard;this.updateLastSelectedCard(null),setTimeout(function(){t.updateCardFlipped(l),t.updateCardFlipped(n)},1e3)},n}();s.RESET="RESET",s.UPDATE_STATUS="UPDATE_STATUS",s.UPDATE_LAST_SELECTED_CARD="UPDATE_LAST_SELECTED_CARD",s.UPDATE_CARD_FLIPPED="UPDATE_CARD_FLIPPED",s.UPDATE_REMAINS="UPDATE_REMAINS",s.UPDATE_ELAPSED="UPDATE_ELAPSED",s.UPDATE_HIGHESTSPEED="UPDATE_HIGHESTSPEED",s=c=o([e.i(i.Injectable)(),u("design:paramtypes",[l.NgRedux])],s);var c},659:function(n,t,e){"use strict";function i(n){return r["ɵvid"](0,[(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,5,"div",[["class","card"]],[[2,"flipped",null]],[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==l.flip(l.info)&&i}return i},null,null)),(n()(),r["ɵted"](null,["\n        "])),(n()(),r["ɵeld"](0,null,null,0,"img",[["class","front"]],[[8,"src",4]],null,null,null,null)),(n()(),r["ɵted"](null,["\n        "])),(n()(),r["ɵeld"](0,null,null,0,"img",[["class","back"]],[[8,"src",4]],null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵted"](null,["\n    "]))],null,function(n,t){var e=t.component;n(t,1,0,e.info.flipped),n(t,3,0,r["ɵinlineInterpolate"](1,"",e.info.url,"")),n(t,5,0,r["ɵinlineInterpolate"](1,"",e.backCard.url,""))})}function l(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"card",[],null,null,null,i,u)),r["ɵdid"](24576,null,0,a.a,[],null,null)],null,null)}var r=e(7),a=e(124);e.d(t,"b",function(){return u}),t.a=i;var o=["[_nghost-%COMP%] {\n        width: 100px;\n        height: 121px;\n        margin-right: 3px;\n        cursor: pointer;\n        position: relative;\n        perspective: 800px;\n    }\n    .card[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        transition: transform 1s;\n        transform-style: preserve-3d;\n    }\n    .card.flipped[_ngcontent-%COMP%] {\n        transform: rotateY( 180deg );\n    }\n    .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        backface-visibility: hidden;\n        -webkit-backface-visibility: hidden;\n    }\n    .card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n        background: blue;\n        transform: rotateY( 0deg );\n    }\n    .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n        background: blue;\n        transform: rotateY( 180deg );\n    }\n    @media screen and (max-width: 450px) {\n        [_nghost-%COMP%] {\n            width: 92px;\n            height: 111px;\n            margin-right: 1px;\n        }\n    }\n    @media screen and (max-width: 380px) {\n        [_nghost-%COMP%] {\n            width: 85px;\n            height: 102px;\n            margin-right: 1px;\n        }\n    }\n    @media screen and (max-width: 360px) {\n        [_nghost-%COMP%] {\n            width: 70px;\n            height: 84px;\n            margin-right: 1px;\n        }\n    }"],u=r["ɵcrt"]({encapsulation:0,styles:o,data:{}});r["ɵccf"]("card",a.a,l,{info:"info"},{flipped:"flipped"},[])},660:function(n,t,e){"use strict";function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"card",[],null,[[null,"flipped"]],function(n,t,e){var i=!0,l=n.component;if("flipped"===t){i=!1!==l.actions.flipCard(e)&&i}return i},o.a,o.b)),a["ɵdid"](24576,null,0,u.a,[],{info:[0,"info"]},{flipped:"flipped"})],function(n,t){n(t,1,0,t.context.$implicit)},null)}function l(n){return a["ɵvid"](0,[(n()(),a["ɵted"](null,["\n    "])),(n()(),a["ɵand"](8388608,null,null,2,null,i)),a["ɵdid"](401408,null,0,s.h,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),a["ɵpid"](65536,s.g,[a.ChangeDetectorRef]),(n()(),a["ɵted"](null,["\n    "]))],function(n,t){var e=t.component;n(t,2,0,a["ɵunv"](t,2,0,a["ɵnov"](t,3).transform(e.cards$)),e.trackByCards)},null)}function r(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"chessboard",[],null,null,null,l,f)),a["ɵdid"](24576,null,0,c.a,[d.a],null,null)],null,null)}var a=e(7),o=e(659),u=e(124),s=e(47),c=e(125),d=e(40);e.d(t,"b",function(){return f}),t.a=l;var p=["[_nghost-%COMP%] {\n        margin-top: 20px;\n        width: 100%;\n        background-color: #fff;\n        height: 530px;\n        border-radius: 4px;\n        padding: 10px 5px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        align-content: space-around;\n    }\n    card[_ngcontent-%COMP%]:nth-child(4n) {\n        margin-right: 0px;\n    }\n    @media screen and (max-width: 450px) {\n        [_nghost-%COMP%] {\n            height: 480px;\n            padding: 10px 0px;\n        }\n    }\n    @media screen and (max-width: 370px) {\n        [_nghost-%COMP%] {\n            height: 450px;\n        }\n    }"],f=a["ɵcrt"]({encapsulation:0,styles:p,data:{}});a["ɵccf"]("chessboard",c.a,r,{},{},[])},661:function(n,t,e){"use strict";function i(n){return r["ɵvid"](0,[(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,1,"logo",[],null,null,null,a.a,a.b)),r["ɵdid"](24576,null,0,o.a,[],null,null),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,2,"info-board",[["title","Remains"]],null,null,null,u.a,u.b)),r["ɵdid"](24576,null,0,s.a,[],{title:[0,"title"],text:[1,"text"]},null),r["ɵpid"](65536,c.g,[r.ChangeDetectorRef]),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,2,"info-board",[["title","Top"]],null,null,null,u.a,u.b)),r["ɵdid"](24576,null,0,s.a,[],{title:[0,"title"],text:[1,"text"]},null),r["ɵpid"](65536,c.g,[r.ChangeDetectorRef]),(n()(),r["ɵted"](null,["\n    "]))],function(n,t){var e=t.component;n(t,5,0,"Remains",r["ɵunv"](t,5,1,r["ɵnov"](t,6).transform(e.remains$)));n(t,9,0,"Top",r["ɵunv"](t,9,1,r["ɵnov"](t,10).transform(e.highestSpeed$)))},null)}function l(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"dashboard",[],null,null,null,i,f)),r["ɵdid"](24576,null,0,d.a,[],null,null)],null,null)}var r=e(7),a=e(663),o=e(128),u=e(662),s=e(127),c=e(47),d=e(126);e.d(t,"b",function(){return f}),t.a=i;var p=["[_nghost-%COMP%]{\n        width: 100%;\n        height: 100px;\n        display: flex;\n        justify-content: space-between;\n        align-items: stretch;\n        flex-shrink: 0;\n    }"],f=r["ɵcrt"]({encapsulation:0,styles:p,data:{}});r["ɵccf"]("dashboard",d.a,l,{},{},[])},662:function(n,t,e){"use strict";function i(n){return r["ɵvid"](0,[(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),r["ɵted"](null,["",""])),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,1,"h3",[["class","text"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["",""])),(n()(),r["ɵted"](null,["\n    "]))],null,function(n,t){var e=t.component;n(t,2,0,e.title),n(t,5,0,e.text)})}function l(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"info-board",[],null,null,null,i,u)),r["ɵdid"](24576,null,0,a.a,[],null,null)],null,null)}var r=e(7),a=e(127);e.d(t,"b",function(){return u}),t.a=i;var o=["[_nghost-%COMP%] {\n        width: 120px;\n        padding: 10px;\n        background-color: #bbada0;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        color: #eae0d1;\n    }\n    .text[_ngcontent-%COMP%] {\n        color: #fff;\n    }\n\n    @media screen and (max-width: 450px) {\n        [_nghost-%COMP%] {\n            width: 105px;\n        }\n    }\n    @media screen and (max-width: 380px) {\n        [_nghost-%COMP%] {\n            width: 95px;\n        }\n        h2[_ngcontent-%COMP%] {\n            font-size: 20px;\n        }\n    }\n    @media screen and (max-width: 360px) {\n        [_nghost-%COMP%] {\n            width: 90px;\n        }\n    }"],u=r["ɵcrt"]({encapsulation:0,styles:o,data:{}});r["ɵccf"]("info-board",a.a,l,{title:"title",text:"text"},{},[])},663:function(n,t,e){"use strict";function i(n){return r["ɵvid"](0,[(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,4,"h1",[["class","logo"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n        "])),(n()(),r["ɵeld"](0,null,null,1,"a",[["href","https://github.com/leftstick/angular2-memory-game"],["target","_blank"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["Memory"])),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵted"](null,["\n    "]))],null,null)}function l(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"logo",[],null,null,null,i,u)),r["ɵdid"](24576,null,0,a.a,[],null,null)],null,null)}var r=e(7),a=e(128);e.d(t,"b",function(){return u}),t.a=i;var o=["[_nghost-%COMP%] {\n        width: 160px;\n        padding: 5px;\n        border-radius: 5px;\n        background-color: #5979ac;\n        color: #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    @media screen and (max-width: 450px) {\n        [_nghost-%COMP%] {\n            width: 150px;\n        }\n    }\n    @media screen and (max-width: 380px) {\n        [_nghost-%COMP%] {\n            width: 140px;\n        }\n    }\n    @media screen and (max-width: 360px) {\n        [_nghost-%COMP%] {\n            width: 110px;\n        }\n        a[_ngcontent-%COMP%] {\n            font-size: 18px;\n        }\n    }"],u=r["ɵcrt"]({encapsulation:0,styles:o,data:{}});r["ɵccf"]("logo",a.a,l,{},{},[])},664:function(n,t,e){"use strict";function i(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["ɵted"](null,["Ready"]))],null,null)}function l(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["ɵted"](null,["Playing"]))],null,null)}function r(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"span",[["class","hand"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==l.reset(e)&&i}return i},null,null)),(n()(),u["ɵted"](null,["Play again"]))],null,null)}function a(n){return u["ɵvid"](0,[(n()(),u["ɵted"](null,["\n    "])),(n()(),u["ɵand"](8388608,null,null,2,null,i)),u["ɵdid"](8192,null,0,s.f,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["ɵpid"](65536,s.g,[u.ChangeDetectorRef]),(n()(),u["ɵted"](null,["\n    "])),(n()(),u["ɵand"](8388608,null,null,2,null,l)),u["ɵdid"](8192,null,0,s.f,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["ɵpid"](65536,s.g,[u.ChangeDetectorRef]),(n()(),u["ɵted"](null,["\n    "])),(n()(),u["ɵand"](8388608,null,null,2,null,r)),u["ɵdid"](8192,null,0,s.f,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["ɵpid"](65536,s.g,[u.ChangeDetectorRef]),(n()(),u["ɵted"](null,["\n    "])),(n()(),u["ɵeld"](0,null,null,2,"span",[["class","elapsed"]],null,null,null,null,null)),(n()(),u["ɵted"](null,[""," s"])),u["ɵpid"](65536,s.g,[u.ChangeDetectorRef]),(n()(),u["ɵted"](null,["\n    "]))],function(n,t){var e=t.component;n(t,2,0,u["ɵunv"](t,2,0,u["ɵnov"](t,3).transform(e.status$))===e.status.READY),n(t,6,0,u["ɵunv"](t,6,0,u["ɵnov"](t,7).transform(e.status$))===e.status.PLAYING),n(t,10,0,u["ɵunv"](t,10,0,u["ɵnov"](t,11).transform(e.status$))===e.status.PASS)},function(n,t){var e=t.component;n(t,14,0,u["ɵunv"](t,14,0,u["ɵnov"](t,15).transform(e.elapsedMs$)))})}function o(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"status",[],null,null,null,a,f)),u["ɵdid"](24576,null,0,c.a,[d.a],null,null)],null,null)}var u=e(7),s=e(47),c=e(129),d=e(40);e.d(t,"b",function(){return f}),t.a=a;var p=["[_nghost-%COMP%] {\n        position: relative;\n        margin-top: 10px;\n        width: 100%;\n        height: 20px;\n        text-align: center;\n        font-size: 18px;\n        font-weight: bold;\n    }\n    .hand[_ngcontent-%COMP%] {\n        cursor: pointer;\n    }\n    .elapsed[_ngcontent-%COMP%] {\n        position: absolute;\n        right: 10px;\n        font-size: 15px;\n        font-weight: normal;\n    }"],f=u["ɵcrt"]({encapsulation:0,styles:p,data:{}});u["ɵccf"]("status",c.a,o,{},{},[])},665:function(n,t,e){"use strict";function i(n){return r["ɵvid"](0,[(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,1,"dashboard",[],null,null,null,a.a,a.b)),r["ɵdid"](24576,null,0,o.a,[],null,null),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,1,"chessboard",[],null,null,null,u.a,u.b)),r["ɵdid"](24576,null,0,s.a,[c.a],null,null),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,1,"status",[],null,null,null,d.a,d.b)),r["ɵdid"](24576,null,0,p.a,[c.a],null,null),(n()(),r["ɵted"](null,["\n    "]))],null,null)}function l(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"memory-game",[],null,null,null,i,h)),r["ɵdid"](57344,null,0,f.a,[c.a],null,null)],function(n,t){n(t,1,0)},null)}var r=e(7),a=e(661),o=e(126),u=e(660),s=e(125),c=e(40),d=e(664),p=e(129),f=e(213);e.d(t,"a",function(){return g});var _=["[_nghost-%COMP%] {\n        width: 450px;\n        height: 670px;\n        border: 4px solid #BDBDBD;\n        border-radius: 2px;\n        background-color: #faf8ef;\n        padding: 10px;\n        display: flex;\n        flex-direction: column;\n    }\n    @media screen and (max-width: 450px) {\n        [_nghost-%COMP%]{\n            width: 100%;\n            height: 100%;\n            justify-content: space-around;\n        }\n    }\n      a {\n        text-decoration: none;\n        color: #fff;\n    }"],h=r["ɵcrt"]({encapsulation:0,styles:_,data:{}}),g=r["ɵccf"]("memory-game",f.a,l,{},{},[])},668:function(n,t,e){"use strict";function i(n){for(var t=n.slice(),e=t.length;e;e-=1){var i=Math.floor(Math.random()*e),l=t[e-1];t[e-1]=t[i],t[i]=l}return t}t.a=i},669:function(n,t,e){"use strict";function i(n){n&&(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault())}t.a=i},670:function(n,t,e){"use strict";var i=e(7),l=e(53),r=e(214),a=e(213),o=e(126),u=e(128),s=e(127),c=e(125),d=e(124),p=e(129),f=e(40);e.d(t,"a",function(){return h});var _=this&&this.__decorate||function(n,t,e,i){var l,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(l=n[o])&&(a=(r<3?l(a):r>3?l(t,e,a):l(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},h=function(){function n(){}return n}();h=_([e.i(i.NgModule)({imports:[l.BrowserModule,r.a],declarations:[a.a,o.a,u.a,s.a,c.a,d.a,p.a],providers:[f.a],bootstrap:[a.a]})],h)},671:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(53),l=e(220),r=e(7);e.i(r.enableProdMode)(),e.i(i.platformBrowser)().bootstrapModuleFactory(l.a),document.head.removeChild(document.querySelector("#splash-spinner")),document.body.removeChild(document.querySelector(".spinner"))},672:function(n,t,e){"use strict";function i(n,t){return t.type===_.a.RESET||e.i(d.a)(n)?8:t.type===_.a.UPDATE_REMAINS?t.payload:n}function l(n,t){if(t.type===_.a.RESET||e.i(d.a)(n))return localStorage.getItem("highestSpeed")||9999;if(t.type===_.a.UPDATE_HIGHESTSPEED){if(!localStorage.getItem("highestSpeed"))return localStorage.setItem("highestSpeed",t.payload)||t.payload;if(localStorage.getItem("highestSpeed")>t.payload)return localStorage.setItem("highestSpeed",t.payload)||t.payload}return n}function r(n,t){return t.type===_.a.RESET||e.i(d.a)(n)?p.a.READY:t.type===_.a.UPDATE_STATUS?t.payload:n}function a(n,t){return t.type===_.a.RESET||e.i(d.a)(n)?e.i(c.a)(e.i(f.b)()):t.type===_.a.UPDATE_CARD_FLIPPED?n.map(function(n){return n._id===t.payload._id?{_id:n._id,name:n.name,flipped:!n.flipped,url:n.url}:n}):n}function o(n,t){return t.type===_.a.RESET||e.i(d.b)(n)?null:t.type===_.a.UPDATE_LAST_SELECTED_CARD?t.payload:n}function u(n,t){return t.type===_.a.RESET||e.i(d.a)(n)?0:t.type===_.a.UPDATE_ELAPSED?t.payload:n}var s=e(167),c=e(668),d=e(212),p=e(93),f=e(215),_=e(40);e.d(t,"a",function(){return h});var h=e.i(s.combineReducers)({remains:i,highestSpeed:l,status:r,cards:a,lastSelectedCard:o,elapsedMs:u})},93:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i;!function(n){n[n.READY=0]="READY",n[n.PLAYING=1]="PLAYING",n[n.PASS=2]="PASS"}(i||(i={}))}},[671]);