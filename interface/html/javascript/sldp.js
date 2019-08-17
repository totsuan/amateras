var SLDP = function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  var i = {};
  return e.m = t, e.c = i, e.i = function (t) {
    return t
  }, e.d = function (t, i, n) {
    e.o(t, i) || Object.defineProperty(t, i, {
      configurable: !1,
      enumerable: !0,
      get: n
    })
  }, e.n = function (t) {
    var i = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(i, "a", i), i
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e(e.s = 356)
}([function (t, e, i) {
  var n = i(2),
    r = i(20),
    s = i(12),
    o = i(13),
    a = i(21),
    u = function (t, e, i) {
      var c, l, f, h, d = t & u.F,
        p = t & u.G,
        v = t & u.S,
        m = t & u.P,
        g = t & u.B,
        _ = p ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
        b = p ? r : r[e] || (r[e] = {}),
        y = b.prototype || (b.prototype = {});
      p && (i = e);
      for (c in i) f = ((l = !d && _ && void 0 !== _[c]) ? _ : i)[c], h = g && l ? a(f, n) : m && "function" == typeof f ? a(Function.call, f) : f, _ && o(_, c, f, t & u.U), b[c] != f && s(b, c, h), m && y[c] != f && (y[c] = f)
    };
  n.core = r, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function (t, e, i) {
  var n = i(4);
  t.exports = function (t) {
    if (!n(t)) throw TypeError(t + " is not an object!");
    return t
  }
}, function (t, e) {
  var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = i)
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, function (t, e, i) {
  var n = i(62)("wks"),
    r = i(42),
    s = i(2).Symbol,
    o = "function" == typeof s;
  (t.exports = function (t) {
    return n[t] || (n[t] = o && s[t] || (o ? s : r)("Symbol." + t))
  }).store = n
}, function (t, e, i) {
  t.exports = !i(3)(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e, i) {
  var n = i(1),
    r = i(107),
    s = i(27),
    o = Object.defineProperty;
  e.f = i(6) ? Object.defineProperty : function (t, e, i) {
    if (n(t), e = s(e, !0), n(i), r) try {
      return o(t, e, i)
    } catch (t) {}
    if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
    return "value" in i && (t[e] = i.value), t
  }
}, function (t, e, i) {
  var n = i(26),
    r = Math.min;
  t.exports = function (t) {
    return t > 0 ? r(n(t), 9007199254740991) : 0
  }
}, function (t, e, i) {
  var n = i(24);
  t.exports = function (t) {
    return Object(n(t))
  }
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, function (t, e, i) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    s = function () {
      var t = "error",
        e = [],
        i = function () {
          function i(t, e) {
            n(this, i), this.div = !1, this.id = t, this.prefix = e
          }
          return r(i, [{
            key: "setDiv",
            value: function (t) {
              "string" == typeof t && (this.div = document.getElementById(t))
            }
          }, {
            key: "setPrefix",
            value: function (t) {
              this.prefix = t
            }
          }, {
            key: "error",
            value: function () {
              this._log.apply(this, arguments)
            }
          }, {
            key: "warn",
            value: function () {
              "warn" != t && "debug" != t || this._log.apply(this, arguments)
            }
          }, {
            key: "debug",
            value: function () {
              "debug" == t && this._log.apply(this, arguments)
            }
          }, {
            key: "_log",
            value: function () {
              var t = Date.now(),
                i = t % 1e3;
              i < 10 ? i = "00" + i : i < 100 && (i = "0" + i);
              var n = (t = Math.floor(t / 1e3)) % 86400,
                r = Math.floor(n / 3600);
              r < 10 && (r = "0" + r), n -= 3600 * r;
              var s = Math.floor(n / 60);
              s < 10 && (s = "0" + s), (n -= 60 * s) < 10 && (n = "0" + n), arguments[0] = "[" + r + ":" + s + ":" + n + "." + i + "][" + this.id + "][" + this.prefix + "]: " + arguments[0], console.log.apply(console, arguments);
              var o = this.div ? this.div : e[this.id];
              if (o) {
                var a = Array.prototype.slice.call(arguments),
                  u = document.createElement("div"),
                  c = document.createTextNode(a.join(" "));
                u.appendChild(c), o.appendChild(u), 30 < o.children.length && o.removeChild(o.children[0]), o.scrollTop = o.scrollHeight
              }
            }
          }]), i
        }();
      return {
        create: function (t, e) {
          return new i(t, e)
        },
        setLevel: function (e) {
          t = e
        },
        setDiv: function (t, i) {
          "string" == typeof i && (e[t] = document.getElementById(i))
        }
      }
    }();
  e.default = s
}, function (t, e, i) {
  var n = i(7),
    r = i(38);
  t.exports = i(6) ? function (t, e, i) {
    return n.f(t, e, r(1, i))
  } : function (t, e, i) {
    return t[e] = i, t
  }
}, function (t, e, i) {
  var n = i(2),
    r = i(12),
    s = i(15),
    o = i(42)("src"),
    a = Function.toString,
    u = ("" + a).split("toString");
  i(20).inspectSource = function (t) {
    return a.call(t)
  }, (t.exports = function (t, e, i, a) {
    var c = "function" == typeof i;
    c && (s(i, "name") || r(i, "name", e)), t[e] !== i && (c && (s(i, o) || r(i, o, t[e] ? "" + t[e] : u.join(String(e)))), t === n ? t[e] = i : a ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && this[o] || a.call(this)
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(3),
    s = i(24),
    o = /"/g,
    a = function (t, e, i, n) {
      var r = String(s(t)),
        a = "<" + e;
      return "" !== i && (a += " " + i + '="' + String(n).replace(o, "&quot;") + '"'), a + ">" + r + "</" + e + ">"
    };
  t.exports = function (t, e) {
    var i = {};
    i[t] = e(a), n(n.P + n.F * r(function () {
      var e = "" [t]('"');
      return e !== e.toLowerCase() || e.split('"').length > 3
    }), "String", i)
  }
}, function (t, e) {
  var i = {}.hasOwnProperty;
  t.exports = function (t, e) {
    return i.call(t, e)
  }
}, function (t, e, i) {
  var n = i(49),
    r = i(38),
    s = i(18),
    o = i(27),
    a = i(15),
    u = i(107),
    c = Object.getOwnPropertyDescriptor;
  e.f = i(6) ? c : function (t, e) {
    if (t = s(t), e = o(e, !0), u) try {
      return c(t, e)
    } catch (t) {}
    if (a(t, e)) return r(!n.f.call(t, e), t[e])
  }
}, function (t, e, i) {
  var n = i(15),
    r = i(9),
    s = i(83)("IE_PROTO"),
    o = Object.prototype;
  t.exports = Object.getPrototypeOf || function (t) {
    return t = r(t), n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
  }
}, function (t, e, i) {
  var n = i(48),
    r = i(24);
  t.exports = function (t) {
    return n(r(t))
  }
}, function (t, e) {
  var i = {}.toString;
  t.exports = function (t) {
    return i.call(t).slice(8, -1)
  }
}, function (t, e) {
  var i = t.exports = {
    version: "2.5.7"
  };
  "number" == typeof __e && (__e = i)
}, function (t, e, i) {
  var n = i(10);
  t.exports = function (t, e, i) {
    if (n(t), void 0 === e) return t;
    switch (i) {
    case 1:
      return function (i) {
        return t.call(e, i)
      };
    case 2:
      return function (i, n) {
        return t.call(e, i, n)
      };
    case 3:
      return function (i, n, r) {
        return t.call(e, i, n, r)
      }
    }
    return function () {
      return t.apply(e, arguments)
    }
  }
}, function (t, e, i) {
  "use strict";
  var n = i(3);
  t.exports = function (t, e) {
    return !!t && n(function () {
      e ? t.call(null, function () {}, 1) : t.call(null)
    })
  }
}, function (t, e, i) {
  var n = i(21),
    r = i(48),
    s = i(9),
    o = i(8),
    a = i(68);
  t.exports = function (t, e) {
    var i = 1 == t,
      u = 2 == t,
      c = 3 == t,
      l = 4 == t,
      f = 6 == t,
      h = 5 == t || f,
      d = e || a;
    return function (e, a, p) {
      for (var v, m, g = s(e), _ = r(g), b = n(a, p, 3), y = o(_.length), A = 0, w = i ? d(e, y) : u ? d(e, 0) : void 0; y > A; A++)
        if ((h || A in _) && (v = _[A], m = b(v, A, g), t))
          if (i) w[A] = m;
          else if (m) switch (t) {
      case 3:
        return !0;
      case 5:
        return v;
      case 6:
        return A;
      case 2:
        w.push(v)
      } else if (l) return !1;
      return f ? -1 : c || l ? l : w
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);
    return t
  }
}, function (t, e, i) {
  var n = i(0),
    r = i(20),
    s = i(3);
  t.exports = function (t, e) {
    var i = (r.Object || {})[t] || Object[t],
      o = {};
    o[t] = e(i), n(n.S + n.F * s(function () {
      i(1)
    }), "Object", o)
  }
}, function (t, e) {
  var i = Math.ceil,
    n = Math.floor;
  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
  }
}, function (t, e, i) {
  var n = i(4);
  t.exports = function (t, e) {
    if (!n(t)) return t;
    var i, r;
    if (e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
    if ("function" == typeof (i = t.valueOf) && !n(r = i.call(t))) return r;
    if (!e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (t, e, i) {
  var n = i(128),
    r = i(0),
    s = i(62)("metadata"),
    o = s.store || (s.store = new(i(131))),
    a = function (t, e, i) {
      var r = o.get(t);
      if (!r) {
        if (!i) return;
        o.set(t, r = new n)
      }
      var s = r.get(e);
      if (!s) {
        if (!i) return;
        r.set(e, s = new n)
      }
      return s
    };
  t.exports = {
    store: o,
    map: a,
    has: function (t, e, i) {
      var n = a(e, i, !1);
      return void 0 !== n && n.has(t)
    },
    get: function (t, e, i) {
      var n = a(e, i, !1);
      return void 0 === n ? void 0 : n.get(t)
    },
    set: function (t, e, i, n) {
      a(i, n, !0).set(t, e)
    },
    keys: function (t, e) {
      var i = a(t, e, !1),
        n = [];
      return i && i.forEach(function (t, e) {
        n.push(e)
      }), n
    },
    key: function (t) {
      return void 0 === t || "symbol" == typeof t ? t : String(t)
    },
    exp: function (t) {
      r(r.S, "Reflect", t)
    }
  }
}, function (t, e, i) {
  "use strict";
  if (i(6)) {
    var n = i(31),
      r = i(2),
      s = i(3),
      o = i(0),
      a = i(64),
      u = i(89),
      c = i(21),
      l = i(33),
      f = i(38),
      h = i(12),
      d = i(39),
      p = i(26),
      v = i(8),
      m = i(126),
      g = i(41),
      _ = i(27),
      b = i(15),
      y = i(47),
      A = i(4),
      w = i(9),
      S = i(75),
      k = i(35),
      T = i(17),
      x = i(36).f,
      C = i(91),
      E = i(42),
      P = i(5),
      B = i(23),
      F = i(51),
      M = i(63),
      I = i(92),
      L = i(43),
      R = i(57),
      D = i(40),
      O = i(67),
      N = i(99),
      j = i(7),
      U = i(16),
      V = j.f,
      H = U.f,
      z = r.RangeError,
      W = r.TypeError,
      Q = r.Uint8Array,
      Y = Array.prototype,
      G = u.ArrayBuffer,
      q = u.DataView,
      J = B(0),
      K = B(2),
      X = B(3),
      Z = B(4),
      $ = B(5),
      tt = B(6),
      et = F(!0),
      it = F(!1),
      nt = I.values,
      rt = I.keys,
      st = I.entries,
      ot = Y.lastIndexOf,
      at = Y.reduce,
      ut = Y.reduceRight,
      ct = Y.join,
      lt = Y.sort,
      ft = Y.slice,
      ht = Y.toString,
      dt = Y.toLocaleString,
      pt = P("iterator"),
      vt = P("toStringTag"),
      mt = E("typed_constructor"),
      gt = E("def_constructor"),
      _t = a.CONSTR,
      bt = a.TYPED,
      yt = a.VIEW,
      At = B(1, function (t, e) {
        return xt(M(t, t[gt]), e)
      }),
      wt = s(function () {
        return 1 === new Q(new Uint16Array([1]).buffer)[0]
      }),
      St = !!Q && !!Q.prototype.set && s(function () {
        new Q(1).set({})
      }),
      kt = function (t, e) {
        var i = p(t);
        if (i < 0 || i % e) throw z("Wrong offset!");
        return i
      },
      Tt = function (t) {
        if (A(t) && bt in t) return t;
        throw W(t + " is not a typed array!")
      },
      xt = function (t, e) {
        if (!(A(t) && mt in t)) throw W("It is not a typed array constructor!");
        return new t(e)
      },
      Ct = function (t, e) {
        return Et(M(t, t[gt]), e)
      },
      Et = function (t, e) {
        for (var i = 0, n = e.length, r = xt(t, n); n > i;) r[i] = e[i++];
        return r
      },
      Pt = function (t, e, i) {
        V(t, e, {
          get: function () {
            return this._d[i]
          }
        })
      },
      Bt = function (t) {
        var e, i, n, r, s, o, a = w(t),
          u = arguments.length,
          l = u > 1 ? arguments[1] : void 0,
          f = void 0 !== l,
          h = C(a);
        if (void 0 != h && !S(h)) {
          for (o = h.call(a), n = [], e = 0; !(s = o.next()).done; e++) n.push(s.value);
          a = n
        }
        for (f && u > 2 && (l = c(l, arguments[2], 2)), e = 0, i = v(a.length), r = xt(this, i); i > e; e++) r[e] = f ? l(a[e], e) : a[e];
        return r
      },
      Ft = function () {
        for (var t = 0, e = arguments.length, i = xt(this, e); e > t;) i[t] = arguments[t++];
        return i
      },
      Mt = !!Q && s(function () {
        dt.call(new Q(1))
      }),
      It = function () {
        return dt.apply(Mt ? ft.call(Tt(this)) : Tt(this), arguments)
      },
      Lt = {
        copyWithin: function (t, e) {
          return N.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        every: function (t) {
          return Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        fill: function (t) {
          return O.apply(Tt(this), arguments)
        },
        filter: function (t) {
          return Ct(this, K(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0))
        },
        find: function (t) {
          return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        findIndex: function (t) {
          return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        forEach: function (t) {
          J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        indexOf: function (t) {
          return it(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        includes: function (t) {
          return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        join: function (t) {
          return ct.apply(Tt(this), arguments)
        },
        lastIndexOf: function (t) {
          return ot.apply(Tt(this), arguments)
        },
        map: function (t) {
          return At(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        reduce: function (t) {
          return at.apply(Tt(this), arguments)
        },
        reduceRight: function (t) {
          return ut.apply(Tt(this), arguments)
        },
        reverse: function () {
          for (var t, e = this, i = Tt(e).length, n = Math.floor(i / 2), r = 0; r < n;) t = e[r], e[r++] = e[--i], e[i] = t;
          return e
        },
        some: function (t) {
          return X(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        sort: function (t) {
          return lt.call(Tt(this), t)
        },
        subarray: function (t, e) {
          var i = Tt(this),
            n = i.length,
            r = g(t, n);
          return new(M(i, i[gt]))(i.buffer, i.byteOffset + r * i.BYTES_PER_ELEMENT, v((void 0 === e ? n : g(e, n)) - r))
        }
      },
      Rt = function (t, e) {
        return Ct(this, ft.call(Tt(this), t, e))
      },
      Dt = function (t) {
        Tt(this);
        var e = kt(arguments[1], 1),
          i = this.length,
          n = w(t),
          r = v(n.length),
          s = 0;
        if (r + e > i) throw z("Wrong length!");
        for (; s < r;) this[e + s] = n[s++]
      },
      Ot = {
        entries: function () {
          return st.call(Tt(this))
        },
        keys: function () {
          return rt.call(Tt(this))
        },
        values: function () {
          return nt.call(Tt(this))
        }
      },
      Nt = function (t, e) {
        return A(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
      },
      jt = function (t, e) {
        return Nt(t, e = _(e, !0)) ? f(2, t[e]) : H(t, e)
      },
      Ut = function (t, e, i) {
        return !(Nt(t, e = _(e, !0)) && A(i) && b(i, "value")) || b(i, "get") || b(i, "set") || i.configurable || b(i, "writable") && !i.writable || b(i, "enumerable") && !i.enumerable ? V(t, e, i) : (t[e] = i.value, t)
      };
    _t || (U.f = jt, j.f = Ut), o(o.S + o.F * !_t, "Object", {
      getOwnPropertyDescriptor: jt,
      defineProperty: Ut
    }), s(function () {
      ht.call({})
    }) && (ht = dt = function () {
      return ct.call(this)
    });
    var Vt = d({}, Lt);
    d(Vt, Ot), h(Vt, pt, Ot.values), d(Vt, {
      slice: Rt,
      set: Dt,
      constructor: function () {},
      toString: ht,
      toLocaleString: It
    }), Pt(Vt, "buffer", "b"), Pt(Vt, "byteOffset", "o"), Pt(Vt, "byteLength", "l"), Pt(Vt, "length", "e"), V(Vt, vt, {
      get: function () {
        return this[bt]
      }
    }), t.exports = function (t, e, i, u) {
      var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
        f = "get" + t,
        d = "set" + t,
        p = r[c],
        g = p || {},
        _ = p && T(p),
        b = !p || !a.ABV,
        w = {},
        S = p && p.prototype,
        C = function (t, i) {
          var n = t._d;
          return n.v[f](i * e + n.o, wt)
        },
        E = function (t, i, n) {
          var r = t._d;
          u && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.v[d](i * e + r.o, n, wt)
        },
        P = function (t, e) {
          V(t, e, {
            get: function () {
              return C(this, e)
            },
            set: function (t) {
              return E(this, e, t)
            },
            enumerable: !0
          })
        };
      b ? (p = i(function (t, i, n, r) {
        l(t, p, c, "_d");
        var s, o, a, u, f = 0,
          d = 0;
        if (A(i)) {
          if (!(i instanceof G || "ArrayBuffer" == (u = y(i)) || "SharedArrayBuffer" == u)) return bt in i ? Et(p, i) : Bt.call(p, i);
          s = i, d = kt(n, e);
          var g = i.byteLength;
          if (void 0 === r) {
            if (g % e) throw z("Wrong length!");
            if ((o = g - d) < 0) throw z("Wrong length!")
          } else if ((o = v(r) * e) + d > g) throw z("Wrong length!");
          a = o / e
        } else a = m(i), s = new G(o = a * e);
        for (h(t, "_d", {
            b: s,
            o: d,
            l: o,
            e: a,
            v: new q(s)
          }); f < a;) P(t, f++)
      }), S = p.prototype = k(Vt), h(S, "constructor", p)) : s(function () {
        p(1)
      }) && s(function () {
        new p(-1)
      }) && R(function (t) {
        new p, new p(null), new p(1.5), new p(t)
      }, !0) || (p = i(function (t, i, n, r) {
        l(t, p, c);
        var s;
        return A(i) ? i instanceof G || "ArrayBuffer" == (s = y(i)) || "SharedArrayBuffer" == s ? void 0 !== r ? new g(i, kt(n, e), r) : void 0 !== n ? new g(i, kt(n, e)) : new g(i) : bt in i ? Et(p, i) : Bt.call(p, i) : new g(m(i))
      }), J(_ !== Function.prototype ? x(g).concat(x(_)) : x(g), function (t) {
        t in p || h(p, t, g[t])
      }), p.prototype = S, n || (S.constructor = p));
      var B = S[pt],
        F = !!B && ("values" == B.name || void 0 == B.name),
        M = Ot.values;
      h(p, mt, !0), h(S, bt, c), h(S, yt, !0), h(S, gt, p), (u ? new p(1)[vt] == c : vt in S) || V(S, vt, {
        get: function () {
          return c
        }
      }), w[c] = p, o(o.G + o.W + o.F * (p != g), w), o(o.S, c, {
        BYTES_PER_ELEMENT: e
      }), o(o.S + o.F * s(function () {
        g.of.call(p, 1)
      }), c, {
        from: Bt,
        of : Ft
      }), "BYTES_PER_ELEMENT" in S || h(S, "BYTES_PER_ELEMENT", e), o(o.P, c, Lt), D(c), o(o.P + o.F * St, c, {
        set: Dt
      }), o(o.P + o.F * !F, c, Ot), n || S.toString == ht || (S.toString = ht), o(o.P + o.F * s(function () {
        new p(1).slice()
      }), c, {
        slice: Rt
      }), o(o.P + o.F * (s(function () {
        return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
      }) || !s(function () {
        S.toLocaleString.call([1, 2])
      })), c, {
        toLocaleString: It
      }), L[c] = F ? B : M, n || F || h(S, pt, M)
    }
  } else t.exports = function () {}
}, function (t, e, i) {
  var n = i(5)("unscopables"),
    r = Array.prototype;
  void 0 == r[n] && i(12)(r, n, {}), t.exports = function (t) {
    r[n][t] = !0
  }
}, function (t, e) {
  t.exports = !1
}, function (t, e, i) {
  var n = i(42)("meta"),
    r = i(4),
    s = i(15),
    o = i(7).f,
    a = 0,
    u = Object.isExtensible || function () {
      return !0
    },
    c = !i(3)(function () {
      return u(Object.preventExtensions({}))
    }),
    l = function (t) {
      o(t, n, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      })
    },
    f = t.exports = {
      KEY: n,
      NEED: !1,
      fastKey: function (t, e) {
        if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!s(t, n)) {
          if (!u(t)) return "F";
          if (!e) return "E";
          l(t)
        }
        return t[n].i
      },
      getWeak: function (t, e) {
        if (!s(t, n)) {
          if (!u(t)) return !0;
          if (!e) return !1;
          l(t)
        }
        return t[n].w
      },
      onFreeze: function (t) {
        return c && f.NEED && u(t) && !s(t, n) && l(t), t
      }
    }
}, function (t, e) {
  t.exports = function (t, e, i, n) {
    if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
    return t
  }
}, function (t, e, i) {
  var n = i(21),
    r = i(110),
    s = i(75),
    o = i(1),
    a = i(8),
    u = i(91),
    c = {},
    l = {};
  (e = t.exports = function (t, e, i, f, h) {
    var d, p, v, m, g = h ? function () {
        return t
      } : u(t),
      _ = n(i, f, e ? 2 : 1),
      b = 0;
    if ("function" != typeof g) throw TypeError(t + " is not iterable!");
    if (s(g)) {
      for (d = a(t.length); d > b; b++)
        if ((m = e ? _(o(p = t[b])[0], p[1]) : _(t[b])) === c || m === l) return m
    } else
      for (v = g.call(t); !(p = v.next()).done;)
        if ((m = r(v, _, p.value, e)) === c || m === l) return m
  }).BREAK = c, e.RETURN = l
}, function (t, e, i) {
  var n = i(1),
    r = i(116),
    s = i(71),
    o = i(83)("IE_PROTO"),
    a = function () {},
    u = function () {
      var t, e = i(70)("iframe"),
        n = s.length;
      for (e.style.display = "none", i(73).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u.prototype[s[n]];
      return u()
    };
  t.exports = Object.create || function (t, e) {
    var i;
    return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[o] = t) : i = u(), void 0 === e ? i : r(i, e)
  }
}, function (t, e, i) {
  var n = i(118),
    r = i(71).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function (t) {
    return n(t, r)
  }
}, function (t, e, i) {
  var n = i(118),
    r = i(71);
  t.exports = Object.keys || function (t) {
    return n(t, r)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function (t, e, i) {
  var n = i(13);
  t.exports = function (t, e, i) {
    for (var r in e) n(t, r, e[r], i);
    return t
  }
}, function (t, e, i) {
  "use strict";
  var n = i(2),
    r = i(7),
    s = i(6),
    o = i(5)("species");
  t.exports = function (t) {
    var e = n[t];
    s && e && !e[o] && r.f(e, o, {
      configurable: !0,
      get: function () {
        return this
      }
    })
  }
}, function (t, e, i) {
  var n = i(26),
    r = Math.max,
    s = Math.min;
  t.exports = function (t, e) {
    return (t = n(t)) < 0 ? r(t + e, 0) : s(t, e)
  }
}, function (t, e) {
  var i = 0,
    n = Math.random();
  t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
  }
}, function (t, e) {
  t.exports = {}
}, function (t, e, i) {
  var n = i(7).f,
    r = i(15),
    s = i(5)("toStringTag");
  t.exports = function (t, e, i) {
    t && !r(t = i ? t : t.prototype, s) && n(t, s, {
      configurable: !0,
      value: e
    })
  }
}, function (t, e, i) {
  var n = i(0),
    r = i(24),
    s = i(3),
    o = i(87),
    a = "[" + o + "]",
    u = RegExp("^" + a + a + "*"),
    c = RegExp(a + a + "*$"),
    l = function (t, e, i) {
      var r = {},
        a = s(function () {
          return !!o[t]() || "窶仰�" != "窶仰�" [t]()
        }),
        u = r[t] = a ? e(f) : o[t];
      i && (r[i] = u), n(n.P + n.F * a, "String", r)
    },
    f = l.trim = function (t, e) {
      return t = String(r(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
    };
  t.exports = l
}, function (t, e, i) {
  var n = i(4);
  t.exports = function (t, e) {
    if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
    return t
  }
}, function (t, e, i) {
  var n = i(19),
    r = i(5)("toStringTag"),
    s = "Arguments" == n(function () {
      return arguments
    }()),
    o = function (t, e) {
      try {
        return t[e]
      } catch (t) {}
    };
  t.exports = function (t) {
    var e, i, a;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = o(e = Object(t), r)) ? i : s ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a
  }
}, function (t, e, i) {
  var n = i(19);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == n(t) ? t.split("") : Object(t)
  }
}, function (t, e) {
  e.f = {}.propertyIsEnumerable
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t) {
    this.offset = void 0 === t ? 0 : t
  }
}, function (t, e, i) {
  var n = i(18),
    r = i(8),
    s = i(41);
  t.exports = function (t) {
    return function (e, i, o) {
      var a, u = n(e),
        c = r(u.length),
        l = s(o, c);
      if (t && i != i) {
        for (; c > l;)
          if ((a = u[l++]) != a) return !0
      } else
        for (; c > l; l++)
          if ((t || l in u) && u[l] === i) return t || l || 0;
      return !t && -1
    }
  }
}, function (t, e, i) {
  "use strict";
  var n = i(2),
    r = i(0),
    s = i(13),
    o = i(39),
    a = i(32),
    u = i(34),
    c = i(33),
    l = i(4),
    f = i(3),
    h = i(57),
    d = i(44),
    p = i(74);
  t.exports = function (t, e, i, v, m, g) {
    var _ = n[t],
      b = _,
      y = m ? "set" : "add",
      A = b && b.prototype,
      w = {},
      S = function (t) {
        var e = A[t];
        s(A, t, "delete" == t ? function (t) {
          return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "has" == t ? function (t) {
          return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "get" == t ? function (t) {
          return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
        } : "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this
        } : function (t, i) {
          return e.call(this, 0 === t ? 0 : t, i), this
        })
      };
    if ("function" == typeof b && (g || A.forEach && !f(function () {
        (new b).entries().next()
      }))) {
      var k = new b,
        T = k[y](g ? {} : -0, 1) != k,
        x = f(function () {
          k.has(1)
        }),
        C = h(function (t) {
          new b(t)
        }),
        E = !g && f(function () {
          for (var t = new b, e = 5; e--;) t[y](e, e);
          return !t.has(-0)
        });
      C || ((b = e(function (e, i) {
        c(e, b, t);
        var n = p(new _, e, b);
        return void 0 != i && u(i, m, n[y], n), n
      })).prototype = A, A.constructor = b), (x || E) && (S("delete"), S("has"), m && S("get")), (E || T) && S(y), g && A.clear && delete A.clear
    } else b = v.getConstructor(e, t, m, y), o(b.prototype, i), a.NEED = !0;
    return d(b, t), w[t] = b, r(r.G + r.W + r.F * (b != _), w), g || v.setStrong(b, t, m), b
  }
}, function (t, e, i) {
  "use strict";
  var n = i(12),
    r = i(13),
    s = i(3),
    o = i(24),
    a = i(5);
  t.exports = function (t, e, i) {
    var u = a(t),
      c = i(o, u, "" [t]),
      l = c[0],
      f = c[1];
    s(function () {
      var e = {};
      return e[u] = function () {
        return 7
      }, 7 != "" [t](e)
    }) && (r(String.prototype, t, l), n(RegExp.prototype, u, 2 == e ? function (t, e) {
      return f.call(t, this, e)
    } : function (t) {
      return f.call(t, this)
    }))
  }
}, function (t, e, i) {
  "use strict";
  var n = i(1);
  t.exports = function () {
    var t = n(this),
      e = "";
    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
  }
}, function (t, e, i) {
  var n = i(19);
  t.exports = Array.isArray || function (t) {
    return "Array" == n(t)
  }
}, function (t, e, i) {
  var n = i(4),
    r = i(19),
    s = i(5)("match");
  t.exports = function (t) {
    var e;
    return n(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == r(t))
  }
}, function (t, e, i) {
  var n = i(5)("iterator"),
    r = !1;
  try {
    var s = [7][n]();
    s.return = function () {
      r = !0
    }, Array.from(s, function () {
      throw 2
    })
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !r) return !1;
    var i = !1;
    try {
      var s = [7],
        o = s[n]();
      o.next = function () {
        return {
          done: i = !0
        }
      }, s[n] = function () {
        return o
      }, t(s)
    } catch (t) {}
    return i
  }
}, function (t, e, i) {
  "use strict";
  t.exports = i(31) || !i(3)(function () {
    var t = Math.random();
    __defineSetter__.call(null, t, function () {}), delete i(2)[t]
  })
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(10),
    s = i(21),
    o = i(34);
  t.exports = function (t) {
    n(n.S, t, {
      from: function (t) {
        var e, i, n, a, u = arguments[1];
        return r(this), (e = void 0 !== u) && r(u), void 0 == t ? new this : (i = [], e ? (n = 0, a = s(u, arguments[2], 2), o(t, !1, function (t) {
          i.push(a(t, n++))
        })) : o(t, !1, i.push, i), new this(i))
      }
    })
  }
}, function (t, e, i) {
  "use strict";
  var n = i(0);
  t.exports = function (t) {
    n(n.S, t, { of : function () {
        for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
        return new this(e)
      }
    })
  }
}, function (t, e, i) {
  var n = i(20),
    r = i(2),
    s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
  (t.exports = function (t, e) {
    return s[t] || (s[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: n.version,
    mode: i(31) ? "pure" : "global",
    copyright: "ﾂｩ 2018 Denis Pushkarev (zloirock.ru)"
  })
}, function (t, e, i) {
  var n = i(1),
    r = i(10),
    s = i(5)("species");
  t.exports = function (t, e) {
    var i, o = n(t).constructor;
    return void 0 === o || void 0 == (i = n(o)[s]) ? e : r(i)
  }
}, function (t, e, i) {
  for (var n, r = i(2), s = i(12), o = i(42), a = o("typed_array"), u = o("view"), c = !(!r.ArrayBuffer || !r.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(n = r[h[f++]]) ? (s(n.prototype, a, !0), s(n.prototype, u, !0)) : l = !1;
  t.exports = {
    ABV: c,
    CONSTR: l,
    TYPED: a,
    VIEW: u
  }
}, function (t, e, i) {
  var n = i(2).navigator;
  t.exports = n && n.userAgent || ""
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = new function () {
    var t = {};
    this.init = function (e, i) {
      if (i) {
        t[e] = {};
        for (var n in i) {
          var r = document.getElementById(i[n]);
          r && (t[e][n] = r)
        }
      }
    }, this.display = function (e, i, n) {
      if (t[e]) {
        var r = t[e][i];
        r && (r.innerHTML = n)
      }
    }
  };
  e.default = n
}, function (t, e, i) {
  "use strict";
  var n = i(9),
    r = i(41),
    s = i(8);
  t.exports = function (t) {
    for (var e = n(this), i = s(e.length), o = arguments.length, a = r(o > 1 ? arguments[1] : void 0, i), u = o > 2 ? arguments[2] : void 0, c = void 0 === u ? i : r(u, i); c > a;) e[a++] = t;
    return e
  }
}, function (t, e, i) {
  var n = i(156);
  t.exports = function (t, e) {
    return new(n(t))(e)
  }
}, function (t, e, i) {
  "use strict";
  var n = i(7),
    r = i(38);
  t.exports = function (t, e, i) {
    e in t ? n.f(t, e, r(0, i)) : t[e] = i
  }
}, function (t, e, i) {
  var n = i(4),
    r = i(2).document,
    s = n(r) && n(r.createElement);
  t.exports = function (t) {
    return s ? r.createElement(t) : {}
  }
}, function (t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, i) {
  var n = i(5)("match");
  t.exports = function (t) {
    var e = /./;
    try {
      "/./" [t](e)
    } catch (i) {
      try {
        return e[n] = !1, !"/./" [t](e)
      } catch (t) {}
    }
    return !0
  }
}, function (t, e, i) {
  var n = i(2).document;
  t.exports = n && n.documentElement
}, function (t, e, i) {
  var n = i(4),
    r = i(82).set;
  t.exports = function (t, e, i) {
    var s, o = e.constructor;
    return o !== i && "function" == typeof o && (s = o.prototype) !== i.prototype && n(s) && r && r(t, s), t
  }
}, function (t, e, i) {
  var n = i(43),
    r = i(5)("iterator"),
    s = Array.prototype;
  t.exports = function (t) {
    return void 0 !== t && (n.Array === t || s[r] === t)
  }
}, function (t, e, i) {
  "use strict";
  var n = i(35),
    r = i(38),
    s = i(44),
    o = {};
  i(12)(o, i(5)("iterator"), function () {
    return this
  }), t.exports = function (t, e, i) {
    t.prototype = n(o, {
      next: r(1, i)
    }), s(t, e + " Iterator")
  }
}, function (t, e, i) {
  "use strict";
  var n = i(31),
    r = i(0),
    s = i(13),
    o = i(12),
    a = i(43),
    u = i(76),
    c = i(44),
    l = i(17),
    f = i(5)("iterator"),
    h = !([].keys && "next" in [].keys()),
    d = function () {
      return this
    };
  t.exports = function (t, e, i, p, v, m, g) {
    u(i, e, p);
    var _, b, y, A = function (t) {
        if (!h && t in T) return T[t];
        switch (t) {
        case "keys":
        case "values":
          return function () {
            return new i(this, t)
          }
        }
        return function () {
          return new i(this, t)
        }
      },
      w = e + " Iterator",
      S = "values" == v,
      k = !1,
      T = t.prototype,
      x = T[f] || T["@@iterator"] || v && T[v],
      C = x || A(v),
      E = v ? S ? A("entries") : C : void 0,
      P = "Array" == e ? T.entries || x : x;
    if (P && (y = l(P.call(new t))) !== Object.prototype && y.next && (c(y, w, !0), n || "function" == typeof y[f] || o(y, f, d)), S && x && "values" !== x.name && (k = !0, C = function () {
        return x.call(this)
      }), n && !g || !h && !k && T[f] || o(T, f, C), a[e] = C, a[w] = d, v)
      if (_ = {
          values: S ? C : A("values"),
          keys: m ? C : A("keys"),
          entries: E
        }, g)
        for (b in _) b in T || s(T, b, _[b]);
      else r(r.P + r.F * (h || k), e, _);
    return _
  }
}, function (t, e) {
  var i = Math.expm1;
  t.exports = !i || i(10) > 22025.465794806718 || i(10) < 22025.465794806718 || -2e-17 != i(-2e-17) ? function (t) {
    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
  } : i
}, function (t, e) {
  t.exports = Math.sign || function (t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
  }
}, function (t, e, i) {
  var n = i(2),
    r = i(88).set,
    s = n.MutationObserver || n.WebKitMutationObserver,
    o = n.process,
    a = n.Promise,
    u = "process" == i(19)(o);
  t.exports = function () {
    var t, e, i, c = function () {
      var n, r;
      for (u && (n = o.domain) && n.exit(); t;) {
        r = t.fn, t = t.next;
        try {
          r()
        } catch (n) {
          throw t ? i() : e = void 0, n
        }
      }
      e = void 0, n && n.enter()
    };
    if (u) i = function () {
      o.nextTick(c)
    };
    else if (!s || n.navigator && n.navigator.standalone)
      if (a && a.resolve) {
        var l = a.resolve(void 0);
        i = function () {
          l.then(c)
        }
      } else i = function () {
        r.call(n, c)
      };
    else {
      var f = !0,
        h = document.createTextNode("");
      new s(c).observe(h, {
        characterData: !0
      }), i = function () {
        h.data = f = !f
      }
    }
    return function (n) {
      var r = {
        fn: n,
        next: void 0
      };
      e && (e.next = r), t || (t = r, i()), e = r
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    var e, i;
    this.promise = new t(function (t, n) {
      if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
      e = t, i = n
    }), this.resolve = r(e), this.reject = r(i)
  }
  var r = i(10);
  t.exports.f = function (t) {
    return new n(t)
  }
}, function (t, e, i) {
  var n = i(4),
    r = i(1),
    s = function (t, e) {
      if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
      try {
        (n = i(21)(Function.call, i(16).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
      } catch (t) {
        e = !0
      }
      return function (t, i) {
        return s(t, i), e ? t.__proto__ = i : n(t, i), t
      }
    }({}, !1) : void 0),
    check: s
  }
}, function (t, e, i) {
  var n = i(62)("keys"),
    r = i(42);
  t.exports = function (t) {
    return n[t] || (n[t] = r(t))
  }
}, function (t, e, i) {
  var n = i(26),
    r = i(24);
  t.exports = function (t) {
    return function (e, i) {
      var s, o, a = String(r(e)),
        u = n(i),
        c = a.length;
      return u < 0 || u >= c ? t ? "" : void 0 : (s = a.charCodeAt(u)) < 55296 || s > 56319 || u + 1 === c || (o = a.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? a.charAt(u) : s : t ? a.slice(u, u + 2) : o - 56320 + (s - 55296 << 10) + 65536
    }
  }
}, function (t, e, i) {
  var n = i(56),
    r = i(24);
  t.exports = function (t, e, i) {
    if (n(e)) throw TypeError("String#" + i + " doesn't accept regex!");
    return String(r(t))
  }
}, function (t, e, i) {
  "use strict";
  var n = i(26),
    r = i(24);
  t.exports = function (t) {
    var e = String(r(this)),
      i = "",
      s = n(t);
    if (s < 0 || s == 1 / 0) throw RangeError("Count can't be negative");
    for (; s > 0;
      (s >>>= 1) && (e += e)) 1 & s && (i += e);
    return i
  }
}, function (t, e) {
  t.exports = "\t\n\v\f\r ﾂ�癩癶寂窶≫や�����遺俄岩ｯ竅溘  ﻿"
}, function (t, e, i) {
  var n, r, s, o = i(21),
    a = i(108),
    u = i(73),
    c = i(70),
    l = i(2),
    f = l.process,
    h = l.setImmediate,
    d = l.clearImmediate,
    p = l.MessageChannel,
    v = l.Dispatch,
    m = 0,
    g = {},
    _ = function () {
      var t = +this;
      if (g.hasOwnProperty(t)) {
        var e = g[t];
        delete g[t], e()
      }
    },
    b = function (t) {
      _.call(t.data)
    };
  h && d || (h = function (t) {
    for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
    return g[++m] = function () {
      a("function" == typeof t ? t : Function(t), e)
    }, n(m), m
  }, d = function (t) {
    delete g[t]
  }, "process" == i(19)(f) ? n = function (t) {
    f.nextTick(o(_, t, 1))
  } : v && v.now ? n = function (t) {
    v.now(o(_, t, 1))
  } : p ? (s = (r = new p).port2, r.port1.onmessage = b, n = o(s.postMessage, s, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function (t) {
    l.postMessage(t + "", "*")
  }, l.addEventListener("message", b, !1)) : n = "onreadystatechange" in c("script") ? function (t) {
    u.appendChild(c("script")).onreadystatechange = function () {
      u.removeChild(this), _.call(t)
    }
  } : function (t) {
    setTimeout(o(_, t, 1), 0)
  }), t.exports = {
    set: h,
    clear: d
  }
}, function (t, e, i) {
  "use strict";

  function n(t, e, i) {
    var n, r, s, o = new Array(i),
      a = 8 * i - e - 1,
      u = (1 << a) - 1,
      c = u >> 1,
      l = 23 === e ? N(2, -24) - N(2, -77) : 0,
      f = 0,
      h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for ((t = O(t)) != t || t === R ? (r = t != t ? 1 : 0, n = u) : (n = j(U(t) / V), t * (s = N(2, -n)) < 1 && (n--, s *= 2), (t += n + c >= 1 ? l / s : l * N(2, 1 - c)) * s >= 2 && (n++, s /= 2), n + c >= u ? (r = 0, n = u) : n + c >= 1 ? (r = (t * s - 1) * N(2, e), n += c) : (r = t * N(2, c - 1) * N(2, e), n = 0)); e >= 8; o[f++] = 255 & r, r /= 256, e -= 8);
    for (n = n << e | r, a += e; a > 0; o[f++] = 255 & n, n /= 256, a -= 8);
    return o[--f] |= 128 * h, o
  }

  function r(t, e, i) {
    var n, r = 8 * i - e - 1,
      s = (1 << r) - 1,
      o = s >> 1,
      a = r - 7,
      u = i - 1,
      c = t[u--],
      l = 127 & c;
    for (c >>= 7; a > 0; l = 256 * l + t[u], u--, a -= 8);
    for (n = l & (1 << -a) - 1, l >>= -a, a += e; a > 0; n = 256 * n + t[u], u--, a -= 8);
    if (0 === l) l = 1 - o;
    else {
      if (l === s) return n ? NaN : c ? -R : R;
      n += N(2, e), l -= o
    }
    return (c ? -1 : 1) * n * N(2, l - e)
  }

  function s(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
  }

  function o(t) {
    return [255 & t]
  }

  function a(t) {
    return [255 & t, t >> 8 & 255]
  }

  function u(t) {
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
  }

  function c(t) {
    return n(t, 52, 8)
  }

  function l(t) {
    return n(t, 23, 4)
  }

  function f(t, e, i) {
    x(t[P], e, {
      get: function () {
        return this[i]
      }
    })
  }

  function h(t, e, i, n) {
    var r = k(+i);
    if (r + e > t[z]) throw L(B);
    var s = t[H]._b,
      o = r + t[W],
      a = s.slice(o, o + e);
    return n ? a : a.reverse()
  }

  function d(t, e, i, n, r, s) {
    var o = k(+i);
    if (o + e > t[z]) throw L(B);
    for (var a = t[H]._b, u = o + t[W], c = n(+r), l = 0; l < e; l++) a[u + l] = c[s ? l : e - l - 1]
  }
  var p = i(2),
    v = i(6),
    m = i(31),
    g = i(64),
    _ = i(12),
    b = i(39),
    y = i(3),
    A = i(33),
    w = i(26),
    S = i(8),
    k = i(126),
    T = i(36).f,
    x = i(7).f,
    C = i(67),
    E = i(44),
    P = "prototype",
    B = "Wrong index!",
    F = p.ArrayBuffer,
    M = p.DataView,
    I = p.Math,
    L = p.RangeError,
    R = p.Infinity,
    D = F,
    O = I.abs,
    N = I.pow,
    j = I.floor,
    U = I.log,
    V = I.LN2,
    H = v ? "_b" : "buffer",
    z = v ? "_l" : "byteLength",
    W = v ? "_o" : "byteOffset";
  if (g.ABV) {
    if (!y(function () {
        F(1)
      }) || !y(function () {
        new F(-1)
      }) || y(function () {
        return new F, new F(1.5), new F(NaN), "ArrayBuffer" != F.name
      })) {
      for (var Q, Y = (F = function (t) {
          return A(this, F), new D(k(t))
        })[P] = D[P], G = T(D), q = 0; G.length > q;)(Q = G[q++]) in F || _(F, Q, D[Q]);
      m || (Y.constructor = F)
    }
    var J = new M(new F(2)),
      K = M[P].setInt8;
    J.setInt8(0, 2147483648), J.setInt8(1, 2147483649), !J.getInt8(0) && J.getInt8(1) || b(M[P], {
      setInt8: function (t, e) {
        K.call(this, t, e << 24 >> 24)
      },
      setUint8: function (t, e) {
        K.call(this, t, e << 24 >> 24)
      }
    }, !0)
  } else F = function (t) {
    A(this, F, "ArrayBuffer");
    var e = k(t);
    this._b = C.call(new Array(e), 0), this[z] = e
  }, M = function (t, e, i) {
    A(this, M, "DataView"), A(t, F, "DataView");
    var n = t[z],
      r = w(e);
    if (r < 0 || r > n) throw L("Wrong offset!");
    if (i = void 0 === i ? n - r : S(i), r + i > n) throw L("Wrong length!");
    this[H] = t, this[W] = r, this[z] = i
  }, v && (f(F, "byteLength", "_l"), f(M, "buffer", "_b"), f(M, "byteLength", "_l"), f(M, "byteOffset", "_o")), b(M[P], {
    getInt8: function (t) {
      return h(this, 1, t)[0] << 24 >> 24
    },
    getUint8: function (t) {
      return h(this, 1, t)[0]
    },
    getInt16: function (t) {
      var e = h(this, 2, t, arguments[1]);
      return (e[1] << 8 | e[0]) << 16 >> 16
    },
    getUint16: function (t) {
      var e = h(this, 2, t, arguments[1]);
      return e[1] << 8 | e[0]
    },
    getInt32: function (t) {
      return s(h(this, 4, t, arguments[1]))
    },
    getUint32: function (t) {
      return s(h(this, 4, t, arguments[1])) >>> 0
    },
    getFloat32: function (t) {
      return r(h(this, 4, t, arguments[1]), 23, 4)
    },
    getFloat64: function (t) {
      return r(h(this, 8, t, arguments[1]), 52, 8)
    },
    setInt8: function (t, e) {
      d(this, 1, t, o, e)
    },
    setUint8: function (t, e) {
      d(this, 1, t, o, e)
    },
    setInt16: function (t, e) {
      d(this, 2, t, a, e, arguments[2])
    },
    setUint16: function (t, e) {
      d(this, 2, t, a, e, arguments[2])
    },
    setInt32: function (t, e) {
      d(this, 4, t, u, e, arguments[2])
    },
    setUint32: function (t, e) {
      d(this, 4, t, u, e, arguments[2])
    },
    setFloat32: function (t, e) {
      d(this, 4, t, l, e, arguments[2])
    },
    setFloat64: function (t, e) {
      d(this, 8, t, c, e, arguments[2])
    }
  });
  E(F, "ArrayBuffer"), E(M, "DataView"), _(M[P], g.VIEW, !0), e.ArrayBuffer = F, e.DataView = M
}, function (t, e, i) {
  var n = i(2),
    r = i(20),
    s = i(31),
    o = i(127),
    a = i(7).f;
  t.exports = function (t) {
    var e = r.Symbol || (r.Symbol = s ? {} : n.Symbol || {});
    "_" == t.charAt(0) || t in e || a(e, t, {
      value: o.f(t)
    })
  }
}, function (t, e, i) {
  var n = i(47),
    r = i(5)("iterator"),
    s = i(43);
  t.exports = i(20).getIteratorMethod = function (t) {
    if (void 0 != t) return t[r] || t["@@iterator"] || s[n(t)]
  }
}, function (t, e, i) {
  "use strict";
  var n = i(30),
    r = i(111),
    s = i(43),
    o = i(18);
  t.exports = i(77)(Array, "Array", function (t, e) {
    this._t = o(t), this._i = 0, this._k = e
  }, function () {
    var t = this._t,
      e = this._k,
      i = this._i++;
    return !t || i >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, i) : "values" == e ? r(0, t[i]) : r(0, [i, t[i]])
  }, "values"), s.Arguments = s.Array, n("keys"), n("values"), n("entries")
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(148)),
    s = n(i(11));
  e.default = function (t) {
    function e() {
      function e(t, e) {
        switch (t.codecData = e.codecData, t.type) {
        case "video":
          t.codec = "AVC1";
          break;
        case "audio":
          u(t, e)
        }
      }

      function i(t, e) {
        var i = void 0;
        if (t.length > 1) {
          i = new Uint8Array(e);
          for (var n = 0, r = 0; r < t.length; r++) i.set(t[r].data, n), n += t[r].data.length
        } else i = t[0].data;
        return i
      }

      function n(t, e, i) {
        var n = i.prevAltTs + e.sampleDuration,
          r = i.nextAltTs - n;
        if (r >= 2 * e.sampleDuration) {
          for (var s = Math.floor(r / e.sampleDuration) - 1, o = 1; o <= s; o++) {
            var a = {
              data: i.data,
              ts: i.prevTs + Math.floor(o * e.tsSampleDuration),
              altTs: n,
              altDur: e.sampleDuration,
              offset: 0,
              sap: !0
            };
            t.push(a), n += e.sampleDuration
          }
          L.warn("adding dummy frames", t.length, i.nextAltTs)
        }
        return n
      }

      function o(t, e, i, r, s) {
        var o = [],
          a = "audio" == t.type,
          u = t.lastSample,
          c = r,
          l = !1,
          f = r - u.rawts;
        if (f < 0 || f > 10 * t.timescale ? (L.debug("Incorrect DTS difference (" + f + ") between previous (ts: " + u.rawts + ", offset: " + u.offset + ", sap: " + u.sap + ") and current frame (ts: " + r + ", offset: " + s + ", sap: " + e + ")"), f = t.lastSampleDuration) : 0 == f && (a || u.offset != s || (L.debug("Keep zero duration sample"), l = !0)), r = u.ts + f, a && null !== i && t.lastSilenceSampleTs && r <= t.lastSilenceSampleTs) return L.debug("Ignore real frames after mute", r, t.lastSilenceSampleTs), [];
        f > 0 && (t.lastSampleDuration = f), u.duration = f, a && t.alignBase && (t.prevSample && (n(o, t, {
          prevTs: t.prevSample.ts,
          prevAltTs: t.prevSample.altTs,
          nextAltTs: u.altTs,
          data: t.silence ? t.silence : u.data
        }), t.prevSample = void 0), t.alignBase = void 0), o.push(u);
        var h = 0;
        a && (h = n(o, t, {
          prevTs: u.ts,
          prevAltTs: u.altTs,
          nextAltTs: Math.round(t.samplingRate / t.timescale * r),
          data: t.silence ? t.silence : u.data
        }), u.altDur = t.sampleDuration);
        var d = i;
        if (null === d && a && (d = t.silence, t.lastSilenceSampleTs = r), t.lastSample = {
            data: d,
            ts: r,
            rawts: c,
            altTs: h,
            offset: s,
            sap: e
          }, l || O.length > 0) {
          for (var p = 0; p < o.length; p++) O.push(o[p]);
          l ? o = [] : (o = O, O = [])
        }
        return o
      }

      function a(t) {
        for (var e = void 0, i = 0; i < R.length; i++)
          if (R[i].id == t) {
            e = R[i];
            break
          }
        return void 0 === e && L.error("track ID " + t + " is not found!"), e
      }

      function u(t, e) {
        switch (e.codec) {
        case "MP4A.40.34":
          t.codec = "MP3", c(t);
          break;
        default:
          t.codec = "AAC", l(t)
        }
        t.tsSampleDuration = t.sampleDuration / t.samplingRate * t.timescale
      }

      function c(t) {
        if (t.codecData) {
          var e = [
              [0, 576, 1152, 384],
              [0, 0, 0, 0],
              [0, 576, 1152, 384],
              [0, 1152, 1152, 384]
            ],
            i = [
              [11025, 0, 22050, 44100],
              [12e3, 0, 24e3, 48e3],
              [8e3, 0, 16e3, 32e3],
              [0, 0, 0, 0]
            ],
            n = [
              [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ],
              [
                [0, 8192, 8192, 32768],
                [0, 0, 0, 0],
                [0, 8192, 8192, 32768],
                [0, 32768, 32768, 32768]
              ],
              [
                [0, 16384, 16384, 49152],
                [0, 0, 0, 0],
                [0, 16384, 16384, 49152],
                [0, 40960, 49152, 65536]
              ],
              [
                [0, 24576, 24576, 57344],
                [0, 0, 0, 0],
                [0, 24576, 24576, 57344],
                [0, 49152, 57344, 98304]
              ],
              [
                [0, 32768, 32768, 65536],
                [0, 0, 0, 0],
                [0, 32768, 32768, 65536],
                [0, 57344, 65536, 131072]
              ],
              [
                [0, 40960, 40960, 81920],
                [0, 0, 0, 0],
                [0, 40960, 40960, 81920],
                [0, 65536, 81920, 163840]
              ],
              [
                [0, 49152, 49152, 98304],
                [0, 0, 0, 0],
                [0, 49152, 49152, 98304],
                [0, 81920, 98304, 196608]
              ],
              [
                [0, 57344, 57344, 114688],
                [0, 0, 0, 0],
                [0, 57344, 57344, 114688],
                [0, 98304, 114688, 229376]
              ],
              [
                [0, 65536, 65536, 131072],
                [0, 0, 0, 0],
                [0, 65536, 65536, 131072],
                [0, 114688, 131072, 262144]
              ],
              [
                [0, 81920, 81920, 147456],
                [0, 0, 0, 0],
                [0, 81920, 81920, 147456],
                [0, 131072, 163840, 294912]
              ],
              [
                [0, 98304, 98304, 163840],
                [0, 0, 0, 0],
                [0, 98304, 98304, 163840],
                [0, 163840, 196608, 327680]
              ],
              [
                [0, 114688, 114688, 180224],
                [0, 0, 0, 0],
                [0, 114688, 114688, 180224],
                [0, 196608, 229376, 360448]
              ],
              [
                [0, 131072, 131072, 196608],
                [0, 0, 0, 0],
                [0, 131072, 131072, 196608],
                [0, 229376, 262144, 393216]
              ],
              [
                [0, 147456, 147456, 229376],
                [0, 0, 0, 0],
                [0, 147456, 147456, 229376],
                [0, 262144, 327680, 425984]
              ],
              [
                [0, 163840, 163840, 262144],
                [0, 0, 0, 0],
                [0, 163840, 163840, 262144],
                [0, 327680, 393216, 458752]
              ],
              [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            ],
            r = t.codecData;
          if (255 == (255 & r[0]) && 224 == (224 & r[1])) {
            var s = r[1] >> 3 & 3;
            1 == s && (s = 0);
            var o = r[1] >> 1 & 3;
            if (0 != o) {
              t.sampleDuration = e[s][o];
              var a = r[2] >> 4 & 21;
              t.bitrate = n[a][s][o];
              var u = r[2] >> 2 & 3;
              t.samplingRate = i[u][s];
              var c = r[3] >> 6 & 3;
              t.audioChannels = 3 == c ? 1 : 2;
              var l = void 0,
                f = void 0;
              switch (t.silence = void 0, t.audioChannels) {
              case 2:
                switch (l = [255, 251, null, 100, null, 143, 240, 0, 0, 105, 0, 0, 0, 8, 0, 0, 13, 32, 0, 0, 1, 0, 0, 1, 164, 0, 0, 0, 32, 0, 0, 52, 128, 0, 0, 4], f = l.length, t.samplingRate) {
                case 48e3:
                  l[2] = 148, l[4] = 81, f += 348;
                  break;
                case 44100:
                  l[2] = 146, l[4] = 64, f += 382;
                  break;
                case 32e3:
                  l[2] = 120, l[4] = 57, f += 396;
                  break;
                default:
                  return void L.error("sampling rate " + t.samplingRate + " is not supported")
                }
                break;
              case 1:
                switch (l = [255, 251, null, 196, null, null, 192, 0, 1, 164, 0, 0, 0, 32, 0, 0, 52, 128, 0, 0, 4], f = l.length, t.samplingRate) {
                case 48e3:
                  l[2] = 84, l[4] = 170, l[5] = 3, f += 171;
                  break;
                case 44100:
                  l[2] = 82, l[4] = 161, l[5] = 131, f += 188;
                  break;
                case 32e3:
                  l[2] = 56, l[4] = 158, l[5] = 3, f += 195;
                  break;
                default:
                  return void L.error("sampling rate " + t.samplingRate + " is not supported")
                }
              }
              if (f) {
                t.silence = new Uint8Array(f);
                var h = 0;
                for (h = 0; h < l.length; h++) t.silence[h] = l[h];
                for (h = l.length; h < f; h++) t.silence[h] = 85;
                L.debug("MP3 track codec data", t.samplingRate, t.sampleDuration, t.audioChannels)
              }
            }
          }
        }
      }

      function l(t) {
        if (t.codecData) {
          var e = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
            i = [1024, 960],
            n = t.codecData,
            r = n[0] >> 3,
            s = 0;
          switch (s = 31 == r ? n[1] >> 1 & 15 : (7 & n[0]) << 1 | n[1] >> 7, t.bitrate = 0, 15 == s ? 31 == r ? (t.samplingRate = ((1 & n[1]) << 7 | n[2] >> 1) << 16 | ((1 & n[2]) << 7 | n[3] >> 1) << 8 | (1 & n[3]) << 7 | n[4] >> 1, t.audioChannels = (1 & n[4]) << 3 | n[5] >> 5, t.sampleDuration = i[(16 & n[5]) >> 4]) : (t.samplingRate = ((127 & n[1]) << 1 | n[2] >> 7) << 16 | ((127 & n[2]) << 1 | n[3] >> 7) << 8 | (127 & n[3]) << 1 | n[4] >> 7, t.audioChannels = (120 & n[4]) >> 3, t.sampleDuration = i[(4 & n[4]) >> 2]) : (t.samplingRate = e[s], 31 == r ? (t.audioChannels = (1 & n[1]) << 3 | n[2] >> 5, t.sampleDuration = i[(16 & n[2]) >> 4]) : (t.audioChannels = (120 & n[1]) >> 3, t.sampleDuration = i[(4 & n[1]) >> 2])), t.audioChannels) {
          case 8:
            t.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 35, 16, 4, 96, 140, 4, 162, 0, 140, 17, 129, 132, 96, 0, 28]);
            break;
          case 6:
            t.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 35, 16, 4, 96, 140, 12, 35, 0, 0, 224]);
            break;
          case 5:
            t.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 35, 16, 4, 96, 140, 28]);
            break;
          case 4:
            t.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 3, 24, 32, 7]);
            break;
          case 3:
            t.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 224]);
            break;
          case 2:
            t.silence = new Uint8Array([33, 16, 4, 96, 140, 28]);
            break;
          default:
            t.silence = new Uint8Array([1, 24, 32, 7])
          }
          L.debug("AAC track codec data, AOT: " + r + " sRate: " + t.samplingRate + " sPerFrame: " + t.sampleDuration + " chCount: " + t.audioChannels)
        }
      }

      function f(t) {
        var e = r.default.createBox("ftyp", t);
        return e.major_brand = "isom", e.minor_version = 1, e.compatible_brands = [], e.compatible_brands[0] = "isom", e.compatible_brands[1] = "avc1", e.compatible_brands[2] = "dash", e
      }

      function h(t) {
        var e = r.default.createBox("styp", t);
        return e.major_brand = "msdh", e.minor_version = 0, e.compatible_brands = [], e.compatible_brands[0] = "msdh", e.compatible_brands[1] = "msix", e
      }

      function d(t) {
        var e = r.default.createBox("moov", t);
        m(e);
        var i = r.default.createBox("mvex", e);
        k(i);
        for (var n = 0; n < R.length; n++) {
          var s = R[n],
            o = r.default.createBox("trak", e);
          g(s, o);
          var a = r.default.createBox("mdia", o);
          b(s, a), y(s, a);
          var u = r.default.createBox("minf", a);
          switch (s.type) {
          case "video":
            A(u);
            break;
          case "audio":
            w(u)
          }
          S(r.default.createBox("dinf", u));
          var c = r.default.createBox("stbl", u);
          r.default.createFullBox("stts", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], r.default.createFullBox("ctts", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], r.default.createFullBox("stsc", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], r.default.createFullBox("stco", c)._data = [0, 0, 0, 0, 0, 0, 0, 0], r.default.createFullBox("stsz", c)._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], x(s, c), T(s, i)
        }
        return e
      }

      function p(t, e, i) {
        var n = r.default.createBox("sidx", t);
        n.flags = 0, n.version = 1, n.reference_ID = e.id, n.timescale = _(e), n.first_offset = 0, n.reserved = 0, n.earliest_presentation_time = "audio" == e.type ? i[0].altTs : i[0].ts + i[0].offset, n.reference_count = 1;
        for (var s = !1, o = 0, a = 0, u = 0, c = 0, l = 0; l < i.length; l++) o += i[l].data.byteLength, !s && i[l].sap && (s = !0, c = a), a += i[l].duration, u += i[l].altDur;
        return n.references = [{
          reference_type: 0,
          referenced_size: o,
          subsegment_duration: "audio" == e.type ? u : a,
          starts_with_SAP: i[0].sap ? 1 : 0,
          SAP_type: s ? 1 : 0,
          SAP_delta_time: c
        }], n
      }

      function v(t, e, i) {
        var n = r.default.createBox("moof", t);
        r.default.createFullBox("mfhd", n).sequence_number = e.curSeqNumber++;
        var s = r.default.createBox("traf", n),
          o = r.default.createFullBox("tfhd", s);
        o.track_ID = e.id, o.flags = 131072;
        var a = r.default.createFullBox("tfdt", s, o);
        a.version = 1, a.flags = 0;
        var u = r.default.createFullBox("trun", s, a);
        if (u.sample_count = i.length, u.samples = [], "audio" == e.type) {
          a.baseMediaDecodeTime = i[0].altTs, u.flags = 769;
          for (var c = 0; c < i.length; c++) u.samples.push({
            sample_duration: i[c].altDur,
            sample_size: i[c].data.byteLength
          })
        } else {
          a.baseMediaDecodeTime = i[0].ts, u.flags = 2821, u.first_sample_flags = 0;
          for (var l = 0; l < i.length; l++) u.samples.push({
            sample_duration: i[l].duration,
            sample_size: i[l].data.byteLength,
            sample_composition_time_offset: i[l].offset
          })
        }
        return u.data_offset = n.getLength() + 8, n
      }

      function m(t) {
        var e = r.default.createFullBox("mvhd", t);
        return e.creation_time = 0, e.modification_time = 0, e.timescale = 1e3, e.duration = 0, e.rate = 1, e.volume = 1, e.reserved1 = 0, e.reserved2 = [0, 0], e.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], e.pre_defined = [0, 0, 0, 0, 0, 0], e.next_track_ID = D, e
      }

      function g(t, e) {
        var i = r.default.createFullBox("tkhd", e);
        switch (i.flags = 7, i.creation_time = 0, i.modification_time = 0, i.track_ID = t.id, i.reserved1 = 0, i.duration = 0, i.reserved2 = [0, 0], i.layer = 0, i.alternate_group = 0, i.reserved3 = 0, i.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], t.type) {
        case "video":
          i.volume = 0, i.width = t.width, i.height = t.height, i.flags |= 8;
          break;
        case "audio":
          i.volume = 1, i.width = 0, i.height = 0
        }
        return i
      }

      function _(t) {
        return "audio" == t.type ? t.samplingRate : t.timescale
      }

      function b(t, e) {
        var i = r.default.createFullBox("mdhd", e);
        return i.creation_time = 0, i.modification_time = 0, i.duration = 0, i.language = "und", i.pre_defined = 0, i.timescale = _(t), i
      }

      function y(t, e) {
        var i = r.default.createFullBox("hdlr", e);
        switch (i.pre_defined = 0, t.type) {
        case "video":
          i.handler_type = "vide", i.name = "VideoHandler";
          break;
        case "audio":
          i.handler_type = "soun", i.name = "AudioHandler"
        }
        return i.reserved = [0, 0, 0], i
      }

      function A(t) {
        var e = r.default.createFullBox("vmhd", t);
        return e.flags = 1, e.graphicsmode = 0, e.opcolor = [0, 0, 0], e
      }

      function w(t) {
        var e = r.default.createFullBox("smhd", t);
        return e.balance = 0, e.reserved = 0, e
      }

      function S(t) {
        var e = r.default.createFullBox("dref", t);
        e.entry_count = 1, e.entries = [];
        var i = r.default.createFullBox("url ", e, -1);
        return i.location = "", i.flags = 1, e.entries.push(i), e
      }

      function k(t) {
        var e = r.default.createFullBox("mehd", t);
        return e.fragment_duration = 0, e
      }

      function T(t, e) {
        var i = r.default.createFullBox("trex", e);
        return i.track_ID = t.id, i.default_sample_description_index = 1, i.default_sample_duration = 0, i.default_sample_size = 0, i.default_sample_flags = 65536, i
      }

      function x(t, e) {
        var i = r.default.createFullBox("stsd", e);
        return i.entry_count = 1, i.entries = [], i.entries.push(C(t, i)), i
      }

      function C(t, e) {
        switch (t.codec) {
        case "AVC1":
          return t.configName = "avcC", t.compressorname = "AVC Coding", E(t, e);
        case "AAC":
          return F(t, e);
        case "MP3":
          return B(t, e);
        default:
          L.error("Unsupported codec: ", t.codec)
        }
      }

      function E(t, e) {
        var i = r.default.createBox("avc1", e, -1);
        i.reserved1 = [0, 0, 0, 0, 0, 0], i.data_reference_index = 1, i.pre_defined1 = 0, i.reserved2 = 0, i.pre_defined2 = [0, 0, 0], i.width = t.width, i.height = t.height, i.horizresolution = 72, i.vertresolution = 72, i.reserved3 = 0, i.frame_count = 1, i.compressorname = [t.compressorname.length];
        for (var n = 0; n < 31; n++) i.compressorname[n + 1] = n < t.compressorname.length ? 127 & t.compressorname.charCodeAt(n) : 0;
        return i.depth = 24, i.pre_defined3 = 65535, i.config = P(t), i
      }

      function P(t) {
        if (t.codecData) {
          var e = t.codecData.byteLength + 8,
            i = new Uint8Array(e),
            n = 0;
          i[n++] = (4278190080 & e) >> 24, i[n++] = (16711680 & e) >> 16, i[n++] = (65280 & e) >> 8, i[n++] = 255 & e;
          for (var r = 0; r < t.configName.length; r++) i[n++] = 127 & t.configName.charCodeAt(r);
          return i.set(t.codecData, n), i
        }
        L.error("No codec data specified!")
      }

      function B(t, e) {
        var i = r.default.createBox(".mp3", e, -1);
        i.reserved1 = [0, 0, 0, 0, 0, 0], i.data_reference_index = 1, i.reserved2 = [0, 0], i.channelcount = t.audioChannels, i.samplesize = 16, i.pre_defined = 0, i.reserved_3 = 0, i.samplerate = t.samplingRate << 16, i.entry_count = 1, i.entries = [];
        var n = r.default.createBox("btrt", i, -1);
        return n.bufferSizeDB = 4294967295, n.maxBitrate = t.bitrate, n.avgBitrate = t.bitrate, i.entries.push(n), i
      }

      function F(t, e) {
        var i = r.default.createBox("mp4a", e, -1);
        return i.reserved1 = [0, 0, 0, 0, 0, 0], i.data_reference_index = 1, i.reserved2 = [0, 0], i.channelcount = t.audioChannels, i.samplesize = 16, i.pre_defined = 0, i.reserved_3 = 0, i.samplerate = t.samplingRate << 16, i.esds = "AAC" == t.codec ? I(t) : M(t), i
      }

      function M(t) {
        var e = new Uint8Array(35),
          i = 0;
        return e[i++] = 0, e[i++] = 0, e[i++] = 0, e[i++] = 35, e.set([101, 115, 100, 115], i), i += 4, e.set([0, 0, 0, 0], i), i += 4, e[i++] = 3, e[i++] = 21, e[i++] = (65280 & t.id) >> 8, e[i++] = 255 & t.id, e[i++] = 0, e[i++] = 4, e[i++] = 13, e[i++] = 107, e[i] = 20, e[i] |= 0, e[i++] |= 1, e[i++] = 255, e[i++] = 255, e[i++] = 255, e[i++] = (4278190080 & t.bitrate) >> 24, e[i++] = (16711680 & t.bitrate) >> 16, e[i++] = (65280 & t.bitrate) >> 8, e[i++] = 255 & t.bitrate, e[i++] = (4278190080 & t.bitrate) >> 24, e[i++] = (16711680 & t.bitrate) >> 16, e[i++] = (65280 & t.bitrate) >> 8, e[i++] = 255 & t.bitrate, e[i++] = 6, e[i++] = 1, e[i] = 2, e
      }

      function I(t) {
        var e = 37 + t.codecData.byteLength,
          i = new Uint8Array(e),
          n = 0;
        return i[n++] = (4278190080 & e) >> 24, i[n++] = (16711680 & e) >> 16, i[n++] = (65280 & e) >> 8, i[n++] = 255 & e, i.set([101, 115, 100, 115], n), n += 4, i.set([0, 0, 0, 0], n), n += 4, i[n++] = 3, i[n++] = 23 + t.codecData.byteLength, i[n++] = (65280 & t.id) >> 8, i[n++] = 255 & t.id, i[n++] = 0, i[n++] = 4, i[n++] = 15 + t.codecData.byteLength, i[n++] = 64, i[n] = 20, i[n] |= 0, i[n++] |= 1, i[n++] = 255, i[n++] = 255, i[n++] = 255, i.set([0, 0, 0, 0, 0, 0, 0, 0], n), n += 8, i[n++] = 5, i[n++] = t.codecData.byteLength, i.set(t.codecData, n), n += t.codecData.byteLength, i[n++] = 6, i[n++] = 1, i[n] = 2, i
      }
      var L = s.default.create(t, "BoxComposer"),
        R = [],
        D = 1,
        O = [];
      this.init = function () {
        R = [], D = 1, O = []
      }, this.addTrack = function (t, i) {
        var n = {
          id: D,
          type: t,
          curSeqNumber: 0,
          lastSampleDuration: 0,
          lastSilenceSampleTs: 0
        };
        return L.setPrefix("BoxComposer " + t), i && ("video" == t && (n.width = "width" in i ? i.width : 0, n.height = "height" in i ? i.height : 0), n.timescale = "timescale" in i ? i.timescale : 1e3, "codecData" in i && e(n, i)), R.push(n), D++, n
      }, this.setTrackParams = function (t, i) {
        var n = a(t);
        return n && ("width" in i && (n.width = i.width), "height" in i && (n.height = i.height), "timescale" in i && (n.timescale = i.timescale), "codecData" in i && (O = [], n.lastSample = void 0, e(n, i)), "sequenceNumber" in i && (n.curSeqNumber = i.sequenceNumber), "alignBase" in i && (n.alignBase = i.alignBase), L.debug("setTrackParams:", t, i)), n
      }, this.getTrackSampleDuration = function (t, e) {
        var i = void 0,
          n = a(t);
        return n && (i = n.tsSampleDuration), i
      }, this.setBaseSample = function (t, e, i, n) {
        var r = a(t);
        if (r) {
          L.debug("setBaseSample: ", i, n);
          var s = e;
          "audio" == r.type && (r.lastSilenceSampleTs = 0, null === s && (s = r.silence, r.lastSilenceSampleTs = i)), r.lastSample = {
            data: s,
            ts: i,
            rawts: i,
            altTs: Math.round(r.samplingRate / r.timescale * i),
            offset: n,
            sap: !0,
            altDur: r.sampleDuration
          }
        } else L.error("setBaseSample: track " + t + " not found!!!")
      }, this.getRealTs = function (t, e) {
        var i = e,
          n = a(t);
        return n ? n.lastSample && Math.abs(e - n.lastSample.ts) > 10 * n.timescale && (i = e - n.lastSample.rawts + n.lastSample.ts) : L.error("getRealTs: track " + t + " not found"), i
      }, this.initSegment = function () {
        var t = r.default.createFile();
        return f(t), d(t), t.write()
      }, this.mediaSegment = function (t, e, n) {
        var s = void 0,
          u = r.default.createFile(),
          c = a(t),
          l = [],
          f = [];
        if (c) {
          h(u);
          var d = 0,
            m = [];
          for (d = 0; d < e.length; d++) {
            var g = e[d];
            if (c.lastSample)
              for (var _ = o(c, g.sap, g.data, g.ts, g.offset), b = 0; b < _.length; b++) m.push(_[b]), l.push(_[b].ts), f.push(_[b].sap);
            else L.error("mediaSegment is executed while no base sample is set. Compelled setting of base sample: ", g.sap, g.ts, g.offset), g.sap && this.setBaseSample(t, g.data, g.ts, g.offset)
          }
          if (n && void 0 !== c.lastSample) {
            for (var y = 0; y < O.length; y++) m.push(O[y]), l.push(O[y].ts), f.push(O[y].sap);
            O = [], c.lastSample.duration = c.lastSampleDuration, m.push(c.lastSample), L.debug("Push last sample, ts = " + c.lastSample.ts + ", duration = " + c.lastSample.duration), l.push(c.lastSample.ts), f.push(c.lastSample.sap), c.alignBase && (c.prevSample = {
              ts: c.lastSample.ts,
              altTs: c.lastSample.altTs
            }), c.lastSample = void 0
          }
          if (m.length > 0) {
            var A = p(u, c, m),
              w = v(u, c, m);
            r.default.createBox("mdat", u).data = i(m, A.references[0].referenced_size), A.references[0].referenced_size += 8 + w.getLength(), s = {
              ts: l,
              sap: f,
              sn: c ? c.curSeqNumber - 1 : void 0,
              data: u.write()
            }
          }
        }
        return s
      }
    }
    return {
      create: function () {
        return new e
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    s = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(11));
  e.default = function (t) {
    var e = s.default.create(t, "RingBuffer"),
      i = function () {
        function t(i) {
          n(this, t), i <= 0 && e.error("invalid size in constructor " + i), this.buffer = [], this.size = i, this.start = 0
        }
        return r(t, [{
          key: "push",
          value: function (t) {
            this.buffer.length == this.size ? (this.buffer[this.start++] = t, this.start == this.size && (this.start = 0)) : this.buffer.push(t)
          }
        }, {
          key: "get",
          value: function (t) {
            var i = void 0;
            if (t >= 0 && t < this.buffer.length) {
              var n = this.start + t;
              n >= this.buffer.length && (n -= this.buffer.length), i = this.buffer[n]
            } else if (t < 0 && -1 * t <= this.buffer.length) {
              var r = this.start + t;
              r < 0 && (r += this.buffer.length), i = this.buffer[r]
            } else e.error("attempt to read from invalid index " + t);
            return i
          }
        }, {
          key: "join",
          value: function (t) {
            var e = "";
            this.buffer.length > 0 && (e += this.buffer[this.start]);
            for (var i = 1; i < this.buffer.length; i++) {
              var n = this.start + i;
              n >= this.buffer.length && (n -= this.buffer.length), e += t + this.buffer[n]
            }
            return e
          }
        }, {
          key: "clear",
          value: function () {
            this.buffer = [], this.start = 0
          }
        }, {
          key: "drop",
          value: function () {
            this.buffer = [], this.size = 0, this.start = 0
          }
        }, {
          key: "length",
          value: function () {
            return this.buffer.length
          }
        }]), t
      }();
    return {
      create: function (t) {
        return new i(t)
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TRANSITION_MODE = e.default = void 0;
  var r = n(i(93)),
    s = n(i(146)),
    o = n(i(11)),
    a = n(i(66)),
    u = {
      OPEN: 0,
      BUFFER: 1,
      ACTIVE: 2,
      BACKUP: 3,
      CLOSED: 4
    },
    c = {
      ABRUPT: 0,
      SMOOTH: 1
    };
  e.default = function (t) {
    function e(e, r, s, l, f, h, d, p, v) {
      function m(t) {
        t.data && (dt = t.data, O.setTrackParams(R, {
          codecData: t.data
        }), N.pushInit(O.initSegment()))
      }

      function g(t, e) {
        var i = !1;
        if ("mp4" == D)
          if (e)
            if (i = !0, t) {
              var n = e.byteLength;
              if (n == t.byteLength) {
                i = !1;
                for (var r = 0; r < n; r++)
                  if (e[r] !== t[r]) {
                    i = !0;
                    break
                  }
              }
            } else I.debug("isInitSegmentNew: current init segment data is empty"), i = !0;
        else I.error("isInitSegmentNew: received empty codecData");
        return i
      }

      function _() {
        return Y + 1
      }

      function b(t) {
        z = U = t
      }

      function y() {
        Y = 0;
        var t = 0,
          e = {};
        for (t = 1; t < W.length; t++) {
          var i = W[t].ts - W[t - 1].ts;
          e[i] = e[i] > 0 ? e[i] + 1 : 1
        }
        for (t in e)
          if (e[t] > 0) {
            var n = parseInt(t);
            n > 0 && (Y = n)
          }
        I.debug("max sample duration calculated: ", Y)
      }

      function A() {
        Z = void 0, $ = void 0, tt = void 0, et = void 0
      }

      function w() {
        for (var t = 0; t < W.length; t++) {
          var e = W[t];
          E(e.sap, e.data, e.ts, e.offset)
        }
        W = [], Q = [], J = !1
      }

      function S(t, e) {
        I.debug("flush all", t);
        var i = 0,
          n = [];
        for (i = 0; i < ot.length; i++)(void 0 === t || ot[i].ts < t) && n.push(ot[i]);
        for (ot = [], i = 0; i < W.length; i++)(void 0 === t || W[i].ts < t) && n.push(W[i]);
        if (W = [], Q = [], q) {
          var r = n.length;
          for (i = 0; i < r; i++) k(n[i], t);
          e || k(null, t)
        }
        N.filterOut(t)
      }

      function k(t, e) {
        var i = t ? O.mediaSegment(R, [t]) : O.mediaSegment(R, [], !0);
        i && (void 0 == e || i.ts[0] < e) && (N.pushSegment(i.data, i.ts, i.sap), F(i.ts[0], i.sn, i.sap[0]))
      }

      function T(t, e) {
        var i = !1,
          n = rt.newSapTimes.length;
        if (c.ABRUPT == rt.mode) i = !0;
        else if (n > 0)
          if (X) e && (t >= rt.newSapTimes[0] || t >= rt.newSapTimes[n - 1]) && (i = !0);
          else if (t >= rt.newSapTimes[0] + z * l / 1e3 * 2) I.debug("Cancel current stream, because current timestamp is twice ahead possible buffer of new stream", t, rt.newSapTimes[0]), i = !0;
        else
          for (var r = rt.newSapTimes.length - 1; r >= 0; r--) {
            if (Math.abs(t - rt.newSapTimes[r]) < _()) {
              I.debug("Cancel current stream. Timestamp " + t + " is near new stream key frame " + rt.newSapTimes[r]), i = !0;
              break
            }
            if (t > rt.newSapTimes[r]) break
          }
        return i
      }

      function x(t, e) {
        var i = !1,
          n = z * l / 1e3,
          r = rt.curSapTimes.length,
          s = rt.newSapTimes.length,
          o = t - rt.startupBuffer[0].ts;
        if (X && c.ABRUPT != rt.mode) {
          if (r > 0 && o >= n)
            for (var a = 0, u = 0; u < r; u++)
              if (!(rt.curSapTimes[u] < rt.newSapTimes[a])) {
                for (var f = a; f < s && (a = f, !(rt.newSapTimes[f] > rt.curSapTimes[u])); f++) rt.newSapTimes[f] == rt.curSapTimes[u] && (I.debug("Switch to new stream because of SAP alignment"), i = !0);
                if (i) break
              }!i && r >= 1 && s >= 2 && (rt.newSapTimes[s - 1] > rt.curSapTimes[0] || rt.newSapTimes[s - 1] >= rt.curSapTimes[r - 1]) && (I.debug("Switch to new stream SAP alignment does not work!"), i = !0)
        } else if (o >= 2 * n && t >= rt.curStreamLastBufferedTs) I.debug("Switch to new stream because transition buffer is twice filled"), i = !0;
        else if (o >= n)
          if (rt.curStreamCancelled && t >= rt.curStreamLastBufferedTs) I.debug("Switch to new stream because buffer is filled and current stream is cancelled"), i = !0;
          else {
            for (var h = rt.newSapTimes.length - 1; h >= 0; h--) {
              if (Math.abs(rt.curStreamLastBufferedTs - rt.newSapTimes[h]) < _()) {
                I.debug("Switch to new stream, because new key frame " + rt.newSapTimes[h] + " is near to current latest timestamp " + rt.curStreamLastBufferedTs), i = !0;
                break
              }
              if (rt.curStreamLastBufferedTs > rt.newSapTimes[h]) break
            }!i && t + 2 * n < rt.curStreamLastBufferedTs && o >= 10 * l && (I.error("Error: new stream is " + (rt.curStreamLastBufferedTs - t) / l + " seconds behind previous stream. Halting."), i = !0)
          }
        return i
      }

      function C(t) {
        W.length >= 2 && void 0 !== ct && void 0 !== R && (j = u.BUFFER, ct(t, W[0].ts / l), I.debug("process open state, base ts=" + W[0].ts))
      }

      function E(t, e, i, n) {
        if (q) B(t, e, i, n);
        else if (t) {
          if (ht && u.CLOSED !== j) {
            var r = {};
            dt && (r.codecData = dt), O.setTrackParams(R, r), N.pushInit(O.initSegment()), ht = !1
          }
          P(e, i, n)
        }
      }

      function P(t, e, i) {
        O.setBaseSample(R, t, e, i), I.debug("process first frame", Z, $, e), Z = void 0, tt = void 0, $ = e, q = !0
      }

      function B(t, e, i, n) {
        var r = void 0;
        if (st) {
          if (M(ot, e, i, n, t), ot[ot.length - 1].ts - ot[0].ts >= z * l / 1e3) {
            var s = ot.splice(0, 1);
            r = {
              data: s[0].data,
              ts: s[0].ts,
              offset: s[0].offset,
              sap: s[0].sap
            }
          }
        } else r = {
          data: e,
          ts: i,
          offset: n,
          sap: t
        };
        $ = i, r && k(r)
      }

      function F(t, e, i) {
        Z = t, it = e, i && (tt = t)
      }

      function M(t, e, i, n, r) {
        t.push({
          data: e,
          ts: i,
          offset: n,
          sap: r
        })
      }
      var I = o.default.create(t, "Track " + r),
        L = e % parseInt("F0", 16),
        R = void 0,
        D = "vp8" == s || "vp9" == s ? "webm" : "mp4",
        O = "webm" == D ? n.create() : i.create(),
        N = void 0,
        j = u.OPEN,
        U = d.buffering,
        V = U * l / 1e3,
        H = U >= 1e3 ? .2 : U / 5e3,
        z = d.buffering,
        W = [],
        Q = [],
        Y = void 0,
        G = void 0,
        q = !1,
        J = !1,
        K = 0,
        X = !!d.sapAlignment,
        Z = void 0,
        $ = void 0,
        tt = void 0,
        et = void 0,
        it = void 0,
        nt = !1,
        rt = {},
        st = !1,
        ot = [],
        at = void 0,
        ut = void 0,
        ct = void 0,
        lt = void 0,
        ft = void 0,
        ht = !1,
        dt = void 0;
      v.add(L, r, l), p.setLowBufferBorder(H), this.attachToMSE = function () {
        (N = p.createSourceBuffer(r, s, l, f)).removeAll()
      }, this.id = function () {
        return L
      }, this.timescale = function () {
        return l
      }, this.getBufferedStart = function () {
        var t = void 0;
        return W.length > 0 && (t = W[0].ts), t
      }, this.inTransition = function (t) {
        return void 0 !== t && (nt = t, rt = {}), nt
      }, this.setTransitionParams = function (t) {
        (rt = t).container = "vp8" == rt.codec || "vp9" == rt.codec ? "webm" : "mp4"
      }, this.isSupported = function () {
        var t = p.isCodecSupported(r, s);
        return t || I.error("codec is not supported: ", s), t
      }, this.isTransitionSupported = function () {
        var t = !1;
        return rt && rt.container == D && (t = p.isCodecSupported(r, rt.codec)), t || I.error("transition is not supported: ", s), t
      }, this.startTransition = function (t) {
        rt.mode = void 0 !== t ? t : c.SMOOTH, rt.initSegment = void 0, rt.startupBuffer = [], rt.initDataBuffer = [], rt.curStreamCancelled = !1, rt.newSapTimes = [], rt.curSapTimes = [], st = !0, v.add(rt.id, r, l), p.transitOn(), I.debug("transit started", rt.id)
      }, this.getStreamName = function () {
        return h
      }, this.getTransitionStreamName = function () {
        return rt.name
      }, this.transitionStreamId = function () {
        return rt.id
      }, this.type = function () {
        return r
      }, this.latency = function (t) {
        var e = void 0,
          i = v.getMetrics(L);
        return i && (e = new Date / 1e3 - t - i.latencySubt), e
      }, this.isVideo = function () {
        return "video" == r
      }, this.isAudio = function () {
        return "audio" == r
      }, this.isActual = function () {
        return u.CLOSED != j
      }, this.isInited = function () {
        return void 0 !== R
      }, this.isTransitionInited = function () {
        return void 0 !== rt.cTrackId
      }, this.isOpen = function () {
        return u.OPEN == j
      }, this.isBuffering = function () {
        return u.BUFFER == j
      }, this.isBackingUp = function () {
        return u.BACKUP == j
      }, this.sapOffset = function () {
        var t = 4e3 * ($ - tt) / l;
        return isNaN(t) ? 0 : t
      }, this.reset = function () {
        I.debug("reset " + h), j = u.OPEN, N.removeAll(), O.init(), R = void 0, W = [], Q = [], ot = [], Y = void 0, q = !1, J = !1, G = void 0, nt = void 0, K = 0, v.remove(L), st && (L = rt.id, d = rt.streamOptions, h = rt.name), v.add(L, r, l), st = !1, rt = {}, at = void 0, A(), b(d.buffering ? d.buffering : 1e3), ht = !1, dt = void 0
      }, this.close = function () {
        j = u.CLOSED, N.closed = !0, O = void 0, W = [], Q = [], v.remove(L), void 0 !== rt.id && v.remove(rt.id)
      }, this.backup = function () {
        var t = void 0;
        return N.closed = !0, this.isTransitionInited() ? (I.debug("backup track, transition is inited"), rt.curStreamCancelled || (lt(this), rt.curStreamCancelled = !0), at = {
          bufferLength: N.getBufferingLength()
        }, this.completeTransition(), W.length > 0 && (t = W[0].ts / l)) : (at = N.getSegments(), I.debug("backup track", at.segments.length, at.start), at.init && at.segments && at.segments.length > at.start && (j = u.BACKUP, t = at.segments[at.start].ts / l, ct(this, t))), t
      }, this.recover = function () {
        if (at)
          if (j = u.ACTIVE, at.init) {
            I.debug("recover track");
            var t = 0,
              e = 0,
              i = at.segments.length;
            for (t = at.start; t < i; t++)
              if (at.segments[t].init) at.init = at.segments[t].data;
              else {
                if (!(at.segments[t].ts <= G)) break;
                at.segments[t].sap && (e = t)
              }
            for (N.pushInit(at.init), t = e; t < i; t++) {
              var n = at.segments[t];
              n.init ? N.pushInit(n.data) : N.pushSegment(n.data, [n.ts], [n.sap])
            }(i - e - 1 > 0 || W.length > 0) && (I.debug("recover sapSet = true", i, e, W.length), q = !0), S(void 0, !0)
          } else void 0 !== at.bufferLength && (I.debug("recover track from transition"), p.transitOn(), N.setBufferingLength(at.bufferLength), this.applyTransition(!0))
      }, this.populateInitDataBuffer = function (t) {
        Q.push({
          idx: W.length,
          data: t
        }), I.debug("Recover populateInitDataBuffer", t.byteLength)
      }, this.populateStartupBuffer = function (t, e, i, n) {
        M(W, e, i, n, t), $ = i, I.debug("Recover populateStartupBuffer", t, e.byteLength, i, n)
      }, this.isRecoverable = function () {
        return at && (void 0 !== at.init || void 0 !== at.bufferLength)
      }, this.flush = function () {
        S()
      }, this.buffer = function () {
        j = u.BUFFER, I.debug("buffering...")
      }, this.setBufferDelay = function () {
        J = !0
      }, this.activate = function () {
        u.BUFFER === j && (w(), j = u.ACTIVE, ut())
      }, this.bufferStatus = function (e) {
        var i = {
          lvl: void 0,
          low: !1
        };
        if (u.ACTIVE == j) {
          if (i.lvl = 0, $) {
            var n = O.getRealTs(R, $);
            i.lvl = n / l - e
          }
          p.setCurrentBufferLevel(r, i.lvl), a.default.display(t, r + "-buffer", i.lvl.toFixed(4)), ht || (i.lvl < H && (I.debug("bufferStatus low buffer ", e, $), v.reportLowBuffer(L), i.low = !0), v.reportBufLevel(L, i.lvl), i.lvl < 0 && (i.lvl = 0))
        }
        return i
      }, this.updateBufferedState = function (e, i) {
        if (u.BUFFER == j) {
          var n = 0,
            s = 0;
          if (et) {
            var o = O.getRealTs(R, et) / l;
            n = o - i, s = o - e
          }
          p.setCurrentBufferLevel(r, n), a.default.display(t, r + "-buffer", n.toFixed(4)), I.debug("updateBufferedState: buf lvl " + s + ", real buf lvl " + n), ht || J || (s < H && (I.debug("updateBufferedState: low buffer"), v.reportLowBuffer(L)), v.reportBufLevel(L, s))
        }
      }, this.setBaseDecodeTime = function (t) {
        G = Math.round(t * l)
      }, this.onBaseDecodeTimeReady = function (t) {
        ct = t
      }, this.onSourceReady = function (t) {
        ut = t
      }, this.onCancelStream = function (t) {
        lt = t
      }, this.onTransitionCompleted = function (t) {
        ft = t
      }, this.initPresentation = function (t) {
        var e = {
          timescale: l
        };
        "mp4" == D && (e.codecData = t, dt = t), e.codec = s.toUpperCase(), "video" == r && (e.width = d.width, e.height = d.height), R = O.addTrack(r, e).id, N.pushInit(O.initSegment()), I.debug("init segment pushed")
      }, this.isInitSegmentNew = function (t) {
        return "audio" == r || g(dt, t)
      }, this.isTransitionInitNew = function (t) {
        return "audio" == r || g(rt.initSegmentData, t)
      }, this.processInitSegment = function (t) {
        "audio" == r && O.setTrackParams(R, {
          alignBase: !0
        }), S(), q = !1, ht = !0, dt = "mp4" == D ? t : void 0, I.debug("new init segment processed")
      }, this.initTransition = function (t) {
        var e = {
          timescale: l
        };
        "webm" == rt.container ? (rt.composer = n.create(), e.codec = rt.codec.toUpperCase()) : (rt.composer = i.create(), rt.initSegmentData = t, e.codecData = t), "video" == r && (e.width = rt.streamOptions.width, e.height = rt.streamOptions.height), rt.cTrackId = rt.composer.addTrack(r, e).id, rt.initSegment = rt.composer.initSegment(), rt.initDataBuffer = [], I.debug("transit stream init segment pushed")
      }, this.processTransitionInitSegment = function (t) {
        rt.initDataBuffer.push({
          idx: rt.startupBuffer.length,
          data: t
        })
      }, this.processMute = function (t, e) {
        if (void 0 !== R) {
          var i = void 0;
          switch (j) {
          case u.OPEN:
          case u.BUFFER:
            i = 0 == W.length ? void 0 !== (i = e.getBufferedStart()) ? l / e.timescale() * i : void 0 !== $ ? $ : l / e.timescale() * t - V : W[W.length - 1].ts;
            break;
          case u.ACTIVE:
            i = $;
            break;
          default:
            I.error("processMute unexpected track state", j)
          }
          if (void 0 !== i) {
            var n = l / e.timescale() * t,
              r = n - i;
            if (r >= V / 2) {
              r > 2 * V && (n = i + (r = 2 * V)), n -= V / 10;
              var s = O.getTrackSampleDuration(R),
                o = i + s;
              for (I.debug("processMute filling gap", i, n); o <= n;) this.processFrame(!0, null, Math.floor(o), 0), o += s
            }
          }
        }
      }, this.processFrame = function (t, e, i, n) {
        var r = {
          done: !0
        };
        if (et = i, st) {
          if (rt.curStreamCancelled) return r;
          if (I.debug("processFrame transition, current frame ts=" + i + ", offset=" + n + ", sap=" + t), t && rt.curSapTimes.push(i), rt.curStreamLastBufferedTs = i, T(i, t)) return I.debug("processFrame cancel current rendition", rt.curStreamLastBufferedTs, t), lt(this), rt.curStreamCancelled = !0, M(W, e, i, n, t), r
        }
        switch (j) {
        case u.OPEN:
          (W.length > 0 || t) && (M(W, e, i, n, t), C(this));
          break;
        case u.BUFFER:
          var s = !1;
          M(W, e, i, n, t);
          var o = W.length;
          if (void 0 === Y) {
            if (void 0 !== G && o > 3) {
              var a = W[o - 1],
                c = a.ts - G - V;
              if (c >= 0) {
                I.debug("finished buffering, have " + o + " samples"), y(), p.startLogging(N.stream_id), N.setBufferingLength(o), q = !1;
                for (var l = 0, f = 0; f < o && W[f].ts <= G; f++) W[f].sap && (l = f);
                I.debug("base decode time:", G), I.debug("1 ts last ts", W[0].ts, W[0].sap, W[o - 1].ts), I.debug("buffer size: " + o + " first sap: " + l);
                var h = void 0,
                  d = 0;
                for (d = 0; d < Q.length && Q[d].idx <= l; d++) h = Q.shift(), d--;
                for (h && m(h), d = l; d < W.length; d++) {
                  Q.length > 0 && d == Q[0].idx && m(Q.shift());
                  var v = W[d];
                  E(v.sap, v.data, v.ts, v.offset)
                }
                Q.length > 0 && m(Q[0]), W = [], Q = [], s = !0
              } else -1 * c > 10 * V && (I.error("sample is far away from expected", a.ts, G + V), r.done = !1, K++)
            }
          } else {
            var g = W[o - 1].ts - W[0].ts;
            g > 0 ? s = g >= V : g < 0 && (s = o >= V / Y + 1), s && w()
          }
          s && u.CLOSED !== j && (j = u.ACTIVE, ut(), I.debug("playback"));
          break;
        case u.ACTIVE:
          E(t, e, i, n)
        }
        return r.done ? K = 0 : r.errors = K, r
      }, this.processTransitionFrame = function (t, e, i, n) {
        var r = {
          done: !0
        };
        if (t) rt.newSapTimes.push(i);
        else if (0 == rt.newSapTimes.length) return I.debug("processTransition: throwing useless frame", i, n), r;
        I.debug("processTransition: new rendition frame ts=" + i + ", offset=" + n + ", sap=" + t);
        var s = rt.startupBuffer.length;
        if (s > 0) {
          void 0 == rt.lastSampleDuration && (rt.lastSampleDuration = void 0 !== Y ? Y : 0);
          var o = rt.startupBuffer[s - 1],
            a = i - o.ts;
          a < 0 ? n >= -1 * a ? (n += a, a = 0) : a = rt.lastSampleDuration : a > 2 * l && (a = rt.lastSampleDuration), i = o.ts + a, rt.lastSampleDuration = a
        }
        if (M(rt.startupBuffer, e, i, n, t), x(i)) {
          rt.curStreamCancelled || (I.debug("processTransitionFrame cancel current rendition"), lt(this), rt.curStreamCancelled = !0);
          var u = $;
          rt.curStreamLastBufferedTs && rt.curStreamLastBufferedTs > u && (u = rt.curStreamLastBufferedTs);
          var c = rt.newSapTimes[0],
            f = 0,
            h = Math.abs(rt.newSapTimes[0] - u);
          for (f = rt.newSapTimes.length - 1; f >= 1; f--) {
            var d = Math.abs(rt.newSapTimes[f] - u);
            d < h && (h = d, c = rt.newSapTimes[f])
          }
          for (S(c), f = 0; f < rt.startupBuffer.length && !(rt.startupBuffer[f].ts >= c); f++);
          if (f > 0) {
            rt.startupBuffer.splice(0, f);
            for (var p = void 0, v = 0; v < rt.initDataBuffer.length; v++) rt.initDataBuffer[v].idx <= f ? (p = rt.initDataBuffer.shift(), v--) : rt.initDataBuffer[v].idx -= f;
            p && (rt.composer.setTrackParams(rt.cTrackId, {
              codecData: p.data
            }), rt.initSegment = rt.composer.initSegment())
          }
          var m = (c - Z) / l,
            g = Math.min(Y / l, .04);
          N.pushInit(rt.initSegment, m > 0 && m < g), st && (I.debug("transit buffer length = " + rt.startupBuffer.length), I.debug("===== Rendition switch GAP ===== " + 1e3 * m + " msec, allowance = " + g), this.completeTransition(), this.applyTransition(), (isNaN(m) || m < 0 && -m > 10) && (r.done = !1, I.error("Correct rendition switch isn't possible, gap is too big (" + m + "s). Reloading stream.")))
        }
        return r
      }, this.completeTransition = function () {
        W = rt.startupBuffer, rt.startupBuffer = [], rt.composer.setTrackParams(rt.cTrackId, {
          sequenceNumber: it + 1
        }), v.remove(L), L = rt.id, d = rt.streamOptions, h = rt.name, O = rt.composer, R = rt.cTrackId, s = rt.codec, D = rt.container, l = rt.timescale, V = U * l / 1e3, q = !1, G = void 0, Y = void 0, nt = !1, st = !1, K = 0, dt = rt.initSegmentData, Q = rt.initDataBuffer, rt = {}, ht = !1, Z = void 0, tt = void 0, et = void 0, W.length > 0 && ($ = W[W.length - 1].ts)
      }, this.applyTransition = function (t) {
        if (I.debug("applyTransition", t), t && dt && m(dt), ft(this), j = u.OPEN, C(this), W.length >= 2) {
          var e = W.splice(W.length - 1, 1)[0];
          this.processFrame(e.sap, e.data, e.ts, e.offset)
        }
        p.setPositionControl(), p.transitOff()
      }
    }
    var i = new r.default(t),
      n = new s.default(t);
    return {
      create: function (t, i, n, r, s, o, a, u, c) {
        return new e(t, i, n, r, s, o, a, u, c)
      }
    }
  }, e.TRANSITION_MODE = c
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    r = {};
  r.appendBox = function (t, e, i) {
    if (e._root = t._root ? t._root : t, e._parent = t, -1 !== i)
      if (void 0 !== i && null !== i) {
        var r, s = -1;
        if ("number" == typeof i) s = i;
        else {
          if ("string" == typeof i) r = i;
          else {
            if ("object" !== (void 0 === i ? "undefined" : n(i)) || !i.type) return void t.boxes.push(e);
            r = i.type
          }
          for (var o = 0; o < t.boxes.length; o++)
            if (r === t.boxes[o].type) {
              s = o + 1;
              break
            }
        }
        t.boxes.splice(s, 0, e)
      } else t.boxes.push(e)
  }, e.default = r
}, function (t, e, i) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    s = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(11)),
    o = {};
  o.liveFrameTypes = {
    WEB_AAC_SEQUENCE_HEADER: 0,
    WEB_AAC_FRAME: 1,
    WEB_AVC_SEQUENCE_HEADER: 2,
    WEB_AVC_KEY_FRAME: 3,
    WEB_AVC_FRAME: 4,
    WEB_HEVC_SEQUENCE_HEADER: 5,
    WEB_HEVC_KEY_FRAME: 6,
    WEB_HEVC_FRAME: 7,
    WEB_VP6_KEY_FRAME: 8,
    WEB_VP6_FRAME: 9,
    WEB_VP8_KEY_FRAME: 10,
    WEB_VP8_FRAME: 11,
    WEB_VP9_KEY_FRAME: 12,
    WEB_VP9_FRAME: 13,
    WEB_MP3: 14
  }, o.closeCodes = {
    1e3: "CLOSE_NORMAL",
    1001: "CLOSE_GOING_AWAY",
    1002: "CLOSE_PROTOCOL_ERROR",
    1003: "CLOSE_UNSUPPORTED",
    1005: "CLOSE_NO_STATUS",
    1006: "CLOSE_ABNORMAL",
    1007: "Unsupported Data",
    1008: "Policy Violation",
    1009: "CLOSE_TOO_LARGE",
    1010: "Missing Extension",
    1011: "Internal Error",
    1012: "Service Restart",
    1013: "Try Again Later",
    1015: "TLS Handshake"
  }, e.default = function (t) {
    var e = s.default.create(t, "WSUtils"),
      i = function () {
        function t() {
          n(this, t), this.closeCodes = o.closeCodes, this.liveFrameTypes = o.liveFrameTypes
        }
        return r(t, [{
          key: "readValue",
          value: function (t, i, n) {
            var r = [0, 0],
              s = Math.ceil(n / 4) - 1;
            if (s > 2) return e.error("[WS]: Attempt to read more than 64 bits!"), null;
            for (var o = s; o >= 0; o--)
              for (var a = 0; a < 4; a++) r[o] |= t[i + 4 * (s - o) + a] << 8 * (3 - a);
            return r[1] &= 2097151, r[1] * Math.pow(2, 32) + (r[0] >>> 0)
          }
        }]), t
      }();
    return {
      create: function () {
        return new i
      }
    }
  }
}, function (t, e, i) {
  var n = i(19);
  t.exports = function (t, e) {
    if ("number" != typeof t && "Number" != n(t)) throw TypeError(e);
    return +t
  }
}, function (t, e, i) {
  "use strict";
  var n = i(9),
    r = i(41),
    s = i(8);
  t.exports = [].copyWithin || function (t, e) {
    var i = n(this),
      o = s(i.length),
      a = r(t, o),
      u = r(e, o),
      c = arguments.length > 2 ? arguments[2] : void 0,
      l = Math.min((void 0 === c ? o : r(c, o)) - u, o - a),
      f = 1;
    for (u < a && a < u + l && (f = -1, u += l - 1, a += l - 1); l-- > 0;) u in i ? i[a] = i[u] : delete i[a], a += f, u += f;
    return i
  }
}, function (t, e, i) {
  var n = i(34);
  t.exports = function (t, e) {
    var i = [];
    return n(t, !1, i.push, i, e), i
  }
}, function (t, e, i) {
  var n = i(10),
    r = i(9),
    s = i(48),
    o = i(8);
  t.exports = function (t, e, i, a, u) {
    n(e);
    var c = r(t),
      l = s(c),
      f = o(c.length),
      h = u ? f - 1 : 0,
      d = u ? -1 : 1;
    if (i < 2)
      for (;;) {
        if (h in l) {
          a = l[h], h += d;
          break
        }
        if (h += d, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
      }
    for (; u ? h >= 0 : f > h; h += d) h in l && (a = e(a, l[h], h, c));
    return a
  }
}, function (t, e, i) {
  "use strict";
  var n = i(10),
    r = i(4),
    s = i(108),
    o = [].slice,
    a = {},
    u = function (t, e, i) {
      if (!(e in a)) {
        for (var n = [], r = 0; r < e; r++) n[r] = "a[" + r + "]";
        a[e] = Function("F,a", "return new F(" + n.join(",") + ")")
      }
      return a[e](t, i)
    };
  t.exports = Function.bind || function (t) {
    var e = n(this),
      i = o.call(arguments, 1),
      a = function () {
        var n = i.concat(o.call(arguments));
        return this instanceof a ? u(e, n.length, n) : s(e, n, t)
      };
    return r(e.prototype) && (a.prototype = e.prototype), a
  }
}, function (t, e, i) {
  "use strict";
  var n = i(7).f,
    r = i(35),
    s = i(39),
    o = i(21),
    a = i(33),
    u = i(34),
    c = i(77),
    l = i(111),
    f = i(40),
    h = i(6),
    d = i(32).fastKey,
    p = i(46),
    v = h ? "_s" : "size",
    m = function (t, e) {
      var i, n = d(e);
      if ("F" !== n) return t._i[n];
      for (i = t._f; i; i = i.n)
        if (i.k == e) return i
    };
  t.exports = {
    getConstructor: function (t, e, i, c) {
      var l = t(function (t, n) {
        a(t, l, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != n && u(n, i, t[c], t)
      });
      return s(l.prototype, {
        clear: function () {
          for (var t = p(this, e), i = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete i[n.i];
          t._f = t._l = void 0, t[v] = 0
        },
        delete: function (t) {
          var i = p(this, e),
            n = m(i, t);
          if (n) {
            var r = n.n,
              s = n.p;
            delete i._i[n.i], n.r = !0, s && (s.n = r), r && (r.p = s), i._f == n && (i._f = r), i._l == n && (i._l = s), i[v]--
          }
          return !!n
        },
        forEach: function (t) {
          p(this, e);
          for (var i, n = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); i = i ? i.n : this._f;)
            for (n(i.v, i.k, this); i && i.r;) i = i.p
        },
        has: function (t) {
          return !!m(p(this, e), t)
        }
      }), h && n(l.prototype, "size", {
        get: function () {
          return p(this, e)[v]
        }
      }), l
    },
    def: function (t, e, i) {
      var n, r, s = m(t, e);
      return s ? s.v = i : (t._l = s = {
        i: r = d(e, !0),
        k: e,
        v: i,
        p: n = t._l,
        n: void 0,
        r: !1
      }, t._f || (t._f = s), n && (n.n = s), t[v]++, "F" !== r && (t._i[r] = s)), t
    },
    getEntry: m,
    setStrong: function (t, e, i) {
      c(t, e, function (t, i) {
        this._t = p(t, e), this._k = i, this._l = void 0
      }, function () {
        for (var t = this, e = t._k, i = t._l; i && i.r;) i = i.p;
        return t._t && (t._l = i = i ? i.n : t._t._f) ? "keys" == e ? l(0, i.k) : "values" == e ? l(0, i.v) : l(0, [i.k, i.v]) : (t._t = void 0, l(1))
      }, i ? "entries" : "values", !i, !0), f(e)
    }
  }
}, function (t, e, i) {
  var n = i(47),
    r = i(100);
  t.exports = function (t) {
    return function () {
      if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
      return r(this)
    }
  }
}, function (t, e, i) {
  "use strict";
  var n = i(39),
    r = i(32).getWeak,
    s = i(1),
    o = i(4),
    a = i(33),
    u = i(34),
    c = i(23),
    l = i(15),
    f = i(46),
    h = c(5),
    d = c(6),
    p = 0,
    v = function (t) {
      return t._l || (t._l = new m)
    },
    m = function () {
      this.a = []
    },
    g = function (t, e) {
      return h(t.a, function (t) {
        return t[0] === e
      })
    };
  m.prototype = {
    get: function (t) {
      var e = g(this, t);
      if (e) return e[1]
    },
    has: function (t) {
      return !!g(this, t)
    },
    set: function (t, e) {
      var i = g(this, t);
      i ? i[1] = e : this.a.push([t, e])
    },
    delete: function (t) {
      var e = d(this.a, function (e) {
        return e[0] === t
      });
      return ~e && this.a.splice(e, 1), !!~e
    }
  }, t.exports = {
    getConstructor: function (t, e, i, s) {
      var c = t(function (t, n) {
        a(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, void 0 != n && u(n, i, t[s], t)
      });
      return n(c.prototype, {
        delete: function (t) {
          if (!o(t)) return !1;
          var i = r(t);
          return !0 === i ? v(f(this, e)).delete(t) : i && l(i, this._i) && delete i[this._i]
        },
        has: function (t) {
          if (!o(t)) return !1;
          var i = r(t);
          return !0 === i ? v(f(this, e)).has(t) : i && l(i, this._i)
        }
      }), c
    },
    def: function (t, e, i) {
      var n = r(s(e), !0);
      return !0 === n ? v(t).set(e, i) : n[t._i] = i, t
    },
    ufstore: v
  }
}, function (t, e, i) {
  "use strict";

  function n(t, e, i, c, l, f, h, d) {
    for (var p, v, m = l, g = 0, _ = !!h && a(h, d, 3); g < c;) {
      if (g in i) {
        if (p = _ ? _(i[g], g, e) : i[g], v = !1, s(p) && (v = void 0 !== (v = p[u]) ? !!v : r(p)), v && f > 0) m = n(t, e, p, o(p.length), m, f - 1) - 1;
        else {
          if (m >= 9007199254740991) throw TypeError();
          t[m] = p
        }
        m++
      }
      g++
    }
    return m
  }
  var r = i(55),
    s = i(4),
    o = i(8),
    a = i(21),
    u = i(5)("isConcatSpreadable");
  t.exports = n
}, function (t, e, i) {
  t.exports = !i(6) && !i(3)(function () {
    return 7 != Object.defineProperty(i(70)("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e) {
  t.exports = function (t, e, i) {
    var n = void 0 === i;
    switch (e.length) {
    case 0:
      return n ? t() : t.call(i);
    case 1:
      return n ? t(e[0]) : t.call(i, e[0]);
    case 2:
      return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
    case 3:
      return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
    case 4:
      return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
    }
    return t.apply(i, e)
  }
}, function (t, e, i) {
  var n = i(4),
    r = Math.floor;
  t.exports = function (t) {
    return !n(t) && isFinite(t) && r(t) === t
  }
}, function (t, e, i) {
  var n = i(1);
  t.exports = function (t, e, i, r) {
    try {
      return r ? e(n(i)[0], i[1]) : e(i)
    } catch (e) {
      var s = t.return;
      throw void 0 !== s && n(s.call(t)), e
    }
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      value: e,
      done: !!t
    }
  }
}, function (t, e, i) {
  var n = i(79),
    r = Math.pow,
    s = r(2, -52),
    o = r(2, -23),
    a = r(2, 127) * (2 - o),
    u = r(2, -126),
    c = function (t) {
      return t + 1 / s - 1 / s
    };
  t.exports = Math.fround || function (t) {
    var e, i, r = Math.abs(t),
      l = n(t);
    return r < u ? l * c(r / u / o) * u * o : (e = (1 + o / s) * r, (i = e - (e - r)) > a || i != i ? l * (1 / 0) : l * i)
  }
}, function (t, e) {
  t.exports = Math.log1p || function (t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
  }
}, function (t, e) {
  t.exports = Math.scale || function (t, e, i, n, r) {
    return 0 === arguments.length || t != t || e != e || i != i || n != n || r != r ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (r - n) / (i - e) + n
  }
}, function (t, e, i) {
  "use strict";
  var n = i(37),
    r = i(59),
    s = i(49),
    o = i(9),
    a = i(48),
    u = Object.assign;
  t.exports = !u || i(3)(function () {
    var t = {},
      e = {},
      i = Symbol(),
      n = "abcdefghijklmnopqrst";
    return t[i] = 7, n.split("").forEach(function (t) {
      e[t] = t
    }), 7 != u({}, t)[i] || Object.keys(u({}, e)).join("") != n
  }) ? function (t, e) {
    for (var i = o(t), u = arguments.length, c = 1, l = r.f, f = s.f; u > c;)
      for (var h, d = a(arguments[c++]), p = l ? n(d).concat(l(d)) : n(d), v = p.length, m = 0; v > m;) f.call(d, h = p[m++]) && (i[h] = d[h]);
    return i
  } : u
}, function (t, e, i) {
  var n = i(7),
    r = i(1),
    s = i(37);
  t.exports = i(6) ? Object.defineProperties : function (t, e) {
    r(t);
    for (var i, o = s(e), a = o.length, u = 0; a > u;) n.f(t, i = o[u++], e[i]);
    return t
  }
}, function (t, e, i) {
  var n = i(18),
    r = i(36).f,
    s = {}.toString,
    o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    a = function (t) {
      try {
        return r(t)
      } catch (t) {
        return o.slice()
      }
    };
  t.exports.f = function (t) {
    return o && "[object Window]" == s.call(t) ? a(t) : r(n(t))
  }
}, function (t, e, i) {
  var n = i(15),
    r = i(18),
    s = i(51)(!1),
    o = i(83)("IE_PROTO");
  t.exports = function (t, e) {
    var i, a = r(t),
      u = 0,
      c = [];
    for (i in a) i != o && n(a, i) && c.push(i);
    for (; e.length > u;) n(a, i = e[u++]) && (~s(c, i) || c.push(i));
    return c
  }
}, function (t, e, i) {
  var n = i(37),
    r = i(18),
    s = i(49).f;
  t.exports = function (t) {
    return function (e) {
      for (var i, o = r(e), a = n(o), u = a.length, c = 0, l = []; u > c;) s.call(o, i = a[c++]) && l.push(t ? [i, o[i]] : o[i]);
      return l
    }
  }
}, function (t, e, i) {
  var n = i(36),
    r = i(59),
    s = i(1),
    o = i(2).Reflect;
  t.exports = o && o.ownKeys || function (t) {
    var e = n.f(s(t)),
      i = r.f;
    return i ? e.concat(i(t)) : e
  }
}, function (t, e, i) {
  var n = i(2).parseFloat,
    r = i(45).trim;
  t.exports = 1 / n(i(87) + "-0") != -1 / 0 ? function (t) {
    var e = r(String(t), 3),
      i = n(e);
    return 0 === i && "-" == e.charAt(0) ? -0 : i
  } : n
}, function (t, e, i) {
  var n = i(2).parseInt,
    r = i(45).trim,
    s = i(87),
    o = /^[-+]?0[xX]/;
  t.exports = 8 !== n(s + "08") || 22 !== n(s + "0x16") ? function (t, e) {
    var i = r(String(t), 3);
    return n(i, e >>> 0 || (o.test(i) ? 16 : 10))
  } : n
}, function (t, e) {
  t.exports = function (t) {
    try {
      return {
        e: !1,
        v: t()
      }
    } catch (t) {
      return {
        e: !0,
        v: t
      }
    }
  }
}, function (t, e, i) {
  var n = i(1),
    r = i(4),
    s = i(81);
  t.exports = function (t, e) {
    if (n(t), r(e) && e.constructor === t) return e;
    var i = s.f(t);
    return (0, i.resolve)(e), i.promise
  }
}, function (t, e, i) {
  var n = i(8),
    r = i(86),
    s = i(24);
  t.exports = function (t, e, i, o) {
    var a = String(s(t)),
      u = a.length,
      c = void 0 === i ? " " : String(i),
      l = n(e);
    if (l <= u || "" == c) return a;
    var f = l - u,
      h = r.call(c, Math.ceil(f / c.length));
    return h.length > f && (h = h.slice(0, f)), o ? h + a : a + h
  }
}, function (t, e, i) {
  var n = i(26),
    r = i(8);
  t.exports = function (t) {
    if (void 0 === t) return 0;
    var e = n(t),
      i = r(e);
    if (e !== i) throw RangeError("Wrong length!");
    return i
  }
}, function (t, e, i) {
  e.f = i(5)
}, function (t, e, i) {
  "use strict";
  var n = i(103),
    r = i(46);
  t.exports = i(52)("Map", function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    get: function (t) {
      var e = n.getEntry(r(this, "Map"), t);
      return e && e.v
    },
    set: function (t, e) {
      return n.def(r(this, "Map"), 0 === t ? 0 : t, e)
    }
  }, n, !0)
}, function (t, e, i) {
  i(6) && "g" != /./g.flags && i(7).f(RegExp.prototype, "flags", {
    configurable: !0,
    get: i(54)
  })
}, function (t, e, i) {
  "use strict";
  var n = i(103),
    r = i(46);
  t.exports = i(52)("Set", function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function (t) {
      return n.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
    }
  }, n)
}, function (t, e, i) {
  "use strict";
  var n, r = i(23)(0),
    s = i(13),
    o = i(32),
    a = i(115),
    u = i(105),
    c = i(4),
    l = i(3),
    f = i(46),
    h = o.getWeak,
    d = Object.isExtensible,
    p = u.ufstore,
    v = {},
    m = function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    },
    g = {
      get: function (t) {
        if (c(t)) {
          var e = h(t);
          return !0 === e ? p(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
        }
      },
      set: function (t, e) {
        return u.def(f(this, "WeakMap"), t, e)
      }
    },
    _ = t.exports = i(52)("WeakMap", m, g, u, !0, !0);
  l(function () {
    return 7 != (new _).set((Object.freeze || Object)(v), 7).get(v)
  }) && (a((n = u.getConstructor(m, "WeakMap")).prototype, g), o.NEED = !0, r(["delete", "has", "get", "set"], function (t) {
    var e = _.prototype,
      i = e[t];
    s(e, t, function (e, r) {
      if (c(e) && !d(e)) {
        this._f || (this._f = new n);
        var s = this._f[t](e, r);
        return "set" == t ? this : s
      }
      return i.call(this, e, r)
    })
  }))
}, function (t, e) {
  var i;
  i = function () {
    return this
  }();
  try {
    i = i || Function("return this")() || (0, eval)("this")
  } catch (t) {
    "object" == typeof window && (i = window)
  }
  t.exports = i
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  var r = n(i(138));
  n(i(143)), t.exports = {
    init: function (t) {
      var e = void 0;
      e = t && t.instance_name ? t.instance_name : "SLDP_" + (Math.floor(1e3 * Math.random()) + 1);
      var i = new r.default(e);
      return i.initialize(t), i
    },
    VERSION: "v2.12.2",
    COMMITHASH: "1a038309ff97ed4f59645b45057e987987740695"
  }
}, function (t, e, i) {
  "use strict";
  (function (t) {
    function e(t, e, i) {
      t[e] || Object[n](t, e, {
        writable: !0,
        configurable: !0,
        value: i
      })
    }
    if (i(354), i(355), i(155), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
    t._babelPolyfill = !0;
    var n = "defineProperty";
    e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
      [][t] && e(Array, t, Function.call.bind([][t]))
    })
  }).call(e, i(132))
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    o = n(i(136)),
    a = n(i(95)),
    u = n(i(11));
  e.default = function (t) {
    var e = u.default.create(t, "ABR controller"),
      i = new o.default(t),
      n = function () {
        function t(n, s) {
          r(this, t), this._watchDog = function () {
            if (this.abrStrategy.isRunning()) {
              var t = this.abrStrategy.calculateCurVideoStreamMetric("latestBufLevel");
              t <= this.stepDownBufferLevel && (e.debug("_watchDog", t), this.abrStrategy.finish(), this._increasePhases())
            }
          }.bind(this), this._evalHandler = function () {
            if (!this.isSwitchInProgressCallback() && !this.isSeekInProgressCallback()) {
              var t = this.abrStrategy.calculateCurStreamMetric("latestLowBufferCount"),
                i = this.abrStrategy.calculateCurVideoStreamMetric("latestBufLevel");
              if (this.playbackStalled(i, t)) e.debug("evalHandler: playback stalled! Switch to lowest rendition."), this.abrStrategy.cancel(), this._switchStream(0, a.default.ABRUPT), this._increasePhases(), this.phaseCount = 0;
              else {
                if (e.debug("phase " + this.phaseCount + " max " + this.maxPhases), this.phaseCount >= 3) {
                  var n = this.abrStrategy.calculateCurStreamMetric("latestBandwidth"),
                    r = this.abrStrategy.calculateCurStreamMetric("latestRate");
                  if (n += this.abrStrategy.calculateProbeStreamMetric("latestBandwidth"), e.debug("evalHandler: current buffer " + i + ", step down buffer " + this.stepDownBufferLevel + ", current bandwidth " + n + ", current rate " + r), i < this.stepDownBufferLevel) {
                    if (this.abrStrategy.cancel(), r >= n) {
                      var s = this.abrStrategy.findRelevantStream(n, r);
                      s !== this.curStream.orderedIdx && (e.debug("evalHandler: step down to " + this.streamsData.ordered[s].rendition + "p"), this._switchStream(s), this._increasePhases(), this.phaseCount = 0)
                    }
                  } else !this._alreadyTop() && !this.abrStrategy.isRunning() && this.phaseCount >= this.maxPhases && n > 0 && i > this.safeRunBufferLevel && 0 == t && (this.abrStrategy.run(), this.phaseCount = 0)
                }!this.abrStrategy.isRunning() && this.phaseCount < this.maxPhases && this.phaseCount++
              }
            }
          }.bind(this), this._trialComplete = function () {
            if (e.debug("trial complete for " + (this.curStream ? this.curStream.rendition : "unknown")), this.curStream) {
              var t = this.trials[this.curStream.orderedIdx];
              t.timer = null, t.required > 1 && t.required--
            }
          }.bind(this), this._onStrategyResult = function (t) {
            if (e.debug("_onAbrStrategyResult: success " + this.streamsData.ordered[t].rendition + "p, idx " + t + ", current stream " + this.curStream.rendition + "p, idx " + this.curStream.orderedIdx), this.curStream.orderedIdx !== t) this._switchStream(t);
            else {
              for (var i in this.trials) this.trials[i].runs = 0;
              this._increasePhases()
            }
            this.phaseCount = 0
          }.bind(this), this.streamsData = [], this.bufferingTime = s, this.trials = {}, this.maxPhases = 3, this.trialsActive = !1, this.stepDownBufferLevel = this.bufferingTime > 1e3 ? this.bufferingTime / 1500 : this.bufferingTime / 1250, this.safeRunBufferLevel = this.bufferingTime > 1e3 ? .75 * this.bufferingTime / 1e3 : .9 * this.bufferingTime / 1e3, this.abrStrategy = i.create(n, s)
        }
        return s(t, [{
          key: "start",
          value: function () {
            this.streamsData = this.getStreamsCallback(), this.curStream = this.getCurStreamCallback(), this.streamsData.ordered.length > 1 && (e.debug("start"), this._initTrials(), this.phaseCount = 0, this.trials[this.curStream.orderedIdx].timer = setTimeout(this._trialComplete, 6e4), this._clearEvalTimer(), this._clearWatchTimer(), this._clearRestartTimer(), this.evalTimer = setInterval(this._evalHandler, 1e3), this.watchTimer = setInterval(this._watchDog, 100), this.abrStrategy.init(this.streamsData, this.curStream), this.abrStrategy.callbacks = {
              onStartProbe: this.probeStartCallback,
              onCancelProbe: this.probeCancelCallback,
              onResult: this._onStrategyResult
            })
          }
        }, {
          key: "restart",
          value: function (t) {
            if (t) {
              this._clearEvalTimer(), this._clearWatchTimer();
              var e = this;
              this.restartTimer = setTimeout(function () {
                e.restartTimer = void 0, e.start()
              }, 5e3)
            } else this.start()
          }
        }, {
          key: "playbackStalled",
          value: function (t, i) {
            return i > 0 && e.debug("Low buffer count: " + i + ", current buffer level: " + t), i >= 10 || t + 2 <= 0
          }
        }, {
          key: "scheduleInstantEvaluation",
          value: function () {
            this._clearEvalTimer(), this._clearWatchTimer(), this._evalHandler(), this.evalTimer = setInterval(this._evalHandler, 1e3), this.watchTimer = setInterval(this._watchDog, 100)
          }
        }, {
          key: "_increasePhases",
          value: function () {
            this.maxPhases < 30 && (this.maxPhases++, e.debug("Increase maxPhases", this.maxPhases))
          }
        }, {
          key: "_alreadyTop",
          value: function () {
            return this.curStream.orderedIdx === this.streamsData.ordered.length - 1
          }
        }, {
          key: "_initTrials",
          value: function () {
            var t = !1;
            if (this.trialsActive)
              for (var e = 0; e < this.streamsData.ordered.length; e++) {
                if (this.trials[e]) {
                  var i = this.trials[e].idx;
                  i === this.streamsData.ordered[e].idx && this.trials[e].stream === this.streamsData.streams[i].stream && (t = !0)
                }
                if (!t) break
              }
            if (t) this._resetTrials();
            else {
              this.trials = {}, this.trialsActive = !0;
              for (var n = 0; n < this.streamsData.ordered.length; n++) {
                var r = this.streamsData.ordered[n].idx;
                this.trials[n] = {
                  idx: r,
                  stream: this.streamsData.streams[r].stream,
                  runs: 0,
                  required: 1,
                  timer: null
                }
              }
            }
          }
        }, {
          key: "_switchStream",
          value: function (t, i) {
            if (t !== this.curStream.orderedIdx) {
              var n = t > this.curStream.orderedIdx;
              if (n) this.trials[t].runs++;
              else {
                var r = this.trials[this.curStream.orderedIdx];
                r.timer && (r.required += 2, r.required > 15 && (r.required = 15), this._clearTrialTimer(this.curStream.orderedIdx), e.debug("Increase trial for " + this.curStream.rendition + "p, idx " + r.idx + " to " + r.required))
              }(!n || this.trials[t].runs >= this.trials[t].required) && this.switchStreamCallback(this.streamsData.ordered[t].idx, i)
            }
          }
        }, {
          key: "stop",
          value: function (t) {
            e.debug("stop!"), this.streamsData = [], this.curStream = void 0, this.phaseCount = 0, this._resetTrials(), t && t.hard && (this.trials = {}), this._clearEvalTimer(), this._clearWatchTimer(), this.abrStrategy.clear()
          }
        }, {
          key: "_clearEvalTimer",
          value: function () {
            void 0 !== this.evalTimer && (clearInterval(this.evalTimer), this.evalTimer = void 0)
          }
        }, {
          key: "_clearWatchTimer",
          value: function () {
            void 0 !== this.watchTimer && (clearInterval(this.watchTimer), this.watchTimer = void 0)
          }
        }, {
          key: "_clearRestartTimer",
          value: function () {
            void 0 !== this.restartTimer && (clearTimeout(this.restartTimer), this.restartTimer = void 0)
          }
        }, {
          key: "_resetTrials",
          value: function () {
            for (var t in this.trials) this.trials[t].runs = 0, this._clearTrialTimer(t)
          }
        }, {
          key: "_clearTrialTimer",
          value: function (t) {
            null !== this.trials[t].timer && (clearTimeout(this.trials[t].timer), this.trials[t].timer = null)
          }
        }, {
          key: "isProbing",
          value: function (t) {
            var e = !1,
              i = this.abrStrategy.getProber();
            return i && i.id() === t && (e = i.isEnabled()), e
          }
        }, {
          key: "onProbeInitReceived",
          value: function () {
            this.abrStrategy.getProber().receiveInit()
          }
        }, {
          key: "onProbeDataReceived",
          value: function (t, e, i) {
            this.abrStrategy.getProber().receiveFrame(t, e, i)
          }
        }, {
          key: "callbacks",
          set: function (t) {
            this.switchStreamCallback = t.switchStream, this.isSwitchInProgressCallback = t.isInProgress, this.isSeekInProgressCallback = t.isSeeking, this.getStreamsCallback = t.getStreams, this.getCurStreamCallback = t.getCurStream, this.probeStartCallback = t.probeStream, this.probeCancelCallback = t.cancelStream
          }
        }]), t
      }();
    return {
      create: function (t, e) {
        return new n(t, e)
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    o = n(i(144)),
    a = n(i(11)),
    u = 3e3;
  e.default = function (t) {
    var e = a.default.create(t, "ABR strategy"),
      i = new o.default(t),
      n = function () {
        function t(i, n) {
          r(this, t), this.onProbeFinished = function () {
            this.runsCount++, this.runCurStreamMetricMethod("stopCustom");
            var t = this.calculateCurStreamMetric("customRangeBandwidth");
            e.debug("onProbeFinished: current stream bandwidth " + t);
            var i = this.metricsManager.getMetrics(this.prober.id()),
              n = Math.max(i.avgBandwidth(), i.latestBandwidth()),
              r = i.avgRate();
            t += n, e.debug("onProbeFinished bandwidth: previous " + this.curBandwidth + ", current " + t), e.debug("onProbeFinished prober: bandwidth " + n + ", rate " + r);
            var s = this.prober.period;
            this.destroyProber(), this.running = !1;
            var o = this.calculateCurVideoStreamMetric("latestBufLevel"),
              a = 1e3 * o >= this.enoughBufferToContinue,
              c = this.calculateCurStreamMetric("avgRate") / this.curStream.bandwidth;
            if (e.debug("prober enough buffer " + a + ", period " + s + ", level " + o), a && s >= u) {
              this.curBandwidth = t;
              for (var l = this.curStreamIdx + 1; l < this.streamsData.ordered.length; l++) {
                var f = this.streamsData.ordered[l].bandwidth * c;
                if (this.curBandwidth < 1.2 * f) break;
                this.curStreamIdx++
              }
              this.doRun()
            } else a ? (t < this.curBandwidth && (t /= c), this.curBandwidth = Math.max(t, this.curBandwidth), this.doRun()) : this.onResultCallback(this.curStreamIdx)
          }.bind(this), this.onInitReceived = function () {
            this.runCurStreamMetricMethod("startCustom")
          }.bind(this), this.running = !1, this.nextProberId = 0, this.runsCount = 0, this.metricsManager = i, this.bufferingTime = n, this.minBufferingTime = n > 1e3 ? 600 : n / 2, this.enoughBufferToContinue = n > 1e3 ? 1e3 : n
        }
        return s(t, [{
          key: "init",
          value: function (t, e) {
            this.streamsData = t, this.curStream = e
          }
        }, {
          key: "clear",
          value: function () {
            e.debug("clear"), this.cancel(), this.streamsData = void 0, this.curStream = void 0
          }
        }, {
          key: "cancel",
          value: function () {
            this.running && (e.debug("cancel"), this.running = !1, this.prober.stop()), this.destroyProber()
          }
        }, {
          key: "destroyProber",
          value: function () {
            this.prober && (this.prober.destroy(), this.prober = void 0)
          }
        }, {
          key: "run",
          value: function () {
            this.curBandwidth = this.calculateCurStreamMetric("avgBandwidth"), this.curStreamIdx = this.curStream.orderedIdx, this.runsCount = 0, this.doRun()
          }
        }, {
          key: "finish",
          value: function () {
            e.debug("finish! current stream idx " + this.curStreamIdx), this.cancel(), this.onResultCallback(this.curStreamIdx)
          }
        }, {
          key: "doRun",
          value: function () {
            var t = this.curStream ? this.curStream.rendition + "p" : "";
            if (e.debug("run: current stream " + t + ", idx " + this.curStreamIdx + ", bandwdith " + this.curBandwidth), this.curBandwidth > 0)
              if (this.nextStreamIdx = this.curStreamIdx + 1, this.nextStreamIdx < this.streamsData.ordered.length) {
                var n = this.calculateCurStreamMetric("avgRate");
                this.bwCorrector = this.curStream.bandwidth > 0 ? n / this.curStream.bandwidth : 1, e.debug("run: bandwidth " + this.curBandwidth + ", rate " + n + ", corrector " + this.bwCorrector);
                var r = this.streamsData.ordered[this.nextStreamIdx],
                  s = n + r.bandwidth * this.bwCorrector,
                  o = 0,
                  a = 1e3 * this.calculateCurVideoStreamMetric("latestBufLevel");
                this.curBandwidth < s && (o = this.curBandwidth * (a - this.minBufferingTime) / (s - this.curBandwidth), (o = Math.round(o)) < 100 && (o = 100)), (0 == o || o > u) && (o = u), 0 === this.runsCount && o > 600 && (o = 600);
                var c = this.streamsData.streams[r.idx];
                this.prober = i.create(this.nextProberId++, c.stream, c.stream_info.vtimescale, o, this.metricsManager), this.prober.callbacks = {
                  onStartProbe: this.startProbeCallback,
                  onCancelProbe: this.cancelProbeCallback,
                  onInitReceived: this.onInitReceived,
                  onProbeFinished: this.onProbeFinished
                }, this.running = !0, this.prober.start()
              } else this.onResultCallback(this.curStreamIdx)
          }
        }, {
          key: "calculateCurVideoStreamMetric",
          value: function (t) {
            return this.metricsManager.getMetrics(this.curStream.vid)[t]()
          }
        }, {
          key: "calculateCurStreamMetric",
          value: function (t) {
            var e = this.metricsManager.getMetrics(this.curStream.vid)[t]();
            return void 0 !== this.curStream.aid && (e += this.metricsManager.getMetrics(this.curStream.aid)[t]()), e
          }
        }, {
          key: "calculateProbeStreamMetric",
          value: function (t) {
            var e = 0;
            return void 0 !== this.prober && (e = this.metricsManager.getMetrics(this.prober.id())[t]()), e
          }
        }, {
          key: "runCurStreamMetricMethod",
          value: function (t) {
            this.metricsManager.getMetrics(this.curStream.vid)[t](), void 0 !== this.curStream.aid && this.metricsManager.getMetrics(this.curStream.aid)[t]()
          }
        }, {
          key: "findRelevantStream",
          value: function (t, i) {
            for (var n = 0, r = this.curStream.bandwidth > 0 ? i / this.curStream.bandwidth : 1, s = this.curStream.orderedIdx - 1; s >= 0; s--)
              if (t >= 1.1 * this.streamsData.ordered[s].bandwidth * r) {
                n = s;
                break
              }
            return e.debug("findRelevantStream: found index " + this.curStream.orderedIdx), n
          }
        }, {
          key: "getProber",
          value: function () {
            return this.prober
          }
        }, {
          key: "isRunning",
          value: function () {
            return this.running
          }
        }, {
          key: "callbacks",
          set: function (t) {
            this.startProbeCallback = t.onStartProbe, this.cancelProbeCallback = t.onCancelProbe, this.onResultCallback = t.onResult
          }
        }]), t
      }();
    return {
      create: function (t, e) {
        return new n(t, e)
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    s = "\n@font-face {\n  font-family: 'glyphs';\n  src:url(data:font/opentype;base64," + function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(139)).default+');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="sldp-icon-"], [class*=" sldp-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'glyphs\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.sldp-icon-enlarge:before {\n  content: "\\e98b";\n}\n.sldp-icon-cog:before {\n  content: "\\e994";\n}\n.sldp-icon-play-o:before {\n  content: "\\ea15";\n}\n.sldp-icon-pause-o:before {\n  content: "\\ea16";\n}\n.sldp-icon-play:before {\n  content: "\\ea1c";\n}\n.sldp-icon-pause:before {\n  content: "\\ea1d";\n}\n.sldp-icon-volume-medium:before {\n  content: "\\ea27";\n}\n.sldp-icon-volume-mute:before {\n  content: "\\ea2a";\n}\n.sldp_player_wrp {\n  background-color: #000;\n  position: relative;\n}\n.sldp_player_wrp_video {\n  display: inline-block;\n}\n.sldp_player_wrp_audio {\n  display: flex;\n  height: 42px;\n}\n.sldp_cbar {\n  display: block;\n  padding: 5px;\n  padding-left: 5px;\n  overflow: hidden;\n  z-index: 10;\n}\n.sldp_cbar_video {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  transition: opacity 0.5s linear;\n  background-color: rgba(0,0,0,0.7);\n}\n.sldp_cbar_audio {\n  position: relative;\n  margin: auto 6px auto 12px;\n  background-color: rgba(0,0,0,0.4);\n}\n.sldp_mobile_ctrl {\n  position: absolute;\n  transition: opacity 0.5s linear;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  z-index: 5;\n  color: #008ee8;\n}\n.sldp_mobile_ctrl_icon {\n  margin: auto;\n  font-size: 6rem;\n  opacity: 0.7;\n}\n.sldp_message_wrp {\n  height: 100%;\n  color: white;\n  display: flex;\n  z-index: 1;\n}\n.sldp_message_wrp_video {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n}\n.sldp_message_wrp_audio_noctrl {\n  padding-left: 20px;\n}\n.sldp_message {\n  display: inline-block;\n  margin: auto;\n  background: #000;\n  font-family: Helvetica, Arial, sans-serif;\n  line-height: 22px;\n}\n.sldp_message_pad {\n  padding: 12px 20px;\n  align-self: center;\n}\n.ios_button {\n  text-align: center;\n  margin: 10px 0px;\n}\n.sldp_btn {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-right: 10px;\n  color: #008ee8;\n  font-size: 18px;\n\n  -o-transition:.5s;\n  -ms-transition:.5s;\n  -moz-transition:.5s;\n  -webkit-transition:.5s;\n  transition:.5s;\n}\n.sldp_btn:hover {\n  color: #ff8814;\n}\n.sldp_play_pause_btn {\n  float: left;\n}\n.sldp_expand_btn {\n  float: right;\n  font-size: 16px;\n}\n.sldp_volume_btn {\n  float: left;\n}\n.sldp_config_btn {\n  float: right;\n}\n.sldp_config_btn:hover {\n  transform: rotate(-30deg);\n}\n.sldp_cfg_dialog {\n  width: 100px;\n  background: black;\n  position: absolute;\n  right: 25px;\n  bottom: 30px;\n  padding: 0;\n  margin: 0;\n  font-family: Arial;\n  font-size: 14px;\n  color: white;\n  z-index: 10;\n}\n.sldp_cfg_dialog li {\n  list-style: none;\n  text-align: center;\n  line-height: 24px;\n  cursor: pointer;\n}\n.sldp_cfg_dialog li:hover {\n  background-color: grey;\n}\n.sldp_volume_wrp {\n  overflow: hidden;\n}\n.sldp_volume_desktop {\n  width: 150px;\n}\n.sldp_volume_mobile {\n  width: 20px;\n}\n.sldp_volume_slider_wrp {\n  float: left;\n  height: 20px;\n  cursor: pointer;\n}\n.sldp_volume_slider {\n  border-radius: 1px;\n  background: #008ee8;\n  width: 112px;\n  height: 3px;\n  margin-top: 9px;\n}\n.sldp_volume_thumb {\n  background: #008ee8;\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  position: relative;\n  left: 100px;\n  top: -4px;\n  cursor: pointer;\n}\n.sldp_volume_thumb:hover {\n  background: #ff8814;\n}\n.sldp_indicator {\n  height: 4px;\n  background-color: #008ee8;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n',
    o = function () {
      function t() {
        n(this, t), document.getElementById("sldp_player_stylesheet") || (this.style = document.createElement("style"), this.style.setAttribute("id", "sldp_player_stylesheet"), this.style.styleSheet ? this.style.styleSheet.cssText = s : this.style.appendChild(document.createTextNode(s)), document.getElementsByTagName("head")[0].appendChild(this.style))
      }
      return r(t, [{
        key: "destroy",
        value: function () {
          this.style && this.style.parentNode.removeChild(this.style)
        }
      }]), t
    }();
  e.default = o
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(135)),
    s = n(i(154)),
    o = n(i(142)),
    a = n(i(141)),
    u = n(i(95)),
    c = n(i(145)),
    l = n(i(11)),
    f = n(i(66)),
    h = {
      NULL: 0,
      INIT: 1,
      STOP: 2,
      SETUP: 3,
      SYNC: 4,
      PLAY: 5,
      WAIT: 6,
      STALL: 7,
      ERROR: 8,
      RESET: 9
    },
    d = new Uint8Array([17, 144]);
  e.default = function (t) {
    function e(t, e, i) {}

    function i(t) {
      var e = {
        autoplay: !0,
        controls: !0,
        buffering: 1e3,
        reconnects: 10,
        adaptive_bitrate: !0,
        muteable: !1,
        log_level: "error",
        log_div: !1,
        fullscreen: !1,
        muted: !1,
        ios_failback_scheme: "sldp",
        ios_failback_secure_scheme: "sldps",
        ios_failback_app_url: "https://itunes.apple.com/us/app/sldp-player/id1238237026"
      };
      if (wt = Object.assign({}, e, t), wt.autoplay = wt.autoplay || Ct.isMobile(), wt.bufferingSec = wt.buffering / 1e3, void 0 !== wt.width)
        if ("parent" == wt.width) wt.width = "100%";
        else {
          var i = parseInt(wt.width);
          isNaN(i) || (wt.width = i)
        }
      if (void 0 !== wt.height)
        if ("parent" == wt.height) wt.height = "100%";
        else {
          var n = parseInt(wt.height);
          isNaN(n) || (wt.height = n)
        }
      wt.mobile = Ct.isMobile()
    }

    function n() {
      l.default.setLevel(wt.log_level), l.default.setDiv(t, wt.log_div), f.default.init(t, wt.inform_ids), bt.debug("SLDP Player v2.12.2")
    }

    function p() {
      (Et = new c.default(wt)).onPlay = E, Et.onPause = O, Et.onPlayEvent = P, Et.onPauseEvent = N, Et.onVolumeSet = I, Et.onUserAction = M, Et.onQualityChange = V, Et.onResize = L, Et.onEnterPip = R, Et.onLeavePip = D, Et.qualities = []
    }

    function v() {
      Yt = !0, qt || (qt = yt.create(Tt, wt.buffering), g())
    }

    function m() {
      Mt = void 0, It = void 0, Lt = void 0, Dt = void 0, Rt = void 0, Ot = void 0
    }

    function g() {
      qt.callbacks = {
        switchStream: H,
        isInProgress: z,
        isSeeking: W,
        getStreams: Y,
        getCurStream: Q,
        probeStream: q,
        cancelStream: G
      }
    }

    function _() {
      Ct.callbacks({
        onProgress: $,
        onSourceOpen: C,
        onCrash: st,
        onWaitUpdate: nt,
        onPlayStarted: B,
        onPlayFailed: F,
        onLatencyCalc: tt,
        onLatencySeek: et,
        onLowBuffer: it
      })
    }

    function b() {
      xt.callbacks = {
        onStatusReceived: ut,
        onInitSegmentReceived: vt,
        onDataReceived: _t,
        onConnectionClosed: at
      }
    }

    function y(t) {
      qt && qt.stop(t), xt.close(), b();
      for (var e = 0; e < St.length; e++) St[e].close();
      St = [], k(), S(), m()
    }

    function A() {
      Et.removePip(function () {
        Ct.clear(), _(), Ct.init(Et.videoElement)
      })
    }

    function w(t) {
      qt && qt.stop({
        hard: !0
      }), xt.close(), Et && Et.removePip(function () {
        Et.destroy(), Et = void 0, Ct.clear(), t && t()
      }), k(), S();
      for (var e = 0; e < St.length; e++) St[e].close();
      St = [], m(), wt = void 0
    }

    function S() {
      Wt && (clearTimeout(Wt), Wt = void 0), zt = 0
    }

    function k() {
      void 0 !== Vt && (clearTimeout(Vt), Vt = void 0)
    }

    function T() {
      x() && (kt = h.SETUP)
    }

    function x() {
      var t = !1,
        i = Ft || wt.stream_url;
      return i && i.length > 0 ? e("onConnectionStarted", (t = xt.open(i)).streamURL) : bt.error("_connectCurrentStream attempt to open empty url", Ft, wt.stream_url), t
    }

    function C() {
      switch (bt.debug("MSE initialized", kt), kt) {
      case h.STOP:
        Et.canPlay = !0, kt = h.INIT;
        break;
      case h.INIT:
        wt.stream_url && (wt.autoplay || Ht) ? (T(), Ht = !1) : Et.canPlay = !0;
        break;
      case h.ERROR:
        for (var t = !1, e = 0; e < St.length; e++) St[e].isActual() && (St[e].attachToMSE(), St[e].recover(), St[e].inTransition() && (t = !0));
        kt = t ? h.SYNC : h.PLAY, Ct.startPlayback({
          recover: !0
        }), K()
      }
    }

    function E(t) {
      switch (e("onPlay"), kt) {
      case h.INIT:
        T();
        break;
      case h.RESET:
        A(), kt = h.INIT, Ht = !0;
        break;
      case h.NULL:
        break;
      default:
        k(), S(), Yt && Mt && qt.start(), Ct.handlePlay(t)
      }
    }

    function P() {
      Ct.handlePlayEvent()
    }

    function B() {
      Et && Et.onPlaybackStarted()
    }

    function F() {
      Et && (Et.triggerPause(!0), Et.onPlaybackStarted()), Vt = setTimeout(j, 2e3)
    }

    function M() {
      return h.SETUP !== kt && h.SYNC !== kt
    }

    function I(t) {
      e("onVolumeSet", t)
    }

    function L() {
      kt >= h.SYNC && K()
    }

    function R() {
      bt.debug("enter PIP"), Ct.handleEnterPip()
    }

    function D() {
      bt.debug("leave PIP"), Ct.handleLeavePip()
    }

    function O() {
      h.SYNC < kt && (S(), e("onPause"), qt && qt.stop(), Ct.handlePause(), wt.pause_timeout && (Vt = setTimeout(j, 1e3 * wt.pause_timeout)))
    }

    function N() {
      Ct.handlePauseEvent()
    }

    function j() {
      U()
    }

    function U() {
      y(), Ct.resetPosition(), kt = h.RESET
    }

    function V(t, i) {
      var n = !1;
      if (z() || Ct.isPaused()) return bt.warn("Quality change is not available at the moment"), n;
      if (h.SYNC < kt) {
        var r = "Auto" == t;
        if (r || void 0 !== jt[t]) {
          var s = void 0,
            o = void 0;
          r || (void 0 == i && (i = 0), o = jt[t][i], s = Bt[o].stream), bt.debug("Switch quality to ", t, s), e("onChangeRendition", t, s), r ? (Yt = !0, X(), qt.start()) : void 0 !== o && (Yt = !1, qt && qt.stop(), H(o)), n = !0
        }
      }
      return n
    }

    function H(t, e) {
      if (t != Lt) {
        if (Mt && !Ct.isPaused() && h.STALL != kt) {
          var i = Bt[t];
          if (h.WAIT === kt)
            for (var n = 0; n < St.length; n++) St[n].activate();
          Mt.inTransition(!0);
          var r = i.stream_info,
            s = {
              width: r.width,
              height: r.height,
              bandwidth: r.bandwidth
            };
          Mt.setTransitionParams({
            id: Ut,
            codec: r.vcodec,
            timescale: r.vtimescale,
            name: i.stream,
            streamOptions: s
          }), Mt.isTransitionSupported() ? (k(), S(), bt.debug("[Director] Change quality, send Play for " + i.stream + ", sn #" + Ut), ct([{
            stream: i.stream,
            sn: Ut,
            type: "video",
            offset: "0"
          }]), Ut++, Dt = t, Mt.startTransition(e), kt = h.SYNC) : bt.error("Transition isn't supported to ", i)
        }
      } else X()
    }

    function z() {
      return void 0 !== Dt || void 0 !== Ot
    }

    function W() {
      return Ct.isSeeking()
    }

    function Q() {
      var t = {};
      if (void 0 !== Lt) {
        t = {
          vid: Mt.id(),
          idx: Lt,
          bandwidth: Bt[Lt].stream_info.bandwidth,
          rendition: Bt[Lt].stream_info.height
        };
        for (var e = 0, i = 0; i < Gt.length; i++)
          if (Gt[i].idx == Lt) {
            e = i;
            break
          }
        t.orderedIdx = e, void 0 !== Rt && (t.aid = It.id())
      }
      return t
    }

    function Y() {
      return {
        ordered: Gt,
        streams: Bt
      }
    }

    function G(t) {
      bt.debug("Send cancel ", t.id()), lt([t.id().toString()])
    }

    function q(t, e) {
      bt.debug("probe stream " + t.streamName() + ", sn: " + t.id() + ", offset: " + Mt.sapOffset() + ", duration: " + e), ct([{
        stream: t.streamName(),
        sn: t.id(),
        type: "video",
        offset: Mt.sapOffset().toString(),
        duration: e
      }])
    }

    function J(t) {
      if (t.isVideo() && void 0 !== Dt) {
        Lt = Dt, Dt = void 0;
        var i = X();
        K(), Yt && qt.restart(!0), e("onChangeRenditionComplete", i.rendition, i.name), Et.refresh()
      } else t.isAudio() && void 0 !== Ot && (Rt = Ot, Ot = void 0)
    }

    function K() {
      Et.adjustHeight(wt.width, wt.height)
    }

    function X() {
      var t = void 0;
      if (void 0 !== Lt && Bt[Lt]) {
        var e = Bt[Lt].stream_info.height + "p";
        wt.initial_resolution = e;
        var i = Bt[Lt].stream_info.renditionIdx;
        if (wt.initial_idx = i, Gt.length > 1)
          if (qt)
            if (Yt) {
              var n = "Auto " + e;
              Et.quality_ar[0].name = n, Et.currentQuality = {
                name: n
              }
            } else Et.quality_ar[0].name = "Auto", Et.currentQuality = {
              name: e,
              idx: i
            };
        else Et.currentQuality = {
          name: e,
          idx: i
        };
        t = {
          name: Bt[Lt].stream,
          rendition: e
        }
      }
      return t
    }

    function Z() {
      Qt && (clearTimeout(Qt), Qt = void 0)
    }

    function $(t, e) {
      if (h.PLAY == kt) {
        for (var i = 0; i < St.length; i++)
          if (St[i].isActual()) {
            var n = St[i].bufferStatus(t);
            if (n.low) {
              Z(), Qt = setTimeout(function () {
                Ct.wait(), Qt = void 0
              }, 1e3 * n.lvl + 50), St[i].buffer(), kt = h.WAIT;
              break
            }
            Z()
          }
        e > 200 && st(!0)
      }
    }

    function tt(t) {
      var e = (St.length > 1 ? Mt : St[0]).latency(t);
      return e > 0 ? e : 0
    }

    function et(t, i) {
      e("onLatencyAdjustSeek", t, i)
    }

    function it() {
      e("onLowBuffer")
    }

    function nt(t, e) {
      for (var i = 0; i < St.length; i++) St[i].isActual() && St[i].updateBufferedState(t, e)
    }

    function rt() {
      h.ERROR !== kt && h.INIT !== kt && st(!0)
    }

    function st(t) {
      bt.debug("onSourceBufferCrash"), kt = h.ERROR, Pt = void 0;
      var e = !0;
      if (!t) {
        for (var i = [], n = 0; n < St.length; n++)
          if (i.push(St[n].backup()), !St[n].isRecoverable()) {
            e = !1;
            break
          }
        e && i.length > 1 && void 0 !== i[0] && void 0 !== i[1] && Math.abs(i[0] - i[1]) > 100 && (e = !1)
      }
      e && !t ? (k(), S()) : (y(), Ht = !0, kt = h.INIT), A()
    }

    function ot() {
      for (var t = 0; t < St.length; t++) St[t].flush()
    }

    function at() {
      switch (bt.debug("onConnectionClosed, state ", kt), e("onConnectionClosed"), qt && qt.stop(), kt) {
      case h.WAIT:
        Z(), Ct.continue();
      case h.SYNC:
        ot();
      case h.PLAY:
        x(), zt = 1, kt = h.STALL;
        break;
      case h.STALL:
        if (zt >= wt.reconnects || 0 == zt) U(), e("onError", "NO_PLAYABLE_SOURCE_FOUND"), Et.showNotPlaying();
        else if (void 0 == Wt) {
          var t = zt < 5 ? 1e3 : 5e3;
          Wt = setTimeout(function () {
            bt.debug("do reconnect"), zt++, Wt = void 0, x()
          }, t)
        }
        break;
      case h.RESET:
      case h.STOP:
        break;
      case h.SETUP:
        e("onError", "NO_PLAYABLE_SOURCE_FOUND"), Et.showNotPlaying();
      default:
        kt = h.INIT
      }
    }

    function ut(t) {
      Bt = t, Nt = {}, jt = {}, Gt = [], qt && qt.stop();
      var i = 0,
        n = !!wt.audio_only,
        r = !!wt.video_only,
        s = [],
        o = void 0,
        a = [];
      for (i = 0; i < Bt.length; i++) {
        Nt[Bt[i].stream] = i;
        var u = Bt[i].stream_info;
        u.vtimescale && (u.vtimescale = parseInt(u.vtimescale)), u.atimescale && (u.atimescale = parseInt(u.atimescale));
        var c = {
          name: Bt[i].stream,
          bandwidth: u.bandwidth ? u.bandwidth : 0
        };
        if (u.resolution && u.vcodec) {
          var l = u.resolution.split("x");
          if (u.width = parseInt(l[0]), u.height = parseInt(l[1]), c.width = u.width, c.height = u.height, c.vcodec = u.vcodec, Ct.isCodecSupported("video", u.vcodec)) {
            c.video = "supported";
            var f = l[1] + "p";
            jt[f] || (jt[f] = []), jt[f].push(i), u.renditionIdx = jt[f].length - 1, f != wt.initial_resolution || void 0 != wt.initial_idx && wt.initial_idx != u.renditionIdx || (o = i), u.bwStr = u.bandwidth, u.bandwidth && (u.bandwidth = parseInt(u.bandwidth) / 1024);
            var d = 0;
            for (d = 0; d < Gt.length; d++) {
              var p = Bt[Gt[d].idx].stream_info;
              if (p.height > l[1] || p.height == l[1] && p.bandwidth > u.bandwidth) break
            }
            s.splice(d, 0, {
              name: f,
              idx: u.renditionIdx
            }), Gt.splice(d, 0, {
              idx: i,
              bandwidth: u.bandwidth,
              rendition: l[1]
            })
          } else c.video = "not supported"
        }
        u.acodec && (c.acodec = u.acodec, c.audio = Ct.isCodecSupported("audio", u.acodec) ? "supported" : "not supported"), a.push(c)
      }
      for (qt && s.length > 1 && s.splice(0, 0, {
          name: "Auto"
        }), bt.debug("Player renditions:", s), bt.debug("Ordered streams:", Gt), Et.qualities = s, h.STALL == kt && Ct.resetPosition(), i = 0; i < St.length; i++) {
        var v = void 0;
        v = St[i].inTransition() ? Nt[St[i].getTransitionStreamName()] : Nt[St[i].getStreamName()], St[i].isVideo() ? (Lt = v, Dt = void 0, void 0 !== v && Bt[v].stream_info.vcodec ? (h.STALL == kt && St[i].reset(), n = !0) : St[i].inTransition(!0)) : St[i].isAudio() ? (Rt = v, Ot = void 0, void 0 !== v && Bt[v].stream_info.acodec ? (h.STALL == kt && St[i].reset(), r = !0) : St[i].inTransition(!0)) : bt.error("Got track of type other than video or audio!")
      }
      if (void 0 !== o && (n || (n = dt(Bt[o], o)), r || (r = pt(Bt[o], o))), !n)
        for (i = 0; i < Bt.length && !(n = dt(Bt[i], i)); i++);
      if (!r)
        for (i = 0; i < Bt.length && !(r = pt(Bt[i], i)); i++);
      for (i = St.length - 1; i >= 0; i--) St[i].inTransition() && !St[i].isTransitionSupported() && (St[i].isVideo() ? (Mt = void 0, Lt = void 0) : (It = void 0, Rt = void 0), St[i].close(), St.splice(i, 1), bt.error("onStatusReceived: Media source already contains given source buffer, it can not be filled, playback is not possible"), n = r = !1);
      Ct.listBuffers();
      var m = [],
        g = "offset" in wt ? wt.offset.toString() : "0";
      for (i = 0; i < St.length; i++) St[i].inTransition() ? m.push({
        stream: St[i].getTransitionStreamName(),
        sn: St[i].transitionStreamId(),
        type: St[i].type(),
        offset: g
      }) : St[i].isOpen() && m.push({
        stream: St[i].getStreamName(),
        sn: St[i].id(),
        type: St[i].type(),
        offset: g
      });
      if (X(), e("onConnectionEstablished", a), n && !wt.audio_only || r && !wt.video_only) {
        if (m.length > 0) {
          Pt = void 0, r || Et.setMuted(), ct(m), kt = h.SYNC, bt.debug("[Director] Request streams:");
          for (var _ = 0; _ < m.length; _++) bt.debug("Stream #" + _ + ": " + m[_].stream + ", sn: " + m[_].sn + ", offset: " + m[_].offset)
        }
      } else y({
        hard: !0
      })
    }

    function ct(t) {
      xt.send({
        command: "Play",
        streams: t
      })
    }

    function lt(t) {
      xt.send({
        command: "Cancel",
        streams: t
      })
    }

    function ft(t) {
      for (var e = void 0, i = 0; i < St.length; i++)
        if (t == St[i].id()) {
          e = St[i];
          break
        }
      return e
    }

    function ht(t) {
      for (var e = void 0, i = 0; i < St.length; i++)
        if (St[i].inTransition() && t == St[i].transitionStreamId()) {
          e = St[i];
          break
        }
      return e
    }

    function dt(t, e) {
      var i = !1,
        n = t.stream,
        r = t.stream_info;
      if (r.vcodec && r.width && r.height) {
        var s = {
          width: r.width,
          height: r.height,
          bandwidth: r.bandwidth,
          buffering: wt.buffering
        };
        "key_frame_alignment" in wt && (s.sapAlignment = wt.key_frame_alignment), Mt ? Mt.inTransition() && (Mt.setTransitionParams({
          id: Ut,
          codec: r.vcodec,
          timescale: r.vtimescale,
          name: n,
          streamOptions: s
        }), Mt.isTransitionSupported() && (Ut++, Dt = e, Lt = void 0, Mt.startTransition(), i = !0)) : (Mt = At.create(Ut, "video", r.vcodec, r.vtimescale, "video_stream_id", n, s, Ct, Tt)).isSupported() ? (Mt.attachToMSE(), St.push(Mt), Ut++, Lt = e, Dt = void 0, i = !0) : Mt = void 0
      } else {
        var o = r.vcodec ? "resolution" : "video codec";
        bt.error("[Director] Error: no valid " + o + " specified")
      }
      return i
    }

    function pt(t, e) {
      var i = !1,
        n = t.stream,
        r = t.stream_info;
      if (r.acodec) {
        var s = {
          buffering: wt.buffering
        };
        It ? It.inTransition() && (It.setTransitionParams({
          id: Ut,
          codec: r.acodec,
          timescale: r.atimescale,
          name: n,
          streamOptions: s
        }), It.isTransitionSupported() && (Ut++, Ot = e, Rt = void 0, It.startTransition(), i = !0)) : (It = At.create(Ut, "audio", r.acodec, r.atimescale, "audio_stream_id", n, s, Ct, Tt)).isSupported() ? (It.attachToMSE(), St.push(It), Ut++, Rt = e, Ot = void 0, i = !0) : It = void 0
      }
      return i
    }

    function vt(t, e) {
      if (bt.debug("onInitSegmentReceived", t, kt), h.SYNC == kt) {
        var i = ft(t);
        i && i.isActual() ? i.isInited() ? i.isInitSegmentNew(e) && (i.processInitSegment(e), i.setBufferDelay()) : (i.initPresentation(e), i.onBaseDecodeTimeReady(mt), i.onSourceReady(gt)) : (i = ht(t)) && i.isActual() && (i.isTransitionInited() ? i.isTransitionInitNew(e) && i.processTransitionInitSegment(e) : (i.initTransition(e), i.onCancelStream(G), i.onTransitionCompleted(J)))
      } else if (qt && qt.isProbing(t)) qt.onProbeInitReceived();
      else if (h.PLAY == kt || h.WAIT == kt || h.ERROR == kt) {
        var n = ft(t);
        n && n.isActual() && (h.ERROR == kt ? n.populateInitDataBuffer(e) : n.isInitSegmentNew(e) && (n.processInitSegment(e), n.setBufferDelay()))
      }
    }

    function mt(t, e) {
      (!Pt || e > Pt) && (Pt = e);
      var i = !0;
      if (h.ERROR != kt)
        for (var n = 0; n < St.length; n++)
          if (St[n].isOpen() || St[n].inTransition()) {
            i = !1;
            break
          }
      if (i)
        for (var r = 0; r < St.length; r++)(St[r].isBuffering() || St[r].isBackingUp()) && St[r].setBaseDecodeTime(Pt)
    }

    function gt() {
      for (var t = !0, e = 0; e < St.length; e++)
        if (St[e].isBuffering() || St[e].inTransition()) {
          t = !1;
          break
        }
      t && (h.SYNC == kt ? (kt = h.PLAY, Ct.startPlayback(), K(), Yt && Mt && qt.start()) : h.WAIT == kt && (kt = h.PLAY, Z(), Ct.continue()))
    }

    function _t(t, e, i, n, r) {
      if (h.SYNC == kt || h.PLAY == kt || h.WAIT == kt) {
        var s = ft(t);
        if (s && s.isActual()) {
          var o = s.processFrame(e, i, n, r);
          if (o.done) {
            if (wt.muteable && s.isVideo() && void 0 !== It) {
              var a = Tt.getMetrics(It.id());
              a && 0 == a.latest500msecRate() && (It.isInited() || (bt.debug("Audio is muted on start, push synthetic init segment"), It.initPresentation(d, !0), It.onBaseDecodeTimeReady(mt), It.onSourceReady(gt)), It.processMute(n, s))
            }
          } else o.errors >= 10 && rt()
        } else qt && qt.isProbing(t) ? qt.onProbeDataReceived(e, i.byteLength, n) : (s = ht(t)) && s.isActual() && (s.processTransitionFrame(e, i, n, r).done || rt())
      } else if (h.ERROR == kt) {
        var u = ft(t);
        u && u.populateStartupBuffer(e, i, n, r)
      }
    }
    var bt = l.default.create(t, "Director"),
      yt = new r.default(t),
      At = new u.default(t),
      wt = void 0,
      St = [],
      kt = h.NULL,
      Tt = new a.default(t).create(),
      xt = new s.default(t).create(Tt),
      Ct = new o.default(t).create(),
      Et = void 0,
      Pt = void 0,
      Bt = [],
      Ft = void 0,
      Mt = void 0,
      It = void 0,
      Lt = void 0,
      Rt = void 0,
      Dt = void 0,
      Ot = void 0,
      Nt = {},
      jt = {},
      Ut = 0,
      Vt = void 0,
      Ht = !1,
      zt = 0,
      Wt = void 0,
      Qt = void 0,
      Yt = !1,
      Gt = [],
      qt = void 0;
    this.initialize = function (t) {
      if (i(t), n(), p(), !Ct.isMediaSourceSupported()) return bt.error("MediaSource is not supported"), e("onError", "MEDIA_SOURCE_NOT_SUPPORTED"), void Et.showNotSupported(Ct.isIOS());
      kt = h.INIT, wt.adaptive_bitrate && v(), _(), b();
      var r = "latency_tolerance" in wt ? wt.latency_tolerance : 0;
      Ct.setLatencyTolerance(r / 1e3, wt.buffering / 1e3), Ct.init(Et.videoElement)
    }, this.tgAudio = function () {
      xt.stop_audio = !xt.stop_audio
    }, this.destroy = function (t) {
      w(t)
    }
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = "d09GRgABAAAAAAlgAAsAAAAACRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIHG2NtYXAAAAFoAAAAfAAAAHy+M762Z2FzcAAAAeQAAAAIAAAACAAAABBnbHlmAAAB7AAABQQAAAUEPcGxumhlYWQAAAbwAAAANgAAADYRqpJfaGhlYQAABygAAAAkAAAAJAfCA81obXR4AAAHTAAAADAAAAAwJgABUmxvY2EAAAd8AAAAGgAAABoGwAVebWF4cAAAB5gAAAAgAAAAIAARAGFuYW1lAAAHuAAAAYYAAAGGmUoJ+3Bvc3QAAAlAAAAAIAAAACAAAwAAAAMDxwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6ioDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAGAAAAAUABAAAwAEAAEAIOmL6ZTqFuod6ifqKv/9//8AAAAAACDpi+mU6hXqHOon6ir//f//AAH/4xZ5FnEV8RXsFeMV4QADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAAP/ABAADwAAGAA0AAAERJwcnNycDBxchERc3BACgwGDAoKDAoP5goMADwP5goMBgwKD9YMCgAaCgwAAAAAACABL/wAPuA8AAQgBeAAABJicmNjc2NycOASMiJy4BJyY1IxQGBwYHDgEnJicHHgEXFhcWBgcGBxc+ATMyFx4BFxYVMzQ2NzY3PgEXFhc3LgEnBSInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgOmFAUEExgXI2UVMhsoIyQ1Dw/JDQ0VHx9IJyYjZRYlDRQEBRQXFyNlFTIaKCQjNQ8QyQ0NFB8fSSYmJGQVJQ3+WismJTkQEBAQOSUmKysmJTkQEBAQOSUmAV4jJiZJHx8Urw0ODxA1JCMpGTIXIxcXEwQFFK4NJBcjJiZIIB8UrgwODxA1IyQoGTEXIxcXEwQFFK8MJBdtEBA5JSYrKyYlORAQEBA5JSYrKyYlORAQAAADAAD/wAQAA8AAGwA3ADoAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYDIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGAw0BAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpWTExxICEhIHFMTFZWTExxICEhIHFMTNYBgP6AA8AoKIteXWpqXV6LKCgoKIteXWpqXV6LKCj8YCEgcUxMVlZMTHEgISEgcUxMVlZMTHEgIQKA4OAAAAQAAP/ABAADwAAbADcAOwA/AAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgEzESMBMxEjAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpWTExxICEhIHFMTFZWTExxICEhIHFMTP7qgIABAICAA8AoKIteXWpqXV6LKCgoKIteXWpqXV6LKCj8YCEgcUxMVlZMTHEgISEgcUxMVlZMTHEgIQJg/oABgP6AAAAAAAEAwABAA0ADQAACAAATCQHAAoD9gANA/oD+gAACAIAAQAOAA0AAAwAHAAATIREhASERIYABQP7AAcABQP7AA0D9AAMA/QAAAAMAAAAAA3ADfgAlAEIAXQAAJSImJyY0NzY3NjQnJicmNDc2MhcWFx4BFxYVFAcOAQcGBw4BIzEnIiYnJjQ3Njc2NCcmJyY0NzYyFxYXFhQHBgcOAQciJi8BIyImNRE0NjsBNz4BFx4BFREUBgcOAQLQChEHDg4xGBkZGDEODg4nDh8YFyAJCAgJIBcYHwcRCasJEgcODh4QDw8QHg4ODigOLBcWFhcsBxKOBgwF9nMNExMNc/YHEwkJCwsJAwaABwgOJw4yPT6CPT4yDicODw8eIyRNKiorKyoqTSQjHggHWwcHDigOHicmUCYnHg4oDg4OLDk4dDg5LAcH2wUE9xMNAUANE/cGBAMEEAr8wAoQBAEBAAIAAAAAA8ADfgAPACoAAAEVIycHIzU3JzUzFzczFQcBIiYvASMiJjURNDY7ATc+ARceARURFAYHDgEDwFVra1Vra1Vra1Vr/ksGDAX2cw0TEw1z9gcTCQkLCwkDBgFVVWtrVWtrVWtrVWv+QAUE9xMNAUANE/cGBAMEEAr8wAoQBAEBAAEAAAAAAABpEbtHXw889QALBAAAAAAA10Ym8QAAAADXRibxAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAwEAAAAAAAAAAAAAAACAAAABAAAAAQAABIEAAAABAAAAAQAAMAEAACABAAAAAQAAAAAAAAAAAoAFAAeAD4AzgEsAZIBoAG2AkACggAAAAEAAAAMAF8ABAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    o = n(i(94)),
    a = n(i(11)),
    u = 6;
  e.default = function (t) {
    var e = a.default.create(t, "Metrics"),
      i = new o.default(t),
      n = function () {
        function t(e, n, s) {
          r(this, t), this._interval500msecHandler = function () {
            if (this.isStarted() && (this.timerCounter++, this.rate500msec = this.curRate500msec(), this.rate500msecTs1 = this.rate500msecTs2 = void 0, this.bytes500msec = 0, this.timerCounter % 2 == 0)) {
              this.bw1sec.push(this.bytes1sec / 128), this.rate1sec.push(this.curRate1sec()), this.rate1secTs1 = this.rate1secTs2 = void 0, this.bytes1sec = 0, this.lb1sec.push(this.lowBuf1sec), this.lowBuf1sec = 0;
              var t = this.buf1secCnt > 0 ? this.bufLvl1sec / this.buf1secCnt : 0;
              this.bl1sec.push(t), this.bufLvl1sec = 0, this.buf1secCnt = 0, 120 == this.timerCounter && (this.timerCounter = 0)
            }
          }.bind(this), this.id = e, this.type = n, this.timescale = s, this.startTime = void 0, this.lastBwTime = void 0, this.pickCustom = !1, this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.rateCustomTs1 = void 0, this.rateCustomTs2 = void 0, this.latencySubt = void 0, this.framesCount = 0, this.bytesTotal = 0, this.bytes1sec = 0, this.bytes500msec = 0, this.rate500msec = 0, this.rate500msecTs1 = void 0, this.rate500msecTs2 = void 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufLvlTotal = 0, this.bufTotalCnt = 0, this.bufLvl1sec = 0, this.buf1secCnt = 0, this.lastBufLvl = 0, this.bw1sec = i.create(u), this.rate1sec = i.create(u), this.lb1sec = i.create(u), this.bl1sec = i.create(u), this.interval500msec = void 0, this.timerCounter = 0
        }
        return s(t, [{
          key: "clearCounters",
          value: function () {
            this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.rateCustomTs1 = void 0, this.rateCustomTs2 = void 0, this.stopTime = void 0, this.lastBwTime = void 0, this.latencySubt = void 0, this.framesCount = 0, this.bytesTotal = 0, this.bytes1sec = 0, this.bytes500msec = 0, this.rate500msec = 0, this.rate500msecTs1 = void 0, this.rate500msecTs2 = void 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufLvlTotal = 0, this.bufTotalCnt = 0, this.bufLvl1sec = 0, this.buf1secCnt = 0, this.lastBufLvl = 0, this.timerCounter = 0
          }
        }, {
          key: "destroy",
          value: function () {
            this._clear500msecInterval(), this.bw1sec.clear(), this.rate1sec.clear(), this.bl1sec.clear(), this.lb1sec.clear()
          }
        }, {
          key: "stop",
          value: function () {
            this.enabled = !1, this.stopTime = new Date, this._clear500msecInterval()
          }
        }, {
          key: "start",
          value: function () {
            this.enabled || (this.enabled = !0, this.clearCounters(), this.startTime = new Date, this.interval500msec = setInterval(this._interval500msecHandler, 500))
          }
        }, {
          key: "isStarted",
          value: function () {
            return this.enabled
          }
        }, {
          key: "isReady",
          value: function () {
            return void 0 === this.enabled
          }
        }, {
          key: "startCustom",
          value: function () {
            this.pickCustom = !0, this.customStart = new Date, this.customStop = void 0, this.bytesCustom = 0, this.rateCustomTs1 = void 0, this.rateCustomTs2 = void 0
          }
        }, {
          key: "stopCustom",
          value: function () {
            this.pickCustom = !1, this.customStop = new Date
          }
        }, {
          key: "customRangeBandwidth",
          value: function () {
            var t = (this.customStop - this.customStart) / 1e3;
            return isNaN(t) && e.error("customRange error", this.customStart, this.customStop), this.bytesCustom / (128 * t)
          }
        }, {
          key: "customRangeRate",
          value: function () {
            var t = (this.rateCustomTs2 - this.rateCustomTs1) / this.timescale;
            return 0 == t || isNaN(t) ? 0 : this.bytesCustom / (128 * t)
          }
        }, {
          key: "reportBandwidth",
          value: function (t, e) {
            if (this.isStarted()) {
              var i = new Date;
              if (void 0 !== e) {
                var n = i / 1e3 - e / this.timescale;
                (void 0 == this.latencySubt || n < this.latencySubt) && (this.latencySubt = n), this.framesCount++
              }
              this.bytes500msec += t, this.bytes1sec += t, this.bytesTotal += t, this.pickCustom && (this.bytesCustom += t, void 0 === this.rateCustomTs1 && (this.rateCustomTs1 = e), this.rateCustomTs2 = e), this.lastBwTime = i, void 0 === this.rate500msecTs1 && (this.rate500msecTs1 = e), this.rate500msecTs2 = e, void 0 === this.rate1secTs1 && (this.rate1secTs1 = e), this.rate1secTs2 = e, void 0 === this.rateTotalTs1 && (this.rateTotalTs1 = e), this.rateTotalTs2 = e
            }
          }
        }, {
          key: "reportLowBuffer",
          value: function () {
            this.isStarted() && (this.lowBufTotal++, this.lowBuf1sec++)
          }
        }, {
          key: "reportBufLevel",
          value: function (t) {
            this.isStarted() && (this.bufLvlTotal += t, this.bufLvl1sec += t, this.lastBufLvl = t, this.bufTotalCnt++, this.buf1secCnt++)
          }
        }, {
          key: "avgBandwidth",
          value: function () {
            var t = 0;
            if (void 0 !== this.startTime) {
              var e = ((void 0 !== this.stopTime ? this.stopTime : new Date) - this.startTime) / 1e3;
              e > 0 && (t = this.bytesTotal / (128 * e))
            }
            return t
          }
        }, {
          key: "avgRate",
          value: function () {
            var t = (this.rateTotalTs2 - this.rateTotalTs1) / this.timescale;
            return 0 == t || isNaN(t) ? 0 : this.bytesTotal / (128 * t)
          }
        }, {
          key: "curRate1sec",
          value: function () {
            var t = (this.rate1secTs2 - this.rate1secTs1) / this.timescale;
            return 0 == t || isNaN(t) ? 0 : this.bytes1sec / (128 * t)
          }
        }, {
          key: "curRate500msec",
          value: function () {
            var t = (this.rate500msecTs2 - this.rate500msecTs1) / this.timescale;
            return 0 == t || isNaN(t) ? 0 : this.bytes500msec / (128 * t)
          }
        }, {
          key: "latestBandwidth",
          value: function () {
            var t = void 0;
            if (this.bw1sec.length() > 0) t = this.bw1sec.get(-1);
            else if (void 0 !== this.lastBwTime) {
              var e = ((void 0 !== this.stopTime ? this.stopTime : new Date) - this.lastBwTime) / 1e3;
              e > 0 && (t = this.bytes1sec / (128 * e))
            }
            return void 0 === t && (t = 0), t
          }
        }, {
          key: "latestRate",
          value: function () {
            var t = this.curRate1sec();
            if (this.rate1sec.length() > 0) {
              var e = this.rate1sec.get(-1);
              t = 0 == t ? e : (t + e) / 2
            }
            return t
          }
        }, {
          key: "latest500msecRate",
          value: function () {
            var t = this.curRate500msec(),
              e = this.rate500msec;
            return e > 0 && (t = 0 == t ? e : (t + e) / 2), t
          }
        }, {
          key: "latestLowBufferCount",
          value: function () {
            for (var t = this.lowBuf1sec, e = 0; e < 2; e++) this.lb1sec.length() > e && (t += this.lb1sec.get(-1 * (e + 1)));
            return t
          }
        }, {
          key: "latestBufLevel",
          value: function () {
            var t = this.buf1secCnt > 0 ? this.bufLvl1sec / this.buf1secCnt : void 0;
            if (this.bl1sec.length() > 0) {
              var e = this.bl1sec.get(-1);
              t = void 0 !== t ? (t + e) / 2 : e
            }
            return void 0 === t && (t = 0), t
          }
        }, {
          key: "lastBufLevel",
          value: function () {
            return this.lastBufLvl
          }
        }, {
          key: "_clear500msecInterval",
          value: function () {
            this.interval500msec && (clearInterval(this.interval500msec), this.interval500msec = void 0), this.timerCounter = 0
          }
        }, {
          key: "_printMetrics",
          value: function () {
            e.debug("Buffer level of " + this.id + " track:"), e.debug("1 sec:  [" + this.bl1sec.join(", ") + "]"), e.debug("Total:  [" + this.blTotal.join(", ") + "]"), e.debug("Bandwidth:"), e.debug("1 sec:  [" + this.bw1sec.join(", ") + "]"), e.debug("Total:  [" + this.bwTotal.join(", ") + "]"), e.debug("Low buffer:"), e.debug("1 sec:  [" + this.lb1sec.join(", ") + "]"), e.debug("Total:  [" + this.lbTotal.join(", ") + "]")
          }
        }]), t
      }();
    return {
      create: function (t, e, i) {
        return new n(t, e, i)
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    o = n(i(140)),
    a = n(i(11));
  e.default = function (t) {
    var e = a.default.create(t, "MetricsManager"),
      i = new o.default(t),
      n = function () {
        function t() {
          r(this, t), this.metricsList = {}
        }
        return s(t, [{
          key: "add",
          value: function (t, n, r) {
            void 0 !== this.metricsList[t] && e.error("metric for track ID " + t + " already exists");
            var s = i.create(t, n, r);
            return this.metricsList[t] = s, s
          }
        }, {
          key: "remove",
          value: function (t) {
            var i = this.metricsList[t];
            return i ? i.destroy() : e.error("remove: " + t + " not found"), this.metricsList[t] = void 0, i
          }
        }, {
          key: "isReadyToStart",
          value: function (t) {
            return this.metricsList[t] && this.metricsList[t].isReady()
          }
        }, {
          key: "run",
          value: function (t) {
            this.metricsList[t] ? this.metricsList[t].start() : e.error("run: " + t + " not found")
          }
        }, {
          key: "stop",
          value: function (t) {
            this.metricsList[t] ? this.metricsList[t].stop() : e.error("stop: no metric found for " + t + " track")
          }
        }, {
          key: "reportBandwidth",
          value: function (t, e, i) {
            this.metricsList[t] && this.metricsList[t].reportBandwidth(e, i)
          }
        }, {
          key: "reportLowBuffer",
          value: function (t) {
            this.metricsList[t] ? this.metricsList[t].reportLowBuffer() : e.error("report low buffer: No metric found for " + t + " track")
          }
        }, {
          key: "reportBufLevel",
          value: function (t, i) {
            this.metricsList[t] ? this.metricsList[t].reportBufLevel(i) : e.error("report buffer level: No metric found for " + t + " track")
          }
        }, {
          key: "getMetrics",
          value: function (t) {
            if (this.metricsList[t]) return this.metricsList[t];
            e.error("get metric: No metric found for " + t + " track")
          }
        }]), t
      }();
    return {
      create: function () {
        return new n
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(11)),
    s = n(i(94)),
    o = n(i(66));
  e.default = function (t) {
    function e() {
      function e() {
        if (void 0 == Ct.enter && (Ct.enter = new Date, Ct.initStart = !U), void 0 == Ct.time && D) {
          Ct.time = D.currentTime;
          var t = D.buffered.length;
          t > 0 && (Ct.bufTime = D.buffered.end(t - 1) - D.currentTime)
        }
        Ct.exit = void 0, Ct.ready = !1
      }

      function r() {
        var t = new Date;
        Ct.stopBuffer ? Ct.ready = !0 : !Ct.ready && D && D.buffered.length > 0 && (t - Ct.enter) / 1e3 > 2 * (D.currentTime - Ct.time) && D.buffered.end(D.buffered.length - 1) - D.currentTime > Ct.bufTime && (Ct.ready = !0), Ct.ready ? (Ct.exit = t, Ct.audioOnly = void 0 == N && void 0 !== j) : s()
      }

      function s() {
        Ct.stopBuffer = !1, Ct.audioOnly = !1, Ct.forcePlay = !1, Ct.bufTime = void 0, Ct.seekInd = void 0, Ct.seekTo = void 0, Ct.enter = void 0, Ct.time = void 0, Ct.exit = void 0, Ct.ready = !1
      }

      function a() {
        i.debug("_clearInitSwitchData"), Et.activated = !1, Et.from = void 0, Et.to = void 0, Et.aTime = void 0, Et.lastCurTime = void 0
      }

      function u(t, e) {
        var i = "vp8" == e || "vp9" == e ? "webm" : "mp4";
        return yt && "mp4a.40.34" == e ? t + "/" + i + '; codecs="mp3"' : t + "/" + i + '; codecs="' + e + '"'
      }

      function c(t) {
        return t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds()
      }

      function l() {
        void 0 !== $ && (clearTimeout($), $ = void 0)
      }

      function f() {
        return void 0 !== $
      }

      function h() {
        void 0 !== tt && (clearTimeout(tt), tt = void 0)
      }

      function d() {
        return void 0 == tt && !mt
      }

      function p() {
        void 0 !== Z && (i.debug("_cancelSeekTimer"), clearTimeout(Z), Z = void 0)
      }

      function v() {
        p(), i.debug("setSeekTimer"), Z = setTimeout(m, 5e3)
      }

      function m() {
        i.error("error seek timeout!"), W = !1, Z = void 0, nt()
      }

      function g(t, e) {
        var i = void 0;
        void 0 == e && (e = A());
        for (var n = 0; n < e.length; n++)
          if (t < e[n][1] && e[n][1] - e[n][0] >= _t) {
            var r = e[n][0];
            i = t >= r ? e[n][1] - t >= _t ? t : e[n][1] - _t : r;
            break
          }
        return void 0 == i && (i = e[e.length - 1][1] - _t) < e[e.length - 1][0] && (i = e[e.length - 1][0]), _(i), i
      }

      function _(t) {
        D.currentTime != t && (i.debug("seek", t, D.currentTime), D.currentTime = t)
      }

      function b() {
        if (D && D.buffered.length > 0) {
          i.debug("_seekToBufferedStart");
          for (var t = 0; t < O.length; t++) O[t].buffered.length > 0 && i.debug(O[t].stream_id + ": " + O[t].buffered.start(0), O[t].buffered.end(0));
          try {
            S() && y(), Ct.background && void 0 == Ct.enter && e(), U = !0
          } catch (t) {
            i.debug("seek to buffered start failed: ", t)
          }
        }
      }

      function y() {
        V.playbackTime = D.currentTime
      }

      function A() {
        var t = [],
          e = O.length;
        if (e > 1) {
          for (var i = [], n = 0; n < e; n++)
            for (var r = 0; r < O[n].buffered.length; r++) i.push([O[n].buffered.start(r), 0]), i.push([O[n].buffered.end(r), 1]);
          i.sort(function (t, e) {
            return t[0] - e[0]
          });
          for (var s = 0, o = 0; o < i.length; o++) 0 == i[o][1] ? e == ++s && t.push([i[o][0], void 0]) : e - 1 == --s && (t[t.length - 1][1] = i[o][0])
        } else if (e > 0)
          for (var a = 0; a < O[0].buffered.length; a++) t.push([O[0].buffered.start(a), O[0].buffered.end(a)]);
        return t
      }

      function w() {
        var t = 0;
        return gt.length > 0 && (t = gt[0], 2 == gt.length && gt[1] < t && (t = gt[1])), t
      }

      function S() {
        var t = D.currentTime,
          e = !1,
          n = A(),
          r = n.length;
        if (r > 0) {
          t < n[0][0] && (t = n[0][0], i.debug("Current position is behind the start of the first buffered range. Seek to the start."), e = !0);
          for (var s = 1; s < r; s++)
            if (t >= n[s - 1][1] && t < n[s][0] && n[s][1] - n[s][0] >= _t) {
              t = n[s][0], i.debug("Current position is between " + (s - 1) + " and " + s + " . Seek to the start of " + s), e = !0;
              break
            }
          if (e) _(t), l();
          else if (!mt)
            if (q.value == D.currentTime && q.value !== V.playbackTime) {
              q.count += 1;
              var o = (new Date - q.time) / 1e3;
              if (q.count > 10 && o > 2) {
                var a = D.currentTime + o,
                  u = F(a);
                void 0 === u && (u = a), i.debug("Stuck on " + q.value + ". Seek to " + u), g(u, n), l(), e = !0
              }
            } else q.time = new Date, q.value = D.currentTime, q.count = 1
        }
        return e
      }

      function k() {
        var t = D.currentTime;
        if (G && K && (t += (new Date - K) / 1e3), void 0 === z || t - z > 30)
          for (var e = 0; e < O.length; e++) {
            var i = O[e];
            if (i.buffered.length > 0) {
              var n = t - 30;
              n - i.buffered.start(0) > 60 && (i.removeRange(0, Math.round(n)), z = t)
            }
          }
      }

      function T(t) {
        var e = D.play();
        if (void 0 !== e) {
          var i = !t.recover;
          e.then(function () {
            Y = !0
          }).catch(function (t) {
            i && ot()
          })
        } else kt && !xt && (t.gesture ? xt = !0 : t.recover || ot())
      }

      function x() {
        i.debug("Seek start"), U && (W = !0, v())
      }

      function C() {
        if (i.debug("Seek end"), setTimeout(function () {
            W = !1
          }, 1e3), p(), Ct.forcePlay) {
          var t = D.play();
          void 0 !== t && t.catch(function (t) {
            i.error("_onSeekEnd play() error:", t)
          }), Ct.forcePlay = !1
        }
      }

      function E(t) {
        if (H)
          for (var e = 0; e < O.length; e++) O[e].addEventListener("updateend", function e() {
            if (!H) {
              for (var i = 0; i < O.length; i++) O[i].removeEventListener("updateend", e);
              t()
            }
          });
        else t()
      }

      function P() {
        var e = O.length;
        if (e > 0) {
          for (var n = 0; n < e; n++)
            if (O[n].closed) return;
          if (U) {
            if (G) k();
            else if (!Ct.background)
              if (Q) {
                i.debug("onProgress buffered in progress");
                var r = D.currentTime + (new Date - X) / 1e3;
                rt(r, D.currentTime)
              } else {
                var s = at(D.currentTime);
                if (o.default.display(t, "latency", s.toFixed(4)), W || H || D.ended || void 0 != Ct.exit) i.debug("onProgress nothing called, _seekInProgress " + W + ", _removeInProgress " + H + ", ended " + D.ended);
                else {
                  var u = A();
                  if (u.length > 0) {
                    var c = !1;
                    if (Et.activated && (Et.from > D.currentTime && (D.currentTime > Et.lastCurTime ? Et.lastCurTime = D.currentTime : D.currentTime == Et.lastCurTime && (Et.from = Et.lastCurTime)), void 0 !== Et.to)) {
                      var l = N ? N.buffered : D.buffered,
                        h = l.length,
                        p = l.start(h - 1);
                      i.debug("onProgress initswitch data to = " + Et.to + ", curTime = " + D.currentTime + ", bufRangeStart = " + p + ", videoBufEnd = " + l.end(h - 1)), p != Et.to && p >= D.currentTime && (p < Et.to ? Et.to - p < 2 && (Et.to = p) : p - Et.to < 2 ? Et.to = p : h > 1 && l.end(h - 2) - Et.to < dt && (Et.to = p));
                      var v = Et.to - D.currentTime;
                      Et.from <= D.currentTime && (Et.to <= l.end(h - 1) - .9 * dt || v < .1) && (v > 0 && (Et.to == p ? (i.debug("initswitch seek to range start " + p + " from " + D.currentTime, l.start(h - 1), l.end(h - 1)), _(p)) : (i.debug("initswitch seek to " + Et.to + " from " + D.currentTime, l.start(h - 1), l.end(h - 1)), g(Et.to, u)), c = !0), a())
                    }
                    if (c || !f() && !At || (c = S()), !c && void 0 == Et.to) {
                      var m = w();
                      if (d() && ht > 0 && m > ht && m > dt) {
                        var y = D.currentTime,
                          T = y + m - dt;
                        if (void 0 == pt || pt < T - 5) {
                          var x = B(T);
                          x && (i.debug("Adjust latency", x, m, x - y), pt = g(x, u), ut(y, pt))
                        } else i.debug("Latency is not adjusted, try next time");
                        c = !0
                      }
                      if (!c && void 0 == Et.to && (pt = void 0, N && D.getVideoPlaybackQuality && !mt)) {
                        var C = D.getVideoPlaybackQuality().totalVideoFrames;
                        if (C == J.frames && 0 !== J.time && V.playbackTime !== D.currentTime) {
                          if (0 == J.seekCount) {
                            J.count++;
                            var P = (new Date - J.time) / 1e3;
                            if (J.count > 10 && P > 3 && (P >= m && (P = m - .1), P > 0)) {
                              var I = D.currentTime + P,
                                L = F(I);
                              void 0 === L && (L = I), i.debug("Decoder freeze on " + J.frames + ". Seek to " + L + "."), g(L, u), J.seekCount++, c = !0
                            }
                          }
                        } else J.time = new Date, J.frames = C, J.count = 1, J.seekCount = 0
                      }
                    }
                    c || k(), it(D.currentTime, s), M()
                  }
                }
              }
          } else E(function () {
            b()
          })
        }
      }

      function B(t) {
        for (var e = void 0, i = vt.length() - 1; i >= 0; i--) {
          var n = vt.get(i);
          if (n < t - .2 * dt) break;
          if (n < t + .1 * dt) {
            e = n;
            break
          }
        }
        return e
      }

      function F(t) {
        for (var e = void 0, i = vt.length() - 1; i >= 0; i--) {
          var n = vt.get(i);
          if (n <= D.currentTime) break;
          if (n < t + .1) {
            e = n;
            break
          }
        }
        return e
      }

      function M() {
        At && Y && !G && D.paused && (i.debug("Force Safari to play from onProgress"), T({}))
      }

      function I() {
        D.removeEventListener("canplay", I), L(1), i.debug("canplay")
      }

      function L(t) {
        i.debug("setPlaybackRate", t, D.readyState), D.readyState <= 2 ? D.addEventListener("canplay", I) : D.playbackRate = t
      }
      var R = void 0,
        D = void 0,
        O = [],
        N = void 0,
        j = void 0,
        U = !1,
        V = {},
        H = !1,
        z = void 0,
        W = !1,
        Q = !1,
        Y = !1,
        G = !1,
        q = {
          value: 0,
          count: 0,
          time: 0
        },
        J = {
          frames: 0,
          count: 0,
          time: 0,
          seekCount: 0
        },
        K = void 0,
        X = void 0,
        Z = void 0,
        $ = void 0,
        tt = void 0,
        et = void 0,
        it = void 0,
        nt = void 0,
        rt = void 0,
        st = void 0,
        ot = void 0,
        at = void 0,
        ut = void 0,
        ct = void 0,
        lt = !1,
        ft = void 0,
        ht = -1,
        dt = 0,
        pt = void 0,
        vt = n.create(10),
        mt = !1,
        gt = [],
        _t = 0,
        bt = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        yt = "undefined" != typeof InstallTrigger,
        At = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
        wt = !!document.documentMode,
        St = !wt && !!window.StyleMedia,
        kt = ((!!window.chrome && !!window.chrome.webstore || bt) && window.CSS, /Android|Opera Mini/i.test(navigator.userAgent)),
        Tt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        xt = !1,
        Ct = {
          enter: void 0,
          exit: void 0,
          time: void 0,
          bufTime: void 0,
          background: !1,
          stopBuffer: !1,
          threshold: 600,
          ready: !1,
          seekTo: void 0,
          seekInd: void 0,
          audioOnly: !1,
          initStart: !1
        },
        Et = {
          activated: !1,
          from: void 0,
          to: void 0
        };
      document.addEventListener("visibilitychange", function () {
        document.hidden ? e() : Ct.background && (G ? s() : r()), Ct.background = document.hidden
      }), this.startLogging = function (t) {
        lt = !1, void 0 === ft && (ft = {}), void 0 === ft[t] && (ft[t] = {
          times: [],
          prevTime: 0,
          sumTime: 0,
          stamps: [],
          gaps: [],
          thresh: 60,
          avg: void 0
        })
      }, this.setPositionControl = function () {
        l(), $ = setTimeout(function () {
          l()
        }, 3e4)
      }, this.transitOn = function () {
        mt = !0
      }, this.transitOff = function () {
        mt = !1, ht > 0 && (h(), tt = setTimeout(function () {
          h()
        }, 5e3))
      }, this.setLatencyTolerance = function (t, e) {
        (ht = t) > 0 && ht < 3.5 && (wt || St) && (ht = 3.5), dt = e
      }, this.setLowBufferBorder = function (t) {
        var e = t + .1;
        e > _t && (_t = e)
      }, this.setCurrentBufferLevel = function (t, e) {
        2 == O.length ? gt["v" == t[0] ? 0 : 1] = e : gt[0] = e
      }, this.isMediaSourceSupported = function () {
        return "MediaSource" in window && !!window.MediaSource
      }, this.isMobile = function () {
        return kt
      }, this.isIOS = function () {
        return Tt
      }, this.isCodecSupported = function (t, e) {
        var i = !1;
        if (this.isMediaSourceSupported()) {
          if ((wt || St) && ("mp4a.40.34" == e || "mp4a.6B" == e || "mp4a.6B" == e)) return !1;
          i = MediaSource.isTypeSupported(u(t, e))
        }
        return i
      }, this.init = function (t) {
        et && I ? ((R = new MediaSource).addEventListener("sourceopen", et), (D = t).addEventListener("progress", P), D.addEventListener("timeupdate", P), D.addEventListener("seeking", x), D.addEventListener("seeked", C), D.src = URL.createObjectURL(R), !D.getVideoPlaybackQuality && "webkitDecodedFrameCount" in D && (D.getVideoPlaybackQuality = function () {
          return {
            droppedVideoFrames: this.webkitDroppedFrameCount,
            totalVideoFrames: this.webkitDecodedFrameCount
          }
        })) : i.error("Error: necessary callbacks are not defined.")
      }, this.listBuffers = function () {
        i.debug("listBuffers", O)
      }, this.createSourceBuffer = function (t, e, n, r) {
        function o(t, e) {
          var n = !0;
          try {
            t.appendBuffer(e)
          } catch (e) {
            var r = t.isVideo ? "Video frame " : "Audio frame ";
            i.error(r + "append exception!", e), n = !1
          }
          return n
        }

        function c(t, e) {
          t.updating ? t.addEventListener("updateend", function i() {
            t.updating || (t.removeEventListener("updateend", i), e())
          }) : e()
        }
        var l = R.addSourceBuffer(u(t, e));
        return l.mode = "segments", l.initSegment = void 0, l.segments = [], l.initPositions = [], l.sapPositions = [], l.appendedCount = 0, l.bufferLength = 0, l.fBufferLength = 0, l.timescale = n, l.isVideo = "video" == t, l.isVideo ? N = l : j = l, l.setTimestampOffset = function (t) {
          var e = this;
          c(e, function () {
            e.timestampOffset = t
          })
        }, l.filterOut = function (t) {
          if (void 0 !== t)
            for (var e = this.segments.length, i = 0; i < e; i++)
              if (this.segments[i].ts >= t) {
                var n = e - i;
                this.segments.splice(i, n), this.adjustPositions(i, !0), i < this.appendedCount && (this.appendedCount = i);
                break
              }
        }, l.getBufferingLength = function () {
          return this.bufferLength
        }, l.setBufferingLength = function (t) {
          this.bufferLength = t, this.fBufferLength = t
        }, l.pushInit = function (t, e) {
          var n = {
            init: !0,
            data: t
          };
          if (this.isVideo && !e) {
            var r = this.segments.length;
            if (r > 0) {
              var s = void 0;
              this.segments[r - 1].ts ? s = this.segments[r - 1].ts : r > 1 && this.segments[r - 2].ts && (s = this.segments[r - 2].ts), void 0 !== s && (Et.from = s / this.timescale, Et.activated = !0, i.debug("initswitch set from = " + Et.from))
            }
          }
          this.segments.push(n), this.initPositions.push(this.segments.length - 1), this.appendNextSegment()
        }, l.pushSegment = function (t, e, n) {
          if (Ct.background && !Ct.stopBuffer && this.segments.length > Ct.threshold && (i.debug("Throttle segments buffer", Ct.threshold), Ct.stopBuffer = !0), !Ct.background || !Ct.stopBuffer) {
            var r = {
              data: t,
              ts: e[0],
              sap: n[0]
            };
            Ct.ready && (this.isVideo || Ct.audioOnly) && n[0] && (r.starter = !0, Ct.ready = !1), this.segments.push(r), this.isVideo && r.sap && this.sapPositions.push(this.segments.length - 1), this.appendNextSegment()
          }
          lt && this.log(e)
        }, l.appendNextSegment = function () {
          var t = this;
          c(t, function () {
            t.closed || t.appendSegment()
          })
        }, l.appendSegment = function () {
          if (this.appendedCount < this.segments.length) {
            var t = this.segments[this.appendedCount];
            o(this, t.data) ? (this.appendedCount++, t.init ? this.onInitAppended(t) : (this.processThrottling(t), this.onSegmentAppended(t))) : (i.debug("Append " + (t.init ? "init " : "") + "segment error, reloading"), nt())
          }
        }, l.onInitAppended = function (t) {
          this.initSegment = t.data, this.appendedCount > 1 && (this.segments.splice(0, this.appendedCount - 1), this.adjustPositions(this.appendedCount - 1), this.appendedCount = 1)
        }, l.processThrottling = function (t) {
          if (t.starter) Ct.seekTo = this.buffered.end(this.buffered.length - 1), Ct.seekInd = Ct.seekTo + dt;
          else if (Ct.seekInd) {
            var e = this.isVideo || Ct.audioOnly,
              n = this.buffered.end(this.buffered.length - 1);
            if (e && n >= Ct.seekInd) {
              var r = !0;
              if (2 == O.length) {
                for (var o = 0, a = 0, u = 0; u < O.length; u++)
                  if (!O[u].isVideo) {
                    var c = O[u].buffered.length;
                    o = O[u].buffered.start(c - 1), a = O[u].buffered.end(c - 1);
                    break
                  }
                Ct.seekTo < o && (Ct.seekTo = o, Ct.seekInd = Ct.seekTo + dt), (Ct.seekInd > a || Ct.seekInd > n) && (r = !1)
              }
              r && (i.debug("Recover from throttling, jump to", Ct.seekTo), _(Ct.seekTo), s(), kt && (Ct.forcePlay = !0), Ct.initStart && (y(), Ct.initStart = !1))
            }
          }
        }, l.onSegmentAppended = function (t) {
          if (Et.activated && !Et.to && void 0 !== Et.from && t.sap) {
            var e = t.ts / this.timescale,
              n = this.buffered.length > 0 ? this.buffered.end(this.buffered.length - 1) : 0;
            if (e >= Et.from)
              if (this.isVideo) {
                Et.to = e, Et.lastCurTime = D.currentTime;
                var r = Et.lastCurTime - n;
                i.debug("initSwitch onSegmentAppended v = " + this.isVideo + ", to = " + Et.to + ", cur = " + Et.lastCurTime + ", end = " + n + ", timeDiff = " + r), r > 0 && (void 0 !== Et.aTime ? (Et.to = Et.aTime, i.debug("initSwitch onSegmentAppended set aTime = " + Et.aTime)) : j && j.buffered.length > 0 ? (i.debug("initSwitch onSegmentAppended set audioBuffer end = " + Et.aTime), Et.to = j.buffered.end(j.buffered.length - 1)) : (i.debug("initSwitch onSegmentAppended set euristics = " + Et.aTime), Et.to += D.currentTime - Et.from), i.debug("initSwitch onSegmentAppended seek back to " + Et.to), r = Et.to - Et.lastCurTime, Math.abs(r) < .5 && (i.debug("initSwitch onSegmentAppended seek because int = " + (Et.to - Et.lastCurTime)), _(Et.to), a()))
              } else void 0 === Et.aTime && (Et.aTime = e)
          }
          if (this.isVideo && t.sap) {
            var s = t.ts / this.timescale,
              o = this.buffered.length > 0 ? this.buffered.end(this.buffered.length - 1) : 0;
            s < o && (s = o), vt.push(s)
          }
          if (this.segments.length > this.bufferLength)
            if (this.isVideo) {
              var u = 0;
              this.sapPositions.length > 1 && this.sapPositions[1] <= this.appendedCount && this.sapPositions[1] <= this.segments.length - this.bufferLength && (u = this.sapPositions[1]), u > 0 && (this.segments.splice(0, u), this.appendedCount -= u, this.adjustPositions(u)), this.onVideoSegmentPushed(this.appendedCount)
            } else {
              var c = this.segments.length - this.bufferLength;
              c > this.appendedCount && (c = this.appendedCount), 1 == c ? this.segments.shift() : this.segments.splice(0, c), this.appendedCount -= c, this.adjustInitPositions(c)
            }
        }, l.adjustPositions = function (t, e) {
          var i = 0;
          if (e) {
            for (i = this.sapPositions.length - 1; i >= 0 && !(this.sapPositions[i] < t); i--);
            this.sapPositions.length = i + 1
          } else
            for (i = 0; i < this.sapPositions.length; i++) this.sapPositions[i] >= t ? this.sapPositions[i] -= t : (this.sapPositions.shift(), i--);
          this.adjustInitPositions(t, e)
        }, l.adjustInitPositions = function (t, e) {
          var i = 0;
          if (e) {
            for (i = this.initPositions.length - 1; i >= 0 && !(this.initPositions[i] < t); i--);
            this.initPositions.length = i + 1
          } else
            for (i = 0; i < this.initPositions.length; i++) this.initPositions[i] >= t ? this.initPositions[i] -= t : (this.initPositions.shift(), i--)
        }, l.isVideo && (l.onVideoSegmentPushed = function (t) {
          j && (j.bufferLength = Math.round(j.bufLenRatio * t))
        }), l.getSegments = function () {
          for (var t = void 0, e = 0; e < this.initPositions.length; e++)
            if ((t = this.initPositions[e]) == this.appendedCount) e + 1 == this.initPositions.length && (t = void 0, this.initSegment = void 0);
            else if (t > this.appendedCount) break;
          var i = 0;
          if (void 0 !== t)
            if (this.initSegment = this.segments[t].data, this.isVideo) {
              for (var n = 0; n < this.sapPositions.length; n++)
                if (this.sapPositions[n] > t) {
                  i = this.sapPositions[n];
                  break
                }
            } else i = t + 1;
          return {
            init: this.initSegment,
            segments: this.segments,
            start: i
          }
        }, l.removeAll = function () {
          this.abort(), this.initSegment = void 0, this.segments = [], this.sapPositions = [], this.initPositions = [], this.appendedCount = 0, this.buffered.length > 0 && this.removeRange(this.buffered.start(0), this.buffered.end(this.buffered.length - 1))
        }, l.removeRange = function (t, e) {
          var n = this;
          c(n, function () {
            i.debug("Remove started", t, e, D.currentTime, n.buffered.length), H = !0, n.remove(t, e), c(n, function () {
              i.debug("Remove ended"), H = !1
            })
          })
        }, lt && (l.log = function (t) {
          for (var e = ft[this.stream_id], n = 0; n < t.length; n++) {
            var r = e.stamps.length > 0 ? t[n] - e.stamps[e.stamps.length - 1] : 0,
              s = 0;
            if (e.times.length > 0) {
              var o = new Date;
              s = o - e.prevTime, e.prevTime = o
            } else e.prevTime = new Date;
            if (void 0 === e.avg)
              for (var a = 1; a < e.stamps.length; a++) {
                var u = e.stamps[a] - e.stamps[a - 1];
                if (u > 0) {
                  e.avg = u;
                  break
                }
              }
            if (e.stamps.length == e.thresh) {
              if (i.debug(this.stream_id + " processed " + e.thresh + " frames"), 0 == e.gaps.length) e.sumTime > e.avg * e.thresh * 1.1 && (i.debug("frames come slow!!!", e.sumTime, e.avg * e.thresh), i.debug("intervals: [" + e.times.join(", ") + "]"));
              else {
                for (var c = [], l = 0; l < e.gaps.length; l++) c.push("{val: " + e.gaps[l].val + ", idx: " + e.gaps[l].idx + "}");
                i.debug("Gaps: [" + c.join(", ") + "], avgDuration " + e.avg), i.debug("Stamps: [" + e.stamps.join(", ") + "]"), e.sumTime > e.avg * e.thresh * 1.1 && i.debug("Frames come slow!!!", e.sumTime, e.avg * e.thresh), i.debug("Intervals: [" + e.times.join(", ") + "]")
              }
              e.times = [], e.sumTime = 0, e.stamps = [], e.gaps = []
            }
            e.times.push(s), e.sumTime += s, e.stamps.push(t[n]), Math.abs(r - e.avg) > 1 && e.gaps.push({
              val: r,
              idx: e.stamps.length - 1
            })
          }
        }), l.addEventListener("error", function (t) {
          i.error("SourceBuffer Error", t, this.stream_id)
        }), l.stream_id = r, O.push(l), l
      }, this.startPlayback = function (t) {
        i.debug("startPlayback buffered ", D.buffered.length), D.buffered.length > 0 && i.debug("video element buffer", D.buffered.start(0), D.buffered.end(0)), j && N && (j.bufLenRatio = 2 * j.fBufferLength / N.fBufferLength), (0 == D.currentTime || G) && T(t || {})
      }, this.continue = function () {
        i.debug("continue buffered ", D.buffered.length), D.buffered.length > 0 && i.debug("video element buffer", D.buffered.start(0), D.buffered.end(0)), L(1), W && v(), J.count = 0, J.time = new Date, X = void 0, Q = !1
      }, this.wait = function () {
        L(0), p(), X = new Date, Q = !0, ct()
      }, this.callbacks = function (t) {
        et = t.onSourceOpen, it = t.onProgress, nt = t.onCrash, rt = t.onWaitUpdate, st = t.onPlayStarted, ot = t.onPlayFailed, at = t.onLatencyCalc, ut = t.onLatencySeek, ct = t.onLowBuffer
      }, this.resetPosition = function () {
        i.debug("reset position"), p(), l(), h(), D && 0 !== D.currentTime && (D.currentTime = 0), U = !1, V = {}, q = {
          value: 0,
          count: 0,
          time: 0
        }, J = {
          frames: 0,
          count: 0,
          time: 0,
          seekCount: 0
        }, z = void 0, K = void 0, X = void 0, pt = void 0, Y = !1, G = !1, Q = !1, H = !1, W = !1, mt = !1, gt = [], vt.clear();
        for (var t = 0; t < O.length; t++) O[t].initSegment = void 0, O[t].segments = [], O[t].sapPositions = [], O[t].initPositions = [], O[t].appendedCount = 0, O[t].bufferLength = 0, O[t].fBufferLength = 0;
        a(), s()
      }, this.handlePause = function () {
        D && !G && Y && (G = !0, Y = !1, K = new Date, p(), D.pause(), i.debug("Paused at: " + c(K)))
      }, this.handleEnterPip = function () {}, this.handleLeavePip = function () {
        D && D.paused && !G && T({})
      }, this.isPaused = function () {
        var t = void 0;
        return D && (t = G), t
      }, this.isSeeking = function () {
        var t = void 0;
        return D && (t = W || Ct.background || void 0 !== Ct.seekTo || void 0 !== Et.to), t
      }, this.handlePlay = function (t) {
        if (D && !Y && (Y = !0, G = !1, T({
            gesture: t
          }), K)) {
          var e = new Date,
            n = e - K;
          i.debug("Play at: " + c(e)), i.debug("Going to seek by " + n / 1e3 + " seconds.");
          var r = Math.ceil(D.currentTime + n / 1e3),
            s = A();
          if (s.length > 0) {
            var o = s[s.length - 1][1];
            i.debug("Calculated position " + r + ". Buffer end is " + o), o < r && (i.debug("Seek to buffer end " + o + " instead of " + r), r = o - _t)
          }
          var a = F(r);
          void 0 === a && (a = r), g(a)
        }
      }, this.handlePlayEvent = function () {
        U || E(function () {
          b(), st()
        })
      }, this.handlePauseEvent = function () {}, this.clear = function () {
        if (!At)
          for (var t = 0; t < O.length; t++) try {
            R.removeSourceBuffer(O[t])
          } catch (t) {
            i.error("Failed to remove source buffer:", t)
          }
        this.resetPosition(), O = [], N = void 0, j = void 0, D && (D.removeEventListener("progress", P), D.removeEventListener("timeupdate", P), D.removeEventListener("seeking", x), D.removeEventListener("seeked", C), URL.revokeObjectURL(D.src), D.removeAttribute("src"), D.load(), D = void 0), R && (R.removeEventListener("sourceopen", et), R = void 0), et = void 0, it = void 0, nt = void 0, i.debug("cleared source buffers and video element")
      }
    }
    var i = r.default.create(t, "MSE"),
      n = new s.default(t);
    return {
      create: function () {
        return new e
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(93)),
    s = n(i(97)),
    o = {
      name: "Nimble Player",
      composer: new r.default("test").create(),
      WSUtils: new s.default("test").create()
    };
  e.default = o
}, function (t, e, i) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    s = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(11));
  e.default = function (t) {
    var e = s.default.create(t, "Prober"),
      i = function () {
        function t(i, r, s, o, a) {
          n(this, t), this.enabled = !1, this.period = o, this.stream = r, this.timescale = s, this.streamId = parseInt("F0", 16) + i % 16, this.metricsManager = a, this.metricsManager.add(this.streamId, "probe", s), e.debug("constructor: " + r + ", timescale: " + s + ", period: " + o)
        }
        return r(t, [{
          key: "destroy",
          value: function () {
            this.metricsManager.remove(this.streamId), this._clearBufCheckInterval()
          }
        }, {
          key: "id",
          value: function () {
            return this.streamId
          }
        }, {
          key: "streamName",
          value: function () {
            return this.stream
          }
        }, {
          key: "start",
          value: function () {
            this.enabled = !0, this.durations = [], this.firstTimestamp = void 0, this.lastTimestamp = void 0, this.expectedEndTimestamp = void 0, this.startProbeCallback(this, this.period + 1)
          }
        }, {
          key: "isEnabled",
          value: function () {
            return this.enabled
          }
        }, {
          key: "stop",
          value: function () {
            this.isEnabled() && (this.enabled = !1, this.cancelProbeCallback(this), this.metricsManager.stop(this.streamId), this._clearBufCheckInterval())
          }
        }, {
          key: "receiveInit",
          value: function () {
            if (!this.bufCheckInterval && (this.initTime = new Date, this.initReceivedCallback(), this.period >= 1e3)) {
              var t = this;
              this.bufCheckInterval = setInterval(function () {
                if (t.firstTimestamp) {
                  var e = (t.lastTimestamp - t.firstTimestamp) / t.timescale - (new Date - t.initTime) / 1e3;
                  t.metricsManager.reportBufLevel(t.streamId, e), e <= 0 && t.metricsManager.reportLowBuffer(t.streamId)
                } else t.metricsManager.reportBufLevel(t.streamId, 0), t.metricsManager.reportLowBuffer(t.streamId)
              }, 500)
            }
          }
        }, {
          key: "receiveFrame",
          value: function (t, i, n) {
            if (void 0 === this.firstTimestamp ? (e.debug("receiveFrame: firstTimestamp " + n), this.firstTimestamp = n, this.expectedEndTimestamp = this.period * this.timescale / 1e3 + n) : this.durations.push(n - this.lastTimestamp), this.lastTimestamp = n, n + this._findDuration() > this.expectedEndTimestamp) {
              e.debug("receiveFrame: lastTimestamp " + n);
              var r = (n - this.firstTimestamp) / this.timescale - (new Date - this.initTime) / 1e3;
              this.metricsManager.reportBufLevel(this.streamId, r), r <= 0 && this.metricsManager.reportLowBuffer(this.streamId), this.stop(), this.probeFinishedCallback()
            }
          }
        }, {
          key: "_findDuration",
          value: function () {
            var t = 0,
              e = 0,
              i = {};
            for (e = 0; e < this.durations.length; e++) {
              var n = this.durations[e];
              i[n] = i[n] > 0 ? i[n] + 1 : 1
            }
            for (e in i)
              if (i[e] > 0) {
                var r = parseInt(e);
                r > 0 && (t = r)
              }
            return t
          }
        }, {
          key: "_clearBufCheckInterval",
          value: function () {
            this.bufCheckInterval && (clearInterval(this.bufCheckInterval), this.bufCheckInterval = void 0)
          }
        }, {
          key: "callbacks",
          set: function (t) {
            this.startProbeCallback = t.onStartProbe, this.cancelProbeCallback = t.onCancelProbe, this.initReceivedCallback = t.onInitReceived, this.probeFinishedCallback = t.onProbeFinished
          }
        }]), t
      }();
    return {
      create: function (t, e, n, r, s) {
        return new i(t, e, n, r, s)
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function r(t) {
    var e = t.getBoundingClientRect();
    return {
      top: e.top + pageYOffset,
      left: e.left + pageXOffset,
      right: e.right + pageXOffset
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    o = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(137)),
    a = function () {
      function t(e) {
        if (n(this, t), this._handleClicks = function (t) {
            if (this.doubleClickHandler) {
              var e = this;
              1 == ++this.clicks && setTimeout(function () {
                1 == e.clicks ? e.singleClickHandler && e.singleClickHandler(t) : e.doubleClickHandler && e.doubleClickHandler(t), e.clicks = 0
              }, 300)
            } else this.singleClickHandler && this.singleClickHandler(t)
          }.bind(this), this._handleEnterPip = function (t) {
            t.pictureInPictureWindow, this.pipMode = !0, this._onEnterPip && this._onEnterPip()
          }.bind(this), this._handleLeavePip = function (t) {
            this.pipMode = !1, this._onLeavePip && this._onLeavePip()
          }.bind(this), this._videoElementClick = function (t) {
            var e = !1;
            this.mobile_ctrl ? t.target != this.mobile_ctrl && t.target != this.mobile_ctrl_btn || (this.mobile_ctrl_visible ? e = !0 : this._showControlsForPeriod(4)) : t.target == this.video_element && (e = !0), e && this._playPauseBtnClick(t)
          }.bind(this), this._playPauseBtnClick = function (t) {
            this._isUserActionAcceptable() && (this.play_pause_button.classList.contains("sldp-icon-play") ? (this.video_element && this.hackPlayByPauseOnClick && (this.video_element.pause(), this.hackPlayByPauseOnClick = !1), this._handlePlay(!0)) : this._handlePause()), t.stopPropagation()
          }.bind(this), this._handlePlayEvent = function (t) {
            this.deactivated || (this.pipMode ? this._handlePlay() : this._onPlayEventCallback && this._onPlayEventCallback())
          }.bind(this), this._handlePauseEvent = function (t) {
            this.deactivated || (this.pipMode ? this._handlePause() : this._onPauseEventCallback && this._onPauseEventCallback())
          }.bind(this), this._configBtnClick = function (t) {
            this.cfg_dialog ? (this.cfg_dialog.remove(), delete this.cfg_dialog, this._showControlsForPeriod(2)) : (this.cfg_dialog = document.createElement("ul"), this.cfg_dialog.className = "sldp_cfg_dialog", this._updateCfgDialog(), this.player_wrapper.insertBefore(this.cfg_dialog, this.control_bar), this._showControlsForPeriod("infinite")), t.stopPropagation()
          }.bind(this), this._volumeBtnClick = function (t) {
            var e = 0;
            t.currentTarget.classList.contains("sldp-icon-volume-medium") ? this.video_element.prev_volume = this.video_element.volume : (void 0 == this.video_element.prev_volume && (0 != this.video_element.volume ? this.video_element.prev_volume = this.video_element.volume : this.video_element.prev_volume = 1), e = 100 * this.video_element.prev_volume), this._adjustVolume(e), this._showControlsForPeriod(2), t.stopPropagation()
          }.bind(this), this._expandBtnClick = function (t) {
            var e = this.player_wrapper;
            this._isFullscreenMode() ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen(), t && t.stopPropagation()
          }.bind(this), this._orientationchangeHandler = function (t) {
            this._isFullscreenMode() && this._updateDimensions()
          }.bind(this), this._fullscreenchangeHandler = function (t) {
            this._isFullscreenMode() ? (this.video_element.pw_width_prev = this.player_wrapper.style.width, this.video_element.pw_height_prev = this.player_wrapper.style.height, this.video_element.v_width_prev = this.video_element.style.width, this.video_element.v_height_prev = this.video_element.style.height, this.video_element.v_margin_prev = this.video_element.style.margin, this.video_element.style.margin = "", this._updateDimensions()) : (this.video_element.style.width = this.video_element.v_width_prev, this.video_element.style.height = this.video_element.v_height_prev, this.video_element.style.margin = this.video_element.v_margin_prev, this.player_wrapper.style.width = this.video_element.pw_width_prev, this.player_wrapper.style.height = this.video_element.pw_height_prev)
          }.bind(this), this._resizeHandler = function (t) {
            this._onResize && this._onResize()
          }.bind(this), this.settings = e, this.settings.video_element = void 0, this.settings.ar = void 0, this.pipMode = !1, this.can_play = this.settings.autoplay, this.hackPlayByPauseOnClick = !this.settings.autoplay, this.settings.video_element) this.video_element = document.getElementById(this.settings.video_element), this.storageId = this.settings.video_element, this.quality_ar = [], this.settings.controls = !1, this.settings.muted && (this.video_element.muted = !0), this._createResizeHandler(), this._createPipHandlers(), this._createPlayPauseHandlers();
        else if (this.container = document.getElementById(this.settings.container), this.storageId = this.settings.container, this.container) {
          this.quality_ar = [], this.css = new o.default, this._create_player_wrapper();
          var i = this.settings.audio_only ? "audio" : "video";
          this.video_element = document.createElement(i), this.video_element.muted = !!this.settings.muted, this._setSplashScreen(), this.settings.audio_only || void 0 != this.settings.height && (this.video_element.style.height = "100%", "number" == typeof this.settings.height ? this.player_wrapper.style.height = e.height + "px" : this.player_wrapper.style.height = this.settings.height), void 0 !== this.settings.width && (this.video_element.style.width = "100%", "number" == typeof this.settings.width ? this.player_wrapper.style.width = e.width + "px" : this.player_wrapper.style.width = this.settings.width), this.player_wrapper.appendChild(this.video_element), this._createHandlers(), this.settings.controls && (this._create_controls(), this.settings.audio_only && this.settings.audio_title && this._addMessage(this.settings.audio_title), this._create_loading_indicator()), this.settings.fullscreen && !this.settings.audio_only && this._expandBtnClick()
        }
      }
      return s(t, [{
        key: "removePip",
        value: function (t) {
          var e = this;
          this.pipMode ? (this.deactivated = !0, document.exitPictureInPicture().then(function () {
            e.pipMode = !1, t()
          })) : t()
        }
      }, {
        key: "destroy",
        value: function () {
          if (this.container) {
            for (this._removeHandlers(); this.container.firstChild;) this.container.removeChild(this.container.firstChild);
            this.play_pause_button = void 0, this.player_wrapper = void 0, this.mobile_ctrl_btn = void 0, this.mobile_ctrl = void 0, this.css.destroy()
          } else this._removeResizeHandler(), this._removePipHandlers(), this.video_element = void 0;
          this.quality_ar = []
        }
      }, {
        key: "showNotSupported",
        value: function (t) {
          if (this._removeSplashScreen(), this.container ? (this._removeHandlers(), this.settings.controls && this._removePlayerControls()) : (this._removeResizeHandler(), this._removePipHandlers()), t) {
            this.settings.video_element || (this.video_element.style.display = "none"), this._addMessage("In order to play this media you will need an application from App Store", '<a href="' + this.settings.ios_failback_app_url + '" style="vertical-align: middle;display:inline-block;overflow:hidden;background:url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg) no-repeat;width:202px;height:60px;background-size: 202px 60px;margin-right: 10px;"></a>');
            var e = this.settings.stream_url;
            if (e && e.length > 0) {
              var i = e.substring(0, 5);
              "ws://" == i ? e = this.settings.ios_failback_scheme + "://" + e.substring(5) : "wss:/" == i && (e = this.settings.ios_failback_secure_scheme + "://" + e.substring(6)), window.location = e
            }
          } else this._addMessage("MediaSource is not supported in current browser")
        }
      }, {
        key: "showNotPlaying",
        value: function () {
          this._removeSplashScreen(), this.settings.controls && this._togglePlayButton(!0), this._addMessage("No playable sources found"), this._showControlsForPeriod("infinite")
        }
      }, {
        key: "onPlaybackStarted",
        value: function () {
          this._removeSplashScreen()
        }
      }, {
        key: "onPlaybackFinished",
        value: function () {
          this._setSplashScreen()
        }
      }, {
        key: "adjustHeight",
        value: function (t, e) {
          this.video_element && this.player_wrapper && "100%" == e && (this.player_wrapper.style.height = this.container.offsetHeight + "px")
        }
      }, {
        key: "adjustX",
        value: function (t, e, i, n, r, s) {}
      }, {
        key: "adjustY",
        value: function (t, e, i, n, r) {}
      }, {
        key: "refresh",
        value: function () {
          if (this.cfg_dialog) {
            for (; this.cfg_dialog.firstChild;) this.cfg_dialog.removeChild(this.cfg_dialog.firstChild);
            this._updateCfgDialog()
          }
        }
      }, {
        key: "triggerPlay",
        value: function () {
          return this._handlePlay()
        }
      }, {
        key: "triggerPause",
        value: function (t) {
          this._handlePause(t)
        }
      }, {
        key: "triggerVolume",
        value: function (t) {
          this.video_element && (t > 100 ? t = 100 : t < 0 && (t = 0), this._adjustVolume(t))
        }
      }, {
        key: "getVolume",
        value: function () {
          if (this.video_element) {
            var t = 0;
            return this.video_element.muted || (t = 100 * this.video_element.volume), t
          }
        }
      }, {
        key: "setMuted",
        value: function () {
          this.video_element && !this.video_element.muted && (this.video_element.muted = !0, this._adjustVolume(100 * this.video_element.volume, !0))
        }
      }, {
        key: "_create_player_wrapper",
        value: function () {
          var t = document.createElement("div");
          if (t.className = this.settings.audio_only ? "sldp_player_wrp sldp_player_wrp_audio" : "sldp_player_wrp sldp_player_wrp_video", this.settings.controls && !this.settings.audio_only) {
            if (this.settings.autoplay && this._hideControlsAfterPeriod(2), this.settings.mobile) {
              this.mobile_ctrl = document.createElement("div"), this.mobile_ctrl.className = "sldp_mobile_ctrl", this.mobile_ctrl_btn = document.createElement("div");
              var e = this.settings.autoplay ? "sldp-icon-pause-o" : "sldp-icon-play-o";
              this.mobile_ctrl_btn.className = "sldp_mobile_ctrl_icon " + e, this.mobile_ctrl.appendChild(this.mobile_ctrl_btn), t.appendChild(this.mobile_ctrl)
            }
            t.onmousemove = function (t) {
              this.mobile_ctrl || this.settings.audio_only || (this.mouseClientX = t.clientX, this.mouseClientY = t.clientY, this._showControlsForPeriod(2))
            }.bind(this), t.onmouseout = function () {
              this.mobile_ctrl || this.settings.audio_only || (this.mouseClientX = this.mouseClientY = void 0, this._hideControls())
            }.bind(this)
          }
          this.container.appendChild(t), this.player_wrapper = t
        }
      }, {
        key: "_hideControls",
        value: function () {
          if (this.control_bar && !this.settings.audio_only && this.play_pause_button && this.play_pause_button.classList.contains("sldp-icon-pause")) {
            var t = !1;
            if (!this.mobile_ctrl && void 0 !== this.mouseClientX && void 0 !== this.mouseClientY) {
              var e = this.control_bar.getBoundingClientRect();
              e.left < this.mouseClientX && this.mouseClientX < e.right && e.top < this.mouseClientY && this.mouseClientY < e.bottom && (t = !0)
            }
            t ? this._hideControlsAfterPeriod(4) : this.cfg_dialog || (this.control_bar.style.opacity = "0", this.mobile_ctrl && (this.mobile_ctrl.style.opacity = "0", this.mobile_ctrl_visible = !1))
          }
        }
      }, {
        key: "_hideControlsAfterPeriod",
        value: function (t) {
          this.settings.controls && (this.control_hide_delay && (clearTimeout(this.control_hide_delay), this.control_hide_delay = void 0), this.settings.audio_only || (this.control_hide_delay = setTimeout(function () {
            this._hideControls()
          }.bind(this), 1e3 * t)))
        }
      }, {
        key: "_showControls",
        value: function () {
          this.control_bar && (this.control_bar.style.opacity = "1", this.mobile_ctrl && (this.mobile_ctrl.style.opacity = "1", this.mobile_ctrl_visible = !0))
        }
      }, {
        key: "_showControlsForPeriod",
        value: function (t) {
          this.settings.controls && (this._showControls(), this.control_hide_delay && (clearTimeout(this.control_hide_delay), this.control_hide_delay = void 0), "infinite" === t || this.settings.audio_only || (this.control_hide_delay = setTimeout(function () {
            this._hideControls()
          }.bind(this), 1e3 * t)))
        }
      }, {
        key: "_addMessage",
        value: function (t, e) {
          if (this.container) {
            this._removeMessage();
            var i = document.createElement("div");
            i.className = "sldp_message_wrp";
            var n = document.createElement("div");
            if (this.settings.audio_only ? (i.className = this.settings.controls ? "sldp_message_wrp" : "sldp_message_wrp sldp_message_wrp_audio_noctrl", n.className = "sldp_message") : (i.className = "sldp_message_wrp sldp_message_wrp_video", n.className = "sldp_message sldp_message_pad"), n.innerHTML = t, e) {
              var r = document.createElement("div");
              r.className = "ios_button", r.innerHTML = e, n.appendChild(r)
            }
            i.appendChild(n), this.player_wrapper.appendChild(i)
          }
        }
      }, {
        key: "_removeMessage",
        value: function () {
          if (this.container) {
            var t = this.player_wrapper.getElementsByClassName("sldp_message_wrp")[0];
            t && this.player_wrapper.removeChild(t)
          }
        }
      }, {
        key: "_create_controls",
        value: function () {
          var t = document.createElement("div");
          if (t.className = this.settings.audio_only ? "sldp_cbar sldp_cbar_audio" : "sldp_cbar sldp_cbar_video", !this.settings.audio_only) {
            var e = document.createElement("div");
            e.className = "sldp_expand_btn", e.classList.add("sldp_btn"), e.classList.add("sldp-icon-enlarge"), e.onclick = this._expandBtnClick, t.appendChild(e), this.expand_button = e;
            var i = document.createElement("div");
            i.className = "sldp_config_btn", i.classList.add("sldp_btn"), i.classList.add("sldp-icon-cog"), i.onclick = this._configBtnClick, t.appendChild(i), this.config_button = i
          }
          var n = document.createElement("div");
          n.className = "sldp_play_pause_btn", n.classList.add("sldp_btn"), n.classList.add(this.settings.autoplay ? "sldp-icon-pause" : "sldp-icon-play"), n.onclick = this._playPauseBtnClick, t.appendChild(n);
          var r = document.createElement("div");
          r.className = "sldp_volume_wrp " + (this.settings.mobile ? "sldp_volume_mobile" : "sldp_volume_desktop"), this.settings.mobile || this.settings.audio_only || (r.onmouseover = function (t) {
            this.volume_slider && (this.volume_slider.style.display = "block")
          }.bind(this), r.onmouseout = function (t) {
            this.volume_slider && (this.volume_slider.style.display = "none")
          }.bind(this)), t.appendChild(r);
        }
      }, {
        key: "_create_volume_slider",
        value: function () {
          var t = document.createElement("div");
          t.className = "sldp_volume_slider_wrp";
          var e = document.createElement("div");
          e.className = "sldp_volume_slider", this.thumb = document.createElement("div"), this.thumb.className = "sldp_volume_thumb", e.appendChild(this.thumb), t.appendChild(e), t.onmousedown = function (t) {
            this.video_element.prev_volume = this.video_element.volume;
            var i = r(e),
              n = r(this.thumb),
              s = t.pageX - (n.right - n.left) / 2 - i.left;
            s < 0 ? s = 0 : s > 100 && (s = 100), this._adjustVolume(s), t.stopPropagation()
          }.bind(this), this.thumb.onmousedown = function (t) {
            this.video_element.prev_volume = this.video_element.volume;
            var i = r(this.thumb),
              n = t.pageX - i.left,
              s = r(e);
            return document.onmousemove = function (t) {
              var i = t.pageX - n - s.left;
              i < 0 ? i = 0 : i > 100 && (i = 100);
              var r = e.offsetWidth - this.thumb.offsetWidth;
              0 == r && (r = 100), i > r && (i = r), this._adjustVolume(i)
            }.bind(this), document.onmouseup = function (t) {
              document.onmousemove = document.onmouseup = null
            }, t.stopPropagation(), !1
          }.bind(this), this.thumb.ondragstart = function () {
            return !1
          }, this.volume_wrapper.appendChild(t), this.volume_slider = e, this.settings.audio_only || (this.volume_slider.style.display = "none")
        }
      }, {
        key: "_setStoredVolume",
        value: function () {
          var t = 100;
          "localStorage" in window && (t = parseInt(window.localStorage.getItem("sldp_player_volume_" + this.storageId)), isNaN(t) && (t = 100)), this._adjustVolume(t, !0)
        }
      }, {
        key: "_adjustVolume",
        value: function (t, e) {
          this.thumb && (e && this.video_element.muted ? this.thumb.style.left = "0px" : this.thumb.style.left = t + "px");
          var i = t / 100;
          this.video_element.volume !== i && (this.video_element.volume = i, !e && this._onVolumeSet && this._onVolumeSet(t)), 0 == t || e && this.video_element.muted ? (this.video_element.muted = !0, this.volume_button && (this.volume_button.classList.remove("sldp-icon-volume-medium"), this.volume_button.classList.add("sldp-icon-volume-mute"))) : (this.video_element.muted = !1, this.volume_button && (this.volume_button.classList.remove("sldp-icon-volume-mute"), this.volume_button.classList.add("sldp-icon-volume-medium"))), this.settings.controls && "localStorage" in window && window.localStorage.setItem("sldp_player_volume_" + this.storageId, t)
        }
      }, {
        key: "_setSplashScreen",
        value: function () {
          this.container && this.settings.splash_screen && (this.video_element.style["background-image"] = "url('" + this.settings.splash_screen + "')", this.video_element.style["background-size"] = "cover")
        }
      }, {
        key: "_removeSplashScreen",
        value: function () {
          this.container && this.settings.splash_screen && (this.video_element.style["background-image"] = "", this.video_element.style["background-size"] = "", this.video_element.style.background = "#000")
        }
      }, {
        key: "_removePlayerControls",
        value: function () {
          var t = this.player_wrapper.getElementsByClassName("sldp_cbar")[0];
          t && this.player_wrapper.removeChild(t);
          var e = this.player_wrapper.getElementsByClassName("sldp_indicator")[0];
          e && this.player_wrapper.removeChild(e)
        }
      }, {
        key: "_handlePlay",
        value: function (t) {
          var e = !1;
          return this.can_play && (this.settings.audio_only && this.settings.audio_title ? this._addMessage(this.settings.audio_title) : this._removeMessage(), this._togglePlayButton(!1), this._onPlayCallback && (this._onPlayCallback(t), this._showControlsForPeriod(.5), e = !0)), e
        }
      }, {
        key: "_handlePause",
        value: function (t) {
          this._togglePlayButton(!0), !t && this._onPauseCallback && this._onPauseCallback(), this._showControlsForPeriod("infinite")
        }
      }, {
        key: "_togglePlayClass",
        value: function (t, e, i, n) {
          if (t) {
            var r = e ? n : i,
              s = e ? i : n;
            t.classList.remove(r), t.classList.add(s)
          }
        }
      }, {
        key: "_togglePlayButton",
        value: function (t) {
          this._togglePlayClass(this.play_pause_button, t, "sldp-icon-play", "sldp-icon-pause"), this._togglePlayClass(this.mobile_ctrl_btn, t, "sldp-icon-play-o", "sldp-icon-pause-o")
        }
      }, {
        key: "_updateCfgDialog",
        value: function () {
          for (var t = this, e = 0; e < this.quality_ar.length; e++) ! function (e) {
            var i = t.quality_ar[e].name,
              n = t.quality_ar[e].idx,
              r = document.createElement("li");
            i == t.cur_quality.name && n == t.cur_quality.idx && (i = "&#10003 " + i), r.innerHTML = i, r.onclick = function (t) {
              this._onQualityChangeCallback && (this._onQualityChangeCallback(i, n), this.cfg_dialog.remove(), delete this.cfg_dialog, this._hideControlsAfterPeriod(.5)), t.stopPropagation()
            }.bind(t), t.cfg_dialog.appendChild(r)
          }(e)
        }
      }, {
        key: "_isFullscreenMode",
        value: function () {
          return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
        }
      }, {
        key: "_updateDimensions",
        value: function () {
          this.video_element.style.width = screen.width, this.video_element.style.height = screen.height, this.player_wrapper.style.width = screen.width + "px", this.player_wrapper.style.height = screen.height + "px", this._resizeHandler()
        }
      }, {
        key: "_createHandlers",
        value: function () {
          this.clicks = 0, this.singleClickHandler = this.settings.controls ? this._videoElementClick : void 0, this.doubleClickHandler = void 0, this.settings.audio_only || (this.settings.mobile || (this.doubleClickHandler = this._expandBtnClick), this._createFullscreenHandler(), this._createResizeHandler(), this._createPipHandlers(), this._createOrientationChangeHandler()), this._createClicksHandler(), this._createPlayPauseHandlers()
        }
      }, {
        key: "_removeHandlers",
        value: function () {
          this.settings.audio_only || (this._removeFullscreenHandler(), this._removeResizeHandler(), this._removePipHandlers(), this._removeOrientationChangeHandler()), this.singleClickHandler = void 0, this.doubleClickHandler = void 0, this._removeClicksHandler()
        }
      }, {
        key: "_createClicksHandler",
        value: function () {
          this.player_wrapper.addEventListener("click", this._handleClicks, !1)
        }
      }, {
        key: "_removeClicksHandler",
        value: function () {
          this.player_wrapper.removeEventListener("click", this._handleClicks)
        }
      }, {
        key: "_createPlayPauseHandlers",
        value: function () {
          this.video_element.addEventListener("play", this._handlePlayEvent, !1), this.video_element.addEventListener("pause", this._handlePauseEvent, !1)
        }
      }, {
        key: "_removePlayPauseHandlers",
        value: function () {
          this.video_element.removeEventListener("play", this._handlePlayEvent), this.video_element.removeEventListener("pause", this._handlePauseEvent)
        }
      }, {
        key: "_createResizeHandler",
        value: function () {
          window.addEventListener("resize", this._resizeHandler, !1)
        }
      }, {
        key: "_removeResizeHandler",
        value: function () {
          window.removeEventListener("resize", this._resizeHandler)
        }
      }, {
        key: "_createPipHandlers",
        value: function () {
          window.addEventListener("enterpictureinpicture", this._handleEnterPip, !1), window.addEventListener("leavepictureinpicture", this._handleLeavePip, !1)
        }
      }, {
        key: "_removePipHandlers",
        value: function () {
          window.removeEventListener("enterpictureinpicture", this._handleEnterPip), window.removeEventListener("leavepictureinpicture", this._handleLeavePip), this.pipMode && (document.exitPictureInPicture(), this.pipMode = !1)
        }
      }, {
        key: "_createOrientationChangeHandler",
        value: function () {
          window.addEventListener("orientationchange", this._orientationchangeHandler, !1)
        }
      }, {
        key: "_removeOrientationChangeHandler",
        value: function () {
          window.removeEventListener("orientationchange", this._orientationchangeHandler)
        }
      }, {
        key: "_createFullscreenHandler",
        value: function () {
          document.addEventListener("webkitfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("mozfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("fullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("MSFullscreenChange", this._fullscreenchangeHandler, !1)
        }
      }, {
        key: "_removeFullscreenHandler",
        value: function () {
          document.removeEventListener("webkitfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("mozfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("fullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("MSFullscreenChange", this._fullscreenchangeHandler)
        }
      }, {
        key: "_create_loading_indicator",
        value: function () {
          var t = document.createElement("div");
          t.className = "sldp_indicator", this.player_wrapper.appendChild(t), this.indicator = {
            ui: this,
            fps: 60,
            element: t,
            counter: 0,
            percentage: 0,
            max_width: 1,
            release_duration: .5,
            start: function () {
              this.interval && clearInterval(this.interval), this.counter = 0, this.element.style.opacity = 1, this.max_width = this.ui.player_wrapper.offsetWidth, this.interval = setInterval(this.onInterval.bind(this), 1e3 / this.fps)
            },
            release: function () {
              this.interval && clearInterval(this.interval), this.counter = 0, this.percentage_per_frame = (100 - this.percentage) / (this.release_duration * this.fps), this.opacity_per_frame = .9 / (this.release_duration * this.fps), this.interval = setInterval(this.onReleaseInterval.bind(this), 1e3 / this.fps)
            },
            onInterval: function () {
              this.counter += 1, this.percentage = 8 * Math.log(this.counter), this.ajust_element_width(), 45 < this.percentage && this.release()
            },
            onReleaseInterval: function () {
              this.percentage += this.percentage_per_frame, 100 <= this.percentage && (this.percentage = 100, clearInterval(this.interval)), this.ajust_element_width();
              var t = parseFloat(this.element.style.opacity) || 1;
              this.element.style.opacity = "" + (t - this.opacity_per_frame)
            },
            ajust_element_width: function () {
              this.element.style.width = parseInt(.01 * this.max_width * this.percentage) + "px"
            }
          }, this.settings.autoplay && this.indicator.start()
        }
      }, {
        key: "videoElement",
        get: function () {
          return this.video_element
        }
      }, {
        key: "qualities",
        set: function (t) {
          this.quality_ar = t, this.cur_quality = t[0]
        }
      }, {
        key: "currentQuality",
        set: function (t) {
          this.cur_quality = t
        }
      }, {
        key: "onPlay",
        set: function (t) {
          this._onPlayCallback = t
        }
      }, {
        key: "onPlayEvent",
        set: function (t) {
          this._onPlayEventCallback = t
        }
      }, {
        key: "onPause",
        set: function (t) {
          this._onPauseCallback = t
        }
      }, {
        key: "onPauseEvent",
        set: function (t) {
          this._onPauseEventCallback = t
        }
      }, {
        key: "canPlay",
        set: function (t) {
          this.can_play = !!t
        }
      }, {
        key: "onQualityChange",
        set: function (t) {
          this._onQualityChangeCallback = t
        }
      }, {
        key: "onUserAction",
        set: function (t) {
          this._isUserActionAcceptable = t
        }
      }, {
        key: "onVolumeSet",
        set: function (t) {
          this._onVolumeSet = t
        }
      }, {
        key: "onResize",
        set: function (t) {
          this._onResize = t
        }
      }, {
        key: "onEnterPip",
        set: function (t) {
          this._onEnterPip = t
        }
      }, {
        key: "onLeavePip",
        set: function (t) {
          this._onLeavePip = t
        }
      }]), t
    }();
  e.default = a
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(151)),
    s = n(i(11));
  e.default = function (t) {
    function e() {
      function t(t, e, n, r, s) {
        var o = void 0,
          a = r,
          u = r - (o = t.lastSample).rawts;
        return (u < 0 || u > 10 * t.timescale) && (i.debug("Adjust DTS difference!!!", u), u = t.lastSampleDuration), r = o.ts + u, o.duration = u, o.altDur = Math.round(u / (t.timescale / 1e3)), t.lastSampleDuration = u, t.lastSample = {
          data: n,
          ts: r,
          rawts: a,
          altTs: Math.round(r / (t.timescale / 1e3)),
          sap: e
        }, o
      }

      function e(t) {
        var e = r.default.createElement("EBML", t);
        return r.default.createElement("EBMLVersion", e, 1), r.default.createElement("EBMLReadVersion", e, 1), r.default.createElement("EBMLMaxIDLength", e, 4), r.default.createElement("EBMLMaxSizeLength", e, 8), r.default.createElement("DocType", e, "webm"), r.default.createElement("DocTypeVersion", e, 2), r.default.createElement("DocTypeReadVersion", e, 2), e
      }

      function n(t) {
        var e = r.default.createElement("Segment", t);
        return e._unbound = !0, e
      }

      function s(t) {
        var e = r.default.createElement("SegmentInfo", t);
        return r.default.createElement("TimecodeScale", e, 1e6), r.default.createElement("MuxingApp", e, "sldp-player"), r.default.createElement("WritingApp", e, "sldp-player"), e
      }

      function o(t) {
        for (var e = r.default.createElement("Tracks", t), i = 0; i < c.length; i++) {
          var n = "video" == c[i].type,
            s = r.default.createElement("TrackEntry", e);
          if (r.default.createElement("TrackNumber", s, c[i].id), r.default.createElement("TrackUID", s, c[i].id), r.default.createElement("FlagLacing", s, 0), r.default.createElement("Language", s, "und"), r.default.createElement("CodecID", s, "V_" + c[i].codec), r.default.createElement("CodecName", s, c[i].codec), r.default.createElement("TrackType", s, n ? 1 : 2), n) {
            var o = r.default.createElement("Video", s);
            r.default.createElement("PixelWidth", o, c[i].width), r.default.createElement("PixelHeight", o, c[i].height)
          }
        }
        return e
      }

      function a(t, e, i) {
        var n = r.default.createElement("Cluster", t);
        r.default.createElement("Timecode", n, i[0].altTs);
        for (var s = 0, o = 0; o < i.length; o++) {
          var a = r.default.createElement("SimpleBlock", n);
          a.sap = i[o].sap, a.timecode = s, a.trackNumber = e.id, a.frame = i[o].data, s += i[o].altDur
        }
      }

      function u(t) {
        for (var e = void 0, n = 0; n < c.length; n++)
          if (c[n].id == t) {
            e = c[n];
            break
          }
        return void 0 === e && i.error("track ID " + t + " is not found!"), e
      }
      var c = [],
        l = 1;
      this.init = function () {
        c = [], l = 1
      }, this.addTrack = function (t, e) {
        var n = {
          id: l,
          type: t,
          timescale: e.timescale,
          curSeqNumber: 0,
          lastSampleDuration: 0
        };
        switch (t) {
        case "video":
          n.codec = e && "codec" in e ? e.codec : "VP8", n.width = e && "width" in e ? e.width : 0, n.height = e && "height" in e ? e.height : 0;
          break;
        case "audio":
          i.error("addTrack: audio is not supported!")
        }
        return c.push(n), l++, n
      }, this.setTrackParams = function (t, e) {
        var n = u(t);
        return n && ("width" in e && (n.width = e.width), "height" in e && (n.height = e.height), "timescale" in e && (n.timescale = e.timescale), "sequenceNumber" in e && (n.curSeqNumber = e.sequenceNumber), i.debug("setTrackParams", t, e)), n
      }, this.setBaseSample = function (t, e, n, r) {
        var s = u(t);
        s ? (i.debug("setBaseSample:", s.type, n), s.lastSample = {
          data: e,
          ts: n,
          rawts: n,
          altTs: Math.round(n / (s.timescale / 1e3)),
          sap: !0
        }) : i.error("setBaseSample: track " + t + " not found!!!")
      }, this.getRealTs = function (t, e) {
        var n = e,
          r = u(t);
        return r ? r.lastSample && Math.abs(e - r.lastSample.ts) > 10 * r.timescale && (n = e - r.lastSample.rawts + r.lastSample.ts) : i.error("getRealTs: track " + t + " not found"), n
      }, this.initSegment = function () {
        var t = r.default.createFile();
        e(t);
        var i = n(t);
        return s(i), o(i), t.write()
      }, this.mediaSegment = function (e, i, n) {
        var s = void 0,
          o = r.default.createFile(),
          c = u(e),
          l = [],
          f = [];
        if (c) {
          var h = 0,
            d = [];
          for (h = 0; h < i.length; h++) {
            var p = i[h],
              v = t(c, p.sap, p.data, p.ts);
            void 0 !== v && (d.push(v), l.push(v.ts), f.push(v.sap))
          }
          n && void 0 !== c.lastSample && (c.lastSample.duration = c.lastSampleDuration, d.push(c.lastSample), l.push(d[d.length - 1].ts), f.push(d[d.length - 1].sap), c.lastSample = void 0), d.length > 0 && (a(o, c, d), s = {
            ts: l,
            sap: f,
            sn: c ? c.curSeqNumber - 1 : void 0,
            data: o.write()
          })
        }
        return s
      }
    }
    var i = s.default.create(t, "WebmComposer");
    return {
      create: function () {
        return new e
      }
    }
  }
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(150)),
    s = n(i(50)),
    o = n(i(96)),
    a = function () {
      this._cursor = new s.default
    };
  a.create = function (t) {
    var e = new a;
    return e.type = t, e.boxes = [], e
  }, a.prototype._boxContainers = ["dinf", "mdia", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak"], a.prototype._boxProcessors = {}, a.prototype._writeFieldArray = function (t, e, i) {
    for (var n = 0; n < i.length; n++) this._writeField(t, e, i[n])
  }, a.prototype._writeFullBox = function () {
    this._writeField("uint", 8, this.version), this._writeField("uint", 24, this.flags)
  }, a.prototype._procEntries = function (t, e, i) {
    for (var n = 0; n < e; n++) i.call(this, this[t][n])
  }, a.prototype._procSubBoxes = function (t, e) {
    for (var i = 0; i < e; i++) this._rawo ? this[t][i].write() : this.size += this[t][i].getLength()
  }, a.prototype.append = function (t, e) {
    o.default.appendBox(this, t, e)
  }, a.prototype.getLength = function () {
    if (this._rawo = null, this.size = 0, this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type))
      for (var t = 0; t < this.boxes.length; t++) this.size += this.boxes[t].getLength();
    return this._data && this._writeData(this._data), this.size
  }, a.prototype.write = function () {
    if (this._cursor.offset = this._parent._cursor.offset, 0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size), this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type))
      for (var t = 0; t < this.boxes.length; t++) this.boxes[t].write();
    return this._data && this._writeData(this._data), this._parent._cursor.offset += this.size, this.size
  }, a.prototype._writeInt = function (t, e) {
    if (this._rawo) {
      var i = this._cursor.offset - this._rawo.byteOffset;
      switch (t) {
      case 8:
        this._rawo.setInt8(i, e);
        break;
      case 16:
        this._rawo.setInt16(i, e);
        break;
      case 32:
        this._rawo.setInt32(i, e);
        break;
      case 64:
        var n = Math.floor(e / Math.pow(2, 32)),
          r = e - n * Math.pow(2, 32);
        this._rawo.setUint32(i, n), this._rawo.setUint32(i + 4, r)
      }
      this._cursor.offset += t >> 3
    } else this.size += t >> 3
  }, a.prototype._writeUint = function (t, e) {
    if (this._rawo) {
      var i, n, r = this._cursor.offset - this._rawo.byteOffset;
      switch (t) {
      case 8:
        this._rawo.setUint8(r, e);
        break;
      case 16:
        this._rawo.setUint16(r, e);
        break;
      case 24:
        i = (16776960 & e) >> 8, n = 255 & e, this._rawo.setUint16(r, i), this._rawo.setUint8(r + 2, n);
        break;
      case 32:
        this._rawo.setUint32(r, e);
        break;
      case 64:
        n = e - (i = Math.floor(e / Math.pow(2, 32))) * Math.pow(2, 32), this._rawo.setUint32(r, i), this._rawo.setUint32(r + 4, n)
      }
      this._cursor.offset += t >> 3
    } else this.size += t >> 3
  }, a.prototype._writeString = function (t, e) {
    for (var i = 0; i < t; i++) this._writeUint(8, e.charCodeAt(i))
  }, a.prototype._writeTerminatedString = function (t) {
    if (0 !== t.length) {
      for (var e = 0; e < t.length; e++) this._writeUint(8, t.charCodeAt(e));
      this._writeUint(8, 0)
    }
  }, a.prototype._writeTemplate = function (t, e) {
    var i = Math.floor(e),
      n = (e - i) * Math.pow(2, t / 2);
    this._writeUint(t / 2, i), this._writeUint(t / 2, n)
  }, a.prototype._writeData = function (t) {
    if (t)
      if (this._rawo) {
        if (t instanceof Array) {
          for (var e = this._cursor.offset - this._rawo.byteOffset, i = 0; i < t.length; i++) this._rawo.setInt8(e + i, t[i]);
          this._cursor.offset += t.length
        }
        t instanceof Uint8Array && (this._root.bytes.set(t, this._cursor.offset), this._cursor.offset += t.length)
      } else this.size += t.length
  }, a.prototype._writeUTF8String = function (t) {
    var e = r.default.utf8ToByteArray(t);
    if (this._rawo)
      for (var i = new DataView(this._rawo.buffer, this._cursor.offset, e.length), n = 0; n < e.length; n++) i.setUint8(n, e[n]);
    else this.size += e.length
  }, a.prototype._writeField = function (t, e, i) {
    switch (t) {
    case "uint":
      this._writeUint(e, i);
      break;
    case "int":
      this._writeInt(e, i);
      break;
    case "template":
      this._writeTemplate(e, i);
      break;
    case "string":
      -1 == e ? this._writeTerminatedString(i) : this._writeString(e, i);
      break;
    case "data":
      this._writeData(i);
      break;
    case "utf8":
      this._writeUTF8String(i)
    }
  }, a.prototype._boxProcessors.avc1 = a.prototype._boxProcessors.encv = function () {
    this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeField("uint", 16, this.pre_defined1), this._writeField("uint", 16, this.reserved2), this._writeFieldArray("uint", 32, this.pre_defined2), this._writeField("uint", 16, this.width), this._writeField("uint", 16, this.height), this._writeField("template", 32, this.horizresolution), this._writeField("template", 32, this.vertresolution), this._writeField("uint", 32, this.reserved3), this._writeField("uint", 16, this.frame_count), this._writeFieldArray("uint", 8, this.compressorname), this._writeField("uint", 16, this.depth), this._writeField("int", 16, this.pre_defined3), this._writeField("data", -1, this.config), this._procSubBoxes("entries", this.entry_count)
  }, a.prototype._boxProcessors.dref = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count)
  }, a.prototype._boxProcessors.pasp = function () {
    this._writeField("uint", 32, this.hSpacing), this._writeField("uint", 32, this.vSpacing)
  }, a.prototype._boxProcessors.styp = a.prototype._boxProcessors.ftyp = function () {
    this._writeField("string", 4, this.major_brand), this._writeField("uint", 32, this.minor_version), this._writeFieldArray("string", 4, this.compatible_brands)
  }, a.prototype._boxProcessors.sidx = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.reference_ID), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.earliest_presentation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.first_offset), this._writeField("uint", 16, this.reserved), this._writeField("uint", 16, this.reference_count), this._procEntries("references", this.reference_count, function (t) {
      t.reference = (1 & t.reference_type) << 31, t.reference |= 2147483647 & t.referenced_size, t.sap = (1 & t.starts_with_SAP) << 31, t.sap |= (3 & t.SAP_type) << 28, t.sap |= 268435455 & t.SAP_delta_time, this._writeField("uint", 32, t.reference), this._writeField("uint", 32, t.subsegment_duration), this._writeField("uint", 32, t.sap)
    })
  }, a.prototype._boxProcessors.hdlr = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.pre_defined), this._writeField("string", 4, this.handler_type), this._writeFieldArray("uint", 32, this.reserved), this._writeField("string", -1, this.name)
  }, a.prototype._boxProcessors.mdat = function () {
    this._writeField("data", -1, this.data)
  }, a.prototype._boxProcessors.mdhd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), "string" == typeof this.language && (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96), this._writeField("uint", 16, this.language), this._writeField("uint", 16, this.pre_defined)
  }, a.prototype._boxProcessors.mehd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.fragment_duration)
  }, a.prototype._boxProcessors.mfhd = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.sequence_number)
  }, a.prototype._boxProcessors.mp4a = a.prototype._boxProcessors.enca = function () {
    this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._writeField("data", -1, this.esds)
  }, a.prototype._boxProcessors[".mp3"] = function () {
    this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._procSubBoxes("entries", this.entry_count)
  }, a.prototype._boxProcessors.btrt = function () {
    this._writeField("uint", 32, this.bufferSizeDB), this._writeField("uint", 32, this.maxBitrate), this._writeField("uint", 32, this.avgBitrate)
  }, a.prototype._boxProcessors.mvhd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeField("template", 32, this.rate), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved1), this._writeFieldArray("uint", 32, this.reserved2), this._writeFieldArray("template", 32, this.matrix), this._writeFieldArray("uint", 32, this.pre_defined), this._writeField("uint", 32, this.next_track_ID)
  }, a.prototype._boxProcessors.smhd = function () {
    this._writeFullBox(), this._writeField("uint", 16, this.balance), this._writeField("uint", 16, this.reserved)
  }, a.prototype._boxProcessors.stsd = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count)
  }, a.prototype._boxProcessors.tfdt = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.baseMediaDecodeTime)
  }, a.prototype._boxProcessors.tfhd = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.track_ID), 1 & this.flags && this._writeField("uint", 64, this.base_data_offset), 2 & this.flags && this._writeField("uint", 32, this.sample_description_offset), 8 & this.flags && this._writeField("uint", 32, this.default_sample_duration), 16 & this.flags && this._writeField("uint", 32, this.default_sample_size), 32 & this.flags && this._writeField("uint", 32, this.default_sample_flags)
  }, a.prototype._boxProcessors.tkhd = function () {
    this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.reserved1), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.layer), this._writeField("uint", 16, this.alternate_group), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved3), this._writeFieldArray("template", 32, this.matrix), this._writeField("template", 32, this.width), this._writeField("template", 32, this.height)
  }, a.prototype._boxProcessors.trex = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.default_sample_description_index), this._writeField("uint", 32, this.default_sample_duration), this._writeField("uint", 32, this.default_sample_size), this._writeField("uint", 32, this.default_sample_flags)
  }, a.prototype._boxProcessors.trun = function () {
    this._writeFullBox(), this._writeField("uint", 32, this.sample_count), 1 & this.flags && this._writeField("int", 32, this.data_offset), 4 & this.flags && this._writeField("uint", 32, this.first_sample_flags), this._procEntries("samples", this.sample_count, function (t) {
      256 & this.flags && this._writeField("uint", 32, t.sample_duration), 512 & this.flags && this._writeField("uint", 32, t.sample_size), 1024 & this.flags && this._writeField("uint", 32, t.sample_flags), 2048 & this.flags && this._writeField(1 === this.version ? "int" : "uint", 32, t.sample_composition_time_offset)
    })
  }, a.prototype._boxProcessors["url "] = a.prototype._boxProcessors["urn "] = function () {
    this._writeFullBox(), "urn " === this.type && this._writeField("string", -1, this.name), this._writeField("string", -1, this.location)
  }, a.prototype._boxProcessors.vmhd = function () {
    this._writeFullBox(), this._writeField("uint", 16, this.graphicsmode), this._writeFieldArray("uint", 16, this.opcolor)
  }, e.default = a
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(147)),
    s = n(i(149)),
    o = {};
  o.createFile = function () {
    return new s.default
  }, o.createBox = function (t, e, i) {
    var n = r.default.create(t);
    return e && e.append(n, i), n
  }, o.createFullBox = function (t, e, i) {
    var n = o.createBox(t, e, i);
    return n.version = 0, n.flags = 0, n
  }, e.default = o
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(50)),
    s = n(i(96)),
    o = function () {
      this._cursor = new r.default, this.boxes = []
    };
  o.prototype.write = function () {
    var t = 0,
      e = 0;
    for (e = 0; e < this.boxes.length; e++) t += this.boxes[e].getLength();
    var i = new Uint8Array(t);
    for (this._rawo = new DataView(i.buffer), this.bytes = i, this._cursor.offset = 0, e = 0; e < this.boxes.length; e++) this.boxes[e].write();
    return i.buffer
  }, o.prototype.append = function (t, e) {
    s.default.appendBox(this, t, e)
  }, e.default = o
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = {};
  n.dataViewToString = function (t, e) {
    var i = e || "utf-8";
    if ("undefined" != typeof TextDecoder) return new TextDecoder(i).decode(t);
    var n = [],
      r = 0;
    if ("utf-8" === i)
      for (; r < t.byteLength;) {
        var s = t.getUint8(r++);
        s < 128 || (s < 224 ? (s = (31 & s) << 6, s |= 63 & t.getUint8(r++)) : s < 240 ? (s = (15 & s) << 12, s |= (63 & t.getUint8(r++)) << 6, s |= 63 & t.getUint8(r++)) : (s = (7 & s) << 18, s |= (63 & t.getUint8(r++)) << 12, s |= (63 & t.getUint8(r++)) << 6, s |= 63 & t.getUint8(r++))), n.push(String.fromCharCode(s))
      } else
        for (; r < t.byteLength;) n.push(String.fromCharCode(t.getUint8(r++)));
    return n.join("")
  }, n.utf8ToByteArray = function (t) {
    var e, i;
    if ("undefined" != typeof TextEncoder) e = (new TextEncoder).encode(t);
    else
      for (e = [], i = 0; i < t.length; ++i) {
        var n = t.charCodeAt(i);
        n < 128 ? e.push(n) : n < 2048 ? (e.push(192 | n >> 6), e.push(128 | 63 & n)) : n < 65536 ? (e.push(224 | n >> 12), e.push(128 | 63 & n >> 6), e.push(128 | 63 & n)) : (e.push(240 | n >> 18), e.push(128 | 63 & n >> 12), e.push(128 | 63 & n >> 6), e.push(128 | 63 & n))
      }
    return e
  }, e.default = n
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(i(152)),
    s = n(i(153)),
    o = {};
  o.createFile = function () {
    return new s.default
  }, o.createElement = function (t, e, i) {
    var n = r.default.create(t, i);
    return e && (n._root = e._root ? e._root : e, n._parent = e, e.elements.push(n)), n
  }, e.default = o
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(50)),
    r = 281474976710656,
    s = {
      EBML: 440786851,
      EBMLVersion: 17030,
      EBMLReadVersion: 17143,
      EBMLMaxIDLength: 17138,
      EBMLMaxSizeLength: 17139,
      DocType: 17026,
      DocTypeVersion: 17031,
      DocTypeReadVersion: 17029,
      Segment: 408125543,
      SegmentInfo: 357149030,
      TimecodeScale: 2807729,
      MuxingApp: 19840,
      WritingApp: 22337,
      Duration: 17545,
      Tracks: 374648427,
      TrackEntry: 174,
      TrackNumber: 215,
      TrackUID: 29637,
      FlagLacing: 156,
      Language: 2274716,
      CodecID: 134,
      CodecName: 2459272,
      TrackType: 131,
      Video: 224,
      PixelWidth: 176,
      PixelHeight: 186,
      Cluster: 524531317,
      Timecode: 231,
      SimpleBlock: 163
    },
    o = function () {
      this._cursor = new n.default
    };
  o.create = function (t, e) {
    var i = new o;
    return i.id = s[t], i.elements = [], void 0 !== e && (i._data = e), i
  }, o.prototype._elemProcessors = {}, o.prototype.getLength = function () {
    this._rawo = null, this.size = 0, this._idLength = this._measureUint(this.id);
    for (var t = 0; t < this.elements.length; t++) this.size += this.elements[t].getLength();
    return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._unbound ? this._sizeLength = 1 : this._sizeLength = this._measureVarInt(this.size), this.size + this._idLength + this._sizeLength
  }, o.prototype.write = function () {
    this._cursor.offset = this._parent._cursor.offset;
    var t = this._idLength + this._sizeLength + this.size;
    0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, t), this._writeField("uint", this.id, this._idLength), this._unbound ? this._writeField("uint", 255, 1) : this._writeField("vint", this.size, this._sizeLength);
    for (var e = 0; e < this.elements.length; e++) this.elements[e].write();
    return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._parent._cursor.offset += t, t
  }, o.prototype._setU8 = function (t) {
    this._rawo.setUint8(this._viewOffset, t), this._viewOffset++
  }, o.prototype._writeData = function (t) {
    if (t)
      if (this._rawo) {
        if (t instanceof Array) {
          this._cursor.offset, this._rawo.byteOffset;
          for (var e = 0; e < t.length; e++) this._setU8(t[e]);
          this._cursor.offset += t.length
        }
        t instanceof Uint8Array && (this._root.bytes.set(t, this._cursor.offset), this._cursor.offset += t.length)
      } else this.size += t.length
  }, o.prototype._writeString = function (t) {
    if (this._rawo) {
      this._viewOffset = this._cursor.offset - this._rawo.byteOffset;
      for (var e = 0; e < t.length; e++) this._setU8(t.charCodeAt(e));
      this._cursor.offset += t.length
    } else this.size += t.length
  }, o.prototype._writeVarInt = function (t, e) {
    if (void 0 === e && (e = this._measureVarInt(t)), this._rawo) {
      switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, e) {
      case 1:
        this._setU8(128 | t);
        break;
      case 2:
        this._setU8(64 | t >> 8);
        break;
      case 3:
        this._setU8(32 | t >> 16);
        break;
      case 4:
        this._setU8(16 | t >> 24);
        break;
      case 5:
        this._setU8(8 | Math.floor(t / 4294967296));
        break;
      case 6:
        this._setU8(4 | Math.floor(t / 1099511627776));
        break;
      case 7:
        this._setU8(2 | Math.floor(t / r));
        break;
      case 8:
        this._setU8(1)
      }
      switch (e) {
      case 8:
        this._setU8(Math.floor(t / r));
      case 7:
        this._setU8(Math.floor(t / 1099511627776));
      case 6:
        this._setU8(Math.floor(t / 4294967296));
      case 5:
        this._setU8(t >> 24);
      case 4:
        this._setU8(t >> 16);
      case 3:
        this._setU8(t >> 8);
      case 2:
        this._setU8(t)
      }
      this._cursor.offset += e
    } else this.size += e
  }, o.prototype._writeUint = function (t, e) {
    if (void 0 === e && (e = this._measureUint(t)), this._rawo) {
      switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, e) {
      case 8:
        this._setU8(Math.floor(t / 72057594037927940));
      case 7:
        this._setU8(Math.floor(t / r));
      case 6:
        this._setU8(Math.floor(t / 1099511627776));
      case 5:
        this._setU8(Math.floor(t / 4294967296));
      case 4:
        this._setU8(t >> 24);
      case 3:
        this._setU8(t >> 16);
      case 2:
        this._setU8(t >> 8);
      case 1:
        this._setU8(t);
        break;
      default:
        throw new RuntimeException("Bad UINT size", e)
      }
      this._cursor.offset += e
    } else this.size += e
  }, o.prototype._measureVarInt = function (t) {
    if (t < 127) return 1;
    if (t < 16383) return 2;
    if (t < 2097151) return 3;
    if (t < 268435455) return 4;
    if (t < 34359738367) return 5;
    if (t < 4398046511103) return 6;
    if (t < 562949953421311) return 7;
    if (t < 72057594037927940) return 8;
    throw new RuntimeException("EBML VINT size not supported", t)
  }, o.prototype._measureUint = function (t) {
    return t < 256 ? 1 : t < 65536 ? 2 : t < 16777216 ? 3 : t < 4294967296 ? 4 : t < 1099511627776 ? 5 : t < r ? 6 : t < 72057594037927940 ? 7 : 8
  }, o.prototype._writeField = function (t, e, i) {
    switch (t) {
    case "uint":
      this._writeUint(e, i);
      break;
    case "vint":
      this._writeVarInt(e, i);
      break;
    case "string":
      this._writeString(e, i);
      break;
    case "data":
      this._writeData(e)
    }
  }, o.prototype._processData = function (t) {
    "number" == typeof t ? this._writeField("uint", t) : "string" == typeof t ? this._writeField("string", t) : this._writeField("data", t)
  }, o.prototype._elemProcessors[163] = function () {
    this._writeField("vint", this.trackNumber), this._writeField("uint", this.timecode, 2);
    var t = this.sap ? 128 : 0;
    this._writeField("uint", t, 1), this._writeField("data", this.frame)
  }, e.default = o
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(i(50)),
    r = function () {
      this._cursor = new n.default, this.elements = []
    };
  r.prototype.write = function () {
    var t = 0,
      e = 0;
    for (e = 0; e < this.elements.length; e++) t += this.elements[e].getLength();
    var i = new Uint8Array(t);
    for (this._rawo = new DataView(i.buffer), this.bytes = i, this._cursor.offset = 0, e = 0; e < this.elements.length; e++) this.elements[e].write();
    return i.buffer
  }, e.default = r
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    o = n(i(97)),
    a = n(i(11));
  e.default = function (t) {
    var e = a.default.create(t, "WS"),
      i = new o.default(t).create(),
      n = function () {
        function t(e) {
          r(this, t), this.metricsManager = e, this.stop_audio = !1, this.curSocketId = 0, this.isLogging = !1, this.loggerData = {
            video: {
              frames: [],
              prevTime: 0,
              sumTimes: 0,
              times: [],
              thresh: 60,
              avg: void 0
            },
            audio: {
              frames: [],
              prevTime: 0,
              sumTimes: 0,
              times: [],
              thresh: 60,
              avg: void 0
            }
          }
        }
        return s(t, [{
          key: "open",
          value: function (t) {
            function n(t, e) {
              t.isLogging && void 0 === t.loggerData[e] && (t.loggerData[e] = {
                frames: [],
                prevTime: 0,
                sumTimes: 0,
                times: [],
                thresh: 60,
                avg: void 0
              })
            }

            function r(t, i, n, r) {
              if (t.isLogging) {
                var s = t.loggerData[i],
                  o = 0;
                if (s.times.length > 0) {
                  var a = new Date;
                  o = a - s.prevTime, s.prevTime = a
                } else s.prevTime = new Date;
                if (s.frames.length == s.thresh) {
                  if (e.debug("received " + s.thresh + " " + i + " frames"), void 0 === s.avg)
                    for (var u = 1; u < s.thresh; u++) {
                      var c = s.frames[u][1] - s.frames[u - 1][1];
                      if (c > 0) {
                        s.avg = c;
                        break
                      }
                    }
                  for (var l = [], f = 0; f < s.frames.length; f++) l.push("[" + s.frames[f].join(" ") + "]");
                  e.debug("frames [" + l.join(", ") + "]"), s.sumTime > s.avg * s.thresh && e.debug("Frames come slow!!!", s.sumTime, s.avg * s.thresh), s.frames = [], s.times = [], s.sumTimes = 0
                }
                s.frames.push([r, n, o]), s.sumTimes += o, s.times.push(o)
              }
            }
            try {
              var s = t.substring(0, 5);
              if ("ws://" != s && "wss:/" != s && (t = "ws://" + t), void 0 !== this.socket) throw e.error("attempt to open socket when socket exists!", this.socket, t), "Socket open error";
              this.socket = new WebSocket(t, ["sldp.softvelum.com"])
            } catch (t) {
              return e.error("" + t.message), !1
            }
            return this.socket.binaryType = "arraybuffer", this.socket.sampleCounter = 0, this.socket.transport = this, this.socket.socketId = ++this.curSocketId, this.socket.streamURL = t, this.socket.onopen = function () {
              e.debug("Connection established.")
            }, this.socket.onclose = function (t) {
              t.wasClean ? e.debug("Connection closed clean") : (e.debug("Connection dropped", this), this.socketId == this.transport.curSocketId && (3 == this.readyState && (this.transport.socket = void 0), this.transport.onConnectionClosedCallback && (e.debug("Call onConnectionClosed"), this.transport.onConnectionClosedCallback())));
              var n = i.closeCodes[t.code] || "";
              e.debug("Close code " + t.code + "(" + n + ") reason: " + t.reason)
            }, this.socket.onmessage = function (t) {
              if (t.data instanceof ArrayBuffer) {
                var s = new Uint8Array(t.data),
                  o = s[0],
                  a = s[1],
                  u = 0,
                  c = 0,
                  l = s.byteLength;
                switch (a) {
                case i.liveFrameTypes.WEB_AAC_SEQUENCE_HEADER:
                case i.liveFrameTypes.WEB_AVC_SEQUENCE_HEADER:
                  if (e.debug((2 === a ? "video" : "audio") + " init segment, trackId: " + o), this.transport.onInitSegmentReceivedCallback) {
                    var f = s.subarray(2, l);
                    this.transport.onInitSegmentReceivedCallback(o, f), this.transport.metricsManager.run(o), n(this.transport, o)
                  }
                  break;
                case i.liveFrameTypes.WEB_MP3:
                  if (this.transport.metricsManager.isReadyToStart(o)) {
                    var h = s.subarray(10, 14);
                    this.transport.onInitSegmentReceivedCallback(o, h), this.transport.metricsManager.run(o), n(this.transport, o)
                  }
                case i.liveFrameTypes.WEB_AAC_FRAME:
                  if (this.transport.onDataReceivedCallback && 0 == this.transport.stop_audio) {
                    u = i.readValue(s, 2, 8);
                    var d = s.subarray(10, l);
                    this.transport.onDataReceivedCallback(o, !0, d, u, 0), r(this.transport, "audio", u, o)
                  }
                  break;
                case i.liveFrameTypes.WEB_AVC_KEY_FRAME:
                case i.liveFrameTypes.WEB_AVC_FRAME:
                  if (this.transport.onDataReceivedCallback) {
                    u = i.readValue(s, 2, 8), c = i.readValue(s, 10, 4);
                    var p = s.subarray(14, l),
                      v = i.liveFrameTypes.WEB_AVC_KEY_FRAME == a;
                    this.transport.onDataReceivedCallback(o, v, p, u, c), r(this.transport, "video", u, o)
                  }
                  break;
                case i.liveFrameTypes.WEB_VP8_KEY_FRAME:
                case i.liveFrameTypes.WEB_VP9_KEY_FRAME:
                  this.transport.metricsManager.isReadyToStart(o) && (this.transport.onInitSegmentReceivedCallback(o, null), this.transport.metricsManager.run(o), n(this.transport, o));
                case i.liveFrameTypes.WEB_VP8_FRAME:
                case i.liveFrameTypes.WEB_VP9_FRAME:
                  if (this.transport.onDataReceivedCallback) {
                    u = i.readValue(s, 2, 8);
                    var m = s.subarray(10, l),
                      g = i.liveFrameTypes.WEB_VP8_KEY_FRAME == a || i.liveFrameTypes.WEB_VP9_KEY_FRAME == a;
                    this.transport.onDataReceivedCallback(o, g, m, u, 0)
                  }
                  break;
                default:
                  e.error("Unknown type of frame received ", a)
                }
                this.transport.metricsManager.reportBandwidth(o, l, u + c), 0 == this.sampleCounter % 1e3 && e.debug("sampleCounter", this.sampleCounter), this.sampleCounter += 1
              } else {
                e.debug("Command received", t.data);
                var _ = JSON.parse(t.data);
                "status" == _.command && this.transport.onStatusReceivedCallback && this.transport.onStatusReceivedCallback(_.info)
              }
            }, this.socket.onerror = function (t) {
              e.error("Error happened:", t)
            }, this.socket
          }
        }, {
          key: "send",
          value: function (t) {
            this.socket && this.socket.send(JSON.stringify(t))
          }
        }, {
          key: "close",
          value: function () {
            e.debug("socket close ", this.socket), this.socket && (this.socket.close(1e3), this.socket = void 0), this.onStatusReceivedCallback = void 0, this.onInitSegmentReceivedCallback = void 0, this.onDataReceivedCallback = void 0, this.onConnectionClosedCallback = void 0
          }
        }, {
          key: "callbacks",
          set: function (t) {
            this.onStatusReceivedCallback = t.onStatusReceived, this.onInitSegmentReceivedCallback = t.onInitSegmentReceived, this.onDataReceivedCallback = t.onDataReceived, this.onConnectionClosedCallback = t.onConnectionClosed
          }
        }]), t
      }();
    return {
      create: function (t) {
        return new n(t)
      }
    }
  }
}, function (t, e, i) {
  i(162), t.exports = i(20).RegExp.escape
}, function (t, e, i) {
  var n = i(4),
    r = i(55),
    s = i(5)("species");
  t.exports = function (t) {
    var e;
    return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), n(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? Array : e
  }
}, function (t, e, i) {
  "use strict";
  var n = i(3),
    r = Date.prototype.getTime,
    s = Date.prototype.toISOString,
    o = function (t) {
      return t > 9 ? t : "0" + t
    };
  t.exports = n(function () {
    return "0385-07-25T07:06:39.999Z" != s.call(new Date(-5e13 - 1))
  }) || !n(function () {
    s.call(new Date(NaN))
  }) ? function () {
    if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
    var t = this,
      e = t.getUTCFullYear(),
      i = t.getUTCMilliseconds(),
      n = e < 0 ? "-" : e > 9999 ? "+" : "";
    return n + ("00000" + Math.abs(e)).slice(n ? -6 : -4) + "-" + o(t.getUTCMonth() + 1) + "-" + o(t.getUTCDate()) + "T" + o(t.getUTCHours()) + ":" + o(t.getUTCMinutes()) + ":" + o(t.getUTCSeconds()) + "." + (i > 99 ? i : "0" + o(i)) + "Z"
  } : s
}, function (t, e, i) {
  "use strict";
  var n = i(1),
    r = i(27);
  t.exports = function (t) {
    if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
    return r(n(this), "number" != t)
  }
}, function (t, e, i) {
  var n = i(37),
    r = i(59),
    s = i(49);
  t.exports = function (t) {
    var e = n(t),
      i = r.f;
    if (i)
      for (var o, a = i(t), u = s.f, c = 0; a.length > c;) u.call(t, o = a[c++]) && e.push(o);
    return e
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var i = e === Object(e) ? function (t) {
      return e[t]
    } : e;
    return function (e) {
      return String(e).replace(t, i)
    }
  }
}, function (t, e) {
  t.exports = Object.is || function (t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
  }
}, function (t, e, i) {
  var n = i(0),
    r = i(160)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  n(n.S, "RegExp", {
    escape: function (t) {
      return r(t)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.P, "Array", {
    copyWithin: i(99)
  }), i(30)("copyWithin")
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(4);
  n(n.P + n.F * !i(22)([].every, !0), "Array", {
    every: function (t) {
      return r(this, t, arguments[1])
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.P, "Array", {
    fill: i(67)
  }), i(30)("fill")
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(2);
  n(n.P + n.F * !i(22)([].filter, !0), "Array", {
    filter: function (t) {
      return r(this, t, arguments[1])
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(6),
    s = "findIndex",
    o = !0;
  s in [] && Array(1)[s](function () {
    o = !1
  }), n(n.P + n.F * o, "Array", {
    findIndex: function (t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), i(30)(s)
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(5),
    s = !0;
  "find" in [] && Array(1).find(function () {
    s = !1
  }), n(n.P + n.F * s, "Array", {
    find: function (t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), i(30)("find")
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(0),
    s = i(22)([].forEach, !0);
  n(n.P + n.F * !s, "Array", {
    forEach: function (t) {
      return r(this, t, arguments[1])
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(21),
    r = i(0),
    s = i(9),
    o = i(110),
    a = i(75),
    u = i(8),
    c = i(69),
    l = i(91);
  r(r.S + r.F * !i(57)(function (t) {
    Array.from(t)
  }), "Array", {
    from: function (t) {
      var e, i, r, f, h = s(t),
        d = "function" == typeof this ? this : Array,
        p = arguments.length,
        v = p > 1 ? arguments[1] : void 0,
        m = void 0 !== v,
        g = 0,
        _ = l(h);
      if (m && (v = n(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == _ || d == Array && a(_))
        for (i = new d(e = u(h.length)); e > g; g++) c(i, g, m ? v(h[g], g) : h[g]);
      else
        for (f = _.call(h), i = new d; !(r = f.next()).done; g++) c(i, g, m ? o(f, v, [r.value, g], !0) : r.value);
      return i.length = g, i
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(51)(!1),
    s = [].indexOf,
    o = !!s && 1 / [1].indexOf(1, -0) < 0;
  n(n.P + n.F * (o || !i(22)(s)), "Array", {
    indexOf: function (t) {
      return o ? s.apply(this, arguments) || 0 : r(this, t, arguments[1])
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Array", {
    isArray: i(55)
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(18),
    s = [].join;
  n(n.P + n.F * (i(48) != Object || !i(22)(s)), "Array", {
    join: function (t) {
      return s.call(r(this), void 0 === t ? "," : t)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(18),
    s = i(26),
    o = i(8),
    a = [].lastIndexOf,
    u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
  n(n.P + n.F * (u || !i(22)(a)), "Array", {
    lastIndexOf: function (t) {
      if (u) return a.apply(this, arguments) || 0;
      var e = r(this),
        i = o(e.length),
        n = i - 1;
      for (arguments.length > 1 && (n = Math.min(n, s(arguments[1]))), n < 0 && (n = i + n); n >= 0; n--)
        if (n in e && e[n] === t) return n || 0;
      return -1
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(1);
  n(n.P + n.F * !i(22)([].map, !0), "Array", {
    map: function (t) {
      return r(this, t, arguments[1])
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(69);
  n(n.S + n.F * i(3)(function () {
    function t() {}
    return !(Array.of.call(t) instanceof t)
  }), "Array", { of : function () {
      for (var t = 0, e = arguments.length, i = new("function" == typeof this ? this : Array)(e); e > t;) r(i, t, arguments[t++]);
      return i.length = e, i
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(101);
  n(n.P + n.F * !i(22)([].reduceRight, !0), "Array", {
    reduceRight: function (t) {
      return r(this, t, arguments.length, arguments[1], !0)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(101);
  n(n.P + n.F * !i(22)([].reduce, !0), "Array", {
    reduce: function (t) {
      return r(this, t, arguments.length, arguments[1], !1)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(73),
    s = i(19),
    o = i(41),
    a = i(8),
    u = [].slice;
  n(n.P + n.F * i(3)(function () {
    r && u.call(r)
  }), "Array", {
    slice: function (t, e) {
      var i = a(this.length),
        n = s(this);
      if (e = void 0 === e ? i : e, "Array" == n) return u.call(this, t, e);
      for (var r = o(t, i), c = o(e, i), l = a(c - r), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == n ? this.charAt(r + h) : this[r + h];
      return f
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(23)(3);
  n(n.P + n.F * !i(22)([].some, !0), "Array", {
    some: function (t) {
      return r(this, t, arguments[1])
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(10),
    s = i(9),
    o = i(3),
    a = [].sort,
    u = [1, 2, 3];
  n(n.P + n.F * (o(function () {
    u.sort(void 0)
  }) || !o(function () {
    u.sort(null)
  }) || !i(22)(a)), "Array", {
    sort: function (t) {
      return void 0 === t ? a.call(s(this)) : a.call(s(this), r(t))
    }
  })
}, function (t, e, i) {
  i(40)("Array")
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Date", {
    now: function () {
      return (new Date).getTime()
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(157);
  n(n.P + n.F * (Date.prototype.toISOString !== r), "Date", {
    toISOString: r
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(9),
    s = i(27);
  n(n.P + n.F * i(3)(function () {
    return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
      toISOString: function () {
        return 1
      }
    })
  }), "Date", {
    toJSON: function (t) {
      var e = r(this),
        i = s(e);
      return "number" != typeof i || isFinite(i) ? e.toISOString() : null
    }
  })
}, function (t, e, i) {
  var n = i(5)("toPrimitive"),
    r = Date.prototype;
  n in r || i(12)(r, n, i(158))
}, function (t, e, i) {
  var n = Date.prototype,
    r = n.toString,
    s = n.getTime;
  new Date(NaN) + "" != "Invalid Date" && i(13)(n, "toString", function () {
    var t = s.call(this);
    return t === t ? r.call(this) : "Invalid Date"
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.P, "Function", {
    bind: i(102)
  })
}, function (t, e, i) {
  "use strict";
  var n = i(4),
    r = i(17),
    s = i(5)("hasInstance"),
    o = Function.prototype;
  s in o || i(7).f(o, s, {
    value: function (t) {
      if ("function" != typeof this || !n(t)) return !1;
      if (!n(this.prototype)) return t instanceof this;
      for (; t = r(t);)
        if (this.prototype === t) return !0;
      return !1
    }
  })
}, function (t, e, i) {
  var n = i(7).f,
    r = Function.prototype,
    s = /^\s*function ([^ (]*)/;
  "name" in r || i(6) && n(r, "name", {
    configurable: !0,
    get: function () {
      try {
        return ("" + this).match(s)[1]
      } catch (t) {
        return ""
      }
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(113),
    s = Math.sqrt,
    o = Math.acosh;
  n(n.S + n.F * !(o && 710 == Math.floor(o(Number.MAX_VALUE)) && o(1 / 0) == 1 / 0), "Math", {
    acosh: function (t) {
      return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + s(t - 1) * s(t + 1))
    }
  })
}, function (t, e, i) {
  function n(t) {
    return isFinite(t = +t) && 0 != t ? t < 0 ? -n(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
  }
  var r = i(0),
    s = Math.asinh;
  r(r.S + r.F * !(s && 1 / s(0) > 0), "Math", {
    asinh: n
  })
}, function (t, e, i) {
  var n = i(0),
    r = Math.atanh;
  n(n.S + n.F * !(r && 1 / r(-0) < 0), "Math", {
    atanh: function (t) {
      return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(79);
  n(n.S, "Math", {
    cbrt: function (t) {
      return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    clz32: function (t) {
      return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = Math.exp;
  n(n.S, "Math", {
    cosh: function (t) {
      return (r(t = +t) + r(-t)) / 2
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(78);
  n(n.S + n.F * (r != Math.expm1), "Math", {
    expm1: r
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    fround: i(112)
  })
}, function (t, e, i) {
  var n = i(0),
    r = Math.abs;
  n(n.S, "Math", {
    hypot: function (t, e) {
      for (var i, n, s = 0, o = 0, a = arguments.length, u = 0; o < a;) u < (i = r(arguments[o++])) ? (s = s * (n = u / i) * n + 1, u = i) : s += i > 0 ? (n = i / u) * n : i;
      return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(s)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = Math.imul;
  n(n.S + n.F * i(3)(function () {
    return -5 != r(4294967295, 5) || 2 != r.length
  }), "Math", {
    imul: function (t, e) {
      var i = +t,
        n = +e,
        r = 65535 & i,
        s = 65535 & n;
      return 0 | r * s + ((65535 & i >>> 16) * s + r * (65535 & n >>> 16) << 16 >>> 0)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    log10: function (t) {
      return Math.log(t) * Math.LOG10E
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    log1p: i(113)
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    log2: function (t) {
      return Math.log(t) / Math.LN2
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    sign: i(79)
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(78),
    s = Math.exp;
  n(n.S + n.F * i(3)(function () {
    return -2e-17 != !Math.sinh(-2e-17)
  }), "Math", {
    sinh: function (t) {
      return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (s(t - 1) - s(-t - 1)) * (Math.E / 2)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(78),
    s = Math.exp;
  n(n.S, "Math", {
    tanh: function (t) {
      var e = r(t = +t),
        i = r(-t);
      return e == 1 / 0 ? 1 : i == 1 / 0 ? -1 : (e - i) / (s(t) + s(-t))
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    trunc: function (t) {
      return (t > 0 ? Math.floor : Math.ceil)(t)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(2),
    r = i(15),
    s = i(19),
    o = i(74),
    a = i(27),
    u = i(3),
    c = i(36).f,
    l = i(16).f,
    f = i(7).f,
    h = i(45).trim,
    d = n.Number,
    p = d,
    v = d.prototype,
    m = "Number" == s(i(35)(v)),
    g = "trim" in String.prototype,
    _ = function (t) {
      var e = a(t, !1);
      if ("string" == typeof e && e.length > 2) {
        var i, n, r, s = (e = g ? e.trim() : h(e, 3)).charCodeAt(0);
        if (43 === s || 45 === s) {
          if (88 === (i = e.charCodeAt(2)) || 120 === i) return NaN
        } else if (48 === s) {
          switch (e.charCodeAt(1)) {
          case 66:
          case 98:
            n = 2, r = 49;
            break;
          case 79:
          case 111:
            n = 8, r = 55;
            break;
          default:
            return +e
          }
          for (var o, u = e.slice(2), c = 0, l = u.length; c < l; c++)
            if ((o = u.charCodeAt(c)) < 48 || o > r) return NaN;
          return parseInt(u, n)
        }
      }
      return +e
    };
  if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
    d = function (t) {
      var e = arguments.length < 1 ? 0 : t,
        i = this;
      return i instanceof d && (m ? u(function () {
        v.valueOf.call(i)
      }) : "Number" != s(i)) ? o(new p(_(e)), i, d) : _(e)
    };
    for (var b, y = i(6) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), A = 0; y.length > A; A++) r(p, b = y[A]) && !r(d, b) && f(d, b, l(p, b));
    d.prototype = v, v.constructor = d, i(13)(n, "Number", d)
  }
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Number", {
    EPSILON: Math.pow(2, -52)
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(2).isFinite;
  n(n.S, "Number", {
    isFinite: function (t) {
      return "number" == typeof t && r(t)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Number", {
    isInteger: i(109)
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Number", {
    isNaN: function (t) {
      return t != t
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(109),
    s = Math.abs;
  n(n.S, "Number", {
    isSafeInteger: function (t) {
      return r(t) && s(t) <= 9007199254740991
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Number", {
    MAX_SAFE_INTEGER: 9007199254740991
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Number", {
    MIN_SAFE_INTEGER: -9007199254740991
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(121);
  n(n.S + n.F * (Number.parseFloat != r), "Number", {
    parseFloat: r
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(122);
  n(n.S + n.F * (Number.parseInt != r), "Number", {
    parseInt: r
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(26),
    s = i(98),
    o = i(86),
    a = 1..toFixed,
    u = Math.floor,
    c = [0, 0, 0, 0, 0, 0],
    l = "Number.toFixed: incorrect invocation!",
    f = function (t, e) {
      for (var i = -1, n = e; ++i < 6;) n += t * c[i], c[i] = n % 1e7, n = u(n / 1e7)
    },
    h = function (t) {
      for (var e = 6, i = 0; --e >= 0;) i += c[e], c[e] = u(i / t), i = i % t * 1e7
    },
    d = function () {
      for (var t = 6, e = ""; --t >= 0;)
        if ("" !== e || 0 === t || 0 !== c[t]) {
          var i = String(c[t]);
          e = "" === e ? i : e + o.call("0", 7 - i.length) + i
        }
      return e
    },
    p = function (t, e, i) {
      return 0 === e ? i : e % 2 == 1 ? p(t, e - 1, i * t) : p(t * t, e / 2, i)
    },
    v = function (t) {
      for (var e = 0, i = t; i >= 4096;) e += 12, i /= 4096;
      for (; i >= 2;) e += 1, i /= 2;
      return e
    };
  n(n.P + n.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !i(3)(function () {
    a.call({})
  })), "Number", {
    toFixed: function (t) {
      var e, i, n, a, u = s(this, l),
        c = r(t),
        m = "",
        g = "0";
      if (c < 0 || c > 20) throw RangeError(l);
      if (u != u) return "NaN";
      if (u <= -1e21 || u >= 1e21) return String(u);
      if (u < 0 && (m = "-", u = -u), u > 1e-21)
        if (e = v(u * p(2, 69, 1)) - 69, i = e < 0 ? u * p(2, -e, 1) : u / p(2, e, 1), i *= 4503599627370496, (e = 52 - e) > 0) {
          for (f(0, i), n = c; n >= 7;) f(1e7, 0), n -= 7;
          for (f(p(10, n, 1), 0), n = e - 1; n >= 23;) h(1 << 23), n -= 23;
          h(1 << n), f(1, 1), h(2), g = d()
        } else f(0, i), f(1 << -e, 0), g = d() + o.call("0", c);
      return g = c > 0 ? m + ((a = g.length) <= c ? "0." + o.call("0", c - a) + g : g.slice(0, a - c) + "." + g.slice(a - c)) : m + g
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(3),
    s = i(98),
    o = 1..toPrecision;
  n(n.P + n.F * (r(function () {
    return "1" !== o.call(1, void 0)
  }) || !r(function () {
    o.call({})
  })), "Number", {
    toPrecision: function (t) {
      var e = s(this, "Number#toPrecision: incorrect invocation!");
      return void 0 === t ? o.call(e) : o.call(e, t)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S + n.F, "Object", {
    assign: i(115)
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Object", {
    create: i(35)
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S + n.F * !i(6), "Object", {
    defineProperties: i(116)
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S + n.F * !i(6), "Object", {
    defineProperty: i(7).f
  })
}, function (t, e, i) {
  var n = i(4),
    r = i(32).onFreeze;
  i(25)("freeze", function (t) {
    return function (e) {
      return t && n(e) ? t(r(e)) : e
    }
  })
}, function (t, e, i) {
  var n = i(18),
    r = i(16).f;
  i(25)("getOwnPropertyDescriptor", function () {
    return function (t, e) {
      return r(n(t), e)
    }
  })
}, function (t, e, i) {
  i(25)("getOwnPropertyNames", function () {
    return i(117).f
  })
}, function (t, e, i) {
  var n = i(9),
    r = i(17);
  i(25)("getPrototypeOf", function () {
    return function (t) {
      return r(n(t))
    }
  })
}, function (t, e, i) {
  var n = i(4);
  i(25)("isExtensible", function (t) {
    return function (e) {
      return !!n(e) && (!t || t(e))
    }
  })
}, function (t, e, i) {
  var n = i(4);
  i(25)("isFrozen", function (t) {
    return function (e) {
      return !n(e) || !!t && t(e)
    }
  })
}, function (t, e, i) {
  var n = i(4);
  i(25)("isSealed", function (t) {
    return function (e) {
      return !n(e) || !!t && t(e)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Object", {
    is: i(161)
  })
}, function (t, e, i) {
  var n = i(9),
    r = i(37);
  i(25)("keys", function () {
    return function (t) {
      return r(n(t))
    }
  })
}, function (t, e, i) {
  var n = i(4),
    r = i(32).onFreeze;
  i(25)("preventExtensions", function (t) {
    return function (e) {
      return t && n(e) ? t(r(e)) : e
    }
  })
}, function (t, e, i) {
  var n = i(4),
    r = i(32).onFreeze;
  i(25)("seal", function (t) {
    return function (e) {
      return t && n(e) ? t(r(e)) : e
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Object", {
    setPrototypeOf: i(82).set
  })
}, function (t, e, i) {
  "use strict";
  var n = i(47),
    r = {};
  r[i(5)("toStringTag")] = "z", r + "" != "[object z]" && i(13)(Object.prototype, "toString", function () {
    return "[object " + n(this) + "]"
  }, !0)
}, function (t, e, i) {
  var n = i(0),
    r = i(121);
  n(n.G + n.F * (parseFloat != r), {
    parseFloat: r
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(122);
  n(n.G + n.F * (parseInt != r), {
    parseInt: r
  })
}, function (t, e, i) {
  "use strict";
  var n, r, s, o, a = i(31),
    u = i(2),
    c = i(21),
    l = i(47),
    f = i(0),
    h = i(4),
    d = i(10),
    p = i(33),
    v = i(34),
    m = i(63),
    g = i(88).set,
    _ = i(80)(),
    b = i(81),
    y = i(123),
    A = i(65),
    w = i(124),
    S = u.TypeError,
    k = u.process,
    T = k && k.versions,
    x = T && T.v8 || "",
    C = u.Promise,
    E = "process" == l(k),
    P = function () {},
    B = r = b.f,
    F = !! function () {
      try {
        var t = C.resolve(1),
          e = (t.constructor = {})[i(5)("species")] = function (t) {
            t(P, P)
          };
        return (E || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e && 0 !== x.indexOf("6.6") && -1 === A.indexOf("Chrome/66")
      } catch (t) {}
    }(),
    M = function (t) {
      var e;
      return !(!h(t) || "function" != typeof (e = t.then)) && e
    },
    I = function (t, e) {
      if (!t._n) {
        t._n = !0;
        var i = t._c;
        _(function () {
          for (var n = t._v, r = 1 == t._s, s = 0; i.length > s;) ! function (e) {
            var i, s, o, a = r ? e.ok : e.fail,
              u = e.resolve,
              c = e.reject,
              l = e.domain;
            try {
              a ? (r || (2 == t._h && D(t), t._h = 1), !0 === a ? i = n : (l && l.enter(), i = a(n), l && (l.exit(), o = !0)), i === e.promise ? c(S("Promise-chain cycle")) : (s = M(i)) ? s.call(i, u, c) : u(i)) : c(n)
            } catch (t) {
              l && !o && l.exit(), c(t)
            }
          }(i[s++]);
          t._c = [], t._n = !1, e && !t._h && L(t)
        })
      }
    },
    L = function (t) {
      g.call(u, function () {
        var e, i, n, r = t._v,
          s = R(t);
        if (s && (e = y(function () {
            E ? k.emit("unhandledRejection", r, t) : (i = u.onunhandledrejection) ? i({
              promise: t,
              reason: r
            }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", r)
          }), t._h = E || R(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
      })
    },
    R = function (t) {
      return 1 !== t._h && 0 === (t._a || t._c).length
    },
    D = function (t) {
      g.call(u, function () {
        var e;
        E ? k.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        })
      })
    },
    O = function (t) {
      var e = this;
      e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
    },
    N = function (t) {
      var e, i = this;
      if (!i._d) {
        i._d = !0, i = i._w || i;
        try {
          if (i === t) throw S("Promise can't be resolved itself");
          (e = M(t)) ? _(function () {
            var n = {
              _w: i,
              _d: !1
            };
            try {
              e.call(t, c(N, n, 1), c(O, n, 1))
            } catch (t) {
              O.call(n, t)
            }
          }): (i._v = t, i._s = 1, I(i, !1))
        } catch (t) {
          O.call({
            _w: i,
            _d: !1
          }, t)
        }
      }
    };
  F || (C = function (t) {
    p(this, C, "Promise", "_h"), d(t), n.call(this);
    try {
      t(c(N, this, 1), c(O, this, 1))
    } catch (t) {
      O.call(this, t)
    }
  }, (n = function (t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }).prototype = i(39)(C.prototype, {
    then: function (t, e) {
      var i = B(m(this, C));
      return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = E ? k.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise
    },
    catch: function (t) {
      return this.then(void 0, t)
    }
  }), s = function () {
    var t = new n;
    this.promise = t, this.resolve = c(N, t, 1), this.reject = c(O, t, 1)
  }, b.f = B = function (t) {
    return t === C || t === o ? new s(t) : r(t)
  }), f(f.G + f.W + f.F * !F, {
    Promise: C
  }), i(44)(C, "Promise"), i(40)("Promise"), o = i(20).Promise, f(f.S + f.F * !F, "Promise", {
    reject: function (t) {
      var e = B(this);
      return (0, e.reject)(t), e.promise
    }
  }), f(f.S + f.F * (a || !F), "Promise", {
    resolve: function (t) {
      return w(a && this === o ? C : this, t)
    }
  }), f(f.S + f.F * !(F && i(57)(function (t) {
    C.all(t).catch(P)
  })), "Promise", {
    all: function (t) {
      var e = this,
        i = B(e),
        n = i.resolve,
        r = i.reject,
        s = y(function () {
          var i = [],
            s = 0,
            o = 1;
          v(t, !1, function (t) {
            var a = s++,
              u = !1;
            i.push(void 0), o++, e.resolve(t).then(function (t) {
              u || (u = !0, i[a] = t, --o || n(i))
            }, r)
          }), --o || n(i)
        });
      return s.e && r(s.v), i.promise
    },
    race: function (t) {
      var e = this,
        i = B(e),
        n = i.reject,
        r = y(function () {
          v(t, !1, function (t) {
            e.resolve(t).then(i.resolve, n)
          })
        });
      return r.e && n(r.v), i.promise
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(10),
    s = i(1),
    o = (i(2).Reflect || {}).apply,
    a = Function.apply;
  n(n.S + n.F * !i(3)(function () {
    o(function () {})
  }), "Reflect", {
    apply: function (t, e, i) {
      var n = r(t),
        u = s(i);
      return o ? o(n, e, u) : a.call(n, e, u)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(35),
    s = i(10),
    o = i(1),
    a = i(4),
    u = i(3),
    c = i(102),
    l = (i(2).Reflect || {}).construct,
    f = u(function () {
      function t() {}
      return !(l(function () {}, [], t) instanceof t)
    }),
    h = !u(function () {
      l(function () {})
    });
  n(n.S + n.F * (f || h), "Reflect", {
    construct: function (t, e) {
      s(t), o(e);
      var i = arguments.length < 3 ? t : s(arguments[2]);
      if (h && !f) return l(t, e, i);
      if (t == i) {
        switch (e.length) {
        case 0:
          return new t;
        case 1:
          return new t(e[0]);
        case 2:
          return new t(e[0], e[1]);
        case 3:
          return new t(e[0], e[1], e[2]);
        case 4:
          return new t(e[0], e[1], e[2], e[3])
        }
        var n = [null];
        return n.push.apply(n, e), new(c.apply(t, n))
      }
      var u = i.prototype,
        d = r(a(u) ? u : Object.prototype),
        p = Function.apply.call(t, d, e);
      return a(p) ? p : d
    }
  })
}, function (t, e, i) {
  var n = i(7),
    r = i(0),
    s = i(1),
    o = i(27);
  r(r.S + r.F * i(3)(function () {
    Reflect.defineProperty(n.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }), "Reflect", {
    defineProperty: function (t, e, i) {
      s(t), e = o(e, !0), s(i);
      try {
        return n.f(t, e, i), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(16).f,
    s = i(1);
  n(n.S, "Reflect", {
    deleteProperty: function (t, e) {
      var i = r(s(t), e);
      return !(i && !i.configurable) && delete t[e]
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(1),
    s = function (t) {
      this._t = r(t), this._i = 0;
      var e, i = this._k = [];
      for (e in t) i.push(e)
    };
  i(76)(s, "Object", function () {
    var t, e = this,
      i = e._k;
    do {
      if (e._i >= i.length) return {
        value: void 0,
        done: !0
      }
    } while (!((t = i[e._i++]) in e._t));
    return {
      value: t,
      done: !1
    }
  }), n(n.S, "Reflect", {
    enumerate: function (t) {
      return new s(t)
    }
  })
}, function (t, e, i) {
  var n = i(16),
    r = i(0),
    s = i(1);
  r(r.S, "Reflect", {
    getOwnPropertyDescriptor: function (t, e) {
      return n.f(s(t), e)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(17),
    s = i(1);
  n(n.S, "Reflect", {
    getPrototypeOf: function (t) {
      return r(s(t))
    }
  })
}, function (t, e, i) {
  function n(t, e) {
    var i, a, l = arguments.length < 3 ? t : arguments[2];
    return c(t) === l ? t[e] : (i = r.f(t, e)) ? o(i, "value") ? i.value : void 0 !== i.get ? i.get.call(l) : void 0 : u(a = s(t)) ? n(a, e, l) : void 0
  }
  var r = i(16),
    s = i(17),
    o = i(15),
    a = i(0),
    u = i(4),
    c = i(1);
  a(a.S, "Reflect", {
    get: n
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Reflect", {
    has: function (t, e) {
      return e in t
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(1),
    s = Object.isExtensible;
  n(n.S, "Reflect", {
    isExtensible: function (t) {
      return r(t), !s || s(t)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Reflect", {
    ownKeys: i(120)
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(1),
    s = Object.preventExtensions;
  n(n.S, "Reflect", {
    preventExtensions: function (t) {
      r(t);
      try {
        return s && s(t), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(82);
  r && n(n.S, "Reflect", {
    setPrototypeOf: function (t, e) {
      r.check(t, e);
      try {
        return r.set(t, e), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function (t, e, i) {
  function n(t, e, i) {
    var u, h, d = arguments.length < 4 ? t : arguments[3],
      p = s.f(l(t), e);
    if (!p) {
      if (f(h = o(t))) return n(h, e, i, d);
      p = c(0)
    }
    if (a(p, "value")) {
      if (!1 === p.writable || !f(d)) return !1;
      if (u = s.f(d, e)) {
        if (u.get || u.set || !1 === u.writable) return !1;
        u.value = i, r.f(d, e, u)
      } else r.f(d, e, c(0, i));
      return !0
    }
    return void 0 !== p.set && (p.set.call(d, i), !0)
  }
  var r = i(7),
    s = i(16),
    o = i(17),
    a = i(15),
    u = i(0),
    c = i(38),
    l = i(1),
    f = i(4);
  u(u.S, "Reflect", {
    set: n
  })
}, function (t, e, i) {
  var n = i(2),
    r = i(74),
    s = i(7).f,
    o = i(36).f,
    a = i(56),
    u = i(54),
    c = n.RegExp,
    l = c,
    f = c.prototype,
    h = /a/g,
    d = /a/g,
    p = new c(h) !== h;
  if (i(6) && (!p || i(3)(function () {
      return d[i(5)("match")] = !1, c(h) != h || c(d) == d || "/a/i" != c(h, "i")
    }))) {
    c = function (t, e) {
      var i = this instanceof c,
        n = a(t),
        s = void 0 === e;
      return !i && n && t.constructor === c && s ? t : r(p ? new l(n && !s ? t.source : t, e) : l((n = t instanceof c) ? t.source : t, n && s ? u.call(t) : e), i ? this : f, c)
    };
    for (var v = o(l), m = 0; v.length > m;) ! function (t) {
      t in c || s(c, t, {
        configurable: !0,
        get: function () {
          return l[t]
        },
        set: function (e) {
          l[t] = e
        }
      })
    }(v[m++]);
    f.constructor = c, c.prototype = f, i(13)(n, "RegExp", c)
  }
  i(40)("RegExp")
}, function (t, e, i) {
  i(53)("match", 1, function (t, e, i) {
    return [function (i) {
      "use strict";
      var n = t(this),
        r = void 0 == i ? void 0 : i[e];
      return void 0 !== r ? r.call(i, n) : new RegExp(i)[e](String(n))
    }, i]
  })
}, function (t, e, i) {
  i(53)("replace", 2, function (t, e, i) {
    return [function (n, r) {
      "use strict";
      var s = t(this),
        o = void 0 == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, s, r) : i.call(String(s), n, r)
    }, i]
  })
}, function (t, e, i) {
  i(53)("search", 1, function (t, e, i) {
    return [function (i) {
      "use strict";
      var n = t(this),
        r = void 0 == i ? void 0 : i[e];
      return void 0 !== r ? r.call(i, n) : new RegExp(i)[e](String(n))
    }, i]
  })
}, function (t, e, i) {
  i(53)("split", 2, function (t, e, n) {
    "use strict";
    var r = i(56),
      s = n,
      o = [].push,
      a = "length";
    if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[a] || 2 != "ab".split(/(?:ab)*/)[a] || 4 != ".".split(/(.?)(.?)/)[a] || ".".split(/()()/)[a] > 1 || "".split(/.?/)[a]) {
      var u = void 0 === /()??/.exec("")[1];
      n = function (t, e) {
        var i = String(this);
        if (void 0 === t && 0 === e) return [];
        if (!r(t)) return s.call(i, t, e);
        var n, c, l, f, h, d = [],
          p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
          v = 0,
          m = void 0 === e ? 4294967295 : e >>> 0,
          g = new RegExp(t.source, p + "g");
        for (u || (n = new RegExp("^" + g.source + "$(?!\\s)", p));
          (c = g.exec(i)) && !((l = c.index + c[0][a]) > v && (d.push(i.slice(v, c.index)), !u && c[a] > 1 && c[0].replace(n, function () {
            for (h = 1; h < arguments[a] - 2; h++) void 0 === arguments[h] && (c[h] = void 0)
          }), c[a] > 1 && c.index < i[a] && o.apply(d, c.slice(1)), f = c[0][a], v = l, d[a] >= m));) g.lastIndex === c.index && g.lastIndex++;
        return v === i[a] ? !f && g.test("") || d.push("") : d.push(i.slice(v)), d[a] > m ? d.slice(0, m) : d
      }
    } else "0".split(void 0, 0)[a] && (n = function (t, e) {
      return void 0 === t && 0 === e ? [] : s.call(this, t, e)
    });
    return [function (i, r) {
      var s = t(this),
        o = void 0 == i ? void 0 : i[e];
      return void 0 !== o ? o.call(i, s, r) : n.call(String(s), i, r)
    }, n]
  })
}, function (t, e, i) {
  "use strict";
  i(129);
  var n = i(1),
    r = i(54),
    s = i(6),
    o = /./.toString,
    a = function (t) {
      i(13)(RegExp.prototype, "toString", t, !0)
    };
  i(3)(function () {
    return "/a/b" != o.call({
      source: "a",
      flags: "b"
    })
  }) ? a(function () {
    var t = n(this);
    return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? r.call(t) : void 0)
  }) : "toString" != o.name && a(function () {
    return o.call(this)
  })
}, function (t, e, i) {
  "use strict";
  i(14)("anchor", function (t) {
    return function (e) {
      return t(this, "a", "name", e)
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("big", function (t) {
    return function () {
      return t(this, "big", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("blink", function (t) {
    return function () {
      return t(this, "blink", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("bold", function (t) {
    return function () {
      return t(this, "b", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(84)(!1);
  n(n.P, "String", {
    codePointAt: function (t) {
      return r(this, t)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(8),
    s = i(85),
    o = "".endsWith;
  n(n.P + n.F * i(72)("endsWith"), "String", {
    endsWith: function (t) {
      var e = s(this, t, "endsWith"),
        i = arguments.length > 1 ? arguments[1] : void 0,
        n = r(e.length),
        a = void 0 === i ? n : Math.min(r(i), n),
        u = String(t);
      return o ? o.call(e, u, a) : e.slice(a - u.length, a) === u
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("fixed", function (t) {
    return function () {
      return t(this, "tt", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("fontcolor", function (t) {
    return function (e) {
      return t(this, "font", "color", e)
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("fontsize", function (t) {
    return function (e) {
      return t(this, "font", "size", e)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(41),
    s = String.fromCharCode,
    o = String.fromCodePoint;
  n(n.S + n.F * (!!o && 1 != o.length), "String", {
    fromCodePoint: function (t) {
      for (var e, i = [], n = arguments.length, o = 0; n > o;) {
        if (e = +arguments[o++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
        i.push(e < 65536 ? s(e) : s(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
      }
      return i.join("")
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(85);
  n(n.P + n.F * i(72)("includes"), "String", {
    includes: function (t) {
      return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("italics", function (t) {
    return function () {
      return t(this, "i", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(84)(!0);
  i(77)(String, "String", function (t) {
    this._t = String(t), this._i = 0
  }, function () {
    var t, e = this._t,
      i = this._i;
    return i >= e.length ? {
      value: void 0,
      done: !0
    } : (t = n(e, i), this._i += t.length, {
      value: t,
      done: !1
    })
  })
}, function (t, e, i) {
  "use strict";
  i(14)("link", function (t) {
    return function (e) {
      return t(this, "a", "href", e)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(18),
    s = i(8);
  n(n.S, "String", {
    raw: function (t) {
      for (var e = r(t.raw), i = s(e.length), n = arguments.length, o = [], a = 0; i > a;) o.push(String(e[a++])), a < n && o.push(String(arguments[a]));
      return o.join("")
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.P, "String", {
    repeat: i(86)
  })
}, function (t, e, i) {
  "use strict";
  i(14)("small", function (t) {
    return function () {
      return t(this, "small", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(8),
    s = i(85),
    o = "".startsWith;
  n(n.P + n.F * i(72)("startsWith"), "String", {
    startsWith: function (t) {
      var e = s(this, t, "startsWith"),
        i = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        n = String(t);
      return o ? o.call(e, n, i) : e.slice(i, i + n.length) === n
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("strike", function (t) {
    return function () {
      return t(this, "strike", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("sub", function (t) {
    return function () {
      return t(this, "sub", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  i(14)("sup", function (t) {
    return function () {
      return t(this, "sup", "", "")
    }
  })
}, function (t, e, i) {
  "use strict";
  i(45)("trim", function (t) {
    return function () {
      return t(this, 3)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(2),
    r = i(15),
    s = i(6),
    o = i(0),
    a = i(13),
    u = i(32).KEY,
    c = i(3),
    l = i(62),
    f = i(44),
    h = i(42),
    d = i(5),
    p = i(127),
    v = i(90),
    m = i(159),
    g = i(55),
    _ = i(1),
    b = i(4),
    y = i(18),
    A = i(27),
    w = i(38),
    S = i(35),
    k = i(117),
    T = i(16),
    x = i(7),
    C = i(37),
    E = T.f,
    P = x.f,
    B = k.f,
    F = n.Symbol,
    M = n.JSON,
    I = M && M.stringify,
    L = d("_hidden"),
    R = d("toPrimitive"),
    D = {}.propertyIsEnumerable,
    O = l("symbol-registry"),
    N = l("symbols"),
    j = l("op-symbols"),
    U = Object.prototype,
    V = "function" == typeof F,
    H = n.QObject,
    z = !H || !H.prototype || !H.prototype.findChild,
    W = s && c(function () {
      return 7 != S(P({}, "a", {
        get: function () {
          return P(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function (t, e, i) {
      var n = E(U, e);
      n && delete U[e], P(t, e, i), n && t !== U && P(U, e, n)
    } : P,
    Q = function (t) {
      var e = N[t] = S(F.prototype);
      return e._k = t, e
    },
    Y = V && "symbol" == typeof F.iterator ? function (t) {
      return "symbol" == typeof t
    } : function (t) {
      return t instanceof F
    },
    G = function (t, e, i) {
      return t === U && G(j, e, i), _(t), e = A(e, !0), _(i), r(N, e) ? (i.enumerable ? (r(t, L) && t[L][e] && (t[L][e] = !1), i = S(i, {
        enumerable: w(0, !1)
      })) : (r(t, L) || P(t, L, w(1, {})), t[L][e] = !0), W(t, e, i)) : P(t, e, i)
    },
    q = function (t, e) {
      _(t);
      for (var i, n = m(e = y(e)), r = 0, s = n.length; s > r;) G(t, i = n[r++], e[i]);
      return t
    },
    J = function (t) {
      var e = D.call(this, t = A(t, !0));
      return !(this === U && r(N, t) && !r(j, t)) && (!(e || !r(this, t) || !r(N, t) || r(this, L) && this[L][t]) || e)
    },
    K = function (t, e) {
      if (t = y(t), e = A(e, !0), t !== U || !r(N, e) || r(j, e)) {
        var i = E(t, e);
        return !i || !r(N, e) || r(t, L) && t[L][e] || (i.enumerable = !0), i
      }
    },
    X = function (t) {
      for (var e, i = B(y(t)), n = [], s = 0; i.length > s;) r(N, e = i[s++]) || e == L || e == u || n.push(e);
      return n
    },
    Z = function (t) {
      for (var e, i = t === U, n = B(i ? j : y(t)), s = [], o = 0; n.length > o;) !r(N, e = n[o++]) || i && !r(U, e) || s.push(N[e]);
      return s
    };
  V || (a((F = function () {
    if (this instanceof F) throw TypeError("Symbol is not a constructor!");
    var t = h(arguments.length > 0 ? arguments[0] : void 0),
      e = function (i) {
        this === U && e.call(j, i), r(this, L) && r(this[L], t) && (this[L][t] = !1), W(this, t, w(1, i))
      };
    return s && z && W(U, t, {
      configurable: !0,
      set: e
    }), Q(t)
  }).prototype, "toString", function () {
    return this._k
  }), T.f = K, x.f = G, i(36).f = k.f = X, i(49).f = J, i(59).f = Z, s && !i(31) && a(U, "propertyIsEnumerable", J, !0), p.f = function (t) {
    return Q(d(t))
  }), o(o.G + o.W + o.F * !V, {
    Symbol: F
  });
  for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; $.length > tt;) d($[tt++]);
  for (var et = C(d.store), it = 0; et.length > it;) v(et[it++]);
  o(o.S + o.F * !V, "Symbol", {
    for: function (t) {
      return r(O, t += "") ? O[t] : O[t] = F(t)
    },
    keyFor: function (t) {
      if (!Y(t)) throw TypeError(t + " is not a symbol!");
      for (var e in O)
        if (O[e] === t) return e
    },
    useSetter: function () {
      z = !0
    },
    useSimple: function () {
      z = !1
    }
  }), o(o.S + o.F * !V, "Object", {
    create: function (t, e) {
      return void 0 === e ? S(t) : q(S(t), e)
    },
    defineProperty: G,
    defineProperties: q,
    getOwnPropertyDescriptor: K,
    getOwnPropertyNames: X,
    getOwnPropertySymbols: Z
  }), M && o(o.S + o.F * (!V || c(function () {
    var t = F();
    return "[null]" != I([t]) || "{}" != I({
      a: t
    }) || "{}" != I(Object(t))
  })), "JSON", {
    stringify: function (t) {
      for (var e, i, n = [t], r = 1; arguments.length > r;) n.push(arguments[r++]);
      if (i = e = n[1], (b(e) || void 0 !== t) && !Y(t)) return g(e) || (e = function (t, e) {
        if ("function" == typeof i && (e = i.call(this, t, e)), !Y(e)) return e
      }), n[1] = e, I.apply(M, n)
    }
  }), F.prototype[R] || i(12)(F.prototype, R, F.prototype.valueOf), f(F, "Symbol"), f(Math, "Math", !0), f(n.JSON, "JSON", !0)
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(64),
    s = i(89),
    o = i(1),
    a = i(41),
    u = i(8),
    c = i(4),
    l = i(2).ArrayBuffer,
    f = i(63),
    h = s.ArrayBuffer,
    d = s.DataView,
    p = r.ABV && l.isView,
    v = h.prototype.slice,
    m = r.VIEW;
  n(n.G + n.W + n.F * (l !== h), {
    ArrayBuffer: h
  }), n(n.S + n.F * !r.CONSTR, "ArrayBuffer", {
    isView: function (t) {
      return p && p(t) || c(t) && m in t
    }
  }), n(n.P + n.U + n.F * i(3)(function () {
    return !new h(2).slice(1, void 0).byteLength
  }), "ArrayBuffer", {
    slice: function (t, e) {
      if (void 0 !== v && void 0 === e) return v.call(o(this), t);
      for (var i = o(this).byteLength, n = a(t, i), r = a(void 0 === e ? i : e, i), s = new(f(this, h))(u(r - n)), c = new d(this), l = new d(s), p = 0; n < r;) l.setUint8(p++, c.getUint8(n++));
      return s
    }
  }), i(40)("ArrayBuffer")
}, function (t, e, i) {
  var n = i(0);
  n(n.G + n.W + n.F * !i(64).ABV, {
    DataView: i(89).DataView
  })
}, function (t, e, i) {
  i(29)("Float32", 4, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Float64", 8, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Int16", 2, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Int32", 4, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Int8", 1, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Uint16", 2, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Uint32", 4, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Uint8", 1, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  })
}, function (t, e, i) {
  i(29)("Uint8", 1, function (t) {
    return function (e, i, n) {
      return t(this, e, i, n)
    }
  }, !0)
}, function (t, e, i) {
  "use strict";
  var n = i(105),
    r = i(46);
  i(52)("WeakSet", function (t) {
    return function () {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function (t) {
      return n.def(r(this, "WeakSet"), t, !0)
    }
  }, n, !1, !0)
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(106),
    s = i(9),
    o = i(8),
    a = i(10),
    u = i(68);
  n(n.P, "Array", {
    flatMap: function (t) {
      var e, i, n = s(this);
      return a(t), e = o(n.length), i = u(n, 0), r(i, n, n, e, 0, 1, t, arguments[1]), i
    }
  }), i(30)("flatMap")
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(106),
    s = i(9),
    o = i(8),
    a = i(26),
    u = i(68);
  n(n.P, "Array", {
    flatten: function () {
      var t = arguments[0],
        e = s(this),
        i = o(e.length),
        n = u(e, 0);
      return r(n, e, e, i, 0, void 0 === t ? 1 : a(t)), n
    }
  }), i(30)("flatten")
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(51)(!0);
  n(n.P, "Array", {
    includes: function (t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), i(30)("includes")
}, function (t, e, i) {
  var n = i(0),
    r = i(80)(),
    s = i(2).process,
    o = "process" == i(19)(s);
  n(n.G, {
    asap: function (t) {
      var e = o && s.domain;
      r(e ? e.bind(t) : t)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(19);
  n(n.S, "Error", {
    isError: function (t) {
      return "Error" === r(t)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.G, {
    global: i(2)
  })
}, function (t, e, i) {
  i(60)("Map")
}, function (t, e, i) {
  i(61)("Map")
}, function (t, e, i) {
  var n = i(0);
  n(n.P + n.R, "Map", {
    toJSON: i(104)("Map")
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    clamp: function (t, e, i) {
      return Math.min(i, Math.max(e, t))
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    DEG_PER_RAD: Math.PI / 180
  })
}, function (t, e, i) {
  var n = i(0),
    r = 180 / Math.PI;
  n(n.S, "Math", {
    degrees: function (t) {
      return t * r
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(114),
    s = i(112);
  n(n.S, "Math", {
    fscale: function (t, e, i, n, o) {
      return s(r(t, e, i, n, o))
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    iaddh: function (t, e, i, n) {
      var r = t >>> 0,
        s = i >>> 0;
      return (e >>> 0) + (n >>> 0) + ((r & s | (r | s) & ~(r + s >>> 0)) >>> 31) | 0
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    imulh: function (t, e) {
      var i = +t,
        n = +e,
        r = 65535 & i,
        s = 65535 & n,
        o = i >> 16,
        a = n >> 16,
        u = (o * s >>> 0) + (r * s >>> 16);
      return o * a + (u >> 16) + ((r * a >>> 0) + (65535 & u) >> 16)
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    isubh: function (t, e, i, n) {
      var r = t >>> 0,
        s = i >>> 0;
      return (e >>> 0) - (n >>> 0) - ((~r & s | ~(r ^ s) & r - s >>> 0) >>> 31) | 0
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    RAD_PER_DEG: 180 / Math.PI
  })
}, function (t, e, i) {
  var n = i(0),
    r = Math.PI / 180;
  n(n.S, "Math", {
    radians: function (t) {
      return t * r
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    scale: i(114)
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    signbit: function (t) {
      return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
    }
  })
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "Math", {
    umulh: function (t, e) {
      var i = +t,
        n = +e,
        r = 65535 & i,
        s = 65535 & n,
        o = i >>> 16,
        a = n >>> 16,
        u = (o * s >>> 0) + (r * s >>> 16);
      return o * a + (u >>> 16) + ((r * a >>> 0) + (65535 & u) >>> 16)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(9),
    s = i(10),
    o = i(7);
  i(6) && n(n.P + i(58), "Object", {
    __defineGetter__: function (t, e) {
      o.f(r(this), t, {
        get: s(e),
        enumerable: !0,
        configurable: !0
      })
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(9),
    s = i(10),
    o = i(7);
  i(6) && n(n.P + i(58), "Object", {
    __defineSetter__: function (t, e) {
      o.f(r(this), t, {
        set: s(e),
        enumerable: !0,
        configurable: !0
      })
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(119)(!0);
  n(n.S, "Object", {
    entries: function (t) {
      return r(t)
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(120),
    s = i(18),
    o = i(16),
    a = i(69);
  n(n.S, "Object", {
    getOwnPropertyDescriptors: function (t) {
      for (var e, i, n = s(t), u = o.f, c = r(n), l = {}, f = 0; c.length > f;) void 0 !== (i = u(n, e = c[f++])) && a(l, e, i);
      return l
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(9),
    s = i(27),
    o = i(17),
    a = i(16).f;
  i(6) && n(n.P + i(58), "Object", {
    __lookupGetter__: function (t) {
      var e, i = r(this),
        n = s(t, !0);
      do {
        if (e = a(i, n)) return e.get
      } while (i = o(i))
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(9),
    s = i(27),
    o = i(17),
    a = i(16).f;
  i(6) && n(n.P + i(58), "Object", {
    __lookupSetter__: function (t) {
      var e, i = r(this),
        n = s(t, !0);
      do {
        if (e = a(i, n)) return e.set
      } while (i = o(i))
    }
  })
}, function (t, e, i) {
  var n = i(0),
    r = i(119)(!1);
  n(n.S, "Object", {
    values: function (t) {
      return r(t)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(2),
    s = i(20),
    o = i(80)(),
    a = i(5)("observable"),
    u = i(10),
    c = i(1),
    l = i(33),
    f = i(39),
    h = i(12),
    d = i(34),
    p = d.RETURN,
    v = function (t) {
      return null == t ? void 0 : u(t)
    },
    m = function (t) {
      var e = t._c;
      e && (t._c = void 0, e())
    },
    g = function (t) {
      return void 0 === t._o
    },
    _ = function (t) {
      g(t) || (t._o = void 0, m(t))
    },
    b = function (t, e) {
      c(t), this._c = void 0, this._o = t, t = new y(this);
      try {
        var i = e(t),
          n = i;
        null != i && ("function" == typeof i.unsubscribe ? i = function () {
          n.unsubscribe()
        } : u(i), this._c = i)
      } catch (e) {
        return void t.error(e)
      }
      g(this) && m(this)
    };
  b.prototype = f({}, {
    unsubscribe: function () {
      _(this)
    }
  });
  var y = function (t) {
    this._s = t
  };
  y.prototype = f({}, {
    next: function (t) {
      var e = this._s;
      if (!g(e)) {
        var i = e._o;
        try {
          var n = v(i.next);
          if (n) return n.call(i, t)
        } catch (t) {
          try {
            _(e)
          } finally {
            throw t
          }
        }
      }
    },
    error: function (t) {
      var e = this._s;
      if (g(e)) throw t;
      var i = e._o;
      e._o = void 0;
      try {
        var n = v(i.error);
        if (!n) throw t;
        t = n.call(i, t)
      } catch (t) {
        try {
          m(e)
        } finally {
          throw t
        }
      }
      return m(e), t
    },
    complete: function (t) {
      var e = this._s;
      if (!g(e)) {
        var i = e._o;
        e._o = void 0;
        try {
          var n = v(i.complete);
          t = n ? n.call(i, t) : void 0
        } catch (t) {
          try {
            m(e)
          } finally {
            throw t
          }
        }
        return m(e), t
      }
    }
  });
  var A = function (t) {
    l(this, A, "Observable", "_f")._f = u(t)
  };
  f(A.prototype, {
    subscribe: function (t) {
      return new b(t, this._f)
    },
    forEach: function (t) {
      var e = this;
      return new(s.Promise || r.Promise)(function (i, n) {
        u(t);
        var r = e.subscribe({
          next: function (e) {
            try {
              return t(e)
            } catch (t) {
              n(t), r.unsubscribe()
            }
          },
          error: n,
          complete: i
        })
      })
    }
  }), f(A, {
    from: function (t) {
      var e = "function" == typeof this ? this : A,
        i = v(c(t)[a]);
      if (i) {
        var n = c(i.call(t));
        return n.constructor === e ? n : new e(function (t) {
          return n.subscribe(t)
        })
      }
      return new e(function (e) {
        var i = !1;
        return o(function () {
            if (!i) {
              try {
                if (d(t, !1, function (t) {
                    if (e.next(t), i) return p
                  }) === p) return
              } catch (t) {
                if (i) throw t;
                return void e.error(t)
              }
              e.complete()
            }
          }),
          function () {
            i = !0
          }
      })
    },
    of : function () {
      for (var t = 0, e = arguments.length, i = new Array(e); t < e;) i[t] = arguments[t++];
      return new("function" == typeof this ? this : A)(function (t) {
        var e = !1;
        return o(function () {
            if (!e) {
              for (var n = 0; n < i.length; ++n)
                if (t.next(i[n]), e) return;
              t.complete()
            }
          }),
          function () {
            e = !0
          }
      })
    }
  }), h(A.prototype, a, function () {
    return this
  }), n(n.G, {
    Observable: A
  }), i(40)("Observable")
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(20),
    s = i(2),
    o = i(63),
    a = i(124);
  n(n.P + n.R, "Promise", {
    finally: function (t) {
      var e = o(this, r.Promise || s.Promise),
        i = "function" == typeof t;
      return this.then(i ? function (i) {
        return a(e, t()).then(function () {
          return i
        })
      } : t, i ? function (i) {
        return a(e, t()).then(function () {
          throw i
        })
      } : t)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(81),
    s = i(123);
  n(n.S, "Promise", {
    try: function (t) {
      var e = r.f(this),
        i = s(t);
      return (i.e ? e.reject : e.resolve)(i.v), e.promise
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = n.key,
    o = n.set;
  n.exp({
    defineMetadata: function (t, e, i, n) {
      o(t, e, r(i), s(n))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = n.key,
    o = n.map,
    a = n.store;
  n.exp({
    deleteMetadata: function (t, e) {
      var i = arguments.length < 3 ? void 0 : s(arguments[2]),
        n = o(r(e), i, !1);
      if (void 0 === n || !n.delete(t)) return !1;
      if (n.size) return !0;
      var u = a.get(e);
      return u.delete(i), !!u.size || a.delete(e)
    }
  })
}, function (t, e, i) {
  var n = i(130),
    r = i(100),
    s = i(28),
    o = i(1),
    a = i(17),
    u = s.keys,
    c = s.key,
    l = function (t, e) {
      var i = u(t, e),
        s = a(t);
      if (null === s) return i;
      var o = l(s, e);
      return o.length ? i.length ? r(new n(i.concat(o))) : o : i
    };
  s.exp({
    getMetadataKeys: function (t) {
      return l(o(t), arguments.length < 2 ? void 0 : c(arguments[1]))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = i(17),
    o = n.has,
    a = n.get,
    u = n.key,
    c = function (t, e, i) {
      if (o(t, e, i)) return a(t, e, i);
      var n = s(e);
      return null !== n ? c(t, n, i) : void 0
    };
  n.exp({
    getMetadata: function (t, e) {
      return c(t, r(e), arguments.length < 3 ? void 0 : u(arguments[2]))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = n.keys,
    o = n.key;
  n.exp({
    getOwnMetadataKeys: function (t) {
      return s(r(t), arguments.length < 2 ? void 0 : o(arguments[1]))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = n.get,
    o = n.key;
  n.exp({
    getOwnMetadata: function (t, e) {
      return s(t, r(e), arguments.length < 3 ? void 0 : o(arguments[2]))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = i(17),
    o = n.has,
    a = n.key,
    u = function (t, e, i) {
      if (o(t, e, i)) return !0;
      var n = s(e);
      return null !== n && u(t, n, i)
    };
  n.exp({
    hasMetadata: function (t, e) {
      return u(t, r(e), arguments.length < 3 ? void 0 : a(arguments[2]))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = n.has,
    o = n.key;
  n.exp({
    hasOwnMetadata: function (t, e) {
      return s(t, r(e), arguments.length < 3 ? void 0 : o(arguments[2]))
    }
  })
}, function (t, e, i) {
  var n = i(28),
    r = i(1),
    s = i(10),
    o = n.key,
    a = n.set;
  n.exp({
    metadata: function (t, e) {
      return function (i, n) {
        a(t, e, (void 0 !== n ? r : s)(i), o(n))
      }
    }
  })
}, function (t, e, i) {
  i(60)("Set")
}, function (t, e, i) {
  i(61)("Set")
}, function (t, e, i) {
  var n = i(0);
  n(n.P + n.R, "Set", {
    toJSON: i(104)("Set")
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(84)(!0);
  n(n.P, "String", {
    at: function (t) {
      return r(this, t)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(24),
    s = i(8),
    o = i(56),
    a = i(54),
    u = RegExp.prototype,
    c = function (t, e) {
      this._r = t, this._s = e
    };
  i(76)(c, "RegExp String", function () {
    var t = this._r.exec(this._s);
    return {
      value: t,
      done: null === t
    }
  }), n(n.P, "String", {
    matchAll: function (t) {
      if (r(this), !o(t)) throw TypeError(t + " is not a regexp!");
      var e = String(this),
        i = "flags" in u ? String(t.flags) : a.call(t),
        n = new RegExp(t.source, ~i.indexOf("g") ? i : "g" + i);
      return n.lastIndex = s(t.lastIndex), new c(n, e)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(125),
    s = i(65);
  n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(s), "String", {
    padEnd: function (t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
    }
  })
}, function (t, e, i) {
  "use strict";
  var n = i(0),
    r = i(125),
    s = i(65);
  n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(s), "String", {
    padStart: function (t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
    }
  })
}, function (t, e, i) {
  "use strict";
  i(45)("trimLeft", function (t) {
    return function () {
      return t(this, 1)
    }
  }, "trimStart")
}, function (t, e, i) {
  "use strict";
  i(45)("trimRight", function (t) {
    return function () {
      return t(this, 2)
    }
  }, "trimEnd")
}, function (t, e, i) {
  i(90)("asyncIterator")
}, function (t, e, i) {
  i(90)("observable")
}, function (t, e, i) {
  var n = i(0);
  n(n.S, "System", {
    global: i(2)
  })
}, function (t, e, i) {
  i(60)("WeakMap")
}, function (t, e, i) {
  i(61)("WeakMap")
}, function (t, e, i) {
  i(60)("WeakSet")
}, function (t, e, i) {
  i(61)("WeakSet")
}, function (t, e, i) {
  for (var n = i(92), r = i(37), s = i(13), o = i(2), a = i(12), u = i(43), c = i(5), l = c("iterator"), f = c("toStringTag"), h = u.Array, d = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, p = r(d), v = 0; v < p.length; v++) {
    var m, g = p[v],
      _ = d[g],
      b = o[g],
      y = b && b.prototype;
    if (y && (y[l] || a(y, l, h), y[f] || a(y, f, g), u[g] = h, _))
      for (m in n) y[m] || s(y, m, n[m], !0)
  }
}, function (t, e, i) {
  var n = i(0),
    r = i(88);
  n(n.G + n.B, {
    setImmediate: r.set,
    clearImmediate: r.clear
  })
}, function (t, e, i) {
  var n = i(2),
    r = i(0),
    s = i(65),
    o = [].slice,
    a = /MSIE .\./.test(s),
    u = function (t) {
      return function (e, i) {
        var n = arguments.length > 2,
          r = !!n && o.call(arguments, 2);
        return t(n ? function () {
          ("function" == typeof e ? e : Function(e)).apply(this, r)
        } : e, i)
      }
    };
  r(r.G + r.B + r.F * a, {
    setTimeout: u(n.setTimeout),
    setInterval: u(n.setInterval)
  })
}, function (t, e, i) {
  i(282), i(221), i(223), i(222), i(225), i(227), i(232), i(226), i(224), i(234), i(233), i(229), i(230), i(228), i(220), i(231), i(235), i(236), i(188), i(190), i(189), i(238), i(237), i(208), i(218), i(219), i(209), i(210), i(211), i(212), i(213), i(214), i(215), i(216), i(217), i(191), i(192), i(193), i(194), i(195), i(196), i(197), i(198), i(199), i(200), i(201), i(202), i(203), i(204), i(205), i(206), i(207), i(269), i(274), i(281), i(272), i(264), i(265), i(270), i(275), i(277), i(260), i(261), i(262), i(263), i(266), i(267), i(268), i(271), i(273), i(276), i(278), i(279), i(280), i(183), i(185), i(184), i(187), i(186), i(172), i(170), i(176), i(173), i(179), i(181), i(169), i(175), i(166), i(180), i(164), i(178), i(177), i(171), i(174), i(163), i(165), i(168), i(167), i(182), i(92), i(254), i(259), i(129), i(255), i(256), i(257), i(258), i(239), i(128), i(130), i(131), i(294), i(283), i(284), i(289), i(292), i(293), i(287), i(290), i(288), i(291), i(285), i(286), i(240), i(241), i(242), i(243), i(244), i(247), i(245), i(246), i(248), i(249), i(250), i(251), i(253), i(252), i(297), i(295), i(296), i(338), i(341), i(340), i(342), i(343), i(339), i(344), i(345), i(319), i(322), i(318), i(316), i(317), i(320), i(321), i(303), i(337), i(302), i(336), i(348), i(350), i(301), i(335), i(347), i(349), i(300), i(346), i(299), i(304), i(305), i(306), i(307), i(308), i(310), i(309), i(311), i(312), i(313), i(315), i(314), i(324), i(325), i(326), i(327), i(329), i(328), i(331), i(330), i(332), i(333), i(334), i(298), i(323), i(353), i(352), i(351), t.exports = i(20)
}, function (t, e, i) {
  (function (e) {
    ! function (e) {
      "use strict";

      function i(t, e, i, n) {
        var s = e && e.prototype instanceof r ? e : r,
          o = Object.create(s.prototype),
          a = new d(n || []);
        return o._invoke = c(t, i, a), o
      }

      function n(t, e, i) {
        try {
          return {
            type: "normal",
            arg: t.call(e, i)
          }
        } catch (t) {
          return {
            type: "throw",
            arg: t
          }
        }
      }

      function r() {}

      function s() {}

      function o() {}

      function a(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t)
          }
        })
      }

      function u(t) {
        function i(e, r, s, o) {
          var a = n(t[e], t, r);
          if ("throw" !== a.type) {
            var u = a.arg,
              c = u.value;
            return c && "object" == typeof c && _.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
              i("next", t, s, o)
            }, function (t) {
              i("throw", t, s, o)
            }) : Promise.resolve(c).then(function (t) {
              u.value = t, s(u)
            }, o)
          }
          o(a.arg)
        }
        "object" == typeof e.process && e.process.domain && (i = e.process.domain.bind(i));
        var r;
        this._invoke = function (t, e) {
          function n() {
            return new Promise(function (n, r) {
              i(t, e, n, r)
            })
          }
          return r = r ? r.then(n, n) : n()
        }
      }

      function c(t, e, i) {
        var r = T;
        return function (s, o) {
          if (r === C) throw new Error("Generator is already running");
          if (r === E) {
            if ("throw" === s) throw o;
            return v()
          }
          for (i.method = s, i.arg = o;;) {
            var a = i.delegate;
            if (a) {
              var u = l(a, i);
              if (u) {
                if (u === P) continue;
                return u
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;
            else if ("throw" === i.method) {
              if (r === T) throw r = E, i.arg;
              i.dispatchException(i.arg)
            } else "return" === i.method && i.abrupt("return", i.arg);
            r = C;
            var c = n(t, e, i);
            if ("normal" === c.type) {
              if (r = i.done ? E : x, c.arg === P) continue;
              return {
                value: c.arg,
                done: i.done
              }
            }
            "throw" === c.type && (r = E, i.method = "throw", i.arg = c.arg)
          }
        }
      }

      function l(t, e) {
        var i = t.iterator[e.method];
        if (i === m) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = m, l(t, e), "throw" === e.method)) return P;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return P
        }
        var r = n(i, t.iterator, e.arg);
        if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, P;
        var s = r.arg;
        return s ? s.done ? (e[t.resultName] = s.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = m), e.delegate = null, P) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, P)
      }

      function f(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function h(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
      }

      function d(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(f, this), this.reset(!0)
      }

      function p(t) {
        if (t) {
          var e = t[y];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var i = -1,
              n = function e() {
                for (; ++i < t.length;)
                  if (_.call(t, i)) return e.value = t[i], e.done = !1, e;
                return e.value = m, e.done = !0, e
              };
            return n.next = n
          }
        }
        return {
          next: v
        }
      }

      function v() {
        return {
          value: m,
          done: !0
        }
      }
      var m, g = Object.prototype,
        _ = g.hasOwnProperty,
        b = "function" == typeof Symbol ? Symbol : {},
        y = b.iterator || "@@iterator",
        A = b.asyncIterator || "@@asyncIterator",
        w = b.toStringTag || "@@toStringTag",
        S = "object" == typeof t,
        k = e.regeneratorRuntime;
      if (k) S && (t.exports = k);
      else {
        (k = e.regeneratorRuntime = S ? t.exports : {}).wrap = i;
        var T = "suspendedStart",
          x = "suspendedYield",
          C = "executing",
          E = "completed",
          P = {},
          B = {};
        B[y] = function () {
          return this
        };
        var F = Object.getPrototypeOf,
          M = F && F(F(p([])));
        M && M !== g && _.call(M, y) && (B = M);
        var I = o.prototype = r.prototype = Object.create(B);
        s.prototype = I.constructor = o, o.constructor = s, o[w] = s.displayName = "GeneratorFunction", k.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === s || "GeneratorFunction" === (e.displayName || e.name))
        }, k.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : (t.__proto__ = o, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(I), t
        }, k.awrap = function (t) {
          return {
            __await: t
          }
        }, a(u.prototype), u.prototype[A] = function () {
          return this
        }, k.AsyncIterator = u, k.async = function (t, e, n, r) {
          var s = new u(i(t, e, n, r));
          return k.isGeneratorFunction(e) ? s : s.next().then(function (t) {
            return t.done ? t.value : s.next()
          })
        }, a(I), I[w] = "Generator", I[y] = function () {
          return this
        }, I.toString = function () {
          return "[object Generator]"
        }, k.keys = function (t) {
          var e = [];
          for (var i in t) e.push(i);
          return e.reverse(),
            function i() {
              for (; e.length;) {
                var n = e.pop();
                if (n in t) return i.value = n, i.done = !1, i
              }
              return i.done = !0, i
            }
        }, k.values = p, d.prototype = {
          constructor: d,
          reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(h), !t)
              for (var e in this) "t" === e.charAt(0) && _.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
          },
          dispatchException: function (t) {
            function e(e, n) {
              return s.type = "throw", s.arg = t, i.next = e, n && (i.method = "next", i.arg = m), !!n
            }
            if (this.done) throw t;
            for (var i = this, n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n],
                s = r.completion;
              if ("root" === r.tryLoc) return e("end");
              if (r.tryLoc <= this.prev) {
                var o = _.call(r, "catchLoc"),
                  a = _.call(r, "finallyLoc");
                if (o && a) {
                  if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                  if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                } else if (o) {
                  if (this.prev < r.catchLoc) return e(r.catchLoc, !0)
                } else {
                  if (!a) throw new Error("try statement without catch or finally");
                  if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var n = this.tryEntries[i];
              if (n.tryLoc <= this.prev && _.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var r = n;
                break
              }
            }
            r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
            var s = r ? r.completion : {};
            return s.type = t, s.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, P) : this.complete(s)
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), P
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var i = this.tryEntries[e];
              if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), h(i), P
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var i = this.tryEntries[e];
              if (i.tryLoc === t) {
                var n = i.completion;
                if ("throw" === n.type) {
                  var r = n.arg;
                  h(i)
                }
                return r
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function (t, e, i) {
            return this.delegate = {
              iterator: p(t),
              resultName: e,
              nextLoc: i
            }, "next" === this.method && (this.arg = m), P
          }
        }
      }
    }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
  }).call(e, i(132))
}, function (t, e, i) {
  i(134), t.exports = i(133)
}]);
