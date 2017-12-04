webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _StatusConstants = __webpack_require__(21);

var _AlbumsSource = __webpack_require__(179);

var _AlbumsSource2 = _interopRequireDefault(_AlbumsSource);

var _ViewActions = __webpack_require__(178);

var _ViewActions2 = _interopRequireDefault(_ViewActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesAlbumsActionsEdit = function () {
  function DashboardPagesAlbumsActionsEdit() {
    _classCallCheck(this, DashboardPagesAlbumsActionsEdit);

    this.generate('formInit', 'albumEditCallback');
  }

  _createClass(DashboardPagesAlbumsActionsEdit, [{
    key: 'editCancel',
    value: function editCancel() {
      return function (dispatch) {
        return dispatch(_ViewActions2.default.editingAlbumSelect(''));
      };
    }
  }, {
    key: 'albumEdit',
    value: function albumEdit(query) {
      var _this = this;

      return function (dispatch) {
        _AlbumsSource2.default.editAlbum(query).loading(function (result) {
          return dispatch(_this.albumEditCallback(result));
        }).then(function (result) {
          dispatch(_this.albumEditCallback(result));

          setTimeout(function () {
            dispatch(_this.albumEditCallback({ status: _StatusConstants.STATUS_DEFAULT }));
            dispatch(_ViewActions2.default.editingAlbumSelect(''));
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.albumEditCallback(result));

          setTimeout(function () {
            return dispatch(_this.albumEditCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return DashboardPagesAlbumsActionsEdit;
}();

exports.default = (0, _realt.createActions)(DashboardPagesAlbumsActionsEdit);

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _EditFormActions = __webpack_require__(117);

var _EditFormActions2 = _interopRequireDefault(_EditFormActions);

var _AlbumsSource = __webpack_require__(179);

var _AlbumsSource2 = _interopRequireDefault(_AlbumsSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesAlbumsActionsView = function () {
  function DashboardPagesAlbumsActionsView() {
    _classCallCheck(this, DashboardPagesAlbumsActionsView);

    this.generate('editingAlbumSelect', 'filterChange');
  }

  _createClass(DashboardPagesAlbumsActionsView, [{
    key: 'albumsGet',
    value: function albumsGet(userId, query) {
      return _AlbumsSource2.default.getAlbums(userId, query);
    }
  }, {
    key: 'albumEditFormOpen',
    value: function albumEditFormOpen(album) {
      var _this = this;

      return function (dispatch) {
        dispatch(_EditFormActions2.default.formInit(album));
        dispatch(_this.editingAlbumSelect(album.id));
      };
    }
  }, {
    key: 'albumDelete',
    value: function albumDelete(id) {
      return _AlbumsSource2.default.deleteAlbum(id);
    }
  }, {
    key: 'albumTypeToggle',
    value: function albumTypeToggle(id, type) {
      return _AlbumsSource2.default.changeAlbumType(id, type);
    }
  }]);

  return DashboardPagesAlbumsActionsView;
}();

exports.default = (0, _realt.createActions)(DashboardPagesAlbumsActionsView);

/***/ }),

/***/ 179:
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
  getAlbums: function getAlbums(userId, query) {
    return _AjaxService2.default.getRequest(_UrlConstants.ALBUM_URL + 'findByUser/' + userId, query);
  },
  createAlbum: function createAlbum(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.ALBUM_URL + 'create', query);
  },
  editAlbum: function editAlbum(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.ALBUM_URL + 'edit/' + query.id, query);
  },
  changeAlbumType: function changeAlbumType(id, type) {
    return _AjaxService2.default.getRequest(_UrlConstants.ALBUM_URL + 'changeType/' + id + '/' + type, null, { id: id, type: type });
  },
  deleteAlbum: function deleteAlbum(id) {
    console.log('TODO DO API');
    // return AjaxService.postRequest(`${ALBUM_URL}edit/${query.id}`, query);
  }
};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _StatusConstants = __webpack_require__(21);

var _AlbumsSource = __webpack_require__(179);

var _AlbumsSource2 = _interopRequireDefault(_AlbumsSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesAlbumsActionsCreate = function () {
  function DashboardPagesAlbumsActionsCreate() {
    _classCallCheck(this, DashboardPagesAlbumsActionsCreate);

    this.generate('albumCreateCallback', 'formReset');
  }

  _createClass(DashboardPagesAlbumsActionsCreate, [{
    key: 'albumCreate',
    value: function albumCreate(query, callback) {
      var _this = this;

      return function (dispatch) {
        _AlbumsSource2.default.createAlbum(query).loading(function (result) {
          return dispatch(_this.albumCreateCallback(result));
        }).then(function (result) {
          dispatch(_this.albumCreateCallback(result));

          setTimeout(function () {
            callback();_this.albumCreateCallback({ status: _StatusConstants.STATUS_DEFAULT });
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.albumCreateCallback(result));

          setTimeout(function () {
            return dispatch(_this.albumCreateCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return DashboardPagesAlbumsActionsCreate;
}();

exports.default = (0, _realt.createActions)(DashboardPagesAlbumsActionsCreate);

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _StatusConstants = __webpack_require__(21);

var _LinksSource = __webpack_require__(313);

var _LinksSource2 = _interopRequireDefault(_LinksSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesLinksActionsCreate = function () {
  function DashboardPagesLinksActionsCreate() {
    _classCallCheck(this, DashboardPagesLinksActionsCreate);

    this.generate('linkCreateCallback');
  }

  _createClass(DashboardPagesLinksActionsCreate, [{
    key: 'linkCreate',
    value: function linkCreate(query, callback) {
      var _this = this;

      return function (dispatch) {
        _LinksSource2.default.createLink(query).loading(function (result) {
          return dispatch(_this.linkCreateCallback(result));
        }).then(function (result) {
          dispatch(_this.linkCreateCallback(result));

          setTimeout(function () {
            callback();_this.linkCreateCallback({ status: _StatusConstants.STATUS_DEFAULT });
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.linkCreateCallback(result));

          setTimeout(function () {
            return dispatch(_this.linkCreateCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return DashboardPagesLinksActionsCreate;
}();

exports.default = (0, _realt.createActions)(DashboardPagesLinksActionsCreate);

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _UserSource = __webpack_require__(710);

var _UserSource2 = _interopRequireDefault(_UserSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardUserActions = function () {
  function DashboardUserActions() {
    _classCallCheck(this, DashboardUserActions);
  }

  _createClass(DashboardUserActions, [{
    key: 'userGet',
    value: function userGet() {
      return _UserSource2.default.getUser();
    }
  }]);

  return DashboardUserActions;
}();

exports.default = (0, _realt.createActions)(DashboardUserActions);

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(19);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var toString = Object.prototype.toString
var type = function(obj) {
  return toString.call(obj).slice(8, -1);
}

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

/* istanbul ignore next */
function copy(object) {
  if (Array.isArray(object)) {
    return assign(object.constructor(object.length), object)
  } else if (type(object) === 'Map') {
    return new Map(object)
  } else if (type(object) === 'Set') {
    return new Set(object)
  } else if (object && typeof object === 'object') {
    var prototype = object.constructor && object.constructor.prototype
    return assign(Object.create(prototype || null), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };
  update.isEquals = function(a, b) { return a === b; };

  return update;

  function update(object, spec) {
    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        var objectWasNextObject = object === nextObject;
        nextObject = commands[key](spec[key], nextObject, spec, object);
        if (objectWasNextObject && update.isEquals(nextObject, object)) {
          nextObject = object;
        }
      } else {
        var nextValueForKey = update(object[key], spec[key]);
        if (!update.isEquals(nextValueForKey, nextObject[key]) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          nextObject[key] = nextValueForKey;
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$push');
    return value.length ? nextObject.concat(value) : nextObject;
  },
  $unshift: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$unshift');
    return value.length ? value.concat(nextObject) : nextObject;
  },
  $splice: function(value, nextObject, spec, originalObject) {
    invariantSplices(nextObject, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
      splice.apply(nextObject, args);
    });
    return nextObject;
  },
  $set: function(value, nextObject, spec) {
    invariantSet(spec);
    return value;
  },
  $toggle: function(targets, nextObject) {
    invariantSpecArray(targets, '$toggle');
    var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;

    targets.forEach(function(target) {
      nextObjectCopy[target] = !nextObject[target];
    });

    return nextObjectCopy;
  },
  $unset: function(value, nextObject, spec, originalObject) {
    invariantSpecArray(value, '$unset');
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(nextObject, key)) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $add: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$add');
    invariantSpecArray(value, '$add');
    if (type(nextObject) === 'Map') {
      value.forEach(function(pair) {
        var key = pair[0];
        var value = pair[1];
        if (nextObject === originalObject && nextObject.get(key) !== value) nextObject = copy(originalObject);
        nextObject.set(key, value);
      });
    } else {
      value.forEach(function(value) {
        if (nextObject === originalObject && !nextObject.has(value)) nextObject = copy(originalObject);
        nextObject.add(value);
      });
    }
    return nextObject;
  },
  $remove: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$remove');
    invariantSpecArray(value, '$remove');
    value.forEach(function(key) {
      if (nextObject === originalObject && nextObject.has(key)) nextObject = copy(originalObject);
      nextObject.delete(key);
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, originalObject) {
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

module.exports = newContext();
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  invariantSpecArray(spec[command], command)
}

function invariantSpecArray(spec, command) {
  invariant(
    Array.isArray(spec),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    spec
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}

function invariantMapOrSet(target, command) {
  var typeOfTarget = type(target);
  invariant(
    typeOfTarget === 'Map' || typeOfTarget === 'Set',
    'update(): %s expects a target of type Set or Map; got %s',
    command,
    typeOfTarget
  );
}


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _LinksSource = __webpack_require__(313);

var _LinksSource2 = _interopRequireDefault(_LinksSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesLinksActionsView = function () {
  function DashboardPagesLinksActionsView() {
    _classCallCheck(this, DashboardPagesLinksActionsView);
  }

  _createClass(DashboardPagesLinksActionsView, [{
    key: 'linksGet',
    value: function linksGet(query) {
      return _LinksSource2.default.getLinks(query);
    }
  }]);

  return DashboardPagesLinksActionsView;
}();

exports.default = (0, _realt.createActions)(DashboardPagesLinksActionsView);

/***/ }),

/***/ 313:
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
  getLinks: function getLinks(albumId) {
    return _AjaxService2.default.getRequest(_UrlConstants.LINK_URL + 'findByAlbum/' + albumId, { limit: 10, offset: 0 });
  },
  createAlbum: function createAlbum(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.LINK_URL + 'create', query);
  }
};

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = __webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DashboardPagesAlbumsCreateForm = function DashboardPagesAlbumsCreateForm(_ref) {
  var footer = _ref.footer,
      props = _objectWithoutProperties(_ref, ['footer']);

  return _react2.default.createElement(
    _Form.Form,
    _extends({}, props, { className: 'album-form' }),
    _react2.default.createElement(_Form.Input, { name: 'title', label: 'Title*' }),
    _react2.default.createElement(_Form.Input, { name: 'description', label: 'Description' }),
    footer
  );
};

DashboardPagesAlbumsCreateForm.propTypes = {
  footer: _propTypes2.default.node
};

exports.default = DashboardPagesAlbumsCreateForm;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(215);

var _AppService2 = _interopRequireDefault(_AppService);

var _Reducers = __webpack_require__(527);

var _Reducers2 = _interopRequireDefault(_Reducers);

var _App = __webpack_require__(750);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(934);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _AppService2.default({
  container: _App2.default,
  reducers: _Reducers2.default,
  DOMNode: document.getElementById('root')
}).init();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(50);

var _reduxForm = __webpack_require__(30);

var _Reducers = __webpack_require__(693);

var _Reducers2 = _interopRequireDefault(_Reducers);

var _Reducers3 = __webpack_require__(743);

var _Reducers4 = _interopRequireDefault(_Reducers3);

var _Reducers5 = __webpack_require__(747);

var _Reducers6 = _interopRequireDefault(_Reducers5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)(_extends({
  form: _reduxForm.reducer

}, _Reducers2.default, _Reducers4.default, _Reducers6.default));

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserReducer = __webpack_require__(694);

var _UserReducer2 = _interopRequireDefault(_UserReducer);

var _SearcherReducer = __webpack_require__(949);

var _SearcherReducer2 = _interopRequireDefault(_SearcherReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = {
  user: _UserReducer2.default,
  searcher: _SearcherReducer2.default
};

exports.default = rootReducer;

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _UserActions = __webpack_require__(304);

var _UserActions2 = _interopRequireDefault(_UserActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardUserReducer = function () {
  function DashboardUserReducer() {
    _classCallCheck(this, DashboardUserReducer);

    this.bindAction(_UserActions2.default.userGet, this.handleUserGet);
  }

  _createClass(DashboardUserReducer, [{
    key: 'handleUserGet',
    value: function handleUserGet(state, _ref) {
      var status = _ref.status,
          isSuccess = _ref.isSuccess,
          response = _ref.response;

      if (!isSuccess) return _lodash2.default.assign({}, state, { status: status });

      return _lodash2.default.assign({}, state, _extends({ status: _StatusConstants.STATUS_DEFAULT }, response));
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        user: {},
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return DashboardUserReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardUserReducer);

/***/ }),

/***/ 710:
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
  getUser: function getUser(query) {
    return _AjaxService2.default.getRequest(_UrlConstants.USER_URL + 'validate', query);
  }
};

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewReducer = __webpack_require__(744);

var _ViewReducer2 = _interopRequireDefault(_ViewReducer);

var _CreateFormReducer = __webpack_require__(745);

var _CreateFormReducer2 = _interopRequireDefault(_CreateFormReducer);

var _EditFormReducer = __webpack_require__(746);

var _EditFormReducer2 = _interopRequireDefault(_EditFormReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = {
  albums: _ViewReducer2.default,
  albumEdit: _EditFormReducer2.default,
  albumCreate: _CreateFormReducer2.default
};

exports.default = rootReducer;

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutabilityHelper = __webpack_require__(311);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _ViewActions = __webpack_require__(178);

var _ViewActions2 = _interopRequireDefault(_ViewActions);

var _CreateFormActions = __webpack_require__(180);

var _CreateFormActions2 = _interopRequireDefault(_CreateFormActions);

var _EditFormActions = __webpack_require__(117);

var _EditFormActions2 = _interopRequireDefault(_EditFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesAlbumsViewReducer = function () {
  function DashboardPagesAlbumsViewReducer() {
    _classCallCheck(this, DashboardPagesAlbumsViewReducer);

    this.bindAction(_ViewActions2.default.albumsGet, this.handleAlbumsGet);
    this.bindAction(_ViewActions2.default.editingAlbumSelect, this.handleEditingAlbumSelect);
    this.bindAction(_ViewActions2.default.albumTypeToggle, this.handleAlbumTypeToggle);
    this.bindAction(_ViewActions2.default.filterChange, this.handleFilterChange);
    this.bindAction(_CreateFormActions2.default.albumCreateCallback, this.handleAlbumCreate);
    this.bindAction(_EditFormActions2.default.albumEditCallback, this.handleAlbumEdit);
  }

  _createClass(DashboardPagesAlbumsViewReducer, [{
    key: 'handleAlbumsGet',
    value: function handleAlbumsGet(state, _ref) {
      var status = _ref.status,
          isSuccess = _ref.isSuccess,
          response = _ref.response;

      if (!isSuccess) return _lodash2.default.assign({}, state, { status: status });

      if (state.filter.offset !== 0) return (0, _immutabilityHelper2.default)(state, { $merge: { status: _StatusConstants.STATUS_DEFAULT, data: [].concat(_toConsumableArray(state.data), _toConsumableArray(response)) } });

      return (0, _immutabilityHelper2.default)(state, { $merge: { contentStatus: _StatusConstants.STATUS_DEFAULT, status: _StatusConstants.STATUS_DEFAULT, data: response } });
    }
  }, {
    key: 'handleEditingAlbumSelect',
    value: function handleEditingAlbumSelect(state, editingAlbum) {
      return (0, _immutabilityHelper2.default)(state, { $merge: { editingAlbum: editingAlbum } });
    }
  }, {
    key: 'handleAlbumCreate',
    value: function handleAlbumCreate(state, _ref2) {
      var isSuccess = _ref2.isSuccess,
          response = _ref2.response;

      if (!isSuccess) return state;

      return (0, _immutabilityHelper2.default)(state, {
        data: { $push: [response] }
      });
    }
  }, {
    key: 'handleFilterChange',
    value: function handleFilterChange(state, filter) {
      return (0, _immutabilityHelper2.default)(state, {
        filter: { $merge: _extends({}, filter) }
      });
    }
  }, {
    key: 'handleAlbumTypeToggle',
    value: function handleAlbumTypeToggle(state, _ref3) {
      var isSuccess = _ref3.isSuccess,
          data = _ref3.data;

      if (!isSuccess) return state;

      var index = _lodash2.default.findIndex(state.data, function (_ref4) {
        var _id = _ref4._id;
        return data.id === _id;
      });

      if (index < 0) return state;

      return (0, _immutabilityHelper2.default)(state, {
        data: _defineProperty({}, index, {
          $merge: { type: data.type }
        })
      });
    }
  }, {
    key: 'handleAlbumEdit',
    value: function handleAlbumEdit(state, _ref5) {
      var isSuccess = _ref5.isSuccess,
          response = _ref5.response,
          query = _ref5.query;

      if (!isSuccess) return state;

      var index = _lodash2.default.findIndex(state.data, function (_ref6) {
        var _id = _ref6._id;
        return query.id === _id;
      });

      if (index < 0) return state;

      return (0, _immutabilityHelper2.default)(state, {
        data: _defineProperty({}, index, {
          $merge: response
        })
      });
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        data: [],
        editingAlbum: '',
        status: _StatusConstants.STATUS_DEFAULT,
        contentStatus: _StatusConstants.STATUS_LOADING,
        filter: {
          limit: 25,
          offset: 0,
          search: ''
        }
      };
    }
  }]);

  return DashboardPagesAlbumsViewReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardPagesAlbumsViewReducer);

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _CreateFormActions = __webpack_require__(180);

var _CreateFormActions2 = _interopRequireDefault(_CreateFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesAlbumsCreateFormReducer = function () {
  function DashboardPagesAlbumsCreateFormReducer() {
    _classCallCheck(this, DashboardPagesAlbumsCreateFormReducer);

    this.bindAction(_CreateFormActions2.default.albumCreateCallback, this.handleAlbumCreate);
    this.bindAction(_CreateFormActions2.default.formReset, this.handleFormReset(this.initialState));
  }

  _createClass(DashboardPagesAlbumsCreateFormReducer, [{
    key: 'handleAlbumCreate',
    value: function handleAlbumCreate(state, _ref) {
      var status = _ref.status;

      return _lodash2.default.assign({}, state, { status: status });
    }
  }, {
    key: 'handleFormReset',
    value: function handleFormReset(state) {
      return function () {
        return _lodash2.default.assign({}, state);
      };
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return DashboardPagesAlbumsCreateFormReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardPagesAlbumsCreateFormReducer);

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _EditFormActions = __webpack_require__(117);

var _EditFormActions2 = _interopRequireDefault(_EditFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesAlbumsCreateFormReducer = function () {
  function DashboardPagesAlbumsCreateFormReducer() {
    _classCallCheck(this, DashboardPagesAlbumsCreateFormReducer);

    this.bindAction(_EditFormActions2.default.albumEditCallback, this.handleAlbumEdit);
    this.bindAction(_EditFormActions2.default.formInit, this.handleFormInit);
  }

  _createClass(DashboardPagesAlbumsCreateFormReducer, [{
    key: 'handleAlbumEdit',
    value: function handleAlbumEdit(state, _ref) {
      var status = _ref.status;

      return _lodash2.default.assign({}, state, { status: status });
    }
  }, {
    key: 'handleFormInit',
    value: function handleFormInit(state, initialValues) {
      return _lodash2.default.assign({}, state, { initialValues: initialValues });
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        status: _StatusConstants.STATUS_DEFAULT,
        initialValues: {}
      };
    }
  }]);

  return DashboardPagesAlbumsCreateFormReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardPagesAlbumsCreateFormReducer);

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewReducer = __webpack_require__(748);

var _ViewReducer2 = _interopRequireDefault(_ViewReducer);

var _CreateFormReducer = __webpack_require__(749);

var _CreateFormReducer2 = _interopRequireDefault(_CreateFormReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = {
  links: _ViewReducer2.default,
  linkCreate: _CreateFormReducer2.default
};

exports.default = rootReducer;

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutabilityHelper = __webpack_require__(311);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _ViewActions = __webpack_require__(312);

var _ViewActions2 = _interopRequireDefault(_ViewActions);

var _CreateFormActions = __webpack_require__(181);

var _CreateFormActions2 = _interopRequireDefault(_CreateFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesLinksViewReducer = function () {
  function DashboardPagesLinksViewReducer() {
    _classCallCheck(this, DashboardPagesLinksViewReducer);

    this.bindAction(_ViewActions2.default.linksGet, this.handleLinksGet);
    this.bindAction(_CreateFormActions2.default.linkCreateCallback, this.handleLinkCreate);
  }

  _createClass(DashboardPagesLinksViewReducer, [{
    key: 'handleLinksGet',
    value: function handleLinksGet(state, _ref) {
      var status = _ref.status,
          isSuccess = _ref.isSuccess,
          response = _ref.response;

      if (!isSuccess) return _lodash2.default.assign({}, state, { status: status });

      return _lodash2.default.assign({}, state, { status: _StatusConstants.STATUS_DEFAULT, data: response });
    }
  }, {
    key: 'handleLinkCreate',
    value: function handleLinkCreate(state, _ref2) {
      var isSuccess = _ref2.isSuccess,
          response = _ref2.response;

      if (!isSuccess) return state;

      return (0, _immutabilityHelper2.default)(state, {
        data: { $push: [response] }
      });
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        data: [],
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return DashboardPagesLinksViewReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardPagesLinksViewReducer);

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(21);

var _CreateFormActions = __webpack_require__(181);

var _CreateFormActions2 = _interopRequireDefault(_CreateFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardPagesLinksCreateFormReducer = function () {
  function DashboardPagesLinksCreateFormReducer() {
    _classCallCheck(this, DashboardPagesLinksCreateFormReducer);

    this.bindAction(_CreateFormActions2.default.linkCreateCallback, this.handleLinkCreate);
  }

  _createClass(DashboardPagesLinksCreateFormReducer, [{
    key: 'handleLinkCreate',
    value: function handleLinkCreate(state, _ref) {
      var status = _ref.status;

      return _lodash2.default.assign({}, state, { status: status });
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return DashboardPagesLinksCreateFormReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardPagesLinksCreateFormReducer);

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(258);

var _Layout = __webpack_require__(751);

var _Layout2 = _interopRequireDefault(_Layout);

var _View = __webpack_require__(924);

var _View2 = _interopRequireDefault(_View);

var _View3 = __webpack_require__(929);

var _View4 = _interopRequireDefault(_View3);

var _UserProvider = __webpack_require__(933);

var _UserProvider2 = _interopRequireDefault(_UserProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EconomicsApp = function EconomicsApp() {
  var path = '/Dashboard';

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      _UserProvider2.default,
      null,
      _react2.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: path,
        render: function render() {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: path + '/Albums' });
        }
      }),
      _react2.default.createElement(_reactRouterDom.Route, { path: path + '/Albums', component: _View2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: path + '/Links/:albumId/:albumName', component: _View4.default })
    )
  );
};

exports.default = EconomicsApp;

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(752);

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

/***/ 752:
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

var _WindowService = __webpack_require__(182);

var _WindowService2 = _interopRequireDefault(_WindowService);

var _SessionService = __webpack_require__(183);

var _SessionService2 = _interopRequireDefault(_SessionService);

var _ConnectDecorators = __webpack_require__(39);

var _Controls = __webpack_require__(13);

var _Searcher = __webpack_require__(948);

var _Searcher2 = _interopRequireDefault(_Searcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardHeader = function (_Component) {
  _inherits(DashboardHeader, _Component);

  function DashboardHeader() {
    _classCallCheck(this, DashboardHeader);

    var _this = _possibleConstructorReturn(this, (DashboardHeader.__proto__ || Object.getPrototypeOf(DashboardHeader)).call(this));

    _this.onLogout = function () {
      _SessionService2.default.signOut();

      _WindowService2.default.redirect('/');
    };
    return _this;
  }

  _createClass(DashboardHeader, [{
    key: 'render',
    value: function render() {
      var displayName = this.props.displayName;


      return _react2.default.createElement(
        'div',
        { className: 'dashboard-header' },
        _react2.default.createElement(_Searcher2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'user-info' },
          _react2.default.createElement(
            _Controls.DropdownButton,
            {
              id: 'user-info-dropdown',
              title: _react2.default.createElement(
                'span',
                { title: displayName },
                displayName
              ),
              pullRight: true
            },
            _react2.default.createElement(
              _Controls.MenuItem,
              { key: 'exit', onSelect: this.onLogout },
              '\u0412\u044B\u0445\u043E\u0434'
            )
          )
        )
      );
    }
  }]);

  return DashboardHeader;
}(_react.Component);

DashboardHeader.propTypes = {
  displayName: _propTypes2.default.string
};

exports.default = (0, _ConnectDecorators.connectToStore)({ name: 'user' })(DashboardHeader);

/***/ }),

/***/ 924:
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

var _Helpers = __webpack_require__(94);

var _Controls = __webpack_require__(13);

var _ViewActions = __webpack_require__(178);

var _ViewActions2 = _interopRequireDefault(_ViewActions);

var _CreateForm = __webpack_require__(925);

var _CreateForm2 = _interopRequireDefault(_CreateForm);

var _Album = __webpack_require__(926);

var _Album2 = _interopRequireDefault(_Album);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardPagesAlbumsView = function (_Component) {
  _inherits(DashboardPagesAlbumsView, _Component);

  function DashboardPagesAlbumsView(props) {
    _classCallCheck(this, DashboardPagesAlbumsView);

    var _this = _possibleConstructorReturn(this, (DashboardPagesAlbumsView.__proto__ || Object.getPrototypeOf(DashboardPagesAlbumsView)).call(this));

    var _props$actions = props.actions,
        albumsGet = _props$actions.albumsGet,
        albumEditFormOpen = _props$actions.albumEditFormOpen,
        albumTypeToggle = _props$actions.albumTypeToggle,
        albumDelete = _props$actions.albumDelete,
        filterChange = _props$actions.filterChange;


    _this.componentDidMount = function () {
      return _this.dataFetch();
    };

    _this.dataFetch = function (filter) {
      return albumsGet(_this.props.userId, filter || _this.props.filter);
    };
    _this.onAlbumOpen = function (id, name) {
      return function () {
        return _this.props.history.push('/Dashboard/Links/' + id + '/' + name);
      };
    };
    _this.onAlbumDelete = function (id) {
      return function () {
        return albumDelete(id);
      };
    };
    _this.onAlbumTypeToggle = function (id, type) {
      return function () {
        return albumTypeToggle(id, type);
      };
    };
    _this.onAlbumEditFormOpen = function (album) {
      return function () {
        return albumEditFormOpen(album);
      };
    };
    _this.onFilterChange = function (filter) {
      return filterChange(filter);
    };
    _this.onDownloadMore = function () {
      return _this.onFilterChange({ offset: _this.props.filter.offset + _this.props.filter.limit });
    };
    return _this;
  }

  _createClass(DashboardPagesAlbumsView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _ref$filter = _ref.filter,
          offset = _ref$filter.offset,
          limit = _ref$filter.limit,
          searcherValue = _ref.searcherValue;
      var _props = this.props,
          prevOffset = _props.filter.offset,
          prevSearcherValue = _props.searcherValue;


      if (prevOffset !== offset) this.dataFetch({ searcherValue: searcherValue, offset: offset, limit: limit });
      if (searcherValue !== prevSearcherValue) {
        this.onFilterChange({ offset: 0 });
        this.dataFetch({ searcherValue: searcherValue, offset: 0, limit: limit });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          data = _props2.data,
          contentStatus = _props2.contentStatus,
          status = _props2.status,
          editingAlbum = _props2.editingAlbum;


      return _react2.default.createElement(
        _Helpers.ContentStatus,
        { status: contentStatus },
        _react2.default.createElement(
          'div',
          { className: 'albums' },
          data.map(function (_ref2) {
            var _id = _ref2._id,
                album = _objectWithoutProperties(_ref2, ['_id']);

            return _react2.default.createElement(_Album2.default, _extends({
              key: _id
            }, album, {
              isEditing: editingAlbum === _id,
              id: _id,
              onAlbumOpen: _this2.onAlbumOpen,
              onAlbumEditFormOpen: _this2.onAlbumEditFormOpen,
              onAlbumDelete: _this2.onAlbumDelete,
              onAlbumTypeToggle: _this2.onAlbumTypeToggle
            }));
          }),
          _react2.default.createElement(_CreateForm2.default, { userId: this.props.userId })
        ),
        _react2.default.createElement(
          'div',
          { className: 'download-more' },
          _react2.default.createElement(
            _Controls.ButtonLoader,
            { status: status, onClick: this.onDownloadMore },
            _react2.default.createElement(
              'i',
              { className: 'material-icons', title: 'Show more' },
              'arrow_downward'
            )
          )
        )
      );
    }
  }]);

  return DashboardPagesAlbumsView;
}(_react.Component);

DashboardPagesAlbumsView.propTypes = {
  actions: _propTypes2.default.object,
  history: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  editingAlbum: _propTypes2.default.string,
  userId: _propTypes2.default.string,
  searcherValue: _propTypes2.default.string,
  status: _propTypes2.default.string,
  contentStatus: _propTypes2.default.string,
  data: _propTypes2.default.array
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var albums = _ref3.albums,
      user = _ref3.user,
      searcher = _ref3.searcher;
  return _extends({}, albums, {
    searcherValue: searcher.value,
    userId: user['_id']
  });
};

exports.default = (0, _ConnectDecorators.connectToStore)({ mapStateToProps: mapStateToProps, actions: _ViewActions2.default })(DashboardPagesAlbumsView);

/***/ }),

/***/ 925:
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

var _reactAddonsCssTransitionGroup = __webpack_require__(93);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ConnectDecorators = __webpack_require__(39);

var _Controls = __webpack_require__(13);

var _CreateFormActions = __webpack_require__(180);

var _CreateFormActions2 = _interopRequireDefault(_CreateFormActions);

var _Form = __webpack_require__(364);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardPagesAlbumsCreateForm = function (_Component) {
  _inherits(DashboardPagesAlbumsCreateForm, _Component);

  function DashboardPagesAlbumsCreateForm(props) {
    _classCallCheck(this, DashboardPagesAlbumsCreateForm);

    var _this = _possibleConstructorReturn(this, (DashboardPagesAlbumsCreateForm.__proto__ || Object.getPrototypeOf(DashboardPagesAlbumsCreateForm)).call(this));

    var reset = props.reset,
        _props$actions = props.actions,
        albumCreate = _props$actions.albumCreate,
        formReset = _props$actions.formReset;


    _this.state = {
      isOpen: false
    };

    _this.openToggle = function () {
      reset();
      formReset();
      _this.setState({ isOpen: !_this.state.isOpen });
    };
    _this.onAlbumCreate = function (album) {
      return albumCreate(_extends({}, album, { userId: _this.props.userId }), _this.openToggle);
    };
    return _this;
  }

  _createClass(DashboardPagesAlbumsCreateForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          status = _props.status,
          props = _objectWithoutProperties(_props, ['status']);

      return _react2.default.createElement(
        'div',
        { className: 'wrap-album' },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'album',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
          },
          this.state.isOpen && _react2.default.createElement(
            'div',
            { className: 'album' },
            _react2.default.createElement(_Form2.default, _extends({}, props, {
              onSubmit: this.onAlbumCreate,
              footer: _react2.default.createElement(
                _Controls.ButtonsGroup,
                null,
                _react2.default.createElement(
                  _Controls.Button,
                  { status: status, onClick: this.openToggle },
                  'cancel'
                ),
                _react2.default.createElement(
                  _Controls.ButtonLoader,
                  { status: status },
                  'create'
                )
              )
            }))
          ),
          !this.state.isOpen && _react2.default.createElement(
            'div',
            { className: 'album new-album' },
            _react2.default.createElement(
              _Controls.Button,
              { onClick: this.openToggle },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'add'
              )
            )
          )
        )
      );
    }
  }]);

  return DashboardPagesAlbumsCreateForm;
}(_react.Component);

DashboardPagesAlbumsCreateForm.propTypes = {
  actions: _propTypes2.default.object,
  userId: _propTypes2.default.string,
  status: _propTypes2.default.string,
  reset: _propTypes2.default.func
};

exports.default = (0, _ConnectDecorators.compose)((0, _ConnectDecorators.connectToStore)({ name: 'albumCreate', actions: _CreateFormActions2.default }), (0, _ConnectDecorators.connectToForm)({ name: 'albumCreateForm' }))(DashboardPagesAlbumsCreateForm);

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsCssTransitionGroup = __webpack_require__(93);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _FormUtils = __webpack_require__(73);

var _FormUtils2 = _interopRequireDefault(_FormUtils);

var _EditForm = __webpack_require__(927);

var _EditForm2 = _interopRequireDefault(_EditForm);

var _AlbumsConstants = __webpack_require__(928);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardPagesAlbum = function DashboardPagesAlbum(_ref) {
  var isEditing = _ref.isEditing,
      description = _ref.description,
      type = _ref.type,
      title = _ref.title,
      id = _ref.id,
      onAlbumOpen = _ref.onAlbumOpen,
      onAlbumEditFormOpen = _ref.onAlbumEditFormOpen,
      onAlbumTypeToggle = _ref.onAlbumTypeToggle,
      onAlbumDelete = _ref.onAlbumDelete;
  return _react2.default.createElement(
    'div',
    { className: 'wrap-album' },
    _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        transitionName: 'album',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
      },
      isEditing && _react2.default.createElement(_EditForm2.default, null),
      !isEditing && _react2.default.createElement(
        'div',
        { className: 'album', onClick: onAlbumOpen(id, title) },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'description' },
          description
        ),
        _react2.default.createElement(
          'div',
          { className: 'controls', onClick: _FormUtils2.default.stopPropagation },
          _react2.default.createElement(
            'i',
            { className: 'material-icons', title: 'Delete album', onClick: onAlbumDelete(id) },
            'delete'
          ),
          _react2.default.createElement(
            'i',
            { className: 'material-icons', title: 'Edit album', onClick: onAlbumEditFormOpen({ id: id, title: title, description: description }) },
            'mode_edit'
          ),
          _AlbumsConstants.ALBUM_TYPE.private === type ? _react2.default.createElement(
            'i',
            { className: 'material-icons', title: 'Make album published', onClick: onAlbumTypeToggle(id, _AlbumsConstants.ALBUM_TYPE.public) },
            'lock_outline'
          ) : _react2.default.createElement(
            'i',
            { className: 'material-icons', title: 'Make alum private', onClick: onAlbumTypeToggle(id, _AlbumsConstants.ALBUM_TYPE.private) },
            'lock_open'
          )
        )
      )
    )
  );
};

DashboardPagesAlbum.propTypes = {
  isEditing: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  type: _propTypes2.default.string,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  onAlbumOpen: _propTypes2.default.func,
  onAlbumEditFormOpen: _propTypes2.default.func,
  onAlbumTypeToggle: _propTypes2.default.func,
  onAlbumDelete: _propTypes2.default.func
};

exports.default = DashboardPagesAlbum;

/***/ }),

/***/ 927:
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

var _Controls = __webpack_require__(13);

var _EditFormActions = __webpack_require__(117);

var _EditFormActions2 = _interopRequireDefault(_EditFormActions);

var _Form = __webpack_require__(364);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardPagesAlbumsCreateForm = function (_Component) {
  _inherits(DashboardPagesAlbumsCreateForm, _Component);

  function DashboardPagesAlbumsCreateForm(props) {
    _classCallCheck(this, DashboardPagesAlbumsCreateForm);

    var _this = _possibleConstructorReturn(this, (DashboardPagesAlbumsCreateForm.__proto__ || Object.getPrototypeOf(DashboardPagesAlbumsCreateForm)).call(this));

    var _props$actions = props.actions,
        albumEdit = _props$actions.albumEdit,
        editCancel = _props$actions.editCancel;


    _this.onAlbumEdit = function (album) {
      return albumEdit(album);
    };
    _this.onEditCancel = function () {
      return editCancel();
    };
    return _this;
  }

  _createClass(DashboardPagesAlbumsCreateForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          status = _props.status,
          props = _objectWithoutProperties(_props, ['status']);

      return _react2.default.createElement(
        'div',
        { className: 'album' },
        _react2.default.createElement(_Form2.default, _extends({}, props, {
          onSubmit: this.onAlbumEdit,
          footer: _react2.default.createElement(
            _Controls.ButtonsGroup,
            null,
            _react2.default.createElement(
              _Controls.Button,
              { onClick: this.onEditCancel },
              'cancel'
            ),
            _react2.default.createElement(
              _Controls.ButtonLoader,
              { status: status },
              'edit'
            )
          )
        }))
      );
    }
  }]);

  return DashboardPagesAlbumsCreateForm;
}(_react.Component);

DashboardPagesAlbumsCreateForm.propTypes = {
  actions: _propTypes2.default.object,
  status: _propTypes2.default.string,
  reset: _propTypes2.default.func
};

exports.default = (0, _ConnectDecorators.compose)((0, _ConnectDecorators.connectToStore)({ name: 'albumEdit', actions: _EditFormActions2.default }), (0, _ConnectDecorators.connectToForm)({ name: 'albumEditForm', options: { destroyOnUnmount: false } }))(DashboardPagesAlbumsCreateForm);

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALBUM_TYPE = exports.ALBUM_TYPE = {
  private: 'private',
  public: 'public'
};

/***/ }),

/***/ 929:
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

var _Helpers = __webpack_require__(94);

var _ViewActions = __webpack_require__(312);

var _ViewActions2 = _interopRequireDefault(_ViewActions);

var _CreateForm = __webpack_require__(930);

var _CreateForm2 = _interopRequireDefault(_CreateForm);

var _Link = __webpack_require__(932);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardPagesLinksView = function (_Component) {
  _inherits(DashboardPagesLinksView, _Component);

  function DashboardPagesLinksView(props) {
    _classCallCheck(this, DashboardPagesLinksView);

    var _this = _possibleConstructorReturn(this, (DashboardPagesLinksView.__proto__ || Object.getPrototypeOf(DashboardPagesLinksView)).call(this));

    var linksGet = props.actions.linksGet,
        match = props.match;

    _this.componentDidMount = function () {
      return linksGet(match.params.albumId);
    };
    return _this;
  }

  _createClass(DashboardPagesLinksView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          status = _props.status;


      return _react2.default.createElement(
        _Helpers.ContentStatus,
        { status: status },
        _react2.default.createElement(
          'div',
          { className: 'links' },
          data.map(function (_ref) {
            var _id = _ref._id,
                album = _objectWithoutProperties(_ref, ['_id']);

            return _react2.default.createElement(_Link2.default, _extends({ key: _id }, album));
          }),
          _react2.default.createElement(_CreateForm2.default, { userId: this.props.userId })
        )
      );
    }
  }]);

  return DashboardPagesLinksView;
}(_react.Component);

DashboardPagesLinksView.propTypes = {
  actions: _propTypes2.default.object,
  match: _propTypes2.default.object,
  userId: _propTypes2.default.string,
  status: _propTypes2.default.string,
  data: _propTypes2.default.array
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var links = _ref2.links,
      user = _ref2.user;
  return _extends({}, links, {
    userId: user['_id']
  });
};

exports.default = (0, _ConnectDecorators.connectToStore)({ mapStateToProps: mapStateToProps, actions: _ViewActions2.default })(DashboardPagesLinksView);

/***/ }),

/***/ 930:
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

var _reactAddonsCssTransitionGroup = __webpack_require__(93);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ConnectDecorators = __webpack_require__(39);

var _Controls = __webpack_require__(13);

var _CreateFormActions = __webpack_require__(181);

var _CreateFormActions2 = _interopRequireDefault(_CreateFormActions);

var _Form = __webpack_require__(931);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardPagesLinkCreateForm = function (_Component) {
  _inherits(DashboardPagesLinkCreateForm, _Component);

  function DashboardPagesLinkCreateForm(props) {
    _classCallCheck(this, DashboardPagesLinkCreateForm);

    var _this = _possibleConstructorReturn(this, (DashboardPagesLinkCreateForm.__proto__ || Object.getPrototypeOf(DashboardPagesLinkCreateForm)).call(this));

    var reset = props.reset,
        linkCreate = props.actions.linkCreate;


    _this.state = {
      isOpen: false
    };

    _this.openToggle = function () {
      reset();_this.setState({ isOpen: !_this.state.isOpen });
    };
    _this.onLinkCreate = function (link) {
      return linkCreate(_extends({}, link, { userId: _this.props.userId }), _this.openToggle);
    };
    return _this;
  }

  _createClass(DashboardPagesLinkCreateForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'wrap-create-link' },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'createlink',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
          },
          this.state.isOpen && _react2.default.createElement(
            'div',
            { className: 'link create-link' },
            _react2.default.createElement(_Form2.default, _extends({ onSubmit: this.onLinkCreate }, this.props))
          ),
          !this.state.isOpen && _react2.default.createElement(
            'div',
            { className: 'link new-link' },
            _react2.default.createElement(
              _Controls.Button,
              { onClick: this.openToggle },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'add'
              )
            )
          )
        )
      );
    }
  }]);

  return DashboardPagesLinkCreateForm;
}(_react.Component);

DashboardPagesLinkCreateForm.propTypes = {
  actions: _propTypes2.default.object,
  userId: _propTypes2.default.string,
  reset: _propTypes2.default.func
};

exports.default = (0, _ConnectDecorators.compose)((0, _ConnectDecorators.connectToStore)({ name: 'linkCreate', actions: _CreateFormActions2.default }), (0, _ConnectDecorators.connectToForm)({ name: 'linkCreateForm' }))(DashboardPagesLinkCreateForm);

/***/ }),

/***/ 931:
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

var _Controls = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DashboardPagesLinksCreateForm = function DashboardPagesLinksCreateForm(_ref) {
  var status = _ref.status,
      props = _objectWithoutProperties(_ref, ['status']);

  return _react2.default.createElement(
    _Form.Form,
    props,
    _react2.default.createElement(_Form.Input, { name: 'link', label: 'Link*' }),
    _react2.default.createElement(_Form.Input, { name: 'name', label: 'Name' }),
    _react2.default.createElement(
      _Controls.ButtonsGroup,
      null,
      _react2.default.createElement(
        _Controls.ButtonLoader,
        { status: status },
        'create'
      )
    )
  );
};

DashboardPagesLinksCreateForm.propTypes = {
  status: _propTypes2.default.string
};

exports.default = DashboardPagesLinksCreateForm;

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardPagesLink = function DashboardPagesLink(_ref) {
  var description = _ref.description,
      title = _ref.title;
  return _react2.default.createElement(
    'div',
    { className: 'link' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'description' },
      description
    )
  );
};

DashboardPagesLink.propTypes = {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
};

exports.default = DashboardPagesLink;

/***/ }),

/***/ 933:
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

var _ConnectDecorators = __webpack_require__(39);

var _Helpers = __webpack_require__(94);

var _UserActions = __webpack_require__(304);

var _UserActions2 = _interopRequireDefault(_UserActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

    _this.componentWillMount = function () {
      return props.actions.userGet();
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          status = _props.status;


      return _react2.default.createElement(
        _Helpers.ContentStatus,
        { status: status },
        children
      );
    }
  }]);

  return SignIn;
}(_react.Component);

SignIn.propTypes = {
  children: _propTypes2.default.node,
  actions: _propTypes2.default.object
};

exports.default = (0, _ConnectDecorators.connectToStore)({ name: 'user', actions: _UserActions2.default })(SignIn);

/***/ }),

/***/ 934:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 948:
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

var _ConnectDecorators = __webpack_require__(39);

var _Controls = __webpack_require__(13);

var _SearcherActions = __webpack_require__(950);

var _SearcherActions2 = _interopRequireDefault(_SearcherActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardHeader = function (_Component) {
  _inherits(DashboardHeader, _Component);

  function DashboardHeader() {
    _classCallCheck(this, DashboardHeader);

    var _this = _possibleConstructorReturn(this, (DashboardHeader.__proto__ || Object.getPrototypeOf(DashboardHeader)).call(this));

    _this.onValueChange = function (value) {
      return _this.props.actions.changeValue(value);
    };
    return _this;
  }

  _createClass(DashboardHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Controls.SearchInput, { onChange: this.onValueChange, value: this.props.value });
    }
  }]);

  return DashboardHeader;
}(_react.Component);

