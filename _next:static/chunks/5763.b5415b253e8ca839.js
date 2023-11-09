(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5763], {
    19394: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let n = r(17187);
        function i(e, t, r) {
            try {
                Reflect.apply(e, t, r)
            } catch (e) {
                setTimeout(() => {
                    throw e
                }
                )
            }
        }
        class s extends n.EventEmitter {
            emit(e, ...t) {
                let r = "error" === e
                    , n = this._events;
                if (void 0 !== n)
                    r = r && void 0 === n.error;
                else if (!r)
                    return !1;
                if (r) {
                    let e;
                    if (t.length > 0 && ([e] = t),
                        e instanceof Error)
                        throw e;
                    let r = Error(`Unhandled error.${e ? ` (${e.message})` : ""}`);
                    throw r.context = e,
                    r
                }
                let s = n[e];
                if (void 0 === s)
                    return !1;
                if ("function" == typeof s)
                    i(s, this, t);
                else {
                    let e = s.length
                        , r = function (e) {
                            let t = e.length
                                , r = Array(t);
                            for (let n = 0; n < t; n += 1)
                                r[n] = e[n];
                            return r
                        }(s);
                    for (let n = 0; n < e; n += 1)
                        i(r[n], this, t)
                }
                return !0
            }
        }
        t.default = s
    },
    31422: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.assertExhaustive = t.assertStruct = t.assert = t.AssertionError = void 0;
        let n = r(11821);
        function i(e, t) {
            var r, n;
            return Boolean("string" == typeof (null === (n = null === (r = null == e ? void 0 : e.prototype) || void 0 === r ? void 0 : r.constructor) || void 0 === n ? void 0 : n.name)) ? new e({
                message: t
            }) : e({
                message: t
            })
        }
        class s extends Error {
            constructor(e) {
                super(e.message),
                    this.code = "ERR_ASSERTION"
            }
        }
        t.AssertionError = s,
            t.assert = function (e, t = "Assertion failed.", r = s) {
                if (!e) {
                    if (t instanceof Error)
                        throw t;
                    throw i(r, t)
                }
            }
            ,
            t.assertStruct = function (e, t, r = "Assertion failed", o = s) {
                try {
                    (0,
                        n.assert)(e, t)
                } catch (e) {
                    throw i(o, `${r}: ${function (e) {
                        let t = "object" == typeof e && null !== e && "message" in e ? e.message : String(e);
                        return t.endsWith(".") ? t.slice(0, -1) : t
                    }(e)}.`)
                }
            }
            ,
            t.assertExhaustive = function (e) {
                throw Error("Invalid branch reached. Should be detected during compilation.")
            }
    },
    47207: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.base64 = void 0;
        let n = r(11821)
            , i = r(31422)
            , s = (e, t = {}) => {
                var r, s;
                let o, a;
                let u = null !== (r = t.paddingRequired) && void 0 !== r && r
                    , c = null !== (s = t.characterSet) && void 0 !== s ? s : "base64";
                return "base64" === c ? o = String.raw`[A-Za-z0-9+\/]` : ((0,
                    i.assert)("base64url" === c),
                    o = String.raw`[-_A-Za-z0-9]`),
                    a = u ? RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u") : RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`, "u"),
                    (0,
                        n.pattern)(e, a)
            }
            ;
        t.base64 = s
    },
    8476: function (e, t, r) {
        "use strict";
        var n = r(48764).Buffer;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createDataView = t.concatBytes = t.valueToBytes = t.stringToBytes = t.numberToBytes = t.signedBigIntToBytes = t.bigIntToBytes = t.hexToBytes = t.bytesToString = t.bytesToNumber = t.bytesToSignedBigInt = t.bytesToBigInt = t.bytesToHex = t.assertIsBytes = t.isBytes = void 0;
        let i = r(31422)
            , s = r(62009)
            , o = function () {
                let e = [];
                return () => {
                    if (0 === e.length)
                        for (let t = 0; t < 256; t++)
                            e.push(t.toString(16).padStart(2, "0"));
                    return e
                }
            }();
        function a(e) {
            return e instanceof Uint8Array
        }
        function u(e) {
            (0,
                i.assert)(a(e), "Value must be a Uint8Array.")
        }
        function c(e) {
            if (u(e),
                0 === e.length)
                return "0x";
            let t = o()
                , r = Array(e.length);
            for (let n = 0; n < e.length; n++)
                r[n] = t[e[n]];
            return (0,
                s.add0x)(r.join(""))
        }
        function l(e) {
            u(e);
            let t = c(e);
            return BigInt(t)
        }
        function h(e) {
            var t;
            if ((null === (t = null == e ? void 0 : e.toLowerCase) || void 0 === t ? void 0 : t.call(e)) === "0x")
                return new Uint8Array;
            (0,
                s.assertIsHexString)(e);
            let r = (0,
                s.remove0x)(e).toLowerCase()
                , n = r.length % 2 == 0 ? r : `0 ${r}`
                , i = new Uint8Array(n.length / 2);
            for (let e = 0; e < i.length; e++) {
                let t = n.charCodeAt(2 * e)
                    , r = n.charCodeAt(2 * e + 1)
                    , s = t - (t < 58 ? 48 : 87)
                    , o = r - (r < 58 ? 48 : 87);
                i[e] = 16 * s + o
            }
            return i
        }
        function d(e) {
            (0,
                i.assert)("bigint" == typeof e, "Value must be a bigint."),
                (0,
                    i.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
            let t = e.toString(16);
            return h(t)
        }
        function f(e) {
            (0,
                i.assert)("number" == typeof e, "Value must be a number."),
                (0,
                    i.assert)(e >= 0, "Value must be a non-negative number."),
                (0,
                    i.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
            let t = e.toString(16);
            return h(t)
        }
        function p(e) {
            return (0,
                i.assert)("string" == typeof e, "Value must be a string."),
                new TextEncoder().encode(e)
        }
        function g(e) {
            if ("bigint" == typeof e)
                return d(e);
            if ("number" == typeof e)
                return f(e);
            if ("string" == typeof e)
                return e.startsWith("0x") ? h(e) : p(e);
            if (a(e))
                return e;
            throw TypeError(`Unsupported value type: "${typeof e}".`)
        }
        t.isBytes = a,
            t.assertIsBytes = u,
            t.bytesToHex = c,
            t.bytesToBigInt = l,
            t.bytesToSignedBigInt = function (e) {
                u(e);
                let t = BigInt(0);
                for (let r of e)
                    t = (t << BigInt(8)) + BigInt(r);
                return BigInt.asIntN(8 * e.length, t)
            }
            ,
            t.bytesToNumber = function (e) {
                u(e);
                let t = l(e);
                return (0,
                    i.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
                    Number(t)
            }
            ,
            t.bytesToString = function (e) {
                return u(e),
                    new TextDecoder().decode(e)
            }
            ,
            t.hexToBytes = h,
            t.bigIntToBytes = d,
            t.signedBigIntToBytes = function (e, t) {
                (0,
                    i.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                        i.assert)("number" == typeof t, "Byte length must be a number."),
                    (0,
                        i.assert)(t > 0, "Byte length must be greater than 0."),
                    (0,
                        i.assert)(function (e, t) {
                            (0,
                                i.assert)(t > 0);
                            let r = e >> BigInt(31);
                            return !((~e & r) + (e & ~r) >> BigInt(8 * t + -1))
                        }(e, t), "Byte length is too small to represent the given value.");
                let r = e
                    , n = new Uint8Array(t);
                for (let e = 0; e < n.length; e++)
                    n[e] = Number(BigInt.asUintN(8, r)),
                        r >>= BigInt(8);
                return n.reverse()
            }
            ,
            t.numberToBytes = f,
            t.stringToBytes = p,
            t.valueToBytes = g,
            t.concatBytes = function (e) {
                let t = Array(e.length)
                    , r = 0;
                for (let n = 0; n < e.length; n++) {
                    let i = g(e[n]);
                    t[n] = i,
                        r += i.length
                }
                let n = new Uint8Array(r);
                for (let e = 0, r = 0; e < t.length; e++)
                    n.set(t[e], r),
                        r += t[e].length;
                return n
            }
            ,
            t.createDataView = function (e) {
                if (void 0 !== n && e instanceof n) {
                    let t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                    return new DataView(t)
                }
                return new DataView(e.buffer, e.byteOffset, e.byteLength)
            }
    },
    85013: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ChecksumStruct = void 0;
        let n = r(11821)
            , i = r(47207);
        t.ChecksumStruct = (0,
            n.size)((0,
                i.base64)((0,
                    n.string)(), {
                    paddingRequired: !0
                }), 44, 44)
    },
    73557: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createHex = t.createBytes = t.createBigInt = t.createNumber = void 0;
        let n = r(11821)
            , i = r(31422)
            , s = r(8476)
            , o = r(62009)
            , a = (0,
                n.union)([(0,
                    n.number)(), (0,
                        n.bigint)(), (0,
                            n.string)(), o.StrictHexStruct])
            , u = (0,
                n.coerce)((0,
                    n.number)(), a, Number)
            , c = (0,
                n.coerce)((0,
                    n.bigint)(), a, BigInt);
        (0,
            n.union)([o.StrictHexStruct, (0,
                n.instance)(Uint8Array)]);
        let l = (0,
            n.coerce)((0,
                n.instance)(Uint8Array), (0,
                    n.union)([o.StrictHexStruct]), s.hexToBytes)
            , h = (0,
                n.coerce)(o.StrictHexStruct, (0,
                    n.instance)(Uint8Array), s.bytesToHex);
        t.createNumber = function (e) {
            try {
                let t = (0,
                    n.create)(e, u);
                return (0,
                    i.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`),
                    t
            } catch (t) {
                if (t instanceof n.StructError)
                    throw Error(`Expected a number-like value, got "${e}".`);
                throw t
            }
        }
            ,
            t.createBigInt = function (e) {
                try {
                    return (0,
                        n.create)(e, c)
                } catch (e) {
                    if (e instanceof n.StructError)
                        throw Error(`Expected a number-like value, got "${String(e.value)}".`);
                    throw e
                }
            }
            ,
            t.createBytes = function (e) {
                if ("string" == typeof e && "0x" === e.toLowerCase())
                    return new Uint8Array;
                try {
                    return (0,
                        n.create)(e, l)
                } catch (e) {
                    if (e instanceof n.StructError)
                        throw Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                    throw e
                }
            }
            ,
            t.createHex = function (e) {
                if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase())
                    return "0x";
                try {
                    return (0,
                        n.create)(e, h)
                } catch (e) {
                    if (e instanceof n.StructError)
                        throw Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                    throw e
                }
            }
    },
    94283: function (e, t) {
        "use strict";
        var r, n, i = this && this.__classPrivateFieldSet || function (e, t, r, n, i) {
            if ("m" === n)
                throw TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
                r
        }
            , s = this && this.__classPrivateFieldGet || function (e, t, r, n) {
                if ("a" === r && !n)
                    throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e))
                    throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.FrozenSet = t.FrozenMap = void 0;
        class o {
            constructor(e) {
                r.set(this, void 0),
                    i(this, r, new Map(e), "f"),
                    Object.freeze(this)
            }
            get size() {
                return s(this, r, "f").size
            }
            [(r = new WeakMap,
                Symbol.iterator)]() {
                return s(this, r, "f")[Symbol.iterator]()
            }
            entries() {
                return s(this, r, "f").entries()
            }
            forEach(e, t) {
                return s(this, r, "f").forEach((r, n, i) => e.call(t, r, n, this))
            }
            get(e) {
                return s(this, r, "f").get(e)
            }
            has(e) {
                return s(this, r, "f").has(e)
            }
            keys() {
                return s(this, r, "f").keys()
            }
            values() {
                return s(this, r, "f").values()
            }
            toString() {
                return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([e, t]) => `${String(e)} => ${String(t)}`).join(", ")} ` : ""}}`
            }
        }
        t.FrozenMap = o;
        class a {
            constructor(e) {
                n.set(this, void 0),
                    i(this, n, new Set(e), "f"),
                    Object.freeze(this)
            }
            get size() {
                return s(this, n, "f").size
            }
            [(n = new WeakMap,
                Symbol.iterator)]() {
                return s(this, n, "f")[Symbol.iterator]()
            }
            entries() {
                return s(this, n, "f").entries()
            }
            forEach(e, t) {
                return s(this, n, "f").forEach((r, n, i) => e.call(t, r, n, this))
            }
            has(e) {
                return s(this, n, "f").has(e)
            }
            keys() {
                return s(this, n, "f").keys()
            }
            values() {
                return s(this, n, "f").values()
            }
            toString() {
                return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map(e => String(e)).join(", ")} ` : ""}}`
            }
        }
        t.FrozenSet = a,
            Object.freeze(o),
            Object.freeze(o.prototype),
            Object.freeze(a),
            Object.freeze(a.prototype)
    },
    62009: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
        let n = r(11821)
            , i = r(31422);
        function s(e) {
            return (0,
                n.is)(e, t.HexStruct)
        }
        function o(e) {
            return (0,
                n.is)(e, t.StrictHexStruct)
        }
        t.HexStruct = (0,
            n.pattern)((0,
                n.string)(), /^(?:0x)?[0-9a-f]+$/iu),
            t.StrictHexStruct = (0,
                n.pattern)((0,
                    n.string)(), /^0x[0-9a-f]+$/iu),
            t.isHexString = s,
            t.isStrictHexString = o,
            t.assertIsHexString = function (e) {
                (0,
                    i.assert)(s(e), "Value must be a hexadecimal string.")
            }
            ,
            t.assertIsStrictHexString = function (e) {
                (0,
                    i.assert)(o(e), 'Value must be a hexadecimal string, starting with "0x".')
            }
            ,
            t.add0x = function (e) {
                return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x ${e.substring(2)}` : `0x ${e}`
            }
            ,
            t.remove0x = function (e) {
                return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
            }
    },
    42451: function (e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                enumerable: !0,
                get: function () {
                    return t[r]
                }
            }),
                Object.defineProperty(e, n, i)
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
        )
            , i = this && this.__exportStar || function (e, t) {
                for (var r in e)
                    "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            i(r(31422), t),
            i(r(47207), t),
            i(r(8476), t),
            i(r(85013), t),
            i(r(73557), t),
            i(r(94283), t),
            i(r(62009), t),
            i(r(22497), t),
            i(r(20160), t),
            i(r(66215), t),
            i(r(89679), t),
            i(r(99108), t),
            i(r(97772), t),
            i(r(88426), t)
    },
    22497: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.validateJsonAndGetSize = t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.isValidJson = t.JsonStruct = void 0;
        let n = r(11821)
            , i = r(31422)
            , s = r(66215);
        function o(e, t = !1) {
            let r = new Set;
            return function e(t, n) {
                if (void 0 === t)
                    return [!1, 0];
                if (null === t)
                    return [!0, n ? 0 : s.JsonSize.Null];
                let i = typeof t;
                try {
                    if ("function" === i)
                        return [!1, 0];
                    if ("string" === i || t instanceof String)
                        return [!0, n ? 0 : (0,
                            s.calculateStringSize)(t) + 2 * s.JsonSize.Quote];
                    if ("boolean" === i || t instanceof Boolean) {
                        if (n)
                            return [!0, 0];
                        return [!0, !0 == t ? s.JsonSize.True : s.JsonSize.False]
                    }
                    if ("number" === i || t instanceof Number) {
                        if (n)
                            return [!0, 0];
                        return [!0, (0,
                            s.calculateNumberSize)(t)]
                    } else if (t instanceof Date) {
                        if (n)
                            return [!0, 0];
                        return [!0, isNaN(t.getDate()) ? s.JsonSize.Null : s.JsonSize.Date + 2 * s.JsonSize.Quote]
                    }
                } catch (e) {
                    return [!1, 0]
                }
                if (!(0,
                    s.isPlainObject)(t) && !Array.isArray(t) || r.has(t))
                    return [!1, 0];
                r.add(t);
                try {
                    return [!0, Object.entries(t).reduce((i, [o, a], u, c) => {
                        let [l, h] = e(a, n);
                        if (!l)
                            throw Error("JSON validation did not pass. Validation process stopped.");
                        if (r.delete(t),
                            n)
                            return 0;
                        let d = Array.isArray(t) ? 0 : o.length + s.JsonSize.Comma + 2 * s.JsonSize.Colon
                            , f = u < c.length - 1 ? s.JsonSize.Comma : 0;
                        return i + d + h + f
                    }
                        , n ? 0 : 2 * s.JsonSize.Wrapper)]
                } catch (e) {
                    return [!1, 0]
                }
            }(e, t)
        }
        t.JsonStruct = (0,
            n.define)("Json", e => {
                let [t] = o(e, !0);
                return !!t || "Expected a valid JSON-serializable value"
            }
            ),
            t.isValidJson = function (e) {
                return (0,
                    n.is)(e, t.JsonStruct)
            }
            ,
            t.jsonrpc2 = "2.0",
            t.JsonRpcVersionStruct = (0,
                n.literal)(t.jsonrpc2),
            t.JsonRpcIdStruct = (0,
                n.nullable)((0,
                    n.union)([(0,
                        n.number)(), (0,
                            n.string)()])),
            t.JsonRpcErrorStruct = (0,
                n.object)({
                    code: (0,
                        n.integer)(),
                    message: (0,
                        n.string)(),
                    data: (0,
                        n.optional)(t.JsonStruct),
                    stack: (0,
                        n.optional)((0,
                            n.string)())
                }),
            t.JsonRpcParamsStruct = (0,
                n.optional)((0,
                    n.union)([(0,
                        n.record)((0,
                            n.string)(), t.JsonStruct), (0,
                                n.array)(t.JsonStruct)])),
            t.JsonRpcRequestStruct = (0,
                n.object)({
                    id: t.JsonRpcIdStruct,
                    jsonrpc: t.JsonRpcVersionStruct,
                    method: (0,
                        n.string)(),
                    params: t.JsonRpcParamsStruct
                }),
            t.JsonRpcNotificationStruct = (0,
                n.omit)(t.JsonRpcRequestStruct, ["id"]),
            t.isJsonRpcNotification = function (e) {
                return (0,
                    n.is)(e, t.JsonRpcNotificationStruct)
            }
            ,
            t.assertIsJsonRpcNotification = function (e, r) {
                (0,
                    i.assertStruct)(e, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", r)
            }
            ,
            t.isJsonRpcRequest = function (e) {
                return (0,
                    n.is)(e, t.JsonRpcRequestStruct)
            }
            ,
            t.assertIsJsonRpcRequest = function (e, r) {
                (0,
                    i.assertStruct)(e, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", r)
            }
            ,
            t.PendingJsonRpcResponseStruct = (0,
                n.object)({
                    id: t.JsonRpcIdStruct,
                    jsonrpc: t.JsonRpcVersionStruct,
                    result: (0,
                        n.optional)((0,
                            n.unknown)()),
                    error: (0,
                        n.optional)(t.JsonRpcErrorStruct)
                }),
            t.JsonRpcSuccessStruct = (0,
                n.object)({
                    id: t.JsonRpcIdStruct,
                    jsonrpc: t.JsonRpcVersionStruct,
                    result: t.JsonStruct
                }),
            t.JsonRpcFailureStruct = (0,
                n.object)({
                    id: t.JsonRpcIdStruct,
                    jsonrpc: t.JsonRpcVersionStruct,
                    error: t.JsonRpcErrorStruct
                }),
            t.JsonRpcResponseStruct = (0,
                n.union)([t.JsonRpcSuccessStruct, t.JsonRpcFailureStruct]),
            t.isPendingJsonRpcResponse = function (e) {
                return (0,
                    n.is)(e, t.PendingJsonRpcResponseStruct)
            }
            ,
            t.assertIsPendingJsonRpcResponse = function (e, r) {
                (0,
                    i.assertStruct)(e, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", r)
            }
            ,
            t.isJsonRpcResponse = function (e) {
                return (0,
                    n.is)(e, t.JsonRpcResponseStruct)
            }
            ,
            t.assertIsJsonRpcResponse = function (e, r) {
                (0,
                    i.assertStruct)(e, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", r)
            }
            ,
            t.isJsonRpcSuccess = function (e) {
                return (0,
                    n.is)(e, t.JsonRpcSuccessStruct)
            }
            ,
            t.assertIsJsonRpcSuccess = function (e, r) {
                (0,
                    i.assertStruct)(e, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", r)
            }
            ,
            t.isJsonRpcFailure = function (e) {
                return (0,
                    n.is)(e, t.JsonRpcFailureStruct)
            }
            ,
            t.assertIsJsonRpcFailure = function (e, r) {
                (0,
                    i.assertStruct)(e, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", r)
            }
            ,
            t.isJsonRpcError = function (e) {
                return (0,
                    n.is)(e, t.JsonRpcErrorStruct)
            }
            ,
            t.assertIsJsonRpcError = function (e, r) {
                (0,
                    i.assertStruct)(e, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", r)
            }
            ,
            t.getJsonRpcIdValidator = function (e) {
                let { permitEmptyString: t, permitFractions: r, permitNull: n } = Object.assign({
                    permitEmptyString: !0,
                    permitFractions: !1,
                    permitNull: !0
                }, e)
                    , i = e => Boolean("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e);
                return i
            }
            ,
            t.validateJsonAndGetSize = o
    },
    20160: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createModuleLogger = t.createProjectLogger = void 0;
        let i = n(r(11227))
            , s = (0,
                i.default)("metamask");
        t.createProjectLogger = function (e) {
            return s.extend(e)
        }
            ,
            t.createModuleLogger = function (e, t) {
                return e.extend(t)
            }
    },
    66215: function (e, t) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0,
            t.isNonEmptyArray = function (e) {
                return Array.isArray(e) && e.length > 0
            }
            ,
            t.isNullOrUndefined = function (e) {
                return null == e
            }
            ,
            t.isObject = function (e) {
                return Boolean(e) && "object" == typeof e && !Array.isArray(e)
            }
            ;
        let n = (e, t) => Object.hasOwnProperty.call(e, t);
        function i(e) {
            return 127 >= e.charCodeAt(0)
        }
        t.hasProperty = n,
            (r = t.JsonSize || (t.JsonSize = {}))[r.Null = 4] = "Null",
            r[r.Comma = 1] = "Comma",
            r[r.Wrapper = 1] = "Wrapper",
            r[r.True = 4] = "True",
            r[r.False = 5] = "False",
            r[r.Quote = 1] = "Quote",
            r[r.Colon = 1] = "Colon",
            r[r.Date = 24] = "Date",
            t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu,
            t.isPlainObject = function (e) {
                if ("object" != typeof e || null === e)
                    return !1;
                try {
                    let t = e;
                    for (; null !== Object.getPrototypeOf(t);)
                        t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                } catch (e) {
                    return !1
                }
            }
            ,
            t.isASCII = i,
            t.calculateStringSize = function (e) {
                var r;
                let n = e.split("").reduce((e, t) => i(t) ? e + 1 : e + 2, 0);
                return n + (null !== (r = e.match(t.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== r ? r : []).length
            }
            ,
            t.calculateNumberSize = function (e) {
                return e.toString().length
            }
    },
    89679: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.hexToBigInt = t.hexToNumber = t.bigIntToHex = t.numberToHex = void 0;
        let n = r(31422)
            , i = r(62009)
            , s = e => ((0,
                n.assert)("number" == typeof e, "Value must be a number."),
                (0,
                    n.assert)(e >= 0, "Value must be a non-negative number."),
                (0,
                    n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
                (0,
                    i.add0x)(e.toString(16)));
        t.numberToHex = s;
        let o = e => ((0,
            n.assert)("bigint" == typeof e, "Value must be a bigint."),
            (0,
                n.assert)(e >= 0, "Value must be a non-negative bigint."),
            (0,
                i.add0x)(e.toString(16)));
        t.bigIntToHex = o;
        let a = e => {
            (0,
                i.assertIsHexString)(e);
            let t = parseInt(e, 16);
            return (0,
                n.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
                t
        }
            ;
        t.hexToNumber = a;
        let u = e => ((0,
            i.assertIsHexString)(e),
            BigInt((0,
                i.add0x)(e)));
        t.hexToBigInt = u
    },
    99108: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    97772: function (e, t) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.timeSince = t.inMilliseconds = t.Duration = void 0,
            (r = t.Duration || (t.Duration = {}))[r.Millisecond = 1] = "Millisecond",
            r[r.Second = 1e3] = "Second",
            r[r.Minute = 6e4] = "Minute",
            r[r.Hour = 36e5] = "Hour",
            r[r.Day = 864e5] = "Day",
            r[r.Week = 6048e5] = "Week",
            r[r.Year = 31536e6] = "Year";
        let n = e => Number.isInteger(e) && e >= 0
            , i = (e, t) => {
                if (!n(e))
                    throw Error(`"${t}" must be a non-negative integer. Received: "${e}".`)
            }
            ;
        t.inMilliseconds = function (e, t) {
            return i(e, "count"),
                e * t
        }
            ,
            t.timeSince = function (e) {
                return i(e, "timestamp"),
                    Date.now() - e
            }
    },
    88426: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
        let n = r(45393)
            , i = r(11821)
            , s = r(31422);
        t.VersionStruct = (0,
            i.refine)((0,
                i.string)(), "Version", e => null !== (0,
                    n.valid)(e) || `Expected SemVer version, got "${e}"`),
            t.VersionRangeStruct = (0,
                i.refine)((0,
                    i.string)(), "Version range", e => null !== (0,
                        n.validRange)(e) || `Expected SemVer range, got "${e}"`),
            t.isValidSemVerVersion = function (e) {
                return (0,
                    i.is)(e, t.VersionStruct)
            }
            ,
            t.isValidSemVerRange = function (e) {
                return (0,
                    i.is)(e, t.VersionRangeStruct)
            }
            ,
            t.assertIsSemVerVersion = function (e) {
                (0,
                    s.assertStruct)(e, t.VersionStruct)
            }
            ,
            t.assertIsSemVerRange = function (e) {
                (0,
                    s.assertStruct)(e, t.VersionRangeStruct)
            }
            ,
            t.gtVersion = function (e, t) {
                return (0,
                    n.gt)(e, t)
            }
            ,
            t.gtRange = function (e, t) {
                return (0,
                    n.gtr)(e, t)
            }
            ,
            t.satisfiesVersionRange = function (e, t) {
                return (0,
                    n.satisfies)(e, t, {
                        includePrerelease: !0
                    })
            }
    },
    33066: function (e, t, r) {
        "use strict";
        let n = r(64403)
            , i = Symbol("max")
            , s = Symbol("length")
            , o = Symbol("lengthCalculator")
            , a = Symbol("allowStale")
            , u = Symbol("maxAge")
            , c = Symbol("dispose")
            , l = Symbol("noDisposeOnSet")
            , h = Symbol("lruList")
            , d = Symbol("cache")
            , f = Symbol("updateAgeOnGet")
            , p = () => 1
            , g = (e, t, r) => {
                let n = e[d].get(t);
                if (n) {
                    let t = n.value;
                    if (m(e, t)) {
                        if (b(e, n),
                            !e[a])
                            return
                    } else
                        r && (e[f] && (n.value.now = Date.now()),
                            e[h].unshiftNode(n));
                    return t.value
                }
            }
            , m = (e, t) => {
                if (!t || !t.maxAge && !e[u])
                    return !1;
                let r = Date.now() - t.now;
                return t.maxAge ? r > t.maxAge : e[u] && r > e[u]
            }
            , y = e => {
                if (e[s] > e[i])
                    for (let t = e[h].tail; e[s] > e[i] && null !== t;) {
                        let r = t.prev;
                        b(e, t),
                            t = r
                    }
            }
            , b = (e, t) => {
                if (t) {
                    let r = t.value;
                    e[c] && e[c](r.key, r.value),
                        e[s] -= r.length,
                        e[d].delete(r.key),
                        e[h].removeNode(t)
                }
            }
            ;
        class v {
            constructor(e, t, r, n, i) {
                this.key = e,
                    this.value = t,
                    this.length = r,
                    this.now = n,
                    this.maxAge = i || 0
            }
        }
        let _ = (e, t, r, n) => {
            let i = r.value;
            m(e, i) && (b(e, r),
                e[a] || (i = void 0)),
                i && t.call(n, i.value, i.key, e)
        }
            ;
        e.exports = class {
            constructor(e) {
                if ("number" == typeof e && (e = {
                    max: e
                }),
                    e || (e = {}),
                    e.max && ("number" != typeof e.max || e.max < 0))
                    throw TypeError("max must be a non-negative number");
                this[i] = e.max || 1 / 0;
                let t = e.length || p;
                if (this[o] = "function" != typeof t ? p : t,
                    this[a] = e.stale || !1,
                    e.maxAge && "number" != typeof e.maxAge)
                    throw TypeError("maxAge must be a number");
                this[u] = e.maxAge || 0,
                    this[c] = e.dispose,
                    this[l] = e.noDisposeOnSet || !1,
                    this[f] = e.updateAgeOnGet || !1,
                    this.reset()
            }
            set max(e) {
                if ("number" != typeof e || e < 0)
                    throw TypeError("max must be a non-negative number");
                this[i] = e || 1 / 0,
                    y(this)
            }
            get max() {
                return this[i]
            }
            set allowStale(e) {
                this[a] = !!e
            }
            get allowStale() {
                return this[a]
            }
            set maxAge(e) {
                if ("number" != typeof e)
                    throw TypeError("maxAge must be a non-negative number");
                this[u] = e,
                    y(this)
            }
            get maxAge() {
                return this[u]
            }
            set lengthCalculator(e) {
                "function" != typeof e && (e = p),
                    e !== this[o] && (this[o] = e,
                        this[s] = 0,
                        this[h].forEach(e => {
                            e.length = this[o](e.value, e.key),
                                this[s] += e.length
                        }
                        )),
                    y(this)
            }
            get lengthCalculator() {
                return this[o]
            }
            get length() {
                return this[s]
            }
            get itemCount() {
                return this[h].length
            }
            rforEach(e, t) {
                t = t || this;
                for (let r = this[h].tail; null !== r;) {
                    let n = r.prev;
                    _(this, e, r, t),
                        r = n
                }
            }
            forEach(e, t) {
                t = t || this;
                for (let r = this[h].head; null !== r;) {
                    let n = r.next;
                    _(this, e, r, t),
                        r = n
                }
            }
            keys() {
                return this[h].toArray().map(e => e.key)
            }
            values() {
                return this[h].toArray().map(e => e.value)
            }
            reset() {
                this[c] && this[h] && this[h].length && this[h].forEach(e => this[c](e.key, e.value)),
                    this[d] = new Map,
                    this[h] = new n,
                    this[s] = 0
            }
            dump() {
                return this[h].map(e => !m(this, e) && {
                    k: e.key,
                    v: e.value,
                    e: e.now + (e.maxAge || 0)
                }).toArray().filter(e => e)
            }
            dumpLru() {
                return this[h]
            }
            set(e, t, r) {
                if ((r = r || this[u]) && "number" != typeof r)
                    throw TypeError("maxAge must be a number");
                let n = r ? Date.now() : 0
                    , a = this[o](t, e);
                if (this[d].has(e)) {
                    if (a > this[i])
                        return b(this, this[d].get(e)),
                            !1;
                    let o = this[d].get(e)
                        , u = o.value;
                    return this[c] && !this[l] && this[c](e, u.value),
                        u.now = n,
                        u.maxAge = r,
                        u.value = t,
                        this[s] += a - u.length,
                        u.length = a,
                        this.get(e),
                        y(this),
                        !0
                }
                let f = new v(e, t, a, n, r);
                return f.length > this[i] ? (this[c] && this[c](e, t),
                    !1) : (this[s] += f.length,
                        this[h].unshift(f),
                        this[d].set(e, this[h].head),
                        y(this),
                        !0)
            }
            has(e) {
                if (!this[d].has(e))
                    return !1;
                let t = this[d].get(e).value;
                return !m(this, t)
            }
            get(e) {
                return g(this, e, !0)
            }
            peek(e) {
                return g(this, e, !1)
            }
            pop() {
                let e = this[h].tail;
                return e ? (b(this, e),
                    e.value) : null
            }
            del(e) {
                b(this, this[d].get(e))
            }
            load(e) {
                this.reset();
                let t = Date.now();
                for (let r = e.length - 1; r >= 0; r--) {
                    let n = e[r]
                        , i = n.e || 0;
                    if (0 === i)
                        this.set(n.k, n.v);
                    else {
                        let e = i - t;
                        e > 0 && this.set(n.k, n.v, e)
                    }
                }
            }
            prune() {
                this[d].forEach((e, t) => g(this, t, !1))
            }
        }
    },
    67809: function (e, t, r) {
        let n = Symbol("SemVer ANY");
        class i {
            static get ANY() {
                return n
            }
            constructor(e, t) {
                if (t = s(t),
                    e instanceof i) {
                    if (!!t.loose === e.loose)
                        return e;
                    e = e.value
                }
                c("comparator", e = e.trim().split(/\s+/).join(" "), t),
                    this.options = t,
                    this.loose = !!t.loose,
                    this.parse(e),
                    this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version,
                    c("comp", this)
            }
            parse(e) {
                let t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR]
                    , r = e.match(t);
                if (!r)
                    throw TypeError(`Invalid comparator: ${e}`);
                this.operator = void 0 !== r[1] ? r[1] : "",
                    "=" === this.operator && (this.operator = ""),
                    r[2] ? this.semver = new l(r[2], this.options.loose) : this.semver = n
            }
            toString() {
                return this.value
            }
            test(e) {
                if (c("Comparator.test", e, this.options.loose),
                    this.semver === n || e === n)
                    return !0;
                if ("string" == typeof e)
                    try {
                        e = new l(e, this.options)
                    } catch (e) {
                        return !1
                    }
                return u(e, this.operator, this.semver, this.options)
            }
            intersects(e, t) {
                if (!(e instanceof i))
                    throw TypeError("a Comparator is required");
                return "" === this.operator ? "" === this.value || new h(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new h(this.value, t).test(e.semver) : !((t = s(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value) || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || u(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || u(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">"))
            }
        }
        e.exports = i;
        let s = r(33459)
            , { safeRe: o, t: a } = r(98416)
            , u = r(12928)
            , c = r(12494)
            , l = r(30808)
            , h = r(15579)
    },
    15579: function (e, t, r) {
        class n {
            constructor(e, t) {
                if (t = o(t),
                    e instanceof n) {
                    if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease)
                        return e;
                    return new n(e.raw, t)
                }
                if (e instanceof a)
                    return this.raw = e.value,
                        this.set = [[e]],
                        this.format(),
                        this;
                if (this.options = t,
                    this.loose = !!t.loose,
                    this.includePrerelease = !!t.includePrerelease,
                    this.raw = e.trim().split(/\s+/).join(" "),
                    this.set = this.raw.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length),
                    !this.set.length)
                    throw TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                    let e = this.set[0];
                    if (this.set = this.set.filter(e => !y(e[0])),
                        0 === this.set.length)
                        this.set = [e];
                    else if (this.set.length > 1) {
                        for (let e of this.set)
                            if (1 === e.length && b(e[0])) {
                                this.set = [e];
                                break
                            }
                    }
                }
                this.format()
            }
            format() {
                return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(),
                    this.range
            }
            toString() {
                return this.range
            }
            parseRange(e) {
                let t = (this.options.includePrerelease && g) | (this.options.loose && m)
                    , r = t + ":" + e
                    , n = s.get(r);
                if (n)
                    return n;
                let i = this.options.loose
                    , o = i ? l[h.HYPHENRANGELOOSE] : l[h.HYPHENRANGE];
                u("hyphen replace", e = e.replace(o, N(this.options.includePrerelease))),
                    u("comparator trim", e = e.replace(l[h.COMPARATORTRIM], d)),
                    u("tilde trim", e = e.replace(l[h.TILDETRIM], f)),
                    u("caret trim", e = e.replace(l[h.CARETTRIM], p));
                let c = e.split(" ").map(e => _(e, this.options)).join(" ").split(/\s+/).map(e => R(e, this.options));
                i && (c = c.filter(e => (u("loose invalid filter", e, this.options),
                    !!e.match(l[h.COMPARATORLOOSE])))),
                    u("range list", c);
                let b = new Map
                    , v = c.map(e => new a(e, this.options));
                for (let e of v) {
                    if (y(e))
                        return [e];
                    b.set(e.value, e)
                }
                b.size > 1 && b.has("") && b.delete("");
                let w = [...b.values()];
                return s.set(r, w),
                    w
            }
            intersects(e, t) {
                if (!(e instanceof n))
                    throw TypeError("a Range is required");
                return this.set.some(r => v(r, t) && e.set.some(e => v(e, t) && r.every(r => e.every(e => r.intersects(e, t)))))
            }
            test(e) {
                if (!e)
                    return !1;
                if ("string" == typeof e)
                    try {
                        e = new c(e, this.options)
                    } catch (e) {
                        return !1
                    }
                for (let t = 0; t < this.set.length; t++)
                    if (A(this.set[t], e, this.options))
                        return !0;
                return !1
            }
        }
        e.exports = n;
        let i = r(33066)
            , s = new i({
                max: 1e3
            })
            , o = r(33459)
            , a = r(67809)
            , u = r(12494)
            , c = r(30808)
            , { safeRe: l, t: h, comparatorTrimReplace: d, tildeTrimReplace: f, caretTrimReplace: p } = r(98416)
            , { FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: m } = r(41493)
            , y = e => "<0.0.0-0" === e.value
            , b = e => "" === e.value
            , v = (e, t) => {
                let r = !0
                    , n = e.slice()
                    , i = n.pop();
                for (; r && n.length;)
                    r = n.every(e => i.intersects(e, t)),
                        i = n.pop();
                return r
            }
            , _ = (e, t) => (u("comp", e, t),
                e = M(e, t),
                u("caret", e),
                e = E(e, t),
                u("tildes", e),
                e = C(e, t),
                u("xrange", e),
                e = I(e, t),
                u("stars", e),
                e)
            , w = e => !e || "x" === e.toLowerCase() || "*" === e
            , E = (e, t) => e.trim().split(/\s+/).map(e => S(e, t)).join(" ")
            , S = (e, t) => {
                let r = t.loose ? l[h.TILDELOOSE] : l[h.TILDE];
                return e.replace(r, (t, r, n, i, s) => {
                    let o;
                    return u("tilde", e, t, r, n, i, s),
                        w(r) ? o = "" : w(n) ? o = `>=${r}.0.0 <${+r + 1}.0.0-0` : w(i) ? o = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : s ? (u("replaceTilde pr", s),
                            o = `>=${r}.${n}.${i}-${s} <${r}.${+n + 1}.0-0`) : o = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`,
                        u("tilde return", o),
                        o
                }
                )
            }
            , M = (e, t) => e.trim().split(/\s+/).map(e => x(e, t)).join(" ")
            , x = (e, t) => {
                u("caret", e, t);
                let r = t.loose ? l[h.CARETLOOSE] : l[h.CARET]
                    , n = t.includePrerelease ? "-0" : "";
                return e.replace(r, (t, r, i, s, o) => {
                    let a;
                    return u("caret", e, t, r, i, s, o),
                        w(r) ? a = "" : w(i) ? a = `>=${r}.0.0 ${n} <${+r + 1}.0.0-0` : w(s) ? a = "0" === r ? `>=${r}.${i}.0 ${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.0 ${n} <${+r + 1}.0.0-0` : o ? (u("replaceCaret pr", o),
                            a = "0" === r ? "0" === i ? `>=${r}.${i}.${s}-${o} <${r}.${i}.${+s + 1}-0` : `>=${r}.${i}.${s}-${o} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${s}-${o} <${+r + 1}.0.0-0`) : (u("no pr"),
                                a = "0" === r ? "0" === i ? `>=${r}.${i}.${s}${n} <${r}.${i}.${+s + 1}-0` : `>=${r}.${i}.${s}${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${s} <${+r + 1}.0.0-0`),
                        u("caret return", a),
                        a
                }
                )
            }
            , C = (e, t) => (u("replaceXRanges", e, t),
                e.split(/\s+/).map(e => k(e, t)).join(" "))
            , k = (e, t) => {
                e = e.trim();
                let r = t.loose ? l[h.XRANGELOOSE] : l[h.XRANGE];
                return e.replace(r, (r, n, i, s, o, a) => {
                    u("xRange", e, r, n, i, s, o, a);
                    let c = w(i)
                        , l = c || w(s)
                        , h = l || w(o);
                    return "=" === n && h && (n = ""),
                        a = t.includePrerelease ? "-0" : "",
                        c ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && h ? (l && (s = 0),
                            o = 0,
                            ">" === n ? (n = ">=",
                                l ? (i = +i + 1,
                                    s = 0,
                                    o = 0) : (s = +s + 1,
                                        o = 0)) : "<=" === n && (n = "<",
                                            l ? i = +i + 1 : s = +s + 1),
                            "<" === n && (a = "-0"),
                            r = `${n + i}.${s}.${o}${a}`) : l ? r = `>=${i}.0.0 ${a} <${+i + 1}.0.0-0` : h && (r = `>=${i}.${s}.0 ${a} <${i}.${+s + 1}.0-0`),
                        u("xRange return", r),
                        r
                }
                )
            }
            , I = (e, t) => (u("replaceStars", e, t),
                e.trim().replace(l[h.STAR], ""))
            , R = (e, t) => (u("replaceGTE0", e, t),
                e.trim().replace(l[t.includePrerelease ? h.GTE0PRE : h.GTE0], ""))
            , N = e => (t, r, n, i, s, o, a, u, c, l, h, d, f) => `${r = w(n) ? "" : w(i) ? `>=${n}.0.0 ${e ? "-0" : ""}` : w(s) ? `>=${n}.${i}.0 ${e ? "-0" : ""}` : o ? `>=${r}` : `>=${r}${e ? "-0" : ""}`} ${u = w(c) ? "" : w(l) ? `<${+c + 1}.0.0-0` : w(h) ? `<${c}.${+l + 1}.0-0` : d ? `<=${c}.${l}.${h}-${d}` : e ? `<${c}.${l}.${+h + 1}-0` : `<=${u}`}`.trim()
            , A = (e, t, r) => {
                for (let r = 0; r < e.length; r++)
                    if (!e[r].test(t))
                        return !1;
                if (t.prerelease.length && !r.includePrerelease) {
                    for (let r = 0; r < e.length; r++)
                        if (u(e[r].semver),
                            e[r].semver !== a.ANY && e[r].semver.prerelease.length > 0) {
                            let n = e[r].semver;
                            if (n.major === t.major && n.minor === t.minor && n.patch === t.patch)
                                return !0
                        }
                    return !1
                }
                return !0
            }
    },
    30808: function (e, t, r) {
        let n = r(12494)
            , { MAX_LENGTH: i, MAX_SAFE_INTEGER: s } = r(41493)
            , { safeRe: o, t: a } = r(98416)
            , u = r(33459)
            , { compareIdentifiers: c } = r(29417);
        class l {
            constructor(e, t) {
                if (t = u(t),
                    e instanceof l) {
                    if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease)
                        return e;
                    e = e.version
                } else if ("string" != typeof e)
                    throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                if (e.length > i)
                    throw TypeError(`version is longer than ${i} characters`);
                n("SemVer", e, t),
                    this.options = t,
                    this.loose = !!t.loose,
                    this.includePrerelease = !!t.includePrerelease;
                let r = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
                if (!r)
                    throw TypeError(`Invalid Version: ${e}`);
                if (this.raw = e,
                    this.major = +r[1],
                    this.minor = +r[2],
                    this.patch = +r[3],
                    this.major > s || this.major < 0)
                    throw TypeError("Invalid major version");
                if (this.minor > s || this.minor < 0)
                    throw TypeError("Invalid minor version");
                if (this.patch > s || this.patch < 0)
                    throw TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map(e => {
                    if (/^[0-9]+$/.test(e)) {
                        let t = +e;
                        if (t >= 0 && t < s)
                            return t
                    }
                    return e
                }
                ) : this.prerelease = [],
                    this.build = r[5] ? r[5].split(".") : [],
                    this.format()
            }
            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`,
                    this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                    this.version
            }
            toString() {
                return this.version
            }
            compare(e) {
                if (n("SemVer.compare", this.version, this.options, e),
                    !(e instanceof l)) {
                    if ("string" == typeof e && e === this.version)
                        return 0;
                    e = new l(e, this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }
            compareMain(e) {
                return e instanceof l || (e = new l(e, this.options)),
                    c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
            }
            comparePre(e) {
                if (e instanceof l || (e = new l(e, this.options)),
                    this.prerelease.length && !e.prerelease.length)
                    return -1;
                if (!this.prerelease.length && e.prerelease.length)
                    return 1;
                if (!this.prerelease.length && !e.prerelease.length)
                    return 0;
                let t = 0;
                do {
                    let r = this.prerelease[t]
                        , i = e.prerelease[t];
                    if (n("prerelease compare", t, r, i),
                        void 0 === r && void 0 === i)
                        return 0;
                    if (void 0 === i)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r === i)
                        continue;
                    else
                        return c(r, i)
                } while (++t)
            }
            compareBuild(e) {
                e instanceof l || (e = new l(e, this.options));
                let t = 0;
                do {
                    let r = this.build[t]
                        , i = e.build[t];
                    if (n("prerelease compare", t, r, i),
                        void 0 === r && void 0 === i)
                        return 0;
                    if (void 0 === i)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r === i)
                        continue;
                    else
                        return c(r, i)
                } while (++t)
            }
            inc(e, t, r) {
                switch (e) {
                    case "premajor":
                        this.prerelease.length = 0,
                            this.patch = 0,
                            this.minor = 0,
                            this.major++,
                            this.inc("pre", t, r);
                        break;
                    case "preminor":
                        this.prerelease.length = 0,
                            this.patch = 0,
                            this.minor++,
                            this.inc("pre", t, r);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0,
                            this.inc("patch", t, r),
                            this.inc("pre", t, r);
                        break;
                    case "prerelease":
                        0 === this.prerelease.length && this.inc("patch", t, r),
                            this.inc("pre", t, r);
                        break;
                    case "major":
                        (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                            this.minor = 0,
                            this.patch = 0,
                            this.prerelease = [];
                        break;
                    case "minor":
                        (0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                            this.patch = 0,
                            this.prerelease = [];
                        break;
                    case "patch":
                        0 === this.prerelease.length && this.patch++,
                            this.prerelease = [];
                        break;
                    case "pre":
                        {
                            let e = Number(r) ? 1 : 0;
                            if (!t && !1 === r)
                                throw Error("invalid increment argument: identifier is empty");
                            if (0 === this.prerelease.length)
                                this.prerelease = [e];
                            else {
                                let n = this.prerelease.length;
                                for (; --n >= 0;)
                                    "number" == typeof this.prerelease[n] && (this.prerelease[n]++,
                                        n = -2);
                                if (-1 === n) {
                                    if (t === this.prerelease.join(".") && !1 === r)
                                        throw Error("invalid increment argument: identifier already exists");
                                    this.prerelease.push(e)
                                }
                            }
                            if (t) {
                                let n = [t, e];
                                !1 === r && (n = [t]),
                                    0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                            }
                            break
                        }
                    default:
                        throw Error(`invalid increment argument: ${e}`)
                }
                return this.raw = this.format(),
                    this.build.length && (this.raw += `+${this.build.join(".")}`),
                    this
            }
        }
        e.exports = l
    },
    97321: function (e, t, r) {
        let n = r(99706)
            , i = (e, t) => {
                let r = n(e.trim().replace(/^[=v]+/, ""), t);
                return r ? r.version : null
            }
            ;
        e.exports = i
    },
    12928: function (e, t, r) {
        let n = r(88951)
            , i = r(70003)
            , s = r(690)
            , o = r(26155)
            , a = r(91675)
            , u = r(38800)
            , c = (e, t, r, c) => {
                switch (t) {
                    case "===":
                        return "object" == typeof e && (e = e.version),
                            "object" == typeof r && (r = r.version),
                            e === r;
                    case "!==":
                        return "object" == typeof e && (e = e.version),
                            "object" == typeof r && (r = r.version),
                            e !== r;
                    case "":
                    case "=":
                    case "==":
                        return n(e, r, c);
                    case "!=":
                        return i(e, r, c);
                    case ">":
                        return s(e, r, c);
                    case ">=":
                        return o(e, r, c);
                    case "<":
                        return a(e, r, c);
                    case "<=":
                        return u(e, r, c);
                    default:
                        throw TypeError(`Invalid operator: ${t}`)
                }
            }
            ;
        e.exports = c
    },
    65054: function (e, t, r) {
        let n = r(30808)
            , i = r(99706)
            , { safeRe: s, t: o } = r(98416)
            , a = (e, t) => {
                if (e instanceof n)
                    return e;
                if ("number" == typeof e && (e = String(e)),
                    "string" != typeof e)
                    return null;
                let r = null;
                if ((t = t || {}).rtl) {
                    let t;
                    for (; (t = s[o.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)
                        r && t.index + t[0].length === r.index + r[0].length || (r = t),
                            s[o.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
                    s[o.COERCERTL].lastIndex = -1
                } else
                    r = e.match(s[o.COERCE]);
                return null === r ? null : i(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t)
            }
            ;
        e.exports = a
    },
    39457: function (e, t, r) {
        let n = r(30808)
            , i = (e, t, r) => {
                let i = new n(e, r)
                    , s = new n(t, r);
                return i.compare(s) || i.compareBuild(s)
            }
            ;
        e.exports = i
    },
    18992: function (e, t, r) {
        let n = r(66837)
            , i = (e, t) => n(e, t, !0);
        e.exports = i
    },
    66837: function (e, t, r) {
        let n = r(30808)
            , i = (e, t, r) => new n(e, r).compare(new n(t, r));
        e.exports = i
    },
    49603: function (e, t, r) {
        let n = r(99706)
            , i = (e, t) => {
                let r = n(e, null, !0)
                    , i = n(t, null, !0)
                    , s = r.compare(i);
                if (0 === s)
                    return null;
                let o = s > 0
                    , a = o ? r : i
                    , u = o ? i : r
                    , c = !!a.prerelease.length
                    , l = !!u.prerelease.length;
                if (l && !c)
                    return u.patch || u.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
                let h = c ? "pre" : "";
                return r.major !== i.major ? h + "major" : r.minor !== i.minor ? h + "minor" : r.patch !== i.patch ? h + "patch" : "prerelease"
            }
            ;
        e.exports = i
    },
    88951: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => 0 === n(e, t, r);
        e.exports = i
    },
    690: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => n(e, t, r) > 0;
        e.exports = i
    },
    26155: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => n(e, t, r) >= 0;
        e.exports = i
    },
    90624: function (e, t, r) {
        let n = r(30808)
            , i = (e, t, r, i, s) => {
                "string" == typeof r && (s = i,
                    i = r,
                    r = void 0);
                try {
                    return new n(e instanceof n ? e.version : e, r).inc(t, i, s).version
                } catch (e) {
                    return null
                }
            }
            ;
        e.exports = i
    },
    91675: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => 0 > n(e, t, r);
        e.exports = i
    },
    38800: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => 0 >= n(e, t, r);
        e.exports = i
    },
    4352: function (e, t, r) {
        let n = r(30808);
        e.exports = (e, t) => new n(e, t).major
    },
    71561: function (e, t, r) {
        let n = r(30808);
        e.exports = (e, t) => new n(e, t).minor
    },
    70003: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => 0 !== n(e, t, r);
        e.exports = i
    },
    99706: function (e, t, r) {
        let n = r(30808)
            , i = (e, t, r = !1) => {
                if (e instanceof n)
                    return e;
                try {
                    return new n(e, t)
                } catch (e) {
                    if (!r)
                        return null;
                    throw e
                }
            }
            ;
        e.exports = i
    },
    8660: function (e, t, r) {
        let n = r(30808);
        e.exports = (e, t) => new n(e, t).patch
    },
    77674: function (e, t, r) {
        let n = r(99706)
            , i = (e, t) => {
                let r = n(e, t);
                return r && r.prerelease.length ? r.prerelease : null
            }
            ;
        e.exports = i
    },
    43370: function (e, t, r) {
        let n = r(66837)
            , i = (e, t, r) => n(t, e, r);
        e.exports = i
    },
    96646: function (e, t, r) {
        let n = r(39457)
            , i = (e, t) => e.sort((e, r) => n(r, e, t));
        e.exports = i
    },
    17819: function (e, t, r) {
        let n = r(15579)
            , i = (e, t, r) => {
                try {
                    t = new n(t, r)
                } catch (e) {
                    return !1
                }
                return t.test(e)
            }
            ;
        e.exports = i
    },
    53124: function (e, t, r) {
        let n = r(39457)
            , i = (e, t) => e.sort((e, r) => n(e, r, t));
        e.exports = i
    },
    85557: function (e, t, r) {
        let n = r(99706)
            , i = (e, t) => {
                let r = n(e, t);
                return r ? r.version : null
            }
            ;
        e.exports = i
    },
    45393: function (e, t, r) {
        let n = r(98416)
            , i = r(41493)
            , s = r(30808)
            , o = r(29417)
            , a = r(99706)
            , u = r(85557)
            , c = r(97321)
            , l = r(90624)
            , h = r(49603)
            , d = r(4352)
            , f = r(71561)
            , p = r(8660)
            , g = r(77674)
            , m = r(66837)
            , y = r(43370)
            , b = r(18992)
            , v = r(39457)
            , _ = r(53124)
            , w = r(96646)
            , E = r(690)
            , S = r(91675)
            , M = r(88951)
            , x = r(70003)
            , C = r(26155)
            , k = r(38800)
            , I = r(12928)
            , R = r(65054)
            , N = r(67809)
            , A = r(15579)
            , O = r(17819)
            , L = r(40458)
            , T = r(76449)
            , j = r(21940)
            , P = r(20442)
            , D = r(77677)
            , B = r(39455)
            , F = r(17922)
            , $ = r(93670)
            , V = r(90451)
            , z = r(84501)
            , H = r(94854);
        e.exports = {
            parse: a,
            valid: u,
            clean: c,
            inc: l,
            diff: h,
            major: d,
            minor: f,
            patch: p,
            prerelease: g,
            compare: m,
            rcompare: y,
            compareLoose: b,
            compareBuild: v,
            sort: _,
            rsort: w,
            gt: E,
            lt: S,
            eq: M,
            neq: x,
            gte: C,
            lte: k,
            cmp: I,
            coerce: R,
            Comparator: N,
            Range: A,
            satisfies: O,
            toComparators: L,
            maxSatisfying: T,
            minSatisfying: j,
            minVersion: P,
            validRange: D,
            outside: B,
            gtr: F,
            ltr: $,
            intersects: V,
            simplifyRange: z,
            subset: H,
            SemVer: s,
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: i.RELEASE_TYPES,
            compareIdentifiers: o.compareIdentifiers,
            rcompareIdentifiers: o.rcompareIdentifiers
        }
    },
    41493: function (e) {
        let t = Number.MAX_SAFE_INTEGER || 9007199254740991;
        e.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_BUILD_LENGTH: 250,
            MAX_SAFE_INTEGER: t,
            RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
        }
    },
    12494: function (e, t, r) {
        var n = r(34155);
        let i = "object" == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => { }
            ;
        e.exports = i
    },
    29417: function (e) {
        let t = /^[0-9]+$/
            , r = (e, r) => {
                let n = t.test(e)
                    , i = t.test(r);
                return n && i && (e = +e,
                    r = +r),
                    e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1
            }
            , n = (e, t) => r(t, e);
        e.exports = {
            compareIdentifiers: r,
            rcompareIdentifiers: n
        }
    },
    33459: function (e) {
        let t = Object.freeze({
            loose: !0
        })
            , r = Object.freeze({})
            , n = e => e ? "object" != typeof e ? t : e : r;
        e.exports = n
    },
    98416: function (e, t, r) {
        let { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: s } = r(41493)
            , o = r(12494);
        t = e.exports = {};
        let a = t.re = []
            , u = t.safeRe = []
            , c = t.src = []
            , l = t.t = {}
            , h = 0
            , d = "[a-zA-Z0-9-]"
            , f = [["\\s", 1], ["\\d", s], [d, i]]
            , p = e => {
                for (let [t, r] of f)
                    e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                return e
            }
            , g = (e, t, r) => {
                let n = p(t)
                    , i = h++;
                o(e, i, t),
                    l[e] = i,
                    c[i] = t,
                    a[i] = RegExp(t, r ? "g" : void 0),
                    u[i] = RegExp(n, r ? "g" : void 0)
            }
            ;
        g("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
            g("NUMERICIDENTIFIERLOOSE", "\\d+"),
            g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`),
            g("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`),
            g("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`),
            g("PRERELEASEIDENTIFIER", `(?:${c[l.NUMERICIDENTIFIER]}|${c[l.NONNUMERICIDENTIFIER]})`),
            g("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NUMERICIDENTIFIERLOOSE]}|${c[l.NONNUMERICIDENTIFIER]})`),
            g("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`),
            g("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`),
            g("BUILDIDENTIFIER", `${d}+`),
            g("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`),
            g("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`),
            g("FULL", `^${c[l.FULLPLAIN]}$`),
            g("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`),
            g("LOOSE", `^${c[l.LOOSEPLAIN]}$`),
            g("GTLT", "((?:<|>)?=?)"),
            g("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
            g("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`),
            g("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`),
            g("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`),
            g("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`),
            g("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`),
            g("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),
            g("COERCERTL", c[l.COERCE], !0),
            g("LONETILDE", "(?:~>?)"),
            g("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0),
            t.tildeTrimReplace = "$1~",
            g("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`),
            g("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`),
            g("LONECARET", "(?:\\^)"),
            g("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0),
            t.caretTrimReplace = "$1^",
            g("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`),
            g("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`),
            g("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`),
            g("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`),
            g("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0),
            t.comparatorTrimReplace = "$1$2$3",
            g("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`),
            g("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`),
            g("STAR", "(<|>)?=?\\s*\\*"),
            g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
            g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
    },
    17922: function (e, t, r) {
        let n = r(39455)
            , i = (e, t, r) => n(e, t, ">", r);
        e.exports = i
    },
    90451: function (e, t, r) {
        let n = r(15579)
            , i = (e, t, r) => (e = new n(e, r),
                t = new n(t, r),
                e.intersects(t, r));
        e.exports = i
    },
    93670: function (e, t, r) {
        let n = r(39455)
            , i = (e, t, r) => n(e, t, "<", r);
        e.exports = i
    },
    76449: function (e, t, r) {
        let n = r(30808)
            , i = r(15579)
            , s = (e, t, r) => {
                let s = null
                    , o = null
                    , a = null;
                try {
                    a = new i(t, r)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    a.test(e) && (!s || -1 === o.compare(e)) && (s = e,
                        o = new n(s, r))
                }
                ),
                    s
            }
            ;
        e.exports = s
    },
    21940: function (e, t, r) {
        let n = r(30808)
            , i = r(15579)
            , s = (e, t, r) => {
                let s = null
                    , o = null
                    , a = null;
                try {
                    a = new i(t, r)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    a.test(e) && (!s || 1 === o.compare(e)) && (s = e,
                        o = new n(s, r))
                }
                ),
                    s
            }
            ;
        e.exports = s
    },
    20442: function (e, t, r) {
        let n = r(30808)
            , i = r(15579)
            , s = r(690)
            , o = (e, t) => {
                e = new i(e, t);
                let r = new n("0.0.0");
                if (e.test(r) || (r = new n("0.0.0-0"),
                    e.test(r)))
                    return r;
                r = null;
                for (let t = 0; t < e.set.length; ++t) {
                    let i = e.set[t]
                        , o = null;
                    i.forEach(e => {
                        let t = new n(e.semver.version);
                        switch (e.operator) {
                            case ">":
                                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                                    t.raw = t.format();
                            case "":
                            case ">=":
                                (!o || s(t, o)) && (o = t);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw Error(`Unexpected operation: ${e.operator}`)
                        }
                    }
                    ),
                        o && (!r || s(r, o)) && (r = o)
                }
                return r && e.test(r) ? r : null
            }
            ;
        e.exports = o
    },
    39455: function (e, t, r) {
        let n = r(30808)
            , i = r(67809)
            , { ANY: s } = i
            , o = r(15579)
            , a = r(17819)
            , u = r(690)
            , c = r(91675)
            , l = r(38800)
            , h = r(26155)
            , d = (e, t, r, d) => {
                let f, p, g, m, y;
                switch (e = new n(e, d),
                t = new o(t, d),
                r) {
                    case ">":
                        f = u,
                            p = l,
                            g = c,
                            m = ">",
                            y = ">=";
                        break;
                    case "<":
                        f = c,
                            p = h,
                            g = u,
                            m = "<",
                            y = "<=";
                        break;
                    default:
                        throw TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (a(e, t, d))
                    return !1;
                for (let r = 0; r < t.set.length; ++r) {
                    let n = t.set[r]
                        , o = null
                        , a = null;
                    if (n.forEach(e => {
                        e.semver === s && (e = new i(">=0.0.0")),
                            o = o || e,
                            a = a || e,
                            f(e.semver, o.semver, d) ? o = e : g(e.semver, a.semver, d) && (a = e)
                    }
                    ),
                        o.operator === m || o.operator === y || (!a.operator || a.operator === m) && p(e, a.semver) || a.operator === y && g(e, a.semver))
                        return !1
                }
                return !0
            }
            ;
        e.exports = d
    },
    84501: function (e, t, r) {
        let n = r(17819)
            , i = r(66837);
        e.exports = (e, t, r) => {
            let s = []
                , o = null
                , a = null
                , u = e.sort((e, t) => i(e, t, r));
            for (let e of u) {
                let i = n(e, t, r);
                i ? (a = e,
                    o || (o = e)) : (a && s.push([o, a]),
                        a = null,
                        o = null)
            }
            o && s.push([o, null]);
            let c = [];
            for (let [e, t] of s)
                e === t ? c.push(e) : t || e !== u[0] ? t ? e === u[0] ? c.push(`<=${t}`) : c.push(`${e} - ${t}`) : c.push(`>=${e}`) : c.push("*");
            let l = c.join(" || ")
                , h = "string" == typeof t.raw ? t.raw : String(t);
            return l.length < h.length ? l : t
        }
    },
    94854: function (e, t, r) {
        let n = r(15579)
            , i = r(67809)
            , { ANY: s } = i
            , o = r(17819)
            , a = r(66837)
            , u = (e, t, r = {}) => {
                if (e === t)
                    return !0;
                e = new n(e, r),
                    t = new n(t, r);
                let i = !1;
                e: for (let n of e.set) {
                    for (let e of t.set) {
                        let t = h(n, e, r);
                        if (i = i || null !== t,
                            t)
                            continue e
                    }
                    if (i)
                        return !1
                }
                return !0
            }
            , c = [new i(">=0.0.0-0")]
            , l = [new i(">=0.0.0")]
            , h = (e, t, r) => {
                let n, i, u, h, p, g, m;
                if (e === t)
                    return !0;
                if (1 === e.length && e[0].semver === s) {
                    if (1 === t.length && t[0].semver === s)
                        return !0;
                    e = r.includePrerelease ? c : l
                }
                if (1 === t.length && t[0].semver === s) {
                    if (r.includePrerelease)
                        return !0;
                    t = l
                }
                let y = new Set;
                for (let t of e)
                    ">" === t.operator || ">=" === t.operator ? n = d(n, t, r) : "<" === t.operator || "<=" === t.operator ? i = f(i, t, r) : y.add(t.semver);
                if (y.size > 1 || n && i && ((u = a(n.semver, i.semver, r)) > 0 || 0 === u && (">=" !== n.operator || "<=" !== i.operator)))
                    return null;
                for (let e of y) {
                    if (n && !o(e, String(n), r) || i && !o(e, String(i), r))
                        return null;
                    for (let n of t)
                        if (!o(e, String(n), r))
                            return !1;
                    return !0
                }
                let b = !!i && !r.includePrerelease && !!i.semver.prerelease.length && i.semver
                    , v = !!n && !r.includePrerelease && !!n.semver.prerelease.length && n.semver;
                for (let e of (b && 1 === b.prerelease.length && "<" === i.operator && 0 === b.prerelease[0] && (b = !1),
                    t)) {
                    if (m = m || ">" === e.operator || ">=" === e.operator,
                        g = g || "<" === e.operator || "<=" === e.operator,
                        n) {
                        if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1),
                            ">" === e.operator || ">=" === e.operator) {
                            if ((h = d(n, e, r)) === e && h !== n)
                                return !1
                        } else if (">=" === n.operator && !o(n.semver, String(e), r))
                            return !1
                    }
                    if (i) {
                        if (b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = !1),
                            "<" === e.operator || "<=" === e.operator) {
                            if ((p = f(i, e, r)) === e && p !== i)
                                return !1
                        } else if ("<=" === i.operator && !o(i.semver, String(e), r))
                            return !1
                    }
                    if (!e.operator && (i || n) && 0 !== u)
                        return !1
                }
                return (!n || !g || !!i || 0 === u) && (!i || !m || !!n || 0 === u) && !v && !b
            }
            , d = (e, t, r) => {
                if (!e)
                    return t;
                let n = a(e.semver, t.semver, r);
                return n > 0 ? e : n < 0 ? t : ">" === t.operator && ">=" === e.operator ? t : e
            }
            , f = (e, t, r) => {
                if (!e)
                    return t;
                let n = a(e.semver, t.semver, r);
                return n < 0 ? e : n > 0 ? t : "<" === t.operator && "<=" === e.operator ? t : e
            }
            ;
        e.exports = u
    },
    40458: function (e, t, r) {
        let n = r(15579)
            , i = (e, t) => new n(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "));
        e.exports = i
    },
    77677: function (e, t, r) {
        let n = r(15579)
            , i = (e, t) => {
                try {
                    return new n(e, t).range || "*"
                } catch (e) {
                    return null
                }
            }
            ;
        e.exports = i
    },
    29332: function (e) {
        "use strict";
        e.exports = function (e) {
            e.prototype[Symbol.iterator] = function* () {
                for (let e = this.head; e; e = e.next)
                    yield e.value
            }
        }
    },
    64403: function (e, t, r) {
        "use strict";
        function n(e) {
            var t = this;
            if (t instanceof n || (t = new n),
                t.tail = null,
                t.head = null,
                t.length = 0,
                e && "function" == typeof e.forEach)
                e.forEach(function (e) {
                    t.push(e)
                });
            else if (arguments.length > 0)
                for (var r = 0, i = arguments.length; r < i; r++)
                    t.push(arguments[r]);
            return t
        }
        function i(e, t, r, n) {
            if (!(this instanceof i))
                return new i(e, t, r, n);
            this.list = n,
                this.value = e,
                t ? (t.next = this,
                    this.prev = t) : this.prev = null,
                r ? (r.prev = this,
                    this.next = r) : this.next = null
        }
        e.exports = n,
            n.Node = i,
            n.create = n,
            n.prototype.removeNode = function (e) {
                if (e.list !== this)
                    throw Error("removing node which does not belong to this list");
                var t = e.next
                    , r = e.prev;
                return t && (t.prev = r),
                    r && (r.next = t),
                    e === this.head && (this.head = t),
                    e === this.tail && (this.tail = r),
                    e.list.length--,
                    e.next = null,
                    e.prev = null,
                    e.list = null,
                    t
            }
            ,
            n.prototype.unshiftNode = function (e) {
                if (e !== this.head) {
                    e.list && e.list.removeNode(e);
                    var t = this.head;
                    e.list = this,
                        e.next = t,
                        t && (t.prev = e),
                        this.head = e,
                        this.tail || (this.tail = e),
                        this.length++
                }
            }
            ,
            n.prototype.pushNode = function (e) {
                if (e !== this.tail) {
                    e.list && e.list.removeNode(e);
                    var t = this.tail;
                    e.list = this,
                        e.prev = t,
                        t && (t.next = e),
                        this.tail = e,
                        this.head || (this.head = e),
                        this.length++
                }
            }
            ,
            n.prototype.push = function () {
                for (var e, t, r = 0, n = arguments.length; r < n; r++)
                    e = this,
                        t = arguments[r],
                        e.tail = new i(t, e.tail, null, e),
                        e.head || (e.head = e.tail),
                        e.length++;
                return this.length
            }
            ,
            n.prototype.unshift = function () {
                for (var e, t, r = 0, n = arguments.length; r < n; r++)
                    e = this,
                        t = arguments[r],
                        e.head = new i(t, null, e.head, e),
                        e.tail || (e.tail = e.head),
                        e.length++;
                return this.length
            }
            ,
            n.prototype.pop = function () {
                if (this.tail) {
                    var e = this.tail.value;
                    return this.tail = this.tail.prev,
                        this.tail ? this.tail.next = null : this.head = null,
                        this.length--,
                        e
                }
            }
            ,
            n.prototype.shift = function () {
                if (this.head) {
                    var e = this.head.value;
                    return this.head = this.head.next,
                        this.head ? this.head.prev = null : this.tail = null,
                        this.length--,
                        e
                }
            }
            ,
            n.prototype.forEach = function (e, t) {
                t = t || this;
                for (var r = this.head, n = 0; null !== r; n++)
                    e.call(t, r.value, n, this),
                        r = r.next
            }
            ,
            n.prototype.forEachReverse = function (e, t) {
                t = t || this;
                for (var r = this.tail, n = this.length - 1; null !== r; n--)
                    e.call(t, r.value, n, this),
                        r = r.prev
            }
            ,
            n.prototype.get = function (e) {
                for (var t = 0, r = this.head; null !== r && t < e; t++)
                    r = r.next;
                if (t === e && null !== r)
                    return r.value
            }
            ,
            n.prototype.getReverse = function (e) {
                for (var t = 0, r = this.tail; null !== r && t < e; t++)
                    r = r.prev;
                if (t === e && null !== r)
                    return r.value
            }
            ,
            n.prototype.map = function (e, t) {
                t = t || this;
                for (var r = new n, i = this.head; null !== i;)
                    r.push(e.call(t, i.value, this)),
                        i = i.next;
                return r
            }
            ,
            n.prototype.mapReverse = function (e, t) {
                t = t || this;
                for (var r = new n, i = this.tail; null !== i;)
                    r.push(e.call(t, i.value, this)),
                        i = i.prev;
                return r
            }
            ,
            n.prototype.reduce = function (e, t) {
                var r, n = this.head;
                if (arguments.length > 1)
                    r = t;
                else if (this.head)
                    n = this.head.next,
                        r = this.head.value;
                else
                    throw TypeError("Reduce of empty list with no initial value");
                for (var i = 0; null !== n; i++)
                    r = e(r, n.value, i),
                        n = n.next;
                return r
            }
            ,
            n.prototype.reduceReverse = function (e, t) {
                var r, n = this.tail;
                if (arguments.length > 1)
                    r = t;
                else if (this.tail)
                    n = this.tail.prev,
                        r = this.tail.value;
                else
                    throw TypeError("Reduce of empty list with no initial value");
                for (var i = this.length - 1; null !== n; i--)
                    r = e(r, n.value, i),
                        n = n.prev;
                return r
            }
            ,
            n.prototype.toArray = function () {
                for (var e = Array(this.length), t = 0, r = this.head; null !== r; t++)
                    e[t] = r.value,
                        r = r.next;
                return e
            }
            ,
            n.prototype.toArrayReverse = function () {
                for (var e = Array(this.length), t = 0, r = this.tail; null !== r; t++)
                    e[t] = r.value,
                        r = r.prev;
                return e
            }
            ,
            n.prototype.slice = function (e, t) {
                (t = t || this.length) < 0 && (t += this.length),
                    (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0)
                    return r;
                e < 0 && (e = 0),
                    t > this.length && (t = this.length);
                for (var i = 0, s = this.head; null !== s && i < e; i++)
                    s = s.next;
                for (; null !== s && i < t; i++,
                    s = s.next)
                    r.push(s.value);
                return r
            }
            ,
            n.prototype.sliceReverse = function (e, t) {
                (t = t || this.length) < 0 && (t += this.length),
                    (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0)
                    return r;
                e < 0 && (e = 0),
                    t > this.length && (t = this.length);
                for (var i = this.length, s = this.tail; null !== s && i > t; i--)
                    s = s.prev;
                for (; null !== s && i > e; i--,
                    s = s.prev)
                    r.push(s.value);
                return r
            }
            ,
            n.prototype.splice = function (e, t, ...r) {
                e > this.length && (e = this.length - 1),
                    e < 0 && (e = this.length + e);
                for (var n = 0, s = this.head; null !== s && n < e; n++)
                    s = s.next;
                for (var o = [], n = 0; s && n < t; n++)
                    o.push(s.value),
                        s = this.removeNode(s);
                null === s && (s = this.tail),
                    s !== this.head && s !== this.tail && (s = s.prev);
                for (var n = 0; n < r.length; n++)
                    s = function (e, t, r) {
                        var n = t === e.head ? new i(r, null, t, e) : new i(r, t, t.next, e);
                        return null === n.next && (e.tail = n),
                            null === n.prev && (e.head = n),
                            e.length++,
                            n
                    }(this, s, r[n]);
                return o
            }
            ,
            n.prototype.reverse = function () {
                for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                    var n = r.prev;
                    r.prev = r.next,
                        r.next = n
                }
                return this.head = t,
                    this.tail = e,
                    this
            }
            ;
        try {
            r(29332)(n)
        } catch (e) { }
    },
    60386: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CoinbaseWalletSDK = void 0;
        let n = r(63235)
            , i = r(42539)
            , s = r(36878)
            , o = r(53220)
            , a = r(46183)
            , u = r(22853)
            , c = r(5748)
            , l = r(99583)
            , h = r(33675);
        class d {
            constructor(e) {
                var t, r, n;
                let o;
                this._appName = "",
                    this._appLogoUrl = null,
                    this._relay = null,
                    this._relayEventManager = null;
                let l = e.linkAPIUrl || i.LINK_API_URL;
                if (o = e.uiConstructor ? e.uiConstructor : e => new a.WalletSDKUI(e),
                    void 0 === e.overrideIsMetaMask ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask,
                    this._overrideIsCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t,
                    this._overrideIsCoinbaseBrowser = null !== (r = e.overrideIsCoinbaseBrowser) && void 0 !== r && r,
                    e.diagnosticLogger && e.eventListener)
                    throw Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
                e.eventListener ? this._diagnosticLogger = {
                    log: e.eventListener.onEvent
                } : this._diagnosticLogger = e.diagnosticLogger,
                    this._reloadOnDisconnect = null === (n = e.reloadOnDisconnect) || void 0 === n || n;
                let f = new URL(l)
                    , p = `${f.protocol}//${f.host}`;
                if (this._storage = new s.ScopedLocalStorage(`-walletlink:${p}`),
                    this._storage.setItem("version", d.VERSION),
                    this.walletExtension || this.coinbaseBrowser || (this._relayEventManager = new c.WalletSDKRelayEventManager,
                        this._relay = new u.WalletSDKRelay({
                            linkAPIUrl: l,
                            version: h.LIB_VERSION,
                            darkMode: !!e.darkMode,
                            uiConstructor: o,
                            storage: this._storage,
                            relayEventManager: this._relayEventManager,
                            diagnosticLogger: this._diagnosticLogger,
                            reloadOnDisconnect: this._reloadOnDisconnect
                        }),
                        this.setAppInfo(e.appName, e.appLogoUrl),
                        e.headlessMode))
                    return;
                this._relay.attachUI()
            }
            makeWeb3Provider(e = "", t = 1) {
                let r = this.walletExtension;
                if (r)
                    return this.isCipherProvider(r) || r.setProviderInfo(e, t),
                        !1 === this._reloadOnDisconnect && "function" == typeof r.disableReloadOnDisconnect && r.disableReloadOnDisconnect(),
                        r;
                let n = this.coinbaseBrowser;
                if (n)
                    return n;
                let i = this._relay;
                if (!i || !this._relayEventManager || !this._storage)
                    throw Error("Relay not initialized, should never happen");
                return e || i.setConnectDisabled(!0),
                    new o.CoinbaseWalletProvider({
                        relayProvider: () => Promise.resolve(i),
                        relayEventManager: this._relayEventManager,
                        storage: this._storage,
                        jsonRpcUrl: e,
                        chainId: t,
                        qrUrl: this.getQrUrl(),
                        diagnosticLogger: this._diagnosticLogger,
                        overrideIsMetaMask: this._overrideIsMetaMask,
                        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
                    })
            }
            setAppInfo(e, t) {
                var r;
                this._appName = e || "DApp",
                    this._appLogoUrl = t || (0,
                        l.getFavicon)();
                let n = this.walletExtension;
                n ? this.isCipherProvider(n) || n.setAppInfo(this._appName, this._appLogoUrl) : null === (r = this._relay) || void 0 === r || r.setAppInfo(this._appName, this._appLogoUrl)
            }
            disconnect() {
                var e;
                let t = this.walletExtension;
                t ? t.close() : null === (e = this._relay) || void 0 === e || e.resetAndReload()
            }
            getQrUrl() {
                var e, t;
                return null !== (t = null === (e = this._relay) || void 0 === e ? void 0 : e.getQRCodeUrl()) && void 0 !== t ? t : null
            }
            getCoinbaseWalletLogo(e, t = 240) {
                return (0,
                    n.walletLogo)(e, t)
            }
            get walletExtension() {
                var e;
                return null !== (e = window.coinbaseWalletExtension) && void 0 !== e ? e : window.walletLinkExtension
            }
            get coinbaseBrowser() {
                var e, t;
                try {
                    let r = null !== (e = window.ethereum) && void 0 !== e ? e : null === (t = window.top) || void 0 === t ? void 0 : t.ethereum;
                    if (!r)
                        return;
                    if ("isCoinbaseBrowser" in r && r.isCoinbaseBrowser)
                        return r;
                    return
                } catch (e) {
                    return
                }
            }
            isCipherProvider(e) {
                return "boolean" == typeof e.isCipher && e.isCipher
            }
        }
        t.CoinbaseWalletSDK = d,
            d.VERSION = h.LIB_VERSION
    },
    63235: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.walletLogo = void 0;
        let r = (e, t) => {
            switch (e) {
                case "standard":
                default:
                    return `data:image/svg+xml,%3Csvg width='${t}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
                case "circle":
                    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${t}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
                case "text":
                    return `data:image/svg+xml,%3Csvg width='${t}' height='${(.1 * t).toFixed(2)}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                case "textWithLogo":
                    return `data:image/svg+xml,%3Csvg width='${t}' height='${(.25 * t).toFixed(2)}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
                case "textLight":
                    return `data:image/svg+xml,%3Csvg width='${t}' height='${(.1 * t).toFixed(2)}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                case "textWithLogoLight":
                    return `data:image/svg+xml,%3Csvg width='${t}' height='${(.25 * t).toFixed(2)}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
            }
        }
            ;
        t.walletLogo = r
    },
    52572: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"
    },
    83025: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CoinbaseAppSteps = t.CoinbaseWalletSteps = t.ConnectItem = t.ConnectContent = void 0;
        let i = n(r(86010))
            , s = r(6400)
            , o = r(30396)
            , a = r(99583)
            , u = r(33675)
            , c = r(75745)
            , l = n(r(84768))
            , h = n(r(44043))
            , d = r(26925)
            , f = n(r(86596))
            , p = n(r(48005))
            , g = r(63222)
            , m = r(93354)
            , y = r(75047)
            , b = n(r(52572))
            , v = {
                "coinbase-wallet-app": {
                    title: "Coinbase Wallet app",
                    description: "Connect with your self-custody wallet",
                    icon: h.default,
                    steps: S
                },
                "coinbase-app": {
                    title: "Coinbase app",
                    description: "Connect with your Coinbase account",
                    icon: l.default,
                    steps: M
                }
            }
            , _ = e => "coinbase-app" === e ? f.default : p.default
            , w = e => "light" === e ? "#FFFFFF" : "#0A0B0D";
        function E({ title: e, description: t, icon: r, selected: n, theme: o, onClick: a }) {
            return (0,
                s.h)("div", {
                    onClick: a,
                    class: (0,
                        i.default)("-cbwsdk-connect-item", o, {
                            selected: n
                        })
                }, (0,
                    s.h)("div", null, (0,
                        s.h)("img", {
                            src: r,
                            alt: e
                        })), (0,
                            s.h)("div", {
                                class: "-cbwsdk-connect-item-copy-wrapper"
                            }, (0,
                                s.h)("h3", {
                                    class: "-cbwsdk-connect-item-title"
                                }, e), (0,
                                    s.h)("p", {
                                        class: "-cbwsdk-connect-item-description"
                                    }, t)))
        }
        function S({ theme: e }) {
            return (0,
                s.h)("ol", {
                    class: "-cbwsdk-wallet-steps"
                }, (0,
                    s.h)("li", {
                        class: (0,
                            i.default)("-cbwsdk-wallet-steps-item", e)
                    }, (0,
                        s.h)("div", {
                            class: "-cbwsdk-wallet-steps-item-wrapper"
                        }, "Open Coinbase Wallet app")), (0,
                            s.h)("li", {
                                class: (0,
                                    i.default)("-cbwsdk-wallet-steps-item", e)
                            }, (0,
                                s.h)("div", {
                                    class: "-cbwsdk-wallet-steps-item-wrapper"
                                }, (0,
                                    s.h)("span", null, "Tap ", (0,
                                        s.h)("strong", null, "Scan"), " "), (0,
                                            s.h)("span", {
                                                class: (0,
                                                    i.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
                                            }, (0,
                                                s.h)(d.QRCodeIcon, {
                                                    fill: w(e)
                                                })))))
        }
        function M({ theme: e }) {
            return (0,
                s.h)("ol", {
                    class: "-cbwsdk-wallet-steps"
                }, (0,
                    s.h)("li", {
                        class: (0,
                            i.default)("-cbwsdk-wallet-steps-item", e)
                    }, (0,
                        s.h)("div", {
                            class: "-cbwsdk-wallet-steps-item-wrapper"
                        }, "Open Coinbase app")), (0,
                            s.h)("li", {
                                class: (0,
                                    i.default)("-cbwsdk-wallet-steps-item", e)
                            }, (0,
                                s.h)("div", {
                                    class: "-cbwsdk-wallet-steps-item-wrapper"
                                }, (0,
                                    s.h)("span", null, "Tap ", (0,
                                        s.h)("strong", null, "More")), (0,
                                            s.h)("span", {
                                                class: (0,
                                                    i.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
                                            }, (0,
                                                s.h)(g.StatusDotIcon, {
                                                    fill: w(e)
                                                })), (0,
                                                    s.h)("span", {
                                                        class: "-cbwsdk-wallet-steps-pad-left"
                                                    }, "then ", (0,
                                                        s.h)("strong", null, "Scan")), (0,
                                                            s.h)("span", {
                                                                class: (0,
                                                                    i.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
                                                            }, (0,
                                                                s.h)(d.QRCodeIcon, {
                                                                    fill: w(e)
                                                                })))))
        }
        t.ConnectContent = function (e) {
            let { theme: t } = e
                , [r, n] = (0,
                    o.useState)("coinbase-wallet-app")
                , l = (0,
                    o.useCallback)(e => {
                        n(e)
                    }
                        , [])
                , h = (0,
                    a.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId)
                , d = v[r];
            if (!r)
                return null;
            let f = d.steps;
            return (0,
                s.h)("div", {
                    "data-testid": "connect-content",
                    class: (0,
                        i.default)("-cbwsdk-connect-content", t)
                }, (0,
                    s.h)("style", null, b.default), (0,
                        s.h)("div", {
                            class: "-cbwsdk-connect-content-header"
                        }, (0,
                            s.h)("h2", {
                                class: (0,
                                    i.default)("-cbwsdk-connect-content-heading", t)
                            }, "Scan to connect with one of our mobile apps"), e.onCancel && (0,
                                s.h)("button", {
                                    type: "button",
                                    class: "-cbwsdk-cancel-button",
                                    onClick: e.onCancel
                                }, (0,
                                    s.h)(c.CloseIcon, {
                                        fill: "light" === t ? "#0A0B0D" : "#FFFFFF"
                                    }))), (0,
                                        s.h)("div", {
                                            class: "-cbwsdk-connect-content-layout"
                                        }, (0,
                                            s.h)("div", {
                                                class: "-cbwsdk-connect-content-column-left"
                                            }, (0,
                                                s.h)("div", null, Object.entries(v).map(([e, n]) => (0,
                                                    s.h)(E, {
                                                        key: e,
                                                        title: n.title,
                                                        description: n.description,
                                                        icon: n.icon,
                                                        selected: r === e,
                                                        onClick: () => l(e),
                                                        theme: t
                                                    }))), "coinbase-app" === r && (0,
                                                        s.h)("div", {
                                                            class: (0,
                                                                i.default)("-cbwsdk-connect-content-update-app", t)
                                                        }, "Don’t see a ", (0,
                                                            s.h)("strong", null, "Scan"), " option? Update your Coinbase app to the latest version and try again.")), (0,
                                                                s.h)("div", {
                                                                    class: "-cbwsdk-connect-content-column-right"
                                                                }, (0,
                                                                    s.h)("div", {
                                                                        class: "-cbwsdk-connect-content-qr-wrapper"
                                                                    }, (0,
                                                                        s.h)(m.QRCode, {
                                                                            content: h,
                                                                            width: 200,
                                                                            height: 200,
                                                                            fgColor: "#000",
                                                                            bgColor: "transparent",
                                                                            image: {
                                                                                svg: _(r),
                                                                                width: 25,
                                                                                height: 25
                                                                            }
                                                                        }), (0,
                                                                            s.h)("input", {
                                                                                type: "hidden",
                                                                                name: "cbw-cbwsdk-version",
                                                                                value: u.LIB_VERSION
                                                                            }), (0,
                                                                                s.h)("input", {
                                                                                    type: "hidden",
                                                                                    value: h
                                                                                })), (0,
                                                                                    s.h)(f, {
                                                                                        theme: t
                                                                                    }), !e.isConnected && (0,
                                                                                        s.h)("div", {
                                                                                            "data-testid": "connecting-spinner",
                                                                                            class: (0,
                                                                                                i.default)("-cbwsdk-connect-content-qr-connecting", t)
                                                                                        }, (0,
                                                                                            s.h)(y.Spinner, {
                                                                                                size: 36,
                                                                                                color: "dark" === t ? "#FFF" : "#000"
                                                                                            }), (0,
                                                                                                s.h)("p", null, "Connecting...")))))
        }
            ,
            t.ConnectItem = E,
            t.CoinbaseWalletSteps = S,
            t.CoinbaseAppSteps = M
    },
    2693: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"
    },
    19301: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ConnectDialog = void 0;
        let i = n(r(86010))
            , s = r(6400)
            , o = r(30396)
            , a = r(83025)
            , u = r(56047)
            , c = n(r(2693))
            , l = e => {
                let { isOpen: t, darkMode: r } = e
                    , [n, l] = (0,
                        o.useState)(!t)
                    , [h, d] = (0,
                        o.useState)(!t);
                (0,
                    o.useEffect)(() => {
                        let e = [window.setTimeout(() => {
                            d(!t)
                        }
                            , 10)];
                        return t ? l(!1) : e.push(window.setTimeout(() => {
                            l(!0)
                        }
                            , 360)),
                            () => {
                                e.forEach(window.clearTimeout)
                            }
                    }
                        , [e.isOpen]);
                let f = r ? "dark" : "light";
                return (0,
                    s.h)("div", {
                        class: (0,
                            i.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
                    }, (0,
                        s.h)("style", null, c.default), (0,
                            s.h)("div", {
                                class: (0,
                                    i.default)("-cbwsdk-connect-dialog-backdrop", f, h && "-cbwsdk-connect-dialog-backdrop-hidden")
                            }), (0,
                                s.h)("div", {
                                    class: "-cbwsdk-connect-dialog"
                                }, (0,
                                    s.h)("div", {
                                        class: (0,
                                            i.default)("-cbwsdk-connect-dialog-box", h && "-cbwsdk-connect-dialog-box-hidden")
                                    }, e.connectDisabled ? null : (0,
                                        s.h)(a.ConnectContent, {
                                            theme: f,
                                            version: e.version,
                                            sessionId: e.sessionId,
                                            sessionSecret: e.sessionSecret,
                                            linkAPIUrl: e.linkAPIUrl,
                                            isConnected: e.isConnected,
                                            isParentConnection: e.isParentConnection,
                                            chainId: e.chainId,
                                            onCancel: e.onCancel
                                        }), (0,
                                            s.h)(u.TryExtensionContent, {
                                                theme: f
                                            }))))
            }
            ;
        t.ConnectDialog = l
    },
    74071: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LinkFlow = void 0;
        let n = r(6400)
            , i = r(46949)
            , s = r(19301);
        t.LinkFlow = class {
            constructor(e) {
                this.extensionUI$ = new i.BehaviorSubject({}),
                    this.subscriptions = new i.Subscription,
                    this.isConnected = !1,
                    this.chainId = 1,
                    this.isOpen = !1,
                    this.onCancel = null,
                    this.root = null,
                    this.connectDisabled = !1,
                    this.darkMode = e.darkMode,
                    this.version = e.version,
                    this.sessionId = e.sessionId,
                    this.sessionSecret = e.sessionSecret,
                    this.linkAPIUrl = e.linkAPIUrl,
                    this.isParentConnection = e.isParentConnection,
                    this.connected$ = e.connected$,
                    this.chainId$ = e.chainId$
            }
            attach(e) {
                this.root = document.createElement("div"),
                    this.root.className = "-cbwsdk-link-flow-root",
                    e.appendChild(this.root),
                    this.render(),
                    this.subscriptions.add(this.connected$.subscribe(e => {
                        this.isConnected !== e && (this.isConnected = e,
                            this.render())
                    }
                    )),
                    this.subscriptions.add(this.chainId$.subscribe(e => {
                        this.chainId !== e && (this.chainId = e,
                            this.render())
                    }
                    ))
            }
            detach() {
                var e;
                this.root && (this.subscriptions.unsubscribe(),
                    (0,
                        n.render)(null, this.root),
                    null === (e = this.root.parentElement) || void 0 === e || e.removeChild(this.root))
            }
            setConnectDisabled(e) {
                this.connectDisabled = e
            }
            open(e) {
                this.isOpen = !0,
                    this.onCancel = e.onCancel,
                    this.render()
            }
            close() {
                this.isOpen = !1,
                    this.onCancel = null,
                    this.render()
            }
            render() {
                if (!this.root)
                    return;
                let e = this.extensionUI$.subscribe(() => {
                    this.root && (0,
                        n.render)((0,
                            n.h)(s.ConnectDialog, {
                                darkMode: this.darkMode,
                                version: this.version,
                                sessionId: this.sessionId,
                                sessionSecret: this.sessionSecret,
                                linkAPIUrl: this.linkAPIUrl,
                                isOpen: this.isOpen,
                                isConnected: this.isConnected,
                                isParentConnection: this.isParentConnection,
                                chainId: this.chainId,
                                onCancel: this.onCancel,
                                connectDisabled: this.connectDisabled
                            }), this.root)
                }
                );
                this.subscriptions.add(e)
            }
        }
    },
    93354: function (e, t, r) {
        "use strict";
        var n = r(48764).Buffer
            , i = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.QRCode = void 0;
        let s = r(6400)
            , o = r(30396)
            , a = i(r(21629))
            , u = e => {
                let [t, r] = (0,
                    o.useState)("");
                return (0,
                    o.useEffect)(() => {
                        var t, i;
                        let s = new a.default({
                            content: e.content,
                            background: e.bgColor || "#ffffff",
                            color: e.fgColor || "#000000",
                            container: "svg",
                            ecl: "M",
                            width: null !== (t = e.width) && void 0 !== t ? t : 256,
                            height: null !== (i = e.height) && void 0 !== i ? i : 256,
                            padding: 0,
                            image: e.image
                        })
                            , o = n.from(s.svg(), "utf8").toString("base64");
                        r(`data:image/svg+xml;base64,${o}`)
                    }
                    ),
                    t ? (0,
                        s.h)("img", {
                            src: t,
                            alt: "QR Code"
                        }) : null
            }
            ;
        t.QRCode = u
    },
    60685: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
    },
    85626: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
        let i = n(r(86010))
            , s = r(6400)
            , o = r(30396)
            , a = n(r(60685));
        t.Snackbar = class {
            constructor(e) {
                this.items = new Map,
                    this.nextItemKey = 0,
                    this.root = null,
                    this.darkMode = e.darkMode
            }
            attach(e) {
                this.root = document.createElement("div"),
                    this.root.className = "-cbwsdk-snackbar-root",
                    e.appendChild(this.root),
                    this.render()
            }
            presentItem(e) {
                let t = this.nextItemKey++;
                return this.items.set(t, e),
                    this.render(),
                    () => {
                        this.items.delete(t),
                            this.render()
                    }
            }
            clear() {
                this.items.clear(),
                    this.render()
            }
            render() {
                this.root && (0,
                    s.render)((0,
                        s.h)("div", null, (0,
                            s.h)(t.SnackbarContainer, {
                                darkMode: this.darkMode
                            }, Array.from(this.items.entries()).map(([e, r]) => (0,
                                s.h)(t.SnackbarInstance, Object.assign({}, r, {
                                    key: e
                                }))))), this.root)
            }
        }
            ;
        let u = e => (0,
            s.h)("div", {
                class: (0,
                    i.default)("-cbwsdk-snackbar-container")
            }, (0,
                s.h)("style", null, a.default), (0,
                    s.h)("div", {
                        class: "-cbwsdk-snackbar"
                    }, e.children));
        t.SnackbarContainer = u;
        let c = ({ autoExpand: e, message: t, menuItems: r, appSrc: n }) => {
            let [a, u] = (0,
                o.useState)(!0)
                , [c, l] = (0,
                    o.useState)(null != e && e);
            (0,
                o.useEffect)(() => {
                    let e = [window.setTimeout(() => {
                        u(!1)
                    }
                        , 1), window.setTimeout(() => {
                            l(!0)
                        }
                            , 1e4)];
                    return () => {
                        e.forEach(window.clearTimeout)
                    }
                }
                );
            let h = () => {
                l(!c)
            }
                ;
            return (0,
                s.h)("div", {
                    class: (0,
                        i.default)("-cbwsdk-snackbar-instance", a && "-cbwsdk-snackbar-instance-hidden", c && "-cbwsdk-snackbar-instance-expanded")
                }, (0,
                    s.h)("div", {
                        class: "-cbwsdk-snackbar-instance-header",
                        onClick: h
                    }, (0,
                        s.h)("img", {
                            src: "coinbase-app" === n ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                            class: "-cbwsdk-snackbar-instance-header-cblogo"
                        }), (0,
                            s.h)("div", {
                                class: "-cbwsdk-snackbar-instance-header-message"
                            }, t), (0,
                                s.h)("div", {
                                    class: "-gear-container"
                                }, !c && (0,
                                    s.h)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }, (0,
                                        s.h)("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "12",
                                            fill: "#F5F7F8"
                                        })), (0,
                                            s.h)("img", {
                                                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                                                class: "-gear-icon",
                                                title: "Expand"
                                            }))), r && r.length > 0 && (0,
                                                s.h)("div", {
                                                    class: "-cbwsdk-snackbar-instance-menu"
                                                }, r.map((e, t) => (0,
                                                    s.h)("div", {
                                                        class: (0,
                                                            i.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                                                        onClick: e.onClick,
                                                        key: t
                                                    }, (0,
                                                        s.h)("svg", {
                                                            width: e.svgWidth,
                                                            height: e.svgHeight,
                                                            viewBox: "0 0 10 11",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg"
                                                        }, (0,
                                                            s.h)("path", {
                                                                "fill-rule": e.defaultFillRule,
                                                                "clip-rule": e.defaultClipRule,
                                                                d: e.path,
                                                                fill: "#AAAAAA"
                                                            })), (0,
                                                                s.h)("span", {
                                                                    class: (0,
                                                                        i.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                                                                }, e.info)))))
        }
            ;
        t.SnackbarInstance = c
    },
    11859: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
    },
    75047: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.Spinner = void 0;
        let i = r(6400)
            , s = n(r(11859))
            , o = e => {
                var t;
                let r = null !== (t = e.size) && void 0 !== t ? t : 64
                    , n = e.color || "#000";
                return (0,
                    i.h)("div", {
                        class: "-cbwsdk-spinner"
                    }, (0,
                        i.h)("style", null, s.default), (0,
                            i.h)("svg", {
                                viewBox: "0 0 100 100",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    width: r,
                                    height: r
                                }
                            }, (0,
                                i.h)("circle", {
                                    style: {
                                        cx: 50,
                                        cy: 50,
                                        r: 45,
                                        stroke: n
                                    }
                                })))
            }
            ;
        t.Spinner = o
    },
    35044: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"
    },
    56047: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.TryExtensionContent = void 0;
        let i = n(r(86010))
            , s = r(6400)
            , o = r(30396)
            , a = r(33245)
            , u = r(57594)
            , c = r(72371)
            , l = n(r(35044));
        t.TryExtensionContent = function ({ theme: e }) {
            let [t, r] = (0,
                o.useState)(!1)
                , n = (0,
                    o.useCallback)(() => {
                        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
                    }
                        , [])
                , h = (0,
                    o.useCallback)(() => {
                        t ? window.location.reload() : (n(),
                            r(!0))
                    }
                        , [n, t]);
            return (0,
                s.h)("div", {
                    class: (0,
                        i.default)("-cbwsdk-try-extension", e)
                }, (0,
                    s.h)("style", null, l.default), (0,
                        s.h)("div", {
                            class: "-cbwsdk-try-extension-column-half"
                        }, (0,
                            s.h)("h3", {
                                class: (0,
                                    i.default)("-cbwsdk-try-extension-heading", e)
                            }, "Or try the Coinbase Wallet browser extension"), (0,
                                s.h)("div", {
                                    class: "-cbwsdk-try-extension-cta-wrapper"
                                }, (0,
                                    s.h)("button", {
                                        class: (0,
                                            i.default)("-cbwsdk-try-extension-cta", e),
                                        onClick: h
                                    }, t ? "Refresh" : "Install"), (0,
                                        s.h)("div", null, !t && (0,
                                            s.h)(a.ArrowLeftIcon, {
                                                class: "-cbwsdk-try-extension-cta-icon",
                                                fill: "light" === e ? "#0052FF" : "#588AF5"
                                            })))), (0,
                                                s.h)("div", {
                                                    class: "-cbwsdk-try-extension-column-half"
                                                }, (0,
                                                    s.h)("ul", {
                                                        class: "-cbwsdk-try-extension-list"
                                                    }, (0,
                                                        s.h)("li", {
                                                            class: "-cbwsdk-try-extension-list-item"
                                                        }, (0,
                                                            s.h)("div", {
                                                                class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                                                            }, (0,
                                                                s.h)("span", {
                                                                    class: (0,
                                                                        i.default)("-cbwsdk-try-extension-list-item-icon", e)
                                                                }, (0,
                                                                    s.h)(u.LaptopIcon, {
                                                                        fill: "light" === e ? "#0A0B0D" : "#FFFFFF"
                                                                    }))), (0,
                                                                        s.h)("div", {
                                                                            class: (0,
                                                                                i.default)("-cbwsdk-try-extension-list-item-copy", e)
                                                                        }, "Connect with dapps with just one click on your desktop browser")), (0,
                                                                            s.h)("li", {
                                                                                class: "-cbwsdk-try-extension-list-item"
                                                                            }, (0,
                                                                                s.h)("div", {
                                                                                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                                                                                }, (0,
                                                                                    s.h)("span", {
                                                                                        class: (0,
                                                                                            i.default)("-cbwsdk-try-extension-list-item-icon", e)
                                                                                    }, (0,
                                                                                        s.h)(c.SafeIcon, {
                                                                                            fill: "light" === e ? "#0A0B0D" : "#FFFFFF"
                                                                                        }))), (0,
                                                                                            s.h)("div", {
                                                                                                class: (0,
                                                                                                    i.default)("-cbwsdk-try-extension-list-item-copy", e)
                                                                                            }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
        }
    },
    33245: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ArrowLeftIcon = void 0;
        let n = r(6400);
        t.ArrowLeftIcon = function (e) {
            return (0,
                n.h)("svg", Object.assign({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0,
                    n.h)("path", {
                        d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
                    }))
        }
    },
    75745: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CloseIcon = void 0;
        let n = r(6400);
        t.CloseIcon = function (e) {
            return (0,
                n.h)("svg", Object.assign({
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0,
                    n.h)("path", {
                        d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
                    }))
        }
    },
    57594: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LaptopIcon = void 0;
        let n = r(6400);
        t.LaptopIcon = function (e) {
            return (0,
                n.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0,
                    n.h)("path", {
                        d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
                    }), (0,
                        n.h)("path", {
                            d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
                        }))
        }
    },
    26925: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.QRCodeIcon = void 0;
        let n = r(6400);
        t.QRCodeIcon = function (e) {
            return (0,
                n.h)("svg", Object.assign({
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0,
                    n.h)("path", {
                        d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z"
                    }), (0,
                        n.h)("path", {
                            d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z"
                        }), (0,
                            n.h)("path", {
                                d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z"
                            }), (0,
                                n.h)("path", {
                                    d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z"
                                }), (0,
                                    n.h)("path", {
                                        d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z"
                                    }), (0,
                                        n.h)("path", {
                                            d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z"
                                        }), (0,
                                            n.h)("path", {
                                                d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z"
                                            }), (0,
                                                n.h)("path", {
                                                    d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z"
                                                }), (0,
                                                    n.h)("path", {
                                                        d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z"
                                                    }))
        }
    },
    86596: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let r = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
        t.default = r
    },
    48005: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`
    },
    72371: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.SafeIcon = void 0;
        let n = r(6400);
        t.SafeIcon = function (e) {
            return (0,
                n.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0,
                    n.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
                    }))
        }
    },
    63222: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.StatusDotIcon = void 0;
        let n = r(6400);
        t.StatusDotIcon = function (e) {
            return (0,
                n.h)("svg", Object.assign({
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0,
                    n.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z"
                    }))
        }
    },
    84768: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
    },
    44043: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg=="
    },
    98749: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ClientMessagePublishEvent = t.ClientMessageSetSessionConfig = t.ClientMessageGetSessionConfig = t.ClientMessageIsLinked = t.ClientMessageHostSession = void 0,
            t.ClientMessageHostSession = function (e) {
                return Object.assign({
                    type: "HostSession"
                }, e)
            }
            ,
            t.ClientMessageIsLinked = function (e) {
                return Object.assign({
                    type: "IsLinked"
                }, e)
            }
            ,
            t.ClientMessageGetSessionConfig = function (e) {
                return Object.assign({
                    type: "GetSessionConfig"
                }, e)
            }
            ,
            t.ClientMessageSetSessionConfig = function (e) {
                return Object.assign({
                    type: "SetSessionConfig"
                }, e)
            }
            ,
            t.ClientMessagePublishEvent = function (e) {
                return Object.assign({
                    type: "PublishEvent"
                }, e)
            }
    },
    27301: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.EVENTS = void 0,
            t.EVENTS = {
                STARTED_CONNECTING: "walletlink_sdk.started.connecting",
                CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
                DISCONNECTED: "walletlink_sdk.disconnected",
                METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
                LINKED: "walletlink_sdk.linked",
                FAILURE: "walletlink_sdk.generic_failure",
                SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
                ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
                SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
                UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
                SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
                GENERAL_ERROR: "walletlink_sdk.general_error",
                WEB3_REQUEST: "walletlink_sdk.web3.request",
                WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
                WEB3_RESPONSE: "walletlink_sdk.web3.response",
                UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
            }
    },
    93545: function (e, t, r) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.RxWebSocket = t.ConnectionState = void 0;
        let s = r(46949)
            , o = r(16473);
        (i = n = t.ConnectionState || (t.ConnectionState = {}))[i.DISCONNECTED = 0] = "DISCONNECTED",
            i[i.CONNECTING = 1] = "CONNECTING",
            i[i.CONNECTED = 2] = "CONNECTED",
            t.RxWebSocket = class {
                constructor(e, t = WebSocket) {
                    this.WebSocketClass = t,
                        this.webSocket = null,
                        this.connectionStateSubject = new s.BehaviorSubject(n.DISCONNECTED),
                        this.incomingDataSubject = new s.Subject,
                        this.url = e.replace(/^http/, "ws")
                }
                connect() {
                    return this.webSocket ? (0,
                        s.throwError)(Error("webSocket object is not null")) : new s.Observable(e => {
                            let t;
                            try {
                                this.webSocket = t = new this.WebSocketClass(this.url)
                            } catch (t) {
                                e.error(t);
                                return
                            }
                            this.connectionStateSubject.next(n.CONNECTING),
                                t.onclose = t => {
                                    this.clearWebSocket(),
                                        e.error(Error(`websocket error ${t.code}: ${t.reason}`)),
                                        this.connectionStateSubject.next(n.DISCONNECTED)
                                }
                                ,
                                t.onopen = t => {
                                    e.next(),
                                        e.complete(),
                                        this.connectionStateSubject.next(n.CONNECTED)
                                }
                                ,
                                t.onmessage = e => {
                                    this.incomingDataSubject.next(e.data)
                                }
                        }
                        ).pipe((0,
                            o.take)(1))
                }
                disconnect() {
                    let { webSocket: e } = this;
                    if (e) {
                        this.clearWebSocket(),
                            this.connectionStateSubject.next(n.DISCONNECTED);
                        try {
                            e.close()
                        } catch (e) { }
                    }
                }
                get connectionState$() {
                    return this.connectionStateSubject.asObservable()
                }
                get incomingData$() {
                    return this.incomingDataSubject.asObservable()
                }
                get incomingJSONData$() {
                    return this.incomingData$.pipe((0,
                        o.flatMap)(e => {
                            let t;
                            try {
                                t = JSON.parse(e)
                            } catch (e) {
                                return (0,
                                    s.empty)()
                            }
                            return (0,
                                s.of)(t)
                        }
                        ))
                }
                sendData(e) {
                    let { webSocket: t } = this;
                    if (!t)
                        throw Error("websocket is not connected");
                    t.send(e)
                }
                clearWebSocket() {
                    let { webSocket: e } = this;
                    e && (this.webSocket = null,
                        e.onclose = null,
                        e.onerror = null,
                        e.onmessage = null,
                        e.onopen = null)
                }
            }
    },
    19176: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isServerMessageFail = void 0,
            t.isServerMessageFail = function (e) {
                return e && "Fail" === e.type && "number" == typeof e.id && "string" == typeof e.sessionId && "string" == typeof e.error
            }
    },
    98145: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.WalletSDKConnection = void 0;
        let n = r(46949)
            , i = r(16473)
            , s = r(37758)
            , o = r(18448)
            , a = r(98749)
            , u = r(27301)
            , c = r(93545)
            , l = r(19176);
        t.WalletSDKConnection = class {
            constructor(e, t, r, a, l = WebSocket) {
                this.sessionId = e,
                    this.sessionKey = t,
                    this.diagnostic = a,
                    this.subscriptions = new n.Subscription,
                    this.destroyed = !1,
                    this.lastHeartbeatResponse = 0,
                    this.nextReqId = (0,
                        o.IntNumber)(1),
                    this.connectedSubject = new n.BehaviorSubject(!1),
                    this.linkedSubject = new n.BehaviorSubject(!1),
                    this.sessionConfigSubject = new n.ReplaySubject(1);
                let h = new c.RxWebSocket(r + "/rpc", l);
                this.ws = h,
                    this.subscriptions.add(h.connectionState$.pipe((0,
                        i.tap)(t => {
                            var r;
                            return null === (r = this.diagnostic) || void 0 === r ? void 0 : r.log(u.EVENTS.CONNECTED_STATE_CHANGE, {
                                state: t,
                                sessionIdHash: s.Session.hash(e)
                            })
                        }
                        ), (0,
                            i.skip)(1), (0,
                                i.filter)(e => e === c.ConnectionState.DISCONNECTED && !this.destroyed), (0,
                                    i.delay)(5e3), (0,
                                        i.filter)(e => !this.destroyed), (0,
                                            i.flatMap)(e => h.connect()), (0,
                                                i.retry)()).subscribe()),
                    this.subscriptions.add(h.connectionState$.pipe((0,
                        i.skip)(2), (0,
                            i.switchMap)(e => (0,
                                n.iif)(() => e === c.ConnectionState.CONNECTED, this.authenticate().pipe((0,
                                    i.tap)(e => this.sendIsLinked()), (0,
                                        i.tap)(e => this.sendGetSessionConfig()), (0,
                                            i.map)(e => !0)), (0,
                                                n.of)(!1))), (0,
                                                    i.distinctUntilChanged)(), (0,
                                                        i.catchError)(e => (0,
                                                            n.of)(!1))).subscribe(e => this.connectedSubject.next(e))),
                    this.subscriptions.add(h.connectionState$.pipe((0,
                        i.skip)(1), (0,
                            i.switchMap)(e => (0,
                                n.iif)(() => e === c.ConnectionState.CONNECTED, (0,
                                    n.timer)(0, 1e4)))).subscribe(e => 0 === e ? this.updateLastHeartbeat() : this.heartbeat())),
                    this.subscriptions.add(h.incomingData$.pipe((0,
                        i.filter)(e => "h" === e)).subscribe(e => this.updateLastHeartbeat())),
                    this.subscriptions.add(h.incomingJSONData$.pipe((0,
                        i.filter)(e => ["IsLinkedOK", "Linked"].includes(e.type))).subscribe(t => {
                            var r;
                            null === (r = this.diagnostic) || void 0 === r || r.log(u.EVENTS.LINKED, {
                                sessionIdHash: s.Session.hash(e),
                                linked: t.linked,
                                type: t.type,
                                onlineGuests: t.onlineGuests
                            }),
                                this.linkedSubject.next(t.linked || t.onlineGuests > 0)
                        }
                        )),
                    this.subscriptions.add(h.incomingJSONData$.pipe((0,
                        i.filter)(e => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(e.type))).subscribe(t => {
                            var r;
                            null === (r = this.diagnostic) || void 0 === r || r.log(u.EVENTS.SESSION_CONFIG_RECEIVED, {
                                sessionIdHash: s.Session.hash(e),
                                metadata_keys: t && t.metadata ? Object.keys(t.metadata) : void 0
                            }),
                                this.sessionConfigSubject.next({
                                    webhookId: t.webhookId,
                                    webhookUrl: t.webhookUrl,
                                    metadata: t.metadata
                                })
                        }
                        ))
            }
            connect() {
                var e;
                if (this.destroyed)
                    throw Error("instance is destroyed");
                null === (e = this.diagnostic) || void 0 === e || e.log(u.EVENTS.STARTED_CONNECTING, {
                    sessionIdHash: s.Session.hash(this.sessionId)
                }),
                    this.ws.connect().subscribe()
            }
            destroy() {
                var e;
                this.subscriptions.unsubscribe(),
                    this.ws.disconnect(),
                    null === (e = this.diagnostic) || void 0 === e || e.log(u.EVENTS.DISCONNECTED, {
                        sessionIdHash: s.Session.hash(this.sessionId)
                    }),
                    this.destroyed = !0
            }
            get isDestroyed() {
                return this.destroyed
            }
            get connected$() {
                return this.connectedSubject.asObservable()
            }
            get onceConnected$() {
                return this.connected$.pipe((0,
                    i.filter)(e => e), (0,
                        i.take)(1), (0,
                            i.map)(() => void 0))
            }
            get linked$() {
                return this.linkedSubject.asObservable()
            }
            get onceLinked$() {
                return this.linked$.pipe((0,
                    i.filter)(e => e), (0,
                        i.take)(1), (0,
                            i.map)(() => void 0))
            }
            get sessionConfig$() {
                return this.sessionConfigSubject.asObservable()
            }
            get incomingEvent$() {
                return this.ws.incomingJSONData$.pipe((0,
                    i.filter)(e => "Event" === e.type && "string" == typeof e.sessionId && "string" == typeof e.eventId && "string" == typeof e.event && "string" == typeof e.data), (0,
                        i.map)(e => e))
            }
            setSessionMetadata(e, t) {
                let r = (0,
                    a.ClientMessageSetSessionConfig)({
                        id: (0,
                            o.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        metadata: {
                            [e]: t
                        }
                    });
                return this.onceConnected$.pipe((0,
                    i.flatMap)(e => this.makeRequest(r)), (0,
                        i.map)(e => {
                            if ((0,
                                l.isServerMessageFail)(e))
                                throw Error(e.error || "failed to set session metadata")
                        }
                        ))
            }
            publishEvent(e, t, r = !1) {
                let n = (0,
                    a.ClientMessagePublishEvent)({
                        id: (0,
                            o.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        event: e,
                        data: t,
                        callWebhook: r
                    });
                return this.onceLinked$.pipe((0,
                    i.flatMap)(e => this.makeRequest(n)), (0,
                        i.map)(e => {
                            if ((0,
                                l.isServerMessageFail)(e))
                                throw Error(e.error || "failed to publish event");
                            return e.eventId
                        }
                        ))
            }
            sendData(e) {
                this.ws.sendData(JSON.stringify(e))
            }
            updateLastHeartbeat() {
                this.lastHeartbeatResponse = Date.now()
            }
            heartbeat() {
                if (Date.now() - this.lastHeartbeatResponse > 2e4) {
                    this.ws.disconnect();
                    return
                }
                try {
                    this.ws.sendData("h")
                } catch (e) { }
            }
            makeRequest(e, t = 6e4) {
                let r = e.id;
                try {
                    this.sendData(e)
                } catch (e) {
                    return (0,
                        n.throwError)(e)
                }
                return this.ws.incomingJSONData$.pipe((0,
                    i.timeoutWith)(t, (0,
                        n.throwError)(Error(`request ${r} timed out`))), (0,
                            i.filter)(e => e.id === r), (0,
                                i.take)(1))
            }
            authenticate() {
                let e = (0,
                    a.ClientMessageHostSession)({
                        id: (0,
                            o.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        sessionKey: this.sessionKey
                    });
                return this.makeRequest(e).pipe((0,
                    i.map)(e => {
                        if ((0,
                            l.isServerMessageFail)(e))
                            throw Error(e.error || "failed to authentcate")
                    }
                    ))
            }
            sendIsLinked() {
                let e = (0,
                    a.ClientMessageIsLinked)({
                        id: (0,
                            o.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId
                    });
                this.sendData(e)
            }
            sendGetSessionConfig() {
                let e = (0,
                    a.ClientMessageGetSessionConfig)({
                        id: (0,
                            o.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId
                    });
                this.sendData(e)
            }
        }
    },
    42539: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LINK_API_URL = void 0,
            t.LINK_API_URL = "https://www.walletlink.org"
    },
    19092: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getErrorCode = t.serializeError = t.standardErrors = t.standardErrorMessage = t.standardErrorCodes = void 0;
        let n = r(79826)
            , i = r(51464)
            , s = r(33675);
        t.standardErrorCodes = Object.freeze(Object.assign(Object.assign({}, n.errorCodes), {
            provider: Object.freeze(Object.assign(Object.assign({}, n.errorCodes.provider), {
                unsupportedChain: 4902
            }))
        })),
            t.standardErrorMessage = function (e) {
                return void 0 !== e ? (0,
                    n.getMessageFromCode)(e) : "Unknown error"
            }
            ,
            t.standardErrors = Object.freeze(Object.assign(Object.assign({}, n.ethErrors), {
                provider: Object.freeze(Object.assign(Object.assign({}, n.ethErrors.provider), {
                    unsupportedChain: (e = "") => n.ethErrors.provider.custom({
                        code: t.standardErrorCodes.provider.unsupportedChain,
                        message: `Unrecognized chain ID ${e}. Try adding the chain using wallet_addEthereumChain first.`
                    })
                }))
            })),
            t.serializeError = function (e, r) {
                let o = (0,
                    n.serializeError)("string" == typeof e ? {
                        message: e,
                        code: t.standardErrorCodes.rpc.internal
                    } : (0,
                        i.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
                            message: e.errorMessage,
                            code: e.errorCode,
                            data: {
                                method: e.method,
                                result: e.result
                            }
                        }) : e, {
                        shouldIncludeStack: !0
                    })
                    , a = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                a.searchParams.set("version", s.LIB_VERSION),
                    a.searchParams.set("code", o.code.toString());
                let u = function (e, t) {
                    let r = null == e ? void 0 : e.method;
                    return r ? r : void 0 !== t ? "string" == typeof t ? t : Array.isArray(t) ? t.length > 0 ? t[0].method : void 0 : t.method : void 0
                }(o.data, r);
                return u && a.searchParams.set("method", u),
                    a.searchParams.set("message", o.message),
                    Object.assign(Object.assign({}, o), {
                        docUrl: a.href
                    })
            }
            ,
            t.getErrorCode = function (e) {
                var t;
                return "number" == typeof e ? e : "object" == typeof e && null !== e && ("number" == typeof e.code || "number" == typeof e.errorCode) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
            }
    },
    75763: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
        let n = r(60386)
            , i = r(53220);
        var s = r(60386);
        Object.defineProperty(t, "CoinbaseWalletSDK", {
            enumerable: !0,
            get: function () {
                return s.CoinbaseWalletSDK
            }
        });
        var o = r(53220);
        Object.defineProperty(t, "CoinbaseWalletProvider", {
            enumerable: !0,
            get: function () {
                return o.CoinbaseWalletProvider
            }
        }),
            t.default = n.CoinbaseWalletSDK,
            "undefined" != typeof window && (window.CoinbaseWalletSDK = n.CoinbaseWalletSDK,
                window.CoinbaseWalletProvider = i.CoinbaseWalletProvider,
                window.WalletLink = n.CoinbaseWalletSDK,
                window.WalletLinkProvider = i.CoinbaseWalletProvider)
    },
    36878: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ScopedLocalStorage = void 0,
            t.ScopedLocalStorage = class {
                constructor(e) {
                    this.scope = e
                }
                setItem(e, t) {
                    localStorage.setItem(this.scopedKey(e), t)
                }
                getItem(e) {
                    return localStorage.getItem(this.scopedKey(e))
                }
                removeItem(e) {
                    localStorage.removeItem(this.scopedKey(e))
                }
                clear() {
                    let e = this.scopedKey("")
                        , t = [];
                    for (let r = 0; r < localStorage.length; r++) {
                        let n = localStorage.key(r);
                        "string" == typeof n && n.startsWith(e) && t.push(n)
                    }
                    t.forEach(e => localStorage.removeItem(e))
                }
                scopedKey(e) {
                    return `${this.scope}:${e}`
                }
            }
    },
    17048: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
    },
    89028: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.injectCssReset = void 0;
        let i = n(r(17048));
        t.injectCssReset = function () {
            let e = document.createElement("style");
            e.type = "text/css",
                e.appendChild(document.createTextNode(i.default)),
                document.documentElement.appendChild(e)
        }
    },
    53220: function (e, t, r) {
        "use strict";
        var n = r(48764).Buffer
            , i = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CoinbaseWalletProvider = void 0;
        let s = i(r(19394))
            , o = i(r(44152))
            , a = r(27301)
            , u = r(19092)
            , c = r(37758)
            , l = r(89540)
            , h = r(14937)
            , d = r(51464)
            , f = r(99583)
            , p = i(r(10618))
            , g = r(84190)
            , m = r(41060)
            , y = r(33651)
            , b = "DefaultChainId"
            , v = "DefaultJsonRpcUrl";
        class _ extends s.default {
            constructor(e) {
                var t, r;
                super(),
                    this._filterPolyfill = new g.FilterPolyfill(this),
                    this._subscriptionManager = new y.SubscriptionManager(this),
                    this._relay = null,
                    this._addresses = [],
                    this.hasMadeFirstChainChangedEmission = !1,
                    this.setProviderInfo = this.setProviderInfo.bind(this),
                    this.updateProviderInfo = this.updateProviderInfo.bind(this),
                    this.getChainId = this.getChainId.bind(this),
                    this.setAppInfo = this.setAppInfo.bind(this),
                    this.enable = this.enable.bind(this),
                    this.close = this.close.bind(this),
                    this.send = this.send.bind(this),
                    this.sendAsync = this.sendAsync.bind(this),
                    this.request = this.request.bind(this),
                    this._setAddresses = this._setAddresses.bind(this),
                    this.scanQRCode = this.scanQRCode.bind(this),
                    this.genericRequest = this.genericRequest.bind(this),
                    this._chainIdFromOpts = e.chainId,
                    this._jsonRpcUrlFromOpts = e.jsonRpcUrl,
                    this._overrideIsMetaMask = e.overrideIsMetaMask,
                    this._relayProvider = e.relayProvider,
                    this._storage = e.storage,
                    this._relayEventManager = e.relayEventManager,
                    this.diagnostic = e.diagnosticLogger,
                    this.reloadOnDisconnect = !0,
                    this.isCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t,
                    this.isCoinbaseBrowser = null !== (r = e.overrideIsCoinbaseBrowser) && void 0 !== r && r,
                    this.qrUrl = e.qrUrl;
                let n = this.getChainId()
                    , i = (0,
                        f.prepend0x)(n.toString(16));
                this.emit("connect", {
                    chainIdStr: i
                });
                let s = this._storage.getItem(l.LOCAL_STORAGE_ADDRESSES_KEY);
                if (s) {
                    let e = s.split(" ");
                    "" !== e[0] && (this._addresses = e.map(e => (0,
                        f.ensureAddressString)(e)),
                        this.emit("accountsChanged", e))
                }
                this._subscriptionManager.events.on("notification", e => {
                    this.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                ),
                    this._isAuthorized() && this.initializeRelay(),
                    window.addEventListener("message", e => {
                        var t;
                        if (e.origin === location.origin && e.source === window && "walletLinkMessage" === e.data.type) {
                            if ("dappChainSwitched" === e.data.data.action) {
                                let r = e.data.data.chainId
                                    , n = null !== (t = e.data.data.jsonRpcUrl) && void 0 !== t ? t : this.jsonRpcUrl;
                                this.updateProviderInfo(n, Number(r))
                            }
                            "addressChanged" === e.data.data.action && this._setAddresses([e.data.data.address])
                        }
                    }
                    )
            }
            get selectedAddress() {
                return this._addresses[0] || void 0
            }
            get networkVersion() {
                return this.getChainId().toString(10)
            }
            get chainId() {
                return (0,
                    f.prepend0x)(this.getChainId().toString(16))
            }
            get isWalletLink() {
                return !0
            }
            get isMetaMask() {
                return this._overrideIsMetaMask
            }
            get host() {
                return this.jsonRpcUrl
            }
            get connected() {
                return !0
            }
            isConnected() {
                return !0
            }
            get jsonRpcUrl() {
                var e;
                return null !== (e = this._storage.getItem(v)) && void 0 !== e ? e : this._jsonRpcUrlFromOpts
            }
            set jsonRpcUrl(e) {
                this._storage.setItem(v, e)
            }
            disableReloadOnDisconnect() {
                this.reloadOnDisconnect = !1
            }
            setProviderInfo(e, t) {
                this.isCoinbaseBrowser || (this._chainIdFromOpts = t,
                    this._jsonRpcUrlFromOpts = e),
                    this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
            }
            updateProviderInfo(e, t) {
                this.jsonRpcUrl = e;
                let r = this.getChainId();
                this._storage.setItem(b, t.toString(10));
                let n = (0,
                    f.ensureIntNumber)(t) !== r;
                (n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()),
                    this.hasMadeFirstChainChangedEmission = !0)
            }
            async watchAsset(e, t, r, n, i, s) {
                let o = await this.initializeRelay()
                    , a = await o.watchAsset(e, t, r, n, i, null == s ? void 0 : s.toString()).promise;
                return !!a.result
            }
            async addEthereumChain(e, t, r, n, i, s) {
                var o, a;
                if ((0,
                    f.ensureIntNumber)(e) === this.getChainId())
                    return !1;
                let u = await this.initializeRelay()
                    , c = u.inlineAddEthereumChain(e.toString());
                this._isAuthorized() || c || await u.requestEthereumAccounts().promise;
                let l = await u.addEthereumChain(e.toString(), t, i, r, n, s).promise;
                return (null === (o = l.result) || void 0 === o ? void 0 : o.isApproved) === !0 && this.updateProviderInfo(t[0], e),
                    (null === (a = l.result) || void 0 === a ? void 0 : a.isApproved) === !0
            }
            async switchEthereumChain(e) {
                let t = await this.initializeRelay()
                    , r = await t.switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
                if ((0,
                    d.isErrorResponse)(r) && r.errorCode) {
                    if (r.errorCode === u.standardErrorCodes.provider.unsupportedChain)
                        throw u.standardErrors.provider.unsupportedChain(e);
                    throw u.standardErrors.provider.custom({
                        message: r.errorMessage,
                        code: r.errorCode
                    })
                }
                let n = r.result;
                n.isApproved && n.rpcUrl.length > 0 && this.updateProviderInfo(n.rpcUrl, e)
            }
            setAppInfo(e, t) {
                this.initializeRelay().then(r => r.setAppInfo(e, t))
            }
            async enable() {
                var e;
                return (null === (e = this.diagnostic) || void 0 === e || e.log(a.EVENTS.ETH_ACCOUNTS_STATE, {
                    method: "provider::enable",
                    addresses_length: this._addresses.length,
                    sessionIdHash: this._relay ? c.Session.hash(this._relay.session.id) : void 0
                }),
                    this._isAuthorized()) ? [...this._addresses] : await this.send(m.JSONRPCMethod.eth_requestAccounts)
            }
            async close() {
                let e = await this.initializeRelay();
                e.resetAndReload()
            }
            send(e, t) {
                try {
                    let r = this._send(e, t);
                    if (r instanceof Promise)
                        return r.catch(t => {
                            throw (0,
                                u.serializeError)(t, e)
                        }
                        )
                } catch (t) {
                    throw (0,
                        u.serializeError)(t, e)
                }
            }
            _send(e, t) {
                if ("string" == typeof e) {
                    let r = Array.isArray(t) ? t : void 0 !== t ? [t] : [];
                    return this._sendRequestAsync({
                        jsonrpc: "2.0",
                        id: 0,
                        method: e,
                        params: r
                    }).then(e => e.result)
                }
                return "function" == typeof t ? this._sendAsync(e, t) : Array.isArray(e) ? e.map(e => this._sendRequest(e)) : this._sendRequest(e)
            }
            async sendAsync(e, t) {
                try {
                    return this._sendAsync(e, t).catch(t => {
                        throw (0,
                            u.serializeError)(t, e)
                    }
                    )
                } catch (t) {
                    return Promise.reject((0,
                        u.serializeError)(t, e))
                }
            }
            async _sendAsync(e, t) {
                if ("function" != typeof t)
                    throw Error("callback is required");
                if (Array.isArray(e)) {
                    this._sendMultipleRequestsAsync(e).then(e => t(null, e)).catch(e => t(e, null));
                    return
                }
                return this._sendRequestAsync(e).then(e => t(null, e)).catch(e => t(e, null))
            }
            async request(e) {
                try {
                    return this._request(e).catch(t => {
                        throw (0,
                            u.serializeError)(t, e.method)
                    }
                    )
                } catch (t) {
                    return Promise.reject((0,
                        u.serializeError)(t, e.method))
                }
            }
            async _request(e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw u.standardErrors.rpc.invalidRequest({
                        message: "Expected a single, non-array, object argument.",
                        data: e
                    });
                let { method: t, params: r } = e;
                if ("string" != typeof t || 0 === t.length)
                    throw u.standardErrors.rpc.invalidRequest({
                        message: "'args.method' must be a non-empty string.",
                        data: e
                    });
                if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r))
                    throw u.standardErrors.rpc.invalidRequest({
                        message: "'args.params' must be an object or array if provided.",
                        data: e
                    });
                let n = this._relayEventManager.makeRequestId()
                    , i = await this._sendRequestAsync({
                        method: t,
                        params: void 0 === r ? [] : r,
                        jsonrpc: "2.0",
                        id: n
                    });
                return i.result
            }
            async scanQRCode(e) {
                var t;
                let r = await this.initializeRelay()
                    , n = await r.scanQRCode((0,
                        f.ensureRegExpString)(e)).promise;
                if ("string" != typeof n.result)
                    throw (0,
                        u.serializeError)(null !== (t = n.errorMessage) && void 0 !== t ? t : "result was not a string", h.Web3Method.scanQRCode);
                return n.result
            }
            async genericRequest(e, t) {
                var r;
                let n = await this.initializeRelay()
                    , i = await n.genericRequest(e, t).promise;
                if ("string" != typeof i.result)
                    throw (0,
                        u.serializeError)(null !== (r = i.errorMessage) && void 0 !== r ? r : "result was not a string", h.Web3Method.generic);
                return i.result
            }
            async selectProvider(e) {
                var t;
                let r = await this.initializeRelay()
                    , n = await r.selectProvider(e).promise;
                if ("string" != typeof n.result)
                    throw (0,
                        u.serializeError)(null !== (t = n.errorMessage) && void 0 !== t ? t : "result was not a string", h.Web3Method.selectProvider);
                return n.result
            }
            supportsSubscriptions() {
                return !1
            }
            subscribe() {
                throw Error("Subscriptions are not supported")
            }
            unsubscribe() {
                throw Error("Subscriptions are not supported")
            }
            disconnect() {
                return !0
            }
            _sendRequest(e) {
                let t = {
                    jsonrpc: "2.0",
                    id: e.id
                }
                    , { method: r } = e;
                if (t.result = this._handleSynchronousMethods(e),
                    void 0 === t.result)
                    throw Error(`Coinbase Wallet does not support calling ${r} synchronously without a callback. Please provide a callback parameter to call ${r} asynchronously.`);
                return t
            }
            _setAddresses(e, t) {
                if (!Array.isArray(e))
                    throw Error("addresses is not an array");
                let r = e.map(e => (0,
                    f.ensureAddressString)(e));
                JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses = r,
                    this.emit("accountsChanged", this._addresses),
                    this._storage.setItem(l.LOCAL_STORAGE_ADDRESSES_KEY, r.join(" ")))
            }
            _sendRequestAsync(e) {
                return new Promise((t, r) => {
                    try {
                        let n = this._handleSynchronousMethods(e);
                        if (void 0 !== n)
                            return t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: n
                            });
                        let i = this._handleAsynchronousFilterMethods(e);
                        if (void 0 !== i) {
                            i.then(r => t(Object.assign(Object.assign({}, r), {
                                id: e.id
                            }))).catch(e => r(e));
                            return
                        }
                        let s = this._handleSubscriptionMethods(e);
                        if (void 0 !== s) {
                            s.then(r => t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: r.result
                            })).catch(e => r(e));
                            return
                        }
                    } catch (e) {
                        return r(e)
                    }
                    this._handleAsynchronousMethods(e).then(r => r && t(Object.assign(Object.assign({}, r), {
                        id: e.id
                    }))).catch(e => r(e))
                }
                )
            }
            _sendMultipleRequestsAsync(e) {
                return Promise.all(e.map(e => this._sendRequestAsync(e)))
            }
            _handleSynchronousMethods(e) {
                let { method: t } = e
                    , r = e.params || [];
                switch (t) {
                    case m.JSONRPCMethod.eth_accounts:
                        return this._eth_accounts();
                    case m.JSONRPCMethod.eth_coinbase:
                        return this._eth_coinbase();
                    case m.JSONRPCMethod.eth_uninstallFilter:
                        return this._eth_uninstallFilter(r);
                    case m.JSONRPCMethod.net_version:
                        return this._net_version();
                    case m.JSONRPCMethod.eth_chainId:
                        return this._eth_chainId();
                    default:
                        return
                }
            }
            async _handleAsynchronousMethods(e) {
                let { method: t } = e
                    , r = e.params || [];
                switch (t) {
                    case m.JSONRPCMethod.eth_requestAccounts:
                        return this._eth_requestAccounts();
                    case m.JSONRPCMethod.eth_sign:
                        return this._eth_sign(r);
                    case m.JSONRPCMethod.eth_ecRecover:
                        return this._eth_ecRecover(r);
                    case m.JSONRPCMethod.personal_sign:
                        return this._personal_sign(r);
                    case m.JSONRPCMethod.personal_ecRecover:
                        return this._personal_ecRecover(r);
                    case m.JSONRPCMethod.eth_signTransaction:
                        return this._eth_signTransaction(r);
                    case m.JSONRPCMethod.eth_sendRawTransaction:
                        return this._eth_sendRawTransaction(r);
                    case m.JSONRPCMethod.eth_sendTransaction:
                        return this._eth_sendTransaction(r);
                    case m.JSONRPCMethod.eth_signTypedData_v1:
                        return this._eth_signTypedData_v1(r);
                    case m.JSONRPCMethod.eth_signTypedData_v2:
                        return this._throwUnsupportedMethodError();
                    case m.JSONRPCMethod.eth_signTypedData_v3:
                        return this._eth_signTypedData_v3(r);
                    case m.JSONRPCMethod.eth_signTypedData_v4:
                    case m.JSONRPCMethod.eth_signTypedData:
                        return this._eth_signTypedData_v4(r);
                    case m.JSONRPCMethod.cbWallet_arbitrary:
                        return this._cbwallet_arbitrary(r);
                    case m.JSONRPCMethod.wallet_addEthereumChain:
                        return this._wallet_addEthereumChain(r);
                    case m.JSONRPCMethod.wallet_switchEthereumChain:
                        return this._wallet_switchEthereumChain(r);
                    case m.JSONRPCMethod.wallet_watchAsset:
                        return this._wallet_watchAsset(r)
                }
                let n = await this.initializeRelay();
                return n.makeEthereumJSONRPCRequest(e, this.jsonRpcUrl)
            }
            _handleAsynchronousFilterMethods(e) {
                let { method: t } = e
                    , r = e.params || [];
                switch (t) {
                    case m.JSONRPCMethod.eth_newFilter:
                        return this._eth_newFilter(r);
                    case m.JSONRPCMethod.eth_newBlockFilter:
                        return this._eth_newBlockFilter();
                    case m.JSONRPCMethod.eth_newPendingTransactionFilter:
                        return this._eth_newPendingTransactionFilter();
                    case m.JSONRPCMethod.eth_getFilterChanges:
                        return this._eth_getFilterChanges(r);
                    case m.JSONRPCMethod.eth_getFilterLogs:
                        return this._eth_getFilterLogs(r)
                }
            }
            _handleSubscriptionMethods(e) {
                switch (e.method) {
                    case m.JSONRPCMethod.eth_subscribe:
                    case m.JSONRPCMethod.eth_unsubscribe:
                        return this._subscriptionManager.handleRequest(e)
                }
            }
            _isKnownAddress(e) {
                try {
                    let t = (0,
                        f.ensureAddressString)(e)
                        , r = this._addresses.map(e => (0,
                            f.ensureAddressString)(e));
                    return r.includes(t)
                } catch (e) { }
                return !1
            }
            _ensureKnownAddress(e) {
                var t;
                if (!this._isKnownAddress(e))
                    throw null === (t = this.diagnostic) || void 0 === t || t.log(a.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
                    Error("Unknown Ethereum address")
            }
            _prepareTransactionParams(e) {
                let t = e.from ? (0,
                    f.ensureAddressString)(e.from) : this.selectedAddress;
                if (!t)
                    throw Error("Ethereum address is unavailable");
                this._ensureKnownAddress(t);
                let r = e.to ? (0,
                    f.ensureAddressString)(e.to) : null
                    , i = null != e.value ? (0,
                        f.ensureBN)(e.value) : new o.default(0)
                    , s = e.data ? (0,
                        f.ensureBuffer)(e.data) : n.alloc(0)
                    , a = null != e.nonce ? (0,
                        f.ensureIntNumber)(e.nonce) : null
                    , u = null != e.gasPrice ? (0,
                        f.ensureBN)(e.gasPrice) : null
                    , c = null != e.maxFeePerGas ? (0,
                        f.ensureBN)(e.maxFeePerGas) : null
                    , l = null != e.maxPriorityFeePerGas ? (0,
                        f.ensureBN)(e.maxPriorityFeePerGas) : null
                    , h = null != e.gas ? (0,
                        f.ensureBN)(e.gas) : null
                    , d = this.getChainId();
                return {
                    fromAddress: t,
                    toAddress: r,
                    weiValue: i,
                    data: s,
                    nonce: a,
                    gasPriceInWei: u,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: l,
                    gasLimit: h,
                    chainId: d
                }
            }
            _isAuthorized() {
                return this._addresses.length > 0
            }
            _requireAuthorization() {
                if (!this._isAuthorized())
                    throw u.standardErrors.provider.unauthorized({})
            }
            _throwUnsupportedMethodError() {
                throw u.standardErrors.provider.unsupportedMethod({})
            }
            async _signEthereumMessage(e, t, r, n) {
                this._ensureKnownAddress(t);
                try {
                    let i = await this.initializeRelay()
                        , s = await i.signEthereumMessage(e, t, r, n).promise;
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: s.result
                    }
                } catch (e) {
                    if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i))
                        throw u.standardErrors.provider.userRejectedRequest("User denied message signature");
                    throw e
                }
            }
            async _ethereumAddressFromSignedMessage(e, t, r) {
                let n = await this.initializeRelay()
                    , i = await n.ethereumAddressFromSignedMessage(e, t, r).promise;
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: i.result
                }
            }
            _eth_accounts() {
                return [...this._addresses]
            }
            _eth_coinbase() {
                return this.selectedAddress || null
            }
            _net_version() {
                return this.getChainId().toString(10)
            }
            _eth_chainId() {
                return (0,
                    f.hexStringFromIntNumber)(this.getChainId())
            }
            getChainId() {
                let e = this._storage.getItem(b);
                if (!e)
                    return (0,
                        f.ensureIntNumber)(this._chainIdFromOpts);
                let t = parseInt(e, 10);
                return (0,
                    f.ensureIntNumber)(t)
            }
            async _eth_requestAccounts() {
                var e;
                let t;
                if (null === (e = this.diagnostic) || void 0 === e || e.log(a.EVENTS.ETH_ACCOUNTS_STATE, {
                    method: "provider::_eth_requestAccounts",
                    addresses_length: this._addresses.length,
                    sessionIdHash: this._relay ? c.Session.hash(this._relay.session.id) : void 0
                }),
                    this._isAuthorized())
                    return Promise.resolve({
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    });
                try {
                    let e = await this.initializeRelay();
                    t = await e.requestEthereumAccounts().promise
                } catch (e) {
                    if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i))
                        throw u.standardErrors.provider.userRejectedRequest("User denied account authorization");
                    throw e
                }
                if (!t.result)
                    throw Error("accounts received is empty");
                return this._setAddresses(t.result),
                    this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
                {
                    jsonrpc: "2.0",
                    id: 0,
                    result: this._addresses
                }
            }
            _eth_sign(e) {
                this._requireAuthorization();
                let t = (0,
                    f.ensureAddressString)(e[0])
                    , r = (0,
                        f.ensureBuffer)(e[1]);
                return this._signEthereumMessage(r, t, !1)
            }
            _eth_ecRecover(e) {
                let t = (0,
                    f.ensureBuffer)(e[0])
                    , r = (0,
                        f.ensureBuffer)(e[1]);
                return this._ethereumAddressFromSignedMessage(t, r, !1)
            }
            _personal_sign(e) {
                this._requireAuthorization();
                let t = (0,
                    f.ensureBuffer)(e[0])
                    , r = (0,
                        f.ensureAddressString)(e[1]);
                return this._signEthereumMessage(t, r, !0)
            }
            _personal_ecRecover(e) {
                let t = (0,
                    f.ensureBuffer)(e[0])
                    , r = (0,
                        f.ensureBuffer)(e[1]);
                return this._ethereumAddressFromSignedMessage(t, r, !0)
            }
            async _eth_signTransaction(e) {
                this._requireAuthorization();
                let t = this._prepareTransactionParams(e[0] || {});
                try {
                    let e = await this.initializeRelay()
                        , r = await e.signEthereumTransaction(t).promise;
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: r.result
                    }
                } catch (e) {
                    if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i))
                        throw u.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                    throw e
                }
            }
            async _eth_sendRawTransaction(e) {
                let t = (0,
                    f.ensureBuffer)(e[0])
                    , r = await this.initializeRelay()
                    , n = await r.submitEthereumTransaction(t, this.getChainId()).promise;
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: n.result
                }
            }
            async _eth_sendTransaction(e) {
                this._requireAuthorization();
                let t = this._prepareTransactionParams(e[0] || {});
                try {
                    let e = await this.initializeRelay()
                        , r = await e.signAndSubmitEthereumTransaction(t).promise;
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: r.result
                    }
                } catch (e) {
                    if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i))
                        throw u.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                    throw e
                }
            }
            async _eth_signTypedData_v1(e) {
                this._requireAuthorization();
                let t = (0,
                    f.ensureParsedJSONObject)(e[0])
                    , r = (0,
                        f.ensureAddressString)(e[1]);
                this._ensureKnownAddress(r);
                let n = p.default.hashForSignTypedDataLegacy({
                    data: t
                })
                    , i = JSON.stringify(t, null, 2);
                return this._signEthereumMessage(n, r, !1, i)
            }
            async _eth_signTypedData_v3(e) {
                this._requireAuthorization();
                let t = (0,
                    f.ensureAddressString)(e[0])
                    , r = (0,
                        f.ensureParsedJSONObject)(e[1]);
                this._ensureKnownAddress(t);
                let n = p.default.hashForSignTypedData_v3({
                    data: r
                })
                    , i = JSON.stringify(r, null, 2);
                return this._signEthereumMessage(n, t, !1, i)
            }
            async _eth_signTypedData_v4(e) {
                this._requireAuthorization();
                let t = (0,
                    f.ensureAddressString)(e[0])
                    , r = (0,
                        f.ensureParsedJSONObject)(e[1]);
                this._ensureKnownAddress(t);
                let n = p.default.hashForSignTypedData_v4({
                    data: r
                })
                    , i = JSON.stringify(r, null, 2);
                return this._signEthereumMessage(n, t, !1, i)
            }
            async _cbwallet_arbitrary(e) {
                let t = e[0]
                    , r = e[1];
                if ("string" != typeof r)
                    throw Error("parameter must be a string");
                if ("object" != typeof t || null === t)
                    throw Error("parameter must be an object");
                let n = await this.genericRequest(t, r);
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: n
                }
            }
            async _wallet_addEthereumChain(e) {
                var t, r, n, i;
                let s = e[0];
                if ((null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0)
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "please pass in at least 1 rpcUrl"
                        }
                    };
                if (!s.chainName || "" === s.chainName.trim())
                    throw u.standardErrors.rpc.invalidParams("chainName is a required field");
                if (!s.nativeCurrency)
                    throw u.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                let o = parseInt(s.chainId, 16)
                    , a = await this.addEthereumChain(o, null !== (r = s.rpcUrls) && void 0 !== r ? r : [], null !== (n = s.blockExplorerUrls) && void 0 !== n ? n : [], s.chainName, null !== (i = s.iconUrls) && void 0 !== i ? i : [], s.nativeCurrency);
                return a ? {
                    jsonrpc: "2.0",
                    id: 0,
                    result: null
                } : {
                    jsonrpc: "2.0",
                    id: 0,
                    error: {
                        code: 2,
                        message: "unable to add ethereum chain"
                    }
                }
            }
            async _wallet_switchEthereumChain(e) {
                let t = e[0];
                return await this.switchEthereumChain(parseInt(t.chainId, 16)),
                {
                    jsonrpc: "2.0",
                    id: 0,
                    result: null
                }
            }
            async _wallet_watchAsset(e) {
                let t = Array.isArray(e) ? e[0] : e;
                if (!t.type)
                    throw u.standardErrors.rpc.invalidParams("Type is required");
                if ((null == t ? void 0 : t.type) !== "ERC20")
                    throw u.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
                if (!(null == t ? void 0 : t.options))
                    throw u.standardErrors.rpc.invalidParams("Options are required");
                if (!(null == t ? void 0 : t.options.address))
                    throw u.standardErrors.rpc.invalidParams("Address is required");
                let r = this.getChainId()
                    , { address: n, symbol: i, image: s, decimals: o } = t.options
                    , a = await this.watchAsset(t.type, n, i, o, s, r);
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: a
                }
            }
            _eth_uninstallFilter(e) {
                let t = (0,
                    f.ensureHexString)(e[0]);
                return this._filterPolyfill.uninstallFilter(t)
            }
            async _eth_newFilter(e) {
                let t = e[0]
                    , r = await this._filterPolyfill.newFilter(t);
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: r
                }
            }
            async _eth_newBlockFilter() {
                let e = await this._filterPolyfill.newBlockFilter();
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: e
                }
            }
            async _eth_newPendingTransactionFilter() {
                let e = await this._filterPolyfill.newPendingTransactionFilter();
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: e
                }
            }
            _eth_getFilterChanges(e) {
                let t = (0,
                    f.ensureHexString)(e[0]);
                return this._filterPolyfill.getFilterChanges(t)
            }
            _eth_getFilterLogs(e) {
                let t = (0,
                    f.ensureHexString)(e[0]);
                return this._filterPolyfill.getFilterLogs(t)
            }
            initializeRelay() {
                return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(e => (e.setAccountsCallback((e, t) => this._setAddresses(e, t)),
                    e.setChainCallback((e, t) => {
                        this.updateProviderInfo(t, parseInt(e, 10))
                    }
                    ),
                    e.setDappDefaultChainCallback(this._chainIdFromOpts),
                    this._relay = e,
                    e))
            }
        }
        t.CoinbaseWalletProvider = _
    },
    84190: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.filterFromParam = t.FilterPolyfill = void 0;
        let n = r(18448)
            , i = r(99583)
            , s = {
                jsonrpc: "2.0",
                id: 0
            };
        function o(e) {
            return {
                fromBlock: u(e.fromBlock),
                toBlock: u(e.toBlock),
                addresses: void 0 === e.address ? null : Array.isArray(e.address) ? e.address : [e.address],
                topics: e.topics || []
            }
        }
        function a(e) {
            let t = {
                fromBlock: c(e.fromBlock),
                toBlock: c(e.toBlock),
                topics: e.topics
            };
            return null !== e.addresses && (t.address = e.addresses),
                t
        }
        function u(e) {
            if (void 0 === e || "latest" === e || "pending" === e)
                return "latest";
            if ("earliest" === e)
                return (0,
                    n.IntNumber)(0);
            if ((0,
                i.isHexString)(e))
                return (0,
                    i.intNumberFromHexString)(e);
            throw Error(`Invalid block option: ${String(e)}`)
        }
        function c(e) {
            return "latest" === e ? e : (0,
                i.hexStringFromIntNumber)(e)
        }
        function l() {
            return Object.assign(Object.assign({}, s), {
                error: {
                    code: -32e3,
                    message: "filter not found"
                }
            })
        }
        function h() {
            return Object.assign(Object.assign({}, s), {
                result: []
            })
        }
        t.FilterPolyfill = class {
            constructor(e) {
                this.logFilters = new Map,
                    this.blockFilters = new Set,
                    this.pendingTransactionFilters = new Set,
                    this.cursors = new Map,
                    this.timeouts = new Map,
                    this.nextFilterId = (0,
                        n.IntNumber)(1),
                    this.provider = e
            }
            async newFilter(e) {
                let t = o(e)
                    , r = this.makeFilterId()
                    , n = await this.setInitialCursorPosition(r, t.fromBlock);
                return console.log(`Installing new log filter(${r}):`, t, "initial cursor position:", n),
                    this.logFilters.set(r, t),
                    this.setFilterTimeout(r),
                    (0,
                        i.hexStringFromIntNumber)(r)
            }
            async newBlockFilter() {
                let e = this.makeFilterId()
                    , t = await this.setInitialCursorPosition(e, "latest");
                return console.log(`Installing new block filter (${e}) with initial cursor position:`, t),
                    this.blockFilters.add(e),
                    this.setFilterTimeout(e),
                    (0,
                        i.hexStringFromIntNumber)(e)
            }
            async newPendingTransactionFilter() {
                let e = this.makeFilterId()
                    , t = await this.setInitialCursorPosition(e, "latest");
                return console.log(`Installing new block filter (${e}) with initial cursor position:`, t),
                    this.pendingTransactionFilters.add(e),
                    this.setFilterTimeout(e),
                    (0,
                        i.hexStringFromIntNumber)(e)
            }
            uninstallFilter(e) {
                let t = (0,
                    i.intNumberFromHexString)(e);
                return console.log(`Uninstalling filter (${t})`),
                    this.deleteFilter(t),
                    !0
            }
            getFilterChanges(e) {
                let t = (0,
                    i.intNumberFromHexString)(e);
                return (this.timeouts.has(t) && this.setFilterTimeout(t),
                    this.logFilters.has(t)) ? this.getLogFilterChanges(t) : this.blockFilters.has(t) ? this.getBlockFilterChanges(t) : this.pendingTransactionFilters.has(t) ? this.getPendingTransactionFilterChanges(t) : Promise.resolve(l())
            }
            async getFilterLogs(e) {
                let t = (0,
                    i.intNumberFromHexString)(e)
                    , r = this.logFilters.get(t);
                return r ? this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                    method: "eth_getLogs",
                    params: [a(r)]
                })) : l()
            }
            makeFilterId() {
                return (0,
                    n.IntNumber)(++this.nextFilterId)
            }
            sendAsyncPromise(e) {
                return new Promise((t, r) => {
                    this.provider.sendAsync(e, (e, n) => e ? r(e) : Array.isArray(n) || null == n ? r(Error(`unexpected response received: ${JSON.stringify(n)}`)) : void t(n))
                }
                )
            }
            deleteFilter(e) {
                console.log(`Deleting filter (${e})`),
                    this.logFilters.delete(e),
                    this.blockFilters.delete(e),
                    this.pendingTransactionFilters.delete(e),
                    this.cursors.delete(e),
                    this.timeouts.delete(e)
            }
            async getLogFilterChanges(e) {
                let t = this.logFilters.get(e)
                    , r = this.cursors.get(e);
                if (!r || !t)
                    return l();
                let o = await this.getCurrentBlockHeight()
                    , u = "latest" === t.toBlock ? o : t.toBlock;
                if (r > o || r > t.toBlock)
                    return h();
                console.log(`Fetching logs from ${r} to ${u} for filter ${e}`);
                let c = await this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                    method: "eth_getLogs",
                    params: [a(Object.assign(Object.assign({}, t), {
                        fromBlock: r,
                        toBlock: u
                    }))]
                }));
                if (Array.isArray(c.result)) {
                    let t = c.result.map(e => (0,
                        i.intNumberFromHexString)(e.blockNumber || "0x0"))
                        , s = Math.max(...t);
                    if (s && s > r) {
                        let t = (0,
                            n.IntNumber)(s + 1);
                        console.log(`Moving cursor position for filter (${e}) from ${r} to ${t}`),
                            this.cursors.set(e, t)
                    }
                }
                return c
            }
            async getBlockFilterChanges(e) {
                let t = this.cursors.get(e);
                if (!t)
                    return l();
                let r = await this.getCurrentBlockHeight();
                if (t > r)
                    return h();
                console.log(`Fetching blocks from ${t} to ${r} for filter (${e})`);
                let o = (await Promise.all((0,
                    i.range)(t, r + 1).map(e => this.getBlockHashByNumber((0,
                        n.IntNumber)(e))))).filter(e => !!e)
                    , a = (0,
                        n.IntNumber)(t + o.length);
                return console.log(`Moving cursor position for filter (${e}) from ${t} to ${a}`),
                    this.cursors.set(e, a),
                    Object.assign(Object.assign({}, s), {
                        result: o
                    })
            }
            async getPendingTransactionFilterChanges(e) {
                return Promise.resolve(h())
            }
            async setInitialCursorPosition(e, t) {
                let r = await this.getCurrentBlockHeight()
                    , n = "number" == typeof t && t > r ? t : r;
                return this.cursors.set(e, n),
                    n
            }
            setFilterTimeout(e) {
                let t = this.timeouts.get(e);
                t && window.clearTimeout(t);
                let r = window.setTimeout(() => {
                    console.log(`Filter (${e}) timed out`),
                        this.deleteFilter(e)
                }
                    , 3e5);
                this.timeouts.set(e, r)
            }
            async getCurrentBlockHeight() {
                let { result: e } = await this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                    method: "eth_blockNumber",
                    params: []
                }));
                return (0,
                    i.intNumberFromHexString)((0,
                        i.ensureHexString)(e))
            }
            async getBlockHashByNumber(e) {
                let t = await this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                    method: "eth_getBlockByNumber",
                    params: [(0,
                        i.hexStringFromIntNumber)(e), !1]
                }));
                return t.result && "string" == typeof t.result.hash ? (0,
                    i.ensureHexString)(t.result.hash) : null
            }
        }
            ,
            t.filterFromParam = o
    },
    41060: function (e, t) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.JSONRPCMethod = void 0,
            (r = t.JSONRPCMethod || (t.JSONRPCMethod = {})).eth_accounts = "eth_accounts",
            r.eth_coinbase = "eth_coinbase",
            r.net_version = "net_version",
            r.eth_chainId = "eth_chainId",
            r.eth_uninstallFilter = "eth_uninstallFilter",
            r.eth_requestAccounts = "eth_requestAccounts",
            r.eth_sign = "eth_sign",
            r.eth_ecRecover = "eth_ecRecover",
            r.personal_sign = "personal_sign",
            r.personal_ecRecover = "personal_ecRecover",
            r.eth_signTransaction = "eth_signTransaction",
            r.eth_sendRawTransaction = "eth_sendRawTransaction",
            r.eth_sendTransaction = "eth_sendTransaction",
            r.eth_signTypedData_v1 = "eth_signTypedData_v1",
            r.eth_signTypedData_v2 = "eth_signTypedData_v2",
            r.eth_signTypedData_v3 = "eth_signTypedData_v3",
            r.eth_signTypedData_v4 = "eth_signTypedData_v4",
            r.eth_signTypedData = "eth_signTypedData",
            r.cbWallet_arbitrary = "walletlink_arbitrary",
            r.wallet_addEthereumChain = "wallet_addEthereumChain",
            r.wallet_switchEthereumChain = "wallet_switchEthereumChain",
            r.wallet_watchAsset = "wallet_watchAsset",
            r.eth_subscribe = "eth_subscribe",
            r.eth_unsubscribe = "eth_unsubscribe",
            r.eth_newFilter = "eth_newFilter",
            r.eth_newBlockFilter = "eth_newBlockFilter",
            r.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter",
            r.eth_getFilterChanges = "eth_getFilterChanges",
            r.eth_getFilterLogs = "eth_getFilterLogs"
    },
    33651: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.SubscriptionManager = void 0;
        let n = r(6035)
            , i = r(68961)
            , s = () => { }
            ;
        t.SubscriptionManager = class {
            constructor(e) {
                let t = new n.PollingBlockTracker({
                    provider: e,
                    pollingInterval: 15e3,
                    setSkipCacheFlag: !0
                })
                    , { events: r, middleware: s } = i({
                        blockTracker: t,
                        provider: e
                    });
                this.events = r,
                    this.subscriptionMiddleware = s
            }
            async handleRequest(e) {
                let t = {};
                return await this.subscriptionMiddleware(e, t, s, s),
                    t
            }
            destroy() {
                this.subscriptionMiddleware.destroy()
            }
        }
    },
    46183: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.WalletSDKUI = void 0;
        let n = r(74071)
            , i = r(85626)
            , s = r(89028);
        t.WalletSDKUI = class {
            constructor(e) {
                this.standalone = null,
                    this.attached = !1,
                    this.appSrc = null,
                    this.snackbar = new i.Snackbar({
                        darkMode: e.darkMode
                    }),
                    this.linkFlow = new n.LinkFlow({
                        darkMode: e.darkMode,
                        version: e.version,
                        sessionId: e.session.id,
                        sessionSecret: e.session.secret,
                        linkAPIUrl: e.linkAPIUrl,
                        connected$: e.connected$,
                        chainId$: e.chainId$,
                        isParentConnection: !1
                    })
            }
            attach() {
                if (this.attached)
                    throw Error("Coinbase Wallet SDK UI is already attached");
                let e = document.documentElement
                    , t = document.createElement("div");
                t.className = "-cbwsdk-css-reset",
                    e.appendChild(t),
                    this.linkFlow.attach(t),
                    this.snackbar.attach(t),
                    this.attached = !0,
                    (0,
                        s.injectCssReset)()
            }
            setConnectDisabled(e) {
                this.linkFlow.setConnectDisabled(e)
            }
            addEthereumChain(e) { }
            watchAsset(e) { }
            switchEthereumChain(e) { }
            requestEthereumAccounts(e) {
                this.linkFlow.open({
                    onCancel: e.onCancel
                })
            }
            hideRequestEthereumAccounts() {
                this.linkFlow.close()
            }
            signEthereumMessage(e) { }
            signEthereumTransaction(e) { }
            submitEthereumTransaction(e) { }
            ethereumAddressFromSignedMessage(e) { }
            showConnecting(e) {
                let t;
                return t = e.isUnlinkedErrorState ? {
                    autoExpand: !0,
                    message: "Connection lost",
                    appSrc: this.appSrc,
                    menuItems: [{
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection
                    }]
                } : {
                    message: "Confirm on phone",
                    appSrc: this.appSrc,
                    menuItems: [{
                        isRed: !0,
                        info: "Cancel transaction",
                        svgWidth: "11",
                        svgHeight: "11",
                        path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                        defaultFillRule: "inherit",
                        defaultClipRule: "inherit",
                        onClick: e.onCancel
                    }, {
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection
                    }]
                },
                    this.snackbar.presentItem(t)
            }
            setAppSrc(e) {
                this.appSrc = e
            }
            reloadUI() {
                document.location.reload()
            }
            inlineAccountsResponse() {
                return !1
            }
            inlineAddEthereumChain(e) {
                return !1
            }
            inlineWatchAsset() {
                return !1
            }
            inlineSwitchEthereumChain() {
                return !1
            }
            setStandalone(e) {
                this.standalone = e
            }
            isStandalone() {
                var e;
                return null !== (e = this.standalone) && void 0 !== e && e
            }
        }
    },
    79314: function (e, t) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.RelayMessageType = void 0,
            (r = t.RelayMessageType || (t.RelayMessageType = {})).SESSION_ID_REQUEST = "SESSION_ID_REQUEST",
            r.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE",
            r.LINKED = "LINKED",
            r.UNLINKED = "UNLINKED",
            r.WEB3_REQUEST = "WEB3_REQUEST",
            r.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED",
            r.WEB3_RESPONSE = "WEB3_RESPONSE"
    },
    37758: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.Session = void 0;
        let n = r(89072)
            , i = r(99583)
            , s = "session:id"
            , o = "session:secret"
            , a = "session:linked";
        class u {
            constructor(e, t, r, s) {
                this._storage = e,
                    this._id = t || (0,
                        i.randomBytesHex)(16),
                    this._secret = r || (0,
                        i.randomBytesHex)(32),
                    this._key = new n.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"),
                    this._linked = !!s
            }
            static load(e) {
                let t = e.getItem(s)
                    , r = e.getItem(a)
                    , n = e.getItem(o);
                return t && n ? new u(e, t, n, "1" === r) : null
            }
            static hash(e) {
                return new n.sha256().update(e).digest("hex")
            }
            get id() {
                return this._id
            }
            get secret() {
                return this._secret
            }
            get key() {
                return this._key
            }
            get linked() {
                return this._linked
            }
            set linked(e) {
                this._linked = e,
                    this.persistLinked()
            }
            save() {
                return this._storage.setItem(s, this._id),
                    this._storage.setItem(o, this._secret),
                    this.persistLinked(),
                    this
            }
            persistLinked() {
                this._storage.setItem(a, this._linked ? "1" : "0")
            }
        }
        t.Session = u
    },
    22853: function (e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
        )
            , i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
                : function (e, t) {
                    e.default = t
                }
            )
            , s = this && this.__decorate || function (e, t, r, n) {
                var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o),
                    o
            }
            , o = this && this.__importStar || function (e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                return i(t, e),
                    t
            }
            , a = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.WalletSDKRelay = void 0;
        let u = a(r(47056))
            , c = r(46949)
            , l = r(16473)
            , h = r(27301)
            , d = r(98145)
            , f = r(19092)
            , p = r(18448)
            , g = r(99583)
            , m = o(r(38661))
            , y = r(37758)
            , b = r(89540)
            , v = r(14937)
            , _ = r(70369)
            , w = r(23308)
            , E = r(51464)
            , S = r(3473);
        class M extends b.WalletSDKRelayAbstract {
            constructor(e) {
                var t;
                super(),
                    this.accountsCallback = null,
                    this.chainCallback = null,
                    this.dappDefaultChainSubject = new c.BehaviorSubject(1),
                    this.dappDefaultChain = 1,
                    this.appName = "",
                    this.appLogoUrl = null,
                    this.subscriptions = new c.Subscription,
                    this.linkAPIUrl = e.linkAPIUrl,
                    this.storage = e.storage,
                    this.options = e;
                let { session: r, ui: n, connection: i } = this.subscribe();
                if (this._session = r,
                    this.connection = i,
                    this.relayEventManager = e.relayEventManager,
                    e.diagnosticLogger && e.eventListener)
                    throw Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
                e.eventListener ? this.diagnostic = {
                    log: e.eventListener.onEvent
                } : this.diagnostic = e.diagnosticLogger,
                    this._reloadOnDisconnect = null === (t = e.reloadOnDisconnect) || void 0 === t || t,
                    this.ui = n
            }
            subscribe() {
                this.subscriptions.add(this.dappDefaultChainSubject.subscribe(e => {
                    this.dappDefaultChain !== e && (this.dappDefaultChain = e)
                }
                ));
                let e = y.Session.load(this.storage) || new y.Session(this.storage).save()
                    , t = new d.WalletSDKConnection(e.id, e.key, this.linkAPIUrl, this.diagnostic);
                this.subscriptions.add(t.sessionConfig$.subscribe({
                    next: e => {
                        this.onSessionConfigChanged(e)
                    }
                    ,
                    error: () => {
                        var e;
                        null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                            message: "error while invoking session config callback"
                        })
                    }
                })),
                    this.subscriptions.add(t.incomingEvent$.pipe((0,
                        l.filter)(e => "Web3Response" === e.event)).subscribe({
                            next: this.handleIncomingEvent
                        })),
                    this.subscriptions.add(t.linked$.pipe((0,
                        l.skip)(1), (0,
                            l.tap)(e => {
                                var t;
                                this.isLinked = e;
                                let r = this.storage.getItem(b.LOCAL_STORAGE_ADDRESSES_KEY);
                                if (e && (this.session.linked = e),
                                    this.isUnlinkedErrorState = !1,
                                    r) {
                                    let n = r.split(" ")
                                        , i = "true" === this.storage.getItem("IsStandaloneSigning");
                                    if ("" !== n[0] && !e && this.session.linked && !i) {
                                        this.isUnlinkedErrorState = !0;
                                        let e = this.getSessionIdHash();
                                        null === (t = this.diagnostic) || void 0 === t || t.log(h.EVENTS.UNLINKED_ERROR_STATE, {
                                            sessionIdHash: e
                                        })
                                    }
                                }
                            }
                            )).subscribe()),
                    this.subscriptions.add(t.sessionConfig$.pipe((0,
                        l.filter)(e => !!e.metadata && "1" === e.metadata.__destroyed)).subscribe(() => {
                            var e;
                            let r = t.isDestroyed;
                            return null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.METADATA_DESTROYED, {
                                alreadyDestroyed: r,
                                sessionIdHash: this.getSessionIdHash()
                            }),
                                this.resetAndReload()
                        }
                        )),
                    this.subscriptions.add(t.sessionConfig$.pipe((0,
                        l.filter)(e => e.metadata && void 0 !== e.metadata.WalletUsername)).pipe((0,
                            l.mergeMap)(t => m.decrypt(t.metadata.WalletUsername, e.secret))).subscribe({
                                next: e => {
                                    this.storage.setItem(b.WALLET_USER_NAME_KEY, e)
                                }
                                ,
                                error: () => {
                                    var e;
                                    null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                                        message: "Had error decrypting",
                                        value: "username"
                                    })
                                }
                            })),
                    this.subscriptions.add(t.sessionConfig$.pipe((0,
                        l.filter)(e => e.metadata && void 0 !== e.metadata.AppVersion)).pipe((0,
                            l.mergeMap)(t => m.decrypt(t.metadata.AppVersion, e.secret))).subscribe({
                                next: e => {
                                    this.storage.setItem(b.APP_VERSION_KEY, e)
                                }
                                ,
                                error: () => {
                                    var e;
                                    null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                                        message: "Had error decrypting",
                                        value: "appversion"
                                    })
                                }
                            })),
                    this.subscriptions.add(t.sessionConfig$.pipe((0,
                        l.filter)(e => e.metadata && void 0 !== e.metadata.ChainId && void 0 !== e.metadata.JsonRpcUrl)).pipe((0,
                            l.mergeMap)(t => (0,
                                c.zip)(m.decrypt(t.metadata.ChainId, e.secret), m.decrypt(t.metadata.JsonRpcUrl, e.secret)))).pipe((0,
                                    l.distinctUntilChanged)()).subscribe({
                                        next: ([e, t]) => {
                                            this.chainCallback && this.chainCallback(e, t)
                                        }
                                        ,
                                        error: () => {
                                            var e;
                                            null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                                                message: "Had error decrypting",
                                                value: "chainId|jsonRpcUrl"
                                            })
                                        }
                                    })),
                    this.subscriptions.add(t.sessionConfig$.pipe((0,
                        l.filter)(e => e.metadata && void 0 !== e.metadata.EthereumAddress)).pipe((0,
                            l.mergeMap)(t => m.decrypt(t.metadata.EthereumAddress, e.secret))).subscribe({
                                next: e => {
                                    this.accountsCallback && this.accountsCallback([e]),
                                        M.accountRequestCallbackIds.size > 0 && (Array.from(M.accountRequestCallbackIds.values()).forEach(t => {
                                            let r = (0,
                                                S.Web3ResponseMessage)({
                                                    id: t,
                                                    response: (0,
                                                        E.RequestEthereumAccountsResponse)([e])
                                                });
                                            this.invokeCallback(Object.assign(Object.assign({}, r), {
                                                id: t
                                            }))
                                        }
                                        ),
                                            M.accountRequestCallbackIds.clear())
                                }
                                ,
                                error: () => {
                                    var e;
                                    null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                                        message: "Had error decrypting",
                                        value: "selectedAddress"
                                    })
                                }
                            })),
                    this.subscriptions.add(t.sessionConfig$.pipe((0,
                        l.filter)(e => e.metadata && void 0 !== e.metadata.AppSrc)).pipe((0,
                            l.mergeMap)(t => m.decrypt(t.metadata.AppSrc, e.secret))).subscribe({
                                next: e => {
                                    this.ui.setAppSrc(e)
                                }
                                ,
                                error: () => {
                                    var e;
                                    null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                                        message: "Had error decrypting",
                                        value: "appSrc"
                                    })
                                }
                            }));
                let r = this.options.uiConstructor({
                    linkAPIUrl: this.options.linkAPIUrl,
                    version: this.options.version,
                    darkMode: this.options.darkMode,
                    session: e,
                    connected$: t.connected$,
                    chainId$: this.dappDefaultChainSubject
                });
                return t.connect(),
                {
                    session: e,
                    ui: r,
                    connection: t
                }
            }
            attachUI() {
                this.ui.attach()
            }
            resetAndReload() {
                this.connection.setSessionMetadata("__destroyed", "1").pipe((0,
                    l.timeout)(1e3), (0,
                        l.catchError)(e => (0,
                            c.of)(null))).subscribe(e => {
                                var t, r, n;
                                let i = this.ui.isStandalone();
                                try {
                                    this.subscriptions.unsubscribe()
                                } catch (e) {
                                    null === (t = this.diagnostic) || void 0 === t || t.log(h.EVENTS.GENERAL_ERROR, {
                                        message: "Had error unsubscribing"
                                    })
                                }
                                null === (r = this.diagnostic) || void 0 === r || r.log(h.EVENTS.SESSION_STATE_CHANGE, {
                                    method: "relay::resetAndReload",
                                    sessionMetadataChange: "__destroyed, 1",
                                    sessionIdHash: this.getSessionIdHash()
                                }),
                                    this.connection.destroy();
                                let s = y.Session.load(this.storage);
                                if ((null == s ? void 0 : s.id) === this._session.id ? this.storage.clear() : s && (null === (n = this.diagnostic) || void 0 === n || n.log(h.EVENTS.SKIPPED_CLEARING_SESSION, {
                                    sessionIdHash: this.getSessionIdHash(),
                                    storedSessionIdHash: y.Session.hash(s.id)
                                })),
                                    this._reloadOnDisconnect) {
                                    this.ui.reloadUI();
                                    return
                                }
                                this.accountsCallback && this.accountsCallback([], !0),
                                    this.subscriptions = new c.Subscription;
                                let { session: o, ui: a, connection: u } = this.subscribe();
                                this._session = o,
                                    this.connection = u,
                                    this.ui = a,
                                    i && this.ui.setStandalone && this.ui.setStandalone(!0),
                                    this.attachUI()
                            }
                                , e => {
                                    var t;
                                    null === (t = this.diagnostic) || void 0 === t || t.log(h.EVENTS.FAILURE, {
                                        method: "relay::resetAndReload",
                                        message: `failed to reset and reload with ${e}`,
                                        sessionIdHash: this.getSessionIdHash()
                                    })
                                }
                            )
            }
            setAppInfo(e, t) {
                this.appName = e,
                    this.appLogoUrl = t
            }
            getStorageItem(e) {
                return this.storage.getItem(e)
            }
            get session() {
                return this._session
            }
            setStorageItem(e, t) {
                this.storage.setItem(e, t)
            }
            signEthereumMessage(e, t, r, n) {
                return this.sendRequest({
                    method: v.Web3Method.signEthereumMessage,
                    params: {
                        message: (0,
                            g.hexStringFromBuffer)(e, !0),
                        address: t,
                        addPrefix: r,
                        typedDataJson: n || null
                    }
                })
            }
            ethereumAddressFromSignedMessage(e, t, r) {
                return this.sendRequest({
                    method: v.Web3Method.ethereumAddressFromSignedMessage,
                    params: {
                        message: (0,
                            g.hexStringFromBuffer)(e, !0),
                        signature: (0,
                            g.hexStringFromBuffer)(t, !0),
                        addPrefix: r
                    }
                })
            }
            signEthereumTransaction(e) {
                return this.sendRequest({
                    method: v.Web3Method.signEthereumTransaction,
                    params: {
                        fromAddress: e.fromAddress,
                        toAddress: e.toAddress,
                        weiValue: (0,
                            g.bigIntStringFromBN)(e.weiValue),
                        data: (0,
                            g.hexStringFromBuffer)(e.data, !0),
                        nonce: e.nonce,
                        gasPriceInWei: e.gasPriceInWei ? (0,
                            g.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        maxFeePerGas: e.gasPriceInWei ? (0,
                            g.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        maxPriorityFeePerGas: e.gasPriceInWei ? (0,
                            g.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        gasLimit: e.gasLimit ? (0,
                            g.bigIntStringFromBN)(e.gasLimit) : null,
                        chainId: e.chainId,
                        shouldSubmit: !1
                    }
                })
            }
            signAndSubmitEthereumTransaction(e) {
                return this.sendRequest({
                    method: v.Web3Method.signEthereumTransaction,
                    params: {
                        fromAddress: e.fromAddress,
                        toAddress: e.toAddress,
                        weiValue: (0,
                            g.bigIntStringFromBN)(e.weiValue),
                        data: (0,
                            g.hexStringFromBuffer)(e.data, !0),
                        nonce: e.nonce,
                        gasPriceInWei: e.gasPriceInWei ? (0,
                            g.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        maxFeePerGas: e.maxFeePerGas ? (0,
                            g.bigIntStringFromBN)(e.maxFeePerGas) : null,
                        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0,
                            g.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
                        gasLimit: e.gasLimit ? (0,
                            g.bigIntStringFromBN)(e.gasLimit) : null,
                        chainId: e.chainId,
                        shouldSubmit: !0
                    }
                })
            }
            submitEthereumTransaction(e, t) {
                return this.sendRequest({
                    method: v.Web3Method.submitEthereumTransaction,
                    params: {
                        signedTransaction: (0,
                            g.hexStringFromBuffer)(e, !0),
                        chainId: t
                    }
                })
            }
            scanQRCode(e) {
                return this.sendRequest({
                    method: v.Web3Method.scanQRCode,
                    params: {
                        regExp: e
                    }
                })
            }
            getQRCodeUrl() {
                return (0,
                    g.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
            }
            genericRequest(e, t) {
                return this.sendRequest({
                    method: v.Web3Method.generic,
                    params: {
                        action: t,
                        data: e
                    }
                })
            }
            sendGenericMessage(e) {
                return this.sendRequest(e)
            }
            sendRequest(e) {
                let t = null
                    , r = (0,
                        g.randomBytesHex)(8)
                    , n = n => {
                        this.publishWeb3RequestCanceledEvent(r),
                            this.handleErrorResponse(r, e.method, n),
                            null == t || t()
                    }
                    , i = new Promise((i, s) => {
                        this.ui.isStandalone() || (t = this.ui.showConnecting({
                            isUnlinkedErrorState: this.isUnlinkedErrorState,
                            onCancel: n,
                            onResetConnection: this.resetAndReload
                        })),
                            this.relayEventManager.callbacks.set(r, e => {
                                if (null == t || t(),
                                    e.errorMessage)
                                    return s(Error(e.errorMessage));
                                i(e)
                            }
                            ),
                            this.ui.isStandalone() ? this.sendRequestStandalone(r, e) : this.publishWeb3RequestEvent(r, e)
                    }
                    );
                return {
                    promise: i,
                    cancel: n
                }
            }
            setConnectDisabled(e) {
                this.ui.setConnectDisabled(e)
            }
            setAccountsCallback(e) {
                this.accountsCallback = e
            }
            setChainCallback(e) {
                this.chainCallback = e
            }
            setDappDefaultChainCallback(e) {
                this.dappDefaultChainSubject.next(e)
            }
            publishWeb3RequestEvent(e, t) {
                var r;
                let n = (0,
                    w.Web3RequestMessage)({
                        id: e,
                        request: t
                    })
                    , i = y.Session.load(this.storage);
                null === (r = this.diagnostic) || void 0 === r || r.log(h.EVENTS.WEB3_REQUEST, {
                    eventId: n.id,
                    method: `relay::${n.request.method}`,
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: i ? y.Session.hash(i.id) : "",
                    isSessionMismatched: ((null == i ? void 0 : i.id) !== this._session.id).toString()
                }),
                    this.subscriptions.add(this.publishEvent("Web3Request", n, !0).subscribe({
                        next: e => {
                            var t;
                            null === (t = this.diagnostic) || void 0 === t || t.log(h.EVENTS.WEB3_REQUEST_PUBLISHED, {
                                eventId: n.id,
                                method: `relay::${n.request.method}`,
                                sessionIdHash: this.getSessionIdHash(),
                                storedSessionIdHash: i ? y.Session.hash(i.id) : "",
                                isSessionMismatched: ((null == i ? void 0 : i.id) !== this._session.id).toString()
                            })
                        }
                        ,
                        error: e => {
                            this.handleWeb3ResponseMessage((0,
                                S.Web3ResponseMessage)({
                                    id: n.id,
                                    response: {
                                        method: n.request.method,
                                        errorMessage: e.message
                                    }
                                }))
                        }
                    }))
            }
            publishWeb3RequestCanceledEvent(e) {
                let t = (0,
                    _.Web3RequestCanceledMessage)(e);
                this.subscriptions.add(this.publishEvent("Web3RequestCanceled", t, !1).subscribe())
            }
            publishEvent(e, t, r) {
                let n = this.session.secret;
                return new c.Observable(e => {
                    m.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                        origin: location.origin
                    })), n).then(t => {
                        e.next(t),
                            e.complete()
                    }
                    )
                }
                ).pipe((0,
                    l.mergeMap)(t => this.connection.publishEvent(e, t, r)))
            }
            handleIncomingEvent(e) {
                try {
                    this.subscriptions.add((0,
                        c.from)(m.decrypt(e.data, this.session.secret)).pipe((0,
                            l.map)(e => JSON.parse(e))).subscribe({
                                next: e => {
                                    let t = (0,
                                        S.isWeb3ResponseMessage)(e) ? e : null;
                                    t && this.handleWeb3ResponseMessage(t)
                                }
                                ,
                                error: () => {
                                    var e;
                                    null === (e = this.diagnostic) || void 0 === e || e.log(h.EVENTS.GENERAL_ERROR, {
                                        message: "Had error decrypting",
                                        value: "incomingEvent"
                                    })
                                }
                            }))
                } catch (e) {
                    return
                }
            }
            handleWeb3ResponseMessage(e) {
                var t;
                let { response: r } = e;
                if (null === (t = this.diagnostic) || void 0 === t || t.log(h.EVENTS.WEB3_RESPONSE, {
                    eventId: e.id,
                    method: `relay::${r.method}`,
                    sessionIdHash: this.getSessionIdHash()
                }),
                    (0,
                        E.isRequestEthereumAccountsResponse)(r)) {
                    M.accountRequestCallbackIds.forEach(t => this.invokeCallback(Object.assign(Object.assign({}, e), {
                        id: t
                    }))),
                        M.accountRequestCallbackIds.clear();
                    return
                }
                this.invokeCallback(e)
            }
            handleErrorResponse(e, t, r, n) {
                var i;
                let s = null !== (i = null == r ? void 0 : r.message) && void 0 !== i ? i : (0,
                    f.standardErrorMessage)(n);
                this.handleWeb3ResponseMessage((0,
                    S.Web3ResponseMessage)({
                        id: e,
                        response: {
                            method: t,
                            errorMessage: s,
                            errorCode: n
                        }
                    }))
            }
            invokeCallback(e) {
                let t = this.relayEventManager.callbacks.get(e.id);
                t && (t(e.response),
                    this.relayEventManager.callbacks.delete(e.id))
            }
            requestEthereumAccounts() {
                let e = {
                    method: v.Web3Method.requestEthereumAccounts,
                    params: {
                        appName: this.appName,
                        appLogoUrl: this.appLogoUrl || null
                    }
                }
                    , t = (0,
                        g.randomBytesHex)(8)
                    , r = r => {
                        this.publishWeb3RequestCanceledEvent(t),
                            this.handleErrorResponse(t, e.method, r)
                    }
                    , n = new Promise((n, i) => {
                        var s;
                        this.relayEventManager.callbacks.set(t, e => {
                            if (this.ui.hideRequestEthereumAccounts(),
                                e.errorMessage)
                                return i(Error(e.errorMessage));
                            n(e)
                        }
                        );
                        let o = (null === (s = null == window ? void 0 : window.navigator) || void 0 === s ? void 0 : s.userAgent) || null;
                        if (o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o)) {
                            let e;
                            try {
                                e = (0,
                                    g.isInIFrame)() && window.top ? window.top.location : window.location
                            } catch (t) {
                                e = window.location
                            }
                            e.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(e.href)}`;
                            return
                        }
                        if (this.ui.inlineAccountsResponse()) {
                            let e = e => {
                                this.handleWeb3ResponseMessage((0,
                                    S.Web3ResponseMessage)({
                                        id: t,
                                        response: (0,
                                            E.RequestEthereumAccountsResponse)(e)
                                    }))
                            }
                                ;
                            this.ui.requestEthereumAccounts({
                                onCancel: r,
                                onAccounts: e
                            })
                        } else {
                            let e = f.standardErrors.provider.userRejectedRequest("User denied account authorization");
                            this.ui.requestEthereumAccounts({
                                onCancel: () => r(e)
                            })
                        }
                        M.accountRequestCallbackIds.add(t),
                            this.ui.inlineAccountsResponse() || this.ui.isStandalone() || this.publishWeb3RequestEvent(t, e)
                    }
                    );
                return {
                    promise: n,
                    cancel: r
                }
            }
            selectProvider(e) {
                let t = {
                    method: v.Web3Method.selectProvider,
                    params: {
                        providerOptions: e
                    }
                }
                    , r = (0,
                        g.randomBytesHex)(8)
                    , n = e => {
                        this.publishWeb3RequestCanceledEvent(r),
                            this.handleErrorResponse(r, t.method, e)
                    }
                    , i = new Promise((t, n) => {
                        this.relayEventManager.callbacks.set(r, e => {
                            if (e.errorMessage)
                                return n(Error(e.errorMessage));
                            t(e)
                        }
                        );
                        let i = e => {
                            this.handleWeb3ResponseMessage((0,
                                S.Web3ResponseMessage)({
                                    id: r,
                                    response: (0,
                                        E.SelectProviderResponse)(p.ProviderType.Unselected)
                                }))
                        }
                            , s = e => {
                                this.handleWeb3ResponseMessage((0,
                                    S.Web3ResponseMessage)({
                                        id: r,
                                        response: (0,
                                            E.SelectProviderResponse)(e)
                                    }))
                            }
                            ;
                        this.ui.selectProvider && this.ui.selectProvider({
                            onApprove: s,
                            onCancel: i,
                            providerOptions: e
                        })
                    }
                    );
                return {
                    cancel: n,
                    promise: i
                }
            }
            watchAsset(e, t, r, n, i, s) {
                let o = {
                    method: v.Web3Method.watchAsset,
                    params: {
                        type: e,
                        options: {
                            address: t,
                            symbol: r,
                            decimals: n,
                            image: i
                        },
                        chainId: s
                    }
                }
                    , a = null
                    , u = (0,
                        g.randomBytesHex)(8)
                    , c = e => {
                        this.publishWeb3RequestCanceledEvent(u),
                            this.handleErrorResponse(u, o.method, e),
                            null == a || a()
                    }
                    ;
                this.ui.inlineWatchAsset() || (a = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: c,
                    onResetConnection: this.resetAndReload
                }));
                let l = new Promise((c, l) => {
                    this.relayEventManager.callbacks.set(u, e => {
                        if (null == a || a(),
                            e.errorMessage)
                            return l(Error(e.errorMessage));
                        c(e)
                    }
                    );
                    let h = e => {
                        this.handleWeb3ResponseMessage((0,
                            S.Web3ResponseMessage)({
                                id: u,
                                response: (0,
                                    E.WatchAssetReponse)(!1)
                            }))
                    }
                        , d = () => {
                            this.handleWeb3ResponseMessage((0,
                                S.Web3ResponseMessage)({
                                    id: u,
                                    response: (0,
                                        E.WatchAssetReponse)(!0)
                                }))
                        }
                        ;
                    this.ui.inlineWatchAsset() && this.ui.watchAsset({
                        onApprove: d,
                        onCancel: h,
                        type: e,
                        address: t,
                        symbol: r,
                        decimals: n,
                        image: i,
                        chainId: s
                    }),
                        this.ui.inlineWatchAsset() || this.ui.isStandalone() || this.publishWeb3RequestEvent(u, o)
                }
                );
                return {
                    cancel: c,
                    promise: l
                }
            }
            addEthereumChain(e, t, r, n, i, s) {
                let o = {
                    method: v.Web3Method.addEthereumChain,
                    params: {
                        chainId: e,
                        rpcUrls: t,
                        blockExplorerUrls: n,
                        chainName: i,
                        iconUrls: r,
                        nativeCurrency: s
                    }
                }
                    , a = null
                    , u = (0,
                        g.randomBytesHex)(8)
                    , c = e => {
                        this.publishWeb3RequestCanceledEvent(u),
                            this.handleErrorResponse(u, o.method, e),
                            null == a || a()
                    }
                    ;
                this.ui.inlineAddEthereumChain(e) || (a = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: c,
                    onResetConnection: this.resetAndReload
                }));
                let l = new Promise((t, r) => {
                    this.relayEventManager.callbacks.set(u, e => {
                        if (null == a || a(),
                            e.errorMessage)
                            return r(Error(e.errorMessage));
                        t(e)
                    }
                    );
                    let n = e => {
                        this.handleWeb3ResponseMessage((0,
                            S.Web3ResponseMessage)({
                                id: u,
                                response: (0,
                                    E.AddEthereumChainResponse)({
                                        isApproved: !1,
                                        rpcUrl: ""
                                    })
                            }))
                    }
                        , i = e => {
                            this.handleWeb3ResponseMessage((0,
                                S.Web3ResponseMessage)({
                                    id: u,
                                    response: (0,
                                        E.AddEthereumChainResponse)({
                                            isApproved: !0,
                                            rpcUrl: e
                                        })
                                }))
                        }
                        ;
                    this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
                        onCancel: n,
                        onApprove: i,
                        chainId: o.params.chainId,
                        rpcUrls: o.params.rpcUrls,
                        blockExplorerUrls: o.params.blockExplorerUrls,
                        chainName: o.params.chainName,
                        iconUrls: o.params.iconUrls,
                        nativeCurrency: o.params.nativeCurrency
                    }),
                        this.ui.inlineAddEthereumChain(e) || this.ui.isStandalone() || this.publishWeb3RequestEvent(u, o)
                }
                );
                return {
                    promise: l,
                    cancel: c
                }
            }
            switchEthereumChain(e, t) {
                let r = {
                    method: v.Web3Method.switchEthereumChain,
                    params: Object.assign({
                        chainId: e
                    }, {
                        address: t
                    })
                }
                    , n = (0,
                        g.randomBytesHex)(8)
                    , i = e => {
                        this.publishWeb3RequestCanceledEvent(n),
                            this.handleErrorResponse(n, r.method, e)
                    }
                    , s = new Promise((t, i) => {
                        this.relayEventManager.callbacks.set(n, e => (0,
                            E.isErrorResponse)(e) && e.errorCode ? i(f.standardErrors.provider.custom({
                                code: e.errorCode,
                                message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                            })) : e.errorMessage ? i(Error(e.errorMessage)) : void t(e));
                        let s = t => {
                            var r;
                            if (t) {
                                let i = null !== (r = (0,
                                    f.getErrorCode)(t)) && void 0 !== r ? r : f.standardErrorCodes.provider.unsupportedChain;
                                this.handleErrorResponse(n, v.Web3Method.switchEthereumChain, t instanceof Error ? t : f.standardErrors.provider.unsupportedChain(e), i)
                            } else
                                this.handleWeb3ResponseMessage((0,
                                    S.Web3ResponseMessage)({
                                        id: n,
                                        response: (0,
                                            E.SwitchEthereumChainResponse)({
                                                isApproved: !1,
                                                rpcUrl: ""
                                            })
                                    }))
                        }
                            , o = e => {
                                this.handleWeb3ResponseMessage((0,
                                    S.Web3ResponseMessage)({
                                        id: n,
                                        response: (0,
                                            E.SwitchEthereumChainResponse)({
                                                isApproved: !0,
                                                rpcUrl: e
                                            })
                                    }))
                            }
                            ;
                        this.ui.switchEthereumChain({
                            onCancel: s,
                            onApprove: o,
                            chainId: r.params.chainId,
                            address: r.params.address
                        }),
                            this.ui.inlineSwitchEthereumChain() || this.ui.isStandalone() || this.publishWeb3RequestEvent(n, r)
                    }
                    );
                return {
                    promise: s,
                    cancel: i
                }
            }
            inlineAddEthereumChain(e) {
                return this.ui.inlineAddEthereumChain(e)
            }
            getSessionIdHash() {
                return y.Session.hash(this._session.id)
            }
            sendRequestStandalone(e, t) {
                let r = r => {
                    this.handleErrorResponse(e, t.method, r)
                }
                    , n = t => {
                        this.handleWeb3ResponseMessage((0,
                            S.Web3ResponseMessage)({
                                id: e,
                                response: t
                            }))
                    }
                    ;
                switch (t.method) {
                    case v.Web3Method.signEthereumMessage:
                        this.ui.signEthereumMessage({
                            request: t,
                            onSuccess: n,
                            onCancel: r
                        });
                        break;
                    case v.Web3Method.signEthereumTransaction:
                        this.ui.signEthereumTransaction({
                            request: t,
                            onSuccess: n,
                            onCancel: r
                        });
                        break;
                    case v.Web3Method.submitEthereumTransaction:
                        this.ui.submitEthereumTransaction({
                            request: t,
                            onSuccess: n,
                            onCancel: r
                        });
                        break;
                    case v.Web3Method.ethereumAddressFromSignedMessage:
                        this.ui.ethereumAddressFromSignedMessage({
                            request: t,
                            onSuccess: n
                        });
                        break;
                    default:
                        r()
                }
            }
            onSessionConfigChanged(e) { }
        }
        M.accountRequestCallbackIds = new Set,
            s([u.default], M.prototype, "resetAndReload", null),
            s([u.default], M.prototype, "handleIncomingEvent", null),
            t.WalletSDKRelay = M
    },
    89540: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.WalletSDKRelayAbstract = t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0;
        let n = r(19092);
        t.WALLET_USER_NAME_KEY = "walletUsername",
            t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses",
            t.APP_VERSION_KEY = "AppVersion",
            t.WalletSDKRelayAbstract = class {
                async makeEthereumJSONRPCRequest(e, t) {
                    if (!t)
                        throw Error("Error: No jsonRpcUrl provided");
                    return window.fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(e => e.json()).then(t => {
                        if (!t)
                            throw n.standardErrors.rpc.parse({});
                        let { error: r } = t;
                        if (r)
                            throw (0,
                                n.serializeError)(r, e.method);
                        return t
                    }
                    )
                }
            }
    },
    5748: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.WalletSDKRelayEventManager = void 0;
        let n = r(99583);
        t.WalletSDKRelayEventManager = class {
            constructor() {
                this._nextRequestId = 0,
                    this.callbacks = new Map
            }
            makeRequestId() {
                this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                let e = this._nextRequestId
                    , t = (0,
                        n.prepend0x)(e.toString(16))
                    , r = this.callbacks.get(t);
                return r && this.callbacks.delete(t),
                    e
            }
        }
    },
    14937: function (e, t) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.Web3Method = void 0,
            (r = t.Web3Method || (t.Web3Method = {})).requestEthereumAccounts = "requestEthereumAccounts",
            r.signEthereumMessage = "signEthereumMessage",
            r.signEthereumTransaction = "signEthereumTransaction",
            r.submitEthereumTransaction = "submitEthereumTransaction",
            r.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage",
            r.scanQRCode = "scanQRCode",
            r.generic = "generic",
            r.childRequestEthereumAccounts = "childRequestEthereumAccounts",
            r.addEthereumChain = "addEthereumChain",
            r.switchEthereumChain = "switchEthereumChain",
            r.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest",
            r.watchAsset = "watchAsset",
            r.selectProvider = "selectProvider"
    },
    70369: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.Web3RequestCanceledMessage = void 0;
        let n = r(79314);
        t.Web3RequestCanceledMessage = function (e) {
            return {
                type: n.RelayMessageType.WEB3_REQUEST_CANCELED,
                id: e
            }
        }
    },
    23308: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.Web3RequestMessage = void 0;
        let n = r(79314);
        t.Web3RequestMessage = function (e) {
            return Object.assign({
                type: n.RelayMessageType.WEB3_REQUEST
            }, e)
        }
    },
    51464: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.EthereumAddressFromSignedMessageResponse = t.SubmitEthereumTransactionResponse = t.SignEthereumTransactionResponse = t.SignEthereumMessageResponse = t.isRequestEthereumAccountsResponse = t.SelectProviderResponse = t.WatchAssetReponse = t.RequestEthereumAccountsResponse = t.SwitchEthereumChainResponse = t.AddEthereumChainResponse = t.isErrorResponse = void 0;
        let n = r(14937);
        t.isErrorResponse = function (e) {
            return (null == e ? void 0 : e.method) !== void 0 && (null == e ? void 0 : e.errorMessage) !== void 0
        }
            ,
            t.AddEthereumChainResponse = function (e) {
                return {
                    method: n.Web3Method.addEthereumChain,
                    result: e
                }
            }
            ,
            t.SwitchEthereumChainResponse = function (e) {
                return {
                    method: n.Web3Method.switchEthereumChain,
                    result: e
                }
            }
            ,
            t.RequestEthereumAccountsResponse = function (e) {
                return {
                    method: n.Web3Method.requestEthereumAccounts,
                    result: e
                }
            }
            ,
            t.WatchAssetReponse = function (e) {
                return {
                    method: n.Web3Method.watchAsset,
                    result: e
                }
            }
            ,
            t.SelectProviderResponse = function (e) {
                return {
                    method: n.Web3Method.selectProvider,
                    result: e
                }
            }
            ,
            t.isRequestEthereumAccountsResponse = function (e) {
                return e && e.method === n.Web3Method.requestEthereumAccounts
            }
            ,
            t.SignEthereumMessageResponse = function (e) {
                return {
                    method: n.Web3Method.signEthereumMessage,
                    result: e
                }
            }
            ,
            t.SignEthereumTransactionResponse = function (e) {
                return {
                    method: n.Web3Method.signEthereumTransaction,
                    result: e
                }
            }
            ,
            t.SubmitEthereumTransactionResponse = function (e) {
                return {
                    method: n.Web3Method.submitEthereumTransaction,
                    result: e
                }
            }
            ,
            t.EthereumAddressFromSignedMessageResponse = function (e) {
                return {
                    method: n.Web3Method.ethereumAddressFromSignedMessage,
                    result: e
                }
            }
    },
    3473: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isWeb3ResponseMessage = t.Web3ResponseMessage = void 0;
        let n = r(79314);
        t.Web3ResponseMessage = function (e) {
            return Object.assign({
                type: n.RelayMessageType.WEB3_RESPONSE
            }, e)
        }
            ,
            t.isWeb3ResponseMessage = function (e) {
                return e && e.type === n.RelayMessageType.WEB3_RESPONSE
            }
    },
    38661: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.decrypt = t.encrypt = void 0;
        let n = r(99583);
        async function i(e, t) {
            if (64 !== t.length)
                throw Error("secret must be 256 bits");
            let r = crypto.getRandomValues(new Uint8Array(12))
                , i = await crypto.subtle.importKey("raw", (0,
                    n.hexStringToUint8Array)(t), {
                    name: "aes-gcm"
                }, !1, ["encrypt", "decrypt"])
                , s = new TextEncoder
                , o = await window.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: r
                }, i, s.encode(e))
                , a = o.slice(o.byteLength - 16)
                , u = o.slice(0, o.byteLength - 16)
                , c = new Uint8Array(a)
                , l = new Uint8Array(u)
                , h = new Uint8Array([...r, ...c, ...l]);
            return (0,
                n.uint8ArrayToHex)(h)
        }
        t.encrypt = i,
            t.decrypt = function (e, t) {
                if (64 !== t.length)
                    throw Error("secret must be 256 bits");
                return new Promise((r, i) => {
                    !async function () {
                        let s = await crypto.subtle.importKey("raw", (0,
                            n.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"])
                            , o = (0,
                                n.hexStringToUint8Array)(e)
                            , a = o.slice(0, 12)
                            , u = o.slice(12, 28)
                            , c = o.slice(28)
                            , l = new Uint8Array([...c, ...u])
                            , h = {
                                name: "AES-GCM",
                                iv: new Uint8Array(a)
                            };
                        try {
                            let e = await window.crypto.subtle.decrypt(h, s, l)
                                , t = new TextDecoder;
                            r(t.decode(e))
                        } catch (e) {
                            i(e)
                        }
                    }()
                }
                )
            }
    },
    18448: function (e, t) {
        "use strict";
        var r;
        function n() {
            return e => e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0,
            t.OpaqueType = n,
            t.HexString = n(),
            t.AddressString = n(),
            t.BigIntString = n(),
            t.IntNumber = function (e) {
                return Math.floor(e)
            }
            ,
            t.RegExpString = n(),
            (r = t.ProviderType || (t.ProviderType = {})).CoinbaseWallet = "CoinbaseWallet",
            r.MetaMask = "MetaMask",
            r.Unselected = ""
    },
    99583: function (e, t, r) {
        "use strict";
        var n = r(48764).Buffer
            , i = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isInIFrame = t.createQrUrl = t.getFavicon = t.range = t.isBigNumber = t.ensureParsedJSONObject = t.ensureBN = t.ensureRegExpString = t.ensureIntNumber = t.ensureBuffer = t.ensureAddressString = t.ensureEvenLengthHexString = t.ensureHexString = t.isHexString = t.prepend0x = t.strip0x = t.has0xPrefix = t.hexStringFromIntNumber = t.intNumberFromHexString = t.bigIntStringFromBN = t.hexStringFromBuffer = t.hexStringToUint8Array = t.uint8ArrayToHex = t.randomBytesHex = void 0;
        let s = i(r(44152))
            , o = r(59578)
            , a = r(19092)
            , u = r(18448)
            , c = /^[0-9]*$/
            , l = /^[a-f0-9]*$/;
        function h(e) {
            return [...e].map(e => e.toString(16).padStart(2, "0")).join("")
        }
        function d(e) {
            return e.startsWith("0x") || e.startsWith("0X")
        }
        function f(e) {
            return d(e) ? e.slice(2) : e
        }
        function p(e) {
            return d(e) ? "0x" + e.slice(2) : "0x" + e
        }
        function g(e) {
            if ("string" != typeof e)
                return !1;
            let t = f(e).toLowerCase();
            return l.test(t)
        }
        function m(e, t = !1) {
            if ("string" == typeof e) {
                let r = f(e).toLowerCase();
                if (l.test(r))
                    return (0,
                        u.HexString)(t ? "0x" + r : r)
            }
            throw a.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
        }
        function y(e, t = !1) {
            let r = m(e, !1);
            return r.length % 2 == 1 && (r = (0,
                u.HexString)("0" + r)),
                t ? (0,
                    u.HexString)("0x" + r) : r
        }
        function b(e) {
            if ("number" == typeof e && Number.isInteger(e))
                return (0,
                    u.IntNumber)(e);
            if ("string" == typeof e) {
                if (c.test(e))
                    return (0,
                        u.IntNumber)(Number(e));
                if (g(e))
                    return (0,
                        u.IntNumber)(new s.default(y(e, !1), 16).toNumber())
            }
            throw a.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
        }
        function v(e) {
            if (null == e || "function" != typeof e.constructor)
                return !1;
            let { constructor: t } = e;
            return "function" == typeof t.config && "number" == typeof t.EUCLID
        }
        t.randomBytesHex = function (e) {
            return h(crypto.getRandomValues(new Uint8Array(e)))
        }
            ,
            t.uint8ArrayToHex = h,
            t.hexStringToUint8Array = function (e) {
                return new Uint8Array(e.match(/.{1,2}/g).map(e => parseInt(e, 16)))
            }
            ,
            t.hexStringFromBuffer = function (e, t = !1) {
                let r = e.toString("hex");
                return (0,
                    u.HexString)(t ? "0x" + r : r)
            }
            ,
            t.bigIntStringFromBN = function (e) {
                return (0,
                    u.BigIntString)(e.toString(10))
            }
            ,
            t.intNumberFromHexString = function (e) {
                return (0,
                    u.IntNumber)(new s.default(y(e, !1), 16).toNumber())
            }
            ,
            t.hexStringFromIntNumber = function (e) {
                return (0,
                    u.HexString)("0x" + new s.default(e).toString(16))
            }
            ,
            t.has0xPrefix = d,
            t.strip0x = f,
            t.prepend0x = p,
            t.isHexString = g,
            t.ensureHexString = m,
            t.ensureEvenLengthHexString = y,
            t.ensureAddressString = function (e) {
                if ("string" == typeof e) {
                    let t = f(e).toLowerCase();
                    if (g(t) && 40 === t.length)
                        return (0,
                            u.AddressString)(p(t))
                }
                throw a.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
            }
            ,
            t.ensureBuffer = function (e) {
                if (n.isBuffer(e))
                    return e;
                if ("string" == typeof e) {
                    if (!g(e))
                        return n.from(e, "utf8");
                    {
                        let t = y(e, !1);
                        return n.from(t, "hex")
                    }
                }
                throw a.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
            }
            ,
            t.ensureIntNumber = b,
            t.ensureRegExpString = function (e) {
                if (e instanceof RegExp)
                    return (0,
                        u.RegExpString)(e.toString());
                throw a.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
            }
            ,
            t.ensureBN = function (e) {
                if (null !== e && (s.default.isBN(e) || v(e)))
                    return new s.default(e.toString(10), 10);
                if ("number" == typeof e)
                    return new s.default(b(e));
                if ("string" == typeof e) {
                    if (c.test(e))
                        return new s.default(e, 10);
                    if (g(e))
                        return new s.default(y(e, !1), 16)
                }
                throw a.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }
            ,
            t.ensureParsedJSONObject = function (e) {
                if ("string" == typeof e)
                    return JSON.parse(e);
                if ("object" == typeof e)
                    return e;
                throw a.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
            }
            ,
            t.isBigNumber = v,
            t.range = function (e, t) {
                return Array.from({
                    length: t - e
                }, (t, r) => e + r)
            }
            ,
            t.getFavicon = function () {
                let e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
                    , { protocol: t, host: r } = document.location
                    , n = e ? e.getAttribute("href") : null;
                return !n || n.startsWith("javascript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : `${t}//${r}${n}`
            }
            ,
            t.createQrUrl = function (e, t, r, n, i, s) {
                let a = (0,
                    o.stringify)({
                        [n ? "parent-id" : "id"]: e,
                        secret: t,
                        server: r,
                        v: i,
                        chainId: s
                    })
                    , u = `${r}/#/link?${a}`;
                return u
            }
            ,
            t.isInIFrame = function () {
                try {
                    return null !== window.frameElement
                } catch (e) {
                    return !1
                }
            }
    },
    59103: function (e, t, r) {
        var n = r(48764).Buffer;
        let i = r(39337)
            , s = r(44152);
        function o(e) {
            if (e.startsWith("int["))
                return "int256" + e.slice(3);
            if ("int" === e)
                return "int256";
            if (e.startsWith("uint["))
                return "uint256" + e.slice(4);
            if ("uint" === e)
                return "uint256";
            if (e.startsWith("fixed["))
                return "fixed128x128" + e.slice(5);
            if ("fixed" === e)
                return "fixed128x128";
            if (e.startsWith("ufixed["))
                return "ufixed128x128" + e.slice(6);
            else if ("ufixed" === e)
                return "ufixed128x128";
            return e
        }
        function a(e) {
            return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
        }
        function u(e) {
            var t = /^\D+(\d+)x(\d+)$/.exec(e);
            return [parseInt(t[1], 10), parseInt(t[2], 10)]
        }
        function c(e) {
            var t = e.match(/(.*)\[(.*?)\]$/);
            return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
        }
        function l(e) {
            var t = typeof e;
            if ("string" === t)
                return i.isHexString(e) ? new s(i.stripHexPrefix(e), 16) : new s(e, 10);
            if ("number" === t)
                return new s(e);
            if (e.toArray)
                return e;
            throw Error("Argument is not a number")
        }
        function h(e, t) {
            if ("address" === e)
                return h("uint160", l(t));
            if ("bool" === e)
                return h("uint8", t ? 1 : 0);
            if ("string" === e)
                return h("bytes", new n(t, "utf8"));
            if ((p = e).lastIndexOf("]") === p.length - 1) {
                if (void 0 === t.length)
                    throw Error("Not an array?");
                if ("dynamic" !== (r = c(e)) && 0 !== r && t.length > r)
                    throw Error("Elements exceed array size: " + r);
                for (f in d = [],
                    e = e.slice(0, e.lastIndexOf("[")),
                    "string" == typeof t && (t = JSON.parse(t)),
                    t)
                    d.push(h(e, t[f]));
                if ("dynamic" === r) {
                    var r, o, d, f, p, g = h("uint256", t.length);
                    d.unshift(g)
                }
                return n.concat(d)
            }
            if ("bytes" === e)
                return t = new n(t),
                    d = n.concat([h("uint256", t.length), t]),
                    t.length % 32 != 0 && (d = n.concat([d, i.zeros(32 - t.length % 32)])),
                    d;
            if (e.startsWith("bytes")) {
                if ((r = a(e)) < 1 || r > 32)
                    throw Error("Invalid bytes<N> width: " + r);
                return i.setLengthRight(t, 32)
            } else if (e.startsWith("uint")) {
                if ((r = a(e)) % 8 || r < 8 || r > 256)
                    throw Error("Invalid uint<N> width: " + r);
                if ((o = l(t)).bitLength() > r)
                    throw Error("Supplied uint exceeds width: " + r + " vs " + o.bitLength());
                if (o < 0)
                    throw Error("Supplied uint is negative");
                return o.toArrayLike(n, "be", 32)
            } else if (e.startsWith("int")) {
                if ((r = a(e)) % 8 || r < 8 || r > 256)
                    throw Error("Invalid int<N> width: " + r);
                if ((o = l(t)).bitLength() > r)
                    throw Error("Supplied int exceeds width: " + r + " vs " + o.bitLength());
                return o.toTwos(256).toArrayLike(n, "be", 32)
            } else if (e.startsWith("ufixed")) {
                if (r = u(e),
                    (o = l(t)) < 0)
                    throw Error("Supplied ufixed is negative");
                return h("uint256", o.mul(new s(2).pow(new s(r[1]))))
            } else if (e.startsWith("fixed"))
                return r = u(e),
                    h("int256", l(t).mul(new s(2).pow(new s(r[1]))));
            throw Error("Unsupported or invalid type: " + e)
        }
        function d(e, t) {
            if (e.length !== t.length)
                throw Error("Number of types are not matching the values");
            for (var r, s, u = [], c = 0; c < e.length; c++) {
                var h = o(e[c])
                    , d = t[c];
                if ("bytes" === h)
                    u.push(d);
                else if ("string" === h)
                    u.push(new n(d, "utf8"));
                else if ("bool" === h)
                    u.push(new n(d ? "01" : "00", "hex"));
                else if ("address" === h)
                    u.push(i.setLength(d, 20));
                else if (h.startsWith("bytes")) {
                    if ((r = a(h)) < 1 || r > 32)
                        throw Error("Invalid bytes<N> width: " + r);
                    u.push(i.setLengthRight(d, r))
                } else if (h.startsWith("uint")) {
                    if ((r = a(h)) % 8 || r < 8 || r > 256)
                        throw Error("Invalid uint<N> width: " + r);
                    if ((s = l(d)).bitLength() > r)
                        throw Error("Supplied uint exceeds width: " + r + " vs " + s.bitLength());
                    u.push(s.toArrayLike(n, "be", r / 8))
                } else if (h.startsWith("int")) {
                    if ((r = a(h)) % 8 || r < 8 || r > 256)
                        throw Error("Invalid int<N> width: " + r);
                    if ((s = l(d)).bitLength() > r)
                        throw Error("Supplied int exceeds width: " + r + " vs " + s.bitLength());
                    u.push(s.toTwos(r).toArrayLike(n, "be", r / 8))
                } else
                    throw Error("Unsupported or invalid type: " + h)
            }
            return n.concat(u)
        }
        e.exports = {
            rawEncode: function (e, t) {
                var r = []
                    , i = []
                    , s = 32 * e.length;
                for (var a in e) {
                    var u = o(e[a])
                        , l = h(u, t[a]);
                    "string" === u || "bytes" === u || "dynamic" === c(u) ? (r.push(h("uint256", s)),
                        i.push(l),
                        s += l.length) : r.push(l)
                }
                return n.concat(r.concat(i))
            },
            solidityPack: d,
            soliditySHA3: function (e, t) {
                return i.keccak(d(e, t))
            }
        }
    },
    10618: function (e, t, r) {
        var n = r(48764).Buffer;
        let i = r(39337)
            , s = r(59103)
            , o = {
                type: "object",
                properties: {
                    types: {
                        type: "object",
                        additionalProperties: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                required: ["name", "type"]
                            }
                        }
                    },
                    primaryType: {
                        type: "string"
                    },
                    domain: {
                        type: "object"
                    },
                    message: {
                        type: "object"
                    }
                },
                required: ["types", "primaryType", "domain", "message"]
            }
            , a = {
                encodeData(e, t, r, o = !0) {
                    let a = ["bytes32"]
                        , u = [this.hashType(e, r)];
                    if (o) {
                        let c = (e, t, a) => {
                            if (void 0 !== r[t])
                                return ["bytes32", null == a ? "0x0000000000000000000000000000000000000000000000000000000000000000" : i.keccak(this.encodeData(t, a, r, o))];
                            if (void 0 === a)
                                throw Error(`missing value for field ${e} of type ${t}`);
                            if ("bytes" === t)
                                return ["bytes32", i.keccak(a)];
                            if ("string" === t)
                                return "string" == typeof a && (a = n.from(a, "utf8")),
                                    ["bytes32", i.keccak(a)];
                            if (t.lastIndexOf("]") === t.length - 1) {
                                let r = t.slice(0, t.lastIndexOf("["))
                                    , n = a.map(t => c(e, r, t));
                                return ["bytes32", i.keccak(s.rawEncode(n.map(([e]) => e), n.map(([, e]) => e)))]
                            }
                            return [t, a]
                        }
                            ;
                        for (let n of r[e]) {
                            let [e, r] = c(n.name, n.type, t[n.name]);
                            a.push(e),
                                u.push(r)
                        }
                    } else
                        for (let s of r[e]) {
                            let e = t[s.name];
                            if (void 0 !== e) {
                                if ("bytes" === s.type)
                                    a.push("bytes32"),
                                        e = i.keccak(e),
                                        u.push(e);
                                else if ("string" === s.type)
                                    a.push("bytes32"),
                                        "string" == typeof e && (e = n.from(e, "utf8")),
                                        e = i.keccak(e),
                                        u.push(e);
                                else if (void 0 !== r[s.type])
                                    a.push("bytes32"),
                                        e = i.keccak(this.encodeData(s.type, e, r, o)),
                                        u.push(e);
                                else if (s.type.lastIndexOf("]") === s.type.length - 1)
                                    throw Error("Arrays currently unimplemented in encodeData");
                                else
                                    a.push(s.type),
                                        u.push(e)
                            }
                        }
                    return s.rawEncode(a, u)
                },
                encodeType(e, t) {
                    let r = ""
                        , n = this.findTypeDependencies(e, t).filter(t => t !== e);
                    for (let i of n = [e].concat(n.sort())) {
                        let e = t[i];
                        if (!e)
                            throw Error("No type definition specified: " + i);
                        r += i + "(" + t[i].map(({ name: e, type: t }) => t + " " + e).join(",") + ")"
                    }
                    return r
                },
                findTypeDependencies(e, t, r = []) {
                    if (e = e.match(/^\w*/)[0],
                        r.includes(e) || void 0 === t[e])
                        return r;
                    for (let n of (r.push(e),
                        t[e]))
                        for (let e of this.findTypeDependencies(n.type, t, r))
                            r.includes(e) || r.push(e);
                    return r
                },
                hashStruct(e, t, r, n = !0) {
                    return i.keccak(this.encodeData(e, t, r, n))
                },
                hashType(e, t) {
                    return i.keccak(this.encodeType(e, t))
                },
                sanitizeData(e) {
                    let t = {};
                    for (let r in o.properties)
                        e[r] && (t[r] = e[r]);
                    return t.types && (t.types = Object.assign({
                        EIP712Domain: []
                    }, t.types)),
                        t
                },
                hash(e, t = !0) {
                    let r = this.sanitizeData(e)
                        , s = [n.from("1901", "hex")];
                    return s.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
                        "EIP712Domain" !== r.primaryType && s.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
                        i.keccak(n.concat(s))
                }
            };
        e.exports = {
            TYPED_MESSAGE_SCHEMA: o,
            TypedDataUtils: a,
            hashForSignTypedDataLegacy: function (e) {
                return function (e) {
                    let t = Error("Expect argument to be non-empty array");
                    if ("object" != typeof e || !e.length)
                        throw t;
                    let r = e.map(function (e) {
                        return "bytes" === e.type ? i.toBuffer(e.value) : e.value
                    })
                        , n = e.map(function (e) {
                            return e.type
                        })
                        , o = e.map(function (e) {
                            if (!e.name)
                                throw t;
                            return e.type + " " + e.name
                        });
                    return s.soliditySHA3(["bytes32", "bytes32"], [s.soliditySHA3(Array(e.length).fill("string"), o), s.soliditySHA3(n, r)])
                }(e.data)
            },
            hashForSignTypedData_v3: function (e) {
                return a.hash(e.data, !1)
            },
            hashForSignTypedData_v4: function (e) {
                return a.hash(e.data)
            }
        }
    },
    39337: function (e, t, r) {
        var n = r(48764).Buffer;
        let i = r(95811)
            , s = r(44152);
        function o(e) {
            return n.allocUnsafe(e).fill(0)
        }
        function a(e, t, r) {
            let n = o(t);
            return (e = u(e),
                r) ? e.length < t ? (e.copy(n),
                    n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length),
                        n) : e.slice(-t)
        }
        function u(e) {
            if (!n.isBuffer(e)) {
                if (Array.isArray(e))
                    e = n.from(e);
                else if ("string" == typeof e) {
                    var t;
                    e = c(e) ? n.from((t = l(e)).length % 2 ? "0" + t : t, "hex") : n.from(e)
                } else if ("number" == typeof e)
                    e = intToBuffer(e);
                else if (null == e)
                    e = n.allocUnsafe(0);
                else if (s.isBN(e))
                    e = e.toArrayLike(n);
                else if (e.toArray)
                    e = n.from(e.toArray());
                else
                    throw Error("invalid type")
            }
            return e
        }
        function c(e) {
            return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
        }
        function l(e) {
            return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e
        }
        e.exports = {
            zeros: o,
            setLength: a,
            setLengthRight: function (e, t) {
                return a(e, t, !0)
            },
            isHexString: c,
            stripHexPrefix: l,
            toBuffer: u,
            bufferToHex: function (e) {
                return "0x" + (e = u(e)).toString("hex")
            },
            keccak: function (e, t) {
                return e = u(e),
                    t || (t = 256),
                    i("keccak" + t).update(e).digest()
            }
        }
    },
    21629: function (e) {
        function t(e) {
            this.mode = n.MODE_8BIT_BYTE,
                this.data = e,
                this.parsedData = [];
            for (var t = 0, r = this.data.length; t < r; t++) {
                var i = []
                    , s = this.data.charCodeAt(t);
                s > 65536 ? (i[0] = 240 | (1835008 & s) >>> 18,
                    i[1] = 128 | (258048 & s) >>> 12,
                    i[2] = 128 | (4032 & s) >>> 6,
                    i[3] = 128 | 63 & s) : s > 2048 ? (i[0] = 224 | (61440 & s) >>> 12,
                        i[1] = 128 | (4032 & s) >>> 6,
                        i[2] = 128 | 63 & s) : s > 128 ? (i[0] = 192 | (1984 & s) >>> 6,
                            i[1] = 128 | 63 & s) : i[0] = s,
                    this.parsedData.push(i)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
                this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
                    this.parsedData.unshift(187),
                    this.parsedData.unshift(239))
        }
        function r(e, t) {
            this.typeNumber = e,
                this.errorCorrectLevel = t,
                this.modules = null,
                this.moduleCount = 0,
                this.dataCache = null,
                this.dataList = []
        }
        t.prototype = {
            getLength: function (e) {
                return this.parsedData.length
            },
            write: function (e) {
                for (var t = 0, r = this.parsedData.length; t < r; t++)
                    e.put(this.parsedData[t], 8)
            }
        },
            r.prototype = {
                addData: function (e) {
                    var r = new t(e);
                    this.dataList.push(r),
                        this.dataCache = null
                },
                isDark: function (e, t) {
                    if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
                        throw Error(e + "," + t);
                    return this.modules[e][t]
                },
                getModuleCount: function () {
                    return this.moduleCount
                },
                make: function () {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function (e, t) {
                    this.moduleCount = 4 * this.typeNumber + 17,
                        this.modules = Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++)
                            this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0),
                        this.setupPositionProbePattern(this.moduleCount - 7, 0),
                        this.setupPositionProbePattern(0, this.moduleCount - 7),
                        this.setupPositionAdjustPattern(),
                        this.setupTimingPattern(),
                        this.setupTypeInfo(e, t),
                        this.typeNumber >= 7 && this.setupTypeNumber(e),
                        null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                        this.mapData(this.dataCache, t)
                },
                setupPositionProbePattern: function (e, t) {
                    for (var r = -1; r <= 7; r++)
                        if (!(e + r <= -1) && !(this.moduleCount <= e + r))
                            for (var n = -1; n <= 7; n++)
                                t + n <= -1 || this.moduleCount <= t + n || (0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[e + r][t + n] = !0 : this.modules[e + r][t + n] = !1)
                },
                getBestMaskPattern: function () {
                    for (var e = 0, t = 0, r = 0; r < 8; r++) {
                        this.makeImpl(!0, r);
                        var n = o.getLostPoint(this);
                        (0 == r || e > n) && (e = n,
                            t = r)
                    }
                    return t
                },
                createMovieClip: function (e, t, r) {
                    var n = e.createEmptyMovieClip(t, r);
                    this.make();
                    for (var i = 0; i < this.modules.length; i++)
                        for (var s = 1 * i, o = 0; o < this.modules[i].length; o++) {
                            var a = 1 * o;
                            this.modules[i][o] && (n.beginFill(0, 100),
                                n.moveTo(a, s),
                                n.lineTo(a + 1, s),
                                n.lineTo(a + 1, s + 1),
                                n.lineTo(a, s + 1),
                                n.endFill())
                        }
                    return n
                },
                setupTimingPattern: function () {
                    for (var e = 8; e < this.moduleCount - 8; e++)
                        null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                    for (var t = 8; t < this.moduleCount - 8; t++)
                        null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
                },
                setupPositionAdjustPattern: function () {
                    for (var e = o.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                        for (var r = 0; r < e.length; r++) {
                            var n = e[t]
                                , i = e[r];
                            if (null == this.modules[n][i])
                                for (var s = -2; s <= 2; s++)
                                    for (var a = -2; a <= 2; a++)
                                        -2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a ? this.modules[n + s][i + a] = !0 : this.modules[n + s][i + a] = !1
                        }
                },
                setupTypeNumber: function (e) {
                    for (var t = o.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                        var n = !e && (t >> r & 1) == 1;
                        this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
                    }
                    for (var r = 0; r < 18; r++) {
                        var n = !e && (t >> r & 1) == 1;
                        this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
                    }
                },
                setupTypeInfo: function (e, t) {
                    for (var r = this.errorCorrectLevel << 3 | t, n = o.getBCHTypeInfo(r), i = 0; i < 15; i++) {
                        var s = !e && (n >> i & 1) == 1;
                        i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s
                    }
                    for (var i = 0; i < 15; i++) {
                        var s = !e && (n >> i & 1) == 1;
                        i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s
                    }
                    this.modules[this.moduleCount - 8][8] = !e
                },
                mapData: function (e, t) {
                    for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                        for (6 == a && a--; ;) {
                            for (var u = 0; u < 2; u++)
                                if (null == this.modules[n][a - u]) {
                                    var c = !1;
                                    s < e.length && (c = (e[s] >>> i & 1) == 1),
                                        o.getMask(t, n, a - u) && (c = !c),
                                        this.modules[n][a - u] = c,
                                        -1 == --i && (s++,
                                            i = 7)
                                }
                            if ((n += r) < 0 || this.moduleCount <= n) {
                                n -= r,
                                    r = -r;
                                break
                            }
                        }
                }
            },
            r.PAD0 = 236,
            r.PAD1 = 17,
            r.createData = function (e, t, n) {
                for (var i = l.getRSBlocks(e, t), s = new h, a = 0; a < n.length; a++) {
                    var u = n[a];
                    s.put(u.mode, 4),
                        s.put(u.getLength(), o.getLengthInBits(u.mode, e)),
                        u.write(s)
                }
                for (var c = 0, a = 0; a < i.length; a++)
                    c += i[a].dataCount;
                if (s.getLengthInBits() > 8 * c)
                    throw Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * c + ")");
                for (s.getLengthInBits() + 4 <= 8 * c && s.put(0, 4); s.getLengthInBits() % 8 != 0;)
                    s.putBit(!1);
                for (; !(s.getLengthInBits() >= 8 * c) && (s.put(r.PAD0, 8),
                    !(s.getLengthInBits() >= 8 * c));)
                    s.put(r.PAD1, 8);
                return r.createBytes(s, i)
            }
            ,
            r.createBytes = function (e, t) {
                for (var r = 0, n = 0, i = 0, s = Array(t.length), a = Array(t.length), u = 0; u < t.length; u++) {
                    var l = t[u].dataCount
                        , h = t[u].totalCount - l;
                    n = Math.max(n, l),
                        i = Math.max(i, h),
                        s[u] = Array(l);
                    for (var d = 0; d < s[u].length; d++)
                        s[u][d] = 255 & e.buffer[d + r];
                    r += l;
                    var f = o.getErrorCorrectPolynomial(h)
                        , p = new c(s[u], f.getLength() - 1).mod(f);
                    a[u] = Array(f.getLength() - 1);
                    for (var d = 0; d < a[u].length; d++) {
                        var g = d + p.getLength() - a[u].length;
                        a[u][d] = g >= 0 ? p.get(g) : 0
                    }
                }
                for (var m = 0, d = 0; d < t.length; d++)
                    m += t[d].totalCount;
                for (var y = Array(m), b = 0, d = 0; d < n; d++)
                    for (var u = 0; u < t.length; u++)
                        d < s[u].length && (y[b++] = s[u][d]);
                for (var d = 0; d < i; d++)
                    for (var u = 0; u < t.length; u++)
                        d < a[u].length && (y[b++] = a[u][d]);
                return y
            }
            ;
        for (var n = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, i = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, s = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, o = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
                for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;)
                    t ^= o.G15 << o.getBCHDigit(t) - o.getBCHDigit(o.G15);
                return (e << 10 | t) ^ o.G15_MASK
            },
            getBCHTypeNumber: function (e) {
                for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;)
                    t ^= o.G18 << o.getBCHDigit(t) - o.getBCHDigit(o.G18);
                return e << 12 | t
            },
            getBCHDigit: function (e) {
                for (var t = 0; 0 != e;)
                    t++,
                        e >>>= 1;
                return t
            },
            getPatternPosition: function (e) {
                return o.PATTERN_POSITION_TABLE[e - 1]
            },
            getMask: function (e, t, r) {
                switch (e) {
                    case s.PATTERN000:
                        return (t + r) % 2 == 0;
                    case s.PATTERN001:
                        return t % 2 == 0;
                    case s.PATTERN010:
                        return r % 3 == 0;
                    case s.PATTERN011:
                        return (t + r) % 3 == 0;
                    case s.PATTERN100:
                        return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                    case s.PATTERN101:
                        return t * r % 2 + t * r % 3 == 0;
                    case s.PATTERN110:
                        return (t * r % 2 + t * r % 3) % 2 == 0;
                    case s.PATTERN111:
                        return (t * r % 3 + (t + r) % 2) % 2 == 0;
                    default:
                        throw Error("bad maskPattern:" + e)
                }
            },
            getErrorCorrectPolynomial: function (e) {
                for (var t = new c([1], 0), r = 0; r < e; r++)
                    t = t.multiply(new c([1, a.gexp(r)], 0));
                return t
            },
            getLengthInBits: function (e, t) {
                if (1 <= t && t < 10)
                    switch (e) {
                        case n.MODE_NUMBER:
                            return 10;
                        case n.MODE_ALPHA_NUM:
                            return 9;
                        case n.MODE_8BIT_BYTE:
                        case n.MODE_KANJI:
                            return 8;
                        default:
                            throw Error("mode:" + e)
                    }
                else if (t < 27)
                    switch (e) {
                        case n.MODE_NUMBER:
                            return 12;
                        case n.MODE_ALPHA_NUM:
                            return 11;
                        case n.MODE_8BIT_BYTE:
                            return 16;
                        case n.MODE_KANJI:
                            return 10;
                        default:
                            throw Error("mode:" + e)
                    }
                else if (t < 41)
                    switch (e) {
                        case n.MODE_NUMBER:
                            return 14;
                        case n.MODE_ALPHA_NUM:
                            return 13;
                        case n.MODE_8BIT_BYTE:
                            return 16;
                        case n.MODE_KANJI:
                            return 12;
                        default:
                            throw Error("mode:" + e)
                    }
                else
                    throw Error("type:" + t)
            },
            getLostPoint: function (e) {
                for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
                    for (var i = 0; i < t; i++) {
                        for (var s = 0, o = e.isDark(n, i), a = -1; a <= 1; a++)
                            if (!(n + a < 0) && !(t <= n + a))
                                for (var u = -1; u <= 1; u++)
                                    !(i + u < 0) && !(t <= i + u) && (0 != a || 0 != u) && o == e.isDark(n + a, i + u) && s++;
                        s > 5 && (r += 3 + s - 5)
                    }
                for (var n = 0; n < t - 1; n++)
                    for (var i = 0; i < t - 1; i++) {
                        var c = 0;
                        e.isDark(n, i) && c++,
                            e.isDark(n + 1, i) && c++,
                            e.isDark(n, i + 1) && c++,
                            e.isDark(n + 1, i + 1) && c++,
                            (0 == c || 4 == c) && (r += 3)
                    }
                for (var n = 0; n < t; n++)
                    for (var i = 0; i < t - 6; i++)
                        e.isDark(n, i) && !e.isDark(n, i + 1) && e.isDark(n, i + 2) && e.isDark(n, i + 3) && e.isDark(n, i + 4) && !e.isDark(n, i + 5) && e.isDark(n, i + 6) && (r += 40);
                for (var i = 0; i < t; i++)
                    for (var n = 0; n < t - 6; n++)
                        e.isDark(n, i) && !e.isDark(n + 1, i) && e.isDark(n + 2, i) && e.isDark(n + 3, i) && e.isDark(n + 4, i) && !e.isDark(n + 5, i) && e.isDark(n + 6, i) && (r += 40);
                for (var l = 0, i = 0; i < t; i++)
                    for (var n = 0; n < t; n++)
                        e.isDark(n, i) && l++;
                return r + 10 * (Math.abs(100 * l / t / t - 50) / 5)
            }
        }, a = {
            glog: function (e) {
                if (e < 1)
                    throw Error("glog(" + e + ")");
                return a.LOG_TABLE[e]
            },
            gexp: function (e) {
                for (; e < 0;)
                    e += 255;
                for (; e >= 256;)
                    e -= 255;
                return a.EXP_TABLE[e]
            },
            EXP_TABLE: Array(256),
            LOG_TABLE: Array(256)
        }, u = 0; u < 8; u++)
            a.EXP_TABLE[u] = 1 << u;
        for (var u = 8; u < 256; u++)
            a.EXP_TABLE[u] = a.EXP_TABLE[u - 4] ^ a.EXP_TABLE[u - 5] ^ a.EXP_TABLE[u - 6] ^ a.EXP_TABLE[u - 8];
        for (var u = 0; u < 255; u++)
            a.LOG_TABLE[a.EXP_TABLE[u]] = u;
        function c(e, t) {
            if (void 0 == e.length)
                throw Error(e.length + "/" + t);
            for (var r = 0; r < e.length && 0 == e[r];)
                r++;
            this.num = Array(e.length - r + t);
            for (var n = 0; n < e.length - r; n++)
                this.num[n] = e[n + r]
        }
        function l(e, t) {
            this.totalCount = e,
                this.dataCount = t
        }
        function h() {
            this.buffer = [],
                this.length = 0
        }
        c.prototype = {
            get: function (e) {
                return this.num[e]
            },
            getLength: function () {
                return this.num.length
            },
            multiply: function (e) {
                for (var t = Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
                    for (var n = 0; n < e.getLength(); n++)
                        t[r + n] ^= a.gexp(a.glog(this.get(r)) + a.glog(e.get(n)));
                return new c(t, 0)
            },
            mod: function (e) {
                if (this.getLength() - e.getLength() < 0)
                    return this;
                for (var t = a.glog(this.get(0)) - a.glog(e.get(0)), r = Array(this.getLength()), n = 0; n < this.getLength(); n++)
                    r[n] = this.get(n);
                for (var n = 0; n < e.getLength(); n++)
                    r[n] ^= a.gexp(a.glog(e.get(n)) + t);
                return new c(r, 0).mod(e)
            }
        },
            l.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
            l.getRSBlocks = function (e, t) {
                var r = l.getRsBlockTable(e, t);
                if (void 0 == r)
                    throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var n = r.length / 3, i = [], s = 0; s < n; s++)
                    for (var o = r[3 * s + 0], a = r[3 * s + 1], u = r[3 * s + 2], c = 0; c < o; c++)
                        i.push(new l(a, u));
                return i
            }
            ,
            l.getRsBlockTable = function (e, t) {
                switch (t) {
                    case i.L:
                        return l.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
                    case i.M:
                        return l.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
                    case i.Q:
                        return l.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
                    case i.H:
                        return l.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
            ,
            h.prototype = {
                get: function (e) {
                    var t = Math.floor(e / 8);
                    return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
                },
                put: function (e, t) {
                    for (var r = 0; r < t; r++)
                        this.putBit((e >>> t - r - 1 & 1) == 1)
                },
                getLengthInBits: function () {
                    return this.length
                },
                putBit: function (e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0),
                        e && (this.buffer[t] |= 128 >>> this.length % 8),
                        this.length++
                }
            };
        var d = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
        function f(e) {
            if (this.options = {
                padding: 4,
                width: 256,
                height: 256,
                typeNumber: 4,
                color: "#000000",
                background: "#ffffff",
                ecl: "M",
                image: {
                    svg: "",
                    width: 0,
                    height: 0
                }
            },
                "string" == typeof e && (e = {
                    content: e
                }),
                e)
                for (var t in e)
                    this.options[t] = e[t];
            if ("string" != typeof this.options.content)
                throw Error("Expected 'content' as string!");
            if (0 === this.options.content.length)
                throw Error("Expected 'content' to be non-empty!");
            if (!(this.options.padding >= 0))
                throw Error("Expected 'padding' value to be non-negative!");
            if (!(this.options.width > 0) || !(this.options.height > 0))
                throw Error("Expected 'width' or 'height' value to be higher than zero!");
            var n = this.options.content
                , s = function (e, t) {
                    for (var r, n = (r = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (r.length != e ? 3 : 0), i = 1, s = 0, o = 0, a = d.length; o <= a; o++) {
                        var u = d[o];
                        if (!u)
                            throw Error("Content too long: expected " + s + " but got " + n);
                        switch (t) {
                            case "L":
                                s = u[0];
                                break;
                            case "M":
                                s = u[1];
                                break;
                            case "Q":
                                s = u[2];
                                break;
                            case "H":
                                s = u[3];
                                break;
                            default:
                                throw Error("Unknwon error correction level: " + t)
                        }
                        if (n <= s)
                            break;
                        i++
                    }
                    if (i > d.length)
                        throw Error("Content too long");
                    return i
                }(n, this.options.ecl)
                , o = function (e) {
                    switch (e) {
                        case "L":
                            return i.L;
                        case "M":
                            return i.M;
                        case "Q":
                            return i.Q;
                        case "H":
                            return i.H;
                        default:
                            throw Error("Unknwon error correction level: " + e)
                    }
                }(this.options.ecl);
            this.qrcode = new r(s, o),
                this.qrcode.addData(n),
                this.qrcode.make()
        }
        f.prototype.svg = function (e) {
            var t = this.options || {}
                , r = this.qrcode.modules;
            void 0 === e && (e = {
                container: t.container || "svg"
            });
            for (var n = void 0 === t.pretty || !!t.pretty, i = n ? "  " : "", s = n ? "\r\n" : "", o = t.width, a = t.height, u = r.length, c = o / (u + 2 * t.padding), l = a / (u + 2 * t.padding), h = void 0 !== t.join && !!t.join, d = void 0 !== t.swap && !!t.swap, f = void 0 === t.xmlDeclaration || !!t.xmlDeclaration, p = void 0 !== t.predefined && !!t.predefined, g = p ? i + '<defs><path id="qrmodule" d="M0 0 h' + l + " v" + c + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", m = i + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + s, y = "", b = "", v = 0; v < u; v++)
                for (var _ = 0; _ < u; _++)
                    if (r[_][v]) {
                        var w = _ * c + t.padding * c
                            , E = v * l + t.padding * l;
                        if (d) {
                            var S = w;
                            w = E,
                                E = S
                        }
                        if (h) {
                            var M = c + w
                                , x = l + E;
                            w = Number.isInteger(w) ? Number(w) : w.toFixed(2),
                                E = Number.isInteger(E) ? Number(E) : E.toFixed(2),
                                M = Number.isInteger(M) ? Number(M) : M.toFixed(2),
                                b += "M" + w + "," + E + " V" + (x = Number.isInteger(x) ? Number(x) : x.toFixed(2)) + " H" + M + " V" + E + " H" + w + " Z "
                        } else
                            p ? y += i + '<use x="' + w.toString() + '" y="' + E.toString() + '" href="#qrmodule" />' + s : y += i + '<rect x="' + w.toString() + '" y="' + E.toString() + '" width="' + c + '" height="' + l + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + s
                    }
            h && (y = i + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + b + '" />');
            let C = "";
            if (void 0 !== this.options.image && this.options.image.svg) {
                let e = o * this.options.image.width / 100
                    , t = a * this.options.image.height / 100;
                C += `<svg x="${o / 2 - e / 2}" y="${a / 2 - t / 2}" width="${e}" height="${t}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">` + (this.options.image.svg + s) + "</svg>"
            }
            var k = "";
            switch (e.container) {
                case "svg":
                    f && (k += '<?xml version="1.0" standalone="yes"?>' + s),
                        k += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + s + (g + m + y) + C + "</svg>";
                    break;
                case "svg-viewbox":
                    f && (k += '<?xml version="1.0" standalone="yes"?>' + s),
                        k += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + s + (g + m + y) + C + "</svg>";
                    break;
                case "g":
                    k += '<g width="' + o + '" height="' + a + '">' + s + (g + m + y) + C + "</g>";
                    break;
                default:
                    k += (g + m + y + C).replace(/^\s+/, "")
            }
            return k
        }
            ,
            e.exports = f
    },
    33675: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LIB_VERSION = void 0,
            t.LIB_VERSION = "3.7.2"
    },
    44152: function (e, t, r) {
        !function (e, t) {
            "use strict";
            function n(e, t) {
                if (!e)
                    throw Error(t || "Assertion failed")
            }
            function i(e, t) {
                e.super_ = t;
                var r = function () { };
                r.prototype = t.prototype,
                    e.prototype = new r,
                    e.prototype.constructor = e
            }
            function s(e, t, r) {
                if (s.isBN(e))
                    return e;
                this.negative = 0,
                    this.words = null,
                    this.length = 0,
                    this.red = null,
                    null !== e && (("le" === t || "be" === t) && (r = t,
                        t = 10),
                        this._init(e || 0, t || 10, r || "be"))
            }
            "object" == typeof e ? e.exports = s : t.BN = s,
                s.BN = s,
                s.wordSize = 26;
            try {
                h = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(21903).Buffer
            } catch (e) { }
            function o(e, t) {
                var r = e.charCodeAt(t);
                return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + e)
            }
            function a(e, t, r) {
                var n = o(e, r);
                return r - 1 >= t && (n |= o(e, r - 1) << 4),
                    n
            }
            function u(e, t, r, i) {
                for (var s = 0, o = 0, a = Math.min(e.length, r), u = t; u < a; u++) {
                    var c = e.charCodeAt(u) - 48;
                    s *= i,
                        o = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c,
                        n(c >= 0 && o < i, "Invalid character"),
                        s += o
                }
                return s
            }
            function c(e, t) {
                e.words = t.words,
                    e.length = t.length,
                    e.negative = t.negative,
                    e.red = t.red
            }
            if (s.isBN = function (e) {
                return e instanceof s || null !== e && "object" == typeof e && e.constructor.wordSize === s.wordSize && Array.isArray(e.words)
            }
                ,
                s.max = function (e, t) {
                    return e.cmp(t) > 0 ? e : t
                }
                ,
                s.min = function (e, t) {
                    return 0 > e.cmp(t) ? e : t
                }
                ,
                s.prototype._init = function (e, t, r) {
                    if ("number" == typeof e)
                        return this._initNumber(e, t, r);
                    if ("object" == typeof e)
                        return this._initArray(e, t, r);
                    "hex" === t && (t = 16),
                        n(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++,
                        this.negative = 1),
                        i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i),
                            "le" === r && this._initArray(this.toArray(), t, r)))
                }
                ,
                s.prototype._initNumber = function (e, t, r) {
                    e < 0 && (this.negative = 1,
                        e = -e),
                        e < 67108864 ? (this.words = [67108863 & e],
                            this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863],
                                this.length = 2) : (n(e < 9007199254740992),
                                    this.words = [67108863 & e, e / 67108864 & 67108863, 1],
                                    this.length = 3),
                        "le" === r && this._initArray(this.toArray(), t, r)
                }
                ,
                s.prototype._initArray = function (e, t, r) {
                    if (n("number" == typeof e.length),
                        e.length <= 0)
                        return this.words = [0],
                            this.length = 1,
                            this;
                    this.length = Math.ceil(e.length / 3),
                        this.words = Array(this.length);
                    for (var i, s, o = 0; o < this.length; o++)
                        this.words[o] = 0;
                    var a = 0;
                    if ("be" === r)
                        for (o = e.length - 1,
                            i = 0; o >= 0; o -= 3)
                            s = e[o] | e[o - 1] << 8 | e[o - 2] << 16,
                                this.words[i] |= s << a & 67108863,
                                this.words[i + 1] = s >>> 26 - a & 67108863,
                                (a += 24) >= 26 && (a -= 26,
                                    i++);
                    else if ("le" === r)
                        for (o = 0,
                            i = 0; o < e.length; o += 3)
                            s = e[o] | e[o + 1] << 8 | e[o + 2] << 16,
                                this.words[i] |= s << a & 67108863,
                                this.words[i + 1] = s >>> 26 - a & 67108863,
                                (a += 24) >= 26 && (a -= 26,
                                    i++);
                    return this._strip()
                }
                ,
                s.prototype._parseHex = function (e, t, r) {
                    this.length = Math.ceil((e.length - t) / 6),
                        this.words = Array(this.length);
                    for (var n, i = 0; i < this.length; i++)
                        this.words[i] = 0;
                    var s = 0
                        , o = 0;
                    if ("be" === r)
                        for (i = e.length - 1; i >= t; i -= 2)
                            n = a(e, t, i) << s,
                                this.words[o] |= 67108863 & n,
                                s >= 18 ? (s -= 18,
                                    o += 1,
                                    this.words[o] |= n >>> 26) : s += 8;
                    else
                        for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2)
                            n = a(e, t, i) << s,
                                this.words[o] |= 67108863 & n,
                                s >= 18 ? (s -= 18,
                                    o += 1,
                                    this.words[o] |= n >>> 26) : s += 8;
                    this._strip()
                }
                ,
                s.prototype._parseBase = function (e, t, r) {
                    this.words = [0],
                        this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= t)
                        n++;
                    n--,
                        i = i / t | 0;
                    for (var s = e.length - r, o = s % n, a = Math.min(s, s - o) + r, c = 0, l = r; l < a; l += n)
                        c = u(e, l, l + n, t),
                            this.imuln(i),
                            this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    if (0 !== o) {
                        var h = 1;
                        for (c = u(e, l, e.length, t),
                            l = 0; l < o; l++)
                            h *= t;
                        this.imuln(h),
                            this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                    }
                    this._strip()
                }
                ,
                s.prototype.copy = function (e) {
                    e.words = Array(this.length);
                    for (var t = 0; t < this.length; t++)
                        e.words[t] = this.words[t];
                    e.length = this.length,
                        e.negative = this.negative,
                        e.red = this.red
                }
                ,
                s.prototype._move = function (e) {
                    c(e, this)
                }
                ,
                s.prototype.clone = function () {
                    var e = new s(null);
                    return this.copy(e),
                        e
                }
                ,
                s.prototype._expand = function (e) {
                    for (; this.length < e;)
                        this.words[this.length++] = 0;
                    return this
                }
                ,
                s.prototype._strip = function () {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];)
                        this.length--;
                    return this._normSign()
                }
                ,
                s.prototype._normSign = function () {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                        this
                }
                ,
                "undefined" != typeof Symbol && "function" == typeof Symbol.for)
                try {
                    s.prototype[Symbol.for("nodejs.util.inspect.custom")] = l
                } catch (e) {
                    s.prototype.inspect = l
                }
            else
                s.prototype.inspect = l;
            function l() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var h, d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function g(e, t, r) {
                r.negative = t.negative ^ e.negative;
                var n = e.length + t.length | 0;
                r.length = n,
                    n = n - 1 | 0;
                var i = 0 | e.words[0]
                    , s = 0 | t.words[0]
                    , o = i * s
                    , a = 67108863 & o
                    , u = o / 67108864 | 0;
                r.words[0] = a;
                for (var c = 1; c < n; c++) {
                    for (var l = u >>> 26, h = 67108863 & u, d = Math.min(c, t.length - 1), f = Math.max(0, c - e.length + 1); f <= d; f++) {
                        var p = c - f | 0;
                        l += (o = (i = 0 | e.words[p]) * (s = 0 | t.words[f]) + h) / 67108864 | 0,
                            h = 67108863 & o
                    }
                    r.words[c] = 0 | h,
                        u = 0 | l
                }
                return 0 !== u ? r.words[c] = 0 | u : r.length--,
                    r._strip()
            }
            s.prototype.toString = function (e, t) {
                if (t = 0 | t || 1,
                    16 === (e = e || 10) || "hex" === e) {
                    r = "";
                    for (var r, i = 0, s = 0, o = 0; o < this.length; o++) {
                        var a = this.words[o]
                            , u = ((a << i | s) & 16777215).toString(16);
                        s = a >>> 24 - i & 16777215,
                            (i += 2) >= 26 && (i -= 26,
                                o--),
                            r = 0 !== s || o !== this.length - 1 ? d[6 - u.length] + u + r : u + r
                    }
                    for (0 !== s && (r = s.toString(16) + r); r.length % t != 0;)
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                        r
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var c = f[e]
                        , l = p[e];
                    r = "";
                    var h = this.clone();
                    for (h.negative = 0; !h.isZero();) {
                        var g = h.modrn(l).toString(e);
                        r = (h = h.idivn(l)).isZero() ? g + r : d[c - g.length] + g + r
                    }
                    for (this.isZero() && (r = "0" + r); r.length % t != 0;)
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                        r
                }
                n(!1, "Base should be between 2 and 36")
            }
                ,
                s.prototype.toNumber = function () {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                        0 !== this.negative ? -e : e
                }
                ,
                s.prototype.toJSON = function () {
                    return this.toString(16, 2)
                }
                ,
                h && (s.prototype.toBuffer = function (e, t) {
                    return this.toArrayLike(h, e, t)
                }
                ),
                s.prototype.toArray = function (e, t) {
                    return this.toArrayLike(Array, e, t)
                }
                ,
                s.prototype.toArrayLike = function (e, t, r) {
                    this._strip();
                    var i = this.byteLength()
                        , s = r || Math.max(1, i);
                    n(i <= s, "byte array longer than desired length"),
                        n(s > 0, "Requested array length <= 0");
                    var o = e.allocUnsafe ? e.allocUnsafe(s) : new e(s);
                    return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](o, i),
                        o
                }
                ,
                s.prototype._toArrayLikeLE = function (e, t) {
                    for (var r = 0, n = 0, i = 0, s = 0; i < this.length; i++) {
                        var o = this.words[i] << s | n;
                        e[r++] = 255 & o,
                            r < e.length && (e[r++] = o >> 8 & 255),
                            r < e.length && (e[r++] = o >> 16 & 255),
                            6 === s ? (r < e.length && (e[r++] = o >> 24 & 255),
                                n = 0,
                                s = 0) : (n = o >>> 24,
                                    s += 2)
                    }
                    if (r < e.length)
                        for (e[r++] = n; r < e.length;)
                            e[r++] = 0
                }
                ,
                s.prototype._toArrayLikeBE = function (e, t) {
                    for (var r = e.length - 1, n = 0, i = 0, s = 0; i < this.length; i++) {
                        var o = this.words[i] << s | n;
                        e[r--] = 255 & o,
                            r >= 0 && (e[r--] = o >> 8 & 255),
                            r >= 0 && (e[r--] = o >> 16 & 255),
                            6 === s ? (r >= 0 && (e[r--] = o >> 24 & 255),
                                n = 0,
                                s = 0) : (n = o >>> 24,
                                    s += 2)
                    }
                    if (r >= 0)
                        for (e[r--] = n; r >= 0;)
                            e[r--] = 0
                }
                ,
                Math.clz32 ? s.prototype._countBits = function (e) {
                    return 32 - Math.clz32(e)
                }
                    : s.prototype._countBits = function (e) {
                        var t = e
                            , r = 0;
                        return t >= 4096 && (r += 13,
                            t >>>= 13),
                            t >= 64 && (r += 7,
                                t >>>= 7),
                            t >= 8 && (r += 4,
                                t >>>= 4),
                            t >= 2 && (r += 2,
                                t >>>= 2),
                            r + t
                    }
                ,
                s.prototype._zeroBits = function (e) {
                    if (0 === e)
                        return 26;
                    var t = e
                        , r = 0;
                    return (8191 & t) == 0 && (r += 13,
                        t >>>= 13),
                        (127 & t) == 0 && (r += 7,
                            t >>>= 7),
                        (15 & t) == 0 && (r += 4,
                            t >>>= 4),
                        (3 & t) == 0 && (r += 2,
                            t >>>= 2),
                        (1 & t) == 0 && r++,
                        r
                }
                ,
                s.prototype.bitLength = function () {
                    var e = this.words[this.length - 1]
                        , t = this._countBits(e);
                    return (this.length - 1) * 26 + t
                }
                ,
                s.prototype.zeroBits = function () {
                    if (this.isZero())
                        return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r,
                            26 !== r)
                            break
                    }
                    return e
                }
                ,
                s.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8)
                }
                ,
                s.prototype.toTwos = function (e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }
                ,
                s.prototype.fromTwos = function (e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }
                ,
                s.prototype.isNeg = function () {
                    return 0 !== this.negative
                }
                ,
                s.prototype.neg = function () {
                    return this.clone().ineg()
                }
                ,
                s.prototype.ineg = function () {
                    return this.isZero() || (this.negative ^= 1),
                        this
                }
                ,
                s.prototype.iuor = function (e) {
                    for (; this.length < e.length;)
                        this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++)
                        this.words[t] = this.words[t] | e.words[t];
                    return this._strip()
                }
                ,
                s.prototype.ior = function (e) {
                    return n((this.negative | e.negative) == 0),
                        this.iuor(e)
                }
                ,
                s.prototype.or = function (e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }
                ,
                s.prototype.uor = function (e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }
                ,
                s.prototype.iuand = function (e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++)
                        this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length,
                        this._strip()
                }
                ,
                s.prototype.iand = function (e) {
                    return n((this.negative | e.negative) == 0),
                        this.iuand(e)
                }
                ,
                s.prototype.and = function (e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }
                ,
                s.prototype.uand = function (e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }
                ,
                s.prototype.iuxor = function (e) {
                    this.length > e.length ? (t = this,
                        r = e) : (t = e,
                            r = this);
                    for (var t, r, n = 0; n < r.length; n++)
                        this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++)
                            this.words[n] = t.words[n];
                    return this.length = t.length,
                        this._strip()
                }
                ,
                s.prototype.ixor = function (e) {
                    return n((this.negative | e.negative) == 0),
                        this.iuxor(e)
                }
                ,
                s.prototype.xor = function (e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }
                ,
                s.prototype.uxor = function (e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }
                ,
                s.prototype.inotn = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26)
                        , r = e % 26;
                    this._expand(t),
                        r > 0 && t--;
                    for (var i = 0; i < t; i++)
                        this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r),
                        this._strip()
                }
                ,
                s.prototype.notn = function (e) {
                    return this.clone().inotn(e)
                }
                ,
                s.prototype.setn = function (e, t) {
                    n("number" == typeof e && e >= 0);
                    var r = e / 26 | 0
                        , i = e % 26;
                    return this._expand(r + 1),
                        t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i),
                        this._strip()
                }
                ,
                s.prototype.iadd = function (e) {
                    if (0 !== this.negative && 0 === e.negative)
                        return this.negative = 0,
                            t = this.isub(e),
                            this.negative ^= 1,
                            this._normSign();
                    if (0 === this.negative && 0 !== e.negative)
                        return e.negative = 0,
                            t = this.isub(e),
                            e.negative = 1,
                            t._normSign();
                    this.length > e.length ? (r = this,
                        n = e) : (r = e,
                            n = this);
                    for (var t, r, n, i = 0, s = 0; s < n.length; s++)
                        t = (0 | r.words[s]) + (0 | n.words[s]) + i,
                            this.words[s] = 67108863 & t,
                            i = t >>> 26;
                    for (; 0 !== i && s < r.length; s++)
                        t = (0 | r.words[s]) + i,
                            this.words[s] = 67108863 & t,
                            i = t >>> 26;
                    if (this.length = r.length,
                        0 !== i)
                        this.words[this.length] = i,
                            this.length++;
                    else if (r !== this)
                        for (; s < r.length; s++)
                            this.words[s] = r.words[s];
                    return this
                }
                ,
                s.prototype.add = function (e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0,
                        t = this.sub(e),
                        e.negative ^= 1,
                        t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0,
                            t = e.sub(this),
                            this.negative = 1,
                            t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }
                ,
                s.prototype.isub = function (e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t, r, n = this.iadd(e);
                        return e.negative = 1,
                            n._normSign()
                    }
                    if (0 !== this.negative)
                        return this.negative = 0,
                            this.iadd(e),
                            this.negative = 1,
                            this._normSign();
                    var i = this.cmp(e);
                    if (0 === i)
                        return this.negative = 0,
                            this.length = 1,
                            this.words[0] = 0,
                            this;
                    i > 0 ? (t = this,
                        r = e) : (t = e,
                            r = this);
                    for (var s = 0, o = 0; o < r.length; o++)
                        s = (n = (0 | t.words[o]) - (0 | r.words[o]) + s) >> 26,
                            this.words[o] = 67108863 & n;
                    for (; 0 !== s && o < t.length; o++)
                        s = (n = (0 | t.words[o]) + s) >> 26,
                            this.words[o] = 67108863 & n;
                    if (0 === s && o < t.length && t !== this)
                        for (; o < t.length; o++)
                            this.words[o] = t.words[o];
                    return this.length = Math.max(this.length, o),
                        t !== this && (this.negative = 1),
                        this._strip()
                }
                ,
                s.prototype.sub = function (e) {
                    return this.clone().isub(e)
                }
                ;
            var m = function (e, t, r) {
                var n, i, s, o = e.words, a = t.words, u = r.words, c = 0, l = 0 | o[0], h = 8191 & l, d = l >>> 13, f = 0 | o[1], p = 8191 & f, g = f >>> 13, m = 0 | o[2], y = 8191 & m, b = m >>> 13, v = 0 | o[3], _ = 8191 & v, w = v >>> 13, E = 0 | o[4], S = 8191 & E, M = E >>> 13, x = 0 | o[5], C = 8191 & x, k = x >>> 13, I = 0 | o[6], R = 8191 & I, N = I >>> 13, A = 0 | o[7], O = 8191 & A, L = A >>> 13, T = 0 | o[8], j = 8191 & T, P = T >>> 13, D = 0 | o[9], B = 8191 & D, F = D >>> 13, $ = 0 | a[0], V = 8191 & $, z = $ >>> 13, H = 0 | a[1], W = 8191 & H, U = H >>> 13, q = 0 | a[2], J = 8191 & q, G = q >>> 13, Z = 0 | a[3], Q = 8191 & Z, Y = Z >>> 13, K = 0 | a[4], X = 8191 & K, ee = K >>> 13, et = 0 | a[5], er = 8191 & et, en = et >>> 13, ei = 0 | a[6], es = 8191 & ei, eo = ei >>> 13, ea = 0 | a[7], eu = 8191 & ea, ec = ea >>> 13, el = 0 | a[8], eh = 8191 & el, ed = el >>> 13, ef = 0 | a[9], ep = 8191 & ef, eg = ef >>> 13;
                r.negative = e.negative ^ t.negative,
                    r.length = 19;
                var em = (c + (n = Math.imul(h, V)) | 0) + ((8191 & (i = (i = Math.imul(h, z)) + Math.imul(d, V) | 0)) << 13) | 0;
                c = ((s = Math.imul(d, z)) + (i >>> 13) | 0) + (em >>> 26) | 0,
                    em &= 67108863,
                    n = Math.imul(p, V),
                    i = (i = Math.imul(p, z)) + Math.imul(g, V) | 0,
                    s = Math.imul(g, z);
                var ey = (c + (n = n + Math.imul(h, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, U) | 0) + Math.imul(d, W) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, U) | 0) + (i >>> 13) | 0) + (ey >>> 26) | 0,
                    ey &= 67108863,
                    n = Math.imul(y, V),
                    i = (i = Math.imul(y, z)) + Math.imul(b, V) | 0,
                    s = Math.imul(b, z),
                    n = n + Math.imul(p, W) | 0,
                    i = (i = i + Math.imul(p, U) | 0) + Math.imul(g, W) | 0,
                    s = s + Math.imul(g, U) | 0;
                var eb = (c + (n = n + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, G) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, G) | 0) + (i >>> 13) | 0) + (eb >>> 26) | 0,
                    eb &= 67108863,
                    n = Math.imul(_, V),
                    i = (i = Math.imul(_, z)) + Math.imul(w, V) | 0,
                    s = Math.imul(w, z),
                    n = n + Math.imul(y, W) | 0,
                    i = (i = i + Math.imul(y, U) | 0) + Math.imul(b, W) | 0,
                    s = s + Math.imul(b, U) | 0,
                    n = n + Math.imul(p, J) | 0,
                    i = (i = i + Math.imul(p, G) | 0) + Math.imul(g, J) | 0,
                    s = s + Math.imul(g, G) | 0;
                var ev = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, Y) | 0) + (i >>> 13) | 0) + (ev >>> 26) | 0,
                    ev &= 67108863,
                    n = Math.imul(S, V),
                    i = (i = Math.imul(S, z)) + Math.imul(M, V) | 0,
                    s = Math.imul(M, z),
                    n = n + Math.imul(_, W) | 0,
                    i = (i = i + Math.imul(_, U) | 0) + Math.imul(w, W) | 0,
                    s = s + Math.imul(w, U) | 0,
                    n = n + Math.imul(y, J) | 0,
                    i = (i = i + Math.imul(y, G) | 0) + Math.imul(b, J) | 0,
                    s = s + Math.imul(b, G) | 0,
                    n = n + Math.imul(p, Q) | 0,
                    i = (i = i + Math.imul(p, Y) | 0) + Math.imul(g, Q) | 0,
                    s = s + Math.imul(g, Y) | 0;
                var e_ = (c + (n = n + Math.imul(h, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, ee) | 0) + (i >>> 13) | 0) + (e_ >>> 26) | 0,
                    e_ &= 67108863,
                    n = Math.imul(C, V),
                    i = (i = Math.imul(C, z)) + Math.imul(k, V) | 0,
                    s = Math.imul(k, z),
                    n = n + Math.imul(S, W) | 0,
                    i = (i = i + Math.imul(S, U) | 0) + Math.imul(M, W) | 0,
                    s = s + Math.imul(M, U) | 0,
                    n = n + Math.imul(_, J) | 0,
                    i = (i = i + Math.imul(_, G) | 0) + Math.imul(w, J) | 0,
                    s = s + Math.imul(w, G) | 0,
                    n = n + Math.imul(y, Q) | 0,
                    i = (i = i + Math.imul(y, Y) | 0) + Math.imul(b, Q) | 0,
                    s = s + Math.imul(b, Y) | 0,
                    n = n + Math.imul(p, X) | 0,
                    i = (i = i + Math.imul(p, ee) | 0) + Math.imul(g, X) | 0,
                    s = s + Math.imul(g, ee) | 0;
                var ew = (c + (n = n + Math.imul(h, er) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, en) | 0) + Math.imul(d, er) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, en) | 0) + (i >>> 13) | 0) + (ew >>> 26) | 0,
                    ew &= 67108863,
                    n = Math.imul(R, V),
                    i = (i = Math.imul(R, z)) + Math.imul(N, V) | 0,
                    s = Math.imul(N, z),
                    n = n + Math.imul(C, W) | 0,
                    i = (i = i + Math.imul(C, U) | 0) + Math.imul(k, W) | 0,
                    s = s + Math.imul(k, U) | 0,
                    n = n + Math.imul(S, J) | 0,
                    i = (i = i + Math.imul(S, G) | 0) + Math.imul(M, J) | 0,
                    s = s + Math.imul(M, G) | 0,
                    n = n + Math.imul(_, Q) | 0,
                    i = (i = i + Math.imul(_, Y) | 0) + Math.imul(w, Q) | 0,
                    s = s + Math.imul(w, Y) | 0,
                    n = n + Math.imul(y, X) | 0,
                    i = (i = i + Math.imul(y, ee) | 0) + Math.imul(b, X) | 0,
                    s = s + Math.imul(b, ee) | 0,
                    n = n + Math.imul(p, er) | 0,
                    i = (i = i + Math.imul(p, en) | 0) + Math.imul(g, er) | 0,
                    s = s + Math.imul(g, en) | 0;
                var eE = (c + (n = n + Math.imul(h, es) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, eo) | 0) + Math.imul(d, es) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, eo) | 0) + (i >>> 13) | 0) + (eE >>> 26) | 0,
                    eE &= 67108863,
                    n = Math.imul(O, V),
                    i = (i = Math.imul(O, z)) + Math.imul(L, V) | 0,
                    s = Math.imul(L, z),
                    n = n + Math.imul(R, W) | 0,
                    i = (i = i + Math.imul(R, U) | 0) + Math.imul(N, W) | 0,
                    s = s + Math.imul(N, U) | 0,
                    n = n + Math.imul(C, J) | 0,
                    i = (i = i + Math.imul(C, G) | 0) + Math.imul(k, J) | 0,
                    s = s + Math.imul(k, G) | 0,
                    n = n + Math.imul(S, Q) | 0,
                    i = (i = i + Math.imul(S, Y) | 0) + Math.imul(M, Q) | 0,
                    s = s + Math.imul(M, Y) | 0,
                    n = n + Math.imul(_, X) | 0,
                    i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, X) | 0,
                    s = s + Math.imul(w, ee) | 0,
                    n = n + Math.imul(y, er) | 0,
                    i = (i = i + Math.imul(y, en) | 0) + Math.imul(b, er) | 0,
                    s = s + Math.imul(b, en) | 0,
                    n = n + Math.imul(p, es) | 0,
                    i = (i = i + Math.imul(p, eo) | 0) + Math.imul(g, es) | 0,
                    s = s + Math.imul(g, eo) | 0;
                var eS = (c + (n = n + Math.imul(h, eu) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ec) | 0) + Math.imul(d, eu) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, ec) | 0) + (i >>> 13) | 0) + (eS >>> 26) | 0,
                    eS &= 67108863,
                    n = Math.imul(j, V),
                    i = (i = Math.imul(j, z)) + Math.imul(P, V) | 0,
                    s = Math.imul(P, z),
                    n = n + Math.imul(O, W) | 0,
                    i = (i = i + Math.imul(O, U) | 0) + Math.imul(L, W) | 0,
                    s = s + Math.imul(L, U) | 0,
                    n = n + Math.imul(R, J) | 0,
                    i = (i = i + Math.imul(R, G) | 0) + Math.imul(N, J) | 0,
                    s = s + Math.imul(N, G) | 0,
                    n = n + Math.imul(C, Q) | 0,
                    i = (i = i + Math.imul(C, Y) | 0) + Math.imul(k, Q) | 0,
                    s = s + Math.imul(k, Y) | 0,
                    n = n + Math.imul(S, X) | 0,
                    i = (i = i + Math.imul(S, ee) | 0) + Math.imul(M, X) | 0,
                    s = s + Math.imul(M, ee) | 0,
                    n = n + Math.imul(_, er) | 0,
                    i = (i = i + Math.imul(_, en) | 0) + Math.imul(w, er) | 0,
                    s = s + Math.imul(w, en) | 0,
                    n = n + Math.imul(y, es) | 0,
                    i = (i = i + Math.imul(y, eo) | 0) + Math.imul(b, es) | 0,
                    s = s + Math.imul(b, eo) | 0,
                    n = n + Math.imul(p, eu) | 0,
                    i = (i = i + Math.imul(p, ec) | 0) + Math.imul(g, eu) | 0,
                    s = s + Math.imul(g, ec) | 0;
                var eM = (c + (n = n + Math.imul(h, eh) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ed) | 0) + Math.imul(d, eh) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, ed) | 0) + (i >>> 13) | 0) + (eM >>> 26) | 0,
                    eM &= 67108863,
                    n = Math.imul(B, V),
                    i = (i = Math.imul(B, z)) + Math.imul(F, V) | 0,
                    s = Math.imul(F, z),
                    n = n + Math.imul(j, W) | 0,
                    i = (i = i + Math.imul(j, U) | 0) + Math.imul(P, W) | 0,
                    s = s + Math.imul(P, U) | 0,
                    n = n + Math.imul(O, J) | 0,
                    i = (i = i + Math.imul(O, G) | 0) + Math.imul(L, J) | 0,
                    s = s + Math.imul(L, G) | 0,
                    n = n + Math.imul(R, Q) | 0,
                    i = (i = i + Math.imul(R, Y) | 0) + Math.imul(N, Q) | 0,
                    s = s + Math.imul(N, Y) | 0,
                    n = n + Math.imul(C, X) | 0,
                    i = (i = i + Math.imul(C, ee) | 0) + Math.imul(k, X) | 0,
                    s = s + Math.imul(k, ee) | 0,
                    n = n + Math.imul(S, er) | 0,
                    i = (i = i + Math.imul(S, en) | 0) + Math.imul(M, er) | 0,
                    s = s + Math.imul(M, en) | 0,
                    n = n + Math.imul(_, es) | 0,
                    i = (i = i + Math.imul(_, eo) | 0) + Math.imul(w, es) | 0,
                    s = s + Math.imul(w, eo) | 0,
                    n = n + Math.imul(y, eu) | 0,
                    i = (i = i + Math.imul(y, ec) | 0) + Math.imul(b, eu) | 0,
                    s = s + Math.imul(b, ec) | 0,
                    n = n + Math.imul(p, eh) | 0,
                    i = (i = i + Math.imul(p, ed) | 0) + Math.imul(g, eh) | 0,
                    s = s + Math.imul(g, ed) | 0;
                var ex = (c + (n = n + Math.imul(h, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, eg) | 0) + Math.imul(d, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(d, eg) | 0) + (i >>> 13) | 0) + (ex >>> 26) | 0,
                    ex &= 67108863,
                    n = Math.imul(B, W),
                    i = (i = Math.imul(B, U)) + Math.imul(F, W) | 0,
                    s = Math.imul(F, U),
                    n = n + Math.imul(j, J) | 0,
                    i = (i = i + Math.imul(j, G) | 0) + Math.imul(P, J) | 0,
                    s = s + Math.imul(P, G) | 0,
                    n = n + Math.imul(O, Q) | 0,
                    i = (i = i + Math.imul(O, Y) | 0) + Math.imul(L, Q) | 0,
                    s = s + Math.imul(L, Y) | 0,
                    n = n + Math.imul(R, X) | 0,
                    i = (i = i + Math.imul(R, ee) | 0) + Math.imul(N, X) | 0,
                    s = s + Math.imul(N, ee) | 0,
                    n = n + Math.imul(C, er) | 0,
                    i = (i = i + Math.imul(C, en) | 0) + Math.imul(k, er) | 0,
                    s = s + Math.imul(k, en) | 0,
                    n = n + Math.imul(S, es) | 0,
                    i = (i = i + Math.imul(S, eo) | 0) + Math.imul(M, es) | 0,
                    s = s + Math.imul(M, eo) | 0,
                    n = n + Math.imul(_, eu) | 0,
                    i = (i = i + Math.imul(_, ec) | 0) + Math.imul(w, eu) | 0,
                    s = s + Math.imul(w, ec) | 0,
                    n = n + Math.imul(y, eh) | 0,
                    i = (i = i + Math.imul(y, ed) | 0) + Math.imul(b, eh) | 0,
                    s = s + Math.imul(b, ed) | 0;
                var eC = (c + (n = n + Math.imul(p, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, eg) | 0) + Math.imul(g, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(g, eg) | 0) + (i >>> 13) | 0) + (eC >>> 26) | 0,
                    eC &= 67108863,
                    n = Math.imul(B, J),
                    i = (i = Math.imul(B, G)) + Math.imul(F, J) | 0,
                    s = Math.imul(F, G),
                    n = n + Math.imul(j, Q) | 0,
                    i = (i = i + Math.imul(j, Y) | 0) + Math.imul(P, Q) | 0,
                    s = s + Math.imul(P, Y) | 0,
                    n = n + Math.imul(O, X) | 0,
                    i = (i = i + Math.imul(O, ee) | 0) + Math.imul(L, X) | 0,
                    s = s + Math.imul(L, ee) | 0,
                    n = n + Math.imul(R, er) | 0,
                    i = (i = i + Math.imul(R, en) | 0) + Math.imul(N, er) | 0,
                    s = s + Math.imul(N, en) | 0,
                    n = n + Math.imul(C, es) | 0,
                    i = (i = i + Math.imul(C, eo) | 0) + Math.imul(k, es) | 0,
                    s = s + Math.imul(k, eo) | 0,
                    n = n + Math.imul(S, eu) | 0,
                    i = (i = i + Math.imul(S, ec) | 0) + Math.imul(M, eu) | 0,
                    s = s + Math.imul(M, ec) | 0,
                    n = n + Math.imul(_, eh) | 0,
                    i = (i = i + Math.imul(_, ed) | 0) + Math.imul(w, eh) | 0,
                    s = s + Math.imul(w, ed) | 0;
                var ek = (c + (n = n + Math.imul(y, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, eg) | 0) + Math.imul(b, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(b, eg) | 0) + (i >>> 13) | 0) + (ek >>> 26) | 0,
                    ek &= 67108863,
                    n = Math.imul(B, Q),
                    i = (i = Math.imul(B, Y)) + Math.imul(F, Q) | 0,
                    s = Math.imul(F, Y),
                    n = n + Math.imul(j, X) | 0,
                    i = (i = i + Math.imul(j, ee) | 0) + Math.imul(P, X) | 0,
                    s = s + Math.imul(P, ee) | 0,
                    n = n + Math.imul(O, er) | 0,
                    i = (i = i + Math.imul(O, en) | 0) + Math.imul(L, er) | 0,
                    s = s + Math.imul(L, en) | 0,
                    n = n + Math.imul(R, es) | 0,
                    i = (i = i + Math.imul(R, eo) | 0) + Math.imul(N, es) | 0,
                    s = s + Math.imul(N, eo) | 0,
                    n = n + Math.imul(C, eu) | 0,
                    i = (i = i + Math.imul(C, ec) | 0) + Math.imul(k, eu) | 0,
                    s = s + Math.imul(k, ec) | 0,
                    n = n + Math.imul(S, eh) | 0,
                    i = (i = i + Math.imul(S, ed) | 0) + Math.imul(M, eh) | 0,
                    s = s + Math.imul(M, ed) | 0;
                var eI = (c + (n = n + Math.imul(_, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, eg) | 0) + Math.imul(w, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(w, eg) | 0) + (i >>> 13) | 0) + (eI >>> 26) | 0,
                    eI &= 67108863,
                    n = Math.imul(B, X),
                    i = (i = Math.imul(B, ee)) + Math.imul(F, X) | 0,
                    s = Math.imul(F, ee),
                    n = n + Math.imul(j, er) | 0,
                    i = (i = i + Math.imul(j, en) | 0) + Math.imul(P, er) | 0,
                    s = s + Math.imul(P, en) | 0,
                    n = n + Math.imul(O, es) | 0,
                    i = (i = i + Math.imul(O, eo) | 0) + Math.imul(L, es) | 0,
                    s = s + Math.imul(L, eo) | 0,
                    n = n + Math.imul(R, eu) | 0,
                    i = (i = i + Math.imul(R, ec) | 0) + Math.imul(N, eu) | 0,
                    s = s + Math.imul(N, ec) | 0,
                    n = n + Math.imul(C, eh) | 0,
                    i = (i = i + Math.imul(C, ed) | 0) + Math.imul(k, eh) | 0,
                    s = s + Math.imul(k, ed) | 0;
                var eR = (c + (n = n + Math.imul(S, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, eg) | 0) + Math.imul(M, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(M, eg) | 0) + (i >>> 13) | 0) + (eR >>> 26) | 0,
                    eR &= 67108863,
                    n = Math.imul(B, er),
                    i = (i = Math.imul(B, en)) + Math.imul(F, er) | 0,
                    s = Math.imul(F, en),
                    n = n + Math.imul(j, es) | 0,
                    i = (i = i + Math.imul(j, eo) | 0) + Math.imul(P, es) | 0,
                    s = s + Math.imul(P, eo) | 0,
                    n = n + Math.imul(O, eu) | 0,
                    i = (i = i + Math.imul(O, ec) | 0) + Math.imul(L, eu) | 0,
                    s = s + Math.imul(L, ec) | 0,
                    n = n + Math.imul(R, eh) | 0,
                    i = (i = i + Math.imul(R, ed) | 0) + Math.imul(N, eh) | 0,
                    s = s + Math.imul(N, ed) | 0;
                var eN = (c + (n = n + Math.imul(C, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, eg) | 0) + Math.imul(k, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(k, eg) | 0) + (i >>> 13) | 0) + (eN >>> 26) | 0,
                    eN &= 67108863,
                    n = Math.imul(B, es),
                    i = (i = Math.imul(B, eo)) + Math.imul(F, es) | 0,
                    s = Math.imul(F, eo),
                    n = n + Math.imul(j, eu) | 0,
                    i = (i = i + Math.imul(j, ec) | 0) + Math.imul(P, eu) | 0,
                    s = s + Math.imul(P, ec) | 0,
                    n = n + Math.imul(O, eh) | 0,
                    i = (i = i + Math.imul(O, ed) | 0) + Math.imul(L, eh) | 0,
                    s = s + Math.imul(L, ed) | 0;
                var eA = (c + (n = n + Math.imul(R, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, eg) | 0) + Math.imul(N, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(N, eg) | 0) + (i >>> 13) | 0) + (eA >>> 26) | 0,
                    eA &= 67108863,
                    n = Math.imul(B, eu),
                    i = (i = Math.imul(B, ec)) + Math.imul(F, eu) | 0,
                    s = Math.imul(F, ec),
                    n = n + Math.imul(j, eh) | 0,
                    i = (i = i + Math.imul(j, ed) | 0) + Math.imul(P, eh) | 0,
                    s = s + Math.imul(P, ed) | 0;
                var eO = (c + (n = n + Math.imul(O, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, eg) | 0) + Math.imul(L, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(L, eg) | 0) + (i >>> 13) | 0) + (eO >>> 26) | 0,
                    eO &= 67108863,
                    n = Math.imul(B, eh),
                    i = (i = Math.imul(B, ed)) + Math.imul(F, eh) | 0,
                    s = Math.imul(F, ed);
                var eL = (c + (n = n + Math.imul(j, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(j, eg) | 0) + Math.imul(P, ep) | 0)) << 13) | 0;
                c = ((s = s + Math.imul(P, eg) | 0) + (i >>> 13) | 0) + (eL >>> 26) | 0,
                    eL &= 67108863;
                var eT = (c + (n = Math.imul(B, ep)) | 0) + ((8191 & (i = (i = Math.imul(B, eg)) + Math.imul(F, ep) | 0)) << 13) | 0;
                return c = ((s = Math.imul(F, eg)) + (i >>> 13) | 0) + (eT >>> 26) | 0,
                    eT &= 67108863,
                    u[0] = em,
                    u[1] = ey,
                    u[2] = eb,
                    u[3] = ev,
                    u[4] = e_,
                    u[5] = ew,
                    u[6] = eE,
                    u[7] = eS,
                    u[8] = eM,
                    u[9] = ex,
                    u[10] = eC,
                    u[11] = ek,
                    u[12] = eI,
                    u[13] = eR,
                    u[14] = eN,
                    u[15] = eA,
                    u[16] = eO,
                    u[17] = eL,
                    u[18] = eT,
                    0 !== c && (u[19] = c,
                        r.length++),
                    r
            };
            function y(e, t, r) {
                r.negative = t.negative ^ e.negative,
                    r.length = e.length + t.length;
                for (var n = 0, i = 0, s = 0; s < r.length - 1; s++) {
                    var o = i;
                    i = 0;
                    for (var a = 67108863 & n, u = Math.min(s, t.length - 1), c = Math.max(0, s - e.length + 1); c <= u; c++) {
                        var l = s - c
                            , h = (0 | e.words[l]) * (0 | t.words[c])
                            , d = 67108863 & h;
                        o = o + (h / 67108864 | 0) | 0,
                            a = 67108863 & (d = d + a | 0),
                            i += (o = o + (d >>> 26) | 0) >>> 26,
                            o &= 67108863
                    }
                    r.words[s] = a,
                        n = o,
                        o = i
                }
                return 0 !== n ? r.words[s] = n : r.length--,
                    r._strip()
            }
            function b(e, t) {
                this.x = e,
                    this.y = t
            }
            Math.imul || (m = g),
                s.prototype.mulTo = function (e, t) {
                    var r, n = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? m(this, e, t) : n < 63 ? g(this, e, t) : y(this, e, t)
                }
                ,
                b.prototype.makeRBT = function (e) {
                    for (var t = Array(e), r = s.prototype._countBits(e) - 1, n = 0; n < e; n++)
                        t[n] = this.revBin(n, r, e);
                    return t
                }
                ,
                b.prototype.revBin = function (e, t, r) {
                    if (0 === e || e === r - 1)
                        return e;
                    for (var n = 0, i = 0; i < t; i++)
                        n |= (1 & e) << t - i - 1,
                            e >>= 1;
                    return n
                }
                ,
                b.prototype.permute = function (e, t, r, n, i, s) {
                    for (var o = 0; o < s; o++)
                        n[o] = t[e[o]],
                            i[o] = r[e[o]]
                }
                ,
                b.prototype.transform = function (e, t, r, n, i, s) {
                    this.permute(s, e, t, r, n, i);
                    for (var o = 1; o < i; o <<= 1)
                        for (var a = o << 1, u = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a)
                            for (var h = u, d = c, f = 0; f < o; f++) {
                                var p = r[l + f]
                                    , g = n[l + f]
                                    , m = r[l + f + o]
                                    , y = n[l + f + o]
                                    , b = h * m - d * y;
                                y = h * y + d * m,
                                    m = b,
                                    r[l + f] = p + m,
                                    n[l + f] = g + y,
                                    r[l + f + o] = p - m,
                                    n[l + f + o] = g - y,
                                    f !== a && (b = u * h - c * d,
                                        d = u * d + c * h,
                                        h = b)
                            }
                }
                ,
                b.prototype.guessLen13b = function (e, t) {
                    var r = 1 | Math.max(t, e)
                        , n = 1 & r
                        , i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1)
                        i++;
                    return 1 << i + 1 + n
                }
                ,
                b.prototype.conjugate = function (e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1],
                                e[r - n - 1] = i,
                                i = t[n],
                                t[n] = -t[r - n - 1],
                                t[r - n - 1] = -i
                        }
                }
                ,
                b.prototype.normalize13b = function (e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i,
                            r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }
                ,
                b.prototype.convert13b = function (e, t, r, i) {
                    for (var s = 0, o = 0; o < t; o++)
                        s += 0 | e[o],
                            r[2 * o] = 8191 & s,
                            s >>>= 13,
                            r[2 * o + 1] = 8191 & s,
                            s >>>= 13;
                    for (o = 2 * t; o < i; ++o)
                        r[o] = 0;
                    n(0 === s),
                        n((-8192 & s) == 0)
                }
                ,
                b.prototype.stub = function (e) {
                    for (var t = Array(e), r = 0; r < e; r++)
                        t[r] = 0;
                    return t
                }
                ,
                b.prototype.mulp = function (e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length)
                        , i = this.makeRBT(n)
                        , s = this.stub(n)
                        , o = Array(n)
                        , a = Array(n)
                        , u = Array(n)
                        , c = Array(n)
                        , l = Array(n)
                        , h = Array(n)
                        , d = r.words;
                    d.length = n,
                        this.convert13b(e.words, e.length, o, n),
                        this.convert13b(t.words, t.length, c, n),
                        this.transform(o, s, a, u, n, i),
                        this.transform(c, s, l, h, n, i);
                    for (var f = 0; f < n; f++) {
                        var p = a[f] * l[f] - u[f] * h[f];
                        u[f] = a[f] * h[f] + u[f] * l[f],
                            a[f] = p
                    }
                    return this.conjugate(a, u, n),
                        this.transform(a, u, d, s, n, i),
                        this.conjugate(d, s, n),
                        this.normalize13b(d, n),
                        r.negative = e.negative ^ t.negative,
                        r.length = e.length + t.length,
                        r._strip()
                }
                ,
                s.prototype.mul = function (e) {
                    var t = new s(null);
                    return t.words = Array(this.length + e.length),
                        this.mulTo(e, t)
                }
                ,
                s.prototype.mulf = function (e) {
                    var t = new s(null);
                    return t.words = Array(this.length + e.length),
                        y(this, e, t)
                }
                ,
                s.prototype.imul = function (e) {
                    return this.clone().mulTo(e, this)
                }
                ,
                s.prototype.imuln = function (e) {
                    var t = e < 0;
                    t && (e = -e),
                        n("number" == typeof e),
                        n(e < 67108864);
                    for (var r = 0, i = 0; i < this.length; i++) {
                        var s = (0 | this.words[i]) * e
                            , o = (67108863 & s) + (67108863 & r);
                        r >>= 26,
                            r += (s / 67108864 | 0) + (o >>> 26),
                            this.words[i] = 67108863 & o
                    }
                    return 0 !== r && (this.words[i] = r,
                        this.length++),
                        t ? this.ineg() : this
                }
                ,
                s.prototype.muln = function (e) {
                    return this.clone().imuln(e)
                }
                ,
                s.prototype.sqr = function () {
                    return this.mul(this)
                }
                ,
                s.prototype.isqr = function () {
                    return this.imul(this.clone())
                }
                ,
                s.prototype.pow = function (e) {
                    var t = function (e) {
                        for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0
                                , i = r % 26;
                            t[r] = e.words[n] >>> i & 1
                        }
                        return t
                    }(e);
                    if (0 === t.length)
                        return new s(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++,
                        r = r.sqr())
                        ;
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++,
                            i = i.sqr())
                            0 !== t[n] && (r = r.mul(i));
                    return r
                }
                ,
                s.prototype.iushln = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t, r = e % 26, i = (e - r) / 26, s = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var o = 0;
                        for (t = 0; t < this.length; t++) {
                            var a = this.words[t] & s
                                , u = (0 | this.words[t]) - a << r;
                            this.words[t] = u | o,
                                o = a >>> 26 - r
                        }
                        o && (this.words[t] = o,
                            this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--)
                            this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++)
                            this.words[t] = 0;
                        this.length += i
                    }
                    return this._strip()
                }
                ,
                s.prototype.ishln = function (e) {
                    return n(0 === this.negative),
                        this.iushln(e)
                }
                ,
                s.prototype.iushrn = function (e, t, r) {
                    n("number" == typeof e && e >= 0),
                        i = t ? (t - t % 26) / 26 : 0;
                    var i, s = e % 26, o = Math.min((e - s) / 26, this.length), a = 67108863 ^ 67108863 >>> s << s, u = r;
                    if (i -= o,
                        i = Math.max(0, i),
                        u) {
                        for (var c = 0; c < o; c++)
                            u.words[c] = this.words[c];
                        u.length = o
                    }
                    if (0 === o)
                        ;
                    else if (this.length > o)
                        for (this.length -= o,
                            c = 0; c < this.length; c++)
                            this.words[c] = this.words[c + o];
                    else
                        this.words[0] = 0,
                            this.length = 1;
                    var l = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = l << 26 - s | h >>> s,
                            l = h & a
                    }
                    return u && 0 !== l && (u.words[u.length++] = l),
                        0 === this.length && (this.words[0] = 0,
                            this.length = 1),
                        this._strip()
                }
                ,
                s.prototype.ishrn = function (e, t, r) {
                    return n(0 === this.negative),
                        this.iushrn(e, t, r)
                }
                ,
                s.prototype.shln = function (e) {
                    return this.clone().ishln(e)
                }
                ,
                s.prototype.ushln = function (e) {
                    return this.clone().iushln(e)
                }
                ,
                s.prototype.shrn = function (e) {
                    return this.clone().ishrn(e)
                }
                ,
                s.prototype.ushrn = function (e) {
                    return this.clone().iushrn(e)
                }
                ,
                s.prototype.testn = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26
                        , r = (e - t) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << t)
                }
                ,
                s.prototype.imaskn = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26
                        , r = (e - t) / 26;
                    return (n(0 === this.negative, "imaskn works only with positive numbers"),
                        this.length <= r) ? this : (0 !== t && r++,
                            this.length = Math.min(r, this.length),
                            0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t),
                            this._strip())
                }
                ,
                s.prototype.maskn = function (e) {
                    return this.clone().imaskn(e)
                }
                ,
                s.prototype.iaddn = function (e) {
                    return (n("number" == typeof e),
                        n(e < 67108864),
                        e < 0) ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]),
                            this.negative = 0,
                            this) : (this.negative = 0,
                                this.isubn(e),
                                this.negative = 1,
                                this) : this._iaddn(e)
                }
                ,
                s.prototype._iaddn = function (e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                        this.words[t] -= 67108864,
                            t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1),
                        this
                }
                ,
                s.prototype.isubn = function (e) {
                    if (n("number" == typeof e),
                        n(e < 67108864),
                        e < 0)
                        return this.iaddn(-e);
                    if (0 !== this.negative)
                        return this.negative = 0,
                            this.iaddn(e),
                            this.negative = 1,
                            this;
                    if (this.words[0] -= e,
                        1 === this.length && this.words[0] < 0)
                        this.words[0] = -this.words[0],
                            this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++)
                            this.words[t] += 67108864,
                                this.words[t + 1] -= 1;
                    return this._strip()
                }
                ,
                s.prototype.addn = function (e) {
                    return this.clone().iaddn(e)
                }
                ,
                s.prototype.subn = function (e) {
                    return this.clone().isubn(e)
                }
                ,
                s.prototype.iabs = function () {
                    return this.negative = 0,
                        this
                }
                ,
                s.prototype.abs = function () {
                    return this.clone().iabs()
                }
                ,
                s.prototype._ishlnsubmul = function (e, t, r) {
                    var i, s, o = e.length + r;
                    this._expand(o);
                    var a = 0;
                    for (i = 0; i < e.length; i++) {
                        s = (0 | this.words[i + r]) + a;
                        var u = (0 | e.words[i]) * t;
                        s -= 67108863 & u,
                            a = (s >> 26) - (u / 67108864 | 0),
                            this.words[i + r] = 67108863 & s
                    }
                    for (; i < this.length - r; i++)
                        a = (s = (0 | this.words[i + r]) + a) >> 26,
                            this.words[i + r] = 67108863 & s;
                    if (0 === a)
                        return this._strip();
                    for (n(-1 === a),
                        a = 0,
                        i = 0; i < this.length; i++)
                        a = (s = -(0 | this.words[i]) + a) >> 26,
                            this.words[i] = 67108863 & s;
                    return this.negative = 1,
                        this._strip()
                }
                ,
                s.prototype._wordDiv = function (e, t) {
                    var r, n = this.length - e.length, i = this.clone(), o = e, a = 0 | o.words[o.length - 1];
                    0 != (n = 26 - this._countBits(a)) && (o = o.ushln(n),
                        i.iushln(n),
                        a = 0 | o.words[o.length - 1]);
                    var u = i.length - o.length;
                    if ("mod" !== t) {
                        (r = new s(null)).length = u + 1,
                            r.words = Array(r.length);
                        for (var c = 0; c < r.length; c++)
                            r.words[c] = 0
                    }
                    var l = i.clone()._ishlnsubmul(o, 1, u);
                    0 === l.negative && (i = l,
                        r && (r.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var d = (0 | i.words[o.length + h]) * 67108864 + (0 | i.words[o.length + h - 1]);
                        for (d = Math.min(d / a | 0, 67108863),
                            i._ishlnsubmul(o, d, h); 0 !== i.negative;)
                            d--,
                                i.negative = 0,
                                i._ishlnsubmul(o, 1, h),
                                i.isZero() || (i.negative ^= 1);
                        r && (r.words[h] = d)
                    }
                    return r && r._strip(),
                        i._strip(),
                        "div" !== t && 0 !== n && i.iushrn(n),
                    {
                        div: r || null,
                        mod: i
                    }
                }
                ,
                s.prototype.divmod = function (e, t, r) {
                    var i, o, a;
                    return (n(!e.isZero()),
                        this.isZero()) ? {
                        div: new s(0),
                        mod: new s(0)
                    } : 0 !== this.negative && 0 === e.negative ? (a = this.neg().divmod(e, t),
                        "mod" !== t && (i = a.div.neg()),
                        "div" !== t && (o = a.mod.neg(),
                            r && 0 !== o.negative && o.iadd(e)),
                    {
                        div: i,
                        mod: o
                    }) : 0 === this.negative && 0 !== e.negative ? (a = this.divmod(e.neg(), t),
                        "mod" !== t && (i = a.div.neg()),
                    {
                        div: i,
                        mod: a.mod
                    }) : (this.negative & e.negative) != 0 ? (a = this.neg().divmod(e.neg(), t),
                        "div" !== t && (o = a.mod.neg(),
                            r && 0 !== o.negative && o.isub(e)),
                    {
                        div: a.div,
                        mod: o
                    }) : e.length > this.length || 0 > this.cmp(e) ? {
                        div: new s(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new s(this.modrn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new s(this.modrn(e.words[0]))
                    } : this._wordDiv(e, t)
                }
                ,
                s.prototype.div = function (e) {
                    return this.divmod(e, "div", !1).div
                }
                ,
                s.prototype.mod = function (e) {
                    return this.divmod(e, "mod", !1).mod
                }
                ,
                s.prototype.umod = function (e) {
                    return this.divmod(e, "mod", !0).mod
                }
                ,
                s.prototype.divRound = function (e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero())
                        return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod
                        , n = e.ushrn(1)
                        , i = e.andln(1)
                        , s = r.cmp(n);
                    return s < 0 || 1 === i && 0 === s ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }
                ,
                s.prototype.modrn = function (e) {
                    var t = e < 0;
                    t && (e = -e),
                        n(e <= 67108863);
                    for (var r = 67108864 % e, i = 0, s = this.length - 1; s >= 0; s--)
                        i = (r * i + (0 | this.words[s])) % e;
                    return t ? -i : i
                }
                ,
                s.prototype.modn = function (e) {
                    return this.modrn(e)
                }
                ,
                s.prototype.idivn = function (e) {
                    var t = e < 0;
                    t && (e = -e),
                        n(e <= 67108863);
                    for (var r = 0, i = this.length - 1; i >= 0; i--) {
                        var s = (0 | this.words[i]) + 67108864 * r;
                        this.words[i] = s / e | 0,
                            r = s % e
                    }
                    return this._strip(),
                        t ? this.ineg() : this
                }
                ,
                s.prototype.divn = function (e) {
                    return this.clone().idivn(e)
                }
                ,
                s.prototype.egcd = function (e) {
                    n(0 === e.negative),
                        n(!e.isZero());
                    var t = this
                        , r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i = new s(1), o = new s(0), a = new s(0), u = new s(1), c = 0; t.isEven() && r.isEven();)
                        t.iushrn(1),
                            r.iushrn(1),
                            ++c;
                    for (var l = r.clone(), h = t.clone(); !t.isZero();) {
                        for (var d = 0, f = 1; (t.words[0] & f) == 0 && d < 26; ++d,
                            f <<= 1)
                            ;
                        if (d > 0)
                            for (t.iushrn(d); d-- > 0;)
                                (i.isOdd() || o.isOdd()) && (i.iadd(l),
                                    o.isub(h)),
                                    i.iushrn(1),
                                    o.iushrn(1);
                        for (var p = 0, g = 1; (r.words[0] & g) == 0 && p < 26; ++p,
                            g <<= 1)
                            ;
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)
                                (a.isOdd() || u.isOdd()) && (a.iadd(l),
                                    u.isub(h)),
                                    a.iushrn(1),
                                    u.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r),
                            i.isub(a),
                            o.isub(u)) : (r.isub(t),
                                a.isub(i),
                                u.isub(o))
                    }
                    return {
                        a: a,
                        b: u,
                        gcd: r.iushln(c)
                    }
                }
                ,
                s.prototype._invmp = function (e) {
                    n(0 === e.negative),
                        n(!e.isZero());
                    var t, r = this, i = e.clone();
                    r = 0 !== r.negative ? r.umod(e) : r.clone();
                    for (var o = new s(1), a = new s(0), u = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var c = 0, l = 1; (r.words[0] & l) == 0 && c < 26; ++c,
                            l <<= 1)
                            ;
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;)
                                o.isOdd() && o.iadd(u),
                                    o.iushrn(1);
                        for (var h = 0, d = 1; (i.words[0] & d) == 0 && h < 26; ++h,
                            d <<= 1)
                            ;
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;)
                                a.isOdd() && a.iadd(u),
                                    a.iushrn(1);
                        r.cmp(i) >= 0 ? (r.isub(i),
                            o.isub(a)) : (i.isub(r),
                                a.isub(o))
                    }
                    return 0 > (t = 0 === r.cmpn(1) ? o : a).cmpn(0) && t.iadd(e),
                        t
                }
                ,
                s.prototype.gcd = function (e) {
                    if (this.isZero())
                        return e.abs();
                    if (e.isZero())
                        return this.abs();
                    var t = this.clone()
                        , r = e.clone();
                    t.negative = 0,
                        r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++)
                        t.iushrn(1),
                            r.iushrn(1);
                    for (; ;) {
                        for (; t.isEven();)
                            t.iushrn(1);
                        for (; r.isEven();)
                            r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var s = t;
                            t = r,
                                r = s
                        } else if (0 === i || 0 === r.cmpn(1))
                            break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }
                ,
                s.prototype.invm = function (e) {
                    return this.egcd(e).a.umod(e)
                }
                ,
                s.prototype.isEven = function () {
                    return (1 & this.words[0]) == 0
                }
                ,
                s.prototype.isOdd = function () {
                    return (1 & this.words[0]) == 1
                }
                ,
                s.prototype.andln = function (e) {
                    return this.words[0] & e
                }
                ,
                s.prototype.bincn = function (e) {
                    n("number" == typeof e);
                    var t = e % 26
                        , r = (e - t) / 26
                        , i = 1 << t;
                    if (this.length <= r)
                        return this._expand(r + 1),
                            this.words[r] |= i,
                            this;
                    for (var s = i, o = r; 0 !== s && o < this.length; o++) {
                        var a = 0 | this.words[o];
                        a += s,
                            s = a >>> 26,
                            a &= 67108863,
                            this.words[o] = a
                    }
                    return 0 !== s && (this.words[o] = s,
                        this.length++),
                        this
                }
                ,
                s.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0]
                }
                ,
                s.prototype.cmpn = function (e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r)
                        return -1;
                    if (0 === this.negative && r)
                        return 1;
                    if (this._strip(),
                        this.length > 1)
                        t = 1;
                    else {
                        r && (e = -e),
                            n(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }
                ,
                s.prototype.cmp = function (e) {
                    if (0 !== this.negative && 0 === e.negative)
                        return -1;
                    if (0 === this.negative && 0 !== e.negative)
                        return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }
                ,
                s.prototype.ucmp = function (e) {
                    if (this.length > e.length)
                        return 1;
                    if (this.length < e.length)
                        return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r]
                            , i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }
                ,
                s.prototype.gtn = function (e) {
                    return 1 === this.cmpn(e)
                }
                ,
                s.prototype.gt = function (e) {
                    return 1 === this.cmp(e)
                }
                ,
                s.prototype.gten = function (e) {
                    return this.cmpn(e) >= 0
                }
                ,
                s.prototype.gte = function (e) {
                    return this.cmp(e) >= 0
                }
                ,
                s.prototype.ltn = function (e) {
                    return -1 === this.cmpn(e)
                }
                ,
                s.prototype.lt = function (e) {
                    return -1 === this.cmp(e)
                }
                ,
                s.prototype.lten = function (e) {
                    return 0 >= this.cmpn(e)
                }
                ,
                s.prototype.lte = function (e) {
                    return 0 >= this.cmp(e)
                }
                ,
                s.prototype.eqn = function (e) {
                    return 0 === this.cmpn(e)
                }
                ,
                s.prototype.eq = function (e) {
                    return 0 === this.cmp(e)
                }
                ,
                s.red = function (e) {
                    return new x(e)
                }
                ,
                s.prototype.toRed = function (e) {
                    return n(!this.red, "Already a number in reduction context"),
                        n(0 === this.negative, "red works only with positives"),
                        e.convertTo(this)._forceRed(e)
                }
                ,
                s.prototype.fromRed = function () {
                    return n(this.red, "fromRed works only with numbers in reduction context"),
                        this.red.convertFrom(this)
                }
                ,
                s.prototype._forceRed = function (e) {
                    return this.red = e,
                        this
                }
                ,
                s.prototype.forceRed = function (e) {
                    return n(!this.red, "Already a number in reduction context"),
                        this._forceRed(e)
                }
                ,
                s.prototype.redAdd = function (e) {
                    return n(this.red, "redAdd works only with red numbers"),
                        this.red.add(this, e)
                }
                ,
                s.prototype.redIAdd = function (e) {
                    return n(this.red, "redIAdd works only with red numbers"),
                        this.red.iadd(this, e)
                }
                ,
                s.prototype.redSub = function (e) {
                    return n(this.red, "redSub works only with red numbers"),
                        this.red.sub(this, e)
                }
                ,
                s.prototype.redISub = function (e) {
                    return n(this.red, "redISub works only with red numbers"),
                        this.red.isub(this, e)
                }
                ,
                s.prototype.redShl = function (e) {
                    return n(this.red, "redShl works only with red numbers"),
                        this.red.shl(this, e)
                }
                ,
                s.prototype.redMul = function (e) {
                    return n(this.red, "redMul works only with red numbers"),
                        this.red._verify2(this, e),
                        this.red.mul(this, e)
                }
                ,
                s.prototype.redIMul = function (e) {
                    return n(this.red, "redMul works only with red numbers"),
                        this.red._verify2(this, e),
                        this.red.imul(this, e)
                }
                ,
                s.prototype.redSqr = function () {
                    return n(this.red, "redSqr works only with red numbers"),
                        this.red._verify1(this),
                        this.red.sqr(this)
                }
                ,
                s.prototype.redISqr = function () {
                    return n(this.red, "redISqr works only with red numbers"),
                        this.red._verify1(this),
                        this.red.isqr(this)
                }
                ,
                s.prototype.redSqrt = function () {
                    return n(this.red, "redSqrt works only with red numbers"),
                        this.red._verify1(this),
                        this.red.sqrt(this)
                }
                ,
                s.prototype.redInvm = function () {
                    return n(this.red, "redInvm works only with red numbers"),
                        this.red._verify1(this),
                        this.red.invm(this)
                }
                ,
                s.prototype.redNeg = function () {
                    return n(this.red, "redNeg works only with red numbers"),
                        this.red._verify1(this),
                        this.red.neg(this)
                }
                ,
                s.prototype.redPow = function (e) {
                    return n(this.red && !e.red, "redPow(normalNum)"),
                        this.red._verify1(this),
                        this.red.pow(this, e)
                }
                ;
            var v = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function _(e, t) {
                this.name = e,
                    this.p = new s(t, 16),
                    this.n = this.p.bitLength(),
                    this.k = new s(1).iushln(this.n).isub(this.p),
                    this.tmp = this._tmp()
            }
            function w() {
                _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function E() {
                _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function S() {
                _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function M() {
                _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function x(e) {
                if ("string" == typeof e) {
                    var t = s._prime(e);
                    this.m = t.p,
                        this.prime = t
                } else
                    n(e.gtn(1), "modulus must be greater than 1"),
                        this.m = e,
                        this.prime = null
            }
            function C(e) {
                x.call(this, e),
                    this.shift = this.m.bitLength(),
                    this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                    this.r = new s(1).iushln(this.shift),
                    this.r2 = this.imod(this.r.sqr()),
                    this.rinv = this.r._invmp(this.m),
                    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                    this.minv = this.minv.umod(this.r),
                    this.minv = this.r.sub(this.minv)
            }
            _.prototype._tmp = function () {
                var e = new s(null);
                return e.words = Array(Math.ceil(this.n / 13)),
                    e
            }
                ,
                _.prototype.ireduce = function (e) {
                    var t, r = e;
                    do
                        this.split(r, this.tmp),
                            t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
                    while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0,
                        r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                        r
                }
                ,
                _.prototype.split = function (e, t) {
                    e.iushrn(this.n, 0, t)
                }
                ,
                _.prototype.imulK = function (e) {
                    return e.imul(this.k)
                }
                ,
                i(w, _),
                w.prototype.split = function (e, t) {
                    for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                        t.words[n] = e.words[n];
                    if (t.length = r,
                        e.length <= 9) {
                        e.words[0] = 0,
                            e.length = 1;
                        return
                    }
                    var i = e.words[9];
                    for (n = 10,
                        t.words[t.length++] = 4194303 & i; n < e.length; n++) {
                        var s = 0 | e.words[n];
                        e.words[n - 10] = (4194303 & s) << 4 | i >>> 22,
                            i = s
                    }
                    i >>>= 22,
                        e.words[n - 10] = i,
                        0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                }
                ,
                w.prototype.imulK = function (e) {
                    e.words[e.length] = 0,
                        e.words[e.length + 1] = 0,
                        e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n,
                            e.words[r] = 67108863 & t,
                            t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--,
                        0 === e.words[e.length - 1] && e.length--),
                        e
                }
                ,
                i(E, _),
                i(S, _),
                i(M, _),
                M.prototype.imulK = function (e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = (0 | e.words[r]) * 19 + t
                            , i = 67108863 & n;
                        n >>>= 26,
                            e.words[r] = i,
                            t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t),
                        e
                }
                ,
                s._prime = function (e) {
                    var t;
                    if (v[e])
                        return v[e];
                    if ("k256" === e)
                        t = new w;
                    else if ("p224" === e)
                        t = new E;
                    else if ("p192" === e)
                        t = new S;
                    else if ("p25519" === e)
                        t = new M;
                    else
                        throw Error("Unknown prime " + e);
                    return v[e] = t,
                        t
                }
                ,
                x.prototype._verify1 = function (e) {
                    n(0 === e.negative, "red works only with positives"),
                        n(e.red, "red works only with red numbers")
                }
                ,
                x.prototype._verify2 = function (e, t) {
                    n((e.negative | t.negative) == 0, "red works only with positives"),
                        n(e.red && e.red === t.red, "red works only with red numbers")
                }
                ,
                x.prototype.imod = function (e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : (c(e, e.umod(this.m)._forceRed(this)),
                        e)
                }
                ,
                x.prototype.neg = function (e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }
                ,
                x.prototype.add = function (e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m),
                        r._forceRed(this)
                }
                ,
                x.prototype.iadd = function (e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m),
                        r
                }
                ,
                x.prototype.sub = function (e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m),
                        r._forceRed(this)
                }
                ,
                x.prototype.isub = function (e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m),
                        r
                }
                ,
                x.prototype.shl = function (e, t) {
                    return this._verify1(e),
                        this.imod(e.ushln(t))
                }
                ,
                x.prototype.imul = function (e, t) {
                    return this._verify2(e, t),
                        this.imod(e.imul(t))
                }
                ,
                x.prototype.mul = function (e, t) {
                    return this._verify2(e, t),
                        this.imod(e.mul(t))
                }
                ,
                x.prototype.isqr = function (e) {
                    return this.imul(e, e.clone())
                }
                ,
                x.prototype.sqr = function (e) {
                    return this.mul(e, e)
                }
                ,
                x.prototype.sqrt = function (e) {
                    if (e.isZero())
                        return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 == 1),
                        3 === t) {
                        var r = this.m.add(new s(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1);)
                        o++,
                            i.iushrn(1);
                    n(!i.isZero());
                    var a = new s(1).toRed(this)
                        , u = a.redNeg()
                        , c = this.m.subn(1).iushrn(1)
                        , l = this.m.bitLength();
                    for (l = new s(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(u);)
                        l.redIAdd(u);
                    for (var h = this.pow(l, i), d = this.pow(e, i.addn(1).iushrn(1)), f = this.pow(e, i), p = o; 0 !== f.cmp(a);) {
                        for (var g = f, m = 0; 0 !== g.cmp(a); m++)
                            g = g.redSqr();
                        n(m < p);
                        var y = this.pow(h, new s(1).iushln(p - m - 1));
                        d = d.redMul(y),
                            h = y.redSqr(),
                            f = f.redMul(h),
                            p = m
                    }
                    return d
                }
                ,
                x.prototype.invm = function (e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0,
                        this.imod(t).redNeg()) : this.imod(t)
                }
                ,
                x.prototype.pow = function (e, t) {
                    if (t.isZero())
                        return new s(1).toRed(this);
                    if (0 === t.cmpn(1))
                        return e.clone();
                    var r = Array(16);
                    r[0] = new s(1).toRed(this),
                        r[1] = e;
                    for (var n = 2; n < r.length; n++)
                        r[n] = this.mul(r[n - 1], e);
                    var i = r[0]
                        , o = 0
                        , a = 0
                        , u = t.bitLength() % 26;
                    for (0 === u && (u = 26),
                        n = t.length - 1; n >= 0; n--) {
                        for (var c = t.words[n], l = u - 1; l >= 0; l--) {
                            var h = c >> l & 1;
                            if (i !== r[0] && (i = this.sqr(i)),
                                0 === h && 0 === o) {
                                a = 0;
                                continue
                            }
                            o <<= 1,
                                o |= h,
                                (4 == ++a || 0 === n && 0 === l) && (i = this.mul(i, r[o]),
                                    a = 0,
                                    o = 0)
                        }
                        u = 26
                    }
                    return i
                }
                ,
                x.prototype.convertTo = function (e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }
                ,
                x.prototype.convertFrom = function (e) {
                    var t = e.clone();
                    return t.red = null,
                        t
                }
                ,
                s.mont = function (e) {
                    return new C(e)
                }
                ,
                i(C, x),
                C.prototype.convertTo = function (e) {
                    return this.imod(e.ushln(this.shift))
                }
                ,
                C.prototype.convertFrom = function (e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null,
                        t
                }
                ,
                C.prototype.imul = function (e, t) {
                    if (e.isZero() || t.isZero())
                        return e.words[0] = 0,
                            e.length = 1,
                            e;
                    var r = e.imul(t)
                        , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                        , i = r.isub(n).iushrn(this.shift)
                        , s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
                        s._forceRed(this)
                }
                ,
                C.prototype.mul = function (e, t) {
                    if (e.isZero() || t.isZero())
                        return new s(0)._forceRed(this);
                    var r = e.mul(t)
                        , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                        , i = r.isub(n).iushrn(this.shift)
                        , o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
                        o._forceRed(this)
                }
                ,
                C.prototype.invm = function (e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
        }(e = r.nmd(e), this)
    },
    73201: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.BaseBlockTracker = void 0;
        let i = n(r(19394))
            , s = (e, t) => e + t
            , o = ["sync", "latest"];
        class a extends i.default {
            constructor(e) {
                super(),
                    this._blockResetDuration = e.blockResetDuration || 2e4,
                    this._currentBlock = null,
                    this._isRunning = !1,
                    this._onNewListener = this._onNewListener.bind(this),
                    this._onRemoveListener = this._onRemoveListener.bind(this),
                    this._resetCurrentBlock = this._resetCurrentBlock.bind(this),
                    this._setupInternalEvents()
            }
            async destroy() {
                this._cancelBlockResetTimeout(),
                    await this._maybeEnd(),
                    super.removeAllListeners()
            }
            isRunning() {
                return this._isRunning
            }
            getCurrentBlock() {
                return this._currentBlock
            }
            async getLatestBlock() {
                if (this._currentBlock)
                    return this._currentBlock;
                let e = await new Promise(e => this.once("latest", e));
                return e
            }
            removeAllListeners(e) {
                return e ? super.removeAllListeners(e) : super.removeAllListeners(),
                    this._setupInternalEvents(),
                    this._onRemoveListener(),
                    this
            }
            _setupInternalEvents() {
                this.removeListener("newListener", this._onNewListener),
                    this.removeListener("removeListener", this._onRemoveListener),
                    this.on("newListener", this._onNewListener),
                    this.on("removeListener", this._onRemoveListener)
            }
            _onNewListener(e) {
                o.includes(e) && this._maybeStart()
            }
            _onRemoveListener() {
                this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
            }
            async _maybeStart() {
                this._isRunning || (this._isRunning = !0,
                    this._cancelBlockResetTimeout(),
                    await this._start(),
                    this.emit("_started"))
            }
            async _maybeEnd() {
                this._isRunning && (this._isRunning = !1,
                    this._setupBlockResetTimeout(),
                    await this._end(),
                    this.emit("_ended"))
            }
            _getBlockTrackerEventCount() {
                return o.map(e => this.listenerCount(e)).reduce(s)
            }
            _newPotentialLatest(e) {
                let t = this._currentBlock;
                t && u(e) <= u(t) || this._setCurrentBlock(e)
            }
            _setCurrentBlock(e) {
                let t = this._currentBlock;
                this._currentBlock = e,
                    this.emit("latest", e),
                    this.emit("sync", {
                        oldBlock: t,
                        newBlock: e
                    })
            }
            _setupBlockResetTimeout() {
                this._cancelBlockResetTimeout(),
                    this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration),
                    this._blockResetTimeout.unref && this._blockResetTimeout.unref()
            }
            _cancelBlockResetTimeout() {
                this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
            }
            _resetCurrentBlock() {
                this._currentBlock = null
            }
        }
        function u(e) {
            return Number.parseInt(e, 16)
        }
        t.BaseBlockTracker = a
    },
    12887: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.PollingBlockTracker = void 0;
        let i = n(r(23420))
            , s = n(r(58693))
            , o = r(73201)
            , a = r(1589)
            , u = (0,
                a.createModuleLogger)(a.projectLogger, "polling-block-tracker")
            , c = (0,
                i.default)();
        class l extends o.BaseBlockTracker {
            constructor(e = {}) {
                var t;
                if (!e.provider)
                    throw Error("PollingBlockTracker - no provider specified.");
                super({
                    blockResetDuration: null !== (t = e.blockResetDuration) && void 0 !== t ? t : e.pollingInterval
                }),
                    this._provider = e.provider,
                    this._pollingInterval = e.pollingInterval || 2e4,
                    this._retryTimeout = e.retryTimeout || this._pollingInterval / 10,
                    this._keepEventLoopActive = void 0 === e.keepEventLoopActive || e.keepEventLoopActive,
                    this._setSkipCacheFlag = e.setSkipCacheFlag || !1
            }
            async checkForLatestBlock() {
                return await this._updateLatestBlock(),
                    await this.getLatestBlock()
            }
            async _start() {
                this._synchronize()
            }
            async _end() { }
            async _synchronize() {
                for (var e; this._isRunning;)
                    try {
                        await this._updateLatestBlock();
                        let e = h(this._pollingInterval, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"),
                            await e
                    } catch (n) {
                        let t = Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${null !== (e = n.stack) && void 0 !== e ? e : n}`);
                        try {
                            this.emit("error", t)
                        } catch (e) {
                            console.error(t)
                        }
                        let r = h(this._retryTimeout, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"),
                            await r
                    }
            }
            async _updateLatestBlock() {
                let e = await this._fetchLatestBlock();
                this._newPotentialLatest(e)
            }
            async _fetchLatestBlock() {
                let e = {
                    jsonrpc: "2.0",
                    id: c(),
                    method: "eth_blockNumber",
                    params: []
                };
                this._setSkipCacheFlag && (e.skipCache = !0),
                    u("Making request", e);
                let t = await (0,
                    s.default)(t => this._provider.sendAsync(e, t))();
                if (u("Got response", t),
                    t.error)
                    throw Error(`PollingBlockTracker - encountered error fetching block:
${t.error.message}`);
                return t.result
            }
        }
        function h(e, t) {
            return new Promise(r => {
                let n = setTimeout(r, e);
                n.unref && t && n.unref()
            }
            )
        }
        t.PollingBlockTracker = l
    },
    51325: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.SubscribeBlockTracker = void 0;
        let i = n(r(23420))
            , s = r(73201)
            , o = (0,
                i.default)();
        class a extends s.BaseBlockTracker {
            constructor(e = {}) {
                if (!e.provider)
                    throw Error("SubscribeBlockTracker - no provider specified.");
                super(e),
                    this._provider = e.provider,
                    this._subscriptionId = null
            }
            async checkForLatestBlock() {
                return await this.getLatestBlock()
            }
            async _start() {
                if (void 0 === this._subscriptionId || null === this._subscriptionId)
                    try {
                        let e = await this._call("eth_blockNumber");
                        this._subscriptionId = await this._call("eth_subscribe", "newHeads"),
                            this._provider.on("data", this._handleSubData.bind(this)),
                            this._newPotentialLatest(e)
                    } catch (e) {
                        this.emit("error", e)
                    }
            }
            async _end() {
                if (null !== this._subscriptionId && void 0 !== this._subscriptionId)
                    try {
                        await this._call("eth_unsubscribe", this._subscriptionId),
                            this._subscriptionId = null
                    } catch (e) {
                        this.emit("error", e)
                    }
            }
            _call(e, ...t) {
                return new Promise((r, n) => {
                    this._provider.sendAsync({
                        id: o(),
                        method: e,
                        params: t,
                        jsonrpc: "2.0"
                    }, (e, t) => {
                        e ? n(e) : r(t.result)
                    }
                    )
                }
                )
            }
            _handleSubData(e, t) {
                var r;
                "eth_subscription" === t.method && (null === (r = t.params) || void 0 === r ? void 0 : r.subscription) === this._subscriptionId && this._newPotentialLatest(t.params.result.number)
            }
        }
        t.SubscribeBlockTracker = a
    },
    6035: function (e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
        )
            , i = this && this.__exportStar || function (e, t) {
                for (var r in e)
                    "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            i(r(12887), t),
            i(r(51325), t),
            i(r(3e4), t)
    },
    1589: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createModuleLogger = t.projectLogger = void 0;
        let n = r(42451);
        Object.defineProperty(t, "createModuleLogger", {
            enumerable: !0,
            get: function () {
                return n.createModuleLogger
            }
        }),
            t.projectLogger = (0,
                n.createProjectLogger)("eth-block-tracker")
    },
    3e4: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    58693: function (e) {
        "use strict";
        let t = (e, t) => function () {
            let r = t.promiseModule
                , n = Array(arguments.length);
            for (let e = 0; e < arguments.length; e++)
                n[e] = arguments[e];
            return new r((r, i) => {
                t.errorFirst ? n.push(function (e, n) {
                    if (t.multiArgs) {
                        let t = Array(arguments.length - 1);
                        for (let e = 1; e < arguments.length; e++)
                            t[e - 1] = arguments[e];
                        e ? (t.unshift(e),
                            i(t)) : r(t)
                    } else
                        e ? i(e) : r(n)
                }) : n.push(function (e) {
                    if (t.multiArgs) {
                        let e = Array(arguments.length - 1);
                        for (let t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        r(e)
                    } else
                        r(e)
                }),
                    e.apply(this, n)
            }
            )
        }
            ;
        e.exports = (e, r) => {
            let n;
            r = Object.assign({
                exclude: [/.+(Sync|Stream)$/],
                errorFirst: !0,
                promiseModule: Promise
            }, r);
            let i = e => {
                let t = t => "string" == typeof t ? e === t : t.test(e);
                return r.include ? r.include.some(t) : !r.exclude.some(t)
            }
                ;
            for (let s in n = "function" == typeof e ? function () {
                return r.excludeMain ? e.apply(this, arguments) : t(e, r).apply(this, arguments)
            }
                : Object.create(Object.getPrototypeOf(e)),
                e) {
                let o = e[s];
                n[s] = "function" == typeof o && i(s) ? t(o, r) : o
            }
            return n
        }
    },
    60753: function (e) {
        "use strict";
        var t = String.prototype.replace
            , r = /%20/g
            , n = {
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            };
        e.exports = {
            default: n.RFC3986,
            formatters: {
                RFC1738: function (e) {
                    return t.call(e, r, "+")
                },
                RFC3986: function (e) {
                    return String(e)
                }
            },
            RFC1738: n.RFC1738,
            RFC3986: n.RFC3986
        }
    },
    59578: function (e, t, r) {
        "use strict";
        var n = r(46482)
            , i = r(36438)
            , s = r(60753);
        e.exports = {
            formats: s,
            parse: i,
            stringify: n
        }
    },
    36438: function (e, t, r) {
        "use strict";
        var n = r(32729)
            , i = Object.prototype.hasOwnProperty
            , s = Array.isArray
            , o = {
                allowDots: !1,
                allowPrototypes: !1,
                allowSparse: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decoder: n.decode,
                delimiter: "&",
                depth: 5,
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1
            }
            , a = function (e, t) {
                return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
            }
            , u = function (e, t) {
                var r = {
                    __proto__: null
                }
                    , u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e
                    , c = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit
                    , l = u.split(t.delimiter, c)
                    , h = -1
                    , d = t.charset;
                if (t.charsetSentinel)
                    for (f = 0; f < l.length; ++f)
                        0 === l[f].indexOf("utf8=") && ("utf8=%E2%9C%93" === l[f] ? d = "utf-8" : "utf8=%26%2310003%3B" === l[f] && (d = "iso-8859-1"),
                            h = f,
                            f = l.length);
                for (f = 0; f < l.length; ++f)
                    if (f !== h) {
                        var f, p, g, m = l[f], y = m.indexOf("]="), b = -1 === y ? m.indexOf("=") : y + 1;
                        -1 === b ? (p = t.decoder(m, o.decoder, d, "key"),
                            g = t.strictNullHandling ? null : "") : (p = t.decoder(m.slice(0, b), o.decoder, d, "key"),
                                g = n.maybeMap(a(m.slice(b + 1), t), function (e) {
                                    return t.decoder(e, o.decoder, d, "value")
                                })),
                            g && t.interpretNumericEntities && "iso-8859-1" === d && (g = g.replace(/&#(\d+);/g, function (e, t) {
                                return String.fromCharCode(parseInt(t, 10))
                            })),
                            m.indexOf("[]=") > -1 && (g = s(g) ? [g] : g),
                            i.call(r, p) ? r[p] = n.combine(r[p], g) : r[p] = g
                    }
                return r
            }
            , c = function (e, t, r, n) {
                for (var i = n ? t : a(t, r), s = e.length - 1; s >= 0; --s) {
                    var o, u = e[s];
                    if ("[]" === u && r.parseArrays)
                        o = [].concat(i);
                    else {
                        o = r.plainObjects ? Object.create(null) : {};
                        var c = "[" === u.charAt(0) && "]" === u.charAt(u.length - 1) ? u.slice(1, -1) : u
                            , l = parseInt(c, 10);
                        r.parseArrays || "" !== c ? !isNaN(l) && u !== c && String(l) === c && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (o = [])[l] = i : "__proto__" !== c && (o[c] = i) : o = {
                            0: i
                        }
                    }
                    i = o
                }
                return i
            }
            , l = function (e, t, r, n) {
                if (e) {
                    var s = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
                        , o = /(\[[^[\]]*])/g
                        , a = r.depth > 0 && /(\[[^[\]]*])/.exec(s)
                        , u = a ? s.slice(0, a.index) : s
                        , l = [];
                    if (u) {
                        if (!r.plainObjects && i.call(Object.prototype, u) && !r.allowPrototypes)
                            return;
                        l.push(u)
                    }
                    for (var h = 0; r.depth > 0 && null !== (a = o.exec(s)) && h < r.depth;) {
                        if (h += 1,
                            !r.plainObjects && i.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes)
                            return;
                        l.push(a[1])
                    }
                    return a && l.push("[" + s.slice(a.index) + "]"),
                        c(l, t, r, n)
                }
            }
            , h = function (e) {
                if (!e)
                    return o;
                if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
                    throw TypeError("Decoder has to be a function.");
                if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                    throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var t = void 0 === e.charset ? o.charset : e.charset;
                return {
                    allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
                    allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
                    allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
                    arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
                    charset: t,
                    charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
                    comma: "boolean" == typeof e.comma ? e.comma : o.comma,
                    decoder: "function" == typeof e.decoder ? e.decoder : o.decoder,
                    delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
                    depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
                    ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                    interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
                    parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
                    parseArrays: !1 !== e.parseArrays,
                    plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
                    strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
                }
            };
        e.exports = function (e, t) {
            var r = h(t);
            if ("" === e || null == e)
                return r.plainObjects ? Object.create(null) : {};
            for (var i = "string" == typeof e ? u(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(i), a = 0; a < o.length; ++a) {
                var c = o[a]
                    , d = l(c, i[c], r, "string" == typeof e);
                s = n.merge(s, d, r)
            }
            return !0 === r.allowSparse ? s : n.compact(s)
        }
    },
    46482: function (e, t, r) {
        "use strict";
        var n = r(37478)
            , i = r(32729)
            , s = r(60753)
            , o = Object.prototype.hasOwnProperty
            , a = {
                brackets: function (e) {
                    return e + "[]"
                },
                comma: "comma",
                indices: function (e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function (e) {
                    return e
                }
            }
            , u = Array.isArray
            , c = Array.prototype.push
            , l = function (e, t) {
                c.apply(e, u(t) ? t : [t])
            }
            , h = Date.prototype.toISOString
            , d = s.default
            , f = {
                addQueryPrefix: !1,
                allowDots: !1,
                charset: "utf-8",
                charsetSentinel: !1,
                delimiter: "&",
                encode: !0,
                encoder: i.encode,
                encodeValuesOnly: !1,
                format: d,
                formatter: s.formatters[d],
                indices: !1,
                serializeDate: function (e) {
                    return h.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1
            }
            , p = {}
            , g = function e(t, r, s, o, a, c, h, d, g, m, y, b, v, _, w, E) {
                for (var S, M, x = t, C = E, k = 0, I = !1; void 0 !== (C = C.get(p)) && !I;) {
                    var R = C.get(t);
                    if (k += 1,
                        void 0 !== R) {
                        if (R === k)
                            throw RangeError("Cyclic object value");
                        I = !0
                    }
                    void 0 === C.get(p) && (k = 0)
                }
                if ("function" == typeof d ? x = d(r, x) : x instanceof Date ? x = y(x) : "comma" === s && u(x) && (x = i.maybeMap(x, function (e) {
                    return e instanceof Date ? y(e) : e
                })),
                    null === x) {
                    if (a)
                        return h && !_ ? h(r, f.encoder, w, "key", b) : r;
                    x = ""
                }
                if ("string" == typeof (S = x) || "number" == typeof S || "boolean" == typeof S || "symbol" == typeof S || "bigint" == typeof S || i.isBuffer(x))
                    return h ? [v(_ ? r : h(r, f.encoder, w, "key", b)) + "=" + v(h(x, f.encoder, w, "value", b))] : [v(r) + "=" + v(String(x))];
                var N = [];
                if (void 0 === x)
                    return N;
                if ("comma" === s && u(x))
                    _ && h && (x = i.maybeMap(x, h)),
                        M = [{
                            value: x.length > 0 ? x.join(",") || null : void 0
                        }];
                else if (u(d))
                    M = d;
                else {
                    var A = Object.keys(x);
                    M = g ? A.sort(g) : A
                }
                for (var O = o && u(x) && 1 === x.length ? r + "[]" : r, L = 0; L < M.length; ++L) {
                    var T = M[L]
                        , j = "object" == typeof T && void 0 !== T.value ? T.value : x[T];
                    if (!c || null !== j) {
                        var P = u(x) ? "function" == typeof s ? s(O, T) : O : O + (m ? "." + T : "[" + T + "]");
                        E.set(t, k);
                        var D = n();
                        D.set(p, E),
                            l(N, e(j, P, s, o, a, c, "comma" === s && _ && u(x) ? null : h, d, g, m, y, b, v, _, w, D))
                    }
                }
                return N
            }
            , m = function (e) {
                if (!e)
                    return f;
                if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
                    throw TypeError("Encoder has to be a function.");
                var t = e.charset || f.charset;
                if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                    throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var r = s.default;
                if (void 0 !== e.format) {
                    if (!o.call(s.formatters, e.format))
                        throw TypeError("Unknown format option provided.");
                    r = e.format
                }
                var n = s.formatters[r]
                    , i = f.filter;
                return ("function" == typeof e.filter || u(e.filter)) && (i = e.filter),
                {
                    addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
                    allowDots: void 0 === e.allowDots ? f.allowDots : !!e.allowDots,
                    charset: t,
                    charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
                    delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
                    encode: "boolean" == typeof e.encode ? e.encode : f.encode,
                    encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
                    encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
                    filter: i,
                    format: r,
                    formatter: n,
                    serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
                    skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
                    sort: "function" == typeof e.sort ? e.sort : null,
                    strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
                }
            };
        e.exports = function (e, t) {
            var r, i, s = e, o = m(t);
            "function" == typeof o.filter ? s = (0,
                o.filter)("", s) : u(o.filter) && (r = o.filter);
            var c = [];
            if ("object" != typeof s || null === s)
                return "";
            i = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
            var h = a[i];
            if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip)
                throw TypeError("`commaRoundTrip` must be a boolean, or absent");
            var d = "comma" === h && t && t.commaRoundTrip;
            r || (r = Object.keys(s)),
                o.sort && r.sort(o.sort);
            for (var f = n(), p = 0; p < r.length; ++p) {
                var y = r[p];
                o.skipNulls && null === s[y] || l(c, g(s[y], y, h, d, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, f))
            }
            var b = c.join(o.delimiter)
                , v = !0 === o.addQueryPrefix ? "?" : "";
            return o.charsetSentinel && ("iso-8859-1" === o.charset ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"),
                b.length > 0 ? v + b : ""
        }
    },
    32729: function (e, t, r) {
        "use strict";
        var n = r(60753)
            , i = Object.prototype.hasOwnProperty
            , s = Array.isArray
            , o = function () {
                for (var e = [], t = 0; t < 256; ++t)
                    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e
            }()
            , a = function (e) {
                for (; e.length > 1;) {
                    var t = e.pop()
                        , r = t.obj[t.prop];
                    if (s(r)) {
                        for (var n = [], i = 0; i < r.length; ++i)
                            void 0 !== r[i] && n.push(r[i]);
                        t.obj[t.prop] = n
                    }
                }
            }
            , u = function (e, t) {
                for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n)
                    void 0 !== e[n] && (r[n] = e[n]);
                return r
            };
        e.exports = {
            arrayToObject: u,
            assign: function (e, t) {
                return Object.keys(t).reduce(function (e, r) {
                    return e[r] = t[r],
                        e
                }, e)
            },
            combine: function (e, t) {
                return [].concat(e, t)
            },
            compact: function (e) {
                for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], r = [], n = 0; n < t.length; ++n)
                    for (var i = t[n], s = i.obj[i.prop], o = Object.keys(s), u = 0; u < o.length; ++u) {
                        var c = o[u]
                            , l = s[c];
                        "object" == typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
                            obj: s,
                            prop: c
                        }),
                            r.push(l))
                    }
                return a(t),
                    e
            },
            decode: function (e, t, r) {
                var n = e.replace(/\+/g, " ");
                if ("iso-8859-1" === r)
                    return n.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(n)
                } catch (e) {
                    return n
                }
            },
            encode: function (e, t, r, i, s) {
                if (0 === e.length)
                    return e;
                var a = e;
                if ("symbol" == typeof e ? a = Symbol.prototype.toString.call(e) : "string" != typeof e && (a = String(e)),
                    "iso-8859-1" === r)
                    return escape(a).replace(/%u[0-9a-f]{4}/gi, function (e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    });
                for (var u = "", c = 0; c < a.length; ++c) {
                    var l = a.charCodeAt(c);
                    if (45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || s === n.RFC1738 && (40 === l || 41 === l)) {
                        u += a.charAt(c);
                        continue
                    }
                    if (l < 128) {
                        u += o[l];
                        continue
                    }
                    if (l < 2048) {
                        u += o[192 | l >> 6] + o[128 | 63 & l];
                        continue
                    }
                    if (l < 55296 || l >= 57344) {
                        u += o[224 | l >> 12] + o[128 | l >> 6 & 63] + o[128 | 63 & l];
                        continue
                    }
                    c += 1,
                        u += o[240 | (l = 65536 + ((1023 & l) << 10 | 1023 & a.charCodeAt(c))) >> 18] + o[128 | l >> 12 & 63] + o[128 | l >> 6 & 63] + o[128 | 63 & l]
                }
                return u
            },
            isBuffer: function (e) {
                return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function (e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            maybeMap: function (e, t) {
                if (s(e)) {
                    for (var r = [], n = 0; n < e.length; n += 1)
                        r.push(t(e[n]));
                    return r
                }
                return t(e)
            },
            merge: function e(t, r, n) {
                if (!r)
                    return t;
                if ("object" != typeof r) {
                    if (s(t))
                        t.push(r);
                    else {
                        if (!t || "object" != typeof t)
                            return [t, r];
                        (n && (n.plainObjects || n.allowPrototypes) || !i.call(Object.prototype, r)) && (t[r] = !0)
                    }
                    return t
                }
                if (!t || "object" != typeof t)
                    return [t].concat(r);
                var o = t;
                return (s(t) && !s(r) && (o = u(t, n)),
                    s(t) && s(r)) ? (r.forEach(function (r, s) {
                        if (i.call(t, s)) {
                            var o = t[s];
                            o && "object" == typeof o && r && "object" == typeof r ? t[s] = e(o, r, n) : t.push(r)
                        } else
                            t[s] = r
                    }),
                        t) : Object.keys(r).reduce(function (t, s) {
                            var o = r[s];
                            return i.call(t, s) ? t[s] = e(t[s], o, n) : t[s] = o,
                                t
                        }, o)
            }
        }
    },
    85078: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(33649)
            , i = r(2403)
            , s = function () {
                function e() {
                    this._semaphore = new i.default(1)
                }
                return e.prototype.acquire = function () {
                    return n.__awaiter(this, void 0, void 0, function () {
                        return n.__generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this._semaphore.acquire()];
                                case 1:
                                    return [2, e.sent()[1]]
                            }
                        })
                    })
                }
                    ,
                    e.prototype.runExclusive = function (e) {
                        return this._semaphore.runExclusive(function () {
                            return e()
                        })
                    }
                    ,
                    e.prototype.isLocked = function () {
                        return this._semaphore.isLocked()
                    }
                    ,
                    e.prototype.release = function () {
                        this._semaphore.release()
                    }
                    ,
                    e
            }();
        t.default = s
    },
    2403: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(33649)
            , i = function () {
                function e(e) {
                    if (this._maxConcurrency = e,
                        this._queue = [],
                        e <= 0)
                        throw Error("semaphore must be initialized to a positive value");
                    this._value = e
                }
                return e.prototype.acquire = function () {
                    var e = this
                        , t = this.isLocked()
                        , r = new Promise(function (t) {
                            return e._queue.push(t)
                        }
                        );
                    return t || this._dispatch(),
                        r
                }
                    ,
                    e.prototype.runExclusive = function (e) {
                        return n.__awaiter(this, void 0, void 0, function () {
                            var t, r, i;
                            return n.__generator(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.acquire()];
                                    case 1:
                                        r = (t = n.sent())[0],
                                            i = t[1],
                                            n.label = 2;
                                    case 2:
                                        return n.trys.push([2, , 4, 5]),
                                            [4, e(r)];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        return i(),
                                            [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.isLocked = function () {
                        return this._value <= 0
                    }
                    ,
                    e.prototype.release = function () {
                        if (this._maxConcurrency > 1)
                            throw Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                        if (this._currentReleaser) {
                            var e = this._currentReleaser;
                            this._currentReleaser = void 0,
                                e()
                        }
                    }
                    ,
                    e.prototype._dispatch = function () {
                        var e = this
                            , t = this._queue.shift();
                        if (t) {
                            var r = !1;
                            this._currentReleaser = function () {
                                r || (r = !0,
                                    e._value++,
                                    e._dispatch())
                            }
                                ,
                                t([this._value--, this._currentReleaser])
                        }
                    }
                    ,
                    e
            }();
        t.default = i
    },
    48125: function (e, t, r) {
        "use strict";
        t.WU = void 0;
        var n = r(85078);
        Object.defineProperty(t, "WU", {
            enumerable: !0,
            get: function () {
                return n.default
            }
        }),
            r(2403),
            r(41960)
    },
    41960: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.withTimeout = void 0;
        var n = r(33649);
        t.withTimeout = function (e, t, r) {
            var i = this;
            return void 0 === r && (r = Error("timeout")),
            {
                acquire: function () {
                    return new Promise(function (s, o) {
                        return n.__awaiter(i, void 0, void 0, function () {
                            var i, a;
                            return n.__generator(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return i = !1,
                                            setTimeout(function () {
                                                i = !0,
                                                    o(r)
                                            }, t),
                                            [4, e.acquire()];
                                    case 1:
                                        return a = n.sent(),
                                            i ? (Array.isArray(a) ? a[1] : a)() : s(a),
                                            [2]
                                }
                            })
                        })
                    }
                    )
                },
                runExclusive: function (e) {
                    return n.__awaiter(this, void 0, void 0, function () {
                        var t, r;
                        return n.__generator(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    t = function () { }
                                        ,
                                        n.label = 1;
                                case 1:
                                    return n.trys.push([1, , 7, 8]),
                                        [4, this.acquire()];
                                case 2:
                                    if (!Array.isArray(r = n.sent()))
                                        return [3, 4];
                                    return t = r[1],
                                        [4, e(r[0])];
                                case 3:
                                case 5:
                                    return [2, n.sent()];
                                case 4:
                                    return t = r,
                                        [4, e()];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return t(),
                                        [7];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                },
                release: function () {
                    e.release()
                },
                isLocked: function () {
                    return e.isLocked()
                }
            }
        }
    },
    47056: function (e, t) {
        "use strict";
        var r, n;
        function i(e, t, n) {
            if (!n || typeof n.value !== r.typeOfFunction)
                throw TypeError("Only methods can be decorated with @bind. <" + t + "> is not a method!");
            return {
                configurable: r.boolTrue,
                get: function () {
                    var e = n.value.bind(this);
                    return Object.defineProperty(this, t, {
                        value: e,
                        configurable: r.boolTrue,
                        writable: r.boolTrue
                    }),
                        e
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            (n = r || (r = {})).typeOfFunction = "function",
            n.boolTrue = !0,
            t.bind = i,
            t.default = i
    },
    59435: function (e) {
        function t(e, t, r, n) {
            return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "")
        }
        e.exports = function (e, r) {
            r = r || {};
            var n, i, s = typeof e;
            if ("string" === s && e.length > 0)
                return function (e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var r = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * r;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * r;
                                case "days":
                                case "day":
                                case "d":
                                    return 864e5 * r;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return 36e5 * r;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * r;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * r;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return r;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
            if ("number" === s && isFinite(e))
                return r.long ? (n = Math.abs(e)) >= 864e5 ? t(e, n, 864e5, "day") : n >= 36e5 ? t(e, n, 36e5, "hour") : n >= 6e4 ? t(e, n, 6e4, "minute") : n >= 1e3 ? t(e, n, 1e3, "second") : e + " ms" : (i = Math.abs(e)) >= 864e5 ? Math.round(e / 864e5) + "d" : i >= 36e5 ? Math.round(e / 36e5) + "h" : i >= 6e4 ? Math.round(e / 6e4) + "m" : i >= 1e3 ? Math.round(e / 1e3) + "s" : e + "ms";
            throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    11227: function (e, t, r) {
        let n;
        var i = r(34155);
        t.formatArgs = function (t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
                !this.useColors)
                return;
            let r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            let n = 0
                , i = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (n++,
                    "%c" === e && (i = n))
            }
            ),
                t.splice(i, 0, r)
        }
            ,
            t.save = function (e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) { }
            }
            ,
            t.load = function () {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) { }
                return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG),
                    e
            }
            ,
            t.useColors = function () {
                return "undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }
            ,
            t.storage = function () {
                try {
                    return localStorage
                } catch (e) { }
            }(),
            t.destroy = (n = !1,
                () => {
                    n || (n = !0,
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            ),
            t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
            t.log = console.debug || console.log || (() => { }
            ),
            e.exports = r(82447)(t);
        let { formatters: s } = e.exports;
        s.j = function (e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    },
    82447: function (e, t, r) {
        e.exports = function (e) {
            function t(e) {
                let r, i, s;
                let o = null;
                function a(...e) {
                    if (!a.enabled)
                        return;
                    let n = a
                        , i = Number(new Date)
                        , s = i - (r || i);
                    n.diff = s,
                        n.prev = r,
                        n.curr = i,
                        r = i,
                        e[0] = t.coerce(e[0]),
                        "string" != typeof e[0] && e.unshift("%O");
                    let o = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, i) => {
                        if ("%%" === r)
                            return "%";
                        o++;
                        let s = t.formatters[i];
                        if ("function" == typeof s) {
                            let t = e[o];
                            r = s.call(n, t),
                                e.splice(o, 1),
                                o--
                        }
                        return r
                    }
                    ),
                        t.formatArgs.call(n, e);
                    let u = n.log || t.log;
                    u.apply(n, e)
                }
                return a.namespace = e,
                    a.useColors = t.useColors(),
                    a.color = t.selectColor(e),
                    a.extend = n,
                    a.destroy = t.destroy,
                    Object.defineProperty(a, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== o ? o : (i !== t.namespaces && (i = t.namespaces,
                            s = t.enabled(e)),
                            s),
                        set: e => {
                            o = e
                        }
                    }),
                    "function" == typeof t.init && t.init(a),
                    a
            }
            function n(e, r) {
                let n = t(this.namespace + (void 0 === r ? ":" : r) + e);
                return n.log = this.log,
                    n
            }
            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return t.debug = t,
                t.default = t,
                t.coerce = function (e) {
                    return e instanceof Error ? e.stack || e.message : e
                }
                ,
                t.disable = function () {
                    let e = [...t.names.map(i), ...t.skips.map(i).map(e => "-" + e)].join(",");
                    return t.enable(""),
                        e
                }
                ,
                t.enable = function (e) {
                    let r;
                    t.save(e),
                        t.namespaces = e,
                        t.names = [],
                        t.skips = [];
                    let n = ("string" == typeof e ? e : "").split(/[\s,]+/)
                        , i = n.length;
                    for (r = 0; r < i; r++)
                        n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(RegExp("^" + e.slice(1) + "$")) : t.names.push(RegExp("^" + e + "$")))
                }
                ,
                t.enabled = function (e) {
                    let r, n;
                    if ("*" === e[e.length - 1])
                        return !0;
                    for (r = 0,
                        n = t.skips.length; r < n; r++)
                        if (t.skips[r].test(e))
                            return !1;
                    for (r = 0,
                        n = t.names.length; r < n; r++)
                        if (t.names[r].test(e))
                            return !0;
                    return !1
                }
                ,
                t.humanize = r(59435),
                t.destroy = function () {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }
                ,
                Object.keys(e).forEach(r => {
                    t[r] = e[r]
                }
                ),
                t.names = [],
                t.skips = [],
                t.formatters = {},
                t.selectColor = function (e) {
                    let r = 0;
                    for (let t = 0; t < e.length; t++)
                        r = (r << 5) - r + e.charCodeAt(t) | 0;
                    return t.colors[Math.abs(r) % t.colors.length]
                }
                ,
                t.enable(t.load()),
                t
        }
    },
    23256: function (e, t, r) {
        let n = r(76622);
        e.exports = class extends n {
            constructor() {
                super(),
                    this.allResults = []
            }
            async update() {
                throw Error("BaseFilterWithHistory - no update method specified")
            }
            addResults(e) {
                this.allResults = this.allResults.concat(e),
                    super.addResults(e)
            }
            addInitialResults(e) {
                this.allResults = this.allResults.concat(e),
                    super.addInitialResults(e)
            }
            getAllResults() {
                return this.allResults
            }
        }
    },
    76622: function (e, t, r) {
        let n = r(19394).default;
        e.exports = class extends n {
            constructor() {
                super(),
                    this.updates = []
            }
            async initialize() { }
            async update() {
                throw Error("BaseFilter - no update method specified")
            }
            addResults(e) {
                this.updates = this.updates.concat(e),
                    e.forEach(e => this.emit("update", e))
            }
            addInitialResults(e) { }
            getChangesAndClear() {
                let e = this.updates;
                return this.updates = [],
                    e
            }
        }
    },
    72785: function (e, t, r) {
        let n = r(76622)
            , i = r(40207)
            , { incrementHexInt: s } = r(98112);
        e.exports = class extends n {
            constructor({ provider: e, params: t }) {
                super(),
                    this.type = "block",
                    this.provider = e
            }
            async update({ oldBlock: e, newBlock: t }) {
                let r = s(e)
                    , n = await i({
                        provider: this.provider,
                        fromBlock: r,
                        toBlock: t
                    })
                    , o = n.map(e => e.hash);
                this.addResults(o)
            }
        }
    },
    40207: function (e) {
        async function t({ provider: e, fromBlock: t, toBlock: s }) {
            t || (t = s);
            let o = r(t)
                , a = r(s)
                , u = Array(a - o + 1).fill().map((e, t) => o + t).map(n)
                , c = await Promise.all(u.map(t => i(e, "eth_getBlockByNumber", [t, !1])));
            return c
        }
        function r(e) {
            return null == e ? e : Number.parseInt(e, 16)
        }
        function n(e) {
            if (null == e)
                return e;
            let t = e.toString(16);
            return "0x" + t
        }
        async function i(e, t, r) {
            for (let n = 0; n < 3; n++)
                try {
                    return await function (e, t) {
                        return new Promise((r, n) => {
                            e.sendAsync(t, (e, t) => {
                                e ? n(e) : t.error ? n(t.error) : t.result ? r(t.result) : n(Error("Result was empty"))
                            }
                            )
                        }
                        )
                    }(e, {
                        id: 1,
                        jsonrpc: "2.0",
                        method: t,
                        params: r
                    })
                } catch (e) {
                    console.error(`provider.sendAsync failed: ${e.stack || e.message || e}`)
                }
            throw Error(`Block not found for params: ${JSON.stringify(r)}`)
        }
        e.exports = t
    },
    98112: function (e) {
        function t(e) {
            return e.sort((e, t) => "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : r(e) - r(t))
        }
        function r(e) {
            return null == e ? e : Number.parseInt(e, 16)
        }
        function n(e) {
            if (null == e)
                return e;
            let t = e.toString(16)
                , r = t.length % 2;
            return r && (t = "0" + t),
                "0x" + t
        }
        function i() {
            return Math.floor(16 * Math.random()).toString(16)
        }
        e.exports = {
            minBlockRef: function (...e) {
                let r = t(e);
                return r[0]
            },
            maxBlockRef: function (...e) {
                let r = t(e);
                return r[r.length - 1]
            },
            sortBlockRefs: t,
            bnToHex: function (e) {
                return "0x" + e.toString(16)
            },
            blockRefIsNumber: function (e) {
                return e && !["earliest", "latest", "pending"].includes(e)
            },
            hexToInt: r,
            incrementHexInt: function (e) {
                if (null == e)
                    return e;
                let t = r(e);
                return n(t + 1)
            },
            intToHex: n,
            unsafeRandomBytes: function (e) {
                let t = "0x";
                for (let r = 0; r < e; r++)
                    t += i() + i();
                return t
            }
        }
    },
    98406: function (e, t, r) {
        let n = r(48125).WU
            , { createAsyncMiddleware: i, createScaffoldMiddleware: s } = r(18320)
            , o = r(81663)
            , a = r(72785)
            , u = r(11406)
            , { intToHex: c, hexToInt: l } = r(98112);
        function h(e) {
            return d(async (...t) => {
                let r = await e(...t)
                    , n = c(r.id);
                return n
            }
            )
        }
        function d(e) {
            return i(async (t, r) => {
                let n = await e.apply(null, t.params);
                r.result = n
            }
            )
        }
        function f(e, t) {
            let r = [];
            for (let t in e)
                r.push(e[t]);
            return r
        }
        e.exports = function ({ blockTracker: e, provider: t }) {
            let r = 0
                , i = {}
                , p = new n
                , g = function ({ mutex: e }) {
                    return t => async (r, n, i, s) => {
                        let o = await e.acquire();
                        o(),
                            t(r, n, i, s)
                    }
                }({
                    mutex: p
                })
                , m = s({
                    eth_newFilter: g(h(b)),
                    eth_newBlockFilter: g(h(v)),
                    eth_newPendingTransactionFilter: g(h(_)),
                    eth_uninstallFilter: g(d(S)),
                    eth_getFilterChanges: g(d(w)),
                    eth_getFilterLogs: g(d(E))
                })
                , y = async ({ oldBlock: e, newBlock: t }) => {
                    if (0 === i.length)
                        return;
                    let r = await p.acquire();
                    try {
                        await Promise.all(f(i).map(async r => {
                            try {
                                await r.update({
                                    oldBlock: e,
                                    newBlock: t
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        ))
                    } catch (e) {
                        console.error(e)
                    }
                    r()
                }
                ;
            return m.newLogFilter = b,
                m.newBlockFilter = v,
                m.newPendingTransactionFilter = _,
                m.uninstallFilter = S,
                m.getFilterChanges = w,
                m.getFilterLogs = E,
                m.destroy = () => {
                    C()
                }
                ,
                m;
            async function b(e) {
                let r = new o({
                    provider: t,
                    params: e
                });
                return await M(r),
                    r
            }
            async function v() {
                let e = new a({
                    provider: t
                });
                return await M(e),
                    e
            }
            async function _() {
                let e = new u({
                    provider: t
                });
                return await M(e),
                    e
            }
            async function w(e) {
                let t = l(e)
                    , r = i[t];
                if (!r)
                    throw Error(`No filter for index "${t}"`);
                let n = r.getChangesAndClear();
                return n
            }
            async function E(e) {
                let t = l(e)
                    , r = i[t];
                if (!r)
                    throw Error(`No filter for index "${t}"`);
                let n = [];
                return "log" === r.type && (n = r.getAllResults()),
                    n
            }
            async function S(e) {
                let t = l(e)
                    , r = i[t]
                    , n = Boolean(r);
                return n && await x(t),
                    n
            }
            async function M(t) {
                let n = f(i).length
                    , s = await e.getLatestBlock();
                await t.initialize({
                    currentBlock: s
                }),
                    i[++r] = t,
                    t.id = r,
                    t.idHex = c(r);
                let o = f(i).length;
                return k({
                    prevFilterCount: n,
                    newFilterCount: o
                }),
                    r
            }
            async function x(e) {
                let t = f(i).length;
                delete i[e];
                let r = f(i).length;
                k({
                    prevFilterCount: t,
                    newFilterCount: r
                })
            }
            async function C() {
                let e = f(i).length;
                i = {},
                    k({
                        prevFilterCount: e,
                        newFilterCount: 0
                    })
            }
            function k({ prevFilterCount: t, newFilterCount: r }) {
                if (0 === t && r > 0) {
                    e.on("sync", y);
                    return
                }
                if (t > 0 && 0 === r) {
                    e.removeListener("sync", y);
                    return
                }
            }
        }
    },
    81663: function (e, t, r) {
        let n = r(75682)
            , i = r(6417)
            , s = r(23256)
            , { bnToHex: o, hexToInt: a, incrementHexInt: u, minBlockRef: c, blockRefIsNumber: l } = r(98112);
        e.exports = class extends s {
            constructor({ provider: e, params: t }) {
                super(),
                    this.type = "log",
                    this.ethQuery = new n(e),
                    this.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, t),
                    this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]),
                        this.params.address = this.params.address.map(e => e.toLowerCase()))
            }
            async initialize({ currentBlock: e }) {
                let t = this.params.fromBlock;
                ["latest", "pending"].includes(t) && (t = e),
                    "earliest" === t && (t = "0x0"),
                    this.params.fromBlock = t;
                let r = c(this.params.toBlock, e)
                    , n = Object.assign({}, this.params, {
                        toBlock: r
                    })
                    , i = await this._fetchLogs(n);
                this.addInitialResults(i)
            }
            async update({ oldBlock: e, newBlock: t }) {
                let r;
                r = e ? u(e) : t;
                let n = Object.assign({}, this.params, {
                    fromBlock: r,
                    toBlock: t
                })
                    , i = await this._fetchLogs(n)
                    , s = i.filter(e => this.matchLog(e));
                this.addResults(s)
            }
            async _fetchLogs(e) {
                let t = await i(t => this.ethQuery.getLogs(e, t))();
                return t
            }
            matchLog(e) {
                if (a(this.params.fromBlock) >= a(e.blockNumber) || l(this.params.toBlock) && a(this.params.toBlock) <= a(e.blockNumber))
                    return !1;
                let t = e.address && e.address.toLowerCase();
                if (this.params.address && t && !this.params.address.includes(t))
                    return !1;
                let r = this.params.topics.every((t, r) => {
                    let n = e.topics[r];
                    if (!n)
                        return !1;
                    n = n.toLowerCase();
                    let i = Array.isArray(t) ? t : [t]
                        , s = i.includes(null);
                    if (s)
                        return !0;
                    i = i.map(e => e.toLowerCase());
                    let o = i.includes(n);
                    return o
                }
                );
                return r
            }
        }
    },
    25232: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.EthereumProviderError = t.EthereumRpcError = void 0;
        let n = r(4445);
        class i extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw Error('"code" must be an integer.');
                if (!t || "string" != typeof t)
                    throw Error('"message" must be a nonempty string.');
                super(t),
                    this.code = e,
                    void 0 !== r && (this.data = r)
            }
            serialize() {
                let e = {
                    code: this.code,
                    message: this.message
                };
                return void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
            }
            toString() {
                return n.default(this.serialize(), s, 2)
            }
        }
        function s(e, t) {
            if ("[Circular]" !== t)
                return t
        }
        t.EthereumRpcError = i,
            t.EthereumProviderError = class extends i {
                constructor(e, t, r) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
                        throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, r)
                }
            }
    },
    14142: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.errorValues = t.errorCodes = void 0,
            t.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            },
            t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
    },
    26339: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ethErrors = void 0;
        let n = r(25232)
            , i = r(31299)
            , s = r(14142);
        function o(e, t) {
            let [r, s] = u(t);
            return new n.EthereumRpcError(e, r || i.getMessageFromCode(e), s)
        }
        function a(e, t) {
            let [r, s] = u(t);
            return new n.EthereumProviderError(e, r || i.getMessageFromCode(e), s)
        }
        function u(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    let { message: t, data: r } = e;
                    if (t && "string" != typeof t)
                        throw Error("Must specify string message.");
                    return [t || void 0, r]
                }
            }
            return []
        }
        t.ethErrors = {
            rpc: {
                parse: e => o(s.errorCodes.rpc.parse, e),
                invalidRequest: e => o(s.errorCodes.rpc.invalidRequest, e),
                invalidParams: e => o(s.errorCodes.rpc.invalidParams, e),
                methodNotFound: e => o(s.errorCodes.rpc.methodNotFound, e),
                internal: e => o(s.errorCodes.rpc.internal, e),
                server: e => {
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw Error("Ethereum RPC Server errors must provide single object argument.");
                    let { code: t } = e;
                    if (!Number.isInteger(t) || t > -32005 || t < -32099)
                        throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                    return o(t, e)
                }
                ,
                invalidInput: e => o(s.errorCodes.rpc.invalidInput, e),
                resourceNotFound: e => o(s.errorCodes.rpc.resourceNotFound, e),
                resourceUnavailable: e => o(s.errorCodes.rpc.resourceUnavailable, e),
                transactionRejected: e => o(s.errorCodes.rpc.transactionRejected, e),
                methodNotSupported: e => o(s.errorCodes.rpc.methodNotSupported, e),
                limitExceeded: e => o(s.errorCodes.rpc.limitExceeded, e)
            },
            provider: {
                userRejectedRequest: e => a(s.errorCodes.provider.userRejectedRequest, e),
                unauthorized: e => a(s.errorCodes.provider.unauthorized, e),
                unsupportedMethod: e => a(s.errorCodes.provider.unsupportedMethod, e),
                disconnected: e => a(s.errorCodes.provider.disconnected, e),
                chainDisconnected: e => a(s.errorCodes.provider.chainDisconnected, e),
                custom: e => {
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw Error("Ethereum Provider custom errors must provide single object argument.");
                    let { code: t, message: r, data: i } = e;
                    if (!r || "string" != typeof r)
                        throw Error('"message" must be a nonempty string');
                    return new n.EthereumProviderError(t, r, i)
                }
            }
        }
    },
    69313: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
        let n = r(25232);
        Object.defineProperty(t, "EthereumRpcError", {
            enumerable: !0,
            get: function () {
                return n.EthereumRpcError
            }
        }),
            Object.defineProperty(t, "EthereumProviderError", {
                enumerable: !0,
                get: function () {
                    return n.EthereumProviderError
                }
            });
        let i = r(31299);
        Object.defineProperty(t, "serializeError", {
            enumerable: !0,
            get: function () {
                return i.serializeError
            }
        }),
            Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function () {
                    return i.getMessageFromCode
                }
            });
        let s = r(26339);
        Object.defineProperty(t, "ethErrors", {
            enumerable: !0,
            get: function () {
                return s.ethErrors
            }
        });
        let o = r(14142);
        Object.defineProperty(t, "errorCodes", {
            enumerable: !0,
            get: function () {
                return o.errorCodes
            }
        })
    },
    31299: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
        let n = r(14142)
            , i = r(25232)
            , s = n.errorCodes.rpc.internal
            , o = {
                code: s,
                message: a(s)
            };
        function a(e, r = "Unspecified error message. This is a bug, please report it.") {
            if (Number.isInteger(e)) {
                let r = e.toString();
                if (l(n.errorValues, r))
                    return n.errorValues[r].message;
                if (e >= -32099 && e <= -32e3)
                    return t.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return r
        }
        function u(e) {
            if (!Number.isInteger(e))
                return !1;
            let t = e.toString();
            return !!(n.errorValues[t] || e >= -32099 && e <= -32e3)
        }
        function c(e) {
            return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
        }
        function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
            t.getMessageFromCode = a,
            t.isValidCode = u,
            t.serializeError = function (e, { fallbackError: t = o, shouldIncludeStack: r = !1 } = {}) {
                if (!t || !Number.isInteger(t.code) || "string" != typeof t.message)
                    throw Error("Must provide fallback error with integer number code and string message.");
                if (e instanceof i.EthereumRpcError)
                    return e.serialize();
                let n = {};
                if (e && "object" == typeof e && !Array.isArray(e) && l(e, "code") && u(e.code))
                    n.code = e.code,
                        e.message && "string" == typeof e.message ? (n.message = e.message,
                            l(e, "data") && (n.data = e.data)) : (n.message = a(n.code),
                                n.data = {
                                    originalError: c(e)
                                });
                else {
                    n.code = t.code;
                    let r = null == e ? void 0 : e.message;
                    n.message = r && "string" == typeof r ? r : t.message,
                        n.data = {
                            originalError: c(e)
                        }
                }
                let s = null == e ? void 0 : e.stack;
                return r && e && s && "string" == typeof s && (n.stack = s),
                    n
            }
    },
    36739: function (e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.JsonRpcEngine = void 0;
        let i = n(r(19394))
            , s = r(69313);
        class o extends i.default {
            constructor() {
                super(),
                    this._middleware = []
            }
            push(e) {
                this._middleware.push(e)
            }
            handle(e, t) {
                if (t && "function" != typeof t)
                    throw Error('"callback" must be a function if provided.');
                return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
            }
            asMiddleware() {
                return async (e, t, r, n) => {
                    try {
                        let [i, s, a] = await o._runAllMiddleware(e, t, this._middleware);
                        if (s)
                            return await o._runReturnHandlers(a),
                                n(i);
                        return r(async e => {
                            try {
                                await o._runReturnHandlers(a)
                            } catch (t) {
                                return e(t)
                            }
                            return e()
                        }
                        )
                    } catch (e) {
                        return n(e)
                    }
                }
            }
            async _handleBatch(e, t) {
                try {
                    let r = await Promise.all(e.map(this._promiseHandle.bind(this)));
                    if (t)
                        return t(null, r);
                    return r
                } catch (e) {
                    if (t)
                        return t(e);
                    throw e
                }
            }
            _promiseHandle(e) {
                return new Promise(t => {
                    this._handle(e, (e, r) => {
                        t(r)
                    }
                    )
                }
                )
            }
            async _handle(e, t) {
                if (!e || Array.isArray(e) || "object" != typeof e) {
                    let r = new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof e}`, {
                        request: e
                    });
                    return t(r, {
                        id: void 0,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                if ("string" != typeof e.method) {
                    let r = new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof e.method}`, {
                        request: e
                    });
                    return t(r, {
                        id: e.id,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                let r = Object.assign({}, e)
                    , n = {
                        id: r.id,
                        jsonrpc: r.jsonrpc
                    }
                    , i = null;
                try {
                    await this._processRequest(r, n)
                } catch (e) {
                    i = e
                }
                return i && (delete n.result,
                    n.error || (n.error = s.serializeError(i))),
                    t(i, n)
            }
            async _processRequest(e, t) {
                let [r, n, i] = await o._runAllMiddleware(e, t, this._middleware);
                if (o._checkForCompletion(e, t, n),
                    await o._runReturnHandlers(i),
                    r)
                    throw r
            }
            static async _runAllMiddleware(e, t, r) {
                let n = []
                    , i = null
                    , s = !1;
                for (let a of r)
                    if ([i, s] = await o._runMiddleware(e, t, a, n),
                        s)
                        break;
                return [i, s, n.reverse()]
            }
            static _runMiddleware(e, t, r, n) {
                return new Promise(i => {
                    let o = e => {
                        let r = e || t.error;
                        r && (t.error = s.serializeError(r)),
                            i([r, !0])
                    }
                        , u = r => {
                            t.error ? o(t.error) : (r && ("function" != typeof r && o(new s.EthereumRpcError(s.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:
${a(e)}`, {
                                request: e
                            })),
                                n.push(r)),
                                i([null, !1]))
                        }
                        ;
                    try {
                        r(e, t, u, o)
                    } catch (e) {
                        o(e)
                    }
                }
                )
            }
            static async _runReturnHandlers(e) {
                for (let t of e)
                    await new Promise((e, r) => {
                        t(t => t ? r(t) : e())
                    }
                    )
            }
            static _checkForCompletion(e, t, r) {
                if (!("result" in t) && !("error" in t))
                    throw new s.EthereumRpcError(s.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${a(e)}`, {
                        request: e
                    });
                if (!r)
                    throw new s.EthereumRpcError(s.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${a(e)}`, {
                        request: e
                    })
            }
        }
        function a(e) {
            return JSON.stringify(e, null, 2)
        }
        t.JsonRpcEngine = o
    },
    1152: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createAsyncMiddleware = void 0,
            t.createAsyncMiddleware = function (e) {
                return async (t, r, n, i) => {
                    let s;
                    let o = new Promise(e => {
                        s = e
                    }
                    )
                        , a = null
                        , u = !1
                        , c = async () => {
                            u = !0,
                                n(e => {
                                    a = e,
                                        s()
                                }
                                ),
                                await o
                        }
                        ;
                    try {
                        await e(t, r, c),
                            u ? (await o,
                                a(null)) : i(null)
                    } catch (e) {
                        a ? a(e) : i(e)
                    }
                }
            }
    },
    64980: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createScaffoldMiddleware = void 0,
            t.createScaffoldMiddleware = function (e) {
                return (t, r, n, i) => {
                    let s = e[t.method];
                    return void 0 === s ? n() : "function" == typeof s ? s(t, r, n, i) : (r.result = s,
                        i())
                }
            }
    },
    51084: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getUniqueId = void 0;
        let r = Math.floor(4294967295 * Math.random());
        t.getUniqueId = function () {
            return r = (r + 1) % 4294967295
        }
    },
    28104: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createIdRemapMiddleware = void 0;
        let n = r(51084);
        t.createIdRemapMiddleware = function () {
            return (e, t, r, i) => {
                let s = e.id
                    , o = n.getUniqueId();
                e.id = o,
                    t.id = o,
                    r(r => {
                        e.id = s,
                            t.id = s,
                            r()
                    }
                    )
            }
        }
    },
    18320: function (e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
        )
            , i = this && this.__exportStar || function (e, t) {
                for (var r in e)
                    "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            i(r(28104), t),
            i(r(1152), t),
            i(r(64980), t),
            i(r(51084), t),
            i(r(36739), t),
            i(r(18175), t)
    },
    18175: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.mergeMiddleware = void 0;
        let n = r(36739);
        t.mergeMiddleware = function (e) {
            let t = new n.JsonRpcEngine;
            return e.forEach(e => t.push(e)),
                t.asMiddleware()
        }
    },
    6417: function (e) {
        "use strict";
        let t = (e, t, r, n) => function (...i) {
            let s = t.promiseModule;
            return new s((s, o) => {
                t.multiArgs ? i.push((...e) => {
                    t.errorFirst ? e[0] ? o(e) : (e.shift(),
                        s(e)) : s(e)
                }
                ) : t.errorFirst ? i.push((e, t) => {
                    e ? o(e) : s(t)
                }
                ) : i.push(s),
                    Reflect.apply(e, this === r ? n : this, i)
            }
            )
        }
            , r = new WeakMap;
        e.exports = (e, n) => {
            n = {
                exclude: [/.+(?:Sync|Stream)$/],
                errorFirst: !0,
                promiseModule: Promise,
                ...n
            };
            let i = typeof e;
            if (!(null !== e && ("object" === i || "function" === i)))
                throw TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === e ? "null" : i}\``);
            let s = (e, t) => {
                let i = r.get(e);
                if (i || (i = {},
                    r.set(e, i)),
                    t in i)
                    return i[t];
                let s = e => "string" == typeof e || "symbol" == typeof t ? t === e : e.test(t)
                    , o = Reflect.getOwnPropertyDescriptor(e, t)
                    , a = void 0 === o || o.writable || o.configurable
                    , u = n.include ? n.include.some(s) : !n.exclude.some(s)
                    , c = u && a;
                return i[t] = c,
                    c
            }
                , o = new WeakMap
                , a = new Proxy(e, {
                    apply(e, r, i) {
                        let s = o.get(e);
                        if (s)
                            return Reflect.apply(s, r, i);
                        let u = n.excludeMain ? e : t(e, n, a, e);
                        return o.set(e, u),
                            Reflect.apply(u, r, i)
                    },
                    get(e, r) {
                        let i = e[r];
                        if (!s(e, r) || i === Function.prototype[r])
                            return i;
                        let u = o.get(i);
                        if (u)
                            return u;
                        if ("function" == typeof i) {
                            let r = t(i, n, a, e);
                            return o.set(i, r),
                                r
                        }
                        return i
                    }
                });
            return a
        }
    },
    68961: function (e, t, r) {
        let n = r(19394).default
            , { createAsyncMiddleware: i, createScaffoldMiddleware: s } = r(18320)
            , o = r(98406)
            , { unsafeRandomBytes: a, incrementHexInt: u } = r(98112)
            , c = r(40207);
        function l(e) {
            return null == e ? null : {
                hash: e.hash,
                parentHash: e.parentHash,
                sha3Uncles: e.sha3Uncles,
                miner: e.miner,
                stateRoot: e.stateRoot,
                transactionsRoot: e.transactionsRoot,
                receiptsRoot: e.receiptsRoot,
                logsBloom: e.logsBloom,
                difficulty: e.difficulty,
                number: e.number,
                gasLimit: e.gasLimit,
                gasUsed: e.gasUsed,
                nonce: e.nonce,
                mixHash: e.mixHash,
                timestamp: e.timestamp,
                extraData: e.extraData
            }
        }
        e.exports = function ({ blockTracker: e, provider: t }) {
            let r = {}
                , h = o({
                    blockTracker: e,
                    provider: t
                })
                , d = !1
                , f = new n
                , p = s({
                    eth_subscribe: i(g),
                    eth_unsubscribe: i(m)
                });
            return p.destroy = function () {
                for (let e in f.removeAllListeners(),
                    r)
                    r[e].destroy(),
                        delete r[e];
                d = !0
            }
                ,
            {
                events: f,
                middleware: p
            };
            async function g(n, i) {
                let s;
                if (d)
                    throw Error("SubscriptionManager - attempting to use after destroying");
                let o = n.params[0]
                    , f = a(16);
                switch (o) {
                    case "newHeads":
                        s = function ({ subId: r }) {
                            let n = {
                                type: o,
                                destroy: async () => {
                                    e.removeListener("sync", n.update)
                                }
                                ,
                                update: async ({ oldBlock: e, newBlock: n }) => {
                                    let i = u(e)
                                        , s = await c({
                                            provider: t,
                                            fromBlock: i,
                                            toBlock: n
                                        })
                                        , o = s.map(l).filter(e => null !== e);
                                    o.forEach(e => {
                                        y(r, e)
                                    }
                                    )
                                }
                            };
                            return e.on("sync", n.update),
                                n
                        }({
                            subId: f
                        });
                        break;
                    case "logs":
                        let p = n.params[1]
                            , g = await h.newLogFilter(p);
                        s = function ({ subId: e, filter: t }) {
                            return t.on("update", t => y(e, t)),
                            {
                                type: o,
                                destroy: async () => await h.uninstallFilter(t.idHex)
                            }
                        }({
                            subId: f,
                            filter: g
                        });
                        break;
                    default:
                        throw Error(`SubscriptionManager - unsupported subscription type "${o}"`)
                }
                r[f] = s,
                    i.result = f
            }
            async function m(e, t) {
                if (d)
                    throw Error("SubscriptionManager - attempting to use after destroying");
                let n = e.params[0]
                    , i = r[n];
                if (!i) {
                    t.result = !1;
                    return
                }
                delete r[n],
                    await i.destroy(),
                    t.result = !0
            }
            function y(e, t) {
                f.emit("notification", {
                    jsonrpc: "2.0",
                    method: "eth_subscription",
                    params: {
                        subscription: e,
                        result: t
                    }
                })
            }
        }
    },
    11406: function (e, t, r) {
        let n = r(76622)
            , i = r(40207)
            , { incrementHexInt: s } = r(98112);
        e.exports = class extends n {
            constructor({ provider: e }) {
                super(),
                    this.type = "tx",
                    this.provider = e
            }
            async update({ oldBlock: e }) {
                let t = s(e)
                    , r = await i({
                        provider: this.provider,
                        fromBlock: t,
                        toBlock: e
                    })
                    , n = [];
                for (let e of r)
                    n.push(...e.transactions);
                this.addResults(n)
            }
        }
    },
    75682: function (e, t, r) {
        let n = r(47529)
            , i = r(23420)();
        function s(e) {
            let t = this;
            t.currentProvider = e
        }
        function o(e) {
            return function () {
                var t = [].slice.call(arguments)
                    , r = t.pop();
                this.sendAsync({
                    method: e,
                    params: t
                }, r)
            }
        }
        function a(e, t) {
            return function () {
                var r = [].slice.call(arguments)
                    , n = r.pop();
                r.length < e && r.push("latest"),
                    this.sendAsync({
                        method: t,
                        params: r
                    }, n)
            }
        }
        e.exports = s,
            s.prototype.getBalance = a(2, "eth_getBalance"),
            s.prototype.getCode = a(2, "eth_getCode"),
            s.prototype.getTransactionCount = a(2, "eth_getTransactionCount"),
            s.prototype.getStorageAt = a(3, "eth_getStorageAt"),
            s.prototype.call = a(2, "eth_call"),
            s.prototype.protocolVersion = o("eth_protocolVersion"),
            s.prototype.syncing = o("eth_syncing"),
            s.prototype.coinbase = o("eth_coinbase"),
            s.prototype.mining = o("eth_mining"),
            s.prototype.hashrate = o("eth_hashrate"),
            s.prototype.gasPrice = o("eth_gasPrice"),
            s.prototype.accounts = o("eth_accounts"),
            s.prototype.blockNumber = o("eth_blockNumber"),
            s.prototype.getBlockTransactionCountByHash = o("eth_getBlockTransactionCountByHash"),
            s.prototype.getBlockTransactionCountByNumber = o("eth_getBlockTransactionCountByNumber"),
            s.prototype.getUncleCountByBlockHash = o("eth_getUncleCountByBlockHash"),
            s.prototype.getUncleCountByBlockNumber = o("eth_getUncleCountByBlockNumber"),
            s.prototype.sign = o("eth_sign"),
            s.prototype.sendTransaction = o("eth_sendTransaction"),
            s.prototype.sendRawTransaction = o("eth_sendRawTransaction"),
            s.prototype.estimateGas = o("eth_estimateGas"),
            s.prototype.getBlockByHash = o("eth_getBlockByHash"),
            s.prototype.getBlockByNumber = o("eth_getBlockByNumber"),
            s.prototype.getTransactionByHash = o("eth_getTransactionByHash"),
            s.prototype.getTransactionByBlockHashAndIndex = o("eth_getTransactionByBlockHashAndIndex"),
            s.prototype.getTransactionByBlockNumberAndIndex = o("eth_getTransactionByBlockNumberAndIndex"),
            s.prototype.getTransactionReceipt = o("eth_getTransactionReceipt"),
            s.prototype.getUncleByBlockHashAndIndex = o("eth_getUncleByBlockHashAndIndex"),
            s.prototype.getUncleByBlockNumberAndIndex = o("eth_getUncleByBlockNumberAndIndex"),
            s.prototype.getCompilers = o("eth_getCompilers"),
            s.prototype.compileLLL = o("eth_compileLLL"),
            s.prototype.compileSolidity = o("eth_compileSolidity"),
            s.prototype.compileSerpent = o("eth_compileSerpent"),
            s.prototype.newFilter = o("eth_newFilter"),
            s.prototype.newBlockFilter = o("eth_newBlockFilter"),
            s.prototype.newPendingTransactionFilter = o("eth_newPendingTransactionFilter"),
            s.prototype.uninstallFilter = o("eth_uninstallFilter"),
            s.prototype.getFilterChanges = o("eth_getFilterChanges"),
            s.prototype.getFilterLogs = o("eth_getFilterLogs"),
            s.prototype.getLogs = o("eth_getLogs"),
            s.prototype.getWork = o("eth_getWork"),
            s.prototype.submitWork = o("eth_submitWork"),
            s.prototype.submitHashrate = o("eth_submitHashrate"),
            s.prototype.sendAsync = function (e, t) {
                this.currentProvider.sendAsync(n({
                    id: i(),
                    jsonrpc: "2.0",
                    params: []
                }, e), function (e, r) {
                    if (!e && r.error && (e = Error("EthQuery - RPC Error - " + r.error.message)),
                        e)
                        return t(e);
                    t(null, r.result)
                })
            }
    },
    12294: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.EthereumProviderError = t.EthereumRpcError = void 0;
        let n = r(4445);
        class i extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw Error('"code" must be an integer.');
                if (!t || "string" != typeof t)
                    throw Error('"message" must be a nonempty string.');
                super(t),
                    this.code = e,
                    void 0 !== r && (this.data = r)
            }
            serialize() {
                let e = {
                    code: this.code,
                    message: this.message
                };
                return void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
            }
            toString() {
                return n.default(this.serialize(), s, 2)
            }
        }
        function s(e, t) {
            if ("[Circular]" !== t)
                return t
        }
        t.EthereumRpcError = i,
            t.EthereumProviderError = class extends i {
                constructor(e, t, r) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
                        throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, r)
                }
            }
    },
    92662: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.errorValues = t.errorCodes = void 0,
            t.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            },
            t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
    },
    68797: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ethErrors = void 0;
        let n = r(12294)
            , i = r(68753)
            , s = r(92662);
        function o(e, t) {
            let [r, s] = u(t);
            return new n.EthereumRpcError(e, r || i.getMessageFromCode(e), s)
        }
        function a(e, t) {
            let [r, s] = u(t);
            return new n.EthereumProviderError(e, r || i.getMessageFromCode(e), s)
        }
        function u(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    let { message: t, data: r } = e;
                    if (t && "string" != typeof t)
                        throw Error("Must specify string message.");
                    return [t || void 0, r]
                }
            }
            return []
        }
        t.ethErrors = {
            rpc: {
                parse: e => o(s.errorCodes.rpc.parse, e),
                invalidRequest: e => o(s.errorCodes.rpc.invalidRequest, e),
                invalidParams: e => o(s.errorCodes.rpc.invalidParams, e),
                methodNotFound: e => o(s.errorCodes.rpc.methodNotFound, e),
                internal: e => o(s.errorCodes.rpc.internal, e),
                server: e => {
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw Error("Ethereum RPC Server errors must provide single object argument.");
                    let { code: t } = e;
                    if (!Number.isInteger(t) || t > -32005 || t < -32099)
                        throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                    return o(t, e)
                }
                ,
                invalidInput: e => o(s.errorCodes.rpc.invalidInput, e),
                resourceNotFound: e => o(s.errorCodes.rpc.resourceNotFound, e),
                resourceUnavailable: e => o(s.errorCodes.rpc.resourceUnavailable, e),
                transactionRejected: e => o(s.errorCodes.rpc.transactionRejected, e),
                methodNotSupported: e => o(s.errorCodes.rpc.methodNotSupported, e),
                limitExceeded: e => o(s.errorCodes.rpc.limitExceeded, e)
            },
            provider: {
                userRejectedRequest: e => a(s.errorCodes.provider.userRejectedRequest, e),
                unauthorized: e => a(s.errorCodes.provider.unauthorized, e),
                unsupportedMethod: e => a(s.errorCodes.provider.unsupportedMethod, e),
                disconnected: e => a(s.errorCodes.provider.disconnected, e),
                chainDisconnected: e => a(s.errorCodes.provider.chainDisconnected, e),
                custom: e => {
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw Error("Ethereum Provider custom errors must provide single object argument.");
                    let { code: t, message: r, data: i } = e;
                    if (!r || "string" != typeof r)
                        throw Error('"message" must be a nonempty string');
                    return new n.EthereumProviderError(t, r, i)
                }
            }
        }
    },
    79826: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
        let n = r(12294);
        Object.defineProperty(t, "EthereumRpcError", {
            enumerable: !0,
            get: function () {
                return n.EthereumRpcError
            }
        }),
            Object.defineProperty(t, "EthereumProviderError", {
                enumerable: !0,
                get: function () {
                    return n.EthereumProviderError
                }
            });
        let i = r(68753);
        Object.defineProperty(t, "serializeError", {
            enumerable: !0,
            get: function () {
                return i.serializeError
            }
        }),
            Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function () {
                    return i.getMessageFromCode
                }
            });
        let s = r(68797);
        Object.defineProperty(t, "ethErrors", {
            enumerable: !0,
            get: function () {
                return s.ethErrors
            }
        });
        let o = r(92662);
        Object.defineProperty(t, "errorCodes", {
            enumerable: !0,
            get: function () {
                return o.errorCodes
            }
        })
    },
    68753: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
        let n = r(92662)
            , i = r(12294)
            , s = n.errorCodes.rpc.internal
            , o = {
                code: s,
                message: a(s)
            };
        function a(e, r = "Unspecified error message. This is a bug, please report it.") {
            if (Number.isInteger(e)) {
                let r = e.toString();
                if (l(n.errorValues, r))
                    return n.errorValues[r].message;
                if (e >= -32099 && e <= -32e3)
                    return t.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return r
        }
        function u(e) {
            if (!Number.isInteger(e))
                return !1;
            let t = e.toString();
            return !!(n.errorValues[t] || e >= -32099 && e <= -32e3)
        }
        function c(e) {
            return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
        }
        function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
            t.getMessageFromCode = a,
            t.isValidCode = u,
            t.serializeError = function (e, { fallbackError: t = o, shouldIncludeStack: r = !1 } = {}) {
                if (!t || !Number.isInteger(t.code) || "string" != typeof t.message)
                    throw Error("Must provide fallback error with integer number code and string message.");
                if (e instanceof i.EthereumRpcError)
                    return e.serialize();
                let n = {};
                if (e && "object" == typeof e && !Array.isArray(e) && l(e, "code") && u(e.code))
                    n.code = e.code,
                        e.message && "string" == typeof e.message ? (n.message = e.message,
                            l(e, "data") && (n.data = e.data)) : (n.message = a(n.code),
                                n.data = {
                                    originalError: c(e)
                                });
                else {
                    n.code = t.code;
                    let r = null == e ? void 0 : e.message;
                    n.message = r && "string" == typeof r ? r : t.message,
                        n.data = {
                            originalError: c(e)
                        }
                }
                let s = null == e ? void 0 : e.stack;
                return r && e && s && "string" == typeof s && (n.stack = s),
                    n
            }
    },
    4445: function (e) {
        e.exports = o,
            o.default = o,
            o.stable = c,
            o.stableStringify = c;
        var t = "[...]"
            , r = "[Circular]"
            , n = []
            , i = [];
        function s() {
            return {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER
            }
        }
        function o(e, o, u, c) {
            void 0 === c && (c = s()),
                function e(n, i, s, o, u, c, l) {
                    if (c += 1,
                        "object" == typeof n && null !== n) {
                        for (h = 0; h < o.length; h++)
                            if (o[h] === n) {
                                a(r, n, i, u);
                                return
                            }
                        if (void 0 !== l.depthLimit && c > l.depthLimit || void 0 !== l.edgesLimit && s + 1 > l.edgesLimit) {
                            a(t, n, i, u);
                            return
                        }
                        if (o.push(n),
                            Array.isArray(n))
                            for (h = 0; h < n.length; h++)
                                e(n[h], h, h, o, n, c, l);
                        else {
                            var h, d = Object.keys(n);
                            for (h = 0; h < d.length; h++) {
                                var f = d[h];
                                e(n[f], f, h, o, n, c, l)
                            }
                        }
                        o.pop()
                    }
                }(e, "", 0, [], void 0, 0, c);
            try {
                h = 0 === i.length ? JSON.stringify(e, o, u) : JSON.stringify(e, l(o), u)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== n.length;) {
                    var h, d = n.pop();
                    4 === d.length ? Object.defineProperty(d[0], d[1], d[3]) : d[0][d[1]] = d[2]
                }
            }
            return h
        }
        function a(e, t, r, s) {
            var o = Object.getOwnPropertyDescriptor(s, r);
            void 0 !== o.get ? o.configurable ? (Object.defineProperty(s, r, {
                value: e
            }),
                n.push([s, r, t, o])) : i.push([t, r, e]) : (s[r] = e,
                    n.push([s, r, t]))
        }
        function u(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function c(e, o, c, h) {
            void 0 === h && (h = s());
            var d, f = function e(i, s, o, c, l, h, d) {
                if (h += 1,
                    "object" == typeof i && null !== i) {
                    for (f = 0; f < c.length; f++)
                        if (c[f] === i) {
                            a(r, i, s, l);
                            return
                        }
                    try {
                        if ("function" == typeof i.toJSON)
                            return
                    } catch (e) {
                        return
                    }
                    if (void 0 !== d.depthLimit && h > d.depthLimit || void 0 !== d.edgesLimit && o + 1 > d.edgesLimit) {
                        a(t, i, s, l);
                        return
                    }
                    if (c.push(i),
                        Array.isArray(i))
                        for (f = 0; f < i.length; f++)
                            e(i[f], f, f, c, i, h, d);
                    else {
                        var f, p = {}, g = Object.keys(i).sort(u);
                        for (f = 0; f < g.length; f++) {
                            var m = g[f];
                            e(i[m], m, f, c, i, h, d),
                                p[m] = i[m]
                        }
                        if (void 0 === l)
                            return p;
                        n.push([l, s, i]),
                            l[s] = p
                    }
                    c.pop()
                }
            }(e, "", 0, [], void 0, 0, h) || e;
            try {
                d = 0 === i.length ? JSON.stringify(f, o, c) : JSON.stringify(f, l(o), c)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== n.length;) {
                    var p = n.pop();
                    4 === p.length ? Object.defineProperty(p[0], p[1], p[3]) : p[0][p[1]] = p[2]
                }
            }
            return d
        }
        function l(e) {
            return e = void 0 !== e ? e : function (e, t) {
                return t
            }
                ,
                function (t, r) {
                    if (i.length > 0)
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n];
                            if (s[1] === t && s[0] === r) {
                                r = s[2],
                                    i.splice(n, 1);
                                break
                            }
                        }
                    return e.call(this, t, r)
                }
        }
    },
    23420: function (e) {
        e.exports = function (e) {
            var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER
                , r = void 0 !== e.start ? e.start : Math.floor(Math.random() * t);
            return function () {
                return r %= t,
                    r++
            }
        }
    },
    70631: function (e, t, r) {
        var n = "function" == typeof Map && Map.prototype
            , i = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
            , s = n && i && "function" == typeof i.get ? i.get : null
            , o = n && Map.prototype.forEach
            , a = "function" == typeof Set && Set.prototype
            , u = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
            , c = a && u && "function" == typeof u.get ? u.get : null
            , l = a && Set.prototype.forEach
            , h = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null
            , d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null
            , f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null
            , p = Boolean.prototype.valueOf
            , g = Object.prototype.toString
            , m = Function.prototype.toString
            , y = String.prototype.match
            , b = String.prototype.slice
            , v = String.prototype.replace
            , _ = String.prototype.toUpperCase
            , w = String.prototype.toLowerCase
            , E = RegExp.prototype.test
            , S = Array.prototype.concat
            , M = Array.prototype.join
            , x = Array.prototype.slice
            , C = Math.floor
            , k = "function" == typeof BigInt ? BigInt.prototype.valueOf : null
            , I = Object.getOwnPropertySymbols
            , R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null
            , N = "function" == typeof Symbol && "object" == typeof Symbol.iterator
            , A = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === N ? "object" : "symbol") ? Symbol.toStringTag : null
            , O = Object.prototype.propertyIsEnumerable
            , L = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
                return e.__proto__
            }
                : null);
        function T(e, t) {
            if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || E.call(/e/, t))
                return t;
            var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if ("number" == typeof e) {
                var n = e < 0 ? -C(-e) : C(e);
                if (n !== e) {
                    var i = String(n)
                        , s = b.call(t, i.length + 1);
                    return v.call(i, r, "$&_") + "." + v.call(v.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
                }
            }
            return v.call(t, r, "$&_")
        }
        var j = r(24654)
            , P = j.custom
            , D = V(P) ? P : null;
        function B(e, t, r) {
            var n = "double" === (r.quoteStyle || t) ? '"' : "'";
            return n + e + n
        }
        function F(e) {
            return "[object Array]" === W(e) && (!A || !("object" == typeof e && A in e))
        }
        function $(e) {
            return "[object RegExp]" === W(e) && (!A || !("object" == typeof e && A in e))
        }
        function V(e) {
            if (N)
                return e && "object" == typeof e && e instanceof Symbol;
            if ("symbol" == typeof e)
                return !0;
            if (!e || "object" != typeof e || !R)
                return !1;
            try {
                return R.call(e),
                    !0
            } catch (e) { }
            return !1
        }
        e.exports = function e(t, n, i, a) {
            var u = n || {};
            if (H(u, "quoteStyle") && "single" !== u.quoteStyle && "double" !== u.quoteStyle)
                throw TypeError('option "quoteStyle" must be "single" or "double"');
            if (H(u, "maxStringLength") && ("number" == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength))
                throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var g = !H(u, "customInspect") || u.customInspect;
            if ("boolean" != typeof g && "symbol" !== g)
                throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (H(u, "indent") && null !== u.indent && "	" !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0))
                throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (H(u, "numericSeparator") && "boolean" != typeof u.numericSeparator)
                throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var _ = u.numericSeparator;
            if (void 0 === t)
                return "undefined";
            if (null === t)
                return "null";
            if ("boolean" == typeof t)
                return t ? "true" : "false";
            if ("string" == typeof t)
                return function e(t, r) {
                    if (t.length > r.maxStringLength) {
                        var n = t.length - r.maxStringLength;
                        return e(b.call(t, 0, r.maxStringLength), r) + "... " + n + " more character" + (n > 1 ? "s" : "")
                    }
                    return B(v.call(v.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, q), "single", r)
                }(t, u);
            if ("number" == typeof t) {
                if (0 === t)
                    return 1 / 0 / t > 0 ? "0" : "-0";
                var E = String(t);
                return _ ? T(t, E) : E
            }
            if ("bigint" == typeof t) {
                var C = String(t) + "n";
                return _ ? T(t, C) : C
            }
            var I = void 0 === u.depth ? 5 : u.depth;
            if (void 0 === i && (i = 0),
                i >= I && I > 0 && "object" == typeof t)
                return F(t) ? "[Array]" : "[Object]";
            var P = function (e, t) {
                var r;
                if ("	" === e.indent)
                    r = "	";
                else {
                    if ("number" != typeof e.indent || !(e.indent > 0))
                        return null;
                    r = M.call(Array(e.indent + 1), " ")
                }
                return {
                    base: r,
                    prev: M.call(Array(t + 1), r)
                }
            }(u, i);
            if (void 0 === a)
                a = [];
            else if (U(a, t) >= 0)
                return "[Circular]";
            function z(t, r, n) {
                if (r && (a = x.call(a)).push(r),
                    n) {
                    var s = {
                        depth: u.depth
                    };
                    return H(u, "quoteStyle") && (s.quoteStyle = u.quoteStyle),
                        e(t, s, i + 1, a)
                }
                return e(t, u, i + 1, a)
            }
            if ("function" == typeof t && !$(t)) {
                var K = function (e) {
                    if (e.name)
                        return e.name;
                    var t = y.call(m.call(e), /^function\s*([\w$]+)/);
                    return t ? t[1] : null
                }(t)
                    , X = Y(t, z);
                return "[Function" + (K ? ": " + K : " (anonymous)") + "]" + (X.length > 0 ? " { " + M.call(X, ", ") + " }" : "")
            }
            if (V(t)) {
                var ee = N ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : R.call(t);
                return "object" != typeof t || N ? ee : J(ee)
            }
            if (t && "object" == typeof t && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)) {
                for (var et, er = "<" + w.call(String(t.nodeName)), en = t.attributes || [], ei = 0; ei < en.length; ei++)
                    er += " " + en[ei].name + "=" + B((et = en[ei].value,
                        v.call(String(et), /"/g, "&quot;")), "double", u);
                return er += ">",
                    t.childNodes && t.childNodes.length && (er += "..."),
                    er += "</" + w.call(String(t.nodeName)) + ">"
            }
            if (F(t)) {
                if (0 === t.length)
                    return "[]";
                var es = Y(t, z);
                return P && !function (e) {
                    for (var t = 0; t < e.length; t++)
                        if (U(e[t], "\n") >= 0)
                            return !1;
                    return !0
                }(es) ? "[" + Q(es, P) + "]" : "[ " + M.call(es, ", ") + " ]"
            }
            if ("[object Error]" === W(t) && (!A || !("object" == typeof t && A in t))) {
                var eo = Y(t, z);
                return "cause" in Error.prototype || !("cause" in t) || O.call(t, "cause") ? 0 === eo.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + M.call(eo, ", ") + " }" : "{ [" + String(t) + "] " + M.call(S.call("[cause]: " + z(t.cause), eo), ", ") + " }"
            }
            if ("object" == typeof t && g) {
                if (D && "function" == typeof t[D] && j)
                    return j(t, {
                        depth: I - i
                    });
                if ("symbol" !== g && "function" == typeof t.inspect)
                    return t.inspect()
            }
            if (function (e) {
                if (!s || !e || "object" != typeof e)
                    return !1;
                try {
                    s.call(e);
                    try {
                        c.call(e)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof Map
                } catch (e) { }
                return !1
            }(t)) {
                var ea = [];
                return o && o.call(t, function (e, r) {
                    ea.push(z(r, t, !0) + " => " + z(e, t))
                }),
                    Z("Map", s.call(t), ea, P)
            }
            if (function (e) {
                if (!c || !e || "object" != typeof e)
                    return !1;
                try {
                    c.call(e);
                    try {
                        s.call(e)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof Set
                } catch (e) { }
                return !1
            }(t)) {
                var eu = [];
                return l && l.call(t, function (e) {
                    eu.push(z(e, t))
                }),
                    Z("Set", c.call(t), eu, P)
            }
            if (function (e) {
                if (!h || !e || "object" != typeof e)
                    return !1;
                try {
                    h.call(e, h);
                    try {
                        d.call(e, d)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof WeakMap
                } catch (e) { }
                return !1
            }(t))
                return G("WeakMap");
            if (function (e) {
                if (!d || !e || "object" != typeof e)
                    return !1;
                try {
                    d.call(e, d);
                    try {
                        h.call(e, h)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof WeakSet
                } catch (e) { }
                return !1
            }(t))
                return G("WeakSet");
            if (function (e) {
                if (!f || !e || "object" != typeof e)
                    return !1;
                try {
                    return f.call(e),
                        !0
                } catch (e) { }
                return !1
            }(t))
                return G("WeakRef");
            if ("[object Number]" === W(t) && (!A || !("object" == typeof t && A in t)))
                return J(z(Number(t)));
            if (function (e) {
                if (!e || "object" != typeof e || !k)
                    return !1;
                try {
                    return k.call(e),
                        !0
                } catch (e) { }
                return !1
            }(t))
                return J(z(k.call(t)));
            if ("[object Boolean]" === W(t) && (!A || !("object" == typeof t && A in t)))
                return J(p.call(t));
            if ("[object String]" === W(t) && (!A || !("object" == typeof t && A in t)))
                return J(z(String(t)));
            if ("undefined" != typeof window && t === window)
                return "{ [object Window] }";
            if (t === r.g)
                return "{ [object globalThis] }";
            if (!("[object Date]" === W(t) && (!A || !("object" == typeof t && A in t))) && !$(t)) {
                var ec = Y(t, z)
                    , el = L ? L(t) === Object.prototype : t instanceof Object || t.constructor === Object
                    , eh = t instanceof Object ? "" : "null prototype"
                    , ed = !el && A && Object(t) === t && A in t ? b.call(W(t), 8, -1) : eh ? "Object" : ""
                    , ef = (el || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (ed || eh ? "[" + M.call(S.call([], ed || [], eh || []), ": ") + "] " : "");
                return 0 === ec.length ? ef + "{}" : P ? ef + "{" + Q(ec, P) + "}" : ef + "{ " + M.call(ec, ", ") + " }"
            }
            return String(t)
        }
            ;
        var z = Object.prototype.hasOwnProperty || function (e) {
            return e in this
        }
            ;
        function H(e, t) {
            return z.call(e, t)
        }
        function W(e) {
            return g.call(e)
        }
        function U(e, t) {
            if (e.indexOf)
                return e.indexOf(t);
            for (var r = 0, n = e.length; r < n; r++)
                if (e[r] === t)
                    return r;
            return -1
        }
        function q(e) {
            var t = e.charCodeAt(0)
                , r = {
                    8: "b",
                    9: "t",
                    10: "n",
                    12: "f",
                    13: "r"
                }[t];
            return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + _.call(t.toString(16))
        }
        function J(e) {
            return "Object(" + e + ")"
        }
        function G(e) {
            return e + " { ? }"
        }
        function Z(e, t, r, n) {
            return e + " (" + t + ") {" + (n ? Q(r, n) : M.call(r, ", ")) + "}"
        }
        function Q(e, t) {
            if (0 === e.length)
                return "";
            var r = "\n" + t.prev + t.base;
            return r + M.call(e, "," + r) + "\n" + t.prev
        }
        function Y(e, t) {
            var r, n = F(e), i = [];
            if (n) {
                i.length = e.length;
                for (var s = 0; s < e.length; s++)
                    i[s] = H(e, s) ? t(e[s], e) : ""
            }
            var o = "function" == typeof I ? I(e) : [];
            if (N) {
                r = {};
                for (var a = 0; a < o.length; a++)
                    r["$" + o[a]] = o[a]
            }
            for (var u in e)
                H(e, u) && (!n || String(Number(u)) !== u || !(u < e.length)) && (N && r["$" + u] instanceof Symbol || (E.call(/[^\w$]/, u) ? i.push(t(u, e) + ": " + t(e[u], e)) : i.push(u + ": " + t(e[u], e))));
            if ("function" == typeof I)
                for (var c = 0; c < o.length; c++)
                    O.call(e, o[c]) && i.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
            return i
        }
    },
    6400: function (e, t, r) {
        "use strict";
        r.r(t),
            r.d(t, {
                Component: function () {
                    return E
                },
                Fragment: function () {
                    return w
                },
                cloneElement: function () {
                    return F
                },
                createContext: function () {
                    return $
                },
                createElement: function () {
                    return b
                },
                createRef: function () {
                    return _
                },
                h: function () {
                    return b
                },
                hydrate: function () {
                    return B
                },
                isValidElement: function () {
                    return o
                },
                options: function () {
                    return i
                },
                render: function () {
                    return D
                },
                toChildArray: function () {
                    return function e(t, r) {
                        return r = r || [],
                            null == t || "boolean" == typeof t || (g(t) ? t.some(function (t) {
                                e(t, r)
                            }) : r.push(t)),
                            r
                    }
                }
            });
        var n, i, s, o, a, u, c, l, h, d = {}, f = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, g = Array.isArray;
        function m(e, t) {
            for (var r in t)
                e[r] = t[r];
            return e
        }
        function y(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function b(e, t, r) {
            var i, s, o, a = {};
            for (o in t)
                "key" == o ? i = t[o] : "ref" == o ? s = t[o] : a[o] = t[o];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? n.call(arguments, 2) : r),
                "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps)
                    void 0 === a[o] && (a[o] = e.defaultProps[o]);
            return v(e, a, i, s, null)
        }
        function v(e, t, r, n, o) {
            var a = {
                type: e,
                props: t,
                key: r,
                ref: n,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == o ? ++s : o
            };
            return null == o && null != i.vnode && i.vnode(a),
                a
        }
        function _() {
            return {
                current: null
            }
        }
        function w(e) {
            return e.children
        }
        function E(e, t) {
            this.props = e,
                this.context = t
        }
        function S(e, t) {
            if (null == t)
                return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var r; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e)
                    return r.__d || r.__e;
            return "function" == typeof e.type ? S(e) : null
        }
        function M(e) {
            (!e.__d && (e.__d = !0) && a.push(e) && !x.__r++ || u !== i.debounceRendering) && ((u = i.debounceRendering) || c)(x)
        }
        function x() {
            var e, t, r, n, i, s, o, u, c;
            for (a.sort(l); e = a.shift();)
                e.__d && (t = a.length,
                    n = void 0,
                    i = void 0,
                    s = void 0,
                    u = (o = (r = e).__v).__e,
                    (c = r.__P) && (n = [],
                        i = [],
                        (s = m({}, o)).__v = o.__v + 1,
                        O(c, o, s, r.__n, void 0 !== c.ownerSVGElement, null != o.__h ? [u] : null, n, null == u ? S(o) : u, o.__h, i),
                        L(n, o, i),
                        o.__e != u && function e(t) {
                            var r, n;
                            if (null != (t = t.__) && null != t.__c) {
                                for (t.__e = t.__c.base = null,
                                    r = 0; r < t.__k.length; r++)
                                    if (null != (n = t.__k[r]) && null != n.__e) {
                                        t.__e = t.__c.base = n.__e;
                                        break
                                    }
                                return e(t)
                            }
                        }(o)),
                    a.length > t && a.sort(l));
            x.__r = 0
        }
        function C(e, t, r, n, i, s, o, a, u, c, l) {
            var h, p, m, y, b, _, E, M, x, C = 0, I = n && n.__k || f, R = I.length, N = R, A = t.length;
            for (r.__k = [],
                h = 0; h < A; h++)
                null != (y = r.__k[h] = null == (y = t[h]) || "boolean" == typeof y || "function" == typeof y ? null : "string" == typeof y || "number" == typeof y || "bigint" == typeof y ? v(null, y, null, null, y) : g(y) ? v(w, {
                    children: y
                }, null, null, null) : y.__b > 0 ? v(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v) : y) ? (y.__ = r,
                    y.__b = r.__b + 1,
                    -1 === (M = function (e, t, r, n) {
                        var i = e.key
                            , s = e.type
                            , o = r - 1
                            , a = r + 1
                            , u = t[r];
                        if (null === u || u && i == u.key && s === u.type)
                            return r;
                        if (n > (null != u ? 1 : 0))
                            for (; o >= 0 || a < t.length;) {
                                if (o >= 0) {
                                    if ((u = t[o]) && i == u.key && s === u.type)
                                        return o;
                                    o--
                                }
                                if (a < t.length) {
                                    if ((u = t[a]) && i == u.key && s === u.type)
                                        return a;
                                    a++
                                }
                            }
                        return -1
                    }(y, I, E = h + C, N)) ? m = d : (m = I[M] || d,
                        I[M] = void 0,
                        N--),
                    O(e, y, m, i, s, o, a, u, c, l),
                    b = y.__e,
                    (p = y.ref) && m.ref != p && (m.ref && T(m.ref, null, y),
                        l.push(p, y.__c || b, y)),
                    null != b && (null == _ && (_ = b),
                        (x = m === d || null === m.__v) ? -1 == M && C-- : M !== E && (M === E + 1 ? C++ : M > E ? N > A - E ? C += M - E : C-- : C = M < E && M == E - 1 ? M - E : 0),
                        E = h + C,
                        "function" != typeof y.type || M === E && m.__k !== y.__k ? "function" != typeof y.type && (M !== E || x) ? u = k(e, b, u) : void 0 !== y.__d ? (u = y.__d,
                            y.__d = void 0) : u = b.nextSibling : u = function e(t, r, n) {
                                for (var i, s = t.__k, o = 0; s && o < s.length; o++)
                                    (i = s[o]) && (i.__ = t,
                                        r = "function" == typeof i.type ? e(i, r, n) : k(n, i.__e, r));
                                return r
                            }(y, u, e),
                        "function" == typeof r.type && (r.__d = u))) : (m = I[h]) && null == m.key && m.__e && (m.__e == u && (m.__ = n,
                            u = S(m)),
                            j(m, m, !1),
                            I[h] = null);
            for (r.__e = _,
                h = R; h--;)
                null != I[h] && ("function" == typeof r.type && null != I[h].__e && I[h].__e == r.__d && (r.__d = I[h].__e.nextSibling),
                    j(I[h], I[h]))
        }
        function k(e, t, r) {
            return null == r || r.parentNode !== e ? e.insertBefore(t, null) : t == r && null != t.parentNode || e.insertBefore(t, r),
                t.nextSibling
        }
        function I(e, t, r) {
            "-" === t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || p.test(t) ? r : r + "px"
        }
        function R(e, t, r, n, i) {
            var s;
            t: if ("style" === t) {
                if ("string" == typeof r)
                    e.style.cssText = r;
                else {
                    if ("string" == typeof n && (e.style.cssText = n = ""),
                        n)
                        for (t in n)
                            r && t in r || I(e.style, t, "");
                    if (r)
                        for (t in r)
                            n && r[t] === n[t] || I(e.style, t, r[t])
                }
            } else if ("o" === t[0] && "n" === t[1])
                s = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")),
                    t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2),
                    e.l || (e.l = {}),
                    e.l[t + s] = r,
                    r ? n ? r.u = n.u : (r.u = Date.now(),
                        e.addEventListener(t, s ? A : N, s)) : e.removeEventListener(t, s ? A : N, s);
            else if ("dangerouslySetInnerHTML" !== t) {
                if (i)
                    t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e)
                    try {
                        e[t] = null == r ? "" : r;
                        break t
                    } catch (e) { }
                "function" == typeof r || (null == r || !1 === r && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, r))
            }
        }
        function N(e) {
            var t = this.l[e.type + !1];
            if (e.t) {
                if (e.t <= t.u)
                    return
            } else
                e.t = Date.now();
            return t(i.event ? i.event(e) : e)
        }
        function A(e) {
            return this.l[e.type + !0](i.event ? i.event(e) : e)
        }
        function O(e, t, r, s, o, a, u, c, l, h) {
            var f, p, b, v, _, M, x, k, I, N, A, O, L, T, j, D = t.type;
            if (void 0 !== t.constructor)
                return null;
            null != r.__h && (l = r.__h,
                c = t.__e = r.__e,
                t.__h = null,
                a = [c]),
                (f = i.__b) && f(t);
            t: if ("function" == typeof D)
                try {
                    if (k = t.props,
                        I = (f = D.contextType) && s[f.__c],
                        N = f ? I ? I.props.value : f.__ : s,
                        r.__c ? x = (p = t.__c = r.__c).__ = p.__E : ("prototype" in D && D.prototype.render ? t.__c = p = new D(k, N) : (t.__c = p = new E(k, N),
                            p.constructor = D,
                            p.render = P),
                            I && I.sub(p),
                            p.props = k,
                            p.state || (p.state = {}),
                            p.context = N,
                            p.__n = s,
                            b = p.__d = !0,
                            p.__h = [],
                            p._sb = []),
                        null == p.__s && (p.__s = p.state),
                        null != D.getDerivedStateFromProps && (p.__s == p.state && (p.__s = m({}, p.__s)),
                            m(p.__s, D.getDerivedStateFromProps(k, p.__s))),
                        v = p.props,
                        _ = p.state,
                        p.__v = t,
                        b)
                        null == D.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(),
                            null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (null == D.getDerivedStateFromProps && k !== v && null != p.componentWillReceiveProps && p.componentWillReceiveProps(k, N),
                            !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(k, p.__s, N) || t.__v === r.__v)) {
                            for (t.__v !== r.__v && (p.props = k,
                                p.state = p.__s,
                                p.__d = !1),
                                t.__e = r.__e,
                                t.__k = r.__k,
                                t.__k.forEach(function (e) {
                                    e && (e.__ = t)
                                }),
                                A = 0; A < p._sb.length; A++)
                                p.__h.push(p._sb[A]);
                            p._sb = [],
                                p.__h.length && u.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(k, p.__s, N),
                            null != p.componentDidUpdate && p.__h.push(function () {
                                p.componentDidUpdate(v, _, M)
                            })
                    }
                    if (p.context = N,
                        p.props = k,
                        p.__P = e,
                        p.__e = !1,
                        O = i.__r,
                        L = 0,
                        "prototype" in D && D.prototype.render) {
                        for (p.state = p.__s,
                            p.__d = !1,
                            O && O(t),
                            f = p.render(p.props, p.state, p.context),
                            T = 0; T < p._sb.length; T++)
                            p.__h.push(p._sb[T]);
                        p._sb = []
                    } else
                        do
                            p.__d = !1,
                                O && O(t),
                                f = p.render(p.props, p.state, p.context),
                                p.state = p.__s;
                        while (p.__d && ++L < 25);
                    p.state = p.__s,
                        null != p.getChildContext && (s = m(m({}, s), p.getChildContext())),
                        b || null == p.getSnapshotBeforeUpdate || (M = p.getSnapshotBeforeUpdate(v, _)),
                        C(e, g(j = null != f && f.type === w && null == f.key ? f.props.children : f) ? j : [j], t, r, s, o, a, u, c, l, h),
                        p.base = t.__e,
                        t.__h = null,
                        p.__h.length && u.push(p),
                        x && (p.__E = p.__ = null)
                } catch (e) {
                    t.__v = null,
                        (l || null != a) && (t.__e = c,
                            t.__h = !!l,
                            a[a.indexOf(c)] = null),
                        i.__e(e, t, r)
                }
            else
                null == a && t.__v === r.__v ? (t.__k = r.__k,
                    t.__e = r.__e) : t.__e = function (e, t, r, i, s, o, a, u, c) {
                        var l, h, f, p = r.props, m = t.props, b = t.type, v = 0;
                        if ("svg" === b && (s = !0),
                            null != o) {
                            for (; v < o.length; v++)
                                if ((l = o[v]) && "setAttribute" in l == !!b && (b ? l.localName === b : 3 === l.nodeType)) {
                                    e = l,
                                        o[v] = null;
                                    break
                                }
                        }
                        if (null == e) {
                            if (null === b)
                                return document.createTextNode(m);
                            e = s ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, m.is && m),
                                o = null,
                                u = !1
                        }
                        if (null === b)
                            p === m || u && e.data === m || (e.data = m);
                        else {
                            if (o = o && n.call(e.childNodes),
                                h = (p = r.props || d).dangerouslySetInnerHTML,
                                f = m.dangerouslySetInnerHTML,
                                !u) {
                                if (null != o)
                                    for (p = {},
                                        v = 0; v < e.attributes.length; v++)
                                        p[e.attributes[v].name] = e.attributes[v].value;
                                (f || h) && (f && (h && f.__html == h.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
                            }
                            if (function (e, t, r, n, i) {
                                var s;
                                for (s in r)
                                    "children" === s || "key" === s || s in t || R(e, s, null, r[s], n);
                                for (s in t)
                                    i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || r[s] === t[s] || R(e, s, t[s], r[s], n)
                            }(e, m, p, s, u),
                                f)
                                t.__k = [];
                            else if (C(e, g(v = t.props.children) ? v : [v], t, r, i, s && "foreignObject" !== b, o, a, o ? o[0] : r.__k && S(r, 0), u, c),
                                null != o)
                                for (v = o.length; v--;)
                                    null != o[v] && y(o[v]);
                            u || ("value" in m && void 0 !== (v = m.value) && (v !== e.value || "progress" === b && !v || "option" === b && v !== p.value) && R(e, "value", v, p.value, !1),
                                "checked" in m && void 0 !== (v = m.checked) && v !== e.checked && R(e, "checked", v, p.checked, !1))
                        }
                        return e
                    }(r.__e, t, r, s, o, a, u, l, h);
            (f = i.diffed) && f(t)
        }
        function L(e, t, r) {
            for (var n = 0; n < r.length; n++)
                T(r[n], r[++n], r[++n]);
            i.__c && i.__c(t, e),
                e.some(function (t) {
                    try {
                        e = t.__h,
                            t.__h = [],
                            e.some(function (e) {
                                e.call(t)
                            })
                    } catch (e) {
                        i.__e(e, t.__v)
                    }
                })
        }
        function T(e, t, r) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                i.__e(e, r)
            }
        }
        function j(e, t, r) {
            var n, s;
            if (i.unmount && i.unmount(e),
                (n = e.ref) && (n.current && n.current !== e.__e || T(n, null, t)),
                null != (n = e.__c)) {
                if (n.componentWillUnmount)
                    try {
                        n.componentWillUnmount()
                    } catch (e) {
                        i.__e(e, t)
                    }
                n.base = n.__P = null,
                    e.__c = void 0
            }
            if (n = e.__k)
                for (s = 0; s < n.length; s++)
                    n[s] && j(n[s], t, r || "function" != typeof e.type);
            r || null == e.__e || y(e.__e),
                e.__ = e.__e = e.__d = void 0
        }
        function P(e, t, r) {
            return this.constructor(e, r)
        }
        function D(e, t, r) {
            var s, o, a, u;
            i.__ && i.__(e, t),
                o = (s = "function" == typeof r) ? null : r && r.__k || t.__k,
                a = [],
                u = [],
                O(t, e = (!s && r || t).__k = b(w, null, [e]), o || d, d, void 0 !== t.ownerSVGElement, !s && r ? [r] : o ? null : t.firstChild ? n.call(t.childNodes) : null, a, !s && r ? r : o ? o.__e : t.firstChild, s, u),
                L(a, e, u)
        }
        function B(e, t) {
            D(e, t, B)
        }
        function F(e, t, r) {
            var i, s, o, a, u = m({}, e.props);
            for (o in e.type && e.type.defaultProps && (a = e.type.defaultProps),
                t)
                "key" == o ? i = t[o] : "ref" == o ? s = t[o] : u[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o];
            return arguments.length > 2 && (u.children = arguments.length > 3 ? n.call(arguments, 2) : r),
                v(e.type, u, i || e.key, s || e.ref, null)
        }
        function $(e, t) {
            var r = {
                __c: t = "__cC" + h++,
                __: e,
                Consumer: function (e, t) {
                    return e.children(t)
                },
                Provider: function (e) {
                    var r, n;
                    return this.getChildContext || (r = [],
                        (n = {})[t] = this,
                        this.getChildContext = function () {
                            return n
                        }
                        ,
                        this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && r.some(function (e) {
                                e.__e = !0,
                                    M(e)
                            })
                        }
                        ,
                        this.sub = function (e) {
                            r.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                r.splice(r.indexOf(e), 1),
                                    t && t.call(e)
                            }
                        }
                    ),
                        e.children
                }
            };
            return r.Provider.__ = r.Consumer.contextType = r
        }
        n = f.slice,
            i = {
                __e: function (e, t, r, n) {
                    for (var i, s, o; t = t.__;)
                        if ((i = t.__c) && !i.__)
                            try {
                                if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)),
                                    o = i.__d),
                                    null != i.componentDidCatch && (i.componentDidCatch(e, n || {}),
                                        o = i.__d),
                                    o)
                                    return i.__E = i
                            } catch (t) {
                                e = t
                            }
                    throw e
                }
            },
            s = 0,
            o = function (e) {
                return null != e && void 0 === e.constructor
            }
            ,
            E.prototype.setState = function (e, t) {
                var r;
                r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = m({}, this.state),
                    "function" == typeof e && (e = e(m({}, r), this.props)),
                    e && m(r, e),
                    null != e && this.__v && (t && this._sb.push(t),
                        M(this))
            }
            ,
            E.prototype.forceUpdate = function (e) {
                this.__v && (this.__e = !0,
                    e && this.__h.push(e),
                    M(this))
            }
            ,
            E.prototype.render = w,
            a = [],
            c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
            l = function (e, t) {
                return e.__v.__b - t.__v.__b
            }
            ,
            x.__r = 0,
            h = 0
    },
    30396: function (e, t, r) {
        "use strict";
        r.r(t),
            r.d(t, {
                useCallback: function () {
                    return M
                },
                useContext: function () {
                    return x
                },
                useDebugValue: function () {
                    return C
                },
                useEffect: function () {
                    return v
                },
                useErrorBoundary: function () {
                    return k
                },
                useId: function () {
                    return I
                },
                useImperativeHandle: function () {
                    return E
                },
                useLayoutEffect: function () {
                    return _
                },
                useMemo: function () {
                    return S
                },
                useReducer: function () {
                    return b
                },
                useRef: function () {
                    return w
                },
                useState: function () {
                    return y
                }
            });
        var n, i, s, o, a = r(6400), u = 0, c = [], l = [], h = a.options.__b, d = a.options.__r, f = a.options.diffed, p = a.options.__c, g = a.options.unmount;
        function m(e, t) {
            a.options.__h && a.options.__h(i, e, u || t),
                u = 0;
            var r = i.__H || (i.__H = {
                __: [],
                __h: []
            });
            return e >= r.__.length && r.__.push({
                __V: l
            }),
                r.__[e]
        }
        function y(e) {
            return u = 1,
                b(j, e)
        }
        function b(e, t, r) {
            var s = m(n++, 2);
            if (s.t = e,
                !s.__c && (s.__ = [r ? r(t) : j(void 0, t), function (e) {
                    var t = s.__N ? s.__N[0] : s.__[0]
                        , r = s.t(t, e);
                    t !== r && (s.__N = [r, s.__[1]],
                        s.__c.setState({}))
                }
                ],
                    s.__c = i,
                    !i.u)) {
                var o = function (e, t, r) {
                    if (!s.__c.__H)
                        return !0;
                    var n = s.__c.__H.__.filter(function (e) {
                        return e.__c
                    });
                    if (n.every(function (e) {
                        return !e.__N
                    }))
                        return !a || a.call(this, e, t, r);
                    var i = !1;
                    return n.forEach(function (e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N,
                                e.__N = void 0,
                                t !== e.__[0] && (i = !0)
                        }
                    }),
                        !(!i && s.__c.props === e) && (!a || a.call(this, e, t, r))
                };
                i.u = !0;
                var a = i.shouldComponentUpdate
                    , u = i.componentWillUpdate;
                i.componentWillUpdate = function (e, t, r) {
                    if (this.__e) {
                        var n = a;
                        a = void 0,
                            o(e, t, r),
                            a = n
                    }
                    u && u.call(this, e, t, r)
                }
                    ,
                    i.shouldComponentUpdate = o
            }
            return s.__N || s.__
        }
        function v(e, t) {
            var r = m(n++, 3);
            !a.options.__s && T(r.__H, t) && (r.__ = e,
                r.i = t,
                i.__H.__h.push(r))
        }
        function _(e, t) {
            var r = m(n++, 4);
            !a.options.__s && T(r.__H, t) && (r.__ = e,
                r.i = t,
                i.__h.push(r))
        }
        function w(e) {
            return u = 5,
                S(function () {
                    return {
                        current: e
                    }
                }, [])
        }
        function E(e, t, r) {
            u = 6,
                _(function () {
                    return "function" == typeof e ? (e(t()),
                        function () {
                            return e(null)
                        }
                    ) : e ? (e.current = t(),
                        function () {
                            return e.current = null
                        }
                    ) : void 0
                }, null == r ? r : r.concat(e))
        }
        function S(e, t) {
            var r = m(n++, 7);
            return T(r.__H, t) ? (r.__V = e(),
                r.i = t,
                r.__h = e,
                r.__V) : r.__
        }
        function M(e, t) {
            return u = 8,
                S(function () {
                    return e
                }, t)
        }
        function x(e) {
            var t = i.context[e.__c]
                , r = m(n++, 9);
            return r.c = e,
                t ? (null == r.__ && (r.__ = !0,
                    t.sub(i)),
                    t.props.value) : e.__
        }
        function C(e, t) {
            a.options.useDebugValue && a.options.useDebugValue(t ? t(e) : e)
        }
        function k(e) {
            var t = m(n++, 10)
                , r = y();
            return t.__ = e,
                i.componentDidCatch || (i.componentDidCatch = function (e, n) {
                    t.__ && t.__(e, n),
                        r[1](e)
                }
                ),
                [r[0], function () {
                    r[1](void 0)
                }
                ]
        }
        function I() {
            var e = m(n++, 11);
            if (!e.__) {
                for (var t = i.__v; null !== t && !t.__m && null !== t.__;)
                    t = t.__;
                var r = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + r[0] + "-" + r[1]++
            }
            return e.__
        }
        function R() {
            for (var e; e = c.shift();)
                if (e.__P && e.__H)
                    try {
                        e.__H.__h.forEach(O),
                            e.__H.__h.forEach(L),
                            e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [],
                            a.options.__e(t, e.__v)
                    }
        }
        a.options.__b = function (e) {
            i = null,
                h && h(e)
        }
            ,
            a.options.__r = function (e) {
                d && d(e),
                    n = 0;
                var t = (i = e.__c).__H;
                t && (s === i ? (t.__h = [],
                    i.__h = [],
                    t.__.forEach(function (e) {
                        e.__N && (e.__ = e.__N),
                            e.__V = l,
                            e.__N = e.i = void 0
                    })) : (t.__h.forEach(O),
                        t.__h.forEach(L),
                        t.__h = [],
                        n = 0)),
                    s = i
            }
            ,
            a.options.diffed = function (e) {
                f && f(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== c.push(t) && o === a.options.requestAnimationFrame || ((o = a.options.requestAnimationFrame) || A)(R)),
                    t.__H.__.forEach(function (e) {
                        e.i && (e.__H = e.i),
                            e.__V !== l && (e.__ = e.__V),
                            e.i = void 0,
                            e.__V = l
                    })),
                    s = i = null
            }
            ,
            a.options.__c = function (e, t) {
                t.some(function (e) {
                    try {
                        e.__h.forEach(O),
                            e.__h = e.__h.filter(function (e) {
                                return !e.__ || L(e)
                            })
                    } catch (r) {
                        t.some(function (e) {
                            e.__h && (e.__h = [])
                        }),
                            t = [],
                            a.options.__e(r, e.__v)
                    }
                }),
                    p && p(e, t)
            }
            ,
            a.options.unmount = function (e) {
                g && g(e);
                var t, r = e.__c;
                r && r.__H && (r.__H.__.forEach(function (e) {
                    try {
                        O(e)
                    } catch (e) {
                        t = e
                    }
                }),
                    r.__H = void 0,
                    t && a.options.__e(t, r.__v))
            }
            ;
        var N = "function" == typeof requestAnimationFrame;
        function A(e) {
            var t, r = function () {
                clearTimeout(n),
                    N && cancelAnimationFrame(t),
                    setTimeout(e)
            }, n = setTimeout(r, 100);
            N && (t = requestAnimationFrame(r))
        }
        function O(e) {
            var t = i
                , r = e.__c;
            "function" == typeof r && (e.__c = void 0,
                r()),
                i = t
        }
        function L(e) {
            var t = i;
            e.__c = e.__(),
                i = t
        }
        function T(e, t) {
            return !e || e.length !== t.length || t.some(function (t, r) {
                return t !== e[r]
            })
        }
        function j(e, t) {
            return "function" == typeof t ? t(e) : t
        }
    },
    16473: function (e, t, r) {
        "use strict";
        r.r(t),
            r.d(t, {
                audit: function () {
                    return s
                },
                auditTime: function () {
                    return l
                },
                buffer: function () {
                    return h
                },
                bufferCount: function () {
                    return g
                },
                bufferTime: function () {
                    return _
                },
                bufferToggle: function () {
                    return N
                },
                bufferWhen: function () {
                    return L
                },
                catchError: function () {
                    return P
                },
                combineAll: function () {
                    return $
                },
                combineLatest: function () {
                    return H
                },
                concat: function () {
                    return U
                },
                concatAll: function () {
                    return q.u
                },
                concatMap: function () {
                    return G
                },
                concatMapTo: function () {
                    return Z
                },
                count: function () {
                    return Q
                },
                debounce: function () {
                    return X
                },
                debounceTime: function () {
                    return er
                },
                defaultIfEmpty: function () {
                    return eo
                },
                delay: function () {
                    return eh
                },
                delayWhen: function () {
                    return em
                },
                dematerialize: function () {
                    return ew
                },
                distinct: function () {
                    return eM
                },
                distinctUntilChanged: function () {
                    return ek
                },
                distinctUntilKeyChanged: function () {
                    return eN
                },
                elementAt: function () {
                    return ez
                },
                endWith: function () {
                    return eW
                },
                every: function () {
                    return eU
                },
                exhaust: function () {
                    return eG
                },
                exhaustMap: function () {
                    return function e(t, r) {
                        return r ? function (n) {
                            return n.pipe(e(function (e, n) {
                                return (0,
                                    z.D)(t(e, n)).pipe((0,
                                        eY.U)(function (t, i) {
                                            return r(e, t, n, i)
                                        }))
                            }))
                        }
                            : function (e) {
                                return e.lift(new eK(t))
                            }
                    }
                },
                expand: function () {
                    return e0
                },
                filter: function () {
                    return eO.h
                },
                finalize: function () {
                    return e3
                },
                find: function () {
                    return e6
                },
                findIndex: function () {
                    return e7
                },
                first: function () {
                    return tt
                },
                flatMap: function () {
                    return J.VS
                },
                groupBy: function () {
                    return tr.v
                },
                ignoreElements: function () {
                    return tn
                },
                isEmpty: function () {
                    return to
                },
                last: function () {
                    return td
                },
                map: function () {
                    return eY.U
                },
                mapTo: function () {
                    return tf
                },
                materialize: function () {
                    return tm
                },
                max: function () {
                    return tM
                },
                merge: function () {
                    return tC
                },
                mergeAll: function () {
                    return tk.J
                },
                mergeMap: function () {
                    return J.zg
                },
                mergeMapTo: function () {
                    return tI
                },
                mergeScan: function () {
                    return tR
                },
                min: function () {
                    return tO
                },
                multicast: function () {
                    return tT
                },
                observeOn: function () {
                    return tP.QV
                },
                onErrorResumeNext: function () {
                    return tD
                },
                pairwise: function () {
                    return t$
                },
                partition: function () {
                    return tW
                },
                pluck: function () {
                    return tU
                },
                publish: function () {
                    return tJ
                },
                publishBehavior: function () {
                    return tZ
                },
                publishLast: function () {
                    return tY
                },
                publishReplay: function () {
                    return tX
                },
                race: function () {
                    return t1
                },
                reduce: function () {
                    return tS
                },
                refCount: function () {
                    return ri.x
                },
                repeat: function () {
                    return t2
                },
                repeatWhen: function () {
                    return t5
                },
                retry: function () {
                    return t9
                },
                retryWhen: function () {
                    return rt
                },
                sample: function () {
                    return rs
                },
                sampleTime: function () {
                    return ru
                },
                scan: function () {
                    return tv
                },
                sequenceEqual: function () {
                    return rd
                },
                share: function () {
                    return ry
                },
                shareReplay: function () {
                    return rb
                },
                single: function () {
                    return rv
                },
                skip: function () {
                    return rE
                },
                skipLast: function () {
                    return rx
                },
                skipUntil: function () {
                    return rI
                },
                skipWhile: function () {
                    return rA
                },
                startWith: function () {
                    return rT
                },
                subscribeOn: function () {
                    return rB
                },
                switchAll: function () {
                    return rH
                },
                switchMap: function () {
                    return r$
                },
                switchMapTo: function () {
                    return rW
                },
                take: function () {
                    return eF
                },
                takeLast: function () {
                    return tc
                },
                takeUntil: function () {
                    return rU
                },
                takeWhile: function () {
                    return rG
                },
                tap: function () {
                    return rX
                },
                throttle: function () {
                    return r3
                },
                throttleTime: function () {
                    return r6
                },
                throwIfEmpty: function () {
                    return eT
                },
                timeInterval: function () {
                    return nt
                },
                timeout: function () {
                    return nu
                },
                timeoutWith: function () {
                    return ni
                },
                timestamp: function () {
                    return nc
                },
                toArray: function () {
                    return nd
                },
                window: function () {
                    return nf
                },
                windowCount: function () {
                    return nm
                },
                windowTime: function () {
                    return nv
                },
                windowToggle: function () {
                    return nC
                },
                windowWhen: function () {
                    return nR
                },
                withLatestFrom: function () {
                    return nO
                },
                zip: function () {
                    return nP
                },
                zipAll: function () {
                    return nD
                }
            });
        var n = r(70655)
            , i = r(17604);
        function s(e) {
            return function (t) {
                return t.lift(new o(e))
            }
        }
        var o = function () {
            function e(e) {
                this.durationSelector = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new a(e, this.durationSelector))
            }
                ,
                e
        }()
            , a = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.durationSelector = r,
                        n.hasValue = !1,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        if (this.value = e,
                            this.hasValue = !0,
                            !this.throttled) {
                            var t = void 0;
                            try {
                                t = (0,
                                    this.durationSelector)(e)
                            } catch (e) {
                                return this.destination.error(e)
                            }
                            var r = (0,
                                i.ft)(t, new i.IY(this));
                            !r || r.closed ? this.clearThrottle() : this.add(this.throttled = r)
                        }
                    }
                    ,
                    t.prototype.clearThrottle = function () {
                        var e = this.value
                            , t = this.hasValue
                            , r = this.throttled;
                        r && (this.remove(r),
                            this.throttled = void 0,
                            r.unsubscribe()),
                            t && (this.value = void 0,
                                this.hasValue = !1,
                                this.destination.next(e))
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.clearThrottle()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.clearThrottle()
                    }
                    ,
                    t
            }(i.Ds)
            , u = r(90964)
            , c = r(69604);
        function l(e, t) {
            return void 0 === t && (t = u.P),
                s(function () {
                    return (0,
                        c.H)(e, t)
                })
        }
        function h(e) {
            return function (t) {
                return t.lift(new d(e))
            }
        }
        var d = function () {
            function e(e) {
                this.closingNotifier = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new f(e, this.closingNotifier))
            }
                ,
                e
        }()
            , f = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.buffer = [],
                        n.add((0,
                            i.ft)(r, new i.IY(n))),
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.buffer.push(e)
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        var e = this.buffer;
                        this.buffer = [],
                            this.destination.next(e)
                    }
                    ,
                    t
            }(i.Ds)
            , p = r(10979);
        function g(e, t) {
            return void 0 === t && (t = null),
                function (r) {
                    return r.lift(new m(e, t))
                }
        }
        var m = function () {
            function e(e, t) {
                this.bufferSize = e,
                    this.startBufferEvery = t,
                    t && e !== t ? this.subscriberClass = b : this.subscriberClass = y
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery))
            }
                ,
                e
        }()
            , y = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.bufferSize = r,
                        n.buffer = [],
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this.buffer;
                        t.push(e),
                            t.length == this.bufferSize && (this.destination.next(t),
                                this.buffer = [])
                    }
                    ,
                    t.prototype._complete = function () {
                        var t = this.buffer;
                        t.length > 0 && this.destination.next(t),
                            e.prototype._complete.call(this)
                    }
                    ,
                    t
            }(p.L)
            , b = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.bufferSize = r,
                        i.startBufferEvery = n,
                        i.buffers = [],
                        i.count = 0,
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this.bufferSize
                            , r = this.startBufferEvery
                            , n = this.buffers
                            , i = this.count;
                        this.count++,
                            i % r == 0 && n.push([]);
                        for (var s = n.length; s--;) {
                            var o = n[s];
                            o.push(e),
                                o.length === t && (n.splice(s, 1),
                                    this.destination.next(o))
                        }
                    }
                    ,
                    t.prototype._complete = function () {
                        for (var t = this.buffers, r = this.destination; t.length > 0;) {
                            var n = t.shift();
                            n.length > 0 && r.next(n)
                        }
                        e.prototype._complete.call(this)
                    }
                    ,
                    t
            }(p.L)
            , v = r(17507);
        function _(e) {
            var t = arguments.length
                , r = u.P;
            (0,
                v.K)(arguments[arguments.length - 1]) && (r = arguments[arguments.length - 1],
                    t--);
            var n = null;
            t >= 2 && (n = arguments[1]);
            var i = Number.POSITIVE_INFINITY;
            return t >= 3 && (i = arguments[2]),
                function (t) {
                    return t.lift(new w(e, n, i, r))
                }
        }
        var w = function () {
            function e(e, t, r, n) {
                this.bufferTimeSpan = e,
                    this.bufferCreationInterval = t,
                    this.maxBufferSize = r,
                    this.scheduler = n
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new S(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
            }
                ,
                e
        }()
            , E = function () {
                this.buffer = []
            }
            , S = function (e) {
                function t(t, r, n, i, s) {
                    var o = e.call(this, t) || this;
                    o.bufferTimeSpan = r,
                        o.bufferCreationInterval = n,
                        o.maxBufferSize = i,
                        o.scheduler = s,
                        o.contexts = [];
                    var a = o.openContext();
                    return o.timespanOnly = null == n || n < 0,
                        o.timespanOnly ? o.add(a.closeAction = s.schedule(M, r, {
                            subscriber: o,
                            context: a,
                            bufferTimeSpan: r
                        })) : (o.add(a.closeAction = s.schedule(C, r, {
                            subscriber: o,
                            context: a
                        })),
                            o.add(s.schedule(x, n, {
                                bufferTimeSpan: r,
                                bufferCreationInterval: n,
                                subscriber: o,
                                scheduler: s
                            }))),
                        o
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        for (var t, r = this.contexts, n = r.length, i = 0; i < n; i++) {
                            var s = r[i]
                                , o = s.buffer;
                            o.push(e),
                                o.length == this.maxBufferSize && (t = s)
                        }
                        t && this.onBufferFull(t)
                    }
                    ,
                    t.prototype._error = function (t) {
                        this.contexts.length = 0,
                            e.prototype._error.call(this, t)
                    }
                    ,
                    t.prototype._complete = function () {
                        for (var t = this.contexts, r = this.destination; t.length > 0;) {
                            var n = t.shift();
                            r.next(n.buffer)
                        }
                        e.prototype._complete.call(this)
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        this.contexts = null
                    }
                    ,
                    t.prototype.onBufferFull = function (e) {
                        this.closeContext(e);
                        var t = e.closeAction;
                        if (t.unsubscribe(),
                            this.remove(t),
                            !this.closed && this.timespanOnly) {
                            e = this.openContext();
                            var r = this.bufferTimeSpan
                                , n = {
                                    subscriber: this,
                                    context: e,
                                    bufferTimeSpan: r
                                };
                            this.add(e.closeAction = this.scheduler.schedule(M, r, n))
                        }
                    }
                    ,
                    t.prototype.openContext = function () {
                        var e = new E;
                        return this.contexts.push(e),
                            e
                    }
                    ,
                    t.prototype.closeContext = function (e) {
                        this.destination.next(e.buffer);
                        var t = this.contexts;
                        (t ? t.indexOf(e) : -1) >= 0 && t.splice(t.indexOf(e), 1)
                    }
                    ,
                    t
            }(p.L);
        function M(e) {
            var t = e.subscriber
                , r = e.context;
            r && t.closeContext(r),
                t.closed || (e.context = t.openContext(),
                    e.context.closeAction = this.schedule(e, e.bufferTimeSpan))
        }
        function x(e) {
            var t = e.bufferCreationInterval
                , r = e.bufferTimeSpan
                , n = e.subscriber
                , i = e.scheduler
                , s = n.openContext();
            n.closed || (n.add(s.closeAction = i.schedule(C, r, {
                subscriber: n,
                context: s
            })),
                this.schedule(e, t))
        }
        function C(e) {
            var t = e.subscriber
                , r = e.context;
            t.closeContext(r)
        }
        var k = r(98760)
            , I = r(61714)
            , R = r(62039);
        function N(e, t) {
            return function (r) {
                return r.lift(new A(e, t))
            }
        }
        var A = function () {
            function e(e, t) {
                this.openings = e,
                    this.closingSelector = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new O(e, this.openings, this.closingSelector))
            }
                ,
                e
        }()
            , O = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.closingSelector = n,
                        i.contexts = [],
                        i.add((0,
                            I.D)(i, r)),
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        for (var t = this.contexts, r = t.length, n = 0; n < r; n++)
                            t[n].buffer.push(e)
                    }
                    ,
                    t.prototype._error = function (t) {
                        for (var r = this.contexts; r.length > 0;) {
                            var n = r.shift();
                            n.subscription.unsubscribe(),
                                n.buffer = null,
                                n.subscription = null
                        }
                        this.contexts = null,
                            e.prototype._error.call(this, t)
                    }
                    ,
                    t.prototype._complete = function () {
                        for (var t = this.contexts; t.length > 0;) {
                            var r = t.shift();
                            this.destination.next(r.buffer),
                                r.subscription.unsubscribe(),
                                r.buffer = null,
                                r.subscription = null
                        }
                        this.contexts = null,
                            e.prototype._complete.call(this)
                    }
                    ,
                    t.prototype.notifyNext = function (e, t) {
                        e ? this.closeBuffer(e) : this.openBuffer(t)
                    }
                    ,
                    t.prototype.notifyComplete = function (e) {
                        this.closeBuffer(e.context)
                    }
                    ,
                    t.prototype.openBuffer = function (e) {
                        try {
                            var t = this.closingSelector.call(this, e);
                            t && this.trySubscribe(t)
                        } catch (e) {
                            this._error(e)
                        }
                    }
                    ,
                    t.prototype.closeBuffer = function (e) {
                        var t = this.contexts;
                        if (t && e) {
                            var r = e.buffer
                                , n = e.subscription;
                            this.destination.next(r),
                                t.splice(t.indexOf(e), 1),
                                this.remove(n),
                                n.unsubscribe()
                        }
                    }
                    ,
                    t.prototype.trySubscribe = function (e) {
                        var t = this.contexts
                            , r = new k.w
                            , n = {
                                buffer: [],
                                subscription: r
                            };
                        t.push(n);
                        var i = (0,
                            I.D)(this, e, n);
                        !i || i.closed ? this.closeBuffer(n) : (i.context = n,
                            this.add(i),
                            r.add(i))
                    }
                    ,
                    t
            }(R.L);
        function L(e) {
            return function (t) {
                return t.lift(new T(e))
            }
        }
        var T = function () {
            function e(e) {
                this.closingSelector = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new j(e, this.closingSelector))
            }
                ,
                e
        }()
            , j = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.closingSelector = r,
                        n.subscribing = !1,
                        n.openBuffer(),
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.buffer.push(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        var t = this.buffer;
                        t && this.destination.next(t),
                            e.prototype._complete.call(this)
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        this.buffer = void 0,
                            this.subscribing = !1
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.openBuffer()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.subscribing ? this.complete() : this.openBuffer()
                    }
                    ,
                    t.prototype.openBuffer = function () {
                        var e, t = this.closingSubscription;
                        t && (this.remove(t),
                            t.unsubscribe());
                        var r = this.buffer;
                        this.buffer && this.destination.next(r),
                            this.buffer = [];
                        try {
                            e = (0,
                                this.closingSelector)()
                        } catch (e) {
                            return this.error(e)
                        }
                        t = new k.w,
                            this.closingSubscription = t,
                            this.add(t),
                            this.subscribing = !0,
                            t.add((0,
                                i.ft)(e, new i.IY(this))),
                            this.subscribing = !1
                    }
                    ,
                    t
            }(i.Ds);
        function P(e) {
            return function (t) {
                var r = new D(e)
                    , n = t.lift(r);
                return r.caught = n
            }
        }
        var D = function () {
            function e(e) {
                this.selector = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new B(e, this.selector, this.caught))
            }
                ,
                e
        }()
            , B = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.selector = r,
                        i.caught = n,
                        i
                }
                return n.__extends(t, e),
                    t.prototype.error = function (t) {
                        if (!this.isStopped) {
                            var r = void 0;
                            try {
                                r = this.selector(t, this.caught)
                            } catch (t) {
                                e.prototype.error.call(this, t);
                                return
                            }
                            this._unsubscribeAndRecycle();
                            var n = new i.IY(this);
                            this.add(n);
                            var s = (0,
                                i.ft)(r, n);
                            s !== n && this.add(s)
                        }
                    }
                    ,
                    t
            }(i.Ds)
            , F = r(75142);
        function $(e) {
            return function (t) {
                return t.lift(new F.Ms(e))
            }
        }
        var V = r(59026)
            , z = r(55760);
        function H() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = null;
            return "function" == typeof e[e.length - 1] && (r = e.pop()),
                1 === e.length && (0,
                    V.k)(e[0]) && (e = e[0].slice()),
                function (t) {
                    return t.lift.call((0,
                        z.D)([t].concat(e)), new F.Ms(r))
                }
        }
        var W = r(49795);
        function U() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return function (t) {
                return t.lift.call(W.z.apply(void 0, [t].concat(e)))
            }
        }
        var q = r(52257)
            , J = r(47746);
        function G(e, t) {
            return (0,
                J.zg)(e, t, 1)
        }
        function Z(e, t) {
            return G(function () {
                return e
            }, t)
        }
        function Q(e) {
            return function (t) {
                return t.lift(new Y(e, t))
            }
        }
        var Y = function () {
            function e(e, t) {
                this.predicate = e,
                    this.source = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new K(e, this.predicate, this.source))
            }
                ,
                e
        }()
            , K = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.predicate = r,
                        i.source = n,
                        i.count = 0,
                        i.index = 0,
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.predicate ? this._tryPredicate(e) : this.count++
                    }
                    ,
                    t.prototype._tryPredicate = function (e) {
                        var t;
                        try {
                            t = this.predicate(e, this.index++, this.source)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        t && this.count++
                    }
                    ,
                    t.prototype._complete = function () {
                        this.destination.next(this.count),
                            this.destination.complete()
                    }
                    ,
                    t
            }(p.L);
        function X(e) {
            return function (t) {
                return t.lift(new ee(e))
            }
        }
        var ee = function () {
            function e(e) {
                this.durationSelector = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new et(e, this.durationSelector))
            }
                ,
                e
        }()
            , et = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.durationSelector = r,
                        n.hasValue = !1,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        try {
                            var t = this.durationSelector.call(this, e);
                            t && this._tryNext(e, t)
                        } catch (e) {
                            this.destination.error(e)
                        }
                    }
                    ,
                    t.prototype._complete = function () {
                        this.emitValue(),
                            this.destination.complete()
                    }
                    ,
                    t.prototype._tryNext = function (e, t) {
                        var r = this.durationSubscription;
                        this.value = e,
                            this.hasValue = !0,
                            r && (r.unsubscribe(),
                                this.remove(r)),
                            (r = (0,
                                i.ft)(t, new i.IY(this))) && !r.closed && this.add(this.durationSubscription = r)
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.emitValue()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.emitValue()
                    }
                    ,
                    t.prototype.emitValue = function () {
                        if (this.hasValue) {
                            var t = this.value
                                , r = this.durationSubscription;
                            r && (this.durationSubscription = void 0,
                                r.unsubscribe(),
                                this.remove(r)),
                                this.value = void 0,
                                this.hasValue = !1,
                                e.prototype._next.call(this, t)
                        }
                    }
                    ,
                    t
            }(i.Ds);
        function er(e, t) {
            return void 0 === t && (t = u.P),
                function (r) {
                    return r.lift(new en(e, t))
                }
        }
        var en = function () {
            function e(e, t) {
                this.dueTime = e,
                    this.scheduler = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new ei(e, this.dueTime, this.scheduler))
            }
                ,
                e
        }()
            , ei = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.dueTime = r,
                        i.scheduler = n,
                        i.debouncedSubscription = null,
                        i.lastValue = null,
                        i.hasValue = !1,
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.clearDebounce(),
                            this.lastValue = e,
                            this.hasValue = !0,
                            this.add(this.debouncedSubscription = this.scheduler.schedule(es, this.dueTime, this))
                    }
                    ,
                    t.prototype._complete = function () {
                        this.debouncedNext(),
                            this.destination.complete()
                    }
                    ,
                    t.prototype.debouncedNext = function () {
                        if (this.clearDebounce(),
                            this.hasValue) {
                            var e = this.lastValue;
                            this.lastValue = null,
                                this.hasValue = !1,
                                this.destination.next(e)
                        }
                    }
                    ,
                    t.prototype.clearDebounce = function () {
                        var e = this.debouncedSubscription;
                        null !== e && (this.remove(e),
                            e.unsubscribe(),
                            this.debouncedSubscription = null)
                    }
                    ,
                    t
            }(p.L);
        function es(e) {
            e.debouncedNext()
        }
        function eo(e) {
            return void 0 === e && (e = null),
                function (t) {
                    return t.lift(new ea(e))
                }
        }
        var ea = function () {
            function e(e) {
                this.defaultValue = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eu(e, this.defaultValue))
            }
                ,
                e
        }()
            , eu = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.defaultValue = r,
                        n.isEmpty = !0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.isEmpty = !1,
                            this.destination.next(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.isEmpty && this.destination.next(this.defaultValue),
                            this.destination.complete()
                    }
                    ,
                    t
            }(p.L);
        function ec(e) {
            return e instanceof Date && !isNaN(+e)
        }
        var el = r(42632);
        function eh(e, t) {
            void 0 === t && (t = u.P);
            var r = ec(e) ? +e - t.now() : Math.abs(e);
            return function (e) {
                return e.lift(new ed(r, t))
            }
        }
        var ed = function () {
            function e(e, t) {
                this.delay = e,
                    this.scheduler = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new ef(e, this.delay, this.scheduler))
            }
                ,
                e
        }()
            , ef = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.delay = r,
                        i.scheduler = n,
                        i.queue = [],
                        i.active = !1,
                        i.errored = !1,
                        i
                }
                return n.__extends(t, e),
                    t.dispatch = function (e) {
                        for (var t = e.source, r = t.queue, n = e.scheduler, i = e.destination; r.length > 0 && r[0].time - n.now() <= 0;)
                            r.shift().notification.observe(i);
                        if (r.length > 0) {
                            var s = Math.max(0, r[0].time - n.now());
                            this.schedule(e, s)
                        } else
                            this.unsubscribe(),
                                t.active = !1
                    }
                    ,
                    t.prototype._schedule = function (e) {
                        this.active = !0,
                            this.destination.add(e.schedule(t.dispatch, this.delay, {
                                source: this,
                                destination: this.destination,
                                scheduler: e
                            }))
                    }
                    ,
                    t.prototype.scheduleNotification = function (e) {
                        if (!0 !== this.errored) {
                            var t = this.scheduler
                                , r = new ep(t.now() + this.delay, e);
                            this.queue.push(r),
                                !1 === this.active && this._schedule(t)
                        }
                    }
                    ,
                    t.prototype._next = function (e) {
                        this.scheduleNotification(el.P.createNext(e))
                    }
                    ,
                    t.prototype._error = function (e) {
                        this.errored = !0,
                            this.queue = [],
                            this.destination.error(e),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype._complete = function () {
                        this.scheduleNotification(el.P.createComplete()),
                            this.unsubscribe()
                    }
                    ,
                    t
            }(p.L)
            , ep = function (e, t) {
                this.time = e,
                    this.notification = t
            }
            , eg = r(61514);
        function em(e, t) {
            return t ? function (r) {
                return new ev(r, t).lift(new ey(e))
            }
                : function (t) {
                    return t.lift(new ey(e))
                }
        }
        var ey = function () {
            function e(e) {
                this.delayDurationSelector = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eb(e, this.delayDurationSelector))
            }
                ,
                e
        }()
            , eb = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.delayDurationSelector = r,
                        n.completed = !1,
                        n.delayNotifierSubscriptions = [],
                        n.index = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function (e, t, r, n, i) {
                        this.destination.next(e),
                            this.removeSubscription(i),
                            this.tryComplete()
                    }
                    ,
                    t.prototype.notifyError = function (e, t) {
                        this._error(e)
                    }
                    ,
                    t.prototype.notifyComplete = function (e) {
                        var t = this.removeSubscription(e);
                        t && this.destination.next(t),
                            this.tryComplete()
                    }
                    ,
                    t.prototype._next = function (e) {
                        var t = this.index++;
                        try {
                            var r = this.delayDurationSelector(e, t);
                            r && this.tryDelay(r, e)
                        } catch (e) {
                            this.destination.error(e)
                        }
                    }
                    ,
                    t.prototype._complete = function () {
                        this.completed = !0,
                            this.tryComplete(),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype.removeSubscription = function (e) {
                        e.unsubscribe();
                        var t = this.delayNotifierSubscriptions.indexOf(e);
                        return -1 !== t && this.delayNotifierSubscriptions.splice(t, 1),
                            e.outerValue
                    }
                    ,
                    t.prototype.tryDelay = function (e, t) {
                        var r = (0,
                            I.D)(this, e, t);
                        r && !r.closed && (this.destination.add(r),
                            this.delayNotifierSubscriptions.push(r))
                    }
                    ,
                    t.prototype.tryComplete = function () {
                        this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
                    }
                    ,
                    t
            }(R.L)
            , ev = function (e) {
                function t(t, r) {
                    var n = e.call(this) || this;
                    return n.source = t,
                        n.subscriptionDelay = r,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._subscribe = function (e) {
                        this.subscriptionDelay.subscribe(new e_(e, this.source))
                    }
                    ,
                    t
            }(eg.y)
            , e_ = function (e) {
                function t(t, r) {
                    var n = e.call(this) || this;
                    return n.parent = t,
                        n.source = r,
                        n.sourceSubscribed = !1,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.subscribeToSource()
                    }
                    ,
                    t.prototype._error = function (e) {
                        this.unsubscribe(),
                            this.parent.error(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.unsubscribe(),
                            this.subscribeToSource()
                    }
                    ,
                    t.prototype.subscribeToSource = function () {
                        this.sourceSubscribed || (this.sourceSubscribed = !0,
                            this.unsubscribe(),
                            this.source.subscribe(this.parent))
                    }
                    ,
                    t
            }(p.L);
        function ew() {
            return function (e) {
                return e.lift(new eE)
            }
        }
        var eE = function () {
            function e() { }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eS(e))
            }
                ,
                e
        }()
            , eS = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        e.observe(this.destination)
                    }
                    ,
                    t
            }(p.L);
        function eM(e, t) {
            return function (r) {
                return r.lift(new ex(e, t))
            }
        }
        var ex = function () {
            function e(e, t) {
                this.keySelector = e,
                    this.flushes = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eC(e, this.keySelector, this.flushes))
            }
                ,
                e
        }()
            , eC = function (e) {
                function t(t, r, n) {
                    var s = e.call(this, t) || this;
                    return s.keySelector = r,
                        s.values = new Set,
                        n && s.add((0,
                            i.ft)(n, new i.IY(s))),
                        s
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function () {
                        this.values.clear()
                    }
                    ,
                    t.prototype.notifyError = function (e) {
                        this._error(e)
                    }
                    ,
                    t.prototype._next = function (e) {
                        this.keySelector ? this._useKeySelector(e) : this._finalizeNext(e, e)
                    }
                    ,
                    t.prototype._useKeySelector = function (e) {
                        var t, r = this.destination;
                        try {
                            t = this.keySelector(e)
                        } catch (e) {
                            r.error(e);
                            return
                        }
                        this._finalizeNext(t, e)
                    }
                    ,
                    t.prototype._finalizeNext = function (e, t) {
                        var r = this.values;
                        r.has(e) || (r.add(e),
                            this.destination.next(t))
                    }
                    ,
                    t
            }(i.Ds);
        function ek(e, t) {
            return function (r) {
                return r.lift(new eI(e, t))
            }
        }
        var eI = function () {
            function e(e, t) {
                this.compare = e,
                    this.keySelector = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eR(e, this.compare, this.keySelector))
            }
                ,
                e
        }()
            , eR = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.keySelector = n,
                        i.hasKey = !1,
                        "function" == typeof r && (i.compare = r),
                        i
                }
                return n.__extends(t, e),
                    t.prototype.compare = function (e, t) {
                        return e === t
                    }
                    ,
                    t.prototype._next = function (e) {
                        try {
                            var t, r = this.keySelector;
                            t = r ? r(e) : e
                        } catch (e) {
                            return this.destination.error(e)
                        }
                        var n = !1;
                        if (this.hasKey)
                            try {
                                n = (0,
                                    this.compare)(this.key, t)
                            } catch (e) {
                                return this.destination.error(e)
                            }
                        else
                            this.hasKey = !0;
                        n || (this.key = t,
                            this.destination.next(e))
                    }
                    ,
                    t
            }(p.L);
        function eN(e, t) {
            return ek(function (r, n) {
                return t ? t(r[e], n[e]) : r[e] === n[e]
            })
        }
        var eA = r(76565)
            , eO = r(66008)
            , eL = r(26929);
        function eT(e) {
            return void 0 === e && (e = eD),
                function (t) {
                    return t.lift(new ej(e))
                }
        }
        var ej = function () {
            function e(e) {
                this.errorFactory = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eP(e, this.errorFactory))
            }
                ,
                e
        }()
            , eP = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.errorFactory = r,
                        n.hasValue = !1,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.hasValue = !0,
                            this.destination.next(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        if (this.hasValue)
                            return this.destination.complete();
                        var e = void 0;
                        try {
                            e = this.errorFactory()
                        } catch (t) {
                            e = t
                        }
                        this.destination.error(e)
                    }
                    ,
                    t
            }(p.L);
        function eD() {
            return new eL.K
        }
        var eB = r(5631);
        function eF(e) {
            return function (t) {
                return 0 === e ? (0,
                    eB.c)() : t.lift(new e$(e))
            }
        }
        var e$ = function () {
            function e(e) {
                if (this.total = e,
                    this.total < 0)
                    throw new eA.W
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eV(e, this.total))
            }
                ,
                e
        }()
            , eV = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.total = r,
                        n.count = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this.total
                            , r = ++this.count;
                        r <= t && (this.destination.next(e),
                            r === t && (this.destination.complete(),
                                this.unsubscribe()))
                    }
                    ,
                    t
            }(p.L);
        function ez(e, t) {
            if (e < 0)
                throw new eA.W;
            var r = arguments.length >= 2;
            return function (n) {
                return n.pipe((0,
                    eO.h)(function (t, r) {
                        return r === e
                    }), eF(1), r ? eo(t) : eT(function () {
                        return new eA.W
                    }))
            }
        }
        var eH = r(18170);
        function eW() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return function (t) {
                return (0,
                    W.z)(t, eH.of.apply(void 0, e))
            }
        }
        function eU(e, t) {
            return function (r) {
                return r.lift(new eq(e, t, r))
            }
        }
        var eq = function () {
            function e(e, t, r) {
                this.predicate = e,
                    this.thisArg = t,
                    this.source = r
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eJ(e, this.predicate, this.thisArg, this.source))
            }
                ,
                e
        }()
            , eJ = function (e) {
                function t(t, r, n, i) {
                    var s = e.call(this, t) || this;
                    return s.predicate = r,
                        s.thisArg = n,
                        s.source = i,
                        s.index = 0,
                        s.thisArg = n || s,
                        s
                }
                return n.__extends(t, e),
                    t.prototype.notifyComplete = function (e) {
                        this.destination.next(e),
                            this.destination.complete()
                    }
                    ,
                    t.prototype._next = function (e) {
                        var t = !1;
                        try {
                            t = this.predicate.call(this.thisArg, e, this.index++, this.source)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        t || this.notifyComplete(!1)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.notifyComplete(!0)
                    }
                    ,
                    t
            }(p.L);
        function eG() {
            return function (e) {
                return e.lift(new eZ)
            }
        }
        var eZ = function () {
            function e() { }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new eQ(e))
            }
                ,
                e
        }()
            , eQ = function (e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.hasCompleted = !1,
                        r.hasSubscription = !1,
                        r
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.hasSubscription || (this.hasSubscription = !0,
                            this.add((0,
                                i.ft)(e, new i.IY(this))))
                    }
                    ,
                    t.prototype._complete = function () {
                        this.hasCompleted = !0,
                            this.hasSubscription || this.destination.complete()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.hasSubscription = !1,
                            this.hasCompleted && this.destination.complete()
                    }
                    ,
                    t
            }(i.Ds)
            , eY = r(55709)
            , eK = function () {
                function e(e) {
                    this.project = e
                }
                return e.prototype.call = function (e, t) {
                    return t.subscribe(new eX(e, this.project))
                }
                    ,
                    e
            }()
            , eX = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.project = r,
                        n.hasSubscription = !1,
                        n.hasCompleted = !1,
                        n.index = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.hasSubscription || this.tryNext(e)
                    }
                    ,
                    t.prototype.tryNext = function (e) {
                        var t, r = this.index++;
                        try {
                            t = this.project(e, r)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        this.hasSubscription = !0,
                            this._innerSub(t)
                    }
                    ,
                    t.prototype._innerSub = function (e) {
                        var t = new i.IY(this)
                            , r = this.destination;
                        r.add(t);
                        var n = (0,
                            i.ft)(e, t);
                        n !== t && r.add(n)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.hasCompleted = !0,
                            this.hasSubscription || this.destination.complete(),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype.notifyNext = function (e) {
                        this.destination.next(e)
                    }
                    ,
                    t.prototype.notifyError = function (e) {
                        this.destination.error(e)
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.hasSubscription = !1,
                            this.hasCompleted && this.destination.complete()
                    }
                    ,
                    t
            }(i.Ds);
        function e0(e, t, r) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY),
                t = 1 > (t || 0) ? Number.POSITIVE_INFINITY : t,
                function (n) {
                    return n.lift(new e1(e, t, r))
                }
        }
        var e1 = function () {
            function e(e, t, r) {
                this.project = e,
                    this.concurrent = t,
                    this.scheduler = r
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new e2(e, this.project, this.concurrent, this.scheduler))
            }
                ,
                e
        }()
            , e2 = function (e) {
                function t(t, r, n, i) {
                    var s = e.call(this, t) || this;
                    return s.project = r,
                        s.concurrent = n,
                        s.scheduler = i,
                        s.index = 0,
                        s.active = 0,
                        s.hasCompleted = !1,
                        n < Number.POSITIVE_INFINITY && (s.buffer = []),
                        s
                }
                return n.__extends(t, e),
                    t.dispatch = function (e) {
                        var t = e.subscriber
                            , r = e.result
                            , n = e.value
                            , i = e.index;
                        t.subscribeToProjection(r, n, i)
                    }
                    ,
                    t.prototype._next = function (e) {
                        var r = this.destination;
                        if (r.closed) {
                            this._complete();
                            return
                        }
                        var n = this.index++;
                        if (this.active < this.concurrent) {
                            r.next(e);
                            try {
                                var i = (0,
                                    this.project)(e, n);
                                this.scheduler ? this.destination.add(this.scheduler.schedule(t.dispatch, 0, {
                                    subscriber: this,
                                    result: i,
                                    value: e,
                                    index: n
                                })) : this.subscribeToProjection(i, e, n)
                            } catch (e) {
                                r.error(e)
                            }
                        } else
                            this.buffer.push(e)
                    }
                    ,
                    t.prototype.subscribeToProjection = function (e, t, r) {
                        this.active++,
                            this.destination.add((0,
                                i.ft)(e, new i.IY(this)))
                    }
                    ,
                    t.prototype._complete = function () {
                        this.hasCompleted = !0,
                            this.hasCompleted && 0 === this.active && this.destination.complete(),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype.notifyNext = function (e) {
                        this._next(e)
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        var e = this.buffer;
                        this.active--,
                            e && e.length > 0 && this._next(e.shift()),
                            this.hasCompleted && 0 === this.active && this.destination.complete()
                    }
                    ,
                    t
            }(i.Ds);
        function e3(e) {
            return function (t) {
                return t.lift(new e4(e))
            }
        }
        var e4 = function () {
            function e(e) {
                this.callback = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new e5(e, this.callback))
            }
                ,
                e
        }()
            , e5 = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.add(new k.w(r)),
                        n
                }
                return n.__extends(t, e),
                    t
            }(p.L);
        function e6(e, t) {
            if ("function" != typeof e)
                throw TypeError("predicate is not a function");
            return function (r) {
                return r.lift(new e8(e, r, !1, t))
            }
        }
        var e8 = function () {
            function e(e, t, r, n) {
                this.predicate = e,
                    this.source = t,
                    this.yieldIndex = r,
                    this.thisArg = n
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new e9(e, this.predicate, this.source, this.yieldIndex, this.thisArg))
            }
                ,
                e
        }()
            , e9 = function (e) {
                function t(t, r, n, i, s) {
                    var o = e.call(this, t) || this;
                    return o.predicate = r,
                        o.source = n,
                        o.yieldIndex = i,
                        o.thisArg = s,
                        o.index = 0,
                        o
                }
                return n.__extends(t, e),
                    t.prototype.notifyComplete = function (e) {
                        var t = this.destination;
                        t.next(e),
                            t.complete(),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype._next = function (e) {
                        var t = this.predicate
                            , r = this.thisArg
                            , n = this.index++;
                        try {
                            t.call(r || this, e, n, this.source) && this.notifyComplete(this.yieldIndex ? n : e)
                        } catch (e) {
                            this.destination.error(e)
                        }
                    }
                    ,
                    t.prototype._complete = function () {
                        this.notifyComplete(this.yieldIndex ? -1 : void 0)
                    }
                    ,
                    t
            }(p.L);
        function e7(e, t) {
            return function (r) {
                return r.lift(new e8(e, r, !0, t))
            }
        }
        var te = r(43608);
        function tt(e, t) {
            var r = arguments.length >= 2;
            return function (n) {
                return n.pipe(e ? (0,
                    eO.h)(function (t, r) {
                        return e(t, r, n)
                    }) : te.y, eF(1), r ? eo(t) : eT(function () {
                        return new eL.K
                    }))
            }
        }
        var tr = r(11120);
        function tn() {
            return function (e) {
                return e.lift(new ti)
            }
        }
        var ti = function () {
            function e() { }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new ts(e))
            }
                ,
                e
        }()
            , ts = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) { }
                    ,
                    t
            }(p.L);
        function to() {
            return function (e) {
                return e.lift(new ta)
            }
        }
        var ta = function () {
            function e() { }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tu(e))
            }
                ,
                e
        }()
            , tu = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return n.__extends(t, e),
                    t.prototype.notifyComplete = function (e) {
                        var t = this.destination;
                        t.next(e),
                            t.complete()
                    }
                    ,
                    t.prototype._next = function (e) {
                        this.notifyComplete(!1)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.notifyComplete(!0)
                    }
                    ,
                    t
            }(p.L);
        function tc(e) {
            return function (t) {
                return 0 === e ? (0,
                    eB.c)() : t.lift(new tl(e))
            }
        }
        var tl = function () {
            function e(e) {
                if (this.total = e,
                    this.total < 0)
                    throw new eA.W
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new th(e, this.total))
            }
                ,
                e
        }()
            , th = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.total = r,
                        n.ring = [],
                        n.count = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this.ring
                            , r = this.total
                            , n = this.count++;
                        t.length < r ? t.push(e) : t[n % r] = e
                    }
                    ,
                    t.prototype._complete = function () {
                        var e = this.destination
                            , t = this.count;
                        if (t > 0)
                            for (var r = this.count >= this.total ? this.total : this.count, n = this.ring, i = 0; i < r; i++) {
                                var s = t++ % r;
                                e.next(n[s])
                            }
                        e.complete()
                    }
                    ,
                    t
            }(p.L);
        function td(e, t) {
            var r = arguments.length >= 2;
            return function (n) {
                return n.pipe(e ? (0,
                    eO.h)(function (t, r) {
                        return e(t, r, n)
                    }) : te.y, tc(1), r ? eo(t) : eT(function () {
                        return new eL.K
                    }))
            }
        }
        function tf(e) {
            return function (t) {
                return t.lift(new tp(e))
            }
        }
        var tp = function () {
            function e(e) {
                this.value = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tg(e, this.value))
            }
                ,
                e
        }()
            , tg = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.value = r,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.destination.next(this.value)
                    }
                    ,
                    t
            }(p.L);
        function tm() {
            return function (e) {
                return e.lift(new ty)
            }
        }
        var ty = function () {
            function e() { }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tb(e))
            }
                ,
                e
        }()
            , tb = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.destination.next(el.P.createNext(e))
                    }
                    ,
                    t.prototype._error = function (e) {
                        var t = this.destination;
                        t.next(el.P.createError(e)),
                            t.complete()
                    }
                    ,
                    t.prototype._complete = function () {
                        var e = this.destination;
                        e.next(el.P.createComplete()),
                            e.complete()
                    }
                    ,
                    t
            }(p.L);
        function tv(e, t) {
            var r = !1;
            return arguments.length >= 2 && (r = !0),
                function (n) {
                    return n.lift(new t_(e, t, r))
                }
        }
        var t_ = function () {
            function e(e, t, r) {
                void 0 === r && (r = !1),
                    this.accumulator = e,
                    this.seed = t,
                    this.hasSeed = r
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tw(e, this.accumulator, this.seed, this.hasSeed))
            }
                ,
                e
        }()
            , tw = function (e) {
                function t(t, r, n, i) {
                    var s = e.call(this, t) || this;
                    return s.accumulator = r,
                        s._seed = n,
                        s.hasSeed = i,
                        s.index = 0,
                        s
                }
                return n.__extends(t, e),
                    Object.defineProperty(t.prototype, "seed", {
                        get: function () {
                            return this._seed
                        },
                        set: function (e) {
                            this.hasSeed = !0,
                                this._seed = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype._next = function (e) {
                        if (this.hasSeed)
                            return this._tryNext(e);
                        this.seed = e,
                            this.destination.next(e)
                    }
                    ,
                    t.prototype._tryNext = function (e) {
                        var t, r = this.index++;
                        try {
                            t = this.accumulator(this.seed, e, r)
                        } catch (e) {
                            this.destination.error(e)
                        }
                        this.seed = t,
                            this.destination.next(t)
                    }
                    ,
                    t
            }(p.L)
            , tE = r(62561);
        function tS(e, t) {
            return arguments.length >= 2 ? function (r) {
                return (0,
                    tE.z)(tv(e, t), tc(1), eo(t))(r)
            }
                : function (t) {
                    return (0,
                        tE.z)(tv(function (t, r, n) {
                            return e(t, r, n + 1)
                        }), tc(1))(t)
                }
        }
        function tM(e) {
            return tS("function" == typeof e ? function (t, r) {
                return e(t, r) > 0 ? t : r
            }
                : function (e, t) {
                    return e > t ? e : t
                }
            )
        }
        var tx = r(14370);
        function tC() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return function (t) {
                return t.lift.call(tx.T.apply(void 0, [t].concat(e)))
            }
        }
        var tk = r(22556);
        function tI(e, t, r) {
            return (void 0 === r && (r = Number.POSITIVE_INFINITY),
                "function" == typeof t) ? (0,
                    J.zg)(function () {
                        return e
                    }, t, r) : ("number" == typeof t && (r = t),
                        (0,
                            J.zg)(function () {
                                return e
                            }, r))
        }
        function tR(e, t, r) {
            return void 0 === r && (r = Number.POSITIVE_INFINITY),
                function (n) {
                    return n.lift(new tN(e, t, r))
                }
        }
        var tN = function () {
            function e(e, t, r) {
                this.accumulator = e,
                    this.seed = t,
                    this.concurrent = r
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tA(e, this.accumulator, this.seed, this.concurrent))
            }
                ,
                e
        }()
            , tA = function (e) {
                function t(t, r, n, i) {
                    var s = e.call(this, t) || this;
                    return s.accumulator = r,
                        s.acc = n,
                        s.concurrent = i,
                        s.hasValue = !1,
                        s.hasCompleted = !1,
                        s.buffer = [],
                        s.active = 0,
                        s.index = 0,
                        s
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        if (this.active < this.concurrent) {
                            var t = this.index++
                                , r = this.destination
                                , n = void 0;
                            try {
                                n = (0,
                                    this.accumulator)(this.acc, e, t)
                            } catch (e) {
                                return r.error(e)
                            }
                            this.active++,
                                this._innerSub(n)
                        } else
                            this.buffer.push(e)
                    }
                    ,
                    t.prototype._innerSub = function (e) {
                        var t = new i.IY(this)
                            , r = this.destination;
                        r.add(t);
                        var n = (0,
                            i.ft)(e, t);
                        n !== t && r.add(n)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.hasCompleted = !0,
                            0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc),
                                this.destination.complete()),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype.notifyNext = function (e) {
                        var t = this.destination;
                        this.acc = e,
                            this.hasValue = !0,
                            t.next(e)
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        var e = this.buffer;
                        this.active--,
                            e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc),
                                this.destination.complete())
                    }
                    ,
                    t
            }(i.Ds);
        function tO(e) {
            return tS("function" == typeof e ? function (t, r) {
                return 0 > e(t, r) ? t : r
            }
                : function (e, t) {
                    return e < t ? e : t
                }
            )
        }
        var tL = r(33140);
        function tT(e, t) {
            return function (r) {
                if (n = "function" == typeof e ? e : function () {
                    return e
                }
                    ,
                    "function" == typeof t)
                    return r.lift(new tj(n, t));
                var n, i = Object.create(r, tL.N);
                return i.source = r,
                    i.subjectFactory = n,
                    i
            }
        }
        var tj = function () {
            function e(e, t) {
                this.subjectFactory = e,
                    this.selector = t
            }
            return e.prototype.call = function (e, t) {
                var r = this.selector
                    , n = this.subjectFactory()
                    , i = r(n).subscribe(e);
                return i.add(t.subscribe(n)),
                    i
            }
                ,
                e
        }()
            , tP = r(89276);
        function tD() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return 1 === e.length && (0,
                V.k)(e[0]) && (e = e[0]),
                function (t) {
                    return t.lift(new tB(e))
                }
        }
        var tB = function () {
            function e(e) {
                this.nextSources = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tF(e, this.nextSources))
            }
                ,
                e
        }()
            , tF = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.destination = t,
                        n.nextSources = r,
                        n
                }
                return n.__extends(t, e),
                    t.prototype.notifyError = function () {
                        this.subscribeToNextSource()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.subscribeToNextSource()
                    }
                    ,
                    t.prototype._error = function (e) {
                        this.subscribeToNextSource(),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype._complete = function () {
                        this.subscribeToNextSource(),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype.subscribeToNextSource = function () {
                        var e = this.nextSources.shift();
                        if (e) {
                            var t = new i.IY(this)
                                , r = this.destination;
                            r.add(t);
                            var n = (0,
                                i.ft)(e, t);
                            n !== t && r.add(n)
                        } else
                            this.destination.complete()
                    }
                    ,
                    t
            }(i.Ds);
        function t$() {
            return function (e) {
                return e.lift(new tV)
            }
        }
        var tV = function () {
            function e() { }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new tz(e))
            }
                ,
                e
        }()
            , tz = function (e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.hasPrev = !1,
                        r
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t;
                        this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0,
                            this.prev = e,
                            t && this.destination.next(t)
                    }
                    ,
                    t
            }(p.L)
            , tH = r(18463);
        function tW(e, t) {
            return function (r) {
                return [(0,
                    eO.h)(e, t)(r), (0,
                        eO.h)((0,
                            tH.f)(e, t))(r)]
            }
        }
        function tU() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = e.length;
            if (0 === r)
                throw Error("list of properties cannot be empty.");
            return function (t) {
                return (0,
                    eY.U)(function (t) {
                        for (var n = t, i = 0; i < r; i++) {
                            var s = null != n ? n[e[i]] : void 0;
                            if (void 0 === s)
                                return;
                            n = s
                        }
                        return n
                    })(t)
            }
        }
        var tq = r(70211);
        function tJ(e) {
            return e ? tT(function () {
                return new tq.xQ
            }, e) : tT(new tq.xQ)
        }
        var tG = r(89233);
        function tZ(e) {
            return function (t) {
                return tT(new tG.X(e))(t)
            }
        }
        var tQ = r(60364);
        function tY() {
            return function (e) {
                return tT(new tQ.c)(e)
            }
        }
        var tK = r(12630);
        function tX(e, t, r, n) {
            r && "function" != typeof r && (n = r);
            var i = "function" == typeof r ? r : void 0
                , s = new tK.t(e, t, n);
            return function (e) {
                return tT(function () {
                    return s
                }, i)(e)
            }
        }
        var t0 = r(38821);
        function t1() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return function (t) {
                return 1 === e.length && (0,
                    V.k)(e[0]) && (e = e[0]),
                    t.lift.call(t0.S3.apply(void 0, [t].concat(e)))
            }
        }
        function t2(e) {
            return void 0 === e && (e = -1),
                function (t) {
                    return 0 === e ? (0,
                        eB.c)() : e < 0 ? t.lift(new t3(-1, t)) : t.lift(new t3(e - 1, t))
                }
        }
        var t3 = function () {
            function e(e, t) {
                this.count = e,
                    this.source = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new t4(e, this.count, this.source))
            }
                ,
                e
        }()
            , t4 = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.count = r,
                        i.source = n,
                        i
                }
                return n.__extends(t, e),
                    t.prototype.complete = function () {
                        if (!this.isStopped) {
                            var t = this.source
                                , r = this.count;
                            if (0 === r)
                                return e.prototype.complete.call(this);
                            r > -1 && (this.count = r - 1),
                                t.subscribe(this._unsubscribeAndRecycle())
                        }
                    }
                    ,
                    t
            }(p.L);
        function t5(e) {
            return function (t) {
                return t.lift(new t6(e))
            }
        }
        var t6 = function () {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new t8(e, this.notifier, t))
            }
                ,
                e
        }()
            , t8 = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.notifier = r,
                        i.source = n,
                        i.sourceIsBeingSubscribedTo = !0,
                        i
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function () {
                        this.sourceIsBeingSubscribedTo = !0,
                            this.source.subscribe(this)
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        if (!1 === this.sourceIsBeingSubscribedTo)
                            return e.prototype.complete.call(this)
                    }
                    ,
                    t.prototype.complete = function () {
                        if (this.sourceIsBeingSubscribedTo = !1,
                            !this.isStopped) {
                            if (this.retries || this.subscribeToRetries(),
                                !this.retriesSubscription || this.retriesSubscription.closed)
                                return e.prototype.complete.call(this);
                            this._unsubscribeAndRecycle(),
                                this.notifications.next(void 0)
                        }
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        var e = this.notifications
                            , t = this.retriesSubscription;
                        e && (e.unsubscribe(),
                            this.notifications = void 0),
                            t && (t.unsubscribe(),
                                this.retriesSubscription = void 0),
                            this.retries = void 0
                    }
                    ,
                    t.prototype._unsubscribeAndRecycle = function () {
                        var t = this._unsubscribe;
                        return this._unsubscribe = null,
                            e.prototype._unsubscribeAndRecycle.call(this),
                            this._unsubscribe = t,
                            this
                    }
                    ,
                    t.prototype.subscribeToRetries = function () {
                        this.notifications = new tq.xQ;
                        try {
                            var t;
                            t = (0,
                                this.notifier)(this.notifications)
                        } catch (t) {
                            return e.prototype.complete.call(this)
                        }
                        this.retries = t,
                            this.retriesSubscription = (0,
                                i.ft)(t, new i.IY(this))
                    }
                    ,
                    t
            }(i.Ds);
        function t9(e) {
            return void 0 === e && (e = -1),
                function (t) {
                    return t.lift(new t7(e, t))
                }
        }
        var t7 = function () {
            function e(e, t) {
                this.count = e,
                    this.source = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new re(e, this.count, this.source))
            }
                ,
                e
        }()
            , re = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.count = r,
                        i.source = n,
                        i
                }
                return n.__extends(t, e),
                    t.prototype.error = function (t) {
                        if (!this.isStopped) {
                            var r = this.source
                                , n = this.count;
                            if (0 === n)
                                return e.prototype.error.call(this, t);
                            n > -1 && (this.count = n - 1),
                                r.subscribe(this._unsubscribeAndRecycle())
                        }
                    }
                    ,
                    t
            }(p.L);
        function rt(e) {
            return function (t) {
                return t.lift(new rr(e, t))
            }
        }
        var rr = function () {
            function e(e, t) {
                this.notifier = e,
                    this.source = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rn(e, this.notifier, this.source))
            }
                ,
                e
        }()
            , rn = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.notifier = r,
                        i.source = n,
                        i
                }
                return n.__extends(t, e),
                    t.prototype.error = function (t) {
                        if (!this.isStopped) {
                            var r = this.errors
                                , n = this.retries
                                , s = this.retriesSubscription;
                            if (n)
                                this.errors = void 0,
                                    this.retriesSubscription = void 0;
                            else {
                                r = new tq.xQ;
                                try {
                                    n = (0,
                                        this.notifier)(r)
                                } catch (t) {
                                    return e.prototype.error.call(this, t)
                                }
                                s = (0,
                                    i.ft)(n, new i.IY(this))
                            }
                            this._unsubscribeAndRecycle(),
                                this.errors = r,
                                this.retries = n,
                                this.retriesSubscription = s,
                                r.next(t)
                        }
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        var e = this.errors
                            , t = this.retriesSubscription;
                        e && (e.unsubscribe(),
                            this.errors = void 0),
                            t && (t.unsubscribe(),
                                this.retriesSubscription = void 0),
                            this.retries = void 0
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        var e = this._unsubscribe;
                        this._unsubscribe = null,
                            this._unsubscribeAndRecycle(),
                            this._unsubscribe = e,
                            this.source.subscribe(this)
                    }
                    ,
                    t
            }(i.Ds)
            , ri = r(3018);
        function rs(e) {
            return function (t) {
                return t.lift(new ro(e))
            }
        }
        var ro = function () {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function (e, t) {
                var r = new ra(e)
                    , n = t.subscribe(r);
                return n.add((0,
                    i.ft)(this.notifier, new i.IY(r))),
                    n
            }
                ,
                e
        }()
            , ra = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.hasValue = !1,
                        t
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.value = e,
                            this.hasValue = !0
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.emitValue()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.emitValue()
                    }
                    ,
                    t.prototype.emitValue = function () {
                        this.hasValue && (this.hasValue = !1,
                            this.destination.next(this.value))
                    }
                    ,
                    t
            }(i.Ds);
        function ru(e, t) {
            return void 0 === t && (t = u.P),
                function (r) {
                    return r.lift(new rc(e, t))
                }
        }
        var rc = function () {
            function e(e, t) {
                this.period = e,
                    this.scheduler = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rl(e, this.period, this.scheduler))
            }
                ,
                e
        }()
            , rl = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.period = r,
                        i.scheduler = n,
                        i.hasValue = !1,
                        i.add(n.schedule(rh, r, {
                            subscriber: i,
                            period: r
                        })),
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.lastValue = e,
                            this.hasValue = !0
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.hasValue && (this.hasValue = !1,
                            this.destination.next(this.lastValue))
                    }
                    ,
                    t
            }(p.L);
        function rh(e) {
            var t = e.subscriber
                , r = e.period;
            t.notifyNext(),
                this.schedule(e, r)
        }
        function rd(e, t) {
            return function (r) {
                return r.lift(new rf(e, t))
            }
        }
        var rf = function () {
            function e(e, t) {
                this.compareTo = e,
                    this.comparator = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rp(e, this.compareTo, this.comparator))
            }
                ,
                e
        }()
            , rp = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.compareTo = r,
                        i.comparator = n,
                        i._a = [],
                        i._b = [],
                        i._oneComplete = !1,
                        i.destination.add(r.subscribe(new rg(t, i))),
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(e),
                            this.checkValues())
                    }
                    ,
                    t.prototype._complete = function () {
                        this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0,
                            this.unsubscribe()
                    }
                    ,
                    t.prototype.checkValues = function () {
                        for (var e = this._a, t = this._b, r = this.comparator; e.length > 0 && t.length > 0;) {
                            var n = e.shift()
                                , i = t.shift()
                                , s = !1;
                            try {
                                s = r ? r(n, i) : n === i
                            } catch (e) {
                                this.destination.error(e)
                            }
                            s || this.emit(!1)
                        }
                    }
                    ,
                    t.prototype.emit = function (e) {
                        var t = this.destination;
                        t.next(e),
                            t.complete()
                    }
                    ,
                    t.prototype.nextB = function (e) {
                        this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(e),
                            this.checkValues())
                    }
                    ,
                    t.prototype.completeB = function () {
                        this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
                    }
                    ,
                    t
            }(p.L)
            , rg = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.parent = r,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.parent.nextB(e)
                    }
                    ,
                    t.prototype._error = function (e) {
                        this.parent.error(e),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype._complete = function () {
                        this.parent.completeB(),
                            this.unsubscribe()
                    }
                    ,
                    t
            }(p.L);
        function rm() {
            return new tq.xQ
        }
        function ry() {
            return function (e) {
                return (0,
                    ri.x)()(tT(rm)(e))
            }
        }
        function rb(e, t, r) {
            var n;
            return n = e && "object" == typeof e ? e : {
                bufferSize: e,
                windowTime: t,
                refCount: !1,
                scheduler: r
            },
                function (e) {
                    var t, r, i, s, o, a, u, c, l, h, d;
                    return e.lift((s = void 0 === (i = n.bufferSize) ? Number.POSITIVE_INFINITY : i,
                        a = void 0 === (o = n.windowTime) ? Number.POSITIVE_INFINITY : o,
                        u = n.refCount,
                        c = n.scheduler,
                        l = 0,
                        h = !1,
                        d = !1,
                        function (e) {
                            var n;
                            l++,
                                !t || h ? (h = !1,
                                    n = (t = new tK.t(s, a, c)).subscribe(this),
                                    r = e.subscribe({
                                        next: function (e) {
                                            t.next(e)
                                        },
                                        error: function (e) {
                                            h = !0,
                                                t.error(e)
                                        },
                                        complete: function () {
                                            d = !0,
                                                r = void 0,
                                                t.complete()
                                        }
                                    }),
                                    d && (r = void 0)) : n = t.subscribe(this),
                                this.add(function () {
                                    l--,
                                        n.unsubscribe(),
                                        n = void 0,
                                        r && !d && u && 0 === l && (r.unsubscribe(),
                                            r = void 0,
                                            t = void 0)
                                })
                        }
                    ))
                }
        }
        function rv(e) {
            return function (t) {
                return t.lift(new r_(e, t))
            }
        }
        var r_ = function () {
            function e(e, t) {
                this.predicate = e,
                    this.source = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rw(e, this.predicate, this.source))
            }
                ,
                e
        }()
            , rw = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.predicate = r,
                        i.source = n,
                        i.seenValue = !1,
                        i.index = 0,
                        i
                }
                return n.__extends(t, e),
                    t.prototype.applySingleValue = function (e) {
                        this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0,
                            this.singleValue = e)
                    }
                    ,
                    t.prototype._next = function (e) {
                        var t = this.index++;
                        this.predicate ? this.tryNext(e, t) : this.applySingleValue(e)
                    }
                    ,
                    t.prototype.tryNext = function (e, t) {
                        try {
                            this.predicate(e, t, this.source) && this.applySingleValue(e)
                        } catch (e) {
                            this.destination.error(e)
                        }
                    }
                    ,
                    t.prototype._complete = function () {
                        var e = this.destination;
                        this.index > 0 ? (e.next(this.seenValue ? this.singleValue : void 0),
                            e.complete()) : e.error(new eL.K)
                    }
                    ,
                    t
            }(p.L);
        function rE(e) {
            return function (t) {
                return t.lift(new rS(e))
            }
        }
        var rS = function () {
            function e(e) {
                this.total = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rM(e, this.total))
            }
                ,
                e
        }()
            , rM = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.total = r,
                        n.count = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        ++this.count > this.total && this.destination.next(e)
                    }
                    ,
                    t
            }(p.L);
        function rx(e) {
            return function (t) {
                return t.lift(new rC(e))
            }
        }
        var rC = function () {
            function e(e) {
                if (this._skipCount = e,
                    this._skipCount < 0)
                    throw new eA.W
            }
            return e.prototype.call = function (e, t) {
                return 0 === this._skipCount ? t.subscribe(new p.L(e)) : t.subscribe(new rk(e, this._skipCount))
            }
                ,
                e
        }()
            , rk = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n._skipCount = r,
                        n._count = 0,
                        n._ring = Array(r),
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this._skipCount
                            , r = this._count++;
                        if (r < t)
                            this._ring[r] = e;
                        else {
                            var n = r % t
                                , i = this._ring
                                , s = i[n];
                            i[n] = e,
                                this.destination.next(s)
                        }
                    }
                    ,
                    t
            }(p.L);
        function rI(e) {
            return function (t) {
                return t.lift(new rR(e))
            }
        }
        var rR = function () {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rN(e, this.notifier))
            }
                ,
                e
        }()
            , rN = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    n.hasValue = !1;
                    var s = new i.IY(n);
                    n.add(s),
                        n.innerSubscription = s;
                    var o = (0,
                        i.ft)(r, s);
                    return o !== s && (n.add(o),
                        n.innerSubscription = o),
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (t) {
                        this.hasValue && e.prototype._next.call(this, t)
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.hasValue = !0,
                            this.innerSubscription && this.innerSubscription.unsubscribe()
                    }
                    ,
                    t.prototype.notifyComplete = function () { }
                    ,
                    t
            }(i.Ds);
        function rA(e) {
            return function (t) {
                return t.lift(new rO(e))
            }
        }
        var rO = function () {
            function e(e) {
                this.predicate = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rL(e, this.predicate))
            }
                ,
                e
        }()
            , rL = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.predicate = r,
                        n.skipping = !0,
                        n.index = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this.destination;
                        this.skipping && this.tryCallPredicate(e),
                            this.skipping || t.next(e)
                    }
                    ,
                    t.prototype.tryCallPredicate = function (e) {
                        try {
                            var t = this.predicate(e, this.index++);
                            this.skipping = Boolean(t)
                        } catch (e) {
                            this.destination.error(e)
                        }
                    }
                    ,
                    t
            }(p.L);
        function rT() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = e[e.length - 1];
            return (0,
                v.K)(r) ? (e.pop(),
                    function (t) {
                        return (0,
                            W.z)(e, t, r)
                    }
            ) : function (t) {
                return (0,
                    W.z)(e, t)
            }
        }
        var rj = r(81789)
            , rP = r(35812)
            , rD = function (e) {
                function t(t, r, n) {
                    void 0 === r && (r = 0),
                        void 0 === n && (n = rj.e);
                    var i = e.call(this) || this;
                    return i.source = t,
                        i.delayTime = r,
                        i.scheduler = n,
                        (!(0,
                            rP.k)(r) || r < 0) && (i.delayTime = 0),
                        n && "function" == typeof n.schedule || (i.scheduler = rj.e),
                        i
                }
                return n.__extends(t, e),
                    t.create = function (e, r, n) {
                        return void 0 === r && (r = 0),
                            void 0 === n && (n = rj.e),
                            new t(e, r, n)
                    }
                    ,
                    t.dispatch = function (e) {
                        var t = e.source
                            , r = e.subscriber;
                        return this.add(t.subscribe(r))
                    }
                    ,
                    t.prototype._subscribe = function (e) {
                        var r = this.delayTime
                            , n = this.source;
                        return this.scheduler.schedule(t.dispatch, r, {
                            source: n,
                            subscriber: e
                        })
                    }
                    ,
                    t
            }(eg.y);
        function rB(e, t) {
            return void 0 === t && (t = 0),
                function (r) {
                    return r.lift(new rF(e, t))
                }
        }
        var rF = function () {
            function e(e, t) {
                this.scheduler = e,
                    this.delay = t
            }
            return e.prototype.call = function (e, t) {
                return new rD(t, this.delay, this.scheduler).subscribe(e)
            }
                ,
                e
        }();
        function r$(e, t) {
            return "function" == typeof t ? function (r) {
                return r.pipe(r$(function (r, n) {
                    return (0,
                        z.D)(e(r, n)).pipe((0,
                            eY.U)(function (e, i) {
                                return t(r, e, n, i)
                            }))
                }))
            }
                : function (t) {
                    return t.lift(new rV(e))
                }
        }
        var rV = function () {
            function e(e) {
                this.project = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rz(e, this.project))
            }
                ,
                e
        }()
            , rz = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.project = r,
                        n.index = 0,
                        n
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t, r = this.index++;
                        try {
                            t = this.project(e, r)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        this._innerSub(t)
                    }
                    ,
                    t.prototype._innerSub = function (e) {
                        var t = this.innerSubscription;
                        t && t.unsubscribe();
                        var r = new i.IY(this)
                            , n = this.destination;
                        n.add(r),
                            this.innerSubscription = (0,
                                i.ft)(e, r),
                            this.innerSubscription !== r && n.add(this.innerSubscription)
                    }
                    ,
                    t.prototype._complete = function () {
                        var t = this.innerSubscription;
                        (!t || t.closed) && e.prototype._complete.call(this),
                            this.unsubscribe()
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        this.innerSubscription = void 0
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.innerSubscription = void 0,
                            this.isStopped && e.prototype._complete.call(this)
                    }
                    ,
                    t.prototype.notifyNext = function (e) {
                        this.destination.next(e)
                    }
                    ,
                    t
            }(i.Ds);
        function rH() {
            return r$(te.y)
        }
        function rW(e, t) {
            return t ? r$(function () {
                return e
            }, t) : r$(function () {
                return e
            })
        }
        function rU(e) {
            return function (t) {
                return t.lift(new rq(e))
            }
        }
        var rq = function () {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function (e, t) {
                var r = new rJ(e)
                    , n = (0,
                        i.ft)(this.notifier, new i.IY(r));
                return n && !r.seenValue ? (r.add(n),
                    t.subscribe(r)) : r
            }
                ,
                e
        }()
            , rJ = function (e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.seenValue = !1,
                        r
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function () {
                        this.seenValue = !0,
                            this.complete()
                    }
                    ,
                    t.prototype.notifyComplete = function () { }
                    ,
                    t
            }(i.Ds);
        function rG(e, t) {
            return void 0 === t && (t = !1),
                function (r) {
                    return r.lift(new rZ(e, t))
                }
        }
        var rZ = function () {
            function e(e, t) {
                this.predicate = e,
                    this.inclusive = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new rQ(e, this.predicate, this.inclusive))
            }
                ,
                e
        }()
            , rQ = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.predicate = r,
                        i.inclusive = n,
                        i.index = 0,
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t, r = this.destination;
                        try {
                            t = this.predicate(e, this.index++)
                        } catch (e) {
                            r.error(e);
                            return
                        }
                        this.nextOrComplete(e, t)
                    }
                    ,
                    t.prototype.nextOrComplete = function (e, t) {
                        var r = this.destination;
                        Boolean(t) ? r.next(e) : (this.inclusive && r.next(e),
                            r.complete())
                    }
                    ,
                    t
            }(p.L)
            , rY = r(33306)
            , rK = r(14156);
        function rX(e, t, r) {
            return function (n) {
                return n.lift(new r0(e, t, r))
            }
        }
        var r0 = function () {
            function e(e, t, r) {
                this.nextOrObserver = e,
                    this.error = t,
                    this.complete = r
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new r1(e, this.nextOrObserver, this.error, this.complete))
            }
                ,
                e
        }()
            , r1 = function (e) {
                function t(t, r, n, i) {
                    var s = e.call(this, t) || this;
                    return s._tapNext = rY.Z,
                        s._tapError = rY.Z,
                        s._tapComplete = rY.Z,
                        s._tapError = n || rY.Z,
                        s._tapComplete = i || rY.Z,
                        (0,
                            rK.m)(r) ? (s._context = s,
                                s._tapNext = r) : r && (s._context = r,
                                    s._tapNext = r.next || rY.Z,
                                    s._tapError = r.error || rY.Z,
                                    s._tapComplete = r.complete || rY.Z),
                        s
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        try {
                            this._tapNext.call(this._context, e)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        this.destination.next(e)
                    }
                    ,
                    t.prototype._error = function (e) {
                        try {
                            this._tapError.call(this._context, e)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        this.destination.error(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        return this.destination.complete()
                    }
                    ,
                    t
            }(p.L)
            , r2 = {
                leading: !0,
                trailing: !1
            };
        function r3(e, t) {
            return void 0 === t && (t = r2),
                function (r) {
                    return r.lift(new r4(e, !!t.leading, !!t.trailing))
                }
        }
        var r4 = function () {
            function e(e, t, r) {
                this.durationSelector = e,
                    this.leading = t,
                    this.trailing = r
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new r5(e, this.durationSelector, this.leading, this.trailing))
            }
                ,
                e
        }()
            , r5 = function (e) {
                function t(t, r, n, i) {
                    var s = e.call(this, t) || this;
                    return s.destination = t,
                        s.durationSelector = r,
                        s._leading = n,
                        s._trailing = i,
                        s._hasValue = !1,
                        s
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this._hasValue = !0,
                            this._sendValue = e,
                            this._throttled || (this._leading ? this.send() : this.throttle(e))
                    }
                    ,
                    t.prototype.send = function () {
                        var e = this._hasValue
                            , t = this._sendValue;
                        e && (this.destination.next(t),
                            this.throttle(t)),
                            this._hasValue = !1,
                            this._sendValue = void 0
                    }
                    ,
                    t.prototype.throttle = function (e) {
                        var t = this.tryDurationSelector(e);
                        t && this.add(this._throttled = (0,
                            i.ft)(t, new i.IY(this)))
                    }
                    ,
                    t.prototype.tryDurationSelector = function (e) {
                        try {
                            return this.durationSelector(e)
                        } catch (e) {
                            return this.destination.error(e),
                                null
                        }
                    }
                    ,
                    t.prototype.throttlingDone = function () {
                        var e = this._throttled
                            , t = this._trailing;
                        e && e.unsubscribe(),
                            this._throttled = void 0,
                            t && this.send()
                    }
                    ,
                    t.prototype.notifyNext = function () {
                        this.throttlingDone()
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this.throttlingDone()
                    }
                    ,
                    t
            }(i.Ds);
        function r6(e, t, r) {
            return void 0 === t && (t = u.P),
                void 0 === r && (r = r2),
                function (n) {
                    return n.lift(new r8(e, t, r.leading, r.trailing))
                }
        }
        var r8 = function () {
            function e(e, t, r, n) {
                this.duration = e,
                    this.scheduler = t,
                    this.leading = r,
                    this.trailing = n
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new r9(e, this.duration, this.scheduler, this.leading, this.trailing))
            }
                ,
                e
        }()
            , r9 = function (e) {
                function t(t, r, n, i, s) {
                    var o = e.call(this, t) || this;
                    return o.duration = r,
                        o.scheduler = n,
                        o.leading = i,
                        o.trailing = s,
                        o._hasTrailingValue = !1,
                        o._trailingValue = null,
                        o
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        this.throttled ? this.trailing && (this._trailingValue = e,
                            this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(r7, this.duration, {
                                subscriber: this
                            })),
                                this.leading ? this.destination.next(e) : this.trailing && (this._trailingValue = e,
                                    this._hasTrailingValue = !0))
                    }
                    ,
                    t.prototype._complete = function () {
                        this._hasTrailingValue && this.destination.next(this._trailingValue),
                            this.destination.complete()
                    }
                    ,
                    t.prototype.clearThrottle = function () {
                        var e = this.throttled;
                        e && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue),
                            this._trailingValue = null,
                            this._hasTrailingValue = !1),
                            e.unsubscribe(),
                            this.remove(e),
                            this.throttled = null)
                    }
                    ,
                    t
            }(p.L);
        function r7(e) {
            e.subscriber.clearThrottle()
        }
        var ne = r(51410);
        function nt(e) {
            return void 0 === e && (e = u.P),
                function (t) {
                    return (0,
                        ne.P)(function () {
                            return t.pipe(tv(function (t, r) {
                                var n = t.current;
                                return {
                                    value: r,
                                    current: e.now(),
                                    last: n
                                }
                            }, {
                                current: e.now(),
                                value: void 0,
                                last: void 0
                            }), (0,
                                eY.U)(function (e) {
                                    var t = e.current
                                        , r = e.last
                                        , n = e.value;
                                    return new nr(n, t - r)
                                }))
                        })
                }
        }
        var nr = function (e, t) {
            this.value = e,
                this.interval = t
        }
            , nn = r(81462);
        function ni(e, t, r) {
            return void 0 === r && (r = u.P),
                function (n) {
                    var i = ec(e)
                        , s = i ? +e - r.now() : Math.abs(e);
                    return n.lift(new ns(s, i, t, r))
                }
        }
        var ns = function () {
            function e(e, t, r, n) {
                this.waitFor = e,
                    this.absoluteTimeout = t,
                    this.withObservable = r,
                    this.scheduler = n
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new no(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
            }
                ,
                e
        }()
            , no = function (e) {
                function t(t, r, n, i, s) {
                    var o = e.call(this, t) || this;
                    return o.absoluteTimeout = r,
                        o.waitFor = n,
                        o.withObservable = i,
                        o.scheduler = s,
                        o.scheduleTimeout(),
                        o
                }
                return n.__extends(t, e),
                    t.dispatchTimeout = function (e) {
                        var t = e.withObservable;
                        e._unsubscribeAndRecycle(),
                            e.add((0,
                                i.ft)(t, new i.IY(e)))
                    }
                    ,
                    t.prototype.scheduleTimeout = function () {
                        var e = this.action;
                        e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(t.dispatchTimeout, this.waitFor, this))
                    }
                    ,
                    t.prototype._next = function (t) {
                        this.absoluteTimeout || this.scheduleTimeout(),
                            e.prototype._next.call(this, t)
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        this.action = void 0,
                            this.scheduler = null,
                            this.withObservable = null
                    }
                    ,
                    t
            }(i.Ds)
            , na = r(64944);
        function nu(e, t) {
            return void 0 === t && (t = u.P),
                ni(e, (0,
                    na._)(new nn.W), t)
        }
        function nc(e) {
            return void 0 === e && (e = u.P),
                (0,
                    eY.U)(function (t) {
                        return new nl(t, e.now())
                    })
        }
        var nl = function (e, t) {
            this.value = e,
                this.timestamp = t
        };
        function nh(e, t, r) {
            return 0 === r ? [t] : (e.push(t),
                e)
        }
        function nd() {
            return tS(nh, [])
        }
        function nf(e) {
            return function (t) {
                return t.lift(new np(e))
            }
        }
        var np = function () {
            function e(e) {
                this.windowBoundaries = e
            }
            return e.prototype.call = function (e, t) {
                var r = new ng(e)
                    , n = t.subscribe(r);
                return n.closed || r.add((0,
                    i.ft)(this.windowBoundaries, new i.IY(r))),
                    n
            }
                ,
                e
        }()
            , ng = function (e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.window = new tq.xQ,
                        t.next(r.window),
                        r
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function () {
                        this.openWindow()
                    }
                    ,
                    t.prototype.notifyError = function (e) {
                        this._error(e)
                    }
                    ,
                    t.prototype.notifyComplete = function () {
                        this._complete()
                    }
                    ,
                    t.prototype._next = function (e) {
                        this.window.next(e)
                    }
                    ,
                    t.prototype._error = function (e) {
                        this.window.error(e),
                            this.destination.error(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        this.window.complete(),
                            this.destination.complete()
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        this.window = null
                    }
                    ,
                    t.prototype.openWindow = function () {
                        var e = this.window;
                        e && e.complete();
                        var t = this.destination
                            , r = this.window = new tq.xQ;
                        t.next(r)
                    }
                    ,
                    t
            }(i.Ds);
        function nm(e, t) {
            return void 0 === t && (t = 0),
                function (r) {
                    return r.lift(new ny(e, t))
                }
        }
        var ny = function () {
            function e(e, t) {
                this.windowSize = e,
                    this.startWindowEvery = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new nb(e, this.windowSize, this.startWindowEvery))
            }
                ,
                e
        }()
            , nb = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.destination = t,
                        i.windowSize = r,
                        i.startWindowEvery = n,
                        i.windows = [new tq.xQ],
                        i.count = 0,
                        t.next(i.windows[0]),
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        for (var t = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, r = this.destination, n = this.windowSize, i = this.windows, s = i.length, o = 0; o < s && !this.closed; o++)
                            i[o].next(e);
                        var a = this.count - n + 1;
                        if (a >= 0 && a % t == 0 && !this.closed && i.shift().complete(),
                            ++this.count % t == 0 && !this.closed) {
                            var u = new tq.xQ;
                            i.push(u),
                                r.next(u)
                        }
                    }
                    ,
                    t.prototype._error = function (e) {
                        var t = this.windows;
                        if (t)
                            for (; t.length > 0 && !this.closed;)
                                t.shift().error(e);
                        this.destination.error(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        var e = this.windows;
                        if (e)
                            for (; e.length > 0 && !this.closed;)
                                e.shift().complete();
                        this.destination.complete()
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        this.count = 0,
                            this.windows = null
                    }
                    ,
                    t
            }(p.L);
        function nv(e) {
            var t = u.P
                , r = null
                , n = Number.POSITIVE_INFINITY;
            return (0,
                v.K)(arguments[3]) && (t = arguments[3]),
                (0,
                    v.K)(arguments[2]) ? t = arguments[2] : (0,
                        rP.k)(arguments[2]) && (n = Number(arguments[2])),
                (0,
                    v.K)(arguments[1]) ? t = arguments[1] : (0,
                        rP.k)(arguments[1]) && (r = Number(arguments[1])),
                function (i) {
                    return i.lift(new n_(e, r, n, t))
                }
        }
        var n_ = function () {
            function e(e, t, r, n) {
                this.windowTimeSpan = e,
                    this.windowCreationInterval = t,
                    this.maxWindowSize = r,
                    this.scheduler = n
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new nE(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler))
            }
                ,
                e
        }()
            , nw = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._numberOfNextedValues = 0,
                        t
                }
                return n.__extends(t, e),
                    t.prototype.next = function (t) {
                        this._numberOfNextedValues++,
                            e.prototype.next.call(this, t)
                    }
                    ,
                    Object.defineProperty(t.prototype, "numberOfNextedValues", {
                        get: function () {
                            return this._numberOfNextedValues
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t
            }(tq.xQ)
            , nE = function (e) {
                function t(t, r, n, i, s) {
                    var o = e.call(this, t) || this;
                    o.destination = t,
                        o.windowTimeSpan = r,
                        o.windowCreationInterval = n,
                        o.maxWindowSize = i,
                        o.scheduler = s,
                        o.windows = [];
                    var a = o.openWindow();
                    return null !== n && n >= 0 ? (o.add(s.schedule(nx, r, {
                        subscriber: o,
                        window: a,
                        context: null
                    })),
                        o.add(s.schedule(nM, n, {
                            windowTimeSpan: r,
                            windowCreationInterval: n,
                            subscriber: o,
                            scheduler: s
                        }))) : o.add(s.schedule(nS, r, {
                            subscriber: o,
                            window: a,
                            windowTimeSpan: r
                        })),
                        o
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        for (var t = this.windows, r = t.length, n = 0; n < r; n++) {
                            var i = t[n];
                            !i.closed && (i.next(e),
                                i.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(i))
                        }
                    }
                    ,
                    t.prototype._error = function (e) {
                        for (var t = this.windows; t.length > 0;)
                            t.shift().error(e);
                        this.destination.error(e)
                    }
                    ,
                    t.prototype._complete = function () {
                        for (var e = this.windows; e.length > 0;) {
                            var t = e.shift();
                            t.closed || t.complete()
                        }
                        this.destination.complete()
                    }
                    ,
                    t.prototype.openWindow = function () {
                        var e = new nw;
                        return this.windows.push(e),
                            this.destination.next(e),
                            e
                    }
                    ,
                    t.prototype.closeWindow = function (e) {
                        e.complete();
                        var t = this.windows;
                        t.splice(t.indexOf(e), 1)
                    }
                    ,
                    t
            }(p.L);
        function nS(e) {
            var t = e.subscriber
                , r = e.windowTimeSpan
                , n = e.window;
            n && t.closeWindow(n),
                e.window = t.openWindow(),
                this.schedule(e, r)
        }
        function nM(e) {
            var t = e.windowTimeSpan
                , r = e.subscriber
                , n = e.scheduler
                , i = e.windowCreationInterval
                , s = r.openWindow()
                , o = {
                    action: this,
                    subscription: null
                };
            o.subscription = n.schedule(nx, t, {
                subscriber: r,
                window: s,
                context: o
            }),
                this.add(o.subscription),
                this.schedule(e, i)
        }
        function nx(e) {
            var t = e.subscriber
                , r = e.window
                , n = e.context;
            n && n.action && n.subscription && n.action.remove(n.subscription),
                t.closeWindow(r)
        }
        function nC(e, t) {
            return function (r) {
                return r.lift(new nk(e, t))
            }
        }
        var nk = function () {
            function e(e, t) {
                this.openings = e,
                    this.closingSelector = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new nI(e, this.openings, this.closingSelector))
            }
                ,
                e
        }()
            , nI = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    return i.openings = r,
                        i.closingSelector = n,
                        i.contexts = [],
                        i.add(i.openSubscription = (0,
                            I.D)(i, r, r)),
                        i
                }
                return n.__extends(t, e),
                    t.prototype._next = function (e) {
                        var t = this.contexts;
                        if (t)
                            for (var r = t.length, n = 0; n < r; n++)
                                t[n].window.next(e)
                    }
                    ,
                    t.prototype._error = function (t) {
                        var r = this.contexts;
                        if (this.contexts = null,
                            r)
                            for (var n = r.length, i = -1; ++i < n;) {
                                var s = r[i];
                                s.window.error(t),
                                    s.subscription.unsubscribe()
                            }
                        e.prototype._error.call(this, t)
                    }
                    ,
                    t.prototype._complete = function () {
                        var t = this.contexts;
                        if (this.contexts = null,
                            t)
                            for (var r = t.length, n = -1; ++n < r;) {
                                var i = t[n];
                                i.window.complete(),
                                    i.subscription.unsubscribe()
                            }
                        e.prototype._complete.call(this)
                    }
                    ,
                    t.prototype._unsubscribe = function () {
                        var e = this.contexts;
                        if (this.contexts = null,
                            e)
                            for (var t = e.length, r = -1; ++r < t;) {
                                var n = e[r];
                                n.window.unsubscribe(),
                                    n.subscription.unsubscribe()
                            }
                    }
                    ,
                    t.prototype.notifyNext = function (e, t, r, n, i) {
                        if (e === this.openings) {
                            var s = void 0;
                            try {
                                s = (0,
                                    this.closingSelector)(t)
                            } catch (e) {
                                return this.error(e)
                            }
                            var o = new tq.xQ
                                , a = new k.w
                                , u = {
                                    window: o,
                                    subscription: a
                                };
                            this.contexts.push(u);
                            var c = (0,
                                I.D)(this, s, u);
                            c.closed ? this.closeWindow(this.contexts.length - 1) : (c.context = u,
                                a.add(c)),
                                this.destination.next(o)
                        } else
                            this.closeWindow(this.contexts.indexOf(e))
                    }
                    ,
                    t.prototype.notifyError = function (e) {
                        this.error(e)
                    }
                    ,
                    t.prototype.notifyComplete = function (e) {
                        e !== this.openSubscription && this.closeWindow(this.contexts.indexOf(e.context))
                    }
                    ,
                    t.prototype.closeWindow = function (e) {
                        if (-1 !== e) {
                            var t = this.contexts
                                , r = t[e]
                                , n = r.window
                                , i = r.subscription;
                            t.splice(e, 1),
                                n.complete(),
                                i.unsubscribe()
                        }
                    }
                    ,
                    t
            }(R.L);
        function nR(e) {
            return function (t) {
                return t.lift(new nN(e))
            }
        }
        var nN = function () {
            function e(e) {
                this.closingSelector = e
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new nA(e, this.closingSelector))
            }
                ,
                e
        }()
            , nA = function (e) {
                function t(t, r) {
                    var n = e.call(this, t) || this;
                    return n.destination = t,
                        n.closingSelector = r,
                        n.openWindow(),
                        n
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function (e, t, r, n, i) {
                        this.openWindow(i)
                    }
                    ,
                    t.prototype.notifyError = function (e) {
                        this._error(e)
                    }
                    ,
                    t.prototype.notifyComplete = function (e) {
                        this.openWindow(e)
                    }
                    ,
                    t.prototype._next = function (e) {
                        this.window.next(e)
                    }
                    ,
                    t.prototype._error = function (e) {
                        this.window.error(e),
                            this.destination.error(e),
                            this.unsubscribeClosingNotification()
                    }
                    ,
                    t.prototype._complete = function () {
                        this.window.complete(),
                            this.destination.complete(),
                            this.unsubscribeClosingNotification()
                    }
                    ,
                    t.prototype.unsubscribeClosingNotification = function () {
                        this.closingNotification && this.closingNotification.unsubscribe()
                    }
                    ,
                    t.prototype.openWindow = function (e) {
                        void 0 === e && (e = null),
                            e && (this.remove(e),
                                e.unsubscribe());
                        var t, r = this.window;
                        r && r.complete();
                        var n = this.window = new tq.xQ;
                        this.destination.next(n);
                        try {
                            t = (0,
                                this.closingSelector)()
                        } catch (e) {
                            this.destination.error(e),
                                this.window.error(e);
                            return
                        }
                        this.add(this.closingNotification = (0,
                            I.D)(this, t))
                    }
                    ,
                    t
            }(R.L);
        function nO() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return function (t) {
                var r;
                return "function" == typeof e[e.length - 1] && (r = e.pop()),
                    t.lift(new nL(e, r))
            }
        }
        var nL = function () {
            function e(e, t) {
                this.observables = e,
                    this.project = t
            }
            return e.prototype.call = function (e, t) {
                return t.subscribe(new nT(e, this.observables, this.project))
            }
                ,
                e
        }()
            , nT = function (e) {
                function t(t, r, n) {
                    var i = e.call(this, t) || this;
                    i.observables = r,
                        i.project = n,
                        i.toRespond = [];
                    var s = r.length;
                    i.values = Array(s);
                    for (var o = 0; o < s; o++)
                        i.toRespond.push(o);
                    for (var o = 0; o < s; o++) {
                        var a = r[o];
                        i.add((0,
                            I.D)(i, a, void 0, o))
                    }
                    return i
                }
                return n.__extends(t, e),
                    t.prototype.notifyNext = function (e, t, r) {
                        this.values[r] = t;
                        var n = this.toRespond;
                        if (n.length > 0) {
                            var i = n.indexOf(r);
                            -1 !== i && n.splice(i, 1)
                        }
                    }
                    ,
                    t.prototype.notifyComplete = function () { }
                    ,
                    t.prototype._next = function (e) {
                        if (0 === this.toRespond.length) {
                            var t = [e].concat(this.values);
                            this.project ? this._tryProject(t) : this.destination.next(t)
                        }
                    }
                    ,
                    t.prototype._tryProject = function (e) {
                        var t;
                        try {
                            t = this.project.apply(this, e)
                        } catch (e) {
                            this.destination.error(e);
                            return
                        }
                        this.destination.next(t)
                    }
                    ,
                    t
            }(R.L)
            , nj = r(25080);
        function nP() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return function (t) {
                return t.lift.call(nj.$R.apply(void 0, [t].concat(e)))
            }
        }
        function nD(e) {
            return function (t) {
                return t.lift(new nj.mx(e))
            }
        }
    },
    37478: function (e, t, r) {
        "use strict";
        var n = r(40210)
            , i = r(21924)
            , s = r(70631)
            , o = n("%TypeError%")
            , a = n("%WeakMap%", !0)
            , u = n("%Map%", !0)
            , c = i("WeakMap.prototype.get", !0)
            , l = i("WeakMap.prototype.set", !0)
            , h = i("WeakMap.prototype.has", !0)
            , d = i("Map.prototype.get", !0)
            , f = i("Map.prototype.set", !0)
            , p = i("Map.prototype.has", !0)
            , g = function (e, t) {
                for (var r, n = e; null !== (r = n.next); n = r)
                    if (r.key === t)
                        return n.next = r.next,
                            r.next = e.next,
                            e.next = r,
                            r
            }
            , m = function (e, t) {
                var r = g(e, t);
                return r && r.value
            }
            , y = function (e, t, r) {
                var n = g(e, t);
                n ? n.value = r : e.next = {
                    key: t,
                    next: e.next,
                    value: r
                }
            };
        e.exports = function () {
            var e, t, r, n = {
                assert: function (e) {
                    if (!n.has(e))
                        throw new o("Side channel does not contain " + s(e))
                },
                get: function (n) {
                    if (a && n && ("object" == typeof n || "function" == typeof n)) {
                        if (e)
                            return c(e, n)
                    } else if (u) {
                        if (t)
                            return d(t, n)
                    } else if (r)
                        return m(r, n)
                },
                has: function (n) {
                    if (a && n && ("object" == typeof n || "function" == typeof n)) {
                        if (e)
                            return h(e, n)
                    } else if (u) {
                        if (t)
                            return p(t, n)
                    } else if (r)
                        return !!g(r, n);
                    return !1
                },
                set: function (n, i) {
                    a && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new a),
                        l(e, n, i)) : u ? (t || (t = new u),
                            f(t, n, i)) : (r || (r = {
                                key: {},
                                next: null
                            }),
                                y(r, n, i))
                }
            };
            return n
        }
    },
    47529: function (e) {
        e.exports = function () {
            for (var e = {}, r = 0; r < arguments.length; r++) {
                var n = arguments[r];
                for (var i in n)
                    t.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            ;
        var t = Object.prototype.hasOwnProperty
    },
    11821: function (e, t, r) {
        "use strict";
        r.r(t),
            r.d(t, {
                Struct: function () {
                    return c
                },
                StructError: function () {
                    return n
                },
                any: function () {
                    return M
                },
                array: function () {
                    return x
                },
                assert: function () {
                    return l
                },
                assign: function () {
                    return g
                },
                bigint: function () {
                    return C
                },
                boolean: function () {
                    return k
                },
                coerce: function () {
                    return Z
                },
                create: function () {
                    return h
                },
                date: function () {
                    return I
                },
                defaulted: function () {
                    return Q
                },
                define: function () {
                    return m
                },
                deprecated: function () {
                    return y
                },
                dynamic: function () {
                    return b
                },
                empty: function () {
                    return K
                },
                enums: function () {
                    return R
                },
                func: function () {
                    return N
                },
                instance: function () {
                    return A
                },
                integer: function () {
                    return O
                },
                intersection: function () {
                    return L
                },
                is: function () {
                    return f
                },
                lazy: function () {
                    return v
                },
                literal: function () {
                    return T
                },
                map: function () {
                    return j
                },
                mask: function () {
                    return d
                },
                max: function () {
                    return ee
                },
                min: function () {
                    return et
                },
                never: function () {
                    return P
                },
                nonempty: function () {
                    return er
                },
                nullable: function () {
                    return D
                },
                number: function () {
                    return B
                },
                object: function () {
                    return F
                },
                omit: function () {
                    return _
                },
                optional: function () {
                    return $
                },
                partial: function () {
                    return w
                },
                pattern: function () {
                    return en
                },
                pick: function () {
                    return E
                },
                record: function () {
                    return V
                },
                refine: function () {
                    return es
                },
                regexp: function () {
                    return z
                },
                set: function () {
                    return H
                },
                size: function () {
                    return ei
                },
                string: function () {
                    return W
                },
                struct: function () {
                    return S
                },
                trimmed: function () {
                    return Y
                },
                tuple: function () {
                    return U
                },
                type: function () {
                    return q
                },
                union: function () {
                    return J
                },
                unknown: function () {
                    return G
                },
                validate: function () {
                    return p
                }
            });
        class n extends TypeError {
            constructor(e, t) {
                let r;
                let { message: n, explanation: i, ...s } = e
                    , { path: o } = e
                    , a = 0 === o.length ? n : `At path: ${o.join(".")} -- ${n}`;
                super(i ?? a),
                    null != i && (this.cause = a),
                    Object.assign(this, s),
                    this.name = this.constructor.name,
                    this.failures = () => r ?? (r = [e, ...t()])
            }
        }
        function i(e) {
            return "object" == typeof e && null != e
        }
        function s(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e))
                return !1;
            let t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function o(e) {
            return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
        }
        function* a(e, t, r, n) {
            var s;
            for (let a of (i(s = e) && "function" == typeof s[Symbol.iterator] || (e = [e]),
                e)) {
                let e = function (e, t, r, n) {
                    if (!0 === e)
                        return;
                    !1 === e ? e = {} : "string" == typeof e && (e = {
                        message: e
                    });
                    let { path: i, branch: s } = t
                        , { type: a } = r
                        , { refinement: u, message: c = `Expected a value of type \`${a}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${o(n)}\`` } = e;
                    return {
                        value: n,
                        type: a,
                        refinement: u,
                        key: i[i.length - 1],
                        path: i,
                        branch: s,
                        ...e,
                        message: c
                    }
                }(a, t, r, n);
                e && (yield e)
            }
        }
        function* u(e, t, r = {}) {
            let { path: n = [], branch: s = [e], coerce: o = !1, mask: a = !1 } = r
                , c = {
                    path: n,
                    branch: s
                };
            if (o && (e = t.coercer(e, c),
                a && "type" !== t.type && i(t.schema) && i(e) && !Array.isArray(e)))
                for (let r in e)
                    void 0 === t.schema[r] && delete e[r];
            let l = "valid";
            for (let n of t.validator(e, c))
                n.explanation = r.message,
                    l = "not_valid",
                    yield [n, void 0];
            for (let [h, d, f] of t.entries(e, c)) {
                let t = u(d, f, {
                    path: void 0 === h ? n : [...n, h],
                    branch: void 0 === h ? s : [...s, d],
                    coerce: o,
                    mask: a,
                    message: r.message
                });
                for (let r of t)
                    r[0] ? (l = null != r[0].refinement ? "not_refined" : "not_valid",
                        yield [r[0], void 0]) : o && (d = r[1],
                            void 0 === h ? e = d : e instanceof Map ? e.set(h, d) : e instanceof Set ? e.add(d) : i(e) && (void 0 !== d || h in e) && (e[h] = d))
            }
            if ("not_valid" !== l)
                for (let n of t.refiner(e, c))
                    n.explanation = r.message,
                        l = "not_refined",
                        yield [n, void 0];
            "valid" === l && (yield [void 0, e])
        }
        class c {
            constructor(e) {
                let { type: t, schema: r, validator: n, refiner: i, coercer: s = e => e, entries: o = function* () { }
                } = e;
                this.type = t,
                    this.schema = r,
                    this.entries = o,
                    this.coercer = s,
                    n ? this.validator = (e, t) => {
                        let r = n(e, t);
                        return a(r, t, this, e)
                    }
                        : this.validator = () => [],
                    i ? this.refiner = (e, t) => {
                        let r = i(e, t);
                        return a(r, t, this, e)
                    }
                        : this.refiner = () => []
            }
            assert(e, t) {
                return l(e, this, t)
            }
            create(e, t) {
                return h(e, this, t)
            }
            is(e) {
                return f(e, this)
            }
            mask(e, t) {
                return d(e, this, t)
            }
            validate(e, t = {}) {
                return p(e, this, t)
            }
        }
        function l(e, t, r) {
            let n = p(e, t, {
                message: r
            });
            if (n[0])
                throw n[0]
        }
        function h(e, t, r) {
            let n = p(e, t, {
                coerce: !0,
                message: r
            });
            if (!n[0])
                return n[1];
            throw n[0]
        }
        function d(e, t, r) {
            let n = p(e, t, {
                coerce: !0,
                mask: !0,
                message: r
            });
            if (!n[0])
                return n[1];
            throw n[0]
        }
        function f(e, t) {
            let r = p(e, t);
            return !r[0]
        }
        function p(e, t, r = {}) {
            let i = u(e, t, r)
                , s = function (e) {
                    let { done: t, value: r } = e.next();
                    return t ? void 0 : r
                }(i);
            if (s[0]) {
                let e = new n(s[0], function* () {
                    for (let e of i)
                        e[0] && (yield e[0])
                }
                );
                return [e, void 0]
            }
            {
                let e = s[1];
                return [void 0, e]
            }
        }
        function g(...e) {
            let t = "type" === e[0].type
                , r = e.map(e => e.schema)
                , n = Object.assign({}, ...r);
            return t ? q(n) : F(n)
        }
        function m(e, t) {
            return new c({
                type: e,
                schema: null,
                validator: t
            })
        }
        function y(e, t) {
            return new c({
                ...e,
                refiner: (t, r) => void 0 === t || e.refiner(t, r),
                validator: (r, n) => void 0 === r || (t(r, n),
                    e.validator(r, n))
            })
        }
        function b(e) {
            return new c({
                type: "dynamic",
                schema: null,
                *entries(t, r) {
                    let n = e(t, r);
                    yield* n.entries(t, r)
                },
                validator(t, r) {
                    let n = e(t, r);
                    return n.validator(t, r)
                },
                coercer(t, r) {
                    let n = e(t, r);
                    return n.coercer(t, r)
                },
                refiner(t, r) {
                    let n = e(t, r);
                    return n.refiner(t, r)
                }
            })
        }
        function v(e) {
            let t;
            return new c({
                type: "lazy",
                schema: null,
                *entries(r, n) {
                    t ?? (t = e()),
                        yield* t.entries(r, n)
                },
                validator: (r, n) => (t ?? (t = e()),
                    t.validator(r, n)),
                coercer: (r, n) => (t ?? (t = e()),
                    t.coercer(r, n)),
                refiner: (r, n) => (t ?? (t = e()),
                    t.refiner(r, n))
            })
        }
        function _(e, t) {
            let { schema: r } = e
                , n = {
                    ...r
                };
            for (let e of t)
                delete n[e];
            return "type" === e.type ? q(n) : F(n)
        }
        function w(e) {
            let t = e instanceof c ? {
                ...e.schema
            } : {
                ...e
            };
            for (let e in t)
                t[e] = $(t[e]);
            return F(t)
        }
        function E(e, t) {
            let { schema: r } = e
                , n = {};
            for (let e of t)
                n[e] = r[e];
            return F(n)
        }
        function S(e, t) {
            return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),
                m(e, t)
        }
        function M() {
            return m("any", () => !0)
        }
        function x(e) {
            return new c({
                type: "array",
                schema: e,
                *entries(t) {
                    if (e && Array.isArray(t))
                        for (let [r, n] of t.entries())
                            yield [r, n, e]
                },
                coercer: e => Array.isArray(e) ? e.slice() : e,
                validator: e => Array.isArray(e) || `Expected an array value, but received: ${o(e)}`
            })
        }
        function C() {
            return m("bigint", e => "bigint" == typeof e)
        }
        function k() {
            return m("boolean", e => "boolean" == typeof e)
        }
        function I() {
            return m("date", e => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${o(e)}`)
        }
        function R(e) {
            let t = {}
                , r = e.map(e => o(e)).join();
            for (let r of e)
                t[r] = r;
            return new c({
                type: "enums",
                schema: t,
                validator: t => e.includes(t) || `Expected one of \`${r}\`, but received: ${o(t)}`
            })
        }
        function N() {
            return m("func", e => "function" == typeof e || `Expected a function, but received: ${o(e)}`)
        }
        function A(e) {
            return m("instance", t => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${o(t)}`)
        }
        function O() {
            return m("integer", e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${o(e)}`)
        }
        function L(e) {
            return new c({
                type: "intersection",
                schema: null,
                *entries(t, r) {
                    for (let n of e)
                        yield* n.entries(t, r)
                },
                *validator(t, r) {
                    for (let n of e)
                        yield* n.validator(t, r)
                },
                *refiner(t, r) {
                    for (let n of e)
                        yield* n.refiner(t, r)
                }
            })
        }
        function T(e) {
            let t = o(e)
                , r = typeof e;
            return new c({
                type: "literal",
                schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                validator: r => r === e || `Expected the literal \`${t}\`, but received: ${o(r)}`
            })
        }
        function j(e, t) {
            return new c({
                type: "map",
                schema: null,
                *entries(r) {
                    if (e && t && r instanceof Map)
                        for (let [n, i] of r.entries())
                            yield [n, n, e],
                                yield [n, i, t]
                },
                coercer: e => e instanceof Map ? new Map(e) : e,
                validator: e => e instanceof Map || `Expected a \`Map\` object, but received: ${o(e)}`
            })
        }
        function P() {
            return m("never", () => !1)
        }
        function D(e) {
            return new c({
                ...e,
                validator: (t, r) => null === t || e.validator(t, r),
                refiner: (t, r) => null === t || e.refiner(t, r)
            })
        }
        function B() {
            return m("number", e => "number" == typeof e && !isNaN(e) || `Expected a number, but received: ${o(e)}`)
        }
        function F(e) {
            let t = e ? Object.keys(e) : []
                , r = P();
            return new c({
                type: "object",
                schema: e || null,
                *entries(n) {
                    if (e && i(n)) {
                        let i = new Set(Object.keys(n));
                        for (let r of t)
                            i.delete(r),
                                yield [r, n[r], e[r]];
                        for (let e of i)
                            yield [e, n[e], r]
                    }
                },
                validator: e => i(e) || `Expected an object, but received: ${o(e)}`,
                coercer: e => i(e) ? {
                    ...e
                } : e
            })
        }
        function $(e) {
            return new c({
                ...e,
                validator: (t, r) => void 0 === t || e.validator(t, r),
                refiner: (t, r) => void 0 === t || e.refiner(t, r)
            })
        }
        function V(e, t) {
            return new c({
                type: "record",
                schema: null,
                *entries(r) {
                    if (i(r))
                        for (let n in r) {
                            let i = r[n];
                            yield [n, n, e],
                                yield [n, i, t]
                        }
                },
                validator: e => i(e) || `Expected an object, but received: ${o(e)}`
            })
        }
        function z() {
            return m("regexp", e => e instanceof RegExp)
        }
        function H(e) {
            return new c({
                type: "set",
                schema: null,
                *entries(t) {
                    if (e && t instanceof Set)
                        for (let r of t)
                            yield [r, r, e]
                },
                coercer: e => e instanceof Set ? new Set(e) : e,
                validator: e => e instanceof Set || `Expected a \`Set\` object, but received: ${o(e)}`
            })
        }
        function W() {
            return m("string", e => "string" == typeof e || `Expected a string, but received: ${o(e)}`)
        }
        function U(e) {
            let t = P();
            return new c({
                type: "tuple",
                schema: null,
                *entries(r) {
                    if (Array.isArray(r)) {
                        let n = Math.max(e.length, r.length);
                        for (let i = 0; i < n; i++)
                            yield [i, r[i], e[i] || t]
                    }
                },
                validator: e => Array.isArray(e) || `Expected an array, but received: ${o(e)}`
            })
        }
        function q(e) {
            let t = Object.keys(e);
            return new c({
                type: "type",
                schema: e,
                *entries(r) {
                    if (i(r))
                        for (let n of t)
                            yield [n, r[n], e[n]]
                },
                validator: e => i(e) || `Expected an object, but received: ${o(e)}`,
                coercer: e => i(e) ? {
                    ...e
                } : e
            })
        }
        function J(e) {
            let t = e.map(e => e.type).join(" | ");
            return new c({
                type: "union",
                schema: null,
                coercer(t) {
                    for (let r of e) {
                        let [e, n] = r.validate(t, {
                            coerce: !0
                        });
                        if (!e)
                            return n
                    }
                    return t
                },
                validator(r, n) {
                    let i = [];
                    for (let t of e) {
                        let [...e] = u(r, t, n)
                            , [s] = e;
                        if (!s[0])
                            return [];
                        for (let [t] of e)
                            t && i.push(t)
                    }
                    return [`Expected the value to satisfy a union of \`${t}\`, but received: ${o(r)}`, ...i]
                }
            })
        }
        function G() {
            return m("unknown", () => !0)
        }
        function Z(e, t, r) {
            return new c({
                ...e,
                coercer: (n, i) => f(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
            })
        }
        function Q(e, t, r = {}) {
            return Z(e, G(), e => {
                let n = "function" == typeof t ? t() : t;
                if (void 0 === e)
                    return n;
                if (!r.strict && s(e) && s(n)) {
                    let t = {
                        ...e
                    }
                        , r = !1;
                    for (let e in n)
                        void 0 === t[e] && (t[e] = n[e],
                            r = !0);
                    if (r)
                        return t
                }
                return e
            }
            )
        }
        function Y(e) {
            return Z(e, W(), e => e.trim())
        }
        function K(e) {
            return es(e, "empty", t => {
                let r = X(t);
                return 0 === r || `Expected an empty ${e.type} but received one with a size of \`${r}\``
            }
            )
        }
        function X(e) {
            return e instanceof Map || e instanceof Set ? e.size : e.length
        }
        function ee(e, t, r = {}) {
            let { exclusive: n } = r;
            return es(e, "max", r => n ? r < t : r <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``)
        }
        function et(e, t, r = {}) {
            let { exclusive: n } = r;
            return es(e, "min", r => n ? r > t : r >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``)
        }
        function er(e) {
            return es(e, "nonempty", t => {
                let r = X(t);
                return r > 0 || `Expected a nonempty ${e.type} but received an empty one`
            }
            )
        }
        function en(e, t) {
            return es(e, "pattern", r => t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`)
        }
        function ei(e, t, r = t) {
            let n = `Expected a ${e.type}`
                , i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
            return es(e, "size", e => {
                if ("number" == typeof e || e instanceof Date)
                    return t <= e && e <= r || `${n} ${i} but received \`${e}\``;
                if (e instanceof Map || e instanceof Set) {
                    let { size: s } = e;
                    return t <= s && s <= r || `${n} with a size ${i} but received one with a size of \`${s}\``
                }
                {
                    let { length: s } = e;
                    return t <= s && s <= r || `${n} with a length ${i} but received one with a length of \`${s}\``
                }
            }
            )
        }
        function es(e, t, r) {
            return new c({
                ...e,
                *refiner(n, i) {
                    yield* e.refiner(n, i);
                    let s = r(n, i)
                        , o = a(s, i, e, n);
                    for (let e of o)
                        yield {
                            ...e,
                            refinement: t
                        }
                }
            })
        }
    },
    33649: function (e, t, r) {
        "use strict";
        r.r(t),
            r.d(t, {
                __addDisposableResource: function () {
                    return T
                },
                __assign: function () {
                    return s
                },
                __asyncDelegator: function () {
                    return x
                },
                __asyncGenerator: function () {
                    return M
                },
                __asyncValues: function () {
                    return C
                },
                __await: function () {
                    return S
                },
                __awaiter: function () {
                    return p
                },
                __classPrivateFieldGet: function () {
                    return A
                },
                __classPrivateFieldIn: function () {
                    return L
                },
                __classPrivateFieldSet: function () {
                    return O
                },
                __createBinding: function () {
                    return m
                },
                __decorate: function () {
                    return a
                },
                __disposeResources: function () {
                    return P
                },
                __esDecorate: function () {
                    return c
                },
                __exportStar: function () {
                    return y
                },
                __extends: function () {
                    return i
                },
                __generator: function () {
                    return g
                },
                __importDefault: function () {
                    return N
                },
                __importStar: function () {
                    return R
                },
                __makeTemplateObject: function () {
                    return k
                },
                __metadata: function () {
                    return f
                },
                __param: function () {
                    return u
                },
                __propKey: function () {
                    return h
                },
                __read: function () {
                    return v
                },
                __rest: function () {
                    return o
                },
                __runInitializers: function () {
                    return l
                },
                __setFunctionName: function () {
                    return d
                },
                __spread: function () {
                    return _
                },
                __spreadArray: function () {
                    return E
                },
                __spreadArrays: function () {
                    return w
                },
                __values: function () {
                    return b
                }
            });
        var n = function (e, t) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function (e, t) {
                e.__proto__ = t
            }
                || function (e, t) {
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
            )(e, t)
        };
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
                this.constructor = e
            }
            n(e, t),
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                    new r)
        }
        var s = function () {
            return (s = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ).apply(this, arguments)
        };
        function o(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        }
        function a(e, t, r, n) {
            var i, s = arguments.length, o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, r, n);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
            return s > 3 && o && Object.defineProperty(t, r, o),
                o
        }
        function u(e, t) {
            return function (r, n) {
                t(r, n, e)
            }
        }
        function c(e, t, r, n, i, s) {
            function o(e) {
                if (void 0 !== e && "function" != typeof e)
                    throw TypeError("Function expected");
                return e
            }
            for (var a, u = n.kind, c = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, h = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), d = !1, f = r.length - 1; f >= 0; f--) {
                var p = {};
                for (var g in n)
                    p[g] = "access" === g ? {} : n[g];
                for (var g in n.access)
                    p.access[g] = n.access[g];
                p.addInitializer = function (e) {
                    if (d)
                        throw TypeError("Cannot add initializers after decoration has completed");
                    s.push(o(e || null))
                }
                    ;
                var m = (0,
                    r[f])("accessor" === u ? {
                        get: h.get,
                        set: h.set
                    } : h[c], p);
                if ("accessor" === u) {
                    if (void 0 === m)
                        continue;
                    if (null === m || "object" != typeof m)
                        throw TypeError("Object expected");
                    (a = o(m.get)) && (h.get = a),
                        (a = o(m.set)) && (h.set = a),
                        (a = o(m.init)) && i.unshift(a)
                } else
                    (a = o(m)) && ("field" === u ? i.unshift(a) : h[c] = a)
            }
            l && Object.defineProperty(l, n.name, h),
                d = !0
        }
        function l(e, t, r) {
            for (var n = arguments.length > 2, i = 0; i < t.length; i++)
                r = n ? t[i].call(e, r) : t[i].call(e);
            return n ? r : void 0
        }
        function h(e) {
            return "symbol" == typeof e ? e : "".concat(e)
        }
        function d(e, t, r) {
            return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""),
                Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                })
        }
        function f(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
        function p(e, t, r, n) {
            return new (r || (r = Promise))(function (i, s) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }
        function g(e, t) {
            var r, n, i, s, o = {
                label: 0,
                sent: function () {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
                "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }
                ),
                s;
            function a(a) {
                return function (u) {
                    return function (a) {
                        if (r)
                            throw TypeError("Generator is already executing.");
                        for (; s && (s = 0,
                            a[0] && (o = 0)),
                            o;)
                            try {
                                if (r = 1,
                                    n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n),
                                        0) : n.next) && !(i = i.call(n, a[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (a = [2 & a[0], i.value]),
                                a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                            n = a[1],
                                            a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop(),
                                            o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1],
                                                i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2],
                                                o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop(),
                                            o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e],
                                    n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        }
        var m = Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                enumerable: !0,
                get: function () {
                    return t[r]
                }
            }),
                Object.defineProperty(e, n, i)
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
            ;
        function y(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || m(t, e, r)
        }
        function b(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
                , r = t && e[t]
                , n = 0;
            if (r)
                return r.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function () {
                        return e && n >= e.length && (e = void 0),
                        {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
            throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function v(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r)
                return e;
            var n, i, s = r.call(e), o = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(n = s.next()).done;)
                    o.push(n.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (r = s.return) && r.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return o
        }
        function _() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(v(arguments[t]));
            return e
        }
        function w() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                e += arguments[t].length;
            for (var n = Array(e), i = 0, t = 0; t < r; t++)
                for (var s = arguments[t], o = 0, a = s.length; o < a; o++,
                    i++)
                    n[i] = s[o];
            return n
        }
        function E(e, t, r) {
            if (r || 2 == arguments.length)
                for (var n, i = 0, s = t.length; i < s; i++)
                    !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)),
                        n[i] = t[i]);
            return e.concat(n || Array.prototype.slice.call(t))
        }
        function S(e) {
            return this instanceof S ? (this.v = e,
                this) : new S(e)
        }
        function M(e, t, r) {
            if (!Symbol.asyncIterator)
                throw TypeError("Symbol.asyncIterator is not defined.");
            var n, i = r.apply(e, t || []), s = [];
            return n = {},
                o("next"),
                o("throw"),
                o("return"),
                n[Symbol.asyncIterator] = function () {
                    return this
                }
                ,
                n;
            function o(e) {
                i[e] && (n[e] = function (t) {
                    return new Promise(function (r, n) {
                        s.push([e, t, r, n]) > 1 || a(e, t)
                    }
                    )
                }
                )
            }
            function a(e, t) {
                try {
                    var r;
                    (r = i[e](t)).value instanceof S ? Promise.resolve(r.value.v).then(u, c) : l(s[0][2], r)
                } catch (e) {
                    l(s[0][3], e)
                }
            }
            function u(e) {
                a("next", e)
            }
            function c(e) {
                a("throw", e)
            }
            function l(e, t) {
                e(t),
                    s.shift(),
                    s.length && a(s[0][0], s[0][1])
            }
        }
        function x(e) {
            var t, r;
            return t = {},
                n("next"),
                n("throw", function (e) {
                    throw e
                }),
                n("return"),
                t[Symbol.iterator] = function () {
                    return this
                }
                ,
                t;
            function n(n, i) {
                t[n] = e[n] ? function (t) {
                    return (r = !r) ? {
                        value: S(e[n](t)),
                        done: !1
                    } : i ? i(t) : t
                }
                    : i
            }
        }
        function C(e) {
            if (!Symbol.asyncIterator)
                throw TypeError("Symbol.asyncIterator is not defined.");
            var t, r = e[Symbol.asyncIterator];
            return r ? r.call(e) : (e = b(e),
                t = {},
                n("next"),
                n("throw"),
                n("return"),
                t[Symbol.asyncIterator] = function () {
                    return this
                }
                ,
                t);
            function n(r) {
                t[r] = e[r] && function (t) {
                    return new Promise(function (n, i) {
                        !function (e, t, r, n) {
                            Promise.resolve(n).then(function (t) {
                                e({
                                    value: t,
                                    done: r
                                })
                            }, t)
                        }(n, i, (t = e[r](t)).done, t.value)
                    }
                    )
                }
            }
        }
        function k(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t,
                e
        }
        var I = Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
            : function (e, t) {
                e.default = t
            }
            ;
        function R(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && m(t, e, r);
            return I(t, e),
                t
        }
        function N(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function A(e, t, r, n) {
            if ("a" === r && !n)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        function O(e, t, r, n, i) {
            if ("m" === n)
                throw TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
                r
        }
        function L(e, t) {
            if (null === t || "object" != typeof t && "function" != typeof t)
                throw TypeError("Cannot use 'in' operator on non-object");
            return "function" == typeof e ? t === e : e.has(t)
        }
        function T(e, t, r) {
            if (null != t) {
                var n;
                if ("object" != typeof t && "function" != typeof t)
                    throw TypeError("Object expected.");
                if (r) {
                    if (!Symbol.asyncDispose)
                        throw TypeError("Symbol.asyncDispose is not defined.");
                    n = t[Symbol.asyncDispose]
                }
                if (void 0 === n) {
                    if (!Symbol.dispose)
                        throw TypeError("Symbol.dispose is not defined.");
                    n = t[Symbol.dispose]
                }
                if ("function" != typeof n)
                    throw TypeError("Object not disposable.");
                e.stack.push({
                    value: t,
                    dispose: n,
                    async: r
                })
            } else
                r && e.stack.push({
                    async: !0
                });
            return t
        }
        var j = "function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
            var n = Error(r);
            return n.name = "SuppressedError",
                n.error = e,
                n.suppressed = t,
                n
        }
            ;
        function P(e) {
            function t(t) {
                e.error = e.hasError ? new j(t, e.error, "An error was suppressed during disposal.") : t,
                    e.hasError = !0
            }
            return function r() {
                for (; e.stack.length;) {
                    var n = e.stack.pop();
                    try {
                        var i = n.dispose && n.dispose.call(n.value);
                        if (n.async)
                            return Promise.resolve(i).then(r, function (e) {
                                return t(e),
                                    r()
                            })
                    } catch (e) {
                        t(e)
                    }
                }
                if (e.hasError)
                    throw e.error
            }()
        }
        t.default = {
            __extends: i,
            __assign: s,
            __rest: o,
            __decorate: a,
            __param: u,
            __metadata: f,
            __awaiter: p,
            __generator: g,
            __createBinding: m,
            __exportStar: y,
            __values: b,
            __read: v,
            __spread: _,
            __spreadArrays: w,
            __spreadArray: E,
            __await: S,
            __asyncGenerator: M,
            __asyncDelegator: x,
            __asyncValues: C,
            __makeTemplateObject: k,
            __importStar: R,
            __importDefault: N,
            __classPrivateFieldGet: A,
            __classPrivateFieldSet: O,
            __classPrivateFieldIn: L,
            __addDisposableResource: T,
            __disposeResources: P
        }
    }
}]);
