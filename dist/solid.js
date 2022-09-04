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

const SvgReceiptItemS = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#receiptItemS_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7 2H6C3 2 2 3.79 2 6v15a1 1 0 0 0 1.6.8l1.71-1.28a1.007 1.007 0 0 1 1.32.1l1.66 1.67a1.008 1.008 0 0 0 1.42 0l1.68-1.68a.99.99 0 0 1 1.3-.09l1.71 1.28A1 1 0 0 0 16 21V4a2.006 2.006 0 0 1 2-2H7ZM5.97 14.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12 13.76H9a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Zm0-4H9a.75.75 0 0 1 0-1.5h3a.75.75 0 1 1 0 1.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.01 2v1.5a2.517 2.517 0 0 1 1.75.72c.472.472.738 1.112.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H17.5V4.01a.512.512 0 0 1 .51-.51V2Zm0 0A2.01 2.01 0 0 0 16 4.01V11h3.42A2.4 2.4 0 0 0 22 8.42V6a3.993 3.993 0 0 0-3.99-4Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "receiptItemS_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
};

const SvgWalletAddS = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#walletAddS_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5 15a4 4 0 0 0-4 4c-.001.727.2 1.44.58 2.06a3.985 3.985 0 0 0 6.84 0c.38-.62.581-1.333.58-2.06a4 4 0 0 0-4-4Zm1.49 4.73h-.74v.78a.75.75 0 1 1-1.5 0v-.78h-.74a.75.75 0 1 1 0-1.5h.74v-.71a.75.75 0 1 1 1.5 0v.71h.74a.75.75 0 1 1 0 1.5ZM21.5 12.5H19a2 2 0 0 0 0 4h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm-4.97-7.099a.44.44 0 0 1-.37.74l-8.28-.01a.538.538 0 0 1-.38-.92l1.75-1.763a3.8 3.8 0 0 1 5.35 0l1.89 1.91.04.043Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21.87 18.66A4.669 4.669 0 0 1 17.1 22h-6.5a.557.557 0 0 1-.48-.79 5.8 5.8 0 0 0 .49-2.21 5.51 5.51 0 0 0-5.5-5.5 5.4 5.4 0 0 0-2.18.46.579.579 0 0 1-.82-.49V12A4.654 4.654 0 0 1 6.3 7.06 5.1 5.1 0 0 1 7.1 7h10c.25-.004.502.013.75.05a4.541 4.541 0 0 1 4.02 3.29.507.507 0 0 1-.48.66H19.1a3.493 3.493 0 0 0-3.42 4.23A3.555 3.555 0 0 0 19.2 18h2.19a.506.506 0 0 1 .48.66Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "walletAddS_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
};

const SvgWalletCheckS = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#walletCheckS_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5 15a4 4 0 0 0-4 4c-.001.727.2 1.44.58 2.06a3.985 3.985 0 0 0 6.84 0c.38-.62.581-1.333.58-2.06a4 4 0 0 0-4-4Zm1.97 3.67-2.13 1.97a.763.763 0 0 1-.797.143.743.743 0 0 1-.243-.163l-.99-.99a.75.75 0 1 1 1.06-1.06l.48.48 1.6-1.48a.749.749 0 1 1 1.02 1.1ZM21.5 12.5H19a2 2 0 0 0 0 4h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm-4.97-7.099a.44.44 0 0 1-.37.74l-8.28-.01a.538.538 0 0 1-.38-.92l1.75-1.763a3.8 3.8 0 0 1 5.35 0l1.89 1.91.04.043Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21.87 18.66A4.669 4.669 0 0 1 17.1 22h-6.5a.557.557 0 0 1-.48-.79 5.8 5.8 0 0 0 .49-2.21 5.51 5.51 0 0 0-5.5-5.5 5.4 5.4 0 0 0-2.18.46.579.579 0 0 1-.82-.49V12A4.654 4.654 0 0 1 6.3 7.06 5.1 5.1 0 0 1 7.1 7h10a4.59 4.59 0 0 1 .75.05 4.541 4.541 0 0 1 4.02 3.29.507.507 0 0 1-.48.66H19.1a3.493 3.493 0 0 0-3.42 4.23A3.555 3.555 0 0 0 19.2 18h2.19a.506.506 0 0 1 .48.66Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "walletCheckS_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
};

const SvgWalletEmptyS = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends__default["default"]({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#walletEmptyS_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.85 3.95v3.8h-1.5v-3.8a.4.4 0 0 0-.55-.37L4.87 6.57A1.343 1.343 0 0 0 4 7.84v.67a3.736 3.736 0 0 0-1.5 3V7.84a2.848 2.848 0 0 1 1.84-2.67l7.94-3a1.905 1.905 0 0 1 2.57 1.78Zm6.645 10.55v1a.5.5 0 0 1-.49.5H19.55a1.035 1.035 0 0 1-1.055-.91.999.999 0 0 1 .29-.8.951.951 0 0 1 .705-.29h1.505a.5.5 0 0 1 .5.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.48 12.95h1.02a1 1 0 0 0 1-1v-.44a3.768 3.768 0 0 0-3.76-3.76H6.26A3.706 3.706 0 0 0 4 8.51a3.736 3.736 0 0 0-1.5 3v6.73A3.768 3.768 0 0 0 6.26 22h11.48a3.768 3.768 0 0 0 3.76-3.76v-.19a1 1 0 0 0-1-1h-.87a2.17 2.17 0 0 1-2.13-1.52 2.06 2.06 0 0 1 1.98-2.58Zm-5.48-.2H7a.75.75 0 1 1 0-1.5h7a.75.75 0 1 1 0 1.5Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "walletEmptyS_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
};

exports.ReceiptItemS = SvgReceiptItemS;
exports.WalletAddS = SvgWalletAddS;
exports.WalletCheckS = SvgWalletCheckS;
exports.WalletEmptyS = SvgWalletEmptyS;
