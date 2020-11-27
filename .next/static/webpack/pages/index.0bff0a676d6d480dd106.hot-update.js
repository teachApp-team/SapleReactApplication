webpackHotUpdate_N_E("pages/index",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: startTest, checkTest, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTest\", function() { return startTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTest\", function() { return checkTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  message: 'START',\n  count: 0,\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"SAMPLE\",\n  answer: \"例題\",\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n    // 単語reducer\n\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1;\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: this.state,\n    question: state.data[q].English,\n    answer: state.dtata[q].Japanese,\n    alternative: [state.dtata[q + 1].Japanese, state.dtata[q + 2].Japanese, state.dtata[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var a = state.data[state.questioncount].No;\n\n  if (a == c) {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: [],\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction startTest() {\n  return {\n    type: 'START'\n  };\n}\nfunction checkTest(choise) {\n  return {\n    type: 'CHECK',\n    choise: choise\n  };\n}\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsImFsdGVybmF0aXZlIiwiY29ycmVjdCIsIndyb25nIiwic3RhdHVzIiwicXVlc3Rpb25jb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhcnRSZWR1Y2UiLCJjaGVja1JlZHVjZSIsInJhbmRvbVNlbGVjdCIsImFycmF5IiwibnVtIiwibmV3QXJyYXkiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInEiLCJkdGF0YSIsImMiLCJjaG9pc2UiLCJhIiwic3RhcnRUZXN0IiwiY2hlY2tUZXN0IiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsU0FBTyxFQUFDLE9BRE07QUFFZEMsT0FBSyxFQUFFLENBRk87QUFHZDtBQUNBQyxNQUFJLEVBQUMsQ0FBQztBQUFDQyxXQUFPLEVBQUMsT0FBVDtBQUFrQkMsWUFBUSxFQUFDLEtBQTNCO0FBQWtDQyxNQUFFLEVBQUM7QUFBckMsR0FBRCxFQUNDO0FBQUNGLFdBQU8sRUFBQyxRQUFUO0FBQW1CQyxZQUFRLEVBQUMsS0FBNUI7QUFBbUNDLE1BQUUsRUFBQztBQUF0QyxHQURELEVBRUM7QUFBQ0YsV0FBTyxFQUFDLFdBQVQ7QUFBc0JDLFlBQVEsRUFBQyxRQUEvQjtBQUF5Q0MsTUFBRSxFQUFDO0FBQTVDLEdBRkQsRUFHQztBQUFDRixXQUFPLEVBQUMsS0FB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QUUsT0FERDtBQUVMaUIsVUFBTSxFQUFFQTtBQUZILEdBQVA7QUFJRDtBQUdNLFNBQVNJLFNBQVQsR0FBb0M7QUFBQSxNQUFqQnZCLEtBQWlCLHVFQUFUaEIsT0FBUztBQUN6QyxTQUFPd0MseURBQVcsQ0FBQ3pCLGNBQUQsRUFBaUJDLEtBQWpCLEVBQXdCeUIsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDRCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5jb25zdCBpbml0aWFsID0ge1xuICBtZXNzYWdlOidTVEFSVCcsXG4gIGNvdW50OiAwLFxuICAvLyDljZjoqp7jgrnjg4bjg7zjg4hcbiAgZGF0YTpbe0VuZ2xpc2g6J2FwcGxlJywgSmFwYW5lc2U6J+OCiuOCk+OBlCcsIE5vOjF9LFxuICAgICAgICB7RW5nbGlzaDonYmFuYW5hJywgSmFwYW5lc2U6J+ODkOODiuODiicsIE5vOjJ9LFxuICAgICAgICB7RW5nbGlzaDonY2hvY29sYXRlJywgSmFwYW5lc2U6J+ODgeODp+OCs+ODrOODvOODiCcsIE5vOjN9LFxuICAgICAgICB7RW5nbGlzaDoncmVkJywgSmFwYW5lc2U6J+i1pCcsIE5vOjR9LFxuICAgICAgICB7RW5nbGlzaDond2hpdGUnLCBKYXBhbmVzZTon55m9JywgTm86NX1dLFxuICBjaGVjazogXCJOT05cIixcbiAgcXVlc3Rpb246IFwiU0FNUExFXCIsXG4gIGFuc3dlcjogXCLkvovpoYxcIixcbiAgYWx0ZXJuYXRpdmU6W10sXG4gIGNvcnJlY3Q6MCxcbiAgd3Jvbmc6MCxcbiAgc3RhdHVzOiBcImRlZmF1bHRcIixcbiAgcXVlc3Rpb25jb3VudDogMCxcbn1cblxuZnVuY3Rpb24gY291bnRlclJlZHVjZXIgKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJTkNSRU1FTlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTonSU5DUkVNRU5UJyxcbiAgICAgICAgY291bnQ6c3RhdGUuY291bnQgKyAxXG4gICAgICB9O1xuICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOidERUNSRU1FTlQnLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgLTFcbiAgICAgIH07XG4gICAgY2FzZSAnUkVTRVQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogJ1JFU0VUJyxcbiAgICAgICAgY291bnQ6aW5pdGlhbC5jb3VudFxuICAgICAgfTtcbiAgICAvLyDljZjoqp5yZWR1Y2VyXG4gICAgY2FzZSAnU1RBUlQnOlxuICAgICAgcmV0dXJuIHN0YXJ0UmVkdWNlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgJ0NIRUNLJzpcbiAgICAgIHJldHVybiBjaGVja1JlZHVjZShzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8g6YG45oqe6IKi5L2c5oiQ44Gu44Gf44KB44Gu5Yem55CGXG5mdW5jdGlvbiByYW5kb21TZWxlY3QoYXJyYXksIG51bSlcbntcbiAgbGV0IG5ld0FycmF5ID0gW107XG4gIFxuICB3aGlsZShuZXdBcnJheS5sZW5ndGggPCBudW0gJiYgYXJyYXkubGVuZ3RoID4gMClcbiAge1xuICAgIC8vIOmFjeWIl+OBi+OCieODqeODs+ODgOODoOOBquimgee0oOOCkumBuOOBtlxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgIC8vIOmBuOOCk+OBoOimgee0oOOCkuWIpeOBrumFjeWIl+OBq+eZu+mMsuOBmeOCi1xuICAgIG5ld0FycmF5LnB1c2goYXJyYXlbcmFuZF0pO1xuICAgIC8vIOOCguOBqOOBrumFjeWIl+OBi+OCieOBr+WJiumZpOOBmeOCi1xuICAgIGFycmF5LnNwbGljZShyYW5kLCAxKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld0FycmF5O1xufVxuXG5cbi8vIOODhuOCueODiOmWi+Wni+OBrnJlZHVjZeWHpueQhlxuZnVuY3Rpb24gc3RhcnRSZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICBsZXQgcSA9IHN0YXRlLnF1ZXN0aW9uY291bnQgKyAxO1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6J1NUQVJUJyxcbiAgICBjb3VudDogMCxcblxuICAgIGRhdGE6c3RhdGUuZHRhdGEsXG4gICAgY2hlY2s6dGhpcy5zdGF0ZSxcbiAgICBxdWVzdGlvbjogc3RhdGUuZGF0YVtxXS5FbmdsaXNoLFxuICAgIGFuc3dlcjogc3RhdGUuZHRhdGFbcV0uSmFwYW5lc2UsXG4gICAgYWx0ZXJuYXRpdmU6W3N0YXRlLmR0YXRhW3ErMV0uSmFwYW5lc2UsXG4gICAgICAgICAgICAgICAgc3RhdGUuZHRhdGFbcSsyXS5KYXBhbmVzZSxcbiAgICAgICAgICAgICAgICBzdGF0ZS5kdGF0YVtxKzNdLkphcGFuZXNlXSxcbiAgICBjb3JyZWN0OnN0YXRlLmNvcnJlY3QsXG4gICAgd3Jvbmc6c3RhdGUud3JvbmcsXG4gICAgc3RhdHVzOiBcInN0YXJ0XCIsXG4gICAgcXVlc3Rpb25jb3VudDogcSxcbiAgfVxufVxuLy8g44OG44K544OI562U44GI5ZCI44KP44Gb44GucmVkdWNlXG5mdW5jdGlvbiBjaGVja1JlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBjID0gYWN0aW9uLmNob2lzZTtcbiAgbGV0IGEgPSBzdGF0ZS5kYXRhW3N0YXRlLnF1ZXN0aW9uY291bnRdLk5vO1xuICBpZiAoYT09Yyl7XG4gICAgY2hlY2sgPSBcImNvcnJlY3RcIjtcbiAgICBjb3JyZWN0ID0gc3RhdGUuY29ycmVjdCArIDE7XG4gIH1lbHNle1xuICAgIGNoZWNrID0gXCJ3cm9uZ1wiO1xuICAgIHdyb25nID0gc3RhdGUud3JvbmcgKyAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTonU1RBUlQnLFxuICAgIGNvdW50OiAwLFxuXG4gICAgZGF0YTpzdGF0ZS5kdGF0YSxcbiAgICBjaGVjazogY2hlY2ssXG4gICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uLFxuICAgIGFuc3dlcjogc3RhdGUuYW5zd2VyLFxuICAgIGFsdGVybmF0aXZlOltdLFxuICAgIGNvcnJlY3Q6Y29ycmVjdCxcbiAgICB3cm9uZzp3cm9uZyxcbiAgICBzdGF0dXM6IFwiY2hlY2tcIixcbiAgICBxdWVzdGlvbmNvdW50OiBzdGF0ZS5xdWVzdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUZXN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTVEFSVCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUZXN0KGNob2lzZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDSEVDSycsXG4gICAgY2hvaXNlOiBjaG9pc2VcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})