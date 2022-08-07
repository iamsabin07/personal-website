/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsStyles */ \"./src/components/Projects/ProjectsStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/iamsabin07/Desktop/Website/src/components/Projects/Projects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showMore = _useState[0],\n      setShowMore = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n\n    if (showMore) {\n      setShowMore(false);\n      router.push('/#projects');\n    } else {\n      setShowMore(true);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    id: \"projects\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.GridContainer, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.projects.map(function (_ref) {\n        var id = _ref.id,\n            image = _ref.image,\n            title = _ref.title,\n            description = _ref.description,\n            tags = _ref.tags,\n            source = _ref.source,\n            visit = _ref.visit;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n            src: image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n              title: true,\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {\n              children: description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                  fontWeight: 'bold'\n                },\n                children: \"TECHNOLOGIES:\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 13\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {\n                children: tags.map(function (tag, i) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                    children: tag\n                  }, i, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 19\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: source,\n                target: \"_blank\",\n                style: {\n                  color: 'white'\n                },\n                children: \"Code\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 26\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 11\n            }, _this), visit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: visit,\n                target: \"_blank\",\n                children: \"Website\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 42\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 27\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 11\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this), showMore && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.GridContainer, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.projects2.map(function (_ref2) {\n        var id = _ref2.id,\n            image = _ref2.image,\n            title = _ref2.title,\n            description = _ref2.description,\n            tags = _ref2.tags,\n            source = _ref2.source,\n            visit = _ref2.visit;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n            src: image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n              title: true,\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {\n              children: description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                  fontWeight: 'bold'\n                },\n                children: \"TECHNOLOGIES:\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {\n                children: tags.map(function (tag, i) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                    children: tag\n                  }, i, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: source,\n                target: \"_blank\",\n                style: {\n                  color: 'white'\n                },\n                children: \"Code\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 32\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 17\n            }, _this), visit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: visit,\n                target: \"_blank\",\n                children: \"Website\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 42\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 27\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 15\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      className: \"show-more\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n        children: showMore ? \"Show Less\" : \"Show More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hrs, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Projects, \"UYxhnYplNblA0QlJGdFgWJvSVi0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanM/Y2Q3OSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInVzZVN0YXRlIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInByb2plY3RzIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJmb250V2VpZ2h0IiwibWFwIiwidGFnIiwiaSIsImNvbG9yIiwicHJvamVjdHMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNXQywrQ0FBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNkQyxRQURjO0FBQUEsTUFDSkMsV0FESTs7QUFFckIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU07QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFHTixRQUFILEVBQVk7QUFDVkMsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUMsWUFBTSxDQUFDSyxJQUFQLENBQVksWUFBWjtBQUNELEtBSEQsTUFJSTtBQUNGTixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEO0FBRUYsR0FWRDs7QUFZQSxzQkFDRSw4REFBQyw2REFBRDtBQUFVLE1BQUUsRUFBQyxVQUFiO0FBQUEsNEJBQ0EsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUEsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxlQUdBLDhEQUFDLDBEQUFEO0FBQUEs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UUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkY7QUFBQSxXQUFlTixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CQSxlQTREQTtBQUFLLGFBQU8sRUFBRSxpQkFBQ0osQ0FBRDtBQUFBLGVBQUtELFdBQVcsQ0FBQ0MsQ0FBRCxDQUFoQjtBQUFBLE9BQWQ7QUFBbUMsZUFBUyxFQUFFLFdBQTlDO0FBQUEsOEJBQ0EsOERBQUMsd0RBQUQ7QUFBQSxrQkFBY0wsUUFBUSxHQUFFLFdBQUYsR0FBZ0I7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUEsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9FRCxDQXBGRDs7R0FBTUYsUTtVQUVXSyxrRDs7O0tBRlhMLFE7QUFzRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBFeHRlcm5hbExpbmtzLCBHcmlkQ29udGFpbmVyLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBVdGlsaXR5TGlzdCwgSW1nLCBIcnMgfSBmcm9tICcuL1Byb2plY3RzU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cywgcHJvamVjdHMyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHNob3dNb3JlKXtcbiAgICAgIHNldFNob3dNb3JlKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvI3Byb2plY3RzJylcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNldFNob3dNb3JlKHRydWUpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxTZWN0aW9uICBpZD1cInByb2plY3RzXCI+XG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgPFNlY3Rpb25UaXRsZSA+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHtpZCwgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFncywgc291cmNlLCB2aXNpdH0pPT4oXG4gICAgICAgIDxCbG9nQ2FyZCBrZXk9e2lkfT5cbiAgICAgICAgICA8SW1nIHNyYyA9IHtpbWFnZX0gLz5cbiAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt0aXRsZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgICAgPEhyLz5cbiAgICAgICAgICAgIDxDYXJkSW5mbz57ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJyB9fT5URUNITk9MT0dJRVM6PC9zcGFuPlxuICAgICAgICAgICAgICA8VGFnTGlzdD5cbiAgICAgICAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhZyBrZXkgPSB7aX0+e3RhZ308L1RhZz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFV0aWxpdHlMaXN0PlxuICAgICAgICAgIDxFeHRlcm5hbExpbmtzPjxhIGhyZWYgPXtzb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319PkNvZGU8L2E+PC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICAgIHt2aXNpdCAmJiA8RXh0ZXJuYWxMaW5rcz48YSBocmVmID17dmlzaXR9IHRhcmdldD1cIl9ibGFua1wiPldlYnNpdGU8L2E+PC9FeHRlcm5hbExpbmtzPiB9XG4gICAgICAgICAgPC9VdGlsaXR5TGlzdD5cbiAgICAgICAgPC9CbG9nQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICB7c2hvd01vcmUgJiYgXG4gICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAge3Byb2plY3RzMi5tYXAoKHtpZCwgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFncywgc291cmNlLCB2aXNpdH0pPT4oXG4gICAgICAgICAgICA8QmxvZ0NhcmQga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxJbWcgc3JjID0ge2ltYWdlfSAvPlxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgICAgICA8SHIvPlxuICAgICAgICAgICAgICAgIDxDYXJkSW5mbz57ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnIH19PlRFQ0hOT0xPR0lFUzo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8VGFnTGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8VGFnIGtleSA9IHtpfT57dGFnfTwvVGFnPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcz48YSBocmVmID17c291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT5Db2RlPC9hPjwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICAgICAgICB7dmlzaXQgJiYgPEV4dGVybmFsTGlua3M+PGEgaHJlZiA9e3Zpc2l0fSB0YXJnZXQ9XCJfYmxhbmtcIj5XZWJzaXRlPC9hPjwvRXh0ZXJuYWxMaW5rcz4gfVxuICAgICAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICAgICAgPC9CbG9nQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgIH1cbiAgICBcbiAgICA8ZGl2IG9uQ2xpY2s9eyhlKT0+aGFuZGxlQ2xpY2soZSl9IGNsYXNzTmFtZSA9XCJzaG93LW1vcmVcIj5cbiAgICA8SGVhZGVyVGhyZWU+e3Nob3dNb3JlPyBcIlNob3cgTGVzc1wiIDogXCJTaG93IE1vcmVcIn08L0hlYWRlclRocmVlPlxuICAgIDxIcnMvPlxuICAgIDwvZGl2PlxuICA8L1NlY3Rpb24+XG4gIClcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Projects/Projects.js\n");

/***/ })

});