webpackJsonp([1],{

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIELD_MAX_LENGTH = exports.FIELD_MAX_LENGTH = 50;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _realt = __webpack_require__(24);

var _WindowService = __webpack_require__(364);

var _WindowService2 = _interopRequireDefault(_WindowService);

var _SessionService = __webpack_require__(365);

var _SessionService2 = _interopRequireDefault(_SessionService);

var _StatusConstants = __webpack_require__(21);

var _AccountSource = __webpack_require__(366);

var _AccountSource2 = _interopRequireDefault(_AccountSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccountSignInActions = function () {
  function AccountSignInActions() {
    _classCallCheck(this, AccountSignInActions);

    this.generate('signInCallback');
  }

  _createClass(AccountSignInActions, [{
    key: 'signIn',
    value: function signIn(query) {
      var _this = this;

      return function (dispatch) {
        _AccountSource2.default.signIn(query).loading(function (result) {
          return dispatch(_this.signInCallback(result));
        }).then(function (result) {
          _SessionService2.default.signIn(result.response);
          dispatch(_this.signInCallback(result));

          setTimeout(function () {
            return _WindowService2.default.redirect('http://localhost:3000/Dashboard.html');
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.signInCallback(result));

          setTimeout(function () {
            return dispatch(_this.signInCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return AccountSignInActions;
}();

exports.default = (0, _realt.createActions)(AccountSignInActions);

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowService = function () {
  function WindowService() {
    _classCallCheck(this, WindowService);

    this.window = window;
  }

  _createClass(WindowService, [{
    key: "redirect",
    value: function redirect(href) {
      this.window.location.href = href;
    }
  }, {
    key: "open",
    value: function open(link) {
      this.window.open(link);
    }
  }, {
    key: "listen",
    value: function listen(eventType, callback) {
      this.window.addEventListener(eventType, callback);
    }
  }, {
    key: "unlisten",
    value: function unlisten(eventType, callback) {
      this.window.removeEventListener(eventType, callback);
    }
  }, {
    key: "location",
    get: function get() {
      return this.window.location;
    }
  }, {
    key: "origin",
    get: function get() {
      return this.window.location.origin;
    }
  }, {
    key: "serviceOrigins",
    get: function get() {
      return this.window.appConfig ? this.window.appConfig.serviceOrigins : {};
    }
  }]);

  return WindowService;
}();

exports.default = new WindowService();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LocalStorageService = __webpack_require__(308);

var _LocalStorageService2 = _interopRequireDefault(_LocalStorageService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACCESS_TOKEN = 'access_token';

var SessionService = function () {
  function SessionService() {
    _classCallCheck(this, SessionService);

    this.document = document;
  }

  _createClass(SessionService, [{
    key: 'getCookie',
    value: function getCookie() {
      return document.cookie;
    }
  }, {
    key: 'setCookie',
    value: function setCookie(name, value) {
      var resultValue = encodeURIComponent(value);
      var expires = new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000).toUTCString();

      document.cookie = name + '=' + resultValue + '; path=/; expires=' + expires;
    }
  }, {
    key: 'removeCookie',
    value: function removeCookie(name) {
      document.cookie = name + '=; path=/; expires=' + new Date(0).toUTCString();
    }
  }, {
    key: 'signIn',
    value: function signIn(token) {
      _LocalStorageService2.default.set(_LocalStorageService.TOKEN, token);
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      this.removeCookie(ACCESS_TOKEN);

      _LocalStorageService2.default.remove(_LocalStorageService.TOKEN);
      _LocalStorageService2.default.remove(_LocalStorageService.USER);
    }
  }]);

  return SessionService;
}();

exports.default = new SessionService();

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AjaxService = __webpack_require__(115);

var _AjaxService2 = _interopRequireDefault(_AjaxService);

var _UrlConstants = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signIn: function signIn(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.USER_URL + 'auth', query);
  },
  registration: function registration(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.USER_URL + 'reg', query);
  }
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _WindowService = __webpack_require__(364);

var _WindowService2 = _interopRequireDefault(_WindowService);

var _SessionService = __webpack_require__(365);

var _SessionService2 = _interopRequireDefault(_SessionService);

var _StatusConstants = __webpack_require__(21);

var _AccountSource = __webpack_require__(366);

var _AccountSource2 = _interopRequireDefault(_AccountSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccountRegistrationActions = function () {
  function AccountRegistrationActions() {
    _classCallCheck(this, AccountRegistrationActions);

    this.generate('registrationCallback');
  }

  _createClass(AccountRegistrationActions, [{
    key: 'registration',
    value: function registration(query) {
      var _this = this;

      return function (dispatch) {
        _AccountSource2.default.registration(query).loading(function (result) {
          return dispatch(_this.registrationCallback(result));
        }).then(function (result) {
          _SessionService2.default.signIn(result.response);
          dispatch(_this.registrationCallback(result));

          setTimeout(function () {
            return _WindowService2.default.redirect('http://localhost:3000/Dashboard.html');
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.registrationCallback(result));

          setTimeout(function () {
            return dispatch(_this.registrationCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return AccountRegistrationActions;
}();

exports.default = (0, _realt.createActions)(AccountRegistrationActions);

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationValidation = exports.signInValidation = undefined;

var _ValidationService = __webpack_require__(942);

var _ValidationRules = __webpack_require__(943);

var _SignInConstants = __webpack_require__(213);

var signInValidation = (0, _ValidationService.combine)((0, _ValidationService.validate)('email', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.email), (0, _ValidationService.validate)('password', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber));

var registrationValidation = (0, _ValidationService.combine)((0, _ValidationService.validate)('email', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.email), (0, _ValidationService.validate)('login', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber), (0, _ValidationService.validate)('password', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber), (0, _ValidationService.validate)('repeatPassword', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber));

exports.signInValidation = signInValidation;
exports.registrationValidation = registrationValidation;

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(214);

var _AppService2 = _interopRequireDefault(_AppService);

var _Reducers = __webpack_require__(936);

var _Reducers2 = _interopRequireDefault(_Reducers);

var _Layout = __webpack_require__(939);

var _Layout2 = _interopRequireDefault(_Layout);

__webpack_require__(947);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _AppService2.default({
  container: _Layout2.default,
  reducers: _Reducers2.default,
  DOMNode: document.getElementById('root')
}).init();

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(50);

var _reduxForm = __webpack_require__(30);

var _SignInReducer = __webpack_require__(937);

var _SignInReducer2 = _interopRequireDefault(_SignInReducer);

var _RegistrationReducer = __webpack_require__(938);

var _RegistrationReducer2 = _interopRequireDefault(_RegistrationReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  signIn: _SignInReducer2.default,
  registration: _RegistrationReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _SignInActions = __webpack_require__(363);

var _SignInActions2 = _interopRequireDefault(_SignInActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInReducer = function () {
  function SignInReducer() {
    _classCallCheck(this, SignInReducer);

    this.bindHandler(this.handleSignInCallback, _SignInActions2.default.signInCallback);
  }

  _createClass(SignInReducer, [{
    key: 'handleSignInCallback',
    value: function handleSignInCallback(state, _ref) {
      var status = _ref.status,
          response = _ref.response,
          message = _ref.message;

      return _lodash2.default.assign({}, state, { status: status, message: message }, response ? { errors: response.message } : {});
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        message: '',
        errors: '',
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return SignInReducer;
}();

exports.default = (0, _realt.createReducer)(SignInReducer);

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _RegistrationActions = __webpack_require__(367);

var _RegistrationActions2 = _interopRequireDefault(_RegistrationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInReducer = function () {
  function SignInReducer() {
    _classCallCheck(this, SignInReducer);

    this.bindAction(_RegistrationActions2.default.registrationCallback, this.handleRegistration);
  }

  _createClass(SignInReducer, [{
    key: 'handleRegistration',
    value: function handleRegistration(state, _ref) {
      var status = _ref.status,
          response = _ref.response,
          message = _ref.message;

      return _lodash2.default.assign({}, state, { status: status, message: message }, response ? { errors: response.message } : {});
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        message: '',
        errors: '',
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return SignInReducer;
}();

exports.default = (0, _realt.createReducer)(SignInReducer);

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(84);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Controls = __webpack_require__(15);

var _SignIn = __webpack_require__(940);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Registration = __webpack_require__(945);

var _Registration2 = _interopRequireDefault(_Registration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationLayout = function (_Component) {
  _inherits(AuthorizationLayout, _Component);

  function AuthorizationLayout() {
    _classCallCheck(this, AuthorizationLayout);

    var _this = _possibleConstructorReturn(this, (AuthorizationLayout.__proto__ || Object.getPrototypeOf(AuthorizationLayout)).call(this));

    _this.state = {
      isSignIn: true
    };

    _this.onToggleView = function () {
      return _lodash2.default.debounce(_this.setState({ isSignIn: !_this.state.isSignIn }), 700);
    };
    return _this;
  }

  _createClass(AuthorizationLayout, [{
    key: 'render',
    value: function render() {
      var isSignIn = this.state.isSignIn;


      return _react2.default.createElement(
        'div',
        { className: 'authorization-layout' },
        _react2.default.createElement(
          'div',
          { className: 'authorization-content-wrap' },
          _react2.default.createElement('img', { alt: 'sorry...', src: 'http://127.0.0.1:3000/sign-in.png' }),
          _react2.default.createElement(
            _Controls.Button,
            { bsStyle: 'primary', className: 'toggled-view', onClick: this.onToggleView },
            isSignIn ? [_react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'person_add'
            ), _react2.default.createElement(
              'span',
              null,
              'Registration'
            )] : [_react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'person'
            ), _react2.default.createElement(
              'span',
              null,
              'Sign in'
            )]
          ),
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              transitionName: 'authorization',
              transitionEnterTimeout: 400,
              transitionLeaveTimeout: 300
            },
            isSignIn && _react2.default.createElement(_SignIn2.default, null),
            !isSignIn && _react2.default.createElement(_Registration2.default, null)
          )
        )
      );
    }
  }]);

  return AuthorizationLayout;
}(_react.Component);

exports.default = AuthorizationLayout;

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ConnectDecorators = __webpack_require__(39);

var _SigInForm = __webpack_require__(941);

var _SigInForm2 = _interopRequireDefault(_SigInForm);

var _ValidationConstants = __webpack_require__(368);

var _SignInActions = __webpack_require__(363);

var _SignInActions2 = _interopRequireDefault(_SignInActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

    _this.signIn = function (data) {
      return props.actions.signIn(data);
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'authorization-form sign-in-form' },
        _react2.default.createElement(_SigInForm2.default, _extends({}, this.props, {
          onSubmit: this.signIn
        }))
      );
    }
  }]);

  return SignIn;
}(_react.Component);

SignIn.propTypes = {
  actions: _propTypes2.default.object
};

exports.default = (0, _ConnectDecorators.compose)((0, _ConnectDecorators.connectToStore)({ name: 'signIn', actions: _SignInActions2.default }), (0, _ConnectDecorators.connectToForm)({ name: 'signIn', validation: _ValidationConstants.signInValidation }))(SignIn);

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = __webpack_require__(72);

var _Controls = __webpack_require__(15);

var _SignInConstants = __webpack_require__(213);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SignInForm = function SignInForm(_ref) {
  var status = _ref.status,
      props = _objectWithoutProperties(_ref, ['status']);

  return _react2.default.createElement(
    _Form.Form,
    props,
    _react2.default.createElement(_Form.Input, { name: 'email', label: 'Email', icon: 'email', maxLength: _SignInConstants.FIELD_MAX_LENGTH }),
    _react2.default.createElement(_Form.Input, { name: 'password', label: 'Password', icon: 'lock', maxLength: _SignInConstants.FIELD_MAX_LENGTH }),
    _react2.default.createElement(
      _Controls.ButtonsGroup,
      null,
      _react2.default.createElement(
        _Controls.ButtonLoader,
        { status: status },
        'sign in'
      )
    )
  );
};

SignInForm.propTypes = {
  status: _propTypes2.default.string
};

exports.default = SignInForm;

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;
exports.combine = combine;

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combine() {
  for (var _len = arguments.length, validations = Array(_len), _key = 0; _key < _len; _key++) {
    validations[_key] = arguments[_key];
  }

  return function (values) {
    return _lodash2.default.transform(validations, function (result, validation) {
      return _lodash2.default.merge(result, validation(values));
    });
  };
}

var validate = exports.validate = function validate(name) {
  for (var _len2 = arguments.length, rules = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rules[_key2 - 1] = arguments[_key2];
  }

  return function (values) {
    return _lodash2.default.transform(rules, function (result, rule) {
      return _lodash2.default.assign(result, rule(name, _lodash2.default.get(values, name), values));
    });
  };
};

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beforeSameDate = exports.beforeDate = exports.afterSameDate = exports.afterDate = exports.kpp = exports.inn = exports.numberInterval = exports.weekDay = exports.date = exports.maskedInputDate = exports.alfaNumber = exports.alfa = exports.number = exports.maxLength = exports.minLength = exports.maxCount = exports.login = exports.email = exports.requiredIfNot = exports.requiredIf = exports.required = undefined;

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _ValidationConstants = __webpack_require__(944);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMessage = function errorMessage(isInvalid, name, message) {
  return isInvalid ? _lodash2.default.set({}, name, message) : {};
};
var valueGet = function valueGet(values, valueOrPath) {
  return _lodash2.default.isString(valueOrPath) ? _lodash2.default.get(values, valueOrPath) : valueOrPath;
};

var required = function required(name, value) {
  return errorMessage(_lodash2.default.isString(value) ? !_lodash2.default.trim(value, ' ') : !value && !_lodash2.default.isNumber(value), name, 'Пожалуйста, заполните это поле');
};

var requiredIf = function requiredIf(preconditionOrPath) {
  return function (name, value, values) {
    var precondition = valueGet(values, preconditionOrPath);

    if (!precondition) return null;

    return errorMessage(_lodash2.default.isEmpty(value) && !_lodash2.default.isNumber(value), name, 'Пожалуйста, заполните это поле');
  };
};

var requiredIfNot = function requiredIfNot(preconditionOrPath) {
  return function (name, value, values) {
    var precondition = valueGet(values, preconditionOrPath);

    if (precondition) return null;

    return errorMessage(_lodash2.default.isEmpty(value) && !_lodash2.default.isNumber(value), name, 'Пожалуйста, заполните это поле');
  };
};

var maxCount = function maxCount(count) {
  return function (name, values) {
    return errorMessage(values && values.length > count, name, { _error: '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E - ' + count });
  };
};

var minLength = function minLength(length) {
  return function (name, value) {
    return errorMessage(value && value.length < length, name, '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F ' + length + ' \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
  };
};

var maxLength = function maxLength(length) {
  return function (name, value) {
    return errorMessage(value && value.length > length, name, '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F ' + length + ' \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
  };
};

var alfaNumber = function alfaNumber(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_lodash2.default.isEmpty(value)) return true;

  var val = value.replace(/[a-z\s0-9\sа-я\s-]+/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var number = function number(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_lodash2.default.isEmpty(value)) return true;

  var val = value.replace(/[0-9\s]/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var alfa = function alfa(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_lodash2.default.isEmpty(value)) return true;

  var val = value.replace(/[а-я\sa-z\s_\-"]+/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var email = function email(name, value) {
  if (_lodash2.default.isEmpty(value)) return true;

  var re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

  return errorMessage(!re.test(value), name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var login = function login(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var val = value.replace(/[a-z\sа-я\s0-9\s-\s@\s,\s."]+/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var maskedInputDate = function maskedInputDate(minDateOrPath, maxDateOrPath) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var minDate = valueGet(values, minDateOrPath);
    var maxDate = valueGet(values, maxDateOrPath);

    if (!value) return true;

    if (!value.isValid() || !(minDate.isBefore(value) && maxDate.isAfter(value))) {
      return errorMessage(true, name, _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var afterDate = function afterDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isAfter(date)) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var afterSameDate = function afterSameDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isAfter(date) && !value.isSame(date, 'day')) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var beforeDate = function beforeDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isBefore(date) || value.isSame(date, 'day')) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var beforeSameDate = function beforeSameDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isBefore(date) && !value.isSame(date, 'day')) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var date = function date(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!value) return true;

  if (!value.isValid()) {
    return errorMessage(true, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
  }

  return errorMessage(false);
};

var weekDay = function weekDay(weekDays) {
  return function (value) {
    return value && _lodash2.default.includes(weekDays, value.day()) && 'На этот день уже создан шаблон';
  };
};

var numberInterval = function numberInterval() {
  var minOrPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var maxOrPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var values = arguments[2];

    var min = valueGet(values, minOrPath);
    var max = valueGet(values, maxOrPath);

    if (value < min || value > max) {
      return errorMessage(true, name, _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var inn = function inn(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!value) return errorMessage(false);

  if (value.length === 0) {
    return errorMessage(false);
  }

  if (value.length !== 10 && value.length !== 12) {
    return errorMessage(true, name, 'Длина поля должна составлять 10 или 12 символов');
  }

  var coefficients = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

  var calculateControlNumber = function calculateControlNumber(digits, length) {
    var result = 0;

    _lodash2.default.take(digits, length).forEach(function (digit, index) {
      result += digit * _lodash2.default.takeRight(coefficients, length)[index];
    });

    return result % 11 % 10;
  };

  var validControlNumber = function validControlNumber(digits, length) {
    switch (length) {
      case 10:
        return calculateControlNumber(digits, 9) === digits[9];
      case 12:
        return calculateControlNumber(digits, 10) === digits[10] && calculateControlNumber(digits, 11) === digits[11];
      default:
        return false;
    }
  };

  var digits = _lodash2.default.split(value, '').map(function (digit) {
    return parseInt(digit, 10);
  });

  if (!validControlNumber(digits, value.length)) {
    return errorMessage(true, name, 'Контрольное число не совпадает с рассчитанным');
  }

  return errorMessage(false);
};

var kpp = function kpp(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!value) return errorMessage(false);

  if (value.length !== 0 && value.length !== 9) {
    return errorMessage(true, name, 'Длина поля должна составлять 9 символов');
  }

  return errorMessage(false);
};

exports.required = required;
exports.requiredIf = requiredIf;
exports.requiredIfNot = requiredIfNot;
exports.email = email;
exports.login = login;
exports.maxCount = maxCount;
exports.minLength = minLength;
exports.maxLength = maxLength;
exports.number = number;
exports.alfa = alfa;
exports.alfaNumber = alfaNumber;
exports.maskedInputDate = maskedInputDate;
exports.date = date;
exports.weekDay = weekDay;
exports.numberInterval = numberInterval;
exports.inn = inn;
exports.kpp = kpp;
exports.afterDate = afterDate;
exports.afterSameDate = afterSameDate;
exports.beforeDate = beforeDate;
exports.beforeSameDate = beforeSameDate;

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ERROR_MESSAGES = {
  incorrectFormat: 'Некорректный формат',
  incorrectValue: 'Некорректное значение'
};

exports.ERROR_MESSAGES = ERROR_MESSAGES;

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ConnectDecorators = __webpack_require__(39);

var _RegistrationForm = __webpack_require__(946);

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

var _ValidationConstants = __webpack_require__(368);

var _RegistrationActions = __webpack_require__(367);

var _RegistrationActions2 = _interopRequireDefault(_RegistrationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

    _this.registration = function (data) {
      return props.actions.registration(data);
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(
        'div',
        { className: 'authorization-form registration-form' },
        _react2.default.createElement(_RegistrationForm2.default, _extends({}, this.props, {
          onSubmit: this.registration
        }))
      );
    }
  }]);

  return SignIn;
}(_react.Component);

SignIn.propTypes = {
  actions: _propTypes2.default.object
};

exports.default = (0, _ConnectDecorators.compose)((0, _ConnectDecorators.connectToStore)({ name: 'registration', actions: _RegistrationActions2.default }), (0, _ConnectDecorators.connectToForm)({ name: 'registration', validation: _ValidationConstants.registrationValidation }))(SignIn);

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = __webpack_require__(72);

var _Controls = __webpack_require__(15);

var _SignInConstants = __webpack_require__(213);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RegistrationForm = function RegistrationForm(_ref) {
  var status = _ref.status,
      props = _objectWithoutProperties(_ref, ['status']);

  return _react2.default.createElement(
    _Form.Form,
    props,
    _react2.default.createElement(_Form.Input, { name: 'email', label: 'Email*', icon: 'email', maxLength: _SignInConstants.FIELD_MAX_LENGTH }),
    _react2.default.createElement(_Form.Input, { name: 'displayName', label: 'Login', icon: 'face', maxLength: _SignInConstants.FIELD_MAX_LENGTH }),
    _react2.default.createElement(_Form.Input, { name: 'password', label: 'Password*', icon: 'lock', maxLength: _SignInConstants.FIELD_MAX_LENGTH }),
    _react2.default.createElement(
      _Controls.ButtonsGroup,
      null,
      _react2.default.createElement(
        _Controls.ButtonLoader,
        { status: status, bsSize: 'lg' },
        'registration'
      )
    )
  );
};

RegistrationForm.propTypes = {
  status: _propTypes2.default.string
};

exports.default = RegistrationForm;

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[935]);