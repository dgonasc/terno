"use strict";
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 9155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3695);
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Menu() {
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showNavBar = ()=>{
        navRef.current?.classList.toggle("max-lg:hidden");
    };
    const [isHovering, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_headroom__WEBPACK_IMPORTED_MODULE_7___default()), {
        style: {
            zIndex: "4"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-0 bg-white border-2 bg-opacity-90 dark:bg-slate-900 dark:border-t-black border-b-green-600 border-x-green-600 border-opacity-30 dark:border-opacity-20",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center justify-between lg:px-14 xl:mr-24",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                            animate: isHovering ? {
                                scale: [
                                    1,
                                    1.5,
                                    1.5,
                                    1,
                                    1
                                ],
                                rotate: [
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                ]
                            } : {
                                scale: [
                                    1,
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                rotate: [
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                ]
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "https://terno-do-binga.s3.us-east-2.amazonaws.com/files/logo-2.png",
                                    alt: "Logo Terno do Binga",
                                    className: "w-16 m-2 rounded-full lg:ml-4 lg:w-22 dark:invert-30 dark:invert",
                                    width: 300,
                                    height: 180,
                                    id: "logo",
                                    onClick: ()=>setIsHovered((isHovering)=>!isHovering)
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        ref: navRef,
                        onClick: showNavBar,
                        className: "text-xl dark:text-zinc-300 max-lg:z-50 font-xilosa max-lg:text-5xl max-lg:-top-2 max-lg:bg-opacity-75 max-lg:mt-24 max-lg:absolute max-lg:hidden max-lg:justify-center max-lg:items-center max-lg:bg-white dark:max-lg:bg-slate-900 dark:max-lg:bg-opacity-50 max-lg:w-screen max-lg:h-screen lg:flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.MotionConfig, {
                                transition: {
                                    duration: 1
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    animate: {
                                        y: 80
                                    },
                                    transition: {
                                        delay: 1
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "z-50 mr-8 lg:flex lg:items-center lg:-mt-16 lg:space-x-10 drop-shadow-sm shadow-black max-lg:ml-6 max-lg:space-y-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "max-lg:pb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/",
                                                    className: "max-lg:p-2 max-lg:bg-yellow-300 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:rounded-lg",
                                                    children: "in\xedcio"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "max-lg:pb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    prefetch: false,
                                                    className: "max-lg:p-2 max-lg:bg-yellow-300 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:rounded-lg",
                                                    href: "/about",
                                                    children: "sobre"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "max-lg:pb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    prefetch: false,
                                                    className: "max-lg:p-2 max-lg:bg-yellow-300 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:rounded-lg",
                                                    href: "/photos",
                                                    children: "fotos"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "max-lg:pb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    prefetch: false,
                                                    className: "max-lg:p-2 max-lg:bg-yellow-300 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:rounded-lg",
                                                    href: "/search",
                                                    children: "pesquisa"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "max-lg:pb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    prefetch: false,
                                                    className: "max-lg:p-2 max-lg:bg-yellow-300 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:rounded-lg",
                                                    href: "/download",
                                                    children: "downloads"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.MotionConfig, {
                                transition: {
                                    duration: 1
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    initial: {
                                        y: -100
                                    },
                                    animate: {
                                        y: 3
                                    },
                                    transition: {
                                        delay: 1.5
                                    },
                                    className: "flex items-center space-x-3 text-2xl max-lg:bg-yellow-300 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 max-lg:absolute max-lg:ml-6 max-lg:justify-center max-lg:mt-24 lg:justify-center drop-shadow-md max-lg:p-2 max-lg:rounded-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.youtube.com/@TernoDoBinga",
                                            className: "cursor-pointer drop-shadow-xl",
                                            target: "blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_5__.SiYoutube, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://instagram.com/ternodobinga",
                                            className: "cursor-pointer drop-shadow-xl",
                                            target: "blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_5__.SiInstagram, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "mailto: ternodobinga@gmail.com",
                                            className: "cursor-pointer drop-shadow-xl",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiMail, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: "https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreVermelha.png",
                                            alt: "\xc1rvore com folhas vermelhas",
                                            width: 40,
                                            height: 15,
                                            className: "pl-2 drop-shadow-xl dark:hidden "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: "https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreVermelha_darkMode.png",
                                            alt: "\xc1rvore com folhas vermelhas",
                                            width: 40,
                                            height: 15,
                                            className: "hidden pl-2 drop-shadow-xl dark:flex"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        onClick: showNavBar,
                        src: "https://terno-do-binga.s3.us-east-2.amazonaws.com/files/menu.png",
                        alt: "Menu mobile",
                        className: "static cursor-pointer w-14 top-8 lg:hidden dark:invert",
                        width: 120,
                        height: 90
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;