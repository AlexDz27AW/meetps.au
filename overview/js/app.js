var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*eslint-disable*/
// example of simple includes for js
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};function p(a, b) {
        b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }var q = "3.0.0",
        r = function r(a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function v(a, b) {
        return b.toUpperCase();
    };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
            return f.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this);
        }, pushStack: function pushStack(a) {
            var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
        }, each: function each(a) {
            return r.each(this, a);
        }, map: function map(a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(f.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === r.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }, isPlainObject: function isPlainObject(a) {
            var b, c;return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(a) {
            p(a);
        }, camelCase: function camelCase(a) {
            return a.replace(t, "ms-").replace(u, v);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b) {
            var c,
                d = 0;if (w(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break;
                }
            } else for (d in a) {
                if (b.call(a[d], d, a[d]) === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(s, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                e,
                f = 0,
                h = [];if (w(a)) for (d = a.length; d > f; f++) {
                e = b(a[f], f, c), null != e && h.push(e);
            } else for (f in a) {
                e = b(a[f], f, c), null != e && h.push(e);
            }return g.apply([], h);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, d, e;return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function e() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0;
        }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function I(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function aa(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function ca(a, b) {
            return b ? "\x00" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function da() {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0;
        }, { dir: "parentNode", next: "legend" });try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = { apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
                            o[h] = "#" + k + " " + sa(o[h]);
                        }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }return i(a.replace(P, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("fieldset");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = c.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return function (b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
            };
        }function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    g.unshift(c);
                }c = b;while (c = c.parentNode) {
                    h.unshift(c);
                }while (g[d] === h[d]) {
                    d++;
                }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;if (q) {
                            if (f) {
                                while (p) {
                                    m = b;while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];break;
                                    }
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            }return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return X.test(a.nodeName);
                }, input: function input(a) {
                    return W.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: pa(function () {
                    return [0];
                }), last: pa(function (a, b) {
                    return [b - 1];
                }), eq: pa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: pa(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: pa(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;return b.first ? function (b, c, e) {
                while (b = b[d]) {
                    if (1 === b.nodeType || g) return a(b, c, e);
                }
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];if (i) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
            };
        }function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                ga(a, b[d], c);
            }return c;
        }function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            }return g;
        }function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
                    }m.push(c);
                }
            }return ua(m);
        }function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = _f && [],
                    u = [],
                    v = j,
                    x = _f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);break;
                            }
                        }k && (w = y);
                    }c && ((l = !q && l) && r--, _f && t.push(l));
                }if (r += s, c && s !== r) {
                    o = 0;while (q = b[o++]) {
                        q(t, u, g, h);
                    }if (_f) {
                        if (r > 0) while (s--) {
                            t[s] || u[s] || (u[s] = E.call(i));
                        }u = wa(u);
                    }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = y, j = v), t;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, za(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;d.push(a);
            }
        }return d;
    },
        z = function z(a, b) {
        for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a);
        }return c;
    },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return r.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
        }return r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        });
    }r.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({ find: function find(a) {
            var b,
                c,
                d = this.length,
                e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; d > b; b++) {
                    if (r.contains(e[b], this)) return !0;
                }
            }));for (c = this.pushStack([]), b = 0; d > b; b++) {
                r.find(a, e[b], c);
            }return d > 1 ? r.uniqueSort(c) : c;
        }, filter: function filter(a) {
            return this.pushStack(D(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(D(this, a || [], !0));
        }, is: function is(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        } });var E,
        F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                }return this;
            }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
            var b = r(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) {
                    if (r.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);if (!A.test(a)) for (; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }r.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return y(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return y(a, "parentNode", c);
        }, next: function next(a) {
            return J(a, "nextSibling");
        }, prev: function prev(a) {
            return J(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return y(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return y(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return y(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return y(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return z((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return z(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || r.merge([], a.childNodes);
        } }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
        };
    });var K = /\S+/g;function L(a) {
        var b = {};return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function i() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();while (++h < f.length) {
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                }
            }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function add() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            }, remove: function remove() {
                return r.each(arguments, function (a, b) {
                    var c;while ((c = r.inArray(b, f, c)) > -1) {
                        f.splice(c, 1), h >= c && h--;
                    }
                }), this;
            }, has: function has(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            }, empty: function empty() {
                return f && (f = []), this;
            }, disable: function disable() {
                return e = g = [], f = c = "", this;
            }, disabled: function disabled() {
                return !f;
            }, lock: function lock() {
                return e = g = [], c || b || (f = c = ""), this;
            }, locked: function locked() {
                return !!e;
            }, fireWith: function fireWith(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            }, fire: function fire() {
                return j.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return j;
    };function M(a) {
        return a;
    }function N(a) {
        throw a;
    }function O(a, b, c) {
        var d;try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
        } catch (a) {
            c.call(void 0, a);
        }
    }r.extend({ Deferred: function Deferred(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = { state: function state() {
                    return d;
                }, always: function always() {
                    return f.done(arguments).fail(arguments), this;
                }, "catch": function _catch(a) {
                    return e.then(null, a);
                }, pipe: function pipe() {
                    var a = arguments;return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, then: function then(b, d, e) {
                    var f = 0;function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function j() {
                                var a, j;if (!(f > b)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? r.extend(a, e) : e;
                } },
                f = {};return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        }, when: function when(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function h(a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
                O(e[c], h(c), g.reject);
            }return g.promise();
        } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    };var Q = r.Deferred();r.fn.ready = function (a) {
        return Q.then(a), this;
    }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? r.readyWait++ : r.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
        } }), r.ready.then = Q.then;function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
    }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === r.type(c)) {
            e = !0;for (h in c) {
                S(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(r(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        T = function T(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function U() {
        this.expando = r.expando + U.uid++;
    }U.uid = 1, U.prototype = { cache: function cache(a) {
            var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
        }, set: function set(a, b, c) {
            var d,
                e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
                e[r.camelCase(d)] = b[d];
            }return e;
        }, get: function get(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        }, access: function access(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d = a[this.expando];if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
                        delete d[b[c]];
                    }
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        }, hasData: function hasData(a) {
            var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
        } };var V = new U(),
        W = new U(),
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;function Z(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c;
            } catch (e) {}W.set(a, b, c);
        } else c = void 0;return c;
    }r.extend({ hasData: function hasData(a) {
            return W.hasData(a) || V.hasData(a);
        }, data: function data(a, b, c) {
            return W.access(a, b, c);
        }, removeData: function removeData(a, b) {
            W.remove(a, b);
        }, _data: function _data(a, b, c) {
            return V.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            V.remove(a, b);
        } }), r.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    }V.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                W.set(this, a);
            }) : S(this, function (b) {
                var c;if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    W.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                W.remove(this, a);
            });
        } }), r.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function g() {
                r.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c]);
                }) });
        } }), r.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function ba(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ca = function ca(a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };function da(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }var ea = {};function fa(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
    }function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
            d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        }for (f = 0; g > f; f++) {
            null != e[f] && (a[f].style.display = e[f]);
        }return a;
    }r.fn.extend({ show: function show() {
            return ga(this, !0);
        }, hide: function hide() {
            return ga(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ba(this) ? r(this).show() : r(this).hide();
            });
        } });var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
        }
    }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++) {
            if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
                    g = g.lastChild;
                }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }l.textContent = "", n = 0;while (f = m[n++]) {
            if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
                k = 0;while (f = g[k++]) {
                    ja.test(f.type || "") && c.push(f);
                }
            }
        }return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
        return !0;
    }function ua() {
        return !1;
    }function va() {
        try {
            return d.activeElement;
        } catch (a) {}
    }function wa(a, b, c, d, e, f) {
        var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
            "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
                wa(a, h, c, d, b[h], f);
            }return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }r.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.get(a);if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) {
                        r.event.remove(a, n + b[j], c, d, !0);
                    }
                }r.isEmptyObject(i) && V.remove(a, "handle events");
            }
        }, dispatch: function dispatch(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
                i[c] = arguments[c];
            }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) {
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                    }d.length && g.push({ elem: i, handlers: d });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, addProp: function addProp(a, b) {
            Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0;
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0;
                }, set: function set(b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                } });
        }, fix: function fix(a) {
            return a[r.expando] ? a : new r.Event(a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return r.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } } }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
            var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), r.fn.extend({ on: function on(a, b, c, d) {
            return wa(this, a, b, c, d);
        }, one: function one(a, b, c, d) {
            return wa(this, a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
    }function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function Ea(a) {
        var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function Fa(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        r.event.add(b, e, j[e][c]);
                    }
                }
            }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
        }
    }function Ga(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }function Ha(a, b, c, d) {
        b = g.apply([], b);var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
            var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) {
                j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) {
                j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
            }
        }return a;
    }function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        }return a;
    }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
            return a.replace(xa, "<$1></$2>");
        }, clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) {
                Ga(f[d], g[d]);
            }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) {
                Fa(f[d], g[d]);
            } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events) for (d in b.events) {
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        }c[V.expando] = void 0;
                    }c[W.expando] && (c[W.expando] = void 0);
                }
            }
        } }), r.fn.extend({ detach: function detach(a) {
            return Ia(this, a, !0);
        }, remove: function remove(a) {
            return Ia(this, a);
        }, text: function text(a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        }, html: function html(a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = [];return Ha(this, arguments, function (b) {
                var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
            }, a);
        } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) {
                c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function La(b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
    };!function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
            }
        }var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
                return b(), c;
            }, boxSizingReliable: function boxSizingReliable() {
                return b(), e;
            }, pixelMarginRight: function pixelMarginRight() {
                return b(), f;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return b(), g;
            } }));
    }();function Ma(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function Na(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = { position: "absolute", visibility: "hidden", display: "block" },
        Qa = { letterSpacing: "0", fontWeight: "400" },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;function Ta(a) {
        if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;while (c--) {
            if (a = Ra[c] + b, a in Sa) return a;
        }
    }function Ua(a, b, c) {
        var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        }return g;
    }function Wa(a, b, c) {
        var d,
            e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
        }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
    }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        } }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = { get: function get(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
                    return Wa(a, b, d);
                }) : void 0;
            }, set: function set(a, c, d) {
                var e,
                    f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
            } };
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        r.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
    }), r.fn.extend({ css: function css(a, b) {
            return S(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (r.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) {
                        f[b[g]] = r.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        } });function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e);
    }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
        } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
                var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            }, set: function set(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, r.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
        Za,
        $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick());
    }function bb() {
        return a.setTimeout(function () {
            Ya = void 0;
        }), Ya = r.now();
    }function cb(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = aa[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function eb(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));for (d in b) {
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }n[d] = q && q[d] || r.style(a, d);
            }
        }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;for (d in n) {
                i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
                    p || ga([a]), V.remove(a, "fxshow");for (d in n) {
                        r.style(a, d, n[d]);
                    }
                })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
            }
        }
    }function fb(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function gb(a, b, c) {
        var d,
            e,
            f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (fb(k, j.opts.specialEasing); g > f; f++) {
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
                var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
            }] }, tweener: function tweener(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
            }
        }, prefilters: [eb], prefilter: function prefilter(a, b) {
            b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
        } }), r.speed = function (a, b, c) {
        var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
        }, e;
    }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function g() {
                var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && _a.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }!b && c || r.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = V.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
        };
    }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;for (Ya = r.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || r.fx.stop(), Ya = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
    }, r.fx.interval = 13, r.fx.start = function () {
        Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
    }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();var hb,
        ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        } }), r.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } }, removeAttr: function removeAttr(a, b) {
            var c,
                d = 0,
                e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
                a.removeAttribute(c);
            }
        } }), hb = { set: function set(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
        };
    });var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        } }), r.extend({ prop: function prop(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        }, set: function set(a) {
            var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });var lb = /[\t\r\n\f]/g;function mb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }r.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, mb(this)));
            });if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, mb(this)));
            });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(a) {
            var b,
                c,
                d = 0;b = " " + a + " ";while (c = this[d++]) {
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            }return !1;
        } });var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
            }
        } }), r.extend({ valHooks: { option: { get: function get(a) {
                    var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = { set: function set(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0;
            } }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), i = h;
                    }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        }, simulate: function simulate(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
        } }), r.fn.extend({ trigger: function trigger(a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? r.event.trigger(a, b, c, !0) : void 0;
        } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };r.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
            } };
    });var qb = a.location,
        rb = r.now(),
        sb = /\?/;r.parseXML = function (b) {
        var c;if (!b || "string" != typeof b) return null;try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
        var e;if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
            xb(a + "[" + e + "]", b[e], c, d);
        }
    }r.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            xb(c, a[c], b, e);
        }return d.join("&");
    }, r.fn.extend({ serialize: function serialize() {
            return r.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
            }).map(function (a, b) {
                var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return { name: b.name, value: a.replace(ub, "\r\n") };
                }) : { name: b.name, value: c.replace(ub, "\r\n") };
            }).get();
        } });var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;function g(h) {
            var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Lb(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && r.extend(!0, a, d), a;
    }function Mb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Nb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
        }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
            "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (k) {
                        if (!h) {
                            h = {};while (b = Bb.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }b = h[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return k ? g : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return null == k && (o.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
                        u[b] = [u[b], a[b]];
                    }return this;
                }, abort: function abort(a) {
                    var b = a || x;return e && e.abort(b), A(0, b), this;
                } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
                y.setRequestHeader(m, o.headers[m]);
            }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;A(-1, z);
                }
            } else A(-1, "No Transport");function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }return y;
        }, getJSON: function getJSON(a, b, c) {
            return r.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return r.get(a, void 0, b, "script");
        } }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, r.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this;
        }, wrapInner: function wrapInner(a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = r.isFunction(a);return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap(a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        } }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var _c, d;return o.cors || Pb && !b.crossDomain ? { send: function send(e, f) {
                var g,
                    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
                    h[g] = b.xhrFields[g];
                }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
                    h.setRequestHeader(g, e[g]);
                }_c = function c(a) {
                    return function () {
                        _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                    };
                }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        _c && d();
                    });
                }, _c = _c("abort");try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (_c) throw i;
                }
            }, abort: function abort() {
                _c && _c();
            } } : void 0;
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
                return r.globalEval(a), a;
            } } }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(e, f) {
                    b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
        } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    };function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }r.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, r.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });var b,
                c,
                d,
                e,
                f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
                    a = a.offsetParent;
                }return a || pa;
            });
        } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b;r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
        });
    }), r.each({ Height: "height", Width: "width" }, function (a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
                    var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({ bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r;
    });var Tb = a.jQuery,
        Ub = a.$;return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
    }, b || (a.jQuery = a.$ = r), r;
});
/*! tooltipster v4.2.5 */!function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a);
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : b(jQuery);
}(this, function (a) {
    function b(a) {
        this.$container, this.constraints = null, this.__$tooltip, this.__init(a);
    }function c(b, c) {
        var d = !0;return a.each(b, function (a, e) {
            return void 0 === c[a] || b[a] !== c[a] ? (d = !1, !1) : void 0;
        }), d;
    }function d(b) {
        var c = b.attr("id"),
            d = c ? h.window.document.getElementById(c) : null;return d ? d === b[0] : a.contains(h.window.document.body, b[0]);
    }function e() {
        if (!g) return !1;var a = g.document.body || g.document.documentElement,
            b = a.style,
            c = "transition",
            d = ["Moz", "Webkit", "Khtml", "O", "ms"];if ("string" == typeof b[c]) return !0;c = c.charAt(0).toUpperCase() + c.substr(1);for (var e = 0; e < d.length; e++) {
            if ("string" == typeof b[d[e] + c]) return !0;
        }return !1;
    }var f = { animation: "fade", animationDuration: 350, content: null, contentAsHTML: !1, contentCloning: !1, debug: !0, delay: 300, delayTouch: [300, 500], functionInit: null, functionBefore: null, functionReady: null, functionAfter: null, functionFormat: null, IEmin: 6, interactive: !1, multiple: !1, parent: null, plugins: ["sideTip"], repositionOnScroll: !1, restoration: "none", selfDestruction: !0, theme: [], timer: 0, trackerInterval: 500, trackOrigin: !1, trackTooltip: !1, trigger: "hover", triggerClose: { click: !1, mouseleave: !1, originClick: !1, scroll: !1, tap: !1, touchleave: !1 }, triggerOpen: { click: !1, mouseenter: !1, tap: !1, touchstart: !1 }, updateAnimation: "rotate", zIndex: 9999999 },
        g = "undefined" != typeof window ? window : null,
        h = { hasTouchCapability: !(!g || !("ontouchstart" in g || g.DocumentTouch && g.document instanceof g.DocumentTouch || g.navigator.maxTouchPoints)), hasTransitions: e(), IE: !1, semVer: "4.2.5", window: g },
        i = function i() {
        this.__$emitterPrivate = a({}), this.__$emitterPublic = a({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = h;
    };i.prototype = { __bridge: function __bridge(b, c, d) {
            if (!c[d]) {
                var e = function e() {};e.prototype = b;var g = new e();g.__init && g.__init(c), a.each(b, function (a, b) {
                    0 != a.indexOf("__") && (c[a] ? f.debug && console.log("The " + a + " method of the " + d + " plugin conflicts with another plugin or native methods") : (c[a] = function () {
                        return g[a].apply(g, Array.prototype.slice.apply(arguments));
                    }, c[a].bridged = g));
                }), c[d] = g;
            }return this;
        }, __setWindow: function __setWindow(a) {
            return h.window = a, this;
        }, _getRuler: function _getRuler(a) {
            return new b(a);
        }, _off: function _off() {
            return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
        }, _on: function _on() {
            return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
        }, _one: function _one() {
            return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
        }, _plugin: function _plugin(b) {
            var c = this;if ("string" == typeof b) {
                var d = b,
                    e = null;return d.indexOf(".") > 0 ? e = c.__plugins[d] : a.each(c.__plugins, function (a, b) {
                    return b.name.substring(b.name.length - d.length - 1) == "." + d ? (e = b, !1) : void 0;
                }), e;
            }if (b.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");return c.__plugins[b.name] = b, b.core && c.__bridge(b.core, c, b.name), this;
        }, _trigger: function _trigger() {
            var a = Array.prototype.slice.apply(arguments);return "string" == typeof a[0] && (a[0] = { type: a[0] }), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, a), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, a), this;
        }, instances: function instances(b) {
            var c = [],
                d = b || ".tooltipstered";return a(d).each(function () {
                var b = a(this),
                    d = b.data("tooltipster-ns");d && a.each(d, function (a, d) {
                    c.push(b.data(d));
                });
            }), c;
        }, instancesLatest: function instancesLatest() {
            return this.__instancesLatestArr;
        }, off: function off() {
            return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        }, on: function on() {
            return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        }, one: function one() {
            return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        }, origins: function origins(b) {
            var c = b ? b + " " : "";return a(c + ".tooltipstered").toArray();
        }, setDefaults: function setDefaults(b) {
            return a.extend(f, b), this;
        }, triggerHandler: function triggerHandler() {
            return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        } }, a.tooltipster = new i(), a.Tooltipster = function (b, c) {
        this.__callbacks = { close: [], open: [] }, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = a({}), this.__$emitterPublic = a({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = { close: [], open: null }, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(b, c);
    }, a.Tooltipster.prototype = { __init: function __init(b, c) {
            var d = this;if (d._$origin = a(b), d.__options = a.extend(!0, {}, f, c), d.__optionsFormat(), !h.IE || h.IE >= d.__options.IEmin) {
                var e = null;if (void 0 === d._$origin.data("tooltipster-initialTitle") && (e = d._$origin.attr("title"), void 0 === e && (e = null), d._$origin.data("tooltipster-initialTitle", e)), null !== d.__options.content) d.__contentSet(d.__options.content);else {
                    var g,
                        i = d._$origin.attr("data-tooltip-content");i && (g = a(i)), g && g[0] ? d.__contentSet(g.first()) : d.__contentSet(e);
                }d._$origin.removeAttr("title").addClass("tooltipstered"), d.__prepareOrigin(), d.__prepareGC(), a.each(d.__options.plugins, function (a, b) {
                    d._plug(b);
                }), h.hasTouchCapability && a(h.window.document.body).on("touchmove." + d.__namespace + "-triggerOpen", function (a) {
                    d._touchRecordEvent(a);
                }), d._on("created", function () {
                    d.__prepareTooltip();
                })._on("repositioned", function (a) {
                    d.__lastPosition = a.position;
                });
            } else d.__options.disabled = !0;
        }, __contentInsert: function __contentInsert() {
            var a = this,
                b = a._$tooltip.find(".tooltipster-content"),
                c = a.__Content,
                d = function d(a) {
                c = a;
            };return a._trigger({ type: "format", content: a.__Content, format: d }), a.__options.functionFormat && (c = a.__options.functionFormat.call(a, a, { origin: a._$origin[0] }, a.__Content)), "string" != typeof c || a.__options.contentAsHTML ? b.empty().append(c) : b.text(c), a;
        }, __contentSet: function __contentSet(b) {
            return b instanceof a && this.__options.contentCloning && (b = b.clone(!0)), this.__Content = b, this._trigger({ type: "updated", content: b }), this;
        }, __destroyError: function __destroyError() {
            throw new Error("This tooltip has been destroyed and cannot execute your method call.");
        }, __geometry: function __geometry() {
            var b = this,
                c = b._$origin,
                d = b._$origin.is("area");if (d) {
                var e = b._$origin.parent().attr("name");c = a('img[usemap="#' + e + '"]');
            }var f = c[0].getBoundingClientRect(),
                g = a(h.window.document),
                i = a(h.window),
                j = c,
                k = { available: { document: null, window: null }, document: { size: { height: g.height(), width: g.width() } }, window: { scroll: { left: h.window.scrollX || h.window.document.documentElement.scrollLeft, top: h.window.scrollY || h.window.document.documentElement.scrollTop }, size: { height: i.height(), width: i.width() } }, origin: { fixedLineage: !1, offset: {}, size: { height: f.bottom - f.top, width: f.right - f.left }, usemapImage: d ? c[0] : null, windowOffset: { bottom: f.bottom, left: f.left, right: f.right, top: f.top } } };if (d) {
                var l = b._$origin.attr("shape"),
                    m = b._$origin.attr("coords");if (m && (m = m.split(","), a.map(m, function (a, b) {
                    m[b] = parseInt(a);
                })), "default" != l) switch (l) {case "circle":
                        var n = m[0],
                            o = m[1],
                            p = m[2],
                            q = o - p,
                            r = n - p;k.origin.size.height = 2 * p, k.origin.size.width = k.origin.size.height, k.origin.windowOffset.left += r, k.origin.windowOffset.top += q;break;case "rect":
                        var s = m[0],
                            t = m[1],
                            u = m[2],
                            v = m[3];k.origin.size.height = v - t, k.origin.size.width = u - s, k.origin.windowOffset.left += s, k.origin.windowOffset.top += t;break;case "poly":
                        for (var w = 0, x = 0, y = 0, z = 0, A = "even", B = 0; B < m.length; B++) {
                            var C = m[B];"even" == A ? (C > y && (y = C, 0 === B && (w = y)), w > C && (w = C), A = "odd") : (C > z && (z = C, 1 == B && (x = z)), x > C && (x = C), A = "even");
                        }k.origin.size.height = z - x, k.origin.size.width = y - w, k.origin.windowOffset.left += w, k.origin.windowOffset.top += x;}
            }var D = function D(a) {
                k.origin.size.height = a.height, k.origin.windowOffset.left = a.left, k.origin.windowOffset.top = a.top, k.origin.size.width = a.width;
            };for (b._trigger({ type: "geometry", edit: D, geometry: { height: k.origin.size.height, left: k.origin.windowOffset.left, top: k.origin.windowOffset.top, width: k.origin.size.width } }), k.origin.windowOffset.right = k.origin.windowOffset.left + k.origin.size.width, k.origin.windowOffset.bottom = k.origin.windowOffset.top + k.origin.size.height, k.origin.offset.left = k.origin.windowOffset.left + k.window.scroll.left, k.origin.offset.top = k.origin.windowOffset.top + k.window.scroll.top, k.origin.offset.bottom = k.origin.offset.top + k.origin.size.height, k.origin.offset.right = k.origin.offset.left + k.origin.size.width, k.available.document = { bottom: { height: k.document.size.height - k.origin.offset.bottom, width: k.document.size.width }, left: { height: k.document.size.height, width: k.origin.offset.left }, right: { height: k.document.size.height, width: k.document.size.width - k.origin.offset.right }, top: { height: k.origin.offset.top, width: k.document.size.width } }, k.available.window = { bottom: { height: Math.max(k.window.size.height - Math.max(k.origin.windowOffset.bottom, 0), 0), width: k.window.size.width }, left: { height: k.window.size.height, width: Math.max(k.origin.windowOffset.left, 0) }, right: { height: k.window.size.height, width: Math.max(k.window.size.width - Math.max(k.origin.windowOffset.right, 0), 0) }, top: { height: Math.max(k.origin.windowOffset.top, 0), width: k.window.size.width } }; "html" != j[0].tagName.toLowerCase();) {
                if ("fixed" == j.css("position")) {
                    k.origin.fixedLineage = !0;break;
                }j = j.parent();
            }return k;
        }, __optionsFormat: function __optionsFormat() {
            return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = a(h.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = a(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = { mouseenter: !0, touchstart: !0 }, this.__options.triggerClose = { mouseleave: !0, originClick: !0, touchleave: !0 }) : "click" == this.__options.trigger && (this.__options.triggerOpen = { click: !0, tap: !0 }, this.__options.triggerClose = { click: !0, tap: !0 }), this._trigger("options"), this;
        }, __prepareGC: function __prepareGC() {
            var b = this;return b.__options.selfDestruction ? b.__garbageCollector = setInterval(function () {
                var c = new Date().getTime();b.__touchEvents = a.grep(b.__touchEvents, function (a, b) {
                    return c - a.time > 6e4;
                }), d(b._$origin) || b.close(function () {
                    b.destroy();
                });
            }, 2e4) : clearInterval(b.__garbageCollector), b;
        }, __prepareOrigin: function __prepareOrigin() {
            var a = this;if (a._$origin.off("." + a.__namespace + "-triggerOpen"), h.hasTouchCapability && a._$origin.on("touchstart." + a.__namespace + "-triggerOpen touchend." + a.__namespace + "-triggerOpen touchcancel." + a.__namespace + "-triggerOpen", function (b) {
                a._touchRecordEvent(b);
            }), a.__options.triggerOpen.click || a.__options.triggerOpen.tap && h.hasTouchCapability) {
                var b = "";a.__options.triggerOpen.click && (b += "click." + a.__namespace + "-triggerOpen "), a.__options.triggerOpen.tap && h.hasTouchCapability && (b += "touchend." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function (b) {
                    a._touchIsMeaningfulEvent(b) && a._open(b);
                });
            }if (a.__options.triggerOpen.mouseenter || a.__options.triggerOpen.touchstart && h.hasTouchCapability) {
                var b = "";a.__options.triggerOpen.mouseenter && (b += "mouseenter." + a.__namespace + "-triggerOpen "), a.__options.triggerOpen.touchstart && h.hasTouchCapability && (b += "touchstart." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function (b) {
                    !a._touchIsTouchEvent(b) && a._touchIsEmulatedEvent(b) || (a.__pointerIsOverOrigin = !0, a._openShortly(b));
                });
            }if (a.__options.triggerClose.mouseleave || a.__options.triggerClose.touchleave && h.hasTouchCapability) {
                var b = "";a.__options.triggerClose.mouseleave && (b += "mouseleave." + a.__namespace + "-triggerOpen "), a.__options.triggerClose.touchleave && h.hasTouchCapability && (b += "touchend." + a.__namespace + "-triggerOpen touchcancel." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function (b) {
                    a._touchIsMeaningfulEvent(b) && (a.__pointerIsOverOrigin = !1);
                });
            }return a;
        }, __prepareTooltip: function __prepareTooltip() {
            var b = this,
                c = b.__options.interactive ? "auto" : "";return b._$tooltip.attr("id", b.__namespace).css({ "pointer-events": c, zIndex: b.__options.zIndex }), a.each(b.__previousThemes, function (a, c) {
                b._$tooltip.removeClass(c);
            }), a.each(b.__options.theme, function (a, c) {
                b._$tooltip.addClass(c);
            }), b.__previousThemes = a.merge([], b.__options.theme), b;
        }, __scrollHandler: function __scrollHandler(b) {
            var c = this;if (c.__options.triggerClose.scroll) c._close(b);else if (d(c._$origin) && d(c._$tooltip)) {
                var e = null;if (b.target === h.window.document) c.__Geometry.origin.fixedLineage || c.__options.repositionOnScroll && c.reposition(b);else {
                    e = c.__geometry();var f = !1;if ("fixed" != c._$origin.css("position") && c.__$originParents.each(function (b, c) {
                        var d = a(c),
                            g = d.css("overflow-x"),
                            h = d.css("overflow-y");if ("visible" != g || "visible" != h) {
                            var i = c.getBoundingClientRect();if ("visible" != g && (e.origin.windowOffset.left < i.left || e.origin.windowOffset.right > i.right)) return f = !0, !1;if ("visible" != h && (e.origin.windowOffset.top < i.top || e.origin.windowOffset.bottom > i.bottom)) return f = !0, !1;
                        }return "fixed" == d.css("position") ? !1 : void 0;
                    }), f) c._$tooltip.css("visibility", "hidden");else if (c._$tooltip.css("visibility", "visible"), c.__options.repositionOnScroll) c.reposition(b);else {
                        var g = e.origin.offset.left - c.__Geometry.origin.offset.left,
                            i = e.origin.offset.top - c.__Geometry.origin.offset.top;c._$tooltip.css({ left: c.__lastPosition.coord.left + g, top: c.__lastPosition.coord.top + i });
                    }
                }c._trigger({ type: "scroll", event: b, geo: e });
            }return c;
        }, __stateSet: function __stateSet(a) {
            return this.__state = a, this._trigger({ type: "state", state: a }), this;
        }, __timeoutsClear: function __timeoutsClear() {
            return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, a.each(this.__timeouts.close, function (a, b) {
                clearTimeout(b);
            }), this.__timeouts.close = [], this;
        }, __trackerStart: function __trackerStart() {
            var a = this,
                b = a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip && (a.__contentBcr = b[0].getBoundingClientRect()), a.__tracker = setInterval(function () {
                if (d(a._$origin) && d(a._$tooltip)) {
                    if (a.__options.trackOrigin) {
                        var e = a.__geometry(),
                            f = !1;c(e.origin.size, a.__Geometry.origin.size) && (a.__Geometry.origin.fixedLineage ? c(e.origin.windowOffset, a.__Geometry.origin.windowOffset) && (f = !0) : c(e.origin.offset, a.__Geometry.origin.offset) && (f = !0)), f || (a.__options.triggerClose.mouseleave ? a._close() : a.reposition());
                    }if (a.__options.trackTooltip) {
                        var g = b[0].getBoundingClientRect();g.height === a.__contentBcr.height && g.width === a.__contentBcr.width || (a.reposition(), a.__contentBcr = g);
                    }
                } else a._close();
            }, a.__options.trackerInterval), a;
        }, _close: function _close(b, c, d) {
            var e = this,
                f = !0;if (e._trigger({ type: "close", event: b, stop: function stop() {
                    f = !1;
                } }), f || d) {
                c && e.__callbacks.close.push(c), e.__callbacks.open = [], e.__timeoutsClear();var g = function g() {
                    a.each(e.__callbacks.close, function (a, c) {
                        c.call(e, e, { event: b, origin: e._$origin[0] });
                    }), e.__callbacks.close = [];
                };if ("closed" != e.__state) {
                    var i = !0,
                        j = new Date(),
                        k = j.getTime(),
                        l = k + e.__options.animationDuration[1];if ("disappearing" == e.__state && l > e.__closingTime && e.__options.animationDuration[1] > 0 && (i = !1), i) {
                        e.__closingTime = l, "disappearing" != e.__state && e.__stateSet("disappearing");var m = function m() {
                            clearInterval(e.__tracker), e._trigger({ type: "closing", event: b }), e._$tooltip.off("." + e.__namespace + "-triggerClose").removeClass("tooltipster-dying"), a(h.window).off("." + e.__namespace + "-triggerClose"), e.__$originParents.each(function (b, c) {
                                a(c).off("scroll." + e.__namespace + "-triggerClose");
                            }), e.__$originParents = null, a(h.window.document.body).off("." + e.__namespace + "-triggerClose"), e._$origin.off("." + e.__namespace + "-triggerClose"), e._off("dismissable"), e.__stateSet("closed"), e._trigger({ type: "after", event: b }), e.__options.functionAfter && e.__options.functionAfter.call(e, e, { event: b, origin: e._$origin[0] }), g();
                        };h.hasTransitions ? (e._$tooltip.css({ "-moz-animation-duration": e.__options.animationDuration[1] + "ms", "-ms-animation-duration": e.__options.animationDuration[1] + "ms", "-o-animation-duration": e.__options.animationDuration[1] + "ms", "-webkit-animation-duration": e.__options.animationDuration[1] + "ms", "animation-duration": e.__options.animationDuration[1] + "ms", "transition-duration": e.__options.animationDuration[1] + "ms" }), e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), e.__options.animationDuration[1] > 0 && e._$tooltip.delay(e.__options.animationDuration[1]), e._$tooltip.queue(m)) : e._$tooltip.stop().fadeOut(e.__options.animationDuration[1], m);
                    }
                } else g();
            }return e;
        }, _off: function _off() {
            return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
        }, _on: function _on() {
            return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
        }, _one: function _one() {
            return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
        }, _open: function _open(b, c) {
            var e = this;if (!e.__destroying && d(e._$origin) && e.__enabled) {
                var f = !0;if ("closed" == e.__state && (e._trigger({ type: "before", event: b, stop: function stop() {
                        f = !1;
                    } }), f && e.__options.functionBefore && (f = e.__options.functionBefore.call(e, e, { event: b, origin: e._$origin[0] }))), f !== !1 && null !== e.__Content) {
                    c && e.__callbacks.open.push(c), e.__callbacks.close = [], e.__timeoutsClear();var g,
                        i = function i() {
                        "stable" != e.__state && e.__stateSet("stable"), a.each(e.__callbacks.open, function (a, b) {
                            b.call(e, e, { origin: e._$origin[0], tooltip: e._$tooltip[0] });
                        }), e.__callbacks.open = [];
                    };if ("closed" !== e.__state) g = 0, "disappearing" === e.__state ? (e.__stateSet("appearing"), h.hasTransitions ? (e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), e.__options.animationDuration[0] > 0 && e._$tooltip.delay(e.__options.animationDuration[0]), e._$tooltip.queue(i)) : e._$tooltip.stop().fadeIn(i)) : "stable" == e.__state && i();else {
                        if (e.__stateSet("appearing"), g = e.__options.animationDuration[0], e.__contentInsert(), e.reposition(b, !0), h.hasTransitions ? (e._$tooltip.addClass("tooltipster-" + e.__options.animation).addClass("tooltipster-initial").css({ "-moz-animation-duration": e.__options.animationDuration[0] + "ms", "-ms-animation-duration": e.__options.animationDuration[0] + "ms", "-o-animation-duration": e.__options.animationDuration[0] + "ms", "-webkit-animation-duration": e.__options.animationDuration[0] + "ms", "animation-duration": e.__options.animationDuration[0] + "ms", "transition-duration": e.__options.animationDuration[0] + "ms" }), setTimeout(function () {
                            "closed" != e.__state && (e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), e.__options.animationDuration[0] > 0 && e._$tooltip.delay(e.__options.animationDuration[0]), e._$tooltip.queue(i));
                        }, 0)) : e._$tooltip.css("display", "none").fadeIn(e.__options.animationDuration[0], i), e.__trackerStart(), a(h.window).on("resize." + e.__namespace + "-triggerClose", function (b) {
                            var c = a(document.activeElement);(c.is("input") || c.is("textarea")) && a.contains(e._$tooltip[0], c[0]) || e.reposition(b);
                        }).on("scroll." + e.__namespace + "-triggerClose", function (a) {
                            e.__scrollHandler(a);
                        }), e.__$originParents = e._$origin.parents(), e.__$originParents.each(function (b, c) {
                            a(c).on("scroll." + e.__namespace + "-triggerClose", function (a) {
                                e.__scrollHandler(a);
                            });
                        }), e.__options.triggerClose.mouseleave || e.__options.triggerClose.touchleave && h.hasTouchCapability) {
                            e._on("dismissable", function (a) {
                                a.dismissable ? a.delay ? (m = setTimeout(function () {
                                    e._close(a.event);
                                }, a.delay), e.__timeouts.close.push(m)) : e._close(a) : clearTimeout(m);
                            });var j = e._$origin,
                                k = "",
                                l = "",
                                m = null;e.__options.interactive && (j = j.add(e._$tooltip)), e.__options.triggerClose.mouseleave && (k += "mouseenter." + e.__namespace + "-triggerClose ", l += "mouseleave." + e.__namespace + "-triggerClose "), e.__options.triggerClose.touchleave && h.hasTouchCapability && (k += "touchstart." + e.__namespace + "-triggerClose", l += "touchend." + e.__namespace + "-triggerClose touchcancel." + e.__namespace + "-triggerClose"), j.on(l, function (a) {
                                if (e._touchIsTouchEvent(a) || !e._touchIsEmulatedEvent(a)) {
                                    var b = "mouseleave" == a.type ? e.__options.delay : e.__options.delayTouch;e._trigger({ delay: b[1], dismissable: !0, event: a, type: "dismissable" });
                                }
                            }).on(k, function (a) {
                                !e._touchIsTouchEvent(a) && e._touchIsEmulatedEvent(a) || e._trigger({ dismissable: !1, event: a, type: "dismissable" });
                            });
                        }e.__options.triggerClose.originClick && e._$origin.on("click." + e.__namespace + "-triggerClose", function (a) {
                            e._touchIsTouchEvent(a) || e._touchIsEmulatedEvent(a) || e._close(a);
                        }), (e.__options.triggerClose.click || e.__options.triggerClose.tap && h.hasTouchCapability) && setTimeout(function () {
                            if ("closed" != e.__state) {
                                var b = "",
                                    c = a(h.window.document.body);e.__options.triggerClose.click && (b += "click." + e.__namespace + "-triggerClose "), e.__options.triggerClose.tap && h.hasTouchCapability && (b += "touchend." + e.__namespace + "-triggerClose"), c.on(b, function (b) {
                                    e._touchIsMeaningfulEvent(b) && (e._touchRecordEvent(b), e.__options.interactive && a.contains(e._$tooltip[0], b.target) || e._close(b));
                                }), e.__options.triggerClose.tap && h.hasTouchCapability && c.on("touchstart." + e.__namespace + "-triggerClose", function (a) {
                                    e._touchRecordEvent(a);
                                });
                            }
                        }, 0), e._trigger("ready"), e.__options.functionReady && e.__options.functionReady.call(e, e, { origin: e._$origin[0], tooltip: e._$tooltip[0] });
                    }if (e.__options.timer > 0) {
                        var m = setTimeout(function () {
                            e._close();
                        }, e.__options.timer + g);e.__timeouts.close.push(m);
                    }
                }
            }return e;
        }, _openShortly: function _openShortly(a) {
            var b = this,
                c = !0;if ("stable" != b.__state && "appearing" != b.__state && !b.__timeouts.open && (b._trigger({ type: "start", event: a, stop: function stop() {
                    c = !1;
                } }), c)) {
                var d = 0 == a.type.indexOf("touch") ? b.__options.delayTouch : b.__options.delay;d[0] ? b.__timeouts.open = setTimeout(function () {
                    b.__timeouts.open = null, b.__pointerIsOverOrigin && b._touchIsMeaningfulEvent(a) ? (b._trigger("startend"), b._open(a)) : b._trigger("startcancel");
                }, d[0]) : (b._trigger("startend"), b._open(a));
            }return b;
        }, _optionsExtract: function _optionsExtract(b, c) {
            var d = this,
                e = a.extend(!0, {}, c),
                f = d.__options[b];return f || (f = {}, a.each(c, function (a, b) {
                var c = d.__options[a];void 0 !== c && (f[a] = c);
            })), a.each(e, function (b, c) {
                void 0 !== f[b] && ("object" != (typeof c === "undefined" ? "undefined" : _typeof(c)) || c instanceof Array || null == c || "object" != _typeof(f[b]) || f[b] instanceof Array || null == f[b] ? e[b] = f[b] : a.extend(e[b], f[b]));
            }), e;
        }, _plug: function _plug(b) {
            var c = a.tooltipster._plugin(b);if (!c) throw new Error('The "' + b + '" plugin is not defined');return c.instance && a.tooltipster.__bridge(c.instance, this, c.name), this;
        }, _touchIsEmulatedEvent: function _touchIsEmulatedEvent(a) {
            for (var b = !1, c = new Date().getTime(), d = this.__touchEvents.length - 1; d >= 0; d--) {
                var e = this.__touchEvents[d];if (!(c - e.time < 500)) break;e.target === a.target && (b = !0);
            }return b;
        }, _touchIsMeaningfulEvent: function _touchIsMeaningfulEvent(a) {
            return this._touchIsTouchEvent(a) && !this._touchSwiped(a.target) || !this._touchIsTouchEvent(a) && !this._touchIsEmulatedEvent(a);
        }, _touchIsTouchEvent: function _touchIsTouchEvent(a) {
            return 0 == a.type.indexOf("touch");
        }, _touchRecordEvent: function _touchRecordEvent(a) {
            return this._touchIsTouchEvent(a) && (a.time = new Date().getTime(), this.__touchEvents.push(a)), this;
        }, _touchSwiped: function _touchSwiped(a) {
            for (var b = !1, c = this.__touchEvents.length - 1; c >= 0; c--) {
                var d = this.__touchEvents[c];if ("touchmove" == d.type) {
                    b = !0;break;
                }if ("touchstart" == d.type && a === d.target) break;
            }return b;
        }, _trigger: function _trigger() {
            var b = Array.prototype.slice.apply(arguments);return "string" == typeof b[0] && (b[0] = { type: b[0] }), b[0].instance = this, b[0].origin = this._$origin ? this._$origin[0] : null, b[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, b), a.tooltipster._trigger.apply(a.tooltipster, b), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, b), this;
        }, _unplug: function _unplug(b) {
            var c = this;if (c[b]) {
                var d = a.tooltipster._plugin(b);d.instance && a.each(d.instance, function (a, d) {
                    c[a] && c[a].bridged === c[b] && delete c[a];
                }), c[b].__destroy && c[b].__destroy(), delete c[b];
            }return c;
        }, close: function close(a) {
            return this.__destroyed ? this.__destroyError() : this._close(null, a), this;
        }, content: function content(a) {
            var b = this;if (void 0 === a) return b.__Content;if (b.__destroyed) b.__destroyError();else if (b.__contentSet(a), null !== b.__Content) {
                if ("closed" !== b.__state && (b.__contentInsert(), b.reposition(), b.__options.updateAnimation)) if (h.hasTransitions) {
                    var c = b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-" + c), setTimeout(function () {
                        "closed" != b.__state && b._$tooltip.removeClass("tooltipster-update-" + c);
                    }, 1e3);
                } else b._$tooltip.fadeTo(200, .5, function () {
                    "closed" != b.__state && b._$tooltip.fadeTo(200, 1);
                });
            } else b._close();return b;
        }, destroy: function destroy() {
            var b = this;if (b.__destroyed) b.__destroyError();else {
                "closed" != b.__state ? b.option("animationDuration", 0)._close(null, null, !0) : b.__timeoutsClear(), b._trigger("destroy"), b.__destroyed = !0, b._$origin.removeData(b.__namespace).off("." + b.__namespace + "-triggerOpen"), a(h.window.document.body).off("." + b.__namespace + "-triggerOpen");var c = b._$origin.data("tooltipster-ns");if (c) if (1 === c.length) {
                    var d = null;"previous" == b.__options.restoration ? d = b._$origin.data("tooltipster-initialTitle") : "current" == b.__options.restoration && (d = "string" == typeof b.__Content ? b.__Content : a("<div></div>").append(b.__Content).html()), d && b._$origin.attr("title", d), b._$origin.removeClass("tooltipstered"), b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle");
                } else c = a.grep(c, function (a, c) {
                    return a !== b.__namespace;
                }), b._$origin.data("tooltipster-ns", c);b._trigger("destroyed"), b._off(), b.off(), b.__Content = null, b.__$emitterPrivate = null, b.__$emitterPublic = null, b.__options.parent = null, b._$origin = null, b._$tooltip = null, a.tooltipster.__instancesLatestArr = a.grep(a.tooltipster.__instancesLatestArr, function (a, c) {
                    return b !== a;
                }), clearInterval(b.__garbageCollector);
            }return b;
        }, disable: function disable() {
            return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this);
        }, elementOrigin: function elementOrigin() {
            return this.__destroyed ? void this.__destroyError() : this._$origin[0];
        }, elementTooltip: function elementTooltip() {
            return this._$tooltip ? this._$tooltip[0] : null;
        }, enable: function enable() {
            return this.__enabled = !0, this;
        }, hide: function hide(a) {
            return this.close(a);
        }, instance: function instance() {
            return this;
        }, off: function off() {
            return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        }, on: function on() {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        }, one: function one() {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        }, open: function open(a) {
            return this.__destroyed ? this.__destroyError() : this._open(null, a), this;
        }, option: function option(b, c) {
            return void 0 === c ? this.__options[b] : (this.__destroyed ? this.__destroyError() : (this.__options[b] = c, this.__optionsFormat(), a.inArray(b, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === b && this.__prepareGC()), this);
        }, reposition: function reposition(a, b) {
            var c = this;return c.__destroyed ? c.__destroyError() : "closed" != c.__state && d(c._$origin) && (b || d(c._$tooltip)) && (b || c._$tooltip.detach(), c.__Geometry = c.__geometry(), c._trigger({ type: "reposition", event: a, helper: { geo: c.__Geometry } })), c;
        }, show: function show(a) {
            return this.open(a);
        }, status: function status() {
            return { destroyed: this.__destroyed, enabled: this.__enabled, open: "closed" !== this.__state, state: this.__state };
        }, triggerHandler: function triggerHandler() {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
        } }, a.fn.tooltipster = function () {
        var b = Array.prototype.slice.apply(arguments),
            c = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if (0 === this.length) return this;if ("string" == typeof b[0]) {
            var d = "#*$~&";return this.each(function () {
                var e = a(this).data("tooltipster-ns"),
                    f = e ? a(this).data(e[0]) : null;if (!f) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');if ("function" != typeof f[b[0]]) throw new Error('Unknown method "' + b[0] + '"');this.length > 1 && "content" == b[0] && (b[1] instanceof a || "object" == _typeof(b[1]) && null != b[1] && b[1].tagName) && !f.__options.contentCloning && f.__options.debug && console.log(c);var g = f[b[0]](b[1], b[2]);return g !== f || "instance" === b[0] ? (d = g, !1) : void 0;
            }), "#*$~&" !== d ? d : this;
        }a.tooltipster.__instancesLatestArr = [];var e = b[0] && void 0 !== b[0].multiple,
            g = e && b[0].multiple || !e && f.multiple,
            h = b[0] && void 0 !== b[0].content,
            i = h && b[0].content || !h && f.content,
            j = b[0] && void 0 !== b[0].contentCloning,
            k = j && b[0].contentCloning || !j && f.contentCloning,
            l = b[0] && void 0 !== b[0].debug,
            m = l && b[0].debug || !l && f.debug;return this.length > 1 && (i instanceof a || "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i && i.tagName) && !k && m && console.log(c), this.each(function () {
            var c = !1,
                d = a(this),
                e = d.data("tooltipster-ns"),
                f = null;e ? g ? c = !0 : m && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : c = !0, c && (f = new a.Tooltipster(this, b[0]), e || (e = []), e.push(f.__namespace), d.data("tooltipster-ns", e), d.data(f.__namespace, f), f.__options.functionInit && f.__options.functionInit.call(f, f, { origin: this }), f._trigger("init")), a.tooltipster.__instancesLatestArr.push(f);
        }), this;
    }, b.prototype = { __init: function __init(b) {
            this.__$tooltip = b, this.__$tooltip.css({ left: 0, overflow: "hidden", position: "absolute", top: 0 }).find(".tooltipster-content").css("overflow", "auto"), this.$container = a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body);
        }, __forceRedraw: function __forceRedraw() {
            var a = this.__$tooltip.parent();this.__$tooltip.detach(), this.__$tooltip.appendTo(a);
        }, constrain: function constrain(a, b) {
            return this.constraints = { width: a, height: b }, this.__$tooltip.css({ display: "block", height: "", overflow: "auto", width: a }), this;
        }, destroy: function destroy() {
            this.__$tooltip.detach().find(".tooltipster-content").css({ display: "", overflow: "" }), this.$container.remove();
        }, free: function free() {
            return this.constraints = null, this.__$tooltip.css({ display: "", height: "", overflow: "visible", width: "" }), this;
        }, measure: function measure() {
            this.__forceRedraw();var a = this.__$tooltip[0].getBoundingClientRect(),
                b = { size: { height: a.height || a.bottom - a.top, width: a.width || a.right - a.left } };if (this.constraints) {
                var c = this.__$tooltip.find(".tooltipster-content"),
                    d = this.__$tooltip.outerHeight(),
                    e = c[0].getBoundingClientRect(),
                    f = { height: d <= this.constraints.height, width: a.width <= this.constraints.width && e.width >= c[0].scrollWidth - 1 };b.fits = f.height && f.width;
            }return h.IE && h.IE <= 11 && b.size.width !== h.window.document.documentElement.clientWidth && (b.size.width = Math.ceil(b.size.width) + 1), b;
        } };var j = navigator.userAgent.toLowerCase();-1 != j.indexOf("msie") ? h.IE = parseInt(j.split("msie")[1]) : -1 !== j.toLowerCase().indexOf("trident") && -1 !== j.indexOf(" rv:11") ? h.IE = 11 : -1 != j.toLowerCase().indexOf("edge/") && (h.IE = parseInt(j.toLowerCase().split("edge/")[1]));var k = "tooltipster.sideTip";return a.tooltipster._plugin({ name: k, instance: { __defaults: function __defaults() {
                return { arrow: !0, distance: 6, functionPosition: null, maxWidth: null, minIntersection: 16, minWidth: 0, position: null, side: "top", viewportAware: !0 };
            }, __init: function __init(a) {
                var b = this;b.__instance = a, b.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), b.__previousState = "closed", b.__options, b.__optionsFormat(), b.__instance._on("state." + b.__namespace, function (a) {
                    "closed" == a.state ? b.__close() : "appearing" == a.state && "closed" == b.__previousState && b.__create(), b.__previousState = a.state;
                }), b.__instance._on("options." + b.__namespace, function () {
                    b.__optionsFormat();
                }), b.__instance._on("reposition." + b.__namespace, function (a) {
                    b.__reposition(a.event, a.helper);
                });
            }, __close: function __close() {
                this.__instance.content() instanceof a && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null;
            }, __create: function __create() {
                var b = a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow || b.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && b.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && b.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = b, this.__instance._trigger("created");
            }, __destroy: function __destroy() {
                this.__instance._off("." + self.__namespace);
            }, __optionsFormat: function __optionsFormat() {
                var b = this;if (b.__options = b.__instance._optionsExtract(k, b.__defaults()), b.__options.position && (b.__options.side = b.__options.position), "object" != _typeof(b.__options.distance) && (b.__options.distance = [b.__options.distance]), b.__options.distance.length < 4 && (void 0 === b.__options.distance[1] && (b.__options.distance[1] = b.__options.distance[0]), void 0 === b.__options.distance[2] && (b.__options.distance[2] = b.__options.distance[0]), void 0 === b.__options.distance[3] && (b.__options.distance[3] = b.__options.distance[1]), b.__options.distance = { top: b.__options.distance[0], right: b.__options.distance[1], bottom: b.__options.distance[2], left: b.__options.distance[3] }), "string" == typeof b.__options.side) {
                    var c = { top: "bottom", right: "left", bottom: "top", left: "right" };b.__options.side = [b.__options.side, c[b.__options.side]], "left" == b.__options.side[0] || "right" == b.__options.side[0] ? b.__options.side.push("top", "bottom") : b.__options.side.push("right", "left");
                }6 === a.tooltipster._env.IE && b.__options.arrow !== !0 && (b.__options.arrow = !1);
            }, __reposition: function __reposition(b, c) {
                var d,
                    e = this,
                    f = e.__targetFind(c),
                    g = [];e.__instance._$tooltip.detach();var h = e.__instance._$tooltip.clone(),
                    i = a.tooltipster._getRuler(h),
                    j = !1,
                    k = e.__instance.option("animation");switch (k && h.removeClass("tooltipster-" + k), a.each(["window", "document"], function (d, k) {
                    var l = null;if (e.__instance._trigger({ container: k, helper: c, satisfied: j, takeTest: function takeTest(a) {
                            l = a;
                        }, results: g, type: "positionTest" }), 1 == l || 0 != l && 0 == j && ("window" != k || e.__options.viewportAware)) for (var d = 0; d < e.__options.side.length; d++) {
                        var m = { horizontal: 0, vertical: 0 },
                            n = e.__options.side[d];"top" == n || "bottom" == n ? m.vertical = e.__options.distance[n] : m.horizontal = e.__options.distance[n], e.__sideChange(h, n), a.each(["natural", "constrained"], function (a, d) {
                            if (l = null, e.__instance._trigger({ container: k, event: b, helper: c, mode: d, results: g, satisfied: j, side: n, takeTest: function takeTest(a) {
                                    l = a;
                                }, type: "positionTest" }), 1 == l || 0 != l && 0 == j) {
                                var h = { container: k, distance: m, fits: null, mode: d, outerSize: null, side: n, size: null, target: f[n], whole: null },
                                    o = "natural" == d ? i.free() : i.constrain(c.geo.available[k][n].width - m.horizontal, c.geo.available[k][n].height - m.vertical),
                                    p = o.measure();if (h.size = p.size, h.outerSize = { height: p.size.height + m.vertical, width: p.size.width + m.horizontal }, "natural" == d ? c.geo.available[k][n].width >= h.outerSize.width && c.geo.available[k][n].height >= h.outerSize.height ? h.fits = !0 : h.fits = !1 : h.fits = p.fits, "window" == k && (h.fits ? "top" == n || "bottom" == n ? h.whole = c.geo.origin.windowOffset.right >= e.__options.minIntersection && c.geo.window.size.width - c.geo.origin.windowOffset.left >= e.__options.minIntersection : h.whole = c.geo.origin.windowOffset.bottom >= e.__options.minIntersection && c.geo.window.size.height - c.geo.origin.windowOffset.top >= e.__options.minIntersection : h.whole = !1), g.push(h), h.whole) j = !0;else if ("natural" == h.mode && (h.fits || h.size.width <= c.geo.available[k][n].width)) return !1;
                            }
                        });
                    }
                }), e.__instance._trigger({ edit: function edit(a) {
                        g = a;
                    }, event: b, helper: c, results: g, type: "positionTested" }), g.sort(function (a, b) {
                    if (a.whole && !b.whole) return -1;if (!a.whole && b.whole) return 1;if (a.whole && b.whole) {
                        var c = e.__options.side.indexOf(a.side),
                            d = e.__options.side.indexOf(b.side);return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1;
                    }if (a.fits && !b.fits) return -1;if (!a.fits && b.fits) return 1;if (a.fits && b.fits) {
                        var c = e.__options.side.indexOf(a.side),
                            d = e.__options.side.indexOf(b.side);return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1;
                    }return "document" == a.container && "bottom" == a.side && "natural" == a.mode ? -1 : 1;
                }), d = g[0], d.coord = {}, d.side) {case "left":case "right":
                        d.coord.top = Math.floor(d.target - d.size.height / 2);break;case "bottom":case "top":
                        d.coord.left = Math.floor(d.target - d.size.width / 2);}switch (d.side) {case "left":
                        d.coord.left = c.geo.origin.windowOffset.left - d.outerSize.width;break;case "right":
                        d.coord.left = c.geo.origin.windowOffset.right + d.distance.horizontal;break;case "top":
                        d.coord.top = c.geo.origin.windowOffset.top - d.outerSize.height;break;case "bottom":
                        d.coord.top = c.geo.origin.windowOffset.bottom + d.distance.vertical;}"window" == d.container ? "top" == d.side || "bottom" == d.side ? d.coord.left < 0 ? c.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? d.coord.left = 0 : d.coord.left = c.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : d.coord.left > c.geo.window.size.width - d.size.width && (c.geo.origin.windowOffset.left + this.__options.minIntersection <= c.geo.window.size.width ? d.coord.left = c.geo.window.size.width - d.size.width : d.coord.left = c.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - d.size.width) : d.coord.top < 0 ? c.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? d.coord.top = 0 : d.coord.top = c.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : d.coord.top > c.geo.window.size.height - d.size.height && (c.geo.origin.windowOffset.top + this.__options.minIntersection <= c.geo.window.size.height ? d.coord.top = c.geo.window.size.height - d.size.height : d.coord.top = c.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - d.size.height) : (d.coord.left > c.geo.window.size.width - d.size.width && (d.coord.left = c.geo.window.size.width - d.size.width), d.coord.left < 0 && (d.coord.left = 0)), e.__sideChange(h, d.side), c.tooltipClone = h[0], c.tooltipParent = e.__instance.option("parent").parent[0], c.mode = d.mode, c.whole = d.whole, c.origin = e.__instance._$origin[0], c.tooltip = e.__instance._$tooltip[0], delete d.container, delete d.fits, delete d.mode, delete d.outerSize, delete d.whole, d.distance = d.distance.horizontal || d.distance.vertical;var l = a.extend(!0, {}, d);if (e.__instance._trigger({ edit: function edit(a) {
                        d = a;
                    }, event: b, helper: c, position: l, type: "position" }), e.__options.functionPosition) {
                    var m = e.__options.functionPosition.call(e, e.__instance, c, l);m && (d = m);
                }i.destroy();var n, o;"top" == d.side || "bottom" == d.side ? (n = { prop: "left", val: d.target - d.coord.left }, o = d.size.width - this.__options.minIntersection) : (n = { prop: "top", val: d.target - d.coord.top }, o = d.size.height - this.__options.minIntersection), n.val < this.__options.minIntersection ? n.val = this.__options.minIntersection : n.val > o && (n.val = o);var p;p = c.geo.origin.fixedLineage ? c.geo.origin.windowOffset : { left: c.geo.origin.windowOffset.left + c.geo.window.scroll.left, top: c.geo.origin.windowOffset.top + c.geo.window.scroll.top }, d.coord = { left: p.left + (d.coord.left - c.geo.origin.windowOffset.left), top: p.top + (d.coord.top - c.geo.origin.windowOffset.top) }, e.__sideChange(e.__instance._$tooltip, d.side), c.geo.origin.fixedLineage ? e.__instance._$tooltip.css("position", "fixed") : e.__instance._$tooltip.css("position", ""), e.__instance._$tooltip.css({ left: d.coord.left, top: d.coord.top, height: d.size.height, width: d.size.width }).find(".tooltipster-arrow").css({ left: "", top: "" }).css(n.prop, n.val), e.__instance._$tooltip.appendTo(e.__instance.option("parent")), e.__instance._trigger({ type: "repositioned", event: b, position: d });
            }, __sideChange: function __sideChange(a, b) {
                a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + b);
            }, __targetFind: function __targetFind(a) {
                var b = {},
                    c = this.__instance._$origin[0].getClientRects();if (c.length > 1) {
                    var d = this.__instance._$origin.css("opacity");1 == d && (this.__instance._$origin.css("opacity", .99), c = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1));
                }if (c.length < 2) b.top = Math.floor(a.geo.origin.windowOffset.left + a.geo.origin.size.width / 2), b.bottom = b.top, b.left = Math.floor(a.geo.origin.windowOffset.top + a.geo.origin.size.height / 2), b.right = b.left;else {
                    var e = c[0];b.top = Math.floor(e.left + (e.right - e.left) / 2), e = c.length > 2 ? c[Math.ceil(c.length / 2) - 1] : c[0], b.right = Math.floor(e.top + (e.bottom - e.top) / 2), e = c[c.length - 1], b.bottom = Math.floor(e.left + (e.right - e.left) / 2), e = c.length > 2 ? c[Math.ceil((c.length + 1) / 2) - 1] : c[c.length - 1], b.left = Math.floor(e.top + (e.bottom - e.top) / 2);
                }return b;
            } } }), a;
});
/*! Backstretch - v2.1.15 - 2017-06-22\n* Copyright (c) 2017 Scott Robbin;* Fork of improvements - by Daniel Cohen Gindi (danielgindi@gmail.com) Licensed MIT */!function (a, b, c) {
    "use strict";
    function d(a) {
        return m.hasOwnProperty(a) ? a : "cover";
    }var e = /^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;a.fn.backstretch = function (d, e) {
        var f = arguments;0 === a(b).scrollTop() && b.scrollTo(0, 0);var g;return this.each(function (b) {
            var h = a(this),
                i = h.data("backstretch");if (i) {
                if ("string" == typeof f[0] && "function" == typeof i[f[0]]) {
                    var j = i[f[0]].apply(i, Array.prototype.slice.call(f, 1));return j === i && (j = c), void (j !== c && (g = g || [], g[b] = j));
                }e = a.extend(i.options, e), i.hasOwnProperty("destroy") && i.destroy(!0);
            }if (!d || d && 0 === d.length) {
                var k = h.css("background-image");k && "none" !== k ? d = [{ url: h.css("backgroundImage").replace(/url\(|\)|"|'/g, "") }] : a.error("No images were supplied for Backstretch, or element must have a CSS-defined background image.");
            }i = new n(this, d, e || {}), h.data("backstretch", i);
        }), g ? 1 === g.length ? g[0] : g : this;
    }, a.backstretch = function (b, c) {
        return a("body").backstretch(b, c).data("backstretch");
    }, a.expr[":"].backstretch = function (b) {
        return a(b).data("backstretch") !== c;
    }, a.fn.backstretch.defaults = { duration: 5e3, transition: "fade", transitionDuration: 0, animateFirst: !0, alignX: .5, alignY: .5, paused: !1, start: 0, preload: 2, preloadSize: 1, resolutionRefreshRate: 2500, resolutionChangeRatioThreshold: .1 };var f = { wrap: { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 }, itemWrapper: { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "100%", height: "100%", zIndex: -999999 }, item: { position: "absolute", margin: 0, padding: 0, border: "none", width: "100%", height: "100%", maxWidth: "none" } },
        g = function () {
        var c = function c(a) {
            for (var b = 1; b < a.length; b++) {
                for (var c = a[b], d = b; a[d - 1] && parseInt(a[d - 1].width, 10) > parseInt(c.width, 10);) {
                    a[d] = a[d - 1], --d;
                }a[d] = c;
            }return a;
        },
            d = function d(a, c, _d) {
            for (var e, f, g = b.devicePixelRatio || 1, h = q(), i = (r(), c > a ? "portrait" : a > c ? "landscape" : "square"), j = 0, k = 0; k < _d.length && (f = _d[k], "string" == typeof f && (f = _d[k] = { url: f }), f.pixelRatio && "auto" !== f.pixelRatio && parseFloat(f.pixelRatio) !== g || f.deviceOrientation && f.deviceOrientation !== h || f.windowOrientation && f.windowOrientation !== h || f.orientation && f.orientation !== i || (j = k, e = a, "auto" === f.pixelRatio && (a *= g), !(f.width >= e))); k++) {}return _d[Math.min(k, j)];
        },
            e = function e(a, b) {
            if ("string" == typeof a) a = a.replace(/{{(width|height)}}/g, b);else if (a instanceof Array) for (var c = 0; c < a.length; c++) {
                a[c].src ? a[c].src = e(a[c].src, b) : a[c] = e(a[c], b);
            }return a;
        };return function (b, f) {
            for (var g = b.width(), h = b.height(), i = [], j = function j(a, b) {
                return "width" === b ? g : "height" === b ? h : a;
            }, k = 0; k < f.length; k++) {
                if (a.isArray(f[k])) {
                    f[k] = c(f[k]);var l = d(g, h, f[k]);i.push(l);
                } else {
                    "string" == typeof f[k] && (f[k] = { url: f[k] });var m = a.extend({}, f[k]);m.url = e(m.url, j), i.push(m);
                }
            }return i;
        };
    }(),
        h = function h(a) {
        return e.test(a.url) || a.isVideo;
    },
        i = function (b, c, d, e, f) {
        var g = [],
            i = function i(a) {
            for (var b = 0; b < g.length; b++) {
                if (g[b].src === a.src) return g[b];
            }return g.push(a), a;
        },
            j = function j(a, b, c) {
            "function" == typeof b && b.call(a, c);
        };return function b(c, d, e, f, g) {
            if ("undefined" != typeof c) {
                a.isArray(c) || (c = [c]), arguments.length < 5 && "function" == typeof arguments[arguments.length - 1] && (g = arguments[arguments.length - 1]), d = "function" != typeof d && d ? d : 0, e = "function" == typeof e || !e || e < 0 ? c.length : Math.min(e, c.length), f = "function" != typeof f && f ? f : 1, d >= c.length && (d = 0, e = 0), f < 0 && (f = e), f = Math.min(f, e);var k = c.slice(d + f, e - f);if (c = c.slice(d, f), e = c.length, !e) return void j(c, g, !0);for (var l, m = 0, n = function n() {
                    m++, m === e && (j(c, g, !k), b(k, 0, 0, f, g));
                }, o = 0; o < c.length; o++) {
                    h(c[o]) || (l = new Image(), l.src = c[o].url, l = i(l), l.complete ? n() : a(l).on("load error", n));
                }
            }
        };
    }(),
        j = function j(b) {
        for (var c = [], d = 0; d < b.length; d++) {
            "string" == typeof b[d] ? c.push({ url: b[d] }) : a.isArray(b[d]) ? c.push(j(b[d])) : c.push(k(b[d]));
        }return c;
    },
        k = function k(a, e) {
        return (a.centeredX || a.centeredY) && (b.console && b.console.log && b.console.log("jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`"), a.centeredX && (a.alignX = .5), a.centeredY && (a.alignY = .5)), a.speed !== c && (b.console && b.console.log && b.console.log("jquery.backstretch: `speed` is deprecated, please use `transitionDuration`"), a.transitionDuration = a.speed, a.transition = "fade"), a.resolutionChangeRatioTreshold !== c && (b.console.log("jquery.backstretch: `treshold` is a typo!"), a.resolutionChangeRatioThreshold = a.resolutionChangeRatioTreshold), a.fadeFirst !== c && (a.animateFirst = a.fadeFirst), a.fade !== c && (a.transitionDuration = a.fade, a.transition = "fade"), a.scale && (a.scale = d(a.scale)), l(a);
    },
        l = function l(a, b) {
        return "left" === a.alignX ? a.alignX = 0 : "center" === a.alignX ? a.alignX = .5 : "right" === a.alignX ? a.alignX = 1 : (a.alignX !== c || b) && (a.alignX = parseFloat(a.alignX), isNaN(a.alignX) && (a.alignX = .5)), "top" === a.alignY ? a.alignY = 0 : "center" === a.alignY ? a.alignY = .5 : "bottom" === a.alignY ? a.alignY = 1 : (a.alignX !== c || b) && (a.alignY = parseFloat(a.alignY), isNaN(a.alignY) && (a.alignY = .5)), a;
    },
        m = { cover: "cover", fit: "fit", "fit-smaller": "fit-smaller", fill: "fill" },
        n = function n(c, d, e) {
        this.options = a.extend({}, a.fn.backstretch.defaults, e || {}), this.firstShow = !0, k(this.options, !0), this.images = j(a.isArray(d) ? d : [d]), this.options.paused && (this.paused = !0), this.options.start >= this.images.length && (this.options.start = this.images.length - 1), this.options.start < 0 && (this.options.start = 0), this.isBody = c === document.body;var h = a(b);this.$container = a(c), this.$root = this.isBody ? s ? h : a(document) : this.$container, this.originalImages = this.images, this.images = g(this.options.alwaysTestWindowResolution ? h : this.$root, this.originalImages), i(this.images, this.options.start || 0, this.options.preload || 1);var l = this.$container.children(".backstretch").first();if (this.$wrap = l.length ? l : a('<div class="backstretch"></div>').css(this.options.bypassCss ? {} : f.wrap).appendTo(this.$container), !this.options.bypassCss) {
            if (!this.isBody) {
                var m = this.$container.css("position"),
                    n = this.$container.css("zIndex");this.$container.css({ position: "static" === m ? "relative" : m, zIndex: "auto" === n ? 0 : n }), this.$wrap.css({ zIndex: -999998 });
            }this.$wrap.css({ position: this.isBody && s ? "fixed" : "absolute" });
        }this.index = this.options.start, this.show(this.index), h.on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
            this.isBody && 0 === b.pageYOffset && (b.scrollTo(0, 1), this.resize());
        }, this));
    },
        o = function o(b) {
        var d = b.transition || "fade";"string" == typeof d && d.indexOf("|") > -1 && (d = d.split("|")), d instanceof Array && (d = d[Math.round(Math.random() * (d.length - 1))]);var e = b.new,
            f = b.old ? b.old : a([]);switch (d.toString().toLowerCase()) {default:case "fade":
                e.fadeIn({ duration: b.duration, complete: b.complete, easing: b.easing || c });break;case "fadeinout":case "fade_in_out":
                var g = function g() {
                    e.fadeIn({ duration: b.duration / 2, complete: b.complete, easing: b.easing || c });
                };f.length ? f.fadeOut({ duration: b.duration / 2, complete: g, easing: b.easing || c }) : g();break;case "pushleft":case "push_left":case "pushright":case "push_right":case "pushup":case "push_up":case "pushdown":case "push_down":case "coverleft":case "cover_left":case "coverright":case "cover_right":case "coverup":case "cover_up":case "coverdown":case "cover_down":
                var h = d.match(/^(cover|push)_?(.*)$/),
                    i = "left" === h[2] ? "right" : "right" === h[2] ? "left" : "down" === h[2] ? "top" : "up" === h[2] ? "bottom" : "right",
                    j = { display: "" },
                    k = {};if (j[i] = "-100%", k[i] = 0, e.css(j).animate(k, { duration: b.duration, complete: function complete() {
                        e.css(i, ""), b.complete.apply(this, arguments);
                    }, easing: b.easing || c }), "push" === h[1] && f.length) {
                    var l = {};l[i] = "100%", f.animate(l, { duration: b.duration, complete: function complete() {
                            f.css("display", "none");
                        }, easing: b.easing || c });
                }}
    };n.prototype = { resize: function resize() {
            try {
                var e = this.options.alwaysTestWindowResolution ? a(b) : this.$root,
                    f = e.width(),
                    h = e.height(),
                    j = f / (this._lastResizeContainerWidth || 0),
                    k = h / (this._lastResizeContainerHeight || 0),
                    l = this.options.resolutionChangeRatioThreshold || 0;if ((f !== this._lastResizeContainerWidth || h !== this._lastResizeContainerHeight) && (Math.abs(j - 1) >= l || isNaN(j) || Math.abs(k - 1) >= l || isNaN(k)) && (this._lastResizeContainerWidth = f, this._lastResizeContainerHeight = h, this.images = g(e, this.originalImages), this.options.preload && i(this.images, (this.index + 1) % this.images.length, this.options.preload), 1 === this.images.length && this._currentImage.url !== this.images[0].url)) {
                    var m = this;clearTimeout(m._selectAnotherResolutionTimeout), m._selectAnotherResolutionTimeout = setTimeout(function () {
                        m.show(0);
                    }, this.options.resolutionRefreshRate);
                }var n,
                    o,
                    p = { left: 0, top: 0, right: "auto", bottom: "auto" },
                    q = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                    r = this.isBody ? b.innerHeight ? b.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    s = this.$itemWrapper.data("width"),
                    t = this.$itemWrapper.data("height"),
                    u = s / t || 1,
                    v = this._currentImage.alignX === c ? this.options.alignX : this._currentImage.alignX,
                    w = this._currentImage.alignY === c ? this.options.alignY : this._currentImage.alignY,
                    x = d(this._currentImage.scale || this.options.scale);if ("fit" === x || "fit-smaller" === x) {
                    if (n = s, o = t, n > q || o > r || "fit-smaller" === x) {
                        var y = q / r;y > u ? (n = Math.floor(r * u), o = r) : y < u ? (n = q, o = Math.floor(q / u)) : (n = q, o = r);
                    }
                } else "fill" === x ? (n = q, o = r) : (n = Math.max(r * u, q), o = Math.max(n / u, r));p.top = -(o - r) * w, p.left = -(n - q) * v, p.width = n, p.height = o, this.options.bypassCss || this.$wrap.css({ width: q, height: r }).find(">.backstretch-item").not(".deleteable").each(function () {
                    var b = a(this);b.find("img,video,iframe").css(p);
                });var z = a.Event("backstretch.resize", { relatedTarget: this.$container[0] });this.$container.trigger(z, this);
            } catch (a) {}return this;
        }, show: function show(b, d) {
            if (!(Math.abs(b) > this.images.length - 1)) {
                var e = this,
                    g = e.$wrap.find(">.backstretch-item").addClass("deleteable"),
                    i = e.videoWrapper,
                    j = { relatedTarget: e.$container[0] };e.$container.trigger(a.Event("backstretch.before", j), [e, b]), this.index = b;var k = e.images[b];clearTimeout(e._cycleTimeout), delete e.videoWrapper;var l = h(k);return l ? (e.videoWrapper = new p(k), e.$item = e.videoWrapper.$video.css("pointer-events", "none")) : e.$item = a("<img />"), e.$itemWrapper = a('<div class="backstretch-item">').append(e.$item), this.options.bypassCss ? e.$itemWrapper.css({ display: "none" }) : (e.$itemWrapper.css(f.itemWrapper), e.$item.css(f.item)), e.$item.bind(l ? "canplay" : "load", function (f) {
                    var h = a(this),
                        k = h.parent(),
                        m = k.data("options");d && (m = a.extend({}, m, d));var n = this.naturalWidth || this.videoWidth || this.width,
                        p = this.naturalHeight || this.videoHeight || this.height;k.data("width", n).data("height", p);var q = function q(a) {
                        return m[a] !== c ? m[a] : e.options[a];
                    },
                        r = q("transition"),
                        s = q("transitionEasing"),
                        t = q("transitionDuration"),
                        u = function u() {
                        i && (i.stop(), i.destroy()), g.remove(), !e.paused && e.images.length > 1 && e.cycle(), e.options.bypassCss || e.isBody || e.$container.css("background-image", "none"), a(["after", "show"]).each(function () {
                            e.$container.trigger(a.Event("backstretch." + this, j), [e, b]);
                        }), l && e.videoWrapper.play();
                    };e.firstShow && !e.options.animateFirst || !t || !r ? (k.show(), u()) : o({ new: k, old: g, transition: r, duration: t, easing: s, complete: u }), e.firstShow = !1, e.resize();
                }), e.$itemWrapper.appendTo(e.$wrap), e.$item.attr("alt", k.alt || ""), e.$itemWrapper.data("options", k), l || e.$item.attr("src", k.url), e._currentImage = k, e;
            }
        }, current: function current() {
            return this.index;
        }, next: function next() {
            var a = Array.prototype.slice.call(arguments, 0);return a.unshift(this.index < this.images.length - 1 ? this.index + 1 : 0), this.show.apply(this, a);
        }, prev: function prev() {
            var a = Array.prototype.slice.call(arguments, 0);return a.unshift(0 === this.index ? this.images.length - 1 : this.index - 1), this.show.apply(this, a);
        }, pause: function pause() {
            return this.paused = !0, this.videoWrapper && this.videoWrapper.pause(), this;
        }, resume: function resume() {
            return this.paused = !1, this.videoWrapper && this.videoWrapper.play(), this.cycle(), this;
        }, cycle: function cycle() {
            if (this.images.length > 1) {
                clearTimeout(this._cycleTimeout);var b = this._currentImage && this._currentImage.duration || this.options.duration,
                    c = h(this._currentImage),
                    d = function d() {
                    this.$item.off(".cycle"), this.paused || this.next();
                };if (c) {
                    if (!this._currentImage.loop) {
                        var e = 0;this.$item.on("playing.cycle", function () {
                            var b = a(this).data("player");clearTimeout(e), e = setTimeout(function () {
                                b.pause(), b.$video.trigger("ended");
                            }, 1e3 * (b.getDuration() - b.getCurrentTime()));
                        }).on("ended.cycle", function () {
                            clearTimeout(e);
                        });
                    }this.$item.on("error.cycle initerror.cycle", a.proxy(d, this));
                }c && !this._currentImage.duration ? this.$item.on("ended.cycle", a.proxy(d, this)) : this._cycleTimeout = setTimeout(a.proxy(d, this), b);
            }return this;
        }, destroy: function destroy(c) {
            a(b).off("resize.backstretch orientationchange.backstretch"), this.videoWrapper && this.videoWrapper.destroy(), clearTimeout(this._cycleTimeout), c || this.$wrap.remove(), this.$container.removeData("backstretch");
        } };var p = function p() {
        this.init.apply(this, arguments);
    };p.prototype.init = function (d) {
        var f,
            g = this,
            h = function h() {
            g.$video = f, g.video = f[0];
        },
            i = "video";if (d.url instanceof Array || !e.test(d.url) || (i = "youtube"), g.type = i, "youtube" === i) {
            p.loadYoutubeAPI(), g.ytId = d.url.match(e)[2];var j = "https://www.youtube.com/embed/" + g.ytId + "?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0&enablejsapi=1&origin=" + encodeURIComponent(b.location.origin);g.__ytStartMuted = !!d.mute || d.mute === c, f = a("<iframe />").attr({ src_to_load: j }).css({ border: 0, margin: 0, padding: 0 }).data("player", g), d.loop && f.on("ended.loop", function () {
                g.__manuallyStopped || g.play();
            }), g.ytReady = !1, h(), b.YT ? (g._initYoutube(), f.trigger("initsuccess")) : a(b).one("youtube_api_load", function () {
                g._initYoutube(), f.trigger("initsuccess");
            });
        } else {
            f = a("<video>").prop("autoplay", !1).prop("controls", !1).prop("loop", !!d.loop).prop("muted", !!d.mute || d.mute === c).prop("preload", "auto").prop("poster", d.poster || "");for (var k = d.url instanceof Array ? d.url : [d.url], l = 0; l < k.length; l++) {
                var m = k[l];"string" == typeof m && (m = { src: m }), a("<source>").attr("src", m.src).attr("type", m.type || null).appendTo(f);
            }f[0].canPlayType && k.length ? f.trigger("initsuccess") : f.trigger("initerror"), h();
        }
    }, p.prototype._initYoutube = function () {
        var c = this,
            d = b.YT;c.$video.attr("src", c.$video.attr("src_to_load")).removeAttr("src_to_load");var e = !!c.$video[0].parentNode;if (!e) {
            var f = a("<div>").css("display", "none !important").appendTo(document.body);c.$video.appendTo(f);
        }var g = new d.Player(c.video, { events: { onReady: function onReady() {
                    c.__ytStartMuted && g.mute(), e || (c.$video[0].parentNode === f[0] && c.$video.detach(), f.remove()), c.ytReady = !0, c._updateYoutubeSize(), c.$video.trigger("canplay");
                }, onStateChange: function onStateChange(a) {
                    switch (a.data) {case d.PlayerState.PLAYING:
                            c.$video.trigger("playing");break;case d.PlayerState.ENDED:
                            c.$video.trigger("ended");break;case d.PlayerState.PAUSED:
                            c.$video.trigger("pause");break;case d.PlayerState.BUFFERING:
                            c.$video.trigger("waiting");break;case d.PlayerState.CUED:
                            c.$video.trigger("canplay");}
                }, onPlaybackQualityChange: function onPlaybackQualityChange() {
                    c._updateYoutubeSize(), c.$video.trigger("resize");
                }, onError: function onError(a) {
                    c.hasError = !0, c.$video.trigger({ type: "error", error: a });
                } } });return c.ytPlayer = g, c;
    }, p.prototype._updateYoutubeSize = function () {
        var a = this;switch (a.ytPlayer.getPlaybackQuality() || "medium") {case "small":
                a.video.videoWidth = 426, a.video.videoHeight = 240;break;case "medium":
                a.video.videoWidth = 640, a.video.videoHeight = 360;break;default:case "large":
                a.video.videoWidth = 854, a.video.videoHeight = 480;break;case "hd720":
                a.video.videoWidth = 1280, a.video.videoHeight = 720;break;case "hd1080":
                a.video.videoWidth = 1920, a.video.videoHeight = 1080;break;case "highres":
                a.video.videoWidth = 2560, a.video.videoHeight = 1440;}return a;
    }, p.prototype.play = function () {
        var a = this;return a.__manuallyStopped = !1, "youtube" === a.type ? a.ytReady && (a.$video.trigger("play"), a.ytPlayer.playVideo()) : a.video.play(), a;
    }, p.prototype.pause = function () {
        var a = this;return a.__manuallyStopped = !1, "youtube" === a.type ? a.ytReady && a.ytPlayer.pauseVideo() : a.video.pause(), a;
    }, p.prototype.stop = function () {
        var a = this;return a.__manuallyStopped = !0, "youtube" === a.type ? a.ytReady && (a.ytPlayer.pauseVideo(), a.ytPlayer.seekTo(0)) : (a.video.pause(), a.video.currentTime = 0), a;
    }, p.prototype.destroy = function () {
        var a = this;return a.ytPlayer && a.ytPlayer.destroy(), a.$video.remove(), a;
    }, p.prototype.getCurrentTime = function (a) {
        var b = this;return "youtube" !== b.type ? b.video.currentTime : b.ytReady ? b.ytPlayer.getCurrentTime() : 0;
    }, p.prototype.setCurrentTime = function (a) {
        var b = this;return "youtube" === b.type ? b.ytReady && b.ytPlayer.seekTo(a, !0) : b.video.currentTime = a, b;
    }, p.prototype.getDuration = function () {
        var a = this;return "youtube" !== a.type ? a.video.duration : a.ytReady ? a.ytPlayer.getDuration() : 0;
    }, p.loadYoutubeAPI = function () {
        if (!b.YT) {
            a("script[src*=www\\.youtube\\.com\\/iframe_api]").length || a('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo("body");var c = setInterval(function () {
                b.YT && b.YT.loaded && (a(b).trigger("youtube_api_load"), clearTimeout(c));
            }, 50);
        }
    };var q = function q() {
        if ("matchMedia" in b) {
            if (b.matchMedia("(orientation: portrait)").matches) return "portrait";if (b.matchMedia("(orientation: landscape)").matches) return "landscape";
        }return screen.height > screen.width ? "portrait" : "landscape";
    },
        r = function r() {
        return b.innerHeight > b.innerWidth ? "portrait" : b.innerWidth > b.innerHeight ? "landscape" : "square";
    },
        s = function () {
        var a = navigator.userAgent,
            c = navigator.platform,
            d = a.match(/AppleWebKit\/([0-9]+)/),
            e = !!d && d[1],
            f = a.match(/Fennec\/([0-9]+)/),
            g = !!f && f[1],
            h = a.match(/Opera Mobi\/([0-9]+)/),
            i = !!h && h[1],
            j = a.match(/MSIE ([0-9]+)/),
            k = !!j && j[1];return !((c.indexOf("iPhone") > -1 || c.indexOf("iPad") > -1 || c.indexOf("iPod") > -1) && e && e < 534 || b.operamini && "[object OperaMini]" === {}.toString.call(b.operamini) || h && i < 7458 || a.indexOf("Android") > -1 && e && e < 533 || g && g < 6 || "palmGetResource" in b && e && e < 534 || a.indexOf("MeeGo") > -1 && a.indexOf("NokiaBrowser/8.5.0") > -1 || k && k <= 6);
    }();
}(jQuery, window);
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this);
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)), this.setup(), this.initialize();
    }e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function run() {
            this._width = this.$element.width();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        } }, { filter: ["items", "settings"], run: function run() {
            this.$stage.children(".cloned").remove();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e;
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];for (a.items = { merge: !1, width: b }; d--;) {
                c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            }this._widths = f;
        } }, { filter: ["items", "settings"], run: function run() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";for (g /= 2; g--;) {
                b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            }this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
        } }, { filter: ["width", "items", "settings"], run: function run() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
                d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            }this._coordinates = f;
        } }, { filter: ["width", "items", "settings"], run: function run() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };this.$stage.css(c);
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();if (c && a.items.merge) for (; b--;) {
                a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            } else c && (a.css.width = a.items.width, d.css(a.css));
        } }, { filter: ["items"], run: function run() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
        } }, { filter: ["position"], run: function run() {
            this.animate(this.coordinates(this._current));
        } }, { filter: ["width", "position", "items", "settings"], run: function run() {
            var a,
                b,
                c,
                d,
                e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];for (c = 0, d = this._coordinates.length; c < d; c++) {
                a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            }this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
        } }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
        }this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.setup = function () {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } });
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data;
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a];
        }, this._invalidated), e = {}; b < c;) {
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        }this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {case e.Width.Inner:case e.Width.Outer:
                return this._width;default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;}
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function (b) {
        var d = null;3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
        }, this)));
    }, e.prototype.onDragMove = function (a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function (b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" });
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;if (0 === this._items.length) return d;if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
        }return this._current;
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b;
        });
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
        var b,
            c,
            d,
            e = this.settings,
            f = this._coordinates.length;if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {}f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function f(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };return b === d ? a.map(this._clones, function (a, b) {
            return f(b);
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
        var c,
            e = 1,
            f = b - 1;return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function () {
        var d;return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType;
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c });
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a }));
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this));
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));for (var d in this._plugins) {
            this._plugins[d].destroy();
        }this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;switch (b) {case "<":
                return d ? a > c : a < c;case ">":
                return d ? a < c : a > c;case ">=":
                return d ? a <= c : a >= c;case "<=":
                return d ? a >= c : a <= c;}
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a;
        }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
        }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this));
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--;
        }, this));
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                }, a.event.special[b.name].owl = !0;
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d;
        }, this)));
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.pointer = function (a) {
        var c = { x: null, y: null };return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a));
    }, e.prototype.difference = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);return this.each(function () {
            var d = a(this),
                f = d.data("owl.carousel");f || (f = new e(this, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, f));
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function () {
        var a, c;b.clearInterval(this._interval);for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b);
                }, this); f++ < e;) {
                    this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { lazyLoad: !1 }, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e,
                f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
                f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this._core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;a.each(d, function (b, c) {
            e.push(a(c).height());
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function () {
        var a, b;for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a);
        }, this));
    };e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) {
        var c = function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
        }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");if (!g) throw new Error("Missing video URL.");if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");c = "vzaar";
        }d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function (b, c) {
        var d,
            e,
            f,
            g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function l(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
        };if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a[0].thumbnail_large, l(f);
            } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a.framegrab_url, l(f);
            } });
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function (b) {
        var c,
            d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function () {
        var a, b;this._core.$element.off("click.owl.video");for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this) }, this.core.$element.on(this.handlers);
    };e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);var b,
                c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this.core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c);
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop();
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
            }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
        }, this), d || this._core.settings.autoplayTimeout);
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
    }, e.prototype.destroy = function () {
        var a, b;this.stop();for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () {
        var b,
            c = this._core.settings;this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed);
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed);
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this));for (b in this._overrides) {
            this._core[b] = a.proxy(this[b], this);
        }
    }, e.prototype.destroy = function () {
        var a, b, c, d;for (a in this._handlers) {
            this.$element.off(a, this._handlers[a]);
        }for (b in this._controls) {
            this._controls[b].remove();
        }for (d in this.overides) {
            this._core[d] = this._overrides[d];
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, e.prototype.update = function () {
        var a,
            b,
            c,
            d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;b = 0, ++c;
            }b += this._core.mergers(this._core.relative(a));
        }
    }, e.prototype.draw = function () {
        var b,
            c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b;
        }, this)).pop();
    }, e.prototype.getPosition = function (b) {
        var c,
            d,
            e = this._core.settings;return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function (b, c, d) {
        var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if (!c) return;this._hashes[c] = b.content;
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null;
                    }).join();if (!e || b.location.hash.slice(1) === e) return;b.location.hash = e;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
        }, this));
    };e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () {
        var c, d;a(b).off("hashchange.owl.navigation");for (c in this._handlers) {
            this._core.$element.off(c, this._handlers[c]);
        }for (d in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[d] && (this[d] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1;
        }), e;
    }function f(a) {
        return e(a, !0);
    }var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function csstransforms() {
            return !!e("transform");
        }, csstransforms3d: function csstransforms3d() {
            return !!e("perspective");
        }, csstransitions: function csstransitions() {
            return !!e("transition");
        }, cssanimations: function cssanimations() {
            return !!e("animation");
        } };j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function d(a) {
            var b,
                c = [],
                d = a.length;for (b = 0; b !== d; c.push(a[b++])) {}return c;
        },
            e = function e(a, b, c) {
            var d,
                e,
                f = a.cycle;for (d in f) {
                e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
            }delete a.cycle;
        },
            f = function f(a, b, d) {
            c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render;
        },
            g = 1e-10,
            h = c._internals,
            i = h.isSelector,
            j = h.isArray,
            k = f.prototype = c.to({}, .1, {}),
            l = [];f.version = "1.20.3", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this);
        }, k.updateTo = function (a, b) {
            var d,
                e = this.ratio,
                f = this.vars.immediateRender || a.immediateRender;b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));for (d in a) {
                this.vars[d] = a[d];
            }if (this._initted || f) if (b) this._initted = !1, f && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var g = this._totalTime;this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1);
            } else if (this._initted = !1, this._init(), this._time > 0 || f) for (var h, i = 1 / (1 - e), j = this._firstPT; j;) {
                h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
            }return this;
        }, k.render = function (a, b, d) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();var e,
                f,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                q = this._time,
                r = this._totalTime,
                s = this._cycle,
                t = this._duration,
                u = this._rawPrevTime;if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q === this._time && !d && s === this._cycle) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;if (!d && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void (this._lazy = [a, b]);!this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t);
            }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;) {
                i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
            }this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0));
        }, f.to = function (a, b, c) {
            return new f(a, b, c);
        }, f.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c);
        }, f.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d);
        }, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
            h = h || 0;var o,
                p,
                q,
                r,
                s = 0,
                t = [],
                u = function u() {
                g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l);
            },
                v = g.cycle,
                w = g.startAt && g.startAt.cycle;for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                p = {};for (r in g) {
                    p[r] = g[r];
                }if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                    w = p.startAt = {};for (r in g.startAt) {
                        w[r] = g.startAt[r];
                    }e(p.startAt, a, q);
                }p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h;
            }return t;
        }, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h);
        }, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i);
        }, f.delayedCall = function (a, b, c, d, e) {
            return new f(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: e, overwrite: 0 });
        }, f.set = function (a, b) {
            return new f(a, 0, b);
        }, f.isTweening = function (a) {
            return c.getTweensOf(a, !0).length > 0;
        };var m = function m(a, b) {
            for (var d = [], e = 0, f = a._first; f;) {
                f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
            }return d;
        },
            n = f.getAllTweens = function (b) {
            return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
        };f.killAll = function (a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);var f,
                g,
                h,
                i = n(0 != e),
                j = i.length,
                k = c && d && e;for (h = 0; j > h; h++) {
                g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
            }
        }, f.killChildTweensOf = function (a, b) {
            if (null != a) {
                var e,
                    g,
                    k,
                    l,
                    m,
                    n = h.tweenLookup;if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a)) for (l = a.length; --l > -1;) {
                    f.killChildTweensOf(a[l], b);
                } else {
                    e = [];for (k in n) {
                        for (g = n[k].target.parentNode; g;) {
                            g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                        }
                    }for (m = e.length, l = 0; m > l; l++) {
                        b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
                    }
                }
            }
        };var o = function o(a, c, d, e) {
            c = c !== !1, d = d !== !1, e = e !== !1;for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) {
                g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
            }
        };return f.pauseAll = function (a, b, c) {
            o(!0, a, b, c);
        }, f.resumeAll = function (a, b, c) {
            o(!1, a, b, c);
        }, f.globalTimeScale = function (b) {
            var d = a._rootTimeline,
                e = c.ticker.time;return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale;
        }, k.progress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
        }, k.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
        }, k.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time;
        }, k.duration = function (b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
        }, k.totalDuration = function (a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
        }, k.repeat = function (a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, k.repeatDelay = function (a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, k.yoyo = function (a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, f;
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function d(a) {
            b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;var c,
                d,
                e = this.vars;for (d in e) {
                c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
            }i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
        },
            e = 1e-10,
            f = c._internals,
            g = d._internals = {},
            h = f.isSelector,
            i = f.isArray,
            j = f.lazyTweens,
            k = f.lazyRender,
            l = _gsScope._gsDefine.globals,
            m = function m(a) {
            var b,
                c = {};for (b in a) {
                c[b] = a[b];
            }return c;
        },
            n = function n(a, b, c) {
            var d,
                e,
                f = a.cycle;for (d in f) {
                e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
            }delete a.cycle;
        },
            o = g.pauseCallback = function () {},
            p = function p(a) {
            var b,
                c = [],
                d = a.length;for (b = 0; b !== d; c.push(a[b++])) {}return c;
        },
            q = d.prototype = new b();return d.version = "1.20.3", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
        }, q.from = function (a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e);
        }, q.fromTo = function (a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l,
                o,
                q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
                r = e.cycle;for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) {
                l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
            }return this.add(q, g);
        }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h);
        }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i);
        }, q.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        }, q.set = function (a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
        }, d.exportRoot = function (a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);var e,
                f,
                g,
                h,
                i = new d(a),
                j = i._timeline;for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) {
                h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
            }return j.add(i, 0), e && i.totalDuration(), i;
        }, q.add = function (e, f, g, h) {
            var j, k, l, m, n, o;if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) {
                        i(m = e[l]) && (m = new d({ tweens: m })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                    }return this._uncache(!0);
                }if ("string" == typeof e) return this.addLabel(e, f);if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";e = c.delayedCall(0, e);
            }if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (n = this, o = n.rawTime() > e._startTime; n._timeline;) {
                o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
            }return this;
        }, q.remove = function (b) {
            if (b instanceof a) {
                this._remove(b, !1);var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
            }if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; --d > -1;) {
                    this.remove(b[d]);
                }return this;
            }return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, q._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);var d = this._last;return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
        }, q.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, q.insert = q.insertMultiple = function (a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, q.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, q.addLabel = function (a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, q.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
        }, q.removeLabel = function (a) {
            return delete this._labels[a], this;
        }, q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, q._parseTimeOrLabel = function (b, c, d, e) {
            var f, g;if (e instanceof a && e.timeline === this) this.remove(e);else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; --g > -1;) {
                e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
            }if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);else {
                if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
            }return Number(b) + c;
        }, q.seek = function (a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
        }, q.stop = function () {
            return this.paused(!0);
        }, q.gotoAndPlay = function (a, b) {
            return this.play(a, b);
        }, q.gotoAndStop = function (a, b) {
            return this.pause(a, b);
        }, q.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);var d,
                f,
                g,
                h,
                i,
                l,
                m,
                n = this._time,
                o = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._startTime,
                q = this._timeScale,
                r = this._paused;if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;else if (1e-7 > a) {
                if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;else {
                    if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) {
                        d._duration || (f = !1), d = d._next;
                    }a = 0, this._initted || (i = !0);
                }
            } else {
                if (this._hasPause && !this._forcingPlayhead && !b) {
                    if (a >= n) for (d = this._first; d && d._startTime <= a && !l;) {
                        d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                    } else for (d = this._last; d && d._startTime >= a && !l;) {
                        d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                    }l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
                }this._totalTime = this._time = this._rawPrevTime = a;
            }if (this._time !== n && this._first || c || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n) for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));) {
                    (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                } else for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                    if (d._active || d._startTime <= n && !d._paused && !d._gc) {
                        if (l === d) {
                            for (l = d._prev; l && l.endTime() > this._time;) {
                                l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                            }l = null, this.pause();
                        }d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                    }d = g;
                }this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)));
            }
        }, q._hasPausedChild = function () {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;a = a._next;
            }return !1;
        }, q.getChildren = function (a, b, d, e) {
            e = e || -9999999999;for (var f = [], g = this._first, h = 0; g;) {
                g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            }return f;
        }, q.getTweensOf = function (a, b) {
            var d,
                e,
                f = this._gc,
                g = [],
                h = 0;for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) {
                (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            }return f && this._enabled(!1, !0), g;
        }, q.recent = function () {
            return this._recent;
        }, q._contains = function (a) {
            for (var b = a.timeline; b;) {
                if (b === this) return !0;b = b.timeline;
            }return !1;
        }, q.shiftChildren = function (a, b, c) {
            c = c || 0;for (var d, e = this._first, f = this._labels; e;) {
                e._startTime >= c && (e._startTime += a), e = e._next;
            }if (b) for (d in f) {
                f[d] >= c && (f[d] += a);
            }return this._uncache(!0);
        }, q._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) {
                c[d]._kill(a, b) && (e = !0);
            }return e;
        }, q.clear = function (a) {
            var b = this.getChildren(!1, !0, !0),
                c = b.length;for (this._time = this._totalTime = 0; --c > -1;) {
                b[c]._enabled(!1, !1);
            }return a !== !1 && (this._labels = {}), this._uncache(!0);
        }, q.invalidate = function () {
            for (var b = this._first; b;) {
                b.invalidate(), b = b._next;
            }return a.prototype.invalidate.call(this);
        }, q._enabled = function (a, c) {
            if (a === this._gc) for (var d = this._first; d;) {
                d._enabled(a, !0), d = d._next;
            }return b.prototype._enabled.call(this, a, c);
        }, q.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;var e = a.prototype.totalTime.apply(this, arguments);return this._forcingPlayhead = !1, e;
        }, q.duration = function (a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
        }, q.totalDuration = function (a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;) {
                        b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                    }this._duration = this._totalDuration = d, this._dirty = !1;
                }return this._totalDuration;
            }return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
        }, q.paused = function (b) {
            if (!b) for (var c = this._first, d = this._time; c;) {
                c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
            }return a.prototype.paused.apply(this, arguments);
        }, q.usesFrames = function () {
            for (var b = this._timeline; b._timeline;) {
                b = b._timeline;
            }return b === a._rootFramesTimeline;
        }, q.rawTime = function (a) {
            return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
        }, d;
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
        var d = function d(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
        },
            e = 1e-10,
            f = b._internals,
            g = f.lazyTweens,
            h = f.lazyRender,
            i = _gsScope._gsDefine.globals,
            j = new c(null, null, 1, 0),
            k = d.prototype = new a();return k.constructor = d, k.kill()._gc = !1, d.version = "1.20.3", k.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
        }, k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        }, k.removeCallback = function (a, b) {
            if (a) if (null == b) this._kill(null, a);else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) {
                c[d]._startTime === e && c[d]._enabled(!1, !1);
            }return this;
        }, k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
        }, k.tweenTo = function (a, c) {
            c = c || {};var d,
                e,
                f,
                g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1 },
                h = c.repeat && i.TweenMax || b;for (e in c) {
                g[e] = c[e];
            }return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
                f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
            }, f;
        }, k.tweenFromTo = function (a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }, c.immediateRender = c.immediateRender !== !1;var d = this.tweenTo(b, c);return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);var d,
                f,
                i,
                j,
                k,
                l,
                m,
                n,
                o = this._time,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                q = this._duration,
                r = this._totalTime,
                s = this._startTime,
                t = this._timeScale,
                u = this._rawPrevTime,
                v = this._paused,
                w = this._cycle;if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4);else if (1e-7 > a) {
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;else {
                    if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) {
                        d._duration || (f = !1), d = d._next;
                    }a = 0, this._initted || (k = !0);
                }
            } else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                if (a = this._time, a >= o || this._repeat && w !== this._cycle) for (d = this._first; d && d._startTime <= a && !m;) {
                    d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
                } else for (d = this._last; d && d._startTime >= a && !m;) {
                    d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                }m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
            }if (this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w),
                    y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                    z = this._totalTime,
                    A = this._cycle,
                    B = this._rawPrevTime,
                    C = this._time;if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return;if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return;this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B;
            }if (!(this._time !== o && this._first || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= o) for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));) {
                (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
            } else for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                    if (m === d) {
                        for (m = d._prev; m && m.endTime() > this._time;) {
                            m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                        }m = null, this.pause();
                    }d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                }d = i;
            }this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)));
        }, k.getActive = function (a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);var d,
                e,
                f = [],
                g = this.getChildren(a, b, c),
                h = 0,
                i = g.length;for (d = 0; i > d; d++) {
                e = g[d], e.isActive() && (f[h++] = e);
            }return f;
        }, k.getLabelAfter = function (a) {
            a || 0 !== a && (a = this._time);var b,
                c = this.getLabelsArray(),
                d = c.length;for (b = 0; d > b; b++) {
                if (c[b].time > a) return c[b].name;
            }return null;
        }, k.getLabelBefore = function (a) {
            null == a && (a = this._time);for (var b = this.getLabelsArray(), c = b.length; --c > -1;) {
                if (b[c].time < a) return b[c].name;
            }return null;
        }, k.getLabelsArray = function () {
            var a,
                b = [],
                c = 0;for (a in this._labels) {
                b[c++] = { time: this._labels[a], name: a };
            }return b.sort(function (a, b) {
                return a.time - b.time;
            }), b;
        }, k.invalidate = function () {
            return this._locked = !1, a.prototype.invalidate.call(this);
        }, k.progress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
        }, k.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
        }, k.totalDuration = function (b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
        }, k.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time;
        }, k.repeat = function (a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, k.repeatDelay = function (a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, k.yoyo = function (a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, k.currentLabel = function (a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
        }, d;
    }, !0), function () {
        var a = 180 / Math.PI,
            b = [],
            c = [],
            d = [],
            e = {},
            f = _gsScope._gsDefine.globals,
            g = function g(a, b, c, d) {
            c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a;
        },
            h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            i = function i(a, b, c, d) {
            var e = { a: a },
                f = {},
                g = {},
                h = { c: d },
                i = (a + b) / 2,
                j = (b + c) / 2,
                k = (c + d) / 2,
                l = (i + j) / 2,
                m = (j + k) / 2,
                n = (m - l) / 8;return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h];
        },
            j = function j(a, e, f, g, h) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w = a.length - 1,
                x = 0,
                y = a[0].a;for (j = 0; w > j; j++) {
                n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
            }n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
        },
            k = function k(a, d, e, f) {
            var h,
                i,
                j,
                k,
                l,
                m,
                n = [];if (f) for (a = [f].concat(a), i = a.length; --i > -1;) {
                "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
            }if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;for (i = 0; h > i; i++) {
                j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
            }return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n;
        },
            l = function l(a, f, g, i, _l, m) {
            var n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v = {},
                w = [],
                x = m || a[0];_l = "string" == typeof _l ? "," + _l + "," : h, null == f && (f = 1);for (o in a[0]) {
                w.push(o);
            }if (a.length > 1) {
                for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;) {
                    if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                        t = !1;break;
                    }
                }t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
            }for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) {
                o = w[n], e[o] = -1 !== _l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
            }for (n = b.length; --n > -1;) {
                b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
            }if (!i) {
                for (n = w.length; --n > -1;) {
                    if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) {
                        r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                    }
                }for (n = d.length; --n > -1;) {
                    d[n] = Math.sqrt(d[n]);
                }
            }for (n = w.length, q = g ? 4 : 1; --n > -1;) {
                o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
            }return v;
        },
            m = function m(a, b, c) {
            b = b || "soft";var d,
                e,
                f,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p = {},
                q = "cubic" === b ? 3 : 2,
                r = "soft" === b,
                s = [];if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";for (m in a[0]) {
                s.push(m);
            }for (j = s.length; --j > -1;) {
                for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) {
                    d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                }for (l = n - q + 1, n = 0, k = 0; l > k; k += q) {
                    d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                }i.length = n;
            }return p;
        },
            n = function n(a, b, c) {
            for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;) {
                for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) {
                    j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d;
                }
            }
        },
            o = function o(a, b) {
            b = b >> 0 || 6;var c,
                d,
                e,
                f,
                g = [],
                h = [],
                i = 0,
                j = 0,
                k = b - 1,
                l = [],
                m = [];for (c in a) {
                n(a[c], g, b);
            }for (e = g.length, d = 0; e > d; d++) {
                i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
            }return { length: j, lengths: h, segments: l };
        },
            p = _gsScope._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function init(a, b, c) {
                this._target = a, b instanceof Array && (b = { values: b }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);var d,
                    e,
                    f,
                    g,
                    h,
                    i = b.values || [],
                    j = {},
                    k = i[0],
                    n = b.autoRotate || c.vars.orientToBezier;this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;for (d in k) {
                    this._props.push(d);
                }for (f = this._props.length; --f > -1;) {
                    d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                }if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                    var p = o(this._beziers, this._timeRes);this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
                }if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                    for (g = 0; 3 > g; g++) {
                        d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                    }d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d);
                }return this._startRatio = c.vars.runBackwards ? 1 : 0, !0;
            }, set: function set(b) {
                var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = this._segCount,
                    n = this._func,
                    o = this._target,
                    p = b !== this._startRatio;if (this._timeRes) {
                    if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                        for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;) {}this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
                    } else if (b < this._l1 && e > 0) {
                        for (; e > 0 && (this._l1 = k[--e]) >= b;) {}0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
                    }if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                        for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;) {}this._s1 = l[e - 1], this._si = e;
                    } else if (b < this._s1 && e > 0) {
                        for (; e > 0 && (this._s1 = l[--e]) >= b;) {}0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
                    }h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;for (d = 1 - h, e = this._props.length; --e > -1;) {
                    f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                }if (this._autoRotate) {
                    var q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w,
                        x = this._autoRotate;for (e = x.length; --e > -1;) {
                        f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i);
                    }
                }
            } }),
            q = p.prototype;p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }, p._cssRegister = function () {
            var a = f.CSSPlugin;if (a) {
                var b = a._internals,
                    c = b._parseToProxy,
                    d = b._setPluginRatio,
                    e = b.CSSPropTween;b._registerComplexSpecialProp("bezier", { parser: function parser(a, b, f, g, h, i) {
                        b instanceof Array && (b = { values: b }), i = new p();var j,
                            k,
                            l,
                            m = b.values,
                            n = m.length - 1,
                            o = [],
                            q = {};if (0 > n) return h;for (j = 0; n >= j; j++) {
                            l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                        }for (k in b) {
                            q[k] = b[k];
                        }return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h;
                    } });
            }
        }, q._mod = function (a) {
            for (var b, c = this._overwriteProps, d = c.length; --d > -1;) {
                b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b);
            }
        }, q._kill = function (a) {
            var b,
                c,
                d = this._props;for (b in this._beziers) {
                if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) {
                    d[c] === b && d.splice(c, 1);
                }
            }if (d = this._autoRotate) for (c = d.length; --c > -1;) {
                a[d[c][2]] && d.splice(c, 1);
            }return this._super._kill.call(this, a);
        };
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
        var c,
            d,
            e,
            f,
            g = function g() {
            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
        },
            h = _gsScope._gsDefine.globals,
            i = {},
            j = g.prototype = new a("css");j.constructor = g, g.version = "1.20.3", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" };var k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g,
            x = /opacity *= *([^)]*)/i,
            y = /opacity:([^;]*)/i,
            z = /alpha\(opacity *=.+?\)/i,
            A = /^(rgb|hsl)/,
            B = /([A-Z])/g,
            C = /-([a-z])/gi,
            D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            E = function E(a, b) {
            return b.toUpperCase();
        },
            F = /(?:Left|Right|Width)/i,
            G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            I = /,(?=[^\)]*(?:\(|$))/gi,
            J = /[\s,\(]/i,
            K = Math.PI / 180,
            L = 180 / Math.PI,
            M = {},
            N = { style: {} },
            O = _gsScope.document || { createElement: function createElement() {
                return N;
            } },
            P = function P(a, b) {
            return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a);
        },
            Q = P("div"),
            R = P("img"),
            S = g._internals = { _specialProps: i },
            T = (_gsScope.navigator || {}).userAgent || "",
            U = function () {
            var a = T.indexOf("Android"),
                b = P("a");return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1;
        }(),
            V = function V(a) {
            return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        },
            W = function W(a) {
            _gsScope.console && console.log(a);
        },
            X = "",
            Y = "",
            Z = function Z(a, b) {
            b = b || Q;var c,
                d,
                e = b.style;if (void 0 !== e[a]) return a;for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) {}return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null;
        },
            $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
            _ = g.getStyle = function (a, b, c, d, e) {
            var f;return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a);
        },
            aa = S.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || !e && "lineHeight" !== c) return d;if ("auto" === e || !d) return 0;var h,
                i,
                j,
                k = F.test(c),
                l = a,
                m = Q.style,
                n = 0 > d,
                o = 1 === d;if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) {
                if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);else {
                    if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;else {
                        if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;m[k ? "width" : "height"] = d + e;
                    }l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0));
                }
            } else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;return o && (h /= 100), n ? -h : h;
        },
            ba = S.calculateOffset = function (a, b, c) {
            if ("absolute" !== _(a, "position", c)) return 0;var d = "left" === b ? "Left" : "Top",
                e = _(a, "margin" + d, c);return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0);
        },
            ca = function ca(a, b) {
            var c,
                d,
                e,
                f = {};if (b = b || $(a, null)) {
                if (c = b.length) for (; --c > -1;) {
                    e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                } else for (c in b) {
                    (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                }
            } else if (b = a.currentStyle || a.style) for (c in b) {
                "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
            }return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f;
        },
            da = function da(a, b, c, d, e) {
            var f,
                g,
                h,
                i = {},
                j = a.style;for (g in c) {
                "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
            }if (d) for (g in d) {
                "className" !== g && (i[g] = d[g]);
            }return { difs: i, firstMPT: h };
        },
            ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ga = function ga(a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                e = ea[b],
                f = e.length;for (c = c || $(a, null); --f > -1;) {
                d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
            }return d;
        },
            ha = function ha(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";(null == a || "" === a) && (a = "0 0");var c,
                d = a.split(" "),
                e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];if (d.length > 3 && !b) {
                for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) {
                    a.push(ha(d[c]));
                }return a.join(",");
            }return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a;
        },
            ia = function ia(a, b) {
            return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
        },
            ja = function ja(a, b) {
            return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
        },
            ka = function ka(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j = 1e-6;return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h;
        },
            la = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
            ma = function ma(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
        },
            na = g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;if (a) {
                if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];else if ("hsl" === a.substr(0, 3)) {
                        if (c = m = a.match(s), b) {
                            if (-1 !== a.indexOf("=")) return a.match(t);
                        } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                    } else c = a.match(s) || la.transparent;c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]));
                }
            } else c = la.black;return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c;
        },
            oa = function oa(a, b) {
            var c,
                d,
                e,
                f = a.match(pa) || [],
                g = 0,
                h = "";if (!f.length) return a;for (c = 0; c < f.length; c++) {
                d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            }return h + a.substr(g);
        },
            pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for (j in la) {
            pa += "|" + j + "\\b";
        }pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
            var b,
                c = a[0] + " " + a[1];pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0;
        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);var qa = function qa(a, b, c, d) {
            if (null == a) return function (a) {
                return a;
            };var e,
                f = b ? (a.match(pa) || [""])[0] : "",
                g = a.split(f).join("").match(u) || [],
                h = a.substr(0, a.indexOf(g[0])),
                i = ")" === a.charAt(a.length - 1) ? ")" : "",
                j = -1 !== a.indexOf(" ") ? " " : ",",
                k = g.length,
                l = k > 0 ? g[0].replace(s, "") : "";return k ? e = b ? function (a) {
                var b, m, n, o;if ("number" == typeof a) a += l;else if (d && I.test(a)) {
                    for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) {
                        o[n] = e(o[n]);
                    }return o.join(",");
                }if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;) {
                    m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                }return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
            } : function (a) {
                var b, f, m;if ("number" == typeof a) a += l;else if (d && I.test(a)) {
                    for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) {
                        f[m] = e(f[m]);
                    }return f.join(",");
                }if (b = a.match(u) || [], m = b.length, k > m--) for (; ++m < k;) {
                    b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                }return h + b.join(j) + i;
            } : function (a) {
                return a;
            };
        },
            ra = function ra(a) {
            return a = a.split(","), function (b, c, d, e, f, g, h) {
                var i,
                    j = (c + "").split(" ");for (h = {}, i = 0; 4 > i; i++) {
                    h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                }return e.parse(b, h, f, g);
            };
        },
            sa = (S._setPluginRatio = function (a) {
            this.plugin.setRatio(a);for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) {
                b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
            }if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                if (c = i.t, c.type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) {
                            e += c["xn" + d] + c["xs" + (d + 1)];
                        }c[f] = e;
                    }
                } else c[f] = c.s + c.xs0;i = i._next;
            }
        }, function (a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
        }),
            ta = (S._parseToProxy = function (a, b, c, d, e, f) {
            var g,
                h,
                i,
                j,
                k,
                l = d,
                m = {},
                n = {},
                o = c._transform,
                p = M;for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) {
                    i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                }d = d._next;
            }return { proxy: m, end: n, firstMPT: j, pt: k };
        }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
        }),
            ua = function ua(a, b, c, d, e, f) {
            var g = new ta(a, b, c, d - c, e, -1, f);return g.b = c, g.e = g.xs0 = d, g;
        },
            va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);var m,
                n,
                o,
                p,
                u,
                v,
                w,
                x,
                y,
                z,
                A,
                B,
                C,
                D = c.split(", ").join(",").split(" "),
                E = d.split(", ").join(",").split(" "),
                F = D.length,
                G = k !== !1;for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++) {
                if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;else if (v = p.match(s)) {
                    if (w = u.match(t), !w || w.length !== v.length) return h;for (o = 0, n = 0; n < v.length; n++) {
                        A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                    }h["xs" + h.l] += p.substr(o);
                } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            }if (-1 !== d.indexOf("=") && h.data) {
                for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) {
                    B += h["xs" + m] + h.data["xn" + m];
                }h.e = B + h["xs" + m];
            }return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
        },
            wa = 9;for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) {
            j["xn" + wa] = 0, j["xs" + wa] = "";
        }j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
            var g = this,
                h = g.l;return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = { s: b + c }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
        };var xa = function xa(a, b) {
            b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0;
        },
            ya = S._registerComplexSpecialProp = function (a, b, c) {
            "object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) && (b = { parser: c });var d,
                e,
                f = a.split(","),
                g = b.defaultValue;for (c = c || [g], d = 0; d < f.length; d++) {
                b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b);
            }
        },
            za = S._registerPluginProp = function (a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";ya(a, { parser: function parser(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
                    } });
            }
        };j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
            var g,
                h,
                i,
                j,
                k,
                l,
                m = this.keyword;if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) {
                    b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                }b = h.join(", "), c = i.join(", ");
            }return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }, j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
        }, g.registerSpecialProp = function (a, b, c) {
            ya(a, { parser: function parser(a, d, e, f, g, h, i) {
                    var j = new ta(a, e, 0, 0, g, 2, e, !1, c);return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
                }, priority: c });
        }, g.useSVGTransformAttr = !0;var Aa,
            Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Ca = Z("transform"),
            Da = X + "transform",
            Ea = Z("transformOrigin"),
            Fa = null !== Z("perspective"),
            Ga = S.Transform = function () {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1;
        },
            Ha = _gsScope.SVGElement,
            Ia = function Ia(a, b, c) {
            var d,
                e = O.createElementNS("http://www.w3.org/2000/svg", a),
                f = /([a-z])([A-Z])/g;for (d in c) {
                e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            }return b.appendChild(e), e;
        },
            Ja = O.documentElement || {},
            Ka = function () {
            var a,
                b,
                c,
                d = p || /Android/i.test(T) && !_gsScope.chrome;return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, { width: 100, height: 50, x: 100 }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d;
        }(),
            La = function La(a, b, c, d, e, f) {
            var h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v = a._gsTransform,
                w = Qa(a, !0);v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = { x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0, y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
        },
            Ma = function Ma(a) {
            var b,
                c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                d = this.parentNode,
                e = this.nextSibling,
                f = this.style.cssText;if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma;
            } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b;
        },
            Na = function Na(a) {
            try {
                return a.getBBox();
            } catch (b) {
                return Ma.call(a, !0);
            }
        },
            Oa = function Oa(a) {
            return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a));
        },
            Pa = [1, 0, 0, 1, 0, 0],
            Qa = function Qa(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i = a._gsTransform || new Ga(),
                j = 1e5,
                k = a.style;if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Pa;for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) {
                f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
            }return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
        },
            Ra = S.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;var f,
                h,
                i,
                j,
                k,
                l,
                m = d ? a._gsTransform || new Ga() : new Ga(),
                n = m.scaleX < 0,
                o = 2e-5,
                p = 1e5,
                q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                r = parseFloat(g.defaultTransformPerspective) || 0;if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
                if (16 === f.length) {
                    var s,
                        t,
                        u,
                        v,
                        w,
                        x = f[0],
                        y = f[1],
                        z = f[2],
                        A = f[3],
                        B = f[4],
                        C = f[5],
                        D = f[6],
                        E = f[7],
                        F = f[8],
                        G = f[9],
                        H = f[10],
                        I = f[12],
                        J = f[13],
                        K = f[14],
                        M = f[11],
                        N = Math.atan2(D, H);m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
                } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                    var O = f.length >= 6,
                        P = O ? f[0] : 1,
                        Q = f[1] || 0,
                        R = f[2] || 0,
                        S = O ? f[3] : 1;m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
                }Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;for (h in m) {
                    m[h] < o && m[h] > -o && (m[h] = 0);
                }
            }return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
                Va(a.style, Ca);
            }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
                a.removeAttribute("transform");
            }))), m;
        },
            Sa = function Sa(a) {
            var b,
                c,
                d = this.data,
                e = -d.rotation * K,
                f = e + d.skewX * K,
                g = 1e5,
                h = (Math.cos(e) * d.scaleX * g | 0) / g,
                i = (Math.sin(e) * d.scaleX * g | 0) / g,
                j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                k = (Math.cos(f) * d.scaleY * g | 0) / g,
                l = this.t.style,
                m = this.t.currentStyle;if (m) {
                c = i, i = -j, j = -c, b = m.filter, l.filter = "";var n,
                    o,
                    q = this.t.offsetWidth,
                    r = this.t.offsetHeight,
                    s = "absolute" !== m.position,
                    t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                    u = d.x + q * d.xPercent / 100,
                    v = d.y + r * d.yPercent / 100;if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                    var y,
                        z,
                        A,
                        B = 8 > p ? 1 : -1;for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) {
                        z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px";
                    }
                }
            }
        },
            Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z = this.data,
                A = this.t.style,
                B = z.rotation,
                C = z.rotationX,
                D = z.rotationY,
                E = z.scaleX,
                F = z.scaleY,
                G = z.scaleZ,
                H = z.x,
                I = z.y,
                J = z.z,
                L = z.svg,
                M = z.perspective,
                N = z.force3D,
                O = z.skewY,
                P = z.skewX;if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void (B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;else {
                if (!(D || C || 1 !== G || M || L)) return void (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));c = g = 1, d = f = 0;
            }k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u;
        };j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function parser(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;d._lastParsedTransform = i;var j,
                    k = i.scale && "function" == typeof i.scale ? i.scale : 0;"function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));var l,
                    m,
                    n,
                    o,
                    p,
                    s,
                    t,
                    u,
                    v,
                    w = a._gsTransform,
                    x = a.style,
                    y = 1e-6,
                    z = Ba.length,
                    A = i,
                    B = {},
                    C = "transformOrigin",
                    D = Ra(a, e, !0, A.parseTransform),
                    E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));else if ("object" == (typeof A === "undefined" ? "undefined" : _typeof(A))) {
                    if (l = { scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX), scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY), scaleZ: ja(A.scaleZ, D.scaleZ), x: ja(A.x, D.x), y: ja(A.y, D.y), z: ja(A.z, D.z), xPercent: ja(A.xPercent, D.xPercent), yPercent: ja(A.yPercent, D.yPercent), perspective: ja(A.transformPerspective, D.perspective) }, p = A.directionalRotation, null != p) if ("object" == (typeof p === "undefined" ? "undefined" : _typeof(p))) for (m in p) {
                        A[m] = p[m];
                    } else A.rotation = p;"string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY);
                }for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) {
                    v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                }return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f;
            }, prefix: !0 }), ya("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ya("borderRadius", { defaultValue: "0px", parser: function parser(a, b, c, f, g, h) {
                b = this.format(b);var i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s,
                    t,
                    u,
                    v,
                    w,
                    x,
                    y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    z = a.style;for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) {
                    this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                }return g;
            }, prefix: !0, formatter: qa("0px 0px 0px 0px", !1, !0) }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function parser(a, b, c, d, f, g) {
                return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
            }, prefix: !0, formatter: qa("0px 0px", !1, !0) }), ya("backgroundPosition", { defaultValue: "0 0", parser: function parser(a, b, c, d, f, g) {
                var h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n = "background-position",
                    o = e || $(a, null),
                    q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    r = this.format(b);if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) {
                        q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    }q = h.join(" ");
                }return this.parseComplex(a.style, q, r, f, g);
            }, formatter: ha }), ya("backgroundSize", { defaultValue: "0 0", formatter: function formatter(a) {
                return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a);
            } }), ya("perspective", { defaultValue: "0px", prefix: !0 }), ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ya("transformStyle", { prefix: !0 }), ya("backfaceVisibility", { prefix: !0 }), ya("userSelect", { prefix: !0 }), ya("margin", { parser: ra("marginTop,marginRight,marginBottom,marginLeft") }), ya("padding", { parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ya("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function parser(a, b, c, d, f, g) {
                var h, i, j;return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
            } }), ya("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ya("autoRound,strictUnits", { parser: function parser(a, b, c, d, e) {
                return e;
            } }), ya("border", { defaultValue: "0px solid #000", parser: function parser(a, b, c, d, f, g) {
                var h = _(a, "borderTopWidth", e, !1, "0px"),
                    i = this.format(b).split(" "),
                    j = i[0].replace(w, "");return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
            }, color: !0, formatter: function formatter(a) {
                var b = a.split(" ");return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0];
            } }), ya("borderWidth", { parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ya("float,cssFloat,styleFloat", { parser: function parser(a, b, c, d, e, f) {
                var g = a.style,
                    h = "cssFloat" in g ? "cssFloat" : "styleFloat";return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            } });var Ua = function Ua(a) {
            var b,
                c = this.t,
                d = c.filter || _(this.data, "filter") || "",
                e = this.s + this.c * a | 0;100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e));
        };ya("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function parser(a, b, c, d, f, g) {
                var h = parseFloat(_(a, "opacity", e, !1, "1")),
                    i = a.style,
                    j = "autoAlpha" === c;return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
            } });var Va = function Va(a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
        },
            Wa = function Wa(a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);for (var b = this.data, c = this.t.style; b;) {
                    b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                }1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
        };ya("className", { parser: function parser(a, b, d, f, g, h, i) {
                var j,
                    k,
                    l,
                    m,
                    n,
                    o = a.getAttribute("class") || "",
                    p = a.style.cssText;if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n;) {
                        m[n.p] = 1, n = n._next;
                    }l.setRatio(1);
                }return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h);
            } });var Xa = function Xa(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this.t.style,
                    h = i.transform.parse;if ("all" === this.e) g.cssText = "", e = !0;else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) {
                    c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                }e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
            }
        };for (ya("clearProps", { parser: function parser(a, b, d, e, f) {
                return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f;
            } }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) {
            za(j[wa]);
        }j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;var n,
                p,
                s,
                t,
                u,
                v,
                w,
                x,
                z,
                A = a.style;if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) {
                    s = s._next;
                }x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop();
            }if (c) {
                for (; p;) {
                    for (v = p._next, s = t; s && s.pr > p.pr;) {
                        s = s._next;
                    }(p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v;
                }this._firstPT = t;
            }return !0;
        }, j.parse = function (a, b, c, f) {
            var g,
                h,
                j,
                l,
                m,
                n,
                o,
                p,
                s,
                t,
                u = a.style;for (g in b) {
                if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);else {
                    if ("--" === g.substr(0, 2)) {
                        this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);continue;
                    }m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p));
                }f && c && !c.plugin && (c.plugin = f);
            }return c;
        }, j.setRatio = function (a) {
            var b,
                c,
                d,
                e = this._firstPT,
                f = 1e-6;if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
                    if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type) {
                        if (1 === e.type) {
                            if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {
                                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                                    c += e["xn" + d] + e["xs" + (d + 1)];
                                }e.t[e.p] = c;
                            }
                        } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                    } else e.t[e.p] = b + e.xs0;e = e._next;
                } else for (; e;) {
                    2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                }
            } else for (; e;) {
                if (2 !== e.type) {
                    if (e.r && -1 !== e.type) {
                        if (b = Math.round(e.s + e.c), e.type) {
                            if (1 === e.type) {
                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                                    c += e["xn" + d] + e["xs" + (d + 1)];
                                }e.t[e.p] = c;
                            }
                        } else e.t[e.p] = b + e.xs0;
                    } else e.t[e.p] = e.e;
                } else e.setRatio(a);e = e._next;
            }
        }, j._enableTransforms = function (a) {
            this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3;
        };var Ya = function Ya(a) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
        };j._addLazySet = function (a, b, c) {
            var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);d.e = c, d.setRatio = Ya, d.data = this;
        }, j._linkCSSP = function (a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a;
        }, j._mod = function (a) {
            for (var b = this._firstPT; b;) {
                "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next;
            }
        }, j._kill = function (b) {
            var c,
                d,
                e,
                f = b;if (b.autoAlpha || b.alpha) {
                f = {};for (d in b) {
                    f[d] = b[d];
                }f.opacity = 1, f.autoAlpha && (f.visibility = 1);
            }for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) {
                c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
            }return a.prototype._kill.call(this, f);
        };var Za = function Za(a, b, c) {
            var d, e, f, g;if (a.slice) for (e = a.length; --e > -1;) {
                Za(a[e], b, c);
            } else for (d = a.childNodes, e = d.length; --e > -1;) {
                f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c);
            }
        };return g.cascadeTo = function (a, c, d) {
            var e,
                f,
                g,
                h,
                i = b.to(a, c, d),
                j = [i],
                k = [],
                l = [],
                m = [],
                n = b._internals.reservedProps;for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) {
                if (f = da(m[e], k[e], l[e]), f.firstMPT) {
                    f = f.difs;for (g in d) {
                        n[g] && (f[g] = d[g]);
                    }h = {};for (g in f) {
                        h[g] = k[e][g];
                    }j.push(b.fromTo(m[e], c, h, f));
                }
            }return j;
        }, a.activate([g]), g;
    }, !0), function () {
        var a = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.6.0", priority: -1, API: 2, init: function init(a, b, c) {
                return this._tween = c, !0;
            } }),
            b = function b(a) {
            for (; a;) {
                a.f || a.blob || (a.m = Math.round), a = a._next;
            }
        },
            c = a.prototype;c._onInitAllProps = function () {
            for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) {
                h[f[g]] = Math.round;
            }for (g = f.length; --g > -1;) {
                for (a = f[g], c = e._firstPT; c;) {
                    d = c._next, c.pg ? c.t._mod(h) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
                }
            }return !1;
        }, c._add = function (a, b, c, d) {
            this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b);
        };
    }(), function () {
        _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function init(a, b, c, d) {
                var e, f;if ("function" != typeof a.setAttribute) return !1;for (e in b) {
                    f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                }return !0;
            } });
    }(), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function init(a, b, c, d) {
            "object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) && (b = { rotation: b }), this.finals = {};var e,
                f,
                g,
                h,
                i,
                j,
                k = b.useRadians === !0 ? 2 * Math.PI : 360,
                l = 1e-6;for (e in b) {
                "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
            }return !0;
        }, set: function set(a) {
            var b;if (1 !== a) this._super.setRatio.call(this, a);else for (b = this._firstPT; b;) {
                b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next;
            }
        } })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
        var b,
            c,
            d,
            e = _gsScope.GreenSockGlobals || _gsScope,
            f = e.com.greensock,
            g = 2 * Math.PI,
            h = Math.PI / 2,
            i = f._class,
            j = function j(b, c) {
            var d = i("easing." + b, function () {}, !0),
                e = d.prototype = new a();return e.constructor = d, e.getRatio = c, d;
        },
            k = a.register || function () {},
            l = function l(a, b, c, d, e) {
            var f = i("easing." + a, { easeOut: new b(), easeIn: new c(), easeInOut: new d() }, !0);return k(f, a), f;
        },
            m = function m(a, b, c) {
            this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a);
        },
            n = function n(b, c) {
            var d = i("easing." + b, function (a) {
                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0),
                e = d.prototype = new a();return e.constructor = d, e.getRatio = c, e.config = function (a) {
                return new d(a);
            }, d;
        },
            o = l("Back", n("BackOut", function (a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
        }), n("BackIn", function (a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
        }), n("BackInOut", function (a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
        })),
            p = i("easing.SlowMo", function (a, b, c) {
            b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0;
        }, !0),
            q = p.prototype = new a();return q.constructor = p, q.getRatio = function (a) {
            var b = a + (.5 - a) * this._p;return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
        }, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
            return new p(a, b, c);
        }, b = i("easing.SteppedEase", function (a, b) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0;
        }, !0), q = b.prototype = new a(), q.constructor = b, q.getRatio = function (a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1;
        }, q.config = b.config = function (a, c) {
            return new b(a, c);
        }, c = i("easing.RoughEase", function (b) {
            b = b || {};for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) {
                c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = { x: c, y: d };
            }for (j.sort(function (a, b) {
                return a.x - b.x;
            }), h = new m(1, 1, null), n = l; --n > -1;) {
                g = j[n], h = new m(g.x, g.y, h);
            }this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
        }, !0), q = c.prototype = new a(), q.constructor = c, q.getRatio = function (a) {
            var b = this._prev;if (a > b.t) {
                for (; b.next && a >= b.t;) {
                    b = b.next;
                }b = b.prev;
            } else for (; b.prev && a <= b.t;) {
                b = b.prev;
            }return this._prev = b, b.v + (a - b.t) / b.gap * b.c;
        }, q.config = function (a) {
            return new c(a);
        }, c.ease = new c(), l("Bounce", j("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
        }), j("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
        }), j("BounceInOut", function (a) {
            var b = .5 > a;return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5;
        })), l("Circ", j("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a);
        }), j("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1);
        }), j("CircInOut", function (a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        })), d = function d(b, c, _d2) {
            var e = i("easing." + b, function (a, b) {
                this._p1 = a >= 1 ? a : 1, this._p2 = (b || _d2) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2;
            }, !0),
                f = e.prototype = new a();return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
                return new e(a, b);
            }, e;
        }, l("Elastic", d("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
        }, .3), d("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
        }, .3), d("ElasticInOut", function (a) {
            return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;
        }, .45)), l("Expo", j("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a);
        }), j("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - .001;
        }), j("ExpoInOut", function (a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
        })), l("Sine", j("SineOut", function (a) {
            return Math.sin(a * h);
        }), j("SineIn", function (a) {
            return -Math.cos(a * h) + 1;
        }), j("SineInOut", function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1);
        })), i("easing.EaseLookup", { find: function find(b) {
                return a.map[b];
            } }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a, b) {
    "use strict";
    var c = {},
        d = a.document,
        e = a.GreenSockGlobals = a.GreenSockGlobals || a;if (!e.TweenLite) {
        var f,
            g,
            h,
            i,
            j,
            k = function k(a) {
            var b,
                c = a.split("."),
                d = e;for (b = 0; b < c.length; b++) {
                d[c[b]] = d = d[c[b]] || {};
            }return d;
        },
            l = k("com.greensock"),
            m = 1e-10,
            n = function n(a) {
            var b,
                c = [],
                d = a.length;for (b = 0; b !== d; c.push(a[b++])) {}return c;
        },
            o = function o() {},
            p = function () {
            var a = Object.prototype.toString,
                b = a.call([]);return function (c) {
                return null != c && (c instanceof Array || "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && !!c.push && a.call(c) === b);
            };
        }(),
            q = {},
            r = function r(d, f, g, h) {
            this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;var i = [];this.check = function (j) {
                for (var l, m, n, o, p = f.length, s = p; --p > -1;) {
                    (l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
                }if (0 === s && g) {
                    if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o, "undefined" != typeof module && module.exports) {
                        if (d === b) {
                            module.exports = c[b] = o;for (p in c) {
                                o[p] = c[p];
                            }
                        } else c[b] && (c[b][n] = o);
                    } else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                        return o;
                    });for (p = 0; p < this.sc.length; p++) {
                        this.sc[p].check();
                    }
                }
            }, this.check(!0);
        },
            s = a._gsDefine = function (a, b, c, d) {
            return new r(a, b, c, d);
        },
            t = l._class = function (a, b, c) {
            return b = b || function () {}, s(a, [], function () {
                return b;
            }, c), b;
        };s.globals = e;var u = [0, 0, 1, 1],
            v = t("easing.Ease", function (a, b, c, d) {
            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u;
        }, !0),
            w = v.map = {},
            x = v.register = function (a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) {
                for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) {
                    h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
                }
            }
        };for (h = v.prototype, h._calcEnd = !1, h.getRatio = function (a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);var b = this._type,
                c = this._power,
                d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
        }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) {
            h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
        }w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;var y = t("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this;
        });h = y.prototype, h.addEventListener = function (a, b, c, d, e) {
            e = e || 0;var f,
                g,
                h = this._listeners[a],
                k = 0;for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) {
                f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
            }h.splice(k, 0, { c: b, s: c, up: d, pr: e });
        }, h.removeEventListener = function (a, b) {
            var c,
                d = this._listeners[a];if (d) for (c = d.length; --c > -1;) {
                if (d[c].c === b) return void d.splice(c, 1);
            }
        }, h.dispatchEvent = function (a) {
            var b,
                c,
                d,
                e = this._listeners[a];if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) {
                d = e[b], d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
            }
        };var z = a.requestAnimationFrame,
            A = a.cancelAnimationFrame,
            B = Date.now || function () {
            return new Date().getTime();
        },
            C = B();for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) {
            z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
        }t("Ticker", function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                k = this,
                l = B(),
                n = b !== !1 && z ? "auto" : !1,
                p = 500,
                q = 33,
                r = "tick",
                s = function s(a) {
                var b,
                    d,
                    i = B() - C;i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r);
            };y.call(k), k.time = k.frame = 0, k.tick = function () {
                s(!0);
            }, k.lagSmoothing = function (a, b) {
                return arguments.length ? (p = a || 1 / m, void (q = Math.min(b, p, 0))) : 1 / m > p;
            }, k.sleep = function () {
                null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1));
            }, k.wake = function (a) {
                null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function (a) {
                    return setTimeout(a, 1e3 * (h - k.time) + 1 | 0);
                }, k === i && (j = !0), s(2);
            }, k.fps = function (a) {
                return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c;
            }, k.useRAF = function (a) {
                return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n;
            }, k.fps(a), setTimeout(function () {
                "auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1);
            }, 1500);
        }), h = l.Ticker.prototype = new l.events.EventDispatcher(), h.constructor = l.Ticker;var D = t("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, X) {
                j || i.wake();var c = this.vars.useFrames ? W : X;c.add(this, c._time), this.vars.paused && this.paused(!0);
            }
        });i = D.ticker = new l.Ticker(), h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;var E = function E() {
            j && B() - C > 2e3 && ("hidden" !== d.visibilityState || !i.lagSmoothing()) && i.wake();var a = setTimeout(E, 2e3);a.unref && a.unref();
        };E(), h.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
        }, h.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0);
        }, h.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1);
        }, h.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1);
        }, h.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
        }, h.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
        }, h.render = function (a, b, c) {}, h.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
        }, h.isActive = function () {
            var a,
                b = this._timeline,
                c = this._startTime;return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7;
        }, h._enabled = function (a, b) {
            return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
        }, h._kill = function (a, b) {
            return this._enabled(!1, !1);
        }, h.kill = function (a, b) {
            return this._kill(a, b), this;
        }, h._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;) {
                b._dirty = !0, b = b.timeline;
            }return this;
        }, h._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); --b > -1;) {
                "{self}" === a[b] && (c[b] = this);
            }return c;
        }, h._callback = function (a) {
            var b = this.vars,
                c = b[a],
                d = b[a + "Params"],
                e = b[a + "Scope"] || b.callbackScope || this,
                f = d ? d.length : 0;switch (f) {case 0:
                    c.call(e);break;case 1:
                    c.call(e, d[0]);break;case 2:
                    c.call(e, d[0], d[1]);break;default:
                    c.apply(e, d);}
        }, h.eventCallback = function (a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;if (1 === arguments.length) return e[a];null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
            }return this;
        }, h.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
        }, h.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
        }, h.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
        }, h.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
        }, h.totalTime = function (a, b, c) {
            if (j || i.wake(), !arguments.length) return this._totalTime;if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();var d = this._totalDuration,
                        e = this._timeline;if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) {
                        e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
                    }
                }this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z());
            }return this;
        }, h.progress = h.totalProgress = function (a, b) {
            var c = this.duration();return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
        }, h.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
        }, h.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
        }, h.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;var b, c;for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) {
                c._dirty = !0, c.totalDuration(), c = c.timeline;
            }return this;
        }, h.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
        }, h.paused = function (a) {
            if (!arguments.length) return this._paused;var b,
                c,
                d = this._timeline;return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
        };var F = t("core.SimpleTimeline", function (a) {
            D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
        });h = F.prototype = new D(), h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (a, b, c, d) {
            var e, f;if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) {
                e = e._prev;
            }return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
        }, h._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
        }, h.render = function (a, b, c) {
            var d,
                e = this._first;for (this._totalTime = this._time = this._rawPrevTime = a; e;) {
                d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
            }
        }, h.rawTime = function () {
            return j || i.wake(), this._totalTime;
        };var G = t("TweenLite", function (b, c, d) {
            if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";this.target = b = "string" != typeof b ? b : G.selector(b) || b;var e,
                f,
                g,
                h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                i = this.vars.overwrite;if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0]) for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) {
                f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            } else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)));
        }, !0),
            H = function H(b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
        },
            I = function I(a, b) {
            var c,
                d = {};for (c in a) {
                U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
            }a.css = d;
        };h = G.prototype = new D(), h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.20.3", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function (a, b) {
            i.lagSmoothing(a, b);
        }, G.selector = a.$ || a.jQuery || function (b) {
            var c = a.$ || a.jQuery;return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
        };var J = [],
            K = {},
            L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            M = /[\+-]=-?[\.\d]/,
            N = function N(a) {
            for (var b, c = this._firstPT, d = 1e-6; c;) {
                b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
            }
        },
            O = function O(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = [],
                m = 0,
                n = "",
                o = 0;for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) {
                k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = { _next: l._firstPT, t: l, p: l.length - 1, s: g, c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0, f: 0, m: o && 4 > o ? Math.round : 0 }), m += k.length;
            }return n += b.substr(m), n && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l;
        },
            P = function P(a, b, c, d, e, f, g, h, i) {
            "function" == typeof d && (d = d(i || 0, a));var j,
                k = _typeof(a[b]),
                l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                n = "string" == typeof d && "=" === d.charAt(1),
                o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 };return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c : d, h || G.defaultStringFilter, o), o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
        },
            Q = G._internals = { isArray: p, isSelector: H, lazyTweens: J, blobDif: O },
            R = G._plugins = {},
            S = Q.tweenLookup = {},
            T = 0,
            U = Q.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
            V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            W = D._rootFramesTimeline = new F(),
            X = D._rootTimeline = new F(),
            Y = 30,
            Z = Q.lazyRender = function () {
            var a,
                b = J.length;for (K = {}; --b > -1;) {
                a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
            }J.length = 0;
        };X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function () {
            var a, b, c;if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
                Y = i.frame + (parseInt(G.autoSleep, 10) || 120);for (c in S) {
                    for (b = S[c].tweens, a = b.length; --a > -1;) {
                        b[a]._gc && b.splice(a, 1);
                    }0 === b.length && delete S[c];
                }if (c = X._first, (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
                    for (; c && c._paused;) {
                        c = c._next;
                    }c || i.sleep();
                }
            }
        }, i.addEventListener("tick", D._updateRoot);var $ = function $(a, b, c) {
            var d,
                e,
                f = a._gsTweenID;if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = { target: a, tweens: [] }), b && (d = S[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) {
                d[e] === b && d.splice(e, 1);
            }return S[f].tweens;
        },
            _ = function _(a, b, c, d) {
            var e,
                f,
                g = a.vars.onOverwrite;return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
        },
            aa = function aa(a, b, c, d, e) {
            var f, g, h, i;if (1 === d || d >= 4) {
                for (i = e.length, f = 0; i > f; f++) {
                    if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;
                }return g;
            }var j,
                k = b._startTime + m,
                l = [],
                n = 0,
                o = 0 === b._duration;for (f = e.length; --f > -1;) {
                (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
            }for (f = n; --f > -1;) {
                if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                    if (2 !== d && !_(h, b)) continue;h._enabled(!1, !1) && (g = !0);
                }
            }return g;
        },
            ba = function ba(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;d = d._timeline;
            }return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m;
        };h._init = function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = this.vars,
                h = this._overwrittenProps,
                i = this._duration,
                j = !!g.immediateRender,
                k = g.ease;if (g.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};for (d in g.startAt) {
                    e[d] = g.startAt[d];
                }if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target, 0, e), j) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
            } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
                0 !== this._time && (j = !1), c = {};for (d in g) {
                    U[d] && "autoCSS" !== d || (c[d] = g[d]);
                }if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
                    if (0 === this._time) return;
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
            }if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) {
                this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            } else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) {
                c.s += c.c, c.c = -c.c, c = c._next;
            }this._onUpdate = g.onUpdate, this._initted = !0;
        }, h._initProps = function (b, c, d, e, f) {
            var g, h, i, j, k, l;if (null == b) return !1;K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);for (g in this.vars) {
                if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (R[g] && (j = new R[g]())._onInitTween(b, this.vars[g], this, f)) {
                    for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;) {
                        c[j._overwriteProps[h]] = this._firstPT;
                    }(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
                } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            }return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i);
        }, h.render = function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = this._time,
                i = this._duration,
                j = this._rawPrevTime;if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);else if (this._totalTime = this._time = a, this._easeType) {
                var k = a / i,
                    l = this._easeType,
                    n = this._easePower;(1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2;
            } else this.ratio = this._ease.getRatio(a / i);if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void (this._lazy = [a, b]);this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) {
                    f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                }this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0));
            }
        }, h._kill = function (a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) {
                this._kill(a, b[d], c) && (i = !0);
            } else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;) {
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";break;
                        }
                    }
                } else {
                    if (b !== this.target) return !1;h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
                }if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) {
                            h[f] && (l || (l = []), l.push(f));
                        }if ((l || !a) && !_(this, c, b, l)) return !1;
                    }for (f in j) {
                        (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    }!this._firstPT && this._initted && this._enabled(!1, !1);
                }
            }return i;
        }, h.invalidate = function () {
            return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this;
        }, h._enabled = function (a, b) {
            if (j || i.wake(), a && this._gc) {
                var c,
                    d = this._targets;if (d) for (c = d.length; --c > -1;) {
                    this._siblings[c] = $(d[c], this, !0);
                } else this._siblings = $(this.target, this, !0);
            }return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
        }, G.to = function (a, b, c) {
            return new G(a, b, c);
        }, G.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c);
        }, G.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d);
        }, G.delayedCall = function (a, b, c, d, e) {
            return new G(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 });
        }, G.set = function (a, b) {
            return new G(a, 0, b);
        }, G.getTweensOf = function (a, b) {
            if (null == a) return [];a = "string" != typeof a ? a : G.selector(a) || a;var c, d, e, f;if ((p(a) || H(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) {
                    d = d.concat(G.getTweensOf(a[c], b));
                }for (c = d.length; --c > -1;) {
                    for (f = d[c], e = c; --e > -1;) {
                        f === d[e] && d.splice(c, 1);
                    }
                }
            } else if (a._gsTweenID) for (d = $(a).concat(), c = d.length; --c > -1;) {
                (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            }return d || [];
        }, G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
            "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = !1);for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) {
                d[e]._kill(c, a);
            }
        };var ca = t("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype;
        }, !0);if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function (a) {
            var b,
                c = this._overwriteProps,
                d = this._firstPT;if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) {
                null != a[c[b]] && c.splice(b, 1);
            }for (; d;) {
                null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
            }return !1;
        }, h._mod = h._roundProps = function (a) {
            for (var b, c = this._firstPT; c;) {
                b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
            }
        }, G._onPluginEvent = function (a, b) {
            var c,
                d,
                e,
                f,
                g,
                h = b._firstPT;if ("_onInitAllProps" === a) {
                for (; h;) {
                    for (g = h._next, d = e; d && d.pr > h.pr;) {
                        d = d._next;
                    }(h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
                }h = b._firstPT = e;
            }for (; h;) {
                h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
            }return c;
        }, ca.activate = function (a) {
            for (var b = a.length; --b > -1;) {
                a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
            }return !0;
        }, s.plugin = function (a) {
            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";var b,
                c = a.propName,
                d = a.priority || 0,
                e = a.overwriteProps,
                f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                ca.call(this, c, d), this._overwriteProps = e || [];
            }, a.global === !0),
                h = g.prototype = new ca(c);h.constructor = g, g.API = a.API;for (b in f) {
                "function" == typeof a[b] && (h[f[b]] = a[b]);
            }return g.version = a.version, ca.activate([g]), g;
        }, f = a._gsQueue) {
            for (g = 0; g < f.length; g++) {
                f[g]();
            }for (h in q) {
                q[h].func || a.console.log("GSAP encountered missing dependency: " + h);
            }
        }j = !1;
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function (e, t) {
    "function" == typeof define && define.amd ? define([], function () {
        return t(e);
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t(e) : e.SmoothScroll = t(e);
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (e) {
    "use strict";
    var t = "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype,
        n = { ignore: "[data-scroll-ignore]", header: null, speed: 500, offset: 0, easing: "easeInOutCubic", customEasing: null, before: function before() {}, after: function after() {} },
        o = function o() {
        for (var e = {}, t = 0, n = arguments.length; t < n; t++) {
            var o = arguments[t];!function (t) {
                for (var n in t) {
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                }
            }(o);
        }return e;
    },
        a = function a(t) {
        return parseInt(e.getComputedStyle(t).height, 10);
    },
        r = function r(e) {
        "#" === e.charAt(0) && (e = e.substr(1));for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
            if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t >= 1 && t <= 31 || 127 == t || 0 === a && t >= 48 && t <= 57 || 1 === a && t >= 48 && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
        }return "#" + r;
    },
        i = function i(e, t) {
        var n;return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t;
    },
        u = function u() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    },
        c = function c(e, t, n) {
        var o = 0;if (e.offsetParent) do {
            o += e.offsetTop, e = e.offsetParent;
        } while (e);return o = Math.max(o - t - n, 0);
    },
        s = function s(e) {
        return e ? a(e) + e.offsetTop : 0;
    },
        l = function l(t, n, o) {
        o || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n));
    },
        f = function f(t) {
        return !!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches);
    };return function (a, d) {
        var m,
            h,
            g,
            p,
            v,
            b,
            y,
            S = {};S.cancelScroll = function () {
            cancelAnimationFrame(y);
        }, S.animateScroll = function (t, a, r) {
            var f = o(m || n, r || {}),
                d = "[object Number]" === Object.prototype.toString.call(t),
                h = d || !t.tagName ? null : t;if (d || h) {
                var g = e.pageYOffset;f.header && !p && (p = document.querySelector(f.header)), v || (v = s(p));var b,
                    y,
                    E,
                    I = d ? t : c(h, v, parseInt("function" == typeof f.offset ? f.offset() : f.offset, 10)),
                    O = I - g,
                    A = u(),
                    C = 0,
                    w = function w(n, o) {
                    var r = e.pageYOffset;if (n == o || r == o || (g < o && e.innerHeight + r) >= A) return S.cancelScroll(), l(t, o, d), f.after(t, a), b = null, !0;
                },
                    Q = function Q(t) {
                    b || (b = t), C += t - b, y = C / parseInt(f.speed, 10), y = y > 1 ? 1 : y, E = g + O * i(f, y), e.scrollTo(0, Math.floor(E)), w(E, I) || (e.requestAnimationFrame(Q), b = t);
                };0 === e.pageYOffset && e.scrollTo(0, 0), f.before(t, a), S.cancelScroll(), e.requestAnimationFrame(Q);
            }
        };var E = function E(e) {
            h && (h.id = h.getAttribute("data-scroll-id"), S.animateScroll(h, g), h = null, g = null);
        },
            I = function I(t) {
            if (!f() && 0 === t.button && !t.metaKey && !t.ctrlKey && (g = t.target.closest(a)) && "a" === g.tagName.toLowerCase() && !t.target.closest(m.ignore) && g.hostname === e.location.hostname && g.pathname === e.location.pathname && /#/.test(g.href)) {
                var n;try {
                    n = r(decodeURIComponent(g.hash));
                } catch (e) {
                    n = r(g.hash);
                }if ("#" === n) {
                    t.preventDefault(), h = document.body;var o = h.id ? h.id : "smooth-scroll-top";return h.setAttribute("data-scroll-id", o), h.id = "", void (e.location.hash.substring(1) === o ? E() : e.location.hash = o);
                }h = document.querySelector(n), h && (h.setAttribute("data-scroll-id", h.id), h.id = "", g.hash === e.location.hash && (t.preventDefault(), E()));
            }
        },
            O = function O(e) {
            b || (b = setTimeout(function () {
                b = null, v = s(p);
            }, 66));
        };return S.destroy = function () {
            m && (document.removeEventListener("click", I, !1), e.removeEventListener("resize", O, !1), S.cancelScroll(), m = null, h = null, g = null, p = null, v = null, b = null, y = null);
        }, S.init = function (a) {
            t && (S.destroy(), m = o(n, a || {}), p = m.header ? document.querySelector(m.header) : null, v = s(p), document.addEventListener("click", I, !1), e.addEventListener("hashchange", E, !1), p && e.addEventListener("resize", O, !1));
        }, S.init(d), S;
    };
});

