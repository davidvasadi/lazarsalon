(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/elements/heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>Heading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wrap$2d$balancer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-wrap-balancer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Heading = (param)=>{
    let { className, as: Tag = 'h2', children, size = 'md', ...props } = param;
    const sizeVariants = {
        sm: 'text-xl md:text-2xl md:leading-snug',
        md: 'text-3xl md:text-4xl md:leading-tight',
        xl: 'text-4xl md:text-6xl md:leading-none',
        '2xl': 'text-5xl md:text-7xl md:leading-none'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-3xl md:text-5xl md:leading-tight max-w-5xl text-lefttracking-tight', 'font-medium', 'text-lightblack', // 'bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white',
        sizeVariants[size], className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wrap$2d$balancer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/elements/heading.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/elements/heading.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Heading;
var _c;
__turbopack_context__.k.register(_c, "Heading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/elements/subheading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Subheading",
    ()=>Subheading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wrap$2d$balancer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-wrap-balancer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Subheading = (param)=>{
    let { className, as: Tag = 'h2', children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm md:text-base  max-w-4xl text-left my-4', 'text-secondary text-center font-normal', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wrap$2d$balancer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/elements/subheading.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/elements/subheading.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Subheading;
var _c;
__turbopack_context__.k.register(_c, "Subheading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/services/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dynamic-zone/services/index.tsx
__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/subheading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
var _process_env_NEXT_PUBLIC_STRAPI_URL, _ref;
/** IMPORTANT: ne defaultolj localhostra prod miatt */ const STRAPI_BASE = ((_ref = (_process_env_NEXT_PUBLIC_STRAPI_URL = ("TURBOPACK compile-time value", "http://localhost:1337")) !== null && _process_env_NEXT_PUBLIC_STRAPI_URL !== void 0 ? _process_env_NEXT_PUBLIC_STRAPI_URL : ("TURBOPACK compile-time value", "http://localhost:1337")) !== null && _ref !== void 0 ? _ref : '').replace(/\/$/, '').replace(/\/api$/, '');
// ---------- Helpers ----------
function getHero(p) {
    var _p_dynamic_zone;
    return (_p_dynamic_zone = p.dynamic_zone) === null || _p_dynamic_zone === void 0 ? void 0 : _p_dynamic_zone.find((x)=>x.__component === 'dynamic-zone.hero');
}
function getPageTitle(p) {
    var _p_label, _hero_heading;
    const label = (_p_label = p.label) === null || _p_label === void 0 ? void 0 : _p_label.trim();
    if (label) return label;
    const hero = getHero(p);
    const t = hero === null || hero === void 0 ? void 0 : (_hero_heading = hero.heading) === null || _hero_heading === void 0 ? void 0 : _hero_heading.trim();
    return t && t.length > 0 ? t : p.slug;
}
function getPageSubheading(p) {
    var _hero_sub_heading;
    const hero = getHero(p);
    const s = hero === null || hero === void 0 ? void 0 : (_hero_sub_heading = hero.sub_heading) === null || _hero_sub_heading === void 0 ? void 0 : _hero_sub_heading.trim();
    return s && s.length > 0 ? s : null;
}
function getMediaUrl(m) {
    var _m_data_attributes, _m_data, _m_attributes;
    var _m_data_attributes_url, _ref, _ref1;
    const url = (_ref1 = (_ref = (_m_data_attributes_url = m === null || m === void 0 ? void 0 : (_m_data = m.data) === null || _m_data === void 0 ? void 0 : (_m_data_attributes = _m_data.attributes) === null || _m_data_attributes === void 0 ? void 0 : _m_data_attributes.url) !== null && _m_data_attributes_url !== void 0 ? _m_data_attributes_url : m === null || m === void 0 ? void 0 : (_m_attributes = m.attributes) === null || _m_attributes === void 0 ? void 0 : _m_attributes.url) !== null && _ref !== void 0 ? _ref : m === null || m === void 0 ? void 0 : m.url) !== null && _ref1 !== void 0 ? _ref1 : undefined;
    if (!url) return null;
    if (/^https?:\/\//i.test(url)) return url;
    return STRAPI_BASE ? "".concat(STRAPI_BASE).concat(url.startsWith('/') ? '' : '/').concat(url) : url;
}
function getMediaAlt(m) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    var _m_data_attributes, _m_data, _m_attributes;
    var _m_data_attributes_alternativeText, _ref, _ref1;
    return ((_ref1 = (_ref = (_m_data_attributes_alternativeText = m === null || m === void 0 ? void 0 : (_m_data = m.data) === null || _m_data === void 0 ? void 0 : (_m_data_attributes = _m_data.attributes) === null || _m_data_attributes === void 0 ? void 0 : _m_data_attributes.alternativeText) !== null && _m_data_attributes_alternativeText !== void 0 ? _m_data_attributes_alternativeText : m === null || m === void 0 ? void 0 : (_m_attributes = m.attributes) === null || _m_attributes === void 0 ? void 0 : _m_attributes.alternativeText) !== null && _ref !== void 0 ? _ref : m === null || m === void 0 ? void 0 : m.alternativeText) !== null && _ref1 !== void 0 ? _ref1 : fallback) || fallback;
}
function getPageCover(p) {
    const hero = getHero(p);
    var _hero_cover;
    const cover = (_hero_cover = hero === null || hero === void 0 ? void 0 : hero.cover) !== null && _hero_cover !== void 0 ? _hero_cover : null;
    const src = getMediaUrl(cover);
    if (!src) return null;
    return {
        src,
        alt: getMediaAlt(cover, getPageTitle(p))
    };
}
function toHref(btn) {
    var _btn_URL, _ref;
    return (_ref = (_btn_URL = btn.URL) !== null && _btn_URL !== void 0 ? _btn_URL : btn.href) !== null && _ref !== void 0 ? _ref : '#';
}
function toTarget(btn) {
    var _btn_target;
    const target = btn.newTab ? '_blank' : (_btn_target = btn.target) !== null && _btn_target !== void 0 ? _btn_target : undefined;
    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
    return {
        target,
        rel
    };
}
// clamp plugin nélkül is oké (line-clamp ha van, ha nincs: max-h + overflow-hidden)
const clamp3 = 'line-clamp-3 max-h-[3.9em] overflow-hidden';
const MotionDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
// ---------- Cursor-follow shine (Framer Motion) ----------
function useCursorShine(enabled) {
    _s();
    const mxRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])('50%');
    const myRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])('50%');
    const opRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mxRaw, {
        stiffness: 420,
        damping: 40,
        mass: 0.6
    });
    const my = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(myRaw, {
        stiffness: 420,
        damping: 40,
        mass: 0.6
    });
    const op = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(opRaw, {
        stiffness: 280,
        damping: 30,
        mass: 0.6
    });
    const onMove = (e)=>{
        if (!enabled) return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width * 100;
        const y = (e.clientY - r.top) / r.height * 100;
        mxRaw.set("".concat(x.toFixed(2), "%"));
        myRaw.set("".concat(y.toFixed(2), "%"));
    };
    const onEnter = ()=>{
        if (!enabled) return;
        opRaw.set(1);
    };
    const onLeave = ()=>{
        if (!enabled) return;
        opRaw.set(0);
        mxRaw.set('50%');
        myRaw.set('50%');
    };
    return {
        mx,
        my,
        op,
        onMove,
        onEnter,
        onLeave
    };
}
_s(useCursorShine, "yARbD/7OlJbgYGxUgyfxkVeQ+T8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
function CursorShineLayer(param) {
    let { mx, my, op, variant = 'light' } = param;
    // light: fehér kártyákhoz, dark: featured/CTA sötét overlayre
    const muted = variant === 'dark' ? 'rgba(178,147,61,0.22)' : 'rgba(178,147,61,0.16)';
    const white = variant === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.12)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0",
        style: {
            opacity: op,
            '--mx': mx,
            '--my': my
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: "radial-gradient(520px circle at var(--mx) var(--my), ".concat(muted, ", transparent 60%)")
                }
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: "radial-gradient(420px circle at var(--mx) var(--my), ".concat(white, ", transparent 62%)")
                }
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dynamic-zone/services/index.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c = CursorShineLayer;
const Services = (param)=>{
    let { heading, sub_heading, pages, CTAs } = param;
    var _CTAs_CTAs;
    _s1();
    var _s = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const shineEnabled = !reduce;
    // ====== Scroll based “ambient” background parallax ======
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            'start end',
            'end start'
        ]
    });
    const bgY1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], reduce ? [
        0,
        0
    ] : [
        -26,
        26
    ]), {
        stiffness: 120,
        damping: 26,
        mass: 0.7
    });
    const bgY2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], reduce ? [
        0,
        0
    ] : [
        18,
        -18
    ]), {
        stiffness: 120,
        damping: 26,
        mass: 0.7
    });
    const bgO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.6,
        1
    ], [
        0.85,
        1,
        0.9
    ]);
    // ====== Pages normalize + order ======
    const pageItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[pageItems]": ()=>{
            const raw = pages;
            var _raw_data;
            const list = Array.isArray(raw) ? raw : (_raw_data = raw === null || raw === void 0 ? void 0 : raw.data) !== null && _raw_data !== void 0 ? _raw_data : [];
            if (!Array.isArray(list) || list.length === 0) return [];
            const getOrder = {
                "Services.useMemo[pageItems].getOrder": (p)=>{
                    var _p___pivot, _p___pivot1, _p_pivot, _p_pivot1, _p_meta, _p_attributes, _p_attributes1;
                    var _p_order, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
                    const v = (_ref8 = (_ref7 = (_ref6 = (_ref5 = (_ref4 = (_ref3 = (_ref2 = (_ref1 = (_ref = (_p_order = p === null || p === void 0 ? void 0 : p.order) !== null && _p_order !== void 0 ? _p_order : p === null || p === void 0 ? void 0 : p.position) !== null && _ref !== void 0 ? _ref : p === null || p === void 0 ? void 0 : p.sort) !== null && _ref1 !== void 0 ? _ref1 : p === null || p === void 0 ? void 0 : p.__order) !== null && _ref2 !== void 0 ? _ref2 : p === null || p === void 0 ? void 0 : (_p___pivot = p.__pivot) === null || _p___pivot === void 0 ? void 0 : _p___pivot.order) !== null && _ref3 !== void 0 ? _ref3 : p === null || p === void 0 ? void 0 : (_p___pivot1 = p.__pivot) === null || _p___pivot1 === void 0 ? void 0 : _p___pivot1.position) !== null && _ref4 !== void 0 ? _ref4 : p === null || p === void 0 ? void 0 : (_p_pivot = p.pivot) === null || _p_pivot === void 0 ? void 0 : _p_pivot.order) !== null && _ref5 !== void 0 ? _ref5 : p === null || p === void 0 ? void 0 : (_p_pivot1 = p.pivot) === null || _p_pivot1 === void 0 ? void 0 : _p_pivot1.position) !== null && _ref6 !== void 0 ? _ref6 : p === null || p === void 0 ? void 0 : (_p_meta = p.meta) === null || _p_meta === void 0 ? void 0 : _p_meta.order) !== null && _ref7 !== void 0 ? _ref7 : p === null || p === void 0 ? void 0 : (_p_attributes = p.attributes) === null || _p_attributes === void 0 ? void 0 : _p_attributes.order) !== null && _ref8 !== void 0 ? _ref8 : p === null || p === void 0 ? void 0 : (_p_attributes1 = p.attributes) === null || _p_attributes1 === void 0 ? void 0 : _p_attributes1.position;
                    return typeof v === 'number' ? v : null;
                }
            }["Services.useMemo[pageItems].getOrder"];
            const hasOrder = list.some({
                "Services.useMemo[pageItems].hasOrder": (p)=>getOrder(p) !== null
            }["Services.useMemo[pageItems].hasOrder"]);
            return hasOrder ? [
                ...list
            ].sort({
                "Services.useMemo[pageItems]": (a, b)=>{
                    var _getOrder, _getOrder1;
                    return ((_getOrder = getOrder(a)) !== null && _getOrder !== void 0 ? _getOrder : 1e9) - ((_getOrder1 = getOrder(b)) !== null && _getOrder1 !== void 0 ? _getOrder1 : 1e9);
                }
            }["Services.useMemo[pageItems]"]) : list;
        }
    }["Services.useMemo[pageItems]"], [
        pages
    ]);
    const featured = pageItems[0];
    const rightTop = pageItems[1];
    const rightBottom = pageItems[2];
    const bottomLeft = pageItems[3];
    const bottomMid = pageItems[4];
    var _CTAs_CTAs_;
    // ====== CTA only if meaningful ======
    const primaryCTA = (_CTAs_CTAs_ = CTAs === null || CTAs === void 0 ? void 0 : (_CTAs_CTAs = CTAs.CTAs) === null || _CTAs_CTAs === void 0 ? void 0 : _CTAs_CTAs[0]) !== null && _CTAs_CTAs_ !== void 0 ? _CTAs_CTAs_ : null;
    const ctaHref = primaryCTA ? toHref(primaryCTA) : null;
    const { target: ctaTarget, rel: ctaRel } = primaryCTA ? toTarget(primaryCTA) : {
        target: undefined,
        rel: undefined
    };
    var _CTAs_heading;
    const ctaTitle = ((_CTAs_heading = CTAs === null || CTAs === void 0 ? void 0 : CTAs.heading) !== null && _CTAs_heading !== void 0 ? _CTAs_heading : '').trim();
    var _CTAs_sub_heading;
    const ctaDesc = ((_CTAs_sub_heading = CTAs === null || CTAs === void 0 ? void 0 : CTAs.sub_heading) !== null && _CTAs_sub_heading !== void 0 ? _CTAs_sub_heading : '').trim();
    var _primaryCTA_text;
    const ctaBtnText = ((_primaryCTA_text = primaryCTA === null || primaryCTA === void 0 ? void 0 : primaryCTA.text) !== null && _primaryCTA_text !== void 0 ? _primaryCTA_text : '').trim();
    const hasCtaCard = Boolean(ctaTitle || ctaDesc || primaryCTA && ctaHref && ctaHref !== '#' && ctaBtnText);
    const hasAny = Boolean(featured || rightTop || rightBottom || bottomLeft || bottomMid || hasCtaCard);
    // ====== Variants ======
    const sectionV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[sectionV]": ()=>({
                hidden: {},
                show: reduce ? {
                    transition: {
                        staggerChildren: 0
                    }
                } : {
                    transition: {
                        staggerChildren: 0.14,
                        delayChildren: 0.08
                    }
                }
            })
    }["Services.useMemo[sectionV]"], [
        reduce
    ]);
    const titleV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[titleV]": ()=>({
                hidden: reduce ? {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)'
                } : {
                    opacity: 0,
                    y: 18,
                    filter: 'blur(12px)'
                },
                show: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: reduce ? {
                        duration: 0.01
                    } : {
                        type: 'spring',
                        stiffness: 140,
                        damping: 18,
                        mass: 0.7
                    }
                }
            })
    }["Services.useMemo[titleV]"], [
        reduce
    ]);
    const underlineV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[underlineV]": ()=>({
                hidden: reduce ? {
                    scaleX: 1,
                    opacity: 1
                } : {
                    scaleX: 0.15,
                    opacity: 0
                },
                show: {
                    scaleX: 1,
                    opacity: 1,
                    transition: reduce ? {
                        duration: 0.01
                    } : {
                        duration: 0.7,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    }
                }
            })
    }["Services.useMemo[underlineV]"], [
        reduce
    ]);
    const gridV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[gridV]": ()=>({
                hidden: {},
                show: reduce ? {
                    transition: {
                        staggerChildren: 0
                    }
                } : {
                    transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.12
                    }
                }
            })
    }["Services.useMemo[gridV]"], [
        reduce
    ]);
    const cardV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[cardV]": ()=>({
                hidden: reduce ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)'
                } : {
                    opacity: 0,
                    y: 28,
                    scale: 0.97,
                    filter: 'blur(16px)'
                },
                show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    transition: reduce ? {
                        duration: 0.01
                    } : {
                        type: 'spring',
                        stiffness: 120,
                        damping: 18,
                        mass: 0.8
                    }
                },
                hover: reduce ? {} : {
                    y: -8,
                    scale: 1.012,
                    transition: {
                        type: 'spring',
                        stiffness: 340,
                        damping: 22
                    }
                },
                tap: reduce ? {} : {
                    scale: 0.988
                }
            })
    }["Services.useMemo[cardV]"], [
        reduce
    ]);
    const arrowV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[arrowV]": ()=>({
                hidden: {
                    opacity: 0.9,
                    x: 0
                },
                hover: reduce ? {} : {
                    opacity: 1,
                    x: 8,
                    transition: {
                        type: 'spring',
                        stiffness: 520,
                        damping: 24
                    }
                }
            })
    }["Services.useMemo[arrowV]"], [
        reduce
    ]);
    const iconWobbleV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Services.useMemo[iconWobbleV]": ()=>({
                hidden: {},
                hover: reduce ? {} : {
                    rotate: [
                        0,
                        -7,
                        7,
                        -3,
                        0
                    ],
                    scale: [
                        1,
                        1.06,
                        1.03,
                        1.04,
                        1
                    ],
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    }
                }
            })
    }["Services.useMemo[iconWobbleV]"], [
        reduce
    ]);
    // ====== Featured mouse-parallax tilt ======
    const px = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const py = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(py, [
        -0.5,
        0.5
    ], [
        6,
        -6
    ]);
    const rotY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(px, [
        -0.5,
        0.5
    ], [
        -7,
        7
    ]);
    const hiX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(px, [
        -0.5,
        0.5
    ], [
        -22,
        22
    ]);
    const hiY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(py, [
        -0.5,
        0.5
    ], [
        -16,
        16
    ]);
    const IconBadge = (param)=>{
        let { icon: Icon, variant = 'light' } = param;
        const base = variant === 'dark' ? 'bg-black/25 backdrop-blur-md ring-1 ring-white/15' : 'bg-white/55 backdrop-blur-md ring-1 ring-secondary/15';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
            variants: iconWobbleV,
            className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl ".concat(base),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-5 w-5 text-muted"
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 439,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/services/index.tsx",
            lineNumber: 435,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const WhiteCard = (param)=>{
        let { page, icon } = param;
        _s();
        const cover = getPageCover(page);
        const desc = getPageSubheading(page);
        const shine = useCursorShine(shineEnabled);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
            variants: cardV,
            whileHover: "hover",
            whileTap: "tap",
            className: "h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/".concat(page.slug),
                onMouseMove: shine.onMove,
                onMouseEnter: shine.onEnter,
                onMouseLeave: shine.onLeave,
                className: [
                    'group relative flex h-full flex-col overflow-hidden rounded-3xl p-8',
                    'bg-white/75 backdrop-blur-xl',
                    'ring-1 ring-secondary/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)]',
                    'transition-shadow hover:shadow-[0_18px_54px_rgba(0,0,0,0.14)]',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-muted/60'
                ].join(' '),
                children: [
                    cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: cover.src,
                                    alt: cover.alt,
                                    fill: true,
                                    sizes: "(max-width: 1024px) 100vw, 33vw",
                                    className: "object-cover opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 474,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 473,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white/82"
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:12px_12px]"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 487,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorShineLayer, {
                        mx: shine.mx,
                        my: shine.my,
                        op: shine.op,
                        variant: "light"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 490,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -inset-40 rotate-12 bg-gradient-to-r from-transparent via-muted/12 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 494,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                icon: icon,
                                variant: "light"
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[18px] font-semibold tracking-tight text-lightblack",
                                        children: getPageTitle(page)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    desc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[13px] leading-relaxed text-secondary/80 ".concat(clamp3),
                                        children: desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 497,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mt-auto pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-lightblack/85",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "transition-colors group-hover:text-lightblack",
                                    children: "Fedezze fel"
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    variants: arrowV,
                                    className: "text-muted",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 512,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 511,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 457,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/services/index.tsx",
            lineNumber: 456,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s(WhiteCard, "H19RJ4t1codjXn98rWkJJQLKGfo=", false, function() {
        return [
            useCursorShine
        ];
    });
    const FeaturedCard = (param)=>{
        let { page } = param;
        _s2();
        const cover = getPageCover(page);
        const desc = getPageSubheading(page);
        const shine = useCursorShine(shineEnabled);
        const onMove = (e)=>{
            if (reduce) return;
            // tilt
            const r = e.currentTarget.getBoundingClientRect();
            const nx = (e.clientX - r.left) / r.width - 0.5;
            const ny = (e.clientY - r.top) / r.height - 0.5;
            px.set(nx);
            py.set(ny);
            // shine
            shine.onMove(e);
        };
        const onLeave = ()=>{
            if (!reduce) {
                px.set(0);
                py.set(0);
            }
            shine.onLeave();
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
            variants: cardV,
            whileHover: "hover",
            whileTap: "tap",
            className: "h-full",
            style: reduce ? undefined : {
                perspective: 980
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/".concat(page.slug),
                onMouseMove: onMove,
                onMouseEnter: shine.onEnter,
                onMouseLeave: onLeave,
                className: [
                    'group relative block h-full overflow-hidden rounded-3xl',
                    'ring-1 ring-black/5 shadow-[0_16px_60px_rgba(0,0,0,0.22)]',
                    'min-h-[400px] sm:min-h-[460px] lg:min-h-0',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-muted/60'
                ].join(' '),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
                        className: "absolute inset-0",
                        style: reduce ? undefined : {
                            rotateX: rotX,
                            rotateY: rotY,
                            transformStyle: 'preserve-3d'
                        },
                        children: [
                            cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: cover.src,
                                    alt: cover.alt,
                                    fill: true,
                                    sizes: "(max-width: 1024px) 100vw, 66vw",
                                    className: "object-cover opacity-95",
                                    priority: false
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 585,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-black/10 via-black/35 to-black/75"
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
                                className: "absolute inset-0",
                                style: reduce ? undefined : {
                                    x: hiX,
                                    y: hiY
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_15%,rgba(255,255,255,0.16),transparent_55%)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[radial-gradient(700px_circle_at_70%_25%,rgba(178,147,61,0.14),transparent_60%)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 598,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/35"
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 603,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 604,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorShineLayer, {
                        mx: shine.mx,
                        my: shine.my,
                        op: shine.op,
                        variant: "dark"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 608,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-6 top-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
                            variant: "dark"
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-6 top-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-full bg-muted px-3 py-1 text-[10px] font-extrabold tracking-[0.18em] text-lightblack ring-1 ring-black/10",
                            children: [
                                "KIEMELT",
                                !reduce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    "aria-hidden": true,
                                    className: "pointer-events-none absolute inset-y-0 left-0 w-16 rotate-12 bg-gradient-to-r from-transparent via-white/32 to-transparent",
                                    animate: {
                                        x: [
                                            '-160%',
                                            '280%'
                                        ]
                                    },
                                    transition: {
                                        duration: 2.1,
                                        ease: 'linear',
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 620,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 617,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 616,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 p-8 sm:p-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[30px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[38px]",
                                    children: getPageTitle(page)
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                desc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[13px] leading-relaxed text-charcoal/90 ".concat(clamp3),
                                    children: desc
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 638,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "transition-opacity group-hover:opacity-95",
                                                children: "Részletek Megtekintése"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                                lineNumber: 643,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                variants: arrowV,
                                                "aria-hidden": true,
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                                lineNumber: 644,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                        lineNumber: 642,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 641,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 632,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -inset-40 rotate-12 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 653,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 559,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/services/index.tsx",
            lineNumber: 552,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s2(FeaturedCard, "H19RJ4t1codjXn98rWkJJQLKGfo=", false, function() {
        return [
            useCursorShine
        ];
    });
    const CTACard = ()=>{
        _s3();
        const shine = useCursorShine(shineEnabled);
        // muted glow on hover (inline style ok)
        const glowStyle = reduce ? undefined : {
            boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(0,0,0,0.34), 0 0 50px rgba(178,147,61,0.20)'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
            variants: cardV,
            whileHover: "hover",
            whileTap: "tap",
            className: "h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
                onMouseMove: shine.onMove,
                onMouseEnter: shine.onEnter,
                onMouseLeave: shine.onLeave,
                className: [
                    'relative flex min-h-[210px] h-full flex-col items-center justify-center overflow-hidden rounded-3xl p-10 text-center',
                    'bg-gradient-to-br from-lightblack via-lightblack to-black',
                    'ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.32)]'
                ].join(' '),
                style: glowStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_25%,rgba(255,255,255,0.10),transparent_55%)]"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 686,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:12px_12px]"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 689,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorShineLayer, {
                        mx: shine.mx,
                        my: shine.my,
                        op: shine.op,
                        variant: "dark"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 692,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
                                variants: iconWobbleV,
                                className: "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 699,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 695,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            ctaTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-[22px] font-semibold tracking-tight text-white",
                                children: ctaTitle
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 703,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null,
                            ctaDesc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-charcoal/80 ".concat(clamp3),
                                children: ctaDesc
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 707,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null,
                            primaryCTA && ctaHref && ctaHref !== '#' && ctaBtnText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: reduce ? undefined : {
                                        y: -2
                                    },
                                    whileTap: reduce ? undefined : {
                                        scale: 0.98
                                    },
                                    transition: reduce ? undefined : {
                                        type: 'spring',
                                        stiffness: 520,
                                        damping: 28
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        as: "a",
                                        href: ctaHref,
                                        target: ctaTarget,
                                        rel: ctaRel,
                                        variant: "primary",
                                        className: "h-11 rounded-full bg-muted px-8 text-[12px] font-extrabold tracking-wide text-lightblack shadow-sm hover:bg-muted/90",
                                        children: ctaBtnText
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                        lineNumber: 719,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 714,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                lineNumber: 713,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 694,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 674,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/services/index.tsx",
            lineNumber: 673,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s3(CTACard, "H19RJ4t1codjXn98rWkJJQLKGfo=", false, function() {
        return [
            useCursorShine
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative bg-charcoal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                style: {
                    opacity: bgO
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        style: {
                            y: bgY1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(178,147,61,0.14),transparent_55%)]"
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 743,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 742,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        style: {
                            y: bgY2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[radial-gradient(980px_circle_at_88%_70%,rgba(41,38,36,0.10),transparent_60%)]"
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 747,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !reduce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        animate: {
                            x: [
                                0,
                                14,
                                0
                            ],
                            y: [
                                0,
                                -10,
                                0
                            ]
                        },
                        transition: {
                            duration: 14,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ],
                            repeat: Infinity
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[radial-gradient(760px_circle_at_55%_30%,rgba(178,147,61,0.10),transparent_62%)]"
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 756,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 751,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:14px_14px]"
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                        lineNumber: 760,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 741,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: sectionV,
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: true,
                    amount: 0.25
                },
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: titleV,
                            className: "text-center",
                            children: [
                                !!heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                    className: "text-center text-lightblack",
                                    children: heading
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 773,
                                    columnNumber: 27
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: underlineV,
                                    className: "mx-auto mt-5 h-[2px] w-24 origin-left rounded-full bg-muted/80"
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 775,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                !!sub_heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subheading"], {
                                    className: "mx-auto mt-6 max-w-2xl text-center text-secondary",
                                    children: sub_heading
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 772,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasAny ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: gridV,
                            className: "mt-14 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-2 lg:grid-cols-3 lg:items-stretch",
                                    children: [
                                        featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-2 h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedCard, {
                                                page: featured
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                                lineNumber: 794,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                            lineNumber: 793,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : null,
                                        rightTop || rightBottom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (featured ? 'lg:col-span-1' : 'lg:col-span-3') + ' h-full',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid h-full grid-cols-1 gap-2 lg:grid-rows-2",
                                                children: [
                                                    rightTop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhiteCard, {
                                                        page: rightTop,
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                                        lineNumber: 801,
                                                        columnNumber: 35
                                                    }, ("TURBOPACK compile-time value", void 0)) : null,
                                                    rightBottom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhiteCard, {
                                                        page: rightBottom,
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                                        lineNumber: 802,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                                lineNumber: 800,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                            lineNumber: 799,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 791,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-2 lg:grid-cols-3",
                                    children: [
                                        bottomLeft ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhiteCard, {
                                            page: bottomLeft,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                            lineNumber: 810,
                                            columnNumber: 31
                                        }, ("TURBOPACK compile-time value", void 0)) : null,
                                        bottomMid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhiteCard, {
                                            page: bottomMid,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                            lineNumber: 811,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0)) : null,
                                        hasCtaCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTACard, {}, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                            lineNumber: 812,
                                            columnNumber: 31
                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                                    lineNumber: 809,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/services/index.tsx",
                            lineNumber: 789,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dynamic-zone/services/index.tsx",
                    lineNumber: 770,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/services/index.tsx",
                lineNumber: 763,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dynamic-zone/services/index.tsx",
        lineNumber: 739,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Services, "NsKOyTSReBvfXHjibBlCfZVVS3Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = Services;
var _c, _c1;
__turbopack_context__.k.register(_c, "CursorShineLayer");
__turbopack_context__.k.register(_c1, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/services/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/dynamic-zone/services/index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_82c1b534._.js.map