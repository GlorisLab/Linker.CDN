webpackJsonp([1],{

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(204);

var _AppService2 = _interopRequireDefault(_AppService);

var _Reducers = __webpack_require__(512);

var _Reducers2 = _interopRequireDefault(_Reducers);

var _App = __webpack_require__(910);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(914);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _AppService2.default({
  container: _App2.default,
  reducers: _Reducers2.default,
  DOMNode: document.getElementById('root')
}).init();

/***/ }),

/***/ 512:
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

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(475);

var _Layout = __webpack_require__(911);

var _Layout2 = _interopRequireDefault(_Layout);

var _View = __webpack_require__(913);

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EconomicsApp = function EconomicsApp() {
  var path = '/Dashboard.html';

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: path,
      render: function render() {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: path + '/Albums' });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, { path: path + '/Albums', component: _View2.default })
  );
};

exports.default = EconomicsApp;

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(912);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'dashboard-layout' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'dashboard-content' },
      children
    )
  );
};

DashboardLayout.propTypes = {
  children: _propTypes2.default.node
};

exports.default = DashboardLayout;

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(20);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardHeader = function (_Component) {
  _inherits(DashboardHeader, _Component);

  function DashboardHeader() {
    _classCallCheck(this, DashboardHeader);

    return _possibleConstructorReturn(this, (DashboardHeader.__proto__ || Object.getPrototypeOf(DashboardHeader)).apply(this, arguments));
  }

  _createClass(DashboardHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'dashboard-header' });
    }
  }]);

  return DashboardHeader;
}(_react.Component);

exports.default = DashboardHeader;

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ConnectDecorators = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    return _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));
  }

  _createClass(SignIn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'albums' },
        _react2.default.createElement(
          'div',
          { className: 'album' },
          '1'
        ),
        _react2.default.createElement(
          'div',
          { className: 'album' },
          '2'
        ),
        _react2.default.createElement(
          'div',
          { className: 'album' },
          '3'
        )
      );
    }
  }]);

  return SignIn;
}(_react.Component);

SignIn.propTypes = {
  actions: _propTypes2.default.object
};

exports.default = SignIn;

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[353]);