// get scrollbar width
function getScrollBarWidth() {
    var outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
        widthWithScroll = $('<div>').css({ width: '100%' }).appendTo(outer).outerWidth();
    outer.remove();
    return 100 - widthWithScroll;
};

// slider pictures for mian
(function () {
    var jsImages = ['img/main-bg.jpg', 'img/main-bg-2.jpg', 'img/main-bg-4.jpg'];

    $('.js-main').backstretch(jsImages, {
        duration: 4000,
        fade: 700
    });
})();

(function () {
    var btn = $(".js-video-btn"),
        video = $('.js-video'),
        text = $('.js-video-text'),
        wrap = $('.js-video-wrap');
    btn.on('click', function () {
        video.attr("src", video.data("autoplay-src"));
        setTimeout(function () {
            btn.hide();
            text.hide();
            wrap.addClass('show');
        }, 300);
    });
})();

$(".js-button-play").on('click', function () {
    var video = $('.js-video');
    video.attr("src", video.data("autoplay-src"));
    $(".js-button-play").hide();
});

//tooltipster
(function () {
    $('.tooltip').tooltipster({
        theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
        maxWidth: 250,
        delay: 200,
        trigger: 'custom',
        triggerOpen: {
            click: true,
            mouseenter: true
        },
        triggerClose: {
            mouseleave: true
        }
    });
})();

