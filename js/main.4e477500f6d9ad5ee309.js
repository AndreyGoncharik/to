/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./js/app.js");
/* harmony import */ var _js_babel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/babel.js */ "./js/babel.js");
/* harmony import */ var _js_babel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_babel_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/less.less */ "./styles/less.less");
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less_less__WEBPACK_IMPORTED_MODULE_3__);
// import App from './js/app'

 // import './styles/styles.css'


 // import json from './assets/json'
// import './styles/scss.scss'

/***/ }),

/***/ "./js/addNew.js":
/*!**********************!*\
  !*** ./js/addNew.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addNew; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./js/const.js");
/* harmony import */ var _getLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocalStorage */ "./js/getLocalStorage.js");
/* harmony import */ var _alertPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertPopUp */ "./js/alertPopUp.js");



function addNew() {
  var newFon = document.querySelector('.new-fon');
  var addNewWrapper = document.querySelector('.add-new-wrapper');
  var itemCardNew = document.querySelector('.item-card-new');
  var addNewButton = document.querySelector('.add-new-but');
  var cancelNewButton = document.querySelector('.cancel-new');
  var saveNewButton = document.querySelector('.save-new');

  addNewButton.onclick = function () {
    this.classList.add('uk-transition-slide-left');
    addNewWrapper.style.height = "auto";
    addNewWrapper.classList.remove("hidden");
    newFon.classList.add('fon-up');
    itemCardNew.classList.add('item-card-up');
    itemCardNew.classList.remove("uk-transition-slide-right"); //document.querySelector('#alert').classList.remove("uk-transition-slide-right");
    //document.querySelector('.close-loader .foreground').classList.add('close-loader-move')
    //add-new-wrapper
    //itemCardNew.classList.remove("uk-transition-slide-right");
    // document.querySelector('#out').innerHTML = '';
    // getLS (formatDate, date);
  };

  saveNewButton.onclick = function () {};

  cancelNewButton.onclick = function () {
    itemCardNew.classList.add("uk-transition-slide-right");
    newFon.classList.remove('fon-up');
    setTimeout(() => {
      addNewButton.classList.remove('uk-transition-slide-left');
    }, 400); //addNewWrapper.classList.add("hidden");
    //addNewButton.classList.remove('uk-transition-slide-left');
  }; // newFon.classList.add('fon-up');
  //modalFon.classList.remove('fon-up');

}

/***/ }),

/***/ "./js/addNewToLS.js":
/*!**************************!*\
  !*** ./js/addNewToLS.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addNewToLS; });
/* harmony import */ var _getLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalStorage */ "./js/getLocalStorage.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./js/const.js");
/* harmony import */ var _alertPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertPopUp */ "./js/alertPopUp.js");
/* harmony import */ var _cleanOutDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleanOutDiv */ "./js/cleanOutDiv.js");
// import addNewToLS from './addNewToLS' - addNewToLS(...arg)




function addNewToLS(ksaNum) {
  var _vendor_0 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _name_1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var _address_2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var _nextTO_3 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  var _nextToDateText_4 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  var _nextToDate_5 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "0001-01-01T00:00:00.000Z";

  var _lastToDate_6 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "0001-01-01";

  var _CBK_7 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';

  var newKeyValue = {
    vendor_0: _vendor_0,
    name_1: _name_1,
    address_2: _address_2,
    nextTO_3: _nextTO_3,
    nextToDateText_4: _nextToDateText_4,
    nextToDate_5: _nextToDate_5,
    lastToDate_6: _lastToDate_6,
    CBK_7: _CBK_7
  };

  if (localStorage.getItem("ksa")) {
    var getJsonLS = JSON.parse(localStorage.getItem("ksa"));

    for (var ksaN in getJsonLS) {
      if (ksaN == ksaNum) {
        Object(_alertPopUp__WEBPACK_IMPORTED_MODULE_2__["default"])("\u041A\u0421\u0410 ".concat(ksaNum, " \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."));
      } else {
        var ls = {
          [ksaNum]: newKeyValue
        };
        getJsonLS = Object.assign(getJsonLS, ls);
        localStorage['ksa'] = JSON.stringify(getJsonLS);
      }
    }

    Object.assign(getJsonLS, newKeyValue);
  } else {
    localStorage.setItem('ksa', '');
    var _ls = {
      [ksaNum]: newKeyValue
    };
    localStorage['ksa'] = JSON.stringify(_ls);
  }

  Object(_cleanOutDiv__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_getLocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(_const__WEBPACK_IMPORTED_MODULE_1__["formatDate"], _const__WEBPACK_IMPORTED_MODULE_1__["date"]);
}

/***/ }),

