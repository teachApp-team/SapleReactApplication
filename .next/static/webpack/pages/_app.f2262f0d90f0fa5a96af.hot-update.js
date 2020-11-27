webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: startTest, checkTest, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTest\", function() { return startTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTest\", function() { return checkTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  message: 'START',\n  count: 0,\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"SAMPLE\",\n  answer: \"例題\",\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: state.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n    // 単語reducer\n\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1;\n  console.log(state.dtata[q].Japanese);\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: state.check,\n    question: state.data[q].English,\n    answer: state.data[q].Japanese,\n    alternative: [state.data[q + 1].Japanese, state.data[q + 2].Japanese, state.data[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var a = state.data[state.questioncount].No;\n\n  if (a == c) {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.dtata,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: [],\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction startTest() {\n  return {\n    type: 'START'\n  };\n}\nfunction checkTest(choise) {\n  return {\n    type: 'CHECK',\n    choise: choise\n  };\n}\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsImFsdGVybmF0aXZlIiwiY29ycmVjdCIsIndyb25nIiwic3RhdHVzIiwicXVlc3Rpb25jb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhcnRSZWR1Y2UiLCJjaGVja1JlZHVjZSIsInJhbmRvbVNlbGVjdCIsImFycmF5IiwibnVtIiwibmV3QXJyYXkiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInEiLCJjb25zb2xlIiwibG9nIiwiZHRhdGEiLCJjIiwiY2hvaXNlIiwiYSIsInN0YXJ0VGVzdCIsImNoZWNrVGVzdCIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBQyxPQURNO0FBRWRDLE9BQUssRUFBRSxDQUZPO0FBR2Q7QUFDQUMsTUFBSSxFQUFDLENBQUM7QUFBQ0MsV0FBTyxFQUFDLE9BQVQ7QUFBa0JDLFlBQVEsRUFBQyxLQUEzQjtBQUFrQ0MsTUFBRSxFQUFDO0FBQXJDLEdBQUQsRUFDQztBQUFDRixXQUFPLEVBQUMsUUFBVDtBQUFtQkMsWUFBUSxFQUFDLEtBQTVCO0FBQW1DQyxNQUFFLEVBQUM7QUFBdEMsR0FERCxFQUVDO0FBQUNGLFdBQU8sRUFBQyxXQUFUO0FBQXNCQyxZQUFRLEVBQUMsUUFBL0I7QUFBeUNDLE1BQUUsRUFBQztBQUE1QyxHQUZELEVBR0M7QUFB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QUFDTHJCLFFBQUksRUFBRTtBQURELEdBQVA7QUFHRDtBQUVNLFNBQVNzQixTQUFULENBQW1CSCxNQUFuQixFQUEyQjtBQUNoQyxTQUFPO0FBQ0xuQixRQUFJLEVBQUUsT0FERDtBQUVMbUIsVUFBTSxFQUFFQTtBQUZILEdBQVA7QUFJRDtBQUdNLFNBQVNJLFNBQVQsR0FBb0M7QUFBQSxNQUFqQnpCLEtBQWlCLHVFQUFUaEIsT0FBUztBQUN6QyxTQUFPMEMseURBQVcsQ0FBQzNCLGNBQUQsRUFBaUJDLEtBQWpCLEVBQXdCMkIsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDRCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5jb25zdCBpbml0aWFsID0ge1xuICBtZXNzYWdlOidTVEFSVCcsXG4gIGNvdW50OiAwLFxuICAvLyDljZjoqp7jgrnjg4bjg7zjg4hcbiAgZGF0YTpbe0VuZ2xpc2g6J2FwcGxlJywgSmFwYW5lc2U6J+OCiuOCk+OBlCcsIE5vOjF9LFxuICAgICAgICB7RW5nbGlzaDonYmFuYW5hJywgSmFwYW5lc2U6J+ODkOODiuODiicsIE5vOjJ9LFxuICAgICAgICB7RW5nbGlzaDonY2hvY29sYXRlJywgSmFwYW5lc2U6J+ODgeODp+OCs+ODrOODvOODiCcsIE5vOjN9LFxuICAgICAgICB7RW5nbGlzaDoncmVkJywgSmFwYW5lc2U6J+i1pCcsIE5vOjR9LFxuICAgICAgICB7RW5nbGlzaDond2hpdGUnLCBKYXBhbmVzZTon55m9JywgTm86NX1dLFxuICBjaGVjazogXCJOT05cIixcbiAgcXVlc3Rpb246IFwiU0FNUExFXCIsXG4gIGFuc3dlcjogXCLkvovpoYxcIixcbiAgYWx0ZXJuYXRpdmU6W10sXG4gIGNvcnJlY3Q6MCxcbiAgd3Jvbmc6MCxcbiAgc3RhdHVzOiBcImRlZmF1bHRcIixcbiAgcXVlc3Rpb25jb3VudDogMCxcbn1cblxuZnVuY3Rpb24gY291bnRlclJlZHVjZXIgKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJTkNSRU1FTlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTonSU5DUkVNRU5UJyxcbiAgICAgICAgY291bnQ6c3RhdGUuY291bnQgKyAxXG4gICAgICB9O1xuICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOidERUNSRU1FTlQnLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgLTFcbiAgICAgIH07XG4gICAgY2FzZSAnUkVTRVQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogJ1JFU0VUJyxcbiAgICAgICAgY291bnQ6aW5pdGlhbC5jb3VudFxuICAgICAgfTtcbiAgICAvLyDljZjoqp5yZWR1Y2VyXG4gICAgY2FzZSAnU1RBUlQnOlxuICAgICAgcmV0dXJuIHN0YXJ0UmVkdWNlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgJ0NIRUNLJzpcbiAgICAgIHJldHVybiBjaGVja1JlZHVjZShzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8g6YG45oqe6IKi5L2c5oiQ44Gu44Gf44KB44Gu5Yem55CGXG5mdW5jdGlvbiByYW5kb21TZWxlY3QoYXJyYXksIG51bSlcbntcbiAgbGV0IG5ld0FycmF5ID0gW107XG4gIFxuICB3aGlsZShuZXdBcnJheS5sZW5ndGggPCBudW0gJiYgYXJyYXkubGVuZ3RoID4gMClcbiAge1xuICAgIC8vIOmFjeWIl+OBi+OCieODqeODs+ODgOODoOOBquimgee0oOOCkumBuOOBtlxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgIC8vIOmBuOOCk+OBoOimgee0oOOCkuWIpeOBrumFjeWIl+OBq+eZu+mMsuOBmeOCi1xuICAgIG5ld0FycmF5LnB1c2goYXJyYXlbcmFuZF0pO1xuICAgIC8vIOOCguOBqOOBrumFjeWIl+OBi+OCieOBr+WJiumZpOOBmeOCi1xuICAgIGFycmF5LnNwbGljZShyYW5kLCAxKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld0FycmF5O1xufVxuXG5cbi8vIOODhuOCueODiOmWi+Wni+OBrnJlZHVjZeWHpueQhlxuZnVuY3Rpb24gc3RhcnRSZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICBsZXQgcSA9IHN0YXRlLnF1ZXN0aW9uY291bnQgKyAxO1xuICBjb25zb2xlLmxvZyhzdGF0ZS5kdGF0YVtxXS5KYXBhbmVzZSk7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTonU1RBUlQnLFxuICAgIGNvdW50OiAwLFxuXG4gICAgZGF0YTpzdGF0ZS5kdGF0YSxcbiAgICBjaGVjazpzdGF0ZS5jaGVjayxcbiAgICBxdWVzdGlvbjogc3RhdGUuZGF0YVtxXS5FbmdsaXNoLFxuICAgIGFuc3dlcjogc3RhdGUuZGF0YVtxXS5KYXBhbmVzZSxcbiAgICBhbHRlcm5hdGl2ZTpbc3RhdGUuZGF0YVtxKzFdLkphcGFuZXNlLFxuICAgICAgICAgICAgICAgIHN0YXRlLmRhdGFbcSsyXS5KYXBhbmVzZSxcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYXRhW3ErM10uSmFwYW5lc2VdLFxuICAgIGNvcnJlY3Q6c3RhdGUuY29ycmVjdCxcbiAgICB3cm9uZzpzdGF0ZS53cm9uZyxcbiAgICBzdGF0dXM6IFwic3RhcnRcIixcbiAgICBxdWVzdGlvbmNvdW50OiBxLFxuICB9XG59XG4vLyDjg4bjgrnjg4jnrZTjgYjlkIjjgo/jgZvjga5yZWR1Y2VcbmZ1bmN0aW9uIGNoZWNrUmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAgbGV0IGMgPSBhY3Rpb24uY2hvaXNlO1xuICBsZXQgYSA9IHN0YXRlLmRhdGFbc3RhdGUucXVlc3Rpb25jb3VudF0uTm87XG4gIGlmIChhPT1jKXtcbiAgICBjaGVjayA9IFwiY29ycmVjdFwiO1xuICAgIGNvcnJlY3QgPSBzdGF0ZS5jb3JyZWN0ICsgMTtcbiAgfWVsc2V7XG4gICAgY2hlY2sgPSBcIndyb25nXCI7XG4gICAgd3JvbmcgPSBzdGF0ZS53cm9uZyArIDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOidTVEFSVCcsXG4gICAgY291bnQ6IDAsXG5cbiAgICBkYXRhOnN0YXRlLmR0YXRhLFxuICAgIGNoZWNrOiBjaGVjayxcbiAgICBxdWVzdGlvbjogc3RhdGUucXVlc3Rpb24sXG4gICAgYW5zd2VyOiBzdGF0ZS5hbnN3ZXIsXG4gICAgYWx0ZXJuYXRpdmU6W10sXG4gICAgY29ycmVjdDpjb3JyZWN0LFxuICAgIHdyb25nOndyb25nLFxuICAgIHN0YXR1czogXCJjaGVja1wiLFxuICAgIHF1ZXN0aW9uY291bnQ6IHN0YXRlLnF1ZXN0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFRlc3QoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1NUQVJUJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Rlc3QoY2hvaXNlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0NIRUNLJyxcbiAgICBjaG9pc2U6IGNob2lzZVxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZSA9IGluaXRpYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBzdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})