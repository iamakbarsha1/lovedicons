'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

const SvgReceiptItemO = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    clipPath: "url(#receiptItemO_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    strokeWidth: 1.5,
    d: "M22 6v2.42A2.4 2.4 0 0 1 19.42 11H16V4.01A2.02 2.02 0 0 1 18.02 2 3.995 3.995 0 0 1 22 6v0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeWidth: 1.5,
    d: "M2 7v14a1 1 0 0 0 1.6.8l1.71-1.28a1.007 1.007 0 0 1 1.32.1l1.66 1.67a1.008 1.008 0 0 0 1.42 0l1.68-1.68a.99.99 0 0 1 1.3-.09l1.71 1.28A1 1 0 0 0 16 21V4a2.006 2.006 0 0 1 2-2H6C3 2 2 3.79 2 6v1Zm7 6.01h3m-3-4h3"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeWidth: 2,
    d: "M5.996 13h.009m-.009-4h.009"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "receiptItemO_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgWalletAddO = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    clipPath: "url(#walletAddO_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.751 7.05a4.572 4.572 0 0 0-.75-.05h-10c-.271 0-.542.02-.81.06.15-.29.346-.553.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.614.597.98 1.405 1.02 2.26v0ZM9 19c.001.727-.2 1.44-.58 2.06a3.985 3.985 0 0 1-6.84 0A3.92 3.92 0 0 1 1 19a4 4 0 1 1 8 0v0Zm-2.508-.021h-2.98M5 17.52v2.99"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 12v5a4.724 4.724 0 0 1-5 5H7.63c.315-.266.583-.584.79-.94.38-.62.581-1.333.58-2.06a4 4 0 0 0-7-2.64V12a4.654 4.654 0 0 1 4.19-4.94C6.458 7.02 6.729 7 7 7h10c.25-.004.502.013.75.05A4.664 4.664 0 0 1 22 12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 12.5h-3a2 2 0 0 0 0 4h3"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "walletAddO_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgWalletCheckO = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    clipPath: "url(#walletCheckO_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9 19c.001.727-.2 1.44-.58 2.06a3.985 3.985 0 0 1-6.84 0A3.92 3.92 0 0 1 1 19a4 4 0 1 1 8 0v0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m3.441 19 .99.99 2.13-1.97m11.19-10.97a4.572 4.572 0 0 0-.75-.05h-10c-.271 0-.542.02-.81.06.15-.29.346-.553.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.614.597.98 1.405 1.02 2.26v0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 12v5a4.724 4.724 0 0 1-5 5H7.63c.315-.266.583-.584.79-.94.38-.62.581-1.333.58-2.06a4 4 0 0 0-7-2.64V12a4.654 4.654 0 0 1 4.19-4.94C6.458 7.02 6.729 7 7 7h10c.25-.004.502.013.75.05A4.664 4.664 0 0 1 22 12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 12.5h-3a2 2 0 0 0 0 4h3"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "walletCheckO_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgWalletEmptyO = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    clipPath: "url(#walletEmptyO_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.04 13.55a2.01 2.01 0 0 0-.6 1.63 2.132 2.132 0 0 0 2.16 1.87h1.9v1.19A3.768 3.768 0 0 1 17.74 22H6.26a3.768 3.768 0 0 1-3.76-3.76v-6.73a3.768 3.768 0 0 1 3.76-3.76h11.48a3.768 3.768 0 0 1 3.76 3.76v1.44h-2.02a1.992 1.992 0 0 0-1.44.6v0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2.5 12.41V7.84a2.848 2.848 0 0 1 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.776v3.8m7.709 6.224v2.06a1.027 1.027 0 0 1-1 1.02h-1.96a2.132 2.132 0 0 1-2.16-1.87 2.008 2.008 0 0 1 .6-1.63 1.993 1.993 0 0 1 1.44-.6h2.08a1.027 1.027 0 0 1 1 1.02v0ZM7 12h7"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "walletEmptyO_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

exports.ReceiptItemO = SvgReceiptItemO;
exports.WalletAddO = SvgWalletAddO;
exports.WalletCheckO = SvgWalletCheckO;
exports.WalletEmptyO = SvgWalletEmptyO;