// accordeon
(function () {
    var accord = $('.js-accord-item');
    accord.each(function () {
        var thisAccord = $(this),
            head = thisAccord.find('.js-accord-head'),
            inner = thisAccord.find('.js-accord-body'),
            inf = thisAccord.find('.table__info');

        head.on('click', function (e) {
            if (e.target.classList.contains('table__tooltip')) return;

            thisAccord.toggleClass('active');
            inf.toggleClass('active');
            inner.slideToggle();
        });
    });
})();

// tabs
(function () {
    var tabs = $('.section__tabs.js-tabs'),
        tabConteiner = tabs.find('.tabs__container');

    tabs.each(function () {
        var thisTabs = $(this),
            nav = thisTabs.find('.js-tabs-link'),
            item = thisTabs.find('.js-tabs-item');

        nav.on('click', function (e) {
            var thisNav = $(this),
                indexNav = thisNav.index(),
                el = e.target;

            nav.removeClass('active');
            thisNav.addClass('active');
            item.hide();
            item.eq(indexNav).fadeIn();

            if (el.classList.contains('one-time')) {
                tabConteiner.hide();
                $('.section__one-time-box').show();
                $('.section__box').hide();
            } else if (!tabConteiner.is(":visible")) {
                tabConteiner.show();
                $('.section__one-time-box').hide();
                $('.section__box').show();
            }

            return false;
        });
    });
})();

