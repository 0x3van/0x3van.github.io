(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["work"], {
        "27d9": function (t, e, a) {
            t.exports = a.p + "img/p logo.png"
        },
        "41ab": function (t, e, a) {
            t.exports = a.p + "img/hellsecs.png"
        },
        dbb4: function (t, e, a) {},
        eefd: function (t, e, a) {
            t.exports = a.p + "img/gcspeedrunbot.png"
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
                            alt: "a program written in Lua that calculates the amount of time you spend on a google classroom task."
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("GCSpeedrunBot")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// indev")]), n("br"), t._v("\n                            a bot that calculates the amount of time you spend on a google classroom task.\n                        ")])])], 1), n("li", [n("router-link", {
                        attrs: {
                            to: "/coom",
                            title: "not illegal ong ",
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("27d9"),
                            alt: "not illegal i swear "
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("pwnmap")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// OSINT framework")]), n("br"), t._v("\n                           an OSINT framework written in Python that exercises total control over manipulating data and allows easy scraping and insight in data security through leaked database scraping.\n                        ")])])], 1), n("li", [n("router-link", {
                        attrs: {
                            to: "/hellsecure",
                            title: "obfuscator stuff thingmabob omegalul noway?????",
                            target: "_blank"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("41ab"),
                            alt: "encretard"
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("Hellsecure v2")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// a Lua obfuscator.")]), n("br"), t._v("\n                            Slow your competitors trying to crack your script down with dark humour, mutational code and more trolling.\n                        ")])])], 1)])])])])
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