/***/ "./js/alertPopUp.js":
/*!**************************!*\
  !*** ./js/alertPopUp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return alertPopUp; });
// alertPopUp('Error', & 'color');
// import & alertPopUp('text error, color non or info');
function alertPopUp(alertTxt, color) {
  var alertDiv = document.querySelector('#alert');
  var alertClose = document.querySelector('#alert-close');
  var textAlert = document.querySelector('#alert-text');
  alertDiv.classList.remove('uk-transition-slide-right');

  var addCloseMove = () => {
    document.querySelector('#alert-close .foreground').classList.add('close-loader-move');
  };

  var removeCloseMove = () => {
    document.querySelector('#alert-close .foreground').classList.remove('close-loader-move');
  };

  var hideAlert = () => {
    document.querySelector('#alert').classList.add('uk-transition-slide-right');
  }; // Текст алерта из аргумента alertPopUp('') 


  textAlert.textContent = alertTxt; // Цвет блока если нет аргумента красный, с любым 'arg' - синий

  if (!color) {
    alertDiv.classList.add('uk-button-danger');
  } else {
    alertDiv.classList.add('uk-button-primary');
  } // анимация лоадера закрытия


  if (!alertClose.classList.contains('uk-transition-slide-right')) {
    addCloseMove();
  } // закрыть алерт через 6 сек


  setTimeout(() => {
    hideAlert(), removeCloseMove();
  }, 6000); // закрыть алерт по клику

  alertClose.onclick = () => {
    hideAlert(), removeCloseMove();
  };
}

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./js/const.js");
/* harmony import */ var _getLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocalStorage */ "./js/getLocalStorage.js");
/* harmony import */ var _editClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editClick */ "./js/editClick.js");
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addNew */ "./js/addNew.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar */ "./js/navbar.js");
/* harmony import */ var _newGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newGroup */ "./js/newGroup.js");
/* harmony import */ var _addNewToLS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addNewToLS */ "./js/addNewToLS.js");
/* harmony import */ var _alertPopUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alertPopUp */ "./js/alertPopUp.js");
console.log('app is done!');







 //import './dbfire';
//import DbResp from './dbfire';

document.addEventListener("DOMContentLoaded", function (e) {
  if (typeof Storage == 'undefined') {
    document.querySelector('body').textContent = 'браузер не поддерживает localStorage';
  }

  ;

  if (document.querySelector('.a-not')) {
    document.querySelector('.a-not').addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  ; // Кнопка Edit

  Object(_editClick__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var test = document.querySelector('#test');
  test.addEventListener('click', () => {
    Object(_addNewToLS__WEBPACK_IMPORTED_MODULE_6__["default"])(11111104, 'ddg', '213', 'adr');
  });
  var startPage = new Promise((resolve, reject) => {
    // getLS from ./getLocalStorage
    resolve(Object(_getLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(_const__WEBPACK_IMPORTED_MODULE_0__["formatDate"], _const__WEBPACK_IMPORTED_MODULE_0__["date"]));
  });
  startPage.then(() => {
    var dbRest = {
      date: new Date().toJSON()
    };
    Object(_addNew__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_editClick__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_navbar__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_newGroup__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
});

/***/ }),

/***/ "./js/babel.js":
/*!*********************!*\
  !*** ./js/babel.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator(function* () {
    return yield Promise.resolve('async is working');
  });
  return _start.apply(this, arguments);
}

start().then(console.log);

/***/ }),

/***/ "./js/cleanOutDiv.js":
/*!***************************!*\
  !*** ./js/cleanOutDiv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanOutDiv; });
function cleanOutDiv() {
  var divCard = document.querySelector('#out').querySelectorAll('.uk-card');

  for (var div of divCard) {
    div.remove();
    console.log('clean ok');
  }
}

/***/ }),

/***/ "./js/const.js":
/*!*********************!*\
  !*** ./js/const.js ***!
  \*********************/
