(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['pdfjs-dist/build/pdf'] = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /* Copyright 2012 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-var: error */
  // import "./compatibility.js";
  var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
  var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
  var NativeImageDecoding = {
    NONE: "none",
    DECODE: "decode",
    DISPLAY: "display"
  }; // Permission flags from Table 22, Section 7.6.3.2 of the PDF specification.
  var TextRenderingMode = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_ADD_TO_PATH: 4,
    STROKE_ADD_TO_PATH: 5,
    FILL_STROKE_ADD_TO_PATH: 6,
    ADD_TO_PATH: 7,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
  };
  var ImageKind = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
  };
  var AnnotationType = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26
  };
  var AnnotationBorderStyleType = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
  };
  var VerbosityLevel = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
  };
  var CMapCompressionType = {
    NONE: 0,
    BINARY: 1,
    STREAM: 2
  }; // All the possible operations for an operator list.

  var OPS = {
    // Intentionally start from 1 so it is easy to spot bad operators that will be
    // 0's.
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotations: 78,
    endAnnotations: 79,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintJpegXObject: 82,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91
  };
  var UNSUPPORTED_FEATURES = {
    unknown: "unknown",
    forms: "forms",
    javaScript: "javaScript",
    smask: "smask",
    shadingPattern: "shadingPattern",
    font: "font"
  };
  var PasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
  var verbosity = VerbosityLevel.WARNINGS;

  function setVerbosityLevel(level) {
    if (Number.isInteger(level)) {
      verbosity = level;
    }
  }

  function getVerbosityLevel() {
    return verbosity;
  } // A notice for devs. These are good for things that are helpful to devs, such
  // as warning that Workers were disabled, which is important to devs but not
  // end users.


  function info(msg) {
    if (verbosity >= VerbosityLevel.INFOS) {
      console.log("Info: ".concat(msg));
    }
  } // Non-fatal warnings.


  function warn(msg) {
    if (verbosity >= VerbosityLevel.WARNINGS) {
      console.log("Warning: ".concat(msg));
    }
  }

  function unreachable(msg) {
    throw new Error(msg);
  }

  function assert(cond, msg) {
    if (!cond) {
      unreachable(msg);
    }
  } // Checks if URLs have the same origin. For non-HTTP based URLs, returns false.


  function isSameOrigin(baseUrl, otherUrl) {
    var base;

    try {
      base = new URL(baseUrl);

      if (!base.origin || base.origin === "null") {
        return false; // non-HTTP url
      }
    } catch (e) {
      return false;
    }

    var other = new URL(otherUrl, base);
    return base.origin === other.origin;
  } // Checks if URLs use one of the whitelisted protocols, e.g. to avoid XSS.


  function _isValidProtocol(url) {
    if (!url) {
      return false;
    }

    switch (url.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;

      default:
        return false;
    }
  }
  /**
   * Attempts to create a valid absolute URL.
   *
   * @param {URL|string} url - An absolute, or relative, URL.
   * @param {URL|string} baseUrl - An absolute URL.
   * @returns Either a valid {URL}, or `null` otherwise.
   */


  function createValidAbsoluteUrl(url, baseUrl) {
    if (!url) {
      return null;
    }

    try {
      var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);

      if (_isValidProtocol(absoluteUrl)) {
        return absoluteUrl;
      }
    } catch (ex) {
      /* `new URL()` will throw on incorrect data. */
    }

    return null;
  }

  function shadow(obj, prop, value) {
    Object.defineProperty(obj, prop, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: false
    });
    return value;
  }

  var BaseException = function BaseExceptionClosure() {
    function BaseException(message) {
      if (this.constructor === BaseException) {
        unreachable("Cannot initialize BaseException.");
      }

      this.message = message;
      this.name = this.constructor.name;
    }

    BaseException.prototype = new Error();
    BaseException.constructor = BaseException;
    return BaseException;
  }();

  var PasswordException =
  /*#__PURE__*/
  function (_BaseException) {
    _inherits(PasswordException, _BaseException);

    function PasswordException(msg, code) {
      var _this;

      _classCallCheck(this, PasswordException);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordException).call(this, msg));
      _this.code = code;
      return _this;
    }

    return PasswordException;
  }(BaseException);

  var UnknownErrorException =
  /*#__PURE__*/
  function (_BaseException2) {
    _inherits(UnknownErrorException, _BaseException2);

    function UnknownErrorException(msg, details) {
      var _this2;

      _classCallCheck(this, UnknownErrorException);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UnknownErrorException).call(this, msg));
      _this2.details = details;
      return _this2;
    }

    return UnknownErrorException;
  }(BaseException);

  var InvalidPDFException =
  /*#__PURE__*/
  function (_BaseException3) {
    _inherits(InvalidPDFException, _BaseException3);

    function InvalidPDFException() {
      _classCallCheck(this, InvalidPDFException);

      return _possibleConstructorReturn(this, _getPrototypeOf(InvalidPDFException).apply(this, arguments));
    }

    return InvalidPDFException;
  }(BaseException);

  var MissingPDFException =
  /*#__PURE__*/
  function (_BaseException4) {
    _inherits(MissingPDFException, _BaseException4);

    function MissingPDFException() {
      _classCallCheck(this, MissingPDFException);

      return _possibleConstructorReturn(this, _getPrototypeOf(MissingPDFException).apply(this, arguments));
    }

    return MissingPDFException;
  }(BaseException);

  var UnexpectedResponseException =
  /*#__PURE__*/
  function (_BaseException5) {
    _inherits(UnexpectedResponseException, _BaseException5);

    function UnexpectedResponseException(msg, status) {
      var _this3;

      _classCallCheck(this, UnexpectedResponseException);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(UnexpectedResponseException).call(this, msg));
      _this3.status = status;
      return _this3;
    }

    return UnexpectedResponseException;
  }(BaseException);
  /**
   * Error caused during parsing PDF data.
   */


  var FormatError =
  /*#__PURE__*/
  function (_BaseException6) {
    _inherits(FormatError, _BaseException6);

    function FormatError() {
      _classCallCheck(this, FormatError);

      return _possibleConstructorReturn(this, _getPrototypeOf(FormatError).apply(this, arguments));
    }

    return FormatError;
  }(BaseException);
  /**
   * Error used to indicate task cancellation.
   */


  var AbortException =
  /*#__PURE__*/
  function (_BaseException7) {
    _inherits(AbortException, _BaseException7);

    function AbortException() {
      _classCallCheck(this, AbortException);

      return _possibleConstructorReturn(this, _getPrototypeOf(AbortException).apply(this, arguments));
    }

    return AbortException;
  }(BaseException);

  var NullCharactersRegExp = /\x00/g;

  function removeNullCharacters(str) {
    if (typeof str !== "string") {
      warn("The argument for removeNullCharacters must be a string.");
      return str;
    }

    return str.replace(NullCharactersRegExp, "");
  }

  function bytesToString(bytes) {
    assert(bytes !== null && _typeof(bytes) === "object" && bytes.length !== undefined, "Invalid argument for bytesToString");
    var length = bytes.length;
    var MAX_ARGUMENT_COUNT = 8192;

    if (length < MAX_ARGUMENT_COUNT) {
      return String.fromCharCode.apply(null, bytes);
    }

    var strBuf = [];

    for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
      var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
      var chunk = bytes.subarray(i, chunkEnd);
      strBuf.push(String.fromCharCode.apply(null, chunk));
    }

    return strBuf.join("");
  }

  function stringToBytes(str) {
    assert(typeof str === "string", "Invalid argument for stringToBytes");
    var length = str.length;
    var bytes = new Uint8Array(length);

    for (var i = 0; i < length; ++i) {
      bytes[i] = str.charCodeAt(i) & 0xff;
    }

    return bytes;
  }

  function string32(value) {
    return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
  } // Calculate the base 2 logarithm of the number `x`. This differs from the
  // NOTE: This will be 'true' for simulated TypedArrays


  function isLittleEndian() {
    var buffer8 = new Uint8Array(4);
    buffer8[0] = 1;
    var view32 = new Uint32Array(buffer8.buffer, 0, 1);
    return view32[0] === 1;
  } // Checks if it's possible to eval JS expressions.


  function isEvalSupported() {
    try {
      new Function(""); // eslint-disable-line no-new, no-new-func

      return true;
    } catch (e) {
      return false;
    }
  }

  var rgbBuf = ["rgb(", 0, ",", 0, ",", 0, ")"];

  var Util =
  /*#__PURE__*/
  function () {
    function Util() {
      _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
      key: "makeCssRgb",
      // makeCssRgb() can be called thousands of times. Using ´rgbBuf` avoids
      // creating many intermediate strings.
      value: function makeCssRgb(r, g, b) {
        rgbBuf[1] = r;
        rgbBuf[3] = g;
        rgbBuf[5] = b;
        return rgbBuf.join("");
      } // Concatenates two transformation matrices together and returns the result.

    }, {
      key: "transform",
      value: function transform(m1, m2) {
        return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
      } // For 2d affine transforms

    }, {
      key: "applyTransform",
      value: function applyTransform(p, m) {
        var xt = p[0] * m[0] + p[1] * m[2] + m[4];
        var yt = p[0] * m[1] + p[1] * m[3] + m[5];
        return [xt, yt];
      }
    }, {
      key: "applyInverseTransform",
      value: function applyInverseTransform(p, m) {
        var d = m[0] * m[3] - m[1] * m[2];
        var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
        var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
        return [xt, yt];
      } // Applies the transform to the rectangle and finds the minimum axially
      // aligned bounding box.

    }, {
      key: "getAxialAlignedBoundingBox",
      value: function getAxialAlignedBoundingBox(r, m) {
        var p1 = Util.applyTransform(r, m);
        var p2 = Util.applyTransform(r.slice(2, 4), m);
        var p3 = Util.applyTransform([r[0], r[3]], m);
        var p4 = Util.applyTransform([r[2], r[1]], m);
        return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
      }
    }, {
      key: "inverseTransform",
      value: function inverseTransform(m) {
        var d = m[0] * m[3] - m[1] * m[2];
        return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
      } // Apply a generic 3d matrix M on a 3-vector v:
      //   | a b c |   | X |
      //   | d e f | x | Y |
      //   | g h i |   | Z |
      // M is assumed to be serialized as [a,b,c,d,e,f,g,h,i],
      // with v as [X,Y,Z]

    }, {
      key: "apply3dTransform",
      value: function apply3dTransform(m, v) {
        return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
      } // This calculation uses Singular Value Decomposition.
      // The SVD can be represented with formula A = USV. We are interested in the
      // matrix S here because it represents the scale values.

    }, {
      key: "singularValueDecompose2dScale",
      value: function singularValueDecompose2dScale(m) {
        var transpose = [m[0], m[2], m[1], m[3]]; // Multiply matrix m with its transpose.

        var a = m[0] * transpose[0] + m[1] * transpose[2];
        var b = m[0] * transpose[1] + m[1] * transpose[3];
        var c = m[2] * transpose[0] + m[3] * transpose[2];
        var d = m[2] * transpose[1] + m[3] * transpose[3]; // Solve the second degree polynomial to get roots.

        var first = (a + d) / 2;
        var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
        var sx = first + second || 1;
        var sy = first - second || 1; // Scale values are the square roots of the eigenvalues.

        return [Math.sqrt(sx), Math.sqrt(sy)];
      } // Normalize rectangle rect=[x1, y1, x2, y2] so that (x1,y1) < (x2,y2)
      // For coordinate systems whose origin lies in the bottom-left, this
      // means normalization to (BL,TR) ordering. For systems with origin in the
      // top-left, this means (TL,BR) ordering.

    }, {
      key: "normalizeRect",
      value: function normalizeRect(rect) {
        var r = rect.slice(0); // clone rect

        if (rect[0] > rect[2]) {
          r[0] = rect[2];
          r[2] = rect[0];
        }

        if (rect[1] > rect[3]) {
          r[1] = rect[3];
          r[3] = rect[1];
        }

        return r;
      } // Returns a rectangle [x1, y1, x2, y2] corresponding to the
      // intersection of rect1 and rect2. If no intersection, returns 'false'
      // The rectangle coordinates of rect1, rect2 should be [x1, y1, x2, y2]

    }, {
      key: "intersect",
      value: function intersect(rect1, rect2) {
        function compare(a, b) {
          return a - b;
        } // Order points along the axes


        var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
        var orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
        var result = [];
        rect1 = Util.normalizeRect(rect1);
        rect2 = Util.normalizeRect(rect2); // X: first and second points belong to different rectangles?

        if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
          // Intersection must be between second and third points
          result[0] = orderedX[1];
          result[2] = orderedX[2];
        } else {
          return null;
        } // Y: first and second points belong to different rectangles?


        if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
          // Intersection must be between second and third points
          result[1] = orderedY[1];
          result[3] = orderedY[2];
        } else {
          return null;
        }

        return result;
      }
    }]);

    return Util;
  }(); // prettier-ignore


  var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];

  function stringToPDFString(str) {
    var length = str.length,
        strBuf = [];

    if (str[0] === "\xFE" && str[1] === "\xFF") {
      // UTF16BE BOM
      for (var i = 2; i < length; i += 2) {
        strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
      }
    } else if (str[0] === "\xFF" && str[1] === "\xFE") {
      // UTF16LE BOM
      for (var _i2 = 2; _i2 < length; _i2 += 2) {
        strBuf.push(String.fromCharCode(str.charCodeAt(_i2 + 1) << 8 | str.charCodeAt(_i2)));
      }
    } else {
      for (var _i3 = 0; _i3 < length; ++_i3) {
        var code = PDFStringTranslateTable[str.charCodeAt(_i3)];
        strBuf.push(code ? String.fromCharCode(code) : str.charAt(_i3));
      }
    }

    return strBuf.join("");
  }

  function isNum(v) {
    return typeof v === "number";
  }

  function isString(v) {
    return typeof v === "string";
  }

  function isArrayBuffer(v) {
    return _typeof(v) === "object" && v !== null && v.byteLength !== undefined;
  }
  /**
   * Promise Capability object.
   *
   * @typedef {Object} PromiseCapability
   * @property {Promise} promise - A Promise object.
   * @property {boolean} settled - If the Promise has been fulfilled/rejected.
   * @property {function} resolve - Fulfills the Promise.
   * @property {function} reject - Rejects the Promise.
   */

  /**
   * Creates a promise capability object.
   * @alias createPromiseCapability
   *
   * @returns {PromiseCapability}
   */


  function createPromiseCapability() {
    var capability = Object.create(null);
    var isSettled = false;
    Object.defineProperty(capability, "settled", {
      get: function get() {
        return isSettled;
      }
    });
    capability.promise = new Promise(function (resolve, reject) {
      capability.resolve = function (data) {
        isSettled = true;
        resolve(data);
      };

      capability.reject = function (reason) {
        isSettled = true;
        reject(reason);
      };
    });
    return capability;
  }

  var createObjectURL = function createObjectURLClosure() {
    // Blob/createObjectURL is not available, falling back to data schema.
    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return function createObjectURL(data, contentType) {
      var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!forceDataSchema && URL.createObjectURL) {
        var blob = new Blob([data], {
          type: contentType
        });
        return URL.createObjectURL(blob);
      }

      var buffer = "data:".concat(contentType, ";base64,");

      for (var i = 0, ii = data.length; i < ii; i += 3) {
        var b1 = data[i] & 0xff;
        var b2 = data[i + 1] & 0xff;
        var b3 = data[i + 2] & 0xff;
        var d1 = b1 >> 2,
            d2 = (b1 & 3) << 4 | b2 >> 4;
        var d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
        var d4 = i + 2 < ii ? b3 & 0x3f : 64;
        buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
      }

      return buffer;
    };
  }();

  var DEFAULT_LINK_REL = "noopener noreferrer nofollow";
  var SVG_NS = "http://www.w3.org/2000/svg";

  var DOMCanvasFactory =
  /*#__PURE__*/
  function () {
    function DOMCanvasFactory() {
      _classCallCheck(this, DOMCanvasFactory);
    }

    _createClass(DOMCanvasFactory, [{
      key: "create",
      value: function create(width, height) {
        if (width <= 0 || height <= 0) {
          throw new Error("Invalid canvas size");
        }

        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        return {
          canvas: canvas,
          context: context
        };
      }
    }, {
      key: "reset",
      value: function reset(canvasAndContext, width, height) {
        if (!canvasAndContext.canvas) {
          throw new Error("Canvas is not specified");
        }

        if (width <= 0 || height <= 0) {
          throw new Error("Invalid canvas size");
        }

        canvasAndContext.canvas.width = width;
        canvasAndContext.canvas.height = height;
      }
    }, {
      key: "destroy",
      value: function destroy(canvasAndContext) {
        if (!canvasAndContext.canvas) {
          throw new Error("Canvas is not specified");
        } // Zeroing the width and height cause Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.


        canvasAndContext.canvas.width = 0;
        canvasAndContext.canvas.height = 0;
        canvasAndContext.canvas = null;
        canvasAndContext.context = null;
      }
    }]);

    return DOMCanvasFactory;
  }();

  var DOMCMapReaderFactory =
  /*#__PURE__*/
  function () {
    function DOMCMapReaderFactory(_ref) {
      var _ref$baseUrl = _ref.baseUrl,
          baseUrl = _ref$baseUrl === void 0 ? null : _ref$baseUrl,
          _ref$isCompressed = _ref.isCompressed,
          isCompressed = _ref$isCompressed === void 0 ? false : _ref$isCompressed;

      _classCallCheck(this, DOMCMapReaderFactory);

      this.baseUrl = baseUrl;
      this.isCompressed = isCompressed;
    }

    _createClass(DOMCMapReaderFactory, [{
      key: "fetch",
      value: function (_fetch) {
        function fetch(_x) {
          return _fetch.apply(this, arguments);
        }

        fetch.toString = function () {
          return _fetch.toString();
        };

        return fetch;
      }(
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(_ref2) {
          var _this = this;

          var name, url, compressionType;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  name = _ref2.name;

                  if (this.baseUrl) {
                    _context2.next = 3;
                    break;
                  }

                  throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');

                case 3:
                  if (name) {
                    _context2.next = 5;
                    break;
                  }

                  throw new Error("CMap name must be specified.");

                case 5:
                  url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
                  compressionType = this.isCompressed ? CMapCompressionType.BINARY : CMapCompressionType.NONE;

                  if (!(typeof PDFJSDev !== "undefined" && PDFJSDev.test("MOZCENTRAL") || isFetchSupported() && isValidFetchUrl(url, document.baseURI))) {
                    _context2.next = 9;
                    break;
                  }

                  return _context2.abrupt("return", fetch(url).then(
                  /*#__PURE__*/
                  function () {
                    var _ref4 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(response) {
                      var cMapData;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (response.ok) {
                                _context.next = 2;
                                break;
                              }

                              throw new Error(response.statusText);

                            case 2:
                              if (!_this.isCompressed) {
                                _context.next = 10;
                                break;
                              }

                              _context.t0 = Uint8Array;
                              _context.next = 6;
                              return response.arrayBuffer();

                            case 6:
                              _context.t1 = _context.sent;
                              cMapData = new _context.t0(_context.t1);
                              _context.next = 15;
                              break;

                            case 10:
                              _context.t2 = stringToBytes;
                              _context.next = 13;
                              return response.text();

                            case 13:
                              _context.t3 = _context.sent;
                              cMapData = (0, _context.t2)(_context.t3);

                            case 15:
                              return _context.abrupt("return", {
                                cMapData: cMapData,
                                compressionType: compressionType
                              });

                            case 16:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x3) {
                      return _ref4.apply(this, arguments);
                    };
                  }()).catch(function (reason) {
                    throw new Error("Unable to load ".concat(_this.isCompressed ? "binary " : "") + "CMap at: ".concat(url));
                  }));

                case 9:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var request = new XMLHttpRequest();
                    request.open("GET", url, true);

                    if (_this.isCompressed) {
                      request.responseType = "arraybuffer";
                    }

                    request.onreadystatechange = function () {
                      if (request.readyState !== XMLHttpRequest.DONE) {
                        return;
                      }

                      if (request.status === 200 || request.status === 0) {
                        var cMapData;

                        if (_this.isCompressed && request.response) {
                          cMapData = new Uint8Array(request.response);
                        } else if (!_this.isCompressed && request.responseText) {
                          cMapData = stringToBytes(request.responseText);
                        }

                        if (cMapData) {
                          resolve({
                            cMapData: cMapData,
                            compressionType: compressionType
                          });
                          return;
                        }
                      }

                      reject(new Error(request.statusText));
                    };

                    request.send(null);
                  }).catch(function (reason) {
                    throw new Error("Unable to load ".concat(_this.isCompressed ? "binary " : "") + "CMap at: ".concat(url));
                  }));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }())
    }]);

    return DOMCMapReaderFactory;
  }();

  var DOMSVGFactory =
  /*#__PURE__*/
  function () {
    function DOMSVGFactory() {
      _classCallCheck(this, DOMSVGFactory);
    }

    _createClass(DOMSVGFactory, [{
      key: "create",
      value: function create(width, height) {
        assert(width > 0 && height > 0, "Invalid SVG dimensions");
        var svg = document.createElementNS(SVG_NS, "svg:svg");
        svg.setAttribute("version", "1.1");
        svg.setAttribute("width", width + "px");
        svg.setAttribute("height", height + "px");
        svg.setAttribute("preserveAspectRatio", "none");
        svg.setAttribute("viewBox", "0 0 " + width + " " + height);
        return svg;
      }
    }, {
      key: "createElement",
      value: function createElement(type) {
        assert(typeof type === "string", "Invalid SVG element type");
        return document.createElementNS(SVG_NS, type);
      }
    }]);

    return DOMSVGFactory;
  }();
  /**
   * @typedef {Object} PageViewportParameters
   * @property {Array} viewBox - The xMin, yMin, xMax and yMax coordinates.
   * @property {number} scale - The scale of the viewport.
   * @property {number} rotation - The rotation, in degrees, of the viewport.
   * @property {number} [offsetX] - The horizontal, i.e. x-axis, offset. The
   *   default value is `0`.
   * @property {number} [offsetY] - The vertical, i.e. y-axis, offset. The
   *   default value is `0`.
   * @property {boolean} [dontFlip] - If true, the y-axis will not be flipped.
   *   The default value is `false`.
   */

  /**
   * @typedef {Object} PageViewportCloneParameters
   * @property {number} [scale] - The scale, overriding the one in the cloned
   *   viewport. The default value is `this.scale`.
   * @property {number} [rotation] - The rotation, in degrees, overriding the one
   *   in the cloned viewport. The default value is `this.rotation`.
   * @property {number} [offsetX] - The horizontal, i.e. x-axis, offset.
   *   The default value is `this.offsetX`.
   * @property {number} [offsetY] - The vertical, i.e. y-axis, offset.
   *   The default value is `this.offsetY`.
   * @property {boolean} [dontFlip] - If true, the x-axis will not be flipped.
   *   The default value is `false`.
   */

  /**
   * PDF page viewport created based on scale, rotation and offset.
   */


  var PageViewport =
  /*#__PURE__*/
  function () {
    /**
     * @param {PageViewportParameters}
     */
    function PageViewport(_ref5) {
      var viewBox = _ref5.viewBox,
          scale = _ref5.scale,
          rotation = _ref5.rotation,
          _ref5$offsetX = _ref5.offsetX,
          offsetX = _ref5$offsetX === void 0 ? 0 : _ref5$offsetX,
          _ref5$offsetY = _ref5.offsetY,
          offsetY = _ref5$offsetY === void 0 ? 0 : _ref5$offsetY,
          _ref5$dontFlip = _ref5.dontFlip,
          dontFlip = _ref5$dontFlip === void 0 ? false : _ref5$dontFlip;

      _classCallCheck(this, PageViewport);

      this.viewBox = viewBox;
      this.scale = scale;
      this.rotation = rotation;
      this.offsetX = offsetX;
      this.offsetY = offsetY; // creating transform to convert pdf coordinate system to the normal
      // canvas like coordinates taking in account scale and rotation

      var centerX = (viewBox[2] + viewBox[0]) / 2;
      var centerY = (viewBox[3] + viewBox[1]) / 2;
      var rotateA, rotateB, rotateC, rotateD;
      rotation = rotation % 360;
      rotation = rotation < 0 ? rotation + 360 : rotation;

      switch (rotation) {
        case 180:
          rotateA = -1;
          rotateB = 0;
          rotateC = 0;
          rotateD = 1;
          break;

        case 90:
          rotateA = 0;
          rotateB = 1;
          rotateC = 1;
          rotateD = 0;
          break;

        case 270:
          rotateA = 0;
          rotateB = -1;
          rotateC = -1;
          rotateD = 0;
          break;
        // case 0:

        default:
          rotateA = 1;
          rotateB = 0;
          rotateC = 0;
          rotateD = -1;
          break;
      }

      if (dontFlip) {
        rotateC = -rotateC;
        rotateD = -rotateD;
      }

      var offsetCanvasX, offsetCanvasY;
      var width, height;

      if (rotateA === 0) {
        offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
        offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
        width = Math.abs(viewBox[3] - viewBox[1]) * scale;
        height = Math.abs(viewBox[2] - viewBox[0]) * scale;
      } else {
        offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
        offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
        width = Math.abs(viewBox[2] - viewBox[0]) * scale;
        height = Math.abs(viewBox[3] - viewBox[1]) * scale;
      } // creating transform for the following operations:
      // translate(-centerX, -centerY), rotate and flip vertically,
      // scale, and translate(offsetCanvasX, offsetCanvasY)


      this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
      this.width = width;
      this.height = height;
    }
    /**
     * Clones viewport, with optional additional properties.
     * @param {PageViewportCloneParameters} [params]
     * @returns {PageViewport} Cloned viewport.
     */


    _createClass(PageViewport, [{
      key: "clone",
      value: function clone() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref6$scale = _ref6.scale,
            scale = _ref6$scale === void 0 ? this.scale : _ref6$scale,
            _ref6$rotation = _ref6.rotation,
            rotation = _ref6$rotation === void 0 ? this.rotation : _ref6$rotation,
            _ref6$offsetX = _ref6.offsetX,
            offsetX = _ref6$offsetX === void 0 ? this.offsetX : _ref6$offsetX,
            _ref6$offsetY = _ref6.offsetY,
            offsetY = _ref6$offsetY === void 0 ? this.offsetY : _ref6$offsetY,
            _ref6$dontFlip = _ref6.dontFlip,
            dontFlip = _ref6$dontFlip === void 0 ? false : _ref6$dontFlip;

        return new PageViewport({
          viewBox: this.viewBox.slice(),
          scale: scale,
          rotation: rotation,
          offsetX: offsetX,
          offsetY: offsetY,
          dontFlip: dontFlip
        });
      }
      /**
       * Converts PDF point to the viewport coordinates. For examples, useful for
       * converting PDF location into canvas pixel coordinates.
       * @param {number} x - The x-coordinate.
       * @param {number} y - The y-coordinate.
       * @returns {Object} Object containing `x` and `y` properties of the
       *   point in the viewport coordinate space.
       * @see {@link convertToPdfPoint}
       * @see {@link convertToViewportRectangle}
       */

    }, {
      key: "convertToViewportPoint",
      value: function convertToViewportPoint(x, y) {
        return Util.applyTransform([x, y], this.transform);
      }
      /**
       * Converts PDF rectangle to the viewport coordinates.
       * @param {Array} rect - The xMin, yMin, xMax and yMax coordinates.
       * @returns {Array} Array containing corresponding coordinates of the
       *   rectangle in the viewport coordinate space.
       * @see {@link convertToViewportPoint}
       */

    }, {
      key: "convertToViewportRectangle",
      value: function convertToViewportRectangle(rect) {
        var topLeft = Util.applyTransform([rect[0], rect[1]], this.transform);
        var bottomRight = Util.applyTransform([rect[2], rect[3]], this.transform);
        return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
      }
      /**
       * Converts viewport coordinates to the PDF location. For examples, useful
       * for converting canvas pixel location into PDF one.
       * @param {number} x - The x-coordinate.
       * @param {number} y - The y-coordinate.
       * @returns {Object} Object containing `x` and `y` properties of the
       *   point in the PDF coordinate space.
       * @see {@link convertToViewportPoint}
       */

    }, {
      key: "convertToPdfPoint",
      value: function convertToPdfPoint(x, y) {
        return Util.applyInverseTransform([x, y], this.transform);
      }
    }]);

    return PageViewport;
  }();

  var RenderingCancelledException =
  /*#__PURE__*/
  function (_BaseException) {
    _inherits(RenderingCancelledException, _BaseException);

    function RenderingCancelledException(msg, type) {
      var _this2;

      _classCallCheck(this, RenderingCancelledException);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(RenderingCancelledException).call(this, msg));
      _this2.type = type;
      return _this2;
    }

    return RenderingCancelledException;
  }(BaseException);

  var LinkTarget = {
    NONE: 0,
    // Default value.
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
  };
  /**
   * @typedef ExternalLinkParameters
   * @typedef {Object} ExternalLinkParameters
   * @property {string} url - An absolute URL.
   * @property {LinkTarget} [target] - The link target. The default value is
   *   `LinkTarget.NONE`.
   * @property {string} [rel] - The link relationship. The default value is
   *   `DEFAULT_LINK_REL`.
   * @property {boolean} [enabled] - Whether the link should be enabled. The
   *   default value is true.
   */

  /**
   * Adds various attributes (href, title, target, rel) to hyperlinks.
   * @param {HTMLLinkElement} link - The link element.
   * @param {ExternalLinkParameters} params
   */

  function addLinkAttributes(link) {
    var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        url = _ref7.url,
        target = _ref7.target,
        rel = _ref7.rel,
        _ref7$enabled = _ref7.enabled,
        enabled = _ref7$enabled === void 0 ? true : _ref7$enabled;

    assert(url && typeof url === "string", 'addLinkAttributes: A valid "url" parameter must provided.');
    var urlNullRemoved = removeNullCharacters(url);

    if (enabled) {
      link.href = link.title = urlNullRemoved;
    } else {
      link.href = "";
      link.title = "Disabled: ".concat(urlNullRemoved);

      link.onclick = function () {
        return false;
      };
    }

    var targetStr = ""; // LinkTarget.NONE

    switch (target) {
      case LinkTarget.NONE:
        break;

      case LinkTarget.SELF:
        targetStr = "_self";
        break;

      case LinkTarget.BLANK:
        targetStr = "_blank";
        break;

      case LinkTarget.PARENT:
        targetStr = "_parent";
        break;

      case LinkTarget.TOP:
        targetStr = "_top";
        break;
    }

    link.target = targetStr;
    link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
  } // Gets the file name from a given URL.


  function getFilenameFromUrl(url) {
    var anchor = url.indexOf("#");
    var query = url.indexOf("?");
    var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
    return url.substring(url.lastIndexOf("/", end) + 1, end);
  }

  var StatTimer =
  /*#__PURE__*/
  function () {
    function StatTimer() {
      _classCallCheck(this, StatTimer);

      this.started = Object.create(null);
      this.times = [];
    }

    _createClass(StatTimer, [{
      key: "time",
      value: function time(name) {
        if (name in this.started) {
          warn("Timer is already running for ".concat(name));
        }

        this.started[name] = Date.now();
      }
    }, {
      key: "timeEnd",
      value: function timeEnd(name) {
        if (!(name in this.started)) {
          warn("Timer has not been started for ".concat(name));
        }

        this.times.push({
          name: name,
          start: this.started[name],
          end: Date.now()
        }); // Remove timer from started so it can be called again.

        delete this.started[name];
      }
    }, {
      key: "toString",
      value: function toString() {
        // Find the longest name for padding purposes.
        var outBuf = [],
            longest = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.times[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var time = _step.value;
            var name = time.name;

            if (name.length > longest) {
              longest = name.length;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.times[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _time = _step2.value;
            var duration = _time.end - _time.start;
            outBuf.push("".concat(_time.name.padEnd(longest), " ").concat(duration, "ms\n"));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return outBuf.join("");
      }
    }]);

    return StatTimer;
  }();

  function isFetchSupported() {
    return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype && typeof ReadableStream !== "undefined";
  }

  function isValidFetchUrl(url, baseUrl) {
    try {
      var _ref8 = baseUrl ? new URL(url, baseUrl) : new URL(url),
          protocol = _ref8.protocol; // The Fetch API only supports the http/https protocols, and not file/ftp.


      return protocol === "http:" || protocol === "https:";
    } catch (ex) {
      return false; // `new URL()` will throw on incorrect data.
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;

      script.onerror = function () {
        reject(new Error("Cannot load script at: ".concat(script.src)));
      };

      (document.head || document.documentElement).appendChild(script);
    });
  } // Deprecated API function -- display regardless of the `verbosity` setting.


  function deprecated(details) {
    console.log("Deprecated API usage: " + details);
  }

  function releaseImageResources(img) {
    assert(img instanceof Image, "Invalid `img` parameter.");
    var url = img.src;

    if (typeof url === "string" && url.startsWith("blob:") && URL.revokeObjectURL) {
      URL.revokeObjectURL(url);
    }

    img.removeAttribute("src");
  }

  var pdfDateStringRegex;

  var PDFDateString =
  /*#__PURE__*/
  function () {
    function PDFDateString() {
      _classCallCheck(this, PDFDateString);
    }

    _createClass(PDFDateString, null, [{
      key: "toDateObject",

      /**
       * Convert a PDF date string to a JavaScript `Date` object.
       *
       * The PDF date string format is described in section 7.9.4 of the official
       * PDF 32000-1:2008 specification. However, in the PDF 1.7 reference (sixth
       * edition) Adobe describes the same format including a trailing apostrophe.
       * This syntax in incorrect, but Adobe Acrobat creates PDF files that contain
       * them. We ignore all apostrophes as they are not necessary for date parsing.
       *
       * Moreover, Adobe Acrobat doesn't handle changing the date to universal time
       * and doesn't use the user's time zone (effectively ignoring the HH' and mm'
       * parts of the date string).
       *
       * @param {string} input
       * @returns {Date|null}
       */
      value: function toDateObject(input) {
        if (!input || !isString(input)) {
          return null;
        } // Lazily initialize the regular expression.


        if (!pdfDateStringRegex) {
          pdfDateStringRegex = new RegExp("^D:" + // Prefix (required)
          "(\\d{4})" + // Year (required)
          "(\\d{2})?" + // Month (optional)
          "(\\d{2})?" + // Day (optional)
          "(\\d{2})?" + // Hour (optional)
          "(\\d{2})?" + // Minute (optional)
          "(\\d{2})?" + // Second (optional)
          "([Z|+|-])?" + // Universal time relation (optional)
          "(\\d{2})?" + // Offset hour (optional)
          "'?" + // Splitting apostrophe (optional)
          "(\\d{2})?" + // Offset minute (optional)
          "'?" // Trailing apostrophe (optional)
          );
        } // Optional fields that don't satisfy the requirements from the regular
        // expression (such as incorrect digit counts or numbers that are out of
        // range) will fall back the defaults from the specification.


        var matches = pdfDateStringRegex.exec(input);

        if (!matches) {
          return null;
        } // JavaScript's `Date` object expects the month to be between 0 and 11
        // instead of 1 and 12, so we have to correct for that.


        var year = parseInt(matches[1], 10);
        var month = parseInt(matches[2], 10);
        month = month >= 1 && month <= 12 ? month - 1 : 0;
        var day = parseInt(matches[3], 10);
        day = day >= 1 && day <= 31 ? day : 1;
        var hour = parseInt(matches[4], 10);
        hour = hour >= 0 && hour <= 23 ? hour : 0;
        var minute = parseInt(matches[5], 10);
        minute = minute >= 0 && minute <= 59 ? minute : 0;
        var second = parseInt(matches[6], 10);
        second = second >= 0 && second <= 59 ? second : 0;
        var universalTimeRelation = matches[7] || "Z";
        var offsetHour = parseInt(matches[8], 10);
        offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
        var offsetMinute = parseInt(matches[9], 10) || 0;
        offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0; // Universal time relation 'Z' means that the local time is equal to the
        // universal time, whereas the relations '+'/'-' indicate that the local
        // time is later respectively earlier than the universal time. Every date
        // is normalized to universal time.

        if (universalTimeRelation === "-") {
          hour += offsetHour;
          minute += offsetMinute;
        } else if (universalTimeRelation === "+") {
          hour -= offsetHour;
          minute -= offsetMinute;
        }

        return new Date(Date.UTC(year, month, day, hour, minute, second));
      }
    }]);

    return PDFDateString;
  }();

  /* Copyright 2017 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // This getFilenameFromContentDispositionHeader function is adapted from
  // https://github.com/Rob--W/open-in-browser/blob/7e2e35a38b8b4e981b11da7b2f01df0149049e92/extension/content-disposition.js
  // with the following changes:
  // - Modified to conform to PDF.js's coding style.
  // - Support UTF-8 decoding when TextDecoder is unsupported.
  // - Move return to the end of the function to prevent Babel from dropping the
  //   function declarations.

  /**
   * Extract file name from the Content-Disposition HTTP response header.
   *
   * @param {string} contentDisposition
   * @returns {string} Filename, if found in the Content-Disposition header.
   */
  function getFilenameFromContentDispositionHeader(contentDisposition) {
    var needsEncodingFixup = true; // filename*=ext-value ("ext-value" from RFC 5987, referenced by RFC 6266).

    var tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);

    if (tmp) {
      tmp = tmp[1];
      var filename = rfc2616unquote(tmp);
      filename = unescape(filename);
      filename = rfc5987decode(filename);
      filename = rfc2047decode(filename);
      return fixupEncoding(filename);
    } // Continuations (RFC 2231 section 3, referenced by RFC 5987 section 3.1).
    // filename*n*=part
    // filename*n=part


    tmp = rfc2231getparam(contentDisposition);

    if (tmp) {
      // RFC 2047, section
      var _filename = rfc2047decode(tmp);

      return fixupEncoding(_filename);
    } // filename=value (RFC 5987, section 4.1).


    tmp = toParamRegExp("filename", "i").exec(contentDisposition);

    if (tmp) {
      tmp = tmp[1];

      var _filename2 = rfc2616unquote(tmp);

      _filename2 = rfc2047decode(_filename2);
      return fixupEncoding(_filename2);
    } // After this line there are only function declarations. We cannot put
    // "return" here for readability because babel would then drop the function
    // declarations...


    function toParamRegExp(attributePattern, flags) {
      return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + // Captures: value = token | quoted-string
      // (RFC 2616, section 3.6 and referenced by RFC 6266 4.1)
      "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
    }

    function textdecode(encoding, value) {
      if (encoding) {
        if (!/^[\x00-\xFF]+$/.test(value)) {
          return value;
        }

        try {
          var decoder = new TextDecoder(encoding, {
            fatal: true
          });
          var bytes = Array.from(value, function (ch) {
            return ch.charCodeAt(0) & 0xff;
          });
          value = decoder.decode(new Uint8Array(bytes));
          needsEncodingFixup = false;
        } catch (e) {
          // TextDecoder constructor threw - unrecognized encoding.
          // Or TextDecoder API is not available (in IE / Edge).
          if (/^utf-?8$/i.test(encoding)) {
            // UTF-8 is commonly used, try to support it in another way:
            try {
              value = decodeURIComponent(escape(value));
              needsEncodingFixup = false;
            } catch (err) {}
          }
        }
      }

      return value;
    }

    function fixupEncoding(value) {
      if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
        // Maybe multi-byte UTF-8.
        value = textdecode("utf-8", value);

        if (needsEncodingFixup) {
          // Try iso-8859-1 encoding.
          value = textdecode("iso-8859-1", value);
        }
      }

      return value;
    }

    function rfc2231getparam(contentDisposition) {
      var matches = [],
          match; // Iterate over all filename*n= and filename*n*= with n being an integer
      // of at least zero. Any non-zero number must not start with '0'.

      var iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");

      while ((match = iter.exec(contentDisposition)) !== null) {
        var _match = match,
            _match2 = _slicedToArray(_match, 4),
            n = _match2[1],
            quot = _match2[2],
            part = _match2[3];

        n = parseInt(n, 10);

        if (n in matches) {
          // Ignore anything after the invalid second filename*0.
          if (n === 0) {
            break;
          }

          continue;
        }

        matches[n] = [quot, part];
      }

      var parts = [];

      for (var _n = 0; _n < matches.length; ++_n) {
        if (!(_n in matches)) {
          // Numbers must be consecutive. Truncate when there is a hole.
          break;
        }

        var _matches$_n = _slicedToArray(matches[_n], 2),
            _quot = _matches$_n[0],
            _part = _matches$_n[1];

        _part = rfc2616unquote(_part);

        if (_quot) {
          _part = unescape(_part);

          if (_n === 0) {
            _part = rfc5987decode(_part);
          }
        }

        parts.push(_part);
      }

      return parts.join("");
    }

    function rfc2616unquote(value) {
      if (value.startsWith('"')) {
        var parts = value.slice(1).split('\\"'); // Find the first unescaped " and terminate there.

        for (var i = 0; i < parts.length; ++i) {
          var quotindex = parts[i].indexOf('"');

          if (quotindex !== -1) {
            parts[i] = parts[i].slice(0, quotindex);
            parts.length = i + 1; // Truncates and stop the iteration.
          }

          parts[i] = parts[i].replace(/\\(.)/g, "$1");
        }

        value = parts.join('"');
      }

      return value;
    }

    function rfc5987decode(extvalue) {
      // Decodes "ext-value" from RFC 5987.
      var encodingend = extvalue.indexOf("'");

      if (encodingend === -1) {
        // Some servers send "filename*=" without encoding 'language' prefix,
        // e.g. in https://github.com/Rob--W/open-in-browser/issues/26
        // Let's accept the value like Firefox (57) (Chrome 62 rejects it).
        return extvalue;
      }

      var encoding = extvalue.slice(0, encodingend);
      var langvalue = extvalue.slice(encodingend + 1); // Ignore language (RFC 5987 section 3.2.1, and RFC 6266 section 4.1 ).

      var value = langvalue.replace(/^[^']*'/, "");
      return textdecode(encoding, value);
    }

    function rfc2047decode(value) {
      // RFC 2047-decode the result. Firefox tried to drop support for it, but
      // backed out because some servers use it - https://bugzil.la/875615
      // Firefox's condition for decoding is here: https://searchfox.org/mozilla-central/rev/4a590a5a15e35d88a3b23dd6ac3c471cf85b04a8/netwerk/mime/nsMIMEHeaderParamImpl.cpp#742-748
      // We are more strict and only recognize RFC 2047-encoding if the value
      // starts with "=?", since then it is likely that the full value is
      // RFC 2047-encoded.
      // Firefox also decodes words even where RFC 2047 section 5 states:
      // "An 'encoded-word' MUST NOT appear within a 'quoted-string'."
      if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
        return value;
      } // RFC 2047, section 2.4
      // encoded-word = "=?" charset "?" encoding "?" encoded-text "?="
      // charset = token (but let's restrict to characters that denote a
      //       possibly valid encoding).
      // encoding = q or b
      // encoded-text = any printable ASCII character other than ? or space.
      //        ... but Firefox permits ? and space.


      return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
        if (encoding === "q" || encoding === "Q") {
          // RFC 2047 section 4.2.
          text = text.replace(/_/g, " ");
          text = text.replace(/=([0-9a-fA-F]{2})/g, function (_, hex) {
            return String.fromCharCode(parseInt(hex, 16));
          });
          return textdecode(charset, text);
        } // else encoding is b or B - base64 (RFC 2047 section 4.1)


        try {
          text = atob(text);
        } catch (e) {}

        return textdecode(charset, text);
      });
    }

    return "";
  }

  /* Copyright 2012 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  function validateRangeRequestCapabilities(_ref) {
    var getResponseHeader = _ref.getResponseHeader,
        isHttp = _ref.isHttp,
        rangeChunkSize = _ref.rangeChunkSize,
        disableRange = _ref.disableRange;
    assert(rangeChunkSize > 0, "Range chunk size must be larger than zero");
    var returnValues = {
      allowRangeRequests: false,
      suggestedLength: undefined
    };
    var length = parseInt(getResponseHeader("Content-Length"), 10);

    if (!Number.isInteger(length)) {
      return returnValues;
    }

    returnValues.suggestedLength = length;

    if (length <= 2 * rangeChunkSize) {
      // The file size is smaller than the size of two chunks, so it does not
      // make any sense to abort the request and retry with a range request.
      return returnValues;
    }

    if (disableRange || !isHttp) {
      return returnValues;
    }

    if (getResponseHeader("Accept-Ranges") !== "bytes") {
      return returnValues;
    }

    var contentEncoding = getResponseHeader("Content-Encoding") || "identity";

    if (contentEncoding !== "identity") {
      return returnValues;
    }

    returnValues.allowRangeRequests = true;
    return returnValues;
  }

  function extractFilenameFromHeader(getResponseHeader) {
    var contentDisposition = getResponseHeader("Content-Disposition");

    if (contentDisposition) {
      var filename = getFilenameFromContentDispositionHeader(contentDisposition);

      if (filename.includes("%")) {
        try {
          filename = decodeURIComponent(filename);
        } catch (ex) {}
      }

      if (/\.pdf$/i.test(filename)) {
        return filename;
      }
    }

    return null;
  }

  function createResponseStatusError(status, url) {
    if (status === 404 || status === 0 && /^file:/.test(url)) {
      return new MissingPDFException('Missing PDF "' + url + '".');
    }

    return new UnexpectedResponseException("Unexpected server response (" + status + ') while retrieving PDF "' + url + '".', status);
  }

  function validateResponseStatus(status) {
    return status === 200 || status === 206;
  }

  if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("FIREFOX || MOZCENTRAL")) {
    throw new Error('Module "./network" shall not ' + "be used with FIREFOX or MOZCENTRAL build.");
  }

  var OK_RESPONSE = 200;
  var PARTIAL_CONTENT_RESPONSE = 206;

  function getArrayBuffer(xhr) {
    var data = xhr.response;

    if (typeof data !== "string") {
      return data;
    }

    var array = stringToBytes(data);
    return array.buffer;
  }

  var NetworkManager =
  /*#__PURE__*/
  function () {
    function NetworkManager(url, args) {
      _classCallCheck(this, NetworkManager);

      this.url = url;
      args = args || {};
      this.isHttp = /^https?:/i.test(url);
      this.httpHeaders = this.isHttp && args.httpHeaders || {};
      this.withCredentials = args.withCredentials || false;

      this.getXhr = args.getXhr || function NetworkManager_getXhr() {
        return new XMLHttpRequest();
      };

      this.currXhrId = 0;
      this.pendingRequests = Object.create(null);
    }

    _createClass(NetworkManager, [{
      key: "requestRange",
      value: function requestRange(begin, end, listeners) {
        var args = {
          begin: begin,
          end: end
        };

        for (var prop in listeners) {
          args[prop] = listeners[prop];
        }

        return this.request(args);
      }
    }, {
      key: "requestFull",
      value: function requestFull(listeners) {
        return this.request(listeners);
      }
    }, {
      key: "request",
      value: function request(args) {
        var xhr = this.getXhr();
        var xhrId = this.currXhrId++;
        var pendingRequest = this.pendingRequests[xhrId] = {
          xhr: xhr
        };
        xhr.open("GET", this.url);
        xhr.withCredentials = this.withCredentials;

        for (var property in this.httpHeaders) {
          var value = this.httpHeaders[property];

          if (typeof value === "undefined") {
            continue;
          }

          xhr.setRequestHeader(property, value);
        }

        if (this.isHttp && "begin" in args && "end" in args) {
          xhr.setRequestHeader("Range", "bytes=".concat(args.begin, "-").concat(args.end - 1));
          pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
        } else {
          pendingRequest.expectedStatus = OK_RESPONSE;
        }

        xhr.responseType = "arraybuffer";

        if (args.onError) {
          xhr.onerror = function (evt) {
            args.onError(xhr.status);
          };
        }

        xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
        xhr.onprogress = this.onProgress.bind(this, xhrId);
        pendingRequest.onHeadersReceived = args.onHeadersReceived;
        pendingRequest.onDone = args.onDone;
        pendingRequest.onError = args.onError;
        pendingRequest.onProgress = args.onProgress;
        xhr.send(null);
        return xhrId;
      }
    }, {
      key: "onProgress",
      value: function onProgress(xhrId, evt) {
        var pendingRequest = this.pendingRequests[xhrId];

        if (!pendingRequest) {
          // Maybe abortRequest was called...
          return;
        }

        if (pendingRequest.onProgress) {
          pendingRequest.onProgress(evt);
        }
      }
    }, {
      key: "onStateChange",
      value: function onStateChange(xhrId, evt) {
        var pendingRequest = this.pendingRequests[xhrId];

        if (!pendingRequest) {
          // Maybe abortRequest was called...
          return;
        }

        var xhr = pendingRequest.xhr;

        if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
          pendingRequest.onHeadersReceived();
          delete pendingRequest.onHeadersReceived;
        }

        if (xhr.readyState !== 4) {
          return;
        }

        if (!(xhrId in this.pendingRequests)) {
          // The XHR request might have been aborted in onHeadersReceived()
          // callback, in which case we should abort request.
          return;
        }

        delete this.pendingRequests[xhrId]; // Success status == 0 can be on ftp, file and other protocols.

        if (xhr.status === 0 && this.isHttp) {
          if (pendingRequest.onError) {
            pendingRequest.onError(xhr.status);
          }

          return;
        }

        var xhrStatus = xhr.status || OK_RESPONSE; // From http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.2:
        // "A server MAY ignore the Range header". This means it's possible to
        // get a 200 rather than a 206 response from a range request.

        var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;

        if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
          if (pendingRequest.onError) {
            pendingRequest.onError(xhr.status);
          }

          return;
        }

        var chunk = getArrayBuffer(xhr);

        if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
          var rangeHeader = xhr.getResponseHeader("Content-Range");
          var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
          pendingRequest.onDone({
            begin: parseInt(matches[1], 10),
            chunk: chunk
          });
        } else if (chunk) {
          pendingRequest.onDone({
            begin: 0,
            chunk: chunk
          });
        } else if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }
      }
    }, {
      key: "hasPendingRequests",
      value: function hasPendingRequests() {
        for (var xhrId in this.pendingRequests) {
          return true;
        }

        return false;
      }
    }, {
      key: "getRequestXhr",
      value: function getRequestXhr(xhrId) {
        return this.pendingRequests[xhrId].xhr;
      }
    }, {
      key: "isPendingRequest",
      value: function isPendingRequest(xhrId) {
        return xhrId in this.pendingRequests;
      }
    }, {
      key: "abortAllRequests",
      value: function abortAllRequests() {
        for (var xhrId in this.pendingRequests) {
          this.abortRequest(xhrId | 0);
        }
      }
    }, {
      key: "abortRequest",
      value: function abortRequest(xhrId) {
        var xhr = this.pendingRequests[xhrId].xhr;
        delete this.pendingRequests[xhrId];
        xhr.abort();
      }
    }]);

    return NetworkManager;
  }();
  /** @implements {IPDFStream} */


  var PDFNetworkStream =
  /*#__PURE__*/
  function () {
    function PDFNetworkStream(source) {
      _classCallCheck(this, PDFNetworkStream);

      this._source = source;
      this._manager = new NetworkManager(source.url, {
        httpHeaders: source.httpHeaders,
        withCredentials: source.withCredentials
      });
      this._rangeChunkSize = source.rangeChunkSize;
      this._fullRequestReader = null;
      this._rangeRequestReaders = [];
    }

    _createClass(PDFNetworkStream, [{
      key: "_onRangeRequestReaderClosed",
      value: function _onRangeRequestReaderClosed(reader) {
        var i = this._rangeRequestReaders.indexOf(reader);

        if (i >= 0) {
          this._rangeRequestReaders.splice(i, 1);
        }
      }
    }, {
      key: "getFullReader",
      value: function getFullReader() {
        assert(!this._fullRequestReader);
        this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
        return this._fullRequestReader;
      }
    }, {
      key: "getRangeReader",
      value: function getRangeReader(begin, end) {
        var reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
        reader.onClosed = this._onRangeRequestReaderClosed.bind(this);

        this._rangeRequestReaders.push(reader);

        return reader;
      }
    }, {
      key: "cancelAllRequests",
      value: function cancelAllRequests(reason) {
        if (this._fullRequestReader) {
          this._fullRequestReader.cancel(reason);
        }

        var readers = this._rangeRequestReaders.slice(0);

        readers.forEach(function (reader) {
          reader.cancel(reason);
        });
      }
    }]);

    return PDFNetworkStream;
  }();
  /** @implements {IPDFStreamReader} */


  var PDFNetworkStreamFullRequestReader =
  /*#__PURE__*/
  function () {
    function PDFNetworkStreamFullRequestReader(manager, source) {
      _classCallCheck(this, PDFNetworkStreamFullRequestReader);

      this._manager = manager;
      var args = {
        onHeadersReceived: this._onHeadersReceived.bind(this),
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this)
      };
      this._url = source.url;
      this._fullRequestId = manager.requestFull(args);
      this._headersReceivedCapability = createPromiseCapability();
      this._disableRange = source.disableRange || false;
      this._contentLength = source.length; // Optional

      this._rangeChunkSize = source.rangeChunkSize;

      if (!this._rangeChunkSize && !this._disableRange) {
        this._disableRange = true;
      }

      this._isStreamingSupported = false;
      this._isRangeSupported = false;
      this._cachedChunks = [];
      this._requests = [];
      this._done = false;
      this._storedError = undefined;
      this._filename = null;
      this.onProgress = null;
    }

    _createClass(PDFNetworkStreamFullRequestReader, [{
      key: "_onHeadersReceived",
      value: function _onHeadersReceived() {
        var fullRequestXhrId = this._fullRequestId;

        var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);

        var getResponseHeader = function getResponseHeader(name) {
          return fullRequestXhr.getResponseHeader(name);
        };

        var _validateRangeRequest = validateRangeRequestCapabilities({
          getResponseHeader: getResponseHeader,
          isHttp: this._manager.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange
        }),
            allowRangeRequests = _validateRangeRequest.allowRangeRequests,
            suggestedLength = _validateRangeRequest.suggestedLength;

        if (allowRangeRequests) {
          this._isRangeSupported = true;
        } // Setting right content length.


        this._contentLength = suggestedLength || this._contentLength;
        this._filename = extractFilenameFromHeader(getResponseHeader);

        if (this._isRangeSupported) {
          // NOTE: by cancelling the full request, and then issuing range
          // requests, there will be an issue for sites where you can only
          // request the pdf once. However, if this is the case, then the
          // server should not be returning that it can support range requests.
          this._manager.abortRequest(fullRequestXhrId);
        }

        this._headersReceivedCapability.resolve();
      }
    }, {
      key: "_onDone",
      value: function _onDone(args) {
        if (args) {
          if (this._requests.length > 0) {
            var requestCapability = this._requests.shift();

            requestCapability.resolve({
              value: args.chunk,
              done: false
            });
          } else {
            this._cachedChunks.push(args.chunk);
          }
        }

        this._done = true;

        if (this._cachedChunks.length > 0) {
          return;
        }

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];
      }
    }, {
      key: "_onError",
      value: function _onError(status) {
        var url = this._url;
        var exception = createResponseStatusError(status, url);
        this._storedError = exception;

        this._headersReceivedCapability.reject(exception);

        this._requests.forEach(function (requestCapability) {
          requestCapability.reject(exception);
        });

        this._requests = [];
        this._cachedChunks = [];
      }
    }, {
      key: "_onProgress",
      value: function _onProgress(data) {
        if (this.onProgress) {
          this.onProgress({
            loaded: data.loaded,
            total: data.lengthComputable ? data.total : this._contentLength
          });
        }
      }
    }, {
      key: "read",
      value: function () {
        var _read = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var chunk, requestCapability;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!this._storedError) {
                    _context.next = 2;
                    break;
                  }

                  throw this._storedError;

                case 2:
                  if (!(this._cachedChunks.length > 0)) {
                    _context.next = 5;
                    break;
                  }

                  chunk = this._cachedChunks.shift();
                  return _context.abrupt("return", {
                    value: chunk,
                    done: false
                  });

                case 5:
                  if (!this._done) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", {
                    value: undefined,
                    done: true
                  });

                case 7:
                  requestCapability = createPromiseCapability();

                  this._requests.push(requestCapability);

                  return _context.abrupt("return", requestCapability.promise);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function read() {
          return _read.apply(this, arguments);
        }

        return read;
      }()
    }, {
      key: "cancel",
      value: function cancel(reason) {
        this._done = true;

        this._headersReceivedCapability.reject(reason);

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];

        if (this._manager.isPendingRequest(this._fullRequestId)) {
          this._manager.abortRequest(this._fullRequestId);
        }

        this._fullRequestReader = null;
      }
    }, {
      key: "filename",
      get: function get() {
        return this._filename;
      }
    }, {
      key: "isRangeSupported",
      get: function get() {
        return this._isRangeSupported;
      }
    }, {
      key: "isStreamingSupported",
      get: function get() {
        return this._isStreamingSupported;
      }
    }, {
      key: "contentLength",
      get: function get() {
        return this._contentLength;
      }
    }, {
      key: "headersReady",
      get: function get() {
        return this._headersReceivedCapability.promise;
      }
    }]);

    return PDFNetworkStreamFullRequestReader;
  }();
  /** @implements {IPDFStreamRangeReader} */


  var PDFNetworkStreamRangeRequestReader =
  /*#__PURE__*/
  function () {
    function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
      _classCallCheck(this, PDFNetworkStreamRangeRequestReader);

      this._manager = manager;
      var args = {
        onDone: this._onDone.bind(this),
        onProgress: this._onProgress.bind(this)
      };
      this._requestId = manager.requestRange(begin, end, args);
      this._requests = [];
      this._queuedChunk = null;
      this._done = false;
      this.onProgress = null;
      this.onClosed = null;
    }

    _createClass(PDFNetworkStreamRangeRequestReader, [{
      key: "_close",
      value: function _close() {
        if (this.onClosed) {
          this.onClosed(this);
        }
      }
    }, {
      key: "_onDone",
      value: function _onDone(data) {
        var chunk = data.chunk;

        if (this._requests.length > 0) {
          var requestCapability = this._requests.shift();

          requestCapability.resolve({
            value: chunk,
            done: false
          });
        } else {
          this._queuedChunk = chunk;
        }

        this._done = true;

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];

        this._close();
      }
    }, {
      key: "_onProgress",
      value: function _onProgress(evt) {
        if (!this.isStreamingSupported && this.onProgress) {
          this.onProgress({
            loaded: evt.loaded
          });
        }
      }
    }, {
      key: "read",
      value: function () {
        var _read2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var chunk, requestCapability;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this._queuedChunk !== null)) {
                    _context2.next = 4;
                    break;
                  }

                  chunk = this._queuedChunk;
                  this._queuedChunk = null;
                  return _context2.abrupt("return", {
                    value: chunk,
                    done: false
                  });

                case 4:
                  if (!this._done) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return", {
                    value: undefined,
                    done: true
                  });

                case 6:
                  requestCapability = createPromiseCapability();

                  this._requests.push(requestCapability);

                  return _context2.abrupt("return", requestCapability.promise);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function read() {
          return _read2.apply(this, arguments);
        }

        return read;
      }()
    }, {
      key: "cancel",
      value: function cancel(reason) {
        this._done = true;

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];

        if (this._manager.isPendingRequest(this._requestId)) {
          this._manager.abortRequest(this._requestId);
        }

        this._close();
      }
    }, {
      key: "isStreamingSupported",
      get: function get() {
        return false;
      }
    }]);

    return PDFNetworkStreamRangeRequestReader;
  }();

  function createFetchOptions(headers, withCredentials, abortController) {
    return {
      method: "GET",
      headers: headers,
      signal: abortController && abortController.signal,
      mode: "cors",
      credentials: withCredentials ? "include" : "same-origin",
      redirect: "follow"
    };
  }

  function createHeaders(httpHeaders) {
    var headers = new Headers();

    for (var property in httpHeaders) {
      var value = httpHeaders[property];

      if (typeof value === "undefined") {
        continue;
      }

      headers.append(property, value);
    }

    return headers;
  }
  /** @implements {IPDFStream} */


  var PDFFetchStream =
  /*#__PURE__*/
  function () {
    function PDFFetchStream(source) {
      _classCallCheck(this, PDFFetchStream);

      this.source = source;
      this.isHttp = /^https?:/i.test(source.url);
      this.httpHeaders = this.isHttp && source.httpHeaders || {};
      this._fullRequestReader = null;
      this._rangeRequestReaders = [];
    }

    _createClass(PDFFetchStream, [{
      key: "getFullReader",
      value: function getFullReader() {
        assert(!this._fullRequestReader);
        this._fullRequestReader = new PDFFetchStreamReader(this);
        return this._fullRequestReader;
      }
    }, {
      key: "getRangeReader",
      value: function getRangeReader(begin, end) {
        if (end <= this._progressiveDataLength) {
          return null;
        }

        var reader = new PDFFetchStreamRangeReader(this, begin, end);

        this._rangeRequestReaders.push(reader);

        return reader;
      }
    }, {
      key: "cancelAllRequests",
      value: function cancelAllRequests(reason) {
        if (this._fullRequestReader) {
          this._fullRequestReader.cancel(reason);
        }

        var readers = this._rangeRequestReaders.slice(0);

        readers.forEach(function (reader) {
          reader.cancel(reason);
        });
      }
    }, {
      key: "_progressiveDataLength",
      get: function get() {
        return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
      }
    }]);

    return PDFFetchStream;
  }();
  /** @implements {IPDFStreamReader} */


  var PDFFetchStreamReader =
  /*#__PURE__*/
  function () {
    function PDFFetchStreamReader(stream) {
      var _this = this;

      _classCallCheck(this, PDFFetchStreamReader);

      this._stream = stream;
      this._reader = null;
      this._loaded = 0;
      this._filename = null;
      var source = stream.source;
      this._withCredentials = source.withCredentials || false;
      this._contentLength = source.length;
      this._headersCapability = createPromiseCapability();
      this._disableRange = source.disableRange || false;
      this._rangeChunkSize = source.rangeChunkSize;

      if (!this._rangeChunkSize && !this._disableRange) {
        this._disableRange = true;
      }

      if (typeof AbortController !== "undefined") {
        this._abortController = new AbortController();
      }

      this._isStreamingSupported = !source.disableStream;
      this._isRangeSupported = !source.disableRange;
      this._headers = createHeaders(this._stream.httpHeaders);
      var url = source.url;
      fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
        if (!validateResponseStatus(response.status)) {
          throw createResponseStatusError(response.status, url);
        }

        _this._reader = response.body.getReader();

        _this._headersCapability.resolve();

        var getResponseHeader = function getResponseHeader(name) {
          return response.headers.get(name);
        };

        var _validateRangeRequest = validateRangeRequestCapabilities({
          getResponseHeader: getResponseHeader,
          isHttp: _this._stream.isHttp,
          rangeChunkSize: _this._rangeChunkSize,
          disableRange: _this._disableRange
        }),
            allowRangeRequests = _validateRangeRequest.allowRangeRequests,
            suggestedLength = _validateRangeRequest.suggestedLength;

        _this._isRangeSupported = allowRangeRequests; // Setting right content length.

        _this._contentLength = suggestedLength || _this._contentLength;
        _this._filename = extractFilenameFromHeader(getResponseHeader); // We need to stop reading when range is supported and streaming is
        // disabled.

        if (!_this._isStreamingSupported && _this._isRangeSupported) {
          _this.cancel(new AbortException("Streaming is disabled."));
        }
      }).catch(this._headersCapability.reject);
      this.onProgress = null;
    }

    _createClass(PDFFetchStreamReader, [{
      key: "read",
      value: function () {
        var _read = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _ref, value, done, buffer;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._headersCapability.promise;

                case 2:
                  _context.next = 4;
                  return this._reader.read();

                case 4:
                  _ref = _context.sent;
                  value = _ref.value;
                  done = _ref.done;

                  if (!done) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", {
                    value: value,
                    done: done
                  });

                case 9:
                  this._loaded += value.byteLength;

                  if (this.onProgress) {
                    this.onProgress({
                      loaded: this._loaded,
                      total: this._contentLength
                    });
                  }

                  buffer = new Uint8Array(value).buffer;
                  return _context.abrupt("return", {
                    value: buffer,
                    done: false
                  });

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function read() {
          return _read.apply(this, arguments);
        }

        return read;
      }()
    }, {
      key: "cancel",
      value: function cancel(reason) {
        if (this._reader) {
          this._reader.cancel(reason);
        }

        if (this._abortController) {
          this._abortController.abort();
        }
      }
    }, {
      key: "headersReady",
      get: function get() {
        return this._headersCapability.promise;
      }
    }, {
      key: "filename",
      get: function get() {
        return this._filename;
      }
    }, {
      key: "contentLength",
      get: function get() {
        return this._contentLength;
      }
    }, {
      key: "isRangeSupported",
      get: function get() {
        return this._isRangeSupported;
      }
    }, {
      key: "isStreamingSupported",
      get: function get() {
        return this._isStreamingSupported;
      }
    }]);

    return PDFFetchStreamReader;
  }();
  /** @implements {IPDFStreamRangeReader} */


  var PDFFetchStreamRangeReader =
  /*#__PURE__*/
  function () {
    function PDFFetchStreamRangeReader(stream, begin, end) {
      var _this2 = this;

      _classCallCheck(this, PDFFetchStreamRangeReader);

      this._stream = stream;
      this._reader = null;
      this._loaded = 0;
      var source = stream.source;
      this._withCredentials = source.withCredentials || false;
      this._readCapability = createPromiseCapability();
      this._isStreamingSupported = !source.disableStream;

      if (typeof AbortController !== "undefined") {
        this._abortController = new AbortController();
      }

      this._headers = createHeaders(this._stream.httpHeaders);

      this._headers.append("Range", "bytes=".concat(begin, "-").concat(end - 1));

      var url = source.url;
      fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
        if (!validateResponseStatus(response.status)) {
          throw createResponseStatusError(response.status, url);
        }

        _this2._readCapability.resolve();

        _this2._reader = response.body.getReader();
      });
      this.onProgress = null;
    }

    _createClass(PDFFetchStreamRangeReader, [{
      key: "read",
      value: function () {
        var _read2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var _ref2, value, done, buffer;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._readCapability.promise;

                case 2:
                  _context2.next = 4;
                  return this._reader.read();

                case 4:
                  _ref2 = _context2.sent;
                  value = _ref2.value;
                  done = _ref2.done;

                  if (!done) {
                    _context2.next = 9;
                    break;
                  }

                  return _context2.abrupt("return", {
                    value: value,
                    done: done
                  });

                case 9:
                  this._loaded += value.byteLength;

                  if (this.onProgress) {
                    this.onProgress({
                      loaded: this._loaded
                    });
                  }

                  buffer = new Uint8Array(value).buffer;
                  return _context2.abrupt("return", {
                    value: buffer,
                    done: false
                  });

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function read() {
          return _read2.apply(this, arguments);
        }

        return read;
      }()
    }, {
      key: "cancel",
      value: function cancel(reason) {
        if (this._reader) {
          this._reader.cancel(reason);
        }

        if (this._abortController) {
          this._abortController.abort();
        }
      }
    }, {
      key: "isStreamingSupported",
      get: function get() {
        return this._isStreamingSupported;
      }
    }]);

    return PDFFetchStreamRangeReader;
  }();

  var BaseFontLoader =
  /*#__PURE__*/
  function () {
    function BaseFontLoader(_ref) {
      var docId = _ref.docId,
          onUnsupportedFeature = _ref.onUnsupportedFeature;

      _classCallCheck(this, BaseFontLoader);

      if (this.constructor === BaseFontLoader) {
        unreachable("Cannot initialize BaseFontLoader.");
      }

      this.docId = docId;
      this._onUnsupportedFeature = onUnsupportedFeature;
      this.nativeFontFaces = [];
      this.styleElement = null;
    }

    _createClass(BaseFontLoader, [{
      key: "addNativeFontFace",
      value: function addNativeFontFace(nativeFontFace) {
        this.nativeFontFaces.push(nativeFontFace);
        document.fonts.add(nativeFontFace);
      }
    }, {
      key: "insertRule",
      value: function insertRule(rule) {
        var styleElement = this.styleElement;

        if (!styleElement) {
          styleElement = this.styleElement = document.createElement("style");
          styleElement.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
          document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
        }

        var styleSheet = styleElement.sheet;
        styleSheet.insertRule(rule, styleSheet.cssRules.length);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.nativeFontFaces.forEach(function (nativeFontFace) {
          document.fonts.delete(nativeFontFace);
        });
        this.nativeFontFaces.length = 0;

        if (this.styleElement) {
          // Note: ChildNode.remove doesn't throw if the parentNode is undefined.
          this.styleElement.remove();
          this.styleElement = null;
        }
      }
    }, {
      key: "bind",
      value: function () {
        var _bind = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(font) {
          var _this = this;

          var nativeFontFace, rule;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(font.attached || font.missingFile)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", undefined);

                case 2:
                  font.attached = true;

                  if (!this.isFontLoadingAPISupported) {
                    _context.next = 19;
                    break;
                  }

                  nativeFontFace = font.createNativeFontFace();

                  if (!nativeFontFace) {
                    _context.next = 18;
                    break;
                  }

                  this.addNativeFontFace(nativeFontFace);
                  _context.prev = 7;
                  _context.next = 10;
                  return nativeFontFace.loaded;

                case 10:
                  _context.next = 18;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](7);

                  this._onUnsupportedFeature({
                    featureId: UNSUPPORTED_FEATURES.font
                  });

                  warn("Failed to load font '".concat(nativeFontFace.family, "': '").concat(_context.t0, "'.")); // When font loading failed, fall back to the built-in font renderer.

                  font.disableFontFace = true;
                  throw _context.t0;

                case 18:
                  return _context.abrupt("return", undefined);

                case 19:
                  // !this.isFontLoadingAPISupported
                  rule = font.createFontFaceRule();

                  if (!rule) {
                    _context.next = 25;
                    break;
                  }

                  this.insertRule(rule);

                  if (!this.isSyncFontLoadingSupported) {
                    _context.next = 24;
                    break;
                  }

                  return _context.abrupt("return", undefined);

                case 24:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    var request = _this._queueLoadingCallback(resolve);

                    _this._prepareFontLoadEvent([rule], [font], request);
                  }));

                case 25:
                  return _context.abrupt("return", undefined);

                case 26:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[7, 12]]);
        }));

        function bind(_x) {
          return _bind.apply(this, arguments);
        }

        return bind;
      }()
    }, {
      key: "_queueLoadingCallback",
      value: function _queueLoadingCallback(callback) {
        unreachable("Abstract method `_queueLoadingCallback`.");
      } // eslint-disable-next-line getter-return

    }, {
      key: "_prepareFontLoadEvent",
      value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
        unreachable("Abstract method `_prepareFontLoadEvent`.");
      }
    }, {
      key: "isFontLoadingAPISupported",
      get: function get() {
        unreachable("Abstract method `isFontLoadingAPISupported`.");
      } // eslint-disable-next-line getter-return

    }, {
      key: "isSyncFontLoadingSupported",
      get: function get() {
        unreachable("Abstract method `isSyncFontLoadingSupported`.");
      } // eslint-disable-next-line getter-return

    }, {
      key: "_loadTestFont",
      get: function get() {
        unreachable("Abstract method `_loadTestFont`.");
      }
    }]);

    return BaseFontLoader;
  }();

  var FontLoader;

  if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("MOZCENTRAL")) {
    FontLoader =
    /*#__PURE__*/
    function (_BaseFontLoader) {
      _inherits(MozcentralFontLoader, _BaseFontLoader);

      function MozcentralFontLoader() {
        _classCallCheck(this, MozcentralFontLoader);

        return _possibleConstructorReturn(this, _getPrototypeOf(MozcentralFontLoader).apply(this, arguments));
      }

      _createClass(MozcentralFontLoader, [{
        key: "isFontLoadingAPISupported",
        get: function get() {
          return shadow(this, "isFontLoadingAPISupported", typeof document !== "undefined" && !!document.fonts);
        }
      }, {
        key: "isSyncFontLoadingSupported",
        get: function get() {
          return shadow(this, "isSyncFontLoadingSupported", true);
        }
      }]);

      return MozcentralFontLoader;
    }(BaseFontLoader);
  } else {
    // PDFJSDev.test('CHROME || GENERIC')
    FontLoader =
    /*#__PURE__*/
    function (_BaseFontLoader2) {
      _inherits(GenericFontLoader, _BaseFontLoader2);

      function GenericFontLoader(docId) {
        var _this2;

        _classCallCheck(this, GenericFontLoader);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(GenericFontLoader).call(this, docId));
        _this2.loadingContext = {
          requests: [],
          nextRequestId: 0
        };
        _this2.loadTestFontId = 0;
        return _this2;
      }

      _createClass(GenericFontLoader, [{
        key: "_queueLoadingCallback",
        value: function _queueLoadingCallback(callback) {
          function completeRequest() {
            assert(!request.done, "completeRequest() cannot be called twice.");
            request.done = true; // Sending all completed requests in order of how they were queued.

            while (context.requests.length > 0 && context.requests[0].done) {
              var otherRequest = context.requests.shift();
              setTimeout(otherRequest.callback, 0);
            }
          }

          var context = this.loadingContext;
          var request = {
            id: "pdfjs-font-loading-".concat(context.nextRequestId++),
            done: false,
            complete: completeRequest,
            callback: callback
          };
          context.requests.push(request);
          return request;
        }
      }, {
        key: "_prepareFontLoadEvent",
        value: function _prepareFontLoadEvent(rules, fonts, request) {
          /** Hack begin */
          // There's currently no event when a font has finished downloading so the
          // following code is a dirty hack to 'guess' when a font is ready.
          // It's assumed fonts are loaded in order, so add a known test font after
          // the desired fonts and then test for the loading of that test font.
          function int32(data, offset) {
            return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
          }

          function spliceString(s, offset, remove, insert) {
            var chunk1 = s.substring(0, offset);
            var chunk2 = s.substring(offset + remove);
            return chunk1 + insert + chunk2;
          }

          var i, ii; // The temporary canvas is used to determine if fonts are loaded.

          var canvas = document.createElement("canvas");
          canvas.width = 1;
          canvas.height = 1;
          var ctx = canvas.getContext("2d");
          var called = 0;

          function isFontReady(name, callback) {
            called++; // With setTimeout clamping this gives the font ~100ms to load.

            if (called > 30) {
              warn("Load test font never loaded.");
              callback();
              return;
            }

            ctx.font = "30px " + name;
            ctx.fillText(".", 0, 20);
            var imageData = ctx.getImageData(0, 0, 1, 1);

            if (imageData.data[3] > 0) {
              callback();
              return;
            }

            setTimeout(isFontReady.bind(null, name, callback));
          }

          var loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++); // Chromium seems to cache fonts based on a hash of the actual font data,
          // so the font must be modified for each load test else it will appear to
          // be loaded already.
          // TODO: This could maybe be made faster by avoiding the btoa of the full
          // font by splitting it in chunks before hand and padding the font id.

          var data = this._loadTestFont;
          var COMMENT_OFFSET = 976; // has to be on 4 byte boundary (for checksum)

          data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId); // CFF checksum is important for IE, adjusting it

          var CFF_CHECKSUM_OFFSET = 16;
          var XXXX_VALUE = 0x58585858; // the "comment" filled with 'X'

          var checksum = int32(data, CFF_CHECKSUM_OFFSET);

          for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
            checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
          }

          if (i < loadTestFontId.length) {
            // align to 4 bytes boundary
            checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
          }

          data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
          var url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
          var rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
          this.insertRule(rule);
          var names = [];

          for (i = 0, ii = fonts.length; i < ii; i++) {
            names.push(fonts[i].loadedName);
          }

          names.push(loadTestFontId);
          var div = document.createElement("div");
          div.setAttribute("style", "visibility: hidden;" + "width: 10px; height: 10px;" + "position: absolute; top: 0px; left: 0px;");

          for (i = 0, ii = names.length; i < ii; ++i) {
            var span = document.createElement("span");
            span.textContent = "Hi";
            span.style.fontFamily = names[i];
            div.appendChild(span);
          }

          document.body.appendChild(div);
          isFontReady(loadTestFontId, function () {
            document.body.removeChild(div);
            request.complete();
          });
          /** Hack end */
        }
      }, {
        key: "isFontLoadingAPISupported",
        get: function get() {
          var supported = typeof document !== "undefined" && !!document.fonts;

          if ((typeof PDFJSDev === "undefined" || !PDFJSDev.test("CHROME")) && supported && typeof navigator !== "undefined") {
            // The Firefox Font Loading API does not work with `mozPrintCallback`
            // prior to version 63; see https://bugzilla.mozilla.org/show_bug.cgi?id=1473742
            var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

            if (m && m[1] < 63) {
              supported = false;
            }
          }

          return shadow(this, "isFontLoadingAPISupported", supported);
        }
      }, {
        key: "isSyncFontLoadingSupported",
        get: function get() {
          var supported = false;

          if (typeof PDFJSDev === "undefined" || !PDFJSDev.test("CHROME")) {
            if (typeof navigator === "undefined") {
              // Node.js - we can pretend that sync font loading is supported.
              supported = true;
            } else {
              // User agent string sniffing is bad, but there is no reliable way to
              // tell if the font is fully loaded and ready to be used with canvas.
              var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

              if (m && m[1] >= 14) {
                supported = true;
              } // TODO - other browsers...

            }
          }

          return shadow(this, "isSyncFontLoadingSupported", supported);
        }
      }, {
        key: "_loadTestFont",
        get: function get() {
          var getLoadTestFont = function getLoadTestFont() {
            // This is a CFF font with 1 glyph for '.' that fills its entire width
            // and height.
            return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
          };

          return shadow(this, "_loadTestFont", getLoadTestFont());
        }
      }]);

      return GenericFontLoader;
    }(BaseFontLoader);
  } // End of PDFJSDev.test('CHROME || GENERIC')


  var IsEvalSupportedCached = {
    get value() {
      return shadow(this, "value", isEvalSupported());
    }

  };

  var FontFaceObject =
  /*#__PURE__*/
  function () {
    function FontFaceObject(translatedData, _ref2) {
      var _ref2$isEvalSupported = _ref2.isEvalSupported,
          isEvalSupported = _ref2$isEvalSupported === void 0 ? true : _ref2$isEvalSupported,
          _ref2$disableFontFace = _ref2.disableFontFace,
          disableFontFace = _ref2$disableFontFace === void 0 ? false : _ref2$disableFontFace,
          _ref2$ignoreErrors = _ref2.ignoreErrors,
          ignoreErrors = _ref2$ignoreErrors === void 0 ? false : _ref2$ignoreErrors,
          _ref2$onUnsupportedFe = _ref2.onUnsupportedFeature,
          onUnsupportedFeature = _ref2$onUnsupportedFe === void 0 ? null : _ref2$onUnsupportedFe,
          _ref2$fontRegistry = _ref2.fontRegistry,
          fontRegistry = _ref2$fontRegistry === void 0 ? null : _ref2$fontRegistry;

      _classCallCheck(this, FontFaceObject);

      this.compiledGlyphs = Object.create(null); // importing translated data

      for (var i in translatedData) {
        this[i] = translatedData[i];
      }

      this.isEvalSupported = isEvalSupported !== false;
      this.disableFontFace = disableFontFace === true;
      this.ignoreErrors = ignoreErrors === true;
      this._onUnsupportedFeature = onUnsupportedFeature;
      this.fontRegistry = fontRegistry;
    }

    _createClass(FontFaceObject, [{
      key: "createNativeFontFace",
      value: function createNativeFontFace() {
        if (!this.data || this.disableFontFace) {
          return null;
        }

        var nativeFontFace = new FontFace(this.loadedName, this.data, {});

        if (this.fontRegistry) {
          this.fontRegistry.registerFont(this);
        }

        return nativeFontFace;
      }
    }, {
      key: "createFontFaceRule",
      value: function createFontFaceRule() {
        if (!this.data || this.disableFontFace) {
          return null;
        }

        var data = bytesToString(new Uint8Array(this.data)); // Add the @font-face rule to the document.

        var url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
        var rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");

        if (this.fontRegistry) {
          this.fontRegistry.registerFont(this, url);
        }

        return rule;
      }
    }, {
      key: "getPathGenerator",
      value: function getPathGenerator(objs, character) {
        if (this.compiledGlyphs[character] !== undefined) {
          return this.compiledGlyphs[character];
        }

        var cmds, current;

        try {
          cmds = objs.get(this.loadedName + "_path_" + character);
        } catch (ex) {
          if (!this.ignoreErrors) {
            throw ex;
          }

          if (this._onUnsupportedFeature) {
            this._onUnsupportedFeature({
              featureId: UNSUPPORTED_FEATURES.font
            });
          }

          warn("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
          return this.compiledGlyphs[character] = function (c, size) {// No-op function, to allow rendering to continue.
          };
        } // If we can, compile cmds into JS for MAXIMUM SPEED...


        if (this.isEvalSupported && IsEvalSupportedCached.value) {
          var args,
              js = "";

          for (var i = 0, ii = cmds.length; i < ii; i++) {
            current = cmds[i];

            if (current.args !== undefined) {
              args = current.args.join(",");
            } else {
              args = "";
            }

            js += "c." + current.cmd + "(" + args + ");\n";
          } // eslint-disable-next-line no-new-func


          return this.compiledGlyphs[character] = new Function("c", "size", js);
        } // ... but fall back on using Function.prototype.apply() if we're
        // blocked from using eval() for whatever reason (like CSP policies).


        return this.compiledGlyphs[character] = function (c, size) {
          for (var _i = 0, _ii = cmds.length; _i < _ii; _i++) {
            current = cmds[_i];

            if (current.cmd === "scale") {
              current.args = [size, -size];
            }

            c[current.cmd].apply(c, current.args);
          }
        };
      }
    }]);

    return FontFaceObject;
  }();

  /* Copyright 2018 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* globals process */
  // NW.js / Electron is a browser context, but copies some Node.js objects; see
  // http://docs.nwjs.io/en/latest/For%20Users/Advanced/JavaScript%20Contexts%20in%20NW.js/#access-nodejs-and-nwjs-api-in-browser-context
  // https://electronjs.org/docs/api/process#processversionselectron
  var isNodeJS = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process + "" === "[object process]" && !process.versions["nw"] && !process.versions["electron"];

  /* Copyright 2018 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var compatibilityParams = Object.create(null);

  if (typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")) {
    var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
    var isIE = /Trident/.test(userAgent);
    var isIOSChrome = /CriOS/.test(userAgent); // Checks if possible to use URL.createObjectURL()
    // Support: IE, Chrome on iOS

    (function checkOnBlobSupport() {
      // Sometimes IE and Chrome on iOS losing the data created with
      // createObjectURL(), see issues #3977 and #8081.
      if (isIE || isIOSChrome) {
        compatibilityParams.disableCreateObjectURL = true;
      }
    })(); // Support: Node.js


    (function checkFontFaceAndImage() {
      // Node.js is missing native support for `@font-face` and `Image`.
      if (isNodeJS) {
        compatibilityParams.disableFontFace = true;
        compatibilityParams.nativeImageDecoderSupport = "none";
      }
    })();
  }

  var apiCompatibilityParams = Object.freeze(compatibilityParams);

  /* Copyright 2014 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ShadingIRs = {};

  function applyBoundingBox(ctx, bbox) {
    if (!bbox || typeof Path2D === "undefined") {
      return;
    }

    var width = bbox[2] - bbox[0];
    var height = bbox[3] - bbox[1];
    var region = new Path2D();
    region.rect(bbox[0], bbox[1], width, height);
    ctx.clip(region);
  }

  ShadingIRs.RadialAxial = {
    fromIR: function RadialAxial_fromIR(raw) {
      var type = raw[1];
      var bbox = raw[2];
      var colorStops = raw[3];
      var p0 = raw[4];
      var p1 = raw[5];
      var r0 = raw[6];
      var r1 = raw[7];
      return {
        type: "Pattern",
        getPattern: function RadialAxial_getPattern(ctx) {
          applyBoundingBox(ctx, bbox);
          var grad;

          if (type === "axial") {
            grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
          } else if (type === "radial") {
            grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
          }

          for (var i = 0, ii = colorStops.length; i < ii; ++i) {
            var c = colorStops[i];
            grad.addColorStop(c[0], c[1]);
          }

          return grad;
        }
      };
    }
  };

  var createMeshCanvas = function createMeshCanvasClosure() {
    function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
      // Very basic Gouraud-shaded triangle rasterization algorithm.
      var coords = context.coords,
          colors = context.colors;
      var bytes = data.data,
          rowSize = data.width * 4;
      var tmp;

      if (coords[p1 + 1] > coords[p2 + 1]) {
        tmp = p1;
        p1 = p2;
        p2 = tmp;
        tmp = c1;
        c1 = c2;
        c2 = tmp;
      }

      if (coords[p2 + 1] > coords[p3 + 1]) {
        tmp = p2;
        p2 = p3;
        p3 = tmp;
        tmp = c2;
        c2 = c3;
        c3 = tmp;
      }

      if (coords[p1 + 1] > coords[p2 + 1]) {
        tmp = p1;
        p1 = p2;
        p2 = tmp;
        tmp = c1;
        c1 = c2;
        c2 = tmp;
      }

      var x1 = (coords[p1] + context.offsetX) * context.scaleX;
      var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
      var x2 = (coords[p2] + context.offsetX) * context.scaleX;
      var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
      var x3 = (coords[p3] + context.offsetX) * context.scaleX;
      var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;

      if (y1 >= y3) {
        return;
      }

      var c1r = colors[c1],
          c1g = colors[c1 + 1],
          c1b = colors[c1 + 2];
      var c2r = colors[c2],
          c2g = colors[c2 + 1],
          c2b = colors[c2 + 2];
      var c3r = colors[c3],
          c3g = colors[c3 + 1],
          c3b = colors[c3 + 2];
      var minY = Math.round(y1),
          maxY = Math.round(y3);
      var xa, car, cag, cab;
      var xb, cbr, cbg, cbb;
      var k;

      for (var y = minY; y <= maxY; y++) {
        if (y < y2) {
          k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
          xa = x1 - (x1 - x2) * k;
          car = c1r - (c1r - c2r) * k;
          cag = c1g - (c1g - c2g) * k;
          cab = c1b - (c1b - c2b) * k;
        } else {
          k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
          xa = x2 - (x2 - x3) * k;
          car = c2r - (c2r - c3r) * k;
          cag = c2g - (c2g - c3g) * k;
          cab = c2b - (c2b - c3b) * k;
        }

        k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
        xb = x1 - (x1 - x3) * k;
        cbr = c1r - (c1r - c3r) * k;
        cbg = c1g - (c1g - c3g) * k;
        cbb = c1b - (c1b - c3b) * k;
        var x1_ = Math.round(Math.min(xa, xb));
        var x2_ = Math.round(Math.max(xa, xb));
        var j = rowSize * y + x1_ * 4;

        for (var x = x1_; x <= x2_; x++) {
          k = (xa - x) / (xa - xb);
          k = k < 0 ? 0 : k > 1 ? 1 : k;
          bytes[j++] = car - (car - cbr) * k | 0;
          bytes[j++] = cag - (cag - cbg) * k | 0;
          bytes[j++] = cab - (cab - cbb) * k | 0;
          bytes[j++] = 255;
        }
      }
    }

    function drawFigure(data, figure, context) {
      var ps = figure.coords;
      var cs = figure.colors;
      var i, ii;

      switch (figure.type) {
        case "lattice":
          var verticesPerRow = figure.verticesPerRow;
          var rows = Math.floor(ps.length / verticesPerRow) - 1;
          var cols = verticesPerRow - 1;

          for (i = 0; i < rows; i++) {
            var q = i * verticesPerRow;

            for (var j = 0; j < cols; j++, q++) {
              drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
              drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
            }
          }

          break;

        case "triangles":
          for (i = 0, ii = ps.length; i < ii; i += 3) {
            drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
          }

          break;

        default:
          throw new Error("illegal figure");
      }
    }

    function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
      // we will increase scale on some weird factor to let antialiasing take
      // care of "rough" edges
      var EXPECTED_SCALE = 1.1; // MAX_PATTERN_SIZE is used to avoid OOM situation.

      var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough
      // We need to keep transparent border around our pattern for fill():
      // createPattern with 'no-repeat' will bleed edges across entire area.

      var BORDER_SIZE = 2;
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var boundsWidth = Math.ceil(bounds[2]) - offsetX;
      var boundsHeight = Math.ceil(bounds[3]) - offsetY;
      var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
      var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
      var scaleX = boundsWidth / width;
      var scaleY = boundsHeight / height;
      var context = {
        coords: coords,
        colors: colors,
        offsetX: -offsetX,
        offsetY: -offsetY,
        scaleX: 1 / scaleX,
        scaleY: 1 / scaleY
      };
      var paddedWidth = width + BORDER_SIZE * 2;
      var paddedHeight = height + BORDER_SIZE * 2;
      var canvas, tmpCanvas, i, ii;

      if (webGLContext.isEnabled) {
        canvas = webGLContext.drawFigures({
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          figures: figures,
          context: context
        }); // https://bugzilla.mozilla.org/show_bug.cgi?id=972126

        tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
        tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
        canvas = tmpCanvas.canvas;
      } else {
        tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
        var tmpCtx = tmpCanvas.context;
        var data = tmpCtx.createImageData(width, height);

        if (backgroundColor) {
          var bytes = data.data;

          for (i = 0, ii = bytes.length; i < ii; i += 4) {
            bytes[i] = backgroundColor[0];
            bytes[i + 1] = backgroundColor[1];
            bytes[i + 2] = backgroundColor[2];
            bytes[i + 3] = 255;
          }
        }

        for (i = 0; i < figures.length; i++) {
          drawFigure(data, figures[i], context);
        }

        tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
        canvas = tmpCanvas.canvas;
      }

      return {
        canvas: canvas,
        offsetX: offsetX - BORDER_SIZE * scaleX,
        offsetY: offsetY - BORDER_SIZE * scaleY,
        scaleX: scaleX,
        scaleY: scaleY
      };
    }

    return createMeshCanvas;
  }();

  ShadingIRs.Mesh = {
    fromIR: function Mesh_fromIR(raw) {
      // var type = raw[1];
      var coords = raw[2];
      var colors = raw[3];
      var figures = raw[4];
      var bounds = raw[5];
      var matrix = raw[6];
      var bbox = raw[7];
      var background = raw[8];
      return {
        type: "Pattern",
        getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
          applyBoundingBox(ctx, bbox);
          var scale;

          if (shadingFill) {
            scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
          } else {
            // Obtain scale from matrix and current transformation matrix.
            scale = Util.singularValueDecompose2dScale(owner.baseTransform);

            if (matrix) {
              var matrixScale = Util.singularValueDecompose2dScale(matrix);
              scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
            }
          } // Rasterizing on the main thread since sending/queue large canvases
          // might cause OOM.


          var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);

          if (!shadingFill) {
            ctx.setTransform.apply(ctx, owner.baseTransform);

            if (matrix) {
              ctx.transform.apply(ctx, matrix);
            }
          }

          ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
          ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
          return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
        }
      };
    }
  };
  ShadingIRs.Dummy = {
    fromIR: function Dummy_fromIR() {
      return {
        type: "Pattern",
        getPattern: function Dummy_fromIR_getPattern() {
          return "hotpink";
        }
      };
    }
  };

  function getShadingPatternFromIR(raw) {
    var shadingIR = ShadingIRs[raw[0]];

    if (!shadingIR) {
      throw new Error("Unknown IR type: ".concat(raw[0]));
    }

    return shadingIR.fromIR(raw);
  }

  var TilingPattern = function TilingPatternClosure() {
    var PaintType = {
      COLORED: 1,
      UNCOLORED: 2
    };
    var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough

    function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
      this.operatorList = IR[2];
      this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
      this.bbox = IR[4];
      this.xstep = IR[5];
      this.ystep = IR[6];
      this.paintType = IR[7];
      this.tilingType = IR[8];
      this.color = color;
      this.canvasGraphicsFactory = canvasGraphicsFactory;
      this.baseTransform = baseTransform;
      this.type = "Pattern";
      this.ctx = ctx;
    }

    TilingPattern.prototype = {
      createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
        var operatorList = this.operatorList;
        var bbox = this.bbox;
        var xstep = this.xstep;
        var ystep = this.ystep;
        var paintType = this.paintType;
        var tilingType = this.tilingType;
        var color = this.color;
        var canvasGraphicsFactory = this.canvasGraphicsFactory;
        info("TilingType: " + tilingType); // A tiling pattern as defined by PDF spec 8.7.2 is a cell whose size is
        // described by bbox, and may repeat regularly by shifting the cell by
        // xstep and ystep.
        // Because the HTML5 canvas API does not support pattern repetition with
        // gaps in between, we use the xstep/ystep instead of the bbox's size.
        //
        // This has the following consequences (similarly for ystep):
        //
        // - If xstep is the same as bbox, then there is no observable difference.
        //
        // - If xstep is larger than bbox, then the pattern canvas is partially
        //   empty: the area bounded by bbox is painted, the outside area is void.
        //
        // - If xstep is smaller than bbox, then the pixels between xstep and the
        //   bbox boundary will be missing. This is INCORRECT behavior.
        //   "Figures on adjacent tiles should not overlap" (PDF spec 8.7.3.1),
        //   but overlapping cells without common pixels are still valid.
        //   TODO: Fix the implementation, to allow this scenario to be painted
        //   correctly.

        var x0 = bbox[0],
            y0 = bbox[1],
            x1 = bbox[2],
            y1 = bbox[3]; // Obtain scale from matrix and current transformation matrix.

        var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
        var curMatrixScale = Util.singularValueDecompose2dScale(this.baseTransform);
        var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]]; // Use width and height values that are as close as possible to the end
        // result when the pattern is used. Too low value makes the pattern look
        // blurry. Too large value makes it look too crispy.

        var dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
        var dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
        var tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
        var tmpCtx = tmpCanvas.context;
        var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
        graphics.groupLevel = owner.groupLevel;
        this.setFillAndStrokeStyleToContext(graphics, paintType, color);
        graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0); // transform coordinates to pattern space

        graphics.transform(1, 0, 0, 1, -x0, -y0);
        this.clipBbox(graphics, bbox, x0, y0, x1, y1);
        graphics.executeOperatorList(operatorList);
        this.ctx.transform(1, 0, 0, 1, x0, y0); // Rescale canvas so that the ctx.createPattern call generates a pattern
        // with the desired size.

        this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
        return tmpCanvas.canvas;
      },
      getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
        // xstep / ystep may be negative -- normalize.
        step = Math.abs(step); // MAX_PATTERN_SIZE is used to avoid OOM situation.
        // Use the destination canvas's size if it is bigger than the hard-coded
        // limit of MAX_PATTERN_SIZE to avoid clipping patterns that cover the
        // whole canvas.

        var maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
        var size = Math.ceil(step * scale);

        if (size >= maxSize) {
          size = maxSize;
        } else {
          scale = size / step;
        }

        return {
          scale: scale,
          size: size
        };
      },
      clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
        if (Array.isArray(bbox) && bbox.length === 4) {
          var bboxWidth = x1 - x0;
          var bboxHeight = y1 - y0;
          graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
          graphics.clip();
          graphics.endPath();
        }
      },
      setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
        var context = graphics.ctx,
            current = graphics.current;

        switch (paintType) {
          case PaintType.COLORED:
            var ctx = this.ctx;
            context.fillStyle = ctx.fillStyle;
            context.strokeStyle = ctx.strokeStyle;
            current.fillColor = ctx.fillStyle;
            current.strokeColor = ctx.strokeStyle;
            break;

          case PaintType.UNCOLORED:
            var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
            context.fillStyle = cssColor;
            context.strokeStyle = cssColor; // Set color needed by image masks (fixes issues 3226 and 8741).

            current.fillColor = cssColor;
            current.strokeColor = cssColor;
            break;

          default:
            throw new FormatError("Unsupported paint type: ".concat(paintType));
        }
      },
      getPattern: function TilingPattern_getPattern(ctx, owner) {
        ctx = this.ctx; // PDF spec 8.7.2 NOTE 1: pattern's matrix is relative to initial matrix.

        ctx.setTransform.apply(ctx, this.baseTransform);
        ctx.transform.apply(ctx, this.matrix);
        var temporaryPatternCanvas = this.createPatternCanvas(owner);
        return ctx.createPattern(temporaryPatternCanvas, "repeat");
      }
    };
    return TilingPattern;
  }();

  /* Copyright 2012 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // However, PDF needs a bit more state, which we store here.
  // Minimal font size that would be used during canvas fillText operations.

  var MIN_FONT_SIZE = 16; // Maximum font size that would be used during canvas fillText operations.

  var MAX_FONT_SIZE = 100;
  var MAX_GROUP_SIZE = 4096; // Heuristic value used when enforcing minimum line widths.

  var MIN_WIDTH_FACTOR = 0.65;
  var MAX_SIZE_TO_COMPILE = 1000;
  var FULL_CHUNK_HEIGHT = 16;
  var IsLittleEndianCached = {
    get value() {
      return shadow(IsLittleEndianCached, "value", isLittleEndian());
    }

  };

  function addContextCurrentTransform(ctx) {
    // If the context doesn't expose a `mozCurrentTransform`, add a JS based one.
    if (!ctx.mozCurrentTransform) {
      ctx._originalSave = ctx.save;
      ctx._originalRestore = ctx.restore;
      ctx._originalRotate = ctx.rotate;
      ctx._originalScale = ctx.scale;
      ctx._originalTranslate = ctx.translate;
      ctx._originalTransform = ctx.transform;
      ctx._originalSetTransform = ctx.setTransform;
      ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
      ctx._transformStack = [];
      Object.defineProperty(ctx, "mozCurrentTransform", {
        get: function getCurrentTransform() {
          return this._transformMatrix;
        }
      });
      Object.defineProperty(ctx, "mozCurrentTransformInverse", {
        get: function getCurrentTransformInverse() {
          // Calculation done using WolframAlpha:
          // http://www.wolframalpha.com/input/?
          //   i=Inverse+{{a%2C+c%2C+e}%2C+{b%2C+d%2C+f}%2C+{0%2C+0%2C+1}}
          var m = this._transformMatrix;
          var a = m[0],
              b = m[1],
              c = m[2],
              d = m[3],
              e = m[4],
              f = m[5];
          var ad_bc = a * d - b * c;
          var bc_ad = b * c - a * d;
          return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
        }
      });

      ctx.save = function ctxSave() {
        var old = this._transformMatrix;

        this._transformStack.push(old);

        this._transformMatrix = old.slice(0, 6);

        this._originalSave();
      };

      ctx.restore = function ctxRestore() {
        var prev = this._transformStack.pop();

        if (prev) {
          this._transformMatrix = prev;

          this._originalRestore();
        }
      };

      ctx.translate = function ctxTranslate(x, y) {
        var m = this._transformMatrix;
        m[4] = m[0] * x + m[2] * y + m[4];
        m[5] = m[1] * x + m[3] * y + m[5];

        this._originalTranslate(x, y);
      };

      ctx.scale = function ctxScale(x, y) {
        var m = this._transformMatrix;
        m[0] = m[0] * x;
        m[1] = m[1] * x;
        m[2] = m[2] * y;
        m[3] = m[3] * y;

        this._originalScale(x, y);
      };

      ctx.transform = function ctxTransform(a, b, c, d, e, f) {
        var m = this._transformMatrix;
        this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];

        ctx._originalTransform(a, b, c, d, e, f);
      };

      ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
        this._transformMatrix = [a, b, c, d, e, f];

        ctx._originalSetTransform(a, b, c, d, e, f);
      };

      ctx.rotate = function ctxRotate(angle) {
        var cosValue = Math.cos(angle);
        var sinValue = Math.sin(angle);
        var m = this._transformMatrix;
        this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];

        this._originalRotate(angle);
      };
    }
  }

  var CachedCanvases = function CachedCanvasesClosure() {
    function CachedCanvases(canvasFactory) {
      this.canvasFactory = canvasFactory;
      this.cache = Object.create(null);
    }

    CachedCanvases.prototype = {
      getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
        var canvasEntry;

        if (this.cache[id] !== undefined) {
          canvasEntry = this.cache[id];
          this.canvasFactory.reset(canvasEntry, width, height); // reset canvas transform for emulated mozCurrentTransform, if needed

          canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          canvasEntry = this.canvasFactory.create(width, height);
          this.cache[id] = canvasEntry;
        }

        if (trackTransform) {
          addContextCurrentTransform(canvasEntry.context);
        }

        return canvasEntry;
      },
      clear: function clear() {
        for (var id in this.cache) {
          var canvasEntry = this.cache[id];
          this.canvasFactory.destroy(canvasEntry);
          delete this.cache[id];
        }
      }
    };
    return CachedCanvases;
  }();

  function compileType3Glyph(imgData) {
    var POINT_TO_PROCESS_LIMIT = 1000;
    var width = imgData.width,
        height = imgData.height;
    var i,
        j,
        j0,
        width1 = width + 1;
    var points = new Uint8Array(width1 * (height + 1)); // prettier-ignore

    var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]); // decodes bit-packed mask data

    var lineSize = width + 7 & ~7,
        data0 = imgData.data;
    var data = new Uint8Array(lineSize * height),
        pos = 0,
        ii;

    for (i = 0, ii = data0.length; i < ii; i++) {
      var mask = 128,
          elem = data0[i];

      while (mask > 0) {
        data[pos++] = elem & mask ? 0 : 255;
        mask >>= 1;
      }
    } // finding interesting points: every point is located between mask pixels,
    // so there will be points of the (width + 1)x(height + 1) grid. Every point
    // will have flags assigned based on neighboring mask pixels:
    //   4 | 8
    //   --P--
    //   2 | 1
    // We are interested only in points with the flags:
    //   - outside corners: 1, 2, 4, 8;
    //   - inside corners: 7, 11, 13, 14;
    //   - and, intersections: 5, 10.


    var count = 0;
    pos = 0;

    if (data[pos] !== 0) {
      points[0] = 1;
      ++count;
    }

    for (j = 1; j < width; j++) {
      if (data[pos] !== data[pos + 1]) {
        points[j] = data[pos] ? 2 : 1;
        ++count;
      }

      pos++;
    }

    if (data[pos] !== 0) {
      points[j] = 2;
      ++count;
    }

    for (i = 1; i < height; i++) {
      pos = i * lineSize;
      j0 = i * width1;

      if (data[pos - lineSize] !== data[pos]) {
        points[j0] = data[pos] ? 1 : 8;
        ++count;
      } // 'sum' is the position of the current pixel configuration in the 'TYPES'
      // array (in order 8-1-2-4, so we can use '>>2' to shift the column).


      var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);

      for (j = 1; j < width; j++) {
        sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);

        if (POINT_TYPES[sum]) {
          points[j0 + j] = POINT_TYPES[sum];
          ++count;
        }

        pos++;
      }

      if (data[pos - lineSize] !== data[pos]) {
        points[j0 + j] = data[pos] ? 2 : 4;
        ++count;
      }

      if (count > POINT_TO_PROCESS_LIMIT) {
        return null;
      }
    }

    pos = lineSize * (height - 1);
    j0 = i * width1;

    if (data[pos] !== 0) {
      points[j0] = 8;
      ++count;
    }

    for (j = 1; j < width; j++) {
      if (data[pos] !== data[pos + 1]) {
        points[j0 + j] = data[pos] ? 4 : 8;
        ++count;
      }

      pos++;
    }

    if (data[pos] !== 0) {
      points[j0 + j] = 4;
      ++count;
    }

    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    } // building outlines


    var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
    var outlines = [];

    for (i = 0; count && i <= height; i++) {
      var p = i * width1;
      var end = p + width;

      while (p < end && !points[p]) {
        p++;
      }

      if (p === end) {
        continue;
      }

      var coords = [p % width1, i];
      var type = points[p],
          p0 = p,
          pp;

      do {
        var step = steps[type];

        do {
          p += step;
        } while (!points[p]);

        pp = points[p];

        if (pp !== 5 && pp !== 10) {
          // set new direction
          type = pp; // delete mark

          points[p] = 0;
        } else {
          // type is 5 or 10, ie, a crossing
          // set new direction
          type = pp & 0x33 * type >> 4; // set new type for "future hit"

          points[p] &= type >> 2 | type << 2;
        }

        coords.push(p % width1);
        coords.push(p / width1 | 0);

        if (!points[p]) {
          --count;
        }
      } while (p0 !== p);

      outlines.push(coords);
      --i;
    }

    var drawOutline = function drawOutline(c) {
      c.save(); // the path shall be painted in [0..1]x[0..1] space

      c.scale(1 / width, -1 / height);
      c.translate(0, -height);
      c.beginPath();

      for (var i = 0, ii = outlines.length; i < ii; i++) {
        var o = outlines[i];
        c.moveTo(o[0], o[1]);

        for (var j = 2, jj = o.length; j < jj; j += 2) {
          c.lineTo(o[j], o[j + 1]);
        }
      }

      c.fill();
      c.beginPath();
      c.restore();
    };

    return drawOutline;
  }

  var CanvasExtraState = function CanvasExtraStateClosure() {
    function CanvasExtraState() {
      // Are soft masks and alpha values shapes or opacities?
      this.alphaIsShape = false;
      this.fontSize = 0;
      this.fontSizeScale = 1;
      this.textMatrix = IDENTITY_MATRIX;
      this.textMatrixScale = 1;
      this.fontMatrix = FONT_IDENTITY_MATRIX;
      this.leading = 0; // Current point (in user coordinates)

      this.x = 0;
      this.y = 0; // Start of text line (in text coordinates)

      this.lineX = 0;
      this.lineY = 0; // Character and word spacing

      this.charSpacing = 0;
      this.wordSpacing = 0;
      this.textHScale = 1;
      this.textRenderingMode = TextRenderingMode.FILL;
      this.textRise = 0; // Default fore and background colors

      this.fillColor = "#000000";
      this.strokeColor = "#000000";
      this.patternFill = false; // Note: fill alpha applies to all non-stroking operations

      this.fillAlpha = 1;
      this.strokeAlpha = 1;
      this.lineWidth = 1;
      this.activeSMask = null;
      this.resumeSMaskCtx = null; // nonclonable field (see the save method below)
    }

    CanvasExtraState.prototype = {
      clone: function CanvasExtraState_clone() {
        return Object.create(this);
      },
      setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
        this.x = x;
        this.y = y;
      }
    };
    return CanvasExtraState;
  }();

  var CanvasGraphics = function CanvasGraphicsClosure() {
    // Defines the time the executeOperatorList is going to be executing
    // before it stops and shedules a continue of execution.
    var EXECUTION_TIME = 15; // Defines the number of steps before checking the execution time

    var EXECUTION_STEPS = 10;

    function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
      this.ctx = canvasCtx;
      this.current = new CanvasExtraState();
      this.stateStack = [];
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.res = null;
      this.xobjs = null;
      this.commonObjs = commonObjs;
      this.objs = objs;
      this.canvasFactory = canvasFactory;
      this.webGLContext = webGLContext;
      this.imageLayer = imageLayer;
      this.groupStack = [];
      this.processingType3 = null; // Patterns are painted relative to the initial page/form transform, see pdf
      // spec 8.7.2 NOTE 1.

      this.baseTransform = null;
      this.baseTransformStack = [];
      this.groupLevel = 0;
      this.smaskStack = [];
      this.smaskCounter = 0;
      this.tempSMask = null;
      this.cachedCanvases = new CachedCanvases(this.canvasFactory);

      if (canvasCtx) {
        // NOTE: if mozCurrentTransform is polyfilled, then the current state of
        // the transformation must already be set in canvasCtx._transformMatrix.
        addContextCurrentTransform(canvasCtx);
      }

      this._cachedGetSinglePixelWidth = null;
    }

    function putBinaryImageData(ctx, imgData) {
      if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
        ctx.putImageData(imgData, 0, 0);
        return;
      } // Put the image data to the canvas in chunks, rather than putting the
      // whole image at once.  This saves JS memory, because the ImageData object
      // is smaller. It also possibly saves C++ memory within the implementation
      // of putImageData(). (E.g. in Firefox we make two short-lived copies of
      // the data passed to putImageData()). |n| shouldn't be too small, however,
      // because too many putImageData() calls will slow things down.
      //
      // Note: as written, if the last chunk is partial, the putImageData() call
      // will (conceptually) put pixels past the bounds of the canvas.  But
      // that's ok; any such pixels are ignored.


      var height = imgData.height,
          width = imgData.width;
      var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
      var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
      var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
      var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
      var srcPos = 0,
          destPos;
      var src = imgData.data;
      var dest = chunkImgData.data;
      var i, j, thisChunkHeight, elemsInThisChunk; // There are multiple forms in which the pixel data can be passed, and
      // imgData.kind tells us which one this is.

      if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
        // Grayscale, 1 bit per pixel (i.e. black-and-white).
        var srcLength = src.byteLength;
        var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
        var dest32DataLength = dest32.length;
        var fullSrcDiff = width + 7 >> 3;
        var white = 0xffffffff;
        var black = IsLittleEndianCached.value ? 0xff000000 : 0x000000ff;

        for (i = 0; i < totalChunks; i++) {
          thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
          destPos = 0;

          for (j = 0; j < thisChunkHeight; j++) {
            var srcDiff = srcLength - srcPos;
            var k = 0;
            var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
            var kEndUnrolled = kEnd & ~7;
            var mask = 0;
            var srcByte = 0;

            for (; k < kEndUnrolled; k += 8) {
              srcByte = src[srcPos++];
              dest32[destPos++] = srcByte & 128 ? white : black;
              dest32[destPos++] = srcByte & 64 ? white : black;
              dest32[destPos++] = srcByte & 32 ? white : black;
              dest32[destPos++] = srcByte & 16 ? white : black;
              dest32[destPos++] = srcByte & 8 ? white : black;
              dest32[destPos++] = srcByte & 4 ? white : black;
              dest32[destPos++] = srcByte & 2 ? white : black;
              dest32[destPos++] = srcByte & 1 ? white : black;
            }

            for (; k < kEnd; k++) {
              if (mask === 0) {
                srcByte = src[srcPos++];
                mask = 128;
              }

              dest32[destPos++] = srcByte & mask ? white : black;
              mask >>= 1;
            }
          } // We ran out of input. Make all remaining pixels transparent.


          while (destPos < dest32DataLength) {
            dest32[destPos++] = 0;
          }

          ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
        }
      } else if (imgData.kind === ImageKind.RGBA_32BPP) {
        // RGBA, 32-bits per pixel.
        j = 0;
        elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;

        for (i = 0; i < fullChunks; i++) {
          dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
          srcPos += elemsInThisChunk;
          ctx.putImageData(chunkImgData, 0, j);
          j += FULL_CHUNK_HEIGHT;
        }

        if (i < totalChunks) {
          elemsInThisChunk = width * partialChunkHeight * 4;
          dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
          ctx.putImageData(chunkImgData, 0, j);
        }
      } else if (imgData.kind === ImageKind.RGB_24BPP) {
        // RGB, 24-bits per pixel.
        thisChunkHeight = FULL_CHUNK_HEIGHT;
        elemsInThisChunk = width * thisChunkHeight;

        for (i = 0; i < totalChunks; i++) {
          if (i >= fullChunks) {
            thisChunkHeight = partialChunkHeight;
            elemsInThisChunk = width * thisChunkHeight;
          }

          destPos = 0;

          for (j = elemsInThisChunk; j--;) {
            dest[destPos++] = src[srcPos++];
            dest[destPos++] = src[srcPos++];
            dest[destPos++] = src[srcPos++];
            dest[destPos++] = 255;
          }

          ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
        }
      } else {
        throw new Error("bad image kind: ".concat(imgData.kind));
      }
    }

    function putBinaryImageMask(ctx, imgData) {
      var height = imgData.height,
          width = imgData.width;
      var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
      var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
      var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
      var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
      var srcPos = 0;
      var src = imgData.data;
      var dest = chunkImgData.data;

      for (var i = 0; i < totalChunks; i++) {
        var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight; // Expand the mask so it can be used by the canvas.  Any required
        // inversion has already been handled.

        var destPos = 3; // alpha component offset

        for (var j = 0; j < thisChunkHeight; j++) {
          var mask = 0;

          for (var k = 0; k < width; k++) {
            if (!mask) {
              var elem = src[srcPos++];
              mask = 128;
            }

            dest[destPos] = elem & mask ? 0 : 255;
            destPos += 4;
            mask >>= 1;
          }
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    }

    function copyCtxState(sourceCtx, destCtx) {
      var properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];

      for (var i = 0, ii = properties.length; i < ii; i++) {
        var property = properties[i];

        if (sourceCtx[property] !== undefined) {
          destCtx[property] = sourceCtx[property];
        }
      }

      if (sourceCtx.setLineDash !== undefined) {
        destCtx.setLineDash(sourceCtx.getLineDash());
        destCtx.lineDashOffset = sourceCtx.lineDashOffset;
      }
    }

    function resetCtxToDefault(ctx) {
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = "#000000";
      ctx.fillRule = "nonzero";
      ctx.globalAlpha = 1;
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.miterLimit = 10;
      ctx.globalCompositeOperation = "source-over";
      ctx.font = "10px sans-serif";

      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash([]);
        ctx.lineDashOffset = 0;
      }
    }

    function composeSMaskBackdrop(bytes, r0, g0, b0) {
      var length = bytes.length;

      for (var i = 3; i < length; i += 4) {
        var alpha = bytes[i];

        if (alpha === 0) {
          bytes[i - 3] = r0;
          bytes[i - 2] = g0;
          bytes[i - 1] = b0;
        } else if (alpha < 255) {
          var alpha_ = 255 - alpha;
          bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
          bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
          bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
        }
      }
    }

    function composeSMaskAlpha(maskData, layerData, transferMap) {
      var length = maskData.length;
      var scale = 1 / 255;

      for (var i = 3; i < length; i += 4) {
        var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
        layerData[i] = layerData[i] * alpha * scale | 0;
      }
    }

    function composeSMaskLuminosity(maskData, layerData, transferMap) {
      var length = maskData.length;

      for (var i = 3; i < length; i += 4) {
        var y = maskData[i - 3] * 77 + // * 0.3 / 255 * 0x10000
        maskData[i - 2] * 152 + // * 0.59 ....
        maskData[i - 1] * 28; // * 0.11 ....

        layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
      }
    }

    function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
      var hasBackdrop = !!backdrop;
      var r0 = hasBackdrop ? backdrop[0] : 0;
      var g0 = hasBackdrop ? backdrop[1] : 0;
      var b0 = hasBackdrop ? backdrop[2] : 0;
      var composeFn;

      if (subtype === "Luminosity") {
        composeFn = composeSMaskLuminosity;
      } else {
        composeFn = composeSMaskAlpha;
      } // processing image in chunks to save memory


      var PIXELS_TO_PROCESS = 1048576;
      var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));

      for (var row = 0; row < height; row += chunkSize) {
        var chunkHeight = Math.min(chunkSize, height - row);
        var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
        var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

        if (hasBackdrop) {
          composeSMaskBackdrop(maskData.data, r0, g0, b0);
        }

        composeFn(maskData.data, layerData.data, transferMap);
        maskCtx.putImageData(layerData, 0, row);
      }
    }

    function composeSMask(ctx, smask, layerCtx, webGLContext) {
      var mask = smask.canvas;
      var maskCtx = smask.context;
      ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
      var backdrop = smask.backdrop || null;

      if (!smask.transferMap && webGLContext.isEnabled) {
        var composed = webGLContext.composeSMask({
          layer: layerCtx.canvas,
          mask: mask,
          properties: {
            subtype: smask.subtype,
            backdrop: backdrop
          }
        });
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(composed, smask.offsetX, smask.offsetY);
        return;
      }

      genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
      ctx.drawImage(mask, 0, 0);
    }

    var LINE_CAP_STYLES = ["butt", "round", "square"];
    var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
    var NORMAL_CLIP = {};
    var EO_CLIP = {};
    CanvasGraphics.prototype = {
      beginDrawing: function beginDrawing(_ref) {
        var transform = _ref.transform,
            viewport = _ref.viewport,
            _ref$transparency = _ref.transparency,
            transparency = _ref$transparency === void 0 ? false : _ref$transparency,
            _ref$background = _ref.background,
            background = _ref$background === void 0 ? null : _ref$background;
        // For pdfs that use blend modes we have to clear the canvas else certain
        // blend modes can look wrong since we'd be blending with a white
        // backdrop. The problem with a transparent backdrop though is we then
        // don't get sub pixel anti aliasing on text, creating temporary
        // transparent canvas when we have blend modes.
        var width = this.ctx.canvas.width;
        var height = this.ctx.canvas.height;
        this.ctx.save();
        this.ctx.fillStyle = background || "rgb(255, 255, 255)";
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.restore();

        if (transparency) {
          var transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
          this.compositeCtx = this.ctx;
          this.transparentCanvas = transparentCanvas.canvas;
          this.ctx = transparentCanvas.context;
          this.ctx.save(); // The transform can be applied before rendering, transferring it to
          // the new canvas.

          this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
        }

        this.ctx.save();
        resetCtxToDefault(this.ctx);

        if (transform) {
          this.ctx.transform.apply(this.ctx, transform);
        }

        this.ctx.transform.apply(this.ctx, viewport.transform);
        this.baseTransform = this.ctx.mozCurrentTransform.slice();

        if (this.imageLayer) {
          this.imageLayer.beginLayout();
        }
      },
      executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
        var argsArray = operatorList.argsArray;
        var fnArray = operatorList.fnArray;
        var i = executionStartIdx || 0;
        var argsArrayLen = argsArray.length; // Sometimes the OperatorList to execute is empty.

        if (argsArrayLen === i) {
          return i;
        }

        var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
        var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
        var steps = 0;
        var commonObjs = this.commonObjs;
        var objs = this.objs;
        var fnId;

        while (true) {
          if (stepper !== undefined && i === stepper.nextBreakPoint) {
            stepper.breakIt(i, continueCallback);
            return i;
          }

          fnId = fnArray[i];

          if (fnId !== OPS.dependency) {
            this[fnId].apply(this, argsArray[i]);
          } else {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = argsArray[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var depObjId = _step.value;
                var objsPool = depObjId.startsWith("g_") ? commonObjs : objs; // If the promise isn't resolved yet, add the continueCallback
                // to the promise and bail out.

                if (!objsPool.has(depObjId)) {
                  objsPool.get(depObjId, continueCallback);
                  return i;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          i++; // If the entire operatorList was executed, stop as were done.

          if (i === argsArrayLen) {
            return i;
          } // If the execution took longer then a certain amount of time and
          // `continueCallback` is specified, interrupt the execution.


          if (chunkOperations && ++steps > EXECUTION_STEPS) {
            if (Date.now() > endTime) {
              continueCallback();
              return i;
            }

            steps = 0;
          } // If the operatorList isn't executed completely yet OR the execution
          // time was short enough, do another execution round.

        }
      },
      endDrawing: function CanvasGraphics_endDrawing() {
        // Finishing all opened operations such as SMask group painting.
        if (this.current.activeSMask !== null) {
          this.endSMaskGroup();
        }

        this.ctx.restore();

        if (this.transparentCanvas) {
          this.ctx = this.compositeCtx;
          this.ctx.save();
          this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Avoid apply transform twice

          this.ctx.drawImage(this.transparentCanvas, 0, 0);
          this.ctx.restore();
          this.transparentCanvas = null;
        }

        this.cachedCanvases.clear();
        this.webGLContext.clear();

        if (this.imageLayer) {
          this.imageLayer.endLayout();
        }
      },
      // Graphics state
      setLineWidth: function CanvasGraphics_setLineWidth(width) {
        this.current.lineWidth = width;
        this.ctx.lineWidth = width;
      },
      setLineCap: function CanvasGraphics_setLineCap(style) {
        this.ctx.lineCap = LINE_CAP_STYLES[style];
      },
      setLineJoin: function CanvasGraphics_setLineJoin(style) {
        this.ctx.lineJoin = LINE_JOIN_STYLES[style];
      },
      setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
        this.ctx.miterLimit = limit;
      },
      setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
        var ctx = this.ctx;

        if (ctx.setLineDash !== undefined) {
          ctx.setLineDash(dashArray);
          ctx.lineDashOffset = dashPhase;
        }
      },
      setRenderingIntent: function setRenderingIntent(intent) {// This operation is ignored since we haven't found a use case for it yet.
      },
      setFlatness: function setFlatness(flatness) {// This operation is ignored since we haven't found a use case for it yet.
      },
      setGState: function CanvasGraphics_setGState(states) {
        for (var i = 0, ii = states.length; i < ii; i++) {
          var state = states[i];
          var key = state[0];
          var value = state[1];

          switch (key) {
            case "LW":
              this.setLineWidth(value);
              break;

            case "LC":
              this.setLineCap(value);
              break;

            case "LJ":
              this.setLineJoin(value);
              break;

            case "ML":
              this.setMiterLimit(value);
              break;

            case "D":
              this.setDash(value[0], value[1]);
              break;

            case "RI":
              this.setRenderingIntent(value);
              break;

            case "FL":
              this.setFlatness(value);
              break;

            case "Font":
              this.setFont(value[0], value[1]);
              break;

            case "CA":
              this.current.strokeAlpha = state[1];
              break;

            case "ca":
              this.current.fillAlpha = state[1];
              this.ctx.globalAlpha = state[1];
              break;

            case "BM":
              this.ctx.globalCompositeOperation = value;
              break;

            case "SMask":
              if (this.current.activeSMask) {
                // If SMask is currrenly used, it needs to be suspended or
                // finished. Suspend only makes sense when at least one save()
                // was performed and state needs to be reverted on restore().
                if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                  this.suspendSMaskGroup();
                } else {
                  this.endSMaskGroup();
                }
              }

              this.current.activeSMask = value ? this.tempSMask : null;

              if (this.current.activeSMask) {
                this.beginSMaskGroup();
              }

              this.tempSMask = null;
              break;
          }
        }
      },
      beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
        var activeSMask = this.current.activeSMask;
        var drawnWidth = activeSMask.canvas.width;
        var drawnHeight = activeSMask.canvas.height;
        var cacheId = "smaskGroupAt" + this.groupLevel;
        var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
        var currentCtx = this.ctx;
        var currentTransform = currentCtx.mozCurrentTransform;
        this.ctx.save();
        var groupCtx = scratchCanvas.context;
        groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
        groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
        groupCtx.transform.apply(groupCtx, currentTransform);
        activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
        copyCtxState(currentCtx, groupCtx);
        this.ctx = groupCtx;
        this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        this.groupStack.push(currentCtx);
        this.groupLevel++;
      },
      suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
        // Similar to endSMaskGroup, the intermediate canvas has to be composed
        // and future ctx state restored.
        var groupCtx = this.ctx;
        this.groupLevel--;
        this.ctx = this.groupStack.pop();
        composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
        this.ctx.restore();
        this.ctx.save(); // save is needed since SMask will be resumed.

        copyCtxState(groupCtx, this.ctx); // Saving state for resuming.

        this.current.resumeSMaskCtx = groupCtx; // Transform was changed in the SMask canvas, reflecting this change on
        // this.ctx.

        var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
        this.ctx.transform.apply(this.ctx, deltaTransform); // SMask was composed, the results at the groupCtx can be cleared.

        groupCtx.save();
        groupCtx.setTransform(1, 0, 0, 1, 0, 0);
        groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
        groupCtx.restore();
      },
      resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
        // Resuming state saved by suspendSMaskGroup. We don't need to restore
        // any groupCtx state since restore() command (the only caller) will do
        // that for us. See also beginSMaskGroup.
        var groupCtx = this.current.resumeSMaskCtx;
        var currentCtx = this.ctx;
        this.ctx = groupCtx;
        this.groupStack.push(currentCtx);
        this.groupLevel++;
      },
      endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
        var groupCtx = this.ctx;
        this.groupLevel--;
        this.ctx = this.groupStack.pop();
        composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
        this.ctx.restore();
        copyCtxState(groupCtx, this.ctx); // Transform was changed in the SMask canvas, reflecting this change on
        // this.ctx.

        var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
        this.ctx.transform.apply(this.ctx, deltaTransform);
      },
      save: function CanvasGraphics_save() {
        this.ctx.save();
        var old = this.current;
        this.stateStack.push(old);
        this.current = old.clone();
        this.current.resumeSMaskCtx = null;
      },
      restore: function CanvasGraphics_restore() {
        // SMask was suspended, we just need to resume it.
        if (this.current.resumeSMaskCtx) {
          this.resumeSMaskGroup();
        } // SMask has to be finished once there is no states that are using the
        // same SMask.


        if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
          this.endSMaskGroup();
        }

        if (this.stateStack.length !== 0) {
          this.current = this.stateStack.pop();
          this.ctx.restore(); // Ensure that the clipping path is reset (fixes issue6413.pdf).

          this.pendingClip = null;
          this._cachedGetSinglePixelWidth = null;
        }
      },
      transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
        this.ctx.transform(a, b, c, d, e, f);
        this._cachedGetSinglePixelWidth = null;
      },
      // Path
      constructPath: function CanvasGraphics_constructPath(ops, args) {
        var ctx = this.ctx;
        var current = this.current;
        var x = current.x,
            y = current.y;

        for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
          switch (ops[i] | 0) {
            case OPS.rectangle:
              x = args[j++];
              y = args[j++];
              var width = args[j++];
              var height = args[j++];

              if (width === 0) {
                width = this.getSinglePixelWidth();
              }

              if (height === 0) {
                height = this.getSinglePixelWidth();
              }

              var xw = x + width;
              var yh = y + height;
              this.ctx.moveTo(x, y);
              this.ctx.lineTo(xw, y);
              this.ctx.lineTo(xw, yh);
              this.ctx.lineTo(x, yh);
              this.ctx.lineTo(x, y);
              this.ctx.closePath();
              break;

            case OPS.moveTo:
              x = args[j++];
              y = args[j++];
              ctx.moveTo(x, y);
              break;

            case OPS.lineTo:
              x = args[j++];
              y = args[j++];
              ctx.lineTo(x, y);
              break;

            case OPS.curveTo:
              x = args[j + 4];
              y = args[j + 5];
              ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
              j += 6;
              break;

            case OPS.curveTo2:
              ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
              x = args[j + 2];
              y = args[j + 3];
              j += 4;
              break;

            case OPS.curveTo3:
              x = args[j + 2];
              y = args[j + 3];
              ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
              j += 4;
              break;

            case OPS.closePath:
              ctx.closePath();
              break;
          }
        }

        current.setCurrentPoint(x, y);
      },
      closePath: function CanvasGraphics_closePath() {
        this.ctx.closePath();
      },
      stroke: function CanvasGraphics_stroke(consumePath) {
        consumePath = typeof consumePath !== "undefined" ? consumePath : true;
        var ctx = this.ctx;
        var strokeColor = this.current.strokeColor; // For stroke we want to temporarily change the global alpha to the
        // stroking alpha.

        ctx.globalAlpha = this.current.strokeAlpha;

        if (strokeColor && strokeColor.hasOwnProperty("type") && strokeColor.type === "Pattern") {
          // for patterns, we transform to pattern space, calculate
          // the pattern, call stroke, and restore to user space
          ctx.save(); // The current transform will be replaced while building the pattern,
          // but the line width needs to be adjusted by the current transform, so
          // we must scale it. To properly fix this we should be using a pattern
          // transform instead (see #10955).

          var transform = ctx.mozCurrentTransform;
          var scale = Util.singularValueDecompose2dScale(transform)[0];
          ctx.strokeStyle = strokeColor.getPattern(ctx, this);
          ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth * scale);
          ctx.stroke();
          ctx.restore();
        } else {
          // Prevent drawing too thin lines by enforcing a minimum line width.
          ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
          ctx.stroke();
        }

        if (consumePath) {
          this.consumePath();
        } // Restore the global alpha to the fill alpha


        ctx.globalAlpha = this.current.fillAlpha;
      },
      closeStroke: function CanvasGraphics_closeStroke() {
        this.closePath();
        this.stroke();
      },
      fill: function CanvasGraphics_fill(consumePath) {
        consumePath = typeof consumePath !== "undefined" ? consumePath : true;
        var ctx = this.ctx;
        var fillColor = this.current.fillColor;
        var isPatternFill = this.current.patternFill;
        var needRestore = false;

        if (isPatternFill) {
          ctx.save();

          if (this.baseTransform) {
            ctx.setTransform.apply(ctx, this.baseTransform);
          }

          ctx.fillStyle = fillColor.getPattern(ctx, this);
          needRestore = true;
        }

        if (this.pendingEOFill) {
          ctx.fill("evenodd");
          this.pendingEOFill = false;
        } else {
          ctx.fill();
        }

        if (needRestore) {
          ctx.restore();
        }

        if (consumePath) {
          this.consumePath();
        }
      },
      eoFill: function CanvasGraphics_eoFill() {
        this.pendingEOFill = true;
        this.fill();
      },
      fillStroke: function CanvasGraphics_fillStroke() {
        this.fill(false);
        this.stroke(false);
        this.consumePath();
      },
      eoFillStroke: function CanvasGraphics_eoFillStroke() {
        this.pendingEOFill = true;
        this.fillStroke();
      },
      closeFillStroke: function CanvasGraphics_closeFillStroke() {
        this.closePath();
        this.fillStroke();
      },
      closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
        this.pendingEOFill = true;
        this.closePath();
        this.fillStroke();
      },
      endPath: function CanvasGraphics_endPath() {
        this.consumePath();
      },
      // Clipping
      clip: function CanvasGraphics_clip() {
        this.pendingClip = NORMAL_CLIP;
      },
      eoClip: function CanvasGraphics_eoClip() {
        this.pendingClip = EO_CLIP;
      },
      // Text
      beginText: function CanvasGraphics_beginText() {
        this.current.textMatrix = IDENTITY_MATRIX;
        this.current.textMatrixScale = 1;
        this.current.x = this.current.lineX = 0;
        this.current.y = this.current.lineY = 0;
      },
      endText: function CanvasGraphics_endText() {
        var paths = this.pendingTextPaths;
        var ctx = this.ctx;

        if (paths === undefined) {
          ctx.beginPath();
          return;
        }

        ctx.save();
        ctx.beginPath();

        for (var i = 0; i < paths.length; i++) {
          var path = paths[i];
          ctx.setTransform.apply(ctx, path.transform);
          ctx.translate(path.x, path.y);
          path.addToPath(ctx, path.fontSize);
        }

        ctx.restore();
        ctx.clip();
        ctx.beginPath();
        delete this.pendingTextPaths;
      },
      setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
        this.current.charSpacing = spacing;
      },
      setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
        this.current.wordSpacing = spacing;
      },
      setHScale: function CanvasGraphics_setHScale(scale) {
        this.current.textHScale = scale / 100;
      },
      setLeading: function CanvasGraphics_setLeading(leading) {
        this.current.leading = -leading;
      },
      setFont: function CanvasGraphics_setFont(fontRefName, size) {
        var fontObj = this.commonObjs.get(fontRefName);
        var current = this.current;

        if (!fontObj) {
          throw new Error("Can't find font for ".concat(fontRefName));
        }

        current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX; // A valid matrix needs all main diagonal elements to be non-zero
        // This also ensures we bypass FF bugzilla bug #719844.

        if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
          warn("Invalid font matrix for font " + fontRefName);
        } // The spec for Tf (setFont) says that 'size' specifies the font 'scale',
        // and in some docs this can be negative (inverted x-y axes).


        if (size < 0) {
          size = -size;
          current.fontDirection = -1;
        } else {
          current.fontDirection = 1;
        }

        this.current.font = fontObj;
        this.current.fontSize = size;

        if (fontObj.isType3Font) {
          return; // we don't need ctx.font for Type3 fonts
        }

        var name = fontObj.loadedName || "sans-serif";
        var bold = fontObj.black ? "900" : fontObj.bold ? "bold" : "normal";
        var italic = fontObj.italic ? "italic" : "normal";
        var typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName); // Some font backends cannot handle fonts below certain size.
        // Keeping the font at minimal size and using the fontSizeScale to change
        // the current transformation matrix before the fillText/strokeText.
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=726227

        var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
        this.current.fontSizeScale = size / browserFontSize;
        this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
      },
      setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
        this.current.textRenderingMode = mode;
      },
      setTextRise: function CanvasGraphics_setTextRise(rise) {
        this.current.textRise = rise;
      },
      moveText: function CanvasGraphics_moveText(x, y) {
        this.current.x = this.current.lineX += x;
        this.current.y = this.current.lineY += y;
      },
      setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
        this.setLeading(-y);
        this.moveText(x, y);
      },
      setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
        this.current.textMatrix = [a, b, c, d, e, f];
        this.current.textMatrixScale = Math.sqrt(a * a + b * b);
        this.current.x = this.current.lineX = 0;
        this.current.y = this.current.lineY = 0;
      },
      nextLine: function CanvasGraphics_nextLine() {
        this.moveText(0, this.current.leading);
      },
      paintChar: function paintChar(character, x, y, patternTransform) {
        var ctx = this.ctx;
        var current = this.current;
        var font = current.font;
        var textRenderingMode = current.textRenderingMode;
        var fontSize = current.fontSize / current.fontSizeScale;
        var fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
        var isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
        var patternFill = current.patternFill && font.data;
        var addToPath;

        if (font.disableFontFace || isAddToPathSet || patternFill) {
          addToPath = font.getPathGenerator(this.commonObjs, character);
        }

        if (font.disableFontFace || patternFill) {
          ctx.save();
          ctx.translate(x, y);
          ctx.beginPath();
          addToPath(ctx, fontSize);

          if (patternTransform) {
            ctx.setTransform.apply(ctx, patternTransform);
          }

          if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            ctx.fill();
          }

          if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            ctx.stroke();
          }

          ctx.restore();
        } else {
          if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            ctx.fillText(character, x, y);
          }

          if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            ctx.strokeText(character, x, y);
          }
        }

        if (isAddToPathSet) {
          var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
          paths.push({
            transform: ctx.mozCurrentTransform,
            x: x,
            y: y,
            fontSize: fontSize,
            addToPath: addToPath
          });
        }
      },

      get isFontSubpixelAAEnabled() {
        // Checks if anti-aliasing is enabled when scaled text is painted.
        // On Windows GDI scaled fonts looks bad.
        var _this$cachedCanvases$ = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10),
            ctx = _this$cachedCanvases$.context;

        ctx.scale(1.5, 1);
        ctx.fillText("I", 0, 10);
        var data = ctx.getImageData(0, 0, 10, 10).data;
        var enabled = false;

        for (var i = 3; i < data.length; i += 4) {
          if (data[i] > 0 && data[i] < 255) {
            enabled = true;
            break;
          }
        }

        return shadow(this, "isFontSubpixelAAEnabled", enabled);
      },

      showText: function CanvasGraphics_showText(glyphs) {
        var current = this.current;
        var font = current.font;

        if (font.isType3Font) {
          return this.showType3Text(glyphs);
        }

        var fontSize = current.fontSize;

        if (fontSize === 0) {
          return undefined;
        }

        var ctx = this.ctx;
        var fontSizeScale = current.fontSizeScale;
        var charSpacing = current.charSpacing;
        var wordSpacing = current.wordSpacing;
        var fontDirection = current.fontDirection;
        var textHScale = current.textHScale * fontDirection;
        var glyphsLength = glyphs.length;
        var vertical = font.vertical;
        var spacingDir = vertical ? 1 : -1;
        var defaultVMetrics = font.defaultVMetrics;
        var widthAdvanceScale = fontSize * current.fontMatrix[0];
        var simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
        ctx.save();
        var patternTransform;

        if (current.patternFill) {
          // TODO: Patterns are not applied correctly to text if a non-embedded
          // font is used. E.g. issue 8111 and ShowText-ShadingPattern.pdf.
          ctx.save();
          var pattern = current.fillColor.getPattern(ctx, this);
          patternTransform = ctx.mozCurrentTransform;
          ctx.restore();
          ctx.fillStyle = pattern;
        }

        ctx.transform.apply(ctx, current.textMatrix);
        ctx.translate(current.x, current.y + current.textRise);

        if (fontDirection > 0) {
          ctx.scale(textHScale, -1);
        } else {
          ctx.scale(textHScale, 1);
        }

        var lineWidth = current.lineWidth;
        var scale = current.textMatrixScale;

        if (scale === 0 || lineWidth === 0) {
          var fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;

          if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            this._cachedGetSinglePixelWidth = null;
            lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
          }
        } else {
          lineWidth /= scale;
        }

        if (fontSizeScale !== 1.0) {
          ctx.scale(fontSizeScale, fontSizeScale);
          lineWidth /= fontSizeScale;
        }

        ctx.lineWidth = lineWidth;
        var x = 0,
            i;

        for (i = 0; i < glyphsLength; ++i) {
          var glyph = glyphs[i];

          if (isNum(glyph)) {
            x += spacingDir * glyph * fontSize / 1000;
            continue;
          }

          var restoreNeeded = false;
          var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
          var character = glyph.fontChar;
          var accent = glyph.accent;
          var scaledX, scaledY, scaledAccentX, scaledAccentY;
          var width = glyph.width;

          if (vertical) {
            var vmetric, vx, vy;
            vmetric = glyph.vmetric || defaultVMetrics;
            vx = glyph.vmetric ? vmetric[1] : width * 0.5;
            vx = -vx * widthAdvanceScale;
            vy = vmetric[2] * widthAdvanceScale;
            width = vmetric ? -vmetric[0] : width;
            scaledX = vx / fontSizeScale;
            scaledY = (x + vy) / fontSizeScale;
          } else {
            scaledX = x / fontSizeScale;
            scaledY = 0;
          }

          if (font.remeasure && width > 0) {
            // Some standard fonts may not have the exact width: rescale per
            // character if measured width is greater than expected glyph width
            // and subpixel-aa is enabled, otherwise just center the glyph.
            var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;

            if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
              var characterScaleX = width / measuredWidth;
              restoreNeeded = true;
              ctx.save();
              ctx.scale(characterScaleX, 1);
              scaledX /= characterScaleX;
            } else if (width !== measuredWidth) {
              scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
            }
          } // Only attempt to draw the glyph if it is actually in the embedded font
          // file or if there isn't a font file so the fallback font is shown.


          if (glyph.isInFont || font.missingFile) {
            if (simpleFillText && !accent) {
              // common case
              ctx.fillText(character, scaledX, scaledY);
            } else {
              this.paintChar(character, scaledX, scaledY, patternTransform);

              if (accent) {
                scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
                scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
                this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
              }
            }
          }

          var charWidth = width * widthAdvanceScale + spacing * fontDirection;
          x += charWidth;

          if (restoreNeeded) {
            ctx.restore();
          }
        }

        if (vertical) {
          current.y -= x * textHScale;
        } else {
          current.x += x * textHScale;
        }

        ctx.restore();
      },
      showType3Text: function CanvasGraphics_showType3Text(glyphs) {
        // Type3 fonts - each glyph is a "mini-PDF"
        var ctx = this.ctx;
        var current = this.current;
        var font = current.font;
        var fontSize = current.fontSize;
        var fontDirection = current.fontDirection;
        var spacingDir = font.vertical ? 1 : -1;
        var charSpacing = current.charSpacing;
        var wordSpacing = current.wordSpacing;
        var textHScale = current.textHScale * fontDirection;
        var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
        var glyphsLength = glyphs.length;
        var isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
        var i, glyph, width, spacingLength;

        if (isTextInvisible || fontSize === 0) {
          return;
        }

        this._cachedGetSinglePixelWidth = null;
        ctx.save();
        ctx.transform.apply(ctx, current.textMatrix);
        ctx.translate(current.x, current.y);
        ctx.scale(textHScale, fontDirection);

        for (i = 0; i < glyphsLength; ++i) {
          glyph = glyphs[i];

          if (isNum(glyph)) {
            spacingLength = spacingDir * glyph * fontSize / 1000;
            this.ctx.translate(spacingLength, 0);
            current.x += spacingLength * textHScale;
            continue;
          }

          var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
          var operatorList = font.charProcOperatorList[glyph.operatorListId];

          if (!operatorList) {
            warn("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
            continue;
          }

          this.processingType3 = glyph;
          this.save();
          ctx.scale(fontSize, fontSize);
          ctx.transform.apply(ctx, fontMatrix);
          this.executeOperatorList(operatorList);
          this.restore();
          var transformed = Util.applyTransform([glyph.width, 0], fontMatrix);
          width = transformed[0] * fontSize + spacing;
          ctx.translate(width, 0);
          current.x += width * textHScale;
        }

        ctx.restore();
        this.processingType3 = null;
      },
      // Type3 fonts
      setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {// We can safely ignore this since the width should be the same
        // as the width in the Widths array.
      },
      setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
        // TODO According to the spec we're also suppose to ignore any operators
        // that set color or include images while processing this type3 font.
        this.ctx.rect(llx, lly, urx - llx, ury - lly);
        this.clip();
        this.endPath();
      },
      // Color
      getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
        var _this = this;

        var pattern;

        if (IR[0] === "TilingPattern") {
          var color = IR[1];
          var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
          var canvasGraphicsFactory = {
            createCanvasGraphics: function createCanvasGraphics(ctx) {
              return new CanvasGraphics(ctx, _this.commonObjs, _this.objs, _this.canvasFactory, _this.webGLContext);
            }
          };
          pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
        } else {
          pattern = getShadingPatternFromIR(IR);
        }

        return pattern;
      },
      setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
        this.current.strokeColor = this.getColorN_Pattern(arguments);
      },
      setFillColorN: function CanvasGraphics_setFillColorN() {
        this.current.fillColor = this.getColorN_Pattern(arguments);
        this.current.patternFill = true;
      },
      setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
        var color = Util.makeCssRgb(r, g, b);
        this.ctx.strokeStyle = color;
        this.current.strokeColor = color;
      },
      setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
        var color = Util.makeCssRgb(r, g, b);
        this.ctx.fillStyle = color;
        this.current.fillColor = color;
        this.current.patternFill = false;
      },
      shadingFill: function CanvasGraphics_shadingFill(patternIR) {
        var ctx = this.ctx;
        this.save();
        var pattern = getShadingPatternFromIR(patternIR);
        ctx.fillStyle = pattern.getPattern(ctx, this, true);
        var inv = ctx.mozCurrentTransformInverse;

        if (inv) {
          var canvas = ctx.canvas;
          var width = canvas.width;
          var height = canvas.height;
          var bl = Util.applyTransform([0, 0], inv);
          var br = Util.applyTransform([0, height], inv);
          var ul = Util.applyTransform([width, 0], inv);
          var ur = Util.applyTransform([width, height], inv);
          var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
          var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
          var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
          var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
          this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
        } else {
          // HACK to draw the gradient onto an infinite rectangle.
          // PDF gradients are drawn across the entire image while
          // Canvas only allows gradients to be drawn in a rectangle
          // The following bug should allow us to remove this.
          // https://bugzilla.mozilla.org/show_bug.cgi?id=664884
          this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
        }

        this.restore();
      },
      // Images
      beginInlineImage: function CanvasGraphics_beginInlineImage() {
        unreachable("Should not call beginInlineImage");
      },
      beginImageData: function CanvasGraphics_beginImageData() {
        unreachable("Should not call beginImageData");
      },
      paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
        this.save();
        this.baseTransformStack.push(this.baseTransform);

        if (Array.isArray(matrix) && matrix.length === 6) {
          this.transform.apply(this, matrix);
        }

        this.baseTransform = this.ctx.mozCurrentTransform;

        if (bbox) {
          var width = bbox[2] - bbox[0];
          var height = bbox[3] - bbox[1];
          this.ctx.rect(bbox[0], bbox[1], width, height);
          this.clip();
          this.endPath();
        }
      },
      paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
        this.restore();
        this.baseTransform = this.baseTransformStack.pop();
      },
      beginGroup: function CanvasGraphics_beginGroup(group) {
        this.save();
        var currentCtx = this.ctx; // TODO non-isolated groups - according to Rik at adobe non-isolated
        // group results aren't usually that different and they even have tools
        // that ignore this setting. Notes from Rik on implementing:
        // - When you encounter an transparency group, create a new canvas with
        // the dimensions of the bbox
        // - copy the content from the previous canvas to the new canvas
        // - draw as usual
        // - remove the backdrop alpha:
        // alphaNew = 1 - (1 - alpha)/(1 - alphaBackdrop) with 'alpha' the alpha
        // value of your transparency group and 'alphaBackdrop' the alpha of the
        // backdrop
        // - remove background color:
        // colorNew = color - alphaNew *colorBackdrop /(1 - alphaNew)

        if (!group.isolated) {
          info("TODO: Support non-isolated groups.");
        } // TODO knockout - supposedly possible with the clever use of compositing
        // modes.


        if (group.knockout) {
          warn("Knockout groups not supported.");
        }

        var currentTransform = currentCtx.mozCurrentTransform;

        if (group.matrix) {
          currentCtx.transform.apply(currentCtx, group.matrix);
        }

        if (!group.bbox) {
          throw new Error("Bounding box is required.");
        } // Based on the current transform figure out how big the bounding box
        // will actually be.


        var bounds = Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform); // Clip the bounding box to the current canvas.

        var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
        bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0]; // Use ceil in case we're between sizes so we don't create canvas that is
        // too small and make the canvas at least 1x1 pixels.

        var offsetX = Math.floor(bounds[0]);
        var offsetY = Math.floor(bounds[1]);
        var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
        var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
        var scaleX = 1,
            scaleY = 1;

        if (drawnWidth > MAX_GROUP_SIZE) {
          scaleX = drawnWidth / MAX_GROUP_SIZE;
          drawnWidth = MAX_GROUP_SIZE;
        }

        if (drawnHeight > MAX_GROUP_SIZE) {
          scaleY = drawnHeight / MAX_GROUP_SIZE;
          drawnHeight = MAX_GROUP_SIZE;
        }

        var cacheId = "groupAt" + this.groupLevel;

        if (group.smask) {
          // Using two cache entries is case if masks are used one after another.
          cacheId += "_smask_" + this.smaskCounter++ % 2;
        }

        var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
        var groupCtx = scratchCanvas.context; // Since we created a new canvas that is just the size of the bounding box
        // we have to translate the group ctx.

        groupCtx.scale(1 / scaleX, 1 / scaleY);
        groupCtx.translate(-offsetX, -offsetY);
        groupCtx.transform.apply(groupCtx, currentTransform);

        if (group.smask) {
          // Saving state and cached mask to be used in setGState.
          this.smaskStack.push({
            canvas: scratchCanvas.canvas,
            context: groupCtx,
            offsetX: offsetX,
            offsetY: offsetY,
            scaleX: scaleX,
            scaleY: scaleY,
            subtype: group.smask.subtype,
            backdrop: group.smask.backdrop,
            transferMap: group.smask.transferMap || null,
            startTransformInverse: null // used during suspend operation

          });
        } else {
          // Setup the current ctx so when the group is popped we draw it at the
          // right location.
          currentCtx.setTransform(1, 0, 0, 1, 0, 0);
          currentCtx.translate(offsetX, offsetY);
          currentCtx.scale(scaleX, scaleY);
        } // The transparency group inherits all off the current graphics state
        // except the blend mode, soft mask, and alpha constants.


        copyCtxState(currentCtx, groupCtx);
        this.ctx = groupCtx;
        this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        this.groupStack.push(currentCtx);
        this.groupLevel++; // Reseting mask state, masks will be applied on restore of the group.

        this.current.activeSMask = null;
      },
      endGroup: function CanvasGraphics_endGroup(group) {
        this.groupLevel--;
        var groupCtx = this.ctx;
        this.ctx = this.groupStack.pop(); // Turn off image smoothing to avoid sub pixel interpolation which can
        // look kind of blurry for some pdfs.

        if (this.ctx.imageSmoothingEnabled !== undefined) {
          this.ctx.imageSmoothingEnabled = false;
        } else {
          this.ctx.mozImageSmoothingEnabled = false;
        }

        if (group.smask) {
          this.tempSMask = this.smaskStack.pop();
        } else {
          this.ctx.drawImage(groupCtx.canvas, 0, 0);
        }

        this.restore();
      },
      beginAnnotations: function CanvasGraphics_beginAnnotations() {
        this.save();

        if (this.baseTransform) {
          this.ctx.setTransform.apply(this.ctx, this.baseTransform);
        }
      },
      endAnnotations: function CanvasGraphics_endAnnotations() {
        this.restore();
      },
      beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
        this.save();
        resetCtxToDefault(this.ctx);
        this.current = new CanvasExtraState();

        if (Array.isArray(rect) && rect.length === 4) {
          var width = rect[2] - rect[0];
          var height = rect[3] - rect[1];
          this.ctx.rect(rect[0], rect[1], width, height);
          this.clip();
          this.endPath();
        }

        this.transform.apply(this, transform);
        this.transform.apply(this, matrix);
      },
      endAnnotation: function CanvasGraphics_endAnnotation() {
        this.restore();
      },
      paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
        var domImage = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

        if (!domImage) {
          warn("Dependent image isn't ready yet");
          return;
        }

        this.save();
        var ctx = this.ctx; // scale the image to the unit square

        ctx.scale(1 / w, -1 / h);
        ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);

        if (this.imageLayer) {
          var currentTransform = ctx.mozCurrentTransformInverse;
          var position = this.getCanvasPosition(0, 0);
          this.imageLayer.appendImage({
            objId: objId,
            left: position[0],
            top: position[1],
            width: w / currentTransform[0],
            height: h / currentTransform[3]
          });
        }

        this.restore();
      },
      paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
        var ctx = this.ctx;
        var width = img.width,
            height = img.height;
        var fillColor = this.current.fillColor;
        var isPatternFill = this.current.patternFill;
        var glyph = this.processingType3;

        if ( glyph && glyph.compiled === undefined) {
          if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
            glyph.compiled = compileType3Glyph({
              data: img.data,
              width: width,
              height: height
            });
          } else {
            glyph.compiled = null;
          }
        }

        if (glyph && glyph.compiled) {
          glyph.compiled(ctx);
          return;
        }

        var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();
        putBinaryImageMask(maskCtx, img);
        maskCtx.globalCompositeOperation = "source-in";
        maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);
        maskCtx.restore();
        this.paintInlineImageXObject(maskCanvas.canvas);
      },
      paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
        var width = imgData.width;
        var height = imgData.height;
        var fillColor = this.current.fillColor;
        var isPatternFill = this.current.patternFill;
        var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();
        putBinaryImageMask(maskCtx, imgData);
        maskCtx.globalCompositeOperation = "source-in";
        maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);
        maskCtx.restore();
        var ctx = this.ctx;

        for (var i = 0, ii = positions.length; i < ii; i += 2) {
          ctx.save();
          ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
          ctx.scale(1, -1);
          ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
          ctx.restore();
        }
      },
      paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
        var ctx = this.ctx;
        var fillColor = this.current.fillColor;
        var isPatternFill = this.current.patternFill;

        for (var i = 0, ii = images.length; i < ii; i++) {
          var image = images[i];
          var width = image.width,
              height = image.height;
          var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
          var maskCtx = maskCanvas.context;
          maskCtx.save();
          putBinaryImageMask(maskCtx, image);
          maskCtx.globalCompositeOperation = "source-in";
          maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
          maskCtx.fillRect(0, 0, width, height);
          maskCtx.restore();
          ctx.save();
          ctx.transform.apply(ctx, image.transform);
          ctx.scale(1, -1);
          ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
          ctx.restore();
        }
      },
      paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
        var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

        if (!imgData) {
          warn("Dependent image isn't ready yet");
          return;
        }

        this.paintInlineImageXObject(imgData);
      },
      paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
        var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

        if (!imgData) {
          warn("Dependent image isn't ready yet");
          return;
        }

        var width = imgData.width;
        var height = imgData.height;
        var map = [];

        for (var i = 0, ii = positions.length; i < ii; i += 2) {
          map.push({
            transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
            x: 0,
            y: 0,
            w: width,
            h: height
          });
        }

        this.paintInlineImageXObjectGroup(imgData, map);
      },
      paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
        var width = imgData.width;
        var height = imgData.height;
        var ctx = this.ctx;
        this.save(); // scale the image to the unit square

        ctx.scale(1 / width, -1 / height);
        var currentTransform = ctx.mozCurrentTransformInverse;
        var a = currentTransform[0],
            b = currentTransform[1];
        var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
        var c = currentTransform[2],
            d = currentTransform[3];
        var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
        var imgToPaint, tmpCanvas; // typeof check is needed due to node.js support, see issue #8489

        if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
          imgToPaint = imgData;
        } else {
          tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
          var tmpCtx = tmpCanvas.context;
          putBinaryImageData(tmpCtx, imgData);
          imgToPaint = tmpCanvas.canvas;
        }

        var paintWidth = width,
            paintHeight = height;
        var tmpCanvasId = "prescale1"; // Vertial or horizontal scaling shall not be more than 2 to not loose the
        // pixels during drawImage operation, painting on the temporary canvas(es)
        // that are twice smaller in size

        while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
          var newWidth = paintWidth,
              newHeight = paintHeight;

          if (widthScale > 2 && paintWidth > 1) {
            newWidth = Math.ceil(paintWidth / 2);
            widthScale /= paintWidth / newWidth;
          }

          if (heightScale > 2 && paintHeight > 1) {
            newHeight = Math.ceil(paintHeight / 2);
            heightScale /= paintHeight / newHeight;
          }

          tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
          tmpCtx = tmpCanvas.context;
          tmpCtx.clearRect(0, 0, newWidth, newHeight);
          tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
          imgToPaint = tmpCanvas.canvas;
          paintWidth = newWidth;
          paintHeight = newHeight;
          tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
        }

        ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);

        if (this.imageLayer) {
          var position = this.getCanvasPosition(0, -height);
          this.imageLayer.appendImage({
            imgData: imgData,
            left: position[0],
            top: position[1],
            width: width / currentTransform[0],
            height: height / currentTransform[3]
          });
        }

        this.restore();
      },
      paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
        var ctx = this.ctx;
        var w = imgData.width;
        var h = imgData.height;
        var tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
        var tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData);

        for (var i = 0, ii = map.length; i < ii; i++) {
          var entry = map[i];
          ctx.save();
          ctx.transform.apply(ctx, entry.transform);
          ctx.scale(1, -1);
          ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);

          if (this.imageLayer) {
            var position = this.getCanvasPosition(entry.x, entry.y);
            this.imageLayer.appendImage({
              imgData: imgData,
              left: position[0],
              top: position[1],
              width: w,
              height: h
            });
          }

          ctx.restore();
        }
      },
      paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
        this.ctx.fillRect(0, 0, 1, 1);
      },
      paintXObject: function CanvasGraphics_paintXObject() {
        warn("Unsupported 'paintXObject' command.");
      },
      // Marked content
      markPoint: function CanvasGraphics_markPoint(tag) {// TODO Marked content.
      },
      markPointProps: function CanvasGraphics_markPointProps(tag, properties) {// TODO Marked content.
      },
      beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {// TODO Marked content.
      },
      beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {// TODO Marked content.
      },
      endMarkedContent: function CanvasGraphics_endMarkedContent() {// TODO Marked content.
      },
      // Compatibility
      beginCompat: function CanvasGraphics_beginCompat() {// TODO ignore undefined operators (should we do that anyway?)
      },
      endCompat: function CanvasGraphics_endCompat() {// TODO stop ignoring undefined operators
      },
      // Helper functions
      consumePath: function CanvasGraphics_consumePath() {
        var ctx = this.ctx;

        if (this.pendingClip) {
          if (this.pendingClip === EO_CLIP) {
            ctx.clip("evenodd");
          } else {
            ctx.clip();
          }

          this.pendingClip = null;
        }

        ctx.beginPath();
      },
      getSinglePixelWidth: function getSinglePixelWidth(scale) {
        if (this._cachedGetSinglePixelWidth === null) {
          var inverse = this.ctx.mozCurrentTransformInverse; // max of the current horizontal and vertical scale

          this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
        }

        return this._cachedGetSinglePixelWidth;
      },
      getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
        var transform = this.ctx.mozCurrentTransform;
        return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
      }
    };

    for (var op in OPS) {
      CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
    }

    return CanvasGraphics;
  }();

  /* Copyright 2018 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var GlobalWorkerOptions = Object.create(null);
  /**
   * Defines global port for worker process. Overrides the `workerSrc` option.
   * @var {Object}
   */

  GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
  /**
   * A string containing the path and filename of the worker file.
   *
   * NOTE: The `workerSrc` option should always be set, in order to prevent any
   *       issues when using the PDF.js library.
   * @var {string}
   */

  GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? "" : GlobalWorkerOptions.workerSrc;

  var CallbackKind = {
    UNKNOWN: 0,
    DATA: 1,
    ERROR: 2
  };
  var StreamKind = {
    UNKNOWN: 0,
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8
  };

  function wrapReason(reason) {
    if (typeof PDFJSDev === "undefined" || PDFJSDev.test("!PRODUCTION || TESTING")) {
      assert(reason instanceof Error || _typeof(reason) === "object" && reason !== null, 'wrapReason: Expected "reason" to be a (possibly cloned) Error.');
    }

    if (_typeof(reason) !== "object" || reason === null) {
      return reason;
    }

    switch (reason.name) {
      case "AbortException":
        return new AbortException(reason.message);

      case "MissingPDFException":
        return new MissingPDFException(reason.message);

      case "UnexpectedResponseException":
        return new UnexpectedResponseException(reason.message, reason.status);

      case "UnknownErrorException":
        return new UnknownErrorException(reason.message, reason.details);

      default:
        return new UnknownErrorException(reason.message, reason.toString());
    }
  }

  var MessageHandler =
  /*#__PURE__*/
  function () {
    function MessageHandler(sourceName, targetName, comObj) {
      var _this = this;

      _classCallCheck(this, MessageHandler);

      this.sourceName = sourceName;
      this.targetName = targetName;
      this.comObj = comObj;
      this.callbackId = 1;
      this.streamId = 1;
      this.postMessageTransfers = true;
      this.streamSinks = Object.create(null);
      this.streamControllers = Object.create(null);
      this.callbackCapabilities = Object.create(null);
      this.actionHandler = Object.create(null);

      this._onComObjOnMessage = function (event) {
        var data = event.data;

        if (data.targetName !== _this.sourceName) {
          return;
        }

        if (data.stream) {
          _this._processStreamMessage(data);

          return;
        }

        if (data.callback) {
          var callbackId = data.callbackId;
          var capability = _this.callbackCapabilities[callbackId];

          if (!capability) {
            throw new Error("Cannot resolve callback ".concat(callbackId));
          }

          delete _this.callbackCapabilities[callbackId];

          if (data.callback === CallbackKind.DATA) {
            capability.resolve(data.data);
          } else if (data.callback === CallbackKind.ERROR) {
            capability.reject(wrapReason(data.reason));
          } else {
            throw new Error("Unexpected callback case");
          }

          return;
        }

        var action = _this.actionHandler[data.action];

        if (!action) {
          throw new Error("Unknown action from worker: ".concat(data.action));
        }

        if (data.callbackId) {
          var _sourceName = _this.sourceName;
          var _targetName = data.sourceName;
          new Promise(function (resolve) {
            resolve(action(data.data));
          }).then(function (result) {
            comObj.postMessage({
              sourceName: _sourceName,
              targetName: _targetName,
              callback: CallbackKind.DATA,
              callbackId: data.callbackId,
              data: result
            });
          }, function (reason) {
            comObj.postMessage({
              sourceName: _sourceName,
              targetName: _targetName,
              callback: CallbackKind.ERROR,
              callbackId: data.callbackId,
              reason: wrapReason(reason)
            });
          });
          return;
        }

        if (data.streamId) {
          _this._createStreamSink(data);

          return;
        }

        action(data.data);
      };

      comObj.addEventListener("message", this._onComObjOnMessage);
    }

    _createClass(MessageHandler, [{
      key: "on",
      value: function on(actionName, handler) {
        if (typeof PDFJSDev === "undefined" || PDFJSDev.test("!PRODUCTION || TESTING")) {
          assert(typeof handler === "function", 'MessageHandler.on: Expected "handler" to be a function.');
        }

        var ah = this.actionHandler;

        if (ah[actionName]) {
          throw new Error("There is already an actionName called \"".concat(actionName, "\""));
        }

        ah[actionName] = handler;
      }
      /**
       * Sends a message to the comObj to invoke the action with the supplied data.
       * @param {string} actionName - Action to call.
       * @param {JSON} data - JSON data to send.
       * @param {Array} [transfers] - List of transfers/ArrayBuffers.
       */

    }, {
      key: "send",
      value: function send(actionName, data, transfers) {
        this._postMessage({
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: actionName,
          data: data
        }, transfers);
      }
      /**
       * Sends a message to the comObj to invoke the action with the supplied data.
       * Expects that the other side will callback with the response.
       * @param {string} actionName - Action to call.
       * @param {JSON} data - JSON data to send.
       * @param {Array} [transfers] - List of transfers/ArrayBuffers.
       * @returns {Promise} Promise to be resolved with response data.
       */

    }, {
      key: "sendWithPromise",
      value: function sendWithPromise(actionName, data, transfers) {
        var callbackId = this.callbackId++;
        var capability = createPromiseCapability();
        this.callbackCapabilities[callbackId] = capability;

        try {
          this._postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: actionName,
            callbackId: callbackId,
            data: data
          }, transfers);
        } catch (ex) {
          capability.reject(ex);
        }

        return capability.promise;
      }
      /**
       * Sends a message to the comObj to invoke the action with the supplied data.
       * Expect that the other side will callback to signal 'start_complete'.
       * @param {string} actionName - Action to call.
       * @param {JSON} data - JSON data to send.
       * @param {Object} queueingStrategy - Strategy to signal backpressure based on
       *                 internal queue.
       * @param {Array} [transfers] - List of transfers/ArrayBuffers.
       * @returns {ReadableStream} ReadableStream to read data in chunks.
       */

    }, {
      key: "sendWithStream",
      value: function sendWithStream(actionName, data, queueingStrategy, transfers) {
        var _this2 = this;

        var streamId = this.streamId++;
        var sourceName = this.sourceName;
        var targetName = this.targetName;
        var comObj = this.comObj;
        return new ReadableStream({
          start: function start(controller) {
            var startCapability = createPromiseCapability();
            _this2.streamControllers[streamId] = {
              controller: controller,
              startCall: startCapability,
              pullCall: null,
              cancelCall: null,
              isClosed: false
            };

            _this2._postMessage({
              sourceName: sourceName,
              targetName: targetName,
              action: actionName,
              streamId: streamId,
              data: data,
              desiredSize: controller.desiredSize
            }, transfers); // Return Promise for Async process, to signal success/failure.


            return startCapability.promise;
          },
          pull: function pull(controller) {
            var pullCapability = createPromiseCapability();
            _this2.streamControllers[streamId].pullCall = pullCapability;
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.PULL,
              streamId: streamId,
              desiredSize: controller.desiredSize
            }); // Returning Promise will not call "pull"
            // again until current pull is resolved.

            return pullCapability.promise;
          },
          cancel: function cancel(reason) {
            assert(reason instanceof Error, "cancel must have a valid reason");
            var cancelCapability = createPromiseCapability();
            _this2.streamControllers[streamId].cancelCall = cancelCapability;
            _this2.streamControllers[streamId].isClosed = true;
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.CANCEL,
              streamId: streamId,
              reason: wrapReason(reason)
            }); // Return Promise to signal success or failure.

            return cancelCapability.promise;
          }
        }, queueingStrategy);
      }
      /**
       * @private
       */

    }, {
      key: "_createStreamSink",
      value: function _createStreamSink(data) {
        var self = this;
        var action = this.actionHandler[data.action];
        var streamId = data.streamId;
        var sourceName = this.sourceName;
        var targetName = data.sourceName;
        var comObj = this.comObj;
        var streamSink = {
          enqueue: function enqueue(chunk) {
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var transfers = arguments.length > 2 ? arguments[2] : undefined;

            if (this.isCancelled) {
              return;
            }

            var lastDesiredSize = this.desiredSize;
            this.desiredSize -= size; // Enqueue decreases the desiredSize property of sink,
            // so when it changes from positive to negative,
            // set ready as unresolved promise.

            if (lastDesiredSize > 0 && this.desiredSize <= 0) {
              this.sinkCapability = createPromiseCapability();
              this.ready = this.sinkCapability.promise;
            }

            self._postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.ENQUEUE,
              streamId: streamId,
              chunk: chunk
            }, transfers);
          },
          close: function close() {
            if (this.isCancelled) {
              return;
            }

            this.isCancelled = true;
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.CLOSE,
              streamId: streamId
            });
            delete self.streamSinks[streamId];
          },
          error: function error(reason) {
            assert(reason instanceof Error, "error must have a valid reason");

            if (this.isCancelled) {
              return;
            }

            this.isCancelled = true;
            comObj.postMessage({
              sourceName: sourceName,
              targetName: targetName,
              stream: StreamKind.ERROR,
              streamId: streamId,
              reason: wrapReason(reason)
            });
          },
          sinkCapability: createPromiseCapability(),
          onPull: null,
          onCancel: null,
          isCancelled: false,
          desiredSize: data.desiredSize,
          ready: null
        };
        streamSink.sinkCapability.resolve();
        streamSink.ready = streamSink.sinkCapability.promise;
        this.streamSinks[streamId] = streamSink;
        new Promise(function (resolve) {
          resolve(action(data.data, streamSink));
        }).then(function () {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.START_COMPLETE,
            streamId: streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.START_COMPLETE,
            streamId: streamId,
            reason: wrapReason(reason)
          });
        });
      }
      /**
       * @private
       */

    }, {
      key: "_processStreamMessage",
      value: function _processStreamMessage(data) {
        var streamId = data.streamId;
        var sourceName = this.sourceName;
        var targetName = data.sourceName;
        var comObj = this.comObj;

        switch (data.stream) {
          case StreamKind.START_COMPLETE:
            if (data.success) {
              this.streamControllers[streamId].startCall.resolve();
            } else {
              this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
            }

            break;

          case StreamKind.PULL_COMPLETE:
            if (data.success) {
              this.streamControllers[streamId].pullCall.resolve();
            } else {
              this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
            }

            break;

          case StreamKind.PULL:
            // Ignore any pull after close is called.
            if (!this.streamSinks[streamId]) {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.PULL_COMPLETE,
                streamId: streamId,
                success: true
              });
              break;
            } // Pull increases the desiredSize property of sink,
            // so when it changes from negative to positive,
            // set ready property as resolved promise.


            if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
              this.streamSinks[streamId].sinkCapability.resolve();
            } // Reset desiredSize property of sink on every pull.


            this.streamSinks[streamId].desiredSize = data.desiredSize;
            var onPull = this.streamSinks[data.streamId].onPull;
            new Promise(function (resolve) {
              resolve(onPull && onPull());
            }).then(function () {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.PULL_COMPLETE,
                streamId: streamId,
                success: true
              });
            }, function (reason) {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.PULL_COMPLETE,
                streamId: streamId,
                reason: wrapReason(reason)
              });
            });
            break;

          case StreamKind.ENQUEUE:
            assert(this.streamControllers[streamId], "enqueue should have stream controller");

            if (this.streamControllers[streamId].isClosed) {
              break;
            }

            this.streamControllers[streamId].controller.enqueue(data.chunk);
            break;

          case StreamKind.CLOSE:
            assert(this.streamControllers[streamId], "close should have stream controller");

            if (this.streamControllers[streamId].isClosed) {
              break;
            }

            this.streamControllers[streamId].isClosed = true;
            this.streamControllers[streamId].controller.close();

            this._deleteStreamController(streamId);

            break;

          case StreamKind.ERROR:
            assert(this.streamControllers[streamId], "error should have stream controller");
            this.streamControllers[streamId].controller.error(wrapReason(data.reason));

            this._deleteStreamController(streamId);

            break;

          case StreamKind.CANCEL_COMPLETE:
            if (data.success) {
              this.streamControllers[streamId].cancelCall.resolve();
            } else {
              this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
            }

            this._deleteStreamController(streamId);

            break;

          case StreamKind.CANCEL:
            if (!this.streamSinks[streamId]) {
              break;
            }

            var onCancel = this.streamSinks[data.streamId].onCancel;
            new Promise(function (resolve) {
              resolve(onCancel && onCancel(wrapReason(data.reason)));
            }).then(function () {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.CANCEL_COMPLETE,
                streamId: streamId,
                success: true
              });
            }, function (reason) {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.CANCEL_COMPLETE,
                streamId: streamId,
                reason: wrapReason(reason)
              });
            });
            this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
            this.streamSinks[streamId].isCancelled = true;
            delete this.streamSinks[streamId];
            break;

          default:
            throw new Error("Unexpected stream case");
        }
      }
      /**
       * @private
       */

    }, {
      key: "_deleteStreamController",
      value: function () {
        var _deleteStreamController2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(streamId) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([this.streamControllers[streamId].startCall, this.streamControllers[streamId].pullCall, this.streamControllers[streamId].cancelCall].map(function (capability) {
                    return capability && capability.promise.catch(function () {});
                  }));

                case 2:
                  delete this.streamControllers[streamId];

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _deleteStreamController(_x) {
          return _deleteStreamController2.apply(this, arguments);
        }

        return _deleteStreamController;
      }()
      /**
       * Sends raw message to the comObj.
       * @param {Object} message - Raw message.
       * @param transfers List of transfers/ArrayBuffers, or undefined.
       * @private
       */

    }, {
      key: "_postMessage",
      value: function _postMessage(message, transfers) {
        if (transfers && this.postMessageTransfers) {
          this.comObj.postMessage(message, transfers);
        } else {
          this.comObj.postMessage(message);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.comObj.removeEventListener("message", this._onComObjOnMessage);
      }
    }]);

    return MessageHandler;
  }();

  /* Copyright 2018 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // The code for XMLParserBase copied from
  // https://github.com/mozilla/shumway/blob/16451d8836fa85f4b16eeda8b4bda2fa9e2b22b0/src/avm2/natives/xml.ts
  var XMLParserErrorCode = {
    NoError: 0,
    EndOfDocument: -1,
    UnterminatedCdat: -2,
    UnterminatedXmlDeclaration: -3,
    UnterminatedDoctypeDeclaration: -4,
    UnterminatedComment: -5,
    MalformedElement: -6,
    OutOfMemory: -7,
    UnterminatedAttributeValue: -8,
    UnterminatedElement: -9,
    ElementNeverBegun: -10
  };

  function isWhitespace(s, index) {
    var ch = s[index];
    return ch === " " || ch === "\n" || ch === "\r" || ch === "\t";
  }

  function isWhitespaceString(s) {
    for (var i = 0, ii = s.length; i < ii; i++) {
      if (!isWhitespace(s, i)) {
        return false;
      }
    }

    return true;
  }

  var XMLParserBase =
  /*#__PURE__*/
  function () {
    function XMLParserBase() {
      _classCallCheck(this, XMLParserBase);
    }

    _createClass(XMLParserBase, [{
      key: "_resolveEntities",
      value: function _resolveEntities(s) {
        var _this = this;

        return s.replace(/&([^;]+);/g, function (all, entity) {
          if (entity.substring(0, 2) === "#x") {
            return String.fromCharCode(parseInt(entity.substring(2), 16));
          } else if (entity.substring(0, 1) === "#") {
            return String.fromCharCode(parseInt(entity.substring(1), 10));
          }

          switch (entity) {
            case "lt":
              return "<";

            case "gt":
              return ">";

            case "amp":
              return "&";

            case "quot":
              return '"';
          }

          return _this.onResolveEntity(entity);
        });
      }
    }, {
      key: "_parseContent",
      value: function _parseContent(s, start) {
        var pos = start,
            name,
            attributes = [];

        function skipWs() {
          while (pos < s.length && isWhitespace(s, pos)) {
            ++pos;
          }
        }

        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
          ++pos;
        }

        name = s.substring(start, pos);
        skipWs();

        while (pos < s.length && s[pos] !== ">" && s[pos] !== "/" && s[pos] !== "?") {
          skipWs();
          var attrName = "",
              attrValue = "";

          while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== "=") {
            attrName += s[pos];
            ++pos;
          }

          skipWs();

          if (s[pos] !== "=") {
            return null;
          }

          ++pos;
          skipWs();
          var attrEndChar = s[pos];

          if (attrEndChar !== '"' && attrEndChar !== "'") {
            return null;
          }

          var attrEndIndex = s.indexOf(attrEndChar, ++pos);

          if (attrEndIndex < 0) {
            return null;
          }

          attrValue = s.substring(pos, attrEndIndex);
          attributes.push({
            name: attrName,
            value: this._resolveEntities(attrValue)
          });
          pos = attrEndIndex + 1;
          skipWs();
        }

        return {
          name: name,
          attributes: attributes,
          parsed: pos - start
        };
      }
    }, {
      key: "_parseProcessingInstruction",
      value: function _parseProcessingInstruction(s, start) {
        var pos = start,
            name,
            value;

        function skipWs() {
          while (pos < s.length && isWhitespace(s, pos)) {
            ++pos;
          }
        }

        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
          ++pos;
        }

        name = s.substring(start, pos);
        skipWs();
        var attrStart = pos;

        while (pos < s.length && (s[pos] !== "?" || s[pos + 1] !== ">")) {
          ++pos;
        }

        value = s.substring(attrStart, pos);
        return {
          name: name,
          value: value,
          parsed: pos - start
        };
      }
    }, {
      key: "parseXml",
      value: function parseXml(s) {
        var i = 0;

        while (i < s.length) {
          var ch = s[i];
          var j = i;

          if (ch === "<") {
            ++j;
            var ch2 = s[j];
            var q = void 0;

            switch (ch2) {
              case "/":
                ++j;
                q = s.indexOf(">", j);

                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedElement);
                  return;
                }

                this.onEndElement(s.substring(j, q));
                j = q + 1;
                break;

              case "?":
                ++j;

                var pi = this._parseProcessingInstruction(s, j);

                if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== "?>") {
                  this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                  return;
                }

                this.onPi(pi.name, pi.value);
                j += pi.parsed + 2;
                break;

              case "!":
                if (s.substring(j + 1, j + 3) === "--") {
                  q = s.indexOf("-->", j + 3);

                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedComment);
                    return;
                  }

                  this.onComment(s.substring(j + 3, q));
                  j = q + 3;
                } else if (s.substring(j + 1, j + 8) === "[CDATA[") {
                  q = s.indexOf("]]>", j + 8);

                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedCdat);
                    return;
                  }

                  this.onCdata(s.substring(j + 8, q));
                  j = q + 3;
                } else if (s.substring(j + 1, j + 8) === "DOCTYPE") {
                  var q2 = s.indexOf("[", j + 8);
                  var complexDoctype = false;
                  q = s.indexOf(">", j + 8);

                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                    return;
                  }

                  if (q2 > 0 && q > q2) {
                    q = s.indexOf("]>", j + 8);

                    if (q < 0) {
                      this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                      return;
                    }

                    complexDoctype = true;
                  }

                  var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                  this.onDoctype(doctypeContent);
                  j = q + (complexDoctype ? 2 : 1);
                } else {
                  this.onError(XMLParserErrorCode.MalformedElement);
                  return;
                }

                break;

              default:
                var content = this._parseContent(s, j);

                if (content === null) {
                  this.onError(XMLParserErrorCode.MalformedElement);
                  return;
                }

                var isClosed = false;

                if (s.substring(j + content.parsed, j + content.parsed + 2) === "/>") {
                  isClosed = true;
                } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== ">") {
                  this.onError(XMLParserErrorCode.UnterminatedElement);
                  return;
                }

                this.onBeginElement(content.name, content.attributes, isClosed);
                j += content.parsed + (isClosed ? 2 : 1);
                break;
            }
          } else {
            while (j < s.length && s[j] !== "<") {
              j++;
            }

            var text = s.substring(i, j);
            this.onText(this._resolveEntities(text));
          }

          i = j;
        }
      }
    }, {
      key: "onResolveEntity",
      value: function onResolveEntity(name) {
        return "&".concat(name, ";");
      }
    }, {
      key: "onPi",
      value: function onPi(name, value) {}
    }, {
      key: "onComment",
      value: function onComment(text) {}
    }, {
      key: "onCdata",
      value: function onCdata(text) {}
    }, {
      key: "onDoctype",
      value: function onDoctype(doctypeContent) {}
    }, {
      key: "onText",
      value: function onText(text) {}
    }, {
      key: "onBeginElement",
      value: function onBeginElement(name, attributes, isEmpty) {}
    }, {
      key: "onEndElement",
      value: function onEndElement(name) {}
    }, {
      key: "onError",
      value: function onError(code) {}
    }]);

    return XMLParserBase;
  }();

  var SimpleDOMNode =
  /*#__PURE__*/
  function () {
    function SimpleDOMNode(nodeName, nodeValue) {
      _classCallCheck(this, SimpleDOMNode);

      this.nodeName = nodeName;
      this.nodeValue = nodeValue;
      Object.defineProperty(this, "parentNode", {
        value: null,
        writable: true
      });
    }

    _createClass(SimpleDOMNode, [{
      key: "hasChildNodes",
      value: function hasChildNodes() {
        return this.childNodes && this.childNodes.length > 0;
      }
    }, {
      key: "firstChild",
      get: function get() {
        return this.childNodes && this.childNodes[0];
      }
    }, {
      key: "nextSibling",
      get: function get() {
        var childNodes = this.parentNode.childNodes;

        if (!childNodes) {
          return undefined;
        }

        var index = childNodes.indexOf(this);

        if (index === -1) {
          return undefined;
        }

        return childNodes[index + 1];
      }
    }, {
      key: "textContent",
      get: function get() {
        if (!this.childNodes) {
          return this.nodeValue || "";
        }

        return this.childNodes.map(function (child) {
          return child.textContent;
        }).join("");
      }
    }]);

    return SimpleDOMNode;
  }();

  var SimpleXMLParser =
  /*#__PURE__*/
  function (_XMLParserBase) {
    _inherits(SimpleXMLParser, _XMLParserBase);

    function SimpleXMLParser() {
      var _this2;

      _classCallCheck(this, SimpleXMLParser);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SimpleXMLParser).call(this));
      _this2._currentFragment = null;
      _this2._stack = null;
      _this2._errorCode = XMLParserErrorCode.NoError;
      return _this2;
    }

    _createClass(SimpleXMLParser, [{
      key: "parseFromString",
      value: function parseFromString(data) {
        this._currentFragment = [];
        this._stack = [];
        this._errorCode = XMLParserErrorCode.NoError;
        this.parseXml(data);

        if (this._errorCode !== XMLParserErrorCode.NoError) {
          return undefined; // return undefined on error
        } // We should only have one root.


        var _this$_currentFragmen = _slicedToArray(this._currentFragment, 1),
            documentElement = _this$_currentFragmen[0];

        if (!documentElement) {
          return undefined; // Return undefined if no root was found.
        }

        return {
          documentElement: documentElement
        };
      }
    }, {
      key: "onResolveEntity",
      value: function onResolveEntity(name) {
        switch (name) {
          case "apos":
            return "'";
        }

        return _get(_getPrototypeOf(SimpleXMLParser.prototype), "onResolveEntity", this).call(this, name);
      }
    }, {
      key: "onText",
      value: function onText(text) {
        if (isWhitespaceString(text)) {
          return;
        }

        var node = new SimpleDOMNode("#text", text);

        this._currentFragment.push(node);
      }
    }, {
      key: "onCdata",
      value: function onCdata(text) {
        var node = new SimpleDOMNode("#text", text);

        this._currentFragment.push(node);
      }
    }, {
      key: "onBeginElement",
      value: function onBeginElement(name, attributes, isEmpty) {
        var node = new SimpleDOMNode(name);
        node.childNodes = [];

        this._currentFragment.push(node);

        if (isEmpty) {
          return;
        }

        this._stack.push(this._currentFragment);

        this._currentFragment = node.childNodes;
      }
    }, {
      key: "onEndElement",
      value: function onEndElement(name) {
        this._currentFragment = this._stack.pop() || [];
        var lastElement = this._currentFragment[this._currentFragment.length - 1];

        if (!lastElement) {
          return;
        }

        for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
          lastElement.childNodes[i].parentNode = lastElement;
        }
      }
    }, {
      key: "onError",
      value: function onError(code) {
        this._errorCode = code;
      }
    }]);

    return SimpleXMLParser;
  }(XMLParserBase);

  var Metadata =
  /*#__PURE__*/
  function () {
    function Metadata(data) {
      _classCallCheck(this, Metadata);

      assert(typeof data === "string", "Metadata: input is not a string"); // Ghostscript may produce invalid metadata, so try to repair that first.

      data = this._repair(data); // Convert the string to an XML document.

      var parser = new SimpleXMLParser();
      var xmlDocument = parser.parseFromString(data);
      this._metadata = Object.create(null);

      if (xmlDocument) {
        this._parse(xmlDocument);
      }
    }

    _createClass(Metadata, [{
      key: "_repair",
      value: function _repair(data) {
        // Start by removing any "junk" before the first tag (see issue 10395).
        return data.replace(/^([^<]+)/, "").replace(/>\\376\\377([^<]+)/g, function (all, codes) {
          var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
            return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
          }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
            switch (name) {
              case "amp":
                return "&";

              case "apos":
                return "'";

              case "gt":
                return ">";

              case "lt":
                return "<";

              case "quot":
                return '"';
            }

            throw new Error("_repair: ".concat(name, " isn't defined."));
          });
          var chars = "";

          for (var i = 0, ii = bytes.length; i < ii; i += 2) {
            var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);

            if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
              chars += String.fromCharCode(code);
            } else {
              chars += "&#x" + (0x10000 + code).toString(16).substring(1) + ";";
            }
          }

          return ">" + chars;
        });
      }
    }, {
      key: "_parse",
      value: function _parse(xmlDocument) {
        var rdf = xmlDocument.documentElement;

        if (rdf.nodeName.toLowerCase() !== "rdf:rdf") {
          // Wrapped in <xmpmeta>
          rdf = rdf.firstChild;

          while (rdf && rdf.nodeName.toLowerCase() !== "rdf:rdf") {
            rdf = rdf.nextSibling;
          }
        }

        var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;

        if (!rdf || nodeName !== "rdf:rdf" || !rdf.hasChildNodes()) {
          return;
        }

        var children = rdf.childNodes;

        for (var i = 0, ii = children.length; i < ii; i++) {
          var desc = children[i];

          if (desc.nodeName.toLowerCase() !== "rdf:description") {
            continue;
          }

          for (var j = 0, jj = desc.childNodes.length; j < jj; j++) {
            if (desc.childNodes[j].nodeName.toLowerCase() !== "#text") {
              var entry = desc.childNodes[j];
              var name = entry.nodeName.toLowerCase();
              this._metadata[name] = entry.textContent.trim();
            }
          }
        }
      }
    }, {
      key: "get",
      value: function get(name) {
        var data = this._metadata[name];
        return typeof data !== "undefined" ? data : null;
      }
    }, {
      key: "getAll",
      value: function getAll() {
        return this._metadata;
      }
    }, {
      key: "has",
      value: function has(name) {
        return typeof this._metadata[name] !== "undefined";
      }
    }]);

    return Metadata;
  }();

  /** @implements {IPDFStream} */

  var PDFDataTransportStream =
  /*#__PURE__*/
  function () {
    function PDFDataTransportStream(params, pdfDataRangeTransport) {
      var _this = this;

      _classCallCheck(this, PDFDataTransportStream);

      assert(pdfDataRangeTransport);
      this._queuedChunks = [];
      this._progressiveDone = params.progressiveDone || false;
      var initialData = params.initialData;

      if (initialData && initialData.length > 0) {
        var buffer = new Uint8Array(initialData).buffer;

        this._queuedChunks.push(buffer);
      }

      this._pdfDataRangeTransport = pdfDataRangeTransport;
      this._isStreamingSupported = !params.disableStream;
      this._isRangeSupported = !params.disableRange;
      this._contentLength = params.length;
      this._fullRequestReader = null;
      this._rangeReaders = [];

      this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
        _this._onReceiveData({
          begin: begin,
          chunk: chunk
        });
      });

      this._pdfDataRangeTransport.addProgressListener(function (loaded, total) {
        _this._onProgress({
          loaded: loaded,
          total: total
        });
      });

      this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
        _this._onReceiveData({
          chunk: chunk
        });
      });

      this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
        _this._onProgressiveDone();
      });

      this._pdfDataRangeTransport.transportReady();
    }

    _createClass(PDFDataTransportStream, [{
      key: "_onReceiveData",
      value: function _onReceiveData(args) {
        var buffer = new Uint8Array(args.chunk).buffer;

        if (args.begin === undefined) {
          if (this._fullRequestReader) {
            this._fullRequestReader._enqueue(buffer);
          } else {
            this._queuedChunks.push(buffer);
          }
        } else {
          var found = this._rangeReaders.some(function (rangeReader) {
            if (rangeReader._begin !== args.begin) {
              return false;
            }

            rangeReader._enqueue(buffer);

            return true;
          });

          assert(found);
        }
      }
    }, {
      key: "_onProgress",
      value: function _onProgress(evt) {
        if (evt.total === undefined) {
          // Reporting to first range reader, if it exists.
          var firstReader = this._rangeReaders[0];

          if (firstReader && firstReader.onProgress) {
            firstReader.onProgress({
              loaded: evt.loaded
            });
          }
        } else {
          var fullReader = this._fullRequestReader;

          if (fullReader && fullReader.onProgress) {
            fullReader.onProgress({
              loaded: evt.loaded,
              total: evt.total
            });
          }
        }
      }
    }, {
      key: "_onProgressiveDone",
      value: function _onProgressiveDone() {
        if (this._fullRequestReader) {
          this._fullRequestReader.progressiveDone();
        }

        this._progressiveDone = true;
      }
    }, {
      key: "_removeRangeReader",
      value: function _removeRangeReader(reader) {
        var i = this._rangeReaders.indexOf(reader);

        if (i >= 0) {
          this._rangeReaders.splice(i, 1);
        }
      }
    }, {
      key: "getFullReader",
      value: function getFullReader() {
        assert(!this._fullRequestReader);
        var queuedChunks = this._queuedChunks;
        this._queuedChunks = null;
        return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
      }
    }, {
      key: "getRangeReader",
      value: function getRangeReader(begin, end) {
        if (end <= this._progressiveDataLength) {
          return null;
        }

        var reader = new PDFDataTransportStreamRangeReader(this, begin, end);

        this._pdfDataRangeTransport.requestDataRange(begin, end);

        this._rangeReaders.push(reader);

        return reader;
      }
    }, {
      key: "cancelAllRequests",
      value: function cancelAllRequests(reason) {
        if (this._fullRequestReader) {
          this._fullRequestReader.cancel(reason);
        }

        var readers = this._rangeReaders.slice(0);

        readers.forEach(function (rangeReader) {
          rangeReader.cancel(reason);
        });

        this._pdfDataRangeTransport.abort();
      }
    }, {
      key: "_progressiveDataLength",
      get: function get() {
        return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
      }
    }]);

    return PDFDataTransportStream;
  }();
  /** @implements {IPDFStreamReader} */


  var PDFDataTransportStreamReader =
  /*#__PURE__*/
  function () {
    function PDFDataTransportStreamReader(stream, queuedChunks) {
      var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, PDFDataTransportStreamReader);

      this._stream = stream;
      this._done = progressiveDone || false;
      this._filename = null;
      this._queuedChunks = queuedChunks || [];
      this._loaded = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._queuedChunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var chunk = _step.value;
          this._loaded += chunk.byteLength;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._requests = [];
      this._headersReady = Promise.resolve();
      stream._fullRequestReader = this;
      this.onProgress = null;
    }

    _createClass(PDFDataTransportStreamReader, [{
      key: "_enqueue",
      value: function _enqueue(chunk) {
        if (this._done) {
          return; // Ignore new data.
        }

        if (this._requests.length > 0) {
          var requestCapability = this._requests.shift();

          requestCapability.resolve({
            value: chunk,
            done: false
          });
        } else {
          this._queuedChunks.push(chunk);
        }

        this._loaded += chunk.byteLength;
      }
    }, {
      key: "read",
      value: function () {
        var _read = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var chunk, requestCapability;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(this._queuedChunks.length > 0)) {
                    _context.next = 3;
                    break;
                  }

                  chunk = this._queuedChunks.shift();
                  return _context.abrupt("return", {
                    value: chunk,
                    done: false
                  });

                case 3:
                  if (!this._done) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", {
                    value: undefined,
                    done: true
                  });

                case 5:
                  requestCapability = createPromiseCapability();

                  this._requests.push(requestCapability);

                  return _context.abrupt("return", requestCapability.promise);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function read() {
          return _read.apply(this, arguments);
        }

        return read;
      }()
    }, {
      key: "cancel",
      value: function cancel(reason) {
        this._done = true;

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];
      }
    }, {
      key: "progressiveDone",
      value: function progressiveDone() {
        if (this._done) {
          return;
        }

        this._done = true;
      }
    }, {
      key: "headersReady",
      get: function get() {
        return this._headersReady;
      }
    }, {
      key: "filename",
      get: function get() {
        return this._filename;
      }
    }, {
      key: "isRangeSupported",
      get: function get() {
        return this._stream._isRangeSupported;
      }
    }, {
      key: "isStreamingSupported",
      get: function get() {
        return this._stream._isStreamingSupported;
      }
    }, {
      key: "contentLength",
      get: function get() {
        return this._stream._contentLength;
      }
    }]);

    return PDFDataTransportStreamReader;
  }();
  /** @implements {IPDFStreamRangeReader} */


  var PDFDataTransportStreamRangeReader =
  /*#__PURE__*/
  function () {
    function PDFDataTransportStreamRangeReader(stream, begin, end) {
      _classCallCheck(this, PDFDataTransportStreamRangeReader);

      this._stream = stream;
      this._begin = begin;
      this._end = end;
      this._queuedChunk = null;
      this._requests = [];
      this._done = false;
      this.onProgress = null;
    }

    _createClass(PDFDataTransportStreamRangeReader, [{
      key: "_enqueue",
      value: function _enqueue(chunk) {
        if (this._done) {
          return; // ignore new data
        }

        if (this._requests.length === 0) {
          this._queuedChunk = chunk;
        } else {
          var requestsCapability = this._requests.shift();

          requestsCapability.resolve({
            value: chunk,
            done: false
          });

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];
        }

        this._done = true;

        this._stream._removeRangeReader(this);
      }
    }, {
      key: "read",
      value: function () {
        var _read2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var chunk, requestCapability;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this._queuedChunk) {
                    _context2.next = 4;
                    break;
                  }

                  chunk = this._queuedChunk;
                  this._queuedChunk = null;
                  return _context2.abrupt("return", {
                    value: chunk,
                    done: false
                  });

                case 4:
                  if (!this._done) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return", {
                    value: undefined,
                    done: true
                  });

                case 6:
                  requestCapability = createPromiseCapability();

                  this._requests.push(requestCapability);

                  return _context2.abrupt("return", requestCapability.promise);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function read() {
          return _read2.apply(this, arguments);
        }

        return read;
      }()
    }, {
      key: "cancel",
      value: function cancel(reason) {
        this._done = true;

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];

        this._stream._removeRangeReader(this);
      }
    }, {
      key: "isStreamingSupported",
      get: function get() {
        return false;
      }
    }]);

    return PDFDataTransportStreamRangeReader;
  }();

  var WebGLContext =
  /*#__PURE__*/
  function () {
    function WebGLContext(_ref) {
      var _ref$enable = _ref.enable,
          enable = _ref$enable === void 0 ? false : _ref$enable;

      _classCallCheck(this, WebGLContext);

      this._enabled = enable === true;
    }

    _createClass(WebGLContext, [{
      key: "composeSMask",
      value: function composeSMask(_ref2) {
        var layer = _ref2.layer,
            mask = _ref2.mask,
            properties = _ref2.properties;
        return WebGLUtils.composeSMask(layer, mask, properties);
      }
    }, {
      key: "drawFigures",
      value: function drawFigures(_ref3) {
        var width = _ref3.width,
            height = _ref3.height,
            backgroundColor = _ref3.backgroundColor,
            figures = _ref3.figures,
            context = _ref3.context;
        return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
      }
    }, {
      key: "clear",
      value: function clear() {
        WebGLUtils.cleanup();
      }
    }, {
      key: "isEnabled",
      get: function get() {
        var enabled = this._enabled;

        if (enabled) {
          enabled = WebGLUtils.tryInitGL();
        }

        return shadow(this, "isEnabled", enabled);
      }
    }]);

    return WebGLContext;
  }();

  var WebGLUtils = function WebGLUtilsClosure() {
    function loadShader(gl, code, shaderType) {
      var shader = gl.createShader(shaderType);
      gl.shaderSource(shader, code);
      gl.compileShader(shader);
      var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

      if (!compiled) {
        var errorMsg = gl.getShaderInfoLog(shader);
        throw new Error("Error during shader compilation: " + errorMsg);
      }

      return shader;
    }

    function createVertexShader(gl, code) {
      return loadShader(gl, code, gl.VERTEX_SHADER);
    }

    function createFragmentShader(gl, code) {
      return loadShader(gl, code, gl.FRAGMENT_SHADER);
    }

    function createProgram(gl, shaders) {
      var program = gl.createProgram();

      for (var i = 0, ii = shaders.length; i < ii; ++i) {
        gl.attachShader(program, shaders[i]);
      }

      gl.linkProgram(program);
      var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

      if (!linked) {
        var errorMsg = gl.getProgramInfoLog(program);
        throw new Error("Error during program linking: " + errorMsg);
      }

      return program;
    }

    function createTexture(gl, image, textureId) {
      gl.activeTexture(textureId);
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture); // Set the parameters so we can render any size image.

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST); // Upload the image into the texture.

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      return texture;
    }

    var currentGL, currentCanvas;

    function generateGL() {
      if (currentGL) {
        return;
      } // The temporary canvas is used in the WebGL context.


      currentCanvas = document.createElement("canvas");
      currentGL = currentCanvas.getContext("webgl", {
        premultipliedalpha: false
      });
    }

    var smaskVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ";
    var smaskFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ";
    var smaskCache = null;

    function initSmaskGL() {
      var canvas, gl;
      generateGL();
      canvas = currentCanvas;
      currentCanvas = null;
      gl = currentGL;
      currentGL = null; // setup a GLSL program

      var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
      var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
      var program = createProgram(gl, [vertexShader, fragmentShader]);
      gl.useProgram(program);
      var cache = {};
      cache.gl = gl;
      cache.canvas = canvas;
      cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      cache.positionLocation = gl.getAttribLocation(program, "a_position");
      cache.backdropLocation = gl.getUniformLocation(program, "u_backdrop");
      cache.subtypeLocation = gl.getUniformLocation(program, "u_subtype");
      var texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
      var texLayerLocation = gl.getUniformLocation(program, "u_image");
      var texMaskLocation = gl.getUniformLocation(program, "u_mask"); // provide texture coordinates for the rectangle.

      var texCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer); // prettier-ignore

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(texCoordLocation);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1i(texLayerLocation, 0);
      gl.uniform1i(texMaskLocation, 1);
      smaskCache = cache;
    }

    function composeSMask(layer, mask, properties) {
      var width = layer.width,
          height = layer.height;

      if (!smaskCache) {
        initSmaskGL();
      }

      var cache = smaskCache,
          canvas = cache.canvas,
          gl = cache.gl;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.uniform2f(cache.resolutionLocation, width, height);

      if (properties.backdrop) {
        gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
      } else {
        gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
      }

      gl.uniform1i(cache.subtypeLocation, properties.subtype === "Luminosity" ? 1 : 0); // Create a textures

      var texture = createTexture(gl, layer, gl.TEXTURE0);
      var maskTexture = createTexture(gl, mask, gl.TEXTURE1); // Create a buffer and put a single clipspace rectangle in
      // it (2 triangles)

      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // prettier-ignore

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(cache.positionLocation);
      gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0); // draw

      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.flush();
      gl.deleteTexture(texture);
      gl.deleteTexture(maskTexture);
      gl.deleteBuffer(buffer);
      return canvas;
    }

    var figuresVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ";
    var figuresFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ";
    var figuresCache = null;

    function initFiguresGL() {
      var canvas, gl;
      generateGL();
      canvas = currentCanvas;
      currentCanvas = null;
      gl = currentGL;
      currentGL = null; // setup a GLSL program

      var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
      var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
      var program = createProgram(gl, [vertexShader, fragmentShader]);
      gl.useProgram(program);
      var cache = {};
      cache.gl = gl;
      cache.canvas = canvas;
      cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      cache.scaleLocation = gl.getUniformLocation(program, "u_scale");
      cache.offsetLocation = gl.getUniformLocation(program, "u_offset");
      cache.positionLocation = gl.getAttribLocation(program, "a_position");
      cache.colorLocation = gl.getAttribLocation(program, "a_color");
      figuresCache = cache;
    }

    function drawFigures(width, height, backgroundColor, figures, context) {
      if (!figuresCache) {
        initFiguresGL();
      }

      var cache = figuresCache,
          canvas = cache.canvas,
          gl = cache.gl;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.uniform2f(cache.resolutionLocation, width, height); // count triangle points

      var count = 0;
      var i, ii, rows;

      for (i = 0, ii = figures.length; i < ii; i++) {
        switch (figures[i].type) {
          case "lattice":
            rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
            count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
            break;

          case "triangles":
            count += figures[i].coords.length;
            break;
        }
      } // transfer data


      var coords = new Float32Array(count * 2);
      var colors = new Uint8Array(count * 3);
      var coordsMap = context.coords,
          colorsMap = context.colors;
      var pIndex = 0,
          cIndex = 0;

      for (i = 0, ii = figures.length; i < ii; i++) {
        var figure = figures[i],
            ps = figure.coords,
            cs = figure.colors;

        switch (figure.type) {
          case "lattice":
            var cols = figure.verticesPerRow;
            rows = ps.length / cols | 0;

            for (var row = 1; row < rows; row++) {
              var offset = row * cols + 1;

              for (var col = 1; col < cols; col++, offset++) {
                coords[pIndex] = coordsMap[ps[offset - cols - 1]];
                coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
                coords[pIndex + 2] = coordsMap[ps[offset - cols]];
                coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
                coords[pIndex + 4] = coordsMap[ps[offset - 1]];
                coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
                colors[cIndex] = colorsMap[cs[offset - cols - 1]];
                colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
                colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
                colors[cIndex + 3] = colorsMap[cs[offset - cols]];
                colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
                colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
                colors[cIndex + 6] = colorsMap[cs[offset - 1]];
                colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
                colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
                coords[pIndex + 6] = coords[pIndex + 2];
                coords[pIndex + 7] = coords[pIndex + 3];
                coords[pIndex + 8] = coords[pIndex + 4];
                coords[pIndex + 9] = coords[pIndex + 5];
                coords[pIndex + 10] = coordsMap[ps[offset]];
                coords[pIndex + 11] = coordsMap[ps[offset] + 1];
                colors[cIndex + 9] = colors[cIndex + 3];
                colors[cIndex + 10] = colors[cIndex + 4];
                colors[cIndex + 11] = colors[cIndex + 5];
                colors[cIndex + 12] = colors[cIndex + 6];
                colors[cIndex + 13] = colors[cIndex + 7];
                colors[cIndex + 14] = colors[cIndex + 8];
                colors[cIndex + 15] = colorsMap[cs[offset]];
                colors[cIndex + 16] = colorsMap[cs[offset] + 1];
                colors[cIndex + 17] = colorsMap[cs[offset] + 2];
                pIndex += 12;
                cIndex += 18;
              }
            }

            break;

          case "triangles":
            for (var j = 0, jj = ps.length; j < jj; j++) {
              coords[pIndex] = coordsMap[ps[j]];
              coords[pIndex + 1] = coordsMap[ps[j] + 1];
              colors[cIndex] = colorsMap[cs[j]];
              colors[cIndex + 1] = colorsMap[cs[j] + 1];
              colors[cIndex + 2] = colorsMap[cs[j] + 2];
              pIndex += 2;
              cIndex += 3;
            }

            break;
        }
      } // draw


      if (backgroundColor) {
        gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
      } else {
        gl.clearColor(0, 0, 0, 0);
      }

      gl.clear(gl.COLOR_BUFFER_BIT);
      var coordsBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(cache.positionLocation);
      gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
      var colorsBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(cache.colorLocation);
      gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
      gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
      gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
      gl.drawArrays(gl.TRIANGLES, 0, count);
      gl.flush();
      gl.deleteBuffer(coordsBuffer);
      gl.deleteBuffer(colorsBuffer);
      return canvas;
    }

    return {
      tryInitGL: function tryInitGL() {
        try {
          generateGL();
          return !!currentGL;
        } catch (ex) {}

        return false;
      },
      composeSMask: composeSMask,
      drawFigures: drawFigures,
      cleanup: function cleanup() {
        if (smaskCache && smaskCache.canvas) {
          smaskCache.canvas.width = 0;
          smaskCache.canvas.height = 0;
        }

        if (figuresCache && figuresCache.canvas) {
          figuresCache.canvas.width = 0;
          figuresCache.canvas.height = 0;
        }

        smaskCache = null;
        figuresCache = null;
      }
    };
  }();

  var DEFAULT_RANGE_CHUNK_SIZE = 65536; // 2^16 = 65536

  var RENDERING_CANCELLED_TIMEOUT = 100; // ms

  /**
   * @typedef {function} IPDFStreamFactory
   * @param {DocumentInitParameters} params The document initialization
   * parameters. The "url" key is always present.
   * @returns {IPDFStream}
   */

  /** @type IPDFStreamFactory */

  var createPDFNetworkStream;
  /**
   * Sets the function that instantiates a IPDFStream as an alternative PDF data
   * transport.
   * @param {IPDFStreamFactory} pdfNetworkStreamFactory - the factory function
   * that takes document initialization parameters (including a "url") and returns
   * an instance of IPDFStream.
   */

  function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
    createPDFNetworkStream = pdfNetworkStreamFactory;
  }
  /**
   * Document initialization / loading parameters object.
   *
   * @typedef {Object} DocumentInitParameters
   * @property {string}     [url] - The URL of the PDF.
   * @property {TypedArray|Array|string} [data] - Binary PDF data. Use typed
   *    arrays (Uint8Array) to improve the memory usage. If PDF data is
   *    BASE64-encoded, use atob() to convert it to a binary string first.
   * @property {Object}     [httpHeaders] - Basic authentication headers.
   * @property {boolean}    [withCredentials] - Indicates whether or not
   *   cross-site Access-Control requests should be made using credentials such
   *   as cookies or authorization headers. The default is false.
   * @property {string}     [password] - For decrypting password-protected PDFs.
   * @property {TypedArray} [initialData] - A typed array with the first portion
   *   or all of the pdf data. Used by the extension since some data is already
   *   loaded before the switch to range requests.
   * @property {number}     [length] - The PDF file length. It's used for
   *   progress reports and range requests operations.
   * @property {PDFDataRangeTransport} [range]
   * @property {number}     [rangeChunkSize] - Specify maximum number of bytes
   *   fetched per range request. The default value is 2^16 = 65536.
   * @property {PDFWorker}  [worker] - The worker that will be used for
   *   the loading and parsing of the PDF data.
   * @property {number} [verbosity] - Controls the logging level; the
   *   constants from {VerbosityLevel} should be used.
   * @property {string} [docBaseUrl] - The base URL of the document,
   *   used when attempting to recover valid absolute URLs for annotations, and
   *   outline items, that (incorrectly) only specify relative URLs.
   * @property {string} [nativeImageDecoderSupport] - Strategy for
   *   decoding certain (simple) JPEG images in the browser. This is useful for
   *   environments without DOM image and canvas support, such as e.g. Node.js.
   *   Valid values are 'decode', 'display' or 'none'; where 'decode' is intended
   *   for browsers with full image/canvas support, 'display' for environments
   *   with limited image support through stubs (useful for SVG conversion),
   *   and 'none' where JPEG images will be decoded entirely by PDF.js.
   *   The default value is 'decode'.
   * @property {string} [cMapUrl] - The URL where the predefined
   *   Adobe CMaps are located. Include trailing slash.
   * @property {boolean} [cMapPacked] - Specifies if the Adobe CMaps are
   *   binary packed.
   * @property {Object} [CMapReaderFactory] - The factory that will be
   *   used when reading built-in CMap files. Providing a custom factory is useful
   *   for environments without `XMLHttpRequest` support, such as e.g. Node.js.
   *   The default value is {DOMCMapReaderFactory}.
   * @property {boolean} [stopAtErrors] - Reject certain promises, e.g.
   *   `getOperatorList`, `getTextContent`, and `RenderTask`, when the associated
   *   PDF data cannot be successfully parsed, instead of attempting to recover
   *   whatever possible of the data. The default value is `false`.
   * @property {number} [maxImageSize] - The maximum allowed image size
   *   in total pixels, i.e. width * height. Images above this value will not be
   *   rendered. Use -1 for no limit, which is also the default value.
   * @property {boolean} [isEvalSupported] - Determines if we can eval
   *   strings as JS. Primarily used to improve performance of font rendering,
   *   and when parsing PDF functions. The default value is `true`.
   * @property {boolean} [disableFontFace] - By default fonts are
   *   converted to OpenType fonts and loaded via font face rules. If disabled,
   *   fonts will be rendered using a built-in font renderer that constructs the
   *   glyphs with primitive path commands. The default value is `false`.
   * @property {boolean} [disableRange] - Disable range request loading
   *   of PDF files. When enabled, and if the server supports partial content
   *   requests, then the PDF will be fetched in chunks.
   *   The default value is `false`.
   * @property {boolean} [disableStream] - Disable streaming of PDF file
   *   data. By default PDF.js attempts to load PDFs in chunks.
   *   The default value is `false`.
   * @property {boolean} [disableAutoFetch] - Disable pre-fetching of PDF
   *   file data. When range requests are enabled PDF.js will automatically keep
   *   fetching more data even if it isn't needed to display the current page.
   *   The default value is `false`.
   *   NOTE: It is also necessary to disable streaming, see above,
   *         in order for disabling of pre-fetching to work correctly.
   * @property {boolean} [disableCreateObjectURL] - Disable the use of
   *   `URL.createObjectURL`, for compatibility with older browsers.
   *   The default value is `false`.
   * @property {boolean} [pdfBug] - Enables special hooks for debugging
   *   PDF.js (see `web/debugger.js`). The default value is `false`.
   */

  /**
   * @typedef {Object} PDFDocumentStats
   * @property {Object} streamTypes - Used stream types in the document (an item
   *   is set to true if specific stream ID was used in the document).
   * @property {Object} fontTypes - Used font types in the document (an item
   *   is set to true if specific font ID was used in the document).
   */

  /**
   * This is the main entry point for loading a PDF and interacting with it.
   * NOTE: If a URL is used to fetch the PDF data a standard XMLHttpRequest(XHR)
   * is used, which means it must follow the same origin rules that any XHR does
   * e.g. No cross domain requests without CORS.
   *
   * @param {string|TypedArray|DocumentInitParameters|PDFDataRangeTransport} src
   * Can be a url to where a PDF is located, a typed array (Uint8Array)
   * already populated with data or parameter object.
   * @returns {PDFDocumentLoadingTask}
   */


  function getDocument(src) {
    var task = new PDFDocumentLoadingTask();
    var source;

    if (typeof src === "string") {
      source = {
        url: src
      };
    } else if (isArrayBuffer(src)) {
      source = {
        data: src
      };
    } else if (src instanceof PDFDataRangeTransport) {
      source = {
        range: src
      };
    } else {
      if (_typeof(src) !== "object") {
        throw new Error("Invalid parameter in getDocument, " + "need either Uint8Array, string or a parameter object");
      }

      if (!src.url && !src.data && !src.range) {
        throw new Error("Invalid parameter object: need either .data, .range or .url");
      }

      source = src;
    }

    var params = Object.create(null);
    var rangeTransport = null,
        worker = null;

    for (var key in source) {
      if (key === "url" && typeof window !== "undefined") {
        // The full path is required in the 'url' field.
        params[key] = new URL(source[key], window.location).href;
        continue;
      } else if (key === "range") {
        rangeTransport = source[key];
        continue;
      } else if (key === "worker") {
        worker = source[key];
        continue;
      } else if (key === "data" && !(source[key] instanceof Uint8Array)) {
        // Converting string or array-like data to Uint8Array.
        var pdfBytes = source[key];

        if (typeof pdfBytes === "string") {
          params[key] = stringToBytes(pdfBytes);
        } else if (_typeof(pdfBytes) === "object" && pdfBytes !== null && !isNaN(pdfBytes.length)) {
          params[key] = new Uint8Array(pdfBytes);
        } else if (isArrayBuffer(pdfBytes)) {
          params[key] = new Uint8Array(pdfBytes);
        } else {
          throw new Error("Invalid PDF binary data: either typed array, " + "string or array-like object is expected in the " + "data property.");
        }

        continue;
      }

      params[key] = source[key];
    }

    params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
    params.CMapReaderFactory = params.CMapReaderFactory || DOMCMapReaderFactory;
    params.ignoreErrors = params.stopAtErrors !== true;
    params.pdfBug = params.pdfBug === true;
    var NativeImageDecoderValues = Object.values(NativeImageDecoding);

    if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
      params.nativeImageDecoderSupport = apiCompatibilityParams.nativeImageDecoderSupport || NativeImageDecoding.DECODE;
    }

    if (!Number.isInteger(params.maxImageSize)) {
      params.maxImageSize = -1;
    }

    if (typeof params.isEvalSupported !== "boolean") {
      params.isEvalSupported = true;
    }

    if (typeof params.disableFontFace !== "boolean") {
      params.disableFontFace = apiCompatibilityParams.disableFontFace || false;
    }

    if (typeof params.disableRange !== "boolean") {
      params.disableRange = false;
    }

    if (typeof params.disableStream !== "boolean") {
      params.disableStream = false;
    }

    if (typeof params.disableAutoFetch !== "boolean") {
      params.disableAutoFetch = false;
    }

    if (typeof params.disableCreateObjectURL !== "boolean") {
      params.disableCreateObjectURL = apiCompatibilityParams.disableCreateObjectURL || false;
    } // Set the main-thread verbosity level.


    setVerbosityLevel(params.verbosity);

    if (!worker) {
      var workerParams = {
        verbosity: params.verbosity,
        port: GlobalWorkerOptions.workerPort
      }; // Worker was not provided -- creating and owning our own. If message port
      // is specified in global worker options, using it.

      worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
      task._worker = worker;
    }

    var docId = task.docId;
    worker.promise.then(function () {
      if (task.destroyed) {
        throw new Error("Loading aborted");
      }

      return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
        if (task.destroyed) {
          throw new Error("Loading aborted");
        }

        var networkStream;

        if (rangeTransport) {
          networkStream = new PDFDataTransportStream({
            length: params.length,
            initialData: params.initialData,
            progressiveDone: params.progressiveDone,
            disableRange: params.disableRange,
            disableStream: params.disableStream
          }, rangeTransport);
        } else if (!params.data) {
          networkStream = createPDFNetworkStream({
            url: params.url,
            length: params.length,
            httpHeaders: params.httpHeaders,
            withCredentials: params.withCredentials,
            rangeChunkSize: params.rangeChunkSize,
            disableRange: params.disableRange,
            disableStream: params.disableStream
          });
        }

        var messageHandler = new MessageHandler(docId, workerId, worker.port);
        messageHandler.postMessageTransfers = worker.postMessageTransfers;
        var transport = new WorkerTransport(messageHandler, task, networkStream, params);
        task._transport = transport;
        messageHandler.send("Ready", null);
      });
    }).catch(task._capability.reject);
    return task;
  }
  /**
   * Starts fetching of specified PDF document/data.
   * @param {PDFWorker} worker
   * @param {Object} source
   * @param {PDFDataRangeTransport} pdfDataRangeTransport
   * @param {string} docId Unique document id, used as MessageHandler id.
   * @returns {Promise} The promise, which is resolved when worker id of
   *                    MessageHandler is known.
   * @private
   */


  function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
    if (worker.destroyed) {
      return Promise.reject(new Error("Worker was destroyed"));
    }

    if (pdfDataRangeTransport) {
      source.length = pdfDataRangeTransport.length;
      source.initialData = pdfDataRangeTransport.initialData;
      source.progressiveDone = pdfDataRangeTransport.progressiveDone;
    }

    return worker.messageHandler.sendWithPromise("GetDocRequest", {
      docId: docId,
      apiVersion: typeof PDFJSDev !== "undefined" && !PDFJSDev.test("TESTING") ? PDFJSDev.eval("BUNDLE_VERSION") : null,
      // Only send the required properties, and *not* the entire object.
      source: {
        data: source.data,
        url: source.url,
        password: source.password,
        disableAutoFetch: source.disableAutoFetch,
        rangeChunkSize: source.rangeChunkSize,
        length: source.length
      },
      maxImageSize: source.maxImageSize,
      disableFontFace: source.disableFontFace,
      disableCreateObjectURL: source.disableCreateObjectURL,
      postMessageTransfers: worker.postMessageTransfers,
      docBaseUrl: source.docBaseUrl,
      nativeImageDecoderSupport: source.nativeImageDecoderSupport,
      ignoreErrors: source.ignoreErrors,
      isEvalSupported: source.isEvalSupported
    }).then(function (workerId) {
      if (worker.destroyed) {
        throw new Error("Worker was destroyed");
      }

      return workerId;
    });
  }

  var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
    var nextDocumentId = 0;
    /**
     * The loading task controls the operations required to load a PDF document
     * (such as network requests) and provides a way to listen for completion,
     * after which individual pages can be rendered.
     */

    var PDFDocumentLoadingTask =
    /*#__PURE__*/
    function () {
      function PDFDocumentLoadingTask() {
        _classCallCheck(this, PDFDocumentLoadingTask);

        this._capability = createPromiseCapability();
        this._transport = null;
        this._worker = null;
        /**
         * Unique document loading task id -- used in MessageHandlers.
         * @type {string}
         */

        this.docId = "d" + nextDocumentId++;
        /**
         * Shows if loading task is destroyed.
         * @type {boolean}
         */

        this.destroyed = false;
        /**
         * Callback to request a password if wrong or no password was provided.
         * The callback receives two parameters: function that needs to be called
         * with new password and reason (see {PasswordResponses}).
         */

        this.onPassword = null;
        /**
         * Callback to be able to monitor the loading progress of the PDF file
         * (necessary to implement e.g. a loading bar). The callback receives
         * an {Object} with the properties: {number} loaded and {number} total.
         */

        this.onProgress = null;
        /**
         * Callback to when unsupported feature is used. The callback receives
         * an {UNSUPPORTED_FEATURES} argument.
         */

        this.onUnsupportedFeature = null;
      }
      /**
       * Promise for document loading task completion.
       * @type {Promise}
       */


      _createClass(PDFDocumentLoadingTask, [{
        key: "destroy",

        /**
         * Aborts all network requests and destroys worker.
         * @returns {Promise} A promise that is resolved after destruction activity
         *                    is completed.
         */
        value: function destroy() {
          var _this = this;

          this.destroyed = true;
          var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
          return transportDestroyed.then(function () {
            _this._transport = null;

            if (_this._worker) {
              _this._worker.destroy();

              _this._worker = null;
            }
          });
        }
        /**
         * Registers callbacks to indicate the document loading completion.
         * @ignore
         */

      }, {
        key: "then",
        value: function then(onFulfilled, onRejected) {
          throw new Error("Removed API method: " + "PDFDocumentLoadingTask.then, use the `promise` getter instead.");
        }
      }, {
        key: "promise",
        get: function get() {
          return this._capability.promise;
        }
      }]);

      return PDFDocumentLoadingTask;
    }();

    return PDFDocumentLoadingTask;
  }();
  /**
   * Abstract class to support range requests file loading.
   * @param {number} length
   * @param {Uint8Array} initialData
   * @param {boolean} progressiveDone
   */


  var PDFDataRangeTransport =
  /*#__PURE__*/
  function () {
    function PDFDataRangeTransport(length, initialData) {
      var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, PDFDataRangeTransport);

      this.length = length;
      this.initialData = initialData;
      this.progressiveDone = progressiveDone;
      this._rangeListeners = [];
      this._progressListeners = [];
      this._progressiveReadListeners = [];
      this._progressiveDoneListeners = [];
      this._readyCapability = createPromiseCapability();
    }

    _createClass(PDFDataRangeTransport, [{
      key: "addRangeListener",
      value: function addRangeListener(listener) {
        this._rangeListeners.push(listener);
      }
    }, {
      key: "addProgressListener",
      value: function addProgressListener(listener) {
        this._progressListeners.push(listener);
      }
    }, {
      key: "addProgressiveReadListener",
      value: function addProgressiveReadListener(listener) {
        this._progressiveReadListeners.push(listener);
      }
    }, {
      key: "addProgressiveDoneListener",
      value: function addProgressiveDoneListener(listener) {
        this._progressiveDoneListeners.push(listener);
      }
    }, {
      key: "onDataRange",
      value: function onDataRange(begin, chunk) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._rangeListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;
            listener(begin, chunk);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: "onDataProgress",
      value: function onDataProgress(loaded, total) {
        var _this2 = this;

        this._readyCapability.promise.then(function () {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _this2._progressListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var listener = _step2.value;
              listener(loaded, total);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        });
      }
    }, {
      key: "onDataProgressiveRead",
      value: function onDataProgressiveRead(chunk) {
        var _this3 = this;

        this._readyCapability.promise.then(function () {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _this3._progressiveReadListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var listener = _step3.value;
              listener(chunk);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        });
      }
    }, {
      key: "onDataProgressiveDone",
      value: function onDataProgressiveDone() {
        var _this4 = this;

        this._readyCapability.promise.then(function () {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = _this4._progressiveDoneListeners[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var listener = _step4.value;
              listener();
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        });
      }
    }, {
      key: "transportReady",
      value: function transportReady() {
        this._readyCapability.resolve();
      }
    }, {
      key: "requestDataRange",
      value: function requestDataRange(begin, end) {
        unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
      }
    }, {
      key: "abort",
      value: function abort() {}
    }]);

    return PDFDataRangeTransport;
  }();
  /**
   * Proxy to a PDFDocument in the worker thread. Also, contains commonly used
   * properties that can be read synchronously.
   */


  var PDFDocumentProxy =
  /*#__PURE__*/
  function () {
    function PDFDocumentProxy(pdfInfo, transport) {
      _classCallCheck(this, PDFDocumentProxy);

      this._pdfInfo = pdfInfo;
      this._transport = transport;
    }
    /**
     * @type {number} Total number of pages the PDF contains.
     */


    _createClass(PDFDocumentProxy, [{
      key: "getPage",

      /**
       * @param {number} pageNumber - The page number to get. The first page is 1.
       * @returns {Promise} A promise that is resolved with a {@link PDFPageProxy}
       *   object.
       */
      value: function getPage(pageNumber) {
        return this._transport.getPage(pageNumber);
      }
      /**
       * @param {{num: number, gen: number}} ref - The page reference. Must have
       *   the `num` and `gen` properties.
       * @returns {Promise} A promise that is resolved with the page index that is
       *   associated with the reference.
       */

    }, {
      key: "getPageIndex",
      value: function getPageIndex(ref) {
        return this._transport.getPageIndex(ref);
      }
      /**
       * @returns {Promise} A promise that is resolved with a lookup table for
       *   mapping named destinations to reference numbers.
       *
       * This can be slow for large documents. Use `getDestination` instead.
       */

    }, {
      key: "getDestinations",
      value: function getDestinations() {
        return this._transport.getDestinations();
      }
      /**
       * @param {string} id - The named destination to get.
       * @returns {Promise} A promise that is resolved with all information
       *   of the given named destination.
       */

    }, {
      key: "getDestination",
      value: function getDestination(id) {
        return this._transport.getDestination(id);
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Array} containing
       *   the page labels that correspond to the page indexes, or `null` when
       *   no page labels are present in the PDF file.
       */

    }, {
      key: "getPageLabels",
      value: function getPageLabels() {
        return this._transport.getPageLabels();
      }
      /**
       * @returns {Promise} A promise that is resolved with a {string} containing
       *   the page layout name.
       */

    }, {
      key: "getPageLayout",
      value: function getPageLayout() {
        return this._transport.getPageLayout();
      }
      /**
       * @returns {Promise} A promise that is resolved with a {string} containing
       *   the page mode name.
       */

    }, {
      key: "getPageMode",
      value: function getPageMode() {
        return this._transport.getPageMode();
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Object} containing
       *   the viewer preferences.
       */

    }, {
      key: "getViewerPreferences",
      value: function getViewerPreferences() {
        return this._transport.getViewerPreferences();
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Array} containing
       *   the destination, or `null` when no open action is present in the PDF.
       */

    }, {
      key: "getOpenActionDestination",
      value: function getOpenActionDestination() {
        return this._transport.getOpenActionDestination();
      }
      /**
       * @returns {Promise} A promise that is resolved with a lookup table for
       *   mapping named attachments to their content.
       */

    }, {
      key: "getAttachments",
      value: function getAttachments() {
        return this._transport.getAttachments();
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Array} of all the
       *   JavaScript strings in the name tree, or `null` if no JavaScript exists.
       */

    }, {
      key: "getJavaScript",
      value: function getJavaScript() {
        return this._transport.getJavaScript();
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Array} that is a
       * tree outline (if it has one) of the PDF. The tree is in the format of:
       * [
       *   {
       *     title: string,
       *     bold: boolean,
       *     italic: boolean,
       *     color: rgb Uint8ClampedArray,
       *     count: integer or undefined,
       *     dest: dest obj,
       *     url: string,
       *     items: array of more items like this
       *   },
       *   ...
       * ]
       */

    }, {
      key: "getOutline",
      value: function getOutline() {
        return this._transport.getOutline();
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Array} that contains
       *   the permission flags for the PDF document, or `null` when
       *   no permissions are present in the PDF file.
       */

    }, {
      key: "getPermissions",
      value: function getPermissions() {
        return this._transport.getPermissions();
      }
      /**
       * @returns {Promise} A promise that is resolved with an {Object} that has
       *   `info` and `metadata` properties. `info` is an {Object} filled with
       *   anything available in the information dictionary and similarly
       *   `metadata` is a {Metadata} object with information from the metadata
       *   section of the PDF.
       */

    }, {
      key: "getMetadata",
      value: function getMetadata() {
        return this._transport.getMetadata();
      }
      /**
       * @returns {Promise} A promise that is resolved with a {TypedArray} that has
       *   the raw data from the PDF.
       */

    }, {
      key: "getData",
      value: function getData() {
        return this._transport.getData();
      }
      /**
       * @returns {Promise} A promise that is resolved when the document's data
       *   is loaded. It is resolved with an {Object} that contains the `length`
       *   property that indicates size of the PDF data in bytes.
       */

    }, {
      key: "getDownloadInfo",
      value: function getDownloadInfo() {
        return this._transport.downloadInfoCapability.promise;
      }
      /**
       * @returns {Promise} A promise this is resolved with current statistics about
       *   document structures (see {@link PDFDocumentStats}).
       */

    }, {
      key: "getStats",
      value: function getStats() {
        return this._transport.getStats();
      }
      /**
       * Cleans up resources allocated by the document, e.g. created `@font-face`.
       */

    }, {
      key: "cleanup",
      value: function cleanup() {
        this._transport.startCleanup();
      }
      /**
       * Destroys the current document instance and terminates the worker.
       */

    }, {
      key: "destroy",
      value: function destroy() {
        return this.loadingTask.destroy();
      }
      /**
       * @type {Object} A subset of the current {DocumentInitParameters}, which are
       *   either needed in the viewer and/or whose default values may be affected
       *   by the `apiCompatibilityParams`.
       */

    }, {
      key: "numPages",
      get: function get() {
        return this._pdfInfo.numPages;
      }
      /**
       * @type {string} A (not guaranteed to be) unique ID to identify a PDF.
       */

    }, {
      key: "fingerprint",
      get: function get() {
        return this._pdfInfo.fingerprint;
      }
    }, {
      key: "loadingParams",
      get: function get() {
        return this._transport.loadingParams;
      }
      /**
       * @type {PDFDocumentLoadingTask} The loadingTask for the current document.
       */

    }, {
      key: "loadingTask",
      get: function get() {
        return this._transport.loadingTask;
      }
    }]);

    return PDFDocumentProxy;
  }();
  /**
   * Page getViewport parameters.
   *
   * @typedef {Object} GetViewportParameters
   * @property {number} scale - The desired scale of the viewport.
   * @property {number} [rotation] - The desired rotation, in degrees, of
   *   the viewport. If omitted it defaults to the page rotation.
   * @property {number} [offsetX] - The horizontal, i.e. x-axis, offset.
   *   The default value is `0`.
   * @property {number} [offsetY] - The vertical, i.e. y-axis, offset.
   *   The default value is `0`.
   * @property {boolean} [dontFlip] - If true, the y-axis will not be
   *   flipped. The default value is `false`.
   */

  /**
   * Page getTextContent parameters.
   *
   * @typedef {Object} getTextContentParameters
   * @property {boolean} normalizeWhitespace - replaces all occurrences of
   *   whitespace with standard spaces (0x20). The default value is `false`.
   * @property {boolean} disableCombineTextItems - do not attempt to combine
   *   same line {@link TextItem}'s. The default value is `false`.
   */

  /**
   * Page text content.
   *
   * @typedef {Object} TextContent
   * @property {array} items - array of {@link TextItem}
   * @property {Object} styles - {@link TextStyle} objects, indexed by font name.
   */

  /**
   * Page text content part.
   *
   * @typedef {Object} TextItem
   * @property {string} str - text content.
   * @property {string} dir - text direction: 'ttb', 'ltr' or 'rtl'.
   * @property {array} transform - transformation matrix.
   * @property {number} width - width in device space.
   * @property {number} height - height in device space.
   * @property {string} fontName - font name used by pdf.js for converted font.
   */

  /**
   * Text style.
   *
   * @typedef {Object} TextStyle
   * @property {number} ascent - font ascent.
   * @property {number} descent - font descent.
   * @property {boolean} vertical - text is in vertical mode.
   * @property {string} fontFamily - possible font family
   */

  /**
   * Page annotation parameters.
   *
   * @typedef {Object} GetAnnotationsParameters
   * @property {string} intent - Determines the annotations that will be fetched,
   *                    can be either 'display' (viewable annotations) or 'print'
   *                    (printable annotations).
   *                    If the parameter is omitted, all annotations are fetched.
   */

  /**
   * Page render parameters.
   *
   * @typedef {Object} RenderParameters
   * @property {Object} canvasContext - A 2D context of a DOM Canvas object.
   * @property {PageViewport} viewport - Rendering viewport obtained by
   *                          calling the `PDFPageProxy.getViewport` method.
   * @property {string} [intent] - Rendering intent, can be 'display' or 'print'
   *                    (default value is 'display').
   * @property {boolean} [enableWebGL] - Enables WebGL accelerated rendering
   *                     for some operations. The default value is `false`.
   * @property {boolean} [renderInteractiveForms] - Whether or not
   *                     interactive form elements are rendered in the display
   *                     layer. If so, we do not render them on canvas as well.
   * @property {Array}  [transform] - Additional transform, applied
   *                    just before viewport transform.
   * @property {Object} [imageLayer] - An object that has beginLayout,
   *                    endLayout and appendImage functions.
   * @property {Object} [canvasFactory] - The factory that will be used
   *                    when creating canvases. The default value is
   *                    {DOMCanvasFactory}.
   * @property {Object} [background] - Background to use for the canvas.
   *                    Can use any valid canvas.fillStyle: A DOMString parsed as
   *                    CSS <color> value, a CanvasGradient object (a linear or
   *                    radial gradient) or a CanvasPattern object (a repetitive
   *                    image). The default value is 'rgb(255,255,255)'.
   */

  /**
   * PDF page operator list.
   *
   * @typedef {Object} PDFOperatorList
   * @property {Array} fnArray - Array containing the operator functions.
   * @property {Array} argsArray - Array containing the arguments of the
   *                               functions.
   */

  /**
   * Proxy to a PDFPage in the worker thread.
   * @alias PDFPageProxy
   */


  var PDFPageProxy =
  /*#__PURE__*/
  function () {
    function PDFPageProxy(pageIndex, pageInfo, transport) {
      var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, PDFPageProxy);

      this.pageIndex = pageIndex;
      this._pageInfo = pageInfo;
      this._transport = transport;
      this._stats = pdfBug ? new StatTimer() : null;
      this._pdfBug = pdfBug;
      this.commonObjs = transport.commonObjs;
      this.objs = new PDFObjects();
      this.cleanupAfterRender = false;
      this.pendingCleanup = false;
      this.intentStates = Object.create(null);
      this.destroyed = false;
    }
    /**
     * @type {number} Page number of the page. First page is 1.
     */


    _createClass(PDFPageProxy, [{
      key: "getViewport",

      /**
       * @param {GetViewportParameters} params - Viewport parameters.
       * @returns {PageViewport} Contains 'width' and 'height' properties
       *   along with transforms required for rendering.
       */
      value: function getViewport() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            scale = _ref.scale,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === void 0 ? this.rotate : _ref$rotation,
            _ref$offsetX = _ref.offsetX,
            offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
            _ref$offsetY = _ref.offsetY,
            offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
            _ref$dontFlip = _ref.dontFlip,
            dontFlip = _ref$dontFlip === void 0 ? false : _ref$dontFlip;

        if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("GENERIC") && (arguments.length > 1 || typeof arguments[0] === "number")) {
          throw new Error("PDFPageProxy.getViewport is called with obsolete arguments.");
        }

        return new PageViewport({
          viewBox: this.view,
          scale: scale,
          rotation: rotation,
          offsetX: offsetX,
          offsetY: offsetY,
          dontFlip: dontFlip
        });
      }
      /**
       * @param {GetAnnotationsParameters} params - Annotation parameters.
       * @returns {Promise} A promise that is resolved with an {Array} of the
       *   annotation objects.
       */

    }, {
      key: "getAnnotations",
      value: function getAnnotations() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$intent = _ref2.intent,
            intent = _ref2$intent === void 0 ? null : _ref2$intent;

        if (!this.annotationsPromise || this.annotationsIntent !== intent) {
          this.annotationsPromise = this._transport.getAnnotations(this.pageIndex, intent);
          this.annotationsIntent = intent;
        }

        return this.annotationsPromise;
      }
      /**
       * Begins the process of rendering a page to the desired context.
       * @param {RenderParameters} params Page render parameters.
       * @returns {RenderTask} An object that contains the promise, which
       *                       is resolved when the page finishes rendering.
       */

    }, {
      key: "render",
      value: function render(_ref3) {
        var _this5 = this;

        var canvasContext = _ref3.canvasContext,
            viewport = _ref3.viewport,
            _ref3$intent = _ref3.intent,
            intent = _ref3$intent === void 0 ? "display" : _ref3$intent,
            _ref3$enableWebGL = _ref3.enableWebGL,
            enableWebGL = _ref3$enableWebGL === void 0 ? false : _ref3$enableWebGL,
            _ref3$renderInteracti = _ref3.renderInteractiveForms,
            renderInteractiveForms = _ref3$renderInteracti === void 0 ? false : _ref3$renderInteracti,
            _ref3$transform = _ref3.transform,
            transform = _ref3$transform === void 0 ? null : _ref3$transform,
            _ref3$imageLayer = _ref3.imageLayer,
            imageLayer = _ref3$imageLayer === void 0 ? null : _ref3$imageLayer,
            _ref3$canvasFactory = _ref3.canvasFactory,
            canvasFactory = _ref3$canvasFactory === void 0 ? null : _ref3$canvasFactory,
            _ref3$background = _ref3.background,
            background = _ref3$background === void 0 ? null : _ref3$background;

        if (this._stats) {
          this._stats.time("Overall");
        }

        var renderingIntent = intent === "print" ? "print" : "display"; // If there was a pending destroy, cancel it so no cleanup happens during
        // this call to render.

        this.pendingCleanup = false;

        if (!this.intentStates[renderingIntent]) {
          this.intentStates[renderingIntent] = Object.create(null);
        }

        var intentState = this.intentStates[renderingIntent]; // Ensure that a pending `streamReader` cancel timeout is always aborted.

        if (intentState.streamReaderCancelTimeout) {
          clearTimeout(intentState.streamReaderCancelTimeout);
          intentState.streamReaderCancelTimeout = null;
        }

        var canvasFactoryInstance = canvasFactory || new DOMCanvasFactory();
        var webGLContext = new WebGLContext({
          enable: enableWebGL
        }); // If there's no displayReadyCapability yet, then the operatorList
        // was never requested before. Make the request and create the promise.

        if (!intentState.displayReadyCapability) {
          intentState.displayReadyCapability = createPromiseCapability();
          intentState.operatorList = {
            fnArray: [],
            argsArray: [],
            lastChunk: false
          };

          if (this._stats) {
            this._stats.time("Page Request");
          }

          this._pumpOperatorList({
            pageIndex: this.pageNumber - 1,
            intent: renderingIntent,
            renderInteractiveForms: renderInteractiveForms === true
          });
        }

        var complete = function complete(error) {
          var i = intentState.renderTasks.indexOf(internalRenderTask);

          if (i >= 0) {
            intentState.renderTasks.splice(i, 1);
          } // Attempt to reduce memory usage during *printing*, by always running
          // cleanup once rendering has finished (regardless of cleanupAfterRender).


          if (_this5.cleanupAfterRender || renderingIntent === "print") {
            _this5.pendingCleanup = true;
          }

          _this5._tryCleanup();

          if (error) {
            internalRenderTask.capability.reject(error);

            _this5._abortOperatorList({
              intentState: intentState,
              reason: error
            });
          } else {
            internalRenderTask.capability.resolve();
          }

          if (_this5._stats) {
            _this5._stats.timeEnd("Rendering");

            _this5._stats.timeEnd("Overall");
          }
        };

        var internalRenderTask = new InternalRenderTask({
          callback: complete,
          // Only include the required properties, and *not* the entire object.
          params: {
            canvasContext: canvasContext,
            viewport: viewport,
            transform: transform,
            imageLayer: imageLayer,
            background: background
          },
          objs: this.objs,
          commonObjs: this.commonObjs,
          operatorList: intentState.operatorList,
          pageNumber: this.pageNumber,
          canvasFactory: canvasFactoryInstance,
          webGLContext: webGLContext,
          useRequestAnimationFrame: renderingIntent !== "print",
          pdfBug: this._pdfBug
        });

        if (!intentState.renderTasks) {
          intentState.renderTasks = [];
        }

        intentState.renderTasks.push(internalRenderTask);
        var renderTask = internalRenderTask.task;
        intentState.displayReadyCapability.promise.then(function (transparency) {
          if (_this5.pendingCleanup) {
            complete();
            return;
          }

          if (_this5._stats) {
            _this5._stats.time("Rendering");
          }

          internalRenderTask.initializeGraphics(transparency);
          internalRenderTask.operatorListChanged();
        }).catch(complete);
        return renderTask;
      }
      /**
       * @returns {Promise} A promise resolved with an {@link PDFOperatorList}
       *   object that represents page's operator list.
       */

    }, {
      key: "getOperatorList",
      value: function getOperatorList() {
        function operatorListChanged() {
          if (intentState.operatorList.lastChunk) {
            intentState.opListReadCapability.resolve(intentState.operatorList);
            var i = intentState.renderTasks.indexOf(opListTask);

            if (i >= 0) {
              intentState.renderTasks.splice(i, 1);
            }
          }
        }

        var renderingIntent = "oplist";

        if (!this.intentStates[renderingIntent]) {
          this.intentStates[renderingIntent] = Object.create(null);
        }

        var intentState = this.intentStates[renderingIntent];
        var opListTask;

        if (!intentState.opListReadCapability) {
          opListTask = {};
          opListTask.operatorListChanged = operatorListChanged;
          intentState.opListReadCapability = createPromiseCapability();
          intentState.renderTasks = [];
          intentState.renderTasks.push(opListTask);
          intentState.operatorList = {
            fnArray: [],
            argsArray: [],
            lastChunk: false
          };

          if (this._stats) {
            this._stats.time("Page Request");
          }

          this._pumpOperatorList({
            pageIndex: this.pageIndex,
            intent: renderingIntent
          });
        }

        return intentState.opListReadCapability.promise;
      }
      /**
       * @param {getTextContentParameters} params - getTextContent parameters.
       * @returns {ReadableStream} ReadableStream to read textContent chunks.
       */

    }, {
      key: "streamTextContent",
      value: function streamTextContent() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref4$normalizeWhites = _ref4.normalizeWhitespace,
            normalizeWhitespace = _ref4$normalizeWhites === void 0 ? false : _ref4$normalizeWhites,
            _ref4$disableCombineT = _ref4.disableCombineTextItems,
            disableCombineTextItems = _ref4$disableCombineT === void 0 ? false : _ref4$disableCombineT;

        var TEXT_CONTENT_CHUNK_SIZE = 100;
        return this._transport.messageHandler.sendWithStream("GetTextContent", {
          pageIndex: this.pageNumber - 1,
          normalizeWhitespace: normalizeWhitespace === true,
          combineTextItems: disableCombineTextItems !== true
        }, {
          highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
          size: function size(textContent) {
            return textContent.items.length;
          }
        });
      }
      /**
       * @param {getTextContentParameters} params - getTextContent parameters.
       * @returns {Promise} That is resolved a {@link TextContent}
       *   object that represent the page text content.
       */

    }, {
      key: "getTextContent",
      value: function getTextContent() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var readableStream = this.streamTextContent(params);
        return new Promise(function (resolve, reject) {
          function pump() {
            reader.read().then(function (_ref5) {
              var _textContent$items;

              var value = _ref5.value,
                  done = _ref5.done;

              if (done) {
                resolve(textContent);
                return;
              }

              Object.assign(textContent.styles, value.styles);

              (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));

              pump();
            }, reject);
          }

          var reader = readableStream.getReader();
          var textContent = {
            items: [],
            styles: Object.create(null)
          };
          pump();
        });
      }
      /**
       * Destroys the page object.
       * @private
       */

    }, {
      key: "_destroy",
      value: function _destroy() {
        var _this6 = this;

        this.destroyed = true;
        this._transport.pageCache[this.pageIndex] = null;
        var waitOn = [];
        Object.keys(this.intentStates).forEach(function (intent) {
          var intentState = _this6.intentStates[intent];

          _this6._abortOperatorList({
            intentState: intentState,
            reason: new Error("Page was destroyed."),
            force: true
          });

          if (intent === "oplist") {
            // Avoid errors below, since the renderTasks are just stubs.
            return;
          }

          intentState.renderTasks.forEach(function (renderTask) {
            var renderCompleted = renderTask.capability.promise.catch(function () {}); // ignoring failures

            waitOn.push(renderCompleted);
            renderTask.cancel();
          });
        });
        this.objs.clear();
        this.annotationsPromise = null;
        this.pendingCleanup = false;
        return Promise.all(waitOn);
      }
      /**
       * Cleans up resources allocated by the page.
       * @param {boolean} [resetStats] - Reset page stats, if enabled.
       *   The default value is `false`.
       */

    }, {
      key: "cleanup",
      value: function cleanup() {
        var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.pendingCleanup = true;

        this._tryCleanup(resetStats);
      }
      /**
       * Attempts to clean up if rendering is in a state where that's possible.
       * @private
       */

    }, {
      key: "_tryCleanup",
      value: function _tryCleanup() {
        var _this7 = this;

        var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
          var intentState = _this7.intentStates[intent];
          return intentState.renderTasks.length !== 0 || !intentState.operatorList.lastChunk;
        })) {
          return;
        }

        Object.keys(this.intentStates).forEach(function (intent) {
          delete _this7.intentStates[intent];
        });
        this.objs.clear();
        this.annotationsPromise = null;

        if (resetStats && this._stats) {
          this._stats = new StatTimer();
        }

        this.pendingCleanup = false;
      }
      /**
       * @private
       */

    }, {
      key: "_startRenderPage",
      value: function _startRenderPage(transparency, intent) {
        var intentState = this.intentStates[intent];

        if (!intentState) {
          return; // Rendering was cancelled.
        }

        if (this._stats) {
          this._stats.timeEnd("Page Request");
        } // TODO Refactor RenderPageRequest to separate rendering
        // and operator list logic


        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.resolve(transparency);
        }
      }
      /**
       * @private
       */

    }, {
      key: "_renderPageChunk",
      value: function _renderPageChunk(operatorListChunk, intentState) {
        // Add the new chunk to the current operator list.
        for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
          intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
          intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
        }

        intentState.operatorList.lastChunk = operatorListChunk.lastChunk; // Notify all the rendering tasks there are more operators to be consumed.

        for (var _i = 0; _i < intentState.renderTasks.length; _i++) {
          intentState.renderTasks[_i].operatorListChanged();
        }

        if (operatorListChunk.lastChunk) {
          this._tryCleanup();
        }
      }
      /**
       * @private
       */

    }, {
      key: "_pumpOperatorList",
      value: function _pumpOperatorList(args) {
        var _this8 = this;

        assert(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');

        var readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", args);

        var reader = readableStream.getReader();
        var intentState = this.intentStates[args.intent];
        intentState.streamReader = reader;

        var pump = function pump() {
          reader.read().then(function (_ref6) {
            var value = _ref6.value,
                done = _ref6.done;

            if (done) {
              intentState.streamReader = null;
              return;
            }

            if (_this8._transport.destroyed) {
              return; // Ignore any pending requests if the worker was terminated.
            }

            _this8._renderPageChunk(value, intentState);

            pump();
          }, function (reason) {
            intentState.streamReader = null;

            if (_this8._transport.destroyed) {
              return; // Ignore any pending requests if the worker was terminated.
            }

            if (intentState.operatorList) {
              // Mark operator list as complete.
              intentState.operatorList.lastChunk = true;

              for (var i = 0; i < intentState.renderTasks.length; i++) {
                intentState.renderTasks[i].operatorListChanged();
              }

              _this8._tryCleanup();
            }

            if (intentState.displayReadyCapability) {
              intentState.displayReadyCapability.reject(reason);
            } else if (intentState.opListReadCapability) {
              intentState.opListReadCapability.reject(reason);
            } else {
              throw reason;
            }
          });
        };

        pump();
      }
      /**
       * @private
       */

    }, {
      key: "_abortOperatorList",
      value: function _abortOperatorList(_ref7) {
        var _this9 = this;

        var intentState = _ref7.intentState,
            reason = _ref7.reason,
            _ref7$force = _ref7.force,
            force = _ref7$force === void 0 ? false : _ref7$force;
        assert(reason instanceof Error || _typeof(reason) === "object" && reason !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');

        if (!intentState.streamReader) {
          return;
        }

        if (!force) {
          // Ensure that an Error occurring in *only* one `InternalRenderTask`, e.g.
          // multiple render() calls on the same canvas, won't break all rendering.
          if (intentState.renderTasks.length !== 0) {
            return;
          } // Don't immediately abort parsing on the worker-thread when rendering is
          // cancelled, since that will unnecessarily delay re-rendering when (for
          // partially parsed pages) e.g. zooming/rotation occurs in the viewer.


          if (reason instanceof RenderingCancelledException) {
            intentState.streamReaderCancelTimeout = setTimeout(function () {
              _this9._abortOperatorList({
                intentState: intentState,
                reason: reason,
                force: true
              });

              intentState.streamReaderCancelTimeout = null;
            }, RENDERING_CANCELLED_TIMEOUT);
            return;
          }
        }

        intentState.streamReader.cancel(new AbortException(reason && reason.message));
        intentState.streamReader = null;

        if (this._transport.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        } // Remove the current `intentState`, since a cancelled `getOperatorList`
        // call on the worker-thread cannot be re-started...


        Object.keys(this.intentStates).some(function (intent) {
          if (_this9.intentStates[intent] === intentState) {
            delete _this9.intentStates[intent];
            return true;
          }

          return false;
        }); // ... and force clean-up to ensure that any old state is always removed.

        this.cleanup();
      }
      /**
       * @type {Object} Returns page stats, if enabled; returns `null` otherwise.
       */

    }, {
      key: "pageNumber",
      get: function get() {
        return this.pageIndex + 1;
      }
      /**
       * @type {number} The number of degrees the page is rotated clockwise.
       */

    }, {
      key: "rotate",
      get: function get() {
        return this._pageInfo.rotate;
      }
      /**
       * @type {Object} The reference that points to this page. It has `num` and
       *   `gen` properties.
       */

    }, {
      key: "ref",
      get: function get() {
        return this._pageInfo.ref;
      }
      /**
       * @type {number} The default size of units in 1/72nds of an inch.
       */

    }, {
      key: "userUnit",
      get: function get() {
        return this._pageInfo.userUnit;
      }
      /**
       * @type {Array} An array of the visible portion of the PDF page in user
       *   space units [x1, y1, x2, y2].
       */

    }, {
      key: "view",
      get: function get() {
        return this._pageInfo.view;
      }
    }, {
      key: "stats",
      get: function get() {
        return this._stats;
      }
    }]);

    return PDFPageProxy;
  }();

  var LoopbackPort =
  /*#__PURE__*/
  function () {
    function LoopbackPort() {
      var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _classCallCheck(this, LoopbackPort);

      this._listeners = [];
      this._defer = defer;
      this._deferred = Promise.resolve(undefined);
    }

    _createClass(LoopbackPort, [{
      key: "postMessage",
      value: function postMessage(obj, transfers) {
        var _this10 = this;

        function cloneValue(value) {
          // Trying to perform a structured clone close to the spec, including
          // transfers.
          if (_typeof(value) !== "object" || value === null) {
            return value;
          }

          if (cloned.has(value)) {
            // already cloned the object
            return cloned.get(value);
          }

          var buffer, result;

          if ((buffer = value.buffer) && isArrayBuffer(buffer)) {
            // We found object with ArrayBuffer (typed array).
            var transferable = transfers && transfers.includes(buffer);

            if (value === buffer) {
              // Special case when we are faking typed arrays in compatibility.js.
              result = value;
            } else if (transferable) {
              result = new value.constructor(buffer, value.byteOffset, value.byteLength);
            } else {
              result = new value.constructor(value);
            }

            cloned.set(value, result);
            return result;
          }

          result = Array.isArray(value) ? [] : {};
          cloned.set(value, result); // adding to cache now for cyclic references
          // Cloning all value and object properties, however ignoring properties
          // defined via getter.

          for (var i in value) {
            var desc = void 0,
                p = value;

            while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
              p = Object.getPrototypeOf(p);
            }

            if (typeof desc.value === "undefined") {
              continue;
            }

            if (typeof desc.value === "function") {
              if (value.hasOwnProperty && value.hasOwnProperty(i)) {
                throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(value[i]));
              }

              continue;
            }

            result[i] = cloneValue(desc.value);
          }

          return result;
        }

        if (!this._defer) {
          this._listeners.forEach(function (listener) {
            listener.call(_this10, {
              data: obj
            });
          });

          return;
        }

        var cloned = new WeakMap();
        var e = {
          data: cloneValue(obj)
        };

        this._deferred.then(function () {
          _this10._listeners.forEach(function (listener) {
            listener.call(_this10, e);
          });
        });
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(name, listener) {
        this._listeners.push(listener);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(name, listener) {
        var i = this._listeners.indexOf(listener);

        this._listeners.splice(i, 1);
      }
    }, {
      key: "terminate",
      value: function terminate() {
        this._listeners.length = 0;
      }
    }]);

    return LoopbackPort;
  }();
  /**
   * @typedef {Object} PDFWorkerParameters
   * @property {string} [name] - The name of the worker.
   * @property {Object} [port] - The `workerPort`.
   * @property {number} [verbosity] - Controls the logging level; the
   *   constants from {VerbosityLevel} should be used.
   */


  var PDFWorker = function PDFWorkerClosure() {
    var pdfWorkerPorts = new WeakMap();
    var isWorkerDisabled = false;
    var fallbackWorkerSrc;
    var nextFakeWorkerId = 0;
    var fakeWorkerCapability;

    if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("GENERIC")) {
      // eslint-disable-next-line no-undef
      if (isNodeJS && typeof __non_webpack_require__ === "function") {
        // Workers aren't supported in Node.js, force-disabling them there.
        isWorkerDisabled = true;

        if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("LIB")) {
          fallbackWorkerSrc = "../pdf.worker.js";
        } else {
          fallbackWorkerSrc = "./pdf.worker.js";
        }
      } else if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && "currentScript" in document) {
        var pdfjsFilePath = document.currentScript && document.currentScript.src;

        if (pdfjsFilePath) {
          fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
        }
      }
    }

    function _getWorkerSrc() {
      if (GlobalWorkerOptions.workerSrc) {
        return GlobalWorkerOptions.workerSrc;
      }

      if (typeof fallbackWorkerSrc !== "undefined") {
        if (!isNodeJS) {
          deprecated('No "GlobalWorkerOptions.workerSrc" specified.');
        }

        return fallbackWorkerSrc;
      }

      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }

    function getMainThreadWorkerMessageHandler() {
      var mainWorkerMessageHandler;

      try {
        mainWorkerMessageHandler = globalThis.pdfjsWorker && globalThis.pdfjsWorker.WorkerMessageHandler;
      } catch (ex) {
        /* Ignore errors. */
      }

      return mainWorkerMessageHandler || null;
    } // Loads worker code into main thread.


    function setupFakeWorkerGlobal() {
      if (fakeWorkerCapability) {
        return fakeWorkerCapability.promise;
      }

      fakeWorkerCapability = createPromiseCapability();

      var loader =
      /*#__PURE__*/
      function () {
        var _ref8 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var mainWorkerMessageHandler, worker, _worker;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();

                  if (!mainWorkerMessageHandler) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", mainWorkerMessageHandler);

                case 3:
                  if (!(typeof PDFJSDev === "undefined" || !PDFJSDev.test("PRODUCTION"))) {
                    _context.next = 10;
                    break;
                  }

                  if (!((typeof SystemJS === "undefined" ? "undefined" : _typeof(SystemJS)) !== "object")) {
                    _context.next = 6;
                    break;
                  }

                  throw new Error("SystemJS must be used to load fake worker.");

                case 6:
                  _context.next = 8;
                  return SystemJS.import("pdfjs/core/worker.js");

                case 8:
                  worker = _context.sent;
                  return _context.abrupt("return", worker.WorkerMessageHandler);

                case 10:
                  if (!(typeof PDFJSDev !== "undefined" && PDFJSDev.test("GENERIC") && isNodeJS && // eslint-disable-next-line no-undef
                  typeof __non_webpack_require__ === "function")) {
                    _context.next = 13;
                    break;
                  }

                  // Since bundlers, such as Webpack, cannot be told to leave `require`
                  // statements alone we are thus forced to jump through hoops in order
                  // to prevent `Critical dependency: ...` warnings in third-party
                  // deployments of the built `pdf.js`/`pdf.worker.js` files; see
                  // https://github.com/webpack/webpack/issues/8826
                  //
                  // The following hack is based on the assumption that code running in
                  // Node.js won't ever be affected by e.g. Content Security Policies that
                  // prevent the use of `eval`. If that ever occurs, we should revert this
                  // to a normal `__non_webpack_require__` statement and simply document
                  // the Webpack warnings instead (telling users to ignore them).
                  //
                  // eslint-disable-next-line no-eval
                  _worker = eval("require")(_getWorkerSrc());
                  return _context.abrupt("return", _worker.WorkerMessageHandler);

                case 13:
                  _context.next = 15;
                  return loadScript(_getWorkerSrc());

                case 15:
                  return _context.abrupt("return", window.pdfjsWorker.WorkerMessageHandler);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function loader() {
          return _ref8.apply(this, arguments);
        };
      }();

      loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
      return fakeWorkerCapability.promise;
    }

    function createCDNWrapper(url) {
      // We will rely on blob URL's property to specify origin.
      // We want this function to fail in case if createObjectURL or Blob do not
      // exist or fail for some reason -- our Worker creation will fail anyway.
      var wrapper = "importScripts('" + url + "');";
      return URL.createObjectURL(new Blob([wrapper]));
    }
    /**
     * PDF.js web worker abstraction, which controls the instantiation of PDF
     * documents. Message handlers are used to pass information from the main
     * thread to the worker thread and vice versa. If the creation of a web
     * worker is not possible, a "fake" worker will be used instead.
     */


    var PDFWorker =
    /*#__PURE__*/
    function () {
      /**
       * @param {PDFWorkerParameters} params - Worker initialization parameters.
       */
      function PDFWorker() {
        var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref9$name = _ref9.name,
            name = _ref9$name === void 0 ? null : _ref9$name,
            _ref9$port = _ref9.port,
            port = _ref9$port === void 0 ? null : _ref9$port,
            _ref9$verbosity = _ref9.verbosity,
            verbosity = _ref9$verbosity === void 0 ? getVerbosityLevel() : _ref9$verbosity;

        _classCallCheck(this, PDFWorker);

        if (port && pdfWorkerPorts.has(port)) {
          throw new Error("Cannot use more than one PDFWorker per port");
        }

        this.name = name;
        this.destroyed = false;
        this.postMessageTransfers = true;
        this.verbosity = verbosity;
        this._readyCapability = createPromiseCapability();
        this._port = null;
        this._webWorker = null;
        this._messageHandler = null;

        if (port) {
          pdfWorkerPorts.set(port, this);

          this._initializeFromPort(port);

          return;
        }

        this._initialize();
      }

      _createClass(PDFWorker, [{
        key: "_initializeFromPort",
        value: function _initializeFromPort(port) {
          this._port = port;
          this._messageHandler = new MessageHandler("main", "worker", port);

          this._messageHandler.on("ready", function () {// Ignoring 'ready' event -- MessageHandler shall be already initialized
            // and ready to accept the messages.
          });

          this._readyCapability.resolve();
        }
      }, {
        key: "_initialize",
        value: function _initialize() {
          var _this11 = this;

          // If worker support isn't disabled explicit and the browser has worker
          // support, create a new web worker and test if it/the browser fulfills
          // all requirements to run parts of pdf.js in a web worker.
          // Right now, the requirement is, that an Uint8Array is still an
          // Uint8Array as it arrives on the worker. (Chrome added this with v.15.)
          if (typeof Worker !== "undefined" && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
            var workerSrc = _getWorkerSrc();

            try {
              // Wraps workerSrc path into blob URL, if the former does not belong
              // to the same origin.
              if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("GENERIC") && !isSameOrigin(window.location.href, workerSrc)) {
                workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
              } // Some versions of FF can't create a worker on localhost, see:
              // https://bugzilla.mozilla.org/show_bug.cgi?id=683280


              var worker = new Worker(workerSrc);
              var messageHandler = new MessageHandler("main", "worker", worker);

              var terminateEarly = function terminateEarly() {
                worker.removeEventListener("error", onWorkerError);
                messageHandler.destroy();
                worker.terminate();

                if (_this11.destroyed) {
                  _this11._readyCapability.reject(new Error("Worker was destroyed"));
                } else {
                  // Fall back to fake worker if the termination is caused by an
                  // error (e.g. NetworkError / SecurityError).
                  _this11._setupFakeWorker();
                }
              };

              var onWorkerError = function onWorkerError() {
                if (!_this11._webWorker) {
                  // Worker failed to initialize due to an error. Clean up and fall
                  // back to the fake worker.
                  terminateEarly();
                }
              };

              worker.addEventListener("error", onWorkerError);
              messageHandler.on("test", function (data) {
                worker.removeEventListener("error", onWorkerError);

                if (_this11.destroyed) {
                  terminateEarly();
                  return; // worker was destroyed
                }

                if (data) {
                  // supportTypedArray
                  _this11._messageHandler = messageHandler;
                  _this11._port = worker;
                  _this11._webWorker = worker;

                  if (!data.supportTransfers) {
                    _this11.postMessageTransfers = false;
                  }

                  _this11._readyCapability.resolve(); // Send global setting, e.g. verbosity level.


                  messageHandler.send("configure", {
                    verbosity: _this11.verbosity
                  });
                } else {
                  _this11._setupFakeWorker();

                  messageHandler.destroy();
                  worker.terminate();
                }
              });
              messageHandler.on("ready", function (data) {
                worker.removeEventListener("error", onWorkerError);

                if (_this11.destroyed) {
                  terminateEarly();
                  return; // worker was destroyed
                }

                try {
                  sendTest();
                } catch (e) {
                  // We need fallback to a faked worker.
                  _this11._setupFakeWorker();
                }
              });

              var sendTest = function sendTest() {
                var testObj = new Uint8Array([_this11.postMessageTransfers ? 255 : 0]); // Some versions of Opera throw a DATA_CLONE_ERR on serializing the
                // typed array. Also, checking if we can use transfers.

                try {
                  messageHandler.send("test", testObj, [testObj.buffer]);
                } catch (ex) {
                  warn("Cannot use postMessage transfers.");
                  testObj[0] = 0;
                  messageHandler.send("test", testObj);
                }
              }; // It might take time for worker to initialize (especially when AMD
              // loader is used). We will try to send test immediately, and then
              // when 'ready' message will arrive. The worker shall process only
              // first received 'test'.


              sendTest();
              return;
            } catch (e) {
              info("The worker has been disabled.");
            }
          } // Either workers are disabled, not supported or have thrown an exception.
          // Thus, we fallback to a faked worker.


          this._setupFakeWorker();
        }
      }, {
        key: "_setupFakeWorker",
        value: function _setupFakeWorker() {
          var _this12 = this;

          if (!isWorkerDisabled) {
            warn("Setting up fake worker.");
            isWorkerDisabled = true;
          }

          setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
            if (_this12.destroyed) {
              _this12._readyCapability.reject(new Error("Worker was destroyed"));

              return;
            }

            var port = new LoopbackPort();
            _this12._port = port; // All fake workers use the same port, making id unique.

            var id = "fake" + nextFakeWorkerId++; // If the main thread is our worker, setup the handling for the
            // messages -- the main thread sends to it self.

            var workerHandler = new MessageHandler(id + "_worker", id, port);
            WorkerMessageHandler.setup(workerHandler, port);
            var messageHandler = new MessageHandler(id, id + "_worker", port);
            _this12._messageHandler = messageHandler;

            _this12._readyCapability.resolve();
          }).catch(function (reason) {
            _this12._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
          });
        }
        /**
         * Destroys the worker instance.
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this.destroyed = true;

          if (this._webWorker) {
            // We need to terminate only web worker created resource.
            this._webWorker.terminate();

            this._webWorker = null;
          }

          pdfWorkerPorts.delete(this._port);
          this._port = null;

          if (this._messageHandler) {
            this._messageHandler.destroy();

            this._messageHandler = null;
          }
        }
        /**
         * @param {PDFWorkerParameters} params - The worker initialization
         *                                       parameters.
         */

      }, {
        key: "promise",
        get: function get() {
          return this._readyCapability.promise;
        }
      }, {
        key: "port",
        get: function get() {
          return this._port;
        }
      }, {
        key: "messageHandler",
        get: function get() {
          return this._messageHandler;
        }
      }], [{
        key: "fromPort",
        value: function fromPort(params) {
          if (!params || !params.port) {
            throw new Error("PDFWorker.fromPort - invalid method signature.");
          }

          if (pdfWorkerPorts.has(params.port)) {
            return pdfWorkerPorts.get(params.port);
          }

          return new PDFWorker(params);
        }
      }, {
        key: "getWorkerSrc",
        value: function getWorkerSrc() {
          return _getWorkerSrc();
        }
      }]);

      return PDFWorker;
    }();

    return PDFWorker;
  }();
  /**
   * For internal use only.
   * @ignore
   */


  var WorkerTransport =
  /*#__PURE__*/
  function () {
    function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
      _classCallCheck(this, WorkerTransport);

      this.messageHandler = messageHandler;
      this.loadingTask = loadingTask;
      this.commonObjs = new PDFObjects();
      this.fontLoader = new FontLoader({
        docId: loadingTask.docId,
        onUnsupportedFeature: this._onUnsupportedFeature.bind(this)
      });
      this._params = params;
      this.CMapReaderFactory = new params.CMapReaderFactory({
        baseUrl: params.cMapUrl,
        isCompressed: params.cMapPacked
      });
      this.destroyed = false;
      this.destroyCapability = null;
      this._passwordCapability = null;
      this._networkStream = networkStream;
      this._fullReader = null;
      this._lastProgress = null;
      this.pageCache = [];
      this.pagePromises = [];
      this.downloadInfoCapability = createPromiseCapability();
      this.setupMessageHandler();
    }

    _createClass(WorkerTransport, [{
      key: "destroy",
      value: function destroy() {
        var _this13 = this;

        if (this.destroyCapability) {
          return this.destroyCapability.promise;
        }

        this.destroyed = true;
        this.destroyCapability = createPromiseCapability();

        if (this._passwordCapability) {
          this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
        }

        var waitOn = []; // We need to wait for all renderings to be completed, e.g.
        // timeout/rAF can take a long time.

        this.pageCache.forEach(function (page) {
          if (page) {
            waitOn.push(page._destroy());
          }
        });
        this.pageCache.length = 0;
        this.pagePromises.length = 0; // We also need to wait for the worker to finish its long running tasks.

        var terminated = this.messageHandler.sendWithPromise("Terminate", null);
        waitOn.push(terminated);
        Promise.all(waitOn).then(function () {
          _this13.fontLoader.clear();

          if (_this13._networkStream) {
            _this13._networkStream.cancelAllRequests(new AbortException("Worker was terminated."));
          }

          if (_this13.messageHandler) {
            _this13.messageHandler.destroy();

            _this13.messageHandler = null;
          }

          _this13.destroyCapability.resolve();
        }, this.destroyCapability.reject);
        return this.destroyCapability.promise;
      }
    }, {
      key: "setupMessageHandler",
      value: function setupMessageHandler() {
        var _this14 = this;

        var messageHandler = this.messageHandler,
            loadingTask = this.loadingTask;
        messageHandler.on("GetReader", function (data, sink) {
          assert(_this14._networkStream);
          _this14._fullReader = _this14._networkStream.getFullReader();

          _this14._fullReader.onProgress = function (evt) {
            _this14._lastProgress = {
              loaded: evt.loaded,
              total: evt.total
            };
          };

          sink.onPull = function () {
            _this14._fullReader.read().then(function (_ref10) {
              var value = _ref10.value,
                  done = _ref10.done;

              if (done) {
                sink.close();
                return;
              }

              assert(isArrayBuffer(value)); // Enqueue data chunk into sink, and transfer it
              // to other side as `Transferable` object.

              sink.enqueue(new Uint8Array(value), 1, [value]);
            }).catch(function (reason) {
              sink.error(reason);
            });
          };

          sink.onCancel = function (reason) {
            _this14._fullReader.cancel(reason);
          };
        });
        messageHandler.on("ReaderHeadersReady", function (data) {
          var headersCapability = createPromiseCapability();
          var fullReader = _this14._fullReader;
          fullReader.headersReady.then(function () {
            // If stream or range are disabled, it's our only way to report
            // loading progress.
            if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
              if (_this14._lastProgress && loadingTask.onProgress) {
                loadingTask.onProgress(_this14._lastProgress);
              }

              fullReader.onProgress = function (evt) {
                if (loadingTask.onProgress) {
                  loadingTask.onProgress({
                    loaded: evt.loaded,
                    total: evt.total
                  });
                }
              };
            }

            headersCapability.resolve({
              isStreamingSupported: fullReader.isStreamingSupported,
              isRangeSupported: fullReader.isRangeSupported,
              contentLength: fullReader.contentLength
            });
          }, headersCapability.reject);
          return headersCapability.promise;
        });
        messageHandler.on("GetRangeReader", function (data, sink) {
          assert(_this14._networkStream);

          var rangeReader = _this14._networkStream.getRangeReader(data.begin, data.end); // When streaming is enabled, it's possible that the data requested here
          // has already been fetched via the `_fullRequestReader` implementation.
          // However, given that the PDF data is loaded asynchronously on the
          // main-thread and then sent via `postMessage` to the worker-thread,
          // it may not have been available during parsing (hence the attempt to
          // use range requests here).
          //
          // To avoid wasting time and resources here, we'll thus *not* dispatch
          // range requests if the data was already loaded but has not been sent to
          // the worker-thread yet (which will happen via the `_fullRequestReader`).


          if (!rangeReader) {
            sink.close();
            return;
          }

          sink.onPull = function () {
            rangeReader.read().then(function (_ref11) {
              var value = _ref11.value,
                  done = _ref11.done;

              if (done) {
                sink.close();
                return;
              }

              assert(isArrayBuffer(value));
              sink.enqueue(new Uint8Array(value), 1, [value]);
            }).catch(function (reason) {
              sink.error(reason);
            });
          };

          sink.onCancel = function (reason) {
            rangeReader.cancel(reason);
          };
        });
        messageHandler.on("GetDoc", function (_ref12) {
          var pdfInfo = _ref12.pdfInfo;
          _this14._numPages = pdfInfo.numPages;

          loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, _this14));
        });
        messageHandler.on("DocException", function (ex) {
          var reason;

          switch (ex.name) {
            case "PasswordException":
              reason = new PasswordException(ex.message, ex.code);
              break;

            case "InvalidPDFException":
              reason = new InvalidPDFException(ex.message);
              break;

            case "MissingPDFException":
              reason = new MissingPDFException(ex.message);
              break;

            case "UnexpectedResponseException":
              reason = new UnexpectedResponseException(ex.message, ex.status);
              break;

            case "UnknownErrorException":
              reason = new UnknownErrorException(ex.message, ex.details);
              break;
          }

          if (typeof PDFJSDev === "undefined" || PDFJSDev.test("!PRODUCTION || TESTING")) {
            assert(reason instanceof Error, "DocException: expected an Error.");
          }

          loadingTask._capability.reject(reason);
        });
        messageHandler.on("PasswordRequest", function (exception) {
          _this14._passwordCapability = createPromiseCapability();

          if (loadingTask.onPassword) {
            var updatePassword = function updatePassword(password) {
              _this14._passwordCapability.resolve({
                password: password
              });
            };

            try {
              loadingTask.onPassword(updatePassword, exception.code);
            } catch (ex) {
              _this14._passwordCapability.reject(ex);
            }
          } else {
            _this14._passwordCapability.reject(new PasswordException(exception.message, exception.code));
          }

          return _this14._passwordCapability.promise;
        });
        messageHandler.on("DataLoaded", function (data) {
          // For consistency: Ensure that progress is always reported when the
          // entire PDF file has been loaded, regardless of how it was fetched.
          if (loadingTask.onProgress) {
            loadingTask.onProgress({
              loaded: data.length,
              total: data.length
            });
          }

          _this14.downloadInfoCapability.resolve(data);
        });
        messageHandler.on("StartRenderPage", function (data) {
          if (_this14.destroyed) {
            return; // Ignore any pending requests if the worker was terminated.
          }

          var page = _this14.pageCache[data.pageIndex];

          page._startRenderPage(data.transparency, data.intent);
        });
        messageHandler.on("commonobj", function (data) {
          if (_this14.destroyed) {
            return; // Ignore any pending requests if the worker was terminated.
          }

          var _data = _slicedToArray(data, 3),
              id = _data[0],
              type = _data[1],
              exportedData = _data[2];

          if (_this14.commonObjs.has(id)) {
            return;
          }

          switch (type) {
            case "Font":
              var params = _this14._params;

              if ("error" in exportedData) {
                var exportedError = exportedData.error;
                warn("Error during font loading: ".concat(exportedError));

                _this14.commonObjs.resolve(id, exportedError);

                break;
              }

              var fontRegistry = null;

              if (params.pdfBug && globalThis.FontInspector && globalThis.FontInspector.enabled) {
                fontRegistry = {
                  registerFont: function registerFont(font, url) {
                    globalThis.FontInspector.fontAdded(font, url);
                  }
                };
              }

              var font = new FontFaceObject(exportedData, {
                isEvalSupported: params.isEvalSupported,
                disableFontFace: params.disableFontFace,
                ignoreErrors: params.ignoreErrors,
                onUnsupportedFeature: _this14._onUnsupportedFeature.bind(_this14),
                fontRegistry: fontRegistry
              });

              _this14.fontLoader.bind(font).then(function () {
                _this14.commonObjs.resolve(id, font);
              }, function (reason) {
                messageHandler.sendWithPromise("FontFallback", {
                  id: id
                }).finally(function () {
                  _this14.commonObjs.resolve(id, font);
                });
              });

              break;

            case "FontPath":
            case "FontType3Res":
              _this14.commonObjs.resolve(id, exportedData);

              break;

            default:
              throw new Error("Got unknown common object type ".concat(type));
          }
        });
        messageHandler.on("obj", function (data) {
          if (_this14.destroyed) {
            // Ignore any pending requests if the worker was terminated.
            return undefined;
          }

          var _data2 = _slicedToArray(data, 4),
              id = _data2[0],
              pageIndex = _data2[1],
              type = _data2[2],
              imageData = _data2[3];

          var pageProxy = _this14.pageCache[pageIndex];

          if (pageProxy.objs.has(id)) {
            return undefined;
          }

          switch (type) {
            case "JpegStream":
              return new Promise(function (resolve, reject) {
                var img = new Image();

                img.onload = function () {
                  resolve(img);
                };

                img.onerror = function () {
                  // Note that when the browser image loading/decoding fails,
                  // we'll fallback to the built-in PDF.js JPEG decoder; see
                  // `PartialEvaluator.buildPaintImageXObject` in the
                  // `src/core/evaluator.js` file.
                  reject(new Error("Error during JPEG image loading")); // Always remember to release the image data if errors occurred.

                  releaseImageResources(img);
                };

                img.src = imageData;
              }).then(function (img) {
                pageProxy.objs.resolve(id, img);
              });

            case "Image":
              pageProxy.objs.resolve(id, imageData); // Heuristic that will allow us not to store large data.

              var MAX_IMAGE_SIZE_TO_STORE = 8000000;

              if (imageData && "data" in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
                pageProxy.cleanupAfterRender = true;
              }

              break;

            default:
              throw new Error("Got unknown object type ".concat(type));
          }

          return undefined;
        });
        messageHandler.on("DocProgress", function (data) {
          if (_this14.destroyed) {
            return; // Ignore any pending requests if the worker was terminated.
          }

          if (loadingTask.onProgress) {
            loadingTask.onProgress({
              loaded: data.loaded,
              total: data.total
            });
          }
        });
        messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
        messageHandler.on("JpegDecode", function (data) {
          if (_this14.destroyed) {
            return Promise.reject(new Error("Worker was destroyed"));
          }

          if (typeof document === "undefined") {
            // Make sure that this code is not executing in node.js, as
            // it's using DOM image, and there is no library to support that.
            return Promise.reject(new Error('"document" is not defined.'));
          }

          var _data3 = _slicedToArray(data, 2),
              imageUrl = _data3[0],
              components = _data3[1];

          if (components !== 3 && components !== 1) {
            return Promise.reject(new Error("Only 3 components or 1 component can be returned"));
          }

          return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onload = function () {
              var width = img.width,
                  height = img.height;
              var size = width * height;
              var rgbaLength = size * 4;
              var buf = new Uint8ClampedArray(size * components);
              var tmpCanvas = document.createElement("canvas");
              tmpCanvas.width = width;
              tmpCanvas.height = height;
              var tmpCtx = tmpCanvas.getContext("2d");
              tmpCtx.drawImage(img, 0, 0);
              var data = tmpCtx.getImageData(0, 0, width, height).data;

              if (components === 3) {
                for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                  buf[j] = data[i];
                  buf[j + 1] = data[i + 1];
                  buf[j + 2] = data[i + 2];
                }
              } else if (components === 1) {
                for (var _i2 = 0, _j = 0; _i2 < rgbaLength; _i2 += 4, _j++) {
                  buf[_j] = data[_i2];
                }
              }

              resolve({
                data: buf,
                width: width,
                height: height
              }); // Immediately release the image data once decoding has finished.

              releaseImageResources(img); // Zeroing the width and height cause Firefox to release graphics
              // resources immediately, which can greatly reduce memory consumption.

              tmpCanvas.width = 0;
              tmpCanvas.height = 0;
              tmpCanvas = null;
              tmpCtx = null;
            };

            img.onerror = function () {
              reject(new Error("JpegDecode failed to load image")); // Always remember to release the image data if errors occurred.

              releaseImageResources(img);
            };

            img.src = imageUrl;
          });
        });
        messageHandler.on("FetchBuiltInCMap", function (data, sink) {
          if (_this14.destroyed) {
            sink.error(new Error("Worker was destroyed"));
            return;
          }

          var fetched = false;

          sink.onPull = function () {
            if (fetched) {
              sink.close();
              return;
            }

            fetched = true;

            _this14.CMapReaderFactory.fetch(data).then(function (builtInCMap) {
              sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
            }).catch(function (reason) {
              sink.error(reason);
            });
          };
        });
      }
    }, {
      key: "_onUnsupportedFeature",
      value: function _onUnsupportedFeature(_ref13) {
        var featureId = _ref13.featureId;

        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }

        if (this.loadingTask.onUnsupportedFeature) {
          this.loadingTask.onUnsupportedFeature(featureId);
        }
      }
    }, {
      key: "getData",
      value: function getData() {
        return this.messageHandler.sendWithPromise("GetData", null);
      }
    }, {
      key: "getPage",
      value: function getPage(pageNumber) {
        var _this15 = this;

        if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
          return Promise.reject(new Error("Invalid page request"));
        }

        var pageIndex = pageNumber - 1;

        if (pageIndex in this.pagePromises) {
          return this.pagePromises[pageIndex];
        }

        var promise = this.messageHandler.sendWithPromise("GetPage", {
          pageIndex: pageIndex
        }).then(function (pageInfo) {
          if (_this15.destroyed) {
            throw new Error("Transport destroyed");
          }

          var page = new PDFPageProxy(pageIndex, pageInfo, _this15, _this15._params.pdfBug);
          _this15.pageCache[pageIndex] = page;
          return page;
        });
        this.pagePromises[pageIndex] = promise;
        return promise;
      }
    }, {
      key: "getPageIndex",
      value: function getPageIndex(ref) {
        return this.messageHandler.sendWithPromise("GetPageIndex", {
          ref: ref
        }).catch(function (reason) {
          return Promise.reject(new Error(reason));
        });
      }
    }, {
      key: "getAnnotations",
      value: function getAnnotations(pageIndex, intent) {
        return this.messageHandler.sendWithPromise("GetAnnotations", {
          pageIndex: pageIndex,
          intent: intent
        });
      }
    }, {
      key: "getDestinations",
      value: function getDestinations() {
        return this.messageHandler.sendWithPromise("GetDestinations", null);
      }
    }, {
      key: "getDestination",
      value: function getDestination(id) {
        if (typeof id !== "string") {
          return Promise.reject(new Error("Invalid destination request."));
        }

        return this.messageHandler.sendWithPromise("GetDestination", {
          id: id
        });
      }
    }, {
      key: "getPageLabels",
      value: function getPageLabels() {
        return this.messageHandler.sendWithPromise("GetPageLabels", null);
      }
    }, {
      key: "getPageLayout",
      value: function getPageLayout() {
        return this.messageHandler.sendWithPromise("GetPageLayout", null);
      }
    }, {
      key: "getPageMode",
      value: function getPageMode() {
        return this.messageHandler.sendWithPromise("GetPageMode", null);
      }
    }, {
      key: "getViewerPreferences",
      value: function getViewerPreferences() {
        return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
      }
    }, {
      key: "getOpenActionDestination",
      value: function getOpenActionDestination() {
        return this.messageHandler.sendWithPromise("GetOpenActionDestination", null);
      }
    }, {
      key: "getAttachments",
      value: function getAttachments() {
        return this.messageHandler.sendWithPromise("GetAttachments", null);
      }
    }, {
      key: "getJavaScript",
      value: function getJavaScript() {
        return this.messageHandler.sendWithPromise("GetJavaScript", null);
      }
    }, {
      key: "getOutline",
      value: function getOutline() {
        return this.messageHandler.sendWithPromise("GetOutline", null);
      }
    }, {
      key: "getPermissions",
      value: function getPermissions() {
        return this.messageHandler.sendWithPromise("GetPermissions", null);
      }
    }, {
      key: "getMetadata",
      value: function getMetadata() {
        var _this16 = this;

        return this.messageHandler.sendWithPromise("GetMetadata", null).then(function (results) {
          return {
            info: results[0],
            metadata: results[1] ? new Metadata(results[1]) : null,
            contentDispositionFilename: _this16._fullReader ? _this16._fullReader.filename : null
          };
        });
      }
    }, {
      key: "getStats",
      value: function getStats() {
        return this.messageHandler.sendWithPromise("GetStats", null);
      }
    }, {
      key: "startCleanup",
      value: function startCleanup() {
        var _this17 = this;

        this.messageHandler.sendWithPromise("Cleanup", null).then(function () {
          for (var i = 0, ii = _this17.pageCache.length; i < ii; i++) {
            var page = _this17.pageCache[i];

            if (page) {
              page.cleanup();
            }
          }

          _this17.commonObjs.clear();

          _this17.fontLoader.clear();
        });
      }
    }, {
      key: "loadingParams",
      get: function get() {
        var params = this._params;
        return shadow(this, "loadingParams", {
          disableAutoFetch: params.disableAutoFetch,
          disableCreateObjectURL: params.disableCreateObjectURL,
          disableFontFace: params.disableFontFace,
          nativeImageDecoderSupport: params.nativeImageDecoderSupport
        });
      }
    }]);

    return WorkerTransport;
  }();
  /**
   * A PDF document and page is built of many objects. E.g. there are objects for
   * fonts, images, rendering code, etc. These objects may get processed inside of
   * a worker. This class implements some basic methods to manage these objects.
   * @ignore
   */


  var PDFObjects =
  /*#__PURE__*/
  function () {
    function PDFObjects() {
      _classCallCheck(this, PDFObjects);

      this._objs = Object.create(null);
    }
    /**
     * Ensures there is an object defined for `objId`.
     * @private
     */


    _createClass(PDFObjects, [{
      key: "_ensureObj",
      value: function _ensureObj(objId) {
        if (this._objs[objId]) {
          return this._objs[objId];
        }

        return this._objs[objId] = {
          capability: createPromiseCapability(),
          data: null,
          resolved: false
        };
      }
      /**
       * If called *without* callback, this returns the data of `objId` but the
       * object needs to be resolved. If it isn't, this method throws.
       *
       * If called *with* a callback, the callback is called with the data of the
       * object once the object is resolved. That means, if you call this method
       * and the object is already resolved, the callback gets called right away.
       */

    }, {
      key: "get",
      value: function get(objId) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // If there is a callback, then the get can be async and the object is
        // not required to be resolved right now.
        if (callback) {
          this._ensureObj(objId).capability.promise.then(callback);

          return null;
        } // If there isn't a callback, the user expects to get the resolved data
        // directly.


        var obj = this._objs[objId]; // If there isn't an object yet or the object isn't resolved, then the
        // data isn't ready yet!

        if (!obj || !obj.resolved) {
          throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
        }

        return obj.data;
      }
    }, {
      key: "has",
      value: function has(objId) {
        var obj = this._objs[objId];
        return obj ? obj.resolved : false;
      }
      /**
       * Resolves the object `objId` with optional `data`.
       */

    }, {
      key: "resolve",
      value: function resolve(objId, data) {
        var obj = this._ensureObj(objId);

        obj.resolved = true;
        obj.data = data;
        obj.capability.resolve(data);
      }
    }, {
      key: "clear",
      value: function clear() {
        for (var objId in this._objs) {
          var data = this._objs[objId].data;

          if (typeof Image !== "undefined" && data instanceof Image) {
            // Always release the image data when clearing out the cached objects.
            releaseImageResources(data);
          }
        }

        this._objs = Object.create(null);
      }
    }]);

    return PDFObjects;
  }();
  /**
   * Allows controlling of the rendering tasks.
   * @alias RenderTask
   */


  var RenderTask =
  /*#__PURE__*/
  function () {
    function RenderTask(internalRenderTask) {
      _classCallCheck(this, RenderTask);

      this._internalRenderTask = internalRenderTask;
      /**
       * Callback for incremental rendering -- a function that will be called
       * each time the rendering is paused.  To continue rendering call the
       * function that is the first argument to the callback.
       * @type {function}
       */

      this.onContinue = null;
    }
    /**
     * Promise for rendering task completion.
     * @type {Promise}
     */


    _createClass(RenderTask, [{
      key: "cancel",

      /**
       * Cancels the rendering task. If the task is currently rendering it will
       * not be cancelled until graphics pauses with a timeout. The promise that
       * this object extends will be rejected when cancelled.
       */
      value: function cancel() {
        this._internalRenderTask.cancel();
      }
      /**
       * Registers callbacks to indicate the rendering task completion.
       * @ignore
       */

    }, {
      key: "then",
      value: function then(onFulfilled, onRejected) {
        throw new Error("Removed API method: " + "RenderTask.then, use the `promise` getter instead.");
      }
    }, {
      key: "promise",
      get: function get() {
        return this._internalRenderTask.capability.promise;
      }
    }]);

    return RenderTask;
  }();
  /**
   * For internal use only.
   * @ignore
   */


  var InternalRenderTask = function InternalRenderTaskClosure() {
    var canvasInRendering = new WeakSet();

    var InternalRenderTask =
    /*#__PURE__*/
    function () {
      function InternalRenderTask(_ref14) {
        var callback = _ref14.callback,
            params = _ref14.params,
            objs = _ref14.objs,
            commonObjs = _ref14.commonObjs,
            operatorList = _ref14.operatorList,
            pageNumber = _ref14.pageNumber,
            canvasFactory = _ref14.canvasFactory,
            webGLContext = _ref14.webGLContext,
            _ref14$useRequestAnim = _ref14.useRequestAnimationFrame,
            useRequestAnimationFrame = _ref14$useRequestAnim === void 0 ? false : _ref14$useRequestAnim,
            _ref14$pdfBug = _ref14.pdfBug,
            pdfBug = _ref14$pdfBug === void 0 ? false : _ref14$pdfBug;

        _classCallCheck(this, InternalRenderTask);

        this.callback = callback;
        this.params = params;
        this.objs = objs;
        this.commonObjs = commonObjs;
        this.operatorListIdx = null;
        this.operatorList = operatorList;
        this.pageNumber = pageNumber;
        this.canvasFactory = canvasFactory;
        this.webGLContext = webGLContext;
        this._pdfBug = pdfBug;
        this.running = false;
        this.graphicsReadyCallback = null;
        this.graphicsReady = false;
        this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
        this.cancelled = false;
        this.capability = createPromiseCapability();
        this.task = new RenderTask(this); // caching this-bound methods

        this._continueBound = this._continue.bind(this);
        this._scheduleNextBound = this._scheduleNext.bind(this);
        this._nextBound = this._next.bind(this);
        this._canvas = params.canvasContext.canvas;
      }

      _createClass(InternalRenderTask, [{
        key: "initializeGraphics",
        value: function initializeGraphics() {
          var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.cancelled) {
            return;
          }

          if (this._canvas) {
            if (canvasInRendering.has(this._canvas)) {
              throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
            }

            canvasInRendering.add(this._canvas);
          }

          if (this._pdfBug && globalThis.StepperManager && globalThis.StepperManager.enabled) {
            this.stepper = globalThis.StepperManager.create(this.pageNumber - 1);
            this.stepper.init(this.operatorList);
            this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
          }

          var _this$params = this.params,
              canvasContext = _this$params.canvasContext,
              viewport = _this$params.viewport,
              transform = _this$params.transform,
              imageLayer = _this$params.imageLayer,
              background = _this$params.background;
          this.gfx = new CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer);
          this.gfx.beginDrawing({
            transform: transform,
            viewport: viewport,
            transparency: transparency,
            background: background
          });
          this.operatorListIdx = 0;
          this.graphicsReady = true;

          if (this.graphicsReadyCallback) {
            this.graphicsReadyCallback();
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.running = false;
          this.cancelled = true;

          if (this.gfx) {
            this.gfx.endDrawing();
          }

          if (this._canvas) {
            canvasInRendering.delete(this._canvas);
          }

          this.callback(error || new RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber), "canvas"));
        }
      }, {
        key: "operatorListChanged",
        value: function operatorListChanged() {
          if (!this.graphicsReady) {
            if (!this.graphicsReadyCallback) {
              this.graphicsReadyCallback = this._continueBound;
            }

            return;
          }

          if (this.stepper) {
            this.stepper.updateOperatorList(this.operatorList);
          }

          if (this.running) {
            return;
          }

          this._continue();
        }
      }, {
        key: "_continue",
        value: function _continue() {
          this.running = true;

          if (this.cancelled) {
            return;
          }

          if (this.task.onContinue) {
            this.task.onContinue(this._scheduleNextBound);
          } else {
            this._scheduleNext();
          }
        }
      }, {
        key: "_scheduleNext",
        value: function _scheduleNext() {
          var _this18 = this;

          if (this._useRequestAnimationFrame) {
            window.requestAnimationFrame(function () {
              _this18._nextBound().catch(_this18.cancel.bind(_this18));
            });
          } else {
            Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this));
          }
        }
      }, {
        key: "_next",
        value: function () {
          var _next2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.cancelled) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);

                    if (this.operatorListIdx === this.operatorList.argsArray.length) {
                      this.running = false;

                      if (this.operatorList.lastChunk) {
                        this.gfx.endDrawing();

                        if (this._canvas) {
                          canvasInRendering.delete(this._canvas);
                        }

                        this.callback();
                      }
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function _next() {
            return _next2.apply(this, arguments);
          }

          return _next;
        }()
      }]);

      return InternalRenderTask;
    }();

    return InternalRenderTask;
  }();

  var version = typeof PDFJSDev !== "undefined" ? PDFJSDev.eval("BUNDLE_VERSION") : null;
  var build = typeof PDFJSDev !== "undefined" ? PDFJSDev.eval("BUNDLE_BUILD") : null;

  /* Copyright 2015 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Text layer render parameters.
   *
   * @typedef {Object} TextLayerRenderParameters
   * @property {TextContent} [textContent] - Text content to render (the object
   *   is returned by the page's `getTextContent` method).
   * @property {ReadableStream} [textContentStream] - Text content stream to
   *   render (the stream is returned by the page's `streamTextContent` method).
   * @property {HTMLElement} container - HTML element that will contain text runs.
   * @property {PageViewport} viewport - The target viewport to properly
   *   layout the text runs.
   * @property {Array} [textDivs] - HTML elements that are correspond to the
   *   text items of the textContent input. This is output and shall be
   *   initially be set to empty array.
   * @property {Array} [textContentItemsStr] - Strings that correspond to the
   *   `str` property of the text items of textContent input. This is output
   *   and shall be initially be set to empty array.
   * @property {number} [timeout] - Delay in milliseconds before rendering of the
   *   text runs occurs.
   * @property {boolean} [enhanceTextSelection] - Whether to turn on the text
   *   selection enhancement.
   */

  var renderTextLayer = function renderTextLayerClosure() {
    var MAX_TEXT_DIVS_TO_RENDER = 100000;
    var NonWhitespaceRegexp = /\S/;

    function isAllWhitespace(str) {
      return !NonWhitespaceRegexp.test(str);
    }

    function appendText(task, geom, styles) {
      // Initialize all used properties to keep the caches monomorphic.
      var textDiv = document.createElement("span");
      var textDivProperties = {
        angle: 0,
        canvasWidth: 0,
        isWhitespace: false,
        originalTransform: null,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        scale: 1
      };

      task._textDivs.push(textDiv);

      if (isAllWhitespace(geom.str)) {
        textDivProperties.isWhitespace = true;

        task._textDivProperties.set(textDiv, textDivProperties);

        return;
      }

      var tx = Util.transform(task._viewport.transform, geom.transform);
      var angle = Math.atan2(tx[1], tx[0]);
      var style = styles[geom.fontName];

      if (style.vertical) {
        angle += Math.PI / 2;
      }

      var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
      var fontAscent = fontHeight;

      if (style.ascent) {
        fontAscent = style.ascent * fontAscent;
      } else if (style.descent) {
        fontAscent = (1 + style.descent) * fontAscent;
      }

      var left, top;

      if (angle === 0) {
        left = tx[4];
        top = tx[5] - fontAscent;
      } else {
        left = tx[4] + fontAscent * Math.sin(angle);
        top = tx[5] - fontAscent * Math.cos(angle);
      } // Setting the style properties individually, rather than all at once,
      // should be OK since the `textDiv` isn't appended to the document yet.


      textDiv.style.left = "".concat(left, "px");
      textDiv.style.top = "".concat(top, "px");
      textDiv.style.fontSize = "".concat(fontHeight, "px");
      textDiv.style.fontFamily = style.fontFamily;
      textDiv.textContent = geom.str; // `fontName` is only used by the FontInspector, and we only use `dataset`
      // here to make the font name available in the debugger.

      if (task._fontInspectorEnabled) {
        textDiv.dataset.fontName = geom.fontName;
      }

      if (angle !== 0) {
        textDivProperties.angle = angle * (180 / Math.PI);
      } // We don't bother scaling single-char text divs, because it has very
      // little effect on text highlighting. This makes scrolling on docs with
      // lots of such divs a lot faster.


      if (geom.str.length > 1) {
        if (style.vertical) {
          textDivProperties.canvasWidth = geom.height * task._viewport.scale;
        } else {
          textDivProperties.canvasWidth = geom.width * task._viewport.scale;
        }
      }

      task._textDivProperties.set(textDiv, textDivProperties);

      if (task._textContentStream) {
        task._layoutText(textDiv);
      }

      if (task._enhanceTextSelection) {
        var angleCos = 1,
            angleSin = 0;

        if (angle !== 0) {
          angleCos = Math.cos(angle);
          angleSin = Math.sin(angle);
        }

        var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
        var divHeight = fontHeight;
        var m, b;

        if (angle !== 0) {
          m = [angleCos, angleSin, -angleSin, angleCos, left, top];
          b = Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
        } else {
          b = [left, top, left + divWidth, top + divHeight];
        }

        task._bounds.push({
          left: b[0],
          top: b[1],
          right: b[2],
          bottom: b[3],
          div: textDiv,
          size: [divWidth, divHeight],
          m: m
        });
      }
    }

    function render(task) {
      if (task._canceled) {
        return;
      }

      var textDivs = task._textDivs;
      var capability = task._capability;
      var textDivsLength = textDivs.length; // No point in rendering many divs as it would make the browser
      // unusable even after the divs are rendered.

      if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
        task._renderingDone = true;
        capability.resolve();
        return;
      }

      if (!task._textContentStream) {
        for (var i = 0; i < textDivsLength; i++) {
          task._layoutText(textDivs[i]);
        }
      }

      task._renderingDone = true;
      capability.resolve();
    }

    function expand(task) {
      var bounds = task._bounds;
      var viewport = task._viewport;
      var expanded = expandBounds(viewport.width, viewport.height, bounds);

      for (var i = 0; i < expanded.length; i++) {
        var div = bounds[i].div;

        var divProperties = task._textDivProperties.get(div);

        if (divProperties.angle === 0) {
          divProperties.paddingLeft = bounds[i].left - expanded[i].left;
          divProperties.paddingTop = bounds[i].top - expanded[i].top;
          divProperties.paddingRight = expanded[i].right - bounds[i].right;
          divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;

          task._textDivProperties.set(div, divProperties);

          continue;
        } // Box is rotated -- trying to find padding so rotated div will not
        // exceed its expanded bounds.


        var e = expanded[i],
            b = bounds[i];
        var m = b.m,
            c = m[0],
            s = m[1]; // Finding intersections with expanded box.

        var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
        var ts = new Float64Array(64);
        points.forEach(function (p, i) {
          var t = Util.applyTransform(p, m);
          ts[i + 0] = c && (e.left - t[0]) / c;
          ts[i + 4] = s && (e.top - t[1]) / s;
          ts[i + 8] = c && (e.right - t[0]) / c;
          ts[i + 12] = s && (e.bottom - t[1]) / s;
          ts[i + 16] = s && (e.left - t[0]) / -s;
          ts[i + 20] = c && (e.top - t[1]) / c;
          ts[i + 24] = s && (e.right - t[0]) / -s;
          ts[i + 28] = c && (e.bottom - t[1]) / c;
          ts[i + 32] = c && (e.left - t[0]) / -c;
          ts[i + 36] = s && (e.top - t[1]) / -s;
          ts[i + 40] = c && (e.right - t[0]) / -c;
          ts[i + 44] = s && (e.bottom - t[1]) / -s;
          ts[i + 48] = s && (e.left - t[0]) / s;
          ts[i + 52] = c && (e.top - t[1]) / -c;
          ts[i + 56] = s && (e.right - t[0]) / s;
          ts[i + 60] = c && (e.bottom - t[1]) / -c;
        });

        var findPositiveMin = function findPositiveMin(ts, offset, count) {
          var result = 0;

          for (var i = 0; i < count; i++) {
            var t = ts[offset++];

            if (t > 0) {
              result = result ? Math.min(t, result) : t;
            }
          }

          return result;
        }; // Not based on math, but to simplify calculations, using cos and sin
        // absolute values to not exceed the box (it can but insignificantly).


        var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
        divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
        divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
        divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
        divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;

        task._textDivProperties.set(div, divProperties);
      }
    }

    function expandBounds(width, height, boxes) {
      var bounds = boxes.map(function (box, i) {
        return {
          x1: box.left,
          y1: box.top,
          x2: box.right,
          y2: box.bottom,
          index: i,
          x1New: undefined,
          x2New: undefined
        };
      });
      expandBoundsLTR(width, bounds);
      var expanded = new Array(boxes.length);
      bounds.forEach(function (b) {
        var i = b.index;
        expanded[i] = {
          left: b.x1New,
          top: 0,
          right: b.x2New,
          bottom: 0
        };
      }); // Rotating on 90 degrees and extending extended boxes. Reusing the bounds
      // array and objects.

      boxes.map(function (box, i) {
        var e = expanded[i],
            b = bounds[i];
        b.x1 = box.top;
        b.y1 = width - e.right;
        b.x2 = box.bottom;
        b.y2 = width - e.left;
        b.index = i;
        b.x1New = undefined;
        b.x2New = undefined;
      });
      expandBoundsLTR(height, bounds);
      bounds.forEach(function (b) {
        var i = b.index;
        expanded[i].top = b.x1New;
        expanded[i].bottom = b.x2New;
      });
      return expanded;
    }

    function expandBoundsLTR(width, bounds) {
      // Sorting by x1 coordinate and walk by the bounds in the same order.
      bounds.sort(function (a, b) {
        return a.x1 - b.x1 || a.index - b.index;
      }); // First we see on the horizon is a fake boundary.

      var fakeBoundary = {
        x1: -Infinity,
        y1: -Infinity,
        x2: 0,
        y2: Infinity,
        index: -1,
        x1New: 0,
        x2New: 0
      };
      var horizon = [{
        start: -Infinity,
        end: Infinity,
        boundary: fakeBoundary
      }];
      bounds.forEach(function (boundary) {
        // Searching for the affected part of horizon.
        // TODO red-black tree or simple binary search
        var i = 0;

        while (i < horizon.length && horizon[i].end <= boundary.y1) {
          i++;
        }

        var j = horizon.length - 1;

        while (j >= 0 && horizon[j].start >= boundary.y2) {
          j--;
        }

        var horizonPart, affectedBoundary;
        var q,
            k,
            maxXNew = -Infinity;

        for (q = i; q <= j; q++) {
          horizonPart = horizon[q];
          affectedBoundary = horizonPart.boundary;
          var xNew;

          if (affectedBoundary.x2 > boundary.x1) {
            // In the middle of the previous element, new x shall be at the
            // boundary start. Extending if further if the affected boundary
            // placed on top of the current one.
            xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
          } else if (affectedBoundary.x2New === undefined) {
            // We have some space in between, new x in middle will be a fair
            // choice.
            xNew = (affectedBoundary.x2 + boundary.x1) / 2;
          } else {
            // Affected boundary has x2new set, using it as new x.
            xNew = affectedBoundary.x2New;
          }

          if (xNew > maxXNew) {
            maxXNew = xNew;
          }
        } // Set new x1 for current boundary.


        boundary.x1New = maxXNew; // Adjusts new x2 for the affected boundaries.

        for (q = i; q <= j; q++) {
          horizonPart = horizon[q];
          affectedBoundary = horizonPart.boundary;

          if (affectedBoundary.x2New === undefined) {
            // Was not set yet, choosing new x if possible.
            if (affectedBoundary.x2 > boundary.x1) {
              // Current and affected boundaries intersect. If affected boundary
              // is placed on top of the current, shrinking the affected.
              if (affectedBoundary.index > boundary.index) {
                affectedBoundary.x2New = affectedBoundary.x2;
              }
            } else {
              affectedBoundary.x2New = maxXNew;
            }
          } else if (affectedBoundary.x2New > maxXNew) {
            // Affected boundary is touching new x, pushing it back.
            affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
          }
        } // Fixing the horizon.


        var changedHorizon = [],
            lastBoundary = null;

        for (q = i; q <= j; q++) {
          horizonPart = horizon[q];
          affectedBoundary = horizonPart.boundary; // Checking which boundary will be visible.

          var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;

          if (lastBoundary === useBoundary) {
            // Merging with previous.
            changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
          } else {
            changedHorizon.push({
              start: horizonPart.start,
              end: horizonPart.end,
              boundary: useBoundary
            });
            lastBoundary = useBoundary;
          }
        }

        if (horizon[i].start < boundary.y1) {
          changedHorizon[0].start = boundary.y1;
          changedHorizon.unshift({
            start: horizon[i].start,
            end: boundary.y1,
            boundary: horizon[i].boundary
          });
        }

        if (boundary.y2 < horizon[j].end) {
          changedHorizon[changedHorizon.length - 1].end = boundary.y2;
          changedHorizon.push({
            start: boundary.y2,
            end: horizon[j].end,
            boundary: horizon[j].boundary
          });
        } // Set x2 new of boundary that is no longer visible (see overlapping case
        // above).
        // TODO more efficient, e.g. via reference counting.


        for (q = i; q <= j; q++) {
          horizonPart = horizon[q];
          affectedBoundary = horizonPart.boundary;

          if (affectedBoundary.x2New !== undefined) {
            continue;
          }

          var used = false;

          for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
            used = horizon[k].boundary === affectedBoundary;
          }

          for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
            used = horizon[k].boundary === affectedBoundary;
          }

          for (k = 0; !used && k < changedHorizon.length; k++) {
            used = changedHorizon[k].boundary === affectedBoundary;
          }

          if (!used) {
            affectedBoundary.x2New = maxXNew;
          }
        }

        Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
      }); // Set new x2 for all unset boundaries.

      horizon.forEach(function (horizonPart) {
        var affectedBoundary = horizonPart.boundary;

        if (affectedBoundary.x2New === undefined) {
          affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
        }
      });
    }
    /**
     * Text layer rendering task.
     *
     * @param {TextContent} textContent
     * @param {HTMLElement} container
     * @param {PageViewport} viewport
     * @param {Array} textDivs
     * @param {boolean} enhanceTextSelection
     * @private
     */


    function TextLayerRenderTask(_ref) {
      var _this = this;

      var textContent = _ref.textContent,
          textContentStream = _ref.textContentStream,
          container = _ref.container,
          viewport = _ref.viewport,
          textDivs = _ref.textDivs,
          textContentItemsStr = _ref.textContentItemsStr,
          enhanceTextSelection = _ref.enhanceTextSelection;
      this._textContent = textContent;
      this._textContentStream = textContentStream;
      this._container = container;
      this._viewport = viewport;
      this._textDivs = textDivs || [];
      this._textContentItemsStr = textContentItemsStr || [];
      this._enhanceTextSelection = !!enhanceTextSelection;
      this._fontInspectorEnabled = !!(globalThis.FontInspector && globalThis.FontInspector.enabled);
      this._reader = null;
      this._layoutTextLastFontSize = null;
      this._layoutTextLastFontFamily = null;
      this._layoutTextCtx = null;
      this._textDivProperties = new WeakMap();
      this._renderingDone = false;
      this._canceled = false;
      this._capability = createPromiseCapability();
      this._renderTimer = null;
      this._bounds = []; // Always clean-up the temporary canvas once rendering is no longer pending.

      this._capability.promise.finally(function () {
        if (_this._layoutTextCtx) {
          // Zeroing the width and height cause Firefox to release graphics
          // resources immediately, which can greatly reduce memory consumption.
          _this._layoutTextCtx.canvas.width = 0;
          _this._layoutTextCtx.canvas.height = 0;
          _this._layoutTextCtx = null;
        }
      }).catch(function () {
        /* Avoid "Uncaught promise" messages in the console. */
      });
    }

    TextLayerRenderTask.prototype = {
      get promise() {
        return this._capability.promise;
      },

      cancel: function TextLayer_cancel() {
        this._canceled = true;

        if (this._reader) {
          this._reader.cancel(new AbortException("TextLayer task cancelled."));

          this._reader = null;
        }

        if (this._renderTimer !== null) {
          clearTimeout(this._renderTimer);
          this._renderTimer = null;
        }

        this._capability.reject(new Error("TextLayer task cancelled."));
      },
      _processItems: function _processItems(items, styleCache) {
        for (var i = 0, len = items.length; i < len; i++) {
          this._textContentItemsStr.push(items[i].str);

          appendText(this, items[i], styleCache);
        }
      },
      _layoutText: function _layoutText(textDiv) {
        var textDivProperties = this._textDivProperties.get(textDiv);

        if (textDivProperties.isWhitespace) {
          return;
        }

        var transform = "";

        if (textDivProperties.canvasWidth !== 0) {
          var _textDiv$style = textDiv.style,
              fontSize = _textDiv$style.fontSize,
              fontFamily = _textDiv$style.fontFamily; // Only build font string and set to context if different from last.

          if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
            this._layoutTextCtx.font = "".concat(fontSize, " ").concat(fontFamily);
            this._layoutTextLastFontSize = fontSize;
            this._layoutTextLastFontFamily = fontFamily;
          } // Only measure the width for multi-char text divs, see `appendText`.


          var _this$_layoutTextCtx$ = this._layoutTextCtx.measureText(textDiv.textContent),
              width = _this$_layoutTextCtx$.width;

          if (width > 0) {
            textDivProperties.scale = textDivProperties.canvasWidth / width;
            transform = "scaleX(".concat(textDivProperties.scale, ")");
          }
        }

        if (textDivProperties.angle !== 0) {
          transform = "rotate(".concat(textDivProperties.angle, "deg) ").concat(transform);
        }

        if (transform.length > 0) {
          if (this._enhanceTextSelection) {
            textDivProperties.originalTransform = transform;
          }

          textDiv.style.transform = transform;
        }

        this._textDivProperties.set(textDiv, textDivProperties);

        this._container.appendChild(textDiv);
      },
      _render: function TextLayer_render(timeout) {
        var _this2 = this;

        var capability = createPromiseCapability();
        var styleCache = Object.create(null); // The temporary canvas is used to measure text length in the DOM.

        var canvas = document.createElement("canvas");

        if (typeof PDFJSDev === "undefined" || PDFJSDev.test("FIREFOX || MOZCENTRAL || GENERIC")) {
          canvas.mozOpaque = true;
        }

        this._layoutTextCtx = canvas.getContext("2d", {
          alpha: false
        });

        if (this._textContent) {
          var textItems = this._textContent.items;
          var textStyles = this._textContent.styles;

          this._processItems(textItems, textStyles);

          capability.resolve();
        } else if (this._textContentStream) {
          var pump = function pump() {
            _this2._reader.read().then(function (_ref2) {
              var value = _ref2.value,
                  done = _ref2.done;

              if (done) {
                capability.resolve();
                return;
              }

              Object.assign(styleCache, value.styles);

              _this2._processItems(value.items, styleCache);

              pump();
            }, capability.reject);
          };

          this._reader = this._textContentStream.getReader();
          pump();
        } else {
          throw new Error('Neither "textContent" nor "textContentStream"' + " parameters specified.");
        }

        capability.promise.then(function () {
          styleCache = null;

          if (!timeout) {
            // Render right away
            render(_this2);
          } else {
            // Schedule
            _this2._renderTimer = setTimeout(function () {
              render(_this2);
              _this2._renderTimer = null;
            }, timeout);
          }
        }, this._capability.reject);
      },
      expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
        if (!this._enhanceTextSelection || !this._renderingDone) {
          return;
        }

        if (this._bounds !== null) {
          expand(this);
          this._bounds = null;
        }

        var NO_PADDING = "0 0 0 0";
        var transformBuf = [],
            paddingBuf = [];

        for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
          var div = this._textDivs[i];

          var divProps = this._textDivProperties.get(div);

          if (divProps.isWhitespace) {
            continue;
          }

          if (expandDivs) {
            transformBuf.length = 0;
            paddingBuf.length = 0;

            if (divProps.originalTransform) {
              transformBuf.push(divProps.originalTransform);
            }

            if (divProps.paddingTop > 0) {
              paddingBuf.push("".concat(divProps.paddingTop, "px"));
              transformBuf.push("translateY(".concat(-divProps.paddingTop, "px)"));
            } else {
              paddingBuf.push(0);
            }

            if (divProps.paddingRight > 0) {
              paddingBuf.push("".concat(divProps.paddingRight / divProps.scale, "px"));
            } else {
              paddingBuf.push(0);
            }

            if (divProps.paddingBottom > 0) {
              paddingBuf.push("".concat(divProps.paddingBottom, "px"));
            } else {
              paddingBuf.push(0);
            }

            if (divProps.paddingLeft > 0) {
              paddingBuf.push("".concat(divProps.paddingLeft / divProps.scale, "px"));
              transformBuf.push("translateX(".concat(-divProps.paddingLeft / divProps.scale, "px)"));
            } else {
              paddingBuf.push(0);
            }

            var padding = paddingBuf.join(" ");

            if (padding !== NO_PADDING) {
              div.style.padding = padding;
            }

            if (transformBuf.length) {
              div.style.transform = transformBuf.join(" ");
            }
          } else {
            div.style.padding = null;
            div.style.transform = divProps.originalTransform;
          }
        }
      }
    };
    /**
     * Starts rendering of the text layer.
     *
     * @param {TextLayerRenderParameters} renderParameters
     * @returns {TextLayerRenderTask}
     */

    function renderTextLayer(renderParameters) {
      var task = new TextLayerRenderTask({
        textContent: renderParameters.textContent,
        textContentStream: renderParameters.textContentStream,
        container: renderParameters.container,
        viewport: renderParameters.viewport,
        textDivs: renderParameters.textDivs,
        textContentItemsStr: renderParameters.textContentItemsStr,
        enhanceTextSelection: renderParameters.enhanceTextSelection
      });

      task._render(renderParameters.timeout);

      return task;
    }

    return renderTextLayer;
  }();

  /**
   * @typedef {Object} AnnotationElementParameters
   * @property {Object} data
   * @property {HTMLDivElement} layer
   * @property {PDFPage} page
   * @property {PageViewport} viewport
   * @property {IPDFLinkService} linkService
   * @property {DownloadManager} downloadManager
   * @property {string} [imageResourcesPath] - Path for image resources, mainly
   *   for annotation icons. Include trailing slash.
   * @property {boolean} renderInteractiveForms
   * @property {Object} svgFactory
   */

  var AnnotationElementFactory =
  /*#__PURE__*/
  function () {
    function AnnotationElementFactory() {
      _classCallCheck(this, AnnotationElementFactory);
    }

    _createClass(AnnotationElementFactory, null, [{
      key: "create",

      /**
       * @param {AnnotationElementParameters} parameters
       * @returns {AnnotationElement}
       */
      value: function create(parameters) {
        var subtype = parameters.data.annotationType;

        switch (subtype) {
          case AnnotationType.LINK:
            return new LinkAnnotationElement(parameters);

          case AnnotationType.TEXT:
            return new TextAnnotationElement(parameters);

          case AnnotationType.WIDGET:
            var fieldType = parameters.data.fieldType;

            switch (fieldType) {
              case "Tx":
                return new TextWidgetAnnotationElement(parameters);

              case "Btn":
                if (parameters.data.radioButton) {
                  return new RadioButtonWidgetAnnotationElement(parameters);
                } else if (parameters.data.checkBox) {
                  return new CheckboxWidgetAnnotationElement(parameters);
                }

                return new PushButtonWidgetAnnotationElement(parameters);

              case "Ch":
                return new ChoiceWidgetAnnotationElement(parameters);
            }

            return new WidgetAnnotationElement(parameters);

          case AnnotationType.POPUP:
            return new PopupAnnotationElement(parameters);

          case AnnotationType.FREETEXT:
            return new FreeTextAnnotationElement(parameters);

          case AnnotationType.LINE:
            return new LineAnnotationElement(parameters);

          case AnnotationType.SQUARE:
            return new SquareAnnotationElement(parameters);

          case AnnotationType.CIRCLE:
            return new CircleAnnotationElement(parameters);

          case AnnotationType.POLYLINE:
            return new PolylineAnnotationElement(parameters);

          case AnnotationType.CARET:
            return new CaretAnnotationElement(parameters);

          case AnnotationType.INK:
            return new InkAnnotationElement(parameters);

          case AnnotationType.POLYGON:
            return new PolygonAnnotationElement(parameters);

          case AnnotationType.HIGHLIGHT:
            return new HighlightAnnotationElement(parameters);

          case AnnotationType.UNDERLINE:
            return new UnderlineAnnotationElement(parameters);

          case AnnotationType.SQUIGGLY:
            return new SquigglyAnnotationElement(parameters);

          case AnnotationType.STRIKEOUT:
            return new StrikeOutAnnotationElement(parameters);

          case AnnotationType.STAMP:
            return new StampAnnotationElement(parameters);

          case AnnotationType.FILEATTACHMENT:
            return new FileAttachmentAnnotationElement(parameters);

          default:
            return new AnnotationElement(parameters);
        }
      }
    }]);

    return AnnotationElementFactory;
  }();

  var AnnotationElement =
  /*#__PURE__*/
  function () {
    function AnnotationElement(parameters) {
      var isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, AnnotationElement);

      this.isRenderable = isRenderable;
      this.data = parameters.data;
      this.layer = parameters.layer;
      this.page = parameters.page;
      this.viewport = parameters.viewport;
      this.linkService = parameters.linkService;
      this.downloadManager = parameters.downloadManager;
      this.imageResourcesPath = parameters.imageResourcesPath;
      this.renderInteractiveForms = parameters.renderInteractiveForms;
      this.svgFactory = parameters.svgFactory;

      if (isRenderable) {
        this.container = this._createContainer(ignoreBorder);
      }
    }
    /**
     * Create an empty container for the annotation's HTML element.
     *
     * @private
     * @param {boolean} ignoreBorder
     * @memberof AnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(AnnotationElement, [{
      key: "_createContainer",
      value: function _createContainer() {
        var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var data = this.data,
            page = this.page,
            viewport = this.viewport;
        var container = document.createElement("section");
        var width = data.rect[2] - data.rect[0];
        var height = data.rect[3] - data.rect[1];
        container.setAttribute("data-annotation-id", data.id); // Do *not* modify `data.rect`, since that will corrupt the annotation
        // position on subsequent calls to `_createContainer` (see issue 6804).

        var rect = Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
        container.style.transform = "matrix(".concat(viewport.transform.join(","), ")");
        container.style.transformOrigin = "-".concat(rect[0], "px -").concat(rect[1], "px");

        if (!ignoreBorder && data.borderStyle.width > 0) {
          container.style.borderWidth = "".concat(data.borderStyle.width, "px");

          if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
            // Underline styles only have a bottom border, so we do not need
            // to adjust for all borders. This yields a similar result as
            // Adobe Acrobat/Reader.
            width = width - 2 * data.borderStyle.width;
            height = height - 2 * data.borderStyle.width;
          }

          var horizontalRadius = data.borderStyle.horizontalCornerRadius;
          var verticalRadius = data.borderStyle.verticalCornerRadius;

          if (horizontalRadius > 0 || verticalRadius > 0) {
            var radius = "".concat(horizontalRadius, "px / ").concat(verticalRadius, "px");
            container.style.borderRadius = radius;
          }

          switch (data.borderStyle.style) {
            case AnnotationBorderStyleType.SOLID:
              container.style.borderStyle = "solid";
              break;

            case AnnotationBorderStyleType.DASHED:
              container.style.borderStyle = "dashed";
              break;

            case AnnotationBorderStyleType.BEVELED:
              warn("Unimplemented border style: beveled");
              break;

            case AnnotationBorderStyleType.INSET:
              warn("Unimplemented border style: inset");
              break;

            case AnnotationBorderStyleType.UNDERLINE:
              container.style.borderBottomStyle = "solid";
              break;
          }

          if (data.color) {
            container.style.borderColor = Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
          } else {
            // Transparent (invisible) border, so do not draw it at all.
            container.style.borderWidth = 0;
          }
        }

        container.style.left = "".concat(rect[0], "px");
        container.style.top = "".concat(rect[1], "px");
        container.style.width = "".concat(width, "px");
        container.style.height = "".concat(height, "px");
        return container;
      }
      /**
       * Create a popup for the annotation's HTML element. This is used for
       * annotations that do not have a Popup entry in the dictionary, but
       * are of a type that works with popups (such as Highlight annotations).
       *
       * @private
       * @param {HTMLSectionElement} container
       * @param {HTMLDivElement|HTMLImageElement|null} trigger
       * @param {Object} data
       * @memberof AnnotationElement
       */

    }, {
      key: "_createPopup",
      value: function _createPopup(container, trigger, data) {
        // If no trigger element is specified, create it.
        if (!trigger) {
          trigger = document.createElement("div");
          trigger.style.height = container.style.height;
          trigger.style.width = container.style.width;
          container.appendChild(trigger);
        }

        var popupElement = new PopupElement({
          container: container,
          trigger: trigger,
          color: data.color,
          title: data.title,
          modificationDate: data.modificationDate,
          contents: data.contents,
          hideWrapper: true
        });
        var popup = popupElement.render(); // Position the popup next to the annotation's container.

        popup.style.left = container.style.width;
        container.appendChild(popup);
      }
      /**
       * Render the annotation's HTML element in the empty container.
       *
       * @public
       * @memberof AnnotationElement
       */

    }, {
      key: "render",
      value: function render() {
        unreachable("Abstract method `AnnotationElement.render` called");
      }
    }]);

    return AnnotationElement;
  }();

  var LinkAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement) {
    _inherits(LinkAnnotationElement, _AnnotationElement);

    function LinkAnnotationElement(parameters) {
      _classCallCheck(this, LinkAnnotationElement);

      var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
      return _possibleConstructorReturn(this, _getPrototypeOf(LinkAnnotationElement).call(this, parameters, isRenderable));
    }
    /**
     * Render the link annotation's HTML element in the empty container.
     *
     * @public
     * @memberof LinkAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(LinkAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "linkAnnotation";
        var data = this.data,
            linkService = this.linkService;
        var link = document.createElement("a");

        if (data.url) {
          addLinkAttributes(link, {
            url: data.url,
            target: data.newWindow ? LinkTarget.BLANK : linkService.externalLinkTarget,
            rel: linkService.externalLinkRel,
            enabled: linkService.externalLinkEnabled
          });
        } else if (data.action) {
          this._bindNamedAction(link, data.action);
        } else {
          this._bindLink(link, data.dest);
        }

        this.container.appendChild(link);
        return this.container;
      }
      /**
       * Bind internal links to the link element.
       *
       * @private
       * @param {Object} link
       * @param {Object} destination
       * @memberof LinkAnnotationElement
       */

    }, {
      key: "_bindLink",
      value: function _bindLink(link, destination) {
        var _this = this;

        link.href = this.linkService.getDestinationHash(destination);

        link.onclick = function () {
          if (destination) {
            _this.linkService.navigateTo(destination);
          }

          return false;
        };

        if (destination) {
          link.className = "internalLink";
        }
      }
      /**
       * Bind named actions to the link element.
       *
       * @private
       * @param {Object} link
       * @param {Object} action
       * @memberof LinkAnnotationElement
       */

    }, {
      key: "_bindNamedAction",
      value: function _bindNamedAction(link, action) {
        var _this2 = this;

        link.href = this.linkService.getAnchorUrl("");

        link.onclick = function () {
          _this2.linkService.executeNamedAction(action);

          return false;
        };

        link.className = "internalLink";
      }
    }]);

    return LinkAnnotationElement;
  }(AnnotationElement);

  var TextAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement2) {
    _inherits(TextAnnotationElement, _AnnotationElement2);

    function TextAnnotationElement(parameters) {
      _classCallCheck(this, TextAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(TextAnnotationElement).call(this, parameters, isRenderable));
    }
    /**
     * Render the text annotation's HTML element in the empty container.
     *
     * @public
     * @memberof TextAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(TextAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "textAnnotation";
        var image = document.createElement("img");
        image.style.height = this.container.style.height;
        image.style.width = this.container.style.width;
        image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
        image.alt = "[{{type}} Annotation]";
        image.dataset.l10nId = "text_annotation_type";
        image.dataset.l10nArgs = JSON.stringify({
          type: this.data.name
        });

        if (!this.data.hasPopup) {
          this._createPopup(this.container, image, this.data);
        }

        this.container.appendChild(image);
        return this.container;
      }
    }]);

    return TextAnnotationElement;
  }(AnnotationElement);

  var WidgetAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement3) {
    _inherits(WidgetAnnotationElement, _AnnotationElement3);

    function WidgetAnnotationElement() {
      _classCallCheck(this, WidgetAnnotationElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(WidgetAnnotationElement).apply(this, arguments));
    }

    _createClass(WidgetAnnotationElement, [{
      key: "render",

      /**
       * Render the widget annotation's HTML element in the empty container.
       *
       * @public
       * @memberof WidgetAnnotationElement
       * @returns {HTMLSectionElement}
       */
      value: function render() {
        // Show only the container for unsupported field types.
        return this.container;
      }
    }]);

    return WidgetAnnotationElement;
  }(AnnotationElement);

  var TextWidgetAnnotationElement =
  /*#__PURE__*/
  function (_WidgetAnnotationElem) {
    _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

    function TextWidgetAnnotationElement(parameters) {
      _classCallCheck(this, TextWidgetAnnotationElement);

      var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
      return _possibleConstructorReturn(this, _getPrototypeOf(TextWidgetAnnotationElement).call(this, parameters, isRenderable));
    }
    /**
     * Render the text widget annotation's HTML element in the empty container.
     *
     * @public
     * @memberof TextWidgetAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(TextWidgetAnnotationElement, [{
      key: "render",
      value: function render() {
        var TEXT_ALIGNMENT = ["left", "center", "right"];
        this.container.className = "textWidgetAnnotation";
        var element = null;

        if (this.renderInteractiveForms) {
          // NOTE: We cannot set the values using `element.value` below, since it
          //       prevents the AnnotationLayer rasterizer in `test/driver.js`
          //       from parsing the elements correctly for the reference tests.
          if (this.data.multiLine) {
            element = document.createElement("textarea");
            element.textContent = this.data.fieldValue;
          } else {
            element = document.createElement("input");
            element.type = "text";
            element.setAttribute("value", this.data.fieldValue);
          }

          element.disabled = this.data.readOnly;

          if (this.data.maxLen !== null) {
            element.maxLength = this.data.maxLen;
          }

          if (this.data.comb) {
            var fieldWidth = this.data.rect[2] - this.data.rect[0];
            var combWidth = fieldWidth / this.data.maxLen;
            element.classList.add("comb");
            element.style.letterSpacing = "calc(".concat(combWidth, "px - 1ch)");
          }
        } else {
          element = document.createElement("div");
          element.textContent = this.data.fieldValue;
          element.style.verticalAlign = "middle";
          element.style.display = "table-cell";
          var font = null;

          if (this.data.fontRefName && this.page.commonObjs.has(this.data.fontRefName)) {
            font = this.page.commonObjs.get(this.data.fontRefName);
          }

          this._setTextStyle(element, font);
        }

        if (this.data.textAlignment !== null) {
          element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
        }

        this.container.appendChild(element);
        return this.container;
      }
      /**
       * Apply text styles to the text in the element.
       *
       * @private
       * @param {HTMLDivElement} element
       * @param {Object} font
       * @memberof TextWidgetAnnotationElement
       */

    }, {
      key: "_setTextStyle",
      value: function _setTextStyle(element, font) {
        // TODO: This duplicates some of the logic in CanvasGraphics.setFont().
        var style = element.style;
        style.fontSize = "".concat(this.data.fontSize, "px");
        style.direction = this.data.fontDirection < 0 ? "rtl" : "ltr";

        if (!font) {
          return;
        }

        style.fontWeight = font.black ? font.bold ? "900" : "bold" : font.bold ? "bold" : "normal";
        style.fontStyle = font.italic ? "italic" : "normal"; // Use a reasonable default font if the font doesn't specify a fallback.

        var fontFamily = font.loadedName ? "\"".concat(font.loadedName, "\", ") : "";
        var fallbackName = font.fallbackName || "Helvetica, sans-serif";
        style.fontFamily = fontFamily + fallbackName;
      }
    }]);

    return TextWidgetAnnotationElement;
  }(WidgetAnnotationElement);

  var CheckboxWidgetAnnotationElement =
  /*#__PURE__*/
  function (_WidgetAnnotationElem2) {
    _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

    function CheckboxWidgetAnnotationElement(parameters) {
      _classCallCheck(this, CheckboxWidgetAnnotationElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
    }
    /**
     * Render the checkbox widget annotation's HTML element
     * in the empty container.
     *
     * @public
     * @memberof CheckboxWidgetAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(CheckboxWidgetAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "buttonWidgetAnnotation checkBox";
        var element = document.createElement("input");
        element.disabled = this.data.readOnly;
        element.type = "checkbox";

        if (this.data.fieldValue && this.data.fieldValue !== "Off") {
          element.setAttribute("checked", true);
        }

        this.container.appendChild(element);
        return this.container;
      }
    }]);

    return CheckboxWidgetAnnotationElement;
  }(WidgetAnnotationElement);

  var RadioButtonWidgetAnnotationElement =
  /*#__PURE__*/
  function (_WidgetAnnotationElem3) {
    _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

    function RadioButtonWidgetAnnotationElement(parameters) {
      _classCallCheck(this, RadioButtonWidgetAnnotationElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
    }
    /**
     * Render the radio button widget annotation's HTML element
     * in the empty container.
     *
     * @public
     * @memberof RadioButtonWidgetAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(RadioButtonWidgetAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "buttonWidgetAnnotation radioButton";
        var element = document.createElement("input");
        element.disabled = this.data.readOnly;
        element.type = "radio";
        element.name = this.data.fieldName;

        if (this.data.fieldValue === this.data.buttonValue) {
          element.setAttribute("checked", true);
        }

        this.container.appendChild(element);
        return this.container;
      }
    }]);

    return RadioButtonWidgetAnnotationElement;
  }(WidgetAnnotationElement);

  var PushButtonWidgetAnnotationElement =
  /*#__PURE__*/
  function (_LinkAnnotationElemen) {
    _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

    function PushButtonWidgetAnnotationElement() {
      _classCallCheck(this, PushButtonWidgetAnnotationElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(PushButtonWidgetAnnotationElement).apply(this, arguments));
    }

    _createClass(PushButtonWidgetAnnotationElement, [{
      key: "render",

      /**
       * Render the push button widget annotation's HTML element
       * in the empty container.
       *
       * @public
       * @memberof PushButtonWidgetAnnotationElement
       * @returns {HTMLSectionElement}
       */
      value: function render() {
        // The rendering and functionality of a push button widget annotation is
        // equal to that of a link annotation, but may have more functionality, such
        // as performing actions on form fields (resetting, submitting, et cetera).
        var container = _get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype), "render", this).call(this);

        container.className = "buttonWidgetAnnotation pushButton";
        return container;
      }
    }]);

    return PushButtonWidgetAnnotationElement;
  }(LinkAnnotationElement);

  var ChoiceWidgetAnnotationElement =
  /*#__PURE__*/
  function (_WidgetAnnotationElem4) {
    _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

    function ChoiceWidgetAnnotationElement(parameters) {
      _classCallCheck(this, ChoiceWidgetAnnotationElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
    }
    /**
     * Render the choice widget annotation's HTML element in the empty
     * container.
     *
     * @public
     * @memberof ChoiceWidgetAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(ChoiceWidgetAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "choiceWidgetAnnotation";
        var selectElement = document.createElement("select");
        selectElement.disabled = this.data.readOnly;

        if (!this.data.combo) {
          // List boxes have a size and (optionally) multiple selection.
          selectElement.size = this.data.options.length;

          if (this.data.multiSelect) {
            selectElement.multiple = true;
          }
        } // Insert the options into the choice field.


        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.data.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var option = _step.value;
            var optionElement = document.createElement("option");
            optionElement.textContent = option.displayValue;
            optionElement.value = option.exportValue;

            if (this.data.fieldValue.includes(option.displayValue)) {
              optionElement.setAttribute("selected", true);
            }

            selectElement.appendChild(optionElement);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.container.appendChild(selectElement);
        return this.container;
      }
    }]);

    return ChoiceWidgetAnnotationElement;
  }(WidgetAnnotationElement);

  var PopupAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement4) {
    _inherits(PopupAnnotationElement, _AnnotationElement4);

    function PopupAnnotationElement(parameters) {
      _classCallCheck(this, PopupAnnotationElement);

      var isRenderable = !!(parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(PopupAnnotationElement).call(this, parameters, isRenderable));
    }
    /**
     * Render the popup annotation's HTML element in the empty container.
     *
     * @public
     * @memberof PopupAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(PopupAnnotationElement, [{
      key: "render",
      value: function render() {
        // Do not render popup annotations for parent elements with these types as
        // they create the popups themselves (because of custom trigger divs).
        var IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
        this.container.className = "popupAnnotation";

        if (IGNORE_TYPES.includes(this.data.parentType)) {
          return this.container;
        }

        var selector = "[data-annotation-id=\"".concat(this.data.parentId, "\"]");
        var parentElement = this.layer.querySelector(selector);

        if (!parentElement) {
          return this.container;
        }

        var popup = new PopupElement({
          container: this.container,
          trigger: parentElement,
          color: this.data.color,
          title: this.data.title,
          modificationDate: this.data.modificationDate,
          contents: this.data.contents
        }); // Position the popup next to the parent annotation's container.
        // PDF viewers ignore a popup annotation's rectangle.

        var parentLeft = parseFloat(parentElement.style.left);
        var parentWidth = parseFloat(parentElement.style.width);
        this.container.style.transformOrigin = "-".concat(parentLeft + parentWidth, "px -").concat(parentElement.style.top);
        this.container.style.left = "".concat(parentLeft + parentWidth, "px");
        this.container.appendChild(popup.render());
        return this.container;
      }
    }]);

    return PopupAnnotationElement;
  }(AnnotationElement);

  var PopupElement =
  /*#__PURE__*/
  function () {
    function PopupElement(parameters) {
      _classCallCheck(this, PopupElement);

      this.container = parameters.container;
      this.trigger = parameters.trigger;
      this.color = parameters.color;
      this.title = parameters.title;
      this.modificationDate = parameters.modificationDate;
      this.contents = parameters.contents;
      this.hideWrapper = parameters.hideWrapper || false;
      this.pinned = false;
    }
    /**
     * Render the popup's HTML element.
     *
     * @public
     * @memberof PopupElement
     * @returns {HTMLSectionElement}
     */


    _createClass(PopupElement, [{
      key: "render",
      value: function render() {
        var BACKGROUND_ENLIGHT = 0.7;
        var wrapper = document.createElement("div");
        wrapper.className = "popupWrapper"; // For Popup annotations we hide the entire section because it contains
        // only the popup. However, for Text annotations without a separate Popup
        // annotation, we cannot hide the entire container as the image would
        // disappear too. In that special case, hiding the wrapper suffices.

        this.hideElement = this.hideWrapper ? wrapper : this.container;
        this.hideElement.setAttribute("hidden", true);
        var popup = document.createElement("div");
        popup.className = "popup";
        var color = this.color;

        if (color) {
          // Enlighten the color.
          var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
          var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
          var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
          popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
        }

        var title = document.createElement("h1");
        title.textContent = this.title;
        popup.appendChild(title); // The modification date is shown in the popup instead of the creation
        // date if it is available and can be parsed correctly, which is
        // consistent with other viewers such as Adobe Acrobat.

        var dateObject = PDFDateString.toDateObject(this.modificationDate);

        if (dateObject) {
          var modificationDate = document.createElement("span");
          modificationDate.textContent = "{{date}}, {{time}}";
          modificationDate.dataset.l10nId = "annotation_date_string";
          modificationDate.dataset.l10nArgs = JSON.stringify({
            date: dateObject.toLocaleDateString(),
            time: dateObject.toLocaleTimeString()
          });
          popup.appendChild(modificationDate);
        }

        var contents = this._formatContents(this.contents);

        popup.appendChild(contents); // Attach the event listeners to the trigger element.

        this.trigger.addEventListener("click", this._toggle.bind(this));
        this.trigger.addEventListener("mouseover", this._show.bind(this, false));
        this.trigger.addEventListener("mouseout", this._hide.bind(this, false));
        popup.addEventListener("click", this._hide.bind(this, true));
        wrapper.appendChild(popup);
        return wrapper;
      }
      /**
       * Format the contents of the popup by adding newlines where necessary.
       *
       * @private
       * @param {string} contents
       * @memberof PopupElement
       * @returns {HTMLParagraphElement}
       */

    }, {
      key: "_formatContents",
      value: function _formatContents(contents) {
        var p = document.createElement("p");
        var lines = contents.split(/(?:\r\n?|\n)/);

        for (var i = 0, ii = lines.length; i < ii; ++i) {
          var line = lines[i];
          p.appendChild(document.createTextNode(line));

          if (i < ii - 1) {
            p.appendChild(document.createElement("br"));
          }
        }

        return p;
      }
      /**
       * Toggle the visibility of the popup.
       *
       * @private
       * @memberof PopupElement
       */

    }, {
      key: "_toggle",
      value: function _toggle() {
        if (this.pinned) {
          this._hide(true);
        } else {
          this._show(true);
        }
      }
      /**
       * Show the popup.
       *
       * @private
       * @param {boolean} pin
       * @memberof PopupElement
       */

    }, {
      key: "_show",
      value: function _show() {
        var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (pin) {
          this.pinned = true;
        }

        if (this.hideElement.hasAttribute("hidden")) {
          this.hideElement.removeAttribute("hidden");
          this.container.style.zIndex += 1;
        }
      }
      /**
       * Hide the popup.
       *
       * @private
       * @param {boolean} unpin
       * @memberof PopupElement
       */

    }, {
      key: "_hide",
      value: function _hide() {
        var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (unpin) {
          this.pinned = false;
        }

        if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
          this.hideElement.setAttribute("hidden", true);
          this.container.style.zIndex -= 1;
        }
      }
    }]);

    return PopupElement;
  }();

  var FreeTextAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement5) {
    _inherits(FreeTextAnnotationElement, _AnnotationElement5);

    function FreeTextAnnotationElement(parameters) {
      _classCallCheck(this, FreeTextAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(FreeTextAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the free text annotation's HTML element in the empty container.
     *
     * @public
     * @memberof FreeTextAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(FreeTextAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "freeTextAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return FreeTextAnnotationElement;
  }(AnnotationElement);

  var LineAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement6) {
    _inherits(LineAnnotationElement, _AnnotationElement6);

    function LineAnnotationElement(parameters) {
      _classCallCheck(this, LineAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(LineAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the line annotation's HTML element in the empty container.
     *
     * @public
     * @memberof LineAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(LineAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "lineAnnotation"; // Create an invisible line with the same starting and ending coordinates
        // that acts as the trigger for the popup. Only the line itself should
        // trigger the popup, not the entire container.

        var data = this.data;
        var width = data.rect[2] - data.rect[0];
        var height = data.rect[3] - data.rect[1];
        var svg = this.svgFactory.create(width, height); // PDF coordinates are calculated from a bottom left origin, so transform
        // the line coordinates to a top left origin for the SVG element.

        var line = this.svgFactory.createElement("svg:line");
        line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
        line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
        line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
        line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]); // Ensure that the 'stroke-width' is always non-zero, since otherwise it
        // won't be possible to open/close the popup (note e.g. issue 11122).

        line.setAttribute("stroke-width", data.borderStyle.width || 1);
        line.setAttribute("stroke", "transparent");
        svg.appendChild(line);
        this.container.append(svg); // Create the popup ourselves so that we can bind it to the line instead
        // of to the entire container (which is the default).

        this._createPopup(this.container, line, data);

        return this.container;
      }
    }]);

    return LineAnnotationElement;
  }(AnnotationElement);

  var SquareAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement7) {
    _inherits(SquareAnnotationElement, _AnnotationElement7);

    function SquareAnnotationElement(parameters) {
      _classCallCheck(this, SquareAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(SquareAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the square annotation's HTML element in the empty container.
     *
     * @public
     * @memberof SquareAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(SquareAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "squareAnnotation"; // Create an invisible square with the same rectangle that acts as the
        // trigger for the popup. Only the square itself should trigger the
        // popup, not the entire container.

        var data = this.data;
        var width = data.rect[2] - data.rect[0];
        var height = data.rect[3] - data.rect[1];
        var svg = this.svgFactory.create(width, height); // The browser draws half of the borders inside the square and half of
        // the borders outside the square by default. This behavior cannot be
        // changed programmatically, so correct for that here.

        var borderWidth = data.borderStyle.width;
        var square = this.svgFactory.createElement("svg:rect");
        square.setAttribute("x", borderWidth / 2);
        square.setAttribute("y", borderWidth / 2);
        square.setAttribute("width", width - borderWidth);
        square.setAttribute("height", height - borderWidth); // Ensure that the 'stroke-width' is always non-zero, since otherwise it
        // won't be possible to open/close the popup (note e.g. issue 11122).

        square.setAttribute("stroke-width", borderWidth || 1);
        square.setAttribute("stroke", "transparent");
        square.setAttribute("fill", "none");
        svg.appendChild(square);
        this.container.append(svg); // Create the popup ourselves so that we can bind it to the square instead
        // of to the entire container (which is the default).

        this._createPopup(this.container, square, data);

        return this.container;
      }
    }]);

    return SquareAnnotationElement;
  }(AnnotationElement);

  var CircleAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement8) {
    _inherits(CircleAnnotationElement, _AnnotationElement8);

    function CircleAnnotationElement(parameters) {
      _classCallCheck(this, CircleAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(CircleAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the circle annotation's HTML element in the empty container.
     *
     * @public
     * @memberof CircleAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(CircleAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "circleAnnotation"; // Create an invisible circle with the same ellipse that acts as the
        // trigger for the popup. Only the circle itself should trigger the
        // popup, not the entire container.

        var data = this.data;
        var width = data.rect[2] - data.rect[0];
        var height = data.rect[3] - data.rect[1];
        var svg = this.svgFactory.create(width, height); // The browser draws half of the borders inside the circle and half of
        // the borders outside the circle by default. This behavior cannot be
        // changed programmatically, so correct for that here.

        var borderWidth = data.borderStyle.width;
        var circle = this.svgFactory.createElement("svg:ellipse");
        circle.setAttribute("cx", width / 2);
        circle.setAttribute("cy", height / 2);
        circle.setAttribute("rx", width / 2 - borderWidth / 2);
        circle.setAttribute("ry", height / 2 - borderWidth / 2); // Ensure that the 'stroke-width' is always non-zero, since otherwise it
        // won't be possible to open/close the popup (note e.g. issue 11122).

        circle.setAttribute("stroke-width", borderWidth || 1);
        circle.setAttribute("stroke", "transparent");
        circle.setAttribute("fill", "none");
        svg.appendChild(circle);
        this.container.append(svg); // Create the popup ourselves so that we can bind it to the circle instead
        // of to the entire container (which is the default).

        this._createPopup(this.container, circle, data);

        return this.container;
      }
    }]);

    return CircleAnnotationElement;
  }(AnnotationElement);

  var PolylineAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement9) {
    _inherits(PolylineAnnotationElement, _AnnotationElement9);

    function PolylineAnnotationElement(parameters) {
      var _this3;

      _classCallCheck(this, PolylineAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PolylineAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
      _this3.containerClassName = "polylineAnnotation";
      _this3.svgElementName = "svg:polyline";
      return _this3;
    }
    /**
     * Render the polyline annotation's HTML element in the empty container.
     *
     * @public
     * @memberof PolylineAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(PolylineAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = this.containerClassName; // Create an invisible polyline with the same points that acts as the
        // trigger for the popup. Only the polyline itself should trigger the
        // popup, not the entire container.

        var data = this.data;
        var width = data.rect[2] - data.rect[0];
        var height = data.rect[3] - data.rect[1];
        var svg = this.svgFactory.create(width, height); // Convert the vertices array to a single points string that the SVG
        // polyline element expects ("x1,y1 x2,y2 ..."). PDF coordinates are
        // calculated from a bottom left origin, so transform the polyline
        // coordinates to a top left origin for the SVG element.

        var points = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data.vertices[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var coordinate = _step2.value;
            var x = coordinate.x - data.rect[0];
            var y = data.rect[3] - coordinate.y;
            points.push(x + "," + y);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        points = points.join(" ");
        var polyline = this.svgFactory.createElement(this.svgElementName);
        polyline.setAttribute("points", points); // Ensure that the 'stroke-width' is always non-zero, since otherwise it
        // won't be possible to open/close the popup (note e.g. issue 11122).

        polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
        polyline.setAttribute("stroke", "transparent");
        polyline.setAttribute("fill", "none");
        svg.appendChild(polyline);
        this.container.append(svg); // Create the popup ourselves so that we can bind it to the polyline
        // instead of to the entire container (which is the default).

        this._createPopup(this.container, polyline, data);

        return this.container;
      }
    }]);

    return PolylineAnnotationElement;
  }(AnnotationElement);

  var PolygonAnnotationElement =
  /*#__PURE__*/
  function (_PolylineAnnotationEl) {
    _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

    function PolygonAnnotationElement(parameters) {
      var _this4;

      _classCallCheck(this, PolygonAnnotationElement);

      // Polygons are specific forms of polylines, so reuse their logic.
      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PolygonAnnotationElement).call(this, parameters));
      _this4.containerClassName = "polygonAnnotation";
      _this4.svgElementName = "svg:polygon";
      return _this4;
    }

    return PolygonAnnotationElement;
  }(PolylineAnnotationElement);

  var CaretAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement10) {
    _inherits(CaretAnnotationElement, _AnnotationElement10);

    function CaretAnnotationElement(parameters) {
      _classCallCheck(this, CaretAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(CaretAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the caret annotation's HTML element in the empty container.
     *
     * @public
     * @memberof CaretAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(CaretAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "caretAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return CaretAnnotationElement;
  }(AnnotationElement);

  var InkAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement11) {
    _inherits(InkAnnotationElement, _AnnotationElement11);

    function InkAnnotationElement(parameters) {
      var _this5;

      _classCallCheck(this, InkAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(InkAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
      _this5.containerClassName = "inkAnnotation"; // Use the polyline SVG element since it allows us to use coordinates
      // directly and to draw both straight lines and curves.

      _this5.svgElementName = "svg:polyline";
      return _this5;
    }
    /**
     * Render the ink annotation's HTML element in the empty container.
     *
     * @public
     * @memberof InkAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(InkAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = this.containerClassName; // Create an invisible polyline with the same points that acts as the
        // trigger for the popup.

        var data = this.data;
        var width = data.rect[2] - data.rect[0];
        var height = data.rect[3] - data.rect[1];
        var svg = this.svgFactory.create(width, height);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = data.inkLists[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var inkList = _step3.value;
            // Convert the ink list to a single points string that the SVG
            // polyline element expects ("x1,y1 x2,y2 ..."). PDF coordinates are
            // calculated from a bottom left origin, so transform the polyline
            // coordinates to a top left origin for the SVG element.
            var points = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = inkList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var coordinate = _step4.value;
                var x = coordinate.x - data.rect[0];
                var y = data.rect[3] - coordinate.y;
                points.push("".concat(x, ",").concat(y));
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            points = points.join(" ");
            var polyline = this.svgFactory.createElement(this.svgElementName);
            polyline.setAttribute("points", points); // Ensure that the 'stroke-width' is always non-zero, since otherwise it
            // won't be possible to open/close the popup (note e.g. issue 11122).

            polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
            polyline.setAttribute("stroke", "transparent");
            polyline.setAttribute("fill", "none"); // Create the popup ourselves so that we can bind it to the polyline
            // instead of to the entire container (which is the default).

            this._createPopup(this.container, polyline, data);

            svg.appendChild(polyline);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        this.container.append(svg);
        return this.container;
      }
    }]);

    return InkAnnotationElement;
  }(AnnotationElement);

  var HighlightAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement12) {
    _inherits(HighlightAnnotationElement, _AnnotationElement12);

    function HighlightAnnotationElement(parameters) {
      _classCallCheck(this, HighlightAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(HighlightAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the highlight annotation's HTML element in the empty container.
     *
     * @public
     * @memberof HighlightAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(HighlightAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "highlightAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return HighlightAnnotationElement;
  }(AnnotationElement);

  var UnderlineAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement13) {
    _inherits(UnderlineAnnotationElement, _AnnotationElement13);

    function UnderlineAnnotationElement(parameters) {
      _classCallCheck(this, UnderlineAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(UnderlineAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the underline annotation's HTML element in the empty container.
     *
     * @public
     * @memberof UnderlineAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(UnderlineAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "underlineAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return UnderlineAnnotationElement;
  }(AnnotationElement);

  var SquigglyAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement14) {
    _inherits(SquigglyAnnotationElement, _AnnotationElement14);

    function SquigglyAnnotationElement(parameters) {
      _classCallCheck(this, SquigglyAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(SquigglyAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the squiggly annotation's HTML element in the empty container.
     *
     * @public
     * @memberof SquigglyAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(SquigglyAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "squigglyAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return SquigglyAnnotationElement;
  }(AnnotationElement);

  var StrikeOutAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement15) {
    _inherits(StrikeOutAnnotationElement, _AnnotationElement15);

    function StrikeOutAnnotationElement(parameters) {
      _classCallCheck(this, StrikeOutAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(StrikeOutAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the strikeout annotation's HTML element in the empty container.
     *
     * @public
     * @memberof StrikeOutAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(StrikeOutAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "strikeoutAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return StrikeOutAnnotationElement;
  }(AnnotationElement);

  var StampAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement16) {
    _inherits(StampAnnotationElement, _AnnotationElement16);

    function StampAnnotationElement(parameters) {
      _classCallCheck(this, StampAnnotationElement);

      var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
      return _possibleConstructorReturn(this, _getPrototypeOf(StampAnnotationElement).call(this, parameters, isRenderable,
      /* ignoreBorder = */
      true));
    }
    /**
     * Render the stamp annotation's HTML element in the empty container.
     *
     * @public
     * @memberof StampAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(StampAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "stampAnnotation";

        if (!this.data.hasPopup) {
          this._createPopup(this.container, null, this.data);
        }

        return this.container;
      }
    }]);

    return StampAnnotationElement;
  }(AnnotationElement);

  var FileAttachmentAnnotationElement =
  /*#__PURE__*/
  function (_AnnotationElement17) {
    _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);

    function FileAttachmentAnnotationElement(parameters) {
      var _this6;

      _classCallCheck(this, FileAttachmentAnnotationElement);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(FileAttachmentAnnotationElement).call(this, parameters,
      /* isRenderable = */
      true));
      var _this6$data$file = _this6.data.file,
          filename = _this6$data$file.filename,
          content = _this6$data$file.content;
      _this6.filename = getFilenameFromUrl(filename);
      _this6.content = content;

      if (_this6.linkService.eventBus) {
        _this6.linkService.eventBus.dispatch("fileattachmentannotation", {
          source: _assertThisInitialized(_this6),
          id: stringToPDFString(filename),
          filename: filename,
          content: content
        });
      }

      return _this6;
    }
    /**
     * Render the file attachment annotation's HTML element in the empty
     * container.
     *
     * @public
     * @memberof FileAttachmentAnnotationElement
     * @returns {HTMLSectionElement}
     */


    _createClass(FileAttachmentAnnotationElement, [{
      key: "render",
      value: function render() {
        this.container.className = "fileAttachmentAnnotation";
        var trigger = document.createElement("div");
        trigger.style.height = this.container.style.height;
        trigger.style.width = this.container.style.width;
        trigger.addEventListener("dblclick", this._download.bind(this));

        if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
          this._createPopup(this.container, trigger, this.data);
        }

        this.container.appendChild(trigger);
        return this.container;
      }
      /**
       * Download the file attachment associated with this annotation.
       *
       * @private
       * @memberof FileAttachmentAnnotationElement
       */

    }, {
      key: "_download",
      value: function _download() {
        if (!this.downloadManager) {
          warn("Download cannot be started due to unavailable download manager");
          return;
        }

        this.downloadManager.downloadData(this.content, this.filename, "");
      }
    }]);

    return FileAttachmentAnnotationElement;
  }(AnnotationElement);
  /**
   * @typedef {Object} AnnotationLayerParameters
   * @property {PageViewport} viewport
   * @property {HTMLDivElement} div
   * @property {Array} annotations
   * @property {PDFPage} page
   * @property {IPDFLinkService} linkService
   * @property {DownloadManager} downloadManager
   * @property {string} [imageResourcesPath] - Path for image resources, mainly
   *   for annotation icons. Include trailing slash.
   * @property {boolean} renderInteractiveForms
   */


  var AnnotationLayer =
  /*#__PURE__*/
  function () {
    function AnnotationLayer() {
      _classCallCheck(this, AnnotationLayer);
    }

    _createClass(AnnotationLayer, null, [{
      key: "render",

      /**
       * Render a new annotation layer with all annotation elements.
       *
       * @public
       * @param {AnnotationLayerParameters} parameters
       * @memberof AnnotationLayer
       */
      value: function render(parameters) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = parameters.annotations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var data = _step5.value;

            if (!data) {
              continue;
            }

            var element = AnnotationElementFactory.create({
              data: data,
              layer: parameters.div,
              page: parameters.page,
              viewport: parameters.viewport,
              linkService: parameters.linkService,
              downloadManager: parameters.downloadManager,
              imageResourcesPath: parameters.imageResourcesPath || "",
              renderInteractiveForms: parameters.renderInteractiveForms || false,
              svgFactory: new DOMSVGFactory()
            });

            if (element.isRenderable) {
              parameters.div.appendChild(element.render());
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
      /**
       * Update the annotation elements on existing annotation layer.
       *
       * @public
       * @param {AnnotationLayerParameters} parameters
       * @memberof AnnotationLayer
       */

    }, {
      key: "update",
      value: function update(parameters) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = parameters.annotations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var data = _step6.value;
            var element = parameters.div.querySelector("[data-annotation-id=\"".concat(data.id, "\"]"));

            if (element) {
              element.style.transform = "matrix(".concat(parameters.viewport.transform.join(","), ")");
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        parameters.div.removeAttribute("hidden");
      }
    }]);

    return AnnotationLayer;
  }();

  exports.SVGGraphics = function SVGGraphics() {
    throw new Error("Not implemented: SVGGraphics");
  };

  if (typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")) {
    // eslint-disable-next-line no-inner-declarations
    var opListToTree = function opListToTree(opList) {
      var opTree = [];
      var tmp = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = opList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var opListElement = _step.value;

          if (opListElement.fn === "save") {
            opTree.push({
              fnId: 92,
              fn: "group",
              items: []
            });
            tmp.push(opTree);
            opTree = opTree[opTree.length - 1].items;
            continue;
          }

          if (opListElement.fn === "restore") {
            opTree = tmp.pop();
          } else {
            opTree.push(opListElement);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return opTree;
    };
    /**
     * Format a float number as a string.
     *
     * @param value {number} - The float number to format.
     * @returns {string}
     */
    // eslint-disable-next-line no-inner-declarations


    var pf = function pf(value) {
      if (Number.isInteger(value)) {
        return value.toString();
      }

      var s = value.toFixed(10);
      var i = s.length - 1;

      if (s[i] !== "0") {
        return s;
      } // Remove trailing zeros.


      do {
        i--;
      } while (s[i] === "0");

      return s.substring(0, s[i] === "." ? i : i + 1);
    };
    /**
     * Format a transform matrix as a string. The standard rotation, scale and
     * translation matrices are replaced by their shorter forms, and for
     * identity matrices an empty string is returned to save memory.
     *
     * @param m {Array} - The transform matrix to format.
     * @returns {string}
     */
    // eslint-disable-next-line no-inner-declarations


    var pm = function pm(m) {
      if (m[4] === 0 && m[5] === 0) {
        if (m[1] === 0 && m[2] === 0) {
          if (m[0] === 1 && m[3] === 1) {
            return "";
          }

          return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
        }

        if (m[0] === m[3] && m[1] === -m[2]) {
          var a = Math.acos(m[0]) * 180 / Math.PI;
          return "rotate(".concat(pf(a), ")");
        }
      } else {
        if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
          return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
        }
      }

      return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
    }; // The counts below are relevant for all pages, so they have to be global
    // instead of being members of `SVGGraphics` (which is recreated for
    // each page).


    var SVG_DEFAULTS = {
      fontStyle: "normal",
      fontWeight: "normal",
      fillColor: "#000000"
    };
    var XML_NS = "http://www.w3.org/XML/1998/namespace";
    var XLINK_NS = "http://www.w3.org/1999/xlink";
    var LINE_CAP_STYLES = ["butt", "round", "square"];
    var LINE_JOIN_STYLES = ["miter", "round", "bevel"];

    var convertImgDataToPng = function () {
      var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
      var CHUNK_WRAPPER_SIZE = 12;
      var crcTable = new Int32Array(256);

      for (var i = 0; i < 256; i++) {
        var c = i;

        for (var h = 0; h < 8; h++) {
          if (c & 1) {
            c = 0xedb88320 ^ c >> 1 & 0x7fffffff;
          } else {
            c = c >> 1 & 0x7fffffff;
          }
        }

        crcTable[i] = c;
      }

      function crc32(data, start, end) {
        var crc = -1;

        for (var _i = start; _i < end; _i++) {
          var a = (crc ^ data[_i]) & 0xff;
          var b = crcTable[a];
          crc = crc >>> 8 ^ b;
        }

        return crc ^ -1;
      }

      function writePngChunk(type, body, data, offset) {
        var p = offset;
        var len = body.length;
        data[p] = len >> 24 & 0xff;
        data[p + 1] = len >> 16 & 0xff;
        data[p + 2] = len >> 8 & 0xff;
        data[p + 3] = len & 0xff;
        p += 4;
        data[p] = type.charCodeAt(0) & 0xff;
        data[p + 1] = type.charCodeAt(1) & 0xff;
        data[p + 2] = type.charCodeAt(2) & 0xff;
        data[p + 3] = type.charCodeAt(3) & 0xff;
        p += 4;
        data.set(body, p);
        p += body.length;
        var crc = crc32(data, offset + 4, p);
        data[p] = crc >> 24 & 0xff;
        data[p + 1] = crc >> 16 & 0xff;
        data[p + 2] = crc >> 8 & 0xff;
        data[p + 3] = crc & 0xff;
      }

      function adler32(data, start, end) {
        var a = 1;
        var b = 0;

        for (var _i2 = start; _i2 < end; ++_i2) {
          a = (a + (data[_i2] & 0xff)) % 65521;
          b = (b + a) % 65521;
        }

        return b << 16 | a;
      }
      /**
       * @param {Uint8Array} literals The input data.
       * @returns {Uint8Array} The DEFLATE-compressed data stream in zlib format.
       *   This is the required format for compressed streams in the PNG format:
       *   http://www.libpng.org/pub/png/spec/1.2/PNG-Compression.html
       */


      function deflateSync(literals) {
        if (!isNodeJS) {
          // zlib is certainly not available outside of Node.js. We can either use
          // the pako library for client-side DEFLATE compression, or use the
          // canvas API of the browser to obtain a more optimal PNG file.
          return deflateSyncUncompressed(literals);
        }

        try {
          // NOTE: This implementation is far from perfect, but already way better
          // than not applying any compression.
          //
          // A better algorithm will try to choose a good predictor/filter and
          // then choose a suitable zlib compression strategy (e.g. 3,Z_RLE).
          //
          // Node v0.11.12 zlib.deflateSync is introduced (and returns a Buffer).
          // Node v3.0.0   Buffer inherits from Uint8Array.
          // Node v8.0.0   zlib.deflateSync accepts Uint8Array as input.
          var input; // eslint-disable-next-line no-undef

          if (parseInt(process.versions.node) >= 8) {
            input = literals;
          } else {
            // eslint-disable-next-line no-undef
            input = new Buffer(literals);
          }

          var output = __non_webpack_require__("zlib").deflateSync(input, {
            level: 9
          });

          return output instanceof Uint8Array ? output : new Uint8Array(output);
        } catch (e) {
          warn("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
        }

        return deflateSyncUncompressed(literals);
      } // An implementation of DEFLATE with compression level 0 (Z_NO_COMPRESSION).


      function deflateSyncUncompressed(literals) {
        var len = literals.length;
        var maxBlockLength = 0xffff;
        var deflateBlocks = Math.ceil(len / maxBlockLength);
        var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
        var pi = 0;
        idat[pi++] = 0x78; // compression method and flags

        idat[pi++] = 0x9c; // flags

        var pos = 0;

        while (len > maxBlockLength) {
          // writing non-final DEFLATE blocks type 0 and length of 65535
          idat[pi++] = 0x00;
          idat[pi++] = 0xff;
          idat[pi++] = 0xff;
          idat[pi++] = 0x00;
          idat[pi++] = 0x00;
          idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
          pi += maxBlockLength;
          pos += maxBlockLength;
          len -= maxBlockLength;
        } // writing non-final DEFLATE blocks type 0


        idat[pi++] = 0x01;
        idat[pi++] = len & 0xff;
        idat[pi++] = len >> 8 & 0xff;
        idat[pi++] = ~len & 0xffff & 0xff;
        idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
        idat.set(literals.subarray(pos), pi);
        pi += literals.length - pos;
        var adler = adler32(literals, 0, literals.length); // checksum

        idat[pi++] = adler >> 24 & 0xff;
        idat[pi++] = adler >> 16 & 0xff;
        idat[pi++] = adler >> 8 & 0xff;
        idat[pi++] = adler & 0xff;
        return idat;
      }

      function encode(imgData, kind, forceDataSchema, isMask) {
        var width = imgData.width;
        var height = imgData.height;
        var bitDepth, colorType, lineSize;
        var bytes = imgData.data;

        switch (kind) {
          case ImageKind.GRAYSCALE_1BPP:
            colorType = 0;
            bitDepth = 1;
            lineSize = width + 7 >> 3;
            break;

          case ImageKind.RGB_24BPP:
            colorType = 2;
            bitDepth = 8;
            lineSize = width * 3;
            break;

          case ImageKind.RGBA_32BPP:
            colorType = 6;
            bitDepth = 8;
            lineSize = width * 4;
            break;

          default:
            throw new Error("invalid format");
        } // prefix every row with predictor 0


        var literals = new Uint8Array((1 + lineSize) * height);
        var offsetLiterals = 0,
            offsetBytes = 0;

        for (var y = 0; y < height; ++y) {
          literals[offsetLiterals++] = 0; // no prediction

          literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
          offsetBytes += lineSize;
          offsetLiterals += lineSize;
        }

        if (kind === ImageKind.GRAYSCALE_1BPP && isMask) {
          // inverting for image masks
          offsetLiterals = 0;

          for (var _y = 0; _y < height; _y++) {
            offsetLiterals++; // skipping predictor

            for (var _i3 = 0; _i3 < lineSize; _i3++) {
              literals[offsetLiterals++] ^= 0xff;
            }
          }
        }

        var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, // bit depth
        colorType, // color type
        0x00, // compression method
        0x00, // filter method
        0x00 // interlace method
        ]);
        var idat = deflateSync(literals); // PNG consists of: header, IHDR+data, IDAT+data, and IEND.

        var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
        var data = new Uint8Array(pngLength);
        var offset = 0;
        data.set(PNG_HEADER, offset);
        offset += PNG_HEADER.length;
        writePngChunk("IHDR", ihdr, data, offset);
        offset += CHUNK_WRAPPER_SIZE + ihdr.length;
        writePngChunk("IDATA", idat, data, offset);
        offset += CHUNK_WRAPPER_SIZE + idat.length;
        writePngChunk("IEND", new Uint8Array(0), data, offset);
        return createObjectURL(data, "image/png", forceDataSchema);
      }

      return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
        var kind = imgData.kind === undefined ? ImageKind.GRAYSCALE_1BPP : imgData.kind;
        return encode(imgData, kind, forceDataSchema, isMask);
      };
    }();

    var SVGExtraState =
    /*#__PURE__*/
    function () {
      function SVGExtraState() {
        _classCallCheck(this, SVGExtraState);

        this.fontSizeScale = 1;
        this.fontWeight = SVG_DEFAULTS.fontWeight;
        this.fontSize = 0;
        this.textMatrix = IDENTITY_MATRIX;
        this.fontMatrix = FONT_IDENTITY_MATRIX;
        this.leading = 0;
        this.textRenderingMode = TextRenderingMode.FILL;
        this.textMatrixScale = 1; // Current point (in user coordinates)

        this.x = 0;
        this.y = 0; // Start of text line (in text coordinates)

        this.lineX = 0;
        this.lineY = 0; // Character and word spacing

        this.charSpacing = 0;
        this.wordSpacing = 0;
        this.textHScale = 1;
        this.textRise = 0; // Default foreground and background colors

        this.fillColor = SVG_DEFAULTS.fillColor;
        this.strokeColor = "#000000";
        this.fillAlpha = 1;
        this.strokeAlpha = 1;
        this.lineWidth = 1;
        this.lineJoin = "";
        this.lineCap = "";
        this.miterLimit = 0;
        this.dashArray = [];
        this.dashPhase = 0;
        this.dependencies = []; // Clipping

        this.activeClipUrl = null;
        this.clipGroup = null;
        this.maskId = "";
      }

      _createClass(SVGExtraState, [{
        key: "clone",
        value: function clone() {
          return Object.create(this);
        }
      }, {
        key: "setCurrentPoint",
        value: function setCurrentPoint(x, y) {
          this.x = x;
          this.y = y;
        }
      }]);

      return SVGExtraState;
    }();

    var clipCount = 0;
    var maskCount = 0;
    var shadingCount = 0;

    exports.SVGGraphics =
    /*#__PURE__*/
    function () {
      function SVGGraphics(commonObjs, objs, forceDataSchema) {
        _classCallCheck(this, SVGGraphics);

        this.svgFactory = new DOMSVGFactory();
        this.current = new SVGExtraState();
        this.transformMatrix = IDENTITY_MATRIX; // Graphics state matrix

        this.transformStack = [];
        this.extraStack = [];
        this.commonObjs = commonObjs;
        this.objs = objs;
        this.pendingClip = null;
        this.pendingEOFill = false;
        this.embedFonts = false;
        this.embeddedFonts = Object.create(null);
        this.cssStyle = null;
        this.forceDataSchema = !!forceDataSchema; // In `src/shared/util.js` the operator names are mapped to IDs.
        // The list below represents the reverse of that, i.e., it maps IDs
        // to operator names.

        this._operatorIdMapping = [];

        for (var op in OPS) {
          this._operatorIdMapping[OPS[op]] = op;
        }
      }

      _createClass(SVGGraphics, [{
        key: "save",
        value: function save() {
          this.transformStack.push(this.transformMatrix);
          var old = this.current;
          this.extraStack.push(old);
          this.current = old.clone();
        }
      }, {
        key: "restore",
        value: function restore() {
          this.transformMatrix = this.transformStack.pop();
          this.current = this.extraStack.pop();
          this.pendingClip = null;
          this.tgrp = null;
        }
      }, {
        key: "group",
        value: function group(items) {
          this.save();
          this.executeOpTree(items);
          this.restore();
        }
      }, {
        key: "loadDependencies",
        value: function loadDependencies(operatorList) {
          var _this = this;

          var fnArray = operatorList.fnArray;
          var argsArray = operatorList.argsArray;

          for (var i = 0, ii = fnArray.length; i < ii; i++) {
            if (fnArray[i] !== OPS.dependency) {
              continue;
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop = function _loop() {
                var obj = _step2.value;
                var objsPool = obj.startsWith("g_") ? _this.commonObjs : _this.objs;
                var promise = new Promise(function (resolve) {
                  objsPool.get(obj, resolve);
                });

                _this.current.dependencies.push(promise);
              };

              for (var _iterator2 = argsArray[i][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                _loop();
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          return Promise.all(this.current.dependencies);
        }
      }, {
        key: "transform",
        value: function transform(a, b, c, d, e, f) {
          var transformMatrix = [a, b, c, d, e, f];
          this.transformMatrix = Util.transform(this.transformMatrix, transformMatrix);
          this.tgrp = null;
        }
      }, {
        key: "getSVG",
        value: function getSVG(operatorList, viewport) {
          var _this2 = this;

          this.viewport = viewport;

          var svgElement = this._initialize(viewport);

          return this.loadDependencies(operatorList).then(function () {
            _this2.transformMatrix = IDENTITY_MATRIX;

            _this2.executeOpTree(_this2.convertOpList(operatorList));

            return svgElement;
          });
        }
      }, {
        key: "convertOpList",
        value: function convertOpList(operatorList) {
          var operatorIdMapping = this._operatorIdMapping;
          var argsArray = operatorList.argsArray;
          var fnArray = operatorList.fnArray;
          var opList = [];

          for (var i = 0, ii = fnArray.length; i < ii; i++) {
            var fnId = fnArray[i];
            opList.push({
              fnId: fnId,
              fn: operatorIdMapping[fnId],
              args: argsArray[i]
            });
          }

          return opListToTree(opList);
        }
      }, {
        key: "executeOpTree",
        value: function executeOpTree(opTree) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = opTree[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var opTreeElement = _step3.value;
              var fn = opTreeElement.fn;
              var fnId = opTreeElement.fnId;
              var args = opTreeElement.args;

              switch (fnId | 0) {
                case OPS.beginText:
                  this.beginText();
                  break;

                case OPS.dependency:
                  // Handled in `loadDependencies`, so no warning should be shown.
                  break;

                case OPS.setLeading:
                  this.setLeading(args);
                  break;

                case OPS.setLeadingMoveText:
                  this.setLeadingMoveText(args[0], args[1]);
                  break;

                case OPS.setFont:
                  this.setFont(args);
                  break;

                case OPS.showText:
                  this.showText(args[0]);
                  break;

                case OPS.showSpacedText:
                  this.showText(args[0]);
                  break;

                case OPS.endText:
                  this.endText();
                  break;

                case OPS.moveText:
                  this.moveText(args[0], args[1]);
                  break;

                case OPS.setCharSpacing:
                  this.setCharSpacing(args[0]);
                  break;

                case OPS.setWordSpacing:
                  this.setWordSpacing(args[0]);
                  break;

                case OPS.setHScale:
                  this.setHScale(args[0]);
                  break;

                case OPS.setTextMatrix:
                  this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                  break;

                case OPS.setTextRise:
                  this.setTextRise(args[0]);
                  break;

                case OPS.setTextRenderingMode:
                  this.setTextRenderingMode(args[0]);
                  break;

                case OPS.setLineWidth:
                  this.setLineWidth(args[0]);
                  break;

                case OPS.setLineJoin:
                  this.setLineJoin(args[0]);
                  break;

                case OPS.setLineCap:
                  this.setLineCap(args[0]);
                  break;

                case OPS.setMiterLimit:
                  this.setMiterLimit(args[0]);
                  break;

                case OPS.setFillRGBColor:
                  this.setFillRGBColor(args[0], args[1], args[2]);
                  break;

                case OPS.setStrokeRGBColor:
                  this.setStrokeRGBColor(args[0], args[1], args[2]);
                  break;

                case OPS.setStrokeColorN:
                  this.setStrokeColorN(args);
                  break;

                case OPS.setFillColorN:
                  this.setFillColorN(args);
                  break;

                case OPS.shadingFill:
                  this.shadingFill(args[0]);
                  break;

                case OPS.setDash:
                  this.setDash(args[0], args[1]);
                  break;

                case OPS.setRenderingIntent:
                  this.setRenderingIntent(args[0]);
                  break;

                case OPS.setFlatness:
                  this.setFlatness(args[0]);
                  break;

                case OPS.setGState:
                  this.setGState(args[0]);
                  break;

                case OPS.fill:
                  this.fill();
                  break;

                case OPS.eoFill:
                  this.eoFill();
                  break;

                case OPS.stroke:
                  this.stroke();
                  break;

                case OPS.fillStroke:
                  this.fillStroke();
                  break;

                case OPS.eoFillStroke:
                  this.eoFillStroke();
                  break;

                case OPS.clip:
                  this.clip("nonzero");
                  break;

                case OPS.eoClip:
                  this.clip("evenodd");
                  break;

                case OPS.paintSolidColorImageMask:
                  this.paintSolidColorImageMask();
                  break;

                case OPS.paintJpegXObject:
                  this.paintJpegXObject(args[0], args[1], args[2]);
                  break;

                case OPS.paintImageXObject:
                  this.paintImageXObject(args[0]);
                  break;

                case OPS.paintInlineImageXObject:
                  this.paintInlineImageXObject(args[0]);
                  break;

                case OPS.paintImageMaskXObject:
                  this.paintImageMaskXObject(args[0]);
                  break;

                case OPS.paintFormXObjectBegin:
                  this.paintFormXObjectBegin(args[0], args[1]);
                  break;

                case OPS.paintFormXObjectEnd:
                  this.paintFormXObjectEnd();
                  break;

                case OPS.closePath:
                  this.closePath();
                  break;

                case OPS.closeStroke:
                  this.closeStroke();
                  break;

                case OPS.closeFillStroke:
                  this.closeFillStroke();
                  break;

                case OPS.closeEOFillStroke:
                  this.closeEOFillStroke();
                  break;

                case OPS.nextLine:
                  this.nextLine();
                  break;

                case OPS.transform:
                  this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                  break;

                case OPS.constructPath:
                  this.constructPath(args[0], args[1]);
                  break;

                case OPS.endPath:
                  this.endPath();
                  break;

                case 92:
                  this.group(opTreeElement.items);
                  break;

                default:
                  warn("Unimplemented operator ".concat(fn));
                  break;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }, {
        key: "setWordSpacing",
        value: function setWordSpacing(wordSpacing) {
          this.current.wordSpacing = wordSpacing;
        }
      }, {
        key: "setCharSpacing",
        value: function setCharSpacing(charSpacing) {
          this.current.charSpacing = charSpacing;
        }
      }, {
        key: "nextLine",
        value: function nextLine() {
          this.moveText(0, this.current.leading);
        }
      }, {
        key: "setTextMatrix",
        value: function setTextMatrix(a, b, c, d, e, f) {
          var current = this.current;
          current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
          current.textMatrixScale = Math.sqrt(a * a + b * b);
          current.x = current.lineX = 0;
          current.y = current.lineY = 0;
          current.xcoords = [];
          current.tspan = this.svgFactory.createElement("svg:tspan");
          current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
          current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
          current.tspan.setAttributeNS(null, "y", pf(-current.y));
          current.txtElement = this.svgFactory.createElement("svg:text");
          current.txtElement.appendChild(current.tspan);
        }
      }, {
        key: "beginText",
        value: function beginText() {
          var current = this.current;
          current.x = current.lineX = 0;
          current.y = current.lineY = 0;
          current.textMatrix = IDENTITY_MATRIX;
          current.lineMatrix = IDENTITY_MATRIX;
          current.textMatrixScale = 1;
          current.tspan = this.svgFactory.createElement("svg:tspan");
          current.txtElement = this.svgFactory.createElement("svg:text");
          current.txtgrp = this.svgFactory.createElement("svg:g");
          current.xcoords = [];
        }
      }, {
        key: "moveText",
        value: function moveText(x, y) {
          var current = this.current;
          current.x = current.lineX += x;
          current.y = current.lineY += y;
          current.xcoords = [];
          current.tspan = this.svgFactory.createElement("svg:tspan");
          current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
          current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
          current.tspan.setAttributeNS(null, "y", pf(-current.y));
        }
      }, {
        key: "showText",
        value: function showText(glyphs) {
          var current = this.current;
          var font = current.font;
          var fontSize = current.fontSize;

          if (fontSize === 0) {
            return;
          }

          var charSpacing = current.charSpacing;
          var wordSpacing = current.wordSpacing;
          var fontDirection = current.fontDirection;
          var textHScale = current.textHScale * fontDirection;
          var vertical = font.vertical;
          var widthAdvanceScale = fontSize * current.fontMatrix[0];
          var x = 0;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = glyphs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var glyph = _step4.value;

              if (glyph === null) {
                // Word break
                x += fontDirection * wordSpacing;
                continue;
              } else if (isNum(glyph)) {
                x += -glyph * fontSize * 0.001;
                continue;
              }

              var width = glyph.width;
              var character = glyph.fontChar;
              var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              var charWidth = width * widthAdvanceScale + spacing * fontDirection;

              if (!glyph.isInFont && !font.missingFile) {
                x += charWidth; // TODO: To assist with text selection, we should replace the missing
                // character with a space character if charWidth is not zero.
                // But we cannot just do "character = ' '", because the ' ' character
                // might actually map to a different glyph.

                continue;
              }

              current.xcoords.push(current.x + x * textHScale);
              current.tspan.textContent += character;
              x += charWidth;
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          if (vertical) {
            current.y -= x * textHScale;
          } else {
            current.x += x * textHScale;
          }

          current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
          current.tspan.setAttributeNS(null, "y", pf(-current.y));
          current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
          current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));

          if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
            current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
          }

          if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
            current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
          }

          var fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;

          if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            if (current.fillColor !== SVG_DEFAULTS.fillColor) {
              current.tspan.setAttributeNS(null, "fill", current.fillColor);
            }

            if (current.fillAlpha < 1) {
              current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
            }
          } else if (current.textRenderingMode === TextRenderingMode.ADD_TO_PATH) {
            // Workaround for Firefox: We must set fill="transparent" because
            // fill="none" would generate an empty clipping path.
            current.tspan.setAttributeNS(null, "fill", "transparent");
          } else {
            current.tspan.setAttributeNS(null, "fill", "none");
          }

          if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
            var lineWidthScale = 1 / (current.textMatrixScale || 1);

            this._setStrokeAttributes(current.tspan, lineWidthScale);
          } // Include the text rise in the text matrix since the `pm` function
          // creates the SVG element's `translate` entry (work on a copy to avoid
          // altering the original text matrix).


          var textMatrix = current.textMatrix;

          if (current.textRise !== 0) {
            textMatrix = textMatrix.slice();
            textMatrix[5] += current.textRise;
          }

          current.txtElement.setAttributeNS(null, "transform", "".concat(pm(textMatrix), " scale(1, -1)"));
          current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
          current.txtElement.appendChild(current.tspan);
          current.txtgrp.appendChild(current.txtElement);

          this._ensureTransformGroup().appendChild(current.txtElement);
        }
      }, {
        key: "setLeadingMoveText",
        value: function setLeadingMoveText(x, y) {
          this.setLeading(-y);
          this.moveText(x, y);
        }
      }, {
        key: "addFontStyle",
        value: function addFontStyle(fontObj) {
          if (!this.cssStyle) {
            this.cssStyle = this.svgFactory.createElement("svg:style");
            this.cssStyle.setAttributeNS(null, "type", "text/css");
            this.defs.appendChild(this.cssStyle);
          }

          var url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
          this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
        }
      }, {
        key: "setFont",
        value: function setFont(details) {
          var current = this.current;
          var fontObj = this.commonObjs.get(details[0]);
          var size = details[1];
          current.font = fontObj;

          if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
            this.addFontStyle(fontObj);
            this.embeddedFonts[fontObj.loadedName] = fontObj;
          }

          current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
          var bold = fontObj.black ? fontObj.bold ? "bolder" : "bold" : fontObj.bold ? "bold" : "normal";
          var italic = fontObj.italic ? "italic" : "normal";

          if (size < 0) {
            size = -size;
            current.fontDirection = -1;
          } else {
            current.fontDirection = 1;
          }

          current.fontSize = size;
          current.fontFamily = fontObj.loadedName;
          current.fontWeight = bold;
          current.fontStyle = italic;
          current.tspan = this.svgFactory.createElement("svg:tspan");
          current.tspan.setAttributeNS(null, "y", pf(-current.y));
          current.xcoords = [];
        }
      }, {
        key: "endText",
        value: function endText() {
          var current = this.current;

          if (current.textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement && current.txtElement.hasChildNodes()) {
            // If no glyphs are shown (i.e. no child nodes), no clipping occurs.
            current.element = current.txtElement;
            this.clip("nonzero");
            this.endPath();
          }
        } // Path properties

      }, {
        key: "setLineWidth",
        value: function setLineWidth(width) {
          if (width > 0) {
            this.current.lineWidth = width;
          }
        }
      }, {
        key: "setLineCap",
        value: function setLineCap(style) {
          this.current.lineCap = LINE_CAP_STYLES[style];
        }
      }, {
        key: "setLineJoin",
        value: function setLineJoin(style) {
          this.current.lineJoin = LINE_JOIN_STYLES[style];
        }
      }, {
        key: "setMiterLimit",
        value: function setMiterLimit(limit) {
          this.current.miterLimit = limit;
        }
      }, {
        key: "setStrokeAlpha",
        value: function setStrokeAlpha(strokeAlpha) {
          this.current.strokeAlpha = strokeAlpha;
        }
      }, {
        key: "setStrokeRGBColor",
        value: function setStrokeRGBColor(r, g, b) {
          this.current.strokeColor = Util.makeCssRgb(r, g, b);
        }
      }, {
        key: "setFillAlpha",
        value: function setFillAlpha(fillAlpha) {
          this.current.fillAlpha = fillAlpha;
        }
      }, {
        key: "setFillRGBColor",
        value: function setFillRGBColor(r, g, b) {
          this.current.fillColor = Util.makeCssRgb(r, g, b);
          this.current.tspan = this.svgFactory.createElement("svg:tspan");
          this.current.xcoords = [];
        }
      }, {
        key: "setStrokeColorN",
        value: function setStrokeColorN(args) {
          this.current.strokeColor = this._makeColorN_Pattern(args);
        }
      }, {
        key: "setFillColorN",
        value: function setFillColorN(args) {
          this.current.fillColor = this._makeColorN_Pattern(args);
        }
      }, {
        key: "shadingFill",
        value: function shadingFill(args) {
          var width = this.viewport.width;
          var height = this.viewport.height;
          var inv = Util.inverseTransform(this.transformMatrix);
          var bl = Util.applyTransform([0, 0], inv);
          var br = Util.applyTransform([0, height], inv);
          var ul = Util.applyTransform([width, 0], inv);
          var ur = Util.applyTransform([width, height], inv);
          var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
          var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
          var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
          var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
          var rect = this.svgFactory.createElement("svg:rect");
          rect.setAttributeNS(null, "x", x0);
          rect.setAttributeNS(null, "y", y0);
          rect.setAttributeNS(null, "width", x1 - x0);
          rect.setAttributeNS(null, "height", y1 - y0);
          rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));

          this._ensureTransformGroup().appendChild(rect);
        }
        /**
         * @private
         */

      }, {
        key: "_makeColorN_Pattern",
        value: function _makeColorN_Pattern(args) {
          if (args[0] === "TilingPattern") {
            return this._makeTilingPattern(args);
          }

          return this._makeShadingPattern(args);
        }
        /**
         * @private
         */

      }, {
        key: "_makeTilingPattern",
        value: function _makeTilingPattern(args) {
          var color = args[1];
          var operatorList = args[2];
          var matrix = args[3] || IDENTITY_MATRIX;

          var _args$ = _slicedToArray(args[4], 4),
              x0 = _args$[0],
              y0 = _args$[1],
              x1 = _args$[2],
              y1 = _args$[3];

          var xstep = args[5];
          var ystep = args[6];
          var paintType = args[7];
          var tilingId = "shading".concat(shadingCount++);

          var _Util$applyTransform = Util.applyTransform([x0, y0], matrix),
              _Util$applyTransform2 = _slicedToArray(_Util$applyTransform, 2),
              tx0 = _Util$applyTransform2[0],
              ty0 = _Util$applyTransform2[1];

          var _Util$applyTransform3 = Util.applyTransform([x1, y1], matrix),
              _Util$applyTransform4 = _slicedToArray(_Util$applyTransform3, 2),
              tx1 = _Util$applyTransform4[0],
              ty1 = _Util$applyTransform4[1];

          var _Util$singularValueDe = Util.singularValueDecompose2dScale(matrix),
              _Util$singularValueDe2 = _slicedToArray(_Util$singularValueDe, 2),
              xscale = _Util$singularValueDe2[0],
              yscale = _Util$singularValueDe2[1];

          var txstep = xstep * xscale;
          var tystep = ystep * yscale;
          var tiling = this.svgFactory.createElement("svg:pattern");
          tiling.setAttributeNS(null, "id", tilingId);
          tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
          tiling.setAttributeNS(null, "width", txstep);
          tiling.setAttributeNS(null, "height", tystep);
          tiling.setAttributeNS(null, "x", "".concat(tx0));
          tiling.setAttributeNS(null, "y", "".concat(ty0)); // Save current state.

          var svg = this.svg;
          var transformMatrix = this.transformMatrix;
          var fillColor = this.current.fillColor;
          var strokeColor = this.current.strokeColor;
          var bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
          this.svg = bbox;
          this.transformMatrix = matrix;

          if (paintType === 2) {
            var cssColor = Util.makeCssRgb.apply(Util, _toConsumableArray(color));
            this.current.fillColor = cssColor;
            this.current.strokeColor = cssColor;
          }

          this.executeOpTree(this.convertOpList(operatorList)); // Restore saved state.

          this.svg = svg;
          this.transformMatrix = transformMatrix;
          this.current.fillColor = fillColor;
          this.current.strokeColor = strokeColor;
          tiling.appendChild(bbox.childNodes[0]);
          this.defs.appendChild(tiling);
          return "url(#".concat(tilingId, ")");
        }
        /**
         * @private
         */

      }, {
        key: "_makeShadingPattern",
        value: function _makeShadingPattern(args) {
          switch (args[0]) {
            case "RadialAxial":
              var shadingId = "shading".concat(shadingCount++);
              var colorStops = args[2];
              var gradient;

              switch (args[1]) {
                case "axial":
                  var point0 = args[3];
                  var point1 = args[4];
                  gradient = this.svgFactory.createElement("svg:linearGradient");
                  gradient.setAttributeNS(null, "id", shadingId);
                  gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                  gradient.setAttributeNS(null, "x1", point0[0]);
                  gradient.setAttributeNS(null, "y1", point0[1]);
                  gradient.setAttributeNS(null, "x2", point1[0]);
                  gradient.setAttributeNS(null, "y2", point1[1]);
                  break;

                case "radial":
                  var focalPoint = args[3];
                  var circlePoint = args[4];
                  var focalRadius = args[5];
                  var circleRadius = args[6];
                  gradient = this.svgFactory.createElement("svg:radialGradient");
                  gradient.setAttributeNS(null, "id", shadingId);
                  gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                  gradient.setAttributeNS(null, "cx", circlePoint[0]);
                  gradient.setAttributeNS(null, "cy", circlePoint[1]);
                  gradient.setAttributeNS(null, "r", circleRadius);
                  gradient.setAttributeNS(null, "fx", focalPoint[0]);
                  gradient.setAttributeNS(null, "fy", focalPoint[1]);
                  gradient.setAttributeNS(null, "fr", focalRadius);
                  break;

                default:
                  throw new Error("Unknown RadialAxial type: ".concat(args[1]));
              }

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = colorStops[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var colorStop = _step5.value;
                  var stop = this.svgFactory.createElement("svg:stop");
                  stop.setAttributeNS(null, "offset", colorStop[0]);
                  stop.setAttributeNS(null, "stop-color", colorStop[1]);
                  gradient.appendChild(stop);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }

              this.defs.appendChild(gradient);
              return "url(#".concat(shadingId, ")");

            case "Mesh":
              warn("Unimplemented pattern Mesh");
              return null;

            case "Dummy":
              return "hotpink";

            default:
              throw new Error("Unknown IR type: ".concat(args[0]));
          }
        }
      }, {
        key: "setDash",
        value: function setDash(dashArray, dashPhase) {
          this.current.dashArray = dashArray;
          this.current.dashPhase = dashPhase;
        }
      }, {
        key: "constructPath",
        value: function constructPath(ops, args) {
          var current = this.current;
          var x = current.x,
              y = current.y;
          var d = [];
          var j = 0;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = ops[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var op = _step6.value;

              switch (op | 0) {
                case OPS.rectangle:
                  x = args[j++];
                  y = args[j++];
                  var width = args[j++];
                  var height = args[j++];
                  var xw = x + width;
                  var yh = y + height;
                  d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                  break;

                case OPS.moveTo:
                  x = args[j++];
                  y = args[j++];
                  d.push("M", pf(x), pf(y));
                  break;

                case OPS.lineTo:
                  x = args[j++];
                  y = args[j++];
                  d.push("L", pf(x), pf(y));
                  break;

                case OPS.curveTo:
                  x = args[j + 4];
                  y = args[j + 5];
                  d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                  j += 6;
                  break;

                case OPS.curveTo2:
                  x = args[j + 2];
                  y = args[j + 3];
                  d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                  j += 4;
                  break;

                case OPS.curveTo3:
                  x = args[j + 2];
                  y = args[j + 3];
                  d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                  j += 4;
                  break;

                case OPS.closePath:
                  d.push("Z");
                  break;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          d = d.join(" ");

          if (current.path && ops.length > 0 && ops[0] !== OPS.rectangle && ops[0] !== OPS.moveTo) {
            // If a path does not start with an OPS.rectangle or OPS.moveTo, it has
            // probably been divided into two OPS.constructPath operators by
            // OperatorList. Append the commands to the previous path element.
            d = current.path.getAttributeNS(null, "d") + d;
          } else {
            current.path = this.svgFactory.createElement("svg:path");

            this._ensureTransformGroup().appendChild(current.path);
          }

          current.path.setAttributeNS(null, "d", d);
          current.path.setAttributeNS(null, "fill", "none"); // Saving a reference in current.element so that it can be addressed
          // in 'fill' and 'stroke'

          current.element = current.path;
          current.setCurrentPoint(x, y);
        }
      }, {
        key: "endPath",
        value: function endPath() {
          var current = this.current; // Painting operators end a path.

          current.path = null;

          if (!this.pendingClip) {
            return;
          }

          if (!current.element) {
            this.pendingClip = null;
            return;
          } // Add the current path to a clipping path.


          var clipId = "clippath".concat(clipCount++);
          var clipPath = this.svgFactory.createElement("svg:clipPath");
          clipPath.setAttributeNS(null, "id", clipId);
          clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix)); // A deep clone is needed when text is used as a clipping path.

          var clipElement = current.element.cloneNode(true);

          if (this.pendingClip === "evenodd") {
            clipElement.setAttributeNS(null, "clip-rule", "evenodd");
          } else {
            clipElement.setAttributeNS(null, "clip-rule", "nonzero");
          }

          this.pendingClip = null;
          clipPath.appendChild(clipElement);
          this.defs.appendChild(clipPath);

          if (current.activeClipUrl) {
            // The previous clipping group content can go out of order -- resetting
            // cached clipGroups.
            current.clipGroup = null;
            this.extraStack.forEach(function (prev) {
              prev.clipGroup = null;
            }); // Intersect with the previous clipping path.

            clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
          }

          current.activeClipUrl = "url(#".concat(clipId, ")");
          this.tgrp = null;
        }
      }, {
        key: "clip",
        value: function clip(type) {
          this.pendingClip = type;
        }
      }, {
        key: "closePath",
        value: function closePath() {
          var current = this.current;

          if (current.path) {
            var d = "".concat(current.path.getAttributeNS(null, "d"), "Z");
            current.path.setAttributeNS(null, "d", d);
          }
        }
      }, {
        key: "setLeading",
        value: function setLeading(leading) {
          this.current.leading = -leading;
        }
      }, {
        key: "setTextRise",
        value: function setTextRise(textRise) {
          this.current.textRise = textRise;
        }
      }, {
        key: "setTextRenderingMode",
        value: function setTextRenderingMode(textRenderingMode) {
          this.current.textRenderingMode = textRenderingMode;
        }
      }, {
        key: "setHScale",
        value: function setHScale(scale) {
          this.current.textHScale = scale / 100;
        }
      }, {
        key: "setRenderingIntent",
        value: function setRenderingIntent(intent) {// This operation is ignored since we haven't found a use case for it yet.
        }
      }, {
        key: "setFlatness",
        value: function setFlatness(flatness) {// This operation is ignored since we haven't found a use case for it yet.
        }
      }, {
        key: "setGState",
        value: function setGState(states) {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = states[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                  key = _step7$value[0],
                  value = _step7$value[1];

              switch (key) {
                case "LW":
                  this.setLineWidth(value);
                  break;

                case "LC":
                  this.setLineCap(value);
                  break;

                case "LJ":
                  this.setLineJoin(value);
                  break;

                case "ML":
                  this.setMiterLimit(value);
                  break;

                case "D":
                  this.setDash(value[0], value[1]);
                  break;

                case "RI":
                  this.setRenderingIntent(value);
                  break;

                case "FL":
                  this.setFlatness(value);
                  break;

                case "Font":
                  this.setFont(value);
                  break;

                case "CA":
                  this.setStrokeAlpha(value);
                  break;

                case "ca":
                  this.setFillAlpha(value);
                  break;

                default:
                  warn("Unimplemented graphic state operator ".concat(key));
                  break;
              }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        }
      }, {
        key: "fill",
        value: function fill() {
          var current = this.current;

          if (current.element) {
            current.element.setAttributeNS(null, "fill", current.fillColor);
            current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
            this.endPath();
          }
        }
      }, {
        key: "stroke",
        value: function stroke() {
          var current = this.current;

          if (current.element) {
            this._setStrokeAttributes(current.element);

            current.element.setAttributeNS(null, "fill", "none");
            this.endPath();
          }
        }
        /**
         * @private
         */

      }, {
        key: "_setStrokeAttributes",
        value: function _setStrokeAttributes(element) {
          var lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var current = this.current;
          var dashArray = current.dashArray;

          if (lineWidthScale !== 1 && dashArray.length > 0) {
            dashArray = dashArray.map(function (value) {
              return lineWidthScale * value;
            });
          }

          element.setAttributeNS(null, "stroke", current.strokeColor);
          element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
          element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
          element.setAttributeNS(null, "stroke-linecap", current.lineCap);
          element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
          element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
          element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
          element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
        }
      }, {
        key: "eoFill",
        value: function eoFill() {
          if (this.current.element) {
            this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
          }

          this.fill();
        }
      }, {
        key: "fillStroke",
        value: function fillStroke() {
          // Order is important since stroke wants fill to be none.
          // First stroke, then if fill needed, it will be overwritten.
          this.stroke();
          this.fill();
        }
      }, {
        key: "eoFillStroke",
        value: function eoFillStroke() {
          if (this.current.element) {
            this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
          }

          this.fillStroke();
        }
      }, {
        key: "closeStroke",
        value: function closeStroke() {
          this.closePath();
          this.stroke();
        }
      }, {
        key: "closeFillStroke",
        value: function closeFillStroke() {
          this.closePath();
          this.fillStroke();
        }
      }, {
        key: "closeEOFillStroke",
        value: function closeEOFillStroke() {
          this.closePath();
          this.eoFillStroke();
        }
      }, {
        key: "paintSolidColorImageMask",
        value: function paintSolidColorImageMask() {
          var rect = this.svgFactory.createElement("svg:rect");
          rect.setAttributeNS(null, "x", "0");
          rect.setAttributeNS(null, "y", "0");
          rect.setAttributeNS(null, "width", "1px");
          rect.setAttributeNS(null, "height", "1px");
          rect.setAttributeNS(null, "fill", this.current.fillColor);

          this._ensureTransformGroup().appendChild(rect);
        }
      }, {
        key: "paintJpegXObject",
        value: function paintJpegXObject(objId, w, h) {
          var imgObj = this.objs.get(objId);
          var imgEl = this.svgFactory.createElement("svg:image");
          imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgObj.src);
          imgEl.setAttributeNS(null, "width", pf(w));
          imgEl.setAttributeNS(null, "height", pf(h));
          imgEl.setAttributeNS(null, "x", "0");
          imgEl.setAttributeNS(null, "y", pf(-h));
          imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / w), " ").concat(pf(-1 / h), ")"));

          this._ensureTransformGroup().appendChild(imgEl);
        }
      }, {
        key: "paintImageXObject",
        value: function paintImageXObject(objId) {
          var imgData = this.objs.get(objId);

          if (!imgData) {
            warn("Dependent image with object ID ".concat(objId, " is not ready yet"));
            return;
          }

          this.paintInlineImageXObject(imgData);
        }
      }, {
        key: "paintInlineImageXObject",
        value: function paintInlineImageXObject(imgData, mask) {
          var width = imgData.width;
          var height = imgData.height;
          var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
          var cliprect = this.svgFactory.createElement("svg:rect");
          cliprect.setAttributeNS(null, "x", "0");
          cliprect.setAttributeNS(null, "y", "0");
          cliprect.setAttributeNS(null, "width", pf(width));
          cliprect.setAttributeNS(null, "height", pf(height));
          this.current.element = cliprect;
          this.clip("nonzero");
          var imgEl = this.svgFactory.createElement("svg:image");
          imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
          imgEl.setAttributeNS(null, "x", "0");
          imgEl.setAttributeNS(null, "y", pf(-height));
          imgEl.setAttributeNS(null, "width", pf(width) + "px");
          imgEl.setAttributeNS(null, "height", pf(height) + "px");
          imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));

          if (mask) {
            mask.appendChild(imgEl);
          } else {
            this._ensureTransformGroup().appendChild(imgEl);
          }
        }
      }, {
        key: "paintImageMaskXObject",
        value: function paintImageMaskXObject(imgData) {
          var current = this.current;
          var width = imgData.width;
          var height = imgData.height;
          var fillColor = current.fillColor;
          current.maskId = "mask".concat(maskCount++);
          var mask = this.svgFactory.createElement("svg:mask");
          mask.setAttributeNS(null, "id", current.maskId);
          var rect = this.svgFactory.createElement("svg:rect");
          rect.setAttributeNS(null, "x", "0");
          rect.setAttributeNS(null, "y", "0");
          rect.setAttributeNS(null, "width", pf(width));
          rect.setAttributeNS(null, "height", pf(height));
          rect.setAttributeNS(null, "fill", fillColor);
          rect.setAttributeNS(null, "mask", "url(#".concat(current.maskId, ")"));
          this.defs.appendChild(mask);

          this._ensureTransformGroup().appendChild(rect);

          this.paintInlineImageXObject(imgData, mask);
        }
      }, {
        key: "paintFormXObjectBegin",
        value: function paintFormXObjectBegin(matrix, bbox) {
          if (Array.isArray(matrix) && matrix.length === 6) {
            this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
          }

          if (bbox) {
            var width = bbox[2] - bbox[0];
            var height = bbox[3] - bbox[1];
            var cliprect = this.svgFactory.createElement("svg:rect");
            cliprect.setAttributeNS(null, "x", bbox[0]);
            cliprect.setAttributeNS(null, "y", bbox[1]);
            cliprect.setAttributeNS(null, "width", pf(width));
            cliprect.setAttributeNS(null, "height", pf(height));
            this.current.element = cliprect;
            this.clip("nonzero");
            this.endPath();
          }
        }
      }, {
        key: "paintFormXObjectEnd",
        value: function paintFormXObjectEnd() {}
        /**
         * @private
         */

      }, {
        key: "_initialize",
        value: function _initialize(viewport) {
          var svg = this.svgFactory.create(viewport.width, viewport.height); // Create the definitions element.

          var definitions = this.svgFactory.createElement("svg:defs");
          svg.appendChild(definitions);
          this.defs = definitions; // Create the root group element, which acts a container for all other
          // groups and applies the viewport transform.

          var rootGroup = this.svgFactory.createElement("svg:g");
          rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
          svg.appendChild(rootGroup); // For the construction of the SVG image we are only interested in the
          // root group, so we expose it as the entry point of the SVG image for
          // the other code in this class.

          this.svg = rootGroup;
          return svg;
        }
        /**
         * @private
         */

      }, {
        key: "_ensureClipGroup",
        value: function _ensureClipGroup() {
          if (!this.current.clipGroup) {
            var clipGroup = this.svgFactory.createElement("svg:g");
            clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
            this.svg.appendChild(clipGroup);
            this.current.clipGroup = clipGroup;
          }

          return this.current.clipGroup;
        }
        /**
         * @private
         */

      }, {
        key: "_ensureTransformGroup",
        value: function _ensureTransformGroup() {
          if (!this.tgrp) {
            this.tgrp = this.svgFactory.createElement("svg:g");
            this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));

            if (this.current.activeClipUrl) {
              this._ensureClipGroup().appendChild(this.tgrp);
            } else {
              this.svg.appendChild(this.tgrp);
            }
          }

          return this.tgrp;
        }
      }]);

      return SVGGraphics;
    }();
  }

  /* Copyright 2012 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  setPDFNetworkStreamFactory(function (params) {
    if (isFetchSupported() && isValidFetchUrl(params.url)) {
      return new PDFFetchStream(params);
    }

    return new PDFNetworkStream(params);
  });

  exports.AnnotationLayer = AnnotationLayer;
  exports.CMapCompressionType = CMapCompressionType;
  exports.GlobalWorkerOptions = GlobalWorkerOptions;
  exports.InvalidPDFException = InvalidPDFException;
  exports.LinkTarget = LinkTarget;
  exports.LoopbackPort = LoopbackPort;
  exports.MissingPDFException = MissingPDFException;
  exports.NativeImageDecoding = NativeImageDecoding;
  exports.OPS = OPS;
  exports.PDFDataRangeTransport = PDFDataRangeTransport;
  exports.PDFDateString = PDFDateString;
  exports.PDFWorker = PDFWorker;
  exports.PasswordResponses = PasswordResponses;
  exports.RenderingCancelledException = RenderingCancelledException;
  exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
  exports.UnexpectedResponseException = UnexpectedResponseException;
  exports.Util = Util;
  exports.VerbosityLevel = VerbosityLevel;
  exports.addLinkAttributes = addLinkAttributes;
  exports.apiCompatibilityParams = apiCompatibilityParams;
  exports.build = build;
  exports.createObjectURL = createObjectURL;
  exports.createPromiseCapability = createPromiseCapability;
  exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
  exports.getDocument = getDocument;
  exports.getFilenameFromUrl = getFilenameFromUrl;
  exports.loadScript = loadScript;
  exports.removeNullCharacters = removeNullCharacters;
  exports.renderTextLayer = renderTextLayer;
  exports.shadow = shadow;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pdf.js.map
