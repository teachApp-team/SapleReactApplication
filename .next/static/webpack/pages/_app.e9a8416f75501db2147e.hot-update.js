webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: startTest, checkTest, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTest\", function() { return startTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTest\", function() { return checkTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  message: 'START',\n  count: 0,\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"SAMPLE\",\n  answer: \"例題\",\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n    // 単語reducer\n\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1;\n  console.log(state.data); // console.log(state.data[q].Japanese);\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.data,\n    check: state.check,\n    question: state.data[q].English,\n    answer: state.data[q].Japanese,\n    alternative: [state.data[q + 1].Japanese, state.data[q + 2].Japanese, state.data[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var a = state.data[state.questioncount].No;\n\n  if (a == c) {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: [],\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction startTest() {\n  return {\n    type: 'START'\n  };\n}\nfunction checkTest(choise) {\n  return {\n    type: 'CHECK',\n    choise: choise\n  };\n}\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsImFsdGVybmF0aXZlIiwiY29ycmVjdCIsIndyb25nIiwic3RhdHVzIiwicXVlc3Rpb25jb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhcnRSZWR1Y2UiLCJjaGVja1JlZHVjZSIsInJhbmRvbVNlbGVjdCIsImFycmF5IiwibnVtIiwibmV3QXJyYXkiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInEiLCJjb25zb2xlIiwibG9nIiwiYyIsImNob2lzZSIsImEiLCJkdGF0YSIsInN0YXJ0VGVzdCIsImNoZWNrVGVzdCIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBQyxPQURNO0FBRWRDLE9BQUssRUFBRSxDQUZPO0FBR2Q7QUFDQUMsTUFBSSxFQUFDLENBQUM7QUFBQ0MsV0FBTyxFQUFDLE9BQVQ7QUFBa0JDLFlBQVEsRUFBQyxLQUEzQjtBQUFrQ0MsTUFBRSxFQUFDO0FBQXJDLEdBQUQsRUFDQztBQUFDRixXQUFPLEVBQUMsUUFBVDtBQUFtQkMsWUFBUSxFQUFDLEtBQTVCO0FBQW1DQyxNQUFFLEVBQUM7QUFBdEMsR0FERCxFQUVDO0FBQUNGLFdBQU8sRUFBQyxXQUFUO0FBQXNCQyxZQUFRLEVBQUMsUUFBL0I7QUFBeUNDLE1BQUUsRUFBQztBQUE1QyxHQUZELEVBR0M7QUFB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QUFFO0FBREQsR0FBUDtBQUdEO0FBRU0sU0FBU3NCLFNBQVQsQ0FBbUJKLE1BQW5CLEVBQTJCO0FBQ2hDLFNBQU87QUFDTGxCLFFBQUksRUFBRSxPQUREO0FBRUxrQixVQUFNLEVBQUVBO0FBRkgsR0FBUDtBQUlEO0FBR00sU0FBU0ssU0FBVCxHQUFvQztBQUFBLE1BQWpCekIsS0FBaUIsdUVBQVRoQixPQUFTO0FBQ3pDLFNBQU8wQyx5REFBVyxDQUFDM0IsY0FBRCxFQUFpQkMsS0FBakIsRUFBd0IyQiw2REFBZSxDQUFDQyxtREFBRCxDQUF2QyxDQUFsQjtBQUNEIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IGluaXRpYWwgPSB7XG4gIG1lc3NhZ2U6J1NUQVJUJyxcbiAgY291bnQ6IDAsXG4gIC8vIOWNmOiqnuOCueODhuODvOODiFxuICBkYXRhOlt7RW5nbGlzaDonYXBwbGUnLCBKYXBhbmVzZTon44KK44KT44GUJywgTm86MX0sXG4gICAgICAgIHtFbmdsaXNoOidiYW5hbmEnLCBKYXBhbmVzZTon44OQ44OK44OKJywgTm86Mn0sXG4gICAgICAgIHtFbmdsaXNoOidjaG9jb2xhdGUnLCBKYXBhbmVzZTon44OB44On44Kz44Os44O844OIJywgTm86M30sXG4gICAgICAgIHtFbmdsaXNoOidyZWQnLCBKYXBhbmVzZTon6LWkJywgTm86NH0sXG4gICAgICAgIHtFbmdsaXNoOid3aGl0ZScsIEphcGFuZXNlOifnmb0nLCBObzo1fV0sXG4gIGNoZWNrOiBcIk5PTlwiLFxuICBxdWVzdGlvbjogXCJTQU1QTEVcIixcbiAgYW5zd2VyOiBcIuS+i+mhjFwiLFxuICBhbHRlcm5hdGl2ZTpbXSxcbiAgY29ycmVjdDowLFxuICB3cm9uZzowLFxuICBzdGF0dXM6IFwiZGVmYXVsdFwiLFxuICBxdWVzdGlvbmNvdW50OiAwLFxufVxuXG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOidJTkNSRU1FTlQnLFxuICAgICAgICBjb3VudDpzdGF0ZS5jb3VudCArIDFcbiAgICAgIH07XG4gICAgY2FzZSAnREVDUkVNRU5UJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6J0RFQ1JFTUVOVCcsXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCAtMVxuICAgICAgfTtcbiAgICBjYXNlICdSRVNFVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiAnUkVTRVQnLFxuICAgICAgICBjb3VudDppbml0aWFsLmNvdW50XG4gICAgICB9O1xuICAgIC8vIOWNmOiqnnJlZHVjZXJcbiAgICBjYXNlICdTVEFSVCc6XG4gICAgICByZXR1cm4gc3RhcnRSZWR1Y2Uoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSAnQ0hFQ0snOlxuICAgICAgcmV0dXJuIGNoZWNrUmVkdWNlKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyDpgbjmip7ogqLkvZzmiJDjga7jgZ/jgoHjga7lh6bnkIZcbmZ1bmN0aW9uIHJhbmRvbVNlbGVjdChhcnJheSwgbnVtKVxue1xuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgXG4gIHdoaWxlKG5ld0FycmF5Lmxlbmd0aCA8IG51bSAmJiBhcnJheS5sZW5ndGggPiAwKVxuICB7XG4gICAgLy8g6YWN5YiX44GL44KJ44Op44Oz44OA44Og44Gq6KaB57Sg44KS6YG444G2XG4gICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgLy8g6YG444KT44Gg6KaB57Sg44KS5Yil44Gu6YWN5YiX44Gr55m76Yyy44GZ44KLXG4gICAgbmV3QXJyYXkucHVzaChhcnJheVtyYW5kXSk7XG4gICAgLy8g44KC44Go44Gu6YWN5YiX44GL44KJ44Gv5YmK6Zmk44GZ44KLXG4gICAgYXJyYXkuc3BsaWNlKHJhbmQsIDEpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cblxuLy8g44OG44K544OI6ZaL5aeL44GucmVkdWNl5Yem55CGXG5mdW5jdGlvbiBzdGFydFJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBxID0gc3RhdGUucXVlc3Rpb25jb3VudCArIDE7XG4gIGNvbnNvbGUubG9nKHN0YXRlLmRhdGEpO1xuICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhW3FdLkphcGFuZXNlKTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOidTVEFSVCcsXG4gICAgY291bnQ6IDAsXG5cbiAgICBkYXRhOnN0YXRlLmRhdGEsXG4gICAgY2hlY2s6c3RhdGUuY2hlY2ssXG4gICAgcXVlc3Rpb246IHN0YXRlLmRhdGFbcV0uRW5nbGlzaCxcbiAgICBhbnN3ZXI6IHN0YXRlLmRhdGFbcV0uSmFwYW5lc2UsXG4gICAgYWx0ZXJuYXRpdmU6W3N0YXRlLmRhdGFbcSsxXS5KYXBhbmVzZSxcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYXRhW3ErMl0uSmFwYW5lc2UsXG4gICAgICAgICAgICAgICAgc3RhdGUuZGF0YVtxKzNdLkphcGFuZXNlXSxcbiAgICBjb3JyZWN0OnN0YXRlLmNvcnJlY3QsXG4gICAgd3Jvbmc6c3RhdGUud3JvbmcsXG4gICAgc3RhdHVzOiBcInN0YXJ0XCIsXG4gICAgcXVlc3Rpb25jb3VudDogcSxcbiAgfVxufVxuLy8g44OG44K544OI562U44GI5ZCI44KP44Gb44GucmVkdWNlXG5mdW5jdGlvbiBjaGVja1JlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBjID0gYWN0aW9uLmNob2lzZTtcbiAgbGV0IGEgPSBzdGF0ZS5kYXRhW3N0YXRlLnF1ZXN0aW9uY291bnRdLk5vO1xuICBpZiAoYT09Yyl7XG4gICAgY2hlY2sgPSBcImNvcnJlY3RcIjtcbiAgICBjb3JyZWN0ID0gc3RhdGUuY29ycmVjdCArIDE7XG4gIH1lbHNle1xuICAgIGNoZWNrID0gXCJ3cm9uZ1wiO1xuICAgIHdyb25nID0gc3RhdGUud3JvbmcgKyAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTonU1RBUlQnLFxuICAgIGNvdW50OiAwLFxuXG4gICAgZGF0YTpzdGF0ZS5kdGF0YSxcbiAgICBjaGVjazogY2hlY2ssXG4gICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uLFxuICAgIGFuc3dlcjogc3RhdGUuYW5zd2VyLFxuICAgIGFsdGVybmF0aXZlOltdLFxuICAgIGNvcnJlY3Q6Y29ycmVjdCxcbiAgICB3cm9uZzp3cm9uZyxcbiAgICBzdGF0dXM6IFwiY2hlY2tcIixcbiAgICBxdWVzdGlvbmNvdW50OiBzdGF0ZS5xdWVzdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUZXN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTVEFSVCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUZXN0KGNob2lzZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDSEVDSycsXG4gICAgY2hvaXNlOiBjaG9pc2VcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})