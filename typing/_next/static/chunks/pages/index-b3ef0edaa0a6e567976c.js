_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [10], {
        "/EDR": function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return r("23aj")
            }])
        },
        "23aj": function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, "Home", (function () {
                return R
            }));
            var n = r("a3WO");
            var o = r("BsWD");

            function a(e) {
                return function (e) {
                    if (Array.isArray(e)) return Object(n.a)(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Object(o.a)(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = r("ODXe"),
                i = r("h4VS"),
                s = r("q1tI"),
                u = r.n(s),
                l = r("qKvR"),
                f = r("rePB");
            u.a.createElement;

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function (t) {
                        Object(f.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function b() {
                var e = Object(i.a)(["\n        left: ", "px;\n        top: ", "px;\n      "]);
                return b = function () {
                    return e
                }, e
            }

            function h() {
                var e = Object(i.a)(["\n      transition: all 0.1s ease-out;\n      width: 2px;\n    "]);
                return h = function () {
                    return e
                }, e
            }
            var g = {
                    word: {
                        position: "relative",
                        marginRight: "0.25rem"
                    },
                    correct: {
                        "--text-opacity": "1",
                        color: ["#057a55", "rgba(5, 122, 85, var(--text-opacity))"]
                    },
                    wrong: {
                        "--text-opacity": "1",
                        color: ["#f98080", "rgba(249, 128, 128, var(--text-opacity))"]
                    },
                    pending: {
                        "--text-opacity": "1",
                        color: ["#d2d6dc", "rgba(210, 214, 220, var(--text-opacity))"]
                    },
                    caret: [{
                        "--bg-opacity": "1",
                        position: "absolute",
                        height: "1.5rem",
                        backgroundColor: ["#3f83f8", "rgba(63, 131, 248, var(--bg-opacity))"]
                    }, Object(l.b)(h())]
                },
                m = u.a.memo((function (e) {
                    var t = e.template,
                        r = e.userInput,
                        n = e.showCaret,
                        o = Object(s.useRef)(null),
                        a = Object(s.useState)({
                            left: -1,
                            top: 4
                        }),
                        c = a[0],
                        i = a[1];
                    return Object(s.useEffect)((function () {
                        o.current ? i((function (e) {
                            return p(p({}, e), {}, {
                                left: o.current.offsetLeft + o.current.offsetWidth
                            })
                        })) : i((function (e) {
                            return p(p({}, e), {}, {
                                left: 0
                            })
                        }))
                    }), [r.length]), Object(l.c)("span", {
                        css: g.word,
                        "data-testid": "word"
                    }, Array.from(Array(Math.max(t.length, r.length)).keys()).map((function (e) {
                        var n, a = e == r.length - 1 ? o : null,
                            c = t[e],
                            i = r[e];
                        return n = c && i ? c == i ? Object(l.c)("span", {
                            css: g.correct,
                            className: "correct",
                            "data-testid": "correct",
                            ref: a
                        }, c) : Object(l.c)("span", {
                            css: g.wrong,
                            className: "wrong",
                            "data-testid": "wrong",
                            ref: a
                        }, c) : i ? Object(l.c)("span", {
                            css: g.wrong,
                            className: "wrong",
                            "data-testid": "wrong",
                            ref: a
                        }, i) : Object(l.c)("span", {
                            css: g.pending,
                            className: "pending",
                            "data-testid": "pending",
                            ref: a
                        }, c), Object(l.c)(u.a.Fragment, {
                            key: e
                        }, n)
                    })), n && Object(l.c)("span", {
                        css: [g.caret, Object(l.b)(b(), c.left + 1, c.top)],
                        "data-testid": "caret"
                    }))
                })),
                w = r("RwhY"),
                v = r("vD2L"),
                y = (u.a.createElement, {
                    typingArea: {
                        fontSize: "1.25rem",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale"
                    },
                    wordWrapper: {
                        marginTop: "0.25rem",
                        marginBottom: "0.25rem",
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100%"
                    },
                    word: {
                        marginRight: "0.25rem"
                    }
                }),
                O = u.a.memo((function (e) {
                    var t = e.words,
                        r = e.userWords,
                        n = e.showCaret,
                        o = e.finished,
                        a = Object(s.useState)(!1),
                        i = a[0],
                        f = a[1],
                        d = Object(w.b)(),
                        p = Object(c.a)(d, 2),
                        b = p[0],
                        h = p[1],
                        g = Object(v.b)(),
                        O = Object(c.a)(g, 1)[0];
                    Object(s.useEffect)((function () {
                        var e = b.total;
                        r.slice(e).forEach((function (r, n) {
                            "" != r && (r == t[e + n] ? h({
                                type: "incrementCorrect"
                            }) : h({
                                type: "incrementWrong"
                            }))
                        })), r.length <= 1 && f(!1), o && !i && (f(!0), O.user && setTimeout((function () {
                            h({
                                type: "SUBMIT_STATS",
                                payload: {
                                    uid: O.user.uid
                                }
                            })
                        }), 200))
                    }), [r.length, o]);
                    var j = t.slice(r.length);
                    return Object(l.c)("div", {
                        css: y.typingArea,
                        "data-testid": "text"
                    }, Object(l.c)("div", {
                        css: y.wordWrapper
                    }, r.map((function (e, o) {
                        return Object(l.c)(u.a.Fragment, {
                            key: o
                        }, Object(l.c)(m, {
                            template: t[o],
                            userInput: e,
                            showCaret: n && o == r.length - 1
                        }))
                    })), j.map((function (e, t) {
                        return Object(l.c)(u.a.Fragment, {
                            key: t
                        }, Object(l.c)("span", {
                            css: y.word,
                            "data-testid": "remainingWord"
                        }, e))
                    }))))
                })),
                j = ["the", "of", "to", "and", "in", "is", "it", "that", "he", "was", "for", "you", "be", "on", "are", "with", "as", "have", "not", "his", "they", "at", "this", "from", "by", "one", "or", "had", "but", "hot", "we", "there", "what", "were", "all", "do", "she", "can", "out", "an", "when", "said", "up", "your", "which", "will", "some", "their", "other", "if", "would", "about", "time", "so", "use", "her", "make", "into", "each", "them", "like", "how", "then", "many", "more", "him", "go", "my", "see", "who", "no", "way", "has", "these", "could", "word", "two", "look", "come", "write", "than", "long", "know", "its", "people", "day", "get", "over", "water", "first", "now", "take", "oil", "did", "may", "most", "been", "find", "sound", "new", "say", "year", "work", "down", "only", "number", "thing", "call", "man", "any", "after", "me", "back", "made", "good", "feel", "just", "place", "give", "live", "where", "little", "think", "because", "part", "our", "nation", "round", "through", "great", "very", "become", "much", "name", "before", "show", "also", "develop", "came", "well", "too", "general", "low", "want", "sentence", "mean", "old", "even", "right", "tell", "form", "cause", "same", "differ", "boy", "such", "turn", "must", "another", "move", "help", "three", "under", "does", "line", "child", "hand", "small", "put", "against", "here", "end", "set", "around", "interest", "every", "state", "large", "person", "us", "home", "high", "port", "follow", "big", "read", "public", "need", "during", "present", "air", "land", "ask", "house", "why", "different", "hold", "govern", "play", "men", "went", "possible", "world", "spell", "side", "should", "off", "consider", "act", "own", "program", "problem", "kind", "however", "point", "lead", "try", "system", "again", "still", "picture", "order", "change", "away", "add", "plan", "animal", "fact", "school", "since", "mother", "increase", "between", "early", "real", "build", "page", "course", "last", "self", "stand", "late", "near", "never", "head", "answer", "found", "light", "study", "learn", "father", "country", "below", "earth", "food", "seem", "keep", "might", "plant", "eye", "life", "while", "cover", "sun", "those", "few", "thought", "tree", "without", "leave", "city", "begin", "start", "door", "both", "open", "don't", "cross", "story", "run", "letter", "saw", "along", "left", "something", "hard", "grow", "draw", "close", "four", "don't", "press", "next", "sea", "group", "example", "together", "important", "night", "got", "let", "always", "paper", "children", "often", "white", "far", "walk", "ease", "stop", "until", "mile", "music", "feet", "car", "face", "mark", "river", "book", "took", "carry", "began", "later", "second", "miss", "care", "enough", "once", "eat", "rain", "hear", "idea", "room", "friend", "really", "almost", "above", "fish", "girl", "watch", "mountain", "sometimes", "north", "base", "young", "cut", "talk", "horse", "soon", "list", "sure", "song", "being", "color", "family", "wood", "it's", "main"];

            function S(e) {
                var t = j.length;
                return a(Array(e)).map((function () {
                    return j[~~(Math.random() * t)]
                }))
            }
            var k = r("YFqc"),
                E = r.n(k),
                x = r("Ls3p");
            u.a.createElement;

            function T() {
                var e = Object(i.a)(["\n      min-width: 640px;\n    "]);
                return T = function () {
                    return e
                }, e
            }
            var I = {
                    container: {
                        height: "100vh",
                        minWidth: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    main: [{
                        maxWidth: "50%"
                    }, Object(l.b)(T())],
                    title: {
                        "--text-opacity": "1",
                        fontSize: "2.25rem",
                        color: ["#1c64f2", "rgba(28, 100, 242, var(--text-opacity))"],
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale"
                    },
                    typingInput: {
                        height: "0",
                        width: "0"
                    },
                    footer: {
                        position: "fixed",
                        bottom: "0",
                        paddingBottom: "2rem",
                        textAlign: "center"
                    },
                    header: {
                        position: "fixed",
                        top: "0",
                        right: "2rem",
                        paddingTop: "1rem",
                        textAlign: "right"
                    },
                    githubLink: {
                        fontSize: "0.75rem"
                    },
                    result: {
                        marginTop: "1rem",
                        textAlign: "center",
                        fontSize: "1.25rem"
                    },
                    restart: {
                        marginTop: "0.5rem",
                        textAlign: "center"
                    },
                    restartButton: {
                        "--border-opacity": "1",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        backgroundColor: "transparent",
                        fontWeight: 600,
                        borderWidth: "1px",
                        borderColor: ["#3f83f8", "rgba(63, 131, 248, var(--border-opacity))"],
                        borderRadius: "0.25rem",
                        "&:hover": {
                            "--bg-opacity": "1",
                            "--text-opacity": "1",
                            backgroundColor: ["#3f83f8", "rgba(63, 131, 248, var(--bg-opacity))"],
                            color: ["#ffffff", "rgba(255, 255, 255, var(--text-opacity))"],
                            borderColor: "transparent"
                        }
                    },
                    restartHint: {
                        marginTop: "0.25rem",
                        fontSize: "0.75rem"
                    },
                    liveWpm: {
                        fontSize: "1rem"
                    }
                },
                R = function () {
                    var e = Object(s.useState)([""]),
                        t = e[0],
                        r = e[1],
                        n = Object(s.useState)([""]),
                        o = n[0],
                        i = n[1],
                        f = Object(s.useState)(!0),
                        d = f[0],
                        p = f[1],
                        b = Object(s.useState)(!1),
                        h = b[0],
                        g = b[1],
                        m = Object(s.useState)(!1),
                        y = m[0],
                        j = m[1],
                        k = Object(s.useState)(0),
                        T = k[0],
                        R = k[1],
                        _ = Object(s.useState)(0),
                        P = _[0],
                        C = _[1],
                        A = Object(s.useState)(0),
                        B = A[0],
                        D = A[1],
                        M = Object(s.useState)(0),
                        W = M[0],
                        L = M[1],
                        F = Object(s.useState)(0),
                        N = F[0],
                        U = F[1],
                        z = Object(s.useState)(!1),
                        H = z[0],
                        K = z[1],
                        q = Object(w.b)(),
                        J = Object(c.a)(q, 2),
                        X = J[0],
                        Y = J[1],
                        G = Object(v.b)(),
                        V = Object(c.a)(G, 1)[0];
                    Object(s.useEffect)((function () {
                        window._seed ? r(window._seed.words.split(" ")) : r(S(30))
                    }), []), Object(s.useEffect)((function () {
                        var e;
                        return y ? e = setInterval((function () {
                                U((function (e) {
                                    return e + 1e3
                                }))
                            }), 1e3) : (U(0), clearInterval(e)),
                            function () {
                                return clearInterval(e)
                            }
                    }), [y]), Object(s.useEffect)((function () {
                        L(Math.round(60 * X.correct / (N / 1e3)) || 0)
                    }), [N]);
                    var Z = function () {
                        r(S(30)), i([""]), p(!0), g(!1), j(!1), R(0), C(0), D(0), L(0), U(0), K(!1), Y({
                            type: "reset"
                        })
                    };
                    return Object(s.useEffect)((function () {
                        y && !h && R(+new Date), y && h && C(+new Date)
                    }), [y, h]), Object(s.useEffect)((function () {
                        T && P && !B && D(Math.round(60 * X.correct / ((P - T) / 1e3)))
                    }), [T, P, B]), Object(l.c)("div", {
                        css: I.container,
                        onClick: function () {
                            return document.getElementById("typingInput").focus()
                        }
                    }, Object(l.c)("div", {
                        css: I.header
                    }, V.user ? Object(l.c)(u.a.Fragment, null, Object(l.c)("span", null, V.user.email), Object(l.c)("button", {
                        css: {
                            marginLeft: "1rem",
                            cursor: "pointer"
                        },
                        onClick: function () {
                            return x.a.signOut()
                        }
                    }, "Logout")) : Object(l.c)(E.a, {
                        href: "/login"
                    }, Object(l.c)("a", null, ""))), Object(l.c)("main", {
                        css: I.main
                    }, Object(l.c)("h1", {
                        css: I.title
                    }, "evan's typing test thing"), Object(l.c)(O, {
                        words: t,
                        userWords: o,
                        showCaret: d,
                        finished: h
                    }), y && !h && Object(l.c)("div", {
                        css: I.liveWpm
                    }, W, " wpm"), y && Object(l.c)("div", {
                        css: I.liveWpm
                    }, "Stats (correct/wrong/total) : ", X.correct, "/", X.wrong, "/", X.total), h && P && Object(l.c)(u.a.Fragment, null, Object(l.c)("div", {
                        css: I.result
                    }, "Good job! ", B, " wpm"), Object(l.c)("div", {
                        css: I.restart
                    }, Object(l.c)("button", {
                        css: I.restartButton,
                        onClick: Z
                    }, "Restart"), Object(l.c)("div", {
                        css: I.restartHint
                    }, "Click or press ", Object(l.c)("code", null, "Enter")))), H && Object(l.c)(u.a.Fragment, null, Object(l.c)("div", {
                        css: I.restart
                    }, Object(l.c)("button", {
                        css: I.restartButton,
                        onClick: Z
                    }, "Restart"), Object(l.c)("div", {
                        css: I.restartHint
                    }, "Press ", Object(l.c)("code", null, "Enter"), " again to restart typing."))), Object(l.c)("input", {
                        id: "typingInput",
                        "data-testid": "typingInput",
                        css: I.typingInput,
                        type: "text",
                        ref: function (e) {
                            return e && e.focus()
                        },
                        onKeyDown: function (e) {
                            e.preventDefault();
                            var r = e.key,
                                n = e.altKey,
                                c = e.ctrlKey,
                                s = e.metaKey;
                            if ("Backspace" == r) return function (e) {
                                var t = e.word,
                                    r = void 0 !== t && t,
                                    n = a(o);
                                n[n.length - 1] = r ? "" : n[n.length - 1].slice(0, -1), i(n)
                            }({
                                word: n || c || s
                            });
                            if ("Enter" == r) return function () {
                                if (h || H) return Z();
                                y && K(!0)
                            }();
                            if (!(1 != r.length || n || c || s)) {
                                if (H && K(!1), " " == r) return function () {
                                    if (o[o.length - 1].length)
                                        if (o.length != t.length) {
                                            var e = a(o);
                                            e[e.length] = "", i(e)
                                        } else g(!0)
                                }();
                                y || j(!0);
                                var u = a(o);
                                u[u.length - 1] = u[u.length - 1].concat(r), i(u), o.length == t.length && u[u.length - 1] == t[t.length - 1] && g(!0)
                            }
                        },
                        onBlur: function () {
                            p(!1)
                        },
                        onFocus: function () {
                            p(!0)
                        },
                        tabIndex: 0
                    })), Object(l.c)("div", {
                        css: I.footer
                    }, Object(l.c)("a", {
                        css: I.githubLink,
                        href: "https://evan.systems",
                        target: "_blank",
                        rel: "noreferrer"
                    }, "Developer Website")))
                };
            t.default = R
        },
        RwhY: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return S
            })), r.d(t, "b", (function () {
                return j
            }));
            var n = r("ODXe"),
                o = r("o0o1"),
                a = r.n(o);

            function c(e, t, r, n, o, a, c) {
                try {
                    var i = e[a](c),
                        s = i.value
                } catch (u) {
                    return void r(u)
                }
                i.done ? t(s) : Promise.resolve(s).then(n, o)
            }
            var i = r("rePB"),
                s = r("q1tI"),
                u = r.n(s),
                l = r("Ztiw"),
                f = r("Ls3p"),
                d = u.a.createElement;

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function (t) {
                        Object(i.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var h = {
                    correct: 0,
                    wrong: 0,
                    total: 0,
                    loading: !1
                },
                g = function (e, t) {
                    switch (t.type) {
                        case "incrementCorrect":
                            return b(b({}, e), {}, {
                                correct: e.correct + 1,
                                total: e.total + 1
                            });
                        case "incrementWrong":
                            return b(b({}, e), {}, {
                                wrong: e.wrong + 1,
                                total: e.total + 1
                            });
                        case "reset":
                            return b({}, h);
                        case "START_SUBMIT_STATS":
                            return b(b({}, e), {}, {
                                loading: !0
                            });
                        case "FINISH_SUBMIT_STATS":
                        case "ERROR_SUBMIT_STATS":
                            return b(b({}, e), {}, {
                                loading: !1
                            });
                        default:
                            throw new Error("Unhandled action type")
                    }
                },
                m = {
                    SUBMIT_STATS: function (e) {
                        var t = e.dispatch,
                            r = e.signal,
                            n = e.getState;
                        return function () {
                            var e, o = (e = a.a.mark((function e(o) {
                                var c, i, s, u;
                                return a.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t({
                                                type: "START_SUBMIT_STATS"
                                            }), e.prev = 1, c = n(), i = c.correct, s = c.wrong, u = c.total, e.next = 5, f.b.collection("results").add({
                                                stats: {
                                                    correct: i,
                                                    wrong: s,
                                                    total: u
                                                },
                                                timestamp: +new Date,
                                                user: o.payload.uid
                                            });
                                        case 5:
                                            r.aborted || t({
                                                type: "FINISH_SUBMIT_STATS"
                                            }), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), r.aborted || t({
                                                type: "ERROR_SUBMIT_STATS"
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })), function () {
                                var t = this,
                                    r = arguments;
                                return new Promise((function (n, o) {
                                    var a = e.apply(t, r);

                                    function i(e) {
                                        c(a, n, o, i, s, "next", e)
                                    }

                                    function s(e) {
                                        c(a, n, o, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function (e) {
                                return o.apply(this, arguments)
                            }
                        }()
                    }
                },
                w = u.a.createContext(void 0),
                v = u.a.createContext(void 0);
            w.displayName = "Stats";
            w.Consumer;

            function y() {
                var e = Object(s.useContext)(w);
                if (void 0 === e) throw new Error("useStatsState must be used within a StatsProvider");
                return e
            }

            function O() {
                var e = Object(s.useContext)(v);
                if (void 0 === e) throw new Error("useStatsDispatch must be used within a StatsProvider");
                return e
            }

            function j() {
                return [y(), O()]
            }
            var S = function (e) {
                var t = e.children,
                    r = e.initialState,
                    o = void 0 === r ? h : r,
                    a = Object(l.useReducerAsync)(g, o, m),
                    c = Object(n.a)(a, 2),
                    i = c[0],
                    s = c[1];
                return d(w.Provider, {
                    value: i
                }, d(v.Provider, {
                    value: s
                }, t))
            }
        },
        YFqc: function (e, t, r) {
            e.exports = r("cTJO")
        },
        Ztiw: function (e, t, r) {
            ! function (e, t) {
                var r = "undefined" == typeof window || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? t.useEffect : t.useLayoutEffect;
                e.useReducerAsync = function (e, n, o, a) {
                    var c, i = ((c = t.useRef()).current || (c.current = new AbortController), t.useEffect((function () {
                            return function () {
                                c.current.abort()
                            }
                        }), []), c.current.signal),
                        s = a || o,
                        u = t.useReducer(e, n, a && o),
                        l = u[0],
                        f = u[1],
                        d = t.useRef(l);
                    r((function () {
                        d.current = l
                    }), [l]);
                    var p = t.useCallback((function () {
                            return d.current
                        }), []),
                        b = t.useCallback((function (e) {
                            var t = (e || {}).type,
                                r = t && s[t] || null;
                            r ? r({
                                dispatch: f,
                                getState: p,
                                signal: i
                            })(e) : f(e)
                        }), [s, p, i]);
                    return [l, b]
                }
            }(t, r("q1tI"))
        },
        cTJO: function (e, t, r) {
            "use strict";
            var n = r("J4zp"),
                o = r("284h");
            t.__esModule = !0, t.default = void 0;
            var a, c = o(r("q1tI")),
                i = r("elyg"),
                s = r("nOHt"),
                u = new Map,
                l = window.IntersectionObserver,
                f = {};
            var d = function (e, t) {
                var r = a || (l ? a = new l((function (e) {
                    e.forEach((function (e) {
                        if (u.has(e.target)) {
                            var t = u.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (a.unobserve(e.target), u.delete(e.target), t())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0);
                return r ? (r.observe(e), u.set(e, t), function () {
                    try {
                        r.unobserve(e)
                    } catch (t) {
                        console.error(t)
                    }
                    u.delete(e)
                }) : function () {}
            };

            function p(e, t, r, n) {
                (0, i.isLocalURL)(t) && (e.prefetch(t, r, n).catch((function (e) {
                    0
                })), f[t + "%" + r] = !0)
            }
            var b = function (e) {
                var t = !1 !== e.prefetch,
                    r = c.default.useState(),
                    o = n(r, 2),
                    a = o[0],
                    u = o[1],
                    b = (0, s.useRouter)(),
                    h = b && b.pathname || "/",
                    g = c.default.useMemo((function () {
                        var t = (0, i.resolveHref)(h, e.href, !0),
                            r = n(t, 2),
                            o = r[0],
                            a = r[1];
                        return {
                            href: o,
                            as: e.as ? (0, i.resolveHref)(h, e.as) : a || o
                        }
                    }), [h, e.href, e.as]),
                    m = g.href,
                    w = g.as;
                c.default.useEffect((function () {
                    if (t && l && a && a.tagName && (0, i.isLocalURL)(m) && !f[m + "%" + w]) return d(a, (function () {
                        p(b, m, w)
                    }))
                }), [t, a, m, w, b]);
                var v = e.children,
                    y = e.replace,
                    O = e.shallow,
                    j = e.scroll;
                "string" === typeof v && (v = c.default.createElement("a", null, v));
                var S = c.Children.only(v),
                    k = {
                        ref: function (e) {
                            e && u(e), S && "object" === typeof S && S.ref && ("function" === typeof S.ref ? S.ref(e) : "object" === typeof S.ref && (S.ref.current = e))
                        },
                        onClick: function (e) {
                            S.props && "function" === typeof S.props.onClick && S.props.onClick(e), e.defaultPrevented || function (e, t, r, n, o, a, c) {
                                ("A" !== e.currentTarget.nodeName || ! function (e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && (0, i.isLocalURL)(r)) && (e.preventDefault(), null == c && (c = n.indexOf("#") < 0), t[o ? "replace" : "push"](r, n, {
                                    shallow: a
                                }).then((function (e) {
                                    e && c && (window.scrollTo(0, 0), document.body.focus())
                                })))
                            }(e, b, m, w, y, O, j)
                        }
                    };
                return t && (k.onMouseEnter = function (e) {
                    (0, i.isLocalURL)(m) && (S.props && "function" === typeof S.props.onMouseEnter && S.props.onMouseEnter(e), p(b, m, w, {
                        priority: !0
                    }))
                }), (e.passHref || "a" === S.type && !("href" in S.props)) && (k.href = (0, i.addBasePath)(w)), c.default.cloneElement(S, k)
            };
            t.default = b
        },
        h4VS: function (e, t, r) {
            "use strict";

            function n(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            r.d(t, "a", (function () {
                return n
            }))
        }
    },
    [
        ["/EDR", 1, 2, 4, 5, 0, 3]
    ]
]);