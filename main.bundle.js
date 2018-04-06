webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
interface Powerstats {
  strength: number;
  durability: number;
  power: number;
  combat: number;
} */
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = 'https://akabab.github.io/superhero-api/api/';
    }
    ApiService.prototype.getHeroes = function () {
        // return this.http.get<Hero[]>(this.BASE_URL + 'all.json');
        var randomNum = function getRandomInt(max) {
            if (max === void 0) { max = 562; }
            return Math.floor(Math.random() * Math.floor(max));
        };
        return this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').map(function (data) {
            var heroes = [];
            for (var i = 0; i < 18; i++) {
                heroes.push(data[randomNum()]);
            }
            return heroes;
        });
    };
    ApiService.prototype.getHero = function (id) {
        return this.http.get(this.BASE_URL + 'id/' + id + '.json');
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_component__ = __webpack_require__("./src/app/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memorygame_memory_component__ = __webpack_require__("./src/memorygame/memory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_2__homepage_component__["a" /* HomepageComponent */] },
    { path: 'memory', component: __WEBPACK_IMPORTED_MODULE_3__memorygame_memory_component__["a" /* MemoryComponent */] },
    { path: '**', redirectTo: 'homepage', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component/app.component.html"),
            styleUrls: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n\n        <div class=\"col-xs-1 col-md-2\" *ngFor=\"let hero of heroes ; let i = index\">\n            <img (click)=\"chooseplayer(i)\" class=\"img-fluid\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\">{{hero.name}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_services__ = __webpack_require__("./src/select.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(apiService, select, router) {
        this.apiService = apiService;
        this.select = select;
        this.router = router;
        this.players = [];
        this.nbrPlayer = 0;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select.players = [];
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
    };
    HomepageComponent.prototype.chooseplayer = function (index) {
        this.select.players[this.nbrPlayer] = this.heroes[index];
        this.select.players[this.nbrPlayer].life = 100;
        this.nbrPlayer = this.nbrPlayer + 1;
        // tslint:disable-next-line:triple-equals
        if (this.select.players.length == 2) {
            this.router.navigate(['/memory']);
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__select_services__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    deployUrl: '/'
};


/***/ }),

/***/ "./src/helper/array.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffle;
function shuffle(arr) {
    var newArr = arr.slice();
    for (var i = newArr.length; i; i -= 1) {
        var j = Math.floor(Math.random() * i);
        var x = newArr[i - 1];
        newArr[i - 1] = newArr[j];
        newArr[j] = x;
    }
    return newArr;
}


/***/ }),

/***/ "./src/helper/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stop;
function stop(e) {
    if (!e) {
        return;
    }
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}


/***/ }),

/***/ "./src/helper/object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["b"] = isUndefined;
function isEmpty(obj) {
    return obj === null || obj === undefined;
}
function isUndefined(obj) {
    return obj === undefined;
}


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memorygame_memory_module__ = __webpack_require__("./src/memorygame/memory.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__memorygame_memory_module__["a" /* MemoryModule */]);
document.head.removeChild(document.querySelector('#splash-spinner'));
document.body.removeChild(document.querySelector('.spinner'));


/***/ }),

/***/ "./src/memorygame/chessboard/card.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    width: 20%;\n    height: 150px;\n    margin-right: 3px;\n    cursor: pointer;\n    position: relative;\n    -webkit-perspective: 800px;\n            perspective: 800px;\n}\n\n.card {\n    width: 100%;\n    height: 100%;\n    -webkit-transition: -webkit-transform 1s;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n\n.card.flipped {\n    -webkit-transform: rotateY( 180deg);\n            transform: rotateY( 180deg);\n}\n\n.card img {\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    backface-visibility: hidden;\n    -webkit-backface-visibility: hidden;\n}\n\n.card .back {\n    background: blue;\n    -webkit-transform: rotateY( 0deg);\n            transform: rotateY( 0deg);\n}\n\n.card .front {\n    background: blue;\n    -webkit-transform: rotateY( 180deg);\n            transform: rotateY( 180deg);\n}\n\n@media screen and (max-width: 450px) {\n    :host {\n        width: 92px;\n        height: 111px;\n        margin-right: 1px;\n    }\n}\n\n@media screen and (max-width: 380px) {\n    :host {\n        width: 85px;\n        height: 102px;\n        margin-right: 1px;\n    }\n}\n\n@media screen and (max-width: 360px) {\n    :host {\n        width: 70px;\n        height: 84px;\n        margin-right: 1px;\n    }\n}"