(function () {
    var tabs = $('.services.js-tabs');
    tabs.each(function () {
        var thisTabs = $(this),
            nav = thisTabs.find('.js-tabs-link'),
            item = thisTabs.find('.js-tabs-item');

        nav.on('click', function () {
            var thisNav = $(this),
                indexNav = thisNav.index();

            // Scroll to active tab
            navScroll = new SmoothScroll();
            navScroll.animateScroll(item.eq(indexNav).offset().top - 50);

            nav.removeClass('active');
            thisNav.addClass('active');

            return false;
        });
    });
})();

// popup
(function () {
    var body = $('body'),
        wrap = $('.js-popup-wrap'),
        close = $('.js-popup-close');
    var el = void 0;
    $('[data-popup]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var _this = $(this),
            data = _this.data('popup');
        el = $(data);
        var $input = el.find('.field__input').first();
        body.addClass('no-scroll');
        body.css('padding-right', getScrollBarWidth());
        el.addClass('visible');
        if ($input.length) {
            $input.focus();
        }
        setTimeout(function () {
            el.addClass('animation');
        }, 10);
    });
    close.on('click', function (e) {
        e.preventDefault();
        hidePopup();
    });
    wrap.on('click', function (e) {
        e.stopPropagation();
    });
    $(document).on('click', function () {
        hidePopup();
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27) hidePopup();
    });
    function hidePopup() {
        if (body.hasClass('no-scroll')) {
            body.removeClass('no-scroll');
            body.css('padding-right', 0);
            if (el) {
                el.removeClass('animation');
                setTimeout(function () {
                    el.removeClass('visible');
                }, 300);
            }
        }
    }
})();

