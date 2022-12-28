(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7314: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(4541);
        },
      ]);
    },
    4541: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return U;
          },
        });
      var s = a(2322),
        n = a(2784),
        r = a(2779),
        o = a.n(r);
      let l = (0, n.createContext)({}),
        i = (e) => {
          let {
              category: t,
              categoryName: a,
              flashcardsByCategory: r,
              numberOfFlashcards: i = 0,
              setCategory: c,
            } = e,
            { allFlashcards: d, setFilteredFlashcards: h } = (0, n.useContext)(
              l
            ),
            u = (e) => {
              let a = t === e || "all" === e;
              c(a ? "all" : e), h(a ? d : r);
            };
          return (0, s.jsxs)("button", {
            className: o()({ active: a === t }),
            onClick: () => u(a),
            children: [a, " (", i, ")"],
          });
        },
        c = (e) => {
          let {
              category: t,
              setCategory: a,
              allFlashcards: r,
              setStarredFlashcardsIDs: o,
              starredFlashcardsIDs: i,
            } = (0, n.useContext)(l),
            c = r.filter((e) => (null == i ? void 0 : i.includes(e.id)));
          (0, n.useEffect)(() => {
            let e = localStorage.getItem("starredFlashcards"),
              t = e ? [...JSON.parse(e)] : [],
              a = t.length !== (null == i ? void 0 : i.length);
            a && o(t);
          }, [r.length, null == i ? void 0 : i.length]);
          let d = (0, n.useMemo)(() => {
            let n = r.length > 0;
            return n
              ? (0, s.jsx)(e, {
                  category: t,
                  categoryName: "starred",
                  flashcardsByCategory: c,
                  numberOfFlashcards: c.length,
                  setCategory: a,
                })
              : null;
          }, [null == c ? void 0 : c.length, null == i ? void 0 : i.length]);
          return d;
        },
        d = () => c(i);
      var h = a(4556),
        u = a.n(h);
      let _ = (e, t) => {
          let {
              category: a,
              setCategory: r,
              allFlashcards: o,
            } = (0, n.useContext)(l),
            i = "all" === t ? o : o.filter((e) => e.category === t);
          return (0, s.jsx)(e, {
            category: a,
            categoryName: t,
            flashcardsByCategory: i,
            numberOfFlashcards: i.length,
            setCategory: r,
          });
        },
        f = (e) => {
          let { categoryName: t } = e;
          return _(i, t);
        },
        m = () => {
          let { allFlashcards: e, starredFlashcardsIDs: t } = (0, n.useContext)(
              l
            ),
            a = (0, n.useMemo)(
              () =>
                e.length > 0
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(f, { categoryName: "all" }),
                        (0, s.jsx)(f, { categoryName: "frontend" }),
                        (0, s.jsx)(f, { categoryName: "other" }),
                      ],
                    })
                  : null,
              [e.length]
            ),
            r = (0, n.useMemo)(
              () => (t && t.length > 0 ? (0, s.jsx)(d, {}) : null),
              [null == t ? void 0 : t.length]
            );
          return (0, s.jsxs)("div", {
            className: u().categoriesMenu,
            children: [a, r],
          });
        };
      var g = a(4667),
        v = a.n(g);
      let p = () => {
        let {
            allFlashcards: e,
            setCategory: t,
            setFilteredFlashcards: a,
          } = (0, n.useContext)(l),
          [r, o] = (0, n.useState)(""),
          i = (e) => {
            o(e.target.value.toLowerCase());
          };
        return (
          (0, n.useEffect)(() => {
            if (e.length > 0) {
              let s = setTimeout(() => {
                let s = e.filter((e) => e.question.toLowerCase().includes(r));
                a(s), t("all");
              }, 400);
              return () => clearTimeout(s);
            }
          }, [r, t, a]),
          (0, s.jsx)("div", {
            className: v().filter,
            children: (0, s.jsx)("input", {
              onChange: i,
              placeholder:
                "\uD83D\uDD0D Type a keyword to filter flashcards...",
              type: "search",
            }),
          })
        );
      };
      var y = a(5368),
        x = a.n(y);
      let C = (e) => {
          let { flashcards: t, prevItem: a } = e,
            s = t.filter((e) => e !== a),
            n = s.length;
          return s[Math.floor(Math.random() * n)];
        },
        N = (e) => {
          let t,
            { flashcardID: a, setStarredFlashcardsIDs: s } = e,
            n = localStorage.getItem("starredFlashcards"),
            r = n && JSON.parse(n || "").includes(a);
          if (n && r) {
            let o = JSON.parse(n).filter((e) => e !== a);
            t = o;
          } else t = n ? [...JSON.parse(n), a] : [a];
          s(t), localStorage.setItem("starredFlashcards", JSON.stringify(t));
        },
        b = (e) => {
          let { contextLength: t = 0, setStarredFlashcardsIDs: a } = e,
            s = localStorage.getItem("starredFlashcards"),
            n = s ? [...JSON.parse(s)] : null,
            r = n && n.length !== t;
          r && a(n);
        },
        j = (e) => {
          let { flashcard: t, filteredFlashcards: a, setFlashcard: s } = e;
          if (t) {
            let n = a.indexOf(t);
            s(0 === n ? a[a.length - 1] : a[n - 1]);
          }
        },
        T = (e) => {
          let { flashcard: t, filteredFlashcards: a, setFlashcard: s } = e;
          if (t) {
            let n = a.indexOf(t);
            s(n === a.length - 1 ? a[0] : a[n + 1]);
          }
        };
      var w = a(2993),
        E = a.n(w);
      let S = (e) => {
          let { flashcardID: t } = e,
            { setStarredFlashcardsIDs: a, starredFlashcardsIDs: r } = (0,
            n.useContext)(l),
            i = null == r ? void 0 : r.includes(t);
          return (0, s.jsx)("div", {
            className: o()(E().cardActions),
            children: (0, s.jsxs)("span", {
              className: o()(E().starCard, {
                [E().starCardActive]: null == r ? void 0 : r.includes(t),
              }),
              onClick: () => N({ flashcardID: t, setStarredFlashcardsIDs: a }),
              children: [
                "⭐",
                (0, s.jsx)("span", {
                  className: o()(E().starCardTooltip),
                  children: i
                    ? 'click to remove from "starred" section'
                    : 'click to save in "starred" section',
                }),
              ],
            }),
          });
        },
        I = () => {
          let {
              filteredFlashcards: e,
              starredFlashcardsIDs: t,
              setStarredFlashcardsIDs: a,
            } = (0, n.useContext)(l),
            [r, i] = (0, n.useState)(null),
            [c, d] = (0, n.useState)(!1),
            h = x().sanitize,
            u = (e) => {
              if (e) {
                let t = C({ flashcards: e });
                i(t);
              }
            },
            _ = () => d(!c);
          return (
            (0, n.useEffect)(() => {
              u(e);
            }, [e]),
            (0, n.useEffect)(() => {
              b({
                contextLength: null == t ? void 0 : t.length,
                setStarredFlashcardsIDs: a,
              });
            }, [a]),
            r
              ? (0, s.jsxs)("div", {
                  className: E().grid,
                  children: [
                    (0, s.jsxs)("div", {
                      className: o()(E().card, E().question),
                      children: [
                        (0, s.jsx)("div", {
                          className: o()(E().cardContent),
                          dangerouslySetInnerHTML: { __html: h(r.question) },
                          onClick: _,
                        }),
                        (0, s.jsx)(S, { flashcardID: r.id }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: E().navigation,
                      children: [
                        (0, s.jsx)("button", {
                          className: E().arrow,
                          onClick: () =>
                            j({
                              flashcard: r,
                              filteredFlashcards: e,
                              setFlashcard: i,
                            }),
                          children: "←",
                        }),
                        (0, s.jsxs)("button", {
                          className: E().visibility,
                          onClick: _,
                          children: [c ? "HIDE" : "SHOW", " ANSWER"],
                        }),
                        (0, s.jsx)("button", {
                          className: E().arrow,
                          onClick: () =>
                            T({
                              flashcard: r,
                              filteredFlashcards: e,
                              setFlashcard: i,
                            }),
                          children: "→",
                        }),
                      ],
                    }),
                    c
                      ? (0, s.jsx)("div", {
                          className: o()(E().card, E().answer),
                          dangerouslySetInnerHTML: { __html: h(r.answer) },
                        })
                      : null,
                  ],
                })
              : null
          );
        };
      var F = a(9931),
        q = [
          {
            id: "asdjh1",
            question:
              "This is the first <b>demo</b> question that comes up if you don't provide the necessary data to connect to the database. ",
            answer:
              "This is the first response <b>demo</b> that appears if you do not provide the necessary data to connect to the database. Both questions and answers can be <code>formatted</code>. ",
            category: "frontend",
            visible: !0,
          },
          {
            id: "asdjh1",
            question:
              "This is the second <b>demo</b> question that comes up if you don't provide the necessary data to connect to the database. ",
            answer:
              "This is the second response <b>demo</b> that appears if you do not provide the necessary data to connect to the database. Both questions and answers can be <code>formatted</code>. ",
            category: "frontend",
            visible: !0,
          },
          {
            id: "asdjh1",
            question:
              "This is the third <b>demo</b> question that comes up if you don't provide the necessary data to connect to the database. ",
            answer:
              "This is the third response <b>demo</b> that appears if you do not provide the necessary data to connect to the database. Both questions and answers can be <code>formatted</code>. ",
            category: "other",
            visible: !0,
          },
          {
            id: "asdjh1",
            question:
              "This is the fourth <b>demo</b> question that comes up if you don't provide the necessary data to connect to the database. ",
            answer:
              "This is the fourth response <b>demo</b> that appears if you do not provide the necessary data to connect to the database. Both questions and answers can be <code>formatted</code>. ",
            category: "other",
            visible: !0,
          },
        ],
        O = a(3049),
        A = a(3542);
      let B = {
          apiKey: A.env.NEXT_PUBLIC_API_KEY,
          authDomain: A.env.NEXT_PUBLIC_AUTH_DOMAIN,
          projectId: A.env.NEXT_PUBLIC_PROJECT_ID,
          storageBucket: A.env.NEXT_PUBLIC_STORAGE_BUCKET,
          messagingSenderId: A.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
          appId: A.env.NEXT_PUBLIC_APP_ID,
        },
        D = (0, O.ZF)(B),
        L = (0, F.ad)(D);
      var P = a(3542);
      let k = async () => {
        if (!P.env.NEXT_PUBLIC_API_KEY) return q;
        {
          let e = (0, F.hJ)(L, "flashcards/"),
            t = await (0, F.PL)(e),
            a = t.docs.map((e) => e.data());
          return a;
        }
      };
      var H = a(4393),
        M = a.n(H);
      function U() {
        let [e, t] = (0, n.useState)([]),
          [a, r] = (0, n.useState)("all"),
          [o, i] = (0, n.useState)([]),
          [c, d] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            let e = !0;
            return (
              o.length < 1 &&
                k()
                  .then((a) => {
                    e &&
                      (t(a),
                      i(a),
                      sessionStorage.setItem(
                        "numberOfAllFlashcards",
                        String(a.length)
                      ));
                  })
                  .catch((e) => console.log(e)),
              () => {
                e = !1;
              }
            );
          }, []),
          (0, s.jsx)("div", {
            className: M().container,
            children: (0, s.jsxs)(l.Provider, {
              value: {
                allFlashcards: e,
                category: a,
                filteredFlashcards: o,
                setCategory: r,
                setFilteredFlashcards: i,
                setStarredFlashcardsIDs: d,
                starredFlashcardsIDs: c,
              },
              children: [
                (0, s.jsx)("div", {
                  className: M().header,
                  children: (0, s.jsx)("h1", {
                    className: M().title,
                    children: "Dev Learn App",
                  }),
                }),
                (0, s.jsxs)("main", {
                  className: M().main,
                  children: [
                    (0, s.jsxs)("div", {
                      className: M().filters,
                      children: [(0, s.jsx)(p, {}), (0, s.jsx)(m, {})],
                    }),
                    (0, s.jsx)(I, {}),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    4556: function (e) {
      e.exports = { categoriesMenu: "Categories_categoriesMenu__ER8gz" };
    },
    4667: function (e) {
      e.exports = { filter: "FilterByKeyword_filter__i7umT" };
    },
    2993: function (e) {
      e.exports = {
        grid: "Flashcard_grid__uARoE",
        card: "Flashcard_card__UfLqH",
        question: "Flashcard_question__b5moY",
        cardContent: "Flashcard_cardContent__9cc5e",
        cardActions: "Flashcard_cardActions__SpdMg",
        starCard: "Flashcard_starCard__287_b",
        starCardTooltip: "Flashcard_starCardTooltip__Bwl4y",
        starCardActive: "Flashcard_starCardActive__sDH76",
        answer: "Flashcard_answer__cNHmu",
        navigation: "Flashcard_navigation__4Rtq5",
        arrow: "Flashcard_arrow__eqoiD",
        visibility: "Flashcard_visibility__VUHWw",
      };
    },
    4393: function (e) {
      e.exports = {
        container: "Home_container__97eC3",
        header: "Home_header__CyQ_T",
        title: "Home_title__q0Qg4",
        main: "Home_main__OVLM4",
        filters: "Home_filters__3VmYn",
      };
    },
  },
  function (e) {
    e.O(0, [192, 121, 774, 888, 179], function () {
      return e((e.s = 7314));
    }),
      (_N_E = e.O());
  },
]);