/***/ }),

/***/ "./src/memorygame/chessboard/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [class.flipped]=\"info.flipped\" (click)=\"flip(info)\">\n    <img class=\"front\" src=\"{{ info.url }}\"/>\n    <img class=\"back\" src=\"{{ backCard.url }}\"/>\n</div>"

/***/ }),

/***/ "./src/memorygame/chessboard/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_model_card__ = __webpack_require__("./src/store/model/card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.flipped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.backCard = __WEBPACK_IMPORTED_MODULE_1__store_model_card__["a" /* CARDS */].find(function (c) { return c.name === 'back'; });
    }
    CardComponent.prototype.flip = function (info) {
        console.log('tamere1');
        if (info.flipped) {
            return;
        }
        this.flipped.emit(info);
    };
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "flipped", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'card',
            template: __webpack_require__("./src/memorygame/chessboard/card.component.html"),
            styles: [__webpack_require__("./src/memorygame/chessboard/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/memorygame/chessboard/chessboard.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 450px) {\n    :host {\n        height: 480px;\n        padding: 10px 0px;\n    }\n}\n\n@media screen and (max-width: 370px) {\n    :host {\n        height: 450px;\n    }\n}\n\n:host {\n    width: 100%;\n    height: 750px;\n    background: rgb(119, 211, 147);\n    margin-top: -200px;\n}\n\n.col-6,\n.playerboard,\n.row {\n    padding: 0 !important;\n}\n\n.gameboard {\n    width: 100%;\n    height: 750px;\n    /* \n    background: rgb(119, 211, 147); */\n    margin-top: -200px;\n    padding: 10px 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n}\n\ncard:nth-child(4n) {\n    margin-right: 0px;\n}"

/***/ }),

/***/ "./src/memorygame/chessboard/chessboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-6 offset-3\">\n            <div class=\"gameboard\">\n                <card *ngFor=\"let card of cards$ | async; trackBy:trackByCards\" [info]=\"card\" (flipped)=\"actions.flipCard($event)\"></card>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/memorygame/chessboard/chessboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_action__ = __webpack_require__("./src/store/action/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChessboardComponent = /** @class */ (function () {
    function ChessboardComponent(actions) {
        this.actions = actions;
    }
    ChessboardComponent.prototype.trackByCards = function (index, card) {
        return card._id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], ChessboardComponent.prototype, "cards$", void 0);
    ChessboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chessboard',
            template: __webpack_require__("./src/memorygame/chessboard/chessboard.component.html"),
            styles: [__webpack_require__("./src/memorygame/chessboard/chessboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__store_action__["a" /* GameActions */]])
    ], ChessboardComponent);
    return ChessboardComponent;
}());



/***/ }),

/***/ "./src/memorygame/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid,\n.row {\n    height: 200px !important;\n}\n\n.playerboard {\n    width: 100%;\n    height: 200px;\n    /*  background: rgb(119, 177, 211); */\n    margin-top: 10px;\n    padding: 3%;\n}\n\n.playerboard img {\n    display: block;\n    width: 100%;\n    float: left;\n}\n\nh1 {\n    font-size: 1.3em;\n}\n\n.padding-0 {\n    padding: 0 !important;\n}\n\n.padding-l-15 {\n    padding-left: 15px !important;\n}\n\n.progress-bar {\n    background: red;\n}"

/***/ }),

