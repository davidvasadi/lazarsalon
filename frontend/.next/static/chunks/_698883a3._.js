(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const Container = (param)=>{
    let { children, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-7xl mx-auto px-4 md:px-10 xl:px-4 ", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/container.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/components/dynamic-zone/how-it-works/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dynamic-zone/how-it-works/card.tsx
__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Card = (param)=>{
    let { mode, title, description, index, badge, icon: Icon, ctaText, ctaHref } = param;
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const isPanel = mode === 'panel';
    const enter = {
        hidden: {
            opacity: 0,
            y: reduce ? 0 : 10
        },
        show: {
            opacity: 1,
            y: 0,
            transition: reduce ? {
                duration: 0.2
            } : {
                duration: 0.6,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: enter,
        initial: isPanel ? false : 'hidden',
        whileInView: isPanel ? undefined : 'show',
        viewport: isPanel ? undefined : {
            once: true,
            amount: 0.35
        },
        className: [
            'relative rounded-3xl',
            'border border-[rgb(var(--lightblack-rgb)/0.10)]',
            // “white” surface
            'bg-[rgb(var(--paper-rgb)/0.92)]',
            isPanel ? 'px-10 py-10 md:px-14 md:py-12' : 'px-7 py-7'
        ].join(' '),
        style: {
            boxShadow: '0 30px 90px rgb(var(--lightblack-rgb)/0.08)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-3xl",
                style: {
                    background: 'radial-gradient(800px circle at 20% 0%, rgb(var(--paper-rgb)/0.70), transparent 55%)',
                    opacity: 0.75
                }
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid h-10 w-10 place-items-center rounded-full bg-[rgb(var(--paper-rgb)/0.96)]",
                                style: {
                                    border: '1px solid rgb(var(--lightblack-rgb)/0.12)',
                                    boxShadow: 'inset 0 0 0 6px rgb(var(--paper-rgb)/0.55)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-[18px] w-[18px] text-[var(--muted)]",
                                    style: {
                                        opacity: 0.85
                                    },
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] tracking-[0.30em] uppercase text-[var(--secondary)]",
                                        style: {
                                            opacity: 0.82
                                        },
                                        children: badge
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-[var(--secondary)]",
                                        style: {
                                            opacity: 0.72
                                        },
                                        children: String(index).padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block h-px w-24 bg-[var(--lightblack)]",
                        style: {
                            opacity: 0.10
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: [
                    'relative z-10 mt-6 font-semibold tracking-tight text-[var(--lightblack)]',
                    isPanel ? 'text-3xl md:text-[34px]' : 'text-xl'
                ].join(' '),
                children: title
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: [
                    'relative z-10 mt-4 text-[var(--secondary)] leading-[1.95]',
                    isPanel ? 'text-[15px] md:text-base max-w-3xl' : 'text-sm'
                ].join(' '),
                children: description
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ctaText && ctaHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: ctaHref,
                    className: "group inline-flex items-center gap-2 text-sm font-medium text-[var(--lightblack)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--paper-rgb)/0.95)]",
                    "aria-label": ctaText,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative",
                            children: [
                                ctaText,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    className: "absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-[var(--muted)] transition-transform duration-300 group-hover:scale-x-100",
                                    style: {
                                        opacity: 0.55
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            "aria-hidden": true,
                            className: "inline-flex text-[var(--muted)]",
                            initial: false,
                            whileHover: reduce ? undefined : {
                                x: 3
                            },
                            transition: reduce ? undefined : {
                                duration: 0.22,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            style: {
                                opacity: 0.8
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/dynamic-zone/how-it-works/card.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Card, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/how-it-works/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dynamic-zone/how-it-works/index.tsx
__turbopack_context__.s([
    "HowItWorks",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Diamond$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/diamond.js [app-client] (ecmascript) <export default as Diamond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/subheading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dynamic$2d$zone$2f$how$2d$it$2d$works$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dynamic-zone/how-it-works/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const bezier = (t, p0, p1, p2)=>{
    const u = 1 - t;
    return {
        x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
        y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y
    };
};
const bezierTangent = (t, p0, p1, p2)=>{
    // B'(t) = 2(1-t)(P1-P0) + 2t(P2-P1)
    const u = 1 - t;
    return {
        x: 2 * u * (p1.x - p0.x) + 2 * t * (p2.x - p1.x),
        y: 2 * u * (p1.y - p0.y) + 2 * t * (p2.y - p1.y)
    };
};
const clamp01 = (n)=>Math.max(0, Math.min(1, n));
const HowItWorks = (param)=>{
    let { heading, sub_heading, steps } = param;
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const baseSteps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[baseSteps]": ()=>[
                {
                    title: 'Időpont Foglalás',
                    description: 'Kezdje meg útját a megújulás felé. Válassza ki az Önnek legmegfelelőbb időpontot kényelmes online rendszerünkön keresztül, vagy hívjon minket bizalommal egyedi igényeivel.',
                    badge: 'ELSŐ LÉPÉS',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                    ctaText: 'Foglalás Most',
                    ctaHref: '#'
                },
                {
                    title: 'Konzultáció',
                    description: 'Személyes találkozó szakértőinkkel, ahol részletesen felmérjük igényeit, bőrét és stílusát. Egy közös beszélgetés során megalkotjuk az Önre szabott, egyedi kezelési tervet.',
                    badge: 'MÁSODIK LÉPÉS',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"]
                },
                {
                    title: 'Szolgáltatás',
                    description: 'Dőljön hátra és élvezze a prémium kezelés nyugodt, luxus környezetében. A legkiválóbb anyagok és legmodernebb technikák felhasználásával varázsoljuk újjá megjelenését.',
                    badge: 'HARMADIK LÉPÉS',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Diamond$3e$__["Diamond"]
                },
                {
                    title: 'Utóápolás',
                    description: 'A törődés nem ér véget a szalonban. Szakértői tanácsokkal és professzionális termékekkel látjuk el, hogy a tartós, ragyogó eredményt otthon is megőrizhesse.',
                    badge: 'NEGYEDIK LÉPÉS',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                    ctaText: 'Kapcsolatfelvétel',
                    ctaHref: '#'
                }
            ]
    }["HowItWorks.useMemo[baseSteps]"], []);
    const resolvedSteps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[resolvedSteps]": ()=>{
            const inSteps = Array.isArray(steps) ? steps : [];
            return baseSteps.map({
                "HowItWorks.useMemo[resolvedSteps]": (s, i)=>{
                    var _inSteps_i;
                    const incoming = (_inSteps_i = inSteps[i]) !== null && _inSteps_i !== void 0 ? _inSteps_i : {};
                    var _incoming_title, _incoming_description, _incoming_badge, _incoming_ctaText, _ref, _incoming_ctaHref, _ref1;
                    return {
                        ...s,
                        title: (_incoming_title = incoming.title) !== null && _incoming_title !== void 0 ? _incoming_title : s.title,
                        description: (_incoming_description = incoming.description) !== null && _incoming_description !== void 0 ? _incoming_description : s.description,
                        badge: (_incoming_badge = incoming.badge) !== null && _incoming_badge !== void 0 ? _incoming_badge : s.badge,
                        ctaText: (_ref = (_incoming_ctaText = incoming.ctaText) !== null && _incoming_ctaText !== void 0 ? _incoming_ctaText : s.ctaText) !== null && _ref !== void 0 ? _ref : undefined,
                        ctaHref: (_ref1 = (_incoming_ctaHref = incoming.ctaHref) !== null && _incoming_ctaHref !== void 0 ? _incoming_ctaHref : s.ctaHref) !== null && _ref1 !== void 0 ? _ref1 : undefined
                    };
                }
            }["HowItWorks.useMemo[resolvedSteps]"]);
        }
    }["HowItWorks.useMemo[resolvedSteps]"], [
        baseSteps,
        steps
    ]);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [auto, setAuto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!reduce); // reduced-motion: default OFF
    const safeActive = Math.min(Math.max(active, 0), resolvedSteps.length - 1);
    const activeStep = resolvedSteps[safeActive];
    // Auto-loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorks.useEffect": ()=>{
            if (reduce) return;
            if (!auto) return;
            const len = resolvedSteps.length;
            if (len <= 1) return;
            const id = window.setInterval({
                "HowItWorks.useEffect.id": ()=>{
                    setActive({
                        "HowItWorks.useEffect.id": (a)=>(a + 1) % len
                    }["HowItWorks.useEffect.id"]);
                }
            }["HowItWorks.useEffect.id"], 3200);
            return ({
                "HowItWorks.useEffect": ()=>window.clearInterval(id)
            })["HowItWorks.useEffect"];
        }
    }["HowItWorks.useEffect"], [
        auto,
        reduce,
        resolvedSteps.length
    ]);
    // Arc measurement
    const arcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [arcW, setArcW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorks.useEffect": ()=>{
            const el = arcRef.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "HowItWorks.useEffect": (entries)=>{
                    var _entries__contentRect, _entries_;
                    var _entries__contentRect_width;
                    const w = (_entries__contentRect_width = entries === null || entries === void 0 ? void 0 : (_entries_ = entries[0]) === null || _entries_ === void 0 ? void 0 : (_entries__contentRect = _entries_.contentRect) === null || _entries__contentRect === void 0 ? void 0 : _entries__contentRect.width) !== null && _entries__contentRect_width !== void 0 ? _entries__contentRect_width : 0;
                    setArcW(w);
                }
            }["HowItWorks.useEffect"]);
            ro.observe(el);
            return ({
                "HowItWorks.useEffect": ()=>ro.disconnect()
            })["HowItWorks.useEffect"];
        }
    }["HowItWorks.useEffect"], []);
    // Arc geometry (virtual canvas wider than viewport so it can "rotate" under the center marker)
    const arc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[arc]": ()=>{
            const viewportW = arcW || 1000;
            const virtualW = Math.max(viewportW * 1.65, viewportW + 420); // enough room to shift
            const H = 190;
            const pad = Math.max(52, virtualW * 0.08);
            const baseY = H - 64; // ends
            const peakY = 34; // middle peak (upwards arc)
            const p0 = {
                x: pad,
                y: baseY
            };
            const p1 = {
                x: virtualW / 2,
                y: peakY
            };
            const p2 = {
                x: virtualW - pad,
                y: baseY
            };
            const nodesT = resolvedSteps.length <= 1 ? [
                0.5
            ] : resolvedSteps.map({
                "HowItWorks.useMemo[arc]": (_, i)=>{
                    // keep away from extremes
                    const raw = resolvedSteps.length === 1 ? 0.5 : i / (resolvedSteps.length - 1);
                    return 0.08 + raw * 0.84;
                }
            }["HowItWorks.useMemo[arc]"]);
            const nodePts = nodesT.map({
                "HowItWorks.useMemo[arc].nodePts": (t)=>bezier(t, p0, p1, p2)
            }["HowItWorks.useMemo[arc].nodePts"]);
            var _nodePts_safeActive;
            const activePt = (_nodePts_safeActive = nodePts[safeActive]) !== null && _nodePts_safeActive !== void 0 ? _nodePts_safeActive : {
                x: virtualW / 2,
                y: baseY
            };
            // Shift the whole arc group so the active node sits under the center marker
            const centerMarkerX = viewportW / 2;
            const deltaX = centerMarkerX - activePt.x;
            return {
                viewportW,
                virtualW,
                H,
                p0,
                p1,
                p2,
                nodesT,
                nodePts,
                deltaX
            };
        }
    }["HowItWorks.useMemo[arc]"], [
        arcW,
        resolvedSteps,
        safeActive
    ]);
    const ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[ticks]": ()=>Array.from({
                length: 72
            }, {
                "HowItWorks.useMemo[ticks]": (_, i)=>i
            }["HowItWorks.useMemo[ticks]"])
    }["HowItWorks.useMemo[ticks]"], []);
    const wrap = {
        hidden: {
            opacity: 0,
            y: reduce ? 0 : 10
        },
        show: {
            opacity: 1,
            y: 0,
            transition: reduce ? {
                duration: 0.2
            } : {
                duration: 0.75,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            // required tokens
            ['--charcoal']: '#E7E5E4',
            ['--lightblack']: '#292624',
            ['--secondary']: '#4f4c4c',
            ['--muted']: '#B2933D',
            // rgb helpers
            ['--charcoal-rgb']: '231 229 228',
            ['--lightblack-rgb']: '41 38 36',
            ['--secondary-rgb']: '79 76 76',
            ['--muted-rgb']: '178 147 61',
            // “white” surface (only for panels)
            ['--paper-rgb']: '255 255 255'
        },
        className: [
            'relative overflow-hidden bg-[var(--charcoal)] text-[var(--lightblack)]',
            // charcoal background, very subtle depth (NOT gold)
            "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
            'before:bg-[radial-gradient(900px_circle_at_50%_-12%,rgb(var(--lightblack-rgb)/0.06),transparent_58%),radial-gradient(720px_circle_at_50%_112%,rgb(var(--lightblack-rgb)/0.05),transparent_62%)]',
            "after:content-[''] after:absolute after:inset-0 after:pointer-events-none",
            'after:bg-[linear-gradient(to_bottom,rgb(var(--lightblack-rgb)/0.03),transparent_18%,transparent_82%,rgb(var(--lightblack-rgb)/0.03))]'
        ].join(' '),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            className: "relative z-10 py-20 md:py-28 max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: wrap,
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: true,
                    amount: 0.25
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-4 text-[var(--secondary)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    className: "h-px w-10 bg-[var(--lightblack)]",
                                    style: {
                                        opacity: 0.18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] tracking-[0.32em] uppercase",
                                    style: {
                                        opacity: 0.85
                                    },
                                    children: "Exkluzív Folyamat"
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    className: "h-px w-10 bg-[var(--lightblack)]",
                                    style: {
                                        opacity: 0.18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-8 md:grid-cols-2 md:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                        className: "mx-auto max-w-3xl text-left text-[var(--lightblack)]",
                                        children: [
                                            heading !== null && heading !== void 0 ? heading : 'A szépség útja',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--muted)]",
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 h-px w-16 bg-[var(--lightblack)]",
                                        style: {
                                            opacity: 0.14
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            sub_heading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subheading"], {
                                className: "mx-auto max-w-xl text-left text-[var(--secondary)]",
                                children: sub_heading
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:mt-16 hidden md:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-4xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dynamic$2d$zone$2f$how$2d$it$2d$works$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    mode: "panel",
                                    index: safeActive + 1,
                                    title: activeStep.title,
                                    description: activeStep.description,
                                    badge: activeStep.badge,
                                    icon: activeStep.icon,
                                    ctaText: activeStep.ctaText,
                                    ctaHref: activeStep.ctaHref
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: arcRef,
                                className: [
                                    // pull the arc closer to the card (towards it)
                                    '-mt-10',
                                    'relative mx-auto max-w-6xl',
                                    'rounded-3xl',
                                    'border border-[rgb(var(--lightblack-rgb)/0.10)]',
                                    // main background = charcoal; arc “surface” = white-ish
                                    'bg-[rgb(var(--paper-rgb)/0.78)]',
                                    'px-6 pt-8 pb-10',
                                    'overflow-hidden'
                                ].join(' '),
                                style: {
                                    boxShadow: '0 28px 90px rgb(var(--lightblack-rgb)/0.08)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-[var(--secondary)]",
                                                style: {
                                                    opacity: 0.9
                                                },
                                                children: "Auto-loop"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "group",
                                                "aria-label": "Auto-loop kapcsoló",
                                                className: "inline-flex rounded-full border border-[rgb(var(--lightblack-rgb)/0.10)] bg-[rgb(var(--paper-rgb)/0.75)] p-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setAuto(true),
                                                        className: [
                                                            'px-4 py-1.5 text-sm rounded-full',
                                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper-rgb)/0.9]',
                                                            auto ? 'bg-[rgb(var(--paper-rgb)/0.96)] text-[var(--lightblack)]' : 'text-[var(--secondary)]'
                                                        ].join(' '),
                                                        children: "Yes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setAuto(false),
                                                        className: [
                                                            'px-4 py-1.5 text-sm rounded-full',
                                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper-rgb)/0.9]',
                                                            !auto ? 'bg-[rgb(var(--paper-rgb)/0.96)] text-[var(--lightblack)]' : 'text-[var(--secondary)]'
                                                        ].join(' '),
                                                        children: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-7 text-center text-sm text-[var(--secondary)]",
                                        style: {
                                            opacity: 0.7
                                        },
                                        children: "Kattints a pontokra – vagy kapcsold be az automatikus forgást."
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": true,
                                        className: "pointer-events-none absolute left-1/2 top-0 bottom-0 w-px",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[132px] h-[78px] w-px",
                                            style: {
                                                background: 'rgb(var(--muted-rgb)/0.50)',
                                                transform: 'translateX(-0.5px)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "relative mt-10 h-[190px]",
                                        initial: false,
                                        animate: reduce ? {
                                            x: arc.deltaX
                                        } : {
                                            x: arc.deltaX
                                        },
                                        transition: reduce ? {
                                            duration: 0
                                        } : {
                                            type: 'spring',
                                            stiffness: 220,
                                            damping: 30
                                        },
                                        style: {
                                            width: arc.virtualW
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": true,
                                                width: arc.virtualW,
                                                height: arc.H,
                                                viewBox: "0 0 ".concat(arc.virtualW, " ").concat(arc.H),
                                                className: "absolute inset-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M ".concat(arc.p0.x, " ").concat(arc.p0.y, " Q ").concat(arc.p1.x, " ").concat(arc.p1.y, " ").concat(arc.p2.x, " ").concat(arc.p2.y),
                                                        fill: "none",
                                                        stroke: "rgb(var(--lightblack-rgb)/0.16)",
                                                        strokeWidth: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M ".concat(arc.p0.x, " ").concat(arc.p0.y, " Q ").concat(arc.p1.x, " ").concat(arc.p1.y, " ").concat(arc.p2.x, " ").concat(arc.p2.y),
                                                        fill: "none",
                                                        stroke: "rgb(var(--paper-rgb)/0.65)",
                                                        strokeWidth: "1",
                                                        style: {
                                                            transform: 'translateY(-0.6px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ticks.map((i)=>{
                                                const t = i / (ticks.length - 1);
                                                const tt = 0.06 + t * 0.88; // keep inside ends
                                                const p = bezier(tt, arc.p0, arc.p1, arc.p2);
                                                const tan = bezierTangent(tt, arc.p0, arc.p1, arc.p2);
                                                const ang = Math.atan2(tan.y, tan.x); // tangent
                                                const normalDeg = (ang + Math.PI / 2) * 180 / Math.PI;
                                                const major = i % 18 === 0;
                                                const mid = i % 9 === 0;
                                                const len = major ? 22 : mid ? 16 : 10;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    className: "absolute w-px bg-[var(--lightblack)]",
                                                    style: {
                                                        left: p.x,
                                                        top: p.y,
                                                        height: len,
                                                        opacity: major ? 0.22 : mid ? 0.16 : 0.12,
                                                        transform: "translate(-0.5px, -".concat(len / 2, "px) rotate(").concat(normalDeg, "deg)"),
                                                        transformOrigin: 'center'
                                                    }
                                                }, "tick-".concat(i), false, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }),
                                            resolvedSteps.map((s, i)=>{
                                                var _arc_nodePts_i;
                                                const p = (_arc_nodePts_i = arc.nodePts[i]) !== null && _arc_nodePts_i !== void 0 ? _arc_nodePts_i : {
                                                    x: arc.virtualW / 2,
                                                    y: arc.H - 64
                                                };
                                                const isActive = i === safeActive;
                                                const Icon = s.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setActive(i),
                                                    className: "absolute",
                                                    style: {
                                                        left: p.x,
                                                        top: p.y,
                                                        transform: 'translate(-50%, -50%)'
                                                    },
                                                    "aria-label": "".concat(String(i + 1).padStart(2, '0'), " – ").concat(s.title),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: false,
                                                            animate: reduce ? undefined : isActive ? {
                                                                scale: 1,
                                                                opacity: 1
                                                            } : {
                                                                scale: 0.98,
                                                                opacity: 0.9
                                                            },
                                                            transition: reduce ? undefined : {
                                                                duration: 0.22,
                                                                ease: [
                                                                    0.22,
                                                                    1,
                                                                    0.36,
                                                                    1
                                                                ]
                                                            },
                                                            className: [
                                                                'group grid h-11 w-11 place-items-center rounded-full',
                                                                'bg-[rgb(var(--paper-rgb)/0.92)]',
                                                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--paper-rgb)/0.9)]'
                                                            ].join(' '),
                                                            style: {
                                                                border: "1px solid rgb(var(--lightblack-rgb)/".concat(isActive ? '0.18' : '0.12', ")"),
                                                                boxShadow: "inset 0 0 0 7px rgb(var(--paper-rgb)/0.55)"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "h-[18px] w-[18px]",
                                                                "aria-hidden": true,
                                                                style: {
                                                                    color: 'var(--muted)',
                                                                    opacity: isActive ? 0.9 : 0.55
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 text-[11px] font-medium text-[var(--secondary)]",
                                                            style: {
                                                                opacity: isActive ? 0.95 : 0.6
                                                            },
                                                            children: String(i + 1).padStart(2, '0')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, "node-".concat(i), true, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-semibold tracking-tight text-[var(--lightblack)]",
                                                children: activeStep.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-[11px] tracking-[0.26em] uppercase text-[var(--secondary)]",
                                                style: {
                                                    opacity: 0.75
                                                },
                                                children: "Milestone"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:hidden space-y-6",
                        children: resolvedSteps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dynamic$2d$zone$2f$how$2d$it$2d$works$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                mode: "stack",
                                index: i + 1,
                                title: s.title,
                                description: s.description,
                                badge: s.badge,
                                icon: s.icon,
                                ctaText: s.ctaText,
                                ctaHref: s.ctaHref
                            }, "m-".concat(i), false, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                lineNumber: 474,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HowItWorks, "uqF1e4kBdHye8bJ0LKvsDRfWtnI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/how-it-works/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/dynamic-zone/how-it-works/index.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */ function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */ !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"].current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initPrefersReducedMotion"])();
    const [shouldReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */ return shouldReduceMotion;
}
;
 //# sourceMappingURL=use-reduced-motion.mjs.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Coffee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ],
    [
        "path",
        {
            d: "M14 2v2",
            key: "6buw04"
        }
    ],
    [
        "path",
        {
            d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
            key: "pwadti"
        }
    ],
    [
        "path",
        {
            d: "M6 2v2",
            key: "colzsn"
        }
    ]
];
const Coffee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("coffee", __iconNode);
;
 //# sourceMappingURL=coffee.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Coffee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/diamond.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Diamond
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
            key: "1f1r0c"
        }
    ]
];
const Diamond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("diamond", __iconNode);
;
 //# sourceMappingURL=diamond.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/diamond.js [app-client] (ecmascript) <export default as Diamond>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Diamond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/diamond.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_698883a3._.js.map