/*! exports provided: date, formatDate, editModalTitle, editModalYes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editModalTitle", function() { return editModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editModalYes", function() { return editModalYes; });

var date = new Date();
var formatDate = new Intl.DateTimeFormat("ru", {
  year: "2-digit",
  month: "2-digit"
});
var editModalTitle = document.querySelector('.edit-modal-title');
var editModalYes = document.querySelector('#edit-modal-yes');
var editModalNo = document.querySelector('#edit-modal-no');

/***/ }),

/***/ "./js/editClick.js":
/*!*************************!*\
  !*** ./js/editClick.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editClick; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./js/const.js");
/* harmony import */ var _getLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocalStorage */ "./js/getLocalStorage.js");


function editClick() {
  var editButton = document.querySelectorAll('.edit');
  var modalFon = document.querySelector('.fon');

  var _loop = function _loop(editItem) {
    editItem.onclick = function () {
      //let sibling = this.parentNode.children;
      var itemCard = this.parentNode;
      var itemName = itemCard.querySelector('.item-name');
      var inputToDate = itemCard.querySelector('.to-date');
      var toLeft = itemCard.querySelector('.to-time-left');
      var itemKSA = itemCard.querySelector('.item-ksa');
      var itemVendor = itemCard.querySelector('.vendor');
      var itemAddress = itemCard.querySelector('.item-adress');
      var cancelEdit = itemCard.querySelector('.cancel-edit');
      var toEdit = itemCard.querySelector('.to-edit');
      var stopEdit = itemCard.querySelector('.stop-edit');
      var delEdit = itemCard.querySelector('.del-edit');
      var temp_itemName = itemName.textContent;
      var temp_itemAddress = itemAddress.textContent;
      var temp_inputToDate = inputToDate.value; // номер КСА

      var ksaNum = itemKSA.textContent.replace(/\s/g, '');

      var editOn = function editOn() {
        itemCard.classList.add('item-card-up');
        modalFon.classList.add('fon-up');
        itemName.contentEditable = "true";
        itemName.classList.add('item-name-edit');
        itemAddress.classList.add('item-name-edit');
        itemAddress.contentEditable = "true";
        editItem.setAttribute("uk-icon", "icon: check; ratio: 1.4");
        cancelEdit.setAttribute("uk-icon", "icon: close; ratio: 1.5");
        cancelEdit.classList.remove("uk-transition-slide-right");
        toEdit.setAttribute("uk-icon", "icon: cog; ratio: 1.5");
        toEdit.classList.remove("uk-transition-slide-right");
        stopEdit.setAttribute("uk-icon", "icon: ban; ratio: 1.3");
        stopEdit.classList.remove("uk-transition-slide-right");
        delEdit.setAttribute("uk-icon", "icon: trash; ratio: 1.3");
        delEdit.classList.remove("uk-transition-slide-right");
      };

      var editBackUp = function editBackUp() {
        itemName.textContent = temp_itemName;
        itemAddress.textContent = temp_itemAddress;
        inputToDate.value = temp_inputToDate;
      };

      var editOff = function editOff() {
        itemName.removeAttribute("contentEditable");
        itemName.classList.remove('item-name-edit');
        itemAddress.classList.remove('item-name-edit');
        itemAddress.removeAttribute("contentEditable");
        editItem.setAttribute("uk-icon", "icon: more-vertical; ratio: 1.2");
        modalFon.classList.remove('fon-up');
        itemCard.classList.remove('item-card-up');
        inputToDate.classList.add('hidden');
        cancelEdit.removeAttribute("uk-icon");
        cancelEdit.classList.add("uk-transition-slide-right");
        toEdit.removeAttribute("uk-icon");
        toEdit.classList.add("uk-transition-slide-right");
        stopEdit.removeAttribute("uk-icon");
        stopEdit.classList.add("uk-transition-slide-right");
        delEdit.removeAttribute("uk-icon");
        delEdit.classList.add("uk-transition-slide-right");
      };

      editOn(); // Cancel Edit

      cancelEdit.onclick = () => {
        editBackUp();
        editOff();
        editClick();
      }; // TO Edit


      toEdit.onclick = () => {
        inputToDate.classList.remove('hidden');
      }; // Save Click


      this.onclick = function () {
        // Дата из инпута                       
        var inputDateValue = new Date(inputToDate.value);

        if (ksaNum == '') {
          itemKSA.textContent = "\u041D\u0435\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u041A\u0421\u0410";
          inputToDate.classList.add('hidden');
        } else if (inputToDate.value == '') {
          inputToDate.classList.add('to-date-wrong');
        } else {
          inputToDate.classList.remove('to-date-wrong');
          var lastTo = new Date(inputDateValue).toLocaleDateString('en-CA');
          var nextToDate = new Date(inputDateValue.setMonth(inputDateValue.getMonth() + 6));
          var mounthCount = nextToDate.getFullYear() * 12 + nextToDate.getMonth() - (_const__WEBPACK_IMPORTED_MODULE_0__["date"].getFullYear() * 12 + _const__WEBPACK_IMPORTED_MODULE_0__["date"].getMonth());

          if (!isNaN(inputDateValue)) {
            toLeft.textContent = "".concat(_const__WEBPACK_IMPORTED_MODULE_0__["formatDate"].format(nextToDate), " (").concat(mounthCount, ")");
            toLeft.classList.remove(...toLeft.classList);

            if (mounthCount > 0) {
              toLeft.classList.add('to-time-left', 'text-grey');
            } else if (mounthCount == 0) {
              toLeft.classList.add('to-time-left', 'text-green');
            } else {
              toLeft.classList.add('to-time-left', 'text-red');
            }

            ;
          }

          ;
          editOff(); // Запись в LS по ключу

          console.log(ksaNum); // let dataArrToLocalStor = { [ksaNum]: {
          //         vendor_0: itemVendor.textContent,
          //         name_1: itemName.textContent,
          //         address_2: itemAddress.textContent,
          //         nextTO_3: mounthCount,
          //         nextToDateText_4: toLeft.textContent,
          //         nextToDate_5: inputDateValue,
          //         lastToDate_6: lastTo,
          //         CBK_7:'_'
          // }}
          // console.log('ksa'[ksaNum]);
          // localStorage['ksa'] = JSON.stringify(dataArrToLocalStor);

          editClick();
        }
      }; // Del Click


      delEdit.onclick = () => {
        _const__WEBPACK_IMPORTED_MODULE_0__["editModalTitle"].textContent = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C - ".concat(ksaNum, "  ").concat(temp_itemAddress, " ?");

        _const__WEBPACK_IMPORTED_MODULE_0__["editModalYes"].onclick = () => {
          console.log("del ".concat(ksaNum));
          localStorage.removeItem([ksaNum]);
          itemCard.classList.add('uk-transition-slide-right');
          UIkit.modal(document.querySelector('#edit-modal')).hide();

          var r = () => itemCard.remove();

          setTimeout(r, 400);
          modalFon.classList.remove('fon-up');
        };
      };
    };
  };

  for (var editItem of editButton) {
    _loop(editItem);
  }

  ;
}
;

