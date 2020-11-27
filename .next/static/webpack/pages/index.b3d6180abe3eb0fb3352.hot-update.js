webpackHotUpdate_N_E("pages/index",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: startTest, checkTest, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTest\", function() { return startTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTest\", function() { return checkTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  message: 'START',\n  count: 0,\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }, {\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"SAMPLE\",\n  answer: \"例題\",\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n    // 単語reducer\n\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1;\n  console.log(state.data); // console.log(state.data[q].Japanese);\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.data,\n    check: state.check,\n    question: state.data[q].English,\n    answer: state.data[q].Japanese,\n    alternative: [state.data[q + 1].Japanese, state.data[q + 2].Japanese, state.data[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var a = state.data[state.questioncount].No;\n\n  if (a == c) {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: [],\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction startTest() {\n  return {\n    type: 'START'\n  };\n}\nfunction checkTest(choise) {\n  return {\n    type: 'CHECK',\n    choise: choise\n  };\n}\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsImFsdGVybmF0aXZlIiwiY29ycmVjdCIsIndyb25nIiwic3RhdHVzIiwicXVlc3Rpb25jb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhcnRSZWR1Y2UiLCJjaGVja1JlZHVjZSIsInJhbmRvbVNlbGVjdCIsImFycmF5IiwibnVtIiwibmV3QXJyYXkiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInEiLCJjb25zb2xlIiwibG9nIiwiYyIsImNob2lzZSIsImEiLCJkdGF0YSIsInN0YXJ0VGVzdCIsImNoZWNrVGVzdCIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBQyxPQURNO0FBRWRDLE9BQUssRUFBRSxDQUZPO0FBR2Q7QUFDQUMsTUFBSSxFQUFDLENBQUM7QUFBQ0MsV0FBTyxFQUFDLE9BQVQ7QUFBa0JDLFlBQVEsRUFBQyxLQUEzQjtBQUFrQ0MsTUFBRSxFQUFDO0FBQXJDLEdBQUQsRUFDQztBQUFDRixXQUFPLEVBQUMsUUFBVDtBQUFtQkMsWUFBUSxFQUFDLEtBQTVCO0FBQW1DQyxNQUFFLEVBQUM7QUFBdEMsR0FERCxFQUVDO0FBQUNGLFdBQU8sRUFBQyxXQUFUO0FBQXNCQyxZQUFRLEVBQUMsUUFBL0I7QUFBeUNDLE1BQUUsRUFBQztBQUE1QyxHQUZELEVBR0M7QUFB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SyxHQUFHSSxLQUFLLENBQUNKLEtBQU4sR0FBYyxDQUF0QjtBQUNEOztBQUNELFNBQU87QUFDTFgsV0FBTyxFQUFDLE9BREg7QUFFTEMsU0FBSyxFQUFFLENBRkY7QUFJTEMsUUFBSSxFQUFDYSxLQUFLLENBQUNzQixLQUpOO0FBS0wvQixTQUFLLEVBQUVBLEtBTEY7QUFNTEMsWUFBUSxFQUFFUSxLQUFLLENBQUNSLFFBTlg7QUFPTEMsVUFBTSxFQUFFTyxLQUFLLENBQUNQLE1BUFQ7QUFRTEMsZUFBVyxFQUFDLEVBUlA7QUFTTEMsV0FBTyxFQUFDQSxPQVRIO0FBVUxDLFNBQUssRUFBQ0EsS0FWRDtBQVdMQyxVQUFNLEVBQUUsT0FYSDtBQVlMQyxpQkFBYSxFQUFFRSxLQUFLLENBQUNSO0FBWmhCLEdBQVA7QUFjRDs7QUFFTSxTQUFTK0IsU0FBVCxHQUFxQjtBQUMxQixTQUFPO0FBQ0xyQixRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0Q7QUFFTSxTQUFTc0IsU0FBVCxDQUFtQkosTUFBbkIsRUFBMkI7QUFDaEMsU0FBTztBQUNMbEIsUUFBSSxFQUFFLE9BREQ7QUFFTGtCLFVBQU0sRUFBRUE7QUFGSCxHQUFQO0FBSUQ7QUFHTSxTQUFTSyxTQUFULEdBQW9DO0FBQUEsTUFBakJ6QixLQUFpQix1RUFBVGhCLE9BQVM7QUFDekMsU0FBTzBDLHlEQUFXLENBQUMzQixjQUFELEVBQWlCQyxLQUFqQixFQUF3QjJCLDZEQUFlLENBQUNDLG1EQUFELENBQXZDLENBQWxCO0FBQ0QiLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgaW5pdGlhbCA9IHtcbiAgbWVzc2FnZTonU1RBUlQnLFxuICBjb3VudDogMCxcbiAgLy8g5Y2Y6Kqe44K544OG44O844OIXG4gIGRhdGE6W3tFbmdsaXNoOidhcHBsZScsIEphcGFuZXNlOifjgorjgpPjgZQnLCBObzoxfSxcbiAgICAgICAge0VuZ2xpc2g6J2JhbmFuYScsIEphcGFuZXNlOifjg5Djg4rjg4onLCBObzoyfSxcbiAgICAgICAge0VuZ2xpc2g6J2Nob2NvbGF0ZScsIEphcGFuZXNlOifjg4Hjg6fjgrPjg6zjg7zjg4gnLCBObzozfSxcbiAgICAgICAge0VuZ2xpc2g6J3JlZCcsIEphcGFuZXNlOifotaQnLCBObzo0fSxcbiAgICAgICAge0VuZ2xpc2g6J3doaXRlJywgSmFwYW5lc2U6J+eZvScsIE5vOjV9LFxuICAgICAgICB7RW5nbGlzaDonYXBwbGUnLCBKYXBhbmVzZTon44KK44KT44GUJywgTm86MX0sXG4gICAgICAgIHtFbmdsaXNoOidiYW5hbmEnLCBKYXBhbmVzZTon44OQ44OK44OKJywgTm86Mn0sXG4gICAgICAgIHtFbmdsaXNoOidjaG9jb2xhdGUnLCBKYXBhbmVzZTon44OB44On44Kz44Os44O844OIJywgTm86M30sXG4gICAgICAgIHtFbmdsaXNoOidyZWQnLCBKYXBhbmVzZTon6LWkJywgTm86NH0sXG4gICAgICAgIHtFbmdsaXNoOid3aGl0ZScsIEphcGFuZXNlOifnmb0nLCBObzo1fV0sXG4gIGNoZWNrOiBcIk5PTlwiLFxuICBxdWVzdGlvbjogXCJTQU1QTEVcIixcbiAgYW5zd2VyOiBcIuS+i+mhjFwiLFxuICBhbHRlcm5hdGl2ZTpbXSxcbiAgY29ycmVjdDowLFxuICB3cm9uZzowLFxuICBzdGF0dXM6IFwiZGVmYXVsdFwiLFxuICBxdWVzdGlvbmNvdW50OiAwLFxufVxuXG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOidJTkNSRU1FTlQnLFxuICAgICAgICBjb3VudDpzdGF0ZS5jb3VudCArIDFcbiAgICAgIH07XG4gICAgY2FzZSAnREVDUkVNRU5UJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6J0RFQ1JFTUVOVCcsXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCAtMVxuICAgICAgfTtcbiAgICBjYXNlICdSRVNFVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiAnUkVTRVQnLFxuICAgICAgICBjb3VudDppbml0aWFsLmNvdW50XG4gICAgICB9O1xuICAgIC8vIOWNmOiqnnJlZHVjZXJcbiAgICBjYXNlICdTVEFSVCc6XG4gICAgICByZXR1cm4gc3RhcnRSZWR1Y2Uoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSAnQ0hFQ0snOlxuICAgICAgcmV0dXJuIGNoZWNrUmVkdWNlKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyDpgbjmip7ogqLkvZzmiJDjga7jgZ/jgoHjga7lh6bnkIZcbmZ1bmN0aW9uIHJhbmRvbVNlbGVjdChhcnJheSwgbnVtKVxue1xuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgXG4gIHdoaWxlKG5ld0FycmF5Lmxlbmd0aCA8IG51bSAmJiBhcnJheS5sZW5ndGggPiAwKVxuICB7XG4gICAgLy8g6YWN5YiX44GL44KJ44Op44Oz44OA44Og44Gq6KaB57Sg44KS6YG444G2XG4gICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgLy8g6YG444KT44Gg6KaB57Sg44KS5Yil44Gu6YWN5YiX44Gr55m76Yyy44GZ44KLXG4gICAgbmV3QXJyYXkucHVzaChhcnJheVtyYW5kXSk7XG4gICAgLy8g44KC44Go44Gu6YWN5YiX44GL44KJ44Gv5YmK6Zmk44GZ44KLXG4gICAgYXJyYXkuc3BsaWNlKHJhbmQsIDEpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cblxuLy8g44OG44K544OI6ZaL5aeL44GucmVkdWNl5Yem55CGXG5mdW5jdGlvbiBzdGFydFJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBxID0gc3RhdGUucXVlc3Rpb25jb3VudCArIDE7XG4gIGNvbnNvbGUubG9nKHN0YXRlLmRhdGEpO1xuICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhW3FdLkphcGFuZXNlKTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOidTVEFSVCcsXG4gICAgY291bnQ6IDAsXG5cbiAgICBkYXRhOnN0YXRlLmRhdGEsXG4gICAgY2hlY2s6c3RhdGUuY2hlY2ssXG4gICAgcXVlc3Rpb246IHN0YXRlLmRhdGFbcV0uRW5nbGlzaCxcbiAgICBhbnN3ZXI6IHN0YXRlLmRhdGFbcV0uSmFwYW5lc2UsXG4gICAgYWx0ZXJuYXRpdmU6W3N0YXRlLmRhdGFbcSsxXS5KYXBhbmVzZSxcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYXRhW3ErMl0uSmFwYW5lc2UsXG4gICAgICAgICAgICAgICAgc3RhdGUuZGF0YVtxKzNdLkphcGFuZXNlXSxcbiAgICBjb3JyZWN0OnN0YXRlLmNvcnJlY3QsXG4gICAgd3Jvbmc6c3RhdGUud3JvbmcsXG4gICAgc3RhdHVzOiBcInN0YXJ0XCIsXG4gICAgcXVlc3Rpb25jb3VudDogcSxcbiAgfVxufVxuLy8g44OG44K544OI562U44GI5ZCI44KP44Gb44GucmVkdWNlXG5mdW5jdGlvbiBjaGVja1JlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBjID0gYWN0aW9uLmNob2lzZTtcbiAgbGV0IGEgPSBzdGF0ZS5kYXRhW3N0YXRlLnF1ZXN0aW9uY291bnRdLk5vO1xuICBpZiAoYT09Yyl7XG4gICAgY2hlY2sgPSBcImNvcnJlY3RcIjtcbiAgICBjb3JyZWN0ID0gc3RhdGUuY29ycmVjdCArIDE7XG4gIH1lbHNle1xuICAgIGNoZWNrID0gXCJ3cm9uZ1wiO1xuICAgIHdyb25nID0gc3RhdGUud3JvbmcgKyAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTonU1RBUlQnLFxuICAgIGNvdW50OiAwLFxuXG4gICAgZGF0YTpzdGF0ZS5kdGF0YSxcbiAgICBjaGVjazogY2hlY2ssXG4gICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uLFxuICAgIGFuc3dlcjogc3RhdGUuYW5zd2VyLFxuICAgIGFsdGVybmF0aXZlOltdLFxuICAgIGNvcnJlY3Q6Y29ycmVjdCxcbiAgICB3cm9uZzp3cm9uZyxcbiAgICBzdGF0dXM6IFwiY2hlY2tcIixcbiAgICBxdWVzdGlvbmNvdW50OiBzdGF0ZS5xdWVzdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUZXN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTVEFSVCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUZXN0KGNob2lzZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDSEVDSycsXG4gICAgY2hvaXNlOiBjaG9pc2VcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})