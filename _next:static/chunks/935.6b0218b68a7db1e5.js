(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[935], {
  31050: function (e, t, r) {
    "use strict";
    t.Xx = t._w = t.aP = t.KS = t.jQ = void 0,
      r(31416);
    let i = r(93350);
    function n(e) {
      let t = new Float64Array(16);
      if (e)
        for (let r = 0; r < e.length; r++)
          t[r] = e[r];
      return t
    }
    r(17309),
      t.jQ = 64,
      t.KS = 64,
      t.aP = 32;
    let s = new Uint8Array(32);
    s[0] = 9;
    let o = n()
      , a = n([1])
      , c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]))
      , l = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , u = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
    function h(e, t) {
      for (let r = 0; r < 16; r++)
        e[r] = 0 | t[r]
    }
    function p(e) {
      let t = 1;
      for (let r = 0; r < 16; r++) {
        let i = e[r] + t + 65535;
        t = Math.floor(i / 65536),
          e[r] = i - 65536 * t
      }
      e[0] += t - 1 + 37 * (t - 1)
    }
    function f(e, t, r) {
      let i = ~(r - 1);
      for (let r = 0; r < 16; r++) {
        let n = i & (e[r] ^ t[r]);
        e[r] ^= n,
          t[r] ^= n
      }
    }
    function d(e, t) {
      let r = n()
        , i = n();
      for (let e = 0; e < 16; e++)
        i[e] = t[e];
      p(i),
        p(i),
        p(i);
      for (let e = 0; e < 2; e++) {
        r[0] = i[0] - 65517;
        for (let e = 1; e < 15; e++)
          r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1),
            r[e - 1] &= 65535;
        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
        let e = r[15] >> 16 & 1;
        r[14] &= 65535,
          f(i, r, 1 - e)
      }
      for (let t = 0; t < 16; t++)
        e[2 * t] = 255 & i[t],
          e[2 * t + 1] = i[t] >> 8
    }
    n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function g(e, t, r) {
      for (let i = 0; i < 16; i++)
        e[i] = t[i] + r[i]
    }
    function y(e, t, r) {
      for (let i = 0; i < 16; i++)
        e[i] = t[i] - r[i]
    }
    function v(e, t, r) {
      let i, n, s = 0, o = 0, a = 0, c = 0, l = 0, u = 0, h = 0, p = 0, f = 0, d = 0, g = 0, y = 0, v = 0, m = 0, _ = 0, b = 0, w = 0, E = 0, I = 0, S = 0, P = 0, O = 0, N = 0, R = 0, C = 0, A = 0, x = 0, T = 0, j = 0, D = 0, q = 0, L = r[0], U = r[1], k = r[2], $ = r[3], M = r[4], z = r[5], H = r[6], V = r[7], K = r[8], F = r[9], B = r[10], G = r[11], W = r[12], J = r[13], Q = r[14], Y = r[15];
      s += (i = t[0]) * L,
        o += i * U,
        a += i * k,
        c += i * $,
        l += i * M,
        u += i * z,
        h += i * H,
        p += i * V,
        f += i * K,
        d += i * F,
        g += i * B,
        y += i * G,
        v += i * W,
        m += i * J,
        _ += i * Q,
        b += i * Y,
        o += (i = t[1]) * L,
        a += i * U,
        c += i * k,
        l += i * $,
        u += i * M,
        h += i * z,
        p += i * H,
        f += i * V,
        d += i * K,
        g += i * F,
        y += i * B,
        v += i * G,
        m += i * W,
        _ += i * J,
        b += i * Q,
        w += i * Y,
        a += (i = t[2]) * L,
        c += i * U,
        l += i * k,
        u += i * $,
        h += i * M,
        p += i * z,
        f += i * H,
        d += i * V,
        g += i * K,
        y += i * F,
        v += i * B,
        m += i * G,
        _ += i * W,
        b += i * J,
        w += i * Q,
        E += i * Y,
        c += (i = t[3]) * L,
        l += i * U,
        u += i * k,
        h += i * $,
        p += i * M,
        f += i * z,
        d += i * H,
        g += i * V,
        y += i * K,
        v += i * F,
        m += i * B,
        _ += i * G,
        b += i * W,
        w += i * J,
        E += i * Q,
        I += i * Y,
        l += (i = t[4]) * L,
        u += i * U,
        h += i * k,
        p += i * $,
        f += i * M,
        d += i * z,
        g += i * H,
        y += i * V,
        v += i * K,
        m += i * F,
        _ += i * B,
        b += i * G,
        w += i * W,
        E += i * J,
        I += i * Q,
        S += i * Y,
        u += (i = t[5]) * L,
        h += i * U,
        p += i * k,
        f += i * $,
        d += i * M,
        g += i * z,
        y += i * H,
        v += i * V,
        m += i * K,
        _ += i * F,
        b += i * B,
        w += i * G,
        E += i * W,
        I += i * J,
        S += i * Q,
        P += i * Y,
        h += (i = t[6]) * L,
        p += i * U,
        f += i * k,
        d += i * $,
        g += i * M,
        y += i * z,
        v += i * H,
        m += i * V,
        _ += i * K,
        b += i * F,
        w += i * B,
        E += i * G,
        I += i * W,
        S += i * J,
        P += i * Q,
        O += i * Y,
        p += (i = t[7]) * L,
        f += i * U,
        d += i * k,
        g += i * $,
        y += i * M,
        v += i * z,
        m += i * H,
        _ += i * V,
        b += i * K,
        w += i * F,
        E += i * B,
        I += i * G,
        S += i * W,
        P += i * J,
        O += i * Q,
        N += i * Y,
        f += (i = t[8]) * L,
        d += i * U,
        g += i * k,
        y += i * $,
        v += i * M,
        m += i * z,
        _ += i * H,
        b += i * V,
        w += i * K,
        E += i * F,
        I += i * B,
        S += i * G,
        P += i * W,
        O += i * J,
        N += i * Q,
        R += i * Y,
        d += (i = t[9]) * L,
        g += i * U,
        y += i * k,
        v += i * $,
        m += i * M,
        _ += i * z,
        b += i * H,
        w += i * V,
        E += i * K,
        I += i * F,
        S += i * B,
        P += i * G,
        O += i * W,
        N += i * J,
        R += i * Q,
        C += i * Y,
        g += (i = t[10]) * L,
        y += i * U,
        v += i * k,
        m += i * $,
        _ += i * M,
        b += i * z,
        w += i * H,
        E += i * V,
        I += i * K,
        S += i * F,
        P += i * B,
        O += i * G,
        N += i * W,
        R += i * J,
        C += i * Q,
        A += i * Y,
        y += (i = t[11]) * L,
        v += i * U,
        m += i * k,
        _ += i * $,
        b += i * M,
        w += i * z,
        E += i * H,
        I += i * V,
        S += i * K,
        P += i * F,
        O += i * B,
        N += i * G,
        R += i * W,
        C += i * J,
        A += i * Q,
        x += i * Y,
        v += (i = t[12]) * L,
        m += i * U,
        _ += i * k,
        b += i * $,
        w += i * M,
        E += i * z,
        I += i * H,
        S += i * V,
        P += i * K,
        O += i * F,
        N += i * B,
        R += i * G,
        C += i * W,
        A += i * J,
        x += i * Q,
        T += i * Y,
        m += (i = t[13]) * L,
        _ += i * U,
        b += i * k,
        w += i * $,
        E += i * M,
        I += i * z,
        S += i * H,
        P += i * V,
        O += i * K,
        N += i * F,
        R += i * B,
        C += i * G,
        A += i * W,
        x += i * J,
        T += i * Q,
        j += i * Y,
        _ += (i = t[14]) * L,
        b += i * U,
        w += i * k,
        E += i * $,
        I += i * M,
        S += i * z,
        P += i * H,
        O += i * V,
        N += i * K,
        R += i * F,
        C += i * B,
        A += i * G,
        x += i * W,
        T += i * J,
        j += i * Q,
        D += i * Y,
        b += (i = t[15]) * L,
        w += i * U,
        E += i * k,
        I += i * $,
        S += i * M,
        P += i * z,
        O += i * H,
        N += i * V,
        R += i * K,
        C += i * F,
        A += i * B,
        x += i * G,
        T += i * W,
        j += i * J,
        D += i * Q,
        q += i * Y,
        s += 38 * w,
        o += 38 * E,
        a += 38 * I,
        c += 38 * S,
        l += 38 * P,
        u += 38 * O,
        h += 38 * N,
        p += 38 * R,
        f += 38 * C,
        d += 38 * A,
        g += 38 * x,
        y += 38 * T,
        v += 38 * j,
        m += 38 * D,
        _ += 38 * q,
        n = Math.floor((i = s + (n = 1) + 65535) / 65536),
        s = i - 65536 * n,
        n = Math.floor((i = o + n + 65535) / 65536),
        o = i - 65536 * n,
        n = Math.floor((i = a + n + 65535) / 65536),
        a = i - 65536 * n,
        n = Math.floor((i = c + n + 65535) / 65536),
        c = i - 65536 * n,
        n = Math.floor((i = l + n + 65535) / 65536),
        l = i - 65536 * n,
        n = Math.floor((i = u + n + 65535) / 65536),
        u = i - 65536 * n,
        n = Math.floor((i = h + n + 65535) / 65536),
        h = i - 65536 * n,
        n = Math.floor((i = p + n + 65535) / 65536),
        p = i - 65536 * n,
        n = Math.floor((i = f + n + 65535) / 65536),
        f = i - 65536 * n,
        n = Math.floor((i = d + n + 65535) / 65536),
        d = i - 65536 * n,
        n = Math.floor((i = g + n + 65535) / 65536),
        g = i - 65536 * n,
        n = Math.floor((i = y + n + 65535) / 65536),
        y = i - 65536 * n,
        n = Math.floor((i = v + n + 65535) / 65536),
        v = i - 65536 * n,
        n = Math.floor((i = m + n + 65535) / 65536),
        m = i - 65536 * n,
        n = Math.floor((i = _ + n + 65535) / 65536),
        _ = i - 65536 * n,
        n = Math.floor((i = b + n + 65535) / 65536),
        b = i - 65536 * n,
        s += n - 1 + 37 * (n - 1),
        n = Math.floor((i = s + (n = 1) + 65535) / 65536),
        s = i - 65536 * n,
        n = Math.floor((i = o + n + 65535) / 65536),
        o = i - 65536 * n,
        n = Math.floor((i = a + n + 65535) / 65536),
        a = i - 65536 * n,
        n = Math.floor((i = c + n + 65535) / 65536),
        c = i - 65536 * n,
        n = Math.floor((i = l + n + 65535) / 65536),
        l = i - 65536 * n,
        n = Math.floor((i = u + n + 65535) / 65536),
        u = i - 65536 * n,
        n = Math.floor((i = h + n + 65535) / 65536),
        h = i - 65536 * n,
        n = Math.floor((i = p + n + 65535) / 65536),
        p = i - 65536 * n,
        n = Math.floor((i = f + n + 65535) / 65536),
        f = i - 65536 * n,
        n = Math.floor((i = d + n + 65535) / 65536),
        d = i - 65536 * n,
        n = Math.floor((i = g + n + 65535) / 65536),
        g = i - 65536 * n,
        n = Math.floor((i = y + n + 65535) / 65536),
        y = i - 65536 * n,
        n = Math.floor((i = v + n + 65535) / 65536),
        v = i - 65536 * n,
        n = Math.floor((i = m + n + 65535) / 65536),
        m = i - 65536 * n,
        n = Math.floor((i = _ + n + 65535) / 65536),
        _ = i - 65536 * n,
        n = Math.floor((i = b + n + 65535) / 65536),
        b = i - 65536 * n,
        s += n - 1 + 37 * (n - 1),
        e[0] = s,
        e[1] = o,
        e[2] = a,
        e[3] = c,
        e[4] = l,
        e[5] = u,
        e[6] = h,
        e[7] = p,
        e[8] = f,
        e[9] = d,
        e[10] = g,
        e[11] = y,
        e[12] = v,
        e[13] = m,
        e[14] = _,
        e[15] = b
    }
    function m(e, t) {
      let r = n()
        , i = n()
        , s = n()
        , o = n()
        , a = n()
        , l = n()
        , u = n()
        , h = n()
        , p = n();
      y(r, e[1], e[0]),
        y(p, t[1], t[0]),
        v(r, r, p),
        g(i, e[0], e[1]),
        g(p, t[0], t[1]),
        v(i, i, p),
        v(s, e[3], t[3]),
        v(s, s, c),
        v(o, e[2], t[2]),
        g(o, o, o),
        y(a, i, r),
        y(l, o, s),
        g(u, o, s),
        g(h, i, r),
        v(e[0], a, l),
        v(e[1], h, u),
        v(e[2], u, l),
        v(e[3], a, h)
    }
    function _(e, t, r) {
      for (let i = 0; i < 4; i++)
        f(e[i], t[i], r)
    }
    function b(e, t) {
      let r = n()
        , i = n()
        , s = n();
      (function (e, t) {
        let r;
        let i = n();
        for (r = 0; r < 16; r++)
          i[r] = t[r];
        for (r = 253; r >= 0; r--)
          v(i, i, i),
            2 !== r && 4 !== r && v(i, i, t);
        for (r = 0; r < 16; r++)
          e[r] = i[r]
      }
      )(s, t[2]),
        v(r, t[0], s),
        v(i, t[1], s),
        d(e, i),
        e[31] ^= function (e) {
          let t = new Uint8Array(32);
          return d(t, e),
            1 & t[0]
        }(r) << 7
    }
    function w(e, t) {
      let r = [n(), n(), n(), n()];
      h(r[0], l),
        h(r[1], u),
        h(r[2], a),
        v(r[3], l, u),
        function (e, t, r) {
          h(e[0], o),
            h(e[1], a),
            h(e[2], a),
            h(e[3], o);
          for (let i = 255; i >= 0; --i) {
            let n = r[i / 8 | 0] >> (7 & i) & 1;
            _(e, t, n),
              m(t, e),
              m(e, e),
              _(e, t, n)
          }
        }(e, r, t)
    }
    t._w = function (e) {
      if (e.length !== t.aP)
        throw Error(`ed25519: seed must be ${t.aP} bytes`);
      let r = (0,
        i.hash)(e);
      r[0] &= 248,
        r[31] &= 127,
        r[31] |= 64;
      let s = new Uint8Array(32)
        , o = [n(), n(), n(), n()];
      w(o, r),
        b(s, o);
      let a = new Uint8Array(64);
      return a.set(e),
        a.set(s, 32),
      {
        publicKey: s,
        secretKey: a
      }
    }
      ;
    let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function I(e, t) {
      let r, i, n, s;
      for (i = 63; i >= 32; --i) {
        for (r = 0,
          n = i - 32,
          s = i - 12; n < s; ++n)
          t[n] += r - 16 * t[i] * E[n - (i - 32)],
            r = Math.floor((t[n] + 128) / 256),
            t[n] -= 256 * r;
        t[n] += r,
          t[i] = 0
      }
      for (n = 0,
        r = 0; n < 32; n++)
        t[n] += r - (t[31] >> 4) * E[n],
          r = t[n] >> 8,
          t[n] &= 255;
      for (n = 0; n < 32; n++)
        t[n] -= r * E[n];
      for (i = 0; i < 32; i++)
        t[i + 1] += t[i] >> 8,
          e[i] = 255 & t[i]
    }
    function S(e) {
      let t = new Float64Array(64);
      for (let r = 0; r < 64; r++)
        t[r] = e[r];
      for (let t = 0; t < 64; t++)
        e[t] = 0;
      I(e, t)
    }
    t.Xx = function (e, t) {
      let r = new Float64Array(64)
        , s = [n(), n(), n(), n()]
        , o = (0,
          i.hash)(e.subarray(0, 32));
      o[0] &= 248,
        o[31] &= 127,
        o[31] |= 64;
      let a = new Uint8Array(64);
      a.set(o.subarray(32), 32);
      let c = new i.SHA512;
      c.update(a.subarray(32)),
        c.update(t);
      let l = c.digest();
      c.clean(),
        S(l),
        w(s, l),
        b(a, s),
        c.reset(),
        c.update(a.subarray(0, 32)),
        c.update(e.subarray(32)),
        c.update(t);
      let u = c.digest();
      S(u);
      for (let e = 0; e < 32; e++)
        r[e] = l[e];
      for (let e = 0; e < 32; e++)
        for (let t = 0; t < 32; t++)
          r[e + t] += u[e] * o[t];
      return I(a.subarray(32), r),
        a
    }
  },
  93350: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(98099)
      , n = r(17309);
    t.DIGEST_LENGTH = 64,
      t.BLOCK_SIZE = 128;
    var s = function () {
      function e() {
        this.digestLength = t.DIGEST_LENGTH,
          this.blockSize = t.BLOCK_SIZE,
          this._stateHi = new Int32Array(8),
          this._stateLo = new Int32Array(8),
          this._tempHi = new Int32Array(16),
          this._tempLo = new Int32Array(16),
          this._buffer = new Uint8Array(256),
          this._bufferLength = 0,
          this._bytesHashed = 0,
          this._finished = !1,
          this.reset()
      }
      return e.prototype._initState = function () {
        this._stateHi[0] = 1779033703,
          this._stateHi[1] = 3144134277,
          this._stateHi[2] = 1013904242,
          this._stateHi[3] = 2773480762,
          this._stateHi[4] = 1359893119,
          this._stateHi[5] = 2600822924,
          this._stateHi[6] = 528734635,
          this._stateHi[7] = 1541459225,
          this._stateLo[0] = 4089235720,
          this._stateLo[1] = 2227873595,
          this._stateLo[2] = 4271175723,
          this._stateLo[3] = 1595750129,
          this._stateLo[4] = 2917565137,
          this._stateLo[5] = 725511199,
          this._stateLo[6] = 4215389547,
          this._stateLo[7] = 327033209
      }
        ,
        e.prototype.reset = function () {
          return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        e.prototype.clean = function () {
          n.wipe(this._buffer),
            n.wipe(this._tempHi),
            n.wipe(this._tempLo),
            this.reset()
        }
        ,
        e.prototype.update = function (e, r) {
          if (void 0 === r && (r = e.length),
            this._finished)
            throw Error("SHA512: can't update because hash was finished.");
          var i = 0;
          if (this._bytesHashed += r,
            this._bufferLength > 0) {
            for (; this._bufferLength < t.BLOCK_SIZE && r > 0;)
              this._buffer[this._bufferLength++] = e[i++],
                r--;
            this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
              this._bufferLength = 0)
          }
          for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r),
            r %= this.blockSize); r > 0;)
            this._buffer[this._bufferLength++] = e[i++],
              r--;
          return this
        }
        ,
        e.prototype.finish = function (e) {
          if (!this._finished) {
            var t = this._bytesHashed
              , r = this._bufferLength
              , n = t % 128 < 112 ? 128 : 256;
            this._buffer[r] = 128;
            for (var s = r + 1; s < n - 8; s++)
              this._buffer[s] = 0;
            i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8),
              i.writeUint32BE(t << 3, this._buffer, n - 4),
              a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n),
              this._finished = !0
          }
          for (var s = 0; s < this.digestLength / 8; s++)
            i.writeUint32BE(this._stateHi[s], e, 8 * s),
              i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
          return this
        }
        ,
        e.prototype.digest = function () {
          var e = new Uint8Array(this.digestLength);
          return this.finish(e),
            e
        }
        ,
        e.prototype.saveState = function () {
          if (this._finished)
            throw Error("SHA256: cannot save finished state");
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          }
        }
        ,
        e.prototype.restoreState = function (e) {
          return this._stateHi.set(e.stateHi),
            this._stateLo.set(e.stateLo),
            this._bufferLength = e.bufferLength,
            e.buffer && this._buffer.set(e.buffer),
            this._bytesHashed = e.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        e.prototype.cleanSavedState = function (e) {
          n.wipe(e.stateHi),
            n.wipe(e.stateLo),
            e.buffer && n.wipe(e.buffer),
            e.bufferLength = 0,
            e.bytesHashed = 0
        }
        ,
        e
    }();
    t.SHA512 = s;
    var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
    function a(e, t, r, n, s, a, c) {
      for (var l, u, h, p, f, d, g, y, v = r[0], m = r[1], _ = r[2], b = r[3], w = r[4], E = r[5], I = r[6], S = r[7], P = n[0], O = n[1], N = n[2], R = n[3], C = n[4], A = n[5], x = n[6], T = n[7]; c >= 128;) {
        for (var j = 0; j < 16; j++) {
          var D = 8 * j + a;
          e[j] = i.readUint32BE(s, D),
            t[j] = i.readUint32BE(s, D + 4)
        }
        for (var j = 0; j < 80; j++) {
          var q = v
            , L = m
            , U = _
            , k = b
            , $ = w
            , M = E
            , z = I
            , H = S
            , V = P
            , K = O
            , F = N
            , B = R
            , G = C
            , W = A
            , J = x
            , Q = T;
          if (l = S,
            f = 65535 & (u = T),
            d = u >>> 16,
            g = 65535 & l,
            y = l >>> 16,
            l = (w >>> 14 | C << 18) ^ (w >>> 18 | C << 14) ^ (C >>> 9 | w << 23),
            f += 65535 & (u = (C >>> 14 | w << 18) ^ (C >>> 18 | w << 14) ^ (w >>> 9 | C << 23)),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            l = w & E ^ ~w & I,
            f += 65535 & (u = C & A ^ ~C & x),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            l = o[2 * j],
            f += 65535 & (u = o[2 * j + 1]),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            l = e[j % 16],
            f += 65535 & (u = t[j % 16]),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            d += f >>> 16,
            g += d >>> 16,
            y += g >>> 16,
            h = 65535 & g | y << 16,
            p = 65535 & f | d << 16,
            l = h,
            f = 65535 & (u = p),
            d = u >>> 16,
            g = 65535 & l,
            y = l >>> 16,
            l = (v >>> 28 | P << 4) ^ (P >>> 2 | v << 30) ^ (P >>> 7 | v << 25),
            f += 65535 & (u = (P >>> 28 | v << 4) ^ (v >>> 2 | P << 30) ^ (v >>> 7 | P << 25)),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            l = v & m ^ v & _ ^ m & _,
            f += 65535 & (u = P & O ^ P & N ^ O & N),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            d += f >>> 16,
            g += d >>> 16,
            y += g >>> 16,
            H = 65535 & g | y << 16,
            Q = 65535 & f | d << 16,
            l = k,
            f = 65535 & (u = B),
            d = u >>> 16,
            g = 65535 & l,
            y = l >>> 16,
            l = h,
            f += 65535 & (u = p),
            d += u >>> 16,
            g += 65535 & l,
            y += l >>> 16,
            d += f >>> 16,
            g += d >>> 16,
            y += g >>> 16,
            k = 65535 & g | y << 16,
            B = 65535 & f | d << 16,
            m = q,
            _ = L,
            b = U,
            w = k,
            E = $,
            I = M,
            S = z,
            v = H,
            O = V,
            N = K,
            R = F,
            C = B,
            A = G,
            x = W,
            T = J,
            P = Q,
            j % 16 == 15)
            for (var D = 0; D < 16; D++)
              l = e[D],
                f = 65535 & (u = t[D]),
                d = u >>> 16,
                g = 65535 & l,
                y = l >>> 16,
                l = e[(D + 9) % 16],
                f += 65535 & (u = t[(D + 9) % 16]),
                d += u >>> 16,
                g += 65535 & l,
                y += l >>> 16,
                l = ((h = e[(D + 1) % 16]) >>> 1 | (p = t[(D + 1) % 16]) << 31) ^ (h >>> 8 | p << 24) ^ h >>> 7,
                f += 65535 & (u = (p >>> 1 | h << 31) ^ (p >>> 8 | h << 24) ^ (p >>> 7 | h << 25)),
                d += u >>> 16,
                g += 65535 & l,
                y += l >>> 16,
                l = ((h = e[(D + 14) % 16]) >>> 19 | (p = t[(D + 14) % 16]) << 13) ^ (p >>> 29 | h << 3) ^ h >>> 6,
                f += 65535 & (u = (p >>> 19 | h << 13) ^ (h >>> 29 | p << 3) ^ (p >>> 6 | h << 26)),
                d += u >>> 16,
                g += 65535 & l,
                y += l >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                y += g >>> 16,
                e[D] = 65535 & g | y << 16,
                t[D] = 65535 & f | d << 16
        }
        l = v,
          f = 65535 & (u = P),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[0],
          f += 65535 & (u = n[0]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[0] = v = 65535 & g | y << 16,
          n[0] = P = 65535 & f | d << 16,
          l = m,
          f = 65535 & (u = O),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[1],
          f += 65535 & (u = n[1]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[1] = m = 65535 & g | y << 16,
          n[1] = O = 65535 & f | d << 16,
          l = _,
          f = 65535 & (u = N),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[2],
          f += 65535 & (u = n[2]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[2] = _ = 65535 & g | y << 16,
          n[2] = N = 65535 & f | d << 16,
          l = b,
          f = 65535 & (u = R),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[3],
          f += 65535 & (u = n[3]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[3] = b = 65535 & g | y << 16,
          n[3] = R = 65535 & f | d << 16,
          l = w,
          f = 65535 & (u = C),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[4],
          f += 65535 & (u = n[4]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[4] = w = 65535 & g | y << 16,
          n[4] = C = 65535 & f | d << 16,
          l = E,
          f = 65535 & (u = A),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[5],
          f += 65535 & (u = n[5]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[5] = E = 65535 & g | y << 16,
          n[5] = A = 65535 & f | d << 16,
          l = I,
          f = 65535 & (u = x),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[6],
          f += 65535 & (u = n[6]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[6] = I = 65535 & g | y << 16,
          n[6] = x = 65535 & f | d << 16,
          l = S,
          f = 65535 & (u = T),
          d = u >>> 16,
          g = 65535 & l,
          y = l >>> 16,
          l = r[7],
          f += 65535 & (u = n[7]),
          d += u >>> 16,
          g += 65535 & l,
          y += l >>> 16,
          d += f >>> 16,
          g += d >>> 16,
          y += g >>> 16,
          r[7] = S = 65535 & g | y << 16,
          n[7] = T = 65535 & f | d << 16,
          a += 128,
          c -= 128
      }
      return a
    }
    t.hash = function (e) {
      var t = new s;
      t.update(e);
      var r = t.digest();
      return t.clean(),
        r
    }
  },
  20935: function (e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, {
        EthereumProvider: function () {
          return n$
        },
        OPTIONAL_EVENTS: function () {
          return nO
        },
        OPTIONAL_METHODS: function () {
          return nS
        },
        REQUIRED_EVENTS: function () {
          return nP
        },
        REQUIRED_METHODS: function () {
          return nI
        },
        default: function () {
          return nk
        }
      });
    var i = r(17187)
      , n = r.n(i)
      , s = r(41932)
      , o = r(85150)
      , a = r(90772)
      , c = r(9107)
      , l = r(38200);
    class u extends l.q {
      constructor(e) {
        super(),
          this.opts = e,
          this.protocol = "wc",
          this.version = 2
      }
    }
    class h extends l.q {
      constructor(e, t) {
        super(),
          this.core = e,
          this.logger = t,
          this.records = new Map
      }
    }
    class p {
      constructor(e, t) {
        this.logger = e,
          this.core = t
      }
    }
    class f extends l.q {
      constructor(e, t) {
        super(),
          this.relayer = e,
          this.logger = t
      }
    }
    class d extends l.q {
      constructor(e) {
        super()
      }
    }
    class g {
      constructor(e, t, r, i) {
        this.core = e,
          this.logger = t,
          this.name = r
      }
    }
    class y extends l.q {
      constructor(e, t) {
        super(),
          this.relayer = e,
          this.logger = t
      }
    }
    class v extends l.q {
      constructor(e, t) {
        super(),
          this.core = e,
          this.logger = t
      }
    }
    class m {
      constructor(e, t) {
        this.projectId = e,
          this.logger = t
      }
    }
    var _ = r(85094)
      , b = r(31050)
      , w = r(31416)
      , E = r(66736);
    let I = "base64url"
      , S = "base58btc";
    var P = r(20605)
      , O = r(92263)
      , N = r(52217);
    function R(e) {
      return (0,
        O.B)((0,
          N.m)((0,
            _.u)(e), "utf8"), I)
    }
    function C(e) {
      let t = (0,
        N.m)("K36", S)
        , r = "z" + (0,
          O.B)((0,
            P.z)([t, e]), S);
      return ["did", "key", r].join(":")
    }
    function A(e = (0,
      w.randomBytes)(32)) {
      return b._w(e)
    }
    async function x(e, t, r, i, n = (0,
      E.fromMiliseconds)(Date.now())) {
      var s, o, a;
      let c = {
        alg: "EdDSA",
        typ: "JWT"
      }
        , l = C(i.publicKey)
        , u = {
          iss: l,
          sub: e,
          aud: t,
          iat: n,
          exp: n + r
        }
        , h = (s = {
          header: c,
          payload: u
        },
          (0,
            N.m)([R(s.header), R(s.payload)].join("."), "utf8"))
        , p = b.Xx(i.secretKey, h);
      return [R((o = {
        header: c,
        payload: u,
        signature: p
      }).header), R(o.payload), (a = o.signature,
        (0,
          O.B)(a, I))].join(".")
    }
    r(43014);
    var T = r(15501)
      , j = r(512)
      , D = r(73294)
      , q = r(57664)
      , L = r(37466)
      , U = r(43631)
      , k = r(62873)
      , $ = r(65755)
      , M = r(33684)
      , z = r(60075)
      , H = r(34155);
    let V = "base10"
      , K = "base16"
      , F = "base64pad"
      , B = "utf8";
    function G() {
      let e = (0,
        w.randomBytes)(32);
      return (0,
        L.BB)(e, K)
    }
    function W(e) {
      let t = (0,
        D.vp)((0,
          L.mL)(e, B));
      return (0,
        L.BB)(t, K)
    }
    function J(e) {
      return Number((0,
        L.BB)(e, V))
    }
    function Q(e) {
      let t = (0,
        L.mL)(e, F)
        , r = t.slice(0, 1);
      if (1 === J(r)) {
        let e = t.slice(1, 33)
          , i = t.slice(33, 45)
          , n = t.slice(45);
        return {
          type: r,
          sealed: n,
          iv: i,
          senderPublicKey: e
        }
      }
      let i = t.slice(1, 13)
        , n = t.slice(13);
      return {
        type: r,
        sealed: n,
        iv: i
      }
    }
    function Y(e) {
      let t = e?.type || 0;
      if (1 === t) {
        if (typeof e?.senderPublicKey > "u")
          throw Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u")
          throw Error("missing receiver public key")
      }
      return {
        type: t,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
      }
    }
    function Z(e) {
      return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
    }
    var X = Object.defineProperty
      , ee = Object.getOwnPropertySymbols
      , et = Object.prototype.hasOwnProperty
      , er = Object.prototype.propertyIsEnumerable
      , ei = (e, t, r) => t in e ? X(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , en = (e, t) => {
        for (var r in t || (t = {}))
          et.call(t, r) && ei(e, r, t[r]);
        if (ee)
          for (var r of ee(t))
            er.call(t, r) && ei(e, r, t[r]);
        return e
      }
      ;
    let es = {
      reactNative: "react-native",
      node: "node",
      browser: "browser",
      unknown: "unknown"
    };
    function eo() {
      return "u" > typeof H && "u" > typeof H.versions && "u" > typeof H.versions.node
    }
    function ea() {
      return !(0,
        k.getDocument)() && !!(0,
          k.getNavigator)() && "ReactNative" === navigator.product
    }
    function ec() {
      return !eo() && !!(0,
        k.getNavigator)()
    }
    function el() {
      return ea() ? es.reactNative : eo() ? es.node : ec() ? es.browser : es.unknown
    }
    function eu(e) {
      return Object.fromEntries(e.entries())
    }
    function eh(e) {
      return new Map(Object.entries(e))
    }
    function ep(e, t, r) {
      return new Promise(async (i, n) => {
        let s = setTimeout(() => n(Error(r)), t);
        try {
          let t = await e;
          i(t)
        } catch (e) {
          n(e)
        }
        clearTimeout(s)
      }
      )
    }
    function ef(e, t) {
      if ("string" == typeof t && t.startsWith(`${e}:`))
        return t;
      if ("topic" === e.toLowerCase()) {
        if ("string" != typeof t)
          throw Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`
      }
      if ("id" === e.toLowerCase()) {
        if ("number" != typeof t)
          throw Error('Value must be "number" for expirer target type: id');
        return `id:${t}`
      }
      throw Error(`Unknown expirer target type: ${e}`)
    }
    function ed(e, t) {
      return (0,
        E.fromMiliseconds)((t || Date.now()) + (0,
          E.toMiliseconds)(e))
    }
    function eg(e) {
      return Date.now() >= (0,
        E.toMiliseconds)(e)
    }
    function ey(e, t) {
      return `${e}${t ? `:${t}` : ""}`
    }
    function ev(e) {
      return e?.relay || {
        protocol: "irn"
      }
    }
    function em(e) {
      let t = z.RELAY_JSONRPC[e];
      if (typeof t > "u")
        throw Error(`Relay Protocol not supported: ${e}`);
      return t
    }
    var e_ = Object.defineProperty
      , eb = Object.getOwnPropertySymbols
      , ew = Object.prototype.hasOwnProperty
      , eE = Object.prototype.propertyIsEnumerable
      , eI = (e, t, r) => t in e ? e_(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , eS = (e, t) => {
        for (var r in t || (t = {}))
          ew.call(t, r) && eI(e, r, t[r]);
        if (eb)
          for (var r of eb(t))
            eE.call(t, r) && eI(e, r, t[r]);
        return e
      }
      ;
    Object.prototype.hasOwnProperty,
      Object.prototype.propertyIsEnumerable;
    let eP = {
      INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
      },
      INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
      },
      INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
      },
      INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
      },
      INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
      },
      UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
      },
      UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
      },
      UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
      },
      UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
      },
      USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
      },
      USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
      },
      USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
      },
      USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
      },
      UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
      },
      UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
      },
      UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
      },
      UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
      },
      UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
      },
      USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
      },
      SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
      },
      WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
      }
    }
      , eO = {
        NOT_INITIALIZED: {
          message: "Not initialized.",
          code: 1
        },
        NO_MATCHING_KEY: {
          message: "No matching key.",
          code: 2
        },
        RESTORE_WILL_OVERRIDE: {
          message: "Restore will override.",
          code: 3
        },
        RESUBSCRIBED: {
          message: "Resubscribed.",
          code: 4
        },
        MISSING_OR_INVALID: {
          message: "Missing or invalid.",
          code: 5
        },
        EXPIRED: {
          message: "Expired.",
          code: 6
        },
        UNKNOWN_TYPE: {
          message: "Unknown type.",
          code: 7
        },
        MISMATCHED_TOPIC: {
          message: "Mismatched topic.",
          code: 8
        },
        NON_CONFORMING_NAMESPACES: {
          message: "Non conforming namespaces.",
          code: 9
        }
      };
    function eN(e, t) {
      let { message: r, code: i } = eO[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      }
    }
    function eR(e, t) {
      let { message: r, code: i } = eP[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      }
    }
    function eC(e) {
      return typeof e > "u"
    }
    function eA(e, t) {
      return !!(t && eC(e)) || "string" == typeof e && !!e.trim().length
    }
    function ex(e) {
      return "u" > typeof e
    }
    function eT() {
      let e = el();
      return new Promise(t => {
        switch (e) {
          case es.browser:
            t(ec() && navigator?.onLine);
            break;
          case es.reactNative:
            t(ej());
            break;
          case es.node:
          default:
            t(!0)
        }
      }
      )
    }
    async function ej() {
      if (ea() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
        let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
        return e?.isConnected
      }
      return !0
    }
    var eD = r(46160)
      , eq = r(56186);
    let eL = () => "undefined" != typeof WebSocket || void 0 !== r.g && void 0 !== r.g.WebSocket || "undefined" != typeof window && void 0 !== window.WebSocket || "undefined" != typeof self && void 0 !== self.WebSocket
      , eU = e => e.split("?")[0]
      , ek = "undefined" != typeof WebSocket ? WebSocket : void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : "undefined" != typeof self && void 0 !== self.WebSocket ? self.WebSocket : r(57026);
    var e$ = class {
      constructor(e) {
        if (this.url = e,
          this.events = new i.EventEmitter,
          this.registering = !1,
          !(0,
            eq.isWsUrl)(e))
          throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e
      }
      get connected() {
        return void 0 !== this.socket
      }
      get connecting() {
        return this.registering
      }
      on(e, t) {
        this.events.on(e, t)
      }
      once(e, t) {
        this.events.once(e, t)
      }
      off(e, t) {
        this.events.off(e, t)
      }
      removeListener(e, t) {
        this.events.removeListener(e, t)
      }
      async open(e = this.url) {
        await this.register(e)
      }
      async close() {
        return new Promise((e, t) => {
          if (void 0 === this.socket) {
            t(Error("Connection already closed"));
            return
          }
          this.socket.onclose = t => {
            this.onClose(t),
              e()
          }
            ,
            this.socket.close()
        }
        )
      }
      async send(e, t) {
        void 0 === this.socket && (this.socket = await this.register());
        try {
          this.socket.send((0,
            _.u)(e))
        } catch (t) {
          this.onError(e.id, t)
        }
      }
      register(e = this.url) {
        if (!(0,
          eq.isWsUrl)(e))
          throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
          let e = this.events.getMaxListeners();
          return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1),
            new Promise((e, t) => {
              this.events.once("register_error", e => {
                this.resetMaxListeners(),
                  t(e)
              }
              ),
                this.events.once("open", () => {
                  if (this.resetMaxListeners(),
                    void 0 === this.socket)
                    return t(Error("WebSocket connection is missing or invalid"));
                  e(this.socket)
                }
                )
            }
            )
        }
        return this.url = e,
          this.registering = !0,
          new Promise((t, r) => {
            let i = (0,
              eq.isReactNative)() ? void 0 : {
              rejectUnauthorized: !(0,
                eq.isLocalhostUrl)(e)
            }
              , n = new ek(e, [], i);
            eL() ? n.onerror = e => {
              r(this.emitError(e.error))
            }
              : n.on("error", e => {
                r(this.emitError(e))
              }
              ),
              n.onopen = () => {
                this.onOpen(n),
                  t(n)
              }
          }
          )
      }
      onOpen(e) {
        e.onmessage = e => this.onPayload(e),
          e.onclose = e => this.onClose(e),
          this.socket = e,
          this.registering = !1,
          this.events.emit("open")
      }
      onClose(e) {
        this.socket = void 0,
          this.registering = !1,
          this.events.emit("close", e)
      }
      onPayload(e) {
        if (void 0 === e.data)
          return;
        let t = "string" == typeof e.data ? (0,
          _.D)(e.data) : e.data;
        this.events.emit("payload", t)
      }
      onError(e, t) {
        let r = this.parseError(t)
          , i = r.message || r.toString()
          , n = (0,
            eq.formatJsonRpcError)(e, i);
        this.events.emit("payload", n)
      }
      parseError(e, t = this.url) {
        return (0,
          eq.parseConnectionError)(e, eU(t), "WS")
      }
      resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
      }
      emitError(e) {
        let t = this.parseError(Error((null == e ? void 0 : e.message) || `WebSocket connection failed for host: ${eU(this.url)}`));
        return this.events.emit("register_error", t),
          t
      }
    }
      , eM = r(72307)
      , ez = r.n(eM)
      , eH = r(34155)
      , eV = function (e, t) {
        if (e.length >= 255)
          throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
          r[i] = 255;
        for (var n = 0; n < e.length; n++) {
          var s = e.charAt(n)
            , o = s.charCodeAt(0);
          if (255 !== r[o])
            throw TypeError(s + " is ambiguous");
          r[o] = n
        }
        var a = e.length
          , c = e.charAt(0)
          , l = Math.log(a) / Math.log(256)
          , u = Math.log(256) / Math.log(a);
        function h(e) {
          if ("string" != typeof e)
            throw TypeError("Expected String");
          if (0 === e.length)
            return new Uint8Array;
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, n = 0; e[t] === c;)
              i++,
                t++;
            for (var s = (e.length - t) * l + 1 >>> 0, o = new Uint8Array(s); e[t];) {
              var u = r[e.charCodeAt(t)];
              if (255 === u)
                return;
              for (var h = 0, p = s - 1; (0 !== u || h < n) && -1 !== p; p--,
                h++)
                u += a * o[p] >>> 0,
                  o[p] = u % 256 >>> 0,
                  u = u / 256 >>> 0;
              if (0 !== u)
                throw Error("Non-zero carry");
              n = h,
                t++
            }
            if (" " !== e[t]) {
              for (var f = s - n; f !== s && 0 === o[f];)
                f++;
              for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;)
                d[g++] = o[f++];
              return d
            }
          }
        }
        return {
          encode: function (t) {
            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
              throw TypeError("Expected Uint8Array");
            if (0 === t.length)
              return "";
            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];)
              n++,
                r++;
            for (var o = (s - n) * u + 1 >>> 0, l = new Uint8Array(o); n !== s;) {
              for (var h = t[n], p = 0, f = o - 1; (0 !== h || p < i) && -1 !== f; f--,
                p++)
                h += 256 * l[f] >>> 0,
                  l[f] = h % a >>> 0,
                  h = h / a >>> 0;
              if (0 !== h)
                throw Error("Non-zero carry");
              i = p,
                n++
            }
            for (var d = o - i; d !== o && 0 === l[d];)
              d++;
            for (var g = c.repeat(r); d < o; ++d)
              g += e.charAt(l[d]);
            return g
          },
          decodeUnsafe: h,
          decode: function (e) {
            var r = h(e);
            if (r)
              return r;
            throw Error(`Non-${t} character`)
          }
        }
      };
    let eK = e => {
      if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
        return e;
      if (e instanceof ArrayBuffer)
        return new Uint8Array(e);
      if (ArrayBuffer.isView(e))
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      throw Error("Unknown type, must be binary type")
    }
      , eF = e => new TextEncoder().encode(e)
      , eB = e => new TextDecoder().decode(e);
    class eG {
      constructor(e, t, r) {
        this.name = e,
          this.prefix = t,
          this.baseEncode = r
      }
      encode(e) {
        if (e instanceof Uint8Array)
          return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
      }
    }
    class eW {
      constructor(e, t, r) {
        if (this.name = e,
          this.prefix = t,
          void 0 === t.codePointAt(0))
          throw Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
          this.baseDecode = r
      }
      decode(e) {
        if ("string" == typeof e) {
          if (e.codePointAt(0) !== this.prefixCodePoint)
            throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
          return this.baseDecode(e.slice(this.prefix.length))
        }
        throw Error("Can only multibase decode strings")
      }
      or(e) {
        return eQ(this, e)
      }
    }
    class eJ {
      constructor(e) {
        this.decoders = e
      }
      or(e) {
        return eQ(this, e)
      }
      decode(e) {
        let t = e[0]
          , r = this.decoders[t];
        if (r)
          return r.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
      }
    }
    let eQ = (e, t) => new eJ({
      ...e.decoders || {
        [e.prefix]: e
      },
      ...t.decoders || {
        [t.prefix]: t
      }
    });
    class eY {
      constructor(e, t, r, i) {
        this.name = e,
          this.prefix = t,
          this.baseEncode = r,
          this.baseDecode = i,
          this.encoder = new eG(e, t, r),
          this.decoder = new eW(e, t, i)
      }
      encode(e) {
        return this.encoder.encode(e)
      }
      decode(e) {
        return this.decoder.decode(e)
      }
    }
    let eZ = ({ name: e, prefix: t, encode: r, decode: i }) => new eY(e, t, r, i)
      , eX = ({ prefix: e, name: t, alphabet: r }) => {
        let { encode: i, decode: n } = eV(r, t);
        return eZ({
          prefix: e,
          name: t,
          encode: i,
          decode: e => eK(n(e))
        })
      }
      , e0 = (e, t, r, i) => {
        let n = {};
        for (let e = 0; e < t.length; ++e)
          n[t[e]] = e;
        let s = e.length;
        for (; "=" === e[s - 1];)
          --s;
        let o = new Uint8Array(s * r / 8 | 0)
          , a = 0
          , c = 0
          , l = 0;
        for (let t = 0; t < s; ++t) {
          let s = n[e[t]];
          if (void 0 === s)
            throw SyntaxError(`Non-${i} character`);
          c = c << r | s,
            (a += r) >= 8 && (a -= 8,
              o[l++] = 255 & c >> a)
        }
        if (a >= r || 255 & c << 8 - a)
          throw SyntaxError("Unexpected end of data");
        return o
      }
      , e1 = (e, t, r) => {
        let i = "=" === t[t.length - 1]
          , n = (1 << r) - 1
          , s = ""
          , o = 0
          , a = 0;
        for (let i = 0; i < e.length; ++i)
          for (a = a << 8 | e[i],
            o += 8; o > r;)
            o -= r,
              s += t[n & a >> o];
        if (o && (s += t[n & a << r - o]),
          i)
          for (; s.length * r & 7;)
            s += "=";
        return s
      }
      , e5 = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => eZ({
        prefix: t,
        name: e,
        encode: e => e1(e, i, r),
        decode: t => e0(t, i, r, e)
      })
      , e6 = eZ({
        prefix: "\x00",
        name: "identity",
        encode: e => eB(e),
        decode: e => eF(e)
      });
    var e3 = Object.freeze({
      __proto__: null,
      identity: e6
    });
    let e2 = e5({
      prefix: "0",
      name: "base2",
      alphabet: "01",
      bitsPerChar: 1
    });
    var e4 = Object.freeze({
      __proto__: null,
      base2: e2
    });
    let e8 = e5({
      prefix: "7",
      name: "base8",
      alphabet: "01234567",
      bitsPerChar: 3
    });
    var e9 = Object.freeze({
      __proto__: null,
      base8: e8
    });
    let e7 = eX({
      prefix: "9",
      name: "base10",
      alphabet: "0123456789"
    });
    var te = Object.freeze({
      __proto__: null,
      base10: e7
    });
    let tt = e5({
      prefix: "f",
      name: "base16",
      alphabet: "0123456789abcdef",
      bitsPerChar: 4
    })
      , tr = e5({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
      });
    var ti = Object.freeze({
      __proto__: null,
      base16: tt,
      base16upper: tr
    });
    let tn = e5({
      prefix: "b",
      name: "base32",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567",
      bitsPerChar: 5
    })
      , ts = e5({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
      })
      , to = e5({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
      })
      , ta = e5({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
      })
      , tc = e5({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
      })
      , tl = e5({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
      })
      , tu = e5({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
      })
      , th = e5({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
      })
      , tp = e5({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
      });
    var tf = Object.freeze({
      __proto__: null,
      base32: tn,
      base32upper: ts,
      base32pad: to,
      base32padupper: ta,
      base32hex: tc,
      base32hexupper: tl,
      base32hexpad: tu,
      base32hexpadupper: th,
      base32z: tp
    });
    let td = eX({
      prefix: "k",
      name: "base36",
      alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    })
      , tg = eX({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      });
    var ty = Object.freeze({
      __proto__: null,
      base36: td,
      base36upper: tg
    });
    let tv = eX({
      name: "base58btc",
      prefix: "z",
      alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    })
      , tm = eX({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
      });
    var t_ = Object.freeze({
      __proto__: null,
      base58btc: tv,
      base58flickr: tm
    });
    let tb = e5({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    })
      , tw = e5({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
      })
      , tE = e5({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
      })
      , tI = e5({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
      });
    var tS = Object.freeze({
      __proto__: null,
      base64: tb,
      base64pad: tw,
      base64url: tE,
      base64urlpad: tI
    });
    let tP = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42")
      , tO = tP.reduce((e, t, r) => (e[r] = t,
        e), [])
      , tN = tP.reduce((e, t, r) => (e[t.codePointAt(0)] = r,
        e), [])
      , tR = eZ({
        prefix: "\uD83D\uDE80",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => e += tO[t], "")
        },
        decode: function (e) {
          let t = [];
          for (let r of e) {
            let e = tN[r.codePointAt(0)];
            if (void 0 === e)
              throw Error(`Non-base256emoji character: ${r}`);
            t.push(e)
          }
          return new Uint8Array(t)
        }
      });
    var tC = Object.freeze({
      __proto__: null,
      base256emoji: tR
    });
    function tA(e, t, r) {
      t = t || [],
        r = r || 0;
      for (var i = r; e >= 2147483648;)
        t[r++] = 255 & e | 128,
          e /= 128;
      for (; -128 & e;)
        t[r++] = 255 & e | 128,
          e >>>= 7;
      return t[r] = 0 | e,
        tA.bytes = r - i + 1,
        t
    }
    function tx(e, t) {
      var r, i = 0, t = t || 0, n = 0, s = t, o = e.length;
      do {
        if (s >= o)
          throw tx.bytes = 0,
          RangeError("Could not decode varint");
        r = e[s++],
          i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n),
          n += 7
      } while (r >= 128);
      return tx.bytes = s - t,
        i
    }
    var tT = {
      encode: tA,
      decode: tx,
      encodingLength: function (e) {
        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
      }
    };
    let tj = (e, t, r = 0) => (tT.encode(e, t, r),
      t)
      , tD = e => tT.encodingLength(e)
      , tq = (e, t) => {
        let r = t.byteLength
          , i = tD(e)
          , n = i + tD(r)
          , s = new Uint8Array(n + r);
        return tj(e, s, 0),
          tj(r, s, i),
          s.set(t, n),
          new tL(e, r, t, s)
      }
      ;
    class tL {
      constructor(e, t, r, i) {
        this.code = e,
          this.size = t,
          this.digest = r,
          this.bytes = i
      }
    }
    let tU = ({ name: e, code: t, encode: r }) => new tk(e, t, r);
    class tk {
      constructor(e, t, r) {
        this.name = e,
          this.code = t,
          this.encode = r
      }
      digest(e) {
        if (e instanceof Uint8Array) {
          let t = this.encode(e);
          return t instanceof Uint8Array ? tq(this.code, t) : t.then(e => tq(this.code, e))
        }
        throw Error("Unknown type, must be binary type")
      }
    }
    let t$ = e => async t => new Uint8Array(await crypto.subtle.digest(e, t))
      , tM = tU({
        name: "sha2-256",
        code: 18,
        encode: t$("SHA-256")
      })
      , tz = tU({
        name: "sha2-512",
        code: 19,
        encode: t$("SHA-512")
      });
    var tH = Object.freeze({
      __proto__: null,
      sha256: tM,
      sha512: tz
    });
    let tV = e => tq(0, eK(e));
    var tK = Object.freeze({
      __proto__: null,
      identity: {
        code: 0,
        name: "identity",
        encode: eK,
        digest: tV
      }
    });
    new TextEncoder,
      new TextDecoder;
    let tF = {
      ...e3,
      ...e4,
      ...e9,
      ...te,
      ...ti,
      ...tf,
      ...ty,
      ...t_,
      ...tS,
      ...tC
    };
    function tB(e) {
      return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
    }
    function tG(e, t, r, i) {
      return {
        name: e,
        prefix: t,
        encoder: {
          name: e,
          prefix: t,
          encode: r
        },
        decoder: {
          decode: i
        }
      }
    }
    ({
      ...tH,
      ...tK
    });
    let tW = tG("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1)))
      , tJ = tG("ascii", "a", e => {
        let t = "a";
        for (let r = 0; r < e.length; r++)
          t += String.fromCharCode(e[r]);
        return t
      }
        , e => {
          e = e.substring(1);
          let t = function (e = 0) {
            return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? tB(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
          }(e.length);
          for (let r = 0; r < e.length; r++)
            t[r] = e.charCodeAt(r);
          return t
        }
      )
      , tQ = {
        utf8: tW,
        "utf-8": tW,
        hex: tF.base16,
        latin1: tJ,
        ascii: tJ,
        binary: tJ,
        ...tF
      }
      , tY = "core"
      , tZ = `wc@2:${tY}:`
      , tX = {
        name: tY,
        logger: "error"
      }
      , t0 = {
        database: ":memory:"
      }
      , t1 = "client_ed25519_seed"
      , t5 = E.ONE_DAY
      , t6 = E.SIX_HOURS
      , t3 = "wss://relay.walletconnect.com"
      , t2 = "wss://relay.walletconnect.org"
      , t4 = {
        message: "relayer_message",
        message_ack: "relayer_message_ack",
        connect: "relayer_connect",
        disconnect: "relayer_disconnect",
        error: "relayer_error",
        connection_stalled: "relayer_connection_stalled",
        transport_closed: "relayer_transport_closed",
        publish: "relayer_publish"
      }
      , t8 = {
        payload: "payload",
        connect: "connect",
        disconnect: "disconnect",
        error: "error"
      }
      , t9 = E.ONE_SECOND
      , t7 = {
        created: "subscription_created",
        deleted: "subscription_deleted",
        expired: "subscription_expired",
        disabled: "subscription_disabled",
        sync: "subscription_sync",
        resubscribed: "subscription_resubscribed"
      }
      , re = 1e3 * E.FIVE_SECONDS
      , rt = {
        wc_pairingDelete: {
          req: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1e3
          },
          res: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1001
          }
        },
        wc_pairingPing: {
          req: {
            ttl: E.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
          },
          res: {
            ttl: E.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
          }
        },
        unregistered_method: {
          req: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 0
          },
          res: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 0
          }
        }
      }
      , rr = {
        create: "pairing_create",
        expire: "pairing_expire",
        delete: "pairing_delete",
        ping: "pairing_ping"
      }
      , ri = {
        created: "history_created",
        updated: "history_updated",
        deleted: "history_deleted",
        sync: "history_sync"
      }
      , rn = {
        created: "expirer_created",
        deleted: "expirer_deleted",
        expired: "expirer_expired",
        sync: "expirer_sync"
      }
      , rs = "verify-api"
      , ro = "https://verify.walletconnect.com"
      , ra = "https://verify.walletconnect.org";
    class rc {
      constructor(e, t) {
        this.core = e,
          this.logger = t,
          this.keychain = new Map,
          this.name = "keychain",
          this.version = "0.3",
          this.initialized = !1,
          this.storagePrefix = tZ,
          this.init = async () => {
            if (!this.initialized) {
              let e = await this.getKeyChain();
              "u" > typeof e && (this.keychain = e),
                this.initialized = !0
            }
          }
          ,
          this.has = e => (this.isInitialized(),
            this.keychain.has(e)),
          this.set = async (e, t) => {
            this.isInitialized(),
              this.keychain.set(e, t),
              await this.persist()
          }
          ,
          this.get = e => {
            this.isInitialized();
            let t = this.keychain.get(e);
            if (typeof t > "u") {
              let { message: t } = eN("NO_MATCHING_KEY", `${this.name}: ${e}`);
              throw Error(t)
            }
            return t
          }
          ,
          this.del = async e => {
            this.isInitialized(),
              this.keychain.delete(e),
              await this.persist()
          }
          ,
          this.core = e,
          this.logger = (0,
            c.generateChildLogger)(t, this.name)
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
      }
      async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, eu(e))
      }
      async getKeyChain() {
        let e = await this.core.storage.getItem(this.storageKey);
        return "u" > typeof e ? eh(e) : void 0
      }
      async persist() {
        await this.setKeyChain(this.keychain)
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
    }
    class rl {
      constructor(e, t, r) {
        this.core = e,
          this.logger = t,
          this.name = "crypto",
          this.initialized = !1,
          this.init = async () => {
            this.initialized || (await this.keychain.init(),
              this.initialized = !0)
          }
          ,
          this.hasKeys = e => (this.isInitialized(),
            this.keychain.has(e)),
          this.getClientId = async () => {
            this.isInitialized();
            let e = await this.getClientSeed()
              , t = A(e);
            return C(t.publicKey)
          }
          ,
          this.generateKeyPair = () => {
            this.isInitialized();
            let e = function () {
              let e = q.Au();
              return {
                privateKey: (0,
                  L.BB)(e.secretKey, K),
                publicKey: (0,
                  L.BB)(e.publicKey, K)
              }
            }();
            return this.setPrivateKey(e.publicKey, e.privateKey)
          }
          ,
          this.signJWT = async e => {
            this.isInitialized();
            let t = await this.getClientSeed()
              , r = A(t)
              , i = G();
            return await x(i, e, t5, r)
          }
          ,
          this.generateSharedKey = (e, t, r) => {
            this.isInitialized();
            let i = this.getPrivateKey(e)
              , n = function (e, t) {
                let r = q.gi((0,
                  L.mL)(e, K), (0,
                    L.mL)(t, K), !0)
                  , i = new j.t(D.mE, r).expand(32);
                return (0,
                  L.BB)(i, K)
              }(i, t);
            return this.setSymKey(n, r)
          }
          ,
          this.setSymKey = async (e, t) => {
            this.isInitialized();
            let r = t || function (e) {
              let t = (0,
                D.vp)((0,
                  L.mL)(e, K));
              return (0,
                L.BB)(t, K)
            }(e);
            return await this.keychain.set(r, e),
              r
          }
          ,
          this.deleteKeyPair = async e => {
            this.isInitialized(),
              await this.keychain.del(e)
          }
          ,
          this.deleteSymKey = async e => {
            this.isInitialized(),
              await this.keychain.del(e)
          }
          ,
          this.encode = async (e, t, r) => {
            this.isInitialized();
            let i = Y(r)
              , n = (0,
                _.u)(t);
            if (Z(i)) {
              let t = i.senderPublicKey
                , r = i.receiverPublicKey;
              e = await this.generateSharedKey(t, r)
            }
            let s = this.getSymKey(e)
              , { type: o, senderPublicKey: a } = i;
            return function (e) {
              var t;
              let r = (t = "u" > typeof e.type ? e.type : 0,
                (0,
                  L.mL)(`${t}`, V));
              if (1 === J(r) && typeof e.senderPublicKey > "u")
                throw Error("Missing sender public key for type 1 envelope");
              let i = "u" > typeof e.senderPublicKey ? (0,
                L.mL)(e.senderPublicKey, K) : void 0
                , n = "u" > typeof e.iv ? (0,
                  L.mL)(e.iv, K) : (0,
                    w.randomBytes)(12)
                , s = new T.OK((0,
                  L.mL)(e.symKey, K)).seal(n, (0,
                    L.mL)(e.message, B));
              return function (e) {
                if (1 === J(e.type)) {
                  if (typeof e.senderPublicKey > "u")
                    throw Error("Missing sender public key for type 1 envelope");
                  return (0,
                    L.BB)((0,
                      L.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), F)
                }
                return (0,
                  L.BB)((0,
                    L.zo)([e.type, e.iv, e.sealed]), F)
              }({
                type: r,
                sealed: s,
                iv: n,
                senderPublicKey: i
              })
            }({
              type: o,
              symKey: s,
              message: n,
              senderPublicKey: a
            })
          }
          ,
          this.decode = async (e, t, r) => {
            this.isInitialized();
            let i = function (e, t) {
              let r = Q(e);
              return Y({
                type: J(r.type),
                senderPublicKey: "u" > typeof r.senderPublicKey ? (0,
                  L.BB)(r.senderPublicKey, K) : void 0,
                receiverPublicKey: t?.receiverPublicKey
              })
            }(t, r);
            if (Z(i)) {
              let t = i.receiverPublicKey
                , r = i.senderPublicKey;
              e = await this.generateSharedKey(t, r)
            }
            try {
              let r = this.getSymKey(e)
                , i = function (e) {
                  let t = new T.OK((0,
                    L.mL)(e.symKey, K))
                    , { sealed: r, iv: i } = Q(e.encoded)
                    , n = t.open(i, r);
                  if (null === n)
                    throw Error("Failed to decrypt");
                  return (0,
                    L.BB)(n, B)
                }({
                  symKey: r,
                  encoded: t
                });
              return (0,
                _.D)(i)
            } catch (t) {
              this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),
                this.logger.error(t)
            }
          }
          ,
          this.getPayloadType = e => {
            let t = Q(e);
            return J(t.type)
          }
          ,
          this.getPayloadSenderPublicKey = e => {
            let t = Q(e);
            return t.senderPublicKey ? (0,
              L.BB)(t.senderPublicKey, K) : void 0
          }
          ,
          this.core = e,
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.keychain = r || new rc(this.core, this.logger)
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      async setPrivateKey(e, t) {
        return await this.keychain.set(e, t),
          e
      }
      getPrivateKey(e) {
        return this.keychain.get(e)
      }
      async getClientSeed() {
        let e = "";
        try {
          e = this.keychain.get(t1)
        } catch {
          e = G(),
            await this.keychain.set(t1, e)
        }
        return function (e, t = "utf8") {
          let r = tQ[t];
          if (!r)
            throw Error(`Unsupported encoding "${t}"`);
          return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? tB(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
        }(e, "base16")
      }
      getSymKey(e) {
        return this.keychain.get(e)
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
    }
    class ru extends p {
      constructor(e, t) {
        super(e, t),
          this.logger = e,
          this.core = t,
          this.messages = new Map,
          this.name = "messages",
          this.version = "0.3",
          this.initialized = !1,
          this.storagePrefix = tZ,
          this.init = async () => {
            if (!this.initialized) {
              this.logger.trace("Initialized");
              try {
                let e = await this.getRelayerMessages();
                "u" > typeof e && (this.messages = e),
                  this.logger.debug(`Successfully Restored records for ${this.name}`),
                  this.logger.trace({
                    type: "method",
                    method: "restore",
                    size: this.messages.size
                  })
              } catch (e) {
                this.logger.debug(`Failed to Restore records for ${this.name}`),
                  this.logger.error(e)
              } finally {
                this.initialized = !0
              }
            }
          }
          ,
          this.set = async (e, t) => {
            this.isInitialized();
            let r = W(t)
              , i = this.messages.get(e);
            return typeof i > "u" && (i = {}),
              "u" > typeof i[r] || (i[r] = t,
                this.messages.set(e, i),
                await this.persist()),
              r
          }
          ,
          this.get = e => {
            this.isInitialized();
            let t = this.messages.get(e);
            return typeof t > "u" && (t = {}),
              t
          }
          ,
          this.has = (e, t) => {
            this.isInitialized();
            let r = this.get(e)
              , i = W(t);
            return "u" > typeof r[i]
          }
          ,
          this.del = async e => {
            this.isInitialized(),
              this.messages.delete(e),
              await this.persist()
          }
          ,
          this.logger = (0,
            c.generateChildLogger)(e, this.name),
          this.core = t
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
      }
      async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, eu(e))
      }
      async getRelayerMessages() {
        let e = await this.core.storage.getItem(this.storageKey);
        return "u" > typeof e ? eh(e) : void 0
      }
      async persist() {
        await this.setRelayerMessages(this.messages)
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
    }
    class rh extends f {
      constructor(e, t) {
        super(e, t),
          this.relayer = e,
          this.logger = t,
          this.events = new i.EventEmitter,
          this.name = "publisher",
          this.queue = new Map,
          this.publishTimeout = (0,
            E.toMiliseconds)(E.TEN_SECONDS),
          this.needsTransportRestart = !1,
          this.publish = async (e, t, r) => {
            var i;
            this.logger.debug("Publishing Payload"),
              this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                  topic: e,
                  message: t,
                  opts: r
                }
              });
            try {
              let n = r?.ttl || t6
                , s = ev(r)
                , o = r?.prompt || !1
                , a = r?.tag || 0
                , c = r?.id || (0,
                  eq.getBigIntRpcId)().toString()
                , l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: n,
                    relay: s,
                    prompt: o,
                    tag: a,
                    id: c
                  }
                }
                , u = setTimeout(() => this.queue.set(c, l), this.publishTimeout);
              try {
                await await ep(this.rpcPublish(e, t, n, s, o, a, c), this.publishTimeout, "Failed to publish payload, please try again."),
                  this.removeRequestFromQueue(c),
                  this.relayer.events.emit(t4.publish, l)
              } catch (e) {
                if (this.logger.debug("Publishing Payload stalled"),
                  this.needsTransportRestart = !0,
                  null != (i = r?.internal) && i.throwOnFailedPublish)
                  throw this.removeRequestFromQueue(c),
                  e;
                return
              } finally {
                clearTimeout(u)
              }
              this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: {
                    topic: e,
                    message: t,
                    opts: r
                  }
                })
            } catch (e) {
              throw this.logger.debug("Failed to Publish Payload"),
              this.logger.error(e),
              e
            }
          }
          ,
          this.on = (e, t) => {
            this.events.on(e, t)
          }
          ,
          this.once = (e, t) => {
            this.events.once(e, t)
          }
          ,
          this.off = (e, t) => {
            this.events.off(e, t)
          }
          ,
          this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
          }
          ,
          this.relayer = e,
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.registerEventListeners()
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      rpcPublish(e, t, r, i, n, s, o) {
        var a, c, l, u;
        let h = {
          method: em(i.protocol).publish,
          params: {
            topic: e,
            message: t,
            ttl: r,
            prompt: n,
            tag: s
          },
          id: o
        };
        return eC(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt),
          eC(null == (l = h.params) ? void 0 : l.tag) && (null == (u = h.params) || delete u.tag),
          this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: h
          }),
          this.relayer.request(h)
      }
      removeRequestFromQueue(e) {
        this.queue.delete(e)
      }
      checkQueue() {
        this.queue.forEach(async e => {
          let { topic: t, message: r, opts: i } = e;
          await this.publish(t, r, i)
        }
        )
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => {
          if (this.needsTransportRestart) {
            this.needsTransportRestart = !1,
              this.relayer.events.emit(t4.connection_stalled);
            return
          }
          this.checkQueue()
        }
        ),
          this.relayer.on(t4.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
          }
          )
      }
    }
    class rp {
      constructor() {
        this.map = new Map,
          this.set = (e, t) => {
            let r = this.get(e);
            this.exists(e, t) || this.map.set(e, [...r, t])
          }
          ,
          this.get = e => this.map.get(e) || [],
          this.exists = (e, t) => this.get(e).includes(t),
          this.delete = (e, t) => {
            if (typeof t > "u") {
              this.map.delete(e);
              return
            }
            if (!this.map.has(e))
              return;
            let r = this.get(e);
            if (!this.exists(e, t))
              return;
            let i = r.filter(e => e !== t);
            if (!i.length) {
              this.map.delete(e);
              return
            }
            this.map.set(e, i)
          }
          ,
          this.clear = () => {
            this.map.clear()
          }
      }
      get topics() {
        return Array.from(this.map.keys())
      }
    }
    var rf = Object.defineProperty
      , rd = Object.defineProperties
      , rg = Object.getOwnPropertyDescriptors
      , ry = Object.getOwnPropertySymbols
      , rv = Object.prototype.hasOwnProperty
      , rm = Object.prototype.propertyIsEnumerable
      , r_ = (e, t, r) => t in e ? rf(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , rb = (e, t) => {
        for (var r in t || (t = {}))
          rv.call(t, r) && r_(e, r, t[r]);
        if (ry)
          for (var r of ry(t))
            rm.call(t, r) && r_(e, r, t[r]);
        return e
      }
      , rw = (e, t) => rd(e, rg(t));
    class rE extends y {
      constructor(e, t) {
        super(e, t),
          this.relayer = e,
          this.logger = t,
          this.subscriptions = new Map,
          this.topicMap = new rp,
          this.events = new i.EventEmitter,
          this.name = "subscription",
          this.version = "0.3",
          this.pending = new Map,
          this.cached = [],
          this.initialized = !1,
          this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
          this.pollingInterval = 20,
          this.storagePrefix = tZ,
          this.subscribeTimeout = 1e4,
          this.restartInProgress = !1,
          this.batchSubscribeTopicsLimit = 500,
          this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
              this.registerEventListeners(),
              this.clientId = await this.relayer.core.crypto.getClientId())
          }
          ,
          this.subscribe = async (e, t) => {
            await this.restartToComplete(),
              this.isInitialized(),
              this.logger.debug("Subscribing Topic"),
              this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                  topic: e,
                  opts: t
                }
              });
            try {
              let r = ev(t)
                , i = {
                  topic: e,
                  relay: r
                };
              this.pending.set(e, i);
              let n = await this.rpcSubscribe(e, r);
              return this.onSubscribe(n, i),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: {
                    topic: e,
                    opts: t
                  }
                }),
                n
            } catch (e) {
              throw this.logger.debug("Failed to Subscribe Topic"),
              this.logger.error(e),
              e
            }
          }
          ,
          this.unsubscribe = async (e, t) => {
            await this.restartToComplete(),
              this.isInitialized(),
              "u" > typeof t?.id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
          }
          ,
          this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
            let i = new E.Watch;
            i.start(this.pendingSubscriptionWatchLabel);
            let n = setInterval(() => {
              !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n),
                i.stop(this.pendingSubscriptionWatchLabel),
                t(!0)),
                i.elapsed(this.pendingSubscriptionWatchLabel) >= re && (clearInterval(n),
                  i.stop(this.pendingSubscriptionWatchLabel),
                  r(Error("Subscription resolution timeout")))
            }
              , this.pollingInterval)
          }
          ).catch(() => !1),
          this.on = (e, t) => {
            this.events.on(e, t)
          }
          ,
          this.once = (e, t) => {
            this.events.once(e, t)
          }
          ,
          this.off = (e, t) => {
            this.events.off(e, t)
          }
          ,
          this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
          }
          ,
          this.restart = async () => {
            this.restartInProgress = !0,
              await this.restore(),
              await this.reset(),
              this.restartInProgress = !1
          }
          ,
          this.relayer = e,
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.clientId = ""
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
      }
      get length() {
        return this.subscriptions.size
      }
      get ids() {
        return Array.from(this.subscriptions.keys())
      }
      get values() {
        return Array.from(this.subscriptions.values())
      }
      get topics() {
        return this.topicMap.topics
      }
      hasSubscription(e, t) {
        let r = !1;
        try {
          r = this.getSubscription(e).topic === t
        } catch { }
        return r
      }
      onEnable() {
        this.cached = [],
          this.initialized = !0
      }
      onDisable() {
        this.cached = this.values,
          this.subscriptions.clear(),
          this.topicMap.clear()
      }
      async unsubscribeByTopic(e, t) {
        let r = this.topicMap.get(e);
        await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
      }
      async unsubscribeById(e, t, r) {
        this.logger.debug("Unsubscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
              topic: e,
              id: t,
              opts: r
            }
          });
        try {
          let i = ev(r);
          await this.rpcUnsubscribe(e, t, i);
          let n = eR("USER_DISCONNECTED", `${this.name}, ${e}`);
          await this.onUnsubscribe(e, t, n),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: {
                topic: e,
                id: t,
                opts: r
              }
            })
        } catch (e) {
          throw this.logger.debug("Failed to Unsubscribe Topic"),
          this.logger.error(e),
          e
        }
      }
      async rpcSubscribe(e, t) {
        let r = {
          method: em(t.protocol).subscribe,
          params: {
            topic: e
          }
        };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
          });
        try {
          await await ep(this.relayer.request(r), this.subscribeTimeout)
        } catch {
          this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(t4.connection_stalled)
        }
        return W(e + this.clientId)
      }
      async rpcBatchSubscribe(e) {
        if (!e.length)
          return;
        let t = e[0].relay
          , r = {
            method: em(t.protocol).batchSubscribe,
            params: {
              topics: e.map(e => e.topic)
            }
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
          });
        try {
          return await await ep(this.relayer.request(r), this.subscribeTimeout)
        } catch {
          this.logger.debug("Outgoing Relay Payload stalled"),
            this.relayer.events.emit(t4.connection_stalled)
        }
      }
      rpcUnsubscribe(e, t, r) {
        let i = {
          method: em(r.protocol).unsubscribe,
          params: {
            topic: e,
            id: t
          }
        };
        return this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
          }),
          this.relayer.request(i)
      }
      onSubscribe(e, t) {
        this.setSubscription(e, rw(rb({}, t), {
          id: e
        })),
          this.pending.delete(t.topic)
      }
      onBatchSubscribe(e) {
        e.length && e.forEach(e => {
          this.setSubscription(e.id, rb({}, e)),
            this.pending.delete(e.topic)
        }
        )
      }
      async onUnsubscribe(e, t, r) {
        this.events.removeAllListeners(t),
          this.hasSubscription(t, e) && this.deleteSubscription(t, r),
          await this.relayer.messages.del(e)
      }
      async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
      }
      async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
      }
      setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
          this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
          }),
          this.addSubscription(e, t))
      }
      addSubscription(e, t) {
        this.subscriptions.set(e, rb({}, t)),
          this.topicMap.set(t.topic, e),
          this.events.emit(t7.created, t)
      }
      getSubscription(e) {
        this.logger.debug("Getting subscription"),
          this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
          });
        let t = this.subscriptions.get(e);
        if (!t) {
          let { message: t } = eN("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw Error(t)
        }
        return t
      }
      deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"),
          this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
          });
        let r = this.getSubscription(e);
        this.subscriptions.delete(e),
          this.topicMap.delete(r.topic, e),
          this.events.emit(t7.deleted, rw(rb({}, r), {
            reason: t
          }))
      }
      async persist() {
        await this.setRelayerSubscriptions(this.values),
          this.events.emit(t7.sync)
      }
      async reset() {
        if (this.cached.length) {
          let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
          for (let t = 0; t < e; t++) {
            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
            await this.batchSubscribe(e)
          }
        }
        this.events.emit(t7.resubscribed)
      }
      async restore() {
        try {
          let e = await this.getRelayerSubscriptions();
          if (typeof e > "u" || !e.length)
            return;
          if (this.subscriptions.size) {
            let { message: e } = eN("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e),
            this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
            Error(e)
          }
          this.cached = e,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              subscriptions: this.values
            })
        } catch (e) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e)
        }
      }
      async batchSubscribe(e) {
        var t;
        if (!e.length)
          return;
        let r = await this.rpcBatchSubscribe(e);
        Array.isArray(r) && (!("u" > typeof t) || !r.length || r.every(t)) && this.onBatchSubscribe(r.map((t, r) => rw(rb({}, e[r]), {
          id: t
        })))
      }
      async onConnect() {
        this.restartInProgress || (await this.restart(),
          this.onEnable())
      }
      onDisconnect() {
        this.onDisable()
      }
      async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed)
          return;
        let e = [];
        this.pending.forEach(t => {
          e.push(t)
        }
        ),
          await this.batchSubscribe(e)
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, async () => {
          await this.checkPending()
        }
        ),
          this.relayer.on(t4.connect, async () => {
            await this.onConnect()
          }
          ),
          this.relayer.on(t4.disconnect, () => {
            this.onDisconnect()
          }
          ),
          this.events.on(t7.created, async e => {
            let t = t7.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                data: e
              }),
              await this.persist()
          }
          ),
          this.events.on(t7.deleted, async e => {
            let t = t7.deleted;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                data: e
              }),
              await this.persist()
          }
          )
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
      async restartToComplete() {
        this.restartInProgress && await new Promise(e => {
          let t = setInterval(() => {
            this.restartInProgress || (clearInterval(t),
              e())
          }
            , this.pollingInterval)
        }
        )
      }
    }
    var rI = Object.defineProperty
      , rS = Object.getOwnPropertySymbols
      , rP = Object.prototype.hasOwnProperty
      , rO = Object.prototype.propertyIsEnumerable
      , rN = (e, t, r) => t in e ? rI(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , rR = (e, t) => {
        for (var r in t || (t = {}))
          rP.call(t, r) && rN(e, r, t[r]);
        if (rS)
          for (var r of rS(t))
            rO.call(t, r) && rN(e, r, t[r]);
        return e
      }
      ;
    class rC extends d {
      constructor(e) {
        super(e),
          this.protocol = "wc",
          this.version = 2,
          this.events = new i.EventEmitter,
          this.name = "relayer",
          this.transportExplicitlyClosed = !1,
          this.initialized = !1,
          this.connectionAttemptInProgress = !1,
          this.connectionStatusPollingInterval = 20,
          this.staleConnectionErrors = ["socket hang up", "socket stalled"],
          this.hasExperiencedNetworkDisruption = !1,
          this.request = async e => {
            this.logger.debug("Publishing Request Payload");
            try {
              return await this.toEstablishConnection(),
                await this.provider.request(e)
            } catch (e) {
              throw this.logger.debug("Failed to Publish Request"),
              this.logger.error(e),
              e
            }
          }
          ,
          this.onPayloadHandler = e => {
            this.onProviderPayload(e)
          }
          ,
          this.onConnectHandler = () => {
            this.events.emit(t4.connect)
          }
          ,
          this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
          }
          ,
          this.onProviderErrorHandler = e => {
            this.logger.error(e),
              this.events.emit(t4.error, e),
              this.logger.info("Fatal socket error received, closing transport"),
              this.transportClose()
          }
          ,
          this.registerProviderListeners = () => {
            this.provider.on(t8.payload, this.onPayloadHandler),
              this.provider.on(t8.connect, this.onConnectHandler),
              this.provider.on(t8.disconnect, this.onDisconnectHandler),
              this.provider.on(t8.error, this.onProviderErrorHandler)
          }
          ,
          this.core = e.core,
          this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0,
            c.generateChildLogger)(e.logger, this.name) : (0,
              c.pino)((0,
                c.getDefaultLoggerOptions)({
                  level: e.logger || "error"
                })),
          this.messages = new ru(this.logger, e.core),
          this.subscriber = new rE(this, this.logger),
          this.publisher = new rh(this, this.logger),
          this.relayUrl = e?.relayUrl || t3,
          this.projectId = e.projectId,
          this.provider = {}
      }
      async init() {
        this.logger.trace("Initialized"),
          this.registerEventListeners(),
          await this.createProvider(),
          await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
          await this.transportOpen()
        } catch {
          this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${t2}...`),
            await this.restartTransport(t2)
        }
        this.initialized = !0,
          setTimeout(async () => {
            0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"),
              await this.transportClose(),
              this.transportExplicitlyClosed = !1)
          }
            , 1e4)
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get connected() {
        return this.provider.connection.connected
      }
      get connecting() {
        return this.provider.connection.connecting
      }
      async publish(e, t, r) {
        this.isInitialized(),
          await this.publisher.publish(e, t, r),
          await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
          })
      }
      async subscribe(e, t) {
        var r;
        let i;
        this.isInitialized();
        let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
        if (n)
          return n;
        let s = t => {
          t.topic === e && (this.subscriber.off(t7.created, s),
            i())
        }
          ;
        return await Promise.all([new Promise(e => {
          i = e,
            this.subscriber.on(t7.created, s)
        }
        ), new Promise(async r => {
          n = await this.subscriber.subscribe(e, t),
            r()
        }
        )]),
          n
      }
      async unsubscribe(e, t) {
        this.isInitialized(),
          await this.subscriber.unsubscribe(e, t)
      }
      on(e, t) {
        this.events.on(e, t)
      }
      once(e, t) {
        this.events.once(e, t)
      }
      off(e, t) {
        this.events.off(e, t)
      }
      removeListener(e, t) {
        this.events.removeListener(e, t)
      }
      async transportClose() {
        this.transportExplicitlyClosed = !0,
          this.hasExperiencedNetworkDisruption && this.connected ? await ep(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
      }
      async transportOpen(e) {
        if (this.transportExplicitlyClosed = !1,
          await this.confirmOnlineStateOrThrow(),
          !this.connectionAttemptInProgress) {
          e && e !== this.relayUrl && (this.relayUrl = e,
            await this.transportClose(),
            await this.createProvider()),
            this.connectionAttemptInProgress = !0;
          try {
            await Promise.all([new Promise(e => {
              if (!this.initialized)
                return e();
              this.subscriber.once(t7.resubscribed, () => {
                e()
              }
              )
            }
            ), new Promise(async (e, t) => {
              try {
                await ep(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
              } catch (e) {
                t(e);
                return
              }
              e()
            }
            )])
          } catch (e) {
            if (this.logger.error(e),
              !this.isConnectionStalled(e.message))
              throw e;
            this.provider.events.emit(t8.disconnect)
          } finally {
            this.connectionAttemptInProgress = !1,
              this.hasExperiencedNetworkDisruption = !1
          }
        }
      }
      async restartTransport(e) {
        await this.confirmOnlineStateOrThrow(),
          this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl,
            await this.transportClose(),
            await this.createProvider(),
            await this.transportOpen())
      }
      async confirmOnlineStateOrThrow() {
        if (!await eT())
          throw Error("No internet connection detected. Please restart your network and try again.")
      }
      isConnectionStalled(e) {
        return this.staleConnectionErrors.some(t => e.includes(t))
      }
      async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        let e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new eD.r(new e$(function ({ protocol: e, version: t, relayUrl: i, sdkVersion: n, auth: s, projectId: o, useOnCloseEvent: a }) {
          var c;
          let l;
          let u = i.split("?")
            , h = function (e, t, i) {
              let n = function () {
                if (el() === es.reactNative && "u" > typeof r.g && "u" > typeof (null == r.g ? void 0 : r.g.Platform)) {
                  let { OS: e, Version: t } = r.g.Platform;
                  return [e, t].join("-")
                }
                let e = (0,
                  U.qY)();
                if (null === e)
                  return "unknown";
                let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
              }()
                , s = function () {
                  var e;
                  let t = el();
                  return t === es.browser ? [t, (null == (e = (0,
                    k.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                }();
              return [[e, t].join("-"), ["js", i].join("-"), n, s].join("/")
            }(e, t, n)
            , p = (c = u[1] || "",
              l = en(en({}, l = M.parse(c)), {
                auth: s,
                ua: h,
                projectId: o,
                useOnCloseEvent: a || void 0
              }),
              c = M.stringify(l));
          return u[0] + "?" + p
        }({
          sdkVersion: "2.10.2",
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0
        }))),
          this.registerProviderListeners()
      }
      async recordMessageEvent(e) {
        let { topic: t, message: r } = e;
        await this.messages.set(t, r)
      }
      async shouldIgnoreMessageEvent(e) {
        let { topic: t, message: r } = e;
        if (!r || 0 === r.length)
          return this.logger.debug(`Ignoring invalid/empty message: ${r}`),
            !0;
        if (!await this.subscriber.isSubscribed(t))
          return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
            !0;
        let i = this.messages.has(t, r);
        return i && this.logger.debug(`Ignoring duplicate message: ${r}`),
          i
      }
      async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
          }),
          (0,
            eq.isJsonRpcRequest)(e)) {
          if (!e.method.endsWith("_subscription"))
            return;
          let t = e.params
            , { topic: r, message: i, publishedAt: n } = t.data
            , s = {
              topic: r,
              message: i,
              publishedAt: n
            };
          this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(rR({
              type: "event",
              event: t.id
            }, s)),
            this.events.emit(t.id, s),
            await this.acknowledgePayload(e),
            await this.onMessageEvent(s)
        } else
          (0,
            eq.isJsonRpcResponse)(e) && this.events.emit(t4.message_ack, e)
      }
      async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(t4.message, e),
          await this.recordMessageEvent(e))
      }
      async acknowledgePayload(e) {
        let t = (0,
          eq.formatJsonRpcResult)(e.id, !0);
        await this.provider.connection.send(t)
      }
      unregisterProviderListeners() {
        this.provider.off(t8.payload, this.onPayloadHandler),
          this.provider.off(t8.connect, this.onConnectHandler),
          this.provider.off(t8.disconnect, this.onDisconnectHandler),
          this.provider.off(t8.error, this.onProviderErrorHandler)
      }
      async registerEventListeners() {
        this.events.on(t4.connection_stalled, () => {
          this.restartTransport().catch(e => this.logger.error(e))
        }
        );
        let e = await eT();
        !function (e) {
          switch (el()) {
            case es.browser:
              !ea() && ec() && (window.addEventListener("online", () => e(!0)),
                window.addEventListener("offline", () => e(!1)));
              break;
            case es.reactNative:
              ea() && "u" > typeof r.g && null != r.g && r.g.NetInfo && r.g?.NetInfo.addEventListener(t => e(t?.isConnected));
            case es.node:
          }
        }(async t => {
          this.initialized && e !== t && (e = t,
            t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0,
              await this.transportClose().catch(e => this.logger.error(e))))
        }
        )
      }
      onProviderDisconnect() {
        this.events.emit(t4.disconnect),
          this.attemptToReconnect()
      }
      attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
          setTimeout(async () => {
            await this.restartTransport().catch(e => this.logger.error(e))
          }
            , (0,
              E.toMiliseconds)(t9)))
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
      async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(),
          !this.connected) {
          if (this.connectionAttemptInProgress)
            return await new Promise(e => {
              let t = setInterval(() => {
                this.connected && (clearInterval(t),
                  e())
              }
                , this.connectionStatusPollingInterval)
            }
            );
          await this.restartTransport()
        }
      }
    }
    var rA = Object.defineProperty
      , rx = Object.getOwnPropertySymbols
      , rT = Object.prototype.hasOwnProperty
      , rj = Object.prototype.propertyIsEnumerable
      , rD = (e, t, r) => t in e ? rA(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , rq = (e, t) => {
        for (var r in t || (t = {}))
          rT.call(t, r) && rD(e, r, t[r]);
        if (rx)
          for (var r of rx(t))
            rj.call(t, r) && rD(e, r, t[r]);
        return e
      }
      ;
    class rL extends g {
      constructor(e, t, r, i = tZ, n) {
        super(e, t, r, i),
          this.core = e,
          this.logger = t,
          this.name = r,
          this.map = new Map,
          this.version = "0.3",
          this.cached = [],
          this.initialized = !1,
          this.storagePrefix = tZ,
          this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
              await this.restore(),
              this.cached.forEach(e => {
                var t;
                this.getKey && null !== e && !eC(e) ? this.map.set(this.getKey(e), e) : (null == (t = e?.proposer) ? void 0 : t.publicKey) ? this.map.set(e.id, e) : e?.topic && this.map.set(e.topic, e)
              }
              ),
              this.cached = [],
              this.initialized = !0)
          }
          ,
          this.set = async (e, t) => {
            this.isInitialized(),
              this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  key: e,
                  value: t
                }),
                this.map.set(e, t),
                await this.persist())
          }
          ,
          this.get = e => (this.isInitialized(),
            this.logger.debug("Getting value"),
            this.logger.trace({
              type: "method",
              method: "get",
              key: e
            }),
            this.getData(e)),
          this.getAll = e => (this.isInitialized(),
            e ? this.values.filter(t => Object.keys(e).every(r => ez()(t[r], e[r]))) : this.values),
          this.update = async (e, t) => {
            this.isInitialized(),
              this.logger.debug("Updating value"),
              this.logger.trace({
                type: "method",
                method: "update",
                key: e,
                update: t
              });
            let r = rq(rq({}, this.getData(e)), t);
            this.map.set(e, r),
              await this.persist()
          }
          ,
          this.delete = async (e, t) => {
            this.isInitialized(),
              this.map.has(e) && (this.logger.debug("Deleting value"),
                this.logger.trace({
                  type: "method",
                  method: "delete",
                  key: e,
                  reason: t
                }),
                this.map.delete(e),
                await this.persist())
          }
          ,
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.storagePrefix = i,
          this.getKey = n
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
      }
      get length() {
        return this.map.size
      }
      get keys() {
        return Array.from(this.map.keys())
      }
      get values() {
        return Array.from(this.map.values())
      }
      async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
      }
      async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
      }
      getData(e) {
        let t = this.map.get(e);
        if (!t) {
          let { message: t } = eN("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw this.logger.error(t),
          Error(t)
        }
        return t
      }
      async persist() {
        await this.setDataStore(this.values)
      }
      async restore() {
        try {
          let e = await this.getDataStore();
          if (typeof e > "u" || !e.length)
            return;
          if (this.map.size) {
            let { message: e } = eN("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e),
            Error(e)
          }
          this.cached = e,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              value: this.values
            })
        } catch (e) {
          this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e)
        }
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
    }
    class rU {
      constructor(e, t) {
        this.core = e,
          this.logger = t,
          this.name = "pairing",
          this.version = "0.3",
          this.events = new (n()),
          this.initialized = !1,
          this.storagePrefix = tZ,
          this.ignoredPayloadTypes = [1],
          this.registeredMethods = [],
          this.init = async () => {
            this.initialized || (await this.pairings.init(),
              await this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              this.initialized = !0,
              this.logger.trace("Initialized"))
          }
          ,
          this.register = ({ methods: e }) => {
            this.isInitialized(),
              this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
          }
          ,
          this.create = async () => {
            var e;
            this.isInitialized();
            let t = G()
              , r = await this.core.crypto.setSymKey(t)
              , i = ed(E.FIVE_MINUTES)
              , n = {
                protocol: "irn"
              }
              , s = (e = {
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: t,
                relay: n
              },
                `${e.protocol}:${e.topic}@${e.version}?` + M.stringify(eS({
                  symKey: e.symKey
                }, function (e, t = "-") {
                  let r = {};
                  return Object.keys(e).forEach(i => {
                    e[i] && (r["relay" + t + i] = e[i])
                  }
                  ),
                    r
                }(e.relay))));
            return await this.pairings.set(r, {
              topic: r,
              expiry: i,
              relay: n,
              active: !1
            }),
              await this.core.relayer.subscribe(r),
              this.core.expirer.set(r, i),
            {
              topic: r,
              uri: s
            }
          }
          ,
          this.pair = async e => {
            this.isInitialized(),
              this.isValidPair(e);
            let { topic: t, symKey: r, relay: i } = function (e) {
              var t;
              let r = e.indexOf(":")
                , i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0
                , n = e.substring(0, r)
                , s = e.substring(r + 1, i).split("@")
                , o = "u" > typeof i ? e.substring(i) : ""
                , a = M.parse(o);
              return {
                protocol: n,
                topic: (t = s[0]).startsWith("//") ? t.substring(2) : t,
                version: parseInt(s[1], 10),
                symKey: a.symKey,
                relay: function (e, t = "-") {
                  let r = {}
                    , i = "relay" + t;
                  return Object.keys(e).forEach(t => {
                    if (t.startsWith(i)) {
                      let n = t.replace(i, "")
                        , s = e[t];
                      r[n] = s
                    }
                  }
                  ),
                    r
                }(a)
              }
            }(e.uri);
            if (this.pairings.keys.includes(t) && this.pairings.get(t).active)
              throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
            this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t),
              await this.core.relayer.subscribe(t, {
                relay: i
              }));
            let n = ed(E.FIVE_MINUTES)
              , s = {
                topic: t,
                relay: i,
                expiry: n,
                active: !1
              };
            return await this.pairings.set(t, s),
              this.core.expirer.set(t, n),
              e.activatePairing && await this.activate({
                topic: t
              }),
              this.events.emit(rr.create, s),
              s
          }
          ,
          this.activate = async ({ topic: e }) => {
            this.isInitialized();
            let t = ed(E.THIRTY_DAYS);
            await this.pairings.update(e, {
              active: !0,
              expiry: t
            }),
              this.core.expirer.set(e, t)
          }
          ,
          this.ping = async e => {
            this.isInitialized(),
              await this.isValidPing(e);
            let { topic: t } = e;
            if (this.pairings.keys.includes(t)) {
              let e = await this.sendRequest(t, "wc_pairingPing", {})
                , { done: r, resolve: i, reject: n } = function (e = E.FIVE_MINUTES, t) {
                  let r, i, n;
                  let s = (0,
                    E.toMiliseconds)(e || E.FIVE_MINUTES);
                  return {
                    resolve: e => {
                      n && r && (clearTimeout(n),
                        r(e))
                    }
                    ,
                    reject: e => {
                      n && i && (clearTimeout(n),
                        i(e))
                    }
                    ,
                    done: () => new Promise((e, t) => {
                      n = setTimeout(() => {
                        t(Error(void 0))
                      }
                        , s),
                        r = e,
                        i = t
                    }
                    )
                  }
                }();
              this.events.once(ey("pairing_ping", e), ({ error: e }) => {
                e ? n(e) : i()
              }
              ),
                await r()
            }
          }
          ,
          this.updateExpiry = async ({ topic: e, expiry: t }) => {
            this.isInitialized(),
              await this.pairings.update(e, {
                expiry: t
              })
          }
          ,
          this.updateMetadata = async ({ topic: e, metadata: t }) => {
            this.isInitialized(),
              await this.pairings.update(e, {
                peerMetadata: t
              })
          }
          ,
          this.getPairings = () => (this.isInitialized(),
            this.pairings.values),
          this.disconnect = async e => {
            this.isInitialized(),
              await this.isValidDisconnect(e);
            let { topic: t } = e;
            this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", eR("USER_DISCONNECTED")),
              await this.deletePairing(t))
          }
          ,
          this.sendRequest = async (e, t, r) => {
            let i = (0,
              eq.formatJsonRpcRequest)(t, r)
              , n = await this.core.crypto.encode(e, i)
              , s = rt[t].req;
            return this.core.history.set(e, i),
              this.core.relayer.publish(e, n, s),
              i.id
          }
          ,
          this.sendResult = async (e, t, r) => {
            let i = (0,
              eq.formatJsonRpcResult)(e, r)
              , n = await this.core.crypto.encode(t, i)
              , s = await this.core.history.get(t, e)
              , o = rt[s.request.method].res;
            await this.core.relayer.publish(t, n, o),
              await this.core.history.resolve(i)
          }
          ,
          this.sendError = async (e, t, r) => {
            let i = (0,
              eq.formatJsonRpcError)(e, r)
              , n = await this.core.crypto.encode(t, i)
              , s = await this.core.history.get(t, e)
              , o = rt[s.request.method] ? rt[s.request.method].res : rt.unregistered_method.res;
            await this.core.relayer.publish(t, n, o),
              await this.core.history.resolve(i)
          }
          ,
          this.deletePairing = async (e, t) => {
            await this.core.relayer.unsubscribe(e),
              await Promise.all([this.pairings.delete(e, eR("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
          }
          ,
          this.cleanup = async () => {
            let e = this.pairings.getAll().filter(e => eg(e.expiry));
            await Promise.all(e.map(e => this.deletePairing(e.topic)))
          }
          ,
          this.onRelayEventRequest = e => {
            let { topic: t, payload: r } = e;
            switch (r.method) {
              case "wc_pairingPing":
                return this.onPairingPingRequest(t, r);
              case "wc_pairingDelete":
                return this.onPairingDeleteRequest(t, r);
              default:
                return this.onUnknownRpcMethodRequest(t, r)
            }
          }
          ,
          this.onRelayEventResponse = async e => {
            let { topic: t, payload: r } = e
              , i = (await this.core.history.get(t, r.id)).request.method;
            return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
          }
          ,
          this.onPairingPingRequest = async (e, t) => {
            let { id: r } = t;
            try {
              this.isValidPing({
                topic: e
              }),
                await this.sendResult(r, e, !0),
                this.events.emit(rr.ping, {
                  id: r,
                  topic: e
                })
            } catch (t) {
              await this.sendError(r, e, t),
                this.logger.error(t)
            }
          }
          ,
          this.onPairingPingResponse = (e, t) => {
            let { id: r } = t;
            setTimeout(() => {
              (0,
                eq.isJsonRpcResult)(t) ? this.events.emit(ey("pairing_ping", r), {}) : (0,
                  eq.isJsonRpcError)(t) && this.events.emit(ey("pairing_ping", r), {
                    error: t.error
                  })
            }
              , 500)
          }
          ,
          this.onPairingDeleteRequest = async (e, t) => {
            let { id: r } = t;
            try {
              this.isValidDisconnect({
                topic: e
              }),
                await this.deletePairing(e),
                this.events.emit(rr.delete, {
                  id: r,
                  topic: e
                })
            } catch (t) {
              await this.sendError(r, e, t),
                this.logger.error(t)
            }
          }
          ,
          this.onUnknownRpcMethodRequest = async (e, t) => {
            let { id: r, method: i } = t;
            try {
              if (this.registeredMethods.includes(i))
                return;
              let t = eR("WC_METHOD_UNSUPPORTED", i);
              await this.sendError(r, e, t),
                this.logger.error(t)
            } catch (t) {
              await this.sendError(r, e, t),
                this.logger.error(t)
            }
          }
          ,
          this.onUnknownRpcMethodResponse = e => {
            this.registeredMethods.includes(e) || this.logger.error(eR("WC_METHOD_UNSUPPORTED", e))
          }
          ,
          this.isValidPair = e => {
            if (!ex(e)) {
              let { message: t } = eN("MISSING_OR_INVALID", `pair() params: ${e}`);
              throw Error(t)
            }
            if (!function (e) {
              if (eA(e, !1))
                try {
                  return "u" > typeof new URL(e)
                } catch { }
              return !1
            }(e.uri)) {
              let { message: t } = eN("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
              throw Error(t)
            }
          }
          ,
          this.isValidPing = async e => {
            if (!ex(e)) {
              let { message: t } = eN("MISSING_OR_INVALID", `ping() params: ${e}`);
              throw Error(t)
            }
            let { topic: t } = e;
            await this.isValidPairingTopic(t)
          }
          ,
          this.isValidDisconnect = async e => {
            if (!ex(e)) {
              let { message: t } = eN("MISSING_OR_INVALID", `disconnect() params: ${e}`);
              throw Error(t)
            }
            let { topic: t } = e;
            await this.isValidPairingTopic(t)
          }
          ,
          this.isValidPairingTopic = async e => {
            if (!eA(e, !1)) {
              let { message: t } = eN("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
              throw Error(t)
            }
            if (!this.pairings.keys.includes(e)) {
              let { message: t } = eN("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
              throw Error(t)
            }
            if (eg(this.pairings.get(e).expiry)) {
              await this.deletePairing(e);
              let { message: t } = eN("EXPIRED", `pairing topic: ${e}`);
              throw Error(t)
            }
          }
          ,
          this.core = e,
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.pairings = new rL(this.core, this.logger, this.name, this.storagePrefix)
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
      registerRelayerEvents() {
        this.core.relayer.on(t4.message, async e => {
          let { topic: t, message: r } = e;
          if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r)))
            return;
          let i = await this.core.crypto.decode(t, r);
          try {
            (0,
              eq.isJsonRpcRequest)(i) ? (this.core.history.set(t, i),
                this.onRelayEventRequest({
                  topic: t,
                  payload: i
                })) : (0,
                  eq.isJsonRpcResponse)(i) && (await this.core.history.resolve(i),
                    await this.onRelayEventResponse({
                      topic: t,
                      payload: i
                    }),
                    this.core.history.delete(t, i.id))
          } catch (e) {
            this.logger.error(e)
          }
        }
        )
      }
      registerExpirerEvents() {
        this.core.expirer.on(rn.expired, async e => {
          let { topic: t } = function (e) {
            let [t, r] = e.split(":")
              , i = {
                id: void 0,
                topic: void 0
              };
            if ("topic" === t && "string" == typeof r)
              i.topic = r;
            else if ("id" === t && Number.isInteger(Number(r)))
              i.id = Number(r);
            else
              throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
            return i
          }(e.target);
          t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
            this.events.emit(rr.expire, {
              topic: t
            }))
        }
        )
      }
    }
    class rk extends h {
      constructor(e, t) {
        super(e, t),
          this.core = e,
          this.logger = t,
          this.records = new Map,
          this.events = new i.EventEmitter,
          this.name = "history",
          this.version = "0.3",
          this.cached = [],
          this.initialized = !1,
          this.storagePrefix = tZ,
          this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
              await this.restore(),
              this.cached.forEach(e => this.records.set(e.id, e)),
              this.cached = [],
              this.registerEventListeners(),
              this.initialized = !0)
          }
          ,
          this.set = (e, t, r) => {
            if (this.isInitialized(),
              this.logger.debug("Setting JSON-RPC request history record"),
              this.logger.trace({
                type: "method",
                method: "set",
                topic: e,
                request: t,
                chainId: r
              }),
              this.records.has(t.id))
              return;
            let i = {
              id: t.id,
              topic: e,
              request: {
                method: t.method,
                params: t.params || null
              },
              chainId: r,
              expiry: ed(E.THIRTY_DAYS)
            };
            this.records.set(i.id, i),
              this.events.emit(ri.created, i)
          }
          ,
          this.resolve = async e => {
            if (this.isInitialized(),
              this.logger.debug("Updating JSON-RPC response history record"),
              this.logger.trace({
                type: "method",
                method: "update",
                response: e
              }),
              !this.records.has(e.id))
              return;
            let t = await this.getRecord(e.id);
            typeof t.response > "u" && (t.response = (0,
              eq.isJsonRpcError)(e) ? {
              error: e.error
            } : {
              result: e.result
            },
              this.records.set(t.id, t),
              this.events.emit(ri.updated, t))
          }
          ,
          this.get = async (e, t) => (this.isInitialized(),
            this.logger.debug("Getting record"),
            this.logger.trace({
              type: "method",
              method: "get",
              topic: e,
              id: t
            }),
            await this.getRecord(t)),
          this.delete = (e, t) => {
            this.isInitialized(),
              this.logger.debug("Deleting record"),
              this.logger.trace({
                type: "method",
                method: "delete",
                id: t
              }),
              this.values.forEach(r => {
                r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id),
                  this.events.emit(ri.deleted, r))
              }
              )
          }
          ,
          this.exists = async (e, t) => (this.isInitialized(),
            !!this.records.has(t) && (await this.getRecord(t)).topic === e),
          this.on = (e, t) => {
            this.events.on(e, t)
          }
          ,
          this.once = (e, t) => {
            this.events.once(e, t)
          }
          ,
          this.off = (e, t) => {
            this.events.off(e, t)
          }
          ,
          this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
          }
          ,
          this.logger = (0,
            c.generateChildLogger)(t, this.name)
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
      }
      get size() {
        return this.records.size
      }
      get keys() {
        return Array.from(this.records.keys())
      }
      get values() {
        return Array.from(this.records.values())
      }
      get pending() {
        let e = [];
        return this.values.forEach(t => {
          if ("u" > typeof t.response)
            return;
          let r = {
            topic: t.topic,
            request: (0,
              eq.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
            chainId: t.chainId
          };
          return e.push(r)
        }
        ),
          e
      }
      async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
      }
      async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
      }
      getRecord(e) {
        this.isInitialized();
        let t = this.records.get(e);
        if (!t) {
          let { message: t } = eN("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw Error(t)
        }
        return t
      }
      async persist() {
        await this.setJsonRpcRecords(this.values),
          this.events.emit(ri.sync)
      }
      async restore() {
        try {
          let e = await this.getJsonRpcRecords();
          if (typeof e > "u" || !e.length)
            return;
          if (this.records.size) {
            let { message: e } = eN("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e),
            Error(e)
          }
          this.cached = e,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              records: this.values
            })
        } catch (e) {
          this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e)
        }
      }
      registerEventListeners() {
        this.events.on(ri.created, e => {
          let t = ri.created;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({
              type: "event",
              event: t,
              record: e
            }),
            this.persist()
        }
        ),
          this.events.on(ri.updated, e => {
            let t = ri.updated;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                record: e
              }),
              this.persist()
          }
          ),
          this.events.on(ri.deleted, e => {
            let t = ri.deleted;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                record: e
              }),
              this.persist()
          }
          ),
          this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup()
          }
          )
      }
      cleanup() {
        try {
          this.records.forEach(e => {
            (0,
              E.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id))
          }
          )
        } catch (e) {
          this.logger.warn(e)
        }
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
    }
    class r$ extends v {
      constructor(e, t) {
        super(e, t),
          this.core = e,
          this.logger = t,
          this.expirations = new Map,
          this.events = new i.EventEmitter,
          this.name = "expirer",
          this.version = "0.3",
          this.cached = [],
          this.initialized = !1,
          this.storagePrefix = tZ,
          this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"),
              await this.restore(),
              this.cached.forEach(e => this.expirations.set(e.target, e)),
              this.cached = [],
              this.registerEventListeners(),
              this.initialized = !0)
          }
          ,
          this.has = e => {
            try {
              let t = this.formatTarget(e);
              return "u" > typeof this.getExpiration(t)
            } catch {
              return !1
            }
          }
          ,
          this.set = (e, t) => {
            this.isInitialized();
            let r = this.formatTarget(e)
              , i = {
                target: r,
                expiry: t
              };
            this.expirations.set(r, i),
              this.checkExpiry(r, i),
              this.events.emit(rn.created, {
                target: r,
                expiration: i
              })
          }
          ,
          this.get = e => {
            this.isInitialized();
            let t = this.formatTarget(e);
            return this.getExpiration(t)
          }
          ,
          this.del = e => {
            if (this.isInitialized(),
              this.has(e)) {
              let t = this.formatTarget(e)
                , r = this.getExpiration(t);
              this.expirations.delete(t),
                this.events.emit(rn.deleted, {
                  target: t,
                  expiration: r
                })
            }
          }
          ,
          this.on = (e, t) => {
            this.events.on(e, t)
          }
          ,
          this.once = (e, t) => {
            this.events.once(e, t)
          }
          ,
          this.off = (e, t) => {
            this.events.off(e, t)
          }
          ,
          this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
          }
          ,
          this.logger = (0,
            c.generateChildLogger)(t, this.name)
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
      }
      get length() {
        return this.expirations.size
      }
      get keys() {
        return Array.from(this.expirations.keys())
      }
      get values() {
        return Array.from(this.expirations.values())
      }
      formatTarget(e) {
        if ("string" == typeof e)
          return ef("topic", e);
        if ("number" == typeof e)
          return ef("id", e);
        let { message: t } = eN("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw Error(t)
      }
      async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
      }
      async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
      }
      async persist() {
        await this.setExpirations(this.values),
          this.events.emit(rn.sync)
      }
      async restore() {
        try {
          let e = await this.getExpirations();
          if (typeof e > "u" || !e.length)
            return;
          if (this.expirations.size) {
            let { message: e } = eN("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e),
            Error(e)
          }
          this.cached = e,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              expirations: this.values
            })
        } catch (e) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e)
        }
      }
      getExpiration(e) {
        let t = this.expirations.get(e);
        if (!t) {
          let { message: t } = eN("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw this.logger.error(t),
          Error(t)
        }
        return t
      }
      checkExpiry(e, t) {
        let { expiry: r } = t;
        (0,
          E.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
      }
      expire(e, t) {
        this.expirations.delete(e),
          this.events.emit(rn.expired, {
            target: e,
            expiration: t
          })
      }
      checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
      }
      registerEventListeners() {
        this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()),
          this.events.on(rn.created, e => {
            let t = rn.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                data: e
              }),
              this.persist()
          }
          ),
          this.events.on(rn.expired, e => {
            let t = rn.expired;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                data: e
              }),
              this.persist()
          }
          ),
          this.events.on(rn.deleted, e => {
            let t = rn.deleted;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({
                type: "event",
                event: t,
                data: e
              }),
              this.persist()
          }
          )
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = eN("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
      }
    }
    class rM extends m {
      constructor(e, t) {
        super(e, t),
          this.projectId = e,
          this.logger = t,
          this.name = rs,
          this.initialized = !1,
          this.queue = [],
          this.verifyDisabled = !1,
          this.init = async () => {
            if (!(this.verifyDisabled || ea()) && ec()) {
              this.verifyUrl !== ro && this.removeIframe(),
                this.verifyUrl = ro;
              try {
                await this.createIframe()
              } catch (e) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                  this.logger.info(e)
              }
              if (!this.initialized) {
                this.removeIframe(),
                  this.verifyUrl = ra;
                try {
                  await this.createIframe()
                } catch (e) {
                  this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                    this.logger.info(e),
                    this.verifyDisabled = !0
                }
              }
            }
          }
          ,
          this.register = async e => {
            this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId),
              await this.init())
          }
          ,
          this.resolve = async e => {
            let t;
            if (this.isDevEnv)
              return "";
            let r = e?.verifyUrl || ro;
            try {
              t = await this.fetchAttestation(e.attestationId, r)
            } catch (i) {
              this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`),
                this.logger.info(i),
                t = await this.fetchAttestation(e.attestationId, ra)
            }
            return t
          }
          ,
          this.fetchAttestation = async (e, t) => {
            this.logger.info(`resolving attestation: ${e} from url: ${t}`);
            let r = this.startAbortTimer(2 * E.ONE_SECOND)
              , i = await fetch(`${t}/attestation/${e}`, {
                signal: this.abortController.signal
              });
            return clearTimeout(r),
              200 === i.status ? await i.json() : void 0
          }
          ,
          this.addToQueue = e => {
            this.queue.push(e)
          }
          ,
          this.processQueue = () => {
            0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)),
              this.queue = [])
          }
          ,
          this.sendPost = e => {
            var t;
            try {
              if (!this.iframe)
                return;
              null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"),
                this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
            } catch { }
          }
          ,
          this.createIframe = async () => {
            let e;
            let t = r => {
              "verify_ready" === r.data && (this.initialized = !0,
                this.processQueue(),
                window.removeEventListener("message", t),
                e())
            }
              ;
            await Promise.race([new Promise(r => {
              if (document.getElementById(rs))
                return r();
              window.addEventListener("message", t);
              let i = document.createElement("iframe");
              i.id = rs,
                i.src = `${this.verifyUrl}/${this.projectId}`,
                i.style.display = "none",
                document.body.append(i),
                this.iframe = i,
                e = r
            }
            ), new Promise((e, r) => setTimeout(() => {
              window.removeEventListener("message", t),
                r("verify iframe load timeout")
            }
              , (0,
                E.toMiliseconds)(E.FIVE_SECONDS)))])
          }
          ,
          this.removeIframe = () => {
            this.iframe && (this.iframe.remove(),
              this.iframe = void 0,
              this.initialized = !1)
          }
          ,
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.verifyUrl = ro,
          this.abortController = new AbortController,
          this.isDevEnv = eo() && eH.env.IS_VITEST
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      startAbortTimer(e) {
        return this.abortController = new AbortController,
          setTimeout(() => this.abortController.abort(), (0,
            E.toMiliseconds)(e))
      }
    }
    var rz = Object.defineProperty
      , rH = Object.getOwnPropertySymbols
      , rV = Object.prototype.hasOwnProperty
      , rK = Object.prototype.propertyIsEnumerable
      , rF = (e, t, r) => t in e ? rz(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , rB = (e, t) => {
        for (var r in t || (t = {}))
          rV.call(t, r) && rF(e, r, t[r]);
        if (rH)
          for (var r of rH(t))
            rK.call(t, r) && rF(e, r, t[r]);
        return e
      }
      ;
    class rG extends u {
      constructor(e) {
        super(e),
          this.protocol = "wc",
          this.version = 2,
          this.name = tY,
          this.events = new i.EventEmitter,
          this.initialized = !1,
          this.on = (e, t) => this.events.on(e, t),
          this.once = (e, t) => this.events.once(e, t),
          this.off = (e, t) => this.events.off(e, t),
          this.removeListener = (e, t) => this.events.removeListener(e, t),
          this.projectId = e?.projectId,
          this.relayUrl = e?.relayUrl || t3,
          this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        let t = "u" > typeof e?.logger && "string" != typeof e?.logger ? e.logger : (0,
          c.pino)((0,
            c.getDefaultLoggerOptions)({
              level: e?.logger || tX.logger
            }));
        this.logger = (0,
          c.generateChildLogger)(t, this.name),
          this.heartbeat = new a.HeartBeat,
          this.crypto = new rl(this, this.logger, e?.keychain),
          this.history = new rk(this, this.logger),
          this.expirer = new r$(this, this.logger),
          this.storage = null != e && e.storage ? e.storage : new o.ZP(rB(rB({}, t0), e?.storageOptions)),
          this.relayer = new rC({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
          }),
          this.pairing = new rU(this, this.logger),
          this.verify = new rM(this.projectId || "", this.logger)
      }
      static async init(e) {
        let t = new rG(e);
        await t.initialize();
        let r = await t.crypto.getClientId();
        return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r),
          t
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      async start() {
        this.initialized || await this.initialize()
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (e) {
          throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
          this.logger.error(e.message),
          e
        }
      }
    }
    class rW {
      constructor(e) {
        this.opts = e,
          this.protocol = "wc",
          this.version = 2
      }
    }
    class rJ {
      constructor(e) {
        this.client = e
      }
    }
    r(87338);
    var rQ = r(34155);
    function rY(e, t) {
      return e.includes(":") ? [e] : t.chains || []
    }
    function rZ(e) {
      let t = (0,
        D.vp)((0,
          L.mL)(e, "utf8"));
      return (0,
        L.BB)(t, "base16")
    }
    Object.prototype.hasOwnProperty,
      Object.prototype.propertyIsEnumerable;
    let rX = {
      reactNative: "react-native",
      node: "node",
      browser: "browser",
      unknown: "unknown"
    };
    function r0() {
      return "u" > typeof rQ && "u" > typeof rQ.versions && "u" > typeof rQ.versions.node
    }
    function r1() {
      return !r0() && !!(0,
        k.getNavigator)()
    }
    function r5(e, t) {
      return e.filter(e => t.includes(e)).length === e.length
    }
    function r6(e = E.FIVE_MINUTES, t) {
      let r, i, n;
      let s = (0,
        E.toMiliseconds)(e || E.FIVE_MINUTES);
      return {
        resolve: e => {
          n && r && (clearTimeout(n),
            r(e))
        }
        ,
        reject: e => {
          n && i && (clearTimeout(n),
            i(e))
        }
        ,
        done: () => new Promise((e, o) => {
          n = setTimeout(() => {
            o(Error(t))
          }
            , s),
            r = e,
            i = o
        }
        )
      }
    }
    function r3(e, t) {
      return (0,
        E.fromMiliseconds)((t || Date.now()) + (0,
          E.toMiliseconds)(e))
    }
    function r2(e) {
      return Date.now() >= (0,
        E.toMiliseconds)(e)
    }
    function r4(e, t) {
      return `${e}${t ? `:${t}` : ""}`
    }
    async function r8({ id: e, topic: t, wcDeepLink: i }) {
      try {
        if (!i)
          return;
        let n = "string" == typeof i ? JSON.parse(i) : i
          , s = n?.href;
        if ("string" != typeof s)
          return;
        s.endsWith("/") && (s = s.slice(0, -1));
        let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`
          , a = !(0,
            k.getDocument)() && (0,
              k.getNavigator)() && "ReactNative" === navigator.product ? rX.reactNative : r0() ? rX.node : r1() ? rX.browser : rX.unknown;
        a === rX.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === rX.reactNative && "u" > typeof (null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(o)
      } catch (e) {
        console.error(e)
      }
    }
    function r9(e) {
      let t = [];
      return e.forEach(e => {
        let [r, i] = e.split(":");
        t.push(`${r}:${i}`)
      }
      ),
        t
    }
    Object.prototype.hasOwnProperty,
      Object.prototype.propertyIsEnumerable,
      Object.prototype.hasOwnProperty,
      Object.prototype.propertyIsEnumerable;
    let r7 = {
      INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
      },
      INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
      },
      INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
      },
      INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
      },
      INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
      },
      UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
      },
      UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
      },
      UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
      },
      UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
      },
      USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
      },
      USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
      },
      USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
      },
      USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
      },
      UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
      },
      UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
      },
      UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
      },
      UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
      },
      UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
      },
      USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
      },
      SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
      },
      WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
      }
    }
      , ie = {
        NOT_INITIALIZED: {
          message: "Not initialized.",
          code: 1
        },
        NO_MATCHING_KEY: {
          message: "No matching key.",
          code: 2
        },
        RESTORE_WILL_OVERRIDE: {
          message: "Restore will override.",
          code: 3
        },
        RESUBSCRIBED: {
          message: "Resubscribed.",
          code: 4
        },
        MISSING_OR_INVALID: {
          message: "Missing or invalid.",
          code: 5
        },
        EXPIRED: {
          message: "Expired.",
          code: 6
        },
        UNKNOWN_TYPE: {
          message: "Unknown type.",
          code: 7
        },
        MISMATCHED_TOPIC: {
          message: "Mismatched topic.",
          code: 8
        },
        NON_CONFORMING_NAMESPACES: {
          message: "Non conforming namespaces.",
          code: 9
        }
      };
    function it(e, t) {
      let { message: r, code: i } = ie[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      }
    }
    function ir(e, t) {
      let { message: r, code: i } = r7[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      }
    }
    function ii(e, t) {
      return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
    }
    function is(e) {
      return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
    }
    function io(e) {
      return typeof e > "u"
    }
    function ia(e, t) {
      return !!(t && io(e)) || "string" == typeof e && !!e.trim().length
    }
    function ic(e, t) {
      return !!(t && io(e)) || "number" == typeof e && !isNaN(e)
    }
    function il(e) {
      return !!(ia(e, !1) && e.includes(":")) && 2 === e.split(":").length
    }
    function iu(e) {
      let t = !0;
      return ii(e) ? e.length && (t = e.every(e => ia(e, !1))) : t = !1,
        t
    }
    function ih(e, t) {
      let r = null;
      return Object.values(e).forEach(e => {
        var i;
        let n;
        if (r)
          return;
        let s = (i = `${t}, namespace`,
          n = null,
          iu(e?.methods) ? iu(e?.events) || (n = ir("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = ir("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`),
          n);
        s && (r = s)
      }
      ),
        r
    }
    function ip(e, t) {
      let r = null;
      if (e && is(e)) {
        let i;
        let n = ih(e, t);
        n && (r = n);
        let s = (i = null,
          Object.values(e).forEach(e => {
            var r, n;
            let s;
            if (i)
              return;
            let o = (r = e?.accounts,
              n = `${t} namespace`,
              s = null,
              ii(r) ? r.forEach(e => {
                s || function (e) {
                  if (ia(e, !1) && e.includes(":")) {
                    let t = e.split(":");
                    if (3 === t.length) {
                      let e = t[0] + ":" + t[1];
                      return !!t[2] && il(e)
                    }
                  }
                  return !1
                }(e) || (s = ir("UNSUPPORTED_ACCOUNTS", `${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
              }
              ) : s = ir("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
              s);
            o && (i = o)
          }
          ),
          i);
        s && (r = s)
      } else
        r = it("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
      return r
    }
    function id(e) {
      return ia(e.protocol, !0)
    }
    function ig(e) {
      return "u" > typeof e
    }
    function iy(e, t) {
      return !(!il(t) || !(function (e) {
        let t = [];
        return Object.values(e).forEach(e => {
          t.push(...r9(e.accounts))
        }
        ),
          t
      }
      )(e).includes(t))
    }
    function iv(e, t, r) {
      let i = null
        , n = function (e) {
          let t = {};
          return Object.keys(e).forEach(r => {
            var i;
            r.includes(":") ? t[r] = e[r] : null == (i = e[r].chains) || i.forEach(i => {
              t[i] = {
                methods: e[r].methods,
                events: e[r].events
              }
            }
            )
          }
          ),
            t
        }(e)
        , s = function (e) {
          let t = {};
          return Object.keys(e).forEach(r => {
            if (r.includes(":"))
              t[r] = e[r];
            else {
              let i = r9(e[r].accounts);
              i?.forEach(i => {
                t[i] = {
                  accounts: e[r].accounts.filter(e => e.includes(`${i}:`)),
                  methods: e[r].methods,
                  events: e[r].events
                }
              }
              )
            }
          }
          ),
            t
        }(t)
        , o = Object.keys(n)
        , a = Object.keys(s)
        , c = im(Object.keys(e))
        , l = im(Object.keys(t))
        , u = c.filter(e => !l.includes(e));
      return u.length && (i = it("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
    Required: ${u.toString()}
    Received: ${Object.keys(t).toString()}`)),
        r5(o, a) || (i = it("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
    Required: ${o.toString()}
    Approved: ${a.toString()}`)),
        Object.keys(t).forEach(e => {
          if (!e.includes(":") || i)
            return;
          let n = r9(t[e].accounts);
          n.includes(e) || (i = it("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}
      Required: ${e}
      Approved: ${n.toString()}`))
        }
        ),
        o.forEach(e => {
          i || (r5(n[e].methods, s[e].methods) ? r5(n[e].events, s[e].events) || (i = it("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : i = it("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
        }
        ),
        i
    }
    function im(e) {
      return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
    }
    let i_ = {};
    class ib {
      static get(e) {
        return i_[e]
      }
      static set(e, t) {
        i_[e] = t
      }
      static delete(e) {
        delete i_[e]
      }
    }
    let iw = "client"
      , iE = `wc@2:${iw}:`
      , iI = {
        name: iw,
        logger: "error",
        controller: !1,
        relayUrl: "wss://relay.walletconnect.com"
      }
      , iS = "WALLETCONNECT_DEEPLINK_CHOICE"
      , iP = "Proposal expired"
      , iO = E.SEVEN_DAYS
      , iN = {
        wc_sessionPropose: {
          req: {
            ttl: E.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
          },
          res: {
            ttl: E.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
          }
        },
        wc_sessionSettle: {
          req: {
            ttl: E.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
          },
          res: {
            ttl: E.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
          }
        },
        wc_sessionUpdate: {
          req: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1104
          },
          res: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1105
          }
        },
        wc_sessionExtend: {
          req: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1106
          },
          res: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1107
          }
        },
        wc_sessionRequest: {
          req: {
            ttl: E.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
          },
          res: {
            ttl: E.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
          }
        },
        wc_sessionEvent: {
          req: {
            ttl: E.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
          },
          res: {
            ttl: E.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
          }
        },
        wc_sessionDelete: {
          req: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1112
          },
          res: {
            ttl: E.ONE_DAY,
            prompt: !1,
            tag: 1113
          }
        },
        wc_sessionPing: {
          req: {
            ttl: E.THIRTY_SECONDS,
            prompt: !1,
            tag: 1114
          },
          res: {
            ttl: E.THIRTY_SECONDS,
            prompt: !1,
            tag: 1115
          }
        }
      }
      , iR = {
        min: E.FIVE_MINUTES,
        max: E.SEVEN_DAYS
      }
      , iC = {
        idle: "IDLE",
        active: "ACTIVE"
      }
      , iA = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
    var ix = Object.defineProperty
      , iT = Object.defineProperties
      , ij = Object.getOwnPropertyDescriptors
      , iD = Object.getOwnPropertySymbols
      , iq = Object.prototype.hasOwnProperty
      , iL = Object.prototype.propertyIsEnumerable
      , iU = (e, t, r) => t in e ? ix(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , ik = (e, t) => {
        for (var r in t || (t = {}))
          iq.call(t, r) && iU(e, r, t[r]);
        if (iD)
          for (var r of iD(t))
            iL.call(t, r) && iU(e, r, t[r]);
        return e
      }
      , i$ = (e, t) => iT(e, ij(t));
    class iM extends rJ {
      constructor(e) {
        super(e),
          this.name = "engine",
          this.events = new (n()),
          this.initialized = !1,
          this.ignoredPayloadTypes = [1],
          this.requestQueue = {
            state: iC.idle,
            queue: []
          },
          this.sessionRequestQueue = {
            state: iC.idle,
            queue: []
          },
          this.requestQueueDelay = E.ONE_SECOND,
          this.init = async () => {
            this.initialized || (await this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              this.registerPairingEvents(),
              this.client.core.pairing.register({
                methods: Object.keys(iN)
              }),
              this.initialized = !0,
              setTimeout(() => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                  this.processSessionRequestQueue()
              }
                , (0,
                  E.toMiliseconds)(this.requestQueueDelay)))
          }
          ,
          this.connect = async e => {
            await this.isInitialized();
            let t = i$(ik({}, e), {
              requiredNamespaces: e.requiredNamespaces || {},
              optionalNamespaces: e.optionalNamespaces || {}
            });
            await this.isValidConnect(t);
            let { pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: s, relays: o } = t, a = r, c, l = !1;
            if (a && (l = this.client.core.pairing.pairings.get(a).active),
              !a || !l) {
              let { topic: e, uri: t } = await this.client.core.pairing.create();
              a = e,
                c = t
            }
            let u = await this.client.core.crypto.generateKeyPair()
              , h = ik({
                requiredNamespaces: i,
                optionalNamespaces: n,
                relays: o ?? [{
                  protocol: "irn"
                }],
                proposer: {
                  publicKey: u,
                  metadata: this.client.metadata
                }
              }, s && {
                sessionProperties: s
              })
              , { reject: p, resolve: f, done: d } = r6(E.FIVE_MINUTES, iP);
            if (this.events.once(r4("session_connect"), async ({ error: e, session: t }) => {
              if (e)
                p(e);
              else if (t) {
                t.self.publicKey = u;
                let e = i$(ik({}, t), {
                  requiredNamespaces: t.requiredNamespaces,
                  optionalNamespaces: t.optionalNamespaces
                });
                await this.client.session.set(t.topic, e),
                  await this.setExpiry(t.topic, t.expiry),
                  a && await this.client.core.pairing.updateMetadata({
                    topic: a,
                    metadata: t.peer.metadata
                  }),
                  f(e)
              }
            }
            ),
              !a) {
              let { message: e } = it("NO_MATCHING_KEY", `connect() pairing topic: ${a}`);
              throw Error(e)
            }
            let g = await this.sendRequest({
              topic: a,
              method: "wc_sessionPropose",
              params: h
            })
              , y = r3(E.FIVE_MINUTES);
            return await this.setProposal(g, ik({
              id: g,
              expiry: y
            }, h)),
            {
              uri: c,
              approval: d
            }
          }
          ,
          this.pair = async e => (await this.isInitialized(),
            await this.client.core.pairing.pair(e)),
          this.approve = async e => {
            await this.isInitialized(),
              await this.isValidApprove(e);
            let { id: t, relayProtocol: r, namespaces: i, sessionProperties: n } = e
              , s = this.client.proposal.get(t)
              , { pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: l } = s;
            o = o || "",
              is(c) || (c = function (e, t) {
                let r = ip(e, t);
                if (r)
                  throw Error(r.message);
                let i = {};
                for (let [t, r] of Object.entries(e))
                  i[t] = {
                    methods: r.methods,
                    events: r.events,
                    chains: r.accounts.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
                  };
                return i
              }(i, "approve()"));
            let u = await this.client.core.crypto.generateKeyPair()
              , h = a.publicKey
              , p = await this.client.core.crypto.generateSharedKey(u, h);
            o && t && (await this.client.core.pairing.updateMetadata({
              topic: o,
              metadata: a.metadata
            }),
              await this.sendResult({
                id: t,
                topic: o,
                result: {
                  relay: {
                    protocol: r ?? "irn"
                  },
                  responderPublicKey: u
                }
              }),
              await this.client.proposal.delete(t, ir("USER_DISCONNECTED")),
              await this.client.core.pairing.activate({
                topic: o
              }));
            let f = ik({
              relay: {
                protocol: r ?? "irn"
              },
              namespaces: i,
              requiredNamespaces: c,
              optionalNamespaces: l,
              pairingTopic: o,
              controller: {
                publicKey: u,
                metadata: this.client.metadata
              },
              expiry: r3(iO)
            }, n && {
              sessionProperties: n
            });
            await this.client.core.relayer.subscribe(p),
              await this.sendRequest({
                topic: p,
                method: "wc_sessionSettle",
                params: f,
                throwOnFailedPublish: !0
              });
            let d = i$(ik({}, f), {
              topic: p,
              pairingTopic: o,
              acknowledged: !1,
              self: f.controller,
              peer: {
                publicKey: a.publicKey,
                metadata: a.metadata
              },
              controller: u
            });
            return await this.client.session.set(p, d),
              await this.setExpiry(p, r3(iO)),
            {
              topic: p,
              acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(p)), 500))
            }
          }
          ,
          this.reject = async e => {
            await this.isInitialized(),
              await this.isValidReject(e);
            let { id: t, reason: r } = e
              , { pairingTopic: i } = this.client.proposal.get(t);
            i && (await this.sendError(t, i, r),
              await this.client.proposal.delete(t, ir("USER_DISCONNECTED")))
          }
          ,
          this.update = async e => {
            await this.isInitialized(),
              await this.isValidUpdate(e);
            let { topic: t, namespaces: r } = e
              , i = await this.sendRequest({
                topic: t,
                method: "wc_sessionUpdate",
                params: {
                  namespaces: r
                }
              })
              , { done: n, resolve: s, reject: o } = r6();
            return this.events.once(r4("session_update", i), ({ error: e }) => {
              e ? o(e) : s()
            }
            ),
              await this.client.session.update(t, {
                namespaces: r
              }),
            {
              acknowledged: n
            }
          }
          ,
          this.extend = async e => {
            await this.isInitialized(),
              await this.isValidExtend(e);
            let { topic: t } = e
              , r = await this.sendRequest({
                topic: t,
                method: "wc_sessionExtend",
                params: {}
              })
              , { done: i, resolve: n, reject: s } = r6();
            return this.events.once(r4("session_extend", r), ({ error: e }) => {
              e ? s(e) : n()
            }
            ),
              await this.setExpiry(t, r3(iO)),
            {
              acknowledged: i
            }
          }
          ,
          this.request = async e => {
            await this.isInitialized(),
              await this.isValidRequest(e);
            let { chainId: t, request: r, topic: i, expiry: n } = e
              , s = (0,
                eq.payloadId)()
              , { done: o, resolve: a, reject: c } = r6(n, "Request expired. Please try again.");
            return this.events.once(r4("session_request", s), ({ error: e, result: t }) => {
              e ? c(e) : a(t)
            }
            ),
              await Promise.all([new Promise(async e => {
                await this.sendRequest({
                  clientRpcId: s,
                  topic: i,
                  method: "wc_sessionRequest",
                  params: {
                    request: r,
                    chainId: t
                  },
                  expiry: n,
                  throwOnFailedPublish: !0
                }).catch(e => c(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: s
                  }),
                  e()
              }
              ), new Promise(async e => {
                let t = await this.client.core.storage.getItem(iS);
                r8({
                  id: s,
                  topic: i,
                  wcDeepLink: t
                }),
                  e()
              }
              ), o()]).then(e => e[2])
          }
          ,
          this.respond = async e => {
            await this.isInitialized(),
              await this.isValidRespond(e);
            let { topic: t, response: r } = e
              , { id: i } = r;
            (0,
              eq.isJsonRpcResult)(r) ? await this.sendResult({
                id: i,
                topic: t,
                result: r.result,
                throwOnFailedPublish: !0
              }) : (0,
                eq.isJsonRpcError)(r) && await this.sendError(i, t, r.error),
              this.cleanupAfterResponse(e)
          }
          ,
          this.ping = async e => {
            await this.isInitialized(),
              await this.isValidPing(e);
            let { topic: t } = e;
            if (this.client.session.keys.includes(t)) {
              let e = await this.sendRequest({
                topic: t,
                method: "wc_sessionPing",
                params: {}
              })
                , { done: r, resolve: i, reject: n } = r6();
              this.events.once(r4("session_ping", e), ({ error: e }) => {
                e ? n(e) : i()
              }
              ),
                await r()
            } else
              this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                topic: t
              })
          }
          ,
          this.emit = async e => {
            await this.isInitialized(),
              await this.isValidEmit(e);
            let { topic: t, event: r, chainId: i } = e;
            await this.sendRequest({
              topic: t,
              method: "wc_sessionEvent",
              params: {
                event: r,
                chainId: i
              }
            })
          }
          ,
          this.disconnect = async e => {
            await this.isInitialized(),
              await this.isValidDisconnect(e);
            let { topic: t } = e;
            this.client.session.keys.includes(t) ? (await this.sendRequest({
              topic: t,
              method: "wc_sessionDelete",
              params: ir("USER_DISCONNECTED"),
              throwOnFailedPublish: !0
            }),
              await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                topic: t
              })
          }
          ,
          this.find = e => (this.isInitialized(),
            this.client.session.getAll().filter(t => (function (e, t) {
              let { requiredNamespaces: r } = t
                , i = Object.keys(e.namespaces)
                , n = Object.keys(r)
                , s = !0;
              return !!r5(n, i) && (i.forEach(t => {
                let { accounts: i, methods: n, events: o } = e.namespaces[t]
                  , a = r9(i)
                  , c = r[t];
                r5(rY(t, c), a) && r5(c.methods, n) && r5(c.events, o) || (s = !1)
              }
              ),
                s)
            }
            )(t, e))),
          this.getPendingSessionRequests = () => (this.isInitialized(),
            this.client.pendingRequest.getAll()),
          this.cleanupDuplicatePairings = async e => {
            if (e.pairingTopic)
              try {
                let t = this.client.core.pairing.pairings.get(e.pairingTopic)
                  , r = this.client.core.pairing.pairings.getAll().filter(r => {
                    var i, n;
                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                  }
                  );
                if (0 === r.length)
                  return;
                this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),
                  await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                    topic: e.topic
                  }))),
                  this.client.logger.info("Duplicate pairings clean up finished")
              } catch (e) {
                this.client.logger.error(e)
              }
          }
          ,
          this.deleteSession = async (e, t) => {
            let { self: r } = this.client.session.get(e);
            await this.client.core.relayer.unsubscribe(e),
              this.client.session.delete(e, ir("USER_DISCONNECTED")),
              this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey),
              this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e),
              t || this.client.core.expirer.del(e),
              this.client.core.storage.removeItem(iS).catch(e => this.client.logger.warn(e))
          }
          ,
          this.deleteProposal = async (e, t) => {
            await Promise.all([this.client.proposal.delete(e, ir("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
          }
          ,
          this.deletePendingSessionRequest = async (e, t, r = !1) => {
            await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]),
              this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e),
              r && (this.sessionRequestQueue.state = iC.idle)
          }
          ,
          this.setExpiry = async (e, t) => {
            this.client.session.keys.includes(e) && await this.client.session.update(e, {
              expiry: t
            }),
              this.client.core.expirer.set(e, t)
          }
          ,
          this.setProposal = async (e, t) => {
            await this.client.proposal.set(e, t),
              this.client.core.expirer.set(e, t.expiry)
          }
          ,
          this.setPendingSessionRequest = async e => {
            let t = iN.wc_sessionRequest.req.ttl
              , { id: r, topic: i, params: n, verifyContext: s } = e;
            await this.client.pendingRequest.set(r, {
              id: r,
              topic: i,
              params: n,
              verifyContext: s
            }),
              t && this.client.core.expirer.set(r, r3(t))
          }
          ,
          this.sendRequest = async e => {
            let { topic: t, method: r, params: i, expiry: n, relayRpcId: s, clientRpcId: o, throwOnFailedPublish: a } = e
              , c = (0,
                eq.formatJsonRpcRequest)(r, i, o);
            if (r1() && iA.includes(r)) {
              let e = rZ(JSON.stringify(c));
              this.client.core.verify.register({
                attestationId: e
              })
            }
            let l = await this.client.core.crypto.encode(t, c)
              , u = iN[r].req;
            return n && (u.ttl = n),
              s && (u.id = s),
              this.client.core.history.set(t, c),
              a ? (u.internal = i$(ik({}, u.internal), {
                throwOnFailedPublish: !0
              }),
                await this.client.core.relayer.publish(t, l, u)) : this.client.core.relayer.publish(t, l, u).catch(e => this.client.logger.error(e)),
              c.id
          }
          ,
          this.sendResult = async e => {
            let { id: t, topic: r, result: i, throwOnFailedPublish: n } = e
              , s = (0,
                eq.formatJsonRpcResult)(t, i)
              , o = await this.client.core.crypto.encode(r, s)
              , a = await this.client.core.history.get(r, t)
              , c = iN[a.request.method].res;
            n ? (c.internal = i$(ik({}, c.internal), {
              throwOnFailedPublish: !0
            }),
              await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch(e => this.client.logger.error(e)),
              await this.client.core.history.resolve(s)
          }
          ,
          this.sendError = async (e, t, r) => {
            let i = (0,
              eq.formatJsonRpcError)(e, r)
              , n = await this.client.core.crypto.encode(t, i)
              , s = await this.client.core.history.get(t, e)
              , o = iN[s.request.method].res;
            this.client.core.relayer.publish(t, n, o),
              await this.client.core.history.resolve(i)
          }
          ,
          this.cleanup = async () => {
            let e = []
              , t = [];
            this.client.session.getAll().forEach(t => {
              r2(t.expiry) && e.push(t.topic)
            }
            ),
              this.client.proposal.getAll().forEach(e => {
                r2(e.expiry) && t.push(e.id)
              }
              ),
              await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
          }
          ,
          this.onRelayEventRequest = async e => {
            this.requestQueue.queue.push(e),
              await this.processRequestsQueue()
          }
          ,
          this.processRequestsQueue = async () => {
            if (this.requestQueue.state === iC.active) {
              this.client.logger.info("Request queue already active, skipping...");
              return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
              this.requestQueue.state = iC.active;
              let e = this.requestQueue.queue.shift();
              if (e)
                try {
                  this.processRequest(e),
                    await new Promise(e => setTimeout(e, 300))
                } catch (e) {
                  this.client.logger.warn(e)
                }
            }
            this.requestQueue.state = iC.idle
          }
          ,
          this.processRequest = e => {
            let { topic: t, payload: r } = e
              , i = r.method;
            switch (i) {
              case "wc_sessionPropose":
                return this.onSessionProposeRequest(t, r);
              case "wc_sessionSettle":
                return this.onSessionSettleRequest(t, r);
              case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(t, r);
              case "wc_sessionExtend":
                return this.onSessionExtendRequest(t, r);
              case "wc_sessionPing":
                return this.onSessionPingRequest(t, r);
              case "wc_sessionDelete":
                return this.onSessionDeleteRequest(t, r);
              case "wc_sessionRequest":
                return this.onSessionRequest(t, r);
              case "wc_sessionEvent":
                return this.onSessionEventRequest(t, r);
              default:
                return this.client.logger.info(`Unsupported request method ${i}`)
            }
          }
          ,
          this.onRelayEventResponse = async e => {
            let { topic: t, payload: r } = e
              , i = (await this.client.core.history.get(t, r.id)).request.method;
            switch (i) {
              case "wc_sessionPropose":
                return this.onSessionProposeResponse(t, r);
              case "wc_sessionSettle":
                return this.onSessionSettleResponse(t, r);
              case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(t, r);
              case "wc_sessionExtend":
                return this.onSessionExtendResponse(t, r);
              case "wc_sessionPing":
                return this.onSessionPingResponse(t, r);
              case "wc_sessionRequest":
                return this.onSessionRequestResponse(t, r);
              default:
                return this.client.logger.info(`Unsupported response method ${i}`)
            }
          }
          ,
          this.onRelayEventUnknownPayload = e => {
            let { topic: t } = e
              , { message: r } = it("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
            throw Error(r)
          }
          ,
          this.onSessionProposeRequest = async (e, t) => {
            let { params: r, id: i } = t;
            try {
              this.isValidConnect(ik({}, t.params));
              let n = r3(E.FIVE_MINUTES)
                , s = ik({
                  id: i,
                  pairingTopic: e,
                  expiry: n
                }, r);
              await this.setProposal(i, s);
              let o = rZ(JSON.stringify(t))
                , a = await this.getVerifyContext(o, s.proposer.metadata);
              this.client.events.emit("session_proposal", {
                id: i,
                params: s,
                verifyContext: a
              })
            } catch (t) {
              await this.sendError(i, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.onSessionProposeResponse = async (e, t) => {
            let { id: r } = t;
            if ((0,
              eq.isJsonRpcResult)(t)) {
              let { result: i } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                result: i
              });
              let n = this.client.proposal.get(r);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                proposal: n
              });
              let s = n.proposer.publicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                selfPublicKey: s
              });
              let o = i.responderPublicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                peerPublicKey: o
              });
              let a = await this.client.core.crypto.generateSharedKey(s, o);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                sessionTopic: a
              });
              let c = await this.client.core.relayer.subscribe(a);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                subscriptionId: c
              }),
                await this.client.core.pairing.activate({
                  topic: e
                })
            } else
              (0,
                eq.isJsonRpcError)(t) && (await this.client.proposal.delete(r, ir("USER_DISCONNECTED")),
                  this.events.emit(r4("session_connect"), {
                    error: t.error
                  }))
          }
          ,
          this.onSessionSettleRequest = async (e, t) => {
            let { id: r, params: i } = t;
            try {
              this.isValidSessionSettleRequest(i);
              let { relay: r, controller: n, expiry: s, namespaces: o, requiredNamespaces: a, optionalNamespaces: c, sessionProperties: l, pairingTopic: u } = t.params
                , h = ik({
                  topic: e,
                  relay: r,
                  expiry: s,
                  namespaces: o,
                  acknowledged: !0,
                  pairingTopic: u,
                  requiredNamespaces: a,
                  optionalNamespaces: c,
                  controller: n.publicKey,
                  self: {
                    publicKey: "",
                    metadata: this.client.metadata
                  },
                  peer: {
                    publicKey: n.publicKey,
                    metadata: n.metadata
                  }
                }, l && {
                  sessionProperties: l
                });
              await this.sendResult({
                id: t.id,
                topic: e,
                result: !0
              }),
                this.events.emit(r4("session_connect"), {
                  session: h
                }),
                this.cleanupDuplicatePairings(h)
            } catch (t) {
              await this.sendError(r, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.onSessionSettleResponse = async (e, t) => {
            let { id: r } = t;
            (0,
              eq.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                acknowledged: !0
              }),
                this.events.emit(r4("session_approve", r), {})) : (0,
                  eq.isJsonRpcError)(t) && (await this.client.session.delete(e, ir("USER_DISCONNECTED")),
                    this.events.emit(r4("session_approve", r), {
                      error: t.error
                    }))
          }
          ,
          this.onSessionUpdateRequest = async (e, t) => {
            let { params: r, id: i } = t;
            try {
              let t = `${e}_session_update`
                , n = ib.get(t);
              if (n && this.isRequestOutOfSync(n, i)) {
                this.client.logger.info(`Discarding out of sync request - ${i}`);
                return
              }
              this.isValidUpdate(ik({
                topic: e
              }, r)),
                await this.client.session.update(e, {
                  namespaces: r.namespaces
                }),
                await this.sendResult({
                  id: i,
                  topic: e,
                  result: !0
                }),
                this.client.events.emit("session_update", {
                  id: i,
                  topic: e,
                  params: r
                }),
                ib.set(t, i)
            } catch (t) {
              await this.sendError(i, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)),
          this.onSessionUpdateResponse = (e, t) => {
            let { id: r } = t;
            (0,
              eq.isJsonRpcResult)(t) ? this.events.emit(r4("session_update", r), {}) : (0,
                eq.isJsonRpcError)(t) && this.events.emit(r4("session_update", r), {
                  error: t.error
                })
          }
          ,
          this.onSessionExtendRequest = async (e, t) => {
            let { id: r } = t;
            try {
              this.isValidExtend({
                topic: e
              }),
                await this.setExpiry(e, r3(iO)),
                await this.sendResult({
                  id: r,
                  topic: e,
                  result: !0
                }),
                this.client.events.emit("session_extend", {
                  id: r,
                  topic: e
                })
            } catch (t) {
              await this.sendError(r, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.onSessionExtendResponse = (e, t) => {
            let { id: r } = t;
            (0,
              eq.isJsonRpcResult)(t) ? this.events.emit(r4("session_extend", r), {}) : (0,
                eq.isJsonRpcError)(t) && this.events.emit(r4("session_extend", r), {
                  error: t.error
                })
          }
          ,
          this.onSessionPingRequest = async (e, t) => {
            let { id: r } = t;
            try {
              this.isValidPing({
                topic: e
              }),
                await this.sendResult({
                  id: r,
                  topic: e,
                  result: !0
                }),
                this.client.events.emit("session_ping", {
                  id: r,
                  topic: e
                })
            } catch (t) {
              await this.sendError(r, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.onSessionPingResponse = (e, t) => {
            let { id: r } = t;
            setTimeout(() => {
              (0,
                eq.isJsonRpcResult)(t) ? this.events.emit(r4("session_ping", r), {}) : (0,
                  eq.isJsonRpcError)(t) && this.events.emit(r4("session_ping", r), {
                    error: t.error
                  })
            }
              , 500)
          }
          ,
          this.onSessionDeleteRequest = async (e, t) => {
            let { id: r } = t;
            try {
              this.isValidDisconnect({
                topic: e,
                reason: t.params
              }),
                await Promise.all([new Promise(t => {
                  this.client.core.relayer.once(t4.publish, async () => {
                    t(await this.deleteSession(e))
                  }
                  )
                }
                ), this.sendResult({
                  id: r,
                  topic: e,
                  result: !0
                })]),
                this.client.events.emit("session_delete", {
                  id: r,
                  topic: e
                })
            } catch (e) {
              this.client.logger.error(e)
            }
          }
          ,
          this.onSessionRequest = async (e, t) => {
            let { id: r, params: i } = t;
            try {
              this.isValidRequest(ik({
                topic: e
              }, i));
              let t = rZ(JSON.stringify((0,
                eq.formatJsonRpcRequest)("wc_sessionRequest", i, r)))
                , n = this.client.session.get(e)
                , s = await this.getVerifyContext(t, n.peer.metadata)
                , o = {
                  id: r,
                  topic: e,
                  params: i,
                  verifyContext: s
                };
              await this.setPendingSessionRequest(o),
                this.addSessionRequestToSessionRequestQueue(o),
                this.processSessionRequestQueue()
            } catch (t) {
              await this.sendError(r, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.onSessionRequestResponse = (e, t) => {
            let { id: r } = t;
            (0,
              eq.isJsonRpcResult)(t) ? this.events.emit(r4("session_request", r), {
                result: t.result
              }) : (0,
                eq.isJsonRpcError)(t) && this.events.emit(r4("session_request", r), {
                  error: t.error
                })
          }
          ,
          this.onSessionEventRequest = async (e, t) => {
            let { id: r, params: i } = t;
            try {
              let t = `${e}_session_event_ ${i.event.name}`
                , n = ib.get(t);
              if (n && this.isRequestOutOfSync(n, r)) {
                this.client.logger.info(`Discarding out of sync request - ${r}`);
                return
              }
              this.isValidEmit(ik({
                topic: e
              }, i)),
                this.client.events.emit("session_event", {
                  id: r,
                  topic: e,
                  params: i
                }),
                ib.set(t, r)
            } catch (t) {
              await this.sendError(r, e, t),
                this.client.logger.error(t)
            }
          }
          ,
          this.addSessionRequestToSessionRequestQueue = e => {
            this.sessionRequestQueue.queue.push(e)
          }
          ,
          this.cleanupAfterResponse = e => {
            this.deletePendingSessionRequest(e.response.id, {
              message: "fulfilled",
              code: 0
            }),
              setTimeout(() => {
                this.sessionRequestQueue.state = iC.idle,
                  this.processSessionRequestQueue()
              }
                , (0,
                  E.toMiliseconds)(this.requestQueueDelay))
          }
          ,
          this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === iC.active) {
              this.client.logger.info("session request queue is already active.");
              return
            }
            let e = this.sessionRequestQueue.queue[0];
            if (!e) {
              this.client.logger.info("session request queue is empty.");
              return
            }
            try {
              this.sessionRequestQueue.state = iC.active,
                this.client.events.emit("session_request", e)
            } catch (e) {
              this.client.logger.error(e)
            }
          }
          ,
          this.onPairingCreated = e => {
            if (e.active)
              return;
            let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
            t && this.onSessionProposeRequest(e.topic, (0,
              eq.formatJsonRpcRequest)("wc_sessionPropose", {
                requiredNamespaces: t.requiredNamespaces,
                optionalNamespaces: t.optionalNamespaces,
                relays: t.relays,
                proposer: t.proposer
              }, t.id))
          }
          ,
          this.isValidConnect = async e => {
            let t;
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
              throw Error(t)
            }
            let { pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: s, relays: o } = e;
            if (io(r) || await this.isValidPairingTopic(r),
              t = !1,
              o ? o && ii(o) && o.length && o.forEach(e => {
                t = id(e)
              }
              ) : t = !0,
              !t) {
              let { message: e } = it("MISSING_OR_INVALID", `connect() relays: ${o}`);
              throw Error(e)
            }
            io(i) || 0 === is(i) || this.validateNamespaces(i, "requiredNamespaces"),
              io(n) || 0 === is(n) || this.validateNamespaces(n, "optionalNamespaces"),
              io(s) || this.validateSessionProps(s, "sessionProperties")
          }
          ,
          this.validateNamespaces = (e, t) => {
            let r = function (e, t, r) {
              let i = null;
              if (e && is(e)) {
                let n;
                let s = ih(e, t);
                s && (i = s);
                let o = (n = null,
                  Object.entries(e).forEach(([e, i]) => {
                    var s, o;
                    let a;
                    if (n)
                      return;
                    let c = (s = rY(e, i),
                      o = `${t} ${r}`,
                      a = null,
                      ii(s) && s.length ? s.forEach(e => {
                        a || il(e) || (a = ir("UNSUPPORTED_CHAINS", `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                      }
                      ) : il(e) || (a = ir("UNSUPPORTED_CHAINS", `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
                      a);
                    c && (n = c)
                  }
                  ),
                  n);
                o && (i = o)
              } else
                i = it("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
              return i
            }(e, "connect()", t);
            if (r)
              throw Error(r.message)
          }
          ,
          this.isValidApprove = async e => {
            if (!ig(e))
              throw Error(it("MISSING_OR_INVALID", `approve() params: ${e}`).message);
            let { id: t, namespaces: r, relayProtocol: i, sessionProperties: n } = e;
            await this.isValidProposalId(t);
            let s = this.client.proposal.get(t)
              , o = ip(r, "approve()");
            if (o)
              throw Error(o.message);
            let a = iv(s.requiredNamespaces, r, "approve()");
            if (a)
              throw Error(a.message);
            if (!ia(i, !0)) {
              let { message: e } = it("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
              throw Error(e)
            }
            io(n) || this.validateSessionProps(n, "sessionProperties")
          }
          ,
          this.isValidReject = async e => {
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `reject() params: ${e}`);
              throw Error(t)
            }
            let { id: t, reason: r } = e;
            if (await this.isValidProposalId(t),
              !r || "object" != typeof r || !r.code || !ic(r.code, !1) || !r.message || !ia(r.message, !1)) {
              let { message: e } = it("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
              throw Error(e)
            }
          }
          ,
          this.isValidSessionSettleRequest = e => {
            let t;
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
              throw Error(t)
            }
            let { relay: r, controller: i, namespaces: n, expiry: s } = e;
            if (!id(r)) {
              let { message: e } = it("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
              throw Error(e)
            }
            let o = (t = null,
              ia(i?.publicKey, !1) || (t = it("MISSING_OR_INVALID", "onSessionSettleRequest() controller public key should be a string")),
              t);
            if (o)
              throw Error(o.message);
            let a = ip(n, "onSessionSettleRequest()");
            if (a)
              throw Error(a.message);
            if (r2(s)) {
              let { message: e } = it("EXPIRED", "onSessionSettleRequest()");
              throw Error(e)
            }
          }
          ,
          this.isValidUpdate = async e => {
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `update() params: ${e}`);
              throw Error(t)
            }
            let { topic: t, namespaces: r } = e;
            await this.isValidSessionTopic(t);
            let i = this.client.session.get(t)
              , n = ip(r, "update()");
            if (n)
              throw Error(n.message);
            let s = iv(i.requiredNamespaces, r, "update()");
            if (s)
              throw Error(s.message)
          }
          ,
          this.isValidExtend = async e => {
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `extend() params: ${e}`);
              throw Error(t)
            }
            let { topic: t } = e;
            await this.isValidSessionTopic(t)
          }
          ,
          this.isValidRequest = async e => {
            var t;
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `request() params: ${e}`);
              throw Error(t)
            }
            let { topic: r, request: i, chainId: n, expiry: s } = e;
            await this.isValidSessionTopic(r);
            let { namespaces: o } = this.client.session.get(r);
            if (!iy(o, n)) {
              let { message: e } = it("MISSING_OR_INVALID", `request() chainId: ${n}`);
              throw Error(e)
            }
            if (io(i) || !ia(i.method, !1)) {
              let { message: e } = it("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
              throw Error(e)
            }
            if (!(ia(t = i.method, !1) && (function (e, t) {
              let r = [];
              return Object.values(e).forEach(e => {
                r9(e.accounts).includes(t) && r.push(...e.methods)
              }
              ),
                r
            }
            )(o, n).includes(t))) {
              let { message: e } = it("MISSING_OR_INVALID", `request() method: ${i.method}`);
              throw Error(e)
            }
            if (s && (!ic(s, !1) || !(s <= iR.max) || !(s >= iR.min))) {
              let { message: e } = it("MISSING_OR_INVALID", `request() expiry: ${s}. Expiry must be a number (in seconds) between ${iR.min} and ${iR.max}`);
              throw Error(e)
            }
          }
          ,
          this.isValidRespond = async e => {
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `respond() params: ${e}`);
              throw Error(t)
            }
            let { topic: t, response: r } = e;
            if (await this.isValidSessionTopic(t),
              io(r) || io(r.result) && io(r.error) || !ic(r.id, !1) || !ia(r.jsonrpc, !1)) {
              let { message: e } = it("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
              throw Error(e)
            }
          }
          ,
          this.isValidPing = async e => {
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `ping() params: ${e}`);
              throw Error(t)
            }
            let { topic: t } = e;
            await this.isValidSessionOrPairingTopic(t)
          }
          ,
          this.isValidEmit = async e => {
            var t;
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `emit() params: ${e}`);
              throw Error(t)
            }
            let { topic: r, event: i, chainId: n } = e;
            await this.isValidSessionTopic(r);
            let { namespaces: s } = this.client.session.get(r);
            if (!iy(s, n)) {
              let { message: e } = it("MISSING_OR_INVALID", `emit() chainId: ${n}`);
              throw Error(e)
            }
            if (io(i) || !ia(i.name, !1)) {
              let { message: e } = it("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
              throw Error(e)
            }
            if (!(ia(t = i.name, !1) && (function (e, t) {
              let r = [];
              return Object.values(e).forEach(e => {
                r9(e.accounts).includes(t) && r.push(...e.events)
              }
              ),
                r
            }
            )(s, n).includes(t))) {
              let { message: e } = it("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
              throw Error(e)
            }
          }
          ,
          this.isValidDisconnect = async e => {
            if (!ig(e)) {
              let { message: t } = it("MISSING_OR_INVALID", `disconnect() params: ${e}`);
              throw Error(t)
            }
            let { topic: t } = e;
            await this.isValidSessionOrPairingTopic(t)
          }
          ,
          this.getVerifyContext = async (e, t) => {
            let r = {
              verified: {
                verifyUrl: t.verifyUrl || ro,
                validation: "UNKNOWN",
                origin: t.url || ""
              }
            };
            try {
              let i = await this.client.core.verify.resolve({
                attestationId: e,
                verifyUrl: t.verifyUrl
              });
              i && (r.verified.origin = i.origin,
                r.verified.isScam = i.isScam,
                r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
            } catch (e) {
              this.client.logger.info(e)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
              r
          }
          ,
          this.validateSessionProps = (e, t) => {
            Object.values(e).forEach(e => {
              if (!ia(e, !1)) {
                let { message: r } = it("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                throw Error(r)
              }
            }
            )
          }
      }
      async isInitialized() {
        if (!this.initialized) {
          let { message: e } = it("NOT_INITIALIZED", this.name);
          throw Error(e)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
      }
      registerRelayerEvents() {
        this.client.core.relayer.on(t4.message, async e => {
          let { topic: t, message: r } = e;
          if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r)))
            return;
          let i = await this.client.core.crypto.decode(t, r);
          try {
            (0,
              eq.isJsonRpcRequest)(i) ? (this.client.core.history.set(t, i),
                this.onRelayEventRequest({
                  topic: t,
                  payload: i
                })) : (0,
                  eq.isJsonRpcResponse)(i) ? (await this.client.core.history.resolve(i),
                    await this.onRelayEventResponse({
                      topic: t,
                      payload: i
                    }),
                    this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                      topic: t,
                      payload: i
                    })
          } catch (e) {
            this.client.logger.error(e)
          }
        }
        )
      }
      registerExpirerEvents() {
        this.client.core.expirer.on(rn.expired, async e => {
          let { topic: t, id: r } = function (e) {
            let [t, r] = e.split(":")
              , i = {
                id: void 0,
                topic: void 0
              };
            if ("topic" === t && "string" == typeof r)
              i.topic = r;
            else if ("id" === t && Number.isInteger(Number(r)))
              i.id = Number(r);
            else
              throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
            return i
          }(e.target);
          if (r && this.client.pendingRequest.keys.includes(r))
            return await this.deletePendingSessionRequest(r, it("EXPIRED"), !0);
          t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0),
            this.client.events.emit("session_expire", {
              topic: t
            })) : r && (await this.deleteProposal(r, !0),
              this.client.events.emit("proposal_expire", {
                id: r
              }))
        }
        )
      }
      registerPairingEvents() {
        this.client.core.pairing.events.on(rr.create, e => this.onPairingCreated(e))
      }
      isValidPairingTopic(e) {
        if (!ia(e, !1)) {
          let { message: t } = it("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
          throw Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
          let { message: t } = it("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
          throw Error(t)
        }
        if (r2(this.client.core.pairing.pairings.get(e).expiry)) {
          let { message: t } = it("EXPIRED", `pairing topic: ${e}`);
          throw Error(t)
        }
      }
      async isValidSessionTopic(e) {
        if (!ia(e, !1)) {
          let { message: t } = it("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
          throw Error(t)
        }
        if (!this.client.session.keys.includes(e)) {
          let { message: t } = it("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
          throw Error(t)
        }
        if (r2(this.client.session.get(e).expiry)) {
          await this.deleteSession(e);
          let { message: t } = it("EXPIRED", `session topic: ${e}`);
          throw Error(t)
        }
      }
      async isValidSessionOrPairingTopic(e) {
        if (this.client.session.keys.includes(e))
          await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
          this.isValidPairingTopic(e);
        else if (ia(e, !1)) {
          let { message: t } = it("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
          throw Error(t)
        } else {
          let { message: t } = it("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
          throw Error(t)
        }
      }
      async isValidProposalId(e) {
        if ("number" != typeof e) {
          let { message: t } = it("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
          throw Error(t)
        }
        if (!this.client.proposal.keys.includes(e)) {
          let { message: t } = it("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
          throw Error(t)
        }
        if (r2(this.client.proposal.get(e).expiry)) {
          await this.deleteProposal(e);
          let { message: t } = it("EXPIRED", `proposal id: ${e}`);
          throw Error(t)
        }
      }
    }
    class iz extends rL {
      constructor(e, t) {
        super(e, t, "proposal", iE),
          this.core = e,
          this.logger = t
      }
    }
    class iH extends rL {
      constructor(e, t) {
        super(e, t, "session", iE),
          this.core = e,
          this.logger = t
      }
    }
    class iV extends rL {
      constructor(e, t) {
        super(e, t, "request", iE, e => e.id),
          this.core = e,
          this.logger = t
      }
    }
    class iK extends rW {
      constructor(e) {
        super(e),
          this.protocol = "wc",
          this.version = 2,
          this.name = iI.name,
          this.events = new i.EventEmitter,
          this.on = (e, t) => this.events.on(e, t),
          this.once = (e, t) => this.events.once(e, t),
          this.off = (e, t) => this.events.off(e, t),
          this.removeListener = (e, t) => this.events.removeListener(e, t),
          this.removeAllListeners = e => this.events.removeAllListeners(e),
          this.connect = async e => {
            try {
              return await this.engine.connect(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.pair = async e => {
            try {
              return await this.engine.pair(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.approve = async e => {
            try {
              return await this.engine.approve(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.reject = async e => {
            try {
              return await this.engine.reject(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.update = async e => {
            try {
              return await this.engine.update(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.extend = async e => {
            try {
              return await this.engine.extend(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.request = async e => {
            try {
              return await this.engine.request(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.respond = async e => {
            try {
              return await this.engine.respond(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.ping = async e => {
            try {
              return await this.engine.ping(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.emit = async e => {
            try {
              return await this.engine.emit(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.disconnect = async e => {
            try {
              return await this.engine.disconnect(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.find = e => {
            try {
              return this.engine.find(e)
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.getPendingSessionRequests = () => {
            try {
              return this.engine.getPendingSessionRequests()
            } catch (e) {
              throw this.logger.error(e.message),
              e
            }
          }
          ,
          this.name = e?.name || iI.name,
          this.metadata = e?.metadata || (0,
            $.D)() || {
            name: "",
            description: "",
            url: "",
            icons: [""]
          };
        let t = "u" > typeof e?.logger && "string" != typeof e?.logger ? e.logger : (0,
          c.pino)((0,
            c.getDefaultLoggerOptions)({
              level: e?.logger || iI.logger
            }));
        this.core = e?.core || new rG(e),
          this.logger = (0,
            c.generateChildLogger)(t, this.name),
          this.session = new iH(this.core, this.logger),
          this.proposal = new iz(this.core, this.logger),
          this.pendingRequest = new iV(this.core, this.logger),
          this.engine = new iM(this)
      }
      static async init(e) {
        let t = new iK(e);
        return await t.initialize(),
          t
      }
      get context() {
        return (0,
          c.getLoggerContext)(this.logger)
      }
      get pairing() {
        return this.core.pairing.pairings
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.engine.init(),
            this.core.verify.init({
              verifyUrl: this.metadata.verifyUrl
            }),
            this.logger.info("SignClient Initialization Success")
        } catch (e) {
          throw this.logger.info("SignClient Initialization Failure"),
          this.logger.error(e.message),
          e
        }
      }
    }
    var iF = r(96641);
    let iB = "error"
      , iG = "wc@2:universal_provider:"
      , iW = {
        DEFAULT_CHAIN_CHANGED: "default_chain_changed"
      };
    var iJ = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {}
      , iQ = {
        exports: {}
      };
    /**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
    !function (e, t) {
      (function () {
        var r, i = "Expected a function", n = "__lodash_hash_undefined__", s = "__lodash_placeholder__", o = 1 / 0, a = 0 / 0, c = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], l = "[object Arguments]", u = "[object Array]", h = "[object Boolean]", p = "[object Date]", f = "[object Error]", d = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", v = "[object Number]", m = "[object Object]", _ = "[object Promise]", b = "[object RegExp]", w = "[object Set]", E = "[object String]", I = "[object Symbol]", S = "[object WeakMap]", P = "[object ArrayBuffer]", O = "[object DataView]", N = "[object Float32Array]", R = "[object Float64Array]", C = "[object Int8Array]", A = "[object Int16Array]", x = "[object Int32Array]", T = "[object Uint8Array]", j = "[object Uint8ClampedArray]", D = "[object Uint16Array]", q = "[object Uint32Array]", L = /\b__p \+= '';/g, U = /\b(__p \+=) '' \+/g, k = /(__e\(.*?\)|\b__t\)) \+\n'';/g, $ = /&(?:amp|lt|gt|quot|#39);/g, M = /[&<>"']/g, z = RegExp($.source), H = RegExp(M.source), V = /<%-([\s\S]+?)%>/g, K = /<%([\s\S]+?)%>/g, F = /<%=([\s\S]+?)%>/g, B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, G = /^\w*$/, W = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, J = /[\\^$.*+?()[\]{}|]/g, Q = RegExp(J.source), Y = /^\s+/, Z = /\s/, X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ee = /\{\n\/\* \[wrapped with (.+)\] \*/, et = /,? & /, er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ei = /[()=,{}\[\]\/\s]/, en = /\\(\\)?/g, es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, eo = /\w*$/, ea = /^[-+]0x[0-9a-f]+$/i, ec = /^0b[01]+$/i, el = /^\[object .+?Constructor\]$/, eu = /^0o[0-7]+$/i, eh = /^(?:0|[1-9]\d*)$/, ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ef = /($^)/, ed = /['\n\r\u2028\u2029\\]/g, eg = "\ud800-\udfff", ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", ev = "\\u2700-\\u27bf", em = "a-z\\xdf-\\xf6\\xf8-\\xff", e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde", eb = "\\ufe0e\\ufe0f", ew = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", eE = "['’]", eI = "[" + ew + "]", eS = "[" + ey + "]", eP = "[" + em + "]", eO = "[^" + eg + ew + "\\d+" + ev + em + e_ + "]", eN = "\ud83c[\udffb-\udfff]", eR = "[^" + eg + "]", eC = "(?:\ud83c[\udde6-\uddff]){2}", eA = "[\ud800-\udbff][\udc00-\udfff]", ex = "[" + e_ + "]", eT = "\\u200d", ej = "(?:" + eP + "|" + eO + ")", eD = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?", eq = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?", eL = "(?:" + eS + "|" + eN + ")?", eU = "[" + eb + "]?", ek = "(?:" + eT + "(?:" + [eR, eC, eA].join("|") + ")" + eU + eL + ")*", e$ = eU + eL + ek, eM = "(?:" + ["[" + ev + "]", eC, eA].join("|") + ")" + e$, ez = "(?:" + [eR + eS + "?", eS, eC, eA, "[" + eg + "]"].join("|") + ")", eH = RegExp(eE, "g"), eV = RegExp(eS, "g"), eK = RegExp(eN + "(?=" + eN + ")|" + ez + e$, "g"), eF = RegExp([ex + "?" + eP + "+" + eD + "(?=" + [eI, ex, "$"].join("|") + ")", "(?:" + ex + "|" + eO + ")+" + eq + "(?=" + [eI, ex + ej, "$"].join("|") + ")", ex + "?" + ej + "+" + eD, ex + "+" + eq, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", eM].join("|"), "g"), eB = RegExp("[" + eT + eg + ey + eb + "]"), eG = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, eW = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], eJ = -1, eQ = {};
        eQ[N] = eQ[R] = eQ[C] = eQ[A] = eQ[x] = eQ[T] = eQ[j] = eQ[D] = eQ[q] = !0,
          eQ[l] = eQ[u] = eQ[P] = eQ[h] = eQ[O] = eQ[p] = eQ[f] = eQ[d] = eQ[y] = eQ[v] = eQ[m] = eQ[b] = eQ[w] = eQ[E] = eQ[S] = !1;
        var eY = {};
        eY[l] = eY[u] = eY[P] = eY[O] = eY[h] = eY[p] = eY[N] = eY[R] = eY[C] = eY[A] = eY[x] = eY[y] = eY[v] = eY[m] = eY[b] = eY[w] = eY[E] = eY[I] = eY[T] = eY[j] = eY[D] = eY[q] = !0,
          eY[f] = eY[d] = eY[S] = !1;
        var eZ = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        }
          , eX = parseFloat
          , e0 = parseInt
          , e1 = "object" == typeof iJ && iJ && iJ.Object === Object && iJ
          , e5 = "object" == typeof self && self && self.Object === Object && self
          , e6 = e1 || e5 || Function("return this")()
          , e3 = t && !t.nodeType && t
          , e2 = e3 && e && !e.nodeType && e
          , e4 = e2 && e2.exports === e3
          , e8 = e4 && e1.process
          , e9 = function () {
            try {
              return e2 && e2.require && e2.require("util").types || e8 && e8.binding && e8.binding("util")
            } catch { }
          }()
          , e7 = e9 && e9.isArrayBuffer
          , te = e9 && e9.isDate
          , tt = e9 && e9.isMap
          , tr = e9 && e9.isRegExp
          , ti = e9 && e9.isSet
          , tn = e9 && e9.isTypedArray;
        function ts(e, t, r) {
          switch (r.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, r[0]);
            case 2:
              return e.call(t, r[0], r[1]);
            case 3:
              return e.call(t, r[0], r[1], r[2])
          }
          return e.apply(t, r)
        }
        function to(e, t, r, i) {
          for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
            var o = e[n];
            t(i, o, r(o), e)
          }
          return i
        }
        function ta(e, t) {
          for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e);)
            ;
          return e
        }
        function tc(e, t) {
          for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e);)
            ;
          return e
        }
        function tl(e, t) {
          for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
            if (!t(e[r], r, e))
              return !1;
          return !0
        }
        function tu(e, t) {
          for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
            var o = e[r];
            t(o, r, e) && (s[n++] = o)
          }
          return s
        }
        function th(e, t) {
          return !!(null == e ? 0 : e.length) && tw(e, t, 0) > -1
        }
        function tp(e, t, r) {
          for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
            if (r(t, e[i]))
              return !0;
          return !1
        }
        function tf(e, t) {
          for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;)
            n[r] = t(e[r], r, e);
          return n
        }
        function td(e, t) {
          for (var r = -1, i = t.length, n = e.length; ++r < i;)
            e[n + r] = t[r];
          return e
        }
        function tg(e, t, r, i) {
          var n = -1
            , s = null == e ? 0 : e.length;
          for (i && s && (r = e[++n]); ++n < s;)
            r = t(r, e[n], n, e);
          return r
        }
        function ty(e, t, r, i) {
          var n = null == e ? 0 : e.length;
          for (i && n && (r = e[--n]); n--;)
            r = t(r, e[n], n, e);
          return r
        }
        function tv(e, t) {
          for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
            if (t(e[r], r, e))
              return !0;
          return !1
        }
        var tm = tP("length");
        function t_(e, t, r) {
          var i;
          return r(e, function (e, r, n) {
            if (t(e, r, n))
              return i = r,
                !1
          }),
            i
        }
        function tb(e, t, r, i) {
          for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
            if (t(e[s], s, e))
              return s;
          return -1
        }
        function tw(e, t, r) {
          return t == t ? function (e, t, r) {
            for (var i = r - 1, n = e.length; ++i < n;)
              if (e[i] === t)
                return i;
            return -1
          }(e, t, r) : tb(e, tI, r)
        }
        function tE(e, t, r, i) {
          for (var n = r - 1, s = e.length; ++n < s;)
            if (i(e[n], t))
              return n;
          return -1
        }
        function tI(e) {
          return e != e
        }
        function tS(e, t) {
          var r = null == e ? 0 : e.length;
          return r ? tR(e, t) / r : a
        }
        function tP(e) {
          return function (t) {
            return null == t ? r : t[e]
          }
        }
        function tO(e) {
          return function (t) {
            return null == e ? r : e[t]
          }
        }
        function tN(e, t, r, i, n) {
          return n(e, function (e, n, s) {
            r = i ? (i = !1,
              e) : t(r, e, n, s)
          }),
            r
        }
        function tR(e, t) {
          for (var i, n = -1, s = e.length; ++n < s;) {
            var o = t(e[n]);
            o !== r && (i = i === r ? o : i + o)
          }
          return i
        }
        function tC(e, t) {
          for (var r = -1, i = Array(e); ++r < e;)
            i[r] = t(r);
          return i
        }
        function tA(e) {
          return e && e.slice(0, tB(e) + 1).replace(Y, "")
        }
        function tx(e) {
          return function (t) {
            return e(t)
          }
        }
        function tT(e, t) {
          return tf(t, function (t) {
            return e[t]
          })
        }
        function tj(e, t) {
          return e.has(t)
        }
        function tD(e, t) {
          for (var r = -1, i = e.length; ++r < i && tw(t, e[r], 0) > -1;)
            ;
          return r
        }
        function tq(e, t) {
          for (var r = e.length; r-- && tw(t, e[r], 0) > -1;)
            ;
          return r
        }
        var tL = tO({
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s"
        })
          , tU = tO({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
          });
        function tk(e) {
          return "\\" + eZ[e]
        }
        function t$(e) {
          return eB.test(e)
        }
        function tM(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function (e, i) {
            r[++t] = [i, e]
          }),
            r
        }
        function tz(e, t) {
          return function (r) {
            return e(t(r))
          }
        }
        function tH(e, t) {
          for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
            var a = e[r];
            (a === t || a === s) && (e[r] = s,
              o[n++] = r)
          }
          return o
        }
        function tV(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function (e) {
            r[++t] = e
          }),
            r
        }
        function tK(e) {
          return t$(e) ? function (e) {
            for (var t = eK.lastIndex = 0; eK.test(e);)
              ++t;
            return t
          }(e) : tm(e)
        }
        function tF(e) {
          return t$(e) ? e.match(eK) || [] : e.split("")
        }
        function tB(e) {
          for (var t = e.length; t-- && Z.test(e.charAt(t));)
            ;
          return t
        }
        var tG = tO({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        })
          , tW = function e(t) {
            var Z, eg, ey, ev, em = (t = null == t ? e6 : tW.defaults(e6.Object(), t, tW.pick(e6, eW))).Array, e_ = t.Date, eb = t.Error, ew = t.Function, eE = t.Math, eI = t.Object, eS = t.RegExp, eP = t.String, eO = t.TypeError, eN = em.prototype, eR = ew.prototype, eC = eI.prototype, eA = t["__core-js_shared__"], ex = eR.toString, eT = eC.hasOwnProperty, ej = 0, eD = (Z = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Z : "", eq = eC.toString, eL = ex.call(eI), eU = e6._, ek = eS("^" + ex.call(eT).replace(J, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), e$ = e4 ? t.Buffer : r, eM = t.Symbol, ez = t.Uint8Array, eK = e$ ? e$.allocUnsafe : r, eB = tz(eI.getPrototypeOf, eI), eZ = eI.create, e1 = eC.propertyIsEnumerable, e5 = eN.splice, e3 = eM ? eM.isConcatSpreadable : r, e2 = eM ? eM.iterator : r, e8 = eM ? eM.toStringTag : r, e9 = function () {
              try {
                var e = n_(eI, "defineProperty");
                return e({}, "", {}),
                  e
              } catch { }
            }(), tm = t.clearTimeout !== e6.clearTimeout && t.clearTimeout, tO = e_ && e_.now !== e6.Date.now && e_.now, tJ = t.setTimeout !== e6.setTimeout && t.setTimeout, tQ = eE.ceil, tY = eE.floor, tZ = eI.getOwnPropertySymbols, tX = e$ ? e$.isBuffer : r, t0 = t.isFinite, t1 = eN.join, t5 = tz(eI.keys, eI), t6 = eE.max, t3 = eE.min, t2 = e_.now, t4 = t.parseInt, t8 = eE.random, t9 = eN.reverse, t7 = n_(t, "DataView"), re = n_(t, "Map"), rt = n_(t, "Promise"), rr = n_(t, "Set"), ri = n_(t, "WeakMap"), rn = n_(eI, "create"), rs = ri && new ri, ro = {}, ra = nK(t7), rc = nK(re), rl = nK(rt), ru = nK(rr), rh = nK(ri), rp = eM ? eM.prototype : r, rf = rp ? rp.valueOf : r, rd = rp ? rp.toString : r;
            function rg(e) {
              if (sY(e) && !sM(e) && !(e instanceof r_)) {
                if (e instanceof rm)
                  return e;
                if (eT.call(e, "__wrapped__"))
                  return nF(e)
              }
              return new rm(e)
            }
            var ry = function () {
              function e() { }
              return function (t) {
                if (!sQ(t))
                  return {};
                if (eZ)
                  return eZ(t);
                e.prototype = t;
                var i = new e;
                return e.prototype = r,
                  i
              }
            }();
            function rv() { }
            function rm(e, t) {
              this.__wrapped__ = e,
                this.__actions__ = [],
                this.__chain__ = !!t,
                this.__index__ = 0,
                this.__values__ = r
            }
            function r_(e) {
              this.__wrapped__ = e,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = 4294967295,
                this.__views__ = []
            }
            function rb(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r;) {
                var i = e[t];
                this.set(i[0], i[1])
              }
            }
            function rw(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r;) {
                var i = e[t];
                this.set(i[0], i[1])
              }
            }
            function rE(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r;) {
                var i = e[t];
                this.set(i[0], i[1])
              }
            }
            function rI(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.__data__ = new rE; ++t < r;)
                this.add(e[t])
            }
            function rS(e) {
              var t = this.__data__ = new rw(e);
              this.size = t.size
            }
            function rP(e, t) {
              var r = sM(e)
                , i = !r && s$(e)
                , n = !r && !i && sK(e)
                , s = !r && !i && !n && s2(e)
                , o = r || i || n || s
                , a = o ? tC(e.length, eP) : []
                , c = a.length;
              for (var l in e)
                (t || eT.call(e, l)) && !(o && ("length" == l || n && ("offset" == l || "parent" == l) || s && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || nO(l, c))) && a.push(l);
              return a
            }
            function rO(e) {
              var t = e.length;
              return t ? e[id(0, t - 1)] : r
            }
            function rN(e, t) {
              return nz(iG(e), rL(t, 0, e.length))
            }
            function rR(e) {
              return nz(iG(e))
            }
            function rC(e, t, i) {
              (i === r || sL(e[t], i)) && (i !== r || t in e) || rD(e, t, i)
            }
            function rA(e, t, i) {
              var n = e[t];
              eT.call(e, t) && sL(n, i) && (i !== r || t in e) || rD(e, t, i)
            }
            function rx(e, t) {
              for (var r = e.length; r--;)
                if (sL(e[r][0], t))
                  return r;
              return -1
            }
            function rT(e, t, r, i) {
              return rz(e, function (e, n, s) {
                t(i, e, r(e), s)
              }),
                i
            }
            function rj(e, t) {
              return e && iW(t, ov(t), e)
            }
            function rD(e, t, r) {
              "__proto__" == t && e9 ? e9(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
              }) : e[t] = r
            }
            function rq(e, t) {
              for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;)
                s[i] = o ? r : op(e, t[i]);
              return s
            }
            function rL(e, t, i) {
              return e == e && (i !== r && (e = e <= i ? e : i),
                t !== r && (e = e >= t ? e : t)),
                e
            }
            function rU(e, t, i, n, s, o) {
              var a, c = 1 & t, u = 2 & t;
              if (i && (a = s ? i(e, n, s, o) : i(e)),
                a !== r)
                return a;
              if (!sQ(e))
                return e;
              var f = sM(e);
              if (f) {
                if (_ = e.length,
                  S = new e.constructor(_),
                  _ && "string" == typeof e[0] && eT.call(e, "index") && (S.index = e.index,
                    S.input = e.input),
                  a = S,
                  !c)
                  return iG(e, a)
              } else {
                var _, S, L, U, k, $ = nE(e), M = $ == d || $ == g;
                if (sK(e))
                  return iz(e, c);
                if ($ == m || $ == l || M && !s) {
                  if (a = u || M ? {} : nS(e),
                    !c)
                    return u ? (L = (k = a) && iW(e, om(e), k),
                      iW(e, nw(e), L)) : (U = rj(a, e),
                        iW(e, nb(e), U))
                } else {
                  if (!eY[$])
                    return s ? e : {};
                  a = function (e, t, r) {
                    var i, n, s = e.constructor;
                    switch (t) {
                      case P:
                        return iH(e);
                      case h:
                      case p:
                        return new s(+e);
                      case O:
                        return i = r ? iH(e.buffer) : e.buffer,
                          new e.constructor(i, e.byteOffset, e.byteLength);
                      case N:
                      case R:
                      case C:
                      case A:
                      case x:
                      case T:
                      case j:
                      case D:
                      case q:
                        return iV(e, r);
                      case y:
                        return new s;
                      case v:
                      case E:
                        return new s(e);
                      case b:
                        return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex,
                          n;
                      case w:
                        return new s;
                      case I:
                        return rf ? eI(rf.call(e)) : {}
                    }
                  }(e, $, c)
                }
              }
              o || (o = new rS);
              var z = o.get(e);
              if (z)
                return z;
              o.set(e, a),
                s5(e) ? e.forEach(function (r) {
                  a.add(rU(r, t, i, r, e, o))
                }) : sZ(e) && e.forEach(function (r, n) {
                  a.set(n, rU(r, t, i, n, e, o))
                });
              var H = f ? r : (4 & t ? u ? np : nh : u ? om : ov)(e);
              return ta(H || e, function (r, n) {
                H && (r = e[n = r]),
                  rA(a, n, rU(r, t, i, n, e, o))
              }),
                a
            }
            function rk(e, t, i) {
              var n = i.length;
              if (null == e)
                return !n;
              for (e = eI(e); n--;) {
                var s = i[n]
                  , o = t[s]
                  , a = e[s];
                if (a === r && !(s in e) || !o(a))
                  return !1
              }
              return !0
            }
            function r$(e, t, n) {
              if ("function" != typeof e)
                throw new eO(i);
              return nU(function () {
                e.apply(r, n)
              }, t)
            }
            function rM(e, t, r, i) {
              var n = -1
                , s = th
                , o = !0
                , a = e.length
                , c = []
                , l = t.length;
              if (!a)
                return c;
              r && (t = tf(t, tx(r))),
                i ? (s = tp,
                  o = !1) : t.length >= 200 && (s = tj,
                    o = !1,
                    t = new rI(t));
              e: for (; ++n < a;) {
                var u = e[n]
                  , h = null == r ? u : r(u);
                if (u = i || 0 !== u ? u : 0,
                  o && h == h) {
                  for (var p = l; p--;)
                    if (t[p] === h)
                      continue e;
                  c.push(u)
                } else
                  s(t, h, i) || c.push(u)
              }
              return c
            }
            rg.templateSettings = {
              escape: V,
              evaluate: K,
              interpolate: F,
              variable: "",
              imports: {
                _: rg
              }
            },
              rg.prototype = rv.prototype,
              rg.prototype.constructor = rg,
              rm.prototype = ry(rv.prototype),
              rm.prototype.constructor = rm,
              r_.prototype = ry(rv.prototype),
              r_.prototype.constructor = r_,
              rb.prototype.clear = function () {
                this.__data__ = rn ? rn(null) : {},
                  this.size = 0
              }
              ,
              rb.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0,
                  t
              }
              ,
              rb.prototype.get = function (e) {
                var t = this.__data__;
                if (rn) {
                  var i = t[e];
                  return i === n ? r : i
                }
                return eT.call(t, e) ? t[e] : r
              }
              ,
              rb.prototype.has = function (e) {
                var t = this.__data__;
                return rn ? t[e] !== r : eT.call(t, e)
              }
              ,
              rb.prototype.set = function (e, t) {
                var i = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                  i[e] = rn && t === r ? n : t,
                  this
              }
              ,
              rw.prototype.clear = function () {
                this.__data__ = [],
                  this.size = 0
              }
              ,
              rw.prototype.delete = function (e) {
                var t = this.__data__
                  , r = rx(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1),
                  --this.size,
                  !0)
              }
              ,
              rw.prototype.get = function (e) {
                var t = this.__data__
                  , i = rx(t, e);
                return i < 0 ? r : t[i][1]
              }
              ,
              rw.prototype.has = function (e) {
                return rx(this.__data__, e) > -1
              }
              ,
              rw.prototype.set = function (e, t) {
                var r = this.__data__
                  , i = rx(r, e);
                return i < 0 ? (++this.size,
                  r.push([e, t])) : r[i][1] = t,
                  this
              }
              ,
              rE.prototype.clear = function () {
                this.size = 0,
                  this.__data__ = {
                    hash: new rb,
                    map: new (re || rw),
                    string: new rb
                  }
              }
              ,
              rE.prototype.delete = function (e) {
                var t = nv(this, e).delete(e);
                return this.size -= t ? 1 : 0,
                  t
              }
              ,
              rE.prototype.get = function (e) {
                return nv(this, e).get(e)
              }
              ,
              rE.prototype.has = function (e) {
                return nv(this, e).has(e)
              }
              ,
              rE.prototype.set = function (e, t) {
                var r = nv(this, e)
                  , i = r.size;
                return r.set(e, t),
                  this.size += r.size == i ? 0 : 1,
                  this
              }
              ,
              rI.prototype.add = rI.prototype.push = function (e) {
                return this.__data__.set(e, n),
                  this
              }
              ,
              rI.prototype.has = function (e) {
                return this.__data__.has(e)
              }
              ,
              rS.prototype.clear = function () {
                this.__data__ = new rw,
                  this.size = 0
              }
              ,
              rS.prototype.delete = function (e) {
                var t = this.__data__
                  , r = t.delete(e);
                return this.size = t.size,
                  r
              }
              ,
              rS.prototype.get = function (e) {
                return this.__data__.get(e)
              }
              ,
              rS.prototype.has = function (e) {
                return this.__data__.has(e)
              }
              ,
              rS.prototype.set = function (e, t) {
                var r = this.__data__;
                if (r instanceof rw) {
                  var i = r.__data__;
                  if (!re || i.length < 199)
                    return i.push([e, t]),
                      this.size = ++r.size,
                      this;
                  r = this.__data__ = new rE(i)
                }
                return r.set(e, t),
                  this.size = r.size,
                  this
              }
              ;
            var rz = iY(rJ)
              , rH = iY(rQ, !0);
            function rV(e, t) {
              var r = !0;
              return rz(e, function (e, i, n) {
                return r = !!t(e, i, n)
              }),
                r
            }
            function rK(e, t, i) {
              for (var n = -1, s = e.length; ++n < s;) {
                var o = e[n]
                  , a = t(o);
                if (null != a && (c === r ? a == a && !s3(a) : i(a, c)))
                  var c = a
                    , l = o
              }
              return l
            }
            function rF(e, t) {
              var r = [];
              return rz(e, function (e, i, n) {
                t(e, i, n) && r.push(e)
              }),
                r
            }
            function rB(e, t, r, i, n) {
              var s = -1
                , o = e.length;
              for (r || (r = nP),
                n || (n = []); ++s < o;) {
                var a = e[s];
                t > 0 && r(a) ? t > 1 ? rB(a, t - 1, r, i, n) : td(n, a) : i || (n[n.length] = a)
              }
              return n
            }
            var rG = iZ()
              , rW = iZ(!0);
            function rJ(e, t) {
              return e && rG(e, t, ov)
            }
            function rQ(e, t) {
              return e && rW(e, t, ov)
            }
            function rY(e, t) {
              return tu(t, function (t) {
                return sG(e[t])
              })
            }
            function rZ(e, t) {
              t = ik(t, e);
              for (var i = 0, n = t.length; null != e && i < n;)
                e = e[nV(t[i++])];
              return i && i == n ? e : r
            }
            function rX(e, t, r) {
              var i = t(e);
              return sM(e) ? i : td(i, r(e))
            }
            function r0(e) {
              return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e8 && e8 in eI(e) ? function (e) {
                var t = eT.call(e, e8)
                  , i = e[e8];
                try {
                  e[e8] = r;
                  var n = !0
                } catch { }
                var s = eq.call(e);
                return n && (t ? e[e8] = i : delete e[e8]),
                  s
              }(e) : eq.call(e)
            }
            function r1(e, t) {
              return e > t
            }
            function r5(e, t) {
              return null != e && eT.call(e, t)
            }
            function r6(e, t) {
              return null != e && t in eI(e)
            }
            function r3(e, t, i) {
              for (var n = i ? tp : th, s = e[0].length, o = e.length, a = o, c = em(o), l = 1 / 0, u = []; a--;) {
                var h = e[a];
                a && t && (h = tf(h, tx(t))),
                  l = t3(h.length, l),
                  c[a] = !i && (t || s >= 120 && h.length >= 120) ? new rI(a && h) : r
              }
              h = e[0];
              var p = -1
                , f = c[0];
              e: for (; ++p < s && u.length < l;) {
                var d = h[p]
                  , g = t ? t(d) : d;
                if (d = i || 0 !== d ? d : 0,
                  !(f ? tj(f, g) : n(u, g, i))) {
                  for (a = o; --a;) {
                    var y = c[a];
                    if (!(y ? tj(y, g) : n(e[a], g, i)))
                      continue e
                  }
                  f && f.push(g),
                    u.push(d)
                }
              }
              return u
            }
            function r2(e, t, i) {
              t = ik(t, e);
              var n = null == (e = nD(e, t)) ? e : e[nV(n5(t))];
              return null == n ? r : ts(n, e, i)
            }
            function r4(e) {
              return sY(e) && r0(e) == l
            }
            function r8(e, t, i, n, s) {
              return e === t || (null != e && null != t && (sY(e) || sY(t)) ? function (e, t, i, n, s, o) {
                var a = sM(e)
                  , c = sM(t)
                  , d = a ? u : nE(e)
                  , g = c ? u : nE(t);
                d = d == l ? m : d,
                  g = g == l ? m : g;
                var _ = d == m
                  , S = g == m
                  , N = d == g;
                if (N && sK(e)) {
                  if (!sK(t))
                    return !1;
                  a = !0,
                    _ = !1
                }
                if (N && !_)
                  return o || (o = new rS),
                    a || s2(e) ? nl(e, t, i, n, s, o) : function (e, t, r, i, n, s, o) {
                      switch (r) {
                        case O:
                          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                            break;
                          e = e.buffer,
                            t = t.buffer;
                        case P:
                          return !(e.byteLength != t.byteLength || !s(new ez(e), new ez(t)));
                        case h:
                        case p:
                        case v:
                          return sL(+e, +t);
                        case f:
                          return e.name == t.name && e.message == t.message;
                        case b:
                        case E:
                          return e == t + "";
                        case y:
                          var a = tM;
                        case w:
                          var c = 1 & i;
                          if (a || (a = tV),
                            e.size != t.size && !c)
                            break;
                          var l = o.get(e);
                          if (l)
                            return l == t;
                          i |= 2,
                            o.set(e, t);
                          var u = nl(a(e), a(t), i, n, s, o);
                          return o.delete(e),
                            u;
                        case I:
                          if (rf)
                            return rf.call(e) == rf.call(t)
                      }
                      return !1
                    }(e, t, d, i, n, s, o);
                if (!(1 & i)) {
                  var R = _ && eT.call(e, "__wrapped__")
                    , C = S && eT.call(t, "__wrapped__");
                  if (R || C) {
                    var A = R ? e.value() : e
                      , x = C ? t.value() : t;
                    return o || (o = new rS),
                      s(A, x, i, n, o)
                  }
                }
                return !!N && (o || (o = new rS),
                  function (e, t, i, n, s, o) {
                    var a = 1 & i
                      , c = nh(e)
                      , l = c.length;
                    if (l != nh(t).length && !a)
                      return !1;
                    for (var u = l; u--;) {
                      var h = c[u];
                      if (!(a ? h in t : eT.call(t, h)))
                        return !1
                    }
                    var p = o.get(e)
                      , f = o.get(t);
                    if (p && f)
                      return p == t && f == e;
                    var d = !0;
                    o.set(e, t),
                      o.set(t, e);
                    for (var g = a; ++u < l;) {
                      var y = e[h = c[u]]
                        , v = t[h];
                      if (n)
                        var m = a ? n(v, y, h, t, e, o) : n(y, v, h, e, t, o);
                      if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                        d = !1;
                        break
                      }
                      g || (g = "constructor" == h)
                    }
                    if (d && !g) {
                      var _ = e.constructor
                        , b = t.constructor;
                      _ != b && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (d = !1)
                    }
                    return o.delete(e),
                      o.delete(t),
                      d
                  }(e, t, i, n, s, o))
              }(e, t, i, n, r8, s) : e != e && t != t)
            }
            function r9(e, t, i, n) {
              var s = i.length
                , o = s
                , a = !n;
              if (null == e)
                return !o;
              for (e = eI(e); s--;) {
                var c = i[s];
                if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
                  return !1
              }
              for (; ++s < o;) {
                var l = (c = i[s])[0]
                  , u = e[l]
                  , h = c[1];
                if (a && c[2]) {
                  if (u === r && !(l in e))
                    return !1
                } else {
                  var p = new rS;
                  if (n)
                    var f = n(u, h, l, e, t, p);
                  if (!(f === r ? r8(h, u, 3, n, p) : f))
                    return !1
                }
              }
              return !0
            }
            function r7(e) {
              return !(!sQ(e) || eD && eD in e) && (sG(e) ? ek : el).test(nK(e))
            }
            function ie(e) {
              return "function" == typeof e ? e : null == e ? oV : "object" == typeof e ? sM(e) ? io(e[0], e[1]) : is(e) : oZ(e)
            }
            function it(e) {
              if (!nx(e))
                return t5(e);
              var t = [];
              for (var r in eI(e))
                eT.call(e, r) && "constructor" != r && t.push(r);
              return t
            }
            function ir(e, t) {
              return e < t
            }
            function ii(e, t) {
              var r = -1
                , i = sH(e) ? em(e.length) : [];
              return rz(e, function (e, n, s) {
                i[++r] = t(e, n, s)
              }),
                i
            }
            function is(e) {
              var t = nm(e);
              return 1 == t.length && t[0][2] ? nT(t[0][0], t[0][1]) : function (r) {
                return r === e || r9(r, e, t)
              }
            }
            function io(e, t) {
              var i;
              return nR(e) && (i = t) == i && !sQ(i) ? nT(nV(e), t) : function (i) {
                var n = op(i, e);
                return n === r && n === t ? of(i, e) : r8(t, n, 3)
              }
            }
            function ia(e, t, i, n, s) {
              e !== t && rG(t, function (o, a) {
                if (s || (s = new rS),
                  sQ(o))
                  !function (e, t, i, n, s, o, a) {
                    var c = nq(e, i)
                      , l = nq(t, i)
                      , u = a.get(l);
                    if (u) {
                      rC(e, i, u);
                      return
                    }
                    var h = o ? o(c, l, i + "", e, t, a) : r
                      , p = h === r;
                    if (p) {
                      var f = sM(l)
                        , d = !f && sK(l)
                        , g = !f && !d && s2(l);
                      h = l,
                        f || d || g ? sM(c) ? h = c : sV(c) ? h = iG(c) : d ? (p = !1,
                          h = iz(l, !0)) : g ? (p = !1,
                            h = iV(l, !0)) : h = [] : s0(l) || s$(l) ? (h = c,
                              s$(c) ? h = oi(c) : (!sQ(c) || sG(c)) && (h = nS(l))) : p = !1
                    }
                    p && (a.set(l, h),
                      s(h, l, n, o, a),
                      a.delete(l)),
                      rC(e, i, h)
                  }(e, t, a, i, ia, n, s);
                else {
                  var c = n ? n(nq(e, a), o, a + "", e, t, s) : r;
                  c === r && (c = o),
                    rC(e, a, c)
                }
              }, om)
            }
            function ic(e, t) {
              var i = e.length;
              if (i)
                return nO(t += t < 0 ? i : 0, i) ? e[t] : r
            }
            function il(e, t, r) {
              t = t.length ? tf(t, function (e) {
                return sM(e) ? function (t) {
                  return rZ(t, 1 === e.length ? e[0] : e)
                }
                  : e
              }) : [oV];
              var i = -1;
              return t = tf(t, tx(ny())),
                function (e, t) {
                  var r = e.length;
                  for (e.sort(t); r--;)
                    e[r] = e[r].value;
                  return e
                }(ii(e, function (e, r, n) {
                  return {
                    criteria: tf(t, function (t) {
                      return t(e)
                    }),
                    index: ++i,
                    value: e
                  }
                }), function (e, t) {
                  return function (e, t, r) {
                    for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                      var c = iK(n[i], s[i]);
                      if (c) {
                        if (i >= a)
                          return c;
                        return c * ("desc" == r[i] ? -1 : 1)
                      }
                    }
                    return e.index - t.index
                  }(e, t, r)
                })
            }
            function iu(e, t, r) {
              for (var i = -1, n = t.length, s = {}; ++i < n;) {
                var o = t[i]
                  , a = rZ(e, o);
                r(a, o) && i_(s, ik(o, e), a)
              }
              return s
            }
            function ih(e, t, r, i) {
              var n = i ? tE : tw
                , s = -1
                , o = t.length
                , a = e;
              for (e === t && (t = iG(t)),
                r && (a = tf(e, tx(r))); ++s < o;)
                for (var c = 0, l = t[s], u = r ? r(l) : l; (c = n(a, u, c, i)) > -1;)
                  a !== e && e5.call(a, c, 1),
                    e5.call(e, c, 1);
              return e
            }
            function ip(e, t) {
              for (var r = e ? t.length : 0, i = r - 1; r--;) {
                var n = t[r];
                if (r == i || n !== s) {
                  var s = n;
                  nO(n) ? e5.call(e, n, 1) : iA(e, n)
                }
              }
              return e
            }
            function id(e, t) {
              return e + tY(t8() * (t - e + 1))
            }
            function ig(e, t) {
              var r = "";
              if (!e || t < 1 || t > 9007199254740991)
                return r;
              do
                t % 2 && (r += e),
                  (t = tY(t / 2)) && (e += e);
              while (t);
              return r
            }
            function iy(e, t) {
              return nk(nj(e, t, oV), e + "")
            }
            function iv(e) {
              return rO(oO(e))
            }
            function im(e, t) {
              var r = oO(e);
              return nz(r, rL(t, 0, r.length))
            }
            function i_(e, t, i, n) {
              if (!sQ(e))
                return e;
              t = ik(t, e);
              for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                var l = nV(t[s])
                  , u = i;
                if ("__proto__" === l || "constructor" === l || "prototype" === l)
                  break;
                if (s != a) {
                  var h = c[l];
                  (u = n ? n(h, l, c) : r) === r && (u = sQ(h) ? h : nO(t[s + 1]) ? [] : {})
                }
                rA(c, l, u),
                  c = c[l]
              }
              return e
            }
            var ib = rs ? function (e, t) {
              return rs.set(e, t),
                e
            }
              : oV;
            function iw(e) {
              return nz(oO(e))
            }
            function iE(e, t, r) {
              var i = -1
                , n = e.length;
              t < 0 && (t = -t > n ? 0 : n + t),
                (r = r > n ? n : r) < 0 && (r += n),
                n = t > r ? 0 : r - t >>> 0,
                t >>>= 0;
              for (var s = em(n); ++i < n;)
                s[i] = e[i + t];
              return s
            }
            function iI(e, t) {
              var r;
              return rz(e, function (e, i, n) {
                return !(r = t(e, i, n))
              }),
                !!r
            }
            function iS(e, t, r) {
              var i = 0
                , n = null == e ? i : e.length;
              if ("number" == typeof t && t == t && n <= 2147483647) {
                for (; i < n;) {
                  var s = i + n >>> 1
                    , o = e[s];
                  null !== o && !s3(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                }
                return n
              }
              return iP(e, t, oV, r)
            }
            function iP(e, t, i, n) {
              var s = 0
                , o = null == e ? 0 : e.length;
              if (0 === o)
                return 0;
              t = i(t);
              for (var a = t != t, c = null === t, l = s3(t), u = t === r; s < o;) {
                var h = tY((s + o) / 2)
                  , p = i(e[h])
                  , f = p !== r
                  , d = null === p
                  , g = p == p
                  , y = s3(p);
                if (a)
                  var v = n || g;
                else
                  v = u ? g && (n || f) : c ? g && f && (n || !d) : l ? g && f && !d && (n || !y) : !d && !y && (n ? p <= t : p < t);
                v ? s = h + 1 : o = h
              }
              return t3(o, 4294967294)
            }
            function iO(e, t) {
              for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                var o = e[r]
                  , a = t ? t(o) : o;
                if (!r || !sL(a, c)) {
                  var c = a;
                  s[n++] = 0 === o ? 0 : o
                }
              }
              return s
            }
            function iN(e) {
              return "number" == typeof e ? e : s3(e) ? a : +e
            }
            function iR(e) {
              if ("string" == typeof e)
                return e;
              if (sM(e))
                return tf(e, iR) + "";
              if (s3(e))
                return rd ? rd.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -o ? "-0" : t
            }
            function iC(e, t, r) {
              var i = -1
                , n = th
                , s = e.length
                , o = !0
                , a = []
                , c = a;
              if (r)
                o = !1,
                  n = tp;
              else if (s >= 200) {
                var l = t ? null : ni(e);
                if (l)
                  return tV(l);
                o = !1,
                  n = tj,
                  c = new rI
              } else
                c = t ? [] : a;
              e: for (; ++i < s;) {
                var u = e[i]
                  , h = t ? t(u) : u;
                if (u = r || 0 !== u ? u : 0,
                  o && h == h) {
                  for (var p = c.length; p--;)
                    if (c[p] === h)
                      continue e;
                  t && c.push(h),
                    a.push(u)
                } else
                  n(c, h, r) || (c !== a && c.push(h),
                    a.push(u))
              }
              return a
            }
            function iA(e, t) {
              return t = ik(t, e),
                null == (e = nD(e, t)) || delete e[nV(n5(t))]
            }
            function ix(e, t, r, i) {
              return i_(e, t, r(rZ(e, t)), i)
            }
            function iT(e, t, r, i) {
              for (var n = e.length, s = i ? n : -1; (i ? s-- : ++s < n) && t(e[s], s, e);)
                ;
              return r ? iE(e, i ? 0 : s, i ? s + 1 : n) : iE(e, i ? s + 1 : 0, i ? n : s)
            }
            function ij(e, t) {
              var r = e;
              return r instanceof r_ && (r = r.value()),
                tg(t, function (e, t) {
                  return t.func.apply(t.thisArg, td([e], t.args))
                }, r)
            }
            function iD(e, t, r) {
              var i = e.length;
              if (i < 2)
                return i ? iC(e[0]) : [];
              for (var n = -1, s = em(i); ++n < i;)
                for (var o = e[n], a = -1; ++a < i;)
                  a != n && (s[n] = rM(s[n] || o, e[a], t, r));
              return iC(rB(s, 1), t, r)
            }
            function iq(e, t, i) {
              for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                var c = n < o ? t[n] : r;
                i(a, e[n], c)
              }
              return a
            }
            function iL(e) {
              return sV(e) ? e : []
            }
            function iU(e) {
              return "function" == typeof e ? e : oV
            }
            function ik(e, t) {
              return sM(e) ? e : nR(e, t) ? [e] : nH(on(e))
            }
            function i$(e, t, i) {
              var n = e.length;
              return i = i === r ? n : i,
                !t && i >= n ? e : iE(e, t, i)
            }
            var iM = tm || function (e) {
              return e6.clearTimeout(e)
            }
              ;
            function iz(e, t) {
              if (t)
                return e.slice();
              var r = e.length
                , i = eK ? eK(r) : new e.constructor(r);
              return e.copy(i),
                i
            }
            function iH(e) {
              var t = new e.constructor(e.byteLength);
              return new ez(t).set(new ez(e)),
                t
            }
            function iV(e, t) {
              var r = t ? iH(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.length)
            }
            function iK(e, t) {
              if (e !== t) {
                var i = e !== r
                  , n = null === e
                  , s = e == e
                  , o = s3(e)
                  , a = t !== r
                  , c = null === t
                  , l = t == t
                  , u = s3(t);
                if (!c && !u && !o && e > t || o && a && l && !c && !u || n && a && l || !i && l || !s)
                  return 1;
                if (!n && !o && !u && e < t || u && i && s && !n && !o || c && i && s || !a && s || !l)
                  return -1
              }
              return 0
            }
            function iF(e, t, r, i) {
              for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, l = t6(s - o, 0), u = em(c + l), h = !i; ++a < c;)
                u[a] = t[a];
              for (; ++n < o;)
                (h || n < s) && (u[r[n]] = e[n]);
              for (; l--;)
                u[a++] = e[n++];
              return u
            }
            function iB(e, t, r, i) {
              for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, l = t.length, u = t6(s - a, 0), h = em(u + l), p = !i; ++n < u;)
                h[n] = e[n];
              for (var f = n; ++c < l;)
                h[f + c] = t[c];
              for (; ++o < a;)
                (p || n < s) && (h[f + r[o]] = e[n++]);
              return h
            }
            function iG(e, t) {
              var r = -1
                , i = e.length;
              for (t || (t = em(i)); ++r < i;)
                t[r] = e[r];
              return t
            }
            function iW(e, t, i, n) {
              var s = !i;
              i || (i = {});
              for (var o = -1, a = t.length; ++o < a;) {
                var c = t[o]
                  , l = n ? n(i[c], e[c], c, i, e) : r;
                l === r && (l = e[c]),
                  s ? rD(i, c, l) : rA(i, c, l)
              }
              return i
            }
            function iJ(e, t) {
              return function (r, i) {
                var n = sM(r) ? to : rT
                  , s = t ? t() : {};
                return n(r, e, ny(i, 2), s)
              }
            }
            function iQ(e) {
              return iy(function (t, i) {
                var n = -1
                  , s = i.length
                  , o = s > 1 ? i[s - 1] : r
                  , a = s > 2 ? i[2] : r;
                for (o = e.length > 3 && "function" == typeof o ? (s--,
                  o) : r,
                  a && nN(i[0], i[1], a) && (o = s < 3 ? r : o,
                    s = 1),
                  t = eI(t); ++n < s;) {
                  var c = i[n];
                  c && e(t, c, n, o)
                }
                return t
              })
            }
            function iY(e, t) {
              return function (r, i) {
                if (null == r)
                  return r;
                if (!sH(r))
                  return e(r, i);
                for (var n = r.length, s = t ? n : -1, o = eI(r); (t ? s-- : ++s < n) && !1 !== i(o[s], s, o);)
                  ;
                return r
              }
            }
            function iZ(e) {
              return function (t, r, i) {
                for (var n = -1, s = eI(t), o = i(t), a = o.length; a--;) {
                  var c = o[e ? a : ++n];
                  if (!1 === r(s[c], c, s))
                    break
                }
                return t
              }
            }
            function iX(e) {
              return function (t) {
                var i = t$(t = on(t)) ? tF(t) : r
                  , n = i ? i[0] : t.charAt(0)
                  , s = i ? i$(i, 1).join("") : t.slice(1);
                return n[e]() + s
              }
            }
            function i0(e) {
              return function (t) {
                return tg(oU(oC(t).replace(eH, "")), e, "")
              }
            }
            function i1(e) {
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t[0]);
                  case 2:
                    return new e(t[0], t[1]);
                  case 3:
                    return new e(t[0], t[1], t[2]);
                  case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                  case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                  case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                  case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = ry(e.prototype)
                  , i = e.apply(r, t);
                return sQ(i) ? i : r
              }
            }
            function i5(e) {
              return function (t, i, n) {
                var s = eI(t);
                if (!sH(t)) {
                  var o = ny(i, 3);
                  t = ov(t),
                    i = function (e) {
                      return o(s[e], e, s)
                    }
                }
                var a = e(t, i, n);
                return a > -1 ? s[o ? t[a] : a] : r
              }
            }
            function i6(e) {
              return nu(function (t) {
                var n = t.length
                  , s = n
                  , o = rm.prototype.thru;
                for (e && t.reverse(); s--;) {
                  var a = t[s];
                  if ("function" != typeof a)
                    throw new eO(i);
                  if (o && !c && "wrapper" == nd(a))
                    var c = new rm([], !0)
                }
                for (s = c ? s : n; ++s < n;) {
                  var l = nd(a = t[s])
                    , u = "wrapper" == l ? nf(a) : r;
                  c = u && nC(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[nd(u[0])].apply(c, u[3]) : 1 == a.length && nC(a) ? c[l]() : c.thru(a)
                }
                return function () {
                  var e = arguments
                    , r = e[0];
                  if (c && 1 == e.length && sM(r))
                    return c.plant(r).value();
                  for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;)
                    s = t[i].call(this, s);
                  return s
                }
              })
            }
            function i3(e, t, i, n, s, o, a, c, l, u) {
              var h = 128 & t
                , p = 1 & t
                , f = 2 & t
                , d = 24 & t
                , g = 512 & t
                , y = f ? r : i1(e);
              return function v() {
                for (var m = arguments.length, _ = em(m), b = m; b--;)
                  _[b] = arguments[b];
                if (d)
                  var w = ng(v)
                    , E = function (e, t) {
                      for (var r = e.length, i = 0; r--;)
                        e[r] === t && ++i;
                      return i
                    }(_, w);
                if (n && (_ = iF(_, n, s, d)),
                  o && (_ = iB(_, o, a, d)),
                  m -= E,
                  d && m < u) {
                  var I = tH(_, w);
                  return nt(e, t, i3, v.placeholder, i, _, I, c, l, u - m)
                }
                var S = p ? i : this
                  , P = f ? S[e] : e;
                return m = _.length,
                  c ? _ = function (e, t) {
                    for (var i = e.length, n = t3(t.length, i), s = iG(e); n--;) {
                      var o = t[n];
                      e[n] = nO(o, i) ? s[o] : r
                    }
                    return e
                  }(_, c) : g && m > 1 && _.reverse(),
                  h && l < m && (_.length = l),
                  this && this !== e6 && this instanceof v && (P = y || i1(P)),
                  P.apply(S, _)
              }
            }
            function i2(e, t) {
              return function (r, i) {
                var n, s;
                return n = t(i),
                  s = {},
                  rJ(r, function (t, r, i) {
                    e(s, n(t), r, i)
                  }),
                  s
              }
            }
            function i4(e, t) {
              return function (i, n) {
                var s;
                if (i === r && n === r)
                  return t;
                if (i !== r && (s = i),
                  n !== r) {
                  if (s === r)
                    return n;
                  "string" == typeof i || "string" == typeof n ? (i = iR(i),
                    n = iR(n)) : (i = iN(i),
                      n = iN(n)),
                    s = e(i, n)
                }
                return s
              }
            }
            function i8(e) {
              return nu(function (t) {
                return t = tf(t, tx(ny())),
                  iy(function (r) {
                    var i = this;
                    return e(t, function (e) {
                      return ts(e, i, r)
                    })
                  })
              })
            }
            function i9(e, t) {
              var i = (t = t === r ? " " : iR(t)).length;
              if (i < 2)
                return i ? ig(t, e) : t;
              var n = ig(t, tQ(e / tK(t)));
              return t$(t) ? i$(tF(n), 0, e).join("") : n.slice(0, e)
            }
            function i7(e) {
              return function (t, i, n) {
                return n && "number" != typeof n && nN(t, i, n) && (i = n = r),
                  t = s7(t),
                  i === r ? (i = t,
                    t = 0) : i = s7(i),
                  n = n === r ? t < i ? 1 : -1 : s7(n),
                  function (e, t, r, i) {
                    for (var n = -1, s = t6(tQ((t - e) / (r || 1)), 0), o = em(s); s--;)
                      o[i ? s : ++n] = e,
                        e += r;
                    return o
                  }(t, i, n, e)
              }
            }
            function ne(e) {
              return function (t, r) {
                return "string" == typeof t && "string" == typeof r || (t = or(t),
                  r = or(r)),
                  e(t, r)
              }
            }
            function nt(e, t, i, n, s, o, a, c, l, u) {
              var h = 8 & t;
              t |= h ? 32 : 64,
                4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
              var p = [e, t, s, h ? o : r, h ? a : r, h ? r : o, h ? r : a, c, l, u]
                , f = i.apply(r, p);
              return nC(e) && nL(f, p),
                f.placeholder = n,
                n$(f, e, t)
            }
            function nr(e) {
              var t = eE[e];
              return function (e, r) {
                if (e = or(e),
                  (r = null == r ? 0 : t3(oe(r), 292)) && t0(e)) {
                  var i = (on(e) + "e").split("e");
                  return +((i = (on(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                }
                return t(e)
              }
            }
            var ni = rr && 1 / tV(new rr([, -0]))[1] == o ? function (e) {
              return new rr(e)
            }
              : oW;
            function nn(e) {
              return function (t) {
                var r, i, n = nE(t);
                return n == y ? tM(t) : n == w ? (r = -1,
                  i = Array(t.size),
                  t.forEach(function (e) {
                    i[++r] = [e, e]
                  }),
                  i) : tf(e(t), function (e) {
                    return [e, t[e]]
                  })
              }
            }
            function ns(e, t, n, o, a, c, l, u) {
              var h = 2 & t;
              if (!h && "function" != typeof e)
                throw new eO(i);
              var p = o ? o.length : 0;
              if (p || (t &= -97,
                o = a = r),
                l = l === r ? l : t6(oe(l), 0),
                u = u === r ? u : oe(u),
                p -= a ? a.length : 0,
                64 & t) {
                var f = o
                  , d = a;
                o = a = r
              }
              var g = h ? r : nf(e)
                , y = [e, t, n, o, a, f, d, c, l, u];
              if (g && function (e, t) {
                var r = e[1]
                  , i = t[1]
                  , n = r | i
                  , o = n < 131
                  , a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                if (o || a) {
                  1 & i && (e[2] = t[2],
                    n |= 1 & r ? 0 : 4);
                  var c = t[3];
                  if (c) {
                    var l = e[3];
                    e[3] = l ? iF(l, c, t[4]) : c,
                      e[4] = l ? tH(e[3], s) : t[4]
                  }
                  (c = t[5]) && (l = e[5],
                    e[5] = l ? iB(l, c, t[6]) : c,
                    e[6] = l ? tH(e[5], s) : t[6]),
                    (c = t[7]) && (e[7] = c),
                    128 & i && (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])),
                    null == e[9] && (e[9] = t[9]),
                    e[0] = t[0],
                    e[1] = n
                }
              }(y, g),
                e = y[0],
                t = y[1],
                n = y[2],
                o = y[3],
                a = y[4],
                (u = y[9] = y[9] === r ? h ? 0 : e.length : t6(y[9] - p, 0)) || !(24 & t) || (t &= -25),
                t && 1 != t)
                8 == t || 16 == t ? (v = e,
                  m = t,
                  _ = u,
                  b = i1(v),
                  T = function e() {
                    for (var t = arguments.length, i = em(t), n = t, s = ng(e); n--;)
                      i[n] = arguments[n];
                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tH(i, s);
                    return (t -= o.length) < _ ? nt(v, m, i3, e.placeholder, r, i, o, r, r, _ - t) : ts(this && this !== e6 && this instanceof e ? b : v, this, i)
                  }
                ) : 32 != t && 33 != t || a.length ? T = i3.apply(r, y) : (w = e,
                  E = t,
                  I = n,
                  S = o,
                  P = 1 & E,
                  O = i1(w),
                  T = function e() {
                    for (var t = -1, r = arguments.length, i = -1, n = S.length, s = em(n + r), o = this && this !== e6 && this instanceof e ? O : w; ++i < n;)
                      s[i] = S[i];
                    for (; r--;)
                      s[i++] = arguments[++t];
                    return ts(o, P ? I : this, s)
                  }
                );
              else
                var v, m, _, b, w, E, I, S, P, O, N, R, C, A, x, T = (N = e,
                  R = t,
                  C = n,
                  A = 1 & R,
                  x = i1(N),
                  function e() {
                    return (this && this !== e6 && this instanceof e ? x : N).apply(A ? C : this, arguments)
                  }
                );
              return n$((g ? ib : nL)(T, y), e, t)
            }
            function no(e, t, i, n) {
              return e === r || sL(e, eC[i]) && !eT.call(n, i) ? t : e
            }
            function na(e, t, i, n, s, o) {
              return sQ(e) && sQ(t) && (o.set(t, e),
                ia(e, t, r, na, o),
                o.delete(t)),
                e
            }
            function nc(e) {
              return s0(e) ? r : e
            }
            function nl(e, t, i, n, s, o) {
              var a = 1 & i
                , c = e.length
                , l = t.length;
              if (c != l && !(a && l > c))
                return !1;
              var u = o.get(e)
                , h = o.get(t);
              if (u && h)
                return u == t && h == e;
              var p = -1
                , f = !0
                , d = 2 & i ? new rI : r;
              for (o.set(e, t),
                o.set(t, e); ++p < c;) {
                var g = e[p]
                  , y = t[p];
                if (n)
                  var v = a ? n(y, g, p, t, e, o) : n(g, y, p, e, t, o);
                if (v !== r) {
                  if (v)
                    continue;
                  f = !1;
                  break
                }
                if (d) {
                  if (!tv(t, function (e, t) {
                    if (!tj(d, t) && (g === e || s(g, e, i, n, o)))
                      return d.push(t)
                  })) {
                    f = !1;
                    break
                  }
                } else if (!(g === y || s(g, y, i, n, o))) {
                  f = !1;
                  break
                }
              }
              return o.delete(e),
                o.delete(t),
                f
            }
            function nu(e) {
              return nk(nj(e, r, nY), e + "")
            }
            function nh(e) {
              return rX(e, ov, nb)
            }
            function np(e) {
              return rX(e, om, nw)
            }
            var nf = rs ? function (e) {
              return rs.get(e)
            }
              : oW;
            function nd(e) {
              for (var t = e.name + "", r = ro[t], i = eT.call(ro, t) ? r.length : 0; i--;) {
                var n = r[i]
                  , s = n.func;
                if (null == s || s == e)
                  return n.name
              }
              return t
            }
            function ng(e) {
              return (eT.call(rg, "placeholder") ? rg : e).placeholder
            }
            function ny() {
              var e = rg.iteratee || oK;
              return e = e === oK ? ie : e,
                arguments.length ? e(arguments[0], arguments[1]) : e
            }
            function nv(e, t) {
              var r, i = e.__data__;
              return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }
            function nm(e) {
              for (var t = ov(e), r = t.length; r--;) {
                var i = t[r]
                  , n = e[i];
                t[r] = [i, n, n == n && !sQ(n)]
              }
              return t
            }
            function n_(e, t) {
              var i = null == e ? r : e[t];
              return r7(i) ? i : r
            }
            var nb = tZ ? function (e) {
              return null == e ? [] : tu(tZ(e = eI(e)), function (t) {
                return e1.call(e, t)
              })
            }
              : o1
              , nw = tZ ? function (e) {
                for (var t = []; e;)
                  td(t, nb(e)),
                    e = eB(e);
                return t
              }
                : o1
              , nE = r0;
            function nI(e, t, r) {
              t = ik(t, e);
              for (var i = -1, n = t.length, s = !1; ++i < n;) {
                var o = nV(t[i]);
                if (!(s = null != e && r(e, o)))
                  break;
                e = e[o]
              }
              return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sJ(n) && nO(o, n) && (sM(e) || s$(e))
            }
            function nS(e) {
              return "function" != typeof e.constructor || nx(e) ? {} : ry(eB(e))
            }
            function nP(e) {
              return sM(e) || s$(e) || !!(e3 && e && e[e3])
            }
            function nO(e, t) {
              var r = typeof e;
              return !!(t = t ?? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            function nN(e, t, r) {
              if (!sQ(r))
                return !1;
              var i = typeof t;
              return ("number" == i ? !!(sH(r) && nO(t, r.length)) : "string" == i && t in r) && sL(r[t], e)
            }
            function nR(e, t) {
              if (sM(e))
                return !1;
              var r = typeof e;
              return !!("number" == r || "symbol" == r || "boolean" == r || null == e || s3(e)) || G.test(e) || !B.test(e) || null != t && e in eI(t)
            }
            function nC(e) {
              var t = nd(e)
                , r = rg[t];
              if ("function" != typeof r || !(t in r_.prototype))
                return !1;
              if (e === r)
                return !0;
              var i = nf(r);
              return !!i && e === i[0]
            }
            (t7 && nE(new t7(new ArrayBuffer(1))) != O || re && nE(new re) != y || rt && nE(rt.resolve()) != _ || rr && nE(new rr) != w || ri && nE(new ri) != S) && (nE = function (e) {
              var t = r0(e)
                , i = t == m ? e.constructor : r
                , n = i ? nK(i) : "";
              if (n)
                switch (n) {
                  case ra:
                    return O;
                  case rc:
                    return y;
                  case rl:
                    return _;
                  case ru:
                    return w;
                  case rh:
                    return S
                }
              return t
            }
            );
            var nA = eA ? sG : o5;
            function nx(e) {
              var t = e && e.constructor
                , r = "function" == typeof t && t.prototype || eC;
              return e === r
            }
            function nT(e, t) {
              return function (i) {
                return null != i && i[e] === t && (t !== r || e in eI(i))
              }
            }
            function nj(e, t, i) {
              return t = t6(t === r ? e.length - 1 : t, 0),
                function () {
                  for (var r = arguments, n = -1, s = t6(r.length - t, 0), o = em(s); ++n < s;)
                    o[n] = r[t + n];
                  n = -1;
                  for (var a = em(t + 1); ++n < t;)
                    a[n] = r[n];
                  return a[t] = i(o),
                    ts(e, this, a)
                }
            }
            function nD(e, t) {
              return t.length < 2 ? e : rZ(e, iE(t, 0, -1))
            }
            function nq(e, t) {
              if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t)
                return e[t]
            }
            var nL = nM(ib)
              , nU = tJ || function (e, t) {
                return e6.setTimeout(e, t)
              }
              , nk = nM(e9 ? function (e, t) {
                return e9(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: oM(t),
                  writable: !0
                })
              }
                : oV);
            function n$(e, t, r) {
              var i, n, s = t + "";
              return nk(e, function (e, t) {
                var r = t.length;
                if (!r)
                  return e;
                var i = r - 1;
                return t[i] = (r > 1 ? "& " : "") + t[i],
                  t = t.join(r > 2 ? ", " : " "),
                  e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
              }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [],
                ta(c, function (e) {
                  var t = "_." + e[0];
                  r & e[1] && !th(i, t) && i.push(t)
                }),
                i.sort())))
            }
            function nM(e) {
              var t = 0
                , i = 0;
              return function () {
                var n = t2()
                  , s = 16 - (n - i);
                if (i = n,
                  s > 0) {
                  if (++t >= 800)
                    return arguments[0]
                } else
                  t = 0;
                return e.apply(r, arguments)
              }
            }
            function nz(e, t) {
              var i = -1
                , n = e.length
                , s = n - 1;
              for (t = t === r ? n : t; ++i < t;) {
                var o = id(i, s)
                  , a = e[o];
                e[o] = e[i],
                  e[i] = a
              }
              return e.length = t,
                e
            }
            var nH = (ey = (eg = sA(function (e) {
              var t = [];
              return 46 === e.charCodeAt(0) && t.push(""),
                e.replace(W, function (e, r, i, n) {
                  t.push(i ? n.replace(en, "$1") : r || e)
                }),
                t
            }, function (e) {
              return 500 === ey.size && ey.clear(),
                e
            })).cache,
              eg);
            function nV(e) {
              if ("string" == typeof e || s3(e))
                return e;
              var t = e + "";
              return "0" == t && 1 / e == -o ? "-0" : t
            }
            function nK(e) {
              if (null != e) {
                try {
                  return ex.call(e)
                } catch { }
                try {
                  return e + ""
                } catch { }
              }
              return ""
            }
            function nF(e) {
              if (e instanceof r_)
                return e.clone();
              var t = new rm(e.__wrapped__, e.__chain__);
              return t.__actions__ = iG(e.__actions__),
                t.__index__ = e.__index__,
                t.__values__ = e.__values__,
                t
            }
            var nB = iy(function (e, t) {
              return sV(e) ? rM(e, rB(t, 1, sV, !0)) : []
            })
              , nG = iy(function (e, t) {
                var i = n5(t);
                return sV(i) && (i = r),
                  sV(e) ? rM(e, rB(t, 1, sV, !0), ny(i, 2)) : []
              })
              , nW = iy(function (e, t) {
                var i = n5(t);
                return sV(i) && (i = r),
                  sV(e) ? rM(e, rB(t, 1, sV, !0), r, i) : []
              });
            function nJ(e, t, r) {
              var i = null == e ? 0 : e.length;
              if (!i)
                return -1;
              var n = null == r ? 0 : oe(r);
              return n < 0 && (n = t6(i + n, 0)),
                tb(e, ny(t, 3), n)
            }
            function nQ(e, t, i) {
              var n = null == e ? 0 : e.length;
              if (!n)
                return -1;
              var s = n - 1;
              return i !== r && (s = oe(i),
                s = i < 0 ? t6(n + s, 0) : t3(s, n - 1)),
                tb(e, ny(t, 3), s, !0)
            }
            function nY(e) {
              return (null == e ? 0 : e.length) ? rB(e, 1) : []
            }
            function nZ(e) {
              return e && e.length ? e[0] : r
            }
            var nX = iy(function (e) {
              var t = tf(e, iL);
              return t.length && t[0] === e[0] ? r3(t) : []
            })
              , n0 = iy(function (e) {
                var t = n5(e)
                  , i = tf(e, iL);
                return t === n5(i) ? t = r : i.pop(),
                  i.length && i[0] === e[0] ? r3(i, ny(t, 2)) : []
              })
              , n1 = iy(function (e) {
                var t = n5(e)
                  , i = tf(e, iL);
                return (t = "function" == typeof t ? t : r) && i.pop(),
                  i.length && i[0] === e[0] ? r3(i, r, t) : []
              });
            function n5(e) {
              var t = null == e ? 0 : e.length;
              return t ? e[t - 1] : r
            }
            var n6 = iy(n3);
            function n3(e, t) {
              return e && e.length && t && t.length ? ih(e, t) : e
            }
            var n2 = nu(function (e, t) {
              var r = null == e ? 0 : e.length
                , i = rq(e, t);
              return ip(e, tf(t, function (e) {
                return nO(e, r) ? +e : e
              }).sort(iK)),
                i
            });
            function n4(e) {
              return null == e ? e : t9.call(e)
            }
            var n8 = iy(function (e) {
              return iC(rB(e, 1, sV, !0))
            })
              , n9 = iy(function (e) {
                var t = n5(e);
                return sV(t) && (t = r),
                  iC(rB(e, 1, sV, !0), ny(t, 2))
              })
              , n7 = iy(function (e) {
                var t = n5(e);
                return t = "function" == typeof t ? t : r,
                  iC(rB(e, 1, sV, !0), r, t)
              });
            function se(e) {
              if (!(e && e.length))
                return [];
              var t = 0;
              return e = tu(e, function (e) {
                if (sV(e))
                  return t = t6(e.length, t),
                    !0
              }),
                tC(t, function (t) {
                  return tf(e, tP(t))
                })
            }
            function st(e, t) {
              if (!(e && e.length))
                return [];
              var i = se(e);
              return null == t ? i : tf(i, function (e) {
                return ts(t, r, e)
              })
            }
            var sr = iy(function (e, t) {
              return sV(e) ? rM(e, t) : []
            })
              , si = iy(function (e) {
                return iD(tu(e, sV))
              })
              , sn = iy(function (e) {
                var t = n5(e);
                return sV(t) && (t = r),
                  iD(tu(e, sV), ny(t, 2))
              })
              , ss = iy(function (e) {
                var t = n5(e);
                return t = "function" == typeof t ? t : r,
                  iD(tu(e, sV), r, t)
              })
              , so = iy(se)
              , sa = iy(function (e) {
                var t = e.length
                  , i = t > 1 ? e[t - 1] : r;
                return i = "function" == typeof i ? (e.pop(),
                  i) : r,
                  st(e, i)
              });
            function sc(e) {
              var t = rg(e);
              return t.__chain__ = !0,
                t
            }
            function sl(e, t) {
              return t(e)
            }
            var su = nu(function (e) {
              var t = e.length
                , i = t ? e[0] : 0
                , n = this.__wrapped__
                , s = function (t) {
                  return rq(t, e)
                };
              return !(t > 1) && !this.__actions__.length && n instanceof r_ && nO(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                func: sl,
                args: [s],
                thisArg: r
              }),
                new rm(n, this.__chain__).thru(function (e) {
                  return t && !e.length && e.push(r),
                    e
                })) : this.thru(s)
            })
              , sh = iJ(function (e, t, r) {
                eT.call(e, r) ? ++e[r] : rD(e, r, 1)
              })
              , sp = i5(nJ)
              , sf = i5(nQ);
            function sd(e, t) {
              return (sM(e) ? ta : rz)(e, ny(t, 3))
            }
            function sg(e, t) {
              return (sM(e) ? tc : rH)(e, ny(t, 3))
            }
            var sy = iJ(function (e, t, r) {
              eT.call(e, r) ? e[r].push(t) : rD(e, r, [t])
            })
              , sv = iy(function (e, t, r) {
                var i = -1
                  , n = "function" == typeof t
                  , s = sH(e) ? em(e.length) : [];
                return rz(e, function (e) {
                  s[++i] = n ? ts(t, e, r) : r2(e, t, r)
                }),
                  s
              })
              , sm = iJ(function (e, t, r) {
                rD(e, r, t)
              });
            function s_(e, t) {
              return (sM(e) ? tf : ii)(e, ny(t, 3))
            }
            var sb = iJ(function (e, t, r) {
              e[r ? 0 : 1].push(t)
            }, function () {
              return [[], []]
            })
              , sw = iy(function (e, t) {
                if (null == e)
                  return [];
                var r = t.length;
                return r > 1 && nN(e, t[0], t[1]) ? t = [] : r > 2 && nN(t[0], t[1], t[2]) && (t = [t[0]]),
                  il(e, rB(t, 1), [])
              })
              , sE = tO || function () {
                return e6.Date.now()
              }
              ;
            function sI(e, t, i) {
              return t = i ? r : t,
                t = e && null == t ? e.length : t,
                ns(e, 128, r, r, r, r, t)
            }
            function sS(e, t) {
              var n;
              if ("function" != typeof t)
                throw new eO(i);
              return e = oe(e),
                function () {
                  return --e > 0 && (n = t.apply(this, arguments)),
                    e <= 1 && (t = r),
                    n
                }
            }
            var sP = iy(function (e, t, r) {
              var i = 1;
              if (r.length) {
                var n = tH(r, ng(sP));
                i |= 32
              }
              return ns(e, i, t, r, n)
            })
              , sO = iy(function (e, t, r) {
                var i = 3;
                if (r.length) {
                  var n = tH(r, ng(sO));
                  i |= 32
                }
                return ns(t, i, e, r, n)
              });
            function sN(e, t, n) {
              var s, o, a, c, l, u, h = 0, p = !1, f = !1, d = !0;
              if ("function" != typeof e)
                throw new eO(i);
              function g(t) {
                var i = s
                  , n = o;
                return s = o = r,
                  h = t,
                  c = e.apply(n, i)
              }
              function y(e) {
                var i = e - u
                  , n = e - h;
                return u === r || i >= t || i < 0 || f && n >= a
              }
              function v() {
                var e, r, i, n = sE();
                if (y(n))
                  return m(n);
                l = nU(v, (e = n - u,
                  r = n - h,
                  i = t - e,
                  f ? t3(i, a - r) : i))
              }
              function m(e) {
                return l = r,
                  d && s ? g(e) : (s = o = r,
                    c)
              }
              function _() {
                var e, i = sE(), n = y(i);
                if (s = arguments,
                  o = this,
                  u = i,
                  n) {
                  if (l === r)
                    return h = e = u,
                      l = nU(v, t),
                      p ? g(e) : c;
                  if (f)
                    return iM(l),
                      l = nU(v, t),
                      g(u)
                }
                return l === r && (l = nU(v, t)),
                  c
              }
              return t = or(t) || 0,
                sQ(n) && (p = !!n.leading,
                  a = (f = "maxWait" in n) ? t6(or(n.maxWait) || 0, t) : a,
                  d = "trailing" in n ? !!n.trailing : d),
                _.cancel = function () {
                  l !== r && iM(l),
                    h = 0,
                    s = u = o = l = r
                }
                ,
                _.flush = function () {
                  return l === r ? c : m(sE())
                }
                ,
                _
            }
            var sR = iy(function (e, t) {
              return r$(e, 1, t)
            })
              , sC = iy(function (e, t, r) {
                return r$(e, or(t) || 0, r)
              });
            function sA(e, t) {
              if ("function" != typeof e || null != t && "function" != typeof t)
                throw new eO(i);
              var r = function () {
                var i = arguments
                  , n = t ? t.apply(this, i) : i[0]
                  , s = r.cache;
                if (s.has(n))
                  return s.get(n);
                var o = e.apply(this, i);
                return r.cache = s.set(n, o) || s,
                  o
              };
              return r.cache = new (sA.Cache || rE),
                r
            }
            function sx(e) {
              if ("function" != typeof e)
                throw new eO(i);
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, t[0]);
                  case 2:
                    return !e.call(this, t[0], t[1]);
                  case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
              }
            }
            sA.Cache = rE;
            var sT = iy(function (e, t) {
              var r = (t = 1 == t.length && sM(t[0]) ? tf(t[0], tx(ny())) : tf(rB(t, 1), tx(ny()))).length;
              return iy(function (i) {
                for (var n = -1, s = t3(i.length, r); ++n < s;)
                  i[n] = t[n].call(this, i[n]);
                return ts(e, this, i)
              })
            })
              , sj = iy(function (e, t) {
                var i = tH(t, ng(sj));
                return ns(e, 32, r, t, i)
              })
              , sD = iy(function (e, t) {
                var i = tH(t, ng(sD));
                return ns(e, 64, r, t, i)
              })
              , sq = nu(function (e, t) {
                return ns(e, 256, r, r, r, t)
              });
            function sL(e, t) {
              return e === t || e != e && t != t
            }
            var sU = ne(r1)
              , sk = ne(function (e, t) {
                return e >= t
              })
              , s$ = r4(function () {
                return arguments
              }()) ? r4 : function (e) {
                return sY(e) && eT.call(e, "callee") && !e1.call(e, "callee")
              }
              , sM = em.isArray
              , sz = e7 ? tx(e7) : function (e) {
                return sY(e) && r0(e) == P
              }
              ;
            function sH(e) {
              return null != e && sJ(e.length) && !sG(e)
            }
            function sV(e) {
              return sY(e) && sH(e)
            }
            var sK = tX || o5
              , sF = te ? tx(te) : function (e) {
                return sY(e) && r0(e) == p
              }
              ;
            function sB(e) {
              if (!sY(e))
                return !1;
              var t = r0(e);
              return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !s0(e)
            }
            function sG(e) {
              if (!sQ(e))
                return !1;
              var t = r0(e);
              return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
            function sW(e) {
              return "number" == typeof e && e == oe(e)
            }
            function sJ(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
            function sQ(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t)
            }
            function sY(e) {
              return null != e && "object" == typeof e
            }
            var sZ = tt ? tx(tt) : function (e) {
              return sY(e) && nE(e) == y
            }
              ;
            function sX(e) {
              return "number" == typeof e || sY(e) && r0(e) == v
            }
            function s0(e) {
              if (!sY(e) || r0(e) != m)
                return !1;
              var t = eB(e);
              if (null === t)
                return !0;
              var r = eT.call(t, "constructor") && t.constructor;
              return "function" == typeof r && r instanceof r && ex.call(r) == eL
            }
            var s1 = tr ? tx(tr) : function (e) {
              return sY(e) && r0(e) == b
            }
              , s5 = ti ? tx(ti) : function (e) {
                return sY(e) && nE(e) == w
              }
              ;
            function s6(e) {
              return "string" == typeof e || !sM(e) && sY(e) && r0(e) == E
            }
            function s3(e) {
              return "symbol" == typeof e || sY(e) && r0(e) == I
            }
            var s2 = tn ? tx(tn) : function (e) {
              return sY(e) && sJ(e.length) && !!eQ[r0(e)]
            }
              , s4 = ne(ir)
              , s8 = ne(function (e, t) {
                return e <= t
              });
            function s9(e) {
              if (!e)
                return [];
              if (sH(e))
                return s6(e) ? tF(e) : iG(e);
              if (e2 && e[e2])
                return function (e) {
                  for (var t, r = []; !(t = e.next()).done;)
                    r.push(t.value);
                  return r
                }(e[e2]());
              var t = nE(e);
              return (t == y ? tM : t == w ? tV : oO)(e)
            }
            function s7(e) {
              return e ? (e = or(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
            }
            function oe(e) {
              var t = s7(e)
                , r = t % 1;
              return t == t ? r ? t - r : t : 0
            }
            function ot(e) {
              return e ? rL(oe(e), 0, 4294967295) : 0
            }
            function or(e) {
              if ("number" == typeof e)
                return e;
              if (s3(e))
                return a;
              if (sQ(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = sQ(t) ? t + "" : t
              }
              if ("string" != typeof e)
                return 0 === e ? e : +e;
              e = tA(e);
              var r = ec.test(e);
              return r || eu.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
            }
            function oi(e) {
              return iW(e, om(e))
            }
            function on(e) {
              return null == e ? "" : iR(e)
            }
            var os = iQ(function (e, t) {
              if (nx(t) || sH(t)) {
                iW(t, ov(t), e);
                return
              }
              for (var r in t)
                eT.call(t, r) && rA(e, r, t[r])
            })
              , oo = iQ(function (e, t) {
                iW(t, om(t), e)
              })
              , oa = iQ(function (e, t, r, i) {
                iW(t, om(t), e, i)
              })
              , oc = iQ(function (e, t, r, i) {
                iW(t, ov(t), e, i)
              })
              , ol = nu(rq)
              , ou = iy(function (e, t) {
                e = eI(e);
                var i = -1
                  , n = t.length
                  , s = n > 2 ? t[2] : r;
                for (s && nN(t[0], t[1], s) && (n = 1); ++i < n;)
                  for (var o = t[i], a = om(o), c = -1, l = a.length; ++c < l;) {
                    var u = a[c]
                      , h = e[u];
                    (h === r || sL(h, eC[u]) && !eT.call(e, u)) && (e[u] = o[u])
                  }
                return e
              })
              , oh = iy(function (e) {
                return e.push(r, na),
                  ts(ob, r, e)
              });
            function op(e, t, i) {
              var n = null == e ? r : rZ(e, t);
              return n === r ? i : n
            }
            function of(e, t) {
              return null != e && nI(e, t, r6)
            }
            var od = i2(function (e, t, r) {
              null != t && "function" != typeof t.toString && (t = eq.call(t)),
                e[t] = r
            }, oM(oV))
              , og = i2(function (e, t, r) {
                null != t && "function" != typeof t.toString && (t = eq.call(t)),
                  eT.call(e, t) ? e[t].push(r) : e[t] = [r]
              }, ny)
              , oy = iy(r2);
            function ov(e) {
              return sH(e) ? rP(e) : it(e)
            }
            function om(e) {
              return sH(e) ? rP(e, !0) : function (e) {
                if (!sQ(e))
                  return function (e) {
                    var t = [];
                    if (null != e)
                      for (var r in eI(e))
                        t.push(r);
                    return t
                  }(e);
                var t = nx(e)
                  , r = [];
                for (var i in e)
                  "constructor" == i && (t || !eT.call(e, i)) || r.push(i);
                return r
              }(e)
            }
            var o_ = iQ(function (e, t, r) {
              ia(e, t, r)
            })
              , ob = iQ(function (e, t, r, i) {
                ia(e, t, r, i)
              })
              , ow = nu(function (e, t) {
                var r = {};
                if (null == e)
                  return r;
                var i = !1;
                t = tf(t, function (t) {
                  return t = ik(t, e),
                    i || (i = t.length > 1),
                    t
                }),
                  iW(e, np(e), r),
                  i && (r = rU(r, 7, nc));
                for (var n = t.length; n--;)
                  iA(r, t[n]);
                return r
              })
              , oE = nu(function (e, t) {
                return null == e ? {} : iu(e, t, function (t, r) {
                  return of(e, r)
                })
              });
            function oI(e, t) {
              if (null == e)
                return {};
              var r = tf(np(e), function (e) {
                return [e]
              });
              return t = ny(t),
                iu(e, r, function (e, r) {
                  return t(e, r[0])
                })
            }
            var oS = nn(ov)
              , oP = nn(om);
            function oO(e) {
              return null == e ? [] : tT(e, ov(e))
            }
            var oN = i0(function (e, t, r) {
              return t = t.toLowerCase(),
                e + (r ? oR(t) : t)
            });
            function oR(e) {
              return oL(on(e).toLowerCase())
            }
            function oC(e) {
              return (e = on(e)) && e.replace(ep, tL).replace(eV, "")
            }
            var oA = i0(function (e, t, r) {
              return e + (r ? "-" : "") + t.toLowerCase()
            })
              , ox = i0(function (e, t, r) {
                return e + (r ? " " : "") + t.toLowerCase()
              })
              , oT = iX("toLowerCase")
              , oj = i0(function (e, t, r) {
                return e + (r ? "_" : "") + t.toLowerCase()
              })
              , oD = i0(function (e, t, r) {
                return e + (r ? " " : "") + oL(t)
              })
              , oq = i0(function (e, t, r) {
                return e + (r ? " " : "") + t.toUpperCase()
              })
              , oL = iX("toUpperCase");
            function oU(e, t, i) {
              var n;
              return e = on(e),
                (t = i ? r : t) === r ? (n = e,
                  eG.test(n)) ? e.match(eF) || [] : e.match(er) || [] : e.match(t) || []
            }
            var ok = iy(function (e, t) {
              try {
                return ts(e, r, t)
              } catch (e) {
                return sB(e) ? e : new eb(e)
              }
            })
              , o$ = nu(function (e, t) {
                return ta(t, function (t) {
                  rD(e, t = nV(t), sP(e[t], e))
                }),
                  e
              });
            function oM(e) {
              return function () {
                return e
              }
            }
            var oz = i6()
              , oH = i6(!0);
            function oV(e) {
              return e
            }
            function oK(e) {
              return ie("function" == typeof e ? e : rU(e, 1))
            }
            var oF = iy(function (e, t) {
              return function (r) {
                return r2(r, e, t)
              }
            })
              , oB = iy(function (e, t) {
                return function (r) {
                  return r2(e, r, t)
                }
              });
            function oG(e, t, r) {
              var i = ov(t)
                , n = rY(t, i);
              null != r || sQ(t) && (n.length || !i.length) || (r = t,
                t = e,
                e = this,
                n = rY(t, ov(t)));
              var s = !(sQ(r) && "chain" in r) || !!r.chain
                , o = sG(e);
              return ta(n, function (r) {
                var i = t[r];
                e[r] = i,
                  o && (e.prototype[r] = function () {
                    var t = this.__chain__;
                    if (s || t) {
                      var r = e(this.__wrapped__);
                      return (r.__actions__ = iG(this.__actions__)).push({
                        func: i,
                        args: arguments,
                        thisArg: e
                      }),
                        r.__chain__ = t,
                        r
                    }
                    return i.apply(e, td([this.value()], arguments))
                  }
                  )
              }),
                e
            }
            function oW() { }
            var oJ = i8(tf)
              , oQ = i8(tl)
              , oY = i8(tv);
            function oZ(e) {
              return nR(e) ? tP(nV(e)) : function (t) {
                return rZ(t, e)
              }
            }
            var oX = i7()
              , o0 = i7(!0);
            function o1() {
              return []
            }
            function o5() {
              return !1
            }
            var o6 = i4(function (e, t) {
              return e + t
            }, 0)
              , o3 = nr("ceil")
              , o2 = i4(function (e, t) {
                return e / t
              }, 1)
              , o4 = nr("floor")
              , o8 = i4(function (e, t) {
                return e * t
              }, 1)
              , o9 = nr("round")
              , o7 = i4(function (e, t) {
                return e - t
              }, 0);
            return rg.after = function (e, t) {
              if ("function" != typeof t)
                throw new eO(i);
              return e = oe(e),
                function () {
                  if (--e < 1)
                    return t.apply(this, arguments)
                }
            }
              ,
              rg.ary = sI,
              rg.assign = os,
              rg.assignIn = oo,
              rg.assignInWith = oa,
              rg.assignWith = oc,
              rg.at = ol,
              rg.before = sS,
              rg.bind = sP,
              rg.bindAll = o$,
              rg.bindKey = sO,
              rg.castArray = function () {
                if (!arguments.length)
                  return [];
                var e = arguments[0];
                return sM(e) ? e : [e]
              }
              ,
              rg.chain = sc,
              rg.chunk = function (e, t, i) {
                t = (i ? nN(e, t, i) : t === r) ? 1 : t6(oe(t), 0);
                var n = null == e ? 0 : e.length;
                if (!n || t < 1)
                  return [];
                for (var s = 0, o = 0, a = em(tQ(n / t)); s < n;)
                  a[o++] = iE(e, s, s += t);
                return a
              }
              ,
              rg.compact = function (e) {
                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                  var s = e[t];
                  s && (n[i++] = s)
                }
                return n
              }
              ,
              rg.concat = function () {
                var e = arguments.length;
                if (!e)
                  return [];
                for (var t = em(e - 1), r = arguments[0], i = e; i--;)
                  t[i - 1] = arguments[i];
                return td(sM(r) ? iG(r) : [r], rB(t, 1))
              }
              ,
              rg.cond = function (e) {
                var t = null == e ? 0 : e.length
                  , r = ny();
                return e = t ? tf(e, function (e) {
                  if ("function" != typeof e[1])
                    throw new eO(i);
                  return [r(e[0]), e[1]]
                }) : [],
                  iy(function (r) {
                    for (var i = -1; ++i < t;) {
                      var n = e[i];
                      if (ts(n[0], this, r))
                        return ts(n[1], this, r)
                    }
                  })
              }
              ,
              rg.conforms = function (e) {
                var t, r;
                return r = ov(t = rU(e, 1)),
                  function (e) {
                    return rk(e, t, r)
                  }
              }
              ,
              rg.constant = oM,
              rg.countBy = sh,
              rg.create = function (e, t) {
                var r = ry(e);
                return null == t ? r : rj(r, t)
              }
              ,
              rg.curry = function e(t, i, n) {
                i = n ? r : i;
                var s = ns(t, 8, r, r, r, r, r, i);
                return s.placeholder = e.placeholder,
                  s
              }
              ,
              rg.curryRight = function e(t, i, n) {
                i = n ? r : i;
                var s = ns(t, 16, r, r, r, r, r, i);
                return s.placeholder = e.placeholder,
                  s
              }
              ,
              rg.debounce = sN,
              rg.defaults = ou,
              rg.defaultsDeep = oh,
              rg.defer = sR,
              rg.delay = sC,
              rg.difference = nB,
              rg.differenceBy = nG,
              rg.differenceWith = nW,
              rg.drop = function (e, t, i) {
                var n = null == e ? 0 : e.length;
                return n ? iE(e, (t = i || t === r ? 1 : oe(t)) < 0 ? 0 : t, n) : []
              }
              ,
              rg.dropRight = function (e, t, i) {
                var n = null == e ? 0 : e.length;
                return n ? iE(e, 0, (t = n - (t = i || t === r ? 1 : oe(t))) < 0 ? 0 : t) : []
              }
              ,
              rg.dropRightWhile = function (e, t) {
                return e && e.length ? iT(e, ny(t, 3), !0, !0) : []
              }
              ,
              rg.dropWhile = function (e, t) {
                return e && e.length ? iT(e, ny(t, 3), !0) : []
              }
              ,
              rg.fill = function (e, t, i, n) {
                var s = null == e ? 0 : e.length;
                return s ? (i && "number" != typeof i && nN(e, t, i) && (i = 0,
                  n = s),
                  function (e, t, i, n) {
                    var s = e.length;
                    for ((i = oe(i)) < 0 && (i = -i > s ? 0 : s + i),
                      (n = n === r || n > s ? s : oe(n)) < 0 && (n += s),
                      n = i > n ? 0 : ot(n); i < n;)
                      e[i++] = t;
                    return e
                  }(e, t, i, n)) : []
              }
              ,
              rg.filter = function (e, t) {
                return (sM(e) ? tu : rF)(e, ny(t, 3))
              }
              ,
              rg.flatMap = function (e, t) {
                return rB(s_(e, t), 1)
              }
              ,
              rg.flatMapDeep = function (e, t) {
                return rB(s_(e, t), o)
              }
              ,
              rg.flatMapDepth = function (e, t, i) {
                return i = i === r ? 1 : oe(i),
                  rB(s_(e, t), i)
              }
              ,
              rg.flatten = nY,
              rg.flattenDeep = function (e) {
                return (null == e ? 0 : e.length) ? rB(e, o) : []
              }
              ,
              rg.flattenDepth = function (e, t) {
                return (null == e ? 0 : e.length) ? rB(e, t = t === r ? 1 : oe(t)) : []
              }
              ,
              rg.flip = function (e) {
                return ns(e, 512)
              }
              ,
              rg.flow = oz,
              rg.flowRight = oH,
              rg.fromPairs = function (e) {
                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                  var n = e[t];
                  i[n[0]] = n[1]
                }
                return i
              }
              ,
              rg.functions = function (e) {
                return null == e ? [] : rY(e, ov(e))
              }
              ,
              rg.functionsIn = function (e) {
                return null == e ? [] : rY(e, om(e))
              }
              ,
              rg.groupBy = sy,
              rg.initial = function (e) {
                return (null == e ? 0 : e.length) ? iE(e, 0, -1) : []
              }
              ,
              rg.intersection = nX,
              rg.intersectionBy = n0,
              rg.intersectionWith = n1,
              rg.invert = od,
              rg.invertBy = og,
              rg.invokeMap = sv,
              rg.iteratee = oK,
              rg.keyBy = sm,
              rg.keys = ov,
              rg.keysIn = om,
              rg.map = s_,
              rg.mapKeys = function (e, t) {
                var r = {};
                return t = ny(t, 3),
                  rJ(e, function (e, i, n) {
                    rD(r, t(e, i, n), e)
                  }),
                  r
              }
              ,
              rg.mapValues = function (e, t) {
                var r = {};
                return t = ny(t, 3),
                  rJ(e, function (e, i, n) {
                    rD(r, i, t(e, i, n))
                  }),
                  r
              }
              ,
              rg.matches = function (e) {
                return is(rU(e, 1))
              }
              ,
              rg.matchesProperty = function (e, t) {
                return io(e, rU(t, 1))
              }
              ,
              rg.memoize = sA,
              rg.merge = o_,
              rg.mergeWith = ob,
              rg.method = oF,
              rg.methodOf = oB,
              rg.mixin = oG,
              rg.negate = sx,
              rg.nthArg = function (e) {
                return e = oe(e),
                  iy(function (t) {
                    return ic(t, e)
                  })
              }
              ,
              rg.omit = ow,
              rg.omitBy = function (e, t) {
                return oI(e, sx(ny(t)))
              }
              ,
              rg.once = function (e) {
                return sS(2, e)
              }
              ,
              rg.orderBy = function (e, t, i, n) {
                return null == e ? [] : (sM(t) || (t = null == t ? [] : [t]),
                  sM(i = n ? r : i) || (i = null == i ? [] : [i]),
                  il(e, t, i))
              }
              ,
              rg.over = oJ,
              rg.overArgs = sT,
              rg.overEvery = oQ,
              rg.overSome = oY,
              rg.partial = sj,
              rg.partialRight = sD,
              rg.partition = sb,
              rg.pick = oE,
              rg.pickBy = oI,
              rg.property = oZ,
              rg.propertyOf = function (e) {
                return function (t) {
                  return null == e ? r : rZ(e, t)
                }
              }
              ,
              rg.pull = n6,
              rg.pullAll = n3,
              rg.pullAllBy = function (e, t, r) {
                return e && e.length && t && t.length ? ih(e, t, ny(r, 2)) : e
              }
              ,
              rg.pullAllWith = function (e, t, i) {
                return e && e.length && t && t.length ? ih(e, t, r, i) : e
              }
              ,
              rg.pullAt = n2,
              rg.range = oX,
              rg.rangeRight = o0,
              rg.rearg = sq,
              rg.reject = function (e, t) {
                return (sM(e) ? tu : rF)(e, sx(ny(t, 3)))
              }
              ,
              rg.remove = function (e, t) {
                var r = [];
                if (!(e && e.length))
                  return r;
                var i = -1
                  , n = []
                  , s = e.length;
                for (t = ny(t, 3); ++i < s;) {
                  var o = e[i];
                  t(o, i, e) && (r.push(o),
                    n.push(i))
                }
                return ip(e, n),
                  r
              }
              ,
              rg.rest = function (e, t) {
                if ("function" != typeof e)
                  throw new eO(i);
                return iy(e, t = t === r ? t : oe(t))
              }
              ,
              rg.reverse = n4,
              rg.sampleSize = function (e, t, i) {
                return t = (i ? nN(e, t, i) : t === r) ? 1 : oe(t),
                  (sM(e) ? rN : im)(e, t)
              }
              ,
              rg.set = function (e, t, r) {
                return null == e ? e : i_(e, t, r)
              }
              ,
              rg.setWith = function (e, t, i, n) {
                return n = "function" == typeof n ? n : r,
                  null == e ? e : i_(e, t, i, n)
              }
              ,
              rg.shuffle = function (e) {
                return (sM(e) ? rR : iw)(e)
              }
              ,
              rg.slice = function (e, t, i) {
                var n = null == e ? 0 : e.length;
                return n ? (i && "number" != typeof i && nN(e, t, i) ? (t = 0,
                  i = n) : (t = null == t ? 0 : oe(t),
                    i = i === r ? n : oe(i)),
                  iE(e, t, i)) : []
              }
              ,
              rg.sortBy = sw,
              rg.sortedUniq = function (e) {
                return e && e.length ? iO(e) : []
              }
              ,
              rg.sortedUniqBy = function (e, t) {
                return e && e.length ? iO(e, ny(t, 2)) : []
              }
              ,
              rg.split = function (e, t, i) {
                return i && "number" != typeof i && nN(e, t, i) && (t = i = r),
                  (i = i === r ? 4294967295 : i >>> 0) ? (e = on(e)) && ("string" == typeof t || null != t && !s1(t)) && !(t = iR(t)) && t$(e) ? i$(tF(e), 0, i) : e.split(t, i) : []
              }
              ,
              rg.spread = function (e, t) {
                if ("function" != typeof e)
                  throw new eO(i);
                return t = null == t ? 0 : t6(oe(t), 0),
                  iy(function (r) {
                    var i = r[t]
                      , n = i$(r, 0, t);
                    return i && td(n, i),
                      ts(e, this, n)
                  })
              }
              ,
              rg.tail = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? iE(e, 1, t) : []
              }
              ,
              rg.take = function (e, t, i) {
                return e && e.length ? iE(e, 0, (t = i || t === r ? 1 : oe(t)) < 0 ? 0 : t) : []
              }
              ,
              rg.takeRight = function (e, t, i) {
                var n = null == e ? 0 : e.length;
                return n ? iE(e, (t = n - (t = i || t === r ? 1 : oe(t))) < 0 ? 0 : t, n) : []
              }
              ,
              rg.takeRightWhile = function (e, t) {
                return e && e.length ? iT(e, ny(t, 3), !1, !0) : []
              }
              ,
              rg.takeWhile = function (e, t) {
                return e && e.length ? iT(e, ny(t, 3)) : []
              }
              ,
              rg.tap = function (e, t) {
                return t(e),
                  e
              }
              ,
              rg.throttle = function (e, t, r) {
                var n = !0
                  , s = !0;
                if ("function" != typeof e)
                  throw new eO(i);
                return sQ(r) && (n = "leading" in r ? !!r.leading : n,
                  s = "trailing" in r ? !!r.trailing : s),
                  sN(e, t, {
                    leading: n,
                    maxWait: t,
                    trailing: s
                  })
              }
              ,
              rg.thru = sl,
              rg.toArray = s9,
              rg.toPairs = oS,
              rg.toPairsIn = oP,
              rg.toPath = function (e) {
                return sM(e) ? tf(e, nV) : s3(e) ? [e] : iG(nH(on(e)))
              }
              ,
              rg.toPlainObject = oi,
              rg.transform = function (e, t, r) {
                var i = sM(e)
                  , n = i || sK(e) || s2(e);
                if (t = ny(t, 4),
                  null == r) {
                  var s = e && e.constructor;
                  r = n ? i ? new s : [] : sQ(e) && sG(s) ? ry(eB(e)) : {}
                }
                return (n ? ta : rJ)(e, function (e, i, n) {
                  return t(r, e, i, n)
                }),
                  r
              }
              ,
              rg.unary = function (e) {
                return sI(e, 1)
              }
              ,
              rg.union = n8,
              rg.unionBy = n9,
              rg.unionWith = n7,
              rg.uniq = function (e) {
                return e && e.length ? iC(e) : []
              }
              ,
              rg.uniqBy = function (e, t) {
                return e && e.length ? iC(e, ny(t, 2)) : []
              }
              ,
              rg.uniqWith = function (e, t) {
                return t = "function" == typeof t ? t : r,
                  e && e.length ? iC(e, r, t) : []
              }
              ,
              rg.unset = function (e, t) {
                return null == e || iA(e, t)
              }
              ,
              rg.unzip = se,
              rg.unzipWith = st,
              rg.update = function (e, t, r) {
                return null == e ? e : ix(e, t, iU(r))
              }
              ,
              rg.updateWith = function (e, t, i, n) {
                return n = "function" == typeof n ? n : r,
                  null == e ? e : ix(e, t, iU(i), n)
              }
              ,
              rg.values = oO,
              rg.valuesIn = function (e) {
                return null == e ? [] : tT(e, om(e))
              }
              ,
              rg.without = sr,
              rg.words = oU,
              rg.wrap = function (e, t) {
                return sj(iU(t), e)
              }
              ,
              rg.xor = si,
              rg.xorBy = sn,
              rg.xorWith = ss,
              rg.zip = so,
              rg.zipObject = function (e, t) {
                return iq(e || [], t || [], rA)
              }
              ,
              rg.zipObjectDeep = function (e, t) {
                return iq(e || [], t || [], i_)
              }
              ,
              rg.zipWith = sa,
              rg.entries = oS,
              rg.entriesIn = oP,
              rg.extend = oo,
              rg.extendWith = oa,
              oG(rg, rg),
              rg.add = o6,
              rg.attempt = ok,
              rg.camelCase = oN,
              rg.capitalize = oR,
              rg.ceil = o3,
              rg.clamp = function (e, t, i) {
                return i === r && (i = t,
                  t = r),
                  i !== r && (i = (i = or(i)) == i ? i : 0),
                  t !== r && (t = (t = or(t)) == t ? t : 0),
                  rL(or(e), t, i)
              }
              ,
              rg.clone = function (e) {
                return rU(e, 4)
              }
              ,
              rg.cloneDeep = function (e) {
                return rU(e, 5)
              }
              ,
              rg.cloneDeepWith = function (e, t) {
                return rU(e, 5, t = "function" == typeof t ? t : r)
              }
              ,
              rg.cloneWith = function (e, t) {
                return rU(e, 4, t = "function" == typeof t ? t : r)
              }
              ,
              rg.conformsTo = function (e, t) {
                return null == t || rk(e, t, ov(t))
              }
              ,
              rg.deburr = oC,
              rg.defaultTo = function (e, t) {
                return null == e || e != e ? t : e
              }
              ,
              rg.divide = o2,
              rg.endsWith = function (e, t, i) {
                e = on(e),
                  t = iR(t);
                var n = e.length
                  , s = i = i === r ? n : rL(oe(i), 0, n);
                return (i -= t.length) >= 0 && e.slice(i, s) == t
              }
              ,
              rg.eq = sL,
              rg.escape = function (e) {
                return (e = on(e)) && H.test(e) ? e.replace(M, tU) : e
              }
              ,
              rg.escapeRegExp = function (e) {
                return (e = on(e)) && Q.test(e) ? e.replace(J, "\\$&") : e
              }
              ,
              rg.every = function (e, t, i) {
                var n = sM(e) ? tl : rV;
                return i && nN(e, t, i) && (t = r),
                  n(e, ny(t, 3))
              }
              ,
              rg.find = sp,
              rg.findIndex = nJ,
              rg.findKey = function (e, t) {
                return t_(e, ny(t, 3), rJ)
              }
              ,
              rg.findLast = sf,
              rg.findLastIndex = nQ,
              rg.findLastKey = function (e, t) {
                return t_(e, ny(t, 3), rQ)
              }
              ,
              rg.floor = o4,
              rg.forEach = sd,
              rg.forEachRight = sg,
              rg.forIn = function (e, t) {
                return null == e ? e : rG(e, ny(t, 3), om)
              }
              ,
              rg.forInRight = function (e, t) {
                return null == e ? e : rW(e, ny(t, 3), om)
              }
              ,
              rg.forOwn = function (e, t) {
                return e && rJ(e, ny(t, 3))
              }
              ,
              rg.forOwnRight = function (e, t) {
                return e && rQ(e, ny(t, 3))
              }
              ,
              rg.get = op,
              rg.gt = sU,
              rg.gte = sk,
              rg.has = function (e, t) {
                return null != e && nI(e, t, r5)
              }
              ,
              rg.hasIn = of,
              rg.head = nZ,
              rg.identity = oV,
              rg.includes = function (e, t, r, i) {
                e = sH(e) ? e : oO(e),
                  r = r && !i ? oe(r) : 0;
                var n = e.length;
                return r < 0 && (r = t6(n + r, 0)),
                  s6(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tw(e, t, r) > -1
              }
              ,
              rg.indexOf = function (e, t, r) {
                var i = null == e ? 0 : e.length;
                if (!i)
                  return -1;
                var n = null == r ? 0 : oe(r);
                return n < 0 && (n = t6(i + n, 0)),
                  tw(e, t, n)
              }
              ,
              rg.inRange = function (e, t, i) {
                var n, s, o;
                return t = s7(t),
                  i === r ? (i = t,
                    t = 0) : i = s7(i),
                  (n = e = or(e)) >= t3(s = t, o = i) && n < t6(s, o)
              }
              ,
              rg.invoke = oy,
              rg.isArguments = s$,
              rg.isArray = sM,
              rg.isArrayBuffer = sz,
              rg.isArrayLike = sH,
              rg.isArrayLikeObject = sV,
              rg.isBoolean = function (e) {
                return !0 === e || !1 === e || sY(e) && r0(e) == h
              }
              ,
              rg.isBuffer = sK,
              rg.isDate = sF,
              rg.isElement = function (e) {
                return sY(e) && 1 === e.nodeType && !s0(e)
              }
              ,
              rg.isEmpty = function (e) {
                if (null == e)
                  return !0;
                if (sH(e) && (sM(e) || "string" == typeof e || "function" == typeof e.splice || sK(e) || s2(e) || s$(e)))
                  return !e.length;
                var t = nE(e);
                if (t == y || t == w)
                  return !e.size;
                if (nx(e))
                  return !it(e).length;
                for (var r in e)
                  if (eT.call(e, r))
                    return !1;
                return !0
              }
              ,
              rg.isEqual = function (e, t) {
                return r8(e, t)
              }
              ,
              rg.isEqualWith = function (e, t, i) {
                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                return n === r ? r8(e, t, r, i) : !!n
              }
              ,
              rg.isError = sB,
              rg.isFinite = function (e) {
                return "number" == typeof e && t0(e)
              }
              ,
              rg.isFunction = sG,
              rg.isInteger = sW,
              rg.isLength = sJ,
              rg.isMap = sZ,
              rg.isMatch = function (e, t) {
                return e === t || r9(e, t, nm(t))
              }
              ,
              rg.isMatchWith = function (e, t, i) {
                return i = "function" == typeof i ? i : r,
                  r9(e, t, nm(t), i)
              }
              ,
              rg.isNaN = function (e) {
                return sX(e) && e != +e
              }
              ,
              rg.isNative = function (e) {
                if (nA(e))
                  throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                return r7(e)
              }
              ,
              rg.isNil = function (e) {
                return null == e
              }
              ,
              rg.isNull = function (e) {
                return null === e
              }
              ,
              rg.isNumber = sX,
              rg.isObject = sQ,
              rg.isObjectLike = sY,
              rg.isPlainObject = s0,
              rg.isRegExp = s1,
              rg.isSafeInteger = function (e) {
                return sW(e) && e >= -9007199254740991 && e <= 9007199254740991
              }
              ,
              rg.isSet = s5,
              rg.isString = s6,
              rg.isSymbol = s3,
              rg.isTypedArray = s2,
              rg.isUndefined = function (e) {
                return e === r
              }
              ,
              rg.isWeakMap = function (e) {
                return sY(e) && nE(e) == S
              }
              ,
              rg.isWeakSet = function (e) {
                return sY(e) && "[object WeakSet]" == r0(e)
              }
              ,
              rg.join = function (e, t) {
                return null == e ? "" : t1.call(e, t)
              }
              ,
              rg.kebabCase = oA,
              rg.last = n5,
              rg.lastIndexOf = function (e, t, i) {
                var n = null == e ? 0 : e.length;
                if (!n)
                  return -1;
                var s = n;
                return i !== r && (s = (s = oe(i)) < 0 ? t6(n + s, 0) : t3(s, n - 1)),
                  t == t ? function (e, t, r) {
                    for (var i = r + 1; i-- && e[i] !== t;)
                      ;
                    return i
                  }(e, t, s) : tb(e, tI, s, !0)
              }
              ,
              rg.lowerCase = ox,
              rg.lowerFirst = oT,
              rg.lt = s4,
              rg.lte = s8,
              rg.max = function (e) {
                return e && e.length ? rK(e, oV, r1) : r
              }
              ,
              rg.maxBy = function (e, t) {
                return e && e.length ? rK(e, ny(t, 2), r1) : r
              }
              ,
              rg.mean = function (e) {
                return tS(e, oV)
              }
              ,
              rg.meanBy = function (e, t) {
                return tS(e, ny(t, 2))
              }
              ,
              rg.min = function (e) {
                return e && e.length ? rK(e, oV, ir) : r
              }
              ,
              rg.minBy = function (e, t) {
                return e && e.length ? rK(e, ny(t, 2), ir) : r
              }
              ,
              rg.stubArray = o1,
              rg.stubFalse = o5,
              rg.stubObject = function () {
                return {}
              }
              ,
              rg.stubString = function () {
                return ""
              }
              ,
              rg.stubTrue = function () {
                return !0
              }
              ,
              rg.multiply = o8,
              rg.nth = function (e, t) {
                return e && e.length ? ic(e, oe(t)) : r
              }
              ,
              rg.noConflict = function () {
                return e6._ === this && (e6._ = eU),
                  this
              }
              ,
              rg.noop = oW,
              rg.now = sE,
              rg.pad = function (e, t, r) {
                e = on(e);
                var i = (t = oe(t)) ? tK(e) : 0;
                if (!t || i >= t)
                  return e;
                var n = (t - i) / 2;
                return i9(tY(n), r) + e + i9(tQ(n), r)
              }
              ,
              rg.padEnd = function (e, t, r) {
                e = on(e);
                var i = (t = oe(t)) ? tK(e) : 0;
                return t && i < t ? e + i9(t - i, r) : e
              }
              ,
              rg.padStart = function (e, t, r) {
                e = on(e);
                var i = (t = oe(t)) ? tK(e) : 0;
                return t && i < t ? i9(t - i, r) + e : e
              }
              ,
              rg.parseInt = function (e, t, r) {
                return r || null == t ? t = 0 : t && (t = +t),
                  t4(on(e).replace(Y, ""), t || 0)
              }
              ,
              rg.random = function (e, t, i) {
                if (i && "boolean" != typeof i && nN(e, t, i) && (t = i = r),
                  i === r && ("boolean" == typeof t ? (i = t,
                    t = r) : "boolean" == typeof e && (i = e,
                      e = r)),
                  e === r && t === r ? (e = 0,
                    t = 1) : (e = s7(e),
                      t === r ? (t = e,
                        e = 0) : t = s7(t)),
                  e > t) {
                  var n = e;
                  e = t,
                    t = n
                }
                if (i || e % 1 || t % 1) {
                  var s = t8();
                  return t3(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                }
                return id(e, t)
              }
              ,
              rg.reduce = function (e, t, r) {
                var i = sM(e) ? tg : tN
                  , n = arguments.length < 3;
                return i(e, ny(t, 4), r, n, rz)
              }
              ,
              rg.reduceRight = function (e, t, r) {
                var i = sM(e) ? ty : tN
                  , n = arguments.length < 3;
                return i(e, ny(t, 4), r, n, rH)
              }
              ,
              rg.repeat = function (e, t, i) {
                return t = (i ? nN(e, t, i) : t === r) ? 1 : oe(t),
                  ig(on(e), t)
              }
              ,
              rg.replace = function () {
                var e = arguments
                  , t = on(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2])
              }
              ,
              rg.result = function (e, t, i) {
                t = ik(t, e);
                var n = -1
                  , s = t.length;
                for (s || (s = 1,
                  e = r); ++n < s;) {
                  var o = null == e ? r : e[nV(t[n])];
                  o === r && (n = s,
                    o = i),
                    e = sG(o) ? o.call(e) : o
                }
                return e
              }
              ,
              rg.round = o9,
              rg.runInContext = e,
              rg.sample = function (e) {
                return (sM(e) ? rO : iv)(e)
              }
              ,
              rg.size = function (e) {
                if (null == e)
                  return 0;
                if (sH(e))
                  return s6(e) ? tK(e) : e.length;
                var t = nE(e);
                return t == y || t == w ? e.size : it(e).length
              }
              ,
              rg.snakeCase = oj,
              rg.some = function (e, t, i) {
                var n = sM(e) ? tv : iI;
                return i && nN(e, t, i) && (t = r),
                  n(e, ny(t, 3))
              }
              ,
              rg.sortedIndex = function (e, t) {
                return iS(e, t)
              }
              ,
              rg.sortedIndexBy = function (e, t, r) {
                return iP(e, t, ny(r, 2))
              }
              ,
              rg.sortedIndexOf = function (e, t) {
                var r = null == e ? 0 : e.length;
                if (r) {
                  var i = iS(e, t);
                  if (i < r && sL(e[i], t))
                    return i
                }
                return -1
              }
              ,
              rg.sortedLastIndex = function (e, t) {
                return iS(e, t, !0)
              }
              ,
              rg.sortedLastIndexBy = function (e, t, r) {
                return iP(e, t, ny(r, 2), !0)
              }
              ,
              rg.sortedLastIndexOf = function (e, t) {
                if (null == e ? 0 : e.length) {
                  var r = iS(e, t, !0) - 1;
                  if (sL(e[r], t))
                    return r
                }
                return -1
              }
              ,
              rg.startCase = oD,
              rg.startsWith = function (e, t, r) {
                return e = on(e),
                  r = null == r ? 0 : rL(oe(r), 0, e.length),
                  t = iR(t),
                  e.slice(r, r + t.length) == t
              }
              ,
              rg.subtract = o7,
              rg.sum = function (e) {
                return e && e.length ? tR(e, oV) : 0
              }
              ,
              rg.sumBy = function (e, t) {
                return e && e.length ? tR(e, ny(t, 2)) : 0
              }
              ,
              rg.template = function (e, t, i) {
                var n = rg.templateSettings;
                i && nN(e, t, i) && (t = r),
                  e = on(e),
                  t = oa({}, t, n, no);
                var s, o, a = oa({}, t.imports, n.imports, no), c = ov(a), l = tT(a, c), u = 0, h = t.interpolate || ef, p = "__p += '", f = eS((t.escape || ef).source + "|" + h.source + "|" + (h === F ? es : ef).source + "|" + (t.evaluate || ef).source + "|$", "g"), d = "//# sourceURL=" + (eT.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eJ + "]") + `
`;
                e.replace(f, function (t, r, i, n, a, c) {
                  return i || (i = n),
                    p += e.slice(u, c).replace(ed, tk),
                    r && (s = !0,
                      p += `' +
__e(` + r + `) +
'`),
                    a && (o = !0,
                      p += `';
` + a + `;
__p += '`),
                    i && (p += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`),
                    u = c + t.length,
                    t
                }),
                  p += `';
`;
                var g = eT.call(t, "variable") && t.variable;
                if (g) {
                  if (ei.test(g))
                    throw new eb("Invalid `variable` option passed into `_.template`")
                } else
                  p = `with (obj) {
` + p + `
}
`;
                p = (o ? p.replace(L, "") : p).replace(U, "$1").replace(k, "$1;"),
                  p = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                var y = ok(function () {
                  return ew(c, d + "return " + p).apply(r, l)
                });
                if (y.source = p,
                  sB(y))
                  throw y;
                return y
              }
              ,
              rg.times = function (e, t) {
                if ((e = oe(e)) < 1 || e > 9007199254740991)
                  return [];
                var r = 4294967295
                  , i = t3(e, 4294967295);
                t = ny(t),
                  e -= 4294967295;
                for (var n = tC(i, t); ++r < e;)
                  t(r);
                return n
              }
              ,
              rg.toFinite = s7,
              rg.toInteger = oe,
              rg.toLength = ot,
              rg.toLower = function (e) {
                return on(e).toLowerCase()
              }
              ,
              rg.toNumber = or,
              rg.toSafeInteger = function (e) {
                return e ? rL(oe(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
              }
              ,
              rg.toString = on,
              rg.toUpper = function (e) {
                return on(e).toUpperCase()
              }
              ,
              rg.trim = function (e, t, i) {
                if ((e = on(e)) && (i || t === r))
                  return tA(e);
                if (!e || !(t = iR(t)))
                  return e;
                var n = tF(e)
                  , s = tF(t)
                  , o = tD(n, s)
                  , a = tq(n, s) + 1;
                return i$(n, o, a).join("")
              }
              ,
              rg.trimEnd = function (e, t, i) {
                if ((e = on(e)) && (i || t === r))
                  return e.slice(0, tB(e) + 1);
                if (!e || !(t = iR(t)))
                  return e;
                var n = tF(e)
                  , s = tq(n, tF(t)) + 1;
                return i$(n, 0, s).join("")
              }
              ,
              rg.trimStart = function (e, t, i) {
                if ((e = on(e)) && (i || t === r))
                  return e.replace(Y, "");
                if (!e || !(t = iR(t)))
                  return e;
                var n = tF(e)
                  , s = tD(n, tF(t));
                return i$(n, s).join("")
              }
              ,
              rg.truncate = function (e, t) {
                var i = 30
                  , n = "...";
                if (sQ(t)) {
                  var s = "separator" in t ? t.separator : s;
                  i = "length" in t ? oe(t.length) : i,
                    n = "omission" in t ? iR(t.omission) : n
                }
                var o = (e = on(e)).length;
                if (t$(e)) {
                  var a = tF(e);
                  o = a.length
                }
                if (i >= o)
                  return e;
                var c = i - tK(n);
                if (c < 1)
                  return n;
                var l = a ? i$(a, 0, c).join("") : e.slice(0, c);
                if (s === r)
                  return l + n;
                if (a && (c += l.length - c),
                  s1(s)) {
                  if (e.slice(c).search(s)) {
                    var u, h = l;
                    for (s.global || (s = eS(s.source, on(eo.exec(s)) + "g")),
                      s.lastIndex = 0; u = s.exec(h);)
                      var p = u.index;
                    l = l.slice(0, p === r ? c : p)
                  }
                } else if (e.indexOf(iR(s), c) != c) {
                  var f = l.lastIndexOf(s);
                  f > -1 && (l = l.slice(0, f))
                }
                return l + n
              }
              ,
              rg.unescape = function (e) {
                return (e = on(e)) && z.test(e) ? e.replace($, tG) : e
              }
              ,
              rg.uniqueId = function (e) {
                var t = ++ej;
                return on(e) + t
              }
              ,
              rg.upperCase = oq,
              rg.upperFirst = oL,
              rg.each = sd,
              rg.eachRight = sg,
              rg.first = nZ,
              oG(rg, (ev = {},
                rJ(rg, function (e, t) {
                  eT.call(rg.prototype, t) || (ev[t] = e)
                }),
                ev), {
                chain: !1
              }),
              rg.VERSION = "4.17.21",
              ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                rg[e].placeholder = rg
              }),
              ta(["drop", "take"], function (e, t) {
                r_.prototype[e] = function (i) {
                  i = i === r ? 1 : t6(oe(i), 0);
                  var n = this.__filtered__ && !t ? new r_(this) : this.clone();
                  return n.__filtered__ ? n.__takeCount__ = t3(i, n.__takeCount__) : n.__views__.push({
                    size: t3(i, 4294967295),
                    type: e + (n.__dir__ < 0 ? "Right" : "")
                  }),
                    n
                }
                  ,
                  r_.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse()
                  }
              }),
              ta(["filter", "map", "takeWhile"], function (e, t) {
                var r = t + 1
                  , i = 1 == r || 3 == r;
                r_.prototype[e] = function (e) {
                  var t = this.clone();
                  return t.__iteratees__.push({
                    iteratee: ny(e, 3),
                    type: r
                  }),
                    t.__filtered__ = t.__filtered__ || i,
                    t
                }
              }),
              ta(["head", "last"], function (e, t) {
                var r = "take" + (t ? "Right" : "");
                r_.prototype[e] = function () {
                  return this[r](1).value()[0]
                }
              }),
              ta(["initial", "tail"], function (e, t) {
                var r = "drop" + (t ? "" : "Right");
                r_.prototype[e] = function () {
                  return this.__filtered__ ? new r_(this) : this[r](1)
                }
              }),
              r_.prototype.compact = function () {
                return this.filter(oV)
              }
              ,
              r_.prototype.find = function (e) {
                return this.filter(e).head()
              }
              ,
              r_.prototype.findLast = function (e) {
                return this.reverse().find(e)
              }
              ,
              r_.prototype.invokeMap = iy(function (e, t) {
                return "function" == typeof e ? new r_(this) : this.map(function (r) {
                  return r2(r, e, t)
                })
              }),
              r_.prototype.reject = function (e) {
                return this.filter(sx(ny(e)))
              }
              ,
              r_.prototype.slice = function (e, t) {
                e = oe(e);
                var i = this;
                return i.__filtered__ && (e > 0 || t < 0) ? new r_(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)),
                  t !== r && (i = (t = oe(t)) < 0 ? i.dropRight(-t) : i.take(t - e)),
                  i)
              }
              ,
              r_.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse()
              }
              ,
              r_.prototype.toArray = function () {
                return this.take(4294967295)
              }
              ,
              rJ(r_.prototype, function (e, t) {
                var i = /^(?:filter|find|map|reject)|While$/.test(t)
                  , n = /^(?:head|last)$/.test(t)
                  , s = rg[n ? "take" + ("last" == t ? "Right" : "") : t]
                  , o = n || /^find/.test(t);
                s && (rg.prototype[t] = function () {
                  var t = this.__wrapped__
                    , a = n ? [1] : arguments
                    , c = t instanceof r_
                    , l = a[0]
                    , u = c || sM(t)
                    , h = function (e) {
                      var t = s.apply(rg, td([e], a));
                      return n && p ? t[0] : t
                    };
                  u && i && "function" == typeof l && 1 != l.length && (c = u = !1);
                  var p = this.__chain__
                    , f = !!this.__actions__.length
                    , d = o && !p
                    , g = c && !f;
                  if (!o && u) {
                    t = g ? t : new r_(this);
                    var y = e.apply(t, a);
                    return y.__actions__.push({
                      func: sl,
                      args: [h],
                      thisArg: r
                    }),
                      new rm(y, p)
                  }
                  return d && g ? e.apply(this, a) : (y = this.thru(h),
                    d ? n ? y.value()[0] : y.value() : y)
                }
                )
              }),
              ta(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                var t = eN[e]
                  , r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                  , i = /^(?:pop|shift)$/.test(e);
                rg.prototype[e] = function () {
                  var e = arguments;
                  if (i && !this.__chain__) {
                    var n = this.value();
                    return t.apply(sM(n) ? n : [], e)
                  }
                  return this[r](function (r) {
                    return t.apply(sM(r) ? r : [], e)
                  })
                }
              }),
              rJ(r_.prototype, function (e, t) {
                var r = rg[t];
                if (r) {
                  var i = r.name + "";
                  eT.call(ro, i) || (ro[i] = []),
                    ro[i].push({
                      name: t,
                      func: r
                    })
                }
              }),
              ro[i3(r, 2).name] = [{
                name: "wrapper",
                func: r
              }],
              r_.prototype.clone = function () {
                var e = new r_(this.__wrapped__);
                return e.__actions__ = iG(this.__actions__),
                  e.__dir__ = this.__dir__,
                  e.__filtered__ = this.__filtered__,
                  e.__iteratees__ = iG(this.__iteratees__),
                  e.__takeCount__ = this.__takeCount__,
                  e.__views__ = iG(this.__views__),
                  e
              }
              ,
              r_.prototype.reverse = function () {
                if (this.__filtered__) {
                  var e = new r_(this);
                  e.__dir__ = -1,
                    e.__filtered__ = !0
                } else
                  e = this.clone(),
                    e.__dir__ *= -1;
                return e
              }
              ,
              r_.prototype.value = function () {
                var e = this.__wrapped__.value()
                  , t = this.__dir__
                  , r = sM(e)
                  , i = t < 0
                  , n = r ? e.length : 0
                  , s = function (e, t, r) {
                    for (var i = -1, n = r.length; ++i < n;) {
                      var s = r[i]
                        , o = s.size;
                      switch (s.type) {
                        case "drop":
                          e += o;
                          break;
                        case "dropRight":
                          t -= o;
                          break;
                        case "take":
                          t = t3(t, e + o);
                          break;
                        case "takeRight":
                          e = t6(e, t - o)
                      }
                    }
                    return {
                      start: e,
                      end: t
                    }
                  }(0, n, this.__views__)
                  , o = s.start
                  , a = s.end
                  , c = a - o
                  , l = i ? a : o - 1
                  , u = this.__iteratees__
                  , h = u.length
                  , p = 0
                  , f = t3(c, this.__takeCount__);
                if (!r || !i && n == c && f == c)
                  return ij(e, this.__actions__);
                var d = [];
                e: for (; c-- && p < f;) {
                  l += t;
                  for (var g = -1, y = e[l]; ++g < h;) {
                    var v = u[g]
                      , m = v.iteratee
                      , _ = v.type
                      , b = m(y);
                    if (2 == _)
                      y = b;
                    else if (!b) {
                      if (1 == _)
                        continue e;
                      break e
                    }
                  }
                  d[p++] = y
                }
                return d
              }
              ,
              rg.prototype.at = su,
              rg.prototype.chain = function () {
                return sc(this)
              }
              ,
              rg.prototype.commit = function () {
                return new rm(this.value(), this.__chain__)
              }
              ,
              rg.prototype.next = function () {
                this.__values__ === r && (this.__values__ = s9(this.value()));
                var e = this.__index__ >= this.__values__.length
                  , t = e ? r : this.__values__[this.__index__++];
                return {
                  done: e,
                  value: t
                }
              }
              ,
              rg.prototype.plant = function (e) {
                for (var t, i = this; i instanceof rv;) {
                  var n = nF(i);
                  n.__index__ = 0,
                    n.__values__ = r,
                    t ? s.__wrapped__ = n : t = n;
                  var s = n;
                  i = i.__wrapped__
                }
                return s.__wrapped__ = e,
                  t
              }
              ,
              rg.prototype.reverse = function () {
                var e = this.__wrapped__;
                if (e instanceof r_) {
                  var t = e;
                  return this.__actions__.length && (t = new r_(this)),
                    (t = t.reverse()).__actions__.push({
                      func: sl,
                      args: [n4],
                      thisArg: r
                    }),
                    new rm(t, this.__chain__)
                }
                return this.thru(n4)
              }
              ,
              rg.prototype.toJSON = rg.prototype.valueOf = rg.prototype.value = function () {
                return ij(this.__wrapped__, this.__actions__)
              }
              ,
              rg.prototype.first = rg.prototype.head,
              e2 && (rg.prototype[e2] = function () {
                return this
              }
              ),
              rg
          }();
        e2 ? ((e2.exports = tW)._ = tW,
          e3._ = tW) : e6._ = tW
      }
      ).call(iJ)
    }(iQ, iQ.exports);
    var iY = Object.defineProperty
      , iZ = Object.defineProperties
      , iX = Object.getOwnPropertyDescriptors
      , i0 = Object.getOwnPropertySymbols
      , i1 = Object.prototype.hasOwnProperty
      , i5 = Object.prototype.propertyIsEnumerable
      , i6 = (e, t, r) => t in e ? iY(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , i3 = (e, t) => {
        for (var r in t || (t = {}))
          i1.call(t, r) && i6(e, r, t[r]);
        if (i0)
          for (var r of i0(t))
            i5.call(t, r) && i6(e, r, t[r]);
        return e
      }
      , i2 = (e, t) => iZ(e, iX(t));
    function i4(e, t, r) {
      var i;
      let n = (0,
        s.DQ)(e);
      return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
    }
    function i8(e) {
      return e.includes(":") ? e.split(":")[1] : e
    }
    function i9(e) {
      return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
    }
    function i7(e) {
      var t, r, i, n;
      let o = {};
      if (!(0,
        s.L5)(e))
        return o;
      for (let [a, c] of Object.entries(e)) {
        let e = (0,
          s.gp)(a) ? [a] : c.chains
          , l = c.methods || []
          , u = c.events || []
          , h = c.rpcMap || {}
          , p = (0,
            s.M)(a);
        o[p] = i2(i3(i3({}, o[p]), c), {
          chains: (0,
            s.eG)(e, null == (t = o[p]) ? void 0 : t.chains),
          methods: (0,
            s.eG)(l, null == (r = o[p]) ? void 0 : r.methods),
          events: (0,
            s.eG)(u, null == (i = o[p]) ? void 0 : i.events),
          rpcMap: i3(i3({}, h), null == (n = o[p]) ? void 0 : n.rpcMap)
        })
      }
      return o
    }
    function ne(e) {
      return e.includes(":") ? e.split(":")[2] : e
    }
    function nt(e) {
      return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
    }
    let nr = {}
      , ni = e => nr[e]
      , nn = (e, t) => {
        nr[e] = t
      }
      ;
    class ns {
      constructor(e) {
        this.name = "polkadot",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
          this.chainId = e,
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          let i = i8(t);
          e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || i4(e, this.namespace, this.client.core.projectId);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    class no {
      constructor(e) {
        this.name = "eip155",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.httpProviders = this.createHttpProviders(),
          this.chainId = parseInt(this.getDefaultChain())
      }
      async request(e) {
        switch (e.request.method) {
          case "eth_requestAccounts":
          case "eth_accounts":
            return this.getAccounts();
          case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(e);
          case "eth_chainId":
            return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
          this.chainId = parseInt(e),
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId.toString();
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      createHttpProvider(e, t) {
        let r = t || i4(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.k(r, ni("disableProviderPing")))
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          let i = parseInt(i8(t));
          e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
      }
      getHttpProvider() {
        let e = this.chainId
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      async handleSwitchChain(e) {
        var t, r;
        let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
        i = i.startsWith("0x") ? i : `0x ${i}`;
        let n = parseInt(i, 16);
        if (this.isChainApproved(n))
          this.setDefaultChain(`${n}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
          await this.client.request({
            topic: e.topic,
            request: {
              method: e.request.method,
              params: [{
                chainId: i
              }]
            },
            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
          }),
            this.setDefaultChain(`${n}`);
        else
          throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
      }
      isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
      }
    }
    class na {
      constructor(e) {
        this.name = "solana",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
          this.chainId = e,
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          let i = i8(t);
          e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || i4(e, this.namespace, this.client.core.projectId);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    class nc {
      constructor(e) {
        this.name = "cosmos",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
          this.chainId = e,
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          let i = i8(t);
          e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || i4(e, this.namespace, this.client.core.projectId);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    class nl {
      constructor(e) {
        this.name = "cip34",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
          this.chainId = e,
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          let r = this.getCardanoRPCUrl(t)
            , i = i8(t);
          e[i] = this.createHttpProvider(i, r)
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      getCardanoRPCUrl(e) {
        let t = this.namespace.rpcMap;
        if (t)
          return t[e]
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || this.getCardanoRPCUrl(e);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    class nu {
      constructor(e) {
        this.name = "elrond",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
          this.chainId = e,
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          let i = i8(t);
          e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || i4(e, this.namespace, this.client.core.projectId);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    class nh {
      constructor(e) {
        this.name = "multiversx",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
          this.chainId = e,
          this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          let i = i8(t);
          e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || i4(e, this.namespace, this.client.core.projectId);
        if (!r)
          throw Error(`No RPC url provided for chainId: ${e}`);
        return new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    class np {
      constructor(e) {
        this.name = "near",
          this.namespace = e.namespace,
          this.events = ni("events"),
          this.client = ni("client"),
          this.chainId = this.getDefaultChain(),
          this.httpProviders = this.createHttpProviders()
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
      }
      requestAccounts() {
        return this.getAccounts()
      }
      getDefaultChain() {
        if (this.chainId)
          return this.chainId;
        if (this.namespace.defaultChain)
          return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
          throw Error("ChainId not found");
        return e.split(":")[1]
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
      }
      setDefaultChain(e, t) {
        if (this.chainId = e,
          !this.httpProviders[e]) {
          let r = t || i4(`${this.name}:${e}`, this.namespace);
          if (!r)
            throw Error(`No RPC url provided for chainId: ${e}`);
          this.setHttpProvider(e, r)
        }
        this.events.emit(iW.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
      }
      createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
          var r;
          e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        }
        ),
          e
      }
      getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
          throw Error(`JSON-RPC provider for ${e} not found`);
        return t
      }
      setHttpProvider(e, t) {
        let r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
      }
      createHttpProvider(e, t) {
        let r = t || i4(e, this.namespace);
        return typeof r > "u" ? void 0 : new eD.r(new iF.Z(r, ni("disableProviderPing")))
      }
    }
    var nf = Object.defineProperty
      , nd = Object.defineProperties
      , ng = Object.getOwnPropertyDescriptors
      , ny = Object.getOwnPropertySymbols
      , nv = Object.prototype.hasOwnProperty
      , nm = Object.prototype.propertyIsEnumerable
      , n_ = (e, t, r) => t in e ? nf(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , nb = (e, t) => {
        for (var r in t || (t = {}))
          nv.call(t, r) && n_(e, r, t[r]);
        if (ny)
          for (var r of ny(t))
            nm.call(t, r) && n_(e, r, t[r]);
        return e
      }
      , nw = (e, t) => nd(e, ng(t));
    class nE {
      constructor(e) {
        this.events = new (n()),
          this.rpcProviders = {},
          this.shouldAbortPairingAttempt = !1,
          this.maxPairingAttempts = 10,
          this.disableProviderPing = !1,
          this.providerOpts = e,
          this.logger = "u" > typeof e?.logger && "string" != typeof e?.logger ? e.logger : (0,
            c.pino)((0,
              c.getDefaultLoggerOptions)({
                level: e?.logger || iB
              })),
          this.disableProviderPing = e?.disableProviderPing || !1
      }
      static async init(e) {
        let t = new nE(e);
        return await t.initialize(),
          t
      }
      async request(e, t) {
        let [r, i] = this.validateChain(t);
        if (!this.session)
          throw Error("Please call connect() before request()");
        return await this.getProvider(r).request({
          request: nb({}, e),
          chainId: `${r}:${i}`,
          topic: this.session.topic
        })
      }
      sendAsync(e, t, r) {
        this.request(e, r).then(e => t(null, e)).catch(e => t(e, void 0))
      }
      async enable() {
        if (!this.client)
          throw Error("Sign Client not initialized");
        return this.session || await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties
        }),
          await this.requestAccounts()
      }
      async disconnect() {
        var e;
        if (!this.session)
          throw Error("Please call connect() before enable()");
        await this.client.disconnect({
          topic: null == (e = this.session) ? void 0 : e.topic,
          reason: (0,
            s.D6)("USER_DISCONNECTED")
        }),
          await this.cleanup()
      }
      async connect(e) {
        if (!this.client)
          throw Error("Sign Client not initialized");
        if (this.setNamespaces(e),
          await this.cleanupPendingPairings(),
          !e.skipPairing)
          return await this.pair(e.pairingTopic)
      }
      on(e, t) {
        this.events.on(e, t)
      }
      once(e, t) {
        this.events.once(e, t)
      }
      removeListener(e, t) {
        this.events.removeListener(e, t)
      }
      off(e, t) {
        this.events.off(e, t)
      }
      get isWalletConnect() {
        return !0
      }
      async pair(e) {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
          if (this.shouldAbortPairingAttempt)
            throw Error("Pairing aborted");
          if (t >= this.maxPairingAttempts)
            throw Error("Max auto pairing attempts reached");
          let { uri: r, approval: i } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
          });
          r && (this.uri = r,
            this.events.emit("display_uri", r)),
            await i().then(e => {
              this.session = e,
                this.namespaces || (this.namespaces = function (e) {
                  let t = {};
                  for (let [r, i] of Object.entries(e)) {
                    let e = i.methods || []
                      , n = i.events || []
                      , o = i.accounts || []
                      , a = (0,
                        s.gp)(r) ? [r] : i.chains ? i.chains : i9(i.accounts);
                    t[r] = {
                      chains: a,
                      methods: e,
                      events: n,
                      accounts: o
                    }
                  }
                  return t
                }(e.namespaces),
                  this.persist("namespaces", this.namespaces))
            }
            ).catch(e => {
              if (e.message !== iP)
                throw e;
              t++
            }
            )
        } while (!this.session);
        return this.onConnect(),
          this.session
      }
      setDefaultChain(e, t) {
        try {
          if (!this.session)
            return;
          let [r, i] = this.validateChain(e);
          this.getProvider(r).setDefaultChain(i, t)
        } catch (e) {
          if (!/Please call connect/.test(e.message))
            throw e
        }
      }
      async cleanupPendingPairings(e = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        let t = this.client.pairing.getAll();
        if ((0,
          s.qt)(t)) {
          for (let r of t)
            e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
          this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
      }
      abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
      }
      async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"),
          this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
          this.client.session.length) {
          let e = this.client.session.keys.length - 1;
          this.session = this.client.session.get(this.client.session.keys[e]),
            this.createProviders()
        }
      }
      async initialize() {
        this.logger.trace("Initialized"),
          await this.createClient(),
          await this.checkStorage(),
          this.registerEventListeners()
      }
      async createClient() {
        this.client = this.providerOpts.client || await iK.init({
          logger: this.providerOpts.logger || iB,
          relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
          projectId: this.providerOpts.projectId,
          metadata: this.providerOpts.metadata,
          storageOptions: this.providerOpts.storageOptions,
          storage: this.providerOpts.storage,
          name: this.providerOpts.name
        }),
          this.logger.trace("SignClient Initialized")
      }
      createProviders() {
        if (!this.client)
          throw Error("Sign Client not initialized");
        if (!this.session)
          throw Error("Session not initialized. Please call connect() before enable()");
        let e = [...new Set(Object.keys(this.session.namespaces).map(e => (0,
          s.M)(e)))];
        nn("client", this.client),
          nn("events", this.events),
          nn("disableProviderPing", this.disableProviderPing),
          e.forEach(e => {
            if (!this.session)
              return;
            let t = function (e, t) {
              let r = Object.keys(t.namespaces).filter(t => t.includes(e));
              if (!r.length)
                return [];
              let i = [];
              return r.forEach(e => {
                let r = t.namespaces[e].accounts;
                i.push(...r)
              }
              ),
                i
            }(e, this.session)
              , r = i9(t)
              , i = function (e = {}, t = {}) {
                let r = i7(e)
                  , i = i7(t);
                return iQ.exports.merge(r, i)
              }(this.namespaces, this.optionalNamespaces)
              , n = nw(nb({}, i[e]), {
                accounts: t,
                chains: r
              });
            switch (e) {
              case "eip155":
                this.rpcProviders[e] = new no({
                  namespace: n
                });
                break;
              case "solana":
                this.rpcProviders[e] = new na({
                  namespace: n
                });
                break;
              case "cosmos":
                this.rpcProviders[e] = new nc({
                  namespace: n
                });
                break;
              case "polkadot":
                this.rpcProviders[e] = new ns({
                  namespace: n
                });
                break;
              case "cip34":
                this.rpcProviders[e] = new nl({
                  namespace: n
                });
                break;
              case "elrond":
                this.rpcProviders[e] = new nu({
                  namespace: n
                });
                break;
              case "multiversx":
                this.rpcProviders[e] = new nh({
                  namespace: n
                });
                break;
              case "near":
                this.rpcProviders[e] = new np({
                  namespace: n
                })
            }
          }
          )
      }
      registerEventListeners() {
        if (typeof this.client > "u")
          throw Error("Sign Client is not initialized");
        this.client.on("session_ping", e => {
          this.events.emit("session_ping", e)
        }
        ),
          this.client.on("session_event", e => {
            let { params: t } = e
              , { event: r } = t;
            if ("accountsChanged" === r.name) {
              let e = r.data;
              e && (0,
                s.qt)(e) && this.events.emit("accountsChanged", e.map(ne))
            } else if ("chainChanged" === r.name) {
              let e = t.chainId
                , r = t.event.data
                , i = (0,
                  s.M)(e)
                , n = nt(e) !== nt(r) ? `${i}:${nt(r)}` : e;
              this.onChainChanged(n)
            } else
              this.events.emit(r.name, r.data);
            this.events.emit("session_event", e)
          }
          ),
          this.client.on("session_update", ({ topic: e, params: t }) => {
            var r;
            let { namespaces: i } = t
              , n = null == (r = this.client) ? void 0 : r.session.get(e);
            this.session = nw(nb({}, n), {
              namespaces: i
            }),
              this.onSessionUpdate(),
              this.events.emit("session_update", {
                topic: e,
                params: t
              })
          }
          ),
          this.client.on("session_delete", async e => {
            await this.cleanup(),
              this.events.emit("session_delete", e),
              this.events.emit("disconnect", nw(nb({}, (0,
                s.D6)("USER_DISCONNECTED")), {
                data: e.topic
              }))
          }
          ),
          this.on(iW.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
          }
          )
      }
      getProvider(e) {
        if (!this.rpcProviders[e])
          throw Error(`Provider not found: ${e}`);
        return this.rpcProviders[e]
      }
      onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e => {
          var t;
          this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
        }
        )
      }
      setNamespaces(e) {
        let { namespaces: t, optionalNamespaces: r, sessionProperties: i } = e;
        t && Object.keys(t).length && (this.namespaces = t),
          r && Object.keys(r).length && (this.optionalNamespaces = r),
          this.sessionProperties = i,
          this.persist("namespaces", t),
          this.persist("optionalNamespaces", r)
      }
      validateChain(e) {
        let [t, r] = e?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
          return [t, r];
        if (t && !Object.keys(this.namespaces || {}).map(e => (0,
          s.M)(e)).includes(t))
          throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && r)
          return [t, r];
        let i = (0,
          s.M)(Object.keys(this.namespaces)[0])
          , n = this.rpcProviders[i].getDefaultChain();
        return [i, n]
      }
      async requestAccounts() {
        let [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
      }
      onChainChanged(e, t = !1) {
        var r;
        if (!this.namespaces)
          return;
        let [i, n] = this.validateChain(e);
        t || this.getProvider(i).setDefaultChain(n),
          (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n,
          this.persist("namespaces", this.namespaces),
          this.events.emit("chainChanged", n)
      }
      onConnect() {
        this.createProviders(),
          this.events.emit("connect", {
            session: this.session
          })
      }
      async cleanup() {
        this.session = void 0,
          this.namespaces = void 0,
          this.optionalNamespaces = void 0,
          this.sessionProperties = void 0,
          this.persist("namespaces", void 0),
          this.persist("optionalNamespaces", void 0),
          this.persist("sessionProperties", void 0),
          await this.cleanupPendingPairings({
            deletePairings: !0
          })
      }
      persist(e, t) {
        this.client.core.storage.setItem(`${iG}/${e}`, t)
      }
      async getFromStore(e) {
        return await this.client.core.storage.getItem(`${iG}/${e}`)
      }
    }
    let nI = ["eth_sendTransaction", "personal_sign"]
      , nS = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
      , nP = ["chainChanged", "accountsChanged"]
      , nO = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
    var nN = Object.defineProperty
      , nR = Object.defineProperties
      , nC = Object.getOwnPropertyDescriptors
      , nA = Object.getOwnPropertySymbols
      , nx = Object.prototype.hasOwnProperty
      , nT = Object.prototype.propertyIsEnumerable
      , nj = (e, t, r) => t in e ? nN(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : e[t] = r
      , nD = (e, t) => {
        for (var r in t || (t = {}))
          nx.call(t, r) && nj(e, r, t[r]);
        if (nA)
          for (var r of nA(t))
            nT.call(t, r) && nj(e, r, t[r]);
        return e
      }
      , nq = (e, t) => nR(e, nC(t));
    function nL(e) {
      return Number(e[0].split(":")[1])
    }
    function nU(e) {
      return `0x ${e.toString(16)}`
    }
    class nk {
      constructor() {
        this.events = new i.EventEmitter,
          this.namespace = "eip155",
          this.accounts = [],
          this.chainId = 1,
          this.STORAGE_KEY = "wc@2:ethereum_provider:",
          this.on = (e, t) => (this.events.on(e, t),
            this),
          this.once = (e, t) => (this.events.once(e, t),
            this),
          this.removeListener = (e, t) => (this.events.removeListener(e, t),
            this),
          this.off = (e, t) => (this.events.off(e, t),
            this),
          this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e,
          this.signer = {},
          this.rpc = {}
      }
      static async init(e) {
        let t = new nk;
        return await t.initialize(e),
          t
      }
      async request(e) {
        return await this.signer.request(e, this.formatChainId(this.chainId))
      }
      sendAsync(e, t) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
      }
      get connected() {
        return !!this.signer.client && this.signer.client.core.relayer.connected
      }
      get connecting() {
        return !!this.signer.client && this.signer.client.core.relayer.connecting
      }
      async enable() {
        return this.session || await this.connect(),
          await this.request({
            method: "eth_requestAccounts"
          })
      }
      async connect(e) {
        if (!this.signer.client)
          throw Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        let { required: t, optional: r } = function (e) {
          let { chains: t, optionalChains: r, methods: i, optionalMethods: n, events: o, optionalEvents: a, rpcMap: c } = e;
          if (!(0,
            s.qt)(t))
            throw Error("Invalid chains");
          let l = {
            chains: t,
            methods: i || nI,
            events: o || nP,
            rpcMap: nD({}, t.length ? {
              [nL(t)]: c[nL(t)]
            } : {})
          }
            , u = o?.filter(e => !nP.includes(e))
            , h = i?.filter(e => !nI.includes(e));
          if (!r && !a && !n && !(null != u && u.length) && !(null != h && h.length))
            return {
              required: t.length ? l : void 0
            };
          let p = u?.length && h?.length || !r
            , f = {
              chains: [...new Set(p ? l.chains.concat(r || []) : r)],
              methods: [...new Set(l.methods.concat(null != n && n.length ? n : nS))],
              events: [...new Set(l.events.concat(null != a && a.length ? a : nO))],
              rpcMap: c
            };
          return {
            required: t.length ? l : void 0,
            optional: r.length ? f : void 0
          }
        }(this.rpc);
        try {
          let i = await new Promise(async (i, n) => {
            var s;
            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
              e.open || this.signer.session || (this.signer.abortPairingAttempt(),
                n(Error("Connection request reset. Please try again.")))
            }
            )),
              await this.signer.connect(nq(nD({
                namespaces: nD({}, t && {
                  [this.namespace]: t
                })
              }, r && {
                optionalNamespaces: {
                  [this.namespace]: r
                }
              }), {
                pairingTopic: e?.pairingTopic
              })).then(e => {
                i(e)
              }
              ).catch(e => {
                n(Error(e.message))
              }
              )
          }
          );
          if (!i)
            return;
          let n = (0,
            s.gu)(i.namespaces, [this.namespace]);
          this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
            this.setAccounts(n),
            this.events.emit("connect", {
              chainId: nU(this.chainId)
            })
        } catch (e) {
          throw this.signer.logger.error(e),
          e
        } finally {
          this.modal && this.modal.closeModal()
        }
      }
      async disconnect() {
        this.session && await this.signer.disconnect(),
          this.reset()
      }
      get isWalletConnect() {
        return !0
      }
      get session() {
        return this.signer.session
      }
      registerEventListeners() {
        this.signer.on("session_event", e => {
          let { params: t } = e
            , { event: r } = t;
          "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data),
            this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data),
            this.events.emit("session_event", e)
        }
        ),
          this.signer.on("chainChanged", e => {
            let t = parseInt(e);
            this.chainId = t,
              this.events.emit("chainChanged", nU(this.chainId)),
              this.persist()
          }
          ),
          this.signer.on("session_update", e => {
            this.events.emit("session_update", e)
          }
          ),
          this.signer.on("session_delete", e => {
            this.reset(),
              this.events.emit("session_delete", e),
              this.events.emit("disconnect", nq(nD({}, (0,
                s.D6)("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
              }))
          }
          ),
          this.signer.on("display_uri", e => {
            var t, r;
            this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(),
              null == (r = this.modal) || r.openModal({
                uri: e
              })),
              this.events.emit("display_uri", e)
          }
          )
      }
      switchEthereumChain(e) {
        this.request({
          method: "wallet_switchEthereumChain",
          params: [{
            chainId: e.toString(16)
          }]
        })
      }
      isCompatibleChainId(e) {
        return "string" == typeof e && e.startsWith(`${this.namespace}:`)
      }
      formatChainId(e) {
        return `${this.namespace}:${e}`
      }
      parseChainId(e) {
        return Number(e.split(":")[1])
      }
      setChainIds(e) {
        let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
        t.length && (this.chainId = t[0],
          this.events.emit("chainChanged", nU(this.chainId)),
          this.persist())
      }
      setChainId(e) {
        if (this.isCompatibleChainId(e)) {
          let t = this.parseChainId(e);
          this.chainId = t,
            this.switchEthereumChain(t)
        }
      }
      parseAccountId(e) {
        let [t, r, i] = e.split(":");
        return {
          chainId: `${t}:${r}`,
          address: i
        }
      }
      setAccounts(e) {
        this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address),
          this.events.emit("accountsChanged", this.accounts)
      }
      getRpcConfig(e) {
        var t, r;
        let i = null != (t = e?.chains) ? t : []
          , n = null != (r = e?.optionalChains) ? r : []
          , s = i.concat(n);
        if (!s.length)
          throw Error("No chains specified in either `chains` or `optionalChains`");
        let o = i.length ? e?.methods || nI : []
          , a = i.length ? e?.events || nP : []
          , c = e?.optionalMethods || []
          , l = e?.optionalEvents || []
          , u = e?.rpcMap || this.buildRpcMap(s, e.projectId)
          , h = e?.qrModalOptions || void 0;
        return {
          chains: i?.map(e => this.formatChainId(e)),
          optionalChains: n.map(e => this.formatChainId(e)),
          methods: o,
          events: a,
          optionalMethods: c,
          optionalEvents: l,
          rpcMap: u,
          showQrModal: !!(null != e && e.showQrModal),
          qrModalOptions: h,
          projectId: e.projectId,
          metadata: e.metadata
        }
      }
      buildRpcMap(e, t) {
        let r = {};
        return e.forEach(e => {
          r[e] = this.getRpcUrl(e, t)
        }
        ),
          r
      }
      async initialize(e) {
        if (this.rpc = this.getRpcConfig(e),
          this.chainId = this.rpc.chains.length ? nL(this.rpc.chains) : nL(this.rpc.optionalChains),
          this.signer = await nE.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storageOptions: e.storageOptions
          }),
          this.registerEventListeners(),
          await this.loadPersistedSession(),
          this.rpc.showQrModal) {
          let e;
          try {
            let { WalletConnectModal: t } = await r.e(9343).then(r.bind(r, 59343));
            e = t
          } catch {
            throw Error("To use QR modal, please install @walletconnect/modal package")
          }
          if (e)
            try {
              this.modal = new e(nD({
                walletConnectVersion: 2,
                projectId: this.rpc.projectId,
                standaloneChains: this.rpc.chains
              }, this.rpc.qrModalOptions))
            } catch (e) {
              throw this.signer.logger.error(e),
              Error("Could not generate WalletConnectModal Instance")
            }
        }
      }
      loadConnectOpts(e) {
        if (!e)
          return;
        let { chains: t, optionalChains: r, rpcMap: i } = e;
        t && (0,
          s.qt)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)),
            t.forEach(e => {
              this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e)
            }
            )),
          r && (0,
            s.qt)(r) && (this.rpc.optionalChains = [],
              this.rpc.optionalChains = r?.map(e => this.formatChainId(e)),
              r.forEach(e => {
                this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e)
              }
              ))
      }
      getRpcUrl(e, t) {
        var r;
        return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
      }
      async loadPersistedSession() {
        if (!this.session)
          return;
        let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
          , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
        this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
          this.setAccounts(t?.accounts)
      }
      reset() {
        this.chainId = 1,
          this.accounts = []
      }
      persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
      }
      parseAccounts(e) {
        return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
      }
    }
    let n$ = nk
  },
  33684: function (e, t, r) {
    "use strict";
    let i = r(70610)
      , n = r(44020)
      , s = r(80500)
      , o = r(92806)
      , a = e => null == e
      , c = Symbol("encodeFragmentIdentifier");
    function l(e) {
      if ("string" != typeof e || 1 !== e.length)
        throw TypeError("arrayFormatSeparator must be single character string")
    }
    function u(e, t) {
      return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
    }
    function h(e, t) {
      return t.decode ? n(e) : e
    }
    function p(e) {
      let t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)),
        e
    }
    function f(e) {
      e = p(e);
      let t = e.indexOf("?");
      return -1 === t ? "" : e.slice(t + 1)
    }
    function d(e, t) {
      return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()),
        e
    }
    function g(e, t) {
      l((t = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1
      }, t)).arrayFormatSeparator);
      let r = function (e) {
        let t;
        switch (e.arrayFormat) {
          case "index":
            return (e, r, i) => {
              if (t = /\[(\d*)\]$/.exec(e),
                e = e.replace(/\[\d*\]$/, ""),
                !t) {
                i[e] = r;
                return
              }
              void 0 === i[e] && (i[e] = {}),
                i[e][t[1]] = r
            }
              ;
          case "bracket":
            return (e, r, i) => {
              if (t = /(\[\])$/.exec(e),
                e = e.replace(/\[\]$/, ""),
                !t) {
                i[e] = r;
                return
              }
              if (void 0 === i[e]) {
                i[e] = [r];
                return
              }
              i[e] = [].concat(i[e], r)
            }
              ;
          case "colon-list-separator":
            return (e, r, i) => {
              if (t = /(:list)$/.exec(e),
                e = e.replace(/:list$/, ""),
                !t) {
                i[e] = r;
                return
              }
              if (void 0 === i[e]) {
                i[e] = [r];
                return
              }
              i[e] = [].concat(i[e], r)
            }
              ;
          case "comma":
          case "separator":
            return (t, r, i) => {
              let n = "string" == typeof r && r.includes(e.arrayFormatSeparator)
                , s = "string" == typeof r && !n && h(r, e).includes(e.arrayFormatSeparator);
              r = s ? h(r, e) : r;
              let o = n || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
              i[t] = o
            }
              ;
          case "bracket-separator":
            return (t, r, i) => {
              let n = /(\[\])$/.test(t);
              if (t = t.replace(/\[\]$/, ""),
                !n) {
                i[t] = r ? h(r, e) : r;
                return
              }
              let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
              if (void 0 === i[t]) {
                i[t] = s;
                return
              }
              i[t] = [].concat(i[t], s)
            }
              ;
          default:
            return (e, t, r) => {
              if (void 0 === r[e]) {
                r[e] = t;
                return
              }
              r[e] = [].concat(r[e], t)
            }
        }
      }(t)
        , i = Object.create(null);
      if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, "")))
        return i;
      for (let n of e.split("&")) {
        if ("" === n)
          continue;
        let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
        o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t),
          r(h(e, t), o, i)
      }
      for (let e of Object.keys(i)) {
        let r = i[e];
        if ("object" == typeof r && null !== r)
          for (let e of Object.keys(r))
            r[e] = d(r[e], t);
        else
          i[e] = d(r, t)
      }
      return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
        let r = i[t];
        return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
          return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
        }(r) : e[t] = r,
          e
      }
        , Object.create(null))
    }
    t.extract = f,
      t.parse = g,
      t.stringify = (e, t) => {
        if (!e)
          return "";
        l((t = Object.assign({
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r]
          , i = function (e) {
            switch (e.arrayFormat) {
              case "index":
                return t => (r, i) => {
                  let n = r.length;
                  return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[", n, "]"].join("")] : [...r, [u(t, e), "[", u(n, e), "]=", u(i, e)].join("")]
                }
                  ;
              case "bracket":
                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(i, e)].join("")];
              case "colon-list-separator":
                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(i, e)].join("")];
              case "comma":
              case "separator":
              case "bracket-separator":
                {
                  let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n,
                    0 === i.length) ? [[u(r, e), t, u(n, e)].join("")] : [[i, u(n, e)].join(e.arrayFormatSeparator)]
                }
              default:
                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(i, e)].join("")]
            }
          }(t)
          , n = {};
        for (let t of Object.keys(e))
          r(t) || (n[t] = e[t]);
        let s = Object.keys(n);
        return !1 !== t.sort && s.sort(t.sort),
          s.map(r => {
            let n = e[r];
            return void 0 === n ? "" : null === n ? u(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : n.reduce(i(r), []).join("&") : u(r, t) + "=" + u(n, t)
          }
          ).filter(e => e.length > 0).join("&")
      }
      ,
      t.parseUrl = (e, t) => {
        t = Object.assign({
          decode: !0
        }, t);
        let [r, i] = s(e, "#");
        return Object.assign({
          url: r.split("?")[0] || "",
          query: g(f(e), t)
        }, t && t.parseFragmentIdentifier && i ? {
          fragmentIdentifier: h(i, t)
        } : {})
      }
      ,
      t.stringifyUrl = (e, r) => {
        r = Object.assign({
          encode: !0,
          strict: !0,
          [c]: !0
        }, r);
        let i = p(e.url).split("?")[0] || ""
          , n = t.extract(e.url)
          , s = t.parse(n, {
            sort: !1
          })
          , o = Object.assign(s, e.query)
          , a = t.stringify(o, r);
        a && (a = `?${a}`);
        let l = function (e) {
          let t = ""
            , r = e.indexOf("#");
          return -1 !== r && (t = e.slice(r)),
            t
        }(e.url);
        return e.fragmentIdentifier && (l = `#${r[c] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier}`),
          `${i}${a}${l}`
      }
      ,
      t.pick = (e, r, i) => {
        i = Object.assign({
          parseFragmentIdentifier: !0,
          [c]: !1
        }, i);
        let { url: n, query: s, fragmentIdentifier: a } = t.parseUrl(e, i);
        return t.stringifyUrl({
          url: n,
          query: o(s, r),
          fragmentIdentifier: a
        }, i)
      }
      ,
      t.exclude = (e, r, i) => {
        let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
        return t.pick(e, n, i)
      }
  },
  38200: function (e, t, r) {
    "use strict";
    r.d(t, {
      q: function () {
        return i
      }
    });
    class i {
    }
  },
  30997: function (e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, {
        IEvents: function () {
          return i.q
        }
      });
    var i = r(38200)
  },
  32568: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
    let i = r(66736);
    t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS,
      t.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
      }
  },
  20426: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    let i = r(70655);
    i.__exportStar(r(32568), t)
  },
  38969: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.HeartBeat = void 0;
    let i = r(70655)
      , n = r(17187)
      , s = r(66736)
      , o = r(1614)
      , a = r(20426);
    class c extends o.IHeartBeat {
      constructor(e) {
        super(e),
          this.events = new n.EventEmitter,
          this.interval = a.HEARTBEAT_INTERVAL,
          this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
      }
      static init(e) {
        return i.__awaiter(this, void 0, void 0, function* () {
          let t = new c(e);
          return yield t.init(),
            t
        })
      }
      init() {
        return i.__awaiter(this, void 0, void 0, function* () {
          yield this.initialize()
        })
      }
      stop() {
        clearInterval(this.intervalRef)
      }
      on(e, t) {
        this.events.on(e, t)
      }
      once(e, t) {
        this.events.once(e, t)
      }
      off(e, t) {
        this.events.off(e, t)
      }
      removeListener(e, t) {
        this.events.removeListener(e, t)
      }
      initialize() {
        return i.__awaiter(this, void 0, void 0, function* () {
          this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
        })
      }
      pulse() {
        this.events.emit(a.HEARTBEAT_EVENTS.pulse)
      }
    }
    t.HeartBeat = c
  },
  90772: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    let i = r(70655);
    i.__exportStar(r(38969), t),
      i.__exportStar(r(1614), t),
      i.__exportStar(r(20426), t)
  },
  44174: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.IHeartBeat = void 0;
    let i = r(30997);
    class n extends i.IEvents {
      constructor(e) {
        super()
      }
    }
    t.IHeartBeat = n
  },
  1614: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    let i = r(70655);
    i.__exportStar(r(44174), t)
  },
  85150: function (e, t, r) {
    "use strict";
    let i = r(70655)
      , n = r(63954)
      , s = i.__importDefault(r(30653))
      , o = r(59728);
    t.ZP = class {
      constructor() {
        this.localStorage = s.default
      }
      getKeys() {
        return i.__awaiter(this, void 0, void 0, function* () {
          return Object.keys(this.localStorage)
        })
      }
      getEntries() {
        return i.__awaiter(this, void 0, void 0, function* () {
          return Object.entries(this.localStorage).map(o.parseEntry)
        })
      }
      getItem(e) {
        return i.__awaiter(this, void 0, void 0, function* () {
          let t = this.localStorage.getItem(e);
          if (null !== t)
            return n.safeJsonParse(t)
        })
      }
      setItem(e, t) {
        return i.__awaiter(this, void 0, void 0, function* () {
          this.localStorage.setItem(e, n.safeJsonStringify(t))
        })
      }
      removeItem(e) {
        return i.__awaiter(this, void 0, void 0, function* () {
          this.localStorage.removeItem(e)
        })
      }
    }
  },
  30653: function (e, t, r) {
    "use strict";
    !function () {
      let t;
      function i() { }
      (t = i).prototype.getItem = function (e) {
        return this.hasOwnProperty(e) ? String(this[e]) : null
      }
        ,
        t.prototype.setItem = function (e, t) {
          this[e] = String(t)
        }
        ,
        t.prototype.removeItem = function (e) {
          delete this[e]
        }
        ,
        t.prototype.clear = function () {
          let e = this;
          Object.keys(e).forEach(function (t) {
            e[t] = void 0,
              delete e[t]
          })
        }
        ,
        t.prototype.key = function (e) {
          return e = e || 0,
            Object.keys(this)[e]
        }
        ,
        t.prototype.__defineGetter__("length", function () {
          return Object.keys(this).length
        }),
        void 0 !== r.g && r.g.localStorage ? e.exports = r.g.localStorage : "undefined" != typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new i
    }()
  },
  59728: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    let i = r(70655);
    i.__exportStar(r(39076), t),
      i.__exportStar(r(20496), t)
  },
  39076: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.IKeyValueStorage = void 0,
      t.IKeyValueStorage = class {
      }
  },
  20496: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.parseEntry = void 0;
    let i = r(63954);
    t.parseEntry = function (e) {
      var t;
      return [e[0], i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
    }
  },
  65727: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0,
      t.PINO_LOGGER_DEFAULTS = {
        level: "info"
      },
      t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
  },
  9107: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.pino = void 0;
    let i = r(70655)
      , n = i.__importDefault(r(36559));
    Object.defineProperty(t, "pino", {
      enumerable: !0,
      get: function () {
        return n.default
      }
    }),
      i.__exportStar(r(65727), t),
      i.__exportStar(r(58048), t)
  },
  58048: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
    let i = r(65727);
    function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
      return e[t] || ""
    }
    function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
      return e[r] = t,
        e
    }
    function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
      return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
    }
    function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
      let n = o(e, r)
        , s = n.trim() ? `${n}/${t}` : t;
      return s
    }
    t.getDefaultLoggerOptions = function (e) {
      return Object.assign(Object.assign({}, e), {
        level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
      })
    }
      ,
      t.getBrowserLoggerContext = n,
      t.setBrowserLoggerContext = s,
      t.getLoggerContext = o,
      t.formatChildLoggerContext = a,
      t.generateChildLogger = function (e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        let n = a(e, t, r)
          , o = e.child({
            context: n
          });
        return s(o, n, r)
      }
  },
  43014: function () { },
  87338: function (e, t, r) {
    "use strict";
    let i = r(70610)
      , n = r(44020)
      , s = r(80500)
      , o = r(92806)
      , a = e => null == e
      , c = Symbol("encodeFragmentIdentifier");
    function l(e) {
      if ("string" != typeof e || 1 !== e.length)
        throw TypeError("arrayFormatSeparator must be single character string")
    }
    function u(e, t) {
      return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
    }
    function h(e, t) {
      return t.decode ? n(e) : e
    }
    function p(e) {
      let t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)),
        e
    }
    function f(e) {
      e = p(e);
      let t = e.indexOf("?");
      return -1 === t ? "" : e.slice(t + 1)
    }
    function d(e, t) {
      return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()),
        e
    }
    function g(e, t) {
      l((t = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1
      }, t)).arrayFormatSeparator);
      let r = function (e) {
        let t;
        switch (e.arrayFormat) {
          case "index":
            return (e, r, i) => {
              if (t = /\[(\d*)\]$/.exec(e),
                e = e.replace(/\[\d*\]$/, ""),
                !t) {
                i[e] = r;
                return
              }
              void 0 === i[e] && (i[e] = {}),
                i[e][t[1]] = r
            }
              ;
          case "bracket":
            return (e, r, i) => {
              if (t = /(\[\])$/.exec(e),
                e = e.replace(/\[\]$/, ""),
                !t) {
                i[e] = r;
                return
              }
              if (void 0 === i[e]) {
                i[e] = [r];
                return
              }
              i[e] = [].concat(i[e], r)
            }
              ;
          case "colon-list-separator":
            return (e, r, i) => {
              if (t = /(:list)$/.exec(e),
                e = e.replace(/:list$/, ""),
                !t) {
                i[e] = r;
                return
              }
              if (void 0 === i[e]) {
                i[e] = [r];
                return
              }
              i[e] = [].concat(i[e], r)
            }
              ;
          case "comma":
          case "separator":
            return (t, r, i) => {
              let n = "string" == typeof r && r.includes(e.arrayFormatSeparator)
                , s = "string" == typeof r && !n && h(r, e).includes(e.arrayFormatSeparator);
              r = s ? h(r, e) : r;
              let o = n || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
              i[t] = o
            }
              ;
          case "bracket-separator":
            return (t, r, i) => {
              let n = /(\[\])$/.test(t);
              if (t = t.replace(/\[\]$/, ""),
                !n) {
                i[t] = r ? h(r, e) : r;
                return
              }
              let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
              if (void 0 === i[t]) {
                i[t] = s;
                return
              }
              i[t] = [].concat(i[t], s)
            }
              ;
          default:
            return (e, t, r) => {
              if (void 0 === r[e]) {
                r[e] = t;
                return
              }
              r[e] = [].concat(r[e], t)
            }
        }
      }(t)
        , i = Object.create(null);
      if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, "")))
        return i;
      for (let n of e.split("&")) {
        if ("" === n)
          continue;
        let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
        o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t),
          r(h(e, t), o, i)
      }
      for (let e of Object.keys(i)) {
        let r = i[e];
        if ("object" == typeof r && null !== r)
          for (let e of Object.keys(r))
            r[e] = d(r[e], t);
        else
          i[e] = d(r, t)
      }
      return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
        let r = i[t];
        return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
          return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
        }(r) : e[t] = r,
          e
      }
        , Object.create(null))
    }
    t.extract = f,
      t.parse = g,
      t.stringify = (e, t) => {
        if (!e)
          return "";
        l((t = Object.assign({
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r]
          , i = function (e) {
            switch (e.arrayFormat) {
              case "index":
                return t => (r, i) => {
                  let n = r.length;
                  return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[", n, "]"].join("")] : [...r, [u(t, e), "[", u(n, e), "]=", u(i, e)].join("")]
                }
                  ;
              case "bracket":
                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(i, e)].join("")];
              case "colon-list-separator":
                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(i, e)].join("")];
              case "comma":
              case "separator":
              case "bracket-separator":
                {
                  let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n,
                    0 === i.length) ? [[u(r, e), t, u(n, e)].join("")] : [[i, u(n, e)].join(e.arrayFormatSeparator)]
                }
              default:
                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(i, e)].join("")]
            }
          }(t)
          , n = {};
        for (let t of Object.keys(e))
          r(t) || (n[t] = e[t]);
        let s = Object.keys(n);
        return !1 !== t.sort && s.sort(t.sort),
          s.map(r => {
            let n = e[r];
            return void 0 === n ? "" : null === n ? u(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : n.reduce(i(r), []).join("&") : u(r, t) + "=" + u(n, t)
          }
          ).filter(e => e.length > 0).join("&")
      }
      ,
      t.parseUrl = (e, t) => {
        t = Object.assign({
          decode: !0
        }, t);
        let [r, i] = s(e, "#");
        return Object.assign({
          url: r.split("?")[0] || "",
          query: g(f(e), t)
        }, t && t.parseFragmentIdentifier && i ? {
          fragmentIdentifier: h(i, t)
        } : {})
      }
      ,
      t.stringifyUrl = (e, r) => {
        r = Object.assign({
          encode: !0,
          strict: !0,
          [c]: !0
        }, r);
        let i = p(e.url).split("?")[0] || ""
          , n = t.extract(e.url)
          , s = t.parse(n, {
            sort: !1
          })
          , o = Object.assign(s, e.query)
          , a = t.stringify(o, r);
        a && (a = `?${a}`);
        let l = function (e) {
          let t = ""
            , r = e.indexOf("#");
          return -1 !== r && (t = e.slice(r)),
            t
        }(e.url);
        return e.fragmentIdentifier && (l = `#${r[c] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier}`),
          `${i}${a}${l}`
      }
      ,
      t.pick = (e, r, i) => {
        i = Object.assign({
          parseFragmentIdentifier: !0,
          [c]: !1
        }, i);
        let { url: n, query: s, fragmentIdentifier: a } = t.parseUrl(e, i);
        return t.stringifyUrl({
          url: n,
          query: o(s, r),
          fragmentIdentifier: a
        }, i)
      }
      ,
      t.exclude = (e, r, i) => {
        let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
        return t.pick(e, n, i)
      }
  },
  72307: function (e, t, r) {
    e = r.nmd(e);
    var i, n, s, o = "__lodash_hash_undefined__", a = "[object Arguments]", c = "[object Array]", l = "[object Boolean]", u = "[object Date]", h = "[object Error]", p = "[object Function]", f = "[object Map]", d = "[object Number]", g = "[object Object]", y = "[object Promise]", v = "[object RegExp]", m = "[object Set]", _ = "[object String]", b = "[object WeakMap]", w = "[object ArrayBuffer]", E = "[object DataView]", I = /^\[object .+?Constructor\]$/, S = /^(?:0|[1-9]\d*)$/, P = {};
    P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0,
      P[a] = P[c] = P[w] = P[l] = P[E] = P[u] = P[h] = P[p] = P[f] = P[d] = P[g] = P[v] = P[m] = P[_] = P[b] = !1;
    var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
      , N = "object" == typeof self && self && self.Object === Object && self
      , R = O || N || Function("return this")()
      , C = t && !t.nodeType && t
      , A = C && e && !e.nodeType && e
      , x = A && A.exports === C
      , T = x && O.process
      , j = function () {
        try {
          return T && T.binding && T.binding("util")
        } catch (e) { }
      }()
      , D = j && j.isTypedArray;
    function q(e) {
      var t = -1
        , r = Array(e.size);
      return e.forEach(function (e, i) {
        r[++t] = [i, e]
      }),
        r
    }
    function L(e) {
      var t = -1
        , r = Array(e.size);
      return e.forEach(function (e) {
        r[++t] = e
      }),
        r
    }
    var U = Array.prototype
      , k = Function.prototype
      , $ = Object.prototype
      , M = R["__core-js_shared__"]
      , z = k.toString
      , H = $.hasOwnProperty
      , V = (i = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : ""
      , K = $.toString
      , F = RegExp("^" + z.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , B = x ? R.Buffer : void 0
      , G = R.Symbol
      , W = R.Uint8Array
      , J = $.propertyIsEnumerable
      , Q = U.splice
      , Y = G ? G.toStringTag : void 0
      , Z = Object.getOwnPropertySymbols
      , X = B ? B.isBuffer : void 0
      , ee = (n = Object.keys,
        s = Object,
        function (e) {
          return n(s(e))
        }
      )
      , et = eP(R, "DataView")
      , er = eP(R, "Map")
      , ei = eP(R, "Promise")
      , en = eP(R, "Set")
      , es = eP(R, "WeakMap")
      , eo = eP(Object, "create")
      , ea = eR(et)
      , ec = eR(er)
      , el = eR(ei)
      , eu = eR(en)
      , eh = eR(es)
      , ep = G ? G.prototype : void 0
      , ef = ep ? ep.valueOf : void 0;
    function ed(e) {
      var t = -1
        , r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var i = e[t];
        this.set(i[0], i[1])
      }
    }
    function eg(e) {
      var t = -1
        , r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var i = e[t];
        this.set(i[0], i[1])
      }
    }
    function ey(e) {
      var t = -1
        , r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var i = e[t];
        this.set(i[0], i[1])
      }
    }
    function ev(e) {
      var t = -1
        , r = null == e ? 0 : e.length;
      for (this.__data__ = new ey; ++t < r;)
        this.add(e[t])
    }
    function em(e) {
      var t = this.__data__ = new eg(e);
      this.size = t.size
    }
    function e_(e, t) {
      for (var r = e.length; r--;)
        if (eC(e[r][0], t))
          return r;
      return -1
    }
    function eb(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Y && Y in Object(e) ? function (e) {
        var t = H.call(e, Y)
          , r = e[Y];
        try {
          e[Y] = void 0;
          var i = !0
        } catch (e) { }
        var n = K.call(e);
        return i && (t ? e[Y] = r : delete e[Y]),
          n
      }(e) : K.call(e)
    }
    function ew(e) {
      return eL(e) && eb(e) == a
    }
    function eE(e, t, r, i, n, s) {
      var o = 1 & r
        , a = e.length
        , c = t.length;
      if (a != c && !(o && c > a))
        return !1;
      var l = s.get(e);
      if (l && s.get(t))
        return l == t;
      var u = -1
        , h = !0
        , p = 2 & r ? new ev : void 0;
      for (s.set(e, t),
        s.set(t, e); ++u < a;) {
        var f = e[u]
          , d = t[u];
        if (i)
          var g = o ? i(d, f, u, t, e, s) : i(f, d, u, e, t, s);
        if (void 0 !== g) {
          if (g)
            continue;
          h = !1;
          break
        }
        if (p) {
          if (!function (e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
              if (t(e[r], r, e))
                return !0;
            return !1
          }(t, function (e, t) {
            if (!p.has(t) && (f === e || n(f, e, r, i, s)))
              return p.push(t)
          })) {
            h = !1;
            break
          }
        } else if (!(f === d || n(f, d, r, i, s))) {
          h = !1;
          break
        }
      }
      return s.delete(e),
        s.delete(t),
        h
    }
    function eI(e) {
      var t;
      return t = function (e) {
        return null != e && eD(e.length) && !ej(e) ? function (e, t) {
          var r, i, n = ex(e), s = !n && eA(e), o = !n && !s && eT(e), a = !n && !s && !o && eU(e), c = n || s || o || a, l = c ? function (e, t) {
            for (var r = -1, i = Array(e); ++r < e;)
              i[r] = t(r);
            return i
          }(e.length, String) : [], u = l.length;
          for (var h in e)
            H.call(e, h) && !(c && ("length" == h || o && ("offset" == h || "parent" == h) || a && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || (r = h,
              (i = null == (i = u) ? 9007199254740991 : i) && ("number" == typeof r || S.test(r)) && r > -1 && r % 1 == 0 && r < i))) && l.push(h);
          return l
        }(e) : function (e) {
          if (r = "function" == typeof (t = e && e.constructor) && t.prototype || $,
            e !== r)
            return ee(e);
          var t, r, i = [];
          for (var n in Object(e))
            H.call(e, n) && "constructor" != n && i.push(n);
          return i
        }(e)
      }(e),
        ex(e) ? t : function (e, t) {
          for (var r = -1, i = t.length, n = e.length; ++r < i;)
            e[n + r] = t[r];
          return e
        }(t, eO(e))
    }
    function eS(e, t) {
      var r, i = e.__data__;
      return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
    }
    function eP(e, t) {
      var r = null == e ? void 0 : e[t];
      return !(!eq(r) || V && V in r) && (ej(r) ? F : I).test(eR(r)) ? r : void 0
    }
    ed.prototype.clear = function () {
      this.__data__ = eo ? eo(null) : {},
        this.size = 0
    }
      ,
      ed.prototype.delete = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0,
          t
      }
      ,
      ed.prototype.get = function (e) {
        var t = this.__data__;
        if (eo) {
          var r = t[e];
          return r === o ? void 0 : r
        }
        return H.call(t, e) ? t[e] : void 0
      }
      ,
      ed.prototype.has = function (e) {
        var t = this.__data__;
        return eo ? void 0 !== t[e] : H.call(t, e)
      }
      ,
      ed.prototype.set = function (e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
          r[e] = eo && void 0 === t ? o : t,
          this
      }
      ,
      eg.prototype.clear = function () {
        this.__data__ = [],
          this.size = 0
      }
      ,
      eg.prototype.delete = function (e) {
        var t = this.__data__
          , r = e_(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : Q.call(t, r, 1),
          --this.size,
          !0)
      }
      ,
      eg.prototype.get = function (e) {
        var t = this.__data__
          , r = e_(t, e);
        return r < 0 ? void 0 : t[r][1]
      }
      ,
      eg.prototype.has = function (e) {
        return e_(this.__data__, e) > -1
      }
      ,
      eg.prototype.set = function (e, t) {
        var r = this.__data__
          , i = e_(r, e);
        return i < 0 ? (++this.size,
          r.push([e, t])) : r[i][1] = t,
          this
      }
      ,
      ey.prototype.clear = function () {
        this.size = 0,
          this.__data__ = {
            hash: new ed,
            map: new (er || eg),
            string: new ed
          }
      }
      ,
      ey.prototype.delete = function (e) {
        var t = eS(this, e).delete(e);
        return this.size -= t ? 1 : 0,
          t
      }
      ,
      ey.prototype.get = function (e) {
        return eS(this, e).get(e)
      }
      ,
      ey.prototype.has = function (e) {
        return eS(this, e).has(e)
      }
      ,
      ey.prototype.set = function (e, t) {
        var r = eS(this, e)
          , i = r.size;
        return r.set(e, t),
          this.size += r.size == i ? 0 : 1,
          this
      }
      ,
      ev.prototype.add = ev.prototype.push = function (e) {
        return this.__data__.set(e, o),
          this
      }
      ,
      ev.prototype.has = function (e) {
        return this.__data__.has(e)
      }
      ,
      em.prototype.clear = function () {
        this.__data__ = new eg,
          this.size = 0
      }
      ,
      em.prototype.delete = function (e) {
        var t = this.__data__
          , r = t.delete(e);
        return this.size = t.size,
          r
      }
      ,
      em.prototype.get = function (e) {
        return this.__data__.get(e)
      }
      ,
      em.prototype.has = function (e) {
        return this.__data__.has(e)
      }
      ,
      em.prototype.set = function (e, t) {
        var r = this.__data__;
        if (r instanceof eg) {
          var i = r.__data__;
          if (!er || i.length < 199)
            return i.push([e, t]),
              this.size = ++r.size,
              this;
          r = this.__data__ = new ey(i)
        }
        return r.set(e, t),
          this.size = r.size,
          this
      }
      ;
    var eO = Z ? function (e) {
      return null == e ? [] : function (e, t) {
        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
          var o = e[r];
          t(o, r, e) && (s[n++] = o)
        }
        return s
      }(Z(e = Object(e)), function (t) {
        return J.call(e, t)
      })
    }
      : function () {
        return []
      }
      , eN = eb;
    function eR(e) {
      if (null != e) {
        try {
          return z.call(e)
        } catch (e) { }
        try {
          return e + ""
        } catch (e) { }
      }
      return ""
    }
    function eC(e, t) {
      return e === t || e != e && t != t
    }
    (et && eN(new et(new ArrayBuffer(1))) != E || er && eN(new er) != f || ei && eN(ei.resolve()) != y || en && eN(new en) != m || es && eN(new es) != b) && (eN = function (e) {
      var t = eb(e)
        , r = t == g ? e.constructor : void 0
        , i = r ? eR(r) : "";
      if (i)
        switch (i) {
          case ea:
            return E;
          case ec:
            return f;
          case el:
            return y;
          case eu:
            return m;
          case eh:
            return b
        }
      return t
    }
    );
    var eA = ew(function () {
      return arguments
    }()) ? ew : function (e) {
      return eL(e) && H.call(e, "callee") && !J.call(e, "callee")
    }
      , ex = Array.isArray
      , eT = X || function () {
        return !1
      }
      ;
    function ej(e) {
      if (!eq(e))
        return !1;
      var t = eb(e);
      return t == p || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
    function eD(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function eq(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t)
    }
    function eL(e) {
      return null != e && "object" == typeof e
    }
    var eU = D ? function (e) {
      return D(e)
    }
      : function (e) {
        return eL(e) && eD(e.length) && !!P[eb(e)]
      }
      ;
    e.exports = function (e, t) {
      return function e(t, r, i, n, s) {
        return t === r || (null != t && null != r && (eL(t) || eL(r)) ? function (e, t, r, i, n, s) {
          var o = ex(e)
            , p = ex(t)
            , y = o ? c : eN(e)
            , b = p ? c : eN(t);
          y = y == a ? g : y,
            b = b == a ? g : b;
          var I = y == g
            , S = b == g
            , P = y == b;
          if (P && eT(e)) {
            if (!eT(t))
              return !1;
            o = !0,
              I = !1
          }
          if (P && !I)
            return s || (s = new em),
              o || eU(e) ? eE(e, t, r, i, n, s) : function (e, t, r, i, n, s, o) {
                switch (r) {
                  case E:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                      break;
                    e = e.buffer,
                      t = t.buffer;
                  case w:
                    if (e.byteLength != t.byteLength || !s(new W(e), new W(t)))
                      break;
                    return !0;
                  case l:
                  case u:
                  case d:
                    return eC(+e, +t);
                  case h:
                    return e.name == t.name && e.message == t.message;
                  case v:
                  case _:
                    return e == t + "";
                  case f:
                    var a = q;
                  case m:
                    var c = 1 & i;
                    if (a || (a = L),
                      e.size != t.size && !c)
                      break;
                    var p = o.get(e);
                    if (p)
                      return p == t;
                    i |= 2,
                      o.set(e, t);
                    var g = eE(a(e), a(t), i, n, s, o);
                    return o.delete(e),
                      g;
                  case "[object Symbol]":
                    if (ef)
                      return ef.call(e) == ef.call(t)
                }
                return !1
              }(e, t, y, r, i, n, s);
          if (!(1 & r)) {
            var O = I && H.call(e, "__wrapped__")
              , N = S && H.call(t, "__wrapped__");
            if (O || N) {
              var R = O ? e.value() : e
                , C = N ? t.value() : t;
              return s || (s = new em),
                n(R, C, r, i, s)
            }
          }
          return !!P && (s || (s = new em),
            function (e, t, r, i, n, s) {
              var o = 1 & r
                , a = eI(e)
                , c = a.length;
              if (c != eI(t).length && !o)
                return !1;
              for (var l = c; l--;) {
                var u = a[l];
                if (!(o ? u in t : H.call(t, u)))
                  return !1
              }
              var h = s.get(e);
              if (h && s.get(t))
                return h == t;
              var p = !0;
              s.set(e, t),
                s.set(t, e);
              for (var f = o; ++l < c;) {
                var d = e[u = a[l]]
                  , g = t[u];
                if (i)
                  var y = o ? i(g, d, u, t, e, s) : i(d, g, u, e, t, s);
                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                  p = !1;
                  break
                }
                f || (f = "constructor" == u)
              }
              if (p && !f) {
                var v = e.constructor
                  , m = t.constructor;
                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (p = !1)
              }
              return s.delete(e),
                s.delete(t),
                p
            }(e, t, r, i, n, s))
        }(t, r, i, n, e, s) : t != t && r != r)
      }(e, t)
    }
  },
  85346: function (e) {
    "use strict";
    function t(e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return '"[Circular]"'
      }
    }
    e.exports = function (e, r, i) {
      var n = i && i.stringify || t;
      if ("object" == typeof e && null !== e) {
        var s = r.length + 1;
        if (1 === s)
          return e;
        var o = Array(s);
        o[0] = n(e);
        for (var a = 1; a < s; a++)
          o[a] = n(r[a]);
        return o.join(" ")
      }
      if ("string" != typeof e)
        return e;
      var c = r.length;
      if (0 === c)
        return e;
      for (var l = "", u = 0, h = -1, p = e && e.length || 0, f = 0; f < p;) {
        if (37 === e.charCodeAt(f) && f + 1 < p) {
          switch (h = h > -1 ? h : 0,
          e.charCodeAt(f + 1)) {
            case 100:
            case 102:
              if (u >= c || null == r[u])
                break;
              h < f && (l += e.slice(h, f)),
                l += Number(r[u]),
                h = f + 2,
                f++;
              break;
            case 105:
              if (u >= c || null == r[u])
                break;
              h < f && (l += e.slice(h, f)),
                l += Math.floor(Number(r[u])),
                h = f + 2,
                f++;
              break;
            case 79:
            case 111:
            case 106:
              if (u >= c || void 0 === r[u])
                break;
              h < f && (l += e.slice(h, f));
              var d = typeof r[u];
              if ("string" === d) {
                l += "'" + r[u] + "'",
                  h = f + 2,
                  f++;
                break
              }
              if ("function" === d) {
                l += r[u].name || "<anonymous>",
                  h = f + 2,
                  f++;
                break
              }
              l += n(r[u]),
                h = f + 2,
                f++;
              break;
            case 115:
              if (u >= c)
                break;
              h < f && (l += e.slice(h, f)),
                l += String(r[u]),
                h = f + 2,
                f++;
              break;
            case 37:
              h < f && (l += e.slice(h, f)),
                l += "%",
                h = f + 2,
                f++,
                u--
          }
          ++u
        }
        ++f
      }
      return -1 === h ? e : (h < p && (l += e.slice(h)),
        l)
    }
  },
  63954: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.safeJsonParse = function (e) {
        if ("string" != typeof e)
          throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return JSON.parse(e)
        } catch (t) {
          return e
        }
      }
      ,
      t.safeJsonStringify = function (e) {
        return "string" == typeof e ? e : JSON.stringify(e, (e, t) => void 0 === t ? null : t)
      }
  },
  36559: function (e, t, r) {
    "use strict";
    let i = r(85346);
    e.exports = s;
    let n = function () {
      function e(e) {
        return void 0 !== e && e
      }
      try {
        if ("undefined" != typeof globalThis)
          return globalThis;
        return Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis,
              this.globalThis = this
          },
          configurable: !0
        }),
          globalThis
      } catch (t) {
        return e(self) || e(window) || e(this) || {}
      }
    }().console || {};
    function s(e) {
      var t;
      (e = e || {}).browser = e.browser || {};
      let r = e.browser.transmit;
      if (r && "function" != typeof r.send)
        throw Error("pino: transmit option must have a send function");
      let i = e.browser.write || n;
      e.browser.write && (e.browser.asObject = !0);
      let u = e.serializers || {}
        , h = function (e, t) {
          if (Array.isArray(e)) {
            let t = e.filter(function (e) {
              return "!stdSerializers.err" !== e
            });
            return t
          }
          return !0 === e && Object.keys(t)
        }(e.browser.serialize, u)
        , g = e.browser.serialize;
      Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1),
        "function" == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i),
        !1 === e.enabled && (e.level = "silent");
      let y = e.level || "info"
        , v = Object.create(i);
      v.log || (v.log = p),
        Object.defineProperty(v, "levelVal", {
          get: function () {
            return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
          }
        }),
        Object.defineProperty(v, "level", {
          get: function () {
            return this._level
          },
          set: function (e) {
            if ("silent" !== e && !this.levels.values[e])
              throw Error("unknown level " + e);
            this._level = e,
              o(m, v, "error", "log"),
              o(m, v, "fatal", "error"),
              o(m, v, "warn", "error"),
              o(m, v, "info", "log"),
              o(m, v, "debug", "log"),
              o(m, v, "trace", "log")
          }
        });
      let m = {
        transmit: r,
        serialize: h,
        asObject: e.browser.asObject,
        levels: ["error", "fatal", "warn", "info", "debug", "trace"],
        timestamp: "function" == typeof (t = e).timestamp ? t.timestamp : !1 === t.timestamp ? f : d
      };
      return v.levels = s.levels,
        v.level = y,
        v.setMaxListeners = v.getMaxListeners = v.emit = v.addListener = v.on = v.prependListener = v.once = v.prependOnceListener = v.removeListener = v.removeAllListeners = v.listeners = v.listenerCount = v.eventNames = v.write = v.flush = p,
        v.serializers = u,
        v._serialize = h,
        v._stdErrSerialize = g,
        v.child = function (t, i) {
          if (!t)
            throw Error("missing bindings for child Pino");
          i = i || {},
            h && t.serializers && (i.serializers = t.serializers);
          let n = i.serializers;
          if (h && n) {
            var s = Object.assign({}, u, n)
              , o = !0 === e.browser.serialize ? Object.keys(s) : h;
            delete t.serializers,
              a([t], o, s, this._stdErrSerialize)
          }
          function p(e) {
            this._childLevel = (0 | e._childLevel) + 1,
              this.error = c(e, t, "error"),
              this.fatal = c(e, t, "fatal"),
              this.warn = c(e, t, "warn"),
              this.info = c(e, t, "info"),
              this.debug = c(e, t, "debug"),
              this.trace = c(e, t, "trace"),
              s && (this.serializers = s,
                this._serialize = o),
              r && (this._logEvent = l([].concat(e._logEvent.bindings, t)))
          }
          return p.prototype = this,
            new p(this)
        }
        ,
        r && (v._logEvent = l()),
        v
    }
    function o(e, t, r, o) {
      let c = Object.getPrototypeOf(t);
      t[r] = t.levelVal > t.levels.values[r] ? p : c[r] ? c[r] : n[r] || n[o] || p,
        function (e, t, r) {
          if (e.transmit || t[r] !== p) {
            var o;
            t[r] = (o = t[r],
              function () {
                let c = e.timestamp()
                  , u = Array(arguments.length)
                  , h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                for (var p = 0; p < u.length; p++)
                  u[p] = arguments[p];
                if (e.serialize && !e.asObject && a(u, this._serialize, this.serializers, this._stdErrSerialize),
                  e.asObject ? o.call(h, function (e, t, r, n) {
                    e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                    let o = r.slice()
                      , c = o[0]
                      , l = {};
                    n && (l.time = n),
                      l.level = s.levels.values[t];
                    let u = (0 | e._childLevel) + 1;
                    if (u < 1 && (u = 1),
                      null !== c && "object" == typeof c) {
                      for (; u-- && "object" == typeof o[0];)
                        Object.assign(l, o.shift());
                      c = o.length ? i(o.shift(), o) : void 0
                    } else
                      "string" == typeof c && (c = i(o.shift(), o));
                    return void 0 !== c && (l.msg = c),
                      l
                  }(this, r, u, c)) : o.apply(h, u),
                  e.transmit) {
                  let i = e.transmit.level || t.level
                    , n = s.levels.values[i]
                    , o = s.levels.values[r];
                  if (o < n)
                    return;
                  (function (e, t, r) {
                    let i = t.send
                      , n = t.ts
                      , s = t.methodLevel
                      , o = t.methodValue
                      , c = t.val
                      , u = e._logEvent.bindings;
                    a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                      e._logEvent.ts = n,
                      e._logEvent.messages = r.filter(function (e) {
                        return -1 === u.indexOf(e)
                      }),
                      e._logEvent.level.label = s,
                      e._logEvent.level.value = o,
                      i(s, e._logEvent, c),
                      e._logEvent = l(u)
                  }
                  )(this, {
                    ts: c,
                    methodLevel: r,
                    methodValue: o,
                    transmitLevel: i,
                    transmitValue: s.levels.values[e.transmit.level || t.level],
                    send: e.transmit.send,
                    val: t.levelVal
                  }, u)
                }
              }
            )
          }
        }(e, t, r)
    }
    function a(e, t, r, i) {
      for (let n in e)
        if (i && e[n] instanceof Error)
          e[n] = s.stdSerializers.err(e[n]);
        else if ("object" == typeof e[n] && !Array.isArray(e[n]))
          for (let i in e[n])
            t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
    }
    function c(e, t, r) {
      return function () {
        let i = Array(1 + arguments.length);
        i[0] = t;
        for (var n = 1; n < i.length; n++)
          i[n] = arguments[n - 1];
        return e[r].apply(this, i)
      }
    }
    function l(e) {
      return {
        ts: 0,
        messages: [],
        bindings: e || [],
        level: {
          label: "",
          value: 0
        }
      }
    }
    function u() {
      return {}
    }
    function h(e) {
      return e
    }
    function p() { }
    function f() {
      return !1
    }
    function d() {
      return Date.now()
    }
    s.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    },
      s.stdSerializers = {
        mapHttpRequest: u,
        mapHttpResponse: u,
        wrapRequestSerializer: h,
        wrapResponseSerializer: h,
        wrapErrorSerializer: h,
        req: u,
        res: u,
        err: function (e) {
          let t = {
            type: e.constructor.name,
            msg: e.message,
            stack: e.stack
          };
          for (let r in e)
            void 0 === t[r] && (t[r] = e[r]);
          return t
        }
      },
      s.stdTimeFunctions = Object.assign({}, {
        nullTime: f,
        epochTime: d,
        unixTime: function () {
          return Math.round(Date.now() / 1e3)
        },
        isoTime: function () {
          return new Date(Date.now()).toISOString()
        }
      })
  }
}]);