/***/ }),

/***/ "./js/getLocalStorage.js":
/*!*******************************!*\
  !*** ./js/getLocalStorage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLS; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./js/const.js");
/* harmony import */ var _insertOutToItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertOutToItemCard */ "./js/insertOutToItemCard.js");


function getLS(formatDate, date) {
  var outDiv = document.querySelector('#out');
  var ksa = JSON.parse(localStorage.getItem('ksa'));
  if (ksa == null) ksa = []; //console.log(Object.values(ksa));

  for (var ksaN in ksa) {
    var keyObj = Object.values(ksa[ksaN]); //Поиск по ключу   

    var keysKsa = ksaN; //let obj = JSON.parse(keysKsa);

    if (keysKsa !== null && keysKsa.length > 5) {
      // Вендор
      var valVendor = keyObj[0]; // Имя

      var valName = keyObj[1]; // Адрес

      var valAdrress = keyObj[2]; // След. ТО мес

      var valNextTO = keyObj[3]; // След. ТО мес текст // 10.21

      var valNextTODateText = formatDate.format(new Date(keyObj[5])); // След. ТО мес // Fri Oct 15 2021 

      var nextToDate_5 = new Date(keyObj[5]); // Счетчик

      var mCount = nextToDate_5.getFullYear() * 12 + nextToDate_5.getMonth() - (date.getFullYear() * 12 + date.getMonth());
      var textColor = '';

      if (mCount > 0) {
        textColor = 'text-grey';
      } else if (mCount == 0) {
        textColor = 'text-green';
      } else {
        textColor = 'text-red';
      } // Прошлое ТО 


      var lastToDate = keyObj[6]; //   for (let div of outDiv) {
      //       div
      //   }

      var outDivext = Object(_insertOutToItemCard__WEBPACK_IMPORTED_MODULE_1__["default"])(textColor, valNextTODateText, mCount, valAdrress, valVendor, valName, ksaN, lastToDate); // from ./insertOutToItemCard.js

      outDiv.insertAdjacentHTML('afterbegin', outDivext);
    }

    ;
  }

  ; //};
}
;

