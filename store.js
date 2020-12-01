import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initial = {
  // 単語ステート
  data:[{English:'apple', Japanese:'りんご', No:1},
        {English:'banana', Japanese:'バナナ', No:2},
        {English:'chocolate', Japanese:'チョコレート', No:3},
        {English:'red', Japanese:'赤', No:4},
        {English:'white', Japanese:'白', No:5},
        {English:'apple', Japanese:'りんご', No:1},
        {English:'banana', Japanese:'バナナ', No:2},
        {English:'chocolate', Japanese:'チョコレート', No:3},
        {English:'red', Japanese:'赤', No:4},
        {English:'white', Japanese:'白', No:5}],
  check: "NON",
  question: "SAMPLE",
  answer: "例題",
  alternative:[],
  correct:0,
  wrong:0,
  status: "default",
  questioncount: 0,
}

function counterReducer (state = initial, action) {
  switch (action.type) {
    // 単語reducer
    case 'START':
      return startReduce(state, action);
    case 'CHECK':
      return checkReduce(state, action);

    default:
      return state;
  }
}

// 選択肢作成のための処理
function randomSelect(array, num)
{
  let newArray = [];
  
  while(newArray.length < num && array.length > 0)
  {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * array.length);
    // 選んだ要素を別の配列に登録する
    newArray.push(array[rand]);
    // もとの配列からは削除する
    array.splice(rand, 1);
  }
  
  return newArray;
}


// テスト開始のreduce処理
function startReduce(state, action) {
  let q = state.questioncount + 1;
  console.log(state.data);
  console.log(q);
  console.log(state.data[q].Japanese);
  return {
    data:state.data,
    check:"NON",
    question: state.data[q].English,
    answer: state.data[q].Japanese,
    alternative:[state.data[q+1].Japanese,
                state.data[q+2].Japanese,
                state.data[q+3].Japanese],
    correct:state.correct,
    wrong:state.wrong,
    status: "start",
    questioncount: q,
  }
}
// テスト答え合わせのreduce
function checkReduce(state, action) {
  let c = action.choise;
  let check, correct, wrong;
  if (c=="t"){
    check = "correct";
    correct = state.correct + 1;
  }else{
    check = "wrong";
    wrong = state.wrong + 1;
  }
  return {
    data:state.data,
    check: check,
    question: state.question,
    answer: state.answer,
    alternative: state.alternative,
    correct:correct,
    wrong:wrong,
    status: "check",
    questioncount: state.questioncount,
  }
}

export function startTest() {
  return {
    type: 'START'
  }
}

export function checkTest(choise) {
  return {
    type: 'CHECK',
    choise: choise
  }
}


export function initStore(state = initial) {
  return createStore(counterReducer, state, applyMiddleware(thunkMiddleware))
}
