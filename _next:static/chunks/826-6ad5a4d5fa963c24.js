
* Splide.js
    * Version  : 4.1.3
        * License  : MIT
            * Copyright: 2022 Naotoshi Fujita
                (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[826], {
                    67677: function (e, t, i) {
                        "use strict";
                        var n = i(67294);
                        function o(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.enumerable = n.enumerable || !1,
                                    n.configurable = !0,
                                    "value" in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n)
                            }
                        }
                        var r = "(prefers-reduced-motion: reduce)";
                        function a(e) {
                            e.length = 0
                        }
                        function s(e, t, i) {
                            return Array.prototype.slice.call(e, t, i)
                        }
                        function u(e) {
                            return e.bind.apply(e, [null].concat(s(arguments, 1)))
                        }
                        var l = setTimeout
                            , c = function () { };
                        function d(e) {
                            return requestAnimationFrame(e)
                        }
                        function f(e, t) {
                            return typeof t === e
                        }
                        function p(e) {
                            return null !== e && f("object", e)
                        }
                        var b = Array.isArray
                            , m = u(f, "function")
                            , h = u(f, "string")
                            , v = u(f, "undefined");
                        function w(e) {
                            try {
                                return e instanceof (e.ownerDocument.defaultView || window).HTMLElement
                            } catch (e) {
                                return !1
                            }
                        }
                        function g(e) {
                            return b(e) ? e : [e]
                        }
                        function y(e, t) {
                            g(e).forEach(t)
                        }
                        function x(e, t) {
                            return e.indexOf(t) > -1
                        }
                        function k(e, t) {
                            return e.push.apply(e, g(t)),
                                e
                        }
                        function _(e, t, i) {
                            e && y(t, function (t) {
                                t && e.classList[i ? "add" : "remove"](t)
                            })
                        }
                        function S(e, t) {
                            _(e, h(t) ? t.split(" ") : t, !0)
                        }
                        function E(e, t) {
                            y(t, e.appendChild.bind(e))
                        }
                        function C(e, t) {
                            y(e, function (e) {
                                var i = (t || e).parentNode;
                                i && i.insertBefore(e, t)
                            })
                        }
                        function P(e, t) {
                            return w(e) && (e.msMatchesSelector || e.matches).call(e, t)
                        }
                        function M(e, t) {
                            var i = e ? s(e.children) : [];
                            return t ? i.filter(function (e) {
                                return P(e, t)
                            }) : i
                        }
                        function O(e, t) {
                            return t ? M(e, t)[0] : e.firstElementChild
                        }
                        var T = Object.keys;
                        function A(e, t, i) {
                            return e && (i ? T(e).reverse() : T(e)).forEach(function (i) {
                                "__proto__" !== i && t(e[i], i)
                            }),
                                e
                        }
                        function L(e) {
                            return s(arguments, 1).forEach(function (t) {
                                A(t, function (i, n) {
                                    e[n] = t[n]
                                })
                            }),
                                e
                        }
                        function N(e) {
                            return s(arguments, 1).forEach(function (t) {
                                A(t, function (t, i) {
                                    b(t) ? e[i] = t.slice() : p(t) ? e[i] = N({}, p(e[i]) ? e[i] : {}, t) : e[i] = t
                                })
                            }),
                                e
                        }
                        function D(e, t) {
                            y(t || T(e), function (t) {
                                delete e[t]
                            })
                        }
                        function z(e, t) {
                            y(e, function (e) {
                                y(t, function (t) {
                                    e && e.removeAttribute(t)
                                })
                            })
                        }
                        function I(e, t, i) {
                            p(t) ? A(t, function (t, i) {
                                I(e, i, t)
                            }) : y(e, function (e) {
                                null === i || "" === i ? z(e, t) : e.setAttribute(t, String(i))
                            })
                        }
                        function j(e, t, i) {
                            var n = document.createElement(e);
                            return t && (h(t) ? S(n, t) : I(n, t)),
                                i && E(i, n),
                                n
                        }
                        function R(e, t, i) {
                            if (v(i))
                                return getComputedStyle(e)[t];
                            null !== i && (e.style[t] = "" + i)
                        }
                        function q(e, t) {
                            R(e, "display", t)
                        }
                        function F(e) {
                            e.setActive && e.setActive() || e.focus({
                                preventScroll: !0
                            })
                        }
                        function U(e, t) {
                            return e.getAttribute(t)
                        }
                        function B(e, t) {
                            return e && e.classList.contains(t)
                        }
                        function W(e) {
                            return e.getBoundingClientRect()
                        }
                        function G(e) {
                            y(e, function (e) {
                                e && e.parentNode && e.parentNode.removeChild(e)
                            })
                        }
                        function V(e) {
                            return O(new DOMParser().parseFromString(e, "text/html").body)
                        }
                        function X(e, t) {
                            e.preventDefault(),
                                t && (e.stopPropagation(),
                                    e.stopImmediatePropagation())
                        }
                        function H(e, t) {
                            return e && e.querySelector(t)
                        }
                        function Y(e, t) {
                            return t ? s(e.querySelectorAll(t)) : []
                        }
                        function Z(e, t) {
                            _(e, t, !1)
                        }
                        function K(e) {
                            return e.timeStamp
                        }
                        function $(e) {
                            return h(e) ? e : e ? e + "px" : ""
                        }
                        var J = "splide"
                            , Q = "data-" + J;
                        function ee(e, t) {
                            if (!e)
                                throw Error("[" + J + "] " + (t || ""))
                        }
                        var et = Math.min
                            , ei = Math.max
                            , en = Math.floor
                            , eo = Math.ceil
                            , er = Math.abs;
                        function ea(e, t, i, n) {
                            var o = et(t, i)
                                , r = ei(t, i);
                            return n ? o < e && e < r : o <= e && e <= r
                        }
                        function es(e, t, i) {
                            var n = et(t, i)
                                , o = ei(t, i);
                            return et(ei(n, e), o)
                        }
                        function eu(e) {
                            return +(e > 0) - +(e < 0)
                        }
                        function el(e, t) {
                            return y(t, function (t) {
                                e = e.replace("%s", "" + t)
                            }),
                                e
                        }
                        function ec(e) {
                            return e < 10 ? "0" + e : "" + e
                        }
                        var ed = {};
                        function ef() {
                            var e = [];
                            function t(e, t, i) {
                                y(e, function (e) {
                                    e && y(t, function (t) {
                                        t.split(" ").forEach(function (t) {
                                            var n = t.split(".");
                                            i(e, n[0], n[1])
                                        })
                                    })
                                })
                            }
                            return {
                                bind: function (i, n, o, r) {
                                    t(i, n, function (t, i, n) {
                                        var a = "addEventListener" in t
                                            , s = a ? t.removeEventListener.bind(t, i, o, r) : t.removeListener.bind(t, o);
                                        a ? t.addEventListener(i, o, r) : t.addListener(o),
                                            e.push([t, i, n, o, s])
                                    })
                                },
                                unbind: function (i, n, o) {
                                    t(i, n, function (t, i, n) {
                                        e = e.filter(function (e) {
                                            return e[0] !== t || e[1] !== i || e[2] !== n || !!o && e[3] !== o || (e[4](),
                                                !1)
                                        })
                                    })
                                },
                                dispatch: function (e, t, i) {
                                    var n;
                                    return "function" == typeof CustomEvent ? n = new CustomEvent(t, {
                                        bubbles: !0,
                                        detail: i
                                    }) : (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, i),
                                        e.dispatchEvent(n),
                                        n
                                },
                                destroy: function () {
                                    e.forEach(function (e) {
                                        e[4]()
                                    }),
                                        a(e)
                                }
                            }
                        }
                        var ep = "mounted"
                            , eb = "ready"
                            , em = "move"
                            , eh = "moved"
                            , ev = "click"
                            , ew = "refresh"
                            , eg = "updated"
                            , ey = "resize"
                            , ex = "resized"
                            , ek = "scroll"
                            , e_ = "scrolled"
                            , eS = "destroy"
                            , eE = "navigation:mounted"
                            , eC = "autoplay:play"
                            , eP = "autoplay:pause"
                            , eM = "lazyload:loaded";
                        function eO(e) {
                            var t = e ? e.event.bus : document.createDocumentFragment()
                                , i = ef();
                            return e && e.event.on(eS, i.destroy),
                                L(i, {
                                    bus: t,
                                    on: function (e, n) {
                                        i.bind(t, g(e).join(" "), function (e) {
                                            n.apply(n, b(e.detail) ? e.detail : [])
                                        })
                                    },
                                    off: u(i.unbind, t),
                                    emit: function (e) {
                                        i.dispatch(t, e, s(arguments, 1))
                                    }
                                })
                        }
                        function eT(e, t, i, n) {
                            var o, r, a = Date.now, s = 0, u = !0, l = 0;
                            function c() {
                                if (!u) {
                                    if (s = e ? et((a() - o) / e, 1) : 1,
                                        i && i(s),
                                        s >= 1 && (t(),
                                            o = a(),
                                            n && ++l >= n))
                                        return f();
                                    r = d(c)
                                }
                            }
                            function f() {
                                u = !0
                            }
                            function p() {
                                r && cancelAnimationFrame(r),
                                    s = 0,
                                    r = 0,
                                    u = !0
                            }
                            return {
                                start: function (t) {
                                    t || p(),
                                        o = a() - (t ? s * e : 0),
                                        u = !1,
                                        r = d(c)
                                },
                                rewind: function () {
                                    o = a(),
                                        s = 0,
                                        i && i(s)
                                },
                                pause: f,
                                cancel: p,
                                set: function (t) {
                                    e = t
                                },
                                isPaused: function () {
                                    return u
                                }
                            }
                        }
                        var eA = "Arrow"
                            , eL = eA + "Left"
                            , eN = eA + "Right"
                            , eD = eA + "Up"
                            , ez = eA + "Down"
                            , eI = {
                                width: ["height"],
                                left: ["top", "right"],
                                right: ["bottom", "left"],
                                x: ["y"],
                                X: ["Y"],
                                Y: ["X"],
                                ArrowLeft: [eD, eN],
                                ArrowRight: [ez, eL]
                            }
                            , ej = "role"
                            , eR = "tabindex"
                            , eq = "aria-"
                            , eF = eq + "controls"
                            , eU = eq + "current"
                            , eB = eq + "selected"
                            , eW = eq + "label"
                            , eG = eq + "labelledby"
                            , eV = eq + "hidden"
                            , eX = eq + "orientation"
                            , eH = eq + "roledescription"
                            , eY = eq + "live"
                            , eZ = eq + "busy"
                            , eK = eq + "atomic"
                            , e$ = [ej, eR, "disabled", eF, eU, eW, eG, eV, eX, eH]
                            , eJ = J + "__"
                            , eQ = eJ + "track"
                            , e0 = eJ + "list"
                            , e1 = eJ + "slide"
                            , e2 = e1 + "--clone"
                            , e4 = e1 + "__container"
                            , e6 = eJ + "arrows"
                            , e3 = eJ + "arrow"
                            , e5 = e3 + "--prev"
                            , e9 = e3 + "--next"
                            , e7 = eJ + "pagination"
                            , e8 = e7 + "__page"
                            , te = eJ + "progress__bar"
                            , tt = eJ + "toggle"
                            , ti = eJ + "sr"
                            , tn = "is-active"
                            , to = "is-prev"
                            , tr = "is-next"
                            , ta = "is-visible"
                            , ts = "is-loading"
                            , tu = "is-focus-in"
                            , tl = "is-overflow"
                            , tc = [tn, ta, to, tr, ts, tu, tl]
                            , td = "touchstart mousedown"
                            , tf = "touchmove mousemove"
                            , tp = "touchend touchcancel mouseup click"
                            , tb = "slide"
                            , tm = "loop"
                            , th = "fade"
                            , tv = Q + "-interval"
                            , tw = {
                                passive: !1,
                                capture: !0
                            }
                            , tg = {
                                Spacebar: " ",
                                Right: eN,
                                Left: eL,
                                Up: eD,
                                Down: ez
                            };
                        function ty(e) {
                            return tg[e = h(e) ? e : e.key] || e
                        }
                        var tx = "keydown"
                            , tk = Q + "-lazy"
                            , t_ = tk + "-srcset"
                            , tS = "[" + tk + "], [" + t_ + "]"
                            , tE = [" ", "Enter"]
                            , tC = Object.freeze({
                                __proto__: null,
                                Media: function (e, t, i) {
                                    var n = e.state
                                        , o = i.breakpoints || {}
                                        , a = i.reducedMotion || {}
                                        , s = ef()
                                        , u = [];
                                    function l(e) {
                                        e && s.destroy()
                                    }
                                    function c(e, t) {
                                        var i = matchMedia(t);
                                        s.bind(i, "change", d),
                                            u.push([e, i])
                                    }
                                    function d() {
                                        var t = n.is(7)
                                            , o = i.direction
                                            , r = u.reduce(function (e, t) {
                                                return N(e, t[1].matches ? t[0] : {})
                                            }, {});
                                        D(i),
                                            f(r),
                                            i.destroy ? e.destroy("completely" === i.destroy) : t ? (l(!0),
                                                e.mount()) : o !== i.direction && e.refresh()
                                    }
                                    function f(t, o, r) {
                                        N(i, t),
                                            o && N(Object.getPrototypeOf(i), t),
                                            (r || !n.is(1)) && e.emit(eg, i)
                                    }
                                    return {
                                        setup: function () {
                                            var e = "min" === i.mediaQuery;
                                            T(o).sort(function (t, i) {
                                                return e ? +t - +i : +i - +t
                                            }).forEach(function (t) {
                                                c(o[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)")
                                            }),
                                                c(a, r),
                                                d()
                                        },
                                        destroy: l,
                                        reduce: function (e) {
                                            matchMedia(r).matches && (e ? N(i, a) : D(i, T(a)))
                                        },
                                        set: f
                                    }
                                },
                                Direction: function (e, t, i) {
                                    return {
                                        resolve: function (e, t, n) {
                                            var o = "rtl" !== (n = n || i.direction) || t ? "ttb" === n ? 0 : -1 : 1;
                                            return eI[e] && eI[e][o] || e.replace(/width|left|right/i, function (e, t) {
                                                var i = eI[e.toLowerCase()][o] || e;
                                                return t > 0 ? i.charAt(0).toUpperCase() + i.slice(1) : i
                                            })
                                        },
                                        orient: function (e) {
                                            return e * ("rtl" === i.direction ? 1 : -1)
                                        }
                                    }
                                },
                                Elements: function (e, t, i) {
                                    var n, o, r, s = eO(e), u = s.on, l = s.bind, c = e.root, d = i.i18n, f = {}, p = [], b = [], h = [];
                                    function v() {
                                        var e, t;
                                        o = O(n = y("." + eQ), "." + e0),
                                            ee(n && o, "A track/list element is missing."),
                                            k(p, M(o, "." + e1 + ":not(." + e2 + ")")),
                                            A({
                                                arrows: e6,
                                                pagination: e7,
                                                prev: e5,
                                                next: e9,
                                                bar: te,
                                                toggle: tt
                                            }, function (e, t) {
                                                f[t] = y("." + e)
                                            }),
                                            L(f, {
                                                root: c,
                                                track: n,
                                                list: o,
                                                slides: p
                                            }),
                                            e = c.id || "" + J + ec(ed[J] = (ed[J] || 0) + 1),
                                            t = i.role,
                                            c.id = e,
                                            n.id = n.id || e + "-track",
                                            o.id = o.id || e + "-list",
                                            !U(c, ej) && "SECTION" !== c.tagName && t && I(c, ej, t),
                                            I(c, eH, d.carousel),
                                            I(o, ej, "presentation"),
                                            g()
                                    }
                                    function w(e) {
                                        var t = e$.concat("style");
                                        a(p),
                                            Z(c, b),
                                            Z(n, h),
                                            z([n, o], t),
                                            z(c, e ? t : ["style", eH])
                                    }
                                    function g() {
                                        Z(c, b),
                                            Z(n, h),
                                            b = x(J),
                                            h = x(eQ),
                                            S(c, b),
                                            S(n, h),
                                            I(c, eW, i.label),
                                            I(c, eG, i.labelledby)
                                    }
                                    function y(e) {
                                        var t = H(c, e);
                                        return t && function (e, t) {
                                            if (m(e.closest))
                                                return e.closest(t);
                                            for (var i = e; i && 1 === i.nodeType && !P(i, t);)
                                                i = i.parentElement;
                                            return i
                                        }(t, "." + J) === c ? t : void 0
                                    }
                                    function x(e) {
                                        return [e + "--" + i.type, e + "--" + i.direction, i.drag && e + "--draggable", i.isNavigation && e + "--nav", e === J && tn]
                                    }
                                    return L(f, {
                                        setup: v,
                                        mount: function () {
                                            u(ew, w),
                                                u(ew, v),
                                                u(eg, g),
                                                l(document, td + " keydown", function (e) {
                                                    r = "keydown" === e.type
                                                }, {
                                                    capture: !0
                                                }),
                                                l(c, "focusin", function () {
                                                    _(c, tu, !!r)
                                                })
                                        },
                                        destroy: w
                                    })
                                },
                                Slides: function (e, t, i) {
                                    var n = eO(e)
                                        , o = n.on
                                        , r = n.emit
                                        , s = n.bind
                                        , l = t.Elements
                                        , c = l.slides
                                        , d = l.list
                                        , f = [];
                                    function p() {
                                        c.forEach(function (e, t) {
                                            v(e, t, -1)
                                        })
                                    }
                                    function b() {
                                        M(function (e) {
                                            e.destroy()
                                        }),
                                            a(f)
                                    }
                                    function v(t, i, n) {
                                        var o = function (e, t, i, n) {
                                            var o, r = eO(e), a = r.on, s = r.emit, l = r.bind, c = e.Components, d = e.root, f = e.options, p = f.isNavigation, b = f.updateOnMove, m = f.i18n, h = f.pagination, v = f.slideFocus, w = c.Direction.resolve, g = U(n, "style"), y = U(n, eW), x = i > -1, k = O(n, "." + e4);
                                            function S() {
                                                var o = e.splides.map(function (e) {
                                                    var i = e.splide.Components.Slides.getAt(t);
                                                    return i ? i.slide.id : ""
                                                }).join(" ");
                                                I(n, eW, el(m.slideX, (x ? i : t) + 1)),
                                                    I(n, eF, o),
                                                    I(n, ej, v ? "button" : ""),
                                                    v && z(n, eH)
                                            }
                                            function E() {
                                                o || C()
                                            }
                                            function C() {
                                                if (!o) {
                                                    var i, r = e.index;
                                                    (i = P()) !== B(n, tn) && (_(n, tn, i),
                                                        I(n, eU, p && i || ""),
                                                        s(i ? "active" : "inactive", M)),
                                                        function () {
                                                            var t = function () {
                                                                if (e.is(th))
                                                                    return P();
                                                                var t = W(c.Elements.track)
                                                                    , i = W(n)
                                                                    , o = w("left", !0)
                                                                    , r = w("right", !0);
                                                                return en(t[o]) <= eo(i[o]) && en(i[r]) <= eo(t[r])
                                                            }()
                                                                , i = !t && (!P() || x);
                                                            if (e.state.is([4, 5]) || I(n, eV, i || ""),
                                                                I(Y(n, f.focusableNodes || ""), eR, i ? -1 : ""),
                                                                v && I(n, eR, i ? -1 : 0),
                                                                t !== B(n, ta) && (_(n, ta, t),
                                                                    s(t ? "visible" : "hidden", M)),
                                                                !t && document.activeElement === n) {
                                                                var o = c.Slides.getAt(e.index);
                                                                o && F(o.slide)
                                                            }
                                                        }(),
                                                        _(n, to, t === r - 1),
                                                        _(n, tr, t === r + 1)
                                                }
                                            }
                                            function P() {
                                                var n = e.index;
                                                return n === t || f.cloneStatus && n === i
                                            }
                                            var M = {
                                                index: t,
                                                slideIndex: i,
                                                slide: n,
                                                container: k,
                                                isClone: x,
                                                mount: function () {
                                                    x || (n.id = d.id + "-slide" + ec(t + 1),
                                                        I(n, ej, h ? "tabpanel" : "group"),
                                                        I(n, eH, m.slide),
                                                        I(n, eW, y || el(m.slideLabel, [t + 1, e.length]))),
                                                        l(n, "click", u(s, ev, M)),
                                                        l(n, "keydown", u(s, "sk", M)),
                                                        a([eh, "sh", e_], C),
                                                        a(eE, S),
                                                        b && a(em, E)
                                                },
                                                destroy: function () {
                                                    o = !0,
                                                        r.destroy(),
                                                        Z(n, tc),
                                                        z(n, e$),
                                                        I(n, "style", g),
                                                        I(n, eW, y || "")
                                                },
                                                update: C,
                                                style: function (e, t, i) {
                                                    R(i && k || n, e, t)
                                                },
                                                isWithin: function (i, n) {
                                                    var o = er(i - t);
                                                    return !x && (f.rewind || e.is(tm)) && (o = et(o, e.length - o)),
                                                        o <= n
                                                }
                                            };
                                            return M
                                        }(e, i, n, t);
                                        o.mount(),
                                            f.push(o),
                                            f.sort(function (e, t) {
                                                return e.index - t.index
                                            })
                                    }
                                    function k(e) {
                                        return e ? T(function (e) {
                                            return !e.isClone
                                        }) : f
                                    }
                                    function M(e, t) {
                                        k(t).forEach(e)
                                    }
                                    function T(e) {
                                        return f.filter(m(e) ? e : function (t) {
                                            return h(e) ? P(t.slide, e) : x(g(e), t.index)
                                        }
                                        )
                                    }
                                    return {
                                        mount: function () {
                                            p(),
                                                o(ew, b),
                                                o(ew, p)
                                        },
                                        destroy: b,
                                        update: function () {
                                            M(function (e) {
                                                e.update()
                                            })
                                        },
                                        register: v,
                                        get: k,
                                        getIn: function (e) {
                                            var n = t.Controller
                                                , o = n.toIndex(e)
                                                , r = n.hasFocus() ? 1 : i.perPage;
                                            return T(function (e) {
                                                return ea(e.index, o, o + r - 1)
                                            })
                                        },
                                        getAt: function (e) {
                                            return T(e)[0]
                                        },
                                        add: function (e, t) {
                                            y(e, function (e) {
                                                if (h(e) && (e = V(e)),
                                                    w(e)) {
                                                    var n, o, a, l, f = c[t];
                                                    f ? C(e, f) : E(d, e),
                                                        S(e, i.classes.slide),
                                                        n = e,
                                                        o = u(r, ey),
                                                        (l = (a = Y(n, "img")).length) ? a.forEach(function (e) {
                                                            s(e, "load error", function () {
                                                                --l || o()
                                                            })
                                                        }) : o()
                                                }
                                            }),
                                                r(ew)
                                        },
                                        remove: function (e) {
                                            G(T(e).map(function (e) {
                                                return e.slide
                                            })),
                                                r(ew)
                                        },
                                        forEach: M,
                                        filter: T,
                                        style: function (e, t, i) {
                                            M(function (n) {
                                                n.style(e, t, i)
                                            })
                                        },
                                        getLength: function (e) {
                                            return e ? c.length : f.length
                                        },
                                        isEnough: function () {
                                            return f.length > i.perPage
                                        }
                                    }
                                },
                                Layout: function (e, t, i) {
                                    var n, o, r, a = eO(e), s = a.on, l = a.bind, c = a.emit, d = t.Slides, f = t.Direction.resolve, b = t.Elements, m = b.root, h = b.track, v = b.list, w = d.getAt, g = d.style;
                                    function y() {
                                        n = "ttb" === i.direction,
                                            R(m, "maxWidth", $(i.width)),
                                            R(h, f("paddingLeft"), k(!1)),
                                            R(h, f("paddingRight"), k(!0)),
                                            x(!0)
                                    }
                                    function x(e) {
                                        var t, a = W(m);
                                        (e || o.width !== a.width || o.height !== a.height) && (R(h, "height", (t = "",
                                            n && (ee(t = S(), "height or heightRatio is missing."),
                                                t = "calc(" + t + " - " + k(!1) + " - " + k(!0) + ")"),
                                            t)),
                                            g(f("marginRight"), $(i.gap)),
                                            g("width", i.autoWidth ? null : $(i.fixedWidth) || (n ? "" : E())),
                                            g("height", $(i.fixedHeight) || (n ? i.autoHeight ? null : E() : S()), !0),
                                            o = a,
                                            c(ex),
                                            r !== (r = A()) && (_(m, tl, r),
                                                c("overflow", r)))
                                    }
                                    function k(e) {
                                        var t = i.padding
                                            , n = f(e ? "right" : "left");
                                        return t && $(t[n] || (p(t) ? 0 : t)) || "0px"
                                    }
                                    function S() {
                                        return $(i.height || W(v).width * i.heightRatio)
                                    }
                                    function E() {
                                        var e = $(i.gap);
                                        return "calc((100%" + (e && " + " + e) + ")/" + (i.perPage || 1) + (e && " - " + e) + ")"
                                    }
                                    function C() {
                                        return W(v)[f("width")]
                                    }
                                    function P(e, t) {
                                        var i = w(e || 0);
                                        return i ? W(i.slide)[f("width")] + (t ? 0 : T()) : 0
                                    }
                                    function M(e, t) {
                                        var i = w(e);
                                        return i ? er(W(i.slide)[f("right")] - W(v)[f("left")]) + (t ? 0 : T()) : 0
                                    }
                                    function O(t) {
                                        return M(e.length - 1) - M(0) + P(0, t)
                                    }
                                    function T() {
                                        var e = w(0);
                                        return e && parseFloat(R(e.slide, f("marginRight"))) || 0
                                    }
                                    function A() {
                                        return e.is(th) || O(!0) > C()
                                    }
                                    return {
                                        mount: function () {
                                            var e;
                                            y(),
                                                l(window, "resize load", (e = eT(0, u(c, ey), null, 1),
                                                    function () {
                                                        e.isPaused() && e.start()
                                                    }
                                                )),
                                                s([eg, ew], y),
                                                s(ey, x)
                                        },
                                        resize: x,
                                        listSize: C,
                                        slideSize: P,
                                        sliderSize: O,
                                        totalSize: M,
                                        getPadding: function (e) {
                                            return parseFloat(R(h, f("padding" + (e ? "Right" : "Left")))) || 0
                                        },
                                        isOverflow: A
                                    }
                                },
                                Clones: function (e, t, i) {
                                    var n, o = eO(e), r = o.on, s = t.Elements, u = t.Slides, l = t.Direction.resolve, c = [];
                                    function d() {
                                        r(ew, f),
                                            r([eg, ey], b),
                                            (n = m()) && (function (t) {
                                                var n = u.get().slice()
                                                    , o = n.length;
                                                if (o) {
                                                    for (; n.length < t;)
                                                        k(n, n);
                                                    k(n.slice(-t), n.slice(0, t)).forEach(function (r, a) {
                                                        var l, d = a < t, f = (S(l = r.slide.cloneNode(!0), i.classes.clone),
                                                            l.id = e.root.id + "-clone" + ec(a + 1),
                                                            l);
                                                        d ? C(f, n[0].slide) : E(s.list, f),
                                                            k(c, f),
                                                            u.register(f, a - t + (d ? 0 : o), r.index)
                                                    })
                                                }
                                            }(n),
                                                t.Layout.resize(!0))
                                    }
                                    function f() {
                                        p(),
                                            d()
                                    }
                                    function p() {
                                        G(c),
                                            a(c),
                                            o.destroy()
                                    }
                                    function b() {
                                        var e = m();
                                        n !== e && (n < e || !e) && o.emit(ew)
                                    }
                                    function m() {
                                        var n = i.clones;
                                        if (e.is(tm)) {
                                            if (v(n)) {
                                                var o = i[l("fixedWidth")] && t.Layout.slideSize(0);
                                                n = o && eo(W(s.track)[l("width")] / o) || i[l("autoWidth")] && e.length || 2 * i.perPage
                                            }
                                        } else
                                            n = 0;
                                        return n
                                    }
                                    return {
                                        mount: d,
                                        destroy: p
                                    }
                                },
                                Move: function (e, t, i) {
                                    var n, o = eO(e), r = o.on, a = o.emit, s = e.state.set, u = t.Layout, l = u.slideSize, c = u.getPadding, d = u.totalSize, f = u.listSize, p = u.sliderSize, b = t.Direction, m = b.resolve, h = b.orient, w = t.Elements, g = w.list, y = w.track;
                                    function x() {
                                        t.Controller.isBusy() || (t.Scroll.cancel(),
                                            k(e.index),
                                            t.Slides.update())
                                    }
                                    function k(e) {
                                        _(P(e, !0))
                                    }
                                    function _(i, n) {
                                        if (!e.is(th)) {
                                            var o = n ? i : function (i) {
                                                if (e.is(tm)) {
                                                    var n = C(i)
                                                        , o = n > t.Controller.getEnd();
                                                    (n < 0 || o) && (i = S(i, o))
                                                }
                                                return i
                                            }(i);
                                            R(g, "transform", "translate" + m("X") + "(" + o + "px)"),
                                                i !== o && a("sh")
                                        }
                                    }
                                    function S(e, t) {
                                        var i = e - O(t)
                                            , n = p();
                                        return e - h(n * (eo(er(i) / n) || 1)) * (t ? 1 : -1)
                                    }
                                    function E() {
                                        _(M(), !0),
                                            n.cancel()
                                    }
                                    function C(e) {
                                        for (var i = t.Slides.get(), n = 0, o = 1 / 0, r = 0; r < i.length; r++) {
                                            var a = i[r].index
                                                , s = er(P(a, !0) - e);
                                            if (s <= o)
                                                o = s,
                                                    n = a;
                                            else
                                                break
                                        }
                                        return n
                                    }
                                    function P(t, n) {
                                        var o, r, a = h(d(t - 1) - ("center" === (o = i.focus) ? (f() - l(t, !0)) / 2 : +o * l(t) || 0));
                                        return n ? (r = a,
                                            i.trimSpace && e.is(tb) && (r = es(r, 0, h(p(!0) - f()))),
                                            r) : a
                                    }
                                    function M() {
                                        var e = m("left");
                                        return W(g)[e] - W(y)[e] + h(c(!1))
                                    }
                                    function O(e) {
                                        return P(e ? t.Controller.getEnd() : 0, !!i.trimSpace)
                                    }
                                    return {
                                        mount: function () {
                                            n = t.Transition,
                                                r([ep, ex, eg, ew], x)
                                        },
                                        move: function (e, t, i, o) {
                                            var r, u;
                                            e !== t && (r = e > i,
                                                u = h(S(M(), r)),
                                                r ? u >= 0 : u <= g[m("scrollWidth")] - W(y)[m("width")]) && (E(),
                                                    _(S(M(), e > i), !0)),
                                                s(4),
                                                a(em, t, i, e),
                                                n.start(t, function () {
                                                    s(3),
                                                        a(eh, t, i, e),
                                                        o && o()
                                                })
                                        },
                                        jump: k,
                                        translate: _,
                                        shift: S,
                                        cancel: E,
                                        toIndex: C,
                                        toPosition: P,
                                        getPosition: M,
                                        getLimit: O,
                                        exceededLimit: function (e, t) {
                                            t = v(t) ? M() : t;
                                            var i = !0 !== e && h(t) < h(O(!1))
                                                , n = !1 !== e && h(t) > h(O(!0));
                                            return i || n
                                        },
                                        reposition: x
                                    }
                                },
                                Controller: function (e, t, i) {
                                    var n, o, r, a, s = eO(e), l = s.on, c = s.emit, d = t.Move, f = d.getPosition, p = d.getLimit, b = d.toPosition, m = t.Slides, w = m.isEnough, g = m.getLength, y = i.omitEnd, x = e.is(tm), k = e.is(tb), _ = u(O, !1), S = u(O, !0), E = i.start || 0, C = E;
                                    function P() {
                                        o = g(!0),
                                            r = i.perMove,
                                            a = i.perPage,
                                            n = L();
                                        var e = es(E, 0, y ? n : o - 1);
                                        e !== E && (E = e,
                                            d.reposition())
                                    }
                                    function M() {
                                        n !== L() && c("ei")
                                    }
                                    function O(e, t) {
                                        var i = T(E + (r || (I() ? 1 : a)) * (e ? -1 : 1), E, !(r || I()));
                                        return -1 === i && k && !(1 > er(f() - p(!e))) ? e ? 0 : n : t ? i : A(i)
                                    }
                                    function T(t, s, u) {
                                        if (w() || I()) {
                                            var l = function (t) {
                                                if (k && "move" === i.trimSpace && t !== E)
                                                    for (var n = f(); n === b(t, !0) && ea(t, 0, e.length - 1, !i.rewind);)
                                                        t < E ? --t : ++t;
                                                return t
                                            }(t);
                                            l !== t && (s = t,
                                                t = l,
                                                u = !1),
                                                t < 0 || t > n ? t = !r && (ea(0, t, s, !0) || ea(n, s, t, !0)) ? N(D(t)) : x ? u ? t < 0 ? -(o % a || a) : o : t : i.rewind ? t < 0 ? n : 0 : -1 : u && t !== s && (t = N(D(s) + (t < s ? -1 : 1)))
                                        } else
                                            t = -1;
                                        return t
                                    }
                                    function A(e) {
                                        return x ? (e + o) % o || 0 : e
                                    }
                                    function L() {
                                        for (var e = o - (I() || x && r ? 1 : a); y && e-- > 0;)
                                            if (b(o - 1, !0) !== b(e, !0)) {
                                                e++;
                                                break
                                            }
                                        return es(e, 0, o - 1)
                                    }
                                    function N(e) {
                                        return es(I() ? e : a * e, 0, n)
                                    }
                                    function D(e) {
                                        return I() ? et(e, n) : en((e >= n ? o - 1 : e) / a)
                                    }
                                    function z(e) {
                                        e !== E && (C = E,
                                            E = e)
                                    }
                                    function I() {
                                        return !v(i.focus) || i.isNavigation
                                    }
                                    function j() {
                                        return e.state.is([4, 5]) && !!i.waitForTransition
                                    }
                                    return {
                                        mount: function () {
                                            P(),
                                                l([eg, ew, "ei"], P),
                                                l(ex, M)
                                        },
                                        go: function (e, t, i) {
                                            if (!j()) {
                                                var o = function (e) {
                                                    var t = E;
                                                    if (h(e)) {
                                                        var i = e.match(/([+\-<>])(\d+)?/) || []
                                                            , o = i[1]
                                                            , r = i[2];
                                                        "+" === o || "-" === o ? t = T(E + +("" + o + (+r || 1)), E) : ">" === o ? t = r ? N(+r) : _(!0) : "<" === o && (t = S(!0))
                                                    } else
                                                        t = x ? e : es(e, 0, n);
                                                    return t
                                                }(e)
                                                    , r = A(o);
                                                r > -1 && (t || r !== E) && (z(r),
                                                    d.move(o, r, C, i))
                                            }
                                        },
                                        scroll: function (e, i, o, r) {
                                            t.Scroll.scroll(e, i, o, function () {
                                                var e = A(d.toIndex(f()));
                                                z(y ? et(e, n) : e),
                                                    r && r()
                                            })
                                        },
                                        getNext: _,
                                        getPrev: S,
                                        getAdjacent: O,
                                        getEnd: L,
                                        setIndex: z,
                                        getIndex: function (e) {
                                            return e ? C : E
                                        },
                                        toIndex: N,
                                        toPage: D,
                                        toDest: function (e) {
                                            var t = d.toIndex(e);
                                            return k ? es(t, 0, n) : t
                                        },
                                        hasFocus: I,
                                        isBusy: j
                                    }
                                },
                                Arrows: function (e, t, i) {
                                    var n, o, r = eO(e), a = r.on, s = r.bind, l = r.emit, c = i.classes, d = i.i18n, f = t.Elements, p = t.Controller, b = f.arrows, m = f.track, h = b, v = f.prev, w = f.next, g = {};
                                    function y() {
                                        var e;
                                        (e = i.arrows) && !(v && w) && (h = b || j("div", c.arrows),
                                            v = P(!0),
                                            w = P(!1),
                                            n = !0,
                                            E(h, [v, w]),
                                            b || C(h, m)),
                                            v && w && (L(g, {
                                                prev: v,
                                                next: w
                                            }),
                                                q(h, e ? "" : "none"),
                                                S(h, o = e6 + "--" + i.direction),
                                                e && (a([ep, eh, ew, e_, "ei"], M),
                                                    s(w, "click", u(_, ">")),
                                                    s(v, "click", u(_, "<")),
                                                    M(),
                                                    I([v, w], eF, m.id),
                                                    l("arrows:mounted", v, w))),
                                            a(eg, x)
                                    }
                                    function x() {
                                        k(),
                                            y()
                                    }
                                    function k() {
                                        r.destroy(),
                                            Z(h, o),
                                            n ? (G(b ? [v, w] : h),
                                                v = w = null) : z([v, w], e$)
                                    }
                                    function _(e) {
                                        p.go(e, !0)
                                    }
                                    function P(e) {
                                        return V('<button class="' + c.arrow + " " + (e ? c.prev : c.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (i.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
                                    }
                                    function M() {
                                        if (v && w) {
                                            var t = e.index
                                                , i = p.getPrev()
                                                , n = p.getNext()
                                                , o = i > -1 && t < i ? d.last : d.prev
                                                , r = n > -1 && t > n ? d.first : d.next;
                                            v.disabled = i < 0,
                                                w.disabled = n < 0,
                                                I(v, eW, o),
                                                I(w, eW, r),
                                                l("arrows:updated", v, w, i, n)
                                        }
                                    }
                                    return {
                                        arrows: g,
                                        mount: y,
                                        destroy: k,
                                        update: M
                                    }
                                },
                                Autoplay: function (e, t, i) {
                                    var n, o, r = eO(e), a = r.on, s = r.bind, u = r.emit, l = eT(i.interval, e.go.bind(e, ">"), function (e) {
                                        var t = d.bar;
                                        t && R(t, "width", 100 * e + "%"),
                                            u("autoplay:playing", e)
                                    }), c = l.isPaused, d = t.Elements, f = t.Elements, p = f.root, b = f.toggle, m = i.autoplay, h = "pause" === m;
                                    function v() {
                                        c() && t.Slides.isEnough() && (l.start(!i.resetProgress),
                                            o = n = h = !1,
                                            y(),
                                            u(eC))
                                    }
                                    function w(e) {
                                        void 0 === e && (e = !0),
                                            h = !!e,
                                            y(),
                                            c() || (l.pause(),
                                                u(eP))
                                    }
                                    function g() {
                                        h || (n || o ? w(!1) : v())
                                    }
                                    function y() {
                                        b && (_(b, tn, !h),
                                            I(b, eW, i.i18n[h ? "play" : "pause"]))
                                    }
                                    function x(e) {
                                        var n = t.Slides.getAt(e);
                                        l.set(n && +U(n.slide, tv) || i.interval)
                                    }
                                    return {
                                        mount: function () {
                                            m && (i.pauseOnHover && s(p, "mouseenter mouseleave", function (e) {
                                                n = "mouseenter" === e.type,
                                                    g()
                                            }),
                                                i.pauseOnFocus && s(p, "focusin focusout", function (e) {
                                                    o = "focusin" === e.type,
                                                        g()
                                                }),
                                                b && s(b, "click", function () {
                                                    h ? v() : w(!0)
                                                }),
                                                a([em, ek, ew], l.rewind),
                                                a(em, x),
                                                b && I(b, eF, d.track.id),
                                                h || v(),
                                                y())
                                        },
                                        destroy: l.cancel,
                                        play: v,
                                        pause: w,
                                        isPaused: c
                                    }
                                },
                                Cover: function (e, t, i) {
                                    var n = eO(e).on;
                                    function o(e) {
                                        t.Slides.forEach(function (t) {
                                            var i = O(t.container || t.slide, "img");
                                            i && i.src && r(e, i, t)
                                        })
                                    }
                                    function r(e, t, i) {
                                        i.style("background", e ? 'center/cover no-repeat url("' + t.src + '")' : "", !0),
                                            q(t, e ? "none" : "")
                                    }
                                    return {
                                        mount: function () {
                                            i.cover && (n(eM, u(r, !0)),
                                                n([ep, eg, ew], u(o, !0)))
                                        },
                                        destroy: u(o, !1)
                                    }
                                },
                                Scroll: function (e, t, i) {
                                    var n, o, r = eO(e), a = r.on, s = r.emit, l = e.state.set, c = t.Move, d = c.getPosition, f = c.getLimit, p = c.exceededLimit, b = c.translate, m = e.is(tb), h = 1;
                                    function v(e, i, r, a, f) {
                                        var b = d();
                                        if (y(),
                                            r && (!m || !p())) {
                                            var v = t.Layout.sliderSize()
                                                , x = eu(e) * v * en(er(e) / v) || 0;
                                            e = c.toPosition(t.Controller.toDest(e % v)) + x
                                        }
                                        h = 1,
                                            i = 1 > er(b - e) ? 0 : i || ei(er(e - b) / 1.5, 800),
                                            o = a,
                                            n = eT(i, w, u(g, b, e, f), 1),
                                            l(5),
                                            s(ek),
                                            n.start()
                                    }
                                    function w() {
                                        l(3),
                                            o && o(),
                                            s(e_)
                                    }
                                    function g(e, t, n, r) {
                                        var a, s = d(), u = (e + (t - e) * ((a = i.easingFunc) ? a(r) : 1 - Math.pow(1 - r, 4)) - s) * h;
                                        b(s + u),
                                            m && !n && p() && (h *= .6,
                                                10 > er(u) && v(f(p(!0)), 600, !1, o, !0))
                                    }
                                    function y() {
                                        n && n.cancel()
                                    }
                                    function x() {
                                        n && !n.isPaused() && (y(),
                                            w())
                                    }
                                    return {
                                        mount: function () {
                                            a(em, y),
                                                a([eg, ew], x)
                                        },
                                        destroy: y,
                                        scroll: v,
                                        cancel: x
                                    }
                                },
                                Drag: function (e, t, i) {
                                    var n, o, r, a, s, u, l, d, f = eO(e), b = f.on, m = f.emit, h = f.bind, v = f.unbind, w = e.state, g = t.Move, y = t.Scroll, x = t.Controller, k = t.Elements.track, _ = t.Media.reduce, S = t.Direction, E = S.resolve, C = S.orient, M = g.getPosition, O = g.exceededLimit, T = !1;
                                    function A() {
                                        var e = i.drag;
                                        l = !e,
                                            a = "free" === e
                                    }
                                    function L(e) {
                                        if (u = !1,
                                            !l) {
                                            var t, n, o = F(e);
                                            t = e.target,
                                                n = i.noDrag,
                                                P(t, "." + e8 + ", ." + e3) || n && P(t, n) || !o && e.button || (x.isBusy() ? X(e, !0) : (d = o ? k : window,
                                                    s = w.is([4, 5]),
                                                    r = null,
                                                    h(d, tf, N, tw),
                                                    h(d, tp, D, tw),
                                                    g.cancel(),
                                                    y.cancel(),
                                                    I(e)))
                                        }
                                    }
                                    function N(t) {
                                        if (w.is(6) || (w.set(6),
                                            m("drag")),
                                            t.cancelable) {
                                            if (s) {
                                                g.translate(n + j(t) / (T && e.is(tb) ? 5 : 1));
                                                var o, r, a, l, c = R(t) > 200, d = T !== (T = O());
                                                (c || d) && I(t),
                                                    u = !0,
                                                    m("dragging"),
                                                    X(t)
                                            } else
                                                er(j(t)) > er(j(t, !0)) && (a = (r = p(o = i.dragMinThreshold)) && o.mouse || 0,
                                                    l = (r ? o.touch : +o) || 10,
                                                    s = er(j(t)) > (F(t) ? l : a),
                                                    X(t))
                                        }
                                    }
                                    function D(n) {
                                        var o, r, u, l;
                                        w.is(6) && (w.set(3),
                                            m("dragged")),
                                            s && (o = r = function (t) {
                                                if (e.is(tm) || !T) {
                                                    var i = R(t);
                                                    if (i && i < 200)
                                                        return j(t) / i
                                                }
                                                return 0
                                            }(n),
                                                u = M() + eu(o) * et(er(o) * (i.flickPower || 600), a ? 1 / 0 : t.Layout.listSize() * (i.flickMaxPages || 1)),
                                                l = i.rewind && i.rewindByDrag,
                                                _(!1),
                                                a ? x.scroll(u, 0, i.snap) : e.is(th) ? x.go(0 > C(eu(r)) ? l ? "<" : "-" : l ? ">" : "+") : e.is(tb) && T && l ? x.go(O(!0) ? ">" : "<") : x.go(x.toDest(u), !0),
                                                _(!0),
                                                X(n)),
                                            v(d, tf, N),
                                            v(d, tp, D),
                                            s = !1
                                    }
                                    function z(e) {
                                        !l && u && X(e, !0)
                                    }
                                    function I(e) {
                                        r = o,
                                            o = e,
                                            n = M()
                                    }
                                    function j(e, t) {
                                        return q(e, t) - q(o === e && r || o, t)
                                    }
                                    function R(e) {
                                        return K(e) - K(o === e && r || o)
                                    }
                                    function q(e, t) {
                                        return (F(e) ? e.changedTouches[0] : e)["page" + E(t ? "Y" : "X")]
                                    }
                                    function F(e) {
                                        return "undefined" != typeof TouchEvent && e instanceof TouchEvent
                                    }
                                    return {
                                        mount: function () {
                                            h(k, tf, c, tw),
                                                h(k, tp, c, tw),
                                                h(k, td, L, tw),
                                                h(k, "click", z, {
                                                    capture: !0
                                                }),
                                                h(k, "dragstart", X),
                                                b([ep, eg], A)
                                        },
                                        disable: function (e) {
                                            l = e
                                        },
                                        isDragging: function () {
                                            return s
                                        }
                                    }
                                },
                                Keyboard: function (e, t, i) {
                                    var n, o, r = eO(e), a = r.on, s = r.bind, u = r.unbind, c = e.root, d = t.Direction.resolve;
                                    function f() {
                                        var e = i.keyboard;
                                        e && s(n = "global" === e ? window : c, tx, m)
                                    }
                                    function p() {
                                        u(n, tx)
                                    }
                                    function b() {
                                        var e = o;
                                        o = !0,
                                            l(function () {
                                                o = e
                                            })
                                    }
                                    function m(t) {
                                        if (!o) {
                                            var i = ty(t);
                                            i === d(eL) ? e.go("<") : i === d(eN) && e.go(">")
                                        }
                                    }
                                    return {
                                        mount: function () {
                                            f(),
                                                a(eg, p),
                                                a(eg, f),
                                                a(em, b)
                                        },
                                        destroy: p,
                                        disable: function (e) {
                                            o = e
                                        }
                                    }
                                },
                                LazyLoad: function (e, t, i) {
                                    var n = eO(e)
                                        , o = n.on
                                        , r = n.off
                                        , s = n.bind
                                        , l = n.emit
                                        , c = "sequential" === i.lazyLoad
                                        , d = [eh, e_]
                                        , f = [];
                                    function p() {
                                        a(f),
                                            t.Slides.forEach(function (e) {
                                                Y(e.slide, tS).forEach(function (t) {
                                                    var n = U(t, tk)
                                                        , o = U(t, t_);
                                                    if (n !== t.src || o !== t.srcset) {
                                                        var r = i.classes.spinner
                                                            , a = t.parentElement
                                                            , s = O(a, "." + r) || j("span", r, a);
                                                        f.push([t, e, s]),
                                                            t.src || q(t, "none")
                                                    }
                                                })
                                            }),
                                            c ? v() : (r(d),
                                                o(d, b),
                                                b())
                                    }
                                    function b() {
                                        (f = f.filter(function (t) {
                                            var n = i.perPage * ((i.preloadPages || 1) + 1) - 1;
                                            return !t[1].isWithin(e.index, n) || m(t)
                                        })).length || r(d)
                                    }
                                    function m(e) {
                                        var t = e[0];
                                        S(e[1].slide, ts),
                                            s(t, "load error", u(h, e)),
                                            I(t, "src", U(t, tk)),
                                            I(t, "srcset", U(t, t_)),
                                            z(t, tk),
                                            z(t, t_)
                                    }
                                    function h(e, t) {
                                        var i = e[0]
                                            , n = e[1];
                                        Z(n.slide, ts),
                                            "error" !== t.type && (G(e[2]),
                                                q(i, ""),
                                                l(eM, i, n),
                                                l(ey)),
                                            c && v()
                                    }
                                    function v() {
                                        f.length && m(f.shift())
                                    }
                                    return {
                                        mount: function () {
                                            i.lazyLoad && (p(),
                                                o(ew, p))
                                        },
                                        destroy: u(a, f),
                                        check: b
                                    }
                                },
                                Pagination: function (e, t, i) {
                                    var n, o, r = eO(e), l = r.on, c = r.emit, d = r.bind, f = t.Slides, p = t.Elements, b = t.Controller, m = b.hasFocus, h = b.getIndex, v = b.go, w = t.Direction.resolve, g = p.pagination, y = [];
                                    function x() {
                                        n && (G(g ? s(n.children) : n),
                                            Z(n, o),
                                            a(y),
                                            n = null),
                                            r.destroy()
                                    }
                                    function k(e) {
                                        v(">" + e, !0)
                                    }
                                    function _(e, t) {
                                        var i = y.length
                                            , n = ty(t)
                                            , o = E()
                                            , r = -1;
                                        n === w(eN, !1, o) ? r = ++e % i : n === w(eL, !1, o) ? r = (--e + i) % i : "Home" === n ? r = 0 : "End" === n && (r = i - 1);
                                        var a = y[r];
                                        a && (F(a.button),
                                            v(">" + r),
                                            X(t, !0))
                                    }
                                    function E() {
                                        return i.paginationDirection || i.direction
                                    }
                                    function C(e) {
                                        return y[b.toPage(e)]
                                    }
                                    function P() {
                                        var e = C(h(!0))
                                            , t = C(h());
                                        if (e) {
                                            var i = e.button;
                                            Z(i, tn),
                                                z(i, eB),
                                                I(i, eR, -1)
                                        }
                                        if (t) {
                                            var o = t.button;
                                            S(o, tn),
                                                I(o, eB, !0),
                                                I(o, eR, "")
                                        }
                                        c("pagination:updated", {
                                            list: n,
                                            items: y
                                        }, e, t)
                                    }
                                    return {
                                        items: y,
                                        mount: function t() {
                                            x(),
                                                l([eg, ew, "ei"], t);
                                            var r = i.pagination;
                                            g && q(g, r ? "" : "none"),
                                                r && (l([em, ek, e_], P),
                                                    function () {
                                                        var t = e.length
                                                            , r = i.classes
                                                            , a = i.i18n
                                                            , s = i.perPage
                                                            , l = m() ? b.getEnd() + 1 : eo(t / s);
                                                        S(n = g || j("ul", r.pagination, p.track.parentElement), o = e7 + "--" + E()),
                                                            I(n, ej, "tablist"),
                                                            I(n, eW, a.select),
                                                            I(n, eX, "ttb" === E() ? "vertical" : "");
                                                        for (var c = 0; c < l; c++) {
                                                            var h = j("li", null, n)
                                                                , v = j("button", {
                                                                    class: r.page,
                                                                    type: "button"
                                                                }, h)
                                                                , w = f.getIn(c).map(function (e) {
                                                                    return e.slide.id
                                                                })
                                                                , x = !m() && s > 1 ? a.pageX : a.slideX;
                                                            d(v, "click", u(k, c)),
                                                                i.paginationKeyboard && d(v, "keydown", u(_, c)),
                                                                I(h, ej, "presentation"),
                                                                I(v, ej, "tab"),
                                                                I(v, eF, w.join(" ")),
                                                                I(v, eW, el(x, c + 1)),
                                                                I(v, eR, -1),
                                                                y.push({
                                                                    li: h,
                                                                    button: v,
                                                                    page: c
                                                                })
                                                        }
                                                    }(),
                                                    P(),
                                                    c("pagination:mounted", {
                                                        list: n,
                                                        items: y
                                                    }, C(e.index)))
                                        },
                                        destroy: x,
                                        getAt: C,
                                        update: P
                                    }
                                },
                                Sync: function (e, t, i) {
                                    var n = i.isNavigation
                                        , o = i.slideFocus
                                        , r = [];
                                    function s() {
                                        var t, i;
                                        e.splides.forEach(function (t) {
                                            t.isParent || (c(e, t.splide),
                                                c(t.splide, e))
                                        }),
                                            n && ((i = (t = eO(e)).on)(ev, f),
                                                i("sk", p),
                                                i([ep, eg], d),
                                                r.push(t),
                                                t.emit(eE, e.splides))
                                    }
                                    function l() {
                                        r.forEach(function (e) {
                                            e.destroy()
                                        }),
                                            a(r)
                                    }
                                    function c(e, t) {
                                        var i = eO(e);
                                        i.on(em, function (e, i, n) {
                                            t.go(t.is(tm) ? n : e)
                                        }),
                                            r.push(i)
                                    }
                                    function d() {
                                        I(t.Elements.list, eX, "ttb" === i.direction ? "vertical" : "")
                                    }
                                    function f(t) {
                                        e.go(t.index)
                                    }
                                    function p(e, t) {
                                        x(tE, ty(t)) && (f(e),
                                            X(t))
                                    }
                                    return {
                                        setup: u(t.Media.set, {
                                            slideFocus: v(o) ? n : o
                                        }, !0),
                                        mount: s,
                                        destroy: l,
                                        remount: function () {
                                            l(),
                                                s()
                                        }
                                    }
                                },
                                Wheel: function (e, t, i) {
                                    var n = eO(e).bind
                                        , o = 0;
                                    function r(n) {
                                        if (n.cancelable) {
                                            var r = n.deltaY
                                                , a = r < 0
                                                , s = K(n)
                                                , u = i.wheelMinThreshold || 0
                                                , l = i.wheelSleep || 0;
                                            er(r) > u && s - o > l && (e.go(a ? "<" : ">"),
                                                o = s),
                                                (!i.releaseWheel || e.state.is(4) || -1 !== t.Controller.getAdjacent(a)) && X(n)
                                        }
                                    }
                                    return {
                                        mount: function () {
                                            i.wheel && n(t.Elements.track, "wheel", r, tw)
                                        }
                                    }
                                },
                                Live: function (e, t, i) {
                                    var n = eO(e).on
                                        , o = t.Elements.track
                                        , r = i.live && !i.isNavigation
                                        , a = j("span", ti)
                                        , s = eT(90, u(l, !1));
                                    function l(e) {
                                        I(o, eZ, e),
                                            e ? (E(o, a),
                                                s.start()) : (G(a),
                                                    s.cancel())
                                    }
                                    function c(e) {
                                        r && I(o, eY, e ? "off" : "polite")
                                    }
                                    return {
                                        mount: function () {
                                            r && (c(!t.Autoplay.isPaused()),
                                                I(o, eK, !0),
                                                a.textContent = "…",
                                                n(eC, u(c, !0)),
                                                n(eP, u(c, !1)),
                                                n([eh, e_], u(l, !0)))
                                        },
                                        disable: c,
                                        destroy: function () {
                                            z(o, [eY, eK, eZ]),
                                                G(a)
                                        }
                                    }
                                }
                            })
                            , tP = {
                                type: "slide",
                                role: "region",
                                speed: 400,
                                perPage: 1,
                                cloneStatus: !0,
                                arrows: !0,
                                pagination: !0,
                                paginationKeyboard: !0,
                                interval: 5e3,
                                pauseOnHover: !0,
                                pauseOnFocus: !0,
                                resetProgress: !0,
                                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                                drag: !0,
                                direction: "ltr",
                                trimSpace: !0,
                                focusableNodes: "a, button, textarea, input, select, iframe",
                                live: !0,
                                classes: {
                                    slide: e1,
                                    clone: e2,
                                    arrows: e6,
                                    arrow: e3,
                                    prev: e5,
                                    next: e9,
                                    pagination: e7,
                                    page: e8,
                                    spinner: eJ + "spinner"
                                },
                                i18n: {
                                    prev: "Previous slide",
                                    next: "Next slide",
                                    first: "Go to first slide",
                                    last: "Go to last slide",
                                    slideX: "Go to slide %s",
                                    pageX: "Go to page %s",
                                    play: "Start autoplay",
                                    pause: "Pause autoplay",
                                    carousel: "carousel",
                                    slide: "slide",
                                    select: "Select a slide to show",
                                    slideLabel: "%s of %s"
                                },
                                reducedMotion: {
                                    speed: 0,
                                    rewindSpeed: 0,
                                    autoplay: "pause"
                                }
                            };
                        function tM(e, t, i) {
                            var n = t.Slides;
                            function o() {
                                n.forEach(function (e) {
                                    e.style("transform", "translateX(-" + 100 * e.index + "%)")
                                })
                            }
                            return {
                                mount: function () {
                                    eO(e).on([ep, ew], o)
                                },
                                start: function (e, t) {
                                    n.style("transition", "opacity " + i.speed + "ms " + i.easing),
                                        l(t)
                                },
                                cancel: c
                            }
                        }
                        function tO(e, t, i) {
                            var n, o = t.Move, r = t.Controller, a = t.Scroll, s = t.Elements.list, l = u(R, s, "transition");
                            function c() {
                                l(""),
                                    a.cancel()
                            }
                            return {
                                mount: function () {
                                    eO(e).bind(s, "transitionend", function (e) {
                                        e.target === s && n && (c(),
                                            n())
                                    })
                                },
                                start: function (t, s) {
                                    var u = o.toPosition(t, !0)
                                        , c = o.getPosition()
                                        , d = function (t) {
                                            var n = i.rewindSpeed;
                                            if (e.is(tb) && n) {
                                                var o = r.getIndex(!0)
                                                    , a = r.getEnd();
                                                if (0 === o && t >= a || o >= a && 0 === t)
                                                    return n
                                            }
                                            return i.speed
                                        }(t);
                                    er(u - c) >= 1 && d >= 1 ? i.useScroll ? a.scroll(u, d, !1, s) : (l("transform " + d + "ms " + i.easing),
                                        o.translate(u, !0),
                                        n = s) : (o.jump(t),
                                            s())
                                },
                                cancel: c
                            }
                        }
                        var tT = function () {
                            function e(t, i) {
                                this.event = eO(),
                                    this.Components = {},
                                    this.state = (n = 1,
                                    {
                                        set: function (e) {
                                            n = e
                                        },
                                        is: function (e) {
                                            return x(g(e), n)
                                        }
                                    }),
                                    this.splides = [],
                                    this._o = {},
                                    this._E = {};
                                var n, o = h(t) ? H(document, t) : t;
                                ee(o, o + " is invalid."),
                                    this.root = o,
                                    i = N({
                                        label: U(o, eW) || "",
                                        labelledby: U(o, eG) || ""
                                    }, tP, e.defaults, i || {});
                                try {
                                    N(i, JSON.parse(U(o, Q)))
                                } catch (e) {
                                    ee(!1, "Invalid JSON")
                                }
                                this._o = Object.create(N({}, i))
                            }
                            var t, i = e.prototype;
                            return i.mount = function (e, t) {
                                var i = this
                                    , n = this.state
                                    , o = this.Components;
                                ee(n.is([1, 7]), "Already mounted!"),
                                    n.set(1),
                                    this._C = o,
                                    this._T = t || this._T || (this.is(th) ? tM : tO),
                                    this._E = e || this._E;
                                var r = L({}, tC, this._E, {
                                    Transition: this._T
                                });
                                return A(r, function (e, t) {
                                    var n = e(i, o, i._o);
                                    o[t] = n,
                                        n.setup && n.setup()
                                }),
                                    A(o, function (e) {
                                        e.mount && e.mount()
                                    }),
                                    this.emit(ep),
                                    S(this.root, "is-initialized"),
                                    n.set(3),
                                    this.emit(eb),
                                    this
                            }
                                ,
                                i.sync = function (e) {
                                    return this.splides.push({
                                        splide: e
                                    }),
                                        e.splides.push({
                                            splide: this,
                                            isParent: !0
                                        }),
                                        this.state.is(3) && (this._C.Sync.remount(),
                                            e.Components.Sync.remount()),
                                        this
                                }
                                ,
                                i.go = function (e) {
                                    return this._C.Controller.go(e),
                                        this
                                }
                                ,
                                i.on = function (e, t) {
                                    return this.event.on(e, t),
                                        this
                                }
                                ,
                                i.off = function (e) {
                                    return this.event.off(e),
                                        this
                                }
                                ,
                                i.emit = function (e) {
                                    var t;
                                    return (t = this.event).emit.apply(t, [e].concat(s(arguments, 1))),
                                        this
                                }
                                ,
                                i.add = function (e, t) {
                                    return this._C.Slides.add(e, t),
                                        this
                                }
                                ,
                                i.remove = function (e) {
                                    return this._C.Slides.remove(e),
                                        this
                                }
                                ,
                                i.is = function (e) {
                                    return this._o.type === e
                                }
                                ,
                                i.refresh = function () {
                                    return this.emit(ew),
                                        this
                                }
                                ,
                                i.destroy = function (e) {
                                    void 0 === e && (e = !0);
                                    var t = this.event
                                        , i = this.state;
                                    return i.is(1) ? eO(this).on(eb, this.destroy.bind(this, e)) : (A(this._C, function (t) {
                                        t.destroy && t.destroy(e)
                                    }, !0),
                                        t.emit(eS),
                                        t.destroy(),
                                        e && a(this.splides),
                                        i.set(7)),
                                        this
                                }
                                ,
                                o(e.prototype, [{
                                    key: "options",
                                    get: function () {
                                        return this._o
                                    },
                                    set: function (e) {
                                        this._C.Media.set(e, !0, !0)
                                    }
                                }, {
                                    key: "length",
                                    get: function () {
                                        return this._C.Slides.getLength(!0)
                                    }
                                }, {
                                    key: "index",
                                    get: function () {
                                        return this._C.Controller.getIndex()
                                    }
                                }]),
                                t && o(e, t),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                e
                        }();
                        tT.defaults = {},
                            tT.STATES = {
                                CREATED: 1,
                                MOUNTED: 2,
                                IDLE: 3,
                                MOVING: 4,
                                SCROLLING: 5,
                                DRAGGING: 6,
                                DESTROYED: 7
                            };
                        n.Component;
                        /*!
                 * Splide.js
                 * Version  : 4.1.3
                 * License  : MIT
                 * Copyright: 2022 Naotoshi Fujita
                 */
                    },
                    95677: function (e, t, i) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                            t.default = function (e, t) {
                                let i = r.default
                                    , o = {
                                        loading: e => {
                                            let { error: t, isLoading: i, pastDelay: n } = e;
                                            return null
                                        }
                                    };
                                e instanceof Promise ? o.loader = () => e : "function" == typeof e ? o.loader = e : "object" == typeof e && (o = n({}, o, e)),
                                    o = n({}, o, t);
                                let u = o.loader
                                    , l = () => null != u ? u().then(a) : Promise.resolve(a(() => null));
                                return (o.loadableGenerated && delete (o = n({}, o, o.loadableGenerated)).loadableGenerated,
                                    "boolean" != typeof o.ssr || o.ssr) ? i(n({}, o, {
                                        loader: l
                                    })) : (delete o.webpack,
                                        delete o.modules,
                                        s(i, o))
                            }
                            ,
                            t.noSSR = s;
                        var n = i(6495).Z
                            , o = i(92648).Z
                            , r = (o(i(67294)),
                                o(i(8976)));
                        function a(e) {
                            return {
                                default: (null == e ? void 0 : e.default) || e
                            }
                        }
                        function s(e, t) {
                            return delete t.webpack,
                                delete t.modules,
                                e(t)
                        }
                        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                            value: !0
                        }),
                            Object.assign(t.default, t),
                            e.exports = t.default)
                    },
                    92254: function (e, t, i) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                            t.LoadableContext = void 0;
                        var n = (0,
                            i(92648).Z)(i(67294));
                        let o = n.default.createContext(null);
                        t.LoadableContext = o
                    },
                    8976: function (e, t, i) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                            t.default = void 0;
                        var n = i(6495).Z
                            , o = (0,
                                i(92648).Z)(i(67294))
                            , r = i(92254);
                        let a = []
                            , s = []
                            , u = !1;
                        function l(e) {
                            let t = e()
                                , i = {
                                    loading: !0,
                                    loaded: null,
                                    error: null
                                };
                            return i.promise = t.then(e => (i.loading = !1,
                                i.loaded = e,
                                e)).catch(e => {
                                    throw i.loading = !1,
                                    i.error = e,
                                    e
                                }
                                ),
                                i
                        }
                        class c {
                            promise() {
                                return this._res.promise
                            }
                            retry() {
                                this._clearTimeouts(),
                                    this._res = this._loadFn(this._opts.loader),
                                    this._state = {
                                        pastDelay: !1,
                                        timedOut: !1
                                    };
                                let { _res: e, _opts: t } = this;
                                e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                                    this._update({
                                        pastDelay: !0
                                    })
                                }
                                    , t.delay)),
                                    "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                                        this._update({
                                            timedOut: !0
                                        })
                                    }
                                        , t.timeout))),
                                    this._res.promise.then(() => {
                                        this._update({}),
                                            this._clearTimeouts()
                                    }
                                    ).catch(e => {
                                        this._update({}),
                                            this._clearTimeouts()
                                    }
                                    ),
                                    this._update({})
                            }
                            _update(e) {
                                this._state = n({}, this._state, {
                                    error: this._res.error,
                                    loaded: this._res.loaded,
                                    loading: this._res.loading
                                }, e),
                                    this._callbacks.forEach(e => e())
                            }
                            _clearTimeouts() {
                                clearTimeout(this._delay),
                                    clearTimeout(this._timeout)
                            }
                            getCurrentValue() {
                                return this._state
                            }
                            subscribe(e) {
                                return this._callbacks.add(e),
                                    () => {
                                        this._callbacks.delete(e)
                                    }
                            }
                            constructor(e, t) {
                                this._loadFn = e,
                                    this._opts = t,
                                    this._callbacks = new Set,
                                    this._delay = null,
                                    this._timeout = null,
                                    this.retry()
                            }
                        }
                        function d(e) {
                            return function (e, t) {
                                let i = Object.assign({
                                    loader: null,
                                    loading: null,
                                    delay: 200,
                                    timeout: null,
                                    webpack: null,
                                    modules: null
                                }, t)
                                    , n = null;
                                function a() {
                                    if (!n) {
                                        let t = new c(e, i);
                                        n = {
                                            getCurrentValue: t.getCurrentValue.bind(t),
                                            subscribe: t.subscribe.bind(t),
                                            retry: t.retry.bind(t),
                                            promise: t.promise.bind(t)
                                        }
                                    }
                                    return n.promise()
                                }
                                if (!u) {
                                    let e = i.webpack ? i.webpack() : i.modules;
                                    e && s.push(t => {
                                        for (let i of e)
                                            if (-1 !== t.indexOf(i))
                                                return a()
                                    }
                                    )
                                }
                                function l(e, t) {
                                    !function () {
                                        a();
                                        let e = o.default.useContext(r.LoadableContext);
                                        e && Array.isArray(i.modules) && i.modules.forEach(t => {
                                            e(t)
                                        }
                                        )
                                    }();
                                    let s = o.default.useSyncExternalStore(n.subscribe, n.getCurrentValue, n.getCurrentValue);
                                    return o.default.useImperativeHandle(t, () => ({
                                        retry: n.retry
                                    }), []),
                                        o.default.useMemo(() => {
                                            var t;
                                            return s.loading || s.error ? o.default.createElement(i.loading, {
                                                isLoading: s.loading,
                                                pastDelay: s.pastDelay,
                                                timedOut: s.timedOut,
                                                error: s.error,
                                                retry: n.retry
                                            }) : s.loaded ? o.default.createElement((t = s.loaded) && t.default ? t.default : t, e) : null
                                        }
                                            , [e, s])
                                }
                                return l.preload = () => a(),
                                    l.displayName = "LoadableComponent",
                                    o.default.forwardRef(l)
                            }(l, e)
                        }
                        function f(e, t) {
                            let i = [];
                            for (; e.length;) {
                                let n = e.pop();
                                i.push(n(t))
                            }
                            return Promise.all(i).then(() => {
                                if (e.length)
                                    return f(e, t)
                            }
                            )
                        }
                        d.preloadAll = () => new Promise((e, t) => {
                            f(a).then(e, t)
                        }
                        ),
                            d.preloadReady = function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return new Promise(t => {
                                    let i = () => (u = !0,
                                        t());
                                    f(s, e).then(i, i)
                                }
                                )
                            }
                            ,
                            window.__NEXT_PRELOADREADY = d.preloadReady,
                            t.default = d
                    },
                    32774: function () { },
                    5152: function (e, t, i) {
                        e.exports = i(95677)
                    },
                    85518: function (e, t, i) {
                        "use strict";
                        var n, o, r, a, s, u, l = i(67294);
                        l && "object" == typeof l && "default" in l && l.default;
                        var c = i(23451)
                            , d = new c
                            , f = d.getBrowser()
                            , p = d.getCPU()
                            , b = d.getDevice()
                            , m = d.getEngine()
                            , h = d.getOS()
                            , v = d.getUA()
                            , w = {
                                Mobile: "mobile",
                                Tablet: "tablet",
                                SmartTv: "smarttv",
                                Console: "console",
                                Wearable: "wearable",
                                Embedded: "embedded",
                                Browser: void 0
                            }
                            , g = {
                                Chrome: "Chrome",
                                Firefox: "Firefox",
                                Opera: "Opera",
                                Yandex: "Yandex",
                                Safari: "Safari",
                                InternetExplorer: "Internet Explorer",
                                Edge: "Edge",
                                Chromium: "Chromium",
                                Ie: "IE",
                                MobileSafari: "Mobile Safari",
                                EdgeChromium: "Edge Chromium",
                                MIUI: "MIUI Browser",
                                SamsungBrowser: "Samsung Browser"
                            }
                            , y = {
                                IOS: "iOS",
                                Android: "Android",
                                WindowsPhone: "Windows Phone",
                                Windows: "Windows",
                                MAC_OS: "Mac OS"
                            }
                            , x = function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                                return e || t
                            }
                            , k = function () {
                                return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
                            }
                            , _ = function (e) {
                                var t = k();
                                return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
                            }
                            , S = function (e) {
                                return e.type === w.Browser
                            }
                            , E = function (e) {
                                return e.name === g.Edge
                            }
                            , C = function (e) {
                                return "string" == typeof e && -1 !== e.indexOf("Edg/")
                            }
                            , P = function () {
                                return _("iPad")
                            };
                        b.type,
                            w.SmartTv,
                            b.type,
                            w.Console,
                            b.type,
                            w.Wearable,
                            b.type,
                            w.Embedded,
                            f.name === g.MobileSafari || P(),
                            f.name,
                            g.Chromium,
                            (n = b.type) === w.Mobile || n === w.Tablet || P(),
                            b.type,
                            w.Mobile,
                            b.type === w.Tablet || P(),
                            S(b),
                            S(b),
                            h.name,
                            y.Android,
                            h.name,
                            y.WindowsPhone,
                            h.name === y.IOS || P(),
                            f.name,
                            g.Chrome,
                            f.name,
                            g.Firefox,
                            (o = f.name) === g.Safari || g.MobileSafari,
                            f.name,
                            g.Opera,
                            (r = f.name) === g.InternetExplorer || g.Ie,
                            x(h.version),
                            x(h.name),
                            x(f.version),
                            x(f.major),
                            x(f.name),
                            x(b.vendor),
                            x(b.model),
                            x(m.name),
                            x(m.version),
                            x(v),
                            E(f) || C(v),
                            f.name,
                            g.Yandex,
                            x(b.type, "browser"),
                            (a = k()) && (/iPad|iPhone|iPod/.test(a.platform) || "MacIntel" === a.platform && a.maxTouchPoints > 1) && window.MSStream,
                            P(),
                            _("iPhone"),
                            _("iPod"),
                            "string" == typeof (u = (s = k()) && s.userAgent && s.userAgent.toLowerCase()) && /electron/.test(u),
                            C(v),
                            E(f) && C(v),
                            h.name,
                            y.Windows,
                            h.name,
                            y.MAC_OS,
                            f.name,
                            g.MIUI,
                            f.name,
                            g.SamsungBrowser
                    },
                    19470: function (e, t, i) {
                        "use strict";
                        function n(e, t) {
                            var i = t.distance
                                , n = t.left
                                , o = t.right
                                , r = t.up
                                , a = t.down
                                , u = t.top
                                , l = t.bottom
                                , d = t.big
                                , f = t.mirror
                                , p = t.opposite
                                , b = (i ? i.toString() : 0) + ((n ? 1 : 0) | (o ? 2 : 0) | (u || a ? 4 : 0) | (l || r ? 8 : 0) | (f ? 16 : 0) | (p ? 32 : 0) | (e ? 64 : 0) | (d ? 128 : 0));
                            if (c.hasOwnProperty(b))
                                return c[b];
                            var m = n || o || r || a || u || l
                                , h = void 0
                                , v = void 0;
                            if (m) {
                                if (!f != !(e && p)) {
                                    var w = [o, n, l, u, a, r];
                                    n = w[0],
                                        o = w[1],
                                        u = w[2],
                                        l = w[3],
                                        r = w[4],
                                        a = w[5]
                                }
                                var g = i || (d ? "2000px" : "100%");
                                h = n ? "-" + g : o ? g : "0",
                                    v = a || u ? "-" + g : r || l ? g : "0"
                            }
                            return c[b] = (0,
                                s.animation)((e ? "to" : "from") + " {opacity: 0;" + (m ? " transform: translate3d(" + h + ", " + v + ", 0);" : "") + "}\n     " + (e ? "from" : "to") + " {opacity: 1;transform: none;} "),
                                c[b]
                        }
                        function o() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.defaults
                                , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                                , i = e.children
                                , o = (e.out,
                                    e.forever)
                                , r = e.timeout
                                , a = e.duration
                                , l = void 0 === a ? s.defaults.duration : a
                                , c = e.delay
                                , d = void 0 === c ? s.defaults.delay : c
                                , f = e.count
                                , p = void 0 === f ? s.defaults.count : f
                                , b = function (e, t) {
                                    var i = {};
                                    for (var n in e)
                                        t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                                    return i
                                }(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"])
                                , m = {
                                    make: n,
                                    duration: void 0 === r ? l : r,
                                    delay: d,
                                    forever: o,
                                    count: p,
                                    style: {
                                        animationFillMode: "both"
                                    },
                                    reverse: b.left
                                };
                            return t ? (0,
                                u.default)(b, m, m, i) : m
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r, a = i(45697), s = i(11017), u = (r = i(42580)) && r.__esModule ? r : {
                            default: r
                        }, l = {
                            out: a.bool,
                            left: a.bool,
                            right: a.bool,
                            top: a.bool,
                            bottom: a.bool,
                            big: a.bool,
                            mirror: a.bool,
                            opposite: a.bool,
                            duration: a.number,
                            timeout: a.number,
                            distance: a.string,
                            delay: a.number,
                            count: a.number,
                            forever: a.bool
                        }, c = {};
                        o.propTypes = l,
                            t.default = o,
                            e.exports = t.default
                    },
                    23451: function (e, t, i) {
                        var n;
                        !function (o, r) {
                            "use strict";
                            var a = "function"
                                , s = "undefined"
                                , u = "object"
                                , l = "string"
                                , c = "major"
                                , d = "model"
                                , f = "name"
                                , p = "type"
                                , b = "vendor"
                                , m = "version"
                                , h = "architecture"
                                , v = "console"
                                , w = "mobile"
                                , g = "tablet"
                                , y = "smarttv"
                                , x = "wearable"
                                , k = "embedded"
                                , _ = "Amazon"
                                , S = "Apple"
                                , E = "ASUS"
                                , C = "BlackBerry"
                                , P = "Browser"
                                , M = "Chrome"
                                , O = "Firefox"
                                , T = "Google"
                                , A = "Huawei"
                                , L = "Microsoft"
                                , N = "Motorola"
                                , D = "Opera"
                                , z = "Samsung"
                                , I = "Sharp"
                                , j = "Sony"
                                , R = "Xiaomi"
                                , q = "Zebra"
                                , F = "Facebook"
                                , U = "Chromium OS"
                                , B = "Mac OS"
                                , W = function (e, t) {
                                    var i = {};
                                    for (var n in e)
                                        t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                                    return i
                                }
                                , G = function (e) {
                                    for (var t = {}, i = 0; i < e.length; i++)
                                        t[e[i].toUpperCase()] = e[i];
                                    return t
                                }
                                , V = function (e, t) {
                                    return typeof e === l && -1 !== X(t).indexOf(X(e))
                                }
                                , X = function (e) {
                                    return e.toLowerCase()
                                }
                                , H = function (e, t) {
                                    if (typeof e === l)
                                        return e = e.replace(/^\s\s*/, ""),
                                            typeof t === s ? e : e.substring(0, 500)
                                }
                                , Y = function (e, t) {
                                    for (var i, n, o, s, l, c, d = 0; d < t.length && !l;) {
                                        var f = t[d]
                                            , p = t[d + 1];
                                        for (i = n = 0; i < f.length && !l && f[i];)
                                            if (l = f[i++].exec(e))
                                                for (o = 0; o < p.length; o++)
                                                    c = l[++n],
                                                        typeof (s = p[o]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : r : this[s[0]] = c ? s[1].call(this, c, s[2]) : r : 4 === s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : r) : this[s] = c || r;
                                        d += 2
                                    }
                                }
                                , Z = function (e, t) {
                                    for (var i in t)
                                        if (typeof t[i] === u && t[i].length > 0) {
                                            for (var n = 0; n < t[i].length; n++)
                                                if (V(t[i][n], e))
                                                    return "?" === i ? r : i
                                        } else if (V(t[i], e))
                                            return "?" === i ? r : i;
                                    return e
                                }
                                , K = {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                                , $ = {
                                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [f, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [f, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [f, m], [/opios[\/ ]+([\w\.]+)/i], [m, [f, D + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [f, D]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [m, [f, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [f, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [f, "UC" + P]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [m, [f, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [f, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [f, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [f, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [m, [f, "Smart Lenovo " + P]], [/(avast|avg)\/([\w\.]+)/i], [[f, /(.+)/, "$1 Secure " + P], m], [/\bfocus\/([\w\.]+)/i], [m, [f, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [f, D + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [f, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [f, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [f, D + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [f, "MIUI " + P]], [/fxios\/([-\w\.]+)/i], [m, [f, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[f, "360 " + P]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[f, /(.+)/, "$1 " + P], m], [/samsungbrowser\/([\w\.]+)/i], [m, [f, z + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], m], [/metasr[\/ ]?([\d\.]+)/i], [m, [f, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[f, "Sogou Mobile"], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [f, m], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [f], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[f, F], m], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [f, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [f, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [f, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [f, M + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[f, M + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [f, "Android " + P]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [f, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [f, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, f], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [f, [m, Z, {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [f, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[f, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [f, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [f, m], [/(cobalt)\/([\w\.]+)/i], [f, [m, /master.|lts./, ""]]],
                                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, X]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows (ce|mobile); ppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[h, /ower/, "", X]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, X]]],
                                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [d, [b, z], [p, g]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [d, [b, z], [p, w]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [d, [b, S], [p, w]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [d, [b, S], [p, g]], [/(macintosh);/i], [d, [b, S]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [d, [b, I], [p, w]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [d, [b, A], [p, g]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [d, [b, A], [p, w]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[d, /_/g, " "], [b, R], [p, w]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[d, /_/g, " "], [b, R], [p, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [d, [b, "OPPO"], [p, w]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [d, [b, "Vivo"], [p, w]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [d, [b, "Realme"], [p, w]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [d, [b, N], [p, w]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [d, [b, N], [p, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [d, [b, "LG"], [p, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [d, [b, "LG"], [p, w]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [d, [b, "Lenovo"], [p, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[d, /_/g, " "], [b, "Nokia"], [p, w]], [/(pixel c)\b/i], [d, [b, T], [p, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [d, [b, T], [p, w]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [d, [b, j], [p, w]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[d, "Xperia Tablet"], [b, j], [p, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [d, [b, "OnePlus"], [p, w]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [d, [b, _], [p, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[d, /(.+)/g, "Fire Phone $1"], [b, _], [p, w]], [/(playbook);[-\w\),; ]+(rim)/i], [d, b, [p, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [d, [b, C], [p, w]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [d, [b, E], [p, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [d, [b, E], [p, w]], [/(nexus 9)/i], [d, [b, "HTC"], [p, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [b, [d, /_/g, " "], [p, w]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [d, [b, "Acer"], [p, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [d, [b, "Meizu"], [p, w]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [d, [b, "Ulefone"], [p, w]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [b, d, [p, w]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [b, d, [p, g]], [/(surface duo)/i], [d, [b, L], [p, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [d, [b, "Fairphone"], [p, w]], [/(u304aa)/i], [d, [b, "AT&T"], [p, w]], [/\bsie-(\w*)/i], [d, [b, "Siemens"], [p, w]], [/\b(rct\w+) b/i], [d, [b, "RCA"], [p, g]], [/\b(venue[\d ]{2,7}) b/i], [d, [b, "Dell"], [p, g]], [/\b(q(?:mv|ta)\w+) b/i], [d, [b, "Verizon"], [p, g]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [d, [b, "Barnes & Noble"], [p, g]], [/\b(tm\d{3}\w+) b/i], [d, [b, "NuVision"], [p, g]], [/\b(k88) b/i], [d, [b, "ZTE"], [p, g]], [/\b(nx\d{3}j) b/i], [d, [b, "ZTE"], [p, w]], [/\b(gen\d{3}) b.+49h/i], [d, [b, "Swiss"], [p, w]], [/\b(zur\d{3}) b/i], [d, [b, "Swiss"], [p, g]], [/\b((zeki)?tb.*\b) b/i], [d, [b, "Zeki"], [p, g]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[b, "Dragon Touch"], d, [p, g]], [/\b(ns-?\w{0,9}) b/i], [d, [b, "Insignia"], [p, g]], [/\b((nxa|next)-?\w{0,9}) b/i], [d, [b, "NextBook"], [p, g]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[b, "Voice"], d, [p, w]], [/\b(lvtel\-)?(v1[12]) b/i], [[b, "LvTel"], d, [p, w]], [/\b(ph-1) /i], [d, [b, "Essential"], [p, w]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [d, [b, "Envizen"], [p, g]], [/\b(trio[-\w\. ]+) b/i], [d, [b, "MachSpeed"], [p, g]], [/\btu_(1491) b/i], [d, [b, "Rotor"], [p, g]], [/(shield[\w ]+) b/i], [d, [b, "Nvidia"], [p, g]], [/(sprint) (\w+)/i], [b, d, [p, w]], [/(kin\.[onetw]{3})/i], [[d, /\./g, " "], [b, L], [p, w]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [d, [b, q], [p, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [d, [b, q], [p, w]], [/smart-tv.+(samsung)/i], [b, [p, y]], [/hbbtv.+maple;(\d+)/i], [[d, /^/, "SmartTV"], [b, z], [p, y]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[b, "LG"], [p, y]], [/(apple) ?tv/i], [b, [d, S + " TV"], [p, y]], [/crkey/i], [[d, M + "cast"], [b, T], [p, y]], [/droid.+aft(\w+)( bui|\))/i], [d, [b, _], [p, y]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [d, [b, I], [p, y]], [/(bravia[\w ]+)( bui|\))/i], [d, [b, j], [p, y]], [/(mitv-\w{5}) bui/i], [d, [b, R], [p, y]], [/Hbbtv.*(technisat) (.*);/i], [b, d, [p, y]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[b, H], [d, H], [p, y]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, y]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [b, d, [p, v]], [/droid.+; (shield) bui/i], [d, [b, "Nvidia"], [p, v]], [/(playstation [345portablevi]+)/i], [d, [b, j], [p, v]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [d, [b, L], [p, v]], [/((pebble))app/i], [b, d, [p, x]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [d, [b, S], [p, x]], [/droid.+; (glass) \d/i], [d, [b, T], [p, x]], [/droid.+; (wt63?0{2,3})\)/i], [d, [b, q], [p, x]], [/(quest( 2| pro)?)/i], [d, [b, F], [p, x]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [b, [p, k]], [/(aeobc)\b/i], [d, [b, _], [p, k]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [d, [p, w]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [d, [p, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, g]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, w]], [/(android[-\w\. ]{0,9});.+buil/i], [d, [b, "Generic"]]],
                                    engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [f, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [f, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [f, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, f]],
                                    os: [[/microsoft (windows) (vista|xp)/i], [f, m], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [f, [m, Z, K]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, Z, K], [f, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [f, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[f, B], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, f], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [f, m], [/\(bb(10);/i], [m, [f, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [f, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [f, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [f, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [f, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [f, M + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[f, U], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [f, m], [/(sunos) ?([\w\.\d]*)/i], [[f, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [f, m]]
                                }
                                , J = function (e, t) {
                                    if (typeof e === u && (t = e,
                                        e = r),
                                        !(this instanceof J))
                                        return new J(e, t).getResult();
                                    var i = typeof o !== s && o.navigator ? o.navigator : r
                                        , n = e || (i && i.userAgent ? i.userAgent : "")
                                        , v = i && i.userAgentData ? i.userAgentData : r
                                        , y = t ? W($, t) : $
                                        , x = i && i.userAgent == n;
                                    return this.getBrowser = function () {
                                        var e, t = {};
                                        return t[f] = r,
                                            t[m] = r,
                                            Y.call(t, n, y.browser),
                                            t[c] = typeof (e = t[m]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : r,
                                            x && i && i.brave && typeof i.brave.isBrave == a && (t[f] = "Brave"),
                                            t
                                    }
                                        ,
                                        this.getCPU = function () {
                                            var e = {};
                                            return e[h] = r,
                                                Y.call(e, n, y.cpu),
                                                e
                                        }
                                        ,
                                        this.getDevice = function () {
                                            var e = {};
                                            return e[b] = r,
                                                e[d] = r,
                                                e[p] = r,
                                                Y.call(e, n, y.device),
                                                x && !e[p] && v && v.mobile && (e[p] = w),
                                                x && "Macintosh" == e[d] && i && typeof i.standalone !== s && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[d] = "iPad",
                                                    e[p] = g),
                                                e
                                        }
                                        ,
                                        this.getEngine = function () {
                                            var e = {};
                                            return e[f] = r,
                                                e[m] = r,
                                                Y.call(e, n, y.engine),
                                                e
                                        }
                                        ,
                                        this.getOS = function () {
                                            var e = {};
                                            return e[f] = r,
                                                e[m] = r,
                                                Y.call(e, n, y.os),
                                                x && !e[f] && v && "Unknown" != v.platform && (e[f] = v.platform.replace(/chrome os/i, U).replace(/macos/i, B)),
                                                e
                                        }
                                        ,
                                        this.getResult = function () {
                                            return {
                                                ua: this.getUA(),
                                                browser: this.getBrowser(),
                                                engine: this.getEngine(),
                                                os: this.getOS(),
                                                device: this.getDevice(),
                                                cpu: this.getCPU()
                                            }
                                        }
                                        ,
                                        this.getUA = function () {
                                            return n
                                        }
                                        ,
                                        this.setUA = function (e) {
                                            return n = typeof e === l && e.length > 500 ? H(e, 500) : e,
                                                this
                                        }
                                        ,
                                        this.setUA(n),
                                        this
                                };
                            J.VERSION = "1.0.37",
                                J.BROWSER = G([f, m, c]),
                                J.CPU = G([h]),
                                J.DEVICE = G([d, b, p, v, w, y, g, x, k]),
                                J.ENGINE = J.OS = G([f, m]),
                                typeof t !== s ? (e.exports && (t = e.exports = J),
                                    t.UAParser = J) : i.amdO ? (n = (function () {
                                        return J
                                    }
                                    ).call(t, i, t, e),
                                        r !== n && (e.exports = n)) : typeof o !== s && (o.UAParser = J);
                            var Q = typeof o !== s && (o.jQuery || o.Zepto);
                            if (Q && !Q.ua) {
                                var ee = new J;
                                Q.ua = ee.getResult(),
                                    Q.ua.get = function () {
                                        return ee.getUA()
                                    }
                                    ,
                                    Q.ua.set = function (e) {
                                        ee.setUA(e);
                                        var t = ee.getResult();
                                        for (var i in t)
                                            Q.ua[i] = t[i]
                                    }
                            }
                        }("object" == typeof window ? window : this)
                    }
                }]);
