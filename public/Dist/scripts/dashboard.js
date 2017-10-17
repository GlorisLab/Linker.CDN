webpackJsonp([1],{

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(203);

var _AppService2 = _interopRequireDefault(_AppService);

var _Reducers = __webpack_require__(510);

var _Reducers2 = _interopRequireDefault(_Reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _AppService2.default({
  container: React.createElement(
    'div',
    null,
    'asf'
  ),
  reducers: _Reducers2.default,
  DOMNode: document.getElementById('root')
}).init();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(48);

var _reduxForm = __webpack_require__(28);

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer
});

/***/ })

},[351]);