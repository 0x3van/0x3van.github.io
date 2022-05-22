(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["work"], {
        "27d9": function (t, e, a) {
            t.exports = a.p + "img/Screenshot-2021-10-22-at-09.18.13.png"
        },
        "41ab": function (t, e, a) {
            t.exports = a.p + "img/encretard_white.png"
        },
        dbb4: function (t, e, a) {},
        eefd: function (t, e, a) {
            t.exports = a.p + "img/gc.jpg"
        },
        f126: function (t, e, a) {
            "use strict";
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "wrapper",
                        attrs: {
                            id: "work"
                        }
                    }, [n("div", {
                        staticClass: "static-container"
                    }, [n("h1", {
                        staticClass: "title"
                    }, [t._v("\n            work"), t.viewport.is568 ? n("br") : t._e(), t._v("("), n("span", {
                        staticClass: "params"
                    }, [t._v("'some projects'")]), t._v(")\n        ")]), n("div", {
                        staticClass: "std"
                    }, [n("p", {
                        staticClass: "-gray"
                    }, [t._v("// some of my projects.")]), n("ul", {
                        staticClass: "work-list"
                    }, [n("li", [n("router-link", {
                        attrs: {
                            to: "/gcspeedrun",
                            title: "GCSpeedrunBot",
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("eefd"),
                            alt: "a bot that calculates the amount of time you spend on a google classroom task."
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("GCSpeedrunBot")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// indev")]), n("br"), t._v("\n                            a bot that calculates the amount of time you spend on a google classroom task.\n                        ")])])], 1), n("li", [n("router-link", {
                        attrs: {
                            to: "/nft",
                            title: "screenshot simulator",
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("27d9"),
                            alt: "sexy screenshot simulator"
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("NFT Screenshot.lua")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// just stole ya nft cry about it bozo")]), n("br"), t._v("\n                            a lua script that scrapes NFTs off of opensea\n                        ")])])], 1), n("li", [n("router-link", {
                        attrs: {
                            to: "/enc",
                            title: "encyclopedia retardica vs encyclopedia parodica???",
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("41ab"),
                            alt: "encretard"
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("Encyclopedia Retardica")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// a great invention indeed by kcis.xyz and trollface security")]), n("br"), t._v("\n                            documenting the worst.\n                        ")])])], 1)])])])])
                },
                s = [],
                i = (a("dbb4"), {
                    name: "work",
                    props: {
                        viewport: Object
                    },
                    data: function () {
                        return {
                            intro: new TimelineMax
                        }
                    },
                    methods: {},
                    mounted: function () {
                        this.intro.addLabel("enter", 1).from(".title", 2, {
                            autoAlpha: 0,
                            rotationX: 70,
                            transformOrigin: "50% 50% -100px",
                            ease: Power3.easeOut
                        }, "enter").from(".std", 2, {
                            autoAlpha: 0,
                            x: -32,
                            ease: Power3.easeOut
                        }, "enter+=1.5")
                    }
                }),
                r = i,
                o = a("2877"),
                l = Object(o["a"])(r, n, s, !1, null, null, null);
            e["default"] = l.exports
        }
    }
]);
//# sourceMappingURL=work.db5007a2.js.map