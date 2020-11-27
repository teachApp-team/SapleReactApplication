webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  message: 'START',\n  count: 0,\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"A\",\n  answer: nill,\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n    // 単語reducer\n\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1;\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: nill,\n    question: state.data[q].English,\n    answer: state.dtata[q].Japanese,\n    alternative: [state.dtata[q + 1].Japanese, state.dtata[q + 2].Japanese, state.dtata[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var a = state.data[state.questioncount].No;\n\n  if (a == c) {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: [],\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsIm5pbGwiLCJhbHRlcm5hdGl2ZSIsImNvcnJlY3QiLCJ3cm9uZyIsInN0YXR1cyIsInF1ZXN0aW9uY291bnQiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInN0YXJ0UmVkdWNlIiwiY2hlY2tSZWR1Y2UiLCJyYW5kb21TZWxlY3QiLCJhcnJheSIsIm51bSIsIm5ld0FycmF5IiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJxIiwiZHRhdGEiLCJjIiwiY2hvaXNlIiwiYSIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsU0FBTyxFQUFDLE9BRE07QUFFZEMsT0FBSyxFQUFFLENBRk87QUFHZDtBQUNBQyxNQUFJLEVBQUMsQ0FBQztBQUFDQyxXQUFPLEVBQUMsT0FBVDtBQUFrQkMsWUFBUSxFQUFDLEtBQTNCO0FBQWtDQyxNQUFFLEVBQUM7QUFBckMsR0FBRCxFQUNDO0FBQUNGLFdBQU8sRUFBQyxRQUFUO0FBQW1CQyxZQUFRLEVBQUMsS0FBNUI7QUFBbUNDLE1BQUUsRUFBQztBQUF0QyxHQURELEVBRUM7QUFBQ0YsV0FBTyxFQUFDLFdBQVQ7QUFBc0JDLFlBQVEsRUFBQyxRQUEvQjtBQUF5Q0MsTUFBRSxFQUFDO0FBQTVDLEdBRkQsRUFHQztBQUFDRixXQUFPLEVBQUMsS0FBVDtBQUFnQkMsWUFBUSxFQUFDLEdBQXpCO0FB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LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5jb25zdCBpbml0aWFsID0ge1xuICBtZXNzYWdlOidTVEFSVCcsXG4gIGNvdW50OiAwLFxuICAvLyDljZjoqp7jgrnjg4bjg7zjg4hcbiAgZGF0YTpbe0VuZ2xpc2g6J2FwcGxlJywgSmFwYW5lc2U6J+OCiuOCk+OBlCcsIE5vOjF9LFxuICAgICAgICB7RW5nbGlzaDonYmFuYW5hJywgSmFwYW5lc2U6J+ODkOODiuODiicsIE5vOjJ9LFxuICAgICAgICB7RW5nbGlzaDonY2hvY29sYXRlJywgSmFwYW5lc2U6J+ODgeODp+OCs+ODrOODvOODiCcsIE5vOjN9LFxuICAgICAgICB7RW5nbGlzaDoncmVkJywgSmFwYW5lc2U6J+i1pCcsIE5vOjR9LFxuICAgICAgICB7RW5nbGlzaDond2hpdGUnLCBKYXBhbmVzZTon55m9JywgTm86NX1dLFxuICBjaGVjazogXCJOT05cIixcbiAgcXVlc3Rpb246IFwiQVwiLFxuICBhbnN3ZXI6IG5pbGwsXG4gIGFsdGVybmF0aXZlOltdLFxuICBjb3JyZWN0OjAsXG4gIHdyb25nOjAsXG4gIHN0YXR1czogXCJkZWZhdWx0XCIsXG4gIHF1ZXN0aW9uY291bnQ6IDAsXG59XG5cbmZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSU5DUkVNRU5UJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6J0lOQ1JFTUVOVCcsXG4gICAgICAgIGNvdW50OnN0YXRlLmNvdW50ICsgMVxuICAgICAgfTtcbiAgICBjYXNlICdERUNSRU1FTlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTonREVDUkVNRU5UJyxcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0xXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFU0VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6ICdSRVNFVCcsXG4gICAgICAgIGNvdW50OmluaXRpYWwuY291bnRcbiAgICAgIH07XG4gICAgLy8g5Y2Y6KqecmVkdWNlclxuICAgIGNhc2UgJ1NUQVJUJzpcbiAgICAgIHJldHVybiBzdGFydFJlZHVjZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlICdDSEVDSyc6XG4gICAgICByZXR1cm4gY2hlY2tSZWR1Y2Uoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIOmBuOaKnuiCouS9nOaIkOOBruOBn+OCgeOBruWHpueQhlxuZnVuY3Rpb24gcmFuZG9tU2VsZWN0KGFycmF5LCBudW0pXG57XG4gIGxldCBuZXdBcnJheSA9IFtdO1xuICBcbiAgd2hpbGUobmV3QXJyYXkubGVuZ3RoIDwgbnVtICYmIGFycmF5Lmxlbmd0aCA+IDApXG4gIHtcbiAgICAvLyDphY3liJfjgYvjgonjg6njg7Pjg4Djg6DjgaropoHntKDjgpLpgbjjgbZcbiAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICAvLyDpgbjjgpPjgaDopoHntKDjgpLliKXjga7phY3liJfjgavnmbvpjLLjgZnjgotcbiAgICBuZXdBcnJheS5wdXNoKGFycmF5W3JhbmRdKTtcbiAgICAvLyDjgoLjgajjga7phY3liJfjgYvjgonjga/liYrpmaTjgZnjgotcbiAgICBhcnJheS5zcGxpY2UocmFuZCwgMSk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuXG4vLyDjg4bjgrnjg4jplovlp4vjga5yZWR1Y2Xlh6bnkIZcbmZ1bmN0aW9uIHN0YXJ0UmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAgbGV0IHEgPSBzdGF0ZS5xdWVzdGlvbmNvdW50ICsgMTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOidTVEFSVCcsXG4gICAgY291bnQ6IDAsXG5cbiAgICBkYXRhOnN0YXRlLmR0YXRhLFxuICAgIGNoZWNrOm5pbGwsXG4gICAgcXVlc3Rpb246IHN0YXRlLmRhdGFbcV0uRW5nbGlzaCxcbiAgICBhbnN3ZXI6IHN0YXRlLmR0YXRhW3FdLkphcGFuZXNlLFxuICAgIGFsdGVybmF0aXZlOltzdGF0ZS5kdGF0YVtxKzFdLkphcGFuZXNlLFxuICAgICAgICAgICAgICAgIHN0YXRlLmR0YXRhW3ErMl0uSmFwYW5lc2UsXG4gICAgICAgICAgICAgICAgc3RhdGUuZHRhdGFbcSszXS5KYXBhbmVzZV0sXG4gICAgY29ycmVjdDpzdGF0ZS5jb3JyZWN0LFxuICAgIHdyb25nOnN0YXRlLndyb25nLFxuICAgIHN0YXR1czogXCJzdGFydFwiLFxuICAgIHF1ZXN0aW9uY291bnQ6IHEsXG4gIH1cbn1cbi8vIOODhuOCueODiOetlOOBiOWQiOOCj+OBm+OBrnJlZHVjZVxuZnVuY3Rpb24gY2hlY2tSZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICBsZXQgYyA9IGFjdGlvbi5jaG9pc2U7XG4gIGxldCBhID0gc3RhdGUuZGF0YVtzdGF0ZS5xdWVzdGlvbmNvdW50XS5ObztcbiAgaWYgKGE9PWMpe1xuICAgIGNoZWNrID0gXCJjb3JyZWN0XCI7XG4gICAgY29ycmVjdCA9IHN0YXRlLmNvcnJlY3QgKyAxO1xuICB9ZWxzZXtcbiAgICBjaGVjayA9IFwid3JvbmdcIjtcbiAgICB3cm9uZyA9IHN0YXRlLndyb25nICsgMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6J1NUQVJUJyxcbiAgICBjb3VudDogMCxcblxuICAgIGRhdGE6c3RhdGUuZHRhdGEsXG4gICAgY2hlY2s6IGNoZWNrLFxuICAgIHF1ZXN0aW9uOiBzdGF0ZS5xdWVzdGlvbixcbiAgICBhbnN3ZXI6IHN0YXRlLmFuc3dlcixcbiAgICBhbHRlcm5hdGl2ZTpbXSxcbiAgICBjb3JyZWN0OmNvcnJlY3QsXG4gICAgd3Jvbmc6d3JvbmcsXG4gICAgc3RhdHVzOiBcImNoZWNrXCIsXG4gICAgcXVlc3Rpb25jb3VudDogc3RhdGUucXVlc3Rpb24sXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})