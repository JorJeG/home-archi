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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Flux/Actions.js":
/*!*****************************!*\
  !*** ./src/Flux/Actions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ActionsTypes = __webpack_require__(/*! ./ActionsTypes */ \"./src/Flux/ActionsTypes.js\");\n\nvar _ActionsTypes2 = _interopRequireDefault(_ActionsTypes);\n\nvar _Dispatcher = __webpack_require__(/*! ./Dispatcher */ \"./src/Flux/Dispatcher.js\");\n\nvar _Dispatcher2 = _interopRequireDefault(_Dispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Actions = {\n  typing: function typing(data) {\n    _Dispatcher2.default.dispatch({\n      type: _ActionsTypes2.default.TYPING,\n      payload: data\n    });\n  },\n  sendData: function sendData(data) {\n    _Dispatcher2.default.dispatch({\n      type: _ActionsTypes2.default.SEND_DATA,\n      payload: data\n    });\n    this.serverResponse(data);\n  },\n  serverResponse: function serverResponse(resp) {\n    setTimeout(function () {\n      _Dispatcher2.default.dispatch({\n        type: _ActionsTypes2.default.SERVER_RESPONSE,\n        payload: resp\n      });\n    }, 5000);\n  }\n};\n\nexports.default = Actions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRmx1eC9BY3Rpb25zLmpzPzQ4ZmYiXSwibmFtZXMiOlsiQWN0aW9ucyIsInR5cGluZyIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJUWVBJTkciLCJwYXlsb2FkIiwic2VuZERhdGEiLCJTRU5EX0RBVEEiLCJzZXJ2ZXJSZXNwb25zZSIsInJlc3AiLCJzZXRUaW1lb3V0IiwiU0VSVkVSX1JFU1BPTlNFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVO0FBQ2RDLFFBRGMsa0JBQ1BDLElBRE8sRUFDRDtBQUNYLHlCQUFXQyxRQUFYLENBQW9CO0FBQ2xCQyxZQUFNLHVCQUFZQyxNQURBO0FBRWxCQyxlQUFTSjtBQUZTLEtBQXBCO0FBSUQsR0FOYTtBQU9kSyxVQVBjLG9CQU9MTCxJQVBLLEVBT0M7QUFDYix5QkFBV0MsUUFBWCxDQUFvQjtBQUNsQkMsWUFBTSx1QkFBWUksU0FEQTtBQUVsQkYsZUFBU0o7QUFGUyxLQUFwQjtBQUlBLFNBQUtPLGNBQUwsQ0FBb0JQLElBQXBCO0FBQ0QsR0FiYTtBQWNkTyxnQkFkYywwQkFjQ0MsSUFkRCxFQWNPO0FBQ25CQyxlQUFXLFlBQU07QUFDZiwyQkFBV1IsUUFBWCxDQUFvQjtBQUNsQkMsY0FBTSx1QkFBWVEsZUFEQTtBQUVsQk4saUJBQVNJO0FBRlMsT0FBcEI7QUFJRCxLQUxELEVBS0csSUFMSDtBQU1EO0FBckJhLENBQWhCOztrQkF3QmVWLE8iLCJmaWxlIjoiLi9zcmMvRmx1eC9BY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJy4vQWN0aW9uc1R5cGVzJztcbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4vRGlzcGF0Y2hlcic7XG5cbmNvbnN0IEFjdGlvbnMgPSB7XG4gIHR5cGluZyhkYXRhKSB7XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5UWVBJTkcsXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgIH0pO1xuICB9LFxuICBzZW5kRGF0YShkYXRhKSB7XG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRU5EX0RBVEEsXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgIH0pO1xuICAgIHRoaXMuc2VydmVyUmVzcG9uc2UoZGF0YSk7XG4gIH0sXG4gIHNlcnZlclJlc3BvbnNlKHJlc3ApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVJWRVJfUkVTUE9OU0UsXG4gICAgICAgIHBheWxvYWQ6IHJlc3AsXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Flux/Actions.js\n");

/***/ }),

