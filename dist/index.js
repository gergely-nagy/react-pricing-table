(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-pricing-table"] = factory();
	else
		root["react-pricing-table"] = factory();
})(this, function() {
return webpackJsonpreact_pricing_table([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var buttonColor = this.props.color;
      Array.from(document.getElementsByClassName('button-submit')).forEach(function (element, index, array) {
        element.style.backgroundColor = buttonColor;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          className = _props.className,
          color = _props.color,
          children = _props.children;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { type: 'button', onClick: onClick, className: className },
        children
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Button.propTypes = propTypes;

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  strikethrough: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};

var defaultProps = {
  strikethrough: false
};

var PricingDetail = function (_React$Component) {
  _inherits(PricingDetail, _React$Component);

  function PricingDetail(props) {
    _classCallCheck(this, PricingDetail);

    return _possibleConstructorReturn(this, (PricingDetail.__proto__ || Object.getPrototypeOf(PricingDetail)).call(this, props));
  }

  _createClass(PricingDetail, [{
    key: 'render',
    value: function render() {
      var strikethrough = this.props.strikethrough;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: strikethrough ? "text-line-through" : "" },
          this.props.children
        )
      );
    }
  }]);

  return PricingDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PricingDetail.propTypes = propTypes;
PricingDetail.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (PricingDetail);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  highlighted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  priceText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  buttonText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  highlightColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

var defaultProps = {
  highlighted: false,
  highlightColor: "#f44336"
};

var PricingSlot = function (_React$Component) {
  _inherits(PricingSlot, _React$Component);

  function PricingSlot(props) {
    _classCallCheck(this, PricingSlot);

    return _possibleConstructorReturn(this, (PricingSlot.__proto__ || Object.getPrototypeOf(PricingSlot)).call(this, props));
  }

  _createClass(PricingSlot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.highlighted ? document.getElementById("highlighted-header").style.backgroundColor = this.props.highlightColor : console.log('');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          highlighted = _props.highlighted,
          highlightColor = _props.highlightColor;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'Grid-cell' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'price basic-border' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { id: (highlighted ? "highlighted" : "basic") + "-header", className: (highlighted ? "highlighted" : "basic") + "-header" },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'tag' },
            this.props.priceText
          ),
          this.props.children,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'grey' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Button__["a" /* default */],
              { onClick: this.props.onClick, color: highlightColor, className: 'button-submit' },
              this.props.buttonText
            )
          )
        )
      );
    }
  }]);

  return PricingSlot;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PricingSlot.propTypes = propTypes;
PricingSlot.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (PricingSlot);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var propTypes = {
  highlightColor: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps = {
  highlightColor: '#f44336'
};

var PricingTable = function (_React$Component) {
  _inherits(PricingTable, _React$Component);

  function PricingTable(props) {
    _classCallCheck(this, PricingTable);

    return _possibleConstructorReturn(this, (PricingTable.__proto__ || Object.getPrototypeOf(PricingTable)).call(this, props));
  }

  _createClass(PricingTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var childrenWithProps = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, function (child) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          highlightColor: _this2.props.highlightColor
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'react-pricing-table' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'Grid' },
          childrenWithProps
        )
      );
    }
  }]);

  return PricingTable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PricingTable.propTypes = propTypes;