/***/ "./src/memorygame/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <div class=\"playerboard\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <img src=\"{{select.players[0].images.md}}\" alt=\"\">\n                    </div>\n                    <div class=\"col-6 padding-0\">\n                        <h1>Name : {{ select.players[0].name }}</h1>\n                        <p>Durability : {{ select.players[0].powerstats.durability }}\n                        </p>\n                        <p>Power : {{ select.players[0].powerstats.power }}</p>\n                        <p>Combat : {{ select.players[0].powerstats.combat }}</p>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" [ngStyle]=\"{'width': select.players[0].life + '%'}\">{{select.players[0].life}} %</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"offset-6 col-3\">\n            <div class=\"playerboard\">\n                <div class=\"row\">\n                    <div class=\"col-6 padding-0 padding-l-15\">\n                        <h1>Name : {{ select.players[1].name }}</h1>\n                        <p>Durability : {{ select.players[1].powerstats.durability }}</p>\n                        <p>Power : {{ select.players[1].powerstats.power }}</p>\n                        <p>Combat : {{ select.players[1].powerstats.combat }}</p>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" [ngStyle]=\"{'width': select.players[1].life + '%'}\">{{select.players[1].life}} %</div>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <img src=\"{{select.players[1].images.md}}\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/memorygame/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_api_service__ = __webpack_require__("./src/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_select_services__ = __webpack_require__("./src/select.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService, select, router) {
        this.apiService = apiService;
        this.select = select;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.select.players);
        if (this.select.players.length !== 2) {
            this.router.navigate(['select']);
        }
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], DashboardComponent.prototype, "remains$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], DashboardComponent.prototype, "highestSpeed$", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("./src/memorygame/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/memorygame/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4_select_services__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/memorygame/dashboard/info.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    width: 120px;\n    padding: 10px;\n    background-color: #bbada0;\n    border-radius: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #eae0d1;\n}\n.text {\n    color: #fff;\n}\n@media screen and (max-width: 450px) {\n    :host {\n        width: 105px;\n    }\n}\n@media screen and (max-width: 380px) {\n    :host {\n        width: 95px;\n    }\n    h2 {\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 360px) {\n    :host {\n        width: 90px;\n    }\n}"

/***/ }),

/***/ "./src/memorygame/dashboard/info.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<h3 class=\"text\">{{ text }}</h3>"

/***/ }),

/***/ "./src/memorygame/dashboard/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InfoComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InfoComponent.prototype, "text", void 0);
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'info',
            template: __webpack_require__("./src/memorygame/dashboard/info.component.html"),
            styles: [__webpack_require__("./src/memorygame/dashboard/info.component.css")]
        })
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/memorygame/memory.component.css":
/***/ (function(module, exports) {

module.exports = "/* :host {\n    width: 450px;\n    height: 670px;\n    border: 4px solid #BDBDBD;\n    border-radius: 2px;\n    background-color: #faf8ef;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n@media screen and (max-width: 450px) {\n    :host{\n        width: 100%;\n        height: 100%;\n        justify-content: space-around;\n    }\n}\n>>> a {\n    text-decoration: none;\n    color: #fff;\n} */\n\n:host,\n.memoryboard {\n    width: 100%;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/memorygame/memory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"memoryboard\">\n    <dashboard></dashboard>\n    <chessboard></chessboard>\n    <status></status>\n</div>"

/***/ }),

/***/ "./src/memorygame/memory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_action__ = __webpack_require__("./src/store/action/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_interface__ = __webpack_require__("./src/store/interface/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemoryComponent = /** @class */ (function () {
    function MemoryComponent(actions) {
        this.actions = actions;
    }
    MemoryComponent.prototype.ngOnInit = function () {
        this.actions.updateStatus(__WEBPACK_IMPORTED_MODULE_2__store_interface__["a" /* STATUS */].READY);
        this.actions.reset();
    };
    MemoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'memory-game',
            template: __webpack_require__("./src/memorygame/memory.component.html"),
            styles: [__webpack_require__("./src/memorygame/memory.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__store_action__["a" /* GameActions */]])
    ], MemoryComponent);
    return MemoryComponent;
}());



/***/ }),

/***/ "./src/memorygame/memory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./src/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memory_component__ = __webpack_require__("./src/memorygame/memory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component_app_component__ = __webpack_require__("./src/app/app.component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_homepage_component__ = __webpack_require__("./src/app/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/memorygame/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_info_component__ = __webpack_require__("./src/memorygame/dashboard/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chessboard_chessboard_component__ = __webpack_require__("./src/memorygame/chessboard/chessboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chessboard_card_component__ = __webpack_require__("./src/memorygame/chessboard/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__status_status_component__ = __webpack_require__("./src/memorygame/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_action__ = __webpack_require__("./src/store/action/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__api_service__ = __webpack_require__("./src/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__select_services__ = __webpack_require__("./src/select.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MemoryModule = /** @class */ (function () {
    function MemoryModule() {
    }
    MemoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ReduxConfigModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_app_app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__memory_component__["a" /* MemoryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chessboard_chessboard_component__["a" /* ChessboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chessboard_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__status_status_component__["a" /* StatusComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_app_component_app_component__["a" /* AppComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__store_action__["a" /* GameActions */], __WEBPACK_IMPORTED_MODULE_14__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_15__select_services__["a" /* SelectService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_app_component_app_component__["a" /* AppComponent */]]
        })
    ], MemoryModule);
    return MemoryModule;
}());