// burger
$(function () {

    var $burger = $('.burger');
    var $menu = $('.js-menu');
    var $bars = $('.burger-svg__bars');
    var $bar = $('.burger-svg__bar');
    var $bar1 = $('.burger-svg__bar-1');
    var $bar2 = $('.burger-svg__bar-2');
    var $bar3 = $('.burger-svg__bar-3');
    var isChangingState = false;
    var isOpen = false;
    var burgerTL = new TimelineMax();

    function burgerOver() {

        if (!isChangingState) {
            burgerTL.clear();
            if (!isOpen) {
                burgerTL.to($bar1, 0.5, { y: -2, ease: Elastic.easeOut }).to($bar2, 0.5, { scaleX: 0.6, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5").to($bar3, 0.5, { y: 2, ease: Elastic.easeOut }, "-=0.5");
            } else {
                burgerTL.to($bar1, 0.5, { scaleX: 1.2, ease: Elastic.easeOut }).to($bar3, 0.5, { scaleX: 1.2, ease: Elastic.easeOut }, "-=0.5");
            }
        }
    }

    function burgerOut() {
        if (!isChangingState) {
            burgerTL.clear();
            if (!isOpen) {
                burgerTL.to($bar1, 0.5, { y: 0, ease: Elastic.easeOut }).to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5").to($bar3, 0.5, { y: 0, ease: Elastic.easeOut }, "-=0.5");
            } else {
                burgerTL.to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut }).to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.5");
            }
        }
    }

    function showCloseBurger() {
        burgerTL.clear();
        burgerTL.to($bar1, 0.3, { y: 6, ease: Power4.easeIn }).to($bar2, 0.3, { scaleX: 1, ease: Power4.easeIn }, "-=0.3").to($bar3, 0.3, { y: -6, ease: Power4.easeIn }, "-=0.3").to($bar1, 0.5, { rotation: 45, ease: Elastic.easeOut, transformOrigin: "50% 50%" }).set($bar2, { opacity: 0, immediateRender: false }, "-=0.5").to($bar3, 0.5, { rotation: -45, ease: Elastic.easeOut, transformOrigin: "50% 50%", onComplete: function onComplete() {
                isChangingState = false;isOpen = true;
            } }, "-=0.5");
    }

    function showOpenBurger() {
        burgerTL.clear();
        burgerTL.to($bar1, 0.3, { scaleX: 0, ease: Back.easeIn }).to($bar3, 0.3, { scaleX: 0, ease: Back.easeIn }, "-=0.3").set($bar1, { rotation: 0, y: 0 }).set($bar2, { scaleX: 0, opacity: 1 }).set($bar3, { rotation: 0, y: 0 }).to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut }).to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.4").to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut, onComplete: function onComplete() {
                isChangingState = false;isOpen = false;
            } }, "-=0.5");
    }

    $burger.on('click', function (e) {

        if (!isChangingState) {
            isChangingState = true;

            if (!isOpen) {
                showCloseBurger();
            } else {
                showOpenBurger();
            }
        }
    });
});

