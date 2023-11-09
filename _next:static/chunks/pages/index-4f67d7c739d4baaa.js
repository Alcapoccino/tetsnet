(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    75557: function (e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
            return r(42665)
        }
        ])
    },
    92090: function (e, t, r) {
        "use strict";
        r.d(t, {
            T: function () {
                return s
            }
        });
        var n = r(85893)
            , o = r(33820);
        let a = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        a.primary_font;
        let c = a.secondary_font;
        a.primary_font_color,
            a.secondary_font_color;
        let s = () => (0,
            n.jsx)(o.NL.Custom, {
                children: e => {
                    let { account: t, chain: r, openAccountModal: o, openChainModal: a, openConnectModal: s, authenticationStatus: l, mounted: i } = e
                        , d = i && "loading" !== l;
                    return (0,
                        n.jsx)("div", {
                            ...!d && {
                                "aria-hidden": !0,
                                style: {
                                    opacity: 0,
                                    pointerEvents: "none",
                                    userSelect: "none"
                                }
                            },
                            children: d && t && r && (!l || "authenticated" === l) ? r.unsupported ? (0,
                                n.jsx)("button", {
                                    onClick: a,
                                    type: "button",
                                    className: "text-2xl ".concat(c, " flex justify-center items-center text-white bg-gradient-to-br from-fuchsia-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium px-5 py-2.5 text-center rounded-xl shadow-xl btn-bounce"),
                                    children: "WRONG\xa0NETWORK"
                                }) : (0,
                                    n.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            gap: 12
                                        },
                                        children: [(0,
                                            n.jsx)("button", {
                                                onClick: a,
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                type: "button"
                                            }), (0,
                                                n.jsxs)("button", {
                                                    onClick: o,
                                                    type: "button",
                                                    className: "text-2xl ".concat(c, " flex justify-center items-center text-white bg-gradient-to-br from-fuchsia-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-5 py-2.5 text-center rounded-xl shadow-xl btn-bounce"),
                                                    children: [t.displayName, (0,
                                                        n.jsx)("br", {})]
                                                })]
                                    }) : (0,
                                        n.jsx)("button", {
                                            onClick: s,
                                            type: "button",
                                            className: " text-2xl ".concat(c, " flex justify-center items-center text-white bg-gradient-to-br from-fuchsia-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium px-6 py-2.5 text-center rounded-xl shadow-xl btn-bounce "),
                                            children: "CONNECT"
                                        })
                        })
                }
            })
    },
    42665: function (e, t, r) {
        "use strict";
        r.r(t),
            r.d(t, {
                default: function () {
                    return eF
                }
            });
        var n = r(85893);
        r(41664);
        let o = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-500",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        o.primary_font,
            o.secondary_font,
            o.primary_font_color,
            o.secondary_font_color;
        var a = r(5152)
            , c = r.n(a);
        r(85518);
        var s = r(67294);
        let l = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-gray-900 via-gray-900 to-gray-700",
            secondary_bg: "_border-4 border-cyan-300 _blurred-background _image-background "
        };
        l.primary_font,
            l.secondary_font,
            l.primary_font_color,
            l.secondary_font_color,
            l.primary_bg,
            l.secondary_bg,
            r(72141);
        var i = r(55678)
            , d = r(80803)
            , x = r(42717)
            , f = r(69077);
        let m = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        m.primary_font;
        let _ = m.secondary_font;
        m.primary_font_color,
            m.secondary_font_color;
        let y = e => {
            let { count: t, totalCost: r } = e
                , [o, a] = s.useState(t);
            (0,
                f.t_)();
            let { data: c } = (0,
                f.py)()
                , { config: l, error: m, isError: y } = (0,
                    f.PJ)({
                        address: x.re.NFTContract_ADDRESS,
                        abi: x.Ud.NFTContract_ABI,
                        walletClient: c,
                        functionName: "mint",
                        args: [parseInt(t)],
                        value: [(0,
                            d.f)(String(r))]
                    })
                , { data: u, error: b, isError: g, write: p } = (0,
                    f.GG)(l)
                , { isLoading: h, isSuccess: j } = (0,
                    f.BX)({
                        hash: null == u ? void 0 : u.hash,
                        onSettled() {
                            w()
                        }
                    })
                , w = () => i.Am.success("Successfully minted", {
                    toastId: "success",
                    position: "top-center",
                    autoClose: 5e3,
                    hideProgressBar: !1,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0,
                    theme: "dark"
                });
            return (0,
                n.jsx)(n.Fragment, {
                    children: (0,
                        n.jsx)("div", {
                            className: "w-full",
                            children: (0,
                                n.jsx)("button", {
                                    disabled: !p || h,
                                    onClick: () => null == p ? void 0 : p(),
                                    className: "w-full text-2xl ".concat(_, " flex justify-center items-center text-white bg-gradient-to-br from-fuchsia-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium px-5 py-2.5 text-center  rounded-xl shadow-xl btn-bounce"),
                                    children: h ? (0,
                                        n.jsxs)("div", {
                                            className: "flex flex-row items-center justify-center ",
                                            children: [(0,
                                                n.jsx)("span", {
                                                    className: "mr-2 text-violet-200",
                                                    children: "Minting"
                                                }), (0,
                                                    n.jsxs)("svg", {
                                                        className: "animate-spin h-4 w-4 text-violet-200",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [(0,
                                                            n.jsx)("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }), (0,
                                                                n.jsx)("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                })]
                                                    })]
                                        }) : "Mint"
                                })
                        })
                })
        }
            , u = {
                primary_font: "font-silkscreen",
                secondary_font: "font-silkscreen",
                primary_font_color: "text-gray-100",
                secondary_font_color: "text-gray-200",
                primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
                secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
            };
        u.primary_font;
        let b = u.secondary_font;
        u.primary_font_color;
        let g = u.secondary_font_color;
        function p(e) {
            let { count: t, handleClickUp: r, handleClickDown: o } = e;
            return (0,
                n.jsxs)("div", {
                    className: "flex justify-center items-center px-8 py-2",
                    children: [(0,
                        n.jsx)("button", {
                            className: "mx-4 w-12 h-8 text-2xl ".concat(b, " flex justify-center items-center text-white bg-gray-600  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center rounded-lg shadow-xl btn-bounce"),
                            onClick: o,
                            children: (0,
                                n.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-8 h-6 text-gray-300",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0,
                                        n.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "5",
                                            d: "M20 12H4"
                                        })
                                })
                        }), (0,
                            n.jsx)("h2", {
                                className: "mx-2 text-3xl text-center ".concat(g, " ").concat(b),
                                children: t
                            }), (0,
                                n.jsx)("button", {
                                    className: "mx-4 w-12 h-8 text-2xl ".concat(b, " flex justify-center items-center text-white bg-gray-600  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center rounded-lg shadow-xl btn-bounce"),
                                    onClick: r,
                                    children: (0,
                                        n.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-8 h-6 text-gray-300",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0,
                                                n.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "5",
                                                    d: "M12 4v16m8-8H4"
                                                })
                                        })
                                })]
                })
        }
        let h = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        h.primary_font;
        let j = h.secondary_font
            , w = h.primary_font_color
            , v = h.secondary_font_color;
        function k(e) {
            let { totalCost: t } = e;
            return t > 0 ? (0,
                n.jsx)("div", {
                    className: "my-2 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl xl:text-xl ".concat(j, " text-center ").concat(v),
                    children: (0,
                        n.jsxs)("div", {
                            className: "flex justify-between w-full",
                            children: [(0,
                                n.jsx)("p", {
                                    children: (0,
                                        n.jsx)("span", {
                                            className: "".concat(v),
                                            children: "TOTAL:"
                                        })
                                }), (0,
                                    n.jsxs)("p", {
                                        className: "".concat(w),
                                        children: [function (e) {
                                            let t = parseFloat(e).toString();
                                            return t
                                        }(t), " ", (0,
                                            n.jsx)("span", {
                                                className: "".concat(v),
                                                children: "Ξ"
                                            })]
                                    })]
                        })
                }) : (0,
                    n.jsx)("div", {
                        className: "my-2 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl  text-center ".concat(v, " ").concat(j),
                        children: "FREE CLAIM!"
                    })
        }
        var N = r(98848)
            , C = r(92090);
        let S = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        S.primary_font;
        let L = S.secondary_font;
        S.primary_font_color,
            S.secondary_font_color;
        let M = e => {
            let { count: t, totalCost: r, proof: o } = e
                , [a, c] = s.useState(t);
            (0,
                f.t_)();
            let { data: l } = (0,
                f.py)()
                , { config: m, error: _, isError: y } = (0,
                    f.PJ)({
                        address: x.re.NFTContract_ADDRESS,
                        abi: x.Ud.NFTContract_ABI,
                        walletClient: l,
                        functionName: "mintWL",
                        args: [parseInt(t), o],
                        value: [(0,
                            d.f)(String(r))]
                    })
                , { data: u, error: b, isError: g, write: p } = (0,
                    f.GG)(m)
                , { isLoading: h, isSuccess: j } = (0,
                    f.BX)({
                        hash: null == u ? void 0 : u.hash,
                        onSettled() {
                            w()
                        }
                    })
                , w = () => i.Am.success("Successfully minted", {
                    toastId: "success",
                    position: "top-center",
                    autoClose: 5e3,
                    hideProgressBar: !1,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0,
                    theme: "dark"
                });
            return (0,
                n.jsx)(n.Fragment, {
                    children: (0,
                        n.jsx)("div", {
                            className: "w-full",
                            children: (0,
                                n.jsx)("button", {
                                    disabled: !p || h,
                                    onClick: () => null == p ? void 0 : p(),
                                    className: "w-full text-2xl ".concat(L, " flex justify-center items-center text-white bg-gradient-to-br from-fuchsia-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-5 py-2.5 text-center  rounded-xl shadow-xl btn-bounce"),
                                    children: h ? (0,
                                        n.jsxs)("div", {
                                            className: "flex flex-row items-center justify-center ",
                                            children: [(0,
                                                n.jsx)("span", {
                                                    className: "mr-2 text-violet-200",
                                                    children: "Minting"
                                                }), (0,
                                                    n.jsxs)("svg", {
                                                        className: "animate-spin h-4 w-4 text-violet-200",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [(0,
                                                            n.jsx)("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }), (0,
                                                                n.jsx)("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                })]
                                                    })]
                                        }) : "Mint"
                                })
                        })
                })
        }
            , I = {
                primary_font: "font-silkscreen",
                secondary_font: "font-silkscreen",
                primary_font_color: "text-gray-100",
                secondary_font_color: "text-gray-200",
                primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
                secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
            }
            , P = I.primary_font;
        I.secondary_font;
        let E = I.primary_font_color;
        function A(e) {
            let { isPublicSaleActive: t, isWLSaleActive: r, maxMintAmount: o, nftPrice: a, updateTotalSupply: c, totalSupply: l, address: i, maxSupply: d, isConnected: x, maxFreeSupply: f, freePerWallet: m } = e
                , [_, u] = (0,
                    s.useState)(1)
                , [b, g] = (0,
                    s.useState)(0);
            parseInt(d);
            let h = parseInt(f)
                , j = parseInt(m);
            (0,
                s.useEffect)(() => {
                    if (x) {
                        let e = async () => {
                            let e = await (0,
                                N.Y5)(i);
                            g(e)
                        }
                            ;
                        e();
                        let t = setInterval(e, 3e3);
                        return () => clearInterval(t)
                    }
                }
                    , [_, i, x]);
            let w = () => {
                _ < o && u(_ + 1)
            }
                , v = () => {
                    _ > 1 && u(_ - 1)
                }
                , C = (a * Math.max(0, _ - (l < h && b < j ? Math.max(0, j - b) : 0))).toFixed(4);
            if (t || r)
                return (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                            n.jsxs)("div", {
                                className: " flex-col items-center justify-center text-left w-7/12 uppercase ",
                                children: [(0,
                                    n.jsx)(p, {
                                        count: _,
                                        handleClickUp: w,
                                        handleClickDown: v
                                    }), (0,
                                        n.jsx)(k, {
                                            totalCost: C
                                        }), (0,
                                            n.jsx)(y, {
                                                count: _,
                                                totalCost: C,
                                                address: i,
                                                isConnected: x
                                            })]
                            })
                    })
        }
        function W(e) {
            let { isPublicSaleActive: t, isWLSaleActive: r, setStatus: o, maxMintAmount: a, maxMintAmountWL: c, nftPrice: l, nftPriceWL: i, updateTotalSupply: d, totalSupply: x, address: f, maxSupply: m, isConnected: _, maxFreeSupply: y, isWhitelisted: u, proof: b } = e
                , [g, h] = (0,
                    s.useState)(1)
                , [j, w] = (0,
                    s.useState)(0)
                , [v, C] = (0,
                    s.useState)(0)
                , S = parseInt(m);
            (0,
                s.useEffect)(() => {
                    if (_) {
                        let e = async () => {
                            let e = await (0,
                                N.QO)(f);
                            w(e)
                        }
                            ;
                        e();
                        let t = setInterval(e, 3e3);
                        return () => clearInterval(t)
                    }
                }
                    , [g, f, _]),
                (0,
                    s.useEffect)(() => {
                        L()
                    }
                        , [g, i]);
            let L = () => {
                C((i * g).toFixed(4))
            }
                , I = () => {
                    g < c - j && h(g + 1)
                }
                , A = () => {
                    g > 1 && h(g - 1)
                }
                ;
            return x >= S ? (0,
                n.jsx)("div", {
                    className: "text-center text-4xl ".concat(E, " ").concat(P, " "),
                    children: "MINTED OUT!"
                }) : (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                            n.jsxs)("div", {
                                className: " flex-col items-center justify-center text-left w-7/12 uppercase ",
                                children: [(0,
                                    n.jsx)(p, {
                                        count: g,
                                        handleClickUp: I,
                                        handleClickDown: A
                                    }), (0,
                                        n.jsx)(k, {
                                            totalCost: v
                                        }), (0,
                                            n.jsx)(M, {
                                                count: g,
                                                totalCost: v,
                                                address: f,
                                                isConnected: _,
                                                proof: b
                                            })]
                            })
                    })
        }
        I.secondary_font_color;
        let F = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        F.primary_font;
        let T = F.secondary_font
            , V = F.primary_font_color
            , H = F.secondary_font_color;
        function B(e) {
            let { maxMintAmount: t, maxMintAmountWL: r, maxSupply: o, nftPrice: a, nftPriceWL: c, maxFreeSupply: s, freePerWallet: l } = e;
            return (0,
                n.jsx)("div", {
                    className: " flex-col items-center justify-center text-left w-7/12 uppercase ",
                    children: (0,
                        n.jsxs)("div", {
                            className: "text-violet-200 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl xl:text-xl ".concat(T),
                            children: [parseInt(s) > 0 && (0,
                                n.jsxs)("div", {
                                    className: "flex justify-between w-full border-dashed border-b-2 border-violet-200/20",
                                    children: [(0,
                                        n.jsx)("p", {
                                            children: (0,
                                                n.jsx)("span", {
                                                    className: "".concat(H),
                                                    children: "Free: "
                                                })
                                        }), (0,
                                            n.jsxs)("p", {
                                                className: "".concat(V),
                                                children: [String(l), " ", (0,
                                                    n.jsx)("span", {
                                                        className: "".concat(H),
                                                        children: "p/wallet"
                                                    })]
                                            })]
                                }), parseInt(s) > 0 && parseInt(s) < parseInt(o) && (0,
                                    n.jsxs)("div", {
                                        className: "flex justify-between w-full border-dashed border-b-2 border-violet-200/20 py-2",
                                        children: [(0,
                                            n.jsx)("p", {
                                                children: (0,
                                                    n.jsx)("span", {
                                                        className: "".concat(H),
                                                        children: "Until"
                                                    })
                                            }), (0,
                                                n.jsxs)("p", {
                                                    className: "".concat(V),
                                                    children: [String(s), " ", (0,
                                                        n.jsx)("span", {
                                                            className: "".concat(H),
                                                            children: "minted"
                                                        })]
                                                })]
                                    }), (0,
                                        n.jsx)("p", {
                                            children: (0,
                                                n.jsx)("br", {})
                                        }), (0,
                                            n.jsxs)("div", {
                                                className: "flex justify-between w-full",
                                                children: [(0,
                                                    n.jsx)("p", {
                                                        children: (0,
                                                            n.jsx)("span", {
                                                                className: "".concat(H),
                                                                children: "Public:"
                                                            })
                                                    }), (0,
                                                        n.jsxs)("p", {
                                                            className: "".concat(V),
                                                            children: [String(a), " ", (0,
                                                                n.jsx)("span", {
                                                                    className: "".concat(H),
                                                                    children: "Ξ"
                                                                })]
                                                        })]
                                            }), (0,
                                                n.jsxs)("div", {
                                                    className: "flex justify-between w-full border-dashed border-b-2 border-violet-200/20 py-2",
                                                    children: [(0,
                                                        n.jsx)("p", {
                                                            children: (0,
                                                                n.jsx)("span", {
                                                                    className: "".concat(H),
                                                                    children: "Max:"
                                                                })
                                                        }), (0,
                                                            n.jsxs)("p", {
                                                                className: "".concat(V),
                                                                children: [String(t), (0,
                                                                    n.jsx)("span", {
                                                                        className: "".concat(H),
                                                                        children: " per tx"
                                                                    })]
                                                            })]
                                                })]
                        })
                })
        }
        function O(e) {
            let { maxMintAmount: t, maxMintAmountWL: r, maxSupply: o, nftPrice: a, nftPriceWL: c, maxFreeSupply: s, freePerWallet: l } = e;
            return (0,
                n.jsx)("div", {
                    className: " flex-col items-center justify-center text-left w-7/12 uppercase",
                    children: (0,
                        n.jsxs)("div", {
                            className: "text-violet-200 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl ".concat(T),
                            children: [(0,
                                n.jsx)("p", {
                                    children: (0,
                                        n.jsx)("br", {})
                                }), (0,
                                    n.jsxs)("div", {
                                        className: "flex justify-between w-full",
                                        children: [(0,
                                            n.jsx)("p", {
                                                children: (0,
                                                    n.jsx)("span", {
                                                        className: "".concat(H),
                                                        children: "WL price:"
                                                    })
                                            }), (0,
                                                n.jsxs)("p", {
                                                    className: "".concat(V),
                                                    children: [String(c), " ", (0,
                                                        n.jsx)("span", {
                                                            className: "".concat(H),
                                                            children: "Ξ"
                                                        })]
                                                })]
                                    }), (0,
                                        n.jsxs)("div", {
                                            className: "flex justify-between w-full border-dashed border-b-2 border-violet-200/20 py-2",
                                            children: [(0,
                                                n.jsx)("p", {
                                                    children: (0,
                                                        n.jsx)("span", {
                                                            className: "".concat(H),
                                                            children: "Max:"
                                                        })
                                                }), (0,
                                                    n.jsxs)("p", {
                                                        className: "".concat(V),
                                                        children: [String(r), (0,
                                                            n.jsx)("span", {
                                                                className: "".concat(H),
                                                                children: " per wallet"
                                                            })]
                                                    })]
                                        })]
                        })
                })
        }
        F.primary_bg,
            F.secondary_bg;
        let z = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        z.primary_font;
        let D = z.secondary_font
            , R = z.primary_font_color;
        function U(e) {
            let { isPublicSaleActive: t, isWLSaleActive: r, totalSupply: o, maxSupply: a } = e;
            return (0,
                n.jsxs)(n.Fragment, {
                    children: [(t || r) && (0,
                        n.jsx)("p", {
                            className: "text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl  text-center ".concat(R, " ").concat(D, " "),
                            children: Number(o) >= Number(a) ? "MINTED OUT!" : (0,
                                n.jsxs)(n.Fragment, {
                                    children: ["Minted:", (0,
                                        n.jsx)("span", {
                                            className: "",
                                            children: " ".concat(o)
                                        }), "/", "".concat(a)]
                                })
                        }), " "]
                })
        }
        z.secondary_font_color,
            r(19470);
        let G = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        function J() {
            return (0,
                n.jsx)("main", {
                    id: "loading",
                    children: (0,
                        n.jsx)("div", {
                            className: " flex-col items-center justify-center mx-auto",
                            children: (0,
                                n.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center mt-10",
                                    children: [(0,
                                        n.jsxs)("svg", {
                                            className: "animate-spin h-8 w-8 ",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [(0,
                                                n.jsx)("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }), (0,
                                                    n.jsx)("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    })]
                                        }), (0,
                                            n.jsxs)("span", {
                                                className: "mr-2  text-center text-xl ",
                                                children: ["Loading Data ", (0,
                                                    n.jsx)("br", {}), " please wait a moment"]
                                            })]
                                })
                        })
                })
        }
        G.primary_font,
            G.secondary_font,
            G.primary_font_color,
            G.secondary_font_color;
        let Y = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        function X() {
            return (0,
                n.jsx)("div", {
                    className: " _border-4 _rounded-3xl _rounded-full overflow-hidden nft-image sm:m-4",
                    children: (0,
                        n.jsx)("img", {
                            src: "/images/reel.gif",
                            className: "max-w-[8rem] sm:max-w-[12rem] lg:max-w-full _shadow "
                        })
                })
        }
        Y.primary_font,
            Y.secondary_font,
            Y.primary_font_color,
            Y.secondary_font_color;
        let Z = x.re.NFTContract_ADDRESS
            , K = x.gy.chain_id
            , Q = x.VY.openSea
            , q = x.VY.twitter
            , $ = x.VY.discord;
        function ee() {
            if (!Q)
                return null;
            let e = "mainnet" === K
                , t = (0,
                    n.jsx)("svg", {
                        className: "w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 btn-bounce ",
                        viewBox: "0 0 90 90",
                        fill: "white",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                            n.jsx)("path", {
                                d: "M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
                            })
                    });
            return e ? (0,
                n.jsx)("a", {
                    href: Q,
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                        opacity: e ? 1 : .5
                    },
                    children: t
                }) : (0,
                    n.jsx)("div", {
                        style: {
                            opacity: .5
                        },
                        children: t
                    })
        }
        function et() {
            return q ? (0,
                n.jsx)("a", {
                    href: q,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                        n.jsx)("svg", {
                            className: "w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 btn-bounce ",
                            stroke: "currentColor",
                            fill: "white",
                            strokeWidth: "0",
                            viewBox: "0 0 24 22",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                                n.jsx)("path", {
                                    d: "M0.808029 0.499985L9.68807 12.0827L0.751953 21.5H2.76311L10.5867 13.255L16.9079 21.5H23.752L14.3723 9.26573L22.69 0.499985H20.6788L13.4737 8.09343L7.65209 0.499985H0.808029ZM3.76559 1.94514H6.90977L20.7939 20.0546H17.6498L3.76559 1.94514Z"
                                })
                        })
                }) : null
        }
        function er() {
            return $ ? (0,
                n.jsx)("a", {
                    href: $,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                        n.jsx)("svg", {
                            className: "w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 btn-bounce ",
                            stroke: "currentColor",
                            fill: "white",
                            strokeWidth: "0",
                            viewBox: "0 0 448 512",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                                n.jsx)("path", {
                                    d: "M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
                                })
                        })
                }) : null
        }
        function en() {
            return "mainnet" === K ? (0,
                n.jsx)("a", {
                    href: "https://etherscan.io/address/" + Z,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                        n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 293.775 293.667",
                            className: "w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 btn-bounce ",
                            fill: "white",
                            children: (0,
                                n.jsxs)("g", {
                                    id: "etherscan-logo-light-circle",
                                    transform: "translate(-219.378 -213.333)",
                                    children: [(0,
                                        n.jsx)("path", {
                                            id: "Path_1",
                                            "data-name": "Path 1",
                                            d: "M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.467-12.47h20.779a12.47,12.47,0,0,1,12.467,12.47v90.276s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.465-12.467h20.779A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152",
                                            transform: "translate(0 0)"
                                        }), (0,
                                            n.jsx)("path", {
                                                id: "Path_2",
                                                "data-name": "Path 2",
                                                d: "M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.405-232.79,128.793",
                                                transform: "translate(35.564 80.269)"
                                            })]
                                })
                        })
                }) : (0,
                    n.jsx)("div", {
                        children: (0,
                            n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 293.775 293.667",
                                className: "w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 btn-bounce ",
                                fill: "white",
                                opacity: .5,
                                children: (0,
                                    n.jsxs)("g", {
                                        id: "etherscan-logo-light-circle",
                                        transform: "translate(-219.378 -213.333)",
                                        children: [(0,
                                            n.jsx)("path", {
                                                id: "Path_1",
                                                "data-name": "Path 1",
                                                d: "M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.467-12.47h20.779a12.47,12.47,0,0,1,12.467,12.47v90.276s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.465-12.467h20.779A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152",
                                                transform: "translate(0 0)"
                                            }), (0,
                                                n.jsx)("path", {
                                                    id: "Path_2",
                                                    "data-name": "Path 2",
                                                    d: "M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.405-232.79,128.793",
                                                    transform: "translate(35.564 80.269)"
                                                })]
                                    })
                            })
                    })
        }
        function eo() {
            return (0,
                n.jsx)("div", {
                    className: "",
                    style: {
                        position: "relative",
                        zIndex: 1e4
                    },
                    children: (0,
                        n.jsx)("nav", {
                            "aria-label": "Contact Menu",
                            children: (0,
                                n.jsxs)("ul", {
                                    className: "z-20 flex items-center justify-center sm:py-2  space-x-4 xl:space-x-10 ",
                                    children: [(0,
                                        n.jsx)("li", {
                                            children: (0,
                                                n.jsx)(ee, {})
                                        }), (0,
                                            n.jsx)("li", {
                                                children: (0,
                                                    n.jsx)(et, {})
                                            }), (0,
                                                n.jsx)(er, {}), (0,
                                                    n.jsx)("li", {
                                                        children: (0,
                                                            n.jsx)(en, {})
                                                    })]
                                })
                        })
                })
        }
        function ea() {
            let { address: e, isConnected: t } = (0,
                f.mA)()
                , [r, o] = (0,
                    s.useState)()
                , [a, c] = (0,
                    s.useState)(!1)
                , [l, i] = (0,
                    s.useState)([])
                , d = async () => {
                    let t = await fetch("/api/whitelist/".concat(e))
                        , r = await t.json();
                    "" == r.proof ? c(!1) : (c(!0),
                        i(r.proof))
                }
                , [x, m] = (0,
                    s.useState)(!1)
                , [_, y] = (0,
                    s.useState)(!1)
                , [u, b] = (0,
                    s.useState)(0)
                , [g, p] = (0,
                    s.useState)(0)
                , [h, j] = (0,
                    s.useState)(0)
                , [w, v] = (0,
                    s.useState)(0)
                , [k, S] = (0,
                    s.useState)(0)
                , [L, M] = (0,
                    s.useState)(0)
                , [I, P] = (0,
                    s.useState)(0)
                , [E, F] = (0,
                    s.useState)(0)
                , [T, V] = (0,
                    s.useState)(!0);
            (0,
                s.useEffect)(() => {
                    let e = async () => {
                        await Promise.all([H(), z(), D(), R(), G(), Y(), Z(), K(), Q(), q(), $()]),
                            V(!1)
                    }
                        ;
                    t && d(),
                        e();
                    let r = setInterval(e, 1e4);
                    return () => clearInterval(r)
                }
                    , [e]);
            let H = async () => M(await (0,
                N.E6)())
                , z = async () => m(await (0,
                    N.Su)())
                , D = async () => y(await (0,
                    N.Jp)())
                , R = async () => v(await (0,
                    N.P0)())
                , G = async () => S(await (0,
                    N.Jk)())
                , Y = async () => b(await (0,
                    N.H1)())
                , Z = async () => p(await (0,
                    N.FE)())
                , K = async () => P(await (0,
                    N.ob)())
                , Q = async () => j(await (0,
                    N.Op)())
                , q = async () => F(await (0,
                    N.Mm)())
                , $ = async () => o(await (0,
                    N.gs)())
                , ee = {
                    primary_font: "font-silkscreen",
                    secondary_font: "font-silkscreen",
                    primary_font_color: "text-gray-100",
                    secondary_font_color: "text-gray-200",
                    primary_bg: "bg-gradient-to-t from-gray-900 via-gray-900 to-gray-700",
                    secondary_bg: "_sm:rounded-3xl sm:border-4 border-gray-100 blurred-background _image-background "
                }
                , et = ee.primary_font
                , er = ee.secondary_font
                , en = ee.primary_font_color;
            ee.secondary_font_color;
            let eo = ee.primary_bg
                , ea = ee.secondary_bg;
            return T ? (0,
                n.jsx)("main", {
                    id: "mint",
                    className: "flex flex-col items-center justify-center w-full ".concat(et, "  ").concat(en, " _bg-violet-950 py-20"),
                    children: (0,
                        n.jsx)(J, {})
                }) : (0,
                    n.jsx)("main", {
                        id: "mint",
                        className: "flex flex-col items-center justify-center w-full _bg-gray-950 _".concat(eo),
                        style: {
                            position: "relative",
                            zIndex: 1e4
                        },
                        children: (0,
                            n.jsx)("div", {
                                className: "max-w-4xl w-full p-6 sm:p-10  ".concat(ea, " my-10 sm:py-8 "),
                                children: (0,
                                    n.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                        children: [(0,
                                            n.jsxs)("div", {
                                                className: "flex flex-col items-center sm:space-y-4 items-center content-center justify-center ",
                                                children: [x || _ ? _ ? (0,
                                                    n.jsxs)(n.Fragment, {
                                                        children: [(0,
                                                            n.jsx)("div", {
                                                                className: "text-xl xl:text-2xl mb-4 xl:mb-4 ".concat(et, "  text-center ").concat(en),
                                                                children: (0,
                                                                    n.jsx)("a", {
                                                                        className: "text-lime-400",
                                                                        children: "WHITELIST MINT OPEN"
                                                                    })
                                                            }), (0,
                                                                n.jsx)("div", {
                                                                    className: "text-xl xl:text-2xl mb-4  ".concat(er, "  text-center ").concat(en),
                                                                    children: (0,
                                                                        n.jsx)("a", {
                                                                            className: "text-lime-400",
                                                                            children: a ? "whitelisted" : t ? "not whitelisted" : "connect to check WL"
                                                                        })
                                                                })]
                                                    }) : x && (0,
                                                        n.jsx)("div", {
                                                            className: "text-xl xl:text-2xl mb-4 xl:mb-4 ".concat(et, "  text-center ").concat(en, " "),
                                                            children: (0,
                                                                n.jsx)("a", {
                                                                    className: "text-lime-400",
                                                                    children: "PUBLIC MINT OPEN"
                                                                })
                                                        }) : (0,
                                                            n.jsxs)("div", {
                                                                className: "text-center ",
                                                                children: [(0,
                                                                    n.jsx)("div", {
                                                                        className: "mb-2 text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl ".concat(et, " text-center ").concat(en, " "),
                                                                        children: "GATES OPEN SOON"
                                                                    }), "0x0000000000000000000000000000000000000000000000000000000000000000" != r && (0,
                                                                        n.jsx)("div", {
                                                                            className: "text-xl xl:text-2xl flex flex-col items-center space-y-4 items-center content-center justify-center ".concat(er, "  text-center ").concat(en),
                                                                            children: (0,
                                                                                n.jsx)("a", {
                                                                                    className: "text-lime-400",
                                                                                    children: a ? "whitelisted" : t ? "not whitelisted" : "connect to check WL"
                                                                                })
                                                                        })]
                                                            }), x && (0,
                                                                n.jsx)(n.Fragment, {
                                                                    children: (0,
                                                                        n.jsx)(B, {
                                                                            maxMintAmount: u,
                                                                            maxSupply: I,
                                                                            nftPrice: w,
                                                                            maxFreeSupply: h,
                                                                            freePerWallet: E
                                                                        })
                                                                }), x && t && Number(L) < Number(I) && (0,
                                                                    n.jsx)(n.Fragment, {
                                                                        children: (0,
                                                                            n.jsx)(A, {
                                                                                address: e,
                                                                                isConnected: t,
                                                                                isPublicSaleActive: x,
                                                                                maxMintAmount: u,
                                                                                updateTotalSupply: H,
                                                                                totalSupply: L,
                                                                                maxSupply: I,
                                                                                nftPrice: w,
                                                                                maxFreeSupply: h,
                                                                                freePerWallet: E,
                                                                                proof: l
                                                                            })
                                                                    }), _ && (0,
                                                                        n.jsx)(n.Fragment, {
                                                                            children: (0,
                                                                                n.jsx)(O, {
                                                                                    maxMintAmountWL: g,
                                                                                    maxSupply: I,
                                                                                    nftPriceWL: k
                                                                                })
                                                                        }), _ && a && t && Number(L) < Number(I) && (0,
                                                                            n.jsx)(n.Fragment, {
                                                                                children: (0,
                                                                                    n.jsx)(W, {
                                                                                        address: e,
                                                                                        isConnected: t,
                                                                                        isWLSaleActive: _,
                                                                                        maxMintAmountWL: g,
                                                                                        updateTotalSupply: H,
                                                                                        totalSupply: L,
                                                                                        maxSupply: I,
                                                                                        nftPriceWL: k,
                                                                                        proof: l,
                                                                                        isWhitelisted: a
                                                                                    })
                                                                            }), !t && (0,
                                                                                n.jsx)(n.Fragment, {
                                                                                    children: (0,
                                                                                        n.jsx)(C.T, {})
                                                                                })]
                                            }), (0,
                                                n.jsxs)("div", {
                                                    className: "flex flex-col items-center space-y-4  overflow-hidden",
                                                    children: [(0,
                                                        n.jsx)(X, {}), (0,
                                                            n.jsx)(U, {
                                                                isPublicSaleActive: x,
                                                                isWLSaleActive: _,
                                                                totalSupply: L,
                                                                maxSupply: I
                                                            })]
                                                })]
                                    })
                            })
                    })
        }
        let ec = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        ec.primary_font,
            ec.secondary_font,
            ec.primary_font_color,
            ec.secondary_font_color,
            r(95569);
        let es = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        es.primary_font,
            es.secondary_font,
            es.primary_font_color,
            es.secondary_font_color,
            r(13327);
        let el = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        }
            , ei = el.primary_font
            , ed = el.secondary_font
            , ex = el.primary_font_color
            , ef = el.secondary_font_color;
        function em() {
            return (0,
                n.jsx)("div", {
                    id: "about",
                    children: (0,
                        n.jsx)("div", {
                            className: "container max-w-8xl mx-auto _border-2 rounded-3xl _bg-black/20 pt-10",
                            children: (0,
                                n.jsxs)("div", {
                                    className: "nft-container",
                                    children: [(0,
                                        n.jsx)("div", {
                                            className: "    m-4 text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-center ".concat(ex, " ").concat(ei),
                                            children: (0,
                                                n.jsx)("h1", {
                                                    className: "text-5xl sm:text-5xl md:text-5xl lg:text-8xl xl:text-8xl 2xl:text-8xl mx-auto  pr-3  sm:pt-4",
                                                    children: (0,
                                                        n.jsx)("a", {
                                                            className: "".concat(ei, " "),
                                                            children: "JPEGods"
                                                        })
                                                })
                                        }), (0,
                                            n.jsx)("div", {
                                                className: "text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center ".concat(ed, "  ").concat(ef),
                                                children: (0,
                                                    n.jsx)("h2", {
                                                        className: "text-xl  mb-4",
                                                        children: "Light or darkness... It is your choice."
                                                    })
                                            })]
                                })
                        })
                })
        }
        let e_ = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "sm:border-4 border-cyan-300 blurred-background"
        };
        function ey() {
            return (0,
                n.jsx)(n.Fragment, {
                    children: (0,
                        n.jsxs)("main", {
                            id: "About",
                            className: "flex flex-col  pt-0 sm:py-8  _image-background border-0 border-black overflow-hidden  ",
                            children: [(0,
                                n.jsx)(em, {}), (0,
                                    n.jsx)("div", {
                                        className: "container relative flex flex-wrap md:py-0 mx-auto lg:w-10/12 md:w-full sm:w-full flex-grow",
                                        children: (0,
                                            n.jsx)("div", {
                                                className: "container relative flex flex-col items-center content-center justify-center rounded-xl sm:p-4 md:flex-row  "
                                            })
                                    })]
                        })
                })
        }
        e_.primary_font,
            e_.secondary_font,
            e_.primary_font_color,
            e_.secondary_font_color,
            e_.primary_bg,
            e_.secondary_bg;
        let eu = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eu.primary_font,
            eu.secondary_font,
            eu.primary_font_color,
            eu.secondary_font_color;
        let eb = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eb.primary_font,
            eb.secondary_font,
            eb.primary_font_color,
            eb.secondary_font_color;
        let eg = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eg.primary_font,
            eg.secondary_font,
            eg.primary_font_color,
            eg.secondary_font_color,
            r(67677),
            r(32774);
        let ep = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        function eh() {
            return (0,
                n.jsx)("img", {
                    className: "",
                    src: "/images/footer_image_left.png"
                })
        }
        function ej() {
            return (0,
                n.jsx)("img", {
                    className: "",
                    src: "/images/footer_image_right.png"
                })
        }
        ep.primary_font,
            ep.secondary_font,
            ep.primary_font_color,
            ep.secondary_font_color;
        let ew = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        ew.primary_font;
        let ev = ew.secondary_font;
        ew.primary_font_color;
        let ek = ew.secondary_font_color
            , eN = ew.primary_bg;
        function eC() {
            return (0,
                n.jsx)("main", {
                    id: "footer",
                    className: "".concat(eN, " "),
                    children: (0,
                        n.jsx)("div", {
                            className: "container relative flex flex-wrap mx-auto overflow-hidden",
                            children: (0,
                                n.jsxs)("div", {
                                    className: "container relative flex flex-col items-center justify-center px-4 md:flex-row",
                                    children: [(0,
                                        n.jsx)("div", {
                                            className: "flex flex-1 flex-col items-center lg:max-w-lg max-w-xs hidden md:flex",
                                            children: (0,
                                                n.jsx)(eh, {})
                                        }), (0,
                                            n.jsxs)("div", {
                                                className: "flex-1 flex flex-col items-center space-y-4 p-4 rounded-xl mt-auto",
                                                children: [(0,
                                                    n.jsx)(eo, {}), (0,
                                                        n.jsx)("p", {
                                                            className: "text-xs md:text-md lg:text-lg xl:text-xl ".concat(ev, " text-center ").concat(ek),
                                                            children: "Copyright 2023 | JPEGods"
                                                        })]
                                            }), (0,
                                                n.jsx)("div", {
                                                    className: "flex flex-1 flex-col items-center lg:max-w-lg max-w-xs hidden md:flex",
                                                    children: (0,
                                                        n.jsx)(ej, {})
                                                })]
                                })
                        })
                })
        }
        ew.secondary_bg;
        let eS = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eS.primary_font,
            eS.secondary_font,
            eS.primary_font_color,
            eS.secondary_font_color;
        let eL = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-500",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eL.primary_font,
            eL.secondary_font,
            eL.primary_font_color,
            eL.secondary_font_color,
            x.VY.twitter,
            x.VY.openSea;
        let eM = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-500",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eM.primary_font,
            eM.secondary_font,
            eM.primary_font_color,
            eM.secondary_font_color;
        let eI = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c]",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eI.primary_font,
            eI.secondary_font,
            eI.primary_font_color,
            eI.secondary_font_color;
        let eP = {
            primary_font: "font-silkscreen",
            secondary_font: "font-silkscreen",
            primary_font_color: "text-gray-100",
            secondary_font_color: "text-gray-200",
            primary_bg: "bg-gradient-to-t from-[#0b121c] via-[#0b121c] to-[#0b121c] _image-background ",
            secondary_bg: "_border-8 _border-cyan-300 _blurred-background"
        };
        eP.primary_font,
            eP.secondary_font,
            eP.primary_font_color,
            eP.secondary_font_color;
        let eE = eP.primary_bg;
        eP.secondary_bg;
        let eA = c()(() => Promise.resolve().then(r.t.bind(r, 13327, 23)), {
            loadableGenerated: {
                webpack: () => [13327]
            }
        })
            , eW = c()(() => Promise.resolve().then(r.bind(r, 25480)).then(e => e.ConnectButton), {
                loadableGenerated: {
                    webpack: () => [25480]
                }
            });
        function eF() {
            let { address: e, isConnected: t } = (0,
                f.mA)()
                , [r, o] = (0,
                    s.useState)(!0);
            return (0,
                n.jsx)("div", {
                    className: "items-center  min-h-screen scroll-smooth ".concat(eE, " fade-in "),
                    children: (0,
                        n.jsxs)("div", {
                            className: "flex flex-col _combined-backgrounds image-background1 ",
                            children: [t && (0,
                                n.jsx)(eA, {
                                    right: !0,
                                    children: (0,
                                        n.jsx)("div", {
                                            className: "fixed sm:top-5 sm:right-5 top-2 right-2 z-50",
                                            children: (0,
                                                n.jsx)(eW, {})
                                        })
                                }), (0,
                                    n.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0,
                                            n.jsx)(ey, {}), (0,
                                                n.jsx)(ea, {
                                                    style: {
                                                        position: "relative",
                                                        zIndex: 1e4
                                                    }
                                                })]
                                    }), (0,
                                        n.jsx)(eC, {})]
                        })
                })
        }
    },
    98848: function (e, t, r) {
        "use strict";
        let n;
        r.d(t, {
            E6: function () {
                return m
            },
            FE: function () {
                return x
            },
            H1: function () {
                return d
            },
            Jk: function () {
                return b
            },
            Jp: function () {
                return p
            },
            Lw: function () {
                return k
            },
            Mm: function () {
                return f
            },
            Op: function () {
                return y
            },
            P0: function () {
                return u
            },
            QO: function () {
                return w
            },
            RM: function () {
                return v
            },
            Su: function () {
                return g
            },
            Y5: function () {
                return j
            },
            dn: function () {
                return i
            },
            gs: function () {
                return h
            },
            ob: function () {
                return _
            }
        });
        var o = r(56818)
            , a = r(42717);
        let c = a.gy.chain_id;
        if (c) {
            if ("mainnet" === c)
                n = (0,
                    o.g)("https://eth-mainnet.g.alchemy.com/v2/PtjIJ3fu8m0mzcMR9S8mFC7ILyvV_dbm");
            else if ("mumbai" === c)
                n = (0,
                    o.g)("https://polygon-mumbai.g.alchemy.com/v2/S2VSaiuYaxeKNuxhl82U55hAkGBQ-2Su");
            else if ("goerli" === c)
                n = (0,
                    o.g)("https://eth-goerli.g.alchemy.com/v2/eKcmo5swt3uPtdo1Qh5zzURfOfCfWiXH");
            else
                throw Error("Unsupported network ID: ".concat(c))
        } else
            console.warn("NETWORK_ID is not set. Defaulting to mainnet."),
                n = (0,
                    o.g)("https://eth-mainnet.g.alchemy.com/v2/PtjIJ3fu8m0mzcMR9S8mFC7ILyvV_dbm");
        let s = a.re.NFTContract_ADDRESS
            , l = new n.eth.Contract(a.Ud.NFTContract_ABI, s)
            , i = async () => {
                let e = await l.methods.owner().call();
                return e
            }
            , d = async () => {
                let e = await l.methods.maxMintPublic().call();
                return e
            }
            , x = async () => {
                let e = await l.methods.maxMintWL().call();
                return e
            }
            , f = async () => {
                let e = await l.methods.freePerWallet().call();
                return e
            }
            , m = async () => {
                let e = await l.methods.totalSupply().call();
                return e
            }
            , _ = async () => {
                let e = await l.methods.maxSupply().call();
                return e
            }
            , y = async () => {
                let e = await l.methods.maxFreeSupply().call();
                return e
            }
            , u = async () => {
                let e = await l.methods.costPublic().call()
                    , t = n.utils.fromWei(String(e), "ether");
                return t
            }
            , b = async () => {
                let e = await l.methods.costWL().call()
                    , t = n.utils.fromWei(String(e), "ether");
                return t
            }
            , g = async () => {
                let e = await l.methods.isPublicMintEnabled().call();
                return e
            }
            , p = async () => {
                let e = await l.methods.isWLmintEnabled().call();
                return e
            }
            , h = async () => {
                let e = await l.methods.whitelistRoot().call();
                return e
            }
            , j = async e => {
                if (e) {
                    let t = await l.methods.mintedByAddress(e).call();
                    return t
                }
            }
            , w = async e => {
                if (e) {
                    let t = await l.methods.mintedByAddressWL(e).call();
                    return t
                }
            }
            , v = async () => {
                let e = await n.eth.getBalance(s)
                    , t = n.utils.fromWei(String(e), "ether");
                return t
            }
            , k = async () => {
                let e = await l.methods.baseURI().call();
                return e
            }
    },
    46601: function () { },
    89214: function () { },
    69386: function () { },
    31616: function () { },
    29120: function () { },
    46586: function () { },
    6567: function () { },
    55896: function () { },
    87500: function () { }
}, function (e) {
    e.O(0, [3714, 8764, 3362, 5730, 826, 9774, 2888, 179], function () {
        return e(e.s = 75557)
    }),
        _N_E = e.O()
}
]);