/***/ }),

/***/ "./src/memorygame/status/status.component.css":
/***/ (function(module, exports) {

module.exports = ".hand {\n    cursor: pointer;\n}\n\n.elapsed {\n    position: absolute;\n    right: 10px;\n    font-size: 15px;\n    font-weight: normal;\n}\n\n.container-fluid {\n    height: 500px;\n    margin-top: -500px;\n}\n\n.statboard {\n    width: 100%;\n    height: 500px;\n    /* \n    background: rgb(218, 85, 85); */\n}"

/***/ }),

/***/ "./src/memorygame/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <div class=\"statboard\">\n                <span *ngIf=\"(status$ | async) === status.READY\">Ready</span>\n                <span *ngIf=\"(status$ | async) === status.PLAYING\">Playing</span>\n                <span class=\"hand\" *ngIf=\"(status$ | async) === status.PASS\" (click)=\"reset($event)\">Play again</span>\n                <span class=\"elapsed\">{{ elapsedMs$ | async }} s</span>\n            </div>\n        </div>\n        <div class=\"offset-6 col-3\">\n            <div class=\"statboard\">\n                <span *ngIf=\"(status$ | async) === status.READY\">Ready</span>\n                <span *ngIf=\"(status$ | async) === status.PLAYING\">Playing</span>\n                <span class=\"hand\" *ngIf=\"(status$ | async) === status.PASS\" (click)=\"reset($event)\">Play again</span>\n                <span class=\"elapsed\">{{ elapsedMs$ | async }} s</span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/memorygame/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_action__ = __webpack_require__("./src/store/action/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_event__ = __webpack_require__("./src/helper/event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_interface__ = __webpack_require__("./src/store/interface/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatusComponent = /** @class */ (function () {
    function StatusComponent(actions) {
        this.actions = actions;
        this.status = __WEBPACK_IMPORTED_MODULE_5__store_interface__["a" /* STATUS */];
    }
    StatusComponent.prototype.reset = function (e) {
        Object(__WEBPACK_IMPORTED_MODULE_4__helper_event__["a" /* stop */])(e);
        this.actions.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], StatusComponent.prototype, "status$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], StatusComponent.prototype, "elapsedMs$", void 0);
    StatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'status',
            template: __webpack_require__("./src/memorygame/status/status.component.html"),
            styles: [__webpack_require__("./src/memorygame/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__store_action__["a" /* GameActions */]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/select.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectService = /** @class */ (function () {
    function SelectService() {
        this.players = []; // correspond au clic selectionner par le joueur
    }
    SelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SelectService);
    return SelectService;
}());



/***/ }),

