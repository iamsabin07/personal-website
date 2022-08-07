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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsStyles */ \"./src/components/Projects/ProjectsStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/iamsabin07/Desktop/Website/src/components/Projects/Projects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showMore = _useState[0],\n      setShowMore = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n\n    if (showMore) {\n      setShowMore(false);\n      router.push('/#projects');\n    } else {\n      setShowMore(true);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    id: \"projects\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.GridContainer, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.projects.map(function (_ref) {\n        var id = _ref.id,\n            image = _ref.image,\n            title = _ref.title,\n            description = _ref.description,\n            tags = _ref.tags,\n            source = _ref.source,\n            visit = _ref.visit;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n            src: image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n              title: true,\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {\n              children: description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                  fontWeight: 'bold'\n                },\n                children: \"TECHNOLOGIES:\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 13\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {\n                children: tags.map(function (tag, i) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                    children: tag\n                  }, i, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 19\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: source,\n                target: \"_blank\",\n                style: {\n                  color: 'white'\n                },\n                children: \"Code\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 26\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 11\n            }, _this), visit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              href: visit,\n              children: \"Website\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 23\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 11\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this), showMore && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.GridContainer, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.projects2.map(function (_ref2) {\n        var id = _ref2.id,\n            image = _ref2.image,\n            title = _ref2.title,\n            description = _ref2.description,\n            tags = _ref2.tags,\n            source = _ref2.source,\n            visit = _ref2.visit;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n            src: image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n              title: true,\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {\n              children: description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                  fontWeight: 'bold'\n                },\n                children: \"TECHNOLOGIES:\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {\n                children: tags.map(function (tag, i) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                    children: tag\n                  }, i, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: source,\n                target: \"_blank\",\n                style: {\n                  color: 'white'\n                },\n                children: \"Code\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 32\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 17\n            }, _this), visit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {\n              children: \"Website\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 27\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 15\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      className: \"show-more\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {\n        children: showMore ? \"Show Less\" : \"Show More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hrs, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Projects, \"UYxhnYplNblA0QlJGdFgWJvSVi0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanM/Y2Q3OSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInVzZVN0YXRlIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInByb2plY3RzIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJmb250V2VpZ2h0IiwibWFwIiwidGFnIiwiaSIsImNvbG9yIiwicHJvamVjdHMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNXQywrQ0FBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNkQyxRQURjO0FBQUEsTUFDSkMsV0FESTs7QUFFckIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU07QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFHTixRQUFILEVBQVk7QUFDVkMsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUMsWUFBTSxDQUFDSyxJQUFQLENBQVksWUFBWjtBQUNELEtBSEQsTUFJSTtBQUNGTixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEO0FBRUYsR0FWRDs7QUFZQSxzQkFDRSw4REFBQyw2REFBRDtBQUFVLE1BQUUsRUFBQyxVQUFiO0FBQUEsNEJBQ0EsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUEsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxlQUdBLDhEQUFDLDBEQUFEO0FBQUEsZ0JBQ0dPLDhEQUFBLENBQWE7QUFBQSxZQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxZQUFNQyxLQUFOLFFBQU1BLEtBQU47QUFBQSxZQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxZQUFvQkMsV0FBcEIsUUFBb0JBLFdBQXBCO0FBQUEsWUFBaUNDLElBQWpDLFFBQWlDQSxJQUFqQztBQUFBLFlBQXVDQyxNQUF2QyxRQUF1Q0EsTUFBdkM7QUFBQSxZQUErQ0MsS0FBL0MsUUFBK0NBLEtBQS9DO0FBQUEsNEJBQ1osOERBQUMscURBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnREFBRDtBQUFLLGVBQUcsRUFBSUw7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQSxvQ0FDRSw4REFBQyx3REFBRDtBQUFhLG1CQUFLLE1BQWxCO0FBQUEsd0JBQW9CQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLHFEQUFEO0FBQUEsd0JBQVdDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFPRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBLHNDQUNBO0FBQU0scUJBQUssRUFBRTtBQUFDSSw0QkFBVSxFQUFFO0FBQWIsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFRSw4REFBQyxvREFBRDtBQUFBLDBCQUNHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSxzQ0FDUiw4REFBQyxnREFBRDtBQUFBLDhCQUFnQkQ7QUFBaEIscUJBQVlDLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEUTtBQUFBLGlCQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBa0JFLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0EsOERBQUMsMERBQUQ7QUFBQSxxQ0FBZTtBQUFHLG9CQUFJLEVBQUdMLE1BQVY7QUFBa0Isc0JBQU0sRUFBQyxRQUF6QjtBQUFrQyxxQkFBSyxFQUFFO0FBQUNNLHVCQUFLLEVBQUM7QUFBUCxpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLEVBRUdMLEtBQUssaUJBQUksOERBQUMsMERBQUQ7QUFBZSxrQkFBSSxFQUFHQSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGO0FBQUEsV0FBZU4sRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIQSxFQThCQ1QsUUFBUSxpQkFDVCw4REFBQywwREFBRDtBQUFBLGdCQUNPcUIsK0RBQUEsQ0FBYztBQUFBLFlBQUVaLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFlBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFlBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFlBQW9CQyxXQUFwQixTQUFvQkEsV0FBcEI7QUFBQSxZQUFpQ0MsSUFBakMsU0FBaUNBLElBQWpDO0FBQUEsWUFBdUNDLE1BQXZDLFNBQXVDQSxNQUF2QztBQUFBLFlBQStDQyxLQUEvQyxTQUErQ0EsS0FBL0M7QUFBQSw0QkFDYiw4REFBQyxxREFBRDtBQUFBLGtDQUNFLDhEQUFDLGdEQUFEO0FBQUssZUFBRyxFQUFJTDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBLG9DQUNFLDhEQUFDLHdEQUFEO0FBQWEsbUJBQUssTUFBbEI7QUFBQSx3QkFBb0JDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMscURBQUQ7QUFBQSx3QkFBV0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQU9FO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQUEsc0NBQ0E7QUFBTSxxQkFBSyxFQUFFO0FBQUNJLDRCQUFVLEVBQUU7QUFBYixpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxlQUVFLDhEQUFDLG9EQUFEO0FBQUEsMEJBQ0dILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLHNDQUNSLDhEQUFDLGdEQUFEO0FBQUEsOEJBQWdCRDtBQUFoQixxQkFBWUMsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURRO0FBQUEsaUJBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFrQkUsOERBQUMsd0RBQUQ7QUFBQSxvQ0FDRSw4REFBQywwREFBRDtBQUFBLHFDQUFlO0FBQUcsb0JBQUksRUFBR0wsTUFBVjtBQUFrQixzQkFBTSxFQUFDLFFBQXpCO0FBQWtDLHFCQUFLLEVBQUU7QUFBQ00sdUJBQUssRUFBQztBQUFQLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0wsS0FBSyxpQkFBSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGO0FBQUEsV0FBZU4sRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkEsZUE0REE7QUFBSyxhQUFPLEVBQUUsaUJBQUNKLENBQUQ7QUFBQSxlQUFLRCxXQUFXLENBQUNDLENBQUQsQ0FBaEI7QUFBQSxPQUFkO0FBQW1DLGVBQVMsRUFBRSxXQUE5QztBQUFBLDhCQUNBLDhEQUFDLHdEQUFEO0FBQUEsa0JBQWNMLFFBQVEsR0FBRSxXQUFGLEdBQWdCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRUQsQ0FwRkQ7O0dBQU1GLFE7VUFFV0ssa0Q7OztLQUZYTCxRO0FBc0ZOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IEJsb2dDYXJkLCBDYXJkSW5mbywgRXh0ZXJuYWxMaW5rcywgR3JpZENvbnRhaW5lciwgSGVhZGVyVGhyZWUsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgVXRpbGl0eUxpc3QsIEltZywgSHJzIH0gZnJvbSAnLi9Qcm9qZWN0c1N0eWxlcyc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHJvamVjdHMsIHByb2plY3RzMiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihzaG93TW9yZSl7XG4gICAgICBzZXRTaG93TW9yZShmYWxzZSk7XG4gICAgICByb3V0ZXIucHVzaCgnLyNwcm9qZWN0cycpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZXRTaG93TW9yZSh0cnVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybihcbiAgICA8U2VjdGlvbiAgaWQ9XCJwcm9qZWN0c1wiPlxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDxTZWN0aW9uVGl0bGUgPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XG4gICAgPEdyaWRDb250YWluZXI+XG4gICAgICB7cHJvamVjdHMubWFwKCh7aWQsIGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRhZ3MsIHNvdXJjZSwgdmlzaXR9KT0+KFxuICAgICAgICA8QmxvZ0NhcmQga2V5PXtpZH0+XG4gICAgICAgICAgPEltZyBzcmMgPSB7aW1hZ2V9IC8+XG4gICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgIDxIci8+XG4gICAgICAgICAgICA8Q2FyZEluZm8+e2Rlc2NyaXB0aW9ufTwvQ2FyZEluZm8+XG4gICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcgfX0+VEVDSE5PTE9HSUVTOjwvc3Bhbj5cbiAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWcga2V5ID0ge2l9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICA8RXh0ZXJuYWxMaW5rcz48YSBocmVmID17c291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT5Db2RlPC9hPjwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICAgIHt2aXNpdCAmJiA8RXh0ZXJuYWxMaW5rcyBocmVmID17dmlzaXR9PldlYnNpdGU8L0V4dGVybmFsTGlua3M+IH1cbiAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICA8L0Jsb2dDYXJkPlxuICAgICAgKSl9XG4gICAgPC9HcmlkQ29udGFpbmVyPlxuICAgIHtzaG93TW9yZSAmJiBcbiAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAgICB7cHJvamVjdHMyLm1hcCgoe2lkLCBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YWdzLCBzb3VyY2UsIHZpc2l0fSk9PihcbiAgICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPEltZyBzcmMgPSB7aW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt0aXRsZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgICAgICAgIDxIci8+XG4gICAgICAgICAgICAgICAgPENhcmRJbmZvPntkZXNjcmlwdGlvbn08L0NhcmRJbmZvPlxuICAgICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcgfX0+VEVDSE5PTE9HSUVTOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxUYWdMaXN0PlxuICAgICAgICAgICAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWcga2V5ID0ge2l9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxuICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzPjxhIGhyZWYgPXtzb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319PkNvZGU8L2E+PC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICAgIHt2aXNpdCAmJiA8RXh0ZXJuYWxMaW5rcz5XZWJzaXRlPC9FeHRlcm5hbExpbmtzPiB9XG4gICAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICA8L0Jsb2dDYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgfVxuICAgIFxuICAgIDxkaXYgb25DbGljaz17KGUpPT5oYW5kbGVDbGljayhlKX0gY2xhc3NOYW1lID1cInNob3ctbW9yZVwiPlxuICAgIDxIZWFkZXJUaHJlZT57c2hvd01vcmU/IFwiU2hvdyBMZXNzXCIgOiBcIlNob3cgTW9yZVwifTwvSGVhZGVyVGhyZWU+XG4gICAgPEhycy8+XG4gICAgPC9kaXY+XG4gIDwvU2VjdGlvbj5cbiAgKVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects/Projects.js\n");

/***/ })

});