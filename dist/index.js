(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-npm-component-boilerplate"] = factory();
	else
		root["react-npm-component-boilerplate"] = factory();
})(this, function() {
return webpackJsonpreact_npm_component_boilerplate([1],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Demo component
// this is only example component



var MyComponent = function (_React$Component) {
    _inherits(MyComponent, _React$Component);

    function MyComponent(props) {
        _classCallCheck(this, MyComponent);

        return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));
    }

    _createClass(MyComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "my-component" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "i",
                    { className: "icon-test" },
                    "One"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "i",
                    { className: "icon-test" },
                    "Two"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "i",
                    { className: "icon-test" },
                    "Two"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "i",
                    { className: "icon-test" },
                    "Two"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "i",
                    { className: "icon-test" },
                    "Three"
                )
            );
        }
    }]);

    return MyComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

/***/ })

},[19]);
});