/***/ "./src/store/action/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_services__ = __webpack_require__("./src/select.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_object__ = __webpack_require__("./src/helper/object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interface__ = __webpack_require__("./src/store/interface/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameActions = /** @class */ (function () {
    function GameActions(ngRedux, select, router) {
        this.ngRedux = ngRedux;
        this.select = select;
        this.router = router;
        this.turn = 0;
        this.endGame = false;
    }
    GameActions_1 = GameActions;
    GameActions.prototype.ngOnInit = function () {
        this.turn = 1;
    };
    GameActions.prototype.reset = function () {
        this.ngRedux.dispatch({ type: GameActions_1.RESET });
    };
    GameActions.prototype.updateStatus = function (status) {
        var _this = this;
        this.ngRedux.dispatch({ type: GameActions_1.UPDATE_STATUS, payload: status });
        if (status === __WEBPACK_IMPORTED_MODULE_5__interface__["a" /* STATUS */].PLAYING) {
            this.timerId = setInterval(function () {
                _this.ngRedux.dispatch({
                    type: GameActions_1.UPDATE_ELAPSED,
                    payload: +_this.ngRedux.getState().elapsedMs + 1
                });
            }, 1000);
        }
        else if (status === __WEBPACK_IMPORTED_MODULE_5__interface__["a" /* STATUS */].PASS) {
            clearInterval(this.timerId);
            this.ngRedux.dispatch({
                type: GameActions_1.UPDATE_HIGHESTSPEED,
                payload: this.ngRedux.getState().elapsedMs
            });
        }
    };
    GameActions.prototype.updateLastSelectedCard = function (card) {
        this.ngRedux.dispatch({
            type: GameActions_1.UPDATE_LAST_SELECTED_CARD,
            payload: card
        });
    };
    GameActions.prototype.updateCardFlipped = function (card) {
        this.ngRedux.dispatch({
            type: GameActions_1.UPDATE_CARD_FLIPPED,
            payload: card
        });
    };
    GameActions.prototype.match = function () {
        this.ngRedux.dispatch({
            type: GameActions_1.UPDATE_REMAINS,
            payload: +this.ngRedux.getState().remains - 1
        });
    };
    GameActions.prototype.flipCard = function (card) {
        var _this = this;
        if (this.select.players[0].life === 0 || this.select.players[1].life === 0) {
            return this.router.navigate(['/homepage']);
        }
        else {
            var state = this.ngRedux.getState();
            this.updateCardFlipped(card);
            if (state.status === __WEBPACK_IMPORTED_MODULE_5__interface__["a" /* STATUS */].READY) {
                this.updateStatus(__WEBPACK_IMPORTED_MODULE_5__interface__["a" /* STATUS */].PLAYING);
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_4__helper_object__["a" /* isEmpty */])(state.lastSelectedCard)) {
                return this.updateLastSelectedCard(card);
            }
            if (state.lastSelectedCard.name === card.name) {
                console.log(this.turn);
                if (this.turn % 2 === 0) {
                    // console.log('identique: ' + this.turn);
                    alert('Player 2, play !!!');
                    if (this.select.players[0].life > 30) {
                        this.select.players[0].life -= 30;
                    }
                    else {
                        this.select.players[0].life = 0;
                        alert('Player 2 WIN !!!');
                        return;
                    }
                    // this.turn = this.turn;
                }
                else {
                    // console.log('pas bon1: ' + this.turn)
                    alert('Player 1, play !!!');
                    if (this.select.players[1].life > 30) {
                        this.select.players[1].life -= 30;
                    }
                    else {
                        this.select.players[1].life = 0;
                        alert('Player 1 WIN !!!');
                        return;
                    }
                }
                this.updateLastSelectedCard(null);
                this.match();
                var remains = +state.remains - 1;
                return remains || this.updateStatus(__WEBPACK_IMPORTED_MODULE_5__interface__["a" /* STATUS */].PASS);
            }
            else {
                // console.log('pas bon2: ' + this.turn);
                this.turn = this.turn + 1;
            } // console.log('tamere5');
            var lastCard_1 = state.lastSelectedCard;
            this.updateLastSelectedCard(null);
            setTimeout(function () {
                _this.updateCardFlipped(lastCard_1);
                _this.updateCardFlipped(card);
            }, 1000);
        }
    };
    GameActions.RESET = 'RESET';
    GameActions.UPDATE_STATUS = 'UPDATE_STATUS';
    GameActions.UPDATE_LAST_SELECTED_CARD = 'UPDATE_LAST_SELECTED_CARD';
    GameActions.UPDATE_CARD_FLIPPED = 'UPDATE_CARD_FLIPPED';
    GameActions.UPDATE_REMAINS = 'UPDATE_REMAINS';
    GameActions.UPDATE_ELAPSED = 'UPDATE_ELAPSED';
    GameActions.UPDATE_HIGHESTSPEED = 'UPDATE_HIGHESTSPEED';
    GameActions = GameActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_3__select_services__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], GameActions);
    return GameActions;
    var GameActions_1;
}());



/***/ }),

/***/ "./src/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__("./src/store/reducer/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReduxConfigModule = /** @class */ (function () {
    function ReduxConfigModule(ngRedux) {
        this.ngRedux = ngRedux;
        this.ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* rootReducer */], {}, [], []);
    }
    ReduxConfigModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], ReduxConfigModule);
    return ReduxConfigModule;
}());



/***/ }),

/***/ "./src/store/interface/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__status__ = __webpack_require__("./src/store/interface/status.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__status__["a"]; });