/***/ }),

/***/ "./js/insertOutToItemCard.js":
/*!***********************************!*\
  !*** ./js/insertOutToItemCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return insertOutToItemCard; });
// console.log(outArr);
function insertOutToItemCard(textColor, valNextTODateText, mCount, valAdrress, valVendor, valName, ksaN, lastToDate) {
  var out = "<div class=\"uk-card uk-card-default item-card\">\n        <span class=\"edit\" uk-icon=\"icon: more-vertical; ratio: 1.2\"></span>\n        <div class=\"cancel-edit  uk-transition-slide-right\"></div>\n        <div class=\"to-edit  uk-transition-slide-right\"><span>\u0422\u041E-6</span></div>\n        <div class=\"stop-edit  uk-transition-slide-right\"></div>\n        <div class=\"del-edit  uk-transition-slide-right\" uk-toggle=\"target: #edit-modal\"></div>\n        <div class=\"to-time-left ".concat(textColor, "\">").concat(valNextTODateText, " (").concat(mCount, ")</div>\n        <div class=\"item-adress\">").concat(valAdrress, "</div>\n        <div class=\"vendor hidden\">").concat(valVendor, "</div>\n        <div class=\"item-name\">").concat(valName, "</div>\n        <div class=\"item-ksa\">").concat(ksaN, "</div>  \n        <input type=\"date\" class=\"mdc-text-field to-date hidden\" value=\"").concat(lastToDate, "\" min=\"2020-01-01\" >\n    </div>");
  return out;
}

/***/ }),

/***/ "./js/navbar.js":
/*!**********************!*\
  !*** ./js/navbar.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navbar; });
//
function navbar() {
  var openCanvas = document.querySelector('.uk-navbar-toggle');
  var closeCanvas = document.querySelector('#canvas-close');

  openCanvas.onclick = () => {
    setTimeout(() => {
      closeCanvas.classList.remove("uk-transition-slide-right");
    }, 400);
  };

  closeCanvas.onclick = () => {
    closeCanvas.classList.add("uk-transition-slide-right");
  };
}

/***/ }),

/***/ "./js/newGroup.js":
/*!************************!*\
  !*** ./js/newGroup.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newGroup; });
function newGroup() {
  var canvasTogleGroupe = document.querySelector('.canvas-togle-groupe');
  var addNewGroupButton = document.getElementById('newGroupButton');
  var delGroupButton = document.getElementById('delGroupButton');
  var inpupNewGroup = document.getElementById('inpupNewGroup');
  var toggleButtonGroupe = document.getElementById('toggle-canvas-button-group');
  var addToLsNewGroup = document.getElementById('addToLsNewGroup'); // Стрелка верх-низ добавление группы

  canvasTogleGroupe.addEventListener('click', () => {
    if (toggleButtonGroupe.classList.contains('uk-animation-leave')) {
      document.querySelector('.canvas-togle-groupe .uk-icon').setAttribute("uk-icon", "icon: chevron-up; ratio: 1");
    } else {
      document.querySelector('.canvas-togle-groupe .uk-icon').setAttribute("uk-icon", "icon: chevron-down; ratio: 1");
    }
  });
  addNewGroupButton.addEventListener('click', () => {
    //console.log(document.querySelectorAll('.uk-offcanvas-bar button'));
    delGroupButton.classList.add('uk-transition-slide-left', 'hidden');
    inpupNewGroup.classList.remove('hidden', 'uk-transition-slide-right'); //localStorage.setItem('myCat', 'group');
  });
  addToLsNewGroup.addEventListener('click', () => {
    console.log(inputToLsNewGroup.value);

    if (localStorage['group']) {
      var pushNewGroupToLS = [];
      var getGroupFromLS = localStorage.getItem('group'); //pushNewGroupToLS.push(getGroupFromLS)

      console.log(pushNewGroupToLS);
      localStorage.setItem('group', JSON.stringify(inputToLsNewGroup.value));
    } else {
      localStorage.setItem('group', '[]');
    }
  });
}

/***/ }),

/***/ "./styles/less.less":
/*!**************************!*\
  !*** ./styles/less.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.4e477500f6d9ad5ee309.js.map