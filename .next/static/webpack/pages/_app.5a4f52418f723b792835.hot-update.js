webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: startTest, checkTest, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTest\", function() { return startTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTest\", function() { return checkTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar initial = {\n  // 単語ステート\n  data: [{\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }, {\n    English: 'apple',\n    Japanese: 'りんご',\n    No: 1\n  }, {\n    English: 'banana',\n    Japanese: 'バナナ',\n    No: 2\n  }, {\n    English: 'chocolate',\n    Japanese: 'チョコレート',\n    No: 3\n  }, {\n    English: 'red',\n    Japanese: '赤',\n    No: 4\n  }, {\n    English: 'white',\n    Japanese: '白',\n    No: 5\n  }],\n  check: \"NON\",\n  question: \"SAMPLE\",\n  answer: \"例題\",\n  alternative: [],\n  correct: 0,\n  wrong: 0,\n  status: \"default\",\n  questioncount: 0\n};\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    // 単語reducer\n    case 'START':\n      return startReduce(state, action);\n\n    case 'CHECK':\n      return checkReduce(state, action);\n\n    default:\n      return state;\n  }\n} // 選択肢作成のための処理\n\n\nfunction randomSelect(array, num) {\n  var newArray = [];\n\n  while (newArray.length < num && array.length > 0) {\n    // 配列からランダムな要素を選ぶ\n    var rand = Math.floor(Math.random() * array.length); // 選んだ要素を別の配列に登録する\n\n    newArray.push(array[rand]); // もとの配列からは削除する\n\n    array.splice(rand, 1);\n  }\n\n  return newArray;\n} // テスト開始のreduce処理\n\n\nfunction startReduce(state, action) {\n  var q = state.questioncount + 1;\n  console.log(state.data);\n  cono;\n  console.log(state.data[q].Japanese);\n  return {\n    message: 'START',\n    count: 0,\n    data: state.data,\n    check: state.check,\n    question: state.data[q].English,\n    answer: state.data[q].Japanese,\n    alternative: [state.data[q + 1].Japanese, state.data[q + 2].Japanese, state.data[q + 3].Japanese],\n    correct: state.correct,\n    wrong: state.wrong,\n    status: \"start\",\n    questioncount: q\n  };\n} // テスト答え合わせのreduce\n\n\nfunction checkReduce(state, action) {\n  var c = action.choise;\n  var check, correct, wrong;\n\n  if (c == \"t\") {\n    check = \"correct\";\n    correct = state.correct + 1;\n  } else {\n    check = \"wrong\";\n    wrong = state.wrong + 1;\n  }\n\n  return {\n    message: 'START',\n    count: 0,\n    data: state.data,\n    check: check,\n    question: state.question,\n    answer: state.answer,\n    alternative: state.alternative,\n    correct: correct,\n    wrong: wrong,\n    status: \"check\",\n    questioncount: state.question\n  };\n}\n\nfunction startTest() {\n  return {\n    type: 'START'\n  };\n}\nfunction checkTest(choise) {\n  return {\n    type: 'CHECK',\n    choise: choise\n  };\n}\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwiZGF0YSIsIkVuZ2xpc2giLCJKYXBhbmVzZSIsIk5vIiwiY2hlY2siLCJxdWVzdGlvbiIsImFuc3dlciIsImFsdGVybmF0aXZlIiwiY29ycmVjdCIsIndyb25nIiwic3RhdHVzIiwicXVlc3Rpb25jb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhcnRSZWR1Y2UiLCJjaGVja1JlZHVjZSIsInJhbmRvbVNlbGVjdCIsImFycmF5IiwibnVtIiwibmV3QXJyYXkiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInEiLCJjb25zb2xlIiwibG9nIiwiY29ubyIsIm1lc3NhZ2UiLCJjb3VudCIsImMiLCJjaG9pc2UiLCJzdGFydFRlc3QiLCJjaGVja1Rlc3QiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkO0FBQ0FDLE1BQUksRUFBQyxDQUFDO0FBQUNDLFdBQU8sRUFBQyxPQUFUO0FBQWtCQyxZQUFRLEVBQUMsS0FBM0I7QUFBa0NDLE1BQUUsRUFBQztBQUFyQyxHQUFELEVBQ0M7QUFBQ0YsV0FBTyxFQUFDLFFBQVQ7QUFBbUJDLFlBQVEsRUFBQyxLQUE1QjtBQUFtQ0MsTUFBRSxFQUFDO0FBQXRDLEdBREQsRUFFQztBQUFDRixXQUFPLEVBQUMsV0FBVDtBQUFzQkMsWUFBUSxFQUFDLFFBQS9CO0FBQXlDQyxNQUFFLEVBQUM7QUFBNUMsR0FGRCxFQUdDO0FBQUNGLFdBQU8sRUFBQyxLQUFUO0FBQWdCQyxZQUFRLEVBQUMsR0FBekI7QUFBOEJD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TEMsVUFBTSxFQUFFLE9BWEg7QUFZTEMsaUJBQWEsRUFBRUUsS0FBSyxDQUFDUjtBQVpoQixHQUFQO0FBY0Q7O0FBRU0sU0FBU2dDLFNBQVQsR0FBcUI7QUFDMUIsU0FBTztBQUNMdEIsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdEO0FBRU0sU0FBU3VCLFNBQVQsQ0FBbUJGLE1BQW5CLEVBQTJCO0FBQ2hDLFNBQU87QUFDTHJCLFFBQUksRUFBRSxPQUREO0FBRUxxQixVQUFNLEVBQUVBO0FBRkgsR0FBUDtBQUlEO0FBR00sU0FBU0csU0FBVCxHQUFvQztBQUFBLE1BQWpCMUIsS0FBaUIsdUVBQVRkLE9BQVM7QUFDekMsU0FBT3lDLHlEQUFXLENBQUM1QixjQUFELEVBQWlCQyxLQUFqQixFQUF3QjRCLDZEQUFlLENBQUNDLG1EQUFELENBQXZDLENBQWxCO0FBQ0QiLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgaW5pdGlhbCA9IHtcbiAgLy8g5Y2Y6Kqe44K544OG44O844OIXG4gIGRhdGE6W3tFbmdsaXNoOidhcHBsZScsIEphcGFuZXNlOifjgorjgpPjgZQnLCBObzoxfSxcbiAgICAgICAge0VuZ2xpc2g6J2JhbmFuYScsIEphcGFuZXNlOifjg5Djg4rjg4onLCBObzoyfSxcbiAgICAgICAge0VuZ2xpc2g6J2Nob2NvbGF0ZScsIEphcGFuZXNlOifjg4Hjg6fjgrPjg6zjg7zjg4gnLCBObzozfSxcbiAgICAgICAge0VuZ2xpc2g6J3JlZCcsIEphcGFuZXNlOifotaQnLCBObzo0fSxcbiAgICAgICAge0VuZ2xpc2g6J3doaXRlJywgSmFwYW5lc2U6J+eZvScsIE5vOjV9LFxuICAgICAgICB7RW5nbGlzaDonYXBwbGUnLCBKYXBhbmVzZTon44KK44KT44GUJywgTm86MX0sXG4gICAgICAgIHtFbmdsaXNoOidiYW5hbmEnLCBKYXBhbmVzZTon44OQ44OK44OKJywgTm86Mn0sXG4gICAgICAgIHtFbmdsaXNoOidjaG9jb2xhdGUnLCBKYXBhbmVzZTon44OB44On44Kz44Os44O844OIJywgTm86M30sXG4gICAgICAgIHtFbmdsaXNoOidyZWQnLCBKYXBhbmVzZTon6LWkJywgTm86NH0sXG4gICAgICAgIHtFbmdsaXNoOid3aGl0ZScsIEphcGFuZXNlOifnmb0nLCBObzo1fV0sXG4gIGNoZWNrOiBcIk5PTlwiLFxuICBxdWVzdGlvbjogXCJTQU1QTEVcIixcbiAgYW5zd2VyOiBcIuS+i+mhjFwiLFxuICBhbHRlcm5hdGl2ZTpbXSxcbiAgY29ycmVjdDowLFxuICB3cm9uZzowLFxuICBzdGF0dXM6IFwiZGVmYXVsdFwiLFxuICBxdWVzdGlvbmNvdW50OiAwLFxufVxuXG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlciAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIC8vIOWNmOiqnnJlZHVjZXJcbiAgICBjYXNlICdTVEFSVCc6XG4gICAgICByZXR1cm4gc3RhcnRSZWR1Y2Uoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSAnQ0hFQ0snOlxuICAgICAgcmV0dXJuIGNoZWNrUmVkdWNlKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyDpgbjmip7ogqLkvZzmiJDjga7jgZ/jgoHjga7lh6bnkIZcbmZ1bmN0aW9uIHJhbmRvbVNlbGVjdChhcnJheSwgbnVtKVxue1xuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgXG4gIHdoaWxlKG5ld0FycmF5Lmxlbmd0aCA8IG51bSAmJiBhcnJheS5sZW5ndGggPiAwKVxuICB7XG4gICAgLy8g6YWN5YiX44GL44KJ44Op44Oz44OA44Og44Gq6KaB57Sg44KS6YG444G2XG4gICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgLy8g6YG444KT44Gg6KaB57Sg44KS5Yil44Gu6YWN5YiX44Gr55m76Yyy44GZ44KLXG4gICAgbmV3QXJyYXkucHVzaChhcnJheVtyYW5kXSk7XG4gICAgLy8g44KC44Go44Gu6YWN5YiX44GL44KJ44Gv5YmK6Zmk44GZ44KLXG4gICAgYXJyYXkuc3BsaWNlKHJhbmQsIDEpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cblxuLy8g44OG44K544OI6ZaL5aeL44GucmVkdWNl5Yem55CGXG5mdW5jdGlvbiBzdGFydFJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBxID0gc3RhdGUucXVlc3Rpb25jb3VudCArIDE7XG4gIGNvbnNvbGUubG9nKHN0YXRlLmRhdGEpO1xuICBjb25vXG4gIGNvbnNvbGUubG9nKHN0YXRlLmRhdGFbcV0uSmFwYW5lc2UpO1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6J1NUQVJUJyxcbiAgICBjb3VudDogMCxcblxuICAgIGRhdGE6c3RhdGUuZGF0YSxcbiAgICBjaGVjazpzdGF0ZS5jaGVjayxcbiAgICBxdWVzdGlvbjogc3RhdGUuZGF0YVtxXS5FbmdsaXNoLFxuICAgIGFuc3dlcjogc3RhdGUuZGF0YVtxXS5KYXBhbmVzZSxcbiAgICBhbHRlcm5hdGl2ZTpbc3RhdGUuZGF0YVtxKzFdLkphcGFuZXNlLFxuICAgICAgICAgICAgICAgIHN0YXRlLmRhdGFbcSsyXS5KYXBhbmVzZSxcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYXRhW3ErM10uSmFwYW5lc2VdLFxuICAgIGNvcnJlY3Q6c3RhdGUuY29ycmVjdCxcbiAgICB3cm9uZzpzdGF0ZS53cm9uZyxcbiAgICBzdGF0dXM6IFwic3RhcnRcIixcbiAgICBxdWVzdGlvbmNvdW50OiBxLFxuICB9XG59XG4vLyDjg4bjgrnjg4jnrZTjgYjlkIjjgo/jgZvjga5yZWR1Y2VcbmZ1bmN0aW9uIGNoZWNrUmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAgbGV0IGMgPSBhY3Rpb24uY2hvaXNlO1xuICBsZXQgY2hlY2ssIGNvcnJlY3QsIHdyb25nO1xuICBpZiAoYz09XCJ0XCIpe1xuICAgIGNoZWNrID0gXCJjb3JyZWN0XCI7XG4gICAgY29ycmVjdCA9IHN0YXRlLmNvcnJlY3QgKyAxO1xuICB9ZWxzZXtcbiAgICBjaGVjayA9IFwid3JvbmdcIjtcbiAgICB3cm9uZyA9IHN0YXRlLndyb25nICsgMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6J1NUQVJUJyxcbiAgICBjb3VudDogMCxcblxuICAgIGRhdGE6c3RhdGUuZGF0YSxcbiAgICBjaGVjazogY2hlY2ssXG4gICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uLFxuICAgIGFuc3dlcjogc3RhdGUuYW5zd2VyLFxuICAgIGFsdGVybmF0aXZlOiBzdGF0ZS5hbHRlcm5hdGl2ZSxcbiAgICBjb3JyZWN0OmNvcnJlY3QsXG4gICAgd3Jvbmc6d3JvbmcsXG4gICAgc3RhdHVzOiBcImNoZWNrXCIsXG4gICAgcXVlc3Rpb25jb3VudDogc3RhdGUucXVlc3Rpb24sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VGVzdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnU1RBUlQnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVGVzdChjaG9pc2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0hFQ0snLFxuICAgIGNob2lzZTogY2hvaXNlXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})