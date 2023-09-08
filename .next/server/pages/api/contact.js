"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/EmailTemplate.tsx


const EmailTemplate = ({ name, email, message })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: message
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                children: name
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                children: email
            })
        ]
    });

;// CONCATENATED MODULE: external "resend"
const external_resend_namespaceObject = require("resend");
;// CONCATENATED MODULE: ./src/pages/api/contact.ts


/* harmony default export */ const contact = (async (req, res)=>{
    const resend = new external_resend_namespaceObject.Resend(process.env.RESEND_TOKEN);
    try {
        const { name, email, message } = req.body;
        const data = await resend.emails.send({
            from: "contato@ternodobinga.com.br",
            to: [
                "rodrigo.digao000@icloud.com"
            ],
            subject: "Contato pelo Site",
            react: EmailTemplate({
                name: name,
                email: email,
                message: message
            })
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [403], () => (__webpack_exec__(8790)));
module.exports = __webpack_exports__;

})();