/***/ "./src/Flux/ActionsTypes.js":
/*!**********************************!*\
  !*** ./src/Flux/ActionsTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ActionTypes = {\n  SEND_DATA: 'SEND_DATA',\n  SERVER_RESPONSE: 'SERVER_RESPONSE',\n  TYPING: 'TYPING'\n};\n\nexports.default = ActionTypes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRmx1eC9BY3Rpb25zVHlwZXMuanM/NWZhZSJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlcyIsIlNFTkRfREFUQSIsIlNFUlZFUl9SRVNQT05TRSIsIlRZUElORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxjQUFjO0FBQ2xCQyxhQUFXLFdBRE87QUFFbEJDLG1CQUFpQixpQkFGQztBQUdsQkMsVUFBUTtBQUhVLENBQXBCOztrQkFNZUgsVyIsImZpbGUiOiIuL3NyYy9GbHV4L0FjdGlvbnNUeXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFjdGlvblR5cGVzID0ge1xuICBTRU5EX0RBVEE6ICdTRU5EX0RBVEEnLFxuICBTRVJWRVJfUkVTUE9OU0U6ICdTRVJWRVJfUkVTUE9OU0UnLFxuICBUWVBJTkc6ICdUWVBJTkcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uVHlwZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Flux/ActionsTypes.js\n");

/***/ }),

/***/ "./src/Flux/Dispatcher.js":
/*!********************************!*\
  !*** ./src/Flux/Dispatcher.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Dispatcher = function () {\n  function Dispatcher() {\n    _classCallCheck(this, Dispatcher);\n\n    this._id = 0;\n    this._callbacks = {};\n  }\n\n  _createClass(Dispatcher, [{\n    key: \"register\",\n    value: function register(callback) {\n      this._callbacks[this._id] = callback;\n      return this._id++; // eslint-disable-line no-plusplus\n    }\n  }, {\n    key: \"unregister\",\n    value: function unregister(id) {\n      delete this._callbacks[id];\n    }\n  }, {\n    key: \"dispatch\",\n    value: function dispatch(payload) {\n      var _this = this;\n\n      var keys = Object.keys(this._callbacks);\n      keys.forEach(function (id) {\n        return _this._callbacks[id](payload);\n      });\n    }\n  }]);\n\n  return Dispatcher;\n}();\n\nexports.default = new Dispatcher();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRmx1eC9EaXNwYXRjaGVyLmpzPzFkZGQiXSwibmFtZXMiOlsiRGlzcGF0Y2hlciIsIl9pZCIsIl9jYWxsYmFja3MiLCJjYWxsYmFjayIsImlkIiwicGF5bG9hZCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7QUFDSix3QkFBYztBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNEOzs7OzZCQUVRQyxRLEVBQVU7QUFDakIsV0FBS0QsVUFBTCxDQUFnQixLQUFLRCxHQUFyQixJQUE0QkUsUUFBNUI7QUFDQSxhQUFPLEtBQUtGLEdBQUwsRUFBUCxDQUZpQixDQUVFO0FBQ3BCOzs7K0JBRVVHLEUsRUFBSTtBQUNiLGFBQU8sS0FBS0YsVUFBTCxDQUFnQkUsRUFBaEIsQ0FBUDtBQUNEOzs7NkJBRVFDLE8sRUFBUztBQUFBOztBQUNoQixVQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVksS0FBS0osVUFBakIsQ0FBYjtBQUNBSSxXQUFLRSxPQUFMLENBQWE7QUFBQSxlQUFNLE1BQUtOLFVBQUwsQ0FBZ0JFLEVBQWhCLEVBQW9CQyxPQUFwQixDQUFOO0FBQUEsT0FBYjtBQUNEOzs7Ozs7a0JBR1ksSUFBSUwsVUFBSixFIiwiZmlsZSI6Ii4vc3JjL0ZsdXgvRGlzcGF0Y2hlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pZCA9IDA7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gIH1cblxuICByZWdpc3RlcihjYWxsYmFjaykge1xuICAgIHRoaXMuX2NhbGxiYWNrc1t0aGlzLl9pZF0gPSBjYWxsYmFjaztcbiAgICByZXR1cm4gdGhpcy5faWQrKzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wbHVzcGx1c1xuICB9XG5cbiAgdW5yZWdpc3RlcihpZCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbaWRdO1xuICB9XG5cbiAgZGlzcGF0Y2gocGF5bG9hZCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuICAgIGtleXMuZm9yRWFjaChpZCA9PiB0aGlzLl9jYWxsYmFja3NbaWRdKHBheWxvYWQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRGlzcGF0Y2hlcigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Flux/Dispatcher.js\n");

/***/ }),

