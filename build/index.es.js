import { createContext, useContext, createElement, useEffect } from 'react';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayReduce_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = arrayReduce;

function arrayReduce(arr, reducer, initialValue) {
  for (var i = 0, len = arr.length; i < len; ++i) {
    initialValue = reducer(initialValue, arr[i], i, len, arr);
  }

  return initialValue;
}
});

var arrayReduce = unwrapExports(arrayReduce_1);

var assignStyle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = assignStyle;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function filterUniqueArray(arr) {
  return arr.filter(function (val, index) {
    return arr.lastIndexOf(val) === index;
  });
}

function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];

      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }

        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }

        if (_typeof(value) === 'object') {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }

      base[property] = value;
    }
  }

  return base;
}
});

var assignStyle = unwrapExports(assignStyle_1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function resolveRule(rule, props, renderer) {
  if (Array.isArray(rule)) {
    return resolveRule(combineRules.apply(undefined, _toConsumableArray(rule)), props, renderer);
  }

  if (typeof rule === 'function') {
    return rule(props, renderer);
  }

  return rule;
}

function combineRules() {
  for (var _len = arguments.length, rules = Array(_len), _key = 0; _key < _len; _key++) {
    rules[_key] = arguments[_key];
  }

  return function (props, renderer) {
    return arrayReduce(rules, function (style, rule) {
      var resolvedRule = resolveRule(rule, props, renderer);

      // special combination of our special _className key
      if (style._className) {
        resolvedRule._className = style._className + (resolvedRule._className ? ' ' + resolvedRule._className : '');
      }

      return assignStyle(style, resolvedRule);
    }, {});
  };
}

// $FlowFixMe
var RendererContext = createContext();

// $FlowFixMe
var ThemeContext = createContext();

function useFela() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var renderer = useContext(RendererContext);
  var theme = useContext(ThemeContext) || {};

  if (!renderer) {
    throw new Error('The "useFela" hook can only be used  inside a "RendererProvider"');
  }

  var propsWithTheme = { theme: theme };
  if (props) Object.assign(propsWithTheme, props);

  function css() {
    return renderer.renderRule(combineRules.apply(undefined, arguments), propsWithTheme);
  }

  return {
    renderer: renderer,
    theme: theme,
    css: css
  };
}

var CLUSTER = {
    backgroundColor: '#f8f8f8',
    border: 'dashed 1px #bfbfbf',
    borderRadius: '8px',
    padding: '10px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'row'
};

var ClusterContext = createContext(null);
var Namespace = function (_a) {
    var children = _a.children;
    var css = useFela().css;
    var emitResource = function (name, resource) {
        console.log("Resource Emitted: \"" + name + "\":", resource);
    };
    return (createElement(ClusterContext.Provider, { value: { emitResource: emitResource } },
        createElement("div", { className: css(CLUSTER) }, children)));
};

var NAMESPACE = {
    backgroundColor: '#f0f0f0',
    border: 'dashed 1px #bfbfbf',
    borderRadius: '8px',
    padding: '10px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: '10px',
    nested: {
        ':first-of-type': {
            marginLeft: '0'
        }
    }
};

var NamespaceContext = createContext('');
var createNamespaceResource = function (name) { return "apiVersion: \"v1\"\nkind: \"Namespace\"\nmetadata:\n  name: \"" + name + "\""; };
var Namespace$1 = function (_a) {
    var name = _a.name, children = _a.children;
    var css = useFela().css;
    var clusterContext = useContext(ClusterContext);
    useEffect(function () {
        var _a;
        (_a = clusterContext) === null || _a === void 0 ? void 0 : _a.emitResource("namespace-" + name + ".yml", createNamespaceResource(name));
    }, [name]);
    return (createElement(NamespaceContext.Provider, { value: name },
        createElement("div", { className: css(NAMESPACE) }, children)));
};

export { Namespace as Cluster, Namespace$1 as Namespace };
//# sourceMappingURL=index.es.js.map