DashboardHeader.propTypes = {
  value: _propTypes2.default.string,
  actions: _propTypes2.default.object
};

exports.default = (0, _ConnectDecorators.connectToStore)({ name: 'searcher', actions: _SearcherActions2.default })(DashboardHeader);

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(24);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _SearcherActions = __webpack_require__(950);

var _SearcherActions2 = _interopRequireDefault(_SearcherActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardSearcherReducer = function () {
  function DashboardSearcherReducer() {
    _classCallCheck(this, DashboardSearcherReducer);

    this.bindAction(_SearcherActions2.default.changeValue, this.handleChangeValue);
    this.bindAction(_SearcherActions2.default.reset, this.handleReset);
  }

  _createClass(DashboardSearcherReducer, [{
    key: 'handleChangeValue',
    value: function handleChangeValue(state, value) {
      return _lodash2.default.assign({}, state, { value: value });
    }
  }, {
    key: 'handleReset',
    value: function handleReset(state) {
      return _lodash2.default.assign({}, state, { value: '' });
    }
  }, {
    key: 'initialState',
    get: function get() {
      return { value: '' };
    }
  }]);

  return DashboardSearcherReducer;
}();

exports.default = (0, _realt.createReducer)(DashboardSearcherReducer);

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _realt = __webpack_require__(24);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardSearcherActions = function DashboardSearcherActions() {
  _classCallCheck(this, DashboardSearcherActions);

  this.generate('changeValue', 'reset');
};

exports.default = (0, _realt.createActions)(DashboardSearcherActions);

/***/ })

},[369]);