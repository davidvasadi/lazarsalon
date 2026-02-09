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
"[project]/components/dynamic-zone/how-it-works/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dynamic-zone/how-it-works/index.tsx
__turbopack_context__.s([
    "HowItWorks",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/elements/subheading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// -----------------------------
// Easy params (tweak here)
// -----------------------------
const DIAL = {
    GOLD: '#B2933D',
    // Geometry
    ARC_H: {
        mobile: 420,
        desktop: 470
    },
    PEAK_Y: {
        mobile: 132,
        desktop: 148
    },
    // Circle size/radius (keeps arc perfectly circular: width===height===size)
    RADIUS: {
        mobile: {
            scale: 0.86,
            min: 460,
            max: 640
        },
        desktop: {
            scale: 0.78,
            min: 560,
            max: 820
        }
    },
    // Step distribution along the arc (wide enough so all remain visible)
    STEP_SPAN: {
        mobile: 220,
        desktop: 244
    },
    // Ticks (minor/mid/major pattern stays many & grey)
    TICK_START: -180,
    TICK_SPAN: 360,
    TICK_COUNT: {
        mobile: 132,
        desktop: 176
    },
    MID_EVERY: {
        mobile: 6,
        desktop: 8
    },
    MAJOR_EVERY: {
        mobile: 13,
        desktop: 16
    },
    TICK_LEN: {
        minor: {
            mobile: 20,
            desktop: 24
        },
        mid: {
            mobile: 34,
            desktop: 42
        },
        major: {
            mobile: 48,
            desktop: 60
        }
    },
    // Major tick highlight (step ticks)
    THRESHOLD_DEG: 18,
    MAJOR_TICK_MIN_LEN: {
        mobile: 140,
        desktop: 160
    },
    // Step nodes feel
    STEP_FOCUS_DEG: 125,
    COUNTER_FACTOR: 0.88,
    // Drag speed (smaller => slower / more visible)
    DEG_PER_PX: {
        mobile: 0.095,
        desktop: 0.075
    },
    // Snap feel (premium, slower)
    SPRING: {
        stiffness: 150,
        damping: 24,
        mass: 1.0
    },
    SOFT: {
        duration: 0.32,
        ease: [
            0.22,
            1,
            0.36,
            1
        ]
    },
    // Auto loop (4.8–5.5s jitter)
    AUTO_MS: {
        min: 4800,
        max: 5500
    },
    AUTO_PAUSE_MS: 11000,
    // Center marker vertical layout
    CENTER: {
        labelOffsetY: {
            mobile: 46,
            desktop: 50
        },
        iconOffsetY: {
            mobile: 176,
            desktop: 196
        },
        titleOffsetY: {
            mobile: 30,
            desktop: 32
        }
    }
};
// -----------------------------
// Utils
// -----------------------------
const clamp = (n, min, max)=>Math.max(min, Math.min(max, n));
const pad2 = (n)=>String(n).padStart(2, '0');
const normDeg = (d)=>{
    const x = ((d + 180) % 360 + 360) % 360 - 180;
    return x === -180 ? 180 : x;
};
const closestRotation = (current, target)=>{
    // Find target equivalent (target + 360k) closest to current
    const diff = normDeg(current - target);
    return current - diff;
};
const closestRotationDirectional = (current, target, dir)=>{
    // dir: +1 => continue “forward” (rot tends to decrease for next),
    //      -1 => continue “backward” (rot tends to increase for prev),
    //       0 => shortest path.
    let c = closestRotation(current, target);
    if (dir === 1 && c > current) c -= 360;
    if (dir === -1 && c < current) c += 360;
    return c;
};
const lerp = (a, b, t)=>a + (b - a) * t;
const rgba = (r, g, b, a)=>"rgba(".concat(Math.round(r), ", ").concat(Math.round(g), ", ").concat(Math.round(b), ", ").concat(a, ")");
function TogglePill(param) {
    let { value, onChange, reduce } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 inline-flex rounded-full bg-white/10 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    "aria-hidden": true,
                    className: "absolute bottom-0 top-0 rounded-full bg-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.08)]",
                    animate: {
                        left: value ? 0 : '50%',
                        width: '50%'
                    },
                    transition: reduce ? {
                        duration: 0
                    } : {
                        type: 'spring',
                        stiffness: 420,
                        damping: 34
                    }
                }, void 0, false, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onChange(true),
                    className: [
                        'relative z-10 rounded-full px-6 py-2 text-sm',
                        'text-white/85 transition',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
                        value ? 'text-white' : 'hover:text-white'
                    ].join(' '),
                    children: "Igen"
                }, void 0, false, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onChange(false),
                    className: [
                        'relative z-10 rounded-full px-6 py-2 text-sm',
                        'text-white/85 transition',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
                        !value ? 'text-white' : 'hover:text-white'
                    ].join(' '),
                    children: "Nem"
                }, void 0, false, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c = TogglePill;
