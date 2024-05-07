(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/vanilla-lazyload/dist/lazyload.min.js
  var require_lazyload_min = __commonJS({
    "node_modules/vanilla-lazyload/dist/lazyload.min.js"(exports, module) {
      !function(n2, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define(t2) : (n2 = "undefined" != typeof globalThis ? globalThis : n2 || self).LazyLoad = t2();
      }(exports, function() {
        "use strict";
        function n2() {
          return n2 = Object.assign || function(n3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var e3 = arguments[t3];
              for (var i3 in e3)
                Object.prototype.hasOwnProperty.call(e3, i3) && (n3[i3] = e3[i3]);
            }
            return n3;
          }, n2.apply(this, arguments);
        }
        var t2 = "undefined" != typeof window, e2 = t2 && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i2 = t2 && "IntersectionObserver" in window, o2 = t2 && "classList" in document.createElement("p"), a2 = t2 && window.devicePixelRatio > 1, r2 = { elements_selector: ".lazy", container: e2 || t2 ? document : null, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", data_bg_hidpi: "bg-hidpi", data_bg_multi: "bg-multi", data_bg_multi_hidpi: "bg-multi-hidpi", data_bg_set: "bg-set", data_poster: "poster", class_applied: "applied", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_entered: "entered", class_exited: "exited", unobserve_completed: true, unobserve_entered: false, cancel_on_exit: true, callback_enter: null, callback_exit: null, callback_applied: null, callback_loading: null, callback_loaded: null, callback_error: null, callback_finish: null, callback_cancel: null, use_native: false, restore_on_error: false }, c = function(t3) {
          return n2({}, r2, t3);
        }, l2 = function(n3, t3) {
          var e3, i3 = "LazyLoad::Initialized", o3 = new n3(t3);
          try {
            e3 = new CustomEvent(i3, { detail: { instance: o3 } });
          } catch (n4) {
            (e3 = document.createEvent("CustomEvent")).initCustomEvent(i3, false, false, { instance: o3 });
          }
          window.dispatchEvent(e3);
        }, u = "src", s2 = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", m = "error", h = "native", E = "data-", I = "ll-status", y = function(n3, t3) {
          return n3.getAttribute(E + t3);
        }, k = function(n3) {
          return y(n3, I);
        }, w = function(n3, t3) {
          return function(n4, t4, e3) {
            var i3 = "data-ll-status";
            null !== e3 ? n4.setAttribute(i3, e3) : n4.removeAttribute(i3);
          }(n3, 0, t3);
        }, A = function(n3) {
          return w(n3, null);
        }, L = function(n3) {
          return null === k(n3);
        }, O = function(n3) {
          return k(n3) === h;
        }, x = [v, b, p, m], C = function(n3, t3, e3, i3) {
          n3 && "function" == typeof n3 && (void 0 === i3 ? void 0 === e3 ? n3(t3) : n3(t3, e3) : n3(t3, e3, i3));
        }, N = function(n3, t3) {
          "" !== t3 && (o2 ? n3.classList.add(t3) : n3.className += (n3.className ? " " : "") + t3);
        }, M = function(n3, t3) {
          "" !== t3 && (o2 ? n3.classList.remove(t3) : n3.className = n3.className.replace(new RegExp("(^|\\s+)" + t3 + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""));
        }, z = function(n3) {
          return n3.llTempImage;
        }, T = function(n3, t3) {
          if (t3) {
            var e3 = t3._observer;
            e3 && e3.unobserve(n3);
          }
        }, R = function(n3, t3) {
          n3 && (n3.loadingCount += t3);
        }, G = function(n3, t3) {
          n3 && (n3.toLoadCount = t3);
        }, j = function(n3) {
          for (var t3, e3 = [], i3 = 0; t3 = n3.children[i3]; i3 += 1)
            "SOURCE" === t3.tagName && e3.push(t3);
          return e3;
        }, D = function(n3, t3) {
          var e3 = n3.parentNode;
          e3 && "PICTURE" === e3.tagName && j(e3).forEach(t3);
        }, H = function(n3, t3) {
          j(n3).forEach(t3);
        }, V = [u], F = [u, f], B = [u, s2, d], J = [g], P = function(n3) {
          return !!n3[_];
        }, S = function(n3) {
          return n3[_];
        }, U = function(n3) {
          return delete n3[_];
        }, $2 = function(n3, t3) {
          if (!P(n3)) {
            var e3 = {};
            t3.forEach(function(t4) {
              e3[t4] = n3.getAttribute(t4);
            }), n3[_] = e3;
          }
        }, q = function(n3, t3) {
          if (P(n3)) {
            var e3 = S(n3);
            t3.forEach(function(t4) {
              !function(n4, t5, e4) {
                e4 ? n4.setAttribute(t5, e4) : n4.removeAttribute(t5);
              }(n3, t4, e3[t4]);
            });
          }
        }, K = function(n3, t3, e3) {
          N(n3, t3.class_applied), w(n3, p), e3 && (t3.unobserve_completed && T(n3, t3), C(t3.callback_applied, n3, e3));
        }, Q = function(n3, t3, e3) {
          N(n3, t3.class_loading), w(n3, v), e3 && (R(e3, 1), C(t3.callback_loading, n3, e3));
        }, W = function(n3, t3, e3) {
          e3 && n3.setAttribute(t3, e3);
        }, X = function(n3, t3) {
          W(n3, d, y(n3, t3.data_sizes)), W(n3, s2, y(n3, t3.data_srcset)), W(n3, u, y(n3, t3.data_src));
        }, Y = { IMG: function(n3, t3) {
          D(n3, function(n4) {
            $2(n4, B), X(n4, t3);
          }), $2(n3, B), X(n3, t3);
        }, IFRAME: function(n3, t3) {
          $2(n3, V), W(n3, u, y(n3, t3.data_src));
        }, VIDEO: function(n3, t3) {
          H(n3, function(n4) {
            $2(n4, V), W(n4, u, y(n4, t3.data_src));
          }), $2(n3, F), W(n3, f, y(n3, t3.data_poster)), W(n3, u, y(n3, t3.data_src)), n3.load();
        }, OBJECT: function(n3, t3) {
          $2(n3, J), W(n3, g, y(n3, t3.data_src));
        } }, Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"], nn = function(n3, t3) {
          !t3 || function(n4) {
            return n4.loadingCount > 0;
          }(t3) || function(n4) {
            return n4.toLoadCount > 0;
          }(t3) || C(n3.callback_finish, t3);
        }, tn = function(n3, t3, e3) {
          n3.addEventListener(t3, e3), n3.llEvLisnrs[t3] = e3;
        }, en = function(n3, t3, e3) {
          n3.removeEventListener(t3, e3);
        }, on2 = function(n3) {
          return !!n3.llEvLisnrs;
        }, an = function(n3) {
          if (on2(n3)) {
            var t3 = n3.llEvLisnrs;
            for (var e3 in t3) {
              var i3 = t3[e3];
              en(n3, e3, i3);
            }
            delete n3.llEvLisnrs;
          }
        }, rn = function(n3, t3, e3) {
          !function(n4) {
            delete n4.llTempImage;
          }(n3), R(e3, -1), function(n4) {
            n4 && (n4.toLoadCount -= 1);
          }(e3), M(n3, t3.class_loading), t3.unobserve_completed && T(n3, e3);
        }, cn = function(n3, t3, e3) {
          var i3 = z(n3) || n3;
          on2(i3) || function(n4, t4, e4) {
            on2(n4) || (n4.llEvLisnrs = {});
            var i4 = "VIDEO" === n4.tagName ? "loadeddata" : "load";
            tn(n4, i4, t4), tn(n4, "error", e4);
          }(i3, function(o3) {
            !function(n4, t4, e4, i4) {
              var o4 = O(t4);
              rn(t4, e4, i4), N(t4, e4.class_loaded), w(t4, b), C(e4.callback_loaded, t4, i4), o4 || nn(e4, i4);
            }(0, n3, t3, e3), an(i3);
          }, function(o3) {
            !function(n4, t4, e4, i4) {
              var o4 = O(t4);
              rn(t4, e4, i4), N(t4, e4.class_error), w(t4, m), C(e4.callback_error, t4, i4), e4.restore_on_error && q(t4, B), o4 || nn(e4, i4);
            }(0, n3, t3, e3), an(i3);
          });
        }, ln = function(n3, t3, e3) {
          !function(n4) {
            return Z.indexOf(n4.tagName) > -1;
          }(n3) ? function(n4, t4, e4) {
            !function(n5) {
              n5.llTempImage = document.createElement("IMG");
            }(n4), cn(n4, t4, e4), function(n5) {
              P(n5) || (n5[_] = { backgroundImage: n5.style.backgroundImage });
            }(n4), function(n5, t5, e5) {
              var i3 = y(n5, t5.data_bg), o3 = y(n5, t5.data_bg_hidpi), r3 = a2 && o3 ? o3 : i3;
              r3 && (n5.style.backgroundImage = 'url("'.concat(r3, '")'), z(n5).setAttribute(u, r3), Q(n5, t5, e5));
            }(n4, t4, e4), function(n5, t5, e5) {
              var i3 = y(n5, t5.data_bg_multi), o3 = y(n5, t5.data_bg_multi_hidpi), r3 = a2 && o3 ? o3 : i3;
              r3 && (n5.style.backgroundImage = r3, K(n5, t5, e5));
            }(n4, t4, e4), function(n5, t5, e5) {
              var i3 = y(n5, t5.data_bg_set);
              if (i3) {
                var o3 = i3.split("|"), a3 = o3.map(function(n6) {
                  return "image-set(".concat(n6, ")");
                });
                n5.style.backgroundImage = a3.join(), "" === n5.style.backgroundImage && (a3 = o3.map(function(n6) {
                  return "-webkit-image-set(".concat(n6, ")");
                }), n5.style.backgroundImage = a3.join()), K(n5, t5, e5);
              }
            }(n4, t4, e4);
          }(n3, t3, e3) : function(n4, t4, e4) {
            cn(n4, t4, e4), function(n5, t5, e5) {
              var i3 = Y[n5.tagName];
              i3 && (i3(n5, t5), Q(n5, t5, e5));
            }(n4, t4, e4);
          }(n3, t3, e3);
        }, un = function(n3) {
          n3.removeAttribute(u), n3.removeAttribute(s2), n3.removeAttribute(d);
        }, sn = function(n3) {
          D(n3, function(n4) {
            q(n4, B);
          }), q(n3, B);
        }, dn = { IMG: sn, IFRAME: function(n3) {
          q(n3, V);
        }, VIDEO: function(n3) {
          H(n3, function(n4) {
            q(n4, V);
          }), q(n3, F), n3.load();
        }, OBJECT: function(n3) {
          q(n3, J);
        } }, fn = function(n3, t3) {
          (function(n4) {
            var t4 = dn[n4.tagName];
            t4 ? t4(n4) : function(n5) {
              if (P(n5)) {
                var t5 = S(n5);
                n5.style.backgroundImage = t5.backgroundImage;
              }
            }(n4);
          })(n3), function(n4, t4) {
            L(n4) || O(n4) || (M(n4, t4.class_entered), M(n4, t4.class_exited), M(n4, t4.class_applied), M(n4, t4.class_loading), M(n4, t4.class_loaded), M(n4, t4.class_error));
          }(n3, t3), A(n3), U(n3);
        }, _n = ["IMG", "IFRAME", "VIDEO"], gn = function(n3) {
          return n3.use_native && "loading" in HTMLImageElement.prototype;
        }, vn = function(n3, t3, e3) {
          n3.forEach(function(n4) {
            return function(n5) {
              return n5.isIntersecting || n5.intersectionRatio > 0;
            }(n4) ? function(n5, t4, e4, i3) {
              var o3 = function(n6) {
                return x.indexOf(k(n6)) >= 0;
              }(n5);
              w(n5, "entered"), N(n5, e4.class_entered), M(n5, e4.class_exited), function(n6, t5, e5) {
                t5.unobserve_entered && T(n6, e5);
              }(n5, e4, i3), C(e4.callback_enter, n5, t4, i3), o3 || ln(n5, e4, i3);
            }(n4.target, n4, t3, e3) : function(n5, t4, e4, i3) {
              L(n5) || (N(n5, e4.class_exited), function(n6, t5, e5, i4) {
                e5.cancel_on_exit && function(n7) {
                  return k(n7) === v;
                }(n6) && "IMG" === n6.tagName && (an(n6), function(n7) {
                  D(n7, function(n8) {
                    un(n8);
                  }), un(n7);
                }(n6), sn(n6), M(n6, e5.class_loading), R(i4, -1), A(n6), C(e5.callback_cancel, n6, t5, i4));
              }(n5, t4, e4, i3), C(e4.callback_exit, n5, t4, i3));
            }(n4.target, n4, t3, e3);
          });
        }, bn = function(n3) {
          return Array.prototype.slice.call(n3);
        }, pn = function(n3) {
          return n3.container.querySelectorAll(n3.elements_selector);
        }, mn = function(n3) {
          return function(n4) {
            return k(n4) === m;
          }(n3);
        }, hn = function(n3, t3) {
          return function(n4) {
            return bn(n4).filter(L);
          }(n3 || pn(t3));
        }, En = function(n3, e3) {
          var o3 = c(n3);
          this._settings = o3, this.loadingCount = 0, function(n4, t3) {
            i2 && !gn(n4) && (t3._observer = new IntersectionObserver(function(e4) {
              vn(e4, n4, t3);
            }, function(n5) {
              return { root: n5.container === document ? null : n5.container, rootMargin: n5.thresholds || n5.threshold + "px" };
            }(n4)));
          }(o3, this), function(n4, e4) {
            t2 && (e4._onlineHandler = function() {
              !function(n5, t3) {
                var e5;
                (e5 = pn(n5), bn(e5).filter(mn)).forEach(function(t4) {
                  M(t4, n5.class_error), A(t4);
                }), t3.update();
              }(n4, e4);
            }, window.addEventListener("online", e4._onlineHandler));
          }(o3, this), this.update(e3);
        };
        return En.prototype = { update: function(n3) {
          var t3, o3, a3 = this._settings, r3 = hn(n3, a3);
          G(this, r3.length), !e2 && i2 ? gn(a3) ? function(n4, t4, e3) {
            n4.forEach(function(n5) {
              -1 !== _n.indexOf(n5.tagName) && function(n6, t5, e4) {
                n6.setAttribute("loading", "lazy"), cn(n6, t5, e4), function(n7, t6) {
                  var e5 = Y[n7.tagName];
                  e5 && e5(n7, t6);
                }(n6, t5), w(n6, h);
              }(n5, t4, e3);
            }), G(e3, 0);
          }(r3, a3, this) : (o3 = r3, function(n4) {
            n4.disconnect();
          }(t3 = this._observer), function(n4, t4) {
            t4.forEach(function(t5) {
              n4.observe(t5);
            });
          }(t3, o3)) : this.loadAll(r3);
        }, destroy: function() {
          this._observer && this._observer.disconnect(), t2 && window.removeEventListener("online", this._onlineHandler), pn(this._settings).forEach(function(n3) {
            U(n3);
          }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
        }, loadAll: function(n3) {
          var t3 = this, e3 = this._settings;
          hn(n3, e3).forEach(function(n4) {
            T(n4, t3), ln(n4, e3, t3);
          });
        }, restoreAll: function() {
          var n3 = this._settings;
          pn(n3).forEach(function(t3) {
            fn(t3, n3);
          });
        } }, En.load = function(n3, t3) {
          var e3 = c(t3);
          ln(n3, e3);
        }, En.resetStatus = function(n3) {
          A(n3);
        }, t2 && function(n3, t3) {
          if (t3)
            if (t3.length)
              for (var e3, i3 = 0; e3 = t3[i3]; i3 += 1)
                l2(n3, e3);
            else
              l2(n3, t3);
        }(En, window.lazyLoadOptions), En;
      });
    }
  });

  // node_modules/aos/dist/aos.js
  var require_aos = __commonJS({
    "node_modules/aos/dist/aos.js"(exports, module) {
      !function(e2, t2) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define([], t2) : "object" == typeof exports ? exports.AOS = t2() : e2.AOS = t2();
      }(exports, function() {
        return function(e2) {
          function t2(o2) {
            if (n2[o2])
              return n2[o2].exports;
            var i2 = n2[o2] = { exports: {}, id: o2, loaded: false };
            return e2[o2].call(i2.exports, i2, i2.exports, t2), i2.loaded = true, i2.exports;
          }
          var n2 = {};
          return t2.m = e2, t2.c = n2, t2.p = "dist/", t2(0);
        }([function(e2, t2, n2) {
          "use strict";
          function o2(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          var i2 = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              for (var o3 in n3)
                Object.prototype.hasOwnProperty.call(n3, o3) && (e3[o3] = n3[o3]);
            }
            return e3;
          }, r2 = n2(1), a2 = (o2(r2), n2(6)), u = o2(a2), c = n2(7), s2 = o2(c), f = n2(8), d = o2(f), l2 = n2(9), p = o2(l2), m = n2(10), b = o2(m), v = n2(11), y = o2(v), g = n2(14), h = o2(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e3 && (k = true), k)
              return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
          }, O = function() {
            w = (0, h.default)(), j();
          }, M = function() {
            w.forEach(function(e3, t3) {
              e3.node.removeAttribute("data-aos"), e3.node.removeAttribute("data-aos-easing"), e3.node.removeAttribute("data-aos-duration"), e3.node.removeAttribute("data-aos-delay");
            });
          }, S = function(e3) {
            return e3 === true || "mobile" === e3 && p.default.mobile() || "phone" === e3 && p.default.phone() || "tablet" === e3 && p.default.tablet() || "function" == typeof e3 && e3() === true;
          }, _ = function(e3) {
            x = i2(x, e3), w = (0, h.default)();
            var t3 = document.all && !window.atob;
            return S(x.disable) || t3 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
              j(true);
            }) : document.addEventListener(x.startEvent, function() {
              j(true);
            }), window.addEventListener("resize", (0, s2.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s2.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
              (0, b.default)(w, x.once);
            }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
          };
          e2.exports = { init: _, refresh: j, refreshHard: O };
        }, function(e2, t2) {
        }, , , , , function(e2, t2) {
          (function(t3) {
            "use strict";
            function n2(e3, t4, n3) {
              function o3(t5) {
                var n4 = b2, o4 = v2;
                return b2 = v2 = void 0, k2 = t5, g2 = e3.apply(o4, n4);
              }
              function r3(e4) {
                return k2 = e4, h2 = setTimeout(f2, t4), M ? o3(e4) : g2;
              }
              function a3(e4) {
                var n4 = e4 - w2, o4 = e4 - k2, i3 = t4 - n4;
                return S ? j(i3, y2 - o4) : i3;
              }
              function c2(e4) {
                var n4 = e4 - w2, o4 = e4 - k2;
                return void 0 === w2 || n4 >= t4 || n4 < 0 || S && o4 >= y2;
              }
              function f2() {
                var e4 = O();
                return c2(e4) ? d2(e4) : void (h2 = setTimeout(f2, a3(e4)));
              }
              function d2(e4) {
                return h2 = void 0, _ && b2 ? o3(e4) : (b2 = v2 = void 0, g2);
              }
              function l3() {
                void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
              }
              function p2() {
                return void 0 === h2 ? g2 : d2(O());
              }
              function m2() {
                var e4 = O(), n4 = c2(e4);
                if (b2 = arguments, v2 = this, w2 = e4, n4) {
                  if (void 0 === h2)
                    return r3(w2);
                  if (S)
                    return h2 = setTimeout(f2, t4), o3(w2);
                }
                return void 0 === h2 && (h2 = setTimeout(f2, t4)), g2;
              }
              var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
              if ("function" != typeof e3)
                throw new TypeError(s2);
              return t4 = u(t4) || 0, i2(n3) && (M = !!n3.leading, S = "maxWait" in n3, y2 = S ? x(u(n3.maxWait) || 0, t4) : y2, _ = "trailing" in n3 ? !!n3.trailing : _), m2.cancel = l3, m2.flush = p2, m2;
            }
            function o2(e3, t4, o3) {
              var r3 = true, a3 = true;
              if ("function" != typeof e3)
                throw new TypeError(s2);
              return i2(o3) && (r3 = "leading" in o3 ? !!o3.leading : r3, a3 = "trailing" in o3 ? !!o3.trailing : a3), n2(e3, t4, { leading: r3, maxWait: t4, trailing: a3 });
            }
            function i2(e3) {
              var t4 = "undefined" == typeof e3 ? "undefined" : c(e3);
              return !!e3 && ("object" == t4 || "function" == t4);
            }
            function r2(e3) {
              return !!e3 && "object" == ("undefined" == typeof e3 ? "undefined" : c(e3));
            }
            function a2(e3) {
              return "symbol" == ("undefined" == typeof e3 ? "undefined" : c(e3)) || r2(e3) && k.call(e3) == d;
            }
            function u(e3) {
              if ("number" == typeof e3)
                return e3;
              if (a2(e3))
                return f;
              if (i2(e3)) {
                var t4 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
                e3 = i2(t4) ? t4 + "" : t4;
              }
              if ("string" != typeof e3)
                return 0 === e3 ? e3 : +e3;
              e3 = e3.replace(l2, "");
              var n3 = m.test(e3);
              return n3 || b.test(e3) ? v(e3.slice(2), n3 ? 2 : 8) : p.test(e3) ? f : +e3;
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            }, s2 = "Expected a function", f = NaN, d = "[object Symbol]", l2 = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t3 ? "undefined" : c(t3)) && t3 && t3.Object === Object && t3, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
              return h.Date.now();
            };
            e2.exports = o2;
          }).call(t2, function() {
            return this;
          }());
        }, function(e2, t2) {
          (function(t3) {
            "use strict";
            function n2(e3, t4, n3) {
              function i3(t5) {
                var n4 = b2, o3 = v2;
                return b2 = v2 = void 0, O = t5, g2 = e3.apply(o3, n4);
              }
              function r3(e4) {
                return O = e4, h2 = setTimeout(f2, t4), M ? i3(e4) : g2;
              }
              function u2(e4) {
                var n4 = e4 - w2, o3 = e4 - O, i4 = t4 - n4;
                return S ? x(i4, y2 - o3) : i4;
              }
              function s3(e4) {
                var n4 = e4 - w2, o3 = e4 - O;
                return void 0 === w2 || n4 >= t4 || n4 < 0 || S && o3 >= y2;
              }
              function f2() {
                var e4 = j();
                return s3(e4) ? d2(e4) : void (h2 = setTimeout(f2, u2(e4)));
              }
              function d2(e4) {
                return h2 = void 0, _ && b2 ? i3(e4) : (b2 = v2 = void 0, g2);
              }
              function l3() {
                void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
              }
              function p2() {
                return void 0 === h2 ? g2 : d2(j());
              }
              function m2() {
                var e4 = j(), n4 = s3(e4);
                if (b2 = arguments, v2 = this, w2 = e4, n4) {
                  if (void 0 === h2)
                    return r3(w2);
                  if (S)
                    return h2 = setTimeout(f2, t4), i3(w2);
                }
                return void 0 === h2 && (h2 = setTimeout(f2, t4)), g2;
              }
              var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
              if ("function" != typeof e3)
                throw new TypeError(c);
              return t4 = a2(t4) || 0, o2(n3) && (M = !!n3.leading, S = "maxWait" in n3, y2 = S ? k(a2(n3.maxWait) || 0, t4) : y2, _ = "trailing" in n3 ? !!n3.trailing : _), m2.cancel = l3, m2.flush = p2, m2;
            }
            function o2(e3) {
              var t4 = "undefined" == typeof e3 ? "undefined" : u(e3);
              return !!e3 && ("object" == t4 || "function" == t4);
            }
            function i2(e3) {
              return !!e3 && "object" == ("undefined" == typeof e3 ? "undefined" : u(e3));
            }
            function r2(e3) {
              return "symbol" == ("undefined" == typeof e3 ? "undefined" : u(e3)) || i2(e3) && w.call(e3) == f;
            }
            function a2(e3) {
              if ("number" == typeof e3)
                return e3;
              if (r2(e3))
                return s2;
              if (o2(e3)) {
                var t4 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
                e3 = o2(t4) ? t4 + "" : t4;
              }
              if ("string" != typeof e3)
                return 0 === e3 ? e3 : +e3;
              e3 = e3.replace(d, "");
              var n3 = p.test(e3);
              return n3 || m.test(e3) ? b(e3.slice(2), n3 ? 2 : 8) : l2.test(e3) ? s2 : +e3;
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            }, c = "Expected a function", s2 = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l2 = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t3 ? "undefined" : u(t3)) && t3 && t3.Object === Object && t3, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
              return g.Date.now();
            };
            e2.exports = n2;
          }).call(t2, function() {
            return this;
          }());
        }, function(e2, t2) {
          "use strict";
          function n2(e3) {
            var t3 = void 0, o3 = void 0, i3 = void 0;
            for (t3 = 0; t3 < e3.length; t3 += 1) {
              if (o3 = e3[t3], o3.dataset && o3.dataset.aos)
                return true;
              if (i3 = o3.children && n2(o3.children))
                return true;
            }
            return false;
          }
          function o2() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          }
          function i2() {
            return !!o2();
          }
          function r2(e3, t3) {
            var n3 = window.document, i3 = o2(), r3 = new i3(a2);
            u = t3, r3.observe(n3.documentElement, { childList: true, subtree: true, removedNodes: true });
          }
          function a2(e3) {
            e3 && e3.forEach(function(e4) {
              var t3 = Array.prototype.slice.call(e4.addedNodes), o3 = Array.prototype.slice.call(e4.removedNodes), i3 = t3.concat(o3);
              if (n2(i3))
                return u();
            });
          }
          Object.defineProperty(t2, "__esModule", { value: true });
          var u = function() {
          };
          t2.default = { isSupported: i2, ready: r2 };
        }, function(e2, t2) {
          "use strict";
          function n2(e3, t3) {
            if (!(e3 instanceof t3))
              throw new TypeError("Cannot call a class as a function");
          }
          function o2() {
            return navigator.userAgent || navigator.vendor || window.opera || "";
          }
          Object.defineProperty(t2, "__esModule", { value: true });
          var i2 = function() {
            function e3(e4, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var o3 = t3[n3];
                o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, o3.key, o3);
              }
            }
            return function(t3, n3, o3) {
              return n3 && e3(t3.prototype, n3), o3 && e3(t3, o3), t3;
            };
          }(), r2 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s2 = function() {
            function e3() {
              n2(this, e3);
            }
            return i2(e3, [{ key: "phone", value: function() {
              var e4 = o2();
              return !(!r2.test(e4) && !a2.test(e4.substr(0, 4)));
            } }, { key: "mobile", value: function() {
              var e4 = o2();
              return !(!u.test(e4) && !c.test(e4.substr(0, 4)));
            } }, { key: "tablet", value: function() {
              return this.mobile() && !this.phone();
            } }]), e3;
          }();
          t2.default = new s2();
        }, function(e2, t2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true });
          var n2 = function(e3, t3, n3) {
            var o3 = e3.node.getAttribute("data-aos-once");
            t3 > e3.position ? e3.node.classList.add("aos-animate") : "undefined" != typeof o3 && ("false" === o3 || !n3 && "true" !== o3) && e3.node.classList.remove("aos-animate");
          }, o2 = function(e3, t3) {
            var o3 = window.pageYOffset, i2 = window.innerHeight;
            e3.forEach(function(e4, r2) {
              n2(e4, i2 + o3, t3);
            });
          };
          t2.default = o2;
        }, function(e2, t2, n2) {
          "use strict";
          function o2(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          Object.defineProperty(t2, "__esModule", { value: true });
          var i2 = n2(12), r2 = o2(i2), a2 = function(e3, t3) {
            return e3.forEach(function(e4, n3) {
              e4.node.classList.add("aos-init"), e4.position = (0, r2.default)(e4.node, t3.offset);
            }), e3;
          };
          t2.default = a2;
        }, function(e2, t2, n2) {
          "use strict";
          function o2(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          Object.defineProperty(t2, "__esModule", { value: true });
          var i2 = n2(13), r2 = o2(i2), a2 = function(e3, t3) {
            var n3 = 0, o3 = 0, i3 = window.innerHeight, a3 = { offset: e3.getAttribute("data-aos-offset"), anchor: e3.getAttribute("data-aos-anchor"), anchorPlacement: e3.getAttribute("data-aos-anchor-placement") };
            switch (a3.offset && !isNaN(a3.offset) && (o3 = parseInt(a3.offset)), a3.anchor && document.querySelectorAll(a3.anchor) && (e3 = document.querySelectorAll(a3.anchor)[0]), n3 = (0, r2.default)(e3).top, a3.anchorPlacement) {
              case "top-bottom":
                break;
              case "center-bottom":
                n3 += e3.offsetHeight / 2;
                break;
              case "bottom-bottom":
                n3 += e3.offsetHeight;
                break;
              case "top-center":
                n3 += i3 / 2;
                break;
              case "bottom-center":
                n3 += i3 / 2 + e3.offsetHeight;
                break;
              case "center-center":
                n3 += i3 / 2 + e3.offsetHeight / 2;
                break;
              case "top-top":
                n3 += i3;
                break;
              case "bottom-top":
                n3 += e3.offsetHeight + i3;
                break;
              case "center-top":
                n3 += e3.offsetHeight / 2 + i3;
            }
            return a3.anchorPlacement || a3.offset || isNaN(t3) || (o3 = t3), n3 + o3;
          };
          t2.default = a2;
        }, function(e2, t2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true });
          var n2 = function(e3) {
            for (var t3 = 0, n3 = 0; e3 && !isNaN(e3.offsetLeft) && !isNaN(e3.offsetTop); )
              t3 += e3.offsetLeft - ("BODY" != e3.tagName ? e3.scrollLeft : 0), n3 += e3.offsetTop - ("BODY" != e3.tagName ? e3.scrollTop : 0), e3 = e3.offsetParent;
            return { top: n3, left: t3 };
          };
          t2.default = n2;
        }, function(e2, t2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true });
          var n2 = function(e3) {
            return e3 = e3 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e3, function(e4) {
              return { node: e4 };
            });
          };
          t2.default = n2;
        }]);
      });
    }
  });

  // node_modules/photoswipe/dist/photoswipe.esm.js
  var photoswipe_esm_exports = {};
  __export(photoswipe_esm_exports, {
    default: () => PhotoSwipe
  });
  function createElement2(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    if (appendToEl) {
      appendToEl.appendChild(el);
    }
    return el;
  }
  function equalizePoints(p1, p2) {
    p1.x = p2.x;
    p1.y = p2.y;
    if (p2.id !== void 0) {
      p1.id = p2.id;
    }
    return p1;
  }
  function roundPoint(p) {
    p.x = Math.round(p.x);
    p.y = Math.round(p.y);
  }
  function getDistanceBetween(p1, p2) {
    const x = Math.abs(p1.x - p2.x);
    const y = Math.abs(p1.y - p2.y);
    return Math.sqrt(x * x + y * y);
  }
  function pointsEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }
  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  function toTransformString2(x, y, scale) {
    let propValue = `translate3d(${x}px,${y || 0}px,0)`;
    if (scale !== void 0) {
      propValue += ` scale3d(${scale},${scale},1)`;
    }
    return propValue;
  }
  function setTransform(el, x, y, scale) {
    el.style.transform = toTransformString2(x, y, scale);
  }
  function setTransitionStyle(el, prop, duration, ease) {
    el.style.transition = prop ? `${prop} ${duration}ms ${ease || defaultCSSEasing}` : "none";
  }
  function setWidthHeight2(el, w, h) {
    el.style.width = typeof w === "number" ? `${w}px` : w;
    el.style.height = typeof h === "number" ? `${h}px` : h;
  }
  function removeTransitionStyle(el) {
    setTransitionStyle(el);
  }
  function decodeImage(img) {
    if ("decode" in img) {
      return img.decode().catch(() => {
      });
    }
    if (img.complete) {
      return Promise.resolve(img);
    }
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }
  function specialKeyUsed2(e2) {
    return "button" in e2 && e2.button === 1 || e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey;
  }
  function getElementsFromOption2(option, legacySelector, parent2 = document) {
    let elements = [];
    if (option instanceof Element) {
      elements = [option];
    } else if (option instanceof NodeList || Array.isArray(option)) {
      elements = Array.from(option);
    } else {
      const selector = typeof option === "string" ? option : legacySelector;
      if (selector) {
        elements = Array.from(parent2.querySelectorAll(selector));
      }
    }
    return elements;
  }
  function isSafari2() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  function getViewportSize2(options, pswp) {
    if (options.getViewportSizeFn) {
      const newViewportSize = options.getViewportSizeFn(options, pswp);
      if (newViewportSize) {
        return newViewportSize;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      y: window.innerHeight
    };
  }
  function parsePaddingOption2(prop, options, viewportSize, itemData, index2) {
    let paddingValue = 0;
    if (options.paddingFn) {
      paddingValue = options.paddingFn(viewportSize, itemData, index2)[prop];
    } else if (options.padding) {
      paddingValue = options.padding[prop];
    } else {
      const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
      if (options[legacyPropName]) {
        paddingValue = options[legacyPropName];
      }
    }
    return Number(paddingValue) || 0;
  }
  function getPanAreaSize2(options, viewportSize, itemData, index2) {
    return {
      x: viewportSize.x - parsePaddingOption2("left", options, viewportSize, itemData, index2) - parsePaddingOption2("right", options, viewportSize, itemData, index2),
      y: viewportSize.y - parsePaddingOption2("top", options, viewportSize, itemData, index2) - parsePaddingOption2("bottom", options, viewportSize, itemData, index2)
    };
  }
  function project(initialVelocity, decelerationRate) {
    return initialVelocity * decelerationRate / (1 - decelerationRate);
  }
  function getZoomPointsCenter(p, p1, p2) {
    p.x = (p1.x + p2.x) / 2;
    p.y = (p1.y + p2.y) / 2;
    return p;
  }
  function didTapOnMainContent(event2) {
    return !!event2.target.closest(".pswp__container");
  }
  function addElementHTML(htmlData) {
    if (typeof htmlData === "string") {
      return htmlData;
    }
    if (!htmlData || !htmlData.isCustomSVG) {
      return "";
    }
    const svgData = htmlData;
    let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
    out = out.split("%d").join(
      svgData.size || 32
    );
    if (svgData.outlineID) {
      out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
    }
    out += svgData.inner;
    out += "</svg>";
    return out;
  }
  function initArrowButton(element, pswp, isNextButton) {
    element.classList.add("pswp__button--arrow");
    element.setAttribute("aria-controls", "pswp__items");
    pswp.on("change", () => {
      if (!pswp.options.loop) {
        if (isNextButton) {
          element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
        } else {
          element.disabled = !(pswp.currIndex > 0);
        }
      }
    });
  }
  function setZoomedIn(el, isZoomedIn) {
    el.classList.toggle("pswp--zoomed-in", isZoomedIn);
  }
  function getBoundsByElement(el) {
    const thumbAreaRect = el.getBoundingClientRect();
    return {
      x: thumbAreaRect.left,
      y: thumbAreaRect.top,
      w: thumbAreaRect.width
    };
  }
  function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
    const thumbAreaRect = el.getBoundingClientRect();
    const hRatio = thumbAreaRect.width / imageWidth;
    const vRatio = thumbAreaRect.height / imageHeight;
    const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
    const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
    const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
    const bounds = {
      x: thumbAreaRect.left + offsetX,
      y: thumbAreaRect.top + offsetY,
      w: imageWidth * fillZoomLevel
    };
    bounds.innerRect = {
      w: thumbAreaRect.width,
      h: thumbAreaRect.height,
      x: offsetX,
      y: offsetY
    };
    return bounds;
  }
  function getThumbBounds(index2, itemData, instance) {
    const event2 = instance.dispatch("thumbBounds", {
      index: index2,
      itemData,
      instance
    });
    if (event2.thumbBounds) {
      return event2.thumbBounds;
    }
    const {
      element
    } = itemData;
    let thumbBounds;
    let thumbnail;
    if (element && instance.options.thumbSelector !== false) {
      const thumbSelector = instance.options.thumbSelector || "img";
      thumbnail = element.matches(thumbSelector) ? element : element.querySelector(thumbSelector);
    }
    thumbnail = instance.applyFilters("thumbEl", thumbnail, itemData, index2);
    if (thumbnail) {
      if (!itemData.thumbCropped) {
        thumbBounds = getBoundsByElement(thumbnail);
      } else {
        thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w || 0, itemData.height || itemData.h || 0);
      }
    }
    return instance.applyFilters("thumbBounds", thumbBounds, itemData, index2);
  }
  function lazyLoadData2(itemData, instance, index2) {
    const content = instance.createContentFromData(itemData, index2);
    let zoomLevel;
    const {
      options
    } = instance;
    if (options) {
      zoomLevel = new ZoomLevel2(options, itemData, -1);
      let viewportSize;
      if (instance.pswp) {
        viewportSize = instance.pswp.viewportSize;
      } else {
        viewportSize = getViewportSize2(options, instance);
      }
      const panAreaSize = getPanAreaSize2(options, viewportSize, itemData, index2);
      zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
      content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
  }
  function lazyLoadSlide2(index2, instance) {
    const itemData = instance.getItemData(index2);
    if (instance.dispatch("lazyLoadSlide", {
      index: index2,
      itemData
    }).defaultPrevented) {
      return;
    }
    return lazyLoadData2(itemData, instance, index2);
  }
  var defaultCSSEasing, LOAD_STATE2, supportsPassive, DOMEvents, PanBounds, MAX_IMAGE_WIDTH2, ZoomLevel2, Slide, PAN_END_FRICTION, VERTICAL_DRAG_FRICTION, MIN_RATIO_TO_CLOSE, MIN_NEXT_SLIDE_SPEED, DragHandler, UPPER_ZOOM_FRICTION, LOWER_ZOOM_FRICTION, ZoomHandler, TapHandler, AXIS_SWIPE_HYSTERISIS, DOUBLE_TAP_DELAY, MIN_TAP_DISTANCE, Gestures, MAIN_SCROLL_END_FRICTION, MainScroll, KeyboardKeyCodesMap, getKeyboardEventKey, Keyboard2, DEFAULT_EASING, CSSAnimation, DEFAULT_NATURAL_FREQUENCY, DEFAULT_DAMPING_RATIO, SpringEaser, SpringAnimation, Animations, ScrollWheel, UIElement, arrowPrev, arrowNext, closeButton, zoomButton, loadingIndicator, counterIndicator, UI, PhotoSwipeEvent2, Eventable2, Placeholder2, Content2, MIN_SLIDES_TO_CACHE, ContentLoader, PhotoSwipeBase2, MIN_OPACITY, Opener, defaultOptions2, PhotoSwipe;
  var init_photoswipe_esm = __esm({
    "node_modules/photoswipe/dist/photoswipe.esm.js"() {
      defaultCSSEasing = "cubic-bezier(.4,0,.22,1)";
      LOAD_STATE2 = {
        IDLE: "idle",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
      };
      supportsPassive = false;
      try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: () => {
            supportsPassive = true;
          }
        }));
      } catch (e2) {
      }
      DOMEvents = class {
        constructor() {
          this._pool = [];
        }
        add(target, type, listener, passive) {
          this._toggleListener(target, type, listener, passive);
        }
        remove(target, type, listener, passive) {
          this._toggleListener(target, type, listener, passive, true);
        }
        removeAll() {
          this._pool.forEach((poolItem) => {
            this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
          });
          this._pool = [];
        }
        _toggleListener(target, type, listener, passive, unbind, skipPool) {
          if (!target) {
            return;
          }
          const methodName = unbind ? "removeEventListener" : "addEventListener";
          const types = type.split(" ");
          types.forEach((eType) => {
            if (eType) {
              if (!skipPool) {
                if (unbind) {
                  this._pool = this._pool.filter((poolItem) => {
                    return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
                  });
                } else {
                  this._pool.push({
                    target,
                    type: eType,
                    listener,
                    passive
                  });
                }
              }
              const eventOptions = supportsPassive ? {
                passive: passive || false
              } : false;
              target[methodName](eType, listener, eventOptions);
            }
          });
        }
      };
      PanBounds = class {
        constructor(slide) {
          this.slide = slide;
          this.currZoomLevel = 1;
          this.center = {
            x: 0,
            y: 0
          };
          this.max = {
            x: 0,
            y: 0
          };
          this.min = {
            x: 0,
            y: 0
          };
        }
        update(currZoomLevel) {
          this.currZoomLevel = currZoomLevel;
          if (!this.slide.width) {
            this.reset();
          } else {
            this._updateAxis("x");
            this._updateAxis("y");
            this.slide.pswp.dispatch("calcBounds", {
              slide: this.slide
            });
          }
        }
        _updateAxis(axis) {
          const {
            pswp
          } = this.slide;
          const elSize = this.slide[axis === "x" ? "width" : "height"] * this.currZoomLevel;
          const paddingProp = axis === "x" ? "left" : "top";
          const padding = parsePaddingOption2(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
          const panAreaSize = this.slide.panAreaSize[axis];
          this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
          this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];
          this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
        }
        reset() {
          this.center.x = 0;
          this.center.y = 0;
          this.max.x = 0;
          this.max.y = 0;
          this.min.x = 0;
          this.min.y = 0;
        }
        correctPan(axis, panOffset) {
          return clamp(panOffset, this.max[axis], this.min[axis]);
        }
      };
      MAX_IMAGE_WIDTH2 = 4e3;
      ZoomLevel2 = class {
        constructor(options, itemData, index2, pswp) {
          this.pswp = pswp;
          this.options = options;
          this.itemData = itemData;
          this.index = index2;
          this.panAreaSize = null;
          this.elementSize = null;
          this.fit = 1;
          this.fill = 1;
          this.vFill = 1;
          this.initial = 1;
          this.secondary = 1;
          this.max = 1;
          this.min = 1;
        }
        update(maxWidth, maxHeight, panAreaSize) {
          const elementSize = {
            x: maxWidth,
            y: maxHeight
          };
          this.elementSize = elementSize;
          this.panAreaSize = panAreaSize;
          const hRatio = panAreaSize.x / elementSize.x;
          const vRatio = panAreaSize.y / elementSize.y;
          this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
          this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
          this.vFill = Math.min(1, vRatio);
          this.initial = this._getInitial();
          this.secondary = this._getSecondary();
          this.max = Math.max(this.initial, this.secondary, this._getMax());
          this.min = Math.min(this.fit, this.initial, this.secondary);
          if (this.pswp) {
            this.pswp.dispatch("zoomLevelsUpdate", {
              zoomLevels: this,
              slideData: this.itemData
            });
          }
        }
        _parseZoomLevelOption(optionPrefix) {
          const optionName = optionPrefix + "ZoomLevel";
          const optionValue = this.options[optionName];
          if (!optionValue) {
            return;
          }
          if (typeof optionValue === "function") {
            return optionValue(this);
          }
          if (optionValue === "fill") {
            return this.fill;
          }
          if (optionValue === "fit") {
            return this.fit;
          }
          return Number(optionValue);
        }
        _getSecondary() {
          let currZoomLevel = this._parseZoomLevelOption("secondary");
          if (currZoomLevel) {
            return currZoomLevel;
          }
          currZoomLevel = Math.min(1, this.fit * 3);
          if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH2) {
            currZoomLevel = MAX_IMAGE_WIDTH2 / this.elementSize.x;
          }
          return currZoomLevel;
        }
        _getInitial() {
          return this._parseZoomLevelOption("initial") || this.fit;
        }
        _getMax() {
          return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
        }
      };
      Slide = class {
        constructor(data, index2, pswp) {
          this.data = data;
          this.index = index2;
          this.pswp = pswp;
          this.isActive = index2 === pswp.currIndex;
          this.currentResolution = 0;
          this.panAreaSize = {
            x: 0,
            y: 0
          };
          this.pan = {
            x: 0,
            y: 0
          };
          this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
          this.zoomLevels = new ZoomLevel2(pswp.options, data, index2, pswp);
          this.pswp.dispatch("gettingData", {
            slide: this,
            data: this.data,
            index: index2
          });
          this.content = this.pswp.contentLoader.getContentBySlide(this);
          this.container = createElement2("pswp__zoom-wrap", "div");
          this.holderElement = null;
          this.currZoomLevel = 1;
          this.width = this.content.width;
          this.height = this.content.height;
          this.heavyAppended = false;
          this.bounds = new PanBounds(this);
          this.prevDisplayedWidth = -1;
          this.prevDisplayedHeight = -1;
          this.pswp.dispatch("slideInit", {
            slide: this
          });
        }
        setIsActive(isActive) {
          if (isActive && !this.isActive) {
            this.activate();
          } else if (!isActive && this.isActive) {
            this.deactivate();
          }
        }
        append(holderElement) {
          this.holderElement = holderElement;
          this.container.style.transformOrigin = "0 0";
          if (!this.data) {
            return;
          }
          this.calculateSize();
          this.load();
          this.updateContentSize();
          this.appendHeavy();
          this.holderElement.appendChild(this.container);
          this.zoomAndPanToInitial();
          this.pswp.dispatch("firstZoomPan", {
            slide: this
          });
          this.applyCurrentZoomPan();
          this.pswp.dispatch("afterSetContent", {
            slide: this
          });
          if (this.isActive) {
            this.activate();
          }
        }
        load() {
          this.content.load(false);
          this.pswp.dispatch("slideLoad", {
            slide: this
          });
        }
        appendHeavy() {
          const {
            pswp
          } = this;
          const appendHeavyNearby = true;
          if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
            return;
          }
          if (this.pswp.dispatch("appendHeavy", {
            slide: this
          }).defaultPrevented) {
            return;
          }
          this.heavyAppended = true;
          this.content.append();
          this.pswp.dispatch("appendHeavyContent", {
            slide: this
          });
        }
        activate() {
          this.isActive = true;
          this.appendHeavy();
          this.content.activate();
          this.pswp.dispatch("slideActivate", {
            slide: this
          });
        }
        deactivate() {
          this.isActive = false;
          this.content.deactivate();
          if (this.currZoomLevel !== this.zoomLevels.initial) {
            this.calculateSize();
          }
          this.currentResolution = 0;
          this.zoomAndPanToInitial();
          this.applyCurrentZoomPan();
          this.updateContentSize();
          this.pswp.dispatch("slideDeactivate", {
            slide: this
          });
        }
        destroy() {
          this.content.hasSlide = false;
          this.content.remove();
          this.container.remove();
          this.pswp.dispatch("slideDestroy", {
            slide: this
          });
        }
        resize() {
          if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
            this.calculateSize();
            this.currentResolution = 0;
            this.zoomAndPanToInitial();
            this.applyCurrentZoomPan();
            this.updateContentSize();
          } else {
            this.calculateSize();
            this.bounds.update(this.currZoomLevel);
            this.panTo(this.pan.x, this.pan.y);
          }
        }
        updateContentSize(force) {
          const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
          if (!scaleMultiplier) {
            return;
          }
          const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
          const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
          if (!this.sizeChanged(width, height) && !force) {
            return;
          }
          this.content.setDisplayedSize(width, height);
        }
        sizeChanged(width, height) {
          if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
            this.prevDisplayedWidth = width;
            this.prevDisplayedHeight = height;
            return true;
          }
          return false;
        }
        getPlaceholderElement() {
          var _this$content$placeho;
          return (_this$content$placeho = this.content.placeholder) === null || _this$content$placeho === void 0 ? void 0 : _this$content$placeho.element;
        }
        zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
          const {
            pswp
          } = this;
          if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
            return;
          }
          pswp.dispatch("beforeZoomTo", {
            destZoomLevel,
            centerPoint,
            transitionDuration
          });
          pswp.animations.stopAllPan();
          const prevZoomLevel = this.currZoomLevel;
          if (!ignoreBounds) {
            destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
          }
          this.setZoomLevel(destZoomLevel);
          this.pan.x = this.calculateZoomToPanOffset("x", centerPoint, prevZoomLevel);
          this.pan.y = this.calculateZoomToPanOffset("y", centerPoint, prevZoomLevel);
          roundPoint(this.pan);
          const finishTransition = () => {
            this._setResolution(destZoomLevel);
            this.applyCurrentZoomPan();
          };
          if (!transitionDuration) {
            finishTransition();
          } else {
            pswp.animations.startTransition({
              isPan: true,
              name: "zoomTo",
              target: this.container,
              transform: this.getCurrentTransform(),
              onComplete: finishTransition,
              duration: transitionDuration,
              easing: pswp.options.easing
            });
          }
        }
        toggleZoom(centerPoint) {
          this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
        }
        setZoomLevel(currZoomLevel) {
          this.currZoomLevel = currZoomLevel;
          this.bounds.update(this.currZoomLevel);
        }
        calculateZoomToPanOffset(axis, point, prevZoomLevel) {
          const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
          if (totalPanDistance === 0) {
            return this.bounds.center[axis];
          }
          if (!point) {
            point = this.pswp.getViewportCenterPoint();
          }
          if (!prevZoomLevel) {
            prevZoomLevel = this.zoomLevels.initial;
          }
          const zoomFactor = this.currZoomLevel / prevZoomLevel;
          return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
        }
        panTo(panX, panY) {
          this.pan.x = this.bounds.correctPan("x", panX);
          this.pan.y = this.bounds.correctPan("y", panY);
          this.applyCurrentZoomPan();
        }
        isPannable() {
          return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
        }
        isZoomable() {
          return Boolean(this.width) && this.content.isZoomable();
        }
        applyCurrentZoomPan() {
          this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
          if (this === this.pswp.currSlide) {
            this.pswp.dispatch("zoomPanUpdate", {
              slide: this
            });
          }
        }
        zoomAndPanToInitial() {
          this.currZoomLevel = this.zoomLevels.initial;
          this.bounds.update(this.currZoomLevel);
          equalizePoints(this.pan, this.bounds.center);
          this.pswp.dispatch("initialZoomPan", {
            slide: this
          });
        }
        _applyZoomTransform(x, y, zoom) {
          zoom /= this.currentResolution || this.zoomLevels.initial;
          setTransform(this.container, x, y, zoom);
        }
        calculateSize() {
          const {
            pswp
          } = this;
          equalizePoints(this.panAreaSize, getPanAreaSize2(pswp.options, pswp.viewportSize, this.data, this.index));
          this.zoomLevels.update(this.width, this.height, this.panAreaSize);
          pswp.dispatch("calcSlideSize", {
            slide: this
          });
        }
        getCurrentTransform() {
          const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
          return toTransformString2(this.pan.x, this.pan.y, scale);
        }
        _setResolution(newResolution) {
          if (newResolution === this.currentResolution) {
            return;
          }
          this.currentResolution = newResolution;
          this.updateContentSize();
          this.pswp.dispatch("resolutionChanged");
        }
      };
      PAN_END_FRICTION = 0.35;
      VERTICAL_DRAG_FRICTION = 0.6;
      MIN_RATIO_TO_CLOSE = 0.4;
      MIN_NEXT_SLIDE_SPEED = 0.5;
      DragHandler = class {
        constructor(gestures) {
          this.gestures = gestures;
          this.pswp = gestures.pswp;
          this.startPan = {
            x: 0,
            y: 0
          };
        }
        start() {
          if (this.pswp.currSlide) {
            equalizePoints(this.startPan, this.pswp.currSlide.pan);
          }
          this.pswp.animations.stopAll();
        }
        change() {
          const {
            p1,
            prevP1,
            dragAxis
          } = this.gestures;
          const {
            currSlide
          } = this.pswp;
          if (dragAxis === "y" && this.pswp.options.closeOnVerticalDrag && currSlide && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
            const panY = currSlide.pan.y + (p1.y - prevP1.y);
            if (!this.pswp.dispatch("verticalDrag", {
              panY
            }).defaultPrevented) {
              this._setPanWithFriction("y", panY, VERTICAL_DRAG_FRICTION);
              const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
              this.pswp.applyBgOpacity(bgOpacity);
              currSlide.applyCurrentZoomPan();
            }
          } else {
            const mainScrollChanged = this._panOrMoveMainScroll("x");
            if (!mainScrollChanged) {
              this._panOrMoveMainScroll("y");
              if (currSlide) {
                roundPoint(currSlide.pan);
                currSlide.applyCurrentZoomPan();
              }
            }
          }
        }
        end() {
          const {
            velocity
          } = this.gestures;
          const {
            mainScroll,
            currSlide
          } = this.pswp;
          let indexDiff = 0;
          this.pswp.animations.stopAll();
          if (mainScroll.isShifted()) {
            const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
            const currentSlideVisibilityRatio = mainScrollShiftDiff / this.pswp.viewportSize.x;
            if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
              indexDiff = 1;
              velocity.x = Math.min(velocity.x, 0);
            } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
              indexDiff = -1;
              velocity.x = Math.max(velocity.x, 0);
            }
            mainScroll.moveIndexBy(indexDiff, true, velocity.x);
          }
          if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.max || this.gestures.isMultitouch) {
            this.gestures.zoomLevels.correctZoomPan(true);
          } else {
            this._finishPanGestureForAxis("x");
            this._finishPanGestureForAxis("y");
          }
        }
        _finishPanGestureForAxis(axis) {
          const {
            velocity
          } = this.gestures;
          const {
            currSlide
          } = this.pswp;
          if (!currSlide) {
            return;
          }
          const {
            pan,
            bounds
          } = currSlide;
          const panPos = pan[axis];
          const restoreBgOpacity = this.pswp.bgOpacity < 1 && axis === "y";
          const decelerationRate = 0.995;
          const projectedPosition = panPos + project(velocity[axis], decelerationRate);
          if (restoreBgOpacity) {
            const vDragRatio = this._getVerticalDragRatio(panPos);
            const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
            if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
              this.pswp.close();
              return;
            }
          }
          const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
          if (panPos === correctedPanPosition) {
            return;
          }
          const dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
          const initialBgOpacity = this.pswp.bgOpacity;
          const totalPanDist = correctedPanPosition - panPos;
          this.pswp.animations.startSpring({
            name: "panGesture" + axis,
            isPan: true,
            start: panPos,
            end: correctedPanPosition,
            velocity: velocity[axis],
            dampingRatio,
            onUpdate: (pos) => {
              if (restoreBgOpacity && this.pswp.bgOpacity < 1) {
                const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
                this.pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
              }
              pan[axis] = Math.floor(pos);
              currSlide.applyCurrentZoomPan();
            }
          });
        }
        _panOrMoveMainScroll(axis) {
          const {
            p1,
            dragAxis,
            prevP1,
            isMultitouch
          } = this.gestures;
          const {
            currSlide,
            mainScroll
          } = this.pswp;
          const delta = p1[axis] - prevP1[axis];
          const newMainScrollX = mainScroll.x + delta;
          if (!delta || !currSlide) {
            return false;
          }
          if (axis === "x" && !currSlide.isPannable() && !isMultitouch) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          }
          const {
            bounds
          } = currSlide;
          const newPan = currSlide.pan[axis] + delta;
          if (this.pswp.options.allowPanToNext && dragAxis === "x" && axis === "x" && !isMultitouch) {
            const currSlideMainScrollX = mainScroll.getCurrSlideX();
            const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
            const isLeftToRight = delta > 0;
            const isRightToLeft = !isLeftToRight;
            if (newPan > bounds.min[axis] && isLeftToRight) {
              const wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
              if (wasAtMinPanPosition) {
                mainScroll.moveTo(newMainScrollX, true);
                return true;
              } else {
                this._setPanWithFriction(axis, newPan);
              }
            } else if (newPan < bounds.max[axis] && isRightToLeft) {
              const wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
              if (wasAtMaxPanPosition) {
                mainScroll.moveTo(newMainScrollX, true);
                return true;
              } else {
                this._setPanWithFriction(axis, newPan);
              }
            } else {
              if (mainScrollShiftDiff !== 0) {
                if (mainScrollShiftDiff > 0) {
                  mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
                  return true;
                } else if (mainScrollShiftDiff < 0) {
                  mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
                  return true;
                }
              } else {
                this._setPanWithFriction(axis, newPan);
              }
            }
          } else {
            if (axis === "y") {
              if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
                this._setPanWithFriction(axis, newPan);
              }
            } else {
              this._setPanWithFriction(axis, newPan);
            }
          }
          return false;
        }
        _getVerticalDragRatio(panY) {
          var _this$pswp$currSlide$, _this$pswp$currSlide;
          return (panY - ((_this$pswp$currSlide$ = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.bounds.center.y) !== null && _this$pswp$currSlide$ !== void 0 ? _this$pswp$currSlide$ : 0)) / (this.pswp.viewportSize.y / 3);
        }
        _setPanWithFriction(axis, potentialPan, customFriction) {
          const {
            currSlide
          } = this.pswp;
          if (!currSlide) {
            return;
          }
          const {
            pan,
            bounds
          } = currSlide;
          const correctedPan = bounds.correctPan(axis, potentialPan);
          if (correctedPan !== potentialPan || customFriction) {
            const delta = Math.round(potentialPan - pan[axis]);
            pan[axis] += delta * (customFriction || PAN_END_FRICTION);
          } else {
            pan[axis] = potentialPan;
          }
        }
      };
      UPPER_ZOOM_FRICTION = 0.05;
      LOWER_ZOOM_FRICTION = 0.15;
      ZoomHandler = class {
        constructor(gestures) {
          this.gestures = gestures;
          this._startPan = {
            x: 0,
            y: 0
          };
          this._startZoomPoint = {
            x: 0,
            y: 0
          };
          this._zoomPoint = {
            x: 0,
            y: 0
          };
          this._wasOverFitZoomLevel = false;
          this._startZoomLevel = 1;
        }
        start() {
          const {
            currSlide
          } = this.gestures.pswp;
          if (currSlide) {
            this._startZoomLevel = currSlide.currZoomLevel;
            equalizePoints(this._startPan, currSlide.pan);
          }
          this.gestures.pswp.animations.stopAllPan();
          this._wasOverFitZoomLevel = false;
        }
        change() {
          const {
            p1,
            startP1,
            p2,
            startP2,
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          if (!currSlide) {
            return;
          }
          const minZoomLevel = currSlide.zoomLevels.min;
          const maxZoomLevel = currSlide.zoomLevels.max;
          if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
            return;
          }
          getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
          getZoomPointsCenter(this._zoomPoint, p1, p2);
          let currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel;
          if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
            this._wasOverFitZoomLevel = true;
          }
          if (currZoomLevel < minZoomLevel) {
            if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
              const bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
              if (!pswp.dispatch("pinchClose", {
                bgOpacity
              }).defaultPrevented) {
                pswp.applyBgOpacity(bgOpacity);
              }
            } else {
              currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
            }
          } else if (currZoomLevel > maxZoomLevel) {
            currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
          }
          currSlide.pan.x = this._calculatePanForZoomLevel("x", currZoomLevel);
          currSlide.pan.y = this._calculatePanForZoomLevel("y", currZoomLevel);
          currSlide.setZoomLevel(currZoomLevel);
          currSlide.applyCurrentZoomPan();
        }
        end() {
          const {
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          if ((!currSlide || currSlide.currZoomLevel < currSlide.zoomLevels.initial) && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
            pswp.close();
          } else {
            this.correctZoomPan();
          }
        }
        _calculatePanForZoomLevel(axis, currZoomLevel) {
          const zoomFactor = currZoomLevel / this._startZoomLevel;
          return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
        }
        correctZoomPan(ignoreGesture) {
          const {
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          if (!(currSlide !== null && currSlide !== void 0 && currSlide.isZoomable())) {
            return;
          }
          if (this._zoomPoint.x === 0) {
            ignoreGesture = true;
          }
          const prevZoomLevel = currSlide.currZoomLevel;
          let destinationZoomLevel;
          let currZoomLevelNeedsChange = true;
          if (prevZoomLevel < currSlide.zoomLevels.initial) {
            destinationZoomLevel = currSlide.zoomLevels.initial;
          } else if (prevZoomLevel > currSlide.zoomLevels.max) {
            destinationZoomLevel = currSlide.zoomLevels.max;
          } else {
            currZoomLevelNeedsChange = false;
            destinationZoomLevel = prevZoomLevel;
          }
          const initialBgOpacity = pswp.bgOpacity;
          const restoreBgOpacity = pswp.bgOpacity < 1;
          const initialPan = equalizePoints({
            x: 0,
            y: 0
          }, currSlide.pan);
          let destinationPan = equalizePoints({
            x: 0,
            y: 0
          }, initialPan);
          if (ignoreGesture) {
            this._zoomPoint.x = 0;
            this._zoomPoint.y = 0;
            this._startZoomPoint.x = 0;
            this._startZoomPoint.y = 0;
            this._startZoomLevel = prevZoomLevel;
            equalizePoints(this._startPan, initialPan);
          }
          if (currZoomLevelNeedsChange) {
            destinationPan = {
              x: this._calculatePanForZoomLevel("x", destinationZoomLevel),
              y: this._calculatePanForZoomLevel("y", destinationZoomLevel)
            };
          }
          currSlide.setZoomLevel(destinationZoomLevel);
          destinationPan = {
            x: currSlide.bounds.correctPan("x", destinationPan.x),
            y: currSlide.bounds.correctPan("y", destinationPan.y)
          };
          currSlide.setZoomLevel(prevZoomLevel);
          const panNeedsChange = !pointsEqual(destinationPan, initialPan);
          if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
            currSlide._setResolution(destinationZoomLevel);
            currSlide.applyCurrentZoomPan();
            return;
          }
          pswp.animations.stopAllPan();
          pswp.animations.startSpring({
            isPan: true,
            start: 0,
            end: 1e3,
            velocity: 0,
            dampingRatio: 1,
            naturalFrequency: 40,
            onUpdate: (now2) => {
              now2 /= 1e3;
              if (panNeedsChange || currZoomLevelNeedsChange) {
                if (panNeedsChange) {
                  currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now2;
                  currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now2;
                }
                if (currZoomLevelNeedsChange) {
                  const newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now2;
                  currSlide.setZoomLevel(newZoomLevel);
                }
                currSlide.applyCurrentZoomPan();
              }
              if (restoreBgOpacity && pswp.bgOpacity < 1) {
                pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now2, 0, 1));
              }
            },
            onComplete: () => {
              currSlide._setResolution(destinationZoomLevel);
              currSlide.applyCurrentZoomPan();
            }
          });
        }
      };
      TapHandler = class {
        constructor(gestures) {
          this.gestures = gestures;
        }
        click(point, originalEvent) {
          const targetClassList = originalEvent.target.classList;
          const isImageClick = targetClassList.contains("pswp__img");
          const isBackgroundClick = targetClassList.contains("pswp__item") || targetClassList.contains("pswp__zoom-wrap");
          if (isImageClick) {
            this._doClickOrTapAction("imageClick", point, originalEvent);
          } else if (isBackgroundClick) {
            this._doClickOrTapAction("bgClick", point, originalEvent);
          }
        }
        tap(point, originalEvent) {
          if (didTapOnMainContent(originalEvent)) {
            this._doClickOrTapAction("tap", point, originalEvent);
          }
        }
        doubleTap(point, originalEvent) {
          if (didTapOnMainContent(originalEvent)) {
            this._doClickOrTapAction("doubleTap", point, originalEvent);
          }
        }
        _doClickOrTapAction(actionName, point, originalEvent) {
          var _this$gestures$pswp$e;
          const {
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          const actionFullName = actionName + "Action";
          const optionValue = pswp.options[actionFullName];
          if (pswp.dispatch(actionFullName, {
            point,
            originalEvent
          }).defaultPrevented) {
            return;
          }
          if (typeof optionValue === "function") {
            optionValue.call(pswp, point, originalEvent);
            return;
          }
          switch (optionValue) {
            case "close":
            case "next":
              pswp[optionValue]();
              break;
            case "zoom":
              currSlide === null || currSlide === void 0 || currSlide.toggleZoom(point);
              break;
            case "zoom-or-close":
              if (currSlide !== null && currSlide !== void 0 && currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
                currSlide.toggleZoom(point);
              } else if (pswp.options.clickToCloseNonZoomable) {
                pswp.close();
              }
              break;
            case "toggle-controls":
              (_this$gestures$pswp$e = this.gestures.pswp.element) === null || _this$gestures$pswp$e === void 0 || _this$gestures$pswp$e.classList.toggle("pswp--ui-visible");
              break;
          }
        }
      };
      AXIS_SWIPE_HYSTERISIS = 10;
      DOUBLE_TAP_DELAY = 300;
      MIN_TAP_DISTANCE = 25;
      Gestures = class {
        constructor(pswp) {
          this.pswp = pswp;
          this.dragAxis = null;
          this.p1 = {
            x: 0,
            y: 0
          };
          this.p2 = {
            x: 0,
            y: 0
          };
          this.prevP1 = {
            x: 0,
            y: 0
          };
          this.prevP2 = {
            x: 0,
            y: 0
          };
          this.startP1 = {
            x: 0,
            y: 0
          };
          this.startP2 = {
            x: 0,
            y: 0
          };
          this.velocity = {
            x: 0,
            y: 0
          };
          this._lastStartP1 = {
            x: 0,
            y: 0
          };
          this._intervalP1 = {
            x: 0,
            y: 0
          };
          this._numActivePoints = 0;
          this._ongoingPointers = [];
          this._touchEventEnabled = "ontouchstart" in window;
          this._pointerEventEnabled = !!window.PointerEvent;
          this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
          this._numActivePoints = 0;
          this._intervalTime = 0;
          this._velocityCalculated = false;
          this.isMultitouch = false;
          this.isDragging = false;
          this.isZooming = false;
          this.raf = null;
          this._tapTimer = null;
          if (!this.supportsTouch) {
            pswp.options.allowPanToNext = false;
          }
          this.drag = new DragHandler(this);
          this.zoomLevels = new ZoomHandler(this);
          this.tapHandler = new TapHandler(this);
          pswp.on("bindEvents", () => {
            pswp.events.add(
              pswp.scrollWrap,
              "click",
              this._onClick.bind(this)
            );
            if (this._pointerEventEnabled) {
              this._bindEvents("pointer", "down", "up", "cancel");
            } else if (this._touchEventEnabled) {
              this._bindEvents("touch", "start", "end", "cancel");
              if (pswp.scrollWrap) {
                pswp.scrollWrap.ontouchmove = () => {
                };
                pswp.scrollWrap.ontouchend = () => {
                };
              }
            } else {
              this._bindEvents("mouse", "down", "up");
            }
          });
        }
        _bindEvents(pref, down, up, cancel) {
          const {
            pswp
          } = this;
          const {
            events: events2
          } = pswp;
          const cancelEvent = cancel ? pref + cancel : "";
          events2.add(
            pswp.scrollWrap,
            pref + down,
            this.onPointerDown.bind(this)
          );
          events2.add(
            window,
            pref + "move",
            this.onPointerMove.bind(this)
          );
          events2.add(
            window,
            pref + up,
            this.onPointerUp.bind(this)
          );
          if (cancelEvent) {
            events2.add(
              pswp.scrollWrap,
              cancelEvent,
              this.onPointerUp.bind(this)
            );
          }
        }
        onPointerDown(e2) {
          const isMousePointer = e2.type === "mousedown" || e2.pointerType === "mouse";
          if (isMousePointer && e2.button > 0) {
            return;
          }
          const {
            pswp
          } = this;
          if (!pswp.opener.isOpen) {
            e2.preventDefault();
            return;
          }
          if (pswp.dispatch("pointerDown", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (isMousePointer) {
            pswp.mouseDetected();
            this._preventPointerEventBehaviour(e2, "down");
          }
          pswp.animations.stopAll();
          this._updatePoints(e2, "down");
          if (this._numActivePoints === 1) {
            this.dragAxis = null;
            equalizePoints(this.startP1, this.p1);
          }
          if (this._numActivePoints > 1) {
            this._clearTapTimer();
            this.isMultitouch = true;
          } else {
            this.isMultitouch = false;
          }
        }
        onPointerMove(e2) {
          this._preventPointerEventBehaviour(e2, "move");
          if (!this._numActivePoints) {
            return;
          }
          this._updatePoints(e2, "move");
          if (this.pswp.dispatch("pointerMove", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (this._numActivePoints === 1 && !this.isDragging) {
            if (!this.dragAxis) {
              this._calculateDragDirection();
            }
            if (this.dragAxis && !this.isDragging) {
              if (this.isZooming) {
                this.isZooming = false;
                this.zoomLevels.end();
              }
              this.isDragging = true;
              this._clearTapTimer();
              this._updateStartPoints();
              this._intervalTime = Date.now();
              this._velocityCalculated = false;
              equalizePoints(this._intervalP1, this.p1);
              this.velocity.x = 0;
              this.velocity.y = 0;
              this.drag.start();
              this._rafStopLoop();
              this._rafRenderLoop();
            }
          } else if (this._numActivePoints > 1 && !this.isZooming) {
            this._finishDrag();
            this.isZooming = true;
            this._updateStartPoints();
            this.zoomLevels.start();
            this._rafStopLoop();
            this._rafRenderLoop();
          }
        }
        _finishDrag() {
          if (this.isDragging) {
            this.isDragging = false;
            if (!this._velocityCalculated) {
              this._updateVelocity(true);
            }
            this.drag.end();
            this.dragAxis = null;
          }
        }
        onPointerUp(e2) {
          if (!this._numActivePoints) {
            return;
          }
          this._updatePoints(e2, "up");
          if (this.pswp.dispatch("pointerUp", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (this._numActivePoints === 0) {
            this._rafStopLoop();
            if (this.isDragging) {
              this._finishDrag();
            } else if (!this.isZooming && !this.isMultitouch) {
              this._finishTap(e2);
            }
          }
          if (this._numActivePoints < 2 && this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
            if (this._numActivePoints === 1) {
              this.dragAxis = null;
              this._updateStartPoints();
            }
          }
        }
        _rafRenderLoop() {
          if (this.isDragging || this.isZooming) {
            this._updateVelocity();
            if (this.isDragging) {
              if (!pointsEqual(this.p1, this.prevP1)) {
                this.drag.change();
              }
            } else {
              if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
                this.zoomLevels.change();
              }
            }
            this._updatePrevPoints();
            this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
          }
        }
        _updateVelocity(force) {
          const time = Date.now();
          const duration = time - this._intervalTime;
          if (duration < 50 && !force) {
            return;
          }
          this.velocity.x = this._getVelocity("x", duration);
          this.velocity.y = this._getVelocity("y", duration);
          this._intervalTime = time;
          equalizePoints(this._intervalP1, this.p1);
          this._velocityCalculated = true;
        }
        _finishTap(e2) {
          const {
            mainScroll
          } = this.pswp;
          if (mainScroll.isShifted()) {
            mainScroll.moveIndexBy(0, true);
            return;
          }
          if (e2.type.indexOf("cancel") > 0) {
            return;
          }
          if (e2.type === "mouseup" || e2.pointerType === "mouse") {
            this.tapHandler.click(this.startP1, e2);
            return;
          }
          const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
          if (this._tapTimer) {
            this._clearTapTimer();
            if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
              this.tapHandler.doubleTap(this.startP1, e2);
            }
          } else {
            equalizePoints(this._lastStartP1, this.startP1);
            this._tapTimer = setTimeout(() => {
              this.tapHandler.tap(this.startP1, e2);
              this._clearTapTimer();
            }, tapDelay);
          }
        }
        _clearTapTimer() {
          if (this._tapTimer) {
            clearTimeout(this._tapTimer);
            this._tapTimer = null;
          }
        }
        _getVelocity(axis, duration) {
          const displacement = this.p1[axis] - this._intervalP1[axis];
          if (Math.abs(displacement) > 1 && duration > 5) {
            return displacement / duration;
          }
          return 0;
        }
        _rafStopLoop() {
          if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
          }
        }
        _preventPointerEventBehaviour(e2, pointerType) {
          const preventPointerEvent = this.pswp.applyFilters("preventPointerEvent", true, e2, pointerType);
          if (preventPointerEvent) {
            e2.preventDefault();
          }
        }
        _updatePoints(e2, pointerType) {
          if (this._pointerEventEnabled) {
            const pointerEvent = e2;
            const pointerIndex = this._ongoingPointers.findIndex((ongoingPointer) => {
              return ongoingPointer.id === pointerEvent.pointerId;
            });
            if (pointerType === "up" && pointerIndex > -1) {
              this._ongoingPointers.splice(pointerIndex, 1);
            } else if (pointerType === "down" && pointerIndex === -1) {
              this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {
                x: 0,
                y: 0
              }));
            } else if (pointerIndex > -1) {
              this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
            }
            this._numActivePoints = this._ongoingPointers.length;
            if (this._numActivePoints > 0) {
              equalizePoints(this.p1, this._ongoingPointers[0]);
            }
            if (this._numActivePoints > 1) {
              equalizePoints(this.p2, this._ongoingPointers[1]);
            }
          } else {
            const touchEvent = e2;
            this._numActivePoints = 0;
            if (touchEvent.type.indexOf("touch") > -1) {
              if (touchEvent.touches && touchEvent.touches.length > 0) {
                this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
                this._numActivePoints++;
                if (touchEvent.touches.length > 1) {
                  this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
                  this._numActivePoints++;
                }
              }
            } else {
              this._convertEventPosToPoint(
                e2,
                this.p1
              );
              if (pointerType === "up") {
                this._numActivePoints = 0;
              } else {
                this._numActivePoints++;
              }
            }
          }
        }
        _updatePrevPoints() {
          equalizePoints(this.prevP1, this.p1);
          equalizePoints(this.prevP2, this.p2);
        }
        _updateStartPoints() {
          equalizePoints(this.startP1, this.p1);
          equalizePoints(this.startP2, this.p2);
          this._updatePrevPoints();
        }
        _calculateDragDirection() {
          if (this.pswp.mainScroll.isShifted()) {
            this.dragAxis = "x";
          } else {
            const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
            if (diff !== 0) {
              const axisToCheck = diff > 0 ? "x" : "y";
              if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
                this.dragAxis = axisToCheck;
              }
            }
          }
        }
        _convertEventPosToPoint(e2, p) {
          p.x = e2.pageX - this.pswp.offset.x;
          p.y = e2.pageY - this.pswp.offset.y;
          if ("pointerId" in e2) {
            p.id = e2.pointerId;
          } else if (e2.identifier !== void 0) {
            p.id = e2.identifier;
          }
          return p;
        }
        _onClick(e2) {
          if (this.pswp.mainScroll.isShifted()) {
            e2.preventDefault();
            e2.stopPropagation();
          }
        }
      };
      MAIN_SCROLL_END_FRICTION = 0.35;
      MainScroll = class {
        constructor(pswp) {
          this.pswp = pswp;
          this.x = 0;
          this.slideWidth = 0;
          this._currPositionIndex = 0;
          this._prevPositionIndex = 0;
          this._containerShiftIndex = -1;
          this.itemHolders = [];
        }
        resize(resizeSlides) {
          const {
            pswp
          } = this;
          const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
          const slideWidthChanged = newSlideWidth !== this.slideWidth;
          if (slideWidthChanged) {
            this.slideWidth = newSlideWidth;
            this.moveTo(this.getCurrSlideX());
          }
          this.itemHolders.forEach((itemHolder, index2) => {
            if (slideWidthChanged) {
              setTransform(itemHolder.el, (index2 + this._containerShiftIndex) * this.slideWidth);
            }
            if (resizeSlides && itemHolder.slide) {
              itemHolder.slide.resize();
            }
          });
        }
        resetPosition() {
          this._currPositionIndex = 0;
          this._prevPositionIndex = 0;
          this.slideWidth = 0;
          this._containerShiftIndex = -1;
        }
        appendHolders() {
          this.itemHolders = [];
          for (let i2 = 0; i2 < 3; i2++) {
            const el = createElement2("pswp__item", "div", this.pswp.container);
            el.setAttribute("role", "group");
            el.setAttribute("aria-roledescription", "slide");
            el.setAttribute("aria-hidden", "true");
            el.style.display = i2 === 1 ? "block" : "none";
            this.itemHolders.push({
              el
            });
          }
        }
        canBeSwiped() {
          return this.pswp.getNumItems() > 1;
        }
        moveIndexBy(diff, animate, velocityX) {
          const {
            pswp
          } = this;
          let newIndex = pswp.potentialIndex + diff;
          const numSlides = pswp.getNumItems();
          if (pswp.canLoop()) {
            newIndex = pswp.getLoopedIndex(newIndex);
            const distance = (diff + numSlides) % numSlides;
            if (distance <= numSlides / 2) {
              diff = distance;
            } else {
              diff = distance - numSlides;
            }
          } else {
            if (newIndex < 0) {
              newIndex = 0;
            } else if (newIndex >= numSlides) {
              newIndex = numSlides - 1;
            }
            diff = newIndex - pswp.potentialIndex;
          }
          pswp.potentialIndex = newIndex;
          this._currPositionIndex -= diff;
          pswp.animations.stopMainScroll();
          const destinationX = this.getCurrSlideX();
          if (!animate) {
            this.moveTo(destinationX);
            this.updateCurrItem();
          } else {
            pswp.animations.startSpring({
              isMainScroll: true,
              start: this.x,
              end: destinationX,
              velocity: velocityX || 0,
              naturalFrequency: 30,
              dampingRatio: 1,
              onUpdate: (x) => {
                this.moveTo(x);
              },
              onComplete: () => {
                this.updateCurrItem();
                pswp.appendHeavy();
              }
            });
            let currDiff = pswp.potentialIndex - pswp.currIndex;
            if (pswp.canLoop()) {
              const currDistance = (currDiff + numSlides) % numSlides;
              if (currDistance <= numSlides / 2) {
                currDiff = currDistance;
              } else {
                currDiff = currDistance - numSlides;
              }
            }
            if (Math.abs(currDiff) > 1) {
              this.updateCurrItem();
            }
          }
          return Boolean(diff);
        }
        getCurrSlideX() {
          return this.slideWidth * this._currPositionIndex;
        }
        isShifted() {
          return this.x !== this.getCurrSlideX();
        }
        updateCurrItem() {
          var _this$itemHolders$;
          const {
            pswp
          } = this;
          const positionDifference = this._prevPositionIndex - this._currPositionIndex;
          if (!positionDifference) {
            return;
          }
          this._prevPositionIndex = this._currPositionIndex;
          pswp.currIndex = pswp.potentialIndex;
          let diffAbs = Math.abs(positionDifference);
          let tempHolder;
          if (diffAbs >= 3) {
            this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
            diffAbs = 3;
          }
          for (let i2 = 0; i2 < diffAbs; i2++) {
            if (positionDifference > 0) {
              tempHolder = this.itemHolders.shift();
              if (tempHolder) {
                this.itemHolders[2] = tempHolder;
                this._containerShiftIndex++;
                setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
                pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i2 + 2);
              }
            } else {
              tempHolder = this.itemHolders.pop();
              if (tempHolder) {
                this.itemHolders.unshift(tempHolder);
                this._containerShiftIndex--;
                setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
                pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i2 - 2);
              }
            }
          }
          if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
            this.resetPosition();
            this.resize();
          }
          pswp.animations.stopAllPan();
          this.itemHolders.forEach((itemHolder, i2) => {
            if (itemHolder.slide) {
              itemHolder.slide.setIsActive(i2 === 1);
            }
          });
          pswp.currSlide = (_this$itemHolders$ = this.itemHolders[1]) === null || _this$itemHolders$ === void 0 ? void 0 : _this$itemHolders$.slide;
          pswp.contentLoader.updateLazy(positionDifference);
          if (pswp.currSlide) {
            pswp.currSlide.applyCurrentZoomPan();
          }
          pswp.dispatch("change");
        }
        moveTo(x, dragging) {
          if (!this.pswp.canLoop() && dragging) {
            let newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x) / this.slideWidth;
            newSlideIndexOffset += this.pswp.currIndex;
            const delta = Math.round(x - this.x);
            if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
              x = this.x + delta * MAIN_SCROLL_END_FRICTION;
            }
          }
          this.x = x;
          if (this.pswp.container) {
            setTransform(this.pswp.container, x);
          }
          this.pswp.dispatch("moveMainScroll", {
            x,
            dragging: dragging !== null && dragging !== void 0 ? dragging : false
          });
        }
      };
      KeyboardKeyCodesMap = {
        Escape: 27,
        z: 90,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Tab: 9
      };
      getKeyboardEventKey = (key, isKeySupported) => {
        return isKeySupported ? key : KeyboardKeyCodesMap[key];
      };
      Keyboard2 = class {
        constructor(pswp) {
          this.pswp = pswp;
          this._wasFocused = false;
          pswp.on("bindEvents", () => {
            if (pswp.options.trapFocus) {
              if (!pswp.options.initialPointerPos) {
                this._focusRoot();
              }
              pswp.events.add(
                document,
                "focusin",
                this._onFocusIn.bind(this)
              );
            }
            pswp.events.add(
              document,
              "keydown",
              this._onKeyDown.bind(this)
            );
          });
          const lastActiveElement = document.activeElement;
          pswp.on("destroy", () => {
            if (pswp.options.returnFocus && lastActiveElement && this._wasFocused) {
              lastActiveElement.focus();
            }
          });
        }
        _focusRoot() {
          if (!this._wasFocused && this.pswp.element) {
            this.pswp.element.focus();
            this._wasFocused = true;
          }
        }
        _onKeyDown(e2) {
          const {
            pswp
          } = this;
          if (pswp.dispatch("keydown", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (specialKeyUsed2(e2)) {
            return;
          }
          let keydownAction;
          let axis;
          let isForward = false;
          const isKeySupported = "key" in e2;
          switch (isKeySupported ? e2.key : e2.keyCode) {
            case getKeyboardEventKey("Escape", isKeySupported):
              if (pswp.options.escKey) {
                keydownAction = "close";
              }
              break;
            case getKeyboardEventKey("z", isKeySupported):
              keydownAction = "toggleZoom";
              break;
            case getKeyboardEventKey("ArrowLeft", isKeySupported):
              axis = "x";
              break;
            case getKeyboardEventKey("ArrowUp", isKeySupported):
              axis = "y";
              break;
            case getKeyboardEventKey("ArrowRight", isKeySupported):
              axis = "x";
              isForward = true;
              break;
            case getKeyboardEventKey("ArrowDown", isKeySupported):
              isForward = true;
              axis = "y";
              break;
            case getKeyboardEventKey("Tab", isKeySupported):
              this._focusRoot();
              break;
          }
          if (axis) {
            e2.preventDefault();
            const {
              currSlide
            } = pswp;
            if (pswp.options.arrowKeys && axis === "x" && pswp.getNumItems() > 1) {
              keydownAction = isForward ? "next" : "prev";
            } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
              currSlide.pan[axis] += isForward ? -80 : 80;
              currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
            }
          }
          if (keydownAction) {
            e2.preventDefault();
            pswp[keydownAction]();
          }
        }
        _onFocusIn(e2) {
          const {
            template
          } = this.pswp;
          if (template && document !== e2.target && template !== e2.target && !template.contains(
            e2.target
          )) {
            template.focus();
          }
        }
      };
      DEFAULT_EASING = "cubic-bezier(.4,0,.22,1)";
      CSSAnimation = class {
        constructor(props) {
          var _props$prop;
          this.props = props;
          const {
            target,
            onComplete,
            transform: transform2,
            onFinish = () => {
            },
            duration = 333,
            easing = DEFAULT_EASING
          } = props;
          this.onFinish = onFinish;
          const prop = transform2 ? "transform" : "opacity";
          const propValue = (_props$prop = props[prop]) !== null && _props$prop !== void 0 ? _props$prop : "";
          this._target = target;
          this._onComplete = onComplete;
          this._finished = false;
          this._onTransitionEnd = this._onTransitionEnd.bind(this);
          this._helperTimeout = setTimeout(() => {
            setTransitionStyle(target, prop, duration, easing);
            this._helperTimeout = setTimeout(() => {
              target.addEventListener("transitionend", this._onTransitionEnd, false);
              target.addEventListener("transitioncancel", this._onTransitionEnd, false);
              this._helperTimeout = setTimeout(() => {
                this._finalizeAnimation();
              }, duration + 500);
              target.style[prop] = propValue;
            }, 30);
          }, 0);
        }
        _onTransitionEnd(e2) {
          if (e2.target === this._target) {
            this._finalizeAnimation();
          }
        }
        _finalizeAnimation() {
          if (!this._finished) {
            this._finished = true;
            this.onFinish();
            if (this._onComplete) {
              this._onComplete();
            }
          }
        }
        destroy() {
          if (this._helperTimeout) {
            clearTimeout(this._helperTimeout);
          }
          removeTransitionStyle(this._target);
          this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
          this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
          if (!this._finished) {
            this._finalizeAnimation();
          }
        }
      };
      DEFAULT_NATURAL_FREQUENCY = 12;
      DEFAULT_DAMPING_RATIO = 0.75;
      SpringEaser = class {
        constructor(initialVelocity, dampingRatio, naturalFrequency) {
          this.velocity = initialVelocity * 1e3;
          this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
          this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
          this._dampedFrequency = this._naturalFrequency;
          if (this._dampingRatio < 1) {
            this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
          }
        }
        easeFrame(deltaPosition, deltaTime) {
          let displacement = 0;
          let coeff;
          deltaTime /= 1e3;
          const naturalDumpingPow = __pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);
          if (this._dampingRatio === 1) {
            coeff = this.velocity + this._naturalFrequency * deltaPosition;
            displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
            this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
          } else if (this._dampingRatio < 1) {
            coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
            const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
            const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
            displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
            this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
          }
          return displacement;
        }
      };
      SpringAnimation = class {
        constructor(props) {
          this.props = props;
          this._raf = 0;
          const {
            start,
            end,
            velocity,
            onUpdate,
            onComplete,
            onFinish = () => {
            },
            dampingRatio,
            naturalFrequency
          } = props;
          this.onFinish = onFinish;
          const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
          let prevTime = Date.now();
          let deltaPosition = start - end;
          const animationLoop = () => {
            if (this._raf) {
              deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
              if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
                onUpdate(end);
                if (onComplete) {
                  onComplete();
                }
                this.onFinish();
              } else {
                prevTime = Date.now();
                onUpdate(deltaPosition + end);
                this._raf = requestAnimationFrame(animationLoop);
              }
            }
          };
          this._raf = requestAnimationFrame(animationLoop);
        }
        destroy() {
          if (this._raf >= 0) {
            cancelAnimationFrame(this._raf);
          }
          this._raf = 0;
        }
      };
      Animations = class {
        constructor() {
          this.activeAnimations = [];
        }
        startSpring(props) {
          this._start(props, true);
        }
        startTransition(props) {
          this._start(props);
        }
        _start(props, isSpring) {
          const animation = isSpring ? new SpringAnimation(
            props
          ) : new CSSAnimation(
            props
          );
          this.activeAnimations.push(animation);
          animation.onFinish = () => this.stop(animation);
          return animation;
        }
        stop(animation) {
          animation.destroy();
          const index2 = this.activeAnimations.indexOf(animation);
          if (index2 > -1) {
            this.activeAnimations.splice(index2, 1);
          }
        }
        stopAll() {
          this.activeAnimations.forEach((animation) => {
            animation.destroy();
          });
          this.activeAnimations = [];
        }
        stopAllPan() {
          this.activeAnimations = this.activeAnimations.filter((animation) => {
            if (animation.props.isPan) {
              animation.destroy();
              return false;
            }
            return true;
          });
        }
        stopMainScroll() {
          this.activeAnimations = this.activeAnimations.filter((animation) => {
            if (animation.props.isMainScroll) {
              animation.destroy();
              return false;
            }
            return true;
          });
        }
        isPanRunning() {
          return this.activeAnimations.some((animation) => {
            return animation.props.isPan;
          });
        }
      };
      ScrollWheel = class {
        constructor(pswp) {
          this.pswp = pswp;
          pswp.events.add(
            pswp.element,
            "wheel",
            this._onWheel.bind(this)
          );
        }
        _onWheel(e2) {
          e2.preventDefault();
          const {
            currSlide
          } = this.pswp;
          let {
            deltaX,
            deltaY
          } = e2;
          if (!currSlide) {
            return;
          }
          if (this.pswp.dispatch("wheel", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (e2.ctrlKey || this.pswp.options.wheelToZoom) {
            if (currSlide.isZoomable()) {
              let zoomFactor = -deltaY;
              if (e2.deltaMode === 1) {
                zoomFactor *= 0.05;
              } else {
                zoomFactor *= e2.deltaMode ? 1 : 2e-3;
              }
              zoomFactor = __pow(2, zoomFactor);
              const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
              currSlide.zoomTo(destZoomLevel, {
                x: e2.clientX,
                y: e2.clientY
              });
            }
          } else {
            if (currSlide.isPannable()) {
              if (e2.deltaMode === 1) {
                deltaX *= 18;
                deltaY *= 18;
              }
              currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
            }
          }
        }
      };
      UIElement = class {
        constructor(pswp, data) {
          var _container;
          const name = data.name || data.className;
          let elementHTML = data.html;
          if (pswp.options[name] === false) {
            return;
          }
          if (typeof pswp.options[name + "SVG"] === "string") {
            elementHTML = pswp.options[name + "SVG"];
          }
          pswp.dispatch("uiElementCreate", {
            data
          });
          let className = "";
          if (data.isButton) {
            className += "pswp__button ";
            className += data.className || `pswp__button--${data.name}`;
          } else {
            className += data.className || `pswp__${data.name}`;
          }
          let tagName = data.isButton ? data.tagName || "button" : data.tagName || "div";
          tagName = tagName.toLowerCase();
          const element = createElement2(className, tagName);
          if (data.isButton) {
            if (tagName === "button") {
              element.type = "button";
            }
            let {
              title
            } = data;
            const {
              ariaLabel
            } = data;
            if (typeof pswp.options[name + "Title"] === "string") {
              title = pswp.options[name + "Title"];
            }
            if (title) {
              element.title = title;
            }
            const ariaText = ariaLabel || title;
            if (ariaText) {
              element.setAttribute("aria-label", ariaText);
            }
          }
          element.innerHTML = addElementHTML(elementHTML);
          if (data.onInit) {
            data.onInit(element, pswp);
          }
          if (data.onClick) {
            element.onclick = (e2) => {
              if (typeof data.onClick === "string") {
                pswp[data.onClick]();
              } else if (typeof data.onClick === "function") {
                data.onClick(e2, element, pswp);
              }
            };
          }
          const appendTo = data.appendTo || "bar";
          let container = pswp.element;
          if (appendTo === "bar") {
            if (!pswp.topBar) {
              pswp.topBar = createElement2("pswp__top-bar pswp__hide-on-close", "div", pswp.scrollWrap);
            }
            container = pswp.topBar;
          } else {
            element.classList.add("pswp__hide-on-close");
            if (appendTo === "wrapper") {
              container = pswp.scrollWrap;
            }
          }
          (_container = container) === null || _container === void 0 || _container.appendChild(pswp.applyFilters("uiElement", element, data));
        }
      };
      arrowPrev = {
        name: "arrowPrev",
        className: "pswp__button--arrow--prev",
        title: "Previous",
        order: 10,
        isButton: true,
        appendTo: "wrapper",
        html: {
          isCustomSVG: true,
          size: 60,
          inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
          outlineID: "pswp__icn-arrow"
        },
        onClick: "prev",
        onInit: initArrowButton
      };
      arrowNext = {
        name: "arrowNext",
        className: "pswp__button--arrow--next",
        title: "Next",
        order: 11,
        isButton: true,
        appendTo: "wrapper",
        html: {
          isCustomSVG: true,
          size: 60,
          inner: '<use xlink:href="#pswp__icn-arrow"/>',
          outlineID: "pswp__icn-arrow"
        },
        onClick: "next",
        onInit: (el, pswp) => {
          initArrowButton(el, pswp, true);
        }
      };
      closeButton = {
        name: "close",
        title: "Close",
        order: 20,
        isButton: true,
        html: {
          isCustomSVG: true,
          inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
          outlineID: "pswp__icn-close"
        },
        onClick: "close"
      };
      zoomButton = {
        name: "zoom",
        title: "Zoom",
        order: 10,
        isButton: true,
        html: {
          isCustomSVG: true,
          inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
          outlineID: "pswp__icn-zoom"
        },
        onClick: "toggleZoom"
      };
      loadingIndicator = {
        name: "preloader",
        appendTo: "bar",
        order: 7,
        html: {
          isCustomSVG: true,
          inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
          outlineID: "pswp__icn-loading"
        },
        onInit: (indicatorElement, pswp) => {
          let isVisible;
          let delayTimeout = null;
          const toggleIndicatorClass = (className, add) => {
            indicatorElement.classList.toggle("pswp__preloader--" + className, add);
          };
          const setIndicatorVisibility = (visible) => {
            if (isVisible !== visible) {
              isVisible = visible;
              toggleIndicatorClass("active", visible);
            }
          };
          const updatePreloaderVisibility = () => {
            var _pswp$currSlide;
            if (!((_pswp$currSlide = pswp.currSlide) !== null && _pswp$currSlide !== void 0 && _pswp$currSlide.content.isLoading())) {
              setIndicatorVisibility(false);
              if (delayTimeout) {
                clearTimeout(delayTimeout);
                delayTimeout = null;
              }
              return;
            }
            if (!delayTimeout) {
              delayTimeout = setTimeout(() => {
                var _pswp$currSlide2;
                setIndicatorVisibility(Boolean((_pswp$currSlide2 = pswp.currSlide) === null || _pswp$currSlide2 === void 0 ? void 0 : _pswp$currSlide2.content.isLoading()));
                delayTimeout = null;
              }, pswp.options.preloaderDelay);
            }
          };
          pswp.on("change", updatePreloaderVisibility);
          pswp.on("loadComplete", (e2) => {
            if (pswp.currSlide === e2.slide) {
              updatePreloaderVisibility();
            }
          });
          if (pswp.ui) {
            pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
          }
        }
      };
      counterIndicator = {
        name: "counter",
        order: 5,
        onInit: (counterElement, pswp) => {
          pswp.on("change", () => {
            counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
          });
        }
      };
      UI = class {
        constructor(pswp) {
          this.pswp = pswp;
          this.isRegistered = false;
          this.uiElementsData = [];
          this.items = [];
          this.updatePreloaderVisibility = () => {
          };
          this._lastUpdatedZoomLevel = void 0;
        }
        init() {
          const {
            pswp
          } = this;
          this.isRegistered = false;
          this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
          pswp.dispatch("uiRegister");
          this.uiElementsData.sort((a2, b) => {
            return (a2.order || 0) - (b.order || 0);
          });
          this.items = [];
          this.isRegistered = true;
          this.uiElementsData.forEach((uiElementData) => {
            this.registerElement(uiElementData);
          });
          pswp.on("change", () => {
            var _pswp$element;
            (_pswp$element = pswp.element) === null || _pswp$element === void 0 || _pswp$element.classList.toggle("pswp--one-slide", pswp.getNumItems() === 1);
          });
          pswp.on("zoomPanUpdate", () => this._onZoomPanUpdate());
        }
        registerElement(elementData) {
          if (this.isRegistered) {
            this.items.push(new UIElement(this.pswp, elementData));
          } else {
            this.uiElementsData.push(elementData);
          }
        }
        _onZoomPanUpdate() {
          const {
            template,
            currSlide,
            options
          } = this.pswp;
          if (this.pswp.opener.isClosing || !template || !currSlide) {
            return;
          }
          let {
            currZoomLevel
          } = currSlide;
          if (!this.pswp.opener.isOpen) {
            currZoomLevel = currSlide.zoomLevels.initial;
          }
          if (currZoomLevel === this._lastUpdatedZoomLevel) {
            return;
          }
          this._lastUpdatedZoomLevel = currZoomLevel;
          const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
          if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
            setZoomedIn(template, false);
            template.classList.remove("pswp--zoom-allowed");
            return;
          }
          template.classList.add("pswp--zoom-allowed");
          const potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
          setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
          if (options.imageClickAction === "zoom" || options.imageClickAction === "zoom-or-close") {
            template.classList.add("pswp--click-to-zoom");
          }
        }
      };
      PhotoSwipeEvent2 = class {
        constructor(type, details) {
          this.type = type;
          this.defaultPrevented = false;
          if (details) {
            Object.assign(this, details);
          }
        }
        preventDefault() {
          this.defaultPrevented = true;
        }
      };
      Eventable2 = class {
        constructor() {
          this._listeners = {};
          this._filters = {};
          this.pswp = void 0;
          this.options = void 0;
        }
        addFilter(name, fn, priority = 100) {
          var _this$_filters$name, _this$_filters$name2, _this$pswp;
          if (!this._filters[name]) {
            this._filters[name] = [];
          }
          (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
            fn,
            priority
          });
          (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
          (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
        }
        removeFilter(name, fn) {
          if (this._filters[name]) {
            this._filters[name] = this._filters[name].filter((filter2) => filter2.fn !== fn);
          }
          if (this.pswp) {
            this.pswp.removeFilter(name, fn);
          }
        }
        applyFilters(name, ...args) {
          var _this$_filters$name3;
          (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter2) => {
            args[0] = filter2.fn.apply(this, args);
          });
          return args[0];
        }
        on(name, fn) {
          var _this$_listeners$name, _this$pswp2;
          if (!this._listeners[name]) {
            this._listeners[name] = [];
          }
          (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
          (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
        }
        off(name, fn) {
          var _this$pswp3;
          if (this._listeners[name]) {
            this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
          }
          (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
        }
        dispatch(name, details) {
          var _this$_listeners$name2;
          if (this.pswp) {
            return this.pswp.dispatch(name, details);
          }
          const event2 = new PhotoSwipeEvent2(name, details);
          (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
            listener.call(this, event2);
          });
          return event2;
        }
      };
      Placeholder2 = class {
        constructor(imageSrc, container) {
          this.element = createElement2("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
          if (imageSrc) {
            const imgEl = this.element;
            imgEl.decoding = "async";
            imgEl.alt = "";
            imgEl.src = imageSrc;
            imgEl.setAttribute("role", "presentation");
          }
          this.element.setAttribute("aria-hidden", "true");
        }
        setDisplayedSize(width, height) {
          if (!this.element) {
            return;
          }
          if (this.element.tagName === "IMG") {
            setWidthHeight2(this.element, 250, "auto");
            this.element.style.transformOrigin = "0 0";
            this.element.style.transform = toTransformString2(0, 0, width / 250);
          } else {
            setWidthHeight2(this.element, width, height);
          }
        }
        destroy() {
          var _this$element;
          if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
            this.element.remove();
          }
          this.element = null;
        }
      };
      Content2 = class {
        constructor(itemData, instance, index2) {
          this.instance = instance;
          this.data = itemData;
          this.index = index2;
          this.element = void 0;
          this.placeholder = void 0;
          this.slide = void 0;
          this.displayedImageWidth = 0;
          this.displayedImageHeight = 0;
          this.width = Number(this.data.w) || Number(this.data.width) || 0;
          this.height = Number(this.data.h) || Number(this.data.height) || 0;
          this.isAttached = false;
          this.hasSlide = false;
          this.isDecoding = false;
          this.state = LOAD_STATE2.IDLE;
          if (this.data.type) {
            this.type = this.data.type;
          } else if (this.data.src) {
            this.type = "image";
          } else {
            this.type = "html";
          }
          this.instance.dispatch("contentInit", {
            content: this
          });
        }
        removePlaceholder() {
          if (this.placeholder && !this.keepPlaceholder()) {
            setTimeout(() => {
              if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = void 0;
              }
            }, 1e3);
          }
        }
        load(isLazy, reload) {
          if (this.slide && this.usePlaceholder()) {
            if (!this.placeholder) {
              const placeholderSrc = this.instance.applyFilters(
                "placeholderSrc",
                this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
                this
              );
              this.placeholder = new Placeholder2(placeholderSrc, this.slide.container);
            } else {
              const placeholderEl = this.placeholder.element;
              if (placeholderEl && !placeholderEl.parentElement) {
                this.slide.container.prepend(placeholderEl);
              }
            }
          }
          if (this.element && !reload) {
            return;
          }
          if (this.instance.dispatch("contentLoad", {
            content: this,
            isLazy
          }).defaultPrevented) {
            return;
          }
          if (this.isImageContent()) {
            this.element = createElement2("pswp__img", "img");
            if (this.displayedImageWidth) {
              this.loadImage(isLazy);
            }
          } else {
            this.element = createElement2("pswp__content", "div");
            this.element.innerHTML = this.data.html || "";
          }
          if (reload && this.slide) {
            this.slide.updateContentSize(true);
          }
        }
        loadImage(isLazy) {
          var _this$data$src, _this$data$alt;
          if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy
          }).defaultPrevented) {
            return;
          }
          const imageElement = this.element;
          this.updateSrcsetSizes();
          if (this.data.srcset) {
            imageElement.srcset = this.data.srcset;
          }
          imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
          imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
          this.state = LOAD_STATE2.LOADING;
          if (imageElement.complete) {
            this.onLoaded();
          } else {
            imageElement.onload = () => {
              this.onLoaded();
            };
            imageElement.onerror = () => {
              this.onError();
            };
          }
        }
        setSlide(slide) {
          this.slide = slide;
          this.hasSlide = true;
          this.instance = slide.pswp;
        }
        onLoaded() {
          this.state = LOAD_STATE2.LOADED;
          if (this.slide && this.element) {
            this.instance.dispatch("loadComplete", {
              slide: this.slide,
              content: this
            });
            if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
              this.append();
              this.slide.updateContentSize(true);
            }
            if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
              this.removePlaceholder();
            }
          }
        }
        onError() {
          this.state = LOAD_STATE2.ERROR;
          if (this.slide) {
            this.displayError();
            this.instance.dispatch("loadComplete", {
              slide: this.slide,
              isError: true,
              content: this
            });
            this.instance.dispatch("loadError", {
              slide: this.slide,
              content: this
            });
          }
        }
        isLoading() {
          return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE2.LOADING, this);
        }
        isError() {
          return this.state === LOAD_STATE2.ERROR;
        }
        isImageContent() {
          return this.type === "image";
        }
        setDisplayedSize(width, height) {
          if (!this.element) {
            return;
          }
          if (this.placeholder) {
            this.placeholder.setDisplayedSize(width, height);
          }
          if (this.instance.dispatch("contentResize", {
            content: this,
            width,
            height
          }).defaultPrevented) {
            return;
          }
          setWidthHeight2(this.element, width, height);
          if (this.isImageContent() && !this.isError()) {
            const isInitialSizeUpdate = !this.displayedImageWidth && width;
            this.displayedImageWidth = width;
            this.displayedImageHeight = height;
            if (isInitialSizeUpdate) {
              this.loadImage(false);
            } else {
              this.updateSrcsetSizes();
            }
            if (this.slide) {
              this.instance.dispatch("imageSizeChange", {
                slide: this.slide,
                width,
                height,
                content: this
              });
            }
          }
        }
        isZoomable() {
          return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE2.ERROR, this);
        }
        updateSrcsetSizes() {
          if (!this.isImageContent() || !this.element || !this.data.srcset) {
            return;
          }
          const image = this.element;
          const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
          if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
            image.sizes = sizesWidth + "px";
            image.dataset.largestUsedSize = String(sizesWidth);
          }
        }
        usePlaceholder() {
          return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
        }
        lazyLoad() {
          if (this.instance.dispatch("contentLazyLoad", {
            content: this
          }).defaultPrevented) {
            return;
          }
          this.load(true);
        }
        keepPlaceholder() {
          return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
        }
        destroy() {
          this.hasSlide = false;
          this.slide = void 0;
          if (this.instance.dispatch("contentDestroy", {
            content: this
          }).defaultPrevented) {
            return;
          }
          this.remove();
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = void 0;
          }
          if (this.isImageContent() && this.element) {
            this.element.onload = null;
            this.element.onerror = null;
            this.element = void 0;
          }
        }
        displayError() {
          if (this.slide) {
            var _this$instance$option, _this$instance$option2;
            let errorMsgEl = createElement2("pswp__error-msg", "div");
            errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
            errorMsgEl = this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
            this.element = createElement2("pswp__content pswp__error-msg-container", "div");
            this.element.appendChild(errorMsgEl);
            this.slide.container.innerText = "";
            this.slide.container.appendChild(this.element);
            this.slide.updateContentSize(true);
            this.removePlaceholder();
          }
        }
        append() {
          if (this.isAttached || !this.element) {
            return;
          }
          this.isAttached = true;
          if (this.state === LOAD_STATE2.ERROR) {
            this.displayError();
            return;
          }
          if (this.instance.dispatch("contentAppend", {
            content: this
          }).defaultPrevented) {
            return;
          }
          const supportsDecode = "decode" in this.element;
          if (this.isImageContent()) {
            if (supportsDecode && this.slide && (!this.slide.isActive || isSafari2())) {
              this.isDecoding = true;
              this.element.decode().catch(() => {
              }).finally(() => {
                this.isDecoding = false;
                this.appendImage();
              });
            } else {
              this.appendImage();
            }
          } else if (this.slide && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
          }
        }
        activate() {
          if (this.instance.dispatch("contentActivate", {
            content: this
          }).defaultPrevented || !this.slide) {
            return;
          }
          if (this.isImageContent() && this.isDecoding && !isSafari2()) {
            this.appendImage();
          } else if (this.isError()) {
            this.load(false, true);
          }
          if (this.slide.holderElement) {
            this.slide.holderElement.setAttribute("aria-hidden", "false");
          }
        }
        deactivate() {
          this.instance.dispatch("contentDeactivate", {
            content: this
          });
          if (this.slide && this.slide.holderElement) {
            this.slide.holderElement.setAttribute("aria-hidden", "true");
          }
        }
        remove() {
          this.isAttached = false;
          if (this.instance.dispatch("contentRemove", {
            content: this
          }).defaultPrevented) {
            return;
          }
          if (this.element && this.element.parentNode) {
            this.element.remove();
          }
          if (this.placeholder && this.placeholder.element) {
            this.placeholder.element.remove();
          }
        }
        appendImage() {
          if (!this.isAttached) {
            return;
          }
          if (this.instance.dispatch("contentAppendImage", {
            content: this
          }).defaultPrevented) {
            return;
          }
          if (this.slide && this.element && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
          }
          if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
            this.removePlaceholder();
          }
        }
      };
      MIN_SLIDES_TO_CACHE = 5;
      ContentLoader = class {
        constructor(pswp) {
          this.pswp = pswp;
          this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
          this._cachedItems = [];
        }
        updateLazy(diff) {
          const {
            pswp
          } = this;
          if (pswp.dispatch("lazyLoad").defaultPrevented) {
            return;
          }
          const {
            preload
          } = pswp.options;
          const isForward = diff === void 0 ? true : diff >= 0;
          let i2;
          for (i2 = 0; i2 <= preload[1]; i2++) {
            this.loadSlideByIndex(pswp.currIndex + (isForward ? i2 : -i2));
          }
          for (i2 = 1; i2 <= preload[0]; i2++) {
            this.loadSlideByIndex(pswp.currIndex + (isForward ? -i2 : i2));
          }
        }
        loadSlideByIndex(initialIndex) {
          const index2 = this.pswp.getLoopedIndex(initialIndex);
          let content = this.getContentByIndex(index2);
          if (!content) {
            content = lazyLoadSlide2(index2, this.pswp);
            if (content) {
              this.addToCache(content);
            }
          }
        }
        getContentBySlide(slide) {
          let content = this.getContentByIndex(slide.index);
          if (!content) {
            content = this.pswp.createContentFromData(slide.data, slide.index);
            this.addToCache(content);
          }
          content.setSlide(slide);
          return content;
        }
        addToCache(content) {
          this.removeByIndex(content.index);
          this._cachedItems.push(content);
          if (this._cachedItems.length > this.limit) {
            const indexToRemove = this._cachedItems.findIndex((item) => {
              return !item.isAttached && !item.hasSlide;
            });
            if (indexToRemove !== -1) {
              const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
              removedItem.destroy();
            }
          }
        }
        removeByIndex(index2) {
          const indexToRemove = this._cachedItems.findIndex((item) => item.index === index2);
          if (indexToRemove !== -1) {
            this._cachedItems.splice(indexToRemove, 1);
          }
        }
        getContentByIndex(index2) {
          return this._cachedItems.find((content) => content.index === index2);
        }
        destroy() {
          this._cachedItems.forEach((content) => content.destroy());
          this._cachedItems = [];
        }
      };
      PhotoSwipeBase2 = class extends Eventable2 {
        getNumItems() {
          var _this$options;
          let numItems = 0;
          const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
          if (dataSource && "length" in dataSource) {
            numItems = dataSource.length;
          } else if (dataSource && "gallery" in dataSource) {
            if (!dataSource.items) {
              dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            if (dataSource.items) {
              numItems = dataSource.items.length;
            }
          }
          const event2 = this.dispatch("numItems", {
            dataSource,
            numItems
          });
          return this.applyFilters("numItems", event2.numItems, dataSource);
        }
        createContentFromData(slideData, index2) {
          return new Content2(slideData, this, index2);
        }
        getItemData(index2) {
          var _this$options2;
          const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
          let dataSourceItem = {};
          if (Array.isArray(dataSource)) {
            dataSourceItem = dataSource[index2];
          } else if (dataSource && "gallery" in dataSource) {
            if (!dataSource.items) {
              dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            dataSourceItem = dataSource.items[index2];
          }
          let itemData = dataSourceItem;
          if (itemData instanceof Element) {
            itemData = this._domElementToItemData(itemData);
          }
          const event2 = this.dispatch("itemData", {
            itemData: itemData || {},
            index: index2
          });
          return this.applyFilters("itemData", event2.itemData, index2);
        }
        _getGalleryDOMElements(galleryElement) {
          var _this$options3, _this$options4;
          if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
            return getElementsFromOption2(this.options.children, this.options.childSelector, galleryElement) || [];
          }
          return [galleryElement];
        }
        _domElementToItemData(element) {
          const itemData = {
            element
          };
          const linkEl = element.tagName === "A" ? element : element.querySelector("a");
          if (linkEl) {
            itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
            if (linkEl.dataset.pswpSrcset) {
              itemData.srcset = linkEl.dataset.pswpSrcset;
            }
            itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
            itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
            itemData.w = itemData.width;
            itemData.h = itemData.height;
            if (linkEl.dataset.pswpType) {
              itemData.type = linkEl.dataset.pswpType;
            }
            const thumbnailEl = element.querySelector("img");
            if (thumbnailEl) {
              var _thumbnailEl$getAttri;
              itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
              itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
            }
            if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
              itemData.thumbCropped = true;
            }
          }
          return this.applyFilters("domItemData", itemData, element, linkEl);
        }
        lazyLoadData(itemData, index2) {
          return lazyLoadData2(itemData, this, index2);
        }
      };
      MIN_OPACITY = 3e-3;
      Opener = class {
        constructor(pswp) {
          this.pswp = pswp;
          this.isClosed = true;
          this.isOpen = false;
          this.isClosing = false;
          this.isOpening = false;
          this._duration = void 0;
          this._useAnimation = false;
          this._croppedZoom = false;
          this._animateRootOpacity = false;
          this._animateBgOpacity = false;
          this._placeholder = void 0;
          this._opacityElement = void 0;
          this._cropContainer1 = void 0;
          this._cropContainer2 = void 0;
          this._thumbBounds = void 0;
          this._prepareOpen = this._prepareOpen.bind(this);
          pswp.on("firstZoomPan", this._prepareOpen);
        }
        open() {
          this._prepareOpen();
          this._start();
        }
        close() {
          if (this.isClosed || this.isClosing || this.isOpening) {
            return;
          }
          const slide = this.pswp.currSlide;
          this.isOpen = false;
          this.isOpening = false;
          this.isClosing = true;
          this._duration = this.pswp.options.hideAnimationDuration;
          if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) {
            this._duration = 0;
          }
          this._applyStartProps();
          setTimeout(() => {
            this._start();
          }, this._croppedZoom ? 30 : 0);
        }
        _prepareOpen() {
          this.pswp.off("firstZoomPan", this._prepareOpen);
          if (!this.isOpening) {
            const slide = this.pswp.currSlide;
            this.isOpening = true;
            this.isClosing = false;
            this._duration = this.pswp.options.showAnimationDuration;
            if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) {
              this._duration = 0;
            }
            this._applyStartProps();
          }
        }
        _applyStartProps() {
          const {
            pswp
          } = this;
          const slide = this.pswp.currSlide;
          const {
            options
          } = pswp;
          if (options.showHideAnimationType === "fade") {
            options.showHideOpacity = true;
            this._thumbBounds = void 0;
          } else if (options.showHideAnimationType === "none") {
            options.showHideOpacity = false;
            this._duration = 0;
            this._thumbBounds = void 0;
          } else if (this.isOpening && pswp._initialThumbBounds) {
            this._thumbBounds = pswp._initialThumbBounds;
          } else {
            this._thumbBounds = this.pswp.getThumbBounds();
          }
          this._placeholder = slide === null || slide === void 0 ? void 0 : slide.getPlaceholderElement();
          pswp.animations.stopAll();
          this._useAnimation = Boolean(this._duration && this._duration > 50);
          this._animateZoom = Boolean(this._thumbBounds) && (slide === null || slide === void 0 ? void 0 : slide.content.usePlaceholder()) && (!this.isClosing || !pswp.mainScroll.isShifted());
          if (!this._animateZoom) {
            this._animateRootOpacity = true;
            if (this.isOpening && slide) {
              slide.zoomAndPanToInitial();
              slide.applyCurrentZoomPan();
            }
          } else {
            var _options$showHideOpac;
            this._animateRootOpacity = (_options$showHideOpac = options.showHideOpacity) !== null && _options$showHideOpac !== void 0 ? _options$showHideOpac : false;
          }
          this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
          this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
          if (!this._useAnimation) {
            this._duration = 0;
            this._animateZoom = false;
            this._animateBgOpacity = false;
            this._animateRootOpacity = true;
            if (this.isOpening) {
              if (pswp.element) {
                pswp.element.style.opacity = String(MIN_OPACITY);
              }
              pswp.applyBgOpacity(1);
            }
            return;
          }
          if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
            var _this$pswp$currSlide;
            this._croppedZoom = true;
            this._cropContainer1 = this.pswp.container;
            this._cropContainer2 = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.holderElement;
            if (pswp.container) {
              pswp.container.style.overflow = "hidden";
              pswp.container.style.width = pswp.viewportSize.x + "px";
            }
          } else {
            this._croppedZoom = false;
          }
          if (this.isOpening) {
            if (this._animateRootOpacity) {
              if (pswp.element) {
                pswp.element.style.opacity = String(MIN_OPACITY);
              }
              pswp.applyBgOpacity(1);
            } else {
              if (this._animateBgOpacity && pswp.bg) {
                pswp.bg.style.opacity = String(MIN_OPACITY);
              }
              if (pswp.element) {
                pswp.element.style.opacity = "1";
              }
            }
            if (this._animateZoom) {
              this._setClosedStateZoomPan();
              if (this._placeholder) {
                this._placeholder.style.willChange = "transform";
                this._placeholder.style.opacity = String(MIN_OPACITY);
              }
            }
          } else if (this.isClosing) {
            if (pswp.mainScroll.itemHolders[0]) {
              pswp.mainScroll.itemHolders[0].el.style.display = "none";
            }
            if (pswp.mainScroll.itemHolders[2]) {
              pswp.mainScroll.itemHolders[2].el.style.display = "none";
            }
            if (this._croppedZoom) {
              if (pswp.mainScroll.x !== 0) {
                pswp.mainScroll.resetPosition();
                pswp.mainScroll.resize();
              }
            }
          }
        }
        _start() {
          if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") {
            new Promise((resolve) => {
              let decoded = false;
              let isDelaying = true;
              decodeImage(
                this._placeholder
              ).finally(() => {
                decoded = true;
                if (!isDelaying) {
                  resolve(true);
                }
              });
              setTimeout(() => {
                isDelaying = false;
                if (decoded) {
                  resolve(true);
                }
              }, 50);
              setTimeout(resolve, 250);
            }).finally(() => this._initiate());
          } else {
            this._initiate();
          }
        }
        _initiate() {
          var _this$pswp$element, _this$pswp$element2;
          (_this$pswp$element = this.pswp.element) === null || _this$pswp$element === void 0 || _this$pswp$element.style.setProperty("--pswp-transition-duration", this._duration + "ms");
          this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
          this.pswp.dispatch(
            "initialZoom" + (this.isOpening ? "In" : "Out")
          );
          (_this$pswp$element2 = this.pswp.element) === null || _this$pswp$element2 === void 0 || _this$pswp$element2.classList.toggle("pswp--ui-visible", this.isOpening);
          if (this.isOpening) {
            if (this._placeholder) {
              this._placeholder.style.opacity = "1";
            }
            this._animateToOpenState();
          } else if (this.isClosing) {
            this._animateToClosedState();
          }
          if (!this._useAnimation) {
            this._onAnimationComplete();
          }
        }
        _onAnimationComplete() {
          const {
            pswp
          } = this;
          this.isOpen = this.isOpening;
          this.isClosed = this.isClosing;
          this.isOpening = false;
          this.isClosing = false;
          pswp.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
          pswp.dispatch(
            "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")
          );
          if (this.isClosed) {
            pswp.destroy();
          } else if (this.isOpen) {
            var _pswp$currSlide;
            if (this._animateZoom && pswp.container) {
              pswp.container.style.overflow = "visible";
              pswp.container.style.width = "100%";
            }
            (_pswp$currSlide = pswp.currSlide) === null || _pswp$currSlide === void 0 || _pswp$currSlide.applyCurrentZoomPan();
          }
        }
        _animateToOpenState() {
          const {
            pswp
          } = this;
          if (this._animateZoom) {
            if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
              this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
              this._animateTo(this._cropContainer2, "transform", "none");
            }
            if (pswp.currSlide) {
              pswp.currSlide.zoomAndPanToInitial();
              this._animateTo(pswp.currSlide.container, "transform", pswp.currSlide.getCurrentTransform());
            }
          }
          if (this._animateBgOpacity && pswp.bg) {
            this._animateTo(pswp.bg, "opacity", String(pswp.options.bgOpacity));
          }
          if (this._animateRootOpacity && pswp.element) {
            this._animateTo(pswp.element, "opacity", "1");
          }
        }
        _animateToClosedState() {
          const {
            pswp
          } = this;
          if (this._animateZoom) {
            this._setClosedStateZoomPan(true);
          }
          if (this._animateBgOpacity && pswp.bgOpacity > 0.01 && pswp.bg) {
            this._animateTo(pswp.bg, "opacity", "0");
          }
          if (this._animateRootOpacity && pswp.element) {
            this._animateTo(pswp.element, "opacity", "0");
          }
        }
        _setClosedStateZoomPan(animate) {
          if (!this._thumbBounds)
            return;
          const {
            pswp
          } = this;
          const {
            innerRect
          } = this._thumbBounds;
          const {
            currSlide,
            viewportSize
          } = pswp;
          if (this._croppedZoom && innerRect && this._cropContainer1 && this._cropContainer2) {
            const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
            const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
            const containerTwoPanX = viewportSize.x - innerRect.w;
            const containerTwoPanY = viewportSize.y - innerRect.h;
            if (animate) {
              this._animateTo(this._cropContainer1, "transform", toTransformString2(containerOnePanX, containerOnePanY));
              this._animateTo(this._cropContainer2, "transform", toTransformString2(containerTwoPanX, containerTwoPanY));
            } else {
              setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
              setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
            }
          }
          if (currSlide) {
            equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
            currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
            if (animate) {
              this._animateTo(currSlide.container, "transform", currSlide.getCurrentTransform());
            } else {
              currSlide.applyCurrentZoomPan();
            }
          }
        }
        _animateTo(target, prop, propValue) {
          if (!this._duration) {
            target.style[prop] = propValue;
            return;
          }
          const {
            animations
          } = this.pswp;
          const animProps = {
            duration: this._duration,
            easing: this.pswp.options.easing,
            onComplete: () => {
              if (!animations.activeAnimations.length) {
                this._onAnimationComplete();
              }
            },
            target
          };
          animProps[prop] = propValue;
          animations.startTransition(animProps);
        }
      };
      defaultOptions2 = {
        allowPanToNext: true,
        spacing: 0.1,
        loop: true,
        pinchToClose: true,
        closeOnVerticalDrag: true,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        zoomAnimationDuration: 333,
        escKey: true,
        arrowKeys: true,
        trapFocus: true,
        returnFocus: true,
        maxWidthToAnimate: 4e3,
        clickToCloseNonZoomable: true,
        imageClickAction: "zoom-or-close",
        bgClickAction: "close",
        tapAction: "toggle-controls",
        doubleTapAction: "zoom",
        indexIndicatorSep: " / ",
        preloaderDelay: 2e3,
        bgOpacity: 0.8,
        index: 0,
        errorMsg: "The image cannot be loaded",
        preload: [1, 2],
        easing: "cubic-bezier(.4,0,.22,1)"
      };
      PhotoSwipe = class extends PhotoSwipeBase2 {
        constructor(options) {
          super();
          this.options = this._prepareOptions(options || {});
          this.offset = {
            x: 0,
            y: 0
          };
          this._prevViewportSize = {
            x: 0,
            y: 0
          };
          this.viewportSize = {
            x: 0,
            y: 0
          };
          this.bgOpacity = 1;
          this.currIndex = 0;
          this.potentialIndex = 0;
          this.isOpen = false;
          this.isDestroying = false;
          this.hasMouse = false;
          this._initialItemData = {};
          this._initialThumbBounds = void 0;
          this.topBar = void 0;
          this.element = void 0;
          this.template = void 0;
          this.container = void 0;
          this.scrollWrap = void 0;
          this.currSlide = void 0;
          this.events = new DOMEvents();
          this.animations = new Animations();
          this.mainScroll = new MainScroll(this);
          this.gestures = new Gestures(this);
          this.opener = new Opener(this);
          this.keyboard = new Keyboard2(this);
          this.contentLoader = new ContentLoader(this);
        }
        init() {
          if (this.isOpen || this.isDestroying) {
            return false;
          }
          this.isOpen = true;
          this.dispatch("init");
          this.dispatch("beforeOpen");
          this._createMainStructure();
          let rootClasses = "pswp--open";
          if (this.gestures.supportsTouch) {
            rootClasses += " pswp--touch";
          }
          if (this.options.mainClass) {
            rootClasses += " " + this.options.mainClass;
          }
          if (this.element) {
            this.element.className += " " + rootClasses;
          }
          this.currIndex = this.options.index || 0;
          this.potentialIndex = this.currIndex;
          this.dispatch("firstUpdate");
          this.scrollWheel = new ScrollWheel(this);
          if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
            this.currIndex = 0;
          }
          if (!this.gestures.supportsTouch) {
            this.mouseDetected();
          }
          this.updateSize();
          this.offset.y = window.pageYOffset;
          this._initialItemData = this.getItemData(this.currIndex);
          this.dispatch("gettingData", {
            index: this.currIndex,
            data: this._initialItemData,
            slide: void 0
          });
          this._initialThumbBounds = this.getThumbBounds();
          this.dispatch("initialLayout");
          this.on("openingAnimationEnd", () => {
            const {
              itemHolders
            } = this.mainScroll;
            if (itemHolders[0]) {
              itemHolders[0].el.style.display = "block";
              this.setContent(itemHolders[0], this.currIndex - 1);
            }
            if (itemHolders[2]) {
              itemHolders[2].el.style.display = "block";
              this.setContent(itemHolders[2], this.currIndex + 1);
            }
            this.appendHeavy();
            this.contentLoader.updateLazy();
            this.events.add(window, "resize", this._handlePageResize.bind(this));
            this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
            this.dispatch("bindEvents");
          });
          if (this.mainScroll.itemHolders[1]) {
            this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
          }
          this.dispatch("change");
          this.opener.open();
          this.dispatch("afterInit");
          return true;
        }
        getLoopedIndex(index2) {
          const numSlides = this.getNumItems();
          if (this.options.loop) {
            if (index2 > numSlides - 1) {
              index2 -= numSlides;
            }
            if (index2 < 0) {
              index2 += numSlides;
            }
          }
          return clamp(index2, 0, numSlides - 1);
        }
        appendHeavy() {
          this.mainScroll.itemHolders.forEach((itemHolder) => {
            var _itemHolder$slide;
            (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.appendHeavy();
          });
        }
        goTo(index2) {
          this.mainScroll.moveIndexBy(this.getLoopedIndex(index2) - this.potentialIndex);
        }
        next() {
          this.goTo(this.potentialIndex + 1);
        }
        prev() {
          this.goTo(this.potentialIndex - 1);
        }
        zoomTo(...args) {
          var _this$currSlide;
          (_this$currSlide = this.currSlide) === null || _this$currSlide === void 0 || _this$currSlide.zoomTo(...args);
        }
        toggleZoom() {
          var _this$currSlide2;
          (_this$currSlide2 = this.currSlide) === null || _this$currSlide2 === void 0 || _this$currSlide2.toggleZoom();
        }
        close() {
          if (!this.opener.isOpen || this.isDestroying) {
            return;
          }
          this.isDestroying = true;
          this.dispatch("close");
          this.events.removeAll();
          this.opener.close();
        }
        destroy() {
          var _this$element;
          if (!this.isDestroying) {
            this.options.showHideAnimationType = "none";
            this.close();
            return;
          }
          this.dispatch("destroy");
          this._listeners = {};
          if (this.scrollWrap) {
            this.scrollWrap.ontouchmove = null;
            this.scrollWrap.ontouchend = null;
          }
          (_this$element = this.element) === null || _this$element === void 0 || _this$element.remove();
          this.mainScroll.itemHolders.forEach((itemHolder) => {
            var _itemHolder$slide2;
            (_itemHolder$slide2 = itemHolder.slide) === null || _itemHolder$slide2 === void 0 || _itemHolder$slide2.destroy();
          });
          this.contentLoader.destroy();
          this.events.removeAll();
        }
        refreshSlideContent(slideIndex) {
          this.contentLoader.removeByIndex(slideIndex);
          this.mainScroll.itemHolders.forEach((itemHolder, i2) => {
            var _this$currSlide$index, _this$currSlide3;
            let potentialHolderIndex = ((_this$currSlide$index = (_this$currSlide3 = this.currSlide) === null || _this$currSlide3 === void 0 ? void 0 : _this$currSlide3.index) !== null && _this$currSlide$index !== void 0 ? _this$currSlide$index : 0) - 1 + i2;
            if (this.canLoop()) {
              potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
            }
            if (potentialHolderIndex === slideIndex) {
              this.setContent(itemHolder, slideIndex, true);
              if (i2 === 1) {
                var _itemHolder$slide3;
                this.currSlide = itemHolder.slide;
                (_itemHolder$slide3 = itemHolder.slide) === null || _itemHolder$slide3 === void 0 || _itemHolder$slide3.setIsActive(true);
              }
            }
          });
          this.dispatch("change");
        }
        setContent(holder, index2, force) {
          if (this.canLoop()) {
            index2 = this.getLoopedIndex(index2);
          }
          if (holder.slide) {
            if (holder.slide.index === index2 && !force) {
              return;
            }
            holder.slide.destroy();
            holder.slide = void 0;
          }
          if (!this.canLoop() && (index2 < 0 || index2 >= this.getNumItems())) {
            return;
          }
          const itemData = this.getItemData(index2);
          holder.slide = new Slide(itemData, index2, this);
          if (index2 === this.currIndex) {
            this.currSlide = holder.slide;
          }
          holder.slide.append(holder.el);
        }
        getViewportCenterPoint() {
          return {
            x: this.viewportSize.x / 2,
            y: this.viewportSize.y / 2
          };
        }
        updateSize(force) {
          if (this.isDestroying) {
            return;
          }
          const newViewportSize = getViewportSize2(this.options, this);
          if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
            return;
          }
          equalizePoints(this._prevViewportSize, newViewportSize);
          this.dispatch("beforeResize");
          equalizePoints(this.viewportSize, this._prevViewportSize);
          this._updatePageScrollOffset();
          this.dispatch("viewportSize");
          this.mainScroll.resize(this.opener.isOpen);
          if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) {
            this.mouseDetected();
          }
          this.dispatch("resize");
        }
        applyBgOpacity(opacity) {
          this.bgOpacity = Math.max(opacity, 0);
          if (this.bg) {
            this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
          }
        }
        mouseDetected() {
          if (!this.hasMouse) {
            var _this$element2;
            this.hasMouse = true;
            (_this$element2 = this.element) === null || _this$element2 === void 0 || _this$element2.classList.add("pswp--has_mouse");
          }
        }
        _handlePageResize() {
          this.updateSize();
          if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            setTimeout(() => {
              this.updateSize();
            }, 500);
          }
        }
        _updatePageScrollOffset() {
          this.setScrollOffset(0, window.pageYOffset);
        }
        setScrollOffset(x, y) {
          this.offset.x = x;
          this.offset.y = y;
          this.dispatch("updateScrollOffset");
        }
        _createMainStructure() {
          this.element = createElement2("pswp", "div");
          this.element.setAttribute("tabindex", "-1");
          this.element.setAttribute("role", "dialog");
          this.template = this.element;
          this.bg = createElement2("pswp__bg", "div", this.element);
          this.scrollWrap = createElement2("pswp__scroll-wrap", "section", this.element);
          this.container = createElement2("pswp__container", "div", this.scrollWrap);
          this.scrollWrap.setAttribute("aria-roledescription", "carousel");
          this.container.setAttribute("aria-live", "off");
          this.container.setAttribute("id", "pswp__items");
          this.mainScroll.appendHolders();
          this.ui = new UI(this);
          this.ui.init();
          (this.options.appendToEl || document.body).appendChild(this.element);
        }
        getThumbBounds() {
          return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
        }
        canLoop() {
          return this.options.loop && this.getNumItems() > 2;
        }
        _prepareOptions(options) {
          if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
            options.showHideAnimationType = "none";
            options.zoomAnimationDuration = 0;
          }
          return __spreadValues(__spreadValues({}, defaultOptions2), options);
        }
      };
    }
  });

  // src/js/components/nav.js
  (function($2) {
    $2(".menu-has-child > a").on("click", function() {
      var $e = $2(this);
      var $parent = $e.parent();
      if ($parent.hasClass("active")) {
        $parent.removeClass("active");
      } else {
        $parent.addClass("active");
      }
    });
    $2(".js-menu-toggle").on("click", function() {
      var $e = $2(this);
      var $body = $2(".c-header");
      if ($body.hasClass("mobile-active")) {
        $body.removeClass("mobile-active");
      } else {
        $body.addClass("mobile-active");
      }
      return false;
    });
  })(jQuery);

  // node_modules/ssr-window/ssr-window.esm.js
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/dom7/dom7.esm.js
  function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
      get() {
        return proto;
      },
      set(value) {
        proto.__proto__ = value;
      }
    });
  }
  var Dom7 = class extends Array {
    constructor(items) {
      if (typeof items === "number") {
        super(items);
      } else {
        super(...items || []);
        makeReactive(this);
      }
    }
  };
  function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        res.push(...arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function arrayUnique(arr) {
    const uniqueArray = [];
    for (let i2 = 0; i2 < arr.length; i2 += 1) {
      if (uniqueArray.indexOf(arr[i2]) === -1)
        uniqueArray.push(arr[i2]);
    }
    return uniqueArray;
  }
  function qsa(selector, context) {
    if (typeof selector !== "string") {
      return [selector];
    }
    const a2 = [];
    const res = context.querySelectorAll(selector);
    for (let i2 = 0; i2 < res.length; i2 += 1) {
      a2.push(res[i2]);
    }
    return a2;
  }
  function $(selector, context) {
    const window2 = getWindow();
    const document2 = getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) {
      return selector;
    }
    if (!selector) {
      return new Dom7(arr);
    }
    if (typeof selector === "string") {
      const html2 = selector.trim();
      if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
        let toCreate = "div";
        if (html2.indexOf("<li") === 0)
          toCreate = "ul";
        if (html2.indexOf("<tr") === 0)
          toCreate = "tbody";
        if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
          toCreate = "tr";
        if (html2.indexOf("<tbody") === 0)
          toCreate = "table";
        if (html2.indexOf("<option") === 0)
          toCreate = "select";
        const tempParent = document2.createElement(toCreate);
        tempParent.innerHTML = html2;
        for (let i2 = 0; i2 < tempParent.childNodes.length; i2 += 1) {
          arr.push(tempParent.childNodes[i2]);
        }
      } else {
        arr = qsa(selector.trim(), context || document2);
      }
    } else if (selector.nodeType || selector === window2 || selector === document2) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7)
        return selector;
      arr = selector;
    }
    return new Dom7(arrayUnique(arr));
  }
  $.fn = Dom7.prototype;
  function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    this.forEach((el) => {
      el.classList.add(...classNames);
    });
    return this;
  }
  function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    this.forEach((el) => {
      el.classList.remove(...classNames);
    });
    return this;
  }
  function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    this.forEach((el) => {
      classNames.forEach((className) => {
        el.classList.toggle(className);
      });
    });
  }
  function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    return arrayFilter(this, (el) => {
      return classNames.filter((className) => el.classList.contains(className)).length > 0;
    }).length > 0;
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
      if (this[0])
        return this[0].getAttribute(attrs);
      return void 0;
    }
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      if (arguments.length === 2) {
        this[i2].setAttribute(attrs, value);
      } else {
        for (const attrName in attrs) {
          this[i2][attrName] = attrs[attrName];
          this[i2].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr2) {
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      this[i2].removeAttribute(attr2);
    }
    return this;
  }
  function transform(transform2) {
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      this[i2].style.transform = transform2;
    }
    return this;
  }
  function transition(duration) {
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      this[i2].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
    }
    return this;
  }
  function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
      [eventType, listener, capture] = args;
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    function handleLiveEvent(e2) {
      const target = e2.target;
      if (!target)
        return;
      const eventData = e2.target.dom7EventData || [];
      if (eventData.indexOf(e2) < 0) {
        eventData.unshift(e2);
      }
      if ($(target).is(targetSelector))
        listener.apply(target, eventData);
      else {
        const parents2 = $(target).parents();
        for (let k = 0; k < parents2.length; k += 1) {
          if ($(parents2[k]).is(targetSelector))
            listener.apply(parents2[k], eventData);
        }
      }
    }
    function handleEvent(e2) {
      const eventData = e2 && e2.target ? e2.target.dom7EventData || [] : [];
      if (eventData.indexOf(e2) < 0) {
        eventData.unshift(e2);
      }
      listener.apply(this, eventData);
    }
    const events2 = eventType.split(" ");
    let j;
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      const el = this[i2];
      if (!targetSelector) {
        for (j = 0; j < events2.length; j += 1) {
          const event2 = events2[j];
          if (!el.dom7Listeners)
            el.dom7Listeners = {};
          if (!el.dom7Listeners[event2])
            el.dom7Listeners[event2] = [];
          el.dom7Listeners[event2].push({
            listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event2, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events2.length; j += 1) {
          const event2 = events2[j];
          if (!el.dom7LiveListeners)
            el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[event2])
            el.dom7LiveListeners[event2] = [];
          el.dom7LiveListeners[event2].push({
            listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(event2, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
      [eventType, listener, capture] = args;
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    const events2 = eventType.split(" ");
    for (let i2 = 0; i2 < events2.length; i2 += 1) {
      const event2 = events2[i2];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let handlers;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event2];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event2];
        }
        if (handlers && handlers.length) {
          for (let k = handlers.length - 1; k >= 0; k -= 1) {
            const handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event2, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event2, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event2, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger(...args) {
    const window2 = getWindow();
    const events2 = args[0].split(" ");
    const eventData = args[1];
    for (let i2 = 0; i2 < events2.length; i2 += 1) {
      const event2 = events2[i2];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        if (window2.CustomEvent) {
          const evt = new window2.CustomEvent(event2, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e2) {
      if (e2.target !== this)
        return;
      callback.call(this, e2);
      dom.off("transitionend", fireCallBack);
    }
    if (callback) {
      dom.on("transitionend", fireCallBack);
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles2 = this.styles();
        return this[0].offsetWidth + parseFloat(styles2.getPropertyValue("margin-right")) + parseFloat(styles2.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles2 = this.styles();
        return this[0].offsetHeight + parseFloat(styles2.getPropertyValue("margin-top")) + parseFloat(styles2.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      const window2 = getWindow();
      const document2 = getDocument();
      const el = this[0];
      const box = el.getBoundingClientRect();
      const body = document2.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
      const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }
    return null;
  }
  function styles() {
    const window2 = getWindow();
    if (this[0])
      return window2.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    const window2 = getWindow();
    let i2;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0])
          return window2.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        for (i2 = 0; i2 < this.length; i2 += 1) {
          for (const prop in props) {
            this[i2].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i2 = 0; i2 < this.length; i2 += 1) {
        this[i2].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback)
      return this;
    this.forEach((el, index2) => {
      callback.apply(el, [el, index2]);
    });
    return this;
  }
  function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
  }
  function html(html2) {
    if (typeof html2 === "undefined") {
      return this[0] ? this[0].innerHTML : null;
    }
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      this[i2].innerHTML = html2;
    }
    return this;
  }
  function text(text2) {
    if (typeof text2 === "undefined") {
      return this[0] ? this[0].textContent.trim() : null;
    }
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      this[i2].textContent = text2;
    }
    return this;
  }
  function is(selector) {
    const window2 = getWindow();
    const document2 = getDocument();
    const el = this[0];
    let compareWith;
    let i2;
    if (!el || typeof selector === "undefined")
      return false;
    if (typeof selector === "string") {
      if (el.matches)
        return el.matches(selector);
      if (el.webkitMatchesSelector)
        return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector)
        return el.msMatchesSelector(selector);
      compareWith = $(selector);
      for (i2 = 0; i2 < compareWith.length; i2 += 1) {
        if (compareWith[i2] === el)
          return true;
      }
      return false;
    }
    if (selector === document2) {
      return el === document2;
    }
    if (selector === window2) {
      return el === window2;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i2 = 0; i2 < compareWith.length; i2 += 1) {
        if (compareWith[i2] === el)
          return true;
      }
      return false;
    }
    return false;
  }
  function index() {
    let child = this[0];
    let i2;
    if (child) {
      i2 = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i2 += 1;
      }
      return i2;
    }
    return void 0;
  }
  function eq(index2) {
    if (typeof index2 === "undefined")
      return this;
    const length = this.length;
    if (index2 > length - 1) {
      return $([]);
    }
    if (index2 < 0) {
      const returnIndex = length + index2;
      if (returnIndex < 0)
        return $([]);
      return $([this[returnIndex]]);
    }
    return $([this[index2]]);
  }
  function append(...els) {
    let newChild;
    const document2 = getDocument();
    for (let k = 0; k < els.length; k += 1) {
      newChild = els[k];
      for (let i2 = 0; i2 < this.length; i2 += 1) {
        if (typeof newChild === "string") {
          const tempDiv = document2.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i2].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (let j = 0; j < newChild.length; j += 1) {
            this[i2].appendChild(newChild[j]);
          }
        } else {
          this[i2].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    const document2 = getDocument();
    let i2;
    let j;
    for (i2 = 0; i2 < this.length; i2 += 1) {
      if (typeof newChild === "string") {
        const tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i2].insertBefore(tempDiv.childNodes[j], this[i2].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i2].insertBefore(newChild[j], this[i2].childNodes[0]);
        }
      } else {
        this[i2].insertBefore(newChild, this[i2].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }
        return $([]);
      }
      if (this[0].nextElementSibling)
        return $([this[0].nextElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el)
      return $([]);
    while (el.nextElementSibling) {
      const next2 = el.nextElementSibling;
      if (selector) {
        if ($(next2).is(selector))
          nextEls.push(next2);
      } else
        nextEls.push(next2);
      el = next2;
    }
    return $(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      const el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }
        return $([]);
      }
      if (el.previousElementSibling)
        return $([el.previousElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el)
      return $([]);
    while (el.previousElementSibling) {
      const prev2 = el.previousElementSibling;
      if (selector) {
        if ($(prev2).is(selector))
          prevEls.push(prev2);
      } else
        prevEls.push(prev2);
      el = prev2;
    }
    return $(prevEls);
  }
  function parent(selector) {
    const parents2 = [];
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      if (this[i2].parentNode !== null) {
        if (selector) {
          if ($(this[i2].parentNode).is(selector))
            parents2.push(this[i2].parentNode);
        } else {
          parents2.push(this[i2].parentNode);
        }
      }
    }
    return $(parents2);
  }
  function parents(selector) {
    const parents2 = [];
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      let parent2 = this[i2].parentNode;
      while (parent2) {
        if (selector) {
          if ($(parent2).is(selector))
            parents2.push(parent2);
        } else {
          parents2.push(parent2);
        }
        parent2 = parent2.parentNode;
      }
    }
    return $(parents2);
  }
  function closest(selector) {
    let closest2 = this;
    if (typeof selector === "undefined") {
      return $([]);
    }
    if (!closest2.is(selector)) {
      closest2 = closest2.parents(selector).eq(0);
    }
    return closest2;
  }
  function find(selector) {
    const foundElements = [];
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      const found = this[i2].querySelectorAll(selector);
      for (let j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return $(foundElements);
  }
  function children(selector) {
    const children2 = [];
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      const childNodes = this[i2].children;
      for (let j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children2.push(childNodes[j]);
        }
      }
    }
    return $(children2);
  }
  function remove() {
    for (let i2 = 0; i2 < this.length; i2 += 1) {
      if (this[i2].parentNode)
        this[i2].parentNode.removeChild(this[i2]);
    }
    return this;
  }
  var noTrigger = "resize scroll".split(" ");
  function shortcut(name) {
    function eventHandler(...args) {
      if (typeof args[0] === "undefined") {
        for (let i2 = 0; i2 < this.length; i2 += 1) {
          if (noTrigger.indexOf(name) < 0) {
            if (name in this[i2])
              this[i2][name]();
            else {
              $(this[i2]).trigger(name);
            }
          }
        }
        return this;
      }
      return this.on(name, ...args);
    }
    return eventHandler;
  }
  var click = shortcut("click");
  var blur = shortcut("blur");
  var focus = shortcut("focus");
  var focusin = shortcut("focusin");
  var focusout = shortcut("focusout");
  var keyup = shortcut("keyup");
  var keydown = shortcut("keydown");
  var keypress = shortcut("keypress");
  var submit = shortcut("submit");
  var change = shortcut("change");
  var mousedown = shortcut("mousedown");
  var mousemove = shortcut("mousemove");
  var mouseup = shortcut("mouseup");
  var mouseenter = shortcut("mouseenter");
  var mouseleave = shortcut("mouseleave");
  var mouseout = shortcut("mouseout");
  var mouseover = shortcut("mouseover");
  var touchstart = shortcut("touchstart");
  var touchend = shortcut("touchend");
  var touchmove = shortcut("touchmove");
  var resize = shortcut("resize");
  var scroll = shortcut("scroll");

  // node_modules/swiper/shared/dom.js
  var Methods = {
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    attr,
    removeAttr,
    transform,
    transition,
    on,
    off,
    trigger,
    transitionEnd,
    outerWidth,
    outerHeight,
    styles,
    offset,
    css,
    each,
    html,
    text,
    is,
    index,
    eq,
    append,
    prepend,
    next,
    nextAll,
    prev,
    prevAll,
    parent,
    parents,
    closest,
    find,
    children,
    filter,
    remove
  };
  Object.keys(Methods).forEach((methodName) => {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true
    });
  });
  var dom_default = $;

  // node_modules/swiper/shared/utils.js
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e2) {
      }
      try {
        delete object[key];
      } catch (e2) {
      }
    });
  }
  function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis = "x") {
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el, null);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a2) => a2.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o2) {
    return typeof o2 === "object" && o2 !== null && o2.constructor && Object.prototype.toString.call(o2).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2(...args) {
    const to = Object(args[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i2 = 1; i2 < args.length; i2 += 1) {
      const nextSource = args[i2];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll({
    swiper,
    targetPosition,
    side
  }) {
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }

  // node_modules/swiper/shared/get-support.js
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
      passiveListener: function checkPassiveListener() {
        let supportsPassive2 = false;
        try {
          const opts = Object.defineProperty({}, "passive", {
            get() {
              supportsPassive2 = true;
            }
          });
          window2.addEventListener("testPassiveListener", null, opts);
        } catch (e2) {
        }
        return supportsPassive2;
      }(),
      gestures: function checkGestures() {
        return "ongesturestart" in window2;
      }()
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }

  // node_modules/swiper/shared/get-device.js
  var deviceCached;
  function calcDevice({
    userAgent
  } = {}) {
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides = {}) {
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }

  // node_modules/swiper/shared/get-browser.js
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    function isSafari3() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    return {
      isSafari: isSafari3(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }

  // node_modules/swiper/core/modules/resize/resize.js
  function Resize({
    swiper,
    on: on2,
    emit
  }) {
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach(({
            contentBoxSize,
            contentRect,
            target
          }) => {
            if (target && target !== swiper.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on2("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on2("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }

  // node_modules/swiper/core/modules/observer/observer.js
  function Observer({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const observers = [];
    const window2 = getWindow();
    const attach = (target, options = {}) => {
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = swiper.$el.parents();
        for (let i2 = 0; i2 < containerParents.length; i2 += 1) {
          attach(containerParents[i2]);
        }
      }
      attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on2("init", init);
    on2("destroy", destroy);
  }

  // node_modules/swiper/core/events-emitter.js
  var events_emitter_default = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2])
          self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      function onceHandler(...args) {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsAnyListeners)
        return self2;
      const index2 = self2.eventsAnyListeners.indexOf(handler);
      if (index2 >= 0) {
        self2.eventsAnyListeners.splice(index2, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index2) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index2, 1);
            }
          });
        }
      });
      return self2;
    },
    emit(...args) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      let events2;
      let data;
      let context;
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };

  // node_modules/swiper/core/update/updateSize.js
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  // node_modules/swiper/core/update/updateSlides.js
  function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      $wrapperEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index2 = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl)
      slides.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      });
    else
      slides.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slidesLength);
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i2 = 0; i2 < slidesLength; i2 += 1) {
      slideSize = 0;
      const slide = slides.eq(i2);
      if (gridEnabled) {
        swiper.grid.updateSlide(i2, slide, slidesLength, getDirectionLabel);
      }
      if (slide.css("display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i2].style[getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide[0]);
        const currentTransform = slide[0].style.transform;
        const currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide[0];
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i2]) {
          slides[i2].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i2]) {
        slides[i2].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i2 !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i2 === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index2 % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index2 += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
      });
    }
    if (params.setWrapperSize) {
      $wrapperEl.css({
        [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
      });
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i2 = 0; i2 < snapGrid.length; i2 += 1) {
        let slidesGridItem = snapGrid[i2];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (params.spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).css({
        [key]: `${spaceBetween}px`
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap < 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.$el.addClass(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.$el.removeClass(backFaceHiddenClass);
      }
    }
  }

  // node_modules/swiper/core/update/updateAutoHeight.js
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i2;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index2) => {
      if (isVirtual) {
        return swiper.slides.filter((el) => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index2)[0];
      }
      return swiper.slides.eq(index2)[0];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || dom_default([])).each((slide) => {
          activeSlides.push(slide);
        });
      } else {
        for (i2 = 0; i2 < Math.ceil(swiper.params.slidesPerView); i2 += 1) {
          const index2 = swiper.activeIndex + i2;
          if (index2 > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index2));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i2 = 0; i2 < activeSlides.length; i2 += 1) {
      if (typeof activeSlides[i2] !== "undefined") {
        const height = activeSlides[i2].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.$wrapperEl.css("height", `${newHeight}px`);
  }

  // node_modules/swiper/core/update/updateSlidesOffset.js
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      slides[i2].swiperSlideOffset = swiper.isHorizontal() ? slides[i2].offsetLeft : slides[i2].offsetTop;
    }
  }

  // node_modules/swiper/core/update/updateSlidesProgress.js
  function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl)
      offsetCenter = translate;
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slide = slides[i2];
      let slideOffset = slide.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i2];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i2);
        slides.eq(i2).addClass(params.slideVisibleClass);
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
      slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = dom_default(swiper.visibleSlides);
  }

  // node_modules/swiper/core/update/updateProgress.js
  function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Object.assign(swiper, {
      progress,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }

  // node_modules/swiper/core/update/updateSlidesClasses.js
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      $wrapperEl,
      activeIndex,
      realIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
      }
    }
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }

  // node_modules/swiper/core/update/updateActiveIndex.js
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      slidesGrid,
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === "undefined") {
      for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
        if (typeof slidesGrid[i2 + 1] !== "undefined") {
          if (translate >= slidesGrid[i2] && translate < slidesGrid[i2 + 1] - (slidesGrid[i2 + 1] - slidesGrid[i2]) / 2) {
            activeIndex = i2;
          } else if (translate >= slidesGrid[i2] && translate < slidesGrid[i2 + 1]) {
            activeIndex = i2 + 1;
          }
        } else if (translate >= slidesGrid[i2]) {
          activeIndex = i2;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
    Object.assign(swiper, {
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }

  // node_modules/swiper/core/update/updateClickedSlide.js
  function updateClickedSlide(e2) {
    const swiper = this;
    const params = swiper.params;
    const slide = dom_default(e2).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
      for (let i2 = 0; i2 < swiper.slides.length; i2 += 1) {
        if (swiper.slides[i2] === slide) {
          slideFound = true;
          slideIndex = i2;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(dom_default(slide).attr("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  // node_modules/swiper/core/update/index.js
  var update_default = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };

  // node_modules/swiper/core/translate/getTranslate.js
  function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate,
      $wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    let currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  // node_modules/swiper/core/translate/setTranslate.js
  function setTranslate(translate, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      $wrapperEl,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }

  // node_modules/swiper/core/translate/minTranslate.js
  function minTranslate() {
    return -this.snapGrid[0];
  }

  // node_modules/swiper/core/translate/maxTranslate.js
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  // node_modules/swiper/core/translate/translateTo.js
  function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd3(e2) {
            if (!swiper || swiper.destroyed)
              return;
            if (e2.target !== this)
              return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }

  // node_modules/swiper/core/translate/index.js
  var translate_default = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };

  // node_modules/swiper/core/transition/setTransition.js
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit("setTransition", duration, byController);
  }

  // node_modules/swiper/core/transition/transitionEmit.js
  function transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step
  }) {
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }

  // node_modules/swiper/core/transition/transitionStart.js
  function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }

  // node_modules/swiper/core/transition/transitionEnd.js
  function transitionEnd2(runCallbacks = true, direction) {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }

  // node_modules/swiper/core/transition/index.js
  var transition_default = {
    setTransition,
    transitionStart,
    transitionEnd: transitionEnd2
  };

  // node_modules/swiper/core/slide/slideTo.js
  function slideTo(index2 = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index2 !== "number" && typeof index2 !== "string") {
      throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index2}] given.`);
    }
    if (typeof index2 === "string") {
      const indexAsNumber = parseInt(index2, 10);
      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
      }
      index2 = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index2;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i2] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i2 + 1] * 100);
        if (typeof slidesGrid[i2 + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i2;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i2 + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i2;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex)
          return false;
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t2 = rtl ? translate : -translate;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._swiperImmediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t2,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t2,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd3(e2) {
          if (!swiper || swiper.destroyed)
            return;
          if (e2.target !== this)
            return;
          swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }

  // node_modules/swiper/core/slide/slideToLoop.js
  function slideToLoop(index2 = 0, speed = this.params.speed, runCallbacks = true, internal) {
    if (typeof index2 === "string") {
      const indexAsNumber = parseInt(index2, 10);
      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
      }
      index2 = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index2;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideNext.js
  function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      animating,
      enabled,
      params
    } = swiper;
    if (!enabled)
      return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slidePrev.js
  function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      params,
      animating,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return swiper;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideReset.js
  function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideToClosest.js
  function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index2 = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
    const snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index2 += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index2 -= swiper.params.slidesPerGroup;
      }
    }
    index2 = Math.max(index2, 0);
    index2 = Math.min(index2, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index2, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideToClickedSlide.js
  function slideToClickedSlide() {
    const swiper = this;
    const {
      params,
      $wrapperEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(dom_default(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  // node_modules/swiper/core/slide/index.js
  var slide_default = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };

  // node_modules/swiper/core/loop/loopCreate.js
  function loopCreate() {
    const swiper = this;
    const document2 = getDocument();
    const {
      params,
      $wrapperEl
    } = swiper;
    const $selector = $wrapperEl.children().length > 0 ? dom_default($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
      const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (let i2 = 0; i2 < blankSlidesNum; i2 += 1) {
          const blankNode = dom_default(document2.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
          $selector.append(blankNode);
        }
        slides = $selector.children(`.${params.slideClass}`);
      }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides)
      params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
      swiper.loopedSlides = slides.length;
    }
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index2) => {
      const slide = dom_default(el);
      slide.attr("data-swiper-slide-index", index2);
    });
    for (let i2 = 0; i2 < swiper.loopedSlides; i2 += 1) {
      const index2 = i2 - Math.floor(i2 / slides.length) * slides.length;
      appendSlides.push(slides.eq(index2)[0]);
      prependSlides.unshift(slides.eq(slides.length - index2 - 1)[0]);
    }
    for (let i2 = 0; i2 < appendSlides.length; i2 += 1) {
      $selector.append(dom_default(appendSlides[i2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (let i2 = prependSlides.length - 1; i2 >= 0; i2 -= 1) {
      $selector.prepend(dom_default(prependSlides[i2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  // node_modules/swiper/core/loop/loopFix.js
  function loopFix() {
    const swiper = this;
    swiper.emit("beforeLoopFix");
    const {
      activeIndex,
      slides,
      loopedSlides,
      allowSlidePrev,
      allowSlideNext,
      snapGrid,
      rtlTranslate: rtl
    } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
  }

  // node_modules/swiper/core/loop/loopDestroy.js
  function loopDestroy() {
    const swiper = this;
    const {
      $wrapperEl,
      params,
      slides
    } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr("data-swiper-slide-index");
  }

  // node_modules/swiper/core/loop/index.js
  var loop_default = {
    loopCreate,
    loopFix,
    loopDestroy
  };

  // node_modules/swiper/core/grab-cursor/setGrabCursor.js
  function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
  }

  // node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  }

  // node_modules/swiper/core/grab-cursor/index.js
  var grab_cursor_default = {
    setGrabCursor,
    unsetGrabCursor
  };

  // node_modules/swiper/core/events/onTouchStart.js
  function closestElement(selector, base = this) {
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    const window2 = getWindow();
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let e2 = event2;
    if (e2.originalEvent)
      e2 = e2.originalEvent;
    let $targetEl = dom_default(e2.target);
    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length)
        return;
    }
    data.isTouchEvent = e2.type === "touchstart";
    if (!data.isTouchEvent && "which" in e2 && e2.which === 3)
      return;
    if (!data.isTouchEvent && "button" in e2 && e2.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = event2.composedPath ? event2.composedPath() : event2.path;
    if (swipingClassHasValue && e2.target && e2.target.shadowRoot && eventPath) {
      $targetEl = dom_default(eventPath[0]);
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e2.target && e2.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0])
        return;
    }
    touches.currentX = e2.type === "touchstart" ? e2.targetTouches[0].pageX : e2.pageX;
    touches.currentY = e2.type === "touchstart" ? e2.targetTouches[0].pageY : e2.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
      } else {
        return;
      }
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    if (e2.type !== "touchstart") {
      let preventDefault = true;
      if ($targetEl.is(data.focusableElements)) {
        preventDefault = false;
        if ($targetEl[0].nodeName === "SELECT") {
          data.isTouched = false;
        }
      }
      if (document2.activeElement && dom_default(document2.activeElement).is(data.focusableElements) && document2.activeElement !== $targetEl[0]) {
        document2.activeElement.blur();
      }
      const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e2.preventDefault();
      }
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e2);
  }

  // node_modules/swiper/core/events/onTouchMove.js
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    let e2 = event2;
    if (e2.originalEvent)
      e2 = e2.originalEvent;
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e2);
      }
      return;
    }
    if (data.isTouchEvent && e2.type !== "touchmove")
      return;
    const targetTouch = e2.type === "touchmove" && e2.targetTouches && (e2.targetTouches[0] || e2.changedTouches[0]);
    const pageX = e2.type === "touchmove" ? targetTouch.pageX : e2.pageX;
    const pageY = e2.type === "touchmove" ? targetTouch.pageY : e2.pageY;
    if (e2.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!dom_default(e2.target).is(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (data.isTouchEvent && document2.activeElement) {
      if (e2.target === document2.activeElement && dom_default(e2.target).is(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e2);
    }
    if (e2.targetTouches && e2.targetTouches.length > 1)
      return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e2);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e2.cancelable) {
      e2.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e2.stopPropagation();
    }
    if (!data.isMoved) {
      if (params.loop && !params.cssMode) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e2);
    }
    swiper.emit("sliderMove", e2);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl)
      diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate = swiper.minTranslate() - 1 + __pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate = swiper.maxTranslate() + 1 - __pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
    }
    if (disableParentSwiper) {
      e2.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }

  // node_modules/swiper/core/events/onTouchEnd.js
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    let e2 = event2;
    if (e2.originalEvent)
      e2 = e2.originalEvent;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e2);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e2.path || e2.composedPath && e2.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e2.target);
      swiper.emit("tap click", e2);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e2);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (swiper.params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i2 = 0; i2 < slidesGrid.length; i2 += i2 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i2 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i2 + increment2] !== "undefined") {
        if (currentPos >= slidesGrid[i2] && currentPos < slidesGrid[i2 + increment2]) {
          stopIndex = i2;
          groupSize = slidesGrid[i2 + increment2] - slidesGrid[i2];
        }
      } else if (currentPos >= slidesGrid[i2]) {
        stopIndex = i2;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e2.target === swiper.navigation.nextEl || e2.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e2.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  // node_modules/swiper/core/events/onResize.js
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  // node_modules/swiper/core/events/onClick.js
  function onClick(e2) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e2.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e2.stopPropagation();
        e2.stopImmediatePropagation();
      }
    }
  }

  // node_modules/swiper/core/events/onScroll.js
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }

  // node_modules/swiper/core/events/index.js
  var dummyEventAttached = false;
  function dummyEventListener() {
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      touchEvents,
      el,
      wrapperEl,
      device,
      support: support2
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!support2.touch) {
      el[domMethod](touchEvents.start, swiper.onTouchStart, false);
      document2[domMethod](touchEvents.move, swiper.onTouchMove, capture);
      document2[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
      const passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
      el[domMethod](touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
        passive: false,
        capture
      } : capture);
      el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
  };
  function attachEvents() {
    const swiper = this;
    const document2 = getDocument();
    const {
      params,
      support: support2
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    if (support2.touch && !dummyEventAttached) {
      document2.addEventListener("touchstart", dummyEventListener);
      dummyEventAttached = true;
    }
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events_default = {
    attachEvents,
    detachEvents
  };

  // node_modules/swiper/core/breakpoints/setBreakpoint.js
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      activeIndex,
      initialized,
      loopedSlides = 0,
      params,
      $el
    } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0)
      return;
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        $el.addClass(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit("breakpoint", breakpointParams);
  }

  // node_modules/swiper/core/breakpoints/getBreakpoint.js
  function getBreakpoint(breakpoints, base = "window", containerEl) {
    if (!breakpoints || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a2, b) => parseInt(a2.value, 10) - parseInt(b.value, 10));
    for (let i2 = 0; i2 < points.length; i2 += 1) {
      const {
        point,
        value
      } = points[i2];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }

  // node_modules/swiper/core/breakpoints/index.js
  var breakpoints_default = {
    setBreakpoint,
    getBreakpoint
  };

  // node_modules/swiper/core/classes/addClasses.js
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      $el,
      device,
      support: support2
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "pointer-events": !support2.touch
    }, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([...classNames].join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/core/classes/removeClasses.js
  function removeClasses() {
    const swiper = this;
    const {
      $el,
      classNames
    } = swiper;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/core/classes/index.js
  var classes_default = {
    addClasses,
    removeClasses
  };

  // node_modules/swiper/core/images/loadImage.js
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window2 = getWindow();
    let image;
    function onReady() {
      if (callback)
        callback();
    }
    const isPicture = dom_default(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window2.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }

  // node_modules/swiper/core/images/preloadImages.js
  function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
        return;
      if (swiper.imagesLoaded !== void 0)
        swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady)
          swiper.update();
        swiper.emit("imagesReady");
      }
    }
    for (let i2 = 0; i2 < swiper.imagesToLoad.length; i2 += 1) {
      const imageEl = swiper.imagesToLoad[i2];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
    }
  }

  // node_modules/swiper/core/images/index.js
  var images_default = {
    loadImage,
    preloadImages
  };

  // node_modules/swiper/core/check-overflow/index.js
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var check_overflow_default = {
    checkOverflow
  };

  // node_modules/swiper/core/defaults.js
  var defaults_default = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: false,
    userAgent: null,
    url: null,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: true,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: true,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    rewind: false,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: true,
    _emitClasses: false
  };

  // node_modules/swiper/core/moduleExtendParams.js
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
        params[moduleParamName] = {
          auto: true
        };
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }

  // node_modules/swiper/core/core.js
  var prototypes = {
    eventsEmitter: events_emitter_default,
    update: update_default,
    translate: translate_default,
    transition: transition_default,
    slide: slide_default,
    loop: loop_default,
    grabCursor: grab_cursor_default,
    events: events_default,
    breakpoints: breakpoints_default,
    checkOverflow: check_overflow_default,
    classes: classes_default,
    images: images_default
  };
  var extendedDefaults = {};
  var Swiper = class {
    constructor(...args) {
      let el;
      let params;
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      if (params.el && dom_default(params.el).length > 1) {
        const swipers2 = [];
        dom_default(params.el).each((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers2.push(new Swiper(newParams));
        });
        return swipers2;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults_default, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      swiper.$ = dom_default;
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        classNames: [],
        slides: dom_default(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEvents: function touchEvents() {
          const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          const desktop = ["pointerdown", "pointermove", "pointerup"];
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: swiper.params.focusableElements,
          lastClickTime: now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.each((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex].swiperSlideSize;
        let breakLoop;
        for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
          if (slides[i2] && !breakLoop) {
            slideSize += slides[i2].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2] && !breakLoop) {
            slideSize += slides[i2].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
            const slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
        setTranslate2();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(el) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      const $el = dom_default(el || swiper.params.el);
      el = $el[0];
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = dom_default(el.shadowRoot.querySelector(getWrapperSelector()));
          res.children = (options) => $el.children(options);
          return res;
        }
        if (!$el.children) {
          return dom_default($el).children(getWrapperSelector());
        }
        return $el.children(getWrapperSelector());
      };
      let $wrapperEl = getWrapper();
      if ($wrapperEl.length === 0 && swiper.params.createElements) {
        const document2 = getDocument();
        const wrapper = document2.createElement("div");
        $wrapperEl = dom_default(wrapper);
        wrapper.className = swiper.params.wrapperClass;
        $el.append(wrapper);
        $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
          $wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        $el,
        el,
        $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
      const swiper = this;
      const {
        params,
        $el,
        $wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults_default;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__)
        Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);
  var core_default = Swiper;

  // node_modules/swiper/shared/create-element-if-not-defined.js
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document2 = getDocument();
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = swiper.$el.children(`.${checkProps[key]}`)[0];
          if (!element) {
            element = document2.createElement("div");
            element.className = checkProps[key];
            swiper.$el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation/navigation.js
  function Navigation({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    };
    function getEl(el) {
      let $el;
      if (el) {
        $el = dom_default(el);
        if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) {
          $el = swiper.$el.find(el);
        }
      }
      return $el;
    }
    function toggleEl($el, disabled) {
      const params = swiper.params.navigation;
      if ($el && $el.length > 0) {
        $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
        if ($el[0] && $el[0].tagName === "BUTTON")
          $el[0].disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
      }
    }
    function update() {
      if (swiper.params.loop)
        return;
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e2) {
      e2.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e2) {
      e2.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl))
        return;
      const $nextEl = getEl(params.nextEl);
      const $prevEl = getEl(params.prevEl);
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", onPrevClick);
      }
      Object.assign(swiper.navigation, {
        $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
      if (!swiper.enabled) {
        if ($nextEl)
          $nextEl.addClass(params.lockClass);
        if ($prevEl)
          $prevEl.addClass(params.lockClass);
      }
    }
    function destroy() {
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
    on2("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update();
      }
    });
    on2("toEdge fromEdge lock unlock", () => {
      update();
    });
    on2("destroy", () => {
      destroy();
    });
    on2("enable disable", () => {
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      if ($nextEl) {
        $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
      }
      if ($prevEl) {
        $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
      }
    });
    on2("click", (_s, e2) => {
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      const targetEl = e2.target;
      if (swiper.params.navigation.hideOnClick && !dom_default(targetEl).is($prevEl) && !dom_default(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
          return;
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
      init();
      update();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update,
      init,
      destroy
    });
  }

  // node_modules/swiper/shared/classes-to-selector.js
  function classesToSelector(classes = "") {
    return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/swiper/modules/pagination/pagination.js
  function Pagination({
    swiper,
    extendParams,
    on: on2,
    emit
  }) {
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let current;
      const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1)
          current -= total;
        if (current < 0 && swiper.params.paginationType !== "bullets")
          current = total + current;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`).join(" "));
        if ($el.length > 1) {
          bullets.each((bullet) => {
            const $bullet = dom_default(bullet);
            const bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(`${params.bulletActiveClass}-main`);
              }
              if (bulletIndex === firstIndex) {
                setSideBullets($bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets($bullet, "next");
              }
            }
          });
        } else {
          const $bullet = bullets.eq(current);
          const bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            const $firstDisplayedBullet = bullets.eq(firstIndex);
            const $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i2 = firstIndex; i2 <= lastIndex; i2 += 1) {
              bullets.eq(i2).addClass(`${params.bulletActiveClass}-main`);
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length) {
                for (let i2 = params.dynamicMainBullets; i2 >= 0; i2 -= 1) {
                  bullets.eq(bullets.length - i2).addClass(`${params.bulletActiveClass}-main`);
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
              } else {
                setSideBullets($firstDisplayedBullet, "prev");
                setSideBullets($lastDisplayedBullet, "next");
              }
            } else {
              setSideBullets($firstDisplayedBullet, "prev");
              setSideBullets($lastDisplayedBullet, "next");
            }
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
        }
      }
      if (params.type === "fraction") {
        $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
        $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
      }
      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        emit("paginationRender", $el[0]);
      } else {
        emit("paginationUpdate", $el[0]);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i2 = 0; i2 < numberOfBullets; i2 += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i2, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type !== "custom") {
        emit("paginationRender", swiper.pagination.$el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el)
        return;
      let $el = dom_default(params.el);
      if ($el.length === 0)
        return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
        $el = swiper.$el.find(params.el);
        if ($el.length > 1) {
          $el = $el.filter((el) => {
            if (dom_default(el).parents(".swiper")[0] !== swiper.el)
              return false;
            return true;
          });
        }
      }
      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on("click", classesToSelector(params.bulletClass), function onClick2(e2) {
          e2.preventDefault();
          let index2 = dom_default(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop)
            index2 += swiper.loopedSlides;
          swiper.slideTo(index2);
        });
      }
      Object.assign(swiper.pagination, {
        $el,
        el: $el[0]
      });
      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      if (params.clickable) {
        $el.off("click", classesToSelector(params.bulletClass));
      }
    }
    on2("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update();
      }
    });
    on2("activeIndexChange", () => {
      if (swiper.params.loop) {
        update();
      } else if (typeof swiper.snapIndex === "undefined") {
        update();
      }
    });
    on2("snapIndexChange", () => {
      if (!swiper.params.loop) {
        update();
      }
    });
    on2("slidesLengthChange", () => {
      if (swiper.params.loop) {
        render();
        update();
      }
    });
    on2("snapGridLengthChange", () => {
      if (!swiper.params.loop) {
        render();
        update();
      }
    });
    on2("destroy", () => {
      destroy();
    });
    on2("enable disable", () => {
      const {
        $el
      } = swiper.pagination;
      if ($el) {
        $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
      }
    });
    on2("lock unlock", () => {
      update();
    });
    on2("click", (_s, e2) => {
      const targetEl = e2.target;
      const {
        $el
      } = swiper.pagination;
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom_default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
          return;
        const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        $el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
      if (swiper.pagination.$el) {
        swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
      }
      init();
      render();
      update();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
      if (swiper.pagination.$el) {
        swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update,
      init,
      destroy
    });
  }

  // node_modules/swiper/shared/effect-init.js
  function effectInit(params) {
    const {
      effect,
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on2("beforeInit", () => {
      if (swiper.params.effect !== effect)
        return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on2("setTranslate", () => {
      if (swiper.params.effect !== effect)
        return;
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect)
        return;
      setTransition2(duration);
    });
    on2("transitionEnd", () => {
      if (swiper.params.effect !== effect)
        return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows)
          return;
        swiper.slides.each((slideEl) => {
          const $slideEl = swiper.$(slideEl);
          $slideEl.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on2("virtualUpdate", () => {
      if (swiper.params.effect !== effect)
        return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.js
  function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) {
      return $slideEl.find(effectParams.transformEl).css({
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden"
      });
    }
    return $slideEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.js
  function effectVirtualTransitionEnd({
    swiper,
    duration,
    transformEl,
    allSlides
  }) {
    const {
      slides,
      activeIndex,
      $wrapperEl
    } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let $transitionEndTarget;
      if (allSlides) {
        $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
      } else {
        $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
      }
      $transitionEndTarget.transitionEnd(() => {
        if (eventTriggered)
          return;
        if (!swiper || swiper.destroyed)
          return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ["webkitTransitionEnd", "transitionend"];
        for (let i2 = 0; i2 < triggerEvents.length; i2 += 1) {
          $wrapperEl.trigger(triggerEvents[i2]);
        }
      });
    }
  }

  // node_modules/swiper/modules/effect-fade/effect-fade.js
  function EffectFade({
    swiper,
    extendParams,
    on: on2
  }) {
    extendParams({
      fadeEffect: {
        crossFade: false,
        transformEl: null
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        const $slideEl = swiper.slides.eq(i2);
        const offset2 = $slideEl[0].swiperSlideOffset;
        let tx = -offset2;
        if (!swiper.params.virtualTranslate)
          tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.css({
          opacity: slideOpacity
        }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
      }
    };
    const setTransition2 = (duration) => {
      const {
        transformEl
      } = swiper.params.fadeEffect;
      const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
      $transitionElements.transition(duration);
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformEl,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // src/js/components/carousel.js
  var sliderSelector = ".swiper";
  var defaultOptions = {
    modules: [Navigation, Pagination, EffectFade]
  };
  var swipers = [];
  var multiSlider = document.querySelectorAll(sliderSelector);
  multiSlider.forEach(function(slider, index2) {
    swipers[index2] = {
      initialized: false
    };
  });
  function initiateSwiper() {
    var multiSlider2 = document.querySelectorAll(sliderSelector);
    const fractions = [];
    multiSlider2.forEach(function(slider, index2) {
      var data = slider.getAttribute("data-swiper") || {};
      slider.options = Object.assign({}, defaultOptions, dataOptions);
      let slides = slider.querySelectorAll(".swiper-slide");
      if (data) {
        var dataOptions = JSON.parse(data);
        slider.options = Object.assign({}, defaultOptions, dataOptions);
        var customBreakpoints = dataOptions.customBreakpoints;
        var viewports = [];
        var minViewport = 0;
        for (var viewport in customBreakpoints) {
          var destroy = customBreakpoints[viewport].destroy || false;
          if (viewport == "default") {
            viewport = 99999;
          }
          if (destroy) {
            viewports.push({
              min: minViewport,
              max: viewport
            });
          }
          minViewport = parseInt(viewport) + 1;
        }
        var enableSwiper = true;
        viewports.forEach(function(viewport2) {
          if (window.matchMedia(
            "(min-width: " + viewport2.min + "px) and (max-width: " + viewport2.max + "px)"
          ).matches) {
            enableSwiper = false;
          }
        });
        if (enableSwiper) {
          if (!swipers[index2].initialized) {
            swipers[index2] = {
              initialized: true,
              instance: new core_default(slider, slider.options)
            };
            swipers[index2].instance.on("slideChange", function(swiperData) {
            });
          }
        } else {
          if (swipers[index2].initialized) {
            swipers[index2].instance.destroy();
            swipers[index2].initialized = false;
          }
        }
      }
    });
  }
  window.addEventListener("load", function() {
    initiateSwiper();
  });
  window.addEventListener("resize", function() {
    initiateSwiper();
  });

  // src/js/components/lazyload.js
  var import_vanilla_lazyload = __toESM(require_lazyload_min());
  new import_vanilla_lazyload.default({
    elements_selector: ".lazy",
    callback_loaded: function(el) {
      jQuery(el).parent().addClass("img-loaded");
    }
  });

  // src/js/components/mobile-detect.js
  function isMobileDevice() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      return true;
    } else {
      return false;
    }
  }
  function isiPadOS() {
    var isiPadOS2 = window.AuthenticatorAssertionResponse === void 0 && window.AuthenticatorAttestationResponse === void 0 && window.AuthenticatorResponse === void 0 && window.Credential === void 0 && window.CredentialsContainer === void 0 && window.DeviceMotionEvent !== void 0 && window.DeviceOrientationEvent !== void 0 && navigator.maxTouchPoints === 5 && navigator.plugins.length === 0 && navigator.platform !== "iPhone";
    return isiPadOS2;
  }
  function isTouchSupported() {
    return typeof window.ontouchstart !== "undefined";
  }
  if ((isMobileDevice() || isiPadOS) && isTouchSupported()) {
    document.body.classList.add("disable-button-transition");
  }

  // src/js/components/scroll-to.js
  (function($2) {
    $2("[data-scroll-to]").on("click", function() {
      var $elm = $2(this);
      var hash = $elm.data("scroll-to") ? "#" + $elm.data("scroll-to") : $elm.attr("href");
      var offset2 = $elm.data("offset") ? $elm.data("offset") : 0;
      $2("html, body").animate({
        scrollTop: $2(hash).offset().top - offset2
      }, 800);
      return false;
    });
    $2(".scroll-to a").on("click", function() {
      var $elm = $2(this);
      var offset2 = 0;
      $2("html, body").animate({
        scrollTop: $2($elm.attr("href")).offset().top - offset2
      }, 800);
      return false;
    });
    $2(".b-home-header__arrow span").on("click", function() {
      var $e = $2(this);
      var $next = $e.parent().parent().next();
      var offset2 = $2(window).width() < 640 ? 35 : 0;
      $2("html, body").animate({
        scrollTop: $next.offset().top - offset2
      }, 800);
      return false;
    });
  })(jQuery);

  // node_modules/accordionjs/accordion.js
  (function($2) {
    "use strict";
    $2.fn.accordionjs = function(options) {
      if (this.length > 1) {
        this.each(function() {
          $2(this).accordionjs(options);
        });
        return this;
      }
      var accordion = this;
      var util = {
        isInteger: function(value) {
          return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        },
        isArray: function(arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        },
        isObject: function isObject3(arg) {
          return Object.prototype.toString.call(arg) === "[object Object]";
        },
        sectionIsOpen: function(section) {
          return section.hasClass("acc_active");
        },
        getHash: function() {
          if (window.location.hash) {
            return window.location.hash.substring(1);
          }
          return false;
        }
      };
      var settings = $2.extend({
        closeAble: false,
        closeOther: true,
        slideSpeed: 150,
        activeIndex: 1,
        openSection: false,
        beforeOpenSection: false
      }, options);
      $2.each(settings, function(option) {
        var data_attr = option.replace(/([A-Z])/g, "-$1").toLowerCase().toString(), new_val = accordion.data(data_attr);
        if (new_val || false === new_val) {
          settings[option] = new_val;
        }
      });
      if (settings.activeIndex === false || settings.closeOther === false) {
        settings.closeAble = true;
      }
      var init = function() {
        accordion.create();
        accordion.openOnClick();
        $2(window).on("load", function() {
          accordion.openOnHash();
        });
        $2(window).on("hashchange", function() {
          accordion.openOnHash();
        });
      };
      this.openSection = function(section, speed) {
        $2(document).trigger("accjs_before_open_section", [
          section
        ]);
        if (typeof settings.beforeOpenSection === "function") {
          settings.beforeOpenSection.call(this, section);
        }
        speed = speed >= 0 ? speed : settings.slideSpeed;
        var section_content = section.children().eq(1);
        section_content.slideDown(speed, function() {
          $2(document).trigger("accjs_open_section", [
            section
          ]);
          if (typeof settings.openSection === "function") {
            settings.openSection.call(this, section);
          }
        });
        section.addClass("acc_active");
      };
      this.closeSection = function(section, speed) {
        $2(document).trigger("accjs_before_close_section", [
          section
        ]);
        if (typeof settings.beforeCloseSection === "function") {
          settings.beforeCloseSection.call(this, section);
        }
        speed = speed >= 0 ? speed : settings.slideSpeed;
        var section_content = section.children().eq(1);
        section_content.slideUp(speed, function() {
          $2(document).trigger("accjs_close_section", [
            section
          ]);
          if (typeof settings.closeSection === "function") {
            settings.closeSection.call(this, section);
          }
        });
        section.removeClass("acc_active");
      };
      this.closeOtherSections = function(section, speed) {
        var this_acc = section.closest(".accordionjs").children();
        $2(this_acc).each(function() {
          accordion.closeSection($2(this).not(section), speed);
        });
      };
      this.create = function() {
        accordion.addClass("accordionjs");
        var accordion_sections = accordion.children();
        $2.each(accordion_sections, function(index2, elem) {
          accordion.createSingleSection($2(elem));
        });
        if (util.isArray(settings.activeIndex)) {
          var indexes = settings.activeIndex;
          for (var i2 = 0; i2 < indexes.length; i2++) {
            accordion.openSection(accordion_sections.eq(indexes[i2] - 1), 0);
          }
        } else if (settings.activeIndex > 1) {
          accordion.openSection(accordion_sections.eq(settings.activeIndex - 1), 0);
        } else if (false !== settings.activeIndex) {
          accordion.openSection(accordion_sections.eq(0), 0);
        }
      };
      this.createSingleSection = function(section) {
        var childs = section.children();
        section.addClass("acc_section");
        $2(childs[0]).addClass("acc_head");
        $2(childs[1]).addClass("acc_content");
        if (!section.hasClass("acc_active")) {
          section.children(".acc_content").hide();
        }
      };
      this.openOnClick = function() {
        accordion.on("click", ".acc_head", function(event2) {
          event2.stopImmediatePropagation();
          var section = $2(this).closest(".acc_section");
          if (util.sectionIsOpen(section)) {
            if (settings.closeAble) {
              accordion.closeSection(section);
            } else if (accordion.children().length === 1) {
              accordion.closeSection(section);
            }
          } else {
            if (settings.closeOther) {
              accordion.closeOtherSections(section);
              accordion.openSection(section);
            } else {
              accordion.openSection(section);
            }
          }
        });
      };
      this.openOnHash = function() {
        if (util.getHash()) {
          var section = $2("#" + util.getHash());
          if (section.hasClass("acc_section")) {
            accordion.openSection(section);
            if (settings.closeOther) {
              accordion.closeOtherSections(section);
            }
            $2("html, body").animate({
              scrollTop: parseInt(section.offset().top) - 50
            }, 150);
          }
        }
      };
      init();
      return this;
    };
  })(jQuery);

  // src/js/components/accordion.js
  (function($2) {
    document.addEventListener("DOMContentLoaded", () => {
      $2(".accordion").each(function() {
        var $e = $2(this);
        $e.accordionjs({
          activeIndex: false,
          openSection: function() {
          },
          closeSection: function() {
          }
        });
      });
    });
  })(jQuery);

  // node_modules/micromodal/dist/micromodal.es.js
  function e(e2, t2) {
    for (var o2 = 0; o2 < t2.length; o2++) {
      var n2 = t2[o2];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
    }
  }
  function t(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return o(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return o(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return o(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
      n2[o2] = e2[o2];
    return n2;
  }
  var n;
  var i;
  var a;
  var r;
  var s;
  var l = (n = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], i = function() {
    function o2(e2) {
      var n2 = e2.targetModal, i3 = e2.triggers, a3 = void 0 === i3 ? [] : i3, r3 = e2.onShow, s2 = void 0 === r3 ? function() {
      } : r3, l2 = e2.onClose, c = void 0 === l2 ? function() {
      } : l2, d = e2.openTrigger, u = void 0 === d ? "data-micromodal-trigger" : d, f = e2.closeTrigger, h = void 0 === f ? "data-micromodal-close" : f, v = e2.openClass, g = void 0 === v ? "is-open" : v, m = e2.disableScroll, b = void 0 !== m && m, y = e2.disableFocus, p = void 0 !== y && y, w = e2.awaitCloseAnimation, E = void 0 !== w && w, k = e2.awaitOpenAnimation, M = void 0 !== k && k, A = e2.debugMode, C = void 0 !== A && A;
      !function(e3, t2) {
        if (!(e3 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }(this, o2), this.modal = document.getElementById(n2), this.config = { debugMode: C, disableScroll: b, openTrigger: u, closeTrigger: h, openClass: g, onShow: s2, onClose: c, awaitCloseAnimation: E, awaitOpenAnimation: M, disableFocus: p }, a3.length > 0 && this.registerTriggers.apply(this, t(a3)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
    }
    var i2, a2, r2;
    return i2 = o2, (a2 = [{ key: "registerTriggers", value: function() {
      for (var e2 = this, t2 = arguments.length, o3 = new Array(t2), n2 = 0; n2 < t2; n2++)
        o3[n2] = arguments[n2];
      o3.filter(Boolean).forEach(function(t3) {
        t3.addEventListener("click", function(t4) {
          return e2.showModal(t4);
        });
      });
    } }, { key: "showModal", value: function() {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
        var o3 = function t3() {
          e2.modal.removeEventListener("animationend", t3, false), e2.setFocusToFirstNode();
        };
        this.modal.addEventListener("animationend", o3, false);
      } else
        this.setFocusToFirstNode();
      this.config.onShow(this.modal, this.activeElement, t2);
    } }, { key: "closeModal", value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = this.modal;
      if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e2), this.config.awaitCloseAnimation) {
        var o3 = this.config.openClass;
        this.modal.addEventListener("animationend", function e3() {
          t2.classList.remove(o3), t2.removeEventListener("animationend", e3, false);
        }, false);
      } else
        t2.classList.remove(this.config.openClass);
    } }, { key: "closeModalById", value: function(e2) {
      this.modal = document.getElementById(e2), this.modal && this.closeModal();
    } }, { key: "scrollBehaviour", value: function(e2) {
      if (this.config.disableScroll) {
        var t2 = document.querySelector("body");
        switch (e2) {
          case "enable":
            Object.assign(t2.style, { overflow: "" });
            break;
          case "disable":
            Object.assign(t2.style, { overflow: "hidden" });
        }
      }
    } }, { key: "addEventListeners", value: function() {
      this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
    } }, { key: "removeEventListeners", value: function() {
      this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
    } }, { key: "onClick", value: function(e2) {
      (e2.target.hasAttribute(this.config.closeTrigger) || e2.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e2.preventDefault(), e2.stopPropagation(), this.closeModal(e2));
    } }, { key: "onKeydown", value: function(e2) {
      27 === e2.keyCode && this.closeModal(e2), 9 === e2.keyCode && this.retainFocus(e2);
    } }, { key: "getFocusableNodes", value: function() {
      var e2 = this.modal.querySelectorAll(n);
      return Array.apply(void 0, t(e2));
    } }, { key: "setFocusToFirstNode", value: function() {
      var e2 = this;
      if (!this.config.disableFocus) {
        var t2 = this.getFocusableNodes();
        if (0 !== t2.length) {
          var o3 = t2.filter(function(t3) {
            return !t3.hasAttribute(e2.config.closeTrigger);
          });
          o3.length > 0 && o3[0].focus(), 0 === o3.length && t2[0].focus();
        }
      }
    } }, { key: "retainFocus", value: function(e2) {
      var t2 = this.getFocusableNodes();
      if (0 !== t2.length)
        if (t2 = t2.filter(function(e3) {
          return null !== e3.offsetParent;
        }), this.modal.contains(document.activeElement)) {
          var o3 = t2.indexOf(document.activeElement);
          e2.shiftKey && 0 === o3 && (t2[t2.length - 1].focus(), e2.preventDefault()), !e2.shiftKey && t2.length > 0 && o3 === t2.length - 1 && (t2[0].focus(), e2.preventDefault());
        } else
          t2[0].focus();
    } }]) && e(i2.prototype, a2), r2 && e(i2, r2), o2;
  }(), a = null, r = function(e2) {
    if (!document.getElementById(e2))
      return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(e2, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e2, '"></div>')), false;
  }, s = function(e2, t2) {
    if (function(e3) {
      e3.length <= 0 && (console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
    }(e2), !t2)
      return true;
    for (var o2 in t2)
      r(o2);
    return true;
  }, { init: function(e2) {
    var o2 = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e2), n2 = t(document.querySelectorAll("[".concat(o2.openTrigger, "]"))), r2 = function(e3, t2) {
      var o3 = [];
      return e3.forEach(function(e4) {
        var n3 = e4.attributes[t2].value;
        void 0 === o3[n3] && (o3[n3] = []), o3[n3].push(e4);
      }), o3;
    }(n2, o2.openTrigger);
    if (true !== o2.debugMode || false !== s(n2, r2))
      for (var l2 in r2) {
        var c = r2[l2];
        o2.targetModal = l2, o2.triggers = t(c), a = new i(o2);
      }
  }, show: function(e2, t2) {
    var o2 = t2 || {};
    o2.targetModal = e2, true === o2.debugMode && false === r(e2) || (a && a.removeEventListeners(), (a = new i(o2)).showModal());
  }, close: function(e2) {
    e2 ? a.closeModalById(e2) : a.closeModal();
  } });
  "undefined" != typeof window && (window.MicroModal = l);
  var micromodal_es_default = l;

  // src/js/components/micromodal.js
  (function($2) {
    micromodal_es_default.init();
    $2("body").on("click", ".team-slide", function() {
      if ($2(window).width() < 1024) {
        var $activeSlide = $2(".b-our-team .swiper-slide-active");
        $2("#modal-desc-title").empty().text($activeSlide.find(".team-name").text());
        $2("#modal-desc-content").empty().html($activeSlide.find(".team-desc").html());
        micromodal_es_default.show("modal-desc");
      }
    });
  })(jQuery);

  // src/js/components/aos.js
  var import_aos = __toESM(require_aos());
  (function($2) {
    $2(window).on("load", function() {
      import_aos.default.init({
        once: true,
        duration: 1e3
      });
      setTimeout(function() {
        import_aos.default.refresh();
      }, 1e3);
    });
  })(jQuery);

  // node_modules/photoswipe/dist/photoswipe-lightbox.esm.js
  function createElement(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    if (appendToEl) {
      appendToEl.appendChild(el);
    }
    return el;
  }
  function toTransformString(x, y, scale) {
    let propValue = `translate3d(${x}px,${y || 0}px,0)`;
    if (scale !== void 0) {
      propValue += ` scale3d(${scale},${scale},1)`;
    }
    return propValue;
  }
  function setWidthHeight(el, w, h) {
    el.style.width = typeof w === "number" ? `${w}px` : w;
    el.style.height = typeof h === "number" ? `${h}px` : h;
  }
  var LOAD_STATE = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
  };
  function specialKeyUsed(e2) {
    return "button" in e2 && e2.button === 1 || e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey;
  }
  function getElementsFromOption(option, legacySelector, parent2 = document) {
    let elements = [];
    if (option instanceof Element) {
      elements = [option];
    } else if (option instanceof NodeList || Array.isArray(option)) {
      elements = Array.from(option);
    } else {
      const selector = typeof option === "string" ? option : legacySelector;
      if (selector) {
        elements = Array.from(parent2.querySelectorAll(selector));
      }
    }
    return elements;
  }
  function isPswpClass(fn) {
    return typeof fn === "function" && fn.prototype && fn.prototype.goTo;
  }
  function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  var PhotoSwipeEvent = class {
    constructor(type, details) {
      this.type = type;
      this.defaultPrevented = false;
      if (details) {
        Object.assign(this, details);
      }
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  };
  var Eventable = class {
    constructor() {
      this._listeners = {};
      this._filters = {};
      this.pswp = void 0;
      this.options = void 0;
    }
    addFilter(name, fn, priority = 100) {
      var _this$_filters$name, _this$_filters$name2, _this$pswp;
      if (!this._filters[name]) {
        this._filters[name] = [];
      }
      (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
        fn,
        priority
      });
      (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
    }
    removeFilter(name, fn) {
      if (this._filters[name]) {
        this._filters[name] = this._filters[name].filter((filter2) => filter2.fn !== fn);
      }
      if (this.pswp) {
        this.pswp.removeFilter(name, fn);
      }
    }
    applyFilters(name, ...args) {
      var _this$_filters$name3;
      (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter2) => {
        args[0] = filter2.fn.apply(this, args);
      });
      return args[0];
    }
    on(name, fn) {
      var _this$_listeners$name, _this$pswp2;
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }
      (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
      (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
    }
    off(name, fn) {
      var _this$pswp3;
      if (this._listeners[name]) {
        this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
      }
      (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
    }
    dispatch(name, details) {
      var _this$_listeners$name2;
      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }
      const event2 = new PhotoSwipeEvent(name, details);
      (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
        listener.call(this, event2);
      });
      return event2;
    }
  };
  var Placeholder = class {
    constructor(imageSrc, container) {
      this.element = createElement("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
      if (imageSrc) {
        const imgEl = this.element;
        imgEl.decoding = "async";
        imgEl.alt = "";
        imgEl.src = imageSrc;
        imgEl.setAttribute("role", "presentation");
      }
      this.element.setAttribute("aria-hidden", "true");
    }
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.element.tagName === "IMG") {
        setWidthHeight(this.element, 250, "auto");
        this.element.style.transformOrigin = "0 0";
        this.element.style.transform = toTransformString(0, 0, width / 250);
      } else {
        setWidthHeight(this.element, width, height);
      }
    }
    destroy() {
      var _this$element;
      if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
        this.element.remove();
      }
      this.element = null;
    }
  };
  var Content = class {
    constructor(itemData, instance, index2) {
      this.instance = instance;
      this.data = itemData;
      this.index = index2;
      this.element = void 0;
      this.placeholder = void 0;
      this.slide = void 0;
      this.displayedImageWidth = 0;
      this.displayedImageHeight = 0;
      this.width = Number(this.data.w) || Number(this.data.width) || 0;
      this.height = Number(this.data.h) || Number(this.data.height) || 0;
      this.isAttached = false;
      this.hasSlide = false;
      this.isDecoding = false;
      this.state = LOAD_STATE.IDLE;
      if (this.data.type) {
        this.type = this.data.type;
      } else if (this.data.src) {
        this.type = "image";
      } else {
        this.type = "html";
      }
      this.instance.dispatch("contentInit", {
        content: this
      });
    }
    removePlaceholder() {
      if (this.placeholder && !this.keepPlaceholder()) {
        setTimeout(() => {
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = void 0;
          }
        }, 1e3);
      }
    }
    load(isLazy, reload) {
      if (this.slide && this.usePlaceholder()) {
        if (!this.placeholder) {
          const placeholderSrc = this.instance.applyFilters(
            "placeholderSrc",
            this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
            this
          );
          this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
        } else {
          const placeholderEl = this.placeholder.element;
          if (placeholderEl && !placeholderEl.parentElement) {
            this.slide.container.prepend(placeholderEl);
          }
        }
      }
      if (this.element && !reload) {
        return;
      }
      if (this.instance.dispatch("contentLoad", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      if (this.isImageContent()) {
        this.element = createElement("pswp__img", "img");
        if (this.displayedImageWidth) {
          this.loadImage(isLazy);
        }
      } else {
        this.element = createElement("pswp__content", "div");
        this.element.innerHTML = this.data.html || "";
      }
      if (reload && this.slide) {
        this.slide.updateContentSize(true);
      }
    }
    loadImage(isLazy) {
      var _this$data$src, _this$data$alt;
      if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      const imageElement = this.element;
      this.updateSrcsetSizes();
      if (this.data.srcset) {
        imageElement.srcset = this.data.srcset;
      }
      imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
      imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
      this.state = LOAD_STATE.LOADING;
      if (imageElement.complete) {
        this.onLoaded();
      } else {
        imageElement.onload = () => {
          this.onLoaded();
        };
        imageElement.onerror = () => {
          this.onError();
        };
      }
    }
    setSlide(slide) {
      this.slide = slide;
      this.hasSlide = true;
      this.instance = slide.pswp;
    }
    onLoaded() {
      this.state = LOAD_STATE.LOADED;
      if (this.slide && this.element) {
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          content: this
        });
        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.append();
          this.slide.updateContentSize(true);
        }
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
          this.removePlaceholder();
        }
      }
    }
    onError() {
      this.state = LOAD_STATE.ERROR;
      if (this.slide) {
        this.displayError();
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch("loadError", {
          slide: this.slide,
          content: this
        });
      }
    }
    isLoading() {
      return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
    }
    isError() {
      return this.state === LOAD_STATE.ERROR;
    }
    isImageContent() {
      return this.type === "image";
    }
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.placeholder) {
        this.placeholder.setDisplayedSize(width, height);
      }
      if (this.instance.dispatch("contentResize", {
        content: this,
        width,
        height
      }).defaultPrevented) {
        return;
      }
      setWidthHeight(this.element, width, height);
      if (this.isImageContent() && !this.isError()) {
        const isInitialSizeUpdate = !this.displayedImageWidth && width;
        this.displayedImageWidth = width;
        this.displayedImageHeight = height;
        if (isInitialSizeUpdate) {
          this.loadImage(false);
        } else {
          this.updateSrcsetSizes();
        }
        if (this.slide) {
          this.instance.dispatch("imageSizeChange", {
            slide: this.slide,
            width,
            height,
            content: this
          });
        }
      }
    }
    isZoomable() {
      return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    updateSrcsetSizes() {
      if (!this.isImageContent() || !this.element || !this.data.srcset) {
        return;
      }
      const image = this.element;
      const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + "px";
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
    usePlaceholder() {
      return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    lazyLoad() {
      if (this.instance.dispatch("contentLazyLoad", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.load(true);
    }
    keepPlaceholder() {
      return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    destroy() {
      this.hasSlide = false;
      this.slide = void 0;
      if (this.instance.dispatch("contentDestroy", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.remove();
      if (this.placeholder) {
        this.placeholder.destroy();
        this.placeholder = void 0;
      }
      if (this.isImageContent() && this.element) {
        this.element.onload = null;
        this.element.onerror = null;
        this.element = void 0;
      }
    }
    displayError() {
      if (this.slide) {
        var _this$instance$option, _this$instance$option2;
        let errorMsgEl = createElement("pswp__error-msg", "div");
        errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
        errorMsgEl = this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
        this.element = createElement("pswp__content pswp__error-msg-container", "div");
        this.element.appendChild(errorMsgEl);
        this.slide.container.innerText = "";
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    append() {
      if (this.isAttached || !this.element) {
        return;
      }
      this.isAttached = true;
      if (this.state === LOAD_STATE.ERROR) {
        this.displayError();
        return;
      }
      if (this.instance.dispatch("contentAppend", {
        content: this
      }).defaultPrevented) {
        return;
      }
      const supportsDecode = "decode" in this.element;
      if (this.isImageContent()) {
        if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
          this.isDecoding = true;
          this.element.decode().catch(() => {
          }).finally(() => {
            this.isDecoding = false;
            this.appendImage();
          });
        } else {
          this.appendImage();
        }
      } else if (this.slide && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    activate() {
      if (this.instance.dispatch("contentActivate", {
        content: this
      }).defaultPrevented || !this.slide) {
        return;
      }
      if (this.isImageContent() && this.isDecoding && !isSafari()) {
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true);
      }
      if (this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "false");
      }
    }
    deactivate() {
      this.instance.dispatch("contentDeactivate", {
        content: this
      });
      if (this.slide && this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
    }
    remove() {
      this.isAttached = false;
      if (this.instance.dispatch("contentRemove", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
      if (this.placeholder && this.placeholder.element) {
        this.placeholder.element.remove();
      }
    }
    appendImage() {
      if (!this.isAttached) {
        return;
      }
      if (this.instance.dispatch("contentAppendImage", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.slide && this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
      if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
        this.removePlaceholder();
      }
    }
  };
  function getViewportSize(options, pswp) {
    if (options.getViewportSizeFn) {
      const newViewportSize = options.getViewportSizeFn(options, pswp);
      if (newViewportSize) {
        return newViewportSize;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      y: window.innerHeight
    };
  }
  function parsePaddingOption(prop, options, viewportSize, itemData, index2) {
    let paddingValue = 0;
    if (options.paddingFn) {
      paddingValue = options.paddingFn(viewportSize, itemData, index2)[prop];
    } else if (options.padding) {
      paddingValue = options.padding[prop];
    } else {
      const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
      if (options[legacyPropName]) {
        paddingValue = options[legacyPropName];
      }
    }
    return Number(paddingValue) || 0;
  }
  function getPanAreaSize(options, viewportSize, itemData, index2) {
    return {
      x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index2) - parsePaddingOption("right", options, viewportSize, itemData, index2),
      y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index2) - parsePaddingOption("bottom", options, viewportSize, itemData, index2)
    };
  }
  var MAX_IMAGE_WIDTH = 4e3;
  var ZoomLevel = class {
    constructor(options, itemData, index2, pswp) {
      this.pswp = pswp;
      this.options = options;
      this.itemData = itemData;
      this.index = index2;
      this.panAreaSize = null;
      this.elementSize = null;
      this.fit = 1;
      this.fill = 1;
      this.vFill = 1;
      this.initial = 1;
      this.secondary = 1;
      this.max = 1;
      this.min = 1;
    }
    update(maxWidth, maxHeight, panAreaSize) {
      const elementSize = {
        x: maxWidth,
        y: maxHeight
      };
      this.elementSize = elementSize;
      this.panAreaSize = panAreaSize;
      const hRatio = panAreaSize.x / elementSize.x;
      const vRatio = panAreaSize.y / elementSize.y;
      this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
      this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
      this.vFill = Math.min(1, vRatio);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);
      if (this.pswp) {
        this.pswp.dispatch("zoomLevelsUpdate", {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    _parseZoomLevelOption(optionPrefix) {
      const optionName = optionPrefix + "ZoomLevel";
      const optionValue = this.options[optionName];
      if (!optionValue) {
        return;
      }
      if (typeof optionValue === "function") {
        return optionValue(this);
      }
      if (optionValue === "fill") {
        return this.fill;
      }
      if (optionValue === "fit") {
        return this.fit;
      }
      return Number(optionValue);
    }
    _getSecondary() {
      let currZoomLevel = this._parseZoomLevelOption("secondary");
      if (currZoomLevel) {
        return currZoomLevel;
      }
      currZoomLevel = Math.min(1, this.fit * 3);
      if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
        currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
      }
      return currZoomLevel;
    }
    _getInitial() {
      return this._parseZoomLevelOption("initial") || this.fit;
    }
    _getMax() {
      return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
    }
  };
  function lazyLoadData(itemData, instance, index2) {
    const content = instance.createContentFromData(itemData, index2);
    let zoomLevel;
    const {
      options
    } = instance;
    if (options) {
      zoomLevel = new ZoomLevel(options, itemData, -1);
      let viewportSize;
      if (instance.pswp) {
        viewportSize = instance.pswp.viewportSize;
      } else {
        viewportSize = getViewportSize(options, instance);
      }
      const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index2);
      zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
      content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
  }
  function lazyLoadSlide(index2, instance) {
    const itemData = instance.getItemData(index2);
    if (instance.dispatch("lazyLoadSlide", {
      index: index2,
      itemData
    }).defaultPrevented) {
      return;
    }
    return lazyLoadData(itemData, instance, index2);
  }
  var PhotoSwipeBase = class extends Eventable {
    getNumItems() {
      var _this$options;
      let numItems = 0;
      const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
      if (dataSource && "length" in dataSource) {
        numItems = dataSource.length;
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        if (dataSource.items) {
          numItems = dataSource.items.length;
        }
      }
      const event2 = this.dispatch("numItems", {
        dataSource,
        numItems
      });
      return this.applyFilters("numItems", event2.numItems, dataSource);
    }
    createContentFromData(slideData, index2) {
      return new Content(slideData, this, index2);
    }
    getItemData(index2) {
      var _this$options2;
      const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
      let dataSourceItem = {};
      if (Array.isArray(dataSource)) {
        dataSourceItem = dataSource[index2];
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        dataSourceItem = dataSource.items[index2];
      }
      let itemData = dataSourceItem;
      if (itemData instanceof Element) {
        itemData = this._domElementToItemData(itemData);
      }
      const event2 = this.dispatch("itemData", {
        itemData: itemData || {},
        index: index2
      });
      return this.applyFilters("itemData", event2.itemData, index2);
    }
    _getGalleryDOMElements(galleryElement) {
      var _this$options3, _this$options4;
      if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
        return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
      }
      return [galleryElement];
    }
    _domElementToItemData(element) {
      const itemData = {
        element
      };
      const linkEl = element.tagName === "A" ? element : element.querySelector("a");
      if (linkEl) {
        itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
        if (linkEl.dataset.pswpSrcset) {
          itemData.srcset = linkEl.dataset.pswpSrcset;
        }
        itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
        itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
        itemData.w = itemData.width;
        itemData.h = itemData.height;
        if (linkEl.dataset.pswpType) {
          itemData.type = linkEl.dataset.pswpType;
        }
        const thumbnailEl = element.querySelector("img");
        if (thumbnailEl) {
          var _thumbnailEl$getAttri;
          itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
          itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
        }
        if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
          itemData.thumbCropped = true;
        }
      }
      return this.applyFilters("domItemData", itemData, element, linkEl);
    }
    lazyLoadData(itemData, index2) {
      return lazyLoadData(itemData, this, index2);
    }
  };
  var PhotoSwipeLightbox = class extends PhotoSwipeBase {
    constructor(options) {
      super();
      this.options = options || {};
      this._uid = 0;
      this.shouldOpen = false;
      this._preloadedContent = void 0;
      this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
    }
    init() {
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
        galleryElement.addEventListener("click", this.onThumbnailsClick, false);
      });
    }
    onThumbnailsClick(e2) {
      if (specialKeyUsed(e2) || window.pswp) {
        return;
      }
      let initialPoint = {
        x: e2.clientX,
        y: e2.clientY
      };
      if (!initialPoint.x && !initialPoint.y) {
        initialPoint = null;
      }
      let clickedIndex = this.getClickedIndex(e2);
      clickedIndex = this.applyFilters("clickedIndex", clickedIndex, e2, this);
      const dataSource = {
        gallery: e2.currentTarget
      };
      if (clickedIndex >= 0) {
        e2.preventDefault();
        this.loadAndOpen(clickedIndex, dataSource, initialPoint);
      }
    }
    getClickedIndex(e2) {
      if (this.options.getClickedIndexFn) {
        return this.options.getClickedIndexFn.call(this, e2);
      }
      const clickedTarget = e2.target;
      const childElements = getElementsFromOption(
        this.options.children,
        this.options.childSelector,
        e2.currentTarget
      );
      const clickedChildIndex = childElements.findIndex((child) => child === clickedTarget || child.contains(clickedTarget));
      if (clickedChildIndex !== -1) {
        return clickedChildIndex;
      } else if (this.options.children || this.options.childSelector) {
        return -1;
      }
      return 0;
    }
    loadAndOpen(index2, dataSource, initialPoint) {
      if (window.pswp || !this.options) {
        return false;
      }
      if (!dataSource && this.options.gallery && this.options.children) {
        const galleryElements = getElementsFromOption(this.options.gallery);
        if (galleryElements[0]) {
          dataSource = {
            gallery: galleryElements[0]
          };
        }
      }
      this.options.index = index2;
      this.options.initialPointerPos = initialPoint;
      this.shouldOpen = true;
      this.preload(index2, dataSource);
      return true;
    }
    preload(index2, dataSource) {
      const {
        options
      } = this;
      if (dataSource) {
        options.dataSource = dataSource;
      }
      const promiseArray = [];
      const pswpModuleType = typeof options.pswpModule;
      if (isPswpClass(options.pswpModule)) {
        promiseArray.push(Promise.resolve(
          options.pswpModule
        ));
      } else if (pswpModuleType === "string") {
        throw new Error("pswpModule as string is no longer supported");
      } else if (pswpModuleType === "function") {
        promiseArray.push(
          options.pswpModule()
        );
      } else {
        throw new Error("pswpModule is not valid");
      }
      if (typeof options.openPromise === "function") {
        promiseArray.push(options.openPromise());
      }
      if (options.preloadFirstSlide !== false && index2 >= 0) {
        this._preloadedContent = lazyLoadSlide(index2, this);
      }
      const uid = ++this._uid;
      Promise.all(promiseArray).then((iterableModules) => {
        if (this.shouldOpen) {
          const mainModule = iterableModules[0];
          this._openPhotoswipe(mainModule, uid);
        }
      });
    }
    _openPhotoswipe(module, uid) {
      if (uid !== this._uid && this.shouldOpen) {
        return;
      }
      this.shouldOpen = false;
      if (window.pswp) {
        return;
      }
      const pswp = typeof module === "object" ? new module.default(this.options) : new module(this.options);
      this.pswp = pswp;
      window.pswp = pswp;
      Object.keys(this._listeners).forEach((name) => {
        var _this$_listeners$name;
        (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach((fn) => {
          pswp.on(
            name,
            fn
          );
        });
      });
      Object.keys(this._filters).forEach((name) => {
        var _this$_filters$name;
        (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach((filter2) => {
          pswp.addFilter(name, filter2.fn, filter2.priority);
        });
      });
      if (this._preloadedContent) {
        pswp.contentLoader.addToCache(this._preloadedContent);
        this._preloadedContent = void 0;
      }
      pswp.on("destroy", () => {
        this.pswp = void 0;
        delete window.pswp;
      });
      pswp.init();
    }
    destroy() {
      var _this$pswp;
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
      this.shouldOpen = false;
      this._listeners = {};
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
        galleryElement.removeEventListener("click", this.onThumbnailsClick, false);
      });
    }
  };

  // src/js/components/photoswipe.js
  init_photoswipe_esm();
  (function($2) {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".c-zoom",
      children: "a",
      pswpModule: () => Promise.resolve().then(() => (init_photoswipe_esm(), photoswipe_esm_exports))
    });
    lightbox.init();
  })(jQuery);
})();
/*!
  * PhotoSwipe 5.4.3 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
/*!
  * PhotoSwipe Lightbox 5.4.3 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
