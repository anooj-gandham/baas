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
    var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.getGlobal = function (b) { return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.checkEs6ConformanceViaProxy = function () { try { var b = {}, e = Object.create(new $jscomp.global.Proxy(b, { get: function (g, a, h) { return g == b && "q" == a && h == e } })); return !0 === e.q } catch (g) { return !1 } }; $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
    $jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy(); $jscomp.arrayIteratorImpl = function (b) { var e = 0; return function () { return e < b.length ? { done: !1, value: b[e++] } : { done: !0 } } }; $jscomp.arrayIterator = function (b) { return { next: $jscomp.arrayIteratorImpl(b) } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, e, g) { b != Array.prototype && b != Object.prototype && (b[e] = g.value) }; $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.Symbol = function () { var b = 0; return function (e) { return $jscomp.SYMBOL_PREFIX + (e || "") + b++ } }();
    $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.iterator; b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
    $jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.asyncIterator; b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (b) { $jscomp.initSymbolIterator(); b = { next: b }; b[$jscomp.global.Symbol.iterator] = function () { return this }; return b };
    $jscomp.makeIterator = function (b) { var e = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; return e ? e.call(b) : $jscomp.arrayIterator(b) }; $jscomp.owns = function (b, e) { return Object.prototype.hasOwnProperty.call(b, e) }; $jscomp.polyfill = function (b, e, g, a) { if (e) { g = $jscomp.global; b = b.split("."); for (a = 0; a < b.length - 1; a++) { var h = b[a]; h in g || (g[h] = {}); g = g[h] } b = b[b.length - 1]; a = g[b]; e = e(a); e != a && null != e && $jscomp.defineProperty(g, b, { configurable: !0, writable: !0, value: e }) } };
    $jscomp.polyfill("WeakMap", function (b) {
        function e() { if (!b || !Object.seal) return !1; try { var c = Object.seal({}), d = Object.seal({}), a = new b([[c, 2], [d, 3]]); if (2 != a.get(c) || 3 != a.get(d)) return !1; a.delete(c); a.set(d, 4); return !a.has(c) && 4 == a.get(d) } catch (t) { return !1 } } function g() { } function a(c) { if (!$jscomp.owns(c, k)) { var d = new g; $jscomp.defineProperty(c, k, { value: d }) } } function h(c) { var d = Object[c]; d && (Object[c] = function (c) { if (c instanceof g) return c; a(c); return d(c) }) } if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
            if (b &&
                $jscomp.ES6_CONFORMANCE) return b
        } else if (e()) return b; var k = "$jscomp_hidden_" + Math.random(); h("freeze"); h("preventExtensions"); h("seal"); var f = 0, l = function (c) { this.id_ = (f += Math.random() + 1).toString(); if (c) { c = $jscomp.makeIterator(c); for (var d; !(d = c.next()).done;)d = d.value, this.set(d[0], d[1]) } }; l.prototype.set = function (c, d) { a(c); if (!$jscomp.owns(c, k)) throw Error("WeakMap key fail: " + c); c[k][this.id_] = d; return this }; l.prototype.get = function (c) { return $jscomp.owns(c, k) ? c[k][this.id_] : void 0 }; l.prototype.has =
            function (c) { return $jscomp.owns(c, k) && $jscomp.owns(c[k], this.id_) }; l.prototype.delete = function (c) { return $jscomp.owns(c, k) && $jscomp.owns(c[k], this.id_) ? delete c[k][this.id_] : !1 }; return l
    }, "es6", "es3"); $jscomp.MapEntry = function () { };
    $jscomp.polyfill("Map", function (b) {
        function e() { if ($jscomp.ASSUME_NO_NATIVE_MAP || !b || "function" != typeof b || !b.prototype.entries || "function" != typeof Object.seal) return !1; try { var c = Object.seal({ x: 4 }), d = new b($jscomp.makeIterator([[c, "s"]])); if ("s" != d.get(c) || 1 != d.size || d.get({ x: 4 }) || d.set({ x: 4 }, "t") != d || 2 != d.size) return !1; var a = d.entries(), f = a.next(); if (f.done || f.value[0] != c || "s" != f.value[1]) return !1; f = a.next(); return f.done || 4 != f.value[0].x || "t" != f.value[1] || !a.next().done ? !1 : !0 } catch (q) { return !1 } }
        if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) { if (b && $jscomp.ES6_CONFORMANCE) return b } else if (e()) return b; $jscomp.initSymbolIterator(); var g = new WeakMap, a = function (c) { this.data_ = {}; this.head_ = f(); this.size = 0; if (c) { c = $jscomp.makeIterator(c); for (var d; !(d = c.next()).done;)d = d.value, this.set(d[0], d[1]) } }; a.prototype.set = function (c, d) {
            c = 0 === c ? 0 : c; var a = h(this, c); a.list || (a.list = this.data_[a.id] = []); a.entry ? a.entry.value = d : (a.entry = {
                next: this.head_, previous: this.head_.previous, head: this.head_, key: c,
                value: d
            }, a.list.push(a.entry), this.head_.previous.next = a.entry, this.head_.previous = a.entry, this.size++); return this
        }; a.prototype.delete = function (c) { c = h(this, c); return c.entry && c.list ? (c.list.splice(c.index, 1), c.list.length || delete this.data_[c.id], c.entry.previous.next = c.entry.next, c.entry.next.previous = c.entry.previous, c.entry.head = null, this.size--, !0) : !1 }; a.prototype.clear = function () { this.data_ = {}; this.head_ = this.head_.previous = f(); this.size = 0 }; a.prototype.has = function (c) { return !!h(this, c).entry };
        a.prototype.get = function (c) { return (c = h(this, c).entry) && c.value }; a.prototype.entries = function () { return k(this, function (c) { return [c.key, c.value] }) }; a.prototype.keys = function () { return k(this, function (c) { return c.key }) }; a.prototype.values = function () { return k(this, function (c) { return c.value }) }; a.prototype.forEach = function (c, a) { for (var d = this.entries(), f; !(f = d.next()).done;)f = f.value, c.call(a, f[1], f[0], this) }; a.prototype[Symbol.iterator] = a.prototype.entries; var h = function (c, a) {
            var f = a && typeof a; "object" ==
                f || "function" == f ? g.has(a) ? f = g.get(a) : (f = "" + ++l, g.set(a, f)) : f = "p_" + a; var d = c.data_[f]; if (d && $jscomp.owns(c.data_, f)) for (c = 0; c < d.length; c++) { var b = d[c]; if (a !== a && b.key !== b.key || a === b.key) return { id: f, list: d, index: c, entry: b } } return { id: f, list: d, index: -1, entry: void 0 }
        }, k = function (c, a) { var f = c.head_; return $jscomp.iteratorPrototype(function () { if (f) { for (; f.head != c.head_;)f = f.previous; for (; f.next != f.head;)return f = f.next, { done: !1, value: a(f) }; f = null } return { done: !0, value: void 0 } }) }, f = function () {
            var c = {}; return c.previous =
                c.next = c.head = c
        }, l = 0; return a
    }, "es6", "es3"); $jscomp.FORCE_POLYFILL_PROMISE = !1;
    $jscomp.polyfill("Promise", function (b) {
        function e() { this.batch_ = null } function g(a) { return a instanceof h ? a : new h(function (f, c) { f(a) }) } if (b && !$jscomp.FORCE_POLYFILL_PROMISE) return b; e.prototype.asyncExecute = function (a) { null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_()); this.batch_.push(a); return this }; e.prototype.asyncExecuteBatch_ = function () { var a = this; this.asyncExecuteFunction(function () { a.executeBatch_() }) }; var a = $jscomp.global.setTimeout; e.prototype.asyncExecuteFunction = function (f) {
            a(f,
                0)
        }; e.prototype.executeBatch_ = function () { for (; this.batch_ && this.batch_.length;) { var a = this.batch_; this.batch_ = []; for (var b = 0; b < a.length; ++b) { var c = a[b]; a[b] = null; try { c() } catch (d) { this.asyncThrow_(d) } } } this.batch_ = null }; e.prototype.asyncThrow_ = function (a) { this.asyncExecuteFunction(function () { throw a; }) }; var h = function (a) { this.state_ = 0; this.result_ = void 0; this.onSettledCallbacks_ = []; var f = this.createResolveAndReject_(); try { a(f.resolve, f.reject) } catch (c) { f.reject(c) } }; h.prototype.createResolveAndReject_ =
            function () { function a(a) { return function (f) { c || (c = !0, a.call(b, f)) } } var b = this, c = !1; return { resolve: a(this.resolveTo_), reject: a(this.reject_) } }; h.prototype.resolveTo_ = function (a) { if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself")); else if (a instanceof h) this.settleSameAsPromise_(a); else { a: switch (typeof a) { case "object": var f = null != a; break a; case "function": f = !0; break a; default: f = !1 }f ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a) } }; h.prototype.resolveToNonPromiseObj_ = function (a) {
                var f =
                    void 0; try { f = a.then } catch (c) { this.reject_(c); return } "function" == typeof f ? this.settleSameAsThenable_(f, a) : this.fulfill_(a)
            }; h.prototype.reject_ = function (a) { this.settle_(2, a) }; h.prototype.fulfill_ = function (a) { this.settle_(1, a) }; h.prototype.settle_ = function (a, b) { if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.state_); this.state_ = a; this.result_ = b; this.executeOnSettledCallbacks_() }; h.prototype.executeOnSettledCallbacks_ = function () {
                if (null != this.onSettledCallbacks_) {
                    for (var a =
                        0; a < this.onSettledCallbacks_.length; ++a)k.asyncExecute(this.onSettledCallbacks_[a]); this.onSettledCallbacks_ = null
                }
            }; var k = new e; h.prototype.settleSameAsPromise_ = function (a) { var b = this.createResolveAndReject_(); a.callWhenSettled_(b.resolve, b.reject) }; h.prototype.settleSameAsThenable_ = function (a, b) { var c = this.createResolveAndReject_(); try { a.call(b, c.resolve, c.reject) } catch (d) { c.reject(d) } }; h.prototype.then = function (a, b) {
                function c(a, c) {
                    return "function" == typeof a ? function (c) { try { d(a(c)) } catch (n) { f(n) } } :
                        c
                } var d, f, e = new h(function (a, c) { d = a; f = c }); this.callWhenSettled_(c(a, d), c(b, f)); return e
            }; h.prototype.catch = function (a) { return this.then(void 0, a) }; h.prototype.callWhenSettled_ = function (a, b) { function c() { switch (d.state_) { case 1: a(d.result_); break; case 2: b(d.result_); break; default: throw Error("Unexpected state: " + d.state_); } } var d = this; null == this.onSettledCallbacks_ ? k.asyncExecute(c) : this.onSettledCallbacks_.push(c) }; h.resolve = g; h.reject = function (a) { return new h(function (b, c) { c(a) }) }; h.race = function (a) {
                return new h(function (b,
                    c) { for (var d = $jscomp.makeIterator(a), f = d.next(); !f.done; f = d.next())g(f.value).callWhenSettled_(b, c) })
            }; h.all = function (a) { var b = $jscomp.makeIterator(a), c = b.next(); return c.done ? g([]) : new h(function (a, f) { function d(c) { return function (b) { e[c] = b; h--; 0 == h && a(e) } } var e = [], h = 0; do e.push(void 0), h++, g(c.value).callWhenSettled_(d(e.length - 1), f), c = b.next(); while (!c.done) }) }; return h
    }, "es6", "es3");
    $jscomp.checkStringArgs = function (b, e, g) { if (null == b) throw new TypeError("The 'this' value for String.prototype." + g + " must not be null or undefined"); if (e instanceof RegExp) throw new TypeError("First argument to String.prototype." + g + " must not be a regular expression"); return b + "" };
    $jscomp.polyfill("String.prototype.endsWith", function (b) { return b ? b : function (b, g) { var a = $jscomp.checkStringArgs(this, b, "endsWith"); b += ""; void 0 === g && (g = a.length); g = Math.max(0, Math.min(g | 0, a.length)); for (var h = b.length; 0 < h && 0 < g;)if (a[--g] != b[--h]) return !1; return 0 >= h } }, "es6", "es3"); $jscomp.underscoreProtoCanBeSet = function () { var b = { a: !0 }, e = {}; try { return e.__proto__ = b, e.a } catch (g) { } return !1 };
    $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (b, e) { b.__proto__ = e; if (b.__proto__ !== e) throw new TypeError(b + " is not extensible"); return b } : null; $jscomp.polyfill("Object.setPrototypeOf", function (b) { return b || $jscomp.setPrototypeOf }, "es6", "es5");
    $jscomp.assign = "function" == typeof Object.assign ? Object.assign : function (b, e) { for (var g = 1; g < arguments.length; g++) { var a = arguments[g]; if (a) for (var h in a) $jscomp.owns(a, h) && (b[h] = a[h]) } return b }; $jscomp.polyfill("Object.assign", function (b) { return b || $jscomp.assign }, "es6", "es3");
    (function (b) {
        function e(a) { if (g[a]) return g[a].exports; var h = g[a] = { i: a, l: !1, exports: {} }; b[a].call(h.exports, h, h.exports, e); h.l = !0; return h.exports } var g = {}; e.m = b; e.c = g; e.d = function (a, b, g) { e.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: g }) }; e.r = function (a) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }); Object.defineProperty(a, "__esModule", { value: !0 }) }; e.t = function (a, b) {
            b & 1 && (a = e(a)); if (b & 8 || b & 4 && "object" === typeof a && a && a.__esModule) return a;
            var h = Object.create(null); e.r(h); Object.defineProperty(h, "default", { enumerable: !0, value: a }); if (b & 2 && "string" != typeof a) for (var f in a) e.d(h, f, function (b) { return a[b] }.bind(null, f)); return h
        }; e.n = function (a) { var b = a && a.__esModule ? function () { return a["default"] } : function () { return a }; e.d(b, "a", b); return b }; e.o = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b) }; e.p = "/core/officeEditor"; return e(e.s = 9)
    })([function (b, e, g) {
        g.d(e, "b", function () { return h }); g.d(e, "a", function () { return k }); var a =
            g(1), h = function (b, e) { Object(a.a)("disableLogs") || (e ? console.warn(b + ": " + e) : console.warn(b)) }, k = function (a, b) { }
    }, function (b, e, g) { g.d(e, "a", function () { return k }); g.d(e, "b", function () { return f }); var a = {}, h = { flattenedResources: !1, CANVAS_CACHE_SIZE: void 0, maxPagesBefore: void 0, maxPagesAhead: void 0, disableLogs: !1, wvsQueryParameters: {}, _trnDebugMode: !1, _logFiltersEnabled: null }, k = function (a) { return h[a] }, f = function (b, c) { var d; h[b] = c; null === (d = a[b]) || void 0 === d ? void 0 : d.forEach(function (a) { a(c) }) } }, function (b,
        e, g) {
        g.d(e, "a", function () { return p }); g.d(e, "b", function () { return z }); g.d(e, "c", function () { return A }); var a = g(6), h = g(0), k = g(4), f = g(3), l = "undefined" === typeof window ? self : window, c = l.importScripts, d = !1, r = function (a, b) { d || (c(l.basePath + "decode.min.js"), d = !0); a = self.BrotliDecode(Object(f.b)(a)); return b ? a : Object(f.a)(a) }, t = function (c, b) {
            return Object(a.a)(void 0, void 0, Promise, function () {
                var e; return Object(a.b)(this, function (a) {
                    switch (a.label) {
                        case 0: return d ? [3, 2] : [4, Object(k.a)(self.Core.getWorkerPath() +
                            "external/decode.min.js", "Failed to download decode.min.js", window)]; case 1: a.sent(), d = !0, a.label = 2; case 2: return e = self.BrotliDecode(Object(f.b)(c)), [2, b ? e : Object(f.a)(e)]
                    }
                })
            })
        }; (function () {
            function a() { this.remainingDataArrays = [] } a.prototype.processRaw = function (a) { return a }; a.prototype.processBrotli = function (a) { this.remainingDataArrays.push(a); return null }; a.prototype.GetNextChunk = function (a) {
                this.decodeFunction || (this.decodeFunction = 0 === a[0] && 97 === a[1] && 115 === a[2] && 109 === a[3] ? this.processRaw : this.processBrotli);
                return this.decodeFunction(a)
            }; a.prototype.End = function () { if (this.remainingDataArrays.length) { for (var a = this.arrays, c = 0, b = 0; b < a.length; ++b)c += a[b].length; c = new Uint8Array(c); var d = 0; for (b = 0; b < a.length; ++b) { var e = a[b]; c.set(e, d); d += e.length } return r(c, !0) } return null }; return a
        })(); var q = !1, u = function (a) {
            q || (c(l.basePath + "pako_inflate.min.js"), q = !0); var b = 10; if ("string" === typeof a) { if (a.charCodeAt(3) & 8) { for (; 0 !== a.charCodeAt(b); ++b); ++b } } else if (a[3] & 8) { for (; 0 !== a[b]; ++b); ++b } a = Object(f.b)(a); a = a.subarray(b,
                a.length - 8); return l.pako.inflate(a, { windowBits: -15 })
        }, m = function (a, c) { return c ? a : Object(f.a)(a) }, n = function (a) {
            var b = !a.shouldOutputArray, d = new XMLHttpRequest; d.open("GET", a.url, a.isAsync); var e = b && d.overrideMimeType; d.responseType = e ? "text" : "arraybuffer"; e && d.overrideMimeType("text/plain; charset=x-user-defined"); d.send(); var g = function () {
                var g = Date.now(); var m = e ? d.responseText : new Uint8Array(d.response); Object(h.a)("worker", "Result length is " + m.length); m.length < a.compressedMaximum ? (m = a.decompressFunction(m,
                    a.shouldOutputArray), Object(h.b)("There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this."), c && Object(h.a)("worker", "Decompressed length is " + m.length)) : b && (m = Object(f.a)(m)); c && Object(h.a)("worker", a.url + " Decompression took " + (Date.now() - g)); return m
            }; if (a.isAsync) var m = new Promise(function (b, c) {
                d.onload =
                    function () { 200 === this.status || 0 === this.status ? b(g()) : c("Download Failed " + a.url) }; d.onerror = function () { c("Network error occurred " + a.url) }
            }); else { if (200 === d.status || 0 === d.status) return g(); throw Error("Failed to load " + a.url); } return m
        }, p = function (a) { var b = a.lastIndexOf("/"); -1 === b && (b = 0); var d = a.slice(b).replace(".", ".br."); c || (d.endsWith(".js.mem") ? d = d.replace(".js.mem", ".mem") : d.endsWith(".js") && (d = d.concat(".mem"))); return a.slice(0, b) + d }, v = function (a, b) {
            var c = a.lastIndexOf("/"); -1 === c && (c = 0);
            var d = a.slice(c).replace(".", ".gz."); b.url = a.slice(0, c) + d; b.decompressFunction = u; return n(b)
        }, w = function (a, b) { b.url = p(a); b.decompressFunction = c ? r : t; return n(b) }, x = function (a, b) { a.endsWith(".js.mem") ? a = a.slice(0, -4) : a.endsWith(".mem") && (a = a.slice(0, -4) + ".js.mem"); b.url = a; b.decompressFunction = m; return n(b) }, C = function (a, b, c, d) { return a.catch(function (a) { Object(h.b)(a); return d(b, c) }) }, y = function (a, b, c) {
            var d; if (c.isAsync) { var e = b[0](a, c); for (d = 1; d < b.length; ++d)e = C(e, a, c, b[d]); return e } for (d = 0; d < b.length; ++d)try {
                return b[d](a,
                    c)
            } catch (B) { Object(h.b)(B.message) } throw Error("");
        }, A = function (a, b, c, d) { return y(a, [v, w, x], { compressedMaximum: b, isAsync: c, shouldOutputArray: d }) }, z = function (a, b, c, d) { return y(a, [w, v, x], { compressedMaximum: b, isAsync: c, shouldOutputArray: d }) }
    }, function (b, e, g) {
        g.d(e, "b", function () { return a }); g.d(e, "a", function () { return h }); var a = function (a) { if ("string" === typeof a) { for (var b = new Uint8Array(a.length), e = a.length, c = 0; c < e; c++)b[c] = a.charCodeAt(c); return b } return a }, h = function (a) {
            if ("string" !== typeof a) {
                for (var b =
                    "", e = 0, c = a.length, d; e < c;)d = a.subarray(e, e + 1024), e += 1024, b += String.fromCharCode.apply(null, d); return b
            } return a
        }
    }, function (b, e, g) { function a(a, b, e) { return new Promise(function (c) { if (!a) return c(); var d = e.document.createElement("script"); d.type = "text/javascript"; d.onload = function () { c() }; d.onerror = function () { b && Object(h.b)(b); c() }; d.src = a; e.document.getElementsByTagName("head")[0].appendChild(d) }) } g.d(e, "a", function () { return a }); var h = g(0) }, function (b, e, g) {
        function a(a, b, d) {
            function c(f) {
                g = g || Date.now();
                return f ? (Object(h.a)("load", "Try instantiateStreaming"), fetch(Object(k.a)(a)).then(function (a) { return WebAssembly.instantiateStreaming(a, b) }).catch(function (b) { Object(h.a)("load", "instantiateStreaming Failed " + a + " message " + b.message); return c(!1) })) : Object(k.b)(a, d, !0, !0).then(function (a) { e = Date.now(); Object(h.a)("load", "Request took " + (e - g) + " ms"); return WebAssembly.instantiate(a, b) })
            } var e, g; return c(!!WebAssembly.instantiateStreaming).then(function (a) {
                Object(h.a)("load", "WASM compilation took " +
                    (Date.now() - (e || g)) + " ms"); return a
            })
        } g.d(e, "a", function () { return a }); var h = g(0), k = g(2), f = g(4); g.d(e, "b", function () { return f.a })
    }, function (b, e, g) {
        function a(a, b, e, c) { function d(a) { return a instanceof e ? a : new e(function (b) { b(a) }) } return new (e || (e = Promise))(function (e, g) { function f(a) { try { m(c.next(a)) } catch (p) { g(p) } } function h(a) { try { m(c["throw"](a)) } catch (p) { g(p) } } function m(a) { a.done ? e(a.value) : d(a.value).then(f, h) } m((c = c.apply(a, b || [])).next()) }) } function h(a, b) {
            function e(a) {
                return function (b) {
                    return c([a,
                        b])
                }
            } function c(c) {
                if (g) throw new TypeError("Generator is already executing."); for (; d;)try {
                    if (g = 1, h && (f = c[0] & 2 ? h["return"] : c[0] ? h["throw"] || ((f = h["return"]) && f.call(h), 0) : h.next) && !(f = f.call(h, c[1])).done) return f; if (h = 0, f) c = [c[0] & 2, f.value]; switch (c[0]) {
                        case 0: case 1: f = c; break; case 4: return d.label++, { value: c[1], done: !1 }; case 5: d.label++; h = c[1]; c = [0]; continue; case 7: c = d.ops.pop(); d.trys.pop(); continue; default: if (!(f = d.trys, f = 0 < f.length && f[f.length - 1]) && (6 === c[0] || 2 === c[0])) { d = 0; continue } if (3 === c[0] &&
                            (!f || c[1] > f[0] && c[1] < f[3])) d.label = c[1]; else if (6 === c[0] && d.label < f[1]) d.label = f[1], f = c; else if (f && d.label < f[2]) d.label = f[2], d.ops.push(c); else { f[2] && d.ops.pop(); d.trys.pop(); continue }
                    }c = b.call(a, d)
                } catch (n) { c = [6, n], h = 0 } finally { g = f = 0 } if (c[0] & 5) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }
            } var d = { label: 0, sent: function () { if (f[0] & 1) throw f[1]; return f[1] }, trys: [], ops: [] }, g, h, f, k; return k = { next: e(0), "throw": e(1), "return": e(2) }, "function" === typeof Symbol && (k[Symbol.iterator] = function () { return this }),
                k
        } g.d(e, "a", function () { return a }); g.d(e, "b", function () { return h })
    }, function (b, e, g) {
        g.d(e, "a", function () { return l }); var a = g(2), h = g(5), k = g(8), f = function () { function a(a) { var b = this; this.promise = a.then(function (a) { b.response = a; b.status = 200 }) } a.prototype.addEventListener = function (a, b) { this.promise.then(b) }; return a }(), l = function (b, d, e) {
            if (Object(k.a)() && !e) {
                self.Module.instantiateWasm = function (a, c) { return Object(h.a)(b + "Wasm.wasm", a, d["Wasm.wasm"]).then(function (a) { c(a.instance) }) }; if (d.disableObjectURLBlobs) {
                    importScripts(b +
                        "Wasm.js"); return
                } e = Object(a.b)(b + "Wasm.js.mem", d["Wasm.js.mem"], !1, !1)
            } else { if (d.disableObjectURLBlobs) { importScripts((self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + b + ".js"); return } e = Object(a.b)((self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + b + ".js.mem", d[".js.mem"], !1); var c = Object(a.c)((self.Module.memoryInitializerPrefixURL ? self.Module.memoryInitializerPrefixURL : "") + b + ".mem", d[".mem"], !0, !0); self.Module.memoryInitializerRequest = new f(c) } e = new Blob([e], { type: "application/javascript" });
            importScripts(URL.createObjectURL(e))
        }
    }, function (b, e, g) {
        g.d(e, "a", function () { return u }); var a = "undefined" === typeof window ? self : window; b = function () { var a = navigator.userAgent.toLowerCase(); return (a = /(msie) ([\w.]+)/.exec(a) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(a)) ? parseInt(a[2], 10) : a }(); var h = function () { var b = a.navigator.userAgent.match(/OPR/), c = a.navigator.userAgent.match(/Maxthon/), d = a.navigator.userAgent.match(/Edge/); return a.navigator.userAgent.match(/Chrome\/(.*?) /) && !b && !c && !d }(); (function () {
            if (!h) return null;
            var b = a.navigator.userAgent.match(/Chrome\/([0-9]+)\./); return b ? parseInt(b[1], 10) : b
        })(); var k = !!navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Edg\/(.*?)/) && a.navigator.userAgent.match(/Chrome\/(.*?) /); (function () { if (!k) return null; var b = a.navigator.userAgent.match(/Edg\/([0-9]+)\./); return b ? parseInt(b[1], 10) : b })(); e = /iPad|iPhone|iPod/.test(a.navigator.platform) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || /iPad|iPhone|iPod/.test(a.navigator.userAgent); var f = function () {
            var b =
                a.navigator.userAgent.match(/.*\/([0-9\.]+)\s(Safari|Mobile).*/i); return b ? parseFloat(b[1]) : b
        }(), l = /^((?!chrome|android).)*safari/i.test(a.navigator.userAgent) || /^((?!chrome|android).)*$/.test(a.navigator.userAgent) && e, c = a.navigator.userAgent.match(/Firefox/); (function () { if (!c) return null; var b = a.navigator.userAgent.match(/Firefox\/([0-9]+)\./); return b ? parseInt(b[1], 10) : b })(); b || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent); navigator.userAgent.match(/(iPad|iPhone|iPod)/i); a.navigator.userAgent.indexOf("Android");
        var d = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(a.navigator.userAgent), r = a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i) ? 14 <= parseInt(a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)[3], 10) : !1, t = !(!self.WebAssembly || !self.WebAssembly.validate), q = -1 < a.navigator.userAgent.indexOf("Edge/16") || -1 < a.navigator.userAgent.indexOf("MSAppHost"), u = function () { return t && !q && !(!r && (l && 14 > f || d)) }
    }, function (b, e, g) { b.exports = g(10) }, function (b, e, g) {
        g.r(e); b = g(7); self.Module =
            {}; self.basePath = "../external/"; Object(b.a)("OfficeEditorWorker", { "Wasm.wasm": 1E8, "Wasm.js.mem": 1E5, ".js.mem": 5E6, ".mem": 3E6 }, !!navigator.userAgent.match(/Edge/i))
    }]);
}).call(this || window)
