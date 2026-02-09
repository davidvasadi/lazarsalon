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
"[project]/components/ui/strapi-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrapiImage",
    ()=>StrapiImage,
    "getStrapiMedia",
    ()=>getStrapiMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function getStrapiMedia(url) {
    const strapiURL = ("TURBOPACK compile-time value", "http://localhost:1337");
    if (url == null) return null;
    if (url.startsWith('data:')) return url;
    if (url.startsWith('http') || url.startsWith('//')) return url;
    if (url.startsWith('/')) {
        var _document;
        if (!strapiURL && ((_document = document) === null || _document === void 0 ? void 0 : _document.location.host.endsWith('.strapidemo.com'))) //TURBOPACK unreachable
        ;
        return strapiURL + url;
    }
    return "".concat(strapiURL).concat(url);
}
function StrapiImage(param) {
    let { src, alt, className, ...rest } = param;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_noStore"])();
    const imageUrl = getStrapiMedia(src);
    if (!imageUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: imageUrl,
        alt: alt !== null && alt !== void 0 ? alt : 'No alternative text provided',
        className: className,
        ...rest
    }, void 0, false, {
        fileName: "[project]/components/ui/strapi-image.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = StrapiImage;
var _c;
__turbopack_context__.k.register(_c, "StrapiImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/brands.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brands",
    ()=>Brands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/subheading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$strapi$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/strapi-image.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Brands = (param)=>{
    let { heading, sub_heading, logos } = param;
    _s();
    const middleIndex = Math.floor(logos.length / 2);
    const firstHalf = logos.slice(0, middleIndex);
    const secondHalf = logos.slice(middleIndex);
    const logosArraySplitInHalf = [
        firstHalf,
        secondHalf
    ];
    // State to track the current logo set
    let [stateLogos, setLogos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(logosArraySplitInHalf);
    const [activeLogoSet, setActiveLogoSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stateLogos[0]);
    const flipLogos = ()=>{
        // Shift the logos array and update the active logo set
        setLogos((currentLogos)=>{
            const newLogos = [
                ...currentLogos.slice(1),
                currentLogos[0]
            ];
            setActiveLogoSet(newLogos[0]); // Update the active set
            return newLogos;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Brands.useEffect": ()=>{
            // Flip logos every 3 seconds
            const timer = setTimeout({
                "Brands.useEffect.timer": ()=>{
                    flipLogos();
                }
            }["Brands.useEffect.timer"], 3000);
            return ({
                "Brands.useEffect": ()=>clearTimeout(timer)
            })["Brands.useEffect"]; // Clear timeout on component unmount or state update
        }
    }["Brands.useEffect"], [
        activeLogoSet
    ]); // Depend on activeLogoSet to trigger flip every time it changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-20 py-10 md:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                className: "pt-4",
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/brands.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subheading"], {
                className: "max-w-3xl mx-auto",
                children: sub_heading
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/brands.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: activeLogoSet.map((logo, idx)=>{
                        var _logo_image;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 40,
                                opacity: 0,
                                filter: 'blur(10px)'
                            },
                            animate: {
                                y: 0,
                                opacity: 1,
                                filter: 'blur(0px)'
                            },
                            exit: {
                                y: -40,
                                opacity: 0,
                                filter: 'blur(10px)'
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.1 * idx,
                                ease: [
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                ]
                            },
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$strapi$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrapiImage"], {
                                src: (_logo_image = logo.image) === null || _logo_image === void 0 ? void 0 : _logo_image.url,
                                alt: logo.image.alternativeText,
                                width: 400,
                                height: 400,
                                className: "md:h-20 md:w-60 h-10 w-40 object-contain filter",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/brands.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, logo.title || "logo-".concat(idx), false, {
                            fileName: "[project]/components/dynamic-zone/brands.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/components/dynamic-zone/brands.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/brands.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dynamic-zone/brands.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Brands, "59/xFNy/4EpfzraBWkCxTz93bZw=");
_c = Brands;
var _c;
__turbopack_context__.k.register(_c, "Brands");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/brands.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/dynamic-zone/brands.tsx [app-client] (ecmascript)"));
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

//# sourceMappingURL=_45ad340a._.js.map