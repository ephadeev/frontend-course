/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.scss?");

/***/ }),

/***/ "./src/js/components/Card.js":
/*!***********************************!*\
  !*** ./src/js/components/Card.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Card = function Card(data, parentElementId, key) {\n  var _this = this;\n\n  _classCallCheck(this, Card);\n\n  _defineProperty(this, \"render\", function () {\n    var wrapperElement = window.document.createElement('div');\n    wrapperElement.className = \"card\";\n    wrapperElement.id = _this.myId;\n    var _this$data = _this.data,\n        _this$data$name = _this$data.name,\n        first = _this$data$name.first,\n        last = _this$data$name.last,\n        email = _this$data.email,\n        about = _this$data.about;\n    wrapperElement.innerHTML = \"\\n      <h2>\".concat(first, \" \").concat(last, \"</h2>\\n      <h3>\").concat(email, \"</h3>\\n      <span>\").concat(about, \"</span>\\n    \");\n\n    _this.parentElement.appendChild(wrapperElement);\n  });\n\n  _defineProperty(this, \"getElement\", function () {\n    return window.document.getElementById(_this.myId);\n  });\n\n  this.data = data;\n  this.parentElementId = parentElementId;\n  this.key = key;\n  this.myId = \"\".concat(this.parentElementId, \"-card-\").concat(this.key);\n  this.parentElement = window.document.getElementById(parentElementId);\n};\n\n_defineProperty(Card, \"convertToHtml\", function (oneCardData) {\n  var name = oneCardData.name,\n      email = oneCardData.email,\n      about = oneCardData.about;\n  return \"\\n      <div class=\\\"card\\\">\\n        <h2>\".concat(name.first, \" \").concat(name.last, \"</h2>\\n        <h3>\").concat(email, \"</h3>\\n        <span>\").concat(about, \"</span>\\n      </div>\\n    \");\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/js/components/Card.js?");

/***/ }),

/***/ "./src/js/components/CardList.js":
/*!***************************************!*\
  !*** ./src/js/components/CardList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/js/components/Card.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar CardList = function CardList(data, key) {\n  var _this = this;\n\n  _classCallCheck(this, CardList);\n\n  _defineProperty(this, \"render\", function () {\n    var $previousStateWrapper = window.document.getElementById(_this.key);\n\n    if ($previousStateWrapper) {\n      $previousStateWrapper.remove();\n      $previousStateWrapper = null;\n    }\n\n    var wrapperElement = window.document.createElement('div');\n    wrapperElement.className = 'wrapper';\n    wrapperElement.id = _this.key;\n    var $body = window.document.getElementsByTagName('body')[0];\n    $body.appendChild(wrapperElement);\n\n    _this.data.forEach(function (card, i) {\n      var CardInstance = new _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](card, wrapperElement.id, i);\n      CardInstance.render();\n    });\n  });\n\n  this.data = data;\n  this.key = key;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\n\n//# sourceURL=webpack:///./src/js/components/CardList.js?");

/***/ }),

