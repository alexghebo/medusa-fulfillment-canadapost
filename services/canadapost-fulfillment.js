"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _medusaInterfaces = require("medusa-interfaces");
var _os = require("os");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var kebabCase = require('lodash.kebabcase');
var camelCase = require('lodash.camelcase');
var URL = require('url').Url;
var fetch = require('node-fetch');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({
  explicitArray: false
});
var parseXML = function parseXML(string, opts) {
  return new Promise(function (resolve, reject) {
    var cb = function cb(err, res) {
      return err ? reject(err) : resolve(res);
    };
    parser.parseString(string, opts || cb, cb);
  });
};
var get = function get(obj, path, def) {
  try {
    var val = path.replace(/(^[.[\]\s]+|[.[\]\s]+$)/g, '').split(/[.[\]]/).reduce(function (a, p) {
      return a[p];
    }, obj);
    return val === undefined ? def : val;
  } catch (err) {
    return def;
  }
};
var normalizeArray = function normalizeArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};
var CanadaPostError = /*#__PURE__*/function (_Error) {
  _inherits(CanadaPostError, _Error);
  var _super = _createSuper(CanadaPostError);
  function CanadaPostError(message, code) {
    var _this;
    _classCallCheck(this, CanadaPostError);
    var finalMessage = message;
    var finalCode = code;
    var originalMessages = message;
    if (Array.isArray(message)) {
      // Handle case where we passed an array of Canada Post messages
      finalMessage = message.map(function (m) {
        return "".concat(m.description, " - (code ").concat(m.code, ")");
      }).join('\n');
      finalCode = message.map(function (m) {
        return "".concat(m.code);
      }).join(',');
    } else if (message.description && message.code) {
      // Handle case where we passed a single Canada Post messaeg
      finalMessage = message.description;
      finalCode = message.code;
      originalMessages = [message];
    } else {
      // Handle case where we passed a string (and code?)
      originalMessages = [];
    }
    _this = _super.call(this, finalMessage);
    _this.code = finalCode;
    _this.originalMessages = originalMessages;
    Error.captureStackTrace(_assertThisInitialized(_this), CanadaPostError);
    return _this;
  }
  return _createClass(CanadaPostError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var CanadaPostClient = /*#__PURE__*/function () {
  function CanadaPostClient(userId, password, customer, lang, useTestEndpoint) {
    _classCallCheck(this, CanadaPostClient);
    if (useTestEndpoint === true) {
      this.endpoint = CanadaPostClient.ENDPOINT_DEV;
    } else if (useTestEndpoint === false) {
      this.endpoint = CanadaPostClient.ENDPOINT;
    } else {
      this.endpoint = process.env.NODE_ENV === 'production' ? CanadaPostClient.ENDPOINT : CanadaPostClient.ENDPOINT_DEV;
    }
    this.auth = Buffer.from("".concat(userId, ":").concat(password), 'utf8').toString('base64');
    this.customer = customer;
    this.lang = lang || 'en-CA';
  }
  _createClass(CanadaPostClient, [{
    key: "_request",
    value: function () {
      var _request2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(call, params, contentType) {
        var path,
          method,
          reqUrl,
          body,
          builder,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              path = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
              method = _args.length > 4 && _args[4] !== undefined ? _args[4] : 'GET';
              // Set-up the URL & Parameters
              reqUrl = new URL();
              reqUrl.hostname = this.endpoint;
              reqUrl.protocol = 'https:';
              if (path) {
                reqUrl.pathname = "/".concat(path, "/").concat(call);
              } else if (this.customer) {
                reqUrl.pathname = "/rs/".concat(this.customer, "/").concat(call);
              } else {
                reqUrl.pathname = "/".concat(call);
              }
              if (params && method === 'GET') {
                reqUrl.query = params;
              } else if (params) {
                builder = new xml2js.Builder();
                body = builder.buildObject(CanadaPostClient.normalizeObject(params, true));
              }
              return _context.abrupt("return", this._rawRequest(method, reqUrl.format(), contentType, body));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _request(_x, _x2, _x3) {
        return _request2.apply(this, arguments);
      }
      return _request;
    }()
  }, {
    key: "_rawRequest",
    value: function () {
      var _rawRequest2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(method, url, contentType, body) {
        var reqParams, rawResult, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Set-up the request
              reqParams = {
                method: method,
                body: body,
                headers: {
                  Accept: contentType,
                  'Content-Type': contentType,
                  Authorization: "Basic ".concat(this.auth),
                  'Accept-language': this.lang
                }
              }; // Perform the request
              _context2.next = 3;
              return fetch(url, reqParams);
            case 3:
              rawResult = _context2.sent;
              _context2.t0 = parseXML;
              _context2.next = 7;
              return rawResult.text();
            case 7:
              _context2.t1 = _context2.sent;
              _context2.next = 10;
              return (0, _context2.t0)(_context2.t1);
            case 10:
              result = _context2.sent;
              if (!(result && result.messages && result.messages.message)) {
                _context2.next = 13;
                break;
              }
              throw new CanadaPostError(result.messages.message);
            case 13:
              return _context2.abrupt("return", result);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function _rawRequest(_x4, _x5, _x6, _x7) {
        return _rawRequest2.apply(this, arguments);
      }
      return _rawRequest;
    }()
  }, {
    key: "discoverServices",
    value: function () {
      var _discoverServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(originPostalCode, destinationCountry, destinationPostalCode) {
        var request, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              request = {
                origpc: originPostalCode,
                country: destinationCountry
              };
              if (destinationPostalCode) {
                request.destpc = destinationPostalCode;
              }
              _context3.next = 4;
              return this._request('service', request, 'application/vnd.cpc.ship.rate-v3+xml', 'rs/ship');
            case 4:
              result = _context3.sent;
              CanadaPostClient.checkResultFormat(result, 'services.service', Array.isArray(result.services.service));
              return _context3.abrupt("return", get(result, 'services.service', []).map(function (r) {
                return {
                  serviceCode: r['service-code'],
                  serviceName: r['service-name']
                };
              }));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function discoverServices(_x8, _x9, _x10) {
        return _discoverServices.apply(this, arguments);
      }
      return discoverServices;
    }()
  }, {
    key: "getRates",
    value: function () {
      var _getRates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(scenario) {
        var mailingScenario, result, resultPrice;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              mailingScenario = CanadaPostClient.setNamespace(scenario, 'http://www.canadapost.ca/ws/ship/rate-v3');
              if (this.customer) {
                mailingScenario.customerNumber = this.customer;
              }
              _context4.next = 4;
              return this._request('price', {
                mailingScenario: mailingScenario
              }, 'application/vnd.cpc.ship.rate-v3+xml', 'rs/ship', 'POST');
            case 4:
              result = _context4.sent;
              result = CanadaPostClient.normalizeObject(result, false, true);
              CanadaPostClient.checkResultFormat(result, 'priceQuotes.priceQuote', Array.isArray(result.priceQuotes.priceQuote));
              result = result.priceQuotes.priceQuote;
              resultPrice = result[0].priceDetails.base * 100;
              return _context4.abrupt("return", resultPrice);
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getRates(_x11) {
        return _getRates.apply(this, arguments);
      }
      return getRates;
    }()
  }, {
    key: "createNonContractShipment",
    value: function () {
      var _createNonContractShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(shipment) {
        var nonContractShipment, result, normalizedResult, hasMultipleLabels;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              nonContractShipment = CanadaPostClient.setNamespace(shipment, 'http://www.canadapost.ca/ws/ncshipment-v4');
              _context5.next = 3;
              return this._request('ncshipment', {
                nonContractShipment: nonContractShipment
              }, 'application/vnd.cpc.ncshipment-v4+xml', null, 'POST');
            case 3:
              result = _context5.sent;
              result = CanadaPostClient.normalizeObject(result, false, false);
              CanadaPostClient.checkResultFormat(result, 'nonContractShipmentInfo');
              result = result.nonContractShipmentInfo;
              normalizedResult = {
                shipmentId: result.shipmentId,
                trackingPin: result.trackingPin,
                links: {}
              };
              if (result && result.links && result.links.link && result.links.link.length) {
                hasMultipleLabels = result.links.link.filter(function (l) {
                  return l.$.rel === 'label';
                }).length > 1;
                result.links.link.forEach(function (l) {
                  if (l.$.rel === 'label' && hasMultipleLabels) {
                    normalizedResult.links.label = normalizedResult.links.label || [];
                    normalizedResult.links.label[+l.$.index] = l.$.href;
                  } else {
                    normalizedResult.links[l.$.rel] = l.$.href;
                  }
                });
              }
              return _context5.abrupt("return", normalizedResult);
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createNonContractShipment(_x12) {
        return _createNonContractShipment.apply(this, arguments);
      }
      return createNonContractShipment;
    }()
  }, {
    key: "createContractShipment",
    value: function () {
      var _createContractShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(shipment) {
        var contractShipment, result, normalizedResult, hasMultipleLabels;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              contractShipment = CanadaPostClient.setNamespace(shipment, 'http://www.canadapost.ca/ws/shipment-v8');
              _context6.next = 3;
              return this._request("".concat(this.customer, "/shipment"), {
                shipment: contractShipment
              }, 'application/vnd.cpc.shipment-v8+xml', null, 'POST');
            case 3:
              result = _context6.sent;
              result = CanadaPostClient.normalizeObject(result, false, false);
              CanadaPostClient.checkResultFormat(result, 'shipmentInfo');
              result = result.shipmentInfo;
              normalizedResult = {
                shipmentId: result.shipmentId,
                trackingPin: result.trackingPin,
                links: {}
              };
              if (result && result.links && result.links.link && result.links.link.length) {
                hasMultipleLabels = result.links.link.filter(function (l) {
                  return l.$.rel === 'label';
                }).length > 1;
                result.links.link.forEach(function (l) {
                  if (l.$.rel === 'label' && hasMultipleLabels) {
                    normalizedResult.links.label = normalizedResult.links.label || [];
                    normalizedResult.links.label[+l.$.index] = l.$.href;
                  } else {
                    normalizedResult.links[l.$.rel] = l.$.href;
                  }
                });
              }
              return _context6.abrupt("return", normalizedResult);
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function createContractShipment(_x13) {
        return _createContractShipment.apply(this, arguments);
      }
      return createContractShipment;
    }()
  }, {
    key: "refundNonContractShipment",
    value: function () {
      var _refundNonContractShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, email) {
        var shipment, nonContractShipmentRefundRequest, builder, body, result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getShipment(id);
            case 2:
              shipment = _context7.sent;
              if (!(!shipment || !shipment.links.refund)) {
                _context7.next = 5;
                break;
              }
              throw new Error('That shipment was not found, or had no refund link.');
            case 5:
              nonContractShipmentRefundRequest = CanadaPostClient.setNamespace({
                email: email
              }, 'http://www.canadapost.ca/ws/ncshipment-v4');
              builder = new xml2js.Builder();
              body = builder.buildObject(CanadaPostClient.normalizeObject({
                nonContractShipmentRefundRequest: nonContractShipmentRefundRequest
              }, true));
              _context7.next = 10;
              return this._rawRequest('POST', shipment.links.refund, 'application/vnd.cpc.ncshipment-v4+xml', body);
            case 10:
              result = _context7.sent;
              result = CanadaPostClient.normalizeObject(result, false, false);
              CanadaPostClient.checkResultFormat(result, 'nonContractShipmentRefundRequestInfo');
              result = result.nonContractShipmentRefundRequestInfo;
              return _context7.abrupt("return", {
                serviceTicketId: result.serviceTicketId,
                serviceTicketDate: result.serviceTicketDate
              });
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function refundNonContractShipment(_x14, _x15) {
        return _refundNonContractShipment.apply(this, arguments);
      }
      return refundNonContractShipment;
    }()
  }, {
    key: "getTrackingSummary",
    value: function () {
      var _getTrackingSummary = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pin, type) {
        var request, result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              type = type || 'pin';
              if (!(['pin', 'ref', 'dnc'].indexOf(type) < 0)) {
                _context8.next = 3;
                break;
              }
              throw new Error('Unknown tracking format. Should be one of pin, ref, dnc');
            case 3:
              request = null;
              if (type === 'ref') {
                request = pin;
                pin = 'summary';
              } else {
                pin = "".concat(pin, "/summary");
              }
              _context8.next = 7;
              return this._request("".concat(type, "/").concat(pin), request, 'application/vnd.cpc.track+xml', 'vis/track');
            case 7:
              result = _context8.sent;
              result = CanadaPostClient.normalizeObject(result, false, true);
              CanadaPostClient.checkResultFormat(result, 'trackingSummary.pinSummary');
              result = result.trackingSummary.pinSummary;
              return _context8.abrupt("return", result);
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getTrackingSummary(_x16, _x17) {
        return _getTrackingSummary.apply(this, arguments);
      }
      return getTrackingSummary;
    }()
  }, {
    key: "getTrackingDetail",
    value: function () {
      var _getTrackingDetail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(pin, type) {
        var result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              type = type || 'pin';
              if (!(['pin', 'dnc'].indexOf(type) < 0)) {
                _context9.next = 3;
                break;
              }
              throw new Error('Unknown tracking format. Should be one of pin, dnc');
            case 3:
              _context9.next = 5;
              return this._request("".concat(type, "/").concat(pin, "/detail"), null, 'application/vnd.cpc.track+xml', 'vis/track');
            case 5:
              result = _context9.sent;
              result = CanadaPostClient.normalizeObject(result, false, true);
              CanadaPostClient.checkResultFormat(result, 'trackingDetail');
              result = result.trackingDetail;
              if (result.deliveryOptions && result.deliveryOptions.item && result.deliveryOptions.item.length) {
                result.deliveryOptions = result.deliveryOptions.item.reduce(function (a, i) {
                  if (i.deliveryOption && i.deliveryOptionDescription) {
                    a.push({
                      option: i.deliveryOption,
                      description: i.deliveryOptionDescription
                    });
                  }
                  return a;
                }, []);
              }
              if (result.significantEvents && result.significantEvents.occurrence && result.significantEvents.occurrence.length) {
                result.significantEvents = result.significantEvents.occurrence.reduce(function (a, i) {
                  a.push(i);
                  return a;
                }, []);
              }
              return _context9.abrupt("return", result);
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getTrackingDetail(_x18, _x19) {
        return _getTrackingDetail.apply(this, arguments);
      }
      return getTrackingDetail;
    }()
  }, {
    key: "getShipments",
    value: function () {
      var _getShipments = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(from, to) {
        var params, result, link, id;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              params = {
                from: CanadaPostClient.formatDate(new Date(from))
              };
              if (to) {
                params.to = CanadaPostClient.formatDate(new Date(to));
              }
              _context10.next = 4;
              return this._request('ncshipment', params, 'application/vnd.cpc.ncshipment-v4+xml');
            case 4:
              result = _context10.sent;
              result = CanadaPostClient.normalizeObject(result, false, false);
              CanadaPostClient.checkResultFormat(result, 'nonContractShipments');
              if (!Array.isArray(result.nonContractShipments.link)) {
                _context10.next = 11;
                break;
              }
              return _context10.abrupt("return", result.nonContractShipments.link.map(function (link) {
                var id = /ncshipment\/([0-9]+)/.exec(link.$.href);
                if (!id[1]) {
                  return null;
                }
                return {
                  shipmentId: id[1],
                  href: link.$.href,
                  mediaType: link.$['media-type'],
                  rel: link.$.rel
                };
              }).filter(function (i) {
                return i !== null;
              }));
            case 11:
              if (!(result.nonContractShipments.link && result.nonContractShipments.link.$)) {
                _context10.next = 17;
                break;
              }
              // Only one, so it becomes an object
              link = result.nonContractShipments.link;
              id = /ncshipment\/([0-9]+)/.exec(link.$.href);
              if (id[1]) {
                _context10.next = 16;
                break;
              }
              return _context10.abrupt("return", []);
            case 16:
              return _context10.abrupt("return", [{
                shipmentId: id[1],
                href: link.$.href,
                mediaType: link.$['media-type'],
                rel: link.$.rel
              }]);
            case 17:
              return _context10.abrupt("return", []);
            case 18:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getShipments(_x20, _x21) {
        return _getShipments.apply(this, arguments);
      }
      return getShipments;
    }()
  }, {
    key: "getShipment",
    value: function () {
      var _getShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
        var result, normalizedResult, hasMultipleLabels;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this._request("ncshipment/".concat(id), null, 'application/vnd.cpc.ncshipment-v4+xml');
            case 2:
              result = _context11.sent;
              result = CanadaPostClient.normalizeObject(result, false, false);
              CanadaPostClient.checkResultFormat(result, 'nonContractShipmentInfo');
              result = result.nonContractShipmentInfo;
              normalizedResult = {
                shipmentId: result.shipmentId,
                trackingPin: result.trackingPin,
                links: {}
              };
              if (result && result.links && result.links.link && result.links.link.length) {
                hasMultipleLabels = result.links.link.filter(function (l) {
                  return l.$.rel === 'label';
                }).length > 1;
                result.links.link.forEach(function (l) {
                  if (l.$.rel === 'label' && hasMultipleLabels) {
                    normalizedResult.links.label = normalizedResult.links.label || [];
                    normalizedResult.links.label[+l.$.index] = l.$.href;
                  } else {
                    normalizedResult.links[l.$.rel] = l.$.href;
                  }
                });
              }
              return _context11.abrupt("return", normalizedResult);
            case 9:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function getShipment(_x22) {
        return _getShipment.apply(this, arguments);
      }
      return getShipment;
    }()
  }, {
    key: "getShipmentDetails",
    value: function () {
      var _getShipmentDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id) {
        var result;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this._request("ncshipment/".concat(id, "/details"), null, 'application/vnd.cpc.ncshipment-v4+xml');
            case 2:
              result = _context12.sent;
              return _context12.abrupt("return", CanadaPostClient.normalizeObject(result, false, true));
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function getShipmentDetails(_x23) {
        return _getShipmentDetails.apply(this, arguments);
      }
      return getShipmentDetails;
    }()
  }], [{
    key: "normalizeObject",
    value: function normalizeObject(obj, kebab, ignoreAttrs) {
      if (!Array.isArray(obj) && _typeof(obj) !== 'object' || obj === null) {
        return obj;
      }
      if (Array.isArray(obj)) {
        return obj.map(function (o) {
          return CanadaPostClient.normalizeObject(o, kebab, ignoreAttrs);
        });
      } else {
        var out = {};
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
          if (key === '_' && (keys.length === 1 || keys.length === 2 && obj.$ && ignoreAttrs)) {
            out = obj._;
          } else if (key !== '$') {
            var newKey = kebab ? kebabCase(key) : camelCase(key);
            out[newKey] = CanadaPostClient.normalizeObject(obj[key], kebab, ignoreAttrs);
          } else if (!ignoreAttrs) {
            out[key] = obj[key];
          }
        });
        return out;
      }
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      var pad = function pad(num) {
        return num >= 10 ? "".concat(num) : "0".concat(num);
      };
      return "".concat(date.getFullYear()).concat(pad(date.getMonth() + 1)).concat(pad(date.getDate())).concat(pad(date.getHours())).concat(pad(date.getMinutes()));
    }
  }, {
    key: "setNamespace",
    value: function setNamespace(obj, xmlns) {
      return Object.assign({}, obj, {
        $: {
          xmlns: xmlns
        }
      });
    }
  }, {
    key: "checkResultFormat",
    value: function checkResultFormat(result, path, and) {
      if (get(result, path, undefined) === undefined || and === false) {
        throw new Error("Response was in an unknown format. Expected: ".concat(path, ", found ").concat(JSON.stringify(result, null, 4)));
      }
    }
  }]);
  return CanadaPostClient;
}();
var CanadaPostFulfillmentService = /*#__PURE__*/function (_FulfillmentService) {
  _inherits(CanadaPostFulfillmentService, _FulfillmentService);
  var _super2 = _createSuper(CanadaPostFulfillmentService);
  function CanadaPostFulfillmentService(_ref, options) {
    var _this2;
    _objectDestructuringEmpty(_ref);
    _classCallCheck(this, CanadaPostFulfillmentService);
    _this2 = _super2.call(this);
    _defineProperty(_assertThisInitialized(_this2), "options1", void 0);
    _defineProperty(_assertThisInitialized(_this2), "api_key_user", void 0);
    _defineProperty(_assertThisInitialized(_this2), "api_key_pass", void 0);
    _defineProperty(_assertThisInitialized(_this2), "customer_number", void 0);
    _defineProperty(_assertThisInitialized(_this2), "use_test_api", void 0);
    _this2.options1 = options;
    _this2.api_key_user = _this2.options1.api_key_user;
    _this2.api_key_pass = _this2.options1.api_key_pass;
    _this2.customer_number = _this2.options1.customer_number;
    _this2.use_test_api = _this2.options1.use_test_api;
    return _this2;
  }
  _createClass(CanadaPostFulfillmentService, [{
    key: "getFulfillmentOptions",
    value: function getFulfillmentOptions() {
      return [{
        id: "canadapost-fulfillment"
      }, {
        id: "canadapost-fulfillment-return",
        is_return: true
      }];
    }
  }, {
    key: "validateFulfillmentData",
    value: function validateFulfillmentData(_, data, cart) {
      return data;
    }
  }, {
    key: "validateOption",
    value: function validateOption(data) {
      return true;
    }
  }, {
    key: "canCalculate",
    value: function canCalculate() {
      return true;
    }
  }, {
    key: "calculatePrice",
    value: function calculatePrice(optionData, data, cart) {
      var canadaPostClient = new CanadaPostClient(this.api_key_user, this.api_key_pass, this.customer_number, 'en-CA', true);
      console.log(cart);
      var testObj4 = {
        parcelCharacteristics: {
          weight: '1'
        },
        originPostalCode: 'Y0B1N0',
        destination: {
          domestic: {
            postalCode: cart.shipping_address.postal_code
          }
        }
      };
      return canadaPostClient.getRates(testObj4);
    }
  }, {
    key: "createOrder",
    value: function createOrder() {
      // No data is being sent anywhere
      return Promise.resolve({});
    }
  }, {
    key: "createReturn",
    value: function createReturn() {
      // No data is being sent anywhere
      return Promise.resolve({});
    }
  }, {
    key: "createFulfillment",
    value: function createFulfillment() {
      // No data is being sent anywhere
      return Promise.resolve({});
    }
  }, {
    key: "cancelFulfillment",
    value: function cancelFulfillment() {
      return Promise.resolve({});
    }
  }]);
  return CanadaPostFulfillmentService;
}(_medusaInterfaces.FulfillmentService);
_defineProperty(CanadaPostFulfillmentService, "identifier", "canadapost");
var _default = CanadaPostFulfillmentService;
exports["default"] = _default;
CanadaPostClient.ENDPOINT = '';
CanadaPostClient.ENDPOINT_DEV = 'ct.soa-gw.canadapost.ca';
CanadaPostClient.CanadaPostError = CanadaPostError;