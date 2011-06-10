window.google = {
  kEI: "fXzwTfHYGY3cvQOi5ICSBA",
  kEXPI: "17259,17291,24999,28504,29229,29689,29696,29795,30097,30349,30731,30785,30804,30811,30812,52922",
  kCSI: {
    e: "17259,17291,24999,28504,29229,29689,29696,29795,30097,30349,30731,30785,30804,30811,30812,52922",
    ei: "fXzwTfHYGY3cvQOi5ICSBA",
    expi: "17259,17291,24999,28504,29229,29689,29696,29795,30097,30349,30731,30785,30804,30811,30812,52922"
  },
  authuser: 0,
  ml: function () {},
  pageState: "#",
  kHL: "en",
  time: function () {
    return (new Date).getTime()
  },
  log: function (c, d, b) {
    var a = new Image,
    e = google,
    g = e.lc,
    f = e.li;
    a.onerror = (a.onload = (a.onabort = function () {
      delete g[f]
    }));
    g[f] = a;
    b = b || "/gen_204?atyp=i&ct=" + c + "&cad=" + d + "&zx=" + google.time();
    a.src = b;
    e.li = f + 1
  },
  lc: [],
  li: 0,
  j: {
    en: 1,
    l: function () {
      google.fl = true
    },
    e: function () {
      google.fl = true
    },
    b: location.hash && location.hash != "#",
    bv: 8,
    pm: "p",
    pl: [],
    mc: 0,
    sc: 0.5,
    u: "487ad888"
  },
  Toolbelt: {}
};
(function () {
  var c = google.j;
  window.onpopstate = function () {
    c.psc = 1
  };
  for (var d = 0, b; b = ["ad", "bc", "is", "p", "pa", "ac", "pc", "pah", "ph", "sa", "slp", "spf", "xx", "zc", "zz"][d++];)(function (a) {
    c[a] = function () {
      c.pl.push([a, arguments])
    }
  })(b)
})();
if (!window.chrome) window.chrome = {};
window.chrome.sv = 1.00;
window.google.sn = "webhp";
var i = window.google.timers = {};
window.google.startTick = function (a, b) {
  i[a] = {
    t: {
      start: (new Date).getTime()
    },
    bfr: !(!b)
  }
};
window.google.tick = function (a, b, c) {
  if (!i[a]) google.startTick(a);
  i[a].t[b] = c || (new Date).getTime()
};
google.startTick("load", true);
try {
  window.google.pt = window.gtbExternal && window.gtbExternal.pageT();
} catch (v) {}