/***/ "./src/js/const/data.json":
/*!********************************!*\
  !*** ./src/js/const/data.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"_id\\\":\\\"5e91ac98757a1ede800228ab\\\",\\\"index\\\":0,\\\"guid\\\":\\\"e6357a74-e76c-4641-ae3a-947e42bd75b3\\\",\\\"isActive\\\":false,\\\"balance\\\":\\\"$2,342.30\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":40,\\\"eyeColor\\\":\\\"blue\\\",\\\"name\\\":{\\\"first\\\":\\\"Curtis\\\",\\\"last\\\":\\\"Greene\\\"},\\\"company\\\":\\\"ZAJ\\\",\\\"email\\\":\\\"curtis.greene@zaj.ca\\\",\\\"phone\\\":\\\"+1 (925) 422-3749\\\",\\\"address\\\":\\\"715 Guider Avenue, Century, New Mexico, 2049\\\",\\\"about\\\":\\\"Voluptate eu officia laborum culpa commodo aute excepteur qui. Fugiat dolore ut do Lorem laborum voluptate pariatur magna minim labore sint mollit sit exercitation. Eiusmod ex dolor sint nisi aute velit non ullamco. Quis incididunt aliquip consectetur cupidatat. Ipsum ipsum dolor magna non irure ea labore. Occaecat non quis anim ea deserunt commodo ad dolor do quis eu aute cupidatat. Id culpa sint laboris dolore labore Lorem occaecat velit do quis labore eu id sunt.\\\",\\\"registered\\\":\\\"Tuesday, April 26, 2016 8:06 AM\\\",\\\"latitude\\\":\\\"6.357193\\\",\\\"longitude\\\":\\\"-18.177552\\\",\\\"tags\\\":[\\\"mollit\\\",\\\"in\\\",\\\"eu\\\",\\\"exercitation\\\",\\\"fugiat\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Hopkins Ayala\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Coleen Mendez\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Boyle Floyd\\\"}],\\\"greeting\\\":\\\"Hello, Curtis! You have 5 unread messages.\\\",\\\"favoriteFruit\\\":\\\"apple\\\"},{\\\"_id\\\":\\\"5e91ac98dee76a88eaeb1081\\\",\\\"index\\\":1,\\\"guid\\\":\\\"45751856-058e-491f-a33b-e9eb1df04f64\\\",\\\"isActive\\\":false,\\\"balance\\\":\\\"$1,935.67\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":23,\\\"eyeColor\\\":\\\"blue\\\",\\\"name\\\":{\\\"first\\\":\\\"Nikki\\\",\\\"last\\\":\\\"Lowe\\\"},\\\"company\\\":\\\"DARWINIUM\\\",\\\"email\\\":\\\"nikki.lowe@darwinium.tv\\\",\\\"phone\\\":\\\"+1 (968) 412-2741\\\",\\\"address\\\":\\\"125 Claver Place, Cataract, Nebraska, 754\\\",\\\"about\\\":\\\"Nulla sit est qui fugiat do esse in nisi nulla sint. Aliqua nulla officia deserunt pariatur ad aliquip. Velit est irure consectetur ut occaecat officia culpa. Exercitation reprehenderit voluptate in cupidatat sint laborum officia ullamco qui ea reprehenderit elit consectetur tempor. Veniam laboris nostrud laborum enim velit aute consectetur dolore ea adipisicing culpa adipisicing. Elit Lorem magna voluptate id occaecat aute do velit cupidatat cupidatat enim. Cupidatat deserunt esse excepteur cupidatat exercitation ullamco excepteur laborum.\\\",\\\"registered\\\":\\\"Tuesday, March 8, 2016 4:24 PM\\\",\\\"latitude\\\":\\\"34.750532\\\",\\\"longitude\\\":\\\"-93.450658\\\",\\\"tags\\\":[\\\"excepteur\\\",\\\"enim\\\",\\\"sunt\\\",\\\"amet\\\",\\\"elit\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Norton Trevino\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Caldwell Walsh\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Rosemary Santiago\\\"}],\\\"greeting\\\":\\\"Hello, Nikki! You have 8 unread messages.\\\",\\\"favoriteFruit\\\":\\\"strawberry\\\"},{\\\"_id\\\":\\\"5e91ac983ed21bfcc3e35c68\\\",\\\"index\\\":2,\\\"guid\\\":\\\"b4820655-1036-46e7-994c-929291a2ff6b\\\",\\\"isActive\\\":true,\\\"balance\\\":\\\"$2,312.43\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":39,\\\"eyeColor\\\":\\\"green\\\",\\\"name\\\":{\\\"first\\\":\\\"Barr\\\",\\\"last\\\":\\\"Copeland\\\"},\\\"company\\\":\\\"NIPAZ\\\",\\\"email\\\":\\\"barr.copeland@nipaz.me\\\",\\\"phone\\\":\\\"+1 (846) 568-3597\\\",\\\"address\\\":\\\"793 Anna Court, Wanamie, Virginia, 1398\\\",\\\"about\\\":\\\"Est quis nulla nostrud et. Laboris nulla non adipisicing occaecat dolore. Aute consequat cillum mollit ea cupidatat amet magna magna adipisicing est sint eiusmod fugiat non. Commodo ad fugiat culpa mollit Lorem ea Lorem magna id laborum deserunt adipisicing et. Ut culpa dolore est est nostrud magna id nisi ad elit ullamco. Nisi et sunt sint magna aute aliqua adipisicing fugiat. Quis elit veniam ad id id.\\\",\\\"registered\\\":\\\"Wednesday, November 20, 2019 11:45 PM\\\",\\\"latitude\\\":\\\"69.268872\\\",\\\"longitude\\\":\\\"152.537354\\\",\\\"tags\\\":[\\\"culpa\\\",\\\"est\\\",\\\"sunt\\\",\\\"sint\\\",\\\"proident\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Mayo Luna\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Marian Howell\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Mcintyre Hill\\\"}],\\\"greeting\\\":\\\"Hello, Barr! You have 10 unread messages.\\\",\\\"favoriteFruit\\\":\\\"strawberry\\\"},{\\\"_id\\\":\\\"5e91ac984e4b99ebac515143\\\",\\\"index\\\":3,\\\"guid\\\":\\\"708a88c9-44b9-4e36-8ea9-98986e7431ca\\\",\\\"isActive\\\":true,\\\"balance\\\":\\\"$2,831.95\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":29,\\\"eyeColor\\\":\\\"blue\\\",\\\"name\\\":{\\\"first\\\":\\\"Calhoun\\\",\\\"last\\\":\\\"Woodward\\\"},\\\"company\\\":\\\"MEDMEX\\\",\\\"email\\\":\\\"calhoun.woodward@medmex.info\\\",\\\"phone\\\":\\\"+1 (974) 530-3479\\\",\\\"address\\\":\\\"683 Ford Street, Indio, New Jersey, 5803\\\",\\\"about\\\":\\\"Cupidatat sunt commodo quis laborum. Occaecat reprehenderit laboris est amet. Proident labore id est labore velit nostrud exercitation laboris eu aliqua et.\\\",\\\"registered\\\":\\\"Thursday, October 22, 2015 11:24 AM\\\",\\\"latitude\\\":\\\"68.637385\\\",\\\"longitude\\\":\\\"12.389661\\\",\\\"tags\\\":[\\\"amet\\\",\\\"consectetur\\\",\\\"pariatur\\\",\\\"irure\\\",\\\"dolor\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Griffin Travis\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Jill Hartman\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Foster Battle\\\"}],\\\"greeting\\\":\\\"Hello, Calhoun! You have 10 unread messages.\\\",\\\"favoriteFruit\\\":\\\"banana\\\"},{\\\"_id\\\":\\\"5e91ac982930f0c7dfc0eec5\\\",\\\"index\\\":4,\\\"guid\\\":\\\"f0d815ad-9a81-4670-ad30-4a17baf46f02\\\",\\\"isActive\\\":true,\\\"balance\\\":\\\"$2,653.54\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":21,\\\"eyeColor\\\":\\\"blue\\\",\\\"name\\\":{\\\"first\\\":\\\"Leta\\\",\\\"last\\\":\\\"Lee\\\"},\\\"company\\\":\\\"QNEKT\\\",\\\"email\\\":\\\"leta.lee@qnekt.com\\\",\\\"phone\\\":\\\"+1 (932) 500-3737\\\",\\\"address\\\":\\\"867 Montague Street, Elfrida, Arkansas, 2320\\\",\\\"about\\\":\\\"Id laboris pariatur cupidatat pariatur laborum deserunt cupidatat sit exercitation pariatur. Elit exercitation dolor ea laboris duis cupidatat excepteur esse ullamco sint. Lorem elit culpa sit est et proident anim minim laboris laboris. Cupidatat qui eu laboris incididunt nulla.\\\",\\\"registered\\\":\\\"Tuesday, July 10, 2018 3:55 AM\\\",\\\"latitude\\\":\\\"-26.722815\\\",\\\"longitude\\\":\\\"150.215112\\\",\\\"tags\\\":[\\\"est\\\",\\\"officia\\\",\\\"deserunt\\\",\\\"ex\\\",\\\"deserunt\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Deborah Pate\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Keith Yates\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Mosley Fowler\\\"}],\\\"greeting\\\":\\\"Hello, Leta! You have 7 unread messages.\\\",\\\"favoriteFruit\\\":\\\"strawberry\\\"},{\\\"_id\\\":\\\"5e91ac988069b104f1dac976\\\",\\\"index\\\":5,\\\"guid\\\":\\\"44c61096-581c-4a3e-9409-febb0606d5c4\\\",\\\"isActive\\\":false,\\\"balance\\\":\\\"$2,238.54\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":34,\\\"eyeColor\\\":\\\"green\\\",\\\"name\\\":{\\\"first\\\":\\\"Henry\\\",\\\"last\\\":\\\"Stewart\\\"},\\\"company\\\":\\\"SUREPLEX\\\",\\\"email\\\":\\\"henry.stewart@sureplex.us\\\",\\\"phone\\\":\\\"+1 (940) 506-3442\\\",\\\"address\\\":\\\"501 Gotham Avenue, Leming, Delaware, 9310\\\",\\\"about\\\":\\\"Magna mollit amet duis adipisicing quis dolor sint. Commodo aliquip ipsum nisi id culpa est anim. Cillum quis est adipisicing minim eu magna quis. Ad sint quis nostrud non dolor proident non proident. Eiusmod magna quis proident dolore anim amet exercitation culpa consequat et dolore enim cillum. Cillum sunt quis ut duis labore duis cillum.\\\",\\\"registered\\\":\\\"Monday, September 2, 2019 6:10 AM\\\",\\\"latitude\\\":\\\"45.947892\\\",\\\"longitude\\\":\\\"-100.412932\\\",\\\"tags\\\":[\\\"ullamco\\\",\\\"reprehenderit\\\",\\\"dolor\\\",\\\"proident\\\",\\\"ad\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Wilcox Martinez\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Bolton Kline\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Angelina Waters\\\"}],\\\"greeting\\\":\\\"Hello, Henry! You have 10 unread messages.\\\",\\\"favoriteFruit\\\":\\\"banana\\\"},{\\\"_id\\\":\\\"5e91ac988073180d3af657d8\\\",\\\"index\\\":6,\\\"guid\\\":\\\"b8b62a61-f628-40ae-8b45-f386adebb8cf\\\",\\\"isActive\\\":false,\\\"balance\\\":\\\"$3,885.49\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":35,\\\"eyeColor\\\":\\\"green\\\",\\\"name\\\":{\\\"first\\\":\\\"Mary\\\",\\\"last\\\":\\\"Compton\\\"},\\\"company\\\":\\\"TYPHONICA\\\",\\\"email\\\":\\\"mary.compton@typhonica.io\\\",\\\"phone\\\":\\\"+1 (935) 564-2116\\\",\\\"address\\\":\\\"677 Gaylord Drive, Flintville, Missouri, 8282\\\",\\\"about\\\":\\\"Culpa officia ad ullamco ea. Eu irure irure sunt non Lorem culpa incididunt et aute mollit. Esse nostrud deserunt ad tempor quis ipsum eu pariatur aliqua laboris. Qui in culpa velit in elit nostrud aute Lorem duis.\\\",\\\"registered\\\":\\\"Wednesday, March 2, 2016 12:50 PM\\\",\\\"latitude\\\":\\\"62.100944\\\",\\\"longitude\\\":\\\"81.297594\\\",\\\"tags\\\":[\\\"cupidatat\\\",\\\"proident\\\",\\\"eiusmod\\\",\\\"cillum\\\",\\\"exercitation\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Tamera Ballard\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Adela Little\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Melody Branch\\\"}],\\\"greeting\\\":\\\"Hello, Mary! You have 7 unread messages.\\\",\\\"favoriteFruit\\\":\\\"banana\\\"},{\\\"_id\\\":\\\"5e91ac9861717bb3ebc8ebd1\\\",\\\"index\\\":7,\\\"guid\\\":\\\"fa8a421b-10d2-4ce3-94df-9489dcf0b8c7\\\",\\\"isActive\\\":false,\\\"balance\\\":\\\"$3,541.53\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":20,\\\"eyeColor\\\":\\\"brown\\\",\\\"name\\\":{\\\"first\\\":\\\"Brandi\\\",\\\"last\\\":\\\"Hawkins\\\"},\\\"company\\\":\\\"ENVIRE\\\",\\\"email\\\":\\\"brandi.hawkins@envire.co.uk\\\",\\\"phone\\\":\\\"+1 (958) 551-3021\\\",\\\"address\\\":\\\"935 Hubbard Street, Clarence, Marshall Islands, 7596\\\",\\\"about\\\":\\\"Et aliqua eiusmod ipsum quis elit ipsum laborum non cupidatat veniam laborum eiusmod. Do duis voluptate laboris aliquip. Lorem sit nisi veniam cupidatat ut veniam minim culpa.\\\",\\\"registered\\\":\\\"Thursday, July 26, 2018 8:34 PM\\\",\\\"latitude\\\":\\\"-23.589778\\\",\\\"longitude\\\":\\\"117.519381\\\",\\\"tags\\\":[\\\"ad\\\",\\\"cillum\\\",\\\"excepteur\\\",\\\"velit\\\",\\\"labore\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Evelyn Daniels\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Herman Price\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Tran Mccarthy\\\"}],\\\"greeting\\\":\\\"Hello, Brandi! You have 8 unread messages.\\\",\\\"favoriteFruit\\\":\\\"apple\\\"},{\\\"_id\\\":\\\"5e91ac989055a3230367b654\\\",\\\"index\\\":8,\\\"guid\\\":\\\"5cb0f858-ea6f-40e6-a59e-f2d78adfafc0\\\",\\\"isActive\\\":false,\\\"balance\\\":\\\"$3,392.54\\\",\\\"picture\\\":\\\"http://placehold.it/32x32\\\",\\\"age\\\":30,\\\"eyeColor\\\":\\\"blue\\\",\\\"name\\\":{\\\"first\\\":\\\"Perez\\\",\\\"last\\\":\\\"Valencia\\\"},\\\"company\\\":\\\"AUTOMON\\\",\\\"email\\\":\\\"perez.valencia@automon.org\\\",\\\"phone\\\":\\\"+1 (970) 424-3095\\\",\\\"address\\\":\\\"955 Vanderbilt Avenue, Cecilia, New York, 2669\\\",\\\"about\\\":\\\"Aute labore eiusmod cillum esse nostrud consectetur minim magna. Voluptate do non voluptate aute pariatur. Sit cupidatat amet cillum culpa minim nulla dolore reprehenderit quis ea esse. Voluptate culpa duis adipisicing veniam amet laborum consequat occaecat sunt nostrud cupidatat ea esse anim. Aliquip eiusmod minim esse sit ea ea cupidatat incididunt deserunt elit. Labore officia id incididunt aliqua culpa ipsum et ut magna sunt. Non duis elit magna do laborum ex voluptate labore.\\\",\\\"registered\\\":\\\"Monday, December 21, 2015 1:13 PM\\\",\\\"latitude\\\":\\\"-82.822447\\\",\\\"longitude\\\":\\\"-84.85722\\\",\\\"tags\\\":[\\\"adipisicing\\\",\\\"incididunt\\\",\\\"occaecat\\\",\\\"excepteur\\\",\\\"ipsum\\\"],\\\"range\\\":[0,1,2,3,4,5,6,7,8,9],\\\"friends\\\":[{\\\"id\\\":0,\\\"name\\\":\\\"Alexandria Page\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"Franklin Vance\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Dolly Stone\\\"}],\\\"greeting\\\":\\\"Hello, Perez! You have 9 unread messages.\\\",\\\"favoriteFruit\\\":\\\"strawberry\\\"}]\");\n\n//# sourceURL=webpack:///./src/js/const/data.json?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CardList */ \"./src/js/components/CardList.js\");\n/* harmony import */ var _const_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const/data.json */ \"./src/js/const/data.json\");\nvar _const_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./const/data.json */ \"./src/js/const/data.json\", 1);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar start = function start() {\n  var cardList1 = new _components_CardList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_const_data_json__WEBPACK_IMPORTED_MODULE_1__, 'wrapper-1');\n  cardList1.render();\n};\n\nstart();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });