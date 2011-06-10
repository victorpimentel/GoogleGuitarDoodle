(function () {
  var g = null,
      h;
  try {
    if (!google.doodle) google.doodle = {};
    var i, m, n, o, r, s, t, u, v, aa, w, ba, ca, da = navigator.userAgent.indexOf("MSIE") >= 0,
        ea = [
        [3, "#776a62", "#2063ff", 2, [
          [28, 23],
          [103, 23]
        ]],
        [5, "#776a62", "#f61b33", 2, [
          [28, 38],
          [103, 38]
        ]],
        [0, "#776a62", "#ffdd24", 2, [
          [65, 67],
          [318, 67]
        ]],
        [2, "#776a62", "#07d238", 2, [
          [28, 81],
          [281, 81]
        ]],
        [7, "#776a62", "#2063ff", 1, [
          [28, 96.5],
          [281, 96.5]
        ]],
        [9, "#776a62", "#f61b33", 1, [
          [29, 111.5],
          [104, 111.5]
        ]],
        [1, "#776a62", "#07d238", 2, [
          [358, 66],
          [433, 66]
        ]],
        [4, "#776a62", "#2063ff", 2, [
          [358, 81],
          [433, 81]
        ]],
        [6, "#776a62", "#f61b33", 2, [
          [330, 96],
          [405, 96]
        ]],
        [8, "#776a62", "#ffdd24", 1, [
          [358, 111.5],
          [434, 111.5]
        ]]
        ],
        fa = 0,
        ga = 0,
        x = 0,
        y = 0,
        z = !0,
        A = [],
        B = g,
        C = g,
        D = function (a) {
        a && a.parentNode && a.parentNode.removeChild(a)
        },
        E = function (a, b, c) {
        if (a) {
          if (!google.doodle.ba) google.doodle.ba = [];
          google.doodle.ba.push(arguments);
          var d = a,
              e = b,
              f = c;
          d.addEventListener ? d.addEventListener(e, f, !1) : d.attachEvent("on" + e, f)
        }
        },
        ha = function (a, b, c) {
        a && (a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c))
        },
        ia = function () {
        if (google.doodle.ba) for (var a; a = google.doodle.ba.pop();) ha.apply(g, a)
        },
        F = function (a) {
        a ? a.stopPropagation && a.stopPropagation() : window.event.cancelBubble = !0;
        return !1
        },
        G = function (a) {
        if (i !== a) {
          var b = i;
          i = a;
          for (a = 0; a < A.length; ++a) A[a](b)
        }
        },
        H = 0;
    A.push(function () {
      var a = document.getElementById("hplogo-on");
      if (a) if (i == 4) a.style.backgroundPosition = "-809px 0";
      else {
        a.style.backgroundPosition = "-809px -39px";
        a = document.forms.f || document.forms.gs || document.forms.ab;
        try {
          a.q.focus()
        } catch (b) {}
      }
    });
    var ja = function (a) {
        G(i == 4 ? 0 : 4);
        return F(a)
        },
        I = g,
        la = function (a) {
        D(document.getElementById("goo-gl-script"));
        I && window.clearTimeout(I);
        var b = "http://google-lespaul.appspot.com?callback=google.doodle.url&url=" + encodeURIComponent(a),
            c = document.createElement("script");
        c.src = b;
        c.id = "goo-gl-script";
        I = window.setTimeout(function () {
          ka(a)
        }, 2E3);
        (document.getElementById("xjsc") || document.body).appendChild(c)
        },
        ma = function (a) {
        a && a.status == "OK" && !a.error && a.id && ka(a.id)
        },
        ka = function (a) {
        if (i == 0 || i == 4) {
          window.clearTimeout(I);
          var b = document.getElementById("hplogo-lcd-text");
          if (b) b.value = a, b.select()
        }
        },
        J = [
        [0, 0, 0, 0, 0, 0],
        [-540, -162, 9, 9, 59, 139],
        [-551, -162, 9, 6, 62, 139],
        [-559, -162, 11, 17, 55, 138]
        ],
        L = function (a) {
        var b = document.getElementById("hplogo-lcd-screen");
        if (b) b.style.backgroundPosition = "-678px -139px";
        if (b = document.getElementById("hplogo-lcd-icon")) b.style.backgroundPosition = J[a][0] + "px " + J[a][1] + "px", b.style.height = J[a][2] + "px", b.style.width = J[a][3] + "px", b.style.left = J[a][4] + "px", b.style.top = J[a][5] + "px"
        };
    A.push(function (a) {
      var b = document.getElementById("hplogo-lcd-text");
      if (i == 5) {
        if (L(1), b.value == "") b.value = "Playing..."
      } else if (B && (i == 0 || i == 4)) {
        if (L(2), M(), b.value == "Playing...") b.value = ""
      } else if (i == 1) L(3), b.value = "Recording";
      if (i != 2 && (a == 1 || a == 2) && B) B.stop(), M(), L(B.d.length == 0 ? 0 : 2), b.value = "", C = g, (a = B.Wa()) && la(a)
    });
    var na = function (a) {
        B && (i == 0 || i == 4) ? (G(5), B.play()) : i == 5 && G(4);
        return F(a)
        };
    A.push(function () {
      if (i != 0) try {
        document.getElementById("hplogo-i").focus()
      } catch (a) {}
    });
    A.push(function () {
      i == 1 && (B = new N, C = B.Za())
    });
    var oa = !1,
        O = g,
        qa = function () {
        P();
        O = window.setTimeout(function () {
          pa(!0)
        }, 1E3)
        },
        P = function () {
        O && window.clearTimeout(O);
        O = g;
        pa(!1)
        },
        pa = function (a) {
        var b = document.getElementById("hplogot");
        if (b) oa ? (b.style.display = "block", b.style.opacity = a ? 1 : 0) : b.style.display = a ? "block" : "none"
        },
        va = function () {
        E(document, "keydown", ra);
        E(document, "mousemove", Q);
        E(document, "touchmove", Q);
        E(document, "touchstart", sa);
        E(window, "resize", ta);
        var a = document.forms.f || document.forms.gs || document.forms.ab;
        a && (E(a.q, "blur", function () {
          m = !1
        }), E(a.q, "focus", function () {
          m = !0;
          i != 5 && G(0)
        }));
        E(document.body, "mouseout", ua);
        if (a = document.getElementById("hplogo-on")) a.onclick = ja, a.style.cursor = "pointer";
        if (a = document.getElementById("hplogo-led")) a.onclick = ja, a.style.cursor = "pointer";
        if (a = document.getElementById("hplogo-lcd-icon")) a.onclick = na;
        if ((a = document.getElementById("hplogo-click")) && !da) a.onmousemove = qa, a.onmouseout = P
        },
        sa = function (a) {
        var b = wa(a);
        b[0] >= x && b[0] <= x + 474 && b[1] >= y && b[1] <= y + 175 && a.preventDefault()
        },
        wa = function (a) {
        a = a || window.event;
        return [(a.clientX || a.targetTouches && a.targetTouches[0].clientX || 0) + (document.body.scrollLeft || document.documentElement.scrollLeft), (a.clientY || a.targetTouches && a.targetTouches[0].clientY || 0) + (document.body.scrollTop || document.documentElement.scrollTop)]
        },
        Q = function (a) {
        a = a || window.event;
        a = wa(a);
        fa = a[0];
        ga = a[1]
        },
        xa = {
        49: 2,
        50: 6,
        51: 3,
        52: 0,
        53: 7,
        54: 1,
        55: 8,
        56: 4,
        57: 9,
        48: 5,
        81: 2,
        87: 6,
        69: 3,
        82: 0,
        84: 7,
        89: 1,
        85: 8,
        73: 4,
        79: 9,
        80: 5,
        65: 2,
        83: 6,
        68: 3,
        70: 0,
        71: 7,
        72: 1,
        74: 8,
        75: 4,
        76: 9,
        186: 5,
        90: 2,
        88: 6,
        67: 3,
        86: 0,
        66: 7,
        78: 1,
        77: 8,
        188: 4,
        190: 9,
        191: 5
        },
        ra = function (a) {
        var b = a || window.event;
        return n && !m && !b.altKey && !b.ctrlKey && !b.metaKey && (b = xa[b.keyCode], typeof b == "number") ? (i == 0 && G(4), n.aa(b), F(a)) : !0
        },
        ta = function () {
        z && o != g && (z = !1, window.setTimeout(function () {
          z = !0;
          var a = o,
              b = 0;
          do b += a.offsetLeft;
          while (a = a.offsetParent);
          x = b;
          a = o;
          b = 0;
          do b += a.offsetTop;
          while (a = a.offsetParent);
          y = b
        }, 30))
        },
        ua = function (a) {
        (a = a || window.event) && !a.toElement && Q(a)
        },
        ya = function (a, b) {
        this.a = a;
        this.P = b;
        this.width = 474;
        this.height = 175;
        this.A = [];
        this.Aa = this.M = !1;
        this.Z = 0;
        this.ia = this.L();
        this.ja = this.$();
        this.ga = new R(0, 0);
        this.ha = new R(0, 0);
        this.za = !0;
        this.Ca = (new Date).getTime();
        this.Oa();
        this.Ba()
        };
    h = ya.prototype;
    h.Oa = function () {
      for (var a = 0, b; b = ea[a++];) this.A.push(new za(b[4][0][0], b[4][0][1], b[4][1][0], b[4][1][1], b[3], b[1], b[2], a, b[0], this.a, this.P, this))
    };
    h.L = function () {
      return fa - x
    };
    h.$ = function () {
      return ga - y
    };
    h.ya = function (a) {
      return S(a, this.width) / this.width
    };
    h.bb = function () {
      this.Ta();
      this.Aa && this.Sa();
      this.M && (this.a && this.a.clearRect(0, 0, this.width, this.height), this.Ba())
    };
    h.Ba = function () {
      for (var a = 0, b; b = this.A[a++];) b.Ya(), b.Xa()
    };
    h.na = function () {
      if (this.A) for (var a = 0, b; b = this.A[a++];) b.na()
    };
    h.Ma = function () {
      for (var a = 0, b; b = this.A[a++];) if (b.C || b.G) {
        this.M = !0;
        return
      }
      this.M = !1
    };
    h.Ta = function () {
      var a = (new Date).getTime(),
          b = (a - this.Ca) / 1E3;
      this.Ca = a;
      var a = this.L(),
          c = this.$();
      this.ga.x = this.ia;
      this.ga.y = this.ja;
      this.ha.x = a;
      this.ha.y = c;
      var d = a - this.ia,
          e = c - this.ja,
          d = Math.sqrt(d * d + e * e);
      this.Aa = d > 0;
      this.Z = (this.Z * 4 + S(((b > 0 ? d / b : 0) - 70) / 1430, 1)) / 5;
      this.ia = a;
      this.ja = c
    };
    h.Sa = function () {
      if (this.za) this.za = !1;
      else for (var a = 0, b; b = this.A[a++];) {
        var c;
        c = this.ga;
        var d = this.ha,
            e = b.Ia,
            f = b.Ha,
            j = d.y - c.y,
            p = f.y - e.y,
            k = c.x - d.x,
            l = e.x - f.x,
            q = d.x * c.y - c.x * d.y,
            K = f.x * e.y - e.x * f.y,
            V = j * l - p * k;
        V == 0 ? c = g : (k = (k * K - l * q) / V, j = (p * q - j * K) / V, c = Math.pow(k - d.x, 2) + Math.pow(j - d.y, 2) > Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2) || Math.pow(k - c.x, 2) + Math.pow(j - c.y, 2) > Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2) || Math.pow(k - f.x, 2) + Math.pow(j - f.y, 2) > Math.pow(e.x - f.x, 2) + Math.pow(e.y - f.y, 2) || Math.pow(k - e.x, 2) + Math.pow(j - e.y, 2) > Math.pow(e.x - f.x, 2) + Math.pow(e.y - f.y, 2) ? g : new R(k, j));
        c && !b.C && (this.Z < 0.4 ? b.Pa(c.x, c.y) : b.Da(c.x, c.y, !1))
      }
    };
    h.aa = function (a) {
      a >= 0 && a < 12 && this.A[a].aa()
    };
    var S = function (a, b) {
        return a < 0 ? 0 : a > b ? b : a
        },
        Aa = function (a) {
        for (var b = [], a = a.match(/[0-9a-f]{2}/gi), c = 0, d; d = a[c++];) b.push(parseInt(d, 16));
        return b
        },
        R = function (a, b) {
        this.x = a;
        this.y = b
        },
        za = function (a, b, c, d, e, f, j, p, k, l, q, K) {
        this.k = a;
        this.o = b;
        this.W = c;
        this.X = d;
        this.Ia = new R(this.k, this.o);
        this.Ha = new R(this.W, this.X);
        this.J = this.W - this.k;
        this.K = this.X - this.o;
        this.length = Math.sqrt(this.J * this.J + this.K * this.K);
        this.H = this.k + this.J * 0.5;
        this.I = this.o + this.K * 0.5;
        this.N = this.H;
        this.O = this.I;
        this.qa = this.oa = this.z = this.w = 0;
        this.Y = k;
        this.ua = this.Y / 11;
        this.ta = this.D = this.u = this.ca = 0;
        this.U = Math.atan2(this.K, this.J);
        this.T = Math.sin(this.U);
        this.da = Math.cos(this.U);
        a = Math.PI / 2 - this.U;
        this.Ga = Math.sin(a);
        this.Fa = Math.cos(a);
        this.index = p;
        this.lineWidth = e;
        this.ea = f;
        this.ra = j;
        this.S = this.ea;
        this.color = this.i;
        this.i = Aa(this.ea);
        this.V = Aa(this.ra);
        this.s = this.b = 0;
        this.Q = this.G = this.C = !1;
        this.fa = 1;
        this.a = l;
        this.P = q;
        this.g = K;
        this.c = (e = this.length > 100) ? 7.5 : 5;
        this.Ja = 0.88 + (0.85 - 0.88) * this.ua;
        this.Ka = 1.4 + 1.5 * this.ua;
        this.R = 0;
        if (!this.a) this.v = document.createElement("div"), this.v.className = "hplogo-str", this.v.style.left = this.k + 1 + "px", this.v.style.top = this.o - 10 + "px", this.v.style.width = this.length, this.La = e ? -475 : -730, this.P.appendChild(this.v)
        };
    h = za.prototype;
    h.na = function () {
      if (this.v) this.P.removeChild(this.v), this.v = g
    };
    h.Xa = function () {
      var a, b;
      (this.C || this.Q) && this.w && this.z ? (a = this.w, b = this.z) : (a = this.N, b = this.O);
      var c = a - this.k,
          d = b - this.o,
          e = this.W - a,
          f = this.X - b;
      this.a ? (this.a.beginPath(), this.a.lineCap = "round", this.a.strokeStyle = this.S, this.a.lineWidth = this.lineWidth, this.a.shadowOffsetX = 2, this.a.shadowOffsetY = 3, this.a.shadowBlur = 2, this.a.shadowColor = "rgba(0, 0, 0, 0.35)", c = Math.sqrt(c * c + d * d), f = Math.sqrt(e * e + f * f), e = 0.45 * c * this.da, c = 0.45 * c * this.T, d = 0.45 * f * this.da, f = 0.45 * f * this.T, this.a.moveTo(this.k, this.o), this.a.bezierCurveTo(a - e, b - c, a + d, b + f, this.W, this.X), this.a.stroke(), this.a.closePath()) : this.v.style.backgroundPosition = this.La + "px " + -(3 + Math.round(d / 2)) * 20 + "px"
    };
    h.Ya = function () {
      this.C ? this.Ea() : this.G && this.Va()
    };
    h.Va = function () {
      if (this.Q) {
        this.S = this.ra;
        var a = this.oa - this.w,
            b = this.qa - this.z;
        this.w += a * 0.8;
        this.z += b * 0.8;
        if (Math.abs(a) < 2 && Math.abs(b) < 2) this.R = 0, this.fa = 1, this.Q = !1, (a >= 0 ? 1 : -1) != (this.T >= 0 ? 1 : -1) && (this.fa *= -1)
      } else if (this.color = [this.i[0] + (this.V[0] - this.i[0]) * (this.b > this.c * 0.25 ? 1 : this.b / (this.c * 0.25)), this.i[1] + (this.V[1] - this.i[1]) * (this.b > this.c * 0.25 ? 1 : this.b / (this.c * 0.25)), this.i[2] + (this.V[2] - this.i[2]) * (this.b > this.c * 0.25 ? 1 : this.b / (this.c * 0.25)), this.i[3] + (this.V[3] - this.i[3]) * (this.b > this.c * 0.25 ? 1 : this.b / (this.c * 0.25))], this.S = "rgb(" + Math.round(this.color[0]) + "," + Math.round(this.color[1]) + "," + Math.round(this.color[2]) + ")", this.R += this.Ka * this.fa, a = Math.sin(this.R), this.b *= this.Ja, this.N = this.H + a * this.T * this.b, this.O = this.I - a * this.da * this.b, this.b <= 0.15) this.b = 0, this.G = !1, this.color = this.i, this.S = this.ea, this.g.Ma()
    };
    h.Ea = function () {
      var a = this.g.L(),
          b = this.g.$(),
          c = a - this.k,
          d = b - this.o,
          e = this.U - Math.atan2(d, c),
          c = Math.sqrt(c * c + d * d);
      this.u = c * Math.sin(e);
      this.va(S(c * Math.cos(e) / this.length, 1));
      this.s = S(Math.abs(this.u) / this.c, 1);
      Math.abs(this.u) > this.ca ? this.Na() : (this.w = a, this.z = b)
    };
    h.va = function (a) {
      this.D = a;
      this.ta = this.D <= 0.5 ? this.D / 0.5 : 1 - (this.D - 0.5) / 0.5;
      this.ca = this.c * this.ta
    };
    h.Da = function (a, b, c) {
      this.w = a;
      this.z = b;
      var b = this.g.L() - this.k,
          d = this.g.$() - this.o;
      this.va(S(Math.sqrt(b * b + d * d) / this.length, 1));
      this.u = (1 - (c ? 1 : this.g.Z)) * this.ca;
      this.s = c ? 1 : S(Math.abs(this.u) / this.c, 1);
      if (this.u < 3) this.u = 3;
      this.w += this.u * this.Fa;
      this.z += this.u * this.Ga;
      this.N = this.H;
      this.O = this.I;
      this.G ? (this.s = S(this.s / 2 + this.b / this.c, 1), this.b = this.s * this.c) : (this.b = this.s * this.c, this.xa());
      this.wa(this.s, this.g.ya(a))
    };
    h.aa = function () {
      this.Da(this.H, this.I, !0)
    };
    h.Pa = function (a, b) {
      this.C = !0;
      this.g.M = !0;
      this.w = a;
      this.z = b;
      this.Ea()
    };
    h.Na = function () {
      this.C = !1;
      this.N = this.H;
      this.O = this.I;
      this.b = this.s * this.c;
      this.wa(this.s, this.g.ya(this.g.L()));
      this.xa()
    };
    h.xa = function () {
      this.g.M = !0;
      this.oa = this.k + this.D * this.J;
      this.qa = this.o + this.D * this.K;
      this.R = 0;
      this.Q = this.G = !0
    };
    h.wa = function (a, b) {
      if (r) try {
        s.playTrack("guitar-" + (this.Y < 10 ? "0" : "") + this.Y, this.Y, 0.4 + (0.6 - 0.4) * a, -0.8 + 1.6 * b)
      } catch (c) {
        r = !1
      }
      C && C([this.index - 1])
    };
    var Ba = function () {
        if (r) for (var a = 0; a < 12; a++) if (r) try {
          s.stopChannel(a)
        } catch (b) {
          r = !1
        }
        },
        Da = function () {
        v && (Ca("guitar11-sound-player") || Ca("guitar11-sound-player-2"))
        },
        Ca = function (a) {
        return (a = v.getElementById(a)) && a.playTrack ? (s = a, r = !0) : !1
        },
        T = function (a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0
        },
        U = function (a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
        },
        Ea = function () {
        var a = !1,
            b = "";
        if (navigator.plugins && navigator.plugins.length) {
          var c = navigator.plugins["Shockwave Flash"];
          c && (a = !0, c.description && (b = U(c.description)));
          navigator.plugins["Shockwave Flash 2.0"] && (a = !0, b = "2.0.0.11")
        } else if (navigator.mimeTypes && navigator.mimeTypes.length)(a = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && (b = U(c.enabledPlugin.description));
        else try {
          c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), a = !0, b = U(c.GetVariable("$version"))
        } catch (d) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = !0, b = "6.0.21"
          } catch (e) {
            try {
              c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), a = !0, b = U(c.GetVariable("$version"))
            } catch (f) {}
          }
        }
        t = a;
        aa = b
        },
        Fa = function () {
        for (var a = 0, b = String(aa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), c = String("9.0.0.0").replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(b.length, c.length), e = 0; a == 0 && e < d; e++) {
          var f = b[e] || "",
              j = c[e] || "",
              p = RegExp("(\\d*)(\\D*)", "g"),
              k = RegExp("(\\d*)(\\D*)", "g");
          do {
            var l = p.exec(f) || ["", "", ""],
                q = k.exec(j) || ["", "", ""];
            if (l[0].length == 0 && q[0].length == 0) break;
            a = T(l[1].length == 0 ? 0 : parseInt(l[1], 10), q[1].length == 0 ? 0 : parseInt(q[1], 10)) || T(l[2].length == 0, q[2].length == 0) || T(l[2], q[2])
          } while (a == 0)
        }
        return a >= 0
        },
        W = g,
        X = function (a, b) {
        this.F = a;
        this.duration = Math.max(b, 0);
        var c = 0;
        c += this.F.length == 1 ? 5 : 11;
        c += this.duration < Math.pow(2, 5) ? 6 : 21;
        this.size = c
        };
    X.prototype.play = function () {
      for (var a = 0; a < this.F.length; ++a) n.aa(this.F[a])
    };
    var Y = function (a, b) {
        for (var c = [], d = 0; d < b; ++d) c.push( !! (a & 1)), a >>= 1;
        return c
        },
        Ga = function (a) {
        for (var b = [], c = 0; c < 10; ++c) b.push(!1);
        for (c = 0; c < a.length; ++c) b[a[c]] = !0;
        return b
        };
    X.prototype.ma = function () {
      var a = [];
      this.F.length == 1 ? (a.push(!1), a = a.concat(Y(this.F[0], 4))) : (a.push(!0), a = a.concat(Ga(this.F)));
      this.duration < Math.pow(2, 5) ? (a.push(!1), a = a.concat(Y(this.duration, 5))) : (a.push(!0), a = a.concat(Y(this.duration, 20)));
      return a
    };
    var N = function (a) {
        this.d = a || [];
        this.ka = g;
        for (var b = this.duration = a = 0; b < this.d.length; ++b) a += this.d[b].size, b != 0 && (this.duration += this.d[b].duration * 50);
        this.size = a
        };
    N.prototype.Qa = function (a) {
      this.d.push(a);
      this.size += a.size;
      this.d.size > 1 && (this.duration += a.duration * 50)
    };
    N.prototype.Ra = function () {
      return (this.size + 4) * 1.37 / 8
    };
    var Ha = g,
        Ia = function () {
        i == 1 && G(2)
        },
        Ja = g,
        Ka = function () {
        (i == 1 || i == 2) && G(4)
        };
    N.prototype.Za = function () {
      this.la = 0;
      this.B = [];
      this.Ua = !0;
      var a = this;
      this.ka = window.setTimeout(function () {
        a.tick(!0)
      }, 50);
      return function (b) {
        a.B.push(b)
      }
    };
    N.prototype.tick = function (a) {
      this.la++;
      if (this.B && this.B.length > 0) {
        var b = this.la;
        this.la = 0;
        var c;
        if (this.B.length == 1) c = this.B[0];
        else {
          for (var d = [], e = 0; c = this.B[e++];) for (var f = 0; f < c.length; ++f) d[c[f]] = 1;
          c = [];
          for (e = 0; e < d.length; ++e) d[e] && c.push(e)
        }
        this.B = [];
        this.Qa(new X(c, b));
        this.d.length == 1 && (window.clearTimeout(Ja), Ja = window.setTimeout(Ka, 28E3), window.clearTimeout(Ha), Ha = window.setTimeout(Ia, 23E3));
        b = this.Ra();
        if (b >= 1900 || this.duration >= 28E3) {
          G(4);
          return
        } else b >= 1800 && G(2)
      }
      if (a) {
        var j = this;
        this.ka = window.setTimeout(function () {
          j.tick(!0)
        }, 50)
      }
    };
    N.prototype.stop = function () {
      window.clearTimeout(this.ka);
      this.tick(!1);
      if (this.d.length > 0) this.d[0].duration = 0;
      this.Ua = !1
    };
    N.prototype.play = function (a) {
      if (i == 5) if (this.duration > 28E3) i == 5 && G(4);
      else {
        var b = a || 0;
        b > 0 && this.d[b - 1].play();
        if (b >= this.d.length) i == 5 && G(4);
        else {
          var c = this;
          window.setTimeout(function () {
            c.play(b + 1)
          }, this.d[b].duration * 50)
        }
      }
    };
    eval("google.doodle.mod = (function(a,n){return a" + "%%".charAt(0) + "n;})");
    N.prototype.ma = function () {
      for (var a = [], b = 0; b < this.d.length; ++b) a = a.concat(this.d[b].ma());
      for (window.bits = a; google.doodle.mod(a.length, 8) != 0;) a.push(!1);
      return a
    };
    N.prototype.Wa = function () {
      if (this.d.length == 0) return g;
      var a = "http://www.google.com/webhp?",
          b;
      if (b = window.location.toString()) {
        b = b.match(/\?[^#]*/);
        b = (b && b.length > 0 ? b[0].substr(1) : "").split("&");
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d];
          e && (e = e.split("="), c[e[0]] = e[1] || "")
        }
        b = c
      } else b = {};
      (b = b.hl) && (a += "hl=" + b + "&");
      a += "tune=";
      c = this.ma();
      b = [];
      for (d = 0; d < c.length; d += 8) {
        for (var f = e = 0; f < 8; ++f) e *= 2, e |= c[d + f] ? 1 : 0;
        b.push(e)
      }
      if (!W) {
        W = {};
        for (c = 0; c < 65; c++) W[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_*".charAt(c)
      }
      c = W;
      d = [];
      for (e = 0; e < b.length; e += 3) {
        var j = b[e],
            p = (f = e + 1 < b.length) ? b[e + 1] : 0,
            k = e + 2 < b.length,
            l = k ? b[e + 2] : 0,
            q = j >> 2,
            j = (j & 3) * 16 | p >> 4,
            p = (p & 15) * 4 | l >> 6;
        l &= 63;
        k || (l = 64, f || (p = 64));
        d.push(c[q], c[j], c[p], c[l])
      }
      return a + d.join("")
    };
    var Z = function () {
        if (google.rein && google.dstr && !google.doodle.$a) google.doodle.$a = !0, google.rein.push(Z), google.dstr.push($);
        if (document.getElementById("hplogo")) {
          $();
          google.psy && google.psy.q && google.msg && google.msg.listen(22, function () {
            $();
            return !0
          });
          google.doodle.url = ma;
          o = document.getElementById("hplogo-g");
          w = document.createElement("canvas");
          w.getContext ? (w.width = 474, w.height = 175, w.hideFocus = !0, ba = w.getContext("2d"), o.appendChild(w)) : w = g;
          ta();
          n = new ya(ba, o);
          r = !1;
          Ea();
          if (t && Fa()) {
            google.doodle.flashLoaded = Da;
            u = document.createElement("iframe");
            u.name = "doodle-sound";
            u.style.position = "absolute";
            u.style.top = "-150px";
            u.style.border = 0;
            u.style.width = "100px";
            u.style.height = "100px";
            document.getElementById("hplogo").appendChild(u);
            v = u.contentDocument;
            if (v == void 0 || v == g) v = u.contentWindow.document;
            v.open();
            v.write("<html><head><\/head><body><object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0\" width=\"0\" height=\"0\" id=\"guitar11-sound-player\" type=\"application/x-shockwave-flash\"><param name=\"movie\" value=\"guitar11.swf\"><param name=\"allowScriptAccess\" value=\"always\"><object id=\"guitar11-sound-player-2\" type=\"application/x-shockwave-flash\" data=\"guitar11.swf\" width=\"0\" height=\"0\"><param name=\"allowScriptAccess\" value=\"always\"><\/object><\/object><\/body><\/html>");
            v.close()
          }
          var a = document.getElementById("hplogot");
          a && (oa = typeof a.style.opacity != "undefined");
          va();
          m = !0;
          La();
          if (da) try {
            document.execCommand("BackgroundImageCache", !1, !0)
          } catch (b) {}
        }
        },
        La = function () {
        n && (n.bb(), ca = window.setTimeout(La, 30));
        var a = document.getElementById("hplogo-led");
        if (a && H) a.style.backgroundPosition = -540 - 23 * Math.abs(Math.round(5 * Math.sin(H * Math.PI / 12))) + "px -139px", H++
        },
        M = function () {
        var a = document.getElementById("hplogo-led");
        if (a) a.style.backgroundPosition = "1000px 1000px"
        },
        $ = function () {
        try {
          window.clearTimeout(ca);
          P();
          Ba();
          ia();
          n && (n.na(), n = g);
          u && (D(u), u = g, r = !1);
          w && (D(w), w = g);
          B && B.stop();
          C = B = g;
          G(0);
          var a = document.getElementById("hplogo-lcd-text");
          if (a) a.value = "";
          var b = document.getElementById("hplogo-lcd-screen");
          if (b) b.style.backgroundPosition = "1000px 1000px";
          M();
          google.msg && window.setTimeout(function () {
            google.msg.unlisten(22, $)
          }, 0)
        } catch (c) {}
        };
    google.doodle.cpDestroy = $;
    google.doodle.go = function () {
      google.nav && google.nav.go ? google.nav.go("/search?q=Les+Paul&ct=lespaul11-hp&oi=ddle") : window.location.href = "/search?q=Les+Paul&ct=lespaul11-hp&oi=ddle"
    };
    google.x ? google.x("DOODLE", Z) : Z()
  } catch (Ma) {
    google.ml(Ma, !1, {
      cause: "DOODLE"
    })
  };
})();