function Tick(param) {
    let { a, radius, len, opacity } = param;
    // placed on circle via rotate(a) translateY(-radius)
    // counter-rotate the line by -(dial + a) so it stays vertical in world-space
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "absolute left-1/2 top-1/2",
        style: {
            transform: "translate(-50%, -50%) rotate(".concat(a, "deg) translateY(-").concat(radius, "px)")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-0 top-0 w-px bg-white",
            style: {
                height: len,
                opacity,
                transformOrigin: 'top center',
                transform: "translateX(-0.5px) rotate(calc(0deg - var(--dial) - ".concat(a, "deg))")
            }
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_c1 = Tick;
function MajorTick(param) {
    let { angleDeg, radius, len, rot, thresholdDeg } = param;
    _s();
    // dist = abs(normDeg(rot + angleDeg))
    const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(rot, {
        "MajorTick.useTransform[dist]": (r)=>Math.abs(normDeg(r + angleDeg))
    }["MajorTick.useTransform[dist]"]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(dist, {
        "MajorTick.useTransform[t]": (d)=>clamp(1 - d / thresholdDeg, 0, 1)
    }["MajorTick.useTransform[t]"]);
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(t, {
        "MajorTick.useTransform[w]": (x)=>"".concat(lerp(1, 2.6, x), "px")
    }["MajorTick.useTransform[w]"]);
    const bg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(t, {
        "MajorTick.useTransform[bg]": (x)=>{
            // grey -> gold
            const r = lerp(255, 178, x);
            const g = lerp(255, 147, x);
            const b = lerp(255, 61, x);
            const a = lerp(0.22, 0.98, x);
            // slight “line” look: fade at ends
            return "linear-gradient(to bottom, ".concat(rgba(r, g, b, 0), ", ").concat(rgba(r, g, b, a), ", ").concat(rgba(r, g, b, a * 0.16), ")");
        }
    }["MajorTick.useTransform[bg]"]);
    const shadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(t, {
        "MajorTick.useTransform[shadow]": (x)=>{
            const a = lerp(0.08, 0.55, x);
            const a2 = lerp(0.02, 0.24, x);
            return "drop-shadow(0 18px 26px rgba(0,0,0,0.32)) drop-shadow(0 16px 26px rgba(178,147,61,".concat(a, ")) drop-shadow(0 2px 10px rgba(178,147,61,").concat(a2, "))");
        }
    }["MajorTick.useTransform[shadow]"]);
    const op = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(t, {
        "MajorTick.useTransform[op]": (x)=>lerp(0.78, 1, x)
    }["MajorTick.useTransform[op]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none absolute left-1/2 top-1/2",
        style: {
            transform: "translate(-50%, -50%) rotate(".concat(angleDeg, "deg) translateY(-").concat(radius, "px)")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            className: "absolute left-0 top-0",
            style: {
                height: len,
                width: w,
                opacity: op,
                backgroundImage: bg,
                transformOrigin: 'top center',
                transform: "translateX(-0.5px) rotate(calc(0deg - var(--dial) - ".concat(angleDeg, "deg))"),
                filter: shadow,
                borderRadius: 999
            }
        }, void 0, false, {
            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
            lineNumber: 272,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s(MajorTick, "X2Gx89SoPPEwFdh6Q6x5HPQ7YVE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = MajorTick;
function StepNode(param) {
    let { angleDeg, radius, stemLen, step, index, rot, reduce, isMobile, onPick } = param;
    _s1();
    const Icon = step.icon;
    const counter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(rot, {
        "StepNode.useTransform[counter]": (r)=>-(r + angleDeg) * DIAL.COUNTER_FACTOR
    }["StepNode.useTransform[counter]"]);
    // distance from center
    const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(rot, {
        "StepNode.useTransform[dist]": (r)=>Math.abs(normDeg(r + angleDeg))
    }["StepNode.useTransform[dist]"]);
    const focusT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(dist, {
        "StepNode.useTransform[focusT]": (d)=>clamp(1 - d / DIAL.STEP_FOCUS_DEG, 0, 1)
    }["StepNode.useTransform[focusT]"]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(focusT, {
        "StepNode.useTransform[scale]": (t)=>lerp(0.9, 1.12, t)
    }["StepNode.useTransform[scale]"]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(focusT, {
        "StepNode.useTransform[opacity]": (t)=>lerp(0.28, 1, t)
    }["StepNode.useTransform[opacity]"]);
    const iconOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(focusT, {
        "StepNode.useTransform[iconOpacity]": (t)=>lerp(0.42, 0.92, t)
    }["StepNode.useTransform[iconOpacity]"]);
    const labelOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(focusT, {
        "StepNode.useTransform[labelOpacity]": (t)=>lerp(0.22, 0.9, t)
    }["StepNode.useTransform[labelOpacity]"]);
    const iconSize = isMobile ? 26 : 30;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute left-1/2 top-1/2",
        style: {
            transform: "translate(-50%, -50%) rotate(".concat(angleDeg, "deg) translateY(-").concat(radius, "px)")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                rotate: counter,
                scale,
                opacity,
                transformOrigin: '50% 0%'
            },
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute left-1/2 top-0 w-[2px]",
                    style: {
                        height: stemLen,
                        transform: 'translateX(-1px)',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.26), rgba(255,255,255,0.10))',
                        filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.28))'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    type: "button",
                    onClick: onPick,
                    className: [
                        'absolute left-1/2',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25'
                    ].join(' '),
                    style: {
                        top: stemLen,
                        transform: 'translate(-50%, -50%)',
                        padding: isMobile ? 10 : 12,
                        background: 'transparent'
                    },
                    whileHover: reduce ? undefined : {
                        y: -1,
                        scale: 1.02
                    },
                    whileTap: reduce ? undefined : {
                        y: 0,
                        scale: 0.985
                    },
                    transition: reduce ? undefined : {
                        type: 'spring',
                        stiffness: 320,
                        damping: 24
                    },
                    "aria-label": "".concat(pad2(index + 1), " – ").concat(step.title),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    "aria-hidden": true,
                                    className: "text-white",
                                    style: {
                                        width: iconSize,
                                        height: iconSize,
                                        opacity: iconOpacity.get()
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: [
                                        'mt-2',
                                        'max-w-[128px]',
                                        'truncate',
                                        'text-[11px] font-medium leading-none tracking-tight',
                                        'text-white/80'
                                    ].join(' '),
                                    style: {
                                        opacity: labelOpacity
                                    },
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0",
                            style: {
                                opacity: iconOpacity
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute left-1/2",
                    style: {
                        top: stemLen,
                        transform: 'translate(-50%, -50%)',
                        opacity: iconOpacity
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "text-white",
                        style: {
                            width: iconSize,
                            height: iconSize
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
            lineNumber: 335,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, this);
}
_s1(StepNode, "ttZzRD1FU6Vpno4KJwpfzXKd9V4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c3 = StepNode;
const HowItWorks = (param)=>{
    let { heading, sub_heading, steps } = param;
    _s2();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[fallback]": ()=>[
                {
                    title: 'Időpont foglalás',
                    description: 'Kezdje meg útját a megújulás felé. Válassza ki az Önnek legmegfelelőbb időpontot kényelmes online rendszerünkön keresztül, vagy hívjon minket bizalommal egyedi igényeivel.',
                    ctaText: 'Foglalás most',
                    ctaHref: '#'
                },
                {
                    title: 'Konzultáció',
                    description: 'Személyes találkozó szakértőinkkel, ahol részletesen felmérjük igényeit, hajtípusát és stílusát. Egy közös beszélgetés során megalkotjuk az Önre szabott, egyedi tervet.'
                },
                {
                    title: 'Szolgáltatás',
                    description: 'Dőljön hátra és élvezze a prémium kezelést nyugodt, luxus környezetben. A legkiválóbb anyagok és legmodernebb technikák felhasználásával varázsoljuk újjá megjelenését.'
                },
                {
                    title: 'Utóápolás',
                    description: 'A törődés nem ér véget a szalonban. Személyre szabott tanácsokkal és professzionális termék-ajánlással segítünk, hogy az eredmény tartósan ragyogó maradjon.',
                    ctaText: 'Kapcsolat',
                    ctaHref: '#'
                }
            ]
    }["HowItWorks.useMemo[fallback]"], []);
    const iconByIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[iconByIndex]": ()=>[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"]
            ]
    }["HowItWorks.useMemo[iconByIndex]"], []);
    const resolvedSteps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[resolvedSteps]": ()=>{
            const src = Array.isArray(steps) && steps.length ? steps : fallback;
            return src.map({
                "HowItWorks.useMemo[resolvedSteps]": (s, i)=>{
                    var _fallback_i, _fallback_i1, _fallback_i2, _fallback_i3;
                    var _s_title, _ref, _s_description, _ref1, _ctaText, _ref2, _ctaHref, _ref3, _iconByIndex_;
                    return {
                        title: (_ref = (_s_title = s.title) !== null && _s_title !== void 0 ? _s_title : (_fallback_i = fallback[i]) === null || _fallback_i === void 0 ? void 0 : _fallback_i.title) !== null && _ref !== void 0 ? _ref : "Lépés ".concat(i + 1),
                        description: (_ref1 = (_s_description = s.description) !== null && _s_description !== void 0 ? _s_description : (_fallback_i1 = fallback[i]) === null || _fallback_i1 === void 0 ? void 0 : _fallback_i1.description) !== null && _ref1 !== void 0 ? _ref1 : '',
                        ctaText: (_ref2 = (_ctaText = s.ctaText) !== null && _ctaText !== void 0 ? _ctaText : (_fallback_i2 = fallback[i]) === null || _fallback_i2 === void 0 ? void 0 : _fallback_i2.ctaText) !== null && _ref2 !== void 0 ? _ref2 : undefined,
                        ctaHref: (_ref3 = (_ctaHref = s.ctaHref) !== null && _ctaHref !== void 0 ? _ctaHref : (_fallback_i3 = fallback[i]) === null || _fallback_i3 === void 0 ? void 0 : _fallback_i3.ctaHref) !== null && _ref3 !== void 0 ? _ref3 : undefined,
                        icon: (_iconByIndex_ = iconByIndex[i % iconByIndex.length]) !== null && _iconByIndex_ !== void 0 ? _iconByIndex_ : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"]
                    };
                }
            }["HowItWorks.useMemo[resolvedSteps]"]);
        }
    }["HowItWorks.useMemo[resolvedSteps]"], [
        steps,
        fallback,
        iconByIndex
    ]);
    const len = resolvedSteps.length;
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [auto, setAuto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HowItWorks.useState": ()=>!reduce
    }["HowItWorks.useState"]);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settling, setSettling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorks.useEffect": ()=>{
            if (reduce) setAuto(false);
        }
    }["HowItWorks.useEffect"], [
        reduce
    ]);
    const safeActive = clamp(active, 0, Math.max(0, len - 1));
    // ---- panel width (for responsive geometry) ----
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [vw, setVw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorks.useEffect": ()=>{
            const el = panelRef.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "HowItWorks.useEffect": (entries)=>{
                    var _entries__contentRect, _entries_;
                    var _entries__contentRect_width;
                    const w = (_entries__contentRect_width = entries === null || entries === void 0 ? void 0 : (_entries_ = entries[0]) === null || _entries_ === void 0 ? void 0 : (_entries__contentRect = _entries_.contentRect) === null || _entries__contentRect === void 0 ? void 0 : _entries__contentRect.width) !== null && _entries__contentRect_width !== void 0 ? _entries__contentRect_width : 0;
                    setVw(w);
                }
            }["HowItWorks.useEffect"]);
            ro.observe(el);
            return ({
                "HowItWorks.useEffect": ()=>ro.disconnect()
            })["HowItWorks.useEffect"];
        }
    }["HowItWorks.useEffect"], []);
    const geom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[geom]": ()=>{
            const viewportW = Math.max(340, vw || 0);
            const isMobile = viewportW < 560;
            const arcH = isMobile ? DIAL.ARC_H.mobile : DIAL.ARC_H.desktop;
            const rr = isMobile ? DIAL.RADIUS.mobile : DIAL.RADIUS.desktop;
            const radius = clamp(viewportW * rr.scale, rr.min, rr.max);
            const size = radius * 2;
            const peakY = isMobile ? DIAL.PEAK_Y.mobile : DIAL.PEAK_Y.desktop;
            const stepSpan = isMobile ? DIAL.STEP_SPAN.mobile : DIAL.STEP_SPAN.desktop;
            const stepStart = -stepSpan / 2;
            const stepAngles = len <= 1 ? [
                0
            ] : Array.from({
                length: len
            }, {
                "HowItWorks.useMemo[geom]": (_, i)=>stepStart + i * stepSpan / (len - 1)
            }["HowItWorks.useMemo[geom]"]);
            const tickCount = isMobile ? DIAL.TICK_COUNT.mobile : DIAL.TICK_COUNT.desktop;
            return {
                viewportW,
                isMobile,
                arcH,
                radius,
                size,
                peakY,
                stepAngles,
                tickStart: DIAL.TICK_START,
                tickSpan: DIAL.TICK_SPAN,
                tickCount,
                midEvery: isMobile ? DIAL.MID_EVERY.mobile : DIAL.MID_EVERY.desktop,
                majorEvery: isMobile ? DIAL.MAJOR_EVERY.mobile : DIAL.MAJOR_EVERY.desktop,
                tickLen: {
                    minor: isMobile ? DIAL.TICK_LEN.minor.mobile : DIAL.TICK_LEN.minor.desktop,
                    mid: isMobile ? DIAL.TICK_LEN.mid.mobile : DIAL.TICK_LEN.mid.desktop,
                    major: isMobile ? DIAL.TICK_LEN.major.mobile : DIAL.TICK_LEN.major.desktop
                },
                majorTickMinLen: isMobile ? DIAL.MAJOR_TICK_MIN_LEN.mobile : DIAL.MAJOR_TICK_MIN_LEN.desktop
            };
        }
    }["HowItWorks.useMemo[geom]"], [
        vw,
        len
    ]);
    // ---- rotation (dial) ----
    const rot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0); // degrees
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopAnim = ()=>{
        var _animRef_current;
        (_animRef_current = animRef.current) === null || _animRef_current === void 0 ? void 0 : _animRef_current.stop();
        animRef.current = null;
    };
    const pauseUntilRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pauseAuto = function() {
        let ms = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DIAL.AUTO_PAUSE_MS;
        pauseUntilRef.current = Date.now() + ms;
    };
    // Center target: chosen step should land at 0°
    const rotTargetForIndex = (i)=>{
        var _geom_stepAngles_i;
        const ang = (_geom_stepAngles_i = geom.stepAngles[i]) !== null && _geom_stepAngles_i !== void 0 ? _geom_stepAngles_i : 0;
        return 0 - ang;
    };
    const snapTo = function(i, dir) {
        let soft = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        const idx = clamp(i, 0, Math.max(0, len - 1));
        const target = rotTargetForIndex(idx);
        stopAnim();
        if (reduce) {
            setSettling(false);
            rot.set(target);
            return;
        }
        const current = rot.get();
        const chosen = closestRotationDirectional(current, target, dir);
        setSettling(true);
        animRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(rot, chosen, soft ? DIAL.SOFT : {
            type: 'spring',
            ...DIAL.SPRING,
            onComplete: ()=>setSettling(false)
        });
    };
    // Initial snap on resize (soft)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorks.useEffect": ()=>{
            snapTo(safeActive, 0, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HowItWorks.useEffect"], [
        geom.viewportW
    ]);
    // Live highlight: whichever step is closest to center (0°)
    const [liveActive, setLiveActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(safeActive);
    const lastLiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const nearestIndexByRot = (rotDeg)=>{
        let best = 0;
        let bestD = Infinity;
        for(let i = 0; i < geom.stepAngles.length; i++){
            const target = rotTargetForIndex(i);
            const d = Math.abs(normDeg(rotDeg - target));
            if (d < bestD) {
                bestD = d;
                best = i;
            }
        }
        return best;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(rot, 'change', {
        "HowItWorks.useMotionValueEvent": (latest)=>{
            const now = performance.now();
            if (now - lastLiveRef.current < 55) return;
            lastLiveRef.current = now;
            setLiveActive(nearestIndexByRot(latest));
        }
    }["HowItWorks.useMotionValueEvent"]);
    const displayIndex = dragging || settling ? liveActive : safeActive;
    const displayStep = resolvedSteps[clamp(displayIndex, 0, Math.max(0, len - 1))];
    // Go helpers (wrap)
    const goBy = (delta)=>{
        if (len <= 1) return;
        pauseAuto();
        const next = (safeActive + delta + len) % len;
        setActive(next);
        snapTo(next, delta);
    };
    const goTo = (idx)=>{
        pauseAuto();
        setActive(idx);
        snapTo(idx, 0);
    };
    // Auto-loop with jitter (4.8–5.5s)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorks.useEffect": ()=>{
            if (reduce) return;
            if (!auto) return;
            if (len <= 1) return;
            let t = null;
            let cancelled = false;
            const schedule = {
                "HowItWorks.useEffect.schedule": ()=>{
                    if (cancelled) return;
                    const ms = Math.floor(lerp(DIAL.AUTO_MS.min, DIAL.AUTO_MS.max, Math.random())) || DIAL.AUTO_MS.min;
                    t = window.setTimeout({
                        "HowItWorks.useEffect.schedule": ()=>{
                            if (cancelled) return;
                            if (isDraggingRef.current) {
                                schedule();
                                return;
                            }
                            if (Date.now() < pauseUntilRef.current) {
                                schedule();
                                return;
                            }
                            const next = (safeActive + 1) % len;
                            setActive(next);
                            snapTo(next, 1);
                            schedule();
                        }
                    }["HowItWorks.useEffect.schedule"], ms);
                }
            }["HowItWorks.useEffect.schedule"];
            schedule();
            return ({
                "HowItWorks.useEffect": ()=>{
                    cancelled = true;
                    if (t) window.clearTimeout(t);
                }
            })["HowItWorks.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HowItWorks.useEffect"], [
        auto,
        reduce,
        len,
        safeActive
    ]);
    // drag → rotation
    const dragStartRotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const DEG_PER_PX = geom.isMobile ? DIAL.DEG_PER_PX.mobile : DIAL.DEG_PER_PX.desktop;
    const onDragStart = ()=>{
        pauseAuto();
        isDraggingRef.current = true;
        setDragging(true);
        setSettling(false);
        stopAnim();
        dragStartRotRef.current = rot.get();
    };
    const onDragEnd = ()=>{
        isDraggingRef.current = false;
        setDragging(false);
        const idx = nearestIndexByRot(rot.get());
        setActive(idx);
        snapTo(idx, 0);
    };
    // keyboard (wrap)
    const onKeyDown = (e)=>{
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goBy(-1);
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            goBy(1);
        }
    };
    const ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[ticks]": ()=>Array.from({
                length: geom.tickCount
            }, {
                "HowItWorks.useMemo[ticks]": (_, i)=>i
            }["HowItWorks.useMemo[ticks]"])
    }["HowItWorks.useMemo[ticks]"], [
        geom.tickCount
    ]);
    // CSS var for “dial rotation” (used to keep ticks vertical)
    const dialCss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(rot, {
        "HowItWorks.useTransform[dialCss]": (r)=>"".concat(r, "deg")
    }["HowItWorks.useTransform[dialCss]"]);
    // Center marker geometry (NO fixed gold line, NO extra gold dot/diamond)
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[marker]": ()=>{
            const peak = geom.peakY;
            const iconY = peak + (geom.isMobile ? DIAL.CENTER.iconOffsetY.mobile : DIAL.CENTER.iconOffsetY.desktop);
            return {
                labelY: peak - (geom.isMobile ? DIAL.CENTER.labelOffsetY.mobile : DIAL.CENTER.labelOffsetY.desktop),
                iconY,
                titleY: iconY + (geom.isMobile ? DIAL.CENTER.titleOffsetY.mobile : DIAL.CENTER.titleOffsetY.desktop)
            };
        }
    }["HowItWorks.useMemo[marker]"], [
        geom.isMobile,
        geom.peakY
    ]);
    // Major tick length: long enough to “meet” the center marker visually
    const majorTickLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HowItWorks.useMemo[majorTickLen]": ()=>{
            const desired = Math.max(0, marker.iconY - geom.peakY - 10);
            return Math.max(desired, geom.majorTickMinLen);
        }
    }["HowItWorks.useMemo[majorTickLen]"], [
        marker.iconY,
        geom.peakY,
        geom.majorTickMinLen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            className: "mx-auto max-w-7xl py-20 md:py-28",
            children: [
                (heading || sub_heading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mx-auto mb-10 max-w-4xl text-center",
                    children: [
                        heading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                            className: "text-center",
                            children: heading
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 772,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : null,
                        sub_heading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$elements$2f$subheading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subheading"], {
                            className: "mx-auto mt-4 max-w-2xl text-center",
                            children: sub_heading
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 775,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 770,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: panelRef,
                    tabIndex: 0,
                    onKeyDown: onKeyDown,
                    className: [
                        'relative overflow-hidden rounded-[28px] md:rounded-[32px]',
                        'border border-white/10',
                        'bg-[#0b0c0e]',
                        'outline-none',
                        'shadow-[0_40px_140px_rgba(0,0,0,0.55)]',
                        'min-h-[610px] md:min-h-[710px]'
                    ].join(' '),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0",
                            style: {
                                backgroundImage: 'radial-gradient(900px circle at 20% 12%, rgba(255,255,255,0.10), transparent 58%), radial-gradient(820px circle at 78% 18%, rgba(255,255,255,0.08), transparent 62%), radial-gradient(1200px circle at 50% 120%, rgba(0,0,0,0.88), transparent 58%), radial-gradient(1200px circle at 50% 50%, rgba(0,0,0,0.55), transparent 70%)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 796,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-full w-full",
                                preserveAspectRatio: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "noiseFilter",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                            type: "fractalNoise",
                                            baseFrequency: "0.9",
                                            numOctaves: "3",
                                            stitchTiles: "stitch"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 816,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 815,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        filter: "url(#noiseFilter)",
                                        opacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                lineNumber: 810,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 806,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex h-full flex-col items-center px-6 py-10 md:px-10 md:py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-white/85",
                                            children: "Automatikus váltás"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TogglePill, {
                                            reduce: !!reduce,
                                            value: auto,
                                            onChange: (v)=>{
                                                pauseAuto(2500);
                                                setAuto(v);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 840,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 max-w-xl text-center text-sm leading-relaxed text-white/55",
                                            children: "Kattints az ikonokra, vagy húzd az ívet – billentyűzeten a nyilakkal is navigálhatsz."
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 849,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 835,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-10 w-full flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mx-auto w-full overflow-hidden",
                                            style: {
                                                height: geom.arcH
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    "aria-hidden": true,
                                                    className: "absolute inset-0 touch-pan-y",
                                                    drag: reduce ? false : 'x',
                                                    dragConstraints: {
                                                        left: -420,
                                                        right: 420
                                                    },
                                                    dragElastic: 0.06,
                                                    dragMomentum: false,
                                                    onDragStart: reduce ? undefined : onDragStart,
                                                    onDrag: (e, info)=>{
                                                        if (reduce) return;
                                                        rot.set(dragStartRotRef.current + info.offset.x * DEG_PER_PX);
                                                        pauseAuto();
                                                    },
                                                    onDragEnd: reduce ? undefined : onDragEnd
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute",
                                                    style: {
                                                        left: '50%',
                                                        top: geom.peakY,
                                                        width: geom.size,
                                                        height: geom.size,
                                                        x: -geom.size / 2,
                                                        rotate: rot,
                                                        ['--dial']: dialCss
                                                    },
                                                    children: [
                                                        ticks.map((i)=>{
                                                            const t = geom.tickCount <= 1 ? 0.5 : i / (geom.tickCount - 1);
                                                            const a = geom.tickStart + t * geom.tickSpan;
                                                            const major = i % geom.majorEvery === 0;
                                                            const mid = i % geom.midEvery === 0;
                                                            const L = major ? geom.tickLen.major : mid ? geom.tickLen.mid : geom.tickLen.minor;
                                                            const op = major ? 0.3 : mid ? 0.2 : 0.14;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tick, {
                                                                a: a,
                                                                radius: geom.radius,
                                                                len: L,
                                                                opacity: op
                                                            }, "tick-".concat(i), false, {
                                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }),
                                                        resolvedSteps.map((_, i)=>{
                                                            var _geom_stepAngles_i;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MajorTick, {
                                                                angleDeg: (_geom_stepAngles_i = geom.stepAngles[i]) !== null && _geom_stepAngles_i !== void 0 ? _geom_stepAngles_i : 0,
                                                                radius: geom.radius,
                                                                len: majorTickLen,
                                                                rot: rot,
                                                                thresholdDeg: DIAL.THRESHOLD_DEG
                                                            }, "major-step-tick-".concat(i), false, {
                                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                                lineNumber: 924,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }),
                                                        resolvedSteps.map((s, i)=>{
                                                            const stemLen = geom.isMobile ? 108 : 126;
                                                            var _geom_stepAngles_i;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepNode, {
                                                                angleDeg: (_geom_stepAngles_i = geom.stepAngles[i]) !== null && _geom_stepAngles_i !== void 0 ? _geom_stepAngles_i : 0,
                                                                radius: geom.radius,
                                                                stemLen: stemLen,
                                                                step: s,
                                                                index: i,
                                                                rot: rot,
                                                                reduce: !!reduce,
                                                                isMobile: geom.isMobile,
                                                                onPick: ()=>goTo(i)
                                                            }, "step-node-".concat(i), false, {
                                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                                lineNumber: 938,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "aria-hidden": true,
                                                    className: "pointer-events-none absolute inset-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-1/2 text-xs font-semibold tracking-wide text-white/70",
                                                            style: {
                                                                top: marker.labelY,
                                                                transform: 'translateX(-50%)'
                                                            },
                                                            children: pad2(displayIndex + 1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                            lineNumber: 957,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-1/2",
                                                            style: {
                                                                top: marker.iconY,
                                                                transform: 'translateX(-50%)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(displayStep.icon, {
                                                                "aria-hidden": true,
                                                                className: "h-7 w-7 text-white/85"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-1/2 px-6 text-center text-lg font-semibold tracking-tight text-white",
                                                            style: {
                                                                top: marker.titleY,
                                                                transform: 'translateX(-50%)'
                                                            },
                                                            children: displayStep.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 858,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>goBy(-1),
                                                    className: [
                                                        'inline-flex h-10 w-10 items-center justify-center rounded-full',
                                                        'bg-white/10 text-white/80',
                                                        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_16px_34px_rgba(0,0,0,0.35)]',
                                                        'hover:bg-white/12 hover:text-white',
                                                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25'
                                                    ].join(' '),
                                                    "aria-label": "Előző lépés",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>goBy(1),
                                                    className: [
                                                        'inline-flex h-10 w-10 items-center justify-center rounded-full',
                                                        'bg-white/10 text-white/80',
                                                        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_16px_34px_rgba(0,0,0,0.35)]',
                                                        'hover:bg-white/12 hover:text-white',
                                                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25'
                                                    ].join(' '),
                                                    "aria-label": "Következő lépés",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 1005,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 990,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-col items-center text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto max-w-2xl text-sm leading-relaxed text-white/58",
                                                children: [
                                                    displayStep.description,
                                                    displayStep.ctaText && displayStep.ctaHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                            href: displayStep.ctaHref,
                                                            className: [
                                                                'inline-flex items-center gap-2 rounded-full',
                                                                'bg-white/10 px-5 py-2 text-sm text-white/85',
                                                                'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_16px_34px_rgba(0,0,0,0.35)]',
                                                                'hover:bg-white/12 hover:text-white',
                                                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25'
                                                            ].join(' '),
                                                            whileHover: reduce ? undefined : {
                                                                y: -1
                                                            },
                                                            whileTap: reduce ? undefined : {
                                                                y: 0,
                                                                scale: 0.99
                                                            },
                                                            transition: reduce ? undefined : {
                                                                type: 'spring',
                                                                stiffness: 300,
                                                                damping: 24
                                                            },
                                                            children: [
                                                                displayStep.ctaText,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": true,
                                                                    className: "text-white/60",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                                    lineNumber: 1046,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                            lineNumber: 1028,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                        lineNumber: 1027,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sr-only",
                                            "aria-hidden": true,
                                            children: resolvedSteps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: s.title
                                                }, "sr-step-".concat(i), false, {
                                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                                    lineNumber: 1058,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                                    lineNumber: 856,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                            lineNumber: 833,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
                    lineNumber: 782,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
            lineNumber: 768,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dynamic-zone/how-it-works/index.tsx",
        lineNumber: 767,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(HowItWorks, "apw+uguNeLrFV7hih43mVxUfMZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c4 = HowItWorks;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TogglePill");
__turbopack_context__.k.register(_c1, "Tick");
__turbopack_context__.k.register(_c2, "MajorTick");
__turbopack_context__.k.register(_c3, "StepNode");
__turbopack_context__.k.register(_c4, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dynamic-zone/how-it-works/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/dynamic-zone/how-it-works/index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_e76711a4._.js.map