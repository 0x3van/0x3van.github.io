var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var bigbootypuertoricangoddesscum2020youcantfindmelololol = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
	current++;
	if (pattern.length === current) {
		current = 0;
		confirm('congratulations on finding the konami code easter egg, an easter egg millions of people have found already. ratio + L + you fell off + deez nuts + your mother + youre bad');
        setTimeout(function(){
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }, 2000);
	}

};
document.addEventListener('keydown', bigbootypuertoricangoddesscum2020youcantfindmelololol, false);

(function (t) {
    function e(e) {
        for (var s, i, n = e[0], l = e[1], c = e[2], d = 0, u = []; d < n.length; d++) i = n[d], Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]), r[i] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        p && p(e);
        while (u.length) u.shift()();
        return o.push.apply(o, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < o.length; e++) {
            for (var a = o[e], s = !0, i = 1; i < a.length; i++) {
                var n = a[i];
                0 !== r[n] && (s = !1)
            }
            s && (o.splice(e--, 1), t = l(l.s = a[0]))
        }
        return t
    }
    var s = {},
        i = {
            app: 0
        },
        r = {
            app: 0
        },
        o = [];

    function n(t) {
        return l.p + "js/" + ({
            404: "404",
            about: "about",
            admin: "admin",
            confianca: "confianca",
            desbravando: "desbravando",
            work: "work"
        } [t] || t) + "." + {
            404: "0517e3de",
            about: "a1f3837d",
            admin: "96c7c0f6",
            confianca: "15221cdc",
            desbravando: "fcd08805",
            work: "db5007a2"
        } [t] + ".js"
    }

    function l(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.e = function (t) {
        var e = [],
            a = {
                404: 1,
                about: 1,
                admin: 1,
                confianca: 1,
                desbravando: 1,
                work: 1
            };
        i[t] ? e.push(i[t]) : 0 !== i[t] && a[t] && e.push(i[t] = new Promise((function (e, a) {
            for (var s = "css/" + ({
                    404: "404",
                    about: "about",
                    admin: "admin",
                    confianca: "confianca",
                    desbravando: "desbravando",
                    work: "work"
                } [t] || t) + "." + {
                    404: "1d2c4aa3",
                    about: "9c65333d",
                    admin: "d19cd596",
                    confianca: "fef84c0b",
                    desbravando: "062908be",
                    work: "5187ca25"
                } [t] + ".css", r = l.p + s, o = document.getElementsByTagName("link"), n = 0; n < o.length; n++) {
                var c = o[n],
                    d = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (d === s || d === r)) return e()
            }
            var u = document.getElementsByTagName("style");
            for (n = 0; n < u.length; n++) {
                c = u[n], d = c.getAttribute("data-href");
                if (d === s || d === r) return e()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = e, p.onerror = function (e) {
                var s = e && e.target && e.target.src || r,
                    o = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = s, delete i[t], p.parentNode.removeChild(p), a(o)
            }, p.href = r;
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(p)
        })).then((function () {
            i[t] = 0
        })));
        var s = r[t];
        if (0 !== s)
            if (s) e.push(s[2]);
            else {
                var o = new Promise((function (e, a) {
                    s = r[t] = [e, a]
                }));
                e.push(s[2] = o);
                var c, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, l.nc && d.setAttribute("nonce", l.nc), d.src = n(t);
                var u = new Error;
                c = function (e) {
                    d.onerror = d.onload = null, clearTimeout(p);
                    var a = r[t];
                    if (0 !== a) {
                        if (a) {
                            var s = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")", u.name = "ChunkLoadError", u.type = s, u.request = i, a[1](u)
                        }
                        r[t] = void 0
                    }
                };
                var p = setTimeout((function () {
                    c({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = c, document.head.appendChild(d)
            } return Promise.all(e)
    }, l.m = t, l.c = s, l.d = function (t, e, a) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function (t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) l.d(a, s, function (e) {
                return t[e]
            }.bind(null, s));
        return a
    }, l.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "/", l.oe = function (t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var p = d;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "1d28": function (t, e, a) {},
    "1f12": function (t, e, a) {
        t.exports = a.p + "media/smw_stomp_no_damage.f0ed2462.ogg"
    },
    "4cd5": function (t, e, a) {
        t.exports = a.p + "media/smw_power-up_appears.1f4184e6.ogg"
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var s = a("2b0e"),
            i = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    class: this.$route.meta.bodyClass,
                    attrs: {
                        id: "app"
                    }
                }, [a("BgBody"), a("Header", {
                    attrs: {
                        routeName: this.$route.name,
                        viewport: t.viewport
                    }
                }), a("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in",
                        css: !1
                    },
                    on: {
                        leave: t.leave,
                        enter: t.enter
                    }
                }, [a("router-view", {
                    attrs: {
                        viewport: t.viewport
                    }
                })], 1), a("Spine")], 1)
            },
            r = [],
            o = (a("a1a3"), a("e619"), a("cd29")),
            n = a("cffa"),
            l = a("e345"),
            c = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("header", {
                    attrs: {
                        id: "header"
                    }
                }, [t._m(0), a("div", {
                    staticClass: "header-container"
                }, [a("div", {
                    staticClass: "header-breadcrumb"
                }, [t._v(t._s(t.routeName))]), t.viewport.is768 ? a("button", {
                    staticClass: "header-nav-button",
                    attrs: {
                        title: "Open menu",
                        type: "button"
                    },
                    on: {
                        click: t.openMenu
                    }
                }, [a("span", {
                    staticClass: "label"
                }, [t._v("Menu")]), a("span", {
                    staticClass: "dots d1"
                }), a("span", {
                    staticClass: "dots d2"
                }), a("span", {
                    staticClass: "dots d3"
                })]) : t._e(), a("nav", {
                    staticClass: "header-nav"
                }, [t.viewport.is768 ? a("button", {
                    staticClass: "header-nav-close-button",
                    attrs: {
                        title: "Close menu",
                        type: "button"
                    },
                    on: {
                        click: t.closeMenu
                    }
                }, [a("span", {
                    staticClass: "label"
                }, [t._v("???")])]) : t._e(), a("ul", [a("li", [a("router-link", {
                    attrs: {
                        to: "/",
                        title: "Home"
                    }
                }, [t._v(".systems()")])], 1), a("li", [a("router-link", {
                    attrs: {
                        to: "/work",
                        title: "Selected works"
                    }
                }, [t._v(".work()")])], 1), a("li", [a("router-link", {
                    attrs: {
                        to: "/about",
                        title: "About me"
                    }
                }, [t._v(".about()")])], 1), t._m(1), a("li", {
                    staticClass: "social-link"
                }, [a("a", {
                    attrs: {
                        href: "https://discord.gg/qEkZShVzAF",
                        target: "_blank",
                        title: "LinkedIn"
                    }
                }, [a("svg", {
                    staticClass: "ico",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 71 55",
                        role: "img",
                        width: "20",
                        height: "20",
                        "aria-labelledby": "LinkedinIcoTitle"
                    }
                }, [a("title", {
                    attrs: {
                        id: "LinkedinIcoTitle"
                    }
                }, [t._v("dicksword logo")]), a("path", {
                    attrs: {
                        d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    }
                })])])]), a("li", {
                    staticClass: "social-link"
                }, [a("a", {
                    attrs: {
                        href: "https://github.com/0x3van",
                        target: "_blank",
                        title: "GitHub"
                    }
                }, [a("svg", {
                    staticClass: "ico",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        role: "img",
                        "aria-labelledby": "GithubIcoTitle"
                    }
                }, [a("title", {
                    attrs: {
                        id: "GithubIcoTitle"
                    }
                }, [t._v("GitHub logo")]), a("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z",
                        "clip-rule": "evenodd"
                    }
                })])])])])])])])
            },
            d = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "header-bg"
                }, [a("div", {
                    staticClass: "-default"
                }), a("div", {
                    staticClass: "-mario"
                }), a("div", {
                    staticClass: "-admin"
                }), a("div", {
                    staticClass: "-confianca"
                }), a("div", {
                    staticClass: "-desbravando"
                })])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", [a("a", {
                    attrs: {
                        href: "mailto:me@evan.systems",
                        title: "Send me an email"
                    }
                }, [t._v(".contact()")])])
            }],
            u = (a("a5f6"), {
                name: "Header",
                props: {
                    routeName: String,
                    viewport: Object
                },
                methods: {
                    openMenu: function () {
                        document.body.classList.add("-open-nav")
                    },
                    closeMenu: function () {
                        document.body.classList.remove("-open-nav")
                    }
                }
            }),
            p = u,
            m = a("2877"),
            h = Object(m["a"])(p, c, d, !1, null, null, null),
            f = h.exports,
            y = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            v = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    staticClass: "spine"
                }), a("div", {
                    staticClass: "spine-target"
                }, [a("div", {
                    staticClass: "circle"
                }), a("div", {
                    staticClass: "pulse"
                })])])
            }],
            g = {
                name: "Spine"
            },
            b = g,
            w = Object(m["a"])(b, y, v, !1, null, null, null),
            C = w.exports,
            _ = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            k = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "body-bg"
                }, [a("div", {
                    staticClass: "-default"
                }), a("div", {
                    staticClass: "-mario"
                }), a("div", {
                    staticClass: "-admin"
                }), a("div", {
                    staticClass: "-confianca"
                }), a("div", {
                    staticClass: "-desbravando"
                })])
            }],
            P = {
                name: "BgBody"
            },
            x = P,
            M = Object(m["a"])(x, _, k, !1, null, null, null),
            S = M.exports;
        Object(l["ScrollMagicPluginGsap"])(o, n["b"], n["a"]);
        var O = {
                name: "App",
                data: function () {
                    return {
                        viewport: {
                            w: window.innerWidth,
                            h: window.innerHeight,
                            is568: window.innerWidth <= 568,
                            is768: window.innerWidth <= 768,
                            is1024: window.innerWidth <= 1024
                        },
                        introTimeline: new n["a"],
                        leaveTimeline: new n["a"]
                    }
                },
                created: function () {
                    this.updateViewport(), window.addEventListener("resize", this.updateViewport), window.addEventListener("beforeunload", (function () {
                        return window.scroll(0, 0)
                    }))
                },
                methods: {
                    enter: function (t, e) {
                        this.introTimeline.clear().addLabel("enter", 0).fromTo(".header-breadcrumb", 1, {
                            autoAlpha: 0,
                            x: -32
                        }, {
                            autoAlpha: 1,
                            x: 0,
                            ease: Power3.easeOut
                        }, "enter").fromTo(t, 1, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }, "enter").fromTo(".spine", 1, {
                            autoAlpha: 0,
                            yPercent: 20
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            ease: Power3.easeOut,
                            onComplete: e
                        }, "enter").fromTo(".spine-target .circle", 1, {
                            scale: 0,
                            autoAlpha: 0
                        }, {
                            scale: 1,
                            autoAlpha: 1,
                            ease: Elastic.easeOut.config(1, .5)
                        }, "enter+=.7").fromTo(".spine-target .circle", 2, {
                            backgroundColor: "transparent"
                        }, {
                            backgroundColor: "#0051ff"
                        }, "enter+=1.2").fromTo(".spine-target .pulse", 4, {
                            autoAlpha: 1,
                            scale: 0
                        }, {
                            autoAlpha: 0,
                            scale: 8,
                            ease: Power3.easeOut
                        }, "enter+=1.2")
                    },
                    leave: function (t, e) {
                        this.leaveTimeline.clear().addLabel("leave", 0).to(".spine-target .circle, .spine-target .pulse", .5, {
                            scale: 0,
                            autoAlpha: 0,
                            ease: Power3.easeIn
                        }, "leave").to(".spine", .5, {
                            autoAlpha: 0,
                            yPercent: 50,
                            ease: Power3.easeIn
                        }, "leave+=.25").set(".header-breadcrumb", {
                            autoAlpha: 0
                        }, "leave").to(t, 1, {
                            autoAlpha: 0,
                            onComplete: e
                        }, "leave")
                    },
                    updateViewport: function () {
                        this.viewport = {
                            w: window.innerWidth,
                            h: window.innerHeight,
                            is568: window.innerWidth <= 568,
                            is768: window.innerWidth <= 768,
                            is1024: window.innerWidth <= 1024
                        }
                    }
                },
                components: {
                    Header: f,
                    Spine: C,
                    BgBody: S
                }
            },
            z = O,
            T = Object(m["a"])(z, i, r, !1, null, null, null),
            E = T.exports,
            L = (a("456d"), a("ac6a"), a("f3e2"), a("5df3"), a("1c4c"), a("6d67"), a("7514"), a("8c4f")),
            A = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "wrapper",
                    attrs: {
                        id: "home"
                    }
                }, [a("Intro"), a("div", {
                    staticClass: "gap"
                }), a("Titles", {
                    attrs: {
                        viewport: t.viewport,
                        scene: "curriculum"
                    }
                }, [t.viewport.is768 ? a("h1", {
                    staticClass: "title"
                }, [t._v("\n            aboutme("), a("br"), t._v("\n            .mobile("), a("span", {
                    staticClass: "params"
                }, [t._v("'evan[#-1]'")]), t._v(")\n        ")]) : a("h1", {
                    staticClass: "title"
                }, [t._v("\n            aboutme("), a("span", {
                    staticClass: "params"
                }, [t._v("'evan[#-1]'")]), t._v(")\n        ")]), a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-gray"
                }, [t._v("# what ive been working on lol")])])]), a("Biz", {
                    attrs: {
                        viewport: t.viewport
                    }
                }), a("div", {
                    staticClass: "gap"
                }), a("EarlyDays", {
                    attrs: {
                        viewport: t.viewport
                    }
                }), a("div", {
                    staticClass: "gap"
                }), a("Titles", {
                    attrs: {
                        viewport: t.viewport,
                        scene: "ArtPhiGamesTitle"
                    }
                }, [a("h1", {
                    staticClass: "title"
                }, [a("span", {
                    staticClass: "line"
                }, [a("span", {
                    staticClass: "params"
                }, [t._v("`${")]), t._v("READY"), a("span", {
                    staticClass: "params"
                }, [t._v("}")])]), a("span", {
                    staticClass: "line"
                }, [a("span", {
                    staticClass: "params"
                }, [t._v("??${")]), t._v("PLAYER"), a("span", {
                    staticClass: "params"
                }, [t._v("}")])]), a("span", {
                    staticClass: "line"
                }, [a("span", {
                    staticClass: "params"
                }, [t._v("??${")]), t._v("ONE"), a("span", {
                    staticClass: "params"
                }, [t._v("}`")])])]), a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-gray"
                }, [t._v("1UP")])])]), a("SuperMario"), a("div", {
                    staticClass: "gap"
                }), a("Ghibli"), a("Wrapper"), a("Thanks")], 1)
            },
            q = [],
            I = a("768b"),
            D = (a("ac4d"), a("8a81"), a("1d28"), function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            }),
            B = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene-intro",
                    attrs: {
                        id: "intro"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("h1", {
                    staticClass: "title"
                }, [a("span", {
                    staticClass: "evan_systems("
                }, [t._v("evan")]), a("span", {
                    staticClass: "func"
                }, [t._v(".systems()")])]), a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-purple"
                }, [t._v("@0x3van ")]), a("p", {
                    staticClass: "-gray"
                }, [t._v("\n                lua,javascript,python programmer"), a("br"), t._v("\n                \n            ")])])])])
            }],
            j = {
                name: "Intro"
            },
            R = j,
            G = Object(m["a"])(R, D, B, !1, null, null, null),
            $ = G.exports,
            N = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: t.scene
                    }
                }, [a("div", {
                    staticClass: "title-container"
                }, [t._t("default")], 2)])
            },
            W = [],
            V = {
                name: "Titles",
                props: {
                    scene: String,
                    viewport: Object
                }
            },
            F = V,
            H = Object(m["a"])(F, N, W, !1, null, null, null),
            Y = H.exports,
            X = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("Titles", {
                    attrs: {
                        viewport: t.viewport,
                        scene: "bizTitle"
                    }
                }, [a("h1", {
                    staticClass: "title"
                }, [t._v("\n            code("), a("span", {
                    staticClass: "params"
                }, [t._v("lua,python")]), t._v(")\n      ")])]), a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "biz1"
                    }
                }, [t._m(0), a("div", {
                    staticClass: "container"
                }, [a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "abiz",
                        viewBox: "0 0 100 100",
                        "aria-labelledby": "aBizTitle aBizDesc"
                    }
                }, [a("title", {
                    attrs: {
                        id: "aBizTitle"
                    }
                }, [t._v("Biz, the BizCommerce mascot")]), a("desc", {
                    attrs: {
                        id: "aBizDesc"
                    }
                }, [t._v("She is a cute light blue pentagon, holding the Magento logo inside an orange\n                    circle\n                ")]), a("g", {
                    staticClass: "abiz-abiz"
                }, [a("g", {
                    staticClass: "abiz-body"
                }, [a("path", {
                    staticClass: "abiz-r-arm",
                    attrs: {
                        fill: "none",
                        stroke: "#9FD4E5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.141",
                        d: ""
                    }
                }), a("path", {
                    staticClass: "abiz-l-arm",
                    attrs: {
                        fill: "none",
                        stroke: "#D1F4FC",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.141",
                        d: ""
                    }
                }), a("g", {
                    staticClass: "abiz-head"
                }, [a("path", {
                    staticClass: "abiz-skin",
                    attrs: {
                        fill: "#D1F4FC",
                        d: ""
                    }
                }), a("path", {
                    staticClass: "abiz-face",
                    attrs: {
                        fill: "none",
                        stroke: "#004E88",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": ".775",
                        d: ""
                    }
                }), a("path", {
                    staticClass: "abiz-s",
                    attrs: {
                        fill: "#9FD4E5",
                        d: ""
                    }
                })]), a("g", {
                    staticClass: "abiz-magento-s"
                }, [a("ellipse", {
                    staticClass: "s",
                    attrs: {
                        cx: "14.8",
                        cy: "60.2",
                        fill: "#9FD4E5",
                        rx: "3.5",
                        ry: "1.3"
                    }
                })])]), a("g", {
                    attrs: {
                        id: "magento"
                    }
                }, [a("ellipse", {
                    staticClass: "magento-sphere",
                    attrs: {
                        cx: "14.8",
                        cy: "49.2",
                        fill: "#FF6D00",
                        rx: "4.8",
                        ry: "4.8"
                    }
                }), a("path", {
                    staticClass: "magento-logo",
                    attrs: {
                        fill: "#FFF",
                        d: ""
                    }
                })])])]), a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "dino",
                        viewBox: "0 0 100 100",
                        "aria-labelledby": "dinoDesc"
                    }
                }, [a("desc", {
                    attrs: {
                        id: "dinoDesc"
                    }
                }, [t._v("A purple dinosaur with a red headset, listening and dancing to the music")]), a("g", {
                    staticClass: "dino-dino"
                }, [a("g", {
                    staticClass: "dino-l-arm"
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#7f4fb2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "5.138",
                        d: "M55,63.8c0,0-8,2.9-12.6,0.9s-6.3-6.3-6.2-10.2"
                    }
                })]), a("g", {
                    staticClass: "dino-tail"
                }, [a("path", {
                    attrs: {
                        fill: "#7f4fb2",
                        d: ""
                    }
                })]), a("g", {
                    staticClass: "dino-l-leg"
                }, [a("path", {
                    attrs: {
                        fill: "#7f4fb2",
                        d: ""
                    }
                })]), a("g", {
                    staticClass: "dino-head"
                }, [a("g", {
                    staticClass: "dino-back-hair"
                }, [a("path", {
                    attrs: {
                        fill: "#002c58",
                        d: ""
                    }
                }), a("path", {
                    attrs: {
                        fill: "#002c58",
                        d: "M66.5 19.7s2.3-8.4-.5-9.1-8.6 5.4-8.6 5.4l9.1 3.7z"
                    }
                })]), a("path", {
                    staticClass: "teeth1",
                    attrs: {
                        fill: "#e7edf1",
                        d: "M47.1 48.6H44l1.2 2.7c.1.3.6.3.7 0l1.2-2.7z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ab63d6",
                        d: "M66.5 53c-.9-2.1-1.2-5.3-1.2-8.9 0-7.4 1.5-16.6 2.1-22.1.3-2.5-1.3-4.9-3.8-5.5-2.7-.6-6.6-1.5-10.8-2-10.8-1.2-24.7-.5-31.3 10-1.8 2.8-8 17.9-1.1 21.7 5.6 3 24.3 3.4 30.1 2.7-.3 4-11.5 10.7-11.5 22.3 0 9.1 7.7 16.3 16.9 16.3 9.3 0 16.9-7.6 16.9-16.9 0-7.4-4.6-13.6-6.3-17.6z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#9660c7",
                        d: "M67.5 22c-.7 5.4-2.1 14.6-2.1 22.1 0 0-3.8.6-4.8-8.7s7.1-18.6-7.7-20.8h-.1c4.3.5 8.1 1.3 10.8 2 2.5.6 4.2 2.9 3.9 5.4z"
                    }
                }), a("path", {
                    staticClass: "mouth-chillout",
                    attrs: {
                        fill: "none",
                        stroke: "#002c58",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": ".428",
                        d: "M47.7 49.1c9 .1 12.9-2 14-5.5"
                    }
                }), a("path", {
                    staticClass: "mouth-fuck-yeah",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        fill: "none",
                        stroke: "#002c58",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": ".428",
                        d: "M54.6,47.1c-0.6,0-0.7,1-3,1"
                    }
                }), a("path", {
                    staticClass: "teeth2",
                    attrs: {
                        fill: "#e7edf1",
                        d: "M47.7 49.1l1.6 3c.2.3.7.3.9 0l1.2-2.6.2-.5-3.9.1z"
                    }
                }), a("g", {
                    staticClass: "dino-headphone"
                }, [a("path", {
                    attrs: {
                        fill: "#ff0110",
                        d: "M71.5 28.1l.6-3.5-6.2-.6-.9 3.8 6.5.3z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ff0110",
                        d: "M61.1 35.1c0 7.9 6.3 8 8.5 8 3.5 0 4.1-3.6 4.1-8s-.6-8-4.1-8c-4.1 0-8.5.9-8.5 8z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ff5153",
                        d: "M63.8 35.1c0 4.5 2.3 8 5.8 8 3 0 6.3-3.6 6.3-8s-2.8-8-6.3-8-5.8 3.5-5.8 8z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ff5153",
                        d: "M33.4 15.7c-.4-.4-.4-.7-.3-1.2 2.1-12.1 24.2-7.2 34-3.8 8.3 3 6.7 11 5.8 14-.2.7-.9 1.1-1.5 1l-4.4-.3h-.7c-.9-.1-1.6-1-1.3-1.9.5-1.4 1-3.4 1.2-5.4.2-2.6-.4-5.1-3-5.9-5.7-1.6-24-7.1-27.2 2.8 0 0-.8.2-1.4.3-.5.2-1.2.4-1.2.4z"
                    }
                }), a("path", {
                    staticClass: "dino-sounds",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        fill: "none",
                        stroke: "#fff",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        d: "M76.5 32.5c2.1-1.8 4.4-3.5 6.7-4.9m-10 .5c.7-1.7.8-7.1-.6-8.6m4.6 18.7c2.5-.4 2 .1 2 2.3 2-.8 5.4.3 7.2 1.8m-11.6.8c-4 3.8 3.6 1.8 3 4.3-.3.9-2.5 1.4-2.4 2.5.7.8 1.7 1.2 2.8 1.3"
                    }
                })]), a("g", {
                    staticClass: "dino-eye"
                }, [a("circle", {
                    attrs: {
                        cx: "53",
                        cy: "40.3",
                        r: "2.8",
                        fill: "#0051ff"
                    }
                }), a("circle", {
                    staticClass: "dino-bright",
                    attrs: {
                        cx: "53.7",
                        cy: "38.7",
                        r: ".7",
                        fill: "#e7edf1"
                    }
                })]), a("g", {
                    staticClass: "dino-front-hair"
                }, [a("path", {
                    attrs: {
                        fill: "#002c58",
                        d: "M34.8 15.3c-.3-.6-2.8-4.8-4.4-3.7-1.5 1.1-.9 4.8-.8 5.6 1.7-.8 3.4-1.4 5.2-1.9z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#002c58",
                        d: "M42.2 14.2c-.5-1.1-3.2-6.6-4.8-6-1.4.5-2.1 5.1-2.4 7.1 2.3-.6 4.8-1 7.2-1.1z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#002c58",
                        d: "M50.8 14.4c-.2-1.4-2-9.4-4.2-9.4-2.3 0-4.1 8-4.3 9.2 2.9-.2 5.8-.1 8.5.2z"
                    }
                })])]), a("g", {
                    staticClass: "dino-r-leg"
                }, [a("path", {
                    attrs: {
                        fill: "#ab63d6",
                        d: "M67.4 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6h8.4c.8.1 1.4-.5 1.3-1.3z"
                    }
                })]), a("g", {
                    staticClass: "dino-r-arm"
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#ae71db",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "5.138",
                        d: "M64.8 59.4s4.1 6.6-.6 8.3c-4.8 1.6-9-.3-11.5-3.3"
                    }
                })])])]), a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "astro",
                        viewBox: "0 0 100 100",
                        "aria-labelledby": "astroDesc"
                    }
                }, [a("desc", {
                    attrs: {
                        id: "astroDesc"
                    }
                }, [t._v("An astronaut in a purple space suit, floating in space trying to reach for his\n                    coffee cup\n                ")]), a("g", {
                    staticClass: "astro-astro"
                }, [a("g", {
                    staticClass: "astro-tube"
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#e2f1f7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "5.061",
                        d: "M62.3 58.8s10.4 3.6 14.5-8.1-8.6-18.4-8.6-18.4"
                    }
                })]), a("g", {
                    staticClass: "astro-l-arm"
                }, [a("path", {
                    attrs: {
                        fill: "#8b55bb",
                        d: "M34.4,58.8L16.7,45.3c-1.2-0.9-1.4-2.6-0.5-3.8l4.3-5.7c0.9-1.2,2.6-1.4,3.8-0.5L42,48.8 C42,48.8,34.4,58.8,34.4,58.8z"
                    }
                })]), a("g", {
                    staticClass: "astro-l-leg"
                }, [a("path", {
                    attrs: {
                        fill: "#8b55bb",
                        d: "M38.9 76.7L18.3 91.4c-1.2.9-2.9.6-3.8-.6L8 81.7c-.9-1.2-.6-2.9.6-3.8l20.6-14.8c3.7-2.7 9-1.8 11.6 1.9 2.7 3.8 1.8 9-1.9 11.7z"
                    }
                })]), a("g", {
                    staticClass: "astro-head"
                }, [a("path", {
                    attrs: {
                        fill: "#a95ed4",
                        d: "M78.3 28.9c0 7.1-3.1 13.4-8 17.8-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6-3-4-4.7-8.9-4.7-14.2C30.5 15.7 41.2 5 54.4 5s23.9 10.7 23.9 23.9z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#563388",
                        d: "M70.3 46.7c-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6 4.4-3.1 9.7-4.9 15.5-4.9 7.7 0 14.7 3.3 19.6 8.5z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#170609",
                        d: "M32.4 28.8c-.4-7.3 3.8-15.3 11.5-18.3s21-1.2 23.4 9.5c2.4 10.7-7.8 10.9-17 11.8-9.2.9-17.2 9.6-17.9-3z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M46.8 14.2c4.7-1 9.1-.8 12.3.3 0-.5-.7-1.2-2.6-1.8-12-3.8-20.8 6.9-20.8 6.9h.1c2.4-2.4 6.4-4.4 11-5.4z"
                    }
                })]), a("g", {
                    staticClass: "astro-body"
                }, [a("path", {
                    attrs: {
                        fill: "#a95ed4",
                        d: "M68.9 61.3c.2-1.5 1.3-2.8 2.8-3.1l19.2-4c1.1-.2 1.8-1.3 1.6-2.5l-1.9-8.6c-.2-1.1-1.3-1.8-2.5-1.6L67.6 46c-18.6-13.4-40.9.7-40.1 19 .8 21 38.6 25.8 41.4-3.7z"
                    }
                })]), a("g", {
                    staticClass: "astro-r-leg"
                }, [a("path", {
                    attrs: {
                        fill: "#a95ed4",
                        d: "M44.4 75.9l-8.5 17.6c-.7 1.4-2.3 1.9-3.6 1.3l-10.1-4.9c-1.4-.7-1.9-2.3-1.3-3.6l8.5-17.6c2-4.1 7-5.9 11.1-3.9 4.2 2 5.9 7 3.9 11.1z"
                    }
                })])])]), a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "coffee",
                        viewBox: "0 0 20 20"
                    }
                }, [a("g", {
                    staticClass: "coffee-coffee"
                }, [a("path", {
                    staticClass: "coffee-cup",
                    attrs: {
                        fill: "#7b4dad",
                        d: "M17.8 5.5c-.5-.3-1.1-.3-1.6-.1v-.2c-.1-.6-.2-2.6-8-1.4S.9 7 1 7.7c.4 2.7 2.4 5.7 5.2 6.9 0 .2 0 .3.1.5.2 1.1 1.9 1.6 3.9 1.3 2-.3 3.4-1.3 3.2-2.4 0-.2-.1-.4-.1-.5.7-.6 1.3-1.4 1.7-2.2.2.1.4.3.6.4.3.2.7.2 1 .2.8-.1 1.6-.9 2.1-2.1.6-2 .3-3.7-.9-4.3zm-.1 3.7c-.4 1.1-1.2 1.7-1.8 1.4-.2-.1-.3-.2-.4-.3.5-1.2.8-2.4.8-3.6.2-.1.4-.2.5-.2.2 0 .4 0 .5.1.7.3.8 1.4.4 2.6z"
                    }
                }), a("path", {
                    staticClass: "coffee-liquid",
                    attrs: {
                        fill: "#3e1e00",
                        d: "M8.4 4.9C5 5.4 2.4 6.4 2.5 7c.1.7 2.9.8 6.2.3 3.3-.5 6-1.5 5.9-2.2s-2.9-.7-6.2-.2z"
                    }
                })])]), t.viewport.is1024 ? t._e() : a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "filomena",
                        viewBox: "0 0 100 100",
                        "aria-labelledby": "filomenaDesc"
                    }
                }, [a("desc", {
                    attrs: {
                        id: "filomenaDesc"
                    }
                }, [t._v("A calm orange shrimp, with a smile on her face, swimming with her little\n                    legs\n                ")]), a("g", {
                    staticClass: "filomena-filomena"
                }, [a("g", {
                    staticClass: "filomena-back-skirt"
                }, [a("path", {
                    attrs: {
                        fill: "#00979d"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "3s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M53.5 75.5c2.6 8.1-31.3 13.1-37.1-.4-2-4.8 36.5-1.5 37.1.4z;\n                                 M44.3 75.2c-5.7 13.5-39.6 8.5-37.1.4.7-2 39.1-5.3 37.1-.4z;\n                                 M53.5 75.5c2.6 8.1-31.3 13.1-37.1-.4-2-4.8 36.5-1.5 37.1.4z;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n                                 0.455 0.03 0.515 0.955"
                    }
                })])]), a("path", {
                    staticClass: "filomena-l-foot",
                    attrs: {
                        fill: "#ff9360",
                        d: "M51.8 93.6l9.2-5.5c1.9-1.2 3.2-3.2 3.3-5.5l.3-8c0-.4-.6-.7-.9-.3L51.2 93c-.3.4.1.9.6.6z"
                    }
                }), a("path", {
                    staticClass: "filomena-l-arm",
                    attrs: {
                        fill: "#ff5d39",
                        d: "M45.9 56.3c-.2.1-.1.4.2.3l27-8.9c.3-.1.2-.5-.1-.5l-11.8.1-15.3 9z"
                    }
                }), a("path", {
                    staticClass: "filomena-l-mustache",
                    attrs: {
                        fill: "none",
                        stroke: "#ff5d39",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.09"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "3s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M28.1 18.2c12.8 32.6 53-23 64.7 2.6 3.6 8 0 23.6-16.2 20.2;\n                             M28.1 31.4C51.5 8 81.1-1.6 92.8 24c3.6 8 0 20.3-16.2 16.9;\n                             M28.1 18.2c12.8 32.6 53-23 64.7 2.6 3.6 8 0 23.6-16.2 20.2;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n                                 0.455 0.03 0.515 0.955"
                    }
                })]), a("g", {
                    staticClass: "filomena-body"
                }, [a("path", {
                    attrs: {
                        fill: "#ff6d42",
                        d: "M51.8 91c-3.6 0-8.9-5.2-11.9-12.1-4.9-11.5 3.8-17.7 15.2-23.6 4.7-2.4 10.2-7.1 14.5-9.3 17.7-9 16.2-26.7 14.9-26-1.9 1-11.9 6.1-22.8 11.7l2.9-3.2c.1-.1 0-.1-.1-.1l-14.9 9.3c-5.9 3.1-11.3 5.8-14.6 7.5-9.7 5-12.6 15.2-13.1 18.5-.5 3.3-.5 6.3.1 9.3 1.9 10.4 9.9 17 12.1 18.2 8.3 4.6 14.2 3.9 17.7 3.9 4-.1 3.4-4.1 0-4.1z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ff9360",
                        d: "M47 59.8c-2.5-3.9-4.5-12.4-5.5-17.9C43.2 41 45 40 47 39.1c3.8 5.9 10.8 9.2 18.6 9.3-3.4 2.3-7.1 5.2-10.5 6.9-2.9 1.3-5.7 2.9-8.1 4.5z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ff9360",
                        d: "M40.9 65.5c-1.6 2.2-2.5 4.6-2.4 7.4-4.4-.6-12.6-8.5-15.9-11.8 1.1-3.9 3.8-10 9.7-14.1 1.3 5.6 3.8 14.3 8.6 18.5z"
                    }
                })]), a("path", {
                    staticClass: "filomena-face",
                    attrs: {
                        fill: "none",
                        stroke: "#000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": ".545",
                        d: "M61.2 35.7c.4.9 1.5 1.3 2.5.9s1.3-1.5.9-2.5m2-1c.4.9 1.5 1.3 2.5.9.9-.4 1.3-1.5.9-2.5m4.6 3.5c.3.6 1 .8 1.6.5.6-.3.8-1 .5-1.6"
                    }
                }), a("path", {
                    staticClass: "filomena-r-mustache",
                    attrs: {
                        fill: "none",
                        stroke: "#ff9461",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.09"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "3.4s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M18.9 34C37 15.9 92.5-14.6 92.5 22.6c0 12.2-9.3 18.4-18.4 18.4;\n                             M18.9 24.6c25.9 28.5 73.7-39.2 73.7-2 0 12.2-9.3 18.4-18.4 18.4;\n                             M18.9 34C37 15.9 92.5-14.6 92.5 22.6c0 12.2-9.3 18.4-18.4 18.4;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n                                 0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "filomena-r-arm",
                    attrs: {
                        fill: "#ff9360",
                        d: "M45.7 60.1c-.2.1-.1.4.2.3l27-8.9c.3-.1.2-.5-.1-.5H61l-15.3 9.1z"
                    }
                }), a("g", {
                    staticClass: "filomena-skirt"
                }, [a("path", {
                    attrs: {
                        fill: "#00C8CA"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "3s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M29.3 49.3S8.4 61.4 16.7 75.7c2.5 4.3 7.9 5.7 12.9 5.7 6.4 0 20.4-7.6 23.9-5.7-.2-1.4-2.6-2.8-4.7-3.1-2-.3-5.9-.2-7.4-1.9-2.3-2.5.4-6.3.4-6.3L29.3 49.3z;\n                                 M29.3 49.3S-.8 63.4 7.4 77.6c4.9-6.4 16.5 2.7 24.8 2.7 6.4 0 9.7-1.6 12-4.5.9-1.6-.1-3.6-1.1-5.1-1.1-1.7-2.6-3.3-2.1-4.6.3-.8.9-1.8.9-1.8l-12.6-15z;\n                                 M29.3 49.3S8.4 61.4 16.7 75.7c2.5 4.3 7.9 5.7 12.9 5.7 6.4 0 20.4-7.6 23.9-5.7-.2-1.4-2.6-2.8-4.7-3.1-2-.3-5.9-.2-7.4-1.9-2.3-2.5.4-6.3.4-6.3L29.3 49.3z;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n                                 0.455 0.03 0.515 0.955"
                    }
                })])]), a("path", {
                    staticClass: "filomena-r-foot",
                    attrs: {
                        fill: "#ff6d42",
                        d: "M72.3 71.7c-5.6 4.9-15.6 14.7-20.6 19.9-1.1 1.2-.7 3.7 1.3 3.2 4-.9 9.3-3.7 14.3-8.6 4.5-4.4 4.9-10.2 5.9-13.9.2-.6-.5-1-.9-.6z"
                    }
                })])]), t.viewport.is1024 ? t._e() : a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "octo",
                        viewBox: "0 0 100 100",
                        "aria-labelledby": "octoDesc"
                    }
                }, [a("desc", {
                    attrs: {
                        id: "octoDesc"
                    }
                }, [t._v("A green one-eyed octopus, smiling and swimming around with his little\n                    tentacles\n                ")]), a("g", {
                    staticClass: "octo-octo"
                }, [a("path", {
                    staticClass: "octo-arm-6",
                    attrs: {
                        fill: "none",
                        stroke: "#00c7c7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.301"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1.01s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M27.4 44s6.3 13.4 14 1.8;\n             M27.4 77.2s6.3-19.8 14-31.4;\n             M27.4 44s6.3 13.4 14 1.8;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n             0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "octo-arm-5",
                    attrs: {
                        fill: "none",
                        stroke: "#00c7c7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.301"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M27.4 50.8s9.3 11.4 17.6-.9;\n             M32.1 86.8s4.5-24.6 12.8-36.9;\n             M27.4 50.8s9.3 11.4 17.6-.9;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n             0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "octo-arm-4",
                    attrs: {
                        fill: "none",
                        stroke: "#00c7c7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.301"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1.02s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M34.2 56.9s10.5 9.2 14.6-4.7;\n             M40.3 92.7s4.4-26.6 8.6-40.5;\n             M34.2 56.9s10.5 9.2 14.6-4.7;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n             0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "octo-arm-3",
                    attrs: {
                        fill: "none",
                        stroke: "#00c7c7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.301"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: ".99s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M72.8 51.9s-11.4 10.8-14.7-2.7;\n             M62.6 86.8s-1.2-24.1-4.5-37.6;\n             M72.8 51.9s-11.4 10.8-14.7-2.7",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n             0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "octo-arm-2",
                    attrs: {
                        fill: "none",
                        stroke: "#00c7c7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.301"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M68.7 57.5s-11.6 8.8-15.4-5.6;\n             M57 92.7s.1-26.4-3.7-40.8;\n             M68.7 57.5s-11.6 8.8-15.4-5.6;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n             0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "octo-arm-1",
                    attrs: {
                        fill: "none",
                        stroke: "#00c7c7",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "8.301"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1.03s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M58.7 65.5s-9.9 9.3-9.9-12.7;\n             M47.8 93.9s1.1-19.1 1.1-41.1;\n             M58.7 65.5s-9.9 9.3-9.9-12.7;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n             0.455 0.03 0.515 0.955"
                    }
                })]), a("g", {
                    staticClass: "octo-head"
                }, [a("ellipse", {
                    attrs: {
                        cx: "54.1",
                        cy: "31.9",
                        fill: "#00c7c7",
                        rx: "25.7",
                        ry: "23.6",
                        transform: "rotate(-78.217 54.138 31.903)"
                    }
                }), a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#004e88",
                        "stroke-linecap": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.038",
                        d: "M60.2 45.3c-.7 3.3-5 5.3-9.5 4.3-4.6-.9-7.7-4.5-7.1-7.8"
                    }
                }), a("g", {
                    staticClass: "octo-eye"
                }, [a("ellipse", {
                    attrs: {
                        cx: "54.5",
                        cy: "30.6",
                        fill: "#fff",
                        rx: "12.2",
                        ry: "11.7",
                        transform: "rotate(-78.217 54.504 30.64)"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "54.5",
                        cy: "30.9",
                        fill: "#003456",
                        rx: "4.5",
                        ry: "4.3",
                        transform: "rotate(-78.217 54.49 30.873)"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "57",
                        cy: "29.9",
                        fill: "#fff",
                        rx: "1.1",
                        ry: "1.1"
                    }
                })])])])]), t.viewport.is768 ? t._e() : a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "et",
                        viewBox: "0 0 100 200",
                        "aria-labelledby": "etDesc"
                    }
                }, [a("desc", {
                    attrs: {
                        id: "etDesc"
                    }
                }, [t._v("A little green alien, flying around in its purple spaceship")]), a("linearGradient", {
                    attrs: {
                        id: "etLight",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%"
                    }
                }, [a("stop", {
                    attrs: {
                        offset: "0%",
                        "stop-color": "#f00",
                        "stop-opacity": ".75"
                    }
                }), a("stop", {
                    attrs: {
                        offset: "100%",
                        "stop-color": "#f00",
                        "stop-opacity": "0"
                    }
                })], 1), a("linearGradient", {
                    attrs: {
                        id: "etLight2",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%"
                    }
                }, [a("stop", {
                    attrs: {
                        offset: "0%",
                        "stop-color": "#0ff",
                        "stop-opacity": ".75"
                    }
                }), a("stop", {
                    attrs: {
                        offset: "100%",
                        "stop-color": "#0ff",
                        "stop-opacity": "0"
                    }
                })], 1), a("g", {
                    staticClass: "et-et"
                }, [a("g", {
                    staticClass: "et-light"
                }, [a("path", {
                    attrs: {
                        fill: "url(#etLight2)",
                        d: "M50 12.5L0 191.6h100L50 12.5z"
                    }
                })]), a("g", {
                    staticClass: "et-ship"
                }, [a("path", {
                    attrs: {
                        fill: "#5f1b9a",
                        d: "M60.7 20.2c.1-2.4-5-5.2-10.4-5.3s-10.7 2-10.8 4.5c0 1.4 1.5 3.2 3.9 4.5l-.1 2.5c0 .1.1.3.3.3H45c.1 0 .3-.1.3-.3l.1-1.7c1.4.5 2.9.9 4.5.9 1.7.1 3.4-.2 4.9-.7l-.1 1.7c0 .1.1.3.3.3h1.4c.1 0 .3-.1.3-.3l.1-2.5c2.3-1 3.9-2.5 3.9-3.9z"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "50.3",
                        cy: "17.2",
                        fill: "#a95ed4",
                        rx: "11.8",
                        ry: "6.8"
                    }
                }), a("g", {
                    staticClass: "et-body"
                }, [a("path", {
                    attrs: {
                        fill: "#00b1e5",
                        d: "M50.2 19.7c1.6.1 3.1-.2 4.3-.8 0-.1 0-.2.1-.4l.2-5.9c.1-2.3-1.8-4.3-4.2-4.4-2.4-.1-4.4 1.8-4.5 4.1l-.2 5.9v.5c1.2.8 2.7 1 4.3 1z"
                    }
                }), a("g", {
                    staticClass: "et-eye"
                }, [a("ellipse", {
                    attrs: {
                        cx: "50.4",
                        cy: "13.3",
                        fill: "#fff",
                        rx: "2.5",
                        ry: "2.5"
                    }
                }), a("ellipse", {
                    attrs: {
                        cx: "50.4",
                        cy: "13.3",
                        fill: "#004e88",
                        rx: "1",
                        ry: "1"
                    }
                })])])])])], 1), t.viewport.is568 ? t._e() : a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "zen",
                        viewBox: "0 0 100 100",
                        "aria-labelledby": "zenDesc"
                    }
                }, [a("desc", {
                    attrs: {
                        id: "zenDesc"
                    }
                }, [t._v("A white-bearded monk meditating quietly")]), a("g", {
                    staticClass: "zen-zen"
                }, [a("g", {
                    staticClass: "zen-legs"
                }, [a("path", {
                    staticClass: "zen-l-leg",
                    attrs: {
                        fill: "none",
                        stroke: "#ffae00",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "7.213",
                        d: "M34.4 90s8.1-.4 13.8-5.3"
                    }
                }), a("path", {
                    staticClass: "zen-r-leg",
                    attrs: {
                        fill: "none",
                        stroke: "#ffae00",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "7.213",
                        d: "M65.5 90s-8.1-.4-13.8-5.3"
                    }
                })]), a("g", {
                    staticClass: "zen-arms"
                }, [a("path", {
                    staticClass: "zen-l-arm",
                    attrs: {
                        fill: "none",
                        stroke: "#ffae00",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "5.246",
                        d: "M32.8 66.1s-6.4 5.2-10.6-2"
                    }
                }), a("path", {
                    staticClass: "zen-r-arm",
                    attrs: {
                        fill: "none",
                        stroke: "#ffae00",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "5.246",
                        d: "M66.8 66.1s6.4 5.2 10.6-2"
                    }
                })]), a("path", {
                    staticClass: "zen-body",
                    attrs: {
                        fill: "#0cc",
                        d: "M28.8 64.4c-.7 1.9-.5 3.9 4.4 5.4 0 0-1.3 7.7 2.4 11.9 0 0-2.6 2.2-3.7 4.7-1 2.2 15.1-.4 18.2-1 3.9.7 18.9 3.2 17.9 1-1.1-2.5-3.7-4.7-3.7-4.7 3.7-4.2 2.4-11.9 2.4-11.9 4.9-1.5 5.2-3.5 4.5-5.4-1.6-4.1-11.4-7-20.7-7-9.3.1-20.1 3-21.7 7z"
                    }
                }), a("g", {
                    staticClass: "zen-head"
                }, [a("path", {
                    attrs: {
                        fill: "#ffae00",
                        d: "M27.2 34.4c2.8 0 5 2.3 5 5.2s-2.3 5.2-5 5.2-5-2.3-5-5.2 2.2-5.2 5-5.2z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ffae00",
                        d: "M72.8 34.4c2.8 0 5 2.3 5 5.2s-2.3 5.2-5 5.2-5-2.3-5-5.2 2.1-5.2 5-5.2z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M50 10c13.1 0 23.8 12.9 23.8 28.8S63.2 67.6 50 67.6 26.2 54.7 26.2 38.8 36.9 10 50 10z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#ffae00",
                        d: "M50 14.9c11.9 0 21.6 10.4 21.6 23.3S62 61.5 50 61.5 28.4 51.2 28.4 38.3 38.1 14.9 50 14.9z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M50 47.4c7.5 0 13.5 6 13.5 13.5V66c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5v-5.1c-.1-7.5 6-13.5 13.5-13.5z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M50.1 11.8c4.8 0 8.6-1.6 8.6 3.2v5.7c0 4.8-3.9 8.7-8.7 8.7-4.8 0-8.7-3.9-8.7-8.7V15c0-4.7 4-3.2 8.8-3.2z"
                    }
                }), a("g", {
                    staticClass: "zen-mustache"
                }, [a("path", {
                    staticClass: "zen-r-mustache_1_",
                    attrs: {
                        fill: "#c2e3ed",
                        d: "M50.5 45.8s-1 7.8 6.5 7.8h8s1-7.5-6-7.5-8.5-.3-8.5-.3z"
                    }
                }), a("path", {
                    staticClass: "zen-l-mustache",
                    attrs: {
                        fill: "#c2e3ed",
                        d: "M49.3 45.8s.9 7.8-6.4 7.8h-8s-1-7.5 6-7.5c6.9 0 8.4-.3 8.4-.3z"
                    }
                })]), a("path", {
                    staticClass: "zen-nose",
                    attrs: {
                        fill: "#ff3e4b",
                        d: "M53.3 44.3c0 1.8-1.4 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.8 3.3-7.3 3.3-7.3s3.3 5.5 3.3 7.3z"
                    }
                }), a("g", {
                    staticClass: "zen-eyes"
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#003359",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.312",
                        d: "M39.3 35.2c1 .9 2.4 1.4 3.9 1.4 1.4 0 2.8-.5 3.8-1.4"
                    }
                }), a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#003359",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.312",
                        d: "M53 35.2c1 .9 2.4 1.4 3.9 1.4 1.4 0 2.8-.5 3.8-1.4"
                    }
                })])])])]), a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "open",
                        viewBox: "0 0 100 100"
                    }
                }, [a("g", {
                    staticClass: "open-open"
                }, [a("path", {
                    attrs: {
                        fill: "var(--purple)",
                        d: "M90 70.2l-2-44.1c-.5-9.3-8.4-16.5-17.8-16.1l-44.1 2c-9.3.5-16.5 8.4-16.1 17.8l2 44.1c.4 9.3 8.4 16.6 17.7 16.1l44.1-2c9.4-.5 16.6-8.4 16.2-17.8z"
                    }
                })])]), a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "smart",
                        viewBox: "0 0 100 100"
                    }
                }, [a("g", {
                    staticClass: "smart-smart"
                }, [a("path", {
                    attrs: {
                        fill: "var(--purple)",
                        d: "M80.1 39.2L34.2 11.9c-8.8-5.2-19.9 1-20.1 11.2l-.7 53.4c-.1 10.2 10.8 16.7 19.8 11.8l46.6-26.1c8.9-5 9.1-17.8.3-23z"
                    }
                })])])])]), t._m(1), t._m(2)], 1)
            },
            Z = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-big"
                }, [t._v("\n                    so um ive been working on "), a("b", {
                    staticClass: "-purple"
                }, [t._v("projects with lua and python, such as ")]), t._v(""), a("a", {
                    staticClass: "-purple",
                    attrs: {
                        href: "https://github.com/0x3van/GCSpeedrunBot-Revisited",
                        target: "_blank",
                        title: "Visit Biz Commerce's website"
                    }
                }, [t._v("the GCSpeedrunBot.")]), t._v(".\n                ")]), a("p", [t._v("\n                    a quick bot that i wrote that calculates precisely you work on a document and reports on the time you spent on your work"), a("a", {
                    staticClass: "disguised-link",
                    attrs: {
                        href: "",
                        target: "",
                        title: ""
                    }
                }, [t._v("")]), t._v(".\n                ")])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "biz2"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", [a("span", {
                    staticClass: "-big"
                }, [t._v("you can check out other projects i work at on "), a("span", {
                    staticClass: "-purple"
                }, [t._v("my github")]), t._v(",")]), t._v("\n                    ./0x3van \n                ")])])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "biz3"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", [t._v("\n                    my other project is trollface security\n                    "), a("span", {
                    staticClass: "-big"
                }, [a("span", {
                    staticClass: "-purple"
                }, [t._v("a")]), t._v(" little look on sanitization bypassing and other "), a("span", {
                    staticClass: "-purple"
                }, [t._v("cybersecurity trollage")]), t._v(".\n                    ")])])])])])
            }],
            Q = {
                name: "Biz",
                props: {
                    viewport: Object
                },
                components: {
                    Titles: Y
                }
            },
            U = Q,
            J = Object(m["a"])(U, X, Z, !1, null, null, null),
            K = J.exports,
            tt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("Titles", {
                    attrs: {
                        viewport: t.viewport,
                        scene: "earlyTitle"
                    }
                }, [t.viewport.is568 ? a("h1", {
                    staticClass: "title"
                }, [t._v("\n            videogames"), a("br"), t._v("\n            ("), a("span", {
                    staticClass: "params"
                }, [t._v("Instance.new()")]), t._v(")\n        ")]) : a("h1", {
                    staticClass: "title"
                }, [t._v("\n            videogames("), a("span", {
                    staticClass: "params"
                }, [t._v(".Instance.new()")]), t._v(")\n        ")]), a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-gray"
                }, [t._v("-- a look at videogames???? holy shid??")])]), a("div", {
                    staticClass: "clouds cloud-1"
                }), a("div", {
                    staticClass: "pepe bg-head"
                }, [a("div", {
                    staticClass: "blink"
                }), a("div", {
                    staticClass: "keyboard"
                }), a("div", {
                    staticClass: "minas"
                }), a("div", {
                    staticClass: "rio"
                }, [a("div", {
                    staticClass: "particles"
                }), a("div", {
                    staticClass: "vase"
                }, [a("div", {
                    staticClass: "bg-rio_vase_foliage_3"
                }), a("div", {
                    staticClass: "bg-rio_vase_foliage_2"
                }), a("div", {
                    staticClass: "bg-rio_vase_foliage_1"
                }), a("div", {
                    staticClass: "bg-rio_vase"
                })]), a("div", {
                    staticClass: "bg-rio_pao_cristo"
                }), a("div", {
                    staticClass: "waterfall"
                }), a("div", {
                    staticClass: "bg-rio_palmtree_1"
                }), a("div", {
                    staticClass: "bg-rio_palmtree_2"
                })]), a("div", {
                    staticClass: "am-pa"
                }, [a("div", {
                    staticClass: "bg-ampa_foliage_3"
                }), a("div", {
                    staticClass: "bg-ampa_tree_2"
                }), a("div", {
                    staticClass: "bg-ampa_foliage_2"
                }), a("div", {
                    staticClass: "bg-ampa_parrot_wing"
                }), a("div", {
                    staticClass: "bg-ampa_foliage_1"
                }), a("div", {
                    staticClass: "bg-ampa_ver_o_peso"
                }), a("div", {
                    staticClass: "bg-ampa_tree_1"
                }), a("div", {
                    staticClass: "bg-ampa_oxes"
                })]), a("div", {
                    staticClass: "metals"
                }, [a("div", {
                    staticClass: "bg-metals_sax"
                }), a("div", {
                    staticClass: "bg-metals_trumpet"
                }), a("div", {
                    staticClass: "bg-metals_trombone"
                }, [a("div", {
                    staticClass: "bg-metals_trombone_thing"
                })])]), a("div", {
                    staticClass: "bonfim-church"
                }), a("div", {
                    staticClass: "bonfim b1"
                }), a("div", {
                    staticClass: "ear bg-head-ear"
                })]), a("div", {
                    staticClass: "clouds cloud-2"
                }), a("div", {
                    staticClass: "clouds cloud-3"
                }), a("div", {
                    staticClass: "pepe-scenery",
                    attrs: {
                        role: "img",
                        "aria-labelledby": "pepeDesc"
                    }
                }, [a("p", {
                    staticClass: "ariaLabel",
                    attrs: {
                        id: "pepeDesc"
                    }
                }, [t._v("A floating head carrying musical instruments in the ear, foliage\n                and monuments in the hair, flies over a greenish ocean during the sunset")]), a("div", {
                    staticClass: "sky"
                }), a("div", {
                    staticClass: "ocean"
                }, [a("div", {
                    staticClass: "sky-mask"
                }), a("div", {
                    staticClass: "ocean-waves w1"
                }), a("div", {
                    staticClass: "ocean-waves w2"
                })])])]), t._m(0), t._m(1), t._m(2)], 1)
            },
            et = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "early-days"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", [t._v("\n                    im pretty fond with fpses myself lol\n                ")]), a("p", {
                    staticClass: "-big"
                }, [t._v("\n                    in particular im a big half life and c&c fan, and finally"), a("br"), a("span", {
                    staticClass: "-purple"
                }, [t._v("battlefield.")])])])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "early-days2"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-big"
                }, [a("span", {
                    staticClass: "-purple"
                }, [t._v(" \n\n")]), t._v("most of my code derives from my initial experiences with bughunting. \n  "), a("span", {
                    staticClass: ""
                }, [t._v("")]), a("br"), a("span", {
                    staticClass: "-purple"
                }, [t._v("")]), t._v(""), a("span", {
                    staticClass: "-purple"
                }, [t._v("I've been developing ROBLOX exploits and investigating vulnerabilities on the website aswell.")])]), a("p", [t._v("\n                    \n                    "), a("b", {
                    staticClass: "-purple"
                }, [t._v("+")]), t._v(" sidenote to viewers: im a bit of an edgelord piece of shit myself "), a("b", {
                    staticClass: "-purple"
                }, [t._v("")]), t._v(""), a("br")])])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "early-days3"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", [t._v("\n                   "), a("br"), t._v("\n                    \n                    "), a("span", {
                    staticClass: "-big"
                }, [a("i", [t._v("")]), t._v("after learning lua and python, i began learning"), a("i", [t._v(" Typescript,")]), t._v(""), a("span", [t._v(" from tsc, constructor classes to transpilation, i learnt javascript in the process.")])]), t._v("\n                    \n                ")])])])])
            }],
            at = {
                props: {
                    viewport: Object
                },
                name: "EarlyDays",
                components: {
                    Titles: Y
                }
            },
            st = at,
            it = Object(m["a"])(st, tt, et, !1, null, null, null),
            rt = it.exports,
            ot = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            nt = [function () {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "Mario",
                        role: "img",
                        "aria-labelledby": "marioDesc"
                    }
                }, [s("p", {
                    staticClass: "ariaLabel",
                    attrs: {
                        id: "marioDesc"
                    }
                }, [t._v("Three boxes with a question mark, from the Super Mario Bros game, are\n        standing in the center of the screen ... try to find the coin in one of them by using the numbers 1, 2,\n        and 3 on your keyboard!")]), s("div", {
                    staticClass: "container"
                }, [s("audio", {
                    staticClass: "bgm",
                    attrs: {
                        id: "mario-start"
                    }
                }, [s("source", {
                    attrs: {
                        src: a("af89"),
                        type: "audio/ogg"
                    }
                })]), s("audio", {
                    staticClass: "bgm",
                    attrs: {
                        id: "mario-stomp"
                    }
                }, [s("source", {
                    attrs: {
                        src: a("ca6b"),
                        type: "audio/ogg"
                    }
                })]), s("audio", {
                    staticClass: "bgm",
                    attrs: {
                        id: "mario-empty"
                    }
                }, [s("source", {
                    attrs: {
                        src: a("1f12"),
                        type: "audio/ogg"
                    }
                })]), s("audio", {
                    staticClass: "bgm",
                    attrs: {
                        id: "mario-appears"
                    }
                }, [s("source", {
                    attrs: {
                        src: a("4cd5"),
                        type: "audio/ogg"
                    }
                })]), s("audio", {
                    staticClass: "bgm",
                    attrs: {
                        id: "mario-power-up"
                    }
                }, [s("source", {
                    attrs: {
                        src: a("911d"),
                        type: "audio/ogg"
                    }
                })]), s("audio", {
                    staticClass: "bgm",
                    attrs: {
                        id: "mario-exit"
                    }
                }, [s("source", {
                    attrs: {
                        src: a("b0c0"),
                        type: "audio/ogg"
                    }
                })]), s("div", {
                    staticClass: "mario-box b1"
                }, [s("div", {
                    staticClass: "in"
                })]), s("div", {
                    staticClass: "mario-box b2"
                }, [s("div", {
                    staticClass: "in"
                })]), s("div", {
                    staticClass: "mario-box b3"
                }, [s("div", {
                    staticClass: "in"
                })]), s("div", {
                    staticClass: "mario"
                })])])
            }],
            lt = {
                name: "SuperMario"
            },
            ct = lt,
            dt = Object(m["a"])(ct, ot, nt, !1, null, null, null),
            ut = dt.exports,
            pt = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            mt = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "Ghibli"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", [t._v("\n                    Before actually learning JS/TS and doing all this stupid shit, I was\n                    "), a("span", {
                    staticClass: "-big -purple"
                }, [t._v("\n                        very keen on Lua, specifically LuaU and its vulnerabilities, from metatable injection to beyond. \n                    ")]), t._v("\n                    \n                ")])])]), a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "sky"
                }, [a("div", {
                    staticClass: "cloud c1"
                }), a("div", {
                    staticClass: "cloud c2"
                })]), a("div", {
                    staticClass: "castle-container",
                    attrs: {
                        role: "",
                        "aria-labelledby": ""
                    }
                }, [a("p", {
                    staticClass: "ariaLabel",
                    attrs: {
                        id: ""
                    }
                }, [t._v("The castle of Howl's movie Moving Castle, flying over a green\n                    lawn and a blue sky.")]), a("div", {
                    staticClass: "castle"
                }, [a("div", {
                    staticClass: "top"
                }, [a("div", {
                    staticClass: "top-tower"
                }), a("div", {
                    staticClass: "top-clothes"
                }), a("div", {
                    staticClass: "top-top"
                })]), a("div", {
                    staticClass: "bucket"
                }), a("div", {
                    staticClass: "mouth"
                }, [a("div", {
                    staticClass: "back-lip"
                }), a("div", {
                    staticClass: "front-lip"
                })]), a("div", {
                    staticClass: "l-leg"
                }), a("div", {
                    staticClass: "r-leg"
                }), a("div", {
                    staticClass: "l-arm"
                }), a("div", {
                    staticClass: "body"
                }), a("div", {
                    staticClass: "fans"
                }, [a("div", {
                    staticClass: "fan2"
                }), a("div", {
                    staticClass: "fan1"
                }), a("div", {
                    staticClass: "fix-tail"
                })]), a("div", {
                    staticClass: "r-arm-holder"
                }, [a("div", {
                    staticClass: "r-arm"
                }), a("div", {
                    staticClass: "fix-shoulder"
                })]), a("div", {
                    staticClass: "ear"
                }), a("div", {
                    staticClass: ""
                }, [a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                })]), a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                }, [a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                })]), a("div", {
                    staticClass: ""
                })])]), a("div", {
                    staticClass: ""
                }), a("div", {
                    staticClass: ""
                })])]), a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "Ghibli2"
                    }
                }), a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: ""
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-big"
                }, [t._v("\n                    once i got into js/typescript"), a("br"), t._v("\n                    i began working on: \n "), a("span", {
                    staticClass: "-purple"
                }, [t._v("taking a deep dive on web security, from basic sanitization to more.")])]), a("p", [t._v("\n                    update: luarocks on top\n                                    ")])])])]), a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "Ghibli4"
                    }
                })])
            }],
            ht = {
                name: "Ghibli"
            },
            ft = ht,
            yt = Object(m["a"])(ft, pt, mt, !1, null, null, null),
            vt = yt.exports,
            gt = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            bt = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "wrapperTitle"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("h1", {
                    staticClass: "title"
                }, [t._v("\n            </end>\n        ")]), a("div", {
                    staticClass: "std"
                }, [a("p", {
                    staticClass: "-gray"
                }, [t._v("\n                /*"), a("br"), t._v("\n                - end)"), a("br"), a("span", {
                    staticClass: "-answer"
                }, [t._v("- *TODO: commit next 9/11")]), a("br"), t._v("\n                "), a("br"), a("span", {
                    staticClass: "-answer"
                }, [t._v("*/")]), a("br"), t._v("\n                "), a("br"), a("span", {
                    staticClass: "-answer"
                }, [t._v("")]), a("br"), t._v("\n                "), a("br"), t._v("\n                \n            ")])])])])
            }],
            wt = {
                name: "Wrapper"
            },
            Ct = wt,
            _t = Object(m["a"])(Ct, gt, bt, !1, null, null, null),
            kt = _t.exports,
            Pt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "scene",
                    attrs: {
                        id: "thanks"
                    }
                }, [a("div", {
                    staticClass: "static-container"
                }, [a("div", {
                    staticClass: "std"
                }, [a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "potion",
                        viewBox: "0 0 100 100"
                    }
                }, [a("g", {
                    staticClass: "potion-potion"
                }, [a("g", {
                    staticClass: "potion-vase"
                }, [a("g", {
                    staticClass: "potion-bottle"
                }, [a("path", {
                    attrs: {
                        fill: "#00c8c8",
                        d: "M55.6 23.2H44.8c-2.1 0-3.8-1.8-3.8-3.8l.1-6.4c0-1.6 1.4-3 3-3l12.6.1c1.6 0 3 1.4 3 3l-.1 6.4c-.3 2-2 3.7-4 3.7z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M64.7 25.8c0-.2.2-6.2.2-6.2.1-2.2-1.8-4.1-4-4l-20.4-.1c-2.2 0-4 1.8-4 4.1 0 0 .1 5.9 0 6.2C25.8 31 18.6 42 18.6 54.7 18.4 72.5 32.6 87 50.1 87c17.5.1 31.9-14.3 32-32.2.1-12.8-7-23.7-17.4-29zm10.1 28.8c-.1 13.7-11.1 24.7-24.6 24.7-13.5-.1-24.4-11.2-24.3-24.9S37 29.7 50.5 29.7c13.4.1 24.4 11.2 24.3 24.9z",
                        opacity: ".8"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#e8d7ef",
                        d: "M50.4 29.7c-13.5 0-24.5 11.1-24.6 24.7 0 13.7 10.8 24.9 24.3 24.9s24.5-11.1 24.6-24.7c.2-13.7-10.8-24.8-24.3-24.9z",
                        opacity: ".8"
                    }
                }), a("g", {
                    staticClass: "potion-liquids"
                }, [a("path", {
                    staticClass: "potion-liquid2",
                    attrs: {
                        fill: "#4612a5"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1.6s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;\n                     M73.5 50.4c-.9-4.8-1 5.3-4.4 5.9-11 2-19.7-6.3-36-3.9-5.5.8-6.6 3.3-6.1 6.3 2.3 12.7 14.6 21.3 27.4 19 12.9-2.2 21.4-14.4 19.1-27.3z;\n                     M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n                     0.455 0.03 0.515 0.955"
                    }
                })]), a("path", {
                    staticClass: "potion-liquid",
                    attrs: {
                        fill: "#5918df"
                    }
                }, [a("animate", {
                    attrs: {
                        dur: "1.4s",
                        repeatCount: "indefinite",
                        attributeName: "d",
                        values: "M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;\n                     M27.1 58.8c-.9-4.8 2.8 2.9 6.2 2.2 9.9-1.8 21.9-13.1 33-14.6 5.5-.7 6.6.9 7.1 3.9 2.3 12.7-6.2 25.1-19 27.4-12.7 2.5-24.9-6-27.3-18.9z;\n                     M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;",
                        calcMode: "spline",
                        keySplines: "0.455 0.03 0.515 0.955;\n                     0.455 0.03 0.515 0.955"
                    }
                })])])]), a("g", {
                    staticClass: "potion-drops"
                }, [a("ellipse", {
                    staticClass: "potion-drop2",
                    attrs: {
                        cx: "49.4",
                        cy: "37.5",
                        fill: "#5918df",
                        rx: "4.6",
                        ry: "4.6"
                    }
                }), a("ellipse", {
                    staticClass: "potion-drop",
                    attrs: {
                        cx: "59.8",
                        cy: "42",
                        fill: "#5918df",
                        rx: "2.8",
                        ry: "2.8"
                    }
                })])])])]), a("div", {
                    staticClass: "madeof"
                }, [a("p", {
                    staticClass: "-comment"
                }, [t._v("// Made with")]), a("div", {
                    staticClass: "cols"
                }, [t._m(0), t._m(1), a("ul", {
                    staticClass: "col songs"
                }, [a("li", {
                    staticClass: "ico"
                }, [a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16"
                    }
                }, [a("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "",
                        "clip-rule": "evenodd"
                    }
                })])]), t._m(2), t._m(3), t._m(4), t._m(5), t._m(6), t._m(7), t._m(8)])])]), t._m(9), a("p", {
                    staticClass: "-big"
                }, [t._v("\n                check out my github\n                "), a("router-link", {
                    staticClass: "-purple",
                    attrs: {
                        to: "/work",
                        title: "Work"
                    }
                }, [t._v("selected works")]), t._v("\n                for more details.\n            ")], 1)])])])
            },
            xt = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("ul", {
                    staticClass: "col"
                }, [a("li", {
                    staticClass: "ico"
                }, [t._v("</>")]), a("li", [t._v("vue.js")]), a("li", [t._v("gsap")]), a("li", [t._v("scrollmagic")]), a("li", [t._v("cocaine")]), a("li", [t._v("jquery, react and SVG sites")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("ul", {
                    staticClass: "col"
                }, [a("li", {
                    staticClass: "ico"
                }, [t._v("~")]), a("li", [t._v("72 files")]), a("li", [t._v("5MB")]), a("li", [t._v("")]), a("li", [t._v("")]), a("li", [t._v("")]), a("li", [t._v("")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: "bbng"
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "stop looking",
                        target: "_blank"
                    }
                }, [t._v("")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: ""
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "",
                        target: "_blank"
                    }
                }, [t._v("")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: ""
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "",
                        target: "_blank"
                    }
                }, [t._v("")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: ""
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "",
                        target: "_blank"
                    }
                }, [t._v("\n                                ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: ""
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "",
                        target: "_blank"
                    }
                }, [t._v("\n                                ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: ""
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "",
                        target: "_blank"
                    }
                }, [t._v("\n                                ")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("li", {
                    staticClass: "transa"
                }, [a("a", {
                    attrs: {
                        href: "",
                        title: "",
                        target: "_blank"
                    }
                }, [t._v("")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("p", [t._v("\n                placeholder.bmp"), a("br"), a("span", {
                    staticClass: "-comment"
                }, [t._v("// P.S. konami code")])])
            }],
            Mt = {
                name: "Thanks"
            },
            St = Mt,
            Ot = Object(m["a"])(St, Pt, xt, !1, null, null, null),
            zt = Ot.exports,
            Tt = {
                tl: null,
                build: function () {
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).to(".abiz-head", 2, {
                        transformOrigin: "50% 75%",
                        scale: 1.05,
                        yPercent: -5,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(".abiz-r-arm, .abiz-l-arm", 1.5, {
                        rotationZ: 5,
                        transformOrigin: "90% 0%",
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start").to("#magento", 2, {
                        yPercent: -20,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeOut
                    }).to(".abiz-magento-s", 2, {
                        scale: .7,
                        autoAlpha: .5,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeOut
                    }, "-=2")
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                }
            },
            Et = a("92a5"),
            Lt = a("c7e9"),
            At = {
                tl: null,
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                build: function () {
                    var t = document.querySelector(".et-et"),
                        e = document.querySelector(".et-ship"),
                        a = document.querySelector(".et-eye");
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.clear().addLabel("start", 0).to(e, .25, {
                        rotationZ: 5,
                        transformOrigin: "50% 75%",
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").fromTo(a, .05, {
                        scaleY: .1,
                        transformOrigin: "50% 50%"
                    }, {
                        scaleY: 1,
                        repeat: -1,
                        repeatDelay: 1.618
                    }, "start").to(t, 12, {
                        bezier: {
                            curviness: 1.25,
                            values: [{
                                xPercent: this.r(-100, 50),
                                yPercent: this.r(-40, 40),
                                rotationZ: this.r(15, 30)
                            }, {
                                xPercent: this.r(-100, 50),
                                yPercent: this.r(-40, 40),
                                rotationZ: this.r(-30, -15)
                            }, {
                                xPercent: this.r(-100, 50),
                                yPercent: this.r(-40, 40),
                                rotationZ: this.r(15, 30)
                            }, {
                                xPercent: this.r(-100, 50),
                                yPercent: this.r(-40, 40),
                                rotationZ: this.r(-30, -15)
                            }, {
                                xPercent: this.r(-100, 50),
                                yPercent: this.r(-40, 40),
                                rotationZ: this.r(15, 30)
                            }, {
                                xPercent: this.r(-100, 50),
                                yPercent: this.r(-40, 40),
                                rotationZ: this.r(-30, -15)
                            }],
                            autoRotate: !0
                        },
                        transformOrigin: "50% 5%",
                        ease: Power0.easeNone,
                        repeat: -1,
                        yoyo: !0
                    }, "start")
                }
            },
            qt = {
                tl: null,
                rhythm: .3,
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.querySelector(".dino-head"),
                        e = document.querySelector(".dino-l-arm"),
                        a = document.querySelector(".dino-r-arm"),
                        s = document.querySelector(".dino-l-leg"),
                        i = document.querySelector(".dino-r-leg"),
                        r = document.querySelector(".dino-tail"),
                        o = document.querySelector(".dino-eye"),
                        n = document.querySelector(".dino-headphone"),
                        l = document.querySelector(".dino-bright"),
                        c = document.querySelector("#dino .teeth1"),
                        d = document.querySelector("#dino .teeth2"),
                        u = document.querySelector("#dino .mouth-chillout"),
                        p = document.querySelector("#dino .mouth-fuck-yeah"),
                        m = Math.floor(4 * Math.random()) + 1,
                        h = null;
                    switch (m) {
                        case 1:
                            this.rhythm = .3, l.style.display = "none", c.style.display = "none", d.style.display = "none", u.style.display = "none", p.style.display = "", h = "https://open.spotify.com/track/2jvuMDqBK04WvCYYz5qjvG?si=J8VxjC6BR2Kg4Y6eXHqQCQ";
                            break;
                        case 2:
                            this.rhythm = 1, l.style.display = "none", c.style.display = "none", d.style.display = "none", u.style.display = "none", p.style.display = "", h = "https://open.spotify.com/track/32bJv8V2Xgi5mtxdPcsi8B?si=enqG9uk2Q6SYhhAZtRimGQ";
                            break;
                        case 3:
                            this.rhythm = .2, h = "https://open.spotify.com/playlist/37i9dQZF1DWWY64wDtewQt";
                            break;
                        case 4:
                            this.rhythm = .3, h = "https://open.spotify.com/album/5L0vaNLbzgP8RIJqs1zamE?highlight=spotify:track:648BMGrt98kUbLo24A4vgj";
                            break
                    }
                    document.querySelector(".dino-head").addEventListener("click", (function () {
                        window.open(h)
                    })), this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).to(s, this.rhythm, {
                        skewX: -20,
                        transformOrigin: "50% 100%",
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(i, this.rhythm, {
                        skewX: 20,
                        transformOrigin: "50% 100%",
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(n, this.rhythm / 2, {
                        scale: 1.1,
                        transformOrigin: "20% 20%",
                        repeat: -1,
                        yoyo: !0
                    }, "start").to([e, a], this.rhythm, {
                        yPercent: 20,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(r, this.rhythm, {
                        transformOrigin: "25% 50%",
                        rotationZ: 20,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start"), 2 === m ? this.tl.to(t, this.rhythm, {
                        transformOrigin: "85% 100%",
                        rotationZ: 8 * this.rhythm,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start") : this.tl.to(t, this.rhythm, {
                        transformOrigin: "85% 100%",
                        rotationZ: 32 * this.rhythm,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start"), m > 2 ? this.tl.fromTo(o, .01, {
                        scaleY: .1,
                        transformOrigin: "50% 50%"
                    }, {
                        scaleY: 1,
                        transformOrigin: "50% 50%",
                        repeat: -1,
                        yoyo: !0,
                        repeatDelay: 3
                    }, "start").fromTo(l, .01, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        repeat: -1,
                        yoyo: !0,
                        repeatDelay: 3
                    }, "start") : this.tl.set(o, {
                        scaleY: .1,
                        transformOrigin: "50% 50%"
                    }, "start")
                }
            },
            It = {
                tl: null,
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.querySelector(".filomena-filomena"),
                        e = document.querySelector(".filomena-skirt"),
                        a = document.querySelector(".filomena-back-skirt"),
                        s = document.querySelector(".filomena-l-foot"),
                        i = document.querySelector(".filomena-r-foot"),
                        r = document.querySelector(".filomena-l-arm"),
                        o = document.querySelector(".filomena-r-arm");
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start").to([e, a], 3, {
                        skewY: -.5,
                        skewX: .5,
                        transformOrigin: "50% 0%",
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }).to(s, 2, {
                        transformOrigin: "1% 99%",
                        rotation: 80,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start").to(i, 2, {
                        transformOrigin: "1% 99%",
                        yPercent: -7,
                        rotation: 50,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "-=1.9").to(r, .6, {
                        transformOrigin: "20% 50%",
                        skewY: 20,
                        yPercent: -10,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start").to(o, .5, {
                        transformOrigin: "20% 50%",
                        skewY: 20,
                        yPercent: -20,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start").to(t, 10, {
                        bezier: {
                            curviness: 1.25,
                            values: [{
                                yPercent: this.r(-50, -15),
                                xPercent: this.r(-30, 30),
                                rotation: this.r(-40, -20)
                            }, {
                                yPercent: this.r(-50, -15),
                                xPercent: this.r(-30, 30),
                                rotation: this.r(40, 20)
                            }],
                            autoRotate: !0
                        },
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start")
                }
            },
            Dt = {
                tl: null,
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = this,
                        e = document.querySelector(".octo-octo"),
                        a = document.querySelector(".octo-eye");
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).fromTo(a, .05, {
                        scaleY: .1,
                        transformOrigin: "50% 50%"
                    }, {
                        scaleY: 1,
                        repeat: -1,
                        repeatDelay: 1.618
                    }, "start").to(e, 5, {
                        y: this.r(-200, 400),
                        x: this.r(-100, 100),
                        rotation: this.r(-30, 30),
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0,
                        onComplete: function () {
                            t.action()
                        }
                    }, "start")
                }
            },
            Bt = {
                tl: null,
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.querySelector(".zen-zen"),
                        e = document.querySelector(".zen-head"),
                        a = document.querySelector(".zen-l-arm"),
                        s = document.querySelector(".zen-r-arm"),
                        i = document.querySelector(".zen-l-mustache"),
                        r = document.querySelector(".zen-r-mustache");
                    if (!t) return !1;
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.set(e, {
                        transformOrigin: "50% 90%",
                        rotation: 5
                    }).addLabel("start").to(e, 3, {
                        rotation: -5,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to([a, i], 2, {
                        transformOrigin: "90% 50%",
                        rotation: -20,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to([s, r], 2, {
                        transformOrigin: "10% 50%",
                        rotation: 20,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(t, 2, {
                        yPercent: -10,
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start")
                }
            },
            jt = {
                tl: null,
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.querySelector(".smart-smart"),
                        e = document.querySelector(".open-open");
                    if (!t) return !1;
                    this.tl = new TimelineMax({
                        paused: !0,
                        ease: Power3.easeInOut
                    }), this.tl.clear(!0).addLabel("start").to(t, 8, {
                        rotation: -360,
                        transformOrigin: "50% 50%",
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(e, 7, {
                        rotation: 360,
                        transformOrigin: "50% 50%",
                        repeat: -1,
                        yoyo: !0
                    }, "start")
                }
            },
            Rt = {
                tl: null,
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.getElementById("potion"),
                        e = document.querySelector(".potion-liquids"),
                        a = document.querySelector(".potion-drops"),
                        s = document.querySelector(".potion-drop"),
                        i = document.querySelector(".potion-drop2");
                    if (!t) return !1;
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start").to(t, 3, {
                        transformOrigin: "50% 90%",
                        rotation: 15,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }).to([e, a], 3, {
                        transformOrigin: "50% 50%",
                        rotation: -15,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start").fromTo(s, .5, {
                        yPercent: 100,
                        rotation: 0,
                        scale: 1
                    }, {
                        transformOrigin: "20% 120%",
                        rotation: 360,
                        yPercent: -100,
                        scale: 0,
                        repeat: -1
                    }, "start").fromTo(i, .7, {
                        yPercent: 100,
                        rotation: 0,
                        scale: 1
                    }, {
                        transformOrigin: "0% 120%",
                        rotation: -360,
                        yPercent: -100,
                        scale: 0,
                        repeat: -1
                    }, "start")
                }
            },
            Gt = {
                tl: null,
                oceantl: null,
                ptl: [],
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                stop: function () {
                    if (this.ptl.length > 0)
                        for (var t = 0; t < this.ptl.length; t++) null !== this.ptl[t] && this.ptl[t].pause(0, !1);
                    null !== this.oceantl && this.oceantl.pause(0, !1), null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    if (this.ptl.length > 0)
                        for (var t = 0; t < this.ptl.length; t++) null !== this.ptl[t] && this.ptl[t].play(0, !1);
                    null !== this.oceantl && this.oceantl.play(0, !1), null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.querySelector(".pepe .particles");
                    if (!t) return !1;
                    for (var e, a = 0; a < 15; a++) e = document.createElement("div"), e.className = "particle p".concat(a), t.appendChild(e), this.ptl[a] = new TimelineMax({
                        paused: !0
                    }), this.ptl[a].delay(this.r(0, 7)).to(".particle.p".concat(a), this.r(5, 7), {
                        y: this.r(100, 1e3),
                        x: this.r(100, 500),
                        rotationY: 360 * this.r(5, 20),
                        rotationZ: 360 * this.r(5, 20),
                        autoAlpha: 0,
                        repeat: -1
                    });
                    var s = document.querySelector(".ocean-waves.w1"),
                        i = document.querySelector(".ocean-waves.w2");
                    this.oceantl = new TimelineMax({
                        paused: !0
                    }), this.oceantl.fromTo(s, 16, {
                        xPercent: 10,
                        yPercent: 0,
                        zIndex: 9
                    }, {
                        xPercent: 0,
                        yPercent: -100,
                        zIndex: 1,
                        ease: Power1.easeOut,
                        repeat: -1
                    }).fromTo(i, 16, {
                        xPercent: 10,
                        yPercent: 0,
                        zIndex: 9
                    }, {
                        xPercent: 0,
                        yPercent: -100,
                        zIndex: 1,
                        ease: Power1.easeOut,
                        repeat: -1
                    }, "-=8");
                    document.querySelector(".bg-ampa_foliage_3"), document.querySelector(".bg-ampa_tree_2"), document.querySelector(".bg-ampa_foliage_2");
                    var r = document.querySelector(".bg-ampa_parrot_wing"),
                        o = (document.querySelector(".bg-ampa_foliage_1"), document.querySelector(".bg-ampa_tree_1"), document.querySelector(".bg-ampa_oxes"), document.querySelector(".rio .vase"), document.querySelector(".bg-rio_vase_foliage_1"), document.querySelector(".bg-rio_vase_foliage_2"), document.querySelector(".bg-rio_palmtree_1"), document.querySelector(".bg-rio_palmtree_2"), document.querySelector(".bg-metals_sax")),
                        n = document.querySelector(".bg-metals_trumpet"),
                        l = document.querySelector(".bg-metals_trombone"),
                        c = document.querySelector(".bg-metals_trombone_thing"),
                        d = document.querySelector(".pepe"),
                        u = document.querySelector(".pepe .blink"),
                        p = document.querySelector(".bg-head-ear"),
                        m = this.r(.2, .4);
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).to(r, 1, {
                        transformOrigin: "0% 0%",
                        rotation: this.r(-5, 5),
                        xPercent: this.r(-5, 0),
                        yPercent: this.r(0, 5),
                        repeat: -1,
                        yoyo: !0,
                        ease: Elastic.easeOut.config(1, .4)
                    }, "start").to(o, m, {
                        transformOrigin: "25% 10%",
                        yPercent: this.r(-10, 0),
                        rotation: this.r(-5, 6),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(n, 2 * m, {
                        transformOrigin: "30% 100%",
                        rotation: this.r(-20, 25),
                        yPercent: 10,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power1.easeInOut
                    }, "start").to(l, 4 * m, {
                        transformOrigin: "0% 100%",
                        rotation: this.r(-40, 45),
                        yPercent: 10,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power1.easeInOut
                    }, "start").to(c, m / 2, {
                        transformOrigin: "0% 0%",
                        xPercent: this.r(-25, 15),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(p, m, {
                        transformOrigin: "40% 50%",
                        rotationY: this.r(5, 15),
                        repeat: -1,
                        yoyo: !0
                    }, "start").fromTo(u, .2, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        repeat: -1,
                        repeatDelay: this.r(1, 2.5)
                    }, "start").to(d, 3, {
                        yPercent: this.r(-3, 3),
                        repeat: -1,
                        yoyo: !0,
                        ease: Power1.easeInOut
                    }, "start")
                },
                build1024: function () {
                    var t = document.querySelector(".pepe .particles");
                    if (!t) return !1;
                    for (var e, a = 0; a < 10; a++) e = document.createElement("div"), e.className = "particle p".concat(a), t.appendChild(e), this.ptl[a] = new TimelineMax({
                        paused: !0
                    }), this.ptl[a].delay(this.r(0, 7)).to(".particle.p".concat(a), this.r(5, 7), {
                        y: this.r(100, 1e3),
                        x: this.r(100, 500),
                        rotationY: 360 * this.r(5, 20),
                        rotationZ: 360 * this.r(5, 20),
                        autoAlpha: 0,
                        repeat: -1
                    });
                    var s = document.querySelector(".ocean-waves.w1"),
                        i = document.querySelector(".ocean-waves.w2");
                    this.oceantl = new TimelineMax({
                        paused: !0
                    }), this.oceantl.fromTo(s, 16, {
                        xPercent: 10,
                        yPercent: 0,
                        zIndex: 9
                    }, {
                        xPercent: 0,
                        yPercent: -100,
                        zIndex: 1,
                        ease: Power1.easeOut,
                        repeat: -1
                    }).fromTo(i, 16, {
                        xPercent: 10,
                        yPercent: 0,
                        zIndex: 9
                    }, {
                        xPercent: 0,
                        yPercent: -100,
                        zIndex: 1,
                        ease: Power1.easeOut,
                        repeat: -1
                    }, "-=8");
                    var r = document.querySelector(".bg-metals_sax"),
                        o = document.querySelector(".bg-metals_trumpet"),
                        n = document.querySelector(".bg-metals_trombone"),
                        l = document.querySelector(".bg-metals_trombone_thing"),
                        c = document.querySelector(".pepe .blink"),
                        d = this.r(.2, .4);
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).to(r, d, {
                        transformOrigin: "25% 10%",
                        yPercent: this.r(-10, 0),
                        rotation: this.r(-5, 6),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(o, 2 * d, {
                        transformOrigin: "30% 100%",
                        rotation: this.r(-20, 25),
                        yPercent: 10,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power1.easeInOut
                    }, "start").to(n, 4 * d, {
                        transformOrigin: "0% 100%",
                        rotation: this.r(-40, 45),
                        yPercent: 10,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power1.easeInOut
                    }, "start").to(l, d / 2, {
                        transformOrigin: "0% 0%",
                        xPercent: this.r(-25, 15),
                        repeat: -1,
                        yoyo: !0
                    }, "start").fromTo(c, .2, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        repeat: -1,
                        repeatDelay: this.r(1, 2.5)
                    }, "start")
                },
                build568: function () {
                    var t = document.querySelector(".ocean-waves.w1"),
                        e = document.querySelector(".ocean-waves.w2");
                    this.oceantl = new TimelineMax({
                        paused: !0
                    }), this.oceantl.fromTo(t, 16, {
                        xPercent: 10,
                        yPercent: 0,
                        zIndex: 9
                    }, {
                        xPercent: 0,
                        yPercent: -100,
                        zIndex: 1,
                        ease: Power1.easeOut,
                        repeat: -1
                    }).fromTo(e, 16, {
                        xPercent: 10,
                        yPercent: 0,
                        zIndex: 9
                    }, {
                        xPercent: 0,
                        yPercent: -100,
                        zIndex: 1,
                        ease: Power1.easeOut,
                        repeat: -1
                    }, "-=8");
                    document.querySelector(".bg-metals_sax"), document.querySelector(".bg-metals_trumpet"), document.querySelector(".bg-metals_trombone"), document.querySelector(".bg-metals_trombone_thing");
                    var a = document.querySelector(".pepe .blink");
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).fromTo(a, .2, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        repeat: -1,
                        repeatDelay: this.r(1, 2.5)
                    }, "start")
                }
            },
            $t = {
                tl: new TimelineMax,
                mariotl: new TimelineMax,
                bgmStart: null,
                bgmStomp: null,
                bgmEmpty: null,
                bgmAppears: null,
                bgmPowerUp: null,
                bgmExit: null,
                lastBox: 1,
                coins: 1,
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                accessibilityClick: function (t) {
                    if (!t.defaultPrevented) {
                        var e = t.key || t.code;
                        "1" !== e && "Digit1" !== e || document.querySelector(".mario-box.b1 .in").click(), "2" !== e && "Digit2" !== e || document.querySelector(".mario-box.b2 .in").click(), "3" !== e && "Digit3" !== e || document.querySelector(".mario-box.b3 .in").click()
                    }
                },
                action: function () {
                    var t = this,
                        e = document.getElementById("Mario");
                    if (!e) return !1;
                    if (!e.classList.contains("active")) return !1;
                    if (document.body.classList.contains("-bit16") || document.body.classList.contains("-mario-played")) return console.log("action"), document.body.classList.add("-mario-bg"), !1;
                    this.lastBox = 1, this.coins = 1, this.bgmStart = document.getElementById("mario-start"), this.bgmStomp = document.getElementById("mario-stomp"), this.bgmEmpty = document.getElementById("mario-empty"), this.bgmAppears = document.getElementById("mario-appears"), this.bgmPowerUp = document.getElementById("mario-power-up"), this.bgmExit = document.getElementById("mario-exit");
                    var a = document.querySelectorAll(".mario-box");
                    document.body.classList.add("-mario-lock");
                    for (var s = function (e) {
                            a[e].addEventListener("click", (function (s) {
                                var i = s.target.parentNode;
                                if (i.classList.contains("-off")) return i.classList.contains("-full") && t.tl.clear(!0).fromTo(i, .2, {
                                    yPercent: -50
                                }, {
                                    onStart: function () {
                                        return t.bgmEmpty.play()
                                    },
                                    yPercent: 0,
                                    ease: SteppedEase.config(2)
                                }), !1;
                                var r = null,
                                    o = new TimelineMax;
                                if (t.marioJump(e), a.length === t.lastBox) {
                                    if (document.body.classList.remove("-mario-lock"), document.body.classList.add("-mario-played"), console.log("box"), document.body.classList.add("-mario-bg"), i.classList.add("-jumped", "-full"), 3 === t.coins && document.querySelector("#Mario .container").insertAdjacentHTML("beforeend", '<div class="mario-coin-counter">x3</div>'), t.coins > 3 && (document.querySelector(".mario-coin-counter").innerHTML = "x".concat(t.coins)), 16 === t.coins) {
                                        document.body.classList.add("-mario-easter-egg", "-bit16"), i.classList.add("-off"), t.bgmStomp.play(), t.bgmStomp.onended = function () {
                                            return t.bgmPowerUp.play()
                                        }, document.getElementById("home").insertAdjacentHTML("beforeend", '\n                            <div class="mario-msg-overlay"></div>\n                            <div class="mario-msg">\n                                yip yip hooray! you stupid retard! you wasted time! you now have:<br>\n                                <span class="-purple">16 coins!</span><br>\n                                &nbsp;<br>\n                                NOW ALL YOU HAVE TO DO IS SCROLL YOU FUCKING IDIOT YOURE NEAR THE END\n            \n                                <div class="later">\n                                    - popbob\n                                    <button class="mario-msg-close" type="button" title="Close message">???</button>\n                                </div>\n                            </div>\n                        ');
                                        var n = new TimelineMax;
                                        return n.to(".mario-msg", 1, {
                                            onStart: function () {
                                                return t.bgmExit.play()
                                            },
                                            scale: 1,
                                            ease: SteppedEase.config(12)
                                        }).to(".mario-msg .later", .1, {
                                            autoAlpha: 1,
                                            onComplete: function () {
                                                function t(t) {
                                                    if (t.target.classList.contains("mario-msg-overlay") || t.target.classList.contains("mario-msg-close") || "Escape" === t.key || "Escape" === t.code) {
                                                        var e = new TimelineMax;
                                                        e.to(".mario-msg, .mario-msg-overlay", 1, {
                                                            scale: 0,
                                                            ease: SteppedEase.config(12),
                                                            onComplete: function () {
                                                                document.getElementById("home").removeChild(document.querySelector(".mario-msg")), document.getElementById("home").removeChild(document.querySelector(".mario-msg-overlay")), document.querySelector("#Mario .container").removeChild(document.querySelector(".mario-coin-counter"))
                                                            }
                                                        }), document.body.classList.remove("-mario-easter-egg")
                                                    }
                                                }
                                                document.addEventListener("click", t), window.addEventListener("keydow", t)
                                            }
                                        }, "+=4"), !1
                                    }
                                    i.insertAdjacentHTML("beforeend", '<div class="mario-coin c'.concat(t.coins, '"></div>')), r = document.querySelector(".mario-coin.c".concat(t.coins));
                                    var l = t.r(-150, 150);
                                    return o.set(r, {
                                        autoAlpha: 1,
                                        xPercent: 0,
                                        yPercent: 0
                                    }).to(r, .4, {
                                        yPercent: -100
                                    }).to(r, 1, {
                                        bezier: {
                                            curviness: 1.25,
                                            values: [{
                                                xPercent: l,
                                                yPercent: t.r(-150, -100)
                                            }, {
                                                xPercent: 2 * l,
                                                yPercent: 800
                                            }],
                                            autoRotate: !1
                                        },
                                        ease: SteppedEase.config(24),
                                        onComplete: function () {
                                            return i.removeChild(r)
                                        }
                                    }), t.coins++, t.bgmStomp.currentTime = 0, t.bgmStomp.play(), t.bgmStomp.onended = function () {
                                        t.bgmAppears.currentTime = 0, t.bgmAppears.play()
                                    }, !1
                                }
                                return t.lastBox++, i.classList.add("-jumped", "-off"), t.bgmStomp.play(), !1
                            }))
                        }, i = 0; i < a.length; i++) s(i);
                    window.addEventListener("keydown", this.accessibilityClick)
                },
                stop: function () {
                    window.removeEventListener("keydown", this.accessibilityClick)
                },
                marioJump: function (t) {
                    var e = document.querySelector(".mario-box.b".concat(t + 1)),
                        a = document.querySelector(".mario"),
                        s = 25 * (t + 1);
                    this.mariotl.clear(!0).set(a, {
                        left: "calc(".concat(s, "% - 64px)"),
                        autoAlpha: 0
                    }).set(e, {
                        yPercent: 0
                    }).fromTo(a, .3, {
                        yPercent: 200,
                        xPercent: -150,
                        autoAlpha: 1
                    }, {
                        bezier: {
                            curviness: 1.25,
                            values: [{
                                xPercent: 0,
                                yPercent: 0
                            }, {
                                xPercent: 150,
                                yPercent: 200
                            }],
                            autoRotate: !1
                        },
                        ease: SteppedEase.config(12)
                    }).set(a, {
                        autoAlpha: 0
                    }).to(e, .07, {
                        yPercent: -50,
                        ease: SteppedEase.config(2)
                    }, "-=.15").to(e, .07, {
                        yPercent: 0,
                        ease: SteppedEase.config(2)
                    }, "-=.07")
                }
            },
            Nt = {
                tl: null,
                r: function (t, e) {
                    return Math.random() * (e - t) + t
                },
                stop: function () {
                    null !== this.tl && this.tl.pause(0, !1)
                },
                play: function () {
                    null !== this.tl && this.tl.play(0, !1)
                },
                build: function () {
                    var t = document.querySelector(".castle .top"),
                        e = document.querySelector(".castle .top-tower"),
                        a = document.querySelector(".castle .bucket"),
                        s = [document.querySelector(".castle .front-lip"), document.querySelector(".castle .back-lip")],
                        i = document.querySelector(".castle .l-leg"),
                        r = document.querySelector(".castle .r-leg"),
                        o = document.querySelector(".castle .l-arm"),
                        n = document.querySelector(".castle .r-arm"),
                        l = document.querySelector(".castle .ear"),
                        c = document.querySelectorAll(".castle .foliage1"),
                        d = document.querySelectorAll(".castle .foliage2"),
                        u = document.querySelectorAll(".castle .foliage3"),
                        p = document.querySelectorAll(".castle");
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).to(t, 2, {
                        rotation: 5,
                        yPercent: 2,
                        transformOrigin: "50% 100%",
                        ease: RoughEase.ease.config({
                            template: Power2.easeInOut,
                            strength: .5,
                            points: 16,
                            taper: "both",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(e, 2, {
                        rotation: -15,
                        transformOrigin: "50% 100%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: .5,
                            points: 10,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(a, .6, {
                        rotationZ: -25,
                        rotationX: -45,
                        transformOrigin: "50% 0%",
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(i, 2, {
                        rotation: -15,
                        transformOrigin: "0% 0%",
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(r, 2.2, {
                        rotation: -15,
                        transformOrigin: "0% 0%",
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(n, 1.8, {
                        rotation: 15,
                        transformOrigin: "0% 0%",
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(o, 2, {
                        rotation: 15,
                        transformOrigin: "0% 0%",
                        ease: Power2.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(s, 1.6, {
                        rotation: -20,
                        xPercent: -5,
                        transformOrigin: "100% 0%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 1,
                            points: 16,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(l, 2, {
                        rotation: -25,
                        transformOrigin: "25% 50%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 1,
                            points: 16,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(c, .7, {
                        transformOrigin: "50% 100%",
                        skewX: 10,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(d, .6, {
                        transformOrigin: "50% 100%",
                        skewX: -8,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(u, .5, {
                        transformOrigin: "50% 100%",
                        skewX: 6,
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(p, 1.6, {
                        yPercent: -5,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start")
                },
                build568: function () {
                    document.querySelector(".castle .top");
                    var t = document.querySelector(".castle .top-tower"),
                        e = document.querySelector(".castle .bucket"),
                        a = [document.querySelector(".castle .front-lip"), document.querySelector(".castle .back-lip")],
                        s = (document.querySelector(".castle .l-leg"), document.querySelector(".castle .r-leg"), document.querySelector(".castle .l-arm"), document.querySelector(".castle .r-arm"), document.querySelector(".castle .ear")),
                        i = document.querySelectorAll(".castle");
                    this.tl = new TimelineMax({
                        paused: !0
                    }), this.tl.addLabel("start", 0).to(t, 2, {
                        rotation: -15,
                        transformOrigin: "50% 100%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: .5,
                            points: 10,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(e, .6, {
                        rotationZ: -25,
                        rotationX: -45,
                        transformOrigin: "50% 0%",
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(a, 1.6, {
                        rotation: -20,
                        xPercent: -5,
                        transformOrigin: "100% 0%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 1,
                            points: 16,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(s, 2, {
                        rotation: -25,
                        transformOrigin: "25% 50%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 1,
                            points: 16,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1,
                        yoyo: !0
                    }, "start").to(i, 1.6, {
                        yPercent: -5,
                        repeat: -1,
                        yoyo: !0,
                        ease: Power2.easeInOut
                    }, "start")
                }
            },
            Wt = {
                name: "home",
                props: {
                    viewport: Object
                },
                data: function () {
                    return {
                        intro: new TimelineMax,
                        scroller: new o["Controller"],
                        scenes: [],
                        timeLines: [],
                        tweeners: []
                    }
                },
                created: function () {
                    window.addEventListener("beforeunload", (function () {
                        return window.scroll(0, 0)
                    }))
                },
                mounted: function () {
                    this.playIntro(), this.setupScenes(), this.buildLoops(), this.hookLoops(), this.sceneCurriculumVitae(), this.sceneBizTitle(), this.sceneBizZen(), this.sceneBizEverybody(), this.sceneBizEnding(), this.sceneEarlyDays(), this.sceneOcean(), this.sceneFloatingHead(), this.sceneSunset(), this.sceneArtPhiGames(), this.sceneMario(), this.sceneGhibli(), this.sceneWrapper()
                },
                beforeDestroy: function () {
                    Tt.stop(), Et["a"].stop(), Lt["a"].stop(), qt.stop(), At.stop(), It.stop(), Dt.stop(), jt.stop(), Bt.stop(), Nt.stop(), Gt.stop(), Rt.stop(), $t.stop(), this.timeLines.map((function (t) {
                        return t.kill()
                    })), this.scroller.destroy()
                },
                methods: {
                    setupScenes: function () {
                        var t = this,
                            e = document.querySelectorAll(".scene"),
                            a = !0,
                            s = !1,
                            i = void 0;
                        try {
                            for (var r, n = function () {
                                    var e = Object(I["a"])(r.value, 2),
                                        a = e[0],
                                        s = e[1];
                                    t.tweeners[a] = new TimelineMax, t.timeLines[a] = new TimelineMax({
                                        paused: !0
                                    }), t.scenes[a] = new o["Scene"]({
                                        triggerElement: s,
                                        offset: -t.viewport.h / 2,
                                        duration: s.offsetHeight
                                    }).setTween(t.tweeners[a]).addTo(t.scroller).reverse(!0).setClassToggle(s, "active"), t.tweeners[a].to(s, 1, {
                                        autoAlpha: 1
                                    }).eventCallback("onUpdate", (function (e) {
                                        TweenLite.to(t.timeLines[a], .5, {
                                            progress: t.tweeners[a].progress(),
                                            ease: Power0.easeNone
                                        })
                                    }))
                                }, l = Array.from(e).entries()[Symbol.iterator](); !(a = (r = l.next()).done); a = !0) n()
                        } catch (c) {
                            s = !0, i = c
                        } finally {
                            try {
                                a || null == l.return || l.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    },
                    playIntro: function () {
                        this.intro.addLabel("enter", 1).from("#intro .title", 2, {
                            autoAlpha: 0,
                            rotationX: 90,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut
                        }, "enter").from("#intro .std", 2, {
                            autoAlpha: 0,
                            x: -32,
                            ease: Power3.easeOut
                        }, "enter+=1.5")
                    },
                    hookLoops: function () {
                        this.scenes[0].on("enter", (function (t) {
                            t.scrollDirection, "REVERSE" === t.scrollDirection && (Tt.stop(), jt.stop())
                        })), this.scenes[1].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && (Tt.play(), jt.play()), "REVERSE" === t.scrollDirection && Bt.stop()
                        })), this.scenes[2].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && Bt.play(), "REVERSE" === t.scrollDirection && (Tt.play(), jt.play(), It.stop(), qt.stop(), At.stop(), Dt.stop(), Et["a"].stop(), Lt["a"].stop())
                        })), this.scenes[3].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && (Tt.stop(), jt.stop(), It.play(), qt.play(), At.play(), Dt.play(), Et["a"].play(), Lt["a"].play()), "REVERSE" === t.scrollDirection && Bt.play()
                        })), this.scenes[4].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && Bt.stop(), "REVERSE" === t.scrollDirection && (It.play(), qt.play(), At.play(), Dt.play())
                        })), this.scenes[5].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && (It.stop(), qt.stop(), At.stop(), Dt.stop()), "REVERSE" === t.scrollDirection && (Et["a"].play(), Lt["a"].play(), Gt.stop())
                        })), this.scenes[6].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && (Et["a"].stop(), Lt["a"].stop(), Gt.play()), t.scrollDirection
                        })), this.scenes[9].on("enter", (function (t) {
                            t.scrollDirection, "REVERSE" === t.scrollDirection && (Gt.play(), document.body.classList.remove("-mario-lock", "-mario-bg"))
                        })), this.scenes[10].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && Gt.stop(), "REVERSE" === t.scrollDirection && document.body.classList.add("-mario-bg")
                        })).on("leave", (function (t) {
                            t.scrollDirection, "REVERSE" === t.scrollDirection && Nt.stop()
                        })), this.scenes[11].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && (Nt.play(), document.body.classList.remove("-mario-lock")), t.scrollDirection, document.body.classList.add("-mario-bg")
                        })), this.scenes[12].on("enter", (function (t) {
                            document.body.classList.add("-mario-bg")
                        })), this.scenes[13].on("enter", (function (t) {
                            document.body.classList.add("-mario-bg")
                        })), this.scenes[14].on("enter", (function (t) {
                            document.body.classList.add("-mario-bg")
                        })), this.scenes[15].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && document.body.classList.remove("-mario-bg"), "REVERSE" === t.scrollDirection && (Nt.play(), Rt.stop())
                        })).on("leave", (function (t) {
                            t.scrollDirection, "REVERSE" === t.scrollDirection && document.body.classList.add("-mario-bg")
                        })), this.scenes[16].on("enter", (function (t) {
                            "FORWARD" === t.scrollDirection && (document.body.classList.remove("-mario-bg"), Nt.stop(), Rt.play()), t.scrollDirection
                        }))
                    },
                    buildLoops: function () {
                        Tt.build(), Et["a"].build(), Lt["a"].build(), qt.build(), Nt.build(), Rt.build(), jt.build(), this.viewport.is568 ? Nt.build568() : Nt.build(), this.viewport.is568 ? Gt.build568() : this.viewport.is1024 ? Gt.build1024() : Gt.build(), this.viewport.is1024 || (It.build(), Dt.build()), this.viewport.is768 || At.build(), this.viewport.is568 || Bt.build()
                    },
                    sceneCurriculumVitae: function () {
                        this.timeLines[0].set("#curriculum .title-container", {
                            autoAlpha: 1
                        }).addLabel("start", 0).from("#curriculum .title", 2, {
                            yPercent: -50,
                            autoAlpha: 0,
                            rotationX: 90,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut
                        }, "start").from("#curriculum .std", 2, {
                            yPercent: 50,
                            autoAlpha: 0,
                            rotationX: -90,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut
                        }, "start").to("#curriculum .title, #curriculum .std", 2, {
                            autoAlpha: 0,
                            yPercent: -100
                        })
                    },
                    sceneBizTitle: function () {
                        this.timeLines[1].set("#filomena", {
                            autoAlpha: 0,
                            scale: 0,
                            xPercent: 600,
                            yPercent: 100
                        }).set("#dino", {
                            scale: 0,
                            xPercent: 400,
                            yPercent: 100
                        }).set("#astro, #coffee, #et, #octo", {
                            autoAlpha: 0,
                            scale: 0,
                            xPercent: 400,
                            yPercent: 100
                        }).set("#bizTitle .title-container, #biz1 .container", {
                            autoAlpha: 1
                        }).addLabel("start", 0).from("#bizTitle .title", 6, {
                            yPercent: -50,
                            autoAlpha: 0,
                            rotationX: 90,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut
                        }, "start").to("#bizTitle .title", 6, {
                            autoAlpha: 0,
                            yPercent: -100
                        }).staggerFrom("#smart, #open", 6, {
                            autoAlpha: 0,
                            scale: 0,
                            ease: Power3.easeOut
                        }, .2, "start+=2").from("#abiz", 6, {
                            scale: 0
                        }, "start+=2")
                    },
                    sceneBizZen: function () {
                        this.timeLines[2].addLabel("start", 0).from("#zen", 4, {
                            xPercent: 70,
                            ease: Power3.easeOut
                        }, "start").to("#abiz", 4, {
                            autoAlpha: 0,
                            xPercent: -100,
                            ease: Power3.easeIn
                        }, "start").staggerTo("#smart, #open", 4, {
                            autoAlpha: 0,
                            scale: 0,
                            ease: Power3.easeOut
                        }, .2, "start")
                    },
                    sceneBizEverybody: function () {
                        this.timeLines[3].addLabel("start", 0).to("#zen", 4, {
                            yPercent: 130,
                            ease: Power3.easeIn
                        }, "start").staggerTo("#dino, #astro, #coffee, #et, #filomena, #octo", 5, {
                            autoAlpha: 1,
                            scale: 1,
                            xPercent: 0,
                            yPercent: 0,
                            ease: Power3.easeOut
                        }, .2, "start")
                    },
                    sceneBizEnding: function () {
                        this.timeLines[4].addLabel("start", 0).to("#dino", 6, {
                            yPercent: 200,
                            scale: 1.5,
                            ease: Power3.easeIn
                        }, "start").to("#et", 6, {
                            xPercent: -250,
                            yPercent: -100,
                            autoAlpha: 0,
                            ease: Power3.easeIn
                        }, "start").to("#filomena", 6, {
                            xPercent: -300,
                            yPercent: 300,
                            autoAlpha: 0,
                            ease: Power3.easeIn
                        }, "start").to("#octo", 6, {
                            xPercent: -650,
                            yPercent: 400,
                            autoAlpha: 0,
                            ease: Power3.easeIn
                        }, "start").to("#astro", 12, {
                            bottom: "-10vh",
                            right: "-10vw",
                            scale: 4,
                            ease: Power3.easeInOut
                        }, "start").to("#coffee", 12, {
                            top: "8rem",
                            left: 0,
                            scale: 4,
                            ease: Power3.easeInOut
                        }, "start")
                    },
                    sceneEarlyDays: function () {
                        var t = new TimelineMax({
                                paused: !0
                            }),
                            e = new TimelineMax;
                        e.to(".cloud-1", 20, {
                            rotation: 0
                        }).eventCallback("onUpdate", (function () {
                            TweenLite.to(t, 4, {
                                progress: e.progress(),
                                ease: Power3.easeOut
                            })
                        })), t.addLabel("start", 0).fromTo(".cloud-1", 10, {
                            yPercent: 50,
                            xPercent: 20
                        }, {
                            yPercent: -85,
                            xPercent: -20
                        }, "action").fromTo(".cloud-2", 10, {
                            yPercent: 40,
                            xPercent: -10
                        }, {
                            yPercent: -40,
                            xPercent: 85
                        }, "action").fromTo(".cloud-3", 10, {
                            yPercent: 70,
                            xPercent: 40
                        }, {
                            yPercent: -85,
                            xPercent: -40
                        }, "action"), new o["Scene"]({
                            triggerElement: "#earlyTitle",
                            offset: -this.viewport.h / 2,
                            duration: 3.5 * this.viewport.h
                        }).setTween(e).addTo(this.scroller), this.timeLines[5].set(".pepe-scenery", {
                            autoAlpha: 0
                        }).set("#biz1 .container", {
                            autoAlpha: 1
                        }).addLabel("start", 0).to("#astro", 4, {
                            yPercent: 600,
                            xPercent: 200,
                            ease: Power2.easeIn
                        }, "start").to("#coffee", 4, {
                            yPercent: -600,
                            xPercent: -200,
                            ease: Power2.easeIn
                        }, "start").to("#earlyTitle .title-container", 2, {
                            autoAlpha: 1
                        }, "start").from("#earlyTitle .title", 4, {
                            yPercent: -50,
                            autoAlpha: 0,
                            rotationX: 90,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut
                        }, "start").from("#earlyTitle .std", 4, {
                            yPercent: 50,
                            autoAlpha: 0,
                            rotationX: -90,
                            transformOrigin: "50% 50% 100px",
                            ease: Power3.easeOut
                        }, "start").to("#earlyTitle .title, #earlyTitle .std", 4, {
                            autoAlpha: 0,
                            yPercent: -100
                        })
                    },
                    sceneOcean: function () {
                        var t = new TimelineMax({
                                paused: !0
                            }),
                            e = new TimelineMax,
                            a = window.innerWidth + document.querySelector(".pepe").offsetWidth + 16;
                        e.to(".pepe", 20, {
                            rotation: 0
                        }).eventCallback("onUpdate", (function () {
                            TweenLite.to(t, 4, {
                                progress: e.progress(),
                                ease: Power3.easeOut
                            })
                        })), t.addLabel("start").to(".pepe", 10, {
                            x: "-".concat(a, "px"),
                            scale: .5
                        }, "start"), new o["Scene"]({
                            triggerElement: "#early-days2",
                            offset: -this.viewport.h / 2,
                            duration: 4 * this.viewport.h
                        }).setTween(e).addTo(this.scroller), this.timeLines[6].set("#biz1 .container", {
                            autoAlpha: 0
                        }).to(".pepe-scenery", 8, {
                            autoAlpha: 1
                        })
                    },
                    sceneFloatingHead: function () {
                        this.timeLines[7].addLabel("start", 0)
                    },
                    sceneSunset: function () {
                        this.timeLines[8].set("#Mario .container", {
                            autoAlpha: 0
                        }).to(".pepe-scenery", 8, {
                            autoAlpha: 0
                        })
                    },
                    sceneArtPhiGames: function () {
                        this.timeLines[9].set("#Mario .container", {
                            autoAlpha: 0
                        }).addLabel("start", 1).to("#ArtPhiGamesTitle .title-container", 1, {
                            autoAlpha: 1
                        }).staggerFrom("#ArtPhiGamesTitle .title .line", 4, {
                            yPercent: -50,
                            autoAlpha: 0,
                            rotationX: 90,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut,
                            stagger: .5
                        }).from("#ArtPhiGamesTitle .std", 4, {
                            yPercent: 50,
                            autoAlpha: 0,
                            rotationX: -90,
                            transformOrigin: "50% 50% 100px",
                            ease: Power3.easeOut
                        }, "-=1").to("#ArtPhiGamesTitle .title, #ArtPhiGamesTitle .std", 3, {
                            yPercent: -100,
                            autoAlpha: 0
                        }).set("#earlyTitle .title-container", {
                            autoAlpha: 1
                        })
                    },
                    sceneMario: function () {
                        this.tweeners[10].to("#earlyTitle .title-container", .5, {
                            autoAlpha: 0
                        }).to("#Mario .container", 1, {
                            autoAlpha: 1,
                            zIndex: 4,
                            onComplete: function () {
                                return $t.action()
                            }
                        }), this.timeLines[10].set(".mario", {
                            yPercent: 200,
                            autoAlpha: 0
                        })
                    },
                    sceneGhibli: function () {
                        var t = new TimelineMax({
                                paused: !0
                            }),
                            e = new TimelineMax;
                        e.to(".pepe", 20, {
                            rotation: 0
                        }).eventCallback("onUpdate", (function () {
                            TweenLite.to(t, 2, {
                                progress: e.progress(),
                                ease: Power3.easeOut
                            })
                        })), t.addLabel("start", 0).to("#Ghibli .grass1", 20, {
                            yPercent: 10,
                            xPercent: -100,
                            ease: Power1.easeIn
                        }, "start").to("#Ghibli .grass2", 20, {
                            yPercent: 10,
                            xPercent: 100,
                            ease: Power1.easeIn
                        }, "start").addLabel("start"), new o["Scene"]({
                            triggerElement: "#Ghibli",
                            offset: -this.viewport.h / 2,
                            duration: 4 * this.viewport.h
                        }).setTween(e).addTo(this.scroller);
                        var a = new TimelineMax({
                                paused: !0
                            }),
                            s = new TimelineMax;
                        s.to(".pepe", 20, {
                            rotation: 0
                        }).eventCallback("onUpdate", (function () {
                            TweenLite.to(a, 6, {
                                progress: s.progress(),
                                ease: Power3.easeOut
                            })
                        })), a.addLabel("start", 0).set("#Ghibli .sky .c1, #Ghibli .sky .c2", {
                            yPercent: 50
                        }).to("#Ghibli .sky .c1", 20, {
                            yPercent: 10,
                            xPercent: -50,
                            scale: 1.5,
                            ease: Power1.easeIn
                        }, "start").to("#Ghibli .sky .c2", 20, {
                            yPercent: 0,
                            scale: 1.5,
                            ease: Power1.easeIn
                        }, "start"), new o["Scene"]({
                            triggerElement: "#Ghibli",
                            offset: -this.viewport.h / 2,
                            duration: 4 * this.viewport.h
                        }).setTween(s).addTo(this.scroller);
                        var i = new TimelineMax({
                                paused: !0
                            }),
                            r = new TimelineMax,
                            n = "-120vw";
                        this.viewport.is568 && (n = "-" + (window.innerWidth + document.querySelector(".castle-container").offsetWidth + 16) + "px"), r.to(".pepe", 20, {
                            rotation: 0
                        }).eventCallback("onUpdate", (function () {
                            TweenLite.to(i, 3, {
                                progress: r.progress(),
                                ease: Power3.easeOut
                            })
                        })), i.to(".castle-container", 10, {
                            x: n,
                            y: "-70vh",
                            scale: .5
                        }), new o["Scene"]({
                            triggerElement: "#Ghibli",
                            duration: 5 * this.viewport.h
                        }).setTween(r).addTo(this.scroller), this.timeLines[11].addLabel("start", 0).to("#Mario .container", 4, {
                            autoAlpha: 0
                        }, "start").to("#Ghibli .container", 4, {
                            autoAlpha: 1
                        }, "start"), this.timeLines[12].addLabel("start", 0), this.timeLines[13].addLabel("start", 0), this.timeLines[14].addLabel("start", 0)
                    },
                    sceneWrapper: function () {
                        this.timeLines[15].addLabel("start", 0).to("#Ghibli .container", 2, {
                            autoAlpha: 0
                        }, "start").from("#wrapperTitle .static-container", 2, {
                            autoAlpha: 1
                        })
                    }
                },
                components: {
                    Intro: $,
                    Titles: Y,
                    Biz: K,
                    EarlyDays: rt,
                    SuperMario: ut,
                    Ghibli: vt,
                    Wrapper: kt,
                    Thanks: zt
                }
            },
            Vt = Wt,
            Ft = Object(m["a"])(Vt, A, q, !1, null, null, null),
            Ht = Ft.exports,
            Yt = a("323e"),
            Xt = a.n(Yt);
        s["a"].use(L["a"]);
        var Zt = new L["a"]({
            mode: "history",
            base: "/",
            routes: [{
                path: "/",
                name: ".evan()",
                component: Ht,
                meta: {
                    title: "evan.systems",
                    bodyClass: "page-home",
                    metaTags: [{
                        name: "description",
                        content: "too swag"
                    }, {
                        name: "og:title",
                        content: "evan.systems"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/"
                    }, {
                        name: "og:description",
                        content: "too swag"
                    }, {
                        name: "twitter:title",
                        content: "evan.systems"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/"
                    }, {
                        name: "twitter:description",
                        content: "too swag"
                    }]
                }
            }, {
                path: "/about",
                name: ".about()",
                component: function () {
                    return a.e("about").then(a.bind(null, "f820"))
                },
                meta: {
                    title: "evan(about)",
                    bodyClass: "page-about",
                    metaTags: [{
                        name: "description",
                        content: "about me"
                    }, {
                        name: "og:title",
                        content: "evan(about)"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/about"
                    }, {
                        name: "og:description",
                        content: "about me"
                    }, {
                        name: "twitter:title",
                        content: "evan(about)"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/about"
                    }, {
                        name: "twitter:description",
                        content: "about me"
                    }]
                }
            }, {
                path: "/work",
                name: ".work()",
                component: function () {
                    return a.e("work").then(a.bind(null, "f126"))
                },
                meta: {
                    title: "evan_systems(.work",
                    bodyClass: "page-work",
                    metaTags: [{
                        name: "description",
                        content: "My selected works"
                    }, {
                        name: "og:title",
                        content: "evan_systems(.work"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/work"
                    }, {
                        name: "og:description",
                        content: "My selected works"
                    }, {
                        name: "twitter:title",
                        content: "evan_systems(.work"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/work"
                    }, {
                        name: "twitter:description",
                        content: "My selected works"
                    }]
                }
            }, {
                path: "/work/confianca",
                name: ".work('Confian??a')",
                component: function () {
                    return a.e("confianca").then(a.bind(null, "7950"))
                },
                meta: {
                    title: "evan_systems(.work('Confian??a')",
                    bodyClass: "page-confianca",
                    metaTags: [{
                        name: "description",
                        content: "A detailed case of Confian??a Delivery project."
                    }, {
                        name: "og:title",
                        content: "evan_systems(.work('Confian??a')"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/work/confianca"
                    }, {
                        name: "og:description",
                        content: "A detailed case of Confian??a Delivery project."
                    }, {
                        name: "twitter:title",
                        content: "evan_systems(.work('Confian??a')"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/work/confianca"
                    }, {
                        name: "twitter:description",
                        content: "A detailed case of Confian??a Delivery project."
                    }]
                }
            }, {
                path: "/work/admin-panel",
                name: ".work('Admin Panel')",
                component: function () {
                    return a.e("admin").then(a.bind(null, "6090"))
                },
                meta: {
                    title: "evan_systems(.work('Admin Panel')",
                    bodyClass: "page-admin-panel",
                    metaTags: [{
                        name: "description",
                        content: "A detailed case of Biz Commerce's Admin Panel"
                    }, {
                        name: "og:title",
                        content: "evan_systems(.work('Admin Panel')"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/work/admin-panel"
                    }, {
                        name: "og:description",
                        content: "A detailed case of Biz Commerce's Admin Panel"
                    }, {
                        name: "twitter:title",
                        content: "evan_systems(.work('Admin Panel')"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/work/admin-panel"
                    }, {
                        name: "twitter:description",
                        content: "A detailed case of Biz Commerce's Admin Panel"
                    }]
                }
            }, {
                path: "/work/desbravando",
                name: ".work('Desbravando')",
                component: function () {
                    return a.e("desbravando").then(a.bind(null, "eeb5"))
                },
                meta: {
                    title: "evan_systems(.work('Desbravando')",
                    bodyClass: "page-desbravando",
                    metaTags: [{
                        name: "description",
                        content: "A detailed case of Pep?? Reis' Desbravando cover art"
                    }, {
                        name: "og:title",
                        content: "evan_systems(.work('Desbravando')"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/work/desbravando"
                    }, {
                        name: "og:description",
                        content: "A detailed case of Pep?? Reis' Desbravando cover art"
                    }, {
                        name: "twitter:title",
                        content: "evan_systems(.work('Desbravando')"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/work/desbravando"
                    }, {
                        name: "twitter:description",
                        content: "A detailed case of Pep?? Reis' Desbravando cover art"
                    }]
                }
            }, {
                path: "*",
                name: ".err(404)",
                component: function () {
                    return a.e("404").then(a.bind(null, "8cdb"))
                },
                meta: {
                    title: "evan_systems(.err(404)",
                    bodyClass: "page-err404",
                    metaTags: [{
                        name: "description",
                        content: "Ops! Page not found"
                    }, {
                        name: "og:title",
                        content: "evan_systems(.err(404)"
                    }, {
                        name: "og:url",
                        content: "https://evan.systems/"
                    }, {
                        name: "og:description",
                        content: "Ops! Page not found"
                    }, {
                        name: "twitter:title",
                        content: "evan_systems(.err(404)"
                    }, {
                        name: "twitter:url",
                        content: "https://evan.systems/"
                    }, {
                        name: "twitter:description",
                        content: "Ops! Page not found"
                    }]
                }
            }]
        });
        Xt.a.configure({
            easing: "ease-out",
            speed: 500,
            trickleSpeed: 100,
            showSpinner: !1
        }), Zt.beforeEach((function (t, e, a) {
            document.body.classList.add("locked"), Xt.a.start(), document.body.classList.remove("-mario-lock", "-mario-easter-egg", "-bit16", "-mario-played", "-open-nav", "-mario-bg", "-admin-bg", "-confianca-bg", "-desbravando-bg");
            var s = t.matched.slice().reverse().find((function (t) {
                    return t.meta && t.meta.title
                })),
                i = t.matched.slice().reverse().find((function (t) {
                    return t.meta && t.meta.metaTags
                }));
            e.matched.slice().reverse().find((function (t) {
                return t.meta && t.meta.metaTags
            }));
            if (s && (document.title = s.meta.title), Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function (t) {
                    return t.parentNode.removeChild(t)
                })), !i) return a();
            i.meta.metaTags.map((function (t) {
                var e = document.createElement("meta");
                return Object.keys(t).forEach((function (a) {
                    e.setAttribute(a, t[a])
                })), e.setAttribute("data-vue-router-controlled", ""), e
            })).forEach((function (t) {
                return document.head.appendChild(t)
            })), a()
        })), Zt.afterEach((function (t, e) {
            setTimeout((function () {
                window.scroll(0, 0), Xt.a.done(), document.body.classList.remove("locked")
            }), 1e3)
        }));
        var Qt = Zt,
            Ut = a("0284"),
            Jt = a.n(Ut);
        s["a"].config.productionTip = !1, s["a"].use(Jt.a, {
            id: "UA-75833214-1",
            router: Qt
        }), "serviceWorker" in navigator && window.addEventListener("load", (function () {
            navigator.serviceWorker.register("/evan.systems-sw.js").then((function (t) {})).catch((function (t) {}))
        })), new s["a"]({
            router: Qt,
            render: function (t) {
                return t(E)
            }
        }).$mount("#app")
    },
    "911d": function (t, e, a) {
        t.exports = a.p + "media/smw_power-up.01d1241b.ogg"
    },
    "92a5": function (t, e, a) {
        "use strict";
        e["a"] = {
            tl: null,
            r: function (t, e) {
                return Math.random() * (e - t) + t
            },
            build: function () {
                this.tl = new TimelineMax({
                    paused: !0
                }), this.tl.set(".astro-head", {
                    rotation: -15,
                    transformOrigin: "50% 90%",
                    yPercent: 0,
                    xPercent: -10
                }).set(".astro-tube", {
                    rotation: -15,
                    transformOrigin: "0% 100%"
                }).addLabel("start", 0).to(".astro-head", 4, {
                    rotation: 10,
                    yPercent: 5,
                    xPercent: 10,
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: !0
                }, "start").to(".astro-tube", 4, {
                    rotation: 20,
                    yPercent: 10,
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: !0
                }, "start").to(".astro-l-arm", 2, {
                    rotation: -20,
                    transformOrigin: "90% 90%",
                    ease: Elastic.easeOut.config(1, .1),
                    repeat: -1,
                    yoyo: !0
                }, "start").fromTo(".astro-l-leg", 2, {
                    rotation: 10,
                    transformOrigin: "90% 10%"
                }, {
                    rotation: -10,
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: !0
                }, "start").fromTo(".astro-r-leg", 2, {
                    rotation: -10,
                    transformOrigin: "90% 10%"
                }, {
                    rotation: 10,
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: !0
                }, "start").to(".astro-body", 1, {
                    scaleX: 1.06,
                    transformOrigin: "50% 50%",
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: !0
                }, "start").to(".astro-astro", 5, {
                    yPercent: this.r(-40, -20),
                    xPercent: this.r(-10, 10),
                    rotation: this.r(-120, 120),
                    transformOrigin: "50% 50%",
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: !0
                }, "start")
            },
            stop: function () {
                null !== this.tl && this.tl.pause(0, !1)
            },
            play: function () {
                null !== this.tl && this.tl.play(0, !1)
            }
        }
    },
    a1a3: function (t, e, a) {},
    a5f6: function (t, e, a) {},
    af89: function (t, e, a) {
        t.exports = a.p + "media/smw_princess_help.6db08fe8.ogg"
    },
    b0c0: function (t, e, a) {
        t.exports = a.p + "media/smw_keyhole_exit.a8b8504b.ogg"
    },
    c7e9: function (t, e, a) {
        "use strict";
        e["a"] = {
            tl: null,
            r: function (t, e) {
                return Math.random() * (e - t) + t
            },
            build: function () {
                this.tl = new TimelineMax({
                    paused: !0
                }), this.tl.to(".coffee-coffee", 5, {
                    yPercent: this.r(20, 200),
                    xPercent: this.r(-50, 50),
                    rotation: this.r(0, 360),
                    transformOrigin: "50% 50%",
                    ease: Power1.easeInOut,
                    repeat: -1,
                    yoyo: !0
                })
            },
            stop: function () {
                null !== this.tl && this.tl.pause(0, !1)
            },
            play: function () {
                null !== this.tl && this.tl.play(0, !1)
            }
        }
    },
    ca6b: function (t, e, a) {
        t.exports = a.p + "media/smw_stomp.cc3fd551.ogg"
    },
    e619: function (t, e, a) {}
});