/***/ }),

/***/ "./src/store/interface/status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUS; });
var STATUS;
(function (STATUS) {
    STATUS[STATUS["READY"] = 0] = "READY";
    STATUS[STATUS["PLAYING"] = 1] = "PLAYING";
    STATUS[STATUS["PASS"] = 2] = "PASS";
})(STATUS || (STATUS = {}));


/***/ }),

/***/ "./src/store/model/card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARDS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getGameCards;
var CARD_NAMES = [
    '8-ball',
    'baked-potato',
    'dinosaur',
    'kronos',
    'rocket',
    'skinny-unicorn',
    'that-guy',
    'zeppelin',
    'back'
];
var CARDS = CARD_NAMES.map(function (n) { return ({
    name: n,
    flipped: false,
    url: "/assets/" + n + ".jpg"
}); });
var CARDS_WITHOUT_BACK = CARDS.filter(function (c) { return c.name !== 'back'; });
function getGameCards() {
    return CARDS_WITHOUT_BACK.concat(CARDS_WITHOUT_BACK).map(function (c, i) { return ({
        _id: i,
        name: c.name,
        flipped: c.flipped,
        url: c.url
    }); });
}


/***/ }),

/***/ "./src/store/reducer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });
/* unused harmony export remainReducer */
/* unused harmony export speedReducer */
/* unused harmony export statusReducer */
/* unused harmony export cardsReducer */
/* unused harmony export lastSelectedCardReducer */
/* unused harmony export elapsedReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_array__ = __webpack_require__("./src/helper/array.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_object__ = __webpack_require__("./src/helper/object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__("./src/store/interface/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_card__ = __webpack_require__("./src/store/model/card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__action__ = __webpack_require__("./src/store/action/index.ts");






var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    remains: remainReducer,
    highestSpeed: speedReducer,
    status: statusReducer,
    cards: cardsReducer,
    lastSelectedCard: lastSelectedCardReducer,
    elapsedMs: elapsedReducer
});
function remainReducer(state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].RESET || Object(__WEBPACK_IMPORTED_MODULE_2__helper_object__["a" /* isEmpty */])(state)) {
        return 8;
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].UPDATE_REMAINS) {
        return action.payload;
    }
    return state;
}
function speedReducer(state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].RESET || Object(__WEBPACK_IMPORTED_MODULE_2__helper_object__["a" /* isEmpty */])(state)) {
        return localStorage.getItem('highestSpeed') || 9999;
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].UPDATE_HIGHESTSPEED) {
        if (!localStorage.getItem('highestSpeed')) {
            return localStorage.setItem('highestSpeed', action.payload) || action.payload;
        }
        if (localStorage.getItem('highestSpeed') > action.payload) {
            return localStorage.setItem('highestSpeed', action.payload) || action.payload;
        }
    }
    return state;
}
function statusReducer(state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].RESET || Object(__WEBPACK_IMPORTED_MODULE_2__helper_object__["a" /* isEmpty */])(state)) {
        return __WEBPACK_IMPORTED_MODULE_3__interface__["a" /* STATUS */].READY;
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].UPDATE_STATUS) {
        return action.payload;
    }
    return state;
}
function cardsReducer(state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].RESET || Object(__WEBPACK_IMPORTED_MODULE_2__helper_object__["a" /* isEmpty */])(state)) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__helper_array__["a" /* shuffle */])(Object(__WEBPACK_IMPORTED_MODULE_4__model_card__["b" /* getGameCards */])());
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].UPDATE_CARD_FLIPPED) {
        return state.map(function (c) { return (c._id === action.payload._id ? { _id: c._id, name: c.name, flipped: !c.flipped, url: c.url } : c); });
    }
    return state;
}
function lastSelectedCardReducer(state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].RESET || Object(__WEBPACK_IMPORTED_MODULE_2__helper_object__["b" /* isUndefined */])(state)) {
        return null;
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].UPDATE_LAST_SELECTED_CARD) {
        return action.payload;
    }
    return state;
}
function elapsedReducer(state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].RESET || Object(__WEBPACK_IMPORTED_MODULE_2__helper_object__["a" /* isEmpty */])(state)) {
        return 0;
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_5__action__["a" /* GameActions */].UPDATE_ELAPSED) {
        return action.payload;
    }
    return state;
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map