console.clear();

// menu
(function () {
    var burger = $('.burger'),
        menu = $('.js-menu');
    burger.on('click', function () {
        menu.toggleClass('visible');
    });
})();

// slider
(function () {
    if ($(window).width() < 768) {
        $('.main__list, .company__list').addClass('owl-carousel');

        $('.owl-carousel.main__list').owlCarousel({
            responsiveClass: true,
            items: 1,
            stagePadding: 55
        });

        $('.owl-carousel.company__list').owlCarousel({
            responsiveClass: true,
            items: 2,
            stagePadding: 5,
            loop: false
        });
    }
})();

// accordeon
(function () {
    if ($(window).width() < 768) {
        var accord = $('.js-accord-sm');
        accord.each(function () {
            var thisAccord = $(this),
                head = thisAccord.find('.js-accord-title'),
                inner = thisAccord.find('.js-accord-text');
            head.on('click', function () {
                thisAccord.toggleClass('active');
                inner.slideToggle();
            });
        });
    }
})();

(function () {
    var $menu = $('.services__head');
    if ($menu.length) {
        var menuPosition = $menu.offset().top;
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= menuPosition) {
                $menu.css('position', 'fixed');
                $menu.css('top', '0px');
            } else {
                $menu.css('position', 'static');
                $menu.css('top', '');
            }
        });
    }
})();

(function () {
    var scroll = new SmoothScroll('a[href*="#"]', { speed: 600 });
})();

$(window).scroll(function () {
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top + 100; // +$(elem).height()
        return elemTop <= docViewBottom && elemTop >= docViewTop;
    }

    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element

    $('.services__item.js-tabs-item').each(function (index) {
        if (elementScrolled(this)) {
            $('.services__link.js-tabs-link').removeClass('active');
            $('.services__link.js-tabs-link').eq(index).addClass('active');
        } else {
            $('.services__link.js-tabs-link').eq(index).removeClass('active');
        }
    });
});

(function () {
    window.intercomSettings = {
        app_id: "ubl9mgf7"
    };
})();

(function () {
    var w = window;var ic = w.Intercom;if (typeof ic === "function") {
        ic('reattach_activator');ic('update', intercomSettings);
    } else {
        var l = function l() {
            var s = d.createElement('script');s.type = 'text/javascript';s.async = true;s.src = 'https://widget.intercom.io/widget/ubl9mgf7';var x = d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);
        };

        var d = document;var i = function i() {
            i.c(arguments);
        };i.q = [];i.c = function (args) {
            i.q.push(args);
        };w.Intercom = i;if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }
})();