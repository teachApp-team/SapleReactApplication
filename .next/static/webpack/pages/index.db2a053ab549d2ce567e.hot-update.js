webpackHotUpdate_N_E("pages/index",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: startTest, checkTest, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTest\", function() { return startTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTest\", function() { return checkTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  message: 'START',\n  count: 0,\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"SAMPLE\",\n  answer: \"例題\",\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n    // 単語reducer\n\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1; // console.log(state.data[q].Japanese);\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: state.check,\n    question: state.data[q].English,\n    answer: state.data[q].Japanese,\n    alternative: [state.data[q + 1].Japanese, state.data[q + 2].Japanese, state.data[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var a = state.data[state.questioncount].No;\n\n  if (a == c) {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: [],\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction startTest() {\n  return {\n    type: 'START'\n  };\n}\nfunction checkTest(choise) {\n  return {\n    type: 'CHECK',\n    choise: choise\n  };\n}\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsImFsdGVybmF0aXZlIiwiY29ycmVjdCIsIndyb25nIiwic3RhdHVzIiwicXVlc3Rpb25jb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhcnRSZWR1Y2UiLCJjaGVja1JlZHVjZSIsInJhbmRvbVNlbGVjdCIsImFycmF5IiwibnVtIiwibmV3QXJyYXkiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInEiLCJkdGF0YSIsImMiLCJjaG9pc2UiLCJhIiwic3RhcnRUZXN0IiwiY2hlY2tUZXN0IiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsU0FBTyxFQUFDLE9BRE07QUFFZEMsT0FBSyxFQUFFLENBRk87QUFHZDtBQUNBQyxNQUFJLEVBQUMsQ0FBQztBQUFDQyxXQUFPLEVBQUMsT0FBVDtBQUFrQkMsWUFBUSxFQUFDLEtBQTNCO0FBQWtDQyxNQUFFLEVBQUM7QUFBckMsR0FBRCxFQUNDO0FBQUNGLFdBQU8sRUFBQyxRQUFUO0FBQW1CQyxZQUFRLEVBQUMsS0FBNUI7QUFBbUNDLE1BQUUsRUFBQztBQUF0QyxHQURELEVBRUM7QUFBQ0YsV0FBTyxFQUFDLFdBQVQ7QUFBc0JDLFlBQVEsRUFBQyxRQUEvQjtBQUF5Q0MsTUFBRSxFQUFDO0FBQTVDLEdBRkQsRUFHQztBQUFDRixXQUFPLEVBQUMsS0FB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U0FBTztBQUNMakIsUUFBSSxFQUFFLE9BREQ7QUFFTGlCLFVBQU0sRUFBRUE7QUFGSCxHQUFQO0FBSUQ7QUFHTSxTQUFTSSxTQUFULEdBQW9DO0FBQUEsTUFBakJ2QixLQUFpQix1RUFBVGhCLE9BQVM7QUFDekMsU0FBT3dDLHlEQUFXLENBQUN6QixjQUFELEVBQWlCQyxLQUFqQixFQUF3QnlCLDZEQUFlLENBQUNDLG1EQUFELENBQXZDLENBQWxCO0FBQ0QiLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgaW5pdGlhbCA9IHtcbiAgbWVzc2FnZTonU1RBUlQnLFxuICBjb3VudDogMCxcbiAgLy8g5Y2Y6Kqe44K544OG44O844OIXG4gIGRhdGE6W3tFbmdsaXNoOidhcHBsZScsIEphcGFuZXNlOifjgorjgpPjgZQnLCBObzoxfSxcbiAgICAgICAge0VuZ2xpc2g6J2JhbmFuYScsIEphcGFuZXNlOifjg5Djg4rjg4onLCBObzoyfSxcbiAgICAgICAge0VuZ2xpc2g6J2Nob2NvbGF0ZScsIEphcGFuZXNlOifjg4Hjg6fjgrPjg6zjg7zjg4gnLCBObzozfSxcbiAgICAgICAge0VuZ2xpc2g6J3JlZCcsIEphcGFuZXNlOifotaQnLCBObzo0fSxcbiAgICAgICAge0VuZ2xpc2g6J3doaXRlJywgSmFwYW5lc2U6J+eZvScsIE5vOjV9XSxcbiAgY2hlY2s6IFwiTk9OXCIsXG4gIHF1ZXN0aW9uOiBcIlNBTVBMRVwiLFxuICBhbnN3ZXI6IFwi5L6L6aGMXCIsXG4gIGFsdGVybmF0aXZlOltdLFxuICBjb3JyZWN0OjAsXG4gIHdyb25nOjAsXG4gIHN0YXR1czogXCJkZWZhdWx0XCIsXG4gIHF1ZXN0aW9uY291bnQ6IDAsXG59XG5cbmZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSU5DUkVNRU5UJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6J0lOQ1JFTUVOVCcsXG4gICAgICAgIGNvdW50OnN0YXRlLmNvdW50ICsgMVxuICAgICAgfTtcbiAgICBjYXNlICdERUNSRU1FTlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTonREVDUkVNRU5UJyxcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0xXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFU0VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6ICdSRVNFVCcsXG4gICAgICAgIGNvdW50OmluaXRpYWwuY291bnRcbiAgICAgIH07XG4gICAgLy8g5Y2Y6KqecmVkdWNlclxuICAgIGNhc2UgJ1NUQVJUJzpcbiAgICAgIHJldHVybiBzdGFydFJlZHVjZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlICdDSEVDSyc6XG4gICAgICByZXR1cm4gY2hlY2tSZWR1Y2Uoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIOmBuOaKnuiCouS9nOaIkOOBruOBn+OCgeOBruWHpueQhlxuZnVuY3Rpb24gcmFuZG9tU2VsZWN0KGFycmF5LCBudW0pXG57XG4gIGxldCBuZXdBcnJheSA9IFtdO1xuICBcbiAgd2hpbGUobmV3QXJyYXkubGVuZ3RoIDwgbnVtICYmIGFycmF5Lmxlbmd0aCA+IDApXG4gIHtcbiAgICAvLyDphY3liJfjgYvjgonjg6njg7Pjg4Djg6DjgaropoHntKDjgpLpgbjjgbZcbiAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICAvLyDpgbjjgpPjgaDopoHntKDjgpLliKXjga7phY3liJfjgavnmbvpjLLjgZnjgotcbiAgICBuZXdBcnJheS5wdXNoKGFycmF5W3JhbmRdKTtcbiAgICAvLyDjgoLjgajjga7phY3liJfjgYvjgonjga/liYrpmaTjgZnjgotcbiAgICBhcnJheS5zcGxpY2UocmFuZCwgMSk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuXG4vLyDjg4bjgrnjg4jplovlp4vjga5yZWR1Y2Xlh6bnkIZcbmZ1bmN0aW9uIHN0YXJ0UmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAgbGV0IHEgPSBzdGF0ZS5xdWVzdGlvbmNvdW50ICsgMTtcblxuICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhW3FdLkphcGFuZXNlKTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOidTVEFSVCcsXG4gICAgY291bnQ6IDAsXG5cbiAgICBkYXRhOnN0YXRlLmR0YXRhLFxuICAgIGNoZWNrOnN0YXRlLmNoZWNrLFxuICAgIHF1ZXN0aW9uOiBzdGF0ZS5kYXRhW3FdLkVuZ2xpc2gsXG4gICAgYW5zd2VyOiBzdGF0ZS5kYXRhW3FdLkphcGFuZXNlLFxuICAgIGFsdGVybmF0aXZlOltzdGF0ZS5kYXRhW3ErMV0uSmFwYW5lc2UsXG4gICAgICAgICAgICAgICAgc3RhdGUuZGF0YVtxKzJdLkphcGFuZXNlLFxuICAgICAgICAgICAgICAgIHN0YXRlLmRhdGFbcSszXS5KYXBhbmVzZV0sXG4gICAgY29ycmVjdDpzdGF0ZS5jb3JyZWN0LFxuICAgIHdyb25nOnN0YXRlLndyb25nLFxuICAgIHN0YXR1czogXCJzdGFydFwiLFxuICAgIHF1ZXN0aW9uY291bnQ6IHEsXG4gIH1cbn1cbi8vIOODhuOCueODiOetlOOBiOWQiOOCj+OBm+OBrnJlZHVjZVxuZnVuY3Rpb24gY2hlY2tSZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICBsZXQgYyA9IGFjdGlvbi5jaG9pc2U7XG4gIGxldCBhID0gc3RhdGUuZGF0YVtzdGF0ZS5xdWVzdGlvbmNvdW50XS5ObztcbiAgaWYgKGE9PWMpe1xuICAgIGNoZWNrID0gXCJjb3JyZWN0XCI7XG4gICAgY29ycmVjdCA9IHN0YXRlLmNvcnJlY3QgKyAxO1xuICB9ZWxzZXtcbiAgICBjaGVjayA9IFwid3JvbmdcIjtcbiAgICB3cm9uZyA9IHN0YXRlLndyb25nICsgMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6J1NUQVJUJyxcbiAgICBjb3VudDogMCxcblxuICAgIGRhdGE6c3RhdGUuZHRhdGEsXG4gICAgY2hlY2s6IGNoZWNrLFxuICAgIHF1ZXN0aW9uOiBzdGF0ZS5xdWVzdGlvbixcbiAgICBhbnN3ZXI6IHN0YXRlLmFuc3dlcixcbiAgICBhbHRlcm5hdGl2ZTpbXSxcbiAgICBjb3JyZWN0OmNvcnJlY3QsXG4gICAgd3Jvbmc6d3JvbmcsXG4gICAgc3RhdHVzOiBcImNoZWNrXCIsXG4gICAgcXVlc3Rpb25jb3VudDogc3RhdGUucXVlc3Rpb24sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VGVzdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnU1RBUlQnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVGVzdChjaG9pc2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0hFQ0snLFxuICAgIGNob2lzZTogY2hvaXNlXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})