/***/ "./src/Flux/Store.js":
/*!***************************!*\
  !*** ./src/Flux/Store.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Dispatcher = __webpack_require__(/*! ./Dispatcher */ \"./src/Flux/Dispatcher.js\");\n\nvar _Dispatcher2 = _interopRequireDefault(_Dispatcher);\n\nvar _ActionsTypes = __webpack_require__(/*! ./ActionsTypes */ \"./src/Flux/ActionsTypes.js\");\n\nvar _ActionsTypes2 = _interopRequireDefault(_ActionsTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Store = function () {\n  function Store() {\n    _classCallCheck(this, Store);\n\n    this._state = {};\n  }\n\n  _createClass(Store, [{\n    key: 'getState',\n    value: function getState() {\n      return this._state;\n    }\n  }]);\n\n  return Store;\n}();\n\nvar NewStore = new Store();\n\n_Dispatcher2.default.register(function (_ref) {\n  var type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case _ActionsTypes2.default.SEND_DATA:\n      {\n        NewStore._state.data = payload;\n        break;\n      }\n    case _ActionsTypes2.default.SERVER_RESPONSE:\n      {\n        NewStore._state.response = payload;\n        var resp = document.querySelector('.view-stub__label');\n        resp.textContent = '\\u0421\\u0435\\u0440\\u0432\\u0435\\u0440 \\u043F\\u0440\\u0438\\u043D\\u044F\\u043B \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 <' + payload + '>';\n        break;\n      }\n    case _ActionsTypes2.default.TYPING:\n      {\n        NewStore._state.data = payload;\n        break;\n      }\n    default:\n      return true;\n  }\n  var log = document.querySelector('.log');\n  log.textContent = 'ACTION: ' + JSON.stringify(type);\n  console.log({ ACTION: type, payload: payload }); // eslint-disable-line no-console\n  return true;\n});\n\nexports.default = NewStore;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRmx1eC9TdG9yZS5qcz9mYmMwIl0sIm5hbWVzIjpbIlN0b3JlIiwiX3N0YXRlIiwiTmV3U3RvcmUiLCJyZWdpc3RlciIsInR5cGUiLCJwYXlsb2FkIiwiU0VORF9EQVRBIiwiZGF0YSIsIlNFUlZFUl9SRVNQT05TRSIsInJlc3BvbnNlIiwicmVzcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiVFlQSU5HIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJBQ1RJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7Ozs7QUFHSCxJQUFNQyxXQUFXLElBQUlGLEtBQUosRUFBakI7O0FBRUEscUJBQVdHLFFBQVgsQ0FBb0IsZ0JBQXVCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUssdUJBQWFFLFNBQWxCO0FBQTZCO0FBQzNCSixpQkFBU0QsTUFBVCxDQUFnQk0sSUFBaEIsR0FBdUJGLE9BQXZCO0FBQ0E7QUFDRDtBQUNELFNBQUssdUJBQWFHLGVBQWxCO0FBQW1DO0FBQ2pDTixpQkFBU0QsTUFBVCxDQUFnQlEsUUFBaEIsR0FBMkJKLE9BQTNCO0FBQ0EsWUFBTUssT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBYjtBQUNBRixhQUFLRyxXQUFMLHdIQUE0Q1IsT0FBNUM7QUFDQTtBQUNEO0FBQ0QsU0FBSyx1QkFBYVMsTUFBbEI7QUFBMEI7QUFDeEJaLGlCQUFTRCxNQUFULENBQWdCTSxJQUFoQixHQUF1QkYsT0FBdkI7QUFDQTtBQUNEO0FBQ0Q7QUFDRSxhQUFPLElBQVA7QUFoQko7QUFrQkEsTUFBTVUsTUFBTUosU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0FHLE1BQUlGLFdBQUosZ0JBQTZCRyxLQUFLQyxTQUFMLENBQWViLElBQWYsQ0FBN0I7QUFDQWMsVUFBUUgsR0FBUixDQUFZLEVBQUVJLFFBQVFmLElBQVYsRUFBZ0JDLGdCQUFoQixFQUFaLEVBckJ5QyxDQXFCRDtBQUN4QyxTQUFPLElBQVA7QUFDRCxDQXZCRDs7a0JBeUJlSCxRIiwiZmlsZSI6Ii4vc3JjL0ZsdXgvU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuL0Rpc3BhdGNoZXInO1xuaW1wb3J0IEFjdGlvbnNUeXBlcyBmcm9tICcuL0FjdGlvbnNUeXBlcyc7XG5cbmNsYXNzIFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuXG5jb25zdCBOZXdTdG9yZSA9IG5ldyBTdG9yZSgpO1xuXG5EaXNwYXRjaGVyLnJlZ2lzdGVyKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFjdGlvbnNUeXBlcy5TRU5EX0RBVEE6IHtcbiAgICAgIE5ld1N0b3JlLl9zdGF0ZS5kYXRhID0gcGF5bG9hZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIEFjdGlvbnNUeXBlcy5TRVJWRVJfUkVTUE9OU0U6IHtcbiAgICAgIE5ld1N0b3JlLl9zdGF0ZS5yZXNwb25zZSA9IHBheWxvYWQ7XG4gICAgICBjb25zdCByZXNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctc3R1Yl9fbGFiZWwnKTtcbiAgICAgIHJlc3AudGV4dENvbnRlbnQgPSBg0KHQtdGA0LLQtdGAINC/0YDQuNC90Y/QuyDQtNCw0L3QvdGL0LUgPCR7cGF5bG9hZH0+YDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIEFjdGlvbnNUeXBlcy5UWVBJTkc6IHtcbiAgICAgIE5ld1N0b3JlLl9zdGF0ZS5kYXRhID0gcGF5bG9hZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpO1xuICBsb2cudGV4dENvbnRlbnQgPSBgQUNUSU9OOiAke0pTT04uc3RyaW5naWZ5KHR5cGUpfWA7XG4gIGNvbnNvbGUubG9nKHsgQUNUSU9OOiB0eXBlLCBwYXlsb2FkIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3U3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Flux/Store.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Actions = __webpack_require__(/*! ./Flux/Actions */ \"./src/Flux/Actions.js\");\n\nvar _Actions2 = _interopRequireDefault(_Actions);\n\nvar _Store = __webpack_require__(/*! ./Flux/Store */ \"./src/Flux/Store.js\");\n\nvar _Store2 = _interopRequireDefault(_Store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// eslint-disable-line no-unused-vars\n\nvar sendServer = document.querySelector('.view-stub__apply');\nvar input = document.querySelector('.view-stub__input');\n\ninput.addEventListener('keyup', function (e) {\n  if (e.keyCode === 13 && input.value !== '') {\n    _Actions2.default.sendData(input.value);\n    input.value = '';\n  } else {\n    _Actions2.default.typing(input.value);\n  }\n});\n\nsendServer.addEventListener('click', function () {\n  if (input.value !== '') {\n    _Actions2.default.sendData(input.value);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsic2VuZFNlcnZlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwidmFsdWUiLCJzZW5kRGF0YSIsInR5cGluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFBcUM7O0FBRXJDLElBQU1BLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQW5CO0FBQ0EsSUFBTUMsUUFBUUYsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBZDs7QUFFQUMsTUFBTUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JDLE1BQUlBLEVBQUVDLE9BQUYsS0FBYyxFQUFkLElBQW9CSCxNQUFNSSxLQUFOLEtBQWdCLEVBQXhDLEVBQTRDO0FBQzFDLHNCQUFRQyxRQUFSLENBQWlCTCxNQUFNSSxLQUF2QjtBQUNBSixVQUFNSSxLQUFOLEdBQWMsRUFBZDtBQUNELEdBSEQsTUFHTztBQUNMLHNCQUFRRSxNQUFSLENBQWVOLE1BQU1JLEtBQXJCO0FBQ0Q7QUFDRixDQVBEOztBQVNBUCxXQUFXSSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDLE1BQUlELE1BQU1JLEtBQU4sS0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsc0JBQVFDLFFBQVIsQ0FBaUJMLE1BQU1JLEtBQXZCO0FBQ0Q7QUFDRixDQUpEIiwiZmlsZSI6Ii4vc3JjL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb25zIGZyb20gJy4vRmx1eC9BY3Rpb25zJztcbmltcG9ydCBOZXdTdG9yZSBmcm9tICcuL0ZsdXgvU3RvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmNvbnN0IHNlbmRTZXJ2ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19hcHBseScpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19pbnB1dCcpO1xuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgIEFjdGlvbnMuc2VuZERhdGEoaW5wdXQudmFsdWUpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgQWN0aW9ucy50eXBpbmcoaW5wdXQudmFsdWUpO1xuICB9XG59KTtcblxuc2VuZFNlcnZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgIEFjdGlvbnMuc2VuZERhdGEoaW5wdXQudmFsdWUpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });