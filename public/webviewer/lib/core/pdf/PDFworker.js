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
    var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.getGlobal = function (c) { return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.checkEs6ConformanceViaProxy = function () { try { var c = {}, l = Object.create(new $jscomp.global.Proxy(c, { get: function (h, f, n) { return h == c && "q" == f && n == l } })); return !0 === l.q } catch (h) { return !1 } }; $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
    $jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy(); $jscomp.arrayIteratorImpl = function (c) { var l = 0; return function () { return l < c.length ? { done: !1, value: c[l++] } : { done: !0 } } }; $jscomp.arrayIterator = function (c) { return { next: $jscomp.arrayIteratorImpl(c) } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, l, h) { c != Array.prototype && c != Object.prototype && (c[l] = h.value) }; $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.Symbol = function () { var c = 0; return function (l) { return $jscomp.SYMBOL_PREFIX + (l || "") + c++ } }();
    $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var c = $jscomp.global.Symbol.iterator; c || (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[c] && $jscomp.defineProperty(Array.prototype, c, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
    $jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var c = $jscomp.global.Symbol.asyncIterator; c || (c = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (c) { $jscomp.initSymbolIterator(); c = { next: c }; c[$jscomp.global.Symbol.iterator] = function () { return this }; return c };
    $jscomp.makeIterator = function (c) { var l = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator]; return l ? l.call(c) : $jscomp.arrayIterator(c) }; $jscomp.owns = function (c, l) { return Object.prototype.hasOwnProperty.call(c, l) }; $jscomp.polyfill = function (c, l, h, f) { if (l) { h = $jscomp.global; c = c.split("."); for (f = 0; f < c.length - 1; f++) { var n = c[f]; n in h || (h[n] = {}); h = h[n] } c = c[c.length - 1]; f = h[c]; l = l(f); l != f && null != l && $jscomp.defineProperty(h, c, { configurable: !0, writable: !0, value: l }) } };
    $jscomp.polyfill("WeakMap", function (c) {
        function l() { if (!c || !Object.seal) return !1; try { var b = Object.seal({}), a = Object.seal({}), m = new c([[b, 2], [a, 3]]); if (2 != m.get(b) || 3 != m.get(a)) return !1; m.delete(b); m.set(a, 4); return !m.has(b) && 4 == m.get(a) } catch (u) { return !1 } } function h() { } function f(a) { if (!$jscomp.owns(a, q)) { var b = new h; $jscomp.defineProperty(a, q, { value: b }) } } function n(a) { var b = Object[a]; b && (Object[a] = function (a) { if (a instanceof h) return a; f(a); return b(a) }) } if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
            if (c &&
                $jscomp.ES6_CONFORMANCE) return c
        } else if (l()) return c; var q = "$jscomp_hidden_" + Math.random(); n("freeze"); n("preventExtensions"); n("seal"); var d = 0, a = function (a) { this.id_ = (d += Math.random() + 1).toString(); if (a) { a = $jscomp.makeIterator(a); for (var b; !(b = a.next()).done;)b = b.value, this.set(b[0], b[1]) } }; a.prototype.set = function (a, g) { f(a); if (!$jscomp.owns(a, q)) throw Error("WeakMap key fail: " + a); a[q][this.id_] = g; return this }; a.prototype.get = function (a) { return $jscomp.owns(a, q) ? a[q][this.id_] : void 0 }; a.prototype.has =
            function (a) { return $jscomp.owns(a, q) && $jscomp.owns(a[q], this.id_) }; a.prototype.delete = function (a) { return $jscomp.owns(a, q) && $jscomp.owns(a[q], this.id_) ? delete a[q][this.id_] : !1 }; return a
    }, "es6", "es3"); $jscomp.MapEntry = function () { };
    $jscomp.polyfill("Map", function (c) {
        function l() { if ($jscomp.ASSUME_NO_NATIVE_MAP || !c || "function" != typeof c || !c.prototype.entries || "function" != typeof Object.seal) return !1; try { var a = Object.seal({ x: 4 }), g = new c($jscomp.makeIterator([[a, "s"]])); if ("s" != g.get(a) || 1 != g.size || g.get({ x: 4 }) || g.set({ x: 4 }, "t") != g || 2 != g.size) return !1; var m = g.entries(), d = m.next(); if (d.done || d.value[0] != a || "s" != d.value[1]) return !1; d = m.next(); return d.done || 4 != d.value[0].x || "t" != d.value[1] || !m.next().done ? !1 : !0 } catch (p) { return !1 } }
        if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) { if (c && $jscomp.ES6_CONFORMANCE) return c } else if (l()) return c; $jscomp.initSymbolIterator(); var h = new WeakMap, f = function (a) { this.data_ = {}; this.head_ = d(); this.size = 0; if (a) { a = $jscomp.makeIterator(a); for (var b; !(b = a.next()).done;)b = b.value, this.set(b[0], b[1]) } }; f.prototype.set = function (a, g) {
            a = 0 === a ? 0 : a; var b = n(this, a); b.list || (b.list = this.data_[b.id] = []); b.entry ? b.entry.value = g : (b.entry = {
                next: this.head_, previous: this.head_.previous, head: this.head_, key: a,
                value: g
            }, b.list.push(b.entry), this.head_.previous.next = b.entry, this.head_.previous = b.entry, this.size++); return this
        }; f.prototype.delete = function (a) { a = n(this, a); return a.entry && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.data_[a.id], a.entry.previous.next = a.entry.next, a.entry.next.previous = a.entry.previous, a.entry.head = null, this.size--, !0) : !1 }; f.prototype.clear = function () { this.data_ = {}; this.head_ = this.head_.previous = d(); this.size = 0 }; f.prototype.has = function (a) { return !!n(this, a).entry };
        f.prototype.get = function (a) { return (a = n(this, a).entry) && a.value }; f.prototype.entries = function () { return q(this, function (a) { return [a.key, a.value] }) }; f.prototype.keys = function () { return q(this, function (a) { return a.key }) }; f.prototype.values = function () { return q(this, function (a) { return a.value }) }; f.prototype.forEach = function (a, g) { for (var b = this.entries(), d; !(d = b.next()).done;)d = d.value, a.call(g, d[1], d[0], this) }; f.prototype[Symbol.iterator] = f.prototype.entries; var n = function (b, g) {
            var m = g && typeof g; "object" ==
                m || "function" == m ? h.has(g) ? m = h.get(g) : (m = "" + ++a, h.set(g, m)) : m = "p_" + g; var d = b.data_[m]; if (d && $jscomp.owns(b.data_, m)) for (b = 0; b < d.length; b++) { var p = d[b]; if (g !== g && p.key !== p.key || g === p.key) return { id: m, list: d, index: b, entry: p } } return { id: m, list: d, index: -1, entry: void 0 }
        }, q = function (a, g) { var b = a.head_; return $jscomp.iteratorPrototype(function () { if (b) { for (; b.head != a.head_;)b = b.previous; for (; b.next != b.head;)return b = b.next, { done: !1, value: g(b) }; b = null } return { done: !0, value: void 0 } }) }, d = function () {
            var a = {}; return a.previous =
                a.next = a.head = a
        }, a = 0; return f
    }, "es6", "es3"); $jscomp.FORCE_POLYFILL_PROMISE = !1;
    $jscomp.polyfill("Promise", function (c) {
        function l() { this.batch_ = null } function h(d) { return d instanceof n ? d : new n(function (a, b) { a(d) }) } if (c && !$jscomp.FORCE_POLYFILL_PROMISE) return c; l.prototype.asyncExecute = function (d) { null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_()); this.batch_.push(d); return this }; l.prototype.asyncExecuteBatch_ = function () { var d = this; this.asyncExecuteFunction(function () { d.executeBatch_() }) }; var f = $jscomp.global.setTimeout; l.prototype.asyncExecuteFunction = function (d) {
            f(d,
                0)
        }; l.prototype.executeBatch_ = function () { for (; this.batch_ && this.batch_.length;) { var d = this.batch_; this.batch_ = []; for (var a = 0; a < d.length; ++a) { var b = d[a]; d[a] = null; try { b() } catch (g) { this.asyncThrow_(g) } } } this.batch_ = null }; l.prototype.asyncThrow_ = function (d) { this.asyncExecuteFunction(function () { throw d; }) }; var n = function (d) { this.state_ = 0; this.result_ = void 0; this.onSettledCallbacks_ = []; var a = this.createResolveAndReject_(); try { d(a.resolve, a.reject) } catch (b) { a.reject(b) } }; n.prototype.createResolveAndReject_ =
            function () { function d(g) { return function (d) { b || (b = !0, g.call(a, d)) } } var a = this, b = !1; return { resolve: d(this.resolveTo_), reject: d(this.reject_) } }; n.prototype.resolveTo_ = function (d) { if (d === this) this.reject_(new TypeError("A Promise cannot resolve to itself")); else if (d instanceof n) this.settleSameAsPromise_(d); else { a: switch (typeof d) { case "object": var a = null != d; break a; case "function": a = !0; break a; default: a = !1 }a ? this.resolveToNonPromiseObj_(d) : this.fulfill_(d) } }; n.prototype.resolveToNonPromiseObj_ = function (d) {
                var a =
                    void 0; try { a = d.then } catch (b) { this.reject_(b); return } "function" == typeof a ? this.settleSameAsThenable_(a, d) : this.fulfill_(d)
            }; n.prototype.reject_ = function (d) { this.settle_(2, d) }; n.prototype.fulfill_ = function (d) { this.settle_(1, d) }; n.prototype.settle_ = function (d, a) { if (0 != this.state_) throw Error("Cannot settle(" + d + ", " + a + "): Promise already settled in state" + this.state_); this.state_ = d; this.result_ = a; this.executeOnSettledCallbacks_() }; n.prototype.executeOnSettledCallbacks_ = function () {
                if (null != this.onSettledCallbacks_) {
                    for (var d =
                        0; d < this.onSettledCallbacks_.length; ++d)q.asyncExecute(this.onSettledCallbacks_[d]); this.onSettledCallbacks_ = null
                }
            }; var q = new l; n.prototype.settleSameAsPromise_ = function (d) { var a = this.createResolveAndReject_(); d.callWhenSettled_(a.resolve, a.reject) }; n.prototype.settleSameAsThenable_ = function (d, a) { var b = this.createResolveAndReject_(); try { d.call(a, b.resolve, b.reject) } catch (g) { b.reject(g) } }; n.prototype.then = function (d, a) {
                function b(a, b) {
                    return "function" == typeof a ? function (b) { try { g(a(b)) } catch (r) { m(r) } } :
                        b
                } var g, m, f = new n(function (a, b) { g = a; m = b }); this.callWhenSettled_(b(d, g), b(a, m)); return f
            }; n.prototype.catch = function (d) { return this.then(void 0, d) }; n.prototype.callWhenSettled_ = function (d, a) { function b() { switch (g.state_) { case 1: d(g.result_); break; case 2: a(g.result_); break; default: throw Error("Unexpected state: " + g.state_); } } var g = this; null == this.onSettledCallbacks_ ? q.asyncExecute(b) : this.onSettledCallbacks_.push(b) }; n.resolve = h; n.reject = function (d) { return new n(function (a, b) { b(d) }) }; n.race = function (d) {
                return new n(function (a,
                    b) { for (var g = $jscomp.makeIterator(d), m = g.next(); !m.done; m = g.next())h(m.value).callWhenSettled_(a, b) })
            }; n.all = function (d) { var a = $jscomp.makeIterator(d), b = a.next(); return b.done ? h([]) : new n(function (g, d) { function m(a) { return function (b) { p[a] = b; f--; 0 == f && g(p) } } var p = [], f = 0; do p.push(void 0), f++, h(b.value).callWhenSettled_(m(p.length - 1), d), b = a.next(); while (!b.done) }) }; return n
    }, "es6", "es3");
    $jscomp.checkStringArgs = function (c, l, h) { if (null == c) throw new TypeError("The 'this' value for String.prototype." + h + " must not be null or undefined"); if (l instanceof RegExp) throw new TypeError("First argument to String.prototype." + h + " must not be a regular expression"); return c + "" };
    $jscomp.polyfill("String.prototype.endsWith", function (c) { return c ? c : function (c, h) { var f = $jscomp.checkStringArgs(this, c, "endsWith"); c += ""; void 0 === h && (h = f.length); h = Math.max(0, Math.min(h | 0, f.length)); for (var n = c.length; 0 < n && 0 < h;)if (f[--h] != c[--n]) return !1; return 0 >= n } }, "es6", "es3"); $jscomp.findInternal = function (c, l, h) { c instanceof String && (c = String(c)); for (var f = c.length, n = 0; n < f; n++) { var q = c[n]; if (l.call(h, q, n, c)) return { i: n, v: q } } return { i: -1, v: void 0 } };
    $jscomp.polyfill("Array.prototype.find", function (c) { return c ? c : function (c, h) { return $jscomp.findInternal(this, c, h).v } }, "es6", "es3"); $jscomp.underscoreProtoCanBeSet = function () { var c = { a: !0 }, l = {}; try { return l.__proto__ = c, l.a } catch (h) { } return !1 }; $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (c, l) { c.__proto__ = l; if (c.__proto__ !== l) throw new TypeError(c + " is not extensible"); return c } : null;
    $jscomp.polyfill("Object.setPrototypeOf", function (c) { return c || $jscomp.setPrototypeOf }, "es6", "es5"); $jscomp.assign = "function" == typeof Object.assign ? Object.assign : function (c, l) { for (var h = 1; h < arguments.length; h++) { var f = arguments[h]; if (f) for (var n in f) $jscomp.owns(f, n) && (c[n] = f[n]) } return c }; $jscomp.polyfill("Object.assign", function (c) { return c || $jscomp.assign }, "es6", "es3");
    $jscomp.polyfill("Set", function (c) {
        function l() { if ($jscomp.ASSUME_NO_NATIVE_SET || !c || "function" != typeof c || !c.prototype.entries || "function" != typeof Object.seal) return !1; try { var f = Object.seal({ x: 4 }), n = new c($jscomp.makeIterator([f])); if (!n.has(f) || 1 != n.size || n.add(f) != n || 1 != n.size || n.add({ x: 4 }) != n || 2 != n.size) return !1; var h = n.entries(), d = h.next(); if (d.done || d.value[0] != f || d.value[1] != f) return !1; d = h.next(); return d.done || d.value[0] == f || 4 != d.value[0].x || d.value[1] != d.value[0] ? !1 : h.next().done } catch (a) { return !1 } }
        if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) { if (c && $jscomp.ES6_CONFORMANCE) return c } else if (l()) return c; $jscomp.initSymbolIterator(); var h = function (f) { this.map_ = new Map; if (f) { f = $jscomp.makeIterator(f); for (var c; !(c = f.next()).done;)this.add(c.value) } this.size = this.map_.size }; h.prototype.add = function (f) { f = 0 === f ? 0 : f; this.map_.set(f, f); this.size = this.map_.size; return this }; h.prototype.delete = function (f) { f = this.map_.delete(f); this.size = this.map_.size; return f }; h.prototype.clear = function () {
            this.map_.clear();
            this.size = 0
        }; h.prototype.has = function (f) { return this.map_.has(f) }; h.prototype.entries = function () { return this.map_.entries() }; h.prototype.values = function () { return this.map_.values() }; h.prototype.keys = h.prototype.values; h.prototype[Symbol.iterator] = h.prototype.values; h.prototype.forEach = function (f, c) { var n = this; this.map_.forEach(function (d) { return f.call(c, d, d, n) }) }; return h
    }, "es6", "es3");
    $jscomp.iteratorFromArray = function (c, l) { $jscomp.initSymbolIterator(); c instanceof String && (c += ""); var h = 0, f = { next: function () { if (h < c.length) { var n = h++; return { value: l(n, c[n]), done: !1 } } f.next = function () { return { done: !0, value: void 0 } }; return f.next() } }; f[Symbol.iterator] = function () { return f }; return f }; $jscomp.polyfill("Array.prototype.keys", function (c) { return c ? c : function () { return $jscomp.iteratorFromArray(this, function (c) { return c }) } }, "es6", "es3");
    (function (c) {
        function l(f) { if (h[f]) return h[f].exports; var n = h[f] = { i: f, l: !1, exports: {} }; c[f].call(n.exports, n, n.exports, l); n.l = !0; return n.exports } var h = {}; l.m = c; l.c = h; l.d = function (f, c, h) { l.o(f, c) || Object.defineProperty(f, c, { enumerable: !0, get: h }) }; l.r = function (f) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }); Object.defineProperty(f, "__esModule", { value: !0 }) }; l.t = function (f, c) {
            c & 1 && (f = l(f)); if (c & 8 || c & 4 && "object" === typeof f && f && f.__esModule) return f;
            var h = Object.create(null); l.r(h); Object.defineProperty(h, "default", { enumerable: !0, value: f }); if (c & 2 && "string" != typeof f) for (var d in f) l.d(h, d, function (a) { return f[a] }.bind(null, d)); return h
        }; l.n = function (f) { var c = f && f.__esModule ? function () { return f["default"] } : function () { return f }; l.d(c, "a", c); return c }; l.o = function (f, c) { return Object.prototype.hasOwnProperty.call(f, c) }; l.p = "/core/pdf/"; return l(l.s = 19)
    })([function (c, l, h) {
        h.d(l, "d", function () { return q }); h.d(l, "e", function () { return n }); h.d(l, "c", function () { return d });
        h.d(l, "a", function () { return a }); h.d(l, "b", function () { return b }); var f = h(2), n = function (a, b) { Object(f.a)("disableLogs") || (b ? console.warn(a + ": " + b) : console.warn(a)) }, q = function (a, b) { Object(f.a)("disableLogs") || (b ? console.log(a + ": " + b) : console.log(a)) }, d = function (a) { if (!Object(f.a)("disableLogs")) throw console.error(a), Error(a); }, a = function (a, b) { }, b = function (a, b) { }
    }, function (c, l, h) {
        h.d(l, "c", function () { return b }); h.d(l, "a", function () { return g }); h.d(l, "b", function () { return m }); h.d(l, "d", function () { return u });
        var f = h(14), n = console.log, q = console.warn, d = console.error, a = function (a) { void 0 === a && (a = !0); a ? (console.log = function () { }, console.warn = function () { }, console.error = function () { }) : (console.log = n, console.warn = q, console.error = d) }, b = function () { var b = Object(f.a)(location.search); a("1" === b.disableLogs) }, g = function (b) { b.on("disableLogs", function (b) { a(b.disabled) }) }, m = function (a, b) { return function () { } }, u = function (a, b) { b ? console.warn(a + ": " + b) : console.warn(a) }
    }, function (c, l, h) {
        h.d(l, "a", function () { return q }); h.d(l,
            "b", function () { return d }); var f = {}, n = { flattenedResources: !1, CANVAS_CACHE_SIZE: void 0, maxPagesBefore: void 0, maxPagesAhead: void 0, disableLogs: !1, wvsQueryParameters: {}, _trnDebugMode: !1, _logFiltersEnabled: null }, q = function (a) { return n[a] }, d = function (a, b) { var g; n[a] = b; null === (g = f[a]) || void 0 === g ? void 0 : g.forEach(function (a) { a(b) }) }
    }, function (c, l, h) {
        h.d(l, "a", function () { return x }); h.d(l, "b", function () { return k }); h.d(l, "c", function () { return e }); var f = h(11), n = h(0), q = h(8), d = h(4), a = "undefined" === typeof window ?
            self : window, b = a.importScripts, g = !1, m = function (e, k) { g || (b(a.basePath + "decode.min.js"), g = !0); e = self.BrotliDecode(Object(d.b)(e)); return k ? e : Object(d.a)(e) }, u = function (e, k) { return Object(f.a)(void 0, void 0, Promise, function () { var a; return Object(f.b)(this, function (t) { switch (t.label) { case 0: return g ? [3, 2] : [4, Object(q.a)(self.Core.getWorkerPath() + "external/decode.min.js", "Failed to download decode.min.js", window)]; case 1: t.sent(), g = !0, t.label = 2; case 2: return a = self.BrotliDecode(Object(d.b)(e)), [2, k ? a : Object(d.a)(a)] } }) }) };
        (function () {
            function e() { this.remainingDataArrays = [] } e.prototype.processRaw = function (e) { return e }; e.prototype.processBrotli = function (e) { this.remainingDataArrays.push(e); return null }; e.prototype.GetNextChunk = function (e) { this.decodeFunction || (this.decodeFunction = 0 === e[0] && 97 === e[1] && 115 === e[2] && 109 === e[3] ? this.processRaw : this.processBrotli); return this.decodeFunction(e) }; e.prototype.End = function () {
                if (this.remainingDataArrays.length) {
                    for (var e = this.arrays, k = 0, a = 0; a < e.length; ++a)k += e[a].length; k = new Uint8Array(k);
                    var t = 0; for (a = 0; a < e.length; ++a) { var b = e[a]; k.set(b, t); t += b.length } return m(k, !0)
                } return null
            }; return e
        })(); var p = !1, z = function (e) { p || (b(a.basePath + "pako_inflate.min.js"), p = !0); var k = 10; if ("string" === typeof e) { if (e.charCodeAt(3) & 8) { for (; 0 !== e.charCodeAt(k); ++k); ++k } } else if (e[3] & 8) { for (; 0 !== e[k]; ++k); ++k } e = Object(d.b)(e); e = e.subarray(k, e.length - 8); return a.pako.inflate(e, { windowBits: -15 }) }, v = function (e, k) { return k ? e : Object(d.a)(e) }, r = function (e) {
            var k = !e.shouldOutputArray, a = new XMLHttpRequest; a.open("GET",
                e.url, e.isAsync); var t = k && a.overrideMimeType; a.responseType = t ? "text" : "arraybuffer"; t && a.overrideMimeType("text/plain; charset=x-user-defined"); a.send(); var g = function () {
                    var A = Date.now(); var g = t ? a.responseText : new Uint8Array(a.response); Object(n.a)("worker", "Result length is " + g.length); g.length < e.compressedMaximum ? (g = e.decompressFunction(g, e.shouldOutputArray), Object(n.e)("There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this."),
                        b && Object(n.a)("worker", "Decompressed length is " + g.length)) : k && (g = Object(d.a)(g)); b && Object(n.a)("worker", e.url + " Decompression took " + (Date.now() - A)); return g
                }; if (e.isAsync) var m = new Promise(function (k, b) { a.onload = function () { 200 === this.status || 0 === this.status ? k(g()) : b("Download Failed " + e.url) }; a.onerror = function () { b("Network error occurred " + e.url) } }); else { if (200 === a.status || 0 === a.status) return g(); throw Error("Failed to load " + e.url); } return m
        }, x = function (e) {
            var k = e.lastIndexOf("/"); -1 === k && (k =
                0); var a = e.slice(k).replace(".", ".br."); b || (a.endsWith(".js.mem") ? a = a.replace(".js.mem", ".mem") : a.endsWith(".js") && (a = a.concat(".mem"))); return e.slice(0, k) + a
        }, y = function (e, k) { var a = e.lastIndexOf("/"); -1 === a && (a = 0); var b = e.slice(a).replace(".", ".gz."); k.url = e.slice(0, a) + b; k.decompressFunction = z; return r(k) }, C = function (e, k) { k.url = x(e); k.decompressFunction = b ? m : u; return r(k) }, D = function (e, k) {
            e.endsWith(".js.mem") ? e = e.slice(0, -4) : e.endsWith(".mem") && (e = e.slice(0, -4) + ".js.mem"); k.url = e; k.decompressFunction =
                v; return r(k)
        }, E = function (e, k, a, b) { return e.catch(function (e) { Object(n.e)(e); return b(k, a) }) }, F = function (e, k, a) { var b; if (a.isAsync) { var t = k[0](e, a); for (b = 1; b < k.length; ++b)t = E(t, e, a, k[b]); return t } for (b = 0; b < k.length; ++b)try { return k[b](e, a) } catch (L) { Object(n.e)(L.message) } throw Error(""); }, e = function (e, k, a, b) { return F(e, [y, C, D], { compressedMaximum: k, isAsync: a, shouldOutputArray: b }) }, k = function (e, k, a, b) { return F(e, [C, y, D], { compressedMaximum: k, isAsync: a, shouldOutputArray: b }) }
    }, function (c, l, h) {
        h.d(l, "b",
            function () { return f }); h.d(l, "a", function () { return n }); var f = function (f) { if ("string" === typeof f) { for (var d = new Uint8Array(f.length), a = f.length, b = 0; b < a; b++)d[b] = f.charCodeAt(b); return d } return f }, n = function (f) { if ("string" !== typeof f) { for (var d = "", a = 0, b = f.length, g; a < b;)g = f.subarray(a, a + 1024), a += 1024, d += String.fromCharCode.apply(null, g); return d } return f }
    }, function (c, l, h) {
        h.d(l, "a", function () { return z }); var f = "undefined" === typeof window ? self : window; c = function () {
            var a = navigator.userAgent.toLowerCase();
            return (a = /(msie) ([\w.]+)/.exec(a) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(a)) ? parseInt(a[2], 10) : a
        }(); var n = function () { var a = f.navigator.userAgent.match(/OPR/), b = f.navigator.userAgent.match(/Maxthon/), g = f.navigator.userAgent.match(/Edge/); return f.navigator.userAgent.match(/Chrome\/(.*?) /) && !a && !b && !g }(); (function () { if (!n) return null; var a = f.navigator.userAgent.match(/Chrome\/([0-9]+)\./); return a ? parseInt(a[1], 10) : a })(); var q = !!navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Edg\/(.*?)/) &&
            f.navigator.userAgent.match(/Chrome\/(.*?) /); (function () { if (!q) return null; var a = f.navigator.userAgent.match(/Edg\/([0-9]+)\./); return a ? parseInt(a[1], 10) : a })(); l = /iPad|iPhone|iPod/.test(f.navigator.platform) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || /iPad|iPhone|iPod/.test(f.navigator.userAgent); var d = function () { var a = f.navigator.userAgent.match(/.*\/([0-9\.]+)\s(Safari|Mobile).*/i); return a ? parseFloat(a[1]) : a }(), a = /^((?!chrome|android).)*safari/i.test(f.navigator.userAgent) ||
                /^((?!chrome|android).)*$/.test(f.navigator.userAgent) && l, b = f.navigator.userAgent.match(/Firefox/); (function () { if (!b) return null; var a = f.navigator.userAgent.match(/Firefox\/([0-9]+)\./); return a ? parseInt(a[1], 10) : a })(); c || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent); navigator.userAgent.match(/(iPad|iPhone|iPod)/i); f.navigator.userAgent.indexOf("Android"); var g = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(f.navigator.userAgent), m = f.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i) ?
                    14 <= parseInt(f.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)[3], 10) : !1, u = !(!self.WebAssembly || !self.WebAssembly.validate), p = -1 < f.navigator.userAgent.indexOf("Edge/16") || -1 < f.navigator.userAgent.indexOf("MSAppHost"), z = function () { return u && !p && !(!m && (a && 14 > d || g)) }
    }, function (c, l, h) {
        function f(a) {
            "@babel/helpers - typeof"; return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) {
                return a && "function" == typeof Symbol && a.constructor ===
                    Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            }, f(a)
        } var n, q, d; !function (a) { "object" === f(l) && "undefined" !== typeof c ? c.exports = a() : !(q = [], n = a, d = "function" === typeof n ? n.apply(l, q) : n, void 0 !== d && (c.exports = d)) }(function () {
            return function u(b, g, d) {
                function f(p, c) { if (!g[p]) { if (!b[p]) { if (m) return m(p, !0); c = Error("Cannot find module '".concat(p, "'")); throw c.code = "MODULE_NOT_FOUND", c; } c = g[p] = { exports: {} }; b[p][0].call(c.exports, function (g) { return f(b[p][1][g] || g) }, c, c.exports, u, b, g, d) } return g[p].exports }
                for (var m = !1, c = 0; c < d.length; c++)f(d[c]); return f
            }({
                1: [function (b, g, d) {
                    var f = {}.hasOwnProperty, p = function (b, g) { function d() { this.constructor = b } for (var p in g) f.call(g, p) && (b[p] = g[p]); d.prototype = g.prototype; b.prototype = new d; b.__super__ = g.prototype; return b }; d = b("./PriorityQueue/AbstractPriorityQueue"); b = b("./PriorityQueue/ArrayStrategy"); d = function (b) {
                        function g(b) {
                            b || (b = {}); b.strategy || (b.strategy = BinaryHeapStrategy); b.comparator || (b.comparator = function (b, g) { return (b || 0) - (g || 0) }); g.__super__.constructor.call(this,
                                b)
                        } p(g, b); return g
                    }(d); d.ArrayStrategy = b; g.exports = d
                }, { "./PriorityQueue/AbstractPriorityQueue": 2, "./PriorityQueue/ArrayStrategy": 3 }], 2: [function (b, g, d) {
                    g.exports = function () {
                        function b(b) { if (null == (null != b ? b.strategy : void 0)) throw "Must pass options.strategy, a strategy"; if (null == (null != b ? b.comparator : void 0)) throw "Must pass options.comparator, a comparator"; this.priv = new b.strategy(b); this.length = 0 } b.prototype.queue = function (b) { this.length++; this.priv.queue(b) }; b.prototype.dequeue = function (b) {
                            if (!this.length) throw "Empty queue";
                            this.length--; return this.priv.dequeue()
                        }; b.prototype.peek = function (b) { if (!this.length) throw "Empty queue"; return this.priv.peek() }; b.prototype.remove = function (b) { this.priv.remove(b) && --this.length }; b.prototype.find = function (b) { return 0 <= this.priv.find(b) }; b.prototype.removeAllMatching = function (b, g) { b = this.priv.removeAllMatching(b, g); this.length -= b }; return b
                    }()
                }, {}], 3: [function (b, g, d) {
                    var f = function (b, g, d) { var f; var m = 0; for (f = b.length; m < f;) { var c = m + f >>> 1; 0 <= d(b[c], g) ? m = c + 1 : f = c } return m }; g.exports =
                        function () {
                            function b(b) { var g; this.options = b; this.comparator = this.options.comparator; this.data = (null != (g = this.options.initialValues) ? g.slice(0) : void 0) || []; this.data.sort(this.comparator).reverse() } b.prototype.queue = function (b) { var g = f(this.data, b, this.comparator); this.data.splice(g, 0, b) }; b.prototype.dequeue = function () { return this.data.pop() }; b.prototype.peek = function () { return this.data[this.data.length - 1] }; b.prototype.find = function (b) {
                                var g = f(this.data, b, this.comparator) - 1; return 0 <= g && !this.comparator(this.data[g],
                                    b) ? g : -1
                            }; b.prototype.remove = function (b) { b = this.find(b); return 0 <= b ? (this.data.splice(b, 1), !0) : !1 }; b.prototype.removeAllMatching = function (b, g) { for (var d = 0, f = this.data.length - 1; 0 <= f; --f)if (b(this.data[f])) { var m = this.data.splice(f, 1)[0]; g && g(m); ++d } return d }; return b
                        }()
                }, {}]
            }, {}, [1])(1)
        })
    }, function (c, l, h) {
        (function (f) {
            function c(a, b) { this._id = a; this._clearFn = b } var q = "undefined" !== typeof f && f || "undefined" !== typeof self && self || window, d = Function.prototype.apply; l.setTimeout = function () {
                return new c(d.call(setTimeout,
                    q, arguments), clearTimeout)
            }; l.setInterval = function () { return new c(d.call(setInterval, q, arguments), clearInterval) }; l.clearTimeout = l.clearInterval = function (a) { a && a.close() }; c.prototype.unref = c.prototype.ref = function () { }; c.prototype.close = function () { this._clearFn.call(q, this._id) }; l.enroll = function (a, b) { clearTimeout(a._idleTimeoutId); a._idleTimeout = b }; l.unenroll = function (a) { clearTimeout(a._idleTimeoutId); a._idleTimeout = -1 }; l._unrefActive = l.active = function (a) {
                clearTimeout(a._idleTimeoutId); var b = a._idleTimeout;
                0 <= b && (a._idleTimeoutId = setTimeout(function () { a._onTimeout && a._onTimeout() }, b))
            }; h(23); l.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof f && f.setImmediate || this && this.setImmediate; l.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof f && f.clearImmediate || this && this.clearImmediate
        }).call(this, h(10))
    }, function (c, l, h) {
        function f(f, d, a) {
            return new Promise(function (b) {
                if (!f) return b(); var g = a.document.createElement("script"); g.type = "text/javascript";
                g.onload = function () { b() }; g.onerror = function () { d && Object(n.e)(d); b() }; g.src = f; a.document.getElementsByTagName("head")[0].appendChild(g)
            })
        } h.d(l, "a", function () { return f }); var n = h(0)
    }, function (c, l, h) {
        function f(a, b, g) {
            function d(m) {
                c = c || Date.now(); return m ? (Object(n.a)("load", "Try instantiateStreaming"), fetch(Object(q.a)(a)).then(function (a) { return WebAssembly.instantiateStreaming(a, b) }).catch(function (b) { Object(n.a)("load", "instantiateStreaming Failed " + a + " message " + b.message); return d(!1) })) : Object(q.b)(a,
                    g, !0, !0).then(function (a) { f = Date.now(); Object(n.a)("load", "Request took " + (f - c) + " ms"); return WebAssembly.instantiate(a, b) })
            } var f, c; return d(!!WebAssembly.instantiateStreaming).then(function (a) { Object(n.a)("load", "WASM compilation took " + (Date.now() - (f || c)) + " ms"); return a })
        } h.d(l, "a", function () { return f }); var n = h(0), q = h(3), d = h(8); h.d(l, "b", function () { return d.a })
    }, function (c, l) {
        l = function () { return this }(); try { l = l || (new Function("return this"))() } catch (h) { "object" === typeof window && (l = window) } c.exports =
            l
    }, function (c, l, h) {
        function f(f, d, a, b) { function g(b) { return b instanceof a ? b : new a(function (a) { a(b) }) } return new (a || (a = Promise))(function (a, c) { function m(a) { try { u(b.next(a)) } catch (x) { c(x) } } function h(a) { try { u(b["throw"](a)) } catch (x) { c(x) } } function u(b) { b.done ? a(b.value) : g(b.value).then(m, h) } u((b = b.apply(f, d || [])).next()) }) } function n(f, d) {
            function a(a) { return function (g) { return b([a, g]) } } function b(a) {
                if (c) throw new TypeError("Generator is already executing."); for (; g;)try {
                    if (c = 1, h && (p = a[0] & 2 ? h["return"] :
                        a[0] ? h["throw"] || ((p = h["return"]) && p.call(h), 0) : h.next) && !(p = p.call(h, a[1])).done) return p; if (h = 0, p) a = [a[0] & 2, p.value]; switch (a[0]) {
                            case 0: case 1: p = a; break; case 4: return g.label++, { value: a[1], done: !1 }; case 5: g.label++; h = a[1]; a = [0]; continue; case 7: a = g.ops.pop(); g.trys.pop(); continue; default: if (!(p = g.trys, p = 0 < p.length && p[p.length - 1]) && (6 === a[0] || 2 === a[0])) { g = 0; continue } if (3 === a[0] && (!p || a[1] > p[0] && a[1] < p[3])) g.label = a[1]; else if (6 === a[0] && g.label < p[1]) g.label = p[1], p = a; else if (p && g.label < p[2]) g.label =
                                p[2], g.ops.push(a); else { p[2] && g.ops.pop(); g.trys.pop(); continue }
                        }a = d.call(f, g)
                } catch (r) { a = [6, r], h = 0 } finally { c = p = 0 } if (a[0] & 5) throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }
            } var g = { label: 0, sent: function () { if (p[0] & 1) throw p[1]; return p[1] }, trys: [], ops: [] }, c, h, p, n; return n = { next: a(0), "throw": a(1), "return": a(2) }, "function" === typeof Symbol && (n[Symbol.iterator] = function () { return this }), n
        } h.d(l, "a", function () { return f }); h.d(l, "b", function () { return n })
    }, function (c, l) {
        function h() {
            throw Error("setTimeout has not been defined");
        } function f() { throw Error("clearTimeout has not been defined"); } function n(a) { if (m === setTimeout) return setTimeout(a, 0); if ((m === h || !m) && setTimeout) return m = setTimeout, setTimeout(a, 0); try { return m(a, 0) } catch (y) { try { return m.call(null, a, 0) } catch (C) { return m.call(this, a, 0) } } } function q(a) { if (u === clearTimeout) return clearTimeout(a); if ((u === f || !u) && clearTimeout) return u = clearTimeout, clearTimeout(a); try { return u(a) } catch (y) { try { return u.call(null, a) } catch (C) { return u.call(this, a) } } } function d() {
            z && v && (z =
                !1, v.length ? p = v.concat(p) : r = -1, p.length && a())
        } function a() { if (!z) { var a = n(d); z = !0; for (var b = p.length; b;) { v = p; for (p = []; ++r < b;)v && v[r].run(); r = -1; b = p.length } v = null; z = !1; q(a) } } function b(a, b) { this.fun = a; this.array = b } function g() { } c = c.exports = {}; try { var m = "function" === typeof setTimeout ? setTimeout : h } catch (x) { m = h } try { var u = "function" === typeof clearTimeout ? clearTimeout : f } catch (x) { u = f } var p = [], z = !1, v, r = -1; c.nextTick = function (g) {
            var d = Array(arguments.length - 1); if (1 < arguments.length) for (var f = 1; f < arguments.length; f++)d[f -
                1] = arguments[f]; p.push(new b(g, d)); 1 !== p.length || z || n(a)
        }; b.prototype.run = function () { this.fun.apply(null, this.array) }; c.title = "browser"; c.browser = !0; c.env = {}; c.argv = []; c.version = ""; c.versions = {}; c.on = g; c.addListener = g; c.once = g; c.off = g; c.removeListener = g; c.removeAllListeners = g; c.emit = g; c.prependListener = g; c.prependOnceListener = g; c.listeners = function (a) { return [] }; c.binding = function (a) { throw Error("process.binding is not supported"); }; c.cwd = function () { return "/" }; c.chdir = function (a) {
            throw Error("process.chdir is not supported");
        }; c.umask = function () { return 0 }
    }, function (c, l, h) { l.a = function () { ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function (f, c) { void 0 === f && (f = 0); void 0 === c && (c = this.byteLength); f = Math.floor(f); c = Math.floor(c); 0 > f && (f += this.byteLength); 0 > c && (c += this.byteLength); f = Math.min(Math.max(0, f), this.byteLength); c = Math.min(Math.max(0, c), this.byteLength); if (0 >= c - f) return new ArrayBuffer(0); var h = new ArrayBuffer(c - f), d = new Uint8Array(h); f = new Uint8Array(this, f, c - f); d.set(f); return h }) } }, function (c, l, h) {
        l.a =
            function (f) { var c = {}; decodeURIComponent(f.slice(1)).split("&").forEach(function (f) { f = f.split("=", 2); c[f[0]] = f[1] }); return c }
    }, function (c, l, h) {
        (function (f) {
            function c(a) { "function" !== typeof a && (a = new Function("" + a)); for (var b = Array(arguments.length - 1), g = 0; g < b.length; g++)b[g] = arguments[g + 1]; v[z] = { callback: a, args: b }; y(z); return z++ } function h(a) { delete v[a] } function d(a) {
                if (r) setTimeout(d, 0, a); else {
                    var b = v[a]; if (b) {
                        r = !0; try {
                            var g = b.callback, e = b.args; switch (e.length) {
                                case 0: g(); break; case 1: g(e[0]); break;
                                case 2: g(e[0], e[1]); break; case 3: g(e[0], e[1], e[2]); break; default: g.apply(void 0, e)
                            }
                        } finally { h(a), r = !1 }
                    }
                }
            } function a() { y = function (a) { f.nextTick(function () { d(a) }) } } function b() { if (p.postMessage && !p.importScripts) { var a = !0, b = p.onmessage; p.onmessage = function () { a = !1 }; p.postMessage("", "*"); p.onmessage = b; return a } } function g() {
                var a = "setImmediate$" + Math.random() + "$", b = function (b) { b.source !== p && b.source !== p.parent || "string" !== typeof b.data || 0 !== b.data.indexOf(a) || d(+b.data.slice(a.length)) }; p.addEventListener ?
                    p.addEventListener("message", b, !1) : p.attachEvent("onmessage", b); y = function (b) { p.postMessage(a + b, "*") }
            } function m() { var a = x.documentElement; y = function (b) { var g = x.createElement("script"); g.onreadystatechange = function () { d(b); g.onreadystatechange = null; a.removeChild(g); g = null }; a.appendChild(g) } } function u() { y = function (a) { setTimeout(d, 0, a) } } var p = "undefined" === typeof window ? self : window, z = 1, v = {}, r = !1, x = p.document, y, C = Object.getPrototypeOf && Object.getPrototypeOf(p); C = C && C.setTimeout ? C : p; "[object process]" ===
                {}.toString.call(p.process) ? a() : b() ? g() : x && "onreadystatechange" in x.createElement("script") ? m() : u(); C.setImmediate = c; C.clearImmediate = h; l.a = { setImmediate: c, clearImmediate: h }
        }).call(this, h(12))
    }, function (c, l, h) {
        var f = h(0), n = h(2); c = function () {
            function c(d, a) {
                this.name = d; this.comObj = a; this.callbackIndex = 1; this.postMessageTransfers = !0; this.callbacksCapabilities = {}; this.actionHandler = {}; this.actionHandlerAsync = {}; this.pdfnetCommandChain = this.nextAsync = null; this.pdfnetActiveCommands = new Set; this.actionHandler.console_log =
                    [function (a) { Object(f.d)(a) }]; this.actionHandler.console_error = [function (a) { Object(f.c)(a) }]; this.actionHandler.workerLoaded = [function () { }]; this.msgHandler = this.handleMessage.bind(this); a.addEventListener("message", this.msgHandler)
            } c.prototype.on = function (d, a, b) { var g = this.actionHandler; g[d] && Object(f.c)('There is already an actionName called "' + d + '"'); g[d] = [a, b] }; c.prototype.clearActionHandlers = function () { this.actionHandler = {}; this.comObj.removeEventListener("message", this.msgHandler) }; c.prototype.reset =
                function () { this.clearActionHandlers(); this.comObj.reset && this.comObj.reset() }; c.prototype.replace = function (d, a, b) { this.actionHandler[d] = [a, b] }; c.prototype.onAsync = function (d, a, b) { var g = this.actionHandlerAsync; g[d] && Object(f.c)('There is already an actionName called "' + d + '"'); g[d] = [a, b] }; c.prototype.replaceAsync = function (d, a, b) { var g = this.actionHandlerAsync, c = this.actionHandler; c[d] && delete c[d]; g[d] = [a, b] }; c.prototype.onNextAsync = function (d) { this.nextAsync = d }; c.prototype.send = function (d, a) {
                    this.postMessage({
                        action: d,
                        data: a
                    })
                }; c.prototype.getNextId = function () { return this.callbackIndex++ }; c.prototype.sendWithPromise = function (d, a, b) { var g = this.getNextId(); d = { action: d, data: a, callbackId: g, priority: b }; a = window.createPromiseCapability(); this.callbacksCapabilities[g] = a; try { this.postMessage(d) } catch (m) { a.reject(m) } return a.promise }; c.prototype.sendWithPromiseReturnId = function (d, a, b) {
                    var g = this.getNextId(); d = { action: d, data: a, callbackId: g, priority: b }; a = window.createPromiseCapability(); this.callbacksCapabilities[g] = a; try { this.postMessage(d) } catch (m) { a.reject(m) } return {
                        promise: a.promise,
                        callbackId: g
                    }
                }; c.prototype.sendWithPromiseWithId = function (d, a, b) { a > this.callbackIndex && Object(f.c)("Can't reuse callbackId " + a + " lesser than callbackIndex " + this.callbackIndex); a in this.callbacksCapabilities && Object(f.c)("Can't reuse callbackId " + a + ". There is a capability waiting to be resolved. "); d = { action: d, data: b, callbackId: a }; b = window.createPromiseCapability(); this.callbacksCapabilities[a] = b; try { this.postMessage(d) } catch (g) { b.reject(g) } return b.promise }; c.prototype.sendError = function (d, a) {
                    if (d.message ||
                        d.errorData) { d.message && d.message.message && (d.message = d.message.message); var b = d.errorData; d = { type: d.type ? d.type : "JavascriptError", message: d.message }; b && Object.keys(b).forEach(function (a) { b.hasOwnProperty(a) && (d[a] = b[a]) }) } this.postMessage({ isReply: !0, callbackId: a, error: d })
                }; c.prototype.getPromise = function (d) { if (d in this.callbacksCapabilities) return this.callbacksCapabilities[d]; Object(f.c)("Cannot get promise for callback " + d) }; c.prototype.cancelPromise = function (d) {
                    if (d in this.callbacksCapabilities) {
                        var a =
                            this.callbacksCapabilities[d]; delete this.callbacksCapabilities[d]; this.pdfnetActiveCommands.has(d) && this.pdfnetActiveCommands.delete(d); a.reject({ type: "Cancelled", message: "Request has been cancelled." }); this.postMessage({ action: "actionCancel", data: { callbackId: d } })
                    } else Object(f.b)("Cannot cancel callback " + d)
                }; c.prototype.postMessage = function (d) {
                    Object(n.a)("enableWorkerLogs") && Object(f.d)("PDFWorker", "Sent " + JSON.stringify(d)); if (this.postMessageTransfers) {
                        var a = this.getTransfersArray(d); this.comObj.postMessage(d,
                            a)
                    } else this.comObj.postMessage(d)
                }; c.prototype.getObjectTransfers = function (d, a) { var b = this; null !== d && "object" === typeof d && (d instanceof Uint8Array ? a.push(d.buffer) : d instanceof ArrayBuffer ? a.push(d) : Object.keys(d).forEach(function (g) { d.hasOwnProperty(g) && b.getObjectTransfers(d[g], a) })) }; c.prototype.getTransfersArray = function (d) { var a = []; this.getObjectTransfers(d, a); return 0 === a.length ? void 0 : a }; c.prototype.handleMessage = function (d) {
                    var a = this, b = d.data; Object(n.a)("enableWorkerLogs") && Object(f.d)("PDFWorker",
                        "Received " + JSON.stringify(b)); var g = this.actionHandler, c = this.actionHandlerAsync; d = this.callbacksCapabilities; var h = this.pdfnetActiveCommands; if (b.isReply) g = b.callbackId, g in d ? (c = d[g], delete d[g], h.has(g) && h.delete(g), "error" in b ? c.reject(b.error) : c.resolve(b.data)) : Object(f.a)("Cannot resolve callback " + g); else if (b.action in g) {
                            var p = g[b.action]; b.callbackId ? Promise.resolve().then(function () { return p[0].call(p[1], b.data) }).then(function (g) { a.postMessage({ isReply: !0, callbackId: b.callbackId, data: g }) },
                                function (g) { a.sendError(g, b.callbackId) }) : p[0].call(p[1], b.data)
                        } else b.action in c ? (p = c[b.action], b.callbackId ? p[0].call(p[1], b).then(function (g) { a.postMessage({ isReply: !0, callbackId: b.callbackId, data: g }); a.nextAsync() }, function (g) { a.sendError(g, b.callbackId); a.nextAsync() }) : p[0].call(p[1], b).then(function () { a.nextAsync() }, function () { a.nextAsync() })) : Object(f.c)("Unknown action from worker: " + b.action)
                }; return c
        }(); l.a = c
    }, function (c, l, h) {
        h.d(l, "a", function () { return a }); var f = h(3), n = h(9), q = h(5), d =
            function () { function a(a) { var b = this; this.promise = a.then(function (a) { b.response = a; b.status = 200 }) } a.prototype.addEventListener = function (a, b) { this.promise.then(b) }; return a }(), a = function (a, g, c) {
                if (Object(q.a)() && !c) { self.Module.instantiateWasm = function (b, c) { return Object(n.a)(a + "Wasm.wasm", b, g["Wasm.wasm"]).then(function (a) { c(a.instance) }) }; if (g.disableObjectURLBlobs) { importScripts(a + "Wasm.js"); return } c = Object(f.b)(a + "Wasm.js.mem", g["Wasm.js.mem"], !1, !1) } else {
                    if (g.disableObjectURLBlobs) {
                        importScripts((self.Module.asmjsPrefix ?
                            self.Module.asmjsPrefix : "") + a + ".js"); return
                    } c = Object(f.b)((self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + a + ".js.mem", g[".js.mem"], !1); var b = Object(f.c)((self.Module.memoryInitializerPrefixURL ? self.Module.memoryInitializerPrefixURL : "") + a + ".mem", g[".mem"], !0, !0); self.Module.memoryInitializerRequest = new d(b)
                } c = new Blob([c], { type: "application/javascript" }); importScripts(URL.createObjectURL(c))
            }
    }, function (c, l, h) { h.d(l, "a", function () { return f }); var f = "optimized/" }, function (c, l, h) { c.exports = h(20) },
    function (c, l, h) { h.r(l); h(5); c = h(13); h(21); h(22); h(25); h(26); h(27); h(28); h(29); Object(c.a)() }, function (c, l, h) { (function (c) { "undefined" === typeof c.crypto && (c.crypto = { getRandomValues: function (c) { for (var f = 0; f < c.length; f++)c[f] = 256 * Math.random() } }) })("undefined" === typeof window ? self : window) }, function (c, l, h) {
        (function (c, n) {
            function f(c) {
                "@babel/helpers - typeof"; return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) {
                    return a && "function" == typeof Symbol &&
                        a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                }, f(c)
            } (function (c) {
                function a() { for (var a = 0; a < B.length; a++)B[a][0](B[a][1]); B = []; I = !1 } function b(e, k) { B.push([e, k]); I || (I = !0, A(a, 0)) } function g(a, e) { function k(a) { p(e, a) } function b(a) { v(e, a) } try { a(k, b) } catch (G) { b(G) } } function d(a) { var e = a.owner, b = e.state_; e = e.data_; var g = a[b]; a = a.then; if ("function" === typeof g) { b = k; try { e = g(e) } catch (G) { v(a, G) } } u(a, e) || (b === k && p(a, e), b === t && v(a, e)) } function u(a, e) {
                    var k; try {
                        if (a === e) throw new TypeError("A promises callback cannot return that same promise.");
                        if (e && ("function" === typeof e || "object" === f(e))) { var b = e.then; if ("function" === typeof b) return b.call(e, function (b) { k || (k = !0, e !== b ? p(a, b) : l(a, b)) }, function (e) { k || (k = !0, v(a, e)) }), !0 }
                    } catch (G) { return k || v(a, G), !0 } return !1
                } function p(a, e) { a !== e && u(a, e) || l(a, e) } function l(a, k) { a.state_ === F && (a.state_ = e, a.data_ = k, b(x, a)) } function v(a, k) { a.state_ === F && (a.state_ = e, a.data_ = k, b(y, a)) } function r(a) { var e = a.then_; a.then_ = void 0; for (a = 0; a < e.length; a++)d(e[a]) } function x(a) { a.state_ = k; r(a) } function y(a) {
                    a.state_ =
                        t; r(a)
                } function q(a) { if ("function" !== typeof a) throw new TypeError("Promise constructor takes a function argument"); if (!(this instanceof q)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."); this.then_ = []; g(a, this) } c.createPromiseCapability = function () { var a = {}; a.promise = new q(function (e, k) { a.resolve = e; a.reject = k }); return a }; var D = c.Promise, E = D && "resolve" in D && "reject" in D && "all" in D && "race" in D && function () {
                    var a;
                    new D(function (e) { a = e }); return "function" === typeof a
                }(); "undefined" !== typeof exports && exports ? (exports.Promise = E ? D : q, exports.Polyfill = q) : "function" === typeof define && h(24) ? define(function () { return E ? D : q }) : E || (c.Promise = q); var F = "pending", e = "sealed", k = "fulfilled", t = "rejected", w = function () { }, A = "undefined" !== typeof n ? n : setTimeout, B = [], I; q.prototype = {
                    constructor: q, state_: F, then_: null, data_: void 0, then: function (a, e) {
                        a = { owner: this, then: new this.constructor(w), fulfilled: a, rejected: e }; this.state_ === k || this.state_ ===
                            t ? b(d, a) : this.then_.push(a); return a.then
                    }, "catch": function (a) { return this.then(null, a) }
                }; q.all = function (a) { if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.all()."); return new this(function (e, k) { function b(a) { g++; return function (k) { t[a] = k; --g || e(t) } } for (var t = [], g = 0, c = 0, A; c < a.length; c++)(A = a[c]) && "function" === typeof A.then ? A.then(b(c), k) : t[c] = A; g || e(t) }) }; q.race = function (a) {
                    if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.race().");
                    return new this(function (e, k) { for (var b = 0, t; b < a.length; b++)(t = a[b]) && "function" === typeof t.then ? t.then(e, k) : e(t) })
                }; q.resolve = function (a) { return a && "object" === f(a) && a.constructor === this ? a : new this(function (e) { e(a) }) }; q.reject = function (a) { return new this(function (e, k) { k(a) }) }
            })("undefined" !== typeof window ? window : "undefined" !== typeof c ? c : "undefined" !== typeof self ? self : void 0)
        }).call(this, h(10), h(7).setImmediate)
    }, function (c, l, h) {
        (function (c, h) {
            (function (c, d) {
                function a(a) { delete x[a] } function b(g) {
                    if (y) setTimeout(b,
                        0, g); else { var e = x[g]; if (e) { y = !0; try { var k = e.callback, t = e.args; switch (t.length) { case 0: k(); break; case 1: k(t[0]); break; case 2: k(t[0], t[1]); break; case 3: k(t[0], t[1], t[2]); break; default: k.apply(d, t) } } finally { a(g), y = !1 } } }
                } function g() { D = function (a) { h.nextTick(function () { b(a) }) } } function f() { if (c.postMessage && !c.importScripts) { var a = !0, e = c.onmessage; c.onmessage = function () { a = !1 }; c.postMessage("", "*"); c.onmessage = e; return a } } function u() {
                    var a = "setImmediate$" + Math.random() + "$", e = function (e) {
                        e.source === c &&
                            "string" === typeof e.data && 0 === e.data.indexOf(a) && b(+e.data.slice(a.length))
                    }; c.addEventListener ? c.addEventListener("message", e, !1) : c.attachEvent("onmessage", e); D = function (e) { c.postMessage(a + e, "*") }
                } function p() { var a = new MessageChannel; a.port1.onmessage = function (a) { b(a.data) }; D = function (e) { a.port2.postMessage(e) } } function l() { var a = q.documentElement; D = function (e) { var k = q.createElement("script"); k.onreadystatechange = function () { b(e); k.onreadystatechange = null; a.removeChild(k); k = null }; a.appendChild(k) } }
                function n() { D = function (a) { setTimeout(b, 0, a) } } if (!c.setImmediate) {
                    var r = 1, x = {}, y = !1, q = c.document, D, E = Object.getPrototypeOf && Object.getPrototypeOf(c); E = E && E.setTimeout ? E : c; "[object process]" === {}.toString.call(c.process) ? g() : f() ? u() : c.MessageChannel ? p() : q && "onreadystatechange" in q.createElement("script") ? l() : n(); E.setImmediate = function (a) { "function" !== typeof a && (a = new Function("" + a)); for (var e = Array(arguments.length - 1), k = 0; k < e.length; k++)e[k] = arguments[k + 1]; x[r] = { callback: a, args: e }; D(r); return r++ };
                    E.clearImmediate = a
                }
            })("undefined" === typeof self ? "undefined" === typeof c ? this : c : self)
        }).call(this, h(10), h(12))
    }, function (c, l) { c.exports = {} }, function (c, l, h) {
        (function (c) {
            var f = function (c, d) { var a = function u(a) { a = this["catch"](a); return { cancel: d, promise: a, then: b.bind(a), "catch": u.bind(a) } }, b = function z(b, c) { b = this.then(b, c); return { cancel: d, promise: b, then: z.bind(b), "catch": a.bind(b) } }; return { cancel: d, promise: c, then: b.bind(c), "catch": a.bind(c) } }; c.CancellablePromise = function (c, d) {
                var a = !1, b, g = new Promise(function (g,
                    f) { b = function () { a || (d(), f("cancelled")) }; (new Promise(c)).then(function (b) { a = !0; g(b) }, function (b) { a = !0; f(b) }) }); return f(g, b)
            }; c.CancellablePromise.all = function (c) { var d = Promise.all(c); return f(d, function () { c.forEach(function (a) { a.cancel && a.cancel() }) }) }
        })("undefined" === typeof self ? void 0 : self)
    }, function (c, l, h) {
        (function (c, l) {
            var f = h(1); (function (d) {
                d.Module = {
                    INITIAL_MEMORY: 50331648, noExitRuntime: !0, devicePixelRatio: 1, cur_doc: null, cachePtrSize: 0, hasBufOwnership: !0, loaded: !1, initCb: null, cachePtr: null,
                    cleanupState: null, docs: {}, postEvent: function (a, b, g) { Module.workerMessageHandler.send("event", { docId: a, type: b, data: g }) }, postProgressiveRenderingStartEvent: function (a, b) { Module.postEvent(a, "progressiveRenderingStart", { pageNum: b }) }, postPagesUpdatedEvent: function (a, b, g, c) {
                        a = { pageDimensions: Module.GetPageDimensions(a) }; if (g) for (var d = 0; d < g.length; ++d)g[d] in a.pageDimensions ? (a.pageDimensions[g[d]].contentChanged = !0, c && (a.pageDimensions[g[d]].annotationsUnchanged = !0)) : console.warn("Invalid Page Number ".concat(g[d]));
                        Module.postEvent(b, "pagesUpdated", a); return a
                    }, postPagesRenamedEvent: function (a, b) { var g = {}; a = Module.PDFDocGetPageIterator(a, 1); for (var c = 1; Module.IteratorHasNext(a); ++c) { var d = Module.stackSave(), f = Module.IteratorCurrent(a); g[c] = Module.PageGetId(f); Module.IteratorNext(a); Module.stackRestore(d) } Module.postEvent(b, "pagesRenamed", { pageNumToId: g }) }, GetIndividualPageDimensions: function (a, b, c) { a = Module.PageGetPageInfo(c); a.id = Module.PageGetId(c); return a }, GetPageDimensionsRange: function (a, b, c) {
                        for (var g =
                            {}, d = Module.PDFDocGetPageIterator(a, b); b < c && Module.IteratorHasNext(d); ++b) { var f = Module.stackSave(), h = Module.IteratorCurrent(d); g[b] = this.GetIndividualPageDimensions(a, b, h); Module.IteratorNext(d); Module.stackRestore(f) } return g
                    }, GetPageDimensionsContentChangedList: function (a, b) {
                        b.sort(function (a, b) { return a - b }); for (var c = {}, d = b[0], f = b[b.length - 1], h = 0, l = Module.PDFDocGetPageIterator(a, d); d <= f && Module.IteratorHasNext(l); ++d) {
                            if (b[h] == d) {
                                for (++h; b[h] == d;)++h; var n = Module.stackSave(), r = Module.IteratorCurrent(l);
                                r = this.GetIndividualPageDimensions(a, d, r); r.contentChanged = !0; c[d] = r; Module.stackRestore(n)
                            } Module.IteratorNext(l)
                        } return c
                    }, GetPageDimensions: function (a) { try { var b = Module.stackSave(); var c = Module.GetPageCount(a); if (0 === c) throw "This document has no pages."; return Module.GetPageDimensionsRange(a, 1, c + 1) } finally { Module.stackRestore(b) } }, loadDoc: function (a, b) {
                        "undefined" === typeof Module && this._main(); var c = null; try {
                            var d = Module.stackSave(); a.customHandlerId && Module._TRN_PDFNetAddPDFTronCustomHandler(a.customHandlerId);
                            b = Module.CreateDoc(a, b); var f = Module.GetDoc(b); if (Module.PDFDocInitSecurityHandler(f)) return { docId: b, pageDimensions: Module.GetPageDimensions(f) }; c = { type: "NeedsPassword", errorData: { docId: b }, message: "This document requires a password" }
                        } catch (p) { c = { type: "InvalidPDF", message: p } } finally { Module.stackRestore(d) } throw c;
                    }, loadCanvas: function (a, b, c, d, f, h, l, n) {
                        return new Promise(function (g, p) {
                            var m = Module.GetDoc(a), r = b + 1, u = function () { g(Module.RasterizePage(m, r, c, d, h, f, l, n, a)) }, v = Module.docs[a].chunkStorage;
                            if (v) { var x = Module.GetDownloadData(m).downloader, e = v.getRequiredChunkOffsetArrays(x, r); v.keepChunks(e.have); x = function () { var a = v.getChunks(e.missing); Module.loadPromise = a.then(function () { var a = Module.loadPromise.cancelled; Module.loadPromise = null; a || u() })["catch"](function (a) { "cancelled" !== a ? p(a) : Module.loadPromise = null }) }; Module.loadPromise ? Module.loadPromise.then(x, x) : x() } else u()
                        })
                    }, loadResources: function (a, b) {
                        Module.Initialize(b); Object(f.b)("worker", "PDFNet initialized!"); Module._TRN_PDFNetSetDefaultDiskCachingEnabled(!1);
                        a = new Uint8Array(a); Module.PDFNetSetResourceData(a)
                    }, onRuntimeInitialized: function () {
                        "undefined" === typeof Module && (("undefined" !== typeof window ? window : self).Module = {}); (function (a) {
                            a.PDFDocExportXFDF = function (a, c) { a = Module.GetDoc(a); var b = Module.stackSave(); try { var g = c ? Module.PDFDocFDFExtract(a, c) : Module.PDFDocFDFExtract(a); var d = Module.FDFDocSaveAsXFDF(g); Module.stackRestore(b) } catch (z) { throw Module.stackRestore(b), z; } return d }; a.PageArrayToPageSet = function (a) {
                                var b = Module.stackSave(); try {
                                    var c =
                                        Module.PageSetCreate(); for (var d = 0; d < a.length; ++d)Module.PageSetAddPage(c, a[d]); Module.stackRestore(b)
                                } catch (p) { throw Module.stackRestore(b), p; } return c
                            }; a.cancelCurrent = function () { var a = Module.loadPromise; return a ? (a.cancel(), a.cancelled = !0) : (a = Module.cleanupState) ? (c(a.timeout), a.cleanupArr.reverse().forEach(function (a) { a() }), Module.cleanupState = null, !0) : !1 }; a.SetWorkerRestartCallback = function (a) { Module.workerRestartCallback = a }; a.XFDFMerge = function (a, c, d) {
                                if (c) {
                                    var b = Module.GetDoc(a), g = []; try {
                                        Object(f.b)("worker",
                                            "Merge XFDF of length ".concat(c.length)); var h = Module.GetUStringFromJSString(c, !0); g.push(function () { Module.UStringDestroy(h) }); var m = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_FDFDocCreateFromXFDF(h, m)); var r = Module.getValue(m, "i8*"); g.push(function () { Module.FDFDocDestroy(r) }); var l = Module.PDFDocFDFUpdate(b, r, d); l && l.length && Module.postEvent(a, "apRefChanged", { apRefChanges: l })
                                    } finally { g.reverse().forEach(function (a) { a() }) }
                                }
                            }; a.MergeXFDF = function (a, c, d) {
                                return new Promise(function (b,
                                    g) { var f = []; try { var h = Module.stackSave(); f[f.length] = function () { Module.stackRestore(h) }; Module.XFDFMerge(a, c, d); f.forEach(function (a) { a() }); b({}) } catch (r) { f.forEach(function (a) { a() }), g(r) } })
                            }; a.CreateBufferFile = function (a, c, d) { Module.MakeDev(a); var b = new ArrayBuffer(c); b = new Uint8Array(b); d = d ? 0 : 255; for (var g = 0; g < c; ++g)b[g] = d; Module.docs[a] = { buffer: b } }; a.ReadBufferFile = function (a, c) { var b = Module.docs[a].buffer; c && (Module.docs[a].buffer = new Uint8Array(b.buffer.slice(0))); return b }; a.RemoveBufferFile =
                                function (a) { Module.docs[a] = null }; a.SaveHelper = function (a, c, d) { d = "undefined" === typeof d ? 2 : d; Module.MakeDev(c); var b = Module._TRN_PDFDocSave(a, Module.GetUStringFromJSString(c), d, 0); Module.docs[c].sink = null; REX(b); d & 16 && Module.postPagesRenamedEvent(a, c); return Module.docs[c].buffer.buffer }; a.SaveDoc = function (a, c, f, h, p, l, n, r, x) {
                                    return new Promise(function (b, g) {
                                        var m = []; try {
                                            var v = Module.GetDoc(a), u = Module.stackSave(); m[m.length] = function () { Module.stackRestore(u) }; Module.XFDFMerge(a, c, n); var e = Module.allocate(8,
                                                "i8", Module.ALLOC_STACK), k = Module.allocate(Module.intArrayFromString('{"UseNonStandardRotation": true}'), "i8", Module.ALLOC_STACK); Module.setValue(e, k, "i8*"); Module.setValue(e + 4, 0, "i32"); Module._TRN_PDFDocRefreshAnnotAppearances(v, e); if (l) {
                                                    e = function (a) { a = new Uint8Array(a); d.FS.writeFile("watermarkFile", a); a = Module.ImageCreateFromFile(v, Module.GetUStringFromJSString("watermarkFile")); d.FS.unlink("watermarkFile"); return a }; var t = Module.ElementBuilderCreate(); m.push(function () { Module.ElementBuilderDestroy(t) });
                                                    var w = Module.ElementWriterCreate(); m.push(function () { Module.ElementWriterDestroy(w) }); try {
                                                        if (!l.hasOwnProperty("default")) throw Error("Watermark dictionary has no 'default' key!"); var A = e(l["default"]), B = Module.PDFDocGetPageIterator(v, 1); for (k = -1; Module.IteratorHasNext(B);) {
                                                            var y = Module.IteratorCurrent(B); Module.IteratorNext(B); k++; var q = k.toString(); try {
                                                                var z = void 0; if (l.hasOwnProperty(q)) { var C = l[q]; if (C) z = e(C); else continue } else z = A; var J = Module.PageGetPageInfo(y), G = Module.ElementBuilderCreateImage(t,
                                                                    z, 0, 0, J.width, J.height); Module.ElementWriterBegin(w, y); Module.ElementWriterWritePlacedElement(w, G); Module.ElementWriterEnd(w)
                                                            } catch (K) { console.warn("Watermark for page " + q + "can not be added due to error: " + K) }
                                                        }
                                                    } catch (K) { console.warn("Watermarks can not be added due to error: " + K) }
                                                } if (r) { var M = Module.SecurityHandlerCreate(x); M && (Module.SecurityHandlerChangeUserPasswordUString(M, r), Module.PDFDocSetSecurityHandler(v, M)) } A = 0; if (h) {
                                                    var H = Module.PDFDocGetRoot(v); (A = Module.ObjFindObj(H, "OpenAction")) && Module.ObjPut(H,
                                                        "__OpenActionBackup__", A); var N = Module.ObjPutDict(H, "OpenAction"); Module.ObjPutName(N, "Type", "Action"); Module.ObjPutName(N, "S", "JavaScript"); Module.ObjPutString(N, "JS", "this.print()")
                                                } var O = Module.SaveHelper(v, a, p); h && (A ? Module.ObjPut(H, "OpenAction", Module.ObjFindObj(H, "__OpenActionBackup__")) : Module.ObjErase(H, "OpenAction")); m.reverse().forEach(function (a) { a() }); if (f) b({ fileData: O }); else { var Q = O.slice(0); b({ fileData: Q }) }
                                        } catch (K) { m.reverse().forEach(function (a) { a() }), g(K) }
                                    })
                                }; a.SaveDocFromFixedElements =
                                    function (a, c, d, f, h, l) { a = Module.PDFDocCreateFromLayoutEls(a); a = Module.CreateDoc({ type: "ptr", value: a }); return Module.SaveDoc(a, c, !0, !1, d, f, h, l) }; a.GetCurrentCanvasData = function (a) {
                                        var b = Module.currentRenderData; if (!b) return null; a && REX(Module._TRN_PDFRasterizerUpdateBuffer(b.rast)); var c = Date.now(); if (b.bufPtr) {
                                            a = new Uint8Array(new ArrayBuffer(b.buf_size)); for (var d = 0, h = 0; h < b.out_height; ++h)for (var l = b.bufPtr + b.stride * h, n = 0; n < b.out_width; ++n)a[d++] = Module.HEAPU8[l + 2], a[d++] = Module.HEAPU8[l + 1], a[d++] =
                                                Module.HEAPU8[l], a[d++] = Module.HEAPU8[l + 3], l += 4
                                        } else a = Module.ReadBufferFile("b", a); Object(f.b)("bufferTiming", "Copy took ".concat(Date.now() - c)); return { pageBuf: a.buffer, pageWidth: b.out_width, pageHeight: b.out_height }
                                    }; a.RasterizePage = function (a, c, d, h, p, n, v, r, x) {
                                        return new Promise(function (b, g) {
                                            Module.currentRenderData = {}; var m = Module.currentRenderData; m.out_width = parseInt(d, 10); m.out_height = parseInt(h, 10); var u = []; u.push(function () { Module.currentRenderData = null }); try {
                                                var y = Module.stackSave(); u[u.length] =
                                                    function () { Module.stackRestore(y) }; var e = Module.GetPage(a, c), k = Module.PageGetPageWidth(e), t = Module.PageGetPageHeight(e); m.stride = 4 * m.out_width; m.buf_size = m.out_width * m.out_height * 4; Object(f.b)("Memory", "Created rasterizer"); m.rast = Module.PDFRasterizerCreate(); u.push(function () { Object(f.b)("Memory", "Destroyed rasterizer"); Module._TRN_PDFRasterizerDestroy(m.rast) }); if (v) { var w = Module.EMSCreateUpdatedLayersContext(a, v); 0 !== w && (REX(Module._TRN_PDFRasterizerSetOCGContext(m.rast, w)), u.push(function () { Module._TRN_OCGContextDestroy(w) })) } var A =
                                                        !1; r.hasOwnProperty("renderAnnots") ? (r.renderAnnots && (A = !0), REX(Module._TRN_PDFRasterizerSetDrawAnnotations(m.rast, r.renderAnnots ? 1 : 0))) : REX(Module._TRN_PDFRasterizerSetDrawAnnotations(m.rast, 0)); r.hasOwnProperty("highlightFields") && (r.highlightFields && (A = !0), REX(Module._TRN_PDFRasterizerSetHighlightFields(m.rast, r.highlightFields))); r.hasOwnProperty("antiAliasing") && REX(Module._TRN_PDFRasterizerSetAntiAliasing(m.rast, r.antiAliasing)); r.hasOwnProperty("pathHinting") && REX(Module._TRN_PDFRasterizerSetPathHinting(m.rast,
                                                            r.pathHinting)); if (r.hasOwnProperty("thinLinePixelGridFit")) { var B = !0; r.hasOwnProperty("thinLineStrokeAdjust") && (B = r.thinLineStrokeAdjust); REX(Module._TRN_PDFRasterizerSetThinLineAdjustment(m.rast, r.thinLinePixelGridFit, B)) } else r.hasOwnProperty("thinLineStrokeAdjust") && REX(Module._TRN_PDFRasterizerSetThinLineAdjustment(m.rast, !1, r.thinLineStrokeAdjust)); r.hasOwnProperty("imageSmoothing") ? (B = !1, r.hasOwnProperty("hqImageResampling") && (B = r.hqImageResampling), REX(Module._TRN_PDFRasterizerSetImageSmoothing(m.rast,
                                                                r.imageSmoothing, B))) : r.hasOwnProperty("hqImageResampling") && REX(Module._TRN_PDFRasterizerSetImageSmoothing(m.rast, !0, r.hqImageResampling)); r.hasOwnProperty("caching") && REX(Module._TRN_PDFRasterizerSetCaching(m.rast, r.caching)); r.hasOwnProperty("expGamma") && REX(Module._TRN_PDFRasterizerSetGamma(m.rast, r.expGamma)); r.hasOwnProperty("isPrinting") && (r.isPrinting && (A = !0), REX(Module._TRN_PDFRasterizerSetPrintMode(m.rast, r.isPrinting))); r.hasOwnProperty("colorPostProcessMode") && (r.colorPostProcessMode &&
                                                                    (A = !0), REX(Module._TRN_PDFRasterizerSetColorPostProcessMode(m.rast, r.colorPostProcessMode))); var I = Module.PageGetRotation(e); B = 1 === n || 3 === n; I = (1 === I || 3 === I) !== B; var q = Module.allocate(48, "i8", Module.ALLOC_STACK); if (p) {
                                                                        p.x1 = p[0]; p.y1 = p[1]; p.x2 = p[2]; p.y2 = p[3]; var C = Module.PageGetDefaultMatrix(e, 0), z = Module.Matrix2DInverse(C); p = Module.Matrix2DMultBBox(z, p); if (p.x2 < p.x1) { var J = p.x1; p.x1 = p.x2; p.x2 = J } p.y2 < p.y1 && (J = p.y1, p.y1 = p.y2, p.y2 = J); var G = m.out_width / (I ? p.y2 - p.y1 : p.x2 - p.x1); var M = Module.GetDefaultMatrixBox(e,
                                                                            p, n)
                                                                    } else M = Module.PageGetDefaultMatrix(e, n), G = m.out_width / (B ? t : k); Module.Matrix2DSet(q, G, 0, 0, G, 0, 0); Module.Matrix2DConcat(q, M); var H = Module.allocate(4, "i8", Module.ALLOC_STACK), N = Module.allocate(4, "i8", Module.ALLOC_STACK); A ? (m.bufPtr = Module._malloc(m.buf_size), Module._memset(m.bufPtr, r.pageTransparent ? 0 : 255, m.buf_size), u.push(function () { Module._free(m.bufPtr) })) : (Module.CreateBufferFile("b", m.buf_size, r.pageTransparent), u.push(function () { Module.RemoveBufferFile("b") })); var O = r.overprintMode; if (10 ===
                                                                        O) { REX(Module._TRN_PDFRasterizerSetOverprint(m.rast, 1)); var Q = Module.PDFRasterizerRasterizeSeparations(m.rast, e, m.out_width, m.out_height, q, 0, 0); b({ pageBuf: Q, pageWidth: m.out_width, pageHeight: m.out_height }) } else {
                                                    REX(Module._TRN_PDFRasterizerSetOverprint(m.rast, O)); A ? REX(Module._TRN_PDFRasterizerGetChunkRenderer(m.rast, e, m.bufPtr, m.out_width, m.out_height, m.stride, 4, !0, q, 0, 0, 0, H)) : REX(Module._TRN_PDFRasterizerGetChunkRendererPath(m.rast, e, Module.GetUStringFromJSString("b"), m.out_width, m.out_height, !0,
                                                        q, 0, 0, 0, H)); var K = Module.getValue(H, "i8*"); u.push(function () { REX(Module._TRN_ChunkRendererDestroy(K)) })
                                                } var R = (new Date).getTime(); r.useProgress && Module.postProgressiveRenderingStartEvent(x, c); var U = l(function S() {
                                                    try { if (REX(Module._TRN_ChunkRendererRenderForTimePeriod(K, 200, N)), Module.getValue(N, "i8")) Module.cleanupState.timeout = l(S); else { var a = Module.GetCurrentCanvasData(!1); Object(f.b)("worker", "Total Page Time ".concat((new Date).getTime() - R)); u.reverse().forEach(function (a) { a() }); b(a) } } catch (T) {
                                                        u.reverse().forEach(function (a) { a() }),
                                                            g(T)
                                                    }
                                                }); Module.cleanupState = { cleanupArr: u, timeout: U }; u.push(function () { Module.cleanupState = null })
                                            } catch (V) { u.reverse().forEach(function (a) { a() }), g(V) }
                                        })
                                    }; a.UpdatePassword = function (a, c) { try { var b = Module.stackSave(); var d = Module.GetDoc(a); return Module.PDFDocInitStdSecurityHandler(d, c) ? (d in downloadDataMap && REX(Module._TRN_PDFDocDownloaderInitialize(d, downloadDataMap[d].downloader)), { success: !0, pageDimensions: Module.GetPageDimensions(d) }) : { success: !1 } } finally { Module.stackRestore(b) } }; a.TriggerFullDownload =
                                        function (a) { return new Promise(function (b, c) { var d = Module.GetDoc(a); try { d in downloadDataMap && REX(Module.PDFDocDownloaderTriggerFullDownload(d, downloadDataMap[d].downloader)), b({}) } catch (p) { c(p) } }) }; a.InsertBlankPages = function (a, c, d, f) {
                                            return new Promise(function (b, g) {
                                                var h = [], m = Module.GetDoc(a); try {
                                                    var l = Module.stackSave(); h[h.length] = function () { Module.stackRestore(l) }; for (var p = c.length - 1; 0 <= p; --p) {
                                                        var n = Module.PDFDocGetPageIterator(m, c[p]), u = Module.PDFDocPageCreate(m, d, f); Module.PDFDocPageInsert(m,
                                                            n, u)
                                                    } var q = Module.postPagesUpdatedEvent(m, a); h.forEach(function (a) { a() }); b(q)
                                                } catch (F) { h.forEach(function (a) { a() }), g(F) }
                                            })
                                        }; a.InsertPages = function (a, c, d, f, h, l) {
                                            return new Promise(function (b, g) {
                                                var m = [], p = Module.GetDoc(a); try {
                                                    var n = Module.stackSave(); m[m.length] = function () { Module.stackRestore(n) }; if (c instanceof ArrayBuffer) { var r = Module.CreateDoc(c); var v = Module.GetDoc(r); m[m.length] = function () { Module.DeleteDoc(r) } } else v = Module.GetDoc(c); for (var u = d.length, e = Module.PageSetCreate(), k = 0; k < u; ++k)Module.PageSetAddPage(e,
                                                        d[k]); l ? Module.PDFDocInsertPages2(p, f, v, e, h) : Module.PDFDocInsertPages(p, f, v, e, h); var t; l || (t = Module.postPagesUpdatedEvent(p, a)); m.reverse().forEach(function (a) { a() }); b(t)
                                                } catch (w) { m.reverse().forEach(function (a) { a() }), g(w) }
                                            })
                                        }; a.MovePages = function (a, c, d) {
                                            return new Promise(function (b, g) {
                                                var f = [], h = Module.GetDoc(a); try {
                                                    var m = Module.stackSave(); f[f.length] = function () { Module.stackRestore(m) }; for (var l = c.length, p = Module.PageSetCreate(), n = 0; n < l; ++n)Module.PageSetAddPage(p, c[n]); Module.PDFDocMovePages(h,
                                                        d, p); var u = Module.postPagesUpdatedEvent(h, a); f.forEach(function (a) { a() }); b(u)
                                                } catch (E) { f.forEach(function (a) { a() }), g(E) }
                                            })
                                        }; a.RemovePages = function (a, c, d) {
                                            return new Promise(function (b, f) {
                                                var g = Module.GetDoc(a), h = []; try {
                                                    var m = Module.stackSave(); h[h.length] = function () { Module.stackRestore(m) }; for (var l = c.length - 1; 0 <= l; --l) { var p = Module.PDFDocGetPageIterator(g, c[l]); Module.IteratorHasNext(p) && (d ? Module.PDFDocPageRemove2(g, p) : Module.PDFDocPageRemove(g, p)) } var n; d || (n = Module.postPagesUpdatedEvent(g, a));
                                                    h.forEach(function (a) { a() }); b(n)
                                                } catch (D) { h.forEach(function (a) { a() }), f(D) }
                                            })
                                        }; a.RotatePages = function (a, c, d) {
                                            return new Promise(function (b, f) {
                                                var g = Module.GetDoc(a), h = []; try {
                                                    var m = Module.stackSave(); h[h.length] = function () { Module.stackRestore(m) }; var l = c.length, p = 0, n = Module.PDFDocGetPageIterator(g, c[0]), u = []; h.push(function () { Module._TRN_IteratorDestroy(n) }); for (var q = c[0]; Module.IteratorHasNext(n) && p < c[l - 1]; ++q) {
                                                        if (q === c[p]) {
                                                            var F = Module.IteratorCurrent(n), e = (Module.PageGetRotation(F) + d) % 4; Module.PageSetRotation(F,
                                                                e); u.push(q); p++
                                                        } Module.IteratorNext(n)
                                                    } var k = Module.postPagesUpdatedEvent(g, a, u, !0); h.reverse().forEach(function (a) { a() }); b(k)
                                                } catch (t) { h.reverse().forEach(function (a) { a() }), f(t) }
                                            })
                                        }; a.ExtractPages = function (a, c, d, f, h, l) {
                                            return new Promise(function (b, g) {
                                                var m = []; try {
                                                    var p = Module.stackSave(); m[m.length] = function () { Module.stackRestore(p) }; var n = function (a) { m.reverse().forEach(function (a) { a() }); g(a) }; Module.XFDFMerge(a, d, h); var r = Module.CreateEmptyDoc(); m[m.length] = function () { Module.DeleteDoc(r) }; var u =
                                                        Module.InsertPages(r, a, c, 1, !0, l).then(function () { return Module.SaveDoc(r, void 0, !0, !1, void 0, f) }).then(function (a) { m.reverse().forEach(function (a) { a() }); return a })["catch"](n); b(u)
                                                } catch (F) { n(F) }
                                            })
                                        }; a.CropPages = function (a, c, d, f, h, l) {
                                            return new Promise(function (b, g) {
                                                var m = Module.GetDoc(a), p = []; try {
                                                    var n = Module.stackSave(); p[p.length] = function () { Module.stackRestore(n) }; var r = c.length, u = 0, q = Module.PDFDocGetPageIterator(m, c[0]); p.push(function () { Module._TRN_IteratorDestroy(q) }); for (var e = [], k = c[0]; Module.IteratorHasNext(q) &&
                                                        u < c[r - 1]; ++k) {
                                                        if (k === c[u]) {
                                                            var t = Module.IteratorCurrent(q), w = Module.allocate(8, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetCropBox(t, w)); var A = Module.PageGetRotation(t), B = Module.getValue(w, "double"), v = Module.getValue(w + 8, "double"), L = Module.getValue(w + 16, "double"), P = Module.getValue(w + 24, "double"); 0 === A % 4 ? (Module.setValue(w, B + h, "double"), Module.setValue(w + 8, v + f, "double"), Module.setValue(w + 16, L - l, "double"), Module.setValue(w + 24, P - d, "double")) : 1 === A % 4 ? (Module.setValue(w, B + d, "double"), Module.setValue(w +
                                                                8, v + h, "double"), Module.setValue(w + 16, L - f, "double"), Module.setValue(w + 24, P - l, "double")) : 2 === A % 4 ? (Module.setValue(w, B + l, "double"), Module.setValue(w + 8, v + d, "double"), Module.setValue(w + 16, L - h, "double"), Module.setValue(w + 24, P - f, "double")) : 3 === A % 4 && (Module.setValue(w, B + f, "double"), Module.setValue(w + 8, v + l, "double"), Module.setValue(w + 16, L - d, "double"), Module.setValue(w + 24, P - h, "double")); Module.setValue(w + 32, 0, "double"); REX(Module._TRN_PageSetBox(t, 0, w)); REX(Module._TRN_PageSetBox(t, 1, w)); e.push(k); u++
                                                        } Module.IteratorNext(q)
                                                    } var z =
                                                        Module.postPagesUpdatedEvent(m, a, e, !0); p.reverse().forEach(function (a) { a() }); b(z)
                                                } catch (J) { p.reverse().forEach(function (a) { a() }), g(J) }
                                            })
                                        }
                        })("undefined" === typeof self ? this.Module : self.Module); this.loaded = !0; Module.initCb && Module.initCb()
                    }
                }
            })(self)
        }).call(this, h(7).clearImmediate, h(7).setImmediate)
    }, function (c, l, h) {
        (function (c) {
            function f(a) {
                "@babel/helpers - typeof"; return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) {
                    return a && "function" == typeof Symbol &&
                        a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                }, f(a)
            } var l = h(1), d = "undefined" !== typeof window ? window : self; d.global = d; (function (a) {
                a.currentFileString = "/current"; var b = 0, g = 0, h = {}, n = null; Module.chunkMax = 200; var p = function (a, k, b, c, d) {
                    var e = new XMLHttpRequest; return CancellablePromise(function (t, f) {
                        e.open("GET", a, !0); e.responseType = "arraybuffer"; e.onerror = function () { f("Network error occurred") }; e.onload = function () {
                            if (206 === this.status && e.response.byteLength === b) {
                                var a = new Int8Array(e.response);
                                t(a)
                            } else f("Download Failed")
                        }; var g = ["bytes=", k, "-", k + b - 1].join(""); e.setRequestHeader("Range", g); d && (e.withCredentials = d); c && Object.keys(c).forEach(function (a) { e.setRequestHeader(a, c[a]) }); e.send()
                    }, function () { e.abort() })
                }, q = function (a) { this.maxChunkNum = a; this.lruList = []; this.chunkMap = {} }; q.prototype = {
                    has: function (a) { return a in this.chunkMap }, insert: function (a, k) {
                        this.lruList.length >= this.maxChunkNum && (delete this.chunkMap[this.lruList[0]], this.lruList.shift()); this.lruList.push(k); this.chunkMap[k] =
                            a
                    }, get: function (a) { var e = this.lruList.lastIndexOf(a); 0 <= e && this.lruList.splice(e, 1); this.lruList.push(a); return this.chunkMap[a] }
                }; var v = function (a) { this.file = a; this.filePosition = 0; this.fileLength = a.size; this.chunkSize = 1048576; this.chunkCache = new q(8); this.reader = new FileReaderSync }; v.prototype = {
                    read: function (a, k, b) {
                        b = this.filePosition + b <= this.fileLength ? b : this.fileLength - this.filePosition; a = a.subarray(k, k + b); k = b; for (var e = this.filePosition % this.chunkSize, c = this.filePosition - e, d = 0; 0 < b;) {
                            if (this.chunkCache.has(c)) var t =
                                this.chunkCache.get(c); else t = new Int8Array(this.reader.readAsArrayBuffer(this.file.slice(c, c + this.chunkSize))), this.chunkCache.insert(t, c); var f = t.length, g = e + b; g <= f ? (a.set(t.subarray(e, g), d), this.filePosition += b, b = 0) : (a.set(t.subarray(e), d), this.filePosition += f - e, e = 0, c = this.filePosition, b = g - f, d = k - b)
                        } return k
                    }, seek: function (a) { this.filePosition = a }, close: function () { this.reader = this.file = null }, getPos: function () { return this.filePosition }, getTotalSize: function () { return this.fileLength }
                }; var r = function (a) {
                    this.data =
                        a; this.position = 0; this.length = this.data.length
                }; r.prototype = {
                    read: function (a, k, b) { b = this.position + b <= this.length ? b : this.length - this.position; a = a.subarray(k, k + b); k = this.data.subarray(this.position, this.position + b); a.set(k); this.position += b; return b }, write: function (a, k, b) { b = this.position + b <= this.length ? b : this.length - this.position; a = a.subarray(k, k + b); this.data.subarray(this.position, this.position + b).set(a); this.position += b; return b }, seek: function (a) { this.position = a }, close: function () { this.data = null },
                    getPos: function () { return this.position }, getTotalSize: function () { return this.length }
                }; var x = function (a, k, b, c, d) { "object" === f(a) ? (this.lruList = a.lruList, this.chunkMap = a.chunkMap, this.length = a.length, this.url = a.url, this.customHeaders = a.customHeaders, this.withCredentials = a.withCredentials) : (this.lruList = [], this.chunkMap = {}, this.chunkMap[k] = d, this.length = k, this.url = a, this.customHeaders = b, this.withCredentials = c) }; x.prototype = {
                    lruUpdate: function (a) {
                        var e = this.lruList.lastIndexOf(a); 0 <= e && this.lruList.splice(e,
                            1); this.lruList.push(a)
                    }, getChunk: function (a) {
                        var e = this; if (this.chunkMap[a]) this.lruUpdate(a); else {
                            var b = Math.min(a + 1048576, this.length) - 1, c = new XMLHttpRequest; c.open("GET", this.url, !1); c.responseType = "arraybuffer"; c.setRequestHeader("Range", ["bytes=", a, "-", b].join("")); this.withCredentials && (c.withCredentials = this.withCredentials); this.customHeaders && Object.keys(this.customHeaders).forEach(function (a) { c.setRequestHeader(a, e.customHeaders[a]) }); c.send(); if (200 === c.status || 206 === c.status) this.writeChunk(new Int8Array(c.response),
                                a); else throw Error("Failed to load data from");
                        } return this.chunkMap[a]
                    }, hadChunk: function (a) { return a in this.chunkMap }, hasChunk: function (a) { return this.chunkMap[a] }, getCacheData: function () { return this.chunkMap[this.length] }, getRequiredChunkOffsetArrays: function (a, k) {
                        var e = { have: [], downloading: [], missing: [] }; try {
                            var b = Module.stackSave(); var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_DownloaderGetRequiredChunksSize(a, k, c)); var d = Module.getValue(c, "i8*"); if (d) {
                                var f = Module._malloc(4 *
                                    d); REX(Module._TRN_DownloaderGetRequiredChunks(a, k, f, d)); for (a = 0; a < d; ++a) { var g = Module.getValue(f + 4 * a, "i8*"); this.hasChunk(g) ? e.have.push(g) : this.hadChunk(g) ? e.missing.push(g) : e.downloading.push(g) }
                            }
                        } finally { f && Module._free(f), Module.stackRestore(b) } return e
                    }, keepVisibleChunks: function (a, k) { for (var e = k.length, b = Module.chunkMax / 2, c = 0, d = 0; d < e; ++d) { var f = this.getRequiredChunkOffsetArrays(a, k[d]), g = f.have, h = g.length; c += h; if (c > b) { this.keepChunks(g.slice(0, h - c + b)); break } this.keepChunks(f.have) } }, getChunkAsync: function (a) {
                        var e =
                            this, b = a + 1048576, c = 1048576; b > this.length && (c -= b - this.length); return p(this.url, a, c, this.customHeaders, this.withCredentials).then(function (k) { e.writeChunk(k, a) })
                    }, getChunks: function (a) { for (var e = a.length, b = Array(e), c = 0; c < e; ++c)b[c] = this.getChunkAsync(a[c]); return CancellablePromise.all(b) }, keepChunks: function (a) { for (var e = a.length, b = 0; b < e; ++b)this.lruUpdate(a[b]) }, writeChunk: function (a, k, b) {
                        b = b || 0; var e = this.chunkMap[k], c = a.length, d = this.lruList.length >= Module.chunkMax && !e; 1048576 !== c || a.buffer.byteLength !==
                            c ? (d ? (e = this.lruList.shift(), d = this.chunkMap[e], 1048576 > d.length && (d = new Int8Array(1048576)), this.chunkMap[e] = null) : d = e ? this.chunkMap[k] : new Int8Array(1048576), d.subarray(b, b + c).set(a), a = d) : d && (e = this.lruList.shift(), this.chunkMap[e] = null); this.lruUpdate(k); this.chunkMap[k] = a
                    }
                }; var y = function (a) { this.chunkStorage = a; this.position = 0; this.length = this.chunkStorage.length }; y.prototype = {
                    read: function (a, k, b) {
                        var e = this.position + b <= this.length, c = e ? b : this.length - this.position; if (this.position < this.length) {
                            var d;
                            for (d = 0; d < c;) { var f = this.position % 1048576; var g = this.position - f; var t = c - d, h = a.subarray(k + d, k + d + t); if (this.chunkStorage.hadChunk(g)) g = this.chunkStorage.getChunk(g).subarray(f, f + t), h.set(g), h = g.length, d += h, this.position += h; else for (this.position += t; d < c; ++d)h[d] = 0 }
                        } if (!e) { k += c; if (b -= c) e = this.chunkStorage.getCacheData(), b > e.length && (b = e.length), d = this.position - this.length, a = a.subarray(k, k + b), g = e.subarray(d, d + b), a.set(g); this.position += b; return c + b } return c
                    }, write: function (a, k, b) {
                        var e = this.position + b <=
                            this.length, c = this.position + b <= this.length ? b : this.length - this.position, d = a.subarray(k, k + c), f = this.position % 1048576; this.chunkStorage.writeChunk(d, this.position - f, f); this.position += c; if (!e) { d = k + c; if (b -= c) k = this.chunkStorage.getCacheData(), b > k.length && (b = k.length), e = this.position - this.length, d = a.subarray(d, d + b), k.subarray(e, e + b).set(d); this.position += b; return c + b } return c
                    }, seek: function (a) { this.position = a }, close: function () { this.chunkStorage = null }, getPos: function () { return this.position }, getTotalSize: function () { return this.length }
                };
                var C = function (a) { this.docId = a; this.length = 0; this.data = new Int8Array(8192); this.position = 0 }; C.prototype = {
                    seek: function (a) { this.position = a }, close: function () { var a = new Int8Array(this.data.buffer.slice(0, this.length)); Module.ChangeDocBackend(this.docId, { ptr: Module.GetDoc(this.docId), buffer: a }); this.data = null }, getPos: function () { return this.position }, getTotalSize: function () { return this.length }, read: function (a, k, b) {
                        var e = this.data.length; b = b + k < e ? b : e - k; a = a.subarray(k, k + b); k = this.data.subarray(this.position,
                            this.position + b); a.set(k); this.position += b; return b
                    }, write: function (a, b, c) { for (var e = this.position + c, k = this.data.length; e > k;) { k = Math.max(k * (16777216 < k ? 1.5 : 2), e); var d = new Int8Array(k); d.set(this.data.subarray(0, this.length), 0); this.data = d } a = a.subarray(b, b + c); this.data.set(a, this.position); this.position += c; this.position > this.length && (this.length = this.position); return c }
                }; var D = {
                    IsSink: function (a) { return 66 === (a.flags & 255) }, open: function (a) {
                        var e = a.path.slice(1); this.IsSink(a) ? (a.provider = new C(e),
                            Module.docs[e].sink = a.provider) : a.provider = Module.docs[e].sink ? new r(Module.docs[e].sink.data) : Module.docs[e].chunkStorage ? new y(Module.docs[e].chunkStorage) : Module.docs[e].buffer ? new r(Module.docs[e].buffer) : new v(Module.docs[e].file)
                    }, close: function (a) { a.provider.close() }, read: function (a, b, c, d, f) { return a.provider.read(b, c, d) }, llseek: function (a, b, c) { a = a.provider; 1 === c ? b += a.getPos() : 2 === c && (b = a.getTotalSize() + b); if (0 > b) throw new FS.ErrnoError(d.ERRNO_CODES.EINVAL); a.seek(b); return b }, write: function (a,
                        b, c, d, f) { return d ? a.provider.write(b, c, d) : 0 }
                }; d.THROW = function (a) { throw { type: "PDFWorkerError", message: a }; }; var E = function (e) { return "Exception: \n\t Message: ".concat(a.GetJSStringFromCString(Module._TRN_GetMessage(e)), "\n\t Filename: ").concat(a.GetJSStringFromCString(Module._TRN_GetFileName(e)), "\n\t Function: ").concat(a.GetJSStringFromCString(Module._TRN_GetFunction(e)), "\n\t Linenumber: ").concat(a.GetJSStringFromCString(Module._TRN_GetLineNum(e))) }; a.GetErrToString = E; d.REX = function (a) { a && THROW(E(a)) };
                a.Initialize = function (a) { var e = Module.stackSave(); a = a ? Module.allocate(Module.intArrayFromString(a), "i8", Module.ALLOC_STACK) : 0; REX(Module._TRN_PDFNetInitialize(a)); Module.stackRestore(e) }; a.GetDoc = function (a) { if (a in Module.docs) return Module.docs[a].ptr; throw { type: "InvalidDocReference", message: "Unable to access Document id=".concat(a, ". The document appears to be invalid or was deleted.") }; }; a.clearDocBackend = function () {
                    null !== Module.cachePtr ? (Module.hasBufOwnership && Module._free(Module.cachePtr),
                        Module.cachePtr = null) : Module.docs[a.currentFileString] && delete Module.docs[a.currentFileString]
                }; a.MakeDev = function (a) { if (!h[a]) { var e = FS.makedev(3, 5); FS.registerDevice(e, D); FS.mkdev(a, 511, e); h[a] = !0 } }; a.CreateDocFileBackend = function (a, b) { Module.MakeDev(b); var e = Module.allocate(4, "i8", Module.ALLOC_STACK); Module.docs[b] = { file: a }; a = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocCreateFromFilePath(a, e)); e = Module.getValue(e, "i8*"); Module.docs[b].ptr = e }; a.InsertImageIntoDoc =
                    function (a, b, c) {
                        var e = []; try {
                            var k = Module.ElementBuilderCreate(); e.push(function () { Module.ElementBuilderDestroy(k) }); var d = Module.ElementWriterCreate(); e.push(function () { Module.ElementWriterDestroy(d) }); if (c) { var f = c.width; var g = c.height } else f = Module.ImageGetImageWidth(b), g = Module.ImageGetImageHeight(b), c = f / g, c > 612 / 792 ? (f = 612, g = parseInt(f / c, 10)) : (g = 792, f = parseInt(g * c, 10)); var t = Module.ElementBuilderCreateImage(k, b, 0, 0, f, g), h = Module.PDFDocPageCreate(a, f, g); Module.ElementWriterBegin(d, h); Module.ElementWriterWritePlacedElement(d,
                                t); Module.ElementWriterEnd(d); Module.PDFDocPagePushBack(a, h)
                        } finally { e.reverse().forEach(function (a) { a() }) }
                    }; var F = function (a, b, c) {
                        "object" === f(a) ? (this.m_pages = a.m_pages, this.m_has_named_dests = a.m_has_named_dests, this.m_finished_download = a.m_finished_download, this.m_has_outline = a.m_has_outline, this.m_current_page = a.m_current_page, this.m_id = a.m_id, this.size = a.size, this.timeout = a.timeout, this.eventPageArray = a.eventPageArray, this.requirePageCallbacks = a.requirePageCallbacks) : (this.m_pages = [], this.m_has_outline =
                            this.m_finished_download = this.m_has_named_dests = !1, this.m_current_page = 1, this.m_id = c, this.size = a, this.timeout = null, this.eventPageArray = [], this.requirePageCallbacks = {}); this.downloadUserData = Module.createDownloadUserData(b, c)
                    }; F.prototype = {
                        getJSUrl: function () { return Module.extractDownloadUserData(this.downloadUserData).url }, getDocId: function () { return Module.extractDownloadUserData(this.downloadUserData).docId }, destroyUserData: function () {
                            this.m_id in Module.withCredentials && delete Module.withCredentials[this.m_id];
                            this.m_id in Module.customHeadersMap && delete Module.customHeadersMap[this.m_id]; Module.destroyDownloadUserData(this.downloadUserData)
                        }
                    }; a.createDownloadUserData = function (a, b) { a = Module.allocate(Module.intArrayFromString(a), "i8", Module.ALLOC_NORMAL); var e = Module.allocate(8, "i8", Module.ALLOC_NORMAL); Module.setValue(e, a, "i8*"); Module.setValue(e + 4, parseInt(b, 10), "i32"); return this.downloadUserData = e }; a.extractDownloadUserData = function (e) {
                        var b = Module.getValue(e, "i8*"); b = a.GetJSStringFromCString(b); e = Module.getValue(e +
                            4, "i32").toString(); return { url: b, docId: e }
                    }; a.destroyDownloadUserData = function (a) { Module._free(Module.getValue(a, "i8*")); Module._free(a) }; d.downloadDataMap = {}; Module.customHeadersMap = {}; Module.withCredentials = {}; a.GetDownloadData = function (a) { if (a in downloadDataMap) return downloadDataMap[a] }; a.DownloaderHint = function (a, b) {
                        var e = Module.GetDoc(a), k = downloadDataMap[e]; b.currentPage && (k.m_current_page = b.currentPage); if (b.visiblePages) {
                            var c = b.visiblePages; for (b = 0; b < c.length; ++b)++c[b]; Object.keys(k.requirePageCallbacks).forEach(function (a) {
                                k.requirePageCallbacks.hasOwnProperty(a) &&
                                    c.push(parseInt(a, 10))
                            }); (b = Module.docs[a].chunkStorage) && b.keepVisibleChunks(k.downloader, c); a = c.length; var d = Module.allocate(4 * a, "i8", Module.ALLOC_STACK); for (b = 0; b < a; ++b)Module.setValue(d + 4 * b, c[b], "i32"); REX(Module._TRN_PDFDocDownloadPages(e, d, a, 1, 0))
                        }
                    }; a.RequirePage = function (a, b) {
                        return new Promise(function (e, k) {
                            k = Module.GetDoc(a); var c = downloadDataMap[k]; !c || c.m_finished_download || c.m_pages[b] ? e() : (b in c.requirePageCallbacks ? c.requirePageCallbacks[b].push(e) : c.requirePageCallbacks[b] = [e], e = Module.allocate(4,
                                "i8", Module.ALLOC_STACK), Module.setValue(e, b, "i32"), Module._TRN_PDFDocDownloadPages(k, e, 1, 0, 0))
                        })
                    }; a.IsLinearizationValid = function (a) { a = Module.GetDoc(a); if (a = downloadDataMap[a]) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_DownloaderIsLinearizationValid(a.downloader, b)); return 0 !== Module.getValue(b, "i8") } return !1 }; a.ShouldRunRender = function (a, b) { a = Module.GetDoc(a); return (a = downloadDataMap[a]) ? a.m_finished_download ? !0 : a.m_pages[b] : !0 }; a.postPagesDownloadedEvent = function (a, b, c) {
                        a =
                            { pageDimensions: Module.GetPageDimensionsContentChangedList(a, c), pageNumbers: c }; Module.postEvent(b, "pagesDownloaded", a); return a
                    }; a.createCallbacksStruct = function (a) {
                        if (!n) {
                            var b = function (a) { return function (b) { var e = arguments; b in downloadDataMap ? a.apply(this, e) : c(function () { b in downloadDataMap && a.apply(this, e) }, 0) } }; n = {
                                downloadProc: Module.addFunction(function (a, b, e, c, k) {
                                    c = Module.extractDownloadUserData(c); var d = c.docId; p(c.url, b, e, Module.customHeadersMap[d], Module.withCredentials[d]).then(function (c) {
                                        d in
                                            Module.docs && Module.docs[d].chunkStorage && Module.docs[d].chunkStorage.writeChunk(c, b); Module._TRN_DownloadComplete(0, b, e, a)
                                    })
                                }, "viiiii"), notifyUpdatePage: Module.addFunction(b(function (a, b, e, c) { var k = downloadDataMap[a]; k.m_pages[b] = !0; var d = k.eventPageArray; if (b in k.requirePageCallbacks) for (e = k.requirePageCallbacks[b], c = 0; c < e.length; ++c)e[c](); k.timeout ? d.push(b) : (d = k.eventPageArray = [b], k.timeout = setTimeout(function () { Module.postPagesDownloadedEvent(a, k.m_id, d); k.timeout = null }, 100)) }), "viiii"), notifyUpdateOutline: Module.addFunction(b(function (a,
                                    b) { a = downloadDataMap[a]; a.m_has_outline || (a.m_has_outline = !0, Module.postEvent(a.m_id, "bookmarksUpdated", {})) }), "vii"), notifyUpdateNamedDests: Module.addFunction(b(function (a, b) { a = downloadDataMap[a]; a.m_has_named_dests || (a.m_has_named_dests = !0) }), "vii"), notifyUpdateThumb: Module.addFunction(b(function (a, b) { }), "viiii"), notifyFinishedDownload: Module.addFunction(b(function (a, b) { a = downloadDataMap[a]; a.m_finished_download || (a.m_finished_download = !0, Module.postEvent(a.m_id, "documentComplete", {})) }), "vii"),
                                notifyDocumentError: Module.addFunction(function (a, b) { }, "viii"), getCurrentPage: Module.addFunction(function (a, b) { return downloadDataMap[a].m_current_page }, "iii")
                            }
                        } b = Module.allocate(40, "i8", Module.ALLOC_STACK); Module.setValue(b, n.downloadProc, "i8*"); Module.setValue(b + 4, a, "i8*"); Module.setValue(b + 8, n.notifyUpdatePage, "i8*"); Module.setValue(b + 12, n.notifyUpdateOutline, "i8*"); Module.setValue(b + 16, n.notifyUpdateNamedDests, "i8*"); Module.setValue(b + 20, n.notifyUpdateThumb, "i8*"); Module.setValue(b + 24, n.notifyFinishedDownload,
                            "i8*"); Module.setValue(b + 28, n.notifyDocumentError, "i8*"); Module.setValue(b + 32, n.getCurrentPage, "i8*"); Module.setValue(b + 36, 0, "i8*"); return b
                    }; a.CreateDocDownloaderBackend = function (a, b, c) {
                        var e = a.url, k = a.size, d = a.customHeaders, f = a.withCredentials, g = a.shouldUseMinimumDownloads; d && (Module.customHeadersMap[c] = d); f && (Module.withCredentials[c] = f); var h = a.downloadData ? new F(a.downloadData, e, c, d, f) : new F(a.size, e, c, d, f); var t = Module.createCallbacksStruct(h.downloadUserData), m = Module.allocate(4, "i8", Module.ALLOC_STACK);
                        Module.MakeDev(c); a.chunkStorage ? e = new x(a.chunkStorage) : (a = new Int8Array(new ArrayBuffer(Math.ceil((a.size + 1048576 - 1) / 1048576 / 8))), e = new x(e, k, d, f, a)); Module.docs[c] = { chunkStorage: e }; REX(Module._TRN_DownloaderCreate(t, k, Module.GetUStringFromJSString(c), g, m)); h.downloader = Module.getValue(m, "i8*"); if (k = Module._TRN_PDFDocCreateFromFilter(h.downloader, b)) Module._TRN_FilterDestroy(h.downloader), REX(k); b = Module.getValue(b, "i8*"); Module.docs[c].ptr = b; Module.PDFDocInitSecurityHandler(b) && REX(Module._TRN_PDFDocDownloaderInitialize(b,
                            h.downloader)); downloadDataMap[b] = h
                    }; a.CreateDocBackend = function (e, c) {
                        var k = e.value, d = e.extension, g = e.type, h = Module.allocate(4, "i8", Module.ALLOC_STACK), m = Module.stackSave(); try {
                            if (k) if ("ptr" === g) Module.docs[c] = { ptr: k }; else {
                                k.shouldUseMinimumDownloads = e.shouldUseMinimumDownloads; var l = "object" === f(k) && k.url; g = d && "pdf" !== d; if (l) a.CreateDocDownloaderBackend(k, h, c); else {
                                    var n = k instanceof ArrayBuffer; l = n ? "buffer" : "file"; if (n && (k = new Uint8Array(k), 10485760 > k.length + b && !g)) {
                                        b += k.length; var p = k.length, r =
                                            Module._malloc(k.length); Module.HEAPU8.set(k, r); REX(Module._TRN_PDFDocCreateFromBuffer(r, p, h)); var q = Module.getValue(h, "i8*"); Module.docs[c] = { ptr: q, bufPtr: r, bufPtrSize: p, ownership: !0 }; Module.docs[c].extension = d; return
                                    } Module.MakeDev(c); n = {}; n[l] = k; Module.docs[c] = n; if (g) {
                                        if (e.pageSizes && e.pageSizes.length) var v = e.pageSizes[0]; else e.defaultPageSize && (v = e.defaultPageSize); var u = Module.GetUStringFromJSString(c); REX(Module._TRN_PDFDocCreate(h)); q = Module.getValue(h, "i8*"); var x = Module.ImageCreateFromFile(q,
                                            u); Module.InsertImageIntoDoc(q, x, v)
                                    } else { var y = Module.allocate(Module.intArrayFromString(c), "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocCreateFromFilePath(y, h)); q = Module.getValue(h, "i8*") } Module.docs[c].extension = d; Module.docs[c].ptr = q
                                }
                            } else REX(Module._TRN_PDFDocCreate(h)), q = Module.getValue(h, "i8*"), Module.docs[c] = { ptr: q }, Module.docs[c].extension = d
                        } finally { Module.stackRestore(m) }
                    }; a.ChangeDocBackend = function (a, c) {
                        var e = Module.docs[a]; e ? (e.bufPtr && e.ownership && (Module._free(e.bufPtr), b -= e.bufPtrSize),
                            delete Module.docs[a]) : Object(l.d)("Trying to delete document ".concat(a, " that does not exist.")); Module.docs[a] = c
                    }; a.DeleteDoc = function (a) { var e = Module.docs[a]; e ? (e.ptr && (e.ptr in downloadDataMap && (clearTimeout(downloadDataMap[e.ptr].timeout), downloadDataMap[e.ptr].destroyUserData(), delete downloadDataMap[e.ptr]), Module.PDFDocDestroy(e.ptr)), e.bufPtr && e.ownership && (Module._free(e.bufPtr), b -= e.bufPtrSize), delete Module.docs[a]) : Object(l.d)("Trying to delete document ".concat(a, " that does not exist.")) };
                a.CreateDoc = function (b, c) { if ("id" === b.type) return Module.docPtrStringToIdMap[b.value]; if (!c) { do c = (++g).toString(); while (c in Module.docs) } Module.hasBufOwnership = !0; a.CreateDocBackend(b, c); return c }; a.CreateEmptyDoc = function () { var a = (++g).toString(), b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocCreate(b)); b = Module.getValue(b, "i8*"); Module.docs[a] = { ptr: b }; return a }; a.PDFDocCreateFromLayoutEls = function (a) {
                    var b = new Uint8Array(a); a = Module._malloc(b.length); var e = Module.stackSave(),
                        c = Module.allocate(4, "i8", Module.ALLOC_STACK); Module.HEAPU8.set(b, a); b = Module._TRN_PDFDocCreateFromLayoutEls(a, b.length, c); c = Module.getValue(c, "i8*"); Module._free(a); Module.stackRestore(e); REX(b); return c
                }; a.GetPageCount = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocGetPageCount(a, b)); return Module.getValue(b, "i8*") }; a.GetPage = function (a, b) {
                    var e = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocGetPage(a, b, e)); a = Module.getValue(e, "i8*"); Module.PageIsValid(a) ||
                        THROW("Trying to access page that doesn't exist at index ".concat(b)); return a
                }; a.PageGetPageWidth = function (a) { var b = Module.allocate(8, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetPageWidth(a, 1, b)); return Module.getValue(b, "double") }; a.PageGetPageHeight = function (a) { var b = Module.allocate(8, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetPageHeight(a, 1, b)); return Module.getValue(b, "double") }; a.PageGetDefaultMatrix = function (a, b) {
                    var e = Module.allocate(48, "i8", Module.ALLOC_STACK); b || (b = 0); REX(Module._TRN_PageGetDefaultMatrix(a,
                        !0, 1, b, e)); return e
                }; a.GetMatrixAsArray = function (a) { for (var b = [], e = 0; 6 > e; ++e)b[e] = Module.getValue(a + 8 * e, "double"); return b }; a.PageGetPageInfo = function (a) { var b = Module.allocate(48, "i8", Module.ALLOC_STACK), e = Module.allocate(8, "i8", Module.ALLOC_STACK), c = Module.allocate(8, "i8", Module.ALLOC_STACK), d = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetPageInfo(a, !0, 1, 0, e, c, b, d)); return { rotation: Module.getValue(d, "i8*"), width: Module.getValue(e, "double"), height: Module.getValue(c, "double"), matrix: Module.GetMatrixAsArray(b) } };
                a.GetUStringFromJSString = function (a, b) { var e = Module.allocate(4, "i8", Module.ALLOC_STACK), c = 2 * (a.length + 1), k = Module.allocate(c, "i8", b ? Module.ALLOC_NORMAL : Module.ALLOC_STACK); Module.stringToUTF16(a, k, c); a = Module._TRN_UStringCreateFromString(k, e); b && Module._free(k); REX(a); return Module.getValue(e, "i8*") }; a.GetJSStringFromUString = function (a) { var b = Module.allocate(4, "i16*", Module.ALLOC_STACK); REX(Module._TRN_UStringCStr(a, b)); return Module.UTF16ToString(Module.getValue(b, "i16*")) }; a.GetJSStringFromCString =
                    function (a) { return Module.UTF8ToString(a) }; a.PDFNetSetResourceData = function (a) { Module.res_ptr = Module._malloc(a.length); Module.HEAPU8.set(a, Module.res_ptr); REX(Module._TRN_PDFNetSetResourceData(Module.res_ptr, a.length)); Module.res_ptr_size = a.length }; a.PDFDocDestroy = function (a) { REX(Module._TRN_PDFDocDestroy(a)) }; a.VectorGetSize = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_VectorGetSize(a, b)); return Module.getValue(b, "i32") }; a.VectorGetAt = function (a, b) {
                        var e = Module.allocate(1,
                            "i8*", Module.ALLOC_STACK); REX(Module._TRN_VectorGetAt(a, b, e)); return Module.getValue(e, "i8*")
                    }; a.VectorDestroy = function (a) { REX(Module._TRN_VectorDestroy(a)) }; a.PDFRasterizerCreate = function () { var a = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFRasterizerCreate(0, a)); return Module.getValue(a, "i8*") }; a.ExtractSeparationData = function (a) {
                        var b = Module.getValue(a, "i8*"), c = Module.getValue(a + 4, "i32"), e = Module.getValue(a + 8, "i8*"), d = Module.HEAPU8[a + 12], f = Module.HEAPU8[a + 13], g = Module.HEAPU8[a +
                            14]; a = Module.HEAPU8[a + 15]; var h = new Uint8Array(c); h.set(Module.HEAPU8.subarray(b, b + c)); b = Module.GetJSStringFromUString(e); return { color: [d, f, g, a], data: h.buffer, name: b }
                    }; a.ExtractApRefChangeData = function (a) { var b = Module.getValue(a, "i32"), c = Module.getValue(a + 4, "i32"), e = Module.getValue(a + 8, "i32"), d = Module.getValue(a + 12, "i32"); a = 0 !== Module.getValue(a + 16, "i8"); return { oldObjNum: b, discardAppearance: a, newObjNum: c, genNum: e, pageNum: d } }; a.PDFRasterizerRasterizeSeparations = function (a, b, c, d, f, g, h) {
                        var e = Module.allocate(8,
                            "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFRasterizerRasterizeSeparations(a, b, c, d, f, g, h, e)); a = Module.getValue(e, "i8*"); b = Module.VectorGetSize(a); c = Array(b); for (d = 0; d < b; ++d)f = Module.VectorGetAt(a, d), c[d] = Module.ExtractSeparationData(f); Module.VectorDestroy(a); return c
                    }; a.PageGetRotation = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetRotation(a, b)); return Module.getValue(b, "i8*") }; a.PageGetId = function (a) {
                        var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetSDFObj(a,
                            b)); b = Module.getValue(b, "i8*"); a = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjGetObjNum(b, a)); a = Module.getValue(a, "i32"); var c = Module.allocate(2, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjGetGenNum(b, c)); c = Module.getValue(c, "i16"); return "".concat(a, "-").concat(c)
                    }; a.PageSetRotation = function (a, b) { REX(Module._TRN_PageSetRotation(a, b)) }; a.GetDefaultMatrixBox = function (a, b, c) {
                        var e = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetRotation(a, e)); a = (Module.getValue(e, "i32") +
                            c) % 4; c = Module.allocate(48, "i8", Module.ALLOC_STACK); switch (a) { case 0: return REX(Module._TRN_Matrix2DSet(c, 1, 0, 0, -1, -b.x1, b.y2)), c; case 1: return REX(Module._TRN_Matrix2DSet(c, 0, 1, 1, 0, -b.y1, -b.x1)), c; case 2: return REX(Module._TRN_Matrix2DSet(c, -1, 0, 0, 1, b.x2, -b.y1)), c; case 3: return REX(Module._TRN_Matrix2DSet(c, 0, -1, -1, 0, b.y2, b.x2)), c }throw Error("Yikes, we don't support that rotation type");
                    }; a.Matrix2DMultBBox = function (a, b) {
                        var c = Module.allocate(8, "i8", Module.ALLOC_STACK), e = Module.allocate(8, "i8", Module.ALLOC_STACK);
                        Module.setValue(c, b.x1, "double"); Module.setValue(e, b.y1, "double"); REX(Module._TRN_Matrix2DMult(a, c, e)); b.x1 = Module.getValue(c, "double"); b.y1 = Module.getValue(e, "double"); Module.setValue(c, b.x2, "double"); Module.setValue(e, b.y2, "double"); REX(Module._TRN_Matrix2DMult(a, c, e)); b.x2 = Module.getValue(c, "double"); b.y2 = Module.getValue(e, "double"); return b
                    }; a.Matrix2DMult = function (a, b) {
                        var c = Module.allocate(8, "i8", Module.ALLOC_STACK), e = Module.allocate(8, "i8", Module.ALLOC_STACK); Module.setValue(c, b.x, "double");
                        Module.setValue(e, b.y, "double"); REX(Module._TRN_Matrix2DMult(a, c, e)); b.x = Module.getValue(c, "double"); b.y = Module.getValue(e, "double"); return b
                    }; a.Matrix2DConcat = function (a, b) { var c = Module.getValue(b, "double"), e = Module.getValue(b + 8, "double"), d = Module.getValue(b + 16, "double"), k = Module.getValue(b + 24, "double"), f = Module.getValue(b + 32, "double"); b = Module.getValue(b + 40, "double"); REX(Module._TRN_Matrix2DConcat(a, c, e, d, k, f, b)) }; a.Matrix2DSet = function (a, b, c, d, f, g, h) { REX(Module._TRN_Matrix2DSet(a, b, c, d, f, g, h)) };
                a.IteratorHasNext = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_IteratorHasNext(a, b)); return 0 !== Module.getValue(b, "i8") }; a.IteratorCurrent = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_IteratorCurrent(a, b)); return Module.getValue(Module.getValue(b, "i8*"), "i8*") }; a.IteratorNext = function (a) { REX(Module._TRN_IteratorNext(a)) }; a.PageGetNumAnnots = function (a) {
                    var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetNumAnnots(a,
                        b)); return Module.getValue(b, "i32")
                }; a.PageGetAnnot = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetAnnot(a, b, c)); return Module.getValue(c, "i8*") }; a.PageAnnotRemove = function (a, b) { REX(Module._TRN_PageAnnotRemoveByIndex(a, b)) }; a.AnnotGetType = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_AnnotGetType(a, b)); return Module.getValue(b, "i32") }; a.AnnotHasAppearance = function (a) {
                    var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_AnnotGetAppearance(a,
                        0, 0, b)); return 0 !== Module.getValue(b, "i8")
                }; a.AnnotRefreshAppearance = function (a) { REX(Module._TRN_AnnotRefreshAppearance(a)) }; a.ObjErase = function (a, b) { b = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjEraseFromKey(a, b)) }; a.GetJSDoubleArrFromCore = function (a, b) { for (var c = Array(b), e = 0; e < b; ++e)c[e] = Module.getValue(a, "double"), a += 8; return c }; a.GetJSIntArrayFromCore = function (a, b) { for (var c = Array(b), e = 0; e < b; ++e)c[e] = Module.getValue(a, "i32"), a += 4; return c }; a.BookmarkIsValid =
                    function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_BookmarkIsValid(a, b)); return 0 !== Module.getValue(b, "i8") }; a.BookmarkGetNext = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_BookmarkGetNext(a, b)); return Module.getValue(b, "i8*") }; a.BookmarkGetFirstChild = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_BookmarkGetFirstChild(a, b)); return Module.getValue(b, "i8*") }; a.BookmarkHasChildren = function (a) {
                        var b = Module.allocate(4,
                            "i8", Module.ALLOC_STACK); REX(Module._TRN_BookmarkHasChildren(a, b)); return 0 !== Module.getValue(b, "i8")
                    }; a.BookmarkGetAction = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_BookmarkGetAction(a, b)); return Module.getValue(b, "i8*") }; a.BookmarkGetTitle = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_BookmarkGetTitle(a, b)); a = Module.getValue(b, "i8*"); return Module.GetJSStringFromUString(a) }; a.ActionIsValid = function (a) {
                        var b = Module.allocate(4, "i8",
                            Module.ALLOC_STACK); REX(Module._TRN_ActionIsValid(a, b)); return 0 !== Module.getValue(b, "i8")
                    }; a.ActionGetType = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ActionGetType(a, b)); return Module.getValue(b, "i32") }; a.ActionGetDest = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ActionGetDest(a, b)); return Module.getValue(b, "i8*") }; a.DestinationIsValid = function (a) {
                        var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_DestinationIsValid(a,
                            b)); return 0 !== Module.getValue(b, "i8")
                    }; a.DestinationGetPage = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_DestinationGetPage(a, b)); return Module.getValue(b, "i8*") }; a.PageIsValid = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageIsValid(a, b)); return 0 !== Module.getValue(b, "i8") }; a.PageGetIndex = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageGetIndex(a, b)); return Module.getValue(b, "i32") }; a.ObjGetAsPDFText =
                        function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjGetAsPDFText(a, b)); a = Module.getValue(b, "i8*"); return Module.GetJSStringFromUString(a) }; a.ObjFindObj = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); b = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjFindObj(a, b, c)); return Module.getValue(c, "i8*") }; a.PDFDocGetFirstBookmark = function (a) {
                            var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocGetFirstBookmark(a,
                                b)); return Module.getValue(b, "i8*")
                        }; a.DestinationGetExplicitDestObj = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_DestinationGetExplicitDestObj(a, b)); return Module.getValue(b, "i8*") }; a.DestinationGetFitType = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_DestinationGetFitType(a, b)); return Module.getValue(b, "i32") }; a.ObjIsNumber = function (a) {
                            var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjIsNumber(a, b)); return 0 !== Module.getValue(b,
                                "i8")
                        }; a.ObjGetNumber = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjGetNumber(a, b)); return Module.getValue(b, "double") }; a.PDFDocGetRoot = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocGetRoot(a, b)); return Module.getValue(b, "i8*") }; a.ObjPutName = function (a, b, c) {
                            b = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); c = Module.allocate(Module.intArrayFromString(c), "i8", Module.ALLOC_STACK); var e = Module.allocate(4, "i8",
                                Module.ALLOC_STACK); REX(Module._TRN_ObjPutName(a, b, c, e)); return Module.getValue(e, "i8*")
                        }; a.ObjPutDict = function (a, b) { b = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjPutDict(a, b, c)); return Module.getValue(c, "i8*") }; a.ObjPutString = function (a, b, c) {
                            b = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); c = Module.allocate(Module.intArrayFromString(c), "i8", Module.ALLOC_STACK); var e = Module.allocate(4,
                                "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjPutString(a, b, c, e)); return Module.getValue(e, "i8*")
                        }; a.ObjPut = function (a, b, c) { b = Module.allocate(Module.intArrayFromString(b), "i8", Module.ALLOC_STACK); var e = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjPut(a, b, c, e)); return Module.getValue(e, "i8*") }; a.ObjGetAt = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ObjGetAt(a, b, c)); return Module.getValue(c, "i8*") }; a.Matrix2DInverse = function (a) {
                            var b = Module.allocate(48,
                                "i8", Module.ALLOC_STACK); REX(Module._TRN_Matrix2DInverse(a, b)); return b
                        }; a.PDFDocInitSecurityHandler = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocInitSecurityHandler(a, 0, b)); return 0 !== Module.getValue(b, "i8") }; a.PDFDocSetSecurityHandler = function (a, b) { REX(Module._TRN_PDFDocSetSecurityHandler(a, b)) }; a.SecurityHandlerCreate = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_SecurityHandlerCreate(a, b)); return Module.getValue(b, "i8*") }; a.SecurityHandlerChangeUserPasswordUString =
                            function (a, b) { REX(Module._TRN_SecurityHandlerChangeUserPasswordUString(a, Module.GetUStringFromJSString(b))) }; a.PDFDocInitStdSecurityHandler = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocInitStdSecurityHandlerUString(a, Module.GetUStringFromJSString(b), c)); return 0 !== Module.getValue(c, "i8") }; a.PDFDocDownloaderTriggerFullDownload = function (a, b) { REX(Module._TRN_PDFDocDownloaderTriggerFullDownload(a, b)) }; a.PDFDocInsertPages = function (a, b, c, d, f) {
                                REX(Module._TRN_PDFDocInsertPageSet(a,
                                    b, c, d, f ? 1 : 0, 0))
                            }; a.PDFDocInsertPages2 = function (a, b, c, d, f) { REX(Module._TRN_PDFDocInsertPageSet2(a, b, c, d, f ? 1 : 0, 0)) }; a.PDFDocMovePages = function (a, b, c) { REX(Module._TRN_PDFDocMovePageSet(a, b, a, c, 0, 0)) }; a.PDFDocGetPageIterator = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocGetPageIterator(a, b, c)); return Module.getValue(c, "i8*") }; a.PDFDocPageRemove = function (a, b) { REX(Module._TRN_PDFDocPageRemove(a, b)) }; a.PDFDocPageRemove2 = function (a, b) {
                                REX(Module._TRN_PDFDocPageRemove2(a,
                                    b))
                            }; a.PDFDocPageCreate = function (a, b, c) { var d = Module.allocate(40, "i8", Module.ALLOC_STACK); Module.setValue(d, 0, "double"); Module.setValue(d + 8, 0, "double"); Module.setValue(d + 16, b, "double"); Module.setValue(d + 24, c, "double"); Module.setValue(d + 32, 0, "double"); b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocPageCreate(a, d, b)); return Module.getValue(b, "i8*") }; a.PDFDocPageInsert = function (a, b, c) { REX(Module._TRN_PDFDocPageInsert(a, b, c)) }; a.PageSetCreate = function () {
                                var a = Module.allocate(4, "i8",
                                    Module.ALLOC_STACK); REX(Module._TRN_PageSetCreate(a)); return Module.getValue(a, "i8*")
                            }; a.PageSetCreateRange = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PageSetCreateRange(c, a, b)); return Module.getValue(c, "i8*") }; a.PageSetAddPage = function (a, b) { REX(Module._TRN_PageSetAddPage(a, b)) }; a.ElementBuilderCreate = function () { var a = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ElementBuilderCreate(a)); return Module.getValue(a, "i8*") }; a.ElementBuilderDestroy = function (a) { REX(Module._TRN_ElementBuilderDestroy(a)) };
                a.ElementBuilderCreateImage = function (a, b, c, d, f, g) { var e = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ElementBuilderCreateImageScaled(a, b, c, d, f, g, e)); return Module.getValue(e, "i8*") }; a.ElementWriterCreate = function () { var a = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ElementWriterCreate(a)); return Module.getValue(a, "i8*") }; a.ElementWriterDestroy = function (a) { REX(Module._TRN_ElementWriterDestroy(a)) }; a.ElementWriterBegin = function (a, b) {
                    REX(Module._TRN_ElementWriterBeginOnPage(a,
                        b, 1, 1, 1, 0))
                }; a.ElementWriterWritePlacedElement = function (a, b) { REX(Module._TRN_ElementWriterWritePlacedElement(a, b)) }; a.ElementWriterEnd = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ElementWriterEnd(a, b)) }; a.ImageGetImageWidth = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ImageGetImageWidth(a, b)); return Module.getValue(b, "i32") }; a.ImageGetImageHeight = function (a) {
                    var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ImageGetImageHeight(a,
                        b)); return Module.getValue(b, "i32")
                }; a.ImageCreateFromMemory2 = function (a, b, c) { var d = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ImageCreateFromMemory2(a, b, c, 0, d)); return Module.getValue(d, "i8*") }; a.ImageCreateFromFile = function (a, b) { var c = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_ImageCreateFromFile(a, b, 0, c)); return Module.getValue(c, "i8*") }; a.PDFDocPagePushBack = function (a, b) { REX(Module._TRN_PDFDocPagePushBack(a, b)) }; a.PDFDocHasOC = function (a) {
                    var b = Module.allocate(4,
                        "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocHasOC(a, b)); return 0 !== Module.getValue(b, "i8")
                }; a.PDFDocGetOCGConfig = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocGetOCGConfig(a, b)); return Module.getValue(b, "i8*") }; a.OCGContextCreate = function (a) { var b = Module.allocate(4, "i8", Module.ALLOC_STACK); REX(Module._TRN_OCGContextCreateFromConfig(a, b)); return Module.getValue(b, "i8*") }; a.UStringDestroy = function (a) { REX(Module._TRN_UStringDestroy(a)) }; a.PDFDocFDFUpdate = function (a,
                    b, c) {
                    if (c) { for (var d = Object.keys(c), e = d.length, f = Module._malloc(8 * e), g = 0; g < e; ++g) { var h = 8 * g, k = d[g], m = Module.GetDoc(c[k]); k = Module.GetUStringFromJSString(k); Module.setValue(f + h, m, "i8*"); Module.setValue(f + h + 4, k, "i8*") } c = Module.allocate(8, "i8", Module.ALLOC_STACK); REX(Module._TRN_PDFDocFDFUpdateAppearanceDocs(a, b, f, e, c)); a = Module.getValue(c, "i8*"); b = Module.VectorGetSize(a); e = Array(b); for (f = 0; f < b; ++f)c = Module.VectorGetAt(a, f), e[f] = Module.ExtractApRefChangeData(c); Module.VectorDestroy(a); if (b) return e } else REX(Module._TRN_PDFDocFDFUpdate(a,
                        b))
                }; a.FDFDocDestroy = function (a) { REX(Module._TRN_FDFDocDestroy(a)) }
            })(d.Module)
        }).call(this, h(7).setImmediate)
    }, function (c, l, h) {
        function f(c) { "@babel/helpers - typeof"; return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (c) { return typeof c } : function (c) { return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c }, f(c) } (function (c) {
            c.SetupPDFNetFunctions = function (h) {
                Module._IB_ = []; for (var d = function y(a) {
                    if ("object" === f(a) && null !== a) if ("undefined" !==
                        typeof a.byteLength) { var b = Module._IB_.length; Module._IB_[b] = new Uint8Array(a); a = { handle: b, isArrayBufferRef: !0 } } else Object.keys(a).forEach(function (b) { a.hasOwnProperty(b) && (a[b] = y(a[b])) }); return a
                }, a = function C(a) { "object" === f(a) && null !== a && (a.buffer ? a = a.buffer.slice(a.byteOffset, a.byteOffset + a.length) : a.isArrayBufferRef ? a = Module._IB_[a.handle].buffer : Object.keys(a).forEach(function (b) { a.hasOwnProperty(b) && (a[b] = C(a[b])) })); return a }, b = Module._TRN_EMSCreateSharedWorkerInstance(), g, m = Module._TRN_EMSWorkerInstanceGetFunctionIterator(b),
                    l = function (c, f) { return new Promise(function (g, h) { c = d(c); var m = c.docId; m = m ? Module.GetDoc(m) : 0; (m = Module.EMSCallSharedFunction(b, f, m)) ? h({ type: "PDFWorkerError", message: Module.GetErrToString(m) }) : (h = Module.EMSGetLastResponse(b), h = a(h), g(h)) }) }; g = Module._TRN_EMSFunctionIteratorGetNextCommandName(m);)g = Module.GetJSStringFromCString(g), c.queue.onAsync(g, l); Module._TRN_EMSFunctionIteratorDestroy(m); if (Module._TRN_EMSCreatePDFNetWorkerInstance) {
                        var p = {}; m = function (a, b) { h.on(a, b); p[a] = !0 }; Module.docPtrStringToIdMap =
                            {}; var n = function (a) { if (a in Module.docPtrStringToIdMap) return Module.docPtrStringToIdMap[a]; throw Error("Couldn't find document ".concat(a)); }; c.queue.onAsync("PDFDoc.RequirePage", function (a) { return Module.RequirePage(n(a.docId), a.pageNum) }); m("pdfDocCreateFromBuffer", function (a) { a = Module.CreateDoc({ type: "array", value: a.buf }); var b = Module.GetDoc(a).toString(16); Module.docPtrStringToIdMap[b] = a; return b }); m("PDFDoc.destroy", function (a) { a = n(a.auto_dealloc_obj); Module.DeleteDoc(a) }); m("PDFDoc.saveMemoryBuffer",
                                function (a) { var b = n(a.doc); return Module.SaveHelper(Module.GetDoc(b), b, a.flags).slice(0) }); m("pdfDocCreate", function () { var a = Module.CreateDoc({ type: "new" }), b = Module.GetDoc(a).toString(16); Module.docPtrStringToIdMap[b] = a; return b }); m("GetPDFDoc", function (a) { a = a.docId; var b = Module.GetDoc(a).toString(16); Module.docPtrStringToIdMap[b] = a; return b }); m("ExtractPDFNetLayersContext", function (a) {
                                    var b = a.layers; a = Module.GetDoc(a.docId); var c = 0; b ? c = Module.EMSCreateUpdatedLayersContext(a, b) : Module.PDFDocHasOC(a) &&
                                        (b = Module.PDFDocGetOCGConfig(a), c = Module.OCGContextCreate(b)); return c.toString(16)
                                }); var v = Module._TRN_EMSCreatePDFNetWorkerInstance(); m = Module._TRN_EMSWorkerInstanceGetFunctionIterator(v); for (l = function (b) { return new Promise(function (c, f) { b = d(b); var g = Module.EMSCallPDFNetFunction(v, b); g ? f(Module.GetErrToString(g)) : (f = Module.EMSGetLastResponse(v), f = a(f), c(f)) }) }; g = Module._TRN_EMSFunctionIteratorGetNextCommandName(m);)if (g = Module.GetJSStringFromCString(g), !p[g]) h.onAsync(g, l); Module._TRN_EMSFunctionIteratorDestroy(m)
                    }
            }
        })(self)
    },
    function (c, l, h) {
        c = h(6); var f = h.n(c), n = h(15), q = h(16), d = h(5), a = h(17), b = h(1), g = h(18); (function (c) {
            var h = null; c.basePath = "../"; var l = function () {
                var f = c.pdfWorkerPath || ""; c.workerBasePath && (c.basePath = c.workerBasePath); var h = c.isFull, l = h ? "full/" : "lean/"; c.useOptimizedWorker && (l += g.a); var m = c.wasmDisabled, n = c.disableObjectURLBlobs; Object(b.c)(); c.overriddenPdfWorkerPath && (f = c.overriddenPdfWorkerPath, c.basePath = "../", !Object(d.a)() || m) && (f = ""); c.basePath = c.externalPath ? c.externalPath : c.basePath + "external/";
                Object(a.a)("".concat(f + l, "PDFNetC"), { "Wasm.wasm": h ? 1E7 : 4E6, "Wasm.js.mem": 1E5, ".js.mem": 12E6, ".mem": h ? 2E6 : 6E5, disableObjectURLBlobs: n }, m)
            }; c.EmscriptenPDFManager = function () { }; c.EmscriptenPDFManager.prototype = {
                OnInitialized: function (a) { Module.loaded ? a() : (Module.initCb = function () { a() }, Object(b.b)("worker", "PDFNet is not initialized yet!")) }, NewDoc: function (a, b) { return new Promise(function (c, d) { try { c(Module.loadDoc(a, b)) } catch (C) { d(C) } }) }, Initialize: function (a, b, d, f) {
                    a && (Module.TOTAL_MEMORY = a); Module.memoryInitializerPrefixURL =
                        b; Module.asmjsPrefix = d; c.basePath = f; l()
                }, shouldRunRender: function (a) { return Module.ShouldRunRender(a.docId, a.pageIndex + 1) }
            }; var m = {
                setup: function (a) {
                    function d(a) {
                        var d = a.data, e = a.action; var f = "GetCanvas" === e || "GetCanvasPartial" === e ? p.shouldRunRender(d) : !0; if (f) { h = a; var g = a.asyncCallCapability; Object(b.b)("Memory", "Worker running command: ".concat(e)); q.actionMap[e](d, a).then(function (a) { "BeginOperation" !== h.action && (h = null); g.resolve(a) }, function (a) { h = null; g.reject(a) }) } else c.deferredQueue.queue(a),
                            m()
                    } function g(a) { a.asyncCallCapability = createPromiseCapability(); h || q.length ? q.queue(a) : d(a); return a.asyncCallCapability.promise } function l(b) {
                        self.shouldResize && p.Initialize(b.options.workerHeapSize, b.options.pdfResourcePath, b.options.pdfAsmPath, b.options.parentUrl); Module.chunkMax = b.options.chunkMax; if (b.array instanceof Uint8Array) {
                            var d = 255 === b.array[0]; a.postMessageTransfers = d; "response" in new XMLHttpRequest ? p.OnInitialized(function () {
                                c.SetupPDFNetFunctions(a); k(); a.send("test", {
                                    supportTypedArray: !0,
                                    supportTransfers: d
                                })
                            }) : a.send("test", !1)
                        } else a.send("test", !1)
                    } function m() { n.a.setImmediate(function () { if ((!h || "BeginOperation" !== h.action) && q.length && !h) { var a = q.dequeue(); d(a) } }) } var p = new c.EmscriptenPDFManager, q, u = !1, e = !1; Module.workerMessageHandler = a; var k = function () { u ? e || (a.send("workerLoaded", {}), e = !0) : u = !0 }; p.OnInitialized(k); (function () {
                        c.queue = q = new f.a({ strategy: f.a.ArrayStrategy, comparator: function (a, b) { return a.priority === b.priority ? a.callbackId - b.callbackId : b.priority - a.priority } });
                        c.deferredQueue = new f.a({ strategy: f.a.ArrayStrategy, comparator: function (a, b) { return a.priority === b.priority ? a.callbackId - b.callbackId : b.priority - a.priority } }); q.actionMap = {}; q.onAsync = function (b, c) { a.onAsync(b, g); q.actionMap[b] = c }
                    })(); a.on("test", l); a.on("InitWorker", l); var t = function (a) { h && a(h) && (Module.cancelCurrent(), h = null); q.removeAllMatching(a, function (a) { a.asyncCallCapability.reject({ type: "Cancelled", message: "Operation was cancelled due to a change affecting the loaded document." }) }) }, v = function (a) {
                        t(function (b) {
                            return b.data &&
                                b.data.docId === a
                        })
                    }; a.on("UpdatePassword", function (a) { return Module.UpdatePassword(a.docId, a.password) }); a.on("LoadRes", function (a) { Module.loadResources(a.array, a.l); return {} }); a.on("DownloaderHint", function (a) { Module.DownloaderHint(a.docId, a.hint) }); a.on("IsLinearized", function (a) { return Module.IsLinearizationValid(a.docId) }); a.onNextAsync(m); q.onAsync("NewDoc", function (a) { return p.NewDoc(a) }); q.onAsync("GetCanvas", function (a) {
                        Object(b.b)("workerdetails", "Run GetCanvas PageIdx: ".concat(a.pageIndex,
                            " Width: ").concat(a.width)); Object(b.b)("Memory", "loadCanvas with potential memory usage ".concat(a.width * a.height * 8)); return Module.loadCanvas(a.docId, a.pageIndex, a.width, a.height, a.rotation, null, a.layers, a.renderOptions)
                    }); q.onAsync("GetCanvasPartial", function (a) { Object(b.b)("Memory", "GetCanvasPartial with potential memory usage ".concat(a.width * a.height * 8)); return Module.loadCanvas(a.docId, a.pageIndex, a.width, a.height, a.rotation, a.bbox, a.layers, a.renderOptions) }); q.onAsync("SaveDoc", function (a) {
                        return Module.SaveDoc(a.docId,
                            a.xfdfString, a.finishedWithDocument, a.printDocument, a.flags, a.watermarks, a.apdocs, a.password, a.encryptionAlgorithmType)
                    }); q.onAsync("SaveDocFromFixedElements", function (a) { return Module.SaveDocFromFixedElements(a.bytes, a.xfdfString, a.flags, a.watermarks, a.password, a.encryptionAlgorithmType) }); q.onAsync("MergeXFDF", function (a) { return Module.MergeXFDF(a.docId, a.xfdf, a.apdocs) }); q.onAsync("InsertPages", function (a) { return Module.InsertPages(a.docId, a.doc, a.pageArray, a.destPos, a.insertBookmarks, a.skipUpdateEvent) });
                    q.onAsync("MovePages", function (a) { return Module.MovePages(a.docId, a.pageArray, a.destPos) }); q.onAsync("RemovePages", function (a) { return Module.RemovePages(a.docId, a.pageArray, a.skipUpdateEvent) }); q.onAsync("RotatePages", function (a) { return Module.RotatePages(a.docId, a.pageArray, a.rotation) }); q.onAsync("ExtractPages", function (a) { return Module.ExtractPages(a.docId, a.pageArray, a.xfdfString, a.watermarks, a.apdocs, a.skipUpdateEvent) }); q.onAsync("CropPages", function (a) {
                        return Module.CropPages(a.docId, a.pageArray,
                            a.topMargin, a.botMargin, a.leftMargin, a.rightMargin)
                    }); q.onAsync("TriggerFullDownload", function (a) { return Module.TriggerFullDownload(a.docId) }); q.onAsync("InsertBlankPages", function (a) { return Module.InsertBlankPages(a.docId, a.pageArray, a.width, a.height) }); q.onAsync("BeginOperation", function () { return Promise.resolve() }); q.onAsync("RequirePage", function (a, b) { return Module.RequirePage(a.docId, a.pageNum) }); a.on("FinishOperation", function () {
                        if (h && "BeginOperation" === h.action) h = null, m(); else throw { message: "Operation has not started." };
                    }); a.on("DeleteDocument", function (a) { a = a.docId; v(a); Module.DeleteDoc(a) }); a.on("GetCanvasProgressive", function (a) {
                        if (h && h.callbackId === a.callbackId) { Object(b.b)("worker", "Progressive request in progress"); var d = Module.GetCurrentCanvasData(!0) } else {
                            if (q.find({ priority: 0, callbackId: a.callbackId })) throw Object(b.b)("worker", "Progressive request Queued"), { type: "Queued", message: "Rendering has not started yet." }; if (c.deferredQueue.find({ priority: 0, callbackId: a.callbackId })) throw Object(b.b)("worker", "Progressive request Deferred"),
                                { type: "Queued", message: "Rendering has not started yet." };
                        } if (!d) throw Object(b.b)("worker", "Progressive request invalid (render already complete)"), { type: "Unavailable", message: "Rendering is complete or was cancelled." }; return d
                    }); a.on("actionCancel", function (a) {
                        h && h.callbackId === a.callbackId ? (Object(b.b)("workerdetails", "Cancelled Current Operation"), Module.cancelCurrent() && (h = null, m())) : (Object(b.b)("workerdetails", "Cancelled queued operation"), q.remove({ priority: 0, callbackId: a.callbackId }), c.deferredQueue.remove({
                            priority: 0,
                            callbackId: a.callbackId
                        }))
                    })
                }
            }; c.onmessage = function (a) { if ("init" === a.data.action) { var d = a.data.shouldResize; c.shouldResize = d; c.isFull = a.data.isFull; c.wasmDisabled = !a.data.wasm; c.externalPath = a.data.externalPath; c.useOptimizedWorker = a.data.useOptimizedWorker; c.disableObjectURLBlobs = a.data.disableObjectURLBlobs; if (a = a.data.pdfWorkerPath) c.overriddenPdfWorkerPath = a; d || l(); d = new q.a("worker_processor", self); Object(b.a)(d); m.setup(d) } }
        })("undefined" === typeof window ? self : window)
    }]);
}).call(this || window)