PricingTable.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (PricingTable);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(31);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(23)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./grid.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./grid.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(23)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__grid_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PricingTable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PricingSlot__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PricingDetail__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PricingTable", function() { return __WEBPACK_IMPORTED_MODULE_2__PricingTable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PricingSlot", function() { return __WEBPACK_IMPORTED_MODULE_3__PricingSlot__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PricingDetail", function() { return __WEBPACK_IMPORTED_MODULE_4__PricingDetail__["a"]; });









/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".Grid {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.Grid-cell {\n  flex: 1;\n}\n\n.Grid--flexCells > .Grid-cell {\n  display: flex;\n}\n\n.Grid--top {\n  align-items: flex-start;\n}\n\n.Grid--bottom {\n  align-items: flex-end;\n}\n\n.Grid--center {\n  align-items: center;\n}\n\n.Grid--justifyCenter {\n  justify-content: center;\n}\n\n.Grid-cell--top {\n  align-self: flex-start;\n}\n\n.Grid-cell--bottom {\n  align-self: flex-end;\n}\n\n.Grid-cell--center {\n  align-self: center;\n}\n\n.Grid-cell--autoSize {\n  flex: none;\n}\n\n.Grid--fit > .Grid-cell {\n  flex: 1;\n}\n\n.Grid--full > .Grid-cell {\n  flex: 0 0 100%;\n}\n\n.Grid--1of2 > .Grid-cell {\n  flex: 0 0 50%;\n}\n\n.Grid--1of3 > .Grid-cell {\n  flex: 0 0 33.3333%;\n}\n\n.Grid--1of4 > .Grid-cell {\n  flex: 0 0 25%;\n}\n\n@media (--break-sm) {\n  .small-Grid--fit > .Grid-cell {\n    flex: 1;\n  }\n  .small-Grid--full > .Grid-cell {\n    flex: 0 0 100%;\n  }\n  .small-Grid--1of2 > .Grid-cell {\n    flex: 0 0 50%;\n  }\n  .small-Grid--1of3 > .Grid-cell {\n    flex: 0 0 33.3333%;\n  }\n  .small-Grid--1of4 > .Grid-cell {\n    flex: 0 0 25%;\n  }\n}\n\n@media (--break-md) {\n  .med-Grid--fit > .Grid-cell {\n    flex: 1;\n  }\n  .med-Grid--full > .Grid-cell {\n    flex: 0 0 100%;\n  }\n  .med-Grid--1of2 > .Grid-cell {\n    flex: 0 0 50%;\n  }\n  .med-Grid--1of3 > .Grid-cell {\n    flex: 0 0 33.3333%;\n  }\n  .med-Grid--1of4 > .Grid-cell {\n    flex: 0 0 25%;\n  }\n}\n\n@media (--break-lg) {\n  .large-Grid--fit > .Grid-cell {\n    flex: 1;\n  }\n  .large-Grid--full > .Grid-cell {\n    flex: 0 0 100%;\n  }\n  .large-Grid--1of2 > .Grid-cell {\n    flex: 0 0 50%;\n  }\n  .large-Grid--1of3 > .Grid-cell {\n    flex: 0 0 33.3333%;\n  }\n  .large-Grid--1of4 > .Grid-cell {\n    flex: 0 0 25%;\n  }\n}\n\n.Grid--gutters {\n  margin: -1em 0 1em -1em;\n}\n.Grid--gutters > .Grid-cell {\n  padding: 1em 0 0 1em;\n}\n\n.Grid--guttersLg {\n  margin: -1.5em 0 1.5em -1.5em;\n}\n.Grid--guttersLg > .Grid-cell {\n  padding: 1.5em 0 0 1.5em;\n}\n\n.Grid--guttersXl {\n  margin: -2em 0 2em -2em;\n}\n.Grid--guttersXl > .Grid-cell {\n  padding: 2em 0 0 2em;\n}\n\n@media (--break-sm) {\n  .small-Grid--gutters {\n    margin: -1em 0 1em -1em;\n  }\n  .small-Grid--gutters > .Grid-cell {\n    padding: 1em 0 0 1em;\n  }\n  .small-Grid--guttersLg {\n    margin: -1.5em 0 1.5em -1.5em;\n  }\n  .small-Grid--guttersLg > .Grid-cell {\n    padding: 1.5em 0 0 1.5em;\n  }\n  .small-Grid--guttersXl {\n    margin: -2em 0 2em -2em;\n  }\n  .small-Grid--guttersXl > .Grid-cell {\n    padding: 2em 0 0 2em;\n  }\n}\n\n@media (--break-md) {\n  .med-Grid--gutters {\n    margin: -1em 0 1em -1em;\n  }\n  .med-Grid--gutters > .Grid-cell {\n    padding: 1em 0 0 1em;\n  }\n  .med-Grid--guttersLg {\n    margin: -1.5em 0 1.5em -1.5em;\n  }\n  .med-Grid--guttersLg > .Grid-cell {\n    padding: 1.5em 0 0 1.5em;\n  }\n  .med-Grid--guttersXl {\n    margin: -2em 0 2em -2em;\n  }\n  .med-Grid--guttersXl > .Grid-cell {\n    padding: 2em 0 0 2em;\n  }\n}\n\n@media (--break-lg) {\n  .large-Grid--gutters {\n    margin: -1em 0 1em -1em;\n  }\n  .large-Grid--gutters > .Grid-cell {\n    padding: 1em 0 0 1em;\n  }\n  .large-Grid--guttersLg {\n    margin: -1.5em 0 1.5em -1.5em;\n  }\n  .large-Grid--guttersLg > .Grid-cell {\n    padding: 1.5em 0 0 1.5em;\n  }\n  .large-Grid--guttersXl {\n    margin: -2em 0 2em -2em;\n  }\n  .large-Grid--guttersXl > .Grid-cell {\n    padding: 2em 0 0 2em;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Quicksand', sans-serif;\n}\n\n/* Style the list */\n.price {\n    list-style-type: none;\n    margin:20px;\n    -webkit-transition: margin 0.5s ease-out;\n    -moz-transition: margin 0.5s ease-out;\n    -o-transition: margin 0.5s ease-out;\n    padding-left: 0px;\n    min-width: 180px;\n}\n\n.basic-border {\n    border: 1px solid grey;\n}\n\n.highlighted-border {\n    border: 1px solid #f44336;\n}\n\n/* Add shadows on hover */\n.price:hover {\n    margin-top: 10px;\n}\n\n/* Pricing header */\n.price .highlighted-header {\n    background-color: #f44336;\n    color: white;\n    font-size: 24px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.price .basic-header{\n  background-color: #f8f9fa;\n  color: grey;\n  font-size: 24px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n/* List items */\n.price li {\n  /*  border-bottom: 1px solid #eee; */\n    padding: 5px;\n    text-align: center;\n    font-size: 14px;\n}\n\n/* tag list item */\n.price .tag {\n    font-size: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n/* The \"Sign Up\" button */\n.button-submit {\n    background-color: #f44336;\n    color: white;\n    height: 35px;\n    border: none;\n    font-size: 11px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.text-line-through{\n  text-decoration: line-through;\n}\n", ""]);

// exports


/***/ })
],[29]);
});