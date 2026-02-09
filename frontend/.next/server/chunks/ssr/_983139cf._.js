module.exports = [
"[project]/app/[locale]/(marketing)/ClientSlugHandler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientSlugHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$SlugContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/SlugContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function ClientSlugHandler({ localizedSlugs }) {
    const { dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$SlugContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlugContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localizedSlugs) {
            dispatch({
                type: 'SET_SLUGS',
                payload: localizedSlugs
            });
        }
    }, [
        localizedSlugs,
        dispatch
    ]);
    return null; // This component only handles the state and doesn't render anything.
}
}),
"[project]/node_modules/react-wrap-balancer/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Balancer",
    ()=>P,
    "Provider",
    ()=>Y,
    "default",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
var E = "undefined" == "undefined", m = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect : "TURBOPACK unreachable", B = 0, _ = ()=>++B, v = !1;
function O() {
    let [n, r] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(v ? _ : void 0);
    return m(()=>{
        n === void 0 && r(_()), v = !0;
    }, []), n === void 0 ? n : `rwb-${n.toString(32)}`;
}
function R() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>"useId" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId : O, [])();
}
var y = "__wrap_b", f = "__wrap_n", S = "__wrap_o", T = (n, r, e)=>{
    e = e || document.querySelector(`[data-br="${n}"]`);
    let t = e == null ? void 0 : e.parentElement;
    if (!t) return;
    let l = (u)=>e.style.maxWidth = u + "px";
    e.style.maxWidth = "";
    let i = t.clientWidth, d = t.clientHeight, o = i / 2 - .25, s = i + .5, c;
    if (i) {
        for(l(o), o = Math.max(e.scrollWidth, o); o + 1 < s;)c = Math.round((o + s) / 2), l(c), t.clientHeight === d ? s = c : o = c;
        l(s * r + i * (1 - r));
    }
    e.__wrap_o || (typeof ResizeObserver != "undefined" ? (e.__wrap_o = new ResizeObserver(()=>{
        self.__wrap_b(0, +e.dataset.brr, e);
    })).observe(t) : ("TURBOPACK compile-time value", "development") === "development" && console.warn("The browser you are using does not support the ResizeObserver API. Please consider add polyfill for this API to avoid potential layout shifts or upgrade your browser. Read more: https://github.com/shuding/react-wrap-balancer#browser-support-information"));
}, I = T.toString(), w = '(self.CSS&&CSS.supports("text-wrap","balance")?1:2)', g = (n, r, e = "")=>(e && (e = `self.${f}!=1&&${e}`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("script", {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: (n ? "" : `self.${f}=self.${f}||${w};self.${y}=${I};`) + e
        },
        nonce: r
    })), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({
    preferNative: !0,
    hasProvider: !1
}), Y = ({ preferNative: n = !0, nonce: r, children: e })=>{
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            preferNative: n,
            hasProvider: !0
        }), [
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(h.Provider, {
        value: t
    }, g(!1, r), e);
}, P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ ratio: n = 1, preferNative: r, nonce: e, children: t, as: l, ...i }, d)=>{
    let o = R(), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(h), u = r != null ? r : c.preferNative, x = l || "span";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(d, ()=>s.current, []), m(()=>{
        u && self[f] === 1 || s.current && (self[y] = T)(0, n, s.current);
    }, [
        t,
        u,
        n
    ]), m(()=>{
        if (!(u && self[f] === 1)) return ()=>{
            if (!s.current) return;
            let b = s.current[S];
            b && (b.disconnect(), delete s.current[S]);
        };
    }, [
        u
    ]), ("TURBOPACK compile-time value", "development") === "development" && t && !Array.isArray(t) && typeof t == "object" && "type" in t && typeof t.type == "string" && t.type !== "span" && console.warn(`<Balancer> should not wrap <${t.type}> inside. Instead, it should directly wrap text or inline nodes.

Try changing this:
  <Balancer><${t.type}>content</${t.type}></Balancer>
To:
  <${t.type}><Balancer>content</Balancer></${t.type}>`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(x, {
        ...i,
        "data-br": o,
        "data-brr": n,
        ref: s,
        style: {
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: "inherit",
            textWrap: u ? "balance" : "initial"
        },
        suppressHydrationWarning: !0
    }, t), g(c.hasProvider, e, `self.${y}("${o}",${n})`));
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var A = P;
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=_983139cf._.js.map