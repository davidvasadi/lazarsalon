(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/[locale]/(marketing)/ClientSlugHandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientSlugHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$SlugContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/SlugContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ClientSlugHandler(param) {
    let { localizedSlugs } = param;
    _s();
    const { dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$SlugContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlugContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientSlugHandler.useEffect": ()=>{
            if (localizedSlugs) {
                dispatch({
                    type: 'SET_SLUGS',
                    payload: localizedSlugs
                });
            }
        }
    }["ClientSlugHandler.useEffect"], [
        localizedSlugs,
        dispatch
    ]);
    return null; // This component only handles the state and doesn't render anything.
}
_s(ClientSlugHandler, "mC42y49kATmT/+P5T/12n7pzw9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$SlugContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlugContext"]
    ];
});
_c = ClientSlugHandler;
var _c;
__turbopack_context__.k.register(_c, "ClientSlugHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/react-wrap-balancer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Balancer",
    ()=>P,
    "Provider",
    ()=>Y,
    "default",
    ()=>A
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
var E = typeof window == "undefined", m = E ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect, B = 0, _ = ()=>++B, v = !1;
function O() {
    let [n, r] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(v ? _ : void 0);
    return m(()=>{
        n === void 0 && r(_()), v = !0;
    }, []), n === void 0 ? n : "rwb-".concat(n.toString(32));
}
function R() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "R.useMemo": ()=>"useId" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId : O
    }["R.useMemo"], [])();
}
var y = "__wrap_b", f = "__wrap_n", S = "__wrap_o", T = (n, r, e)=>{
    e = e || document.querySelector('[data-br="'.concat(n, '"]'));
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
}, I = T.toString(), w = '(self.CSS&&CSS.supports("text-wrap","balance")?1:2)', g = function(n, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return e && (e = "self.".concat(f, "!=1&&").concat(e)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("script", {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: (n ? "" : "self.".concat(f, "=self.").concat(f, "||").concat(w, ";self.").concat(y, "=").concat(I, ";")) + e
        },
        nonce: r
    });
}, h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    preferNative: !0,
    hasProvider: !1
}), Y = (param)=>{
    let { preferNative: n = !0, nonce: r, children: e } = param;
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Y.useMemo[t]": ()=>({
                preferNative: n,
                hasProvider: !0
            })
    }["Y.useMemo[t]"], [
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(h.Provider, {
        value: t
    }, g(!1, r), e);
}, P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((param, d)=>{
    let { ratio: n = 1, preferNative: r, nonce: e, children: t, as: l, ...i } = param;
    let o = R(), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(h), u = r != null ? r : c.preferNative, x = l || "span";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(d, {
        "P.useImperativeHandle": ()=>s.current
    }["P.useImperativeHandle"], []), m(()=>{
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
    ]), ("TURBOPACK compile-time value", "development") === "development" && t && !Array.isArray(t) && typeof t == "object" && "type" in t && typeof t.type == "string" && t.type !== "span" && console.warn("<Balancer> should not wrap <".concat(t.type, "> inside. Instead, it should directly wrap text or inline nodes.\n\nTry changing this:\n  <Balancer><").concat(t.type, ">content</").concat(t.type, "></Balancer>\nTo:\n  <").concat(t.type, "><Balancer>content</Balancer></").concat(t.type, ">")), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(x, {
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
    }, t), g(c.hasProvider, e, "self.".concat(y, '("').concat(o, '",').concat(n, ")")));
});
if (!E && ("TURBOPACK compile-time value", "development") !== "production") {
    let n = document.querySelector("[data-next-hide-fouc]");
    if (n) {
        let r = (t)=>{
            for (let l of t)for (let i of Array.from(l.removedNodes)){
                if (i !== n) continue;
                e.disconnect();
                let d = document.querySelectorAll("[data-br]");
                for (let o of Array.from(d))self[y](0, +o.dataset.brr, o);
            }
        }, e = new MutationObserver(r);
        e.observe(document.head, {
            childList: !0
        });
    }
}
var A = P;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=_8a15a3e7._.js.map