(function () {/*
 *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
    var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.getGlobal = function (b) { return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.checkEs6ConformanceViaProxy = function () { try { var b = {}, e = Object.create(new $jscomp.global.Proxy(b, { get: function (f, a, g) { return f == b && "q" == a && g == e } })); return !0 === e.q } catch (f) { return !1 } }; $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
    $jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy(); $jscomp.arrayIteratorImpl = function (b) { var e = 0; return function () { return e < b.length ? { done: !1, value: b[e++] } : { done: !0 } } }; $jscomp.arrayIterator = function (b) { return { next: $jscomp.arrayIteratorImpl(b) } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, e, f) { b != Array.prototype && b != Object.prototype && (b[e] = f.value) }; $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.Symbol = function () { var b = 0; return function (e) { return $jscomp.SYMBOL_PREFIX + (e || "") + b++ } }();
    $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.iterator; b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
    $jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.asyncIterator; b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (b) { $jscomp.initSymbolIterator(); b = { next: b }; b[$jscomp.global.Symbol.iterator] = function () { return this }; return b };
    $jscomp.makeIterator = function (b) { var e = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; return e ? e.call(b) : $jscomp.arrayIterator(b) }; $jscomp.owns = function (b, e) { return Object.prototype.hasOwnProperty.call(b, e) }; $jscomp.polyfill = function (b, e, f, a) { if (e) { f = $jscomp.global; b = b.split("."); for (a = 0; a < b.length - 1; a++) { var g = b[a]; g in f || (f[g] = {}); f = f[g] } b = b[b.length - 1]; a = f[b]; e = e(a); e != a && null != e && $jscomp.defineProperty(f, b, { configurable: !0, writable: !0, value: e }) } };
    $jscomp.polyfill("WeakMap", function (b) {
        function e() { if (!b || !Object.seal) return !1; try { var d = Object.seal({}), a = Object.seal({}), c = new b([[d, 2], [a, 3]]); if (2 != c.get(d) || 3 != c.get(a)) return !1; c.delete(d); c.set(a, 4); return !c.has(d) && 4 == c.get(a) } catch (u) { return !1 } } function f() { } function a(d) { if (!$jscomp.owns(d, h)) { var c = new f; $jscomp.defineProperty(d, h, { value: c }) } } function g(d) { var c = Object[d]; c && (Object[d] = function (d) { if (d instanceof f) return d; a(d); return c(d) }) } if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
            if (b &&
                $jscomp.ES6_CONFORMANCE) return b
        } else if (e()) return b; var h = "$jscomp_hidden_" + Math.random(); g("freeze"); g("preventExtensions"); g("seal"); var k = 0, c = function (d) { this.id_ = (k += Math.random() + 1).toString(); if (d) { d = $jscomp.makeIterator(d); for (var c; !(c = d.next()).done;)c = c.value, this.set(c[0], c[1]) } }; c.prototype.set = function (d, c) { a(d); if (!$jscomp.owns(d, h)) throw Error("WeakMap key fail: " + d); d[h][this.id_] = c; return this }; c.prototype.get = function (d) { return $jscomp.owns(d, h) ? d[h][this.id_] : void 0 }; c.prototype.has =
            function (d) { return $jscomp.owns(d, h) && $jscomp.owns(d[h], this.id_) }; c.prototype.delete = function (d) { return $jscomp.owns(d, h) && $jscomp.owns(d[h], this.id_) ? delete d[h][this.id_] : !1 }; return c
    }, "es6", "es3"); $jscomp.MapEntry = function () { };
    $jscomp.polyfill("Map", function (b) {
        function e() { if ($jscomp.ASSUME_NO_NATIVE_MAP || !b || "function" != typeof b || !b.prototype.entries || "function" != typeof Object.seal) return !1; try { var d = Object.seal({ x: 4 }), c = new b($jscomp.makeIterator([[d, "s"]])); if ("s" != c.get(d) || 1 != c.size || c.get({ x: 4 }) || c.set({ x: 4 }, "t") != c || 2 != c.size) return !1; var a = c.entries(), g = a.next(); if (g.done || g.value[0] != d || "s" != g.value[1]) return !1; g = a.next(); return g.done || 4 != g.value[0].x || "t" != g.value[1] || !a.next().done ? !1 : !0 } catch (q) { return !1 } }
        if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) { if (b && $jscomp.ES6_CONFORMANCE) return b } else if (e()) return b; $jscomp.initSymbolIterator(); var f = new WeakMap, a = function (d) { this.data_ = {}; this.head_ = k(); this.size = 0; if (d) { d = $jscomp.makeIterator(d); for (var c; !(c = d.next()).done;)c = c.value, this.set(c[0], c[1]) } }; a.prototype.set = function (d, c) {
            d = 0 === d ? 0 : d; var a = g(this, d); a.list || (a.list = this.data_[a.id] = []); a.entry ? a.entry.value = c : (a.entry = {
                next: this.head_, previous: this.head_.previous, head: this.head_, key: d,
                value: c
            }, a.list.push(a.entry), this.head_.previous.next = a.entry, this.head_.previous = a.entry, this.size++); return this
        }; a.prototype.delete = function (d) { d = g(this, d); return d.entry && d.list ? (d.list.splice(d.index, 1), d.list.length || delete this.data_[d.id], d.entry.previous.next = d.entry.next, d.entry.next.previous = d.entry.previous, d.entry.head = null, this.size--, !0) : !1 }; a.prototype.clear = function () { this.data_ = {}; this.head_ = this.head_.previous = k(); this.size = 0 }; a.prototype.has = function (d) { return !!g(this, d).entry };
        a.prototype.get = function (d) { return (d = g(this, d).entry) && d.value }; a.prototype.entries = function () { return h(this, function (d) { return [d.key, d.value] }) }; a.prototype.keys = function () { return h(this, function (d) { return d.key }) }; a.prototype.values = function () { return h(this, function (d) { return d.value }) }; a.prototype.forEach = function (d, c) { for (var a = this.entries(), b; !(b = a.next()).done;)b = b.value, d.call(c, b[1], b[0], this) }; a.prototype[Symbol.iterator] = a.prototype.entries; var g = function (d, a) {
            var b = a && typeof a; "object" ==
                b || "function" == b ? f.has(a) ? b = f.get(a) : (b = "" + ++c, f.set(a, b)) : b = "p_" + a; var g = d.data_[b]; if (g && $jscomp.owns(d.data_, b)) for (d = 0; d < g.length; d++) { var e = g[d]; if (a !== a && e.key !== e.key || a === e.key) return { id: b, list: g, index: d, entry: e } } return { id: b, list: g, index: -1, entry: void 0 }
        }, h = function (d, c) { var a = d.head_; return $jscomp.iteratorPrototype(function () { if (a) { for (; a.head != d.head_;)a = a.previous; for (; a.next != a.head;)return a = a.next, { done: !1, value: c(a) }; a = null } return { done: !0, value: void 0 } }) }, k = function () {
            var d = {}; return d.previous =
                d.next = d.head = d
        }, c = 0; return a
    }, "es6", "es3"); $jscomp.FORCE_POLYFILL_PROMISE = !1;
    $jscomp.polyfill("Promise", function (b) {
        function e() { this.batch_ = null } function f(a) { return a instanceof g ? a : new g(function (c, d) { c(a) }) } if (b && !$jscomp.FORCE_POLYFILL_PROMISE) return b; e.prototype.asyncExecute = function (a) { null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_()); this.batch_.push(a); return this }; e.prototype.asyncExecuteBatch_ = function () { var a = this; this.asyncExecuteFunction(function () { a.executeBatch_() }) }; var a = $jscomp.global.setTimeout; e.prototype.asyncExecuteFunction = function (b) {
            a(b,
                0)
        }; e.prototype.executeBatch_ = function () { for (; this.batch_ && this.batch_.length;) { var a = this.batch_; this.batch_ = []; for (var c = 0; c < a.length; ++c) { var d = a[c]; a[c] = null; try { d() } catch (n) { this.asyncThrow_(n) } } } this.batch_ = null }; e.prototype.asyncThrow_ = function (a) { this.asyncExecuteFunction(function () { throw a; }) }; var g = function (a) { this.state_ = 0; this.result_ = void 0; this.onSettledCallbacks_ = []; var c = this.createResolveAndReject_(); try { a(c.resolve, c.reject) } catch (d) { c.reject(d) } }; g.prototype.createResolveAndReject_ =
            function () { function a(a) { return function (b) { d || (d = !0, a.call(c, b)) } } var c = this, d = !1; return { resolve: a(this.resolveTo_), reject: a(this.reject_) } }; g.prototype.resolveTo_ = function (a) { if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself")); else if (a instanceof g) this.settleSameAsPromise_(a); else { a: switch (typeof a) { case "object": var c = null != a; break a; case "function": c = !0; break a; default: c = !1 }c ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a) } }; g.prototype.resolveToNonPromiseObj_ = function (a) {
                var c =
                    void 0; try { c = a.then } catch (d) { this.reject_(d); return } "function" == typeof c ? this.settleSameAsThenable_(c, a) : this.fulfill_(a)
            }; g.prototype.reject_ = function (a) { this.settle_(2, a) }; g.prototype.fulfill_ = function (a) { this.settle_(1, a) }; g.prototype.settle_ = function (a, c) { if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + c + "): Promise already settled in state" + this.state_); this.state_ = a; this.result_ = c; this.executeOnSettledCallbacks_() }; g.prototype.executeOnSettledCallbacks_ = function () {
                if (null != this.onSettledCallbacks_) {
                    for (var a =
                        0; a < this.onSettledCallbacks_.length; ++a)h.asyncExecute(this.onSettledCallbacks_[a]); this.onSettledCallbacks_ = null
                }
            }; var h = new e; g.prototype.settleSameAsPromise_ = function (a) { var c = this.createResolveAndReject_(); a.callWhenSettled_(c.resolve, c.reject) }; g.prototype.settleSameAsThenable_ = function (a, c) { var d = this.createResolveAndReject_(); try { a.call(c, d.resolve, d.reject) } catch (n) { d.reject(n) } }; g.prototype.then = function (a, c) {
                function d(a, d) {
                    return "function" == typeof a ? function (d) { try { b(a(d)) } catch (p) { e(p) } } :
                        d
                } var b, e, f = new g(function (a, d) { b = a; e = d }); this.callWhenSettled_(d(a, b), d(c, e)); return f
            }; g.prototype.catch = function (a) { return this.then(void 0, a) }; g.prototype.callWhenSettled_ = function (a, c) { function d() { switch (b.state_) { case 1: a(b.result_); break; case 2: c(b.result_); break; default: throw Error("Unexpected state: " + b.state_); } } var b = this; null == this.onSettledCallbacks_ ? h.asyncExecute(d) : this.onSettledCallbacks_.push(d) }; g.resolve = f; g.reject = function (a) { return new g(function (c, d) { d(a) }) }; g.race = function (a) {
                return new g(function (c,
                    d) { for (var b = $jscomp.makeIterator(a), g = b.next(); !g.done; g = b.next())f(g.value).callWhenSettled_(c, d) })
            }; g.all = function (a) { var c = $jscomp.makeIterator(a), d = c.next(); return d.done ? f([]) : new g(function (a, b) { function g(d) { return function (c) { e[d] = c; h--; 0 == h && a(e) } } var e = [], h = 0; do e.push(void 0), h++, f(d.value).callWhenSettled_(g(e.length - 1), b), d = c.next(); while (!d.done) }) }; return g
    }, "es6", "es3");
    $jscomp.checkStringArgs = function (b, e, f) { if (null == b) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined"); if (e instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression"); return b + "" };
    $jscomp.polyfill("String.prototype.endsWith", function (b) { return b ? b : function (b, f) { var a = $jscomp.checkStringArgs(this, b, "endsWith"); b += ""; void 0 === f && (f = a.length); f = Math.max(0, Math.min(f | 0, a.length)); for (var g = b.length; 0 < g && 0 < f;)if (a[--f] != b[--g]) return !1; return 0 >= g } }, "es6", "es3"); $jscomp.underscoreProtoCanBeSet = function () { var b = { a: !0 }, e = {}; try { return e.__proto__ = b, e.a } catch (f) { } return !1 };
    $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (b, e) { b.__proto__ = e; if (b.__proto__ !== e) throw new TypeError(b + " is not extensible"); return b } : null; $jscomp.polyfill("Object.setPrototypeOf", function (b) { return b || $jscomp.setPrototypeOf }, "es6", "es5");
    $jscomp.assign = "function" == typeof Object.assign ? Object.assign : function (b, e) { for (var f = 1; f < arguments.length; f++) { var a = arguments[f]; if (a) for (var g in a) $jscomp.owns(a, g) && (b[g] = a[g]) } return b }; $jscomp.polyfill("Object.assign", function (b) { return b || $jscomp.assign }, "es6", "es3");
    (function (b) {
        function e(a) { if (f[a]) return f[a].exports; var g = f[a] = { i: a, l: !1, exports: {} }; b[a].call(g.exports, g, g.exports, e); g.l = !0; return g.exports } var f = {}; e.m = b; e.c = f; e.d = function (a, b, f) { e.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: f }) }; e.r = function (a) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }); Object.defineProperty(a, "__esModule", { value: !0 }) }; e.t = function (a, b) {
            b & 1 && (a = e(a)); if (b & 8 || b & 4 && "object" === typeof a && a && a.__esModule) return a;
            var g = Object.create(null); e.r(g); Object.defineProperty(g, "default", { enumerable: !0, value: a }); if (b & 2 && "string" != typeof a) for (var f in a) e.d(g, f, function (c) { return a[c] }.bind(null, f)); return g
        }; e.n = function (a) { var b = a && a.__esModule ? function () { return a["default"] } : function () { return a }; e.d(b, "a", b); return b }; e.o = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b) }; e.p = "/core/office/"; return e(e.s = 13)
    })([function (b, e, f) {
        f.d(e, "b", function () { return g }); f.d(e, "a", function () { return h }); var a = f(1),
            g = function (b, c) { Object(a.a)("disableLogs") || (c ? console.warn(b + ": " + c) : console.warn(b)) }, h = function (a, b) { }
    }, function (b, e, f) { f.d(e, "a", function () { return h }); f.d(e, "b", function () { return k }); var a = {}, g = { flattenedResources: !1, CANVAS_CACHE_SIZE: void 0, maxPagesBefore: void 0, maxPagesAhead: void 0, disableLogs: !1, wvsQueryParameters: {}, _trnDebugMode: !1, _logFiltersEnabled: null }, h = function (a) { return g[a] }, k = function (b, d) { var c; g[b] = d; null === (c = a[b]) || void 0 === c ? void 0 : c.forEach(function (a) { a(d) }) } }, function (b,
        e, f) {
        f.d(e, "a", function () { return w }); f.d(e, "b", function () { return z }); f.d(e, "c", function () { return A }); var a = f(7), g = f(0), h = f(4), k = f(3), c = "undefined" === typeof window ? self : window, d = c.importScripts, n = !1, v = function (a, b) { n || (d(c.basePath + "decode.min.js"), n = !0); a = self.BrotliDecode(Object(k.b)(a)); return b ? a : Object(k.a)(a) }, u = function (d, b) {
            return Object(a.a)(void 0, void 0, Promise, function () {
                var c; return Object(a.b)(this, function (a) {
                    switch (a.label) {
                        case 0: return n ? [3, 2] : [4, Object(h.a)(self.Core.getWorkerPath() +
                            "external/decode.min.js", "Failed to download decode.min.js", window)]; case 1: a.sent(), n = !0, a.label = 2; case 2: return c = self.BrotliDecode(Object(k.b)(d)), [2, b ? c : Object(k.a)(c)]
                    }
                })
            })
        }; (function () {
            function a() { this.remainingDataArrays = [] } a.prototype.processRaw = function (a) { return a }; a.prototype.processBrotli = function (a) { this.remainingDataArrays.push(a); return null }; a.prototype.GetNextChunk = function (a) {
                this.decodeFunction || (this.decodeFunction = 0 === a[0] && 97 === a[1] && 115 === a[2] && 109 === a[3] ? this.processRaw : this.processBrotli);
                return this.decodeFunction(a)
            }; a.prototype.End = function () { if (this.remainingDataArrays.length) { for (var a = this.arrays, d = 0, b = 0; b < a.length; ++b)d += a[b].length; d = new Uint8Array(d); var c = 0; for (b = 0; b < a.length; ++b) { var g = a[b]; d.set(g, c); c += g.length } return v(d, !0) } return null }; return a
        })(); var q = !1, r = function (a) {
            q || (d(c.basePath + "pako_inflate.min.js"), q = !0); var b = 10; if ("string" === typeof a) { if (a.charCodeAt(3) & 8) { for (; 0 !== a.charCodeAt(b); ++b); ++b } } else if (a[3] & 8) { for (; 0 !== a[b]; ++b); ++b } a = Object(k.b)(a); a = a.subarray(b,
                a.length - 8); return c.pako.inflate(a, { windowBits: -15 })
        }, l = function (a, b) { return b ? a : Object(k.a)(a) }, p = function (a) {
            var b = !a.shouldOutputArray, c = new XMLHttpRequest; c.open("GET", a.url, a.isAsync); var e = b && c.overrideMimeType; c.responseType = e ? "text" : "arraybuffer"; e && c.overrideMimeType("text/plain; charset=x-user-defined"); c.send(); var f = function () {
                var f = Date.now(); var h = e ? c.responseText : new Uint8Array(c.response); Object(g.a)("worker", "Result length is " + h.length); h.length < a.compressedMaximum ? (h = a.decompressFunction(h,
                    a.shouldOutputArray), Object(g.b)("There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this."), d && Object(g.a)("worker", "Decompressed length is " + h.length)) : b && (h = Object(k.a)(h)); d && Object(g.a)("worker", a.url + " Decompression took " + (Date.now() - f)); return h
            }; if (a.isAsync) var h = new Promise(function (b, d) {
                c.onload =
                    function () { 200 === this.status || 0 === this.status ? b(f()) : d("Download Failed " + a.url) }; c.onerror = function () { d("Network error occurred " + a.url) }
            }); else { if (200 === c.status || 0 === c.status) return f(); throw Error("Failed to load " + a.url); } return h
        }, w = function (a) { var b = a.lastIndexOf("/"); -1 === b && (b = 0); var c = a.slice(b).replace(".", ".br."); d || (c.endsWith(".js.mem") ? c = c.replace(".js.mem", ".mem") : c.endsWith(".js") && (c = c.concat(".mem"))); return a.slice(0, b) + c }, y = function (a, b) {
            var d = a.lastIndexOf("/"); -1 === d && (d = 0);
            var c = a.slice(d).replace(".", ".gz."); b.url = a.slice(0, d) + c; b.decompressFunction = r; return p(b)
        }, m = function (a, b) { b.url = w(a); b.decompressFunction = d ? v : u; return p(b) }, t = function (a, b) { a.endsWith(".js.mem") ? a = a.slice(0, -4) : a.endsWith(".mem") && (a = a.slice(0, -4) + ".js.mem"); b.url = a; b.decompressFunction = l; return p(b) }, x = function (a, b, d, c) { return a.catch(function (a) { Object(g.b)(a); return c(b, d) }) }, B = function (a, b, d) {
            var c; if (d.isAsync) { var e = b[0](a, d); for (c = 1; c < b.length; ++c)e = x(e, a, d, b[c]); return e } for (c = 0; c < b.length; ++c)try {
                return b[c](a,
                    d)
            } catch (I) { Object(g.b)(I.message) } throw Error("");
        }, A = function (a, b, c, d) { return B(a, [y, m, t], { compressedMaximum: b, isAsync: c, shouldOutputArray: d }) }, z = function (a, b, c, d) { return B(a, [m, y, t], { compressedMaximum: b, isAsync: c, shouldOutputArray: d }) }
    }, function (b, e, f) {
        f.d(e, "b", function () { return a }); f.d(e, "a", function () { return g }); var a = function (a) { if ("string" === typeof a) { for (var b = new Uint8Array(a.length), c = a.length, d = 0; d < c; d++)b[d] = a.charCodeAt(d); return b } return a }, g = function (a) {
            if ("string" !== typeof a) {
                for (var b =
                    "", c = 0, d = a.length, g; c < d;)g = a.subarray(c, c + 1024), c += 1024, b += String.fromCharCode.apply(null, g); return b
            } return a
        }
    }, function (b, e, f) { function a(a, b, c) { return new Promise(function (d) { if (!a) return d(); var e = c.document.createElement("script"); e.type = "text/javascript"; e.onload = function () { d() }; e.onerror = function () { b && Object(g.b)(b); d() }; e.src = a; c.document.getElementsByTagName("head")[0].appendChild(e) }) } f.d(e, "a", function () { return a }); var g = f(0) }, function (b, e, f) {
        function a(a, b, e) {
            function d(n) {
                f = f || Date.now();
                return n ? (Object(g.a)("load", "Try instantiateStreaming"), fetch(Object(h.a)(a)).then(function (a) { return WebAssembly.instantiateStreaming(a, b) }).catch(function (b) { Object(g.a)("load", "instantiateStreaming Failed " + a + " message " + b.message); return d(!1) })) : Object(h.b)(a, e, !0, !0).then(function (a) { c = Date.now(); Object(g.a)("load", "Request took " + (c - f) + " ms"); return WebAssembly.instantiate(a, b) })
            } var c, f; return d(!!WebAssembly.instantiateStreaming).then(function (a) {
                Object(g.a)("load", "WASM compilation took " +
                    (Date.now() - (c || f)) + " ms"); return a
            })
        } f.d(e, "a", function () { return a }); var g = f(0), h = f(2), k = f(4); f.d(e, "b", function () { return k.a })
    }, function (b, e) { e = function () { return this }(); try { e = e || (new Function("return this"))() } catch (f) { "object" === typeof window && (e = window) } b.exports = e }, function (b, e, f) {
        function a(a, b, c, d) {
            function e(a) { return a instanceof c ? a : new c(function (b) { b(a) }) } return new (c || (c = Promise))(function (c, g) {
                function f(a) { try { l(d.next(a)) } catch (w) { g(w) } } function h(a) { try { l(d["throw"](a)) } catch (w) { g(w) } }
                function l(a) { a.done ? c(a.value) : e(a.value).then(f, h) } l((d = d.apply(a, b || [])).next())
            })
        } function g(a, b) {
            function c(a) { return function (b) { return d([a, b]) } } function d(c) {
                if (e) throw new TypeError("Generator is already executing."); for (; g;)try {
                    if (e = 1, f && (h = c[0] & 2 ? f["return"] : c[0] ? f["throw"] || ((h = f["return"]) && h.call(f), 0) : f.next) && !(h = h.call(f, c[1])).done) return h; if (f = 0, h) c = [c[0] & 2, h.value]; switch (c[0]) {
                        case 0: case 1: h = c; break; case 4: return g.label++, { value: c[1], done: !1 }; case 5: g.label++; f = c[1]; c = [0];
                            continue; case 7: c = g.ops.pop(); g.trys.pop(); continue; default: if (!(h = g.trys, h = 0 < h.length && h[h.length - 1]) && (6 === c[0] || 2 === c[0])) { g = 0; continue } if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) g.label = c[1]; else if (6 === c[0] && g.label < h[1]) g.label = h[1], h = c; else if (h && g.label < h[2]) g.label = h[2], g.ops.push(c); else { h[2] && g.ops.pop(); g.trys.pop(); continue }
                    }c = b.call(a, g)
                } catch (p) { c = [6, p], f = 0 } finally { e = h = 0 } if (c[0] & 5) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }
            } var g = {
                label: 0, sent: function () { if (h[0] & 1) throw h[1]; return h[1] },
                trys: [], ops: []
            }, e, f, h, k; return k = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (k[Symbol.iterator] = function () { return this }), k
        } f.d(e, "a", function () { return a }); f.d(e, "b", function () { return g })
    }, function (b, e, f) {
        e.a = function () {
            ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function (a, b) {
                void 0 === a && (a = 0); void 0 === b && (b = this.byteLength); a = Math.floor(a); b = Math.floor(b); 0 > a && (a += this.byteLength); 0 > b && (b += this.byteLength); a = Math.min(Math.max(0, a), this.byteLength); b = Math.min(Math.max(0,
                    b), this.byteLength); if (0 >= b - a) return new ArrayBuffer(0); var g = new ArrayBuffer(b - a), e = new Uint8Array(g); a = new Uint8Array(this, a, b - a); e.set(a); return g
            })
        }
    }, function (b, e, f) { f.d(e, "a", function () { return a }); f(10); var a = function (a, b) { return function () { } } }, function (b, e, f) { e.a = function (a) { var b = {}; decodeURIComponent(a.slice(1)).split("&").forEach(function (a) { a = a.split("=", 2); b[a[0]] = a[1] }); return b } }, function (b, e, f) {
        f.d(e, "a", function () { return c }); var a = f(2), g = f(5), h = f(12), k = function () {
            function a(a) {
                var b =
                    this; this.promise = a.then(function (a) { b.response = a; b.status = 200 })
            } a.prototype.addEventListener = function (a, b) { this.promise.then(b) }; return a
        }(), c = function (b, c, e) {
            if (Object(h.a)() && !e) { self.Module.instantiateWasm = function (a, d) { return Object(g.a)(b + "Wasm.wasm", a, c["Wasm.wasm"]).then(function (a) { d(a.instance) }) }; if (c.disableObjectURLBlobs) { importScripts(b + "Wasm.js"); return } e = Object(a.b)(b + "Wasm.js.mem", c["Wasm.js.mem"], !1, !1) } else {
                if (c.disableObjectURLBlobs) {
                    importScripts((self.Module.asmjsPrefix ? self.Module.asmjsPrefix :
                        "") + b + ".js"); return
                } e = Object(a.b)((self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + b + ".js.mem", c[".js.mem"], !1); var d = Object(a.c)((self.Module.memoryInitializerPrefixURL ? self.Module.memoryInitializerPrefixURL : "") + b + ".mem", c[".mem"], !0, !0); self.Module.memoryInitializerRequest = new k(d)
            } e = new Blob([e], { type: "application/javascript" }); importScripts(URL.createObjectURL(e))
        }
    }, function (b, e, f) {
        f.d(e, "a", function () { return r }); var a = "undefined" === typeof window ? self : window; b = function () {
            var a = navigator.userAgent.toLowerCase();
            return (a = /(msie) ([\w.]+)/.exec(a) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(a)) ? parseInt(a[2], 10) : a
        }(); var g = function () { var b = a.navigator.userAgent.match(/OPR/), c = a.navigator.userAgent.match(/Maxthon/), d = a.navigator.userAgent.match(/Edge/); return a.navigator.userAgent.match(/Chrome\/(.*?) /) && !b && !c && !d }(); (function () { if (!g) return null; var b = a.navigator.userAgent.match(/Chrome\/([0-9]+)\./); return b ? parseInt(b[1], 10) : b })(); var h = !!navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Edg\/(.*?)/) &&
            a.navigator.userAgent.match(/Chrome\/(.*?) /); (function () { if (!h) return null; var b = a.navigator.userAgent.match(/Edg\/([0-9]+)\./); return b ? parseInt(b[1], 10) : b })(); e = /iPad|iPhone|iPod/.test(a.navigator.platform) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || /iPad|iPhone|iPod/.test(a.navigator.userAgent); var k = function () { var b = a.navigator.userAgent.match(/.*\/([0-9\.]+)\s(Safari|Mobile).*/i); return b ? parseFloat(b[1]) : b }(), c = /^((?!chrome|android).)*safari/i.test(a.navigator.userAgent) ||
                /^((?!chrome|android).)*$/.test(a.navigator.userAgent) && e, d = a.navigator.userAgent.match(/Firefox/); (function () { if (!d) return null; var b = a.navigator.userAgent.match(/Firefox\/([0-9]+)\./); return b ? parseInt(b[1], 10) : b })(); b || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent); navigator.userAgent.match(/(iPad|iPhone|iPod)/i); a.navigator.userAgent.indexOf("Android"); var n = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(a.navigator.userAgent), v = a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i) ?
                    14 <= parseInt(a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)[3], 10) : !1, u = !(!self.WebAssembly || !self.WebAssembly.validate), q = -1 < a.navigator.userAgent.indexOf("Edge/16") || -1 < a.navigator.userAgent.indexOf("MSAppHost"), r = function () { return u && !q && !(!v && (c && 14 > k || n)) }
    }, function (b, e, f) { b.exports = f(14) }, function (b, e, f) { f.r(e); f(15); f(20); b = f(8); f(21); Object(b.a)() }, function (b, e, f) {
        (function (a, b) {
            function e(a) {
                "@babel/helpers - typeof"; return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, e(a)
            } (function (a) {
                function c() { for (var a = 0; a < C.length; a++)C[a][0](C[a][1]); C = []; G = !1 } function d(a, b) { C.push([a, b]); G || (G = !0, H(c, 0)) } function g(a, b) { function c(a) { q(b, a) } function d(a) { l(b, a) } try { a(c, d) } catch (D) { d(D) } } function h(a) {
                    var b = a.owner, c = b.state_; b = b.data_; var d = a[c]; a = a.then; if ("function" === typeof d) { c = z; try { b = d(b) } catch (D) { l(a, D) } } k(a, b) || (c === z &&
                        q(a, b), c === E && l(a, b))
                } function k(a, b) { var c; try { if (a === b) throw new TypeError("A promises callback cannot return that same promise."); if (b && ("function" === typeof b || "object" === e(b))) { var d = b.then; if ("function" === typeof d) return d.call(b, function (d) { c || (c = !0, b !== d ? q(a, d) : r(a, d)) }, function (b) { c || (c = !0, l(a, b)) }), !0 } } catch (D) { return c || l(a, D), !0 } return !1 } function q(a, b) { a !== b && k(a, b) || r(a, b) } function r(a, b) { a.state_ === B && (a.state_ = A, a.data_ = b, d(w, a)) } function l(a, b) {
                    a.state_ === B && (a.state_ = A, a.data_ = b,
                        d(y, a))
                } function p(a) { var b = a.then_; a.then_ = void 0; for (a = 0; a < b.length; a++)h(b[a]) } function w(a) { a.state_ = z; p(a) } function y(a) { a.state_ = E; p(a) } function m(a) { if ("function" !== typeof a) throw new TypeError("Promise constructor takes a function argument"); if (!(this instanceof m)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."); this.then_ = []; g(a, this) } a.createPromiseCapability = function () {
                    var a = {}; a.promise = new m(function (b,
                        c) { a.resolve = b; a.reject = c }); return a
                }; var t = a.Promise, x = t && "resolve" in t && "reject" in t && "all" in t && "race" in t && function () { var a; new t(function (b) { a = b }); return "function" === typeof a }(); "undefined" !== typeof exports && exports ? (exports.Promise = x ? t : m, exports.Polyfill = m) : "function" === typeof define && f(19) ? define(function () { return x ? t : m }) : x || (a.Promise = m); var B = "pending", A = "sealed", z = "fulfilled", E = "rejected", F = function () { }, H = "undefined" !== typeof b ? b : setTimeout, C = [], G; m.prototype = {
                    constructor: m, state_: B, then_: null,
                    data_: void 0, then: function (a, b) { a = { owner: this, then: new this.constructor(F), fulfilled: a, rejected: b }; this.state_ === z || this.state_ === E ? d(h, a) : this.then_.push(a); return a.then }, "catch": function (a) { return this.then(null, a) }
                }; m.all = function (a) {
                    if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.all()."); return new this(function (b, c) {
                        function d(a) { g++; return function (c) { e[a] = c; --g || b(e) } } for (var e = [], g = 0, f = 0, h; f < a.length; f++)(h = a[f]) && "function" ===
                            typeof h.then ? h.then(d(f), c) : e[f] = h; g || b(e)
                    })
                }; m.race = function (a) { if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.race()."); return new this(function (b, c) { for (var d = 0, e; d < a.length; d++)(e = a[d]) && "function" === typeof e.then ? e.then(b, c) : b(e) }) }; m.resolve = function (a) { return a && "object" === e(a) && a.constructor === this ? a : new this(function (b) { b(a) }) }; m.reject = function (a) { return new this(function (b, c) { c(a) }) }
            })("undefined" !== typeof window ? window : "undefined" !==
                typeof a ? a : "undefined" !== typeof self ? self : void 0)
        }).call(this, f(6), f(16).setImmediate)
    }, function (b, e, f) {
        (function (a) {
            function b(a, b) { this._id = a; this._clearFn = b } var h = "undefined" !== typeof a && a || "undefined" !== typeof self && self || window, k = Function.prototype.apply; e.setTimeout = function () { return new b(k.call(setTimeout, h, arguments), clearTimeout) }; e.setInterval = function () { return new b(k.call(setInterval, h, arguments), clearInterval) }; e.clearTimeout = e.clearInterval = function (a) { a && a.close() }; b.prototype.unref =
                b.prototype.ref = function () { }; b.prototype.close = function () { this._clearFn.call(h, this._id) }; e.enroll = function (a, b) { clearTimeout(a._idleTimeoutId); a._idleTimeout = b }; e.unenroll = function (a) { clearTimeout(a._idleTimeoutId); a._idleTimeout = -1 }; e._unrefActive = e.active = function (a) { clearTimeout(a._idleTimeoutId); var b = a._idleTimeout; 0 <= b && (a._idleTimeoutId = setTimeout(function () { a._onTimeout && a._onTimeout() }, b)) }; f(17); e.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof a && a.setImmediate ||
                    this && this.setImmediate; e.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof a && a.clearImmediate || this && this.clearImmediate
        }).call(this, f(6))
    }, function (b, e, f) {
        (function (a, b) {
            (function (a, e) {
                function c(a) { delete w[a] } function d(a) { if (y) setTimeout(d, 0, a); else { var b = w[a]; if (b) { y = !0; try { var f = b.callback, g = b.args; switch (g.length) { case 0: f(); break; case 1: f(g[0]); break; case 2: f(g[0], g[1]); break; case 3: f(g[0], g[1], g[2]); break; default: f.apply(e, g) } } finally { c(a), y = !1 } } } } function f() {
                    t =
                        function (a) { b.nextTick(function () { d(a) }) }
                } function g() { if (a.postMessage && !a.importScripts) { var b = !0, c = a.onmessage; a.onmessage = function () { b = !1 }; a.postMessage("", "*"); a.onmessage = c; return b } } function h() { var b = "setImmediate$" + Math.random() + "$", c = function (c) { c.source === a && "string" === typeof c.data && 0 === c.data.indexOf(b) && d(+c.data.slice(b.length)) }; a.addEventListener ? a.addEventListener("message", c, !1) : a.attachEvent("onmessage", c); t = function (c) { a.postMessage(b + c, "*") } } function k() {
                    var a = new MessageChannel;
                    a.port1.onmessage = function (a) { d(a.data) }; t = function (b) { a.port2.postMessage(b) }
                } function r() { var a = m.documentElement; t = function (b) { var c = m.createElement("script"); c.onreadystatechange = function () { d(b); c.onreadystatechange = null; a.removeChild(c); c = null }; a.appendChild(c) } } function l() { t = function (a) { setTimeout(d, 0, a) } } if (!a.setImmediate) {
                    var p = 1, w = {}, y = !1, m = a.document, t, x = Object.getPrototypeOf && Object.getPrototypeOf(a); x = x && x.setTimeout ? x : a; "[object process]" === {}.toString.call(a.process) ? f() : g() ? h() : a.MessageChannel ?
                        k() : m && "onreadystatechange" in m.createElement("script") ? r() : l(); x.setImmediate = function (a) { "function" !== typeof a && (a = new Function("" + a)); for (var b = Array(arguments.length - 1), c = 0; c < b.length; c++)b[c] = arguments[c + 1]; w[p] = { callback: a, args: b }; t(p); return p++ }; x.clearImmediate = c
                }
            })("undefined" === typeof self ? "undefined" === typeof a ? this : a : self)
        }).call(this, f(6), f(18))
    }, function (b, e) {
        function f() { throw Error("setTimeout has not been defined"); } function a() { throw Error("clearTimeout has not been defined"); }
        function g(a) { if (v === setTimeout) return setTimeout(a, 0); if ((v === f || !v) && setTimeout) return v = setTimeout, setTimeout(a, 0); try { return v(a, 0) } catch (y) { try { return v.call(null, a, 0) } catch (m) { return v.call(this, a, 0) } } } function h(b) { if (u === clearTimeout) return clearTimeout(b); if ((u === a || !u) && clearTimeout) return u = clearTimeout, clearTimeout(b); try { return u(b) } catch (y) { try { return u.call(null, b) } catch (m) { return u.call(this, b) } } } function k() { r && l && (r = !1, l.length ? q = l.concat(q) : p = -1, q.length && c()) } function c() {
            if (!r) {
                var a =
                    g(k); r = !0; for (var b = q.length; b;) { l = q; for (q = []; ++p < b;)l && l[p].run(); p = -1; b = q.length } l = null; r = !1; h(a)
            }
        } function d(a, b) { this.fun = a; this.array = b } function n() { } b = b.exports = {}; try { var v = "function" === typeof setTimeout ? setTimeout : f } catch (w) { v = f } try { var u = "function" === typeof clearTimeout ? clearTimeout : a } catch (w) { u = a } var q = [], r = !1, l, p = -1; b.nextTick = function (a) { var b = Array(arguments.length - 1); if (1 < arguments.length) for (var e = 1; e < arguments.length; e++)b[e - 1] = arguments[e]; q.push(new d(a, b)); 1 !== q.length || r || g(c) };
        d.prototype.run = function () { this.fun.apply(null, this.array) }; b.title = "browser"; b.browser = !0; b.env = {}; b.argv = []; b.version = ""; b.versions = {}; b.on = n; b.addListener = n; b.once = n; b.off = n; b.removeListener = n; b.removeAllListeners = n; b.emit = n; b.prependListener = n; b.prependOnceListener = n; b.listeners = function (a) { return [] }; b.binding = function (a) { throw Error("process.binding is not supported"); }; b.cwd = function () { return "/" }; b.chdir = function (a) { throw Error("process.chdir is not supported"); }; b.umask = function () { return 0 }
    },
    function (b, e) { b.exports = {} }, function (b, e, f) { (function (a) { "undefined" === typeof a.crypto && (a.crypto = { getRandomValues: function (a) { for (var b = 0; b < a.length; b++)a[b] = 256 * Math.random() } }) })("undefined" === typeof window ? self : window) }, function (b, e, f) {
        function a(b) { "@babel/helpers - typeof"; return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, a(b) } var g =
            f(9), h = f(11), k = null; (function (b) {
                function c(a) { l || (l = []); l.push(a) } var e, f, u, q, r = !1, l = [], p = function () {
                    function c() { e = function () { } } function d(b) { var c = []; return { resource_array: c, msg: JSON.stringify(b.data, function (b, d) { if ("object" === a(d) && (b = null, d instanceof Uint8Array ? b = d : d instanceof ArrayBuffer && (b = new Uint8Array(d)), b)) { d = u(b.length); var e = q(d); e && (new Uint8Array(Module.HEAPU8.buffer, e, b.length)).set(b); c.push(d); return { __trn_res_id: d } } return d }) } } function m() { r = !0; postMessage({ type: "abort", data: { error: "Office worker has terminated unexpectedly" } }) }
                    function n(a) { if (!r) try { var b = d(a); f(b.msg) } catch (F) { m(F) } } b.basePath = "../"; var p = b.officeWorkerPath || ""; b.workerBasePath && (b.basePath = b.workerBasePath); b.basePath = b.externalPath ? b.externalPath : b.basePath + "external/"; importScripts("".concat(b.basePath, "Promise.js")); b.ContinueFunc = function (a) { e("ContinueFunc called"); setTimeout(function () { onmessage({ data: { action: "continue" } }) }, a) }; if (b.pdfWorkerPath) var v = b.pdfWorkerPath; if (b.officeAsmPath) var A = b.officeAsmPath; b.Module = {
                        memoryInitializerPrefixURL: v,
                        asmjsPrefix: A, onRuntimeInitialized: function () {
                            e || c(); var a = Date.now() - k; Object(g.a)("load", "time duration from start to ready: ".concat(JSON.stringify(a))); f = function (a) { if (null !== a && void 0 !== a && 0 !== a && !r) { var b = (a.length << 2) + 1, c = Module._malloc(b); 0 < stringToUTF8(a, c, b) && Module._TRN_OnMessage(c) } }; u = function (a) { return Module._TRN_CreateBufferResource(a) }; q = function (a) { return Module._TRN_GetResourcePointer(a) }; e("OnReady called"); onmessage = n; Module._TRN_InitWorker(); for (a = 0; a < l.length; ++a)onmessage(l[a]);
                            l = null
                        }, fetchSelf: function () { k = Date.now(); Object(h.a)("".concat(p, "WebOfficeWorker"), { "Wasm.wasm": 5E6, "Wasm.js.mem": 1E5, ".js.mem": 5E6, ".mem": 3E6 }, !!navigator.userAgent.match(/Edge/i) || b.wasmDisabled) }, onAbort: m, noExitRuntime: !0
                    }
                }; b.onmessage = function (a) { "init" === a.data.action && (b.wasmDisabled = !a.data.wasm, b.externalPath = a.data.externalPath, b.officeAsmPath = a.data.officeAsmPath, b.pdfWorkerPath = a.data.pdfWorkerPath, b.onmessage = c, p(), b.Module.fetchSelf()) }
            })("undefined" === typeof window ? self : window)
    }]);
}).call(this || window)
