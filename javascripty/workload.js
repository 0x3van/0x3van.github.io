(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["work"], {
        "27d9": function (t, e, a) {
            t.exports = a.p + "img/work-admin-panel.1a4dc8a5.png"
        },
        "41ab": function (t, e, a) {
            t.exports = a.p + "img/work-desbravando.1f69d95f.png"
        },
        dbb4: function (t, e, a) {},
        eefd: function (t, e, a) {
            t.exports = a.p + "img/work-confianca.f1858ea4.png"
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
                    }, [t._v("'selected'")]), t._v(")\n        ")]), n("div", {
                        staticClass: "std"
                    }, [n("p", {
                        staticClass: "-gray"
                    }, [t._v("// Some special projects explained in details.")]), n("ul", {
                        staticClass: "work-list"
                    }, [n("li", [n("router-link", {
                        attrs: {
                            to: "/work/confianca",
                            title: "ConfianÃ§a Delivery"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("eefd"),
                            alt: "A smartphone showing the home page for the ConfianÃ§a Delivery project"
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("ConfianÃ§a Delivery")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// 2018 - BizCommerce")]), n("br"), t._v("\n                            Supermarket online delivery store\n                        ")])])], 1), n("li", [n("router-link", {
                        attrs: {
                            to: "/work/admin-panel",
                            title: "Admin Panel"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("27d9"),
                            alt: "Two white gears inside a purple circle"
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("Admin Panel")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// 2018 - BizCommerce")]), n("br"), t._v("\n                            A deep redesign of Magento's v1 admin panel for BizCommerce\n                        ")])])], 1), n("li", [n("router-link", {
                        attrs: {
                            to: "/work/desbravando",
                            title: "Desbravando"
                        }
                    }, [n("img", {
                        attrs: {
                            src: a("41ab"),
                            alt: "An acoustic guitar floating on a wavy ocean"
                        }
                    }), n("div", {
                        staticClass: "details"
                    }, [n("strong", [t._v("Desbravando")]), n("br"), n("span", {
                        staticClass: "-comment"
                    }, [t._v("// 2015 - PepÃª Reis")]), n("br"), t._v("\n                            CD cover design project\n                        ")])])], 1)])])])])
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